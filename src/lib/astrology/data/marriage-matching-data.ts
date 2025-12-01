/**
 * Marriage Matching (Kundli Milan) Data
 * Ashtakoot Gun Milan - 36 Point System
 */

// Nakshatra lords for Varna calculation
export const NAKSHATRA_LORDS = [
  'ketu', 'venus', 'sun', 'moon', 'mars', 'rahu', 'jupiter', 'saturn', 'mercury',
  'ketu', 'venus', 'sun', 'moon', 'mars', 'rahu', 'jupiter', 'saturn', 'mercury',
  'ketu', 'venus', 'sun', 'moon', 'mars', 'rahu', 'jupiter', 'saturn', 'mercury',
];

// Rashi to Varna mapping (4 Varnas)
export const RASHI_VARNA: Record<number, number> = {
  0: 1,  // Aries - Kshatriya
  1: 2,  // Taurus - Vaishya
  2: 3,  // Gemini - Shudra
  3: 1,  // Cancer - Brahmin
  4: 1,  // Leo - Kshatriya
  5: 2,  // Virgo - Vaishya
  6: 3,  // Libra - Shudra
  7: 1,  // Scorpio - Brahmin
  8: 1,  // Sagittarius - Kshatriya
  9: 2,  // Capricorn - Vaishya
  10: 3, // Aquarius - Shudra
  11: 1, // Pisces - Brahmin
};

export const VARNA_NAMES: Record<number, { en: string; hi: string }> = {
  1: { en: 'Brahmin', hi: 'ब्राह्मण' },
  2: { en: 'Kshatriya', hi: 'क्षत्रिय' },
  3: { en: 'Vaishya', hi: 'वैश्य' },
  4: { en: 'Shudra', hi: 'शूद्र' },
};

// Vashya (compatibility of nature) - 2 points max
export const RASHI_VASHYA: Record<number, string> = {
  0: 'chatushpada',  // Aries - Quadruped
  1: 'chatushpada',  // Taurus - Quadruped
  2: 'manav',        // Gemini - Human
  3: 'jalachara',    // Cancer - Water creature
  4: 'vanachara',    // Leo - Wild animal
  5: 'manav',        // Virgo - Human
  6: 'manav',        // Libra - Human
  7: 'keeta',        // Scorpio - Insect
  8: 'chatushpada',  // Sagittarius - Quadruped (latter half)
  9: 'jalachara',    // Capricorn - Water creature (latter half)
  10: 'manav',       // Aquarius - Human
  11: 'jalachara',   // Pisces - Water creature
};

export const VASHYA_NAMES: Record<string, { en: string; hi: string }> = {
  manav: { en: 'Human', hi: 'मानव' },
  vanachara: { en: 'Wild Animal', hi: 'वनचर' },
  chatushpada: { en: 'Quadruped', hi: 'चतुष्पद' },
  jalachara: { en: 'Water Creature', hi: 'जलचर' },
  keeta: { en: 'Insect', hi: 'कीट' },
};

// Vashya compatibility matrix (groomVashya, brideVashya) => points
export const VASHYA_MATRIX: Record<string, Record<string, number>> = {
  manav: { manav: 2, vanachara: 1, chatushpada: 1, jalachara: 0.5, keeta: 0 },
  vanachara: { manav: 0.5, vanachara: 2, chatushpada: 1, jalachara: 0, keeta: 0 },
  chatushpada: { manav: 1, vanachara: 0.5, chatushpada: 2, jalachara: 0, keeta: 0.5 },
  jalachara: { manav: 0.5, vanachara: 0, chatushpada: 0, jalachara: 2, keeta: 1 },
  keeta: { manav: 0, vanachara: 0, chatushpada: 0.5, jalachara: 1, keeta: 2 },
};

// Tara (birth star compatibility) - 3 points max
// Nakshatra group for Tara calculation
export const TARA_FAVORABLE = [1, 2, 4, 6, 8]; // Janma, Sampat, Kshema, Sadhana, Mitra
export const TARA_UNFAVORABLE = [3, 5, 7, 9]; // Vipat, Pratyak, Vadha, Naidhana

// Yoni (sexual/physical compatibility) - 4 points max
export const NAKSHATRA_YONI: string[] = [
  'horse', 'elephant', 'sheep', 'serpent', 'dog', 'cat',
  'rat', 'cow', 'buffalo', 'tiger', 'deer', 'monkey',
  'mongoose', 'lion', 'horse', 'elephant', 'sheep', 'serpent',
  'dog', 'cat', 'rat', 'cow', 'buffalo', 'tiger', 'deer', 'monkey', 'mongoose',
];

export const YONI_NAMES: Record<string, { en: string; hi: string }> = {
  horse: { en: 'Horse', hi: 'अश्व' },
  elephant: { en: 'Elephant', hi: 'गज' },
  sheep: { en: 'Sheep', hi: 'मेष' },
  serpent: { en: 'Serpent', hi: 'सर्प' },
  dog: { en: 'Dog', hi: 'श्वान' },
  cat: { en: 'Cat', hi: 'मार्जार' },
  rat: { en: 'Rat', hi: 'मूषक' },
  cow: { en: 'Cow', hi: 'गो' },
  buffalo: { en: 'Buffalo', hi: 'महिष' },
  tiger: { en: 'Tiger', hi: 'व्याघ्र' },
  deer: { en: 'Deer', hi: 'मृग' },
  monkey: { en: 'Monkey', hi: 'वानर' },
  mongoose: { en: 'Mongoose', hi: 'नकुल' },
  lion: { en: 'Lion', hi: 'सिंह' },
};

// Yoni enemy pairs
export const YONI_ENEMIES: string[][] = [
  ['horse', 'buffalo'],
  ['elephant', 'lion'],
  ['sheep', 'monkey'],
  ['serpent', 'mongoose'],
  ['dog', 'deer'],
  ['cat', 'rat'],
  ['cow', 'tiger'],
];

// Graha Maitri (planetary friendship) - 5 points max
export const RASHI_LORD: Record<number, string> = {
  0: 'mars',     // Aries
  1: 'venus',    // Taurus
  2: 'mercury',  // Gemini
  3: 'moon',     // Cancer
  4: 'sun',      // Leo
  5: 'mercury',  // Virgo
  6: 'venus',    // Libra
  7: 'mars',     // Scorpio
  8: 'jupiter', // Sagittarius
  9: 'saturn',   // Capricorn
  10: 'saturn',  // Aquarius
  11: 'jupiter', // Pisces
};

// Planetary friendship table
export const GRAHA_MAITRI: Record<string, Record<string, number>> = {
  sun: { sun: 5, moon: 5, mars: 5, mercury: 0, jupiter: 5, venus: 0, saturn: 0 },
  moon: { sun: 5, moon: 5, mars: 3, mercury: 5, jupiter: 3, venus: 3, saturn: 0 },
  mars: { sun: 5, moon: 5, mars: 5, mercury: 0, jupiter: 5, venus: 0, saturn: 0 },
  mercury: { sun: 5, moon: 0, mars: 0, mercury: 5, jupiter: 3, venus: 5, saturn: 3 },
  jupiter: { sun: 5, moon: 5, mars: 5, mercury: 3, jupiter: 5, venus: 0, saturn: 0 },
  venus: { sun: 0, moon: 0, mars: 3, mercury: 5, jupiter: 0, venus: 5, saturn: 5 },
  saturn: { sun: 0, moon: 0, mars: 0, mercury: 5, jupiter: 0, venus: 5, saturn: 5 },
};

// Gana (temperament) - 6 points max
export const NAKSHATRA_GANA: string[] = [
  'deva', 'manushya', 'rakshasa', 'deva', 'manushya', 'manushya',
  'deva', 'deva', 'rakshasa', 'manushya', 'deva', 'manushya',
  'deva', 'rakshasa', 'deva', 'manushya', 'rakshasa', 'manushya',
  'deva', 'manushya', 'rakshasa', 'deva', 'rakshasa', 'manushya',
  'deva', 'manushya', 'rakshasa',
];

export const GANA_NAMES: Record<string, { en: string; hi: string }> = {
  deva: { en: 'Deva (Divine)', hi: 'देव (दैवीय)' },
  manushya: { en: 'Manushya (Human)', hi: 'मनुष्य (मानव)' },
  rakshasa: { en: 'Rakshasa (Demonic)', hi: 'राक्षस (असुर)' },
};

// Gana compatibility matrix
export const GANA_MATRIX: Record<string, Record<string, number>> = {
  deva: { deva: 6, manushya: 5, rakshasa: 1 },
  manushya: { deva: 6, manushya: 6, rakshasa: 0 },
  rakshasa: { deva: 0, manushya: 1, rakshasa: 6 },
};

// Bhakoot (Rashi compatibility) - 7 points max
// Dosha combinations (position of bride's moon from groom's moon)
export const BHAKOOT_DOSHA = [
  { positions: [2, 12], dosha: 'dhan-vyay', points: 0 },
  { positions: [5, 9], dosha: 'panch-navami', points: 0 },
  { positions: [6, 8], dosha: 'shad-ashtami', points: 0 },
];

export const BHAKOOT_NAMES: Record<string, { en: string; hi: string }> = {
  'dhan-vyay': { en: 'Dhan-Vyay (2-12)', hi: 'धन-व्यय (2-12)' },
  'panch-navami': { en: 'Panch-Navami (5-9)', hi: 'पंच-नवमी (5-9)' },
  'shad-ashtami': { en: 'Shad-Ashtami (6-8)', hi: 'षड्-अष्टमी (6-8)' },
};

// Nadi (health/genetic compatibility) - 8 points max
export const NAKSHATRA_NADI: string[] = [
  'adi', 'madhya', 'antya', 'antya', 'madhya', 'adi',
  'adi', 'madhya', 'antya', 'antya', 'madhya', 'adi',
  'adi', 'madhya', 'antya', 'antya', 'madhya', 'adi',
  'adi', 'madhya', 'antya', 'antya', 'madhya', 'adi',
  'adi', 'madhya', 'antya',
];

export const NADI_NAMES: Record<string, { en: string; hi: string }> = {
  adi: { en: 'Adi (Vata)', hi: 'आदि (वात)' },
  madhya: { en: 'Madhya (Pitta)', hi: 'मध्य (पित्त)' },
  antya: { en: 'Antya (Kapha)', hi: 'अन्त्य (कफ)' },
};

// Koota definitions with max points
export const KOOTAS = [
  { id: 'varna', name: { en: 'Varna', hi: 'वर्ण' }, maxPoints: 1, description: { en: 'Social compatibility', hi: 'सामाजिक अनुकूलता' } },
  { id: 'vashya', name: { en: 'Vashya', hi: 'वश्य' }, maxPoints: 2, description: { en: 'Mutual attraction & dominance', hi: 'पारस्परिक आकर्षण और प्रभुत्व' } },
  { id: 'tara', name: { en: 'Tara', hi: 'तारा' }, maxPoints: 3, description: { en: 'Birth star harmony', hi: 'जन्म नक्षत्र सामंजस्य' } },
  { id: 'yoni', name: { en: 'Yoni', hi: 'योनि' }, maxPoints: 4, description: { en: 'Physical & sexual compatibility', hi: 'शारीरिक और यौन अनुकूलता' } },
  { id: 'maitri', name: { en: 'Graha Maitri', hi: 'ग्रह मैत्री' }, maxPoints: 5, description: { en: 'Planetary friendship', hi: 'ग्रह मित्रता' } },
  { id: 'gana', name: { en: 'Gana', hi: 'गण' }, maxPoints: 6, description: { en: 'Temperament match', hi: 'स्वभाव मिलान' } },
  { id: 'bhakoot', name: { en: 'Bhakoot', hi: 'भकूट' }, maxPoints: 7, description: { en: 'Rashi compatibility', hi: 'राशि अनुकूलता' } },
  { id: 'nadi', name: { en: 'Nadi', hi: 'नाड़ी' }, maxPoints: 8, description: { en: 'Health & genetic compatibility', hi: 'स्वास्थ्य और आनुवंशिक अनुकूलता' } },
];

// Match interpretation based on total score
export const MATCH_INTERPRETATION = [
  { minPoints: 0, maxPoints: 17, level: 'poor', color: 'red', name: { en: 'Not Recommended', hi: 'अनुशंसित नहीं' }, description: { en: 'This match has significant compatibility issues. Marriage is not advisable without thorough analysis and remedies.', hi: 'इस मिलान में महत्वपूर्ण अनुकूलता समस्याएं हैं। विस्तृत विश्लेषण और उपायों के बिना विवाह उचित नहीं है।' } },
  { minPoints: 18, maxPoints: 24, level: 'average', color: 'yellow', name: { en: 'Average Match', hi: 'औसत मिलान' }, description: { en: 'This is an average match. The marriage may work with understanding and effort from both sides.', hi: 'यह एक औसत मिलान है। दोनों पक्षों की समझ और प्रयास से विवाह कारगर हो सकता है।' } },
  { minPoints: 25, maxPoints: 32, level: 'good', color: 'green', name: { en: 'Good Match', hi: 'अच्छा मिलान' }, description: { en: 'This is a good match with strong compatibility. The marriage is recommended and likely to be harmonious.', hi: 'यह मजबूत अनुकूलता के साथ एक अच्छा मिलान है। विवाह की सिफारिश की जाती है और सामंजस्यपूर्ण होने की संभावना है।' } },
  { minPoints: 33, maxPoints: 36, level: 'excellent', color: 'blue', name: { en: 'Excellent Match', hi: 'उत्कृष्ट मिलान' }, description: { en: 'This is an excellent match! The couple is highly compatible and blessed for a happy married life.', hi: 'यह एक उत्कृष्ट मिलान है! जोड़ा अत्यधिक अनुकूल है और सुखी वैवाहिक जीवन के लिए आशीर्वादित है।' } },
];

// Remedies for Nadi Dosha
export const NADI_DOSHA_REMEDIES = [
  { en: 'Perform Nadi Dosha Nivaran Puja', hi: 'नाड़ी दोष निवारण पूजा करें' },
  { en: 'Donate gold or silver equal to bride\'s weight', hi: 'वधू के वजन के बराबर सोना या चांदी दान करें' },
  { en: 'Chant Mahamrityunjaya Mantra 1.25 lakh times', hi: 'महामृत्युंजय मंत्र 1.25 लाख बार जपें' },
  { en: 'Perform Kumbh Vivah for the bride before actual marriage', hi: 'वास्तविक विवाह से पहले वधू का कुंभ विवाह करें' },
];

// Remedies for Bhakoot Dosha
export const BHAKOOT_DOSHA_REMEDIES = [
  { en: 'Worship Lord Vishnu and Goddess Lakshmi together', hi: 'भगवान विष्णु और देवी लक्ष्मी की एक साथ पूजा करें' },
  { en: 'Perform Graha Shanti Puja for benefic planets', hi: 'शुभ ग्रहों के लिए ग्रह शांति पूजा करें' },
  { en: 'Donate items related to the afflicted Rashi lords', hi: 'पीड़ित राशि स्वामियों से संबंधित वस्तुएं दान करें' },
];

// Calculate match score
export interface MatchResult {
  kootas: {
    id: string;
    name: { en: string; hi: string };
    points: number;
    maxPoints: number;
    description: { en: string; hi: string };
    groomValue: string;
    brideValue: string;
    hasDosha: boolean;
  }[];
  totalPoints: number;
  maxPoints: number;
  percentage: number;
  interpretation: typeof MATCH_INTERPRETATION[0];
  nadiDosha: boolean;
  bhakootDosha: string | null;
}

export function calculateMatch(
  groomNakshatra: number,
  groomRashi: number,
  brideNakshatra: number,
  brideRashi: number
): MatchResult {
  const kootas: MatchResult['kootas'] = [];
  let totalPoints = 0;

  // 1. Varna (1 point)
  const groomVarna = RASHI_VARNA[groomRashi];
  const brideVarna = RASHI_VARNA[brideRashi];
  const varnaPoints = groomVarna >= brideVarna ? 1 : 0;
  kootas.push({
    id: 'varna',
    name: KOOTAS[0].name,
    points: varnaPoints,
    maxPoints: 1,
    description: KOOTAS[0].description,
    groomValue: VARNA_NAMES[groomVarna]?.en || 'Unknown',
    brideValue: VARNA_NAMES[brideVarna]?.en || 'Unknown',
    hasDosha: varnaPoints === 0,
  });
  totalPoints += varnaPoints;

  // 2. Vashya (2 points)
  const groomVashya = RASHI_VASHYA[groomRashi];
  const brideVashya = RASHI_VASHYA[brideRashi];
  const vashyaPoints = VASHYA_MATRIX[groomVashya]?.[brideVashya] || 0;
  kootas.push({
    id: 'vashya',
    name: KOOTAS[1].name,
    points: vashyaPoints,
    maxPoints: 2,
    description: KOOTAS[1].description,
    groomValue: VASHYA_NAMES[groomVashya]?.en || 'Unknown',
    brideValue: VASHYA_NAMES[brideVashya]?.en || 'Unknown',
    hasDosha: vashyaPoints < 1,
  });
  totalPoints += vashyaPoints;

  // 3. Tara (3 points)
  const taraDiff = ((brideNakshatra - groomNakshatra + 27) % 9) + 1;
  const taraPoints = TARA_FAVORABLE.includes(taraDiff) ? 3 :
                     taraDiff === 1 ? 3 : 1.5; // Janma tara is neutral/mildly favorable
  kootas.push({
    id: 'tara',
    name: KOOTAS[2].name,
    points: taraPoints,
    maxPoints: 3,
    description: KOOTAS[2].description,
    groomValue: `Nakshatra ${groomNakshatra + 1}`,
    brideValue: `Nakshatra ${brideNakshatra + 1}`,
    hasDosha: taraPoints < 1.5,
  });
  totalPoints += taraPoints;

  // 4. Yoni (4 points)
  const groomYoni = NAKSHATRA_YONI[groomNakshatra];
  const brideYoni = NAKSHATRA_YONI[brideNakshatra];
  let yoniPoints = 4;
  if (groomYoni === brideYoni) {
    yoniPoints = 4;
  } else {
    const isEnemy = YONI_ENEMIES.some(
      pair => (pair[0] === groomYoni && pair[1] === brideYoni) ||
              (pair[1] === groomYoni && pair[0] === brideYoni)
    );
    yoniPoints = isEnemy ? 0 : 2;
  }
  kootas.push({
    id: 'yoni',
    name: KOOTAS[3].name,
    points: yoniPoints,
    maxPoints: 4,
    description: KOOTAS[3].description,
    groomValue: YONI_NAMES[groomYoni]?.en || 'Unknown',
    brideValue: YONI_NAMES[brideYoni]?.en || 'Unknown',
    hasDosha: yoniPoints === 0,
  });
  totalPoints += yoniPoints;

  // 5. Graha Maitri (5 points)
  const groomLord = RASHI_LORD[groomRashi];
  const brideLord = RASHI_LORD[brideRashi];
  const maitriPoints = GRAHA_MAITRI[groomLord]?.[brideLord] || 0;
  kootas.push({
    id: 'maitri',
    name: KOOTAS[4].name,
    points: maitriPoints,
    maxPoints: 5,
    description: KOOTAS[4].description,
    groomValue: groomLord.charAt(0).toUpperCase() + groomLord.slice(1),
    brideValue: brideLord.charAt(0).toUpperCase() + brideLord.slice(1),
    hasDosha: maitriPoints === 0,
  });
  totalPoints += maitriPoints;

  // 6. Gana (6 points)
  const groomGana = NAKSHATRA_GANA[groomNakshatra];
  const brideGana = NAKSHATRA_GANA[brideNakshatra];
  const ganaPoints = GANA_MATRIX[groomGana]?.[brideGana] || 0;
  kootas.push({
    id: 'gana',
    name: KOOTAS[5].name,
    points: ganaPoints,
    maxPoints: 6,
    description: KOOTAS[5].description,
    groomValue: GANA_NAMES[groomGana]?.en || 'Unknown',
    brideValue: GANA_NAMES[brideGana]?.en || 'Unknown',
    hasDosha: ganaPoints <= 1,
  });
  totalPoints += ganaPoints;

  // 7. Bhakoot (7 points)
  const rashiDiff = ((brideRashi - groomRashi + 12) % 12) + 1;
  let bhakootPoints = 7;
  let bhakootDosha: string | null = null;

  for (const dosha of BHAKOOT_DOSHA) {
    if (dosha.positions.includes(rashiDiff)) {
      bhakootPoints = 0;
      bhakootDosha = dosha.dosha;
      break;
    }
  }
  kootas.push({
    id: 'bhakoot',
    name: KOOTAS[6].name,
    points: bhakootPoints,
    maxPoints: 7,
    description: KOOTAS[6].description,
    groomValue: `Rashi ${groomRashi + 1}`,
    brideValue: `Rashi ${brideRashi + 1}`,
    hasDosha: bhakootDosha !== null,
  });
  totalPoints += bhakootPoints;

  // 8. Nadi (8 points)
  const groomNadi = NAKSHATRA_NADI[groomNakshatra];
  const brideNadi = NAKSHATRA_NADI[brideNakshatra];
  const nadiDosha = groomNadi === brideNadi;
  const nadiPoints = nadiDosha ? 0 : 8;
  kootas.push({
    id: 'nadi',
    name: KOOTAS[7].name,
    points: nadiPoints,
    maxPoints: 8,
    description: KOOTAS[7].description,
    groomValue: NADI_NAMES[groomNadi]?.en || 'Unknown',
    brideValue: NADI_NAMES[brideNadi]?.en || 'Unknown',
    hasDosha: nadiDosha,
  });
  totalPoints += nadiPoints;

  // Get interpretation
  const interpretation = MATCH_INTERPRETATION.find(
    i => totalPoints >= i.minPoints && totalPoints <= i.maxPoints
  ) || MATCH_INTERPRETATION[0];

  return {
    kootas,
    totalPoints,
    maxPoints: 36,
    percentage: Math.round((totalPoints / 36) * 100),
    interpretation,
    nadiDosha,
    bhakootDosha,
  };
}

// Zodiac sign names
export const RASHI_NAMES: { en: string; hi: string }[] = [
  { en: 'Aries', hi: 'मेष' },
  { en: 'Taurus', hi: 'वृषभ' },
  { en: 'Gemini', hi: 'मिथुन' },
  { en: 'Cancer', hi: 'कर्क' },
  { en: 'Leo', hi: 'सिंह' },
  { en: 'Virgo', hi: 'कन्या' },
  { en: 'Libra', hi: 'तुला' },
  { en: 'Scorpio', hi: 'वृश्चिक' },
  { en: 'Sagittarius', hi: 'धनु' },
  { en: 'Capricorn', hi: 'मकर' },
  { en: 'Aquarius', hi: 'कुंभ' },
  { en: 'Pisces', hi: 'मीन' },
];

// Nakshatra names
export const NAKSHATRA_NAMES: { en: string; hi: string }[] = [
  { en: 'Ashwini', hi: 'अश्विनी' },
  { en: 'Bharani', hi: 'भरणी' },
  { en: 'Krittika', hi: 'कृत्तिका' },
  { en: 'Rohini', hi: 'रोहिणी' },
  { en: 'Mrigashira', hi: 'मृगशिरा' },
  { en: 'Ardra', hi: 'आर्द्रा' },
  { en: 'Punarvasu', hi: 'पुनर्वसु' },
  { en: 'Pushya', hi: 'पुष्य' },
  { en: 'Ashlesha', hi: 'आश्लेषा' },
  { en: 'Magha', hi: 'मघा' },
  { en: 'Purva Phalguni', hi: 'पूर्वा फाल्गुनी' },
  { en: 'Uttara Phalguni', hi: 'उत्तरा फाल्गुनी' },
  { en: 'Hasta', hi: 'हस्त' },
  { en: 'Chitra', hi: 'चित्रा' },
  { en: 'Swati', hi: 'स्वाति' },
  { en: 'Vishakha', hi: 'विशाखा' },
  { en: 'Anuradha', hi: 'अनुराधा' },
  { en: 'Jyeshtha', hi: 'ज्येष्ठा' },
  { en: 'Mula', hi: 'मूल' },
  { en: 'Purva Ashadha', hi: 'पूर्वाषाढ़ा' },
  { en: 'Uttara Ashadha', hi: 'उत्तराषाढ़ा' },
  { en: 'Shravana', hi: 'श्रवण' },
  { en: 'Dhanishtha', hi: 'धनिष्ठा' },
  { en: 'Shatabhisha', hi: 'शतभिषा' },
  { en: 'Purva Bhadrapada', hi: 'पूर्वभाद्रपद' },
  { en: 'Uttara Bhadrapada', hi: 'उत्तरभाद्रपद' },
  { en: 'Revati', hi: 'रेवती' },
];
