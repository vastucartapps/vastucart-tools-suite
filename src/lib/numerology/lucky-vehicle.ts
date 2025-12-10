/**
 * Lucky Vehicle Number Calculator
 * Numerology-based vehicle number analysis for safety and luck
 */

export interface BilingualText {
  en: string;
  hi: string;
}

export interface VehicleNumberResult {
  // The vehicle number analyzed
  vehicleNumber: string;

  // Total number (reduced)
  totalNumber: number;
  isMasterNumber: boolean;

  // Breakdown
  digitSum: number;
  reductionSteps: number[];

  // Safety/luck rating (0-100)
  safetyScore: number;
  luckCategory: 'excellent' | 'good' | 'average' | 'caution';

  // Vehicle number meaning
  numberMeaning: BilingualText;

  // Positive attributes
  positiveAttributes: BilingualText[];

  // Cautions
  cautions: BilingualText[];

  // Safety tips
  safetyTips: BilingualText[];

  // Best vehicle types for this number
  bestVehicleTypes: BilingualText[];

  // Ruling planet
  rulingPlanet: BilingualText;

  // Overall verdict
  verdict: BilingualText;
}

// Vehicle numerology meanings
const VEHICLE_MEANINGS: Record<number, {
  meaning: BilingualText;
  positiveAttributes: BilingualText[];
  cautions: BilingualText[];
  bestVehicleTypes: BilingualText[];
  rulingPlanet: BilingualText;
  safetyScore: number;
}> = {
  1: {
    meaning: {
      en: 'Number 1 represents leadership and independence. This vehicle will take you to new beginnings and solo adventures.',
      hi: 'अंक 1 नेतृत्व और स्वतंत्रता का प्रतिनिधित्व करता है। यह वाहन आपको नई शुरुआत और एकल साहसिक कार्यों में ले जाएगा।'
    },
    positiveAttributes: [
      { en: 'Great for daily commute and personal use', hi: 'दैनिक यात्रा और व्यक्तिगत उपयोग के लिए बढ़िया' },
      { en: 'Attracts new opportunities during travel', hi: 'यात्रा के दौरान नए अवसर आकर्षित करता है' },
      { en: 'Good for first-time vehicle owners', hi: 'पहली बार वाहन मालिकों के लिए अच्छा' },
    ],
    cautions: [
      { en: 'Avoid road rage and aggressive driving', hi: 'रोड रेज और आक्रामक ड्राइविंग से बचें' },
      { en: 'May attract minor scratches', hi: 'मामूली खरोंच आकर्षित कर सकता है' },
    ],
    bestVehicleTypes: [
      { en: 'Sports cars', hi: 'स्पोर्ट्स कार' },
      { en: 'Motorcycles', hi: 'मोटरसाइकिल' },
      { en: 'Personal sedans', hi: 'व्यक्तिगत सेडान' },
    ],
    rulingPlanet: { en: 'Sun (Surya)', hi: 'सूर्य' },
    safetyScore: 75,
  },
  2: {
    meaning: {
      en: 'Number 2 represents partnership and cooperation. This vehicle is excellent for family trips and shared journeys.',
      hi: 'अंक 2 साझेदारी और सहयोग का प्रतिनिधित्व करता है। यह वाहन पारिवारिक यात्राओं और साझा यात्राओं के लिए उत्कृष्ट है।'
    },
    positiveAttributes: [
      { en: 'Excellent for family vehicles', hi: 'पारिवारिक वाहनों के लिए उत्कृष्ट' },
      { en: 'Promotes peaceful journeys', hi: 'शांतिपूर्ण यात्राओं को बढ़ावा देता है' },
      { en: 'Good for carpooling', hi: 'कारपूलिंग के लिए अच्छा' },
    ],
    cautions: [
      { en: 'Be cautious during night driving', hi: 'रात की ड्राइविंग के दौरान सावधान रहें' },
      { en: 'Moon influence may affect concentration', hi: 'चंद्र प्रभाव एकाग्रता को प्रभावित कर सकता है' },
    ],
    bestVehicleTypes: [
      { en: 'Family SUVs', hi: 'फैमिली एसयूवी' },
      { en: 'Minivans', hi: 'मिनीवैन' },
      { en: 'Hatchbacks', hi: 'हैचबैक' },
    ],
    rulingPlanet: { en: 'Moon (Chandra)', hi: 'चंद्रमा' },
    safetyScore: 70,
  },
  3: {
    meaning: {
      en: 'Number 3 brings Jupiter\'s blessings of expansion and protection. One of the most auspicious numbers for vehicles.',
      hi: 'अंक 3 गुरु की विस्तार और सुरक्षा का आशीर्वाद लाता है। वाहनों के लिए सबसे शुभ अंकों में से एक।'
    },
    positiveAttributes: [
      { en: 'Divine protection during travel', hi: 'यात्रा के दौरान दैवीय सुरक्षा' },
      { en: 'Excellent for long-distance journeys', hi: 'लंबी दूरी की यात्राओं के लिए उत्कृष्ट' },
      { en: 'Attracts positive experiences', hi: 'सकारात्मक अनुभव आकर्षित करता है' },
      { en: 'Good resale value', hi: 'अच्छा पुनर्विक्रय मूल्य' },
    ],
    cautions: [
      { en: 'Avoid overconfidence while driving', hi: 'ड्राइविंग करते समय अति आत्मविश्वास से बचें' },
    ],
    bestVehicleTypes: [
      { en: 'Premium sedans', hi: 'प्रीमियम सेडान' },
      { en: 'Luxury SUVs', hi: 'लक्जरी एसयूवी' },
      { en: 'Commercial vehicles', hi: 'वाणिज्यिक वाहन' },
    ],
    rulingPlanet: { en: 'Jupiter (Guru)', hi: 'गुरु/बृहस्पति' },
    safetyScore: 92,
  },
  4: {
    meaning: {
      en: 'Number 4 represents stability but also unexpected events. Rahu\'s influence requires extra caution.',
      hi: 'अंक 4 स्थिरता का प्रतिनिधित्व करता है लेकिन अप्रत्याशित घटनाएं भी। राहु के प्रभाव में अतिरिक्त सावधानी की आवश्यकता है।'
    },
    positiveAttributes: [
      { en: 'Reliable for everyday use', hi: 'रोजमर्रा के उपयोग के लिए विश्वसनीय' },
      { en: 'Good for commercial work vehicles', hi: 'वाणिज्यिक कार्य वाहनों के लिए अच्छा' },
    ],
    cautions: [
      { en: 'Higher chance of unexpected breakdowns', hi: 'अप्रत्याशित ब्रेकडाउन की अधिक संभावना' },
      { en: 'Extra caution needed at intersections', hi: 'चौराहों पर अतिरिक्त सावधानी आवश्यक' },
      { en: 'Perform regular vehicle puja', hi: 'नियमित वाहन पूजा करें' },
      { en: 'Rahu influence - be alert', hi: 'राहु प्रभाव - सतर्क रहें' },
    ],
    bestVehicleTypes: [
      { en: 'Work trucks', hi: 'कार्य ट्रक' },
      { en: 'Delivery vehicles', hi: 'डिलीवरी वाहन' },
    ],
    rulingPlanet: { en: 'Rahu', hi: 'राहु' },
    safetyScore: 50,
  },
  5: {
    meaning: {
      en: 'Number 5 represents Mercury\'s energy of movement and communication. Excellent for frequent travelers.',
      hi: 'अंक 5 बुध की गति और संचार ऊर्जा का प्रतिनिधित्व करता है। बार-बार यात्रा करने वालों के लिए उत्कृष्ट।'
    },
    positiveAttributes: [
      { en: 'Perfect for frequent travel', hi: 'बार-बार यात्रा के लिए एकदम सही' },
      { en: 'Brings variety and adventure', hi: 'विविधता और साहस लाता है' },
      { en: 'Quick and responsive performance', hi: 'तेज और उत्तरदायी प्रदर्शन' },
      { en: 'Great fuel efficiency', hi: 'बढ़िया ईंधन दक्षता' },
    ],
    cautions: [
      { en: 'Avoid overspeeding', hi: 'ओवरस्पीडिंग से बचें' },
      { en: 'Be careful during monsoon', hi: 'मानसून के दौरान सावधान रहें' },
    ],
    bestVehicleTypes: [
      { en: 'Compact cars', hi: 'कॉम्पैक्ट कार' },
      { en: 'Scooters and bikes', hi: 'स्कूटर और बाइक' },
      { en: 'Taxi/Uber vehicles', hi: 'टैक्सी/उबर वाहन' },
    ],
    rulingPlanet: { en: 'Mercury (Budh)', hi: 'बुध' },
    safetyScore: 85,
  },
  6: {
    meaning: {
      en: 'Number 6 is Venus\'s number bringing comfort and luxury. Excellent for beautiful and comfortable vehicles.',
      hi: 'अंक 6 शुक्र का अंक है जो आराम और विलासिता लाता है। सुंदर और आरामदायक वाहनों के लिए उत्कृष्ट।'
    },
    positiveAttributes: [
      { en: 'Attracts safe and comfortable journeys', hi: 'सुरक्षित और आरामदायक यात्राएं आकर्षित करता है' },
      { en: 'Great aesthetic appeal', hi: 'बढ़िया सौंदर्य अपील' },
      { en: 'Perfect for family outings', hi: 'पारिवारिक सैर के लिए एकदम सही' },
      { en: 'Low maintenance issues', hi: 'कम रखरखाव समस्याएं' },
    ],
    cautions: [
      { en: 'May attract envy - use evil eye protection', hi: 'ईर्ष्या आकर्षित कर सकता है - नजर सुरक्षा का उपयोग करें' },
    ],
    bestVehicleTypes: [
      { en: 'Luxury cars', hi: 'लक्जरी कार' },
      { en: 'Premium SUVs', hi: 'प्रीमियम एसयूवी' },
      { en: 'Beautiful vintage cars', hi: 'सुंदर विंटेज कार' },
    ],
    rulingPlanet: { en: 'Venus (Shukra)', hi: 'शुक्र' },
    safetyScore: 88,
  },
  7: {
    meaning: {
      en: 'Number 7 represents Ketu\'s spiritual and unconventional energy. May bring unexpected travel experiences.',
      hi: 'अंक 7 केतु की आध्यात्मिक और अपरंपरागत ऊर्जा का प्रतिनिधित्व करता है। अप्रत्याशित यात्रा अनुभव ला सकता है।'
    },
    positiveAttributes: [
      { en: 'Good for spiritual journeys', hi: 'आध्यात्मिक यात्राओं के लिए अच्छा' },
      { en: 'Unique travel experiences', hi: 'अनूठे यात्रा अनुभव' },
    ],
    cautions: [
      { en: 'May face unexpected detours', hi: 'अप्रत्याशित चक्कर का सामना करना पड़ सकता है' },
      { en: 'GPS issues possible', hi: 'जीपीएस समस्याएं संभव' },
      { en: 'Not ideal for commercial vehicles', hi: 'वाणिज्यिक वाहनों के लिए आदर्श नहीं' },
    ],
    bestVehicleTypes: [
      { en: 'Off-road vehicles', hi: 'ऑफ-रोड वाहन' },
      { en: 'Adventure bikes', hi: 'एडवेंचर बाइक' },
    ],
    rulingPlanet: { en: 'Ketu', hi: 'केतु' },
    safetyScore: 55,
  },
  8: {
    meaning: {
      en: 'Number 8 represents Saturn\'s karma. Requires discipline and patience. Results depend on karmic factors.',
      hi: 'अंक 8 शनि के कर्म का प्रतिनिधित्व करता है। अनुशासन और धैर्य की आवश्यकता है। परिणाम कर्मिक कारकों पर निर्भर करते हैं।'
    },
    positiveAttributes: [
      { en: 'Builds long-term reliability', hi: 'दीर्घकालिक विश्वसनीयता बनाता है' },
      { en: 'Good for disciplined drivers', hi: 'अनुशासित ड्राइवरों के लिए अच्छा' },
      { en: 'Suitable for heavy vehicles', hi: 'भारी वाहनों के लिए उपयुक्त' },
    ],
    cautions: [
      { en: 'May face delays and obstacles', hi: 'देरी और बाधाओं का सामना करना पड़ सकता है' },
      { en: 'Regular servicing essential', hi: 'नियमित सर्विसिंग आवश्यक' },
      { en: 'Perform Shani remedies if needed', hi: 'आवश्यकता हो तो शनि उपाय करें' },
    ],
    bestVehicleTypes: [
      { en: 'Heavy trucks', hi: 'भारी ट्रक' },
      { en: 'Industrial vehicles', hi: 'औद्योगिक वाहन' },
      { en: 'Old reliable cars', hi: 'पुरानी विश्वसनीय कार' },
    ],
    rulingPlanet: { en: 'Saturn (Shani)', hi: 'शनि' },
    safetyScore: 58,
  },
  9: {
    meaning: {
      en: 'Number 9 represents Mars\'s energy and courage. Great for powerful vehicles and adventurous journeys.',
      hi: 'अंक 9 मंगल की ऊर्जा और साहस का प्रतिनिधित्व करता है। शक्तिशाली वाहनों और साहसिक यात्राओं के लिए बढ़िया।'
    },
    positiveAttributes: [
      { en: 'Excellent for powerful engines', hi: 'शक्तिशाली इंजनों के लिए उत्कृष्ट' },
      { en: 'Good for emergency and rescue', hi: 'आपातकाल और बचाव के लिए अच्छा' },
      { en: 'Attracts dynamic energy', hi: 'गतिशील ऊर्जा आकर्षित करता है' },
    ],
    cautions: [
      { en: 'Avoid aggressive driving', hi: 'आक्रामक ड्राइविंग से बचें' },
      { en: 'Higher accident risk if careless', hi: 'लापरवाह होने पर दुर्घटना का अधिक जोखिम' },
      { en: 'Mars can bring heated situations', hi: 'मंगल गर्म स्थितियां ला सकता है' },
    ],
    bestVehicleTypes: [
      { en: 'Sports bikes', hi: 'स्पोर्ट्स बाइक' },
      { en: 'Emergency vehicles', hi: 'आपातकालीन वाहन' },
      { en: 'High-performance cars', hi: 'हाई-परफॉर्मेंस कार' },
    ],
    rulingPlanet: { en: 'Mars (Mangal)', hi: 'मंगल' },
    safetyScore: 72,
  },
  11: {
    meaning: {
      en: 'Master Number 11 brings spiritual protection and intuitive driving. Highly auspicious for vehicles.',
      hi: 'मास्टर नंबर 11 आध्यात्मिक सुरक्षा और सहज ड्राइविंग लाता है। वाहनों के लिए अत्यधिक शुभ।'
    },
    positiveAttributes: [
      { en: 'Intuitive sense of danger', hi: 'खतरे की सहज समझ' },
      { en: 'Spiritual protection during travel', hi: 'यात्रा के दौरान आध्यात्मिक सुरक्षा' },
      { en: 'Attracts helpful people on the road', hi: 'सड़क पर मददगार लोगों को आकर्षित करता है' },
    ],
    cautions: [
      { en: 'Stay grounded while driving', hi: 'ड्राइविंग करते समय जमीन से जुड़े रहें' },
    ],
    bestVehicleTypes: [
      { en: 'Any vehicle with proper care', hi: 'उचित देखभाल के साथ कोई भी वाहन' },
      { en: 'Electric vehicles', hi: 'इलेक्ट्रिक वाहन' },
    ],
    rulingPlanet: { en: 'Uranus/Moon', hi: 'यूरेनस/चंद्रमा' },
    safetyScore: 90,
  },
  22: {
    meaning: {
      en: 'Master Number 22 is the Master Builder. Excellent for commercial and high-value vehicles.',
      hi: 'मास्टर नंबर 22 मास्टर बिल्डर है। वाणिज्यिक और उच्च मूल्य वाले वाहनों के लिए उत्कृष्ट।'
    },
    positiveAttributes: [
      { en: 'Perfect for business vehicles', hi: 'व्यावसायिक वाहनों के लिए एकदम सही' },
      { en: 'Long-lasting reliability', hi: 'दीर्घकालिक विश्वसनीयता' },
      { en: 'Great for fleet vehicles', hi: 'फ्लीट वाहनों के लिए बढ़िया' },
    ],
    cautions: [
      { en: 'Requires responsible ownership', hi: 'जिम्मेदार स्वामित्व की आवश्यकता' },
    ],
    bestVehicleTypes: [
      { en: 'Luxury buses', hi: 'लक्जरी बसें' },
      { en: 'Commercial trucks', hi: 'वाणिज्यिक ट्रक' },
      { en: 'Fleet vehicles', hi: 'फ्लीट वाहन' },
    ],
    rulingPlanet: { en: 'Saturn/Master Energy', hi: 'शनि/मास्टर ऊर्जा' },
    safetyScore: 88,
  },
};

// Letter to number mapping (Chaldean-based)
const LETTER_VALUES: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8,
};

/**
 * Calculate digit sum with reduction steps
 */
function calculateDigitSum(values: number[]): { sum: number; steps: number[] } {
  const steps: number[] = [];
  let sum = values.reduce((a, b) => a + b, 0);
  steps.push(sum);

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
 * Parse vehicle number and extract values
 */
function parseVehicleNumber(vehicleNumber: string): { digits: number[]; letters: number[] } {
  const cleanNumber = vehicleNumber.toUpperCase().replace(/[\s\-]/g, '');
  const digits: number[] = [];
  const letters: number[] = [];

  for (const char of cleanNumber) {
    if (/\d/.test(char)) {
      digits.push(parseInt(char));
    } else if (/[A-Z]/.test(char)) {
      letters.push(LETTER_VALUES[char] || 0);
    }
  }

  return { digits, letters };
}

/**
 * Analyze vehicle number
 */
export function analyzeVehicleNumber(vehicleNumber: string): VehicleNumberResult {
  const cleanNumber = vehicleNumber.toUpperCase().replace(/[\s\-]/g, '');
  const { digits, letters } = parseVehicleNumber(vehicleNumber);

  // Combine all values
  const allValues = [...digits, ...letters];
  const { sum, steps } = calculateDigitSum(allValues);
  const digitSum = steps[0];

  const isMasterNumber = sum === 11 || sum === 22;

  // Get meaning
  const meaningKey = VEHICLE_MEANINGS[sum] ? sum : (sum === 33 ? 6 : sum % 9 || 9);
  const vehicleData = VEHICLE_MEANINGS[meaningKey] || VEHICLE_MEANINGS[1];

  let safetyScore = vehicleData.safetyScore;
  if (isMasterNumber) {
    safetyScore = Math.min(safetyScore + 5, 100);
  }

  let luckCategory: VehicleNumberResult['luckCategory'];
  if (safetyScore >= 85) luckCategory = 'excellent';
  else if (safetyScore >= 70) luckCategory = 'good';
  else if (safetyScore >= 55) luckCategory = 'average';
  else luckCategory = 'caution';

  const safetyTips = generateSafetyTips(sum, luckCategory);
  const verdict = generateVerdict(sum, safetyScore, luckCategory, isMasterNumber);

  return {
    vehicleNumber: cleanNumber,
    totalNumber: sum,
    isMasterNumber,
    digitSum,
    reductionSteps: steps,
    safetyScore,
    luckCategory,
    numberMeaning: vehicleData.meaning,
    positiveAttributes: vehicleData.positiveAttributes,
    cautions: vehicleData.cautions,
    safetyTips,
    bestVehicleTypes: vehicleData.bestVehicleTypes,
    rulingPlanet: vehicleData.rulingPlanet,
    verdict,
  };
}

function generateSafetyTips(totalNumber: number, category: VehicleNumberResult['luckCategory']): BilingualText[] {
  const tips: BilingualText[] = [
    {
      en: 'Always perform vehicle puja before first use',
      hi: 'पहले उपयोग से पहले हमेशा वाहन पूजा करें'
    },
  ];

  if ([4, 7, 8].includes(totalNumber)) {
    tips.push({
      en: 'Place Hanuman or Ganesh idol in the vehicle for protection',
      hi: 'सुरक्षा के लिए वाहन में हनुमान या गणेश की मूर्ति रखें'
    });
    tips.push({
      en: 'Avoid traveling during Rahu Kaal',
      hi: 'राहु काल में यात्रा से बचें'
    });
  }

  if ([3, 5, 6].includes(totalNumber) || category === 'excellent') {
    tips.push({
      en: 'This is an auspicious number - maintain it well',
      hi: 'यह एक शुभ अंक है - इसे अच्छी तरह से बनाए रखें'
    });
  }

  tips.push({
    en: 'Keep emergency contacts saved',
    hi: 'आपातकालीन संपर्क सेव रखें'
  });

  return tips;
}

function generateVerdict(
  totalNumber: number,
  safetyScore: number,
  category: VehicleNumberResult['luckCategory'],
  isMasterNumber: boolean
): BilingualText {
  if (isMasterNumber) {
    return {
      en: `Excellent! Your vehicle number reduces to Master Number ${totalNumber} with ${safetyScore}% safety score. This is highly auspicious and brings spiritual protection during travel.`,
      hi: `उत्कृष्ट! आपका वाहन नंबर मास्टर नंबर ${totalNumber} पर आता है जिसका सुरक्षा स्कोर ${safetyScore}% है। यह अत्यधिक शुभ है और यात्रा के दौरान आध्यात्मिक सुरक्षा लाता है।`
    };
  }

  if (category === 'excellent') {
    return {
      en: `Great! Your vehicle number ${totalNumber} has ${safetyScore}% safety score. This is one of the best numbers for vehicles, promising safe and prosperous journeys.`,
      hi: `बढ़िया! आपके वाहन नंबर ${totalNumber} का सुरक्षा स्कोर ${safetyScore}% है। यह वाहनों के लिए सबसे अच्छे अंकों में से एक है, जो सुरक्षित और समृद्ध यात्राओं का वादा करता है।`
    };
  }

  if (category === 'good') {
    return {
      en: `Good! Your vehicle number totals ${totalNumber} with ${safetyScore}% safety score. With proper care and attention, this vehicle will serve you well.`,
      hi: `अच्छा! आपके वाहन नंबर का कुल ${totalNumber} है जिसका सुरक्षा स्कोर ${safetyScore}% है। उचित देखभाल और ध्यान के साथ, यह वाहन आपकी अच्छी सेवा करेगा।`
    };
  }

  if (category === 'average') {
    return {
      en: `Your vehicle number ${totalNumber} has ${safetyScore}% safety score. Consider using protective remedies and always follow traffic rules carefully.`,
      hi: `आपके वाहन नंबर ${totalNumber} का सुरक्षा स्कोर ${safetyScore}% है। सुरक्षात्मक उपायों का उपयोग करें और हमेशा ट्रैफिक नियमों का सावधानी से पालन करें।`
    };
  }

  return {
    en: `Your vehicle number ${totalNumber} has ${safetyScore}% safety score and requires extra caution. Perform vehicle puja, use protective symbols, and consider number remedies. Always drive carefully.`,
    hi: `आपके वाहन नंबर ${totalNumber} का सुरक्षा स्कोर ${safetyScore}% है और अतिरिक्त सावधानी की आवश्यकता है। वाहन पूजा करें, सुरक्षात्मक प्रतीकों का उपयोग करें और अंक उपाय पर विचार करें। हमेशा सावधानी से गाड़ी चलाएं।`
  };
}
