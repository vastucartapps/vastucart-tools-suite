/**
 * Lucky Mobile Number Calculator
 * Numerology-based mobile number analysis
 */

export interface BilingualText {
  en: string;
  hi: string;
}

export interface MobileNumberResult {
  // The mobile number analyzed
  mobileNumber: string;

  // Total number (reduced to single digit or master number)
  totalNumber: number;
  isMasterNumber: boolean;

  // Breakdown of calculation
  digitSum: number;
  reductionSteps: number[];

  // Luck rating (0-100)
  luckScore: number;
  luckCategory: 'excellent' | 'good' | 'average' | 'challenging';

  // Number meaning
  numberMeaning: BilingualText;

  // Positive aspects
  positiveAspects: BilingualText[];

  // Challenges/cautions
  challenges: BilingualText[];

  // Best for (usage recommendations)
  bestFor: BilingualText[];

  // Compatibility with birth date
  birthDateCompatibility?: {
    lifePathNumber: number;
    compatible: boolean;
    reason: BilingualText;
  };

  // Suggested lucky numbers to add to phone
  luckyAdditions: string[];

  // Overall verdict
  verdict: BilingualText;
}

// Number meanings in numerology
const NUMBER_MEANINGS: Record<number, {
  meaning: BilingualText;
  positives: BilingualText[];
  challenges: BilingualText[];
  bestFor: BilingualText[];
  luckScore: number;
}> = {
  1: {
    meaning: {
      en: 'Number 1 represents leadership, independence, and new beginnings. This is a powerful number for initiators.',
      hi: 'अंक 1 नेतृत्व, स्वतंत्रता और नई शुरुआत का प्रतिनिधित्व करता है। यह आरंभकर्ताओं के लिए एक शक्तिशाली अंक है।'
    },
    positives: [
      { en: 'Attracts leadership opportunities', hi: 'नेतृत्व के अवसरों को आकर्षित करता है' },
      { en: 'Brings originality and innovation', hi: 'मौलिकता और नवाचार लाता है' },
      { en: 'Good for entrepreneurs and self-starters', hi: 'उद्यमियों और स्व-स्टार्टर्स के लिए अच्छा' },
    ],
    challenges: [
      { en: 'May lead to ego conflicts', hi: 'अहंकार संघर्ष का कारण बन सकता है' },
      { en: 'Can feel isolated at times', hi: 'कभी-कभी अकेलापन महसूस हो सकता है' },
    ],
    bestFor: [
      { en: 'Business owners', hi: 'व्यापार मालिक' },
      { en: 'Leaders and managers', hi: 'नेता और प्रबंधक' },
      { en: 'Independent professionals', hi: 'स्वतंत्र पेशेवर' },
    ],
    luckScore: 85,
  },
  2: {
    meaning: {
      en: 'Number 2 represents partnership, diplomacy, and cooperation. It brings balance and harmony.',
      hi: 'अंक 2 साझेदारी, कूटनीति और सहयोग का प्रतिनिधित्व करता है। यह संतुलन और सामंजस्य लाता है।'
    },
    positives: [
      { en: 'Enhances relationships and partnerships', hi: 'रिश्तों और साझेदारी को बढ़ाता है' },
      { en: 'Good for diplomacy and negotiations', hi: 'कूटनीति और वार्ता के लिए अच्छा' },
      { en: 'Brings emotional balance', hi: 'भावनात्मक संतुलन लाता है' },
    ],
    challenges: [
      { en: 'May create dependency on others', hi: 'दूसरों पर निर्भरता पैदा कर सकता है' },
      { en: 'Can lead to indecisiveness', hi: 'अनिर्णय का कारण बन सकता है' },
    ],
    bestFor: [
      { en: 'Counselors and mediators', hi: 'परामर्शदाता और मध्यस्थ' },
      { en: 'Team players', hi: 'टीम खिलाड़ी' },
      { en: 'Partnership businesses', hi: 'साझेदारी व्यवसाय' },
    ],
    luckScore: 70,
  },
  3: {
    meaning: {
      en: 'Number 3 represents creativity, communication, and joy. It brings artistic expression and social success.',
      hi: 'अंक 3 रचनात्मकता, संचार और आनंद का प्रतिनिधित्व करता है। यह कलात्मक अभिव्यक्ति और सामाजिक सफलता लाता है।'
    },
    positives: [
      { en: 'Excellent for communication', hi: 'संचार के लिए उत्कृष्ट' },
      { en: 'Attracts social opportunities', hi: 'सामाजिक अवसरों को आकर्षित करता है' },
      { en: 'Brings creativity and joy', hi: 'रचनात्मकता और खुशी लाता है' },
    ],
    challenges: [
      { en: 'May lead to scattered energy', hi: 'बिखरी हुई ऊर्जा का कारण बन सकता है' },
      { en: 'Risk of superficiality', hi: 'सतहीपन का जोखिम' },
    ],
    bestFor: [
      { en: 'Artists and writers', hi: 'कलाकार और लेखक' },
      { en: 'Sales and marketing', hi: 'बिक्री और विपणन' },
      { en: 'Entertainment industry', hi: 'मनोरंजन उद्योग' },
    ],
    luckScore: 80,
  },
  4: {
    meaning: {
      en: 'Number 4 represents stability, hard work, and practicality. It brings structure and foundation.',
      hi: 'अंक 4 स्थिरता, कड़ी मेहनत और व्यावहारिकता का प्रतिनिधित्व करता है। यह संरचना और नींव लाता है।'
    },
    positives: [
      { en: 'Brings stability and security', hi: 'स्थिरता और सुरक्षा लाता है' },
      { en: 'Good for systematic work', hi: 'व्यवस्थित काम के लिए अच्छा' },
      { en: 'Attracts material success through effort', hi: 'प्रयास के माध्यम से भौतिक सफलता आकर्षित करता है' },
    ],
    challenges: [
      { en: 'Can feel restrictive or limiting', hi: 'प्रतिबंधात्मक महसूस हो सकता है' },
      { en: 'May lead to rigidity', hi: 'कठोरता का कारण बन सकता है' },
      { en: 'Associated with Rahu - requires careful analysis', hi: 'राहु से जुड़ा - सावधानीपूर्वक विश्लेषण की आवश्यकता' },
    ],
    bestFor: [
      { en: 'Engineers and architects', hi: 'इंजीनियर और आर्किटेक्ट' },
      { en: 'Construction and real estate', hi: 'निर्माण और रियल एस्टेट' },
      { en: 'Systematic professions', hi: 'व्यवस्थित पेशे' },
    ],
    luckScore: 55,
  },
  5: {
    meaning: {
      en: 'Number 5 represents freedom, change, and adventure. It brings versatility and dynamic energy.',
      hi: 'अंक 5 स्वतंत्रता, परिवर्तन और साहस का प्रतिनिधित्व करता है। यह बहुमुखी प्रतिभा और गतिशील ऊर्जा लाता है।'
    },
    positives: [
      { en: 'Attracts change and new opportunities', hi: 'परिवर्तन और नए अवसरों को आकर्षित करता है' },
      { en: 'Great for travel and communication', hi: 'यात्रा और संचार के लिए बढ़िया' },
      { en: 'Brings adaptability and quick thinking', hi: 'अनुकूलनशीलता और त्वरित सोच लाता है' },
      { en: 'Mercury energy - excellent for business', hi: 'बुध ऊर्जा - व्यापार के लिए उत्कृष्ट' },
    ],
    challenges: [
      { en: 'May bring restlessness', hi: 'बेचैनी ला सकता है' },
      { en: 'Risk of instability if not grounded', hi: 'अस्थिरता का जोखिम अगर आधारित नहीं' },
    ],
    bestFor: [
      { en: 'Travelers and explorers', hi: 'यात्री और खोजकर्ता' },
      { en: 'Sales and trading', hi: 'बिक्री और व्यापार' },
      { en: 'Media and journalism', hi: 'मीडिया और पत्रकारिता' },
    ],
    luckScore: 90,
  },
  6: {
    meaning: {
      en: 'Number 6 represents love, responsibility, and harmony. It brings domestic happiness and beauty.',
      hi: 'अंक 6 प्रेम, जिम्मेदारी और सामंजस्य का प्रतिनिधित्व करता है। यह घरेलू खुशी और सुंदरता लाता है।'
    },
    positives: [
      { en: 'Attracts love and relationships', hi: 'प्रेम और रिश्तों को आकर्षित करता है' },
      { en: 'Good for family matters', hi: 'पारिवारिक मामलों के लिए अच्छा' },
      { en: 'Venus energy - brings luxury and comfort', hi: 'शुक्र ऊर्जा - विलासिता और आराम लाता है' },
    ],
    challenges: [
      { en: 'May lead to over-responsibility', hi: 'अत्यधिक जिम्मेदारी का कारण बन सकता है' },
      { en: 'Can attract needy people', hi: 'जरूरतमंद लोगों को आकर्षित कर सकता है' },
    ],
    bestFor: [
      { en: 'Artists and designers', hi: 'कलाकार और डिजाइनर' },
      { en: 'Healthcare and hospitality', hi: 'स्वास्थ्य सेवा और आतिथ्य' },
      { en: 'Luxury goods business', hi: 'लक्जरी सामान व्यवसाय' },
    ],
    luckScore: 88,
  },
  7: {
    meaning: {
      en: 'Number 7 represents spirituality, analysis, and wisdom. It brings introspection and depth.',
      hi: 'अंक 7 आध्यात्मिकता, विश्लेषण और ज्ञान का प्रतिनिधित्व करता है। यह आत्मनिरीक्षण और गहराई लाता है।'
    },
    positives: [
      { en: 'Enhances intuition and wisdom', hi: 'अंतर्ज्ञान और ज्ञान को बढ़ाता है' },
      { en: 'Good for research and analysis', hi: 'अनुसंधान और विश्लेषण के लिए अच्छा' },
      { en: 'Ketu energy - spiritual growth', hi: 'केतु ऊर्जा - आध्यात्मिक विकास' },
    ],
    challenges: [
      { en: 'May feel isolated or misunderstood', hi: 'अकेलापन या गलतफहमी महसूस हो सकती है' },
      { en: 'Can lead to overthinking', hi: 'अत्यधिक सोच का कारण बन सकता है' },
    ],
    bestFor: [
      { en: 'Researchers and scientists', hi: 'शोधकर्ता और वैज्ञानिक' },
      { en: 'Spiritual teachers', hi: 'आध्यात्मिक शिक्षक' },
      { en: 'Technical analysts', hi: 'तकनीकी विश्लेषक' },
    ],
    luckScore: 65,
  },
  8: {
    meaning: {
      en: 'Number 8 represents power, abundance, and karma. It brings material success and authority.',
      hi: 'अंक 8 शक्ति, प्रचुरता और कर्म का प्रतिनिधित्व करता है। यह भौतिक सफलता और अधिकार लाता है।'
    },
    positives: [
      { en: 'Attracts wealth and power', hi: 'धन और शक्ति को आकर्षित करता है' },
      { en: 'Good for business success', hi: 'व्यावसायिक सफलता के लिए अच्छा' },
      { en: 'Saturn energy - brings discipline and rewards', hi: 'शनि ऊर्जा - अनुशासन और पुरस्कार लाता है' },
    ],
    challenges: [
      { en: 'Can bring karmic lessons', hi: 'कर्मिक सबक ला सकता है' },
      { en: 'May face obstacles before success', hi: 'सफलता से पहले बाधाओं का सामना करना पड़ सकता है' },
      { en: 'Requires careful handling', hi: 'सावधानीपूर्वक व्यवहार की आवश्यकता' },
    ],
    bestFor: [
      { en: 'Finance and banking', hi: 'वित्त और बैंकिंग' },
      { en: 'Real estate and property', hi: 'रियल एस्टेट और संपत्ति' },
      { en: 'Corporate executives', hi: 'कॉर्पोरेट अधिकारी' },
    ],
    luckScore: 60,
  },
  9: {
    meaning: {
      en: 'Number 9 represents completion, humanitarianism, and wisdom. It brings universal love and service.',
      hi: 'अंक 9 पूर्णता, मानवतावाद और ज्ञान का प्रतिनिधित्व करता है। यह सार्वभौमिक प्रेम और सेवा लाता है।'
    },
    positives: [
      { en: 'Attracts humanitarian opportunities', hi: 'मानवीय अवसरों को आकर्षित करता है' },
      { en: 'Mars energy - brings courage and action', hi: 'मंगल ऊर्जा - साहस और कार्रवाई लाता है' },
      { en: 'Good for leadership and completion', hi: 'नेतृत्व और पूर्णता के लिए अच्छा' },
    ],
    challenges: [
      { en: 'May feel burdened by others needs', hi: 'दूसरों की जरूरतों से बोझिल महसूस हो सकता है' },
      { en: 'Can attract conflicts (Mars energy)', hi: 'संघर्षों को आकर्षित कर सकता है (मंगल ऊर्जा)' },
    ],
    bestFor: [
      { en: 'Social workers and NGOs', hi: 'सामाजिक कार्यकर्ता और एनजीओ' },
      { en: 'Teachers and mentors', hi: 'शिक्षक और संरक्षक' },
      { en: 'Military and defense', hi: 'सेना और रक्षा' },
    ],
    luckScore: 82,
  },
  11: {
    meaning: {
      en: 'Master Number 11 represents intuition, spiritual insight, and inspiration. A highly spiritual and powerful number.',
      hi: 'मास्टर नंबर 11 अंतर्ज्ञान, आध्यात्मिक अंतर्दृष्टि और प्रेरणा का प्रतिनिधित्व करता है। एक अत्यधिक आध्यात्मिक और शक्तिशाली अंक।'
    },
    positives: [
      { en: 'Highly intuitive and inspiring', hi: 'अत्यधिक सहज और प्रेरणादायक' },
      { en: 'Attracts spiritual opportunities', hi: 'आध्यात्मिक अवसरों को आकर्षित करता है' },
      { en: 'Master healer and teacher number', hi: 'मास्टर उपचारक और शिक्षक अंक' },
    ],
    challenges: [
      { en: 'High energy can be overwhelming', hi: 'उच्च ऊर्जा भारी पड़ सकती है' },
      { en: 'May struggle to stay grounded', hi: 'जमीन से जुड़े रहने में संघर्ष हो सकता है' },
    ],
    bestFor: [
      { en: 'Spiritual leaders', hi: 'आध्यात्मिक नेता' },
      { en: 'Healers and counselors', hi: 'उपचारक और परामर्शदाता' },
      { en: 'Innovators and visionaries', hi: 'नवप्रवर्तक और दूरदर्शी' },
    ],
    luckScore: 92,
  },
  22: {
    meaning: {
      en: 'Master Number 22 represents master builder, practical idealism, and large-scale achievement.',
      hi: 'मास्टर नंबर 22 मास्टर बिल्डर, व्यावहारिक आदर्शवाद और बड़े पैमाने पर उपलब्धि का प्रतिनिधित्व करता है।'
    },
    positives: [
      { en: 'Attracts large-scale opportunities', hi: 'बड़े पैमाने के अवसरों को आकर्षित करता है' },
      { en: 'Master builder energy', hi: 'मास्टर बिल्डर ऊर्जा' },
      { en: 'Combines vision with practicality', hi: 'दृष्टि को व्यावहारिकता के साथ जोड़ता है' },
    ],
    challenges: [
      { en: 'High pressure and responsibility', hi: 'उच्च दबाव और जिम्मेदारी' },
      { en: 'May struggle with smaller tasks', hi: 'छोटे कार्यों में संघर्ष हो सकता है' },
    ],
    bestFor: [
      { en: 'Large businesses and corporations', hi: 'बड़े व्यवसाय और निगम' },
      { en: 'Architects and builders', hi: 'आर्किटेक्ट और बिल्डर्स' },
      { en: 'Project managers', hi: 'प्रोजेक्ट मैनेजर' },
    ],
    luckScore: 95,
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
 * Analyze mobile number
 */
export function analyzeMobileNumber(
  mobileNumber: string,
  birthDate?: Date
): MobileNumberResult {
  // Clean the number (remove spaces, dashes, country code)
  const cleanNumber = mobileNumber.replace(/[\s\-\+]/g, '');
  const lastTenDigits = cleanNumber.slice(-10);

  // Calculate digit sum
  const { sum, steps } = calculateDigitSum(lastTenDigits);
  const digitSum = steps[0];

  // Check if master number
  const isMasterNumber = sum === 11 || sum === 22;

  // Get number meaning (use 2 for 11, 4 for 22 as fallback)
  const meaningKey = NUMBER_MEANINGS[sum] ? sum : (sum === 33 ? 6 : sum % 9 || 9);
  const numberData = NUMBER_MEANINGS[meaningKey] || NUMBER_MEANINGS[1];

  // Calculate luck score
  let luckScore = numberData.luckScore;

  // Adjust for master numbers
  if (isMasterNumber) {
    luckScore = Math.min(luckScore + 10, 100);
  }

  // Determine luck category
  let luckCategory: MobileNumberResult['luckCategory'];
  if (luckScore >= 85) luckCategory = 'excellent';
  else if (luckScore >= 70) luckCategory = 'good';
  else if (luckScore >= 55) luckCategory = 'average';
  else luckCategory = 'challenging';

  // Birth date compatibility
  let birthDateCompatibility: MobileNumberResult['birthDateCompatibility'] | undefined;
  if (birthDate) {
    const lifePathNumber = calculateLifePathNumber(birthDate);
    const compatible = areNumbersCompatible(sum, lifePathNumber);
    birthDateCompatibility = {
      lifePathNumber,
      compatible,
      reason: compatible
        ? {
            en: `Your Life Path ${lifePathNumber} harmonizes well with mobile number ${sum}`,
            hi: `आपका मूलांक ${lifePathNumber} मोबाइल नंबर ${sum} के साथ अच्छी तरह सामंजस्य करता है`
          }
        : {
            en: `Life Path ${lifePathNumber} may face some friction with number ${sum}. Consider remedies.`,
            hi: `मूलांक ${lifePathNumber} को अंक ${sum} के साथ कुछ घर्षण का सामना करना पड़ सकता है। उपाय पर विचार करें।`
          }
    };

    // Adjust luck score based on compatibility
    if (compatible) {
      luckScore = Math.min(luckScore + 5, 100);
    } else {
      luckScore = Math.max(luckScore - 10, 30);
    }
  }

  // Generate lucky additions (digits that enhance the number)
  const luckyAdditions = generateLuckyAdditions(sum);

  // Generate verdict
  const verdict = generateVerdict(sum, luckScore, luckCategory, isMasterNumber);

  return {
    mobileNumber: lastTenDigits,
    totalNumber: sum,
    isMasterNumber,
    digitSum,
    reductionSteps: steps,
    luckScore,
    luckCategory,
    numberMeaning: numberData.meaning,
    positiveAspects: numberData.positives,
    challenges: numberData.challenges,
    bestFor: numberData.bestFor,
    birthDateCompatibility,
    luckyAdditions,
    verdict,
  };
}

function areNumbersCompatible(num1: number, num2: number): boolean {
  // Convert master numbers to their base
  const base1 = num1 === 11 ? 2 : num1 === 22 ? 4 : num1;
  const base2 = num2 === 11 ? 2 : num2 === 22 ? 4 : num2;

  // Compatibility groups
  const groups = [
    [1, 5, 7], // Independent numbers
    [2, 6, 9], // Emotional/caring numbers
    [3, 5, 6], // Creative numbers
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

function generateLuckyAdditions(totalNumber: number): string[] {
  const additions: string[] = [];

  // Numbers that complement the total
  const complementaryNumbers: Record<number, number[]> = {
    1: [1, 5, 9],
    2: [2, 6, 7],
    3: [3, 5, 6, 9],
    4: [4, 8],
    5: [1, 5, 6, 9],
    6: [2, 3, 5, 6, 9],
    7: [1, 2, 7],
    8: [4, 5, 8],
    9: [1, 3, 5, 6, 9],
    11: [1, 2, 7, 11],
    22: [4, 8, 22],
  };

  const lucky = complementaryNumbers[totalNumber] || [1, 5, 9];

  for (const num of lucky.slice(0, 3)) {
    additions.push(`Add ${num} to contacts or use in shortcuts`);
  }

  return additions;
}

function generateVerdict(
  totalNumber: number,
  luckScore: number,
  category: MobileNumberResult['luckCategory'],
  isMasterNumber: boolean
): BilingualText {
  if (isMasterNumber) {
    return {
      en: `Your mobile number reduces to Master Number ${totalNumber}, which is highly auspicious! This is a powerful number that brings spiritual energy and exceptional opportunities. Use it wisely.`,
      hi: `आपका मोबाइल नंबर मास्टर नंबर ${totalNumber} पर आता है, जो अत्यधिक शुभ है! यह एक शक्तिशाली अंक है जो आध्यात्मिक ऊर्जा और असाधारण अवसर लाता है। इसका बुद्धिमानी से उपयोग करें।`
    };
  }

  if (category === 'excellent') {
    return {
      en: `Excellent! Your mobile number vibrates at ${totalNumber} with ${luckScore}% luck score. This is a highly favorable number that will attract positive energy and opportunities.`,
      hi: `उत्कृष्ट! आपका मोबाइल नंबर ${totalNumber} पर कंपन करता है जिसका भाग्य स्कोर ${luckScore}% है। यह एक अत्यधिक अनुकूल अंक है जो सकारात्मक ऊर्जा और अवसरों को आकर्षित करेगा।`
    };
  }

  if (category === 'good') {
    return {
      en: `Good! Your mobile number has a total of ${totalNumber} with ${luckScore}% luck score. This number supports your endeavors and brings generally positive influences.`,
      hi: `अच्छा! आपके मोबाइल नंबर का योग ${totalNumber} है जिसका भाग्य स्कोर ${luckScore}% है। यह अंक आपके प्रयासों का समर्थन करता है और आम तौर पर सकारात्मक प्रभाव लाता है।`
    };
  }

  if (category === 'average') {
    return {
      en: `Your mobile number totals ${totalNumber} with ${luckScore}% luck score. While not negative, you may benefit from number remedies or choosing a more compatible number.`,
      hi: `आपके मोबाइल नंबर का योग ${totalNumber} है जिसका भाग्य स्कोर ${luckScore}% है। नकारात्मक नहीं होते हुए भी, आप अंक उपचार या अधिक अनुकूल नंबर चुनने से लाभान्वित हो सकते हैं।`
    };
  }

  return {
    en: `Your mobile number totals ${totalNumber} with ${luckScore}% luck score. This number may bring some challenges. Consider consulting a numerologist for remedies or consider changing to a more favorable number.`,
    hi: `आपके मोबाइल नंबर का योग ${totalNumber} है जिसका भाग्य स्कोर ${luckScore}% है। यह अंक कुछ चुनौतियां ला सकता है। उपायों के लिए अंकशास्त्री से परामर्श करें या अधिक अनुकूल नंबर बदलने पर विचार करें।`
  };
}
