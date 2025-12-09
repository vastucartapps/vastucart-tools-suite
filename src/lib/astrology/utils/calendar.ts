/**
 * Hindu Calendar Utilities
 * Vikram Samvat, Panchak, and related calculations
 */

/**
 * Calculate Vikram Samvat year from Gregorian date
 * Vikram Samvat starts ~57 years before Gregorian calendar
 * New year begins on Chaitra Shukla Pratipada (March/April)
 *
 * @param date - Gregorian date
 * @returns Vikram Samvat year
 */
export function getVikramSamvat(date: Date): number {
  const year = date.getFullYear();
  const month = date.getMonth(); // 0-11

  // Vikram Samvat new year is around March-April (Chaitra)
  // Before March/April, we're still in the previous Samvat year
  // Simplified: Before April (month < 3), subtract 1 from the calculation
  if (month < 3) {
    return year + 56; // Jan-Mar: previous Samvat
  }
  return year + 57; // Apr-Dec: current Samvat
}

/**
 * Get Vikram Samvat year with bilingual display
 */
export function getVikramSamvatDisplay(date: Date): { year: number; display: { en: string; hi: string } } {
  const year = getVikramSamvat(date);
  return {
    year,
    display: {
      en: `${year}`,
      hi: `${year}`,
    },
  };
}

/**
 * Check if Panchak is active based on Nakshatra
 * Panchak (पंचक) occurs when Moon is in the last 5 Nakshatras:
 * - Dhanishtha (23)
 * - Shatabhisha (24)
 * - Purva Bhadrapada (25)
 * - Uttara Bhadrapada (26)
 * - Revati (27)
 *
 * Also known as Panchak Nakshatra - considered inauspicious for:
 * - Travel, construction start, bed making, funeral rites, buying items in 5s
 *
 * @param nakshatraIndex - 0-26 (27 Nakshatras, 0=Ashwini)
 * @returns Whether Panchak is active
 */
export function isPanchakActive(nakshatraIndex: number): boolean {
  // Panchak Nakshatras: indices 22-26 (Dhanishtha to Revati)
  // 0=Ashwini, 22=Dhanishtha, 23=Shatabhisha, 24=Purva Bhadra, 25=Uttara Bhadra, 26=Revati
  return nakshatraIndex >= 22 && nakshatraIndex <= 26;
}

/**
 * Get Panchak status with details
 */
export function getPanchakStatus(nakshatraIndex: number): {
  isActive: boolean;
  nakshatra?: { en: string; hi: string };
  warnings?: { en: string[]; hi: string[] };
} {
  const panchakNakshatras: Record<number, { en: string; hi: string }> = {
    22: { en: 'Dhanishtha', hi: 'धनिष्ठा' },
    23: { en: 'Shatabhisha', hi: 'शतभिषा' },
    24: { en: 'Purva Bhadrapada', hi: 'पूर्व भाद्रपद' },
    25: { en: 'Uttara Bhadrapada', hi: 'उत्तर भाद्रपद' },
    26: { en: 'Revati', hi: 'रेवती' },
  };

  const isActive = isPanchakActive(nakshatraIndex);

  if (!isActive) {
    return { isActive: false };
  }

  return {
    isActive: true,
    nakshatra: panchakNakshatras[nakshatraIndex],
    warnings: {
      en: [
        'Avoid starting new construction',
        'Avoid long-distance travel',
        'Avoid making new beds/mattresses',
        'Avoid buying items in groups of 5',
        'Funeral rites need special care',
      ],
      hi: [
        'नया निर्माण शुरू न करें',
        'लंबी यात्रा से बचें',
        'नया बिस्तर/गद्दा न बनाएं',
        '5 की संख्या में सामान न खरीदें',
        'अंतिम संस्कार में विशेष सावधानी',
      ],
    },
  };
}

/**
 * Format time as HH:MM (24-hour or 12-hour)
 */
export function formatTime(hours: number, minutes: number, use24Hour: boolean = false): string {
  const h = Math.floor(hours);
  const m = Math.round(minutes);

  if (use24Hour) {
    return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}`;
  }

  const period = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 || 12;
  return `${hour12}:${m.toString().padStart(2, '0')} ${period}`;
}

/**
 * Format time period (start - end)
 */
export function formatTimePeriodDisplay(
  startHour: number,
  startMin: number,
  endHour: number,
  endMin: number,
  use24Hour: boolean = false
): string {
  return `${formatTime(startHour, startMin, use24Hour)} - ${formatTime(endHour, endMin, use24Hour)}`;
}
