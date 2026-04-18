/**
 * Fixture for buildImageObjectNode().
 *
 * ImageObject is always-emit; required fields are id + url. A missing url
 * would be a caller bug, not a gating scenario — we still include the case
 * to catch it.
 */
export const imageObjectFixture = {
  builderName: 'buildImageObjectNode',
  nodeType: 'ImageObject',
  alwaysEmits: true,
  full: {
    input: {
      id: 'https://www.vastucart.in/tools/kundli#primary-image',
      url: 'https://www.vastucart.in/images/tools/kundli/hero.webp',
      width: 1200,
      height: 630,
      caption: 'Vedic Kundli chart with planetary positions',
      representativeOfPage: true,
    },
  },
  missingRequired: {
    input: {
      id: 'https://www.vastucart.in/tools/kundli#primary-image',
      url: '', // empty URL should flag
    },
  },
} as const;
