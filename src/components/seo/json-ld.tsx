/**
 * Safe JSON-LD Component
 *
 * Provides XSS-safe structured data injection for SEO.
 * Escapes dangerous characters to prevent script injection.
 */

interface JsonLdProps {
  data: Record<string, unknown>;
}

/**
 * Sanitizes JSON string to prevent XSS attacks
 * Escapes characters that could break out of script context
 *
 * Only < and > need escaping to prevent script injection like:
 * </script><script>malicious</script>
 *
 * JSON.stringify already handles quotes properly.
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
 * Pre-built JSON-LD schemas for common use cases
 */
export function WebApplicationSchema({
  name,
  description,
  url,
  locale,
}: {
  name: string;
  description: string;
  url: string;
  locale: string;
}) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name,
    description,
    url,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'INR',
    },
    inLanguage: locale === 'hi' ? 'hi' : 'en',
  };

  return <JsonLd data={data} />;
}

export function FAQSchema({
  faqs,
}: {
  faqs: Array<{ question: string; answer: string }>;
}) {
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
