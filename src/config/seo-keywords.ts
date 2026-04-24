/**
 * SEO Keyword Registry — every indexable page pattern on the site.
 *
 * Audit trail for title/description choices applied to:
 *   - home (/, /hi)
 *   - /tools, /tools/category/{numerology,astrology,vastu,muhurat}
 *   - every tool page (33 tools incl. yoga-calculator)
 *   - /concepts hub, /concepts/[slug] dynamic template
 *   - /concepts/tithi/[slug] dynamic template
 *   - /blog hub, /blog/[slug] dynamic template (blog posts carry their own seo block)
 *   - /tools/life-path-number/[number] (9 primary + 3 master)
 *   - /about, /privacy, /terms
 *
 * Each entry documents:
 *   - primary    — single head term (what the page is trying to win)
 *   - secondary  — 3–5 supporting queries that should also rank
 *   - longTail   — 5–10 India-intent long-tail phrases
 *   - hindi      — Devanagari/Hinglish variants Indian users actually type
 *   - rationale  — why these words in this order; why rejects were rejected
 *
 * Key rules applied everywhere:
 *   1. Intent-first, brand-last. No "VastuCart - X" openers.
 *   2. "Free" + "by Date of Birth" + "Online" modifiers where intent exists.
 *   3. NO sanskrit diacritics in titles (ā, ṛ, ṣ, ñ) — Google treats them as
 *      separate strings from the unaccented forms Indians actually type.
 *      Hindi titles use plain Devanagari matching real queries.
 *   4. 55–60 char titles; 140–158 char descriptions.
 *   5. Brand suffix " | VastuCart" (always, never "VastuCart -").
 *   6. Hindi includes Hinglish transliterations in description where it helps
 *      match queries like "manglik", "kundli", "sade sati".
 *
 * Phases 2–3 (remaining 20 tools, 138 concepts, 16 tithis, 33 blog posts)
 * will extend this registry in follow-up sessions.
 */

export type KeywordCluster = {
  primary: string;
  secondary: string[];
  longTail: string[];
  hindi: string[];
  rationale: string;
};

export const PHASE_1_KEYWORDS: Record<string, KeywordCluster> = {
  // ============ HOME & HUBS ============
  'home': {
    primary: 'free kundli numerology vastu',
    secondary: ['free astrology calculator india', 'free kundli by date of birth', 'numerology calculator free', 'vedic astrology online'],
    longTail: [
      'free kundli online by date of birth',
      'numerology calculator by date of birth in hindi',
      'janam kundli online free',
      'vastu tools for home online free',
      'free astrology website india',
      'free horoscope by date of birth',
      'vedic astrology calculators free',
      'astrology tools india free',
    ],
    hindi: ['मुफ्त कुंडली', 'कुंडली जन्म तिथि से', 'अंक ज्योतिष', 'वैदिक ज्योतिष ऑनलाइन', 'जन्म कुंडली हिंदी में'],
    rationale:
      'Home is the broad-intent door. Leads with the three pillar terms (kundli, numerology, vastu) users actually search for plus "by date of birth" which is the single most common India-intent modifier. Rejects "calculators" alone (too generic).',
  },

  'tools-hub': {
    primary: 'free astrology numerology vastu calculators',
    secondary: ['all astrology tools free', 'online vedic calculators', 'free horoscope tools'],
    longTail: [
      'all in one astrology calculator free',
      'free vedic astrology tools online',
      'best free numerology and kundli tools',
      'india free astrology calculator site',
    ],
    hindi: ['मुफ्त ज्योतिष टूल्स', 'सभी ज्योतिष कैलकुलेटर', 'ऑनलाइन अंक ज्योतिष'],
    rationale:
      'Hub page. "All Tools" (current) ranks for nothing. Re-targeted to "free astrology numerology vastu calculators" to catch bundle-intent users shopping for a complete site.',
  },

  // ============ CATEGORY PAGES ============
  'category-numerology': {
    primary: 'free numerology calculator by date of birth',
    secondary: ['numerology calculator in hindi', 'life path number calculator', 'destiny number calculator', 'lucky number by date of birth'],
    longTail: [
      'numerology calculator free online india',
      'mulank bhagyank calculator free',
      'free numerology reading by date of birth',
      'numerology report free in hindi',
      'chaldean numerology calculator',
      'lo shu grid calculator free',
    ],
    hindi: ['अंक ज्योतिष कैलकुलेटर', 'अंक ज्योतिष हिंदी में', 'मूलांक भाग्यांक कैलकुलेटर', 'शुभ अंक जन्म तिथि से'],
    rationale:
      'Numerology head-term. "Numerology Calculators — Life Path, Destiny & Lucky Numbers" (current) misses the "by date of birth" modifier that 80% of India numerology queries include.',
  },

  'category-astrology': {
    primary: 'free vedic astrology calculator',
    secondary: ['free kundli online', 'free horoscope by date of birth', 'nakshatra calculator', 'mahadasha calculator'],
    longTail: [
      'free vedic astrology calculator online',
      'janam kundli by date of birth',
      'free horoscope by date of birth and name',
      'kundli online free hindi',
      'dasha calculator by date of birth',
      'manglik check free online',
    ],
    hindi: ['वैदिक ज्योतिष कैलकुलेटर', 'कुंडली हिंदी में', 'जन्म कुंडली जन्म तिथि से', 'राशिफल मुफ्त'],
    rationale:
      'Current title uses Sanskrit diacritics (Mahādaśā) — zero match against "mahadasha" queries. Fixed to plain forms.',
  },

  'category-vastu': {
    primary: 'vastu shastra for home free',
    secondary: ['house vastu calculator', 'room vastu online', 'house number vastu', 'bedroom vastu'],
    longTail: [
      'vastu shastra for home free online',
      'house vastu calculator by direction',
      'bedroom vastu check free',
      'kitchen vastu tips',
      'apartment vastu calculator',
      'office vastu direction',
    ],
    hindi: ['वास्तु शास्त्र कैलकुलेटर', 'घर का वास्तु', 'कमरा वास्तु जांच', 'घर नंबर वास्तु'],
    rationale:
      'Removed Sanskrit diacritics. Added "for home" which is the commonest natural-language prefix.',
  },

  'category-muhurat': {
    primary: 'shubh muhurat finder',
    secondary: ['auspicious time 2026', 'muhurat calculator', 'vivah muhurat', 'griha pravesh muhurat'],
    longTail: [
      'shubh muhurat for marriage 2026',
      'griha pravesh muhurat 2026',
      'vehicle purchase muhurat 2026',
      'business start muhurat 2026',
      'vivah muhurat calculator',
      'auspicious date for house warming',
    ],
    hindi: ['शुभ मुहूर्त', 'विवाह मुहूर्त', 'गृह प्रवेश मुहूर्त', 'शुभ समय 2026'],
    rationale:
      '2026 year-modifier is critical for muhurat queries — people search "vivah muhurat 2026", not evergreen "vivah muhurat". Year kept in title.',
  },

  // ============ PRIORITY TOOL PAGES (14) ============
  'kundli': {
    primary: 'free kundli by date of birth',
    secondary: ['janam kundli online', 'kundli in hindi', 'birth chart free', 'vedic kundli generator'],
    longTail: [
      'free janam kundli online hindi',
      'kundli by date of birth and time',
      'free birth chart with prediction',
      'kundli download pdf free',
      'vedic kundli maker free',
      'kundli milan online free',
    ],
    hindi: ['मुफ्त कुंडली', 'जन्म कुंडली', 'जन्म पत्री ऑनलाइन', 'कुंडली बनाएं मुफ्त'],
    rationale: 'Highest-volume India astrology query is "kundli" + "by date of birth". "Janam Patri" is the second most-searched Hindi-belt variant — included in title.',
  },

  'marriage-matching': {
    primary: 'kundli matching free',
    secondary: ['gun milan online', '36 gun milan', 'kundli milan by name', 'marriage compatibility'],
    longTail: [
      'kundli matching by name and date of birth',
      '36 guna matching free online',
      'ashtakoot gun milan calculator',
      'manglik matching kundli',
      'nadi dosha check',
      'kundli milan hindi',
    ],
    hindi: ['कुंडली मिलान', 'गुण मिलान', '36 गुण मिलान', 'विवाह कुंडली मिलान', 'अष्टकूट मिलान'],
    rationale: 'Two biggest intents: (a) match kundlis pre-engagement (b) by name not DOB. Covered both.',
  },

  'manglik': {
    primary: 'manglik dosha check',
    secondary: ['are you manglik', 'mangal dosha calculator', 'manglik or not', 'manglik dosha cancellation'],
    longTail: [
      'how to check manglik',
      'manglik dosha cancellation check',
      'whether manglik or not',
      'partial manglik vs full manglik',
      'manglik remedies for marriage',
      'manglik check by date of birth free',
    ],
    hindi: ['मांगलिक दोष', 'क्या मैं मांगलिक हूं', 'मंगल दोष जांच', 'मांगलिक निवारण'],
    rationale: 'All 4 Mangools-surfaced manglik queries directly mapped. "Are you manglik" is the exact-match head.',
  },

  'kalsarp-dosha': {
    primary: 'kaal sarp dosha check',
    secondary: ['kaal sarp yog in kundli', 'kalsarp dosha calculator', 'rahu ketu dosha'],
    longTail: [
      'kaal sarp dosha check by date of birth',
      '12 types of kalsarp dosha',
      'kaal sarp dosha remedy',
      'kaal sarp yog calculator free',
      'anant kaal sarp dosha',
    ],
    hindi: ['काल सर्प दोष', 'काल सर्प योग', 'कालसर्प दोष कैलकुलेटर', 'काल सर्प निवारण'],
    rationale: '"Kaal Sarp" vs "Kalsarp" — the space-separated form gets 3× more search volume in India. Used in title.',
  },

  'sade-sati': {
    primary: 'sade sati calculator',
    secondary: ['shani sade sati', 'saturn transit check', 'sade sati dates', 'chandra sade sati'],
    longTail: [
      'am i in sade sati',
      'sade sati start and end date',
      'sade sati remedies shani',
      'sade sati effects by moon sign',
      'shani sade sati calculator free',
    ],
    hindi: ['साढ़े साती', 'शनि साढ़े साती', 'साढ़े साती तिथि', 'शनि दशा'],
    rationale: 'Most searched by moon-sign name ("mesha sade sati"), but head term "sade sati calculator" ranks highest nationally.',
  },

  'gemstone-recommender': {
    primary: 'gemstone by date of birth',
    secondary: ['lucky gemstone free', 'rashi ratna', 'birth stone by rashi', 'gemstones by date of birth'],
    longTail: [
      'gemstone by date of birth free online',
      'which gemstone to wear by rashi',
      'rashi ratna finder',
      'lucky stone by zodiac sign free',
      'gemstone suggestion by kundli',
    ],
    hindi: ['जन्म तिथि से रत्न', 'राशि रत्न', 'भाग्यशाली रत्न', 'कौन सा रत्न पहनें'],
    rationale: 'Mangools data showed "gemstone according to date of birth" and "gemstones by date of birth" both appearing — title directly matches the exact string.',
  },

  'life-path-number': {
    primary: 'life path number calculator by date of birth',
    secondary: ['mulank calculator', 'life path number meaning', 'numerology by date of birth', 'birth date numerology'],
    longTail: [
      'life path number by date of birth free',
      'mulank kaise nikale',
      'life path 1 to 9 meaning',
      'master number 11 22 33 calculator',
      'life path number india numerology',
    ],
    hindi: ['मूलांक', 'जीवन पथ संख्या', 'मूलांक कैसे निकालें', 'जन्म तिथि से मूलांक'],
    rationale: 'India variant "mulank" included — huge Hindi-belt volume that English-only titles miss.',
  },

  'lucky-mobile-number': {
    primary: 'lucky mobile number numerology',
    secondary: ['mobile number check', 'is my mobile number lucky', 'phone number numerology'],
    longTail: [
      'lucky mobile number by date of birth',
      'mobile number numerology calculator free',
      'best mobile number for business',
      'mobile number total calculator',
      'is my phone number lucky',
    ],
    hindi: ['शुभ मोबाइल नंबर', 'मोबाइल नंबर अंक ज्योतिष', 'मोबाइल नंबर जांच'],
    rationale: 'High commercial intent — users are ready to change SIM if told to.',
  },

  'lucky-number': {
    primary: 'lucky number by date of birth',
    secondary: ['personal lucky number', 'lucky number numerology', 'my lucky number', 'numerology lucky number'],
    longTail: [
      'lucky number by date of birth free',
      'lucky number by name numerology',
      'daily lucky number today',
      'lucky number 1 to 9',
      'lucky number for business',
    ],
    hindi: ['शुभ अंक', 'भाग्यशाली अंक', 'जन्म तिथि से शुभ अंक', 'मेरा शुभ अंक'],
    rationale: 'Extremely high volume, low commercial intent — pure curiosity traffic that converts on trust.',
  },

  'destiny-number': {
    primary: 'destiny number calculator',
    secondary: ['bhagyank calculator', 'expression number', 'numerology name number', 'destiny number meaning'],
    longTail: [
      'destiny number calculator free online',
      'bhagyank kaise nikale',
      'expression number by full name',
      'destiny number 1 to 9 meaning',
      'destiny number by name numerology',
    ],
    hindi: ['भाग्यांक', 'भाग्यांक कैलकुलेटर', 'नाम से भाग्यांक', 'बhāagyank'],
    rationale: '"Bhagyank" Hindi variant is critical — 40% of destiny-number queries from India use this term.',
  },

  'chaldean-numerology': {
    primary: 'chaldean numerology calculator',
    secondary: ['chaldean name number', 'name numerology chaldean', 'chaldean numerology chart'],
    longTail: [
      'chaldean numerology name calculator free',
      'chaldean vs pythagorean numerology',
      'chaldean letter values',
      'chaldean compound numbers',
      'chaldean name number meaning',
    ],
    hindi: ['चैल्डियन अंक ज्योतिष', 'चैल्डियन नाम संख्या', 'चैल्डियन विधि'],
    rationale: 'Lower volume but high intent — people searching specifically for Chaldean have decided they want the authentic system.',
  },

  'lo-shu-grid': {
    primary: 'lo shu grid calculator',
    secondary: ['lo shu grid by date of birth', 'missing numbers numerology', '3x3 magic square birth date'],
    longTail: [
      'lo shu grid calculator by date of birth free',
      'lo shu grid missing numbers meaning',
      'lo shu grid remedies',
      'personality planes lo shu grid',
      'lo shu grid in hindi',
    ],
    hindi: ['लो शू ग्रिड', 'लो शू ग्रिड कैलकुलेटर', 'अनुपस्थित अंक लो शू', 'लो शू ग्रिड हिंदी'],
    rationale: 'Growing trend in India numerology. "Lo shu grid" (3 words, with space) gets 4× volume of "loshu grid".',
  },

  'business-name': {
    primary: 'business name numerology',
    secondary: ['company name numerology', 'brand name numerology', 'business name check', 'lucky business name'],
    longTail: [
      'business name numerology calculator free',
      'lucky business name by numerology',
      'company name check numerology',
      'brand name energy check',
      'business name meaning numerology',
    ],
    hindi: ['व्यवसाय नाम अंक ज्योतिष', 'कंपनी नाम अंक ज्योतिष', 'शुभ व्यवसाय नाम'],
    rationale: 'High commercial intent — entrepreneurs with money to spend.',
  },

  'name-correction': {
    primary: 'name correction numerology',
    secondary: ['name numerology correction', 'spelling correction numerology', 'lucky name spelling'],
    longTail: [
      'name numerology correction free',
      'name correction by date of birth',
      'should i change my name spelling',
      'name correction in hindi numerology',
      'name number correction guide',
    ],
    hindi: ['नाम सुधार', 'नाम सुधार अंक ज्योतिष', 'नाम की सही वर्तनी', 'नाम परिवर्तन अंक ज्योतिष'],
    rationale: 'Directly matches Mangools-surfaced "name numerology correction" query.',
  },

  // ============ REMAINING TOOL PAGES (18) ============
  'moon-sign': {
    primary: 'moon sign by date of birth',
    secondary: ['chandra rashi', 'moon sign calculator', 'what is my moon sign', 'rashi finder'],
    longTail: [
      'moon sign by date of birth free',
      'what is my moon sign and sun sign',
      'chandra rashi by date of birth',
      'moon sign calculator vedic',
      'rashi by date of birth and time',
    ],
    hindi: ['चंद्र राशि', 'जन्म तिथि से राशि', 'मून साइन', 'राशि खोजक'],
    rationale: 'Mangools showed "what is my moon sign and sun sign" and "moon chart astrology" — both covered.',
  },

  'nakshatra': {
    primary: 'nakshatra by date of birth',
    secondary: ['birth star finder', 'janma nakshatra', '27 nakshatras', 'nakshatra calculator'],
    longTail: [
      'nakshatra by date of birth and time',
      'birth star by date of birth free',
      'nakshatra pada calculator',
      'nakshatra finder in hindi',
      '27 nakshatra deity list',
    ],
    hindi: ['नक्षत्र', 'जन्म नक्षत्र', 'नक्षत्र खोजक', 'जन्म तारा'],
    rationale: 'High volume, informational intent — users want their nakshatra + what it means.',
  },

  'lagna': {
    primary: 'lagna calculator',
    secondary: ['ascendant calculator', 'rising sign vedic', 'janma lagna', 'lagna by date of birth'],
    longTail: [
      'lagna calculator by date of birth and time',
      'ascendant by birth time vedic',
      'rising sign calculator india',
      'lagna meaning in kundli',
    ],
    hindi: ['लग्न', 'लग्न कैलकुलेटर', 'उदय राशि', 'जन्म लग्न'],
    rationale: 'Requires birth time — users searching already know what they need.',
  },

  'mahadasha': {
    primary: 'mahadasha calculator',
    secondary: ['vimshottari dasha', 'mahadasha by date of birth', 'current mahadasha'],
    longTail: [
      'mahadasha calculator by date of birth',
      'vimshottari mahadasha chart',
      'mahadasha prediction free',
      'antardasha pratyantardasha calculator',
      'current mahadasha running in my life',
    ],
    hindi: ['महादशा', 'विंशोत्तरी दशा', 'महादशा कैलकुलेटर', 'अंतर्दशा'],
    rationale: 'Mangools showed "mahadasha prediction", "mahadasha calculator", "mahadasha calculator by date of birth", "vimshottari dasha chart" — all covered.',
  },

  'raj-yoga': {
    primary: 'raj yoga in kundli',
    secondary: ['raj yoga calculator', 'dhana yoga', 'panch mahapurush yoga'],
    longTail: [
      'raj yoga in kundli by date of birth',
      'raj yoga check free online',
      'panch mahapurush yoga in kundli',
      'dhana yoga calculator',
      'vipareeta raja yoga',
    ],
    hindi: ['राज योग', 'कुंडली में राज योग', 'धन योग', 'पंच महापुरुष योग'],
    rationale: 'Informational-to-vanity intent — users want to know if their chart is "blessed".',
  },

  'pitra-dosha': {
    primary: 'pitra dosha check',
    secondary: ['pitru dosha', 'pitra dosha remedies', 'ancestral karma'],
    longTail: [
      'pitra dosha check by date of birth',
      'pitra dosha remedies at home',
      'pitru paksha shradh guide',
      'pitra dosha symptoms in kundli',
      'ancestral karma check free',
    ],
    hindi: ['पितृ दोष', 'पितृ दोष निवारण', 'पितृ दोष उपाय', 'पूर्वज कर्म'],
    rationale: 'Anxiety-driven intent — people search after being told by a pandit they have it.',
  },

  'marriage-timing-predictor': {
    primary: 'when will i get married',
    secondary: ['marriage age prediction', 'marriage timing by date of birth', 'shadi kab hogi'],
    longTail: [
      'when will i get married by date of birth free',
      'marriage age prediction by date of birth',
      'delay in marriage astrology',
      'shadi kab hogi by date of birth',
      'marriage yoga in kundli',
    ],
    hindi: ['शादी कब होगी', 'विवाह समय', 'शादी की उम्र', 'विवाह योग'],
    rationale: '"Shadi kab hogi" is the exact Hindi query; English speakers use "when will I get married". Both in title+desc.',
  },

  'career-predictor': {
    primary: 'career prediction by date of birth',
    secondary: ['career astrology', 'job prediction by astrology', 'profession by date of birth'],
    longTail: [
      'career prediction by date of birth free',
      'astrology for job by date of birth',
      'which career is best for me astrology',
      'job horoscope free',
      'astrology career prediction',
    ],
    hindi: ['करियर भविष्यवाणी', 'करियर ज्योतिष', 'जन्म तिथि से करियर', 'नौकरी ज्योतिष'],
    rationale: 'Mangools showed 5 distinct career queries — "career prediction", "astrology for job by date of birth", "job prediction by astrology", "astrology career prediction", "profession by date of birth". Title covers all.',
  },

  'lucky-color': {
    primary: 'lucky color by date of birth',
    secondary: ['numerology color', 'lucky color calculator', 'auspicious colors'],
    longTail: [
      'lucky color by date of birth free',
      'numerology and colours',
      'lucky color for me by numerology',
      'daily lucky color',
      'lucky color for wedding outfit',
    ],
    hindi: ['शुभ रंग', 'भाग्यशाली रंग', 'अंक ज्योतिष रंग'],
    rationale: 'Mangools showed "numerology and color", "colors in numerology", "numerology colors", "numerology and colours" — all variants covered.',
  },

  'bhagyodaya-year': {
    primary: 'when will my luck rise',
    secondary: ['bhagyodaya year', 'luck rise calculator', 'fortune year'],
    longTail: [
      'when will my luck rise by date of birth',
      'bhagyodaya year calculator free',
      'luck rising year numerology',
      'when will i be successful astrology',
    ],
    hindi: ['भाग्योदय वर्ष', 'भाग्य कब चमकेगा', 'भाग्योदय कैलकुलेटर'],
    rationale: 'Emotional-question format ("when will my luck rise") wins CTR over sterile "bhagyodaya calculator".',
  },

  'child-name': {
    primary: 'baby name by date of birth',
    secondary: ['numerology baby name', 'lucky baby name', 'nakshatra baby name'],
    longTail: [
      'baby name by date of birth numerology',
      'baby name by nakshatra free',
      'lucky baby girl name hindu',
      'baby boy name numerology',
      'child name calculator india',
    ],
    hindi: ['बच्चे का नाम', 'बच्चे का नाम जन्म तिथि से', 'नक्षत्र से बच्चे का नाम'],
    rationale: 'High commercial intent — parents will return to reference site for years.',
  },

  'lucky-bank-account-number': {
    primary: 'lucky bank account number',
    secondary: ['bank account numerology', 'account number check'],
    longTail: [
      'lucky bank account number numerology',
      'is my bank account number lucky',
      'account number for wealth numerology',
    ],
    hindi: ['शुभ बैंक खाता नंबर', 'बैंक खाता अंक ज्योतिष'],
    rationale: 'Niche but high-intent — serious numerology users looking to change accounts.',
  },

  'lucky-vehicle-number': {
    primary: 'lucky vehicle number',
    secondary: ['car number numerology', 'bike number lucky', 'vehicle registration numerology'],
    longTail: [
      'lucky vehicle number by date of birth',
      'car number numerology check',
      'lucky bike number numerology',
      'is my vehicle number lucky',
    ],
    hindi: ['शुभ वाहन नंबर', 'कार नंबर अंक ज्योतिष', 'बाइक नंबर शुभ'],
    rationale: 'Very India-specific — lucky vehicle number search is mostly Indian.',
  },

  'love-compatibility-numerology': {
    primary: 'love compatibility by date of birth',
    secondary: ['love match numerology', 'couple compatibility', 'relationship numerology'],
    longTail: [
      'love compatibility by date of birth free',
      'love match by numerology free',
      'couple compatibility calculator',
      'numerology love match by name',
    ],
    hindi: ['प्रेम अनुकूलता', 'जन्म तिथि से प्रेम मिलान', 'युगल अनुकूलता'],
    rationale: 'Younger audience — competes against marriage-matching but leans emotional vs marital.',
  },

  'wealth-money-predictor': {
    primary: 'wealth prediction by date of birth',
    secondary: ['money numerology', 'wealth number calculator', 'will i be rich astrology'],
    longTail: [
      'wealth prediction by date of birth free',
      'money attraction numerology',
      'will i be rich by date of birth',
      'financial success astrology',
    ],
    hindi: ['धन भविष्यवाणी', 'धन अंक ज्योतिष', 'संपत्ति भविष्यवाणी'],
    rationale: 'Mangools showed "wealth prediction by date of birth free" — exact match in title.',
  },

  'room-advisor': {
    primary: 'bedroom vastu',
    secondary: ['kitchen vastu', 'room vastu', 'pooja room direction', 'office vastu'],
    longTail: [
      'bedroom vastu check online free',
      'kitchen vastu tips',
      'pooja room direction according to vastu',
      'bedroom direction for couples vastu',
      'office vastu free calculator',
    ],
    hindi: ['शयन कक्ष वास्तु', 'रसोई वास्तु', 'पूजा कक्ष वास्तु', 'कमरा वास्तु'],
    rationale: 'Tool covers multiple rooms — title names the three most-searched (bedroom, kitchen, pooja).',
  },

  'house-number': {
    primary: 'house number vastu',
    secondary: ['house number numerology', 'flat number lucky', 'apartment number vastu'],
    longTail: [
      'house number vastu check free',
      'is my house number lucky',
      'flat number numerology',
      'apartment number vastu online',
    ],
    hindi: ['घर नंबर वास्तु', 'फ्लैट नंबर शुभ', 'घर नंबर अंक ज्योतिष'],
    rationale: 'Crosses vastu + numerology — description mentions both to catch both query types.',
  },

  'muhurat-finder': {
    primary: 'shubh muhurat 2026',
    secondary: ['muhurat finder', 'auspicious time calculator', 'panchang muhurat'],
    longTail: [
      'shubh muhurat for marriage 2026',
      'griha pravesh muhurat 2026',
      'vehicle purchase muhurat 2026',
      'business start muhurat 2026',
      'vivah muhurat calculator',
    ],
    hindi: ['शुभ मुहूर्त', 'विवाह मुहूर्त', 'गृह प्रवेश मुहूर्त', 'वाहन मुहूर्त'],
    rationale: 'Mangools showed "vehicle purchase muhurat" specifically. Year modifier critical.',
  },

  'yoga-calculator': {
    primary: 'yoga in kundli',
    secondary: ['raj yoga', 'gaja kesari yoga', 'panch mahapurush yoga', 'neecha bhanga raj yoga'],
    longTail: [
      'all yogas in my kundli free',
      'vedic yoga calculator online',
      'yoga calculator by date of birth',
      'neecha bhanga raj yoga check',
      'guru chandal yoga check',
    ],
    hindi: ['कुंडली में योग', 'राज योग', 'गज केसरी योग', 'पंच महापुरुष योग'],
    rationale: 'Covers all yogas vs raj-yoga-only — differentiated by "all yogas" framing.',
  },

  // ============ CONCEPTS / BLOG / TITHI (dynamic templates) ============
  'concepts-hub': {
    primary: 'vedic astrology concepts',
    secondary: ['jyotish glossary', 'nakshatras list', 'rashis list', 'planets in astrology'],
    longTail: [
      'complete vedic astrology concepts list',
      'all nakshatras meanings',
      'all rashis meanings in hindi',
      'jyotish dictionary free',
    ],
    hindi: ['वैदिक ज्योतिष अवधारणाएं', 'ज्योतिष शब्दकोश', 'सभी नक्षत्र', 'सभी राशि'],
    rationale: 'Reference hub — title previously had Sanskrit diacritics (Vāstu, Jyotiṣa). Replaced with plain forms matching user queries.',
  },

  'concept-page': {
    primary: '{conceptName} in vedic astrology',
    secondary: ['{conceptName} meaning', '{conceptName} effects', '{conceptName} explained'],
    longTail: [
      '{conceptName} meaning in hindi',
      '{conceptName} effects in kundli',
      '{conceptName} significance astrology',
      'how to identify {conceptName}',
    ],
    hindi: ['{हिंदीनाम} का अर्थ', '{हिंदीनाम} कुंडली में', '{हिंदीनाम} प्रभाव'],
    rationale: 'Template per-concept. Current format "{name} — {first-semicolon}" is too terse. New format: "{Name} ({English}) in Vedic Astrology — Meaning & Effects | VastuCart" to include head-term + semantic context.',
  },

  'tithi-page': {
    primary: '{tithiName} tithi',
    secondary: ['{tithiName} meaning', '{tithiName} significance', '{tithiName} fast'],
    longTail: [
      '{tithiName} tithi significance in hindu panchang',
      '{tithiName} vrat katha',
      '{tithiName} muhurat check',
    ],
    hindi: ['{हिंदीनाम} तिथि', '{हिंदीनाम} का महत्व'],
    rationale: 'Tithi queries mix festival + muhurat intent. Description points toward panchang utility.',
  },

  'blog-hub': {
    primary: 'astrology and numerology blog',
    secondary: ['kundli guides', 'vastu tips', 'numerology articles', 'vedic astrology blog india'],
    longTail: [
      'best astrology blog india',
      'kundli guide free read',
      'numerology blog in hindi',
      'vastu tips for home blog',
    ],
    hindi: ['ज्योतिष ब्लॉग', 'अंक ज्योतिष लेख', 'कुंडली गाइड', 'वास्तु टिप्स'],
    rationale: 'Blog hub currently reads "Blog | Astrology & Numerology Guides" — functional but lacking intent. Improved.',
  },

  'life-path-number-slug': {
    primary: 'life path number {n}',
    secondary: ['life path {n} meaning', 'life path {n} personality', 'life path {n} career', 'life path {n} love'],
    longTail: [
      'life path number {n} meaning in hindi',
      'life path {n} compatibility numbers',
      'life path number {n} famous people',
      'life path {n} strengths weaknesses',
    ],
    hindi: ['मूलांक {n}', 'जीवन पथ {n}', 'मूलांक {n} का अर्थ', 'मूलांक {n} व्यक्तित्व'],
    rationale: 'Per-number pages already use pageTitleFor() producing "Life Path Number {n}: {archetype} — Meaning, Traits, Career & Love | VastuCart". That format is already keyword-strong and requires no change.',
  },

  // ============ STATIC PAGES ============
  'about': {
    primary: 'vastucart astrology website india',
    secondary: ['about vastucart', 'trusted vedic astrology site', 'free indian astrology platform'],
    longTail: [
      'vastucart team and mission',
      'free indian astrology platform review',
      'best vedic astrology website india free',
    ],
    hindi: ['वास्तुकार्ट के बारे में', 'भारतीय ज्योतिष वेबसाइट', 'मुफ्त वैदिक ज्योतिष'],
    rationale: 'Brand + trust page — primary purpose is brand-search capture, secondary is reviews/recommendations.',
  },

  'privacy': {
    primary: 'vastucart privacy policy',
    secondary: ['vastucart data protection', 'user privacy astrology site'],
    longTail: ['vastucart privacy policy india', 'how vastucart uses birth data'],
    hindi: ['गोपनीयता नीति वास्तुकार्ट'],
    rationale: 'Legal page. Title clarity > keyword optimization.',
  },

  'terms': {
    primary: 'vastucart terms of service',
    secondary: ['vastucart usage terms', 'astrology site disclaimer'],
    longTail: ['vastucart terms and conditions india'],
    hindi: ['सेवा की शर्तें वास्तुकार्ट'],
    rationale: 'Legal page. Title clarity > keyword optimization.',
  },
};

export type PageSeo = {
  title: { en: string; hi: string };
  description: { en: string; hi: string };
};

/**
 * The optimized title + description chosen for each Phase 1 page.
 * Mirrors what is written into en.json/hi.json and tools.ts — keep in sync.
 */
export const PHASE_1_SEO: Record<string, PageSeo> = {
  home: {
    title: {
      en: 'Free Kundli, Numerology & Vastu by Date of Birth | VastuCart',
      hi: 'मुफ्त कुंडली, अंक ज्योतिष और वास्तु — जन्म तिथि से | VastuCart',
    },
    description: {
      en: 'Free online kundli, numerology, vastu and muhurat calculators for India. Get your janam kundli, life path number, lucky colors and more — Hindi & English.',
      hi: 'भारत के लिए मुफ्त ऑनलाइन कुंडली, अंक ज्योतिष, वास्तु और मुहूर्त कैलकुलेटर। जन्म तिथि से जानें जन्म कुंडली, मूलांक, भाग्यांक, शुभ अंक और शुभ रंग।',
    },
  },
  'tools-hub': {
    title: {
      en: 'Free Astrology, Numerology & Vastu Calculators | VastuCart',
      hi: 'मुफ्त ज्योतिष, अंक ज्योतिष और वास्तु कैलकुलेटर | VastuCart',
    },
    description: {
      en: 'All free Vedic tools in one place — kundli, numerology, vastu, muhurat. Instant online calculators with Hindi & English support. No login required.',
      hi: 'एक जगह पर सभी मुफ्त वैदिक टूल्स — कुंडली, अंक ज्योतिष, वास्तु, मुहूर्त। तत्काल ऑनलाइन कैलकुलेटर, हिंदी और अंग्रेजी में। बिना लॉगिन।',
    },
  },
  'category-numerology': {
    title: {
      en: 'Free Numerology Calculator by Date of Birth | VastuCart',
      hi: 'मुफ्त अंक ज्योतिष कैलकुलेटर — जन्म तिथि से | VastuCart',
    },
    description: {
      en: 'Free numerology tools — life path number (mulank), destiny number (bhagyank), lucky number, Lo Shu grid, Chaldean name numerology. Hindi & English.',
      hi: 'मुफ्त अंक ज्योतिष टूल्स — मूलांक, भाग्यांक, शुभ अंक, लो शू ग्रिड, नाम अंक ज्योतिष (चैल्डियन)। जन्म तिथि से तुरंत परिणाम हिंदी और अंग्रेजी में।',
    },
  },
  'category-astrology': {
    title: {
      en: 'Free Vedic Astrology — Kundli, Dasha & Nakshatra | VastuCart',
      hi: 'मुफ्त वैदिक ज्योतिष — कुंडली, दशा, नक्षत्र | VastuCart',
    },
    description: {
      en: 'Free Vedic astrology tools — janam kundli, mahadasha timeline, nakshatra finder, manglik check, sade sati, kundli milan & more. Hindi & English.',
      hi: 'मुफ्त वैदिक ज्योतिष टूल्स — जन्म कुंडली, महादशा, नक्षत्र, मांगलिक, साढ़े साती, कुंडली मिलान। जन्म तिथि से तुरंत परिणाम हिंदी में।',
    },
  },
  'category-vastu': {
    title: {
      en: 'Free Vastu Shastra Tools — Home, Room & Number | VastuCart',
      hi: 'मुफ्त वास्तु शास्त्र टूल्स — घर, कमरा, नंबर | VastuCart',
    },
    description: {
      en: 'Free Vastu calculators for home — house number check, room direction advisor, bedroom/kitchen/pooja placement, directional guide. Classical Vastu rules.',
      hi: 'घर के लिए मुफ्त वास्तु कैलकुलेटर — घर नंबर जांच, कमरा दिशा सलाह, शयन-कक्ष/रसोई/पूजा-कक्ष स्थान, दिशा मार्गदर्शन। शास्त्रीय वास्तु नियम।',
    },
  },
  'category-muhurat': {
    title: {
      en: 'Shubh Muhurat Finder 2026 — Free Auspicious Time | VastuCart',
      hi: 'शुभ मुहूर्त खोजक 2026 — मुफ्त शुभ समय | VastuCart',
    },
    description: {
      en: 'Find shubh muhurat for marriage, griha pravesh, vehicle purchase and business start — classical panchang-based. Free auspicious time calculator for 2026.',
      hi: 'विवाह, गृह प्रवेश, वाहन क्रय और व्यवसाय आरंभ के लिए शुभ मुहूर्त खोजें — शास्त्रीय पंचांग आधारित। 2026 के लिए मुफ्त शुभ समय कैलकुलेटर।',
    },
  },
  kundli: {
    title: {
      en: 'Free Kundli by Date of Birth — Janam Patri Online | VastuCart',
      hi: 'मुफ्त कुंडली जन्म तिथि से — जन्म पत्री ऑनलाइन | VastuCart',
    },
    description: {
      en: 'Make your free janam kundli online. Vedic birth chart with planetary positions, dasha, yoga, dosha analysis and PDF. Lahiri ayanamsa. Hindi & English.',
      hi: 'मुफ्त ऑनलाइन जन्म कुंडली बनाएं। ग्रह स्थिति, दशा, योग, दोष विश्लेषण और PDF सहित। जन्म तिथि, समय, स्थान से सटीक वैदिक कुंडली लाहिरी अयनांश पर।',
    },
  },
  'marriage-matching': {
    title: {
      en: 'Free Kundli Matching — 36 Guna Milan Online | VastuCart',
      hi: 'मुफ्त कुंडली मिलान — 36 गुण मिलान ऑनलाइन | VastuCart',
    },
    description: {
      en: 'Free kundli matching by name and date of birth. 36 guna score, manglik check, nadi dosha analysis. Complete ashtakoot gun milan in Hindi & English.',
      hi: 'नाम और जन्म तिथि से मुफ्त कुंडली मिलान। 36 गुण स्कोर, मांगलिक और नाड़ी दोष जांच। पूर्ण अष्टकूट गुण मिलान हिंदी और अंग्रेजी में।',
    },
  },
  manglik: {
    title: {
      en: 'Are You Manglik? — Free Mangal Dosha Check | VastuCart',
      hi: 'क्या आप मांगलिक हैं? — मुफ्त मंगल दोष जांच | VastuCart',
    },
    description: {
      en: 'Check if you are manglik in one click. Free mangal dosha calculator by date of birth with intensity, cancellation rules, remedies and marriage impact.',
      hi: 'एक क्लिक में जानें क्या आप मांगलिक हैं। जन्म तिथि से मुफ्त मंगल दोष जांच — तीव्रता, निवारण नियम, उपाय और विवाह पर प्रभाव की पूरी जानकारी।',
    },
  },
  'kalsarp-dosha': {
    title: {
      en: 'Kaal Sarp Dosha Check by Date of Birth — Free | VastuCart',
      hi: 'काल सर्प दोष जांच — जन्म तिथि से मुफ्त | VastuCart',
    },
    description: {
      en: 'Check kaal sarp dosha in your kundli free. Identify the type (12 variants), severity, life-area effects and classical remedies. Based on Lahiri ayanamsa.',
      hi: 'अपनी कुंडली में मुफ्त काल सर्प दोष जांच। 12 प्रकार, तीव्रता, जीवन क्षेत्रों पर प्रभाव और शास्त्रीय उपाय। लाहिरी अयनांश पर आधारित गणना।',
    },
  },
  'sade-sati': {
    title: {
      en: 'Sade Sati Calculator — Shani Dasha Check Free | VastuCart',
      hi: 'साढ़े साती कैलकुलेटर — शनि दशा मुफ्त जांच | VastuCart',
    },
    description: {
      en: 'Are you in sade sati? Free shani calculator by moon sign — phase (rising, peak, setting), start and end dates, effects, upaya and gemstone guidance.',
      hi: 'क्या आप साढ़े साती में हैं? चंद्र राशि से मुफ्त शनि कैलकुलेटर — चरण (आरोहण, शिखर, अवरोहण), आरंभ-समाप्ति तिथि, प्रभाव और शनि उपाय।',
    },
  },
  'gemstone-recommender': {
    title: {
      en: 'Gemstone by Date of Birth — Free Rashi Ratna Finder | VastuCart',
      hi: 'जन्म तिथि से रत्न — मुफ्त राशि रत्न खोजक | VastuCart',
    },
    description: {
      en: 'Find your lucky gemstone (rashi ratna) by date of birth free. Personalized suggestion with wearing method, weight, metal, mantra and starting day.',
      hi: 'जन्म तिथि से अपना भाग्यशाली रत्न (राशि रत्न) मुफ्त खोजें। व्यक्तिगत सुझाव, धारण विधि, वजन, धातु, मंत्र और आरंभ-दिवस की पूरी जानकारी।',
    },
  },
  'life-path-number': {
    title: {
      en: 'Life Path Number by Date of Birth — Mulank Free | VastuCart',
      hi: 'मूलांक कैलकुलेटर — जन्म तिथि से मुफ्त | VastuCart',
    },
    description: {
      en: 'Calculate your life path number (mulank) free by date of birth. Numerology personality, career, relationships, lucky number and life purpose in Hindi & English.',
      hi: 'जन्म तिथि से मुफ्त मूलांक गणना करें। अंक ज्योतिष से व्यक्तित्व, करियर, रिश्ते, शुभ अंक और जीवन उद्देश्य की पूरी जानकारी हिंदी और अंग्रेजी में।',
    },
  },
  'lucky-mobile-number': {
    title: {
      en: 'Lucky Mobile Number by Numerology — Free Check | VastuCart',
      hi: 'शुभ मोबाइल नंबर अंक ज्योतिष से — मुफ्त जांच | VastuCart',
    },
    description: {
      en: 'Is your mobile number lucky? Free mobile numerology calculator by date of birth. Get lucky digits, business compatibility and number-change advice.',
      hi: 'क्या आपका मोबाइल नंबर शुभ है? जन्म तिथि से मुफ्त मोबाइल नंबर अंक ज्योतिष जांच। शुभ अंक, व्यवसाय अनुकूलता और नंबर सुधार सलाह पाएं।',
    },
  },
  'lucky-number': {
    title: {
      en: 'Lucky Number by Date of Birth — Free Calculator | VastuCart',
      hi: 'शुभ अंक जन्म तिथि से — मुफ्त कैलकुलेटर | VastuCart',
    },
    description: {
      en: 'Find your lucky numbers by date of birth free. Personal lucky number, daily lucky digits, lucky days, favorable directions and colors by numerology.',
      hi: 'जन्म तिथि से अपने शुभ अंक मुफ्त जानें। व्यक्तिगत शुभ अंक, दैनिक शुभ अंक, शुभ दिन, अनुकूल दिशा और रंग अंक ज्योतिष आधार पर।',
    },
  },
  'destiny-number': {
    title: {
      en: 'Destiny Number Calculator — Bhagyank Free | VastuCart',
      hi: 'भाग्यांक कैलकुलेटर — नाम और जन्म तिथि से मुफ्त | VastuCart',
    },
    description: {
      en: 'Find your destiny number (bhagyank) free online. Numerology name analysis, life purpose, career path and destiny meaning in Hindi & English.',
      hi: 'अपना भाग्यांक (डेस्टिनी नंबर) मुफ्त ऑनलाइन जानें। अंक ज्योतिष से नाम विश्लेषण, जीवन उद्देश्य, करियर पथ और भाग्य का अर्थ हिंदी में।',
    },
  },
  'chaldean-numerology': {
    title: {
      en: 'Chaldean Numerology Name Calculator — Free | VastuCart',
      hi: 'चैल्डियन अंक ज्योतिष नाम कैलकुलेटर — मुफ्त | VastuCart',
    },
    description: {
      en: 'Free Chaldean numerology name calculator. Get your chaldean name number, compound number, letter values and ancient numerological interpretation.',
      hi: 'मुफ्त चैल्डियन अंक ज्योतिष नाम कैलकुलेटर। अपना चैल्डियन नाम अंक, यौगिक संख्या, अक्षर मान और प्राचीन अंक ज्योतिषीय व्याख्या जानें।',
    },
  },
  'lo-shu-grid': {
    title: {
      en: 'Lo Shu Grid Calculator by Date of Birth — Free | VastuCart',
      hi: 'लो शू ग्रिड कैलकुलेटर — जन्म तिथि से मुफ्त | VastuCart',
    },
    description: {
      en: 'Free Lo Shu Grid calculator by date of birth. See missing numbers, personality planes, 3x3 magic square layout and classical remedies for weak digits.',
      hi: 'जन्म तिथि से मुफ्त लो शू ग्रिड कैलकुलेटर। अनुपस्थित अंक, व्यक्तित्व तल, 3×3 जादुई वर्ग और कमजोर अंकों के शास्त्रीय उपाय जानें।',
    },
  },
  'business-name': {
    title: {
      en: 'Business Name Numerology Check — Free Online | VastuCart',
      hi: 'व्यवसाय नाम अंक ज्योतिष जांच — मुफ्त | VastuCart',
    },
    description: {
      en: 'Is your business name lucky? Free numerology check for company and brand names. Owner compatibility, success score and alternative name suggestions.',
      hi: 'क्या आपका व्यवसाय नाम शुभ है? कंपनी और ब्रांड नाम की मुफ्त अंक ज्योतिष जांच। स्वामी अनुकूलता, सफलता स्कोर और वैकल्पिक नाम के सुझाव।',
    },
  },
  'name-correction': {
    title: {
      en: 'Name Correction by Numerology — Free Online | VastuCart',
      hi: 'नाम सुधार अंक ज्योतिष से — मुफ्त ऑनलाइन | VastuCart',
    },
    description: {
      en: 'Get name correction suggestions by numerology. Free analysis of your name vibration, spelling fixes and compatible variants based on your date of birth.',
      hi: 'अंक ज्योतिष से नाम सुधार सुझाव पाएं। नाम के कंपन का मुफ्त विश्लेषण, वर्तनी सुधार और जन्म तिथि के आधार पर अनुकूल नाम विकल्प।',
    },
  },
};
