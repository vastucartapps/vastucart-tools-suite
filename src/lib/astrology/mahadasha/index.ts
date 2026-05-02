/**
 * Mahadasha planet content registry.
 *
 * The /tools/mahadasha/[planet] dynamic route reads from this single
 * registry. Each PlanetRecord is a self-contained bilingual long-form
 * article with metadata, periods, antardashas, remedies, FAQs, and HowTo
 * steps — emitted as page content + Article + FAQPage + HowTo JSON-LD.
 */

import type { PlanetRecord, PlanetSlug } from './types';
import { SURYA } from './data/surya';
import { CHANDRA } from './data/chandra';
import { MANGAL } from './data/mangal';
import { BUDH } from './data/budh';
import { GURU } from './data/guru';
import { SHUKRA } from './data/shukra';
import { SHANI } from './data/shani';
import { RAHU } from './data/rahu';
import { KETU } from './data/ketu';

/**
 * Vimshottari ordering — the canonical sequence used by every Vedic
 * astrology calculation. Surya first because it begins the cycle (after
 * Ketu's residual portion at birth, the next full dasha is one of these
 * planets in this order). Note: this is the *display* order on hub
 * pages, not the calculation order — the calculator uses the dasha
 * sequence Ketu → Venus → Sun → Moon → Mars → Rahu → Jupiter → Saturn → Mercury.
 */
export const PLANET_DISPLAY_ORDER: PlanetSlug[] = [
  'surya',
  'chandra',
  'mangal',
  'rahu',
  'guru',
  'shani',
  'budh',
  'ketu',
  'shukra',
];

const PLANETS: Record<PlanetSlug, PlanetRecord> = {
  surya: SURYA,
  chandra: CHANDRA,
  mangal: MANGAL,
  rahu: RAHU,
  guru: GURU,
  shani: SHANI,
  budh: BUDH,
  ketu: KETU,
  shukra: SHUKRA,
};

export function getAllPlanetSlugs(): PlanetSlug[] {
  return PLANET_DISPLAY_ORDER;
}

export function isValidPlanetSlug(slug: string): slug is PlanetSlug {
  return (PLANET_DISPLAY_ORDER as string[]).includes(slug);
}

export function getPlanet(slug: PlanetSlug): PlanetRecord {
  return PLANETS[slug];
}

export function getAllPlanets(): PlanetRecord[] {
  return PLANET_DISPLAY_ORDER.map((s) => PLANETS[s]);
}

/**
 * Estimated rendered word count for a planet article in a given locale.
 * Used to populate the Article schema's `wordCount` and the page's
 * `readingTimeMinutes`. Approximate but consistent — counts intro,
 * periodOverview, wellPlaced, afflicted, all 12 house effects, all 9
 * antardasha effects, all 5 remedies, casePatterns. Excludes FAQ and
 * HowTo (those have their own JSON-LD nodes with separate counts).
 */
export function estimateWordCount(planet: PlanetRecord, locale: 'en' | 'hi'): number {
  const fields: string[] = [
    planet.intro[locale],
    planet.periodOverview[locale],
    planet.wellPlacedEffects[locale],
    planet.afflictedEffects[locale],
    planet.casePatterns[locale],
    ...planet.houseEffects.map((h) => h.effect[locale]),
    ...planet.antardashas.map((a) => a.effect[locale]),
    ...planet.remedies.map((r) => r.body[locale]),
  ];
  // Hindi uses different word boundaries; for both locales we use
  // whitespace-split as a stable approximation.
  return fields.reduce((sum, t) => sum + t.split(/\s+/).filter(Boolean).length, 0);
}

export type { PlanetRecord, PlanetSlug } from './types';
