/**
 * Fixture for buildAuthorNode(author?).
 *
 * Person entities are canonically owned by blog.vastucart.in (shared
 * contracts §2.2). The default author (PRIMARY_AUTHOR from @/config/authors)
 * is referenced here as the "full" case. The "missing-required" case
 * simulates a caller passing a stub author with an empty name — the
 * validator will flag the empty name.
 */
export const authorFixture = {
  builderName: 'buildAuthorNode',
  nodeType: 'Person',
  alwaysEmits: true,
  // `input: undefined` → builder uses PRIMARY_AUTHOR default
  full: { input: undefined },
  missingRequired: {
    input: {
      name: '',
      profileUrl: 'https://blog.vastucart.in/authors/unknown',
      jobTitle: '',
      bio: '',
      image: 'https://blog.vastucart.in/authors/unknown.jpg',
      knowsAbout: [],
      category: 'editorial' as const,
    },
  },
} as const;
