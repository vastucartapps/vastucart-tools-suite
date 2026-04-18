/**
 * Fixture for buildSpeakableNode(). Always-emit.
 */
export const speakableFixture = {
  builderName: 'buildSpeakableNode',
  nodeType: 'SpeakableSpecification',
  alwaysEmits: true,
  full: {
    input: {
      id: 'https://www.vastucart.in/tools/kundli#speakable',
      cssSelectors: ['h1', '.tool-summary', '.tool-result-summary'],
    },
  },
  missingRequired: {
    input: {
      id: 'https://www.vastucart.in/tools/kundli#speakable',
      cssSelectors: [], // empty — content signal missing
    },
  },
} as const;
