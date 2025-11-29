/**
 * Chaldean Numerology Calculator
 *
 * The Chaldean system is one of the oldest numerology systems,
 * originating from ancient Babylon. It assigns numbers 1-8 to letters
 * (9 is considered sacred and not assigned to any letter).
 *
 * Key differences from Pythagorean:
 * - Based on sound vibrations, not alphabetical order
 * - Uses only numbers 1-8 (9 is sacred)
 * - Generally considered more accurate for name analysis
 */

import { ChaldeanResult, ChaldeanMeaning, BilingualText } from '@/types';
import { reduceToSingleDigit } from '@/lib/utils/numbers';

/**
 * Chaldean letter-to-number mapping
 * Based on sound vibrations of each letter
 */
export const CHALDEAN_VALUES: Record<string, number> = {
  A: 1, I: 1, J: 1, Q: 1, Y: 1,
  B: 2, K: 2, R: 2,
  C: 3, G: 3, L: 3, S: 3,
  D: 4, M: 4, T: 4,
  E: 5, H: 5, N: 5, X: 5,
  U: 6, V: 6, W: 6,
  O: 7, Z: 7,
  F: 8, P: 8,
};

/**
 * Calculates the Chaldean numerology value for a name
 */
export function calculateChaldean(name: string): ChaldeanResult {
  // Clean the name: uppercase and remove non-alphabetic characters
  const cleanName = name.toUpperCase().replace(/[^A-Z]/g, '');

  if (cleanName.length === 0) {
    return {
      name,
      cleanName: '',
      letterBreakdown: [],
      totalSum: 0,
      reductionSteps: [0],
      finalNumber: 0,
      isMasterNumber: false,
    };
  }

  // Create letter breakdown
  const letterBreakdown = cleanName.split('').map((letter) => ({
    letter,
    value: CHALDEAN_VALUES[letter] || 0,
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
    finalNumber: reduction.finalNumber,
    isMasterNumber: reduction.isMasterNumber,
  };
}

/**
 * Chaldean number meanings (1-52 for compound numbers, then reduced)
 */
export const CHALDEAN_MEANINGS: Record<number, ChaldeanMeaning> = {
  1: {
    number: 1,
    title: {
      en: 'The Sun',
      hi: 'सूर्य',
    },
    overview: {
      en: 'Number 1 represents leadership, independence, and individuality. It is associated with the Sun, bringing creativity, ambition, and the desire to achieve. People with this number are natural leaders who prefer to work alone.',
      hi: 'संख्या 1 नेतृत्व, स्वतंत्रता और व्यक्तित्व का प्रतिनिधित्व करती है। यह सूर्य से जुड़ी है, जो रचनात्मकता, महत्वाकांक्षा और उपलब्धि की इच्छा लाती है। इस संख्या वाले लोग स्वाभाविक नेता होते हैं जो अकेले काम करना पसंद करते हैं।',
    },
    characteristics: [
      { en: 'Leadership abilities', hi: 'नेतृत्व क्षमता' },
      { en: 'Creative and original', hi: 'रचनात्मक और मौलिक' },
      { en: 'Self-motivated', hi: 'स्व-प्रेरित' },
      { en: 'Pioneering spirit', hi: 'अग्रणी भावना' },
    ],
    advice: {
      en: 'Embrace your leadership qualities but avoid being overly dominant. Learn to collaborate with others.',
      hi: 'अपने नेतृत्व गुणों को अपनाएं लेकिन अत्यधिक प्रभावी होने से बचें। दूसरों के साथ सहयोग करना सीखें।',
    },
  },
  2: {
    number: 2,
    title: {
      en: 'The Moon',
      hi: 'चंद्रमा',
    },
    overview: {
      en: 'Number 2 represents balance, partnership, and diplomacy. It is associated with the Moon, bringing sensitivity, intuition, and emotional depth. People with this number are peacemakers who excel in partnerships.',
      hi: 'संख्या 2 संतुलन, साझेदारी और कूटनीति का प्रतिनिधित्व करती है। यह चंद्रमा से जुड़ी है, जो संवेदनशीलता, अंतर्ज्ञान और भावनात्मक गहराई लाती है। इस संख्या वाले लोग शांतिदूत होते हैं जो साझेदारी में उत्कृष्ट होते हैं।',
    },
    characteristics: [
      { en: 'Diplomatic and tactful', hi: 'कूटनीतिक और चतुर' },
      { en: 'Intuitive and sensitive', hi: 'सहज और संवेदनशील' },
      { en: 'Cooperative team player', hi: 'सहयोगी टीम खिलाड़ी' },
      { en: 'Harmonious relationships', hi: 'सामंजस्यपूर्ण संबंध' },
    ],
    advice: {
      en: 'Trust your intuition and maintain balance in relationships. Avoid being overly dependent on others.',
      hi: 'अपने अंतर्ज्ञान पर भरोसा रखें और संबंधों में संतुलन बनाए रखें। दूसरों पर अत्यधिक निर्भर होने से बचें।',
    },
  },
  3: {
    number: 3,
    title: {
      en: 'Jupiter',
      hi: 'बृहस्पति',
    },
    overview: {
      en: 'Number 3 represents creativity, self-expression, and communication. It is associated with Jupiter, bringing expansion, optimism, and good fortune. People with this number are natural entertainers with artistic talents.',
      hi: 'संख्या 3 रचनात्मकता, आत्म-अभिव्यक्ति और संचार का प्रतिनिधित्व करती है। यह बृहस्पति से जुड़ी है, जो विस्तार, आशावाद और सौभाग्य लाती है। इस संख्या वाले लोग कलात्मक प्रतिभाओं के साथ स्वाभाविक मनोरंजनकर्ता होते हैं।',
    },
    characteristics: [
      { en: 'Creative and expressive', hi: 'रचनात्मक और अभिव्यंजक' },
      { en: 'Optimistic outlook', hi: 'आशावादी दृष्टिकोण' },
      { en: 'Good communication skills', hi: 'अच्छे संचार कौशल' },
      { en: 'Social and entertaining', hi: 'सामाजिक और मनोरंजक' },
    ],
    advice: {
      en: 'Channel your creativity productively. Avoid scattering your energies in too many directions.',
      hi: 'अपनी रचनात्मकता को उत्पादक रूप से प्रसारित करें। अपनी ऊर्जाओं को बहुत सारी दिशाओं में बिखेरने से बचें।',
    },
  },
  4: {
    number: 4,
    title: {
      en: 'Uranus/Rahu',
      hi: 'यूरेनस/राहु',
    },
    overview: {
      en: 'Number 4 represents stability, hard work, and practical achievement. It is associated with Uranus and Rahu, bringing unconventional thinking and determination. People with this number are builders who create solid foundations.',
      hi: 'संख्या 4 स्थिरता, कड़ी मेहनत और व्यावहारिक उपलब्धि का प्रतिनिधित्व करती है। यह यूरेनस और राहु से जुड़ी है, जो अपरंपरागत सोच और दृढ़ संकल्प लाती है। इस संख्या वाले लोग निर्माता होते हैं जो ठोस नींव बनाते हैं।',
    },
    characteristics: [
      { en: 'Practical and organized', hi: 'व्यावहारिक और संगठित' },
      { en: 'Hardworking and determined', hi: 'मेहनती और दृढ़' },
      { en: 'Reliable and trustworthy', hi: 'विश्वसनीय और भरोसेमंद' },
      { en: 'Unconventional approach', hi: 'अपरंपरागत दृष्टिकोण' },
    ],
    advice: {
      en: 'Stay focused on your goals but remain flexible. Avoid being too rigid or resistant to change.',
      hi: 'अपने लक्ष्यों पर केंद्रित रहें लेकिन लचीले रहें। बहुत कठोर होने या परिवर्तन का विरोध करने से बचें।',
    },
  },
  5: {
    number: 5,
    title: {
      en: 'Mercury',
      hi: 'बुध',
    },
    overview: {
      en: 'Number 5 represents freedom, change, and versatility. It is associated with Mercury, bringing quick thinking, adaptability, and communication skills. People with this number are adventurers who embrace change.',
      hi: 'संख्या 5 स्वतंत्रता, परिवर्तन और बहुमुखी प्रतिभा का प्रतिनिधित्व करती है। यह बुध से जुड़ी है, जो त्वरित सोच, अनुकूलनशीलता और संचार कौशल लाती है। इस संख्या वाले लोग साहसी होते हैं जो परिवर्तन को अपनाते हैं।',
    },
    characteristics: [
      { en: 'Adaptable and versatile', hi: 'अनुकूलनशील और बहुमुखी' },
      { en: 'Quick-thinking and clever', hi: 'तेज-सोच और चतुर' },
      { en: 'Love of freedom and travel', hi: 'स्वतंत्रता और यात्रा का प्रेम' },
      { en: 'Excellent communicator', hi: 'उत्कृष्ट संचारक' },
    ],
    advice: {
      en: 'Embrace change but maintain some stability. Avoid impulsive decisions and restlessness.',
      hi: 'परिवर्तन को अपनाएं लेकिन कुछ स्थिरता बनाए रखें। आवेगी निर्णयों और बेचैनी से बचें।',
    },
  },
  6: {
    number: 6,
    title: {
      en: 'Venus',
      hi: 'शुक्र',
    },
    overview: {
      en: 'Number 6 represents love, beauty, and domestic harmony. It is associated with Venus, bringing artistic appreciation, responsibility, and nurturing qualities. People with this number are natural caregivers and creators of beauty.',
      hi: 'संख्या 6 प्रेम, सौंदर्य और घरेलू सामंजस्य का प्रतिनिधित्व करती है। यह शुक्र से जुड़ी है, जो कलात्मक प्रशंसा, जिम्मेदारी और पालन-पोषण के गुण लाती है। इस संख्या वाले लोग स्वाभाविक देखभालकर्ता और सौंदर्य के निर्माता होते हैं।',
    },
    characteristics: [
      { en: 'Loving and nurturing', hi: 'प्यार करने वाला और पालनकर्ता' },
      { en: 'Artistic and creative', hi: 'कलात्मक और रचनात्मक' },
      { en: 'Responsible and reliable', hi: 'जिम्मेदार और विश्वसनीय' },
      { en: 'Harmonious and balanced', hi: 'सामंजस्यपूर्ण और संतुलित' },
    ],
    advice: {
      en: 'Care for others but don\'t neglect yourself. Avoid being overly controlling or perfectionist.',
      hi: 'दूसरों की देखभाल करें लेकिन खुद की उपेक्षा न करें। अत्यधिक नियंत्रित या पूर्णतावादी होने से बचें।',
    },
  },
  7: {
    number: 7,
    title: {
      en: 'Neptune/Ketu',
      hi: 'नेपच्यून/केतु',
    },
    overview: {
      en: 'Number 7 represents spirituality, wisdom, and inner knowledge. It is associated with Neptune and Ketu, bringing intuition, mysticism, and analytical thinking. People with this number are seekers of truth and wisdom.',
      hi: 'संख्या 7 आध्यात्मिकता, ज्ञान और आंतरिक ज्ञान का प्रतिनिधित्व करती है। यह नेपच्यून और केतु से जुड़ी है, जो अंतर्ज्ञान, रहस्यवाद और विश्लेषणात्मक सोच लाती है। इस संख्या वाले लोग सत्य और ज्ञान के साधक होते हैं।',
    },
    characteristics: [
      { en: 'Spiritual and intuitive', hi: 'आध्यात्मिक और सहज' },
      { en: 'Analytical and wise', hi: 'विश्लेषणात्मक और बुद्धिमान' },
      { en: 'Introspective and thoughtful', hi: 'आत्मनिरीक्षक और विचारशील' },
      { en: 'Seeker of deeper truths', hi: 'गहरे सत्य का साधक' },
    ],
    advice: {
      en: 'Trust your intuition and continue seeking knowledge. Avoid isolation and excessive skepticism.',
      hi: 'अपने अंतर्ज्ञान पर भरोसा रखें और ज्ञान की खोज जारी रखें। अलगाव और अत्यधिक संदेह से बचें।',
    },
  },
  8: {
    number: 8,
    title: {
      en: 'Saturn',
      hi: 'शनि',
    },
    overview: {
      en: 'Number 8 represents power, authority, and material success. It is associated with Saturn, bringing discipline, karma, and the ability to manifest goals. People with this number have strong business acumen and leadership abilities.',
      hi: 'संख्या 8 शक्ति, अधिकार और भौतिक सफलता का प्रतिनिधित्व करती है। यह शनि से जुड़ी है, जो अनुशासन, कर्म और लक्ष्यों को प्रकट करने की क्षमता लाती है। इस संख्या वाले लोगों में मजबूत व्यापारिक कौशल और नेतृत्व क्षमताएं होती हैं।',
    },
    characteristics: [
      { en: 'Ambitious and goal-oriented', hi: 'महत्वाकांक्षी और लक्ष्य-उन्मुख' },
      { en: 'Strong business sense', hi: 'मजबूत व्यापारिक समझ' },
      { en: 'Disciplined and focused', hi: 'अनुशासित और केंद्रित' },
      { en: 'Authority and power', hi: 'अधिकार और शक्ति' },
    ],
    advice: {
      en: 'Use your power responsibly and ethically. Balance material pursuits with spiritual growth.',
      hi: 'अपनी शक्ति का जिम्मेदारी और नैतिकता से उपयोग करें। भौतिक खोज को आध्यात्मिक विकास के साथ संतुलित करें।',
    },
  },
  9: {
    number: 9,
    title: {
      en: 'Mars',
      hi: 'मंगल',
    },
    overview: {
      en: 'Number 9 represents completion, humanitarianism, and universal love. It is associated with Mars, bringing courage, energy, and the desire to serve humanity. People with this number are compassionate leaders who work for the greater good.',
      hi: 'संख्या 9 पूर्णता, मानवतावाद और सार्वभौमिक प्रेम का प्रतिनिधित्व करती है। यह मंगल से जुड़ी है, जो साहस, ऊर्जा और मानवता की सेवा करने की इच्छा लाती है। इस संख्या वाले लोग दयालु नेता होते हैं जो अधिक भलाई के लिए काम करते हैं।',
    },
    characteristics: [
      { en: 'Compassionate and generous', hi: 'दयालु और उदार' },
      { en: 'Idealistic and humanitarian', hi: 'आदर्शवादी और मानवतावादी' },
      { en: 'Courageous and energetic', hi: 'साहसी और ऊर्जावान' },
      { en: 'Universal perspective', hi: 'सार्वभौमिक दृष्टिकोण' },
    ],
    advice: {
      en: 'Serve others but maintain healthy boundaries. Learn to let go of the past and embrace new beginnings.',
      hi: 'दूसरों की सेवा करें लेकिन स्वस्थ सीमाएं बनाए रखें। अतीत को छोड़ना और नई शुरुआत को अपनाना सीखें।',
    },
  },
  11: {
    number: 11,
    title: {
      en: 'The Illuminator (Master)',
      hi: 'प्रकाशक (मास्टर)',
    },
    overview: {
      en: 'Master Number 11 represents spiritual insight, intuition, and enlightenment at the highest level. It carries the energy of both 1 and 2, creating a powerful vibration of inspiration and healing.',
      hi: 'मास्टर नंबर 11 उच्चतम स्तर पर आध्यात्मिक अंतर्दृष्टि, अंतर्ज्ञान और प्रबोधन का प्रतिनिधित्व करता है। यह 1 और 2 दोनों की ऊर्जा रखता है, प्रेरणा और उपचार का एक शक्तिशाली कंपन बनाता है।',
    },
    characteristics: [
      { en: 'Highly intuitive', hi: 'अत्यधिक सहज' },
      { en: 'Visionary and inspiring', hi: 'दूरदर्शी और प्रेरणादायक' },
      { en: 'Spiritually aware', hi: 'आध्यात्मिक रूप से जागरूक' },
      { en: 'Healing abilities', hi: 'उपचार क्षमताएं' },
    ],
    advice: {
      en: 'Trust your spiritual gifts and use them to inspire others. Ground yourself to avoid anxiety.',
      hi: 'अपने आध्यात्मिक उपहारों पर भरोसा रखें और उनका उपयोग दूसरों को प्रेरित करने के लिए करें। चिंता से बचने के लिए खुद को स्थिर करें।',
    },
  },
  22: {
    number: 22,
    title: {
      en: 'The Master Builder',
      hi: 'मास्टर बिल्डर',
    },
    overview: {
      en: 'Master Number 22 is the most powerful number in numerology, representing the ability to turn dreams into reality on a massive scale. It combines the intuition of 11 with the practical energy of 4.',
      hi: 'मास्टर नंबर 22 अंकशास्त्र में सबसे शक्तिशाली संख्या है, जो बड़े पैमाने पर सपनों को हकीकत में बदलने की क्षमता का प्रतिनिधित्व करती है। यह 11 के अंतर्ज्ञान को 4 की व्यावहारिक ऊर्जा के साथ जोड़ती है।',
    },
    characteristics: [
      { en: 'Master manifestor', hi: 'मास्टर मैनिफेस्टर' },
      { en: 'Practical visionary', hi: 'व्यावहारिक दूरदर्शी' },
      { en: 'Large-scale builder', hi: 'बड़े पैमाने पर निर्माता' },
      { en: 'Legacy creator', hi: 'विरासत निर्माता' },
    ],
    advice: {
      en: 'Use your exceptional abilities for the greater good. Avoid the pressure of high expectations.',
      hi: 'अपनी असाधारण क्षमताओं का उपयोग अधिक भलाई के लिए करें। उच्च अपेक्षाओं के दबाव से बचें।',
    },
  },
  33: {
    number: 33,
    title: {
      en: 'The Master Teacher',
      hi: 'मास्टर शिक्षक',
    },
    overview: {
      en: 'Master Number 33 is the rarest and most evolved master number, representing selfless service and spiritual teaching at the highest level. It combines the qualities of 11 and 22 with the nurturing energy of 6.',
      hi: 'मास्टर नंबर 33 सबसे दुर्लभ और सबसे विकसित मास्टर नंबर है, जो उच्चतम स्तर पर निस्वार्थ सेवा और आध्यात्मिक शिक्षण का प्रतिनिधित्व करता है। यह 11 और 22 के गुणों को 6 की पालन-पोषण ऊर्जा के साथ जोड़ता है।',
    },
    characteristics: [
      { en: 'Spiritual master', hi: 'आध्यात्मिक गुरु' },
      { en: 'Selfless healer', hi: 'निस्वार्थ उपचारक' },
      { en: 'Universal love', hi: 'सार्वभौमिक प्रेम' },
      { en: 'Supreme teacher', hi: 'सर्वोच्च शिक्षक' },
    ],
    advice: {
      en: 'Embrace your role as a spiritual teacher. Balance selfless service with self-care.',
      hi: 'एक आध्यात्मिक शिक्षक के रूप में अपनी भूमिका को अपनाएं। निस्वार्थ सेवा को आत्म-देखभाल के साथ संतुलित करें।',
    },
  },
};

/**
 * Gets the meaning for a Chaldean number
 */
export function getChaldeanMeaning(number: number): ChaldeanMeaning | null {
  return CHALDEAN_MEANINGS[number] || null;
}
