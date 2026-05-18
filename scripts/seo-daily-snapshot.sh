#!/usr/bin/env bash
#
# Daily SEO measurement loop.
#
# Snapshots Google Search Console + Google Analytics 4 for vastucart.in,
# writes them under reports/gsc/daily/ and reports/ga4/daily/ with the
# current date, then diffs against the previous-run snapshot and prints
# a one-screen summary of impression / click / session deltas.
#
# Designed to be run from a daily cron (or manually) from the repo root:
#
#   bash scripts/seo-daily-snapshot.sh
#
# Cron example (07:30 IST daily):
#   30 7 * * * cd /path/to/vastucartmain && bash scripts/seo-daily-snapshot.sh \
#               >> reports/seo-daily.log 2>&1
#
# Dependencies:
#   - /root/.config/claude-seo/oauth_token.json (the shared OAuth token
#     referenced by the gsc_/ga4_ Python helpers)
#   - The two Python helpers under /root/.config/claude-seo/scripts/.
#     Both refresh the OAuth token in-place when expired, so this script
#     needs no extra auth handling.
#
# Output:
#   reports/gsc/daily/YYYY-MM-DD.json   — full GSC dump (pages, queries, etc.)
#   reports/ga4/daily/YYYY-MM-DD.json   — full GA4 organic dump
#   reports/seo-daily-summary.txt       — one-page summary (latest run wins)

set -euo pipefail

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$REPO_ROOT"

DATE="$(date +%Y-%m-%d)"
GSC_DIR="reports/gsc/daily"
GA4_DIR="reports/ga4/daily"
SUMMARY="reports/seo-daily-summary.txt"
SCRIPTS_DIR="/root/.config/claude-seo/scripts"

# Property identifiers — keep in sync with reports/audit-report.md.
GSC_PROPERTY="sc-domain:vastucart.in"
GA4_PROPERTY_ID="518094707"   # VastuCart Tools (vastucart.in)

mkdir -p "$GSC_DIR" "$GA4_DIR"

GSC_OUT="$GSC_DIR/$DATE.json"
GA4_OUT="$GA4_DIR/$DATE.json"

echo "==> Daily SEO snapshot — $DATE"

python3 "$SCRIPTS_DIR/gsc_search_analytics.py" \
  --property "$GSC_PROPERTY" \
  --days 28 \
  --output "$GSC_OUT" 2>&1 | sed 's/^/  [gsc] /'

python3 "$SCRIPTS_DIR/ga4_organic.py" \
  --property-id "$GA4_PROPERTY_ID" \
  --days 28 \
  --output "$GA4_OUT" 2>&1 | sed 's/^/  [ga4] /'

# Find the previous snapshot (sorted by name; YYYY-MM-DD is lexically sortable)
PREV_GSC="$(find "$GSC_DIR" -maxdepth 1 -name '*.json' ! -name "$DATE.json" -printf '%f\n' 2>/dev/null | sort | tail -1)"
PREV_GA4="$(find "$GA4_DIR" -maxdepth 1 -name '*.json' ! -name "$DATE.json" -printf '%f\n' 2>/dev/null | sort | tail -1)"

python3 - <<EOF | tee "$SUMMARY"
import json, os
from pathlib import Path

cur_gsc = json.loads(Path("$GSC_OUT").read_text())
cur_ga4 = json.loads(Path("$GA4_OUT").read_text())

prev_gsc = None
prev_ga4 = None
if "$PREV_GSC":
    prev_gsc = json.loads(Path("$GSC_DIR/$PREV_GSC").read_text())
if "$PREV_GA4":
    prev_ga4 = json.loads(Path("$GA4_DIR/$PREV_GA4").read_text())

print(f"==> Summary — {('$DATE'):>10s}")
print()

# ---- GSC totals ----
gs = cur_gsc["summary"]
print(f"GSC ({cur_gsc['start']} → {cur_gsc['end']})")
print(f"  pages with impressions: {gs['pages_with_any_impression']}")
print(f"  total impressions:      {gs['total_impressions']}")
print(f"  total clicks:           {gs['total_clicks']}")
ctr = (gs['total_clicks']/gs['total_impressions']*100) if gs['total_impressions'] else 0
print(f"  CTR:                    {ctr:.3f}%")

if prev_gsc:
    ps = prev_gsc["summary"]
    delta_imp = gs['total_impressions'] - ps['total_impressions']
    delta_clk = gs['total_clicks'] - ps['total_clicks']
    delta_pages = gs['pages_with_any_impression'] - ps['pages_with_any_impression']
    print(f"  vs $PREV_GSC: pages {delta_pages:+d}  imp {delta_imp:+d}  clicks {delta_clk:+d}")

# ---- GA4 organic ----
print()
print(f"GA4 organic (last 28 days)")
rows = cur_ga4.get("rows", [])
org_rows = [r for r in rows if (r.get("dimensionValues") or [{}, {}])[1].get("value", "").startswith("Organic")]
org_sessions = sum(int((r.get("metricValues") or [{}])[0].get("value", 0)) for r in org_rows)
org_users = sum(int((r.get("metricValues") or [{}, {}])[1].get("value", 0)) for r in org_rows)
print(f"  organic sessions: {org_sessions}")
print(f"  organic users:    {org_users}")
print(f"  organic rows:     {len(org_rows)}")

if prev_ga4:
    prev_rows = prev_ga4.get("rows", [])
    prev_org = [r for r in prev_rows if (r.get("dimensionValues") or [{}, {}])[1].get("value", "").startswith("Organic")]
    prev_sessions = sum(int((r.get("metricValues") or [{}])[0].get("value", 0)) for r in prev_org)
    print(f"  vs $PREV_GA4: sessions {org_sessions - prev_sessions:+d}")

# ---- Per-page deltas (top movers) ----
if prev_gsc:
    print()
    print("Top page-level movers (|Δimp| ≥ 3):")
    prev_by_url = {r["keys"][0]: r for r in prev_gsc["by_page"]}
    movers = []
    for r in cur_gsc["by_page"]:
        url = r["keys"][0]
        imp = r.get("impressions", 0)
        prev_imp = prev_by_url.get(url, {}).get("impressions", 0)
        delta = imp - prev_imp
        if abs(delta) >= 3:
            movers.append((delta, imp, r.get("clicks", 0), r.get("position", 0), url))
    # New URLs (zero prev) at the top, then gainers, then losers.
    movers.sort(key=lambda m: -m[0])
    for delta, imp, clk, pos, url in movers[:25]:
        marker = "+" if delta > 0 else "-"
        print(f"  {marker}{abs(delta):4d}  imp={imp:4d} clk={clk:3d} pos={pos:5.1f}  {url}")
EOF

echo
echo "==> Snapshot complete."
echo "    GSC:     $GSC_OUT"
echo "    GA4:     $GA4_OUT"
echo "    Summary: $SUMMARY"
