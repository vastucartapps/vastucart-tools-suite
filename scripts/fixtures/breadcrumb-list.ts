/**
 * Fixture for buildBreadcrumbListNode().
 *
 * BreadcrumbList is MUST_ALWAYS_EMIT. A breadcrumb with zero items is a
 * contradiction — we flag it via the gated-emission "empty itemListElement"
 * rule rather than builder gating.
 */
export const breadcrumbListFixture = {
  builderName: 'buildBreadcrumbListNode',
  nodeType: 'BreadcrumbList',
  alwaysEmits: true,
  full: {
    input: {
      id: 'https://www.vastucart.in/tools/kundli#breadcrumb',
      items: [
        { name: 'Home', url: 'https://www.vastucart.in/' },
        { name: 'Tools', url: 'https://www.vastucart.in/tools' },
        { name: 'Astrology', url: 'https://www.vastucart.in/tools?category=astrology' },
        { name: 'Kundli', url: 'https://www.vastucart.in/tools/kundli' },
      ],
    },
  },
  missingRequired: {
    input: {
      id: 'https://www.vastucart.in/tools/kundli#breadcrumb',
      items: [], // empty — violates non-empty itemListElement rule
    },
  },
} as const;
