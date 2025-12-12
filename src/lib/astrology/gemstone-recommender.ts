/**
 * Gemstone Recommender
 * Full Vedic astrology-based gemstone recommendations
 */

import { calculateFullChart, type BirthDetails, type FullChartData } from './index';
import { ZODIAC_SIGNS, PLANETS } from './constants';

export interface BilingualText {
  en: string;
  hi: string;
}

export interface GemstoneInfo {
  name: BilingualText;
  alternativeName: BilingualText;
  color: string;
  planet: string;
  planetName: BilingualText;
  metal: BilingualText;
  finger: BilingualText;
  day: BilingualText;
  weight: BilingualText;
  mantra: BilingualText;
  benefits: BilingualText[];
  cautions: BilingualText[];
}

export interface GemstoneRecommendation {
  gemstone: GemstoneInfo;
  reason: BilingualText;
  priority: 'primary' | 'secondary' | 'alternative';
  planetStrength: 'strong' | 'moderate' | 'weak';
  shouldWear: boolean;
}

export interface GemstoneResult {
  // Ascendant info
  ascendant: {
    sign: typeof ZODIAC_SIGNS[number];
    lord: string;
    lordPosition: {
      sign: typeof ZODIAC_SIGNS[number];
      house: number;
    };
  };

  // Moon sign (Rashi)
  moonSign: {
    sign: typeof ZODIAC_SIGNS[number];
    nakshatra: string;
  };

  // Primary gemstone recommendation
  primaryGemstone: GemstoneRecommendation;

  // Secondary/alternative recommendations
  secondaryGemstones: GemstoneRecommendation[];

  // Gemstones to avoid
  gemstonesToAvoid: {
    gemstone: GemstoneInfo;
    reason: BilingualText;
  }[];

  // Wearing instructions
  wearingInstructions: BilingualText;

  // General guidance
  generalGuidance: BilingualText;

  // Full chart data
  chartData: FullChartData;
}

// Gemstone data for each planet
const GEMSTONES: Record<string, GemstoneInfo> = {
  sun: {
    name: { en: 'Ruby', hi: 'माणिक्य' },
    alternativeName: { en: 'Manikya', hi: 'माणिक' },
    color: '#E91E63',
    planet: 'sun',
    planetName: { en: 'Sun', hi: 'सूर्य' },
    metal: { en: 'Gold', hi: 'सोना' },
    finger: { en: 'Ring finger', hi: 'अनामिका (रिंग फिंगर)' },
    day: { en: 'Sunday morning during Shukla Paksha', hi: 'शुक्ल पक्ष में रविवार सुबह' },
    weight: { en: '3-6 carats minimum', hi: 'कम से कम 3-6 कैरेट' },
    mantra: { en: 'Om Suryaya Namaha (108 times)', hi: 'ॐ सूर्याय नमः (108 बार)' },
    benefits: [
      { en: 'Boosts confidence and leadership', hi: 'आत्मविश्वास और नेतृत्व बढ़ाता है' },
      { en: 'Improves health and vitality', hi: 'स्वास्थ्य और जीवन शक्ति में सुधार' },
      { en: 'Enhances career and authority', hi: 'करियर और अधिकार बढ़ाता है' },
      { en: 'Strengthens father relationship', hi: 'पिता से संबंध मजबूत करता है' },
    ],
    cautions: [
      { en: 'Avoid if Sun is malefic in chart', hi: 'यदि कुंडली में सूर्य पापी है तो न पहनें' },
      { en: 'May increase aggression if Sun is already strong', hi: 'यदि सूर्य पहले से मजबूत है तो आक्रामकता बढ़ सकती है' },
    ],
  },
  moon: {
    name: { en: 'Pearl', hi: 'मोती' },
    alternativeName: { en: 'Moti', hi: 'मुक्ता' },
    color: '#FFFFFF',
    planet: 'moon',
    planetName: { en: 'Moon', hi: 'चंद्रमा' },
    metal: { en: 'Silver', hi: 'चांदी' },
    finger: { en: 'Little finger', hi: 'कनिष्ठा (छोटी उंगली)' },
    day: { en: 'Monday morning during Shukla Paksha', hi: 'शुक्ल पक्ष में सोमवार सुबह' },
    weight: { en: '4-6 carats minimum', hi: 'कम से कम 4-6 कैरेट' },
    mantra: { en: 'Om Chandraya Namaha (108 times)', hi: 'ॐ चंद्राय नमः (108 बार)' },
    benefits: [
      { en: 'Calms mind and emotions', hi: 'मन और भावनाओं को शांत करता है' },
      { en: 'Improves mental peace', hi: 'मानसिक शांति में सुधार' },
      { en: 'Enhances creativity and intuition', hi: 'रचनात्मकता और अंतर्ज्ञान बढ़ाता है' },
      { en: 'Strengthens mother relationship', hi: 'माता से संबंध मजबूत करता है' },
    ],
    cautions: [
      { en: 'Natural pearl recommended over cultured', hi: 'कृत्रिम की जगह प्राकृतिक मोती अनुशंसित' },
      { en: 'Avoid if Moon is severely afflicted', hi: 'यदि चंद्रमा गंभीर रूप से पीड़ित है तो न पहनें' },
    ],
  },
  mars: {
    name: { en: 'Red Coral', hi: 'मूंगा' },
    alternativeName: { en: 'Moonga', hi: 'प्रवाल' },
    color: '#FF5722',
    planet: 'mars',
    planetName: { en: 'Mars', hi: 'मंगल' },
    metal: { en: 'Gold or Copper', hi: 'सोना या तांबा' },
    finger: { en: 'Ring finger', hi: 'अनामिका (रिंग फिंगर)' },
    day: { en: 'Tuesday morning during Shukla Paksha', hi: 'शुक्ल पक्ष में मंगलवार सुबह' },
    weight: { en: '6-9 carats minimum', hi: 'कम से कम 6-9 कैरेट' },
    mantra: { en: 'Om Mangalaya Namaha (108 times)', hi: 'ॐ मंगलाय नमः (108 बार)' },
    benefits: [
      { en: 'Increases courage and energy', hi: 'साहस और ऊर्जा बढ़ाता है' },
      { en: 'Overcomes enemies and obstacles', hi: 'शत्रुओं और बाधाओं पर विजय' },
      { en: 'Improves physical strength', hi: 'शारीरिक शक्ति में सुधार' },
      { en: 'Beneficial for property matters', hi: 'संपत्ति मामलों के लिए लाभकारी' },
    ],
    cautions: [
      { en: 'Avoid if Manglik dosha needs to be reduced', hi: 'यदि मांगलिक दोष कम करना है तो न पहनें' },
      { en: 'May increase anger if Mars is already strong', hi: 'यदि मंगल पहले से मजबूत है तो क्रोध बढ़ सकता है' },
    ],
  },
  mercury: {
    name: { en: 'Emerald', hi: 'पन्ना' },
    alternativeName: { en: 'Panna', hi: 'मरकत' },
    color: '#4CAF50',
    planet: 'mercury',
    planetName: { en: 'Mercury', hi: 'बुध' },
    metal: { en: 'Gold', hi: 'सोना' },
    finger: { en: 'Little finger', hi: 'कनिष्ठा (छोटी उंगली)' },
    day: { en: 'Wednesday morning during Shukla Paksha', hi: 'शुक्ल पक्ष में बुधवार सुबह' },
    weight: { en: '3-6 carats minimum', hi: 'कम से कम 3-6 कैरेट' },
    mantra: { en: 'Om Budhaya Namaha (108 times)', hi: 'ॐ बुधाय नमः (108 बार)' },
    benefits: [
      { en: 'Enhances intelligence and communication', hi: 'बुद्धि और संचार बढ़ाता है' },
      { en: 'Good for business and trade', hi: 'व्यापार के लिए अच्छा' },
      { en: 'Improves speech and writing', hi: 'वाणी और लेखन में सुधार' },
      { en: 'Beneficial for students', hi: 'विद्यार्थियों के लिए लाभकारी' },
    ],
    cautions: [
      { en: 'Ensure no cracks or inclusions', hi: 'सुनिश्चित करें कि कोई दरार या समावेश न हो' },
      { en: 'Avoid if Mercury is enemy to Lagna lord', hi: 'यदि बुध लग्नेश का शत्रु है तो न पहनें' },
    ],
  },
  jupiter: {
    name: { en: 'Yellow Sapphire', hi: 'पुखराज' },
    alternativeName: { en: 'Pukhraj', hi: 'पीला नीलम' },
    color: '#FFC107',
    planet: 'jupiter',
    planetName: { en: 'Jupiter', hi: 'गुरु/बृहस्पति' },
    metal: { en: 'Gold', hi: 'सोना' },
    finger: { en: 'Index finger', hi: 'तर्जनी (इंडेक्स फिंगर)' },
    day: { en: 'Thursday morning during Shukla Paksha', hi: 'शुक्ल पक्ष में गुरुवार सुबह' },
    weight: { en: '3-5 carats minimum', hi: 'कम से कम 3-5 कैरेट' },
    mantra: { en: 'Om Gurave Namaha (108 times)', hi: 'ॐ गुरवे नमः (108 बार)' },
    benefits: [
      { en: 'Brings wisdom and prosperity', hi: 'ज्ञान और समृद्धि लाता है' },
      { en: 'Excellent for marriage and children', hi: 'विवाह और संतान के लिए उत्कृष्ट' },
      { en: 'Enhances spiritual growth', hi: 'आध्यात्मिक विकास बढ़ाता है' },
      { en: 'Good for teachers and advisors', hi: 'शिक्षकों और सलाहकारों के लिए अच्छा' },
    ],
    cautions: [
      { en: 'One of the most beneficial stones for most people', hi: 'अधिकांश लोगों के लिए सबसे लाभकारी रत्नों में से एक' },
      { en: 'Avoid only if Jupiter is severely malefic', hi: 'केवल तभी न पहनें जब गुरु गंभीर रूप से पापी हो' },
    ],
  },
  venus: {
    name: { en: 'Diamond', hi: 'हीरा' },
    alternativeName: { en: 'Heera', hi: 'वज्र' },
    color: '#E0E0E0',
    planet: 'venus',
    planetName: { en: 'Venus', hi: 'शुक्र' },
    metal: { en: 'Platinum or White Gold', hi: 'प्लैटिनम या सफेद सोना' },
    finger: { en: 'Middle finger or Ring finger', hi: 'मध्यमा या अनामिका' },
    day: { en: 'Friday morning during Shukla Paksha', hi: 'शुक्ल पक्ष में शुक्रवार सुबह' },
    weight: { en: '0.5-1 carat minimum', hi: 'कम से कम 0.5-1 कैरेट' },
    mantra: { en: 'Om Shukraya Namaha (108 times)', hi: 'ॐ शुक्राय नमः (108 बार)' },
    benefits: [
      { en: 'Enhances love and relationships', hi: 'प्रेम और रिश्तों को बढ़ाता है' },
      { en: 'Brings luxury and comforts', hi: 'विलासिता और आराम लाता है' },
      { en: 'Good for artists and creative fields', hi: 'कलाकारों और रचनात्मक क्षेत्रों के लिए अच्छा' },
      { en: 'Improves physical beauty', hi: 'शारीरिक सौंदर्य में सुधार' },
    ],
    cautions: [
      { en: 'White Sapphire is a good alternative', hi: 'सफेद नीलम एक अच्छा विकल्प है' },
      { en: 'Avoid if Venus is enemy to Lagna lord', hi: 'यदि शुक्र लग्नेश का शत्रु है तो न पहनें' },
    ],
  },
  saturn: {
    name: { en: 'Blue Sapphire', hi: 'नीलम' },
    alternativeName: { en: 'Neelam', hi: 'नीला पुखराज' },
    color: '#3F51B5',
    planet: 'saturn',
    planetName: { en: 'Saturn', hi: 'शनि' },
    metal: { en: 'Silver or Iron', hi: 'चांदी या लोहा' },
    finger: { en: 'Middle finger', hi: 'मध्यमा' },
    day: { en: 'Saturday evening during Shukla Paksha', hi: 'शुक्ल पक्ष में शनिवार शाम' },
    weight: { en: '4-7 carats minimum', hi: 'कम से कम 4-7 कैरेट' },
    mantra: { en: 'Om Shanaischaraya Namaha (108 times)', hi: 'ॐ शनैश्चराय नमः (108 बार)' },
    benefits: [
      { en: 'Rapid and powerful results', hi: 'तीव्र और शक्तिशाली परिणाम' },
      { en: 'Career advancement and discipline', hi: 'करियर उन्नति और अनुशासन' },
      { en: 'Protection from accidents', hi: 'दुर्घटनाओं से सुरक्षा' },
      { en: 'Good for legal matters', hi: 'कानूनी मामलों के लिए अच्छा' },
    ],
    cautions: [
      { en: 'MUST trial for 3 days before permanent wear', hi: 'स्थायी धारण से पहले 3 दिन का परीक्षण अनिवार्य' },
      { en: 'Very powerful - consult astrologer first', hi: 'बहुत शक्तिशाली - पहले ज्योतिषी से परामर्श करें' },
      { en: 'Can give negative results if not suitable', hi: 'यदि उपयुक्त नहीं तो नकारात्मक परिणाम दे सकता है' },
    ],
  },
  rahu: {
    name: { en: 'Hessonite', hi: 'गोमेद' },
    alternativeName: { en: 'Gomed', hi: 'गोमेदक' },
    color: '#795548',
    planet: 'rahu',
    planetName: { en: 'Rahu', hi: 'राहु' },
    metal: { en: 'Silver or Ashtadhatu', hi: 'चांदी या अष्टधातु' },
    finger: { en: 'Middle finger', hi: 'मध्यमा' },
    day: { en: 'Saturday evening during Krishna Paksha', hi: 'कृष्ण पक्ष में शनिवार शाम' },
    weight: { en: '4-6 carats minimum', hi: 'कम से कम 4-6 कैरेट' },
    mantra: { en: 'Om Rahave Namaha (108 times)', hi: 'ॐ राहवे नमः (108 बार)' },
    benefits: [
      { en: 'Overcomes obstacles and enemies', hi: 'बाधाओं और शत्रुओं पर विजय' },
      { en: 'Good for foreign connections', hi: 'विदेशी संबंधों के लिए अच्छा' },
      { en: 'Helps in politics and manipulation', hi: 'राजनीति में मदद करता है' },
      { en: 'Protection from psychic attacks', hi: 'मानसिक हमलों से सुरक्षा' },
    ],
    cautions: [
      { en: 'Only wear if Rahu is benefic in chart', hi: 'केवल तभी पहनें जब कुंडली में राहु शुभ हो' },
      { en: 'Trial period recommended', hi: 'परीक्षण अवधि अनुशंसित' },
    ],
  },
  ketu: {
    name: { en: "Cat's Eye", hi: 'लहसुनिया' },
    alternativeName: { en: 'Lehsuniya', hi: 'वैदूर्य' },
    color: '#9E9E9E',
    planet: 'ketu',
    planetName: { en: 'Ketu', hi: 'केतु' },
    metal: { en: 'Silver or Gold', hi: 'चांदी या सोना' },
    finger: { en: 'Little finger or Ring finger', hi: 'कनिष्ठा या अनामिका' },
    day: { en: 'Tuesday or Saturday', hi: 'मंगलवार या शनिवार' },
    weight: { en: '3-5 carats minimum', hi: 'कम से कम 3-5 कैरेट' },
    mantra: { en: 'Om Ketave Namaha (108 times)', hi: 'ॐ केतवे नमः (108 बार)' },
    benefits: [
      { en: 'Spiritual advancement', hi: 'आध्यात्मिक उन्नति' },
      { en: 'Protection from hidden enemies', hi: 'छिपे शत्रुओं से सुरक्षा' },
      { en: 'Good for occult sciences', hi: 'गूढ़ विद्याओं के लिए अच्छा' },
      { en: 'Helps overcome addictions', hi: 'व्यसनों पर विजय में मदद' },
    ],
    cautions: [
      { en: 'Only wear if Ketu is benefic', hi: 'केवल तभी पहनें जब केतु शुभ हो' },
      { en: 'Must have chatoyancy (cat eye effect)', hi: 'चमक (कैट आई इफेक्ट) होना चाहिए' },
    ],
  },
};

// Sign lords mapping
const SIGN_LORDS: Record<number, string> = {
  0: 'mars',      // Aries
  1: 'venus',     // Taurus
  2: 'mercury',   // Gemini
  3: 'moon',      // Cancer
  4: 'sun',       // Leo
  5: 'mercury',   // Virgo
  6: 'venus',     // Libra
  7: 'mars',      // Scorpio
  8: 'jupiter',   // Sagittarius
  9: 'saturn',    // Capricorn
  10: 'saturn',   // Aquarius
  11: 'jupiter',  // Pisces
};

// Benefic planets for each ascendant
const BENEFIC_PLANETS: Record<number, string[]> = {
  0: ['sun', 'mars', 'jupiter'],           // Aries - Sun, Mars, Jupiter
  1: ['venus', 'saturn', 'mercury'],       // Taurus - Venus, Saturn, Mercury
  2: ['venus', 'saturn'],                  // Gemini - Venus, Saturn
  3: ['moon', 'mars', 'jupiter'],          // Cancer - Moon, Mars, Jupiter
  4: ['sun', 'mars', 'jupiter'],           // Leo - Sun, Mars, Jupiter
  5: ['venus', 'mercury'],                 // Virgo - Venus, Mercury
  6: ['venus', 'saturn', 'mercury'],       // Libra - Venus, Saturn, Mercury
  7: ['moon', 'jupiter', 'sun'],           // Scorpio - Moon, Jupiter, Sun
  8: ['sun', 'mars', 'jupiter'],           // Sagittarius - Sun, Mars, Jupiter
  9: ['venus', 'saturn', 'mercury'],       // Capricorn - Venus, Saturn, Mercury
  10: ['venus', 'saturn', 'sun'],          // Aquarius - Venus, Saturn, Sun
  11: ['moon', 'mars', 'jupiter'],         // Pisces - Moon, Mars, Jupiter
};

// Malefic planets for each ascendant
const MALEFIC_PLANETS: Record<number, string[]> = {
  0: ['saturn', 'mercury', 'venus'],       // Aries
  1: ['jupiter', 'moon'],                  // Taurus
  2: ['sun', 'mars'],                      // Gemini
  3: ['venus', 'saturn'],                  // Cancer
  4: ['saturn', 'venus'],                  // Leo
  5: ['mars', 'moon'],                     // Virgo
  6: ['sun', 'mars', 'jupiter'],           // Libra
  7: ['venus', 'mercury'],                 // Scorpio
  8: ['venus', 'saturn'],                  // Sagittarius
  9: ['moon', 'mars', 'jupiter'],          // Capricorn
  10: ['moon', 'mars'],                    // Aquarius
  11: ['sun', 'mercury', 'venus'],         // Pisces
};

// Planetary enemies - natural enmities in Vedic astrology
const PLANETARY_ENEMIES: Record<string, string[]> = {
  sun: ['saturn', 'venus'],
  moon: [],  // Moon has no natural enemies
  mars: ['mercury'],
  mercury: ['moon'],
  jupiter: ['mercury', 'venus'],
  venus: ['sun', 'moon'],
  saturn: ['sun', 'moon', 'mars'],
  rahu: ['sun', 'moon', 'mars'],
  ketu: ['sun', 'moon'],
};

/**
 * Calculate gemstone recommendations
 */
export function calculateGemstoneRecommendation(birth: BirthDetails): GemstoneResult {
  const chartData = calculateFullChart(birth);

  // Get ascendant details
  const lagnaIndex = ZODIAC_SIGNS.findIndex(s => s.name.en === chartData.lagna.sign.name.en);
  const lagnaLord = SIGN_LORDS[lagnaIndex];
  const lagnaLordPosition = chartData.planets[lagnaLord];

  // Get benefic and malefic planets for this ascendant
  const beneficPlanets = BENEFIC_PLANETS[lagnaIndex] || [];
  const maleficPlanets = MALEFIC_PLANETS[lagnaIndex] || [];

  // Analyze planet strengths
  const planetAnalysis = analyzePlanetStrengths(chartData, beneficPlanets);

  // Determine primary gemstone (lagna lord or strongest benefic)
  const primaryGemstone = determinePrimaryGemstone(
    lagnaLord,
    chartData,
    beneficPlanets,
    planetAnalysis
  );

  // Determine secondary gemstones
  const secondaryGemstones = determineSecondaryGemstones(
    lagnaLord,
    chartData,
    beneficPlanets,
    planetAnalysis,
    primaryGemstone.gemstone.planet
  );

  // Determine gemstones to avoid
  const gemstonesToAvoid = determineGemstonesToAvoid(maleficPlanets, chartData, lagnaLord);

  // Generate wearing instructions
  const wearingInstructions = generateWearingInstructions(primaryGemstone.gemstone);

  // Generate general guidance
  const generalGuidance = generateGeneralGuidance(chartData, lagnaIndex);

  return {
    ascendant: {
      sign: chartData.lagna.sign,
      lord: lagnaLord,
      lordPosition: {
        sign: lagnaLordPosition.sign,
        house: lagnaLordPosition.house,
      },
    },
    moonSign: {
      sign: chartData.moonSign.sign,
      nakshatra: chartData.moonSign.nakshatra.name.en,
    },
    primaryGemstone,
    secondaryGemstones,
    gemstonesToAvoid,
    wearingInstructions,
    generalGuidance,
    chartData,
  };
}

function analyzePlanetStrengths(
  chartData: FullChartData,
  beneficPlanets: string[]
): Record<string, 'strong' | 'moderate' | 'weak'> {
  const analysis: Record<string, 'strong' | 'moderate' | 'weak'> = {};

  for (const planet of beneficPlanets) {
    const planetData = chartData.planets[planet];
    if (!planetData) continue;

    let strength: 'strong' | 'moderate' | 'weak' = 'moderate';

    // Check house placement
    const house = planetData.house;

    // Planets in angular houses (1, 4, 7, 10) are strong
    if ([1, 4, 7, 10].includes(house)) {
      strength = 'strong';
    }
    // Planets in trikona houses (1, 5, 9) are strong
    else if ([5, 9].includes(house)) {
      strength = 'strong';
    }
    // Planets in dusthana houses (6, 8, 12) are weak
    else if ([6, 8, 12].includes(house)) {
      strength = 'weak';
    }

    // Check exaltation/debilitation
    const signName = planetData.sign.name.en;
    if (isExalted(planet, signName)) {
      strength = 'strong';
    } else if (isDebilitated(planet, signName)) {
      strength = 'weak';
    }

    analysis[planet] = strength;
  }

  return analysis;
}

function isExalted(planet: string, sign: string): boolean {
  const exaltations: Record<string, string> = {
    sun: 'Aries',
    moon: 'Taurus',
    mars: 'Capricorn',
    mercury: 'Virgo',
    jupiter: 'Cancer',
    venus: 'Pisces',
    saturn: 'Libra',
  };
  return exaltations[planet] === sign;
}

function isDebilitated(planet: string, sign: string): boolean {
  const debilitations: Record<string, string> = {
    sun: 'Libra',
    moon: 'Scorpio',
    mars: 'Cancer',
    mercury: 'Pisces',
    jupiter: 'Capricorn',
    venus: 'Virgo',
    saturn: 'Aries',
  };
  return debilitations[planet] === sign;
}

function determinePrimaryGemstone(
  lagnaLord: string,
  chartData: FullChartData,
  beneficPlanets: string[],
  planetAnalysis: Record<string, 'strong' | 'moderate' | 'weak'>
): GemstoneRecommendation {
  // Primary recommendation is usually the Lagna Lord's gemstone
  const lagnaLordData = chartData.planets[lagnaLord];
  const lagnaLordStrength = planetAnalysis[lagnaLord] || 'moderate';

  // Check if lagna lord needs strengthening (weak or in dusthana)
  const lagnaLordNeedsStrength = lagnaLordStrength === 'weak' ||
    [6, 8, 12].includes(lagnaLordData?.house || 0);

  let primaryPlanet = lagnaLord;
  let reason: BilingualText;

  if (lagnaLordNeedsStrength) {
    reason = {
      en: `${GEMSTONES[lagnaLord]?.name.en} strengthens your Lagna Lord (${lagnaLord}) which needs support`,
      hi: `${GEMSTONES[lagnaLord]?.name.hi} आपके लग्नेश (${lagnaLord}) को मजबूत करता है जिसे सहारे की जरूरत है`
    };
  } else {
    reason = {
      en: `${GEMSTONES[lagnaLord]?.name.en} is ideal as it represents your Lagna Lord`,
      hi: `${GEMSTONES[lagnaLord]?.name.hi} आदर्श है क्योंकि यह आपके लग्नेश का प्रतिनिधित्व करता है`
    };
  }

  return {
    gemstone: GEMSTONES[primaryPlanet],
    reason,
    priority: 'primary',
    planetStrength: lagnaLordStrength,
    shouldWear: true,
  };
}

function determineSecondaryGemstones(
  lagnaLord: string,
  chartData: FullChartData,
  beneficPlanets: string[],
  planetAnalysis: Record<string, 'strong' | 'moderate' | 'weak'>,
  primaryPlanet: string
): GemstoneRecommendation[] {
  const secondary: GemstoneRecommendation[] = [];

  // Add other benefic planets' gemstones as secondary
  for (const planet of beneficPlanets) {
    if (planet === primaryPlanet) continue;
    if (!GEMSTONES[planet]) continue;

    const strength = planetAnalysis[planet] || 'moderate';
    const planetData = chartData.planets[planet];

    let reason: BilingualText;
    if (strength === 'weak') {
      reason = {
        en: `${GEMSTONES[planet].name.en} can strengthen weak ${planet} in your chart`,
        hi: `${GEMSTONES[planet].name.hi} आपकी कुंडली में कमजोर ${planet} को मजबूत कर सकता है`
      };
    } else {
      reason = {
        en: `${GEMSTONES[planet].name.en} enhances benefic ${planet}'s positive effects`,
        hi: `${GEMSTONES[planet].name.hi} शुभ ${planet} के सकारात्मक प्रभावों को बढ़ाता है`
      };
    }

    secondary.push({
      gemstone: GEMSTONES[planet],
      reason,
      priority: secondary.length === 0 ? 'secondary' : 'alternative',
      planetStrength: strength,
      shouldWear: true,
    });
  }

  return secondary.slice(0, 3); // Return max 3 secondary recommendations
}

function determineGemstonesToAvoid(
  maleficPlanets: string[],
  chartData: FullChartData,
  lagnaLord: string
): { gemstone: GemstoneInfo; reason: BilingualText }[] {
  const toAvoid: { gemstone: GemstoneInfo; reason: BilingualText }[] = [];
  const addedPlanets = new Set<string>();

  // First, add enemies of the lagna lord
  const lagnaLordEnemies = PLANETARY_ENEMIES[lagnaLord] || [];
  for (const enemyPlanet of lagnaLordEnemies) {
    if (!GEMSTONES[enemyPlanet] || addedPlanets.has(enemyPlanet)) continue;

    const lagnaLordName = lagnaLord.charAt(0).toUpperCase() + lagnaLord.slice(1);
    const enemyPlanetName = enemyPlanet.charAt(0).toUpperCase() + enemyPlanet.slice(1);

    toAvoid.push({
      gemstone: GEMSTONES[enemyPlanet],
      reason: {
        en: `${GEMSTONES[enemyPlanet].name.en} should be avoided as ${enemyPlanetName} is a natural enemy of your Lagna Lord (${lagnaLordName}). Wearing it may create conflict with your core personality.`,
        hi: `${GEMSTONES[enemyPlanet].name.hi} से बचें क्योंकि ${enemyPlanetName} आपके लग्नेश (${lagnaLordName}) का प्राकृतिक शत्रु है। इसे पहनने से आपके मूल व्यक्तित्व के साथ संघर्ष हो सकता है।`
      }
    });
    addedPlanets.add(enemyPlanet);
  }

  // Then add malefic planets for the ascendant
  for (const planet of maleficPlanets) {
    if (!GEMSTONES[planet] || addedPlanets.has(planet)) continue;

    const planetName = planet.charAt(0).toUpperCase() + planet.slice(1);

    toAvoid.push({
      gemstone: GEMSTONES[planet],
      reason: {
        en: `${GEMSTONES[planet].name.en} should be avoided as ${planetName} rules unfavorable houses for your ascendant. It may create obstacles in health, finances, or relationships.`,
        hi: `${GEMSTONES[planet].name.hi} से बचें क्योंकि ${planetName} आपके लग्न के लिए अशुभ भावों का स्वामी है। यह स्वास्थ्य, वित्त या रिश्तों में बाधाएं पैदा कर सकता है।`
      }
    });
    addedPlanets.add(planet);
  }

  return toAvoid.slice(0, 5);
}

function generateWearingInstructions(gemstone: GemstoneInfo): BilingualText {
  return {
    en: `Wear ${gemstone.name.en} in ${gemstone.metal.en} on the ${gemstone.finger.en}. Best day to start: ${gemstone.day.en}. Minimum weight: ${gemstone.weight.en}. Chant the mantra "${gemstone.mantra.en.split(' (')[0]}" 108 times before first wearing. Purify the ring in raw milk and Ganga water overnight before wearing.`,
    hi: `${gemstone.name.hi} को ${gemstone.metal.hi} में ${gemstone.finger.hi} पर पहनें। शुरू करने का सबसे अच्छा दिन: ${gemstone.day.hi}। न्यूनतम वजन: ${gemstone.weight.hi}। पहली बार पहनने से पहले "${gemstone.mantra.hi.split(' (')[0]}" मंत्र का 108 बार जाप करें। पहनने से पहले अंगूठी को कच्चे दूध और गंगा जल में रात भर शुद्ध करें।`
  };
}

function generateGeneralGuidance(chartData: FullChartData, lagnaIndex: number): BilingualText {
  const moonSign = chartData.moonSign.sign.name.en;

  return {
    en: `Based on your ${ZODIAC_SIGNS[lagnaIndex].name.en} Ascendant and ${moonSign} Moon Sign, the recommended gemstones will help balance planetary energies. Always purchase certified natural gemstones from reputable dealers. Trial period of 3-7 days is recommended for powerful stones like Blue Sapphire. Consult an experienced astrologer before wearing multiple gemstones together.`,
    hi: `आपके ${ZODIAC_SIGNS[lagnaIndex].name.hi} लग्न और ${chartData.moonSign.sign.name.hi} चंद्र राशि के आधार पर, अनुशंसित रत्न ग्रहों की ऊर्जाओं को संतुलित करने में मदद करेंगे। हमेशा प्रतिष्ठित विक्रेताओं से प्रमाणित प्राकृतिक रत्न खरीदें। नीलम जैसे शक्तिशाली रत्नों के लिए 3-7 दिनों की परीक्षण अवधि की सिफारिश की जाती है। एक साथ कई रत्न पहनने से पहले अनुभवी ज्योतिषी से परामर्श करें।`
  };
}
