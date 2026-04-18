/**
 * Fixture for buildBlogPostingNode(params).
 *
 * BlogPosting is emitted on blog posts. Not in MUST_GATE but empty required
 * fields (headline, description, image, author) are flagged.
 */
export const blogPostingFixture = {
  builderName: 'buildBlogPostingNode',
  nodeType: 'BlogPosting',
  alwaysEmits: true,
  full: {
    input: {
      pageUrl: 'https://www.vastucart.in/blog/kundli-birth-chart-guide',
      headline: 'Kundli (Birth Chart) — A Classical Jyotishi\u2019s Guide to Reading Yours',
      description:
        'Understanding a Kundli takes more than identifying your Rashi and Nakshatra. This guide walks through the twelve bhavas, the role of the Lagna, and how dasha sequences modulate planetary influences over a lifetime.',
      datePublished: '2024-05-18',
      dateModified: '2026-03-04',
      primaryImageId: 'https://www.vastucart.in/blog/kundli-birth-chart-guide#primary-image',
      authorId: 'https://blog.vastucart.in/authors/pt-raghav-sharma#person',
      locale: 'en',
      articleSection: 'Jyotish',
      keywords: ['kundli', 'birth chart', 'jyotish', 'vedic astrology', 'bhava', 'dasha'],
      wordCount: 2850,
      readingTimeMinutes: 12,
    },
  },
  missingRequired: {
    input: {
      pageUrl: 'https://www.vastucart.in/blog/kundli-birth-chart-guide',
      headline: '',
      description: '',
      datePublished: '',
      dateModified: '',
      primaryImageId: '',
      authorId: '',
      locale: 'en',
    },
  },
} as const;
