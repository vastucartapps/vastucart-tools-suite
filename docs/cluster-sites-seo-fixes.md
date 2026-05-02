# VastuCart Cluster Sites — SEO Fixes Handoff

**Audit date:** 2026-05-02
**Audited from:** vastucart.in repo (this terminal)
**Targets:** the 9 sister subdomains (each on its own codebase / terminal)
**Authoritative reference:** `public/00-shared-contracts.md` (§2.3 Sub-brand `@id`s, §2.4 WebSite `@id`s)

This doc lists per-subdomain SEO defects detected from the **outside** (live HTTP probes only — no source access). Hand each section to the agent/terminal that owns that subdomain. Reproducer commands are included so the receiving terminal can verify the issue without re-running this audit.

> Scope note: this audit only inspected each subdomain's homepage HTML, `robots.txt`, and `sitemap.xml` HEAD. A full site crawl per subdomain is out of scope here — open a separate audit ticket on each subdomain for that.

---

## Summary table

| Subdomain | HTTP | Robots OK | Canonical | Hreflang | JSON-LD | Critical issues |
|---|---|---|---|---|---|---|
| kundali.vastucart.in | 200 | (not yet probed in detail) | — | — | — | Not in original 8-list; treat as 9th |
| store.vastucart.in | 200 | ⚠ broken sitemap | **MISSING** | 0 | 1 | Sitemap points to dead `vastucart.com`; no canonical |
| blog.vastucart.in | 200 | ✅ | ✅ | 1 | 1 | Generally clean |
| panchang.vastucart.in | 200 | ⚠ no `User-agent: *` | ✅ | 0 | 2 | Missing wildcard in robots.txt; missing hreflang |
| stotra.vastucart.in | 200 | ✅ | ✅ | **0** | 2 | No hreflang despite Sanskrit/Hindi content |
| horoscope.vastucart.in | 200 | ⚠ no `User-agent: *` | ✅ | 1 | 2 | Missing wildcard in robots.txt |
| muhurta.vastucart.in | 200 | ✅ | ✅ | 1 | 1 | Generally clean |
| wedding.vastucart.in | 200 | 🚨 blocks AI crawlers | ✅ | 1 | 1 | Blocks GPTBot, Claude, CCBot, Google-Extended — kills GEO |
| tarot.vastucart.in | **503** | — | — | — | — | Origin unreachable from Cloudflare. Site is fully down |

Reproduce all of the above with:
```bash
for h in kundali store blog panchang stotra horoscope muhurta wedding tarot; do
  echo "=== $h.vastucart.in ==="
  curl -sIL --max-time 12 "https://$h.vastucart.in/" -o /dev/null -w "%{http_code}\n"
  curl -sL --max-time 12 "https://$h.vastucart.in/robots.txt" | head -10
done
```

---

## 🚨 P0 — Tarot is fully down

**Owner:** `tarot.vastucart.in` repo / terminal

**Symptom:**
```
HTTP/2 503
server: cloudflare
cf-cache-status: DYNAMIC
content-type: text/plain; charset=utf-8
content-length: 20
[body: "no available server"]
```

Persistent across 3 retries, 5-second intervals. Cloudflare returns 503 because the origin server it's configured to forward to is unreachable. This is **not** a Cloudflare WAF block (no `cf-mitigated` header) — it is an origin reachability failure.

**Likely causes** (in order of probability):
1. The origin server has crashed / been deprovisioned.
2. Cloudflare's origin record (Tunnel target, A/AAAA record on the dashboard, or origin pull host) points at a host that no longer exists.
3. Origin is up but firewalled against Cloudflare's IP ranges (rare — would more typically time out, not return 503).

**Reproducer:**
```bash
curl -sIL --max-time 12 https://tarot.vastucart.in/ -o /dev/null -w "HTTP %{http_code}\n"
curl -s --max-time 12 https://tarot.vastucart.in/ | head -5
```

**Fix steps:**
1. Check Cloudflare dashboard → DNS → origin record for `tarot.vastucart.in`. Confirm it points at the correct origin (Vercel / Render / VPS / Tunnel hostname).
2. Independently verify the origin is up: SSH into the VPS / check Vercel deploy / look at Cloudflare Tunnel status.
3. If origin is dead, redeploy. If origin is up but unreachable, check origin's firewall/SecurityGroup is allowing Cloudflare IP ranges (https://www.cloudflare.com/ips/).
4. Once 200 returns, immediately verify: `<title>`, robots meta, canonical, JSON-LD, hreflang.

**Until tarot is back up:** any inbound traffic from Google sees a 503, which Google may interpret as a temporary outage (no immediate de-indexing) but persistent 503s for >2 weeks can lead to URL removal. Aim for <48h MTTR.

---

## 🚨 P0 — store.vastucart.in robots.txt points to dead `.com` domain

**Owner:** `store.vastucart.in` repo / terminal

**Live `robots.txt`:**
```
User-Agent: *
Allow: /
Disallow: /admin/
Disallow: /cart/
Disallow: /checkout/
Disallow: /api/

Sitemap: https://vastucart.com/sitemap.xml          ← DEAD (parked at Hostinger)
Sitemap: https://vastucart.in/sitemap.xml           ← apex, redirects to www
Sitemap: https://kundali.vastucart.in/sitemap.xml
Sitemap: https://store.vastucart.in/sitemap.xml
Sitemap: https://blog.vastucart.in/sitemap.xml
Sitemap: https://panchang.vastucart.in/sitemap.xml
Sitemap: https://stotra.vastucart.in/sitemap.xml
Sitemap: https://horoscope.vastucart.in/sitemap.xml
Sitemap: https://muhurta.vastucart.in/sitemap.xml
Sitemap: https://wedding.vastucart.in/sitemap.xml
Sitemap: https://tarot.vastucart.in/sitemap.xml     ← currently 503
```

**Issues:**
1. **`vastucart.com` is a parked Hostinger domain** (resolves to `2.57.91.91`, serves a "Parked Domain name" page, robots.txt: `Disallow: /`, meta robots: `noindex, nofollow`). Cross-listing it as a sitemap source teaches Google that this brand is associated with a dead domain.
2. `vastucart.in` is the apex which 301→`www.vastucart.in`. Either remove or update to `https://www.vastucart.in/sitemap.xml`.
3. `tarot.vastucart.in/sitemap.xml` currently 503s — keep but unblock by fixing tarot first.

**Cross-listing other subdomains' sitemaps from your robots.txt is generally fine** for cross-discovery, **but** Google only fetches sitemaps from a robots.txt that's on the same hostname as the URLs in those sitemaps — so this listing primarily helps Bing and ad-hoc crawler discovery, not Google indexing.

**Reproducer:**
```bash
curl -sL --max-time 12 https://store.vastucart.in/robots.txt
```

**Fix:** Remove the `vastucart.com` line. Either remove the apex `vastucart.in` line or change it to `www.vastucart.in`. Keep the rest.

---

## 🚨 P0 — store.vastucart.in homepage has no `<link rel="canonical">`

**Owner:** `store.vastucart.in` repo / terminal

Every other cluster subdomain emits a self-canonical:
```html
<link rel="canonical" href="https://blog.vastucart.in"/>      <!-- blog -->
<link rel="canonical" href="https://stotra.vastucart.in"/>    <!-- stotra -->
<link rel="canonical" href="https://muhurta.vastucart.in"/>   <!-- etc -->
```

`store.vastucart.in` does not. Google will pick a canonical itself from URL signals — usually fine, but at risk of mis-canonicalising session/UTM-parameterized URLs as the canonical.

**Reproducer:**
```bash
curl -sL --max-time 12 https://store.vastucart.in/ | grep -oiE '<link[^>]*rel=.canonical.[^>]*>'
# (should print one tag — currently prints nothing)
```

**Fix:** add to the store's root layout:
```html
<link rel="canonical" href="https://store.vastucart.in/" />
```
And programmatically generate per-product / per-collection canonicals.

---

## 🔴 P1 — Wedding subdomain blocks AI crawlers (kills GEO)

**Owner:** `wedding.vastucart.in` repo / terminal

**Live `robots.txt`:**
```
User-Agent: *
Allow: /

User-Agent: GPTBot
Disallow: /

User-Agent: CCBot
Disallow: /

User-Agent: anthropic-ai
Disallow: /

User-Agent: ClaudeBot
Disallow: /

User-Agent: Google-Extended
Disallow: /

User-Agent: FacebookBot
Disallow: /

User-Agent: Bytespider
Disallow: /
```

This blocks every major AI/LLM crawler:
- **GPTBot** → ChatGPT browse + training
- **CCBot** → Common Crawl (used by many AI training pipelines)
- **anthropic-ai / ClaudeBot** → Claude
- **Google-Extended** → Google Gemini training (does *not* affect Google Search)
- **FacebookBot** → Meta AI
- **Bytespider** → ByteDance / Doubao

**Compare to vastucart.in's robots.txt** (this repo, `public/robots.txt`), which explicitly *Allows* GPTBot, ChatGPT-User, Claude-Web, Anthropic-AI, Google-Extended, PerplexityBot, Applebot-Extended. The two strategies are 180° opposite.

**Decision needed:** is the wedding subdomain *intentionally* opted out of AI training (some businesses do this for content licensing reasons), or was the block copy-pasted from a template without thought?

**Reproducer:**
```bash
curl -sL --max-time 12 https://wedding.vastucart.in/robots.txt
```

**Recommended fix (if unintentional):** match the main site's stance — Allow these bots with `Disallow: /api/` only. AI-search citations are a meaningful traffic source for high-intent wedding-muhurta queries.

---

## 🔴 P1 — panchang & horoscope robots.txt have no `User-agent: *` fallback

**Owner:** `panchang.vastucart.in` and `horoscope.vastucart.in` (both repos)

Each only enumerates per-bot directives (Googlebot, Googlebot-Image, Googlebot-News, Google-InspectionTool, Bingbot, ChatGPT-User, OAI-SearchBot…) without a final `User-agent: *` block.

**Implication:** a crawler not in the explicit list (DuckDuckBot, YandexBot, Applebot, Slurp, AhrefsBot, MJ12Bot, etc.) finds no rule that applies to it. The robots.txt spec says: in this case, the crawler may crawl freely — but crawler implementations vary. Some default to "be conservative and skip the site" rather than "no rules so crawl everything."

**Reproducer:**
```bash
curl -sL --max-time 12 https://panchang.vastucart.in/robots.txt | head -30
curl -sL --max-time 12 https://horoscope.vastucart.in/robots.txt | head -30
```

**Fix:** append a default block at the end of each file:
```
User-agent: *
Allow: /
Disallow: /api/
```

---

## 🟡 P2 — stotra.vastucart.in has no hreflang

**Owner:** `stotra.vastucart.in` repo / terminal

The stotra site's content is bilingual ("928 Hindu Prayers in Sanskrit & Hindi") but the HTML emits **zero** `<link rel="alternate" hreflang>` tags. Google will likely pick one language version per URL and ignore the other for users in alternate locales.

**Reproducer:**
```bash
curl -sL --max-time 12 https://stotra.vastucart.in/ | grep -ciE 'rel=.alternate.[^>]*hreflang'
# returns: 0 (should be ≥ 2 for en/hi pairs, ideally 3 with x-default)
```

**Fix:** for every URL that exists in both en and hi versions, emit:
```html
<link rel="alternate" hrefLang="en" href="…english URL…" />
<link rel="alternate" hrefLang="hi" href="…hindi URL…" />
<link rel="alternate" hrefLang="x-default" href="…english URL…" />
```
Reference implementation: see `vastucart.in` repo `src/app/[locale]/layout.tsx` and the `pair()` helper in `src/app/sitemap.ts`.

---

## 🟡 P2 — Hreflang sparse on most cluster sites

| Subdomain | Hreflang count on homepage |
|---|---|
| stotra | 0 |
| panchang | 0 |
| store | 0 |
| blog | 1 (incomplete — should have 2 + x-default) |
| horoscope | 1 (same) |
| muhurta | 1 (same) |
| wedding | 1 (same) |

The `1` values are presumably a `hrefLang="x-default"` only, which doesn't substitute for actual `en` and `hi` alternates. Each cluster page that has content in both languages should emit all three: `en`, `hi`, `x-default`.

**Consequence today:** Google can't reliably surface the right language version per query, and Hindi searchers may land on English (or vice versa) and bounce.

**Reproducer (any subdomain):**
```bash
curl -sL --max-time 12 https://blog.vastucart.in/ | grep -oiE '<link[^>]*hreflang=[^>]*>'
```

---

## 🟡 P2 — Cluster subdomains absent from main www sitemap

**Where it matters:** GSC indexation discovery. Cluster sites are not in `https://www.vastucart.in/sitemap.xml`. This is the *standard* per-property pattern (Google Search Console treats each subdomain as a separate property), so each cluster site needs its own GSC property + its own sitemap submission. There is **no missing-step in the main repo here** — but if any cluster site lacks its own GSC property, it won't get indexed.

**Action required on each subdomain:** confirm its sitemap is submitted in *its own* GSC property at `https://search.google.com/search-console/`. Verify with:
```bash
curl -sL --max-time 12 https://<sub>.vastucart.in/sitemap.xml | head -3
```

If the subdomain isn't yet a GSC property, add it (Domain property preferred, since cluster subdomains share `vastucart.in`).

---

## Reference: shared contract for cluster sites

Every cluster subdomain consumes (does not redefine) entities from `public/00-shared-contracts.md` in the **vastucart.in** repo. Key points:

- **`@id` for Organization** (parent): `https://www.vastucart.in/#organization` — every subdomain references this as `publisher`, `parentOrganization`, `provider`, `organizer`.
- **`@id` for Persons** (authors): `https://blog.vastucart.in/authors/pt-raghav-sharma#person` and `https://blog.vastucart.in/authors/vastucart-editorial#person` — every subdomain references one of these as `author` based on content vertical.
- **No subdomain creates its own Organization or Person entities.** Reference via `@id` only.
- **No subdomain reciprocates `sameAs`** between sister subdomains. `sameAs` is for external identity proofs only; internal relationships use `publisher` / `parentOrganization` / `isPartOf`.

Each cluster terminal: read `public/00-shared-contracts.md` end-to-end before touching schema. The full file is in the vastucart.in repo and is the source of truth.

---

## Suggested ordering for the cluster terminals

1. **tarot terminal** → fix 503 origin first (P0). Nothing else matters until pages actually serve.
2. **store terminal** → fix `robots.txt` Sitemap entries + add canonical (P0, ~30 min total).
3. **wedding terminal** → decide on AI-crawler policy and update `robots.txt` (P1, ~10 min).
4. **panchang + horoscope terminals** → append `User-agent: *` block to `robots.txt` (P1, ~5 min each).
5. **stotra terminal** → add hreflang to bilingual pages (P2, ~1–2 hours depending on template architecture).
6. **all 9 terminals** (sweep) → audit hreflang completeness for every URL with both `en` and `hi` content. Verify each has its own GSC property with sitemap submitted.

Each terminal should run their own `/seo audit https://<their-subdomain>.vastucart.in` after fixes (claude-seo skill is installed user-globally — available in any directory).
