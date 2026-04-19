/**
 * Fixtures for buildConceptGraphNodes() — one per category.
 *
 * Each fixture names a representative slug from its category, the canonical
 * entity @id it must produce, and the canonical author @id per shared
 * contracts §2.2 author-assignment rule.
 *
 * Validated by scripts/validate-schema.ts as a separate phase after the
 * single-builder fixture pass.
 */
import type { ConceptCategory } from '@/lib/concepts';

export interface ConceptFixture {
  category: ConceptCategory;
  slug: string;
  /** Expected concept entity @id per conceptEntityId() in lib/concept-ids.ts */
  expectedEntityId: string;
  /** Expected author Person @id per authorIdForCategory() in lib/concept-ids.ts */
  expectedAuthorId: string;
  /** Expected canonical page URL (flat or nested per tithi rule) */
  expectedPageUrl: string;
  /** Nakshatras and tithis must emit inDefinedTermSet; others must not. */
  expectedTermSetId: string | null;
}

const JYOTISH_AUTHOR = 'https://blog.vastucart.in/authors/pt-raghav-sharma#person';
const EDITORIAL_AUTHOR = 'https://blog.vastucart.in/authors/vastucart-editorial#person';

export const CONCEPT_FIXTURES: ConceptFixture[] = [
  {
    category: 'graha',
    slug: 'surya',
    expectedEntityId: 'https://www.vastucart.in/concepts/surya#entity',
    expectedAuthorId: JYOTISH_AUTHOR,
    expectedPageUrl: 'https://www.vastucart.in/concepts/surya',
    expectedTermSetId: null,
  },
  {
    category: 'rashi',
    slug: 'mesha',
    expectedEntityId: 'https://www.vastucart.in/concepts/mesha#entity',
    expectedAuthorId: JYOTISH_AUTHOR,
    expectedPageUrl: 'https://www.vastucart.in/concepts/mesha',
    expectedTermSetId: null,
  },
  {
    category: 'nakshatra',
    slug: 'ashwini',
    expectedEntityId: 'https://www.vastucart.in/concepts/ashwini#entity',
    expectedAuthorId: JYOTISH_AUTHOR,
    expectedPageUrl: 'https://www.vastucart.in/concepts/ashwini',
    expectedTermSetId: 'https://www.vastucart.in/concepts/nakshatra-set#termset',
  },
  {
    category: 'tithi',
    slug: 'pratipada',
    expectedEntityId: 'https://www.vastucart.in/concepts/pratipada#entity',
    expectedAuthorId: JYOTISH_AUTHOR,
    expectedPageUrl: 'https://www.vastucart.in/concepts/tithi/pratipada',
    expectedTermSetId: 'https://www.vastucart.in/concepts/tithi-set#termset',
  },
  {
    category: 'bhava',
    slug: 'tanu-bhava',
    expectedEntityId: 'https://www.vastucart.in/concepts/tanu-bhava#entity',
    expectedAuthorId: JYOTISH_AUTHOR,
    expectedPageUrl: 'https://www.vastucart.in/concepts/tanu-bhava',
    expectedTermSetId: null,
  },
  {
    category: 'dosha',
    slug: 'mangal-dosha',
    expectedEntityId: 'https://www.vastucart.in/concepts/mangal-dosha#entity',
    expectedAuthorId: JYOTISH_AUTHOR,
    expectedPageUrl: 'https://www.vastucart.in/concepts/mangal-dosha',
    expectedTermSetId: null,
  },
  {
    category: 'yoga',
    slug: 'raj-yoga',
    expectedEntityId: 'https://www.vastucart.in/concepts/raj-yoga#entity',
    expectedAuthorId: JYOTISH_AUTHOR,
    expectedPageUrl: 'https://www.vastucart.in/concepts/raj-yoga',
    expectedTermSetId: null,
  },
  {
    category: 'kuta',
    slug: 'varna-koota',
    expectedEntityId: 'https://www.vastucart.in/concepts/varna-koota#entity',
    expectedAuthorId: JYOTISH_AUTHOR,
    expectedPageUrl: 'https://www.vastucart.in/concepts/varna-koota',
    expectedTermSetId: null,
  },
  {
    category: 'varga',
    slug: 'navamsha-d9',
    expectedEntityId: 'https://www.vastucart.in/concepts/navamsha-d9#entity',
    expectedAuthorId: JYOTISH_AUTHOR,
    expectedPageUrl: 'https://www.vastucart.in/concepts/navamsha-d9',
    expectedTermSetId: null,
  },
  {
    category: 'numerology',
    slug: 'life-path-number',
    expectedEntityId: 'https://www.vastucart.in/concepts/life-path-number#entity',
    expectedAuthorId: EDITORIAL_AUTHOR,
    expectedPageUrl: 'https://www.vastucart.in/concepts/life-path-number',
    expectedTermSetId: null,
  },
  {
    category: 'vastu',
    slug: 'vastu-purusha-mandala',
    expectedEntityId: 'https://www.vastucart.in/concepts/vastu-purusha-mandala#entity',
    expectedAuthorId: EDITORIAL_AUTHOR,
    expectedPageUrl: 'https://www.vastucart.in/concepts/vastu-purusha-mandala',
    expectedTermSetId: null,
  },
  {
    category: 'tarot',
    slug: 'major-arcana',
    expectedEntityId: 'https://www.vastucart.in/concepts/major-arcana#entity',
    expectedAuthorId: EDITORIAL_AUTHOR,
    expectedPageUrl: 'https://www.vastucart.in/concepts/major-arcana',
    expectedTermSetId: null,
  },
];
