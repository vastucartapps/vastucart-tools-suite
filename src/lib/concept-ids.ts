/**
 * Concept @id registry.
 *
 * Single source of truth for all 138 concept entity @ids, plus TermSet @ids
 * for Nakshatras (§3.3) and Tithis (§3.4), plus canonical Person @ids per
 * shared contracts §2.2 author-assignment rule.
 *
 * Both the concept-route schema emission and the CI fixture validator
 * import from this module.
 */
import type { ConceptCategory } from './concepts';

const BASE = 'https://www.vastucart.in';

/** Concept entity @id per shared contracts §3: /concepts/{slug}#entity */
export function conceptEntityId(slug: string): string {
  return `${BASE}/concepts/${slug}#entity`;
}

/** Webpage-level @id for a concept. Tithis get nested path. */
export function conceptPageId(slug: string, category: ConceptCategory): string {
  return category === 'tithi'
    ? `${BASE}/concepts/tithi/${slug}#webpage`
    : `${BASE}/concepts/${slug}#webpage`;
}

/** Absolute URL for a concept page (not the #webpage @id). */
export function conceptUrl(slug: string, category: ConceptCategory): string {
  return category === 'tithi'
    ? `${BASE}/concepts/tithi/${slug}`
    : `${BASE}/concepts/${slug}`;
}

// =============================================================================
// TermSets per shared contracts §3.3, §3.4
// =============================================================================

export const TERMSET_IDS = {
  nakshatra: `${BASE}/concepts/nakshatra-set#termset`,
  tithi: `${BASE}/concepts/tithi-set#termset`,
} as const;

export function termSetIdFor(category: ConceptCategory): string | null {
  if (category === 'nakshatra') return TERMSET_IDS.nakshatra;
  if (category === 'tithi') return TERMSET_IDS.tithi;
  return null;
}

// =============================================================================
// Canonical Person @ids per shared contracts §2.2
// =============================================================================

export const PERSON_IDS = {
  /**
   * The editorial entity is the canonical author for every page. The
   * profile lives on the main domain, not the blog cluster, so the
   * Person href resolves same-origin and Google can crawl it without a
   * cross-subdomain hop.
   */
  vastucartEditorial: 'https://www.vastucart.in/authors/vastucart-editorial#person',
} as const;

/**
 * Author assignment for concept pages.
 *
 * Previously split jyotish-vs-other across two named persons. We dropped
 * the named-person attribution because unverifiable bylines fail Google's
 * helpful-content review; the editorial team is the canonical author for
 * every category now. The function signature is kept so callers do not
 * need to change.
 */
export function authorIdForCategory(_category: ConceptCategory): string {
  return PERSON_IDS.vastucartEditorial;
}

// =============================================================================
// Canonical org / website @ids (already emitted elsewhere; re-exported for
// CI convenience so a validator can check that cross-references resolve).
// =============================================================================

export const ORG_ID = `${BASE}/#organization`;
export const WEBSITE_ID = `${BASE}/#website`;

// =============================================================================
// Full concept-slug index (for CI exhaustive checks)
// =============================================================================

export const ALL_CONCEPT_SLUGS: readonly string[] = [
  // Grahas (9)
  'surya', 'chandra', 'mangala', 'budha', 'brihaspati', 'shukra', 'shani', 'rahu', 'ketu',
  // Rāśis (12)
  'mesha', 'vrishabha', 'mithuna', 'karka', 'simha', 'kanya',
  'tula', 'vrishchika', 'dhanu', 'makara', 'kumbha', 'meena',
  // Nakshatras (27)
  'ashwini', 'bharani', 'krittika', 'rohini', 'mrigashira', 'ardra',
  'punarvasu', 'pushya', 'ashlesha', 'magha', 'purva-phalguni', 'uttara-phalguni',
  'hasta', 'chitra', 'swati', 'vishakha', 'anuradha', 'jyeshtha',
  'mula', 'purva-ashadha', 'uttara-ashadha', 'shravana', 'dhanishta', 'shatabhisha',
  'purva-bhadrapada', 'uttara-bhadrapada', 'revati',
  // Tithis (16)
  'pratipada', 'dwitiya', 'tritiya', 'chaturthi', 'panchami', 'shashthi',
  'saptami', 'ashtami', 'navami', 'dashami', 'ekadashi', 'dwadashi',
  'trayodashi', 'chaturdashi', 'purnima', 'amavasya',
  // Bhāvas (12)
  'tanu-bhava', 'dhana-bhava', 'sahaja-bhava', 'sukha-bhava', 'putra-bhava', 'ripu-bhava',
  'kalatra-bhava', 'ayush-bhava', 'dharma-bhava', 'karma-bhava', 'labha-bhava', 'vyaya-bhava',
  // Doshas (6)
  'mangal-dosha', 'kaal-sarp-dosha', 'pitra-dosha', 'grahan-dosha', 'nadi-dosha', 'sade-sati',
  // Yogas (11)
  'raj-yoga', 'dhana-yoga', 'gaja-kesari-yoga', 'pancha-mahapurusha-yoga',
  'ruchaka-yoga', 'bhadra-yoga', 'hamsa-yoga', 'malavya-yoga', 'sasa-yoga',
  'neecha-bhanga-raja-yoga', 'vipareeta-raja-yoga',
  // Kūṭas (8)
  'varna-koota', 'vashya-koota', 'tara-koota', 'yoni-koota',
  'graha-maitri-koota', 'gana-koota', 'bhakoot-koota', 'nadi-koota',
  // Vargas (16)
  'rashi-d1', 'hora-d2', 'drekkana-d3', 'chaturthamsha-d4', 'saptamsha-d7',
  'navamsha-d9', 'dashamsha-d10', 'dwadashamsha-d12', 'shodashamsha-d16',
  'vimshamsha-d20', 'chaturvimshamsha-d24', 'saptavimshamsha-d27', 'trimshamsha-d30',
  'khavedamsha-d40', 'akshavedamsha-d45', 'shashtiamsha-d60',
  // Numerology (9)
  'life-path-number', 'destiny-number', 'soul-urge-number', 'expression-number',
  'birthday-number', 'master-numbers', 'lo-shu-grid',
  'chaldean-numerology', 'pythagorean-numerology',
  // Vāstu (4)
  'brahmasthana', 'eight-directions', 'pancha-bhutas', 'vastu-purusha-mandala',
  // Tarot (8)
  'major-arcana', 'minor-arcana', 'suit-of-wands', 'suit-of-cups',
  'suit-of-swords', 'suit-of-pentacles', 'court-cards', 'rider-waite-deck',
] as const;

export const TOTAL_CONCEPTS = ALL_CONCEPT_SLUGS.length;
