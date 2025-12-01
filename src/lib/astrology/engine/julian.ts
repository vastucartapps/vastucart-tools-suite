/**
 * Julian Day Number Calculations
 * Foundation for all astronomical computations
 */

import { J2000 } from '../constants';

/**
 * Convert calendar date to Julian Day Number
 * Uses the algorithm from Meeus, "Astronomical Algorithms"
 */
export function dateToJulianDay(
  year: number,
  month: number,
  day: number,
  hour: number = 0,
  minute: number = 0,
  second: number = 0
): number {
  // Convert time to decimal day
  const decimalDay = day + (hour + minute / 60 + second / 3600) / 24;

  // Adjust for January and February
  let y = year;
  let m = month;
  if (month <= 2) {
    y = year - 1;
    m = month + 12;
  }

  // Calculate A and B for Gregorian calendar
  const A = Math.floor(y / 100);
  const B = 2 - A + Math.floor(A / 4);

  // Julian Day Number
  const JD =
    Math.floor(365.25 * (y + 4716)) +
    Math.floor(30.6001 * (m + 1)) +
    decimalDay +
    B -
    1524.5;

  return JD;
}

/**
 * Convert Julian Day Number back to calendar date
 */
export function julianDayToDate(jd: number): {
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
} {
  const Z = Math.floor(jd + 0.5);
  const F = jd + 0.5 - Z;

  let A: number;
  if (Z < 2299161) {
    A = Z;
  } else {
    const alpha = Math.floor((Z - 1867216.25) / 36524.25);
    A = Z + 1 + alpha - Math.floor(alpha / 4);
  }

  const B = A + 1524;
  const C = Math.floor((B - 122.1) / 365.25);
  const D = Math.floor(365.25 * C);
  const E = Math.floor((B - D) / 30.6001);

  const day = B - D - Math.floor(30.6001 * E);
  const month = E < 14 ? E - 1 : E - 13;
  const year = month > 2 ? C - 4716 : C - 4715;

  // Extract time
  const dayFraction = F;
  const totalHours = dayFraction * 24;
  const hour = Math.floor(totalHours);
  const totalMinutes = (totalHours - hour) * 60;
  const minute = Math.floor(totalMinutes);
  const second = Math.round((totalMinutes - minute) * 60);

  return { year, month, day, hour, minute, second };
}

/**
 * Get Julian centuries from J2000.0 epoch
 * This is the standard time measure for modern astronomical calculations
 */
export function julianCenturies(jd: number): number {
  return (jd - J2000) / 36525;
}

/**
 * Convert local time to Universal Time (UTC)
 * timezone: offset in hours (e.g., +5.5 for IST)
 */
export function localToUT(
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  timezone: number
): { year: number; month: number; day: number; hour: number; minute: number } {
  let utHour = hour - timezone;
  let utDay = day;
  let utMonth = month;
  let utYear = year;

  // Handle day overflow/underflow
  if (utHour < 0) {
    utHour += 24;
    utDay -= 1;
    if (utDay < 1) {
      utMonth -= 1;
      if (utMonth < 1) {
        utMonth = 12;
        utYear -= 1;
      }
      // Get days in previous month
      utDay = getDaysInMonth(utYear, utMonth);
    }
  } else if (utHour >= 24) {
    utHour -= 24;
    utDay += 1;
    const daysInMonth = getDaysInMonth(utYear, utMonth);
    if (utDay > daysInMonth) {
      utDay = 1;
      utMonth += 1;
      if (utMonth > 12) {
        utMonth = 1;
        utYear += 1;
      }
    }
  }

  return { year: utYear, month: utMonth, day: utDay, hour: utHour, minute };
}

/**
 * Get number of days in a month
 */
function getDaysInMonth(year: number, month: number): number {
  const daysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (month === 2 && isLeapYear(year)) {
    return 29;
  }
  return daysInMonths[month - 1];
}

/**
 * Check if year is a leap year
 */
function isLeapYear(year: number): boolean {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

/**
 * Calculate Local Sidereal Time at a given longitude
 * Returns sidereal time in degrees (0-360)
 */
export function localSiderealTime(jd: number, longitude: number): number {
  const T = julianCenturies(jd);

  // Mean sidereal time at Greenwich (in degrees)
  let theta0 = 280.46061837 + 360.98564736629 * (jd - J2000) +
               0.000387933 * T * T - T * T * T / 38710000;

  // Normalize to 0-360
  theta0 = normalizeAngle(theta0);

  // Add longitude (east positive)
  let lst = theta0 + longitude;

  return normalizeAngle(lst);
}

/**
 * Normalize angle to 0-360 degrees
 */
export function normalizeAngle(angle: number): number {
  let normalized = angle % 360;
  if (normalized < 0) {
    normalized += 360;
  }
  return normalized;
}

/**
 * Convert degrees to DMS (degrees, minutes, seconds)
 */
export function degreesToDMS(degrees: number): { degrees: number; minutes: number; seconds: number; sign: number } {
  const sign = degrees >= 0 ? 1 : -1;
  const absDeg = Math.abs(degrees);
  const d = Math.floor(absDeg);
  const minFloat = (absDeg - d) * 60;
  const m = Math.floor(minFloat);
  const s = (minFloat - m) * 60;

  return { degrees: d, minutes: m, seconds: s, sign };
}

/**
 * Format degrees as degree-minute-second string
 */
export function formatDMS(degrees: number): string {
  const dms = degreesToDMS(degrees);
  const sign = dms.sign < 0 ? '-' : '';
  return `${sign}${dms.degrees}°${dms.minutes}'${Math.round(dms.seconds)}"`;
}
