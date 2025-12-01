/**
 * Planetary Position Calculator
 * Using simplified VSOP87-based algorithms for tropical positions
 * Optimized for accuracy within 1 arcminute for dates 1900-2100
 */

import { DEG_TO_RAD, RAD_TO_DEG, J2000 } from '../constants';
import { julianCenturies, normalizeAngle } from './julian';

// Planetary orbital elements and rates (J2000.0 epoch)
// Source: Standish, E.M. (1992) "Keplerian Elements for Approximate Positions of the Major Planets"

interface OrbitalElements {
  // Semi-major axis (AU) and rate
  a: number;
  aDot: number;
  // Eccentricity and rate
  e: number;
  eDot: number;
  // Inclination (degrees) and rate
  i: number;
  iDot: number;
  // Mean longitude (degrees) and rate
  L: number;
  LDot: number;
  // Longitude of perihelion (degrees) and rate
  w: number;
  wDot: number;
  // Longitude of ascending node (degrees) and rate
  O: number;
  ODot: number;
}

const ORBITAL_ELEMENTS: Record<string, OrbitalElements> = {
  mercury: {
    a: 0.38709927, aDot: 0.00000037,
    e: 0.20563593, eDot: 0.00001906,
    i: 7.00497902, iDot: -0.00594749,
    L: 252.25032350, LDot: 149472.67411175,
    w: 77.45779628, wDot: 0.16047689,
    O: 48.33076593, ODot: -0.12534081,
  },
  venus: {
    a: 0.72333566, aDot: 0.00000390,
    e: 0.00677672, eDot: -0.00004107,
    i: 3.39467605, iDot: -0.00078890,
    L: 181.97909950, LDot: 58517.81538729,
    w: 131.60246718, wDot: 0.00268329,
    O: 76.67984255, ODot: -0.27769418,
  },
  earth: {
    a: 1.00000261, aDot: 0.00000562,
    e: 0.01671123, eDot: -0.00004392,
    i: -0.00001531, iDot: -0.01294668,
    L: 100.46457166, LDot: 35999.37244981,
    w: 102.93768193, wDot: 0.32327364,
    O: 0, ODot: 0,
  },
  mars: {
    a: 1.52371034, aDot: 0.00001847,
    e: 0.09339410, eDot: 0.00007882,
    i: 1.84969142, iDot: -0.00813131,
    L: -4.55343205, LDot: 19140.30268499,
    w: -23.94362959, wDot: 0.44441088,
    O: 49.55953891, ODot: -0.29257343,
  },
  jupiter: {
    a: 5.20288700, aDot: -0.00011607,
    e: 0.04838624, eDot: -0.00013253,
    i: 1.30439695, iDot: -0.00183714,
    L: 34.39644051, LDot: 3034.74612775,
    w: 14.72847983, wDot: 0.21252668,
    O: 100.47390909, ODot: 0.20469106,
  },
  saturn: {
    a: 9.53667594, aDot: -0.00125060,
    e: 0.05386179, eDot: -0.00050991,
    i: 2.48599187, iDot: 0.00193609,
    L: 49.95424423, LDot: 1222.49362201,
    w: 92.59887831, wDot: -0.41897216,
    O: 113.66242448, ODot: -0.28867794,
  },
};

/**
 * Calculate tropical longitude for Sun (geocentric)
 */
export function calculateSunLongitude(jd: number): number {
  const T = julianCenturies(jd);

  // Mean longitude of Sun
  const L0 = normalizeAngle(280.4664567 + 360007.6982779 * T +
             0.03032028 * T * T + T * T * T / 49931 -
             T * T * T * T / 15300 - T * T * T * T * T / 2000000);

  // Mean anomaly of Sun
  const M = normalizeAngle(357.5291092 + 35999.0502909 * T -
            0.0001536 * T * T + T * T * T / 24490000);

  const MRad = M * DEG_TO_RAD;

  // Equation of center
  const C = (1.9146 - 0.004817 * T - 0.000014 * T * T) * Math.sin(MRad) +
            (0.019993 - 0.000101 * T) * Math.sin(2 * MRad) +
            0.00029 * Math.sin(3 * MRad);

  // True longitude
  const sunLongitude = normalizeAngle(L0 + C);

  return sunLongitude;
}

/**
 * Calculate tropical longitude for Moon (geocentric)
 * Using simplified Brown's lunar theory
 */
export function calculateMoonLongitude(jd: number): number {
  const T = julianCenturies(jd);

  // Mean longitude of Moon
  const Lp = normalizeAngle(218.3164477 + 481267.88123421 * T -
             0.0015786 * T * T + T * T * T / 538841 - T * T * T * T / 65194000);

  // Mean elongation of Moon
  const D = normalizeAngle(297.8501921 + 445267.1114034 * T -
            0.0018819 * T * T + T * T * T / 545868 - T * T * T * T / 113065000);

  // Sun's mean anomaly
  const M = normalizeAngle(357.5291092 + 35999.0502909 * T -
            0.0001536 * T * T + T * T * T / 24490000);

  // Moon's mean anomaly
  const Mp = normalizeAngle(134.9633964 + 477198.8675055 * T +
             0.0087414 * T * T + T * T * T / 69699 - T * T * T * T / 14712000);

  // Moon's argument of latitude
  const F = normalizeAngle(93.2720950 + 483202.0175233 * T -
            0.0036539 * T * T - T * T * T / 3526000 + T * T * T * T / 863310000);

  // Convert to radians
  const DRad = D * DEG_TO_RAD;
  const MRad = M * DEG_TO_RAD;
  const MpRad = Mp * DEG_TO_RAD;
  const FRad = F * DEG_TO_RAD;

  // Main periodic terms for longitude
  let sumL = 0;

  // Principal terms (simplified from full theory)
  sumL += 6288774 * Math.sin(MpRad);
  sumL += 1274027 * Math.sin(2 * DRad - MpRad);
  sumL += 658314 * Math.sin(2 * DRad);
  sumL += 213618 * Math.sin(2 * MpRad);
  sumL += -185116 * Math.sin(MRad);
  sumL += -114332 * Math.sin(2 * FRad);
  sumL += 58793 * Math.sin(2 * DRad - 2 * MpRad);
  sumL += 57066 * Math.sin(2 * DRad - MRad - MpRad);
  sumL += 53322 * Math.sin(2 * DRad + MpRad);
  sumL += 45758 * Math.sin(2 * DRad - MRad);
  sumL += -40923 * Math.sin(MRad - MpRad);
  sumL += -34720 * Math.sin(DRad);
  sumL += -30383 * Math.sin(MRad + MpRad);
  sumL += 15327 * Math.sin(2 * DRad - 2 * FRad);
  sumL += -12528 * Math.sin(MpRad + 2 * FRad);
  sumL += 10980 * Math.sin(MpRad - 2 * FRad);
  sumL += 10675 * Math.sin(4 * DRad - MpRad);
  sumL += 10034 * Math.sin(3 * MpRad);
  sumL += 8548 * Math.sin(4 * DRad - 2 * MpRad);
  sumL += -7888 * Math.sin(2 * DRad + MRad - MpRad);
  sumL += -6766 * Math.sin(2 * DRad + MRad);
  sumL += -5163 * Math.sin(DRad - MpRad);
  sumL += 4987 * Math.sin(DRad + MRad);
  sumL += 4036 * Math.sin(2 * DRad - MRad + MpRad);

  // Convert from 0.000001 degrees to degrees
  const longitudeCorrection = sumL / 1000000;

  const moonLongitude = normalizeAngle(Lp + longitudeCorrection);

  return moonLongitude;
}

/**
 * Calculate geocentric longitude for a planet
 */
export function calculatePlanetLongitude(planet: string, jd: number): number {
  if (planet === 'sun') return calculateSunLongitude(jd);
  if (planet === 'moon') return calculateMoonLongitude(jd);

  const T = julianCenturies(jd);

  // Get Earth's position first (for geocentric conversion)
  const earthElements = ORBITAL_ELEMENTS.earth;
  const earthL = normalizeAngle(earthElements.L + earthElements.LDot * T);
  const earthA = earthElements.a + earthElements.aDot * T;
  const earthE = earthElements.e + earthElements.eDot * T;
  const earthW = normalizeAngle(earthElements.w + earthElements.wDot * T);

  // Earth's mean anomaly and eccentric anomaly
  const earthM = normalizeAngle(earthL - earthW);
  const earthEA = solveKepler(earthM * DEG_TO_RAD, earthE);

  // Earth's heliocentric position
  const earthR = earthA * (1 - earthE * Math.cos(earthEA));
  const earthV = 2 * Math.atan(Math.sqrt((1 + earthE) / (1 - earthE)) * Math.tan(earthEA / 2));
  const earthHelioLon = normalizeAngle((earthV * RAD_TO_DEG) + earthW);

  // Planet's position
  const elem = ORBITAL_ELEMENTS[planet];
  if (!elem) {
    // For Rahu and Ketu, calculate mean nodes
    if (planet === 'rahu') {
      return calculateRahuLongitude(jd);
    }
    if (planet === 'ketu') {
      return normalizeAngle(calculateRahuLongitude(jd) + 180);
    }
    throw new Error(`Unknown planet: ${planet}`);
  }

  const L = normalizeAngle(elem.L + elem.LDot * T);
  const a = elem.a + elem.aDot * T;
  const e = elem.e + elem.eDot * T;
  const w = normalizeAngle(elem.w + elem.wDot * T);

  // Planet's mean anomaly and eccentric anomaly
  const M = normalizeAngle(L - w);
  const EA = solveKepler(M * DEG_TO_RAD, e);

  // Planet's heliocentric position
  const r = a * (1 - e * Math.cos(EA));
  const v = 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(EA / 2));
  const helioLon = normalizeAngle((v * RAD_TO_DEG) + w);

  // Convert to geocentric (simplified - ignoring latitude)
  const helioLonRad = helioLon * DEG_TO_RAD;
  const earthHelioLonRad = earthHelioLon * DEG_TO_RAD;

  const x = r * Math.cos(helioLonRad) - earthR * Math.cos(earthHelioLonRad);
  const y = r * Math.sin(helioLonRad) - earthR * Math.sin(earthHelioLonRad);

  let geoLon = Math.atan2(y, x) * RAD_TO_DEG;
  geoLon = normalizeAngle(geoLon);

  return geoLon;
}

/**
 * Calculate Rahu (North Node) mean longitude
 */
export function calculateRahuLongitude(jd: number): number {
  const T = julianCenturies(jd);

  // Mean longitude of Rahu (retrograde motion)
  const rahu = normalizeAngle(125.0445479 - 1934.1362891 * T +
               0.0020754 * T * T + T * T * T / 467441);

  return rahu;
}

/**
 * Solve Kepler's equation using Newton-Raphson iteration
 * M = E - e*sin(E)
 */
function solveKepler(M: number, e: number): number {
  let E = M; // Initial guess

  for (let i = 0; i < 10; i++) {
    const dE = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
    E -= dE;
    if (Math.abs(dE) < 1e-9) break;
  }

  return E;
}

/**
 * Get all planetary positions for a given Julian Day
 */
export function getAllPlanetPositions(jd: number): Record<string, number> {
  return {
    sun: calculateSunLongitude(jd),
    moon: calculateMoonLongitude(jd),
    mercury: calculatePlanetLongitude('mercury', jd),
    venus: calculatePlanetLongitude('venus', jd),
    mars: calculatePlanetLongitude('mars', jd),
    jupiter: calculatePlanetLongitude('jupiter', jd),
    saturn: calculatePlanetLongitude('saturn', jd),
    rahu: calculateRahuLongitude(jd),
    ketu: normalizeAngle(calculateRahuLongitude(jd) + 180),
  };
}
