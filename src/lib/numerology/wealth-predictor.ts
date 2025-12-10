/**
 * Wealth & Money Predictor
 * Numerology-based financial destiny analysis based on birth date
 */

export interface BilingualText {
  en: string;
  hi: string;
}

export interface WealthPredictionResult {
  // Birth details
  birthDate: Date;
  lifePathNumber: number;
  isMasterNumber: boolean;

  // Wealth numbers
  wealthNumber: number; // Destiny/Expression number derived from date
  moneyKarmaNumber: number; // Sum of birth day

  // Wealth potential score (0-100)
  wealthPotentialScore: number;
  wealthCategory: 'excellent' | 'very-good' | 'good' | 'moderate' | 'needs-effort';

  // Financial personality
  financialPersonality: BilingualText;

  // Wealth strengths
  wealthStrengths: BilingualText[];

  // Financial challenges
  financialChallenges: BilingualText[];

  // Money habits
  moneyHabits: BilingualText[];

  // Best income sources
  bestIncomeSources: BilingualText[];

  // Wealth timing (favorable years)
  favorableYears: {
    year: number;
    reason: BilingualText;
  }[];

  // Lucky elements for wealth
  luckyElements: {
    numbers: number[];
    days: BilingualText[];
    colors: BilingualText[];
  };

  // Remedies for wealth enhancement
  remedies: BilingualText[];

  // Overall prediction
  overallPrediction: BilingualText;
}

// Wealth personalities by Life Path number
const WEALTH_PROFILES: Record<number, {
  personality: BilingualText;
  strengths: BilingualText[];
  challenges: BilingualText[];
  habits: BilingualText[];
  incomeSources: BilingualText[];
  wealthScore: number;
}> = {
  1: {
    personality: {
      en: 'The Independent Wealth Creator. You are destined to create wealth through innovation, leadership, and unique ventures.',
      hi: 'स्वतंत्र धन निर्माता। आप नवाचार, नेतृत्व और अनूठे उद्यमों के माध्यम से धन बनाने के लिए नियत हैं।'
    },
    strengths: [
      { en: 'Natural entrepreneurial abilities', hi: 'प्राकृतिक उद्यमशीलता क्षमताएं' },
      { en: 'Pioneering money-making ideas', hi: 'अग्रणी पैसा कमाने वाले विचार' },
      { en: 'Self-motivated wealth builder', hi: 'स्व-प्रेरित धन निर्माता' },
    ],
    challenges: [
      { en: 'May take excessive financial risks', hi: 'अत्यधिक वित्तीय जोखिम ले सकते हैं' },
      { en: 'Ego may affect business partnerships', hi: 'अहंकार व्यावसायिक साझेदारी को प्रभावित कर सकता है' },
    ],
    habits: [
      { en: 'Invests in personal ventures', hi: 'व्यक्तिगत उद्यमों में निवेश करता है' },
      { en: 'Prefers controlling own finances', hi: 'अपने वित्त को नियंत्रित करना पसंद करता है' },
    ],
    incomeSources: [
      { en: 'Own business/Entrepreneurship', hi: 'अपना व्यापार/उद्यमिता' },
      { en: 'Leadership positions', hi: 'नेतृत्व पद' },
      { en: 'Consulting services', hi: 'परामर्श सेवाएं' },
    ],
    wealthScore: 80,
  },
  2: {
    personality: {
      en: 'The Cooperative Wealth Builder. Your financial success comes through partnerships and collaborative ventures.',
      hi: 'सहकारी धन निर्माता। आपकी वित्तीय सफलता साझेदारी और सहयोगी उद्यमों के माध्यम से आती है।'
    },
    strengths: [
      { en: 'Excellent in financial partnerships', hi: 'वित्तीय साझेदारी में उत्कृष्ट' },
      { en: 'Diplomatic in money matters', hi: 'पैसे के मामलों में कूटनीतिक' },
      { en: 'Patient wealth accumulator', hi: 'धैर्यवान धन संचयकर्ता' },
    ],
    challenges: [
      { en: 'May depend too much on others', hi: 'दूसरों पर बहुत अधिक निर्भर हो सकते हैं' },
      { en: 'Indecision in financial choices', hi: 'वित्तीय विकल्पों में अनिर्णय' },
    ],
    habits: [
      { en: 'Saves consistently over time', hi: 'समय के साथ लगातार बचत करता है' },
      { en: 'Consults before major purchases', hi: 'प्रमुख खरीद से पहले परामर्श करता है' },
    ],
    incomeSources: [
      { en: 'Partnership businesses', hi: 'साझेदारी व्यवसाय' },
      { en: 'Collaborative projects', hi: 'सहयोगी परियोजनाएं' },
      { en: 'Support/Service roles', hi: 'समर्थन/सेवा भूमिकाएं' },
    ],
    wealthScore: 65,
  },
  3: {
    personality: {
      en: 'The Creative Wealth Magnet. Jupiter\'s blessings bring abundance through creativity and communication.',
      hi: 'रचनात्मक धन चुंबक। गुरु का आशीर्वाद रचनात्मकता और संचार के माध्यम से प्रचुरता लाता है।'
    },
    strengths: [
      { en: 'Attracts money easily', hi: 'आसानी से पैसा आकर्षित करता है' },
      { en: 'Multiple income talents', hi: 'कई आय प्रतिभाएं' },
      { en: 'Jupiter\'s blessing for abundance', hi: 'प्रचुरता के लिए गुरु का आशीर्वाद' },
    ],
    challenges: [
      { en: 'May overspend on pleasures', hi: 'आनंद पर अधिक खर्च कर सकते हैं' },
      { en: 'Scattered financial focus', hi: 'बिखरा हुआ वित्तीय फोकस' },
    ],
    habits: [
      { en: 'Generous with money', hi: 'पैसे के साथ उदार' },
      { en: 'Enjoys luxury spending', hi: 'विलासिता खर्च का आनंद लेता है' },
    ],
    incomeSources: [
      { en: 'Creative fields (Art, Design, Writing)', hi: 'रचनात्मक क्षेत्र (कला, डिजाइन, लेखन)' },
      { en: 'Entertainment industry', hi: 'मनोरंजन उद्योग' },
      { en: 'Communication/Media', hi: 'संचार/मीडिया' },
    ],
    wealthScore: 88,
  },
  4: {
    personality: {
      en: 'The Steady Wealth Builder. You create wealth through hard work, discipline, and systematic efforts.',
      hi: 'स्थिर धन निर्माता। आप कड़ी मेहनत, अनुशासन और व्यवस्थित प्रयासों के माध्यम से धन बनाते हैं।'
    },
    strengths: [
      { en: 'Disciplined saver', hi: 'अनुशासित बचतकर्ता' },
      { en: 'Builds lasting wealth', hi: 'स्थायी धन बनाता है' },
      { en: 'Practical money manager', hi: 'व्यावहारिक धन प्रबंधक' },
    ],
    challenges: [
      { en: 'Slow wealth accumulation', hi: 'धीमा धन संचय' },
      { en: 'May face unexpected expenses', hi: 'अप्रत्याशित खर्चों का सामना करना पड़ सकता है' },
      { en: 'Rahu influence - be cautious', hi: 'राहु प्रभाव - सावधान रहें' },
    ],
    habits: [
      { en: 'Budget-conscious', hi: 'बजट सचेत' },
      { en: 'Prefers secure investments', hi: 'सुरक्षित निवेश पसंद करता है' },
    ],
    incomeSources: [
      { en: 'Real estate', hi: 'रियल एस्टेट' },
      { en: 'Construction/Manufacturing', hi: 'निर्माण/विनिर्माण' },
      { en: 'Systematic job roles', hi: 'व्यवस्थित नौकरी भूमिकाएं' },
    ],
    wealthScore: 55,
  },
  5: {
    personality: {
      en: 'The Dynamic Money Maker. Mercury\'s energy brings wealth through versatility and quick thinking.',
      hi: 'गतिशील धन कमाने वाला। बुध की ऊर्जा बहुमुखी प्रतिभा और त्वरित सोच के माध्यम से धन लाती है।'
    },
    strengths: [
      { en: 'Quick financial opportunities', hi: 'त्वरित वित्तीय अवसर' },
      { en: 'Excellent in trading/commerce', hi: 'व्यापार/वाणिज्य में उत्कृष्ट' },
      { en: 'Adaptable to market changes', hi: 'बाजार परिवर्तनों के अनुकूल' },
    ],
    challenges: [
      { en: 'Money flows in and out fast', hi: 'पैसा तेजी से आता और जाता है' },
      { en: 'Risk of speculation losses', hi: 'सट्टा हानि का जोखिम' },
    ],
    habits: [
      { en: 'Multiple income streams', hi: 'कई आय धाराएं' },
      { en: 'Enjoys trading and deals', hi: 'व्यापार और सौदों का आनंद लेता है' },
    ],
    incomeSources: [
      { en: 'Trading/Stock market', hi: 'व्यापार/शेयर बाजार' },
      { en: 'Commission-based work', hi: 'कमीशन-आधारित कार्य' },
      { en: 'Travel/Export-Import', hi: 'यात्रा/आयात-निर्यात' },
    ],
    wealthScore: 82,
  },
  6: {
    personality: {
      en: 'The Luxurious Wealth Attractor. Venus brings money for comfort, beauty, and family prosperity.',
      hi: 'विलासितापूर्ण धन आकर्षक। शुक्र आराम, सुंदरता और पारिवारिक समृद्धि के लिए धन लाता है।'
    },
    strengths: [
      { en: 'Attracts luxury and comfort', hi: 'विलासिता और आराम को आकर्षित करता है' },
      { en: 'Good at wealth preservation', hi: 'धन संरक्षण में अच्छा' },
      { en: 'Family wealth builder', hi: 'पारिवारिक धन निर्माता' },
    ],
    challenges: [
      { en: 'May overspend on family/home', hi: 'परिवार/घर पर अधिक खर्च कर सकते हैं' },
      { en: 'Takes on others\' financial burdens', hi: 'दूसरों का वित्तीय बोझ उठाता है' },
    ],
    habits: [
      { en: 'Invests in family welfare', hi: 'पारिवारिक कल्याण में निवेश करता है' },
      { en: 'Values quality over quantity', hi: 'मात्रा से अधिक गुणवत्ता को महत्व देता है' },
    ],
    incomeSources: [
      { en: 'Hospitality/Hotels', hi: 'आतिथ्य/होटल' },
      { en: 'Beauty/Fashion industry', hi: 'सौंदर्य/फैशन उद्योग' },
      { en: 'Art and luxury goods', hi: 'कला और लक्जरी सामान' },
    ],
    wealthScore: 85,
  },
  7: {
    personality: {
      en: 'The Intuitive Wealth Seeker. Spiritual insights guide your financial path, often in unexpected ways.',
      hi: 'सहज धन साधक। आध्यात्मिक अंतर्दृष्टि आपके वित्तीय पथ का मार्गदर्शन करती है, अक्सर अप्रत्याशित तरीकों से।'
    },
    strengths: [
      { en: 'Intuitive financial decisions', hi: 'सहज वित्तीय निर्णय' },
      { en: 'Attracts unexpected gains', hi: 'अप्रत्याशित लाभ आकर्षित करता है' },
      { en: 'Intellectual wealth creation', hi: 'बौद्धिक धन सृजन' },
    ],
    challenges: [
      { en: 'Disinterest in material wealth', hi: 'भौतिक धन में अरुचि' },
      { en: 'May miss practical opportunities', hi: 'व्यावहारिक अवसर चूक सकते हैं' },
    ],
    habits: [
      { en: 'Minimal financial planning', hi: 'न्यूनतम वित्तीय योजना' },
      { en: 'Quality research before investing', hi: 'निवेश से पहले गुणवत्ता अनुसंधान' },
    ],
    incomeSources: [
      { en: 'Research/Academia', hi: 'अनुसंधान/अकादमिक' },
      { en: 'Spiritual services', hi: 'आध्यात्मिक सेवाएं' },
      { en: 'Technical analysis', hi: 'तकनीकी विश्लेषण' },
    ],
    wealthScore: 60,
  },
  8: {
    personality: {
      en: 'The Power Wealth Master. Saturn brings karmic wealth through discipline, authority, and large enterprises.',
      hi: 'शक्ति धन मास्टर। शनि अनुशासन, अधिकार और बड़े उद्यमों के माध्यम से कर्मिक धन लाता है।'
    },
    strengths: [
      { en: 'Potential for massive wealth', hi: 'बड़े धन की संभावना' },
      { en: 'Business empire builder', hi: 'व्यावसायिक साम्राज्य निर्माता' },
      { en: 'Authority in finance', hi: 'वित्त में अधिकार' },
    ],
    challenges: [
      { en: 'Karmic debts affect wealth', hi: 'कर्मिक ऋण धन को प्रभावित करते हैं' },
      { en: 'Extreme highs and lows', hi: 'अत्यधिक उतार-चढ़ाव' },
      { en: 'Wealth comes with tests', hi: 'धन परीक्षाओं के साथ आता है' },
    ],
    habits: [
      { en: 'Long-term wealth vision', hi: 'दीर्घकालिक धन दृष्टि' },
      { en: 'Power-oriented investments', hi: 'शक्ति-उन्मुख निवेश' },
    ],
    incomeSources: [
      { en: 'Corporate leadership', hi: 'कॉर्पोरेट नेतृत्व' },
      { en: 'Banking/Finance', hi: 'बैंकिंग/वित्त' },
      { en: 'Large-scale business', hi: 'बड़े पैमाने पर व्यापार' },
    ],
    wealthScore: 75,
  },
  9: {
    personality: {
      en: 'The Humanitarian Wealth Giver. Mars brings wealth that flows through service and giving.',
      hi: 'मानवतावादी धन दाता। मंगल ऐसा धन लाता है जो सेवा और देने के माध्यम से प्रवाहित होता है।'
    },
    strengths: [
      { en: 'Wealth through helping others', hi: 'दूसरों की मदद से धन' },
      { en: 'Global income opportunities', hi: 'वैश्विक आय अवसर' },
      { en: 'Generous and abundant mindset', hi: 'उदार और प्रचुर मानसिकता' },
    ],
    challenges: [
      { en: 'Gives away too much', hi: 'बहुत अधिक दे देता है' },
      { en: 'Emotional spending', hi: 'भावनात्मक खर्च' },
    ],
    habits: [
      { en: 'Donates to causes', hi: 'कारणों के लिए दान करता है' },
      { en: 'Spends on family needs', hi: 'परिवार की जरूरतों पर खर्च करता है' },
    ],
    incomeSources: [
      { en: 'NGO/Social enterprise', hi: 'एनजीओ/सामाजिक उद्यम' },
      { en: 'International work', hi: 'अंतरराष्ट्रीय कार्य' },
      { en: 'Legal/Defense services', hi: 'कानूनी/रक्षा सेवाएं' },
    ],
    wealthScore: 78,
  },
  11: {
    personality: {
      en: 'The Inspired Wealth Visionary. Master Number 11 brings wealth through spiritual insight and inspiration.',
      hi: 'प्रेरित धन दूरदर्शी। मास्टर नंबर 11 आध्यात्मिक अंतर्दृष्टि और प्रेरणा के माध्यम से धन लाता है।'
    },
    strengths: [
      { en: 'Intuitive wealth opportunities', hi: 'सहज धन अवसर' },
      { en: 'Inspires others to prosperity', hi: 'दूसरों को समृद्धि के लिए प्रेरित करता है' },
      { en: 'Spiritual wealth channel', hi: 'आध्यात्मिक धन चैनल' },
    ],
    challenges: [
      { en: 'May ignore practical finances', hi: 'व्यावहारिक वित्त को अनदेखा कर सकते हैं' },
      { en: 'Nervous energy affects decisions', hi: 'घबराहट की ऊर्जा निर्णयों को प्रभावित करती है' },
    ],
    habits: [
      { en: 'Values spiritual over material', hi: 'भौतिक से आध्यात्मिक को महत्व देता है' },
      { en: 'Invests in knowledge', hi: 'ज्ञान में निवेश करता है' },
    ],
    incomeSources: [
      { en: 'Spiritual teaching/Healing', hi: 'आध्यात्मिक शिक्षण/उपचार' },
      { en: 'Creative arts', hi: 'रचनात्मक कला' },
      { en: 'Motivational speaking', hi: 'प्रेरक वक्तृत्व' },
    ],
    wealthScore: 85,
  },
  22: {
    personality: {
      en: 'The Master Builder of Wealth. Master Number 22 has the highest potential for creating massive, lasting wealth.',
      hi: 'धन का मास्टर बिल्डर। मास्टर नंबर 22 में बड़े पैमाने पर, स्थायी धन बनाने की सबसे अधिक क्षमता है।'
    },
    strengths: [
      { en: 'Highest wealth potential', hi: 'सबसे अधिक धन क्षमता' },
      { en: 'Builds financial empires', hi: 'वित्तीय साम्राज्य बनाता है' },
      { en: 'Practical manifester', hi: 'व्यावहारिक प्रकटकर्ता' },
    ],
    challenges: [
      { en: 'High pressure and responsibility', hi: 'उच्च दबाव और जिम्मेदारी' },
      { en: 'May feel burdened by wealth', hi: 'धन से बोझिल महसूस कर सकते हैं' },
    ],
    habits: [
      { en: 'Strategic long-term planning', hi: 'रणनीतिक दीर्घकालिक योजना' },
      { en: 'Invests in large projects', hi: 'बड़ी परियोजनाओं में निवेश करता है' },
    ],
    incomeSources: [
      { en: 'Large-scale enterprises', hi: 'बड़े पैमाने पर उद्यम' },
      { en: 'Real estate development', hi: 'रियल एस्टेट विकास' },
      { en: 'Infrastructure projects', hi: 'बुनियादी ढांचा परियोजनाएं' },
    ],
    wealthScore: 95,
  },
};

// Lucky elements for wealth by number
const LUCKY_ELEMENTS: Record<number, {
  numbers: number[];
  days: BilingualText[];
  colors: BilingualText[];
}> = {
  1: { numbers: [1, 4, 10, 19, 28], days: [{ en: 'Sunday', hi: 'रविवार' }], colors: [{ en: 'Gold, Orange', hi: 'सुनहरा, नारंगी' }] },
  2: { numbers: [2, 7, 11, 16, 20], days: [{ en: 'Monday', hi: 'सोमवार' }], colors: [{ en: 'White, Silver', hi: 'सफेद, चांदी' }] },
  3: { numbers: [3, 12, 21, 30], days: [{ en: 'Thursday', hi: 'गुरुवार' }], colors: [{ en: 'Yellow, Gold', hi: 'पीला, सुनहरा' }] },
  4: { numbers: [4, 13, 22, 31], days: [{ en: 'Saturday', hi: 'शनिवार' }], colors: [{ en: 'Blue, Grey', hi: 'नीला, ग्रे' }] },
  5: { numbers: [5, 14, 23], days: [{ en: 'Wednesday', hi: 'बुधवार' }], colors: [{ en: 'Green', hi: 'हरा' }] },
  6: { numbers: [6, 15, 24], days: [{ en: 'Friday', hi: 'शुक्रवार' }], colors: [{ en: 'Pink, White', hi: 'गुलाबी, सफेद' }] },
  7: { numbers: [7, 16, 25], days: [{ en: 'Monday', hi: 'सोमवार' }], colors: [{ en: 'White, Light Blue', hi: 'सफेद, हल्का नीला' }] },
  8: { numbers: [8, 17, 26], days: [{ en: 'Saturday', hi: 'शनिवार' }], colors: [{ en: 'Black, Navy Blue', hi: 'काला, नेवी ब्लू' }] },
  9: { numbers: [9, 18, 27], days: [{ en: 'Tuesday', hi: 'मंगलवार' }], colors: [{ en: 'Red, Maroon', hi: 'लाल, मैरून' }] },
  11: { numbers: [11, 29, 2, 7], days: [{ en: 'Monday', hi: 'सोमवार' }], colors: [{ en: 'Silver, White', hi: 'चांदी, सफेद' }] },
  22: { numbers: [22, 4, 13, 31], days: [{ en: 'Saturday', hi: 'शनिवार' }], colors: [{ en: 'Dark Blue, Black', hi: 'गहरा नीला, काला' }] },
};

/**
 * Calculate Life Path number
 */
function calculateLifePath(birthDate: Date): { number: number; isMaster: boolean } {
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1;
  const year = birthDate.getFullYear();

  const dateStr = `${day}${month}${year}`;
  let sum = 0;
  for (const digit of dateStr) {
    sum += parseInt(digit);
  }

  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    let newSum = 0;
    for (const digit of sum.toString()) {
      newSum += parseInt(digit);
    }
    sum = newSum;
  }

  return {
    number: sum === 33 ? 6 : sum,
    isMaster: sum === 11 || sum === 22 || sum === 33,
  };
}

/**
 * Calculate money karma number (day of birth reduced)
 */
function calculateMoneyKarma(day: number): number {
  if (day <= 9) return day;
  if (day === 11 || day === 22) return day;

  let sum = 0;
  for (const digit of day.toString()) {
    sum += parseInt(digit);
  }
  return sum;
}

/**
 * Generate favorable years
 */
function generateFavorableYears(birthDate: Date, lifePathNumber: number): WealthPredictionResult['favorableYears'] {
  const currentYear = new Date().getFullYear();
  const birthYear = birthDate.getFullYear();
  const favorableYears: WealthPredictionResult['favorableYears'] = [];

  // Personal years that match Life Path or are 8 (wealth number)
  for (let year = currentYear; year <= currentYear + 5; year++) {
    const personalYear = calculatePersonalYear(birthDate, year);

    if (personalYear === lifePathNumber) {
      favorableYears.push({
        year,
        reason: {
          en: `Personal Year ${personalYear} aligns with your Life Path - excellent for financial growth`,
          hi: `व्यक्तिगत वर्ष ${personalYear} आपके मूलांक के साथ संरेखित है - वित्तीय वृद्धि के लिए उत्कृष्ट`
        }
      });
    } else if (personalYear === 8) {
      favorableYears.push({
        year,
        reason: {
          en: 'Personal Year 8 brings karmic rewards and wealth opportunities',
          hi: 'व्यक्तिगत वर्ष 8 कर्मिक पुरस्कार और धन के अवसर लाता है'
        }
      });
    } else if (personalYear === 3) {
      favorableYears.push({
        year,
        reason: {
          en: 'Personal Year 3 brings Jupiter\'s blessings for expansion',
          hi: 'व्यक्तिगत वर्ष 3 विस्तार के लिए गुरु का आशीर्वाद लाता है'
        }
      });
    }
  }

  return favorableYears.slice(0, 3);
}

function calculatePersonalYear(birthDate: Date, year: number): number {
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1;

  let sum = day + month;
  for (const digit of year.toString()) {
    sum += parseInt(digit);
  }

  while (sum > 9) {
    let newSum = 0;
    for (const digit of sum.toString()) {
      newSum += parseInt(digit);
    }
    sum = newSum;
  }

  return sum;
}

/**
 * Generate remedies
 */
function generateRemedies(lifePathNumber: number): BilingualText[] {
  const baseRemedies: BilingualText[] = [
    { en: 'Keep your wallet organized and clean', hi: 'अपना बटुआ व्यवस्थित और साफ रखें' },
    { en: 'Practice gratitude for current wealth', hi: 'वर्तमान धन के लिए कृतज्ञता का अभ्यास करें' },
  ];

  const numberRemedies: Record<number, BilingualText[]> = {
    1: [{ en: 'Worship Sun on Sundays for financial growth', hi: 'वित्तीय वृद्धि के लिए रविवार को सूर्य की पूजा करें' }],
    2: [{ en: 'Keep water flowing in your home for abundance', hi: 'प्रचुरता के लिए अपने घर में पानी बहता रखें' }],
    3: [{ en: 'Wear yellow on Thursdays for Jupiter\'s blessings', hi: 'गुरु के आशीर्वाद के लिए गुरुवार को पीला पहनें' }],
    4: [{ en: 'Donate to laborers on Saturdays', hi: 'शनिवार को मजदूरों को दान करें' }],
    5: [{ en: 'Keep money in green wallet or cloth', hi: 'हरे बटुए या कपड़े में पैसे रखें' }],
    6: [{ en: 'Donate to women and children on Fridays', hi: 'शुक्रवार को महिलाओं और बच्चों को दान करें' }],
    7: [{ en: 'Meditate for financial clarity', hi: 'वित्तीय स्पष्टता के लिए ध्यान करें' }],
    8: [{ en: 'Feed crows and perform Shani remedies', hi: 'कौओं को खिलाएं और शनि उपाय करें' }],
    9: [{ en: 'Donate to soldiers or fire-related causes', hi: 'सैनिकों या अग्नि संबंधी कारणों के लिए दान करें' }],
    11: [{ en: 'Practice spiritual cleansing for wealth flow', hi: 'धन प्रवाह के लिए आध्यात्मिक शुद्धि का अभ्यास करें' }],
    22: [{ en: 'Build something meaningful for lasting wealth', hi: 'स्थायी धन के लिए कुछ सार्थक बनाएं' }],
  };

  return [...baseRemedies, ...(numberRemedies[lifePathNumber] || [])];
}

/**
 * Calculate wealth prediction
 */
export function calculateWealthPrediction(birthDate: Date): WealthPredictionResult {
  const lp = calculateLifePath(birthDate);
  const moneyKarma = calculateMoneyKarma(birthDate.getDate());
  const wealthNumber = (lp.number + moneyKarma) % 9 || 9;

  const profile = WEALTH_PROFILES[lp.number] || WEALTH_PROFILES[1];
  const lucky = LUCKY_ELEMENTS[lp.number] || LUCKY_ELEMENTS[1];

  // Calculate wealth potential score
  let wealthPotentialScore = profile.wealthScore;
  if (lp.isMaster) wealthPotentialScore = Math.min(100, wealthPotentialScore + 10);
  if ([3, 8].includes(moneyKarma)) wealthPotentialScore = Math.min(100, wealthPotentialScore + 5);

  // Determine category
  let wealthCategory: WealthPredictionResult['wealthCategory'];
  if (wealthPotentialScore >= 90) wealthCategory = 'excellent';
  else if (wealthPotentialScore >= 80) wealthCategory = 'very-good';
  else if (wealthPotentialScore >= 70) wealthCategory = 'good';
  else if (wealthPotentialScore >= 55) wealthCategory = 'moderate';
  else wealthCategory = 'needs-effort';

  const favorableYears = generateFavorableYears(birthDate, lp.number);
  const remedies = generateRemedies(lp.number);

  // Generate overall prediction
  const overallPrediction = generateOverallPrediction(lp.number, wealthPotentialScore, wealthCategory, lp.isMaster);

  return {
    birthDate,
    lifePathNumber: lp.number,
    isMasterNumber: lp.isMaster,
    wealthNumber,
    moneyKarmaNumber: moneyKarma,
    wealthPotentialScore,
    wealthCategory,
    financialPersonality: profile.personality,
    wealthStrengths: profile.strengths,
    financialChallenges: profile.challenges,
    moneyHabits: profile.habits,
    bestIncomeSources: profile.incomeSources,
    favorableYears,
    luckyElements: lucky,
    remedies,
    overallPrediction,
  };
}

function generateOverallPrediction(
  lifePathNumber: number,
  score: number,
  category: WealthPredictionResult['wealthCategory'],
  isMaster: boolean
): BilingualText {
  const categoryText = {
    excellent: { en: 'excellent', hi: 'उत्कृष्ट' },
    'very-good': { en: 'very good', hi: 'बहुत अच्छी' },
    good: { en: 'good', hi: 'अच्छी' },
    moderate: { en: 'moderate', hi: 'मध्यम' },
    'needs-effort': { en: 'needs consistent effort', hi: 'लगातार प्रयास की आवश्यकता' },
  };

  return {
    en: `With Life Path ${lifePathNumber}${isMaster ? ' (Master Number)' : ''}, your wealth potential is ${categoryText[category].en} at ${score}%. ${category === 'excellent' || category === 'very-good' ? 'You have natural abundance energy - focus on channeling it effectively.' : 'By following the remedies and focusing on your strengths, you can significantly improve your financial destiny.'}`,
    hi: `मूलांक ${lifePathNumber}${isMaster ? ' (मास्टर नंबर)' : ''} के साथ, आपकी धन क्षमता ${score}% पर ${categoryText[category].hi} है। ${category === 'excellent' || category === 'very-good' ? 'आपके पास प्राकृतिक प्रचुरता ऊर्जा है - इसे प्रभावी ढंग से चैनल करने पर ध्यान दें।' : 'उपायों का पालन करके और अपनी ताकत पर ध्यान केंद्रित करके, आप अपने वित्तीय भाग्य में काफी सुधार कर सकते हैं।'}`
  };
}
