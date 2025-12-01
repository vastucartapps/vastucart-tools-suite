/**
 * Lagna (Ascendant) Sign Meanings and Interpretations
 *
 * Each Lagna sign influences the native's personality, physical appearance,
 * and overall life approach in Vedic Astrology.
 */

export interface LagnaMeaning {
  sign: number; // 0-11 (Aries to Pisces)
  lord: string;
  element: { en: string; hi: string };
  quality: { en: string; hi: string };
  bodyPart: string;
  gemstone: string;
  luckyColor: { en: string; hi: string };
  luckyDay: { en: string; hi: string };
  luckyNumber: number[];
  physicalTraits: { en: string[]; hi: string[] };
  personality: { en: string; hi: string };
  strengths: { en: string[]; hi: string[] };
  weaknesses: { en: string[]; hi: string[] };
  career: { en: string[]; hi: string[] };
  health: { en: string; hi: string };
  relationships: { en: string; hi: string };
}

export const LAGNA_MEANINGS: LagnaMeaning[] = [
  // Aries Lagna (Mesh)
  {
    sign: 0,
    lord: 'Mars',
    element: { en: 'Fire', hi: 'अग्नि' },
    quality: { en: 'Cardinal', hi: 'चर' },
    bodyPart: 'Head',
    gemstone: 'Red Coral',
    luckyColor: { en: 'Red', hi: 'लाल' },
    luckyDay: { en: 'Tuesday', hi: 'मंगलवार' },
    luckyNumber: [9, 1],
    physicalTraits: {
      en: ['Athletic build', 'Sharp features', 'Quick movements', 'Prominent forehead', 'Medium height'],
      hi: ['एथलेटिक बनावट', 'तेज नाक-नक्श', 'तेज चाल', 'चौड़ा माथा', 'मध्यम कद']
    },
    personality: {
      en: 'Aries Lagna individuals are natural leaders with pioneering spirits. They are bold, energetic, and always ready to take initiative. Their courage and enthusiasm make them excellent at starting new ventures.',
      hi: 'मेष लग्न के जातक स्वाभाविक नेता होते हैं और पहल करने वाले होते हैं। वे साहसी, ऊर्जावान और हमेशा पहल करने के लिए तैयार रहते हैं। उनका साहस और उत्साह उन्हें नए कार्य शुरू करने में उत्कृष्ट बनाता है।'
    },
    strengths: {
      en: ['Leadership ability', 'Courage and bravery', 'Quick decision-making', 'High energy', 'Independent thinking'],
      hi: ['नेतृत्व क्षमता', 'साहस और वीरता', 'त्वरित निर्णय लेना', 'उच्च ऊर्जा', 'स्वतंत्र सोच']
    },
    weaknesses: {
      en: ['Impulsiveness', 'Impatience', 'Short temper', 'Aggressive behavior', 'Difficulty completing tasks'],
      hi: ['आवेगशीलता', 'अधीरता', 'क्रोध', 'आक्रामक व्यवहार', 'कार्य पूरा करने में कठिनाई']
    },
    career: {
      en: ['Military/Defense', 'Sports', 'Entrepreneurship', 'Surgery', 'Engineering', 'Politics'],
      hi: ['सेना/रक्षा', 'खेल', 'उद्यमिता', 'सर्जरी', 'इंजीनियरिंग', 'राजनीति']
    },
    health: {
      en: 'Generally robust health but prone to headaches, fevers, and inflammatory conditions. Should be careful about head injuries and accidents.',
      hi: 'आम तौर पर अच्छा स्वास्थ्य लेकिन सिरदर्द, बुखार और सूजन की समस्या हो सकती है। सिर की चोटों और दुर्घटनाओं से सावधान रहें।'
    },
    relationships: {
      en: 'Passionate and direct in relationships. They need partners who can match their energy and respect their independence.',
      hi: 'रिश्तों में भावुक और सीधे होते हैं। उन्हें ऐसे साथी की जरूरत होती है जो उनकी ऊर्जा से मेल खा सके और उनकी स्वतंत्रता का सम्मान करे।'
    }
  },
  // Taurus Lagna (Vrishabh)
  {
    sign: 1,
    lord: 'Venus',
    element: { en: 'Earth', hi: 'पृथ्वी' },
    quality: { en: 'Fixed', hi: 'स्थिर' },
    bodyPart: 'Face, Neck',
    gemstone: 'Diamond',
    luckyColor: { en: 'White, Pink', hi: 'सफेद, गुलाबी' },
    luckyDay: { en: 'Friday', hi: 'शुक्रवार' },
    luckyNumber: [6, 5],
    physicalTraits: {
      en: ['Strong build', 'Beautiful eyes', 'Pleasant voice', 'Fair complexion', 'Thick neck'],
      hi: ['मजबूत शरीर', 'सुंदर आंखें', 'मधुर आवाज', 'गोरा रंग', 'मोटी गर्दन']
    },
    personality: {
      en: 'Taurus Lagna natives are stable, reliable, and determined. They value comfort and beauty, and have a strong appreciation for art and luxury. Their patience and persistence help them achieve long-term goals.',
      hi: 'वृषभ लग्न के जातक स्थिर, विश्वसनीय और दृढ़निश्चयी होते हैं। वे आराम और सुंदरता को महत्व देते हैं और कला और विलासिता की गहरी समझ रखते हैं। उनका धैर्य और दृढ़ता उन्हें दीर्घकालिक लक्ष्यों को प्राप्त करने में मदद करती है।'
    },
    strengths: {
      en: ['Patience', 'Reliability', 'Financial wisdom', 'Artistic abilities', 'Loyalty'],
      hi: ['धैर्य', 'विश्वसनीयता', 'आर्थिक समझदारी', 'कलात्मक क्षमता', 'वफादारी']
    },
    weaknesses: {
      en: ['Stubbornness', 'Possessiveness', 'Resistance to change', 'Laziness', 'Materialism'],
      hi: ['जिद्दीपन', 'अधिकार भाव', 'बदलाव का विरोध', 'आलस्य', 'भौतिकवाद']
    },
    career: {
      en: ['Banking/Finance', 'Agriculture', 'Fashion/Beauty', 'Music/Arts', 'Real Estate', 'Food Industry'],
      hi: ['बैंकिंग/वित्त', 'कृषि', 'फैशन/सौंदर्य', 'संगीत/कला', 'रियल एस्टेट', 'खाद्य उद्योग']
    },
    health: {
      en: 'Generally good health but prone to throat issues, thyroid problems, and weight gain. Should maintain an active lifestyle.',
      hi: 'आम तौर पर अच्छा स्वास्थ्य लेकिन गले की समस्या, थायरॉइड और वजन बढ़ने की संभावना। सक्रिय जीवनशैली बनाए रखें।'
    },
    relationships: {
      en: 'Loving and devoted partners. They seek stability and security in relationships and are extremely loyal once committed.',
      hi: 'प्यार करने वाले और समर्पित साथी। वे रिश्तों में स्थिरता और सुरक्षा चाहते हैं और प्रतिबद्ध होने के बाद बहुत वफादार होते हैं।'
    }
  },
  // Gemini Lagna (Mithun)
  {
    sign: 2,
    lord: 'Mercury',
    element: { en: 'Air', hi: 'वायु' },
    quality: { en: 'Mutable', hi: 'द्विस्वभाव' },
    bodyPart: 'Arms, Shoulders',
    gemstone: 'Emerald',
    luckyColor: { en: 'Green', hi: 'हरा' },
    luckyDay: { en: 'Wednesday', hi: 'बुधवार' },
    luckyNumber: [5, 3],
    physicalTraits: {
      en: ['Tall and slender', 'Expressive eyes', 'Quick gestures', 'Youthful appearance', 'Long arms'],
      hi: ['लंबा और पतला', 'बोलती आंखें', 'तेज हाव-भाव', 'युवा दिखावट', 'लंबी बाहें']
    },
    personality: {
      en: 'Gemini Lagna natives are intellectually curious and excellent communicators. They have versatile minds, love learning, and can adapt to any situation. Their wit and charm make them popular in social settings.',
      hi: 'मिथुन लग्न के जातक बौद्धिक रूप से जिज्ञासु और उत्कृष्ट वक्ता होते हैं। उनकी बहुमुखी बुद्धि होती है, सीखना पसंद करते हैं और किसी भी परिस्थिति में ढल सकते हैं। उनकी बुद्धि और आकर्षण उन्हें सामाजिक रूप से लोकप्रिय बनाते हैं।'
    },
    strengths: {
      en: ['Communication skills', 'Adaptability', 'Quick learning', 'Versatility', 'Social intelligence'],
      hi: ['संचार कौशल', 'अनुकूलनशीलता', 'तेज सीखना', 'बहुमुखी प्रतिभा', 'सामाजिक बुद्धि']
    },
    weaknesses: {
      en: ['Restlessness', 'Inconsistency', 'Superficiality', 'Nervousness', 'Indecisiveness'],
      hi: ['बेचैनी', 'असंगति', 'सतहीपन', 'घबराहट', 'अनिर्णय']
    },
    career: {
      en: ['Journalism', 'Writing', 'Teaching', 'Sales/Marketing', 'Media', 'Translation'],
      hi: ['पत्रकारिता', 'लेखन', 'शिक्षण', 'बिक्री/मार्केटिंग', 'मीडिया', 'अनुवाद']
    },
    health: {
      en: 'Generally nervous constitution. Prone to respiratory issues, arm/shoulder problems, and anxiety. Mental relaxation is important.',
      hi: 'आम तौर पर तंत्रिका तंत्र कमजोर। श्वसन समस्या, बाहों/कंधों की समस्या और चिंता की संभावना। मानसिक विश्राम महत्वपूर्ण है।'
    },
    relationships: {
      en: 'Need intellectual stimulation in relationships. They enjoy variety and conversation with their partners.',
      hi: 'रिश्तों में बौद्धिक उत्तेजना की जरूरत होती है। वे अपने साथी के साथ विविधता और बातचीत का आनंद लेते हैं।'
    }
  },
  // Cancer Lagna (Kark)
  {
    sign: 3,
    lord: 'Moon',
    element: { en: 'Water', hi: 'जल' },
    quality: { en: 'Cardinal', hi: 'चर' },
    bodyPart: 'Chest, Stomach',
    gemstone: 'Pearl',
    luckyColor: { en: 'White, Silver', hi: 'सफेद, चांदी' },
    luckyDay: { en: 'Monday', hi: 'सोमवार' },
    luckyNumber: [2, 7],
    physicalTraits: {
      en: ['Round face', 'Sensitive eyes', 'Soft features', 'Medium height', 'Tends to be plump'],
      hi: ['गोल चेहरा', 'संवेदनशील आंखें', 'कोमल नाक-नक्श', 'मध्यम कद', 'भरा हुआ शरीर']
    },
    personality: {
      en: 'Cancer Lagna natives are deeply emotional, nurturing, and protective. They have strong intuition and a natural ability to care for others. Home and family are of utmost importance to them.',
      hi: 'कर्क लग्न के जातक गहरे भावुक, पालन-पोषण करने वाले और सुरक्षात्मक होते हैं। उनमें मजबूत अंतर्ज्ञान और दूसरों की देखभाल करने की स्वाभाविक क्षमता होती है। घर और परिवार उनके लिए अत्यंत महत्वपूर्ण हैं।'
    },
    strengths: {
      en: ['Emotional intelligence', 'Nurturing nature', 'Strong intuition', 'Family devotion', 'Imagination'],
      hi: ['भावनात्मक बुद्धि', 'पालन-पोषण स्वभाव', 'मजबूत अंतर्ज्ञान', 'परिवार के प्रति समर्पण', 'कल्पनाशीलता']
    },
    weaknesses: {
      en: ['Mood swings', 'Over-sensitivity', 'Clinginess', 'Fear of rejection', 'Living in the past'],
      hi: ['मिजाज बदलना', 'अति-संवेदनशीलता', 'चिपकू स्वभाव', 'अस्वीकृति का डर', 'अतीत में जीना']
    },
    career: {
      en: ['Healthcare', 'Hospitality', 'Real Estate', 'Psychology', 'Food Business', 'Childcare'],
      hi: ['स्वास्थ्य सेवा', 'आतिथ्य', 'रियल एस्टेट', 'मनोविज्ञान', 'खाद्य व्यवसाय', 'बाल देखभाल']
    },
    health: {
      en: 'Prone to digestive issues, chest problems, and water retention. Emotional state greatly affects physical health.',
      hi: 'पाचन संबंधी समस्या, छाती की समस्या और जल प्रतिधारण की संभावना। भावनात्मक स्थिति शारीरिक स्वास्थ्य को बहुत प्रभावित करती है।'
    },
    relationships: {
      en: 'Deeply committed and protective partners. They need emotional security and create nurturing home environments.',
      hi: 'गहरे प्रतिबद्ध और सुरक्षात्मक साथी। उन्हें भावनात्मक सुरक्षा की जरूरत होती है और वे घर का पोषणकारी वातावरण बनाते हैं।'
    }
  },
  // Leo Lagna (Simha)
  {
    sign: 4,
    lord: 'Sun',
    element: { en: 'Fire', hi: 'अग्नि' },
    quality: { en: 'Fixed', hi: 'स्थिर' },
    bodyPart: 'Heart, Spine',
    gemstone: 'Ruby',
    luckyColor: { en: 'Gold, Orange', hi: 'सुनहरा, नारंगी' },
    luckyDay: { en: 'Sunday', hi: 'रविवार' },
    luckyNumber: [1, 4],
    physicalTraits: {
      en: ['Majestic presence', 'Broad shoulders', 'Strong back', 'Proud bearing', 'Leonine features'],
      hi: ['राजसी उपस्थिति', 'चौड़े कंधे', 'मजबूत पीठ', 'गर्वित मुद्रा', 'शेर जैसे नाक-नक्श']
    },
    personality: {
      en: 'Leo Lagna natives have a regal presence and natural authority. They are confident, generous, and love being in the spotlight. Their warmth and charisma make them natural leaders.',
      hi: 'सिंह लग्न के जातकों में राजसी उपस्थिति और स्वाभाविक अधिकार होता है। वे आत्मविश्वासी, उदार होते हैं और सुर्खियों में रहना पसंद करते हैं। उनकी गर्मजोशी और करिश्मा उन्हें स्वाभाविक नेता बनाते हैं।'
    },
    strengths: {
      en: ['Leadership', 'Generosity', 'Confidence', 'Creativity', 'Loyalty'],
      hi: ['नेतृत्व', 'उदारता', 'आत्मविश्वास', 'रचनात्मकता', 'वफादारी']
    },
    weaknesses: {
      en: ['Pride', 'Ego', 'Need for attention', 'Stubbornness', 'Dominating nature'],
      hi: ['अभिमान', 'अहंकार', 'ध्यान की आवश्यकता', 'जिद्दीपन', 'हावी होने का स्वभाव']
    },
    career: {
      en: ['Government', 'Entertainment', 'Management', 'Politics', 'Luxury Industry', 'Creative Arts'],
      hi: ['सरकारी नौकरी', 'मनोरंजन', 'प्रबंधन', 'राजनीति', 'विलासिता उद्योग', 'रचनात्मक कला']
    },
    health: {
      en: 'Generally strong constitution but prone to heart problems, back issues, and blood pressure. Should manage stress and ego.',
      hi: 'आम तौर पर मजबूत शरीर लेकिन हृदय की समस्या, पीठ की समस्या और रक्तचाप की संभावना। तनाव और अहंकार को नियंत्रित करें।'
    },
    relationships: {
      en: 'Romantic and generous partners. They need admiration and respect from their partners and are loyal in return.',
      hi: 'रोमांटिक और उदार साथी। उन्हें अपने साथी से प्रशंसा और सम्मान की जरूरत होती है और बदले में वफादार होते हैं।'
    }
  },
  // Virgo Lagna (Kanya)
  {
    sign: 5,
    lord: 'Mercury',
    element: { en: 'Earth', hi: 'पृथ्वी' },
    quality: { en: 'Mutable', hi: 'द्विस्वभाव' },
    bodyPart: 'Intestines, Nervous System',
    gemstone: 'Emerald',
    luckyColor: { en: 'Green, Grey', hi: 'हरा, स्लेटी' },
    luckyDay: { en: 'Wednesday', hi: 'बुधवार' },
    luckyNumber: [5, 3, 6],
    physicalTraits: {
      en: ['Delicate features', 'Intelligent eyes', 'Neat appearance', 'Medium height', 'Graceful movements'],
      hi: ['नाजुक नाक-नक्श', 'बुद्धिमान आंखें', 'साफ-सुथरी दिखावट', 'मध्यम कद', 'सुंदर चाल']
    },
    personality: {
      en: 'Virgo Lagna natives are analytical, practical, and detail-oriented. They have high standards and a desire for perfection. Their methodical approach makes them excellent problem-solvers.',
      hi: 'कन्या लग्न के जातक विश्लेषणात्मक, व्यावहारिक और विस्तार पर ध्यान देने वाले होते हैं। उनके उच्च मानक और पूर्णता की इच्छा होती है। उनका व्यवस्थित दृष्टिकोण उन्हें उत्कृष्ट समस्या-समाधानकर्ता बनाता है।'
    },
    strengths: {
      en: ['Analytical skills', 'Attention to detail', 'Practicality', 'Service-oriented', 'Health consciousness'],
      hi: ['विश्लेषणात्मक कौशल', 'विस्तार पर ध्यान', 'व्यावहारिकता', 'सेवा-उन्मुख', 'स्वास्थ्य जागरूकता']
    },
    weaknesses: {
      en: ['Over-critical', 'Perfectionism', 'Worry', 'Reserved nature', 'Self-criticism'],
      hi: ['अति-आलोचनात्मक', 'पूर्णतावाद', 'चिंता', 'संकोची स्वभाव', 'आत्म-आलोचना']
    },
    career: {
      en: ['Healthcare', 'Accounting', 'Analysis', 'Research', 'Quality Control', 'Editing'],
      hi: ['स्वास्थ्य सेवा', 'लेखाकरण', 'विश्लेषण', 'शोध', 'गुणवत्ता नियंत्रण', 'संपादन']
    },
    health: {
      en: 'Prone to digestive issues, nervous disorders, and anxiety. Diet and stress management are crucial.',
      hi: 'पाचन संबंधी समस्या, तंत्रिका विकार और चिंता की संभावना। आहार और तनाव प्रबंधन महत्वपूर्ण है।'
    },
    relationships: {
      en: 'Supportive and helpful partners. They show love through acts of service and appreciate partners who are reliable.',
      hi: 'सहायक और मददगार साथी। वे सेवा के माध्यम से प्यार दिखाते हैं और विश्वसनीय साथी की सराहना करते हैं।'
    }
  },
  // Libra Lagna (Tula)
  {
    sign: 6,
    lord: 'Venus',
    element: { en: 'Air', hi: 'वायु' },
    quality: { en: 'Cardinal', hi: 'चर' },
    bodyPart: 'Kidneys, Lower Back',
    gemstone: 'Diamond',
    luckyColor: { en: 'White, Light Blue', hi: 'सफेद, हल्का नीला' },
    luckyDay: { en: 'Friday', hi: 'शुक्रवार' },
    luckyNumber: [6, 9],
    physicalTraits: {
      en: ['Attractive features', 'Symmetrical face', 'Charming smile', 'Graceful demeanor', 'Pleasant voice'],
      hi: ['आकर्षक नाक-नक्श', 'सममित चेहरा', 'मोहक मुस्कान', 'सुंदर व्यवहार', 'मधुर आवाज']
    },
    personality: {
      en: 'Libra Lagna natives are charming, diplomatic, and have a strong sense of justice. They seek harmony and balance in all aspects of life. Their social skills and aesthetic sense are highly developed.',
      hi: 'तुला लग्न के जातक आकर्षक, कूटनीतिक होते हैं और न्याय की मजबूत भावना रखते हैं। वे जीवन के सभी पहलुओं में सामंजस्य और संतुलन चाहते हैं। उनके सामाजिक कौशल और सौंदर्य बोध अत्यधिक विकसित होते हैं।'
    },
    strengths: {
      en: ['Diplomacy', 'Fairness', 'Social skills', 'Aesthetic sense', 'Peacemaking'],
      hi: ['कूटनीति', 'निष्पक्षता', 'सामाजिक कौशल', 'सौंदर्य बोध', 'शांति स्थापना']
    },
    weaknesses: {
      en: ['Indecisiveness', 'People-pleasing', 'Avoidance of conflict', 'Dependency', 'Superficiality'],
      hi: ['अनिर्णय', 'लोगों को खुश करना', 'संघर्ष से बचना', 'निर्भरता', 'सतहीपन']
    },
    career: {
      en: ['Law', 'Diplomacy', 'Fashion', 'Art/Design', 'Counseling', 'Public Relations'],
      hi: ['कानून', 'कूटनीति', 'फैशन', 'कला/डिजाइन', 'परामर्श', 'जनसंपर्क']
    },
    health: {
      en: 'Prone to kidney issues, lower back problems, and skin conditions. Balance in diet and lifestyle is essential.',
      hi: 'गुर्दे की समस्या, पीठ के निचले हिस्से की समस्या और त्वचा की समस्या की संभावना। आहार और जीवनशैली में संतुलन जरूरी है।'
    },
    relationships: {
      en: 'Romantic and partnership-oriented. They thrive in committed relationships and seek equality with their partners.',
      hi: 'रोमांटिक और साझेदारी-उन्मुख। वे प्रतिबद्ध रिश्तों में पनपते हैं और अपने साथी के साथ समानता चाहते हैं।'
    }
  },
  // Scorpio Lagna (Vrishchik)
  {
    sign: 7,
    lord: 'Mars',
    element: { en: 'Water', hi: 'जल' },
    quality: { en: 'Fixed', hi: 'स्थिर' },
    bodyPart: 'Reproductive Organs',
    gemstone: 'Red Coral',
    luckyColor: { en: 'Red, Maroon', hi: 'लाल, मैरून' },
    luckyDay: { en: 'Tuesday', hi: 'मंगलवार' },
    luckyNumber: [9, 4],
    physicalTraits: {
      en: ['Intense eyes', 'Strong presence', 'Magnetic personality', 'Medium height', 'Sharp features'],
      hi: ['तीव्र आंखें', 'मजबूत उपस्थिति', 'चुंबकीय व्यक्तित्व', 'मध्यम कद', 'तेज नाक-नक्श']
    },
    personality: {
      en: 'Scorpio Lagna natives are intense, passionate, and deeply perceptive. They have extraordinary willpower and the ability to transform themselves. Their determination makes them formidable in any endeavor.',
      hi: 'वृश्चिक लग्न के जातक तीव्र, भावुक और गहरी समझ वाले होते हैं। उनमें असाधारण इच्छाशक्ति और खुद को बदलने की क्षमता होती है। उनका दृढ़ संकल्प उन्हें किसी भी प्रयास में दुर्जेय बनाता है।'
    },
    strengths: {
      en: ['Determination', 'Intuition', 'Research ability', 'Loyalty', 'Transformative power'],
      hi: ['दृढ़ संकल्प', 'अंतर्ज्ञान', 'शोध क्षमता', 'वफादारी', 'परिवर्तनकारी शक्ति']
    },
    weaknesses: {
      en: ['Jealousy', 'Secretiveness', 'Vindictiveness', 'Obsession', 'Controlling behavior'],
      hi: ['ईर्ष्या', 'गोपनीयता', 'प्रतिशोध', 'जुनून', 'नियंत्रण करने वाला व्यवहार']
    },
    career: {
      en: ['Research', 'Medicine/Surgery', 'Investigation', 'Psychology', 'Occult Sciences', 'Finance'],
      hi: ['शोध', 'चिकित्सा/सर्जरी', 'जांच', 'मनोविज्ञान', 'गुप्त विज्ञान', 'वित्त']
    },
    health: {
      en: 'Prone to reproductive system issues, infections, and chronic conditions. Mental and emotional health needs attention.',
      hi: 'प्रजनन प्रणाली की समस्या, संक्रमण और पुरानी बीमारियों की संभावना। मानसिक और भावनात्मक स्वास्थ्य पर ध्यान दें।'
    },
    relationships: {
      en: 'Deeply passionate and committed. They need complete loyalty and can be possessive but are fiercely protective of loved ones.',
      hi: 'गहरे भावुक और प्रतिबद्ध। उन्हें पूर्ण वफादारी की जरूरत होती है और वे अधिकार भाव रख सकते हैं लेकिन प्रियजनों की कड़ी सुरक्षा करते हैं।'
    }
  },
  // Sagittarius Lagna (Dhanu)
  {
    sign: 8,
    lord: 'Jupiter',
    element: { en: 'Fire', hi: 'अग्नि' },
    quality: { en: 'Mutable', hi: 'द्विस्वभाव' },
    bodyPart: 'Hips, Thighs',
    gemstone: 'Yellow Sapphire',
    luckyColor: { en: 'Yellow, Orange', hi: 'पीला, नारंगी' },
    luckyDay: { en: 'Thursday', hi: 'गुरुवार' },
    luckyNumber: [3, 12],
    physicalTraits: {
      en: ['Tall stature', 'Athletic build', 'Bright eyes', 'Large forehead', 'Strong thighs'],
      hi: ['लंबा कद', 'एथलेटिक बनावट', 'चमकदार आंखें', 'बड़ा माथा', 'मजबूत जांघें']
    },
    personality: {
      en: 'Sagittarius Lagna natives are optimistic, philosophical, and adventurous. They have a love for learning and travel, and seek meaning in life. Their enthusiasm and honesty inspire others.',
      hi: 'धनु लग्न के जातक आशावादी, दार्शनिक और साहसी होते हैं। उन्हें सीखने और यात्रा से प्यार है और जीवन में अर्थ खोजते हैं। उनका उत्साह और ईमानदारी दूसरों को प्रेरित करती है।'
    },
    strengths: {
      en: ['Optimism', 'Wisdom', 'Honesty', 'Adventure spirit', 'Generosity'],
      hi: ['आशावाद', 'ज्ञान', 'ईमानदारी', 'साहसिक भावना', 'उदारता']
    },
    weaknesses: {
      en: ['Restlessness', 'Over-confidence', 'Bluntness', 'Irresponsibility', 'Exaggeration'],
      hi: ['बेचैनी', 'अति-आत्मविश्वास', 'स्पष्टवादिता', 'गैर-जिम्मेदारी', 'अतिशयोक्ति']
    },
    career: {
      en: ['Teaching', 'Philosophy/Religion', 'Law', 'Travel Industry', 'Publishing', 'Sports'],
      hi: ['शिक्षण', 'दर्शन/धर्म', 'कानून', 'यात्रा उद्योग', 'प्रकाशन', 'खेल']
    },
    health: {
      en: 'Generally robust but prone to hip and thigh problems, liver issues, and weight gain. Should moderate indulgence.',
      hi: 'आम तौर पर मजबूत लेकिन कूल्हे और जांघ की समस्या, यकृत की समस्या और वजन बढ़ने की संभावना। संयम बरतें।'
    },
    relationships: {
      en: 'Freedom-loving but loyal. They need partners who share their adventurous spirit and intellectual interests.',
      hi: 'स्वतंत्रता-प्रेमी लेकिन वफादार। उन्हें ऐसे साथी की जरूरत है जो उनकी साहसिक भावना और बौद्धिक रुचियों को साझा करे।'
    }
  },
  // Capricorn Lagna (Makar)
  {
    sign: 9,
    lord: 'Saturn',
    element: { en: 'Earth', hi: 'पृथ्वी' },
    quality: { en: 'Cardinal', hi: 'चर' },
    bodyPart: 'Knees, Bones',
    gemstone: 'Blue Sapphire',
    luckyColor: { en: 'Blue, Black', hi: 'नीला, काला' },
    luckyDay: { en: 'Saturday', hi: 'शनिवार' },
    luckyNumber: [8, 17],
    physicalTraits: {
      en: ['Lean build', 'Prominent features', 'Serious expression', 'Strong bones', 'Ages well'],
      hi: ['दुबला शरीर', 'प्रमुख नाक-नक्श', 'गंभीर भाव', 'मजबूत हड्डियां', 'उम्र के साथ बेहतर']
    },
    personality: {
      en: 'Capricorn Lagna natives are ambitious, disciplined, and practical. They have a strong sense of responsibility and work hard to achieve their goals. Their patience and perseverance lead to success over time.',
      hi: 'मकर लग्न के जातक महत्वाकांक्षी, अनुशासित और व्यावहारिक होते हैं। उनमें जिम्मेदारी की मजबूत भावना होती है और अपने लक्ष्यों को प्राप्त करने के लिए कड़ी मेहनत करते हैं। उनका धैर्य और दृढ़ता समय के साथ सफलता दिलाती है।'
    },
    strengths: {
      en: ['Ambition', 'Discipline', 'Responsibility', 'Patience', 'Organizational skills'],
      hi: ['महत्वाकांक्षा', 'अनुशासन', 'जिम्मेदारी', 'धैर्य', 'संगठनात्मक कौशल']
    },
    weaknesses: {
      en: ['Pessimism', 'Workaholic tendencies', 'Rigidity', 'Coldness', 'Fear of failure'],
      hi: ['निराशावाद', 'कार्यशील प्रवृत्ति', 'कठोरता', 'शीतलता', 'असफलता का डर']
    },
    career: {
      en: ['Government', 'Management', 'Engineering', 'Real Estate', 'Banking', 'Administration'],
      hi: ['सरकारी नौकरी', 'प्रबंधन', 'इंजीनियरिंग', 'रियल एस्टेट', 'बैंकिंग', 'प्रशासन']
    },
    health: {
      en: 'Prone to bone and joint problems, knee issues, and skin conditions. Health often improves with age.',
      hi: 'हड्डी और जोड़ों की समस्या, घुटने की समस्या और त्वचा की समस्या की संभावना। उम्र के साथ स्वास्थ्य अक्सर बेहतर होता है।'
    },
    relationships: {
      en: 'Serious and committed partners. They may take time to open up but are loyal and dependable once committed.',
      hi: 'गंभीर और प्रतिबद्ध साथी। खुलने में समय ले सकते हैं लेकिन प्रतिबद्ध होने पर वफादार और भरोसेमंद होते हैं।'
    }
  },
  // Aquarius Lagna (Kumbh)
  {
    sign: 10,
    lord: 'Saturn',
    element: { en: 'Air', hi: 'वायु' },
    quality: { en: 'Fixed', hi: 'स्थिर' },
    bodyPart: 'Ankles, Calves',
    gemstone: 'Blue Sapphire',
    luckyColor: { en: 'Blue, Electric Blue', hi: 'नीला, बिजली नीला' },
    luckyDay: { en: 'Saturday', hi: 'शनिवार' },
    luckyNumber: [4, 8],
    physicalTraits: {
      en: ['Tall and well-built', 'Handsome features', 'Bright eyes', 'Strong calves', 'Unique appearance'],
      hi: ['लंबा और सुगठित', 'सुंदर नाक-नक्श', 'चमकदार आंखें', 'मजबूत पिंडलियां', 'अनोखी दिखावट']
    },
    personality: {
      en: 'Aquarius Lagna natives are innovative, humanitarian, and independent thinkers. They have progressive ideas and a desire to improve society. Their originality and friendly nature attract many.',
      hi: 'कुंभ लग्न के जातक नवोन्मेषी, मानवतावादी और स्वतंत्र विचारक होते हैं। उनके प्रगतिशील विचार और समाज को बेहतर बनाने की इच्छा होती है। उनकी मौलिकता और मैत्रीपूर्ण स्वभाव कई लोगों को आकर्षित करता है।'
    },
    strengths: {
      en: ['Innovation', 'Humanitarianism', 'Independence', 'Originality', 'Friendliness'],
      hi: ['नवोन्मेष', 'मानवतावाद', 'स्वतंत्रता', 'मौलिकता', 'मित्रता']
    },
    weaknesses: {
      en: ['Detachment', 'Rebelliousness', 'Unpredictability', 'Eccentricity', 'Emotional distance'],
      hi: ['अलगाव', 'विद्रोही प्रवृत्ति', 'अप्रत्याशितता', 'विलक्षणता', 'भावनात्मक दूरी']
    },
    career: {
      en: ['Technology', 'Social Work', 'Science', 'Aviation', 'Research', 'Humanitarian Work'],
      hi: ['प्रौद्योगिकी', 'समाज सेवा', 'विज्ञान', 'विमानन', 'शोध', 'मानवतावादी कार्य']
    },
    health: {
      en: 'Prone to circulatory problems, ankle issues, and nervous conditions. Mental stress can affect physical health.',
      hi: 'रक्त परिसंचरण की समस्या, टखने की समस्या और तंत्रिका संबंधी समस्या की संभावना। मानसिक तनाव शारीरिक स्वास्थ्य को प्रभावित कर सकता है।'
    },
    relationships: {
      en: 'Friendly but need space. They value intellectual connection and shared ideals over emotional intensity.',
      hi: 'मैत्रीपूर्ण लेकिन जगह की जरूरत होती है। वे भावनात्मक तीव्रता से अधिक बौद्धिक संबंध और साझा आदर्शों को महत्व देते हैं।'
    }
  },
  // Pisces Lagna (Meen)
  {
    sign: 11,
    lord: 'Jupiter',
    element: { en: 'Water', hi: 'जल' },
    quality: { en: 'Mutable', hi: 'द्विस्वभाव' },
    bodyPart: 'Feet',
    gemstone: 'Yellow Sapphire',
    luckyColor: { en: 'Yellow, Sea Green', hi: 'पीला, समुद्री हरा' },
    luckyDay: { en: 'Thursday', hi: 'गुरुवार' },
    luckyNumber: [3, 7, 12],
    physicalTraits: {
      en: ['Soft features', 'Dreamy eyes', 'Medium height', 'Tends to be plump', 'Small feet'],
      hi: ['कोमल नाक-नक्श', 'स्वप्निल आंखें', 'मध्यम कद', 'भरा हुआ शरीर', 'छोटे पैर']
    },
    personality: {
      en: 'Pisces Lagna natives are intuitive, compassionate, and spiritually inclined. They have rich imagination and artistic talents. Their empathy and kindness make them excellent healers and counselors.',
      hi: 'मीन लग्न के जातक सहज ज्ञानी, दयालु और आध्यात्मिक रूप से झुकाव वाले होते हैं। उनमें समृद्ध कल्पनाशीलता और कलात्मक प्रतिभा होती है। उनकी सहानुभूति और दयालुता उन्हें उत्कृष्ट चिकित्सक और परामर्शदाता बनाती है।'
    },
    strengths: {
      en: ['Intuition', 'Compassion', 'Creativity', 'Spirituality', 'Adaptability'],
      hi: ['अंतर्ज्ञान', 'करुणा', 'रचनात्मकता', 'आध्यात्मिकता', 'अनुकूलनशीलता']
    },
    weaknesses: {
      en: ['Escapism', 'Over-sensitivity', 'Indecisiveness', 'Victimhood mentality', 'Lack of boundaries'],
      hi: ['पलायनवाद', 'अति-संवेदनशीलता', 'अनिर्णय', 'पीड़ित मानसिकता', 'सीमाओं की कमी']
    },
    career: {
      en: ['Art/Music', 'Healthcare', 'Spirituality', 'Photography', 'Marine Industry', 'Charity Work'],
      hi: ['कला/संगीत', 'स्वास्थ्य सेवा', 'आध्यात्मिकता', 'फोटोग्राफी', 'समुद्री उद्योग', 'दान कार्य']
    },
    health: {
      en: 'Prone to foot problems, immune system issues, and addiction tendencies. Need regular rest and spiritual practices.',
      hi: 'पैर की समस्या, प्रतिरक्षा प्रणाली की समस्या और नशे की प्रवृत्ति की संभावना। नियमित आराम और आध्यात्मिक अभ्यास की जरूरत।'
    },
    relationships: {
      en: 'Romantic and devoted. They seek soulmate connections and can be self-sacrificing in love.',
      hi: 'रोमांटिक और समर्पित। वे आत्मा के साथी संबंध चाहते हैं और प्यार में आत्म-बलिदान कर सकते हैं।'
    }
  }
];

/**
 * Get Lagna meaning by sign index
 */
export function getLagnaMeaning(signIndex: number): LagnaMeaning {
  return LAGNA_MEANINGS[signIndex % 12];
}
