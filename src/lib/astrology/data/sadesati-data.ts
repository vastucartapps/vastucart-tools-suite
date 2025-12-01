/**
 * Sade Sati (Saturn Transit) Data
 *
 * Sade Sati is the 7.5 year period when Saturn transits through
 * the 12th, 1st, and 2nd houses from natal Moon sign.
 * Each phase lasts approximately 2.5 years.
 */

// Saturn's orbital period in years (approximately)
export const SATURN_ORBITAL_PERIOD = 29.4571;

// Time Saturn spends in each sign (in years)
export const SATURN_SIGN_DURATION = SATURN_ORBITAL_PERIOD / 12; // ~2.45 years

// Phases of Sade Sati
export type SadeSatiPhase = 'rising' | 'peak' | 'setting' | 'none';

export interface PhaseInfo {
  name: { en: string; hi: string };
  description: { en: string; hi: string };
  intensity: 'mild' | 'moderate' | 'intense';
  houseFromMoon: number;
}

export const PHASE_INFO: Record<SadeSatiPhase, PhaseInfo> = {
  rising: {
    name: { en: 'Rising Phase (Dhayya 1)', hi: 'आरोही चरण (ढैया 1)' },
    description: {
      en: 'Saturn transits the 12th house from Moon. This phase brings expenses, sleep issues, and mental stress. Health of elders may need attention.',
      hi: 'शनि चंद्र से 12वें भाव में गोचर करता है। इस चरण में खर्च, नींद की समस्या और मानसिक तनाव आता है। बड़ों के स्वास्थ्य पर ध्यान देना चाहिए।'
    },
    intensity: 'moderate',
    houseFromMoon: 12
  },
  peak: {
    name: { en: 'Peak Phase (Dhayya 2)', hi: 'शिखर चरण (ढैया 2)' },
    description: {
      en: 'Saturn transits over the Moon sign. This is the most intense phase causing health issues, career challenges, and emotional turbulence. Major life changes often occur.',
      hi: 'शनि चंद्र राशि पर गोचर करता है। यह सबसे तीव्र चरण है जिसमें स्वास्थ्य समस्याएं, करियर चुनौतियां और भावनात्मक उथल-पुथल होती है। जीवन में बड़े बदलाव अक्सर होते हैं।'
    },
    intensity: 'intense',
    houseFromMoon: 1
  },
  setting: {
    name: { en: 'Setting Phase (Dhayya 3)', hi: 'अस्त चरण (ढैया 3)' },
    description: {
      en: 'Saturn transits the 2nd house from Moon. This phase affects family, finances, and speech. Financial strain and family disputes may arise.',
      hi: 'शनि चंद्र से दूसरे भाव में गोचर करता है। यह चरण परिवार, वित्त और वाणी को प्रभावित करता है। आर्थिक तनाव और पारिवारिक विवाद हो सकते हैं।'
    },
    intensity: 'moderate',
    houseFromMoon: 2
  },
  none: {
    name: { en: 'No Sade Sati', hi: 'साढ़े साती नहीं' },
    description: {
      en: 'Saturn is not transiting through the Sade Sati houses from your Moon sign. This is a favorable period for new ventures.',
      hi: 'शनि आपकी चंद्र राशि से साढ़े साती भावों में गोचर नहीं कर रहा है। यह नए कार्यों के लिए अनुकूल समय है।'
    },
    intensity: 'mild',
    houseFromMoon: 0
  }
};

// General effects during Sade Sati
export interface Effect {
  id: string;
  area: { en: string; hi: string };
  effect: { en: string; hi: string };
}

export const GENERAL_EFFECTS: Effect[] = [
  {
    id: 'health',
    area: { en: 'Health', hi: 'स्वास्थ्य' },
    effect: {
      en: 'Physical and mental health may suffer. Fatigue, chronic ailments, and stress-related issues are common.',
      hi: 'शारीरिक और मानसिक स्वास्थ्य प्रभावित हो सकता है। थकान, पुरानी बीमारियां और तनाव संबंधी समस्याएं सामान्य हैं।'
    }
  },
  {
    id: 'career',
    area: { en: 'Career', hi: 'करियर' },
    effect: {
      en: 'Career obstacles, delays in promotions, job changes, or increased workload are possible.',
      hi: 'करियर में बाधाएं, पदोन्नति में देरी, नौकरी बदलना या काम का बोझ बढ़ना संभव है।'
    }
  },
  {
    id: 'finance',
    area: { en: 'Finance', hi: 'वित्त' },
    effect: {
      en: 'Financial strain, unexpected expenses, and difficulty in saving money.',
      hi: 'आर्थिक तनाव, अप्रत्याशित खर्च और पैसे बचाने में कठिनाई।'
    }
  },
  {
    id: 'relationships',
    area: { en: 'Relationships', hi: 'संबंध' },
    effect: {
      en: 'Relationships may face tests. Misunderstandings and conflicts with family members possible.',
      hi: 'रिश्तों की परीक्षा हो सकती है। परिवार के सदस्यों के साथ गलतफहमी और विवाद संभव।'
    }
  },
  {
    id: 'mental',
    area: { en: 'Mental State', hi: 'मानसिक स्थिति' },
    effect: {
      en: 'Feelings of isolation, depression, anxiety, and loss of confidence.',
      hi: 'अकेलापन, अवसाद, चिंता और आत्मविश्वास की कमी की भावना।'
    }
  }
];

// Remedies for Sade Sati
export interface Remedy {
  id: string;
  name: { en: string; hi: string };
  description: { en: string; hi: string };
  type: 'puja' | 'donation' | 'mantra' | 'gemstone' | 'lifestyle';
}

export const REMEDIES: Remedy[] = [
  {
    id: 'shani_mantra',
    name: { en: 'Shani Mantra', hi: 'शनि मंत्र' },
    description: {
      en: 'Chant "Om Sham Shanicharaya Namah" 108 times daily, especially on Saturdays',
      hi: '"ॐ शं शनैश्चराय नमः" मंत्र प्रतिदिन 108 बार जपें, विशेषकर शनिवार को'
    },
    type: 'mantra'
  },
  {
    id: 'hanuman_chalisa',
    name: { en: 'Hanuman Chalisa', hi: 'हनुमान चालीसा' },
    description: {
      en: 'Recite Hanuman Chalisa daily, especially on Tuesdays and Saturdays',
      hi: 'हनुमान चालीसा प्रतिदिन पढ़ें, विशेषकर मंगलवार और शनिवार को'
    },
    type: 'mantra'
  },
  {
    id: 'shani_puja',
    name: { en: 'Shani Shanti Puja', hi: 'शनि शांति पूजा' },
    description: {
      en: 'Perform Shani Shanti Puja at a Shani temple on Saturday',
      hi: 'शनिवार को शनि मंदिर में शनि शांति पूजा करें'
    },
    type: 'puja'
  },
  {
    id: 'oil_donation',
    name: { en: 'Mustard Oil Donation', hi: 'सरसों तेल दान' },
    description: {
      en: 'Donate mustard oil, black sesame, iron items, and black cloth on Saturdays',
      hi: 'शनिवार को सरसों का तेल, काले तिल, लोहे की वस्तुएं और काला कपड़ा दान करें'
    },
    type: 'donation'
  },
  {
    id: 'blue_sapphire',
    name: { en: 'Blue Sapphire (Neelam)', hi: 'नीलम रत्न' },
    description: {
      en: 'Wear Blue Sapphire only after proper consultation, as it is a powerful gemstone',
      hi: 'नीलम उचित परामर्श के बाद ही धारण करें, क्योंकि यह शक्तिशाली रत्न है'
    },
    type: 'gemstone'
  },
  {
    id: 'saturday_fast',
    name: { en: 'Saturday Fasting', hi: 'शनिवार व्रत' },
    description: {
      en: 'Observe fast on Saturdays, avoid salt and consume only one meal',
      hi: 'शनिवार को व्रत रखें, नमक का त्याग करें और केवल एक भोजन करें'
    },
    type: 'lifestyle'
  },
  {
    id: 'feed_crows',
    name: { en: 'Feed Crows', hi: 'कौओं को खिलाना' },
    description: {
      en: 'Feed crows with rice mixed with mustard oil on Saturdays',
      hi: 'शनिवार को कौओं को सरसों के तेल में मिले चावल खिलाएं'
    },
    type: 'lifestyle'
  },
  {
    id: 'shani_temple',
    name: { en: 'Visit Shani Temple', hi: 'शनि मंदिर दर्शन' },
    description: {
      en: 'Visit Shani temple on Saturdays and offer mustard oil to Shani idol',
      hi: 'शनिवार को शनि मंदिर जाएं और शनि देव को सरसों का तेल चढ़ाएं'
    },
    type: 'puja'
  }
];

// Small Panoti (Dhaiya) - Saturn in 4th or 8th from Moon
export interface SmallPanoti {
  position: 4 | 8;
  name: { en: string; hi: string };
  description: { en: string; hi: string };
}

export const SMALL_PANOTI: SmallPanoti[] = [
  {
    position: 4,
    name: { en: 'Kantak Shani (4th)', hi: 'कंटक शनि (चौथा)' },
    description: {
      en: 'Saturn in 4th from Moon causes domestic issues, vehicle problems, mother\'s health concerns, and mental unrest.',
      hi: 'चंद्र से 4वें में शनि घरेलू समस्याएं, वाहन समस्याएं, माता के स्वास्थ्य की चिंता और मानसिक अशांति देता है।'
    }
  },
  {
    position: 8,
    name: { en: 'Ashtam Shani (8th)', hi: 'अष्टम शनि (आठवां)' },
    description: {
      en: 'Saturn in 8th from Moon brings health crises, accidents, losses, obstacles, and transformative life events.',
      hi: 'चंद्र से 8वें में शनि स्वास्थ्य संकट, दुर्घटनाएं, हानि, बाधाएं और जीवन बदलने वाली घटनाएं लाता है।'
    }
  }
];

// Saturn transit signs with approximate dates (2020-2050)
// These are approximate ingress dates for Saturn into each sign
export interface SaturnTransit {
  signIndex: number;
  startDate: Date;
  endDate: Date;
}

// Generate Saturn transit data
// Saturn entered Capricorn on Jan 24, 2020
// Each sign ~2.45 years
export function generateSaturnTransits(): SaturnTransit[] {
  const transits: SaturnTransit[] = [];

  // Saturn was in Capricorn (9) starting Jan 24, 2020
  const baseDate = new Date(2020, 0, 24); // Jan 24, 2020
  const baseSign = 9; // Capricorn

  // Generate transits for 30 years (one full Saturn cycle)
  const daysPerSign = SATURN_SIGN_DURATION * 365.25;

  for (let i = 0; i < 12; i++) {
    const signIndex = (baseSign + i) % 12;
    const startOffset = i * daysPerSign;
    const endOffset = (i + 1) * daysPerSign;

    const startDate = new Date(baseDate.getTime() + startOffset * 24 * 60 * 60 * 1000);
    const endDate = new Date(baseDate.getTime() + endOffset * 24 * 60 * 60 * 1000);

    transits.push({ signIndex, startDate, endDate });
  }

  return transits;
}

// Zodiac sign names
export const ZODIAC_SIGNS = [
  { en: 'Aries', hi: 'मेष' },
  { en: 'Taurus', hi: 'वृषभ' },
  { en: 'Gemini', hi: 'मिथुन' },
  { en: 'Cancer', hi: 'कर्क' },
  { en: 'Leo', hi: 'सिंह' },
  { en: 'Virgo', hi: 'कन्या' },
  { en: 'Libra', hi: 'तुला' },
  { en: 'Scorpio', hi: 'वृश्चिक' },
  { en: 'Sagittarius', hi: 'धनु' },
  { en: 'Capricorn', hi: 'मकर' },
  { en: 'Aquarius', hi: 'कुंभ' },
  { en: 'Pisces', hi: 'मीन' }
];

/**
 * Get current Saturn sign based on date
 */
export function getCurrentSaturnSign(date: Date = new Date()): number {
  const transits = generateSaturnTransits();

  for (const transit of transits) {
    if (date >= transit.startDate && date < transit.endDate) {
      return transit.signIndex;
    }
  }

  // If beyond our calculated range, extrapolate
  const baseDate = new Date(2020, 0, 24);
  const daysSinceBase = (date.getTime() - baseDate.getTime()) / (24 * 60 * 60 * 1000);
  const signsSinceBase = Math.floor(daysSinceBase / (SATURN_SIGN_DURATION * 365.25));
  return (9 + signsSinceBase) % 12; // 9 is Capricorn (base sign)
}

/**
 * Determine Sade Sati phase based on Saturn's position relative to Moon
 */
export function getSadeSatiPhase(moonSign: number, saturnSign: number): SadeSatiPhase {
  // Calculate house of Saturn from Moon (1-indexed)
  const houseFromMoon = ((saturnSign - moonSign + 12) % 12) + 1;

  if (houseFromMoon === 12) return 'rising';
  if (houseFromMoon === 1) return 'peak';
  if (houseFromMoon === 2) return 'setting';

  return 'none';
}

/**
 * Check for Small Panoti (Kantak/Ashtam Shani)
 */
export function getSmallPanoti(moonSign: number, saturnSign: number): SmallPanoti | null {
  const houseFromMoon = ((saturnSign - moonSign + 12) % 12) + 1;

  if (houseFromMoon === 4) return SMALL_PANOTI[0];
  if (houseFromMoon === 8) return SMALL_PANOTI[1];

  return null;
}

/**
 * Calculate next Sade Sati period
 */
export function getNextSadeSatiDates(moonSign: number, currentDate: Date = new Date()): {
  startDate: Date;
  peakStartDate: Date;
  peakEndDate: Date;
  endDate: Date;
} {
  const transits = generateSaturnTransits();

  // Find when Saturn enters 12th from Moon (start of Sade Sati)
  const sign12thFromMoon = (moonSign - 1 + 12) % 12;

  let startDate: Date | null = null;
  let peakStartDate: Date | null = null;
  let peakEndDate: Date | null = null;
  let endDate: Date | null = null;

  for (const transit of transits) {
    if (transit.signIndex === sign12thFromMoon && transit.startDate > currentDate && !startDate) {
      startDate = transit.startDate;
    }
    if (transit.signIndex === moonSign && startDate && !peakStartDate) {
      peakStartDate = transit.startDate;
      peakEndDate = transit.endDate;
    }
    if (transit.signIndex === (moonSign + 1) % 12 && peakEndDate && !endDate) {
      endDate = transit.endDate;
      break;
    }
  }

  // If not found in our range, calculate approximately
  if (!startDate) {
    const daysPerSign = SATURN_SIGN_DURATION * 365.25;
    const currentSaturn = getCurrentSaturnSign(currentDate);
    const signsUntilStart = (sign12thFromMoon - currentSaturn + 12) % 12;
    const daysUntilStart = signsUntilStart * daysPerSign;

    startDate = new Date(currentDate.getTime() + daysUntilStart * 24 * 60 * 60 * 1000);
    peakStartDate = new Date(startDate.getTime() + daysPerSign * 24 * 60 * 60 * 1000);
    peakEndDate = new Date(peakStartDate.getTime() + daysPerSign * 24 * 60 * 60 * 1000);
    endDate = new Date(peakEndDate.getTime() + daysPerSign * 24 * 60 * 60 * 1000);
  }

  return {
    startDate: startDate!,
    peakStartDate: peakStartDate!,
    peakEndDate: peakEndDate!,
    endDate: endDate!
  };
}

/**
 * Get current Sade Sati dates if in Sade Sati
 */
export function getCurrentSadeSatiDates(moonSign: number, currentDate: Date = new Date()): {
  startDate: Date;
  peakStartDate: Date;
  peakEndDate: Date;
  endDate: Date;
} | null {
  const transits = generateSaturnTransits();
  const sign12thFromMoon = (moonSign - 1 + 12) % 12;
  const sign2ndFromMoon = (moonSign + 1) % 12;

  // Check if currently in Sade Sati
  const saturnSign = getCurrentSaturnSign(currentDate);
  const phase = getSadeSatiPhase(moonSign, saturnSign);

  if (phase === 'none') return null;

  // Find the dates
  const daysPerSign = SATURN_SIGN_DURATION * 365.25;

  // Find when Saturn entered the 12th sign (going backwards if needed)
  let startDate: Date;
  let peakStartDate: Date;
  let peakEndDate: Date;
  let endDate: Date;

  // Calculate based on current position
  const currentTransit = transits.find(t => t.signIndex === saturnSign &&
    currentDate >= t.startDate && currentDate < t.endDate);

  if (currentTransit) {
    if (phase === 'rising') {
      startDate = currentTransit.startDate;
      peakStartDate = currentTransit.endDate;
      peakEndDate = new Date(peakStartDate.getTime() + daysPerSign * 24 * 60 * 60 * 1000);
      endDate = new Date(peakEndDate.getTime() + daysPerSign * 24 * 60 * 60 * 1000);
    } else if (phase === 'peak') {
      peakStartDate = currentTransit.startDate;
      peakEndDate = currentTransit.endDate;
      startDate = new Date(peakStartDate.getTime() - daysPerSign * 24 * 60 * 60 * 1000);
      endDate = new Date(peakEndDate.getTime() + daysPerSign * 24 * 60 * 60 * 1000);
    } else {
      // setting
      peakEndDate = currentTransit.startDate;
      endDate = currentTransit.endDate;
      peakStartDate = new Date(peakEndDate.getTime() - daysPerSign * 24 * 60 * 60 * 1000);
      startDate = new Date(peakStartDate.getTime() - daysPerSign * 24 * 60 * 60 * 1000);
    }

    return { startDate, peakStartDate, peakEndDate, endDate };
  }

  return null;
}
