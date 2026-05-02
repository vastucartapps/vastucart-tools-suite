import type { PlanetRecord } from '../types';

export const BUDH: PlanetRecord = {
  slug: 'budh',
  displayName: { en: 'Budh Mahadasha', hi: 'बुध महादशा' },
  westernName: 'Mercury',
  beejMantra: 'Om Braam Breem Braum Sah Budhaya Namah',
  periodYears: 17,
  periodDays: Math.round(17 * 365.25),
  karaka: {
    en: ['intelligence', 'communication', 'commerce', 'writing', 'analysis', 'youth', 'mathematics', 'travel'],
    hi: ['बुद्धि', 'सम्वाद', 'वाणिज्य', 'लेखन', 'विश्लेषण', 'किशोरावस्था', 'गणित', 'यात्रा'],
  },
  ownSigns: ['Gemini', 'Virgo'],
  exaltation: { sign: 'Virgo', degree: 15 },
  debilitation: { sign: 'Pisces', degree: 15 },
  friendly: ['surya', 'shukra'],
  neutral: ['mangal', 'guru', 'shani'],
  enemy: ['chandra'],
  weekday: { en: 'Wednesday', hi: 'बुधवार' },
  deity: { en: 'Vishnu, Lord Krishna in his student aspect, Saraswati', hi: 'विष्णु, शिष्य रूप में श्रीकृष्ण, सरस्वती' },
  gemstone: { en: 'Emerald (Panna)', hi: 'पन्ना' },
  themeColor: { primary: '#2E7D32', accent: '#66BB6A' },
  icon: 'crown',

  intro: {
    en: `Budh Mahadasha runs for seventeen years and is the chart\'s most cognitively active period. Mercury is buddhi-karaka — the planet of intelligence, communication, commerce, calculation, and craft — and his dasha is when the native\'s mind gets the longest sustained workout of any major period in the Vimshottari cycle. Education completes. Books get written, sometimes published. Businesses get launched, sometimes scaled. Communication careers (broadcasting, journalism, content production, writing, software, sales, marketing, teaching, advisory) reach their full expression. The native\'s capacity to think, to argue, to articulate, to negotiate, to learn — all of these mature deeply across seventeen years. Mercury is also the planet of youth: many natives describe the dasha as a chapter in which they kept the cognitive freshness of their twenties well into middle age. The classical caveat is that Mercury, being the most adaptive of the planets, takes the colour of whichever planet he sits with. A Mercury in good company delivers seventeen years of refined intellect; a Mercury in bad company delivers seventeen years of clever compromise. The natal Mercury\'s associations matter more than its strength alone.`,
    hi: `बुध महादशा सत्रह वर्ष की होती है और कुण्डली का सर्वाधिक संज्ञानात्मक रूप से सक्रिय काल है। बुध बुद्धि-कारक हैं — बुद्धि, सम्वाद, वाणिज्य, गणना, और शिल्प के ग्रह — और उनकी दशा वह काल है जब विंशोत्तरी चक्र की किसी भी प्रमुख दशा से जातक के मन को सबसे लम्बा निरन्तर अभ्यास मिलता है। शिक्षा पूर्ण होती है। ग्रन्थ लिखे जाते हैं, कभी-कभी प्रकाशित। व्यवसाय आरम्भ होते हैं, कभी-कभी मापित। सम्वाद-केन्द्रित करियर (प्रसारण, पत्रकारिता, कन्टेन्ट निर्माण, लेखन, सॉफ़्टवेयर, विक्रय, विपणन, अध्यापन, परामर्श) अपनी पूर्ण अभिव्यक्ति तक पहुँचते हैं। जातक की सोचने, तर्क करने, अभिव्यक्त करने, मोलभाव करने, सीखने की क्षमता — सब सत्रह वर्षों में गहन रूप से परिपक्व होती हैं। बुध युवावस्था के ग्रह भी हैं: अनेक जातक इस दशा को उस अध्याय के रूप में वर्णित करते हैं जिसमें उन्होंने मध्य आयु तक अपने बीस के दशक की संज्ञानात्मक ताज़गी बनाये रखी। शास्त्रीय चेतावनी यह है कि बुध, ग्रहों में सर्वाधिक अनुकूली होने के कारण, जिस ग्रह के साथ बैठते हैं उसका रंग ले लेते हैं। अच्छी संगति में बुध सत्रह वर्षों की परिष्कृत बुद्धि देते हैं; बुरी संगति में सत्रह वर्षों का चतुर समझौता। जन्म-कुण्डली में बुध की संगति उनके अकेले बल से अधिक मायने रखती है।`,
  },

  periodOverview: {
    en: `Seventeen years is the fifth-longest mahadasha. The Vimshottari order from Mercury is Budh–Budh (about 2 years 4 months), Ketu, Shukra, Surya, Chandra, Mangal, Rahu, Guru, Shani. Three sub-periods stand out as developmental: Budh–Venus (2 years 10 months — the dasha\'s most commercially productive sub-period), Budh–Saturn (2 years 8 months — long-term institutional consolidation), and Budh–Rahu (2 years 6 months — foreign and unconventional expansion). Most natives experience three distinct phases: the opening five years (Budh–Budh + Budh–Ketu + early Budh–Venus) typically deliver education completion or career foundation; the middle six years (rest of Budh–Venus + Budh–Sun + Budh–Moon) deliver public-facing professional consolidation; the closing six years (Budh–Mars + Budh–Rahu + Budh–Jupiter + Budh–Saturn) deliver the dasha\'s most ambitious commercial or intellectual achievements. Read in this three-phase structure rather than seventeen flat years.`,
    hi: `सत्रह वर्ष पाँचवीं सबसे लम्बी महादशा है। बुध से विंशोत्तरी क्रम है — बुध-बुध (लगभग 2 वर्ष 4 माह), केतु, शुक्र, सूर्य, चन्द्र, मंगल, राहु, गुरु, शनि। तीन उप-काल विकासात्मक रूप से उभरते हैं: बुध-शुक्र (2 वर्ष 10 माह — दशा का सर्वाधिक व्यापारिक रूप से उत्पादक उप-काल), बुध-शनि (2 वर्ष 8 माह — दीर्घकालिक संस्थागत सुदृढ़ीकरण), और बुध-राहु (2 वर्ष 6 माह — विदेशी एवं अपरम्परागत विस्तार)। अधिकांश जातक तीन भिन्न चरण अनुभव करते हैं: प्रारम्भिक पाँच वर्ष (बुध-बुध + बुध-केतु + प्रारम्भिक बुध-शुक्र) प्रायः शिक्षा पूर्ति अथवा करियर आधार देते हैं; मध्य छह वर्ष (शेष बुध-शुक्र + बुध-सूर्य + बुध-चन्द्र) जन-समक्ष व्यावसायिक सुदृढ़ीकरण देते हैं; अन्तिम छह वर्ष (बुध-मंगल + बुध-राहु + बुध-गुरु + बुध-शनि) दशा की सर्वाधिक महत्त्वाकांक्षी व्यापारिक अथवा बौद्धिक उपलब्धियाँ देते हैं। सत्रह समतल वर्षों के बजाय इस त्रि-चरणीय संरचना में पढ़ें।`,
  },

  wellPlacedEffects: {
    en: `When Mercury is well-placed in the natal chart — in own signs Gemini or Virgo, exalted in Virgo (Bhadra mahapurusha yoga forms when in kendra), in third or sixth or tenth, with Jupiter\'s aspect, in friendly company with Sun or Venus — the seventeen years deliver one of the chart\'s most articulately accomplished periods. Education completes well, often with formal recognition. Books, articles, courses, software products, applications, or content platforms get created and find audiences. Career advancement comes through demonstrated cleverness — the native solves problems others could not, articulates strategy others could not formulate, builds systems others could not design. Income from commerce, advisory, communication, software, journalism, teaching, content, and intellectual property grows significantly. The native often becomes the family\'s primary intellectual reference point — the one consulted on important decisions. Career fields favoured are software, journalism, advisory, finance and accounting, the legal profession, education, publishing, advertising, marketing, sales, broadcasting, and any commerce involving documentation. Health-wise, well-placed Mercury protects the nervous system, the skin, and respiratory function. The deepest gift is internal: a clarity of thought that does not need praise to know it is right, and a verbal articulation that does not need volume to be heard. Mercury\'s seventeen years quietly turn a clever person into a discerning one.`,
    hi: `जब जन्म-कुण्डली में बुध बलवान हों — स्वराशि मिथुन अथवा कन्या में, उच्च के कन्या में (केन्द्र में हो तो भद्र महापुरुष योग बनता है), तृतीय अथवा षष्ठ अथवा दशम में, गुरु की दृष्टि के साथ, सूर्य अथवा शुक्र की मित्र संगति में — तब सत्रह वर्ष कुण्डली के सर्वाधिक अभिव्यक्त रूप से उपलब्धि-पूर्ण कालों में से एक देते हैं। शिक्षा अच्छी पूर्ण होती है, प्रायः औपचारिक मान्यता के साथ। ग्रन्थ, लेख, पाठ्यक्रम, सॉफ़्टवेयर उत्पाद, अनुप्रयोग, अथवा कन्टेन्ट मंच निर्मित होते हैं और श्रोता पाते हैं। प्रदर्शित चातुर्य से करियर उन्नति — जातक उन समस्याओं को हल करता है जिन्हें दूसरे नहीं कर सके, उस रणनीति को अभिव्यक्त करता है जिसे दूसरे नहीं कर सके, उन प्रणालियों को बनाता है जिन्हें दूसरे नहीं डिज़ाइन कर सके। वाणिज्य, परामर्श, सम्वाद, सॉफ़्टवेयर, पत्रकारिता, अध्यापन, कन्टेन्ट, और बौद्धिक सम्पदा से आय उल्लेखनीय रूप से बढ़ती है। जातक प्रायः परिवार का प्राथमिक बौद्धिक सन्दर्भ बिन्दु बनता है — महत्त्वपूर्ण निर्णयों पर परामर्श लिया जाने वाला। अनुकूल व्यवसाय — सॉफ़्टवेयर, पत्रकारिता, परामर्श, वित्त एवं लेखा, विधि, शिक्षा, प्रकाशन, विज्ञापन, विपणन, विक्रय, प्रसारण, और प्रलेखन वाले कोई भी वाणिज्य। स्वास्थ्य की दृष्टि से बलवान बुध स्नायु-तन्त्र, त्वचा, और श्वसन-कार्य की रक्षा करते हैं। सर्वाधिक गहरा उपहार आन्तरिक है: ऐसी विचार-स्पष्टता जिसे सही जानने के लिए प्रशंसा नहीं चाहिए, और ऐसी मौखिक अभिव्यक्ति जिसे सुने जाने के लिए ऊँचे स्वर की आवश्यकता नहीं। बुध के सत्रह वर्ष शान्त रूप से चतुर व्यक्ति को विवेकी में बदल देते हैं।`,
  },

  afflictedEffects: {
    en: `When Mercury is afflicted — debilitated in Pisces, conjunct Saturn or Rahu in dusthana, combust under Sun within 14° (Mercury is unique in that some classical writers consider non-combust Sun-Mercury conjunctions actually beneficial — Budhaditya yoga — so verify combust degree carefully), or in dusthana without redemption — the seventeen years can run as cognitive friction. Difficulty completing degrees or formal qualifications, business ventures that look promising in plan but fail in execution, communication problems with family or business partners, possible scandal or misunderstanding involving documentation or speech, anxiety disorders, sleep problems linked to overthinking, and in the Mercury–Saturn or Mercury–Rahu sub-periods, depression. The chart\'s tendency to overthink intensifies. Decisions become slow; opportunities pass. The afflicted Mercury dasha is the chart\'s structural invitation to learn the difference between intelligence and wisdom — to slow the mind down, to verify before committing, to choose substance over cleverness. Most natives who do that work emerge from the seventeen years more grounded, less reactive, and capable of articulation that has integrity behind it rather than just verbal flair.`,
    hi: `जब बुध पीड़ित हों — मीन में नीच के, दुस्थान में शनि अथवा राहु से युक्त, सूर्य से 14° के भीतर अस्त (बुध इसमें असाधारण हैं — कुछ शास्त्रीय लेखक अनस्त सूर्य-बुध युति को वस्तुतः शुभ — बुधादित्य योग — मानते हैं — अतः अस्त-अंश सावधानीपूर्वक सत्यापन करें), अथवा दुस्थान में बिना उद्धार के — तब सत्रह वर्ष संज्ञानात्मक संघर्ष के रूप में चल सकते हैं। उपाधियाँ अथवा औपचारिक योग्यताएँ पूर्ण करने में कठिनाई, ऐसे व्यापारिक उद्यम जो योजना में आशाजनक लगें किन्तु क्रियान्वयन में विफल हों, परिवार अथवा व्यापारिक साझेदारों से सम्वाद-समस्याएँ, प्रलेखन अथवा वाणी सम्बन्धी कलंक अथवा भ्रम सम्भव, चिन्ता-विकार, अति-चिन्तन से जुड़ी निद्रा-समस्याएँ, और बुध-शनि अथवा बुध-राहु उप-कालों में अवसाद। कुण्डली की अति-चिन्तन प्रवृत्ति तीव्र होती है। निर्णय धीमे हो जाते हैं; अवसर निकल जाते हैं। पीड़ित बुध दशा कुण्डली का संरचनात्मक आमन्त्रण है — बुद्धि और विवेक के बीच अन्तर सीखने का — मन को धीमा करना, प्रतिबद्ध होने से पूर्व सत्यापित करना, चातुर्य पर सार चुनना। अधिकांश जातक जो यह कार्य करते हैं — वे सत्रह वर्षों से अधिक आधारित, कम प्रतिक्रियाशील, और ऐसी अभिव्यक्ति में सक्षम होकर निकलते हैं जिसके पीछे केवल मौखिक चमक के बजाय ईमानदारी हो।`,
  },

  houseEffects: [
    { house: 1, effect: { en: 'Strong placement (own sign Gemini, exalted in Virgo). Personality becomes articulate, youthful, witty. Suits journalists, broadcasters, advisors, software professionals.', hi: 'बलवान स्थिति (स्वराशि मिथुन, उच्च कन्या)। व्यक्तित्व अभिव्यक्त, युवा, बुद्धिमान्। पत्रकार, प्रसारक, परामर्शदाता, सॉफ़्टवेयर व्यावसायिकों के अनुकूल।' } },
    { house: 2, effect: { en: 'Strong placement. Family wealth from intellectual work, persuasive speech, multilingual ability. Excellent for traders, accountants, language professionals.', hi: 'बलवान स्थिति। बौद्धिक कार्य से पारिवारिक धन, प्रभावी वाणी, बहुभाषी क्षमता। व्यापारी, लेखाकार, भाषा-व्यावसायिकों के लिए उत्कृष्ट।' } },
    { house: 3, effect: { en: 'Strongest placement (digbala). Communication, writing, short travel, sibling support all excellent. Suits journalists, content creators, sales professionals.', hi: 'सर्वाधिक बलवान स्थिति (दिग्बल)। सम्वाद, लेखन, अल्प यात्रा, भाई-बहन का सहयोग — सब उत्कृष्ट। पत्रकार, कन्टेन्ट सर्जक, विक्रय व्यावसायिकों के अनुकूल।' } },
    { house: 4, effect: { en: 'Mid-strength. Mother\'s intellectual influence, comfortable home with library/study, vehicles. Suits real-estate analysts, home-business operators.', hi: 'मध्य-बल। माता का बौद्धिक प्रभाव, पुस्तकालय/अध्ययन-कक्ष वाला सुखद गृह, वाहन। अचल सम्पत्ति विश्लेषक, गृह-व्यवसाय संचालकों के अनुकूल।' } },
    { house: 5, effect: { en: 'Strong placement. Education excels, children intellectually gifted, creative writing flourishes. Speculation gains via analysis. Suits researchers, academic publishers.', hi: 'बलवान स्थिति। शिक्षा उत्कृष्ट, सन्तानें बौद्धिक रूप से प्रतिभाशाली, रचनात्मक लेखन फलता है। विश्लेषण से सट्टा-लाभ। शोधकर्ता, शैक्षणिक प्रकाशकों के अनुकूल।' } },
    { house: 6, effect: { en: 'Strong placement. Defeats enemies through communication and documentation, succeeds in legal practice, audit, healthcare administration. Excellent for litigators, doctors.', hi: 'बलवान स्थिति। सम्वाद एवं प्रलेखन से शत्रुओं को पराजित करता है, विधि-प्रथा, अंकेक्षण, स्वास्थ्य-सेवा प्रशासन में सफलता। मुकदमेबाज़, चिकित्सकों के लिए उत्कृष्ट।' } },
    { house: 7, effect: { en: 'Strong placement. Marriage to articulate partner, business partnerships flourish, public reputation as a sharp negotiator. Suits diplomats, business consultants.', hi: 'बलवान स्थिति। अभिव्यक्त जीवनसाथी से विवाह, व्यापारिक साझेदारियाँ फलती हैं, तीक्ष्ण मोलभावक की सार्वजनिक प्रतिष्ठा। राजनयिक, व्यापार परामर्शदाताओं के अनुकूल।' } },
    { house: 8, effect: { en: 'Difficult house. Research excellence, occult studies, transformation through learning, possible mental-health complexity. Suits forensic, occult, depth-psychology specialists.', hi: 'कठिन भाव। शोध-उत्कृष्टता, तान्त्रिक अध्ययन, अध्ययन से रूपान्तरण, मानसिक-स्वास्थ्य जटिलता सम्भव। फोरेन्सिक, तान्त्रिक, गहन-मनोविज्ञान विशेषज्ञों के अनुकूल।' } },
    { house: 9, effect: { en: 'Strong placement. Father\'s intellectual influence, foreign higher education, dharmic teaching, publishing. Suits academics, religious scholars, missionaries.', hi: 'बलवान स्थिति। पिता का बौद्धिक प्रभाव, विदेशी उच्च शिक्षा, धार्मिक शिक्षण, प्रकाशन। शैक्षणिक, धार्मिक विद्वान्, मिशनरी के अनुकूल।' } },
    { house: 10, effect: { en: 'Strong placement. Career rises through expertise — finance, software, advisory, journalism, government documentation. Honour through articulate work.', hi: 'बलवान स्थिति। विशेषज्ञता से करियर ऊँचाई — वित्त, सॉफ़्टवेयर, परामर्श, पत्रकारिता, शासकीय प्रलेखन। अभिव्यक्त कार्य से सम्मान।' } },
    { house: 11, effect: { en: 'Strong income placement. Multiple revenue streams from intellectual work, large network of clever colleagues, fulfilment of business goals.', hi: 'बलवान आय-स्थिति। बौद्धिक कार्य से अनेक राजस्व-स्रोत, चतुर सहकर्मियों का विशाल नेटवर्क, व्यापारिक लक्ष्यों की पूर्ति।' } },
    { house: 12, effect: { en: 'Mixed but cognitively rich. Foreign study or work, ashram learning, contemplative writing. Sleep deep if Mercury well-placed; insomnia if afflicted.', hi: 'मिश्रित किन्तु संज्ञानात्मक रूप से समृद्ध। विदेशी अध्ययन अथवा कार्य, आश्रम अध्ययन, चिन्तनशील लेखन। बुध बलवान हों तो निद्रा गहरी; पीड़ित हों तो अनिद्रा।' } },
  ],

  antardashas: [
    {
      subRuler: 'Budh',
      label: { en: 'Budh–Budh Antardasha', hi: 'बुध-बुध अन्तर्दशा' },
      duration: { en: 'About 2 years 4 months 27 days', hi: 'लगभग 2 वर्ष 4 माह 27 दिन' },
      effect: {
        en: `The opening sub-period sets the dasha\'s intellectual tone. Most natives report a major educational, professional, or intellectual development in the first year — degree completion, professional licence, business launch, book project, software product, or content platform. The native\'s thinking gets clearer, faster, and more articulate. Communication-driven careers see early-dasha breakthroughs here. The risk pattern: over-commitment under cognitive enthusiasm — Mercury inflated produces too-many-projects-at-once, overlapping deadlines, and burnout by month eighteen. Pace yourself; the dasha is seventeen years, not two.`,
        hi: `प्रारम्भिक उप-काल दशा का बौद्धिक स्वर निर्धारित करता है। अधिकांश जातक प्रथम वर्ष में बड़ा शैक्षणिक, व्यावसायिक, अथवा बौद्धिक विकास रिपोर्ट करते हैं — उपाधि पूर्ति, व्यावसायिक अनुज्ञप्ति, व्यवसाय आरम्भ, ग्रन्थ-परियोजना, सॉफ़्टवेयर उत्पाद, अथवा कन्टेन्ट मंच। जातक की सोच स्पष्ट, तीव्र, और अधिक अभिव्यक्त होती है। सम्वाद-केन्द्रित करियर यहीं प्रारम्भिक-दशा सफलताएँ देखते हैं। जोखिम-स्वरूप: संज्ञानात्मक उत्साह में अति-प्रतिबद्धता — फूला हुआ बुध एक-साथ-बहुत-सी-परियोजनाएँ, अतिव्यापी समय-सीमाएँ, और अठारहवें माह तक थकावट उत्पन्न करता है। गति बनाये रखें; दशा सत्रह वर्ष की है, दो की नहीं।`,
      },
    },
    {
      subRuler: 'Ketu',
      label: { en: 'Budh–Ketu Antardasha', hi: 'बुध-केतु अन्तर्दशा' },
      duration: { en: 'About 11 months 27 days', hi: 'लगभग 11 माह 27 दिन' },
      effect: {
        en: `Ketu cuts what Mercury was building. Brief but disorienting: a project gets cancelled, a degree program changes, a business pivot becomes necessary, a writing project gets abandoned. Many natives describe this as the year their thinking turns inward — what looked productive in the opening year is reviewed and pruned. Health-wise, brief skin issues, fevers, or unexplained anxiety possible. Read this as a course-correction window rather than a setback; what gets cut here was not going to survive the dasha\'s remaining sixteen years anyway.`,
        hi: `केतु काटते हैं उसे जिसे बुध बना रहे थे। संक्षिप्त किन्तु विचलित करने वाला: परियोजना रद्द होती है, उपाधि कार्यक्रम बदलता है, व्यवसायिक मोड़ आवश्यक होता है, लेखन-परियोजना त्याग दी जाती है। अनेक जातक इसे उस वर्ष के रूप में वर्णित करते हैं जब उनकी सोच अन्तर्मुख होती है — प्रारम्भिक वर्ष में जो उत्पादक लगा वह समीक्षित एवं छँटाया जाता है। स्वास्थ्य की दृष्टि से संक्षिप्त त्वचा समस्याएँ, ज्वर, अथवा अव्याख्यायित चिन्ता सम्भव। इसे क्षति के बजाय पाठ्यक्रम-सुधार खण्ड के रूप में पढ़ें; यहाँ जो छँटता है वह दशा के शेष सोलह वर्ष किसी भी रूप में जीवित नहीं रहने वाला था।`,
      },
    },
    {
      subRuler: 'Shukra',
      label: { en: 'Budh–Shukra Antardasha', hi: 'बुध-शुक्र अन्तर्दशा' },
      duration: { en: 'About 2 years 10 months 0 days', hi: 'लगभग 2 वर्ष 10 माह 0 दिन' },
      effect: {
        en: `Mercury and Venus are friends; this is the dasha\'s most commercially productive sub-period. Marketing, sales, advertising, design, hospitality management, fashion content, online retail, and luxury communication all flourish. Marriage if delayed; the romantic life of married natives also gains this antardasha\'s warmth. Income from creative-commercial work expands. Many natives describe these thirty-four months as the period when intellectual capability finally aligned with material reward. Risk: over-commitment to glamorous projects that look promising but stretch the native thin.`,
        hi: `बुध और शुक्र मित्र हैं; यह दशा का सर्वाधिक व्यापारिक रूप से उत्पादक उप-काल है। विपणन, विक्रय, विज्ञापन, डिज़ाइन, आतिथ्य प्रबन्धन, फ़ैशन कन्टेन्ट, ऑनलाइन खुदरा, और विलासिता सम्वाद — सब फलते हैं। यदि विवाह विलम्बित हो; विवाहित जातकों का प्रेम-जीवन भी इस अन्तर्दशा की उष्णता पाता है। रचनात्मक-व्यापारिक कार्य से आय विस्तार। अनेक जातक इन चौंतीस मासों को उस काल के रूप में वर्णित करते हैं जब बौद्धिक क्षमता अन्ततः भौतिक पुरस्कार से संरेखित हुई। जोखिम: ग्लैमरस परियोजनाओं के प्रति अति-प्रतिबद्धता जो आशाजनक लगें किन्तु जातक को पतला कर दें।`,
      },
    },
    {
      subRuler: 'Surya',
      label: { en: 'Budh–Surya Antardasha', hi: 'बुध-सूर्य अन्तर्दशा' },
      duration: { en: 'About 10 months 6 days', hi: 'लगभग 10 माह 6 दिन' },
      effect: {
        en: `Mercury and Sun are neutrals but classically often combined in the natal chart (Mercury never far from Sun). The Budhaditya yoga — Mercury and Sun together, not combust — produces visible intellectual recognition: government documentation, exam clearance, formal credentialing, public speaking on authoritative topics, leadership of a knowledge-based unit. Father\'s intellectual influence may resurface. Risk: if Mercury is combust under Sun in the natal chart, this antardasha can produce a confidence crisis specifically in the area of intellectual self-presentation. Read the natal degree gap carefully.`,
        hi: `बुध और सूर्य तटस्थ हैं किन्तु शास्त्रीय रूप से प्रायः जन्म-कुण्डली में संयुक्त (बुध सूर्य से दूर कभी नहीं)। बुधादित्य योग — बुध और सूर्य साथ, अनस्त — दृश्य बौद्धिक मान्यता देता है: शासकीय प्रलेखन, परीक्षा सफलता, औपचारिक साख-निर्माण, प्रामाणिक विषयों पर सार्वजनिक भाषण, ज्ञान-आधारित इकाई का नेतृत्व। पिता का बौद्धिक प्रभाव पुनः उभर सकता है। जोखिम: यदि जन्म-कुण्डली में बुध सूर्य से अस्त हों — यह अन्तर्दशा बौद्धिक आत्म-प्रस्तुति के क्षेत्र में आत्मविश्वास-संकट उत्पन्न कर सकती है। जन्म-कुण्डली का अंश-अन्तर सावधानीपूर्वक पढ़ें।`,
      },
    },
    {
      subRuler: 'Chandra',
      label: { en: 'Budh–Chandra Antardasha', hi: 'बुध-चन्द्र अन्तर्दशा' },
      duration: { en: 'About 1 year 5 months 0 days', hi: 'लगभग 1 वर्ष 5 माह 0 दिन' },
      effect: {
        en: `Mercury and Moon are enemies in classical Naisargika Maitri — analysis versus emotion, dryness versus moisture. The combination produces a peculiar sub-period: the native\'s thinking acquires emotional sensitivity while their emotional life acquires analytical clarity. Public-facing communication careers (broadcasting, teaching, writing for general audiences) flourish because the native communicates with both heart and head. The risk pattern: over-thinking emotion into anxiety, or emotionalising decisions that should be analytical. Mother\'s intellectual influence visible. The seventeen-month sub-period passes with most natives reporting a maturation of family communication.`,
        hi: `नैसर्गिक मैत्री में बुध और चन्द्र शत्रु हैं — विश्लेषण बनाम भावना, शुष्कता बनाम आर्द्रता। संयोजन एक विलक्षण उप-काल उत्पन्न करता है: जातक की सोच भावनात्मक संवेदनशीलता प्राप्त करती है जबकि उसका भावनात्मक जीवन विश्लेषणात्मक स्पष्टता। जन-समक्ष सम्वाद-करियर (प्रसारण, अध्यापन, सामान्य श्रोताओं के लिए लेखन) फलते हैं क्योंकि जातक हृदय एवं मस्तिष्क दोनों से सम्वाद करता है। जोखिम-स्वरूप: भावना को चिन्ता में अति-सोच लेना, अथवा उन निर्णयों को भावनात्मक करना जो विश्लेषणात्मक होने चाहिए। माता का बौद्धिक प्रभाव दृश्य। सत्रह-मासी उप-काल बीतता है — अधिकांश जातक पारिवारिक सम्वाद की परिपक्वता रिपोर्ट करते हैं।`,
      },
    },
    {
      subRuler: 'Mangal',
      label: { en: 'Budh–Mangal Antardasha', hi: 'बुध-मंगल अन्तर्दशा' },
      duration: { en: 'About 11 months 27 days', hi: 'लगभग 11 माह 27 दिन' },
      effect: {
        en: `Mercury and Mars are enemies; the combination produces friction between thought and action. Sales, litigation, defence-tech, sports journalism, surgical research — fields that combine intellect with decisive force — flourish if the native channels both. Risk pattern: argumentative emails, sharp text messages, blunt boardroom speech that damages relationships. The classical advice is to delay all sharp communication by twenty-four hours during this antardasha. The year passes; what was learned about restraint serves the dasha\'s remaining years.`,
        hi: `बुध और मंगल शत्रु हैं; संयोजन विचार और कर्म के बीच घर्षण उत्पन्न करता है। विक्रय, मुकदमा, रक्षा-तकनीकी, खेल पत्रकारिता, शल्य अनुसन्धान — ऐसे क्षेत्र जो बुद्धि को निर्णायक बल से जोड़ते हैं — फलते हैं यदि जातक दोनों को निकाले। जोखिम-स्वरूप: तर्क-वितर्क ईमेल, तीक्ष्ण सन्देश, बोर्डरूम में स्पष्टवादी भाषण जो सम्बन्ध बिगाड़ें। शास्त्रीय परामर्श है — इस अन्तर्दशा में सभी तीक्ष्ण सम्वाद को चौबीस घण्टे टालें। वर्ष बीतता है; संयम के बारे में जो सीखा वह दशा के शेष वर्षों में काम आता है।`,
      },
    },
    {
      subRuler: 'Rahu',
      label: { en: 'Budh–Rahu Antardasha', hi: 'बुध-राहु अन्तर्दशा' },
      duration: { en: 'About 2 years 6 months 18 days', hi: 'लगभग 2 वर्ष 6 माह 18 दिन' },
      effect: {
        en: `Mercury and Rahu are friends; this is the dasha\'s most expansively unconventional sub-period. Foreign work, technology platforms, online business, social media, content empires, cryptocurrency, leveraged trading — all flourish. Many of the dasha\'s biggest income inflections occur here. Risk patterns: over-extension on platforms whose business models change overnight, content controversies that go viral, technology debt accumulating faster than revenue, intellectual scandal involving foreign actors. The year passes with the native typically transformed in scale — better networked, more visible, sometimes wealthier, but operating at a complexity that requires careful Saturn-aspect verification before binding decisions are signed.`,
        hi: `बुध और राहु मित्र हैं; यह दशा का सर्वाधिक विस्तारकारी रूप से अपरम्परागत उप-काल है। विदेशी कार्य, प्रौद्योगिकी मंच, ऑनलाइन व्यवसाय, सोशल मीडिया, कन्टेन्ट साम्राज्य, क्रिप्टोकरेंसी, उधारित व्यापार — सब फलते हैं। दशा के अनेक सबसे बड़े आय-मोड़ यहीं होते हैं। जोखिम-स्वरूप: ऐसे मंचों पर अति-विस्तार जिनके व्यापार-मॉडल रात-भर बदलते हैं, वायरल हो जाने वाले कन्टेन्ट विवाद, राजस्व से अधिक तीव्र संचित प्रौद्योगिकी ऋण, विदेशी कर्ताओं को सम्मिलित करने वाला बौद्धिक कलंक। वर्ष बीतता है — जातक प्रायः मापन में रूपान्तरित होकर — बेहतर नेटवर्क, अधिक दृश्य, कभी-कभी अधिक धनी, किन्तु ऐसी जटिलता पर संचालित जो बाध्यकारी निर्णयों पर हस्ताक्षर से पूर्व सावधानीपूर्ण शनि-दृष्टि सत्यापन माँगती है।`,
      },
    },
    {
      subRuler: 'Guru',
      label: { en: 'Budh–Guru Antardasha', hi: 'बुध-गुरु अन्तर्दशा' },
      duration: { en: 'About 2 years 3 months 6 days', hi: 'लगभग 2 वर्ष 3 माह 6 दिन' },
      effect: {
        en: `Mercury and Jupiter are enemies in Naisargika Maitri but operationally one of the dasha\'s most ethically grounded sub-periods. The combination produces wisdom paired with articulation: scholarly recognition, religious teaching that reaches a wide audience, dharmic publishing, advisory work that combines intelligence with integrity. Many natives complete a doctorate, receive a major academic honour, write a defining book, or accept a leadership role in a knowledge institution during these twenty-seven months. Children\'s education advances; family religious events common.`,
        hi: `नैसर्गिक मैत्री में बुध और गुरु शत्रु हैं किन्तु व्यावहारिक रूप से दशा के सर्वाधिक नैतिक रूप से आधारित उप-कालों में से एक। संयोजन ज्ञान को अभिव्यक्ति से जोड़कर देता है: विद्वत्ता-मान्यता, धार्मिक शिक्षण जो विशाल श्रोता तक पहुँचे, धार्मिक प्रकाशन, परामर्शदाता कार्य जो बुद्धि को ईमानदारी से जोड़े। अनेक जातक इन सत्ताईस मासों में डॉक्टरेट पूर्ण करते हैं, प्रमुख शैक्षणिक सम्मान प्राप्त करते हैं, परिभाषक ग्रन्थ लिखते हैं, अथवा ज्ञान-संस्था में नेतृत्व-भूमिका स्वीकार करते हैं। सन्तानों की शिक्षा अग्रसर; पारिवारिक धार्मिक आयोजन सामान्य।`,
      },
    },
    {
      subRuler: 'Shani',
      label: { en: 'Budh–Shani Antardasha', hi: 'बुध-शनि अन्तर्दशा' },
      duration: { en: 'About 2 years 8 months 9 days', hi: 'लगभग 2 वर्ष 8 माह 9 दिन' },
      effect: {
        en: `The closing sub-period of the seventeen years. Mercury and Saturn are friends; the combination delivers the dasha\'s most institutionally consolidating chapter. Long-term contracts in advisory or technology roles, the formalisation of business structures built earlier in the dasha, the registration of intellectual property, doctoral submissions, government certifications, large-scale software releases. Energy is steady, focused, slow. By the close of this antardasha most natives have built something visibly durable — even if they are tired. The handover to Ketu Mahadasha begins mentally; many natives report a sense of "completion of the building phase, beginning of the integration phase." Health-wise, joints, sleep, and nervous system need monitoring through these thirty-two months.`,
        hi: `सत्रह वर्षों का अन्तिम उप-काल। बुध और शनि मित्र हैं; संयोजन दशा का सर्वाधिक संस्थागत रूप से सुदृढ़ीकरण-कारी अध्याय देता है। परामर्शदाता अथवा प्रौद्योगिकी भूमिकाओं में दीर्घकालिक अनुबन्ध, दशा में पूर्व निर्मित व्यापार-संरचनाओं का औपचारिकीकरण, बौद्धिक सम्पदा पंजीकरण, शोध-प्रबन्ध प्रस्तुति, शासकीय प्रमाणन, बड़े-पैमाने पर सॉफ़्टवेयर विमोचन। ऊर्जा स्थिर, केन्द्रित, धीमी। इस अन्तर्दशा के अन्त तक अधिकांश जातकों ने कुछ दृश्य रूप से टिकाऊ निर्मित कर लिया होता है — भले ही वे थके हुए हों। केतु महादशा को सुपुर्दगी मानसिक रूप से आरम्भ; अनेक जातक रिपोर्ट करते हैं — "निर्माण-चरण की समाप्ति, एकीकरण-चरण का आरम्भ"। स्वास्थ्य की दृष्टि से इन बत्तीस मासों में सन्धि, निद्रा, और स्नायु-तन्त्र पर निगरानी आवश्यक।`,
      },
    },
  ],

  remedies: [
    {
      title: { en: 'Mantra Recitation', hi: 'मन्त्र जप' },
      body: {
        en: `The Mercury beej mantra (Om Braam Breem Braum Sah Budhaya Namah) is recited 9,000 times across forty days, beginning on a Wednesday in Shukla paksha. Lay alternatives are the Vishnu Sahasranama recited on Wednesdays, the Saraswati Stotram for clarity of intellect, the Gayatri Mantra (108 daily) for general cognitive support, or the Madhusudana Stotram for those who feel mental confusion. Green or sphatik (rock crystal) rosary is preferred. Recitation is most effective on Wednesday at sunrise. The Saraswati upasana — particularly on Vasant Panchami and Wednesdays of the bright fortnight — is the deepest Mercury practice for students and writers across the seventeen-year dasha.`,
        hi: `बुध बीज मन्त्र (ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः) चालीस दिनों में 9,000 बार जप, शुक्ल पक्ष के बुधवार से आरम्भ। जन-विधियाँ हैं — बुधवार को विष्णु सहस्रनाम पाठ, बुद्धि-स्पष्टता हेतु सरस्वती स्तोत्रम्, सामान्य संज्ञानात्मक समर्थन हेतु गायत्री मन्त्र (दैनिक 108), अथवा मानसिक भ्रम अनुभव करने वालों के लिए मधुसूदन स्तोत्रम्। हरी अथवा स्फटिक माला श्रेष्ठ। जप बुधवार सूर्योदय पर सर्वाधिक प्रभावी। सरस्वती उपासना — विशेषकर वसन्त पञ्चमी एवं शुक्ल पक्ष के बुधवारों को — सत्रह-वर्षीय दशा भर छात्रों एवं लेखकों के लिए सबसे गहरा बुध अभ्यास है।`,
      },
    },
    {
      title: { en: 'Emerald (Panna)', hi: 'पन्ना' },
      body: {
        en: `Emerald is Mercury\'s gem and one of the gentler Jyotish stones — quality matters more than carat weight. Three to five carats minimum, preferably Colombian, set in gold or silver, little finger of the right hand, energised on a Wednesday in Shukla paksha at sunrise with the beej mantra. Heavily included or oiled emeralds carry distorted Mercury energy; demand a transparency certificate when buying. Lab-grown emeralds are accepted in modern practice. Do not pair Emerald with Pearl (Mercury-Moon enmity). For natives who cannot afford Emerald, Peridot or Green Tourmaline are budget alternatives that work similarly. Wear during Mercury sub-periods of any dasha; especially during the seventeen years of Mercury Mahadasha if compatible with the natal chart.`,
        hi: `पन्ना बुध का रत्न है और कोमल ज्योतिष रत्नों में से — गुणवत्ता रत्ती-भार से अधिक मायने रखती है। न्यूनतम तीन से पाँच रत्ती, श्रेष्ठतया कोलम्बियाई, स्वर्ण अथवा चाँदी में, दाहिने हाथ की कनिष्ठा, शुक्ल पक्ष के बुधवार को सूर्योदय पर बीज मन्त्र से अभिमन्त्रित। अत्यधिक अन्तर्निविष्ट अथवा तेल-उपचारित पन्ने विकृत बुध-ऊर्जा वहन करते हैं; क्रय के समय पारदर्शिता प्रमाणपत्र माँगें। प्रयोगशाला-निर्मित पन्ने आधुनिक प्रथा में स्वीकार्य। पन्ने को मोती के साथ न पहनें (बुध-चन्द्र शत्रुता)। पन्ना सम्भव न हो तो पेरिडॉट अथवा हरा टूर्मलाइन बजट विकल्प जो समान कार्य करते हैं। किसी भी दशा के बुध उप-कालों में पहनें; विशेषकर बुध महादशा के सत्रह वर्षों में यदि जन्म-कुण्डली से अनुकूल हो।`,
      },
    },
    {
      title: { en: 'Daana (Donation)', hi: 'दान' },
      body: {
        en: `Mercury rules students, writers, communicators, and the youth. Donation in Budh\'s name reaches school-fee scholarships, library funding, free coaching for students from poor families, scholarships for women in tech or journalism, free Wi-Fi for rural learners, and book donations to government schools. Green vegetables (especially dudhi/lauki, green leafy vegetables), green clothing, books, stationery, and bronze are classical Mercury daana. Wednesday before noon is the prescribed time. The deeper Mercury daana is teaching itself — give knowledge as freely as one gives money. One free hour a week of teaching, mentoring, or Q&A in one\'s area of expertise compounds over seventeen years into the dasha\'s deepest dharmic asset.`,
        hi: `बुध छात्रों, लेखकों, सम्वादकों, और युवाओं पर शासन करते हैं। बुध के नाम पर दान विद्यालय-शुल्क छात्रवृत्तियों, पुस्तकालय वित्त-पोषण, निर्धन परिवारों के छात्रों को निःशुल्क प्रशिक्षण, तकनीकी अथवा पत्रकारिता में महिलाओं को छात्रवृत्तियाँ, ग्रामीण शिक्षार्थियों को निःशुल्क वाई-फाई, और शासकीय विद्यालयों को ग्रन्थ-दान तक पहुँचना चाहिए। हरी सब्ज़ियाँ (विशेषकर लौकी, हरी पत्तेदार सब्ज़ियाँ), हरे वस्त्र, ग्रन्थ, लेखन-सामग्री, और काँसा शास्त्रीय बुध-दान हैं। बुधवार दोपहर से पूर्व विहित समय। गहरा बुध-दान स्वयं अध्यापन है — ज्ञान को धन के समान मुक्त रूप से दें। साप्ताहिक एक निःशुल्क घण्टा अपनी विशेषज्ञता क्षेत्र में अध्यापन, मार्गदर्शन, अथवा प्रश्नोत्तर — सत्रह वर्षों में संचित होकर दशा की गहनतम धार्मिक सम्पत्ति बनता है।`,
      },
    },
    {
      title: { en: 'Vrata (Observance)', hi: 'व्रत' },
      body: {
        en: `The Budhwar Vrat (Wednesday fast) is the standard Mercury observance: a sunrise-to-sunset fast on Wednesdays, with phalahar permitted, breaking after Vishnu aarti. Twenty-one consecutive Wednesdays is the classical full cycle. Vasant Panchami — the fifth lunar day of Magha\'s bright fortnight, considered Saraswati\'s birthday — is the year\'s most charged Mercury day; visit a Saraswati temple, recite the Saraswati Vandana, donate books or stationery to schools. Pilgrimage to a Vishnu temple (Tirupati, Guruvayoor, Srirangam, Badrinath) once during the dasha is meritorious; the Lakshmi-Narayan combination is particularly aligned with Mercury\'s commercial-and-dharmic balance.`,
        hi: `बुधवार व्रत मानक बुध अनुष्ठान है: बुधवार को सूर्योदय से सूर्यास्त तक उपवास, फलाहार अनुमत, विष्णु आरती के पश्चात् व्रत-समाप्ति। इक्कीस क्रमिक बुधवार शास्त्रीय पूर्ण चक्र। वसन्त पञ्चमी — माघ शुक्ल पक्ष की पञ्चमी, सरस्वती जयन्ती — वर्ष का सर्वाधिक आवेशित बुध-दिन; सरस्वती मन्दिर दर्शन, सरस्वती वन्दना का पाठ, विद्यालयों को ग्रन्थ अथवा लेखन-सामग्री का दान। दशा के दौरान एक बार विष्णु मन्दिर (तिरुपति, गुरुवायूर, श्रीरंगम, बद्रीनाथ) की तीर्थयात्रा पुण्यप्रद; लक्ष्मी-नारायण संयोजन बुध के व्यापारिक-एवं-धार्मिक संतुलन से विशेष रूप से संरेखित।`,
      },
    },
    {
      title: { en: 'Lifestyle Adjustments', hi: 'जीवन-शैली समायोजन' },
      body: {
        en: `The Mercury dasha rewards cognitive discipline. Sleep before midnight; the late-night creative impulse that Mercury inflates damages the same nervous system Mercury rules. Maintain reading time daily — at least one hour of uninterrupted reading on substantive material, not feeds. Reduce caffeine which over-stimulates Mercury\'s already-quick mind; reduce alcohol which clouds it. Practise verbal precision — finish sentences fully, avoid filler words, write before you speak on important matters. The single most reliable Mercury practice: daily writing, even three hundred words, on whatever the mind is processing. Mercury rewards the practice of thought made articulate; over seventeen years, daily writing produces a clarity that no degree can teach. Avoid lying — Mercury registers untruth precisely, and the dasha\'s difficulty under afflicted Mercury frequently traces to small lies that compounded into structural ones.`,
        hi: `बुध की दशा संज्ञानात्मक अनुशासन को पुरस्कृत करती है। मध्यरात्रि से पूर्व सोएँ; देर-रात की रचनात्मक आवेग जो बुध बढ़ाते हैं — वही उस स्नायु-तन्त्र को क्षति पहुँचाती है जिस पर बुध शासन करते हैं। दैनिक पठन-समय बनाये रखें — कम-से-कम एक घण्टा सारगर्भित सामग्री पर बाधा-रहित पठन, फ़ीड पर नहीं। कैफ़ीन कम करें जो बुध के पहले से तीव्र मन को अति-उत्तेजित करता है; मद्य कम करें जो उसे धुँधला करता है। वाणी-शुद्धता का अभ्यास करें — वाक्य पूर्णतः समाप्त करें, भरने वाले शब्दों से बचें, महत्त्वपूर्ण विषयों पर बोलने से पूर्व लिखें। एकमात्र सर्वाधिक विश्वसनीय बुध-अभ्यास: दैनिक लेखन, तीन सौ शब्द भी, जो भी मन संसाधित कर रहा है उस पर। बुध अभिव्यक्त-किए-गए-विचार के अभ्यास को पुरस्कृत करते हैं; सत्रह वर्षों में दैनिक लेखन ऐसी स्पष्टता उत्पन्न करता है जो कोई उपाधि नहीं सिखा सकती। झूठ से बचें — बुध असत्य को सटीकता से दर्ज करते हैं, और पीड़ित बुध के अधीन दशा की कठिनाई प्रायः उन छोटे झूठों से मिलती है जो संरचनात्मक झूठों में संचित हुए।`,
      },
    },
  ],

  casePatterns: {
    en: `Three Mercury Mahadasha patterns recur in consultation. The first is the academic-and-professional ascent — common in students, doctoral candidates, professionals seeking certifications, and the corporate-ladder cohort — where the dasha sees degrees completed, professional licences obtained, senior promotions confirmed, and a recognisable expertise mature. The second is the commercial chapter — common in entrepreneurs, traders, software founders, content creators, and consultants — where the dasha sees a business launched, scaled, sometimes sold, and the native\'s name becomes a market reference point. The third is the writer\'s chapter, less common but more enduring: the dasha sees the native produce a body of written work — books, journals, columns, screenplays, code repositories — that outlasts the dasha\'s seventeen years and becomes the foundation of the next thirty. Read the natal Mercury\'s house, sign, dispositor, and aspects from Saturn, Jupiter, or the nodes before deciding which pattern is most likely.`,
    hi: `परामर्श में तीन बुध महादशा स्वरूप पुनरावृत्त होते हैं। पहला शैक्षणिक-एवं-व्यावसायिक उत्कर्ष — छात्रों, डॉक्टरेट प्रत्याशियों, प्रमाणन-खोजी व्यावसायिकों, और कॉर्पोरेट-सीढ़ी समूह में सामान्य — जहाँ दशा उपाधियाँ पूर्ण होते, व्यावसायिक अनुज्ञप्तियाँ प्राप्त होते, वरिष्ठ पदोन्नतियाँ पुष्ट होते, और पहचाने जा सकने वाली विशेषज्ञता परिपक्व होते देखती है। दूसरा व्यापारिक अध्याय — उद्यमियों, व्यापारियों, सॉफ़्टवेयर संस्थापकों, कन्टेन्ट सर्जकों, और परामर्शदाताओं में सामान्य — जहाँ दशा व्यवसाय आरम्भ, मापित, कभी-कभी विक्रय होते, और जातक का नाम बाज़ार-सन्दर्भ-बिन्दु बनते देखती है। तीसरा लेखक-अध्याय, कम सामान्य किन्तु अधिक स्थायी: दशा देखती है कि जातक एक लिखित कार्य-निकाय उत्पन्न करता है — ग्रन्थ, पत्रिकाएँ, स्तम्भ, पटकथाएँ, कोड भण्डार — जो दशा के सत्रह वर्षों के बाद भी रहता है और अगले तीस वर्षों की नींव बनता है। कौन-सा स्वरूप सर्वाधिक सम्भाव्य है यह निर्धारित करने से पूर्व जन्म-कुण्डली में बुध का भाव, राशि, राशीश, और शनि, गुरु, अथवा पातों से दृष्टियाँ देखें।`,
  },

  faqs: [
    {
      question: { en: 'Is Budh Mahadasha good for studies?', hi: 'क्या बुध महादशा अध्ययन के लिए शुभ है?' },
      answer: {
        en: `Yes — Budh Mahadasha is the strongest dasha in the Vimshottari cycle for academic work. Mercury is buddhi-karaka. The strongest sub-periods for education are Budh–Budh (the long opening), Budh–Jupiter (dharmic learning), Budh–Mercury–Sun antardashas, and Budh–Saturn (long-term doctoral or research work). Most natives running Mercury Mahadasha during their student years complete their education with formal recognition; many running it later return to formal study mid-career.`,
        hi: `हाँ — विंशोत्तरी चक्र में शैक्षणिक कार्य के लिए बुध महादशा सबसे प्रबल दशा है। बुध बुद्धि-कारक हैं। शिक्षा के लिए सबसे प्रबल उप-काल — बुध-बुध (दीर्घ प्रारम्भ), बुध-गुरु (धार्मिक अध्ययन), बुध-बुध-सूर्य अन्तर्दशाएँ, और बुध-शनि (दीर्घकालिक डॉक्टरेट अथवा शोध कार्य)। अधिकांश जातक जो छात्र-काल में बुध महादशा चलाते हैं — वे औपचारिक मान्यता के साथ शिक्षा पूर्ण करते हैं; अनेक जो बाद में चलाते हैं — मध्य-करियर में औपचारिक अध्ययन में लौटते हैं।`,
      },
    },
    {
      question: { en: 'How long is Budh Mahadasha?', hi: 'बुध महादशा कितने वर्ष की होती है?' },
      answer: {
        en: `Seventeen calendar years (about 6,209 days) — the fifth-longest of the nine Vimshottari Mahadashas. Within these seventeen years there are nine antardashas, the longest being Budh–Venus (2 years 10 months), Budh–Saturn (2 years 8 months), and Budh–Rahu (2 years 6 months); the shortest are Budh–Sun (10 months) and Budh–Ketu (about a year).`,
        hi: `सत्रह कलैंडर वर्ष (लगभग 6,209 दिन) — नौ विंशोत्तरी महादशाओं में पाँचवीं सबसे लम्बी। इन सत्रह वर्षों में नौ अन्तर्दशाएँ हैं — सबसे लम्बी बुध-शुक्र (2 वर्ष 10 माह), बुध-शनि (2 वर्ष 8 माह), और बुध-राहु (2 वर्ष 6 माह); सबसे छोटी बुध-सूर्य (10 माह) और बुध-केतु (लगभग एक वर्ष)।`,
      },
    },
    {
      question: { en: 'Will my business succeed in Budh Mahadasha?', hi: 'क्या बुध महादशा में मेरा व्यवसाय सफल होगा?' },
      answer: {
        en: `Mercury rules commerce, so the dasha is naturally aligned with business — but the business type matters. Communication-based businesses (software, content, advisory, education, journalism, marketing, sales-driven enterprise, online retail) flourish strongly. Manufacturing, real estate, and agriculture are workable but less aligned. The strongest launch sub-periods are Budh–Budh (long opening), Budh–Venus (commercial pairing), Budh–Jupiter (legitimacy), and Budh–Saturn (institutional structure). Avoid major business commitments in Budh–Ketu and Budh–Mars unless the natal Mars is well-placed.`,
        hi: `बुध वाणिज्य पर शासन करते हैं, अतः दशा व्यवसाय से स्वाभाविक रूप से संरेखित — किन्तु व्यवसाय-प्रकार महत्त्व रखता है। सम्वाद-आधारित व्यवसाय (सॉफ़्टवेयर, कन्टेन्ट, परामर्श, शिक्षा, पत्रकारिता, विपणन, विक्रय-केन्द्रित उद्यम, ऑनलाइन खुदरा) प्रबल रूप से फलते हैं। निर्माण, अचल सम्पत्ति, और कृषि सध्य किन्तु कम संरेखित। सबसे प्रबल प्रक्षेपण उप-काल — बुध-बुध (दीर्घ प्रारम्भ), बुध-शुक्र (व्यापारिक युग्मन), बुध-गुरु (वैधता), और बुध-शनि (संस्थागत संरचना)। बुध-केतु और बुध-मंगल में बड़ी व्यापारिक प्रतिबद्धताओं से बचें — जब तक जन्म-मंगल बलवान न हों।`,
      },
    },
    {
      question: { en: 'What career suits Budh Mahadasha?', hi: 'बुध महादशा के लिए कौन-से व्यवसाय अनुकूल हैं?' },
      answer: {
        en: `Software and technology, journalism and media, advisory and consulting, finance and accounting, the legal profession, education at all levels, publishing and content creation, advertising and marketing, sales (especially complex-product sales), broadcasting, banking, audit, and any commerce that involves heavy documentation. Manual labour, agriculture without business overlay, and physically intensive trades are workable but rarely produce the dasha\'s signature accomplishments — Mercury rewards the application of intellect more than physical force.`,
        hi: `सॉफ़्टवेयर एवं प्रौद्योगिकी, पत्रकारिता एवं मीडिया, परामर्श, वित्त एवं लेखा, विधि-व्यवसाय, सभी स्तरों पर शिक्षा, प्रकाशन एवं कन्टेन्ट निर्माण, विज्ञापन एवं विपणन, विक्रय (विशेषकर जटिल-उत्पाद विक्रय), प्रसारण, बैंकिंग, अंकेक्षण, और किसी भी वाणिज्य में जिसमें भारी प्रलेखन हो। शारीरिक श्रम, बिना व्यवसाय-आवरण के कृषि, और शारीरिक रूप से सघन व्यापार सध्य किन्तु इस दशा की विशिष्ट उपलब्धियाँ विरले देते हैं — बुध शारीरिक बल से अधिक बुद्धि के प्रयोग को पुरस्कृत करते हैं।`,
      },
    },
    {
      question: { en: 'Can Budh Mahadasha cause anxiety?', hi: 'क्या बुध महादशा से चिन्ता हो सकती है?' },
      answer: {
        en: `Afflicted Mercury in his own dasha, particularly conjunct Saturn or Rahu, frequently correlates with anxiety disorders, sleep disruption from rumination, and in difficult charts, panic attacks or generalised anxiety disorder. The astrological reading explains the timing — Mercury rules the nervous system. Treatment must combine astrological practice (daily Vishnu Sahasranama or Saraswati Stotram, sleep hygiene, reduced caffeine, daily writing as cognitive discharge) with appropriate clinical care if symptoms cross into clinical territory. Pure mantra alone is insufficient for clinical anxiety; both layers are real and both are needed.`,
        hi: `अपनी ही दशा में पीड़ित बुध, विशेषकर शनि अथवा राहु से युक्त, प्रायः चिन्ता-विकारों, चिन्तन-चक्र से निद्रा-विघ्न, और कठिन कुण्डलियों में पैनिक अटैक अथवा सामान्यीकृत चिन्ता-विकार से जुड़े हैं। ज्योतिष-पाठ समय की व्याख्या देता है — बुध स्नायु-तन्त्र पर शासन करते हैं। उपचार को ज्योतिष-अभ्यास (दैनिक विष्णु सहस्रनाम अथवा सरस्वती स्तोत्रम्, निद्रा-स्वच्छता, घटा हुआ कैफ़ीन, संज्ञानात्मक निकास के रूप में दैनिक लेखन) को उपयुक्त नैदानिक देखभाल के साथ संयोजित करना चाहिए — यदि लक्षण नैदानिक सीमा में जाएँ। नैदानिक चिन्ता के लिए केवल शुद्ध मन्त्र अपर्याप्त; दोनों परतें वास्तविक हैं और दोनों आवश्यक।`,
      },
    },
    {
      question: { en: 'How to remedy a weak Mercury in this dasha?', hi: 'इस दशा में निर्बल बुध का उपाय क्या है?' },
      answer: {
        en: `Five layered practices: (1) Daily Vishnu Sahasranama or Saraswati Stotram recitation — anchor the mind in classical articulation; (2) Twenty-one consecutive Wednesday fasts; (3) Donation to students from poor families, library funding, free Wi-Fi for rural learners — pick one Wednesday-pledge and keep it for the full seventeen years; (4) Daily writing of at least three hundred words on whatever the mind is processing — Mercury rewards thought made articulate; (5) Emerald (Panna) only after a competent jyotishi has read your full chart. Combined practice transforms Mercury\'s reactive cleverness into seasoned discernment.`,
        hi: `पाँच स्तरित अभ्यास: (1) दैनिक विष्णु सहस्रनाम अथवा सरस्वती स्तोत्रम् पाठ — मन को शास्त्रीय अभिव्यक्ति में आधारित करें; (2) इक्कीस क्रमिक बुधवार व्रत; (3) निर्धन परिवारों के छात्रों को दान, पुस्तकालय वित्त-पोषण, ग्रामीण शिक्षार्थियों को निःशुल्क वाई-फाई — एक बुधवार-संकल्प चुनें और पूरे सत्रह वर्ष निभाएँ; (4) जो भी मन संसाधित कर रहा है उस पर दैनिक कम-से-कम तीन सौ शब्द लेखन — बुध अभिव्यक्त-किए-गए-विचार को पुरस्कृत करते हैं; (5) पन्ना केवल किसी सक्षम ज्योतिषी द्वारा आपकी पूर्ण कुण्डली पढ़ने के पश्चात्। संयुक्त अभ्यास बुध के प्रतिक्रियाशील चातुर्य को परिपक्व विवेक में परिवर्तित करता है।`,
      },
    },
    {
      question: { en: 'Should I change jobs in Budh Mahadasha?', hi: 'क्या बुध महादशा में नौकरी बदलूँ?' },
      answer: {
        en: `Mercury rules transitions, communication-based change, and quick adaptation. Job changes during the dasha are common and usually positive when made in favourable sub-periods — Budh–Budh, Budh–Jupiter, Budh–Mercury–Venus, or Budh–Saturn (for long-term institutional roles). Avoid impulsive job changes in Budh–Mars (argumentative exits) or Budh–Ketu (sudden detachment that may regret later). Read the natal tenth lord and tenth house alongside Mercury to confirm career-direction alignment.`,
        hi: `बुध संक्रमण, सम्वाद-आधारित परिवर्तन, और तीव्र अनुकूलन पर शासन करते हैं। दशा के दौरान नौकरी परिवर्तन सामान्य और प्रायः धनात्मक — जब अनुकूल उप-कालों में किए जाएँ — बुध-बुध, बुध-गुरु, बुध-बुध-शुक्र, अथवा बुध-शनि (दीर्घकालिक संस्थागत भूमिकाओं के लिए)। बुध-मंगल (तर्क-वितर्क प्रस्थान) अथवा बुध-केतु (अकस्मात् विरक्ति जो बाद में पछतावा दे सकती है) में आवेगपूर्ण नौकरी परिवर्तन से बचें। करियर-दिशा संरेखण की पुष्टि के लिए जन्म-कुण्डली में दशमेश एवं दशम भाव बुध के साथ पढ़ें।`,
      },
    },
    {
      question: { en: 'What is Budhaditya Yoga and does it apply in this dasha?', hi: 'बुधादित्य योग क्या है और क्या यह इस दशा में लागू होता है?' },
      answer: {
        en: `Budhaditya yoga is formed when Mercury and Sun are conjunct in the natal chart — but only when Mercury is not combust (within roughly 14° of Sun for combustion). Operationally the yoga produces visible intellectual recognition: government documentation, exam clearance, public-speaking authority, leadership of a knowledge-based unit. During Budh Mahadasha the Budh–Surya antardasha activates this yoga most strongly. If Mercury IS combust in the natal chart, the same conjunction can produce the opposite — a confidence crisis specifically in intellectual self-presentation. Read the natal degree-gap between Mercury and Sun carefully before applying.`,
        hi: `बुधादित्य योग तब बनता है जब जन्म-कुण्डली में बुध और सूर्य युक्त हों — किन्तु केवल जब बुध अस्त न हों (दहन के लिए सूर्य से लगभग 14° के भीतर)। व्यावहारिक रूप से यह योग दृश्य बौद्धिक मान्यता देता है: शासकीय प्रलेखन, परीक्षा सफलता, सार्वजनिक भाषण-प्रामाणिकता, ज्ञान-आधारित इकाई का नेतृत्व। बुध महादशा में बुध-सूर्य अन्तर्दशा इस योग को सर्वाधिक प्रबलता से सक्रिय करती है। यदि जन्म-कुण्डली में बुध अस्त हों — वही युति विपरीत उत्पन्न कर सकती है — बौद्धिक आत्म-प्रस्तुति में आत्मविश्वास-संकट। लागू करने से पूर्व जन्म-कुण्डली में बुध और सूर्य के बीच अंश-अन्तर सावधानीपूर्वक पढ़ें।`,
      },
    },
  ],

  howToSteps: [
    {
      name: { en: 'Generate your dasha timeline', hi: 'अपनी दशा समय-रेखा बनाएँ' },
      text: {
        en: 'Enter your date, time, and place of birth into the Mahadasha Calculator. The full 120-year sequence reveals exactly when your Budh Mahadasha begins and which antardashas you will run within those seventeen years.',
        hi: 'महादशा कैलकुलेटर में अपनी जन्म तिथि, समय, और स्थान दर्ज करें। पूर्ण 120 वर्ष का क्रम दिखाएगा कि बुध महादशा कब आरम्भ होगी और इन सत्रह वर्षों में कौन-सी अन्तर्दशाएँ चलेंगी।',
      },
    },
    {
      name: { en: 'Locate Mercury in your natal chart', hi: 'जन्म कुण्डली में बुध की स्थिति देखें' },
      text: {
        en: 'Find Mercury\'s house, sign, conjunct planets (especially Sun — verify combustion degree), and aspects from Saturn or Rahu. Mercury in own signs (Gemini, Virgo), exalted in Virgo, in third (digbala), sixth, or tenth delivers the dasha\'s textbook intellectual potential. Mercury debilitated in Pisces, combust within 14° of Sun, or in dusthana requires active remedy.',
        hi: 'बुध का भाव, राशि, साथ के ग्रह (विशेषकर सूर्य — दहन-अंश सत्यापन करें), और शनि अथवा राहु से दृष्टि देखें। स्वराशि (मिथुन, कन्या) में, उच्च कन्या में, तृतीय (दिग्बल), षष्ठ, अथवा दशम में बलवान बुध दशा की पाठ्य बौद्धिक संभावना देते हैं। मीन में नीच के, सूर्य से 14° के भीतर अस्त, अथवा दुस्थानगत बुध सक्रिय उपाय की माँग करते हैं।',
      },
    },
    {
      name: { en: 'Read the dasha as three phases', hi: 'दशा को तीन चरणों के रूप में पढ़ें' },
      text: {
        en: 'Group antardashas into three phases of about five-six years each: foundation (Budh–Budh + Budh–Ketu + Budh–Venus opening), public consolidation (rest of Budh–Venus + Budh–Sun + Budh–Moon), ambitious expansion (Budh–Mars + Budh–Rahu + Budh–Jupiter + Budh–Saturn). Plan major intellectual or commercial commitments by phase rather than by individual antardasha.',
        hi: 'अन्तर्दशाओं को लगभग पाँच-छह वर्ष के तीन चरणों में समूहित करें: आधार (बुध-बुध + बुध-केतु + बुध-शुक्र प्रारम्भ), जन-समक्ष सुदृढ़ीकरण (शेष बुध-शुक्र + बुध-सूर्य + बुध-चन्द्र), महत्त्वाकांक्षी विस्तार (बुध-मंगल + बुध-राहु + बुध-गुरु + बुध-शनि)। प्रमुख बौद्धिक अथवा व्यापारिक प्रतिबद्धताएँ व्यक्तिगत अन्तर्दशा के बजाय चरण द्वारा नियोजित करें।',
      },
    },
    {
      name: { en: 'Build daily writing into the dasha', hi: 'दशा में दैनिक लेखन का अभ्यास बनाएँ' },
      text: {
        en: 'The single most reliable Budh Mahadasha practice is daily writing — at least three hundred words on whatever the mind is processing. Sustained for the full seventeen years, this practice transforms Mercury\'s reactive cleverness into seasoned discernment. Combined with daily Vishnu Sahasranama or Saraswati Stotram, it produces the dasha\'s deepest cognitive growth.',
        hi: 'सबसे विश्वसनीय बुध महादशा अभ्यास है दैनिक लेखन — जो भी मन संसाधित कर रहा है उस पर कम-से-कम तीन सौ शब्द। पूरे सत्रह वर्ष बनाये रखने पर यह अभ्यास बुध के प्रतिक्रियाशील चातुर्य को परिपक्व विवेक में परिवर्तित करता है। दैनिक विष्णु सहस्रनाम अथवा सरस्वती स्तोत्रम् के साथ संयुक्त, यह दशा का गहनतम संज्ञानात्मक विकास उत्पन्न करता है।',
      },
    },
    {
      name: { en: 'Time major commitments to favourable sub-periods', hi: 'प्रमुख प्रतिबद्धताओं का समय अनुकूल उप-कालों में रखें' },
      text: {
        en: 'For business launch, target Budh–Budh, Budh–Venus, Budh–Jupiter. For doctoral or long-term research, target Budh–Saturn. For foreign work or technology pivot, target Budh–Rahu. For government documentation or exams, target Budh–Sun. Defer all sharp communication during Budh–Mars and major commitments during Budh–Ketu.',
        hi: 'व्यवसाय आरम्भ के लिए — बुध-बुध, बुध-शुक्र, बुध-गुरु। डॉक्टरेट अथवा दीर्घकालिक शोध के लिए — बुध-शनि। विदेशी कार्य अथवा प्रौद्योगिकी मोड़ के लिए — बुध-राहु। शासकीय प्रलेखन अथवा परीक्षाओं के लिए — बुध-सूर्य। बुध-मंगल में सभी तीक्ष्ण सम्वाद और बुध-केतु में बड़ी प्रतिबद्धताएँ स्थगित करें।',
      },
    },
    {
      name: { en: 'Teach what you learn', hi: 'जो सीखें उसे सिखाएँ' },
      text: {
        en: 'Mercury rewards the dharma of transmission. Set aside one free hour a week to teach, mentor, or hold open Q&A in your area of expertise. Over seventeen years, this single hour compounds into the dasha\'s deepest dharmic asset and produces an articulation that no degree alone can teach.',
        hi: 'बुध संक्रमण-धर्म को पुरस्कृत करते हैं। साप्ताहिक एक निःशुल्क घण्टा अपनी विशेषज्ञता क्षेत्र में अध्यापन, मार्गदर्शन, अथवा खुले प्रश्नोत्तर के लिए रखें। सत्रह वर्षों में यह एक घण्टा संचित होकर दशा की गहनतम धार्मिक सम्पत्ति बनता है और ऐसी अभिव्यक्ति उत्पन्न करता है जो केवल कोई उपाधि नहीं सिखा सकती।',
      },
    },
  ],

  datePublished: '2026-05-02',
  dateModified: '2026-05-02',
};
