/**
 * Muhurat Rules Database
 * Defines favorable and unfavorable Panchang elements for each muhurat type
 *
 * Traditional Vedic sources for muhurat:
 * - Muhurat Chintamani
 * - Brihat Samhita
 * - Dharmasindhu
 */

export type MuhuratType =
  | 'business-start'
  | 'abhijit'
  | 'job-joining'
  | 'grah-pravesh'
  | 'grih-arambh'
  | 'partnership'
  | 'vehicle-purchase'
  | 'education-start';

export interface MuhuratRules {
  id: MuhuratType;
  name: { en: string; hi: string };
  description: { en: string; hi: string };
  icon: string;

  // Favorable elements (boost score)
  favorable: {
    tithis: number[];        // Tithi indices (0-29)
    nakshatras: number[];    // Nakshatra indices (0-26)
    yogas: number[];         // Yoga indices (0-26)
    karanas: number[];       // Karana indices (0-10)
    weekdays: number[];      // Weekday indices (0=Sun, 6=Sat)
  };

  // Unfavorable elements (reduce score)
  unfavorable: {
    tithis: number[];
    nakshatras: number[];
    yogas: number[];
    karanas: number[];
    weekdays: number[];
  };

  // Special conditions
  requiresAbhijit: boolean;          // Must be during Abhijit muhurat
  avoidRaahuKaal: boolean;           // Must avoid Raahu Kaal
  avoidYamaganda: boolean;           // Must avoid Yamaganda Kaal
  preferMorning: boolean;            // Morning hours preferred
  preferAfternoon: boolean;          // Afternoon hours preferred

  // Scoring weights (how much each factor affects the total)
  weights: {
    tithi: number;
    nakshatra: number;
    yoga: number;
    karana: number;
    weekday: number;
    inauspiciousPeriods: number;
  };
}

// Commonly favorable Tithis for most activities
// Shukla Paksha (waxing moon): Pratipada to Purnima
// Avoid: Amavasya (30), Rikta Tithis (4, 9, 14, 19, 24, 29)
const GENERAL_GOOD_TITHIS = [1, 2, 3, 5, 6, 7, 10, 11, 12, 13, 15, 16, 17, 18, 20, 21, 22, 23, 25, 26, 27, 28];

// Rikta Tithis - considered inauspicious
const RIKTA_TITHIS = [4, 9, 14, 19, 24, 29];

// Commonly favorable Nakshatras (Fixed/Sthira and Movable/Chara)
// Sthira (Fixed): Rohini (3), U.Phalguni (11), U.Ashadha (20), U.Bhadrapada (25)
// Chara (Movable): Ashwini (0), Punarvasu (6), Hasta (12), Swati (14), Anuradha (16), Mrigashira (4), Shravana (21)
const FIXED_NAKSHATRAS = [3, 11, 20, 25];
const MOVABLE_NAKSHATRAS = [0, 4, 6, 12, 14, 16, 21];

// Ugra (Fierce) Nakshatras - avoid for peaceful activities
const UGRA_NAKSHATRAS = [5, 8, 13, 17, 18, 23, 24]; // Ardra, Ashlesha, Chitra, Jyeshtha, Mula, Shatabhisha, Purva Bhadrapada

// Good Yogas
// Siddha, Amrita, Shubha, Shukla, Brahma are highly auspicious
const AUSPICIOUS_YOGAS = [6, 16, 20, 24]; // Saubhagya, Shubha, Siddhi, Shiva
const INAUSPICIOUS_YOGAS = [8, 17, 26]; // Vishkumbha-like patterns

// Good Karanas (avoid Vishti/Bhadra)
const GOOD_KARANAS = [0, 1, 2, 3, 4, 5]; // Bava to Vanija
const VISHTI_KARANA = 6; // Avoid for all good works

export const MUHURAT_RULES: MuhuratRules[] = [
  // 1. Business Start Muhurat (व्यापार शुभारंभ)
  {
    id: 'business-start',
    name: { en: 'Business Start', hi: 'व्यापार शुभारंभ' },
    description: {
      en: 'Auspicious time to start a new business or venture',
      hi: 'नया व्यापार या उद्यम शुरू करने का शुभ समय'
    },
    icon: '💼',
    favorable: {
      tithis: [2, 3, 5, 7, 10, 11, 12, 13, 15], // Shukla paksha preferred
      nakshatras: [0, 3, 6, 7, 12, 14, 16, 21, 25], // Ashwini, Rohini, Punarvasu, Pushya, Hasta, Swati, Anuradha, Shravana, U.Bhadrapada
      yogas: [0, 1, 2, 6, 16, 20, 24], // Vishkumbha avoided, good yogas
      karanas: GOOD_KARANAS,
      weekdays: [1, 3, 4, 5], // Monday, Wednesday, Thursday, Friday
    },
    unfavorable: {
      tithis: [4, 9, 14, 19, 24, 29, 30], // Rikta tithis and Amavasya
      nakshatras: UGRA_NAKSHATRAS,
      yogas: INAUSPICIOUS_YOGAS,
      karanas: [VISHTI_KARANA],
      weekdays: [2, 6], // Tuesday, Saturday
    },
    requiresAbhijit: false,
    avoidRaahuKaal: true,
    avoidYamaganda: true,
    preferMorning: true,
    preferAfternoon: false,
    weights: {
      tithi: 20,
      nakshatra: 25,
      yoga: 15,
      karana: 10,
      weekday: 15,
      inauspiciousPeriods: 15,
    },
  },

  // 2. Abhijit Muhurat (अभिजीत मुहूर्त)
  {
    id: 'abhijit',
    name: { en: 'Abhijit Muhurat', hi: 'अभिजीत मुहूर्त' },
    description: {
      en: 'The most auspicious 48-minute window around solar noon',
      hi: 'सूर्य के मध्याह्न के आसपास सबसे शुभ 48 मिनट की अवधि'
    },
    icon: '☀️',
    favorable: {
      tithis: GENERAL_GOOD_TITHIS,
      nakshatras: Array.from({ length: 27 }, (_, i) => i), // All nakshatras OK during Abhijit
      yogas: Array.from({ length: 27 }, (_, i) => i),
      karanas: Array.from({ length: 11 }, (_, i) => i),
      weekdays: [0, 1, 2, 4, 5, 6], // All except Wednesday (some traditions)
    },
    unfavorable: {
      tithis: [30], // Only Amavasya strictly avoided
      nakshatras: [],
      yogas: [],
      karanas: [],
      weekdays: [3], // Wednesday debated
    },
    requiresAbhijit: true,
    avoidRaahuKaal: false, // Abhijit overrides Raahu Kaal
    avoidYamaganda: false,
    preferMorning: false,
    preferAfternoon: true, // Noon
    weights: {
      tithi: 10,
      nakshatra: 10,
      yoga: 10,
      karana: 5,
      weekday: 10,
      inauspiciousPeriods: 5, // Less weight since Abhijit is powerful
    },
  },

  // 3. Job Joining Muhurat (नौकरी शुभारंभ)
  {
    id: 'job-joining',
    name: { en: 'Job Joining', hi: 'नौकरी शुभारंभ' },
    description: {
      en: 'Auspicious time to join a new job or start employment',
      hi: 'नई नौकरी शुरू करने का शुभ समय'
    },
    icon: '👔',
    favorable: {
      tithis: [2, 3, 5, 6, 7, 10, 11, 12, 13, 15], // Growth tithis
      nakshatras: [0, 3, 6, 7, 11, 12, 14, 16, 20, 21], // Good for career
      yogas: [0, 1, 2, 6, 16, 20],
      karanas: GOOD_KARANAS,
      weekdays: [1, 3, 4, 5], // Monday, Wednesday, Thursday, Friday
    },
    unfavorable: {
      tithis: RIKTA_TITHIS.concat([30]),
      nakshatras: [5, 8, 17, 18], // Ardra, Ashlesha, Jyeshtha, Mula
      yogas: INAUSPICIOUS_YOGAS,
      karanas: [VISHTI_KARANA],
      weekdays: [0, 2, 6], // Sunday, Tuesday, Saturday
    },
    requiresAbhijit: false,
    avoidRaahuKaal: true,
    avoidYamaganda: true,
    preferMorning: true,
    preferAfternoon: false,
    weights: {
      tithi: 20,
      nakshatra: 20,
      yoga: 15,
      karana: 10,
      weekday: 20,
      inauspiciousPeriods: 15,
    },
  },

  // 4. Grah Pravesh - Home Inauguration (गृह प्रवेश)
  {
    id: 'grah-pravesh',
    name: { en: 'Grah Pravesh', hi: 'गृह प्रवेश' },
    description: {
      en: 'Auspicious time to enter a new home for the first time',
      hi: 'नए घर में पहली बार प्रवेश करने का शुभ समय'
    },
    icon: '🏠',
    favorable: {
      tithis: [2, 3, 5, 7, 10, 11, 12, 13, 15], // Shukla paksha preferred
      nakshatras: [3, 7, 11, 12, 20, 21, 25], // Fixed stars + Pushya, Hasta, Shravana
      yogas: [0, 1, 2, 6, 16, 20, 24],
      karanas: GOOD_KARANAS,
      weekdays: [1, 3, 4, 5], // Monday, Wednesday, Thursday, Friday
    },
    unfavorable: {
      tithis: RIKTA_TITHIS.concat([30, 15]), // Avoid Purnima too for some
      nakshatras: UGRA_NAKSHATRAS,
      yogas: INAUSPICIOUS_YOGAS,
      karanas: [VISHTI_KARANA],
      weekdays: [2, 6], // Tuesday, Saturday
    },
    requiresAbhijit: false,
    avoidRaahuKaal: true,
    avoidYamaganda: true,
    preferMorning: true,
    preferAfternoon: false,
    weights: {
      tithi: 25,
      nakshatra: 25,
      yoga: 15,
      karana: 10,
      weekday: 10,
      inauspiciousPeriods: 15,
    },
  },

  // 5. Grih Arambh - Construction Start (गृह आरंभ)
  {
    id: 'grih-arambh',
    name: { en: 'Grih Arambh', hi: 'गृह आरंभ' },
    description: {
      en: 'Auspicious time to start home construction or foundation laying',
      hi: 'घर निर्माण या नींव रखने का शुभ समय'
    },
    icon: '🏗️',
    favorable: {
      tithis: [2, 3, 5, 6, 7, 10, 11, 12, 13], // Avoid Purnima for foundation
      nakshatras: [3, 7, 11, 12, 20, 25], // Fixed stars (stability)
      yogas: [0, 1, 2, 6, 16, 20],
      karanas: GOOD_KARANAS,
      weekdays: [1, 4, 5], // Monday, Thursday, Friday
    },
    unfavorable: {
      tithis: RIKTA_TITHIS.concat([30]),
      nakshatras: UGRA_NAKSHATRAS.concat([4]), // Also avoid Mrigashira
      yogas: INAUSPICIOUS_YOGAS,
      karanas: [VISHTI_KARANA],
      weekdays: [0, 2, 6], // Sunday, Tuesday, Saturday
    },
    requiresAbhijit: false,
    avoidRaahuKaal: true,
    avoidYamaganda: true,
    preferMorning: true,
    preferAfternoon: false,
    weights: {
      tithi: 20,
      nakshatra: 30, // Nakshatra very important for construction
      yoga: 15,
      karana: 10,
      weekday: 10,
      inauspiciousPeriods: 15,
    },
  },

  // 6. Partnership Muhurat (साझेदारी)
  {
    id: 'partnership',
    name: { en: 'Partnership', hi: 'साझेदारी' },
    description: {
      en: 'Auspicious time to form a business partnership or agreement',
      hi: 'व्यापारिक साझेदारी या समझौता करने का शुभ समय'
    },
    icon: '🤝',
    favorable: {
      tithis: [2, 3, 5, 7, 10, 11, 12, 13, 15],
      nakshatras: [0, 3, 6, 7, 12, 14, 16, 21], // Good for agreements
      yogas: [0, 1, 2, 6, 16, 20],
      karanas: GOOD_KARANAS,
      weekdays: [1, 3, 4, 5], // Monday, Wednesday, Thursday, Friday
    },
    unfavorable: {
      tithis: RIKTA_TITHIS.concat([30]),
      nakshatras: UGRA_NAKSHATRAS,
      yogas: INAUSPICIOUS_YOGAS,
      karanas: [VISHTI_KARANA],
      weekdays: [2, 6], // Tuesday, Saturday
    },
    requiresAbhijit: false,
    avoidRaahuKaal: true,
    avoidYamaganda: true,
    preferMorning: true,
    preferAfternoon: false,
    weights: {
      tithi: 20,
      nakshatra: 25,
      yoga: 15,
      karana: 10,
      weekday: 15,
      inauspiciousPeriods: 15,
    },
  },

  // 7. Vehicle Purchase Muhurat (वाहन खरीद)
  {
    id: 'vehicle-purchase',
    name: { en: 'Vehicle Purchase', hi: 'वाहन खरीद' },
    description: {
      en: 'Auspicious time to purchase a new vehicle',
      hi: 'नया वाहन खरीदने का शुभ समय'
    },
    icon: '🚗',
    favorable: {
      tithis: [2, 3, 5, 6, 7, 10, 11, 12, 13, 15],
      nakshatras: [0, 3, 6, 7, 10, 12, 14, 21, 26], // Ashwini (horses), Rohini, etc.
      yogas: [0, 1, 2, 6, 16, 20],
      karanas: GOOD_KARANAS,
      weekdays: [1, 3, 4, 5], // Monday, Wednesday, Thursday, Friday
    },
    unfavorable: {
      tithis: RIKTA_TITHIS.concat([30]),
      nakshatras: UGRA_NAKSHATRAS,
      yogas: INAUSPICIOUS_YOGAS,
      karanas: [VISHTI_KARANA],
      weekdays: [2, 6], // Tuesday, Saturday
    },
    requiresAbhijit: false,
    avoidRaahuKaal: true,
    avoidYamaganda: true,
    preferMorning: true,
    preferAfternoon: false,
    weights: {
      tithi: 20,
      nakshatra: 20,
      yoga: 15,
      karana: 10,
      weekday: 20,
      inauspiciousPeriods: 15,
    },
  },

  // 8. Education Start Muhurat (शिक्षा शुभारंभ)
  {
    id: 'education-start',
    name: { en: 'Education Start', hi: 'शिक्षा शुभारंभ' },
    description: {
      en: 'Auspicious time to start learning or join educational institution',
      hi: 'शिक्षा शुरू करने या शैक्षणिक संस्थान में प्रवेश का शुभ समय'
    },
    icon: '📚',
    favorable: {
      tithis: [2, 3, 5, 7, 10, 11, 12, 13, 15], // Growth tithis
      nakshatras: [0, 3, 6, 7, 8, 12, 14, 16, 21, 26], // Include Ashlesha (Nagas = wisdom)
      yogas: [0, 1, 2, 6, 16, 20, 24],
      karanas: GOOD_KARANAS,
      weekdays: [1, 3, 4, 5], // Monday, Wednesday (Budh), Thursday (Guru), Friday
    },
    unfavorable: {
      tithis: RIKTA_TITHIS.concat([30]),
      nakshatras: [5, 17, 18, 23], // Ardra, Jyeshtha, Mula, Shatabhisha
      yogas: INAUSPICIOUS_YOGAS,
      karanas: [VISHTI_KARANA],
      weekdays: [2, 6], // Tuesday, Saturday
    },
    requiresAbhijit: false,
    avoidRaahuKaal: true,
    avoidYamaganda: true,
    preferMorning: true,
    preferAfternoon: false,
    weights: {
      tithi: 15,
      nakshatra: 25,
      yoga: 20,
      karana: 10,
      weekday: 15,
      inauspiciousPeriods: 15,
    },
  },
];

/**
 * Get muhurat rules by type
 */
export function getMuhuratRules(type: MuhuratType): MuhuratRules {
  const rules = MUHURAT_RULES.find(r => r.id === type);
  if (!rules) {
    throw new Error(`Unknown muhurat type: ${type}`);
  }
  return rules;
}

/**
 * Get all muhurat types for dropdown
 */
export function getAllMuhuratTypes(): Array<{ id: MuhuratType; name: { en: string; hi: string }; icon: string }> {
  return MUHURAT_RULES.map(r => ({
    id: r.id,
    name: r.name,
    icon: r.icon,
  }));
}
