/**
 * Moon Sign (Chandra Rashi) Meanings and Interpretations
 * Based on Vedic Astrology principles
 */

export interface MoonSignMeaning {
  signIndex: number;
  element: 'fire' | 'earth' | 'air' | 'water';
  rulingPlanet: string;
  symbol: string;
  overview: { en: string; hi: string };
  personality: { en: string; hi: string };
  positiveTraits: Array<{ en: string; hi: string }>;
  negativeTraits: Array<{ en: string; hi: string }>;
  emotionalNature: { en: string; hi: string };
  relationships: { en: string; hi: string };
  careerStrengths: Array<{ en: string; hi: string }>;
  compatibleSigns: number[];
  luckyColor: { en: string; hi: string };
  luckyNumber: number;
  luckyDay: { en: string; hi: string };
  rulingDeity: { en: string; hi: string };
  mantra: { en: string; hi: string };
}

export const MOON_SIGN_MEANINGS: MoonSignMeaning[] = [
  // 0: Aries (Mesha)
  {
    signIndex: 0,
    element: 'fire',
    rulingPlanet: 'Mars',
    symbol: '♈',
    overview: {
      en: 'Aries Moon individuals are passionate, energetic, and impulsive. They experience emotions intensely but briefly, quickly moving on to new feelings and experiences. Their emotional nature is pioneering and courageous.',
      hi: 'मेष राशि के चंद्रमा वाले व्यक्ति भावुक, ऊर्जावान और आवेगी होते हैं। वे भावनाओं को तीव्रता से अनुभव करते हैं लेकिन संक्षेप में, जल्दी से नई भावनाओं और अनुभवों की ओर बढ़ जाते हैं।',
    },
    personality: {
      en: 'Direct and honest in emotional expression, you dislike beating around the bush. You are a natural leader who takes initiative in emotional matters and relationships.',
      hi: 'भावनात्मक अभिव्यक्ति में सीधे और ईमानदार, आप घुमा-फिराकर बात करना पसंद नहीं करते। आप एक स्वाभाविक नेता हैं जो भावनात्मक मामलों में पहल करते हैं।',
    },
    positiveTraits: [
      { en: 'Courageous', hi: 'साहसी' },
      { en: 'Enthusiastic', hi: 'उत्साही' },
      { en: 'Independent', hi: 'स्वतंत्र' },
      { en: 'Optimistic', hi: 'आशावादी' },
      { en: 'Spontaneous', hi: 'स्वतःस्फूर्त' },
    ],
    negativeTraits: [
      { en: 'Impatient', hi: 'अधीर' },
      { en: 'Short-tempered', hi: 'जल्दी गुस्सा होने वाला' },
      { en: 'Impulsive', hi: 'आवेगी' },
      { en: 'Self-centered', hi: 'आत्मकेंद्रित' },
    ],
    emotionalNature: {
      en: 'Your emotions are quick to rise and equally quick to dissipate. You need excitement and challenge to feel emotionally fulfilled. Boredom is your emotional enemy.',
      hi: 'आपकी भावनाएं जल्दी उठती हैं और उतनी ही जल्दी शांत हो जाती हैं। भावनात्मक रूप से संतुष्ट महसूस करने के लिए आपको उत्साह और चुनौती की आवश्यकता है।',
    },
    relationships: {
      en: 'In relationships, you are passionate and protective. You prefer partners who can match your energy and give you space for independence.',
      hi: 'रिश्तों में, आप भावुक और सुरक्षात्मक हैं। आप ऐसे साथी पसंद करते हैं जो आपकी ऊर्जा से मेल खा सकें।',
    },
    careerStrengths: [
      { en: 'Entrepreneurship', hi: 'उद्यमिता' },
      { en: 'Sports', hi: 'खेल' },
      { en: 'Military/Police', hi: 'सेना/पुलिस' },
      { en: 'Surgery', hi: 'सर्जरी' },
      { en: 'Leadership roles', hi: 'नेतृत्व भूमिकाएं' },
    ],
    compatibleSigns: [4, 8, 0], // Leo, Sagittarius, Aries
    luckyColor: { en: 'Red', hi: 'लाल' },
    luckyNumber: 9,
    luckyDay: { en: 'Tuesday', hi: 'मंगलवार' },
    rulingDeity: { en: 'Lord Kartikeya', hi: 'भगवान कार्तिकेय' },
    mantra: { en: 'Om Kram Kreem Kroum Sah Bhaumaya Namah', hi: 'ॐ क्रां क्रीं क्रौं सः भौमाय नमः' },
  },

  // 1: Taurus (Vrishabha)
  {
    signIndex: 1,
    element: 'earth',
    rulingPlanet: 'Venus',
    symbol: '♉',
    overview: {
      en: 'Taurus Moon individuals are stable, patient, and sensual. They find emotional security in material comforts and established routines. Their emotional nature is steady and reliable.',
      hi: 'वृषभ राशि के चंद्रमा वाले व्यक्ति स्थिर, धैर्यवान और संवेदनशील होते हैं। वे भौतिक आराम और स्थापित दिनचर्या में भावनात्मक सुरक्षा पाते हैं।',
    },
    personality: {
      en: 'You are grounded and practical in your emotional responses. Change makes you uncomfortable, and you prefer predictable, stable environments.',
      hi: 'आप अपनी भावनात्मक प्रतिक्रियाओं में व्यावहारिक हैं। परिवर्तन आपको असहज करता है, और आप पूर्वानुमेय, स्थिर वातावरण पसंद करते हैं।',
    },
    positiveTraits: [
      { en: 'Patient', hi: 'धैर्यवान' },
      { en: 'Reliable', hi: 'विश्वसनीय' },
      { en: 'Loyal', hi: 'वफादार' },
      { en: 'Sensual', hi: 'इंद्रियसुखी' },
      { en: 'Practical', hi: 'व्यावहारिक' },
    ],
    negativeTraits: [
      { en: 'Stubborn', hi: 'जिद्दी' },
      { en: 'Possessive', hi: 'अधिकारी' },
      { en: 'Resistant to change', hi: 'परिवर्तन विरोधी' },
      { en: 'Materialistic', hi: 'भौतिकवादी' },
    ],
    emotionalNature: {
      en: 'Your emotions are slow to change but run deep. Once you form emotional attachments, they are lasting. You need physical comfort and security to feel emotionally balanced.',
      hi: 'आपकी भावनाएं धीरे-धीरे बदलती हैं लेकिन गहरी होती हैं। एक बार जब आप भावनात्मक जुड़ाव बना लेते हैं, वे स्थायी होते हैं।',
    },
    relationships: {
      en: 'In relationships, you are devoted and affectionate. You seek long-term stability and express love through physical touch and material care.',
      hi: 'रिश्तों में, आप समर्पित और स्नेही हैं। आप दीर्घकालिक स्थिरता चाहते हैं और भौतिक स्पर्श के माध्यम से प्यार व्यक्त करते हैं।',
    },
    careerStrengths: [
      { en: 'Finance', hi: 'वित्त' },
      { en: 'Art & Music', hi: 'कला और संगीत' },
      { en: 'Culinary arts', hi: 'पाक कला' },
      { en: 'Real estate', hi: 'रियल एस्टेट' },
      { en: 'Agriculture', hi: 'कृषि' },
    ],
    compatibleSigns: [1, 2, 5, 9], // Taurus, Gemini, Virgo, Capricorn
    luckyColor: { en: 'White & Pink', hi: 'सफेद और गुलाबी' },
    luckyNumber: 6,
    luckyDay: { en: 'Friday', hi: 'शुक्रवार' },
    rulingDeity: { en: 'Goddess Lakshmi', hi: 'देवी लक्ष्मी' },
    mantra: { en: 'Om Shum Shukraya Namah', hi: 'ॐ शुं शुक्राय नमः' },
  },

  // 2: Gemini (Mithuna)
  {
    signIndex: 2,
    element: 'air',
    rulingPlanet: 'Mercury',
    symbol: '♊',
    overview: {
      en: 'Gemini Moon individuals are curious, communicative, and intellectually driven. They process emotions through analysis and discussion. Their emotional nature is versatile and adaptable.',
      hi: 'मिथुन राशि के चंद्रमा वाले व्यक्ति जिज्ञासु, संवादी और बौद्धिक रूप से प्रेरित होते हैं। वे विश्लेषण और चर्चा के माध्यम से भावनाओं को संसाधित करते हैं।',
    },
    personality: {
      en: 'You need mental stimulation to feel emotionally alive. Conversations, learning, and variety are essential for your emotional well-being.',
      hi: 'भावनात्मक रूप से जीवंत महसूस करने के लिए आपको मानसिक उत्तेजना की आवश्यकता है। बातचीत, सीखना और विविधता आपकी भावनात्मक भलाई के लिए आवश्यक हैं।',
    },
    positiveTraits: [
      { en: 'Witty', hi: 'हाजिरजवाब' },
      { en: 'Adaptable', hi: 'अनुकूलनशील' },
      { en: 'Curious', hi: 'जिज्ञासु' },
      { en: 'Communicative', hi: 'संवादशील' },
      { en: 'Versatile', hi: 'बहुमुखी' },
    ],
    negativeTraits: [
      { en: 'Restless', hi: 'बेचैन' },
      { en: 'Superficial', hi: 'सतही' },
      { en: 'Inconsistent', hi: 'असंगत' },
      { en: 'Nervous', hi: 'घबराने वाला' },
    ],
    emotionalNature: {
      en: 'Your emotions fluctuate rapidly and you may have difficulty sitting with heavy feelings. You prefer to rationalize emotions rather than simply feeling them.',
      hi: 'आपकी भावनाएं तेजी से उतार-चढ़ाव करती हैं और आपको भारी भावनाओं के साथ बैठने में कठिनाई हो सकती है।',
    },
    relationships: {
      en: 'In relationships, you need intellectual connection alongside emotional bonds. You are attracted to partners who can engage your mind.',
      hi: 'रिश्तों में, आपको भावनात्मक बंधन के साथ-साथ बौद्धिक संबंध की आवश्यकता है। आप उन साथियों की ओर आकर्षित होते हैं जो आपके मन को व्यस्त रख सकें।',
    },
    careerStrengths: [
      { en: 'Writing', hi: 'लेखन' },
      { en: 'Teaching', hi: 'शिक्षण' },
      { en: 'Journalism', hi: 'पत्रकारिता' },
      { en: 'Sales', hi: 'बिक्री' },
      { en: 'Media', hi: 'मीडिया' },
    ],
    compatibleSigns: [6, 10, 2], // Libra, Aquarius, Gemini
    luckyColor: { en: 'Green', hi: 'हरा' },
    luckyNumber: 5,
    luckyDay: { en: 'Wednesday', hi: 'बुधवार' },
    rulingDeity: { en: 'Lord Vishnu', hi: 'भगवान विष्णु' },
    mantra: { en: 'Om Bum Budhaya Namah', hi: 'ॐ बुं बुधाय नमः' },
  },

  // 3: Cancer (Karka)
  {
    signIndex: 3,
    element: 'water',
    rulingPlanet: 'Moon',
    symbol: '♋',
    overview: {
      en: 'Cancer Moon is the Moon in its own sign, making emotional sensitivity extremely heightened. These individuals are nurturing, protective, and deeply connected to family and home.',
      hi: 'कर्क राशि में चंद्रमा अपनी ही राशि में है, जिससे भावनात्मक संवेदनशीलता अत्यधिक बढ़ जाती है। ये व्यक्ति पोषण करने वाले, सुरक्षात्मक और परिवार से गहराई से जुड़े होते हैं।',
    },
    personality: {
      en: 'You are highly intuitive and empathetic, often absorbing the emotions of those around you. Home and family are central to your emotional security.',
      hi: 'आप अत्यधिक सहज और सहानुभूतिपूर्ण हैं, अक्सर अपने आसपास के लोगों की भावनाओं को अवशोषित करते हैं। घर और परिवार आपकी भावनात्मक सुरक्षा के केंद्र हैं।',
    },
    positiveTraits: [
      { en: 'Nurturing', hi: 'पोषण करने वाला' },
      { en: 'Intuitive', hi: 'सहज ज्ञानी' },
      { en: 'Protective', hi: 'सुरक्षात्मक' },
      { en: 'Empathetic', hi: 'सहानुभूतिशील' },
      { en: 'Loyal', hi: 'वफादार' },
    ],
    negativeTraits: [
      { en: 'Moody', hi: 'मूडी' },
      { en: 'Clingy', hi: 'चिपकू' },
      { en: 'Oversensitive', hi: 'अतिसंवेदनशील' },
      { en: 'Holds grudges', hi: 'शिकायत रखने वाला' },
    ],
    emotionalNature: {
      en: 'Your emotions are like the tides—constantly shifting with the lunar cycle. You feel deeply and remember emotional experiences vividly.',
      hi: 'आपकी भावनाएं ज्वार की तरह हैं—चंद्र चक्र के साथ लगातार बदलती रहती हैं। आप गहराई से महसूस करते हैं और भावनात्मक अनुभवों को स्पष्ट रूप से याद रखते हैं।',
    },
    relationships: {
      en: 'In relationships, you are devoted and caring. You need emotional security and tend to mother your loved ones.',
      hi: 'रिश्तों में, आप समर्पित और देखभाल करने वाले हैं। आपको भावनात्मक सुरक्षा की आवश्यकता है और आप अपने प्रियजनों की माँ की तरह देखभाल करते हैं।',
    },
    careerStrengths: [
      { en: 'Healthcare', hi: 'स्वास्थ्य सेवा' },
      { en: 'Hospitality', hi: 'आतिथ्य' },
      { en: 'Childcare', hi: 'बाल देखभाल' },
      { en: 'Real estate', hi: 'रियल एस्टेट' },
      { en: 'Psychology', hi: 'मनोविज्ञान' },
    ],
    compatibleSigns: [7, 11, 3], // Scorpio, Pisces, Cancer
    luckyColor: { en: 'White & Silver', hi: 'सफेद और चांदी' },
    luckyNumber: 2,
    luckyDay: { en: 'Monday', hi: 'सोमवार' },
    rulingDeity: { en: 'Goddess Parvati', hi: 'देवी पार्वती' },
    mantra: { en: 'Om Som Somaya Namah', hi: 'ॐ सों सोमाय नमः' },
  },

  // 4: Leo (Simha)
  {
    signIndex: 4,
    element: 'fire',
    rulingPlanet: 'Sun',
    symbol: '♌',
    overview: {
      en: 'Leo Moon individuals are warm, generous, and dramatic in their emotional expression. They need recognition and appreciation to feel emotionally fulfilled.',
      hi: 'सिंह राशि के चंद्रमा वाले व्यक्ति अपनी भावनात्मक अभिव्यक्ति में गर्म, उदार और नाटकीय होते हैं। उन्हें भावनात्मक रूप से संतुष्ट महसूस करने के लिए मान्यता और प्रशंसा की आवश्यकता है।',
    },
    personality: {
      en: 'You have a generous heart and love to express emotions dramatically. You take pride in your feelings and expect loyalty from loved ones.',
      hi: 'आपका दिल उदार है और आप भावनाओं को नाटकीय रूप से व्यक्त करना पसंद करते हैं। आप अपनी भावनाओं पर गर्व करते हैं और प्रियजनों से वफादारी की उम्मीद करते हैं।',
    },
    positiveTraits: [
      { en: 'Generous', hi: 'उदार' },
      { en: 'Warm-hearted', hi: 'गर्मजोशी वाला' },
      { en: 'Creative', hi: 'रचनात्मक' },
      { en: 'Confident', hi: 'आत्मविश्वासी' },
      { en: 'Loyal', hi: 'वफादार' },
    ],
    negativeTraits: [
      { en: 'Dramatic', hi: 'नाटकीय' },
      { en: 'Attention-seeking', hi: 'ध्यान आकर्षित करने वाला' },
      { en: 'Proud', hi: 'घमंडी' },
      { en: 'Dominating', hi: 'प्रभुत्वशाली' },
    ],
    emotionalNature: {
      en: 'Your emotions are grand and you express them with theatrical flair. You need to feel special and appreciated in all your relationships.',
      hi: 'आपकी भावनाएं भव्य हैं और आप उन्हें नाटकीय अंदाज में व्यक्त करते हैं। आपको अपने सभी रिश्तों में विशेष और सराहा महसूस करने की आवश्यकता है।',
    },
    relationships: {
      en: 'In relationships, you are devoted and romantic. You shower loved ones with affection and expect the same level of devotion in return.',
      hi: 'रिश्तों में, आप समर्पित और रोमांटिक हैं। आप प्रियजनों पर स्नेह बरसाते हैं और बदले में समान स्तर की भक्ति की उम्मीद करते हैं।',
    },
    careerStrengths: [
      { en: 'Entertainment', hi: 'मनोरंजन' },
      { en: 'Politics', hi: 'राजनीति' },
      { en: 'Management', hi: 'प्रबंधन' },
      { en: 'Teaching', hi: 'शिक्षण' },
      { en: 'Luxury goods', hi: 'लक्जरी सामान' },
    ],
    compatibleSigns: [0, 8, 4], // Aries, Sagittarius, Leo
    luckyColor: { en: 'Gold & Orange', hi: 'सोना और नारंगी' },
    luckyNumber: 1,
    luckyDay: { en: 'Sunday', hi: 'रविवार' },
    rulingDeity: { en: 'Lord Surya', hi: 'भगवान सूर्य' },
    mantra: { en: 'Om Hreem Suryaya Namah', hi: 'ॐ ह्रीं सूर्याय नमः' },
  },

  // 5: Virgo (Kanya)
  {
    signIndex: 5,
    element: 'earth',
    rulingPlanet: 'Mercury',
    symbol: '♍',
    overview: {
      en: 'Virgo Moon individuals find emotional security through service, analysis, and practical improvement. They process emotions through careful analysis and seek order in their emotional world.',
      hi: 'कन्या राशि के चंद्रमा वाले व्यक्ति सेवा, विश्लेषण और व्यावहारिक सुधार के माध्यम से भावनात्मक सुरक्षा पाते हैं।',
    },
    personality: {
      en: 'You are analytical about emotions and may sometimes overanalyze your feelings. Being of service to others brings you emotional satisfaction.',
      hi: 'आप भावनाओं के बारे में विश्लेषणात्मक हैं और कभी-कभी अपनी भावनाओं का अधिक विश्लेषण कर सकते हैं। दूसरों की सेवा करना आपको भावनात्मक संतुष्टि देता है।',
    },
    positiveTraits: [
      { en: 'Analytical', hi: 'विश्लेषणात्मक' },
      { en: 'Helpful', hi: 'सहायक' },
      { en: 'Modest', hi: 'विनम्र' },
      { en: 'Practical', hi: 'व्यावहारिक' },
      { en: 'Reliable', hi: 'विश्वसनीय' },
    ],
    negativeTraits: [
      { en: 'Critical', hi: 'आलोचनात्मक' },
      { en: 'Worrying', hi: 'चिंतित' },
      { en: 'Perfectionist', hi: 'पूर्णतावादी' },
      { en: 'Self-critical', hi: 'आत्म-आलोचक' },
    ],
    emotionalNature: {
      en: 'Your emotional nature is understated and practical. You show love through acts of service and attention to detail.',
      hi: 'आपका भावनात्मक स्वभाव संयमित और व्यावहारिक है। आप सेवा के कार्यों और विस्तार पर ध्यान देने के माध्यम से प्यार दिखाते हैं।',
    },
    relationships: {
      en: 'In relationships, you are devoted and attentive to your partner\'s needs. You show love through practical help and thoughtful gestures.',
      hi: 'रिश्तों में, आप समर्पित हैं और अपने साथी की जरूरतों पर ध्यान देते हैं। आप व्यावहारिक मदद और विचारशील इशारों के माध्यम से प्यार दिखाते हैं।',
    },
    careerStrengths: [
      { en: 'Healthcare', hi: 'स्वास्थ्य सेवा' },
      { en: 'Accounting', hi: 'लेखांकन' },
      { en: 'Research', hi: 'अनुसंधान' },
      { en: 'Editing', hi: 'संपादन' },
      { en: 'Nutrition', hi: 'पोषण' },
    ],
    compatibleSigns: [1, 9, 5], // Taurus, Capricorn, Virgo
    luckyColor: { en: 'Green & Brown', hi: 'हरा और भूरा' },
    luckyNumber: 5,
    luckyDay: { en: 'Wednesday', hi: 'बुधवार' },
    rulingDeity: { en: 'Lord Vishnu', hi: 'भगवान विष्णु' },
    mantra: { en: 'Om Bum Budhaya Namah', hi: 'ॐ बुं बुधाय नमः' },
  },

  // 6: Libra (Tula)
  {
    signIndex: 6,
    element: 'air',
    rulingPlanet: 'Venus',
    symbol: '♎',
    overview: {
      en: 'Libra Moon individuals need harmony, balance, and partnership to feel emotionally fulfilled. They are natural diplomats who seek peace in all relationships.',
      hi: 'तुला राशि के चंद्रमा वाले व्यक्तियों को भावनात्मक रूप से संतुष्ट महसूस करने के लिए सामंजस्य, संतुलन और साझेदारी की आवश्यकता होती है।',
    },
    personality: {
      en: 'You are charming and socially graceful, with a strong need for partnership. You dislike conflict and may avoid difficult emotional situations.',
      hi: 'आप आकर्षक और सामाजिक रूप से सुशील हैं, साझेदारी की मजबूत आवश्यकता के साथ। आप संघर्ष को नापसंद करते हैं।',
    },
    positiveTraits: [
      { en: 'Diplomatic', hi: 'कूटनीतिक' },
      { en: 'Fair-minded', hi: 'निष्पक्ष' },
      { en: 'Charming', hi: 'आकर्षक' },
      { en: 'Romantic', hi: 'रोमांटिक' },
      { en: 'Cooperative', hi: 'सहयोगी' },
    ],
    negativeTraits: [
      { en: 'Indecisive', hi: 'अनिर्णायक' },
      { en: 'People-pleasing', hi: 'लोगों को खुश करने वाला' },
      { en: 'Avoids conflict', hi: 'संघर्ष से बचने वाला' },
      { en: 'Dependent', hi: 'निर्भर' },
    ],
    emotionalNature: {
      en: 'Your emotional well-being depends on the quality of your relationships. You seek balance and fairness in all emotional exchanges.',
      hi: 'आपकी भावनात्मक भलाई आपके रिश्तों की गुणवत्ता पर निर्भर करती है। आप सभी भावनात्मक आदान-प्रदान में संतुलन और निष्पक्षता चाहते हैं।',
    },
    relationships: {
      en: 'In relationships, you are romantic and devoted. Partnership is essential for your happiness—you thrive in committed relationships.',
      hi: 'रिश्तों में, आप रोमांटिक और समर्पित हैं। आपकी खुशी के लिए साझेदारी आवश्यक है—आप प्रतिबद्ध रिश्तों में फलते-फूलते हैं।',
    },
    careerStrengths: [
      { en: 'Law', hi: 'कानून' },
      { en: 'Diplomacy', hi: 'कूटनीति' },
      { en: 'Art & Design', hi: 'कला और डिजाइन' },
      { en: 'Counseling', hi: 'परामर्श' },
      { en: 'Public Relations', hi: 'जनसंपर्क' },
    ],
    compatibleSigns: [2, 10, 6], // Gemini, Aquarius, Libra
    luckyColor: { en: 'White & Blue', hi: 'सफेद और नीला' },
    luckyNumber: 6,
    luckyDay: { en: 'Friday', hi: 'शुक्रवार' },
    rulingDeity: { en: 'Goddess Lakshmi', hi: 'देवी लक्ष्मी' },
    mantra: { en: 'Om Shum Shukraya Namah', hi: 'ॐ शुं शुक्राय नमः' },
  },

  // 7: Scorpio (Vrishchika)
  {
    signIndex: 7,
    element: 'water',
    rulingPlanet: 'Mars',
    symbol: '♏',
    overview: {
      en: 'Scorpio Moon individuals experience emotions with extraordinary intensity and depth. They have powerful intuition and an ability to see beneath surface appearances.',
      hi: 'वृश्चिक राशि के चंद्रमा वाले व्यक्ति असाधारण तीव्रता और गहराई के साथ भावनाओं का अनुभव करते हैं। उनके पास शक्तिशाली अंतर्ज्ञान है।',
    },
    personality: {
      en: 'You feel emotions deeply and completely. You are perceptive about others\' motivations and value emotional authenticity above all.',
      hi: 'आप भावनाओं को गहराई से और पूर्ण रूप से महसूस करते हैं। आप दूसरों की प्रेरणाओं के बारे में अंतर्दृष्टि रखते हैं।',
    },
    positiveTraits: [
      { en: 'Intense', hi: 'तीव्र' },
      { en: 'Perceptive', hi: 'अंतर्दृष्टि वाला' },
      { en: 'Passionate', hi: 'भावुक' },
      { en: 'Loyal', hi: 'वफादार' },
      { en: 'Transformative', hi: 'परिवर्तनकारी' },
    ],
    negativeTraits: [
      { en: 'Jealous', hi: 'ईर्ष्यालु' },
      { en: 'Secretive', hi: 'गोपनीय' },
      { en: 'Vengeful', hi: 'प्रतिशोधी' },
      { en: 'Obsessive', hi: 'जुनूनी' },
    ],
    emotionalNature: {
      en: 'Your emotions run deep and you never forget an emotional experience. You have the ability to transform pain into power.',
      hi: 'आपकी भावनाएं गहरी हैं और आप कभी भी भावनात्मक अनुभव नहीं भूलते। आपके पास दर्द को शक्ति में बदलने की क्षमता है।',
    },
    relationships: {
      en: 'In relationships, you are deeply committed and expect total honesty. You need emotional depth and can sense when something is being hidden.',
      hi: 'रिश्तों में, आप गहराई से प्रतिबद्ध हैं और पूर्ण ईमानदारी की उम्मीद करते हैं। आपको भावनात्मक गहराई की आवश्यकता है।',
    },
    careerStrengths: [
      { en: 'Psychology', hi: 'मनोविज्ञान' },
      { en: 'Investigation', hi: 'जांच' },
      { en: 'Research', hi: 'अनुसंधान' },
      { en: 'Surgery', hi: 'सर्जरी' },
      { en: 'Occult sciences', hi: 'गूढ़ विज्ञान' },
    ],
    compatibleSigns: [3, 11, 7], // Cancer, Pisces, Scorpio
    luckyColor: { en: 'Red & Maroon', hi: 'लाल और मैरून' },
    luckyNumber: 9,
    luckyDay: { en: 'Tuesday', hi: 'मंगलवार' },
    rulingDeity: { en: 'Lord Hanuman', hi: 'भगवान हनुमान' },
    mantra: { en: 'Om Kram Kreem Kroum Sah Bhaumaya Namah', hi: 'ॐ क्रां क्रीं क्रौं सः भौमाय नमः' },
  },

  // 8: Sagittarius (Dhanu)
  {
    signIndex: 8,
    element: 'fire',
    rulingPlanet: 'Jupiter',
    symbol: '♐',
    overview: {
      en: 'Sagittarius Moon individuals are optimistic, adventurous, and philosophical. They find emotional fulfillment through exploration, learning, and expansion.',
      hi: 'धनु राशि के चंद्रमा वाले व्यक्ति आशावादी, साहसी और दार्शनिक होते हैं। वे अन्वेषण, सीखने और विस्तार के माध्यम से भावनात्मक पूर्णता पाते हैं।',
    },
    personality: {
      en: 'You are naturally optimistic and need freedom to explore. Your emotional well-being depends on having something to look forward to.',
      hi: 'आप स्वाभाविक रूप से आशावादी हैं और अन्वेषण करने की स्वतंत्रता की आवश्यकता है। आपकी भावनात्मक भलाई कुछ प्रतीक्षा करने पर निर्भर करती है।',
    },
    positiveTraits: [
      { en: 'Optimistic', hi: 'आशावादी' },
      { en: 'Adventurous', hi: 'साहसी' },
      { en: 'Honest', hi: 'ईमानदार' },
      { en: 'Philosophical', hi: 'दार्शनिक' },
      { en: 'Freedom-loving', hi: 'स्वतंत्रता प्रेमी' },
    ],
    negativeTraits: [
      { en: 'Restless', hi: 'बेचैन' },
      { en: 'Tactless', hi: 'अविवेकी' },
      { en: 'Over-promising', hi: 'अधिक वादा करने वाला' },
      { en: 'Commitment-phobic', hi: 'प्रतिबद्धता से डरने वाला' },
    ],
    emotionalNature: {
      en: 'Your emotional nature is buoyant and you recover quickly from setbacks. You find meaning in experiences and are always looking toward the future.',
      hi: 'आपका भावनात्मक स्वभाव उत्साही है और आप झटकों से जल्दी उबर जाते हैं। आप अनुभवों में अर्थ खोजते हैं।',
    },
    relationships: {
      en: 'In relationships, you need a partner who shares your love of adventure and gives you space for growth.',
      hi: 'रिश्तों में, आपको एक ऐसे साथी की आवश्यकता है जो साहसिक कार्य के लिए आपके प्यार को साझा करे और आपको विकास के लिए जगह दे।',
    },
    careerStrengths: [
      { en: 'Teaching', hi: 'शिक्षण' },
      { en: 'Travel', hi: 'यात्रा' },
      { en: 'Publishing', hi: 'प्रकाशन' },
      { en: 'Law', hi: 'कानून' },
      { en: 'Philosophy', hi: 'दर्शन' },
    ],
    compatibleSigns: [0, 4, 8], // Aries, Leo, Sagittarius
    luckyColor: { en: 'Yellow & Purple', hi: 'पीला और बैंगनी' },
    luckyNumber: 3,
    luckyDay: { en: 'Thursday', hi: 'गुरुवार' },
    rulingDeity: { en: 'Lord Brihaspati', hi: 'भगवान बृहस्पति' },
    mantra: { en: 'Om Gram Greem Groum Sah Gurave Namah', hi: 'ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः' },
  },

  // 9: Capricorn (Makara)
  {
    signIndex: 9,
    element: 'earth',
    rulingPlanet: 'Saturn',
    symbol: '♑',
    overview: {
      en: 'Capricorn Moon individuals are emotionally reserved and find security through achievement and structure. They have mature emotional responses and take responsibility seriously.',
      hi: 'मकर राशि के चंद्रमा वाले व्यक्ति भावनात्मक रूप से संयमित होते हैं और उपलब्धि और संरचना के माध्यम से सुरक्षा पाते हैं।',
    },
    personality: {
      en: 'You are emotionally mature and controlled. Achievement and status are important for your emotional security.',
      hi: 'आप भावनात्मक रूप से परिपक्व और नियंत्रित हैं। आपकी भावनात्मक सुरक्षा के लिए उपलब्धि और स्थिति महत्वपूर्ण हैं।',
    },
    positiveTraits: [
      { en: 'Disciplined', hi: 'अनुशासित' },
      { en: 'Responsible', hi: 'जिम्मेदार' },
      { en: 'Ambitious', hi: 'महत्वाकांक्षी' },
      { en: 'Practical', hi: 'व्यावहारिक' },
      { en: 'Patient', hi: 'धैर्यवान' },
    ],
    negativeTraits: [
      { en: 'Cold', hi: 'ठंडा' },
      { en: 'Pessimistic', hi: 'निराशावादी' },
      { en: 'Workaholic', hi: 'काम का दीवाना' },
      { en: 'Rigid', hi: 'कठोर' },
    ],
    emotionalNature: {
      en: 'Your emotional nature is controlled and you may appear distant. Deep down, you crave respect and recognition for your efforts.',
      hi: 'आपका भावनात्मक स्वभाव नियंत्रित है और आप दूर दिख सकते हैं। गहराई में, आप अपने प्रयासों के लिए सम्मान और मान्यता चाहते हैं।',
    },
    relationships: {
      en: 'In relationships, you are loyal and committed but may struggle to express emotions freely. You value lasting partnerships.',
      hi: 'रिश्तों में, आप वफादार और प्रतिबद्ध हैं लेकिन भावनाओं को स्वतंत्र रूप से व्यक्त करने में संघर्ष कर सकते हैं।',
    },
    careerStrengths: [
      { en: 'Business', hi: 'व्यापार' },
      { en: 'Government', hi: 'सरकार' },
      { en: 'Banking', hi: 'बैंकिंग' },
      { en: 'Administration', hi: 'प्रशासन' },
      { en: 'Engineering', hi: 'इंजीनियरिंग' },
    ],
    compatibleSigns: [1, 5, 9], // Taurus, Virgo, Capricorn
    luckyColor: { en: 'Black & Blue', hi: 'काला और नीला' },
    luckyNumber: 8,
    luckyDay: { en: 'Saturday', hi: 'शनिवार' },
    rulingDeity: { en: 'Lord Shani', hi: 'भगवान शनि' },
    mantra: { en: 'Om Sham Shanaishcharaya Namah', hi: 'ॐ शं शनैश्चराय नमः' },
  },

  // 10: Aquarius (Kumbha)
  {
    signIndex: 10,
    element: 'air',
    rulingPlanet: 'Saturn',
    symbol: '♒',
    overview: {
      en: 'Aquarius Moon individuals are emotionally independent and find fulfillment through humanitarian causes and intellectual pursuits. They value freedom and originality.',
      hi: 'कुंभ राशि के चंद्रमा वाले व्यक्ति भावनात्मक रूप से स्वतंत्र होते हैं और मानवतावादी कारणों और बौद्धिक गतिविधियों के माध्यम से पूर्णता पाते हैं।',
    },
    personality: {
      en: 'You are emotionally detached in a healthy way, able to observe your feelings objectively. You value friendship and community.',
      hi: 'आप स्वस्थ तरीके से भावनात्मक रूप से अलग हैं, अपनी भावनाओं को निष्पक्ष रूप से देखने में सक्षम हैं। आप मित्रता और समुदाय को महत्व देते हैं।',
    },
    positiveTraits: [
      { en: 'Independent', hi: 'स्वतंत्र' },
      { en: 'Humanitarian', hi: 'मानवतावादी' },
      { en: 'Original', hi: 'मौलिक' },
      { en: 'Friendly', hi: 'मित्रवत' },
      { en: 'Progressive', hi: 'प्रगतिशील' },
    ],
    negativeTraits: [
      { en: 'Detached', hi: 'अलग-थलग' },
      { en: 'Unpredictable', hi: 'अप्रत्याशित' },
      { en: 'Rebellious', hi: 'विद्रोही' },
      { en: 'Aloof', hi: 'दूर रहने वाला' },
    ],
    emotionalNature: {
      en: 'Your emotional nature is unconventional. You need intellectual stimulation and social causes to feel emotionally engaged.',
      hi: 'आपका भावनात्मक स्वभाव अपरंपरागत है। भावनात्मक रूप से जुड़ा महसूस करने के लिए आपको बौद्धिक उत्तेजना और सामाजिक कारणों की आवश्यकता है।',
    },
    relationships: {
      en: 'In relationships, you value friendship and intellectual connection. You need a partner who respects your independence.',
      hi: 'रिश्तों में, आप मित्रता और बौद्धिक संबंध को महत्व देते हैं। आपको एक ऐसे साथी की आवश्यकता है जो आपकी स्वतंत्रता का सम्मान करे।',
    },
    careerStrengths: [
      { en: 'Technology', hi: 'प्रौद्योगिकी' },
      { en: 'Social work', hi: 'सामाजिक कार्य' },
      { en: 'Science', hi: 'विज्ञान' },
      { en: 'Aviation', hi: 'विमानन' },
      { en: 'Astrology', hi: 'ज्योतिष' },
    ],
    compatibleSigns: [2, 6, 10], // Gemini, Libra, Aquarius
    luckyColor: { en: 'Blue & Black', hi: 'नीला और काला' },
    luckyNumber: 8,
    luckyDay: { en: 'Saturday', hi: 'शनिवार' },
    rulingDeity: { en: 'Lord Shani', hi: 'भगवान शनि' },
    mantra: { en: 'Om Sham Shanaishcharaya Namah', hi: 'ॐ शं शनैश्चराय नमः' },
  },

  // 11: Pisces (Meena)
  {
    signIndex: 11,
    element: 'water',
    rulingPlanet: 'Jupiter',
    symbol: '♓',
    overview: {
      en: 'Pisces Moon individuals are deeply intuitive, compassionate, and imaginative. They absorb the emotions around them and have a strong connection to the spiritual realm.',
      hi: 'मीन राशि के चंद्रमा वाले व्यक्ति गहराई से सहज, दयालु और कल्पनाशील होते हैं। वे अपने आसपास की भावनाओं को अवशोषित करते हैं।',
    },
    personality: {
      en: 'You are extremely sensitive and empathetic, often feeling others\' emotions as your own. Your imagination and intuition are highly developed.',
      hi: 'आप अत्यंत संवेदनशील और सहानुभूतिपूर्ण हैं, अक्सर दूसरों की भावनाओं को अपनी भावनाओं के रूप में महसूस करते हैं।',
    },
    positiveTraits: [
      { en: 'Compassionate', hi: 'दयालु' },
      { en: 'Intuitive', hi: 'सहज ज्ञानी' },
      { en: 'Artistic', hi: 'कलात्मक' },
      { en: 'Spiritual', hi: 'आध्यात्मिक' },
      { en: 'Selfless', hi: 'निःस्वार्थ' },
    ],
    negativeTraits: [
      { en: 'Escapist', hi: 'पलायनवादी' },
      { en: 'Oversensitive', hi: 'अतिसंवेदनशील' },
      { en: 'Vague', hi: 'अस्पष्ट' },
      { en: 'Easily influenced', hi: 'आसानी से प्रभावित होने वाला' },
    ],
    emotionalNature: {
      en: 'Your emotional nature is boundless and you may sometimes lose yourself in others\' feelings. You need regular solitude to process emotions.',
      hi: 'आपका भावनात्मक स्वभाव असीमित है और आप कभी-कभी दूसरों की भावनाओं में खो सकते हैं। भावनाओं को संसाधित करने के लिए आपको नियमित एकांत की आवश्यकता है।',
    },
    relationships: {
      en: 'In relationships, you are romantic and devoted. You seek spiritual and emotional connection above all else.',
      hi: 'रिश्तों में, आप रोमांटिक और समर्पित हैं। आप सबसे ऊपर आध्यात्मिक और भावनात्मक संबंध चाहते हैं।',
    },
    careerStrengths: [
      { en: 'Arts', hi: 'कला' },
      { en: 'Music', hi: 'संगीत' },
      { en: 'Healing', hi: 'चिकित्सा' },
      { en: 'Spirituality', hi: 'आध्यात्मिकता' },
      { en: 'Photography', hi: 'फोटोग्राफी' },
    ],
    compatibleSigns: [3, 7, 11], // Cancer, Scorpio, Pisces
    luckyColor: { en: 'Yellow & Sea Green', hi: 'पीला और समुद्री हरा' },
    luckyNumber: 3,
    luckyDay: { en: 'Thursday', hi: 'गुरुवार' },
    rulingDeity: { en: 'Lord Brihaspati', hi: 'भगवान बृहस्पति' },
    mantra: { en: 'Om Gram Greem Groum Sah Gurave Namah', hi: 'ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः' },
  },
];

export function getMoonSignMeaning(signIndex: number): MoonSignMeaning {
  return MOON_SIGN_MEANINGS[signIndex];
}
