/**
 * Panchang Calculation Engine
 * Calculates Tithi, Yoga, Karana, and Nakshatra for muhurat finder
 *
 * Panchang = Five limbs (Panch + Anga):
 * 1. Tithi (Lunar day)
 * 2. Nakshatra (Lunar mansion)
 * 3. Yoga (Luni-solar combination)
 * 4. Karana (Half of Tithi)
 * 5. Vara (Weekday)
 */

import { calculateSunLongitude, calculateMoonLongitude } from './planets';
import { dateToJulianDay, normalizeAngle } from './julian';
import { LAHIRI_AYANAMSA_J2000, AYANAMSA_ANNUAL_MOTION, J2000, NAKSHATRAS, NAKSHATRA_SPAN } from '../constants';
import { TITHIS, YOGAS, KARANAS, WEEKDAYS, type TithiInfo, type YogaInfo, type KaranaInfo, type WeekdayInfo } from '../data/panchang-data';

/**
 * Calculate Ayanamsa (precession correction) for a given Julian Day
 * Uses Lahiri (Chitrapaksha) ayanamsa - the standard for Vedic astrology
 */
export function calculateAyanamsa(jd: number): number {
  const yearsFromJ2000 = (jd - J2000) / 365.25;
  return LAHIRI_AYANAMSA_J2000 + (yearsFromJ2000 * AYANAMSA_ANNUAL_MOTION);
}

/**
 * Convert tropical longitude to sidereal longitude
 */
export function tropicalToSidereal(tropicalLongitude: number, jd: number): number {
  const ayanamsa = calculateAyanamsa(jd);
  return normalizeAngle(tropicalLongitude - ayanamsa);
}

/**
 * Calculate the Moon-Sun elongation (angular distance)
 * This is the foundation for Tithi and Karana calculations
 */
export function calculateElongation(jd: number): number {
  const sunLong = calculateSunLongitude(jd);
  const moonLong = calculateMoonLongitude(jd);

  // Moon - Sun elongation (always positive, 0-360)
  let elongation = moonLong - sunLong;
  if (elongation < 0) {
    elongation += 360;
  }
  return elongation;
}

/**
 * Calculate Tithi (Lunar day)
 * There are 30 Tithis in a lunar month
 * Each Tithi spans 12 degrees of Moon-Sun elongation
 *
 * Formula: Tithi index = floor(elongation / 12)
 */
export function calculateTithi(jd: number): {
  index: number;
  info: TithiInfo;
  progress: number; // 0-1, how far into this tithi
  endTime: number;  // Approximate JD when this tithi ends
} {
  const elongation = calculateElongation(jd);
  const tithiIndex = Math.floor(elongation / 12);
  const progress = (elongation % 12) / 12;

  // Approximate end time (Moon moves ~13.2° per day, Sun ~1°, net ~12° per day)
  // So each tithi lasts ~1 day
  const remainingDegrees = 12 - (elongation % 12);
  const endTime = jd + (remainingDegrees / 12); // Approximate

  return {
    index: tithiIndex,
    info: TITHIS[tithiIndex],
    progress,
    endTime,
  };
}

/**
 * Calculate Yoga (Luni-solar combination)
 * There are 27 Yogas
 * Formula: Yoga index = floor((sunSidereal + moonSidereal) / (360/27))
 * Each Yoga spans 13°20' (800 minutes)
 */
export function calculateYoga(jd: number): {
  index: number;
  info: YogaInfo;
  progress: number;
} {
  const sunTropical = calculateSunLongitude(jd);
  const moonTropical = calculateMoonLongitude(jd);

  const sunSidereal = tropicalToSidereal(sunTropical, jd);
  const moonSidereal = tropicalToSidereal(moonTropical, jd);

  // Sum of sidereal longitudes
  let sum = sunSidereal + moonSidereal;
  if (sum >= 360) {
    sum -= 360;
  }

  const yogaSpan = 360 / 27; // 13.333...
  const yogaIndex = Math.floor(sum / yogaSpan);
  const progress = (sum % yogaSpan) / yogaSpan;

  return {
    index: yogaIndex,
    info: YOGAS[yogaIndex],
    progress,
  };
}

/**
 * Calculate Karana (Half of Tithi)
 * There are 11 Karanas total:
 * - 4 Fixed (Shakuni, Chatushpada, Naga, Kimstughna) - appear once per lunar month
 * - 7 Repeating (Bava, Balava, Kaulava, Taitila, Gara, Vanija, Vishti) - repeat 8 times
 *
 * Each Tithi has 2 Karanas, so 60 Karanas per lunar month
 * Distribution:
 * - First half of Shukla Pratipada: Kimstughna (fixed)
 * - Then 7 repeating karanas cycle through
 * - Second half of Krishna Chaturdashi: Shakuni (fixed)
 * - First half of Krishna Amavasya: Chatushpada (fixed)
 * - Second half of Krishna Amavasya: Naga (fixed)
 */
export function calculateKarana(jd: number): {
  index: number;
  info: KaranaInfo;
  progress: number;
} {
  const elongation = calculateElongation(jd);

  // Each karana spans 6 degrees (half of tithi)
  const karanaPosition = Math.floor(elongation / 6);
  const progress = (elongation % 6) / 6;

  // Map position to karana index
  // Position 0 = Kimstughna (fixed, index 10)
  // Positions 1-56 = Repeating karanas (indices 0-6, cycling)
  // Position 57 = Shakuni (fixed, index 7)
  // Position 58 = Chatushpada (fixed, index 8)
  // Position 59 = Naga (fixed, index 9)

  let karanaIndex: number;

  if (karanaPosition === 0) {
    karanaIndex = 10; // Kimstughna
  } else if (karanaPosition === 57) {
    karanaIndex = 7; // Shakuni
  } else if (karanaPosition === 58) {
    karanaIndex = 8; // Chatushpada
  } else if (karanaPosition === 59) {
    karanaIndex = 9; // Naga
  } else {
    // Repeating karanas (positions 1-56)
    karanaIndex = ((karanaPosition - 1) % 7); // Bava(0) to Vishti(6)
  }

  return {
    index: karanaIndex,
    info: KARANAS[karanaIndex],
    progress,
  };
}

/**
 * Calculate Nakshatra (Lunar mansion) from sidereal Moon position
 * There are 27 Nakshatras, each spanning 13°20'
 */
export function calculateNakshatra(jd: number): {
  index: number;
  name: { en: string; hi: string };
  lord: string;
  pada: number;
  progress: number;
} {
  const moonTropical = calculateMoonLongitude(jd);
  const moonSidereal = tropicalToSidereal(moonTropical, jd);

  const nakshatraIndex = Math.floor(moonSidereal / NAKSHATRA_SPAN);
  const positionInNakshatra = moonSidereal % NAKSHATRA_SPAN;
  const progress = positionInNakshatra / NAKSHATRA_SPAN;
  const pada = Math.floor(positionInNakshatra / (NAKSHATRA_SPAN / 4)) + 1;

  const nakshatra = NAKSHATRAS[nakshatraIndex];

  return {
    index: nakshatraIndex,
    name: nakshatra.name,
    lord: nakshatra.lord,
    pada,
    progress,
  };
}

/**
 * Calculate weekday (Vara) from Julian Day
 * 0 = Sunday, 1 = Monday, etc.
 */
export function calculateWeekday(jd: number): {
  index: number;
  info: WeekdayInfo;
} {
  // JD 0 was a Monday, so we offset by 1
  const dayIndex = Math.floor(jd + 1.5) % 7;

  return {
    index: dayIndex,
    info: WEEKDAYS[dayIndex],
  };
}

/**
 * Full Panchang for a given moment
 */
export interface PanchangResult {
  jd: number;
  date: Date;
  tithi: {
    index: number;
    info: TithiInfo;
    progress: number;
    endTime: number;
  };
  nakshatra: {
    index: number;
    name: { en: string; hi: string };
    lord: string;
    pada: number;
    progress: number;
  };
  yoga: {
    index: number;
    info: YogaInfo;
    progress: number;
  };
  karana: {
    index: number;
    info: KaranaInfo;
    progress: number;
  };
  weekday: {
    index: number;
    info: WeekdayInfo;
  };
  sunLongitude: number;
  moonLongitude: number;
  sunSidereal: number;
  moonSidereal: number;
}

/**
 * Calculate complete Panchang for a given date/time
 */
export function calculatePanchang(
  year: number,
  month: number,
  day: number,
  hour: number = 12,
  minute: number = 0,
  timezoneOffset: number = 5.5 // IST default
): PanchangResult {
  // Convert local time to UT
  const utHour = hour - timezoneOffset;
  const jd = dateToJulianDay(year, month, day, utHour, minute);

  const sunTropical = calculateSunLongitude(jd);
  const moonTropical = calculateMoonLongitude(jd);
  const sunSidereal = tropicalToSidereal(sunTropical, jd);
  const moonSidereal = tropicalToSidereal(moonTropical, jd);

  return {
    jd,
    date: new Date(year, month - 1, day, hour, minute),
    tithi: calculateTithi(jd),
    nakshatra: calculateNakshatra(jd),
    yoga: calculateYoga(jd),
    karana: calculateKarana(jd),
    weekday: calculateWeekday(jd),
    sunLongitude: sunTropical,
    moonLongitude: moonTropical,
    sunSidereal,
    moonSidereal,
  };
}

/**
 * Calculate Panchang from a JavaScript Date object
 */
export function calculatePanchangFromDate(
  date: Date,
  timezoneOffset: number = 5.5
): PanchangResult {
  return calculatePanchang(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
    timezoneOffset
  );
}

/**
 * Calculate sunrise time for a given location and date
 * Uses simplified algorithm - accuracy within 2-3 minutes
 */
export function calculateSunrise(
  year: number,
  month: number,
  day: number,
  latitude: number,
  longitude: number,
  timezoneOffset: number = 5.5
): { hour: number; minute: number } {
  const jd = dateToJulianDay(year, month, day, 12, 0) - timezoneOffset / 24;
  const n = jd - J2000 - 0.0009 - longitude / 360;
  const nRound = Math.round(n);

  // Solar noon
  const jStar = J2000 + 0.0009 + longitude / 360 + nRound;

  // Mean anomaly
  const M = normalizeAngle(357.5291 + 0.98560028 * (jStar - J2000));
  const MRad = M * Math.PI / 180;

  // Equation of center
  const C = 1.9148 * Math.sin(MRad) + 0.02 * Math.sin(2 * MRad) + 0.0003 * Math.sin(3 * MRad);

  // Ecliptic longitude
  const lambda = normalizeAngle(M + C + 180 + 102.9372);
  const lambdaRad = lambda * Math.PI / 180;

  // Solar declination
  const sinDec = Math.sin(lambdaRad) * Math.sin(23.4393 * Math.PI / 180);
  const declination = Math.asin(sinDec);

  // Hour angle
  const latRad = latitude * Math.PI / 180;
  const cosOmega = (Math.sin(-0.833 * Math.PI / 180) - Math.sin(latRad) * sinDec) /
                   (Math.cos(latRad) * Math.cos(declination));

  // Clamp to valid range (for polar regions)
  const clampedCosOmega = Math.max(-1, Math.min(1, cosOmega));
  const omega = Math.acos(clampedCosOmega) * 180 / Math.PI;

  // Transit time
  const jTransit = jStar + 0.0053 * Math.sin(MRad) - 0.0069 * Math.sin(2 * lambdaRad);

  // Sunrise
  const jSunrise = jTransit - omega / 360;

  // Convert to local time
  const sunriseHours = ((jSunrise - Math.floor(jSunrise)) * 24 + timezoneOffset + 24) % 24;
  const hour = Math.floor(sunriseHours);
  const minute = Math.round((sunriseHours - hour) * 60);

  return { hour, minute };
}

/**
 * Calculate sunset time for a given location and date
 */
export function calculateSunset(
  year: number,
  month: number,
  day: number,
  latitude: number,
  longitude: number,
  timezoneOffset: number = 5.5
): { hour: number; minute: number } {
  const jd = dateToJulianDay(year, month, day, 12, 0) - timezoneOffset / 24;
  const n = jd - J2000 - 0.0009 - longitude / 360;
  const nRound = Math.round(n);

  const jStar = J2000 + 0.0009 + longitude / 360 + nRound;
  const M = normalizeAngle(357.5291 + 0.98560028 * (jStar - J2000));
  const MRad = M * Math.PI / 180;

  const C = 1.9148 * Math.sin(MRad) + 0.02 * Math.sin(2 * MRad) + 0.0003 * Math.sin(3 * MRad);
  const lambda = normalizeAngle(M + C + 180 + 102.9372);
  const lambdaRad = lambda * Math.PI / 180;

  const sinDec = Math.sin(lambdaRad) * Math.sin(23.4393 * Math.PI / 180);
  const declination = Math.asin(sinDec);

  const latRad = latitude * Math.PI / 180;
  const cosOmega = (Math.sin(-0.833 * Math.PI / 180) - Math.sin(latRad) * sinDec) /
                   (Math.cos(latRad) * Math.cos(declination));

  const clampedCosOmega = Math.max(-1, Math.min(1, cosOmega));
  const omega = Math.acos(clampedCosOmega) * 180 / Math.PI;

  const jTransit = jStar + 0.0053 * Math.sin(MRad) - 0.0069 * Math.sin(2 * lambdaRad);
  const jSunset = jTransit + omega / 360;

  const sunsetHours = ((jSunset - Math.floor(jSunset)) * 24 + timezoneOffset + 24) % 24;
  const hour = Math.floor(sunsetHours);
  const minute = Math.round((sunsetHours - hour) * 60);

  return { hour, minute };
}

/**
 * Get daily Panchang summary for display
 */
export function getDailyPanchangSummary(
  date: Date,
  latitude: number = 28.6139, // Delhi default
  longitude: number = 77.2090,
  timezoneOffset: number = 5.5
): {
  panchang: PanchangResult;
  sunrise: { hour: number; minute: number };
  sunset: { hour: number; minute: number };
} {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  // Calculate at sunrise for traditional Panchang
  const sunrise = calculateSunrise(year, month, day, latitude, longitude, timezoneOffset);
  const panchang = calculatePanchang(year, month, day, sunrise.hour, sunrise.minute, timezoneOffset);
  const sunset = calculateSunset(year, month, day, latitude, longitude, timezoneOffset);

  return {
    panchang,
    sunrise,
    sunset,
  };
}
