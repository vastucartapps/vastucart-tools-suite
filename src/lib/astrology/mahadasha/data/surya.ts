import type { PlanetRecord } from '../types';

export const SURYA: PlanetRecord = {
  slug: 'surya',
  displayName: { en: 'Surya Mahadasha', hi: 'सूर्य महादशा' },
  westernName: 'Sun',
  beejMantra: 'Om Hraam Hreem Hraum Sah Suryaya Namah',
  periodYears: 6,
  periodDays: Math.round(6 * 365.25),
  karaka: {
    en: ['atma (soul)', 'father', 'authority', 'vitality', 'government', 'leadership', 'health', 'ego'],
    hi: ['आत्मा', 'पिता', 'अधिकार', 'ओजस्', 'शासन', 'नेतृत्व', 'स्वास्थ्य', 'अहंकार'],
  },
  ownSigns: ['Leo'],
  exaltation: { sign: 'Aries', degree: 10 },
  debilitation: { sign: 'Libra', degree: 10 },
  friendly: ['chandra', 'mangal', 'guru'],
  neutral: ['budh'],
  enemy: ['shukra', 'shani', 'rahu', 'ketu'],
  weekday: { en: 'Sunday', hi: 'रविवार' },
  deity: { en: 'Aditya, Shiva, Hanuman', hi: 'आदित्य, शिव, हनुमान' },
  gemstone: { en: 'Ruby (Manik)', hi: 'माणिक्य' },
  themeColor: { primary: '#C84B14', accent: '#E37137' },
  icon: 'sun',

  intro: {
    en: `Surya Mahadasha is the shortest of the seven major planetary dashas (the two nodes aside) — only six years. But its compactness is misleading. The Sun is the atma-karaka, the natural significator of the soul, and his dasha is when the chart\'s deepest question — who is this person, really — is forced into the open. Six years is enough to gain a public role, lose a father, redefine one\'s relationship to authority, take a stand that becomes a defining decision of the life. Classical writers describe the Surya dasha as a period of revelation. The reputation that was building quietly becomes visible. The compromises that were tolerable to the self become intolerable. Some natives discover their true work in this dasha. Others discover that what they had been doing was someone else\'s vision. Either revelation is the dasha\'s gift; the Sun does not let the native stay anonymous.`,
    hi: `विंशोत्तरी क्रम की सात प्रमुख ग्रह-दशाओं (दोनों पात अलग रखकर) में सूर्य महादशा सबसे छोटी है — मात्र छह वर्ष। परन्तु इसकी संक्षिप्तता भ्रामक है। सूर्य आत्म-कारक हैं, आत्मा के नैसर्गिक सूचक, और उनकी दशा वह काल है जब कुण्डली का सर्वाधिक गहरा प्रश्न — यह व्यक्ति वास्तव में कौन है — खुले में आ जाता है। छह वर्ष पर्याप्त हैं — सार्वजनिक भूमिका प्राप्त करने को, पिता को खोने को, अधिकार से अपने सम्बन्ध को पुनर्परिभाषित करने को, ऐसा निर्णय लेने को जो जीवन का परिभाषक बन जाए। शास्त्रीय लेखक सूर्य दशा को आविष्कार-काल कहते हैं। जो प्रतिष्ठा शान्त रूप से बन रही थी वह दृश्य हो जाती है। जो समझौते स्वयं को सह्य थे वे असह्य हो जाते हैं। कुछ जातक इस दशा में अपना सच्चा कार्य पाते हैं। दूसरे यह पाते हैं कि वे जो कर रहे थे वह किसी और की दृष्टि थी। दोनों ही प्रकटन दशा के उपहार हैं; सूर्य जातक को अनाम नहीं रहने देते।`,
  },

  periodOverview: {
    en: `Six years is the smallest mahadasha among the seven planetary periods. Within this short span there are nine antardashas: Surya, Chandra, Mangal, Rahu, Guru, Shani, Budh, Ketu, Shukra. The opening Surya–Surya is only about three and a half months, the longest is Surya–Shukra at exactly one year. Because each sub-period is short, the dasha\'s mood shifts rapidly — a difficult Surya–Shani window of eleven months may be followed by a constructive Surya–Budh of ten months and then a sharp Surya–Ketu of four months. Read these transitions carefully; what looks like an erratic period from outside is in fact a rapid sequence of distinct planetary signatures. The natal Sun\'s placement, sign, and aspects determine whether the dasha registers as authority gained, authority confronted, or both.`,
    hi: `सात ग्रह-दशाओं में छह वर्ष सबसे छोटी महादशा है। इस लघु अवधि में नौ अन्तर्दशाएँ हैं: सूर्य, चन्द्र, मंगल, राहु, गुरु, शनि, बुध, केतु, शुक्र। प्रारम्भिक सूर्य-सूर्य मात्र साढ़े तीन माह का है, सबसे लम्बा सूर्य-शुक्र पूरे एक वर्ष का। चूँकि प्रत्येक उप-काल छोटा है, दशा का स्वर तीव्रता से बदलता है — कठिन सूर्य-शनि का ग्यारह माह उसके पश्चात् रचनात्मक सूर्य-बुध का दस माह और फिर तीक्ष्ण सूर्य-केतु का चार माह। इन परिवर्तनों को सावधानीपूर्वक पढ़ें; जो बाहर से अनियमित काल लगता है वह वस्तुतः भिन्न ग्रह-संकेतों का तीव्र क्रम है। जन्म-कुण्डली में सूर्य की स्थिति, राशि, और दृष्टियाँ निर्धारित करती हैं कि दशा अधिकार-प्राप्ति, अधिकार-टकराव, अथवा दोनों के रूप में दर्ज होगी।`,
  },

  wellPlacedEffects: {
    en: `When the Sun is well-placed in the natal chart — in own sign Leo, exalted in Aries, in the tenth (digbala), aspecting the lagna, or with strong directional and positional strength — the six years deliver one of the chart\'s clearest career and reputation chapters. Promotion to a senior position, government recognition, election to office, paternal blessings, the resolution of a long-pending property or honour-related concern, public visibility, and authoritative voice. Career fields that flourish are government service, judiciary, defence, medicine, leadership roles in any organisation, public administration, classical music and dance, and dharmic teaching. Health-wise, well-placed Sun protects the heart, eyes, spine, and immune system. The native often recovers from a long-running illness in this dasha, particularly within Surya–Mars and Surya–Jupiter sub-periods. The deepest gift is internal: the native develops the capacity to make decisions for the group rather than only for themselves, and discovers that this capacity has been quietly maturing through the previous dasha. Six years is short, but in well-placed configurations they are productive, public, and remembered.`,
    hi: `जब जन्म-कुण्डली में सूर्य बलवान हों — स्वराशि सिंह में, उच्च के मेष में, दशम भाव (दिग्बल) में, लग्न पर दृष्टि देते हुए, अथवा प्रबल दिशा एवं स्थान बल के साथ — तब छह वर्ष कुण्डली के सर्वाधिक स्पष्ट करियर एवं प्रतिष्ठा अध्यायों में से एक देते हैं। वरिष्ठ पद पर पदोन्नति, शासकीय मान्यता, पद पर चयन, पैतृक आशीर्वाद, दीर्घ-लम्बित सम्पत्ति अथवा सम्मान-सम्बन्धी प्रकरण का समाधान, सार्वजनिक दृश्यता, और प्रामाणिक स्वर। फलने वाले व्यवसाय हैं — शासकीय सेवा, न्याय व्यवस्था, रक्षा, चिकित्सा, किसी भी संस्था का नेतृत्व, जन-प्रशासन, शास्त्रीय संगीत-नृत्य, और धार्मिक शिक्षण। स्वास्थ्य की दृष्टि से बलवान सूर्य हृदय, नेत्र, मेरुदण्ड, एवं प्रतिरक्षा प्रणाली की रक्षा करते हैं। जातक प्रायः दीर्घकालिक रोग से इसी दशा में स्वस्थ होता है — विशेषकर सूर्य-मंगल और सूर्य-गुरु उप-कालों में। सर्वाधिक गहरा उपहार आन्तरिक है: जातक केवल स्वयं के लिए नहीं, समूह के लिए निर्णय लेने की क्षमता विकसित करता है, और पाता है कि यह क्षमता पूर्व दशा में शान्त रूप से परिपक्व हो रही थी। छह वर्ष कम हैं, परन्तु बलवान स्थितियों में वे उत्पादक, सार्वजनिक, और स्मरणीय होते हैं।`,
  },

  afflictedEffects: {
    en: `When the Sun is afflicted — debilitated in Libra, combust under direct conjunction with another planet within fifteen degrees, in dusthanas (6, 8, 12) without redemption, conjunct enemy planets (Saturn, Venus, Rahu) — the six years can run as ego friction. Conflict with the father, with bosses, with the government, with regulatory bodies. Loss of public reputation through a misstep that becomes visible. Health complaints involving heart, eyes, blood pressure, or immune weakness. The native may discover that the public role they pursued for years was the wrong fit and resign or be removed. None of this is metaphysical punishment — it is the Sun\'s structural insistence that the native\'s outer position match their inner truth. When the two have diverged, the dasha forces a corrective. The recovery is usually quick because the dasha is short; by year four or five, most natives have re-positioned around their actual strengths. The dasha\'s gift in afflicted charts is humility — the recognition that authority taken without dharmic foundation is borrowed and gets called back.`,
    hi: `जब सूर्य पीड़ित हों — तुला में नीच के, पन्द्रह अंश के भीतर अन्य ग्रह से युक्त होकर अस्त, दुस्थान (6, 8, 12) में बिना उद्धार के, शत्रु ग्रहों (शनि, शुक्र, राहु) से युक्त — तब छह वर्ष अहंकार-संघर्ष के रूप में चल सकते हैं। पिता से, अधिकारियों से, शासन से, नियामक निकायों से टकराव। ऐसी ग़लती से सार्वजनिक प्रतिष्ठा-हानि जो दृश्य हो जाए। हृदय, नेत्र, रक्तचाप, अथवा प्रतिरक्षा-दुर्बलता विषयक स्वास्थ्य समस्याएँ। जातक यह पा सकता है कि वह जिस सार्वजनिक भूमिका का वर्षों से पीछा कर रहा था वह उपयुक्त नहीं थी और त्यागपत्र दे अथवा हटाया जाए। यह आध्यात्मिक दण्ड नहीं — यह सूर्य का संरचनात्मक आग्रह है कि जातक का बाह्य पद उसके आन्तरिक सत्य से मेल खाए। जब दोनों अलग हो जाते हैं, दशा सुधार-कार्य करवाती है। पुनर्संरचना प्रायः शीघ्र हो जाती है क्योंकि दशा छोटी है; चौथे-पाँचवें वर्ष तक अधिकांश जातक अपनी वास्तविक शक्तियों के चारों ओर पुनर्स्थापित हो जाते हैं। पीड़ित कुण्डलियों में दशा का उपहार है विनम्रता — यह बोध कि बिना धार्मिक आधार लिया गया अधिकार उधार है और वापस माँगा जाता है।`,
  },

  houseEffects: [
    { house: 1, effect: { en: 'Strong placement (lagna). Personal authority increases. Health robust. Direct, sometimes blunt, communication. Suits leadership, political, and command roles.', hi: 'बलवान स्थिति (लग्न)। व्यक्तिगत अधिकार बढ़ता है। स्वास्थ्य सुदृढ़। प्रत्यक्ष, कभी-कभी कठोर, सम्वाद। नेतृत्व, राजनीति, एवं आदेश-भूमिकाओं के अनुकूल।' } },
    { house: 2, effect: { en: 'Mixed placement. Family authority and inheritance from father; eye and dental issues possible. Speech becomes commanding but can offend.', hi: 'मिश्रित स्थिति। पैतृक सत्ता एवं उत्तराधिकार; नेत्र एवं दन्त समस्याएँ सम्भव। वाणी आज्ञापक होती है किन्तु अप्रिय हो सकती है।' } },
    { house: 3, effect: { en: 'Excellent placement. Strong courage, public communication, sibling support. Suits journalism, broadcasting, athletics, military.', hi: 'उत्तम स्थिति। प्रबल साहस, सार्वजनिक सम्वाद, भाई-बहन का सहयोग। पत्रकारिता, प्रसारण, खेल, सेना के अनुकूल।' } },
    { house: 4, effect: { en: 'Difficult placement. Father\'s health concerns, residence change, mother\'s emotional distance possible. Heart, lung sensitivity. Best for soldiers and civic builders.', hi: 'कठिन स्थिति। पिता का स्वास्थ्य, निवास परिवर्तन, माता से भावनात्मक दूरी सम्भव। हृदय, फुफ्फुस संवेदनशीलता। सैनिक एवं नागरिक-निर्माता के लिए श्रेष्ठ।' } },
    { house: 5, effect: { en: 'Strong placement. Authority through display of expertise, recognition for creative work, child-related joy if children are mature. Speculation gains.', hi: 'बलवान स्थिति। विशेषज्ञता प्रदर्शन से अधिकार, रचनात्मक कार्य की मान्यता, परिपक्व सन्तानों से सुख। सट्टे में लाभ।' } },
    { house: 6, effect: { en: 'Strong placement. Defeats enemies, wins court cases, succeeds in service, healthcare, security work. Chronic disease management improves.', hi: 'बलवान स्थिति। शत्रु पराजित, मुकदमे विजय, सेवा, स्वास्थ्य-सेवा, सुरक्षा कार्य में सफलता। दीर्घकालिक रोग प्रबन्धन सुधरता है।' } },
    { house: 7, effect: { en: 'Difficult for marriage. Spouse may have authoritative or distant manner; ego clashes. Better for diplomatic, judicial, or partnership-litigation roles.', hi: 'विवाह के लिए कठिन। जीवनसाथी आज्ञापक अथवा दूर का स्वभाव; अहंकार-टकराव। राजनयिक, न्यायिक, अथवा साझेदारी-मुकदमा भूमिकाओं के लिए श्रेष्ठ।' } },
    { house: 8, effect: { en: 'Difficult house. Father\'s longevity concern, hidden authority struggles, surgery possible. Suits researchers, occult students, healers.', hi: 'कठिन भाव। पिता की आयु-चिन्ता, गुप्त अधिकार-संघर्ष, शल्य चिकित्सा सम्भव। अनुसन्धाता, तान्त्रिक छात्र, चिकित्सकों के अनुकूल।' } },
    { house: 9, effect: { en: 'Excellent placement. Strong father, religious authority, foreign honours, dharmic teaching role. Career as judge, professor, religious leader takes shape.', hi: 'उत्तम स्थिति। प्रबल पिता, धार्मिक अधिकार, विदेशी सम्मान, धार्मिक शिक्षण भूमिका। न्यायाधीश, प्राध्यापक, धार्मिक नेता के रूप में करियर।' } },
    { house: 10, effect: { en: 'Strongest placement (digbala). Career rises to maximum public visibility — political office, top corporate role, government appointment, media leadership.', hi: 'सर्वाधिक बलवान स्थिति (दिग्बल)। करियर अधिकतम सार्वजनिक दृश्यता तक उठता है — राजनीतिक पद, शीर्ष कॉर्पोरेट भूमिका, शासकीय नियुक्ति, मीडिया नेतृत्व।' } },
    { house: 11, effect: { en: 'Strong placement. Income from authority work, network of senior figures, recognition by elder mentors. Steady but commanding gains.', hi: 'बलवान स्थिति। अधिकार-कार्य से आय, वरिष्ठ व्यक्तियों का नेटवर्क, वरिष्ठ मार्गदर्शकों से मान्यता। स्थिर किन्तु प्रामाणिक लाभ।' } },
    { house: 12, effect: { en: 'Mixed. Foreign appointment for government work, hospital or institutional service, retreat to ashram. Sleep can be disturbed; eye care needed.', hi: 'मिश्रित। शासकीय कार्य हेतु विदेशी नियुक्ति, अस्पताल अथवा संस्थागत सेवा, आश्रम-एकान्त। निद्रा बाधित हो सकती है; नेत्र देखभाल आवश्यक।' } },
  ],

  antardashas: [
    {
      subRuler: 'Surya',
      label: { en: 'Surya–Surya Antardasha', hi: 'सूर्य-सूर्य अन्तर्दशा' },
      duration: { en: 'About 3 months 18 days', hi: 'लगभग 3 माह 18 दिन' },
      effect: {
        en: `The opening sub-period is short but decisive. Most natives report a swift event — a promotion, a public recognition, a paternal interaction, or conversely a confrontation with authority — within the first hundred days. The Sun shows what the dasha will deliver almost immediately. Make important career announcements early; the energy supports them. Avoid open confrontation with bosses or the father in this window if Sun is afflicted.`,
        hi: `प्रारम्भिक उप-काल लघु किन्तु निर्णायक है। अधिकांश जातक प्रथम सौ दिनों में तीव्र घटना रिपोर्ट करते हैं — पदोन्नति, सार्वजनिक मान्यता, पैतृक सम्वाद, अथवा विपरीत रूप से अधिकार से टकराव। सूर्य लगभग तत्काल दिखाते हैं कि दशा क्या देगी। महत्त्वपूर्ण करियर घोषणाएँ शीघ्र करें; ऊर्जा उनका समर्थन करती है। यदि सूर्य पीड़ित हों तो इस खण्ड में अधिकारियों अथवा पिता से खुले टकराव से बचें।`,
      },
    },
    {
      subRuler: 'Chandra',
      label: { en: 'Surya–Chandra Antardasha', hi: 'सूर्य-चन्द्र अन्तर्दशा' },
      duration: { en: 'About 6 months 0 days', hi: 'लगभग 6 माह 0 दिन' },
      effect: {
        en: `Sun and Moon are friends and parental significators together. This sub-period brings family attention into focus — mother\'s health, family decisions, household reorganisation, possibly a residential move. Public-facing work is steady. Emotional life is more visible. A balanced six months that often sees an important family rite (marriage, naming ceremony, milestone) take place.`,
        hi: `सूर्य और चन्द्र मित्र हैं तथा साथ में मातृ-पितृ-कारक हैं। यह उप-काल पारिवारिक ध्यान को केन्द्र में लाता है — माता का स्वास्थ्य, पारिवारिक निर्णय, गृह-पुनर्संगठन, सम्भवतः निवास परिवर्तन। जन-समक्ष कार्य स्थिर। भावनात्मक जीवन अधिक दृश्य। सन्तुलित छह माह जिनमें प्रायः कोई प्रमुख पारिवारिक संस्कार (विवाह, नामकरण, मील-पत्थर) सम्पन्न होता है।`,
      },
    },
    {
      subRuler: 'Mangal',
      label: { en: 'Surya–Mangal Antardasha', hi: 'सूर्य-मंगल अन्तर्दशा' },
      duration: { en: 'About 4 months 6 days', hi: 'लगभग 4 माह 6 दिन' },
      effect: {
        en: `Sun and Mars are friends; the combination is decisive, action-oriented, and brief. Property, real estate, sports, military matters, and surgical interventions all align with this window. Conflicts that needed to be ended get ended — sometimes sharply. Younger brothers and male colleagues figure prominently. Watch blood pressure and avoid surgery without muhurta if Mars is afflicted.`,
        hi: `सूर्य और मंगल मित्र हैं; संयोजन निर्णायक, कर्म-केन्द्रित, और संक्षिप्त। सम्पत्ति, अचल सम्पत्ति, खेल, सैन्य विषय, एवं शल्य चिकित्सा हस्तक्षेप — सब इस खण्ड से मेल खाते हैं। जिन विवादों को समाप्त होना था वे होते हैं — कभी-कभी तीक्ष्ण रूप से। छोटे भाई एवं पुरुष सहकर्मी प्रमुख रूप से उभरते हैं। रक्तचाप पर निगरानी; पीड़ित मंगल हो तो बिना मुहूर्त के शल्य चिकित्सा से बचें।`,
      },
    },
    {
      subRuler: 'Rahu',
      label: { en: 'Surya–Rahu Antardasha', hi: 'सूर्य-राहु अन्तर्दशा' },
      duration: { en: 'About 10 months 24 days', hi: 'लगभग 10 माह 24 दिन' },
      effect: {
        en: `The dasha\'s most volatile sub-period. Sun and Rahu are mythological enemies — Rahu eclipses Sun. Authority-related crises surface: confrontation with bosses, government inquiries, regulatory action, reputation attacks on social media, conflict with father. The native\'s ego is tested in public. Health complaints involve eyes, heart, blood, or unexplained fevers. The window is workable if approached with restraint; it is genuinely dangerous if approached with confrontation. Defer all public escalation by ten months; the next sub-period will be better.`,
        hi: `दशा का सर्वाधिक अस्थिर उप-काल। पौराणिक रूप से सूर्य और राहु शत्रु — राहु सूर्य को ग्रसते हैं। अधिकार-सम्बन्धी संकट उभरते हैं: अधिकारियों से टकराव, शासकीय जाँच, नियामक कार्रवाई, सोशल मीडिया पर प्रतिष्ठा-आक्रमण, पिता से विवाद। जातक का अहंकार सार्वजनिक रूप से परखा जाता है। स्वास्थ्य समस्याएँ — नेत्र, हृदय, रक्त, अथवा अव्याख्यायित ज्वर। यदि संयम से सम्पर्क किया जाए तो खण्ड सध्य; टकराव से सम्पर्क किया जाए तो वस्तुतः ख़तरनाक। समस्त सार्वजनिक उत्तेजना दस माह स्थगित करें; अगला उप-काल बेहतर होगा।`,
      },
    },
    {
      subRuler: 'Guru',
      label: { en: 'Surya–Guru Antardasha', hi: 'सूर्य-गुरु अन्तर्दशा' },
      duration: { en: 'About 9 months 18 days', hi: 'लगभग 9 माह 18 दिन' },
      effect: {
        en: `Sun and Jupiter are friends; this is the dasha\'s most dharmic and respected sub-period. Promotion to a senior public role, religious recognition, scholarly honour, a teaching appointment, a child\'s milestone, or a family religious event. The native\'s public voice acquires gravitas. Charity and donation work are particularly effective in this window. Many natives report this as the dasha\'s most personally meaningful chapter despite its short duration.`,
        hi: `सूर्य और गुरु मित्र हैं; यह दशा का सर्वाधिक धार्मिक एवं सम्मानित उप-काल है। वरिष्ठ सार्वजनिक भूमिका पर पदोन्नति, धार्मिक मान्यता, विद्वत्ता का सम्मान, अध्यापन-नियुक्ति, सन्तान का मील-पत्थर, अथवा पारिवारिक धार्मिक आयोजन। जातक का सार्वजनिक स्वर गाम्भीर्य प्राप्त करता है। दान-धर्म कार्य इस खण्ड में विशेष प्रभावी। अनेक जातक इसे — संक्षिप्त अवधि के बावजूद — दशा का सर्वाधिक व्यक्तिगत रूप से अर्थपूर्ण अध्याय मानते हैं।`,
      },
    },
    {
      subRuler: 'Shani',
      label: { en: 'Surya–Shani Antardasha', hi: 'सूर्य-शनि अन्तर्दशा' },
      duration: { en: 'About 11 months 12 days', hi: 'लगभग 11 माह 12 दिन' },
      effect: {
        en: `Sun and Saturn are sworn enemies — father and son in mythology. The longest difficult sub-period of the dasha. Conflict with father, with bosses, with the government, with senior figures. Slow promotions or open demotions. Reputation attacks. Health-wise, blood pressure, eye strain, joint complaints. The remedy is restraint and service: avoid public confrontation, donate consistently to the elderly and the marginalised, recite the Aditya Hridaya Stotra daily. By the end of the eleven months a new equilibrium is usually in place — often involving a quiet exit from one role and a quiet entry into another.`,
        hi: `सूर्य और शनि कट्टर शत्रु हैं — पौराणिक रूप से पिता और पुत्र। दशा का सबसे लम्बा कठिन उप-काल। पिता से, अधिकारियों से, शासन से, वरिष्ठ व्यक्तियों से टकराव। धीमी पदोन्नतियाँ अथवा खुली पदावनतियाँ। प्रतिष्ठा-आक्रमण। स्वास्थ्य की दृष्टि से रक्तचाप, नेत्र-तनाव, सन्धि समस्याएँ। उपाय हैं — संयम एवं सेवा: सार्वजनिक टकराव से बचें, वृद्धजनों एवं उपेक्षितों को निरन्तर दान, दैनिक आदित्य हृदय स्तोत्र पाठ। ग्यारह माह के अन्त तक प्रायः नया संतुलन स्थापित होता है — प्रायः एक भूमिका से शान्त प्रस्थान एवं दूसरी में शान्त प्रवेश के साथ।`,
      },
    },
    {
      subRuler: 'Budh',
      label: { en: 'Surya–Budh Antardasha', hi: 'सूर्य-बुध अन्तर्दशा' },
      duration: { en: 'About 10 months 6 days', hi: 'लगभग 10 माह 6 दिन' },
      effect: {
        en: `Sun and Mercury are neutrals but often placed together in the natal chart (Mercury never moves more than 28° from Sun). The combination produces visible communication, public writing, broadcasting, government documentation, official announcements, and speech. Education-related decisions, exam results, and academic appointments come to a head. Business with government bodies is favourable. The risk is impulsive public statements; pause before signing or announcing.`,
        hi: `सूर्य और बुध तटस्थ हैं किन्तु जन्म-कुण्डली में प्रायः साथ स्थित (बुध सूर्य से 28° से अधिक कभी नहीं हटते)। संयोजन दृश्य सम्वाद, सार्वजनिक लेखन, प्रसारण, शासकीय प्रलेखन, आधिकारिक घोषणाएँ, और वाणी देता है। शिक्षा-सम्बन्धी निर्णय, परीक्षा परिणाम, और शैक्षणिक नियुक्तियाँ सिरे चढ़ती हैं। शासकीय निकायों से व्यवसाय अनुकूल। जोखिम है आवेगपूर्ण सार्वजनिक वक्तव्य; हस्ताक्षर अथवा घोषणा से पूर्व रुकें।`,
      },
    },
    {
      subRuler: 'Ketu',
      label: { en: 'Surya–Ketu Antardasha', hi: 'सूर्य-केतु अन्तर्दशा' },
      duration: { en: 'About 4 months 6 days', hi: 'लगभग 4 माह 6 दिन' },
      effect: {
        en: `Short and abrupt. Ketu under Sun produces sudden withdrawal from a public role, a brief health flare (fever, eye complaint, scorpion-like irritation of the skin or scalp), or an unplanned spiritual retreat. Many natives describe this as a four-month "audit" — what was being kept up out of habit gets dropped, what mattered remains. It is rarely the dasha\'s worst chapter; it is usually its most clarifying.`,
        hi: `लघु एवं तीव्र। सूर्य के अधीन केतु अकस्मात् सार्वजनिक भूमिका से विरक्ति, संक्षिप्त स्वास्थ्य उभार (ज्वर, नेत्र समस्या, त्वचा अथवा मस्तक की वृश्चिक-सदृश जलन), अथवा अनियोजित आध्यात्मिक एकान्त देते हैं। अनेक जातक इसे चार-मासी "लेखा-परीक्षा" कहते हैं — जो आदत-वश बना हुआ था वह छूटता है, जो महत्त्वपूर्ण था वह रहता है। यह विरले ही दशा का सबसे बुरा अध्याय; प्रायः सर्वाधिक स्पष्ट करने वाला।`,
      },
    },
    {
      subRuler: 'Shukra',
      label: { en: 'Surya–Shukra Antardasha', hi: 'सूर्य-शुक्र अन्तर्दशा' },
      duration: { en: 'About 1 year 0 months 0 days', hi: 'लगभग 1 वर्ष 0 माह 0 दिन' },
      effect: {
        en: `The closing sub-period and the longest within Sun\'s six years. Sun and Venus are enemies in classical Naisargika Maitri but the antardasha is workable: marriage if delayed, vehicle and property purchases linked to the senior career role established earlier in the dasha, recognition in arts or aesthetics. The risk is that Venus under Sun may produce a relationship outside the marriage that the native treats lightly; this is the dasha\'s ethical hazard. End the dasha clean — the next mahadasha (Moon) follows immediately, and Moon dasha will magnify any unfinished emotional residue.`,
        hi: `अन्तिम उप-काल तथा सूर्य के छह वर्षों का सबसे लम्बा। नैसर्गिक मैत्री में सूर्य और शुक्र शत्रु हैं किन्तु अन्तर्दशा सध्य है: यदि विलम्बित हो तो विवाह, दशा में पूर्व स्थापित वरिष्ठ करियर भूमिका से जुड़े वाहन एवं सम्पत्ति क्रय, कला अथवा सौन्दर्य में मान्यता। जोखिम यह है कि सूर्य के अधीन शुक्र विवाह के बाहर ऐसा सम्बन्ध उत्पन्न कर सकते हैं जिसे जातक हलके में लेता है; यह दशा का नैतिक संकट है। दशा को स्वच्छ समाप्त करें — अगली महादशा (चन्द्र) तत्काल अनुसरण करती है, और चन्द्र दशा अधूरे भावनात्मक अवशेष को बहुगुणित करेगी।`,
      },
    },
  ],

  remedies: [
    {
      title: { en: 'Mantra Recitation', hi: 'मन्त्र जप' },
      body: {
        en: `The Aditya Hridaya Stotra — taught by Sage Agastya to Rama before the battle with Ravana, recorded in the Yuddha Kanda of the Valmiki Ramayana — is the single most powerful Sun mantra in the Indian tradition. Recited at sunrise facing east, with water offered to the rising Sun (arghya), the practice generates the dasha\'s clearest results. Lay alternatives are the Surya Beej Mantra (Om Hraam Hreem Hraum Sah Suryaya Namah, 7,000 recitations across 40 days), the Gayatri Mantra (108 recitations daily), and the Surya Ashtottara Shatanama. Copper rosary (tamra mala) is preferred. Recitation is most effective at sunrise; avoid during eclipse periods.`,
        hi: `आदित्य हृदय स्तोत्र — रावण से युद्ध से पूर्व अगस्त्य ऋषि ने राम को सिखाया, वाल्मीकि रामायण के युद्ध काण्ड में अंकित — भारतीय परम्परा का सर्वाधिक शक्तिशाली सूर्य मन्त्र है। पूर्वाभिमुख सूर्योदय पर पाठ, उगते सूर्य को अर्घ्य के साथ — यह अभ्यास दशा के सबसे स्पष्ट फल देता है। जन-विधियाँ हैं — सूर्य बीज मन्त्र (ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः, चालीस दिनों में 7,000 जप), गायत्री मन्त्र (दैनिक 108 जप), और सूर्य अष्टोत्तर शतनाम। ताम्र माला श्रेष्ठ। जप सूर्योदय पर सर्वाधिक प्रभावी; ग्रहण-काल में टालें।`,
      },
    },
    {
      title: { en: 'Ruby (Manik)', hi: 'माणिक्य' },
      body: {
        en: `Ruby is the Sun\'s gem and one of the more potent Jyotish stones. Strong but not as volatile as Neelam — Ruby tends to be either clearly compatible or noticeably uncomfortable within the first week. Five carats minimum, set in gold (panchdhatu acceptable), ring finger of the right hand, energised on a Sunday at sunrise with the Surya beej mantra. Do not pair Ruby with Pearl (Sun-Moon eclipse pattern), Diamond (Sun-Venus enmity), or Blue Sapphire. If Ruby is too intense, Garnet or Red Spinel are softer alternatives. Always trial three nights under the pillow before fixing.`,
        hi: `माणिक्य सूर्य का रत्न है और अधिक शक्तिशाली ज्योतिष रत्नों में से। सुदृढ़ किन्तु नीलम जितना अस्थिर नहीं — माणिक्य प्रायः प्रथम सप्ताह में या तो स्पष्ट रूप से अनुकूल अथवा स्पष्ट रूप से असुविधाजनक सिद्ध हो जाता है। न्यूनतम पाँच रत्ती, स्वर्ण में (पंचधातु स्वीकार्य), दाहिने हाथ की अनामिका, रविवार को सूर्योदय पर सूर्य बीज मन्त्र से अभिमन्त्रित। माणिक्य के साथ मोती (सूर्य-चन्द्र ग्रहण-स्वरूप), हीरा (सूर्य-शुक्र शत्रुता), अथवा नीलम न पहनें। यदि माणिक्य बहुत तीव्र हो तो गारनेट अथवा रेड स्पिनेल कोमल विकल्प हैं। जड़वाने से पूर्व तीन रात्रि तकिए के नीचे परीक्षण अनिवार्य।`,
      },
    },
    {
      title: { en: 'Daana (Donation)', hi: 'दान' },
      body: {
        en: `Sun rules father, authority, and those in positions of dignity. Donation in Surya\'s name reaches retired military and civil servants, elderly brahmins, classical musicians and dancers, and government schools. Wheat, jaggery, copper utensils, red flowers, and sponsorship of saplings or fire-rituals (havan) are classical Sun daana. Sunday at dawn is the prescribed time. The deeper Sun daana, however, is dharmic — paying honour where it is structurally owed: financial support to one\'s own father if needed, formal acknowledgement of a teacher who shaped one\'s career, public recognition of those whose work enabled one\'s own. The Sun rewards transparent attribution far more than anonymous charity.`,
        hi: `सूर्य पिता, अधिकार, और गरिमा-पदस्थ व्यक्तियों पर शासन करते हैं। सूर्य के नाम पर दान सेवानिवृत्त सैनिक एवं सिविल सेवकों, वृद्ध ब्राह्मणों, शास्त्रीय संगीतज्ञों एवं नर्तकों, और शासकीय विद्यालयों तक पहुँचना चाहिए। गेहूँ, गुड़, ताम्र पात्र, लाल पुष्प, और पौधरोपण अथवा हवन का प्रायोजन शास्त्रीय सूर्य-दान हैं। रविवार उषाकाल विहित समय। तथापि, गहरा सूर्य-दान धार्मिक है — जहाँ संरचनात्मक रूप से सम्मान देना है वहाँ देना: यदि आवश्यक हो तो स्वयं के पिता को आर्थिक सहयोग, करियर बनाने वाले गुरु की औपचारिक स्वीकृति, अपने कार्य को सम्भव बनाने वालों की सार्वजनिक पहचान। सूर्य पारदर्शी आरोपण को अनाम दान से कहीं अधिक पुरस्कृत करते हैं।`,
      },
    },
    {
      title: { en: 'Vrata (Observance)', hi: 'व्रत' },
      body: {
        en: `The Ravivar Vrat (Sunday fast) is the standard Sun observance: a sunrise-to-sunset fast on Sundays, breaking with cooked food after offering arghya at sunset. The fast is typically taken twelve consecutive Sundays for a full benefit cycle. Ratha Saptami — the seventh lunar day of Magha\'s waxing fortnight, considered the Sun\'s birthday in many traditions — is the year\'s most auspicious Sun day; bathe at sunrise with seven ekka leaves on the head, recite the Aditya Hridaya, donate copper or wheat. Pilgrimage to a Surya temple (Konark, Modhera, Surya Pahar in Assam, Suryanar Kovil in Tamil Nadu) once during the dasha is classically meritorious.`,
        hi: `रविवार व्रत मानक सूर्य अनुष्ठान है: रविवार को सूर्योदय से सूर्यास्त तक उपवास, सायंकाल अर्घ्य के पश्चात् पका भोजन। व्रत प्रायः बारह क्रमिक रविवारों को पूर्ण लाभ-चक्र हेतु लिया जाता है। रथ सप्तमी — माघ शुक्ल पक्ष की सप्तमी, अनेक परम्पराओं में सूर्य का जन्मदिन — वर्ष का सर्वाधिक शुभ सूर्य-दिवस; सूर्योदय पर सिर पर सात एक्का पत्ते रख कर स्नान, आदित्य हृदय का पाठ, ताम्र अथवा गेहूँ का दान। दशा के दौरान एक बार सूर्य मन्दिर (कोणार्क, मोढ़ेरा, असम के सूर्य पहाड़, तमिलनाडु के सूर्यनार कोविल) की तीर्थयात्रा शास्त्रीय रूप से पुण्यप्रद।`,
      },
    },
    {
      title: { en: 'Lifestyle Adjustments', hi: 'जीवन-शैली समायोजन' },
      body: {
        en: `The Sun\'s dasha rewards solar living: rise before sunrise, sit in early morning sunlight for fifteen minutes, eat the largest meal at noon when the Sun is strongest, sleep before ten. Avoid working into late nights — Sun\'s authority is undermined by inverted sleep cycles. Maintain physical posture; the Sun rules the spine. Practise Surya Namaskar (twelve rounds) daily through the dasha. Reduce sour, fermented, and overly spicy foods which inflame the Pitta dosha that Sun amplifies. Heart and eye check-ups annually. The deepest lifestyle adjustment is decisional: stop seeking validation from authority figures and start exercising it within your own remit. Sun\'s dasha asks the native to become the authority, not to circle it.`,
        hi: `सूर्य की दशा सौर जीवन को पुरस्कृत करती है: सूर्योदय से पूर्व उठें, प्रातःकाल पन्द्रह मिनट सूर्य-आलोक में बैठें, मध्याह्न में सर्वाधिक भोजन लें जब सूर्य प्रबल हों, दस बजे से पूर्व सोएँ। देर रात तक कार्य न करें — विपरीत निद्रा-चक्र सूर्य के अधिकार को कमज़ोर करते हैं। शारीरिक मुद्रा बनाये रखें; सूर्य मेरुदण्ड पर शासन करते हैं। दशा भर दैनिक सूर्य नमस्कार (बारह आवृत्तियाँ) करें। खट्टे, किण्वित, और अति-मसालेदार भोजन कम करें — ये पित्त दोष को बढ़ाते हैं जिसे सूर्य प्रवर्धित करते हैं। हृदय एवं नेत्र की वार्षिक जाँच। गहरा जीवन-शैली समायोजन निर्णयात्मक है: अधिकारी व्यक्तियों से अनुमोदन माँगना बन्द करें और अपने अधिकार-क्षेत्र में स्वयं उसका प्रयोग करें। सूर्य की दशा जातक से माँग करती है कि वह अधिकार बने, उसके चारों ओर परिक्रमा न करे।`,
      },
    },
  ],

  casePatterns: {
    en: `Two Surya Mahadasha patterns recur across the consulting case files our editorial team reviews. The first is the leadership ascent — typically between thirty and fifty — where the native steps from being a senior contributor to being the formal head of a unit, division, family business, or institution. The decision pattern is consistent: in the first year of the dasha, an authority gap opens (a senior leaves, a parent steps back, a team needs a head); the native takes the role despite hesitation; by year three the role has become defining. The second is the father chapter — paternal health concerns, end-of-life caregiving, inheritance disputes, or in some charts the unexpected discovery of a paternal relative or heritage. Both patterns ask the native to become an authority rather than rely on one. The configurations that determine which pattern dominates are: tenth lord and tenth house occupants for the leadership pattern, ninth lord and natal Sun house for the father pattern. Read both before predicting.`,
    hi: `सम्पादकीय समीक्षा की केस-फाइलों में दो सूर्य महादशा स्वरूप पुनरावृत्त होते हैं। पहला नेतृत्व उत्कर्ष — प्रायः तीस से पचास के बीच — जहाँ जातक वरिष्ठ योगदानकर्ता से किसी इकाई, विभाग, पारिवारिक व्यवसाय, अथवा संस्था का औपचारिक प्रमुख बनता है। निर्णय-स्वरूप सुसंगत है: दशा के प्रथम वर्ष में अधिकार-रिक्तता खुलती है (वरिष्ठ चला जाता है, माता-पिता पीछे हटते हैं, टीम को नेता चाहिए); जातक हिचकिचाहट के बावजूद भूमिका लेता है; तृतीय वर्ष तक भूमिका परिभाषक बन जाती है। दूसरा पिता-अध्याय — पैतृक स्वास्थ्य-चिन्ता, जीवन-अन्त की देखभाल, उत्तराधिकार-विवाद, अथवा कुछ कुण्डलियों में पैतृक स्वजन अथवा विरासत की अप्रत्याशित खोज। दोनों स्वरूप जातक से माँग करते हैं कि वह स्वयं अधिकार बने, उस पर निर्भर न रहे। कौन-सा स्वरूप प्रभावी होगा यह निर्धारित करने वाली स्थितियाँ हैं: नेतृत्व स्वरूप के लिए दशमेश और दशम भाव में स्थित ग्रह; पिता स्वरूप के लिए नवमेश और जन्म-सूर्य का भाव। भविष्यवाणी से पूर्व दोनों पढ़ें।`,
  },

  faqs: [
    {
      question: { en: 'Is Surya Mahadasha good or bad?', hi: 'सूर्य महादशा शुभ है या अशुभ?' },
      answer: {
        en: `Six years under Surya are decisive rather than uniformly good or bad. Strong Sun delivers career rise, public recognition, and authoritative voice. Afflicted Sun produces ego clashes, conflict with father or boss, and reputation strain. The dasha\'s short length means consequences materialise quickly — both gains and corrections happen within months rather than years. Read your natal Sun\'s house, sign, and aspects (especially from Saturn or Rahu) before forming a view.`,
        hi: `सूर्य के अधीन छह वर्ष समान रूप से शुभ अथवा अशुभ के बजाय निर्णायक होते हैं। बलवान सूर्य करियर उत्थान, सार्वजनिक मान्यता, और प्रामाणिक स्वर देते हैं। पीड़ित सूर्य अहंकार-टकराव, पिता अथवा अधिकारी से विवाद, और प्रतिष्ठा-तनाव उत्पन्न करते हैं। दशा की संक्षिप्त अवधि का अर्थ है कि परिणाम शीघ्र मूर्त होते हैं — लाभ एवं सुधार दोनों वर्षों के बजाय मासों में घटित होते हैं। दृष्टि बनाने से पूर्व जन्म-कुण्डली में सूर्य का भाव, राशि, और दृष्टियाँ (विशेषकर शनि अथवा राहु से) देखें।`,
      },
    },
    {
      question: { en: 'How long is Surya Mahadasha?', hi: 'सूर्य महादशा कितने वर्ष की होती है?' },
      answer: {
        en: `Six calendar years (about 2,191 days) — the shortest of the seven planetary mahadashas in the Vimshottari cycle (only the two nodes Ketu and Rahu run the cycle\'s shortest periods of 7 and 18 years respectively). Within these six years there are nine antardashas, ranging from Surya–Surya (about 3 months 18 days) up to Surya–Venus (a full year).`,
        hi: `छह कलैंडर वर्ष (लगभग 2,191 दिन) — विंशोत्तरी चक्र की सात ग्रह-महादशाओं में सबसे छोटी (केवल दो पात केतु और राहु चक्र के क्रमशः 7 और 18 वर्ष चलाते हैं)। इन छह वर्षों में नौ अन्तर्दशाएँ हैं, जो सूर्य-सूर्य (लगभग 3 माह 18 दिन) से लेकर सूर्य-शुक्र (पूरे एक वर्ष) तक हैं।`,
      },
    },
    {
      question: { en: 'What career suits Surya Mahadasha?', hi: 'सूर्य महादशा के लिए कौन-से व्यवसाय अनुकूल हैं?' },
      answer: {
        en: `Government service (especially senior administrative or judicial roles), defence and police, medicine and surgery, public administration, civil engineering, leadership in any institution, classical music and dance (the Sun rules the throat for classical singers), film direction, politics, and dharmic teaching all flourish. The common thread is roles where one is visibly accountable for the work of others. Behind-the-scenes work or low-visibility roles tend to under-deliver during this dasha — the Sun pushes the native toward the public-facing version of their craft.`,
        hi: `शासकीय सेवा (विशेषकर वरिष्ठ प्रशासनिक अथवा न्यायिक भूमिकाएँ), रक्षा एवं पुलिस, चिकित्सा एवं शल्य-चिकित्सा, जन-प्रशासन, सिविल इंजीनियरिंग, किसी भी संस्था का नेतृत्व, शास्त्रीय संगीत एवं नृत्य (शास्त्रीय गायकों के लिए सूर्य कण्ठ पर शासन करते हैं), फ़िल्म निर्देशन, राजनीति, और धार्मिक शिक्षण — सब फलते हैं। सामान्य धागा है — ऐसी भूमिकाएँ जहाँ जातक दूसरों के कार्य के लिए दृश्य रूप से उत्तरदायी हो। पर्दे के पीछे का कार्य अथवा अल्प-दृश्यता वाली भूमिकाएँ इस दशा में कम-फलदायक होती हैं — सूर्य जातक को उसके कार्य के सार्वजनिक रूप की ओर धकेलते हैं।`,
      },
    },
    {
      question: { en: 'Does Surya Mahadasha affect the father?', hi: 'क्या सूर्य महादशा पिता को प्रभावित करती है?' },
      answer: {
        en: `Yes — the Sun is the karaka of father, and his dasha typically activates a paternal storyline. Possibilities include: the father\'s health surfacing as a concern, the resolution of a long-pending paternal property or honour matter, the father stepping back and the native stepping into a senior family role, conflicts with the father becoming visible, or in difficult charts the loss of the father. The pattern depends on natal Sun\'s house, the ninth house, and the ninth lord. Difficult Sun in dusthana with malefics flags health risk; well-placed Sun usually flags transitional caregiving rather than crisis.`,
        hi: `हाँ — सूर्य पिता-कारक हैं, और उनकी दशा प्रायः पैतृक कथा-सूत्र को सक्रिय करती है। सम्भावनाएँ हैं: पिता का स्वास्थ्य चिन्ता के रूप में उभरना, दीर्घ-लम्बित पैतृक सम्पत्ति अथवा सम्मान विषय का समाधान, पिता का पीछे हटना और जातक का वरिष्ठ पारिवारिक भूमिका में आना, पिता से टकरावों का दृश्य होना, अथवा कठिन कुण्डलियों में पिता की हानि। स्वरूप जन्म-सूर्य का भाव, नवम भाव, और नवमेश पर निर्भर। पाप ग्रहों के साथ दुस्थान में पीड़ित सूर्य स्वास्थ्य-जोखिम चिह्नित करते हैं; बलवान सूर्य प्रायः संक्रमणकालीन देखभाल को चिह्नित करते हैं, संकट को नहीं।`,
      },
    },
    {
      question: { en: 'How to remedy a weak Sun in this dasha?', hi: 'इस दशा में निर्बल सूर्य का उपाय क्या है?' },
      answer: {
        en: `Six layered remedies: (1) Daily Aditya Hridaya Stotra at sunrise with arghya offering — the single most reliable remedy; (2) Twelve consecutive Sunday fasts; (3) Donation of wheat, jaggery, copper, or sponsorship of saplings on Sundays; (4) Public recognition of one\'s teachers and elders — formal acknowledgement, not anonymous charity; (5) Daily twelve rounds of Surya Namaskar with sun-facing posture; (6) Ruby or Garnet only after a competent jyotishi has read your full chart. The first remedy alone, sustained for the full six years, transforms the dasha\'s difficulty into the dasha\'s structural lesson.`,
        hi: `छह स्तरित उपाय: (1) सूर्योदय पर अर्घ्य सहित दैनिक आदित्य हृदय स्तोत्र — एकमात्र सर्वाधिक विश्वसनीय उपाय; (2) बारह क्रमिक रविवार व्रत; (3) रविवार को गेहूँ, गुड़, ताम्र, अथवा पौधरोपण का प्रायोजन; (4) अपने शिक्षकों एवं वरिष्ठजनों की सार्वजनिक स्वीकृति — औपचारिक पहचान, अनाम दान नहीं; (5) सूर्याभिमुख मुद्रा में दैनिक बारह सूर्य नमस्कार; (6) माणिक्य अथवा गारनेट केवल किसी सक्षम ज्योतिषी द्वारा आपकी पूर्ण कुण्डली पढ़ने के पश्चात्। पूरे छह वर्ष निरन्तर निभाया गया प्रथम उपाय अकेले ही दशा की कठिनाई को दशा के संरचनात्मक पाठ में परिवर्तित कर देता है।`,
      },
    },
    {
      question: { en: 'Does Surya Mahadasha give government job?', hi: 'क्या सूर्य महादशा शासकीय नौकरी देती है?' },
      answer: {
        en: `Among the seven planetary dashas, Surya Mahadasha has the strongest correlation with government service, especially when the natal Sun is well-placed in the tenth house, when the tenth lord is Sun or aspects Sun, or when the Sun rules an angular house. Government appointments, civil service exam clearances, judicial postings, defence promotions, and PSU senior roles often fall in Surya–Sun, Surya–Mars, Surya–Jupiter, or Surya–Mercury sub-periods. Use the Mahadasha Calculator to identify the precise sub-period most aligned with your government-service ambition.`,
        hi: `सात ग्रह-दशाओं में शासकीय सेवा से सूर्य महादशा का सर्वाधिक सम्बन्ध है — विशेषकर जब जन्म-सूर्य दशम भाव में बलवान हों, दशमेश सूर्य हों अथवा सूर्य पर दृष्टि करते हों, अथवा सूर्य किसी केन्द्र भाव के स्वामी हों। शासकीय नियुक्तियाँ, सिविल सेवा परीक्षा-सफलता, न्यायिक नियुक्तियाँ, रक्षा पदोन्नतियाँ, और सार्वजनिक उपक्रम की वरिष्ठ भूमिकाएँ प्रायः सूर्य-सूर्य, सूर्य-मंगल, सूर्य-गुरु, अथवा सूर्य-बुध उप-कालों में आती हैं। अपनी शासकीय-सेवा महत्त्वाकांक्षा से सर्वाधिक मेल खाने वाला सटीक उप-काल पहचानने के लिए महादशा कैलकुलेटर का उपयोग करें।`,
      },
    },
    {
      question: { en: 'Can Surya Mahadasha cause health issues?', hi: 'क्या सूर्य महादशा स्वास्थ्य समस्याएँ उत्पन्न कर सकती है?' },
      answer: {
        en: `Affected Sun in his own dasha can produce heart, eye, blood pressure, spine, and immune-system issues. The most common reported symptom is unexplained low energy or burnout — the Sun is the vitality karaka, and weak Sun in dasha tells the body to slow down. The remedy is morning sunlight exposure, regular sleep, Surya Namaskar, eye and heart annual screenings, and reducing the sour-spicy-fermented Pitta-aggravating foods. Most Sun-related health complaints respond well to lifestyle change; severe cases require medical evaluation in parallel with astrological remedy.`,
        hi: `अपनी ही दशा में पीड़ित सूर्य हृदय, नेत्र, रक्तचाप, मेरुदण्ड, और प्रतिरक्षा-तन्त्र समस्याएँ उत्पन्न कर सकते हैं। सर्वाधिक रिपोर्ट किया जाने वाला लक्षण है अव्याख्यायित निम्न ऊर्जा अथवा थकावट — सूर्य ओज-कारक हैं, और दशा में निर्बल सूर्य शरीर को धीमे होने का संकेत देते हैं। उपाय हैं — प्रातःकाल सूर्य-प्रकाश, नियमित निद्रा, सूर्य नमस्कार, नेत्र एवं हृदय की वार्षिक जाँच, और खट्टे-मसालेदार-किण्वित पित्त-वर्धक भोजन में कमी। अधिकांश सूर्य-सम्बन्धित स्वास्थ्य समस्याएँ जीवन-शैली परिवर्तन पर प्रतिक्रिया देती हैं; गम्भीर मामलों में ज्योतिष-उपाय के समानान्तर चिकित्सकीय मूल्यांकन आवश्यक।`,
      },
    },
    {
      question: { en: 'Is Surya Mahadasha good for marriage?', hi: 'क्या सूर्य महादशा विवाह के लिए शुभ है?' },
      answer: {
        en: `Mixed. The Sun is in the seventh house\'s natural enemy position — Sun rules ego and the seventh house is the house of partnership, so a strong Sun in the seventh causes ego clashes in marriage. Surya Mahadasha is not the most favourable dasha for marriage timing. If marriage is to occur, the Surya–Venus closing sub-period (one full year) is the most aligned window. For natives running this dasha while already married, the dasha tends to test the marriage by activating power dynamics. Read the natal seventh lord, Venus, and Moon\'s placement before predicting marital outcomes.`,
        hi: `मिश्रित। सप्तम भाव की प्राकृतिक शत्रु-स्थिति में सूर्य हैं — सूर्य अहंकार पर शासन करते हैं और सप्तम साझेदारी का भाव है, अतः सप्तम में बलवान सूर्य विवाह में अहंकार-टकराव उत्पन्न करते हैं। विवाह-समय के लिए सूर्य महादशा सर्वाधिक अनुकूल नहीं। यदि विवाह होना हो — अन्तिम सूर्य-शुक्र उप-काल (पूरा एक वर्ष) सर्वाधिक मेल खाने वाला खण्ड। पहले से विवाहित जातक — दशा शक्ति-गतिशीलता को सक्रिय करके विवाह की परीक्षा लेती है। वैवाहिक परिणाम की भविष्यवाणी से पूर्व जन्म-कुण्डली के सप्तमेश, शुक्र, और चन्द्र की स्थिति देखें।`,
      },
    },
  ],

  howToSteps: [
    {
      name: { en: 'Generate your dasha timeline', hi: 'अपनी दशा समय-रेखा बनाएँ' },
      text: {
        en: 'Enter your date, time, and place of birth into the Mahadasha Calculator. The full 120-year sequence will reveal exactly when your Surya Mahadasha begins, ends, and which antardashas you will run within those six years.',
        hi: 'महादशा कैलकुलेटर में अपनी जन्म तिथि, समय, और स्थान दर्ज करें। पूर्ण 120 वर्ष का क्रम दिखाएगा कि सूर्य महादशा कब आरम्भ होगी, कब समाप्त, और इन छह वर्षों में कौन-सी अन्तर्दशाएँ चलेंगी।',
      },
    },
    {
      name: { en: 'Locate Sun in your natal chart', hi: 'जन्म कुण्डली में सूर्य की स्थिति देखें' },
      text: {
        en: 'Find Sun\'s house, sign, conjunct planets, and aspects from Saturn or Rahu. Sun strong in own sign Leo, exalted in Aries, in the tenth or first, or aspecting the lagna delivers the dasha\'s textbook leadership potential. Sun debilitated, combust within 15° of another planet, or in dusthana requires active remedy.',
        hi: 'सूर्य का भाव, राशि, साथ के ग्रह, और शनि अथवा राहु से दृष्टि देखें। स्वराशि सिंह में बलवान, उच्च मेष में, दशम अथवा प्रथम भाव में, अथवा लग्न पर दृष्टि करते हुए सूर्य दशा की पाठ्य नेतृत्व-संभावना देते हैं। नीच, अन्य ग्रह से 15° भीतर अस्त, अथवा दुस्थानगत सूर्य सक्रिय उपाय की माँग करते हैं।',
      },
    },
    {
      name: { en: 'Identify the running antardasha', hi: 'चालू अन्तर्दशा पहचानें' },
      text: {
        en: 'Within Surya Mahadasha there are nine sub-periods. Difficult ones for most charts are Surya–Saturn, Surya–Rahu, and Surya–Ketu — these need active remedy. Favourable ones are Surya–Jupiter, Surya–Mars, Surya–Mercury, and Surya–Sun — these are operational planning windows for major announcements and decisions.',
        hi: 'सूर्य महादशा के भीतर नौ उप-काल हैं। अधिकांश कुण्डलियों के लिए कठिन — सूर्य-शनि, सूर्य-राहु, और सूर्य-केतु — इन्हें सक्रिय उपाय चाहिए। अनुकूल — सूर्य-गुरु, सूर्य-मंगल, सूर्य-बुध, और सूर्य-सूर्य — ये प्रमुख घोषणाओं एवं निर्णयों के नियोजन-खण्ड हैं।',
      },
    },
    {
      name: { en: 'Apply daily Aditya Hridaya', hi: 'दैनिक आदित्य हृदय का पाठ करें' },
      text: {
        en: 'The single most effective Surya Mahadasha remedy is daily recitation of the Aditya Hridaya Stotra at sunrise, facing east, with water offered to the rising Sun. Sustained for the full six years, this practice transforms the dasha\'s difficulty into structural growth. Twelve Sunday fasts and a Sunday donation pledge amplify the result.',
        hi: 'सर्वाधिक प्रभावी सूर्य महादशा उपाय है — पूर्वाभिमुख सूर्योदय पर उगते सूर्य को अर्घ्य के साथ दैनिक आदित्य हृदय स्तोत्र पाठ। पूरे छह वर्ष बनाये रखने पर यह अभ्यास दशा की कठिनाई को संरचनात्मक विकास में परिवर्तित कर देता है। बारह रविवार व्रत और एक रविवार-दान संकल्प परिणाम को बहुगुणित करते हैं।',
      },
    },
    {
      name: { en: 'Plan public moves into favourable sub-periods', hi: 'सार्वजनिक चालें अनुकूल उप-कालों में नियोजित करें' },
      text: {
        en: 'For promotion announcements, public launches, election filings, or major career visibility moves, target Surya–Surya (opening), Surya–Mars (decisive action), Surya–Jupiter (dharmic recognition), or Surya–Mercury (communication-driven). Defer government applications and confrontations during Surya–Saturn and Surya–Rahu.',
        hi: 'पदोन्नति घोषणाओं, सार्वजनिक प्रक्षेपण, चुनाव-दाखिले, अथवा प्रमुख करियर दृश्यता चालों के लिए — सूर्य-सूर्य (आरम्भ), सूर्य-मंगल (निर्णायक कर्म), सूर्य-गुरु (धार्मिक मान्यता), अथवा सूर्य-बुध (सम्वाद-केन्द्रित) लक्ष्य रखें। शासकीय आवेदन और टकराव सूर्य-शनि एवं सूर्य-राहु में स्थगित करें।',
      },
    },
    {
      name: { en: 'Honour your father and teachers explicitly', hi: 'अपने पिता एवं गुरुजनों का स्पष्ट सम्मान करें' },
      text: {
        en: 'Surya Mahadasha\'s deepest amplifier is dharmic acknowledgement — formal honour paid to one\'s father, teachers, and senior mentors. Do not let this dasha pass without explicit recognition: a public thank-you, a sustained financial support if needed, written acknowledgement in any work you publish, attendance at family ceremonies of one\'s teachers. The Sun rewards transparent attribution far beyond any ritual.',
        hi: 'सूर्य महादशा का गहनतम बढ़ाने वाला तत्त्व है धार्मिक स्वीकृति — पिता, गुरुजनों, एवं वरिष्ठ मार्गदर्शकों को औपचारिक सम्मान। इस दशा को बिना स्पष्ट मान्यता के बीतने न दें: सार्वजनिक धन्यवाद, यदि आवश्यक हो तो निरन्तर आर्थिक सहयोग, अपने प्रकाशनों में लिखित स्वीकृति, गुरुजनों के पारिवारिक संस्कारों में उपस्थिति। सूर्य पारदर्शी आरोपण को किसी भी अनुष्ठान से कहीं अधिक पुरस्कृत करते हैं।',
      },
    },
  ],

  datePublished: '2026-05-02',
  dateModified: '2026-05-02',
};
