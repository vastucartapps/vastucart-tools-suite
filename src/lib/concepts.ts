/**
 * Concept loader for the 138-concept corpus at content/concepts/drafts/.
 *
 * Reads markdown files at build time (not in-browser). Parses frontmatter
 * with a simple line-based parser (no yaml dep). Renders body via `marked`.
 *
 * Filesystem layout:
 * - 9 Grahas + 12 Rāśis: content/concepts/drafts/{slug}.md
 * - All others:          content/concepts/drafts/{category-dir}/{slug}.md
 *
 * Category-to-directory mapping:
 *   graha, rashi        → root (no subdirectory)
 *   nakshatra           → nakshatra/
 *   tithi               → tithi/
 *   bhava               → bhava/
 *   dosha               → dosha/
 *   yoga                → yoga/
 *   kuta                → koota/      (legacy directory name)
 *   varga               → varga/
 *   numerology          → numerology/
 *   vastu               → vastu/
 *   tarot               → tarot/
 */
import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';

export type ConceptCategory =
  | 'graha' | 'rashi' | 'nakshatra' | 'tithi' | 'bhava'
  | 'dosha' | 'yoga' | 'kuta' | 'varga'
  | 'numerology' | 'vastu' | 'tarot';

export interface Concept {
  slug: string;
  name: string;
  devanagari: string;
  category: ConceptCategory;
  description: string;
  wikidata: string;
  targetWordCount: string;
  status: string;
  /** Category-specific fields (position, pakshas, etc.) as raw strings. */
  extra: Record<string, string>;
  body: string;      // Raw markdown body (without frontmatter)
  bodyHtml: string;  // Rendered HTML
}

const DRAFTS_DIR = path.join(process.cwd(), 'content/concepts/drafts');

const CATEGORY_DIR: Record<ConceptCategory, string | null> = {
  graha: null,
  rashi: null,
  nakshatra: 'nakshatra',
  tithi: 'tithi',
  bhava: 'bhava',
  dosha: 'dosha',
  yoga: 'yoga',
  kuta: 'koota',
  varga: 'varga',
  numerology: 'numerology',
  vastu: 'vastu',
  tarot: 'tarot',
};

// Slug → canonical category. Built once, cached.
let SLUG_INDEX: Map<string, ConceptCategory> | null = null;

const GRAHA_SLUGS = new Set([
  'surya', 'chandra', 'mangala', 'budha', 'brihaspati',
  'shukra', 'shani', 'rahu', 'ketu',
]);
const RASHI_SLUGS = new Set([
  'mesha', 'vrishabha', 'mithuna', 'karka', 'simha', 'kanya',
  'tula', 'vrishchika', 'dhanu', 'makara', 'kumbha', 'meena',
]);

function buildSlugIndex(): Map<string, ConceptCategory> {
  if (SLUG_INDEX) return SLUG_INDEX;
  const index = new Map<string, ConceptCategory>();
  for (const slug of GRAHA_SLUGS) index.set(slug, 'graha');
  for (const slug of RASHI_SLUGS) index.set(slug, 'rashi');
  for (const [category, dir] of Object.entries(CATEGORY_DIR) as [ConceptCategory, string | null][]) {
    if (!dir) continue;
    const full = path.join(DRAFTS_DIR, dir);
    if (!fs.existsSync(full)) continue;
    for (const file of fs.readdirSync(full)) {
      if (!file.endsWith('.md')) continue;
      const slug = file.replace(/\.md$/, '');
      index.set(slug, category);
    }
  }
  SLUG_INDEX = index;
  return index;
}

function parseFrontmatter(raw: string): { fm: Record<string, string>; body: string } {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) throw new Error('No frontmatter');
  const fm: Record<string, string> = {};
  for (const line of m[1].split('\n')) {
    const kv = line.match(/^([\w-]+):\s*(.*)$/);
    if (kv) fm[kv[1]] = kv[2].trim();
  }
  return { fm, body: m[2] };
}

function conceptFilePath(slug: string, category: ConceptCategory): string {
  const dir = CATEGORY_DIR[category];
  return dir
    ? path.join(DRAFTS_DIR, dir, `${slug}.md`)
    : path.join(DRAFTS_DIR, `${slug}.md`);
}

export function getConceptCategory(slug: string): ConceptCategory | null {
  return buildSlugIndex().get(slug) ?? null;
}

export function loadConcept(slug: string): Concept | null {
  const category = getConceptCategory(slug);
  if (!category) return null;
  const filepath = conceptFilePath(slug, category);
  if (!fs.existsSync(filepath)) return null;
  const raw = fs.readFileSync(filepath, 'utf8');
  const { fm, body } = parseFrontmatter(raw);
  const universalKeys = new Set([
    'slug', 'name', 'devanagari', 'category', 'description',
    'wikidata', 'target_word_count', 'status',
  ]);
  const extra: Record<string, string> = {};
  for (const [k, v] of Object.entries(fm)) {
    if (!universalKeys.has(k)) extra[k] = v;
  }
  const bodyHtml = marked.parse(body, { async: false }) as string;
  return {
    slug: fm.slug ?? slug,
    name: fm.name ?? slug,
    devanagari: fm.devanagari ?? '',
    category: (fm.category as ConceptCategory) ?? category,
    description: fm.description ?? '',
    wikidata: fm.wikidata ?? '',
    targetWordCount: fm.target_word_count ?? '',
    status: fm.status ?? '',
    extra,
    body,
    bodyHtml,
  };
}

/** Return all concepts in a given category, in filesystem order. */
export function loadConceptsByCategory(category: ConceptCategory): Concept[] {
  const index = buildSlugIndex();
  const slugs: string[] = [];
  for (const [slug, cat] of index.entries()) {
    if (cat === category) slugs.push(slug);
  }
  return slugs
    .map((slug) => loadConcept(slug))
    .filter((c): c is Concept => c !== null);
}

/** All 138 concepts. Useful for hub, sitemap, CI. */
export function loadAllConcepts(): Concept[] {
  const index = buildSlugIndex();
  return [...index.keys()]
    .map((slug) => loadConcept(slug))
    .filter((c): c is Concept => c !== null);
}

/** All slugs in the corpus — for generateStaticParams. */
export function getAllConceptSlugs(): { slug: string; category: ConceptCategory }[] {
  const index = buildSlugIndex();
  return [...index.entries()].map(([slug, category]) => ({ slug, category }));
}

/** Category-specific display order for the hub page. */
export function getCategoryOrder(category: ConceptCategory): string[] {
  switch (category) {
    case 'graha':
      return ['surya', 'chandra', 'mangala', 'budha', 'brihaspati', 'shukra', 'shani', 'rahu', 'ketu'];
    case 'rashi':
      return ['mesha', 'vrishabha', 'mithuna', 'karka', 'simha', 'kanya', 'tula', 'vrishchika', 'dhanu', 'makara', 'kumbha', 'meena'];
    case 'nakshatra':
      return ['ashwini', 'bharani', 'krittika', 'rohini', 'mrigashira', 'ardra', 'punarvasu', 'pushya', 'ashlesha', 'magha', 'purva-phalguni', 'uttara-phalguni', 'hasta', 'chitra', 'swati', 'vishakha', 'anuradha', 'jyeshtha', 'mula', 'purva-ashadha', 'uttara-ashadha', 'shravana', 'dhanishta', 'shatabhisha', 'purva-bhadrapada', 'uttara-bhadrapada', 'revati'];
    case 'tithi':
      return ['pratipada', 'dwitiya', 'tritiya', 'chaturthi', 'panchami', 'shashthi', 'saptami', 'ashtami', 'navami', 'dashami', 'ekadashi', 'dwadashi', 'trayodashi', 'chaturdashi', 'purnima', 'amavasya'];
    case 'bhava':
      return ['tanu-bhava', 'dhana-bhava', 'sahaja-bhava', 'sukha-bhava', 'putra-bhava', 'ripu-bhava', 'kalatra-bhava', 'ayush-bhava', 'dharma-bhava', 'karma-bhava', 'labha-bhava', 'vyaya-bhava'];
    case 'dosha':
      return ['grahan-dosha', 'kaal-sarp-dosha', 'mangal-dosha', 'nadi-dosha', 'pitra-dosha', 'sade-sati'];
    case 'yoga':
      return ['bhadra-yoga', 'dhana-yoga', 'gaja-kesari-yoga', 'hamsa-yoga', 'malavya-yoga', 'neecha-bhanga-raja-yoga', 'pancha-mahapurusha-yoga', 'raj-yoga', 'ruchaka-yoga', 'sasa-yoga', 'vipareeta-raja-yoga'];
    case 'kuta':
      return ['varna-koota', 'vashya-koota', 'tara-koota', 'yoni-koota', 'graha-maitri-koota', 'gana-koota', 'bhakoot-koota', 'nadi-koota'];
    case 'varga':
      return ['rashi-d1', 'hora-d2', 'drekkana-d3', 'chaturthamsha-d4', 'saptamsha-d7', 'navamsha-d9', 'dashamsha-d10', 'dwadashamsha-d12', 'shodashamsha-d16', 'vimshamsha-d20', 'chaturvimshamsha-d24', 'saptavimshamsha-d27', 'trimshamsha-d30', 'khavedamsha-d40', 'akshavedamsha-d45', 'shashtiamsha-d60'];
    case 'numerology':
      return ['life-path-number', 'destiny-number', 'birthday-number', 'master-numbers', 'soul-urge-number', 'expression-number', 'chaldean-numerology', 'pythagorean-numerology', 'lo-shu-grid'];
    case 'vastu':
      return ['vastu-purusha-mandala', 'brahmasthana', 'eight-directions', 'pancha-bhutas'];
    case 'tarot':
      return ['rider-waite-deck', 'major-arcana', 'minor-arcana', 'suit-of-wands', 'suit-of-cups', 'suit-of-swords', 'suit-of-pentacles', 'court-cards'];
  }
}

export function getConceptsByCategoryOrdered(category: ConceptCategory): Concept[] {
  const order = getCategoryOrder(category);
  return order
    .map((slug) => loadConcept(slug))
    .filter((c): c is Concept => c !== null);
}

/** Adjacent concepts within a category for prev/next navigation. */
export function getAdjacentConcepts(category: ConceptCategory, slug: string): {
  prev: Concept | null;
  next: Concept | null;
} {
  const order = getCategoryOrder(category);
  const idx = order.indexOf(slug);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? loadConcept(order[idx - 1]) : null,
    next: idx < order.length - 1 ? loadConcept(order[idx + 1]) : null,
  };
}

/** URL path for a concept. Tithis get nested /concepts/tithi/{slug}. */
export function conceptPath(concept: Concept | { slug: string; category: ConceptCategory }): string {
  return concept.category === 'tithi'
    ? `/concepts/tithi/${concept.slug}`
    : `/concepts/${concept.slug}`;
}

export function categoryDisplayName(category: ConceptCategory): string {
  const MAP: Record<ConceptCategory, string> = {
    graha: 'Grahas',
    rashi: 'Rāśis',
    nakshatra: 'Nakshatras',
    tithi: 'Tithis',
    bhava: 'Bhāvas',
    dosha: 'Doshas',
    yoga: 'Yogas',
    kuta: 'Kūṭas',
    varga: 'Vargas',
    numerology: 'Numerology',
    vastu: 'Vāstu',
    tarot: 'Tarot',
  };
  return MAP[category];
}

export const CATEGORY_ORDER: ConceptCategory[] = [
  'graha', 'rashi', 'nakshatra', 'tithi', 'bhava',
  'dosha', 'yoga', 'kuta', 'varga',
  'numerology', 'vastu', 'tarot',
];
