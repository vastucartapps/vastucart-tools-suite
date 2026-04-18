/**
 * Fixture for buildWebPageNode().
 *
 * WebPage is MUST_ALWAYS_EMIT. Required fields: pageUrl, name, description,
 * locale. Our "missing-required" case simulates a caller passing empty
 * strings — the builder should NOT gate (WebPage is always-emit), but the
 * gated-emission validator will flag the emitted node's empty fields
 * under "Emitted node has empty or placeholder value."
 */
export const webpageFixture = {
  builderName: 'buildWebPageNode',
  nodeType: 'WebPage',
  alwaysEmits: true,
  full: {
    input: {
      pageUrl: 'https://www.vastucart.in/tools/kundli',
      name: 'Kundli (Vedic Birth Chart) Calculator | VastuCart',
      description:
        'Generate your complete Vedic birth chart with accurate planetary positions, houses, and dasha periods. Free bilingual Kundli generator.',
      locale: 'en',
      primaryImageId: 'https://www.vastucart.in/tools/kundli#primary-image',
      breadcrumbId: 'https://www.vastucart.in/tools/kundli#breadcrumb',
      mainEntityId: 'https://www.vastucart.in/tools/kundli#application',
      datePublished: '2024-03-12',
      dateModified: '2026-04-10',
    },
  },
  missingRequired: {
    input: {
      pageUrl: 'https://www.vastucart.in/tools/kundli',
      name: '', // empty — expected to be flagged
      description: '',
      locale: 'en',
    },
  },
} as const;
