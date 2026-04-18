/**
 * Fixture for buildOrganizationNode().
 *
 * Organization is an MUST_ALWAYS_EMIT type (shared contracts §5.1). It
 * takes no parameters — everything flows from BRAND_CONFIG. There is no
 * meaningful "missing-required" case; the builder either emits a full
 * Organization or the BRAND_CONFIG itself is broken (which is a config
 * bug, not a gating test).
 */
export const organizationFixture = {
  builderName: 'buildOrganizationNode',
  nodeType: 'Organization',
  alwaysEmits: true,
  full: { input: undefined }, // no params
  missingRequired: undefined,
} as const;
