/**
 * Mahadasha (Planetary Period) Meanings and Interpretations
 *
 * Each planet's Mahadasha brings specific themes and influences
 * based on the planet's nature and significations.
 */

export interface MahadashaMeaning {
  planet: string;
  duration: number; // years
  generalTheme: { en: string; hi: string };
  positiveEffects: { en: string[]; hi: string[] };
  challenges: { en: string[]; hi: string[] };
  career: { en: string; hi: string };
  relationships: { en: string; hi: string };
  health: { en: string; hi: string };
  spirituality: { en: string; hi: string };
  remedies: { en: string[]; hi: string[] };
}

export const MAHADASHA_MEANINGS: Record<string, MahadashaMeaning> = {
  sun: {
    planet: 'sun',
    duration: 6,
    generalTheme: {
      en: 'The Sun Mahadasha brings focus on authority, recognition, and self-expression. It is a period of illumination where one\'s true potential can shine.',
      hi: 'सूर्य महादशा में अधिकार, मान्यता और आत्म-अभिव्यक्ति पर ध्यान केंद्रित होता है। यह एक ऐसा समय है जब व्यक्ति की वास्तविक क्षमता चमक सकती है।'
    },
    positiveEffects: {
      en: ['Recognition and fame', 'Government favors', 'Leadership opportunities', 'Improved health vitality', 'Career advancement', 'Father figure support'],
      hi: ['मान्यता और प्रसिद्धि', 'सरकारी कृपा', 'नेतृत्व के अवसर', 'स्वास्थ्य में सुधार', 'करियर में उन्नति', 'पिता का सहयोग']
    },
    challenges: {
      en: ['Ego conflicts', 'Strained relations with authority', 'Health issues related to heart/eyes', 'Pride causing problems', 'Separation from father'],
      hi: ['अहंकार के टकराव', 'अधिकारियों से तनाव', 'हृदय/आंखों से संबंधित स्वास्थ्य समस्याएं', 'घमंड से समस्याएं', 'पिता से दूरी']
    },
    career: {
      en: 'Excellent for government jobs, politics, administration, medicine, and leadership roles. Period of professional recognition and advancement.',
      hi: 'सरकारी नौकरी, राजनीति, प्रशासन, चिकित्सा और नेतृत्व भूमिकाओं के लिए उत्कृष्ट। पेशेवर मान्यता और उन्नति का समय।'
    },
    relationships: {
      en: 'Focus on self can strain relationships. Best to maintain humility and consider others\' perspectives.',
      hi: 'खुद पर ध्यान से रिश्तों में तनाव आ सकता है। विनम्रता बनाए रखें और दूसरों के दृष्टिकोण पर विचार करें।'
    },
    health: {
      en: 'Watch for heart problems, eye issues, and bone-related ailments. Maintain a healthy ego and avoid overwork.',
      hi: 'हृदय की समस्या, आंखों की समस्या और हड्डी संबंधी बीमारियों पर ध्यान दें। स्वस्थ आत्मसम्मान बनाए रखें और अधिक काम से बचें।'
    },
    spirituality: {
      en: 'Good period for connecting with the divine masculine energy. Practice Surya Namaskar and honor your inner light.',
      hi: 'दिव्य पुरुष ऊर्जा से जुड़ने का अच्छा समय। सूर्य नमस्कार का अभ्यास करें और अपनी आंतरिक रोशनी का सम्मान करें।'
    },
    remedies: {
      en: ['Offer water to Sun at sunrise', 'Wear Ruby gemstone', 'Chant Aditya Hridayam', 'Honor father figures', 'Practice Surya Namaskar'],
      hi: ['सूर्योदय पर सूर्य को जल अर्पित करें', 'माणिक रत्न धारण करें', 'आदित्य हृदयम का जाप करें', 'पितृ पुरुषों का सम्मान करें', 'सूर्य नमस्कार का अभ्यास करें']
    }
  },
  moon: {
    planet: 'moon',
    duration: 10,
    generalTheme: {
      en: 'The Moon Mahadasha emphasizes emotions, nurturing, and domestic life. It is a period of mental and emotional growth with focus on home and family.',
      hi: 'चंद्र महादशा भावनाओं, पालन-पोषण और घरेलू जीवन पर जोर देती है। यह मानसिक और भावनात्मक विकास का समय है जिसमें घर और परिवार पर ध्यान होता है।'
    },
    positiveEffects: {
      en: ['Emotional fulfillment', 'Strong family bonds', 'Property acquisition', 'Public recognition', 'Creative expression', 'Mother\'s blessings'],
      hi: ['भावनात्मक संतुष्टि', 'मजबूत पारिवारिक बंधन', 'संपत्ति प्राप्ति', 'जन मान्यता', 'रचनात्मक अभिव्यक्ति', 'माता का आशीर्वाद']
    },
    challenges: {
      en: ['Mood fluctuations', 'Over-sensitivity', 'Water-related problems', 'Mental restlessness', 'Issues with mother'],
      hi: ['मिजाज में उतार-चढ़ाव', 'अति-संवेदनशीलता', 'जल संबंधी समस्याएं', 'मानसिक बेचैनी', 'माता से समस्याएं']
    },
    career: {
      en: 'Favorable for careers in healthcare, hospitality, real estate, liquids business, and public-facing roles.',
      hi: 'स्वास्थ्य सेवा, आतिथ्य, रियल एस्टेट, तरल पदार्थ व्यवसाय और जन-सामना भूमिकाओं में करियर के लिए अनुकूल।'
    },
    relationships: {
      en: 'Deep emotional connections possible. Strong bonds with mother and maternal relatives. Marriage may occur during this period.',
      hi: 'गहरे भावनात्मक संबंध संभव। माता और मातृ पक्ष से मजबूत बंधन। इस अवधि में विवाह हो सकता है।'
    },
    health: {
      en: 'Watch for mental health, digestive issues, cold and cough. Maintain emotional balance and stay hydrated.',
      hi: 'मानसिक स्वास्थ्य, पाचन समस्याओं, सर्दी-खांसी पर ध्यान दें। भावनात्मक संतुलन बनाए रखें और हाइड्रेटेड रहें।'
    },
    spirituality: {
      en: 'Excellent for meditation and developing intuition. Connect with divine feminine energy and practice mindfulness.',
      hi: 'ध्यान और अंतर्ज्ञान विकसित करने के लिए उत्कृष्ट। दिव्य स्त्री ऊर्जा से जुड़ें और माइंडफुलनेस का अभ्यास करें।'
    },
    remedies: {
      en: ['Wear Pearl', 'Worship Lord Shiva on Mondays', 'Respect and serve mother', 'Donate white items', 'Chant Chandra mantra'],
      hi: ['मोती धारण करें', 'सोमवार को भगवान शिव की पूजा करें', 'माता का सम्मान और सेवा करें', 'सफेद वस्तुएं दान करें', 'चंद्र मंत्र का जाप करें']
    }
  },
  mars: {
    planet: 'mars',
    duration: 7,
    generalTheme: {
      en: 'Mars Mahadasha brings energy, courage, and action. It is a dynamic period marked by physical activity, ambition, and sometimes conflicts.',
      hi: 'मंगल महादशा ऊर्जा, साहस और कार्यवाही लाती है। यह एक गतिशील अवधि है जो शारीरिक गतिविधि, महत्वाकांक्षा और कभी-कभी संघर्ष से चिह्नित है।'
    },
    positiveEffects: {
      en: ['Property acquisition', 'Victory over enemies', 'Physical strength', 'Leadership opportunities', 'Land gains', 'Brothers\' support'],
      hi: ['संपत्ति प्राप्ति', 'शत्रुओं पर विजय', 'शारीरिक शक्ति', 'नेतृत्व के अवसर', 'भूमि लाभ', 'भाइयों का सहयोग']
    },
    challenges: {
      en: ['Accidents and injuries', 'Legal disputes', 'Anger issues', 'Marital conflicts', 'Blood-related problems'],
      hi: ['दुर्घटनाएं और चोटें', 'कानूनी विवाद', 'क्रोध की समस्या', 'वैवाहिक विवाद', 'रक्त संबंधी समस्याएं']
    },
    career: {
      en: 'Excellent for military, police, engineering, surgery, sports, and real estate. Period of aggressive career growth.',
      hi: 'सेना, पुलिस, इंजीनियरिंग, सर्जरी, खेल और रियल एस्टेट के लिए उत्कृष्ट। आक्रामक करियर विकास का समय।'
    },
    relationships: {
      en: 'Passionate but potentially turbulent. Control anger and avoid hasty decisions in relationships.',
      hi: 'भावुक लेकिन संभावित रूप से उथल-पुथल। क्रोध पर नियंत्रण रखें और रिश्तों में जल्दबाजी में निर्णय लेने से बचें।'
    },
    health: {
      en: 'Watch for blood pressure, injuries, surgeries, and inflammatory conditions. Channel energy through physical exercise.',
      hi: 'रक्तचाप, चोटों, सर्जरी और सूजन की स्थितियों पर ध्यान दें। शारीरिक व्यायाम के माध्यम से ऊर्जा को चैनल करें।'
    },
    spirituality: {
      en: 'Practice discipline and channel energy constructively. Good for Hanuman worship and developing willpower.',
      hi: 'अनुशासन का अभ्यास करें और ऊर्जा को रचनात्मक रूप से चैनल करें। हनुमान पूजा और इच्छाशक्ति विकसित करने के लिए अच्छा।'
    },
    remedies: {
      en: ['Wear Red Coral', 'Worship Hanuman on Tuesdays', 'Donate red items', 'Practice anger management', 'Chant Mangal mantra'],
      hi: ['मूंगा धारण करें', 'मंगलवार को हनुमान जी की पूजा करें', 'लाल वस्तुएं दान करें', 'क्रोध प्रबंधन का अभ्यास करें', 'मंगल मंत्र का जाप करें']
    }
  },
  rahu: {
    planet: 'rahu',
    duration: 18,
    generalTheme: {
      en: 'Rahu Mahadasha is one of the longest and most transformative periods. It brings sudden changes, foreign connections, and unconventional paths.',
      hi: 'राहु महादशा सबसे लंबी और परिवर्तनकारी अवधियों में से एक है। यह अचानक बदलाव, विदेशी संबंध और अपरंपरागत रास्ते लाती है।'
    },
    positiveEffects: {
      en: ['Foreign opportunities', 'Sudden wealth', 'Technical skills', 'Mass fame', 'Unconventional success', 'Research breakthroughs'],
      hi: ['विदेशी अवसर', 'अचानक धन', 'तकनीकी कौशल', 'जन प्रसिद्धि', 'अपरंपरागत सफलता', 'शोध सफलताएं']
    },
    challenges: {
      en: ['Confusion and illusion', 'Addiction tendencies', 'Deception', 'Sudden downfalls', 'Mental disturbances', 'Family separation'],
      hi: ['भ्रम और माया', 'नशे की प्रवृत्ति', 'धोखा', 'अचानक पतन', 'मानसिक अशांति', 'पारिवारिक अलगाव']
    },
    career: {
      en: 'Excellent for IT, aviation, foreign trade, politics, occult sciences, and entertainment. Period of unconventional career paths.',
      hi: 'आईटी, विमानन, विदेश व्यापार, राजनीति, गुप्त विज्ञान और मनोरंजन के लिए उत्कृष्ट। अपरंपरागत करियर पथों का समय।'
    },
    relationships: {
      en: 'Unusual relationships possible. Guard against deception and maintain clarity in commitments.',
      hi: 'असामान्य रिश्ते संभव। धोखे से बचें और प्रतिबद्धताओं में स्पष्टता बनाए रखें।'
    },
    health: {
      en: 'Watch for mysterious ailments, mental health issues, and substance abuse. Regular detox and grounding practices help.',
      hi: 'रहस्यमय बीमारियों, मानसिक स्वास्थ्य समस्याओं और नशे के दुरुपयोग पर ध्यान दें। नियमित डिटॉक्स और ग्राउंडिंग अभ्यास मदद करते हैं।'
    },
    spirituality: {
      en: 'Good for tantra, occult studies, and breaking free from limitations. Practice discernment and seek authentic spiritual guidance.',
      hi: 'तंत्र, गुप्त अध्ययन और सीमाओं से मुक्त होने के लिए अच्छा। विवेक का अभ्यास करें और प्रामाणिक आध्यात्मिक मार्गदर्शन लें।'
    },
    remedies: {
      en: ['Wear Hessonite garnet', 'Worship Durga', 'Donate to outcasts', 'Avoid intoxicants', 'Chant Rahu mantra on Saturdays'],
      hi: ['गोमेद धारण करें', 'दुर्गा पूजा करें', 'दलितों को दान करें', 'नशे से बचें', 'शनिवार को राहु मंत्र का जाप करें']
    }
  },
  jupiter: {
    planet: 'jupiter',
    duration: 16,
    generalTheme: {
      en: 'Jupiter Mahadasha is one of the most auspicious periods. It brings wisdom, expansion, prosperity, and spiritual growth.',
      hi: 'गुरु महादशा सबसे शुभ अवधियों में से एक है। यह ज्ञान, विस्तार, समृद्धि और आध्यात्मिक विकास लाती है।'
    },
    positiveEffects: {
      en: ['Wealth and prosperity', 'Higher education', 'Spiritual growth', 'Children\'s blessings', 'Marriage', 'Guru\'s guidance'],
      hi: ['धन और समृद्धि', 'उच्च शिक्षा', 'आध्यात्मिक विकास', 'संतान का आशीर्वाद', 'विवाह', 'गुरु का मार्गदर्शन']
    },
    challenges: {
      en: ['Over-optimism', 'Weight gain', 'Liver issues', 'Complacency', 'Religious dogmatism'],
      hi: ['अति-आशावाद', 'वजन बढ़ना', 'यकृत की समस्या', 'आत्मसंतुष्टि', 'धार्मिक कट्टरता']
    },
    career: {
      en: 'Excellent for teaching, law, banking, counseling, and religious work. Period of professional expansion and recognition.',
      hi: 'शिक्षण, कानून, बैंकिंग, परामर्श और धार्मिक कार्य के लिए उत्कृष्ट। पेशेवर विस्तार और मान्यता का समय।'
    },
    relationships: {
      en: 'Harmonious relationships. Good for marriage, childbirth, and family expansion. Blessings from elders.',
      hi: 'सामंजस्यपूर्ण रिश्ते। विवाह, संतान प्राप्ति और परिवार विस्तार के लिए अच्छा। बड़ों का आशीर्वाद।'
    },
    health: {
      en: 'Generally good health but watch for weight, liver, and diabetes. Moderate diet and regular exercise advised.',
      hi: 'आम तौर पर अच्छा स्वास्थ्य लेकिन वजन, यकृत और मधुमेह पर ध्यान दें। संतुलित आहार और नियमित व्यायाम की सलाह।'
    },
    spirituality: {
      en: 'Most auspicious for spiritual advancement. Seek a guru, study scriptures, and practice devotion.',
      hi: 'आध्यात्मिक उन्नति के लिए सबसे शुभ। गुरु की खोज करें, शास्त्रों का अध्ययन करें और भक्ति का अभ्यास करें।'
    },
    remedies: {
      en: ['Wear Yellow Sapphire', 'Worship Vishnu on Thursdays', 'Respect teachers', 'Donate yellow items', 'Chant Guru mantra'],
      hi: ['पुखराज धारण करें', 'गुरुवार को विष्णु पूजा करें', 'शिक्षकों का सम्मान करें', 'पीली वस्तुएं दान करें', 'गुरु मंत्र का जाप करें']
    }
  },
  saturn: {
    planet: 'saturn',
    duration: 19,
    generalTheme: {
      en: 'Saturn Mahadasha is the longest period and teaches through discipline and hardship. It brings karmic lessons, delays, and ultimately lasting achievements.',
      hi: 'शनि महादशा सबसे लंबी अवधि है और अनुशासन और कठिनाई के माध्यम से सिखाती है। यह कर्म संबंधी सबक, देरी और अंततः स्थायी उपलब्धियां लाती है।'
    },
    positiveEffects: {
      en: ['Lasting achievements', 'Discipline and structure', 'Property gains', 'Justice served', 'Recognition after struggle', 'Spiritual maturity'],
      hi: ['स्थायी उपलब्धियां', 'अनुशासन और संरचना', 'संपत्ति लाभ', 'न्याय', 'संघर्ष के बाद मान्यता', 'आध्यात्मिक परिपक्वता']
    },
    challenges: {
      en: ['Delays and obstacles', 'Health issues', 'Depression', 'Career setbacks', 'Separation from loved ones', 'Financial difficulties'],
      hi: ['देरी और बाधाएं', 'स्वास्थ्य समस्याएं', 'अवसाद', 'करियर में झटके', 'प्रियजनों से अलगाव', 'आर्थिक कठिनाइयां']
    },
    career: {
      en: 'Suitable for government, judiciary, mining, iron/steel, and agriculture. Slow but steady career progress with hard work.',
      hi: 'सरकार, न्यायपालिका, खनन, लोहा/इस्पात और कृषि के लिए उपयुक्त। कड़ी मेहनत से धीमी लेकिन स्थिर करियर प्रगति।'
    },
    relationships: {
      en: 'Relationships tested through difficulties. Patience and commitment required. Elderly relatives may need care.',
      hi: 'कठिनाइयों से रिश्तों की परीक्षा। धैर्य और प्रतिबद्धता आवश्यक। बुजुर्ग रिश्तेदारों को देखभाल की जरूरत हो सकती है।'
    },
    health: {
      en: 'Watch for joint pain, chronic conditions, and depression. Regular exercise and maintaining routine helps.',
      hi: 'जोड़ों के दर्द, पुरानी बीमारियों और अवसाद पर ध्यान दें। नियमित व्यायाम और दिनचर्या बनाए रखना मदद करता है।'
    },
    spirituality: {
      en: 'Excellent for karma yoga and detachment. Learn through service, discipline, and accepting life\'s lessons.',
      hi: 'कर्म योग और वैराग्य के लिए उत्कृष्ट। सेवा, अनुशासन और जीवन के पाठों को स्वीकार करके सीखें।'
    },
    remedies: {
      en: ['Wear Blue Sapphire (after testing)', 'Worship Hanuman on Saturdays', 'Serve elderly and disabled', 'Donate black items', 'Chant Shani mantra'],
      hi: ['नीलम धारण करें (परीक्षण के बाद)', 'शनिवार को हनुमान पूजा करें', 'बुजुर्गों और विकलांगों की सेवा करें', 'काली वस्तुएं दान करें', 'शनि मंत्र का जाप करें']
    }
  },
  mercury: {
    planet: 'mercury',
    duration: 17,
    generalTheme: {
      en: 'Mercury Mahadasha emphasizes intellect, communication, and commerce. It is a period of learning, networking, and mental agility.',
      hi: 'बुध महादशा बुद्धि, संचार और वाणिज्य पर जोर देती है। यह सीखने, नेटवर्किंग और मानसिक चपलता का समय है।'
    },
    positiveEffects: {
      en: ['Business success', 'Educational achievements', 'Communication skills', 'Travel opportunities', 'Analytical abilities', 'Networking gains'],
      hi: ['व्यापारिक सफलता', 'शैक्षिक उपलब्धियां', 'संचार कौशल', 'यात्रा के अवसर', 'विश्लेषणात्मक क्षमताएं', 'नेटवर्किंग लाभ']
    },
    challenges: {
      en: ['Nervous disorders', 'Skin issues', 'Speech problems', 'Indecisiveness', 'Scattered energy'],
      hi: ['तंत्रिका विकार', 'त्वचा की समस्या', 'वाणी की समस्या', 'अनिर्णय', 'बिखरी हुई ऊर्जा']
    },
    career: {
      en: 'Excellent for IT, writing, accounting, trading, teaching, and astrology. Period of intellectual and commercial growth.',
      hi: 'आईटी, लेखन, लेखांकन, व्यापार, शिक्षण और ज्योतिष के लिए उत्कृष्ट। बौद्धिक और वाणिज्यिक विकास का समय।'
    },
    relationships: {
      en: 'Good for forming friendships and professional networks. Communication key to relationship success.',
      hi: 'दोस्ती और पेशेवर नेटवर्क बनाने के लिए अच्छा। रिश्तों की सफलता के लिए संचार महत्वपूर्ण।'
    },
    health: {
      en: 'Watch for skin diseases, nervous disorders, and speech issues. Mental relaxation and skin care important.',
      hi: 'त्वचा रोग, तंत्रिका विकार और वाणी समस्याओं पर ध्यान दें। मानसिक विश्राम और त्वचा की देखभाल महत्वपूर्ण।'
    },
    spirituality: {
      en: 'Good for jnana yoga and intellectual spirituality. Study scriptures and develop discrimination.',
      hi: 'ज्ञान योग और बौद्धिक आध्यात्मिकता के लिए अच्छा। शास्त्रों का अध्ययन करें और विवेक विकसित करें।'
    },
    remedies: {
      en: ['Wear Emerald', 'Worship Vishnu on Wednesdays', 'Donate green items', 'Study and teach', 'Chant Budha mantra'],
      hi: ['पन्ना धारण करें', 'बुधवार को विष्णु पूजा करें', 'हरी वस्तुएं दान करें', 'अध्ययन और शिक्षण करें', 'बुध मंत्र का जाप करें']
    }
  },
  ketu: {
    planet: 'ketu',
    duration: 7,
    generalTheme: {
      en: 'Ketu Mahadasha brings spiritual transformation and detachment. It is a period of letting go, introspection, and liberation from material attachments.',
      hi: 'केतु महादशा आध्यात्मिक परिवर्तन और वैराग्य लाती है। यह त्याग, आत्मनिरीक्षण और भौतिक आसक्तियों से मुक्ति का समय है।'
    },
    positiveEffects: {
      en: ['Spiritual awakening', 'Moksha tendencies', 'Psychic abilities', 'Research success', 'Technical skills', 'Liberation from attachments'],
      hi: ['आध्यात्मिक जागृति', 'मोक्ष की प्रवृत्ति', 'मानसिक क्षमताएं', 'शोध सफलता', 'तकनीकी कौशल', 'आसक्तियों से मुक्ति']
    },
    challenges: {
      en: ['Confusion and uncertainty', 'Health mysteries', 'Separation', 'Loss and detachment', 'Communication difficulties'],
      hi: ['भ्रम और अनिश्चितता', 'स्वास्थ्य रहस्य', 'अलगाव', 'हानि और वैराग्य', 'संचार कठिनाइयां']
    },
    career: {
      en: 'Good for research, spirituality, IT, healing, and occult sciences. Period of unconventional professional paths.',
      hi: 'शोध, आध्यात्मिकता, आईटी, चिकित्सा और गुप्त विज्ञान के लिए अच्छा। अपरंपरागत पेशेवर पथों का समय।'
    },
    relationships: {
      en: 'Detachment in relationships. May experience separation but also spiritual connections with partners.',
      hi: 'रिश्तों में वैराग्य। अलगाव का अनुभव हो सकता है लेकिन साथियों के साथ आध्यात्मिक संबंध भी।'
    },
    health: {
      en: 'Watch for mysterious ailments, digestive issues, and skin problems. Holistic and alternative medicine may help.',
      hi: 'रहस्यमय बीमारियों, पाचन समस्याओं और त्वचा की समस्याओं पर ध्यान दें। समग्र और वैकल्पिक चिकित्सा मदद कर सकती है।'
    },
    spirituality: {
      en: 'Most auspicious for moksha and spiritual liberation. Practice meditation, renunciation, and self-inquiry.',
      hi: 'मोक्ष और आध्यात्मिक मुक्ति के लिए सबसे शुभ। ध्यान, त्याग और आत्म-जांच का अभ्यास करें।'
    },
    remedies: {
      en: ['Wear Cat\'s Eye', 'Worship Ganesha', 'Donate to spiritual causes', 'Practice meditation', 'Chant Ketu mantra'],
      hi: ['लहसुनिया धारण करें', 'गणेश पूजा करें', 'आध्यात्मिक कार्यों में दान करें', 'ध्यान का अभ्यास करें', 'केतु मंत्र का जाप करें']
    }
  },
  venus: {
    planet: 'venus',
    duration: 20,
    generalTheme: {
      en: 'Venus Mahadasha is the longest and brings love, luxury, and artistic expression. It is a period of beauty, pleasure, and material comforts.',
      hi: 'शुक्र महादशा सबसे लंबी है और प्रेम, विलासिता और कलात्मक अभिव्यक्ति लाती है। यह सौंदर्य, आनंद और भौतिक सुखों का समय है।'
    },
    positiveEffects: {
      en: ['Marriage and romance', 'Wealth and luxury', 'Artistic success', 'Beautiful possessions', 'Social popularity', 'Vehicle and property'],
      hi: ['विवाह और रोमांस', 'धन और विलासिता', 'कलात्मक सफलता', 'सुंदर संपत्ति', 'सामाजिक लोकप्रियता', 'वाहन और संपत्ति']
    },
    challenges: {
      en: ['Over-indulgence', 'Relationship complications', 'Reproductive issues', 'Laziness', 'Diabetes and sugar issues'],
      hi: ['अति-भोग', 'रिश्तों में जटिलता', 'प्रजनन समस्याएं', 'आलस्य', 'मधुमेह और शुगर की समस्या']
    },
    career: {
      en: 'Excellent for arts, fashion, entertainment, luxury goods, and hospitality. Period of creative and financial success.',
      hi: 'कला, फैशन, मनोरंजन, विलासिता सामान और आतिथ्य के लिए उत्कृष्ट। रचनात्मक और वित्तीय सफलता का समय।'
    },
    relationships: {
      en: 'Best period for love and marriage. Harmonious relationships and deep romantic connections.',
      hi: 'प्रेम और विवाह के लिए सबसे अच्छा समय। सामंजस्यपूर्ण रिश्ते और गहरे रोमांटिक संबंध।'
    },
    health: {
      en: 'Watch for diabetes, reproductive issues, and kidney problems. Moderate pleasures and maintain active lifestyle.',
      hi: 'मधुमेह, प्रजनन समस्याओं और गुर्दे की समस्याओं पर ध्यान दें। सुखों में संयम और सक्रिय जीवनशैली बनाए रखें।'
    },
    spirituality: {
      en: 'Good for bhakti yoga and devotional practices. Develop appreciation for divine beauty and love.',
      hi: 'भक्ति योग और भक्ति अभ्यास के लिए अच्छा। दिव्य सौंदर्य और प्रेम की सराहना विकसित करें।'
    },
    remedies: {
      en: ['Wear Diamond', 'Worship Lakshmi on Fridays', 'Donate white items', 'Respect women', 'Chant Shukra mantra'],
      hi: ['हीरा धारण करें', 'शुक्रवार को लक्ष्मी पूजा करें', 'सफेद वस्तुएं दान करें', 'महिलाओं का सम्मान करें', 'शुक्र मंत्र का जाप करें']
    }
  }
};

/**
 * Get Mahadasha meaning by planet ID
 */
export function getMahadashaMeaning(planetId: string): MahadashaMeaning | null {
  return MAHADASHA_MEANINGS[planetId.toLowerCase()] || null;
}
