/**
 * Concept-page JSON-LD emission.
 *
 * Two emission sites:
 *
 * - Per-concept pages (/concepts/{slug}, /concepts/tithi/{slug}):
 *     Organization + WebSite + WebPage + BreadcrumbList + DefinedTerm
 *     + Person reference (Person entity canonically owned by blog.vastucart.in
 *     per shared contracts §2.2 — we only reference by @id).
 *
 * - Hub page (/concepts):
 *     Organization + WebSite + CollectionPage + BreadcrumbList + ItemList
 *     + two canonical DefinedTermSet nodes (nakshatra-set per §3.3, tithi-set
 *     per §3.4). The hub is the canonical emission site for these TermSets;
 *     concept pages reference them via `inDefinedTermSet` and the hub closes
 *     the graph by emitting them once with full `hasDefinedTerm` member lists.
 *
 * @ids resolved via src/lib/concept-ids.ts (the single-source registry).
 */
import {
  EntityGraph,
  buildOrganizationNode,
  buildWebSiteNode,
  buildBreadcrumbListNode,
  buildFaqPageNode,
  buildSpeakableNode,
  localeUrl,
} from './entity-graph';
import type { Concept, ConceptCategory } from '@/lib/concepts';
import { categoryDisplayName, conceptPath } from '@/lib/concepts';
import { getConceptFaqs } from '@/lib/concepts/concept-faqs';
import {
  conceptEntityId,
  conceptUrl,
  authorIdForCategory,
  termSetIdFor,
  TERMSET_IDS,
  PERSON_IDS,
  ORG_ID,
  WEBSITE_ID,
} from '@/lib/concept-ids';

type JsonNode = Record<string, unknown>;

export function buildConceptDefinedTermNode(concept: Concept): JsonNode {
  const termSet = termSetIdFor(concept.category);
  const entityId = conceptEntityId(concept.slug);
  const sameAs: string[] = [];
  if (concept.wikidata) {
    sameAs.push(`https://www.wikidata.org/wiki/${concept.wikidata}`);
  }
  const node: JsonNode = {
    '@type': 'DefinedTerm',
    '@id': entityId,
    name: concept.name,
    alternateName: concept.devanagari || undefined,
    description: concept.description,
  };
  if (termSet) node.inDefinedTermSet = termSet;
  if (sameAs.length) node.sameAs = sameAs;
  return node;
}

export function buildConceptWebPageNode(params: {
  pageUrl: string;
  name: string;
  description: string;
  locale: string;
  breadcrumbId: string;
  mainEntityId: string;
  authorId: string;
}): JsonNode {
  return {
    '@type': 'WebPage',
    '@id': `${params.pageUrl}#webpage`,
    url: params.pageUrl,
    name: params.name,
    description: params.description,
    inLanguage: params.locale === 'hi' ? 'hi' : 'en',
    isPartOf: { '@id': WEBSITE_ID },
    breadcrumb: { '@id': params.breadcrumbId },
    mainEntity: { '@id': params.mainEntityId },
    about: { '@id': params.mainEntityId },
    author: { '@id': params.authorId },
    publisher: { '@id': ORG_ID },
  };
}

/** Build the full node array for a concept page. Exported for CI fixtures. */
export function buildConceptGraphNodes(concept: Concept, locale: string): Array<JsonNode | null> {
  const pageUrl = locale === 'hi'
    ? `https://www.vastucart.in/hi${conceptPath(concept)}`
    : conceptUrl(concept.slug, concept.category);
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const mainEntityId = conceptEntityId(concept.slug);
  const authorId = authorIdForCategory(concept.category);
  const categoryLabel = categoryDisplayName(concept.category);

  // Programmatic FAQs for rashi + nakshatra (drawn from existing
  // moon-sign-meanings + nakshatra-meanings data); other categories
  // return [] from getConceptFaqs.
  const localeKey = (locale === 'hi' ? 'hi' : 'en') as 'en' | 'hi';
  const faqs = getConceptFaqs(concept.slug, concept.category, localeKey);
  const speakableId = `${pageUrl}#speakable`;

  return [
    buildOrganizationNode(),
    buildWebSiteNode(),
    buildConceptWebPageNode({
      pageUrl,
      name: concept.name,
      description: concept.description,
      locale,
      breadcrumbId,
      mainEntityId,
      authorId,
    }),
    buildBreadcrumbListNode({
      id: breadcrumbId,
      items: [
        { name: locale === 'hi' ? 'होम' : 'Home', url: localeUrl(locale) },
        { name: locale === 'hi' ? 'अवधारणाएँ' : 'Concepts', url: localeUrl(locale, '/concepts') },
        { name: categoryLabel, url: `${localeUrl(locale, '/concepts')}#${concept.category}` },
        { name: concept.name, url: pageUrl },
      ],
    }),
    buildConceptDefinedTermNode(concept),
    // FAQPage emitted only for categories where the FAQs are derived from
    // structured classical data (rashi, nakshatra). Returns null and is
    // pruned by EntityGraph for other categories.
    buildFaqPageNode({
      pageUrl,
      faqs,
      authorId,
    }),
    buildSpeakableNode({
      id: speakableId,
      // Concept pages always render <h1>; the description paragraph below
      // is the second speakable target. Detail body is markdown-rendered
      // via .concept-body — using h2 within that prose is reliable.
      cssSelectors: ['h1', '.concept-body h2:first-of-type'],
    }),
  ];
}

export function ConceptEntityGraph({ concept, locale }: { concept: Concept; locale: string }) {
  return <EntityGraph nodes={buildConceptGraphNodes(concept, locale)} />;
}

// =============================================================================
// Hub page (/concepts) — enterprise @graph emission
// =============================================================================

function hubPageUrl(locale: string): string {
  return locale === 'hi'
    ? 'https://www.vastucart.in/hi/concepts'
    : 'https://www.vastucart.in/concepts';
}

function conceptPageAbsoluteUrl(concept: Concept, locale: string): string {
  return locale === 'hi'
    ? `https://www.vastucart.in/hi${conceptPath(concept)}`
    : conceptUrl(concept.slug, concept.category);
}

export function buildConceptItemListNode(concepts: Concept[], locale: string): JsonNode {
  const pageUrl = hubPageUrl(locale);
  return {
    '@type': 'ItemList',
    '@id': `${pageUrl}#itemlist-all`,
    name: 'All concepts',
    numberOfItems: concepts.length,
    itemListElement: concepts.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      url: conceptPageAbsoluteUrl(c, locale),
      item: { '@id': conceptEntityId(c.slug) },
    })),
  };
}

export function buildDefinedTermSetNode(params: {
  id: string;
  name: string;
  description: string;
  members: Concept[];
}): JsonNode {
  return {
    '@type': 'DefinedTermSet',
    '@id': params.id,
    name: params.name,
    description: params.description,
    numberOfItems: params.members.length,
    hasDefinedTerm: params.members.map((c) => ({ '@id': conceptEntityId(c.slug) })),
  };
}

export function buildHubCollectionPageNode(params: {
  pageUrl: string;
  locale: string;
  name: string;
  description: string;
  breadcrumbId: string;
  mainEntityId: string;
  authorId: string;
  aboutTermSetIds: string[];
}): JsonNode {
  return {
    '@type': 'CollectionPage',
    '@id': `${params.pageUrl}#webpage`,
    url: params.pageUrl,
    name: params.name,
    description: params.description,
    inLanguage: params.locale === 'hi' ? 'hi' : 'en',
    isPartOf: { '@id': WEBSITE_ID },
    breadcrumb: { '@id': params.breadcrumbId },
    mainEntity: { '@id': params.mainEntityId },
    about: params.aboutTermSetIds.map((id) => ({ '@id': id })),
    author: { '@id': params.authorId },
    publisher: { '@id': ORG_ID },
  };
}

const NAKSHATRA_SET_DESCRIPTION =
  'The twenty-seven classical lunar mansions (nakshatras) of Jyotiṣa — each a 13°20′ segment of the sidereal zodiac, with a presiding devatā and ruling graha per Vimśottarī-daśā.';

const TITHI_SET_DESCRIPTION =
  'The sixteen classical tithis covering the fifteen lunar phases of each pakṣa plus the dual Pūrṇimā and Amāvāsyā — the foundational lunar-calendar units of the Vedic pañcāṅga.';

const CATEGORY_LABEL_PREFIX: Partial<Record<ConceptCategory, string>> = {
  nakshatra: '27 Nakshatras',
  tithi: '16 Tithis',
};

/** Build the full node array for the /concepts hub page. Exported for CI. */
export function buildHubGraphNodes(concepts: Concept[], locale: string): JsonNode[] {
  const pageUrl = hubPageUrl(locale);
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const itemListId = `${pageUrl}#itemlist-all`;
  const authorId = PERSON_IDS.vastucartEditorial;

  const nakshatras = concepts.filter((c) => c.category === 'nakshatra');
  const tithis = concepts.filter((c) => c.category === 'tithi');

  const pageName =
    locale === 'hi'
      ? 'अवधारणाएँ — 138 वैदिक, संख्या, वास्तु और टैरो संदर्भ'
      : 'Concepts — 138 Vedic, Numerology, Vāstu, and Tarot References';

  const pageDescription =
    'Complete reference index of 138 concepts across Jyotiṣa (astrology), numerology, Vāstu, and tarot — grahas, rāśis, nakshatras, tithis, bhāvas, doshas, yogas, kūṭas, vargas, plus numerology, vāstu, and tarot concepts. Each entry reports what the classical tradition names; interpretive decisions remain the reader\'s.';

  return [
    buildOrganizationNode(),
    buildWebSiteNode(),
    buildHubCollectionPageNode({
      pageUrl,
      locale,
      name: pageName,
      description: pageDescription,
      breadcrumbId,
      mainEntityId: itemListId,
      authorId,
      aboutTermSetIds: [TERMSET_IDS.nakshatra, TERMSET_IDS.tithi],
    }),
    buildBreadcrumbListNode({
      id: breadcrumbId,
      items: [
        { name: locale === 'hi' ? 'होम' : 'Home', url: localeUrl(locale) },
        { name: locale === 'hi' ? 'अवधारणाएँ' : 'Concepts', url: pageUrl },
      ],
    }),
    buildConceptItemListNode(concepts, locale),
    buildDefinedTermSetNode({
      id: TERMSET_IDS.nakshatra,
      name: CATEGORY_LABEL_PREFIX.nakshatra!,
      description: NAKSHATRA_SET_DESCRIPTION,
      members: nakshatras,
    }),
    buildDefinedTermSetNode({
      id: TERMSET_IDS.tithi,
      name: CATEGORY_LABEL_PREFIX.tithi!,
      description: TITHI_SET_DESCRIPTION,
      members: tithis,
    }),
  ];
}

export function ConceptsHubEntityGraph({
  concepts,
  locale,
}: {
  concepts: Concept[];
  locale: string;
}) {
  return <EntityGraph nodes={buildHubGraphNodes(concepts, locale)} />;
}
