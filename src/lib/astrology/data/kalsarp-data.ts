/**
 * Kalsarp Dosha (Serpent Affliction) Data
 *
 * Kalsarp Dosha occurs when all seven planets (Sun, Moon, Mars, Mercury,
 * Jupiter, Venus, Saturn) are hemmed between Rahu and Ketu.
 * There are 12 types based on Rahu's house position.
 */

export type KalsarpType =
  | 'anant' | 'kulik' | 'vasuki' | 'shankhpal'
  | 'padma' | 'mahapadma' | 'takshak' | 'karkotak'
  | 'shankhachud' | 'ghatak' | 'vishdhar' | 'sheshnag';

export interface KalsarpInfo {
  type: KalsarpType;
  name: { en: string; hi: string };
  rahuHouse: number;
  ketuHouse: number;
  effects: { en: string; hi: string };
  intensity: 'mild' | 'moderate' | 'severe';
}

// 12 types of Kalsarp based on Rahu's house position
export const KALSARP_TYPES: Record<number, KalsarpInfo> = {
  1: {
    type: 'anant',
    name: { en: 'Anant Kalsarp', hi: 'अनंत कालसर्प' },
    rahuHouse: 1,
    ketuHouse: 7,
    effects: {
      en: 'Health issues, marital problems, and obstacles in personal growth. May face issues with partnerships and enemies.',
      hi: 'स्वास्थ्य समस्याएं, वैवाहिक समस्याएं और व्यक्तिगत विकास में बाधाएं। साझेदारी और शत्रुओं से समस्याएं हो सकती हैं।'
    },
    intensity: 'severe'
  },
  2: {
    type: 'kulik',
    name: { en: 'Kulik Kalsarp', hi: 'कुलिक कालसर्प' },
    rahuHouse: 2,
    ketuHouse: 8,
    effects: {
      en: 'Financial instability, family disputes, speech problems. May face sudden losses and inheritance issues.',
      hi: 'वित्तीय अस्थिरता, पारिवारिक विवाद, वाणी समस्याएं। अचानक हानि और विरासत समस्याएं हो सकती हैं।'
    },
    intensity: 'severe'
  },
  3: {
    type: 'vasuki',
    name: { en: 'Vasuki Kalsarp', hi: 'वासुकी कालसर्प' },
    rahuHouse: 3,
    ketuHouse: 9,
    effects: {
      en: 'Sibling issues, communication problems, short travel obstacles. May face challenges with father or spiritual growth.',
      hi: 'भाई-बहन समस्याएं, संवाद समस्याएं, छोटी यात्रा बाधाएं। पिता या आध्यात्मिक विकास में चुनौतियां हो सकती हैं।'
    },
    intensity: 'moderate'
  },
  4: {
    type: 'shankhpal',
    name: { en: 'Shankhpal Kalsarp', hi: 'शंखपाल कालसर्प' },
    rahuHouse: 4,
    ketuHouse: 10,
    effects: {
      en: 'Mother\'s health issues, property problems, domestic unrest. Career obstacles and public image challenges.',
      hi: 'माता के स्वास्थ्य समस्याएं, संपत्ति समस्याएं, घरेलू अशांति। करियर बाधाएं और सार्वजनिक छवि चुनौतियां।'
    },
    intensity: 'moderate'
  },
  5: {
    type: 'padma',
    name: { en: 'Padma Kalsarp', hi: 'पद्म कालसर्प' },
    rahuHouse: 5,
    ketuHouse: 11,
    effects: {
      en: 'Children-related problems, speculation losses, education hurdles. May face issues with gains and elder siblings.',
      hi: 'संतान संबंधी समस्याएं, सट्टा हानि, शिक्षा बाधाएं। लाभ और बड़े भाई-बहन से समस्याएं हो सकती हैं।'
    },
    intensity: 'moderate'
  },
  6: {
    type: 'mahapadma',
    name: { en: 'Mahapadma Kalsarp', hi: 'महापद्म कालसर्प' },
    rahuHouse: 6,
    ketuHouse: 12,
    effects: {
      en: 'Health issues, enemies, debts. May face losses, hospitalization, or foreign settlement challenges.',
      hi: 'स्वास्थ्य समस्याएं, शत्रु, ऋण। हानि, अस्पताल या विदेश बसावट चुनौतियां हो सकती हैं।'
    },
    intensity: 'moderate'
  },
  7: {
    type: 'takshak',
    name: { en: 'Takshak Kalsarp', hi: 'तक्षक कालसर्प' },
    rahuHouse: 7,
    ketuHouse: 1,
    effects: {
      en: 'Marriage delays, partnership problems, spouse\'s health issues. May face self-identity and health challenges.',
      hi: 'विवाह विलंब, साझेदारी समस्याएं, जीवनसाथी के स्वास्थ्य समस्याएं। आत्म-पहचान और स्वास्थ्य चुनौतियां हो सकती हैं।'
    },
    intensity: 'severe'
  },
  8: {
    type: 'karkotak',
    name: { en: 'Karkotak Kalsarp', hi: 'कर्कोटक कालसर्प' },
    rahuHouse: 8,
    ketuHouse: 2,
    effects: {
      en: 'Sudden transformations, inheritance issues, accidents. May face family and financial instability.',
      hi: 'अचानक परिवर्तन, विरासत समस्याएं, दुर्घटनाएं। परिवार और वित्तीय अस्थिरता हो सकती है।'
    },
    intensity: 'severe'
  },
  9: {
    type: 'shankhachud',
    name: { en: 'Shankhachud Kalsarp', hi: 'शंखचूड़ कालसर्प' },
    rahuHouse: 9,
    ketuHouse: 3,
    effects: {
      en: 'Father\'s problems, luck obstacles, religious conflicts. May face communication and sibling issues.',
      hi: 'पिता समस्याएं, भाग्य बाधाएं, धार्मिक विवाद। संवाद और भाई-बहन समस्याएं हो सकती हैं।'
    },
    intensity: 'moderate'
  },
  10: {
    type: 'ghatak',
    name: { en: 'Ghatak Kalsarp', hi: 'घातक कालसर्प' },
    rahuHouse: 10,
    ketuHouse: 4,
    effects: {
      en: 'Career instability, professional setbacks, reputation damage. May face domestic peace and mother\'s health issues.',
      hi: 'करियर अस्थिरता, व्यावसायिक असफलता, प्रतिष्ठा हानि। घरेलू शांति और माता के स्वास्थ्य समस्याएं हो सकती हैं।'
    },
    intensity: 'moderate'
  },
  11: {
    type: 'vishdhar',
    name: { en: 'Vishdhar Kalsarp', hi: 'विषधर कालसर्प' },
    rahuHouse: 11,
    ketuHouse: 5,
    effects: {
      en: 'Income fluctuations, elder sibling issues, unfulfilled desires. May face children and education problems.',
      hi: 'आय उतार-चढ़ाव, बड़े भाई-बहन समस्याएं, अधूरी इच्छाएं। संतान और शिक्षा समस्याएं हो सकती हैं।'
    },
    intensity: 'mild'
  },
  12: {
    type: 'sheshnag',
    name: { en: 'Sheshnag Kalsarp', hi: 'शेषनाग कालसर्प' },
    rahuHouse: 12,
    ketuHouse: 6,
    effects: {
      en: 'Expenditure issues, sleep problems, foreign travel obstacles. May face health, enemies, and debt issues.',
      hi: 'खर्च समस्याएं, नींद समस्याएं, विदेश यात्रा बाधाएं। स्वास्थ्य, शत्रु और ऋण समस्याएं हो सकती हैं।'
    },
    intensity: 'mild'
  }
};

// Direction of Kalsarp
export type KalsarpDirection = 'ascending' | 'descending';

export interface DirectionInfo {
  name: { en: string; hi: string };
  description: { en: string; hi: string };
}

export const DIRECTION_INFO: Record<KalsarpDirection, DirectionInfo> = {
  ascending: {
    name: { en: 'Ascending (Udit)', hi: 'उदित (आरोही)' },
    description: {
      en: 'Planets move from Rahu towards Ketu. Effects are more prominent in the first half of life and gradually reduce.',
      hi: 'ग्रह राहु से केतु की ओर बढ़ते हैं। प्रभाव जीवन के पहले भाग में अधिक प्रमुख होते हैं और धीरे-धीरे कम होते हैं।'
    }
  },
  descending: {
    name: { en: 'Descending (Anudita)', hi: 'अनुदित (अवरोही)' },
    description: {
      en: 'Planets move from Ketu towards Rahu. Effects intensify in the second half of life.',
      hi: 'ग्रह केतु से राहु की ओर बढ़ते हैं। प्रभाव जीवन के दूसरे भाग में तीव्र होते हैं।'
    }
  }
};

// General effects of Kalsarp
export const GENERAL_EFFECTS = {
  positive: [
    {
      en: 'Strong spiritual inclination and potential for liberation',
      hi: 'मजबूत आध्यात्मिक झुकाव और मोक्ष की संभावना'
    },
    {
      en: 'Exceptional focus and determination once goals are set',
      hi: 'लक्ष्य निर्धारित होने पर असाधारण एकाग्रता और दृढ़ संकल्प'
    },
    {
      en: 'Ability to overcome obstacles through perseverance',
      hi: 'दृढ़ता से बाधाओं को पार करने की क्षमता'
    },
    {
      en: 'Deep insight and intuitive abilities',
      hi: 'गहन अंतर्दृष्टि और सहज ज्ञान संबंधी क्षमताएं'
    }
  ],
  negative: [
    {
      en: 'Delays and obstacles in important life matters',
      hi: 'महत्वपूर्ण जीवन मामलों में विलंब और बाधाएं'
    },
    {
      en: 'Sudden ups and downs in fortune',
      hi: 'भाग्य में अचानक उतार-चढ़ाव'
    },
    {
      en: 'Relationship and family conflicts',
      hi: 'रिश्ते और पारिवारिक विवाद'
    },
    {
      en: 'Mental stress and anxiety',
      hi: 'मानसिक तनाव और चिंता'
    }
  ]
};

// Remedies
export interface Remedy {
  id: string;
  name: { en: string; hi: string };
  description: { en: string; hi: string };
  type: 'puja' | 'mantra' | 'donation' | 'lifestyle' | 'gemstone';
}

export const REMEDIES: Remedy[] = [
  {
    id: 'kalsarp_puja',
    name: { en: 'Kalsarp Shanti Puja', hi: 'कालसर्प शांति पूजा' },
    description: {
      en: 'Perform Kalsarp Shanti Puja at Trimbakeshwar (Nasik) or any Shiva temple. This is the most effective remedy.',
      hi: 'त्र्यंबकेश्वर (नासिक) या किसी भी शिव मंदिर में कालसर्प शांति पूजा करें। यह सबसे प्रभावी उपाय है।'
    },
    type: 'puja'
  },
  {
    id: 'nagpanchami',
    name: { en: 'Nag Panchami Worship', hi: 'नाग पंचमी पूजा' },
    description: {
      en: 'Worship snake deities on Nag Panchami. Offer milk to snake idols and feed Brahmins.',
      hi: 'नाग पंचमी पर नाग देवताओं की पूजा करें। नाग प्रतिमाओं को दूध चढ़ाएं और ब्राह्मणों को भोजन कराएं।'
    },
    type: 'puja'
  },
  {
    id: 'rahu_mantra',
    name: { en: 'Rahu Mantra Japa', hi: 'राहु मंत्र जाप' },
    description: {
      en: 'Chant "Om Bhram Bhreem Bhroum Sah Rahave Namah" 18,000 times over 40 days.',
      hi: '"ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः" मंत्र 40 दिनों में 18,000 बार जपें।'
    },
    type: 'mantra'
  },
  {
    id: 'ketu_mantra',
    name: { en: 'Ketu Mantra Japa', hi: 'केतु मंत्र जाप' },
    description: {
      en: 'Chant "Om Stram Streem Stroum Sah Ketave Namah" 17,000 times over 40 days.',
      hi: '"ॐ स्त्रां स्त्रीं स्त्रौं सः केतवे नमः" मंत्र 40 दिनों में 17,000 बार जपें।'
    },
    type: 'mantra'
  },
  {
    id: 'mahamrityunjay',
    name: { en: 'Mahamrityunjay Mantra', hi: 'महामृत्युंजय मंत्र' },
    description: {
      en: 'Chant Mahamrityunjay Mantra daily for protection and to reduce malefic effects.',
      hi: 'सुरक्षा और दुष्प्रभावों को कम करने के लिए प्रतिदिन महामृत्युंजय मंत्र का जाप करें।'
    },
    type: 'mantra'
  },
  {
    id: 'silver_nag',
    name: { en: 'Silver Nag Donation', hi: 'चांदी का नाग दान' },
    description: {
      en: 'Donate a silver snake statue to a temple or flow in running water.',
      hi: 'चांदी की नाग प्रतिमा मंदिर में दान करें या बहते पानी में प्रवाहित करें।'
    },
    type: 'donation'
  },
  {
    id: 'feeding',
    name: { en: 'Feed Birds and Animals', hi: 'पक्षियों और जानवरों को खिलाना' },
    description: {
      en: 'Regularly feed birds (especially crows) and offer food to ants.',
      hi: 'नियमित रूप से पक्षियों (विशेषकर कौओं) को खिलाएं और चींटियों को भोजन दें।'
    },
    type: 'lifestyle'
  },
  {
    id: 'gomed',
    name: { en: 'Hessonite (Gomed) Gemstone', hi: 'गोमेद रत्न' },
    description: {
      en: 'Wear Hessonite (Gomed) for Rahu and Cat\'s Eye (Lehsunia) for Ketu after proper consultation.',
      hi: 'उचित परामर्श के बाद राहु के लिए गोमेद और केतु के लिए लहसुनिया धारण करें।'
    },
    type: 'gemstone'
  }
];

// Partial Kalsarp info
export const PARTIAL_KALSARP = {
  name: { en: 'Partial Kalsarp Dosha', hi: 'आंशिक कालसर्प दोष' },
  description: {
    en: 'When most planets are hemmed between Rahu-Ketu but one or two planets are outside. Effects are reduced but still present.',
    hi: 'जब अधिकांश ग्रह राहु-केतु के बीच हों लेकिन एक या दो ग्रह बाहर हों। प्रभाव कम होते हैं लेकिन फिर भी मौजूद हैं।'
  }
};

// No Kalsarp info
export const NO_KALSARP = {
  name: { en: 'No Kalsarp Dosha', hi: 'कालसर्प दोष नहीं' },
  description: {
    en: 'All planets are not hemmed between Rahu and Ketu. You do not have Kalsarp Dosha.',
    hi: 'सभी ग्रह राहु और केतु के बीच नहीं हैं। आपको कालसर्प दोष नहीं है।'
  }
};

/**
 * Check if all planets are between Rahu and Ketu
 * @param planetHouses - Object with house positions of all planets
 * @returns {isKalsarp, direction, outsidePlanets}
 */
export function checkKalsarp(planetHouses: {
  sun: number;
  moon: number;
  mars: number;
  mercury: number;
  jupiter: number;
  venus: number;
  saturn: number;
  rahu: number;
  ketu: number;
}): {
  isKalsarp: boolean;
  isPartial: boolean;
  direction: KalsarpDirection | null;
  outsidePlanets: string[];
  kalsarpType: KalsarpInfo | null;
} {
  const { rahu, ketu, ...otherPlanets } = planetHouses;

  // Calculate the arc from Rahu to Ketu (ascending direction)
  // If Rahu is at house 1 and Ketu at house 7, the ascending arc covers houses 1-7
  const ascendingArc: number[] = [];
  let house = rahu;
  while (house !== ketu) {
    ascendingArc.push(house);
    house = house === 12 ? 1 : house + 1;
  }
  ascendingArc.push(ketu);

  // Descending arc is the remaining houses
  const descendingArc: number[] = [];
  house = ketu;
  while (house !== rahu) {
    if (house !== ketu) descendingArc.push(house);
    house = house === 12 ? 1 : house + 1;
  }

  // Check which planets are in ascending vs descending arc
  const planetsInAscending: string[] = [];
  const planetsInDescending: string[] = [];
  const planetNames = ['sun', 'moon', 'mars', 'mercury', 'jupiter', 'venus', 'saturn'] as const;

  for (const planet of planetNames) {
    const planetHouse = otherPlanets[planet];
    if (ascendingArc.includes(planetHouse)) {
      planetsInAscending.push(planet);
    } else {
      planetsInDescending.push(planet);
    }
  }

  // Kalsarp occurs when ALL 7 planets are on one side
  const isFullKalsarp = planetsInAscending.length === 7 || planetsInDescending.length === 7;

  // Partial Kalsarp when 5 or 6 planets are on one side
  const isPartialKalsarp = !isFullKalsarp &&
    (planetsInAscending.length >= 5 || planetsInDescending.length >= 5);

  // Determine direction
  let direction: KalsarpDirection | null = null;
  if (isFullKalsarp || isPartialKalsarp) {
    direction = planetsInAscending.length >= planetsInDescending.length ? 'ascending' : 'descending';
  }

  // Planets outside the main group
  const outsidePlanets = direction === 'ascending' ? planetsInDescending : planetsInAscending;

  // Get Kalsarp type based on Rahu's house
  const kalsarpType = isFullKalsarp ? KALSARP_TYPES[rahu] : null;

  return {
    isKalsarp: isFullKalsarp,
    isPartial: isPartialKalsarp,
    direction,
    outsidePlanets,
    kalsarpType
  };
}
