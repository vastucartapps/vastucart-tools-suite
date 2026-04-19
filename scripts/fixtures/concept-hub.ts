/**
 * Fixture for buildHubGraphNodes() — the /concepts hub page emission.
 *
 * Validates the aggregated @graph:
 * - CollectionPage has correct @id and author (vastucart-editorial)
 * - ItemList has exactly 138 members
 * - Every ListItem has url shape matching its concept's path rule
 *   (Tithi → nested /concepts/tithi/{slug}; others → flat /concepts/{slug})
 * - Both canonical DefinedTermSets emitted (nakshatra-set, tithi-set)
 *   with correct member counts and member @id references
 */

export interface ConceptHubFixture {
  expectedPageUrl: string;
  expectedCollectionPageId: string;
  expectedAuthorId: string;
  expectedItemListId: string;
  expectedTotalConcepts: number;
  expectedFlatConcepts: number;
  expectedNestedConcepts: number;
  expectedNakshatraSetId: string;
  expectedNakshatraMembers: number;
  expectedTithiSetId: string;
  expectedTithiMembers: number;
}

export const CONCEPT_HUB_FIXTURE: ConceptHubFixture = {
  expectedPageUrl: 'https://www.vastucart.in/concepts',
  expectedCollectionPageId: 'https://www.vastucart.in/concepts#webpage',
  expectedAuthorId: 'https://blog.vastucart.in/authors/vastucart-editorial#person',
  expectedItemListId: 'https://www.vastucart.in/concepts#itemlist-all',
  expectedTotalConcepts: 138,
  expectedFlatConcepts: 122, // 138 minus 16 Tithis
  expectedNestedConcepts: 16, // Tithis only
  expectedNakshatraSetId: 'https://www.vastucart.in/concepts/nakshatra-set#termset',
  expectedNakshatraMembers: 27,
  expectedTithiSetId: 'https://www.vastucart.in/concepts/tithi-set#termset',
  expectedTithiMembers: 16,
};
