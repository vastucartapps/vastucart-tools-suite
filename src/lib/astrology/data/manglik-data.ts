/**
 * Manglik Dosha (Mangal Dosha / Kuja Dosha) Data
 *
 * Mars placement in houses 1, 2, 4, 7, 8, or 12 from Lagna, Moon, or Venus
 * causes Manglik Dosha which affects marriage and relationships.
 */

// Houses where Mars causes Manglik Dosha
export const MANGLIK_HOUSES = [1, 2, 4, 7, 8, 12];

// Severity based on house
export const HOUSE_SEVERITY: Record<number, 'low' | 'medium' | 'high'> = {
  1: 'medium',  // Self - aggression in personality
  2: 'low',     // Family - harsh speech
  4: 'medium',  // Home - domestic discord
  7: 'high',    // Spouse - most severe, direct impact on marriage
  8: 'high',    // Longevity - can indicate widowhood in extreme cases
  12: 'medium', // Losses - financial strain in marriage
};

// Affected life areas by house
export const HOUSE_EFFECTS: Record<number, { en: string; hi: string }> = {
  1: {
    en: 'Personality and temperament - may cause aggressive behavior and ego clashes with spouse',
    hi: 'व्यक्तित्व और स्वभाव - आक्रामक व्यवहार और जीवनसाथी के साथ अहंकार टकराव हो सकता है'
  },
  2: {
    en: 'Family and speech - may cause harsh words and family conflicts',
    hi: 'परिवार और वाणी - कठोर शब्द और पारिवारिक विवाद हो सकते हैं'
  },
  4: {
    en: 'Domestic peace and property - may cause restlessness at home and property disputes',
    hi: 'घरेलू शांति और संपत्ति - घर में बेचैनी और संपत्ति विवाद हो सकते हैं'
  },
  7: {
    en: 'Marriage and partnerships - directly affects spouse, may cause delays or conflicts in marriage',
    hi: 'विवाह और साझेदारी - सीधे जीवनसाथी को प्रभावित करता है, विवाह में देरी या विवाद हो सकते हैं'
  },
  8: {
    en: 'Longevity and inheritance - may cause health issues to spouse or inheritance disputes',
    hi: 'आयु और विरासत - जीवनसाथी को स्वास्थ्य समस्या या विरासत विवाद हो सकते हैं'
  },
  12: {
    en: 'Expenses and bed pleasures - may cause financial strain or intimacy issues in marriage',
    hi: 'खर्च और शयन सुख - विवाह में वित्तीय तनाव या अंतरंगता समस्या हो सकती है'
  },
};

// Cancellation conditions
export interface CancellationRule {
  id: string;
  name: { en: string; hi: string };
  description: { en: string; hi: string };
}

export const CANCELLATION_RULES: CancellationRule[] = [
  {
    id: 'own_sign',
    name: { en: 'Mars in Own Sign', hi: 'मंगल स्वराशि में' },
    description: {
      en: 'Mars in Aries or Scorpio cancels the dosha as Mars is strong and balanced',
      hi: 'मेष या वृश्चिक में मंगल दोष को निरस्त करता है क्योंकि मंगल मजबूत और संतुलित है'
    }
  },
  {
    id: 'exalted',
    name: { en: 'Mars Exalted', hi: 'मंगल उच्च का' },
    description: {
      en: 'Mars in Capricorn (exaltation) gives positive results instead of negative',
      hi: 'मकर में मंगल (उच्च) नकारात्मक के बजाय सकारात्मक परिणाम देता है'
    }
  },
  {
    id: 'jupiter_aspect',
    name: { en: 'Jupiter Aspects Mars', hi: 'गुरु की दृष्टि मंगल पर' },
    description: {
      en: 'Jupiter\'s beneficial aspect on Mars reduces the malefic effects significantly',
      hi: 'मंगल पर गुरु की शुभ दृष्टि दुष्प्रभावों को काफी कम करती है'
    }
  },
  {
    id: 'venus_conjunction',
    name: { en: 'Venus Conjunct Mars', hi: 'शुक्र-मंगल युति' },
    description: {
      en: 'Venus conjunction with Mars balances the aggressive energy',
      hi: 'शुक्र के साथ मंगल की युति आक्रामक ऊर्जा को संतुलित करती है'
    }
  },
  {
    id: 'both_manglik',
    name: { en: 'Both Partners Manglik', hi: 'दोनों साथी मांगलिक' },
    description: {
      en: 'If both partners are Manglik, the dosha is cancelled mutually',
      hi: 'यदि दोनों साथी मांगलिक हैं, तो दोष परस्पर निरस्त हो जाता है'
    }
  },
  {
    id: 'age_28',
    name: { en: 'Marriage After 28', hi: '28 के बाद विवाह' },
    description: {
      en: 'Manglik dosha effect reduces significantly after age 28',
      hi: '28 वर्ष की आयु के बाद मांगलिक दोष का प्रभाव काफी कम हो जाता है'
    }
  },
  {
    id: 'first_house_special',
    name: { en: 'Special 1st House Signs', hi: 'विशेष प्रथम भाव राशियां' },
    description: {
      en: 'Mars in 1st house in Aries, Leo, Scorpio, Capricorn, or Aquarius does not cause dosha',
      hi: 'मेष, सिंह, वृश्चिक, मकर या कुंभ में प्रथम भाव में मंगल दोष नहीं देता'
    }
  },
];

// Remedies
export interface Remedy {
  id: string;
  name: { en: string; hi: string };
  description: { en: string; hi: string };
  type: 'puja' | 'donation' | 'mantra' | 'gemstone' | 'lifestyle';
}

export const REMEDIES: Remedy[] = [
  {
    id: 'kumbh_vivah',
    name: { en: 'Kumbh Vivah', hi: 'कुंभ विवाह' },
    description: {
      en: 'Symbolic marriage with a clay pot, banana tree, or silver/gold idol of Lord Vishnu before actual marriage',
      hi: 'वास्तविक विवाह से पहले मिट्टी के घड़े, केले के पेड़, या भगवान विष्णु की चांदी/सोने की मूर्ति के साथ प्रतीकात्मक विवाह'
    },
    type: 'puja'
  },
  {
    id: 'mangal_puja',
    name: { en: 'Mangal Shanti Puja', hi: 'मंगल शांति पूजा' },
    description: {
      en: 'Perform Mars pacification puja on Tuesday at a Hanuman or Mangal temple',
      hi: 'मंगलवार को हनुमान या मंगल मंदिर में मंगल शांति पूजा करें'
    },
    type: 'puja'
  },
  {
    id: 'hanuman_worship',
    name: { en: 'Hanuman Worship', hi: 'हनुमान पूजा' },
    description: {
      en: 'Worship Lord Hanuman on Tuesdays, recite Hanuman Chalisa, visit Hanuman temple',
      hi: 'मंगलवार को हनुमान जी की पूजा करें, हनुमान चालीसा पढ़ें, हनुमान मंदिर जाएं'
    },
    type: 'puja'
  },
  {
    id: 'mangal_mantra',
    name: { en: 'Mangal Mantra', hi: 'मंगल मंत्र' },
    description: {
      en: 'Chant "Om Kraam Kreem Kraum Sah Bhaumaya Namah" 108 times daily',
      hi: '"ॐ क्रां क्रीं क्रौं सः भौमाय नमः" मंत्र प्रतिदिन 108 बार जपें'
    },
    type: 'mantra'
  },
  {
    id: 'red_coral',
    name: { en: 'Red Coral Gemstone', hi: 'मूंगा रत्न' },
    description: {
      en: 'Wear red coral (Moonga) in gold or copper ring on ring finger on Tuesday after proper energization',
      hi: 'मंगलवार को उचित प्राण प्रतिष्ठा के बाद सोने या तांबे की अंगूठी में मूंगा अनामिका में धारण करें'
    },
    type: 'gemstone'
  },
  {
    id: 'donation',
    name: { en: 'Charitable Donations', hi: 'दान' },
    description: {
      en: 'Donate red lentils, red cloth, copper, jaggery, or wheat on Tuesdays',
      hi: 'मंगलवार को मसूर दाल, लाल कपड़ा, तांबा, गुड़ या गेहूं दान करें'
    },
    type: 'donation'
  },
  {
    id: 'fasting',
    name: { en: 'Tuesday Fasting', hi: 'मंगलवार व्रत' },
    description: {
      en: 'Observe fast on Tuesdays, consume only one meal without salt',
      hi: 'मंगलवार को व्रत रखें, बिना नमक का केवल एक भोजन करें'
    },
    type: 'lifestyle'
  },
];

// Overall interpretation based on severity
export const SEVERITY_INTERPRETATION = {
  none: {
    title: { en: 'No Manglik Dosha', hi: 'मांगलिक दोष नहीं' },
    description: {
      en: 'Mars is not placed in any of the Manglik houses (1, 2, 4, 7, 8, 12) from your Lagna. You are not Manglik.',
      hi: 'मंगल आपके लग्न से किसी भी मांगलिक भाव (1, 2, 4, 7, 8, 12) में नहीं है। आप मांगलिक नहीं हैं।'
    }
  },
  low: {
    title: { en: 'Mild Manglik', hi: 'सौम्य मांगलिक' },
    description: {
      en: 'You have mild Manglik dosha which may cause minor challenges. Simple remedies are usually sufficient.',
      hi: 'आपको सौम्य मांगलिक दोष है जो छोटी चुनौतियां दे सकता है। साधारण उपाय आमतौर पर पर्याप्त हैं।'
    }
  },
  medium: {
    title: { en: 'Moderate Manglik', hi: 'मध्यम मांगलिक' },
    description: {
      en: 'You have moderate Manglik dosha. It is advisable to perform remedies and consider matching with another Manglik partner.',
      hi: 'आपको मध्यम मांगलिक दोष है। उपाय करने और दूसरे मांगलिक साथी से मिलान पर विचार करना उचित है।'
    }
  },
  high: {
    title: { en: 'Strong Manglik', hi: 'तीव्र मांगलिक' },
    description: {
      en: 'You have strong Manglik dosha which requires attention. Proper remedies like Kumbh Vivah and matching with Manglik partner is recommended.',
      hi: 'आपको तीव्र मांगलिक दोष है जिस पर ध्यान देना आवश्यक है। कुंभ विवाह जैसे उचित उपाय और मांगलिक साथी से मिलान की सिफारिश की जाती है।'
    }
  },
  cancelled: {
    title: { en: 'Manglik Dosha Cancelled', hi: 'मांगलिक दोष निरस्त' },
    description: {
      en: 'Although Mars is in a Manglik position, the dosha is cancelled due to favorable planetary conditions.',
      hi: 'हालांकि मंगल मांगलिक स्थिति में है, अनुकूल ग्रह स्थितियों के कारण दोष निरस्त है।'
    }
  }
};

/**
 * Check if Jupiter aspects Mars
 * Jupiter aspects 5th, 7th, and 9th houses from its position
 */
export function doesJupiterAspectMars(jupiterHouse: number, marsHouse: number): boolean {
  const aspects = [5, 7, 9];
  for (const aspect of aspects) {
    const aspectedHouse = ((jupiterHouse - 1 + aspect) % 12) + 1;
    if (aspectedHouse === marsHouse) return true;
  }
  return false;
}

/**
 * Check if two planets are conjunct (in same house)
 */
export function areConjunct(house1: number, house2: number): boolean {
  return house1 === house2;
}

/**
 * Signs where Mars in 1st house doesn't cause Manglik
 * Aries (0), Leo (4), Scorpio (7), Capricorn (9), Aquarius (10)
 */
export const FIRST_HOUSE_EXEMPT_SIGNS = [0, 4, 7, 9, 10];

/**
 * Mars own signs: Aries (0), Scorpio (7)
 */
export const MARS_OWN_SIGNS = [0, 7];

/**
 * Mars exaltation sign: Capricorn (9)
 */
export const MARS_EXALTATION_SIGN = 9;
