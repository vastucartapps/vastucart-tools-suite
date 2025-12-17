/**
 * Lucky Color Calculator based on Vedic Numerology
 *
 * This module calculates lucky colors based on:
 * 1. Birth Day Number (Moolank/Psychic Number)
 * 2. Life Path Number (Bhagyank/Destiny Number)
 * 3. Name Number (Expression Number)
 * 4. Planetary rulership and color associations
 *
 * Based on authentic Vedic numerology and color therapy principles
 */

// ============================================================================
// Types
// ============================================================================

export interface BilingualText {
  en: string;
  hi: string;
}

export interface ColorInfo {
  name: BilingualText;
  hex: string;
  rgb: string;
  meaning: BilingualText;
  occasions: BilingualText[];
  chakra: BilingualText;
}

export interface PlanetaryColorProfile {
  planet: BilingualText;
  primaryColors: ColorInfo[];
  secondaryColors: ColorInfo[];
  colorsToAvoid: ColorInfo[];
  gemstone: BilingualText;
  metalColor: BilingualText;
}

export interface LuckyColorResult {
  dateOfBirth: string;
  fullName: string;
  birthDayNumber: number;
  lifePathNumber: number;
  nameNumber: number;
  rulingPlanet: BilingualText;
  primaryLuckyColors: ColorInfo[];
  secondaryLuckyColors: ColorInfo[];
  colorsForSuccess: ColorInfo[];
  colorsForHealth: ColorInfo[];
  colorsForWealth: ColorInfo[];
  colorsForRelationships: ColorInfo[];
  colorsToAvoid: ColorInfo[];
  weekdayColors: Array<{
    day: BilingualText;
    color: ColorInfo;
    isAuspicious: boolean;
  }>;
  seasonalColors: Array<{
    season: BilingualText;
    colors: ColorInfo[];
  }>;
  homeDecorColors: ColorInfo[];
  workwearColors: ColorInfo[];
  currentYearColor: ColorInfo;
  personalGuidance: BilingualText;
}

// ============================================================================
// Color Definitions - Authentic Vedic Color Associations
// ============================================================================

const COLORS: Record<string, ColorInfo> = {
  // Sun colors (Number 1)
  gold: {
    name: { en: 'Gold', hi: 'सुनहरा' },
    hex: '#FFD700',
    rgb: '255, 215, 0',
    meaning: {
      en: 'Represents royalty, success, and solar energy. Enhances leadership and confidence.',
      hi: 'राजसी गुण, सफलता और सूर्य ऊर्जा का प्रतीक। नेतृत्व और आत्मविश्वास बढ़ाता है।',
    },
    occasions: [
      { en: 'Important meetings', hi: 'महत्वपूर्ण बैठकें' },
      { en: 'Celebrations', hi: 'उत्सव' },
      { en: 'Sunday worship', hi: 'रविवार पूजा' },
    ],
    chakra: { en: 'Solar Plexus (Manipura)', hi: 'मणिपुर चक्र' },
  },
  orange: {
    name: { en: 'Orange', hi: 'नारंगी' },
    hex: '#FF8C00',
    rgb: '255, 140, 0',
    meaning: {
      en: 'Signifies vitality, creativity, and enthusiasm. Boosts energy and optimism.',
      hi: 'जीवन शक्ति, रचनात्मकता और उत्साह का प्रतीक। ऊर्जा और आशावाद बढ़ाता है।',
    },
    occasions: [
      { en: 'Creative work', hi: 'रचनात्मक कार्य' },
      { en: 'Sports activities', hi: 'खेल गतिविधियां' },
      { en: 'Social gatherings', hi: 'सामाजिक समारोह' },
    ],
    chakra: { en: 'Sacral (Svadhisthana)', hi: 'स्वाधिष्ठान चक्र' },
  },
  yellow: {
    name: { en: 'Yellow', hi: 'पीला' },
    hex: '#FFD93D',
    rgb: '255, 217, 61',
    meaning: {
      en: 'Represents intellect, wisdom, and mental clarity. Promotes learning and communication.',
      hi: 'बुद्धि, ज्ञान और मानसिक स्पष्टता का प्रतीक। सीखने और संवाद को बढ़ावा देता है।',
    },
    occasions: [
      { en: 'Examinations', hi: 'परीक्षाएं' },
      { en: 'Thursday rituals', hi: 'गुरुवार अनुष्ठान' },
      { en: 'Learning activities', hi: 'सीखने की गतिविधियां' },
    ],
    chakra: { en: 'Solar Plexus (Manipura)', hi: 'मणिपुर चक्र' },
  },

  // Moon colors (Number 2)
  white: {
    name: { en: 'White', hi: 'सफेद' },
    hex: '#FFFFFF',
    rgb: '255, 255, 255',
    meaning: {
      en: 'Symbolizes purity, peace, and spiritual connection. Enhances intuition and calmness.',
      hi: 'शुद्धता, शांति और आध्यात्मिक संबंध का प्रतीक। अंतर्ज्ञान और शांति बढ़ाता है।',
    },
    occasions: [
      { en: 'Monday worship', hi: 'सोमवार पूजा' },
      { en: 'Meditation', hi: 'ध्यान' },
      { en: 'Peaceful negotiations', hi: 'शांतिपूर्ण वार्ता' },
    ],
    chakra: { en: 'Crown (Sahasrara)', hi: 'सहस्रार चक्र' },
  },
  silver: {
    name: { en: 'Silver', hi: 'चांदी' },
    hex: '#C0C0C0',
    rgb: '192, 192, 192',
    meaning: {
      en: 'Represents lunar energy, intuition, and emotional balance. Calms the mind.',
      hi: 'चंद्र ऊर्जा, अंतर्ज्ञान और भावनात्मक संतुलन का प्रतीक। मन को शांत करता है।',
    },
    occasions: [
      { en: 'Evening events', hi: 'शाम के कार्यक्रम' },
      { en: 'Romantic occasions', hi: 'रोमांटिक अवसर' },
      { en: 'Full moon nights', hi: 'पूर्णिमा रातें' },
    ],
    chakra: { en: 'Third Eye (Ajna)', hi: 'आज्ञा चक्र' },
  },
  cream: {
    name: { en: 'Cream', hi: 'क्रीम' },
    hex: '#FFFDD0',
    rgb: '255, 253, 208',
    meaning: {
      en: 'Signifies gentleness, comfort, and subtle elegance. Promotes harmony.',
      hi: 'कोमलता, आराम और सूक्ष्म सुंदरता का प्रतीक। सामंजस्य को बढ़ावा देता है।',
    },
    occasions: [
      { en: 'Home decoration', hi: 'घर की सजावट' },
      { en: 'Casual wear', hi: 'कैजुअल पहनावा' },
      { en: 'Relaxation', hi: 'विश्राम' },
    ],
    chakra: { en: 'Heart (Anahata)', hi: 'अनाहत चक्र' },
  },

  // Jupiter colors (Number 3)
  warmaccent: {
    name: { en: 'Saffron', hi: 'केसरिया' },
    hex: '#FF9933',
    rgb: '255, 153, 51',
    meaning: {
      en: 'Sacred color representing spirituality, sacrifice, and divine wisdom. Highly auspicious.',
      hi: 'आध्यात्मिकता, त्याग और दिव्य ज्ञान का पवित्र रंग। अत्यंत शुभ।',
    },
    occasions: [
      { en: 'Religious ceremonies', hi: 'धार्मिक समारोह' },
      { en: 'Thursday worship', hi: 'गुरुवार पूजा' },
      { en: 'Spiritual practices', hi: 'आध्यात्मिक अभ्यास' },
    ],
    chakra: { en: 'Sacral (Svadhisthana)', hi: 'स्वाधिष्ठान चक्र' },
  },
  purple: {
    name: { en: 'Purple', hi: 'बैंगनी' },
    hex: '#8B5CF6',
    rgb: '139, 92, 246',
    meaning: {
      en: 'Represents wisdom, royalty, and spiritual enlightenment. Enhances meditation.',
      hi: 'ज्ञान, राजसी गुण और आध्यात्मिक प्रबोधन का प्रतीक। ध्यान को बढ़ाता है।',
    },
    occasions: [
      { en: 'Spiritual gatherings', hi: 'आध्यात्मिक सभाएं' },
      { en: 'Wisdom-seeking', hi: 'ज्ञान अन्वेषण' },
      { en: 'Formal events', hi: 'औपचारिक कार्यक्रम' },
    ],
    chakra: { en: 'Crown (Sahasrara)', hi: 'सहस्रार चक्र' },
  },

  // Rahu colors (Number 4)
  electricBlue: {
    name: { en: 'Electric Blue', hi: 'इलेक्ट्रिक नीला' },
    hex: '#7DF9FF',
    rgb: '125, 249, 255',
    meaning: {
      en: 'Represents innovation, technology, and breaking boundaries. Enhances uniqueness.',
      hi: 'नवाचार, प्रौद्योगिकी और सीमाओं को तोड़ने का प्रतीक। विशिष्टता बढ़ाता है।',
    },
    occasions: [
      { en: 'Tech presentations', hi: 'तकनीकी प्रस्तुतियां' },
      { en: 'Innovative projects', hi: 'नवोन्मेषी परियोजनाएं' },
      { en: 'Modern events', hi: 'आधुनिक कार्यक्रम' },
    ],
    chakra: { en: 'Throat (Vishuddha)', hi: 'विशुद्ध चक्र' },
  },
  grey: {
    name: { en: 'Grey', hi: 'स्लेटी' },
    hex: '#6B7280',
    rgb: '107, 114, 128',
    meaning: {
      en: 'Represents neutrality, balance, and sophistication. Good for serious matters.',
      hi: 'तटस्थता, संतुलन और परिष्कार का प्रतीक। गंभीर मामलों के लिए अच्छा।',
    },
    occasions: [
      { en: 'Business meetings', hi: 'व्यावसायिक बैठकें' },
      { en: 'Legal matters', hi: 'कानूनी मामले' },
      { en: 'Neutral situations', hi: 'तटस्थ स्थितियां' },
    ],
    chakra: { en: 'Root (Muladhara)', hi: 'मूलाधार चक्र' },
  },
  smokyQuartz: {
    name: { en: 'Smoky Quartz', hi: 'धुएं जैसा भूरा' },
    hex: '#848482',
    rgb: '132, 132, 130',
    meaning: {
      en: 'Grounding color that helps overcome obstacles. Provides protection and stability.',
      hi: 'ग्राउंडिंग रंग जो बाधाओं को दूर करने में मदद करता है। सुरक्षा और स्थिरता प्रदान करता है।',
    },
    occasions: [
      { en: 'Challenging times', hi: 'चुनौतीपूर्ण समय' },
      { en: 'Protection rituals', hi: 'सुरक्षा अनुष्ठान' },
      { en: 'Grounding practices', hi: 'ग्राउंडिंग अभ्यास' },
    ],
    chakra: { en: 'Root (Muladhara)', hi: 'मूलाधार चक्र' },
  },

  // Mercury colors (Number 5)
  green: {
    name: { en: 'Green', hi: 'हरा' },
    hex: '#22C55E',
    rgb: '34, 197, 94',
    meaning: {
      en: 'Represents growth, prosperity, and new beginnings. Attracts wealth and health.',
      hi: 'विकास, समृद्धि और नई शुरुआत का प्रतीक। धन और स्वास्थ्य को आकर्षित करता है।',
    },
    occasions: [
      { en: 'Wednesday worship', hi: 'बुधवार पूजा' },
      { en: 'Business dealings', hi: 'व्यापारिक सौदे' },
      { en: 'New ventures', hi: 'नए उद्यम' },
    ],
    chakra: { en: 'Heart (Anahata)', hi: 'अनाहत चक्र' },
  },
  emeraldGreen: {
    name: { en: 'Emerald Green', hi: 'पन्ना हरा' },
    hex: '#50C878',
    rgb: '80, 200, 120',
    meaning: {
      en: 'Color of Mercury gemstone. Enhances communication, intellect, and business acumen.',
      hi: 'बुध रत्न का रंग। संचार, बुद्धि और व्यापार कौशल बढ़ाता है।',
    },
    occasions: [
      { en: 'Important communications', hi: 'महत्वपूर्ण संवाद' },
      { en: 'Examinations', hi: 'परीक्षाएं' },
      { en: 'Financial decisions', hi: 'वित्तीय निर्णय' },
    ],
    chakra: { en: 'Heart (Anahata)', hi: 'अनाहत चक्र' },
  },

  // Venus colors (Number 6)
  pink: {
    name: { en: 'Pink', hi: 'गुलाबी' },
    hex: '#EC4899',
    rgb: '236, 72, 153',
    meaning: {
      en: 'Represents love, romance, and feminine energy. Attracts relationships and beauty.',
      hi: 'प्रेम, रोमांस और स्त्री ऊर्जा का प्रतीक। संबंधों और सुंदरता को आकर्षित करता है।',
    },
    occasions: [
      { en: 'Romantic dates', hi: 'रोमांटिक डेट्स' },
      { en: 'Friday worship', hi: 'शुक्रवार पूजा' },
      { en: 'Beauty treatments', hi: 'सौंदर्य उपचार' },
    ],
    chakra: { en: 'Heart (Anahata)', hi: 'अनाहत चक्र' },
  },
  lightBlue: {
    name: { en: 'Light Blue', hi: 'हल्का नीला' },
    hex: '#87CEEB',
    rgb: '135, 206, 235',
    meaning: {
      en: 'Represents peace, tranquility, and artistic expression. Calms emotions.',
      hi: 'शांति, सुकून और कलात्मक अभिव्यक्ति का प्रतीक। भावनाओं को शांत करता है।',
    },
    occasions: [
      { en: 'Creative work', hi: 'रचनात्मक कार्य' },
      { en: 'Relaxation', hi: 'विश्राम' },
      { en: 'Artistic pursuits', hi: 'कलात्मक गतिविधियां' },
    ],
    chakra: { en: 'Throat (Vishuddha)', hi: 'विशुद्ध चक्र' },
  },
  deepteal: {
    name: { en: 'Turquoise', hi: 'फ़िरोज़ा' },
    hex: '#40E0D0',
    rgb: '64, 224, 208',
    meaning: {
      en: 'Combines water and earth energies. Enhances creativity and emotional healing.',
      hi: 'जल और पृथ्वी ऊर्जा का संयोजन। रचनात्मकता और भावनात्मक उपचार बढ़ाता है।',
    },
    occasions: [
      { en: 'Healing sessions', hi: 'उपचार सत्र' },
      { en: 'Beach outings', hi: 'समुद्र तट यात्राएं' },
      { en: 'Spa days', hi: 'स्पा दिन' },
    ],
    chakra: { en: 'Throat (Vishuddha)', hi: 'विशुद्ध चक्र' },
  },

  // Ketu colors (Number 7)
  violet: {
    name: { en: 'Violet', hi: 'बैंगनी' },
    hex: '#8B5CF6',
    rgb: '139, 92, 246',
    meaning: {
      en: 'Represents spirituality, mysticism, and psychic abilities. Deepens meditation.',
      hi: 'आध्यात्मिकता, रहस्यवाद और मानसिक शक्तियों का प्रतीक। ध्यान को गहरा करता है।',
    },
    occasions: [
      { en: 'Meditation retreats', hi: 'ध्यान शिविर' },
      { en: 'Spiritual practices', hi: 'आध्यात्मिक अभ्यास' },
      { en: 'Intuitive work', hi: 'अंतर्ज्ञान कार्य' },
    ],
    chakra: { en: 'Crown (Sahasrara)', hi: 'सहस्रार चक्र' },
  },
  lavender: {
    name: { en: 'Lavender', hi: 'लैवेंडर' },
    hex: '#E6E6FA',
    rgb: '230, 230, 250',
    meaning: {
      en: 'Calming color for spiritual seekers. Promotes peace and inner wisdom.',
      hi: 'आध्यात्मिक साधकों के लिए शांत करने वाला रंग। शांति और आंतरिक ज्ञान को बढ़ावा देता है।',
    },
    occasions: [
      { en: 'Evening prayers', hi: 'शाम की प्रार्थना' },
      { en: 'Relaxation', hi: 'विश्राम' },
      { en: 'Sleep preparation', hi: 'नींद की तैयारी' },
    ],
    chakra: { en: 'Third Eye (Ajna)', hi: 'आज्ञा चक्र' },
  },
  offWhite: {
    name: { en: 'Off-White', hi: 'ऑफ-व्हाइट' },
    hex: '#FAF9F6',
    rgb: '250, 249, 246',
    meaning: {
      en: 'Subtle purity that supports detachment and spiritual growth.',
      hi: 'सूक्ष्म शुद्धता जो वैराग्य और आध्यात्मिक विकास का समर्थन करती है।',
    },
    occasions: [
      { en: 'Spiritual ceremonies', hi: 'आध्यात्मिक समारोह' },
      { en: 'Meditation', hi: 'ध्यान' },
      { en: 'Peaceful moments', hi: 'शांतिपूर्ण क्षण' },
    ],
    chakra: { en: 'Crown (Sahasrara)', hi: 'सहस्रार चक्र' },
  },

  // Saturn colors (Number 8)
  black: {
    name: { en: 'Black', hi: 'काला' },
    hex: '#000000',
    rgb: '0, 0, 0',
    meaning: {
      en: 'Represents authority, protection, and discipline. Absorbs negativity.',
      hi: 'अधिकार, सुरक्षा और अनुशासन का प्रतीक। नकारात्मकता को अवशोषित करता है।',
    },
    occasions: [
      { en: 'Saturday worship', hi: 'शनिवार पूजा' },
      { en: 'Formal events', hi: 'औपचारिक कार्यक्रम' },
      { en: 'Protection rituals', hi: 'सुरक्षा अनुष्ठान' },
    ],
    chakra: { en: 'Root (Muladhara)', hi: 'मूलाधार चक्र' },
  },
  darkBlue: {
    name: { en: 'Dark Blue', hi: 'गहरा नीला' },
    hex: '#1E3A8A',
    rgb: '30, 58, 138',
    meaning: {
      en: 'Represents depth, stability, and karmic lessons. Supports serious endeavors.',
      hi: 'गहराई, स्थिरता और कर्म पाठों का प्रतीक। गंभीर प्रयासों का समर्थन करता है।',
    },
    occasions: [
      { en: 'Important decisions', hi: 'महत्वपूर्ण निर्णय' },
      { en: 'Legal matters', hi: 'कानूनी मामले' },
      { en: 'Authority positions', hi: 'अधिकार पद' },
    ],
    chakra: { en: 'Third Eye (Ajna)', hi: 'आज्ञा चक्र' },
  },
  darkBrown: {
    name: { en: 'Dark Brown', hi: 'गहरा भूरा' },
    hex: '#3D2914',
    rgb: '61, 41, 20',
    meaning: {
      en: 'Grounding color representing earth and stability. Good for patience.',
      hi: 'पृथ्वी और स्थिरता का प्रतिनिधित्व करने वाला ग्राउंडिंग रंग। धैर्य के लिए अच्छा।',
    },
    occasions: [
      { en: 'Grounding practices', hi: 'ग्राउंडिंग अभ्यास' },
      { en: 'Winter wear', hi: 'सर्दियों के कपड़े' },
      { en: 'Stability rituals', hi: 'स्थिरता अनुष्ठान' },
    ],
    chakra: { en: 'Root (Muladhara)', hi: 'मूलाधार चक्र' },
  },

  // Mars colors (Number 9)
  red: {
    name: { en: 'Red', hi: 'लाल' },
    hex: '#EF4444',
    rgb: '239, 68, 68',
    meaning: {
      en: 'Represents courage, passion, and vital energy. Boosts confidence and action.',
      hi: 'साहस, जुनून और जीवन ऊर्जा का प्रतीक। आत्मविश्वास और कार्रवाई बढ़ाता है।',
    },
    occasions: [
      { en: 'Tuesday worship', hi: 'मंगलवार पूजा' },
      { en: 'Competitive events', hi: 'प्रतिस्पर्धी कार्यक्रम' },
      { en: 'Action-oriented tasks', hi: 'कार्य-उन्मुख कार्य' },
    ],
    chakra: { en: 'Root (Muladhara)', hi: 'मूलाधार चक्र' },
  },
  maroon: {
    name: { en: 'Maroon', hi: 'मरून' },
    hex: '#800000',
    rgb: '128, 0, 0',
    meaning: {
      en: 'Deep Mars energy for controlled power and determination. Leadership color.',
      hi: 'नियंत्रित शक्ति और दृढ़ संकल्प के लिए गहरी मंगल ऊर्जा। नेतृत्व रंग।',
    },
    occasions: [
      { en: 'Leadership roles', hi: 'नेतृत्व भूमिकाएं' },
      { en: 'Important presentations', hi: 'महत्वपूर्ण प्रस्तुतियां' },
      { en: 'Confidence building', hi: 'आत्मविश्वास निर्माण' },
    ],
    chakra: { en: 'Root (Muladhara)', hi: 'मूलाधार चक्र' },
  },
  coral: {
    name: { en: 'Coral', hi: 'मूंगा' },
    hex: '#FF7F50',
    rgb: '255, 127, 80',
    meaning: {
      en: 'Color of Red Coral gemstone. Balances Mars energy while promoting vitality.',
      hi: 'लाल मूंगा रत्न का रंग। जीवन शक्ति को बढ़ावा देते हुए मंगल ऊर्जा को संतुलित करता है।',
    },
    occasions: [
      { en: 'Physical activities', hi: 'शारीरिक गतिविधियां' },
      { en: 'Health improvement', hi: 'स्वास्थ्य सुधार' },
      { en: 'Energy boosting', hi: 'ऊर्जा बढ़ाना' },
    ],
    chakra: { en: 'Sacral (Svadhisthana)', hi: 'स्वाधिष्ठान चक्र' },
  },

  // Additional harmonious colors
  teal: {
    name: { en: 'Teal', hi: 'टील' },
    hex: '#14B8A6',
    rgb: '20, 184, 166',
    meaning: {
      en: 'Balance of blue and green energies. Promotes emotional balance and clarity.',
      hi: 'नीले और हरे ऊर्जा का संतुलन। भावनात्मक संतुलन और स्पष्टता को बढ़ावा देता है।',
    },
    occasions: [
      { en: 'Healing work', hi: 'उपचार कार्य' },
      { en: 'Balanced decisions', hi: 'संतुलित निर्णय' },
      { en: 'Harmonious meetings', hi: 'सामंजस्यपूर्ण बैठकें' },
    ],
    chakra: { en: 'Heart (Anahata)', hi: 'अनाहत चक्र' },
  },
  indigo: {
    name: { en: 'Indigo', hi: 'नील' },
    hex: '#4F46E5',
    rgb: '79, 70, 229',
    meaning: {
      en: 'Deep intuition and inner knowing. Enhances psychic abilities.',
      hi: 'गहरा अंतर्ज्ञान और आंतरिक ज्ञान। मानसिक क्षमताओं को बढ़ाता है।',
    },
    occasions: [
      { en: 'Meditation', hi: 'ध्यान' },
      { en: 'Intuitive decisions', hi: 'अंतर्ज्ञान निर्णय' },
      { en: 'Night rituals', hi: 'रात्रि अनुष्ठान' },
    ],
    chakra: { en: 'Third Eye (Ajna)', hi: 'आज्ञा चक्र' },
  },
  bronze: {
    name: { en: 'Bronze', hi: 'कांस्य' },
    hex: '#CD7F32',
    rgb: '205, 127, 50',
    meaning: {
      en: 'Earthy strength and endurance. Good for long-term projects.',
      hi: 'पृथ्वी की शक्ति और धीरज। दीर्घकालिक परियोजनाओं के लिए अच्छा।',
    },
    occasions: [
      { en: 'Autumn activities', hi: 'शरद ऋतु गतिविधियां' },
      { en: 'Traditional events', hi: 'पारंपरिक कार्यक्रम' },
      { en: 'Grounding work', hi: 'ग्राउंडिंग कार्य' },
    ],
    chakra: { en: 'Sacral (Svadhisthana)', hi: 'स्वाधिष्ठान चक्र' },
  },
  royalBlue: {
    name: { en: 'Royal Blue', hi: 'शाही नीला' },
    hex: '#4169E1',
    rgb: '65, 105, 225',
    meaning: {
      en: 'Dignity, wisdom, and trustworthiness. Excellent for professional settings.',
      hi: 'गरिमा, ज्ञान और विश्वसनीयता। पेशेवर सेटिंग्स के लिए उत्कृष्ट।',
    },
    occasions: [
      { en: 'Job interviews', hi: 'नौकरी के इंटरव्यू' },
      { en: 'Professional meetings', hi: 'पेशेवर बैठकें' },
      { en: 'Public speaking', hi: 'सार्वजनिक भाषण' },
    ],
    chakra: { en: 'Throat (Vishuddha)', hi: 'विशुद्ध चक्र' },
  },
};

// ============================================================================
// Planetary Color Profiles based on Vedic Numerology
// ============================================================================

const PLANETARY_COLOR_PROFILES: Record<number, PlanetaryColorProfile> = {
  1: {
    // Sun
    planet: { en: 'Sun (Surya)', hi: 'सूर्य' },
    primaryColors: [COLORS.gold, COLORS.orange, COLORS.yellow],
    secondaryColors: [COLORS.red, COLORS.warmaccent, COLORS.bronze],
    colorsToAvoid: [COLORS.black, COLORS.darkBlue, COLORS.grey],
    gemstone: { en: 'Ruby (Manik)', hi: 'माणिक्य' },
    metalColor: { en: 'Gold', hi: 'सोना' },
  },
  2: {
    // Moon
    planet: { en: 'Moon (Chandra)', hi: 'चंद्रमा' },
    primaryColors: [COLORS.white, COLORS.silver, COLORS.cream],
    secondaryColors: [COLORS.lightBlue, COLORS.lavender, COLORS.offWhite],
    colorsToAvoid: [COLORS.red, COLORS.black, COLORS.darkBrown],
    gemstone: { en: 'Pearl (Moti)', hi: 'मोती' },
    metalColor: { en: 'Silver', hi: 'चांदी' },
  },
  3: {
    // Jupiter
    planet: { en: 'Jupiter (Guru)', hi: 'बृहस्पति' },
    primaryColors: [COLORS.yellow, COLORS.warmaccent, COLORS.gold],
    secondaryColors: [COLORS.orange, COLORS.purple, COLORS.cream],
    colorsToAvoid: [COLORS.black, COLORS.grey, COLORS.darkBlue],
    gemstone: { en: 'Yellow Sapphire (Pukhraj)', hi: 'पुखराज' },
    metalColor: { en: 'Gold', hi: 'सोना' },
  },
  4: {
    // Rahu (North Node)
    planet: { en: 'Rahu (North Node)', hi: 'राहु' },
    primaryColors: [COLORS.electricBlue, COLORS.grey, COLORS.smokyQuartz],
    secondaryColors: [COLORS.darkBlue, COLORS.indigo, COLORS.lavender],
    colorsToAvoid: [COLORS.red, COLORS.orange, COLORS.yellow],
    gemstone: { en: "Hessonite (Gomed)", hi: 'गोमेद' },
    metalColor: { en: 'Lead', hi: 'सीसा' },
  },
  5: {
    // Mercury
    planet: { en: 'Mercury (Budh)', hi: 'बुध' },
    primaryColors: [COLORS.green, COLORS.emeraldGreen, COLORS.teal],
    secondaryColors: [COLORS.lightBlue, COLORS.deepteal, COLORS.yellow],
    colorsToAvoid: [COLORS.red, COLORS.maroon, COLORS.black],
    gemstone: { en: 'Emerald (Panna)', hi: 'पन्ना' },
    metalColor: { en: 'Brass', hi: 'पीतल' },
  },
  6: {
    // Venus
    planet: { en: 'Venus (Shukra)', hi: 'शुक्र' },
    primaryColors: [COLORS.pink, COLORS.white, COLORS.lightBlue],
    secondaryColors: [COLORS.deepteal, COLORS.cream, COLORS.silver],
    colorsToAvoid: [COLORS.red, COLORS.black, COLORS.grey],
    gemstone: { en: 'Diamond (Heera)', hi: 'हीरा' },
    metalColor: { en: 'Silver', hi: 'चांदी' },
  },
  7: {
    // Ketu (South Node)
    planet: { en: 'Ketu (South Node)', hi: 'केतु' },
    primaryColors: [COLORS.violet, COLORS.lavender, COLORS.offWhite],
    secondaryColors: [COLORS.grey, COLORS.indigo, COLORS.smokyQuartz],
    colorsToAvoid: [COLORS.red, COLORS.orange, COLORS.yellow],
    gemstone: { en: "Cat's Eye (Lehsunia)", hi: 'लहसुनिया' },
    metalColor: { en: 'Lead', hi: 'सीसा' },
  },
  8: {
    // Saturn
    planet: { en: 'Saturn (Shani)', hi: 'शनि' },
    primaryColors: [COLORS.black, COLORS.darkBlue, COLORS.darkBrown],
    secondaryColors: [COLORS.grey, COLORS.violet, COLORS.indigo],
    colorsToAvoid: [COLORS.red, COLORS.orange, COLORS.yellow],
    gemstone: { en: 'Blue Sapphire (Neelam)', hi: 'नीलम' },
    metalColor: { en: 'Iron', hi: 'लोहा' },
  },
  9: {
    // Mars
    planet: { en: 'Mars (Mangal)', hi: 'मंगल' },
    primaryColors: [COLORS.red, COLORS.maroon, COLORS.coral],
    secondaryColors: [COLORS.orange, COLORS.gold, COLORS.bronze],
    colorsToAvoid: [COLORS.black, COLORS.darkBlue, COLORS.white],
    gemstone: { en: 'Red Coral (Moonga)', hi: 'मूंगा' },
    metalColor: { en: 'Copper', hi: 'तांबा' },
  },
};

// ============================================================================
// Weekday Color Associations
// ============================================================================

const WEEKDAY_COLORS = [
  {
    day: { en: 'Sunday', hi: 'रविवार' },
    color: COLORS.gold,
    planet: 1,
  },
  {
    day: { en: 'Monday', hi: 'सोमवार' },
    color: COLORS.white,
    planet: 2,
  },
  {
    day: { en: 'Tuesday', hi: 'मंगलवार' },
    color: COLORS.red,
    planet: 9,
  },
  {
    day: { en: 'Wednesday', hi: 'बुधवार' },
    color: COLORS.green,
    planet: 5,
  },
  {
    day: { en: 'Thursday', hi: 'गुरुवार' },
    color: COLORS.yellow,
    planet: 3,
  },
  {
    day: { en: 'Friday', hi: 'शुक्रवार' },
    color: COLORS.pink,
    planet: 6,
  },
  {
    day: { en: 'Saturday', hi: 'शनिवार' },
    color: COLORS.black,
    planet: 8,
  },
];

// ============================================================================
// Seasonal Color Recommendations
// ============================================================================

const SEASONAL_COLORS = [
  {
    season: { en: 'Spring (Vasant)', hi: 'वसंत' },
    colors: [COLORS.green, COLORS.yellow, COLORS.pink, COLORS.lightBlue],
  },
  {
    season: { en: 'Summer (Grishma)', hi: 'ग्रीष्म' },
    colors: [COLORS.white, COLORS.lightBlue, COLORS.cream, COLORS.silver],
  },
  {
    season: { en: 'Monsoon (Varsha)', hi: 'वर्षा' },
    colors: [COLORS.green, COLORS.teal, COLORS.indigo, COLORS.grey],
  },
  {
    season: { en: 'Autumn (Sharad)', hi: 'शरद' },
    colors: [COLORS.orange, COLORS.bronze, COLORS.maroon, COLORS.gold],
  },
  {
    season: { en: 'Pre-Winter (Hemant)', hi: 'हेमंत' },
    colors: [COLORS.darkBrown, COLORS.maroon, COLORS.grey, COLORS.darkBlue],
  },
  {
    season: { en: 'Winter (Shishir)', hi: 'शिशिर' },
    colors: [COLORS.darkBlue, COLORS.black, COLORS.white, COLORS.silver],
  },
];

// ============================================================================
// Life Area Color Associations
// ============================================================================

const COLORS_FOR_SUCCESS: Record<number, ColorInfo[]> = {
  1: [COLORS.gold, COLORS.orange, COLORS.royalBlue],
  2: [COLORS.white, COLORS.cream, COLORS.lightBlue],
  3: [COLORS.yellow, COLORS.gold, COLORS.purple],
  4: [COLORS.electricBlue, COLORS.grey, COLORS.indigo],
  5: [COLORS.green, COLORS.emeraldGreen, COLORS.royalBlue],
  6: [COLORS.pink, COLORS.deepteal, COLORS.white],
  7: [COLORS.violet, COLORS.lavender, COLORS.white],
  8: [COLORS.darkBlue, COLORS.black, COLORS.grey],
  9: [COLORS.red, COLORS.maroon, COLORS.gold],
};

const COLORS_FOR_HEALTH: Record<number, ColorInfo[]> = {
  1: [COLORS.orange, COLORS.yellow, COLORS.green],
  2: [COLORS.white, COLORS.silver, COLORS.green],
  3: [COLORS.yellow, COLORS.warmaccent, COLORS.green],
  4: [COLORS.green, COLORS.teal, COLORS.lavender],
  5: [COLORS.green, COLORS.emeraldGreen, COLORS.teal],
  6: [COLORS.pink, COLORS.green, COLORS.lightBlue],
  7: [COLORS.lavender, COLORS.violet, COLORS.green],
  8: [COLORS.darkBlue, COLORS.green, COLORS.violet],
  9: [COLORS.coral, COLORS.orange, COLORS.green],
};

const COLORS_FOR_WEALTH: Record<number, ColorInfo[]> = {
  1: [COLORS.gold, COLORS.yellow, COLORS.green],
  2: [COLORS.green, COLORS.silver, COLORS.white],
  3: [COLORS.yellow, COLORS.gold, COLORS.green],
  4: [COLORS.green, COLORS.grey, COLORS.indigo],
  5: [COLORS.green, COLORS.emeraldGreen, COLORS.gold],
  6: [COLORS.green, COLORS.pink, COLORS.deepteal],
  7: [COLORS.green, COLORS.violet, COLORS.grey],
  8: [COLORS.darkBlue, COLORS.black, COLORS.green],
  9: [COLORS.red, COLORS.gold, COLORS.green],
};

const COLORS_FOR_RELATIONSHIPS: Record<number, ColorInfo[]> = {
  1: [COLORS.orange, COLORS.pink, COLORS.gold],
  2: [COLORS.pink, COLORS.white, COLORS.cream],
  3: [COLORS.yellow, COLORS.pink, COLORS.warmaccent],
  4: [COLORS.lightBlue, COLORS.lavender, COLORS.deepteal],
  5: [COLORS.green, COLORS.pink, COLORS.deepteal],
  6: [COLORS.pink, COLORS.white, COLORS.lightBlue],
  7: [COLORS.lavender, COLORS.white, COLORS.violet],
  8: [COLORS.violet, COLORS.darkBlue, COLORS.pink],
  9: [COLORS.red, COLORS.pink, COLORS.coral],
};

// ============================================================================
// Personal Year Color (based on current year)
// ============================================================================

const PERSONAL_YEAR_COLORS: Record<number, ColorInfo> = {
  1: COLORS.gold,
  2: COLORS.white,
  3: COLORS.yellow,
  4: COLORS.electricBlue,
  5: COLORS.green,
  6: COLORS.pink,
  7: COLORS.violet,
  8: COLORS.darkBlue,
  9: COLORS.red,
};

// ============================================================================
// Pythagorean Letter Values for Name Calculation
// ============================================================================

const PYTHAGOREAN_VALUES: Record<string, number> = {
  A: 1,
  B: 2,
  C: 3,
  D: 4,
  E: 5,
  F: 6,
  G: 7,
  H: 8,
  I: 9,
  J: 1,
  K: 2,
  L: 3,
  M: 4,
  N: 5,
  O: 6,
  P: 7,
  Q: 8,
  R: 9,
  S: 1,
  T: 2,
  U: 3,
  V: 4,
  W: 5,
  X: 6,
  Y: 7,
  Z: 8,
};

// ============================================================================
// Personal Guidance based on dominant number
// ============================================================================

const PERSONAL_GUIDANCE: Record<number, BilingualText> = {
  1: {
    en: 'Your solar energy thrives with warm colors. Gold and orange boost your natural leadership. Avoid dark colors that may dim your radiance. Wear bright colors on Sundays for maximum benefit.',
    hi: 'आपकी सौर ऊर्जा गर्म रंगों के साथ फलती-फूलती है। सोना और नारंगी आपके प्राकृतिक नेतृत्व को बढ़ाते हैं। गहरे रंगों से बचें जो आपकी चमक को कम कर सकते हैं। अधिकतम लाभ के लिए रविवार को चमकीले रंग पहनें।',
  },
  2: {
    en: 'Your lunar sensitivity flourishes with soft, light colors. White and silver enhance your intuition. Avoid harsh reds and blacks. Monday is your power day for wearing white.',
    hi: 'आपकी चंद्र संवेदनशीलता नरम, हल्के रंगों के साथ फलती-फूलती है। सफेद और चांदी आपके अंतर्ज्ञान को बढ़ाते हैं। कठोर लाल और काले रंगों से बचें। सफेद पहनने के लिए सोमवार आपका शक्ति दिवस है।',
  },
  3: {
    en: 'Jupiter blesses you with optimism that shines through yellow and warmaccent. These colors attract wisdom and prosperity. Purple enhances your spiritual side. Thursdays are auspicious for yellow.',
    hi: 'बृहस्पति आपको आशावाद से आशीर्वाद देते हैं जो पीले और केसरिया रंग के माध्यम से चमकता है। ये रंग ज्ञान और समृद्धि को आकर्षित करते हैं। बैंगनी आपके आध्यात्मिक पक्ष को बढ़ाता है। गुरुवार पीले रंग के लिए शुभ है।',
  },
  4: {
    en: "Rahu's unconventional energy suits unique shades like electric blue and smoky tones. These help channel your innovative nature. Avoid bright, warm colors that clash with your energy.",
    hi: 'राहु की अपरंपरागत ऊर्जा इलेक्ट्रिक नीले और धुएं जैसे टोन जैसे अनूठे रंगों के अनुकूल है। ये आपकी नवोन्मेषी प्रकृति को चैनल करने में मदद करते हैं। चमकीले, गर्म रंगों से बचें जो आपकी ऊर्जा से टकराते हैं।',
  },
  5: {
    en: "Mercury's mercurial nature loves green - the color of growth and communication. Emerald shades boost your business acumen. Wednesdays are powerful for wearing green.",
    hi: 'बुध की चंचल प्रकृति हरे रंग से प्यार करती है - विकास और संचार का रंग। पन्ना रंग आपके व्यापार कौशल को बढ़ाता है। हरा पहनने के लिए बुधवार शक्तिशाली है।',
  },
  6: {
    en: "Venus graces you with an eye for beauty. Pink and pastels enhance your harmonious nature. Light blue supports artistic expression. Friday is your day for romantic colors.",
    hi: 'शुक्र आपको सुंदरता की दृष्टि प्रदान करता है। गुलाबी और पेस्टल आपके सामंजस्यपूर्ण स्वभाव को बढ़ाते हैं। हल्का नीला कलात्मक अभिव्यक्ति का समर्थन करता है। शुक्रवार रोमांटिक रंगों के लिए आपका दिन है।',
  },
  7: {
    en: "Ketu's spiritual energy resonates with violet and lavender. These colors deepen your meditation and intuition. Off-white supports detachment. Avoid flashy, bright colors.",
    hi: 'केतु की आध्यात्मिक ऊर्जा बैंगनी और लैवेंडर के साथ प्रतिध्वनित होती है। ये रंग आपके ध्यान और अंतर्ज्ञान को गहरा करते हैं। ऑफ-व्हाइट वैराग्य का समर्थन करता है। आकर्षक, चमकीले रंगों से बचें।',
  },
  8: {
    en: "Saturn's serious energy aligns with dark blue, black, and deep browns. These colors enhance your authority and discipline. Saturdays are powerful for dark colors. Avoid reds and oranges.",
    hi: 'शनि की गंभीर ऊर्जा गहरे नीले, काले और गहरे भूरे रंग के साथ संरेखित होती है। ये रंग आपके अधिकार और अनुशासन को बढ़ाते हैं। शनिवार गहरे रंगों के लिए शक्तिशाली है। लाल और नारंगी से बचें।',
  },
  9: {
    en: "Mars' fiery energy thrives with red and coral. These colors boost your courage and vitality. Gold enhances your leadership. Tuesdays are your power day for wearing red.",
    hi: 'मंगल की अग्नि ऊर्जा लाल और मूंगा रंग के साथ फलती-फूलती है। ये रंग आपके साहस और जीवन शक्ति को बढ़ाते हैं। सोना आपके नेतृत्व को बढ़ाता है। मंगलवार लाल पहनने के लिए आपका शक्ति दिवस है।',
  },
};

// ============================================================================
// Calculation Functions
// ============================================================================

/**
 * Reduce a number to a single digit (1-9)
 */
function reduceToSingleDigit(num: number): number {
  while (num > 9) {
    num = String(num)
      .split('')
      .reduce((sum, digit) => sum + parseInt(digit), 0);
  }
  return num;
}

/**
 * Calculate Life Path Number from date of birth
 */
function calculateLifePathNumber(dateOfBirth: string): number {
  const [year, month, day] = dateOfBirth.split('-').map(Number);

  // Reduce each component
  const dayReduced = reduceToSingleDigit(day);
  const monthReduced = reduceToSingleDigit(month);
  const yearReduced = reduceToSingleDigit(year);

  // Sum and reduce
  return reduceToSingleDigit(dayReduced + monthReduced + yearReduced);
}

/**
 * Calculate Birth Day Number (Moolank)
 */
function calculateBirthDayNumber(dateOfBirth: string): number {
  const day = parseInt(dateOfBirth.split('-')[2]);
  return reduceToSingleDigit(day);
}

/**
 * Calculate Name Number using Pythagorean system
 */
function calculateNameNumber(fullName: string): number {
  const cleanName = fullName.toUpperCase().replace(/[^A-Z]/g, '');

  let sum = 0;
  for (const letter of cleanName) {
    sum += PYTHAGOREAN_VALUES[letter] || 0;
  }

  return reduceToSingleDigit(sum);
}

/**
 * Calculate Personal Year Number
 */
function calculatePersonalYear(dateOfBirth: string): number {
  const [, month, day] = dateOfBirth.split('-').map(Number);
  const currentYear = new Date().getFullYear();

  const dayReduced = reduceToSingleDigit(day);
  const monthReduced = reduceToSingleDigit(month);
  const yearReduced = reduceToSingleDigit(currentYear);

  return reduceToSingleDigit(dayReduced + monthReduced + yearReduced);
}

/**
 * Get dominant number (most influential) from the three numbers
 */
function getDominantNumber(
  birthDay: number,
  lifePath: number,
  name: number
): number {
  // Birth Day Number is considered the most personal/psychic number
  // Life Path is the destiny, Name is the expression
  // We prioritize Birth Day for color selection as it represents core personality
  return birthDay;
}

/**
 * Check if two planets are friendly based on Vedic astrology
 */
function arePlanetsFriendly(planet1: number, planet2: number): boolean {
  const friendships: Record<number, number[]> = {
    1: [2, 3, 9], // Sun friends: Moon, Jupiter, Mars
    2: [1, 5], // Moon friends: Sun, Mercury
    3: [1, 2, 9], // Jupiter friends: Sun, Moon, Mars
    4: [5, 6, 7], // Rahu: Mercury, Venus, Ketu (neutral-friendly)
    5: [1, 6], // Mercury friends: Sun, Venus
    6: [5, 8], // Venus friends: Mercury, Saturn
    7: [4, 5, 6], // Ketu: Rahu, Mercury, Venus (neutral-friendly)
    8: [5, 6, 7], // Saturn friends: Mercury, Venus, Ketu
    9: [1, 2, 3], // Mars friends: Sun, Moon, Jupiter
  };

  return friendships[planet1]?.includes(planet2) || false;
}

// ============================================================================
// Main Calculation Function
// ============================================================================

/**
 * Calculate comprehensive lucky color profile
 */
export function calculateLuckyColors(
  dateOfBirth: string,
  fullName: string
): LuckyColorResult {
  const birthDayNumber = calculateBirthDayNumber(dateOfBirth);
  const lifePathNumber = calculateLifePathNumber(dateOfBirth);
  const nameNumber = calculateNameNumber(fullName);
  const personalYear = calculatePersonalYear(dateOfBirth);
  const dominantNumber = getDominantNumber(
    birthDayNumber,
    lifePathNumber,
    nameNumber
  );

  const profile = PLANETARY_COLOR_PROFILES[dominantNumber];

  // Calculate weekday colors with auspiciousness
  const weekdayColors = WEEKDAY_COLORS.map((weekday) => ({
    day: weekday.day,
    color: weekday.color,
    isAuspicious: arePlanetsFriendly(dominantNumber, weekday.planet),
  }));

  // Home decor - blend of primary and harmonious colors
  const homeDecorColors = [
    ...profile.primaryColors.slice(0, 2),
    ...profile.secondaryColors.slice(0, 2),
  ];

  // Workwear - professional versions of lucky colors
  const workwearColors = [
    ...profile.primaryColors.slice(0, 1),
    COLORS.royalBlue,
    COLORS.grey,
    ...profile.secondaryColors.slice(0, 1),
  ];

  return {
    dateOfBirth,
    fullName,
    birthDayNumber,
    lifePathNumber,
    nameNumber,
    rulingPlanet: profile.planet,
    primaryLuckyColors: profile.primaryColors,
    secondaryLuckyColors: profile.secondaryColors,
    colorsForSuccess: COLORS_FOR_SUCCESS[dominantNumber],
    colorsForHealth: COLORS_FOR_HEALTH[dominantNumber],
    colorsForWealth: COLORS_FOR_WEALTH[dominantNumber],
    colorsForRelationships: COLORS_FOR_RELATIONSHIPS[dominantNumber],
    colorsToAvoid: profile.colorsToAvoid,
    weekdayColors,
    seasonalColors: SEASONAL_COLORS,
    homeDecorColors,
    workwearColors,
    currentYearColor: PERSONAL_YEAR_COLORS[personalYear],
    personalGuidance: PERSONAL_GUIDANCE[dominantNumber],
  };
}

/**
 * Get color information by name
 */
export function getColorByName(name: string): ColorInfo | null {
  return COLORS[name] || null;
}

/**
 * Get all available colors
 */
export function getAllColors(): Record<string, ColorInfo> {
  return COLORS;
}
