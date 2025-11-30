/**
 * Bhagyodaya Year Calculator (Rise of Fortune)
 *
 * Bhagyodaya (भाग्योदय) means "Rise of Fortune" or "Dawn of Luck" in Sanskrit.
 * This calculator determines the year(s) when a person's fortune is predicted to rise
 * based on their numerological profile.
 *
 * The calculation considers:
 * 1. Life Path Number (Moolank) - Core life purpose
 * 2. Destiny Number (Bhagyank) - From full name
 * 3. Birth Day Number - Day vibration
 * 4. Personal Year cycles - 9-year recurring patterns
 * 5. Pinnacle cycles - Major life phases
 * 6. Challenge cycles - Karmic lessons
 * 7. Saturn Return cycle (ages 29-30, 58-60)
 * 8. Jupiter Return cycle (every 12 years)
 *
 * Reference: Vedic Numerology traditions, Cheiro's principles
 */

import { BilingualText } from '@/types';
import { reduceToSingleDigit, sumDigits } from '@/lib/utils/numbers';

export interface BhagyodayaResult {
  dateOfBirth: string;
  currentAge: number;
  lifePathNumber: number;
  birthDayNumber: number;
  destinyNumber: number | null; // null if name not provided

  // Primary Bhagyodaya Years
  primaryBhagyodayaAge: number;
  primaryBhagyodayaYear: number;
  primaryBhagyodayaReason: BilingualText;

  // All significant fortune years
  fortuneYears: FortuneYear[];

  // Life phase analysis
  currentLifePhase: LifePhase;
  upcomingPeaks: UpcomingPeak[];

  // Pinnacle cycles
  pinnacles: Pinnacle[];

  // Challenge cycles
  challenges: Challenge[];

  // Planetary cycles
  saturnReturn: SaturnReturn;
  jupiterCycles: JupiterCycle[];

  // Current year analysis
  currentYearNumber: number;
  currentYearFortune: BilingualText;
  currentYearTips: BilingualText[];

  // Overall fortune timeline
  fortuneTimeline: TimelinePhase[];
}

export interface FortuneYear {
  age: number;
  year: number;
  intensity: 'major' | 'moderate' | 'minor';
  type: string;
  reason: BilingualText;
  domains: BilingualText[]; // Areas of life affected
}

export interface LifePhase {
  name: BilingualText;
  ageRange: string;
  currentPhase: number;
  totalPhases: number;
  theme: BilingualText;
  opportunities: BilingualText[];
  challenges: BilingualText[];
}

export interface UpcomingPeak {
  age: number;
  year: number;
  type: BilingualText;
  description: BilingualText;
  preparationTips: BilingualText[];
}

export interface Pinnacle {
  number: number;
  pinnacleNumber: number;
  ageStart: number;
  ageEnd: number;
  theme: BilingualText;
  opportunities: BilingualText;
  isCurrent: boolean;
}

export interface Challenge {
  number: number;
  challengeNumber: number;
  ageStart: number;
  ageEnd: number;
  lesson: BilingualText;
  howToOvercome: BilingualText;
  isCurrent: boolean;
}

export interface SaturnReturn {
  firstReturn: { age: number; year: number };
  secondReturn: { age: number; year: number };
  isInSaturnReturn: boolean;
  saturnReturnPhase: BilingualText | null;
}

export interface JupiterCycle {
  age: number;
  year: number;
  cycleNumber: number;
  theme: BilingualText;
  isPast: boolean;
}

export interface TimelinePhase {
  ageRange: string;
  phase: BilingualText;
  fortuneLevel: number; // 1-10
  keyYears: number[];
  focus: BilingualText;
}

/**
 * Life Path number meanings for fortune calculation
 */
const LIFE_PATH_FORTUNE_AGES: Record<number, number[]> = {
  1: [19, 28, 37, 46, 55, 64], // Leadership peaks
  2: [20, 29, 38, 47, 56, 65], // Partnership harmonies
  3: [21, 30, 39, 48, 57, 66], // Creative breakthroughs
  4: [22, 31, 40, 49, 58, 67], // Stability achievements
  5: [23, 32, 41, 50, 59, 68], // Freedom milestones
  6: [24, 33, 42, 51, 60, 69], // Family/love blessings
  7: [25, 34, 43, 52, 61, 70], // Spiritual awakenings
  8: [26, 35, 44, 53, 62, 71], // Material success peaks
  9: [27, 36, 45, 54, 63, 72], // Completion/humanitarian heights
};

/**
 * Primary Bhagyodaya formula
 * The main fortune year is calculated as: Birth Day Number + Life Path Number
 * This gives the first major fortune age
 */
function calculatePrimaryBhagyodayaAge(birthDayNumber: number, lifePathNumber: number): number {
  // Traditional formula: sum of birth day and life path
  let bhagyodayaAge = birthDayNumber + lifePathNumber;

  // If too young (less than 18), add 9 (one full numerology cycle)
  while (bhagyodayaAge < 18) {
    bhagyodayaAge += 9;
  }

  return bhagyodayaAge;
}

/**
 * Calculate pinnacle cycles
 * Pinnacles are four major life phases based on Life Path Number
 */
function calculatePinnacles(
  day: number,
  month: number,
  year: number,
  lifePathNumber: number,
  currentAge: number
): Pinnacle[] {
  // First pinnacle ends at 36 - Life Path Number
  const firstPinnacleEnd = 36 - lifePathNumber;
  const secondPinnacleEnd = firstPinnacleEnd + 9;
  const thirdPinnacleEnd = secondPinnacleEnd + 9;

  // Calculate pinnacle numbers
  const dayNum = reduceToSingleDigit(day).finalNumber;
  const monthNum = reduceToSingleDigit(month).finalNumber;
  const yearNum = reduceToSingleDigit(year).finalNumber;

  const pinnacle1 = reduceToSingleDigit(dayNum + monthNum).finalNumber;
  const pinnacle2 = reduceToSingleDigit(dayNum + yearNum).finalNumber;
  const pinnacle3 = reduceToSingleDigit(pinnacle1 + pinnacle2).finalNumber;
  const pinnacle4 = reduceToSingleDigit(monthNum + yearNum).finalNumber;

  const pinnacles: Pinnacle[] = [
    {
      number: 1,
      pinnacleNumber: pinnacle1 > 9 ? sumDigits(pinnacle1) : pinnacle1,
      ageStart: 0,
      ageEnd: firstPinnacleEnd,
      theme: getPinnacleTheme(pinnacle1 > 9 ? sumDigits(pinnacle1) : pinnacle1),
      opportunities: getPinnacleOpportunities(pinnacle1 > 9 ? sumDigits(pinnacle1) : pinnacle1),
      isCurrent: currentAge <= firstPinnacleEnd,
    },
    {
      number: 2,
      pinnacleNumber: pinnacle2 > 9 ? sumDigits(pinnacle2) : pinnacle2,
      ageStart: firstPinnacleEnd + 1,
      ageEnd: secondPinnacleEnd,
      theme: getPinnacleTheme(pinnacle2 > 9 ? sumDigits(pinnacle2) : pinnacle2),
      opportunities: getPinnacleOpportunities(pinnacle2 > 9 ? sumDigits(pinnacle2) : pinnacle2),
      isCurrent: currentAge > firstPinnacleEnd && currentAge <= secondPinnacleEnd,
    },
    {
      number: 3,
      pinnacleNumber: pinnacle3 > 9 ? sumDigits(pinnacle3) : pinnacle3,
      ageStart: secondPinnacleEnd + 1,
      ageEnd: thirdPinnacleEnd,
      theme: getPinnacleTheme(pinnacle3 > 9 ? sumDigits(pinnacle3) : pinnacle3),
      opportunities: getPinnacleOpportunities(pinnacle3 > 9 ? sumDigits(pinnacle3) : pinnacle3),
      isCurrent: currentAge > secondPinnacleEnd && currentAge <= thirdPinnacleEnd,
    },
    {
      number: 4,
      pinnacleNumber: pinnacle4 > 9 ? sumDigits(pinnacle4) : pinnacle4,
      ageStart: thirdPinnacleEnd + 1,
      ageEnd: 100,
      theme: getPinnacleTheme(pinnacle4 > 9 ? sumDigits(pinnacle4) : pinnacle4),
      opportunities: getPinnacleOpportunities(pinnacle4 > 9 ? sumDigits(pinnacle4) : pinnacle4),
      isCurrent: currentAge > thirdPinnacleEnd,
    },
  ];

  return pinnacles;
}

/**
 * Calculate challenge cycles
 */
function calculateChallenges(
  day: number,
  month: number,
  year: number,
  lifePathNumber: number,
  currentAge: number
): Challenge[] {
  const firstPinnacleEnd = 36 - lifePathNumber;
  const secondPinnacleEnd = firstPinnacleEnd + 9;
  const thirdPinnacleEnd = secondPinnacleEnd + 9;

  const dayNum = reduceToSingleDigit(day).finalNumber;
  const monthNum = reduceToSingleDigit(month).finalNumber;
  const yearNum = reduceToSingleDigit(year).finalNumber;

  const challenge1 = Math.abs(dayNum - monthNum);
  const challenge2 = Math.abs(dayNum - yearNum);
  const challenge3 = Math.abs(challenge1 - challenge2);
  const challenge4 = Math.abs(monthNum - yearNum);

  const challenges: Challenge[] = [
    {
      number: 1,
      challengeNumber: challenge1 > 9 ? sumDigits(challenge1) : challenge1,
      ageStart: 0,
      ageEnd: firstPinnacleEnd,
      lesson: getChallengeLesson(challenge1 > 9 ? sumDigits(challenge1) : challenge1),
      howToOvercome: getChallengeOvercome(challenge1 > 9 ? sumDigits(challenge1) : challenge1),
      isCurrent: currentAge <= firstPinnacleEnd,
    },
    {
      number: 2,
      challengeNumber: challenge2 > 9 ? sumDigits(challenge2) : challenge2,
      ageStart: firstPinnacleEnd + 1,
      ageEnd: secondPinnacleEnd,
      lesson: getChallengeLesson(challenge2 > 9 ? sumDigits(challenge2) : challenge2),
      howToOvercome: getChallengeOvercome(challenge2 > 9 ? sumDigits(challenge2) : challenge2),
      isCurrent: currentAge > firstPinnacleEnd && currentAge <= secondPinnacleEnd,
    },
    {
      number: 3,
      challengeNumber: challenge3 > 9 ? sumDigits(challenge3) : challenge3,
      ageStart: secondPinnacleEnd + 1,
      ageEnd: thirdPinnacleEnd,
      lesson: getChallengeLesson(challenge3 > 9 ? sumDigits(challenge3) : challenge3),
      howToOvercome: getChallengeOvercome(challenge3 > 9 ? sumDigits(challenge3) : challenge3),
      isCurrent: currentAge > secondPinnacleEnd && currentAge <= thirdPinnacleEnd,
    },
    {
      number: 4,
      challengeNumber: challenge4 > 9 ? sumDigits(challenge4) : challenge4,
      ageStart: thirdPinnacleEnd + 1,
      ageEnd: 100,
      lesson: getChallengeLesson(challenge4 > 9 ? sumDigits(challenge4) : challenge4),
      howToOvercome: getChallengeOvercome(challenge4 > 9 ? sumDigits(challenge4) : challenge4),
      isCurrent: currentAge > thirdPinnacleEnd,
    },
  ];

  return challenges;
}

/**
 * Pinnacle themes by number
 */
function getPinnacleTheme(num: number): BilingualText {
  const themes: Record<number, BilingualText> = {
    0: { en: 'Universal Potential', hi: 'सार्वभौमिक संभावना' },
    1: { en: 'Independence & Leadership', hi: 'स्वतंत्रता और नेतृत्व' },
    2: { en: 'Cooperation & Patience', hi: 'सहयोग और धैर्य' },
    3: { en: 'Creative Expression', hi: 'रचनात्मक अभिव्यक्ति' },
    4: { en: 'Building Foundations', hi: 'नींव निर्माण' },
    5: { en: 'Freedom & Change', hi: 'स्वतंत्रता और परिवर्तन' },
    6: { en: 'Love & Responsibility', hi: 'प्रेम और जिम्मेदारी' },
    7: { en: 'Spiritual Growth', hi: 'आध्यात्मिक विकास' },
    8: { en: 'Material Achievement', hi: 'भौतिक उपलब्धि' },
    9: { en: 'Humanitarianism', hi: 'मानवतावाद' },
  };
  return themes[num] || themes[9];
}

function getPinnacleOpportunities(num: number): BilingualText {
  const opportunities: Record<number, BilingualText> = {
    0: { en: 'All possibilities open - choose your path wisely', hi: 'सभी संभावनाएं खुली हैं - अपना मार्ग बुद्धिमानी से चुनें' },
    1: { en: 'Start new ventures, take initiative, be a pioneer', hi: 'नए उद्यम शुरू करें, पहल करें, अग्रणी बनें' },
    2: { en: 'Form partnerships, develop patience, nurture relationships', hi: 'साझेदारी बनाएं, धैर्य विकसित करें, रिश्ते पोषित करें' },
    3: { en: 'Express yourself, pursue arts, socialize widely', hi: 'खुद को व्यक्त करें, कला का अनुसरण करें, व्यापक रूप से मेलजोल करें' },
    4: { en: 'Build stability, work hard, establish security', hi: 'स्थिरता बनाएं, कड़ी मेहनत करें, सुरक्षा स्थापित करें' },
    5: { en: 'Embrace change, travel, learn new skills', hi: 'परिवर्तन अपनाएं, यात्रा करें, नए कौशल सीखें' },
    6: { en: 'Focus on family, home, love relationships', hi: 'परिवार, घर, प्रेम संबंधों पर ध्यान दें' },
    7: { en: 'Study, meditate, develop intuition', hi: 'अध्ययन करें, ध्यान करें, अंतर्ज्ञान विकसित करें' },
    8: { en: 'Pursue wealth, business success, leadership roles', hi: 'धन, व्यापारिक सफलता, नेतृत्व भूमिकाओं का पीछा करें' },
    9: { en: 'Serve others, complete karmic lessons, teach', hi: 'दूसरों की सेवा करें, कार्मिक पाठ पूरे करें, सिखाएं' },
  };
  return opportunities[num] || opportunities[9];
}

function getChallengeLesson(num: number): BilingualText {
  const lessons: Record<number, BilingualText> = {
    0: { en: 'Master all lessons - the hardest path', hi: 'सभी पाठ सीखें - सबसे कठिन मार्ग' },
    1: { en: 'Overcome self-doubt and dependency', hi: 'आत्म-संदेह और निर्भरता पर काबू पाएं' },
    2: { en: 'Balance sensitivity with strength', hi: 'संवेदनशीलता को ताकत के साथ संतुलित करें' },
    3: { en: 'Express feelings, avoid superficiality', hi: 'भावनाओं को व्यक्त करें, सतहीपन से बचें' },
    4: { en: 'Learn discipline and organization', hi: 'अनुशासन और संगठन सीखें' },
    5: { en: 'Handle change without fear', hi: 'बिना डर के परिवर्तन संभालें' },
    6: { en: 'Accept responsibility without martyrdom', hi: 'शहीद बनें बिना जिम्मेदारी स्वीकारें' },
    7: { en: 'Trust intuition over logic alone', hi: 'केवल तर्क पर नहीं, अंतर्ज्ञान पर भरोसा करें' },
    8: { en: 'Use power ethically, avoid greed', hi: 'शक्ति का नैतिक उपयोग करें, लालच से बचें' },
    9: { en: 'Release attachments, forgive past hurts', hi: 'आसक्ति छोड़ें, पुरानी चोटों को माफ करें' },
  };
  return lessons[num] || lessons[9];
}

function getChallengeOvercome(num: number): BilingualText {
  const overcome: Record<number, BilingualText> = {
    0: { en: 'Embrace all experiences as teachers', hi: 'सभी अनुभवों को शिक्षक के रूप में स्वीकारें' },
    1: { en: 'Take small leadership steps daily', hi: 'रोजाना छोटे नेतृत्व कदम उठाएं' },
    2: { en: 'Practice assertiveness while staying kind', hi: 'दयालु रहते हुए दृढ़ता का अभ्यास करें' },
    3: { en: 'Journal feelings, create something daily', hi: 'भावनाओं को लिखें, रोजाना कुछ बनाएं' },
    4: { en: 'Create routines, finish what you start', hi: 'दिनचर्या बनाएं, जो शुरू करें उसे पूरा करें' },
    5: { en: 'Take calculated risks, stay adaptable', hi: 'सोच-समझकर जोखिम लें, अनुकूल रहें' },
    6: { en: 'Set boundaries while serving others', hi: 'दूसरों की सेवा करते हुए सीमाएं निर्धारित करें' },
    7: { en: 'Meditate daily, trust your inner voice', hi: 'रोजाना ध्यान करें, अपनी आंतरिक आवाज पर भरोसा करें' },
    8: { en: 'Share wealth, mentor others', hi: 'धन साझा करें, दूसरों का मार्गदर्शन करें' },
    9: { en: 'Practice letting go, focus on giving', hi: 'छोड़ना सीखें, देने पर ध्यान दें' },
  };
  return overcome[num] || overcome[9];
}

/**
 * Calculate Saturn Return periods (significant karmic milestones)
 */
function calculateSaturnReturn(
  birthYear: number,
  currentAge: number
): SaturnReturn {
  // Saturn return happens approximately every 29.5 years
  const firstReturnAge = 29;
  const secondReturnAge = 58;

  const currentYear = new Date().getFullYear();
  const firstReturnYear = birthYear + firstReturnAge;
  const secondReturnYear = birthYear + secondReturnAge;

  // Check if currently in Saturn Return (within 2 years)
  const isInFirstReturn = currentAge >= 28 && currentAge <= 31;
  const isInSecondReturn = currentAge >= 57 && currentAge <= 60;

  let phase: BilingualText | null = null;
  if (isInFirstReturn) {
    phase = {
      en: 'First Saturn Return: Major life restructuring. Career changes, relationship reassessments, and finding your true path.',
      hi: 'प्रथम शनि वापसी: जीवन का बड़ा पुनर्गठन। करियर परिवर्तन, रिश्तों का पुनर्मूल्यांकन, और अपना सच्चा मार्ग खोजना।',
    };
  } else if (isInSecondReturn) {
    phase = {
      en: 'Second Saturn Return: Life review and legacy building. Wisdom sharing, simplifying life, focusing on what truly matters.',
      hi: 'द्वितीय शनि वापसी: जीवन समीक्षा और विरासत निर्माण। ज्ञान साझा करना, जीवन को सरल बनाना, जो वास्तव में मायने रखता है उस पर ध्यान।',
    };
  }

  return {
    firstReturn: { age: firstReturnAge, year: firstReturnYear },
    secondReturn: { age: secondReturnAge, year: secondReturnYear },
    isInSaturnReturn: isInFirstReturn || isInSecondReturn,
    saturnReturnPhase: phase,
  };
}

/**
 * Calculate Jupiter cycles (expansion periods every 12 years)
 */
function calculateJupiterCycles(birthYear: number, currentAge: number): JupiterCycle[] {
  const cycles: JupiterCycle[] = [];
  const jupiterThemes: BilingualText[] = [
    { en: 'Seeds of Fortune: Early luck patterns established', hi: 'भाग्य के बीज: प्रारंभिक भाग्य पैटर्न स्थापित' },
    { en: 'Growth Phase: Education and skill expansion', hi: 'विकास चरण: शिक्षा और कौशल विस्तार' },
    { en: 'Opportunity Peak: Career breakthrough possibilities', hi: 'अवसर शिखर: करियर सफलता की संभावनाएं' },
    { en: 'Wisdom Integration: Life lessons become assets', hi: 'ज्ञान एकीकरण: जीवन के पाठ संपत्ति बनते हैं' },
    { en: 'Legacy Building: Mentoring and wealth sharing', hi: 'विरासत निर्माण: मार्गदर्शन और धन साझाकरण' },
    { en: 'Spiritual Expansion: Inner growth and peace', hi: 'आध्यात्मिक विस्तार: आंतरिक विकास और शांति' },
    { en: 'Universal Wisdom: Transcendence and service', hi: 'सार्वभौमिक ज्ञान: उत्थान और सेवा' },
  ];

  for (let i = 1; i <= 7; i++) {
    const cycleAge = i * 12;
    cycles.push({
      age: cycleAge,
      year: birthYear + cycleAge,
      cycleNumber: i,
      theme: jupiterThemes[i - 1] || jupiterThemes[6],
      isPast: cycleAge < currentAge,
    });
  }

  return cycles;
}

/**
 * Calculate all fortune years
 */
function calculateFortuneYears(
  day: number,
  month: number,
  year: number,
  lifePathNumber: number,
  birthDayNumber: number,
  primaryBhagyodayaAge: number,
  currentAge: number
): FortuneYear[] {
  const fortuneYears: FortuneYear[] = [];
  const birthYear = year;

  // Add primary Bhagyodaya year
  fortuneYears.push({
    age: primaryBhagyodayaAge,
    year: birthYear + primaryBhagyodayaAge,
    intensity: 'major',
    type: 'Primary Bhagyodaya',
    reason: {
      en: `Your primary fortune year - the sum of your Birth Day (${birthDayNumber}) and Life Path (${lifePathNumber})`,
      hi: `आपका प्राथमिक भाग्योदय वर्ष - जन्म दिन (${birthDayNumber}) और जीवन पथ (${lifePathNumber}) का योग`,
    },
    domains: [
      { en: 'Overall life elevation', hi: 'समग्र जीवन उन्नति' },
      { en: 'New opportunities manifest', hi: 'नए अवसर प्रकट होते हैं' },
    ],
  });

  // Add Life Path specific fortune ages
  const lpFortuneAges = LIFE_PATH_FORTUNE_AGES[lifePathNumber] || [];
  lpFortuneAges.forEach((age, index) => {
    if (!fortuneYears.some((f) => f.age === age)) {
      fortuneYears.push({
        age,
        year: birthYear + age,
        intensity: index < 2 ? 'major' : 'moderate',
        type: 'Life Path Resonance',
        reason: {
          en: `Your Life Path ${lifePathNumber} resonates strongly at age ${age}`,
          hi: `आपका जीवन पथ ${lifePathNumber} उम्र ${age} पर मजबूती से गूंजता है`,
        },
        domains: getDomainsForNumber(lifePathNumber),
      });
    }
  });

  // Add Personal Year peaks (when personal year matches life path or birth day)
  for (let age = currentAge; age <= currentAge + 20; age++) {
    const yearToCheck = birthYear + age;
    const personalYear = calculatePersonalYear(day, month, yearToCheck);

    if (personalYear === lifePathNumber || personalYear === birthDayNumber) {
      if (!fortuneYears.some((f) => f.age === age)) {
        fortuneYears.push({
          age,
          year: yearToCheck,
          intensity: 'moderate',
          type: 'Personal Year Match',
          reason: {
            en: `Personal Year ${personalYear} matches your core number`,
            hi: `व्यक्तिगत वर्ष ${personalYear} आपकी मूल संख्या से मेल खाता है`,
          },
          domains: [
            { en: 'Amplified personal energy', hi: 'प्रवर्धित व्यक्तिगत ऊर्जा' },
            { en: 'Aligned opportunities', hi: 'संरेखित अवसर' },
          ],
        });
      }
    }

    // Personal Year 1 (new beginnings) and 8 (achievement) are always significant
    if (personalYear === 1 || personalYear === 8) {
      if (!fortuneYears.some((f) => f.age === age)) {
        fortuneYears.push({
          age,
          year: yearToCheck,
          intensity: 'minor',
          type: personalYear === 1 ? 'New Cycle Start' : 'Achievement Year',
          reason: personalYear === 1
            ? { en: 'Start of a new 9-year cycle', hi: 'नए 9-वर्षीय चक्र की शुरुआत' }
            : { en: 'Peak achievement energy', hi: 'शिखर उपलब्धि ऊर्जा' },
          domains: personalYear === 1
            ? [
                { en: 'Fresh starts', hi: 'नई शुरुआत' },
                { en: 'Independence', hi: 'स्वतंत्रता' },
              ]
            : [
                { en: 'Career success', hi: 'करियर सफलता' },
                { en: 'Financial gains', hi: 'वित्तीय लाभ' },
              ],
        });
      }
    }
  }

  // Add Jupiter cycle years
  [12, 24, 36, 48, 60].forEach((age) => {
    if (!fortuneYears.some((f) => f.age === age)) {
      fortuneYears.push({
        age,
        year: birthYear + age,
        intensity: 'moderate',
        type: 'Jupiter Expansion',
        reason: {
          en: `Jupiter returns to birth position - expansion and luck`,
          hi: `बृहस्पति जन्म स्थिति पर लौटता है - विस्तार और भाग्य`,
        },
        domains: [
          { en: 'Growth opportunities', hi: 'विकास के अवसर' },
          { en: 'Wisdom and luck', hi: 'ज्ञान और भाग्य' },
        ],
      });
    }
  });

  // Sort by age
  fortuneYears.sort((a, b) => a.age - b.age);

  return fortuneYears;
}

function getDomainsForNumber(num: number): BilingualText[] {
  const domains: Record<number, BilingualText[]> = {
    1: [
      { en: 'Leadership', hi: 'नेतृत्व' },
      { en: 'New ventures', hi: 'नए उद्यम' },
    ],
    2: [
      { en: 'Partnerships', hi: 'साझेदारी' },
      { en: 'Relationships', hi: 'संबंध' },
    ],
    3: [
      { en: 'Creativity', hi: 'रचनात्मकता' },
      { en: 'Communication', hi: 'संचार' },
    ],
    4: [
      { en: 'Stability', hi: 'स्थिरता' },
      { en: 'Property', hi: 'संपत्ति' },
    ],
    5: [
      { en: 'Travel', hi: 'यात्रा' },
      { en: 'Freedom', hi: 'स्वतंत्रता' },
    ],
    6: [
      { en: 'Family', hi: 'परिवार' },
      { en: 'Love', hi: 'प्रेम' },
    ],
    7: [
      { en: 'Spirituality', hi: 'आध्यात्मिकता' },
      { en: 'Research', hi: 'शोध' },
    ],
    8: [
      { en: 'Wealth', hi: 'धन' },
      { en: 'Power', hi: 'शक्ति' },
    ],
    9: [
      { en: 'Completion', hi: 'पूर्णता' },
      { en: 'Philanthropy', hi: 'परोपकार' },
    ],
  };
  return domains[num] || domains[1];
}

/**
 * Calculate personal year number
 */
function calculatePersonalYear(birthDay: number, birthMonth: number, targetYear: number): number {
  const sum = sumDigits(birthDay) + sumDigits(birthMonth) + sumDigits(targetYear);
  const reduced = reduceToSingleDigit(sum);
  return reduced.finalNumber > 9 ? sumDigits(reduced.finalNumber) : reduced.finalNumber;
}

/**
 * Get current life phase
 */
function getCurrentLifePhase(currentAge: number, lifePathNumber: number): LifePhase {
  const phases: Array<{
    maxAge: number;
    name: BilingualText;
    theme: BilingualText;
    opportunities: BilingualText[];
    challenges: BilingualText[];
  }> = [
    {
      maxAge: 27,
      name: { en: 'Foundation Phase', hi: 'नींव चरण' },
      theme: { en: 'Learning and establishing identity', hi: 'सीखना और पहचान स्थापित करना' },
      opportunities: [
        { en: 'Education and skill building', hi: 'शिक्षा और कौशल निर्माण' },
        { en: 'Discovering true passions', hi: 'सच्चे जुनून की खोज' },
      ],
      challenges: [
        { en: 'Finding direction', hi: 'दिशा खोजना' },
        { en: 'Building confidence', hi: 'आत्मविश्वास निर्माण' },
      ],
    },
    {
      maxAge: 36,
      name: { en: 'Growth Phase', hi: 'विकास चरण' },
      theme: { en: 'Career building and relationships', hi: 'करियर निर्माण और संबंध' },
      opportunities: [
        { en: 'Career advancement', hi: 'करियर उन्नति' },
        { en: 'Family formation', hi: 'परिवार निर्माण' },
      ],
      challenges: [
        { en: 'Work-life balance', hi: 'कार्य-जीवन संतुलन' },
        { en: 'Financial stability', hi: 'वित्तीय स्थिरता' },
      ],
    },
    {
      maxAge: 45,
      name: { en: 'Achievement Phase', hi: 'उपलब्धि चरण' },
      theme: { en: 'Peak productivity and influence', hi: 'शिखर उत्पादकता और प्रभाव' },
      opportunities: [
        { en: 'Leadership roles', hi: 'नेतृत्व भूमिकाएं' },
        { en: 'Major accomplishments', hi: 'प्रमुख उपलब्धियां' },
      ],
      challenges: [
        { en: 'Managing success', hi: 'सफलता का प्रबंधन' },
        { en: 'Health maintenance', hi: 'स्वास्थ्य रखरखाव' },
      ],
    },
    {
      maxAge: 54,
      name: { en: 'Mastery Phase', hi: 'निपुणता चरण' },
      theme: { en: 'Expertise and wisdom sharing', hi: 'विशेषज्ञता और ज्ञान साझाकरण' },
      opportunities: [
        { en: 'Mentoring others', hi: 'दूसरों का मार्गदर्शन' },
        { en: 'Legacy projects', hi: 'विरासत परियोजनाएं' },
      ],
      challenges: [
        { en: 'Staying relevant', hi: 'प्रासंगिक रहना' },
        { en: 'Adapting to change', hi: 'परिवर्तन के अनुकूल होना' },
      ],
    },
    {
      maxAge: 63,
      name: { en: 'Wisdom Phase', hi: 'ज्ञान चरण' },
      theme: { en: 'Integration and contribution', hi: 'एकीकरण और योगदान' },
      opportunities: [
        { en: 'Consulting and advising', hi: 'परामर्श और सलाह' },
        { en: 'Community leadership', hi: 'सामुदायिक नेतृत्व' },
      ],
      challenges: [
        { en: 'Generational differences', hi: 'पीढ़ीगत अंतर' },
        { en: 'Physical limitations', hi: 'शारीरिक सीमाएं' },
      ],
    },
    {
      maxAge: 100,
      name: { en: 'Fulfillment Phase', hi: 'पूर्णता चरण' },
      theme: { en: 'Inner peace and legacy', hi: 'आंतरिक शांति और विरासत' },
      opportunities: [
        { en: 'Spiritual growth', hi: 'आध्यात्मिक विकास' },
        { en: 'Family bonding', hi: 'पारिवारिक जुड़ाव' },
      ],
      challenges: [
        { en: 'Health management', hi: 'स्वास्थ्य प्रबंधन' },
        { en: 'Finding purpose', hi: 'उद्देश्य खोजना' },
      ],
    },
  ];

  let currentPhaseIndex = 0;
  for (let i = 0; i < phases.length; i++) {
    if (currentAge <= phases[i].maxAge) {
      currentPhaseIndex = i;
      break;
    }
  }

  const phase = phases[currentPhaseIndex];
  const prevMax = currentPhaseIndex > 0 ? phases[currentPhaseIndex - 1].maxAge : 0;

  return {
    name: phase.name,
    ageRange: `${prevMax + 1}-${phase.maxAge}`,
    currentPhase: currentPhaseIndex + 1,
    totalPhases: phases.length,
    theme: phase.theme,
    opportunities: phase.opportunities,
    challenges: phase.challenges,
  };
}

/**
 * Get upcoming fortune peaks
 */
function getUpcomingPeaks(
  fortuneYears: FortuneYear[],
  currentAge: number
): UpcomingPeak[] {
  const upcoming = fortuneYears
    .filter((f) => f.age > currentAge)
    .slice(0, 5)
    .map((f) => ({
      age: f.age,
      year: f.year,
      type: { en: f.type, hi: translateType(f.type) },
      description: f.reason,
      preparationTips: getPreparationTips(f.type),
    }));

  return upcoming;
}

function translateType(type: string): string {
  const translations: Record<string, string> = {
    'Primary Bhagyodaya': 'प्राथमिक भाग्योदय',
    'Life Path Resonance': 'जीवन पथ अनुनाद',
    'Personal Year Match': 'व्यक्तिगत वर्ष मिलान',
    'New Cycle Start': 'नया चक्र शुरू',
    'Achievement Year': 'उपलब्धि वर्ष',
    'Jupiter Expansion': 'बृहस्पति विस्तार',
  };
  return translations[type] || type;
}

function getPreparationTips(type: string): BilingualText[] {
  const tips: Record<string, BilingualText[]> = {
    'Primary Bhagyodaya': [
      { en: 'Save and invest wisely before this year', hi: 'इस वर्ष से पहले बुद्धिमानी से बचत और निवेश करें' },
      { en: 'Build skills that will be valuable', hi: 'मूल्यवान कौशल बनाएं' },
      { en: 'Strengthen your network', hi: 'अपने नेटवर्क को मजबूत करें' },
    ],
    'Life Path Resonance': [
      { en: 'Align actions with your life purpose', hi: 'अपने जीवन उद्देश्य के साथ कार्यों को संरेखित करें' },
      { en: 'Take bold steps in your true direction', hi: 'अपनी सच्ची दिशा में साहसिक कदम उठाएं' },
    ],
    'Personal Year Match': [
      { en: 'Be ready for amplified energy', hi: 'प्रवर्धित ऊर्जा के लिए तैयार रहें' },
      { en: 'Start projects that matter', hi: 'महत्वपूर्ण परियोजनाएं शुरू करें' },
    ],
    'New Cycle Start': [
      { en: 'Clear old baggage before this year', hi: 'इस वर्ष से पहले पुराना बोझ साफ करें' },
      { en: 'Plan major initiatives', hi: 'प्रमुख पहलों की योजना बनाएं' },
    ],
    'Achievement Year': [
      { en: 'Position yourself for recognition', hi: 'मान्यता के लिए खुद को स्थापित करें' },
      { en: 'Take on leadership roles', hi: 'नेतृत्व भूमिकाएं लें' },
    ],
    'Jupiter Expansion': [
      { en: 'Be open to new opportunities', hi: 'नए अवसरों के लिए खुले रहें' },
      { en: 'Expand your horizons', hi: 'अपने क्षितिज का विस्तार करें' },
    ],
  };
  return tips[type] || tips['Primary Bhagyodaya'];
}

/**
 * Get current year fortune analysis
 */
function getCurrentYearFortune(personalYear: number): BilingualText {
  const fortunes: Record<number, BilingualText> = {
    1: {
      en: 'Excellent year for new beginnings. Your initiatives will receive cosmic support. Take bold action.',
      hi: 'नई शुरुआत के लिए उत्कृष्ट वर्ष। आपकी पहलों को ब्रह्मांडीय समर्थन मिलेगा। साहसिक कार्रवाई करें।',
    },
    2: {
      en: 'Focus on partnerships and patience. Behind-the-scenes work pays off. Trust the process.',
      hi: 'साझेदारी और धैर्य पर ध्यान दें। पर्दे के पीछे का काम फल देता है। प्रक्रिया पर भरोसा करें।',
    },
    3: {
      en: 'Your creativity is amplified. Social opportunities abound. Express yourself fully.',
      hi: 'आपकी रचनात्मकता बढ़ी हुई है। सामाजिक अवसर भरपूर हैं। खुद को पूरी तरह व्यक्त करें।',
    },
    4: {
      en: 'Build solid foundations. Hard work creates lasting results. Focus on structure.',
      hi: 'ठोस नींव बनाएं। कड़ी मेहनत स्थायी परिणाम बनाती है। संरचना पर ध्यान दें।',
    },
    5: {
      en: 'Change is your ally. Travel, learn new things, embrace freedom. Exciting shifts ahead.',
      hi: 'परिवर्तन आपका सहयोगी है। यात्रा करें, नई चीजें सीखें, स्वतंत्रता अपनाएं। रोमांचक बदलाव आगे।',
    },
    6: {
      en: 'Family and love take center stage. Domestic harmony brings fortune. Serve others.',
      hi: 'परिवार और प्रेम केंद्र में आते हैं। घरेलू सामंजस्य भाग्य लाता है। दूसरों की सेवा करें।',
    },
    7: {
      en: 'Inner growth brings outer fortune. Study, meditate, trust intuition. Spiritual breakthroughs.',
      hi: 'आंतरिक विकास बाहरी भाग्य लाता है। अध्ययन करें, ध्यान करें, अंतर्ज्ञान पर भरोसा करें। आध्यात्मिक सफलताएं।',
    },
    8: {
      en: 'Peak year for material success. Business thrives, recognition comes. Use power wisely.',
      hi: 'भौतिक सफलता के लिए शिखर वर्ष। व्यापार फलता-फूलता है, मान्यता मिलती है। शक्ति का बुद्धिमानी से उपयोग करें।',
    },
    9: {
      en: 'Completion and clearing. Release what no longer serves. Prepare for new cycle.',
      hi: 'पूर्णता और सफाई। जो काम नहीं आता उसे छोड़ें। नए चक्र की तैयारी करें।',
    },
  };
  return fortunes[personalYear] || fortunes[1];
}

function getCurrentYearTips(personalYear: number): BilingualText[] {
  const tips: Record<number, BilingualText[]> = {
    1: [
      { en: 'Start that project you\'ve been postponing', hi: 'वह परियोजना शुरू करें जो आप टाल रहे थे' },
      { en: 'Assert your independence', hi: 'अपनी स्वतंत्रता का दावा करें' },
      { en: 'Be a pioneer, not a follower', hi: 'अनुयायी नहीं, अग्रणी बनें' },
    ],
    2: [
      { en: 'Collaborate rather than compete', hi: 'प्रतिस्पर्धा के बजाय सहयोग करें' },
      { en: 'Pay attention to details', hi: 'विवरणों पर ध्यान दें' },
      { en: 'Nurture important relationships', hi: 'महत्वपूर्ण रिश्तों को पोषित करें' },
    ],
    3: [
      { en: 'Join social groups and networks', hi: 'सामाजिक समूहों और नेटवर्क से जुड़ें' },
      { en: 'Express creativity through art or writing', hi: 'कला या लेखन के माध्यम से रचनात्मकता व्यक्त करें' },
      { en: 'Speak up and share ideas', hi: 'बोलें और विचार साझा करें' },
    ],
    4: [
      { en: 'Create routines and stick to them', hi: 'दिनचर्या बनाएं और उनका पालन करें' },
      { en: 'Invest in property or long-term assets', hi: 'संपत्ति या दीर्घकालिक संपत्तियों में निवेश करें' },
      { en: 'Focus on health and fitness', hi: 'स्वास्थ्य और फिटनेस पर ध्यान दें' },
    ],
    5: [
      { en: 'Take that trip you\'ve been dreaming of', hi: 'वह यात्रा करें जिसका आप सपना देख रहे थे' },
      { en: 'Learn a new skill or language', hi: 'नया कौशल या भाषा सीखें' },
      { en: 'Embrace unexpected changes', hi: 'अप्रत्याशित परिवर्तनों को अपनाएं' },
    ],
    6: [
      { en: 'Spend quality time with family', hi: 'परिवार के साथ गुणवत्तापूर्ण समय बिताएं' },
      { en: 'Beautify your home', hi: 'अपने घर को सुंदर बनाएं' },
      { en: 'Commit to love relationships', hi: 'प्रेम संबंधों के प्रति प्रतिबद्ध रहें' },
    ],
    7: [
      { en: 'Develop a meditation practice', hi: 'ध्यान अभ्यास विकसित करें' },
      { en: 'Study philosophy or spirituality', hi: 'दर्शन या आध्यात्मिकता का अध्ययन करें' },
      { en: 'Spend time in nature alone', hi: 'प्रकृति में अकेले समय बिताएं' },
    ],
    8: [
      { en: 'Pursue business opportunities aggressively', hi: 'व्यापार के अवसरों का आक्रामक रूप से पीछा करें' },
      { en: 'Negotiate for higher position or salary', hi: 'उच्च पद या वेतन के लिए बातचीत करें' },
      { en: 'Invest wisely for wealth growth', hi: 'धन वृद्धि के लिए बुद्धिमानी से निवेश करें' },
    ],
    9: [
      { en: 'Forgive and release past hurts', hi: 'पुरानी चोटों को माफ करें और छोड़ें' },
      { en: 'Give back to community', hi: 'समुदाय को वापस दें' },
      { en: 'Complete unfinished projects', hi: 'अधूरी परियोजनाओं को पूरा करें' },
    ],
  };
  return tips[personalYear] || tips[1];
}

/**
 * Generate fortune timeline
 */
function generateFortuneTimeline(
  fortuneYears: FortuneYear[],
  currentAge: number,
  lifePathNumber: number
): TimelinePhase[] {
  const phases: TimelinePhase[] = [];
  const ageRanges = [
    [0, 18],
    [19, 27],
    [28, 36],
    [37, 45],
    [46, 54],
    [55, 63],
    [64, 72],
    [73, 90],
  ];

  const phaseNames: BilingualText[] = [
    { en: 'Childhood & Youth', hi: 'बचपन और युवावस्था' },
    { en: 'Early Adulthood', hi: 'प्रारंभिक वयस्कता' },
    { en: 'Career Building', hi: 'करियर निर्माण' },
    { en: 'Peak Performance', hi: 'शिखर प्रदर्शन' },
    { en: 'Mastery', hi: 'निपुणता' },
    { en: 'Wisdom Years', hi: 'ज्ञान के वर्ष' },
    { en: 'Legacy Phase', hi: 'विरासत चरण' },
    { en: 'Golden Years', hi: 'सुनहरे वर्ष' },
  ];

  const focusAreas: BilingualText[] = [
    { en: 'Learning and development', hi: 'सीखना और विकास' },
    { en: 'Finding direction', hi: 'दिशा खोजना' },
    { en: 'Building foundations', hi: 'नींव निर्माण' },
    { en: 'Achieving goals', hi: 'लक्ष्य प्राप्ति' },
    { en: 'Sharing expertise', hi: 'विशेषज्ञता साझाकरण' },
    { en: 'Mentoring others', hi: 'दूसरों का मार्गदर्शन' },
    { en: 'Creating legacy', hi: 'विरासत निर्माण' },
    { en: 'Inner peace', hi: 'आंतरिक शांति' },
  ];

  ageRanges.forEach(([start, end], index) => {
    const yearsInRange = fortuneYears.filter((f) => f.age >= start && f.age <= end);
    const majorYears = yearsInRange.filter((f) => f.intensity === 'major');

    // Calculate fortune level based on number of significant years
    let fortuneLevel = 5; // base
    fortuneLevel += majorYears.length * 2;
    fortuneLevel += yearsInRange.filter((f) => f.intensity === 'moderate').length;
    fortuneLevel = Math.min(10, fortuneLevel);

    phases.push({
      ageRange: `${start}-${end}`,
      phase: phaseNames[index] || phaseNames[7],
      fortuneLevel,
      keyYears: yearsInRange.map((y) => y.age),
      focus: focusAreas[index] || focusAreas[7],
    });
  });

  return phases;
}

/**
 * Calculate Destiny Number from name (optional)
 */
function calculateDestinyFromName(name: string): number | null {
  if (!name || name.trim().length === 0) return null;

  const pythagoreanMap: Record<string, number> = {
    a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9,
    j: 1, k: 2, l: 3, m: 4, n: 5, o: 6, p: 7, q: 8, r: 9,
    s: 1, t: 2, u: 3, v: 4, w: 5, x: 6, y: 7, z: 8,
  };

  const cleanName = name.toLowerCase().replace(/[^a-z]/g, '');
  let sum = 0;
  for (const char of cleanName) {
    sum += pythagoreanMap[char] || 0;
  }

  const reduced = reduceToSingleDigit(sum);
  return reduced.finalNumber > 9 ? sumDigits(reduced.finalNumber) : reduced.finalNumber;
}

/**
 * Main calculation function
 */
export function calculateBhagyodaya(
  day: number,
  month: number,
  year: number,
  name?: string
): BhagyodayaResult {
  // Current date for age calculation
  const today = new Date();
  const currentYear = today.getFullYear();
  const birthDate = new Date(year, month - 1, day);
  let currentAge = currentYear - year;
  if (today < new Date(currentYear, month - 1, day)) {
    currentAge--;
  }

  // Calculate core numbers
  const lifePathSum = sumDigits(day) + sumDigits(month) + sumDigits(year);
  const lifePathReduction = reduceToSingleDigit(lifePathSum);
  const lifePathNumber = lifePathReduction.finalNumber > 9
    ? sumDigits(lifePathReduction.finalNumber)
    : lifePathReduction.finalNumber;

  const birthDayReduction = reduceToSingleDigit(day);
  const birthDayNumber = birthDayReduction.finalNumber > 9
    ? sumDigits(birthDayReduction.finalNumber)
    : birthDayReduction.finalNumber;

  const destinyNumber = name ? calculateDestinyFromName(name) : null;

  // Calculate primary Bhagyodaya
  const primaryBhagyodayaAge = calculatePrimaryBhagyodayaAge(birthDayNumber, lifePathNumber);
  const primaryBhagyodayaYear = year + primaryBhagyodayaAge;

  // Calculate all fortune years
  const fortuneYears = calculateFortuneYears(
    day,
    month,
    year,
    lifePathNumber,
    birthDayNumber,
    primaryBhagyodayaAge,
    currentAge
  );

  // Pinnacles and Challenges
  const pinnacles = calculatePinnacles(day, month, year, lifePathNumber, currentAge);
  const challenges = calculateChallenges(day, month, year, lifePathNumber, currentAge);

  // Planetary cycles
  const saturnReturn = calculateSaturnReturn(year, currentAge);
  const jupiterCycles = calculateJupiterCycles(year, currentAge);

  // Current year analysis
  const currentYearNumber = calculatePersonalYear(day, month, currentYear);

  // Life phase
  const currentLifePhase = getCurrentLifePhase(currentAge, lifePathNumber);

  // Upcoming peaks
  const upcomingPeaks = getUpcomingPeaks(fortuneYears, currentAge);

  // Timeline
  const fortuneTimeline = generateFortuneTimeline(fortuneYears, currentAge, lifePathNumber);

  return {
    dateOfBirth: `${day}/${month}/${year}`,
    currentAge,
    lifePathNumber,
    birthDayNumber,
    destinyNumber,
    primaryBhagyodayaAge,
    primaryBhagyodayaYear,
    primaryBhagyodayaReason: {
      en: `Your primary fortune rises at age ${primaryBhagyodayaAge} (year ${primaryBhagyodayaYear}), calculated from Birth Day ${birthDayNumber} + Life Path ${lifePathNumber}`,
      hi: `आपका प्राथमिक भाग्योदय उम्र ${primaryBhagyodayaAge} (वर्ष ${primaryBhagyodayaYear}) पर होता है, जन्म दिन ${birthDayNumber} + जीवन पथ ${lifePathNumber} से गणना`,
    },
    fortuneYears,
    currentLifePhase,
    upcomingPeaks,
    pinnacles,
    challenges,
    saturnReturn,
    jupiterCycles,
    currentYearNumber,
    currentYearFortune: getCurrentYearFortune(currentYearNumber),
    currentYearTips: getCurrentYearTips(currentYearNumber),
    fortuneTimeline,
  };
}
