/**
 * House (Bhava) Calculator
 * Calculates Ascendant (Lagna) and house cusps
 * Using Equal House system (standard for Vedic astrology)
 */

import { DEG_TO_RAD, RAD_TO_DEG } from '../constants';
import { localSiderealTime, normalizeAngle } from './julian';
import { tropicalToSidereal, getSignIndex, getDegreeInSign } from './ayanamsa';

/**
 * Calculate the Ascendant (Lagna) - tropical longitude
 *
 * The Ascendant is the point of the ecliptic rising on the eastern horizon
 * at the moment and place of birth.
 *
 * @param jd Julian Day number
 * @param latitude Geographic latitude in degrees (north positive)
 * @param longitude Geographic longitude in degrees (east positive)
 * @returns Tropical Ascendant longitude in degrees
 */
export function calculateAscendantTropical(
  jd: number,
  latitude: number,
  longitude: number
): number {
  // Get Local Sidereal Time
  const lst = localSiderealTime(jd, longitude);
  const lstRad = lst * DEG_TO_RAD;

  // Latitude in radians
  const latRad = latitude * DEG_TO_RAD;

  // Mean obliquity of the ecliptic (simplified)
  // For more accuracy, this should be calculated for the specific date
  const T = (jd - 2451545.0) / 36525;
  const epsilon = 23.439291 - 0.0130042 * T - 0.00000016 * T * T;
  const epsRad = epsilon * DEG_TO_RAD;

  // Calculate Ascendant using the formula:
  // tan(ASC) = cos(RAMC) / (-sin(RAMC) * cos(ε) - tan(φ) * sin(ε))
  // where RAMC = Local Sidereal Time, ε = obliquity, φ = latitude

  const cosLst = Math.cos(lstRad);
  const sinLst = Math.sin(lstRad);
  const cosEps = Math.cos(epsRad);
  const sinEps = Math.sin(epsRad);
  const tanLat = Math.tan(latRad);

  // Numerator: cos(RAMC)
  const numerator = cosLst;

  // Denominator: -sin(RAMC) * cos(ε) - tan(φ) * sin(ε)
  const denominator = -(sinLst * cosEps) - (tanLat * sinEps);

  // Calculate Ascendant
  let ascendant = Math.atan2(numerator, denominator) * RAD_TO_DEG;

  // Normalize to 0-360° range
  // Note: atan2 already handles quadrant correctly based on signs of numerator/denominator
  // No additional quadrant correction is needed - the LST/ASC relationship is not direct
  // The Ascendant depends on latitude, LST, and obliquity in a complex way
  return normalizeAngle(ascendant);
}

/**
 * Calculate the Ascendant (Lagna) - sidereal longitude
 */
export function calculateAscendant(
  jd: number,
  latitude: number,
  longitude: number
): number {
  const tropicalAsc = calculateAscendantTropical(jd, latitude, longitude);
  return tropicalToSidereal(tropicalAsc, jd);
}

/**
 * Calculate Midheaven (MC) - tropical longitude
 * The point where the ecliptic crosses the meridian
 */
export function calculateMidheavenTropical(jd: number, longitude: number): number {
  const lst = localSiderealTime(jd, longitude);
  const lstRad = lst * DEG_TO_RAD;

  const T = (jd - 2451545.0) / 36525;
  const epsilon = 23.439291 - 0.0130042 * T;
  const epsRad = epsilon * DEG_TO_RAD;

  // MC = atan(tan(RAMC) / cos(ε))
  let mc = Math.atan(Math.tan(lstRad) / Math.cos(epsRad)) * RAD_TO_DEG;

  // Adjust quadrant
  if (lst > 90 && lst <= 270) {
    mc += 180;
  } else if (lst > 270) {
    mc += 360;
  }

  return normalizeAngle(mc);
}

/**
 * Calculate Midheaven (MC) - sidereal longitude
 */
export function calculateMidheaven(jd: number, longitude: number): number {
  const tropicalMC = calculateMidheavenTropical(jd, longitude);
  return tropicalToSidereal(tropicalMC, jd);
}

/**
 * Calculate all 12 house cusps using Equal House system
 * In Equal House system, each house spans exactly 30°
 * starting from the Ascendant
 *
 * @param ascendant Sidereal Ascendant longitude
 * @returns Array of 12 house cusp longitudes
 */
export function calculateHouseCusps(ascendant: number): number[] {
  const cusps: number[] = [];

  for (let i = 0; i < 12; i++) {
    cusps.push(normalizeAngle(ascendant + i * 30));
  }

  return cusps;
}

/**
 * Determine which house a planet is in
 * Uses whole sign house system (standard in Vedic)
 *
 * @param planetLongitude Sidereal longitude of the planet
 * @param ascendant Sidereal Ascendant longitude
 * @returns House number (1-12)
 */
export function getHouseNumber(planetLongitude: number, ascendant: number): number {
  // In Whole Sign house system, the house is determined by
  // the sign the planet is in relative to the Ascendant sign

  const ascSign = getSignIndex(ascendant); // 0-11
  const planetSign = getSignIndex(planetLongitude); // 0-11

  // Calculate house (1-12)
  let house = planetSign - ascSign + 1;
  if (house <= 0) {
    house += 12;
  }

  return house;
}

/**
 * Get detailed house information for a planet
 */
export interface HousePosition {
  houseNumber: number;
  houseSign: number;
  degreeInHouse: number;
}

export function getHousePosition(
  planetLongitude: number,
  ascendant: number
): HousePosition {
  const houseNumber = getHouseNumber(planetLongitude, ascendant);
  const planetSign = getSignIndex(planetLongitude);

  return {
    houseNumber,
    houseSign: planetSign,
    degreeInHouse: getDegreeInSign(planetLongitude),
  };
}

/**
 * Calculate all planetary house positions
 */
export function getAllHousePositions(
  planetPositions: Record<string, number>,
  ascendant: number
): Record<string, HousePosition> {
  const positions: Record<string, HousePosition> = {};

  for (const [planet, longitude] of Object.entries(planetPositions)) {
    positions[planet] = getHousePosition(longitude, ascendant);
  }

  return positions;
}

/**
 * Get the lord of a house (ruler of the sign on the cusp)
 */
export function getHouseLord(houseNumber: number, ascendant: number): string {
  const houseCusp = normalizeAngle(ascendant + (houseNumber - 1) * 30);
  const signIndex = getSignIndex(houseCusp);

  const signLords = [
    'mars',    // Aries
    'venus',   // Taurus
    'mercury', // Gemini
    'moon',    // Cancer
    'sun',     // Leo
    'mercury', // Virgo
    'venus',   // Libra
    'mars',    // Scorpio
    'jupiter', // Sagittarius
    'saturn',  // Capricorn
    'saturn',  // Aquarius
    'jupiter', // Pisces
  ];

  return signLords[signIndex];
}
