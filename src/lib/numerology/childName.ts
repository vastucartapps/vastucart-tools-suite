/**
 * Child Name Numerology Calculator
 *
 * Suggests numerologically harmonious names for children based on:
 * - Parents' birth dates and life path numbers
 * - Desired qualities/traits for the child
 * - Compatible name numbers
 * - Starting letter recommendations
 */

interface BilingualText {
  en: string;
  hi: string;
}

// Pythagorean letter values
const PYTHAGOREAN_VALUES: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 6, G: 7, H: 8, I: 9,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 6, P: 7, Q: 8, R: 9,
  S: 1, T: 2, U: 3, V: 4, W: 5, X: 6, Y: 7, Z: 8,
};

// Chaldean letter values
const CHALDEAN_VALUES: Record<string, number> = {
  A: 1, B: 2, C: 3, D: 4, E: 5, F: 8, G: 3, H: 5, I: 1,
  J: 1, K: 2, L: 3, M: 4, N: 5, O: 7, P: 8, Q: 1, R: 2,
  S: 3, T: 4, U: 6, V: 6, W: 6, X: 5, Y: 1, Z: 7,
};

// Letter to number mapping for starting letters
const LETTER_NUMBERS: Record<number, string[]> = {
  1: ['A', 'I', 'J', 'Q', 'Y'],
  2: ['B', 'K', 'R'],
  3: ['C', 'G', 'L', 'S'],
  4: ['D', 'M', 'T'],
  5: ['E', 'H', 'N', 'X'],
  6: ['U', 'V', 'W'],
  7: ['O', 'Z'],
  8: ['F', 'P'],
  9: [''],  // No letters for 9 in Pythagorean (but we include R in variations)
};

// Number traits and meanings
const NUMBER_TRAITS: Record<number, { traits: BilingualText; careers: BilingualText; qualities: string[] }> = {
  1: {
    traits: {
      en: 'Leadership, Independence, Originality, Ambition, Pioneering Spirit',
      hi: 'नेतृत्व, स्वतंत्रता, मौलिकता, महत्वाकांक्षा, अग्रणी भावना',
    },
    careers: {
      en: 'Entrepreneur, CEO, Inventor, Director, Self-employed Professional',
      hi: 'उद्यमी, CEO, आविष्कारक, निर्देशक, स्व-रोजगार पेशेवर',
    },
    qualities: ['leadership', 'independence', 'ambition', 'courage'],
  },
  2: {
    traits: {
      en: 'Diplomacy, Cooperation, Sensitivity, Balance, Partnership',
      hi: 'कूटनीति, सहयोग, संवेदनशीलता, संतुलन, साझेदारी',
    },
    careers: {
      en: 'Diplomat, Counselor, Mediator, Team Player, Support Roles',
      hi: 'राजनयिक, परामर्शदाता, मध्यस्थ, टीम खिलाड़ी, सहायक भूमिकाएं',
    },
    qualities: ['harmony', 'cooperation', 'sensitivity', 'patience'],
  },
  3: {
    traits: {
      en: 'Creativity, Expression, Joy, Communication, Artistic Talent',
      hi: 'रचनात्मकता, अभिव्यक्ति, आनंद, संचार, कलात्मक प्रतिभा',
    },
    careers: {
      en: 'Artist, Writer, Speaker, Entertainer, Designer',
      hi: 'कलाकार, लेखक, वक्ता, मनोरंजनकर्ता, डिजाइनर',
    },
    qualities: ['creativity', 'expression', 'joy', 'communication'],
  },
  4: {
    traits: {
      en: 'Stability, Hard Work, Discipline, Organization, Practicality',
      hi: 'स्थिरता, कठिन परिश्रम, अनुशासन, संगठन, व्यावहारिकता',
    },
    careers: {
      en: 'Engineer, Architect, Manager, Accountant, Builder',
      hi: 'इंजीनियर, वास्तुकार, प्रबंधक, लेखाकार, निर्माता',
    },
    qualities: ['stability', 'discipline', 'hardwork', 'organization'],
  },
  5: {
    traits: {
      en: 'Freedom, Adventure, Versatility, Change, Curiosity',
      hi: 'स्वतंत्रता, साहस, बहुमुखी प्रतिभा, परिवर्तन, जिज्ञासा',
    },
    careers: {
      en: 'Traveler, Journalist, Sales, Marketing, Explorer',
      hi: 'यात्री, पत्रकार, बिक्री, विपणन, खोजकर्ता',
    },
    qualities: ['freedom', 'adventure', 'versatility', 'curiosity'],
  },
  6: {
    traits: {
      en: 'Responsibility, Love, Nurturing, Family, Harmony',
      hi: 'जिम्मेदारी, प्रेम, पालन-पोषण, परिवार, सामंजस्य',
    },
    careers: {
      en: 'Teacher, Healer, Counselor, Home Designer, Caregiver',
      hi: 'शिक्षक, चिकित्सक, परामर्शदाता, गृह डिजाइनर, देखभालकर्ता',
    },
    qualities: ['love', 'family', 'responsibility', 'nurturing'],
  },
  7: {
    traits: {
      en: 'Wisdom, Spirituality, Analysis, Introspection, Research',
      hi: 'ज्ञान, आध्यात्मिकता, विश्लेषण, आत्मनिरीक्षण, अनुसंधान',
    },
    careers: {
      en: 'Scientist, Researcher, Philosopher, Spiritual Guide, Analyst',
      hi: 'वैज्ञानिक, शोधकर्ता, दार्शनिक, आध्यात्मिक मार्गदर्शक, विश्लेषक',
    },
    qualities: ['wisdom', 'spirituality', 'analysis', 'intuition'],
  },
  8: {
    traits: {
      en: 'Power, Success, Material Abundance, Authority, Achievement',
      hi: 'शक्ति, सफलता, भौतिक समृद्धि, अधिकार, उपलब्धि',
    },
    careers: {
      en: 'Business Owner, Executive, Banker, Politician, Judge',
      hi: 'व्यवसाय स्वामी, कार्यकारी, बैंकर, राजनेता, न्यायाधीश',
    },
    qualities: ['success', 'power', 'wealth', 'authority'],
  },
  9: {
    traits: {
      en: 'Compassion, Humanitarianism, Wisdom, Completion, Universal Love',
      hi: 'करुणा, मानवतावाद, ज्ञान, पूर्णता, सार्वभौमिक प्रेम',
    },
    careers: {
      en: 'Philanthropist, Doctor, Social Worker, Artist, Spiritual Leader',
      hi: 'परोपकारी, डॉक्टर, समाज सेवक, कलाकार, आध्यात्मिक नेता',
    },
    qualities: ['compassion', 'humanitarian', 'wisdom', 'service'],
  },
  11: {
    traits: {
      en: 'Intuition, Inspiration, Spiritual Insight, Visionary, Idealism',
      hi: 'अंतर्ज्ञान, प्रेरणा, आध्यात्मिक अंतर्दृष्टि, दूरदर्शी, आदर्शवाद',
    },
    careers: {
      en: 'Spiritual Teacher, Counselor, Inventor, Artist, Healer',
      hi: 'आध्यात्मिक शिक्षक, परामर्शदाता, आविष्कारक, कलाकार, चिकित्सक',
    },
    qualities: ['intuition', 'spirituality', 'inspiration', 'vision'],
  },
  22: {
    traits: {
      en: 'Master Builder, Practicality, Vision, Achievement, Legacy',
      hi: 'मास्टर बिल्डर, व्यावहारिकता, दृष्टि, उपलब्धि, विरासत',
    },
    careers: {
      en: 'Architect, Diplomat, Politician, Large-scale Project Leader',
      hi: 'वास्तुकार, राजनयिक, राजनेता, बड़े पैमाने पर परियोजना नेता',
    },
    qualities: ['mastery', 'building', 'vision', 'achievement'],
  },
};

// Quality to number mapping
const QUALITY_TO_NUMBERS: Record<string, number[]> = {
  leadership: [1, 8],
  independence: [1, 5],
  ambition: [1, 8],
  courage: [1, 9],
  harmony: [2, 6],
  cooperation: [2, 6],
  sensitivity: [2, 7],
  patience: [2, 4],
  creativity: [3, 5, 9],
  expression: [3, 5],
  joy: [3, 5],
  communication: [3, 5],
  stability: [4, 8],
  discipline: [4, 8],
  hardwork: [4, 8],
  organization: [4, 8],
  freedom: [5],
  adventure: [5, 9],
  versatility: [5, 3],
  curiosity: [5, 7],
  love: [6, 2],
  family: [6, 2],
  responsibility: [6, 4],
  nurturing: [6, 2],
  wisdom: [7, 9],
  spirituality: [7, 9, 11],
  analysis: [7, 4],
  intuition: [7, 11],
  success: [8, 1],
  power: [8, 1],
  wealth: [8, 4],
  authority: [8, 1],
  compassion: [9, 6],
  humanitarian: [9, 6],
  service: [9, 6],
  mastery: [22, 8],
  building: [22, 4],
  vision: [11, 22],
  inspiration: [11, 3],
};

// Compatible number pairs
const COMPATIBLE_NUMBERS: Record<number, number[]> = {
  1: [1, 3, 5, 9],
  2: [2, 4, 6, 8],
  3: [1, 3, 5, 6, 9],
  4: [2, 4, 6, 8],
  5: [1, 3, 5, 7, 9],
  6: [2, 3, 4, 6, 9],
  7: [5, 7],
  8: [2, 4, 6, 8],
  9: [1, 3, 5, 6, 9],
};

// Sample name database with meanings
interface NameEntry {
  name: string;
  meaning: BilingualText;
  gender: 'male' | 'female' | 'unisex';
  origin: string;
  pythagoreanNumber: number;
  chaldeanNumber: number;
}

// Generate sample names database
const SAMPLE_NAMES: NameEntry[] = [
  // Male names
  { name: 'Aarav', meaning: { en: 'Peaceful, Wise', hi: 'शांतिपूर्ण, बुद्धिमान' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Arjun', meaning: { en: 'Bright, Shining', hi: 'उज्ज्वल, चमकदार' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Aditya', meaning: { en: 'Sun, Belonging to Aditi', hi: 'सूर्य, अदिति का' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Ansh', meaning: { en: 'Portion, Part', hi: 'अंश, भाग' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Ayush', meaning: { en: 'Long Life', hi: 'दीर्घायु' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Dhruv', meaning: { en: 'Pole Star, Constant', hi: 'ध्रुव तारा, स्थिर' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Ishaan', meaning: { en: 'Sun, Lord Shiva', hi: 'सूर्य, भगवान शिव' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Kabir', meaning: { en: 'Great, Powerful', hi: 'महान, शक्तिशाली' }, gender: 'male', origin: 'Arabic', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Krishna', meaning: { en: 'Dark, All-Attractive', hi: 'श्याम, सर्वाकर्षक' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Laksh', meaning: { en: 'Target, Aim', hi: 'लक्ष्य, निशाना' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Manav', meaning: { en: 'Human, Man', hi: 'मानव, मनुष्य' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Nikhil', meaning: { en: 'Complete, Whole', hi: 'संपूर्ण, पूर्ण' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Om', meaning: { en: 'Sacred Sound', hi: 'पवित्र ध्वनि' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Pranav', meaning: { en: 'Sacred Syllable Om', hi: 'ओम का प्रतीक' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Rahul', meaning: { en: 'Efficient, Conqueror', hi: 'कुशल, विजेता' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Rohan', meaning: { en: 'Ascending, Healing', hi: 'आरोही, उपचार' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Rudra', meaning: { en: 'Lord Shiva, Fierce', hi: 'भगवान शिव, उग्र' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Samar', meaning: { en: 'War, Reward', hi: 'युद्ध, पुरस्कार' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Shaurya', meaning: { en: 'Valor, Bravery', hi: 'वीरता, साहस' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Ved', meaning: { en: 'Sacred Knowledge', hi: 'पवित्र ज्ञान' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Vihaan', meaning: { en: 'Dawn, Morning', hi: 'सुबह, प्रातःकाल' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Yash', meaning: { en: 'Fame, Glory', hi: 'यश, कीर्ति' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Advait', meaning: { en: 'Unique, Non-dual', hi: 'अद्वितीय, अद्वैत' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Vivaan', meaning: { en: 'Full of Life', hi: 'जीवन से भरपूर' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Reyansh', meaning: { en: 'Ray of Light', hi: 'प्रकाश की किरण' }, gender: 'male', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },

  // Female names
  { name: 'Aadhya', meaning: { en: 'First Power, Beginning', hi: 'प्रथम शक्ति, आरंभ' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Aanya', meaning: { en: 'Graceful, Inexhaustible', hi: 'सुंदर, अक्षय' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Ananya', meaning: { en: 'Unique, Matchless', hi: 'अनन्य, बेजोड़' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Diya', meaning: { en: 'Lamp, Light', hi: 'दीपक, प्रकाश' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Isha', meaning: { en: 'Divine, Goddess', hi: 'दिव्य, देवी' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Kavya', meaning: { en: 'Poetry, Art', hi: 'काव्य, कला' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Kiara', meaning: { en: 'Dark, Light', hi: 'गहरा, प्रकाश' }, gender: 'female', origin: 'Italian', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Myra', meaning: { en: 'Beloved, Sweet', hi: 'प्रिय, मधुर' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Navya', meaning: { en: 'New, Young', hi: 'नई, युवा' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Pari', meaning: { en: 'Fairy, Angel', hi: 'परी, देवदूत' }, gender: 'female', origin: 'Persian', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Prisha', meaning: { en: 'Beloved, Loving', hi: 'प्रिय, प्रेमपूर्ण' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Riya', meaning: { en: 'Singer, Graceful', hi: 'गायिका, सुंदर' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Saanvi', meaning: { en: 'Goddess Lakshmi', hi: 'देवी लक्ष्मी' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Sara', meaning: { en: 'Princess, Essence', hi: 'राजकुमारी, सार' }, gender: 'female', origin: 'Hebrew', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Siya', meaning: { en: 'Goddess Sita', hi: 'देवी सीता' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Tara', meaning: { en: 'Star, Goddess', hi: 'तारा, देवी' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Vanya', meaning: { en: 'Gracious, Forest', hi: 'दयालु, वन' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Zara', meaning: { en: 'Princess, Blooming', hi: 'राजकुमारी, खिलती' }, gender: 'female', origin: 'Arabic', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Aisha', meaning: { en: 'Alive, Living', hi: 'जीवित, जिंदा' }, gender: 'female', origin: 'Arabic', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Avni', meaning: { en: 'Earth', hi: 'पृथ्वी' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Ishita', meaning: { en: 'Mastery, Desired', hi: 'विशेषज्ञता, वांछित' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Nisha', meaning: { en: 'Night', hi: 'रात' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Aditi', meaning: { en: 'Boundless, Mother of Gods', hi: 'असीम, देवमाता' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Anvi', meaning: { en: 'Goddess of Forest', hi: 'वन की देवी' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
  { name: 'Ahana', meaning: { en: 'Inner Light, Dawn', hi: 'आंतरिक प्रकाश, उषा' }, gender: 'female', origin: 'Sanskrit', pythagoreanNumber: 0, chaldeanNumber: 0 },
];

// Calculate name number
function calculateNameNumber(name: string, system: 'pythagorean' | 'chaldean'): number {
  const values = system === 'pythagorean' ? PYTHAGOREAN_VALUES : CHALDEAN_VALUES;
  const upperName = name.toUpperCase().replace(/[^A-Z]/g, '');

  let sum = 0;
  for (const char of upperName) {
    sum += values[char] || 0;
  }

  // Reduce to single digit or master number
  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = String(sum).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }

  return sum;
}

// Calculate life path number from date
function calculateLifePath(day: number, month: number, year: number): number {
  const dateStr = `${day}${month}${year}`;
  let sum = dateStr.split('').reduce((acc, digit) => acc + parseInt(digit), 0);

  while (sum > 9 && sum !== 11 && sum !== 22 && sum !== 33) {
    sum = String(sum).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }

  return sum;
}

// Calculate birth day number
function calculateBirthDay(day: number): number {
  let sum = day;
  while (sum > 9 && sum !== 11 && sum !== 22) {
    sum = String(sum).split('').reduce((acc, digit) => acc + parseInt(digit), 0);
  }
  return sum;
}

// Initialize name numbers in database
function initializeNameDatabase(): NameEntry[] {
  return SAMPLE_NAMES.map(entry => ({
    ...entry,
    pythagoreanNumber: calculateNameNumber(entry.name, 'pythagorean'),
    chaldeanNumber: calculateNameNumber(entry.name, 'chaldean'),
  }));
}

// Get compatible numbers for a life path
function getCompatibleNumbers(lifePath: number): number[] {
  const base = lifePath > 9 ? (lifePath === 11 ? 2 : lifePath === 22 ? 4 : 6) : lifePath;
  return COMPATIBLE_NUMBERS[base] || [1, 5, 9];
}

// Get numbers for desired qualities
function getNumbersForQualities(qualities: string[]): number[] {
  const numbers = new Set<number>();
  for (const quality of qualities) {
    const qualityNumbers = QUALITY_TO_NUMBERS[quality.toLowerCase()];
    if (qualityNumbers) {
      qualityNumbers.forEach(n => numbers.add(n));
    }
  }
  return Array.from(numbers);
}

// Get recommended starting letters
function getRecommendedLetters(numbers: number[]): string[] {
  const letters: string[] = [];
  for (const num of numbers) {
    const letterGroup = LETTER_NUMBERS[num];
    if (letterGroup) {
      letters.push(...letterGroup.filter(l => l !== ''));
    }
  }
  return [...new Set(letters)].sort();
}

export interface ParentInfo {
  day: number;
  month: number;
  year: number;
}

export interface ChildNameInput {
  father: ParentInfo;
  mother: ParentInfo;
  childGender: 'male' | 'female' | 'any';
  desiredQualities: string[];
  preferredStartingLetter?: string;
}

export interface NameSuggestion {
  name: string;
  meaning: BilingualText;
  gender: 'male' | 'female' | 'unisex';
  origin: string;
  pythagoreanNumber: number;
  chaldeanNumber: number;
  compatibilityScore: number;
  matchReason: BilingualText;
  traits: BilingualText;
}

export interface ChildNameResult {
  fatherLifePath: number;
  motherLifePath: number;
  fatherBirthDay: number;
  motherBirthDay: number;
  combinedNumber: number;
  idealNumbers: number[];
  qualityBasedNumbers: number[];
  recommendedLetters: string[];
  nameSuggestions: NameSuggestion[];
  numberMeanings: Record<number, { traits: BilingualText; careers: BilingualText }>;
  guidance: BilingualText;
}

export function calculateChildNameSuggestions(input: ChildNameInput): ChildNameResult {
  const { father, mother, childGender, desiredQualities, preferredStartingLetter } = input;

  // Calculate parent numbers
  const fatherLifePath = calculateLifePath(father.day, father.month, father.year);
  const motherLifePath = calculateLifePath(mother.day, mother.month, mother.year);
  const fatherBirthDay = calculateBirthDay(father.day);
  const motherBirthDay = calculateBirthDay(mother.day);

  // Calculate combined harmony number
  let combinedSum = fatherLifePath + motherLifePath;
  while (combinedSum > 9 && combinedSum !== 11 && combinedSum !== 22) {
    combinedSum = String(combinedSum).split('').reduce((acc, d) => acc + parseInt(d), 0);
  }

  // Get compatible numbers based on parents
  const fatherCompatible = getCompatibleNumbers(fatherLifePath);
  const motherCompatible = getCompatibleNumbers(motherLifePath);
  const idealNumbers = [...new Set([...fatherCompatible, ...motherCompatible])].sort((a, b) => a - b);

  // Get numbers based on desired qualities
  const qualityBasedNumbers = getNumbersForQualities(desiredQualities);

  // Combine ideal numbers
  const allIdealNumbers = [...new Set([...idealNumbers, ...qualityBasedNumbers])];

  // Get recommended starting letters
  const recommendedLetters = getRecommendedLetters(allIdealNumbers.slice(0, 3));

  // Initialize name database
  const nameDatabase = initializeNameDatabase();

  // Filter and score names
  const filteredNames = nameDatabase.filter(entry => {
    // Gender filter
    if (childGender !== 'any' && entry.gender !== childGender && entry.gender !== 'unisex') {
      return false;
    }

    // Starting letter filter if specified
    if (preferredStartingLetter) {
      const firstLetter = entry.name.charAt(0).toUpperCase();
      if (firstLetter !== preferredStartingLetter.toUpperCase()) {
        return false;
      }
    }

    return true;
  });

  // Score each name
  const scoredNames = filteredNames.map(entry => {
    let score = 0;
    const reasons: string[] = [];
    const reasonsHi: string[] = [];

    // Check if name number is in ideal numbers (Pythagorean)
    if (allIdealNumbers.includes(entry.pythagoreanNumber)) {
      score += 30;
      reasons.push(`Name number ${entry.pythagoreanNumber} is ideal for parents`);
      reasonsHi.push(`नाम संख्या ${entry.pythagoreanNumber} माता-पिता के लिए आदर्श है`);
    }

    // Check if name number matches quality preferences
    if (qualityBasedNumbers.includes(entry.pythagoreanNumber)) {
      score += 25;
      reasons.push(`Matches desired qualities`);
      reasonsHi.push(`वांछित गुणों से मेल खाता है`);
    }

    // Check compatibility with father's life path
    if (fatherCompatible.includes(entry.pythagoreanNumber)) {
      score += 15;
      reasons.push(`Compatible with father's life path ${fatherLifePath}`);
      reasonsHi.push(`पिता के जीवन पथ ${fatherLifePath} के साथ संगत`);
    }

    // Check compatibility with mother's life path
    if (motherCompatible.includes(entry.pythagoreanNumber)) {
      score += 15;
      reasons.push(`Compatible with mother's life path ${motherLifePath}`);
      reasonsHi.push(`माता के जीवन पथ ${motherLifePath} के साथ संगत`);
    }

    // Bonus for matching combined number
    if (entry.pythagoreanNumber === combinedSum) {
      score += 20;
      reasons.push(`Matches parents' harmony number ${combinedSum}`);
      reasonsHi.push(`माता-पिता के सामंजस्य अंक ${combinedSum} से मेल खाता है`);
    }

    // Bonus if starting letter is recommended
    const firstLetter = entry.name.charAt(0).toUpperCase();
    if (recommendedLetters.includes(firstLetter)) {
      score += 10;
      reasons.push(`Starting letter '${firstLetter}' is auspicious`);
      reasonsHi.push(`आरंभिक अक्षर '${firstLetter}' शुभ है`);
    }

    const traits = NUMBER_TRAITS[entry.pythagoreanNumber] || NUMBER_TRAITS[1];

    return {
      ...entry,
      compatibilityScore: Math.min(score, 100),
      matchReason: {
        en: reasons.join('. ') || 'General compatibility',
        hi: reasonsHi.join('। ') || 'सामान्य संगतता',
      },
      traits: traits.traits,
    };
  });

  // Sort by score and take top suggestions
  const topSuggestions = scoredNames
    .sort((a, b) => b.compatibilityScore - a.compatibilityScore)
    .slice(0, 15);

  // Prepare number meanings for display
  const relevantNumbers = [...new Set([...allIdealNumbers, combinedSum])].filter(n => n >= 1 && n <= 22);
  const numberMeanings: Record<number, { traits: BilingualText; careers: BilingualText }> = {};
  for (const num of relevantNumbers) {
    if (NUMBER_TRAITS[num]) {
      numberMeanings[num] = {
        traits: NUMBER_TRAITS[num].traits,
        careers: NUMBER_TRAITS[num].careers,
      };
    }
  }

  // Generate guidance
  const guidance: BilingualText = {
    en: `Based on father's life path number ${fatherLifePath} and mother's life path number ${motherLifePath}, names with numbers ${allIdealNumbers.slice(0, 4).join(', ')} are most harmonious. Starting letters ${recommendedLetters.slice(0, 5).join(', ')} are particularly auspicious. The combined harmony number ${combinedSum} represents the family's collective energy.`,
    hi: `पिता के जीवन पथ अंक ${fatherLifePath} और माता के जीवन पथ अंक ${motherLifePath} के आधार पर, ${allIdealNumbers.slice(0, 4).join(', ')} संख्या वाले नाम सबसे सामंजस्यपूर्ण हैं। आरंभिक अक्षर ${recommendedLetters.slice(0, 5).join(', ')} विशेष रूप से शुभ हैं। संयुक्त सामंजस्य अंक ${combinedSum} परिवार की सामूहिक ऊर्जा का प्रतिनिधित्व करता है।`,
  };

  return {
    fatherLifePath,
    motherLifePath,
    fatherBirthDay,
    motherBirthDay,
    combinedNumber: combinedSum,
    idealNumbers: allIdealNumbers,
    qualityBasedNumbers,
    recommendedLetters,
    nameSuggestions: topSuggestions,
    numberMeanings,
    guidance,
  };
}

// Available qualities for UI
export const AVAILABLE_QUALITIES = [
  { value: 'leadership', label: { en: 'Leadership', hi: 'नेतृत्व' } },
  { value: 'creativity', label: { en: 'Creativity', hi: 'रचनात्मकता' } },
  { value: 'wisdom', label: { en: 'Wisdom', hi: 'ज्ञान' } },
  { value: 'success', label: { en: 'Success', hi: 'सफलता' } },
  { value: 'harmony', label: { en: 'Harmony', hi: 'सामंजस्य' } },
  { value: 'spirituality', label: { en: 'Spirituality', hi: 'आध्यात्मिकता' } },
  { value: 'courage', label: { en: 'Courage', hi: 'साहस' } },
  { value: 'love', label: { en: 'Love & Compassion', hi: 'प्रेम और करुणा' } },
  { value: 'stability', label: { en: 'Stability', hi: 'स्थिरता' } },
  { value: 'adventure', label: { en: 'Adventure', hi: 'साहसिकता' } },
  { value: 'wealth', label: { en: 'Wealth', hi: 'धन' } },
  { value: 'intuition', label: { en: 'Intuition', hi: 'अंतर्ज्ञान' } },
];
