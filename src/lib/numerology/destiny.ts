/**
 * Destiny Number Calculator (Expression Number)
 *
 * The Destiny Number is calculated from the full birth name using
 * the Pythagorean system. It reveals your life's purpose, natural
 * talents, and the goals you're meant to achieve.
 *
 * Unlike Chaldean (which uses 1-8), Pythagorean uses 1-9.
 */

import { BilingualText } from '@/types';
import { reduceToSingleDigit } from '@/lib/utils/numbers';

/**
 * Pythagorean letter-to-number mapping
 * Based on alphabetical position (A=1, B=2, ... I=9, J=1, etc.)
 */
export const PYTHAGOREAN_VALUES: Record<string, number> = {
  A: 1, J: 1, S: 1,
  B: 2, K: 2, T: 2,
  C: 3, L: 3, U: 3,
  D: 4, M: 4, V: 4,
  E: 5, N: 5, W: 5,
  F: 6, O: 6, X: 6,
  G: 7, P: 7, Y: 7,
  H: 8, Q: 8, Z: 8,
  I: 9, R: 9,
};

export interface DestinyResult {
  name: string;
  cleanName: string;
  letterBreakdown: Array<{ letter: string; value: number }>;
  totalSum: number;
  reductionSteps: number[];
  destinyNumber: number;
  isMasterNumber: boolean;
}

export interface DestinyMeaning {
  number: number;
  title: BilingualText;
  overview: BilingualText;
  talents: BilingualText[];
  challenges: BilingualText[];
  lifeGoals: BilingualText[];
  careers: BilingualText[];
  advice: BilingualText;
}

/**
 * Calculates the Destiny Number from a full name
 */
export function calculateDestiny(name: string): DestinyResult {
  // Clean the name: uppercase and remove non-alphabetic characters
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');

  if (cleanName.length === 0) {
    return {
      name,
      cleanName: '',
      letterBreakdown: [],
      totalSum: 0,
      reductionSteps: [0],
      destinyNumber: 0,
      isMasterNumber: false,
    };
  }

  // Create letter breakdown
  const letterBreakdown = cleanName.split('').map((letter) => ({
    letter,
    value: PYTHAGOREAN_VALUES[letter] || 0,
  }));

  // Calculate total sum
  const totalSum = letterBreakdown.reduce((sum, item) => sum + item.value, 0);

  // Reduce to single digit (preserving master numbers)
  const reduction = reduceToSingleDigit(totalSum);

  return {
    name,
    cleanName,
    letterBreakdown,
    totalSum,
    reductionSteps: reduction.steps,
    destinyNumber: reduction.finalNumber,
    isMasterNumber: reduction.isMasterNumber,
  };
}

/**
 * Destiny Number meanings
 */
export const DESTINY_MEANINGS: Record<number, DestinyMeaning> = {
  1: {
    number: 1,
    title: {
      en: 'The Pioneer',
      hi: 'अग्रणी',
    },
    overview: {
      en: 'Your destiny is to become a leader and pioneer. You are meant to develop independence, originality, and self-confidence. Your life purpose involves initiating new projects, leading others, and expressing your unique individuality.',
      hi: 'आपकी नियति एक नेता और अग्रणी बनना है। आपको स्वतंत्रता, मौलिकता और आत्मविश्वास विकसित करना है। आपके जीवन का उद्देश्य नई परियोजनाएं शुरू करना, दूसरों का नेतृत्व करना और अपनी अनूठी व्यक्तित्व को व्यक्त करना है।',
    },
    talents: [
      { en: 'Natural leadership abilities', hi: 'प्राकृतिक नेतृत्व क्षमताएं' },
      { en: 'Innovative thinking', hi: 'नवीन सोच' },
      { en: 'Self-motivation', hi: 'आत्म-प्रेरणा' },
      { en: 'Courage to take risks', hi: 'जोखिम लेने का साहस' },
    ],
    challenges: [
      { en: 'Overcoming self-doubt', hi: 'आत्म-संदेह पर काबू पाना' },
      { en: 'Learning to collaborate', hi: 'सहयोग करना सीखना' },
      { en: 'Avoiding arrogance', hi: 'अहंकार से बचना' },
    ],
    lifeGoals: [
      { en: 'Achieve independence', hi: 'स्वतंत्रता प्राप्त करना' },
      { en: 'Lead by example', hi: 'उदाहरण द्वारा नेतृत्व करना' },
      { en: 'Create something original', hi: 'कुछ मौलिक बनाना' },
    ],
    careers: [
      { en: 'Entrepreneur', hi: 'उद्यमी' },
      { en: 'Executive', hi: 'कार्यकारी' },
      { en: 'Inventor', hi: 'आविष्कारक' },
      { en: 'Director', hi: 'निदेशक' },
      { en: 'Self-employed professional', hi: 'स्व-नियोजित पेशेवर' },
    ],
    advice: {
      en: 'Trust your instincts and take the lead. Your destiny is to forge new paths, but remember that true leadership includes empowering others.',
      hi: 'अपनी प्रवृत्ति पर भरोसा करें और नेतृत्व करें। आपकी नियति नए रास्ते बनाना है, लेकिन याद रखें कि सच्चे नेतृत्व में दूसरों को सशक्त बनाना शामिल है।',
    },
  },
  2: {
    number: 2,
    title: {
      en: 'The Diplomat',
      hi: 'कूटनीतिज्ञ',
    },
    overview: {
      en: 'Your destiny is to bring harmony and cooperation to the world. You are meant to develop diplomacy, patience, and the ability to work with others. Your life purpose involves mediating, supporting, and creating peaceful partnerships.',
      hi: 'आपकी नियति दुनिया में सामंजस्य और सहयोग लाना है। आपको कूटनीति, धैर्य और दूसरों के साथ काम करने की क्षमता विकसित करनी है। आपके जीवन का उद्देश्य मध्यस्थता करना, समर्थन देना और शांतिपूर्ण साझेदारी बनाना है।',
    },
    talents: [
      { en: 'Mediation and diplomacy', hi: 'मध्यस्थता और कूटनीति' },
      { en: 'Intuition and sensitivity', hi: 'अंतर्ज्ञान और संवेदनशीलता' },
      { en: 'Cooperation', hi: 'सहयोग' },
      { en: 'Attention to detail', hi: 'विवरण पर ध्यान' },
    ],
    challenges: [
      { en: 'Building self-confidence', hi: 'आत्मविश्वास बनाना' },
      { en: 'Avoiding over-dependence', hi: 'अति-निर्भरता से बचना' },
      { en: 'Standing up for yourself', hi: 'अपने लिए खड़े होना' },
    ],
    lifeGoals: [
      { en: 'Create harmony', hi: 'सामंजस्य बनाना' },
      { en: 'Support others', hi: 'दूसरों का समर्थन करना' },
      { en: 'Build lasting partnerships', hi: 'स्थायी साझेदारी बनाना' },
    ],
    careers: [
      { en: 'Mediator', hi: 'मध्यस्थ' },
      { en: 'Counselor', hi: 'परामर्शदाता' },
      { en: 'Diplomat', hi: 'राजनयिक' },
      { en: 'Team coordinator', hi: 'टीम समन्वयक' },
      { en: 'Human resources', hi: 'मानव संसाधन' },
    ],
    advice: {
      en: 'Your sensitivity is your strength. Use it to understand and help others, but also learn to set healthy boundaries for yourself.',
      hi: 'आपकी संवेदनशीलता आपकी ताकत है। इसका उपयोग दूसरों को समझने और मदद करने के लिए करें, लेकिन अपने लिए स्वस्थ सीमाएं निर्धारित करना भी सीखें।',
    },
  },
  3: {
    number: 3,
    title: {
      en: 'The Communicator',
      hi: 'संचारक',
    },
    overview: {
      en: 'Your destiny is to express yourself creatively and inspire others. You are meant to develop your artistic talents and communication skills. Your life purpose involves bringing joy, creativity, and self-expression to everything you do.',
      hi: 'आपकी नियति रचनात्मक रूप से खुद को व्यक्त करना और दूसरों को प्रेरित करना है। आपको अपनी कलात्मक प्रतिभाओं और संचार कौशल विकसित करने हैं। आपके जीवन का उद्देश्य हर काम में खुशी, रचनात्मकता और आत्म-अभिव्यक्ति लाना है।',
    },
    talents: [
      { en: 'Creative expression', hi: 'रचनात्मक अभिव्यक्ति' },
      { en: 'Communication skills', hi: 'संचार कौशल' },
      { en: 'Artistic abilities', hi: 'कलात्मक क्षमताएं' },
      { en: 'Optimism', hi: 'आशावाद' },
    ],
    challenges: [
      { en: 'Focus and discipline', hi: 'ध्यान और अनुशासन' },
      { en: 'Completing projects', hi: 'परियोजनाएं पूरी करना' },
      { en: 'Avoiding superficiality', hi: 'सतहीपन से बचना' },
    ],
    lifeGoals: [
      { en: 'Express creativity', hi: 'रचनात्मकता व्यक्त करना' },
      { en: 'Inspire others', hi: 'दूसरों को प्रेरित करना' },
      { en: 'Spread joy', hi: 'खुशी फैलाना' },
    ],
    careers: [
      { en: 'Writer', hi: 'लेखक' },
      { en: 'Artist', hi: 'कलाकार' },
      { en: 'Performer', hi: 'कलाकार' },
      { en: 'Marketing', hi: 'विपणन' },
      { en: 'Public speaker', hi: 'सार्वजनिक वक्ता' },
    ],
    advice: {
      en: 'Let your creativity flow freely. Your words and art have the power to heal and inspire. Focus on completing what you start.',
      hi: 'अपनी रचनात्मकता को स्वतंत्र रूप से बहने दें। आपके शब्दों और कला में ठीक करने और प्रेरित करने की शक्ति है। जो शुरू करें उसे पूरा करने पर ध्यान दें।',
    },
  },
  4: {
    number: 4,
    title: {
      en: 'The Builder',
      hi: 'निर्माता',
    },
    overview: {
      en: 'Your destiny is to build solid foundations and create lasting structures. You are meant to develop discipline, organization, and practical skills. Your life purpose involves bringing order, stability, and tangible results to the world.',
      hi: 'आपकी नियति ठोस नींव बनाना और स्थायी संरचनाएं बनाना है। आपको अनुशासन, संगठन और व्यावहारिक कौशल विकसित करने हैं। आपके जीवन का उद्देश्य दुनिया में व्यवस्था, स्थिरता और ठोस परिणाम लाना है।',
    },
    talents: [
      { en: 'Organization', hi: 'संगठन' },
      { en: 'Practical problem-solving', hi: 'व्यावहारिक समस्या-समाधान' },
      { en: 'Reliability', hi: 'विश्वसनीयता' },
      { en: 'Hard work ethic', hi: 'कड़ी मेहनत की नीति' },
    ],
    challenges: [
      { en: 'Flexibility', hi: 'लचीलापन' },
      { en: 'Avoiding rigidity', hi: 'कठोरता से बचना' },
      { en: 'Work-life balance', hi: 'कार्य-जीवन संतुलन' },
    ],
    lifeGoals: [
      { en: 'Create lasting structures', hi: 'स्थायी संरचनाएं बनाना' },
      { en: 'Establish security', hi: 'सुरक्षा स्थापित करना' },
      { en: 'Build step by step', hi: 'कदम दर कदम निर्माण करना' },
    ],
    careers: [
      { en: 'Engineer', hi: 'इंजीनियर' },
      { en: 'Architect', hi: 'वास्तुकार' },
      { en: 'Accountant', hi: 'लेखाकार' },
      { en: 'Project manager', hi: 'प्रोजेक्ट मैनेजर' },
      { en: 'Administrator', hi: 'प्रशासक' },
    ],
    advice: {
      en: 'Your ability to create order from chaos is invaluable. Build with patience and persistence, but remember to enjoy the journey.',
      hi: 'अराजकता से व्यवस्था बनाने की आपकी क्षमता अमूल्य है। धैर्य और दृढ़ता से निर्माण करें, लेकिन यात्रा का आनंद लेना न भूलें।',
    },
  },
  5: {
    number: 5,
    title: {
      en: 'The Freedom Seeker',
      hi: 'स्वतंत्रता साधक',
    },
    overview: {
      en: 'Your destiny is to embrace change and experience life fully. You are meant to develop versatility, adaptability, and the courage to explore. Your life purpose involves promoting freedom, progress, and new experiences.',
      hi: 'आपकी नियति परिवर्तन को अपनाना और जीवन को पूर्ण रूप से अनुभव करना है। आपको बहुमुखी प्रतिभा, अनुकूलनशीलता और अन्वेषण का साहस विकसित करना है। आपके जीवन का उद्देश्य स्वतंत्रता, प्रगति और नए अनुभवों को बढ़ावा देना है।',
    },
    talents: [
      { en: 'Adaptability', hi: 'अनुकूलनशीलता' },
      { en: 'Versatility', hi: 'बहुमुखी प्रतिभा' },
      { en: 'Quick learning', hi: 'तेज सीखना' },
      { en: 'Resourcefulness', hi: 'संसाधनशीलता' },
    ],
    challenges: [
      { en: 'Commitment', hi: 'प्रतिबद्धता' },
      { en: 'Avoiding excess', hi: 'अतिरेक से बचना' },
      { en: 'Finding stability', hi: 'स्थिरता पाना' },
    ],
    lifeGoals: [
      { en: 'Experience variety', hi: 'विविधता का अनुभव' },
      { en: 'Promote progress', hi: 'प्रगति को बढ़ावा देना' },
      { en: 'Embrace change', hi: 'परिवर्तन को अपनाना' },
    ],
    careers: [
      { en: 'Travel agent', hi: 'ट्रैवल एजेंट' },
      { en: 'Sales', hi: 'बिक्री' },
      { en: 'Journalist', hi: 'पत्रकार' },
      { en: 'Consultant', hi: 'सलाहकार' },
      { en: 'Public relations', hi: 'जनसंपर्क' },
    ],
    advice: {
      en: 'Your love of freedom is your gift to the world. Embrace change, but also cultivate enough stability to achieve your long-term goals.',
      hi: 'स्वतंत्रता के प्रति आपका प्रेम दुनिया के लिए आपका उपहार है। परिवर्तन को अपनाएं, लेकिन अपने दीर्घकालिक लक्ष्यों को प्राप्त करने के लिए पर्याप्त स्थिरता भी विकसित करें।',
    },
  },
  6: {
    number: 6,
    title: {
      en: 'The Nurturer',
      hi: 'पालनकर्ता',
    },
    overview: {
      en: 'Your destiny is to serve, nurture, and create harmony. You are meant to develop responsibility, compassion, and the ability to care for others. Your life purpose involves family, community, and creating beauty in the world.',
      hi: 'आपकी नियति सेवा करना, पालन-पोषण करना और सामंजस्य बनाना है। आपको जिम्मेदारी, करुणा और दूसरों की देखभाल करने की क्षमता विकसित करनी है। आपके जीवन का उद्देश्य परिवार, समुदाय और दुनिया में सुंदरता बनाना है।',
    },
    talents: [
      { en: 'Nurturing', hi: 'पालन-पोषण' },
      { en: 'Responsibility', hi: 'जिम्मेदारी' },
      { en: 'Creating beauty', hi: 'सुंदरता बनाना' },
      { en: 'Healing abilities', hi: 'उपचार क्षमताएं' },
    ],
    challenges: [
      { en: 'Self-sacrifice', hi: 'आत्म-बलिदान' },
      { en: 'Perfectionism', hi: 'पूर्णतावाद' },
      { en: 'Controlling tendencies', hi: 'नियंत्रण प्रवृत्तियां' },
    ],
    lifeGoals: [
      { en: 'Create harmony', hi: 'सामंजस्य बनाना' },
      { en: 'Serve family/community', hi: 'परिवार/समुदाय की सेवा' },
      { en: 'Spread love', hi: 'प्रेम फैलाना' },
    ],
    careers: [
      { en: 'Teacher', hi: 'शिक्षक' },
      { en: 'Healthcare', hi: 'स्वास्थ्य सेवा' },
      { en: 'Counselor', hi: 'परामर्शदाता' },
      { en: 'Interior designer', hi: 'इंटीरियर डिजाइनर' },
      { en: 'Social worker', hi: 'सामाजिक कार्यकर्ता' },
    ],
    advice: {
      en: 'Your caring nature is a blessing to all around you. Remember that you cannot pour from an empty cup—take care of yourself too.',
      hi: 'आपका देखभाल करने वाला स्वभाव आपके आस-पास के सभी लोगों के लिए वरदान है। याद रखें कि आप खाली कप से नहीं डाल सकते—अपना भी ख्याल रखें।',
    },
  },
  7: {
    number: 7,
    title: {
      en: 'The Seeker',
      hi: 'खोजी',
    },
    overview: {
      en: 'Your destiny is to seek wisdom and uncover hidden truths. You are meant to develop intuition, analytical skills, and spiritual understanding. Your life purpose involves research, introspection, and sharing wisdom.',
      hi: 'आपकी नियति ज्ञान की खोज करना और छिपे सत्य को उजागर करना है। आपको अंतर्ज्ञान, विश्लेषणात्मक कौशल और आध्यात्मिक समझ विकसित करनी है। आपके जीवन का उद्देश्य शोध, आत्मनिरीक्षण और ज्ञान साझा करना है।',
    },
    talents: [
      { en: 'Analytical thinking', hi: 'विश्लेषणात्मक सोच' },
      { en: 'Intuition', hi: 'अंतर्ज्ञान' },
      { en: 'Research abilities', hi: 'शोध क्षमताएं' },
      { en: 'Spiritual insight', hi: 'आध्यात्मिक अंतर्दृष्टि' },
    ],
    challenges: [
      { en: 'Isolation', hi: 'अलगाव' },
      { en: 'Over-analysis', hi: 'अति-विश्लेषण' },
      { en: 'Connecting with others', hi: 'दूसरों से जुड़ना' },
    ],
    lifeGoals: [
      { en: 'Seek truth', hi: 'सत्य की खोज' },
      { en: 'Develop wisdom', hi: 'ज्ञान विकसित करना' },
      { en: 'Understand mysteries', hi: 'रहस्यों को समझना' },
    ],
    careers: [
      { en: 'Researcher', hi: 'शोधकर्ता' },
      { en: 'Scientist', hi: 'वैज्ञानिक' },
      { en: 'Philosopher', hi: 'दार्शनिक' },
      { en: 'Analyst', hi: 'विश्लेषक' },
      { en: 'Spiritual teacher', hi: 'आध्यात्मिक शिक्षक' },
    ],
    advice: {
      en: 'Your quest for knowledge is noble. Balance your need for solitude with meaningful connections, and share your wisdom with others.',
      hi: 'ज्ञान के लिए आपकी खोज महान है। एकांत की अपनी आवश्यकता को सार्थक संबंधों के साथ संतुलित करें, और अपना ज्ञान दूसरों के साथ साझा करें।',
    },
  },
  8: {
    number: 8,
    title: {
      en: 'The Achiever',
      hi: 'उपलब्धि प्राप्तकर्ता',
    },
    overview: {
      en: 'Your destiny is to achieve material success and use power wisely. You are meant to develop business acumen, authority, and the ability to manifest abundance. Your life purpose involves leadership, achievement, and giving back.',
      hi: 'आपकी नियति भौतिक सफलता प्राप्त करना और शक्ति का बुद्धिमानी से उपयोग करना है। आपको व्यापारिक कौशल, अधिकार और प्रचुरता प्रकट करने की क्षमता विकसित करनी है। आपके जीवन का उद्देश्य नेतृत्व, उपलब्धि और वापस देना है।',
    },
    talents: [
      { en: 'Business acumen', hi: 'व्यापारिक कौशल' },
      { en: 'Leadership', hi: 'नेतृत्व' },
      { en: 'Organization', hi: 'संगठन' },
      { en: 'Material manifestation', hi: 'भौतिक अभिव्यक्ति' },
    ],
    challenges: [
      { en: 'Work-life balance', hi: 'कार्य-जीवन संतुलन' },
      { en: 'Power struggles', hi: 'शक्ति संघर्ष' },
      { en: 'Material attachment', hi: 'भौतिक आसक्ति' },
    ],
    lifeGoals: [
      { en: 'Achieve success', hi: 'सफलता प्राप्त करना' },
      { en: 'Use power wisely', hi: 'शक्ति का बुद्धिमानी से उपयोग' },
      { en: 'Create abundance', hi: 'प्रचुरता बनाना' },
    ],
    careers: [
      { en: 'CEO/Executive', hi: 'सीईओ/कार्यकारी' },
      { en: 'Banker', hi: 'बैंकर' },
      { en: 'Real estate', hi: 'रियल एस्टेट' },
      { en: 'Lawyer', hi: 'वकील' },
      { en: 'Entrepreneur', hi: 'उद्यमी' },
    ],
    advice: {
      en: 'You have the power to achieve great things. Use your success to lift others and create positive change in the world.',
      hi: 'आपमें महान चीजें हासिल करने की शक्ति है। अपनी सफलता का उपयोग दूसरों को ऊपर उठाने और दुनिया में सकारात्मक परिवर्तन लाने के लिए करें।',
    },
  },
  9: {
    number: 9,
    title: {
      en: 'The Humanitarian',
      hi: 'मानवतावादी',
    },
    overview: {
      en: 'Your destiny is to serve humanity and embody universal love. You are meant to develop compassion, wisdom, and selflessness. Your life purpose involves healing, teaching, and making the world a better place.',
      hi: 'आपकी नियति मानवता की सेवा करना और सार्वभौमिक प्रेम का प्रतीक बनना है। आपको करुणा, ज्ञान और निस्वार्थता विकसित करनी है। आपके जीवन का उद्देश्य उपचार, शिक्षण और दुनिया को बेहतर बनाना है।',
    },
    talents: [
      { en: 'Compassion', hi: 'करुणा' },
      { en: 'Wisdom', hi: 'ज्ञान' },
      { en: 'Healing abilities', hi: 'उपचार क्षमताएं' },
      { en: 'Universal perspective', hi: 'सार्वभौमिक दृष्टिकोण' },
    ],
    challenges: [
      { en: 'Letting go', hi: 'छोड़ना' },
      { en: 'Personal boundaries', hi: 'व्यक्तिगत सीमाएं' },
      { en: 'Emotional detachment', hi: 'भावनात्मक अलगाव' },
    ],
    lifeGoals: [
      { en: 'Serve humanity', hi: 'मानवता की सेवा' },
      { en: 'Spread love', hi: 'प्रेम फैलाना' },
      { en: 'Inspire transformation', hi: 'परिवर्तन को प्रेरित करना' },
    ],
    careers: [
      { en: 'Humanitarian', hi: 'मानवतावादी' },
      { en: 'Teacher', hi: 'शिक्षक' },
      { en: 'Healer', hi: 'चिकित्सक' },
      { en: 'Artist', hi: 'कलाकार' },
      { en: 'Philanthropist', hi: 'परोपकारी' },
    ],
    advice: {
      en: 'Your compassion can transform the world. Learn to give without depleting yourself, and trust that what you give returns to you.',
      hi: 'आपकी करुणा दुनिया को बदल सकती है। खुद को खाली किए बिना देना सीखें, और भरोसा रखें कि जो आप देते हैं वह आपको वापस मिलता है।',
    },
  },
  11: {
    number: 11,
    title: {
      en: 'The Illuminator (Master)',
      hi: 'प्रकाशक (मास्टर)',
    },
    overview: {
      en: 'Your destiny is to inspire and enlighten others through spiritual insight. As a master number, you have heightened intuition and the ability to channel higher wisdom. Your life purpose involves spiritual teaching and inspiration.',
      hi: 'आपकी नियति आध्यात्मिक अंतर्दृष्टि के माध्यम से दूसरों को प्रेरित और प्रबुद्ध करना है। एक मास्टर नंबर के रूप में, आपमें उच्च अंतर्ज्ञान और उच्च ज्ञान को प्रसारित करने की क्षमता है। आपके जीवन का उद्देश्य आध्यात्मिक शिक्षण और प्रेरणा है।',
    },
    talents: [
      { en: 'Spiritual insight', hi: 'आध्यात्मिक अंतर्दृष्टि' },
      { en: 'Intuition', hi: 'अंतर्ज्ञान' },
      { en: 'Inspiration', hi: 'प्रेरणा' },
      { en: 'Visionary thinking', hi: 'दूरदर्शी सोच' },
    ],
    challenges: [
      { en: 'Nervous energy', hi: 'तंत्रिका ऊर्जा' },
      { en: 'High sensitivity', hi: 'उच्च संवेदनशीलता' },
      { en: 'Self-doubt', hi: 'आत्म-संदेह' },
    ],
    lifeGoals: [
      { en: 'Inspire others', hi: 'दूसरों को प्रेरित करना' },
      { en: 'Channel wisdom', hi: 'ज्ञान प्रसारित करना' },
      { en: 'Enlighten humanity', hi: 'मानवता को प्रबुद्ध करना' },
    ],
    careers: [
      { en: 'Spiritual teacher', hi: 'आध्यात्मिक शिक्षक' },
      { en: 'Counselor', hi: 'परामर्शदाता' },
      { en: 'Artist', hi: 'कलाकार' },
      { en: 'Inventor', hi: 'आविष्कारक' },
      { en: 'Life coach', hi: 'जीवन प्रशिक्षक' },
    ],
    advice: {
      en: 'Your spiritual gifts are meant to be shared. Ground yourself through practical activities while honoring your intuitive nature.',
      hi: 'आपके आध्यात्मिक उपहार साझा किए जाने के लिए हैं। व्यावहारिक गतिविधियों के माध्यम से खुद को स्थिर करें जबकि अपने सहज स्वभाव का सम्मान करें।',
    },
  },
  22: {
    number: 22,
    title: {
      en: 'The Master Builder',
      hi: 'मास्टर बिल्डर',
    },
    overview: {
      en: 'Your destiny is to build something of lasting significance for humanity. As the most powerful master number, you can turn visionary ideas into practical reality. Your life purpose involves creating large-scale positive change.',
      hi: 'आपकी नियति मानवता के लिए स्थायी महत्व की कुछ बनाना है। सबसे शक्तिशाली मास्टर नंबर के रूप में, आप दूरदर्शी विचारों को व्यावहारिक वास्तविकता में बदल सकते हैं। आपके जीवन का उद्देश्य बड़े पैमाने पर सकारात्मक परिवर्तन बनाना है।',
    },
    talents: [
      { en: 'Visionary planning', hi: 'दूरदर्शी योजना' },
      { en: 'Practical manifestation', hi: 'व्यावहारिक अभिव्यक्ति' },
      { en: 'Large-scale thinking', hi: 'बड़े पैमाने पर सोच' },
      { en: 'Master organization', hi: 'मास्टर संगठन' },
    ],
    challenges: [
      { en: 'Overwhelming pressure', hi: 'भारी दबाव' },
      { en: 'Perfectionism', hi: 'पूर्णतावाद' },
      { en: 'High expectations', hi: 'उच्च अपेक्षाएं' },
    ],
    lifeGoals: [
      { en: 'Build legacy', hi: 'विरासत बनाना' },
      { en: 'Transform society', hi: 'समाज को बदलना' },
      { en: 'Manifest vision', hi: 'दृष्टि को साकार करना' },
    ],
    careers: [
      { en: 'Architect', hi: 'वास्तुकार' },
      { en: 'World leader', hi: 'विश्व नेता' },
      { en: 'Engineer', hi: 'इंजीनियर' },
      { en: 'Diplomat', hi: 'राजनयिक' },
      { en: 'Philanthropist', hi: 'परोपकारी' },
    ],
    advice: {
      en: 'You have the potential to change the world. Break your grand vision into achievable steps and trust the process.',
      hi: 'आपमें दुनिया को बदलने की क्षमता है। अपनी भव्य दृष्टि को प्राप्त करने योग्य कदमों में तोड़ें और प्रक्रिया पर भरोसा करें।',
    },
  },
  33: {
    number: 33,
    title: {
      en: 'The Master Teacher',
      hi: 'मास्टर शिक्षक',
    },
    overview: {
      en: 'Your destiny is to be a spiritual master and healer for humanity. As the rarest master number, you embody unconditional love and have the ability to uplift all who encounter you. Your life purpose involves selfless service and teaching.',
      hi: 'आपकी नियति मानवता के लिए आध्यात्मिक गुरु और चिकित्सक बनना है। सबसे दुर्लभ मास्टर नंबर के रूप में, आप बिना शर्त प्रेम का प्रतीक हैं और आपमें उन सभी को ऊपर उठाने की क्षमता है जो आपसे मिलते हैं। आपके जीवन का उद्देश्य निस्वार्थ सेवा और शिक्षण है।',
    },
    talents: [
      { en: 'Spiritual mastery', hi: 'आध्यात्मिक निपुणता' },
      { en: 'Healing abilities', hi: 'उपचार क्षमताएं' },
      { en: 'Unconditional love', hi: 'बिना शर्त प्रेम' },
      { en: 'Teaching wisdom', hi: 'ज्ञान सिखाना' },
    ],
    challenges: [
      { en: 'Self-sacrifice', hi: 'आत्म-बलिदान' },
      { en: 'Martyrdom', hi: 'शहादत' },
      { en: 'Unrealistic expectations', hi: 'अवास्तविक अपेक्षाएं' },
    ],
    lifeGoals: [
      { en: 'Heal humanity', hi: 'मानवता को ठीक करना' },
      { en: 'Teach universal love', hi: 'सार्वभौमिक प्रेम सिखाना' },
      { en: 'Inspire awakening', hi: 'जागृति को प्रेरित करना' },
    ],
    careers: [
      { en: 'Spiritual leader', hi: 'आध्यात्मिक नेता' },
      { en: 'Healer', hi: 'चिकित्सक' },
      { en: 'Humanitarian leader', hi: 'मानवतावादी नेता' },
      { en: 'Teacher', hi: 'शिक्षक' },
      { en: 'Artist', hi: 'कलाकार' },
    ],
    advice: {
      en: 'Your love and compassion are gifts to humanity. Take care of your own needs so you can continue to serve others.',
      hi: 'आपका प्रेम और करुणा मानवता के लिए उपहार हैं। अपनी जरूरतों का ध्यान रखें ताकि आप दूसरों की सेवा करना जारी रख सकें।',
    },
  },
};

/**
 * Gets the meaning for a Destiny Number
 */
export function getDestinyMeaning(number: number): DestinyMeaning | null {
  return DESTINY_MEANINGS[number] || null;
}
