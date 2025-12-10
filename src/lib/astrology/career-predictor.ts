/**
 * Career Predictor
 * Full Vedic astrology-based career analysis
 * Analyzes 10th house, Raj Yogas, and planetary influences
 */

import { calculateFullChart, type BirthDetails, type FullChartData } from './index';
import { ZODIAC_SIGNS, PLANETS } from './constants';

export interface BilingualText {
  en: string;
  hi: string;
}

export interface CareerField {
  field: BilingualText;
  suitability: 'highly-suitable' | 'suitable' | 'moderate';
  reason: BilingualText;
}

export interface CareerResult {
  // 10th House Analysis
  tenthHouse: {
    sign: typeof ZODIAC_SIGNS[number];
    lord: string;
    lordPosition: {
      sign: typeof ZODIAC_SIGNS[number];
      house: number;
    };
    planetsIn10th: string[];
  };

  // Career Type (Job vs Business)
  careerType: {
    type: 'job' | 'business' | 'both';
    jobScore: number;
    businessScore: number;
    reason: BilingualText;
  };

  // Government Job Potential
  governmentJobPotential: {
    score: number; // 0-100
    indicators: BilingualText[];
    favorable: boolean;
  };

  // Suitable Career Fields
  suitableFields: CareerField[];

  // Raj Yogas (success combinations)
  rajYogas: {
    name: BilingualText;
    present: boolean;
    description: BilingualText;
  }[];

  // Career Timing (favorable periods)
  careerPeaks: {
    period: string;
    description: BilingualText;
  }[];

  // Strengths and Challenges
  strengths: BilingualText[];
  challenges: BilingualText[];

  // Overall Career Summary
  summary: BilingualText;

  // Chart data
  chartData: FullChartData;
}

// Sign lords
const SIGN_LORDS: Record<number, string> = {
  0: 'mars', 1: 'venus', 2: 'mercury', 3: 'moon',
  4: 'sun', 5: 'mercury', 6: 'venus', 7: 'mars',
  8: 'jupiter', 9: 'saturn', 10: 'saturn', 11: 'jupiter',
};

// Career fields by planet dominance
const CAREER_BY_PLANET: Record<string, BilingualText[]> = {
  sun: [
    { en: 'Government/Administration', hi: 'सरकार/प्रशासन' },
    { en: 'Politics', hi: 'राजनीति' },
    { en: 'Leadership roles', hi: 'नेतृत्व भूमिकाएं' },
    { en: 'Medicine (Physician)', hi: 'चिकित्सा (डॉक्टर)' },
  ],
  moon: [
    { en: 'Hospitality/Hotels', hi: 'आतिथ्य/होटल' },
    { en: 'Nursing/Healthcare', hi: 'नर्सिंग/स्वास्थ्य सेवा' },
    { en: 'Psychology', hi: 'मनोविज्ञान' },
    { en: 'Dairy/Agriculture', hi: 'डेयरी/कृषि' },
  ],
  mars: [
    { en: 'Military/Defense', hi: 'सेना/रक्षा' },
    { en: 'Engineering', hi: 'इंजीनियरिंग' },
    { en: 'Sports', hi: 'खेल' },
    { en: 'Real Estate', hi: 'रियल एस्टेट' },
    { en: 'Surgery', hi: 'सर्जरी' },
  ],
  mercury: [
    { en: 'IT/Software', hi: 'आईटी/सॉफ्टवेयर' },
    { en: 'Writing/Journalism', hi: 'लेखन/पत्रकारिता' },
    { en: 'Accounting/Finance', hi: 'लेखा/वित्त' },
    { en: 'Teaching', hi: 'शिक्षण' },
    { en: 'Trading/Commerce', hi: 'व्यापार/वाणिज्य' },
  ],
  jupiter: [
    { en: 'Banking/Finance', hi: 'बैंकिंग/वित्त' },
    { en: 'Law/Judiciary', hi: 'कानून/न्यायपालिका' },
    { en: 'Education/Academia', hi: 'शिक्षा/अकादमिक' },
    { en: 'Consulting', hi: 'परामर्श' },
    { en: 'Religious/Spiritual', hi: 'धार्मिक/आध्यात्मिक' },
  ],
  venus: [
    { en: 'Entertainment/Arts', hi: 'मनोरंजन/कला' },
    { en: 'Fashion/Beauty', hi: 'फैशन/सौंदर्य' },
    { en: 'Luxury goods', hi: 'लक्जरी सामान' },
    { en: 'Interior Design', hi: 'इंटीरियर डिजाइन' },
    { en: 'Hotels/Tourism', hi: 'होटल/पर्यटन' },
  ],
  saturn: [
    { en: 'Manufacturing', hi: 'विनिर्माण' },
    { en: 'Mining/Minerals', hi: 'खनन/खनिज' },
    { en: 'Labour/HR', hi: 'श्रम/एचआर' },
    { en: 'Agriculture', hi: 'कृषि' },
    { en: 'Construction', hi: 'निर्माण' },
  ],
  rahu: [
    { en: 'Technology/Innovation', hi: 'प्रौद्योगिकी/नवाचार' },
    { en: 'Foreign companies', hi: 'विदेशी कंपनियां' },
    { en: 'Research', hi: 'अनुसंधान' },
    { en: 'Aviation', hi: 'विमानन' },
    { en: 'Pharmaceutical', hi: 'फार्मास्युटिकल' },
  ],
  ketu: [
    { en: 'Spiritual healing', hi: 'आध्यात्मिक उपचार' },
    { en: 'Occult sciences', hi: 'गूढ़ विद्या' },
    { en: 'Research (deep)', hi: 'गहन अनुसंधान' },
    { en: 'Psychology', hi: 'मनोविज्ञान' },
  ],
};

// Career fields by 10th house sign element
const CAREER_BY_ELEMENT: Record<string, BilingualText[]> = {
  fire: [
    { en: 'Leadership positions', hi: 'नेतृत्व पद' },
    { en: 'Entrepreneurship', hi: 'उद्यमिता' },
    { en: 'Sports/Athletics', hi: 'खेल/एथलेटिक्स' },
  ],
  earth: [
    { en: 'Finance/Banking', hi: 'वित्त/बैंकिंग' },
    { en: 'Real Estate', hi: 'रियल एस्टेट' },
    { en: 'Agriculture', hi: 'कृषि' },
  ],
  air: [
    { en: 'Communication/Media', hi: 'संचार/मीडिया' },
    { en: 'IT/Technology', hi: 'आईटी/प्रौद्योगिकी' },
    { en: 'Networking/Sales', hi: 'नेटवर्किंग/बिक्री' },
  ],
  water: [
    { en: 'Healthcare/Medicine', hi: 'स्वास्थ्य/चिकित्सा' },
    { en: 'Psychology/Counseling', hi: 'मनोविज्ञान/परामर्श' },
    { en: 'Marine/Liquids', hi: 'समुद्री/तरल पदार्थ' },
  ],
};

/**
 * Calculate career prediction
 */
export function calculateCareerPrediction(birth: BirthDetails): CareerResult {
  const chartData = calculateFullChart(birth);

  // Get lagna and 10th house details
  const lagnaIndex = ZODIAC_SIGNS.findIndex(s => s.name.en === chartData.lagna.sign.name.en);
  const tenthHouseIndex = (lagnaIndex + 9) % 12;
  const tenthSign = ZODIAC_SIGNS[tenthHouseIndex];
  const tenthLord = SIGN_LORDS[tenthHouseIndex];
  const tenthLordPosition = chartData.planets[tenthLord];

  // Find planets in 10th house
  const planetsIn10th: string[] = [];
  for (const [planet, data] of Object.entries(chartData.planets)) {
    if (data.house === 10) {
      planetsIn10th.push(planet);
    }
  }

  // Analyze career type (job vs business)
  const careerType = analyzeCareerType(chartData, tenthLord, planetsIn10th);

  // Government job potential
  const governmentJobPotential = analyzeGovernmentJobPotential(chartData, planetsIn10th);

  // Suitable career fields
  const suitableFields = determineSuitableFields(chartData, tenthSign, tenthLord, planetsIn10th);

  // Check for Raj Yogas
  const rajYogas = checkRajYogas(chartData, lagnaIndex);

  // Career peaks
  const careerPeaks = determineCareerPeaks(chartData, birth, tenthLord);

  // Strengths and challenges
  const { strengths, challenges } = analyzeStrengthsChallenges(chartData, tenthLord, planetsIn10th);

  // Generate summary
  const summary = generateCareerSummary(careerType, governmentJobPotential, suitableFields, rajYogas);

  return {
    tenthHouse: {
      sign: tenthSign,
      lord: tenthLord,
      lordPosition: {
        sign: tenthLordPosition.sign,
        house: tenthLordPosition.house,
      },
      planetsIn10th,
    },
    careerType,
    governmentJobPotential,
    suitableFields,
    rajYogas,
    careerPeaks,
    strengths,
    challenges,
    summary,
    chartData,
  };
}

function analyzeCareerType(
  chartData: FullChartData,
  tenthLord: string,
  planetsIn10th: string[]
): CareerResult['careerType'] {
  let jobScore = 50;
  let businessScore = 50;

  // Saturn in 10th or as 10th lord favors service/job
  if (planetsIn10th.includes('saturn') || tenthLord === 'saturn') {
    jobScore += 20;
  }

  // Sun in 10th or strong favors government/authority
  if (planetsIn10th.includes('sun')) {
    jobScore += 15;
    businessScore += 10;
  }

  // Mars/Rahu in 10th or strong favors business/entrepreneurship
  if (planetsIn10th.includes('mars') || planetsIn10th.includes('rahu')) {
    businessScore += 20;
  }

  // Mercury strong favors both trade and service
  const mercuryHouse = chartData.planets.mercury.house;
  if ([1, 2, 4, 5, 7, 9, 10, 11].includes(mercuryHouse)) {
    businessScore += 15;
    jobScore += 10;
  }

  // Jupiter in angular houses favors advisory/consulting roles
  const jupiterHouse = chartData.planets.jupiter.house;
  if ([1, 4, 7, 10].includes(jupiterHouse)) {
    jobScore += 15;
    businessScore += 10;
  }

  // Venus strong favors creative business
  const venusHouse = chartData.planets.venus.house;
  if ([1, 2, 4, 5, 7, 9, 10, 11].includes(venusHouse)) {
    businessScore += 10;
  }

  // 10th lord in 1st, 4th, 7th, 10th houses - strong career in both
  const tenthLordHouse = chartData.planets[tenthLord].house;
  if ([1, 4, 7, 10].includes(tenthLordHouse)) {
    jobScore += 10;
    businessScore += 10;
  }

  // 10th lord in 3rd, 6th house favors service
  if ([3, 6].includes(tenthLordHouse)) {
    jobScore += 15;
  }

  // 10th lord in 2nd, 11th house favors business/gains
  if ([2, 11].includes(tenthLordHouse)) {
    businessScore += 15;
  }

  const total = jobScore + businessScore;
  const jobPercent = Math.round((jobScore / total) * 100);
  const businessPercent = 100 - jobPercent;

  let type: 'job' | 'business' | 'both';
  let reason: BilingualText;

  if (Math.abs(jobPercent - businessPercent) < 20) {
    type = 'both';
    reason = {
      en: 'Your chart shows equal potential for both job and business. You can succeed in either path or even combine both.',
      hi: 'आपकी कुंडली नौकरी और व्यापार दोनों के लिए समान क्षमता दर्शाती है। आप किसी भी मार्ग में या दोनों को मिलाकर भी सफल हो सकते हैं।'
    };
  } else if (jobPercent > businessPercent) {
    type = 'job';
    reason = {
      en: 'Your chart indicates stronger potential for employment/service. Structured roles with defined responsibilities suit you well.',
      hi: 'आपकी कुंडली नौकरी/सेवा के लिए मजबूत क्षमता दर्शाती है। निर्धारित जिम्मेदारियों वाली संरचित भूमिकाएं आपके लिए अनुकूल हैं।'
    };
  } else {
    type = 'business';
    reason = {
      en: 'Your chart shows strong entrepreneurial potential. Self-employment or running your own venture will bring success.',
      hi: 'आपकी कुंडली मजबूत उद्यमशीलता क्षमता दर्शाती है। स्वरोजगार या अपना उद्यम चलाना सफलता लाएगा।'
    };
  }

  return {
    type,
    jobScore: jobPercent,
    businessScore: businessPercent,
    reason,
  };
}

function analyzeGovernmentJobPotential(
  chartData: FullChartData,
  planetsIn10th: string[]
): CareerResult['governmentJobPotential'] {
  let score = 30; // Base score
  const indicators: BilingualText[] = [];

  // Sun in 10th house - strong government indicator
  if (planetsIn10th.includes('sun')) {
    score += 25;
    indicators.push({
      en: 'Sun in 10th house strongly indicates government authority',
      hi: '10वें भाव में सूर्य सरकारी अधिकार का मजबूत संकेत देता है'
    });
  }

  // Sun in angular houses
  const sunHouse = chartData.planets.sun.house;
  if ([1, 4, 7, 10].includes(sunHouse)) {
    score += 15;
    indicators.push({
      en: 'Sun in angular house supports government career',
      hi: 'केंद्र भाव में सूर्य सरकारी करियर का समर्थन करता है'
    });
  }

  // Moon strong (for public service)
  const moonHouse = chartData.planets.moon.house;
  if ([1, 4, 5, 9, 10].includes(moonHouse)) {
    score += 10;
    indicators.push({
      en: 'Strong Moon indicates success in public service',
      hi: 'मजबूत चंद्रमा लोक सेवा में सफलता का संकेत देता है'
    });
  }

  // Saturn well-placed (discipline, service)
  const saturnHouse = chartData.planets.saturn.house;
  if ([3, 6, 10, 11].includes(saturnHouse)) {
    score += 10;
    indicators.push({
      en: 'Saturn placement supports disciplined service roles',
      hi: 'शनि की स्थिति अनुशासित सेवा भूमिकाओं का समर्थन करती है'
    });
  }

  // Mars in 10th (military, police, administration)
  if (planetsIn10th.includes('mars')) {
    score += 15;
    indicators.push({
      en: 'Mars in 10th favors defense, police, or administrative services',
      hi: '10वें भाव में मंगल रक्षा, पुलिस या प्रशासनिक सेवाओं के लिए अनुकूल है'
    });
  }

  score = Math.min(score, 100);

  return {
    score,
    indicators,
    favorable: score >= 50,
  };
}

function determineSuitableFields(
  chartData: FullChartData,
  tenthSign: typeof ZODIAC_SIGNS[number],
  tenthLord: string,
  planetsIn10th: string[]
): CareerField[] {
  const fields: CareerField[] = [];
  const addedFields = new Set<string>();

  // Add fields based on planets in 10th house (highest priority)
  for (const planet of planetsIn10th) {
    const planetFields = CAREER_BY_PLANET[planet] || [];
    for (const field of planetFields.slice(0, 2)) {
      if (!addedFields.has(field.en)) {
        addedFields.add(field.en);
        fields.push({
          field,
          suitability: 'highly-suitable',
          reason: {
            en: `${planet.charAt(0).toUpperCase() + planet.slice(1)} in 10th house indicates excellence in this field`,
            hi: `10वें भाव में ${planet} इस क्षेत्र में उत्कृष्टता का संकेत देता है`
          }
        });
      }
    }
  }

  // Add fields based on 10th lord
  const lordFields = CAREER_BY_PLANET[tenthLord] || [];
  for (const field of lordFields.slice(0, 2)) {
    if (!addedFields.has(field.en)) {
      addedFields.add(field.en);
      fields.push({
        field,
        suitability: fields.length < 3 ? 'highly-suitable' : 'suitable',
        reason: {
          en: `10th lord ${tenthLord} brings opportunities in this area`,
          hi: `10वें भाव का स्वामी ${tenthLord} इस क्षेत्र में अवसर लाता है`
        }
      });
    }
  }

  // Add fields based on 10th house sign element
  const elementFields = CAREER_BY_ELEMENT[tenthSign.element] || [];
  for (const field of elementFields.slice(0, 2)) {
    if (!addedFields.has(field.en)) {
      addedFields.add(field.en);
      fields.push({
        field,
        suitability: 'suitable',
        reason: {
          en: `${tenthSign.element} element in 10th house supports this career`,
          hi: `10वें भाव में ${tenthSign.element} तत्व इस करियर का समर्थन करता है`
        }
      });
    }
  }

  // Add based on strongest planet in chart
  const angularPlanets = Object.entries(chartData.planets)
    .filter(([_, data]) => [1, 4, 7, 10].includes(data.house))
    .map(([planet]) => planet);

  for (const planet of angularPlanets.slice(0, 1)) {
    const planetFields = CAREER_BY_PLANET[planet] || [];
    for (const field of planetFields.slice(0, 1)) {
      if (!addedFields.has(field.en)) {
        addedFields.add(field.en);
        fields.push({
          field,
          suitability: 'moderate',
          reason: {
            en: `Strong ${planet} in chart also supports this field`,
            hi: `कुंडली में मजबूत ${planet} भी इस क्षेत्र का समर्थन करता है`
          }
        });
      }
    }
  }

  return fields.slice(0, 6);
}

function checkRajYogas(
  chartData: FullChartData,
  lagnaIndex: number
): CareerResult['rajYogas'] {
  const yogas: CareerResult['rajYogas'] = [];

  // Get kendra and trikona lords
  const kendraHouses = [1, 4, 7, 10];
  const trikonaHouses = [1, 5, 9];

  const kendraLords = kendraHouses.map(h => SIGN_LORDS[(lagnaIndex + h - 1) % 12]);
  const trikonaLords = trikonaHouses.map(h => SIGN_LORDS[(lagnaIndex + h - 1) % 12]);

  // Check for Kendra-Trikona conjunction (Raj Yoga)
  for (const kendraLord of kendraLords) {
    for (const trikonaLord of trikonaLords) {
      if (kendraLord === trikonaLord) continue; // Same planet

      const kendraPos = chartData.planets[kendraLord];
      const trikonaPos = chartData.planets[trikonaLord];

      // Check if they are in same house or aspecting
      if (kendraPos && trikonaPos && kendraPos.house === trikonaPos.house) {
        yogas.push({
          name: { en: 'Raj Yoga', hi: 'राज योग' },
          present: true,
          description: {
            en: `${kendraLord} and ${trikonaLord} conjunction creates powerful Raj Yoga for success and recognition`,
            hi: `${kendraLord} और ${trikonaLord} का संयोग शक्तिशाली राज योग बनाता है जो सफलता और मान्यता देता है`
          }
        });
        break;
      }
    }
  }

  // Gaja Kesari Yoga (Jupiter in kendra from Moon)
  const jupiterHouse = chartData.planets.jupiter.house;
  const moonHouse = chartData.planets.moon.house;
  const jupiterFromMoon = ((jupiterHouse - moonHouse + 12) % 12) + 1;
  if ([1, 4, 7, 10].includes(jupiterFromMoon)) {
    yogas.push({
      name: { en: 'Gaja Kesari Yoga', hi: 'गज केसरी योग' },
      present: true,
      description: {
        en: 'Jupiter in kendra from Moon brings fame, wealth, and high position',
        hi: 'चंद्रमा से केंद्र में गुरु यश, धन और उच्च पद लाता है'
      }
    });
  }

  // Budhaditya Yoga (Sun-Mercury conjunction)
  const sunHouse = chartData.planets.sun.house;
  const mercuryHouse = chartData.planets.mercury.house;
  if (sunHouse === mercuryHouse) {
    yogas.push({
      name: { en: 'Budhaditya Yoga', hi: 'बुधादित्य योग' },
      present: true,
      description: {
        en: 'Sun-Mercury conjunction brings intelligence, communication skills, and success in career',
        hi: 'सूर्य-बुध संयोग बुद्धि, संचार कौशल और करियर में सफलता लाता है'
      }
    });
  }

  // Dhana Yoga check (2nd and 11th lord connection)
  const secondLord = SIGN_LORDS[(lagnaIndex + 1) % 12];
  const eleventhLord = SIGN_LORDS[(lagnaIndex + 10) % 12];
  const secondPos = chartData.planets[secondLord];
  const eleventhPos = chartData.planets[eleventhLord];
  if (secondPos && eleventhPos && (secondPos.house === eleventhPos.house || secondPos.house === 11 || eleventhPos.house === 2)) {
    yogas.push({
      name: { en: 'Dhana Yoga', hi: 'धन योग' },
      present: true,
      description: {
        en: '2nd and 11th lord connection indicates strong wealth accumulation through career',
        hi: '2nd और 11th भाव के स्वामी का संबंध करियर के माध्यम से मजबूत धन संचय का संकेत देता है'
      }
    });
  }

  // If no yogas found, add a note
  if (yogas.length === 0) {
    yogas.push({
      name: { en: 'Standard Chart', hi: 'सामान्य कुंडली' },
      present: false,
      description: {
        en: 'No major Raj Yogas present, but individual planet strengths determine career success',
        hi: 'कोई प्रमुख राज योग नहीं है, लेकिन व्यक्तिगत ग्रहों की शक्ति करियर की सफलता निर्धारित करती है'
      }
    });
  }

  return yogas;
}

function determineCareerPeaks(
  chartData: FullChartData,
  birth: BirthDetails,
  tenthLord: string
): CareerResult['careerPeaks'] {
  const peaks: CareerResult['careerPeaks']= [];

  // Saturn return (around 29-30 years) is significant for career
  const saturnReturn = birth.year + 29;
  peaks.push({
    period: `${saturnReturn - 1} - ${saturnReturn + 1}`,
    description: {
      en: 'Saturn return period - Major career decisions and establishment',
      hi: 'शनि वापसी काल - प्रमुख करियर निर्णय और स्थापना'
    }
  });

  // Jupiter transit over 10th house (approximately every 12 years)
  const currentAge = new Date().getFullYear() - birth.year;
  const nextJupiterIn10th = Math.ceil(currentAge / 12) * 12;
  peaks.push({
    period: `Age ${nextJupiterIn10th} - ${nextJupiterIn10th + 1}`,
    description: {
      en: 'Jupiter transit over 10th house - Career growth and recognition',
      hi: '10वें भाव पर गुरु का गोचर - करियर में वृद्धि और मान्यता'
    }
  });

  // 10th lord dasha/antardasha
  peaks.push({
    period: `${tenthLord.charAt(0).toUpperCase() + tenthLord.slice(1)} Dasha`,
    description: {
      en: `Period of 10th lord ${tenthLord} brings career opportunities and advancement`,
      hi: `10वें भाव के स्वामी ${tenthLord} की दशा करियर के अवसर और उन्नति लाती है`
    }
  });

  return peaks;
}

function analyzeStrengthsChallenges(
  chartData: FullChartData,
  tenthLord: string,
  planetsIn10th: string[]
): { strengths: BilingualText[]; challenges: BilingualText[] } {
  const strengths: BilingualText[] = [];
  const challenges: BilingualText[] = [];

  const tenthLordHouse = chartData.planets[tenthLord].house;

  // Strengths
  if ([1, 4, 7, 10].includes(tenthLordHouse)) {
    strengths.push({
      en: '10th lord in angular house gives strong career foundation',
      hi: 'केंद्र भाव में 10वें भाव का स्वामी मजबूत करियर आधार देता है'
    });
  }

  if (planetsIn10th.includes('jupiter')) {
    strengths.push({
      en: 'Jupiter in 10th brings ethics, wisdom, and mentorship abilities',
      hi: '10वें भाव में गुरु नैतिकता, ज्ञान और मार्गदर्शन क्षमता लाता है'
    });
  }

  if (planetsIn10th.includes('sun')) {
    strengths.push({
      en: 'Sun in 10th gives leadership qualities and authority',
      hi: '10वें भाव में सूर्य नेतृत्व गुण और अधिकार देता है'
    });
  }

  const mercuryHouse = chartData.planets.mercury.house;
  if ([1, 4, 5, 7, 9, 10].includes(mercuryHouse)) {
    strengths.push({
      en: 'Strong Mercury enhances communication and analytical skills',
      hi: 'मजबूत बुध संचार और विश्लेषणात्मक कौशल बढ़ाता है'
    });
  }

  // Challenges
  if ([6, 8, 12].includes(tenthLordHouse)) {
    challenges.push({
      en: '10th lord in difficult house may require extra effort for career success',
      hi: 'कठिन भाव में 10वें भाव का स्वामी करियर की सफलता के लिए अतिरिक्त प्रयास की आवश्यकता हो सकती है'
    });
  }

  if (planetsIn10th.includes('saturn')) {
    challenges.push({
      en: 'Saturn in 10th may cause delays but brings lasting success through hard work',
      hi: '10वें भाव में शनि देरी कर सकता है लेकिन कड़ी मेहनत से स्थायी सफलता लाता है'
    });
  }

  if (planetsIn10th.includes('rahu')) {
    challenges.push({
      en: 'Rahu in 10th may bring unconventional career path and sudden changes',
      hi: '10वें भाव में राहु अपरंपरागत करियर मार्ग और अचानक परिवर्तन ला सकता है'
    });
  }

  if (planetsIn10th.includes('ketu')) {
    challenges.push({
      en: 'Ketu in 10th may cause lack of interest in material success initially',
      hi: '10वें भाव में केतु शुरू में भौतिक सफलता में रुचि की कमी कर सकता है'
    });
  }

  // Ensure at least one strength and challenge
  if (strengths.length === 0) {
    strengths.push({
      en: 'Natural adaptability helps in various career situations',
      hi: 'प्राकृतिक अनुकूलन क्षमता विभिन्न करियर स्थितियों में मदद करती है'
    });
  }

  if (challenges.length === 0) {
    challenges.push({
      en: 'Maintain work-life balance to avoid burnout',
      hi: 'थकान से बचने के लिए कार्य-जीवन संतुलन बनाए रखें'
    });
  }

  return { strengths: strengths.slice(0, 4), challenges: challenges.slice(0, 4) };
}

function generateCareerSummary(
  careerType: CareerResult['careerType'],
  govPotential: CareerResult['governmentJobPotential'],
  fields: CareerField[],
  yogas: CareerResult['rajYogas']
): BilingualText {
  const hasRajYoga = yogas.some(y => y.present && y.name.en !== 'Standard Chart');
  const topField = fields[0]?.field.en || 'various fields';

  let en = `Your chart indicates ${careerType.type === 'both' ? 'balanced potential for job and business' : `stronger inclination towards ${careerType.type}`}. `;
  let hi = `आपकी कुंडली ${careerType.type === 'both' ? 'नौकरी और व्यापार दोनों के लिए संतुलित क्षमता' : `${careerType.type === 'job' ? 'नौकरी' : 'व्यापार'} के प्रति मजबूत झुकाव`} दर्शाती है। `;

  if (govPotential.favorable) {
    en += `Government sector shows good potential (${govPotential.score}%). `;
    hi += `सरकारी क्षेत्र अच्छी संभावना दर्शाता है (${govPotential.score}%)। `;
  }

  en += `Best suited fields include ${topField}. `;
  hi += `सबसे उपयुक्त क्षेत्रों में ${fields[0]?.field.hi || 'विभिन्न क्षेत्र'} शामिल हैं। `;

  if (hasRajYoga) {
    en += `Presence of Raj Yoga(s) indicates potential for significant career success and recognition.`;
    hi += `राज योग की उपस्थिति महत्वपूर्ण करियर सफलता और मान्यता की संभावना दर्शाती है।`;
  } else {
    en += `Focus on consistent effort and skill development for career growth.`;
    hi += `करियर वृद्धि के लिए निरंतर प्रयास और कौशल विकास पर ध्यान दें।`;
  }

  return { en, hi };
}
