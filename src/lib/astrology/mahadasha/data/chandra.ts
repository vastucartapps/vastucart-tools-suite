import type { PlanetRecord } from '../types';

export const CHANDRA: PlanetRecord = {
  slug: 'chandra',
  displayName: { en: 'Chandra Mahadasha', hi: 'चन्द्र महादशा' },
  westernName: 'Moon',
  beejMantra: 'Om Shraam Shreem Shraum Sah Chandraya Namah',
  periodYears: 10,
  periodDays: Math.round(10 * 365.25),
  karaka: {
    en: ['mind', 'mother', 'emotions', 'public', 'home', 'liquids', 'memory', 'feminine principle'],
    hi: ['मन', 'माता', 'भाव', 'जन-समाज', 'गृह', 'द्रव', 'स्मृति', 'स्त्री-तत्त्व'],
  },
  ownSigns: ['Cancer'],
  exaltation: { sign: 'Taurus', degree: 3 },
  debilitation: { sign: 'Scorpio', degree: 3 },
  friendly: ['surya', 'budh'],
  neutral: ['mangal', 'guru', 'shukra', 'shani'],
  enemy: ['rahu', 'ketu'],
  weekday: { en: 'Monday', hi: 'सोमवार' },
  deity: { en: 'Shiva, Parvati, Soma', hi: 'शिव, पार्वती, सोम' },
  gemstone: { en: 'Pearl (Moti)', hi: 'मोती' },
  themeColor: { primary: '#5B7B9A', accent: '#A8C0D6' },
  icon: 'moon',

  intro: {
    en: `Chandra Mahadasha runs for ten years and reshapes the chart\'s emotional weather. The Moon is mana-karaka — the planet of mind, memory, mother, and the public — and her dasha activates the texture of inner life more than any other. Where Saturn\'s ten years (well, nineteen) test discipline and Jupiter\'s sixteen test wisdom, Chandra\'s ten test the relationship the native has with their own feelings, with their mother and lineage, and with the public who receive their work. The classical authorities — Parashara, Jaimini, Kalidasa in the Uttara Kalamrita — describe the Moon as the most "phaladayaka" of the dashamshas; whatever the chart contains, the Moon brings it into emotional perception. A confident chart feels its confidence in this dasha. A wounded chart feels its wound. Either way, the ten years are deeply lived rather than merely traversed. They tend to be remembered.`,
    hi: `चन्द्र महादशा दस वर्ष की होती है और कुण्डली के भावनात्मक वातावरण को नया रूप देती है। चन्द्र मन-कारक हैं — मन, स्मृति, माता, और जन-समाज के ग्रह — और उनकी दशा किसी भी अन्य से अधिक आन्तरिक जीवन की बुनावट को सक्रिय करती है। जहाँ शनि के दस वर्ष (वस्तुतः उन्नीस) अनुशासन की और गुरु के सोलह विवेक की परीक्षा लेते हैं, वहाँ चन्द्र के दस उस सम्बन्ध की परीक्षा लेते हैं जो जातक का अपनी भावनाओं से, अपनी माता और वंश से, और उस जन-समाज से है जो उसके कार्य को ग्रहण करता है। शास्त्रीय अधिकारी — पाराशर, जैमिनी, उत्तर कालामृत में कालिदास — चन्द्र को दशांशों में सर्वाधिक "फलदायक" कहते हैं; कुण्डली में जो भी है, चन्द्र उसे भावनात्मक प्रत्यक्ष में ले आते हैं। आत्मविश्वासी कुण्डली इस दशा में अपना आत्मविश्वास अनुभव करती है। आहत कुण्डली अपना आघात अनुभव करती है। किसी भी रूप में, ये दस वर्ष पार करने के बजाय गहन रूप से जिए जाते हैं। वे प्रायः स्मरण में रह जाते हैं।`,
  },

  periodOverview: {
    en: `Ten years is the third-shortest of the planetary mahadashas. The Vimshottari order from Moon is Chandra–Chandra (about 10 months), Mangal, Rahu, Guru, Shani, Budh, Ketu, Shukra, Surya. Three sub-periods stand out as transformational: Chandra–Rahu (a year and a half of foreign or unconventional emotional events), Chandra–Shani (one year seven months — the dasha\'s discipline-and-loneliness window), and Chandra–Shukra (a full year and eight months — the dasha\'s relational and creative high). The smaller Mars and Sun antardashas are decisive but brief. The dasha is best read as five emotional seasons rather than ten flat years; each season corresponds to two antardashas of similar planetary mood. Plan major emotional commitments — marriage, conception, residential moves, bringing parents home — into the seasons that align with the natal Moon\'s strength.`,
    hi: `दस वर्ष ग्रह-महादशाओं में तीसरी सबसे छोटी है। चन्द्र से विंशोत्तरी क्रम है — चन्द्र-चन्द्र (लगभग 10 माह), मंगल, राहु, गुरु, शनि, बुध, केतु, शुक्र, सूर्य। तीन उप-काल रूपान्तरण-कारी रूप में उभरते हैं: चन्द्र-राहु (विदेशी अथवा अपरम्परागत भावनात्मक घटनाओं का डेढ़ वर्ष), चन्द्र-शनि (एक वर्ष सात माह — दशा का अनुशासन-एवं-एकाकीपन खण्ड), और चन्द्र-शुक्र (पूरे एक वर्ष आठ माह — दशा का सम्बन्धात्मक एवं रचनात्मक शिखर)। लघु मंगल एवं सूर्य अन्तर्दशाएँ निर्णायक किन्तु संक्षिप्त। दशा को दस समतल वर्षों के बजाय पाँच भावनात्मक ऋतुओं के रूप में पढ़ना सर्वोत्तम है; प्रत्येक ऋतु समान ग्रह-स्वर वाली दो अन्तर्दशाओं से मेल खाती है। प्रमुख भावनात्मक प्रतिबद्धताएँ — विवाह, गर्भधारण, निवास परिवर्तन, माता-पिता को घर लाना — उन ऋतुओं में नियोजित करें जो जन्म-चन्द्र की शक्ति से मेल खाती हैं।`,
  },

  wellPlacedEffects: {
    en: `When the Moon is well-placed in the natal chart — in own sign Cancer, exalted in Taurus, paksha-bali (waxing more than 120° from Sun, the strongest lunar phase), with strong association to Jupiter (Gaja-Kesari yoga) or in a kendra — the ten years deliver one of the chart\'s most contented and publicly received chapters. The native\'s emotional bandwidth widens. Marriage stabilises if shaky, deepens if already steady, or arrives if delayed. Children are born or reach a meaningful milestone. Mother\'s health and influence become a positive presence rather than a concern. Public-facing work — teaching, healthcare, hospitality, food, dairy, water-related industries, real estate, public administration, and politics — flourishes because Moon governs reception by the masses. Health-wise, well-placed Moon protects the digestive system, the female reproductive system, sleep architecture, and emotional regulation. The deepest gift is internal: the native develops a quieter relationship with their own thoughts. The constant background restlessness of the mind, which most people accept as normal, settles. Decisions get made from a calmer place. Many natives describe the dasha as the period in which they finally felt at home in their own life.`,
    hi: `जब जन्म-कुण्डली में चन्द्र बलवान हों — स्वराशि कर्क में, उच्च के वृष में, पक्ष-बली (सूर्य से 120° से अधिक वर्धमान, चन्द्र की सर्वाधिक प्रबल कला), गुरु से प्रबल सम्बन्ध (गज-केसरी योग) अथवा केन्द्र में — तब ये दस वर्ष कुण्डली के सर्वाधिक सन्तुष्ट एवं सार्वजनिक रूप से ग्राह्य अध्यायों में से एक देते हैं। जातक का भावनात्मक विस्तार बढ़ता है। यदि विवाह डगमगाता था तो स्थिर होता है, यदि स्थिर था तो गहराता है, यदि विलम्बित था तो आता है। सन्तानें जन्मती हैं अथवा अर्थपूर्ण मील-पत्थर तक पहुँचती हैं। माता का स्वास्थ्य एवं प्रभाव चिन्ता के बजाय धनात्मक उपस्थिति बन जाता है। जन-समक्ष कार्य — अध्यापन, स्वास्थ्य-सेवा, आतिथ्य, भोजन, दुग्ध, जल-सम्बन्धित उद्योग, अचल सम्पत्ति, जन-प्रशासन, और राजनीति — फलते हैं क्योंकि चन्द्र जन-समाज की ग्राह्यता पर शासन करते हैं। स्वास्थ्य की दृष्टि से बलवान चन्द्र पाचन-तन्त्र, स्त्री प्रजनन-तन्त्र, निद्रा-संरचना, और भावनात्मक संतुलन की रक्षा करते हैं। सर्वाधिक गहरा उपहार आन्तरिक है: जातक अपने विचारों से शान्त सम्बन्ध विकसित करता है। मन की निरन्तर पृष्ठभूमिक चंचलता, जिसे अधिकांश लोग सामान्य मानते हैं, बैठ जाती है। निर्णय शान्त स्थान से लिए जाते हैं। अनेक जातक इस दशा को उस काल के रूप में वर्णित करते हैं जब उन्हें अन्ततः अपने ही जीवन में घर अनुभव हुआ।`,
  },

  afflictedEffects: {
    en: `When Moon is afflicted — debilitated in Scorpio, kshina (waning toward new moon, weakest), conjunct Saturn (Vish-yoga or Punarphoo), conjunct Rahu or Ketu (Grahan-yoga), in dusthana without redemption — the dasha runs as emotional weather one cannot escape. The classical signature is sustained low mood, sleep disruption, anxiety that the native cannot trace to a cause, hyper-sensitivity to public criticism, mother\'s health concerns, marital friction, or in difficult charts a clinical depressive episode. Modern practitioners encounter this pattern frequently — Moon afflicted by Saturn or Rahu in a contemporary chart often correlates with diagnosed clinical mood disorders, postpartum depression, and chronic insomnia. The astrological reading is structural: it does not replace medical care but it does explain the timing. The dasha\'s gift in afflicted charts is interior: forced inwardness produces the kind of emotional self-knowledge that lighter charts never develop. Many of the deepest writers, healers, therapists, and contemplatives in any generation are running afflicted Moon dashas. The trick is to receive medical and psychological care alongside the astrological remedies — not to choose one at the cost of the other.`,
    hi: `जब चन्द्र पीड़ित हों — वृश्चिक में नीच के, क्षीण (अमावस्या की ओर क्षयमान, सबसे निर्बल), शनि से युक्त (विष-योग अथवा पुनर्फू), राहु अथवा केतु से युक्त (ग्रहण-योग), दुस्थान में बिना उद्धार के — तब दशा ऐसे भावनात्मक मौसम के रूप में चलती है जिससे जातक बच नहीं सकता। शास्त्रीय लक्षण है — निरन्तर निम्न-मनोदशा, निद्रा-विघ्न, ऐसी चिन्ता जिसका कारण जातक नहीं ढूँढ सकता, सार्वजनिक आलोचना के प्रति अति-संवेदनशीलता, माता का स्वास्थ्य, वैवाहिक टकराव, अथवा कठिन कुण्डलियों में नैदानिक अवसाद। आधुनिक साधक इस स्वरूप से प्रायः सामना करते हैं — समकालीन कुण्डली में शनि अथवा राहु से पीड़ित चन्द्र प्रायः निदानित नैदानिक मनोदशा-विकार, प्रसवोत्तर अवसाद, और दीर्घकालिक अनिद्रा से जुड़े। ज्योतिष-पाठ संरचनात्मक है: यह चिकित्सा का स्थान नहीं लेता परन्तु समय की व्याख्या देता है। पीड़ित कुण्डलियों में दशा का उपहार आन्तरिक है: बाध्यकारी अन्तर्मुखता उस प्रकार का भावनात्मक स्व-ज्ञान देती है जिसे हलकी कुण्डलियाँ कभी विकसित नहीं करतीं। किसी भी पीढ़ी के सर्वाधिक गहरे लेखक, चिकित्सक, मनोवैज्ञानिक, और चिन्तनशील — अनेक पीड़ित चन्द्र दशा चला रहे होते हैं। चाल यह है कि ज्योतिष-उपायों के साथ चिकित्सकीय एवं मनोवैज्ञानिक देखभाल लें — एक को दूसरे की क़ीमत पर न चुनें।`,
  },

  houseEffects: [
    { house: 1, effect: { en: 'Strong placement. Personality becomes receptive, intuitive, well-liked. Body softens; weight gain possible. Public-facing work prospers.', hi: 'बलवान स्थिति। व्यक्तित्व ग्राह्य, अन्तर्ज्ञानी, लोकप्रिय। शरीर कोमल हो जाता है; भार-वृद्धि सम्भव। जन-समक्ष कार्य फलता है।' } },
    { house: 2, effect: { en: 'Strong for family wealth and emotional speech. Diet improves; food-related business prospers. Voice becomes warmer.', hi: 'पारिवारिक धन एवं भावनात्मक वाणी के लिए बलवान। आहार सुधरता है; भोजन-व्यवसाय फलता है। स्वर अधिक उष्ण।' } },
    { house: 3, effect: { en: 'Mid-strength. Sibling relationships warm. Communication becomes empathic. Suits writers, teachers, broadcasters with emotional reach.', hi: 'मध्य-बल। भाई-बहन सम्बन्ध उष्ण। सम्वाद सहानुभूतिपूर्ण। भावनात्मक पहुँच वाले लेखक, शिक्षक, प्रसारक के अनुकूल।' } },
    { house: 4, effect: { en: 'Strongest placement (digbala). Mother\'s blessings, primary residence, vehicle acquisition, emotional security all peak. Real estate prospers.', hi: 'सर्वाधिक बलवान स्थिति (दिग्बल)। माता का आशीर्वाद, मुख्य निवास, वाहन अधिग्रहण, भावनात्मक सुरक्षा — सब चरम पर। अचल सम्पत्ति फलती है।' } },
    { house: 5, effect: { en: 'Strong placement. Children, romance, creativity flourish. Educational gains. Speculation favourable if Moon is waxing.', hi: 'बलवान स्थिति। सन्तान, प्रेम, रचनात्मकता फलते हैं। शैक्षणिक लाभ। यदि चन्द्र वर्धमान हों तो सट्टा अनुकूल।' } },
    { house: 6, effect: { en: 'Difficult. Health concerns surface, especially digestive or lung-related. Workplace tensions need careful handling. Best for healers, nutritionists, social workers.', hi: 'कठिन। स्वास्थ्य चिन्ताएँ उभरती हैं, विशेषकर पाचन अथवा फुफ्फुस सम्बन्धी। कार्यस्थल तनाव सावधानी माँगता है। चिकित्सक, पोषणविद्, समाज-सेवक के लिए श्रेष्ठ।' } },
    { house: 7, effect: { en: 'Strong for marriage. Spouse becomes nurturing, the public reputation steady. Business with women or in food, hospitality favourable.', hi: 'विवाह के लिए बलवान। जीवनसाथी पोषक, सार्वजनिक प्रतिष्ठा स्थिर। महिलाओं के साथ अथवा भोजन, आतिथ्य में व्यवसाय अनुकूल।' } },
    { house: 8, effect: { en: 'Difficult house. Emotional secrets, mother\'s health, occult experiences, dream-life. Useful for therapists and researchers; tough for ordinary natives.', hi: 'कठिन भाव। भावनात्मक रहस्य, माता का स्वास्थ्य, तान्त्रिक अनुभव, स्वप्न-जीवन। चिकित्सक एवं अनुसन्धाताओं के लिए उपयोगी; सामान्य जातकों के लिए कठिन।' } },
    { house: 9, effect: { en: 'Strong placement. Mother\'s religious influence, foreign travel for spiritual reasons, gentle dharmic teaching role.', hi: 'बलवान स्थिति। माता का धार्मिक प्रभाव, आध्यात्मिक कारणों से विदेश यात्रा, कोमल धार्मिक शिक्षण भूमिका।' } },
    { house: 10, effect: { en: 'Mixed but strong for public-reception careers. Politics, public administration, hospitality, healthcare leadership. Reputation softens any harsh edges.', hi: 'मिश्रित किन्तु जन-स्वीकार्य करियर के लिए बलवान। राजनीति, जन-प्रशासन, आतिथ्य, स्वास्थ्य-सेवा नेतृत्व। प्रतिष्ठा किसी भी कठोर किनारे को कोमल कर देती है।' } },
    { house: 11, effect: { en: 'Strong income placement. Earnings from women, the public, food/water industries. Network of supportive friends. Wishes fulfilled.', hi: 'बलवान आय-स्थिति। महिलाओं, जन-समाज, भोजन/जल उद्योगों से कमाई। सहायक मित्रों का नेटवर्क। इच्छाएँ पूर्ण।' } },
    { house: 12, effect: { en: 'Mixed. Foreign settlement, hospital or hospice work, retreat life, sleep changes. Spiritual depth available; emotional drainage if Moon is afflicted.', hi: 'मिश्रित। विदेश-स्थापना, अस्पताल अथवा होस्पाइस कार्य, एकान्त जीवन, निद्रा परिवर्तन। आध्यात्मिक गहराई उपलब्ध; पीड़ित चन्द्र हो तो भावनात्मक रिक्तीकरण।' } },
  ],

  antardashas: [
    {
      subRuler: 'Chandra',
      label: { en: 'Chandra–Chandra Antardasha', hi: 'चन्द्र-चन्द्र अन्तर्दशा' },
      duration: { en: 'About 10 months 0 days', hi: 'लगभग 10 माह 0 दिन' },
      effect: {
        en: `Opens the dasha with an emotional reset. Most natives report a marked shift in mood — toward warmth and openness if Moon is well-placed, toward retreat and withdrawal if afflicted. Mother often becomes the emotional centre of the year. Possible residential change. Public reception of work softens or sharpens visibly. Make important emotional commitments early; the dasha\'s mood is set in this opening window.`,
        hi: `दशा का आरम्भ भावनात्मक पुनर्स्थापना के साथ। अधिकांश जातक स्पष्ट मनोदशा परिवर्तन रिपोर्ट करते हैं — बलवान चन्द्र हों तो उष्णता एवं खुलापन की ओर, पीड़ित हों तो एकान्त एवं विरक्ति की ओर। माता प्रायः वर्ष का भावनात्मक केन्द्र बनती हैं। निवास परिवर्तन सम्भव। कार्य की सार्वजनिक स्वीकार्यता दृश्य रूप से कोमल अथवा तीक्ष्ण होती है। महत्त्वपूर्ण भावनात्मक प्रतिबद्धताएँ शीघ्र करें; दशा का स्वर इसी प्रारम्भिक खण्ड में निर्धारित होता है।`,
      },
    },
    {
      subRuler: 'Mangal',
      label: { en: 'Chandra–Mangal Antardasha', hi: 'चन्द्र-मंगल अन्तर्दशा' },
      duration: { en: 'About 7 months 0 days', hi: 'लगभग 7 माह 0 दिन' },
      effect: {
        en: `Mars stirring the Moon produces emotionally charged action. Property purchases tied to family decisions, surgical interventions related to women\'s health, sibling-driven family changes, vehicle acquisition. Tempers can flare; women in the family may feel particularly tested. The classical advice is to channel the energy into concrete projects — kitchen renovation, real estate decisions, fitness goals — rather than into interpersonal confrontation.`,
        hi: `चन्द्र को उत्तेजित करते मंगल भावनात्मक रूप से आवेशित कर्म उत्पन्न करते हैं। पारिवारिक निर्णयों से जुड़े सम्पत्ति-क्रय, स्त्री-स्वास्थ्य सम्बन्धी शल्य चिकित्सा, भाई-बहनों से प्रेरित पारिवारिक परिवर्तन, वाहन अधिग्रहण। क्रोध उभर सकता है; परिवार की महिलाएँ विशेष परीक्षा अनुभव कर सकती हैं। शास्त्रीय परामर्श है — ऊर्जा को अन्तर्व्यक्तिक टकराव के बजाय मूर्त परियोजनाओं — रसोई-पुनर्निर्माण, अचल सम्पत्ति निर्णय, स्वास्थ्य-लक्ष्य — में लगाएँ।`,
      },
    },
    {
      subRuler: 'Rahu',
      label: { en: 'Chandra–Rahu Antardasha', hi: 'चन्द्र-राहु अन्तर्दशा' },
      duration: { en: 'About 1 year 6 months 0 days', hi: 'लगभग 1 वर्ष 6 माह 0 दिन' },
      effect: {
        en: `One of the dasha\'s most psychologically active sub-periods. Rahu over Moon is the classical eclipse pattern; in this antardasha mood becomes the variable. Anxiety, intrusive thoughts, dream-vivid sleep, and unconventional emotional attractions surface. Foreign travel, residential change, or relocation for work is common. Mother\'s situation may need attention. The remedy is structured — daily mantra, regular sleep, reduced screens, and if symptoms cross into clinical territory, professional psychiatric support. Eighteen months of disciplined inwardness produces the dasha\'s most lasting interior insights; eighteen months of unstructured drift produces lasting damage.`,
        hi: `दशा की सर्वाधिक मनोवैज्ञानिक रूप से सक्रिय अन्तर्दशाओं में से एक। चन्द्र पर राहु शास्त्रीय ग्रहण-स्वरूप है; इस अन्तर्दशा में मनोदशा वह चर है। चिन्ता, घुसपैठी विचार, स्वप्न-समृद्ध निद्रा, और अपरम्परागत भावनात्मक आकर्षण उभरते हैं। विदेश यात्रा, निवास परिवर्तन, अथवा कार्य हेतु स्थानान्तरण सामान्य। माता की स्थिति पर ध्यान आवश्यक। उपाय संरचित है — दैनिक मन्त्र, नियमित निद्रा, स्क्रीन में कमी, और यदि लक्षण नैदानिक सीमा में जाएँ तो व्यावसायिक मनोरोग-चिकित्सा। अनुशासित अन्तर्मुखता के अठारह माह दशा के सर्वाधिक स्थायी आन्तरिक बोध देते हैं; असंरचित बहाव के अठारह माह स्थायी क्षति देते हैं।`,
      },
    },
    {
      subRuler: 'Guru',
      label: { en: 'Chandra–Guru Antardasha', hi: 'चन्द्र-गुरु अन्तर्दशा' },
      duration: { en: 'About 1 year 4 months 0 days', hi: 'लगभग 1 वर्ष 4 माह 0 दिन' },
      effect: {
        en: `Moon and Jupiter together activate Gaja-Kesari yoga in many charts; this antardasha is the dasha\'s warmest and most fortunate window. Marriage if delayed, conception, the maturation of children\'s milestones, religious teaching opportunities, and a settled emotional life. Public reception is positive. Health-wise, weight gain is reported (Jupiter expands what Moon already softens). Diet and movement matter through these sixteen months.`,
        hi: `अनेक कुण्डलियों में चन्द्र और गुरु मिलकर गज-केसरी योग सक्रिय करते हैं; यह अन्तर्दशा दशा का सर्वाधिक उष्ण एवं सौभाग्य-पूर्ण खण्ड है। यदि विलम्बित हो तो विवाह, गर्भधारण, सन्तानों के मील-पत्थरों की परिपक्वता, धार्मिक शिक्षण के अवसर, और स्थिर भावनात्मक जीवन। सार्वजनिक स्वीकार्यता धनात्मक। स्वास्थ्य की दृष्टि से भार-वृद्धि की रिपोर्ट (गुरु उसका विस्तार करते हैं जिसे चन्द्र पहले से कोमल करते हैं)। इन सोलह मासों में आहार एवं गति महत्त्वपूर्ण।`,
      },
    },
    {
      subRuler: 'Shani',
      label: { en: 'Chandra–Shani Antardasha', hi: 'चन्द्र-शनि अन्तर्दशा' },
      duration: { en: 'About 1 year 7 months 0 days', hi: 'लगभग 1 वर्ष 7 माह 0 दिन' },
      effect: {
        en: `Saturn over Moon is the dasha\'s heaviest emotional window — the classical Vish-yoga or Punarphoo. Loneliness, slowed mood, sleep shortening, public-facing work feeling burdensome. Mother\'s health concerns or extended caregiving. The native is asked to develop emotional discipline rather than suppress feeling. Daily Hanuman Chalisa or Shri Suktam, regular sleep, simple diet, and a one-day-a-week complete rest practice carry the antardasha through. Most natives report this as the dasha\'s defining hardship — and, on review years later, also its defining maturation.`,
        hi: `चन्द्र पर शनि दशा का सर्वाधिक भारी भावनात्मक खण्ड है — शास्त्रीय विष-योग अथवा पुनर्फू। एकाकीपन, धीमी मनोदशा, निद्रा-संक्षेप, जन-समक्ष कार्य भारी अनुभव। माता का स्वास्थ्य अथवा लम्बी देखभाल। जातक से भावना का दमन नहीं, भावनात्मक अनुशासन का विकास माँगा जाता है। दैनिक हनुमान चालीसा अथवा श्री सूक्त, नियमित निद्रा, सरल आहार, और सप्ताह में एक दिन सम्पूर्ण विश्राम — ये अभ्यास अन्तर्दशा को पार कराते हैं। अधिकांश जातक इसे दशा की परिभाषक कठिनाई मानते हैं — और वर्षों बाद समीक्षा में, उसकी परिभाषक परिपक्वता भी।`,
      },
    },
    {
      subRuler: 'Budh',
      label: { en: 'Chandra–Budh Antardasha', hi: 'चन्द्र-बुध अन्तर्दशा' },
      duration: { en: 'About 1 year 5 months 0 days', hi: 'लगभग 1 वर्ष 5 माह 0 दिन' },
      effect: {
        en: `Moon and Mercury are friends; this is one of the dasha\'s most cognitively articulate windows. Writing, teaching, public speaking, and business communication flourish. Many natives publish a book, complete a degree, accept a teaching role, or build a media presence in this antardasha. Family communication improves. The risk is over-thinking emotion into anxiety — Mercury\'s pattern-finding mind meets Moon\'s emotional sensitivity, and rumination intensifies. Schedule the work; the work itself is the remedy.`,
        hi: `चन्द्र और बुध मित्र हैं; यह दशा की सर्वाधिक संज्ञानात्मक रूप से अभिव्यक्त अन्तर्दशाओं में से है। लेखन, अध्यापन, सार्वजनिक भाषण, और व्यापारिक सम्वाद फलते हैं। अनेक जातक इसी अन्तर्दशा में ग्रन्थ प्रकाशित करते हैं, उपाधि पूर्ण करते हैं, अध्यापन-भूमिका स्वीकारते हैं, अथवा मीडिया उपस्थिति बनाते हैं। पारिवारिक सम्वाद सुधरता है। जोखिम है भावना को चिन्ता में अति-सोच लेना — बुध की पैटर्न-खोज चन्द्र की भावनात्मक संवेदनशीलता से मिलती है, और चिन्तन-चक्र तीव्र होता है। कार्य को नियत करें; कार्य स्वयं उपाय है।`,
      },
    },
    {
      subRuler: 'Ketu',
      label: { en: 'Chandra–Ketu Antardasha', hi: 'चन्द्र-केतु अन्तर्दशा' },
      duration: { en: 'About 7 months 0 days', hi: 'लगभग 7 माह 0 दिन' },
      effect: {
        en: `Ketu cuts what Moon nurtures. Brief detachment from a familiar emotional anchor — sometimes voluntary, sometimes circumstantial. A long-running attachment ends, a beloved pet passes, an old relationship dissolves, a familiar role at home shifts. Health-wise, fevers, brief inflammatory issues, and weight loss are common. Read this as a planned reset; what falls away here is, by classical reading, no longer the right vehicle for the dasha\'s remaining years. Many natives describe this as a "necessary lightening."`,
        hi: `केतु काटते हैं उसे जिसे चन्द्र पोषित करते हैं। परिचित भावनात्मक आधार से संक्षिप्त विरक्ति — कभी ऐच्छिक, कभी परिस्थितिजन्य। लम्बी आसक्ति समाप्त, प्रिय पालतू का देहान्त, पुराना सम्बन्ध विघटित, घर पर परिचित भूमिका परिवर्तित। स्वास्थ्य की दृष्टि से ज्वर, संक्षिप्त प्रदाह, और भार-कमी सामान्य। इसे नियोजित पुनरारम्भ के रूप में पढ़ें; यहाँ जो छूटता है वह शास्त्रीय दृष्टि से दशा के शेष वर्षों के लिए अब उपयुक्त वाहन नहीं था। अनेक जातक इसे "आवश्यक हलकापन" कहते हैं।`,
      },
    },
    {
      subRuler: 'Shukra',
      label: { en: 'Chandra–Shukra Antardasha', hi: 'चन्द्र-शुक्र अन्तर्दशा' },
      duration: { en: 'About 1 year 8 months 0 days', hi: 'लगभग 1 वर्ष 8 माह 0 दिन' },
      effect: {
        en: `Moon and Venus are neutrals but operationally one of the dasha\'s most beautiful windows. Marriage, the birth of a daughter, a relationship reaching its most romantic phase, foreign travel for honeymoon or pleasure, recognition in the arts. Income from creative or aesthetic work grows. Vehicle and home aesthetic improvements common. The risk pattern: Venus under Moon can produce emotional indulgence — over-spending, infatuation, or attachment to comfort. Sustain dharmic balance and the antardasha gives all of its considerable goodness.`,
        hi: `चन्द्र और शुक्र तटस्थ हैं किन्तु व्यावहारिक रूप से दशा के सर्वाधिक सुन्दर खण्डों में से एक। विवाह, पुत्री का जन्म, सम्बन्ध की सर्वाधिक प्रेममय अवस्था, हनीमून अथवा आनन्द हेतु विदेश यात्रा, कला में मान्यता। रचनात्मक अथवा सौन्दर्यपरक कार्य से आय बढ़ती है। वाहन एवं गृह सौन्दर्य-सुधार सामान्य। जोखिम-स्वरूप: चन्द्र के अधीन शुक्र भावनात्मक भोग उत्पन्न कर सकते हैं — अति-व्यय, मोह, अथवा सुख-आसक्ति। धार्मिक संतुलन बनाये रखें और अन्तर्दशा अपनी सम्पूर्ण विशाल शुभता देती है।`,
      },
    },
    {
      subRuler: 'Surya',
      label: { en: 'Chandra–Surya Antardasha', hi: 'चन्द्र-सूर्य अन्तर्दशा' },
      duration: { en: 'About 6 months 0 days', hi: 'लगभग 6 माह 0 दिन' },
      effect: {
        en: `Closing the ten years. Sun and Moon are friends but their relationship in dasha is decisive — the closing antardasha shows what the native is to take with them into the next mahadasha (Mars). Authority figures register the work the dasha produced; promotions, formal recognitions, government decisions on long-pending applications. The native\'s public role consolidates. Father may become more visible. Six months pass quickly; finalise what should be visible publicly before the dasha closes.`,
        hi: `दस वर्षों का अन्त। सूर्य और चन्द्र मित्र हैं किन्तु दशा में उनका सम्बन्ध निर्णायक है — अन्तिम अन्तर्दशा दिखाती है कि जातक अगली महादशा (मंगल) में क्या ले जाएगा। अधिकारी व्यक्ति दशा के कार्य को दर्ज करते हैं; पदोन्नतियाँ, औपचारिक मान्यताएँ, दीर्घ-लम्बित आवेदनों पर शासकीय निर्णय। जातक की सार्वजनिक भूमिका सुदृढ़ होती है। पिता अधिक दृश्य हो सकते हैं। छह माह शीघ्र बीतते हैं; जो सार्वजनिक रूप से दृश्य होना है उसे दशा के अन्त से पूर्व अन्तिम रूप दें।`,
      },
    },
  ],

  remedies: [
    {
      title: { en: 'Mantra Recitation', hi: 'मन्त्र जप' },
      body: {
        en: `The classical Moon practice is the Chandra Beej Mantra (Om Shraam Shreem Shraum Sah Chandraya Namah, 11,000 recitations across 27 days). Lay alternatives are the Annapurna Stotra (Moon-Mother fusion practice), the Devi Suktam from the Rig Veda (recited on Mondays), the Shri Suktam (for Moon-Lakshmi prosperity), or the simple Hanuman Chalisa daily. Pearl rosary or sphatik mala is preferred. Recite at night during the waxing fortnight, by moonlight if possible. The Maha Mrityunjaya mantra (108 daily) is the standard recourse if the natal Moon is conjunct Saturn (Vish-yoga) — that combination requires Shiva\'s direct grace.`,
        hi: `शास्त्रीय चन्द्र अभ्यास है — चन्द्र बीज मन्त्र (ॐ श्रां श्रीं श्रौं सः चन्द्राय नमः, 27 दिनों में 11,000 जप)। जन-विधियाँ हैं — अन्नपूर्णा स्तोत्र (चन्द्र-माता संयोजन अभ्यास), ऋग्वेद का देवी सूक्तम् (सोमवार को पाठ), श्री सूक्त (चन्द्र-लक्ष्मी समृद्धि के लिए), अथवा सरल दैनिक हनुमान चालीसा। मोती की माला अथवा स्फटिक माला श्रेष्ठ। शुक्ल पक्ष की रात्रि में, यदि सम्भव हो तो चन्द्र-प्रकाश में जप। यदि जन्म-चन्द्र शनि से युक्त (विष-योग) हों तो महामृत्युंजय मन्त्र (दैनिक 108) मानक उपाय — यह संयोजन शिव की प्रत्यक्ष कृपा माँगता है।`,
      },
    },
    {
      title: { en: 'Pearl (Moti)', hi: 'मोती' },
      body: {
        en: `Pearl is the Moon\'s gem and the gentlest of the major Jyotish stones — adverse reactions are rare. White natural pearl (preferably South Sea or Basra), four to six carats, set in silver, little finger of the right hand, energised on a Monday in Shukla paksha at moonrise with the Chandra beej mantra. Cultured pearls are accepted in modern practice but classical authorities prefer natural. Do not pair Pearl with Ruby, Hessonite (Gomedh), or Cat\'s Eye. If Pearl produces excess emotionalism (cried at minor things in week one), Moonstone is a softer alternative. Avoid Pearl during the dark fortnight\'s last three days each lunar month — its energy is weak then.`,
        hi: `मोती चन्द्र का रत्न है और प्रमुख ज्योतिष रत्नों में सबसे कोमल — प्रतिकूल प्रतिक्रियाएँ विरले। श्वेत प्राकृतिक मोती (श्रेष्ठतया दक्षिण सागर अथवा बसरा), चार से छह रत्ती, चाँदी में, दाहिने हाथ की कनिष्ठा, शुक्ल पक्ष के सोमवार को चन्द्रोदय पर चन्द्र बीज मन्त्र से अभिमन्त्रित। कृत्रिम मोती आधुनिक प्रथा में स्वीकार्य किन्तु शास्त्रीय अधिकारी प्राकृतिक को वरीयता देते हैं। मोती के साथ माणिक्य, गोमेद, अथवा लहसुनिया न पहनें। यदि मोती से भावनात्मकता बढ़ जाए (पहले सप्ताह में छोटी बात पर रुलाई आए) — मूनस्टोन कोमल विकल्प। प्रत्येक चान्द्रमास के कृष्ण पक्ष के अन्तिम तीन दिन मोती न पहनें — उस समय उसकी ऊर्जा निर्बल।`,
      },
    },
    {
      title: { en: 'Daana (Donation)', hi: 'दान' },
      body: {
        en: `Moon rules mothers, the public, women, food, and water. Donation in Chandra\'s name should reach widows, single mothers, women\'s shelters, lactation support, hospital food kitchens, and water provision in drought areas. Rice, milk, white sweets (kheer, basundi, sandesh), white clothing, and silver are classical Moon daana. Monday at moonrise is the prescribed time. The deeper Moon daana, however, is emotional — feeding people without conditions, listening to one\'s mother without correcting her, attending the funerals of distant relatives because someone needs to be there, staying with a sick neighbour. The Moon rewards emotional presence far more than transactional giving.`,
        hi: `चन्द्र माताओं, जन-समाज, महिलाओं, भोजन, और जल पर शासन करते हैं। चन्द्र के नाम पर दान विधवाओं, एकल माताओं, महिला आश्रयों, स्तनपान समर्थन, अस्पताल भोजन-रसोइयों, और सूखा-क्षेत्रों में जल-व्यवस्था तक पहुँचना चाहिए। चावल, दूध, श्वेत मिष्ठान्न (खीर, बासुन्दी, संदेश), श्वेत वस्त्र, और चाँदी शास्त्रीय चन्द्र-दान हैं। सोमवार को चन्द्रोदय विहित समय। तथापि गहरा चन्द्र-दान भावनात्मक है — बिना शर्त लोगों को भोजन कराना, माता को सुधारे बिना सुनना, दूर के स्वजनों के अन्तिम संस्कार में उपस्थित होना क्योंकि किसी को रहना ही है, बीमार पड़ोसी के पास रुकना। चन्द्र भावनात्मक उपस्थिति को लेन-देन से कहीं अधिक पुरस्कृत करते हैं।`,
      },
    },
    {
      title: { en: 'Vrata (Observance)', hi: 'व्रत' },
      body: {
        en: `The Somvar Vrat (Monday fast) is the standard Moon observance: a sunrise-to-evening fast on Mondays, with milk and white food at evening, lit lamps before Shiva at moonrise. Sixteen consecutive Mondays (Solah Somvar) is the classical full cycle. The Pradosh Vrat (the thirteenth lunar day in both fortnights) is the second standard observance — fasting until the Pradosh hour and visiting a Shiva temple at sunset. Purnima (full moon) and Amavasya (no moon) days are the year\'s most charged moon-points; recite Chandra mantras and offer water to the moon. Pilgrimage to Somnath, Kailash, or any Shiva-Moon temple once during the dasha is meritorious.`,
        hi: `सोमवार व्रत मानक चन्द्र अनुष्ठान है: सोमवार को सूर्योदय से सायं तक उपवास, सायं दूध एवं श्वेत भोजन, चन्द्रोदय पर शिव के समक्ष दीपदान। सोलह क्रमिक सोमवार (सोलह सोमवार) शास्त्रीय पूर्ण चक्र। प्रदोष व्रत (दोनों पक्षों की त्रयोदशी) द्वितीय मानक अनुष्ठान — प्रदोष काल तक उपवास और सूर्यास्त पर शिव मन्दिर दर्शन। पूर्णिमा एवं अमावस्या वर्ष के सर्वाधिक आवेशित चन्द्र-बिन्दु; चन्द्र मन्त्रों का जप करें और चन्द्र को अर्घ्य अर्पित करें। दशा के दौरान एक बार सोमनाथ, कैलाश, अथवा किसी शिव-चन्द्र मन्दिर की तीर्थयात्रा पुण्यप्रद।`,
      },
    },
    {
      title: { en: 'Lifestyle Adjustments', hi: 'जीवन-शैली समायोजन' },
      body: {
        en: `The Moon\'s dasha rewards rhythmic living. Sleep before eleven; wake before sunrise. Eat the largest meal at midday. Reduce caffeine, alcohol, and heavily processed foods that disrupt mood and digestion. Spend time around water — a daily walk near a river, lake, or ocean if accessible; a long soak in warm water otherwise. Spend time with the mother, mother-figure, or close female relative once a week. Cultivate one creative outlet that is purely for emotional expression — singing, journaling, gardening, cooking — not for income or recognition. The Moon governs the receptive faculty, and over ten years a creative outlet kept alive becomes the dasha\'s deepest gift.`,
        hi: `चन्द्र की दशा लयबद्ध जीवन को पुरस्कृत करती है। ग्यारह बजे से पूर्व सोएँ; सूर्योदय से पूर्व जागें। मध्याह्न में सर्वाधिक भोजन। कैफ़ीन, मद्य, और अति-प्रसंस्कृत भोजन कम करें — ये मनोदशा एवं पाचन को विघटित करते हैं। जल के पास समय बिताएँ — यदि सुलभ हो तो नदी, सरोवर, अथवा सागर के पास दैनिक सैर; अन्यथा गरम जल में लम्बा स्नान। माता, मातृ-समान, अथवा निकट महिला-स्वजन के साथ साप्ताहिक एक बार समय। शुद्ध भावनात्मक अभिव्यक्ति के लिए एक रचनात्मक अभ्यास चुनें — गायन, डायरी, बागवानी, पाक — आय अथवा मान्यता के लिए नहीं। चन्द्र ग्राह्य-वृत्ति पर शासन करते हैं, और दस वर्ष जीवित रखा गया रचनात्मक अभ्यास दशा का गहनतम उपहार बन जाता है।`,
      },
    },
  ],

  casePatterns: {
    en: `Three Chandra Mahadasha patterns recur in consultation. The first is the family-foundation chapter — typically between thirty and forty-five — where marriage, conception, primary residence, and emotional consolidation come together. The second is the public-acceptance chapter, common in writers, healers, broadcasters, and educators, where the work that had been quietly maturing finally finds an audience. The third is the inwardness chapter, often beginning with an afflicted Moon configuration: a depressive episode, a postpartum struggle, a mother\'s long illness, or a personal breakdown that becomes the entry point for ten years of deep emotional work. The third pattern is the most painful and frequently the most generative; many of the deepest interior writers and contemplatives in any generation lived through an afflicted Moon dasha. None of these patterns is final — what determines which dominates is the natal Moon\'s configuration, the second-from-Moon house, and the dispositor of natal Moon. Read those three before predicting.`,
    hi: `परामर्श में तीन चन्द्र महादशा स्वरूप पुनरावृत्त होते हैं। पहला — परिवार-आधार अध्याय — प्रायः तीस से पैंतालीस के बीच — जहाँ विवाह, गर्भधारण, मुख्य निवास, और भावनात्मक सुदृढ़ीकरण एक साथ आते हैं। दूसरा सार्वजनिक स्वीकार्यता अध्याय, लेखकों, चिकित्सकों, प्रसारकों, एवं शिक्षकों में सामान्य, जहाँ शान्त रूप से परिपक्व हो रहा कार्य अन्ततः श्रोता पाता है। तीसरा अन्तर्मुखता अध्याय, प्रायः पीड़ित चन्द्र विन्यास से आरम्भ: अवसादात्मक काल-खण्ड, प्रसवोत्तर संघर्ष, माता का दीर्घ रोग, अथवा व्यक्तिगत भंजन जो दस वर्ष के गहन भावनात्मक कार्य का प्रवेश-बिन्दु बनता है। तीसरा स्वरूप सर्वाधिक पीड़ापूर्ण है और प्रायः सर्वाधिक सृजनात्मक भी; किसी भी पीढ़ी के सर्वाधिक गहरे अन्तःजीवन-लेखक एवं चिन्तनशील पीड़ित चन्द्र दशा से गुज़रे हैं। इनमें से कोई भी स्वरूप अन्तिम नहीं — कौन-सा प्रभावी होगा यह जन्म-चन्द्र का विन्यास, चन्द्र से द्वितीय भाव, और जन्म-चन्द्र का राशीश निर्धारित करते हैं। भविष्यवाणी से पूर्व इन तीनों को पढ़ें।`,
  },

  faqs: [
    {
      question: { en: 'Is Chandra Mahadasha good or bad?', hi: 'चन्द्र महादशा शुभ है या अशुभ?' },
      answer: {
        en: `Strong Moon delivers a settled emotional life, marriage, family, public recognition, and inner contentment. Afflicted Moon — debilitated in Scorpio, kshina, conjunct Saturn or Rahu — delivers mood disruption, sleep difficulty, mother\'s health concerns, marital friction, and in difficult charts clinical mood disorders. The dasha\'s tone tracks the natal Moon\'s strength almost perfectly. Read the Moon\'s house, sign, paksha-bali, and aspects from Saturn or Rahu before forming a view.`,
        hi: `बलवान चन्द्र स्थिर भावनात्मक जीवन, विवाह, परिवार, सार्वजनिक मान्यता, और आन्तरिक सन्तोष देते हैं। पीड़ित चन्द्र — वृश्चिक में नीच के, क्षीण, शनि अथवा राहु से युक्त — मनोदशा-विघ्न, निद्रा-कठिनाई, माता का स्वास्थ्य, वैवाहिक टकराव, और कठिन कुण्डलियों में नैदानिक मनोदशा-विकार देते हैं। दशा का स्वर जन्म-चन्द्र की शक्ति का लगभग पूर्ण अनुसरण करता है। दृष्टि बनाने से पूर्व चन्द्र का भाव, राशि, पक्ष-बल, और शनि अथवा राहु से दृष्टियाँ देखें।`,
      },
    },
    {
      question: { en: 'How long is Chandra Mahadasha?', hi: 'चन्द्र महादशा कितने वर्ष की होती है?' },
      answer: {
        en: `Ten calendar years (about 3,653 days). Within these ten years there are nine antardashas, the longest being Chandra–Venus (1 year 8 months) and Chandra–Saturn (1 year 7 months); the shortest are Chandra–Sun (6 months) and Chandra–Mars / Chandra–Ketu (7 months each).`,
        hi: `दस कलैंडर वर्ष (लगभग 3,653 दिन)। इन दस वर्षों में नौ अन्तर्दशाएँ हैं — सबसे लम्बी चन्द्र-शुक्र (1 वर्ष 8 माह) और चन्द्र-शनि (1 वर्ष 7 माह); सबसे छोटी चन्द्र-सूर्य (6 माह) और चन्द्र-मंगल / चन्द्र-केतु (7-7 माह)।`,
      },
    },
    {
      question: { en: 'What does the Chandra Mahadasha bring for marriage?', hi: 'चन्द्र महादशा विवाह के लिए क्या लाती है?' },
      answer: {
        en: `Chandra Mahadasha is among the most marriage-favourable of the planetary dashas, especially when the natal Moon is well-placed and the seventh lord supports it. The strongest sub-periods for marriage are Chandra–Venus, Chandra–Jupiter, and Chandra–Mercury. Already-married natives experience the marriage stabilising or deepening, especially during the same favourable sub-periods. If Moon is afflicted, the dasha can produce marital friction or extended caregiving roles within the marriage, particularly during Chandra–Saturn and Chandra–Rahu.`,
        hi: `ग्रह-दशाओं में चन्द्र महादशा सर्वाधिक विवाह-अनुकूल में से है, विशेषकर जब जन्म-चन्द्र बलवान हों और सप्तमेश समर्थन करे। विवाह के लिए सर्वाधिक प्रबल उप-काल — चन्द्र-शुक्र, चन्द्र-गुरु, और चन्द्र-बुध। पहले से विवाहित जातक — विवाह में स्थिरता अथवा गहराई का अनुभव, विशेषकर इन्हीं अनुकूल उप-कालों में। यदि चन्द्र पीड़ित हों — दशा वैवाहिक टकराव अथवा विवाह के भीतर लम्बी देखभाल भूमिकाएँ उत्पन्न कर सकती है, विशेषकर चन्द्र-शनि और चन्द्र-राहु में।`,
      },
    },
    {
      question: { en: 'How does Chandra Mahadasha affect mental health?', hi: 'चन्द्र महादशा मानसिक स्वास्थ्य को कैसे प्रभावित करती है?' },
      answer: {
        en: `The Moon is the karaka of mind; her dasha most directly registers mental-health states. Strong Moon delivers emotional steadiness, intuitive clarity, and a settled inner life. Afflicted Moon — particularly conjunct Saturn (Vish-yoga) or Rahu (Grahan-yoga) — frequently correlates with diagnosed depression, anxiety, postpartum mood disorders, sleep dysfunction, or in severe configurations psychiatric conditions. The astrological reading explains the timing and severity but does not replace medical care. If symptoms cross into clinical territory, professional psychiatric or psychological treatment must run alongside the astrological remedies. Both layers are real; neither alone is sufficient.`,
        hi: `चन्द्र मन-कारक हैं; उनकी दशा मानसिक स्वास्थ्य अवस्थाओं को सबसे सीधे दर्ज करती है। बलवान चन्द्र भावनात्मक स्थिरता, अन्तर्ज्ञानात्मक स्पष्टता, और स्थिर आन्तरिक जीवन देते हैं। पीड़ित चन्द्र — विशेषकर शनि से युक्त (विष-योग) अथवा राहु से युक्त (ग्रहण-योग) — प्रायः निदानित अवसाद, चिन्ता, प्रसवोत्तर मनोदशा-विकार, निद्रा-असन्तुलन, अथवा गम्भीर विन्यासों में मनोरोगी अवस्थाओं से जुड़े। ज्योतिष-पाठ समय एवं तीव्रता की व्याख्या देता है किन्तु चिकित्सकीय देखभाल का स्थान नहीं लेता। यदि लक्षण नैदानिक सीमा में जाएँ — व्यावसायिक मनोरोग अथवा मनोवैज्ञानिक उपचार ज्योतिष-उपायों के समानान्तर चलना चाहिए। दोनों परतें वास्तविक हैं; कोई एक अकेले पर्याप्त नहीं।`,
      },
    },
    {
      question: { en: 'What is the best remedy for a weak Moon?', hi: 'निर्बल चन्द्र का सर्वोत्तम उपाय क्या है?' },
      answer: {
        en: `Five layered practices in priority order: (1) Daily Annapurna Stotra or Shri Suktam recitation at moonrise; (2) Sixteen consecutive Monday fasts (Solah Somvar Vrat); (3) Sustained donation to mothers, widows, women\'s shelters, and food kitchens — pick one Monday-pledge and keep it for the full ten years; (4) Lifestyle rhythm — sleep before eleven, daily contact with water, weekly creative outlet, weekly visit to mother or maternal figure; (5) Pearl (Moti) only after a competent jyotishi has read your full chart. Combined practice transforms the dasha\'s emotional weight into emotional depth.`,
        hi: `प्राथमिकता क्रम में पाँच स्तरित अभ्यास: (1) चन्द्रोदय पर दैनिक अन्नपूर्णा स्तोत्र अथवा श्री सूक्त पाठ; (2) सोलह क्रमिक सोमवार व्रत (सोलह सोमवार व्रत); (3) माताओं, विधवाओं, महिला आश्रयों, और भोजन-रसोइयों को निरन्तर दान — एक सोमवार-संकल्प चुनें और पूरे दस वर्ष निभाएँ; (4) जीवन-शैली लय — ग्यारह बजे से पूर्व निद्रा, जल से दैनिक सम्पर्क, साप्ताहिक रचनात्मक अभ्यास, माता अथवा मातृ-तुल्य से साप्ताहिक भेंट; (5) मोती केवल किसी सक्षम ज्योतिषी द्वारा आपकी पूर्ण कुण्डली पढ़ने के पश्चात्। संयुक्त अभ्यास दशा के भावनात्मक भार को भावनात्मक गहराई में परिवर्तित करता है।`,
      },
    },
    {
      question: { en: 'Will my mother face problems in Chandra Mahadasha?', hi: 'क्या चन्द्र महादशा में मेरी माता को समस्याएँ आएँगी?' },
      answer: {
        en: `The Moon is the mother-karaka, and her dasha typically activates a maternal storyline — often positively. Strong Moon: mother\'s blessings flow, mother\'s health improves, mother becomes a meaningful presence in major decisions. Afflicted Moon, particularly conjunct Saturn or in dusthana: mother\'s health concerns, extended caregiving, in difficult charts the loss of the mother during the dasha. The pattern depends on the natal Moon, the fourth house, and the fourth lord. Difficult Moon in the eighth or twelfth flags health risk; well-placed Moon usually flags transitional caregiving rather than crisis.`,
        hi: `चन्द्र मातृ-कारक हैं, और उनकी दशा प्रायः मातृ कथा-सूत्र को सक्रिय करती है — प्रायः धनात्मक रूप से। बलवान चन्द्र: माता का आशीर्वाद बहता है, माता का स्वास्थ्य सुधरता है, माता प्रमुख निर्णयों में अर्थपूर्ण उपस्थिति बनती हैं। पीड़ित चन्द्र, विशेषकर शनि से युक्त अथवा दुस्थान में: माता का स्वास्थ्य, लम्बी देखभाल, कठिन कुण्डलियों में दशा के दौरान माता की हानि। स्वरूप जन्म-चन्द्र, चतुर्थ भाव, और चतुर्थेश पर निर्भर। अष्टम अथवा द्वादश में पीड़ित चन्द्र स्वास्थ्य-जोखिम चिह्नित करते हैं; बलवान चन्द्र प्रायः संक्रमणकालीन देखभाल को चिह्नित करते हैं, संकट को नहीं।`,
      },
    },
    {
      question: { en: 'Can I expect childbirth in Chandra Mahadasha?', hi: 'क्या चन्द्र महादशा में सन्तान जन्म की अपेक्षा रखूँ?' },
      answer: {
        en: `The Moon strongly supports conception and childbirth, especially in the Chandra–Jupiter, Chandra–Venus, and Chandra–Mars sub-periods, when the natal fifth house and fifth lord also support. If your natal Moon is well-placed and the fifth lord is unafflicted, the dasha is among the chart\'s most fertile windows. For couples with delayed conception, beginning Santan Gopal mantra in the opening Chandra–Chandra year and maintaining the practice through Chandra–Jupiter or Chandra–Venus is a classical approach that many couples find effective.`,
        hi: `चन्द्र गर्भधारण एवं सन्तान-जन्म का प्रबल समर्थन करते हैं, विशेषकर चन्द्र-गुरु, चन्द्र-शुक्र, और चन्द्र-मंगल उप-कालों में, जब जन्म-कुण्डली के पंचम भाव एवं पंचमेश भी समर्थन करें। यदि आपका जन्म-चन्द्र बलवान हो और पंचमेश पीड़ित न हों — दशा कुण्डली के सर्वाधिक उर्वर खण्डों में से। विलम्बित गर्भधारण वाले दम्पत्ति प्रारम्भिक चन्द्र-चन्द्र वर्ष में सन्तान गोपाल मन्त्र आरम्भ करें और अभ्यास को चन्द्र-गुरु अथवा चन्द्र-शुक्र तक बनाये रखें — अनेक दम्पत्ति इसे प्रभावी पाते हैं।`,
      },
    },
    {
      question: { en: 'What career suits Chandra Mahadasha?', hi: 'चन्द्र महादशा के लिए कौन-से व्यवसाय अनुकूल हैं?' },
      answer: {
        en: `Public-facing and emotionally receptive work flourishes: healthcare and nursing, hospitality and food, dairy and agriculture, real estate (especially residential), education with young children, social work, psychotherapy, classical and devotional music, hospitality, water-related industries (shipping, fisheries, beverages), and politics or public administration. The common thread is roles where the public\'s reception of the work matters more than technical excellence alone. Software engineering, accounting, and behind-the-scenes technical work are workable but rarely produce the dasha\'s signature warm reception.`,
        hi: `जन-समक्ष एवं भावनात्मक रूप से ग्राह्य कार्य फलते हैं: स्वास्थ्य-सेवा एवं पोषण, आतिथ्य एवं भोजन, दुग्ध एवं कृषि, अचल सम्पत्ति (विशेषकर आवासीय), छोटे बच्चों के साथ शिक्षा, समाज-सेवा, मनोचिकित्सा, शास्त्रीय एवं भक्ति संगीत, जल-सम्बन्धित उद्योग (नौवहन, मत्स्य, पेय), और राजनीति अथवा जन-प्रशासन। सामान्य धागा है — ऐसी भूमिकाएँ जहाँ कार्य की सार्वजनिक स्वीकार्यता तकनीकी उत्कृष्टता से अधिक मायने रखती है। सॉफ़्टवेयर इंजीनियरिंग, लेखा, और पर्दे के पीछे के तकनीकी कार्य सध्य किन्तु इस दशा की विशिष्ट उष्ण स्वीकार्यता विरले देते हैं।`,
      },
    },
  ],

  howToSteps: [
    {
      name: { en: 'Generate your dasha timeline', hi: 'अपनी दशा समय-रेखा बनाएँ' },
      text: {
        en: 'Enter your date, time, and place of birth into the Mahadasha Calculator. The full 120-year sequence reveals exactly when your Chandra Mahadasha begins and which antardashas you will run within those ten years.',
        hi: 'महादशा कैलकुलेटर में अपनी जन्म तिथि, समय, और स्थान दर्ज करें। पूर्ण 120 वर्ष का क्रम दिखाएगा कि चन्द्र महादशा कब आरम्भ होगी और इन दस वर्षों में कौन-सी अन्तर्दशाएँ चलेंगी।',
      },
    },
    {
      name: { en: 'Locate Moon in your natal chart', hi: 'जन्म कुण्डली में चन्द्र की स्थिति देखें' },
      text: {
        en: 'Find Moon\'s house, sign, paksha (waxing or waning), conjunct planets, and aspects from Saturn or Rahu. Strong Moon (own sign Cancer, exalted Taurus, paksha-bali) delivers the dasha\'s most settled potential. Afflicted Moon (debilitated Scorpio, kshina, conjunct Saturn/Rahu) requires active remedy.',
        hi: 'चन्द्र का भाव, राशि, पक्ष (वर्धमान अथवा क्षयमान), साथ के ग्रह, और शनि अथवा राहु से दृष्टि देखें। बलवान चन्द्र (स्वराशि कर्क, उच्च वृष, पक्ष-बली) दशा की सर्वाधिक स्थिर संभावना देते हैं। पीड़ित चन्द्र (नीच वृश्चिक, क्षीण, शनि/राहु-युक्त) सक्रिय उपाय की माँग करते हैं।',
      },
    },
    {
      name: { en: 'Identify the running antardasha', hi: 'चालू अन्तर्दशा पहचानें' },
      text: {
        en: 'Within Chandra Mahadasha there are nine sub-periods. Difficult ones for most charts are Chandra–Saturn and Chandra–Rahu — these need active remedy. Favourable ones are Chandra–Jupiter, Chandra–Venus, Chandra–Mercury, and Chandra–Chandra — these are operational windows for marriage, conception, public-facing launches, and creative work.',
        hi: 'चन्द्र महादशा के भीतर नौ उप-काल हैं। अधिकांश कुण्डलियों के लिए कठिन — चन्द्र-शनि और चन्द्र-राहु — इन्हें सक्रिय उपाय चाहिए। अनुकूल — चन्द्र-गुरु, चन्द्र-शुक्र, चन्द्र-बुध, और चन्द्र-चन्द्र — ये विवाह, गर्भधारण, जन-समक्ष प्रक्षेपण, एवं रचनात्मक कार्य के नियोजन-खण्ड हैं।',
      },
    },
    {
      name: { en: 'Build emotional rhythm into daily life', hi: 'दैनिक जीवन में भावनात्मक लय बनाएँ' },
      text: {
        en: 'The single most reliable Chandra Mahadasha practice is rhythmic living: sleep before eleven, wake before sunrise, eat the largest meal at midday, weekly contact with mother or maternal figure, weekly creative outlet that is purely for emotional expression. Sustained for the full ten years, this rhythm transforms the dasha\'s emotional intensity into emotional depth.',
        hi: 'सबसे विश्वसनीय चन्द्र महादशा अभ्यास है लयबद्ध जीवन: ग्यारह बजे से पूर्व निद्रा, सूर्योदय से पूर्व जागरण, मध्याह्न में सर्वाधिक भोजन, माता अथवा मातृ-तुल्य से साप्ताहिक सम्पर्क, शुद्ध भावनात्मक अभिव्यक्ति का साप्ताहिक रचनात्मक अभ्यास। पूरे दस वर्ष बनाये रखने पर यह लय दशा की भावनात्मक तीव्रता को भावनात्मक गहराई में परिवर्तित करती है।',
      },
    },
    {
      name: { en: 'Combine astrological and medical care', hi: 'ज्योतिष एवं चिकित्सा देखभाल को साथ रखें' },
      text: {
        en: 'If natal Moon is afflicted and the dasha registers as clinical depression, anxiety, postpartum struggle, or sleep dysfunction, combine astrological remedies with appropriate psychiatric or psychological care. The Moon\'s dasha runs deep; do not handle clinical mood symptoms with mantra alone. Both layers — medical and astrological — are real; both are needed.',
        hi: 'यदि जन्म-चन्द्र पीड़ित हों और दशा नैदानिक अवसाद, चिन्ता, प्रसवोत्तर संघर्ष, अथवा निद्रा-असन्तुलन के रूप में दर्ज हो — ज्योतिष-उपायों को उपयुक्त मनोरोग अथवा मनोवैज्ञानिक देखभाल के साथ संयोजित करें। चन्द्र की दशा गहरी चलती है; नैदानिक मनोदशा-लक्षणों को केवल मन्त्र से न सम्भालें। दोनों परतें — चिकित्सकीय और ज्योतिष — वास्तविक हैं; दोनों आवश्यक।',
      },
    },
    {
      name: { en: 'Time emotional commitments to favourable sub-periods', hi: 'भावनात्मक प्रतिबद्धताओं का समय अनुकूल उप-कालों में रखें' },
      text: {
        en: 'For marriage, target Chandra–Venus or Chandra–Jupiter. For conception, target Chandra–Jupiter, Chandra–Venus, or Chandra–Mars. For residential change, target Chandra–Mars or Chandra–Mercury. For public-facing launches, target Chandra–Mercury, Chandra–Sun, or Chandra–Chandra. The ten years are emotional weather; navigate by the planetary mood of each season.',
        hi: 'विवाह के लिए — चन्द्र-शुक्र अथवा चन्द्र-गुरु। गर्भधारण के लिए — चन्द्र-गुरु, चन्द्र-शुक्र, अथवा चन्द्र-मंगल। निवास परिवर्तन के लिए — चन्द्र-मंगल अथवा चन्द्र-बुध। जन-समक्ष प्रक्षेपण के लिए — चन्द्र-बुध, चन्द्र-सूर्य, अथवा चन्द्र-चन्द्र। दस वर्ष भावनात्मक मौसम हैं; प्रत्येक ऋतु के ग्रह-स्वर से नौवहन करें।',
      },
    },
  ],

  datePublished: '2026-05-02',
  dateModified: '2026-05-02',
};
