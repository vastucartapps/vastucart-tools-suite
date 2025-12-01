/**
 * Vimshottari Dasha Calculator
 * Calculates Mahadasha, Antardasha, Pratyantardasha periods
 * Based on Moon's nakshatra position at birth
 */

import { NAKSHATRAS, VIMSHOTTARI_ORDER, VIMSHOTTARI_TOTAL_YEARS, NAKSHATRA_SPAN } from '../constants';
import { getNakshatraIndex } from './ayanamsa';

export interface DashaPeriod {
  planet: string;
  planetName: { en: string; hi: string };
  startDate: Date;
  endDate: Date;
  years: number;
  color: string;
}

export interface AntarDashaPeriod extends DashaPeriod {
  mahadasha: string;
}

export interface PratyantarDashaPeriod extends DashaPeriod {
  mahadasha: string;
  antardasha: string;
}

/**
 * Get the starting Mahadasha planet based on Moon's nakshatra
 */
export function getStartingDashaLord(moonLongitude: number): {
  planet: typeof VIMSHOTTARI_ORDER[number];
  index: number;
} {
  const nakshatraIndex = getNakshatraIndex(moonLongitude);
  const nakshatra = NAKSHATRAS[nakshatraIndex];

  // Find the planet in Vimshottari order that matches the nakshatra lord
  const lordName = nakshatra.lord.toLowerCase();
  const planetIndex = VIMSHOTTARI_ORDER.findIndex(p => p.id === lordName);

  return {
    planet: VIMSHOTTARI_ORDER[planetIndex],
    index: planetIndex,
  };
}

/**
 * Calculate elapsed portion of first Mahadasha at birth
 * Based on how far Moon has traveled in the nakshatra
 */
export function getElapsedDashaFraction(moonLongitude: number): number {
  // Position within the nakshatra (0 to NAKSHATRA_SPAN degrees)
  const positionInNakshatra = moonLongitude % NAKSHATRA_SPAN;

  // Fraction elapsed (0 to 1)
  return positionInNakshatra / NAKSHATRA_SPAN;
}

/**
 * Calculate all Mahadasha periods from birth
 */
export function calculateMahadashas(
  moonLongitude: number,
  birthDate: Date
): DashaPeriod[] {
  const periods: DashaPeriod[] = [];
  const { planet: startPlanet, index: startIndex } = getStartingDashaLord(moonLongitude);
  const elapsedFraction = getElapsedDashaFraction(moonLongitude);

  let currentDate = new Date(birthDate);

  // First Mahadasha - calculate remaining portion
  const firstPlanet = startPlanet;
  const remainingYears = firstPlanet.vimshottariYears * (1 - elapsedFraction);
  const firstEndDate = addYearsToDate(currentDate, remainingYears);

  periods.push({
    planet: firstPlanet.id,
    planetName: firstPlanet.name,
    startDate: new Date(currentDate),
    endDate: firstEndDate,
    years: remainingYears,
    color: firstPlanet.color,
  });

  currentDate = firstEndDate;

  // Subsequent Mahadashas - full periods
  for (let i = 1; i < 9; i++) {
    const planetIndex = (startIndex + i) % 9;
    const planet = VIMSHOTTARI_ORDER[planetIndex];
    const endDate = addYearsToDate(currentDate, planet.vimshottariYears);

    periods.push({
      planet: planet.id,
      planetName: planet.name,
      startDate: new Date(currentDate),
      endDate: endDate,
      years: planet.vimshottariYears,
      color: planet.color,
    });

    currentDate = endDate;
  }

  // Continue for second cycle if needed (for long life spans)
  for (let i = 0; i < 9; i++) {
    const planetIndex = (startIndex + i) % 9;
    const planet = VIMSHOTTARI_ORDER[planetIndex];
    const endDate = addYearsToDate(currentDate, planet.vimshottariYears);

    periods.push({
      planet: planet.id,
      planetName: planet.name,
      startDate: new Date(currentDate),
      endDate: endDate,
      years: planet.vimshottariYears,
      color: planet.color,
    });

    currentDate = endDate;
  }

  return periods;
}

/**
 * Calculate Antardasha (sub-periods) within a Mahadasha
 */
export function calculateAntardashas(
  mahadasha: DashaPeriod,
  allPlanets: typeof VIMSHOTTARI_ORDER
): AntarDashaPeriod[] {
  const periods: AntarDashaPeriod[] = [];
  const mahadashaPlanetIndex = allPlanets.findIndex(p => p.id === mahadasha.planet);

  let currentDate = new Date(mahadasha.startDate);
  const totalDays = (mahadasha.endDate.getTime() - mahadasha.startDate.getTime()) / (1000 * 60 * 60 * 24);

  // Antardashas follow the same order, starting from the Mahadasha lord
  for (let i = 0; i < 9; i++) {
    const planetIndex = (mahadashaPlanetIndex + i) % 9;
    const planet = allPlanets[planetIndex];

    // Antardasha duration = (Mahadasha years × Antardasha planet years) / 120
    const antardashaYears = (mahadasha.years * planet.vimshottariYears) / VIMSHOTTARI_TOTAL_YEARS;
    const antardashaDays = (totalDays * planet.vimshottariYears) / VIMSHOTTARI_TOTAL_YEARS;

    const endDate = new Date(currentDate.getTime() + antardashaDays * 24 * 60 * 60 * 1000);

    periods.push({
      planet: planet.id,
      planetName: planet.name,
      startDate: new Date(currentDate),
      endDate: endDate,
      years: antardashaYears,
      mahadasha: mahadasha.planet,
      color: planet.color,
    });

    currentDate = endDate;
  }

  return periods;
}

/**
 * Calculate Pratyantardasha (sub-sub-periods) within an Antardasha
 */
export function calculatePratyantardashas(
  antardasha: AntarDashaPeriod,
  allPlanets: typeof VIMSHOTTARI_ORDER
): PratyantarDashaPeriod[] {
  const periods: PratyantarDashaPeriod[] = [];
  const antardashaIndex = allPlanets.findIndex(p => p.id === antardasha.planet);

  let currentDate = new Date(antardasha.startDate);
  const totalDays = (antardasha.endDate.getTime() - antardasha.startDate.getTime()) / (1000 * 60 * 60 * 24);

  for (let i = 0; i < 9; i++) {
    const planetIndex = (antardashaIndex + i) % 9;
    const planet = allPlanets[planetIndex];

    const pratyantarYears = (antardasha.years * planet.vimshottariYears) / VIMSHOTTARI_TOTAL_YEARS;
    const pratyantarDays = (totalDays * planet.vimshottariYears) / VIMSHOTTARI_TOTAL_YEARS;

    const endDate = new Date(currentDate.getTime() + pratyantarDays * 24 * 60 * 60 * 1000);

    periods.push({
      planet: planet.id,
      planetName: planet.name,
      startDate: new Date(currentDate),
      endDate: endDate,
      years: pratyantarYears,
      mahadasha: antardasha.mahadasha,
      antardasha: antardasha.planet,
      color: planet.color,
    });

    currentDate = endDate;
  }

  return periods;
}

/**
 * Get current running Mahadasha
 */
export function getCurrentMahadasha(
  mahadashas: DashaPeriod[],
  currentDate: Date = new Date()
): DashaPeriod | null {
  return mahadashas.find(
    md => currentDate >= md.startDate && currentDate < md.endDate
  ) || null;
}

/**
 * Get current running Antardasha
 */
export function getCurrentAntardasha(
  antardashas: AntarDashaPeriod[],
  currentDate: Date = new Date()
): AntarDashaPeriod | null {
  return antardashas.find(
    ad => currentDate >= ad.startDate && currentDate < ad.endDate
  ) || null;
}

/**
 * Helper: Add years to a date (accounting for fractional years)
 */
function addYearsToDate(date: Date, years: number): Date {
  const days = years * 365.25; // Account for leap years
  return new Date(date.getTime() + days * 24 * 60 * 60 * 1000);
}

/**
 * Format dasha period as readable string
 */
export function formatDashaPeriod(period: DashaPeriod): string {
  const start = period.startDate.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  const end = period.endDate.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
  return `${period.planetName.en} (${start} - ${end})`;
}

/**
 * Get balance of Mahadasha at birth
 */
export function getBalanceAtBirth(
  moonLongitude: number
): { planet: string; years: number; months: number; days: number } {
  const { planet } = getStartingDashaLord(moonLongitude);
  const elapsedFraction = getElapsedDashaFraction(moonLongitude);
  const remainingYears = planet.vimshottariYears * (1 - elapsedFraction);

  const years = Math.floor(remainingYears);
  const remainingMonths = (remainingYears - years) * 12;
  const months = Math.floor(remainingMonths);
  const days = Math.floor((remainingMonths - months) * 30);

  return {
    planet: planet.id,
    years,
    months,
    days,
  };
}

/**
 * Get full dasha hierarchy for a given date
 */
export function getDashaHierarchy(
  moonLongitude: number,
  birthDate: Date,
  queryDate: Date = new Date()
): {
  mahadasha: DashaPeriod | null;
  antardasha: AntarDashaPeriod | null;
  pratyantardasha: PratyantarDashaPeriod | null;
} {
  const mahadashas = calculateMahadashas(moonLongitude, birthDate);
  const currentMahadasha = getCurrentMahadasha(mahadashas, queryDate);

  if (!currentMahadasha) {
    return { mahadasha: null, antardasha: null, pratyantardasha: null };
  }

  const antardashas = calculateAntardashas(currentMahadasha, VIMSHOTTARI_ORDER);
  const currentAntardasha = getCurrentAntardasha(antardashas, queryDate);

  if (!currentAntardasha) {
    return { mahadasha: currentMahadasha, antardasha: null, pratyantardasha: null };
  }

  const pratyantardashas = calculatePratyantardashas(currentAntardasha, VIMSHOTTARI_ORDER);
  const currentPratyantardasha = pratyantardashas.find(
    pd => queryDate >= pd.startDate && queryDate < pd.endDate
  ) || null;

  return {
    mahadasha: currentMahadasha,
    antardasha: currentAntardasha,
    pratyantardasha: currentPratyantardasha,
  };
}
