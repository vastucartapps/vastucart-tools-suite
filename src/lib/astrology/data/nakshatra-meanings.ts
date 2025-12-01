/**
 * Nakshatra Meanings and Interpretations
 * Detailed information for all 27 Nakshatras
 */

export interface NakshatraMeaning {
  index: number;
  name: { en: string; hi: string };
  lord: string;
  deity: string;
  symbol: string;
  animal: { en: string; hi: string };
  gana: { en: string; hi: string }; // Divine, Human, or Demon
  guna: { en: string; hi: string }; // Sattva, Rajas, Tamas
  caste: { en: string; hi: string };
  gender: 'male' | 'female';
  nadi: { en: string; hi: string }; // Vata, Pitta, Kapha
  element: { en: string; hi: string };
  bodyPart: { en: string; hi: string };
  direction: { en: string; hi: string };
  syllables: string[]; // Starting syllables for names
  luckyNumbers: number[];
  luckyColors: { en: string; hi: string }[];
  luckyGems: { en: string; hi: string }[];
  personality: { en: string; hi: string };
  strengths: { en: string[]; hi: string[] };
  weaknesses: { en: string[]; hi: string[] };
  career: { en: string[]; hi: string[] };
  health: { en: string; hi: string };
  compatibility: number[]; // Compatible nakshatra indices
}

export const NAKSHATRA_MEANINGS: NakshatraMeaning[] = [
  // 1. Ashwini (0°00' - 13°20' Aries)
  {
    index: 0,
    name: { en: 'Ashwini', hi: 'अश्विनी' },
    lord: 'Ketu',
    deity: 'Ashwini Kumaras (Divine Physicians)',
    symbol: 'Horse head',
    animal: { en: 'Male Horse', hi: 'घोड़ा' },
    gana: { en: 'Divine (Deva)', hi: 'देव' },
    guna: { en: 'Rajas', hi: 'रजस' },
    caste: { en: 'Vaishya (Merchant)', hi: 'वैश्य' },
    gender: 'male',
    nadi: { en: 'Vata', hi: 'वात' },
    element: { en: 'Earth', hi: 'पृथ्वी' },
    bodyPart: { en: 'Head, Cerebral', hi: 'सिर, मस्तिष्क' },
    direction: { en: 'South', hi: 'दक्षिण' },
    syllables: ['Chu', 'Che', 'Cho', 'La'],
    luckyNumbers: [7, 9],
    luckyColors: [{ en: 'Red', hi: 'लाल' }, { en: 'Orange', hi: 'नारंगी' }],
    luckyGems: [{ en: 'Cat\'s Eye', hi: 'लहसुनिया' }],
    personality: {
      en: 'Ashwini natives are natural healers with a quick mind and fast action. They are pioneers who love to initiate new ventures. Their spontaneity and enthusiasm make them natural leaders, though they can be impulsive.',
      hi: 'अश्विनी जातक प्राकृतिक चिकित्सक होते हैं जिनके पास तेज दिमाग और तेज कार्रवाई होती है। वे अग्रणी हैं जो नए उद्यम शुरू करना पसंद करते हैं। उनकी स्वाभाविकता और उत्साह उन्हें प्राकृतिक नेता बनाते हैं।'
    },
    strengths: {
      en: ['Quick intelligence', 'Healing abilities', 'Courage', 'Independent', 'Energetic'],
      hi: ['तेज बुद्धि', 'उपचार क्षमता', 'साहस', 'स्वतंत्र', 'ऊर्जावान']
    },
    weaknesses: {
      en: ['Impatient', 'Impulsive', 'Stubborn', 'Aggressive'],
      hi: ['अधीर', 'आवेगी', 'जिद्दी', 'आक्रामक']
    },
    career: {
      en: ['Medicine/Healthcare', 'Sports', 'Military', 'Racing', 'Entrepreneurship'],
      hi: ['चिकित्सा/स्वास्थ्य', 'खेल', 'सेना', 'रेसिंग', 'उद्यमिता']
    },
    health: {
      en: 'Prone to head injuries, migraines, and mental stress. Should protect the head region.',
      hi: 'सिर की चोट, माइग्रेन और मानसिक तनाव की संभावना। सिर के क्षेत्र की रक्षा करनी चाहिए।'
    },
    compatibility: [3, 6, 9, 12, 15, 18, 21, 24]
  },
  // 2. Bharani (13°20' - 26°40' Aries)
  {
    index: 1,
    name: { en: 'Bharani', hi: 'भरणी' },
    lord: 'Venus',
    deity: 'Yama (God of Death)',
    symbol: 'Yoni (Female reproductive organ)',
    animal: { en: 'Male Elephant', hi: 'हाथी' },
    gana: { en: 'Human (Manushya)', hi: 'मनुष्य' },
    guna: { en: 'Rajas', hi: 'रजस' },
    caste: { en: 'Mleccha (Outcaste)', hi: 'म्लेच्छ' },
    gender: 'female',
    nadi: { en: 'Pitta', hi: 'पित्त' },
    element: { en: 'Earth', hi: 'पृथ्वी' },
    bodyPart: { en: 'Head, Bottom of Feet', hi: 'सिर, पैर का तलवा' },
    direction: { en: 'West', hi: 'पश्चिम' },
    syllables: ['Li', 'Lu', 'Le', 'Lo'],
    luckyNumbers: [6, 9],
    luckyColors: [{ en: 'Blood Red', hi: 'गहरा लाल' }, { en: 'Black', hi: 'काला' }],
    luckyGems: [{ en: 'Diamond', hi: 'हीरा' }],
    personality: {
      en: 'Bharani natives carry the energy of transformation and rebirth. They are nurturing yet can be extreme in their approach. They possess strong willpower and can handle great responsibilities.',
      hi: 'भरणी जातक परिवर्तन और पुनर्जन्म की ऊर्जा रखते हैं। वे पोषण करने वाले हैं लेकिन अपने दृष्टिकोण में चरम हो सकते हैं। उनके पास मजबूत इच्छाशक्ति है।'
    },
    strengths: {
      en: ['Creative', 'Nurturing', 'Dutiful', 'Strong willpower', 'Transformative'],
      hi: ['रचनात्मक', 'पोषण करने वाला', 'कर्तव्यनिष्ठ', 'मजबूत इच्छाशक्ति', 'परिवर्तनकारी']
    },
    weaknesses: {
      en: ['Extreme nature', 'Jealous', 'Possessive', 'Judgmental'],
      hi: ['चरम स्वभाव', 'ईर्ष्यालु', 'अधिकार जताने वाला', 'आलोचनात्मक']
    },
    career: {
      en: ['Entertainment', 'Hospitality', 'Publishing', 'Tobacco/Liquor', 'Finance'],
      hi: ['मनोरंजन', 'आतिथ्य', 'प्रकाशन', 'तम्बाकू/शराब', 'वित्त']
    },
    health: {
      en: 'Prone to reproductive issues, diabetes, and face-related problems. Should manage stress well.',
      hi: 'प्रजनन समस्याएं, मधुमेह और चेहरे संबंधित समस्याओं की संभावना। तनाव को अच्छी तरह प्रबंधित करना चाहिए।'
    },
    compatibility: [1, 4, 7, 10, 13, 16, 19, 22, 25]
  },
  // 3. Krittika (26°40' Aries - 10°00' Taurus)
  {
    index: 2,
    name: { en: 'Krittika', hi: 'कृत्तिका' },
    lord: 'Sun',
    deity: 'Agni (Fire God)',
    symbol: 'Razor/Flame',
    animal: { en: 'Female Sheep', hi: 'भेड़' },
    gana: { en: 'Demon (Rakshasa)', hi: 'राक्षस' },
    guna: { en: 'Rajas', hi: 'रजस' },
    caste: { en: 'Brahmin (Priest)', hi: 'ब्राह्मण' },
    gender: 'female',
    nadi: { en: 'Kapha', hi: 'कफ' },
    element: { en: 'Fire', hi: 'अग्नि' },
    bodyPart: { en: 'Head, Eyes', hi: 'सिर, आंखें' },
    direction: { en: 'North', hi: 'उत्तर' },
    syllables: ['A', 'E', 'U', 'Ea'],
    luckyNumbers: [1, 3],
    luckyColors: [{ en: 'White', hi: 'सफेद' }, { en: 'Orange', hi: 'नारंगी' }],
    luckyGems: [{ en: 'Ruby', hi: 'माणिक' }],
    personality: {
      en: 'Krittika natives have a sharp and penetrating personality. They are truth-seekers with the ability to cut through illusions. They possess natural leadership and commanding presence.',
      hi: 'कृत्तिका जातकों का व्यक्तित्व तेज और भेदक होता है। वे सत्य के साधक हैं जो भ्रम को काटने की क्षमता रखते हैं। उनमें प्राकृतिक नेतृत्व और प्रभावशाली उपस्थिति होती है।'
    },
    strengths: {
      en: ['Leadership', 'Determination', 'Purifying nature', 'Truthful', 'Dignified'],
      hi: ['नेतृत्व', 'दृढ़ संकल्प', 'शुद्धिकरण स्वभाव', 'सत्यवादी', 'गरिमापूर्ण']
    },
    weaknesses: {
      en: ['Sharp tongue', 'Stubborn', 'Impatient', 'Critical'],
      hi: ['तीखी जुबान', 'जिद्दी', 'अधीर', 'आलोचनात्मक']
    },
    career: {
      en: ['Military', 'Police', 'Spiritual teacher', 'Chef/Cooking', 'Fire-related work'],
      hi: ['सेना', 'पुलिस', 'आध्यात्मिक शिक्षक', 'शेफ/खाना पकाना', 'अग्नि संबंधित कार्य']
    },
    health: {
      en: 'Prone to fevers, eye problems, and accidents. Should protect from fire and sharp objects.',
      hi: 'बुखार, आंखों की समस्याएं और दुर्घटनाओं की संभावना। आग और तेज वस्तुओं से बचाव करना चाहिए।'
    },
    compatibility: [2, 5, 8, 11, 14, 17, 20, 23, 26]
  },
  // 4. Rohini (10°00' - 23°20' Taurus)
  {
    index: 3,
    name: { en: 'Rohini', hi: 'रोहिणी' },
    lord: 'Moon',
    deity: 'Brahma (Creator)',
    symbol: 'Chariot/Ox Cart',
    animal: { en: 'Male Serpent', hi: 'सर्प' },
    gana: { en: 'Human (Manushya)', hi: 'मनुष्य' },
    guna: { en: 'Rajas', hi: 'रजस' },
    caste: { en: 'Shudra (Worker)', hi: 'शूद्र' },
    gender: 'female',
    nadi: { en: 'Kapha', hi: 'कफ' },
    element: { en: 'Earth', hi: 'पृथ्वी' },
    bodyPart: { en: 'Forehead, Ankles', hi: 'माथा, टखने' },
    direction: { en: 'East', hi: 'पूर्व' },
    syllables: ['O', 'Va', 'Vi', 'Vu'],
    luckyNumbers: [2, 4],
    luckyColors: [{ en: 'White', hi: 'सफेद' }, { en: 'Pink', hi: 'गुलाबी' }],
    luckyGems: [{ en: 'Pearl', hi: 'मोती' }],
    personality: {
      en: 'Rohini natives are charming, creative, and have natural artistic abilities. They are the most favored of Moon\'s nakshatras, blessed with beauty and grace. They enjoy material comforts and luxuries.',
      hi: 'रोहिणी जातक आकर्षक, रचनात्मक और प्राकृतिक कलात्मक क्षमताओं वाले होते हैं। वे चंद्रमा के नक्षत्रों में सबसे पसंदीदा हैं, सुंदरता और शालीनता से धन्य। वे भौतिक सुख-सुविधाओं का आनंद लेते हैं।'
    },
    strengths: {
      en: ['Attractive', 'Creative', 'Romantic', 'Prosperous', 'Artistic'],
      hi: ['आकर्षक', 'रचनात्मक', 'रोमांटिक', 'समृद्ध', 'कलात्मक']
    },
    weaknesses: {
      en: ['Materialistic', 'Possessive', 'Jealous', 'Indulgent'],
      hi: ['भौतिकवादी', 'अधिकार जताने वाला', 'ईर्ष्यालु', 'भोगी']
    },
    career: {
      en: ['Fashion', 'Beauty', 'Agriculture', 'Art/Music', 'Food industry'],
      hi: ['फैशन', 'सौंदर्य', 'कृषि', 'कला/संगीत', 'खाद्य उद्योग']
    },
    health: {
      en: 'Prone to throat problems, cold, and cough. Should maintain balanced diet.',
      hi: 'गले की समस्याएं, सर्दी और खांसी की संभावना। संतुलित आहार बनाए रखना चाहिए।'
    },
    compatibility: [0, 3, 6, 9, 12, 15, 18, 21, 24]
  },
  // 5. Mrigashira (23°20' Taurus - 6°40' Gemini)
  {
    index: 4,
    name: { en: 'Mrigashira', hi: 'मृगशिरा' },
    lord: 'Mars',
    deity: 'Soma (Moon God)',
    symbol: 'Deer Head',
    animal: { en: 'Female Serpent', hi: 'सर्पिणी' },
    gana: { en: 'Divine (Deva)', hi: 'देव' },
    guna: { en: 'Tamas', hi: 'तमस' },
    caste: { en: 'Kshatriya (Warrior)', hi: 'क्षत्रिय' },
    gender: 'male',
    nadi: { en: 'Pitta', hi: 'पित्त' },
    element: { en: 'Earth', hi: 'पृथ्वी' },
    bodyPart: { en: 'Eyes, Eyebrows', hi: 'आंखें, भौंहें' },
    direction: { en: 'South', hi: 'दक्षिण' },
    syllables: ['Ve', 'Vo', 'Ka', 'Ki'],
    luckyNumbers: [9, 2],
    luckyColors: [{ en: 'Silver Grey', hi: 'चांदी जैसा' }, { en: 'White', hi: 'सफेद' }],
    luckyGems: [{ en: 'Red Coral', hi: 'मूंगा' }],
    personality: {
      en: 'Mrigashira natives are gentle, curious seekers always searching for something. They have a wandering nature and love to explore. They are intelligent and have good communication skills.',
      hi: 'मृगशिरा जातक कोमल, जिज्ञासु खोजी होते हैं जो हमेशा कुछ खोजते रहते हैं। उनका स्वभाव भटकने वाला है और वे अन्वेषण करना पसंद करते हैं। वे बुद्धिमान हैं और अच्छे संवाद कौशल रखते हैं।'
    },
    strengths: {
      en: ['Intelligent', 'Curious', 'Gentle', 'Good communicator', 'Adaptable'],
      hi: ['बुद्धिमान', 'जिज्ञासु', 'कोमल', 'अच्छे वक्ता', 'अनुकूलनीय']
    },
    weaknesses: {
      en: ['Restless', 'Suspicious', 'Indecisive', 'Fickle-minded'],
      hi: ['बेचैन', 'संदेहशील', 'अनिर्णायक', 'चंचल']
    },
    career: {
      en: ['Research', 'Writing', 'Music', 'Travel industry', 'Real estate'],
      hi: ['अनुसंधान', 'लेखन', 'संगीत', 'यात्रा उद्योग', 'रियल एस्टेट']
    },
    health: {
      en: 'Prone to nervous disorders and skin problems. Should practice meditation.',
      hi: 'तंत्रिका विकार और त्वचा की समस्याओं की संभावना। ध्यान का अभ्यास करना चाहिए।'
    },
    compatibility: [1, 4, 7, 10, 13, 16, 19, 22, 25]
  },
  // 6. Ardra (6°40' - 20°00' Gemini)
  {
    index: 5,
    name: { en: 'Ardra', hi: 'आर्द्रा' },
    lord: 'Rahu',
    deity: 'Rudra (Storm God)',
    symbol: 'Teardrop/Diamond',
    animal: { en: 'Female Dog', hi: 'कुतिया' },
    gana: { en: 'Human (Manushya)', hi: 'मनुष्य' },
    guna: { en: 'Tamas', hi: 'तमस' },
    caste: { en: 'Butcher', hi: 'कसाई' },
    gender: 'female',
    nadi: { en: 'Vata', hi: 'वात' },
    element: { en: 'Water', hi: 'जल' },
    bodyPart: { en: 'Skull, Crown', hi: 'खोपड़ी, मुकुट' },
    direction: { en: 'West', hi: 'पश्चिम' },
    syllables: ['Ku', 'Gha', 'Ng', 'Na'],
    luckyNumbers: [4, 8],
    luckyColors: [{ en: 'Green', hi: 'हरा' }, { en: 'Grey', hi: 'भूरा' }],
    luckyGems: [{ en: 'Hessonite', hi: 'गोमेद' }],
    personality: {
      en: 'Ardra natives are intense and transformative. They go through many upheavals in life that ultimately lead to spiritual growth. They have sharp intellect and can be excellent researchers.',
      hi: 'आर्द्रा जातक तीव्र और परिवर्तनकारी होते हैं। वे जीवन में कई उथल-पुथल से गुजरते हैं जो अंततः आध्यात्मिक विकास की ओर ले जाती हैं। उनकी तीक्ष्ण बुद्धि होती है।'
    },
    strengths: {
      en: ['Intelligent', 'Deep thinker', 'Transformative', 'Research-oriented', 'Truthful'],
      hi: ['बुद्धिमान', 'गहन विचारक', 'परिवर्तनकारी', 'शोध-उन्मुख', 'सत्यवादी']
    },
    weaknesses: {
      en: ['Destructive', 'Critical', 'Arrogant', 'Ungrateful'],
      hi: ['विनाशकारी', 'आलोचनात्मक', 'अहंकारी', 'कृतघ्न']
    },
    career: {
      en: ['Science/Research', 'Medicine', 'Psychology', 'Technology', 'Investigation'],
      hi: ['विज्ञान/अनुसंधान', 'चिकित्सा', 'मनोविज्ञान', 'प्रौद्योगिकी', 'जांच']
    },
    health: {
      en: 'Prone to mental stress, throat problems, and skin issues. Should manage emotions.',
      hi: 'मानसिक तनाव, गले की समस्याएं और त्वचा की समस्याओं की संभावना। भावनाओं को प्रबंधित करना चाहिए।'
    },
    compatibility: [2, 5, 8, 11, 14, 17, 20, 23, 26]
  },
  // 7. Punarvasu (20°00' Gemini - 3°20' Cancer)
  {
    index: 6,
    name: { en: 'Punarvasu', hi: 'पुनर्वसु' },
    lord: 'Jupiter',
    deity: 'Aditi (Mother of Gods)',
    symbol: 'Bow and Quiver',
    animal: { en: 'Female Cat', hi: 'बिल्ली' },
    gana: { en: 'Divine (Deva)', hi: 'देव' },
    guna: { en: 'Sattva', hi: 'सत्व' },
    caste: { en: 'Vaishya (Merchant)', hi: 'वैश्य' },
    gender: 'male',
    nadi: { en: 'Vata', hi: 'वात' },
    element: { en: 'Water', hi: 'जल' },
    bodyPart: { en: 'Fingers, Nose', hi: 'उंगलियां, नाक' },
    direction: { en: 'North', hi: 'उत्तर' },
    syllables: ['Ke', 'Ko', 'Ha', 'Hi'],
    luckyNumbers: [3, 9],
    luckyColors: [{ en: 'Yellow', hi: 'पीला' }, { en: 'White', hi: 'सफेद' }],
    luckyGems: [{ en: 'Yellow Sapphire', hi: 'पुखराज' }],
    personality: {
      en: 'Punarvasu natives have the ability to return to their roots and regenerate. They are philosophical, optimistic, and have a nurturing nature. They believe in second chances and renewal.',
      hi: 'पुनर्वसु जातक अपनी जड़ों पर लौटने और पुनर्जीवित होने की क्षमता रखते हैं। वे दार्शनिक, आशावादी और पोषण करने वाले स्वभाव के होते हैं। वे दूसरे मौकों और नवीकरण में विश्वास करते हैं।'
    },
    strengths: {
      en: ['Philosophical', 'Forgiving', 'Nurturing', 'Optimistic', 'Spiritual'],
      hi: ['दार्शनिक', 'क्षमाशील', 'पोषण करने वाला', 'आशावादी', 'आध्यात्मिक']
    },
    weaknesses: {
      en: ['Fickle', 'Over-simplifying', 'Lack of ambition', 'Too trusting'],
      hi: ['चंचल', 'अति-सरलीकरण', 'महत्वाकांक्षा की कमी', 'बहुत भरोसेमंद']
    },
    career: {
      en: ['Teaching', 'Counseling', 'Publishing', 'Hospitality', 'Spiritual work'],
      hi: ['शिक्षण', 'परामर्श', 'प्रकाशन', 'आतिथ्य', 'आध्यात्मिक कार्य']
    },
    health: {
      en: 'Generally good health. Prone to lung and ear problems. Should practice breathing exercises.',
      hi: 'आम तौर पर अच्छा स्वास्थ्य। फेफड़े और कान की समस्याओं की संभावना। श्वास व्यायाम का अभ्यास करना चाहिए।'
    },
    compatibility: [0, 3, 6, 9, 12, 15, 18, 21, 24]
  },
  // 8. Pushya (3°20' - 16°40' Cancer)
  {
    index: 7,
    name: { en: 'Pushya', hi: 'पुष्य' },
    lord: 'Saturn',
    deity: 'Brihaspati (Guru of Gods)',
    symbol: 'Flower/Udder',
    animal: { en: 'Male Sheep', hi: 'भेड़ा' },
    gana: { en: 'Divine (Deva)', hi: 'देव' },
    guna: { en: 'Tamas', hi: 'तमस' },
    caste: { en: 'Kshatriya (Warrior)', hi: 'क्षत्रिय' },
    gender: 'male',
    nadi: { en: 'Pitta', hi: 'पित्त' },
    element: { en: 'Water', hi: 'जल' },
    bodyPart: { en: 'Mouth, Face', hi: 'मुंह, चेहरा' },
    direction: { en: 'East', hi: 'पूर्व' },
    syllables: ['Hu', 'He', 'Ho', 'Da'],
    luckyNumbers: [8, 1],
    luckyColors: [{ en: 'Blue', hi: 'नीला' }, { en: 'White', hi: 'सफेद' }],
    luckyGems: [{ en: 'Blue Sapphire', hi: 'नीलम' }],
    personality: {
      en: 'Pushya is considered the most auspicious nakshatra. These natives are nourishing, protective, and deeply spiritual. They are charitable and often work for the welfare of others.',
      hi: 'पुष्य को सबसे शुभ नक्षत्र माना जाता है। ये जातक पोषण करने वाले, सुरक्षात्मक और गहरे आध्यात्मिक होते हैं। वे दानी हैं और अक्सर दूसरों के कल्याण के लिए काम करते हैं।'
    },
    strengths: {
      en: ['Nourishing', 'Spiritual', 'Charitable', 'Hard-working', 'Protective'],
      hi: ['पोषण करने वाला', 'आध्यात्मिक', 'दानी', 'मेहनती', 'सुरक्षात्मक']
    },
    weaknesses: {
      en: ['Rigid', 'Intolerant', 'Fundamentalist', 'Selfish at times'],
      hi: ['कठोर', 'असहिष्णु', 'कट्टरपंथी', 'कभी-कभी स्वार्थी']
    },
    career: {
      en: ['Priesthood', 'Teaching', 'Government', 'Agriculture', 'Dairy'],
      hi: ['पुरोहित', 'शिक्षण', 'सरकार', 'कृषि', 'डेयरी']
    },
    health: {
      en: 'Generally strong constitution. Watch for digestive issues and skin problems.',
      hi: 'आम तौर पर मजबूत संविधान। पाचन समस्याओं और त्वचा की समस्याओं पर ध्यान दें।'
    },
    compatibility: [1, 4, 7, 10, 13, 16, 19, 22, 25]
  },
  // 9. Ashlesha (16°40' - 30°00' Cancer)
  {
    index: 8,
    name: { en: 'Ashlesha', hi: 'आश्लेषा' },
    lord: 'Mercury',
    deity: 'Nagas (Serpent Gods)',
    symbol: 'Coiled Serpent',
    animal: { en: 'Male Cat', hi: 'बिल्ला' },
    gana: { en: 'Demon (Rakshasa)', hi: 'राक्षस' },
    guna: { en: 'Sattva', hi: 'सत्व' },
    caste: { en: 'Mleccha (Outcaste)', hi: 'म्लेच्छ' },
    gender: 'female',
    nadi: { en: 'Kapha', hi: 'कफ' },
    element: { en: 'Water', hi: 'जल' },
    bodyPart: { en: 'Joints, Nails', hi: 'जोड़, नाखून' },
    direction: { en: 'South', hi: 'दक्षिण' },
    syllables: ['Di', 'Du', 'De', 'Do'],
    luckyNumbers: [5, 6],
    luckyColors: [{ en: 'Black-Red', hi: 'काला-लाल' }, { en: 'Dark Green', hi: 'गहरा हरा' }],
    luckyGems: [{ en: 'Emerald', hi: 'पन्ना' }],
    personality: {
      en: 'Ashlesha natives have hypnotic and mystical qualities. They are intelligent, intuitive, and possess hidden powers. They can be secretive and manipulative but also have great healing abilities.',
      hi: 'आश्लेषा जातकों में सम्मोहक और रहस्यमय गुण होते हैं। वे बुद्धिमान, सहज और छिपी शक्तियों के स्वामी हैं। वे गोपनीय और चालाक हो सकते हैं लेकिन उनमें महान उपचार क्षमता भी है।'
    },
    strengths: {
      en: ['Intuitive', 'Mystical', 'Intelligent', 'Leadership', 'Healing power'],
      hi: ['सहज', 'रहस्यमय', 'बुद्धिमान', 'नेतृत्व', 'उपचार शक्ति']
    },
    weaknesses: {
      en: ['Manipulative', 'Secretive', 'Cold', 'Deceptive'],
      hi: ['चालाक', 'गोपनीय', 'ठंडा', 'धोखेबाज']
    },
    career: {
      en: ['Politics', 'Psychology', 'Occult sciences', 'Pharmacy', 'Espionage'],
      hi: ['राजनीति', 'मनोविज्ञान', 'गुप्त विज्ञान', 'फार्मेसी', 'जासूसी']
    },
    health: {
      en: 'Prone to nervous disorders, joint pains, and stomach problems. Should avoid stress.',
      hi: 'तंत्रिका विकार, जोड़ों का दर्द और पेट की समस्याओं की संभावना। तनाव से बचना चाहिए।'
    },
    compatibility: [2, 5, 8, 11, 14, 17, 20, 23, 26]
  },
  // 10. Magha (0°00' - 13°20' Leo)
  {
    index: 9,
    name: { en: 'Magha', hi: 'मघा' },
    lord: 'Ketu',
    deity: 'Pitris (Ancestors)',
    symbol: 'Royal Throne',
    animal: { en: 'Male Rat', hi: 'चूहा' },
    gana: { en: 'Demon (Rakshasa)', hi: 'राक्षस' },
    guna: { en: 'Tamas', hi: 'तमस' },
    caste: { en: 'Shudra (Worker)', hi: 'शूद्र' },
    gender: 'female',
    nadi: { en: 'Kapha', hi: 'कफ' },
    element: { en: 'Water', hi: 'जल' },
    bodyPart: { en: 'Nose, Lips', hi: 'नाक, होंठ' },
    direction: { en: 'West', hi: 'पश्चिम' },
    syllables: ['Ma', 'Mi', 'Mu', 'Me'],
    luckyNumbers: [7, 1],
    luckyColors: [{ en: 'Ivory', hi: 'हाथी दांत' }, { en: 'Gold', hi: 'सोना' }],
    luckyGems: [{ en: 'Cat\'s Eye', hi: 'लहसुनिया' }],
    personality: {
      en: 'Magha natives possess royal qualities and ancestral pride. They have a commanding presence and respect traditions. They are ambitious and seek positions of power and authority.',
      hi: 'मघा जातकों में राजसी गुण और पूर्वजों का गर्व होता है। उनकी प्रभावशाली उपस्थिति है और वे परंपराओं का सम्मान करते हैं। वे महत्वाकांक्षी हैं और शक्ति और अधिकार की स्थिति चाहते हैं।'
    },
    strengths: {
      en: ['Regal', 'Ambitious', 'Respectful of tradition', 'Leadership', 'Generous'],
      hi: ['राजसी', 'महत्वाकांक्षी', 'परंपरा का सम्मान', 'नेतृत्व', 'उदार']
    },
    weaknesses: {
      en: ['Arrogant', 'Elitist', 'Harsh', 'Short-tempered'],
      hi: ['अहंकारी', 'अभिजात्यवादी', 'कठोर', 'जल्दी गुस्सा']
    },
    career: {
      en: ['Politics', 'Administration', 'Law', 'History', 'Archaeology'],
      hi: ['राजनीति', 'प्रशासन', 'कानून', 'इतिहास', 'पुरातत्व']
    },
    health: {
      en: 'Prone to heart problems and spine issues. Should maintain good posture.',
      hi: 'हृदय की समस्याओं और रीढ़ की समस्याओं की संभावना। अच्छी मुद्रा बनाए रखनी चाहिए।'
    },
    compatibility: [0, 3, 6, 9, 12, 15, 18, 21, 24]
  },
  // 11. Purva Phalguni (13°20' - 26°40' Leo)
  {
    index: 10,
    name: { en: 'Purva Phalguni', hi: 'पूर्व फाल्गुनी' },
    lord: 'Venus',
    deity: 'Bhaga (God of Fortune)',
    symbol: 'Front legs of bed/Hammock',
    animal: { en: 'Female Rat', hi: 'चुहिया' },
    gana: { en: 'Human (Manushya)', hi: 'मनुष्य' },
    guna: { en: 'Rajas', hi: 'रजस' },
    caste: { en: 'Brahmin (Priest)', hi: 'ब्राह्मण' },
    gender: 'female',
    nadi: { en: 'Pitta', hi: 'पित्त' },
    element: { en: 'Water', hi: 'जल' },
    bodyPart: { en: 'Right Hand, Genitals', hi: 'दायां हाथ, जननांग' },
    direction: { en: 'North', hi: 'उत्तर' },
    syllables: ['Mo', 'Ta', 'Ti', 'Tu'],
    luckyNumbers: [6, 9],
    luckyColors: [{ en: 'Light Brown', hi: 'हल्का भूरा' }, { en: 'Pink', hi: 'गुलाबी' }],
    luckyGems: [{ en: 'Diamond', hi: 'हीरा' }],
    personality: {
      en: 'Purva Phalguni natives are pleasure-loving and creative. They enjoy comforts, arts, and social gatherings. They are charming, affectionate, and often successful in entertainment.',
      hi: 'पूर्व फाल्गुनी जातक सुख-प्रेमी और रचनात्मक होते हैं। वे आराम, कला और सामाजिक समारोहों का आनंद लेते हैं। वे आकर्षक, स्नेही और अक्सर मनोरंजन में सफल होते हैं।'
    },
    strengths: {
      en: ['Creative', 'Charming', 'Generous', 'Affectionate', 'Artistic'],
      hi: ['रचनात्मक', 'आकर्षक', 'उदार', 'स्नेही', 'कलात्मक']
    },
    weaknesses: {
      en: ['Indulgent', 'Vain', 'Impulsive', 'Lazy'],
      hi: ['भोगी', 'घमंडी', 'आवेगी', 'आलसी']
    },
    career: {
      en: ['Entertainment', 'Arts', 'Music', 'Fashion', 'Photography'],
      hi: ['मनोरंजन', 'कला', 'संगीत', 'फैशन', 'फोटोग्राफी']
    },
    health: {
      en: 'Prone to heart problems and reproductive issues. Should maintain moderation.',
      hi: 'हृदय की समस्याओं और प्रजनन समस्याओं की संभावना। संयम बनाए रखना चाहिए।'
    },
    compatibility: [1, 4, 7, 10, 13, 16, 19, 22, 25]
  },
  // 12. Uttara Phalguni (26°40' Leo - 10°00' Virgo)
  {
    index: 11,
    name: { en: 'Uttara Phalguni', hi: 'उत्तर फाल्गुनी' },
    lord: 'Sun',
    deity: 'Aryaman (God of Patronage)',
    symbol: 'Back legs of bed',
    animal: { en: 'Male Cow/Bull', hi: 'बैल' },
    gana: { en: 'Human (Manushya)', hi: 'मनुष्य' },
    guna: { en: 'Rajas', hi: 'रजस' },
    caste: { en: 'Kshatriya (Warrior)', hi: 'क्षत्रिय' },
    gender: 'female',
    nadi: { en: 'Vata', hi: 'वात' },
    element: { en: 'Fire', hi: 'अग्नि' },
    bodyPart: { en: 'Left Hand, Genitals', hi: 'बायां हाथ, जननांग' },
    direction: { en: 'East', hi: 'पूर्व' },
    syllables: ['Te', 'To', 'Pa', 'Pi'],
    luckyNumbers: [1, 6],
    luckyColors: [{ en: 'Bright Blue', hi: 'चमकीला नीला' }, { en: 'Light Orange', hi: 'हल्का नारंगी' }],
    luckyGems: [{ en: 'Ruby', hi: 'माणिक' }],
    personality: {
      en: 'Uttara Phalguni natives are helpful and friendly. They have strong leadership qualities balanced with service orientation. They form lasting friendships and are known for their generosity.',
      hi: 'उत्तर फाल्गुनी जातक मददगार और मैत्रीपूर्ण होते हैं। उनमें सेवा भाव के साथ संतुलित मजबूत नेतृत्व गुण होते हैं। वे स्थायी मित्रता बनाते हैं और उदारता के लिए जाने जाते हैं।'
    },
    strengths: {
      en: ['Helpful', 'Generous', 'Friendly', 'Leadership', 'Responsible'],
      hi: ['मददगार', 'उदार', 'मैत्रीपूर्ण', 'नेतृत्व', 'जिम्मेदार']
    },
    weaknesses: {
      en: ['Stubborn', 'Controlling', 'Disdainful', 'Resentful'],
      hi: ['जिद्दी', 'नियंत्रण करने वाला', 'तिरस्कारपूर्ण', 'आक्रोशी']
    },
    career: {
      en: ['Social work', 'Counseling', 'Media', 'Writing', 'Healing'],
      hi: ['सामाजिक कार्य', 'परामर्श', 'मीडिया', 'लेखन', 'उपचार']
    },
    health: {
      en: 'Generally good health. Watch for lip and skin problems.',
      hi: 'आम तौर पर अच्छा स्वास्थ्य। होंठ और त्वचा की समस्याओं पर ध्यान दें।'
    },
    compatibility: [2, 5, 8, 11, 14, 17, 20, 23, 26]
  },
  // 13. Hasta (10°00' - 23°20' Virgo)
  {
    index: 12,
    name: { en: 'Hasta', hi: 'हस्त' },
    lord: 'Moon',
    deity: 'Savitar (Creative Sun)',
    symbol: 'Hand/Fist',
    animal: { en: 'Female Buffalo', hi: 'भैंस' },
    gana: { en: 'Divine (Deva)', hi: 'देव' },
    guna: { en: 'Rajas', hi: 'रजस' },
    caste: { en: 'Vaishya (Merchant)', hi: 'वैश्य' },
    gender: 'male',
    nadi: { en: 'Vata', hi: 'वात' },
    element: { en: 'Fire', hi: 'अग्नि' },
    bodyPart: { en: 'Hands, Fingers', hi: 'हाथ, उंगलियां' },
    direction: { en: 'South', hi: 'दक्षिण' },
    syllables: ['Pu', 'Sha', 'Na', 'Tha'],
    luckyNumbers: [2, 5],
    luckyColors: [{ en: 'Deep Green', hi: 'गहरा हरा' }, { en: 'White', hi: 'सफेद' }],
    luckyGems: [{ en: 'Pearl', hi: 'मोती' }],
    personality: {
      en: 'Hasta natives are skilled with their hands and have excellent craftsmanship. They are witty, humorous, and adaptable. They possess good business sense and are resourceful.',
      hi: 'हस्त जातक अपने हाथों में कुशल होते हैं और उत्कृष्ट शिल्प कौशल रखते हैं। वे चतुर, विनोदी और अनुकूलनीय होते हैं। उनमें अच्छी व्यापारिक समझ है और वे साधन संपन्न हैं।'
    },
    strengths: {
      en: ['Skilled', 'Clever', 'Resourceful', 'Humorous', 'Adaptable'],
      hi: ['कुशल', 'चतुर', 'साधन संपन्न', 'विनोदी', 'अनुकूलनीय']
    },
    weaknesses: {
      en: ['Cunning', 'Restless', 'Over-critical', 'Selfish'],
      hi: ['चालाक', 'बेचैन', 'अति-आलोचनात्मक', 'स्वार्थी']
    },
    career: {
      en: ['Crafts', 'Art', 'Comedy', 'Trade', 'Manufacturing'],
      hi: ['शिल्प', 'कला', 'कॉमेडी', 'व्यापार', 'विनिर्माण']
    },
    health: {
      en: 'Prone to skin allergies and cold. Should protect hands.',
      hi: 'त्वचा की एलर्जी और सर्दी की संभावना। हाथों की रक्षा करनी चाहिए।'
    },
    compatibility: [0, 3, 6, 9, 12, 15, 18, 21, 24]
  },
  // 14. Chitra (23°20' Virgo - 6°40' Libra)
  {
    index: 13,
    name: { en: 'Chitra', hi: 'चित्रा' },
    lord: 'Mars',
    deity: 'Vishwakarma (Divine Architect)',
    symbol: 'Bright Jewel/Pearl',
    animal: { en: 'Female Tiger', hi: 'बाघिन' },
    gana: { en: 'Demon (Rakshasa)', hi: 'राक्षस' },
    guna: { en: 'Tamas', hi: 'तमस' },
    caste: { en: 'Kshatriya (Warrior)', hi: 'क्षत्रिय' },
    gender: 'female',
    nadi: { en: 'Pitta', hi: 'पित्त' },
    element: { en: 'Fire', hi: 'अग्नि' },
    bodyPart: { en: 'Forehead, Neck', hi: 'माथा, गर्दन' },
    direction: { en: 'West', hi: 'पश्चिम' },
    syllables: ['Pe', 'Po', 'Ra', 'Ri'],
    luckyNumbers: [9, 6],
    luckyColors: [{ en: 'Black', hi: 'काला' }, { en: 'Multicolor', hi: 'बहुरंगी' }],
    luckyGems: [{ en: 'Red Coral', hi: 'मूंगा' }],
    personality: {
      en: 'Chitra natives are bright, beautiful, and creative. They have excellent aesthetic sense and are drawn to beauty in all forms. They are skilled artisans and possess magnetic personalities.',
      hi: 'चित्रा जातक चमकीले, सुंदर और रचनात्मक होते हैं। उनमें उत्कृष्ट सौंदर्य बोध है और वे हर रूप में सुंदरता की ओर आकर्षित होते हैं। वे कुशल कारीगर हैं और चुंबकीय व्यक्तित्व रखते हैं।'
    },
    strengths: {
      en: ['Creative', 'Beautiful', 'Artistic', 'Charismatic', 'Skilled'],
      hi: ['रचनात्मक', 'सुंदर', 'कलात्मक', 'करिश्माई', 'कुशल']
    },
    weaknesses: {
      en: ['Proud', 'Critical', 'Self-centered', 'Arrogant'],
      hi: ['गर्वीला', 'आलोचनात्मक', 'आत्मकेंद्रित', 'अहंकारी']
    },
    career: {
      en: ['Architecture', 'Fashion', 'Jewelry', 'Interior design', 'Engineering'],
      hi: ['वास्तुकला', 'फैशन', 'आभूषण', 'इंटीरियर डिजाइन', 'इंजीनियरिंग']
    },
    health: {
      en: 'Prone to kidney and bladder problems. Should drink plenty of water.',
      hi: 'गुर्दे और मूत्राशय की समस्याओं की संभावना। खूब पानी पीना चाहिए।'
    },
    compatibility: [1, 4, 7, 10, 13, 16, 19, 22, 25]
  },
  // 15. Swati (6°40' - 20°00' Libra)
  {
    index: 14,
    name: { en: 'Swati', hi: 'स्वाति' },
    lord: 'Rahu',
    deity: 'Vayu (Wind God)',
    symbol: 'Young Sprout/Coral',
    animal: { en: 'Male Buffalo', hi: 'भैंसा' },
    gana: { en: 'Divine (Deva)', hi: 'देव' },
    guna: { en: 'Tamas', hi: 'तमस' },
    caste: { en: 'Butcher', hi: 'कसाई' },
    gender: 'female',
    nadi: { en: 'Kapha', hi: 'कफ' },
    element: { en: 'Fire', hi: 'अग्नि' },
    bodyPart: { en: 'Chest, Heart', hi: 'छाती, हृदय' },
    direction: { en: 'North', hi: 'उत्तर' },
    syllables: ['Ru', 'Re', 'Ro', 'Ta'],
    luckyNumbers: [4, 7],
    luckyColors: [{ en: 'Black', hi: 'काला' }, { en: 'Coral Red', hi: 'मूंगा लाल' }],
    luckyGems: [{ en: 'Hessonite', hi: 'गोमेद' }],
    personality: {
      en: 'Swati natives are independent, flexible, and freedom-loving. Like the wind, they are restless but can achieve great heights. They are diplomatic, fair, and have strong moral compass.',
      hi: 'स्वाति जातक स्वतंत्र, लचीले और स्वतंत्रता-प्रेमी होते हैं। हवा की तरह, वे बेचैन हैं लेकिन बड़ी ऊंचाइयों को प्राप्त कर सकते हैं। वे कूटनीतिक, निष्पक्ष और मजबूत नैतिक दिशा वाले होते हैं।'
    },
    strengths: {
      en: ['Independent', 'Diplomatic', 'Flexible', 'Fair', 'Ethical'],
      hi: ['स्वतंत्र', 'कूटनीतिक', 'लचीला', 'निष्पक्ष', 'नैतिक']
    },
    weaknesses: {
      en: ['Restless', 'Unstable', 'Hidden anger', 'Shy'],
      hi: ['बेचैन', 'अस्थिर', 'छिपा हुआ गुस्सा', 'शर्मीला']
    },
    career: {
      en: ['Business', 'Trade', 'Law', 'Diplomacy', 'Travel'],
      hi: ['व्यापार', 'व्यापार', 'कानून', 'कूटनीति', 'यात्रा']
    },
    health: {
      en: 'Prone to skin problems and urinary issues. Should avoid cold drinks.',
      hi: 'त्वचा की समस्याओं और मूत्र संबंधी समस्याओं की संभावना। ठंडे पेय से बचना चाहिए।'
    },
    compatibility: [2, 5, 8, 11, 14, 17, 20, 23, 26]
  },
  // 16. Vishakha (20°00' Libra - 3°20' Scorpio)
  {
    index: 15,
    name: { en: 'Vishakha', hi: 'विशाखा' },
    lord: 'Jupiter',
    deity: 'Indra & Agni',
    symbol: 'Triumphal Archway/Potter\'s Wheel',
    animal: { en: 'Male Tiger', hi: 'बाघ' },
    gana: { en: 'Demon (Rakshasa)', hi: 'राक्षस' },
    guna: { en: 'Sattva', hi: 'सत्व' },
    caste: { en: 'Mleccha (Outcaste)', hi: 'म्लेच्छ' },
    gender: 'female',
    nadi: { en: 'Kapha', hi: 'कफ' },
    element: { en: 'Fire', hi: 'अग्नि' },
    bodyPart: { en: 'Arms, Breast', hi: 'बाहें, छाती' },
    direction: { en: 'East', hi: 'पूर्व' },
    syllables: ['Ti', 'Tu', 'Te', 'To'],
    luckyNumbers: [3, 9],
    luckyColors: [{ en: 'Golden Yellow', hi: 'सुनहरा पीला' }, { en: 'Red', hi: 'लाल' }],
    luckyGems: [{ en: 'Yellow Sapphire', hi: 'पुखराज' }],
    personality: {
      en: 'Vishakha natives are determined and goal-oriented. They have a single-pointed focus and will pursue their objectives relentlessly. They are ambitious, energetic, and can be jealous.',
      hi: 'विशाखा जातक दृढ़ और लक्ष्य-उन्मुख होते हैं। उनका एकाग्र फोकस है और वे अपने उद्देश्यों का निरंतर पीछा करेंगे। वे महत्वाकांक्षी, ऊर्जावान हैं और ईर्ष्यालु हो सकते हैं।'
    },
    strengths: {
      en: ['Determined', 'Goal-oriented', 'Ambitious', 'Intelligent', 'Persistent'],
      hi: ['दृढ़', 'लक्ष्य-उन्मुख', 'महत्वाकांक्षी', 'बुद्धिमान', 'दृढ़']
    },
    weaknesses: {
      en: ['Jealous', 'Frustrated', 'Restless', 'Quarrelsome'],
      hi: ['ईर्ष्यालु', 'निराश', 'बेचैन', 'झगड़ालू']
    },
    career: {
      en: ['Research', 'Politics', 'Military', 'Speech/Debate', 'Motivational speaker'],
      hi: ['अनुसंधान', 'राजनीति', 'सेना', 'भाषण/वाद-विवाद', 'प्रेरक वक्ता']
    },
    health: {
      en: 'Prone to breast problems, arms, and hormonal issues.',
      hi: 'छाती की समस्याएं, बाहें और हार्मोनल समस्याओं की संभावना।'
    },
    compatibility: [0, 3, 6, 9, 12, 15, 18, 21, 24]
  },
  // 17. Anuradha (3°20' - 16°40' Scorpio)
  {
    index: 16,
    name: { en: 'Anuradha', hi: 'अनुराधा' },
    lord: 'Saturn',
    deity: 'Mitra (God of Friendship)',
    symbol: 'Lotus/Staff',
    animal: { en: 'Female Deer/Hare', hi: 'हिरणी/खरगोश' },
    gana: { en: 'Divine (Deva)', hi: 'देव' },
    guna: { en: 'Tamas', hi: 'तमस' },
    caste: { en: 'Shudra (Worker)', hi: 'शूद्र' },
    gender: 'male',
    nadi: { en: 'Pitta', hi: 'पित्त' },
    element: { en: 'Fire', hi: 'अग्नि' },
    bodyPart: { en: 'Stomach, Breast', hi: 'पेट, छाती' },
    direction: { en: 'South', hi: 'दक्षिण' },
    syllables: ['Na', 'Ni', 'Nu', 'Ne'],
    luckyNumbers: [8, 4],
    luckyColors: [{ en: 'Reddish Brown', hi: 'लालिमा-भूरा' }, { en: 'Blue', hi: 'नीला' }],
    luckyGems: [{ en: 'Blue Sapphire', hi: 'नीलम' }],
    personality: {
      en: 'Anuradha natives are devoted and friendly. They excel at building and maintaining relationships. They have spiritual inclination and can balance material and spiritual worlds effectively.',
      hi: 'अनुराधा जातक समर्पित और मित्रवत होते हैं। वे संबंध बनाने और बनाए रखने में उत्कृष्ट हैं। उनमें आध्यात्मिक झुकाव है और वे भौतिक और आध्यात्मिक दुनिया को प्रभावी ढंग से संतुलित कर सकते हैं।'
    },
    strengths: {
      en: ['Devoted', 'Friendly', 'Cooperative', 'Organizational skills', 'Spiritual'],
      hi: ['समर्पित', 'मित्रवत', 'सहकारी', 'संगठनात्मक कौशल', 'आध्यात्मिक']
    },
    weaknesses: {
      en: ['Jealous', 'Controlling', 'Secretive', 'Vengeful'],
      hi: ['ईर्ष्यालु', 'नियंत्रण करने वाला', 'गोपनीय', 'प्रतिशोधी']
    },
    career: {
      en: ['Management', 'Diplomacy', 'Music', 'Mining', 'Organization'],
      hi: ['प्रबंधन', 'कूटनीति', 'संगीत', 'खनन', 'संगठन']
    },
    health: {
      en: 'Prone to stomach problems and hip issues. Should maintain regular eating habits.',
      hi: 'पेट की समस्याओं और कूल्हे की समस्याओं की संभावना। नियमित खाने की आदतें बनाए रखनी चाहिए।'
    },
    compatibility: [1, 4, 7, 10, 13, 16, 19, 22, 25]
  },
  // 18. Jyeshtha (16°40' - 30°00' Scorpio)
  {
    index: 17,
    name: { en: 'Jyeshtha', hi: 'ज्येष्ठा' },
    lord: 'Mercury',
    deity: 'Indra (King of Gods)',
    symbol: 'Circular Amulet/Earring',
    animal: { en: 'Male Deer/Hare', hi: 'हिरण/खरगोश' },
    gana: { en: 'Demon (Rakshasa)', hi: 'राक्षस' },
    guna: { en: 'Sattva', hi: 'सत्व' },
    caste: { en: 'Kshatriya (Warrior)', hi: 'क्षत्रिय' },
    gender: 'female',
    nadi: { en: 'Vata', hi: 'वात' },
    element: { en: 'Air', hi: 'वायु' },
    bodyPart: { en: 'Tongue, Neck', hi: 'जीभ, गर्दन' },
    direction: { en: 'West', hi: 'पश्चिम' },
    syllables: ['No', 'Ya', 'Yi', 'Yu'],
    luckyNumbers: [5, 3],
    luckyColors: [{ en: 'Cream', hi: 'क्रीम' }, { en: 'Green', hi: 'हरा' }],
    luckyGems: [{ en: 'Emerald', hi: 'पन्ना' }],
    personality: {
      en: 'Jyeshtha natives are eldest/senior in nature with protective instincts. They are courageous, generous, and often take on family responsibilities. They have leadership qualities but can be lonely.',
      hi: 'ज्येष्ठा जातक सुरक्षात्मक वृत्ति के साथ बड़े/वरिष्ठ स्वभाव के होते हैं। वे साहसी, उदार हैं और अक्सर पारिवारिक जिम्मेदारियां लेते हैं। उनमें नेतृत्व गुण हैं लेकिन अकेले हो सकते हैं।'
    },
    strengths: {
      en: ['Protective', 'Courageous', 'Generous', 'Responsible', 'Resourceful'],
      hi: ['सुरक्षात्मक', 'साहसी', 'उदार', 'जिम्मेदार', 'साधन संपन्न']
    },
    weaknesses: {
      en: ['Lonely', 'Hypocritical', 'Controlling', 'Jealous'],
      hi: ['अकेला', 'पाखंडी', 'नियंत्रण करने वाला', 'ईर्ष्यालु']
    },
    career: {
      en: ['Military', 'Police', 'Administration', 'Detective', 'Occult'],
      hi: ['सेना', 'पुलिस', 'प्रशासन', 'जासूस', 'गुप्त विज्ञान']
    },
    health: {
      en: 'Prone to muscular problems and reproductive issues. Should exercise regularly.',
      hi: 'मांसपेशियों की समस्याओं और प्रजनन समस्याओं की संभावना। नियमित व्यायाम करना चाहिए।'
    },
    compatibility: [2, 5, 8, 11, 14, 17, 20, 23, 26]
  },
  // 19. Mula (0°00' - 13°20' Sagittarius)
  {
    index: 18,
    name: { en: 'Mula', hi: 'मूल' },
    lord: 'Ketu',
    deity: 'Nirriti (Goddess of Destruction)',
    symbol: 'Tied Bunch of Roots',
    animal: { en: 'Male Dog', hi: 'कुत्ता' },
    gana: { en: 'Demon (Rakshasa)', hi: 'राक्षस' },
    guna: { en: 'Tamas', hi: 'तमस' },
    caste: { en: 'Butcher', hi: 'कसाई' },
    gender: 'male',
    nadi: { en: 'Vata', hi: 'वात' },
    element: { en: 'Air', hi: 'वायु' },
    bodyPart: { en: 'Feet, Left Thigh', hi: 'पैर, बायां जांघ' },
    direction: { en: 'North', hi: 'उत्तर' },
    syllables: ['Ye', 'Yo', 'Ba', 'Bi'],
    luckyNumbers: [7, 9],
    luckyColors: [{ en: 'Brown Yellow', hi: 'भूरा पीला' }, { en: 'Black', hi: 'काला' }],
    luckyGems: [{ en: 'Cat\'s Eye', hi: 'लहसुनिया' }],
    personality: {
      en: 'Mula natives are rooted in seeking truth and meaning. They often experience destruction before rebuilding something better. They are philosophical, investigative, and drawn to the occult.',
      hi: 'मूल जातक सत्य और अर्थ की खोज में निहित हैं। वे अक्सर बेहतर कुछ पुनर्निर्माण से पहले विनाश का अनुभव करते हैं। वे दार्शनिक, जांचपरक और गुप्त विज्ञान की ओर आकर्षित होते हैं।'
    },
    strengths: {
      en: ['Investigative', 'Philosophical', 'Rooted', 'Truth-seeking', 'Powerful'],
      hi: ['जांचपरक', 'दार्शनिक', 'जड़ वाला', 'सत्य-खोजी', 'शक्तिशाली']
    },
    weaknesses: {
      en: ['Destructive', 'Arrogant', 'Self-destructive', 'Stubborn'],
      hi: ['विनाशकारी', 'अहंकारी', 'आत्म-विनाशकारी', 'जिद्दी']
    },
    career: {
      en: ['Research', 'Medicine', 'Herbs/Natural healing', 'Mining', 'Spiritual work'],
      hi: ['अनुसंधान', 'चिकित्सा', 'जड़ी-बूटी/प्राकृतिक उपचार', 'खनन', 'आध्यात्मिक कार्य']
    },
    health: {
      en: 'Prone to hip and thigh problems. Should protect lower body.',
      hi: 'कूल्हे और जांघ की समस्याओं की संभावना। निचले शरीर की रक्षा करनी चाहिए।'
    },
    compatibility: [0, 3, 6, 9, 12, 15, 18, 21, 24]
  },
  // 20. Purva Ashadha (13°20' - 26°40' Sagittarius)
  {
    index: 19,
    name: { en: 'Purva Ashadha', hi: 'पूर्वाषाढ़ा' },
    lord: 'Venus',
    deity: 'Apas (Water God)',
    symbol: 'Elephant Tusk/Fan',
    animal: { en: 'Male Monkey', hi: 'बंदर' },
    gana: { en: 'Human (Manushya)', hi: 'मनुष्य' },
    guna: { en: 'Rajas', hi: 'रजस' },
    caste: { en: 'Brahmin (Priest)', hi: 'ब्राह्मण' },
    gender: 'female',
    nadi: { en: 'Pitta', hi: 'पित्त' },
    element: { en: 'Air', hi: 'वायु' },
    bodyPart: { en: 'Right Thigh, Back', hi: 'दायां जांघ, पीठ' },
    direction: { en: 'East', hi: 'पूर्व' },
    syllables: ['Bu', 'Dha', 'Bha', 'Da'],
    luckyNumbers: [6, 9],
    luckyColors: [{ en: 'Light Brown', hi: 'हल्का भूरा' }, { en: 'Black', hi: 'काला' }],
    luckyGems: [{ en: 'Diamond', hi: 'हीरा' }],
    personality: {
      en: 'Purva Ashadha natives are invincible warriors who cannot be defeated. They are proud, independent, and have excellent persuasive abilities. They love water and can achieve fame.',
      hi: 'पूर्वाषाढ़ा जातक अजेय योद्धा हैं जिन्हें पराजित नहीं किया जा सकता। वे गर्वीले, स्वतंत्र हैं और उनमें उत्कृष्ट प्रेरक क्षमता है। वे पानी से प्यार करते हैं और प्रसिद्धि प्राप्त कर सकते हैं।'
    },
    strengths: {
      en: ['Influential', 'Invincible', 'Persuasive', 'Independent', 'Creative'],
      hi: ['प्रभावशाली', 'अजेय', 'प्रेरक', 'स्वतंत्र', 'रचनात्मक']
    },
    weaknesses: {
      en: ['Proud', 'Stubborn', 'Aggressive', 'Over-confident'],
      hi: ['गर्वीला', 'जिद्दी', 'आक्रामक', 'अति-आत्मविश्वासी']
    },
    career: {
      en: ['Politics', 'Law', 'Media', 'Water-related work', 'Philosophy'],
      hi: ['राजनीति', 'कानून', 'मीडिया', 'जल संबंधित कार्य', 'दर्शन']
    },
    health: {
      en: 'Prone to thigh problems and cold-related issues. Should stay warm.',
      hi: 'जांघ की समस्याओं और सर्दी संबंधित समस्याओं की संभावना। गर्म रहना चाहिए।'
    },
    compatibility: [1, 4, 7, 10, 13, 16, 19, 22, 25]
  },
  // 21. Uttara Ashadha (26°40' Sagittarius - 10°00' Capricorn)
  {
    index: 20,
    name: { en: 'Uttara Ashadha', hi: 'उत्तराषाढ़ा' },
    lord: 'Sun',
    deity: 'Vishvedevas (Universal Gods)',
    symbol: 'Elephant Tusk/Small Cot',
    animal: { en: 'Male Mongoose', hi: 'नेवला' },
    gana: { en: 'Human (Manushya)', hi: 'मनुष्य' },
    guna: { en: 'Rajas', hi: 'रजस' },
    caste: { en: 'Kshatriya (Warrior)', hi: 'क्षत्रिय' },
    gender: 'female',
    nadi: { en: 'Kapha', hi: 'कफ' },
    element: { en: 'Air', hi: 'वायु' },
    bodyPart: { en: 'Thighs, Waist', hi: 'जांघ, कमर' },
    direction: { en: 'South', hi: 'दक्षिण' },
    syllables: ['Be', 'Bo', 'Ja', 'Ji'],
    luckyNumbers: [1, 4],
    luckyColors: [{ en: 'Copper', hi: 'तांबा' }, { en: 'Orange', hi: 'नारंगी' }],
    luckyGems: [{ en: 'Ruby', hi: 'माणिक' }],
    personality: {
      en: 'Uttara Ashadha natives achieve final victory after patience and perseverance. They are ethical, righteous, and have high standards. They are natural leaders with universal appeal.',
      hi: 'उत्तराषाढ़ा जातक धैर्य और दृढ़ता के बाद अंतिम विजय प्राप्त करते हैं। वे नैतिक, धर्मी हैं और उच्च मानक रखते हैं। वे सार्वभौमिक अपील के साथ प्राकृतिक नेता हैं।'
    },
    strengths: {
      en: ['Ethical', 'Patient', 'Victorious', 'Leadership', 'Universal values'],
      hi: ['नैतिक', 'धैर्यवान', 'विजयी', 'नेतृत्व', 'सार्वभौमिक मूल्य']
    },
    weaknesses: {
      en: ['Rigid', 'Uncompromising', 'Lonely', 'Apathetic'],
      hi: ['कठोर', 'असमझौतावादी', 'अकेला', 'उदासीन']
    },
    career: {
      en: ['Government', 'Law', 'Research', 'Pioneer work', 'Social reform'],
      hi: ['सरकार', 'कानून', 'अनुसंधान', 'अग्रणी कार्य', 'सामाजिक सुधार']
    },
    health: {
      en: 'Generally good health. Watch for stomach and skin problems.',
      hi: 'आम तौर पर अच्छा स्वास्थ्य। पेट और त्वचा की समस्याओं पर ध्यान दें।'
    },
    compatibility: [2, 5, 8, 11, 14, 17, 20, 23, 26]
  },
  // 22. Shravana (10°00' - 23°20' Capricorn)
  {
    index: 21,
    name: { en: 'Shravana', hi: 'श्रवण' },
    lord: 'Moon',
    deity: 'Vishnu (Preserver)',
    symbol: 'Three Footprints/Ear',
    animal: { en: 'Female Monkey', hi: 'बंदरिया' },
    gana: { en: 'Divine (Deva)', hi: 'देव' },
    guna: { en: 'Rajas', hi: 'रजस' },
    caste: { en: 'Mleccha (Outcaste)', hi: 'म्लेच्छ' },
    gender: 'male',
    nadi: { en: 'Kapha', hi: 'कफ' },
    element: { en: 'Air', hi: 'वायु' },
    bodyPart: { en: 'Ears, Genitals', hi: 'कान, जननांग' },
    direction: { en: 'West', hi: 'पश्चिम' },
    syllables: ['Ju', 'Je', 'Jo', 'Gha'],
    luckyNumbers: [2, 7],
    luckyColors: [{ en: 'Light Blue', hi: 'हल्का नीला' }, { en: 'White', hi: 'सफेद' }],
    luckyGems: [{ en: 'Pearl', hi: 'मोती' }],
    personality: {
      en: 'Shravana natives are excellent listeners and learners. They gather knowledge from all sources and are associated with preservation and traditional values. They are diplomatic and scholarly.',
      hi: 'श्रवण जातक उत्कृष्ट श्रोता और सीखने वाले होते हैं। वे सभी स्रोतों से ज्ञान एकत्र करते हैं और संरक्षण और पारंपरिक मूल्यों से जुड़े हैं। वे कूटनीतिक और विद्वान हैं।'
    },
    strengths: {
      en: ['Good listener', 'Learned', 'Traditional', 'Diplomatic', 'Scholarly'],
      hi: ['अच्छे श्रोता', 'विद्वान', 'पारंपरिक', 'कूटनीतिक', 'शास्त्रीय']
    },
    weaknesses: {
      en: ['Gossipy', 'Over-sensitive', 'Rigid', 'Jealous'],
      hi: ['गपशप करने वाला', 'अति-संवेदनशील', 'कठोर', 'ईर्ष्यालु']
    },
    career: {
      en: ['Teaching', 'Media', 'Music', 'Counseling', 'Travel'],
      hi: ['शिक्षण', 'मीडिया', 'संगीत', 'परामर्श', 'यात्रा']
    },
    health: {
      en: 'Prone to ear problems and skin issues. Should protect hearing.',
      hi: 'कान की समस्याओं और त्वचा की समस्याओं की संभावना। श्रवण की रक्षा करनी चाहिए।'
    },
    compatibility: [0, 3, 6, 9, 12, 15, 18, 21, 24]
  },
  // 23. Dhanishta (23°20' Capricorn - 6°40' Aquarius)
  {
    index: 22,
    name: { en: 'Dhanishta', hi: 'धनिष्ठा' },
    lord: 'Mars',
    deity: 'Eight Vasus (Gods of Abundance)',
    symbol: 'Drum (Mridanga)',
    animal: { en: 'Female Lion', hi: 'शेरनी' },
    gana: { en: 'Demon (Rakshasa)', hi: 'राक्षस' },
    guna: { en: 'Tamas', hi: 'तमस' },
    caste: { en: 'Kshatriya (Warrior)', hi: 'क्षत्रिय' },
    gender: 'female',
    nadi: { en: 'Pitta', hi: 'पित्त' },
    element: { en: 'Ether', hi: 'आकाश' },
    bodyPart: { en: 'Back, Anus', hi: 'पीठ, गुदा' },
    direction: { en: 'North', hi: 'उत्तर' },
    syllables: ['Ga', 'Gi', 'Gu', 'Ge'],
    luckyNumbers: [9, 8],
    luckyColors: [{ en: 'Silver Grey', hi: 'चांदी जैसा' }, { en: 'Blue', hi: 'नीला' }],
    luckyGems: [{ en: 'Red Coral', hi: 'मूंगा' }],
    personality: {
      en: 'Dhanishta natives are wealthy and famous. They are talented in music and dance, charitable and generous. They have good organizational skills and can accumulate wealth easily.',
      hi: 'धनिष्ठा जातक धनी और प्रसिद्ध होते हैं। वे संगीत और नृत्य में प्रतिभाशाली, दानी और उदार होते हैं। उनके पास अच्छे संगठनात्मक कौशल हैं और वे आसानी से धन जमा कर सकते हैं।'
    },
    strengths: {
      en: ['Wealthy', 'Musical', 'Charitable', 'Adventurous', 'Ambitious'],
      hi: ['धनी', 'संगीतमय', 'दानी', 'साहसी', 'महत्वाकांक्षी']
    },
    weaknesses: {
      en: ['Careless', 'Selfish', 'Aggressive', 'Argumentative'],
      hi: ['लापरवाह', 'स्वार्थी', 'आक्रामक', 'तर्कशील']
    },
    career: {
      en: ['Music/Dance', 'Real estate', 'Surgery', 'Sports', 'Military'],
      hi: ['संगीत/नृत्य', 'रियल एस्टेट', 'सर्जरी', 'खेल', 'सेना']
    },
    health: {
      en: 'Prone to cough, anemia, and limb injuries. Should take care during sports.',
      hi: 'खांसी, एनीमिया और अंग की चोटों की संभावना। खेल के दौरान सावधानी बरतनी चाहिए।'
    },
    compatibility: [1, 4, 7, 10, 13, 16, 19, 22, 25]
  },
  // 24. Shatabhisha (6°40' - 20°00' Aquarius)
  {
    index: 23,
    name: { en: 'Shatabhisha', hi: 'शतभिषा' },
    lord: 'Rahu',
    deity: 'Varuna (God of Cosmic Waters)',
    symbol: 'Empty Circle/1000 Flowers',
    animal: { en: 'Female Horse', hi: 'घोड़ी' },
    gana: { en: 'Demon (Rakshasa)', hi: 'राक्षस' },
    guna: { en: 'Tamas', hi: 'तमस' },
    caste: { en: 'Butcher', hi: 'कसाई' },
    gender: 'male',
    nadi: { en: 'Vata', hi: 'वात' },
    element: { en: 'Ether', hi: 'आकाश' },
    bodyPart: { en: 'Jaws, Right Thigh', hi: 'जबड़ा, दायां जांघ' },
    direction: { en: 'East', hi: 'पूर्व' },
    syllables: ['Go', 'Sa', 'Si', 'Su'],
    luckyNumbers: [4, 6],
    luckyColors: [{ en: 'Blue-Green', hi: 'नीला-हरा' }, { en: 'Dark', hi: 'गहरा' }],
    luckyGems: [{ en: 'Hessonite', hi: 'गोमेद' }],
    personality: {
      en: 'Shatabhisha natives are healers and truth-seekers. They are independent, mysterious, and have strong healing powers. They are interested in sciences, astrology, and hidden knowledge.',
      hi: 'शतभिषा जातक चिकित्सक और सत्य-खोजी होते हैं। वे स्वतंत्र, रहस्यमय हैं और उनमें मजबूत उपचार शक्ति है। वे विज्ञान, ज्योतिष और छिपे ज्ञान में रुचि रखते हैं।'
    },
    strengths: {
      en: ['Healing ability', 'Independent', 'Truthful', 'Scientific', 'Philosophical'],
      hi: ['उपचार क्षमता', 'स्वतंत्र', 'सत्यवादी', 'वैज्ञानिक', 'दार्शनिक']
    },
    weaknesses: {
      en: ['Secretive', 'Lonely', 'Harsh speech', 'Stubborn'],
      hi: ['गोपनीय', 'अकेला', 'कठोर वाणी', 'जिद्दी']
    },
    career: {
      en: ['Medicine', 'Astrology', 'Electricity', 'Aviation', 'Technology'],
      hi: ['चिकित्सा', 'ज्योतिष', 'बिजली', 'विमानन', 'प्रौद्योगिकी']
    },
    health: {
      en: 'Prone to heart problems and jaw/dental issues. Should manage stress.',
      hi: 'हृदय की समस्याओं और जबड़े/दांत की समस्याओं की संभावना। तनाव प्रबंधन करना चाहिए।'
    },
    compatibility: [2, 5, 8, 11, 14, 17, 20, 23, 26]
  },
  // 25. Purva Bhadrapada (20°00' Aquarius - 3°20' Pisces)
  {
    index: 24,
    name: { en: 'Purva Bhadrapada', hi: 'पूर्व भाद्रपद' },
    lord: 'Jupiter',
    deity: 'Aja Ekapada (One-Footed Goat)',
    symbol: 'Sword/Front of Funeral Cot',
    animal: { en: 'Male Lion', hi: 'शेर' },
    gana: { en: 'Human (Manushya)', hi: 'मनुष्य' },
    guna: { en: 'Sattva', hi: 'सत्व' },
    caste: { en: 'Brahmin (Priest)', hi: 'ब्राह्मण' },
    gender: 'male',
    nadi: { en: 'Vata', hi: 'वात' },
    element: { en: 'Ether', hi: 'आकाश' },
    bodyPart: { en: 'Left Thigh, Ribs', hi: 'बायां जांघ, पसलियां' },
    direction: { en: 'South', hi: 'दक्षिण' },
    syllables: ['Se', 'So', 'Da', 'Di'],
    luckyNumbers: [3, 9],
    luckyColors: [{ en: 'Silver', hi: 'चांदी' }, { en: 'Yellow', hi: 'पीला' }],
    luckyGems: [{ en: 'Yellow Sapphire', hi: 'पुखराज' }],
    personality: {
      en: 'Purva Bhadrapada natives are intense and passionate. They undergo transformation through fire and are drawn to esoteric knowledge. They are philosophical but can be extreme in their views.',
      hi: 'पूर्व भाद्रपद जातक तीव्र और भावुक होते हैं। वे अग्नि के माध्यम से परिवर्तन से गुजरते हैं और गूढ़ ज्ञान की ओर आकर्षित होते हैं। वे दार्शनिक हैं लेकिन अपने विचारों में चरम हो सकते हैं।'
    },
    strengths: {
      en: ['Passionate', 'Philosophical', 'Unique', 'Independent', 'Spiritual'],
      hi: ['भावुक', 'दार्शनिक', 'अनूठा', 'स्वतंत्र', 'आध्यात्मिक']
    },
    weaknesses: {
      en: ['Extreme', 'Cynical', 'Impulsive', 'Pessimistic'],
      hi: ['चरम', 'निंदक', 'आवेगी', 'निराशावादी']
    },
    career: {
      en: ['Astrology', 'Research', 'Metal work', 'Business', 'Mortuary'],
      hi: ['ज्योतिष', 'अनुसंधान', 'धातु कार्य', 'व्यापार', 'मृतक गृह']
    },
    health: {
      en: 'Prone to anxiety, liver problems, and feet issues.',
      hi: 'चिंता, यकृत की समस्याएं और पैर की समस्याओं की संभावना।'
    },
    compatibility: [0, 3, 6, 9, 12, 15, 18, 21, 24]
  },
  // 26. Uttara Bhadrapada (3°20' - 16°40' Pisces)
  {
    index: 25,
    name: { en: 'Uttara Bhadrapada', hi: 'उत्तर भाद्रपद' },
    lord: 'Saturn',
    deity: 'Ahir Budhnya (Serpent of the Deep)',
    symbol: 'Back Legs of Funeral Cot/Twins',
    animal: { en: 'Female Cow', hi: 'गाय' },
    gana: { en: 'Human (Manushya)', hi: 'मनुष्य' },
    guna: { en: 'Tamas', hi: 'तमस' },
    caste: { en: 'Kshatriya (Warrior)', hi: 'क्षत्रिय' },
    gender: 'male',
    nadi: { en: 'Pitta', hi: 'पित्त' },
    element: { en: 'Ether', hi: 'आकाश' },
    bodyPart: { en: 'Shins, Sides', hi: 'पिंडली, बगल' },
    direction: { en: 'West', hi: 'पश्चिम' },
    syllables: ['Du', 'Tha', 'Jha', 'Da'],
    luckyNumbers: [8, 4],
    luckyColors: [{ en: 'Purple', hi: 'बैंगनी' }, { en: 'Yellow', hi: 'पीला' }],
    luckyGems: [{ en: 'Blue Sapphire', hi: 'नीलम' }],
    personality: {
      en: 'Uttara Bhadrapada natives are wise, controlled, and compassionate. They have deep spiritual understanding and are selfless in their approach. They are excellent counselors and philosophers.',
      hi: 'उत्तर भाद्रपद जातक बुद्धिमान, नियंत्रित और दयालु होते हैं। उनकी गहरी आध्यात्मिक समझ है और वे अपने दृष्टिकोण में निःस्वार्थ हैं। वे उत्कृष्ट परामर्शदाता और दार्शनिक हैं।'
    },
    strengths: {
      en: ['Wise', 'Compassionate', 'Controlled', 'Spiritual', 'Self-sacrificing'],
      hi: ['बुद्धिमान', 'दयालु', 'नियंत्रित', 'आध्यात्मिक', 'आत्म-बलिदानी']
    },
    weaknesses: {
      en: ['Lazy', 'Irresponsible', 'Over-protective', 'Withdrawn'],
      hi: ['आलसी', 'गैर-जिम्मेदार', 'अति-सुरक्षात्मक', 'अंतर्मुखी']
    },
    career: {
      en: ['Yoga/Meditation', 'Non-profit', 'Charity', 'Import/Export', 'Counseling'],
      hi: ['योग/ध्यान', 'गैर-लाभकारी', 'दान', 'आयात/निर्यात', 'परामर्श']
    },
    health: {
      en: 'Prone to cold and feet problems. Should keep feet warm.',
      hi: 'सर्दी और पैर की समस्याओं की संभावना। पैर गर्म रखने चाहिए।'
    },
    compatibility: [1, 4, 7, 10, 13, 16, 19, 22, 25]
  },
  // 27. Revati (16°40' - 30°00' Pisces)
  {
    index: 26,
    name: { en: 'Revati', hi: 'रेवती' },
    lord: 'Mercury',
    deity: 'Pushan (Nurturer)',
    symbol: 'Fish/Drum',
    animal: { en: 'Female Elephant', hi: 'हथिनी' },
    gana: { en: 'Divine (Deva)', hi: 'देव' },
    guna: { en: 'Sattva', hi: 'सत्व' },
    caste: { en: 'Shudra (Worker)', hi: 'शूद्र' },
    gender: 'female',
    nadi: { en: 'Kapha', hi: 'कफ' },
    element: { en: 'Ether', hi: 'आकाश' },
    bodyPart: { en: 'Feet, Ankles', hi: 'पैर, टखने' },
    direction: { en: 'North', hi: 'उत्तर' },
    syllables: ['De', 'Do', 'Cha', 'Chi'],
    luckyNumbers: [5, 6],
    luckyColors: [{ en: 'Light Brown', hi: 'हल्का भूरा' }, { en: 'Multi-color', hi: 'बहुरंगी' }],
    luckyGems: [{ en: 'Emerald', hi: 'पन्ना' }],
    personality: {
      en: 'Revati is the last nakshatra, representing completion and journey\'s end. These natives are nurturing, protective of the weak, and have excellent creative abilities. They are wealthy and fond of travel.',
      hi: 'रेवती अंतिम नक्षत्र है, जो पूर्णता और यात्रा के अंत का प्रतिनिधित्व करती है। ये जातक पोषण करने वाले, कमजोरों के रक्षक हैं और उनमें उत्कृष्ट रचनात्मक क्षमता है। वे धनी हैं और यात्रा के शौकीन हैं।'
    },
    strengths: {
      en: ['Nurturing', 'Creative', 'Wealthy', 'Compassionate', 'Sociable'],
      hi: ['पोषण करने वाला', 'रचनात्मक', 'धनी', 'दयालु', 'मिलनसार']
    },
    weaknesses: {
      en: ['Over-sensitive', 'Dependent', 'Indecisive', 'Easily deceived'],
      hi: ['अति-संवेदनशील', 'निर्भर', 'अनिर्णायक', 'आसानी से धोखा खा जाने वाला']
    },
    career: {
      en: ['Travel/Tourism', 'Journalism', 'Watch making', 'Orphanage work', 'Entertainment'],
      hi: ['यात्रा/पर्यटन', 'पत्रकारिता', 'घड़ी बनाना', 'अनाथालय का काम', 'मनोरंजन']
    },
    health: {
      en: 'Prone to feet problems and insomnia. Should maintain regular sleep.',
      hi: 'पैर की समस्याओं और अनिद्रा की संभावना। नियमित नींद बनाए रखनी चाहिए।'
    },
    compatibility: [2, 5, 8, 11, 14, 17, 20, 23, 26]
  },
];

/**
 * Get nakshatra meaning by index
 */
export function getNakshatraMeaning(index: number): NakshatraMeaning | null {
  return NAKSHATRA_MEANINGS[index] || null;
}

/**
 * Get all compatible nakshatras for a given nakshatra
 */
export function getCompatibleNakshatras(index: number): NakshatraMeaning[] {
  const nakshatra = NAKSHATRA_MEANINGS[index];
  if (!nakshatra) return [];
  return nakshatra.compatibility.map((i) => NAKSHATRA_MEANINGS[i]);
}
