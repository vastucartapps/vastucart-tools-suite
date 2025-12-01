/**
 * Raj Yoga (Royal Combinations) Data
 *
 * Raj Yoga indicates success, power, fame, and prosperity in life.
 * These are auspicious planetary combinations that bestow kingly status.
 */

export type RajYogaType =
  | 'gaja_kesari'
  | 'panch_mahapurusha'
  | 'budhaditya'
  | 'lakshmi'
  | 'saraswati'
  | 'hamsa'
  | 'malavya'
  | 'ruchaka'
  | 'bhadra'
  | 'shasha'
  | 'viparita'
  | 'neech_bhang'
  | 'dhana';

export interface RajYogaInfo {
  type: RajYogaType;
  name: { en: string; hi: string };
  planets: string[];
  description: { en: string; hi: string };
  effects: { en: string; hi: string };
  intensity: 'powerful' | 'moderate' | 'mild';
}

// Panch Mahapurusha Yogas
export const PANCH_MAHAPURUSHA: Record<string, RajYogaInfo> = {
  hamsa: {
    type: 'hamsa',
    name: { en: 'Hamsa Yoga', hi: 'हंस योग' },
    planets: ['jupiter'],
    description: {
      en: 'Jupiter in own sign (Sagittarius/Pisces) or exalted (Cancer) in a Kendra house (1,4,7,10).',
      hi: 'गुरु स्वराशि (धनु/मीन) या उच्च (कर्क) में केंद्र भाव (1,4,7,10) में।'
    },
    effects: {
      en: 'Brings wisdom, spirituality, respect, good fortune, and virtuous nature. Success in education, teaching, and religious pursuits.',
      hi: 'ज्ञान, आध्यात्मिकता, सम्मान, सौभाग्य और सदाचार प्रदान करता है। शिक्षा, शिक्षण और धार्मिक कार्यों में सफलता।'
    },
    intensity: 'powerful'
  },
  malavya: {
    type: 'malavya',
    name: { en: 'Malavya Yoga', hi: 'मालव्य योग' },
    planets: ['venus'],
    description: {
      en: 'Venus in own sign (Taurus/Libra) or exalted (Pisces) in a Kendra house (1,4,7,10).',
      hi: 'शुक्र स्वराशि (वृषभ/तुला) या उच्च (मीन) में केंद्र भाव (1,4,7,10) में।'
    },
    effects: {
      en: 'Bestows beauty, artistic abilities, luxury, romance, comforts, wealth, and harmonious relationships.',
      hi: 'सुंदरता, कलात्मक क्षमताएं, विलासिता, रोमांस, सुख-सुविधाएं, धन और सामंजस्यपूर्ण संबंध प्रदान करता है।'
    },
    intensity: 'powerful'
  },
  ruchaka: {
    type: 'ruchaka',
    name: { en: 'Ruchaka Yoga', hi: 'रुचक योग' },
    planets: ['mars'],
    description: {
      en: 'Mars in own sign (Aries/Scorpio) or exalted (Capricorn) in a Kendra house (1,4,7,10).',
      hi: 'मंगल स्वराशि (मेष/वृश्चिक) या उच्च (मकर) में केंद्र भाव (1,4,7,10) में।'
    },
    effects: {
      en: 'Grants courage, leadership, military success, administrative ability, and powerful personality.',
      hi: 'साहस, नेतृत्व, सैन्य सफलता, प्रशासनिक क्षमता और शक्तिशाली व्यक्तित्व प्रदान करता है।'
    },
    intensity: 'powerful'
  },
  bhadra: {
    type: 'bhadra',
    name: { en: 'Bhadra Yoga', hi: 'भद्र योग' },
    planets: ['mercury'],
    description: {
      en: 'Mercury in own sign (Gemini/Virgo) or exalted (Virgo) in a Kendra house (1,4,7,10).',
      hi: 'बुध स्वराशि (मिथुन/कन्या) या उच्च (कन्या) में केंद्र भाव (1,4,7,10) में।'
    },
    effects: {
      en: 'Gives intelligence, communication skills, business acumen, eloquence, and success in writing/trading.',
      hi: 'बुद्धिमत्ता, संचार कौशल, व्यापार कुशलता, वाक्पटुता और लेखन/व्यापार में सफलता प्रदान करता है।'
    },
    intensity: 'powerful'
  },
  shasha: {
    type: 'shasha',
    name: { en: 'Shasha Yoga', hi: 'शश योग' },
    planets: ['saturn'],
    description: {
      en: 'Saturn in own sign (Capricorn/Aquarius) or exalted (Libra) in a Kendra house (1,4,7,10).',
      hi: 'शनि स्वराशि (मकर/कुंभ) या उच्च (तुला) में केंद्र भाव (1,4,7,10) में।'
    },
    effects: {
      en: 'Provides authority, discipline, long life, servants, property, and success through hard work.',
      hi: 'अधिकार, अनुशासन, दीर्घायु, सेवक, संपत्ति और कड़ी मेहनत से सफलता प्रदान करता है।'
    },
    intensity: 'powerful'
  }
};

// Other important Raj Yogas
export const OTHER_RAJ_YOGAS: Record<string, RajYogaInfo> = {
  gaja_kesari: {
    type: 'gaja_kesari',
    name: { en: 'Gaja Kesari Yoga', hi: 'गजकेसरी योग' },
    planets: ['jupiter', 'moon'],
    description: {
      en: 'Jupiter in Kendra (1,4,7,10) from Moon. One of the most auspicious yogas.',
      hi: 'गुरु चंद्र से केंद्र (1,4,7,10) में। सबसे शुभ योगों में से एक।'
    },
    effects: {
      en: 'Bestows intelligence, fame, wealth, high position, and the person becomes like a lion among people.',
      hi: 'बुद्धिमत्ता, प्रसिद्धि, धन, उच्च पद प्रदान करता है और व्यक्ति लोगों में सिंह के समान हो जाता है।'
    },
    intensity: 'powerful'
  },
  budhaditya: {
    type: 'budhaditya',
    name: { en: 'Budhaditya Yoga', hi: 'बुधादित्य योग' },
    planets: ['sun', 'mercury'],
    description: {
      en: 'Sun and Mercury conjunction in the same house (Mercury not combust).',
      hi: 'सूर्य और बुध एक ही भाव में युति (बुध अस्त नहीं)।'
    },
    effects: {
      en: 'Grants intelligence, analytical mind, fame, good education, and success in communication fields.',
      hi: 'बुद्धिमत्ता, विश्लेषणात्मक मन, प्रसिद्धि, अच्छी शिक्षा और संचार क्षेत्रों में सफलता प्रदान करता है।'
    },
    intensity: 'moderate'
  },
  lakshmi: {
    type: 'lakshmi',
    name: { en: 'Lakshmi Yoga', hi: 'लक्ष्मी योग' },
    planets: ['venus', 'jupiter'],
    description: {
      en: 'Lord of 9th in own/exalted sign, and Venus in Kendra/Trikona. Or Venus-Jupiter conjunction.',
      hi: 'नवमेश स्वराशि/उच्च में, और शुक्र केंद्र/त्रिकोण में। या शुक्र-गुरु युति।'
    },
    effects: {
      en: 'Brings immense wealth, luxury, prosperity, good spouse, and all material comforts.',
      hi: 'अपार धन, विलासिता, समृद्धि, अच्छा जीवनसाथी और सभी भौतिक सुख प्रदान करता है।'
    },
    intensity: 'powerful'
  },
  dhana: {
    type: 'dhana',
    name: { en: 'Dhana Yoga', hi: 'धन योग' },
    planets: [],
    description: {
      en: 'Lords of 2nd and 11th houses in conjunction or mutual aspect, or exchange.',
      hi: 'द्वितीय और एकादश भाव के स्वामी युति, परस्पर दृष्टि, या परिवर्तन में।'
    },
    effects: {
      en: 'Indicates wealth accumulation, good income, financial gains, and prosperity.',
      hi: 'धन संचय, अच्छी आय, वित्तीय लाभ और समृद्धि का संकेत देता है।'
    },
    intensity: 'moderate'
  },
  viparita: {
    type: 'viparita',
    name: { en: 'Viparita Raj Yoga', hi: 'विपरीत राजयोग' },
    planets: [],
    description: {
      en: 'Lords of 6th, 8th, or 12th houses placed in other dusthana houses (6,8,12).',
      hi: 'षष्ठ, अष्टम, या द्वादश भाव के स्वामी अन्य दुस्थान भावों (6,8,12) में।'
    },
    effects: {
      en: 'Success through adversity, gains from enemies/obstacles, overcoming hardships to achieve success.',
      hi: 'विपरीत परिस्थितियों से सफलता, शत्रुओं/बाधाओं से लाभ, कठिनाइयों को पार कर सफलता प्राप्त करना।'
    },
    intensity: 'moderate'
  },
  neech_bhang: {
    type: 'neech_bhang',
    name: { en: 'Neech Bhang Raj Yoga', hi: 'नीच भंग राजयोग' },
    planets: [],
    description: {
      en: 'Debilitated planet\'s debilitation cancelled by specific conditions (lord of debilitation sign aspects, etc.).',
      hi: 'नीच ग्रह की नीचता विशिष्ट शर्तों से निरस्त (नीच राशि स्वामी की दृष्टि आदि)।'
    },
    effects: {
      en: 'Transforms weakness into strength, rise from humble beginnings, eventual success despite initial setbacks.',
      hi: 'कमजोरी को ताकत में बदलता है, साधारण शुरुआत से उदय, प्रारंभिक असफलताओं के बावजूद अंतिम सफलता।'
    },
    intensity: 'powerful'
  }
};

// Kendra houses
export const KENDRA_HOUSES = [1, 4, 7, 10];

// Trikona houses
export const TRIKONA_HOUSES = [1, 5, 9];

// Dusthana houses
export const DUSTHANA_HOUSES = [6, 8, 12];

// Planet own signs
export const OWN_SIGNS: Record<string, number[]> = {
  sun: [4],           // Leo
  moon: [3],          // Cancer
  mars: [0, 7],       // Aries, Scorpio
  mercury: [2, 5],    // Gemini, Virgo
  jupiter: [8, 11],   // Sagittarius, Pisces
  venus: [1, 6],      // Taurus, Libra
  saturn: [9, 10]     // Capricorn, Aquarius
};

// Planet exaltation signs
export const EXALTATION_SIGNS: Record<string, number> = {
  sun: 0,       // Aries
  moon: 1,      // Taurus
  mars: 9,      // Capricorn
  mercury: 5,   // Virgo
  jupiter: 3,   // Cancer
  venus: 11,    // Pisces
  saturn: 6     // Libra
};

// Planet debilitation signs
export const DEBILITATION_SIGNS: Record<string, number> = {
  sun: 6,       // Libra
  moon: 7,      // Scorpio
  mars: 3,      // Cancer
  mercury: 11,  // Pisces
  jupiter: 9,   // Capricorn
  venus: 5,     // Virgo
  saturn: 0     // Aries
};

// Sign lords
export const SIGN_LORDS: Record<number, string> = {
  0: 'mars',     // Aries
  1: 'venus',    // Taurus
  2: 'mercury',  // Gemini
  3: 'moon',     // Cancer
  4: 'sun',      // Leo
  5: 'mercury',  // Virgo
  6: 'venus',    // Libra
  7: 'mars',     // Scorpio
  8: 'jupiter',  // Sagittarius
  9: 'saturn',   // Capricorn
  10: 'saturn',  // Aquarius
  11: 'jupiter'  // Pisces
};

/**
 * Check if planet is in own sign
 */
export function isInOwnSign(planet: string, signIndex: number): boolean {
  return OWN_SIGNS[planet]?.includes(signIndex) || false;
}

/**
 * Check if planet is exalted
 */
export function isExalted(planet: string, signIndex: number): boolean {
  return EXALTATION_SIGNS[planet] === signIndex;
}

/**
 * Check if planet is debilitated
 */
export function isDebilitated(planet: string, signIndex: number): boolean {
  return DEBILITATION_SIGNS[planet] === signIndex;
}

/**
 * Check if planet is in Kendra from another house
 */
export function isInKendraFrom(house1: number, house2: number): boolean {
  const diff = ((house1 - house2 + 12) % 12) + 1;
  return KENDRA_HOUSES.includes(diff);
}

/**
 * Get house number from sign (Whole Sign house system)
 */
export function getHouseFromSign(planetSign: number, ascendantSign: number): number {
  return ((planetSign - ascendantSign + 12) % 12) + 1;
}

/**
 * Check for Raj Yogas in a chart
 */
export function checkRajYogas(planetData: {
  sun: { sign: number; house: number };
  moon: { sign: number; house: number };
  mars: { sign: number; house: number };
  mercury: { sign: number; house: number };
  jupiter: { sign: number; house: number };
  venus: { sign: number; house: number };
  saturn: { sign: number; house: number };
  ascendantSign: number;
}): RajYogaInfo[] {
  const yogas: RajYogaInfo[] = [];

  // Check Gaja Kesari Yoga
  if (isInKendraFrom(planetData.jupiter.house, planetData.moon.house)) {
    yogas.push(OTHER_RAJ_YOGAS.gaja_kesari);
  }

  // Check Panch Mahapurusha Yogas
  // Hamsa Yoga - Jupiter
  if (KENDRA_HOUSES.includes(planetData.jupiter.house) &&
      (isInOwnSign('jupiter', planetData.jupiter.sign) || isExalted('jupiter', planetData.jupiter.sign))) {
    yogas.push(PANCH_MAHAPURUSHA.hamsa);
  }

  // Malavya Yoga - Venus
  if (KENDRA_HOUSES.includes(planetData.venus.house) &&
      (isInOwnSign('venus', planetData.venus.sign) || isExalted('venus', planetData.venus.sign))) {
    yogas.push(PANCH_MAHAPURUSHA.malavya);
  }

  // Ruchaka Yoga - Mars
  if (KENDRA_HOUSES.includes(planetData.mars.house) &&
      (isInOwnSign('mars', planetData.mars.sign) || isExalted('mars', planetData.mars.sign))) {
    yogas.push(PANCH_MAHAPURUSHA.ruchaka);
  }

  // Bhadra Yoga - Mercury
  if (KENDRA_HOUSES.includes(planetData.mercury.house) &&
      (isInOwnSign('mercury', planetData.mercury.sign) || isExalted('mercury', planetData.mercury.sign))) {
    yogas.push(PANCH_MAHAPURUSHA.bhadra);
  }

  // Shasha Yoga - Saturn
  if (KENDRA_HOUSES.includes(planetData.saturn.house) &&
      (isInOwnSign('saturn', planetData.saturn.sign) || isExalted('saturn', planetData.saturn.sign))) {
    yogas.push(PANCH_MAHAPURUSHA.shasha);
  }

  // Budhaditya Yoga - Sun and Mercury in same house
  if (planetData.sun.house === planetData.mercury.house) {
    yogas.push(OTHER_RAJ_YOGAS.budhaditya);
  }

  // Check for Venus-Jupiter together or mutual aspect
  if (planetData.venus.house === planetData.jupiter.house ||
      Math.abs(planetData.venus.house - planetData.jupiter.house) === 6) {
    yogas.push(OTHER_RAJ_YOGAS.lakshmi);
  }

  // Viparita Raj Yoga - 6th, 8th, 12th lords in dusthanas
  const lord6 = SIGN_LORDS[(planetData.ascendantSign + 5) % 12];
  const lord8 = SIGN_LORDS[(planetData.ascendantSign + 7) % 12];
  const lord12 = SIGN_LORDS[(planetData.ascendantSign + 11) % 12];

  const lord6House = planetData[lord6 as keyof typeof planetData] as { house: number };
  const lord8House = planetData[lord8 as keyof typeof planetData] as { house: number };
  const lord12House = planetData[lord12 as keyof typeof planetData] as { house: number };

  if ((lord6House && DUSTHANA_HOUSES.includes(lord6House.house)) ||
      (lord8House && DUSTHANA_HOUSES.includes(lord8House.house)) ||
      (lord12House && DUSTHANA_HOUSES.includes(lord12House.house))) {
    yogas.push(OTHER_RAJ_YOGAS.viparita);
  }

  // Check for Neech Bhang Raj Yoga
  const planets = ['sun', 'moon', 'mars', 'mercury', 'jupiter', 'venus', 'saturn'] as const;
  for (const planet of planets) {
    const pData = planetData[planet];
    if (isDebilitated(planet, pData.sign)) {
      // Check if debilitation lord is in Kendra from Lagna
      const debLord = SIGN_LORDS[DEBILITATION_SIGNS[planet]];
      const debLordData = planetData[debLord as keyof typeof planetData] as { house: number };
      if (debLordData && KENDRA_HOUSES.includes(debLordData.house)) {
        yogas.push(OTHER_RAJ_YOGAS.neech_bhang);
        break;
      }
    }
  }

  // Dhana Yoga - Lords of 2 and 11 together or exchange
  const lord2 = SIGN_LORDS[(planetData.ascendantSign + 1) % 12];
  const lord11 = SIGN_LORDS[(planetData.ascendantSign + 10) % 12];
  const lord2Data = planetData[lord2 as keyof typeof planetData] as { house: number };
  const lord11Data = planetData[lord11 as keyof typeof planetData] as { house: number };

  if (lord2Data && lord11Data && lord2Data.house === lord11Data.house) {
    yogas.push(OTHER_RAJ_YOGAS.dhana);
  }

  return yogas;
}

// Result interpretation
export const RESULT_INTERPRETATION = {
  none: {
    title: { en: 'No Major Raj Yoga', hi: 'कोई प्रमुख राजयोग नहीं' },
    description: {
      en: 'No major Raj Yoga combinations found in your chart. However, other favorable combinations may still be present.',
      hi: 'आपकी कुंडली में कोई प्रमुख राजयोग नहीं मिला। हालांकि, अन्य अनुकूल संयोजन अभी भी मौजूद हो सकते हैं।'
    }
  },
  single: {
    title: { en: 'Raj Yoga Present', hi: 'राजयोग मौजूद' },
    description: {
      en: 'You have one Raj Yoga in your chart, indicating potential for success and recognition.',
      hi: 'आपकी कुंडली में एक राजयोग है, जो सफलता और मान्यता की संभावना दर्शाता है।'
    }
  },
  multiple: {
    title: { en: 'Multiple Raj Yogas!', hi: 'एकाधिक राजयोग!' },
    description: {
      en: 'Exceptional! Multiple Raj Yogas indicate great potential for success, fame, and prosperity.',
      hi: 'असाधारण! एकाधिक राजयोग सफलता, प्रसिद्धि और समृद्धि की महान संभावना दर्शाते हैं।'
    }
  }
};
