/**
 * Name Correction Tool based on Vedic Numerology
 *
 * This module analyzes names using multiple numerology systems and suggests
 * corrections to achieve more favorable vibrations. It considers:
 * 1. Pythagorean system (Western)
 * 2. Chaldean system (Ancient Babylonian)
 * 3. Birth date compatibility
 * 4. Master number preservation
 * 5. Letter sound vibrations
 */

// ============================================================================
// Types
// ============================================================================

export interface BilingualText {
  en: string;
  hi: string;
}

export interface LetterSuggestion {
  letter: string;
  operation: 'add' | 'remove' | 'double';
  targetNumber: number;
  alignmentScore: number;
  vibrationalShift: {
    fromNumber: number;
    fromPlanet: BilingualText;
    toNumber: number;
    toPlanet: BilingualText;
  };
  whyThisWorks: BilingualText;
  examplePlacements: BilingualText; // "Rahul → Raahul, Rahula, or Rahuul"
  letterValue: {
    pythagorean: number;
    chaldean: number;
  };
}

// Legacy interface for backward compatibility
export interface NameSuggestion {
  name: string;
  pythagoreanNumber: number;
  chaldeanNumber: number;
  changeType: 'addition' | 'removal' | 'replacement' | 'spelling';
  changeDescription: BilingualText;
  compatibilityScore: number;
  reasoning: BilingualText;
}

export interface NumberAnalysis {
  number: number;
  meaning: BilingualText;
  planet: BilingualText;
  isCompatible: boolean;
  compatibility: 'excellent' | 'good' | 'neutral' | 'challenging';
  traits: BilingualText[];
}

export interface NameCorrectionResult {
  originalName: string;
  dateOfBirth: string;
  lifePathNumber: number;
  birthDayNumber: number;
  currentPythagoreanNumber: number;
  currentChaldeanNumber: number;
  currentAnalysis: NumberAnalysis;
  targetNumbers: number[];
  suggestions: NameSuggestion[]; // Legacy - kept for backward compatibility
  letterSuggestions: LetterSuggestion[]; // New letter-based suggestions
  generalGuidance: BilingualText;
  vowelAnalysis: {
    count: number;
    soulUrge: number;
    meaning: BilingualText;
  };
  consonantAnalysis: {
    count: number;
    personality: number;
    meaning: BilingualText;
  };
}

// ============================================================================
// Letter Value Systems
// ============================================================================

const PYTHAGOREAN_VALUES: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
};

const CHALDEAN_VALUES: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 8, G: 3, H: 5, I: 1,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 7, P: 8, Q: 1, R: 2,
  S: 3, T: 4, U: 6, V: 6, W: 6, X: 5, Y: 1, Z: 7,
};

const VOWELS = new Set(['A', 'E', 'I', 'O', 'U']);

// ============================================================================
// Number Meanings and Compatibility
// ============================================================================

const NUMBER_MEANINGS: Record<number, {
  meaning: BilingualText;
  planet: BilingualText;
  traits: BilingualText[];
  friendlyNumbers: number[];
  neutralNumbers: number[];
  challengingNumbers: number[];
}> = {
  1: {
    meaning: {
      en: 'Leadership, independence, originality, and new beginnings. Strong will and determination.',
      hi: 'नेतृत्व, स्वतंत्रता, मौलिकता और नई शुरुआत। मजबूत इच्छाशक्ति और दृढ़ संकल्प।',
    },
    planet: { en: 'Sun', hi: 'सूर्य' },
    traits: [
      { en: 'Natural leader', hi: 'प्राकृतिक नेता' },
      { en: 'Self-starter', hi: 'स्व-प्रेरित' },
      { en: 'Innovative', hi: 'नवोन्मेषी' },
    ],
    friendlyNumbers: [1, 2, 3, 9],
    neutralNumbers: [5, 6],
    challengingNumbers: [4, 7, 8],
  },
  2: {
    meaning: {
      en: 'Partnership, diplomacy, sensitivity, and cooperation. Harmony and balance.',
      hi: 'साझेदारी, कूटनीति, संवेदनशीलता और सहयोग। सामंजस्य और संतुलन।',
    },
    planet: { en: 'Moon', hi: 'चंद्रमा' },
    traits: [
      { en: 'Peacemaker', hi: 'शांति निर्माता' },
      { en: 'Intuitive', hi: 'अंतर्ज्ञानी' },
      { en: 'Supportive', hi: 'सहायक' },
    ],
    friendlyNumbers: [1, 2, 7, 9],
    neutralNumbers: [3, 4],
    challengingNumbers: [5, 6, 8],
  },
  3: {
    meaning: {
      en: 'Creativity, self-expression, communication, and joy. Artistic and social.',
      hi: 'रचनात्मकता, आत्म-अभिव्यक्ति, संचार और आनंद। कलात्मक और सामाजिक।',
    },
    planet: { en: 'Jupiter', hi: 'बृहस्पति' },
    traits: [
      { en: 'Creative', hi: 'रचनात्मक' },
      { en: 'Optimistic', hi: 'आशावादी' },
      { en: 'Expressive', hi: 'अभिव्यंजक' },
    ],
    friendlyNumbers: [1, 3, 6, 9],
    neutralNumbers: [2, 5],
    challengingNumbers: [4, 7, 8],
  },
  4: {
    meaning: {
      en: 'Stability, hard work, practicality, and foundation building. Disciplined and organized.',
      hi: 'स्थिरता, कड़ी मेहनत, व्यावहारिकता और नींव निर्माण। अनुशासित और संगठित।',
    },
    planet: { en: 'Rahu', hi: 'राहु' },
    traits: [
      { en: 'Methodical', hi: 'व्यवस्थित' },
      { en: 'Reliable', hi: 'विश्वसनीय' },
      { en: 'Hardworking', hi: 'मेहनती' },
    ],
    friendlyNumbers: [4, 5, 6, 7],
    neutralNumbers: [2, 8],
    challengingNumbers: [1, 3, 9],
  },
  5: {
    meaning: {
      en: 'Freedom, adventure, change, and versatility. Dynamic and progressive.',
      hi: 'स्वतंत्रता, साहसिक कार्य, परिवर्तन और बहुमुखी प्रतिभा। गतिशील और प्रगतिशील।',
    },
    planet: { en: 'Mercury', hi: 'बुध' },
    traits: [
      { en: 'Adaptable', hi: 'अनुकूलनीय' },
      { en: 'Communicative', hi: 'संचारी' },
      { en: 'Resourceful', hi: 'कुशल' },
    ],
    friendlyNumbers: [1, 4, 5, 6, 7],
    neutralNumbers: [3, 9],
    challengingNumbers: [2, 8],
  },
  6: {
    meaning: {
      en: 'Responsibility, love, nurturing, and domesticity. Caring and artistic.',
      hi: 'जिम्मेदारी, प्रेम, पालन-पोषण और घरेलू जीवन। देखभाल करने वाला और कलात्मक।',
    },
    planet: { en: 'Venus', hi: 'शुक्र' },
    traits: [
      { en: 'Nurturing', hi: 'पोषण करने वाला' },
      { en: 'Harmonious', hi: 'सामंजस्यपूर्ण' },
      { en: 'Responsible', hi: 'जिम्मेदार' },
    ],
    friendlyNumbers: [3, 4, 5, 6, 9],
    neutralNumbers: [1, 8],
    challengingNumbers: [2, 7],
  },
  7: {
    meaning: {
      en: 'Spirituality, introspection, wisdom, and analysis. Mystical and thoughtful.',
      hi: 'आध्यात्मिकता, आत्मनिरीक्षण, ज्ञान और विश्लेषण। रहस्यमय और विचारशील।',
    },
    planet: { en: 'Ketu', hi: 'केतु' },
    traits: [
      { en: 'Analytical', hi: 'विश्लेषणात्मक' },
      { en: 'Spiritual', hi: 'आध्यात्मिक' },
      { en: 'Introspective', hi: 'आत्मनिरीक्षणकर्ता' },
    ],
    friendlyNumbers: [2, 4, 5, 7],
    neutralNumbers: [8, 9],
    challengingNumbers: [1, 3, 6],
  },
  8: {
    meaning: {
      en: 'Power, abundance, achievement, and material success. Ambitious and authoritative.',
      hi: 'शक्ति, प्रचुरता, उपलब्धि और भौतिक सफलता। महत्वाकांक्षी और आधिकारिक।',
    },
    planet: { en: 'Saturn', hi: 'शनि' },
    traits: [
      { en: 'Ambitious', hi: 'महत्वाकांक्षी' },
      { en: 'Businesslike', hi: 'व्यापारिक' },
      { en: 'Authoritative', hi: 'प्रभावशाली' },
    ],
    friendlyNumbers: [4, 5, 6, 8],
    neutralNumbers: [2, 7],
    challengingNumbers: [1, 3, 9],
  },
  9: {
    meaning: {
      en: 'Humanitarianism, compassion, completion, and universal love. Selfless and wise.',
      hi: 'मानवतावाद, करुणा, पूर्णता और सार्वभौमिक प्रेम। निस्वार्थ और बुद्धिमान।',
    },
    planet: { en: 'Mars', hi: 'मंगल' },
    traits: [
      { en: 'Compassionate', hi: 'दयालु' },
      { en: 'Generous', hi: 'उदार' },
      { en: 'Idealistic', hi: 'आदर्शवादी' },
    ],
    friendlyNumbers: [1, 2, 3, 6, 9],
    neutralNumbers: [5, 7],
    challengingNumbers: [4, 8],
  },
};

// Master numbers
const MASTER_NUMBER_MEANINGS: Record<number, BilingualText> = {
  11: {
    en: 'Master Number 11: Spiritual illumination, intuition, and inspiration. A highly spiritual vibration.',
    hi: 'मास्टर नंबर 11: आध्यात्मिक प्रबोधन, अंतर्ज्ञान और प्रेरणा। एक अत्यंत आध्यात्मिक कंपन।',
  },
  22: {
    en: 'Master Number 22: Master builder, turning dreams into reality, practical idealism.',
    hi: 'मास्टर नंबर 22: मास्टर बिल्डर, सपनों को हकीकत में बदलना, व्यावहारिक आदर्शवाद।',
  },
  33: {
    en: 'Master Number 33: Master teacher, healing, blessing, and selfless service.',
    hi: 'मास्टर नंबर 33: मास्टर शिक्षक, उपचार, आशीर्वाद और निस्वार्थ सेवा।',
  },
};

// Common letter additions for name corrections
const LETTER_ADDITIONS = [
  { letter: 'A', value: 1, position: 'end', common: true },
  { letter: 'I', value: 9, position: 'middle', common: true },
  { letter: 'E', value: 5, position: 'end', common: true },
  { letter: 'O', value: 6, position: 'middle', common: true },
  { letter: 'U', value: 3, position: 'middle', common: false },
  { letter: 'H', value: 8, position: 'start', common: true }, // Silent H
  { letter: 'K', value: 2, position: 'middle', common: true },
  { letter: 'Y', value: 7, position: 'end', common: true },
  { letter: 'N', value: 5, position: 'middle', common: true },
  { letter: 'S', value: 1, position: 'end', common: true },
];

// Comprehensive letter data with both Pythagorean and Chaldean values
const LETTER_DATA: Record<string, { pyth: number; chal: number; type: 'vowel' | 'consonant' }> = {
  A: { pyth: 1, chal: 1, type: 'vowel' },
  B: { pyth: 2, chal: 2, type: 'consonant' },
  C: { pyth: 3, chal: 3, type: 'consonant' },
  D: { pyth: 4, chal: 4, type: 'consonant' },
  E: { pyth: 5, chal: 5, type: 'vowel' },
  F: { pyth: 6, chal: 8, type: 'consonant' },
  G: { pyth: 7, chal: 3, type: 'consonant' },
  H: { pyth: 8, chal: 5, type: 'consonant' },
  I: { pyth: 9, chal: 1, type: 'vowel' },
  J: { pyth: 1, chal: 1, type: 'consonant' },
  K: { pyth: 2, chal: 2, type: 'consonant' },
  L: { pyth: 3, chal: 3, type: 'consonant' },
  M: { pyth: 4, chal: 4, type: 'consonant' },
  N: { pyth: 5, chal: 5, type: 'consonant' },
  O: { pyth: 6, chal: 7, type: 'vowel' },
  P: { pyth: 7, chal: 8, type: 'consonant' },
  Q: { pyth: 8, chal: 1, type: 'consonant' },
  R: { pyth: 9, chal: 2, type: 'consonant' },
  S: { pyth: 1, chal: 3, type: 'consonant' },
  T: { pyth: 2, chal: 4, type: 'consonant' },
  U: { pyth: 3, chal: 6, type: 'vowel' },
  V: { pyth: 4, chal: 6, type: 'consonant' },
  W: { pyth: 5, chal: 6, type: 'consonant' },
  X: { pyth: 6, chal: 5, type: 'consonant' },
  Y: { pyth: 7, chal: 1, type: 'consonant' },
  Z: { pyth: 8, chal: 7, type: 'consonant' },
};

// ============================================================================
// Helper Functions
// ============================================================================

function getPlanetForNumber(num: number): BilingualText {
  const planetMap: Record<number, BilingualText> = {
    1: { en: 'Sun', hi: 'सूर्य' },
    2: { en: 'Moon', hi: 'चंद्रमा' },
    3: { en: 'Jupiter', hi: 'बृहस्पति' },
    4: { en: 'Rahu', hi: 'राहु' },
    5: { en: 'Mercury', hi: 'बुध' },
    6: { en: 'Venus', hi: 'शुक्र' },
    7: { en: 'Ketu', hi: 'केतु' },
    8: { en: 'Saturn', hi: 'शनि' },
    9: { en: 'Mars', hi: 'मंगल' },
  };
  return planetMap[num] || { en: 'Unknown', hi: 'अज्ञात' };
}

function generateExamplePlacements(originalName: string, letter: string): BilingualText {
  const name = originalName.split(' ')[0]; // Use first name for examples
  const lowerLetter = letter.toLowerCase();

  // Generate 2-3 example placements
  const examples: string[] = [];

  // At end
  examples.push(name + lowerLetter);

  // Double a vowel if exists
  const vowelMatch = name.match(/[aeiou]/i);
  if (vowelMatch) {
    const idx = name.toLowerCase().indexOf(vowelMatch[0].toLowerCase());
    examples.push(name.slice(0, idx + 1) + name.slice(idx));
  }

  // In middle (after first consonant cluster)
  if (name.length > 3) {
    const midPoint = Math.floor(name.length / 2);
    examples.push(name.slice(0, midPoint) + lowerLetter + name.slice(midPoint));
  }

  // Take unique examples, max 3
  const uniqueExamples = [...new Set(examples)].slice(0, 3);

  return {
    en: `${name} → ${uniqueExamples.join(', ')}`,
    hi: `${name} → ${uniqueExamples.join(', ')}`,
  };
}

// ============================================================================
// Calculation Functions
// ============================================================================

function reduceToSingleDigit(num: number, preserveMaster = true): number {
  if (preserveMaster && [11, 22, 33].includes(num)) {
    return num;
  }
  while (num > 9) {
    num = String(num)
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return num;
}

function calculatePythagoreanNumber(name: string): number {
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (const letter of cleanName) {
    sum += PYTHAGOREAN_VALUES[letter] || 0;
  }
  return reduceToSingleDigit(sum);
}

function calculateChaldeanNumber(name: string): number {
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (const letter of cleanName) {
    sum += CHALDEAN_VALUES[letter] || 0;
  }
  return reduceToSingleDigit(sum, false);
}

function calculateLifePathNumber(dateOfBirth: string): number {
  const [year, month, day] = dateOfBirth.split('-').map(Number);
  const sum = reduceToSingleDigit(day) + reduceToSingleDigit(month) + reduceToSingleDigit(year);
  return reduceToSingleDigit(sum);
}

function calculateBirthDayNumber(dateOfBirth: string): number {
  const day = parseInt(dateOfBirth.split('-')[2]);
  return reduceToSingleDigit(day);
}

function calculateSoulUrge(name: string): number {
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (const letter of cleanName) {
    if (VOWELS.has(letter)) {
      sum += PYTHAGOREAN_VALUES[letter] || 0;
    }
  }
  return reduceToSingleDigit(sum);
}

function calculatePersonalityNumber(name: string): number {
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');
  let sum = 0;
  for (const letter of cleanName) {
    if (!VOWELS.has(letter)) {
      sum += PYTHAGOREAN_VALUES[letter] || 0;
    }
  }
  return reduceToSingleDigit(sum);
}

// ============================================================================
// Compatibility Analysis
// ============================================================================

function getCompatibility(
  nameNumber: number,
  birthDayNumber: number,
  lifePathNumber: number
): 'excellent' | 'good' | 'neutral' | 'challenging' {
  const meanings = NUMBER_MEANINGS[nameNumber > 9 ? reduceToSingleDigit(nameNumber, false) : nameNumber];
  if (!meanings) return 'neutral';

  const primaryCompatible = meanings.friendlyNumbers.includes(birthDayNumber);
  const secondaryCompatible = meanings.friendlyNumbers.includes(lifePathNumber);
  const challenging1 = meanings.challengingNumbers.includes(birthDayNumber);
  const challenging2 = meanings.challengingNumbers.includes(lifePathNumber);

  if (primaryCompatible && secondaryCompatible) return 'excellent';
  if (primaryCompatible || secondaryCompatible) return 'good';
  if (challenging1 && challenging2) return 'challenging';
  return 'neutral';
}

function getCompatibilityScore(
  nameNumber: number,
  birthDayNumber: number,
  lifePathNumber: number
): number {
  const compatibility = getCompatibility(nameNumber, birthDayNumber, lifePathNumber);
  switch (compatibility) {
    case 'excellent': return 95;
    case 'good': return 75;
    case 'neutral': return 50;
    case 'challenging': return 25;
  }
}

// ============================================================================
// Name Suggestion Generation
// ============================================================================

function generateSuggestions(
  originalName: string,
  birthDayNumber: number,
  lifePathNumber: number,
  targetNumbers: number[]
): NameSuggestion[] {
  const suggestions: NameSuggestion[] = [];
  const originalPythNumber = calculatePythagoreanNumber(originalName);
  const originalChalNumber = calculateChaldeanNumber(originalName);
  const cleanName = originalName.toUpperCase().replace(/[^A-Z\s]/g, '');
  const nameParts = originalName.split(' ');

  // Strategy 1: Single letter addition at end
  for (const addition of LETTER_ADDITIONS) {
    if (!addition.common) continue;

    const newName = originalName + addition.letter.toLowerCase();
    const newPythNumber = calculatePythagoreanNumber(newName);
    const newChalNumber = calculateChaldeanNumber(newName);

    if (targetNumbers.includes(newPythNumber) && newPythNumber !== originalPythNumber) {
      suggestions.push({
        name: newName,
        pythagoreanNumber: newPythNumber,
        chaldeanNumber: newChalNumber,
        changeType: 'addition',
        changeDescription: {
          en: `Add '${addition.letter}' at the end`,
          hi: `अंत में '${addition.letter}' जोड़ें`,
        },
        compatibilityScore: getCompatibilityScore(newPythNumber, birthDayNumber, lifePathNumber),
        reasoning: {
          en: `Adding '${addition.letter}' changes your name number from ${originalPythNumber} to ${newPythNumber}, which is more compatible with your birth numbers.`,
          hi: `'${addition.letter}' जोड़ने से आपका नाम अंक ${originalPythNumber} से ${newPythNumber} हो जाता है, जो आपके जन्म अंकों के साथ अधिक संगत है।`,
        },
      });
    }
  }

  // Strategy 2: Double letter (common in names)
  const lastLetter = cleanName.charAt(cleanName.length - 1);
  if (lastLetter && /[AEIOUNLSRT]/.test(lastLetter)) {
    const newName = originalName + lastLetter.toLowerCase();
    const newPythNumber = calculatePythagoreanNumber(newName);
    const newChalNumber = calculateChaldeanNumber(newName);

    if (targetNumbers.includes(newPythNumber) && newPythNumber !== originalPythNumber) {
      suggestions.push({
        name: newName,
        pythagoreanNumber: newPythNumber,
        chaldeanNumber: newChalNumber,
        changeType: 'spelling',
        changeDescription: {
          en: `Double the last letter '${lastLetter}'`,
          hi: `अंतिम अक्षर '${lastLetter}' को दोहराएं`,
        },
        compatibilityScore: getCompatibilityScore(newPythNumber, birthDayNumber, lifePathNumber),
        reasoning: {
          en: `Doubling the last letter is a subtle change that maintains the name's sound while improving numerological harmony.`,
          hi: `अंतिम अक्षर को दोहराना एक सूक्ष्म परिवर्तन है जो नाम की ध्वनि बनाए रखते हुए अंकशास्त्रीय सामंजस्य में सुधार करता है।`,
        },
      });
    }
  }

  // Strategy 3: Add 'H' at start (silent, common in Hindi names)
  if (!cleanName.startsWith('H')) {
    const newName = 'H' + originalName.charAt(0).toLowerCase() + originalName.slice(1);
    const newPythNumber = calculatePythagoreanNumber(newName);
    const newChalNumber = calculateChaldeanNumber(newName);

    if (targetNumbers.includes(newPythNumber)) {
      suggestions.push({
        name: newName,
        pythagoreanNumber: newPythNumber,
        chaldeanNumber: newChalNumber,
        changeType: 'addition',
        changeDescription: {
          en: "Add silent 'H' at the beginning",
          hi: "शुरुआत में मौन 'H' जोड़ें",
        },
        compatibilityScore: getCompatibilityScore(newPythNumber, birthDayNumber, lifePathNumber),
        reasoning: {
          en: `A silent 'H' at the beginning is often unnoticed in pronunciation but can significantly shift the numerological value.`,
          hi: `शुरुआत में मौन 'H' अक्सर उच्चारण में ध्यान नहीं दिया जाता लेकिन अंकशास्त्रीय मूल्य को महत्वपूर्ण रूप से बदल सकता है।`,
        },
      });
    }
  }

  // Strategy 4: Replace vowels (common correction)
  const vowelReplacements: [string, string][] = [
    ['A', 'AA'], ['E', 'EE'], ['I', 'Y'], ['O', 'OO'], ['U', 'OO'],
  ];
  for (const [from, to] of vowelReplacements) {
    if (cleanName.includes(from)) {
      const newName = originalName.replace(new RegExp(from, 'i'), to.toLowerCase());
      const newPythNumber = calculatePythagoreanNumber(newName);
      const newChalNumber = calculateChaldeanNumber(newName);

      if (targetNumbers.includes(newPythNumber) && newPythNumber !== originalPythNumber) {
        suggestions.push({
          name: newName,
          pythagoreanNumber: newPythNumber,
          chaldeanNumber: newChalNumber,
          changeType: 'spelling',
          changeDescription: {
            en: `Change '${from}' to '${to}'`,
            hi: `'${from}' को '${to}' में बदलें`,
          },
          compatibilityScore: getCompatibilityScore(newPythNumber, birthDayNumber, lifePathNumber),
          reasoning: {
            en: `This spelling variation is common and natural, while bringing a more favorable numerological vibration.`,
            hi: `यह वर्तनी भिन्नता सामान्य और स्वाभाविक है, जबकि अधिक अनुकूल अंकशास्त्रीय कंपन लाती है।`,
          },
        });
      }
    }
  }

  // Strategy 5: Modify middle name initial (if multi-word)
  if (nameParts.length >= 2) {
    for (let i = 1; i < 9; i++) {
      const letter = Object.keys(PYTHAGOREAN_VALUES).find(
        (k) => PYTHAGOREAN_VALUES[k] === i
      );
      if (letter && letter !== nameParts[1].charAt(0).toUpperCase()) {
        const newNameParts = [...nameParts];
        newNameParts[1] = letter + '.';
        const newName = newNameParts.join(' ');
        const newPythNumber = calculatePythagoreanNumber(newName);
        const newChalNumber = calculateChaldeanNumber(newName);

        if (targetNumbers.includes(newPythNumber)) {
          suggestions.push({
            name: newName,
            pythagoreanNumber: newPythNumber,
            chaldeanNumber: newChalNumber,
            changeType: 'replacement',
            changeDescription: {
              en: `Use middle initial '${letter}.'`,
              hi: `मध्य आद्याक्षर '${letter}.' का प्रयोग करें`,
            },
            compatibilityScore: getCompatibilityScore(newPythNumber, birthDayNumber, lifePathNumber),
            reasoning: {
              en: `Adding or changing a middle initial is a formal way to adjust your name's numerology without changing your identity.`,
              hi: `मध्य आद्याक्षर जोड़ना या बदलना आपकी पहचान बदले बिना आपके नाम के अंकशास्त्र को समायोजित करने का एक औपचारिक तरीका है।`,
            },
          });
          break; // Only add one middle initial suggestion
        }
      }
    }
  }

  // Sort by compatibility score
  suggestions.sort((a, b) => b.compatibilityScore - a.compatibilityScore);

  // Remove duplicates and limit results
  const seen = new Set<string>();
  return suggestions
    .filter((s) => {
      const key = s.name.toUpperCase();
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 8);
}

// ============================================================================
// New Letter-Based Suggestion Generation
// ============================================================================

function generateLetterSuggestions(
  originalName: string,
  currentPythNumber: number,
  birthDayNumber: number,
  lifePathNumber: number,
  targetNumbers: number[]
): LetterSuggestion[] {
  const suggestions: LetterSuggestion[] = [];
  const fromPlanet = getPlanetForNumber(currentPythNumber);

  // Strategy 1: Find letters that when added shift to target numbers
  for (const [letter, data] of Object.entries(LETTER_DATA)) {
    const newPythNumber = reduceToSingleDigit(currentPythNumber * 9 + data.pyth); // Simplified; real calc below

    // Calculate what number we'd get if we add this letter
    const newTotal = calculatePythagoreanNumber(originalName) + data.pyth;
    const newNumber = reduceToSingleDigit(newTotal, false);

    if (targetNumbers.includes(newNumber) && newNumber !== currentPythNumber) {
      const toPlanet = getPlanetForNumber(newNumber);
      const score = getCompatibilityScore(newNumber, birthDayNumber, lifePathNumber);

      // Generate "why this works" explanation based on planetary shift
      const whyThisWorks: BilingualText = {
        en: `Adding '${letter}' shifts your name from ${fromPlanet.en} (${currentPythNumber}) to ${toPlanet.en} (${newNumber}) energy${
          score >= 80 ? '—an excellent alignment with your birth numbers.' :
          score >= 60 ? '—a good alignment with your birth numbers.' :
          '—bringing better harmony.'
        }`,
        hi: `'${letter}' जोड़ने से आपका नाम ${fromPlanet.hi} (${currentPythNumber}) से ${toPlanet.hi} (${newNumber}) ऊर्जा में बदल जाता है${
          score >= 80 ? '—आपके जन्म अंकों के साथ उत्कृष्ट संरेखण।' :
          score >= 60 ? '—आपके जन्म अंकों के साथ अच्छा संरेखण।' :
          '—बेहतर सामंजस्य लाता है।'
        }`,
      };

      suggestions.push({
        letter,
        operation: 'add',
        targetNumber: newNumber,
        alignmentScore: score,
        vibrationalShift: {
          fromNumber: currentPythNumber,
          fromPlanet,
          toNumber: newNumber,
          toPlanet,
        },
        whyThisWorks,
        examplePlacements: generateExamplePlacements(originalName, letter),
        letterValue: {
          pythagorean: data.pyth,
          chaldean: data.chal,
        },
      });
    }
  }

  // Strategy 2: Doubling existing letters (especially vowels)
  const cleanName = originalName.toUpperCase().replace(/[^A-Z]/g, '');
  const usedLetters = new Set<string>();

  for (const char of cleanName) {
    if (usedLetters.has(char)) continue;
    usedLetters.add(char);

    const data = LETTER_DATA[char];
    if (!data) continue;

    const newTotal = calculatePythagoreanNumber(originalName) + data.pyth;
    const newNumber = reduceToSingleDigit(newTotal, false);

    if (targetNumbers.includes(newNumber) && newNumber !== currentPythNumber) {
      const toPlanet = getPlanetForNumber(newNumber);
      const score = getCompatibilityScore(newNumber, birthDayNumber, lifePathNumber);

      const whyThisWorks: BilingualText = {
        en: `Doubling '${char}' amplifies its vibration and shifts from ${fromPlanet.en} (${currentPythNumber}) to ${toPlanet.en} (${newNumber})—a subtle change that preserves pronunciation.`,
        hi: `'${char}' को दोहराने से इसका कंपन बढ़ता है और ${fromPlanet.hi} (${currentPythNumber}) से ${toPlanet.hi} (${newNumber}) में बदलता है—एक सूक्ष्म परिवर्तन जो उच्चारण को बनाए रखता है।`,
      };

      suggestions.push({
        letter: char,
        operation: 'double',
        targetNumber: newNumber,
        alignmentScore: score,
        vibrationalShift: {
          fromNumber: currentPythNumber,
          fromPlanet,
          toNumber: newNumber,
          toPlanet,
        },
        whyThisWorks,
        examplePlacements: {
          en: `${originalName.split(' ')[0]} → double the '${char}' anywhere`,
          hi: `${originalName.split(' ')[0]} → '${char}' को कहीं भी दोहराएं`,
        },
        letterValue: {
          pythagorean: data.pyth,
          chaldean: data.chal,
        },
      });
    }
  }

  // Strategy 3: Removing letters (if name has repeating or removable letters)
  for (const char of cleanName) {
    const data = LETTER_DATA[char];
    if (!data) continue;

    // Check if removing this letter would help
    const newTotal = calculatePythagoreanNumber(originalName) - data.pyth;
    if (newTotal <= 0) continue;

    const newNumber = reduceToSingleDigit(newTotal, false);

    if (targetNumbers.includes(newNumber) && newNumber !== currentPythNumber) {
      const toPlanet = getPlanetForNumber(newNumber);
      const score = getCompatibilityScore(newNumber, birthDayNumber, lifePathNumber);

      // Only suggest removal if letter appears more than once or is commonly removable
      const letterCount = (cleanName.match(new RegExp(char, 'g')) || []).length;
      if (letterCount > 1 || ['H', 'E', 'A', 'Y'].includes(char)) {
        const whyThisWorks: BilingualText = {
          en: `Removing one '${char}' shifts from ${fromPlanet.en} (${currentPythNumber}) to ${toPlanet.en} (${newNumber})—reducing excess energy.`,
          hi: `एक '${char}' हटाने से ${fromPlanet.hi} (${currentPythNumber}) से ${toPlanet.hi} (${newNumber}) में बदलता है—अतिरिक्त ऊर्जा कम होती है।`,
        };

        suggestions.push({
          letter: char,
          operation: 'remove',
          targetNumber: newNumber,
          alignmentScore: score,
          vibrationalShift: {
            fromNumber: currentPythNumber,
            fromPlanet,
            toNumber: newNumber,
            toPlanet,
          },
          whyThisWorks,
          examplePlacements: {
            en: `Remove one '${char}' from your name`,
            hi: `अपने नाम से एक '${char}' हटाएं`,
          },
          letterValue: {
            pythagorean: data.pyth,
            chaldean: data.chal,
          },
        });
        break; // Only one removal suggestion
      }
    }
  }

  // Sort by alignment score and limit to 5
  suggestions.sort((a, b) => b.alignmentScore - a.alignmentScore);

  // Remove duplicates (same letter, same operation)
  const seen = new Set<string>();
  return suggestions
    .filter((s) => {
      const key = `${s.letter}-${s.operation}`;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    })
    .slice(0, 5);
}

// ============================================================================
// Main Function
// ============================================================================

export function calculateNameCorrection(
  fullName: string,
  dateOfBirth: string
): NameCorrectionResult {
  const lifePathNumber = calculateLifePathNumber(dateOfBirth);
  const birthDayNumber = calculateBirthDayNumber(dateOfBirth);
  const currentPythagoreanNumber = calculatePythagoreanNumber(fullName);
  const currentChaldeanNumber = calculateChaldeanNumber(fullName);
  const soulUrge = calculateSoulUrge(fullName);
  const personalityNumber = calculatePersonalityNumber(fullName);

  // Get current analysis
  const baseNumber = currentPythagoreanNumber > 9
    ? reduceToSingleDigit(currentPythagoreanNumber, false)
    : currentPythagoreanNumber;
  const meanings = NUMBER_MEANINGS[baseNumber];
  const compatibility = getCompatibility(currentPythagoreanNumber, birthDayNumber, lifePathNumber);

  const currentAnalysis: NumberAnalysis = {
    number: currentPythagoreanNumber,
    meaning: meanings?.meaning || { en: '', hi: '' },
    planet: meanings?.planet || { en: '', hi: '' },
    isCompatible: compatibility === 'excellent' || compatibility === 'good',
    compatibility,
    traits: meanings?.traits || [],
  };

  // Calculate target numbers (friendly to birth numbers)
  const targetNumbersSet = new Set<number>();
  const birthMeanings = NUMBER_MEANINGS[birthDayNumber];
  const lifeMeanings = NUMBER_MEANINGS[lifePathNumber];

  if (birthMeanings) {
    birthMeanings.friendlyNumbers.forEach((n) => targetNumbersSet.add(n));
  }
  if (lifeMeanings) {
    lifeMeanings.friendlyNumbers.forEach((n) => targetNumbersSet.add(n));
  }
  // Also consider same numbers as birth
  targetNumbersSet.add(birthDayNumber);
  targetNumbersSet.add(lifePathNumber);

  const targetNumbers = Array.from(targetNumbersSet);

  // Generate suggestions (legacy)
  const suggestions = generateSuggestions(
    fullName,
    birthDayNumber,
    lifePathNumber,
    targetNumbers
  );

  // Generate new letter-based suggestions
  const letterSuggestions = generateLetterSuggestions(
    fullName,
    currentPythagoreanNumber,
    birthDayNumber,
    lifePathNumber,
    targetNumbers
  );

  // Count vowels and consonants
  const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, '');
  const vowelCount = cleanName.split('').filter((c) => VOWELS.has(c)).length;
  const consonantCount = cleanName.length - vowelCount;

  // Get soul urge and personality meanings
  const soulMeanings = NUMBER_MEANINGS[soulUrge > 9 ? reduceToSingleDigit(soulUrge, false) : soulUrge];
  const personalityMeanings = NUMBER_MEANINGS[personalityNumber > 9 ? reduceToSingleDigit(personalityNumber, false) : personalityNumber];

  // Generate general guidance
  const generalGuidance: BilingualText = compatibility === 'excellent' || compatibility === 'good'
    ? {
        en: `Your current name "${fullName}" has good numerological harmony with your birth numbers. The suggestions below offer even stronger alignments if you choose to make a change.`,
        hi: `आपका वर्तमान नाम "${fullName}" आपके जन्म अंकों के साथ अच्छा अंकशास्त्रीय सामंजस्य रखता है। नीचे दिए गए सुझाव और भी मजबूत संरेखण प्रदान करते हैं यदि आप परिवर्तन करना चाहें।`,
      }
    : {
        en: `Your name "${fullName}" has some friction with your birth numbers. The suggestions below can help create better numerological harmony and attract more favorable vibrations.`,
        hi: `आपके नाम "${fullName}" में आपके जन्म अंकों के साथ कुछ घर्षण है। नीचे दिए गए सुझाव बेहतर अंकशास्त्रीय सामंजस्य बनाने और अधिक अनुकूल कंपन आकर्षित करने में मदद कर सकते हैं।`,
      };

  return {
    originalName: fullName,
    dateOfBirth,
    lifePathNumber,
    birthDayNumber,
    currentPythagoreanNumber,
    currentChaldeanNumber,
    currentAnalysis,
    targetNumbers,
    suggestions,
    letterSuggestions,
    generalGuidance,
    vowelAnalysis: {
      count: vowelCount,
      soulUrge,
      meaning: soulMeanings?.meaning || { en: '', hi: '' },
    },
    consonantAnalysis: {
      count: consonantCount,
      personality: personalityNumber,
      meaning: personalityMeanings?.meaning || { en: '', hi: '' },
    },
  };
}

/**
 * Check if a specific name has favorable numerology
 */
export function analyzeNameCompatibility(
  name: string,
  dateOfBirth: string
): {
  pythagoreanNumber: number;
  chaldeanNumber: number;
  compatibility: 'excellent' | 'good' | 'neutral' | 'challenging';
  score: number;
} {
  const lifePathNumber = calculateLifePathNumber(dateOfBirth);
  const birthDayNumber = calculateBirthDayNumber(dateOfBirth);
  const pythagoreanNumber = calculatePythagoreanNumber(name);
  const chaldeanNumber = calculateChaldeanNumber(name);
  const compatibility = getCompatibility(pythagoreanNumber, birthDayNumber, lifePathNumber);
  const score = getCompatibilityScore(pythagoreanNumber, birthDayNumber, lifePathNumber);

  return {
    pythagoreanNumber,
    chaldeanNumber,
    compatibility,
    score,
  };
}
