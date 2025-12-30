/**
 * Safe JSON-LD Component
 *
 * Provides XSS-safe structured data injection for SEO.
 * Implements Entity SEO for VastuCart ecosystem.
 */

import { BRAND_CONFIG, getToolSEOConfig, type ToolSEOConfig } from '@/config/seo';

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Sanitizes JSON string to prevent XSS attacks
 * Escapes characters that could break out of script context
 */
function sanitizeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e');
}

export function JsonLd({ data }: JsonLdProps) {
  const sanitizedJson = sanitizeJsonLd(data);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: sanitizedJson }}
    />
  );
}

/**
 * Organization Schema - Global Brand Entity
 * Place in root layout for site-wide brand authority
 */
export function OrganizationSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${BRAND_CONFIG.url}/#organization`,
    name: BRAND_CONFIG.name,
    alternateName: [BRAND_CONFIG.alternateName, 'VastuCart.in'],
    url: BRAND_CONFIG.url,
    logo: {
      '@type': 'ImageObject',
      '@id': `${BRAND_CONFIG.url}/#logo`,
      url: BRAND_CONFIG.logo,
      contentUrl: BRAND_CONFIG.logo,
      width: 600,
      height: 60,
      caption: BRAND_CONFIG.name,
    },
    image: {
      '@id': `${BRAND_CONFIG.url}/#logo`,
    },
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
    // Link to sub-organizations
    subOrganization: BRAND_CONFIG.subOrganizations.map((sub) => ({
      '@type': 'Organization',
      name: sub.name,
      url: sub.url,
      description: sub.description,
      parentOrganization: {
        '@id': `${BRAND_CONFIG.url}/#organization`,
      },
    })),
    // Service areas
    areaServed: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 20.5937,
        longitude: 78.9629,
      },
      geoRadius: '10000',
    },
    // Publication principle for trust
    publishingPrinciples: `${BRAND_CONFIG.url}/about`,
  };

  return <JsonLd data={data} />;
}

/**
 * Brand Schema - Consumer-facing brand identity
 * Use alongside Organization for e-commerce authority
 */
export function BrandSchema() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Brand',
    '@id': `${BRAND_CONFIG.url}/#brand`,
    name: BRAND_CONFIG.name,
    alternateName: BRAND_CONFIG.alternateName,
    slogan: BRAND_CONFIG.slogan,
    description: BRAND_CONFIG.description,
    logo: BRAND_CONFIG.logo,
    url: BRAND_CONFIG.url,
    // Link brand to organization
    brand: {
      '@id': `${BRAND_CONFIG.url}/#organization`,
    },
  };

  return <JsonLd data={data} />;
}

/**
 * WebSite Schema - Site-level search and navigation
 * Place in root layout
 */
export function WebSiteSchema({ locale = 'en' }: { locale?: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BRAND_CONFIG.url}/#website`,
    name: BRAND_CONFIG.name,
    alternateName: BRAND_CONFIG.alternateName,
    url: BRAND_CONFIG.url,
    description: BRAND_CONFIG.description,
    publisher: {
      '@id': `${BRAND_CONFIG.url}/#organization`,
    },
    inLanguage: ['en', 'hi'],
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${BRAND_CONFIG.url}/${locale}/tools?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return <JsonLd data={data} />;
}

/**
 * Enhanced WebApplication Schema for Tools
 * Includes featureList, aggregateRating, and author linkage
 */
export function WebApplicationSchema({
  name,
  description,
  url,
  locale,
  toolSlug,
}: {
  name: string;
  description: string;
  url: string;
  locale: string;
  toolSlug?: string;
}) {
  const toolConfig = toolSlug ? getToolSEOConfig(toolSlug) : null;

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    '@id': `${url}/#application`,
    name,
    description,
    url,
    applicationCategory: 'LifestyleApplication',
    applicationSubCategory: toolConfig?.applicationSubCategory || ['Astrology Tool', 'Numerology Calculator'],
    operatingSystem: 'All',
    browserRequirements: 'Requires JavaScript. Works on Chrome, Firefox, Safari, Edge.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
    },
    inLanguage: locale === 'hi' ? 'hi' : 'en',
    isAccessibleForFree: true,
    // Link to parent organization
    author: {
      '@id': `${BRAND_CONFIG.url}/#organization`,
    },
    publisher: {
      '@id': `${BRAND_CONFIG.url}/#organization`,
    },
    creator: {
      '@id': `${BRAND_CONFIG.url}/#organization`,
    },
    // Feature list for long-tail SEO
    featureList: toolConfig?.featureList[locale as 'en' | 'hi'] || toolConfig?.featureList.en || [],
    // Keywords for semantic relevance
    keywords: toolConfig?.keywords[locale as 'en' | 'hi']?.join(', ') || '',
  };

  // Add aggregate rating if available (for trust signals)
  if (toolConfig?.aggregateRating) {
    data.aggregateRating = {
      '@type': 'AggregateRating',
      ratingValue: toolConfig.aggregateRating.ratingValue,
      ratingCount: toolConfig.aggregateRating.ratingCount,
      reviewCount: toolConfig.aggregateRating.reviewCount,
      bestRating: '5',
      worstRating: '1',
    };
  }

  return <JsonLd data={data} />;
}

/**
 * Breadcrumb Schema - Navigation path
 * Helps Google understand site structure
 */
export function BreadcrumbSchema({
  items,
  locale = 'en',
}: {
  items: Array<{ name: string; url: string }>;
  locale?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return <JsonLd data={data} />;
}

/**
 * Tool Breadcrumb Helper - Generates breadcrumbs for tool pages
 */
export function ToolBreadcrumbSchema({
  toolName,
  toolSlug,
  categoryName,
  categorySlug,
  locale = 'en',
}: {
  toolName: string;
  toolSlug: string;
  categoryName?: string;
  categorySlug?: string;
  locale?: string;
}) {
  const baseUrl = BRAND_CONFIG.url;
  const items = [
    { name: locale === 'hi' ? 'होम' : 'Home', url: `${baseUrl}/${locale}` },
    { name: locale === 'hi' ? 'टूल्स' : 'Tools', url: `${baseUrl}/${locale}/tools` },
  ];

  // Add category if provided
  if (categoryName && categorySlug) {
    items.push({
      name: categoryName,
      url: `${baseUrl}/${locale}/tools#${categorySlug}`,
    });
  }

  // Add current tool
  items.push({
    name: toolName,
    url: `${baseUrl}/${locale}/tools/${toolSlug}`,
  });

  return <BreadcrumbSchema items={items} locale={locale} />;
}

/**
 * FAQ Schema - For FAQ sections on tool pages
 */
export function FAQSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
  if (!faqs || faqs.length === 0) return null;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return <JsonLd data={data} />;
}

/**
 * HowTo Schema - For educational content about using tools
 */
export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  locale = 'en',
}: {
  name: string;
  description: string;
  steps: Array<{ name: string; text: string; url?: string }>;
  totalTime?: string;
  locale?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name,
    description,
    inLanguage: locale === 'hi' ? 'hi' : 'en',
    totalTime: totalTime || 'PT5M',
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      url: step.url,
    })),
  };

  return <JsonLd data={data} />;
}

/**
 * Collection Page Schema - For tool listing/category pages
 */
export function CollectionPageSchema({
  name,
  description,
  url,
  tools,
  locale = 'en',
}: {
  name: string;
  description: string;
  url: string;
  tools: Array<{ name: string; url: string; description: string }>;
  locale?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': `${url}/#collection`,
    name,
    description,
    url,
    inLanguage: locale === 'hi' ? 'hi' : 'en',
    isPartOf: {
      '@id': `${BRAND_CONFIG.url}/#website`,
    },
    about: {
      '@id': `${BRAND_CONFIG.url}/#organization`,
    },
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: tools.length,
      itemListElement: tools.map((tool, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: tool.name,
        url: tool.url,
        description: tool.description,
      })),
    },
  };

  return <JsonLd data={data} />;
}

/**
 * Article Schema - For blog posts
 */
export function ArticleSchema({
  headline,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
  locale = 'en',
}: {
  headline: string;
  description: string;
  url: string;
  imageUrl?: string;
  datePublished: string;
  dateModified?: string;
  authorName?: string;
  locale?: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${url}/#article`,
    headline,
    description,
    url,
    image: imageUrl || BRAND_CONFIG.logo,
    datePublished,
    dateModified: dateModified || datePublished,
    inLanguage: locale === 'hi' ? 'hi' : 'en',
    author: {
      '@type': 'Person',
      name: authorName || 'VastuCart Team',
      url: `${BRAND_CONFIG.url}/about`,
    },
    publisher: {
      '@id': `${BRAND_CONFIG.url}/#organization`,
    },
    isPartOf: {
      '@id': `${BRAND_CONFIG.url}/#website`,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
  };

  return <JsonLd data={data} />;
}

/**
 * SameAs Links Component - For cross-domain authority
 * Used to reinforce brand entity across platforms
 */
export function SameAsLinks() {
  return (
    <>
      {/* Hidden semantic links for search engines */}
      <div className="hidden" aria-hidden="true">
        {BRAND_CONFIG.sameAs.map((link) => (
          <a key={link} href={link} rel="me nofollow" />
        ))}
      </div>
    </>
  );
}

/**
 * Complete Tool Page Schema Bundle
 * Use this on individual tool pages for comprehensive SEO
 */
export function ToolPageSchemaBundle({
  toolName,
  toolSlug,
  toolDescription,
  toolUrl,
  categoryName,
  categorySlug,
  locale = 'en',
  faqs,
}: {
  toolName: string;
  toolSlug: string;
  toolDescription: string;
  toolUrl: string;
  categoryName?: string;
  categorySlug?: string;
  locale?: string;
  faqs?: Array<{ question: string; answer: string }>;
}) {
  return (
    <>
      <WebApplicationSchema
        name={toolName}
        description={toolDescription}
        url={toolUrl}
        locale={locale}
        toolSlug={toolSlug}
      />
      <ToolBreadcrumbSchema
        toolName={toolName}
        toolSlug={toolSlug}
        categoryName={categoryName}
        categorySlug={categorySlug}
        locale={locale}
      />
      {faqs && faqs.length > 0 && <FAQSchema faqs={faqs} />}
    </>
  );
}
