/**
 * House Number Vastu Calculator
 *
 * Analyzes house/flat numbers for numerological compatibility
 * and provides Vastu-based remedies.
 */

interface BilingualText {
  en: string;
  hi: string;
}

export interface HouseNumberInput {
  houseNumber: string;
  ownerDob?: {
    day: number;
    month: number;
    year: number;
  };
}

export interface NumberMeaning {
  number: number;
  planet: BilingualText;
  element: BilingualText;
  energy: 'positive' | 'neutral' | 'challenging';
  keywords: BilingualText[];
  bestFor: BilingualText[];
  challenges: BilingualText[];
  colors: BilingualText[];
  direction: BilingualText;
}

export interface HouseNumberResult {
  originalNumber: string;
  reducedNumber: number;
  reductionSteps: string[];
  meaning: NumberMeaning;
  compatibility: {
    score: number; // 0-100
    level: 'excellent' | 'good' | 'neutral' | 'challenging';
    description: BilingualText;
  } | null;
  remedies: BilingualText[];
  enhancements: BilingualText[];
  luckyDays: BilingualText[];
  overallVerdict: BilingualText;
}

// Number meanings based on Vastu and Numerology
const NUMBER_MEANINGS: Record<number, NumberMeaning> = {
  1: {
    number: 1,
    planet: { en: 'Sun', hi: 'सूर्य' },
    element: { en: 'Fire', hi: 'अग्नि' },
    energy: 'positive',
    keywords: [
      { en: 'Leadership', hi: 'नेतृत्व' },
      { en: 'Independence', hi: 'स्वतंत्रता' },
      { en: 'New Beginnings', hi: 'नई शुरुआत' },
      { en: 'Ambition', hi: 'महत्वाकांक्षा' },
    ],
    bestFor: [
      { en: 'Entrepreneurs and business owners', hi: 'उद्यमी और व्यवसाय मालिक' },
      { en: 'Those seeking independence', hi: 'स्वतंत्रता चाहने वाले' },
      { en: 'New couples starting fresh', hi: 'नई शुरुआत करने वाले जोड़े' },
      { en: 'Creative professionals', hi: 'रचनात्मक पेशेवर' },
    ],
    challenges: [
      { en: 'Can feel isolating for families', hi: 'परिवारों के लिए अलग-थलग महसूस हो सकता है' },
      { en: 'May promote ego conflicts', hi: 'अहंकार टकराव को बढ़ावा दे सकता है' },
    ],
    colors: [
      { en: 'Gold', hi: 'सुनहरा' },
      { en: 'Orange', hi: 'नारंगी' },
      { en: 'Yellow', hi: 'पीला' },
    ],
    direction: { en: 'East', hi: 'पूर्व' },
  },
  2: {
    number: 2,
    planet: { en: 'Moon', hi: 'चंद्रमा' },
    element: { en: 'Water', hi: 'जल' },
    energy: 'positive',
    keywords: [
      { en: 'Harmony', hi: 'सामंजस्य' },
      { en: 'Partnership', hi: 'साझेदारी' },
      { en: 'Sensitivity', hi: 'संवेदनशीलता' },
      { en: 'Peace', hi: 'शांति' },
    ],
    bestFor: [
      { en: 'Couples and partnerships', hi: 'जोड़े और साझेदारियाँ' },
      { en: 'Healers and counselors', hi: 'चिकित्सक और परामर्शदाता' },
      { en: 'Those seeking emotional balance', hi: 'भावनात्मक संतुलन चाहने वाले' },
      { en: 'Artists and musicians', hi: 'कलाकार और संगीतकार' },
    ],
    challenges: [
      { en: 'Can be too passive', hi: 'बहुत निष्क्रिय हो सकता है' },
      { en: 'May attract codependency', hi: 'परस्पर निर्भरता आकर्षित कर सकता है' },
    ],
    colors: [
      { en: 'White', hi: 'सफेद' },
      { en: 'Silver', hi: 'चांदी' },
      { en: 'Light Blue', hi: 'हल्का नीला' },
    ],
    direction: { en: 'North-West', hi: 'उत्तर-पश्चिम' },
  },
  3: {
    number: 3,
    planet: { en: 'Jupiter', hi: 'बृहस्पति' },
    element: { en: 'Fire', hi: 'अग्नि' },
    energy: 'positive',
    keywords: [
      { en: 'Creativity', hi: 'रचनात्मकता' },
      { en: 'Joy', hi: 'आनंद' },
      { en: 'Expression', hi: 'अभिव्यक्ति' },
      { en: 'Growth', hi: 'विकास' },
    ],
    bestFor: [
      { en: 'Families with children', hi: 'बच्चों वाले परिवार' },
      { en: 'Creative professionals', hi: 'रचनात्मक पेशेवर' },
      { en: 'Social gatherings', hi: 'सामाजिक समारोह' },
      { en: 'Those in entertainment', hi: 'मनोरंजन क्षेत्र के लोग' },
    ],
    challenges: [
      { en: 'Can be chaotic', hi: 'अव्यवस्थित हो सकता है' },
      { en: 'May lead to scattered energy', hi: 'बिखरी ऊर्जा हो सकती है' },
    ],
    colors: [
      { en: 'Yellow', hi: 'पीला' },
      { en: 'Purple', hi: 'बैंगनी' },
      { en: 'Mauve', hi: 'मौवे' },
    ],
    direction: { en: 'North-East', hi: 'उत्तर-पूर्व' },
  },
  4: {
    number: 4,
    planet: { en: 'Rahu', hi: 'राहु' },
    element: { en: 'Earth', hi: 'पृथ्वी' },
    energy: 'challenging',
    keywords: [
      { en: 'Stability', hi: 'स्थिरता' },
      { en: 'Hard Work', hi: 'कड़ी मेहनत' },
      { en: 'Structure', hi: 'संरचना' },
      { en: 'Discipline', hi: 'अनुशासन' },
    ],
    bestFor: [
      { en: 'Those building long-term foundations', hi: 'दीर्घकालिक नींव बनाने वाले' },
      { en: 'Disciplined individuals', hi: 'अनुशासित व्यक्ति' },
      { en: 'Engineers and architects', hi: 'इंजीनियर और वास्तुकार' },
    ],
    challenges: [
      { en: 'Can feel restrictive', hi: 'प्रतिबंधात्मक लग सकता है' },
      { en: 'May bring unexpected obstacles', hi: 'अप्रत्याशित बाधाएं आ सकती हैं' },
      { en: 'Requires more effort for success', hi: 'सफलता के लिए अधिक प्रयास चाहिए' },
    ],
    colors: [
      { en: 'Blue', hi: 'नीला' },
      { en: 'Grey', hi: 'धूसर' },
      { en: 'Electric Blue', hi: 'इलेक्ट्रिक नीला' },
    ],
    direction: { en: 'South-West', hi: 'दक्षिण-पश्चिम' },
  },
  5: {
    number: 5,
    planet: { en: 'Mercury', hi: 'बुध' },
    element: { en: 'Air', hi: 'वायु' },
    energy: 'positive',
    keywords: [
      { en: 'Change', hi: 'परिवर्तन' },
      { en: 'Freedom', hi: 'स्वतंत्रता' },
      { en: 'Communication', hi: 'संचार' },
      { en: 'Adventure', hi: 'साहसिक' },
    ],
    bestFor: [
      { en: 'Dynamic, active households', hi: 'गतिशील, सक्रिय परिवार' },
      { en: 'Writers and communicators', hi: 'लेखक और संचारक' },
      { en: 'Travelers and explorers', hi: 'यात्री और खोजकर्ता' },
      { en: 'Sales and marketing professionals', hi: 'बिक्री और विपणन पेशेवर' },
    ],
    challenges: [
      { en: 'Can be unstable', hi: 'अस्थिर हो सकता है' },
      { en: 'May lead to restlessness', hi: 'बेचैनी हो सकती है' },
    ],
    colors: [
      { en: 'Green', hi: 'हरा' },
      { en: 'Turquoise', hi: 'फ़िरोज़ा' },
      { en: 'Light Grey', hi: 'हल्का धूसर' },
    ],
    direction: { en: 'North', hi: 'उत्तर' },
  },
  6: {
    number: 6,
    planet: { en: 'Venus', hi: 'शुक्र' },
    element: { en: 'Earth', hi: 'पृथ्वी' },
    energy: 'positive',
    keywords: [
      { en: 'Love', hi: 'प्रेम' },
      { en: 'Family', hi: 'परिवार' },
      { en: 'Harmony', hi: 'सामंजस्य' },
      { en: 'Beauty', hi: 'सौंदर्य' },
    ],
    bestFor: [
      { en: 'Families and nurturers', hi: 'परिवार और पोषणकर्ता' },
      { en: 'Artists and designers', hi: 'कलाकार और डिजाइनर' },
      { en: 'Healers and caregivers', hi: 'चिकित्सक और देखभालकर्ता' },
      { en: 'Those seeking romance', hi: 'रोमांस चाहने वाले' },
    ],
    challenges: [
      { en: 'Can become overly domestic', hi: 'अत्यधिक घरेलू हो सकता है' },
      { en: 'May attract family burdens', hi: 'पारिवारिक बोझ आकर्षित कर सकता है' },
    ],
    colors: [
      { en: 'Pink', hi: 'गुलाबी' },
      { en: 'Light Blue', hi: 'हल्का नीला' },
      { en: 'Rose', hi: 'गुलाबी' },
    ],
    direction: { en: 'South-East', hi: 'दक्षिण-पूर्व' },
  },
  7: {
    number: 7,
    planet: { en: 'Ketu', hi: 'केतु' },
    element: { en: 'Water', hi: 'जल' },
    energy: 'neutral',
    keywords: [
      { en: 'Spirituality', hi: 'आध्यात्मिकता' },
      { en: 'Introspection', hi: 'आत्मनिरीक्षण' },
      { en: 'Wisdom', hi: 'ज्ञान' },
      { en: 'Solitude', hi: 'एकांत' },
    ],
    bestFor: [
      { en: 'Spiritual seekers', hi: 'आध्यात्मिक साधक' },
      { en: 'Researchers and scholars', hi: 'शोधकर्ता और विद्वान' },
      { en: 'Writers and philosophers', hi: 'लेखक और दार्शनिक' },
      { en: 'Those needing healing', hi: 'उपचार की जरूरत वाले' },
    ],
    challenges: [
      { en: 'Can feel isolating', hi: 'अलग-थलग महसूस हो सकता है' },
      { en: 'Not ideal for material pursuits', hi: 'भौतिक उद्देश्यों के लिए आदर्श नहीं' },
      { en: 'May bring mysterious events', hi: 'रहस्यमय घटनाएं हो सकती हैं' },
    ],
    colors: [
      { en: 'Violet', hi: 'बैंगनी' },
      { en: 'Lavender', hi: 'लैवेंडर' },
      { en: 'Purple', hi: 'जामुनी' },
    ],
    direction: { en: 'South-West', hi: 'दक्षिण-पश्चिम' },
  },
  8: {
    number: 8,
    planet: { en: 'Saturn', hi: 'शनि' },
    element: { en: 'Earth', hi: 'पृथ्वी' },
    energy: 'challenging',
    keywords: [
      { en: 'Power', hi: 'शक्ति' },
      { en: 'Karma', hi: 'कर्म' },
      { en: 'Material Success', hi: 'भौतिक सफलता' },
      { en: 'Authority', hi: 'अधिकार' },
    ],
    bestFor: [
      { en: 'Business tycoons', hi: 'व्यापार दिग्गज' },
      { en: 'Those in finance/banking', hi: 'वित्त/बैंकिंग में कार्यरत' },
      { en: 'Lawyers and judges', hi: 'वकील और न्यायाधीश' },
      { en: 'Those with strong Saturn', hi: 'मजबूत शनि वाले' },
    ],
    challenges: [
      { en: 'Can bring financial ups and downs', hi: 'वित्तीय उतार-चढ़ाव ला सकता है' },
      { en: 'May attract legal issues', hi: 'कानूनी मुद्दे आकर्षित कर सकता है' },
      { en: 'Requires discipline and patience', hi: 'अनुशासन और धैर्य चाहिए' },
    ],
    colors: [
      { en: 'Black', hi: 'काला' },
      { en: 'Dark Blue', hi: 'गहरा नीला' },
      { en: 'Grey', hi: 'धूसर' },
    ],
    direction: { en: 'West', hi: 'पश्चिम' },
  },
  9: {
    number: 9,
    planet: { en: 'Mars', hi: 'मंगल' },
    element: { en: 'Fire', hi: 'अग्नि' },
    energy: 'positive',
    keywords: [
      { en: 'Courage', hi: 'साहस' },
      { en: 'Completion', hi: 'पूर्णता' },
      { en: 'Humanitarianism', hi: 'मानवतावाद' },
      { en: 'Energy', hi: 'ऊर्जा' },
    ],
    bestFor: [
      { en: 'Humanitarians and helpers', hi: 'मानवतावादी और सहायक' },
      { en: 'Military and police', hi: 'सेना और पुलिस' },
      { en: 'Athletes and sportspersons', hi: 'एथलीट और खिलाड़ी' },
      { en: 'Social workers', hi: 'सामाजिक कार्यकर्ता' },
    ],
    challenges: [
      { en: 'Can bring arguments', hi: 'तर्क-वितर्क हो सकते हैं' },
      { en: 'May attract accidents', hi: 'दुर्घटनाएं आकर्षित कर सकता है' },
      { en: 'High energy can be exhausting', hi: 'उच्च ऊर्जा थकाऊ हो सकती है' },
    ],
    colors: [
      { en: 'Red', hi: 'लाल' },
      { en: 'Coral', hi: 'मूंगा' },
      { en: 'Scarlet', hi: 'लाल रंग' },
    ],
    direction: { en: 'South', hi: 'दक्षिण' },
  },
};

// Compatible numbers for each Life Path
const COMPATIBLE_NUMBERS: Record<number, number[]> = {
  1: [1, 3, 5, 9],
  2: [2, 4, 6, 8],
  3: [1, 3, 5, 6, 9],
  4: [2, 4, 6, 8],
  5: [1, 3, 5, 7, 9],
  6: [2, 3, 6, 9],
  7: [5, 7],
  8: [2, 4, 6, 8],
  9: [1, 3, 5, 6, 9],
};

// Remedies for challenging numbers
const REMEDIES: Record<number, BilingualText[]> = {
  4: [
    { en: 'Place a Ganesha idol at the entrance', hi: 'प्रवेश द्वार पर गणेश प्रतिमा रखें' },
    { en: 'Use more blue and grey colors in decor', hi: 'सजावट में नीले और धूसर रंग का अधिक उपयोग करें' },
    { en: 'Keep the South-West corner heavy with furniture', hi: 'दक्षिण-पश्चिम कोने में भारी फर्नीचर रखें' },
    { en: 'Light a lamp every evening', hi: 'हर शाम दीपक जलाएं' },
    { en: 'Add number 1 or 6 to the address (e.g., use 4A or 4/1)', hi: 'पते में संख्या 1 या 6 जोड़ें (जैसे 4A या 4/1)' },
  ],
  7: [
    { en: 'Maintain a meditation or prayer room', hi: 'ध्यान या पूजा कक्ष बनाए रखें' },
    { en: 'Use lavender and violet colors', hi: 'लैवेंडर और बैंगनी रंगों का उपयोग करें' },
    { en: 'Keep the house well-lit to counter isolation energy', hi: 'अलगाव ऊर्जा का मुकाबला करने के लिए घर को अच्छी तरह रोशन रखें' },
    { en: 'Place crystals in the North-East', hi: 'उत्तर-पूर्व में क्रिस्टल रखें' },
    { en: 'Host regular social gatherings', hi: 'नियमित सामाजिक समारोह आयोजित करें' },
  ],
  8: [
    { en: 'Worship Lord Shani on Saturdays', hi: 'शनिवार को शनि देव की पूजा करें' },
    { en: 'Keep the house extremely clean', hi: 'घर को बेहद साफ रखें' },
    { en: 'Donate to the needy regularly', hi: 'नियमित रूप से जरूरतमंदों को दान करें' },
    { en: 'Use dark blue or black accents mindfully', hi: 'गहरे नीले या काले एक्सेंट का सावधानी से उपयोग करें' },
    { en: 'Maintain strict financial discipline', hi: 'सख्त वित्तीय अनुशासन बनाए रखें' },
    { en: 'Place a Shani Yantra in the West', hi: 'पश्चिम में शनि यंत्र रखें' },
  ],
};

// Enhancements for positive numbers
const ENHANCEMENTS: Record<number, BilingualText[]> = {
  1: [
    { en: 'Place a Sun symbol at the entrance', hi: 'प्रवेश द्वार पर सूर्य चिह्न लगाएं' },
    { en: 'Use golden and orange accents', hi: 'सुनहरे और नारंगी एक्सेंट का उपयोग करें' },
    { en: 'Keep the East direction open and bright', hi: 'पूर्व दिशा खुली और उज्ज्वल रखें' },
  ],
  2: [
    { en: 'Place a Moon or water element in North-West', hi: 'उत्तर-पश्चिम में चंद्रमा या जल तत्व रखें' },
    { en: 'Use white and silver colors', hi: 'सफेद और चांदी रंगों का उपयोग करें' },
    { en: 'Keep paired decorations for harmony', hi: 'सामंजस्य के लिए जोड़ी सजावट रखें' },
  ],
  3: [
    { en: 'Keep the North-East bright and clutter-free', hi: 'उत्तर-पूर्व उज्ज्वल और अव्यवस्था मुक्त रखें' },
    { en: 'Use yellow and purple colors', hi: 'पीले और बैंगनी रंगों का उपयोग करें' },
    { en: 'Display creative artwork', hi: 'रचनात्मक कलाकृति प्रदर्शित करें' },
  ],
  5: [
    { en: 'Keep the entrance vibrant and welcoming', hi: 'प्रवेश द्वार जीवंत और स्वागत योग्य रखें' },
    { en: 'Use green and turquoise colors', hi: 'हरे और फ़िरोज़ा रंगों का उपयोग करें' },
    { en: 'Install a wind chime at the entrance', hi: 'प्रवेश द्वार पर विंड चाइम लगाएं' },
  ],
  6: [
    { en: 'Create a beautiful garden or balcony', hi: 'सुंदर बगीचा या बालकनी बनाएं' },
    { en: 'Use pink and light blue colors', hi: 'गुलाबी और हल्के नीले रंगों का उपयोग करें' },
    { en: 'Display family photos in the South-West', hi: 'दक्षिण-पश्चिम में परिवार की तस्वीरें लगाएं' },
  ],
  9: [
    { en: 'Place Mars-related items in the South', hi: 'दक्षिण में मंगल संबंधित वस्तुएं रखें' },
    { en: 'Use red and coral accents', hi: 'लाल और मूंगा एक्सेंट का उपयोग करें' },
    { en: 'Keep the house energetic with plants', hi: 'पौधों से घर को ऊर्जावान रखें' },
  ],
};

/**
 * Calculate the reduced single-digit number from house number
 */
function reduceToSingleDigit(numStr: string): { result: number; steps: string[] } {
  // Extract only digits and letters that have numeric values
  const cleaned = numStr.toUpperCase().replace(/[^0-9A-Z]/g, '');
  const steps: string[] = [];

  // Convert letters to numbers (A=1, B=2, ..., Z=26, then reduce)
  let total = 0;
  const letterValues: string[] = [];

  for (const char of cleaned) {
    if (/[0-9]/.test(char)) {
      total += parseInt(char);
      letterValues.push(char);
    } else {
      // Letter: A=1, B=2, etc.
      const value = char.charCodeAt(0) - 64;
      total += value;
      letterValues.push(`${char}=${value}`);
    }
  }

  steps.push(`${numStr} → ${letterValues.join(' + ')} = ${total}`);

  // Reduce to single digit
  while (total > 9) {
    const digits = total.toString().split('').map(Number);
    const newTotal = digits.reduce((a, b) => a + b, 0);
    steps.push(`${digits.join(' + ')} = ${newTotal}`);
    total = newTotal;
  }

  return { result: total, steps };
}

/**
 * Calculate Life Path Number from date of birth
 */
function calculateLifePath(day: number, month: number, year: number): number {
  const sum = day + month + year
    .toString()
    .split('')
    .reduce((a, b) => a + parseInt(b), 0);

  let result = sum;
  while (result > 9 && result !== 11 && result !== 22 && result !== 33) {
    result = result
      .toString()
      .split('')
      .reduce((a, b) => a + parseInt(b), 0);
  }

  // For compatibility, reduce master numbers too
  if (result === 11) return 2;
  if (result === 22) return 4;
  if (result === 33) return 6;

  return result;
}

/**
 * Get lucky days based on house number
 */
function getLuckyDays(number: number): BilingualText[] {
  const dayMapping: Record<number, BilingualText[]> = {
    1: [{ en: 'Sunday', hi: 'रविवार' }, { en: 'Monday', hi: 'सोमवार' }],
    2: [{ en: 'Monday', hi: 'सोमवार' }, { en: 'Friday', hi: 'शुक्रवार' }],
    3: [{ en: 'Thursday', hi: 'गुरुवार' }, { en: 'Sunday', hi: 'रविवार' }],
    4: [{ en: 'Saturday', hi: 'शनिवार' }, { en: 'Sunday', hi: 'रविवार' }],
    5: [{ en: 'Wednesday', hi: 'बुधवार' }, { en: 'Friday', hi: 'शुक्रवार' }],
    6: [{ en: 'Friday', hi: 'शुक्रवार' }, { en: 'Wednesday', hi: 'बुधवार' }],
    7: [{ en: 'Monday', hi: 'सोमवार' }, { en: 'Sunday', hi: 'रविवार' }],
    8: [{ en: 'Saturday', hi: 'शनिवार' }, { en: 'Thursday', hi: 'गुरुवार' }],
    9: [{ en: 'Tuesday', hi: 'मंगलवार' }, { en: 'Thursday', hi: 'गुरुवार' }],
  };
  return dayMapping[number] || [];
}

/**
 * Main function to analyze house number
 */
export function analyzeHouseNumber(input: HouseNumberInput): HouseNumberResult {
  const { houseNumber, ownerDob } = input;

  // Calculate reduced number
  const { result: reducedNumber, steps } = reduceToSingleDigit(houseNumber);

  // Get meaning
  const meaning = NUMBER_MEANINGS[reducedNumber];

  // Calculate compatibility if DOB provided
  let compatibility: HouseNumberResult['compatibility'] = null;
  if (ownerDob) {
    const lifePath = calculateLifePath(ownerDob.day, ownerDob.month, ownerDob.year);
    const isCompatible = COMPATIBLE_NUMBERS[lifePath]?.includes(reducedNumber);
    const isSameNumber = lifePath === reducedNumber;

    let score: number;
    let level: 'excellent' | 'good' | 'neutral' | 'challenging';
    let description: BilingualText;

    if (isSameNumber) {
      score = 95;
      level = 'excellent';
      description = {
        en: `Perfect match! Your Life Path ${lifePath} resonates perfectly with house number ${reducedNumber}.`,
        hi: `उत्तम मेल! आपका जीवन पथ ${lifePath} घर नंबर ${reducedNumber} के साथ पूरी तरह से मेल खाता है।`,
      };
    } else if (isCompatible) {
      score = 80;
      level = 'good';
      description = {
        en: `Good compatibility. Your Life Path ${lifePath} harmonizes well with house number ${reducedNumber}.`,
        hi: `अच्छी अनुकूलता। आपका जीवन पथ ${lifePath} घर नंबर ${reducedNumber} के साथ अच्छी तरह मेल खाता है।`,
      };
    } else if (meaning.energy === 'challenging') {
      score = 40;
      level = 'challenging';
      description = {
        en: `Challenging combination. Your Life Path ${lifePath} may face friction with house number ${reducedNumber}. Use remedies below.`,
        hi: `चुनौतीपूर्ण संयोजन। आपका जीवन पथ ${lifePath} घर नंबर ${reducedNumber} के साथ कठिनाई का सामना कर सकता है। नीचे दिए गए उपाय अपनाएं।`,
      };
    } else {
      score = 60;
      level = 'neutral';
      description = {
        en: `Neutral compatibility. Your Life Path ${lifePath} can adapt to house number ${reducedNumber} with some adjustments.`,
        hi: `तटस्थ अनुकूलता। आपका जीवन पथ ${lifePath} कुछ समायोजन के साथ घर नंबर ${reducedNumber} के अनुकूल हो सकता है।`,
      };
    }

    compatibility = { score, level, description };
  }

  // Get remedies or enhancements
  const remedies = meaning.energy === 'challenging'
    ? (REMEDIES[reducedNumber] || [])
    : [];

  const enhancements = meaning.energy !== 'challenging'
    ? (ENHANCEMENTS[reducedNumber] || [])
    : [];

  // Lucky days
  const luckyDays = getLuckyDays(reducedNumber);

  // Overall verdict
  let overallVerdict: BilingualText;
  if (meaning.energy === 'positive') {
    overallVerdict = {
      en: `House number ${reducedNumber} is generally auspicious. It brings ${meaning.keywords.map(k => k.en.toLowerCase()).join(', ')} energy to your home.`,
      hi: `घर नंबर ${reducedNumber} आम तौर पर शुभ है। यह आपके घर में ${meaning.keywords.map(k => k.hi).join(', ')} ऊर्जा लाता है।`,
    };
  } else if (meaning.energy === 'neutral') {
    overallVerdict = {
      en: `House number ${reducedNumber} is spiritually inclined. Best for those seeking ${meaning.keywords.map(k => k.en.toLowerCase()).join(', ')}.`,
      hi: `घर नंबर ${reducedNumber} आध्यात्मिक रूप से झुका हुआ है। ${meaning.keywords.map(k => k.hi).join(', ')} चाहने वालों के लिए सर्वोत्तम।`,
    };
  } else {
    overallVerdict = {
      en: `House number ${reducedNumber} requires attention. While it can bring ${meaning.keywords[0].en.toLowerCase()}, it needs proper Vastu remedies for best results.`,
      hi: `घर नंबर ${reducedNumber} को ध्यान देने की आवश्यकता है। हालांकि यह ${meaning.keywords[0].hi} ला सकता है, सर्वोत्तम परिणामों के लिए उचित वास्तु उपाय चाहिए।`,
    };
  }

  return {
    originalNumber: houseNumber,
    reducedNumber,
    reductionSteps: steps,
    meaning,
    compatibility,
    remedies,
    enhancements,
    luckyDays,
    overallVerdict,
  };
}

/**
 * Get all number meanings for reference
 */
export function getAllNumberMeanings(): NumberMeaning[] {
  return Object.values(NUMBER_MEANINGS);
}
