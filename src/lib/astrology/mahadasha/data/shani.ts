import type { PlanetRecord } from '../types';

export const SHANI: PlanetRecord = {
  slug: 'shani',
  displayName: { en: 'Shani Mahadasha', hi: 'शनि महादशा' },
  westernName: 'Saturn',
  beejMantra: 'Om Praam Preem Praum Sah Shanaischaraya Namah',
  periodYears: 19,
  periodDays: Math.round(19 * 365.25),
  karaka: {
    en: ['karma', 'longevity', 'discipline', 'service', 'old age', 'sorrow', 'hard work', 'detachment'],
    hi: ['कर्म', 'आयु', 'अनुशासन', 'सेवा', 'वृद्धावस्था', 'दुःख', 'परिश्रम', 'वैराग्य'],
  },
  ownSigns: ['Capricorn', 'Aquarius'],
  exaltation: { sign: 'Libra', degree: 20 },
  debilitation: { sign: 'Aries', degree: 20 },
  friendly: ['budh', 'shukra'],
  neutral: ['guru'],
  enemy: ['surya', 'chandra', 'mangal'],
  weekday: { en: 'Saturday', hi: 'शनिवार' },
  deity: { en: 'Shanaiscara, Yama, Hanuman, Kala Bhairava', hi: 'शनैश्चर, यम, हनुमान, काल भैरव' },
  gemstone: { en: 'Blue Sapphire (Neelam)', hi: 'नीलम' },
  themeColor: { primary: '#1E3A5F', accent: '#384B70' },
  icon: 'orbit',

  intro: {
    en: `Shani Mahadasha lasts nineteen years — the longest of all nine major periods in the Vimshottari sequence. It is also the most misread. Popular astrology treats Saturn as a malefic to be feared, but the classical authorities — Parashara in the Brihat Parashara Hora Shastra, Varahamihira, Mantreswara — describe Shani as the lord of karma, the slow planet who asks you to settle accounts. When Shani's nineteen years begin in your chart you do not enter a period of misfortune. You enter a period where every promise the chart makes about discipline, structure, longevity, and service is tested in the open. What was built without sincerity collapses. What was built honestly hardens into something that lasts the rest of your life. Anyone running this period seriously needs to understand what Saturn is asking of them, because the dasha is too long to just survive.`,
    hi: `शनि महादशा उन्नीस वर्ष की होती है — विंशोत्तरी क्रम की नौ मुख्य दशाओं में सबसे लम्बी। और सबसे अधिक गलत समझी जाने वाली भी यही है। लोकप्रिय ज्योतिष शनि को केवल पाप ग्रह मानकर डराता है, परन्तु बृहत् पाराशर होरा शास्त्र में महर्षि पाराशर, वराहमिहिर, और फलदीपिका के मन्त्रेश्वर शनि को कर्म का अधिष्ठाता कहते हैं — वह धीमा ग्रह जो आपके हिसाब-किताब का निपटारा करवाता है। जब आपकी कुण्डली में शनि की उन्नीस वर्ष की दशा आरम्भ होती है तब आप दुर्भाग्य के काल में नहीं प्रवेश करते। आप उस काल में प्रवेश करते हैं जहाँ कुण्डली के अनुशासन, संरचना, आयु और सेवा सम्बन्धी हर वचन की परीक्षा खुले मैदान में होती है। जो बिना सच्चाई के बनाया गया था वह ढह जाता है। जो ईमानदारी से बना था वह कठोर होकर ऐसी नींव बन जाता है जो शेष जीवन साथ देती है।`,
  },

  periodOverview: {
    en: `Vimshottari Mahadasha distributes 120 years across nine planetary lords; Shani's share is nineteen, second only to Venus's twenty. The period is structurally three sections of roughly six and a third years each, marked by the antardashas of Saturn-in-Saturn (the first 3 years), then sequential sub-periods of Mercury, Ketu, Venus, Sun, Moon, Mars, Rahu, and Jupiter. The nature of Shani's dasha is therefore staged: the first phase establishes the lesson, the middle phase tests it under different planetary moods, and the closing Jupiter sub-period — where Saturn meets the planet of dharma and grace — almost always brings the resolution. Reading the dasha as a single nineteen-year flat surface is a mistake. It is a sequence of nine smaller chapters, each of which should be analyzed in its own right.`,
    hi: `विंशोत्तरी महादशा कुल 120 वर्षों को नौ ग्रह स्वामियों में वितरित करती है; शनि का भाग उन्नीस वर्ष है, जो शुक्र के बीस वर्षों के बाद दूसरा सबसे बड़ा है। यह काल लगभग छह-छह वर्षों के तीन खण्डों में संरचित है, जिनकी शुरुआत शनि-शनि अंतर्दशा (प्रथम तीन वर्ष) से होती है और फिर बुध, केतु, शुक्र, सूर्य, चन्द्र, मंगल, राहु, और गुरु की क्रमिक उप-दशाएँ आती हैं। इसलिए शनि महादशा का स्वरूप मंचित है — प्रथम चरण पाठ की स्थापना करता है, मध्य चरण उसे विभिन्न ग्रहों के स्वभाव में परखता है, और अन्तिम गुरु अंतर्दशा — जहाँ शनि का धर्म-ग्रह से मिलन होता है — प्रायः समाधान लाती है। उन्नीस वर्षों को एक समतल इकाई समझना भूल है। यह नौ छोटे अध्यायों का क्रम है, प्रत्येक का विश्लेषण अलग से होना चाहिए।`,
  },

  wellPlacedEffects: {
    en: `When Shani is well-placed in the natal chart — in his own signs Capricorn or Aquarius, exalted in Libra, in the third, sixth, tenth or eleventh houses, or aspected by Jupiter — the nineteen years tend to deliver something unusual: slow, durable, hard-won material consolidation. Promotions arrive after demonstrable service rather than charm. Property purchases are deliberate and stay in the family for decades. The native often takes on responsibility older relatives cannot, and is recognized for it. Health-wise, a strong Shani protects the bones, joints, teeth, and the spine; it gives a cooler temperament that resists the inflammatory diseases of Mars and the consumption diseases of Sun. Career-wise, jobs in iron, oil, mining, infrastructure, civil service, judiciary, archaeology, manuscript-work, and traditional medicine flourish. Saturn rewards the kind of work that nobody else wants to do for very long. People running a strong Shani dasha quietly become indispensable. They rarely become celebrities; they become the person without whom an institution does not function.`,
    hi: `जब शनि जन्म-कुण्डली में बलवान होते हैं — स्वराशि मकर या कुम्भ में, उच्च के तुला में, तीसरे-छठे-दशम-एकादश भाव में, अथवा गुरु से दृष्ट हों — तब उन्नीस वर्ष असाधारण फल देते हैं: धीमा, टिकाऊ, परिश्रम से कमाया हुआ भौतिक सुदृढ़ीकरण। पदोन्नति आकर्षण से नहीं, स्पष्ट सेवा के बाद मिलती है। सम्पत्ति की खरीद सोच-समझकर होती है और दशकों तक परिवार में रहती है। जातक प्रायः उन ज़िम्मेदारियों को सम्भालता है जिन्हें वरिष्ठ उठा नहीं पाते, और इसके लिए पहचाना जाता है। स्वास्थ्य की दृष्टि से बलवान शनि अस्थि, सन्धि, दाँत और मेरुदण्ड की रक्षा करते हैं; वह शीतल प्रकृति देते हैं जो मंगल के दाहक रोगों तथा सूर्य के क्षयकारी रोगों से बचाती है। व्यवसाय में लोह, तेल, खनन, अधोसंरचना, सिविल सेवा, न्याय व्यवस्था, पुरातत्त्व, पाण्डुलिपि-कार्य और परम्परागत चिकित्सा फलते हैं। शनि उस कार्य का पारिश्रमिक देते हैं जिसे कोई दीर्घकाल तक करना नहीं चाहता। बलवान शनि दशा वाला व्यक्ति चुपचाप अनिवार्य बन जाता है — वह जिसके बिना संस्था नहीं चलती।`,
  },

  afflictedEffects: {
    en: `When Saturn is afflicted in the chart — debilitated in Aries, conjunct or aspected by enemies (Sun, Moon, Mars), placed in the eighth or twelfth house without redemption, combust, or in malefic rashis without aspects of benefics — the nineteen-year period becomes one of structural delay. Marriage, children, the parental home, the body's vitality — all of these are placed under deferred timelines. The classical signature is sustained shram (labour) without commensurate phala (fruit) for the first two thirds of the period. The native may carry institutional or familial obligations that should have belonged to someone else. Work involves chronic friction with seniors. Joints, knees, teeth and digestive elimination tend to weaken. The Sade Sati window — Saturn's seven-and-a-half year transit over the 12th, 1st and 2nd from natal Moon — when it overlaps with a Saturn antardasha within Saturn mahadasha can produce the period's heaviest year. None of this is permanent. Saturn afflicted in the natal but transiting through good houses operationally still finishes the dasha with something concrete; it just takes the long route there.`,
    hi: `जब शनि कुण्डली में पीड़ित हों — मेष में नीच के, शत्रु ग्रहों (सूर्य, चन्द्र, मंगल) से युक्त या दृष्ट, अष्टम-द्वादश भाव में बिना उद्धार के, अस्त, अथवा शुभ ग्रहों की दृष्टि के बिना अशुभ राशि में — तब यह उन्नीस-वर्षीय काल संरचनात्मक विलम्ब का काल बन जाता है। विवाह, सन्तान, पैतृक गृह, शरीर की ऊर्जा — सब स्थगित समय-सीमाओं में चले जाते हैं। शास्त्रीय लक्षण है: काल के पहले दो-तिहाई में निरन्तर श्रम और तदनुरूप फल का अभाव। जातक प्रायः ऐसे संस्थागत या पारिवारिक भार उठाता है जो किसी और के होने चाहिए थे। कार्य में वरिष्ठों से दीर्घकालिक टकराव रहता है। सन्धि, घुटने, दाँत और पाचन-निष्कासन कमज़ोर पड़ने लगते हैं। साढ़ेसाती — चन्द्र राशि से 12, 1 और 2 भाव पर शनि का साढ़े सात वर्ष का गोचर — जब शनि महादशा के भीतर शनि अंतर्दशा से ओवरलैप करता है, तब काल का सबसे भारी वर्ष आ सकता है। पर यह स्थायी नहीं है। यदि जन्म-कुण्डली में शनि पीड़ित हैं किन्तु गोचर में शुभ भावों से जा रहे हैं तो दशा अन्ततः कुछ मूर्त ही देकर समाप्त होती है; मार्ग केवल लम्बा होता है।`,
  },

  houseEffects: [
    { house: 1, effect: { en: 'Reshapes the body and self-image. Native becomes more reserved, takes responsibility seriously, may look older than age. Constitution strengthens slowly through discipline.', hi: 'शरीर और आत्म-छवि को नये रूप में ढालती है। जातक संकोची हो जाता है, ज़िम्मेदारी गम्भीरता से लेता है, उम्र से बड़ा दिख सकता है। अनुशासन से शरीर धीरे-धीरे दृढ़ होता है।' } },
    { house: 2, effect: { en: 'Family wealth tested. Income gains come from non-glamorous, repetitive work. Speech becomes more measured. Possible diet/teeth issues mid-period.', hi: 'पारिवारिक धन की परीक्षा। आय रूखे, पुनरावृत्तिमूलक कार्य से आती है। वाणी संयत हो जाती है। काल के मध्य में आहार/दन्त समस्याएँ सम्भव।' } },
    { house: 3, effect: { en: 'Strong placement. Persistence in skill-building, writing, and short-trip work pays off. Sibling responsibilities increase. Excellent for tradesmen, athletes, journalists.', hi: 'बलवान स्थिति। कौशल-निर्माण, लेखन और अल्प-यात्रा कार्य में दृढ़ता फल देती है। भाई-बहन की ज़िम्मेदारियाँ बढ़ती हैं। शिल्पकार, खिलाड़ी, पत्रकार के लिए उत्कृष्ट।' } },
    { house: 4, effect: { en: 'Heavy house. Property and mother both come into focus, often with extended construction or caretaking. Emotional loneliness common. Lasting real estate gains by period end.', hi: 'भारी भाव। सम्पत्ति और माता दोनों केन्द्र में आते हैं, प्रायः लम्बे निर्माण या सेवा-कार्य के साथ। भावनात्मक एकाकीपन सामान्य। दशा-अन्त तक स्थायी अचल सम्पत्ति का लाभ।' } },
    { house: 5, effect: { en: 'Children and creative output delayed but eventually solid. Speculation losses if Saturn is afflicted. Older mentors become teachers. Suits research, mathematics.', hi: 'सन्तान और रचनात्मक उत्पादन में विलम्ब किन्तु अन्ततः ठोस। पीड़ित शनि से सट्टे में हानि। वरिष्ठ मार्गदर्शक गुरु बनते हैं। शोध, गणित के अनुकूल।' } },
    { house: 6, effect: { en: 'Excellent placement. Defeats enemies, resolves litigation, manages chronic illness with discipline. Service careers, healthcare, and labour-management thrive.', hi: 'उत्तम स्थिति। शत्रुओं को परास्त करता है, मुकदमे हल होते हैं, अनुशासन से दीर्घकालिक रोग नियन्त्रित होते हैं। सेवा-व्यवसाय, स्वास्थ्य-सेवा, श्रम-प्रबन्धन में उन्नति।' } },
    { house: 7, effect: { en: 'Marriage and partnership tested. Spouse may be older, more serious, or carry their own karmic load. Business partnerships only succeed with rigorous contracts.', hi: 'विवाह और साझेदारी की परीक्षा। जीवनसाथी आयु में बड़ा, गम्भीर, अथवा अपना कर्म-भार रखने वाला हो सकता है। व्यापारिक साझेदारी कठोर अनुबन्धों से ही सफल होती है।' } },
    { house: 8, effect: { en: 'Difficult house. Long transformations, dealing with inheritance, surgeries, or the death of an elder. Useful for occult and research work; otherwise a slow attritional period.', hi: 'कठिन भाव। दीर्घ रूपान्तरण, उत्तराधिकार, शल्य चिकित्सा, अथवा वरिष्ठ की मृत्यु के विषय। तन्त्र-शोध कार्य के लिए उपयोगी; अन्यथा धीमा क्षयकारी काल।' } },
    { house: 9, effect: { en: 'Father-related responsibility. Religious duty becomes serious. Long-distance travel for work, often to colder or industrial regions. Fortune builds late but durably.', hi: 'पिता सम्बन्धी ज़िम्मेदारी। धर्म-कर्तव्य गम्भीर हो जाते हैं। कार्य हेतु लम्बी यात्राएँ, प्रायः शीत या औद्योगिक क्षेत्रों में। भाग्योदय देर से किन्तु टिकाऊ।' } },
    { house: 10, effect: { en: 'Strongest possible placement (digbala). Career rises through duty, public office, civil service, judiciary. Accumulates titles and quiet authority.', hi: 'सर्वाधिक बलवान स्थिति (दिग्बल)। कर्म, सार्वजनिक पद, सिविल सेवा, न्याय व्यवस्था से करियर ऊँचाई प्राप्त करता है। उपाधियाँ और शान्त अधिकार संचित होते हैं।' } },
    { house: 11, effect: { en: 'Strong placement for income, network among older people, and structural gains from organisations. Friendships are few but loyal. Salaried roles favoured over flashy ventures.', hi: 'आय, वरिष्ठजनों के बीच नेटवर्क, और संस्थाओं से संरचनात्मक लाभ की दृष्टि से बलवान। मित्र कम पर निष्ठावान। दिखावटी उपक्रमों से अधिक वेतनभोगी भूमिकाएँ अनुकूल।' } },
    { house: 12, effect: { en: 'Heavy expenditure on property, foreign settlement, or care of an institution. Sleep disturbance possible. Spiritual retreats and ashram practice gain traction late in the dasha.', hi: 'सम्पत्ति, विदेश-स्थापना, अथवा संस्था-पोषण पर भारी व्यय। निद्रा-विकार सम्भव। दशा के उत्तरार्ध में आध्यात्मिक एकान्त-साधना और आश्रम-अभ्यास में रुचि बढ़ती है।' } },
  ],

  antardashas: [
    {
      subRuler: 'Shani',
      label: { en: 'Shani–Shani Antardasha', hi: 'शनि-शनि अन्तर्दशा' },
      duration: { en: 'About 3 years 0 months 3 days', hi: 'लगभग 3 वर्ष 0 माह 3 दिन' },
      effect: {
        en: `The opening sub-period sets the entire dasha's tone. Saturn-in-Saturn is uncompromising: it shows the native exactly what they have neglected. People in this antardasha often change jobs, relocate, separate from someone they thought permanent, or take on a long-postponed responsibility. Health complaints that were tolerable for years now demand treatment. There is no hiding from one's accumulated decisions. Read the natal Saturn's house and aspects with extra care here — this sub-period is a strict reading of those signatures.`,
        hi: `प्रथम अन्तर्दशा सम्पूर्ण महादशा की प्रकृति निर्धारित करती है। शनि-शनि कठोर होता है: यह जातक को स्पष्ट दिखाता है कि उसने किसको उपेक्षित रखा है। इस अन्तर्दशा में लोग प्रायः नौकरी बदलते हैं, स्थान परिवर्तन करते हैं, किसी स्थायी समझे गए व्यक्ति से अलग होते हैं, अथवा लम्बे समय से टाली गई ज़िम्मेदारी उठाते हैं। वर्षों से सहनीय रहीं स्वास्थ्य समस्याएँ अब उपचार माँगती हैं। संचित निर्णयों से बचाव सम्भव नहीं। यहाँ जन्म-कुण्डली के शनि की भाव-स्थिति और दृष्टियों का विशेष ध्यानपूर्वक अध्ययन करें — यह अन्तर्दशा उन्हीं संकेतों का कठोर पाठ है।`,
      },
    },
    {
      subRuler: 'Budh',
      label: { en: 'Shani–Budh Antardasha', hi: 'शनि-बुध अन्तर्दशा' },
      duration: { en: 'About 2 years 8 months 9 days', hi: 'लगभग 2 वर्ष 8 माह 9 दिन' },
      effect: {
        en: `Saturn and Mercury are friends in the Naisargika Maitri scheme; this is therefore one of the smoother sub-periods of Shani's nineteen years. Intellectual work, writing, accounts, audit work, contracts, and business documentation move forward. Education re-starts, sometimes as a formal credential the native should have completed earlier. Communication with siblings and team members improves. The risk in this antardasha is over-thinking — Mercury's pattern-finding meets Saturn's pessimism, and one can spiral into anxiety. Channel it into structured analytical work and the period rewards.`,
        hi: `नैसर्गिक मैत्री में शनि और बुध मित्र हैं; इसलिए यह शनि की उन्नीस वर्ष की दशा की सहज अन्तर्दशाओं में से एक है। बौद्धिक कार्य, लेखन, लेखा, अंकेक्षण, अनुबन्ध, और व्यापारिक प्रलेखन आगे बढ़ते हैं। शिक्षा पुनः आरम्भ होती है, कभी-कभी ऐसा औपचारिक प्रमाण-पत्र जो पहले पूरा होना चाहिए था। भाई-बहनों एवं सहकर्मियों से सम्वाद सुधरता है। जोखिम यह है कि अधिक सोच — बुध की पैटर्न-खोज शनि के निराशावाद से मिलकर चिन्ता का चक्र बना सकती है। इसे संरचित विश्लेषणात्मक कार्य की ओर मोड़ें तो काल फल देता है।`,
      },
    },
    {
      subRuler: 'Ketu',
      label: { en: 'Shani–Ketu Antardasha', hi: 'शनि-केतु अन्तर्दशा' },
      duration: { en: 'About 1 year 1 month 9 days', hi: 'लगभग 1 वर्ष 1 माह 9 दिन' },
      effect: {
        en: `The shortest of Saturn's sub-periods and often the most disorienting. Ketu cuts; Saturn restricts. Together they cause sudden withdrawal from a project, partner, or role the native had built up over the previous Saturn–Mercury phase. Many practitioners report unexplained fatigue, brief illness, or a forced retreat — a viral fever that pulls one off the road, an unexpected legal complication that stops a deal. None of it is necessarily malefic; Ketu is the moksha-karaka and Saturn is the sannyasa-karaka, so the message is detachment. Use the year for review, simplification, and pilgrimage rather than for new commitments.`,
        hi: `शनि की सबसे छोटी अन्तर्दशा और प्रायः सबसे विचलित करने वाली। केतु काटता है; शनि अवरोध लगाता है। साथ में, ये जातक को पूर्व शनि-बुध काल में निर्मित किसी परियोजना, साझेदार, अथवा भूमिका से अकस्मात् निवृत्ति की ओर ले जाते हैं। कई अनुभवी ज्योतिषी इस काल में अव्याख्यायित थकान, अल्प रोग, अथवा बाध्यकारी एकान्त की रिपोर्ट करते हैं — विषाणु ज्वर जो मार्ग से हटा दे, अप्रत्याशित विधिक उलझन जो सौदा रोक दे। यह आवश्यक रूप से अनिष्ट नहीं — केतु मोक्ष कारक है और शनि संन्यास कारक, अतः सन्देश है वैराग्य। इस वर्ष को समीक्षा, सरलीकरण और तीर्थयात्रा के लिए उपयोग करें, नये दायित्वों के लिए नहीं।`,
      },
    },
    {
      subRuler: 'Shukra',
      label: { en: 'Shani–Shukra Antardasha', hi: 'शनि-शुक्र अन्तर्दशा' },
      duration: { en: 'About 3 years 2 months 0 days', hi: 'लगभग 3 वर्ष 2 माह 0 दिन' },
      effect: {
        en: `The longest of Saturn's sub-periods. Saturn and Venus are mutually friendly, and the combination tends to deliver one of the dasha's most productive material chapters: marriage if delayed earlier, vehicle and property purchases, sustained income from creative or aesthetic work, longer relationships. The classical caveat is that Saturn-Venus together can also produce relationships with a strong age or status difference, second marriages, or affairs that take a serious shape; both the native and the partner usually carry karma into the bond. Health-wise, kidney, urinary, and reproductive matters are flagged for routine check-ups.`,
        hi: `शनि की सबसे लम्बी अन्तर्दशा। शनि और शुक्र परस्पर मित्र हैं, और यह संयोग दशा के सबसे उत्पादक भौतिक अध्यायों में से एक देता है: यदि विवाह पहले रुका था तो विवाह, वाहन-सम्पत्ति की खरीद, रचनात्मक अथवा सौन्दर्यपरक कार्य से स्थिर आय, दीर्घ सम्बन्ध। शास्त्रीय चेतावनी यह है कि शनि-शुक्र साथ में आयु अथवा स्थिति में बड़े अन्तर वाले सम्बन्ध, द्वितीय विवाह, अथवा गम्भीर रूप ले लेने वाले सम्बन्ध भी देते हैं; दोनों पक्ष प्रायः इस बन्धन में अपना कर्म-भार लाते हैं। स्वास्थ्य की दृष्टि से वृक्क, मूत्र-तन्त्र, और प्रजनन-सम्बन्धी विषयों की नियमित जाँच आवश्यक।`,
      },
    },
    {
      subRuler: 'Surya',
      label: { en: 'Shani–Surya Antardasha', hi: 'शनि-सूर्य अन्तर्दशा' },
      duration: { en: 'About 11 months 12 days', hi: 'लगभग 11 माह 12 दिन' },
      effect: {
        en: `Saturn and Sun are sworn enemies in classical astrology — father versus son in the mythological frame. This sub-period typically produces friction with authority figures, conflict with a senior at work, health flares involving the heart or eyes, or a confrontation with the father's position in the family. Government and bureaucratic dealings stretch out. Reputation can take a public hit if the native acts impulsively. The way through is patience, not assertion. Avoid major launches, public statements, or confrontations during this short year.`,
        hi: `शास्त्रीय ज्योतिष में शनि और सूर्य परस्पर शत्रु हैं — पौराणिक दृष्टि में पिता बनाम पुत्र। यह अन्तर्दशा प्रायः अधिकारी व्यक्तियों से टकराव, कार्यस्थल पर वरिष्ठ से विवाद, हृदय अथवा नेत्र सम्बन्धी स्वास्थ्य उभार, अथवा परिवार में पिता की स्थिति से प्रश्न उत्पन्न करती है। शासकीय एवं नौकरशाही कार्य खिंचते हैं। उतावली में कार्य करने पर सार्वजनिक प्रतिष्ठा को धक्का सम्भव। मार्ग है धैर्य, आक्रामकता नहीं। इस लघु वर्ष में बड़े उद्घाटन, सार्वजनिक वक्तव्य, अथवा टकराव से बचें।`,
      },
    },
    {
      subRuler: 'Chandra',
      label: { en: 'Shani–Chandra Antardasha', hi: 'शनि-चन्द्र अन्तर्दशा' },
      duration: { en: 'About 1 year 7 months 0 days', hi: 'लगभग 1 वर्ष 7 माह 0 दिन' },
      effect: {
        en: `Saturn afflicting the Moon is the most talked-about combination in popular Indian astrology, often called Vish Yoga or Punarphoo. In a sub-period, the effect is a mood that runs cool to grey for months at a time. Mother's health needs attention. Sleep can shorten. Public-facing work feels heavier than usual. Practitioners running this antardasha do best with a short daily practice — sandhya, recitation of the Hanuman Chalisa or Shri Suktam — and a stable food and sleep rhythm. By the closing months, emotional clarity returns and a gentler chapter follows.`,
        hi: `शनि का चन्द्र पर पीड़न लोकप्रिय भारतीय ज्योतिष की सर्वाधिक चर्चित युति है — विष योग अथवा पुनर्फू। अन्तर्दशा रूप में इसका प्रभाव यह है कि मास-दर-मास मनःस्थिति शीत-धूसर बनी रहती है। माता के स्वास्थ्य पर ध्यान आवश्यक। निद्रा घट सकती है। जन-समक्ष कार्य सामान्य से अधिक भारी लगता है। इस अन्तर्दशा में अनुभवी साधक छोटी दैनिक उपासना — सन्ध्योपासना, हनुमान चालीसा अथवा श्रीसूक्त — और स्थिर आहार-निद्रा क्रम से सर्वोत्तम परिणाम पाते हैं। अन्तिम मासों में भावनात्मक स्पष्टता लौटती है और अधिक कोमल अध्याय आरम्भ होता है।`,
      },
    },
    {
      subRuler: 'Mangal',
      label: { en: 'Shani–Mangal Antardasha', hi: 'शनि-मंगल अन्तर्दशा' },
      duration: { en: 'About 1 year 1 month 9 days', hi: 'लगभग 1 वर्ष 1 माह 9 दिन' },
      effect: {
        en: `Saturn and Mars are enemies and the combination is the period's accident-prone window. Surgery, vehicle incidents, blood-pressure flares, and disputes with younger male relatives are commonly reported. On the work side, the year suits demolition-and-rebuild projects: leaving an old role for a new one, restructuring a team, ending a long-running case. Hanuman upasana through the period is a standard remedy; physical exercise channels the surplus aggression. Not a year for elective surgery unless a competent astrologer has cleared the muhurta.`,
        hi: `शनि और मंगल शत्रु हैं तथा यह संयोग दशा का दुर्घटना-प्रवण काल है। शल्य चिकित्सा, वाहन घटनाएँ, रक्तचाप उभार, और छोटे पुरुष-स्वजनों से विवाद इस काल में सामान्य रिपोर्ट हैं। कार्य की दृष्टि से यह वर्ष ध्वंस-निर्माण परियोजनाओं के अनुकूल है: पुरानी भूमिका छोड़कर नई स्वीकारना, टीम पुनर्संरचना, दीर्घकालिक मुकदमा समाप्त करना। काल भर हनुमान उपासना मानक उपाय है; शारीरिक व्यायाम अतिरिक्त उग्रता को सही दिशा देता है। तक यह वर्ष ऐच्छिक शल्य चिकित्सा के लिए उपयुक्त नहीं — जब तक कि सक्षम ज्योतिषी ने मुहूर्त शोधित न किया हो।`,
      },
    },
    {
      subRuler: 'Rahu',
      label: { en: 'Shani–Rahu Antardasha', hi: 'शनि-राहु अन्तर्दशा' },
      duration: { en: 'About 2 years 10 months 6 days', hi: 'लगभग 2 वर्ष 10 माह 6 दिन' },
      effect: {
        en: `Rahu under Saturn is one of the most operationally complex sub-periods in the entire Vimshottari sequence. Both planets share a karaka quality — labour, foreign work, structural ambition — but Rahu wants to break out where Saturn wants to consolidate. The native often takes a sudden foreign placement, a high-risk new technology role, or starts a venture that defies family precedent. Cash flow can swing dramatically. Reputation rises and falls in the same year. The instruction from classical writers is restraint — let Saturn hold Rahu's appetite. By the close, the native usually has a permanent change of address, of profession, or both.`,
        hi: `शनि के अधीन राहु सम्पूर्ण विंशोत्तरी क्रम की सबसे कार्यात्मक रूप से जटिल अन्तर्दशाओं में से एक है। दोनों ग्रहों में एक कारकत्व समान है — श्रम, विदेशी कार्य, संरचनात्मक महत्त्वाकांक्षा — किन्तु राहु तोड़ना चाहता है जहाँ शनि सुदृढ़ करना चाहता है। जातक प्रायः अकस्मात् विदेशी नियुक्ति, उच्च-जोखिम वाली नवीन प्रौद्योगिकी भूमिका लेता है, अथवा ऐसा उद्यम आरम्भ करता है जो पारिवारिक परम्परा को चुनौती दे। नकदी प्रवाह में तीव्र उतार-चढ़ाव। प्रतिष्ठा एक ही वर्ष में चढ़ती और गिरती है। शास्त्रीय लेखकों का निर्देश है संयम — शनि को राहु की भूख रोकने दें। काल के अन्त तक प्रायः जातक का पता, व्यवसाय, अथवा दोनों स्थायी रूप से बदल जाते हैं।`,
      },
    },
    {
      subRuler: 'Guru',
      label: { en: 'Shani–Guru Antardasha', hi: 'शनि-गुरु अन्तर्दशा' },
      duration: { en: 'About 2 years 6 months 12 days', hi: 'लगभग 2 वर्ष 6 माह 12 दिन' },
      effect: {
        en: `The closing antardasha of the nineteen years. Saturn meets Jupiter — duty meets dharma — and the long lesson begins to release. Most natives report this is when the period's hardships visibly pay off: a long-pending property is registered, a child is born, a senior position confirmed, a teaching role offered, or a long quarrel resolved. Pilgrimage and donation become spontaneous. Even charts where Saturn and Jupiter are mutual enemies operationally tend to release something good in this final stretch — the dasha lord is preparing to hand over to the next planet (Mercury), so its remaining karma is being closed.`,
        hi: `उन्नीस वर्षों की अन्तिम अन्तर्दशा। शनि गुरु से मिलते हैं — कर्तव्य धर्म से — और दीर्घ पाठ का फल खुलने लगता है। अधिकांश जातक रिपोर्ट करते हैं कि इसी काल में महादशा के परिश्रम स्पष्ट रूप से फल देते हैं: लम्बे समय से रुकी सम्पत्ति का पंजीकरण, सन्तान का जन्म, वरिष्ठ पद की पुष्टि, अध्यापन की भूमिका, अथवा दीर्घकालिक विवाद का समाधान। तीर्थयात्रा और दान सहज होते हैं। उन कुण्डलियों में भी जहाँ शनि-गुरु परस्पर शत्रु हैं, इस अन्तिम चरण में प्रायः कुछ शुभ फल मिलता है — महादशेश अगले ग्रह (बुध) को सौंपने की तैयारी कर रहा है, अतः उसके अवशेष कर्म को पूर्ण किया जा रहा है।`,
      },
    },
  ],

  remedies: [
    {
      title: { en: 'Mantra Recitation', hi: 'मन्त्र जप' },
      body: {
        en: `Saturn responds to long, sustained recitation rather than dramatic ritual. The traditional prescription is 23,000 repetitions of the beej mantra "Om Praam Preem Praum Sah Shanaischaraya Namah" over forty-three days, completed during the dasha's first Saturday in Shukla paksha. Practitioners who cannot manage that count read the Shani Stotra by sage Dasharatha, the Hanuman Chalisa once daily, or a 108-recitation of the Mahamrityunjaya mantra. Recitation should be at the same time every day; Saturn rewards rhythm. Iron rosary (loha mala) or kasturi mala is preferred. Avoid recitation immediately after meals or in agitated states.`,
        hi: `शनि नाटकीय अनुष्ठान से अधिक दीर्घ निरन्तर जप पर प्रतिक्रिया देते हैं। पारम्परिक विधान है शनि बीज मन्त्र "ॐ प्राँ प्रीं प्रौं सः शनैश्चराय नमः" का 23,000 जप तेतालीस दिनों में, जो दशा के पहले शुक्ल पक्ष शनिवार से आरम्भ हो। जो यह संख्या नहीं कर सकते वे राजा दशरथ कृत शनि स्तोत्र का पाठ, प्रतिदिन एक हनुमान चालीसा, अथवा महामृत्युंजय मन्त्र की एक माला (108) करें। जप प्रतिदिन एक ही समय पर होना चाहिए; शनि लय का प्रतिफल देते हैं। लोहे की माला अथवा कस्तूरी माला श्रेष्ठ। भोजन के तुरन्त बाद अथवा उत्तेजित अवस्था में जप से बचें।`,
      },
    },
    {
      title: { en: 'Gemstone (with Caveats)', hi: 'रत्न (सावधानियों सहित)' },
      body: {
        en: `Blue Sapphire (Neelam) is Saturn's gem, but it is also the single most volatile gem in Jyotish. Unlike Yellow Sapphire or Pearl, a Neelam works for some people and reacts adversely for others within hours of wearing — sleep disruption, inexplicable anger, financial losses are common signs of incompatibility. Always trial a Neelam for three nights kept under the pillow before fixing it in a ring. Five carats minimum, set in pure silver or panchdhatu, ring finger of the right hand, energised on a Shukla Saturday with the beej mantra. Do not wear a Neelam alongside Ruby (Manik) or Pearl (Moti); the planetary signals conflict. If a Neelam reacts, switch to Amethyst, which carries a milder Saturnine vibration with far fewer contraindications.`,
        hi: `नीलम शनि का रत्न है, परन्तु यह ज्योतिष का सर्वाधिक अस्थिर रत्न भी है। पुखराज अथवा मोती के विपरीत, नीलम कुछ व्यक्तियों के लिए कार्य करता है तो दूसरों के लिए धारण करते ही प्रतिकूल प्रभाव दिखाता है — निद्रा-विघ्न, अकारण क्रोध, धन-हानि असंगति के सामान्य संकेत हैं। अंगूठी में जड़वाने से पूर्व नीलम को तीन रात्रि तकिए के नीचे रखकर परीक्षण अवश्य करें। न्यूनतम पाँच रत्ती, शुद्ध चाँदी अथवा पंचधातु में, दाहिने हाथ की मध्यमा अंगुली में, शुक्ल शनिवार को बीज मन्त्र से अभिमन्त्रित। नीलम के साथ माणिक्य अथवा मोती न पहनें; ग्रह-संकेत टकराते हैं। यदि नीलम प्रतिकूल हो तो ऐमेथिस्ट (जामुनिया) पहनें, जिसकी शनि-तरंग कोमल है और प्रतिकूलता बहुत कम।`,
      },
    },
    {
      title: { en: 'Daana (Donation)', hi: 'दान' },
      body: {
        en: `Saturn is the deity of the marginalised, and donation in his name is the single most reliable remedy. Distribute black sesame, mustard oil, iron implements, woollen clothing, leather footwear, or cooked food to manual labourers, the elderly, the visibly poor, and crematorium workers. Saturday at sunset is the prescribed time. The donation is performed without speech, without claiming credit, and without expecting acknowledgement. Many practitioners adopt one Saturday-meal commitment for the duration of the dasha — feeding three to seven labourers a hot meal every Saturday for nineteen years, with no exceptions. This single discipline, pursued sincerely, produces the most observable softening of Saturn's heaviest indications.`,
        hi: `शनि उपेक्षितों के देवता हैं, और उनके नाम पर दान सबसे विश्वसनीय उपाय है। काले तिल, सरसों का तेल, लोहे के पात्र, ऊनी वस्त्र, चर्म-पादुकाएँ, अथवा पका हुआ भोजन — श्रमिकों, वृद्धजनों, दृश्य रूप से निर्धनों, और श्मशान-कर्मियों को वितरित करें। शनिवार सायंकाल विहित समय है। दान बिना वाणी, बिना श्रेय लिए, बिना स्वीकार-अपेक्षा के किया जाए। अनेक साधक पूरी दशा के लिए एक शनिवार-भोजन का संकल्प लेते हैं — प्रत्येक शनिवार तीन से सात श्रमिकों को उन्नीस वर्ष तक गर्म भोजन कराना, बिना किसी अपवाद के। इस एक अनुशासन से, यदि सच्चाई से किया जाए, शनि के भारी संकेतों में सर्वाधिक प्रत्यक्ष कोमलता देखने को मिलती है।`,
      },
    },
    {
      title: { en: 'Vrata (Observance)', hi: 'व्रत' },
      body: {
        en: `The Shani Pradosh vrata — fasting on Saturdays from sunrise until evening lamp-lighting at the Hanuman or Shani temple — is the operational discipline most experienced jyotishis prescribe. The fast can be observed as nirjala (without water) for the strict, or phalahar (fruits and milk) for those with health constraints. After lamp-lighting, mustard oil is offered in the Shani idol's vessel; the offering is not a transaction with the deity but a public statement of solidarity with all whom Saturn governs — workers, servants, the elderly, the dead. Continuity matters more than perfection; a forty-three Saturday cycle observed lightly defeats a single grand pooja followed by neglect.`,
        hi: `शनि प्रदोष व्रत — प्रत्येक शनिवार सूर्योदय से सायंकाल हनुमान अथवा शनि मन्दिर में दीप-प्रज्ज्वलन तक उपवास — सर्वाधिक अनुभवी ज्योतिषियों की व्यावहारिक संस्तुति है। यह व्रत कठोर साधक निर्जल कर सकते हैं, स्वास्थ्य की मर्यादा वालों के लिए फलाहार स्वीकार्य है। दीप के पश्चात् शनि-मूर्ति के पात्र में सरसों का तेल अर्पित किया जाता है; यह अर्पण देवता से लेन-देन नहीं — यह सार्वजनिक घोषणा है कि जातक उन सबके साथ है जिन पर शनि शासन करते हैं — श्रमिक, सेवक, वृद्ध, मृतक। निरन्तरता पूर्णता से अधिक मूल्यवान है; तेतालीस शनिवारों का सरल चक्र एक भव्य पूजा-अर्चना के बाद की उपेक्षा को परास्त कर देता है।`,
      },
    },
    {
      title: { en: 'Lifestyle Adjustments', hi: 'जीवन-शैली समायोजन' },
      body: {
        en: `Saturn is the most lifestyle-sensitive planet of the nine. Erratic sleep, irregular meals, poor posture, and over-stimulation directly amplify a difficult dasha. The classical recommendation is rising before sunrise, working steadily without breaks until noon, eating warm cooked food at the same hour daily, walking thirty to sixty minutes outdoors, and sleeping by ten in the night. Reduce caffeine, screens after sundown, and high-sugar foods — these aggravate Saturn's nervous fatigue. Maintain one weekly day of complete simplicity: no meetings, no purchases, no entertainment. Long-running practitioners report that this single discipline, more than any mantra count, is what makes Saturn's nineteen years bearable and ultimately fruitful.`,
        hi: `नौ ग्रहों में शनि जीवन-शैली के प्रति सर्वाधिक संवेदनशील ग्रह हैं। अनियमित निद्रा, अनियमित भोजन, असंतुलित मुद्रा, और अति-उत्तेजना सीधे कठिन दशा को बढ़ाते हैं। शास्त्रीय निर्देश है: सूर्योदय से पूर्व उठें, मध्याह्न तक बिना विघ्न क्रमशः कार्य करें, प्रतिदिन एक ही समय पर गर्म पका भोजन लें, तीस से साठ मिनट खुले में पैदल चलें, और रात्रि दस बजे तक सो जाएँ। चाय-कॉफी, सायं के पश्चात् स्क्रीन, और मिष्ठान्न-बहुल भोजन घटाएँ — ये शनि की स्नायविक थकान को बढ़ाते हैं। सप्ताह में एक दिन सम्पूर्ण सरलता का रखें: कोई बैठक नहीं, कोई क्रय नहीं, कोई मनोरंजन नहीं। दीर्घकालीन साधक मानते हैं कि किसी भी मन्त्र-संख्या से अधिक यही एक अनुशासन शनि के उन्नीस वर्षों को सहनीय और अन्ततः फलप्रद बनाता है।`,
      },
    },
  ],

  casePatterns: {
    en: `Across the consulting case files our editorial team draws on, Shani Mahadasha tends to begin in three classical configurations. The first is at the close of an easy Venus mahadasha — the native often resists the change for the opening eighteen months because life had been comfortable. The second is mid-life, around age forty to forty-eight, where Saturn's lessons are about consolidation: marriage strengthens or breaks decisively, career either reaches its public form or is restructured. The third, less common, is in adolescence — these natives carry an old-soul quality, take on family responsibility early, and often end up as the most reliable adult in their cohort by their late twenties. None of the three patterns is the same; what unites them is that Shani's nineteen years always end with the native better suited to whatever role the chart promised, even if the path there was the long one.`,
    hi: `परामर्श-केस-फाइलों में हमारी सम्पादकीय टीम जिनका सन्दर्भ लेती है, शनि महादशा प्रायः तीन शास्त्रीय रूपों में आरम्भ होती दिखती है। पहला — सुखद शुक्र महादशा के अन्त में; जातक प्रारम्भिक अठारह माह तक प्रायः परिवर्तन का प्रतिरोध करता है क्योंकि जीवन सुखमय था। दूसरा — मध्य जीवन, चालीस से अड़तालीस वर्ष के आसपास, जहाँ शनि का पाठ सुदृढ़ीकरण विषयक होता है: विवाह दृढ़ होता है या पूर्णतः टूट जाता है, करियर अपने सार्वजनिक रूप में स्थापित होता है अथवा पुनर्संरचित। तीसरा, अल्प-दृष्ट — किशोरावस्था में आरम्भ; ये जातक प्राचीन-आत्मा गुण लिए होते हैं, परिवार का दायित्व जल्दी उठाते हैं, और बीस-तीस वर्ष की आयु तक प्रायः अपने समुदाय के सर्वाधिक विश्वसनीय वयस्क बन जाते हैं। तीनों पैटर्न समान नहीं; उन्हें जो जोड़ता है वह यह है कि शनि की उन्नीस वर्ष की दशा सदैव जातक को कुण्डली के वचनित स्वरूप के अधिक उपयुक्त बनाकर समाप्त होती है — मार्ग भले ही दीर्घ रहा हो।`,
  },

  faqs: [
    {
      question: { en: 'Is Shani Mahadasha always bad?', hi: 'क्या शनि महादशा सदैव अशुभ होती है?' },
      answer: {
        en: `No. Shani Mahadasha is reputational rather than real — popular sources oversimplify it as nineteen bad years. The actual reading depends on three things: the natal Saturn's house, sign, and aspects; the running antardasha; and Saturn's transit during the period. A Saturn well-placed in own sign or aspecting from Capricorn can deliver one of the chart's most stabilising chapters. A Saturn debilitated and afflicted in the eighth house is genuinely difficult. Both are called "Shani Mahadasha." The popular generalisation is the problem.`,
        hi: `नहीं। शनि महादशा का अपयश वास्तविकता से बड़ा है — लोकप्रिय स्रोत इसे उन्नीस वर्षों के दुर्भाग्य के रूप में अति-सरल कर देते हैं। वास्तविक फल तीन बातों पर निर्भर करता है: जन्म-कुण्डली में शनि का भाव-राशि-दृष्टि; चालू अन्तर्दशा; और दशा-काल में शनि का गोचर। स्वराशि में बलवान शनि अथवा मकर से दृष्टि देता शनि कुण्डली का सबसे स्थिरता-कारक अध्याय भी दे सकता है। नीच के अष्टम भावस्थ पीड़ित शनि वास्तव में कठिन हैं। दोनों ही को "शनि महादशा" कहते हैं। समस्या लोकप्रिय सामान्यीकरण है।`,
      },
    },
    {
      question: { en: 'How do I calculate when my Shani Mahadasha will start?', hi: 'मेरी शनि महादशा कब आरम्भ होगी, यह कैसे ज्ञात करें?' },
      answer: {
        en: `Your Vimshottari Mahadasha sequence is calculated from the nakshatra position of the natal Moon. Every nakshatra has a ruling planet, and the dasha at birth is the residual portion of that nakshatra-lord's full dasha length. Subsequent dashas follow a fixed order: Ketu → Venus → Sun → Moon → Mars → Rahu → Jupiter → Saturn → Mercury, then repeats. Use VastuCart's free Mahadasha Calculator with your date, time, and place of birth to see the exact start and end dates of your Shani Mahadasha and every preceding and following period.`,
        hi: `आपका विंशोत्तरी दशा क्रम जन्म-चन्द्र की नक्षत्र स्थिति से गणित होता है। प्रत्येक नक्षत्र का एक स्वामी ग्रह होता है, और जन्म-दशा उस नक्षत्र-स्वामी की पूर्ण दशा का शेष भाग होती है। आगे की दशाएँ निश्चित क्रम में चलती हैं: केतु → शुक्र → सूर्य → चन्द्र → मंगल → राहु → गुरु → शनि → बुध, और फिर पुनरावृत्ति। अपनी जन्म-तिथि, समय और स्थान के साथ VastuCart के निःशुल्क महादशा कैलकुलेटर का उपयोग करें — आपकी शनि महादशा एवं प्रत्येक पूर्ववर्ती-परवर्ती दशा के सटीक प्रारम्भ और समाप्ति तिथियाँ प्राप्त होंगी।`,
      },
    },
    {
      question: { en: 'How long does Shani Mahadasha last?', hi: 'शनि महादशा कितने समय की होती है?' },
      answer: {
        en: `Shani Mahadasha lasts exactly nineteen calendar years (6,940 days, allowing for leap years). It is the second-longest of the nine Vimshottari Mahadashas, after Venus's twenty years. Within the nineteen years there are nine antardashas (sub-periods), beginning with Saturn–Saturn (about 3 years 0 months 3 days) and ending with Saturn–Jupiter (about 2 years 6 months 12 days).`,
        hi: `शनि महादशा ठीक उन्नीस कलैंडर वर्षों (6,940 दिन, अधिवर्ष सहित) तक चलती है। यह नौ विंशोत्तरी महादशाओं में शुक्र के बीस वर्षों के बाद दूसरी सबसे लम्बी है। उन्नीस वर्षों के भीतर नौ अन्तर्दशाएँ होती हैं, जो शनि-शनि (लगभग 3 वर्ष 0 माह 3 दिन) से आरम्भ होकर शनि-गुरु (लगभग 2 वर्ष 6 माह 12 दिन) पर समाप्त होती हैं।`,
      },
    },
    {
      question: { en: 'What is the difference between Shani Mahadasha and Sade Sati?', hi: 'शनि महादशा और साढ़ेसाती में क्या अन्तर है?' },
      answer: {
        en: `They are different astrological cycles that occasionally overlap. Shani Mahadasha is a Vimshottari sub-period — a planetary timeline calculated from the natal Moon's nakshatra, ruling Saturn for a fixed nineteen years that may begin at any age. Sade Sati is a transit phenomenon — Saturn's actual passage through the 12th, 1st and 2nd houses from natal Moon, totalling roughly seven and a half years and recurring approximately every twenty-eight to thirty years. A native may run Sade Sati without Shani Mahadasha (lighter), or Shani Mahadasha without Sade Sati (lighter), or both at once (the heaviest configuration in popular astrology).`,
        hi: `ये दो भिन्न ज्योतिष चक्र हैं जो कभी-कभी एक साथ चलते हैं। शनि महादशा एक विंशोत्तरी उप-काल है — चन्द्र-नक्षत्र से गणित ग्रह-समय-रेखा, जो शनि के लिए निश्चित उन्नीस वर्ष है और किसी भी आयु में आरम्भ हो सकती है। साढ़ेसाती एक गोचर परिघटना है — चन्द्र राशि से 12, 1 और 2 भाव से शनि का वास्तविक भ्रमण, कुल लगभग साढ़े सात वर्ष, जो प्रायः अट्ठाईस से तीस वर्ष में पुनरावृत्त होता है। जातक केवल साढ़ेसाती (हल्का), केवल शनि महादशा (हल्का), अथवा दोनों एक साथ (लोकप्रिय ज्योतिष में सर्वाधिक भारी संयोग) चला सकता है।`,
      },
    },
    {
      question: { en: 'Will I lose my job in Shani Mahadasha?', hi: 'क्या शनि महादशा में मेरी नौकरी जा सकती है?' },
      answer: {
        en: `Job loss is not a default outcome of Shani Mahadasha. It is a possibility only when (a) Saturn afflicts the natal 10th house, 6th house, or the 10th lord; (b) the running antardasha lord is Saturn's enemy (Sun, Moon, Mars) and is also weak; and (c) Saturn's transit at that moment is over the 8th or 12th from natal Moon. Many natives in fact get promoted in Shani Mahadasha because Saturn rewards seniority and reliability. Read the natal Saturn's connection to the 10th house carefully before assuming the worst.`,
        hi: `शनि महादशा में नौकरी छूटना डिफ़ॉल्ट परिणाम नहीं है। यह केवल तब सम्भव है जब (क) जन्म-कुण्डली में शनि दशम भाव, षष्ठ भाव, अथवा दशमेश को पीड़ित कर रहे हों; (ख) चालू अन्तर्दशा का स्वामी शनि का शत्रु ग्रह (सूर्य, चन्द्र, मंगल) हो और स्वयं निर्बल हो; और (ग) उस क्षण शनि का गोचर चन्द्र राशि से अष्टम अथवा द्वादश पर हो। कई जातक तो शनि महादशा में पदोन्नति पाते हैं, क्योंकि शनि वरिष्ठता एवं विश्वसनीयता का पारिश्रमिक देते हैं। सबसे बुरा मानने से पूर्व जन्म-कुण्डली में शनि और दशम भाव के सम्बन्ध का सावधानीपूर्वक अध्ययन करें।`,
      },
    },
    {
      question: { en: 'What should I avoid during Shani Mahadasha?', hi: 'शनि महादशा में किनसे बचना चाहिए?' },
      answer: {
        en: `Avoid debt for non-essential consumption, casual disrespect to elders or domestic staff, dishonesty in employment contracts, careless handling of legal documents, and intoxicants — particularly alcohol and recreational drugs. Saturn registers all of these as karmic debits that compound over the nineteen years. Avoid speculative investments without an exit plan; Saturn is not a speculator. Avoid taking on a partner you do not respect — both marriage and business — because the dasha tends to make those bonds stickier than expected.`,
        hi: `गैर-आवश्यक उपभोग के लिए ऋण, वरिष्ठजनों अथवा घरेलू सेवकों के प्रति आकस्मिक अनादर, रोज़गार-अनुबन्धों में बेईमानी, विधिक प्रलेखों का असावधानीपूर्ण व्यवहार, और मादक द्रव्य — विशेषकर मद्य और मनोरंजनात्मक नशे — से बचें। शनि इन सबको कर्म-ऋण के रूप में दर्ज करते हैं जो उन्नीस वर्षों में बढ़ते जाते हैं। बिना निकास-योजना के सट्टेबाज़ी से बचें; शनि सट्टेबाज़ नहीं हैं। ऐसे साथी से बचें जिसका आप आदर नहीं करते — चाहे विवाह हो या व्यापार — क्योंकि यह दशा उन बन्धनों को अपेक्षा से अधिक चिपकाऊ बनाती है।`,
      },
    },
    {
      question: { en: 'Does Shani Mahadasha affect marriage?', hi: 'क्या शनि महादशा विवाह पर प्रभाव डालती है?' },
      answer: {
        en: `Yes, in three patterns. If Saturn rules or aspects the natal 7th house and is well-placed, the dasha can deliver a deliberate, mature, long-lasting marriage — often to someone older or in a stable senior profession. If Saturn is afflicted in the 7th, the dasha can delay marriage by years or place strain on an existing one through extended separation, work transfers, or family responsibility. The third pattern — Saturn in the 7th but neutralised by Jupiter's aspect — gives a slow-built relationship that becomes the strongest in the native's life. Read the natal Venus and 7th lord alongside Saturn before predicting either way.`,
        hi: `हाँ, तीन स्वरूपों में। यदि जन्म-कुण्डली में शनि सप्तम भाव के स्वामी हों या उस पर दृष्टि करते हों और बलवान हों, तो दशा सुविचारित, परिपक्व, दीर्घ-स्थायी विवाह दे सकती है — प्रायः आयु में बड़े अथवा स्थिर वरिष्ठ व्यवसाय वाले व्यक्ति से। यदि सप्तम में शनि पीड़ित हों तो दशा विवाह को वर्षों तक टाल सकती है, अथवा विद्यमान विवाह में लम्बे विछोह, स्थानान्तरण, अथवा पारिवारिक भार से तनाव दे सकती है। तीसरा रूप — सप्तम में शनि किन्तु गुरु की दृष्टि से शान्त — धीमा निर्मित सम्बन्ध देता है जो जातक के जीवन का सबसे दृढ़ बन्धन बनता है। किसी भी निष्कर्ष से पूर्व शनि के साथ शुक्र एवं सप्तमेश का अध्ययन करें।`,
      },
    },
    {
      question: { en: 'How can I reduce the effects of Shani Mahadasha?', hi: 'शनि महादशा के प्रभाव कैसे कम करें?' },
      answer: {
        en: `The four classical remedies — mantra, gemstone, daana (donation), and vrata (observance) — work best when combined and pursued continuously rather than individually and intermittently. The strongest single remedy in lived practice is sustained donation in Saturn's name to those whom Saturn governs: labourers, the elderly, the visibly poor, and the marginalised. Pair it with rhythmic daily mantra recitation, a Saturday Hanuman or Shani temple visit, lifestyle simplification (regular sleep, simple food, weekly digital detox), and verifiable Neelam consultation if it is compatible with your chart. None of these "neutralise" the dasha — they convert its severity into something formative.`,
        hi: `चार शास्त्रीय उपाय — मन्त्र, रत्न, दान, और व्रत — संयुक्त रूप से और निरन्तर अभ्यास में सर्वाधिक फलप्रद होते हैं, अलग-अलग और अल्पकालिक नहीं। व्यावहारिक रूप से सर्वाधिक प्रभावी एकल उपाय है — शनि के नाम पर निरन्तर दान उन्हें जिन पर शनि शासन करते हैं: श्रमिक, वृद्धजन, दृश्य रूप से निर्धन, और उपेक्षित। इसे लयबद्ध दैनिक मन्त्र जप, शनिवार का हनुमान अथवा शनि मन्दिर दर्शन, जीवन-शैली सरलीकरण (नियमित निद्रा, सात्विक भोजन, साप्ताहिक डिजिटल विश्राम), और कुण्डली-संगति की पुष्टि उपरान्त नीलम परामर्श के साथ जोड़ें। इनमें से कुछ भी दशा को "निष्क्रिय" नहीं करता — ये उसकी कठोरता को निर्माणकारी रूप में परिवर्तित करते हैं।`,
      },
    },
    {
      question: { en: 'Is Shani Mahadasha good for spirituality?', hi: 'क्या शनि महादशा आध्यात्मिक साधना के लिए शुभ है?' },
      answer: {
        en: `Yes, more than any other dasha. Saturn is the karaka of detachment (vairagya), service (seva), longevity, and slow internal transformation. Long meditation, study of classical scripture, regular temple work, hospice and ashram service, and disciplined yoga all flourish in Shani Mahadasha. Many serious sadhakas describe the period as the one in which their practice finally takes root after decades of intermittent effort. The depth that Saturn gives is unmatched; what other dashas distribute as occasional flashes of grace, Saturn delivers as steady, accumulating realisation.`,
        hi: `हाँ, किसी भी अन्य दशा से अधिक। शनि वैराग्य, सेवा, आयु, और धीमे आन्तरिक रूपान्तरण के कारक हैं। दीर्घ ध्यान, शास्त्र-स्वाध्याय, नियमित मन्दिर-सेवा, होस्पाइस एवं आश्रम-सेवा, और अनुशासित योग — सब शनि महादशा में पनपते हैं। कई गम्भीर साधक इस काल को उस काल के रूप में वर्णित करते हैं जिसमें दशकों के अनियमित प्रयास के बाद अन्ततः उनकी साधना जड़ पकड़ती है। शनि जो गहराई देते हैं उसकी कोई तुलना नहीं; जो अन्य दशाएँ कृपा की क्षणिक चमक के रूप में बाँटती हैं, शनि उसे स्थिर, संचित अनुभूति के रूप में देते हैं।`,
      },
    },
  ],

  howToSteps: [
    {
      name: { en: 'Compute your Vimshottari sequence', hi: 'अपना विंशोत्तरी क्रम निकालें' },
      text: {
        en: 'Enter your date, exact time, and place of birth into the Mahadasha Calculator. The tool reads the natal Moon nakshatra and produces the full 120-year planetary timeline so you can see precisely when Shani Mahadasha begins and ends in your life.',
        hi: 'महादशा कैलकुलेटर में अपनी जन्म तिथि, सटीक समय, और जन्म स्थान दर्ज करें। यह उपकरण जन्म चन्द्र-नक्षत्र पढ़कर पूर्ण 120 वर्ष की ग्रह-समय-रेखा प्रस्तुत करता है — जिससे आप देख सकें कि आपके जीवन में शनि महादशा कब से कब तक है।',
      },
    },
    {
      name: { en: 'Locate the natal Saturn', hi: 'जन्म कुण्डली में शनि की स्थिति देखें' },
      text: {
        en: 'In the rashi chart, identify the house and sign of Saturn at birth. Note any planets in conjunction, planets aspecting Saturn, and whether Saturn is in own sign (Capricorn, Aquarius), exalted (Libra), or debilitated (Aries). This single placement determines whether your dasha will be material-consolidating or disciplinary.',
        hi: 'राशि चक्र में जन्म समय पर शनि का भाव और राशि देखें। साथ में स्थित ग्रह, शनि पर दृष्टि करने वाले ग्रह, तथा क्या शनि स्वराशि (मकर, कुम्भ) में हैं, उच्च (तुला) में, अथवा नीच (मेष) में — यह नोट करें। यह एक स्थिति ही निर्धारित करती है कि आपकी दशा भौतिक-सुदृढ़ीकरण की होगी अथवा अनुशासनात्मक।',
      },
    },
    {
      name: { en: 'Identify the running antardasha', hi: 'चालू अन्तर्दशा पहचानें' },
      text: {
        en: 'Within Shani Mahadasha there are nine sub-periods. Find which one is currently running — Saturn–Saturn, Saturn–Mercury, Saturn–Ketu, Saturn–Venus, Saturn–Sun, Saturn–Moon, Saturn–Mars, Saturn–Rahu, or Saturn–Jupiter — because the antardasha lord modifies what the parent Saturn is producing for that span.',
        hi: 'शनि महादशा के भीतर नौ उप-काल होते हैं। जानें कि अभी कौन-सा चल रहा है — शनि-शनि, शनि-बुध, शनि-केतु, शनि-शुक्र, शनि-सूर्य, शनि-चन्द्र, शनि-मंगल, शनि-राहु, अथवा शनि-गुरु — क्योंकि अन्तर्दशेश इस अवधि में मूल शनि के फल को परिमार्जित करता है।',
      },
    },
    {
      name: { en: 'Cross-check the current Saturn transit', hi: 'वर्तमान शनि गोचर मिलाएँ' },
      text: {
        en: 'Look up where Saturn is transiting today relative to your natal Moon. Saturn over the 12th, 1st, or 2nd from Moon is Sade Sati. Saturn over the 4th or 8th is Ashtama Shani. Saturn over the 3rd, 6th, 11th is operationally favourable. The combination of dasha and transit, not either alone, predicts the lived intensity.',
        hi: 'अपनी जन्म-चन्द्र राशि के सापेक्ष आज शनि किस राशि में हैं — यह देखें। चन्द्र से 12, 1, अथवा 2 भाव में शनि का गोचर साढ़ेसाती है। 4 अथवा 8 में अष्टम शनि। 3, 6, 11 में व्यावहारिक रूप से अनुकूल। दशा और गोचर का संयोजन, अकेले कोई एक नहीं, वास्तविक तीव्रता का संकेत देता है।',
      },
    },
    {
      name: { en: 'Apply remedies in their order of operational weight', hi: 'उपायों को उनके व्यावहारिक भार के क्रम में अपनाएँ' },
      text: {
        en: 'Begin with daana (donation) and lifestyle adjustments — these have the lowest cost and the broadest effect. Layer in mantra recitation as a daily anchor. Add Saturday Hanuman or Shani temple visits as a weekly observance. Consider a Neelam ring only after a competent astrologer has read your full chart and after the gem has been trial-worn under the pillow for three nights.',
        hi: 'दान और जीवन-शैली समायोजन से आरम्भ करें — इनकी लागत न्यूनतम और प्रभाव विस्तृत है। दैनिक आधार के रूप में मन्त्र जप जोड़ें। साप्ताहिक व्रत के रूप में शनिवार का हनुमान अथवा शनि मन्दिर दर्शन। नीलम अंगूठी केवल तब विचार करें जब किसी सक्षम ज्योतिषी ने सम्पूर्ण कुण्डली पढ़ी हो और रत्न को पहले तीन रातें तकिए के नीचे परीक्षण किया गया हो।',
      },
    },
    {
      name: { en: 'Track the period in three-year reviews', hi: 'काल को तीन-वर्षीय समीक्षाओं में देखें' },
      text: {
        en: 'Treat the nineteen years as roughly six review windows. At every third year, audit honestly: Have I built or only consumed? Have I deepened my work, my marriage, my health? Saturn responds to honest mid-course corrections. Many practitioners find that the dasha\'s last six years deliver more than the first thirteen combined, precisely because the corrections were taken seriously.',
        hi: 'उन्नीस वर्षों को लगभग छह समीक्षा-खण्डों में विभाजित करें। प्रत्येक तीसरे वर्ष ईमानदार समीक्षा करें: क्या मैंने निर्माण किया या केवल उपभोग? क्या मैंने अपने कार्य, विवाह, स्वास्थ्य को गहरा किया? शनि ईमानदार मध्य-मार्ग सुधारों पर प्रतिक्रिया देते हैं। अनेक साधक पाते हैं कि दशा के अन्तिम छह वर्ष पहले तेरह से अधिक देते हैं — ठीक इसीलिए कि सुधार गम्भीरता से किए गए।',
      },
    },
  ],

  datePublished: '2026-05-02',
  dateModified: '2026-05-02',
};
