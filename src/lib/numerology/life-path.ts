/**
 * Life Path Number Calculator
 *
 * The Life Path Number is the most important number in Numerology.
 * It reveals your life's purpose, natural talents, and challenges.
 *
 * Calculation: Reduce day, month, and year separately, then sum and reduce.
 * Master Numbers (11, 22, 33) are not reduced further.
 */

import { LifePathResult, LifePathMeaning, BilingualText } from '@/types';
import { reduceToSingleDigit, sumDigits } from '@/lib/utils/numbers';

/**
 * Calculates the Life Path Number from birth date components
 */
export function calculateLifePath(
  day: number,
  month: number,
  year: number
): LifePathResult {
  // Step 1: Reduce day to single digit (or master number)
  const dayReduction = reduceNumber(day);

  // Step 2: Reduce month to single digit
  const monthReduction = reduceNumber(month);

  // Step 3: Reduce year to single digit
  const yearReduction = reduceNumber(year);

  // Step 4: Sum the reduced values and reduce again
  const totalSum =
    dayReduction.reduced + monthReduction.reduced + yearReduction.reduced;
  const finalReduction = reduceNumber(totalSum);

  return {
    dateOfBirth: `${day}/${month}/${year}`,
    dayNumber: dayReduction.reduced,
    monthNumber: monthReduction.reduced,
    yearNumber: yearReduction.reduced,
    calculationSteps: {
      day: { original: day, reduced: dayReduction.reduced, steps: dayReduction.steps },
      month: { original: month, reduced: monthReduction.reduced, steps: monthReduction.steps },
      year: { original: year, reduced: yearReduction.reduced, steps: yearReduction.steps },
      final: { sum: totalSum, reduced: finalReduction.reduced, steps: finalReduction.steps },
    },
    lifePathNumber: finalReduction.reduced,
    isMasterNumber: finalReduction.isMasterNumber,
  };
}

/**
 * Reduces a number to single digit or master number
 */
function reduceNumber(num: number): {
  reduced: number;
  steps: number[];
  isMasterNumber: boolean;
} {
  const steps: number[] = [num];
  let current = num;

  while (current > 9) {
    // Check for master numbers
    if (current === 11 || current === 22 || current === 33) {
      return { reduced: current, steps, isMasterNumber: true };
    }

    current = sumDigits(current);
    steps.push(current);
  }

  return { reduced: current, steps, isMasterNumber: false };
}

/**
 * Life Path Number meanings and interpretations
 */
export const LIFE_PATH_MEANINGS: Record<number, LifePathMeaning> = {
  1: {
    number: 1,
    title: {
      en: 'The Leader',
      hi: 'नेता',
    },
    overview: {
      en: 'Life Path 1 represents independence, individuality, and new beginnings. You are a natural leader with the drive to achieve your goals. Your path is about developing self-confidence and pioneering new ideas.',
      hi: 'मूलांक 1 स्वतंत्रता, व्यक्तित्व और नई शुरुआत का प्रतीक है। आप एक प्राकृतिक नेता हैं जिसमें अपने लक्ष्यों को प्राप्त करने की प्रेरणा है। आपका मार्ग आत्मविश्वास विकसित करने और नए विचारों का मार्गदर्शन करने के बारे में है।',
    },
    positiveTraits: [
      { en: 'Independent', hi: 'स्वतंत्र' },
      { en: 'Ambitious', hi: 'महत्वाकांक्षी' },
      { en: 'Courageous', hi: 'साहसी' },
      { en: 'Innovative', hi: 'नवीन' },
      { en: 'Determined', hi: 'दृढ़' },
    ],
    negativeTraits: [
      { en: 'Stubborn', hi: 'जिद्दी' },
      { en: 'Self-centered', hi: 'आत्मकेंद्रित' },
      { en: 'Impatient', hi: 'अधीर' },
      { en: 'Aggressive', hi: 'आक्रामक' },
    ],
    careers: [
      { en: 'Entrepreneur', hi: 'उद्यमी' },
      { en: 'CEO/Executive', hi: 'सीईओ/कार्यकारी' },
      { en: 'Inventor', hi: 'आविष्कारक' },
      { en: 'Military Officer', hi: 'सैन्य अधिकारी' },
      { en: 'Politician', hi: 'राजनीतिज्ञ' },
    ],
    compatibleNumbers: [1, 5, 7],
    celebrities: [
      { name: 'Elon Musk', profession: 'Entrepreneur' },
      { name: 'Martin Luther King Jr.', profession: 'Activist' },
      { name: 'Lady Gaga', profession: 'Singer' },
    ],
  },
  2: {
    number: 2,
    title: {
      en: 'The Peacemaker',
      hi: 'शांतिदूत',
    },
    overview: {
      en: 'Life Path 2 is about cooperation, diplomacy, and balance. You are sensitive and intuitive, with a gift for understanding others. Your path involves building harmonious relationships and supporting others.',
      hi: 'मूलांक 2 सहयोग, कूटनीति और संतुलन के बारे में है। आप संवेदनशील और सहज हैं, दूसरों को समझने की प्रतिभा के साथ। आपका मार्ग सामंजस्यपूर्ण संबंध बनाने और दूसरों का समर्थन करने में शामिल है।',
    },
    positiveTraits: [
      { en: 'Diplomatic', hi: 'कूटनीतिक' },
      { en: 'Cooperative', hi: 'सहयोगी' },
      { en: 'Intuitive', hi: 'सहज ज्ञानी' },
      { en: 'Patient', hi: 'धैर्यवान' },
      { en: 'Supportive', hi: 'सहायक' },
    ],
    negativeTraits: [
      { en: 'Over-sensitive', hi: 'अति-संवेदनशील' },
      { en: 'Indecisive', hi: 'अनिर्णायक' },
      { en: 'Passive', hi: 'निष्क्रिय' },
      { en: 'Dependent', hi: 'आश्रित' },
    ],
    careers: [
      { en: 'Mediator', hi: 'मध्यस्थ' },
      { en: 'Counselor', hi: 'परामर्शदाता' },
      { en: 'Diplomat', hi: 'राजनयिक' },
      { en: 'Social Worker', hi: 'सामाजिक कार्यकर्ता' },
      { en: 'Artist', hi: 'कलाकार' },
    ],
    compatibleNumbers: [2, 4, 8],
    celebrities: [
      { name: 'Barack Obama', profession: 'President' },
      { name: 'Jennifer Aniston', profession: 'Actress' },
      { name: 'Diana Ross', profession: 'Singer' },
    ],
  },
  3: {
    number: 3,
    title: {
      en: 'The Communicator',
      hi: 'संचारक',
    },
    overview: {
      en: 'Life Path 3 embodies creativity, self-expression, and joy. You have natural artistic talents and the ability to inspire others. Your path is about expressing yourself creatively and spreading happiness.',
      hi: 'मूलांक 3 रचनात्मकता, आत्म-अभिव्यक्ति और आनंद का प्रतीक है। आपमें प्राकृतिक कलात्मक प्रतिभाएं और दूसरों को प्रेरित करने की क्षमता है। आपका मार्ग रचनात्मक रूप से खुद को व्यक्त करने और खुशी फैलाने के बारे में है।',
    },
    positiveTraits: [
      { en: 'Creative', hi: 'रचनात्मक' },
      { en: 'Expressive', hi: 'अभिव्यंजक' },
      { en: 'Optimistic', hi: 'आशावादी' },
      { en: 'Social', hi: 'सामाजिक' },
      { en: 'Inspiring', hi: 'प्रेरणादायक' },
    ],
    negativeTraits: [
      { en: 'Scattered', hi: 'बिखरा हुआ' },
      { en: 'Superficial', hi: 'सतही' },
      { en: 'Moody', hi: 'मूडी' },
      { en: 'Exaggerating', hi: 'अतिशयोक्ति करने वाला' },
    ],
    careers: [
      { en: 'Writer', hi: 'लेखक' },
      { en: 'Actor', hi: 'अभिनेता' },
      { en: 'Musician', hi: 'संगीतकार' },
      { en: 'Designer', hi: 'डिजाइनर' },
      { en: 'Public Speaker', hi: 'सार्वजनिक वक्ता' },
    ],
    compatibleNumbers: [3, 6, 9],
    celebrities: [
      { name: 'John Travolta', profession: 'Actor' },
      { name: 'Snoop Dogg', profession: 'Rapper' },
      { name: 'Christina Aguilera', profession: 'Singer' },
    ],
  },
  4: {
    number: 4,
    title: {
      en: 'The Builder',
      hi: 'निर्माता',
    },
    overview: {
      en: 'Life Path 4 represents stability, hard work, and practical achievement. You are methodical and dependable, building solid foundations for success. Your path is about creating lasting structures and systems.',
      hi: 'मूलांक 4 स्थिरता, कड़ी मेहनत और व्यावहारिक उपलब्धि का प्रतीक है। आप व्यवस्थित और भरोसेमंद हैं, सफलता के लिए ठोस नींव बनाते हैं। आपका मार्ग स्थायी संरचनाएं और प्रणालियां बनाने के बारे में है।',
    },
    positiveTraits: [
      { en: 'Practical', hi: 'व्यावहारिक' },
      { en: 'Organized', hi: 'संगठित' },
      { en: 'Reliable', hi: 'विश्वसनीय' },
      { en: 'Disciplined', hi: 'अनुशासित' },
      { en: 'Hardworking', hi: 'मेहनती' },
    ],
    negativeTraits: [
      { en: 'Rigid', hi: 'कठोर' },
      { en: 'Stubborn', hi: 'जिद्दी' },
      { en: 'Workaholic', hi: 'वर्कहॉलिक' },
      { en: 'Boring', hi: 'उबाऊ' },
    ],
    careers: [
      { en: 'Engineer', hi: 'इंजीनियर' },
      { en: 'Architect', hi: 'वास्तुकार' },
      { en: 'Accountant', hi: 'लेखाकार' },
      { en: 'Project Manager', hi: 'प्रोजेक्ट मैनेजर' },
      { en: 'Scientist', hi: 'वैज्ञानिक' },
    ],
    compatibleNumbers: [2, 4, 8],
    celebrities: [
      { name: 'Oprah Winfrey', profession: 'Media Mogul' },
      { name: 'Bill Gates', profession: 'Entrepreneur' },
      { name: 'Clint Eastwood', profession: 'Actor/Director' },
    ],
  },
  5: {
    number: 5,
    title: {
      en: 'The Adventurer',
      hi: 'साहसी',
    },
    overview: {
      en: 'Life Path 5 is about freedom, change, and adventure. You are versatile and adaptable, craving new experiences. Your path involves embracing change and experiencing life to its fullest.',
      hi: 'मूलांक 5 स्वतंत्रता, परिवर्तन और साहस के बारे में है। आप बहुमुखी और अनुकूलनशील हैं, नए अनुभवों की चाहत रखते हैं। आपका मार्ग परिवर्तन को अपनाने और जीवन को पूर्णतम रूप से जीने में शामिल है।',
    },
    positiveTraits: [
      { en: 'Adventurous', hi: 'साहसिक' },
      { en: 'Versatile', hi: 'बहुमुखी' },
      { en: 'Curious', hi: 'जिज्ञासु' },
      { en: 'Energetic', hi: 'ऊर्जावान' },
      { en: 'Adaptable', hi: 'अनुकूलनशील' },
    ],
    negativeTraits: [
      { en: 'Restless', hi: 'बेचैन' },
      { en: 'Irresponsible', hi: 'गैर-जिम्मेदार' },
      { en: 'Impulsive', hi: 'आवेगी' },
      { en: 'Inconsistent', hi: 'असंगत' },
    ],
    careers: [
      { en: 'Travel Writer', hi: 'यात्रा लेखक' },
      { en: 'Sales Professional', hi: 'बिक्री पेशेवर' },
      { en: 'Journalist', hi: 'पत्रकार' },
      { en: 'Pilot', hi: 'पायलट' },
      { en: 'Event Planner', hi: 'इवेंट प्लानर' },
    ],
    compatibleNumbers: [1, 5, 7],
    celebrities: [
      { name: 'Angelina Jolie', profession: 'Actress' },
      { name: 'Mick Jagger', profession: 'Musician' },
      { name: 'Steven Spielberg', profession: 'Director' },
    ],
  },
  6: {
    number: 6,
    title: {
      en: 'The Nurturer',
      hi: 'पालनकर्ता',
    },
    overview: {
      en: 'Life Path 6 embodies love, responsibility, and domestic harmony. You are caring and protective, with a strong sense of duty to family. Your path is about creating beauty and caring for others.',
      hi: 'मूलांक 6 प्रेम, जिम्मेदारी और घरेलू सामंजस्य का प्रतीक है। आप देखभाल करने वाले और सुरक्षात्मक हैं, परिवार के प्रति मजबूत कर्तव्य भावना के साथ। आपका मार्ग सुंदरता बनाने और दूसरों की देखभाल करने के बारे में है।',
    },
    positiveTraits: [
      { en: 'Nurturing', hi: 'पालनकर्ता' },
      { en: 'Responsible', hi: 'जिम्मेदार' },
      { en: 'Loving', hi: 'प्यार करने वाला' },
      { en: 'Protective', hi: 'सुरक्षात्मक' },
      { en: 'Harmonious', hi: 'सामंजस्यपूर्ण' },
    ],
    negativeTraits: [
      { en: 'Controlling', hi: 'नियंत्रित करने वाला' },
      { en: 'Self-righteous', hi: 'आत्म-धार्मिक' },
      { en: 'Meddling', hi: 'हस्तक्षेप करने वाला' },
      { en: 'Worried', hi: 'चिंतित' },
    ],
    careers: [
      { en: 'Teacher', hi: 'शिक्षक' },
      { en: 'Nurse', hi: 'नर्स' },
      { en: 'Interior Designer', hi: 'इंटीरियर डिजाइनर' },
      { en: 'Counselor', hi: 'परामर्शदाता' },
      { en: 'Chef', hi: 'शेफ' },
    ],
    compatibleNumbers: [3, 6, 9],
    celebrities: [
      { name: 'John Lennon', profession: 'Musician' },
      { name: 'Meryl Streep', profession: 'Actress' },
      { name: 'Eddie Murphy', profession: 'Actor/Comedian' },
    ],
  },
  7: {
    number: 7,
    title: {
      en: 'The Seeker',
      hi: 'खोजी',
    },
    overview: {
      en: 'Life Path 7 represents wisdom, spirituality, and analysis. You are introspective and philosophical, seeking deeper truths. Your path is about developing spiritual wisdom and understanding life\'s mysteries.',
      hi: 'मूलांक 7 ज्ञान, आध्यात्मिकता और विश्लेषण का प्रतीक है। आप आत्मनिरीक्षक और दार्शनिक हैं, गहरे सत्य की खोज करते हैं। आपका मार्ग आध्यात्मिक ज्ञान विकसित करने और जीवन के रहस्यों को समझने के बारे में है।',
    },
    positiveTraits: [
      { en: 'Analytical', hi: 'विश्लेषणात्मक' },
      { en: 'Spiritual', hi: 'आध्यात्मिक' },
      { en: 'Wise', hi: 'बुद्धिमान' },
      { en: 'Intuitive', hi: 'सहज ज्ञानी' },
      { en: 'Introspective', hi: 'आत्मनिरीक्षक' },
    ],
    negativeTraits: [
      { en: 'Isolated', hi: 'अलग-थलग' },
      { en: 'Skeptical', hi: 'संदेहवादी' },
      { en: 'Secretive', hi: 'गोपनीय' },
      { en: 'Distant', hi: 'दूर' },
    ],
    careers: [
      { en: 'Researcher', hi: 'शोधकर्ता' },
      { en: 'Philosopher', hi: 'दार्शनिक' },
      { en: 'Scientist', hi: 'वैज्ञानिक' },
      { en: 'Spiritual Teacher', hi: 'आध्यात्मिक शिक्षक' },
      { en: 'Psychologist', hi: 'मनोवैज्ञानिक' },
    ],
    compatibleNumbers: [1, 5, 7],
    celebrities: [
      { name: 'Leonardo DiCaprio', profession: 'Actor' },
      { name: 'Princess Diana', profession: 'Royal' },
      { name: 'Johnny Depp', profession: 'Actor' },
    ],
  },
  8: {
    number: 8,
    title: {
      en: 'The Achiever',
      hi: 'उपलब्धि प्राप्तकर्ता',
    },
    overview: {
      en: 'Life Path 8 represents power, abundance, and material success. You are ambitious and goal-oriented, with strong business acumen. Your path is about achieving material success and using power wisely.',
      hi: 'मूलांक 8 शक्ति, प्रचुरता और भौतिक सफलता का प्रतीक है। आप महत्वाकांक्षी और लक्ष्य-उन्मुख हैं, मजबूत व्यापारिक कौशल के साथ। आपका मार्ग भौतिक सफलता प्राप्त करने और शक्ति का बुद्धिमानी से उपयोग करने के बारे में है।',
    },
    positiveTraits: [
      { en: 'Ambitious', hi: 'महत्वाकांक्षी' },
      { en: 'Authoritative', hi: 'आधिकारिक' },
      { en: 'Successful', hi: 'सफल' },
      { en: 'Organized', hi: 'संगठित' },
      { en: 'Business-minded', hi: 'व्यापार-मनोवृत्ति' },
    ],
    negativeTraits: [
      { en: 'Materialistic', hi: 'भौतिकवादी' },
      { en: 'Workaholic', hi: 'वर्कहॉलिक' },
      { en: 'Dominating', hi: 'प्रभुत्वशाली' },
      { en: 'Power-hungry', hi: 'शक्ति का भूखा' },
    ],
    careers: [
      { en: 'CEO', hi: 'सीईओ' },
      { en: 'Banker', hi: 'बैंकर' },
      { en: 'Real Estate Developer', hi: 'रियल एस्टेट डेवलपर' },
      { en: 'Lawyer', hi: 'वकील' },
      { en: 'Investor', hi: 'निवेशक' },
    ],
    compatibleNumbers: [2, 4, 8],
    celebrities: [
      { name: 'Nelson Mandela', profession: 'Leader' },
      { name: 'Pablo Picasso', profession: 'Artist' },
      { name: 'Sandra Bullock', profession: 'Actress' },
    ],
  },
  9: {
    number: 9,
    title: {
      en: 'The Humanitarian',
      hi: 'मानवतावादी',
    },
    overview: {
      en: 'Life Path 9 embodies compassion, wisdom, and universal love. You are idealistic and generous, concerned with the welfare of humanity. Your path is about serving others and making the world a better place.',
      hi: 'मूलांक 9 करुणा, ज्ञान और सार्वभौमिक प्रेम का प्रतीक है। आप आदर्शवादी और उदार हैं, मानवता के कल्याण से संबंधित। आपका मार्ग दूसरों की सेवा करने और दुनिया को बेहतर बनाने के बारे में है।',
    },
    positiveTraits: [
      { en: 'Compassionate', hi: 'दयालु' },
      { en: 'Generous', hi: 'उदार' },
      { en: 'Idealistic', hi: 'आदर्शवादी' },
      { en: 'Wise', hi: 'बुद्धिमान' },
      { en: 'Charitable', hi: 'परोपकारी' },
    ],
    negativeTraits: [
      { en: 'Moody', hi: 'मूडी' },
      { en: 'Distant', hi: 'दूर' },
      { en: 'Scattered', hi: 'बिखरा हुआ' },
      { en: 'Resentful', hi: 'आक्रोशपूर्ण' },
    ],
    careers: [
      { en: 'Humanitarian', hi: 'मानवतावादी' },
      { en: 'Doctor', hi: 'डॉक्टर' },
      { en: 'Philanthropist', hi: 'परोपकारी' },
      { en: 'Artist', hi: 'कलाकार' },
      { en: 'Environmental Activist', hi: 'पर्यावरण कार्यकर्ता' },
    ],
    compatibleNumbers: [3, 6, 9],
    celebrities: [
      { name: 'Mahatma Gandhi', profession: 'Leader' },
      { name: 'Mother Teresa', profession: 'Humanitarian' },
      { name: 'Jim Carrey', profession: 'Actor' },
    ],
  },
  11: {
    number: 11,
    title: {
      en: 'The Illuminator',
      hi: 'प्रकाशक',
    },
    overview: {
      en: 'Master Number 11 represents spiritual insight, intuition, and enlightenment. You are highly sensitive with visionary abilities. Your path is about inspiring others through spiritual awareness and bringing light to the world.',
      hi: 'मास्टर नंबर 11 आध्यात्मिक अंतर्दृष्टि, अंतर्ज्ञान और प्रबोधन का प्रतीक है। आप दूरदर्शी क्षमताओं के साथ अत्यधिक संवेदनशील हैं। आपका मार्ग आध्यात्मिक जागरूकता के माध्यम से दूसरों को प्रेरित करना और दुनिया में प्रकाश लाना है।',
    },
    positiveTraits: [
      { en: 'Intuitive', hi: 'सहज ज्ञानी' },
      { en: 'Visionary', hi: 'दूरदर्शी' },
      { en: 'Inspiring', hi: 'प्रेरणादायक' },
      { en: 'Spiritual', hi: 'आध्यात्मिक' },
      { en: 'Charismatic', hi: 'करिश्माई' },
    ],
    negativeTraits: [
      { en: 'Anxious', hi: 'चिंतित' },
      { en: 'Impractical', hi: 'अव्यावहारिक' },
      { en: 'Over-sensitive', hi: 'अति-संवेदनशील' },
      { en: 'Self-critical', hi: 'आत्म-आलोचक' },
    ],
    careers: [
      { en: 'Spiritual Leader', hi: 'आध्यात्मिक नेता' },
      { en: 'Life Coach', hi: 'जीवन प्रशिक्षक' },
      { en: 'Artist', hi: 'कलाकार' },
      { en: 'Inventor', hi: 'आविष्कारक' },
      { en: 'Healer', hi: 'हीलर' },
    ],
    compatibleNumbers: [2, 4, 6],
    celebrities: [
      { name: 'Barack Obama', profession: 'President' },
      { name: 'Orlando Bloom', profession: 'Actor' },
      { name: 'Mozart', profession: 'Composer' },
    ],
  },
  22: {
    number: 22,
    title: {
      en: 'The Master Builder',
      hi: 'मास्टर बिल्डर',
    },
    overview: {
      en: 'Master Number 22 represents the ability to turn dreams into reality on a grand scale. You have exceptional organizational abilities and can achieve great things. Your path is about building lasting legacies that benefit humanity.',
      hi: 'मास्टर नंबर 22 बड़े पैमाने पर सपनों को हकीकत में बदलने की क्षमता का प्रतीक है। आपमें असाधारण संगठनात्मक क्षमताएं हैं और आप महान चीजें हासिल कर सकते हैं। आपका मार्ग मानवता को लाभ पहुंचाने वाली स्थायी विरासतों का निर्माण करना है।',
    },
    positiveTraits: [
      { en: 'Visionary', hi: 'दूरदर्शी' },
      { en: 'Masterful', hi: 'निपुण' },
      { en: 'Practical', hi: 'व्यावहारिक' },
      { en: 'Ambitious', hi: 'महत्वाकांक्षी' },
      { en: 'Disciplined', hi: 'अनुशासित' },
    ],
    negativeTraits: [
      { en: 'Overwhelming pressure', hi: 'अत्यधिक दबाव' },
      { en: 'Workaholic', hi: 'वर्कहॉलिक' },
      { en: 'Controlling', hi: 'नियंत्रित करने वाला' },
      { en: 'Stubborn', hi: 'जिद्दी' },
    ],
    careers: [
      { en: 'Architect', hi: 'वास्तुकार' },
      { en: 'World Leader', hi: 'विश्व नेता' },
      { en: 'Engineer', hi: 'इंजीनियर' },
      { en: 'Diplomat', hi: 'राजनयिक' },
      { en: 'Philanthropist', hi: 'परोपकारी' },
    ],
    compatibleNumbers: [4, 6, 8],
    celebrities: [
      { name: 'Paul McCartney', profession: 'Musician' },
      { name: 'Bill Clinton', profession: 'President' },
      { name: 'Dean Martin', profession: 'Entertainer' },
    ],
  },
  33: {
    number: 33,
    title: {
      en: 'The Master Teacher',
      hi: 'मास्टर शिक्षक',
    },
    overview: {
      en: 'Master Number 33 represents the highest form of spiritual teacher. You have the rare ability to channel healing and teaching energies. Your path is about selfless service and uplifting humanity through love and guidance.',
      hi: 'मास्टर नंबर 33 आध्यात्मिक शिक्षक के उच्चतम रूप का प्रतीक है। आपमें उपचार और शिक्षण ऊर्जाओं को प्रसारित करने की दुर्लभ क्षमता है। आपका मार्ग निस्वार्थ सेवा और प्रेम और मार्गदर्शन के माध्यम से मानवता को उन्नत करना है।',
    },
    positiveTraits: [
      { en: 'Selfless', hi: 'निस्वार्थ' },
      { en: 'Compassionate', hi: 'दयालु' },
      { en: 'Healing', hi: 'उपचारक' },
      { en: 'Wise', hi: 'बुद्धिमान' },
      { en: 'Inspiring', hi: 'प्रेरणादायक' },
    ],
    negativeTraits: [
      { en: 'Martyr complex', hi: 'शहीद परिसर' },
      { en: 'Overly idealistic', hi: 'अत्यधिक आदर्शवादी' },
      { en: 'Burden of responsibility', hi: 'जिम्मेदारी का बोझ' },
      { en: 'Difficulty setting boundaries', hi: 'सीमाएं निर्धारित करने में कठिनाई' },
    ],
    careers: [
      { en: 'Spiritual Teacher', hi: 'आध्यात्मिक शिक्षक' },
      { en: 'Healer', hi: 'हीलर' },
      { en: 'Humanitarian Leader', hi: 'मानवतावादी नेता' },
      { en: 'Counselor', hi: 'परामर्शदाता' },
      { en: 'Artist', hi: 'कलाकार' },
    ],
    compatibleNumbers: [6, 9, 11],
    celebrities: [
      { name: 'Albert Einstein', profession: 'Physicist' },
      { name: 'Dalai Lama', profession: 'Spiritual Leader' },
      { name: 'Stephen King', profession: 'Author' },
    ],
  },
};

/**
 * Gets the meaning for a Life Path Number
 */
export function getLifePathMeaning(number: number): LifePathMeaning | null {
  return LIFE_PATH_MEANINGS[number] || null;
}
