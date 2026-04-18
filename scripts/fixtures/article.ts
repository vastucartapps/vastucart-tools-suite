/**
 * Fixture for buildArticleNode(params).
 *
 * Article is used on evergreen tool-adjacent content (e.g. the
 * /tools/life-path-number/[n] programmatic pages).
 */
export const articleFixture = {
  builderName: 'buildArticleNode',
  nodeType: 'Article',
  alwaysEmits: true,
  full: {
    input: {
      pageUrl: 'https://www.vastucart.in/tools/life-path-number/7',
      headline: 'Life Path Number 7 \u2014 The Seeker\u2019s Archetype',
      description:
        'Life Path 7 inclines the native toward introspection, research, and solitary depth. This profile covers the number\u2019s classical associations, its strengths and failure modes, and which compatible numbers complement its rhythm.',
      datePublished: '2024-09-02',
      dateModified: '2026-02-28',
      primaryImageId: 'https://www.vastucart.in/tools/life-path-number/7#primary-image',
      authorId: 'https://blog.vastucart.in/authors/vastucart-editorial#person',
      locale: 'en',
      articleSection: 'Numerology',
      keywords: ['life path number', 'numerology', 'number 7', 'seeker'],
      wordCount: 1420,
      readingTimeMinutes: 6,
      aboutTerm: 'Life Path Number',
    },
  },
  missingRequired: {
    input: {
      pageUrl: 'https://www.vastucart.in/tools/life-path-number/7',
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
