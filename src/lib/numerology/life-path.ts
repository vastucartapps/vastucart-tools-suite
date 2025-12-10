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
      en: 'Life Path Number 1 in numerology represents independence, individuality, and new beginnings. You are a natural-born leader with an unwavering drive to achieve your goals and make your mark on the world. This number carries the vibration of the pioneer—someone who forges new paths rather than following existing ones. Your life journey is about developing self-confidence, asserting your individuality, and learning to stand on your own two feet while inspiring others along the way.',
      hi: 'अंकशास्त्र में मूलांक 1 स्वतंत्रता, व्यक्तित्व और नई शुरुआत का प्रतीक है। आप एक प्राकृतिक नेता हैं जिसमें अपने लक्ष्यों को प्राप्त करने और दुनिया में अपनी छाप छोड़ने की अटूट प्रेरणा है। यह संख्या अग्रणी की ऊर्जा वहन करती है—जो मौजूदा रास्तों का अनुसरण करने के बजाय नए रास्ते बनाता है। आपकी जीवन यात्रा आत्मविश्वास विकसित करने, अपनी व्यक्तिगतता को स्थापित करने और दूसरों को प्रेरित करते हुए अपने पैरों पर खड़ा होना सीखने के बारे में है।',
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
    lifePhases: {
      youth: {
        en: 'Early years (0-28): Focus on building independence and discovering your unique identity. This is when you develop leadership skills through trial and error.',
        hi: 'प्रारंभिक वर्ष (0-28): स्वतंत्रता बनाने और अपनी अद्वितीय पहचान खोजने पर ध्यान केंद्रित करें। इस समय आप परीक्षण और त्रुटि के माध्यम से नेतृत्व कौशल विकसित करते हैं।',
      },
      adult: {
        en: 'Prime years (29-56): Your ambitions materialize as you take charge of major projects and ventures. Career success comes through bold initiatives.',
        hi: 'प्रमुख वर्ष (29-56): जब आप बड़ी परियोजनाओं और उद्यमों का नेतृत्व करते हैं तो आपकी महत्वाकांक्षाएं साकार होती हैं। साहसिक पहलों के माध्यम से करियर सफलता मिलती है।',
      },
      mature: {
        en: 'Wisdom years (57+): You become a mentor, guiding others with your experience. Legacy-building and passing on knowledge become priorities.',
        hi: 'ज्ञान वर्ष (57+): आप एक मार्गदर्शक बनते हैं, अपने अनुभव से दूसरों का मार्गदर्शन करते हैं। विरासत बनाना और ज्ञान साझा करना प्राथमिकता बन जाता है।',
      },
    },
    loveRelationships: {
      en: 'In love, Life Path 1 needs a partner who respects their independence and ambition. You thrive with someone who has their own goals and won\'t be overshadowed by your strong personality. Best matches include Life Path 3 (creative support), 5 (adventurous equals), and 7 (intellectual depth).',
      hi: 'प्यार में, मूलांक 1 को ऐसे साथी की जरूरत है जो उनकी स्वतंत्रता और महत्वाकांक्षा का सम्मान करे। आप ऐसे व्यक्ति के साथ फलते-फूलते हैं जिसके अपने लक्ष्य हैं और जो आपके मजबूत व्यक्तित्व से दबेगा नहीं। सर्वश्रेष्ठ जोड़ियों में मूलांक 3, 5 और 7 शामिल हैं।',
    },
    moneyWork: {
      en: 'Life Path 1 excels in careers requiring initiative and leadership. You\'re naturally drawn to entrepreneurship, management, and pioneering fields. Financial success comes when you trust your instincts and take calculated risks. Avoid partnerships where you can\'t lead—you work best independently or at the helm.',
      hi: 'मूलांक 1 पहल और नेतृत्व की आवश्यकता वाले करियर में उत्कृष्ट है। आप स्वाभाविक रूप से उद्यमिता, प्रबंधन और अग्रणी क्षेत्रों की ओर आकर्षित होते हैं। जब आप अपनी प्रवृत्ति पर भरोसा करते हैं और गणनात्मक जोखिम लेते हैं तब वित्तीय सफलता मिलती है। ऐसी साझेदारियों से बचें जहां आप नेतृत्व नहीं कर सकते।',
    },
  },
  2: {
    number: 2,
    title: {
      en: 'The Peacemaker',
      hi: 'शांतिदूत',
    },
    overview: {
      en: 'Life Path Number 2 in numerology is about cooperation, diplomacy, and balance. You are deeply sensitive and intuitive, with a natural gift for understanding the emotions and needs of others. The number 2 vibration makes you the ultimate team player—someone who brings harmony to discord and unity to division. Your life journey involves learning to balance your own needs with those of others, building meaningful partnerships, and using your diplomatic skills to create peace in every environment you enter.',
      hi: 'अंकशास्त्र में मूलांक 2 सहयोग, कूटनीति और संतुलन के बारे में है। आप गहराई से संवेदनशील और सहज हैं, दूसरों की भावनाओं और जरूरतों को समझने की प्राकृतिक प्रतिभा के साथ। मूलांक 2 की ऊर्जा आपको परम टीम खिलाड़ी बनाती है—जो असंगति में सामंजस्य और विभाजन में एकता लाता है। आपकी जीवन यात्रा में अपनी जरूरतों को दूसरों की जरूरतों के साथ संतुलित करना, सार्थक साझेदारियां बनाना और हर वातावरण में शांति बनाना शामिल है।',
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
    lifePhases: {
      youth: {
        en: 'Early years (0-28): Learning to value your sensitivity as a strength rather than weakness. Developing emotional intelligence and understanding relationship dynamics.',
        hi: 'प्रारंभिक वर्ष (0-28): अपनी संवेदनशीलता को कमजोरी के बजाय ताकत के रूप में महत्व देना सीखें। भावनात्मक बुद्धि और संबंध गतिशीलता को समझना विकसित करें।',
      },
      adult: {
        en: 'Prime years (29-56): Your partnership and diplomatic skills reach their peak. Success comes through collaboration, mediation, and building bridges between people.',
        hi: 'प्रमुख वर्ष (29-56): आपकी साझेदारी और कूटनीतिक कौशल चरम पर पहुंचते हैं। सहयोग, मध्यस्थता और लोगों के बीच पुल बनाने से सफलता मिलती है।',
      },
      mature: {
        en: 'Wisdom years (57+): You become a beloved peacemaker in your community, valued for your wisdom in relationships and ability to heal conflicts.',
        hi: 'ज्ञान वर्ष (57+): आप अपने समुदाय में प्रिय शांतिदूत बन जाते हैं, रिश्तों में आपकी समझदारी और संघर्षों को सुलझाने की क्षमता के लिए सम्मानित।',
      },
    },
    loveRelationships: {
      en: 'Life Path 2 thrives in committed, harmonious relationships. You need a partner who appreciates your nurturing nature and provides emotional security. Avoid partners who take advantage of your giving nature. Best matches include Life Path 4 (stable foundation), 6 (mutual nurturing), and 8 (balanced power dynamics).',
      hi: 'मूलांक 2 प्रतिबद्ध, सामंजस्यपूर्ण रिश्तों में फलता-फूलता है। आपको ऐसे साथी की जरूरत है जो आपकी पालन-पोषण प्रकृति की सराहना करे और भावनात्मक सुरक्षा प्रदान करे। ऐसे साथियों से बचें जो आपकी देने की प्रवृत्ति का फायदा उठाते हैं। सर्वश्रेष्ठ जोड़ियों में मूलांक 4, 6 और 8 शामिल हैं।',
    },
    moneyWork: {
      en: 'Life Path 2 excels in supportive roles, partnerships, and team-oriented environments. You\'re brilliant at behind-the-scenes work and collaborative projects. Financial success comes through partnerships rather than solo ventures. Careers in counseling, HR, diplomacy, or the arts suit your sensitive nature.',
      hi: 'मूलांक 2 सहायक भूमिकाओं, साझेदारियों और टीम-उन्मुख वातावरण में उत्कृष्ट है। आप पर्दे के पीछे के काम और सहयोगी परियोजनाओं में शानदार हैं। एकल उद्यमों के बजाय साझेदारी के माध्यम से वित्तीय सफलता मिलती है। परामर्श, एचआर, कूटनीति या कला में करियर आपकी संवेदनशील प्रकृति के अनुकूल है।',
    },
  },
  3: {
    number: 3,
    title: {
      en: 'The Communicator',
      hi: 'संचारक',
    },
    overview: {
      en: 'Life Path Number 3 in numerology embodies creativity, self-expression, and joy. You possess natural artistic talents and an infectious enthusiasm that lights up every room you enter. The vibration of 3 is that of the communicator—someone who can express complex ideas through words, art, music, or performance. Your life journey is about finding your unique creative voice, inspiring others through your talents, and learning to channel your abundant energy into meaningful artistic expression.',
      hi: 'अंकशास्त्र में मूलांक 3 रचनात्मकता, आत्म-अभिव्यक्ति और आनंद का प्रतीक है। आपमें प्राकृतिक कलात्मक प्रतिभाएं और संक्रामक उत्साह है जो हर कमरे को रोशन करता है। 3 की ऊर्जा संचारक की है—जो शब्दों, कला, संगीत या प्रदर्शन के माध्यम से जटिल विचारों को व्यक्त कर सकता है। आपकी जीवन यात्रा अपनी अनूठी रचनात्मक आवाज खोजने, अपनी प्रतिभाओं के माध्यम से दूसरों को प्रेरित करने और अपनी प्रचुर ऊर्जा को सार्थक कलात्मक अभिव्यक्ति में बदलने के बारे में है।',
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
    lifePhases: {
      youth: {
        en: 'Early years (0-28): Discovering and developing your creative talents. Experimenting with different forms of self-expression and building social connections.',
        hi: 'प्रारंभिक वर्ष (0-28): अपनी रचनात्मक प्रतिभाओं की खोज और विकास। आत्म-अभिव्यक्ति के विभिन्न रूपों के साथ प्रयोग और सामाजिक संबंध बनाना।',
      },
      adult: {
        en: 'Prime years (29-56): Your creative abilities reach full bloom. Success comes through entertainment, communication, and artistic ventures. This is your time to shine publicly.',
        hi: 'प्रमुख वर्ष (29-56): आपकी रचनात्मक क्षमताएं पूर्ण खिलती हैं। मनोरंजन, संचार और कलात्मक उद्यमों के माध्यम से सफलता मिलती है। यह आपका सार्वजनिक रूप से चमकने का समय है।',
      },
      mature: {
        en: 'Wisdom years (57+): You become a creative mentor, teaching the next generation. Your joy and optimism inspire those around you as you share your artistic wisdom.',
        hi: 'ज्ञान वर्ष (57+): आप एक रचनात्मक मार्गदर्शक बन जाते हैं, अगली पीढ़ी को सिखाते हैं। आपकी खुशी और आशावाद आपके आसपास के लोगों को प्रेरित करता है जब आप अपना कलात्मक ज्ञान साझा करते हैं।',
      },
    },
    loveRelationships: {
      en: 'Life Path 3 needs a partner who appreciates their creativity and gives them space to express themselves. You thrive with someone who can keep up with your social nature and shares your love for fun. Best matches include Life Path 5 (adventurous spirit), 6 (nurturing support), and 9 (shared idealism).',
      hi: 'मूलांक 3 को ऐसे साथी की जरूरत है जो उनकी रचनात्मकता की सराहना करे और उन्हें खुद को व्यक्त करने की जगह दे। आप ऐसे व्यक्ति के साथ फलते-फूलते हैं जो आपकी सामाजिक प्रकृति के साथ तालमेल रख सके। सर्वश्रेष्ठ जोड़ियों में मूलांक 5, 6 और 9 शामिल हैं।',
    },
    moneyWork: {
      en: 'Life Path 3 thrives in creative industries—entertainment, media, writing, design, and the arts. Your natural communication skills can lead to success in sales, marketing, or public relations. Financial success comes when you monetize your creativity. Avoid mundane, repetitive work that stifles your expressive nature.',
      hi: 'मूलांक 3 रचनात्मक उद्योगों में फलता-फूलता है—मनोरंजन, मीडिया, लेखन, डिजाइन और कला। आपकी प्राकृतिक संचार कौशल बिक्री, मार्केटिंग या जनसंपर्क में सफलता दिला सकती है। वित्तीय सफलता तब मिलती है जब आप अपनी रचनात्मकता का मुद्रीकरण करते हैं।',
    },
  },
  4: {
    number: 4,
    title: {
      en: 'The Builder',
      hi: 'निर्माता',
    },
    overview: {
      en: 'Life Path Number 4 in numerology represents stability, hard work, and practical achievement. You are methodical and dependable—the person everyone counts on to get things done right. The number 4 vibration is that of the builder, creating solid foundations that stand the test of time. Your life journey is about developing discipline, mastering your craft through persistent effort, and leaving behind tangible accomplishments that serve as your legacy.',
      hi: 'अंकशास्त्र में मूलांक 4 स्थिरता, कड़ी मेहनत और व्यावहारिक उपलब्धि का प्रतीक है। आप व्यवस्थित और भरोसेमंद हैं—वह व्यक्ति जिस पर हर कोई काम सही तरीके से करने के लिए भरोसा करता है। मूलांक 4 की ऊर्जा निर्माता की है, जो समय की कसौटी पर खरी उतरने वाली ठोस नींव बनाता है। आपकी जीवन यात्रा अनुशासन विकसित करने, लगातार प्रयास के माध्यम से अपनी कला में महारत हासिल करने और ठोस उपलब्धियां छोड़ने के बारे में है।',
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
    lifePhases: {
      youth: {
        en: 'Early years (0-28): Building your work ethic and foundational skills. Learning the value of discipline and persistence through challenges.',
        hi: 'प्रारंभिक वर्ष (0-28): अपनी कार्य नैतिकता और मूलभूत कौशल का निर्माण। चुनौतियों के माध्यम से अनुशासन और दृढ़ता का मूल्य सीखना।',
      },
      adult: {
        en: 'Prime years (29-56): Your hard work pays off as you build lasting career achievements. This is when you create structures—businesses, homes, systems—that endure.',
        hi: 'प्रमुख वर्ष (29-56): आपकी कड़ी मेहनत का फल मिलता है जब आप स्थायी करियर उपलब्धियां बनाते हैं। यह वह समय है जब आप टिकाऊ संरचनाएं बनाते हैं—व्यवसाय, घर, प्रणालियां।',
      },
      mature: {
        en: 'Wisdom years (57+): You enjoy the fruits of your lifelong labor. Others seek your practical wisdom and respect the foundations you\'ve built.',
        hi: 'ज्ञान वर्ष (57+): आप अपने आजीवन श्रम के फलों का आनंद लेते हैं। दूसरे आपकी व्यावहारिक बुद्धि की तलाश करते हैं और आपके द्वारा बनाई गई नींव का सम्मान करते हैं।',
      },
    },
    loveRelationships: {
      en: 'Life Path 4 needs a stable, committed relationship. You value loyalty and dependability in a partner. Romance may not be your strong suit, but you show love through actions and providing security. Best matches include Life Path 2 (emotional support), 6 (shared values), and 8 (mutual ambition).',
      hi: 'मूलांक 4 को स्थिर, प्रतिबद्ध रिश्ते की जरूरत है। आप साथी में वफादारी और विश्वसनीयता को महत्व देते हैं। रोमांस आपका मजबूत पक्ष नहीं हो सकता, लेकिन आप कार्यों और सुरक्षा प्रदान करके प्यार दिखाते हैं। सर्वश्रेष्ठ जोड़ियों में मूलांक 2, 6 और 8 शामिल हैं।',
    },
    moneyWork: {
      en: 'Life Path 4 builds wealth slowly but surely through consistent effort and smart planning. You excel in careers requiring precision—engineering, accounting, law, construction, and management. Financial security is important to you, so you save and invest wisely. Avoid get-rich-quick schemes; your path to wealth is through steady, reliable work.',
      hi: 'मूलांक 4 लगातार प्रयास और स्मार्ट योजना के माध्यम से धीरे-धीरे लेकिन निश्चित रूप से धन बनाता है। आप सटीकता की आवश्यकता वाले करियर में उत्कृष्ट हैं—इंजीनियरिंग, लेखांकन, कानून, निर्माण और प्रबंधन। वित्तीय सुरक्षा आपके लिए महत्वपूर्ण है, इसलिए आप समझदारी से बचत और निवेश करते हैं।',
    },
  },
  5: {
    number: 5,
    title: {
      en: 'The Adventurer',
      hi: 'साहसी',
    },
    overview: {
      en: 'Life Path Number 5 in numerology is about freedom, change, and adventure. You are versatile and adaptable, with an insatiable curiosity that drives you to explore every corner of life. The vibration of 5 is that of the free spirit—someone who cannot be confined by routines or conventional expectations. Your life journey involves embracing change as a constant companion, accumulating diverse experiences, and inspiring others through your fearless approach to living life to its fullest.',
      hi: 'अंकशास्त्र में मूलांक 5 स्वतंत्रता, परिवर्तन और साहस के बारे में है। आप बहुमुखी और अनुकूलनशील हैं, जीवन के हर कोने को खोजने की अतृप्त जिज्ञासा के साथ। 5 की ऊर्जा स्वतंत्र आत्मा की है—जो दिनचर्या या पारंपरिक अपेक्षाओं से बंधा नहीं हो सकता। आपकी जीवन यात्रा में परिवर्तन को निरंतर साथी के रूप में अपनाना, विविध अनुभव जमा करना और जीवन को पूर्णतम रूप से जीने के अपने निडर दृष्टिकोण से दूसरों को प्रेरित करना शामिल है।',
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
    lifePhases: {
      youth: {
        en: 'Early years (0-28): Experimenting with different lifestyles, careers, and places. This restless period shapes your adaptability and worldview through diverse experiences.',
        hi: 'प्रारंभिक वर्ष (0-28): विभिन्न जीवनशैलियों, करियर और स्थानों के साथ प्रयोग। यह बेचैन अवधि विविध अनुभवों के माध्यम से आपकी अनुकूलनशीलता और विश्वदृष्टि को आकार देती है।',
      },
      adult: {
        en: 'Prime years (29-56): Your experiences become valuable wisdom. Success comes through careers involving travel, communication, or constant change. You may have multiple career shifts.',
        hi: 'प्रमुख वर्ष (29-56): आपके अनुभव मूल्यवान ज्ञान बन जाते हैं। यात्रा, संचार या निरंतर परिवर्तन वाले करियर से सफलता मिलती है। आपके कई करियर बदलाव हो सकते हैं।',
      },
      mature: {
        en: 'Wisdom years (57+): You become a storyteller and guide, sharing wisdom from your adventures. Your life experiences make you an invaluable source of perspective and advice.',
        hi: 'ज्ञान वर्ष (57+): आप एक कथाकार और मार्गदर्शक बन जाते हैं, अपने साहसिक कार्यों से ज्ञान साझा करते हैं। आपके जीवन अनुभव आपको परिप्रेक्ष्य और सलाह का अमूल्य स्रोत बनाते हैं।',
      },
    },
    loveRelationships: {
      en: 'Life Path 5 needs a partner who values freedom and adventure. You resist possessiveness and need space to explore. Look for someone who shares your love for new experiences and won\'t try to cage your spirit. Best matches include Life Path 1 (independent equals), 3 (fun-loving), and 7 (intellectually stimulating).',
      hi: 'मूलांक 5 को ऐसे साथी की जरूरत है जो स्वतंत्रता और साहस को महत्व देता हो। आप अधिकार-भावना का विरोध करते हैं और खोज के लिए जगह चाहते हैं। ऐसे व्यक्ति की तलाश करें जो नए अनुभवों के लिए आपके प्यार को साझा करे। सर्वश्रेष्ठ जोड़ियों में मूलांक 1, 3 और 7 शामिल हैं।',
    },
    moneyWork: {
      en: 'Life Path 5 thrives in dynamic careers with variety—sales, travel, media, entertainment, or entrepreneurship. You struggle in routine jobs and need flexibility. Financial success comes through adaptability and seizing opportunities. Multiple income streams suit your versatile nature better than a single stable job.',
      hi: 'मूलांक 5 विविधता वाले गतिशील करियर में फलता-फूलता है—बिक्री, यात्रा, मीडिया, मनोरंजन या उद्यमिता। आप नियमित नौकरियों में संघर्ष करते हैं और लचीलापन चाहते हैं। अनुकूलनशीलता और अवसरों को पकड़ने से वित्तीय सफलता मिलती है। एक स्थिर नौकरी की तुलना में कई आय स्रोत आपकी बहुमुखी प्रकृति के लिए बेहतर हैं।',
    },
  },
  6: {
    number: 6,
    title: {
      en: 'The Nurturer',
      hi: 'पालनकर्ता',
    },
    overview: {
      en: 'Life Path Number 6 in numerology embodies love, responsibility, and domestic harmony. You are the natural caregiver of the numerology spectrum—protective, compassionate, and deeply committed to those you love. The vibration of 6 is that of the cosmic parent, someone who creates beauty, harmony, and security wherever they go. Your life journey is about learning to balance caring for others while not neglecting yourself, creating nurturing environments, and using your sense of aesthetics and responsibility to make the world more beautiful.',
      hi: 'अंकशास्त्र में मूलांक 6 प्रेम, जिम्मेदारी और घरेलू सामंजस्य का प्रतीक है। आप अंकशास्त्र स्पेक्ट्रम के प्राकृतिक देखभालकर्ता हैं—सुरक्षात्मक, दयालु और उन लोगों के प्रति गहराई से प्रतिबद्ध जिन्हें आप प्यार करते हैं। 6 की ऊर्जा ब्रह्मांडीय माता-पिता की है, जो जहां भी जाता है सुंदरता, सामंजस्य और सुरक्षा बनाता है। आपकी जीवन यात्रा खुद की उपेक्षा न करते हुए दूसरों की देखभाल को संतुलित करना, पोषक वातावरण बनाना और दुनिया को अधिक सुंदर बनाने के लिए अपनी सौंदर्य और जिम्मेदारी की भावना का उपयोग करना है।',
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
    lifePhases: {
      youth: {
        en: 'Early years (0-28): Often taking on caregiver roles early, perhaps caring for siblings or parents. Learning to set healthy boundaries while developing your nurturing gifts.',
        hi: 'प्रारंभिक वर्ष (0-28): अक्सर जल्दी देखभालकर्ता की भूमिका निभाते हैं, शायद भाई-बहनों या माता-पिता की देखभाल। अपनी पालन-पोषण प्रतिभाओं को विकसित करते हुए स्वस्थ सीमाएं निर्धारित करना सीखें।',
      },
      adult: {
        en: 'Prime years (29-56): Creating a loving home and family becomes central. Success comes through healing professions, education, or artistic endeavors that beautify the world.',
        hi: 'प्रमुख वर्ष (29-56): प्यार भरा घर और परिवार बनाना केंद्रीय हो जाता है। उपचार पेशों, शिक्षा या दुनिया को सुंदर बनाने वाले कलात्मक प्रयासों के माध्यम से सफलता मिलती है।',
      },
      mature: {
        en: 'Wisdom years (57+): You become the beloved matriarch/patriarch of your extended family and community, valued for your wisdom, warmth, and unwavering support.',
        hi: 'ज्ञान वर्ष (57+): आप अपने विस्तारित परिवार और समुदाय के प्रिय मातृ/पितृ प्रमुख बन जाते हैं, अपनी बुद्धि, गर्मजोशी और अटूट समर्थन के लिए सम्मानित।',
      },
    },
    loveRelationships: {
      en: 'Life Path 6 is the most romantic and devoted partner in numerology. You seek deep, committed relationships and make incredible sacrifices for love. Be careful not to become controlling or lose yourself in caretaking. Best matches include Life Path 2 (mutual devotion), 3 (joyful balance), and 9 (shared ideals).',
      hi: 'मूलांक 6 अंकशास्त्र में सबसे रोमांटिक और समर्पित साथी है। आप गहरे, प्रतिबद्ध रिश्तों की तलाश करते हैं और प्यार के लिए अविश्वसनीय त्याग करते हैं। सावधान रहें कि नियंत्रित न बनें या देखभाल में खुद को न खोएं। सर्वश्रेष्ठ जोड़ियों में मूलांक 2, 3 और 9 शामिल हैं।',
    },
    moneyWork: {
      en: 'Life Path 6 finds fulfillment in careers that help and heal—healthcare, teaching, counseling, social work, or hospitality. Your eye for beauty can lead to success in interior design, fashion, or culinary arts. Financial stability comes through service-oriented work. You may prioritize family needs over personal wealth accumulation.',
      hi: 'मूलांक 6 मदद और उपचार करने वाले करियर में संतुष्टि पाता है—स्वास्थ्य सेवा, शिक्षण, परामर्श, सामाजिक कार्य या आतिथ्य। सुंदरता के लिए आपकी नजर इंटीरियर डिजाइन, फैशन या पाक कला में सफलता दिला सकती है। सेवा-उन्मुख कार्य से वित्तीय स्थिरता मिलती है।',
    },
  },
  7: {
    number: 7,
    title: {
      en: 'The Seeker',
      hi: 'खोजी',
    },
    overview: {
      en: 'Life Path Number 7 in numerology represents wisdom, spirituality, and analytical thinking. You are the philosopher and truth-seeker of the numerology spectrum—introspective, intuitive, and constantly questioning the nature of reality. The vibration of 7 is deeply spiritual, drawn to understanding life\'s mysteries rather than its surface pleasures. Your life journey is about developing inner wisdom, trusting your powerful intuition, and finding answers to the questions that others don\'t even think to ask.',
      hi: 'अंकशास्त्र में मूलांक 7 ज्ञान, आध्यात्मिकता और विश्लेषणात्मक सोच का प्रतीक है। आप अंकशास्त्र स्पेक्ट्रम के दार्शनिक और सत्य-खोजी हैं—आत्मनिरीक्षक, सहज और लगातार वास्तविकता की प्रकृति पर सवाल उठाने वाले। 7 की ऊर्जा गहराई से आध्यात्मिक है, जीवन के सतही सुखों के बजाय इसके रहस्यों को समझने की ओर आकर्षित। आपकी जीवन यात्रा आंतरिक ज्ञान विकसित करने, अपने शक्तिशाली अंतर्ज्ञान पर भरोसा करने और उन सवालों के जवाब खोजने के बारे में है जिनके बारे में दूसरे सोचते भी नहीं हैं।',
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
    lifePhases: {
      youth: {
        en: 'Early years (0-28): Often feeling different from peers, drawn to books, nature, or spiritual exploration. Developing your analytical mind and inner world.',
        hi: 'प्रारंभिक वर्ष (0-28): अक्सर साथियों से अलग महसूस करते हैं, किताबों, प्रकृति या आध्यात्मिक अन्वेषण की ओर आकर्षित। अपने विश्लेषणात्मक मन और आंतरिक दुनिया को विकसित करना।',
      },
      adult: {
        en: 'Prime years (29-56): Deep research, study, or spiritual practice defines this period. Success comes through expertise, specialization, and sharing your unique insights with others.',
        hi: 'प्रमुख वर्ष (29-56): गहन शोध, अध्ययन या आध्यात्मिक अभ्यास इस अवधि को परिभाषित करता है। विशेषज्ञता, विशेषीकरण और दूसरों के साथ अपनी अद्वितीय अंतर्दृष्टि साझा करने से सफलता मिलती है।',
      },
      mature: {
        en: 'Wisdom years (57+): You become the sage, valued for your deep wisdom and spiritual understanding. This is when your lifelong quest for truth reaches its culmination.',
        hi: 'ज्ञान वर्ष (57+): आप ऋषि बन जाते हैं, अपने गहन ज्ञान और आध्यात्मिक समझ के लिए सम्मानित। यह वह समय है जब सत्य की आपकी आजीवन खोज अपनी पराकाष्ठा पर पहुंचती है।',
      },
    },
    loveRelationships: {
      en: 'Life Path 7 needs a partner who respects their need for solitude and intellectual depth. Surface-level relationships won\'t satisfy you. You connect through minds before hearts. Best matches include Life Path 1 (respects independence), 5 (intellectually stimulating), and 9 (spiritual connection).',
      hi: 'मूलांक 7 को ऐसे साथी की जरूरत है जो उनकी एकांत और बौद्धिक गहराई की जरूरत का सम्मान करे। सतही रिश्ते आपको संतुष्ट नहीं करेंगे। आप दिलों से पहले दिमागों से जुड़ते हैं। सर्वश्रेष्ठ जोड़ियों में मूलांक 1, 5 और 9 शामिल हैं।',
    },
    moneyWork: {
      en: 'Life Path 7 excels in careers requiring deep thinking—research, science, technology, psychology, or spiritual teaching. You\'re not motivated by material wealth but by knowledge and understanding. Financial success comes through becoming an expert in your field. Avoid shallow, social-heavy careers that drain your energy.',
      hi: 'मूलांक 7 गहन सोच की आवश्यकता वाले करियर में उत्कृष्ट है—अनुसंधान, विज्ञान, प्रौद्योगिकी, मनोविज्ञान या आध्यात्मिक शिक्षण। आप भौतिक धन से नहीं बल्कि ज्ञान और समझ से प्रेरित हैं। अपने क्षेत्र में विशेषज्ञ बनने से वित्तीय सफलता मिलती है। उथले, सामाजिक-भारी करियर से बचें जो आपकी ऊर्जा को खत्म करते हैं।',
    },
  },
  8: {
    number: 8,
    title: {
      en: 'The Achiever',
      hi: 'उपलब्धि प्राप्तकर्ता',
    },
    overview: {
      en: 'Life Path Number 8 in numerology represents power, abundance, and material success. You are the executive and business magnate of the numerology spectrum—ambitious, authoritative, and naturally drawn to positions of power. The vibration of 8 is that of karma and abundance, representing both the material rewards that come from hard work and the responsibility that accompanies power. Your life journey is about learning to balance the material and spiritual, achieving worldly success while maintaining ethical integrity.',
      hi: 'अंकशास्त्र में मूलांक 8 शक्ति, प्रचुरता और भौतिक सफलता का प्रतीक है। आप अंकशास्त्र स्पेक्ट्रम के कार्यकारी और व्यापार मैग्नेट हैं—महत्वाकांक्षी, आधिकारिक और स्वाभाविक रूप से शक्ति के पदों की ओर आकर्षित। 8 की ऊर्जा कर्म और प्रचुरता की है, जो कड़ी मेहनत से मिलने वाले भौतिक पुरस्कारों और शक्ति के साथ आने वाली जिम्मेदारी दोनों का प्रतिनिधित्व करती है। आपकी जीवन यात्रा भौतिक और आध्यात्मिक को संतुलित करना, नैतिक अखंडता बनाए रखते हुए सांसारिक सफलता प्राप्त करना सीखने के बारे में है।',
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
    lifePhases: {
      youth: {
        en: 'Early years (0-28): Learning about money, power, and authority—often through early challenges. Developing ambition and understanding the relationship between effort and reward.',
        hi: 'प्रारंभिक वर्ष (0-28): पैसे, शक्ति और अधिकार के बारे में सीखना—अक्सर शुरुआती चुनौतियों के माध्यम से। महत्वाकांक्षा विकसित करना और प्रयास और पुरस्कार के बीच संबंध को समझना।',
      },
      adult: {
        en: 'Prime years (29-56): Peak earning and achievement period. Success in business, finance, or leadership roles. Building wealth and establishing your legacy through professional accomplishments.',
        hi: 'प्रमुख वर्ष (29-56): चरम कमाई और उपलब्धि की अवधि। व्यापार, वित्त या नेतृत्व भूमिकाओं में सफलता। धन का निर्माण और पेशेवर उपलब्धियों के माध्यम से अपनी विरासत स्थापित करना।',
      },
      mature: {
        en: 'Wisdom years (57+): Focus shifts from accumulation to philanthropy and legacy. Using your resources and influence to benefit others and leave a lasting positive impact.',
        hi: 'ज्ञान वर्ष (57+): ध्यान संचय से परोपकार और विरासत की ओर स्थानांतरित होता है। दूसरों को लाभ पहुंचाने और स्थायी सकारात्मक प्रभाव छोड़ने के लिए अपने संसाधनों और प्रभाव का उपयोग करना।',
      },
    },
    loveRelationships: {
      en: 'Life Path 8 needs a partner who understands your ambition and drive. You respect strength and may struggle with partners who seem weak or unmotivated. Balance work and love carefully. Best matches include Life Path 2 (supportive balance), 4 (shared work ethic), and 6 (family harmony).',
      hi: 'मूलांक 8 को ऐसे साथी की जरूरत है जो आपकी महत्वाकांक्षा और प्रेरणा को समझे। आप ताकत का सम्मान करते हैं और कमजोर या प्रेरणाहीन दिखने वाले साथियों के साथ संघर्ष कर सकते हैं। काम और प्यार को सावधानी से संतुलित करें। सर्वश्रेष्ठ जोड़ियों में मूलांक 2, 4 और 6 शामिल हैं।',
    },
    moneyWork: {
      en: 'Life Path 8 is the most financially oriented number. You excel in business, finance, real estate, law, and any field requiring executive ability. Money flows to you when you take charge. Wealth comes through ambition, strategic thinking, and calculated risk-taking. Remember: with great power comes great responsibility.',
      hi: 'मूलांक 8 सबसे अधिक वित्त-उन्मुख संख्या है। आप व्यापार, वित्त, रियल एस्टेट, कानून और कार्यकारी क्षमता की आवश्यकता वाले किसी भी क्षेत्र में उत्कृष्ट हैं। जब आप नियंत्रण लेते हैं तब पैसा आपकी ओर बहता है। महत्वाकांक्षा, रणनीतिक सोच और गणनात्मक जोखिम लेने से धन आता है।',
    },
  },
  9: {
    number: 9,
    title: {
      en: 'The Humanitarian',
      hi: 'मानवतावादी',
    },
    overview: {
      en: 'Life Path Number 9 in numerology embodies compassion, wisdom, and universal love. You are the old soul and humanitarian of the numerology spectrum—idealistic, generous, and deeply concerned with the welfare of humanity as a whole. The vibration of 9 represents completion and wisdom, carrying lessons from all the numbers that precede it. Your life journey is about transcending personal interests for the greater good, serving others selflessly, and leaving the world better than you found it.',
      hi: 'अंकशास्त्र में मूलांक 9 करुणा, ज्ञान और सार्वभौमिक प्रेम का प्रतीक है। आप अंकशास्त्र स्पेक्ट्रम की पुरानी आत्मा और मानवतावादी हैं—आदर्शवादी, उदार और समग्र रूप से मानवता के कल्याण से गहराई से संबंधित। 9 की ऊर्जा पूर्णता और ज्ञान का प्रतिनिधित्व करती है, इससे पहले की सभी संख्याओं के पाठ वहन करती है। आपकी जीवन यात्रा बड़े भले के लिए व्यक्तिगत हितों को पार करना, निस्वार्थ रूप से दूसरों की सेवा करना और दुनिया को बेहतर छोड़ना है।',
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
    lifePhases: {
      youth: {
        en: 'Early years (0-28): Developing your compassionate worldview. Often feeling called to help others even at a young age, though you may struggle with setting personal boundaries.',
        hi: 'प्रारंभिक वर्ष (0-28): अपने दयालु विश्वदृष्टि का विकास। कम उम्र में भी अक्सर दूसरों की मदद करने के लिए बुलाहट महसूस करते हैं, हालांकि आप व्यक्तिगत सीमाएं निर्धारित करने में संघर्ष कर सकते हैं।',
      },
      adult: {
        en: 'Prime years (29-56): Active involvement in humanitarian causes or healing professions. Success comes through work that serves the greater good rather than personal gain.',
        hi: 'प्रमुख वर्ष (29-56): मानवतावादी कार्यों या उपचार पेशों में सक्रिय भागीदारी। व्यक्तिगत लाभ के बजाय बड़े भले की सेवा करने वाले काम से सफलता मिलती है।',
      },
      mature: {
        en: 'Wisdom years (57+): You become a beloved elder, sharing the wisdom gained from a life of service. Your legacy is the lives you\'ve touched and the positive change you\'ve created.',
        hi: 'ज्ञान वर्ष (57+): आप प्रिय बुजुर्ग बन जाते हैं, सेवा के जीवन से प्राप्त ज्ञान साझा करते हैं। आपकी विरासत वे जीवन हैं जिन्हें आपने छुआ और जो सकारात्मक बदलाव आपने किया।',
      },
    },
    loveRelationships: {
      en: 'Life Path 9 loves unconditionally and attracts partners from all walks of life. You may struggle with possessive partners as you need freedom to pursue your humanitarian missions. Learn to balance personal love with universal love. Best matches include Life Path 3 (creative joy), 6 (shared nurturing), and 7 (spiritual depth).',
      hi: 'मूलांक 9 बिना शर्त प्यार करता है और जीवन के सभी क्षेत्रों से साथियों को आकर्षित करता है। आप अधिकार-भावी साथियों के साथ संघर्ष कर सकते हैं क्योंकि आपको अपने मानवतावादी मिशनों को आगे बढ़ाने की स्वतंत्रता चाहिए। व्यक्तिगत प्रेम को सार्वभौमिक प्रेम के साथ संतुलित करना सीखें। सर्वश्रेष्ठ जोड़ियों में मूलांक 3, 6 और 7 शामिल हैं।',
    },
    moneyWork: {
      en: 'Life Path 9 finds fulfillment in careers with social impact—healthcare, nonprofits, education, arts, or environmental work. Money often comes as a byproduct of meaningful work rather than being the goal. You may give away as much as you earn. Financial success increases when you align work with your humanitarian values.',
      hi: 'मूलांक 9 सामाजिक प्रभाव वाले करियर में संतुष्टि पाता है—स्वास्थ्य सेवा, गैर-लाभकारी, शिक्षा, कला या पर्यावरण कार्य। पैसा अक्सर लक्ष्य होने के बजाय सार्थक काम के उपोत्पाद के रूप में आता है। आप जितना कमाते हैं उतना ही दे सकते हैं। जब आप काम को अपने मानवतावादी मूल्यों के साथ संरेखित करते हैं तब वित्तीय सफलता बढ़ती है।',
    },
  },
  11: {
    number: 11,
    title: {
      en: 'The Illuminator',
      hi: 'प्रकाशक',
    },
    overview: {
      en: 'Master Number 11 in numerology represents spiritual insight, intuition, and enlightenment. As a master number, 11 carries higher spiritual vibrations than single-digit life paths. You are the intuitive visionary—highly sensitive, psychically gifted, and meant to illuminate the path for others. The challenge of this number is learning to ground your spiritual insights into practical reality. Your life journey is about developing your psychic gifts, inspiring others through your spiritual awareness, and becoming a channel for higher wisdom.',
      hi: 'अंकशास्त्र में मास्टर नंबर 11 आध्यात्मिक अंतर्दृष्टि, अंतर्ज्ञान और प्रबोधन का प्रतीक है। मास्टर नंबर के रूप में, 11 एकल-अंकीय मूलांकों की तुलना में उच्च आध्यात्मिक कंपन वहन करता है। आप सहज दूरदर्शी हैं—अत्यधिक संवेदनशील, मानसिक रूप से प्रतिभाशाली और दूसरों के लिए मार्ग प्रकाशित करने के लिए बने। इस संख्या की चुनौती अपनी आध्यात्मिक अंतर्दृष्टि को व्यावहारिक वास्तविकता में आधारित करना सीखना है। आपकी जीवन यात्रा अपनी मानसिक क्षमताओं को विकसित करना, अपनी आध्यात्मिक जागरूकता के माध्यम से दूसरों को प्रेरित करना और उच्च ज्ञान के लिए एक माध्यम बनना है।',
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
    lifePhases: {
      youth: {
        en: 'Early years (0-28): Often feeling different, experiencing strong intuitions or psychic experiences. Learning to trust your inner voice while managing anxiety and sensitivity.',
        hi: 'प्रारंभिक वर्ष (0-28): अक्सर अलग महसूस करना, मजबूत अंतर्ज्ञान या मानसिक अनुभव। चिंता और संवेदनशीलता का प्रबंधन करते हुए अपनी आंतरिक आवाज पर भरोसा करना सीखें।',
      },
      adult: {
        en: 'Prime years (29-56): Your spiritual gifts mature and you find ways to share your insights with the world. Success comes through inspirational work, art, or spiritual teaching.',
        hi: 'प्रमुख वर्ष (29-56): आपकी आध्यात्मिक प्रतिभाएं परिपक्व होती हैं और आप दुनिया के साथ अपनी अंतर्दृष्टि साझा करने के तरीके खोजते हैं। प्रेरणादायक कार्य, कला या आध्यात्मिक शिक्षण के माध्यम से सफलता मिलती है।',
      },
      mature: {
        en: 'Wisdom years (57+): You become a spiritual guide, your intuitive abilities fully developed. This is when you truly step into your role as an illuminator for others.',
        hi: 'ज्ञान वर्ष (57+): आप एक आध्यात्मिक मार्गदर्शक बन जाते हैं, आपकी सहज क्षमताएं पूरी तरह से विकसित। यह वह समय है जब आप वास्तव में दूसरों के लिए प्रकाशक के रूप में अपनी भूमिका में कदम रखते हैं।',
      },
    },
    loveRelationships: {
      en: 'Master Number 11 seeks deep, soulful connections. Casual relationships don\'t satisfy you—you need a spiritual partner who understands your sensitivity and intuition. Your ideal partner grounds you while respecting your visionary nature. Best matches include Life Path 2 (intuitive harmony), 6 (nurturing support), and other master numbers.',
      hi: 'मास्टर नंबर 11 गहरे, आत्मिक संबंध चाहता है। आकस्मिक रिश्ते आपको संतुष्ट नहीं करते—आपको एक आध्यात्मिक साथी की जरूरत है जो आपकी संवेदनशीलता और अंतर्ज्ञान को समझे। आपका आदर्श साथी आपकी दूरदर्शी प्रकृति का सम्मान करते हुए आपको आधार देता है। सर्वश्रेष्ठ जोड़ियों में मूलांक 2, 6 और अन्य मास्टर नंबर शामिल हैं।',
    },
    moneyWork: {
      en: 'Master Number 11 thrives in careers involving inspiration, spirituality, or creativity—counseling, healing arts, music, writing, or motivational speaking. Traditional corporate environments may feel stifling. Financial success comes when you align work with your spiritual mission. Trust your intuition in business decisions.',
      hi: 'मास्टर नंबर 11 प्रेरणा, आध्यात्मिकता या रचनात्मकता से जुड़े करियर में फलता-फूलता है—परामर्श, उपचार कला, संगीत, लेखन या प्रेरणादायक वक्तृत्व। पारंपरिक कॉर्पोरेट वातावरण दमघोंटू महसूस हो सकता है। जब आप काम को अपने आध्यात्मिक मिशन के साथ संरेखित करते हैं तब वित्तीय सफलता मिलती है।',
    },
  },
  22: {
    number: 22,
    title: {
      en: 'The Master Builder',
      hi: 'मास्टर बिल्डर',
    },
    overview: {
      en: 'Master Number 22 in numerology represents the ability to turn ambitious dreams into reality on a grand scale. Known as the "Master Builder," you possess the rare combination of visionary ideals and practical ability to manifest them. This is considered the most powerful number in numerology, carrying the spiritual insight of 11 combined with the practical power of 4. Your life journey is about building lasting legacies that benefit humanity—structures, systems, or organizations that endure long after you\'re gone.',
      hi: 'अंकशास्त्र में मास्टर नंबर 22 बड़े पैमाने पर महत्वाकांक्षी सपनों को हकीकत में बदलने की क्षमता का प्रतीक है। "मास्टर बिल्डर" के रूप में जाना जाने वाला, आपमें दूरदर्शी आदर्शों और उन्हें प्रकट करने की व्यावहारिक क्षमता का दुर्लभ संयोजन है। इसे अंकशास्त्र में सबसे शक्तिशाली संख्या माना जाता है, जो 11 की आध्यात्मिक अंतर्दृष्टि को 4 की व्यावहारिक शक्ति के साथ जोड़ती है। आपकी जीवन यात्रा मानवता को लाभ पहुंचाने वाली स्थायी विरासतों का निर्माण करना है—संरचनाएं, प्रणालियां या संगठन जो आपके जाने के बाद भी लंबे समय तक बने रहें।',
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
    lifePhases: {
      youth: {
        en: 'Early years (0-28): Developing both your visionary abilities and practical skills. May feel the weight of great potential without knowing how to channel it yet.',
        hi: 'प्रारंभिक वर्ष (0-28): अपनी दूरदर्शी क्षमताओं और व्यावहारिक कौशल दोनों का विकास। अभी इसे कैसे संचालित करें यह जाने बिना महान क्षमता का भार महसूस कर सकते हैं।',
      },
      adult: {
        en: 'Prime years (29-56): This is when you build your legacy. Major accomplishments, large-scale projects, and significant contributions to society define this period.',
        hi: 'प्रमुख वर्ष (29-56): यह वह समय है जब आप अपनी विरासत बनाते हैं। प्रमुख उपलब्धियां, बड़े पैमाने की परियोजनाएं और समाज में महत्वपूर्ण योगदान इस अवधि को परिभाषित करते हैं।',
      },
      mature: {
        en: 'Wisdom years (57+): You see the fruits of your life\'s work. Your legacy continues through the structures, organizations, or systems you\'ve built.',
        hi: 'ज्ञान वर्ष (57+): आप अपने जीवन के काम के फल देखते हैं। आपकी विरासत उन संरचनाओं, संगठनों या प्रणालियों के माध्यम से जारी रहती है जो आपने बनाई हैं।',
      },
    },
    loveRelationships: {
      en: 'Master Number 22 needs a partner who understands your drive and supports your grand ambitions. You may struggle to balance work and relationships. Choose someone who shares your vision or has their own equally important mission. Best matches include Life Path 4 (practical support), 6 (family balance), and 8 (shared ambition).',
      hi: 'मास्टर नंबर 22 को ऐसे साथी की जरूरत है जो आपकी प्रेरणा को समझे और आपकी महान महत्वाकांक्षाओं का समर्थन करे। आप काम और रिश्तों को संतुलित करने में संघर्ष कर सकते हैं। ऐसे व्यक्ति को चुनें जो आपके दृष्टिकोण को साझा करे या उसका अपना समान रूप से महत्वपूर्ण मिशन हो। सर्वश्रेष्ठ जोड़ियों में मूलांक 4, 6 और 8 शामिल हैं।',
    },
    moneyWork: {
      en: 'Master Number 22 is destined for large-scale achievement—architecture, engineering, international business, politics, or philanthropy. You think big and can manifest big. Financial success comes through ambitious projects that serve the greater good. You may experience financial extremes before finding your stride.',
      hi: 'मास्टर नंबर 22 बड़े पैमाने की उपलब्धि के लिए नियत है—वास्तुकला, इंजीनियरिंग, अंतर्राष्ट्रीय व्यापार, राजनीति या परोपकार। आप बड़ा सोचते हैं और बड़ा प्रकट कर सकते हैं। बड़े भले की सेवा करने वाली महत्वाकांक्षी परियोजनाओं के माध्यम से वित्तीय सफलता मिलती है। अपनी लय खोजने से पहले आप वित्तीय चरम का अनुभव कर सकते हैं।',
    },
  },
  33: {
    number: 33,
    title: {
      en: 'The Master Teacher',
      hi: 'मास्टर शिक्षक',
    },
    overview: {
      en: 'Master Number 33 in numerology represents the highest form of spiritual teacher and healer. The rarest of the master numbers, 33 combines the intuition of 11 with the practical mastery of 22, then elevates it to a level of pure spiritual service. You have the profound ability to heal through your very presence and uplift humanity through unconditional love. Your life journey is about transcending personal ego entirely, becoming a vessel for divine love and guidance, and teaching others through your example of selfless service.',
      hi: 'अंकशास्त्र में मास्टर नंबर 33 आध्यात्मिक शिक्षक और उपचारक के उच्चतम रूप का प्रतीक है। मास्टर नंबरों में सबसे दुर्लभ, 33 11 के अंतर्ज्ञान को 22 की व्यावहारिक महारत के साथ जोड़ता है, फिर इसे शुद्ध आध्यात्मिक सेवा के स्तर तक ऊंचा करता है। आपमें अपनी उपस्थिति मात्र से उपचार करने और बिना शर्त प्रेम के माध्यम से मानवता को उन्नत करने की गहन क्षमता है। आपकी जीवन यात्रा व्यक्तिगत अहंकार को पूरी तरह से पार करना, दिव्य प्रेम और मार्गदर्शन के लिए एक पात्र बनना और निस्वार्थ सेवा के अपने उदाहरण के माध्यम से दूसरों को सिखाना है।',
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
    lifePhases: {
      youth: {
        en: 'Early years (0-28): Often marked by significant challenges that develop deep empathy. Learning to balance your sensitivity with the practical demands of life.',
        hi: 'प्रारंभिक वर्ष (0-28): अक्सर महत्वपूर्ण चुनौतियों से चिह्नित जो गहरी सहानुभूति विकसित करती हैं। जीवन की व्यावहारिक मांगों के साथ अपनी संवेदनशीलता को संतुलित करना सीखना।',
      },
      adult: {
        en: 'Prime years (29-56): Your healing and teaching gifts emerge fully. You begin to impact others\' lives profoundly through your presence, wisdom, and unconditional acceptance.',
        hi: 'प्रमुख वर्ष (29-56): आपकी उपचार और शिक्षण प्रतिभाएं पूरी तरह से उभरती हैं। आप अपनी उपस्थिति, ज्ञान और बिना शर्त स्वीकृति के माध्यम से दूसरों के जीवन को गहराई से प्रभावित करना शुरू करते हैं।',
      },
      mature: {
        en: 'Wisdom years (57+): You embody the archetype of the spiritual master—a living example of love and wisdom. People seek your blessing and guidance.',
        hi: 'ज्ञान वर्ष (57+): आप आध्यात्मिक गुरु के आदर्श को मूर्त रूप देते हैं—प्रेम और ज्ञान का जीवंत उदाहरण। लोग आपका आशीर्वाद और मार्गदर्शन चाहते हैं।',
      },
    },
    loveRelationships: {
      en: 'Master Number 33 loves unconditionally and may attract partners who need healing. Be careful not to lose yourself in caretaking. You need a partner who nurtures you in return and understands your spiritual mission. Best matches include Life Path 6 (mutual nurturing), 9 (shared humanitarianism), and 11 (spiritual connection).',
      hi: 'मास्टर नंबर 33 बिना शर्त प्यार करता है और उपचार की जरूरत वाले साथियों को आकर्षित कर सकता है। सावधान रहें कि देखभाल में खुद को न खोएं। आपको ऐसे साथी की जरूरत है जो बदले में आपका पालन-पोषण करे और आपके आध्यात्मिक मिशन को समझे। सर्वश्रेष्ठ जोड़ियों में मूलांक 6, 9 और 11 शामिल हैं।',
    },
    moneyWork: {
      en: 'Master Number 33 finds meaning in work that heals and teaches—therapy, spiritual leadership, healthcare, humanitarian work, or the arts. Money is not your primary motivation; service is. Financial needs tend to be met when you focus on your spiritual mission rather than material gain.',
      hi: 'मास्टर नंबर 33 उपचार और शिक्षण वाले काम में अर्थ पाता है—थेरेपी, आध्यात्मिक नेतृत्व, स्वास्थ्य सेवा, मानवतावादी कार्य या कला। पैसा आपकी प्राथमिक प्रेरणा नहीं है; सेवा है। जब आप भौतिक लाभ के बजाय अपने आध्यात्मिक मिशन पर ध्यान केंद्रित करते हैं तब वित्तीय जरूरतें पूरी होती हैं।',
    },
  },
};

/**
 * Gets the meaning for a Life Path Number
 */
export function getLifePathMeaning(number: number): LifePathMeaning | null {
  return LIFE_PATH_MEANINGS[number] || null;
}
