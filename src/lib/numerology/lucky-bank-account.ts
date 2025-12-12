/**
 * Lucky Bank Account Number Calculator
 * Numerology-based bank account number analysis for wealth attraction
 */

export interface BilingualText {
  en: string;
  hi: string;
}

export interface BankAccountResult {
  // The account number analyzed
  accountNumber: string;

  // Total number (reduced)
  totalNumber: number;
  isMasterNumber: boolean;

  // Breakdown
  digitSum: number;
  reductionSteps: number[];

  // Financial luck rating (0-100)
  wealthScore: number;
  wealthCategory: 'excellent' | 'good' | 'average' | 'weak';

  // Financial meaning
  financialMeaning: BilingualText;

  // Wealth attractions
  wealthAttractions: BilingualText[];

  // Financial cautions
  financialCautions: BilingualText[];

  // Recommended actions
  recommendations: BilingualText[];

  // Best account uses
  bestUses: BilingualText[];

  // Planetary influence
  rulingPlanet: BilingualText;

  // Compatibility with birth date
  birthDateCompatibility?: {
    lifePathNumber: number;
    compatible: boolean;
    reason: BilingualText;
  };

  // Overall verdict
  verdict: BilingualText;
}

// Financial numerology meanings
const FINANCIAL_MEANINGS: Record<number, {
  meaning: BilingualText;
  wealthAttractions: BilingualText[];
  cautions: BilingualText[];
  bestUses: BilingualText[];
  rulingPlanet: BilingualText;
  wealthScore: number;
}> = {
  1: {
    meaning: {
      en: 'Number 1 represents new beginnings and leadership in finances. This account attracts opportunities for independent wealth creation.',
      hi: 'अंक 1 वित्त में नई शुरुआत और नेतृत्व का प्रतिनिधित्व करता है। यह खाता स्वतंत्र धन सृजन के अवसरों को आकर्षित करता है।'
    },
    wealthAttractions: [
      { en: 'Attracts new income sources', hi: 'नए आय स्रोतों को आकर्षित करता है' },
      { en: 'Good for starting fresh financial ventures', hi: 'नई वित्तीय उद्यम शुरू करने के लिए अच्छा' },
      { en: 'Supports independent business income', hi: 'स्वतंत्र व्यावसायिक आय का समर्थन करता है' },
    ],
    cautions: [
      { en: 'May attract irregular income patterns', hi: 'अनियमित आय पैटर्न आकर्षित कर सकता है' },
      { en: 'Requires self-discipline in spending', hi: 'खर्च में आत्म-अनुशासन की आवश्यकता' },
    ],
    bestUses: [
      { en: 'Business income account', hi: 'व्यावसायिक आय खाता' },
      { en: 'New venture savings', hi: 'नए उद्यम बचत' },
      { en: 'Personal primary account', hi: 'व्यक्तिगत प्राथमिक खाता' },
    ],
    rulingPlanet: { en: 'Sun (Surya)', hi: 'सूर्य' },
    wealthScore: 75,
  },
  2: {
    meaning: {
      en: 'Number 2 represents partnerships and balanced finances. This account supports joint ventures and cooperative wealth.',
      hi: 'अंक 2 साझेदारी और संतुलित वित्त का प्रतिनिधित्व करता है। यह खाता संयुक्त उद्यमों और सहकारी धन का समर्थन करता है।'
    },
    wealthAttractions: [
      { en: 'Good for joint accounts and partnerships', hi: 'संयुक्त खातों और साझेदारी के लिए अच्छा' },
      { en: 'Attracts cooperative income', hi: 'सहकारी आय को आकर्षित करता है' },
      { en: 'Supports family savings', hi: 'पारिवारिक बचत का समर्थन करता है' },
    ],
    cautions: [
      { en: 'May create dependency on others', hi: 'दूसरों पर निर्भरता पैदा कर सकता है' },
      { en: 'Avoid sole proprietor accounts', hi: 'एकल मालिक खातों से बचें' },
    ],
    bestUses: [
      { en: 'Joint savings account', hi: 'संयुक्त बचत खाता' },
      { en: 'Family emergency fund', hi: 'पारिवारिक आपातकालीन निधि' },
      { en: 'Partnership business account', hi: 'साझेदारी व्यवसाय खाता' },
    ],
    rulingPlanet: { en: 'Moon (Chandra)', hi: 'चंद्रमा' },
    wealthScore: 60,
  },
  3: {
    meaning: {
      en: 'Number 3 represents expansion and growth. This is one of the most auspicious numbers for wealth multiplication.',
      hi: 'अंक 3 विस्तार और वृद्धि का प्रतिनिधित्व करता है। यह धन गुणन के लिए सबसे शुभ अंकों में से एक है।'
    },
    wealthAttractions: [
      { en: 'Excellent for wealth multiplication', hi: 'धन गुणन के लिए उत्कृष्ट' },
      { en: 'Attracts creative income sources', hi: 'रचनात्मक आय स्रोतों को आकर्षित करता है' },
      { en: 'Jupiter energy brings abundance', hi: 'गुरु ऊर्जा प्रचुरता लाती है' },
    ],
    cautions: [
      { en: 'May encourage overspending', hi: 'अधिक खर्च को प्रोत्साहित कर सकता है' },
      { en: 'Requires budget discipline', hi: 'बजट अनुशासन की आवश्यकता' },
    ],
    bestUses: [
      { en: 'Investment account', hi: 'निवेश खाता' },
      { en: 'Business expansion fund', hi: 'व्यावसायिक विस्तार निधि' },
      { en: 'Savings for growth', hi: 'विकास के लिए बचत' },
    ],
    rulingPlanet: { en: 'Jupiter (Guru/Brihaspati)', hi: 'गुरु/बृहस्पति' },
    wealthScore: 90,
  },
  4: {
    meaning: {
      en: 'Number 4 represents stability and hard work. Money in this account requires effort but provides security.',
      hi: 'अंक 4 स्थिरता और कड़ी मेहनत का प्रतिनिधित्व करता है। इस खाते में धन को प्रयास की आवश्यकता है लेकिन सुरक्षा प्रदान करता है।'
    },
    wealthAttractions: [
      { en: 'Provides financial stability', hi: 'वित्तीय स्थिरता प्रदान करता है' },
      { en: 'Good for long-term savings', hi: 'दीर्घकालिक बचत के लिए अच्छा' },
      { en: 'Rewards consistent deposits', hi: 'लगातार जमा को पुरस्कृत करता है' },
    ],
    cautions: [
      { en: 'Growth may be slow', hi: 'वृद्धि धीमी हो सकती है' },
      { en: 'Rahu influence - sudden expenses possible', hi: 'राहु प्रभाव - अचानक खर्च संभव' },
      { en: 'Not ideal for speculation', hi: 'अटकलों के लिए आदर्श नहीं' },
    ],
    bestUses: [
      { en: 'Fixed deposit account', hi: 'सावधि जमा खाता' },
      { en: 'Emergency fund', hi: 'आपातकालीन निधि' },
      { en: 'Rent or mortgage payments', hi: 'किराया या बंधक भुगतान' },
    ],
    rulingPlanet: { en: 'Rahu', hi: 'राहु' },
    wealthScore: 50,
  },
  5: {
    meaning: {
      en: 'Number 5 represents change and commerce. Excellent for business accounts and trading.',
      hi: 'अंक 5 परिवर्तन और वाणिज्य का प्रतिनिधित्व करता है। व्यावसायिक खातों और व्यापार के लिए उत्कृष्ट।'
    },
    wealthAttractions: [
      { en: 'Best for business and trading', hi: 'व्यापार और ट्रेडिंग के लिए सर्वश्रेष्ठ' },
      { en: 'Mercury energy attracts commerce', hi: 'बुध ऊर्जा वाणिज्य को आकर्षित करती है' },
      { en: 'Good for multiple income streams', hi: 'कई आय धाराओं के लिए अच्छा' },
      { en: 'Attracts quick financial gains', hi: 'त्वरित वित्तीय लाभ आकर्षित करता है' },
    ],
    cautions: [
      { en: 'Money may flow in and out quickly', hi: 'पैसा जल्दी आ और जा सकता है' },
      { en: 'Requires careful money management', hi: 'सावधानीपूर्वक धन प्रबंधन की आवश्यकता' },
    ],
    bestUses: [
      { en: 'Current/business account', hi: 'चालू/व्यावसायिक खाता' },
      { en: 'Trading account', hi: 'ट्रेडिंग खाता' },
      { en: 'Freelance income account', hi: 'फ्रीलांस आय खाता' },
    ],
    rulingPlanet: { en: 'Mercury (Budh)', hi: 'बुध' },
    wealthScore: 85,
  },
  6: {
    meaning: {
      en: 'Number 6 represents luxury and comfort. Venus energy attracts wealth for beautiful living.',
      hi: 'अंक 6 विलासिता और आराम का प्रतिनिधित्व करता है। शुक्र ऊर्जा सुंदर जीवन के लिए धन आकर्षित करती है।'
    },
    wealthAttractions: [
      { en: 'Attracts money for luxuries', hi: 'विलासिता के लिए धन आकर्षित करता है' },
      { en: 'Good for family finances', hi: 'पारिवारिक वित्त के लिए अच्छा' },
      { en: 'Venus brings material comforts', hi: 'शुक्र भौतिक आराम लाता है' },
    ],
    cautions: [
      { en: 'May encourage luxury spending', hi: 'विलासिता खर्च को प्रोत्साहित कर सकता है' },
      { en: 'Balance saving with enjoyment', hi: 'आनंद के साथ बचत को संतुलित करें' },
    ],
    bestUses: [
      { en: 'Home improvement fund', hi: 'गृह सुधार निधि' },
      { en: 'Vacation savings', hi: 'छुट्टी बचत' },
      { en: 'Art/jewelry purchases', hi: 'कला/आभूषण खरीदारी' },
    ],
    rulingPlanet: { en: 'Venus (Shukra)', hi: 'शुक्र' },
    wealthScore: 82,
  },
  7: {
    meaning: {
      en: 'Number 7 represents spirituality and research. Money in this account grows through wisdom and analysis.',
      hi: 'अंक 7 आध्यात्मिकता और अनुसंधान का प्रतिनिधित्व करता है। इस खाते में धन ज्ञान और विश्लेषण के माध्यम से बढ़ता है।'
    },
    wealthAttractions: [
      { en: 'Good for research-based income', hi: 'अनुसंधान-आधारित आय के लिए अच्छा' },
      { en: 'Attracts unexpected gains', hi: 'अप्रत्याशित लाभ आकर्षित करता है' },
      { en: 'Supports intellectual pursuits', hi: 'बौद्धिक कार्यों का समर्थन करता है' },
    ],
    cautions: [
      { en: 'May experience financial isolation', hi: 'वित्तीय अकेलापन अनुभव हो सकता है' },
      { en: 'Not ideal for active trading', hi: 'सक्रिय ट्रेडिंग के लिए आदर्श नहीं' },
      { en: 'Ketu influence - detachment from wealth', hi: 'केतु प्रभाव - धन से वैराग्य' },
    ],
    bestUses: [
      { en: 'Education fund', hi: 'शिक्षा निधि' },
      { en: 'Research grants', hi: 'अनुसंधान अनुदान' },
      { en: 'Spiritual organization account', hi: 'आध्यात्मिक संगठन खाता' },
    ],
    rulingPlanet: { en: 'Ketu', hi: 'केतु' },
    wealthScore: 55,
  },
  8: {
    meaning: {
      en: 'Number 8 represents karma and material wealth. Saturn rules this number bringing delayed but lasting wealth.',
      hi: 'अंक 8 कर्म और भौतिक धन का प्रतिनिधित्व करता है। शनि इस अंक पर राज करता है जो विलंबित लेकिन स्थायी धन लाता है।'
    },
    wealthAttractions: [
      { en: 'Attracts large sums over time', hi: 'समय के साथ बड़ी राशि आकर्षित करता है' },
      { en: 'Good for corporate and legal income', hi: 'कॉर्पोरेट और कानूनी आय के लिए अच्छा' },
      { en: 'Saturn rewards discipline and patience', hi: 'शनि अनुशासन और धैर्य को पुरस्कृत करता है' },
    ],
    cautions: [
      { en: 'May face delays in financial growth', hi: 'वित्तीय वृद्धि में देरी का सामना करना पड़ सकता है' },
      { en: 'Karmic debts may affect balance', hi: 'कर्मिक ऋण शेष को प्रभावित कर सकते हैं' },
      { en: 'Requires patience and persistence', hi: 'धैर्य और दृढ़ता की आवश्यकता' },
    ],
    bestUses: [
      { en: 'Long-term investments', hi: 'दीर्घकालिक निवेश' },
      { en: 'Retirement fund', hi: 'सेवानिवृत्ति निधि' },
      { en: 'Legal settlements', hi: 'कानूनी निपटान' },
    ],
    rulingPlanet: { en: 'Saturn (Shani)', hi: 'शनि' },
    wealthScore: 65,
  },
  9: {
    meaning: {
      en: 'Number 9 represents completion and humanitarian wealth. Mars energy brings dynamic and passionate financial growth.',
      hi: 'अंक 9 पूर्णता और मानवीय धन का प्रतिनिधित्व करता है। मंगल ऊर्जा गतिशील और जुनूनी वित्तीय वृद्धि लाती है।'
    },
    wealthAttractions: [
      { en: 'Attracts wealth through service', hi: 'सेवा के माध्यम से धन आकर्षित करता है' },
      { en: 'Mars brings energetic income', hi: 'मंगल ऊर्जावान आय लाता है' },
      { en: 'Good for charitable foundations', hi: 'धर्मार्थ संस्थानों के लिए अच्छा' },
    ],
    cautions: [
      { en: 'Money may come and go', hi: 'पैसा आ और जा सकता है' },
      { en: 'Avoid impulsive financial decisions', hi: 'आवेगपूर्ण वित्तीय निर्णयों से बचें' },
    ],
    bestUses: [
      { en: 'Charity and donations', hi: 'दान और अनुदान' },
      { en: 'Property investments', hi: 'संपत्ति निवेश' },
      { en: 'NGO or trust account', hi: 'एनजीओ या ट्रस्ट खाता' },
    ],
    rulingPlanet: { en: 'Mars (Mangal)', hi: 'मंगल' },
    wealthScore: 78,
  },
  11: {
    meaning: {
      en: 'Master Number 11 brings intuitive wealth. This powerful number attracts money through spiritual and creative channels.',
      hi: 'मास्टर नंबर 11 सहज धन लाता है। यह शक्तिशाली अंक आध्यात्मिक और रचनात्मक चैनलों के माध्यम से धन आकर्षित करता है।'
    },
    wealthAttractions: [
      { en: 'Attracts inspired income opportunities', hi: 'प्रेरित आय अवसरों को आकर्षित करता है' },
      { en: 'Excellent for creative businesses', hi: 'रचनात्मक व्यवसायों के लिए उत्कृष्ट' },
      { en: 'Master healer and teacher energy', hi: 'मास्टर हीलर और शिक्षक ऊर्जा' },
    ],
    cautions: [
      { en: 'High vibration requires grounding', hi: 'उच्च कंपन को ग्राउंडिंग की आवश्यकता' },
      { en: 'May attract unconventional income', hi: 'अपरंपरागत आय आकर्षित कर सकता है' },
    ],
    bestUses: [
      { en: 'Spiritual business income', hi: 'आध्यात्मिक व्यावसायिक आय' },
      { en: 'Teaching and coaching fees', hi: 'शिक्षण और कोचिंग शुल्क' },
      { en: 'Creative project funds', hi: 'रचनात्मक परियोजना निधि' },
    ],
    rulingPlanet: { en: 'Uranus/Moon', hi: 'यूरेनस/चंद्रमा' },
    wealthScore: 88,
  },
  22: {
    meaning: {
      en: 'Master Number 22 is the Master Builder number. It attracts large-scale wealth and manifests big financial dreams.',
      hi: 'मास्टर नंबर 22 मास्टर बिल्डर अंक है। यह बड़े पैमाने पर धन आकर्षित करता है और बड़े वित्तीय सपनों को साकार करता है।'
    },
    wealthAttractions: [
      { en: 'Attracts large-scale financial success', hi: 'बड़े पैमाने पर वित्तीय सफलता आकर्षित करता है' },
      { en: 'Best for major investments', hi: 'प्रमुख निवेशों के लिए सर्वश्रेष्ठ' },
      { en: 'Manifests practical wealth', hi: 'व्यावहारिक धन का प्रकटीकरण' },
    ],
    cautions: [
      { en: 'Large responsibility with large wealth', hi: 'बड़े धन के साथ बड़ी जिम्मेदारी' },
      { en: 'Requires organized financial management', hi: 'संगठित वित्तीय प्रबंधन की आवश्यकता' },
    ],
    bestUses: [
      { en: 'Major project funding', hi: 'प्रमुख परियोजना वित्तपोषण' },
      { en: 'Real estate investments', hi: 'रियल एस्टेट निवेश' },
      { en: 'Corporate accounts', hi: 'कॉर्पोरेट खाते' },
    ],
    rulingPlanet: { en: 'Saturn/Master Energy', hi: 'शनि/मास्टर ऊर्जा' },
    wealthScore: 95,
  },
};

/**
 * Calculate digit sum with reduction steps
 */
function calculateDigitSum(numberStr: string): { sum: number; steps: number[] } {
  const steps: number[] = [];
  let sum = 0;

  // Initial sum of all digits
  for (const digit of numberStr) {
    if (/\d/.test(digit)) {
      sum += parseInt(digit);
    }
  }
  steps.push(sum);

  // Reduce until single digit or master number
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    let newSum = 0;
    for (const digit of sum.toString()) {
      newSum += parseInt(digit);
    }
    sum = newSum;
    steps.push(sum);
  }

  return { sum, steps };
}

/**
 * Calculate Life Path number from birth date
 */
export function calculateLifePathNumber(birthDate: Date): number {
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1;
  const year = birthDate.getFullYear();

  const dateStr = `${day}${month}${year}`;
  const { sum } = calculateDigitSum(dateStr);
  return sum;
}

/**
 * Check if two numbers are compatible
 */
function areNumbersCompatible(num1: number, num2: number): boolean {
  // Convert master numbers to their base
  const base1 = num1 === 11 ? 2 : num1 === 22 ? 4 : num1;
  const base2 = num2 === 11 ? 2 : num2 === 22 ? 4 : num2;

  // Compatibility groups for wealth
  const groups = [
    [1, 5, 7], // Independent numbers
    [2, 6, 9], // Emotional/caring numbers
    [3, 5, 6], // Creative/wealth numbers
    [4, 8], // Material numbers
    [1, 3, 9], // Leadership numbers
  ];

  for (const group of groups) {
    if (group.includes(base1) && group.includes(base2)) {
      return true;
    }
  }

  // Same number is always compatible
  return base1 === base2;
}

/**
 * Analyze bank account number
 */
export function analyzeBankAccountNumber(
  accountNumber: string,
  birthDate?: Date
): BankAccountResult {
  // Clean the number
  const cleanNumber = accountNumber.replace(/[\s\-]/g, '');

  // Calculate digit sum
  const { sum, steps } = calculateDigitSum(cleanNumber);
  const digitSum = steps[0];

  // Check if master number
  const isMasterNumber = sum === 11 || sum === 22;

  // Get financial meaning
  const meaningKey = FINANCIAL_MEANINGS[sum] ? sum : (sum === 33 ? 6 : sum % 9 || 9);
  const financialData = FINANCIAL_MEANINGS[meaningKey] || FINANCIAL_MEANINGS[1];

  // Calculate wealth score
  let wealthScore = financialData.wealthScore;

  // Adjust for master numbers
  if (isMasterNumber) {
    wealthScore = Math.min(wealthScore + 8, 100);
  }

  // Birth date compatibility
  let birthDateCompatibility: BankAccountResult['birthDateCompatibility'] | undefined;
  if (birthDate) {
    const lifePathNumber = calculateLifePathNumber(birthDate);
    const compatible = areNumbersCompatible(sum, lifePathNumber);
    birthDateCompatibility = {
      lifePathNumber,
      compatible,
      reason: compatible
        ? {
            en: `Your Life Path ${lifePathNumber} harmonizes well with account number ${sum}. This account supports your financial growth.`,
            hi: `आपका मूलांक ${lifePathNumber} खाता संख्या ${sum} के साथ अच्छी तरह सामंजस्य करता है। यह खाता आपकी वित्तीय वृद्धि का समर्थन करता है।`
          }
        : {
            en: `Life Path ${lifePathNumber} may face some friction with account number ${sum}. Consider using this account for specific purposes.`,
            hi: `मूलांक ${lifePathNumber} को खाता संख्या ${sum} के साथ कुछ घर्षण का सामना करना पड़ सकता है। इस खाते को विशिष्ट उद्देश्यों के लिए उपयोग करें।`
          }
    };

    // Adjust wealth score based on compatibility
    if (compatible) {
      wealthScore = Math.min(wealthScore + 5, 100);
    } else {
      wealthScore = Math.max(wealthScore - 10, 30);
    }
  }

  // Determine wealth category
  let wealthCategory: BankAccountResult['wealthCategory'];
  if (wealthScore >= 85) wealthCategory = 'excellent';
  else if (wealthScore >= 70) wealthCategory = 'good';
  else if (wealthScore >= 55) wealthCategory = 'average';
  else wealthCategory = 'weak';

  // Generate recommendations
  const recommendations = generateRecommendations(sum, wealthCategory);

  // Generate verdict
  const verdict = generateVerdict(sum, wealthScore, wealthCategory, isMasterNumber);

  return {
    accountNumber: cleanNumber,
    totalNumber: sum,
    isMasterNumber,
    digitSum,
    reductionSteps: steps,
    wealthScore,
    wealthCategory,
    financialMeaning: financialData.meaning,
    wealthAttractions: financialData.wealthAttractions,
    financialCautions: financialData.cautions,
    recommendations,
    bestUses: financialData.bestUses,
    rulingPlanet: financialData.rulingPlanet,
    birthDateCompatibility,
    verdict,
  };
}

function generateRecommendations(totalNumber: number, category: BankAccountResult['wealthCategory']): BilingualText[] {
  const recommendations: BilingualText[] = [];

  if (category === 'excellent' || category === 'good') {
    recommendations.push({
      en: 'This account is excellent for wealth accumulation. Make regular deposits.',
      hi: 'यह खाता धन संचय के लिए उत्कृष्ट है। नियमित जमा करें।'
    });
  }

  if ([3, 5, 6].includes(totalNumber)) {
    recommendations.push({
      en: 'Ideal for business transactions and investments',
      hi: 'व्यावसायिक लेनदेन और निवेश के लिए आदर्श'
    });
  }

  if ([4, 7, 8].includes(totalNumber)) {
    recommendations.push({
      en: 'Consider adding a secondary account with number 3 or 5 for faster growth',
      hi: 'तेज वृद्धि के लिए अंक 3 या 5 वाला द्वितीयक खाता जोड़ने पर विचार करें'
    });
  }

  if (category === 'weak') {
    recommendations.push({
      en: 'Consider using this account for specific purposes only, and open a luckier number account for savings',
      hi: 'इस खाते का उपयोग केवल विशिष्ट उद्देश्यों के लिए करें, और बचत के लिए अधिक भाग्यशाली अंक वाला खाता खोलें'
    });
  }

  recommendations.push({
    en: 'Maintain this account with respect and gratitude for best results',
    hi: 'सर्वोत्तम परिणामों के लिए इस खाते को सम्मान और कृतज्ञता के साथ बनाए रखें'
  });

  return recommendations;
}

function generateVerdict(
  totalNumber: number,
  wealthScore: number,
  category: BankAccountResult['wealthCategory'],
  isMasterNumber: boolean
): BilingualText {
  if (isMasterNumber) {
    return {
      en: `Excellent! Your bank account number reduces to Master Number ${totalNumber}. This is highly auspicious for wealth! With ${wealthScore}% financial energy, this account has the potential to manifest large-scale financial success.`,
      hi: `उत्कृष्ट! आपका बैंक खाता नंबर मास्टर नंबर ${totalNumber} पर आता है। यह धन के लिए अत्यधिक शुभ है! ${wealthScore}% वित्तीय ऊर्जा के साथ, इस खाते में बड़े पैमाने पर वित्तीय सफलता प्राप्त करने की क्षमता है।`
    };
  }

  if (category === 'excellent') {
    return {
      en: `Great news! Your account number ${totalNumber} has ${wealthScore}% wealth attraction energy. This is one of the best numbers for financial growth and prosperity.`,
      hi: `शुभ समाचार! आपके खाता संख्या ${totalNumber} में ${wealthScore}% धन आकर्षण ऊर्जा है। यह वित्तीय वृद्धि और समृद्धि के लिए सबसे अच्छे अंकों में से एक है।`
    };
  }

  if (category === 'good') {
    return {
      en: `Good! Your account number totals ${totalNumber} with ${wealthScore}% wealth energy. This account supports steady financial growth with proper management.`,
      hi: `अच्छा! आपके खाते का कुल ${totalNumber} है जिसमें ${wealthScore}% धन ऊर्जा है। यह खाता उचित प्रबंधन के साथ स्थिर वित्तीय वृद्धि का समर्थन करता है।`
    };
  }

  if (category === 'average') {
    return {
      en: `Your account number ${totalNumber} has ${wealthScore}% wealth energy. While not negative, you may benefit from number remedies or maintaining a more favorable secondary account.`,
      hi: `आपके खाता संख्या ${totalNumber} में ${wealthScore}% धन ऊर्जा है। नकारात्मक नहीं होते हुए भी, आप अंक उपचार या अधिक अनुकूल द्वितीयक खाता रखने से लाभान्वित हो सकते हैं।`
    };
  }

  return {
    en: `Your account number ${totalNumber} has ${wealthScore}% wealth energy. Consider this account for specific purposes and open a new account with number 3, 5, or 6 for better wealth attraction.`,
    hi: `आपके खाता संख्या ${totalNumber} में ${wealthScore}% धन ऊर्जा है। इस खाते को विशिष्ट उद्देश्यों के लिए रखें और बेहतर धन आकर्षण के लिए अंक 3, 5 या 6 वाला नया खाता खोलें।`
  };
}
