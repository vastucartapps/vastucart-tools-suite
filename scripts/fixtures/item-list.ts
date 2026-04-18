/**
 * Fixture for buildItemListNode(params).
 *
 * ItemList is emitted on the /tools index and (in future Bundle C) on
 * cluster hub pages. Empty `items` is flagged by the empty-array rule
 * even though ItemList itself is not on the MUST_GATE list.
 */
export const itemListFixture = {
  builderName: 'buildItemListNode',
  nodeType: 'ItemList',
  alwaysEmits: true,
  full: {
    input: {
      id: 'https://www.vastucart.in/tools#itemlist',
      items: [
        {
          name: 'Kundli Generator',
          url: 'https://www.vastucart.in/tools/kundli',
          description: 'Complete Vedic birth chart with planetary positions and dasha periods.',
        },
        {
          name: 'Life Path Number',
          url: 'https://www.vastucart.in/tools/life-path-number',
          description: 'Numerological profile derived from your date of birth.',
        },
        {
          name: 'Moon Sign (Rashi)',
          url: 'https://www.vastucart.in/tools/moon-sign',
          description: 'Sidereal Moon sign with Nakshatra and Pada.',
        },
      ],
    },
  },
  missingRequired: {
    input: {
      id: 'https://www.vastucart.in/tools#itemlist',
      items: [],
    },
  },
} as const;
