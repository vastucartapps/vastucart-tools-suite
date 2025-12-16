/**
 * Comprehensive Yoga Calculator Data
 *
 * Includes all major yogas:
 * - Raj Yogas (Beneficial)
 * - Challenging Yogas (Guru Chandal, Angarak)
 * - Exchange Yogas (Parivartan)
 */

export type YogaCategory = 'raj' | 'challenging' | 'exchange';

export type YogaType =
  // Raj Yogas
  | 'gaja_kesari'
  | 'hamsa'
  | 'malavya'
  | 'ruchaka'
  | 'bhadra'
  | 'shasha'
  | 'budhaditya'
  | 'lakshmi'
  | 'dhana'
  | 'viparita'
  | 'neech_bhang'
  // Challenging Yogas
  | 'guru_chandal'
  | 'angarak'
  // Exchange Yogas
  | 'maha_parivartan'
  | 'khala_parivartan'
  | 'dainya_parivartan';

export interface YogaInfo {
  type: YogaType;
  category: YogaCategory;
  name: { en: string; hi: string };
  planets: string[];
  description: { en: string; hi: string };
  effects: { en: string; hi: string };
  remedies?: { en: string; hi: string };
  intensity: 'powerful' | 'moderate' | 'mild';
  isPositive: boolean;
}

// Kendra houses (1, 4, 7, 10)
export const KENDRA_HOUSES = [1, 4, 7, 10];

// Trikona houses (1, 5, 9)
export const TRIKONA_HOUSES = [1, 5, 9];

// Dusthana houses (6, 8, 12)
export const DUSTHANA_HOUSES = [6, 8, 12];

// Planet own signs (0-indexed: Aries=0, Taurus=1, etc.)
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

// Sign names for display
export const SIGN_NAMES: Record<number, { en: string; hi: string }> = {
  0: { en: 'Aries', hi: 'मेष' },
  1: { en: 'Taurus', hi: 'वृषभ' },
  2: { en: 'Gemini', hi: 'मिथुन' },
  3: { en: 'Cancer', hi: 'कर्क' },
  4: { en: 'Leo', hi: 'सिंह' },
  5: { en: 'Virgo', hi: 'कन्या' },
  6: { en: 'Libra', hi: 'तुला' },
  7: { en: 'Scorpio', hi: 'वृश्चिक' },
  8: { en: 'Sagittarius', hi: 'धनु' },
  9: { en: 'Capricorn', hi: 'मकर' },
  10: { en: 'Aquarius', hi: 'कुंभ' },
  11: { en: 'Pisces', hi: 'मीन' }
};

// ==================== RAJ YOGAS ====================

export const RAJ_YOGAS: Record<string, YogaInfo> = {
  gaja_kesari: {
    type: 'gaja_kesari',
    category: 'raj',
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
    intensity: 'powerful',
    isPositive: true
  },
  hamsa: {
    type: 'hamsa',
    category: 'raj',
    name: { en: 'Hamsa Yoga', hi: 'हंस योग' },
    planets: ['jupiter'],
    description: {
      en: 'Jupiter in own sign (Sagittarius/Pisces) or exalted (Cancer) in a Kendra house (1,4,7,10).',
      hi: 'गुरु स्वराशि (धनु/मीन) या उच्च (कर्क) में केंद्र भाव (1,4,7,10) में।'
    },
    effects: {
      en: 'Brings wisdom, spirituality, respect, good fortune, and virtuous nature. Success in education, teaching.',
      hi: 'ज्ञान, आध्यात्मिकता, सम्मान, सौभाग्य और सदाचार प्रदान करता है। शिक्षा, शिक्षण में सफलता।'
    },
    intensity: 'powerful',
    isPositive: true
  },
  malavya: {
    type: 'malavya',
    category: 'raj',
    name: { en: 'Malavya Yoga', hi: 'मालव्य योग' },
    planets: ['venus'],
    description: {
      en: 'Venus in own sign (Taurus/Libra) or exalted (Pisces) in a Kendra house (1,4,7,10).',
      hi: 'शुक्र स्वराशि (वृषभ/तुला) या उच्च (मीन) में केंद्र भाव (1,4,7,10) में।'
    },
    effects: {
      en: 'Bestows beauty, artistic abilities, luxury, romance, wealth, and harmonious relationships.',
      hi: 'सुंदरता, कलात्मक क्षमताएं, विलासिता, रोमांस, धन और सामंजस्यपूर्ण संबंध प्रदान करता है।'
    },
    intensity: 'powerful',
    isPositive: true
  },
  ruchaka: {
    type: 'ruchaka',
    category: 'raj',
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
    intensity: 'powerful',
    isPositive: true
  },
  bhadra: {
    type: 'bhadra',
    category: 'raj',
    name: { en: 'Bhadra Yoga', hi: 'भद्र योग' },
    planets: ['mercury'],
    description: {
      en: 'Mercury in own sign (Gemini/Virgo) or exalted (Virgo) in a Kendra house (1,4,7,10).',
      hi: 'बुध स्वराशि (मिथुन/कन्या) या उच्च (कन्या) में केंद्र भाव (1,4,7,10) में।'
    },
    effects: {
      en: 'Gives intelligence, communication skills, business acumen, eloquence, and success in writing/trading.',
      hi: 'बुद्धिमत्ता, संचार कौशल, व्यापार कुशलता, वाक्पटुता और लेखन/व्यापार में सफलता।'
    },
    intensity: 'powerful',
    isPositive: true
  },
  shasha: {
    type: 'shasha',
    category: 'raj',
    name: { en: 'Shasha Yoga', hi: 'शश योग' },
    planets: ['saturn'],
    description: {
      en: 'Saturn in own sign (Capricorn/Aquarius) or exalted (Libra) in a Kendra house (1,4,7,10).',
      hi: 'शनि स्वराशि (मकर/कुंभ) या उच्च (तुला) में केंद्र भाव (1,4,7,10) में।'
    },
    effects: {
      en: 'Provides authority, discipline, long life, property, and success through hard work.',
      hi: 'अधिकार, अनुशासन, दीर्घायु, संपत्ति और कड़ी मेहनत से सफलता प्रदान करता है।'
    },
    intensity: 'powerful',
    isPositive: true
  },
  budhaditya: {
    type: 'budhaditya',
    category: 'raj',
    name: { en: 'Budhaditya Yoga', hi: 'बुधादित्य योग' },
    planets: ['sun', 'mercury'],
    description: {
      en: 'Sun and Mercury conjunction in the same house (Mercury not combust).',
      hi: 'सूर्य और बुध एक ही भाव में युति (बुध अस्त नहीं)।'
    },
    effects: {
      en: 'Grants intelligence, analytical mind, fame, good education, and success in communication.',
      hi: 'बुद्धिमत्ता, विश्लेषणात्मक मन, प्रसिद्धि, अच्छी शिक्षा और संचार में सफलता।'
    },
    intensity: 'moderate',
    isPositive: true
  },
  lakshmi: {
    type: 'lakshmi',
    category: 'raj',
    name: { en: 'Lakshmi Yoga', hi: 'लक्ष्मी योग' },
    planets: ['venus', 'jupiter'],
    description: {
      en: 'Venus-Jupiter conjunction or mutual aspect. Also when 9th lord is strong with Venus in Kendra/Trikona.',
      hi: 'शुक्र-गुरु युति या परस्पर दृष्टि। नवमेश बलवान और शुक्र केंद्र/त्रिकोण में।'
    },
    effects: {
      en: 'Brings immense wealth, luxury, prosperity, good spouse, and all material comforts.',
      hi: 'अपार धन, विलासिता, समृद्धि, अच्छा जीवनसाथी और सभी भौतिक सुख प्रदान करता है।'
    },
    intensity: 'powerful',
    isPositive: true
  },
  dhana: {
    type: 'dhana',
    category: 'raj',
    name: { en: 'Dhana Yoga', hi: 'धन योग' },
    planets: [],
    description: {
      en: 'Lords of 2nd and 11th houses in conjunction, mutual aspect, or exchange.',
      hi: 'द्वितीय और एकादश भाव के स्वामी युति, परस्पर दृष्टि, या परिवर्तन में।'
    },
    effects: {
      en: 'Indicates wealth accumulation, good income, financial gains, and prosperity.',
      hi: 'धन संचय, अच्छी आय, वित्तीय लाभ और समृद्धि का संकेत देता है।'
    },
    intensity: 'moderate',
    isPositive: true
  },
  viparita: {
    type: 'viparita',
    category: 'raj',
    name: { en: 'Viparita Raj Yoga', hi: 'विपरीत राजयोग' },
    planets: [],
    description: {
      en: 'Lords of 6th, 8th, or 12th houses placed in other dusthana houses (6,8,12).',
      hi: 'षष्ठ, अष्टम, या द्वादश भाव के स्वामी अन्य दुस्थान भावों (6,8,12) में।'
    },
    effects: {
      en: 'Success through adversity, gains from obstacles, overcoming hardships to achieve success.',
      hi: 'विपरीत परिस्थितियों से सफलता, बाधाओं से लाभ, कठिनाइयों को पार कर सफलता।'
    },
    intensity: 'moderate',
    isPositive: true
  },
  neech_bhang: {
    type: 'neech_bhang',
    category: 'raj',
    name: { en: 'Neech Bhang Raj Yoga', hi: 'नीच भंग राजयोग' },
    planets: [],
    description: {
      en: 'Debilitated planet\'s debilitation cancelled (lord of debilitation sign in Kendra, etc.).',
      hi: 'नीच ग्रह की नीचता निरस्त (नीच राशि स्वामी केंद्र में आदि)।'
    },
    effects: {
      en: 'Transforms weakness into strength, rise from humble beginnings, eventual success.',
      hi: 'कमजोरी को ताकत में बदलता है, साधारण शुरुआत से उदय, अंतिम सफलता।'
    },
    intensity: 'powerful',
    isPositive: true
  }
};

// ==================== CHALLENGING YOGAS ====================

export const CHALLENGING_YOGAS: Record<string, YogaInfo> = {
  guru_chandal: {
    type: 'guru_chandal',
    category: 'challenging',
    name: { en: 'Guru Chandal Yoga', hi: 'गुरु चांडाल योग' },
    planets: ['jupiter', 'rahu'],
    description: {
      en: 'Jupiter conjunct with Rahu or Ketu. Jupiter\'s wisdom is clouded by Rahu\'s illusions.',
      hi: 'गुरु राहु या केतु के साथ युति में। गुरु का ज्ञान राहु के भ्रम से ढका जाता है।'
    },
    effects: {
      en: 'May cause confusion in beliefs, unconventional thinking, challenges with teachers/gurus, and religious conflicts. Can also give unique spiritual insights.',
      hi: 'विश्वासों में भ्रम, अपरंपरागत सोच, गुरुओं से चुनौतियां, और धार्मिक संघर्ष। अद्वितीय आध्यात्मिक अंतर्दृष्टि भी दे सकता है।'
    },
    remedies: {
      en: 'Worship Lord Vishnu, donate yellow items on Thursday, respect teachers and elders, chant Jupiter mantras.',
      hi: 'भगवान विष्णु की पूजा करें, गुरुवार को पीली वस्तुएं दान करें, शिक्षकों और बड़ों का सम्मान करें, गुरु मंत्र जाप।'
    },
    intensity: 'moderate',
    isPositive: false
  },
  angarak: {
    type: 'angarak',
    category: 'challenging',
    name: { en: 'Angarak Yoga', hi: 'अंगारक योग' },
    planets: ['mars', 'rahu'],
    description: {
      en: 'Mars conjunct with Rahu or Ketu. Mars\' energy becomes volatile and unpredictable.',
      hi: 'मंगल राहु या केतु के साथ युति में। मंगल की ऊर्जा अस्थिर और अप्रत्याशित हो जाती है।'
    },
    effects: {
      en: 'Can cause aggression, accidents, sudden conflicts, blood-related issues, and impulsive decisions. Also gives courage and ability to overcome enemies.',
      hi: 'आक्रामकता, दुर्घटनाएं, अचानक संघर्ष, रक्त संबंधी समस्याएं, और आवेगी निर्णय। शत्रुओं पर विजय की क्षमता भी देता है।'
    },
    remedies: {
      en: 'Worship Lord Hanuman, donate red items on Tuesday, avoid conflicts, practice anger management, chant Mars mantras.',
      hi: 'हनुमान जी की पूजा करें, मंगलवार को लाल वस्तुएं दान करें, संघर्षों से बचें, क्रोध प्रबंधन का अभ्यास करें, मंगल मंत्र जाप।'
    },
    intensity: 'powerful',
    isPositive: false
  }
};

// ==================== EXCHANGE YOGAS (PARIVARTAN) ====================

export const EXCHANGE_YOGAS: Record<string, YogaInfo> = {
  maha_parivartan: {
    type: 'maha_parivartan',
    category: 'exchange',
    name: { en: 'Maha Parivartan Yoga', hi: 'महा परिवर्तन योग' },
    planets: [],
    description: {
      en: 'Exchange between lords of Kendra (1,4,7,10) and/or Trikona (1,5,9) houses. Most auspicious exchange.',
      hi: 'केंद्र (1,4,7,10) और/या त्रिकोण (1,5,9) भावों के स्वामियों का परिवर्तन। सबसे शुभ परिवर्तन।'
    },
    effects: {
      en: 'Exceptional success, high position, wealth, fame, and royal status. Very powerful raj yoga effect.',
      hi: 'असाधारण सफलता, उच्च पद, धन, प्रसिद्धि, और राजसी स्थिति। बहुत शक्तिशाली राजयोग प्रभाव।'
    },
    intensity: 'powerful',
    isPositive: true
  },
  khala_parivartan: {
    type: 'khala_parivartan',
    category: 'exchange',
    name: { en: 'Khala Parivartan Yoga', hi: 'खल परिवर्तन योग' },
    planets: [],
    description: {
      en: 'Exchange involving the 3rd house lord. Mixed results depending on other house involved.',
      hi: 'तृतीय भाव के स्वामी का परिवर्तन। अन्य भाव के अनुसार मिश्रित परिणाम।'
    },
    effects: {
      en: 'Courage and initiative, but may face sibling issues. Results depend on which house exchanges with 3rd.',
      hi: 'साहस और पहल, लेकिन भाई-बहन की समस्याएं हो सकती हैं। परिणाम 3वें के साथ किस भाव का आदान-प्रदान पर निर्भर।'
    },
    intensity: 'mild',
    isPositive: true
  },
  dainya_parivartan: {
    type: 'dainya_parivartan',
    category: 'exchange',
    name: { en: 'Dainya Parivartan Yoga', hi: 'दैन्य परिवर्तन योग' },
    planets: [],
    description: {
      en: 'Exchange involving lords of 6th, 8th, or 12th house with other houses. Challenging exchange.',
      hi: 'षष्ठ, अष्टम, या द्वादश भाव के स्वामी का अन्य भावों के साथ परिवर्तन। कठिन परिवर्तन।'
    },
    effects: {
      en: 'May bring health issues, debts, enemies, losses, or transformative experiences. Requires remedies.',
      hi: 'स्वास्थ्य समस्याएं, कर्ज, शत्रु, हानि, या परिवर्तनकारी अनुभव ला सकता है। उपाय आवश्यक।'
    },
    remedies: {
      en: 'Worship the planets involved, perform charity, recite mantras of affected house lords.',
      hi: 'संबंधित ग्रहों की पूजा करें, दान करें, प्रभावित भाव स्वामियों के मंत्र जाप करें।'
    },
    intensity: 'moderate',
    isPositive: false
  }
};

// ==================== HELPER FUNCTIONS ====================

export function isInOwnSign(planet: string, signIndex: number): boolean {
  return OWN_SIGNS[planet]?.includes(signIndex) || false;
}

export function isExalted(planet: string, signIndex: number): boolean {
  return EXALTATION_SIGNS[planet] === signIndex;
}

export function isDebilitated(planet: string, signIndex: number): boolean {
  return DEBILITATION_SIGNS[planet] === signIndex;
}

export function isInKendraFrom(house1: number, house2: number): boolean {
  const diff = ((house1 - house2 + 12) % 12) + 1;
  return KENDRA_HOUSES.includes(diff);
}

export function isSameHouse(house1: number, house2: number): boolean {
  return house1 === house2;
}

// Check if two planets are in conjunction (same house or within orb)
export function areConjunct(house1: number, house2: number): boolean {
  return house1 === house2;
}

// ==================== MAIN YOGA CHECKER ====================

export interface PlanetData {
  sign: number;
  house: number;
}

export interface ChartData {
  sun: PlanetData;
  moon: PlanetData;
  mars: PlanetData;
  mercury: PlanetData;
  jupiter: PlanetData;
  venus: PlanetData;
  saturn: PlanetData;
  rahu: PlanetData;
  ketu: PlanetData;
  ascendantSign: number;
}

export interface YogaResult extends YogaInfo {
  details?: { en: string; hi: string };
}

export function checkAllYogas(chartData: ChartData): YogaResult[] {
  const yogas: YogaResult[] = [];

  // ==================== RAJ YOGAS ====================

  // 1. Gaja Kesari Yoga
  if (isInKendraFrom(chartData.jupiter.house, chartData.moon.house)) {
    yogas.push({
      ...RAJ_YOGAS.gaja_kesari,
      details: {
        en: `Jupiter in house ${chartData.jupiter.house} is in Kendra from Moon in house ${chartData.moon.house}`,
        hi: `गुरु भाव ${chartData.jupiter.house} में, चंद्र भाव ${chartData.moon.house} से केंद्र में`
      }
    });
  }

  // 2. Hamsa Yoga - Jupiter
  if (KENDRA_HOUSES.includes(chartData.jupiter.house) &&
      (isInOwnSign('jupiter', chartData.jupiter.sign) || isExalted('jupiter', chartData.jupiter.sign))) {
    yogas.push({
      ...RAJ_YOGAS.hamsa,
      details: {
        en: `Jupiter in ${isExalted('jupiter', chartData.jupiter.sign) ? 'exalted' : 'own'} sign in Kendra house ${chartData.jupiter.house}`,
        hi: `गुरु ${isExalted('jupiter', chartData.jupiter.sign) ? 'उच्च' : 'स्वराशि'} में केंद्र भाव ${chartData.jupiter.house} में`
      }
    });
  }

  // 3. Malavya Yoga - Venus
  if (KENDRA_HOUSES.includes(chartData.venus.house) &&
      (isInOwnSign('venus', chartData.venus.sign) || isExalted('venus', chartData.venus.sign))) {
    yogas.push({
      ...RAJ_YOGAS.malavya,
      details: {
        en: `Venus in ${isExalted('venus', chartData.venus.sign) ? 'exalted' : 'own'} sign in Kendra house ${chartData.venus.house}`,
        hi: `शुक्र ${isExalted('venus', chartData.venus.sign) ? 'उच्च' : 'स्वराशि'} में केंद्र भाव ${chartData.venus.house} में`
      }
    });
  }

  // 4. Ruchaka Yoga - Mars
  if (KENDRA_HOUSES.includes(chartData.mars.house) &&
      (isInOwnSign('mars', chartData.mars.sign) || isExalted('mars', chartData.mars.sign))) {
    yogas.push({
      ...RAJ_YOGAS.ruchaka,
      details: {
        en: `Mars in ${isExalted('mars', chartData.mars.sign) ? 'exalted' : 'own'} sign in Kendra house ${chartData.mars.house}`,
        hi: `मंगल ${isExalted('mars', chartData.mars.sign) ? 'उच्च' : 'स्वराशि'} में केंद्र भाव ${chartData.mars.house} में`
      }
    });
  }

  // 5. Bhadra Yoga - Mercury
  if (KENDRA_HOUSES.includes(chartData.mercury.house) &&
      (isInOwnSign('mercury', chartData.mercury.sign) || isExalted('mercury', chartData.mercury.sign))) {
    yogas.push({
      ...RAJ_YOGAS.bhadra,
      details: {
        en: `Mercury in ${isExalted('mercury', chartData.mercury.sign) ? 'exalted' : 'own'} sign in Kendra house ${chartData.mercury.house}`,
        hi: `बुध ${isExalted('mercury', chartData.mercury.sign) ? 'उच्च' : 'स्वराशि'} में केंद्र भाव ${chartData.mercury.house} में`
      }
    });
  }

  // 6. Shasha Yoga - Saturn
  if (KENDRA_HOUSES.includes(chartData.saturn.house) &&
      (isInOwnSign('saturn', chartData.saturn.sign) || isExalted('saturn', chartData.saturn.sign))) {
    yogas.push({
      ...RAJ_YOGAS.shasha,
      details: {
        en: `Saturn in ${isExalted('saturn', chartData.saturn.sign) ? 'exalted' : 'own'} sign in Kendra house ${chartData.saturn.house}`,
        hi: `शनि ${isExalted('saturn', chartData.saturn.sign) ? 'उच्च' : 'स्वराशि'} में केंद्र भाव ${chartData.saturn.house} में`
      }
    });
  }

  // 7. Budhaditya Yoga - Sun and Mercury in same house
  if (chartData.sun.house === chartData.mercury.house) {
    yogas.push({
      ...RAJ_YOGAS.budhaditya,
      details: {
        en: `Sun and Mercury both in house ${chartData.sun.house}`,
        hi: `सूर्य और बुध दोनों भाव ${chartData.sun.house} में`
      }
    });
  }

  // 8. Lakshmi Yoga - Venus-Jupiter conjunction or aspect
  if (chartData.venus.house === chartData.jupiter.house ||
      Math.abs(chartData.venus.house - chartData.jupiter.house) === 6) {
    yogas.push({
      ...RAJ_YOGAS.lakshmi,
      details: {
        en: chartData.venus.house === chartData.jupiter.house
          ? `Venus and Jupiter conjunct in house ${chartData.venus.house}`
          : `Venus in house ${chartData.venus.house} aspects Jupiter in house ${chartData.jupiter.house}`,
        hi: chartData.venus.house === chartData.jupiter.house
          ? `शुक्र और गुरु भाव ${chartData.venus.house} में युति`
          : `शुक्र भाव ${chartData.venus.house} से गुरु भाव ${chartData.jupiter.house} को देखता है`
      }
    });
  }

  // 9. Viparita Raj Yoga
  const lord6 = SIGN_LORDS[(chartData.ascendantSign + 5) % 12];
  const lord8 = SIGN_LORDS[(chartData.ascendantSign + 7) % 12];
  const lord12 = SIGN_LORDS[(chartData.ascendantSign + 11) % 12];

  const lord6House = chartData[lord6 as keyof ChartData] as PlanetData;
  const lord8House = chartData[lord8 as keyof ChartData] as PlanetData;
  const lord12House = chartData[lord12 as keyof ChartData] as PlanetData;

  if ((lord6House && DUSTHANA_HOUSES.includes(lord6House.house)) ||
      (lord8House && DUSTHANA_HOUSES.includes(lord8House.house)) ||
      (lord12House && DUSTHANA_HOUSES.includes(lord12House.house))) {
    yogas.push({
      ...RAJ_YOGAS.viparita,
      details: {
        en: 'Dusthana lord placed in dusthana house',
        hi: 'दुस्थान स्वामी दुस्थान भाव में'
      }
    });
  }

  // 10. Neech Bhang Raj Yoga
  const planets = ['sun', 'moon', 'mars', 'mercury', 'jupiter', 'venus', 'saturn'] as const;
  for (const planet of planets) {
    const pData = chartData[planet];
    if (isDebilitated(planet, pData.sign)) {
      const debLord = SIGN_LORDS[DEBILITATION_SIGNS[planet]];
      const debLordData = chartData[debLord as keyof ChartData] as PlanetData;
      if (debLordData && KENDRA_HOUSES.includes(debLordData.house)) {
        yogas.push({
          ...RAJ_YOGAS.neech_bhang,
          details: {
            en: `${planet.charAt(0).toUpperCase() + planet.slice(1)} debilitated, but cancellation lord in Kendra`,
            hi: `${planet} नीच, लेकिन भंग स्वामी केंद्र में`
          }
        });
        break;
      }
    }
  }

  // 11. Dhana Yoga
  const lord2 = SIGN_LORDS[(chartData.ascendantSign + 1) % 12];
  const lord11 = SIGN_LORDS[(chartData.ascendantSign + 10) % 12];
  const lord2Data = chartData[lord2 as keyof ChartData] as PlanetData;
  const lord11Data = chartData[lord11 as keyof ChartData] as PlanetData;

  if (lord2Data && lord11Data && lord2Data.house === lord11Data.house) {
    yogas.push({
      ...RAJ_YOGAS.dhana,
      details: {
        en: `2nd and 11th house lords conjunct in house ${lord2Data.house}`,
        hi: `द्वितीय और एकादश भाव स्वामी भाव ${lord2Data.house} में युति`
      }
    });
  }

  // ==================== CHALLENGING YOGAS ====================

  // 12. Guru Chandal Yoga - Jupiter with Rahu or Ketu
  if (chartData.jupiter.house === chartData.rahu.house) {
    yogas.push({
      ...CHALLENGING_YOGAS.guru_chandal,
      details: {
        en: `Jupiter conjunct Rahu in house ${chartData.jupiter.house}`,
        hi: `गुरु राहु के साथ भाव ${chartData.jupiter.house} में युति`
      }
    });
  } else if (chartData.jupiter.house === chartData.ketu.house) {
    yogas.push({
      ...CHALLENGING_YOGAS.guru_chandal,
      details: {
        en: `Jupiter conjunct Ketu in house ${chartData.jupiter.house}`,
        hi: `गुरु केतु के साथ भाव ${chartData.jupiter.house} में युति`
      }
    });
  }

  // 13. Angarak Yoga - Mars with Rahu or Ketu
  if (chartData.mars.house === chartData.rahu.house) {
    yogas.push({
      ...CHALLENGING_YOGAS.angarak,
      details: {
        en: `Mars conjunct Rahu in house ${chartData.mars.house}`,
        hi: `मंगल राहु के साथ भाव ${chartData.mars.house} में युति`
      }
    });
  } else if (chartData.mars.house === chartData.ketu.house) {
    yogas.push({
      ...CHALLENGING_YOGAS.angarak,
      details: {
        en: `Mars conjunct Ketu in house ${chartData.mars.house}`,
        hi: `मंगल केतु के साथ भाव ${chartData.mars.house} में युति`
      }
    });
  }

  // ==================== PARIVARTAN (EXCHANGE) YOGAS ====================

  // Check all possible planetary exchanges
  const allPlanets = ['sun', 'moon', 'mars', 'mercury', 'jupiter', 'venus', 'saturn'] as const;

  for (let i = 0; i < allPlanets.length; i++) {
    for (let j = i + 1; j < allPlanets.length; j++) {
      const planet1 = allPlanets[i];
      const planet2 = allPlanets[j];
      const p1Data = chartData[planet1];
      const p2Data = chartData[planet2];

      // Check if planet1 is in planet2's sign AND planet2 is in planet1's sign
      const p1InP2Sign = OWN_SIGNS[planet2]?.includes(p1Data.sign);
      const p2InP1Sign = OWN_SIGNS[planet1]?.includes(p2Data.sign);

      if (p1InP2Sign && p2InP1Sign) {
        // This is a Parivartan Yoga! Determine the type
        const house1 = p1Data.house;
        const house2 = p2Data.house;

        // Check if it's Maha Parivartan (Kendra/Trikona exchange)
        const isKendraTrikona1 = KENDRA_HOUSES.includes(house1) || TRIKONA_HOUSES.includes(house1);
        const isKendraTrikona2 = KENDRA_HOUSES.includes(house2) || TRIKONA_HOUSES.includes(house2);
        const isDusthana1 = DUSTHANA_HOUSES.includes(house1);
        const isDusthana2 = DUSTHANA_HOUSES.includes(house2);
        const isThird1 = house1 === 3;
        const isThird2 = house2 === 3;

        if (isKendraTrikona1 && isKendraTrikona2 && !isDusthana1 && !isDusthana2) {
          // Maha Parivartan - Exchange between Kendra/Trikona lords
          yogas.push({
            ...EXCHANGE_YOGAS.maha_parivartan,
            planets: [planet1, planet2],
            details: {
              en: `${planet1.charAt(0).toUpperCase() + planet1.slice(1)} and ${planet2.charAt(0).toUpperCase() + planet2.slice(1)} exchange signs (houses ${house1} and ${house2})`,
              hi: `${planet1} और ${planet2} का राशि परिवर्तन (भाव ${house1} और ${house2})`
            }
          });
        } else if (isDusthana1 || isDusthana2) {
          // Dainya Parivartan - Exchange involving 6/8/12
          yogas.push({
            ...EXCHANGE_YOGAS.dainya_parivartan,
            planets: [planet1, planet2],
            details: {
              en: `${planet1.charAt(0).toUpperCase() + planet1.slice(1)} and ${planet2.charAt(0).toUpperCase() + planet2.slice(1)} exchange signs (houses ${house1} and ${house2}, dusthana involved)`,
              hi: `${planet1} और ${planet2} का राशि परिवर्तन (भाव ${house1} और ${house2}, दुस्थान शामिल)`
            }
          });
        } else if (isThird1 || isThird2) {
          // Khala Parivartan - Exchange involving 3rd house
          yogas.push({
            ...EXCHANGE_YOGAS.khala_parivartan,
            planets: [planet1, planet2],
            details: {
              en: `${planet1.charAt(0).toUpperCase() + planet1.slice(1)} and ${planet2.charAt(0).toUpperCase() + planet2.slice(1)} exchange signs (houses ${house1} and ${house2}, 3rd house involved)`,
              hi: `${planet1} और ${planet2} का राशि परिवर्तन (भाव ${house1} और ${house2}, तृतीय भाव शामिल)`
            }
          });
        }
      }
    }
  }

  return yogas;
}

// Result interpretation
export const RESULT_INTERPRETATION = {
  none: {
    title: { en: 'No Major Yogas Found', hi: 'कोई प्रमुख योग नहीं' },
    description: {
      en: 'No major yogas detected in your chart. Other favorable combinations may still be present.',
      hi: 'आपकी कुंडली में कोई प्रमुख योग नहीं मिला। अन्य अनुकूल संयोजन अभी भी मौजूद हो सकते हैं।'
    }
  },
  positive_only: {
    title: { en: 'Beneficial Yogas Present', hi: 'शुभ योग मौजूद' },
    description: {
      en: 'Your chart contains beneficial yogas indicating success and prosperity.',
      hi: 'आपकी कुंडली में शुभ योग हैं जो सफलता और समृद्धि का संकेत देते हैं।'
    }
  },
  challenging_only: {
    title: { en: 'Challenging Yogas Present', hi: 'चुनौतीपूर्ण योग मौजूद' },
    description: {
      en: 'Your chart contains some challenging yogas. Remedies can help mitigate their effects.',
      hi: 'आपकी कुंडली में कुछ चुनौतीपूर्ण योग हैं। उपाय उनके प्रभावों को कम करने में मदद कर सकते हैं।'
    }
  },
  mixed: {
    title: { en: 'Mixed Yoga Combinations', hi: 'मिश्रित योग संयोजन' },
    description: {
      en: 'Your chart contains both beneficial and challenging yogas. Positive yogas can help overcome challenges.',
      hi: 'आपकी कुंडली में शुभ और चुनौतीपूर्ण दोनों योग हैं। सकारात्मक योग चुनौतियों को पार करने में मदद कर सकते हैं।'
    }
  }
};
