/**
 * Entity Graph — single-script JSON-LD system.
 *
 * Every page emits one <script type="application/ld+json"> containing an
 * `@context` + `@graph` array with all relevant nodes cross-referenced by
 * `@id`. This is the same pattern blog.vastucart.in uses to hit 27+ valid
 * entities per page in Google's Rich Results Test.
 *
 * Usage:
 *   <EntityGraph nodes={[
 *     buildOrganizationNode(),
 *     buildBrandNode(),
 *     buildWebSiteNode(),
 *     buildWebPageNode({...}),
 *     buildBreadcrumbListNode({...}),
 *     buildImageObjectNode({...}),
 *     buildWebApplicationNode({...}),
 *     buildFaqPageNode({...}),
 *     buildSpeakableNode({...}),
 *   ]} />
 *
 * Higher-level wrappers (ToolPageEntityGraph, BlogPostEntityGraph) are
 * provided below for the two most-used shapes.
 */

import { BRAND_CONFIG, getToolSEOConfig } from '@/config/seo';
import { PRIMARY_AUTHOR, type Author } from '@/config/authors';

// =============================================================================
// Utilities
// =============================================================================

type JsonNode = Record<string, unknown>;

const ORG_ID = `${BRAND_CONFIG.url}/#organization`;
const BRAND_ID = `${BRAND_CONFIG.url}/#brand`;
const WEBSITE_ID = `${BRAND_CONFIG.url}/#website`;
const LOGO_ID = `${BRAND_CONFIG.url}/#logo`;

/** Recursively strip `undefined` values so JSON output is tight. */
function prune<T>(input: T): T {
  if (Array.isArray(input)) {
    return input
      .map((v) => prune(v))
      .filter((v) => v !== undefined) as unknown as T;
  }
  if (input && typeof input === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(input as Record<string, unknown>)) {
      if (v === undefined) continue;
      const pruned = prune(v);
      if (pruned === undefined) continue;
      out[k] = pruned;
    }
    return out as unknown as T;
  }
  return input;
}

/**
 * Build a locale-aware absolute URL that matches the `as-needed` prefix policy.
 * English has no prefix (/tools); Hindi keeps /hi (/hi/tools).
 */
export function localeUrl(locale: string, path: string = ''): string {
  const base = BRAND_CONFIG.url;
  const normalized = path && !path.startsWith('/') ? `/${path}` : path;
  if (!normalized) return locale === 'hi' ? `${base}/hi` : base;
  return locale === 'hi' ? `${base}/hi${normalized}` : `${base}${normalized}`;
}

// =============================================================================
// Global node builders (Organization, Brand, WebSite)
// =============================================================================

export function buildOrganizationNode(): JsonNode {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: BRAND_CONFIG.name,
    alternateName: [BRAND_CONFIG.alternateName, 'VastuCart.in'],
    url: BRAND_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      '@id': LOGO_ID,
      url: BRAND_CONFIG.logo,
      contentUrl: BRAND_CONFIG.logo,
      width: 600,
      height: 60,
      caption: BRAND_CONFIG.name,
    },
    image: { '@id': LOGO_ID },
    description: BRAND_CONFIG.description,
    slogan: BRAND_CONFIG.slogan,
    foundingDate: BRAND_CONFIG.foundingDate,
    sameAs: BRAND_CONFIG.sameAs,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: BRAND_CONFIG.email,
      areaServed: 'World',
      availableLanguage: ['en', 'hi'],
    },
    knowsAbout: BRAND_CONFIG.knowsAbout,
    subOrganization: [
      ...BRAND_CONFIG.subOrganizations.map((sub) => ({
        '@type': 'Organization',
        name: sub.name,
        url: sub.url,
        description: sub.description,
        parentOrganization: { '@id': ORG_ID },
      })),
      {
        '@type': 'Organization',
        name: 'VastuCart Blog',
        url: 'https://blog.vastucart.in',
        description:
          'Long-form Jyotish, numerology, and Vastu research by named Vedic practitioners.',
        parentOrganization: { '@id': ORG_ID },
      },
    ],
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 20.5937,
        longitude: 78.9629,
      },
      geoRadius: '10000',
    },
    publishingPrinciples: `${BRAND_CONFIG.url}/about`,
  };
}

export function buildBrandNode(): JsonNode {
  return {
    '@type': 'Brand',
    '@id': BRAND_ID,
    name: BRAND_CONFIG.name,
    alternateName: BRAND_CONFIG.alternateName,
    slogan: BRAND_CONFIG.slogan,
    description: BRAND_CONFIG.description,
    logo: BRAND_CONFIG.logo,
    url: BRAND_CONFIG.url,
    brand: { '@id': ORG_ID },
  };
}

export function buildWebSiteNode(): JsonNode {
  return {
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: BRAND_CONFIG.name,
    alternateName: BRAND_CONFIG.alternateName,
    url: BRAND_CONFIG.url,
    description: BRAND_CONFIG.description,
    publisher: { '@id': ORG_ID },
    inLanguage: ['en', 'hi'],
  };
}

// =============================================================================
// Page-type node builders
// =============================================================================

export function buildWebPageNode(params: {
  pageUrl: string;
  name: string;
  description: string;
  locale: string;
  primaryImageId?: string;
  breadcrumbId?: string;
  speakableId?: string;
  mainEntityId?: string;
  datePublished?: string;
  dateModified?: string;
}): JsonNode {
  const pageId = `${params.pageUrl}#webpage`;
  return prune({
    '@type': 'WebPage',
    '@id': pageId,
    url: params.pageUrl,
    name: params.name,
    description: params.description,
    inLanguage: params.locale === 'hi' ? 'hi' : 'en',
    isPartOf: { '@id': WEBSITE_ID },
    primaryImageOfPage: params.primaryImageId ? { '@id': params.primaryImageId } : undefined,
    breadcrumb: params.breadcrumbId ? { '@id': params.breadcrumbId } : undefined,
    speakable: params.speakableId ? { '@id': params.speakableId } : undefined,
    mainEntity: params.mainEntityId ? { '@id': params.mainEntityId } : undefined,
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    about: { '@id': ORG_ID },
  });
}

export function buildBreadcrumbListNode(params: {
  id: string;
  items: Array<{ name: string; url: string }>;
}): JsonNode {
  return {
    '@type': 'BreadcrumbList',
    '@id': params.id,
    itemListElement: params.items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildImageObjectNode(params: {
  id: string;
  url: string;
  width?: number;
  height?: number;
  caption?: string;
  representativeOfPage?: boolean;
}): JsonNode {
  return prune({
    '@type': 'ImageObject',
    '@id': params.id,
    url: params.url,
    contentUrl: params.url,
    width: params.width ?? 1200,
    height: params.height ?? 630,
    caption: params.caption,
    representativeOfPage: params.representativeOfPage,
  });
}

export function buildSpeakableNode(params: {
  id: string;
  cssSelectors: string[];
}): JsonNode {
  return {
    '@type': 'SpeakableSpecification',
    '@id': params.id,
    cssSelector: params.cssSelectors,
  };
}

// =============================================================================
// Content-type node builders
// =============================================================================

export function buildAuthorNode(author: Author = PRIMARY_AUTHOR): JsonNode {
  return {
    '@type': 'Person',
    '@id': `${author.profileUrl}#person`,
    name: author.name,
    url: author.profileUrl,
    sameAs: [author.profileUrl],
    jobTitle: author.jobTitle,
    description: author.bio,
    image: author.image,
    knowsAbout: author.knowsAbout,
    worksFor: { '@id': ORG_ID },
  };
}

export function buildWebApplicationNode(params: {
  pageUrl: string;
  toolSlug: string;
  name: string;
  description: string;
  locale: string;
  primaryImageId?: string;
}): JsonNode {
  const toolConfig = getToolSEOConfig(params.toolSlug);
  const lang = params.locale === 'hi' ? 'hi' : 'en';
  return prune({
    '@type': ['WebApplication', 'SoftwareApplication'],
    '@id': `${params.pageUrl}#application`,
    name: params.name,
    description: params.description,
    url: params.pageUrl,
    applicationCategory: 'LifestyleApplication',
    applicationSubCategory:
      toolConfig?.applicationSubCategory || ['Astrology Tool', 'Numerology Calculator'],
    operatingSystem: 'All (web browser)',
    browserRequirements: 'Requires JavaScript. Works on Chrome, Firefox, Safari, Edge.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    inLanguage: lang,
    isAccessibleForFree: true,
    author: { '@id': ORG_ID },
    publisher: { '@id': ORG_ID },
    creator: { '@id': ORG_ID },
    featureList:
      toolConfig?.featureList[lang as 'en' | 'hi'] || toolConfig?.featureList.en || [],
    keywords: toolConfig?.keywords[lang as 'en' | 'hi']?.join(', ') || '',
    image: params.primaryImageId ? { '@id': params.primaryImageId } : undefined,
  });
}

export function buildFaqPageNode(params: {
  pageUrl: string;
  faqs: Array<{ question: string; answer: string }>;
}): JsonNode | null {
  if (!params.faqs || params.faqs.length === 0) return null;
  return {
    '@type': 'FAQPage',
    '@id': `${params.pageUrl}#faq`,
    mainEntity: params.faqs.map((faq, i) => ({
      '@type': 'Question',
      '@id': `${params.pageUrl}#faq-${i}`,
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildBlogPostingNode(params: {
  pageUrl: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  primaryImageId: string;
  authorId: string;
  locale: string;
  articleSection?: string;
  keywords?: string | string[];
  wordCount?: number;
  readingTimeMinutes?: number;
}): JsonNode {
  const pageId = `${params.pageUrl}#webpage`;
  return prune({
    '@type': 'BlogPosting',
    '@id': `${params.pageUrl}#article`,
    isPartOf: { '@id': pageId },
    mainEntityOfPage: { '@id': pageId },
    headline: params.headline,
    description: params.description,
    image: { '@id': params.primaryImageId },
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: { '@id': params.authorId },
    publisher: { '@id': ORG_ID },
    inLanguage: params.locale === 'hi' ? 'hi' : 'en',
    articleSection: params.articleSection,
    keywords: Array.isArray(params.keywords) ? params.keywords.join(', ') : params.keywords,
    wordCount: params.wordCount,
    timeRequired: params.readingTimeMinutes
      ? `PT${params.readingTimeMinutes}M`
      : undefined,
  });
}

/**
 * Evergreen `Article` node — used by tool-adjacent content pages like
 * /tools/life-path-number/[number] where the content explains a concept
 * rather than a blog post. Same shape as BlogPosting but with `@type: Article`.
 */
export function buildArticleNode(params: {
  pageUrl: string;
  headline: string;
  description: string;
  datePublished: string;
  dateModified: string;
  primaryImageId: string;
  authorId: string;
  locale: string;
  articleSection?: string;
  keywords?: string | string[];
  wordCount?: number;
  readingTimeMinutes?: number;
  aboutTerm?: string;
}): JsonNode {
  const pageId = `${params.pageUrl}#webpage`;
  return prune({
    '@type': 'Article',
    '@id': `${params.pageUrl}#article`,
    isPartOf: { '@id': pageId },
    mainEntityOfPage: { '@id': pageId },
    headline: params.headline,
    description: params.description,
    image: { '@id': params.primaryImageId },
    datePublished: params.datePublished,
    dateModified: params.dateModified,
    author: { '@id': params.authorId },
    publisher: { '@id': ORG_ID },
    inLanguage: params.locale === 'hi' ? 'hi' : 'en',
    articleSection: params.articleSection,
    keywords: Array.isArray(params.keywords) ? params.keywords.join(', ') : params.keywords,
    wordCount: params.wordCount,
    timeRequired: params.readingTimeMinutes
      ? `PT${params.readingTimeMinutes}M`
      : undefined,
    about: params.aboutTerm
      ? {
          '@type': 'DefinedTerm',
          '@id': `${params.pageUrl}#defined-term`,
          name: params.aboutTerm,
          inDefinedTermSet: 'https://en.wikipedia.org/wiki/Numerology',
        }
      : undefined,
  });
}

export function buildItemListNode(params: {
  id: string;
  items: Array<{ name: string; url: string; description?: string }>;
}): JsonNode {
  return {
    '@type': 'ItemList',
    '@id': params.id,
    numberOfItems: params.items.length,
    itemListElement: params.items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      url: item.url,
      description: item.description,
    })),
  };
}

// =============================================================================
// Rendering component
// =============================================================================

function sanitizeJsonLd(payload: JsonNode): string {
  return JSON.stringify(payload)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026');
}

export function EntityGraph({ nodes }: { nodes: Array<JsonNode | null | undefined> }) {
  const clean = nodes.filter((n): n is JsonNode => Boolean(n));
  const payload = {
    '@context': 'https://schema.org',
    '@graph': clean,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitizeJsonLd(payload) }}
    />
  );
}

// =============================================================================
// High-level convenience wrappers — the two most common page shapes
// =============================================================================

/**
 * One-line drop-in for a tool/calculator page.
 *
 * Emits: Org, Brand, WebSite, WebPage, BreadcrumbList, primary ImageObject,
 * OG ImageObject, WebApplication+SoftwareApplication, FAQPage (if faqs > 0),
 * SpeakableSpecification.
 */
export function ToolPageEntityGraph(props: {
  locale: string;
  toolSlug: string;
  toolName: string;
  toolDescription: string;
  categoryName: string;
  categorySlug: string;
  faqs: Array<{ question: string; answer: string }>;
  heroImageUrl: string;
}) {
  const pageUrl = localeUrl(props.locale, `/tools/${props.toolSlug}`);
  const primaryImageId = `${props.heroImageUrl}#primary`;
  const ogImageId = `${props.heroImageUrl}#og`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const speakableId = `${pageUrl}#speakable`;
  const applicationId = `${pageUrl}#application`;

  const nodes: Array<JsonNode | null> = [
    buildOrganizationNode(),
    buildBrandNode(),
    buildWebSiteNode(),
    buildWebPageNode({
      pageUrl,
      name: props.toolName,
      description: props.toolDescription,
      locale: props.locale,
      primaryImageId,
      breadcrumbId,
      speakableId,
      mainEntityId: applicationId,
    }),
    buildBreadcrumbListNode({
      id: breadcrumbId,
      items: [
        { name: props.locale === 'hi' ? 'होम' : 'Home', url: localeUrl(props.locale) },
        { name: props.locale === 'hi' ? 'टूल्स' : 'Tools', url: localeUrl(props.locale, '/tools') },
        {
          name: props.categoryName,
          url: `${localeUrl(props.locale, '/tools')}#${props.categorySlug}`,
        },
        { name: props.toolName, url: pageUrl },
      ],
    }),
    buildImageObjectNode({
      id: primaryImageId,
      url: props.heroImageUrl,
      caption: props.toolName,
      representativeOfPage: true,
    }),
    buildImageObjectNode({ id: ogImageId, url: props.heroImageUrl }),
    buildWebApplicationNode({
      pageUrl,
      toolSlug: props.toolSlug,
      name: props.toolName,
      description: props.toolDescription,
      locale: props.locale,
      primaryImageId,
    }),
    buildFaqPageNode({ pageUrl, faqs: props.faqs }),
    buildSpeakableNode({
      id: speakableId,
      cssSelectors: ['h1', '[data-speakable]'],
    }),
  ];

  return <EntityGraph nodes={nodes} />;
}

/**
 * One-line drop-in for a blog post page.
 *
 * Emits: Org, Brand, WebSite, WebPage, BreadcrumbList, primary ImageObject,
 * OG ImageObject, BlogPosting, Person (author), FAQPage, SpeakableSpecification.
 */
export function BlogPostEntityGraph(props: {
  locale: string;
  slug: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  heroImageUrl: string;
  faqs: Array<{ question: string; answer: string }>;
  articleSection?: string;
  keywords?: string | string[];
  wordCount?: number;
  readingTimeMinutes?: number;
  author?: Author;
}) {
  const author = props.author ?? PRIMARY_AUTHOR;
  const authorId = `${author.profileUrl}#person`;
  const pageUrl = localeUrl(props.locale, `/blog/${props.slug}`);
  const primaryImageId = `${props.heroImageUrl}#primary`;
  const ogImageId = `${props.heroImageUrl}#og`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const speakableId = `${pageUrl}#speakable`;
  const articleId = `${pageUrl}#article`;

  const nodes: Array<JsonNode | null> = [
    buildOrganizationNode(),
    buildBrandNode(),
    buildWebSiteNode(),
    buildWebPageNode({
      pageUrl,
      name: props.title,
      description: props.description,
      locale: props.locale,
      primaryImageId,
      breadcrumbId,
      speakableId,
      mainEntityId: articleId,
      datePublished: props.datePublished,
      dateModified: props.dateModified,
    }),
    buildBreadcrumbListNode({
      id: breadcrumbId,
      items: [
        { name: props.locale === 'hi' ? 'होम' : 'Home', url: localeUrl(props.locale) },
        { name: props.locale === 'hi' ? 'ब्लॉग' : 'Blog', url: localeUrl(props.locale, '/blog') },
        { name: props.title, url: pageUrl },
      ],
    }),
    buildImageObjectNode({
      id: primaryImageId,
      url: props.heroImageUrl,
      caption: props.title,
      representativeOfPage: true,
    }),
    buildImageObjectNode({ id: ogImageId, url: props.heroImageUrl }),
    buildBlogPostingNode({
      pageUrl,
      headline: props.title,
      description: props.description,
      datePublished: props.datePublished,
      dateModified: props.dateModified,
      primaryImageId,
      authorId,
      locale: props.locale,
      articleSection: props.articleSection,
      keywords: props.keywords,
      wordCount: props.wordCount,
      readingTimeMinutes: props.readingTimeMinutes,
    }),
    buildAuthorNode(author),
    buildFaqPageNode({ pageUrl, faqs: props.faqs }),
    buildSpeakableNode({
      id: speakableId,
      cssSelectors: ['h1', '.prose > p:first-of-type', '.prose h2'],
    }),
  ];

  return <EntityGraph nodes={nodes} />;
}

/**
 * Number-meaning page graph — for programmatic pages like
 * /tools/life-path-number/[number]. Evergreen Article content that links
 * back to the parent calculator tool.
 *
 * Emits: Org, Brand, WebSite, WebPage, BreadcrumbList (4 items), primary
 * ImageObject, OG ImageObject, Article, Person (author), FAQPage,
 * SpeakableSpecification.
 */
export function NumberMeaningEntityGraph(props: {
  locale: string;
  parentToolSlug: string;
  parentToolName: string;
  categoryName: string;
  numberLabel: string;
  pagePath: string;
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  heroImageUrl: string;
  faqs: Array<{ question: string; answer: string }>;
  articleSection?: string;
  keywords?: string | string[];
  wordCount?: number;
  readingTimeMinutes?: number;
  definedTerm: string;
  author?: Author;
}) {
  const author = props.author ?? PRIMARY_AUTHOR;
  const authorId = `${author.profileUrl}#person`;
  const pageUrl = localeUrl(props.locale, props.pagePath);
  const primaryImageId = `${props.heroImageUrl}#primary`;
  const ogImageId = `${props.heroImageUrl}#og`;
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const speakableId = `${pageUrl}#speakable`;
  const articleId = `${pageUrl}#article`;

  const nodes: Array<JsonNode | null> = [
    buildOrganizationNode(),
    buildBrandNode(),
    buildWebSiteNode(),
    buildWebPageNode({
      pageUrl,
      name: props.title,
      description: props.description,
      locale: props.locale,
      primaryImageId,
      breadcrumbId,
      speakableId,
      mainEntityId: articleId,
      datePublished: props.datePublished,
      dateModified: props.dateModified,
    }),
    buildBreadcrumbListNode({
      id: breadcrumbId,
      items: [
        { name: props.locale === 'hi' ? 'होम' : 'Home', url: localeUrl(props.locale) },
        { name: props.locale === 'hi' ? 'टूल्स' : 'Tools', url: localeUrl(props.locale, '/tools') },
        {
          name: props.parentToolName,
          url: localeUrl(props.locale, `/tools/${props.parentToolSlug}`),
        },
        { name: props.numberLabel, url: pageUrl },
      ],
    }),
    buildImageObjectNode({
      id: primaryImageId,
      url: props.heroImageUrl,
      caption: props.title,
      representativeOfPage: true,
    }),
    buildImageObjectNode({ id: ogImageId, url: props.heroImageUrl }),
    buildArticleNode({
      pageUrl,
      headline: props.title,
      description: props.description,
      datePublished: props.datePublished,
      dateModified: props.dateModified,
      primaryImageId,
      authorId,
      locale: props.locale,
      articleSection: props.articleSection,
      keywords: props.keywords,
      wordCount: props.wordCount,
      readingTimeMinutes: props.readingTimeMinutes,
      aboutTerm: props.definedTerm,
    }),
    buildAuthorNode(author),
    buildFaqPageNode({ pageUrl, faqs: props.faqs }),
    buildSpeakableNode({
      id: speakableId,
      cssSelectors: ['h1', '[data-speakable]', '.prose > p:first-of-type'],
    }),
  ];

  return <EntityGraph nodes={nodes} />;
}

/**
 * Lean graph for the homepage: Org, Brand, WebSite, WebPage, ImageObject,
 * SpeakableSpecification. No breadcrumb (home has no parent).
 */
export function HomePageEntityGraph(props: {
  locale: string;
  title: string;
  description: string;
}) {
  const pageUrl = localeUrl(props.locale);
  const primaryImageId = `${BRAND_CONFIG.url}/logo.png#home-primary`;
  const speakableId = `${pageUrl}#speakable`;

  const nodes: Array<JsonNode | null> = [
    buildOrganizationNode(),
    buildBrandNode(),
    buildWebSiteNode(),
    buildWebPageNode({
      pageUrl,
      name: props.title,
      description: props.description,
      locale: props.locale,
      primaryImageId,
      speakableId,
    }),
    buildImageObjectNode({
      id: primaryImageId,
      url: BRAND_CONFIG.logo,
      width: 600,
      height: 60,
      caption: BRAND_CONFIG.name,
      representativeOfPage: true,
    }),
    buildSpeakableNode({
      id: speakableId,
      cssSelectors: ['h1', 'h2'],
    }),
  ];

  return <EntityGraph nodes={nodes} />;
}

/**
 * Tools index graph: Org, Brand, WebSite, WebPage, BreadcrumbList, ItemList.
 */
export function ToolsIndexEntityGraph(props: {
  locale: string;
  title: string;
  description: string;
  tools: Array<{ name: string; slug: string; description?: string }>;
}) {
  const pageUrl = localeUrl(props.locale, '/tools');
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const itemListId = `${pageUrl}#itemlist`;
  const speakableId = `${pageUrl}#speakable`;

  const nodes: Array<JsonNode | null> = [
    buildOrganizationNode(),
    buildBrandNode(),
    buildWebSiteNode(),
    buildWebPageNode({
      pageUrl,
      name: props.title,
      description: props.description,
      locale: props.locale,
      breadcrumbId,
      speakableId,
      mainEntityId: itemListId,
    }),
    buildBreadcrumbListNode({
      id: breadcrumbId,
      items: [
        { name: props.locale === 'hi' ? 'होम' : 'Home', url: localeUrl(props.locale) },
        { name: props.locale === 'hi' ? 'टूल्स' : 'Tools', url: pageUrl },
      ],
    }),
    buildItemListNode({
      id: itemListId,
      items: props.tools.map((t) => ({
        name: t.name,
        url: localeUrl(props.locale, `/tools/${t.slug}`),
        description: t.description,
      })),
    }),
    buildSpeakableNode({
      id: speakableId,
      cssSelectors: ['h1', 'h2'],
    }),
  ];

  return <EntityGraph nodes={nodes} />;
}
