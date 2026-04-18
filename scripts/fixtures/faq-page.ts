/**
 * Fixture for buildFaqPageNode(params).
 *
 * FAQPage IS gated (shared contracts §5.1). When `faqs` is empty or
 * undefined the builder returns null — the validator's gated-emission
 * check asserts exactly this.
 */
export const faqPageFixture = {
  builderName: 'buildFaqPageNode',
  nodeType: 'FAQPage',
  alwaysEmits: false, // gated
  full: {
    input: {
      pageUrl: 'https://www.vastucart.in/tools/kundli',
      faqs: [
        {
          question: 'How accurate is the Kundli calculation?',
          answer:
            'VastuCart uses an in-house astronomical computation engine based on VSOP87 orbital elements (NASA/JPL) and the Lahiri Chitrapaksha ayanamsa, the Government of India standard. Planetary positions are accurate to within one arcminute for dates between 1900 and 2100.',
        },
        {
          question: 'What ayanamsa does VastuCart use?',
          answer:
            'Lahiri (Chitrapaksha) ayanamsa, fixed to Spica at 180° sidereal. This is the ayanamsa adopted by the Indian Astronomical Almanac and used by the majority of practising Jyotishis in India.',
        },
        {
          question: 'Which house system does the Kundli use?',
          answer:
            'Equal House, the traditional Vedic system where each of the 12 bhavas spans 30° from the Lagna (Ascendant). Division of the chart into divisional varga charts (D1, D9, D10, etc.) follows the standard classical rules.',
        },
      ],
    },
  },
  missingRequired: {
    input: {
      pageUrl: 'https://www.vastucart.in/tools/kundli',
      faqs: [], // must cause builder to return null (gated)
    },
  },
} as const;
