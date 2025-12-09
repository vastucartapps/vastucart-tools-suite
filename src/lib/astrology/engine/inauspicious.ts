/**
 * Inauspicious Periods Calculator
 * Calculates Raahu Kaal, Yamaganda Kaal, Gulika Kaal, and Abhijit Muhurat
 *
 * These are time periods that should be avoided (or sought, in case of Abhijit)
 * for starting new activities.
 */

import { calculateSunrise, calculateSunset } from './panchang';
import { WEEKDAYS } from '../data/panchang-data';

export interface TimePeriod {
  start: { hour: number; minute: number };
  end: { hour: number; minute: number };
}

/**
 * Convert hours/minutes to total minutes for easier calculation
 */
function toMinutes(hour: number, minute: number): number {
  return hour * 60 + minute;
}

/**
 * Convert total minutes back to hours and minutes
 */
function fromMinutes(totalMinutes: number): { hour: number; minute: number } {
  const hour = Math.floor(totalMinutes / 60) % 24;
  const minute = Math.round(totalMinutes % 60);
  return { hour, minute };
}

/**
 * Calculate day duration in minutes (sunrise to sunset)
 */
function getDayDuration(
  sunrise: { hour: number; minute: number },
  sunset: { hour: number; minute: number }
): number {
  return toMinutes(sunset.hour, sunset.minute) - toMinutes(sunrise.hour, sunrise.minute);
}

/**
 * Calculate the nth eighth of the day
 * Each day (sunrise to sunset) is divided into 8 parts
 * Each part is approximately 1.5 hours (varies by season)
 */
function getNthEighth(
  sunrise: { hour: number; minute: number },
  sunset: { hour: number; minute: number },
  n: number // 1-8
): TimePeriod {
  const sunriseMinutes = toMinutes(sunrise.hour, sunrise.minute);
  const dayDuration = getDayDuration(sunrise, sunset);
  const eighthDuration = dayDuration / 8;

  const startMinutes = sunriseMinutes + (n - 1) * eighthDuration;
  const endMinutes = sunriseMinutes + n * eighthDuration;

  return {
    start: fromMinutes(startMinutes),
    end: fromMinutes(endMinutes),
  };
}

/**
 * Raahu Kaal (राहु काल)
 * Most inauspicious period - avoid starting new ventures
 *
 * The period varies by weekday:
 * Sunday    - 8th period (4:30 PM - 6:00 PM approx)
 * Monday    - 2nd period (7:30 AM - 9:00 AM approx)
 * Tuesday   - 7th period (3:00 PM - 4:30 PM approx)
 * Wednesday - 5th period (12:00 PM - 1:30 PM approx)
 * Thursday  - 6th period (1:30 PM - 3:00 PM approx)
 * Friday    - 4th period (10:30 AM - 12:00 PM approx)
 * Saturday  - 3rd period (9:00 AM - 10:30 AM approx)
 *
 * Mnemonic: "Mother Saw Father Wearing The Turban on Saturday"
 * (7:30-9, 9-10:30, 10:30-12, 12-1:30, 1:30-3, 3-4:30, 4:30-6 for Sun-Sat)
 */
const RAAHU_KAAL_PERIODS: Record<number, number> = {
  0: 8, // Sunday - 8th period
  1: 2, // Monday - 2nd period
  2: 7, // Tuesday - 7th period
  3: 5, // Wednesday - 5th period
  4: 6, // Thursday - 6th period
  5: 4, // Friday - 4th period
  6: 3, // Saturday - 3rd period
};

/**
 * Calculate Raahu Kaal for a given date and location
 */
export function calculateRaahuKaal(
  year: number,
  month: number,
  day: number,
  latitude: number,
  longitude: number,
  timezoneOffset: number = 5.5
): TimePeriod {
  const sunrise = calculateSunrise(year, month, day, latitude, longitude, timezoneOffset);
  const sunset = calculateSunset(year, month, day, latitude, longitude, timezoneOffset);

  // Get weekday (0 = Sunday)
  const date = new Date(year, month - 1, day);
  const weekday = date.getDay();

  const periodNumber = RAAHU_KAAL_PERIODS[weekday];
  return getNthEighth(sunrise, sunset, periodNumber);
}

/**
 * Yamaganda Kaal (यमगंड काल)
 * Another inauspicious period associated with Yama (death)
 *
 * Period assignments by weekday:
 * Sunday    - 5th period
 * Monday    - 4th period
 * Tuesday   - 3rd period
 * Wednesday - 2nd period
 * Thursday  - 1st period
 * Friday    - 7th period
 * Saturday  - 6th period
 */
const YAMAGANDA_PERIODS: Record<number, number> = {
  0: 5, // Sunday
  1: 4, // Monday
  2: 3, // Tuesday
  3: 2, // Wednesday
  4: 1, // Thursday
  5: 7, // Friday
  6: 6, // Saturday
};

/**
 * Calculate Yamaganda Kaal for a given date and location
 */
export function calculateYamagandaKaal(
  year: number,
  month: number,
  day: number,
  latitude: number,
  longitude: number,
  timezoneOffset: number = 5.5
): TimePeriod {
  const sunrise = calculateSunrise(year, month, day, latitude, longitude, timezoneOffset);
  const sunset = calculateSunset(year, month, day, latitude, longitude, timezoneOffset);

  const date = new Date(year, month - 1, day);
  const weekday = date.getDay();

  const periodNumber = YAMAGANDA_PERIODS[weekday];
  return getNthEighth(sunrise, sunset, periodNumber);
}

/**
 * Gulika Kaal (गुलिक काल)
 * Inauspicious period associated with Saturn's son Mandi/Gulika
 *
 * Period assignments by weekday:
 * Sunday    - 7th period
 * Monday    - 6th period
 * Tuesday   - 5th period
 * Wednesday - 4th period
 * Thursday  - 3rd period
 * Friday    - 2nd period
 * Saturday  - 1st period
 */
const GULIKA_PERIODS: Record<number, number> = {
  0: 7, // Sunday
  1: 6, // Monday
  2: 5, // Tuesday
  3: 4, // Wednesday
  4: 3, // Thursday
  5: 2, // Friday
  6: 1, // Saturday
};

/**
 * Calculate Gulika Kaal for a given date and location
 */
export function calculateGulikaKaal(
  year: number,
  month: number,
  day: number,
  latitude: number,
  longitude: number,
  timezoneOffset: number = 5.5
): TimePeriod {
  const sunrise = calculateSunrise(year, month, day, latitude, longitude, timezoneOffset);
  const sunset = calculateSunset(year, month, day, latitude, longitude, timezoneOffset);

  const date = new Date(year, month - 1, day);
  const weekday = date.getDay();

  const periodNumber = GULIKA_PERIODS[weekday];
  return getNthEighth(sunrise, sunset, periodNumber);
}

/**
 * Abhijit Muhurat (अभिजित मुहूर्त)
 * The most auspicious muhurat - 48 minutes around solar noon
 * 24 minutes before and 24 minutes after local apparent noon
 *
 * This is the only universally auspicious time, overriding most doshas
 * Ideal for starting important ventures
 *
 * Note: Some traditions say Abhijit is not valid on Wednesday
 */
export function calculateAbhijitMuhurat(
  year: number,
  month: number,
  day: number,
  latitude: number,
  longitude: number,
  timezoneOffset: number = 5.5
): TimePeriod | null {
  const sunrise = calculateSunrise(year, month, day, latitude, longitude, timezoneOffset);
  const sunset = calculateSunset(year, month, day, latitude, longitude, timezoneOffset);

  // Solar noon is midpoint between sunrise and sunset
  const sunriseMinutes = toMinutes(sunrise.hour, sunrise.minute);
  const sunsetMinutes = toMinutes(sunset.hour, sunset.minute);
  const noonMinutes = (sunriseMinutes + sunsetMinutes) / 2;

  // Abhijit is 24 minutes before and after noon (48 minutes total)
  const startMinutes = noonMinutes - 24;
  const endMinutes = noonMinutes + 24;

  // Check if Wednesday (some traditions say Abhijit not valid)
  const date = new Date(year, month - 1, day);
  const isWednesday = date.getDay() === 3;

  // Return null for Wednesday if following strict tradition
  // Uncomment the following to enforce:
  // if (isWednesday) return null;

  return {
    start: fromMinutes(startMinutes),
    end: fromMinutes(endMinutes),
  };
}

/**
 * Brahma Muhurat (ब्रह्म मुहूर्त)
 * Auspicious early morning period for spiritual practices
 * 96 minutes (2 muhurtas) before sunrise
 * Each muhurta = 48 minutes
 */
export function calculateBrahmaMuhurat(
  year: number,
  month: number,
  day: number,
  latitude: number,
  longitude: number,
  timezoneOffset: number = 5.5
): TimePeriod {
  const sunrise = calculateSunrise(year, month, day, latitude, longitude, timezoneOffset);
  const sunriseMinutes = toMinutes(sunrise.hour, sunrise.minute);

  // 96 minutes (2 muhurtas) before sunrise
  const startMinutes = sunriseMinutes - 96;
  const endMinutes = sunriseMinutes - 48;

  return {
    start: fromMinutes(startMinutes),
    end: fromMinutes(endMinutes),
  };
}

/**
 * Check if a given time falls within a time period
 */
export function isTimeInPeriod(
  hour: number,
  minute: number,
  period: TimePeriod
): boolean {
  const timeMinutes = toMinutes(hour, minute);
  const startMinutes = toMinutes(period.start.hour, period.start.minute);
  const endMinutes = toMinutes(period.end.hour, period.end.minute);

  return timeMinutes >= startMinutes && timeMinutes < endMinutes;
}

/**
 * Format time period as string
 */
export function formatTimePeriod(period: TimePeriod, use12Hour: boolean = true): string {
  const formatTime = (h: number, m: number) => {
    if (use12Hour) {
      const period12 = h >= 12 ? 'PM' : 'AM';
      const hour12 = h > 12 ? h - 12 : h === 0 ? 12 : h;
      return `${hour12}:${m.toString().padStart(2, '0')} ${period12}`;
    }
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  };

  return `${formatTime(period.start.hour, period.start.minute)} - ${formatTime(period.end.hour, period.end.minute)}`;
}

/**
 * Get all inauspicious periods for a day
 */
export interface DailyInauspiciousPeriods {
  raahuKaal: TimePeriod;
  yamagandaKaal: TimePeriod;
  gulikaKaal: TimePeriod;
  abhijitMuhurat: TimePeriod | null;
  brahmaMuhurat: TimePeriod;
}

export function getDailyInauspiciousPeriods(
  year: number,
  month: number,
  day: number,
  latitude: number,
  longitude: number,
  timezoneOffset: number = 5.5
): DailyInauspiciousPeriods {
  return {
    raahuKaal: calculateRaahuKaal(year, month, day, latitude, longitude, timezoneOffset),
    yamagandaKaal: calculateYamagandaKaal(year, month, day, latitude, longitude, timezoneOffset),
    gulikaKaal: calculateGulikaKaal(year, month, day, latitude, longitude, timezoneOffset),
    abhijitMuhurat: calculateAbhijitMuhurat(year, month, day, latitude, longitude, timezoneOffset),
    brahmaMuhurat: calculateBrahmaMuhurat(year, month, day, latitude, longitude, timezoneOffset),
  };
}

/**
 * Check if a time has any inauspicious period active
 */
export function hasInauspiciousPeriodActive(
  hour: number,
  minute: number,
  periods: DailyInauspiciousPeriods
): {
  isInauspicious: boolean;
  activePeriods: string[];
} {
  const activePeriods: string[] = [];

  if (isTimeInPeriod(hour, minute, periods.raahuKaal)) {
    activePeriods.push('raahuKaal');
  }
  if (isTimeInPeriod(hour, minute, periods.yamagandaKaal)) {
    activePeriods.push('yamagandaKaal');
  }
  if (isTimeInPeriod(hour, minute, periods.gulikaKaal)) {
    activePeriods.push('gulikaKaal');
  }

  return {
    isInauspicious: activePeriods.length > 0,
    activePeriods,
  };
}

/**
 * Check if time is during Abhijit Muhurat
 */
export function isDuringAbhijit(
  hour: number,
  minute: number,
  abhijit: TimePeriod | null
): boolean {
  if (!abhijit) return false;
  return isTimeInPeriod(hour, minute, abhijit);
}
