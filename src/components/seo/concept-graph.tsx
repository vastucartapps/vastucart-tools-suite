/**
 * Concept-page JSON-LD emission.
 *
 * Builds the graph for a /concepts/{slug} or /concepts/tithi/{slug} page:
 *   Organization + WebSite + WebPage + BreadcrumbList + DefinedTerm
 *   + Person reference (the Person entity itself is canonically owned by
 *   blog.vastucart.in per shared contracts §2.2 — we only reference by @id).
 *
 * @ids resolved via src/lib/concept-ids.ts (the single-source registry).
 */
import {
  EntityGraph,
  buildOrganizationNode,
  buildWebSiteNode,
  buildBreadcrumbListNode,
  localeUrl,
} from './entity-graph';
import type { Concept } from '@/lib/concepts';
import { categoryDisplayName, conceptPath } from '@/lib/concepts';
import {
  conceptEntityId,
  conceptUrl,
  authorIdForCategory,
  termSetIdFor,
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
export function buildConceptGraphNodes(concept: Concept, locale: string): JsonNode[] {
  const pageUrl = locale === 'hi'
    ? `https://www.vastucart.in/hi${conceptPath(concept)}`
    : conceptUrl(concept.slug, concept.category);
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const mainEntityId = conceptEntityId(concept.slug);
  const authorId = authorIdForCategory(concept.category);
  const categoryLabel = categoryDisplayName(concept.category);

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
  ];
}

export function ConceptEntityGraph({ concept, locale }: { concept: Concept; locale: string }) {
  return <EntityGraph nodes={buildConceptGraphNodes(concept, locale)} />;
}
