/**
 * Fixture for buildWebApplicationNode(params).
 *
 * SoftwareApplication is emitted on every tool page. It's not in the
 * MUST_GATE list (shared contracts §5.1 reserves gating for Recipe,
 * Product, etc.) but required fields (name, description, url) should be
 * non-empty — the "missing-required" case will be flagged by the
 * gated-emission validator's "empty required field" check.
 */
export const webApplicationFixture = {
  builderName: 'buildWebApplicationNode',
  nodeType: 'WebApplication',
  alwaysEmits: true,
  full: {
    input: {
      pageUrl: 'https://www.vastucart.in/tools/kundli',
      toolSlug: 'kundli',
      name: 'Kundli Generator — Vedic Birth Chart Calculator',
      description:
        'Generate your complete Vedic birth chart with planetary positions, houses, aspects, and dasha periods. Free, bilingual, and accurate for dates 1900–2100.',
      locale: 'en',
      primaryImageId: 'https://www.vastucart.in/tools/kundli#primary-image',
    },
  },
  missingRequired: {
    input: {
      pageUrl: 'https://www.vastucart.in/tools/kundli',
      toolSlug: 'kundli',
      name: '',
      description: '',
      locale: 'en',
    },
  },
} as const;
