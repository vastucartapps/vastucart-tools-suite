/**
 * Lucky Number Calculator
 *
 * Calculates personal lucky numbers based on authentic numerology principles.
 *
 * This tool uses multiple numerological systems:
 * - Life Path Number: Core life purpose (Pythagorean reduction of birth date)
 * - Birth Day Number: Innate talents (day of birth vibration)
 * - Personal Year: Current year's energy cycle
 * - Personal Month: Current month's energy
 * - Ruling Planet: Based on birth day number (Vedic system)
 *
 * The compatibility matrix is based on classical numerology texts including
 * "Numerology: The Complete Guide" by Matthew Oliver Goodwin and
 * Vedic numerology principles from ancient Indian texts.
 *
 * Reference: Cheiro's Book of Numbers, Vedic Numerology traditions
 */

import { BilingualText } from '@/types';
import { reduceToSingleDigit, sumDigits } from '@/lib/utils/numbers';

export interface LuckyNumberResult {
  dateOfBirth: string;
  lifePathNumber: number;
  birthDayNumber: number;
  personalYearNumber: number;
  personalMonthNumber: number;
  primaryLuckyNumbers: number[];
  secondaryLuckyNumbers: number[];
  luckyDates: number[];
  luckyDaysOfWeek: BilingualText[];
  luckyMonths: Array<{ month: number; name: BilingualText }>;
  avoidNumbers: number[];
  currentYearFocus: BilingualText;
  currentMonthFocus: BilingualText;
  luckyTimeSlots: BilingualText[];
  rulingPlanet: BilingualText;
  friendlyPlanets: BilingualText[];
  enemyPlanets: BilingualText[];
  luckyGemstone: BilingualText;
  luckyDirection: BilingualText;
  luckyElement: BilingualText;
  luckyMetal: BilingualText;
}

export interface LuckyNumberMeaning {
  number: number;
  element: BilingualText;
  planet: BilingualText;
  color: string;
  colorName: BilingualText;
  significance: BilingualText;
}

/**
 * Planetary rulership based on Vedic numerology
 * Each number 1-9 is ruled by a specific planet
 */
const PLANETARY_RULERSHIP: Record<number, {
  planet: BilingualText;
  friendlyPlanets: BilingualText[];
  enemyPlanets: BilingualText[];
  gemstone: BilingualText;
  direction: BilingualText;
  element: BilingualText;
  metal: BilingualText;
  luckyDays: BilingualText[];
  timeSlots: BilingualText[];
}> = {
  1: {
    planet: { en: 'Sun (Surya)', hi: 'सूर्य' },
    friendlyPlanets: [
      { en: 'Mars', hi: 'मंगल' },
      { en: 'Jupiter', hi: 'बृहस्पति' },
    ],
    enemyPlanets: [
      { en: 'Saturn', hi: 'शनि' },
      { en: 'Venus', hi: 'शुक्र' },
    ],
    gemstone: { en: 'Ruby (Manik)', hi: 'माणिक्य' },
    direction: { en: 'East', hi: 'पूर्व' },
    element: { en: 'Fire', hi: 'अग्नि' },
    metal: { en: 'Gold', hi: 'सोना' },
    luckyDays: [
      { en: 'Sunday', hi: 'रविवार' },
      { en: 'Monday', hi: 'सोमवार' },
    ],
    timeSlots: [
      { en: '6 AM - 7 AM (Sunrise)', hi: 'सुबह 6-7 बजे (सूर्योदय)' },
      { en: '12 PM - 1 PM (Noon)', hi: 'दोपहर 12-1 बजे' },
    ],
  },
  2: {
    planet: { en: 'Moon (Chandra)', hi: 'चंद्रमा' },
    friendlyPlanets: [
      { en: 'Sun', hi: 'सूर्य' },
      { en: 'Mercury', hi: 'बुध' },
    ],
    enemyPlanets: [
      { en: 'Rahu', hi: 'राहु' },
      { en: 'Ketu', hi: 'केतु' },
    ],
    gemstone: { en: 'Pearl (Moti)', hi: 'मोती' },
    direction: { en: 'Northwest', hi: 'वायव्य' },
    element: { en: 'Water', hi: 'जल' },
    metal: { en: 'Silver', hi: 'चांदी' },
    luckyDays: [
      { en: 'Monday', hi: 'सोमवार' },
      { en: 'Friday', hi: 'शुक्रवार' },
    ],
    timeSlots: [
      { en: '6 PM - 7 PM (Evening)', hi: 'शाम 6-7 बजे' },
      { en: '10 PM - 11 PM (Night)', hi: 'रात 10-11 बजे' },
    ],
  },
  3: {
    planet: { en: 'Jupiter (Guru/Brihaspati)', hi: 'बृहस्पति/गुरु' },
    friendlyPlanets: [
      { en: 'Sun', hi: 'सूर्य' },
      { en: 'Mars', hi: 'मंगल' },
      { en: 'Moon', hi: 'चंद्रमा' },
    ],
    enemyPlanets: [
      { en: 'Mercury', hi: 'बुध' },
      { en: 'Venus', hi: 'शुक्र' },
    ],
    gemstone: { en: 'Yellow Sapphire (Pukhraj)', hi: 'पुखराज' },
    direction: { en: 'Northeast', hi: 'ईशान' },
    element: { en: 'Fire', hi: 'अग्नि' },
    metal: { en: 'Gold', hi: 'सोना' },
    luckyDays: [
      { en: 'Thursday', hi: 'गुरुवार' },
      { en: 'Tuesday', hi: 'मंगलवार' },
    ],
    timeSlots: [
      { en: '7 AM - 9 AM (Morning)', hi: 'सुबह 7-9 बजे' },
      { en: '3 PM - 5 PM (Afternoon)', hi: 'दोपहर 3-5 बजे' },
    ],
  },
  4: {
    planet: { en: 'Rahu (North Node)', hi: 'राहु' },
    friendlyPlanets: [
      { en: 'Venus', hi: 'शुक्र' },
      { en: 'Saturn', hi: 'शनि' },
    ],
    enemyPlanets: [
      { en: 'Sun', hi: 'सूर्य' },
      { en: 'Moon', hi: 'चंद्रमा' },
      { en: 'Mars', hi: 'मंगल' },
    ],
    gemstone: { en: "Hessonite (Gomed)", hi: 'गोमेद' },
    direction: { en: 'Southwest', hi: 'नैऋत्य' },
    element: { en: 'Earth', hi: 'पृथ्वी' },
    metal: { en: 'Lead', hi: 'सीसा' },
    luckyDays: [
      { en: 'Saturday', hi: 'शनिवार' },
      { en: 'Sunday', hi: 'रविवार' },
    ],
    timeSlots: [
      { en: '3 PM - 4 PM', hi: 'दोपहर 3-4 बजे' },
      { en: '6 PM - 7 PM (Twilight)', hi: 'शाम 6-7 बजे (संध्याकाल)' },
    ],
  },
  5: {
    planet: { en: 'Mercury (Budh)', hi: 'बुध' },
    friendlyPlanets: [
      { en: 'Venus', hi: 'शुक्र' },
      { en: 'Saturn', hi: 'शनि' },
    ],
    enemyPlanets: [
      { en: 'Moon', hi: 'चंद्रमा' },
    ],
    gemstone: { en: 'Emerald (Panna)', hi: 'पन्ना' },
    direction: { en: 'North', hi: 'उत्तर' },
    element: { en: 'Air', hi: 'वायु' },
    metal: { en: 'Bronze', hi: 'कांस्य' },
    luckyDays: [
      { en: 'Wednesday', hi: 'बुधवार' },
      { en: 'Friday', hi: 'शुक्रवार' },
    ],
    timeSlots: [
      { en: '9 AM - 11 AM', hi: 'सुबह 9-11 बजे' },
      { en: '2 PM - 4 PM', hi: 'दोपहर 2-4 बजे' },
    ],
  },
  6: {
    planet: { en: 'Venus (Shukra)', hi: 'शुक्र' },
    friendlyPlanets: [
      { en: 'Mercury', hi: 'बुध' },
      { en: 'Saturn', hi: 'शनि' },
    ],
    enemyPlanets: [
      { en: 'Sun', hi: 'सूर्य' },
      { en: 'Moon', hi: 'चंद्रमा' },
    ],
    gemstone: { en: 'Diamond (Heera)', hi: 'हीरा' },
    direction: { en: 'Southeast', hi: 'आग्नेय' },
    element: { en: 'Water', hi: 'जल' },
    metal: { en: 'Silver', hi: 'चांदी' },
    luckyDays: [
      { en: 'Friday', hi: 'शुक्रवार' },
      { en: 'Wednesday', hi: 'बुधवार' },
    ],
    timeSlots: [
      { en: '10 AM - 12 PM', hi: 'सुबह 10-12 बजे' },
      { en: '4 PM - 6 PM', hi: 'शाम 4-6 बजे' },
    ],
  },
  7: {
    planet: { en: 'Ketu (South Node)', hi: 'केतु' },
    friendlyPlanets: [
      { en: 'Mercury', hi: 'बुध' },
      { en: 'Venus', hi: 'शुक्र' },
      { en: 'Saturn', hi: 'शनि' },
    ],
    enemyPlanets: [
      { en: 'Sun', hi: 'सूर्य' },
      { en: 'Moon', hi: 'चंद्रमा' },
      { en: 'Mars', hi: 'मंगल' },
    ],
    gemstone: { en: "Cat's Eye (Lehsunia)", hi: 'लहसुनिया' },
    direction: { en: 'South', hi: 'दक्षिण' },
    element: { en: 'Water', hi: 'जल' },
    metal: { en: 'Iron', hi: 'लोहा' },
    luckyDays: [
      { en: 'Monday', hi: 'सोमवार' },
      { en: 'Sunday', hi: 'रविवार' },
    ],
    timeSlots: [
      { en: '5 AM - 6 AM (Pre-dawn)', hi: 'सुबह 5-6 बजे (भोर)' },
      { en: '7 PM - 8 PM (Dusk)', hi: 'शाम 7-8 बजे (गोधूलि)' },
    ],
  },
  8: {
    planet: { en: 'Saturn (Shani)', hi: 'शनि' },
    friendlyPlanets: [
      { en: 'Mercury', hi: 'बुध' },
      { en: 'Venus', hi: 'शुक्र' },
      { en: 'Rahu', hi: 'राहु' },
    ],
    enemyPlanets: [
      { en: 'Sun', hi: 'सूर्य' },
      { en: 'Moon', hi: 'चंद्रमा' },
      { en: 'Mars', hi: 'मंगल' },
    ],
    gemstone: { en: 'Blue Sapphire (Neelam)', hi: 'नीलम' },
    direction: { en: 'West', hi: 'पश्चिम' },
    element: { en: 'Earth', hi: 'पृथ्वी' },
    metal: { en: 'Iron', hi: 'लोहा' },
    luckyDays: [
      { en: 'Saturday', hi: 'शनिवार' },
      { en: 'Friday', hi: 'शुक्रवार' },
    ],
    timeSlots: [
      { en: '6 AM - 8 AM', hi: 'सुबह 6-8 बजे' },
      { en: '6 PM - 8 PM', hi: 'शाम 6-8 बजे' },
    ],
  },
  9: {
    planet: { en: 'Mars (Mangal)', hi: 'मंगल' },
    friendlyPlanets: [
      { en: 'Sun', hi: 'सूर्य' },
      { en: 'Moon', hi: 'चंद्रमा' },
      { en: 'Jupiter', hi: 'बृहस्पति' },
    ],
    enemyPlanets: [
      { en: 'Mercury', hi: 'बुध' },
      { en: 'Rahu', hi: 'राहु' },
    ],
    gemstone: { en: 'Red Coral (Moonga)', hi: 'मूंगा' },
    direction: { en: 'South', hi: 'दक्षिण' },
    element: { en: 'Fire', hi: 'अग्नि' },
    metal: { en: 'Copper', hi: 'तांबा' },
    luckyDays: [
      { en: 'Tuesday', hi: 'मंगलवार' },
      { en: 'Thursday', hi: 'गुरुवार' },
    ],
    timeSlots: [
      { en: '10 AM - 12 PM', hi: 'सुबह 10-12 बजे' },
      { en: '3 PM - 5 PM', hi: 'दोपहर 3-5 बजे' },
    ],
  },
};

/**
 * Number compatibility matrix based on planetary friendships
 * This is derived from Vedic astrology planetary relationships
 */
const NUMBER_COMPATIBILITY: Record<number, number[]> = {
  1: [1, 2, 3, 9],      // Sun friends: Moon, Jupiter, Mars
  2: [1, 2, 3, 5],      // Moon friends: Sun, Jupiter, Mercury
  3: [1, 2, 3, 9],      // Jupiter friends: Sun, Moon, Mars
  4: [5, 6, 7, 8],      // Rahu friends: Mercury, Venus, Saturn
  5: [4, 5, 6, 8],      // Mercury friends: Venus, Saturn
  6: [4, 5, 6, 8],      // Venus friends: Mercury, Saturn
  7: [4, 5, 6, 7, 8],   // Ketu similar to Rahu in relationships
  8: [4, 5, 6, 7, 8],   // Saturn friends: Mercury, Venus
  9: [1, 2, 3, 9],      // Mars friends: Sun, Moon, Jupiter
};

/**
 * Numbers to avoid based on planetary enmity
 */
const NUMBERS_TO_AVOID: Record<number, number[]> = {
  1: [4, 8],            // Sun enemies: Rahu, Saturn
  2: [4, 7],            // Moon enemies: Rahu, Ketu
  3: [5, 6],            // Jupiter enemies: Mercury, Venus
  4: [1, 2, 9],         // Rahu enemies: Sun, Moon, Mars
  5: [2],               // Mercury enemies: Moon
  6: [1, 2],            // Venus enemies: Sun, Moon
  7: [1, 2, 9],         // Ketu enemies: Sun, Moon, Mars
  8: [1, 2, 9],         // Saturn enemies: Sun, Moon, Mars
  9: [4, 5, 7],         // Mars enemies: Rahu, Mercury, Ketu
};

/**
 * Personal Year meanings - what to focus on each year
 */
const PERSONAL_YEAR_MEANINGS: Record<number, BilingualText> = {
  1: {
    en: 'Year of New Beginnings: Start fresh projects, take initiative. Independence and leadership will be rewarded. Ideal for launching businesses or making major life changes.',
    hi: 'नई शुरुआत का वर्ष: नई परियोजनाएं शुरू करें, पहल करें। स्वतंत्रता और नेतृत्व को पुरस्कृत किया जाएगा। व्यापार शुरू करने या बड़े जीवन परिवर्तन के लिए आदर्श।',
  },
  2: {
    en: 'Year of Cooperation: Focus on partnerships, patience, and diplomacy. Relationships deepen. Wait for opportunities rather than forcing. Details matter this year.',
    hi: 'सहयोग का वर्ष: साझेदारी, धैर्य और कूटनीति पर ध्यान दें। रिश्ते गहरे होते हैं। जबरदस्ती करने के बजाय अवसरों की प्रतीक्षा करें।',
  },
  3: {
    en: 'Year of Expression: Your creativity peaks. Express yourself through art, writing, or speaking. Social life expands. Joy and optimism attract success.',
    hi: 'अभिव्यक्ति का वर्ष: आपकी रचनात्मकता चरम पर है। कला, लेखन या बोलने के माध्यम से खुद को व्यक्त करें। सामाजिक जीवन फैलता है।',
  },
  4: {
    en: 'Year of Foundation: Build solid structures in life. Hard work pays off. Focus on health, home, and practical matters. Avoid shortcuts.',
    hi: 'नींव का वर्ष: जीवन में ठोस संरचनाएं बनाएं। कड़ी मेहनत का फल मिलता है। स्वास्थ्य, घर और व्यावहारिक मामलों पर ध्यान दें।',
  },
  5: {
    en: 'Year of Change: Expect the unexpected. Travel, new experiences, and freedom highlighted. Adaptability is key. May bring significant life transitions.',
    hi: 'परिवर्तन का वर्ष: अप्रत्याशित की उम्मीद करें। यात्रा, नए अनुभव और स्वतंत्रता महत्वपूर्ण। अनुकूलनशीलता महत्वपूर्ण है।',
  },
  6: {
    en: 'Year of Responsibility: Family and home take center stage. May involve marriage, childbirth, or increased family duties. Love and beauty flourish.',
    hi: 'जिम्मेदारी का वर्ष: परिवार और घर केंद्र में आते हैं। विवाह, संतान या बढ़ी हुई पारिवारिक जिम्मेदारियां हो सकती हैं।',
  },
  7: {
    en: 'Year of Reflection: Time for spiritual growth and inner work. Study, research, and solitude benefit you. Trust your intuition. Health needs attention.',
    hi: 'चिंतन का वर्ष: आध्यात्मिक विकास और आंतरिक कार्य का समय। अध्ययन, शोध और एकांत आपको लाभ पहुंचाते हैं।',
  },
  8: {
    en: 'Year of Achievement: Material success and recognition possible. Business and career thrive. Financial opportunities arise. Use power wisely.',
    hi: 'उपलब्धि का वर्ष: भौतिक सफलता और मान्यता संभव। व्यापार और करियर फलता-फूलता है। वित्तीय अवसर आते हैं।',
  },
  9: {
    en: 'Year of Completion: Close chapters, release what no longer serves. Humanitarian focus. Clear karma. Prepare for new 9-year cycle beginning next year.',
    hi: 'पूर्णता का वर्ष: अध्याय बंद करें, जो काम नहीं आता उसे छोड़ें। मानवीय फोकस। कर्म साफ करें। अगले वर्ष नए 9-वर्षीय चक्र की तैयारी करें।',
  },
};

/**
 * Personal Month meanings
 */
const PERSONAL_MONTH_MEANINGS: Record<number, BilingualText> = {
  1: { en: 'Initiate new projects. Leadership opportunities.', hi: 'नई परियोजनाएं शुरू करें। नेतृत्व के अवसर।' },
  2: { en: 'Patience required. Focus on partnerships.', hi: 'धैर्य की आवश्यकता। साझेदारी पर ध्यान दें।' },
  3: { en: 'Creative expression favored. Social month.', hi: 'रचनात्मक अभिव्यक्ति अनुकूल। सामाजिक महीना।' },
  4: { en: 'Hard work pays. Organize and structure.', hi: 'कड़ी मेहनत का फल। व्यवस्थित और संरचित करें।' },
  5: { en: 'Changes coming. Expect variety and travel.', hi: 'परिवर्तन आ रहे हैं। विविधता और यात्रा की उम्मीद।' },
  6: { en: 'Family focus. Love and domestic matters.', hi: 'परिवार पर ध्यान। प्रेम और घरेलू मामले।' },
  7: { en: 'Reflect and study. Spiritual insights.', hi: 'चिंतन और अध्ययन। आध्यात्मिक अंतर्दृष्टि।' },
  8: { en: 'Business success. Financial focus.', hi: 'व्यापारिक सफलता। वित्तीय फोकस।' },
  9: { en: 'Completion. Let go of the old.', hi: 'पूर्णता। पुराने को छोड़ें।' },
};

/**
 * Month names in both languages
 */
const MONTH_NAMES: Record<number, BilingualText> = {
  1: { en: 'January', hi: 'जनवरी' },
  2: { en: 'February', hi: 'फ़रवरी' },
  3: { en: 'March', hi: 'मार्च' },
  4: { en: 'April', hi: 'अप्रैल' },
  5: { en: 'May', hi: 'मई' },
  6: { en: 'June', hi: 'जून' },
  7: { en: 'July', hi: 'जुलाई' },
  8: { en: 'August', hi: 'अगस्त' },
  9: { en: 'September', hi: 'सितंबर' },
  10: { en: 'October', hi: 'अक्टूबर' },
  11: { en: 'November', hi: 'नवंबर' },
  12: { en: 'December', hi: 'दिसंबर' },
};

/**
 * Number meanings with elements, planets and colors
 */
export const NUMBER_MEANINGS: Record<number, LuckyNumberMeaning> = {
  1: {
    number: 1,
    element: { en: 'Fire', hi: 'अग्नि' },
    planet: { en: 'Sun', hi: 'सूर्य' },
    color: '#FF6B35',
    colorName: { en: 'Orange / Gold', hi: 'नारंगी / सुनहरा' },
    significance: { en: 'Leadership, new beginnings, independence', hi: 'नेतृत्व, नई शुरुआत, स्वतंत्रता' },
  },
  2: {
    number: 2,
    element: { en: 'Water', hi: 'जल' },
    planet: { en: 'Moon', hi: 'चंद्रमा' },
    color: '#E0E0E0',
    colorName: { en: 'White / Silver', hi: 'सफेद / चांदी' },
    significance: { en: 'Partnership, balance, diplomacy', hi: 'साझेदारी, संतुलन, कूटनीति' },
  },
  3: {
    number: 3,
    element: { en: 'Fire', hi: 'अग्नि' },
    planet: { en: 'Jupiter', hi: 'बृहस्पति' },
    color: '#FFD700',
    colorName: { en: 'Yellow / Saffron', hi: 'पीला / केसरिया' },
    significance: { en: 'Creativity, joy, expansion', hi: 'रचनात्मकता, आनंद, विस्तार' },
  },
  4: {
    number: 4,
    element: { en: 'Earth', hi: 'पृथ्वी' },
    planet: { en: 'Rahu', hi: 'राहु' },
    color: '#708090',
    colorName: { en: 'Grey / Smoky', hi: 'भूरा / धुंधला' },
    significance: { en: 'Stability, unconventional thinking', hi: 'स्थिरता, अपरंपरागत सोच' },
  },
  5: {
    number: 5,
    element: { en: 'Air', hi: 'वायु' },
    planet: { en: 'Mercury', hi: 'बुध' },
    color: '#48BB78',
    colorName: { en: 'Green', hi: 'हरा' },
    significance: { en: 'Freedom, change, communication', hi: 'स्वतंत्रता, परिवर्तन, संचार' },
  },
  6: {
    number: 6,
    element: { en: 'Water', hi: 'जल' },
    planet: { en: 'Venus', hi: 'शुक्र' },
    color: '#ED64A6',
    colorName: { en: 'Pink / Pastel', hi: 'गुलाबी / पेस्टल' },
    significance: { en: 'Love, beauty, harmony', hi: 'प्रेम, सौंदर्य, सामंजस्य' },
  },
  7: {
    number: 7,
    element: { en: 'Water', hi: 'जल' },
    planet: { en: 'Ketu', hi: 'केतु' },
    color: '#805AD5',
    colorName: { en: 'Purple / Violet', hi: 'बैंगनी' },
    significance: { en: 'Spirituality, wisdom, mysticism', hi: 'आध्यात्मिकता, ज्ञान, रहस्यवाद' },
  },
  8: {
    number: 8,
    element: { en: 'Earth', hi: 'पृथ्वी' },
    planet: { en: 'Saturn', hi: 'शनि' },
    color: '#2D3748',
    colorName: { en: 'Black / Dark Blue', hi: 'काला / गहरा नीला' },
    significance: { en: 'Power, karma, achievement', hi: 'शक्ति, कर्म, उपलब्धि' },
  },
  9: {
    number: 9,
    element: { en: 'Fire', hi: 'अग्नि' },
    planet: { en: 'Mars', hi: 'मंगल' },
    color: '#E53E3E',
    colorName: { en: 'Red / Coral', hi: 'लाल / मूंगा' },
    significance: { en: 'Completion, compassion, courage', hi: 'पूर्णता, करुणा, साहस' },
  },
};

/**
 * Calculate personal year number
 */
function calculatePersonalYear(birthDay: number, birthMonth: number, currentYear: number): number {
  // Personal Year = Birth Day + Birth Month + Current Year (all reduced)
  const dayReduced = sumDigits(birthDay);
  const monthReduced = sumDigits(birthMonth);
  const yearReduced = sumDigits(currentYear);
  const sum = dayReduced + monthReduced + yearReduced;
  const reduction = reduceToSingleDigit(sum);
  return reduction.finalNumber > 9 ? sumDigits(reduction.finalNumber) : reduction.finalNumber;
}

/**
 * Calculate personal month number
 */
function calculatePersonalMonth(personalYear: number, currentMonth: number): number {
  const sum = personalYear + currentMonth;
  return sum > 9 ? sumDigits(sum) : sum;
}

/**
 * Generate lucky dates based on primary numbers
 */
function generateLuckyDates(primaryNumbers: number[], secondaryNumbers: number[]): number[] {
  const luckyDates: number[] = [];

  // Add all dates that reduce to primary numbers
  for (let d = 1; d <= 31; d++) {
    const reduced = d > 9 ? sumDigits(d) : d;
    if (primaryNumbers.includes(reduced)) {
      luckyDates.push(d);
    }
  }

  // Add key secondary dates
  for (let d = 1; d <= 31; d++) {
    const reduced = d > 9 ? sumDigits(d) : d;
    if (secondaryNumbers.includes(reduced) && !luckyDates.includes(d)) {
      // Only add first few secondary dates
      if (luckyDates.length < 12) {
        luckyDates.push(d);
      }
    }
  }

  return luckyDates.sort((a, b) => a - b);
}

/**
 * Calculate all lucky numbers for a person
 */
export function calculateLuckyNumbers(
  day: number,
  month: number,
  year: number
): LuckyNumberResult {
  // Calculate Life Path Number (most important)
  const lifePathSum = sumDigits(day) + sumDigits(month) + sumDigits(year);
  const lifePathReduction = reduceToSingleDigit(lifePathSum);
  const lifePathNumber = lifePathReduction.finalNumber > 9
    ? sumDigits(lifePathReduction.finalNumber)
    : lifePathReduction.finalNumber;

  // Calculate Birth Day Number (innate talents)
  const birthDayReduction = reduceToSingleDigit(day);
  const birthDayNumber = birthDayReduction.finalNumber > 9
    ? sumDigits(birthDayReduction.finalNumber)
    : birthDayReduction.finalNumber;

  // Current year calculations (using 2025 for SSR stability)
  const currentYear = 2025;
  const currentMonth = 1; // January for default
  const personalYearNumber = calculatePersonalYear(day, month, currentYear);
  const personalMonthNumber = calculatePersonalMonth(personalYearNumber, currentMonth);

  // Get planetary rulership data based on Birth Day Number
  const planetaryData = PLANETARY_RULERSHIP[birthDayNumber] || PLANETARY_RULERSHIP[1];

  // Primary lucky numbers: Life Path, Birth Day, and their combination
  const primarySet = new Set([lifePathNumber, birthDayNumber]);
  // Add the sum of both if it's different
  const combinedSum = lifePathNumber + birthDayNumber;
  const combinedReduced = combinedSum > 9 ? sumDigits(combinedSum) : combinedSum;
  if (combinedReduced !== lifePathNumber && combinedReduced !== birthDayNumber) {
    primarySet.add(combinedReduced);
  }
  const primaryLuckyNumbers = Array.from(primarySet).sort((a, b) => a - b);

  // Secondary lucky numbers from compatibility
  const compatibleWithLifePath = NUMBER_COMPATIBILITY[lifePathNumber] || [];
  const compatibleWithBirthDay = NUMBER_COMPATIBILITY[birthDayNumber] || [];
  const secondarySet = new Set([...compatibleWithLifePath, ...compatibleWithBirthDay]);
  primaryLuckyNumbers.forEach((n) => secondarySet.delete(n));
  const secondaryLuckyNumbers = Array.from(secondarySet).sort((a, b) => a - b);

  // Lucky dates (dates that resonate)
  const luckyDates = generateLuckyDates(primaryLuckyNumbers, secondaryLuckyNumbers);

  // Lucky months (months that harmonize)
  const luckyMonths: Array<{ month: number; name: BilingualText }> = [];
  for (let m = 1; m <= 12; m++) {
    const monthReduced = m > 9 ? sumDigits(m) : m;
    if (primaryLuckyNumbers.includes(monthReduced) || secondaryLuckyNumbers.slice(0, 3).includes(monthReduced)) {
      luckyMonths.push({ month: m, name: MONTH_NAMES[m] });
    }
  }

  // Numbers to avoid
  const avoidSet = new Set([
    ...(NUMBERS_TO_AVOID[lifePathNumber] || []),
    ...(NUMBERS_TO_AVOID[birthDayNumber] || []),
  ]);
  const avoidNumbers = Array.from(avoidSet).sort((a, b) => a - b);

  return {
    dateOfBirth: `${day}/${month}/${year}`,
    lifePathNumber,
    birthDayNumber,
    personalYearNumber,
    personalMonthNumber,
    primaryLuckyNumbers,
    secondaryLuckyNumbers,
    luckyDates,
    luckyDaysOfWeek: planetaryData.luckyDays,
    luckyMonths,
    avoidNumbers,
    currentYearFocus: PERSONAL_YEAR_MEANINGS[personalYearNumber] || PERSONAL_YEAR_MEANINGS[1],
    currentMonthFocus: PERSONAL_MONTH_MEANINGS[personalMonthNumber] || PERSONAL_MONTH_MEANINGS[1],
    luckyTimeSlots: planetaryData.timeSlots,
    rulingPlanet: planetaryData.planet,
    friendlyPlanets: planetaryData.friendlyPlanets,
    enemyPlanets: planetaryData.enemyPlanets,
    luckyGemstone: planetaryData.gemstone,
    luckyDirection: planetaryData.direction,
    luckyElement: planetaryData.element,
    luckyMetal: planetaryData.metal,
  };
}

/**
 * Get meaning for a number
 */
export function getNumberMeaning(number: number): LuckyNumberMeaning | null {
  return NUMBER_MEANINGS[number] || null;
}

/**
 * Check compatibility between two numbers
 * Returns harmonious, neutral, or challenging status with description
 */
export function getNumberCompatibility(
  baseNumber: number,
  checkNumber: number
): { status: 'harmonious' | 'neutral' | 'challenging'; description: { en: string; hi: string } } {
  const compatible = NUMBER_COMPATIBILITY[baseNumber] || [];
  const avoid = NUMBERS_TO_AVOID[baseNumber] || [];

  if (compatible.includes(checkNumber)) {
    return {
      status: 'harmonious',
      description: {
        en: `Number ${checkNumber} is friendly with your Life Path ${baseNumber}. This combination supports mutual growth and positive energy exchange.`,
        hi: `अंक ${checkNumber} आपके जीवन पथ ${baseNumber} के साथ मित्रवत है। यह संयोजन आपसी विकास और सकारात्मक ऊर्जा विनिमय का समर्थन करता है।`,
      },
    };
  } else if (avoid.includes(checkNumber)) {
    return {
      status: 'challenging',
      description: {
        en: `Number ${checkNumber} may create friction with your Life Path ${baseNumber}. Extra effort or patience may be needed in this combination.`,
        hi: `अंक ${checkNumber} आपके जीवन पथ ${baseNumber} के साथ घर्षण पैदा कर सकता है। इस संयोजन में अतिरिक्त प्रयास या धैर्य की आवश्यकता हो सकती है।`,
      },
    };
  } else {
    return {
      status: 'neutral',
      description: {
        en: `Number ${checkNumber} is neutral with your Life Path ${baseNumber}. Neither strongly supportive nor challenging—outcomes depend on other factors.`,
        hi: `अंक ${checkNumber} आपके जीवन पथ ${baseNumber} के साथ तटस्थ है। न तो मजबूती से सहायक है और न ही चुनौतीपूर्ण—परिणाम अन्य कारकों पर निर्भर करते हैं।`,
      },
    };
  }
}
