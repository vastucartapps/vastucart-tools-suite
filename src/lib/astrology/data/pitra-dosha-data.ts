/**
 * Pitra Dosha (Ancestral Karma) Data
 *
 * Pitra Dosha occurs due to unfulfilled obligations to ancestors
 * or negative karma inherited from previous generations.
 * It is primarily indicated by affliction to Sun, 9th house, or 9th lord.
 */

export type PitraDoshaType = 'sun_rahu' | 'sun_ketu' | 'sun_saturn' | 'ninth_house' | 'ninth_lord' | 'none';
export type Severity = 'none' | 'mild' | 'moderate' | 'severe';

// Malefic planets for Pitra Dosha
export const MALEFICS = ['saturn', 'rahu', 'ketu'];

export interface DoshaIndicator {
  type: PitraDoshaType;
  name: { en: string; hi: string };
  description: { en: string; hi: string };
  severity: Severity;
}

export const DOSHA_TYPES: Record<PitraDoshaType, DoshaIndicator> = {
  sun_rahu: {
    type: 'sun_rahu',
    name: { en: 'Sun-Rahu Affliction', hi: 'सूर्य-राहु पीड़ा' },
    description: {
      en: 'Sun conjunct or aspected by Rahu. Indicates ancestral displeasure, father\'s health issues, and obstacles from authorities.',
      hi: 'सूर्य राहु से युक्त या दृष्ट। पूर्वजों की नाराजगी, पिता के स्वास्थ्य समस्याएं और अधिकारियों से बाधाएं।'
    },
    severity: 'severe'
  },
  sun_ketu: {
    type: 'sun_ketu',
    name: { en: 'Sun-Ketu Affliction', hi: 'सूर्य-केतु पीड़ा' },
    description: {
      en: 'Sun conjunct or aspected by Ketu. Indicates disconnection from father, spiritual karmic debt, and lack of recognition.',
      hi: 'सूर्य केतु से युक्त या दृष्ट। पिता से विच्छेद, आध्यात्मिक कार्मिक ऋण और मान्यता की कमी।'
    },
    severity: 'moderate'
  },
  sun_saturn: {
    type: 'sun_saturn',
    name: { en: 'Sun-Saturn Affliction', hi: 'सूर्य-शनि पीड़ा' },
    description: {
      en: 'Sun conjunct or aspected by Saturn. Indicates father\'s struggles, delayed success, and heavy ancestral karma.',
      hi: 'सूर्य शनि से युक्त या दृष्ट। पिता की कठिनाइयां, विलंबित सफलता और भारी पितृ कर्म।'
    },
    severity: 'moderate'
  },
  ninth_house: {
    type: 'ninth_house',
    name: { en: '9th House Affliction', hi: 'नवम भाव पीड़ा' },
    description: {
      en: 'Malefic planets in 9th house (house of father and fortune). Indicates ancestral property disputes and luck obstacles.',
      hi: 'नवम भाव (पिता और भाग्य का भाव) में पाप ग्रह। पैतृक संपत्ति विवाद और भाग्य बाधाएं।'
    },
    severity: 'moderate'
  },
  ninth_lord: {
    type: 'ninth_lord',
    name: { en: '9th Lord Afflicted', hi: 'नवमेश पीड़ित' },
    description: {
      en: 'Lord of 9th house is afflicted by malefics. Indicates weak fortune and reduced ancestral blessings.',
      hi: 'नवम भाव का स्वामी पाप ग्रहों से पीड़ित। कमजोर भाग्य और कम पितृ आशीर्वाद।'
    },
    severity: 'mild'
  },
  none: {
    type: 'none',
    name: { en: 'No Pitra Dosha', hi: 'पितृ दोष नहीं' },
    description: {
      en: 'No significant Pitra Dosha indicators found. Ancestral blessings are favorable.',
      hi: 'कोई महत्वपूर्ण पितृ दोष संकेत नहीं मिला। पितृ आशीर्वाद अनुकूल हैं।'
    },
    severity: 'none'
  }
};

// Effects of Pitra Dosha
export const EFFECTS = [
  {
    area: { en: 'Children', hi: 'संतान' },
    effect: {
      en: 'Delay or problems in having children, children\'s health issues, or strained relationships with children.',
      hi: 'संतान प्राप्ति में विलंब या समस्या, बच्चों के स्वास्थ्य समस्याएं, या बच्चों से तनावपूर्ण संबंध।'
    }
  },
  {
    area: { en: 'Career', hi: 'करियर' },
    effect: {
      en: 'Unexpected obstacles in career, lack of recognition despite hard work, and unstable professional life.',
      hi: 'करियर में अप्रत्याशित बाधाएं, कड़ी मेहनत के बावजूद मान्यता की कमी, और अस्थिर व्यावसायिक जीवन।'
    }
  },
  {
    area: { en: 'Finance', hi: 'वित्त' },
    effect: {
      en: 'Financial instability, inability to save money, property disputes, and unexpected losses.',
      hi: 'वित्तीय अस्थिरता, पैसे बचाने में असमर्थता, संपत्ति विवाद, और अप्रत्याशित हानि।'
    }
  },
  {
    area: { en: 'Health', hi: 'स्वास्थ्य' },
    effect: {
      en: 'Chronic health issues that don\'t respond to treatment, especially bone-related or nervous system problems.',
      hi: 'पुरानी स्वास्थ्य समस्याएं जो उपचार से ठीक नहीं होतीं, विशेषकर हड्डियों या तंत्रिका तंत्र की समस्याएं।'
    }
  },
  {
    area: { en: 'Mental Peace', hi: 'मानसिक शांति' },
    effect: {
      en: 'Constant anxiety, disturbed sleep, nightmares about deceased relatives, and feeling of being cursed.',
      hi: 'निरंतर चिंता, अशांत नींद, मृत रिश्तेदारों के बारे में बुरे सपने, और अभिशप्त होने की भावना।'
    }
  }
];

// Remedies for Pitra Dosha
export interface Remedy {
  id: string;
  name: { en: string; hi: string };
  description: { en: string; hi: string };
  type: 'puja' | 'donation' | 'mantra' | 'lifestyle';
  timing?: { en: string; hi: string };
}

export const REMEDIES: Remedy[] = [
  {
    id: 'shradh',
    name: { en: 'Shradh Ceremony', hi: 'श्राद्ध कर्म' },
    description: {
      en: 'Perform annual Shradh rituals during Pitru Paksha (16 days before Navratri) to honor and feed ancestors.',
      hi: 'पितृ पक्ष (नवरात्रि से पहले 16 दिन) में वार्षिक श्राद्ध अनुष्ठान करें पूर्वजों को सम्मान और तर्पण के लिए।'
    },
    type: 'puja',
    timing: { en: 'During Pitru Paksha', hi: 'पितृ पक्ष में' }
  },
  {
    id: 'pind_daan',
    name: { en: 'Pind Daan at Gaya', hi: 'गया में पिंडदान' },
    description: {
      en: 'Perform Pind Daan at Gaya (Bihar) for ancestors\' liberation. This is the most powerful remedy.',
      hi: 'पूर्वजों की मुक्ति के लिए गया (बिहार) में पिंडदान करें। यह सबसे शक्तिशाली उपाय है।'
    },
    type: 'puja'
  },
  {
    id: 'tarpan',
    name: { en: 'Daily Tarpan', hi: 'दैनिक तर्पण' },
    description: {
      en: 'Offer water mixed with black sesame seeds to ancestors daily, especially during Amavasya.',
      hi: 'काले तिल मिले जल से पूर्वजों को प्रतिदिन तर्पण करें, विशेषकर अमावस्या पर।'
    },
    type: 'puja',
    timing: { en: 'Daily, especially Amavasya', hi: 'प्रतिदिन, विशेषकर अमावस्या' }
  },
  {
    id: 'narayan_bali',
    name: { en: 'Narayan Bali Puja', hi: 'नारायण बलि पूजा' },
    description: {
      en: 'Perform Narayan Bali at Trimbakeshwar for souls who died unnatural deaths.',
      hi: 'असामान्य मृत्यु से मरने वालों के लिए त्र्यंबकेश्वर में नारायण बलि पूजा करें।'
    },
    type: 'puja'
  },
  {
    id: 'pitra_mantra',
    name: { en: 'Pitra Gayatri Mantra', hi: 'पितृ गायत्री मंत्र' },
    description: {
      en: 'Chant "Om Pitrubhyo Namah" or Pitra Gayatri Mantra 108 times daily.',
      hi: '"ॐ पितृभ्यो नमः" या पितृ गायत्री मंत्र प्रतिदिन 108 बार जपें।'
    },
    type: 'mantra'
  },
  {
    id: 'crow_feeding',
    name: { en: 'Feed Crows', hi: 'कौओं को खिलाना' },
    description: {
      en: 'Feed crows daily, especially on Amavasya and during Shradh. Crows represent ancestors.',
      hi: 'कौओं को प्रतिदिन खिलाएं, विशेषकर अमावस्या और श्राद्ध में। कौए पूर्वजों का प्रतिनिधित्व करते हैं।'
    },
    type: 'donation'
  },
  {
    id: 'brahmin_feeding',
    name: { en: 'Feed Brahmins', hi: 'ब्राह्मण भोजन' },
    description: {
      en: 'Offer food to Brahmins during Shradh and on death anniversaries of ancestors.',
      hi: 'श्राद्ध और पूर्वजों की पुण्यतिथि पर ब्राह्मणों को भोजन कराएं।'
    },
    type: 'donation'
  },
  {
    id: 'cow_donation',
    name: { en: 'Cow Donation', hi: 'गौ दान' },
    description: {
      en: 'Donate a cow or contribute to cow welfare for ancestors\' blessings.',
      hi: 'पूर्वजों के आशीर्वाद के लिए गाय दान करें या गौ सेवा में योगदान करें।'
    },
    type: 'donation'
  },
  {
    id: 'tree_planting',
    name: { en: 'Plant Peepal Tree', hi: 'पीपल वृक्षारोपण' },
    description: {
      en: 'Plant a Peepal tree and nurture it in memory of ancestors.',
      hi: 'पूर्वजों की स्मृति में पीपल का वृक्ष लगाएं और उसकी देखभाल करें।'
    },
    type: 'lifestyle'
  }
];

// Signs and their lords
export const SIGN_LORDS: Record<number, string> = {
  0: 'mars',     // Aries
  1: 'venus',    // Taurus
  2: 'mercury',  // Gemini
  3: 'moon',     // Cancer
  4: 'sun',      // Leo
  5: 'mercury',  // Virgo
  6: 'venus',    // Libra
  7: 'mars',     // Scorpio (using Mars, not Ketu)
  8: 'jupiter',  // Sagittarius
  9: 'saturn',   // Capricorn
  10: 'saturn',  // Aquarius
  11: 'jupiter'  // Pisces
};

/**
 * Get the 9th house sign from ascendant sign
 */
export function getNinthHouseSign(ascendantSign: number): number {
  return (ascendantSign + 8) % 12; // 9th from 1st
}

/**
 * Get the lord of 9th house
 */
export function getNinthLord(ascendantSign: number): string {
  const ninthSign = getNinthHouseSign(ascendantSign);
  return SIGN_LORDS[ninthSign];
}

/**
 * Check if two planets are conjunct (within same house or close degrees)
 */
export function areConjunct(planet1House: number, planet2House: number): boolean {
  return planet1House === planet2House;
}

/**
 * Check if a planet aspects another (simplified - using Vedic aspects)
 * Saturn aspects 3rd, 7th, and 10th from its position
 * Rahu/Ketu aspect 5th, 7th, and 9th from their position
 */
export function doesAspect(aspectingPlanet: string, aspectingHouse: number, targetHouse: number): boolean {
  let aspects: number[] = [];

  if (aspectingPlanet === 'saturn') {
    aspects = [3, 7, 10];
  } else if (aspectingPlanet === 'rahu' || aspectingPlanet === 'ketu') {
    aspects = [5, 7, 9];
  } else {
    // All planets have 7th aspect
    aspects = [7];
  }

  for (const aspect of aspects) {
    const aspectedHouse = ((aspectingHouse - 1 + aspect) % 12) + 1;
    if (aspectedHouse === targetHouse) return true;
  }

  return false;
}

/**
 * Check for Pitra Dosha indicators
 */
export function checkPitraDosha(planetHouses: {
  sun: number;
  moon: number;
  mars: number;
  mercury: number;
  jupiter: number;
  venus: number;
  saturn: number;
  rahu: number;
  ketu: number;
  ascendantSign: number;
}): {
  hasPitraDosha: boolean;
  indicators: DoshaIndicator[];
  severity: Severity;
  ninthHouseDetails: {
    sign: number;
    lord: string;
    planetsIn9th: string[];
  };
} {
  const indicators: DoshaIndicator[] = [];
  const sunHouse = planetHouses.sun;

  // Check Sun-Rahu conjunction or aspect
  if (areConjunct(sunHouse, planetHouses.rahu) ||
      doesAspect('rahu', planetHouses.rahu, sunHouse)) {
    indicators.push(DOSHA_TYPES.sun_rahu);
  }

  // Check Sun-Ketu conjunction or aspect
  if (areConjunct(sunHouse, planetHouses.ketu) ||
      doesAspect('ketu', planetHouses.ketu, sunHouse)) {
    indicators.push(DOSHA_TYPES.sun_ketu);
  }

  // Check Sun-Saturn conjunction or aspect
  if (areConjunct(sunHouse, planetHouses.saturn) ||
      doesAspect('saturn', planetHouses.saturn, sunHouse)) {
    indicators.push(DOSHA_TYPES.sun_saturn);
  }

  // Check 9th house for malefics
  const ninthHouse = 9; // House number
  const planetsIn9th: string[] = [];
  const planetList = ['sun', 'moon', 'mars', 'mercury', 'jupiter', 'venus', 'saturn', 'rahu', 'ketu'] as const;

  for (const planet of planetList) {
    if (planetHouses[planet] === ninthHouse) {
      planetsIn9th.push(planet);
    }
  }

  // If malefics are in 9th house
  const maleficsIn9th = planetsIn9th.filter(p => MALEFICS.includes(p));
  if (maleficsIn9th.length > 0) {
    indicators.push(DOSHA_TYPES.ninth_house);
  }

  // Check 9th lord affliction
  const ninthSign = getNinthHouseSign(planetHouses.ascendantSign);
  const ninthLord = getNinthLord(planetHouses.ascendantSign);

  // Get 9th lord's house
  const ninthLordHouse = planetHouses[ninthLord as keyof typeof planetHouses] as number;

  // Check if 9th lord is afflicted by malefics
  const isNinthLordAfflicted =
    areConjunct(ninthLordHouse, planetHouses.saturn) ||
    areConjunct(ninthLordHouse, planetHouses.rahu) ||
    areConjunct(ninthLordHouse, planetHouses.ketu) ||
    doesAspect('saturn', planetHouses.saturn, ninthLordHouse) ||
    doesAspect('rahu', planetHouses.rahu, ninthLordHouse);

  if (isNinthLordAfflicted && !indicators.some(i => i.type === 'sun_rahu' || i.type === 'sun_saturn')) {
    indicators.push(DOSHA_TYPES.ninth_lord);
  }

  // Determine overall severity
  let severity: Severity = 'none';
  if (indicators.length > 0) {
    const severities = indicators.map(i => i.severity);
    if (severities.includes('severe')) {
      severity = 'severe';
    } else if (severities.includes('moderate')) {
      severity = 'moderate';
    } else {
      severity = 'mild';
    }
  }

  return {
    hasPitraDosha: indicators.length > 0,
    indicators: indicators.length > 0 ? indicators : [DOSHA_TYPES.none],
    severity,
    ninthHouseDetails: {
      sign: ninthSign,
      lord: ninthLord,
      planetsIn9th
    }
  };
}
