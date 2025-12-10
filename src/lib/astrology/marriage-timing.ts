/**
 * Marriage Timing Predictor
 * Full Vedic astrology-based marriage timing analysis
 */

import { calculateFullChart, type BirthDetails, type FullChartData } from './index';
import { calculateMahadashas, type DashaPeriod } from './engine/dasha';
import { ZODIAC_SIGNS, PLANETS, VIMSHOTTARI_ORDER } from './constants';

export interface BilingualText {
  en: string;
  hi: string;
}

export interface MarriageTimingResult {
  // Core analysis
  seventhHouse: {
    sign: typeof ZODIAC_SIGNS[number];
    lord: string;
    lordPosition: {
      sign: typeof ZODIAC_SIGNS[number];
      house: number;
    };
    planetsIn7th: string[];
  };

  // Venus analysis (karaka for marriage)
  venusAnalysis: {
    sign: typeof ZODIAC_SIGNS[number];
    house: number;
    isStrong: boolean;
    condition: BilingualText;
  };

  // Marriage timing windows
  marriageWindows: {
    period: string;
    probability: 'high' | 'medium' | 'low';
    dasha: string;
    antardasha: string;
    reason: BilingualText;
  }[];

  // Predicted age range
  predictedAgeRange: {
    early: number;
    late: number;
    mostLikely: number;
  };

  // Delay factors
  delayFactors: {
    factor: BilingualText;
    severity: 'mild' | 'moderate' | 'severe';
    remedy: BilingualText;
  }[];

  // Marriage type prediction
  marriageType: {
    type: 'love' | 'arranged' | 'mixed';
    probability: number;
    reason: BilingualText;
  };

  // Partner characteristics
  partnerIndications: BilingualText[];

  // Overall summary
  summary: BilingualText;

  // Full chart data for reference
  chartData: FullChartData;
}

// Planet IDs to names mapping
const PLANET_NAMES: Record<string, BilingualText> = {
  sun: { en: 'Sun', hi: 'सूर्य' },
  moon: { en: 'Moon', hi: 'चंद्र' },
  mars: { en: 'Mars', hi: 'मंगल' },
  mercury: { en: 'Mercury', hi: 'बुध' },
  jupiter: { en: 'Jupiter', hi: 'गुरु' },
  venus: { en: 'Venus', hi: 'शुक्र' },
  saturn: { en: 'Saturn', hi: 'शनि' },
  rahu: { en: 'Rahu', hi: 'राहु' },
  ketu: { en: 'Ketu', hi: 'केतु' },
};

// Sign lords
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

// Marriage-favorable dashas (Venus, Jupiter, Moon periods are good for marriage)
const MARRIAGE_FAVORABLE_PLANETS = ['venus', 'jupiter', 'moon', 'mercury'];

/**
 * Calculate marriage timing prediction
 */
export function calculateMarriageTiming(birth: BirthDetails): MarriageTimingResult {
  // Get full birth chart
  const chartData = calculateFullChart(birth);

  // Calculate 7th house sign index
  const lagnaIndex = ZODIAC_SIGNS.findIndex(s => s.name.en === chartData.lagna.sign.name.en);
  const seventhHouseIndex = (lagnaIndex + 6) % 12;
  const seventhSign = ZODIAC_SIGNS[seventhHouseIndex];
  const seventhLord = SIGN_LORDS[seventhHouseIndex];

  // Find 7th lord position
  const seventhLordPosition = chartData.planets[seventhLord];

  // Find planets in 7th house
  const planetsIn7th: string[] = [];
  for (const [planet, data] of Object.entries(chartData.planets)) {
    if (data.house === 7) {
      planetsIn7th.push(planet);
    }
  }

  // Venus analysis
  const venusData = chartData.planets.venus;
  const venusStrong = isVenusStrong(venusData, chartData);

  // Check for delay factors
  const delayFactors = analyzeDelayFactors(chartData, planetsIn7th, seventhLord);

  // Calculate marriage windows based on dashas
  const marriageWindows = calculateMarriageWindows(chartData, birth, seventhLord);

  // Predict age range
  const predictedAgeRange = predictMarriageAge(chartData, delayFactors.length);

  // Determine marriage type
  const marriageType = predictMarriageType(chartData, planetsIn7th);

  // Partner indications
  const partnerIndications = analyzePartnerIndications(chartData, seventhSign, seventhLordPosition);

  // Generate summary
  const summary = generateSummary(chartData, marriageWindows, delayFactors, predictedAgeRange);

  return {
    seventhHouse: {
      sign: seventhSign,
      lord: seventhLord,
      lordPosition: {
        sign: seventhLordPosition.sign,
        house: seventhLordPosition.house,
      },
      planetsIn7th,
    },
    venusAnalysis: {
      sign: venusData.sign,
      house: venusData.house,
      isStrong: venusStrong,
      condition: getVenusCondition(venusData, venusStrong),
    },
    marriageWindows,
    predictedAgeRange,
    delayFactors,
    marriageType,
    partnerIndications,
    summary,
    chartData,
  };
}

function isVenusStrong(
  venusData: FullChartData['planets'][string],
  chartData: FullChartData
): boolean {
  // Venus is strong in: Taurus, Libra, Pisces (exalted)
  // Weak in: Virgo (debilitated), Aries, Scorpio
  const strongSigns = ['Taurus', 'Libra', 'Pisces'];
  const weakSigns = ['Virgo', 'Aries', 'Scorpio'];

  if (strongSigns.includes(venusData.sign.name.en)) return true;
  if (weakSigns.includes(venusData.sign.name.en)) return false;

  // Venus in angular houses (1, 4, 7, 10) is strong
  if ([1, 4, 7, 10].includes(venusData.house)) return true;

  // Venus in 6, 8, 12 is weak
  if ([6, 8, 12].includes(venusData.house)) return false;

  return true; // Default neutral to strong
}

function getVenusCondition(
  venusData: FullChartData['planets'][string],
  isStrong: boolean
): BilingualText {
  if (venusData.sign.name.en === 'Pisces') {
    return {
      en: 'Venus is exalted - Excellent for marriage prospects',
      hi: 'शुक्र उच्च का है - विवाह की संभावनाओं के लिए उत्कृष्ट'
    };
  }
  if (venusData.sign.name.en === 'Virgo') {
    return {
      en: 'Venus is debilitated - May face challenges in relationships',
      hi: 'शुक्र नीच का है - रिश्तों में चुनौतियों का सामना करना पड़ सकता है'
    };
  }
  if (isStrong) {
    return {
      en: 'Venus is well-placed - Favorable for marriage',
      hi: 'शुक्र अच्छी स्थिति में है - विवाह के लिए अनुकूल'
    };
  }
  return {
    en: 'Venus needs strengthening - Consider remedies',
    hi: 'शुक्र को मजबूत करने की आवश्यकता है - उपाय करें'
  };
}

function analyzeDelayFactors(
  chartData: FullChartData,
  planetsIn7th: string[],
  seventhLord: string
): MarriageTimingResult['delayFactors'] {
  const factors: MarriageTimingResult['delayFactors'] = [];

  // Saturn in 7th house - Major delay
  if (planetsIn7th.includes('saturn')) {
    factors.push({
      factor: {
        en: 'Saturn in 7th house delays marriage but ensures stability',
        hi: '7वें भाव में शनि विवाह में देरी करता है लेकिन स्थिरता सुनिश्चित करता है'
      },
      severity: 'severe',
      remedy: {
        en: 'Worship Lord Shani on Saturdays, donate black items, recite Shani Chalisa',
        hi: 'शनिवार को शनि देव की पूजा करें, काली वस्तुएं दान करें, शनि चालीसा पाठ करें'
      }
    });
  }

  // Mars in 7th house - Manglik dosha
  if (planetsIn7th.includes('mars')) {
    factors.push({
      factor: {
        en: 'Mars in 7th house (Manglik) - May cause delays or need matching',
        hi: '7वें भाव में मंगल (मांगलिक) - देरी या मिलान की आवश्यकता हो सकती है'
      },
      severity: 'moderate',
      remedy: {
        en: 'Perform Mangal Dosha Shanti Puja, marry after 28, or match with another Manglik',
        hi: 'मंगल दोष शांति पूजा करें, 28 के बाद विवाह करें, या अन्य मांगलिक से मिलान करें'
      }
    });
  }

  // Rahu in 7th house
  if (planetsIn7th.includes('rahu')) {
    factors.push({
      factor: {
        en: 'Rahu in 7th house - Unconventional marriage path, possible delays',
        hi: '7वें भाव में राहु - अपरंपरागत विवाह मार्ग, संभावित देरी'
      },
      severity: 'moderate',
      remedy: {
        en: 'Perform Rahu Shanti Puja, donate on Amavasya, wear Gomed after consultation',
        hi: 'राहु शांति पूजा करें, अमावस्या पर दान करें, परामर्श के बाद गोमेद धारण करें'
      }
    });
  }

  // Ketu in 7th house
  if (planetsIn7th.includes('ketu')) {
    factors.push({
      factor: {
        en: 'Ketu in 7th house - Spiritual approach to marriage, possible delays',
        hi: '7वें भाव में केतु - विवाह के प्रति आध्यात्मिक दृष्टिकोण, संभावित देरी'
      },
      severity: 'mild',
      remedy: {
        en: 'Perform Ketu Shanti Puja, donate blankets, recite Ganesh Mantra',
        hi: 'केतु शांति पूजा करें, कंबल दान करें, गणेश मंत्र जाप करें'
      }
    });
  }

  // 7th lord in 6, 8, or 12 house
  const seventhLordHouse = chartData.planets[seventhLord].house;
  if ([6, 8, 12].includes(seventhLordHouse)) {
    factors.push({
      factor: {
        en: `7th lord in ${seventhLordHouse}th house - Challenges in marriage timing`,
        hi: `7वें भाव का स्वामी ${seventhLordHouse}वें भाव में - विवाह समय में चुनौतियां`
      },
      severity: 'moderate',
      remedy: {
        en: 'Strengthen the 7th lord through gemstones and mantras',
        hi: 'रत्न और मंत्रों के माध्यम से 7वें भाव के स्वामी को मजबूत करें'
      }
    });
  }

  // Venus afflicted
  const venusHouse = chartData.planets.venus.house;
  if ([6, 8, 12].includes(venusHouse)) {
    factors.push({
      factor: {
        en: 'Venus in difficult house - Relationship challenges possible',
        hi: 'शुक्र कठिन भाव में - रिश्तों में चुनौतियां संभव'
      },
      severity: 'mild',
      remedy: {
        en: 'Worship Goddess Lakshmi on Fridays, wear white clothes, donate white items',
        hi: 'शुक्रवार को देवी लक्ष्मी की पूजा करें, सफेद कपड़े पहनें, सफेद वस्तुएं दान करें'
      }
    });
  }

  return factors;
}

function calculateMarriageWindows(
  chartData: FullChartData,
  birth: BirthDetails,
  seventhLord: string
): MarriageTimingResult['marriageWindows'] {
  const windows: MarriageTimingResult['marriageWindows'] = [];
  const currentYear = new Date().getFullYear();

  // Calculate all mahadashas using moon longitude and birth date
  const birthDate = new Date(birth.year, birth.month - 1, birth.day, birth.hour, birth.minute);
  const mahadashas = calculateMahadashas(chartData.moonSign.moonLongitude, birthDate);

  // Find favorable periods from mahadashas
  for (let i = 0; i < Math.min(mahadashas.length, 5); i++) {
    const mahadasha = mahadashas[i];
    const mahadashaLord = mahadasha.planet.toLowerCase();

    // Venus Mahadasha is highly favorable
    if (mahadashaLord === 'venus') {
      const startYear = mahadasha.startDate.getFullYear();
      const endYear = mahadasha.endDate.getFullYear();

      if (endYear >= currentYear) {
        windows.push({
          period: `${Math.max(startYear, currentYear)} - ${endYear}`,
          probability: 'high',
          dasha: 'Venus',
          antardasha: 'Jupiter/Moon',
          reason: {
            en: 'Venus Mahadasha is excellent for marriage and relationships',
            hi: 'शुक्र महादशा विवाह और रिश्तों के लिए उत्कृष्ट है'
          }
        });
      }
    }

    // Jupiter Mahadasha with 7th lord antardasha
    if (mahadashaLord === 'jupiter') {
      const startYear = mahadasha.startDate.getFullYear();
      const endYear = mahadasha.endDate.getFullYear();

      if (endYear >= currentYear) {
        windows.push({
          period: `${Math.max(startYear, currentYear)} - ${endYear}`,
          probability: 'high',
          dasha: 'Jupiter',
          antardasha: 'Venus/' + PLANET_NAMES[seventhLord].en,
          reason: {
            en: 'Jupiter Mahadasha brings auspicious events including marriage',
            hi: 'गुरु महादशा विवाह सहित शुभ घटनाएं लाती है'
          }
        });
      }
    }

    // 7th lord Mahadasha
    if (mahadashaLord === seventhLord) {
      const startYear = mahadasha.startDate.getFullYear();
      const endYear = mahadasha.endDate.getFullYear();

      if (endYear >= currentYear) {
        windows.push({
          period: `${Math.max(startYear, currentYear)} - ${endYear}`,
          probability: 'high',
          dasha: PLANET_NAMES[seventhLord].en,
          antardasha: 'Venus/Jupiter',
          reason: {
            en: '7th house lord dasha activates marriage prospects',
            hi: '7वें भाव के स्वामी की दशा विवाह की संभावनाओं को सक्रिय करती है'
          }
        });
      }
    }

    // Moon Mahadasha - emotional fulfillment
    if (mahadashaLord === 'moon') {
      const startYear = mahadasha.startDate.getFullYear();
      const endYear = mahadasha.endDate.getFullYear();

      if (endYear >= currentYear) {
        windows.push({
          period: `${Math.max(startYear, currentYear)} - ${endYear}`,
          probability: 'medium',
          dasha: 'Moon',
          antardasha: 'Venus',
          reason: {
            en: 'Moon Mahadasha favors emotional connections and domestic happiness',
            hi: 'चंद्र महादशा भावनात्मक जुड़ाव और घरेलू सुख का पक्षधर है'
          }
        });
      }
    }
  }

  // Sort by probability and limit
  windows.sort((a, b) => {
    const order = { high: 0, medium: 1, low: 2 };
    return order[a.probability] - order[b.probability];
  });

  return windows.slice(0, 4);
}

function predictMarriageAge(
  chartData: FullChartData,
  delayCount: number
): MarriageTimingResult['predictedAgeRange'] {
  let baseEarly = 21;
  let baseLate = 28;
  let baseMostLikely = 25;

  // Venus in good houses advances timing
  const venusHouse = chartData.planets.venus.house;
  if ([1, 5, 7, 11].includes(venusHouse)) {
    baseEarly -= 1;
    baseMostLikely -= 1;
  }

  // Jupiter aspecting 7th house advances timing
  const jupiterHouse = chartData.planets.jupiter.house;
  if ([1, 5, 7, 9].includes(jupiterHouse)) {
    baseEarly -= 1;
    baseMostLikely -= 1;
  }

  // Saturn influence delays
  const saturnHouse = chartData.planets.saturn.house;
  if (saturnHouse === 7 || saturnHouse === 1) {
    baseEarly += 3;
    baseLate += 5;
    baseMostLikely += 4;
  }

  // Add delay based on factors count
  baseEarly += delayCount;
  baseLate += delayCount * 2;
  baseMostLikely += Math.floor(delayCount * 1.5);

  return {
    early: Math.max(18, baseEarly),
    late: Math.min(45, baseLate),
    mostLikely: Math.min(40, baseMostLikely),
  };
}

function predictMarriageType(
  chartData: FullChartData,
  planetsIn7th: string[]
): MarriageTimingResult['marriageType'] {
  let loveScore = 0;
  let arrangedScore = 0;

  // 5th house connection with 7th (romance -> marriage)
  const fifthLordIndex = (ZODIAC_SIGNS.findIndex(s => s.name.en === chartData.lagna.sign.name.en) + 4) % 12;
  const fifthLord = SIGN_LORDS[fifthLordIndex];
  const fifthLordHouse = chartData.planets[fifthLord].house;

  if (fifthLordHouse === 7) loveScore += 30;
  if (chartData.planets.venus.house === 5) loveScore += 20;

  // Rahu in 7th often indicates love marriage
  if (planetsIn7th.includes('rahu')) loveScore += 25;

  // Mars in 7th can indicate passionate/love marriage
  if (planetsIn7th.includes('mars')) loveScore += 15;

  // Saturn in 7th often indicates arranged/delayed marriage
  if (planetsIn7th.includes('saturn')) arrangedScore += 30;

  // Jupiter influence indicates traditional/arranged
  if (planetsIn7th.includes('jupiter')) arrangedScore += 20;
  if (chartData.planets.jupiter.house === 7) arrangedScore += 15;

  // Moon in 7th - emotional, could be either
  if (planetsIn7th.includes('moon')) {
    loveScore += 10;
    arrangedScore += 10;
  }

  // Default bias towards arranged in Indian context
  arrangedScore += 20;

  const total = loveScore + arrangedScore;
  const lovePercent = Math.round((loveScore / total) * 100);

  if (lovePercent > 60) {
    return {
      type: 'love',
      probability: lovePercent,
      reason: {
        en: 'Strong 5th-7th house connection and Venus placement indicate love marriage',
        hi: 'मजबूत 5वें-7वें भाव का संबंध और शुक्र की स्थिति प्रेम विवाह का संकेत देती है'
      }
    };
  } else if (lovePercent < 40) {
    return {
      type: 'arranged',
      probability: 100 - lovePercent,
      reason: {
        en: 'Traditional planetary placements suggest arranged marriage is more likely',
        hi: 'पारंपरिक ग्रह स्थितियां व्यवस्थित विवाह की अधिक संभावना दर्शाती हैं'
      }
    };
  }
  return {
    type: 'mixed',
    probability: 50,
    reason: {
      en: 'Marriage may start as arranged but develop into a loving relationship, or vice versa',
      hi: 'विवाह व्यवस्थित शुरू हो सकता है लेकिन प्रेमपूर्ण रिश्ते में विकसित हो सकता है, या इसके विपरीत'
    }
  };
}

function analyzePartnerIndications(
  chartData: FullChartData,
  seventhSign: typeof ZODIAC_SIGNS[number],
  seventhLordPosition: FullChartData['planets'][string]
): BilingualText[] {
  const indications: BilingualText[] = [];

  // Based on 7th house sign
  const signElement = seventhSign.element;
  if (signElement === 'fire') {
    indications.push({
      en: 'Partner may be energetic, ambitious, and passionate',
      hi: 'जीवनसाथी ऊर्जावान, महत्वाकांक्षी और जोशीला हो सकता है'
    });
  } else if (signElement === 'earth') {
    indications.push({
      en: 'Partner may be practical, stable, and materially successful',
      hi: 'जीवनसाथी व्यावहारिक, स्थिर और भौतिक रूप से सफल हो सकता है'
    });
  } else if (signElement === 'air') {
    indications.push({
      en: 'Partner may be intellectual, communicative, and socially active',
      hi: 'जीवनसाथी बौद्धिक, संवादप्रिय और सामाजिक रूप से सक्रिय हो सकता है'
    });
  } else if (signElement === 'water') {
    indications.push({
      en: 'Partner may be emotional, intuitive, and caring',
      hi: 'जीवनसाथी भावनात्मक, अंतर्ज्ञानी और देखभाल करने वाला हो सकता है'
    });
  }

  // Based on 7th lord placement
  if (seventhLordPosition.house <= 4) {
    indications.push({
      en: 'Partner likely from nearby area or known family background',
      hi: 'जीवनसाथी संभवतः पास के क्षेत्र या जाने-पहचाने परिवार से हो सकता है'
    });
  } else if (seventhLordPosition.house >= 9) {
    indications.push({
      en: 'Partner may be from a different city, region, or cultural background',
      hi: 'जीवनसाथी अलग शहर, क्षेत्र या सांस्कृतिक पृष्ठभूमि से हो सकता है'
    });
  }

  // Based on Venus position
  const venusSign = chartData.planets.venus.sign.name.en;
  if (['Taurus', 'Libra', 'Pisces'].includes(venusSign)) {
    indications.push({
      en: 'Partner may be attractive, artistic, and fond of beauty',
      hi: 'जीवनसाथी आकर्षक, कलात्मक और सौंदर्य प्रेमी हो सकता है'
    });
  }

  // Add profession indication based on 7th lord
  const lordSign = seventhLordPosition.sign.name.en;
  if (['Leo', 'Aries', 'Sagittarius'].includes(lordSign)) {
    indications.push({
      en: 'Partner may be in leadership, business, or administrative roles',
      hi: 'जीवनसाथी नेतृत्व, व्यापार या प्रशासनिक भूमिकाओं में हो सकता है'
    });
  } else if (['Virgo', 'Gemini'].includes(lordSign)) {
    indications.push({
      en: 'Partner may be in communication, analysis, or service-related fields',
      hi: 'जीवनसाथी संचार, विश्लेषण या सेवा संबंधी क्षेत्रों में हो सकता है'
    });
  }

  return indications;
}

function generateSummary(
  chartData: FullChartData,
  windows: MarriageTimingResult['marriageWindows'],
  delayFactors: MarriageTimingResult['delayFactors'],
  ageRange: MarriageTimingResult['predictedAgeRange']
): BilingualText {
  const hasDelays = delayFactors.length > 0;
  const hasGoodWindows = windows.length > 0 && windows[0].probability === 'high';

  if (!hasDelays && hasGoodWindows) {
    return {
      en: `Your chart shows favorable marriage prospects. The most likely age for marriage is around ${ageRange.mostLikely} years. ${windows[0]?.period ? `The period ${windows[0].period} looks particularly promising.` : ''}`,
      hi: `आपकी कुंडली विवाह की अनुकूल संभावनाएं दर्शाती है। विवाह की सबसे संभावित उम्र लगभग ${ageRange.mostLikely} वर्ष है। ${windows[0]?.period ? `${windows[0].period} की अवधि विशेष रूप से आशाजनक दिखती है।` : ''}`
    };
  }

  if (hasDelays && hasGoodWindows) {
    return {
      en: `Your chart indicates some delays in marriage due to planetary influences, but favorable periods exist. Expected age range is ${ageRange.early}-${ageRange.late} years. Following the suggested remedies can help smooth the path.`,
      hi: `आपकी कुंडली ग्रहों के प्रभाव के कारण विवाह में कुछ देरी का संकेत देती है, लेकिन अनुकूल अवधि मौजूद है। अपेक्षित आयु सीमा ${ageRange.early}-${ageRange.late} वर्ष है। सुझाए गए उपायों का पालन करने से रास्ता आसान हो सकता है।`
    };
  }

  if (hasDelays) {
    return {
      en: `Your chart shows some challenges that may delay marriage. The suggested age range is ${ageRange.early}-${ageRange.late} years. Patience and following remedies will be beneficial.`,
      hi: `आपकी कुंडली कुछ चुनौतियां दर्शाती है जो विवाह में देरी कर सकती हैं। सुझाई गई आयु सीमा ${ageRange.early}-${ageRange.late} वर्ष है। धैर्य और उपायों का पालन लाभकारी होगा।`
    };
  }

  return {
    en: `Your chart indicates a normal marriage timeline with the most likely age around ${ageRange.mostLikely} years. Focus on self-development and the right partner will come at the right time.`,
    hi: `आपकी कुंडली सामान्य विवाह समयरेखा का संकेत देती है जिसमें सबसे संभावित आयु लगभग ${ageRange.mostLikely} वर्ष है। आत्म-विकास पर ध्यान दें और सही समय पर सही जीवनसाथी मिलेगा।`
  };
}
