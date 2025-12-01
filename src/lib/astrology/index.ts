/**
 * Vedic Astrology Library
 * Complete Jyotish calculation toolkit
 */

// Export all engine functions and types
export * from './engine';

// Export places data
export {
  INDIAN_PLACES,
  searchPlaces,
  getPlaceByName,
  getTimezoneOffset,
  type Place
} from './data/places-india';

// Re-export constants with categories
export {
  ZODIAC_SIGNS,
  PLANETS,
  NAKSHATRAS,
  HOUSES,
  VIMSHOTTARI_ORDER,
  VIMSHOTTARI_TOTAL_YEARS,
  NAKSHATRA_SPAN,
  PADA_SPAN,
} from './constants';

// High-level calculation functions

import { dateToJulianDay, localToUT } from './engine/julian';
import { tropicalToSidereal, getPositionDetails, getNakshatraIndex, getPada } from './engine/ayanamsa';
import { calculateMoonLongitude, getAllPlanetPositions } from './engine/planets';
import { calculateAscendant, getAllHousePositions } from './engine/houses';
import { calculateMahadashas, getDashaHierarchy, getBalanceAtBirth } from './engine/dasha';
import { ZODIAC_SIGNS, NAKSHATRAS, VIMSHOTTARI_ORDER } from './constants';
import type { Place } from './data/places-india';

export interface BirthDetails {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  latitude: number;
  longitude: number;
  timezone: number;
}

export interface MoonSignResult {
  sign: typeof ZODIAC_SIGNS[number];
  nakshatra: typeof NAKSHATRAS[number];
  pada: number;
  moonLongitude: number;
  degreeInSign: number;
}

export interface LagnaResult {
  sign: typeof ZODIAC_SIGNS[number];
  degree: number;
  ascendant: number;
}

export interface FullChartData {
  ascendant: number;
  moonSign: MoonSignResult;
  lagna: LagnaResult;
  planets: Record<string, {
    longitude: number;
    sign: typeof ZODIAC_SIGNS[number];
    nakshatra: typeof NAKSHATRAS[number];
    pada: number;
    house: number;
  }>;
  houses: number[];
  dasha: ReturnType<typeof getDashaHierarchy>;
  balanceAtBirth: ReturnType<typeof getBalanceAtBirth>;
}

/**
 * Calculate Moon Sign from birth details
 */
export function calculateMoonSign(birth: BirthDetails): MoonSignResult {
  // Convert local time to UT
  const ut = localToUT(
    birth.year, birth.month, birth.day,
    birth.hour, birth.minute, birth.timezone
  );

  // Get Julian Day
  const jd = dateToJulianDay(ut.year, ut.month, ut.day, ut.hour, ut.minute);

  // Get tropical Moon longitude
  const tropicalMoon = calculateMoonLongitude(jd);

  // Convert to sidereal
  const siderealMoon = tropicalToSidereal(tropicalMoon, jd);

  // Get position details
  const details = getPositionDetails(siderealMoon);

  return {
    sign: ZODIAC_SIGNS[details.signIndex],
    nakshatra: NAKSHATRAS[details.nakshatraIndex],
    pada: details.pada,
    moonLongitude: siderealMoon,
    degreeInSign: details.degreeInSign + details.minuteInSign / 60,
  };
}

/**
 * Calculate Lagna (Ascendant) from birth details
 */
export function calculateLagna(birth: BirthDetails): LagnaResult {
  // Convert local time to UT
  const ut = localToUT(
    birth.year, birth.month, birth.day,
    birth.hour, birth.minute, birth.timezone
  );

  // Get Julian Day
  const jd = dateToJulianDay(ut.year, ut.month, ut.day, ut.hour, ut.minute);

  // Calculate sidereal ascendant
  const ascendant = calculateAscendant(jd, birth.latitude, birth.longitude);

  // Get sign details
  const details = getPositionDetails(ascendant);

  return {
    sign: ZODIAC_SIGNS[details.signIndex],
    degree: details.degreeInSign + details.minuteInSign / 60,
    ascendant,
  };
}

/**
 * Calculate full birth chart data
 */
export function calculateFullChart(birth: BirthDetails): FullChartData {
  // Convert local time to UT
  const ut = localToUT(
    birth.year, birth.month, birth.day,
    birth.hour, birth.minute, birth.timezone
  );

  // Get Julian Day
  const jd = dateToJulianDay(ut.year, ut.month, ut.day, ut.hour, ut.minute);

  // Calculate ascendant
  const ascendant = calculateAscendant(jd, birth.latitude, birth.longitude);

  // Get all tropical planet positions
  const tropicalPositions = getAllPlanetPositions(jd);

  // Convert to sidereal and add details
  const planets: FullChartData['planets'] = {};
  for (const [planet, tropical] of Object.entries(tropicalPositions)) {
    const sidereal = tropicalToSidereal(tropical, jd);
    const details = getPositionDetails(sidereal);
    const housePositions = getAllHousePositions({ [planet]: sidereal }, ascendant);

    planets[planet] = {
      longitude: sidereal,
      sign: ZODIAC_SIGNS[details.signIndex],
      nakshatra: NAKSHATRAS[details.nakshatraIndex],
      pada: details.pada,
      house: housePositions[planet].houseNumber,
    };
  }

  // Calculate houses (equal house system from ascendant)
  const houses: number[] = [];
  for (let i = 0; i < 12; i++) {
    houses.push((ascendant + i * 30) % 360);
  }

  // Moon sign
  const moonDetails = getPositionDetails(planets.moon.longitude);
  const moonSign: MoonSignResult = {
    sign: ZODIAC_SIGNS[moonDetails.signIndex],
    nakshatra: NAKSHATRAS[moonDetails.nakshatraIndex],
    pada: moonDetails.pada,
    moonLongitude: planets.moon.longitude,
    degreeInSign: moonDetails.degreeInSign + moonDetails.minuteInSign / 60,
  };

  // Lagna
  const lagnaDetails = getPositionDetails(ascendant);
  const lagna: LagnaResult = {
    sign: ZODIAC_SIGNS[lagnaDetails.signIndex],
    degree: lagnaDetails.degreeInSign + lagnaDetails.minuteInSign / 60,
    ascendant,
  };

  // Dasha
  const birthDate = new Date(birth.year, birth.month - 1, birth.day, birth.hour, birth.minute);
  const dasha = getDashaHierarchy(planets.moon.longitude, birthDate);
  const balanceAtBirth = getBalanceAtBirth(planets.moon.longitude);

  return {
    ascendant,
    moonSign,
    lagna,
    planets,
    houses,
    dasha,
    balanceAtBirth,
  };
}

/**
 * Create BirthDetails from a Place object
 */
export function createBirthDetails(
  place: Place,
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number
): BirthDetails {
  return {
    year,
    month,
    day,
    hour,
    minute,
    latitude: place.lat,
    longitude: place.lng,
    timezone: place.tz,
  };
}
