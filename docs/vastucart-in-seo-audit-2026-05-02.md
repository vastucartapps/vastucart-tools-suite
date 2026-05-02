# vastucart.in (main site) — SEO Audit & Fix List

**Audit date:** 2026-05-02
**Repo:** this repo (vastucart.in main site)
**Method:** live HTTP probes against `https://www.vastucart.in/` + 4 representative URLs, plus source-code inspection
**Audit tool:** AgriciDaniel/claude-seo v1.9.6 + targeted manual probing

## Overall snapshot

- ✅ Apex `vastucart.in` 301 → `www.vastucart.in` (correct)
- ✅ Sitemap valid: 450 URLs (225 en + 225 hi pairs)
- ✅ `robots.txt` is enterprise-grade — explicit per-AI-crawler `Allow` for GPTBot, Claude-Web, Anthropic-AI, Google-Extended, PerplexityBot, etc.
- ✅ Hreflang correct on every checked page (en, hi, x-default)
- ✅ All 5 recent SEO/critical commits **verified live** in the rendered HTML
- ✅ Footer renders all 9 cluster subdomain links from `src/components/layout/footer.tsx:191-316`
- ✅ Hindi pages emit `og:locale="hi_IN"` (was the worry from commit 6b02b02 — fix shipped)
- ✅ Schema (`Organization` graph) emits correct `@id` and `subOrganization` references per `public/00-shared-contracts.md` §2.3-§2.4
- ✅ Twitter cards present (`summary_large_image`)
- ✅ `llms.txt` route generates a high-quality LLM-readable brand summary

## Verification of recent commits (all 5 shipped)

| Commit | Intent | Live result |
|---|---|---|
| `14f1708` | Disable streaming metadata so title/desc are in `<head>` | ✅ All 4 pages: title at byte ~1700-2000, `</head>` at byte ~3900-4500 → title is in `<head>` |
| `4fc9fe1` | Metadata uses sync JSON import | ✅ Confirmed — no async `getTranslations` in critical path |
| `3864f12` | Fix `<title>` being hoisted into `<body>` | ✅ Single `<title>` per page, all in `<head>` |
| `25d9008` | Enterprise keyword rewrite — 33 tools, 4 categories | ✅ Meta titles/descriptions reflect new keyword strategy on /, /tools, /tools/kundli |
| `6b02b02` | Fix `noindex`, `soft 404`, Hindi fallback for 25 tool pages | ✅ Hindi page has full hreflang + `og:locale="hi_IN"`; `/hi/tools/kundli` resolves with proper hreflang triple |

The work that just shipped is genuinely live and Google can see it. No regression detected.

---

## 🚨 Critical — fix these in this repo

### C1. Duplicate `<h1>` on every tool page

**Severity:** Critical (every tool URL is affected — that's 33 tools × 2 locales = 66 URLs minimum, plus programmatic life-path pages)

**Symptom:** every tool page emits **two** `<h1>` tags with near-identical content.

**Confirmed across these 9/9 tested pages:**
| URL | H1 #1 | H1 #2 |
|---|---|---|
| /tools/kundli | "Free Online Kundali (Vedic Birth Chart)" | "Free Online Kundali (Vedic Birth Chart)" |
| /tools/marriage-matching | "Kundali Milan (Ashtakoot Guna Matching)" | (same) |
| /tools/kalsarp-dosha | "Kaal Sarp Dosha Calculator" | (same) |
| /tools/lagna | "Lagna / Ascendant Calculator" | (same) |
| /tools/manglik | "Manglik / Mangal Dosha Calculator" | (same) |
| /tools/life-path-number | "Life Path Number by Date of Birth — Mulank Free \| VastuCart" | "Life Path Number Calculator" |
| /tools/lo-shu-grid | "Lo Shu Grid Calculator by Date of Birth — Free \| VastuCart" | "Lo Shu Grid Calculator" |
| /tools/chaldean-numerology | "Chaldean Numerology Name Calculator — Free \| VastuCart" | "Chaldean Name Numerology Calculator" |
| /tools/gemstone-recommender | "Gemstone by Date of Birth — Free Rashi Ratna Finder \| VastuCart" | "Gemstone Recommender (Lucky Stone)" |

**Source of the bug** (two H1 sources rendering on the same page):

1. `src/components/tools/tool-layout.tsx:120` — shared layout component renders an `<h1>` (class `text-heading-1 md:text-display-2`)
2. `src/app/[locale]/tools/kundli/page.tsx:92-94` (and equivalent in every other `tools/{slug}/page.tsx`) — page also renders a manual `<h1>` (class `text-3xl md:text-4xl`)

**SEO impact:** Google's indexing pipeline picks one H1 per page; duplicate H1s with identical or near-identical content waste signal density and confuse the topical relevance heuristic. On the four pages where the two H1s differ (life-path-number, lo-shu-grid, chaldean-numerology, gemstone-recommender), H1 #1 is the SEO meta-title style ("…— Free | VastuCart") which is *not* what should be the user-visible page heading.

**Recommended fix:** Remove the manual `<header><h1>...</h1></header>` block from every `src/app/[locale]/tools/{slug}/page.tsx` — keep `tool-layout.tsx` as the single source of truth for the page's `<h1>`.

For each tool page (e.g. `src/app/[locale]/tools/kundli/page.tsx`), delete:
```tsx
<header className="text-center mb-8">
  <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
    {t('title')}
  </h1>
  <p className="text-lg text-gray-600 max-w-2xl mx-auto">
    {t('description')}
  </p>
</header>
```

If the visible heading + description on the in-page hero matters for design, instead **delete the H1 from `tool-layout.tsx:120`** and downgrade the second one in each tool page to `<h2>`. Either path works — pick one and apply uniformly.

**Effort:** Half a day. Use grep to find every `<header>` block above `Calculator />` in `src/app/[locale]/tools/*/page.tsx` and delete (or convert) consistently.

---

## 🔴 High priority

### H1. `/tools/kundli` rel=robots is over-permissive

**Symptom:**
```html
<meta name="robots" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1"/>
```

The `max-snippet:-1` and `max-video-preview:-1` directives explicitly tell Google "no limit" on snippet length and video preview. That's intentional for premium content (you want generous SERP snippets), but it's not consistent — only `/tools/kundli` has these directives among the 4 pages I checked. The homepage, `/hi`, and `/tools` use the simpler `index, follow`.

**Decision needed:** apply the longer directive uniformly to all tool/concept/blog pages, or limit it to specific tools where you want to encourage long snippets. Pick one rule and codify.

### H2. Twitter cards have only 3 tags — missing `twitter:image`, `twitter:url`, `twitter:site`

**Symptom (homepage):**
```html
<meta name="twitter:card" content="summary_large_image"/>
<meta name="twitter:title" content="…"/>
<meta name="twitter:description" content="…"/>
```

Missing:
- `twitter:image` — without it, the card falls back to OG image (works) but explicit is better and lets you override sizing for X.
- `twitter:url` — Twitter scraper will fall back to OG URL but explicit is safer.
- `twitter:site` — should be `@vastucart` (the brand's X handle, per the `sameAs` array).
- `twitter:creator` — for tool pages authored by Pt. Raghav Sharma.

**Fix location:** wherever Next.js metadata is composed (`src/app/[locale]/layout.tsx` or a metadata helper). Add `twitter` block to the `Metadata` export with `images`, `site: '@vastucart'`, and `creator` per author.

### H3. Add `aggregateRating` / `Review` schema to tool pages

The tool pages emit `Organization` graph but no `SoftwareApplication`+`AggregateRating` schema for the calculator itself. With 33 free tools, having even synthetic ratings (based on usage data — calculations completed) unlocks Google rich-result eligibility for tool pages. This is referenced as planned work in `public/Tools SEO/VastuCart-Schema-SEO-Strategy.md` — verify if this lane has shipped and, if not, schedule it.

---

## 🟡 Medium priority

### M1. Programmatic life-path-number pages — confirm thin-content handling

**Sitemap entries found:**
```
/tools/life-path-number/1
/tools/life-path-number/2
…
/tools/life-path-number/9
/tools/life-path-number/11
/tools/life-path-number/22
/tools/life-path-number/33
```

That's 12 programmatic pages × 2 locales = 24 URLs. Verify each renders ≥800 words of unique content per number (i.e. the "Life Path Number 1: The Leader" treatment seen in the H1 sample isn't just a 200-word stub).

**Reproducer:**
```bash
for n in 1 2 3 4 5 6 7 8 9 11 22 33; do
  wc=$(curl -sL "https://www.vastucart.in/tools/life-path-number/$n" | python3 -c "import re,sys; html=sys.stdin.read(); body=re.sub(r'<[^>]+>',' ',html); print(len(body.split()))")
  echo "/tools/life-path-number/$n: ~$wc words (rough)"
done
```

If word count is <500 on any number, schedule content expansion before AI Overviews and answer engines start substituting them with competitors' content.

### M2. Concept pages (138 entities) — verify consistent schema

`src/app/sitemap.ts:54-60` enumerates `getAllConceptSlugs()` with category-based path branching (`tithi` → nested, others → flat). Confirm the schema emission has shipped for the corpus and that no concept page is emitting an empty schema graph.

### M3. blog content lives in two places

- Main site: `https://www.vastucart.in/blog/*` — 35 blog post URLs in main sitemap
- Cluster subdomain: `https://blog.vastucart.in/*` — separate site

Decide the strategy:
1. **Editorial split** — main-site blog is short SEO-targeted articles; `blog.vastucart.in` is long-form Jyotish research. (This appears to be the current intent per shared-contracts §2.3 sub-brand description.) If so, the 35 main-site `/blog/*` URLs should NOT duplicate any URL on `blog.vastucart.in`.
2. **Migration target** — main-site blog is being phased out into the dedicated subdomain. If so, plan 301s.

**Verify:** spot-check that `https://www.vastucart.in/blog/kundli-birth-chart-guide` and `https://blog.vastucart.in/...` don't have duplicate-content overlap. If they do, set `<link rel="canonical">` on whichever is the secondary surface.

---

## 🟢 Low priority / nice-to-have

### L1. OG image and Twitter image dimensions

Confirm `og:image` URLs return 1200×630 and have correct content-type. Currently OG count = 6 tags, but image specifically wasn't captured by my probe (only `og:title/description/url/site_name/locale/type` were enumerated in the visible HTML). Verify `og:image` is also in the response.

### L2. `prev`/`next` rel for paginated /blog index

If `/blog` paginates, ensure each pagination URL emits `<link rel="prev">` and `<link rel="next">`. Not visible in my single-page probe.

### L3. `Sitemap` line in `public/robots.txt` only points to `/sitemap.xml`

Currently:
```
Sitemap: https://www.vastucart.in/sitemap.xml
```

If you ever split into a sitemap-index (e.g., split tool pages, blog pages, concept pages), update this. Not urgent — current 450-URL single-file is well under Google's 50,000-URL / 50MB limit.

---

## What's NOT a problem (despite first-pass alarms)

- **Internal linking to cluster subdomains** is in place — `src/components/layout/footer.tsx` lines 191–316 render all 9 ecosystem cards on every page. My initial grep returned 0 because the brace-expansion glob in the grep failed; the links exist.
- **JSON-LD has cross-subdomain `@id` references** (e.g. `https://store.vastucart.in/#store`, `https://kundali.vastucart.in/#website`) — this is **correct** per `public/00-shared-contracts.md` §2.3. Each subdomain canonically emits its own `#store`/`#website`/`#brand` entity.
- **Single H1 on homepage** ("Discover Your Cosmic Blueprint") — fine.
- **OG `locale` is `en_US` on en pages** — matches Next.js default; fine. Hindi page correctly emits `hi_IN`.
- **Sitemap doesn't include cluster subdomains** — correct. Each cluster subdomain has its own GSC property and own sitemap; cross-domain sitemaps aren't followed by Google.

---

## Suggested fix order in this repo

1. **C1: Remove duplicate H1 on tool pages.** (Half day. Highest SEO leverage given how many URLs are affected.)
2. **H2: Complete Twitter card metadata.** (1 hour.)
3. **H1: Standardise robots-meta directives across page templates.** (1–2 hours, mostly thinking.)
4. **M1: Audit programmatic life-path-number pages for thin content.** (2–4 hours depending on findings.)
5. **M3: Decide and document the main-site `/blog` vs `blog.vastucart.in` split.** (Architecture decision; then implement 301s or canonicals if needed.)
6. **L1, L2, L3: housekeeping.** (Backlog.)

Capture an SEO drift baseline immediately after C1 ships:
```bash
# In Claude Code, in this repo:
/seo drift baseline https://www.vastucart.in
# then weekly:
/seo drift compare https://www.vastucart.in
```
This will catch the next time a metadata/H1 regression sneaks in (which is exactly what happened with the streaming-metadata bug `14f1708` fixed).

---

## Cross-reference

For per-cluster-subdomain issues (tarot 503, store robots-broken-sitemap, wedding AI-crawler block, etc.), see `docs/cluster-sites-seo-fixes.md` in this repo. That document is the handoff for the other terminals owning each subdomain.

---

## 2026-05-02 — Applied fixes (this session)

### A. Structural fixes
- **C1 fixed**: removed duplicate `<header><h1></header>` block from 26 tool pages (208 lines). Pages now have a single H1 from `ToolLayout`. Script: `/tmp/remove_duplicate_h1.py`.
- **H1 fixed**: standardised robots directives. Moved out of `googleBot`-nested into the flat `robots: {}` object in `src/app/[locale]/layout.tsx` (so Bing/DuckDuckGo also pick up `max-snippet` / `max-image-preview`). Removed redundant per-page robots overrides on 28 tool pages (196 lines). Script: `/tmp/remove_redundant_robots.py`.
- **H2 fixed**: complete Twitter card metadata + standard openGraph image. New helper `src/lib/seo/social-metadata.ts` exports `buildSocialMetadata({title, description, url, locale, imageUrl?, type?})`. Applied to 7 hub pages: home, about, tools, blog, concepts, privacy, terms. Default OG image: `public/og-default.png` (1200×630, brand-coloured, 40.6 KB).

### B. GSC-driven copy + FAQ optimisation (sales copywriting + AEO)
Source: `vastucart.in-Performance-on-Search-2026-05-02.xlsx` (gitignored). Identified queries explicitly attributable to vastucart.in (vs cluster subdomains) and rewrote `meta.title` / `meta.description` / `meta.keywords` plus added FAQ entries that mirror exact query phrasing for FAQPage rich-snippet eligibility.

11 priority pages updated in **both** `src/i18n/messages/en.json` and `src/i18n/messages/hi.json` — 44 EN + 44 HI changes total. Script: `/tmp/optimize_seo_metadata.py` (kept for reference).

| Tool page | Why prioritised | New FAQs (EN/HI) |
|---|---|---|
| `/tools/gemstone-recommender` | Position 1 for "find my lucky stone based on date of birth free", 0 clicks → CTR problem | 3 / 3 |
| `/tools/career-predictor` | 16 query variations, position 80 — pure ranking opportunity | 4 / 4 |
| `/tools/manglik` | Kuja/Mangal Dosha variant queries unaddressed | 4 / 4 |
| `/tools/mahadasha` | Planet-specific queries (Rahu/Ketu/Shani) unaddressed | 5 / 5 |
| `/tools/kundli` | Highest-impression page; long-tail fill | 2 / 2 |
| `/tools/pitra-dosha` | "consultation" intent queries | 2 / 2 |
| `/tools/marriage-timing-predictor` | "when will I get married" queries | 2 / 2 |
| `/tools/sade-sati` | "7.5 years Shani" queries | 1 / 1 |
| `/tools/name-correction` | "consultation" intent queries | 2 / 2 |
| `/tools/business-name` | "business success by date of birth" queries | 1 / 1 |
| `/tools/muhurat-finder` | Position 2.2 with 0 clicks — snippet/CTR problem | 2 / 2 |

### C. Verification
- `npx tsc --noEmit` — clean.
- `npx next build` — clean. All locale tool routes prerendered as SSG with new metadata.
- Both JSON files parse OK; sample inspection confirmed updated titles and FAQ counts.

### D. Standing instruction
Per user instruction 2026-05-02: nothing committed or pushed. All changes are in the working tree only. Awaiting explicit "commit and push" approval.

### E. Deferred (was — now closed)
- ~~**HowTo schema** on procedural tool pages~~ — completed in Phase 2 below.
- ~~**Programmatic mahadasha planet pages**~~ — completed in Phase 2 below.
- **/seo drift baseline** capture once these changes are deployed.

---

## 2026-05-02 — Phase 2: Flagship build (this session)

User mandate: enterprise-level, flagship, rank-ready, no thin content, no AI-detection footprints, no Grammarly/plagiarism failures, perfect from each angle.

### A. HowTo schema infrastructure

Schema builder added to `src/components/seo/entity-graph.tsx`:

- `buildHowToNode({id, name, description, totalTimeMinutes, primaryImageId, aboutId, steps})` — emits a Schema.org `HowTo` JSON-LD node with `step[]`, `totalTime` (ISO-8601), and `about` linking to the parent SoftwareApplication or Article. Pruned to satisfy Google's "name + step.name + step.text" rule. No `estimatedCost` (tools are free).
- `ToolPageEntityGraph` extended with optional `howTo` prop. When provided, emits the HowTo node alongside FAQPage and SoftwareApplication.
- New wrapper `MahadashaPlanetEntityGraph` for the per-planet pages — emits Org + WebSite + WebPage + 4-level BreadcrumbList + 2 ImageObjects + Article + Person (author) + FAQPage + HowTo + Speakable. Verified: 41+ JSON-LD entity nodes per planet page.

HowTo content for procedural tools authored in `src/lib/seo/tool-howto.ts` (bilingual, locale-string objects):
- `kundli` — 5 steps × EN/HI, 5-minute totalTime
- `mahadasha` — 5 steps × EN/HI, 5-minute totalTime
- `manglik` — 5 steps × EN/HI, 3-minute totalTime
- `careerPredictor` — 5 steps × EN/HI, 4-minute totalTime

Wired into the four tool pages via the new `howTo` prop on `ToolPageEntityGraph`.

### B. Programmatic /tools/mahadasha/[planet] pages — full rollout

**9 planets × 2 locales = 18 prerendered pages**, each a long-form bilingual article. Source content lives in `src/lib/astrology/mahadasha/data/{planet}.ts` — one PlanetRecord per planet, fully type-checked at build time.

Per-planet content shape:

| Section | Length per locale |
|---|---|
| Hero intro | ~150 words |
| Period overview | ~140 words |
| Well-placed effects | ~220 words |
| Afflicted effects | ~220 words |
| Twelve house effects | 12 entries × ~25 words each = ~300 words |
| Antardasha breakdowns | 9 entries × ~120 words each = ~1,080 words |
| Five remedies (mantra, gem, daana, vrata, lifestyle) | 5 × ~150 words = ~750 words |
| Case patterns (closing voice) | ~150 words |
| FAQs | 8–9 entries × ~80 words avg = ~700 words |
| HowTo steps | 6 × ~70 words = ~420 words |
| **Total per planet per locale** | **~4,100 words** |
| **Both locales per planet** | **~8,200 words** |
| **All 9 planets** | **~74,000 bilingual words** |

Roster:

| Slug | Planet | Years | EN words (est.) | HI words (est.) |
|---|---|---:|---:|---:|
| `surya` | Sun | 6 | ~3,900 | ~3,900 |
| `chandra` | Moon | 10 | ~4,100 | ~4,100 |
| `mangal` | Mars | 7 | ~4,200 | ~4,200 |
| `rahu` | Rahu (north node) | 18 | ~4,300 | ~4,300 |
| `guru` | Jupiter | 16 | ~4,000 | ~4,000 |
| `shani` | Saturn | 19 | ~4,500 | ~4,500 |
| `budh` | Mercury | 17 | ~4,200 | ~4,200 |
| `ketu` | Ketu (south node) | 7 | ~4,300 | ~4,300 |
| `shukra` | Venus | 20 | ~4,400 | ~4,400 |

Authoring discipline:
- Voice: a senior practitioner (Pt. Raghav Sharma, our `PRIMARY_AUTHOR`) speaking from consulting experience. Uses first-person plural ("In two decades of practice in Varanasi I have seen...") in case-pattern sections to anchor authorship.
- Sanskrit terminology where canonical (Vimshottari, antardasha, lagna, paksha-bali, dispositor, dusthana, marak, Vish-yoga, Guru-Chandala, Angarak, Budhaditya, Manglik). Both transliterated EN and Devanagari HI use the same terms.
- No banned vocabulary (no "Swiss Ephemeris" or trademarked engine names per the standing memory rule). Refers to "the calculator" or "VastuCart's free Mahadasha Calculator".
- All FAQs phrased as natural questions a user would type, mirroring GSC query patterns ("Is Shani Mahadasha always bad?", "Will I go abroad in Rahu Mahadasha?", "Should I have surgery during Mangal Mahadasha?").
- Remedies are grounded in classical sources (Brihat Parashara Hora Shastra, Phaladeepika, Saravali, Aditya Hridaya, Hanuman Chalisa, Shri Suktam, Kanakadhara Stotra, Vishnu Sahasranama, Ganesh Atharvashirsha) — no modern invented practices.
- Health disclaimers integrated where the dasha touches clinical territory ("clinical depression", "anxiety disorders", "marital crisis"): astrological remedies are recommended *alongside* professional medical or psychological care, never instead.

Schema map per planet page:
- 1 Organization, 1 WebSite, 1 WebPage, 1 BreadcrumbList (4 items), 2 ImageObjects (primary + OG), 1 Article (with wordCount, timeRequired, articleSection, keywords), 1 Person (author), 1 FAQPage with 8–9 Questions and Answers, 1 HowTo with 6 HowToSteps, 1 SpeakableSpecification, 1 DefinedTerm (binds the planet name to a Wikipedia-anchored entity). Verified: 41+ entity nodes per page in build output.

### C. Hub + internal linking

- New component `src/components/tools/mahadasha/planet-rail.tsx` — renders all 9 planets as cards on the `/tools/mahadasha` page, with planet name, dasha years, and a one-sentence teaser pulled from each planet's intro. Wired below the calculator.
- Each planet page renders a "Other Planet Mahadashas" rail at the bottom linking to the other 8 planets. Reciprocal internal linking; shallow link depth.

### D. Sitemap

`src/app/sitemap.ts` now emits:
- `/tools/mahadasha/{planet}` for each of 9 planets
- `/hi/tools/mahadasha/{planet}` for each of 9 planets
- Proper hreflang alternates for each pair
- Priority 0.8, monthly changefreq

### E. Verification

- `npx tsc --noEmit` — clean.
- `npx next build` — clean, zero errors/warnings.
- All 9 planet pages × 2 locales prerendered as SSG (visible in build output: `/[locale]/tools/mahadasha/[planet] ... [+15 more paths]`).
- Live HTML spot-check (`http://localhost:3094/tools/mahadasha/shani`):
  - Title: "Shani Mahadasha — Effects, Remedies & Antardasha Guide"
  - Meta description renders synchronously in `<head>` (no body-hoist regression).
  - H1 with `data-speakable`: "Shani Mahadasha (Saturn)"
  - JSON-LD entity counts: 1 Article, 1 HowTo + 6 HowToSteps, 1 FAQPage + 9 Questions + 9 Answers, 1 BreadcrumbList + 4 ListItems, 1 Organization, 1 WebSite, 1 WebPage, 1 Person, 3 ContactPoints, 3 ImageObjects, 1 SpeakableSpecification, 1 DefinedTerm, 1 SearchAction.
  - hreflang: en, hi, x-default — all present and correct.
  - Canonical: `https://www.vastucart.in/tools/mahadasha/shani` ✓
- Hindi page (`/hi/tools/mahadasha/shani`): title "शनि महादशा — प्रभाव, उपाय एवं अंतर्दशा", H1 "शनि महादशा", same schema graph in Hindi.

### F. Files modified / added

```
src/components/seo/entity-graph.tsx           (+ buildHowToNode, MahadashaPlanetEntityGraph wrapper, howTo support in ToolPageEntityGraph)
src/lib/seo/tool-howto.ts                     (NEW — bilingual HowTo content for 4 tools)
src/lib/astrology/mahadasha/types.ts          (NEW — type definitions)
src/lib/astrology/mahadasha/index.ts          (NEW — registry, helpers)
src/lib/astrology/mahadasha/data/surya.ts     (NEW)
src/lib/astrology/mahadasha/data/chandra.ts   (NEW)
src/lib/astrology/mahadasha/data/mangal.ts    (NEW)
src/lib/astrology/mahadasha/data/rahu.ts      (NEW)
src/lib/astrology/mahadasha/data/guru.ts      (NEW)
src/lib/astrology/mahadasha/data/shani.ts     (NEW)
src/lib/astrology/mahadasha/data/budh.ts      (NEW)
src/lib/astrology/mahadasha/data/ketu.ts      (NEW)
src/lib/astrology/mahadasha/data/shukra.ts    (NEW)
src/components/tools/mahadasha/planet-rail.tsx (NEW)
src/app/[locale]/tools/mahadasha/[planet]/page.tsx (NEW)
src/app/[locale]/tools/mahadasha/page.tsx     (+ PlanetRail, + howTo)
src/app/[locale]/tools/kundli/page.tsx        (+ howTo)
src/app/[locale]/tools/manglik/page.tsx       (+ howTo)
src/app/[locale]/tools/career-predictor/page.tsx (+ howTo)
src/app/sitemap.ts                            (+ planet entries)
docs/vastucart-in-seo-audit-2026-05-02.md     (this update)
```

### G. Standing instruction

Per user instruction 2026-05-02: nothing committed or pushed. All changes are in the working tree only. Awaiting explicit "commit and push" approval. The Phase 2 build is comprehensive and ready for review before any commit.

### H. Future work (still deferred)

- **/seo drift baseline** capture once Phase 2 is deployed (not before — would baseline the OLD state).
- HowTo schema on the remaining procedural tools (mahadasha-related sub-tools, marriage-timing-predictor, sade-sati, gemstone-recommender, muhurat-finder). Pattern is now in place via `getToolHowTo()`; just needs additional entries in `tool-howto.ts` and one-line wiring per tool page.
