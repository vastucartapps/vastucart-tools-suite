/**
 * Muhurat Scoring Engine
 * Finds and scores auspicious muhurats based on Panchang calculations
 */

import { calculatePanchang, calculateSunrise, calculateSunset, type PanchangResult } from './panchang';
import {
  getDailyInauspiciousPeriods,
  calculateAbhijitMuhurat,
  isTimeInPeriod,
  type TimePeriod,
  type DailyInauspiciousPeriods,
} from './inauspicious';
import { getMuhuratRules, type MuhuratType, type MuhuratRules } from '../data/muhurat-rules';

export interface MuhuratScore {
  total: number;      // 0-100
  breakdown: {
    tithi: number;
    nakshatra: number;
    yoga: number;
    karana: number;
    weekday: number;
    inauspiciousPeriods: number;
  };
  quality: 'excellent' | 'good' | 'average' | 'poor';
}

export interface MuhuratWindow {
  date: Date;
  startTime: { hour: number; minute: number };
  endTime: { hour: number; minute: number };
  score: MuhuratScore;
  panchang: PanchangResult;
  inauspiciousPeriods: DailyInauspiciousPeriods;
  isAbhijit: boolean;
  warnings: string[];
}

export interface MuhuratSearchResult {
  muhuratType: MuhuratType;
  muhurats: MuhuratWindow[];
  searchedDays: number;
  foundCount: number;
}

/**
 * Calculate score for a specific Panchang against muhurat rules
 */
function calculateMuhuratScore(
  panchang: PanchangResult,
  rules: MuhuratRules,
  inauspiciousPeriods: DailyInauspiciousPeriods,
  hour: number,
  minute: number,
  isAbhijitTime: boolean
): MuhuratScore {
  const breakdown = {
    tithi: 0,
    nakshatra: 0,
    yoga: 0,
    karana: 0,
    weekday: 0,
    inauspiciousPeriods: 0,
  };

  // Score Tithi
  if (rules.favorable.tithis.includes(panchang.tithi.index)) {
    breakdown.tithi = rules.weights.tithi;
  } else if (rules.unfavorable.tithis.includes(panchang.tithi.index)) {
    breakdown.tithi = 0;
  } else {
    breakdown.tithi = rules.weights.tithi * 0.5; // Neutral
  }

  // Score Nakshatra
  if (rules.favorable.nakshatras.includes(panchang.nakshatra.index)) {
    breakdown.nakshatra = rules.weights.nakshatra;
  } else if (rules.unfavorable.nakshatras.includes(panchang.nakshatra.index)) {
    breakdown.nakshatra = 0;
  } else {
    breakdown.nakshatra = rules.weights.nakshatra * 0.5;
  }

  // Score Yoga
  if (rules.favorable.yogas.includes(panchang.yoga.index)) {
    breakdown.yoga = rules.weights.yoga;
  } else if (rules.unfavorable.yogas.includes(panchang.yoga.index)) {
    breakdown.yoga = 0;
  } else {
    breakdown.yoga = rules.weights.yoga * 0.5;
  }

  // Score Karana
  if (rules.favorable.karanas.includes(panchang.karana.index)) {
    breakdown.karana = rules.weights.karana;
  } else if (rules.unfavorable.karanas.includes(panchang.karana.index)) {
    breakdown.karana = 0;
  } else {
    breakdown.karana = rules.weights.karana * 0.5;
  }

  // Score Weekday
  if (rules.favorable.weekdays.includes(panchang.weekday.index)) {
    breakdown.weekday = rules.weights.weekday;
  } else if (rules.unfavorable.weekdays.includes(panchang.weekday.index)) {
    breakdown.weekday = 0;
  } else {
    breakdown.weekday = rules.weights.weekday * 0.5;
  }

  // Score Inauspicious Periods
  let inInauspicious = false;

  if (rules.avoidRaahuKaal && isTimeInPeriod(hour, minute, inauspiciousPeriods.raahuKaal)) {
    inInauspicious = true;
  }
  if (rules.avoidYamaganda && isTimeInPeriod(hour, minute, inauspiciousPeriods.yamagandaKaal)) {
    inInauspicious = true;
  }

  // Abhijit muhurat overrides inauspicious periods
  if (isAbhijitTime && !rules.avoidRaahuKaal) {
    inInauspicious = false;
  }

  breakdown.inauspiciousPeriods = inInauspicious ? 0 : rules.weights.inauspiciousPeriods;

  // Calculate total
  const total = Math.round(
    breakdown.tithi +
    breakdown.nakshatra +
    breakdown.yoga +
    breakdown.karana +
    breakdown.weekday +
    breakdown.inauspiciousPeriods
  );

  // Determine quality
  let quality: MuhuratScore['quality'];
  if (total >= 80) {
    quality = 'excellent';
  } else if (total >= 60) {
    quality = 'good';
  } else if (total >= 40) {
    quality = 'average';
  } else {
    quality = 'poor';
  }

  return { total, breakdown, quality };
}

/**
 * Get warnings for a muhurat window
 */
function getWarnings(
  panchang: PanchangResult,
  rules: MuhuratRules,
  inauspiciousPeriods: DailyInauspiciousPeriods,
  hour: number,
  minute: number,
  locale: 'en' | 'hi' = 'en'
): string[] {
  const warnings: string[] = [];

  // Check for unfavorable elements
  if (rules.unfavorable.tithis.includes(panchang.tithi.index)) {
    warnings.push(locale === 'en'
      ? `Tithi "${panchang.tithi.info.name.en}" is not favorable for this muhurat`
      : `तिथि "${panchang.tithi.info.name.hi}" इस मुहूर्त के लिए अनुकूल नहीं है`
    );
  }

  if (rules.unfavorable.nakshatras.includes(panchang.nakshatra.index)) {
    warnings.push(locale === 'en'
      ? `Nakshatra "${panchang.nakshatra.name.en}" is not favorable`
      : `नक्षत्र "${panchang.nakshatra.name.hi}" अनुकूल नहीं है`
    );
  }

  if (rules.unfavorable.weekdays.includes(panchang.weekday.index)) {
    warnings.push(locale === 'en'
      ? `${panchang.weekday.info.name.en} is not ideal for this activity`
      : `${panchang.weekday.info.name.hi} इस गतिविधि के लिए आदर्श नहीं है`
    );
  }

  // Check inauspicious periods
  if (rules.avoidRaahuKaal && isTimeInPeriod(hour, minute, inauspiciousPeriods.raahuKaal)) {
    warnings.push(locale === 'en' ? 'During Raahu Kaal' : 'राहु काल में');
  }

  if (rules.avoidYamaganda && isTimeInPeriod(hour, minute, inauspiciousPeriods.yamagandaKaal)) {
    warnings.push(locale === 'en' ? 'During Yamaganda Kaal' : 'यमगंड काल में');
  }

  // Vishti Karana warning
  if (panchang.karana.index === 6) {
    warnings.push(locale === 'en' ? 'Vishti (Bhadra) Karana active' : 'विष्टि (भद्रा) करण सक्रिय');
  }

  return warnings;
}

/**
 * Find auspicious morning muhurat window for a day
 */
function findMorningMuhurat(
  year: number,
  month: number,
  day: number,
  rules: MuhuratRules,
  latitude: number,
  longitude: number,
  timezoneOffset: number
): MuhuratWindow | null {
  const sunrise = calculateSunrise(year, month, day, latitude, longitude, timezoneOffset);
  const inauspiciousPeriods = getDailyInauspiciousPeriods(year, month, day, latitude, longitude, timezoneOffset);

  // Morning window: 1 hour after sunrise to 12 PM
  const startHour = sunrise.hour + 1;
  const endHour = 12;

  // Calculate Panchang at mid-morning
  const midHour = Math.floor((startHour + endHour) / 2);
  const panchang = calculatePanchang(year, month, day, midHour, 0, timezoneOffset);

  const isAbhijit = false; // Morning is before Abhijit
  const score = calculateMuhuratScore(panchang, rules, inauspiciousPeriods, midHour, 0, isAbhijit);

  // Skip if poor quality
  if (score.quality === 'poor') {
    return null;
  }

  const warnings = getWarnings(panchang, rules, inauspiciousPeriods, midHour, 0);

  return {
    date: new Date(year, month - 1, day),
    startTime: { hour: startHour, minute: 0 },
    endTime: { hour: endHour, minute: 0 },
    score,
    panchang,
    inauspiciousPeriods,
    isAbhijit,
    warnings,
  };
}

/**
 * Find Abhijit muhurat window for a day
 */
function findAbhijitMuhurat(
  year: number,
  month: number,
  day: number,
  rules: MuhuratRules,
  latitude: number,
  longitude: number,
  timezoneOffset: number
): MuhuratWindow | null {
  const abhijit = calculateAbhijitMuhurat(year, month, day, latitude, longitude, timezoneOffset);
  if (!abhijit) return null;

  const inauspiciousPeriods = getDailyInauspiciousPeriods(year, month, day, latitude, longitude, timezoneOffset);
  const midHour = Math.floor((abhijit.start.hour + abhijit.end.hour) / 2);
  const midMinute = Math.floor((abhijit.start.minute + abhijit.end.minute) / 2);

  const panchang = calculatePanchang(year, month, day, midHour, midMinute, timezoneOffset);
  const score = calculateMuhuratScore(panchang, rules, inauspiciousPeriods, midHour, midMinute, true);

  // Abhijit is always at least 'good' quality
  if (score.total < 60) {
    score.total = 60;
    score.quality = 'good';
  }

  const warnings = getWarnings(panchang, rules, inauspiciousPeriods, midHour, midMinute);

  return {
    date: new Date(year, month - 1, day),
    startTime: abhijit.start,
    endTime: abhijit.end,
    score,
    panchang,
    inauspiciousPeriods,
    isAbhijit: true,
    warnings,
  };
}

/**
 * Find afternoon muhurat window for a day (after Abhijit, before sunset)
 */
function findAfternoonMuhurat(
  year: number,
  month: number,
  day: number,
  rules: MuhuratRules,
  latitude: number,
  longitude: number,
  timezoneOffset: number
): MuhuratWindow | null {
  const abhijit = calculateAbhijitMuhurat(year, month, day, latitude, longitude, timezoneOffset);
  const sunset = calculateSunset(year, month, day, latitude, longitude, timezoneOffset);
  const inauspiciousPeriods = getDailyInauspiciousPeriods(year, month, day, latitude, longitude, timezoneOffset);

  // Afternoon window: after Abhijit to 1 hour before sunset
  const startHour = abhijit ? abhijit.end.hour + 1 : 14;
  const endHour = sunset.hour - 1;

  if (endHour <= startHour) return null;

  const midHour = Math.floor((startHour + endHour) / 2);
  const panchang = calculatePanchang(year, month, day, midHour, 0, timezoneOffset);

  const score = calculateMuhuratScore(panchang, rules, inauspiciousPeriods, midHour, 0, false);

  if (score.quality === 'poor') {
    return null;
  }

  const warnings = getWarnings(panchang, rules, inauspiciousPeriods, midHour, 0);

  return {
    date: new Date(year, month - 1, day),
    startTime: { hour: startHour, minute: 0 },
    endTime: { hour: endHour, minute: 0 },
    score,
    panchang,
    inauspiciousPeriods,
    isAbhijit: false,
    warnings,
  };
}

/**
 * Find all muhurats for a given date range and muhurat type
 */
export function findMuhurats(
  muhuratType: MuhuratType,
  startDate: Date,
  days: number = 30,
  latitude: number = 28.6139,  // Delhi default
  longitude: number = 77.2090,
  timezoneOffset: number = 5.5,
  minScore: number = 40
): MuhuratSearchResult {
  const rules = getMuhuratRules(muhuratType);
  const muhurats: MuhuratWindow[] = [];

  for (let i = 0; i < days; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate();

    // For Abhijit muhurat type, only find Abhijit windows
    if (muhuratType === 'abhijit') {
      const abhijit = findAbhijitMuhurat(year, month, day, rules, latitude, longitude, timezoneOffset);
      if (abhijit && abhijit.score.total >= minScore) {
        muhurats.push(abhijit);
      }
      continue;
    }

    // For other types, find morning, abhijit, and afternoon windows
    if (rules.preferMorning) {
      const morning = findMorningMuhurat(year, month, day, rules, latitude, longitude, timezoneOffset);
      if (morning && morning.score.total >= minScore) {
        muhurats.push(morning);
      }
    }

    // Always check Abhijit (highly auspicious)
    const abhijit = findAbhijitMuhurat(year, month, day, rules, latitude, longitude, timezoneOffset);
    if (abhijit && abhijit.score.total >= minScore) {
      muhurats.push(abhijit);
    }

    if (rules.preferAfternoon) {
      const afternoon = findAfternoonMuhurat(year, month, day, rules, latitude, longitude, timezoneOffset);
      if (afternoon && afternoon.score.total >= minScore) {
        muhurats.push(afternoon);
      }
    }
  }

  // Sort by score (highest first), then by date
  muhurats.sort((a, b) => {
    if (b.score.total !== a.score.total) {
      return b.score.total - a.score.total;
    }
    return a.date.getTime() - b.date.getTime();
  });

  return {
    muhuratType,
    muhurats,
    searchedDays: days,
    foundCount: muhurats.length,
  };
}

/**
 * Get muhurats for a specific date
 */
export function getMuhuratsForDate(
  date: Date,
  muhuratType: MuhuratType,
  latitude: number = 28.6139,
  longitude: number = 77.2090,
  timezoneOffset: number = 5.5
): MuhuratWindow[] {
  const result = findMuhurats(muhuratType, date, 1, latitude, longitude, timezoneOffset, 0);
  return result.muhurats;
}

/**
 * Format time for display
 */
export function formatMuhuratTime(time: { hour: number; minute: number }, use12Hour: boolean = true): string {
  if (use12Hour) {
    const period = time.hour >= 12 ? 'PM' : 'AM';
    const hour12 = time.hour > 12 ? time.hour - 12 : time.hour === 0 ? 12 : time.hour;
    return `${hour12}:${time.minute.toString().padStart(2, '0')} ${period}`;
  }
  return `${time.hour.toString().padStart(2, '0')}:${time.minute.toString().padStart(2, '0')}`;
}

/**
 * Format muhurat window for display
 */
export function formatMuhuratWindow(muhurat: MuhuratWindow, use12Hour: boolean = true): string {
  return `${formatMuhuratTime(muhurat.startTime, use12Hour)} - ${formatMuhuratTime(muhurat.endTime, use12Hour)}`;
}

/**
 * Get quality label with color class
 */
export function getQualityInfo(quality: MuhuratScore['quality'], locale: 'en' | 'hi' = 'en'): {
  label: string;
  colorClass: string;
  bgClass: string;
} {
  const labels = {
    excellent: { en: 'Excellent', hi: 'उत्तम' },
    good: { en: 'Good', hi: 'अच्छा' },
    average: { en: 'Average', hi: 'सामान्य' },
    poor: { en: 'Poor', hi: 'कमज़ोर' },
  };

  const colors = {
    excellent: { color: 'text-green-700', bg: 'bg-green-100' },
    good: { color: 'text-teal-700', bg: 'bg-teal-100' },
    average: { color: 'text-amber-700', bg: 'bg-amber-100' },
    poor: { color: 'text-red-700', bg: 'bg-red-100' },
  };

  return {
    label: labels[quality][locale],
    colorClass: colors[quality].color,
    bgClass: colors[quality].bg,
  };
}
