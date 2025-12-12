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
      en: 'You share a natural understanding and harmony that makes your relationship feel effortless. This intuitive connection allows you to anticipate each other\'s needs and communicate without words.',
      hi: 'आप एक स्वाभाविक समझ और सामंजस्य साझा करते हैं जो आपके रिश्ते को सहज बनाता है। यह सहज संबंध आपको एक दूसरे की जरूरतों का अनुमान लगाने और बिना शब्दों के संवाद करने की अनुमति देता है।'
    });
  }

  if ([3, 6, 9].includes(num1) || [3, 6, 9].includes(num2)) {
    strengths.push({
      en: 'Your relationship is blessed with strong emotional depth and romantic energy. You both naturally express love and affection, creating a warm, nurturing environment for your bond to flourish.',
      hi: 'आपका रिश्ता गहरे भावनात्मक जुड़ाव और रोमांटिक ऊर्जा से भरपूर है। आप दोनों स्वाभाविक रूप से प्यार और स्नेह व्यक्त करते हैं, जिससे आपके बंधन के फलने-फूलने के लिए एक गर्म, पोषणकारी वातावरण बनता है।'
    });
  }

  if ([1, 5].includes(num1) || [1, 5].includes(num2)) {
    strengths.push({
      en: 'Your partnership thrives on excitement and adventure. Together, you\'re willing to explore new experiences, take risks, and push boundaries - keeping your relationship fresh and stimulating year after year.',
      hi: 'आपकी साझेदारी उत्साह और साहस पर फलती-फूलती है। साथ मिलकर, आप नए अनुभवों का पता लगाने, जोखिम लेने और सीमाओं को तोड़ने के लिए तैयार हैं - साल दर साल अपने रिश्ते को ताज़ा और प्रेरक बनाए रखते हैं।'
    });
  }

  if ([2, 4, 8].includes(num1) && [2, 4, 8].includes(num2)) {
    strengths.push({
      en: 'You both bring practical wisdom and stability to the relationship. This creates a solid foundation for building a life together - from financial planning to creating a comfortable home and long-term goals.',
      hi: 'आप दोनों रिश्ते में व्यावहारिक ज्ञान और स्थिरता लाते हैं। यह साथ में जीवन बनाने के लिए एक मजबूत नींव बनाता है - वित्तीय योजना से लेकर आरामदायक घर और दीर्घकालिक लक्ष्य बनाने तक।'
    });
  }

  if (num1 === num2) {
    strengths.push({
      en: 'Sharing the same Life Path number creates a mirror effect - you deeply understand each other\'s motivations, fears, and dreams. This can create an incredibly intimate bond where you feel truly seen and understood.',
      hi: 'एक ही मूलांक साझा करने से दर्पण प्रभाव बनता है - आप एक दूसरे की प्रेरणाओं, डर और सपनों को गहराई से समझते हैं। यह एक अविश्वसनीय रूप से अंतरंग बंधन बना सकता है जहां आप वास्तव में देखे और समझे जाते हैं।'
    });
  }

  if (strengths.length === 0) {
    strengths.push({
      en: 'Your complementary energies create a beautiful balance in your relationship. Where one partner may be strong, the other provides support, creating a well-rounded partnership that can handle life\'s challenges.',
      hi: 'आपकी पूरक ऊर्जाएं आपके रिश्ते में एक सुंदर संतुलन बनाती हैं। जहां एक साथी मजबूत हो सकता है, दूसरा समर्थन प्रदान करता है, एक सर्वांगीण साझेदारी बनाता है जो जीवन की चुनौतियों का सामना कर सकती है।'
    });
  }

  // Add a universal strength
  strengths.push({
    en: 'Both of you have the potential for deep spiritual growth together. Your relationship can be a powerful catalyst for personal transformation and mutual evolution.',
    hi: 'आप दोनों में साथ मिलकर गहन आध्यात्मिक विकास की क्षमता है। आपका रिश्ता व्यक्तिगत परिवर्तन और पारस्परिक विकास के लिए एक शक्तिशाली उत्प्रेरक हो सकता है।'
  });

  return strengths.slice(0, 4);
}

/**
 * Generate challenges based on numbers
 */
function generateChallenges(num1: number, num2: number, score: number): BilingualText[] {
  const challenges: BilingualText[] = [];

  if (score < 60) {
    challenges.push({
      en: 'Your different approaches to life may require extra patience and understanding. The key is to view these differences as opportunities to learn from each other rather than sources of conflict.',
      hi: 'जीवन के प्रति आपके अलग-अलग दृष्टिकोणों के लिए अतिरिक्त धैर्य और समझ की आवश्यकता हो सकती है। इन भिन्नताओं को संघर्ष के स्रोत के बजाय एक-दूसरे से सीखने के अवसर के रूप में देखना महत्वपूर्ण है।'
    });
  }

  if (num1 === 1 && [4, 8].includes(num2) || num2 === 1 && [4, 8].includes(num1)) {
    challenges.push({
      en: 'Both partners have strong personalities and leadership qualities, which can sometimes lead to power struggles. Practice taking turns in decision-making and appreciate each other\'s strengths without competing.',
      hi: 'दोनों साथियों में मजबूत व्यक्तित्व और नेतृत्व गुण हैं, जो कभी-कभी शक्ति संघर्ष का कारण बन सकते हैं। निर्णय लेने में बारी-बारी से अभ्यास करें और प्रतिस्पर्धा किए बिना एक-दूसरे की ताकत की सराहना करें।'
    });
  }

  if (num1 === 5 || num2 === 5) {
    challenges.push({
      en: 'The desire for freedom and variety can sometimes clash with the need for stability and commitment. Create space for individual adventures while building shared experiences that deepen your bond.',
      hi: 'स्वतंत्रता और विविधता की इच्छा कभी-कभी स्थिरता और प्रतिबद्धता की आवश्यकता से टकरा सकती है। व्यक्तिगत रोमांच के लिए जगह बनाएं साथ ही साझा अनुभव भी बनाएं जो आपके बंधन को गहरा करें।'
    });
  }

  if (num1 === 7 || num2 === 7) {
    challenges.push({
      en: 'The introspective nature of Life Path 7 may sometimes create emotional distance. Consciously make effort to share inner thoughts and feelings, even when it feels uncomfortable.',
      hi: 'मूलांक 7 की आत्मनिरीक्षक प्रकृति कभी-कभी भावनात्मक दूरी बना सकती है। आंतरिक विचारों और भावनाओं को साझा करने का सचेत प्रयास करें, भले ही यह असहज महसूस हो।'
    });
  }

  if ([4, 8].includes(num1) && [3, 9].includes(num2) || [4, 8].includes(num2) && [3, 9].includes(num1)) {
    challenges.push({
      en: 'One partner is more practical while the other is more creative and idealistic. Bridge this gap by finding projects where both approaches contribute - practical planning meets creative vision.',
      hi: 'एक साथी अधिक व्यावहारिक है जबकि दूसरा अधिक रचनात्मक और आदर्शवादी है। ऐसी परियोजनाएं खोजकर इस अंतर को पाटें जहां दोनों दृष्टिकोण योगदान दें - व्यावहारिक योजना रचनात्मक दृष्टि से मिले।'
    });
  }

  if (challenges.length === 0) {
    challenges.push({
      en: 'Your minor differences actually complement each other and can strengthen your relationship over time. Use them as opportunities for growth rather than sources of friction.',
      hi: 'आपकी छोटी-छोटी भिन्नताएं वास्तव में एक-दूसरे की पूरक हैं और समय के साथ आपके रिश्ते को मजबूत कर सकती हैं। इन्हें घर्षण के स्रोत के बजाय विकास के अवसर के रूप में उपयोग करें।'
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
    en: 'Embrace your differences as unique gifts that complement each other. What feels like friction can become the spark that keeps your relationship alive and growing when approached with curiosity and love.',
    hi: 'अपनी भिन्नताओं को अनूठे उपहारों के रूप में स्वीकार करें जो एक-दूसरे के पूरक हैं। जो घर्षण जैसा लगता है वह जिज्ञासा और प्रेम के साथ आने पर आपके रिश्ते को जीवंत और बढ़ता रख सकता है।'
  });

  if (score >= 80) {
    advice.push({
      en: 'Your natural compatibility is a blessing - nurture it through regular date nights, meaningful conversations, and shared adventures. Never take this beautiful connection for granted.',
      hi: 'आपकी स्वाभाविक संगतता एक वरदान है - नियमित डेट नाइट्स, सार्थक बातचीत और साझा रोमांच के माध्यम से इसे पोषित करें। इस सुंदर संबंध को कभी भी हल्के में न लें।'
    });
  } else {
    advice.push({
      en: 'Make communication your priority. Schedule regular check-ins where you share feelings honestly, listen without judgment, and work together to find solutions that honor both perspectives.',
      hi: 'संचार को अपनी प्राथमिकता बनाएं। नियमित चर्चाएं निर्धारित करें जहां आप ईमानदारी से भावनाएं साझा करें, बिना निर्णय के सुनें, और दोनों दृष्टिकोणों का सम्मान करने वाले समाधान खोजने के लिए साथ काम करें।'
    });
  }

  if ([2, 6].includes(num1) || [2, 6].includes(num2)) {
    advice.push({
      en: 'Create rituals of connection like morning coffee together or evening walks. These small moments build the emotional foundation that carries you through challenging times.',
      hi: 'सुबह की चाय साथ में या शाम की सैर जैसे जुड़ाव के अनुष्ठान बनाएं। ये छोटे पल भावनात्मक नींव बनाते हैं जो आपको चुनौतीपूर्ण समय से गुजरने में मदद करती है।'
    });
  } else {
    advice.push({
      en: 'Consider wearing your lucky numbers or colors to enhance your personal energy and compatibility. Visit a temple or holy place together on auspicious days to strengthen your spiritual bond.',
      hi: 'अपनी व्यक्तिगत ऊर्जा और संगतता बढ़ाने के लिए अपनी भाग्यशाली संख्या या रंग पहनने पर विचार करें। अपने आध्यात्मिक बंधन को मजबूत करने के लिए शुभ दिनों पर साथ में मंदिर या पवित्र स्थान पर जाएं।'
    });
  }

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
      ? { en: 'Your hearts naturally understand each other. You share a deep emotional bond where feelings flow freely and both partners feel safe being vulnerable.', hi: 'आपके दिल स्वाभाविक रूप से एक-दूसरे को समझते हैं। आप एक गहरा भावनात्मक बंधन साझा करते हैं जहां भावनाएं स्वतंत्र रूप से बहती हैं और दोनों साथी कमजोर होने में सुरक्षित महसूस करते हैं।' }
      : { en: 'Focus on creating safe spaces for emotional expression. Small gestures like asking about each other\'s day and actively listening can significantly deepen your bond.', hi: 'भावनात्मक अभिव्यक्ति के लिए सुरक्षित स्थान बनाने पर ध्यान दें। एक-दूसरे के दिन के बारे में पूछने और सक्रिय रूप से सुनने जैसे छोटे इशारे आपके बंधन को काफी गहरा कर सकते हैं।' }
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
      ? { en: 'Conversations between you flow easily and naturally. You\'re able to discuss both light topics and deeper issues with mutual respect and understanding.', hi: 'आपके बीच बातचीत आसानी से और स्वाभाविक रूप से बहती है। आप पारस्परिक सम्मान और समझ के साथ हल्के विषयों और गहरे मुद्दों दोनों पर चर्चा करने में सक्षम हैं।' }
      : { en: 'Practice active listening without interrupting or planning your response. Try setting aside dedicated time each day for uninterrupted conversation.', hi: 'बिना बाधा डाले या अपनी प्रतिक्रिया की योजना बनाए सक्रिय रूप से सुनने का अभ्यास करें। निर्बाध बातचीत के लिए हर दिन समर्पित समय निर्धारित करने का प्रयास करें।' }
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
      ? { en: 'A strong foundation of trust exists between you. Both partners feel secure in the relationship and confident in each other\'s commitment.', hi: 'आपके बीच विश्वास की मजबूत नींव मौजूद है। दोनों साथी रिश्ते में सुरक्षित और एक-दूसरे की प्रतिबद्धता में आश्वस्त महसूस करते हैं।' }
      : { en: 'Build trust through consistent actions that match your words. Be reliable in small things, and trust in larger matters will naturally follow.', hi: 'अपने शब्दों से मेल खाने वाले सुसंगत कार्यों के माध्यम से विश्वास बनाएं। छोटी चीजों में विश्वसनीय बनें, और बड़े मामलों में विश्वास स्वाभाविक रूप से आएगा।' }
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
      ? { en: 'Sparks fly naturally between you two! The chemistry is undeniable, and you both know how to keep the flame of passion burning bright.', hi: 'आप दोनों के बीच स्वाभाविक रूप से जादू है! केमिस्ट्री निर्विवाद है, और आप दोनों जानते हैं कि जुनून की लौ को कैसे जलाए रखना है।' }
      : { en: 'Keep romance alive through surprise dates, thoughtful gestures, and regular expressions of affection. Physical touch and words of affirmation go a long way.', hi: 'आश्चर्यजनक डेट्स, विचारशील इशारों और स्नेह की नियमित अभिव्यक्ति के माध्यम से रोमांस को जीवित रखें। शारीरिक स्पर्श और पुष्टि के शब्द बहुत काम आते हैं।' }
  });

  return areas;
}

/**
 * Calculate combined number meaning
 */
function getCombinedMeaning(combinedNum: number): BilingualText {
  const meanings: Record<number, BilingualText> = {
    1: { en: 'Your relationship is pioneering and independent - you inspire each other to be leaders in your own lives. Together, you forge new paths and encourage each other\'s individual growth while maintaining a strong bond.', hi: 'आपका रिश्ता अग्रणी और स्वतंत्र है - आप एक-दूसरे को अपने जीवन में नेता बनने के लिए प्रेरित करते हैं। साथ मिलकर, आप नए रास्ते बनाते हैं और मजबूत बंधन बनाए रखते हुए एक-दूसरे के व्यक्तिगत विकास को प्रोत्साहित करते हैं।' },
    2: { en: 'Your partnership is built on harmony, cooperation, and mutual support. You naturally balance each other and find strength in togetherness. Diplomacy and understanding are your relationship\'s greatest gifts.', hi: 'आपकी साझेदारी सामंजस्य, सहयोग और पारस्परिक समर्थन पर बनी है। आप स्वाभाविक रूप से एक-दूसरे को संतुलित करते हैं और एकजुटता में ताकत पाते हैं। कूटनीति और समझ आपके रिश्ते के सबसे बड़े उपहार हैं।' },
    3: { en: 'Joy, creativity, and self-expression define your relationship. You bring out each other\'s playful side and fill your lives with laughter, art, and meaningful communication. Your home is likely full of warmth and creativity.', hi: 'खुशी, रचनात्मकता और आत्म-अभिव्यक्ति आपके रिश्ते को परिभाषित करती है। आप एक-दूसरे के चंचल पक्ष को बाहर लाते हैं और अपने जीवन को हंसी, कला और सार्थक संचार से भर देते हैं। आपका घर गर्मजोशी और रचनात्मकता से भरपूर है।' },
    4: { en: 'Stability, security, and building a solid foundation together is your relationship\'s theme. You\'re committed to creating lasting structures - whether a home, family, or shared goals. Trust and reliability are your cornerstones.', hi: 'स्थिरता, सुरक्षा और साथ मिलकर एक ठोस नींव बनाना आपके रिश्ते की थीम है। आप स्थायी संरचनाएं बनाने के लिए प्रतिबद्ध हैं - चाहे वह घर हो, परिवार हो, या साझा लक्ष्य। विश्वास और विश्वसनीयता आपकी आधारशिला हैं।' },
    5: { en: 'Adventure, change, and excitement flow through your relationship. You keep each other young at heart and are always ready for the next experience. Flexibility and adaptability help you navigate life\'s twists together.', hi: 'साहस, परिवर्तन और उत्साह आपके रिश्ते में बहता है। आप एक-दूसरे को दिल से जवान रखते हैं और हमेशा अगले अनुभव के लिए तैयार रहते हैं। लचीलापन और अनुकूलनशीलता आपको जीवन के मोड़ों को साथ नेविगेट करने में मदद करती है।' },
    6: { en: 'Love, family, and nurturing define your beautiful bond. You create a warm, caring environment for each other and anyone in your lives. Responsibility and devotion come naturally to your partnership.', hi: 'प्रेम, परिवार और पोषण आपके सुंदर बंधन को परिभाषित करते हैं। आप एक-दूसरे और अपने जीवन में सभी के लिए एक गर्म, देखभाल करने वाला वातावरण बनाते हैं। जिम्मेदारी और समर्पण आपकी साझेदारी में स्वाभाविक रूप से आते हैं।' },
    7: { en: 'A deeply spiritual and introspective connection defines your relationship. You seek meaning together, appreciate quiet moments, and support each other\'s inner journey. Wisdom and understanding grow between you.', hi: 'एक गहरा आध्यात्मिक और आत्मनिरीक्षक संबंध आपके रिश्ते को परिभाषित करता है। आप साथ में अर्थ खोजते हैं, शांत क्षणों की सराहना करते हैं, और एक-दूसरे की आंतरिक यात्रा का समर्थन करते हैं। ज्ञान और समझ आपके बीच बढ़ती है।' },
    8: { en: 'Power, success, and material achievement drive your partnership. Together, you can build empires and achieve great things. Balance worldly ambition with emotional connection for lasting happiness.', hi: 'शक्ति, सफलता और भौतिक उपलब्धि आपकी साझेदारी को प्रेरित करती है। साथ मिलकर, आप साम्राज्य बना सकते हैं और महान चीजें हासिल कर सकते हैं। स्थायी खुशी के लिए सांसारिक महत्वाकांक्षा को भावनात्मक संबंध के साथ संतुलित करें।' },
    9: { en: 'Compassion, wisdom, and universal love characterize your bond. You inspire each other to be better humans and may together contribute to making the world a better place through your shared ideals.', hi: 'करुणा, ज्ञान और सार्वभौमिक प्रेम आपके बंधन की विशेषता है। आप एक-दूसरे को बेहतर इंसान बनने के लिए प्रेरित करते हैं और अपने साझा आदर्शों के माध्यम से दुनिया को एक बेहतर जगह बनाने में योगदान दे सकते हैं।' },
    11: { en: 'A master number relationship bringing spiritual enlightenment and inspiration. You are here to uplift each other and potentially many others through your elevated vibration and shared vision.', hi: 'आध्यात्मिक ज्ञान और प्रेरणा लाने वाला एक मास्टर नंबर रिश्ता। आप अपने उन्नत कंपन और साझा दृष्टि के माध्यम से एक-दूसरे को और संभावित रूप से कई अन्य लोगों को ऊपर उठाने के लिए यहां हैं।' },
    22: { en: 'The ultimate master builder couple - together you have the potential to create something truly magnificent that lasts beyond your lifetime. Your combined practical vision can manifest great dreams into reality.', hi: 'अंतिम मास्टर बिल्डर जोड़ी - साथ में आपके पास कुछ वास्तव में शानदार बनाने की क्षमता है जो आपके जीवनकाल से परे रहता है। आपकी संयुक्त व्यावहारिक दृष्टि महान सपनों को हकीकत में बदल सकती है।' },
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
