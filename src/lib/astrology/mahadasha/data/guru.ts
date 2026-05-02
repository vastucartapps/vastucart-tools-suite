import type { PlanetRecord } from '../types';

export const GURU: PlanetRecord = {
  slug: 'guru',
  displayName: { en: 'Guru Mahadasha', hi: 'गुरु महादशा' },
  westernName: 'Jupiter',
  beejMantra: 'Om Graam Greem Graum Sah Gurave Namah',
  periodYears: 16,
  periodDays: Math.round(16 * 365.25),
  karaka: {
    en: ['wisdom', 'dharma', 'children', 'wealth', 'guru', 'higher education', 'expansion', 'prosperity'],
    hi: ['ज्ञान', 'धर्म', 'सन्तान', 'धन', 'गुरु', 'उच्च शिक्षा', 'विस्तार', 'समृद्धि'],
  },
  ownSigns: ['Sagittarius', 'Pisces'],
  exaltation: { sign: 'Cancer', degree: 5 },
  debilitation: { sign: 'Capricorn', degree: 5 },
  friendly: ['surya', 'chandra', 'mangal'],
  neutral: ['shani'],
  enemy: ['budh', 'shukra'],
  weekday: { en: 'Thursday', hi: 'गुरुवार' },
  deity: { en: 'Brihaspati, Vishnu, Sri Dakshinamurthy', hi: 'बृहस्पति, विष्णु, श्री दक्षिणामूर्ति' },
  gemstone: { en: 'Yellow Sapphire (Pukhraj)', hi: 'पुखराज' },
  themeColor: { primary: '#B8860B', accent: '#DAA520' },
  icon: 'book',

  intro: {
    en: `Guru Mahadasha is the most universally welcomed of the nine major periods. Sixteen years under the Devguru — preceptor of the gods, lord of dharma, the planet of expansion, prosperity, and grace — and the chart\'s most generative and visibly fruitful chapter usually unfolds. Marriage often occurs here. So does the birth of children. Higher education completes. Property is acquired. Wealth ratchets up not through hustle but through quiet legitimacy: senior people trust the native, doors open without being pushed, and what was unfinished in earlier dashas is finally brought to maturity. The classical writers — Parashara, Kalidasa in the Uttara Kalamrita, Mantreswara — describe Guru\'s dasha as the period when the chart\'s "promises become deliverable." That language is exact. What was deserved earlier and not received tends to arrive in these sixteen years.`,
    hi: `नौ प्रमुख दशाओं में गुरु महादशा सर्वाधिक सर्वस्वीकार्य है। देवगुरु — देवताओं के आचार्य, धर्म के अधिष्ठाता, विस्तार-समृद्धि-कृपा के ग्रह — के अधीन सोलह वर्ष कुण्डली का सर्वाधिक सृजनात्मक एवं स्पष्ट फलदायक अध्याय प्रायः खोलते हैं। विवाह प्रायः इसी काल में होता है। सन्तान का जन्म भी। उच्च शिक्षा पूर्ण होती है। सम्पत्ति अर्जित होती है। धन हड़बड़ाहट से नहीं, शान्त वैधता से बढ़ता है: वरिष्ठ जातक पर विश्वास करते हैं, द्वार बिना धक्का दिए खुलते हैं, और पूर्ववर्ती दशाओं में जो अधूरा था वह अन्ततः परिपक्वता पाता है। शास्त्रीय लेखक — पाराशर, उत्तर कालामृत में कालिदास, मन्त्रेश्वर — गुरु दशा को उस काल के रूप में वर्णित करते हैं जब "कुण्डली के वचन सुपुर्द-योग्य हो जाते हैं।" यह भाषा यथार्थ है। पहले जो योग्य था पर मिला नहीं, वह इन सोलह वर्षों में प्रायः आ जाता है।`,
  },

  periodOverview: {
    en: `Sixteen years is the fourth-longest mahadasha. The internal sequence is Guru–Guru (about 2 years 1 month 18 days), then Saturn, Mercury, Ketu, Venus, Sun, Moon, Mars, Rahu. Three antardashas — Guru–Saturn, Guru–Venus, Guru–Mercury — are the dasha\'s wealth-and-marriage windows; the smaller sub-periods of Sun, Moon, Mars are typically about consolidation rather than expansion; the closing Guru–Rahu can deliver an unexpected leap or, occasionally, a final lesson before the next dasha arrives. Even with a weakly placed natal Jupiter, the dasha rarely turns hostile in the way Saturn or Rahu can; it more often runs slow or under-deliver rather than openly destructive. Reading Jupiter\'s placement, friends, and aspects from Saturn or Rahu shapes how much of the dasha\'s textbook potential the chart actually delivers.`,
    hi: `सोलह वर्ष चौथी सबसे लम्बी महादशा है। आन्तरिक क्रम है — गुरु-गुरु (लगभग 2 वर्ष 1 माह 18 दिन), फिर शनि, बुध, केतु, शुक्र, सूर्य, चन्द्र, मंगल, राहु। तीन अन्तर्दशाएँ — गुरु-शनि, गुरु-शुक्र, गुरु-बुध — दशा के धन-एवं-विवाह खण्ड हैं; सूर्य, चन्द्र, मंगल के लघु उप-काल प्रायः विस्तार के बजाय सुदृढ़ीकरण के विषय हैं; अन्तिम गुरु-राहु अप्रत्याशित छलांग दे सकता है, अथवा कभी-कभी अगली दशा के आगमन से पूर्व अन्तिम पाठ। निर्बल जन्म-गुरु के साथ भी यह दशा शनि अथवा राहु की भाँति शत्रुतापूर्ण नहीं होती; यह स्पष्ट विनाशात्मक होने के बजाय धीमी अथवा कम-फलदायक होती है। गुरु की स्थिति, मित्र, तथा शनि अथवा राहु से दृष्टियाँ — ये निर्धारित करती हैं कि कुण्डली दशा की पाठ्य-संभावना कितनी व्यवहारतः देती है।`,
  },

  wellPlacedEffects: {
    en: `When Guru is well-placed in the natal chart — in own signs Sagittarius or Pisces, exalted in Cancer, in kendra (1st, 4th, 7th, 10th) or trikona (5th, 9th), aspecting the lagna or the lagna lord — the sixteen years often deliver the chart\'s defining wealth and family chapter. Marriage to a person of comparable values, the birth of capable children, the building of a primary residence, the accumulation of capital that compounds rather than churns, recognition in teaching or advisory roles. Career fields naturally favoured are law, banking, education, judiciary, medicine, financial advisory, religious leadership, publishing, classical arts, philanthropy, and policy work — the dharmic sectors. Health-wise, well-placed Jupiter protects the liver, gallbladder, and overall metabolism; the native typically gains weight in this dasha (Jupiter expands), so a deliberate fitness routine matters. Quietly, the most important phenomenon of a Guru dasha is the access it grants — to mentors, institutions, and decision-rooms the native could not have entered earlier without an introduction. Use the access; the dasha\'s deepest gift is the relationships it opens, not the income it produces.`,
    hi: `जब गुरु जन्म-कुण्डली में बलवान हों — स्वराशि धनु अथवा मीन में, उच्च के कर्क में, केन्द्र (1, 4, 7, 10) अथवा त्रिकोण (5, 9) में, लग्न अथवा लग्नेश पर दृष्टि करते हुए — तब सोलह वर्ष प्रायः कुण्डली का परिभाषित धन-एवं-परिवार अध्याय देते हैं। समान मूल्यों वाले व्यक्ति से विवाह, सक्षम सन्तानों का जन्म, मुख्य निवास का निर्माण, ऐसा पूँजी-संचय जो मन्थन के बजाय वर्धमान हो, अध्यापन एवं परामर्शदाता भूमिकाओं में पहचान। व्यवसाय की दृष्टि से अनुकूल — विधि, बैंकिंग, शिक्षा, न्याय व्यवस्था, चिकित्सा, वित्तीय परामर्श, धार्मिक नेतृत्व, प्रकाशन, शास्त्रीय कलाएँ, परोपकार-कार्य, और नीति-निर्माण — धार्मिक क्षेत्र। स्वास्थ्य की दृष्टि से बलवान गुरु यकृत, पित्ताशय, एवं समग्र चयापचय की रक्षा करते हैं; जातक प्रायः इस दशा में भार बढ़ाता है (गुरु विस्तार करते हैं), अतः सोचा-समझा व्यायाम-क्रम आवश्यक। शान्त रूप से, गुरु दशा की सर्वाधिक महत्त्वपूर्ण घटना वह सुलभता है जो वह देती है — मार्गदर्शक, संस्थाएँ, और वे निर्णय-कक्ष जिनमें जातक पहले बिना परिचय के प्रवेश नहीं कर सकता था। इस सुलभता का उपयोग करें; दशा का सबसे गहरा उपहार वह सम्बन्ध हैं जो वह खोलती है, वह आय नहीं जो वह उत्पन्न करती है।`,
  },

  afflictedEffects: {
    en: `When Jupiter is afflicted — debilitated in Capricorn, conjunct Rahu (the Guru-Chandala combination), combust under the Sun, retrograde and badly placed, or in dusthanas (6, 8, 12) without redemption — the sixteen years run the inversion of expansion: misplaced trust, poor advisors, religious or financial scams, weight and metabolic issues, delayed children, marriage difficulty, and a pattern of "almost there" that frustrates. The classical Guru-Chandala combination produces false gurus and mentors who lead the native astray; Jupiter combust by Sun erodes self-confidence in the native\'s area of expertise; debilitated Jupiter in Capricorn under Saturn\'s gaze produces years of dharmic doubt. None of these patterns are catastrophic in the way Saturn-eighth or Rahu-twelfth can be — but they consume the dasha\'s natural goodwill. The remedy is unusual: the most reliable corrector of an afflicted Jupiter is sustained generosity. The afflicted Jupiter person is asked, structurally, to give before they have received. When they do, the dasha softens.`,
    hi: `जब गुरु पीड़ित हों — मकर में नीच के, राहु से युक्त (गुरु-चाण्डाल योग), सूर्य से अस्त, वक्री और दुष्प्रभावित, अथवा दुस्थान (6, 8, 12) में बिना उद्धार के — तब सोलह वर्ष विस्तार के विपरीत चलते हैं: गलत विश्वास, बुरे परामर्शदाता, धार्मिक अथवा वित्तीय छलावे, भार एवं चयापचय की समस्याएँ, सन्तान में विलम्ब, विवाह में कठिनाई, और निरन्तर "लगभग पहुँच गए" का निराशाजनक स्वरूप। शास्त्रीय गुरु-चाण्डाल योग झूठे गुरु एवं मार्गदर्शक देता है जो जातक को भटकाते हैं; सूर्य से अस्त गुरु जातक के विशेषज्ञता क्षेत्र में आत्मविश्वास का क्षय करते हैं; मकर में नीच के गुरु शनि की दृष्टि में वर्षों का धार्मिक सन्देह उत्पन्न करते हैं। इनमें से कोई भी स्वरूप शनि-अष्टम अथवा राहु-द्वादश की भाँति विनाशात्मक नहीं — परन्तु ये दशा की प्राकृतिक सद्भावना का उपभोग कर लेते हैं। उपाय असाधारण है: पीड़ित गुरु का सर्वाधिक विश्वसनीय सुधारक है निरन्तर दानशीलता। पीड़ित गुरु वाले जातक से, संरचनात्मक रूप से, माँगा जाता है कि वह प्राप्त करने से पूर्व दे। जब वह देता है, दशा कोमल हो जाती है।`,
  },

  houseEffects: [
    { house: 1, effect: { en: 'Body gains weight; demeanor becomes calm and authoritative. Reputation as wise or learned solidifies. Health robust if diet and movement are maintained.', hi: 'शरीर का भार बढ़ता है; स्वभाव शान्त एवं प्रामाणिक हो जाता है। विद्वान् अथवा ज्ञानी की प्रतिष्ठा सुदृढ़। यदि आहार एवं गति बनी रहे तो स्वास्थ्य सुदृढ़।' } },
    { house: 2, effect: { en: 'Excellent placement. Family wealth grows, speech becomes persuasive, food and home prosper. Inheritance possible. Suits banking, finance, law.', hi: 'उत्तम स्थिति। पारिवारिक धन बढ़ता है, वाणी प्रभावी होती है, भोजन एवं गृह में समृद्धि। उत्तराधिकार सम्भव। बैंकिंग, वित्त, विधि के अनुकूल।' } },
    { house: 3, effect: { en: 'Mid-strength placement. Communication and short writing prosper but gives ordinary courage. Sibling support steady. Suitable for editors, columnists, broadcasters.', hi: 'मध्य-बल स्थिति। सम्वाद एवं अल्प लेखन फलते हैं किन्तु साधारण साहस। भाई-बहन का स्थिर सहयोग। सम्पादक, स्तम्भकार, प्रसारक के अनुकूल।' } },
    { house: 4, effect: { en: 'Strong placement. Mother\'s health improves, primary residence built or upgraded, vehicles acquired. Emotional life calm. Suits real estate, education, hospitality.', hi: 'बलवान स्थिति। माता का स्वास्थ्य सुधरता है, मुख्य निवास निर्मित अथवा उन्नत, वाहन प्राप्त। भावनात्मक जीवन शान्त। अचल सम्पत्ति, शिक्षा, आतिथ्य के अनुकूल।' } },
    { house: 5, effect: { en: 'Strongest placement. Children, romance, creative output, speculation, education — all flourish. Career rises through display of expertise. Excellent for teachers, scholars, advisors.', hi: 'सर्वाधिक बलवान स्थिति। सन्तान, प्रेम, रचनात्मक उत्पादन, सट्टा, शिक्षा — सब फलते हैं। विशेषज्ञता प्रदर्शन से करियर ऊँचाई। शिक्षक, विद्वान्, परामर्शदाता के लिए उत्कृष्ट।' } },
    { house: 6, effect: { en: 'Mixed placement. Defeats enemies and resolves disputes through mediation but slows financial growth. Excellent for litigators, healers, conflict-resolution professionals.', hi: 'मिश्रित स्थिति। मध्यस्थता से शत्रु पराजित एवं विवाद हल किन्तु आर्थिक वृद्धि धीमी। मुकदमेबाज़, चिकित्सक, संघर्ष-समाधानकर्ता के लिए उत्कृष्ट।' } },
    { house: 7, effect: { en: 'Excellent placement. Marriage to a person of standing or learning. Business partnerships prosper. Public reputation as fair-minded. Suits diplomats, judges, consultants.', hi: 'उत्तम स्थिति। प्रतिष्ठित अथवा विद्वान् व्यक्ति से विवाह। व्यापारिक साझेदारी समृद्ध। सार्वजनिक प्रतिष्ठा निष्पक्ष की। राजनयिक, न्यायाधीश, परामर्शदाता के अनुकूल।' } },
    { house: 8, effect: { en: 'Difficult house. Inheritance with delays, occult studies, transformation through loss. Long-running but successful research possible. Good for surgeons, occultists, researchers.', hi: 'कठिन भाव। विलम्ब के साथ उत्तराधिकार, तान्त्रिक अध्ययन, क्षति से रूपान्तरण। दीर्घकालिक किन्तु सफल अनुसन्धान सम्भव। शल्य चिकित्सक, तान्त्रिक, अनुसन्धाता के लिए शुभ।' } },
    { house: 9, effect: { en: 'Among the strongest placements. Father\'s blessings, religious advancement, foreign higher education, dharmic clarity. Career as teacher, priest, or philosopher takes shape.', hi: 'सर्वाधिक बलवान स्थितियों में से। पिता का आशीर्वाद, धार्मिक उन्नति, विदेशी उच्च शिक्षा, धर्म-स्पष्टता। शिक्षक, पुरोहित, अथवा दार्शनिक के रूप में करियर आकार लेता है।' } },
    { house: 10, effect: { en: 'Excellent placement. Career rises through public ethical work — judiciary, government, education, religious institution leadership. Honour comes without aggression.', hi: 'उत्तम स्थिति। सार्वजनिक नैतिक कार्य से करियर ऊँचाई — न्याय व्यवस्था, शासन, शिक्षा, धार्मिक संस्था नेतृत्व। बिना आक्रामकता के सम्मान।' } },
    { house: 11, effect: { en: 'Strong income placement. Multiple revenue streams, large network, fulfilment of long-held wishes. Advisory and committee roles multiply.', hi: 'बलवान आय-स्थिति। अनेक राजस्व-स्रोत, विस्तृत नेटवर्क, दीर्घकालिक इच्छाओं की पूर्ति। परामर्श एवं समिति भूमिकाएँ बहुगुणित।' } },
    { house: 12, effect: { en: 'Mixed but spiritually rich. Foreign travel for study or pilgrimage, ashram or hospital service, generous expenditure on dharma. Sleep deep; meditation matures.', hi: 'मिश्रित किन्तु आध्यात्मिक रूप से समृद्ध। अध्ययन अथवा तीर्थ हेतु विदेश यात्रा, आश्रम अथवा अस्पताल सेवा, धर्म पर उदार व्यय। निद्रा गहरी; ध्यान परिपक्व होता है।' } },
  ],

  antardashas: [
    {
      subRuler: 'Guru',
      label: { en: 'Guru–Guru Antardasha', hi: 'गुरु-गुरु अन्तर्दशा' },
      duration: { en: 'About 2 years 1 month 18 days', hi: 'लगभग 2 वर्ष 1 माह 18 दिन' },
      effect: {
        en: `The opening sub-period sets the dasha\'s tone — typically expansive, optimistic, and recognised. The classical signature is the immediate easing of pressures that the prior dasha\'s closing antardasha had imposed. Many natives marry, conceive, complete a degree, take a senior role, or move into a better residence in this opening Guru–Guru window. Saturn\'s austerity, Rahu\'s anxiety, or Mercury\'s nervousness from the previous dasha lifts. The mood is relief.`,
        hi: `प्रारम्भिक उप-काल दशा का स्वर निर्धारित करता है — प्रायः विस्तारकारी, आशावादी, और मान्यता-प्राप्त। शास्त्रीय लक्षण है — पूर्ववर्ती दशा की अन्तिम अन्तर्दशा से उत्पन्न दबावों की तत्क्षण कमी। अनेक जातक इस प्रारम्भिक गुरु-गुरु काल में विवाह करते हैं, सन्तान पाते हैं, उपाधि पूर्ण करते हैं, वरिष्ठ भूमिका लेते हैं, अथवा बेहतर निवास में जाते हैं। पूर्ववर्ती दशा से शनि की कठोरता, राहु की चिन्ता, अथवा बुध की घबराहट हट जाती है। स्वर है राहत।`,
      },
    },
    {
      subRuler: 'Shani',
      label: { en: 'Guru–Shani Antardasha', hi: 'गुरु-शनि अन्तर्दशा' },
      duration: { en: 'About 2 years 6 months 12 days', hi: 'लगभग 2 वर्ष 6 माह 12 दिन' },
      effect: {
        en: `Jupiter and Saturn are neutral to each other but operationally complementary — Jupiter expands, Saturn structures. The combination delivers the dasha\'s most consolidating chapter: long-term contracts, property registration, institutional appointments, doctoral submissions, multi-year construction project completions. Energy is steady rather than buoyant. Some weight gain is reported. Practitioners call this the period when "what was promised becomes formally documented."`,
        hi: `गुरु और शनि परस्पर तटस्थ हैं किन्तु कार्यगत रूप से पूरक — गुरु विस्तार करते हैं, शनि संरचना देते हैं। संयोजन दशा का सर्वाधिक सुदृढ़ीकरण-कारी अध्याय देता है: दीर्घकालिक अनुबन्ध, सम्पत्ति पंजीकरण, संस्थागत नियुक्तियाँ, शोध-प्रस्तुति, बहु-वर्षीय निर्माण परियोजना समाप्ति। ऊर्जा उल्लास के बजाय स्थिर। कुछ भार-वृद्धि की रिपोर्ट। साधक इसे उस काल के रूप में पहचानते हैं जब "जो वचन दिया गया था वह औपचारिक रूप से प्रलेखित हो जाता है।"`,
      },
    },
    {
      subRuler: 'Budh',
      label: { en: 'Guru–Budh Antardasha', hi: 'गुरु-बुध अन्तर्दशा' },
      duration: { en: 'About 2 years 3 months 6 days', hi: 'लगभग 2 वर्ष 3 माह 6 दिन' },
      effect: {
        en: `Jupiter and Mercury are enemies in classical astrology — guru and shishya, expansive and analytical, faith and doubt. As a sub-period the combination is workable but produces a peculiar quality: the native\'s decision-making becomes clever rather than wise. Career and writing flourish but with a faint note of compromise. Many natives report a major publication, a successful exam, or a high-profile role here, alongside a small ethical doubt that lingers. Stay close to dharmic counsel; Mercury under Jupiter does well when reminded of its source.`,
        hi: `शास्त्रीय ज्योतिष में गुरु और बुध शत्रु हैं — गुरु एवं शिष्य, विस्तारकारी एवं विश्लेषणात्मक, श्रद्धा एवं सन्देह। उप-काल के रूप में यह संयोग सध्य है किन्तु एक विलक्षण गुण उत्पन्न करता है: जातक के निर्णय बुद्धिमान् के बजाय चतुर हो जाते हैं। करियर एवं लेखन फलते हैं, परन्तु समझौते की मन्द ध्वनि के साथ। अनेक जातक यहाँ प्रमुख प्रकाशन, सफल परीक्षा, अथवा प्रतिष्ठित भूमिका रिपोर्ट करते हैं — साथ ही एक छोटा नैतिक सन्देह जो टिक जाता है। धार्मिक परामर्श के निकट रहें; गुरु के अधीन बुध तब अच्छा कार्य करता है जब उसे अपने स्रोत की स्मृति हो।`,
      },
    },
    {
      subRuler: 'Ketu',
      label: { en: 'Guru–Ketu Antardasha', hi: 'गुरु-केतु अन्तर्दशा' },
      duration: { en: 'About 11 months 6 days', hi: 'लगभग 11 माह 6 दिन' },
      effect: {
        en: `A short, deeply contemplative sub-period. Ketu under Jupiter often delivers sudden detachment from a teacher, a religious community, or a long-running advisory role. The native may briefly leave a familiar institution, retreat for study, or undertake an unplanned pilgrimage. Health-wise, fevers, brief inflammatory complaints, and weight loss are common. Read this antardasha as a planned reset rather than a setback; what falls away here was, by classical reading, no longer the right vehicle for the dasha\'s remaining years.`,
        hi: `लघु, गहन चिन्तनशील उप-काल। गुरु के अधीन केतु प्रायः किसी शिक्षक, धार्मिक समुदाय, अथवा दीर्घकालिक परामर्शदाता भूमिका से अकस्मात् विरक्ति देते हैं। जातक अल्पकाल के लिए परिचित संस्था छोड़ सकता है, अध्ययन हेतु एकान्त ले सकता है, अथवा अनियोजित तीर्थ कर सकता है। स्वास्थ्य की दृष्टि से ज्वर, अल्पकालिक प्रदाह, और भार-कमी सामान्य। इस अन्तर्दशा को क्षति के बजाय नियोजित पुनरारम्भ के रूप में पढ़ें; जो यहाँ छूटता है वह शास्त्रीय दृष्टि से दशा के शेष वर्षों के लिए अब उपयुक्त वाहन नहीं था।`,
      },
    },
    {
      subRuler: 'Shukra',
      label: { en: 'Guru–Shukra Antardasha', hi: 'गुरु-शुक्र अन्तर्दशा' },
      duration: { en: 'About 2 years 8 months 0 days', hi: 'लगभग 2 वर्ष 8 माह 0 दिन' },
      effect: {
        en: `Jupiter and Venus are technically enemies in classical Naisargika Maitri but operationally one of the most beautiful sub-periods of the dasha: marriage of the chart\'s most refined kind, the birth of a daughter, the acquisition of a luxurious vehicle or jewellery, foreign travel for honeymoon or pleasure, recognition in the arts. The risk pattern is over-comfort — the native may settle into a luxury they should have used as a platform. Gentle warning: Venus under Jupiter occasionally produces an extramarital attraction that the native treats as a "wisdom-seeking" friendship; classical commentators flag this specifically. Maintain dharma and the period delivers all of its goodness.`,
        hi: `नैसर्गिक मैत्री में गुरु और शुक्र तकनीकी रूप से शत्रु हैं किन्तु व्यावहारिक रूप से दशा के सर्वाधिक सुन्दर उप-कालों में से एक: कुण्डली के सर्वाधिक परिष्कृत स्वरूप का विवाह, पुत्री का जन्म, विलासी वाहन अथवा आभूषण का अधिग्रहण, हनीमून अथवा आनन्द हेतु विदेश यात्रा, कला में मान्यता। जोखिम-स्वरूप है अति-सुख — जातक उस विलासिता में बस जा सकता है जिसका उसे मंच के रूप में उपयोग करना चाहिए था। कोमल चेतावनी: गुरु के अधीन शुक्र कभी-कभी ऐसा विवाहेतर आकर्षण देते हैं जिसे जातक "ज्ञान-खोजी" मित्रता के रूप में देखता है; शास्त्रीय भाष्यकार इसे विशेष रूप से चिह्नित करते हैं। धर्म बनाये रखें और काल अपनी सम्पूर्ण शुभता देता है।`,
      },
    },
    {
      subRuler: 'Surya',
      label: { en: 'Guru–Surya Antardasha', hi: 'गुरु-सूर्य अन्तर्दशा' },
      duration: { en: 'About 9 months 18 days', hi: 'लगभग 9 माह 18 दिन' },
      effect: {
        en: `Jupiter and Sun are friends, and the brief Sun antardasha within Jupiter is one of the dasha\'s most public-facing windows. Recognition from authority — a senior officer, the government, a respected institution. Father\'s blessings or a paternal property concern resolve. Career advancement, especially in education, judiciary, government, or family business, is common. Health-wise, eyes, heart, and digestive heat need monitoring; reduce spicy food in this window. The energy is bright but compressed into ten months — make the public moves intentionally.`,
        hi: `गुरु और सूर्य मित्र हैं, और गुरु के भीतर लघु सूर्य अन्तर्दशा दशा के सर्वाधिक जन-समक्ष काल-खण्डों में से एक है। अधिकार से मान्यता — कोई वरिष्ठ अधिकारी, शासन, अथवा प्रतिष्ठित संस्था। पिता का आशीर्वाद अथवा पैतृक सम्पत्ति विषयक प्रकरण हल। करियर उन्नति — विशेषकर शिक्षा, न्याय व्यवस्था, शासन, अथवा पारिवारिक व्यवसाय में — सामान्य। स्वास्थ्य की दृष्टि से नेत्र, हृदय, एवं पाचन-ताप पर निगरानी; इस काल में मसालेदार भोजन कम करें। ऊर्जा उज्ज्वल किन्तु दस मास में संघनित — सार्वजनिक चालें सुविचारित ढंग से करें।`,
      },
    },
    {
      subRuler: 'Chandra',
      label: { en: 'Guru–Chandra Antardasha', hi: 'गुरु-चन्द्र अन्तर्दशा' },
      duration: { en: 'About 1 year 4 months 0 days', hi: 'लगभग 1 वर्ष 4 माह 0 दिन' },
      effect: {
        en: `Jupiter and Moon together form the classical Gaja-Kesari yoga in many charts; this antardasha activates that potential. Emotional life feels protected, mother\'s blessings flow, the home becomes the source of strength. Many natives experience a meaningful pregnancy or the deepening of a marriage in this sub-period. Career involves more "people work" than usual — public roles, teaching, mentoring, healthcare. Sleep is deep; intuition operates clearly. The remedy needed is minimal; the period is largely a gift.`,
        hi: `अनेक कुण्डलियों में गुरु और चन्द्र मिलकर शास्त्रीय गज-केसरी योग बनाते हैं; यह अन्तर्दशा उस संभावना को सक्रिय करती है। भावनात्मक जीवन सुरक्षित अनुभव होता है, माता का आशीर्वाद बहता है, गृह शक्ति का स्रोत बन जाता है। अनेक जातक इस उप-काल में अर्थपूर्ण गर्भधारण अथवा विवाह की गहराई का अनुभव करते हैं। करियर में सामान्य से अधिक "जन-कार्य" — सार्वजनिक भूमिकाएँ, अध्यापन, मार्गदर्शन, स्वास्थ्य-सेवा। निद्रा गहरी; अन्तर्ज्ञान स्पष्ट कार्य करता है। आवश्यक उपाय न्यूनतम; काल प्रायः उपहार ही है।`,
      },
    },
    {
      subRuler: 'Mangal',
      label: { en: 'Guru–Mangal Antardasha', hi: 'गुरु-मंगल अन्तर्दशा' },
      duration: { en: 'About 11 months 6 days', hi: 'लगभग 11 माह 6 दिन' },
      effect: {
        en: `Jupiter and Mars are friends; this is the dasha\'s most action-oriented sub-period. Decisions that were hesitating get made. Property purchase, real estate development, a major fitness improvement, or a new business launch are common. Younger brothers may need help. The risk is that Mars under Jupiter inflates confidence — the dasha-lord\'s expansion meets Mars\'s assertion, and the native may sign or commit too quickly. Slow down by ten percent and the antardasha rewards with concrete progress.`,
        hi: `गुरु और मंगल मित्र हैं; यह दशा का सर्वाधिक कर्म-केन्द्रित उप-काल है। जो निर्णय हिचक रहे थे वे लिए जाते हैं। सम्पत्ति-क्रय, अचल सम्पत्ति विकास, बड़ा शारीरिक स्वास्थ्य सुधार, अथवा नया व्यवसाय आरम्भ — सब सामान्य। छोटे भाइयों को सहायता की आवश्यकता हो सकती है। जोखिम यह है कि गुरु के अधीन मंगल आत्मविश्वास को बढ़ा देते हैं — दशेश का विस्तार मंगल के आग्रह से मिलता है, और जातक शीघ्रता में हस्ताक्षर कर सकता है। दस प्रतिशत धीमे चलें और अन्तर्दशा मूर्त प्रगति से पुरस्कार देती है।`,
      },
    },
    {
      subRuler: 'Rahu',
      label: { en: 'Guru–Rahu Antardasha', hi: 'गुरु-राहु अन्तर्दशा' },
      duration: { en: 'About 2 years 4 months 24 days', hi: 'लगभग 2 वर्ष 4 माह 24 दिन' },
      effect: {
        en: `The closing antardasha. Rahu under Jupiter is the inverse of Rahu–Jupiter from the previous Rahu mahadasha — here Jupiter holds, and Rahu provides one final unconventional opportunity. Foreign offers, technology pivots, or unconventional investments arrive. Some natives describe this as "the period when the dasha shows its maximum reach." Caveat: this is also the window where Guru-Chandala can manifest — false advisors, religious scams, or seductive "shortcut" offers. Verify everything; finish the dasha clean.`,
        hi: `अन्तिम अन्तर्दशा। गुरु के अधीन राहु पूर्ववर्ती राहु महादशा के राहु-गुरु का विलोम है — यहाँ गुरु धारण करते हैं, और राहु एक अन्तिम अपरम्परागत अवसर देते हैं। विदेशी प्रस्ताव, प्रौद्योगिकी मोड़, अथवा अपरम्परागत निवेश आते हैं। कुछ जातक इसे "वह काल जब दशा अपनी अधिकतम पहुँच दिखाती है" के रूप में वर्णित करते हैं। चेतावनी: यह वह खण्ड भी है जहाँ गुरु-चाण्डाल प्रकट हो सकता है — झूठे परामर्शदाता, धार्मिक छलावे, अथवा आकर्षक "शॉर्टकट" प्रस्ताव। प्रत्येक का सत्यापन करें; दशा को स्वच्छ समाप्त करें।`,
      },
    },
  ],

  remedies: [
    {
      title: { en: 'Mantra Recitation', hi: 'मन्त्र जप' },
      body: {
        en: `The classical Jupiter mantra is "Om Graam Greem Graum Sah Gurave Namah" — nineteen thousand recitations across forty-eight days, beginning on a Thursday in Shukla paksha. Lay alternatives are the Brihaspati Stotra (recited daily on Thursday), the Vishnu Sahasranama (one full reading on Thursday morning), or the Guru Stotra "Gurur Brahma, Gurur Vishnu" verse repeated 108 times. Yellow rosary (haldi mala) is preferred; alternatively, sphatik (rock crystal) mala. Recitation is most effective in the early morning before sunrise. Donations of yellow food (bananas, chickpea-flour sweets, turmeric-coloured rice) at a Vishnu or Brihaspati temple after recitation amplify the practice.`,
        hi: `शास्त्रीय गुरु मन्त्र है "ॐ ग्रां ग्रीं ग्रौं सः गुरवे नमः" — अड़तालीस दिनों में उन्नीस हज़ार जप, शुक्ल पक्ष के गुरुवार से आरम्भ। जन-विधियाँ हैं — प्रति गुरुवार बृहस्पति स्तोत्र पाठ, गुरुवार प्रातः विष्णु सहस्रनाम का एक पूर्ण पाठ, अथवा गुरु स्तोत्र का "गुरुर्ब्रह्मा, गुरुर्विष्णु" श्लोक 108 आवृत्ति। पीली माला (हल्दी माला) श्रेष्ठ; वैकल्पिक रूप से स्फटिक माला। जप सूर्योदय से पूर्व प्रातः सर्वाधिक प्रभावी। जप के पश्चात् विष्णु अथवा बृहस्पति मन्दिर में पीले खाद्य (केले, बेसन के मिष्ठान्न, हल्दी-रंग के चावल) का दान अभ्यास को बढ़ाता है।`,
      },
    },
    {
      title: { en: 'Yellow Sapphire (Pukhraj)', hi: 'पुखराज' },
      body: {
        en: `Yellow Sapphire is the most universally tolerated of the major Jyotish gems. Unlike Neelam or Gomedh, Pukhraj rarely produces adverse reactions; if Jupiter is well-placed in the chart it is among the safest gemstone prescriptions in the entire system. Five carats minimum, set in gold, index finger of the right hand, energised on a Thursday in Shukla paksha with the beej mantra recited 108 times. The classical caveats: do not pair Pukhraj with Diamond (planetary signals conflict); avoid wearing Pukhraj during a Jupiter–Rahu antardasha if Guru-Chandala is present in the natal chart; Citrine is a less expensive alternative and carries a softened version of the same energy.`,
        hi: `पुखराज प्रमुख ज्योतिष रत्नों में सर्वाधिक सर्वस्वीकार्य है। नीलम अथवा गोमेद के विपरीत, पुखराज प्रतिकूल प्रतिक्रिया विरले देता है; यदि कुण्डली में गुरु बलवान हों तो यह सम्पूर्ण प्रणाली के सर्वाधिक सुरक्षित रत्न-निर्देशों में से है। न्यूनतम पाँच रत्ती, स्वर्ण में, दाहिने हाथ की तर्जनी, शुक्ल पक्ष के गुरुवार को बीज मन्त्र की 108 आवृत्तियों से अभिमन्त्रित। शास्त्रीय सावधानियाँ: पुखराज को हीरे के साथ न पहनें (ग्रह-संकेत टकराते हैं); यदि जन्म-कुण्डली में गुरु-चाण्डाल योग हो तो गुरु-राहु अन्तर्दशा में पुखराज न पहनें; कम कीमत में सिट्रिन वैकल्पिक है और उसी ऊर्जा का कोमल रूप वहन करता है।`,
      },
    },
    {
      title: { en: 'Daana (Donation)', hi: 'दान' },
      body: {
        en: `Jupiter is the dharma-karaka, and donation in his name should reach those whom dharma is meant to lift: students, teachers, scholars, the elderly, brahmins (in the traditional sense of those whose work is study and prayer), pilgrims, and temples in disrepair. Yellow lentils (chana dal), turmeric, gold (or yellow metal), books, school fees, scholarships, and the maintenance of cows are classical Jupiter daana. Thursday before noon is the prescribed time. Many practitioners adopt one Thursday-pledge for the duration of the dasha — sponsoring one student\'s annual school fees, donating books to a village school, feeding cows on every full moon. Continuity of dharma is what Jupiter rewards; sporadic generosity is largely cosmetic.`,
        hi: `गुरु धर्म-कारक हैं, और उनके नाम पर दान उन तक पहुँचना चाहिए जिन्हें उठाना धर्म का प्रयोजन है: छात्र, शिक्षक, विद्वान्, वृद्धजन, ब्राह्मण (परम्परागत अर्थ में — जिनका कर्म अध्ययन एवं प्रार्थना है), तीर्थयात्री, और जीर्णोद्धार-योग्य मन्दिर। चना दाल, हल्दी, स्वर्ण (अथवा पीली धातु), ग्रन्थ, विद्यालय शुल्क, छात्रवृत्तियाँ, और गोवंश की देखरेख शास्त्रीय गुरु-दान हैं। गुरुवार दोपहर से पूर्व विहित समय। अनेक साधक पूरी दशा के लिए एक गुरुवार-संकल्प लेते हैं — किसी छात्र के वार्षिक विद्यालय शुल्क का प्रायोजन, गाँव के विद्यालय को ग्रन्थ-दान, प्रत्येक पूर्णिमा को गोवंश-भोजन। धर्म की निरन्तरता को गुरु पुरस्कृत करते हैं; अनियमित उदारता प्रायः केवल आवरण है।`,
      },
    },
    {
      title: { en: 'Vrata (Observance)', hi: 'व्रत' },
      body: {
        en: `The Brihaspativar Vrat is the standard Jupiter observance: a Thursday fast from sunrise until evening lamp-lighting at a Vishnu or Brihaspati temple. The fast is typically phalahar (fruits, milk, banana). After lamp-lighting the native distributes prasad to children or students. Yellow clothing is worn. The Ekadashi vrat (eleventh day of each lunar fortnight) is the more rigorous companion practice — fasting from grains and beans, reading the Vishnu Sahasranama, and breaking the fast at dawn. Pilgrimage to Tirupati, Badrinath, the Saraswati temples of Karnataka, or the local Vishnu shrine, undertaken once during the dasha, is classically meritorious.`,
        hi: `बृहस्पतिवार व्रत मानक गुरु अनुष्ठान है: गुरुवार को सूर्योदय से सायंकाल विष्णु अथवा बृहस्पति मन्दिर में दीप-प्रज्ज्वलन तक उपवास। व्रत प्रायः फलाहार (फल, दूध, केला)। दीप के पश्चात् जातक बच्चों अथवा छात्रों को प्रसाद वितरित करता है। पीला वस्त्र पहना जाता है। एकादशी व्रत (प्रत्येक चान्द्रपक्ष का ग्यारहवाँ दिन) अधिक कठोर साथी अभ्यास है — अनाज एवं दाल से उपवास, विष्णु सहस्रनाम का पाठ, और प्रातःकाल व्रत-समाप्ति। दशा के दौरान एक बार तिरुपति, बद्रीनाथ, कर्नाटक के सरस्वती मन्दिर, अथवा स्थानीय विष्णु मन्दिर की तीर्थयात्रा शास्त्रीय रूप से पुण्यप्रद।`,
      },
    },
    {
      title: { en: 'Lifestyle Adjustments', hi: 'जीवन-शैली समायोजन' },
      body: {
        en: `Jupiter\'s dasha gains weight by default — both metabolic and figurative. The native expands. The lifestyle correction is therefore deliberate moderation: maintain a fitness routine, control portion sizes (Jupiter loves food), reduce alcohol, schedule annual blood work for liver and gallbladder. Read more than usual — Jupiter rewards the disciplined student. Mentor at least one younger person formally, even unpaid; teaching activates Jupiter\'s deepest gift. Avoid being the loudest voice in any room; Jupiter is the planet of quiet authority, not noise. Honesty in financial dealings is non-negotiable — the dasha\'s wealth flows from credibility, and any moral compromise erodes the dasha\'s base structurally.`,
        hi: `गुरु की दशा में डिफ़ॉल्ट रूप से भार बढ़ता है — चयापचयी एवं प्रतीकात्मक दोनों। जातक विस्तृत होता है। अतः जीवन-शैली सुधार है सुविचारित संयम: व्यायाम-क्रम बनाये रखें, मात्रा नियन्त्रित करें (गुरु को भोजन प्रिय है), मद्य कम करें, यकृत एवं पित्ताशय की वार्षिक रक्त-जाँच नियत करें। सामान्य से अधिक पढ़ें — गुरु अनुशासित छात्र को पुरस्कार देते हैं। कम-से-कम एक छोटे व्यक्ति का औपचारिक मार्गदर्शन करें, बिना पारिश्रमिक भी; अध्यापन गुरु के सर्वाधिक गहरे उपहार को सक्रिय करता है। किसी भी कक्ष में सर्वाधिक उच्च स्वर बनने से बचें; गुरु शान्त अधिकार के ग्रह हैं, कोलाहल के नहीं। वित्तीय व्यवहार में ईमानदारी समझौता-योग्य नहीं है — दशा का धन विश्वसनीयता से बहता है, और कोई भी नैतिक समझौता दशा के आधार को संरचनात्मक रूप से क्षीण करता है।`,
      },
    },
  ],

  casePatterns: {
    en: `Three Guru Mahadasha patterns recur in consultation. The first — and most common — is the marriage-and-family chapter for natives between twenty-six and forty: marriage, conception, primary residence, the consolidation of the working career into a senior role. The second is the academic-and-professional ascent: degree completion, doctoral defence, professional licence, partnership in a firm, appointment to a board or institution. The third — less talked about, more profound — is the spiritual chapter, often beginning in the late forties and running through the fifties, where the native takes formal initiation, builds a temple or institution, becomes a respected elder in their community, or simply spends ten years deepening one classical practice. The first two patterns are visible. The third is the dasha\'s deepest gift, and it is reserved for those who paid attention to the first two while they were happening.`,
    hi: `परामर्श-कक्ष में तीन गुरु महादशा स्वरूप पुनरावृत्त होते हैं। पहला — और सर्वाधिक सामान्य — छब्बीस से चालीस वर्ष के जातकों के लिए विवाह-एवं-परिवार अध्याय: विवाह, गर्भधारण, मुख्य निवास, कार्यकारी करियर का वरिष्ठ भूमिका में सुदृढ़ीकरण। दूसरा शैक्षणिक-एवं-व्यावसायिक उत्कर्ष: उपाधि पूर्ति, शोध-प्रबन्ध रक्षा, व्यावसायिक अनुज्ञप्ति, फर्म में साझेदारी, बोर्ड अथवा संस्था में नियुक्ति। तीसरा — कम चर्चित, अधिक गहन — आध्यात्मिक अध्याय, जो प्रायः चालीस के उत्तरार्ध से आरम्भ होकर पचास भर चलता है, जहाँ जातक औपचारिक दीक्षा लेता है, मन्दिर अथवा संस्था का निर्माण करता है, समुदाय का सम्मानित वरिष्ठ बनता है, अथवा दस वर्ष एक शास्त्रीय अभ्यास को गहरा करने में लगाता है। पहले दो स्वरूप दृश्य हैं। तीसरा दशा का सर्वाधिक गहरा उपहार है, और वह उन्हीं के लिए सुरक्षित है जिन्होंने पहले दो को घटित होते समय ध्यान दिया।`,
  },

  faqs: [
    {
      question: { en: 'Is Guru Mahadasha always good?', hi: 'क्या गुरु महादशा सदा शुभ होती है?' },
      answer: {
        en: `In well-placed charts, yes — Guru Mahadasha is the most reliably benevolent of the nine major periods. In afflicted charts it can run slow or under-deliver but rarely turns hostile in the way Saturn or Rahu can. The expansion may be misdirected — into weight, debt, or false advisors — when Jupiter is debilitated, combust, or in Guru-Chandala with Rahu. Read the natal Jupiter\'s house, sign, dispositor, and aspects before assuming sixteen years of automatic prosperity.`,
        hi: `बलवान कुण्डलियों में, हाँ — गुरु महादशा नौ प्रमुख दशाओं में सर्वाधिक विश्वसनीय रूप से शुभ है। पीड़ित कुण्डलियों में यह धीमी अथवा कम-फलदायक चल सकती है किन्तु शनि अथवा राहु की भाँति शत्रुतापूर्ण विरले होती है। जब गुरु नीच के, अस्त, अथवा राहु के साथ गुरु-चाण्डाल योग में हों — तब विस्तार ग़लत दिशा में जा सकता है: भार, ऋण, अथवा झूठे परामर्शदाताओं में। सोलह वर्षों की स्वतःसिद्ध समृद्धि मानने से पूर्व जन्म-कुण्डली में गुरु का भाव, राशि, राशीश, और दृष्टियाँ देखें।`,
      },
    },
    {
      question: { en: 'How long is Guru Mahadasha?', hi: 'गुरु महादशा कितने वर्ष की होती है?' },
      answer: {
        en: `Sixteen calendar years (about 5,844 days) — the fourth-longest of the nine Vimshottari Mahadashas. It contains nine antardashas: Guru, Saturn, Mercury, Ketu, Venus, Sun, Moon, Mars, Rahu. Use the Mahadasha Calculator with your birth details to see exactly when your Guru Mahadasha begins, ends, and which sub-period is currently running.`,
        hi: `सोलह कलैंडर वर्ष (लगभग 5,844 दिन) — नौ विंशोत्तरी महादशाओं में चौथी सबसे लम्बी। इसमें नौ अन्तर्दशाएँ हैं: गुरु, शनि, बुध, केतु, शुक्र, सूर्य, चन्द्र, मंगल, राहु। अपनी जन्म-तिथि के साथ महादशा कैलकुलेटर का उपयोग करें — आपकी गुरु महादशा कब आरम्भ होगी, कब समाप्त, और कौन-सा उप-काल अभी चल रहा है — सब प्राप्त होगा।`,
      },
    },
    {
      question: { en: 'When does marriage happen in Guru Mahadasha?', hi: 'गुरु महादशा में विवाह कब होता है?' },
      answer: {
        en: `Marriage in Guru Mahadasha is most likely in three sub-periods: Guru–Guru (the opening expansive years), Guru–Venus (about 2 years 8 months — the dasha\'s most romantic window), and Guru–Moon (the emotionally tender 16-month sub-period). The native\'s natal seventh lord and Venus also need to support marriage timing. If the seventh lord is in dusthana or Venus is afflicted, marriage may delay even within Guru Mahadasha. Run a chart matching with the prospective partner before fixing a date.`,
        hi: `गुरु महादशा में विवाह तीन उप-कालों में सर्वाधिक सम्भव — गुरु-गुरु (प्रारम्भिक विस्तारकारी वर्ष), गुरु-शुक्र (लगभग 2 वर्ष 8 माह — दशा का सर्वाधिक प्रेममय खण्ड), और गुरु-चन्द्र (भावनात्मक रूप से कोमल 16-मासी उप-काल)। जातक के जन्म-कुण्डली के सप्तमेश एवं शुक्र को भी विवाह-समय का समर्थन करना चाहिए। यदि सप्तमेश दुस्थान में हो अथवा शुक्र पीड़ित हो — गुरु महादशा में भी विवाह विलम्ब सम्भव। तिथि निश्चित करने से पूर्व प्रत्याशी जीवनसाथी के साथ कुण्डली मिलान कराएँ।`,
      },
    },
    {
      question: { en: 'Will I get rich in Guru Mahadasha?', hi: 'क्या गुरु महादशा में मैं धनी बनूँगा?' },
      answer: {
        en: `Wealth in Guru Mahadasha tends to compound rather than spike. The dasha rewards legitimate enterprise, advisory work, education, banking, finance, and dharmic professions. The largest income gains usually arrive in Guru–Saturn (consolidation), Guru–Venus (capital from creative or aesthetic work), and Guru–Mercury (commercial and intellectual income). If your natal Jupiter is well-placed and supports the second, ninth, or eleventh house, the dasha can multiply net worth several times over. If Jupiter is afflicted, expect modest but steady growth rather than dramatic jumps.`,
        hi: `गुरु महादशा में धन झटके से नहीं, चक्रवृद्धि से बढ़ता है। दशा वैध उद्यम, परामर्शदाता कार्य, शिक्षा, बैंकिंग, वित्त, और धार्मिक व्यवसायों को पुरस्कृत करती है। सबसे बड़े आय-लाभ प्रायः गुरु-शनि (सुदृढ़ीकरण), गुरु-शुक्र (रचनात्मक अथवा सौन्दर्यपरक कार्य से पूँजी), और गुरु-बुध (व्यापारिक एवं बौद्धिक आय) में आते हैं। यदि आपका जन्म-गुरु बलवान हो और दूसरे, नवम, अथवा एकादश भाव का समर्थन करे — दशा कुल सम्पत्ति को कई गुना कर सकती है। यदि गुरु पीड़ित हों — नाटकीय छलांग के बजाय मध्यम किन्तु स्थिर वृद्धि की अपेक्षा रखें।`,
      },
    },
    {
      question: { en: 'What is Guru-Chandala dosha and how does it affect this dasha?', hi: 'गुरु-चाण्डाल दोष क्या है और यह इस दशा को कैसे प्रभावित करता है?' },
      answer: {
        en: `Guru-Chandala is formed when Jupiter is conjunct Rahu in the natal chart. Operationally it produces wisdom mixed with confusion — false gurus, religious scams, and a tendency to follow the wrong advisor. During Guru Mahadasha, the Guru–Rahu antardasha (the closing 2 years 4 months) activates this combination most strongly. Symptoms include sudden religious enthusiasm followed by disillusionment, cult-like attachments, or financial loss to a charismatic figure. The remedy is reading classical texts directly rather than depending on intermediaries, verifying every advisor\'s credentials, and the daily Vishnu Sahasranama. The combination is workable; it just requires that the native do their own dharmic homework.`,
        hi: `गुरु-चाण्डाल योग तब बनता है जब जन्म-कुण्डली में गुरु राहु से युक्त हों। व्यावहारिक रूप से यह ज्ञान को भ्रम से मिश्रित कर देता है — झूठे गुरु, धार्मिक छलावे, और ग़लत परामर्शदाता का अनुसरण करने की प्रवृत्ति। गुरु महादशा के दौरान गुरु-राहु अन्तर्दशा (अन्तिम 2 वर्ष 4 माह) इस संयोग को सर्वाधिक सक्रिय करती है। लक्षणों में अकस्मात् धार्मिक उत्साह जिसके पश्चात् भ्रम-भंग, सम्प्रदाय-सदृश आसक्तियाँ, अथवा करिश्माई व्यक्ति को धन-हानि शामिल हैं। उपाय हैं — मध्यस्थों पर निर्भर होने के बजाय शास्त्रों का सीधा अध्ययन, प्रत्येक परामर्शदाता की साख का सत्यापन, और दैनिक विष्णु सहस्रनाम। योग सध्य है; यह केवल माँग करता है कि जातक अपना धार्मिक गृह-कार्य स्वयं करे।`,
      },
    },
    {
      question: { en: 'Best remedies for Guru Mahadasha?', hi: 'गुरु महादशा के सर्वोत्तम उपाय?' },
      answer: {
        en: `Five sustainable remedies in priority order: (1) Daily Vishnu Sahasranama or Brihaspati Stotra recitation, (2) Thursday vrata with phalahar fast and temple lamp offering, (3) ongoing donation to students, scholars, or temples in disrepair — pick one Thursday-pledge and keep it for the full sixteen years, (4) Yellow Sapphire (Pukhraj) only after a competent jyotishi has confirmed compatibility — this is the safest of the major gems, (5) lifestyle moderation against the dasha\'s natural tendency to inflate weight, ego, and over-confidence. Combined and continuous practice multiplies the dasha\'s benevolence; sporadic ritual barely registers.`,
        hi: `प्राथमिकता क्रम में पाँच स्थायी उपाय: (1) दैनिक विष्णु सहस्रनाम अथवा बृहस्पति स्तोत्र पाठ, (2) फलाहार उपवास एवं मन्दिर दीपदान सहित गुरुवार व्रत, (3) छात्रों, विद्वानों, अथवा जीर्णोद्धार-योग्य मन्दिरों को निरन्तर दान — एक गुरुवार-संकल्प चुनें और सोलह वर्ष तक निभाएँ, (4) पुखराज केवल किसी सक्षम ज्योतिषी द्वारा अनुकूलता की पुष्टि के पश्चात् — यह प्रमुख रत्नों में सर्वाधिक सुरक्षित है, (5) दशा की भार-वृद्धि, अहंकार, एवं अति-आत्मविश्वास की प्राकृतिक प्रवृत्ति के विरुद्ध जीवन-शैली संयम। संयुक्त एवं निरन्तर अभ्यास दशा की शुभता को बहुगुणित करता है; अनियमित अनुष्ठान विरले फल देता है।`,
      },
    },
    {
      question: { en: 'Is Guru Mahadasha good for childbirth?', hi: 'क्या गुरु महादशा सन्तान के लिए शुभ है?' },
      answer: {
        en: `Yes — Jupiter is the karaka of children (Putra-karaka), and Guru Mahadasha is classically the most likely period for conception, especially in the Guru–Guru, Guru–Moon, and Guru–Venus sub-periods. The natal fifth house and fifth lord must also support; if those are afflicted, fertility treatments may still be needed within Guru Mahadasha. For couples with delayed conception, beginning Santan Gopal mantra recitation in the first Guru–Guru year and maintaining it through the first conception window is a classical practice that many practitioners find effective.`,
        hi: `हाँ — गुरु सन्तान-कारक (पुत्र-कारक) हैं, और गुरु महादशा शास्त्रीय रूप से गर्भधारण का सर्वाधिक सम्भावित काल है, विशेषकर गुरु-गुरु, गुरु-चन्द्र, और गुरु-शुक्र उप-कालों में। जन्म-कुण्डली के पंचम भाव एवं पंचमेश का भी समर्थन चाहिए; यदि वे पीड़ित हों — गुरु महादशा में भी प्रजनन उपचार आवश्यक हो सकते हैं। विलम्बित गर्भधारण वाले दम्पत्ति प्रथम गुरु-गुरु वर्ष में सन्तान गोपाल मन्त्र जप आरम्भ करें और प्रथम गर्भधारण-खण्ड तक बनाये रखें — अनेक साधक इसे प्रभावी पाते हैं।`,
      },
    },
    {
      question: { en: 'Should I start a new business in Guru Mahadasha?', hi: 'क्या गुरु महादशा में नया व्यवसाय आरम्भ करूँ?' },
      answer: {
        en: `Guru Mahadasha is one of the best windows in the Vimshottari cycle for legitimate enterprise — particularly in education, advisory, finance, law, publishing, healthcare, and dharmic sectors. The strongest start-up windows within the dasha are the Guru–Mars antardasha (decisive launch energy), Guru–Mercury (commercial growth), and Guru–Saturn (institutional structure). Avoid speculative or compromise-laden ventures in Guru–Rahu antardasha. Read your natal tenth and eleventh houses alongside Jupiter to see whether the chart\'s natural career direction aligns with the business you intend to start.`,
        hi: `विंशोत्तरी चक्र में वैध उद्यम के लिए गुरु महादशा सर्वोत्तम काल-खण्डों में से है — विशेषकर शिक्षा, परामर्श, वित्त, विधि, प्रकाशन, स्वास्थ्य-सेवा, और धार्मिक क्षेत्रों में। दशा के भीतर सबसे प्रबल आरम्भ-खण्ड हैं — गुरु-मंगल अन्तर्दशा (निर्णायक प्रक्षेपण-ऊर्जा), गुरु-बुध (व्यापारिक वृद्धि), और गुरु-शनि (संस्थागत संरचना)। गुरु-राहु अन्तर्दशा में सट्टा अथवा समझौता-युक्त उद्यमों से बचें। जो व्यवसाय आरम्भ करना चाहते हैं वह कुण्डली की प्राकृतिक करियर-दिशा के अनुरूप है या नहीं — यह जानने के लिए जन्म-कुण्डली में दशम एवं एकादश भाव गुरु के साथ मिलाएँ।`,
      },
    },
  ],

  howToSteps: [
    {
      name: { en: 'Calculate your dasha sequence', hi: 'अपना दशा क्रम निकालें' },
      text: {
        en: 'Enter your date, time, and place of birth into the Mahadasha Calculator. The full 120-year sequence reveals exactly when your Guru Mahadasha begins, ends, and which antardashas you will run within it.',
        hi: 'महादशा कैलकुलेटर में अपनी जन्म तिथि, समय, और स्थान दर्ज करें। पूर्ण 120 वर्ष का क्रम दिखाएगा कि गुरु महादशा कब आरम्भ होगी, कब समाप्त, और भीतर कौन-सी अन्तर्दशाएँ चलेंगी।',
      },
    },
    {
      name: { en: 'Locate Jupiter in your natal chart', hi: 'जन्म कुण्डली में गुरु की स्थिति देखें' },
      text: {
        en: 'In the rashi chart find Jupiter\'s house, sign, dispositor, conjunct planets, and any aspects from Saturn or Rahu. Jupiter strong in own sign, exalted, or in kendra/trikona delivers the dasha\'s textbook potential. Jupiter combust, debilitated, or in Guru-Chandala requires active remedy.',
        hi: 'राशि चक्र में गुरु का भाव, राशि, राशीश, साथ के ग्रह, और शनि अथवा राहु से दृष्टि देखें। स्वराशि में, उच्च, अथवा केन्द्र/त्रिकोण में बलवान गुरु दशा की पाठ्य-संभावना देते हैं। अस्त, नीच, अथवा गुरु-चाण्डाल युक्त गुरु सक्रिय उपाय की माँग करते हैं।',
      },
    },
    {
      name: { en: 'Identify the running antardasha', hi: 'चालू अन्तर्दशा पहचानें' },
      text: {
        en: 'Within Guru Mahadasha there are nine sub-periods: Guru, Saturn, Mercury, Ketu, Venus, Sun, Moon, Mars, Rahu. The current antardasha lord modifies the parent Jupiter\'s output for that span. Plan major life events (marriage, conception, business launch, property purchase) into the favourable sub-periods identified for your chart.',
        hi: 'गुरु महादशा के भीतर नौ उप-काल हैं: गुरु, शनि, बुध, केतु, शुक्र, सूर्य, चन्द्र, मंगल, राहु। वर्तमान अन्तर्दशेश इस अवधि में मूल गुरु के फल को परिमार्जित करता है। प्रमुख जीवन-घटनाओं (विवाह, गर्भधारण, व्यवसाय आरम्भ, सम्पत्ति-क्रय) को अपनी कुण्डली के लिए चिह्नित अनुकूल उप-कालों में नियोजित करें।',
      },
    },
    {
      name: { en: 'Apply layered remedies from day one', hi: 'पहले दिन से ही स्तरित उपाय अपनाएँ' },
      text: {
        en: 'Begin daily Vishnu Sahasranama or Brihaspati Stotra recitation, observe Thursday vrata, commit to one Thursday-donation pledge for the full sixteen years, and maintain lifestyle moderation. Yellow Sapphire (Pukhraj) is optional and only after a competent jyotishi confirms compatibility with your full chart.',
        hi: 'दैनिक विष्णु सहस्रनाम अथवा बृहस्पति स्तोत्र पाठ आरम्भ करें, गुरुवार व्रत पालन करें, पूरे सोलह वर्षों के लिए एक गुरुवार-दान संकल्प लें, और जीवन-शैली संयम बनाये रखें। पुखराज ऐच्छिक है और केवल तब जब सक्षम ज्योतिषी आपकी पूर्ण कुण्डली से अनुकूलता की पुष्टि करे।',
      },
    },
    {
      name: { en: 'Time major decisions to favourable sub-periods', hi: 'प्रमुख निर्णयों का समय अनुकूल उप-कालों में रखें' },
      text: {
        en: 'For marriage, target Guru–Guru, Guru–Venus, or Guru–Moon. For business launch, target Guru–Mars or Guru–Mercury. For property purchase or institutional appointment, target Guru–Saturn. For higher education or pilgrimage, target Guru–Sun or Guru–Jupiter. The timing within the dasha matters as much as the dasha itself.',
        hi: 'विवाह के लिए — गुरु-गुरु, गुरु-शुक्र, अथवा गुरु-चन्द्र। व्यवसाय आरम्भ के लिए — गुरु-मंगल अथवा गुरु-बुध। सम्पत्ति क्रय अथवा संस्थागत नियुक्ति के लिए — गुरु-शनि। उच्च शिक्षा अथवा तीर्थयात्रा के लिए — गुरु-सूर्य अथवा गुरु-गुरु। दशा के भीतर समय उतना ही महत्त्वपूर्ण है जितनी स्वयं दशा।',
      },
    },
    {
      name: { en: 'Mentor and teach throughout the dasha', hi: 'पूरी दशा में मार्गदर्शन एवं अध्यापन करें' },
      text: {
        en: 'The single most reliable amplifier of Jupiter\'s benevolence is teaching. Mentor at least one younger person formally — a niece, a colleague, a student — through the dasha. Teach what you know. Write down what you have learned. Sponsor one student\'s education if your means allow. Jupiter rewards the dharma of transmission far more than any ritual or gemstone.',
        hi: 'गुरु की शुभता का सबसे विश्वसनीय बढ़ाने वाला तत्त्व है — अध्यापन। दशा भर कम-से-कम एक छोटे व्यक्ति — भतीजी-भांजी, सहकर्मी, छात्र — का औपचारिक मार्गदर्शन करें। जो जानते हैं वह सिखाएँ। जो सीखा है उसे लिखें। यदि साधन हों तो किसी छात्र की शिक्षा का प्रायोजन करें। गुरु संक्रमण-धर्म को किसी भी अनुष्ठान अथवा रत्न से कहीं अधिक पुरस्कृत करते हैं।',
      },
    },
  ],

  datePublished: '2026-05-02',
  dateModified: '2026-05-02',
};
