/**
 * Lo Shu Grid Calculator
 *
 * The Lo Shu Grid is an ancient Chinese numerology tool based on a 3x3 magic square
 * discovered on the back of a turtle from the River Lo around 4000 years ago.
 *
 * Grid Layout (positions based on traditional arrangement):
 *   4 | 9 | 2
 *   ─────────
 *   3 | 5 | 7
 *   ─────────
 *   8 | 1 | 6
 *
 * The grid analyzes which numbers are present, missing, or repeated in your birth date.
 * Arrows form when three numbers in a row/column/diagonal are all present or all missing.
 */

import { LoShuResult, LoShuGrid, LoShuArrow, LoShuPlane, LoShuRemedy, BilingualText } from '@/types';
import { getDateDigits, countDigitOccurrences } from '@/lib/utils/numbers';

/**
 * Lo Shu Grid position mapping
 * Each number 1-9 has a specific position in the grid
 */
const LOSHU_POSITIONS: Record<number, [number, number]> = {
  4: [0, 0], 9: [0, 1], 2: [0, 2],
  3: [1, 0], 5: [1, 1], 7: [1, 2],
  8: [2, 0], 1: [2, 1], 6: [2, 2],
};

/**
 * Arrow definitions - patterns of strength and weakness
 */
const ARROW_DEFINITIONS = {
  // Rows (horizontal arrows)
  thought: {
    numbers: [4, 9, 2],
    name: { en: 'Arrow of Thought/Intellect', hi: 'विचार/बुद्धि का तीर' },
    strength: {
      en: 'Strong mental abilities, good memory, intellectual pursuits. You think before you act.',
      hi: 'मजबूत मानसिक क्षमताएं, अच्छी याददाश्त, बौद्धिक खोज। आप कार्य करने से पहले सोचते हैं।',
    },
    weakness: {
      en: 'May lack concentration, forgetfulness, difficulty in planning. Need to develop mental discipline.',
      hi: 'एकाग्रता की कमी हो सकती है, भूलने की प्रवृत्ति, योजना बनाने में कठिनाई। मानसिक अनुशासन विकसित करने की आवश्यकता।',
    },
  },
  will: {
    numbers: [3, 5, 7],
    name: { en: 'Arrow of Will/Determination', hi: 'इच्छाशक्ति/दृढ़ता का तीर' },
    strength: {
      en: 'Strong willpower, emotional balance, persistence in achieving goals. You persevere through difficulties.',
      hi: 'मजबूत इच्छाशक्ति, भावनात्मक संतुलन, लक्ष्य प्राप्त करने में दृढ़ता। आप कठिनाइयों से पार पाते हैं।',
    },
    weakness: {
      en: 'May give up easily, lack of determination, emotional instability. Need to build inner strength.',
      hi: 'आसानी से हार मान सकते हैं, दृढ़ता की कमी, भावनात्मक अस्थिरता। आंतरिक शक्ति बनाने की आवश्यकता।',
    },
  },
  action: {
    numbers: [8, 1, 6],
    name: { en: 'Arrow of Action/Practical', hi: 'कार्य/व्यावहारिकता का तीर' },
    strength: {
      en: 'Action-oriented, practical approach, ability to get things done. You turn ideas into reality.',
      hi: 'कार्य-उन्मुख, व्यावहारिक दृष्टिकोण, चीजों को करने की क्षमता। आप विचारों को हकीकत में बदलते हैं।',
    },
    weakness: {
      en: 'May procrastinate, difficulty in executing plans, passive approach. Need to take more action.',
      hi: 'टालमटोल कर सकते हैं, योजनाओं को क्रियान्वित करने में कठिनाई, निष्क्रिय दृष्टिकोण। अधिक कार्रवाई करने की आवश्यकता।',
    },
  },

  // Columns (vertical arrows)
  planner: {
    numbers: [4, 3, 8],
    name: { en: 'Arrow of Planner/Vision', hi: 'योजनाकार/दूरदृष्टि का तीर' },
    strength: {
      en: 'Excellent planning abilities, organized thinking, good business sense. You see the big picture.',
      hi: 'उत्कृष्ट योजना क्षमताएं, संगठित सोच, अच्छी व्यापारिक समझ। आप बड़ी तस्वीर देखते हैं।',
    },
    weakness: {
      en: 'Poor at planning, disorganized, may miss opportunities. Need to develop strategic thinking.',
      hi: 'योजना बनाने में कमजोर, अव्यवस्थित, अवसर चूक सकते हैं। रणनीतिक सोच विकसित करने की आवश्यकता।',
    },
  },
  spirituality: {
    numbers: [9, 5, 1],
    name: { en: 'Arrow of Spirituality/Balance', hi: 'आध्यात्मिकता/संतुलन का तीर' },
    strength: {
      en: 'Spiritual awareness, inner balance, connection to higher self. You understand life\'s deeper meaning.',
      hi: 'आध्यात्मिक जागरूकता, आंतरिक संतुलन, उच्च स्व से संबंध। आप जीवन के गहरे अर्थ को समझते हैं।',
    },
    weakness: {
      en: 'May feel disconnected, lack of spiritual direction, imbalanced life. Need to develop inner awareness.',
      hi: 'असंबद्ध महसूस कर सकते हैं, आध्यात्मिक दिशा की कमी, असंतुलित जीवन। आंतरिक जागरूकता विकसित करने की आवश्यकता।',
    },
  },
  activity: {
    numbers: [2, 7, 6],
    name: { en: 'Arrow of Activity/Energy', hi: 'गतिविधि/ऊर्जा का तीर' },
    strength: {
      en: 'High energy levels, active lifestyle, good physical health. You maintain enthusiasm and vitality.',
      hi: 'उच्च ऊर्जा स्तर, सक्रिय जीवनशैली, अच्छा शारीरिक स्वास्थ्य। आप उत्साह और जीवन शक्ति बनाए रखते हैं।',
    },
    weakness: {
      en: 'Low energy, sedentary tendencies, may lack motivation. Need to increase physical activity.',
      hi: 'कम ऊर्जा, गतिहीन प्रवृत्तियां, प्रेरणा की कमी हो सकती है। शारीरिक गतिविधि बढ़ाने की आवश्यकता।',
    },
  },

  // Diagonals
  determination: {
    numbers: [4, 5, 6],
    name: { en: 'Arrow of Determination', hi: 'दृढ़ संकल्प का तीर' },
    strength: {
      en: 'Strong determination, resilience, ability to overcome obstacles. You persist until you succeed.',
      hi: 'मजबूत दृढ़ संकल्प, लचीलापन, बाधाओं को पार करने की क्षमता। आप सफल होने तक दृढ़ रहते हैं।',
    },
    weakness: {
      en: 'May give up when faced with challenges, lack of persistence. Need to build mental toughness.',
      hi: 'चुनौतियों का सामना करने पर हार मान सकते हैं, दृढ़ता की कमी। मानसिक दृढ़ता बनाने की आवश्यकता।',
    },
  },
  prosperity: {
    numbers: [2, 5, 8],
    name: { en: 'Arrow of Prosperity/Emotional Balance', hi: 'समृद्धि/भावनात्मक संतुलन का तीर' },
    strength: {
      en: 'Good luck with finances, emotional stability, balanced approach to material matters.',
      hi: 'वित्त के साथ सौभाग्य, भावनात्मक स्थिरता, भौतिक मामलों के प्रति संतुलित दृष्टिकोण।',
    },
    weakness: {
      en: 'Financial struggles, emotional ups and downs, difficulty with material security.',
      hi: 'आर्थिक संघर्ष, भावनात्मक उतार-चढ़ाव, भौतिक सुरक्षा में कठिनाई।',
    },
  },
};

/**
 * Plane definitions for Lo Shu analysis
 */
const PLANE_DEFINITIONS = {
  mental: {
    name: { en: 'Mental Plane', hi: 'मानसिक तल' },
    numbers: [4, 9, 2],
    description: {
      en: 'Represents thinking, memory, and intellectual abilities.',
      hi: 'सोच, स्मृति और बौद्धिक क्षमताओं का प्रतिनिधित्व करता है।',
    },
  },
  emotional: {
    name: { en: 'Emotional Plane', hi: 'भावनात्मक तल' },
    numbers: [3, 5, 7],
    description: {
      en: 'Represents feelings, intuition, and emotional sensitivity.',
      hi: 'भावनाओं, अंतर्ज्ञान और भावनात्मक संवेदनशीलता का प्रतिनिधित्व करता है।',
    },
  },
  practical: {
    name: { en: 'Practical Plane', hi: 'व्यावहारिक तल' },
    numbers: [8, 1, 6],
    description: {
      en: 'Represents action, physical abilities, and material matters.',
      hi: 'कार्य, शारीरिक क्षमताओं और भौतिक मामलों का प्रतिनिधित्व करता है।',
    },
  },
};

/**
 * Remedies for missing numbers
 */
const NUMBER_REMEDIES: Record<number, LoShuRemedy> = {
  1: {
    number: 1,
    remedies: [
      { en: 'Wear red or orange colors', hi: 'लाल या नारंगी रंग पहनें' },
      { en: 'Chant "Om Suryaya Namaha" 108 times daily', hi: 'रोज 108 बार "ॐ सूर्याय नमः" जाप करें' },
      { en: 'Offer water to Sun at sunrise', hi: 'सूर्योदय पर सूर्य को जल अर्पित करें' },
    ],
    colors: ['Red', 'Orange', 'Gold'],
    elements: ['Fire', 'Sun energy'],
  },
  2: {
    number: 2,
    remedies: [
      { en: 'Wear white or cream colors', hi: 'सफेद या क्रीम रंग पहनें' },
      { en: 'Chant "Om Chandraya Namaha" 108 times', hi: '108 बार "ॐ चंद्राय नमः" जाप करें' },
      { en: 'Keep a bowl of water in bedroom', hi: 'शयनकक्ष में पानी का कटोरा रखें' },
    ],
    colors: ['White', 'Cream', 'Silver'],
    elements: ['Water', 'Moon energy'],
  },
  3: {
    number: 3,
    remedies: [
      { en: 'Wear yellow or gold colors', hi: 'पीला या सुनहरा रंग पहनें' },
      { en: 'Chant "Om Gurave Namaha" 108 times', hi: '108 बार "ॐ गुरवे नमः" जाप करें' },
      { en: 'Feed birds on Thursdays', hi: 'गुरुवार को पक्षियों को दाना खिलाएं' },
    ],
    colors: ['Yellow', 'Gold', 'Orange'],
    elements: ['Fire', 'Jupiter energy'],
  },
  4: {
    number: 4,
    remedies: [
      { en: 'Wear blue or grey colors', hi: 'नीला या ग्रे रंग पहनें' },
      { en: 'Meditate regularly', hi: 'नियमित ध्यान करें' },
      { en: 'Donate to orphanages on Saturdays', hi: 'शनिवार को अनाथालयों को दान करें' },
    ],
    colors: ['Blue', 'Grey', 'Black'],
    elements: ['Air', 'Rahu energy'],
  },
  5: {
    number: 5,
    remedies: [
      { en: 'Wear green colors', hi: 'हरा रंग पहनें' },
      { en: 'Chant "Om Budhaya Namaha" 108 times', hi: '108 बार "ॐ बुधाय नमः" जाप करें' },
      { en: 'Keep plants at home', hi: 'घर में पौधे रखें' },
    ],
    colors: ['Green', 'Light green', 'Emerald'],
    elements: ['Earth', 'Mercury energy'],
  },
  6: {
    number: 6,
    remedies: [
      { en: 'Wear pink or light blue colors', hi: 'गुलाबी या हल्का नीला रंग पहनें' },
      { en: 'Chant "Om Shukraya Namaha" 108 times', hi: '108 बार "ॐ शुक्राय नमः" जाप करें' },
      { en: 'Help women and donate to girls\' education', hi: 'महिलाओं की मदद करें और बालिका शिक्षा के लिए दान करें' },
    ],
    colors: ['Pink', 'Light Blue', 'White'],
    elements: ['Water', 'Venus energy'],
  },
  7: {
    number: 7,
    remedies: [
      { en: 'Wear light grey or white colors', hi: 'हल्का ग्रे या सफेद रंग पहनें' },
      { en: 'Practice meditation and yoga', hi: 'ध्यान और योग का अभ्यास करें' },
      { en: 'Keep a pet or feed animals', hi: 'पालतू जानवर रखें या जानवरों को खिलाएं' },
    ],
    colors: ['Grey', 'White', 'Smoky'],
    elements: ['Water', 'Ketu energy'],
  },
  8: {
    number: 8,
    remedies: [
      { en: 'Wear dark blue or black colors', hi: 'गहरा नीला या काला रंग पहनें' },
      { en: 'Chant "Om Shanaischaraya Namaha" 108 times', hi: '108 बार "ॐ शनैश्चराय नमः" जाप करें' },
      { en: 'Feed crows on Saturdays', hi: 'शनिवार को कौवों को खिलाएं' },
    ],
    colors: ['Dark Blue', 'Black', 'Navy'],
    elements: ['Earth', 'Saturn energy'],
  },
  9: {
    number: 9,
    remedies: [
      { en: 'Wear red or coral colors', hi: 'लाल या मूंगा रंग पहनें' },
      { en: 'Chant "Om Mangalaya Namaha" 108 times', hi: '108 बार "ॐ मंगलाय नमः" जाप करें' },
      { en: 'Donate blood if healthy', hi: 'स्वस्थ हों तो रक्तदान करें' },
    ],
    colors: ['Red', 'Coral', 'Maroon'],
    elements: ['Fire', 'Mars energy'],
  },
};

/**
 * Calculates the complete Lo Shu Grid analysis
 */
export function calculateLoShuGrid(dateOfBirth: Date): LoShuResult {
  // Get all digits from the date
  const dateDigits = getDateDigits(dateOfBirth);

  // Count occurrences of each digit
  const digitCounts = countDigitOccurrences(dateDigits);

  // Build the grid
  const grid = buildGrid(digitCounts);

  // Find present, missing, and repeating numbers
  const presentNumbers = Object.entries(digitCounts)
    .filter(([_, count]) => count > 0)
    .map(([num]) => parseInt(num));

  const missingNumbers = Object.entries(digitCounts)
    .filter(([_, count]) => count === 0)
    .map(([num]) => parseInt(num));

  const repeatingNumbers = Object.entries(digitCounts)
    .filter(([_, count]) => count > 1)
    .map(([num, count]) => ({ number: parseInt(num), count }));

  // Analyze arrows
  const arrows = analyzeArrows(digitCounts);

  // Analyze planes
  const planes = analyzePlanes(digitCounts);

  // Generate remedies for missing numbers
  const remedies = missingNumbers.map((num) => NUMBER_REMEDIES[num]).filter(Boolean);

  return {
    grid: {
      grid,
      dateDigits,
      presentNumbers,
      missingNumbers,
      repeatingNumbers,
    },
    arrows,
    planes,
    remedies,
  };
}

/**
 * Builds the 3x3 Lo Shu grid with number counts
 */
function buildGrid(digitCounts: Record<number, number>): (number[])[][] {
  const grid: (number[])[][] = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];

  // Place numbers in their positions based on count
  for (let num = 1; num <= 9; num++) {
    const [row, col] = LOSHU_POSITIONS[num];
    const count = digitCounts[num] || 0;

    // Fill with the number repeated 'count' times
    for (let i = 0; i < count; i++) {
      grid[row][col].push(num);
    }
  }

  return grid;
}

/**
 * Analyzes arrows of strength and weakness
 */
function analyzeArrows(digitCounts: Record<number, number>): {
  present: LoShuArrow[];
  missing: LoShuArrow[];
} {
  const present: LoShuArrow[] = [];
  const missing: LoShuArrow[] = [];

  for (const [id, definition] of Object.entries(ARROW_DEFINITIONS)) {
    const allPresent = definition.numbers.every((num) => digitCounts[num] > 0);
    const allMissing = definition.numbers.every((num) => digitCounts[num] === 0);

    if (allPresent) {
      present.push({
        id,
        name: definition.name,
        numbers: definition.numbers,
        type: 'strength',
        description: definition.strength,
      });
    } else if (allMissing) {
      missing.push({
        id,
        name: definition.name,
        numbers: definition.numbers,
        type: 'weakness',
        description: definition.weakness,
      });
    }
  }

  return { present, missing };
}

/**
 * Analyzes the three planes (Mental, Emotional, Practical)
 */
function analyzePlanes(digitCounts: Record<number, number>): {
  mental: LoShuPlane;
  emotional: LoShuPlane;
  practical: LoShuPlane;
} {
  const analyzePlane = (key: 'mental' | 'emotional' | 'practical'): LoShuPlane => {
    const definition = PLANE_DEFINITIONS[key];
    const present = definition.numbers.filter((num) => digitCounts[num] > 0);
    const missing = definition.numbers.filter((num) => digitCounts[num] === 0);
    const strength = Math.round((present.length / definition.numbers.length) * 100);

    return {
      name: definition.name,
      numbers: definition.numbers,
      present,
      missing,
      strength,
      description: definition.description,
    };
  };

  return {
    mental: analyzePlane('mental'),
    emotional: analyzePlane('emotional'),
    practical: analyzePlane('practical'),
  };
}
