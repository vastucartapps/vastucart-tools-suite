/**
 * Love Compatibility Numerology Calculator
 * Analyzes relationship compatibility based on Life Path numbers
 */

export interface BilingualText {
  en: string;
  hi: string;
}

export interface PartnerInfo {
  name: string;
  birthDate: Date;
  lifePathNumber: number;
  isMasterNumber: boolean;
}

export interface LoveCompatibilityResult {
  // Partner details
  partner1: PartnerInfo;
  partner2: PartnerInfo;

  // Compatibility score (0-100)
  compatibilityScore: number;
  compatibilityLevel: 'soulmate' | 'excellent' | 'good' | 'moderate' | 'challenging';

  // Combined number (sum of life paths reduced)
  combinedNumber: number;
  combinedMeaning: BilingualText;

  // Relationship strengths
  strengths: BilingualText[];

  // Challenges to work on
  challenges: BilingualText[];

  // Advice for the relationship
  advice: BilingualText[];

  // Areas of compatibility
  compatibilityAreas: {
    area: BilingualText;
    score: number;
    description: BilingualText;
  }[];

  // Overall verdict
  verdict: BilingualText;
}

// Compatibility matrix (1-9 and master numbers)
const COMPATIBILITY_SCORES: Record<string, number> = {
  // Number 1 compatibilities
  '1-1': 65, '1-2': 60, '1-3': 85, '1-4': 50, '1-5': 90, '1-6': 70, '1-7': 75, '1-8': 55, '1-9': 80,
  // Number 2 compatibilities
  '2-2': 70, '2-3': 75, '2-4': 65, '2-5': 55, '2-6': 90, '2-7': 80, '2-8': 85, '2-9': 75,
  // Number 3 compatibilities
  '3-3': 70, '3-4': 50, '3-5': 85, '3-6': 95, '3-7': 55, '3-8': 60, '3-9': 90,
  // Number 4 compatibilities
  '4-4': 75, '4-5': 55, '4-6': 70, '4-7': 65, '4-8': 85, '4-9': 60,
  // Number 5 compatibilities
  '5-5': 80, '5-6': 75, '5-7': 90, '5-8': 55, '5-9': 85,
  // Number 6 compatibilities
  '6-6': 85, '6-7': 60, '6-8': 70, '6-9': 95,
  // Number 7 compatibilities
  '7-7': 80, '7-8': 50, '7-9': 65,
  // Number 8 compatibilities
  '8-8': 75, '8-9': 60,
  // Number 9 compatibilities
  '9-9': 85,
  // Master numbers add bonus
  '11-11': 95, '11-22': 90, '22-22': 95,
};

// Life Path number meanings for love
const LOVE_MEANINGS: Record<number, {
  traits: BilingualText;
  loveStyle: BilingualText;
}> = {
  1: {
    traits: { en: 'Independent, ambitious, leader', hi: 'स्वतंत्र, महत्वाकांक्षी, नेता' },
    loveStyle: { en: 'Needs space and admiration', hi: 'स्थान और प्रशंसा की आवश्यकता' },
  },
  2: {
    traits: { en: 'Sensitive, diplomatic, nurturing', hi: 'संवेदनशील, कूटनीतिक, पोषणकारी' },
    loveStyle: { en: 'Seeks harmony and partnership', hi: 'सामंजस्य और साझेदारी चाहता है' },
  },
  3: {
    traits: { en: 'Creative, expressive, joyful', hi: 'रचनात्मक, अभिव्यक्तिपूर्ण, आनंदमय' },
    loveStyle: { en: 'Loves fun and romance', hi: 'मज़े और रोमांस को पसंद करता है' },
  },
  4: {
    traits: { en: 'Stable, practical, loyal', hi: 'स्थिर, व्यावहारिक, वफादार' },
    loveStyle: { en: 'Values security and commitment', hi: 'सुरक्षा और प्रतिबद्धता को महत्व देता है' },
  },
  5: {
    traits: { en: 'Adventurous, freedom-loving, dynamic', hi: 'साहसिक, स्वतंत्रता-प्रेमी, गतिशील' },
    loveStyle: { en: 'Needs excitement and variety', hi: 'उत्साह और विविधता की आवश्यकता' },
  },
  6: {
    traits: { en: 'Nurturing, responsible, family-oriented', hi: 'पोषणकारी, जिम्मेदार, परिवार-उन्मुख' },
    loveStyle: { en: 'Devoted and caring partner', hi: 'समर्पित और देखभाल करने वाला साथी' },
  },
  7: {
    traits: { en: 'Introspective, spiritual, analytical', hi: 'आत्मनिरीक्षक, आध्यात्मिक, विश्लेषणात्मक' },
    loveStyle: { en: 'Needs deep mental connection', hi: 'गहरे मानसिक संबंध की आवश्यकता' },
  },
  8: {
    traits: { en: 'Ambitious, powerful, material', hi: 'महत्वाकांक्षी, शक्तिशाली, भौतिक' },
    loveStyle: { en: 'Seeks respect and success together', hi: 'साथ में सम्मान और सफलता चाहता है' },
  },
  9: {
    traits: { en: 'Compassionate, humanitarian, wise', hi: 'दयालु, मानवतावादी, बुद्धिमान' },
    loveStyle: { en: 'Loves unconditionally', hi: 'बिना शर्त प्यार करता है' },
  },
  11: {
    traits: { en: 'Intuitive, inspiring, visionary', hi: 'सहज, प्रेरणादायक, दूरदर्शी' },
    loveStyle: { en: 'Spiritual and deep connection', hi: 'आध्यात्मिक और गहरा संबंध' },
  },
  22: {
    traits: { en: 'Master builder, practical dreamer', hi: 'मास्टर बिल्डर, व्यावहारिक स्वप्नद्रष्टा' },
    loveStyle: { en: 'Builds lasting partnerships', hi: 'स्थायी साझेदारी बनाता है' },
  },
};

// Compatibility descriptions
const COMPATIBILITY_DESCRIPTIONS: Record<string, BilingualText> = {
  '1-3': {
    en: 'A dynamic and exciting match! 1 provides leadership while 3 brings creativity and joy.',
    hi: 'एक गतिशील और रोमांचक जोड़ी! 1 नेतृत्व प्रदान करता है जबकि 3 रचनात्मकता और खुशी लाता है।'
  },
  '1-5': {
    en: 'Adventurous and energetic duo! Both love freedom and excitement.',
    hi: 'साहसिक और ऊर्जावान जोड़ी! दोनों स्वतंत्रता और उत्साह को पसंद करते हैं।'
  },
  '2-6': {
    en: 'A nurturing and harmonious match! Both value family and emotional connection.',
    hi: 'एक पोषणकारी और सामंजस्यपूर्ण जोड़ी! दोनों परिवार और भावनात्मक संबंध को महत्व देते हैं।'
  },
  '3-6': {
    en: 'Perfect romantic match! 3 brings fun and 6 brings devotion and care.',
    hi: 'परिपूर्ण रोमांटिक जोड़ी! 3 मज़ा लाता है और 6 समर्पण और देखभाल लाता है।'
  },
  '3-9': {
    en: 'Creative and compassionate pairing! Both are expressive and generous.',
    hi: 'रचनात्मक और दयालु जोड़ी! दोनों अभिव्यक्तिपूर्ण और उदार हैं।'
  },
  '5-7': {
    en: 'Intellectually stimulating match! Both seek deeper meaning in life.',
    hi: 'बौद्धिक रूप से उत्तेजक जोड़ी! दोनों जीवन में गहरा अर्थ खोजते हैं।'
  },
  '6-9': {
    en: 'Beautiful and caring match! Both are devoted to love and service.',
    hi: 'सुंदर और देखभाल करने वाली जोड़ी! दोनों प्रेम और सेवा के प्रति समर्पित हैं।'
  },
  '4-8': {
    en: 'Power couple! Both are practical and focused on building together.',
    hi: 'पावर कपल! दोनों व्यावहारिक हैं और साथ मिलकर निर्माण पर केंद्रित हैं।'
  },
};

/**
 * Calculate Life Path number
 */
function calculateLifePath(birthDate: Date): { number: number; isMaster: boolean } {
  const day = birthDate.getDate();
  const month = birthDate.getMonth() + 1;
  const year = birthDate.getFullYear();

  // Sum all digits
  const dateStr = `${day}${month}${year}`;
  let sum = 0;
  for (const digit of dateStr) {
    sum += parseInt(digit);
  }

  // Reduce to single digit or master number
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
 * Get compatibility score between two numbers
 */
function getCompatibilityScore(num1: number, num2: number): number {
  const key = num1 <= num2 ? `${num1}-${num2}` : `${num2}-${num1}`;
  return COMPATIBILITY_SCORES[key] || 60;
}

/**
 * Generate strengths based on numbers
 */
function generateStrengths(num1: number, num2: number, score: number): BilingualText[] {
  const strengths: BilingualText[] = [];

  if (score >= 85) {
    strengths.push({
      en: 'Natural understanding and harmony between partners',
      hi: 'साथियों के बीच स्वाभाविक समझ और सामंजस्य'
    });
  }

  if ([3, 6, 9].includes(num1) || [3, 6, 9].includes(num2)) {
    strengths.push({
      en: 'Strong emotional and romantic connection',
      hi: 'मजबूत भावनात्मक और रोमांटिक संबंध'
    });
  }

  if ([1, 5].includes(num1) || [1, 5].includes(num2)) {
    strengths.push({
      en: 'Exciting and adventurous relationship dynamic',
      hi: 'रोमांचक और साहसिक रिश्ते की गतिशीलता'
    });
  }

  if ([2, 4, 8].includes(num1) && [2, 4, 8].includes(num2)) {
    strengths.push({
      en: 'Practical and stable foundation for long-term success',
      hi: 'दीर्घकालिक सफलता के लिए व्यावहारिक और स्थिर नींव'
    });
  }

  if (num1 === num2) {
    strengths.push({
      en: 'Deep understanding as you share the same life path',
      hi: 'गहरी समझ क्योंकि आप एक ही जीवन पथ साझा करते हैं'
    });
  }

  if (strengths.length === 0) {
    strengths.push({
      en: 'Complementary energies that can balance each other',
      hi: 'पूरक ऊर्जाएं जो एक दूसरे को संतुलित कर सकती हैं'
    });
  }

  return strengths.slice(0, 4);
}

/**
 * Generate challenges based on numbers
 */
function generateChallenges(num1: number, num2: number, score: number): BilingualText[] {
  const challenges: BilingualText[] = [];

  if (score < 60) {
    challenges.push({
      en: 'May require extra effort to understand each other',
      hi: 'एक दूसरे को समझने के लिए अतिरिक्त प्रयास की आवश्यकता हो सकती है'
    });
  }

  if (num1 === 1 && [4, 8].includes(num2) || num2 === 1 && [4, 8].includes(num1)) {
    challenges.push({
      en: 'Power struggles may arise - practice compromise',
      hi: 'शक्ति संघर्ष उत्पन्न हो सकता है - समझौते का अभ्यास करें'
    });
  }

  if (num1 === 5 || num2 === 5) {
    challenges.push({
      en: 'Need to balance freedom with commitment',
      hi: 'स्वतंत्रता को प्रतिबद्धता के साथ संतुलित करने की आवश्यकता'
    });
  }

  if (num1 === 7 || num2 === 7) {
    challenges.push({
      en: 'May need more emotional expression and communication',
      hi: 'अधिक भावनात्मक अभिव्यक्ति और संचार की आवश्यकता हो सकती है'
    });
  }

  if (challenges.length === 0) {
    challenges.push({
      en: 'Minor differences that strengthen the relationship over time',
      hi: 'मामूली मतभेद जो समय के साथ रिश्ते को मजबूत करते हैं'
    });
  }

  return challenges.slice(0, 3);
}

/**
 * Generate advice
 */
function generateAdvice(num1: number, num2: number, score: number): BilingualText[] {
  const advice: BilingualText[] = [];

  advice.push({
    en: 'Celebrate your differences as they make you stronger together',
    hi: 'अपनी भिन्नताओं का जश्न मनाएं क्योंकि वे आपको साथ में मजबूत बनाती हैं'
  });

  if (score >= 80) {
    advice.push({
      en: 'Maintain the beautiful connection through quality time together',
      hi: 'साथ में गुणवत्तापूर्ण समय के माध्यम से सुंदर संबंध बनाए रखें'
    });
  } else {
    advice.push({
      en: 'Focus on open communication and mutual respect',
      hi: 'खुले संचार और परस्पर सम्मान पर ध्यान दें'
    });
  }

  advice.push({
    en: 'Use numerology remedies to enhance compatibility',
    hi: 'संगतता बढ़ाने के लिए अंकशास्त्र उपायों का उपयोग करें'
  });

  return advice;
}

/**
 * Generate compatibility areas
 */
function generateCompatibilityAreas(num1: number, num2: number, baseScore: number): LoveCompatibilityResult['compatibilityAreas'] {
  const areas: LoveCompatibilityResult['compatibilityAreas'] = [];

  // Emotional compatibility
  let emotionalScore = baseScore;
  if ([2, 3, 6, 9].includes(num1) || [2, 3, 6, 9].includes(num2)) emotionalScore += 10;
  if ([4, 8].includes(num1) && [4, 8].includes(num2)) emotionalScore -= 10;
  emotionalScore = Math.min(100, Math.max(30, emotionalScore));

  areas.push({
    area: { en: 'Emotional Connection', hi: 'भावनात्मक संबंध' },
    score: emotionalScore,
    description: emotionalScore >= 80
      ? { en: 'Strong emotional bond and understanding', hi: 'मजबूत भावनात्मक बंधन और समझ' }
      : { en: 'Work on expressing feelings more openly', hi: 'भावनाओं को अधिक खुलकर व्यक्त करने पर काम करें' }
  });

  // Communication
  let communicationScore = baseScore;
  if ([3, 5].includes(num1) || [3, 5].includes(num2)) communicationScore += 10;
  if (num1 === 7 || num2 === 7) communicationScore -= 5;
  communicationScore = Math.min(100, Math.max(30, communicationScore));

  areas.push({
    area: { en: 'Communication', hi: 'संचार' },
    score: communicationScore,
    description: communicationScore >= 80
      ? { en: 'Excellent communication flow', hi: 'उत्कृष्ट संचार प्रवाह' }
      : { en: 'Practice active listening', hi: 'सक्रिय श्रवण का अभ्यास करें' }
  });

  // Trust & Loyalty
  let trustScore = baseScore;
  if ([4, 6, 8].includes(num1) && [4, 6, 8].includes(num2)) trustScore += 15;
  if (num1 === 5 || num2 === 5) trustScore -= 5;
  trustScore = Math.min(100, Math.max(30, trustScore));

  areas.push({
    area: { en: 'Trust & Loyalty', hi: 'विश्वास और वफादारी' },
    score: trustScore,
    description: trustScore >= 80
      ? { en: 'Deep trust and commitment', hi: 'गहरा विश्वास और प्रतिबद्धता' }
      : { en: 'Build trust through consistency', hi: 'निरंतरता के माध्यम से विश्वास बनाएं' }
  });

  // Romance & Passion
  let romanceScore = baseScore;
  if ([3, 5, 6, 9].includes(num1) || [3, 5, 6, 9].includes(num2)) romanceScore += 10;
  if ([4, 7].includes(num1) && [4, 7].includes(num2)) romanceScore -= 5;
  romanceScore = Math.min(100, Math.max(30, romanceScore));

  areas.push({
    area: { en: 'Romance & Passion', hi: 'रोमांस और जुनून' },
    score: romanceScore,
    description: romanceScore >= 80
      ? { en: 'Sparks fly between you!', hi: 'आप दोनों के बीच जादू है!' }
      : { en: 'Keep the romance alive with surprises', hi: 'आश्चर्य के साथ रोमांस को जिंदा रखें' }
  });

  return areas;
}

/**
 * Calculate combined number meaning
 */
function getCombinedMeaning(combinedNum: number): BilingualText {
  const meanings: Record<number, BilingualText> = {
    1: { en: 'A pioneering relationship that leads by example', hi: 'एक अग्रणी रिश्ता जो उदाहरण से नेतृत्व करता है' },
    2: { en: 'A harmonious partnership built on mutual support', hi: 'पारस्परिक समर्थन पर बना एक सामंजस्यपूर्ण साझेदारी' },
    3: { en: 'A creative and joyful union full of expression', hi: 'अभिव्यक्ति से भरा एक रचनात्मक और आनंदमय मिलन' },
    4: { en: 'A stable and secure foundation for lasting love', hi: 'स्थायी प्रेम के लिए एक स्थिर और सुरक्षित नींव' },
    5: { en: 'An exciting and adventurous journey together', hi: 'साथ में एक रोमांचक और साहसिक यात्रा' },
    6: { en: 'A nurturing and family-oriented loving bond', hi: 'एक पोषणकारी और परिवार-उन्मुख प्रेम बंधन' },
    7: { en: 'A spiritually connected and introspective union', hi: 'एक आध्यात्मिक रूप से जुड़ा और आत्मनिरीक्षक मिलन' },
    8: { en: 'A powerful partnership destined for success', hi: 'सफलता के लिए नियत एक शक्तिशाली साझेदारी' },
    9: { en: 'A compassionate and universal love connection', hi: 'एक दयालु और सार्वभौमिक प्रेम संबंध' },
    11: { en: 'An inspiring and spiritually elevated union', hi: 'एक प्रेरणादायक और आध्यात्मिक रूप से उन्नत मिलन' },
    22: { en: 'A master builder couple creating great things', hi: 'महान चीजें बनाने वाली मास्टर बिल्डर जोड़ी' },
  };
  return meanings[combinedNum] || meanings[9];
}

/**
 * Analyze love compatibility
 */
export function analyzeLoveCompatibility(
  name1: string,
  birthDate1: Date,
  name2: string,
  birthDate2: Date
): LoveCompatibilityResult {
  const lp1 = calculateLifePath(birthDate1);
  const lp2 = calculateLifePath(birthDate2);

  const partner1: PartnerInfo = {
    name: name1,
    birthDate: birthDate1,
    lifePathNumber: lp1.number,
    isMasterNumber: lp1.isMaster,
  };

  const partner2: PartnerInfo = {
    name: name2,
    birthDate: birthDate2,
    lifePathNumber: lp2.number,
    isMasterNumber: lp2.isMaster,
  };

  // Calculate base compatibility score
  let compatibilityScore = getCompatibilityScore(lp1.number, lp2.number);

  // Bonus for master numbers
  if (lp1.isMaster || lp2.isMaster) {
    compatibilityScore = Math.min(100, compatibilityScore + 5);
  }
  if (lp1.isMaster && lp2.isMaster) {
    compatibilityScore = Math.min(100, compatibilityScore + 5);
  }

  // Determine compatibility level
  let compatibilityLevel: LoveCompatibilityResult['compatibilityLevel'];
  if (compatibilityScore >= 90) compatibilityLevel = 'soulmate';
  else if (compatibilityScore >= 80) compatibilityLevel = 'excellent';
  else if (compatibilityScore >= 65) compatibilityLevel = 'good';
  else if (compatibilityScore >= 50) compatibilityLevel = 'moderate';
  else compatibilityLevel = 'challenging';

  // Calculate combined number
  let combined = lp1.number + lp2.number;
  while (combined > 9 && combined !== 11 && combined !== 22) {
    let newSum = 0;
    for (const digit of combined.toString()) {
      newSum += parseInt(digit);
    }
    combined = newSum;
  }

  const strengths = generateStrengths(lp1.number, lp2.number, compatibilityScore);
  const challenges = generateChallenges(lp1.number, lp2.number, compatibilityScore);
  const advice = generateAdvice(lp1.number, lp2.number, compatibilityScore);
  const compatibilityAreas = generateCompatibilityAreas(lp1.number, lp2.number, compatibilityScore);

  // Generate verdict
  const verdict = generateVerdict(partner1, partner2, compatibilityScore, compatibilityLevel);

  return {
    partner1,
    partner2,
    compatibilityScore,
    compatibilityLevel,
    combinedNumber: combined,
    combinedMeaning: getCombinedMeaning(combined),
    strengths,
    challenges,
    advice,
    compatibilityAreas,
    verdict,
  };
}

function generateVerdict(
  p1: PartnerInfo,
  p2: PartnerInfo,
  score: number,
  level: LoveCompatibilityResult['compatibilityLevel']
): BilingualText {
  const levelText = {
    soulmate: { en: 'Soulmate connection', hi: 'आत्मिक संबंध' },
    excellent: { en: 'Excellent match', hi: 'उत्कृष्ट मेल' },
    good: { en: 'Good compatibility', hi: 'अच्छी संगतता' },
    moderate: { en: 'Moderate match', hi: 'मध्यम मेल' },
    challenging: { en: 'Challenging but possible', hi: 'चुनौतीपूर्ण लेकिन संभव' },
  };

  return {
    en: `${p1.name} (Life Path ${p1.lifePathNumber}) and ${p2.name} (Life Path ${p2.lifePathNumber}) have ${score}% compatibility - ${levelText[level].en}! ${level === 'soulmate' || level === 'excellent' ? 'This is a beautiful match with natural harmony.' : level === 'good' ? 'With love and understanding, this relationship can flourish.' : 'With effort and patience, you can build a strong relationship.'}`,
    hi: `${p1.name} (मूलांक ${p1.lifePathNumber}) और ${p2.name} (मूलांक ${p2.lifePathNumber}) की ${score}% संगतता है - ${levelText[level].hi}! ${level === 'soulmate' || level === 'excellent' ? 'यह स्वाभाविक सामंजस्य के साथ एक सुंदर जोड़ी है।' : level === 'good' ? 'प्यार और समझ के साथ, यह रिश्ता फल-फूल सकता है।' : 'प्रयास और धैर्य के साथ, आप एक मजबूत रिश्ता बना सकते हैं।'}`
  };
}
