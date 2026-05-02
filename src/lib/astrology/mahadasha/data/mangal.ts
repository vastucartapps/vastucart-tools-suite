import type { PlanetRecord } from '../types';

export const MANGAL: PlanetRecord = {
  slug: 'mangal',
  displayName: { en: 'Mangal Mahadasha', hi: 'मंगल महादशा' },
  westernName: 'Mars',
  beejMantra: 'Om Kraam Kreem Kraum Sah Bhaumaya Namah',
  periodYears: 7,
  periodDays: Math.round(7 * 365.25),
  karaka: {
    en: ['strength', 'courage', 'brothers', 'real estate', 'military', 'surgery', 'energy', 'discipline of action'],
    hi: ['बल', 'साहस', 'भाई', 'अचल सम्पत्ति', 'सेना', 'शल्य चिकित्सा', 'ऊर्जा', 'कर्म-अनुशासन'],
  },
  ownSigns: ['Aries', 'Scorpio'],
  exaltation: { sign: 'Capricorn', degree: 28 },
  debilitation: { sign: 'Cancer', degree: 28 },
  friendly: ['surya', 'chandra', 'guru'],
  neutral: ['shukra', 'shani'],
  enemy: ['budh'],
  weekday: { en: 'Tuesday', hi: 'मंगलवार' },
  deity: { en: 'Hanuman, Skanda (Kartikeya), Subramanya', hi: 'हनुमान, स्कन्द (कार्तिकेय), सुब्रमण्य' },
  gemstone: { en: 'Red Coral (Moonga)', hi: 'मूँगा' },
  themeColor: { primary: '#A93226', accent: '#CD5C5C' },
  icon: 'flame',

  intro: {
    en: `Mangal Mahadasha runs for seven years and is the chart\'s most decisive activation. Mars is the senapati — the commander among the planets — and his dasha is when the native\'s capacity to act gets tested in the open. Promotions push through. Property gets bought, sold, or fought over. Surgical decisions get made. Fitness either consolidates or collapses. Marriages either deepen through shared decisive action or fracture under conflict. Mars does not allow the native to drift; the seven years move. Classical authorities — Parashara, Mantreswara, Saravali — describe Mars as both protector (raksha-karaka) and destroyer (krur-graha), and the dasha registers both faces depending on how Mars sits in the natal chart. Well-placed, the dasha makes a builder, a soldier, an athlete, a surgeon, an entrepreneur. Afflicted, it makes the same energies turn inward as conflict, accident, or chronic anger. Either way, the native does not stay still.`,
    hi: `मंगल महादशा सात वर्ष की होती है और कुण्डली का सर्वाधिक निर्णायक सक्रियण है। मंगल सेनापति हैं — ग्रहों के बीच कमाण्डर — और उनकी दशा वह काल है जब जातक की कर्म-क्षमता खुले में परखी जाती है। पदोन्नतियाँ जोर से होती हैं। सम्पत्ति खरीदी, बेची, अथवा झगड़ी जाती है। शल्य चिकित्सा के निर्णय लिए जाते हैं। शारीरिक स्वास्थ्य या तो सुदृढ़ होता है अथवा ढह जाता है। विवाह — साझा निर्णायक कर्म से गहरे होते हैं अथवा संघर्ष में टूटते हैं। मंगल जातक को बहने नहीं देते; सात वर्ष चलते हैं। शास्त्रीय अधिकारी — पाराशर, मन्त्रेश्वर, सारावली — मंगल को रक्षा-कारक और क्रूर-ग्रह दोनों कहते हैं, और दशा दोनों रूप दर्ज करती है — यह मंगल की जन्म-कुण्डली स्थिति पर निर्भर। बलवान स्थिति में दशा निर्माता, सैनिक, खिलाड़ी, शल्य-चिकित्सक, उद्यमी बनाती है। पीड़ित स्थिति में वही ऊर्जाएँ संघर्ष, दुर्घटना, अथवा दीर्घकालिक क्रोध के रूप में अन्तर्मुख हो जाती हैं। दोनों ही स्थितियों में जातक स्थिर नहीं रहता।`,
  },

  periodOverview: {
    en: `Seven years is the second-shortest of the planetary mahadashas (after Sun\'s six). The Vimshottari order from Mars is Mangal–Mangal (about 5 months), Rahu, Jupiter, Saturn, Mercury, Ketu, Venus, Sun, Moon. Three sub-periods carry the dasha\'s weight: Mangal–Rahu (one year and eighteen days — the dasha\'s most volatile window with both nodes activating), Mangal–Saturn (one year one month — the disciplinary friction window between Mars\'s energy and Saturn\'s restraint), and Mangal–Venus (one year two months — the dasha\'s most relationally and materially productive sub-period). The opening Mangal–Mangal of five months sets the tone; the closing Mangal–Moon of seven months delivers the emotional resolution before handing over to Rahu Mahadasha. Read the dasha as a sequence of decisive short chapters rather than seven flat years; nothing in Mars stays still long.`,
    hi: `सात वर्ष ग्रह-महादशाओं में दूसरी सबसे छोटी है (सूर्य के छह के बाद)। मंगल से विंशोत्तरी क्रम है — मंगल-मंगल (लगभग 5 माह), राहु, गुरु, शनि, बुध, केतु, शुक्र, सूर्य, चन्द्र। तीन उप-काल दशा का भार वहन करते हैं: मंगल-राहु (एक वर्ष अठारह दिन — दशा का सर्वाधिक अस्थिर खण्ड जिसमें दोनों पात सक्रिय), मंगल-शनि (एक वर्ष एक माह — मंगल की ऊर्जा एवं शनि की संयम के बीच अनुशासनात्मक संघर्ष), और मंगल-शुक्र (एक वर्ष दो माह — दशा का सर्वाधिक सम्बन्धात्मक एवं भौतिक रूप से उत्पादक उप-काल)। प्रारम्भिक मंगल-मंगल का पाँच माह स्वर निर्धारित करता है; अन्तिम मंगल-चन्द्र का सात माह राहु महादशा को सौंपने से पूर्व भावनात्मक समाधान देता है। दशा को सात समतल वर्षों के बजाय निर्णायक छोटे अध्यायों के क्रम के रूप में पढ़ें; मंगल में कुछ भी अधिक देर स्थिर नहीं रहता।`,
  },

  wellPlacedEffects: {
    en: `When Mars is well-placed in the natal chart — in own signs Aries or Scorpio, exalted in Capricorn (Ruchaka mahapurusha yoga forms when in kendra), in third or sixth or tenth, with Jupiter\'s aspect or in friendly company — the seven years deliver one of the chart\'s most accomplishment-dense periods. Real estate is acquired and developed: a primary residence completed, an investment property purchased, a family home expanded. Career advances through decisive action — promotions, leadership of major projects, the resolution of a long-running case. Athletic and fitness goals consolidate. Surgical procedures (planned, with proper muhurta) succeed. Brothers, especially younger ones, prosper or come to the native\'s aid. Career fields favoured are real estate, civil engineering and construction, the military and police, surgery and emergency medicine, athletics, fire services, metallurgy and mining, weapons or defence-tech, and the legal profession (litigators specifically). Well-placed Mars protects the muscular system, blood circulation, and immunity. The deepest gift of a strong Mars dasha is internal: the native develops the capacity to make decisions and stay with the consequences. Most natives describe the period as the one in which they stopped second-guessing themselves.`,
    hi: `जब जन्म-कुण्डली में मंगल बलवान हों — स्वराशि मेष अथवा वृश्चिक में, उच्च के मकर में (केन्द्र में हो तो रुचक महापुरुष योग बनता है), तीसरे, छठे, अथवा दशम में, गुरु की दृष्टि अथवा मित्र संगति में — तब सात वर्ष कुण्डली के सर्वाधिक उपलब्धि-घनत्व वाले कालों में से एक देते हैं। अचल सम्पत्ति अर्जित एवं विकसित होती है: मुख्य निवास पूर्ण, निवेश सम्पत्ति क्रय, पारिवारिक गृह विस्तार। निर्णायक कर्म से करियर बढ़ता है — पदोन्नतियाँ, बड़ी परियोजनाओं का नेतृत्व, दीर्घ-लम्बित मामले का समाधान। शारीरिक एवं स्वास्थ्य-लक्ष्य सुदृढ़ होते हैं। शल्य चिकित्साएँ (नियोजित, उचित मुहूर्त के साथ) सफल। भाई, विशेषकर छोटे, फलते हैं अथवा जातक की सहायता आते हैं। अनुकूल व्यवसाय — अचल सम्पत्ति, सिविल इंजीनियरिंग एवं निर्माण, सेना एवं पुलिस, शल्य चिकित्सा एवं आपातकालीन चिकित्सा, खेल, अग्नि-सेवा, धातुकर्म एवं खनन, अस्त्र अथवा रक्षा-तकनीकी, और विधि (विशेषकर मुकदमेबाज़)। बलवान मंगल मांसपेशी-तन्त्र, रक्त-संचार, और प्रतिरक्षा की रक्षा करते हैं। बलवान मंगल दशा का गहरा उपहार आन्तरिक है: जातक निर्णय लेने और परिणामों के साथ रहने की क्षमता विकसित करता है। अधिकांश जातक इसे उस काल के रूप में वर्णित करते हैं जब उन्होंने स्वयं पर सन्देह करना बन्द कर दिया।`,
  },

  afflictedEffects: {
    en: `When Mars is afflicted — debilitated in Cancer, conjunct enemies (Mercury), in dusthana (6, 8, 12) without redemption, conjunct Rahu (Angarak yoga), or in the Manglik positions (1, 4, 7, 8, 12) for marriage — the seven years can run as compressed conflict. Accidents, surgical complications, real estate disputes, sibling discord, anger episodes that damage relationships, and in difficult charts, court cases or police involvement. Health-wise, blood pressure flares, inflammatory conditions, accidents involving sharp objects or fire, fevers, and infections are flagged. The classical Manglik chart (Mars in 1st, 4th, 7th, 8th, or 12th from lagna or Moon) faces particular pressure during the dasha\'s marital sub-periods (Mangal–Venus and Mangal–Moon). Yet none of these are predetermined. The dasha is energy looking for an outlet; if the native chooses constructive channels — daily exercise, real construction work, dedicated athletic training, regular Hanuman upasana — Mars finds the channel and the destruction does not need to occur. The afflicted Mars dasha is the chart\'s most direct invitation to convert latent aggression into useful work. Most natives who manage that conversion describe the seven years afterwards as the period in which they grew up.`,
    hi: `जब मंगल पीड़ित हों — कर्क में नीच के, शत्रुओं (बुध) से युक्त, दुस्थान (6, 8, 12) में बिना उद्धार के, राहु से युक्त (अंगारक योग), अथवा विवाह हेतु मांगलिक स्थानों (1, 4, 7, 8, 12) में — तब सात वर्ष संघनित संघर्ष के रूप में चल सकते हैं। दुर्घटनाएँ, शल्य चिकित्सा जटिलताएँ, अचल सम्पत्ति विवाद, भाई-कलह, क्रोध-प्रसंग जो सम्बन्धों को क्षति पहुँचाएँ, और कठिन कुण्डलियों में मुकदमे अथवा पुलिस-प्रकरण। स्वास्थ्य की दृष्टि से रक्तचाप उभार, प्रदाह की अवस्थाएँ, तीक्ष्ण वस्तुओं अथवा अग्नि से दुर्घटनाएँ, ज्वर, और संक्रमण चिह्नित। शास्त्रीय मांगलिक कुण्डली (लग्न अथवा चन्द्र से 1, 4, 7, 8, अथवा 12वें भाव में मंगल) दशा के वैवाहिक उप-कालों (मंगल-शुक्र और मंगल-चन्द्र) में विशेष दबाव अनुभव करती है। किन्तु इनमें से कोई भी पूर्व-निर्धारित नहीं। दशा निकास खोजती ऊर्जा है; यदि जातक रचनात्मक नालियाँ चुने — दैनिक व्यायाम, वास्तविक निर्माण कार्य, समर्पित खेल प्रशिक्षण, नियमित हनुमान उपासना — तो मंगल वह नाली पाते हैं और विनाश घटित होने की आवश्यकता नहीं रहती। पीड़ित मंगल दशा कुण्डली का सर्वाधिक प्रत्यक्ष आमन्त्रण है — सुषुप्त आक्रोश को उपयोगी कर्म में परिवर्तित करने का। अधिकांश जातक जो यह परिवर्तन सम्भालते हैं — वे सात वर्षों को बाद में उस काल के रूप में वर्णित करते हैं जब वे वयस्क हुए।`,
  },

  houseEffects: [
    { house: 1, effect: { en: 'Strong placement (especially in own signs). Body strengthens, courage rises, leadership qualities emerge. Manglik effect for marriage requires special compatibility.', hi: 'बलवान स्थिति (विशेषकर स्वराशियों में)। शरीर सुदृढ़, साहस बढ़ता है, नेतृत्व गुण उभरते हैं। विवाह हेतु मांगलिक प्रभाव विशेष अनुकूलता माँगता है।' } },
    { house: 2, effect: { en: 'Mixed. Family wealth fights, dental issues, sharp speech. Suits surgeons, dentists, jewellers; needs anger management for ordinary natives.', hi: 'मिश्रित। पारिवारिक धन-संघर्ष, दन्त समस्याएँ, तीक्ष्ण वाणी। शल्य चिकित्सक, दन्त चिकित्सक, स्वर्णकार के अनुकूल; सामान्य जातकों को क्रोध-प्रबन्धन आवश्यक।' } },
    { house: 3, effect: { en: 'Strongest placement (digbala). Tremendous courage, sibling support, success in writing/communication, athletic excellence. The chart\'s most useful Mars position.', hi: 'सर्वाधिक बलवान स्थिति (दिग्बल)। अपार साहस, भाई-बहन का समर्थन, लेखन/सम्वाद में सफलता, खेल उत्कृष्टता। कुण्डली की सर्वाधिक उपयोगी मंगल स्थिति।' } },
    { house: 4, effect: { en: 'Manglik position. Property and mother both stressed; possible vehicle accidents. Strong for civil engineers, real estate developers; tough for ordinary residential life.', hi: 'मांगलिक स्थिति। सम्पत्ति एवं माता दोनों में तनाव; वाहन दुर्घटनाएँ सम्भव। सिविल इंजीनियर, अचल सम्पत्ति विकासकर्ता के लिए बलवान; सामान्य आवासीय जीवन के लिए कठिन।' } },
    { house: 5, effect: { en: 'Mixed. Speculation gains/losses, sports/competitive success, conflict with children. Best for sports coaches, fitness trainers, military instructors.', hi: 'मिश्रित। सट्टा लाभ/हानि, खेल/प्रतियोगी सफलता, सन्तानों से विवाद। खेल प्रशिक्षक, स्वास्थ्य प्रशिक्षक, सैन्य प्रशिक्षक के लिए श्रेष्ठ।' } },
    { house: 6, effect: { en: 'Strong placement. Defeats enemies, wins court cases, succeeds in service work, healthcare, security, defence. Property disputes resolved.', hi: 'बलवान स्थिति। शत्रु पराजित, मुकदमे विजय, सेवा कार्य, स्वास्थ्य-सेवा, सुरक्षा, रक्षा में सफलता। सम्पत्ति-विवाद हल।' } },
    { house: 7, effect: { en: 'Manglik position. Marriage stressed; partner may be aggressive or absent often. Business partnerships need rigorous contracts. Strong for litigators, defence lawyers.', hi: 'मांगलिक स्थिति। विवाह तनाव में; जीवनसाथी आक्रामक अथवा प्रायः अनुपस्थित हो सकता है। व्यापारिक साझेदारी कठोर अनुबन्ध माँगती है। मुकदमेबाज़, रक्षा अधिवक्ता के लिए बलवान।' } },
    { house: 8, effect: { en: 'Manglik position; difficult house. Surgery probable, accidents flagged, inheritance disputes, occult research. Strong for forensic, surgical, occult specialists.', hi: 'मांगलिक स्थिति; कठिन भाव। शल्य चिकित्सा सम्भाव्य, दुर्घटनाएँ चिह्नित, उत्तराधिकार-विवाद, तान्त्रिक अनुसन्धान। फोरेन्सिक, शल्य, तान्त्रिक विशेषज्ञों के लिए बलवान।' } },
    { house: 9, effect: { en: 'Strong placement. Father supports decisive action, foreign travel for adventure or military service, dharmic activism. Suits soldiers, missionaries, adventurers.', hi: 'बलवान स्थिति। पिता निर्णायक कर्म का समर्थन करते हैं, साहस अथवा सैन्य सेवा हेतु विदेश यात्रा, धार्मिक सक्रियता। सैनिक, मिशनरी, साहसी के अनुकूल।' } },
    { house: 10, effect: { en: 'Strong placement. Career rises through decisive action, leadership of operations, command roles. Politicians, generals, surgeons, real-estate magnates flourish.', hi: 'बलवान स्थिति। निर्णायक कर्म से करियर ऊँचाई, ऑपरेशन-नेतृत्व, कमाण्ड भूमिकाएँ। राजनेता, सेनापति, शल्य चिकित्सक, अचल सम्पत्ति महारथी फलते हैं।' } },
    { house: 11, effect: { en: 'Strong income placement. Earnings from action-oriented work, large brother network, fulfilment of bold goals. Property-income common.', hi: 'बलवान आय-स्थिति। कर्म-केन्द्रित कार्य से कमाई, भाई-नेटवर्क, साहसिक लक्ष्यों की पूर्ति। सम्पत्ति-आय सामान्य।' } },
    { house: 12, effect: { en: 'Manglik position. Foreign deployment for military or hard work, hospital expenses, hidden enemies. Best for monks, defence officers posted abroad, hospice surgeons.', hi: 'मांगलिक स्थिति। सैन्य अथवा कठिन कार्य हेतु विदेश-तैनाती, अस्पताल व्यय, गुप्त शत्रु। संन्यासी, विदेश-तैनात रक्षा अधिकारी, होस्पाइस शल्य-चिकित्सक के लिए श्रेष्ठ।' } },
  ],

  antardashas: [
    {
      subRuler: 'Mangal',
      label: { en: 'Mangal–Mangal Antardasha', hi: 'मंगल-मंगल अन्तर्दशा' },
      duration: { en: 'About 4 months 27 days', hi: 'लगभग 4 माह 27 दिन' },
      effect: {
        en: `The opening sub-period is short and decisive. Most natives report a sharp event within the first hundred days — a property purchase decision, a fitness milestone, a career-defining promotion or argument, a surgical decision, or a younger brother/colleague\'s situation requiring intervention. Mars shows the dasha\'s flavour upfront. Avoid elective surgery and confrontations involving sharp objects in this short window if Mars is afflicted.`,
        hi: `प्रारम्भिक उप-काल लघु एवं निर्णायक। अधिकांश जातक प्रथम सौ दिनों में तीक्ष्ण घटना रिपोर्ट करते हैं — सम्पत्ति-क्रय निर्णय, स्वास्थ्य मील-पत्थर, करियर-परिभाषक पदोन्नति अथवा विवाद, शल्य चिकित्सा निर्णय, अथवा छोटे भाई/सहकर्मी की स्थिति जो हस्तक्षेप माँगे। मंगल दशा का स्वाद अग्रिम दिखाते हैं। यदि मंगल पीड़ित हों तो इस संक्षिप्त खण्ड में ऐच्छिक शल्य चिकित्सा एवं तीक्ष्ण वस्तुओं वाले टकराव से बचें।`,
      },
    },
    {
      subRuler: 'Rahu',
      label: { en: 'Mangal–Rahu Antardasha', hi: 'मंगल-राहु अन्तर्दशा' },
      duration: { en: 'About 1 year 0 months 18 days', hi: 'लगभग 1 वर्ष 0 माह 18 दिन' },
      effect: {
        en: `Mars and Rahu in the Vedic system form Angarak yoga when conjunct in the natal chart. As a sub-period the combination is the dasha\'s most volatile twelve months. Risk of sudden accidents (vehicular, electrical, surgical complications), foreign relocations driven by aggressive ambition, conflict with hidden adversaries, technology-enabled disputes (online conflicts, cyber issues), or in spiritually inclined natives, sudden break with conventional life. The remedy is Hanuman upasana through the year, daily exercise to discharge surplus aggression, and absolute caution with vehicles and surgical decisions. Defer elective procedures by twelve months.`,
        hi: `वैदिक प्रणाली में मंगल और राहु जब जन्म-कुण्डली में युक्त हों तो अंगारक योग बनाते हैं। उप-काल के रूप में संयोजन दशा के सर्वाधिक अस्थिर बारह माह हैं। अकस्मात् दुर्घटनाओं (वाहन, विद्युत, शल्य चिकित्सा जटिलताएँ), आक्रामक महत्त्वाकांक्षा से विदेशी स्थानान्तरण, गुप्त विरोधियों से टकराव, प्रौद्योगिकी-समर्थित विवाद (ऑनलाइन संघर्ष, साइबर समस्याएँ), अथवा आध्यात्मिक प्रवृत्ति वाले जातकों में पारम्परिक जीवन से अकस्मात् विच्छेद का जोखिम। उपाय हैं — पूरे वर्ष हनुमान उपासना, अतिरिक्त आक्रोश निकालने हेतु दैनिक व्यायाम, और वाहन एवं शल्य निर्णयों में परम सावधानी। ऐच्छिक प्रक्रियाएँ बारह माह स्थगित करें।`,
      },
    },
    {
      subRuler: 'Guru',
      label: { en: 'Mangal–Guru Antardasha', hi: 'मंगल-गुरु अन्तर्दशा' },
      duration: { en: 'About 11 months 6 days', hi: 'लगभग 11 माह 6 दिन' },
      effect: {
        en: `Mars and Jupiter are friends; this is one of the dasha\'s most ethically anchored sub-periods. Decisive action under dharmic guidance: the launching of a meaningful business, the completion of a property project with full legal compliance, a leadership role in a dharmic institution, charitable construction (temple-building, school construction). Career advances visibly. Family religious events common. Health-wise, this is the strongest sub-period for elective surgery if it is needed (with proper muhurta). The closing months often deliver a long-pending recognition.`,
        hi: `मंगल और गुरु मित्र हैं; यह दशा के सर्वाधिक नैतिक रूप से आधारित उप-कालों में से एक है। धार्मिक मार्गदर्शन के अधीन निर्णायक कर्म: अर्थपूर्ण व्यवसाय का प्रक्षेपण, पूर्ण विधिक अनुपालन के साथ सम्पत्ति-परियोजना का पूर्ण होना, धार्मिक संस्था में नेतृत्व-भूमिका, परोपकारी निर्माण (मन्दिर-निर्माण, विद्यालय-निर्माण)। करियर दृश्य रूप से बढ़ता है। पारिवारिक धार्मिक आयोजन सामान्य। स्वास्थ्य की दृष्टि से यह सबसे प्रबल उप-काल है — यदि आवश्यक हो तो ऐच्छिक शल्य चिकित्सा के लिए (उचित मुहूर्त के साथ)। अन्तिम मास प्रायः दीर्घ-लम्बित मान्यता देते हैं।`,
      },
    },
    {
      subRuler: 'Shani',
      label: { en: 'Mangal–Shani Antardasha', hi: 'मंगल-शनि अन्तर्दशा' },
      duration: { en: 'About 1 year 1 month 9 days', hi: 'लगभग 1 वर्ष 1 माह 9 दिन' },
      effect: {
        en: `Mars and Saturn are enemies and the combination is the dasha\'s most friction-laden window. Clashes between energy and structure: a project gets blocked by bureaucracy, a launch gets delayed by regulatory issues, a younger relative\'s ambition meets an elder\'s caution, a fitness goal collides with chronic injury. Property delays particularly. Health-wise, joint and bone issues, dental work, and accumulated stress symptoms surface. The classical advice is to slow Mars down by ten percent — let Saturn add structure where Mars wants to charge. The thirteen months pass; what was learned about pacing serves the dasha\'s remaining years.`,
        hi: `मंगल और शनि शत्रु हैं तथा संयोजन दशा का सर्वाधिक संघर्ष-बहुल खण्ड है। ऊर्जा एवं संरचना के बीच टकराव: नौकरशाही से परियोजना रुकती है, नियामक समस्याओं से प्रक्षेपण में विलम्ब, छोटे स्वजन की महत्त्वाकांक्षा वरिष्ठ की सावधानी से टकराती है, स्वास्थ्य-लक्ष्य दीर्घकालिक चोट से टकराता है। विशेषकर सम्पत्ति-विलम्ब। स्वास्थ्य की दृष्टि से सन्धि एवं अस्थि समस्याएँ, दन्त कार्य, और संचित तनाव-लक्षण उभरते हैं। शास्त्रीय परामर्श है — मंगल को दस प्रतिशत धीमा करें — शनि को संरचना देने दें जहाँ मंगल आवेग करना चाहते हैं। तेरह माह बीतते हैं; गति-नियन्त्रण के बारे में जो सीखा वह दशा के शेष वर्षों में काम आता है।`,
      },
    },
    {
      subRuler: 'Budh',
      label: { en: 'Mangal–Budh Antardasha', hi: 'मंगल-बुध अन्तर्दशा' },
      duration: { en: 'About 11 months 27 days', hi: 'लगभग 11 माह 27 दिन' },
      effect: {
        en: `Mars and Mercury are enemies in classical astrology — action versus analysis, blunt versus articulate. As a sub-period the combination is workable but produces a peculiar tension: the native\'s instinct says move, the mind says wait; or vice versa. Communication-driven careers (writing, broadcasting, sales, marketing, software, content) gain ground if the native channels Mars\'s energy through Mercury\'s articulation rather than letting them pull in opposite directions. Risk: impulsive emails, hasty contracts, sharp text messages that damage relationships. Pause before sending; let Mercury\'s edit catch what Mars wanted to send.`,
        hi: `शास्त्रीय ज्योतिष में मंगल और बुध शत्रु हैं — कर्म बनाम विश्लेषण, स्पष्टवादी बनाम वाक्पटु। उप-काल के रूप में संयोजन सध्य है किन्तु एक विलक्षण तनाव उत्पन्न करता है: जातक की प्रवृत्ति कहती है चलो, मन कहता है रुको; अथवा विपरीत। सम्वाद-केन्द्रित करियर (लेखन, प्रसारण, विक्रय, विपणन, सॉफ़्टवेयर, कन्टेन्ट) तब बढ़ते हैं जब जातक मंगल की ऊर्जा को बुध की अभिव्यक्ति से निकाले — विपरीत दिशाओं में न खिंचने दे। जोखिम: आवेगपूर्ण ईमेल, हड़बड़ी में अनुबन्ध, तीक्ष्ण सन्देश जो सम्बन्ध बिगाड़ें। भेजने से पूर्व रुकें; बुध के सम्पादन को मंगल जो भेजना चाहते थे उसे पकड़ने दें।`,
      },
    },
    {
      subRuler: 'Ketu',
      label: { en: 'Mangal–Ketu Antardasha', hi: 'मंगल-केतु अन्तर्दशा' },
      duration: { en: 'About 4 months 27 days', hi: 'लगभग 4 माह 27 दिन' },
      effect: {
        en: `Mars and Ketu are connected — Ketu is sometimes called "Mars without focus." Together for five months the combination is sharp and brief. Sudden surgical decisions, a quick exit from a project that no longer aligns, brief illness involving fever or skin issues, or in spiritually inclined natives a short retreat. Most natives describe this as a "necessary cut" — what was being held by inertia gets released. Not a window for new launches; it is a window for letting go.`,
        hi: `मंगल और केतु जुड़े हैं — केतु को कभी-कभी "बिना केन्द्र-दृष्टि के मंगल" कहा जाता है। पाँच माह के लिए संयोजन तीक्ष्ण एवं संक्षिप्त। अकस्मात् शल्य चिकित्सा निर्णय, जो परियोजना अब उपयुक्त नहीं उससे शीघ्र प्रस्थान, संक्षिप्त रोग — ज्वर अथवा त्वचा समस्या, अथवा आध्यात्मिक प्रवृत्ति वाले जातकों में लघु एकान्त। अधिकांश जातक इसे "आवश्यक कटाव" कहते हैं — जो जड़ता से टिका था वह छूटता है। नए प्रक्षेपणों का खण्ड नहीं; यह त्यागने का खण्ड है।`,
      },
    },
    {
      subRuler: 'Shukra',
      label: { en: 'Mangal–Shukra Antardasha', hi: 'मंगल-शुक्र अन्तर्दशा' },
      duration: { en: 'About 1 year 2 months 0 days', hi: 'लगभग 1 वर्ष 2 माह 0 दिन' },
      effect: {
        en: `Mars and Venus are neutrals and the combination is one of the dasha\'s most relationally and materially productive sub-periods. Marriage if delayed (especially for Manglik natives — the proper compatibility plus this sub-period often resolves the timing), property purchase with aesthetic emphasis, vehicle acquisition, fitness goals achieved with style, recognition in arts that combine athleticism (dance, performance, classical martial arts). Income from real estate, luxury goods, hospitality, or fashion grows. The risk pattern: Mars under Venus can produce passionate relationships that move too fast — caution is needed in commitments made in the first three months.`,
        hi: `मंगल और शुक्र तटस्थ हैं और संयोजन दशा के सर्वाधिक सम्बन्धात्मक एवं भौतिक रूप से उत्पादक उप-कालों में से है। यदि विलम्बित हो तो विवाह (विशेषकर मांगलिक जातकों के लिए — उचित अनुकूलता के साथ यह उप-काल प्रायः समय का समाधान देता है), सौन्दर्य-केन्द्रित सम्पत्ति-क्रय, वाहन अधिग्रहण, शैली के साथ स्वास्थ्य-लक्ष्य प्राप्ति, खेल-कला (नृत्य, प्रदर्शन, शास्त्रीय युद्ध-कला) में मान्यता। अचल सम्पत्ति, विलासिता वस्तुएँ, आतिथ्य, अथवा फ़ैशन से आय बढ़ती है। जोखिम-स्वरूप: शुक्र के अधीन मंगल भावुक सम्बन्ध दे सकते हैं जो बहुत तीव्र चलते हैं — प्रथम तीन माह में की गई प्रतिबद्धताओं में सावधानी आवश्यक।`,
      },
    },
    {
      subRuler: 'Surya',
      label: { en: 'Mangal–Surya Antardasha', hi: 'मंगल-सूर्य अन्तर्दशा' },
      duration: { en: 'About 4 months 6 days', hi: 'लगभग 4 माह 6 दिन' },
      effect: {
        en: `Mars and Sun are friends; this brief sub-period is the dasha\'s most authority-aligned window. Government recognition for action-based work — a defence promotion, a real-estate clearance, a court ruling in one\'s favour, public recognition of leadership. Father\'s health may need attention. The four months pass quickly; use the window for any government-related action that has been pending.`,
        hi: `मंगल और सूर्य मित्र हैं; यह संक्षिप्त उप-काल दशा का सर्वाधिक अधिकार-संरेखित खण्ड है। कर्म-आधारित कार्य के लिए शासकीय मान्यता — रक्षा पदोन्नति, अचल सम्पत्ति की मंज़ूरी, अनुकूल न्यायालय निर्णय, नेतृत्व की सार्वजनिक मान्यता। पिता का स्वास्थ्य ध्यान माँग सकता है। चार माह शीघ्र बीतते हैं; जो शासकीय कार्य लम्बित है उसके लिए खण्ड का उपयोग करें।`,
      },
    },
    {
      subRuler: 'Chandra',
      label: { en: 'Mangal–Chandra Antardasha', hi: 'मंगल-चन्द्र अन्तर्दशा' },
      duration: { en: 'About 7 months 0 days', hi: 'लगभग 7 माह 0 दिन' },
      effect: {
        en: `Closing the seven years. Mars and Moon are friends; the antardasha is the dasha\'s most family-oriented window. Family decisions resolve, the home undergoes a final upgrade or renovation, a marriage timing finalises, mother\'s situation stabilises. Public reception of the dasha\'s achievements consolidates. Health-wise, the seven months are typically gentle; lingering injuries heal. Hand-over to Rahu Mahadasha begins emotionally — many natives report a sense of closing one chapter cleanly.`,
        hi: `सात वर्षों का अन्त। मंगल और चन्द्र मित्र हैं; अन्तर्दशा दशा का सर्वाधिक पारिवारिक खण्ड है। पारिवारिक निर्णय हल होते हैं, गृह अन्तिम उन्नयन अथवा नवीकरण से गुज़रता है, विवाह-समय अन्तिम होता है, माता की स्थिति स्थिर। दशा की उपलब्धियों की सार्वजनिक स्वीकार्यता सुदृढ़ होती है। स्वास्थ्य की दृष्टि से सात माह प्रायः कोमल; पुरानी चोटें ठीक होती हैं। राहु महादशा को सुपुर्दगी भावनात्मक रूप से आरम्भ — अनेक जातक एक अध्याय को स्वच्छ बन्द करने का अनुभव रिपोर्ट करते हैं।`,
      },
    },
  ],

  remedies: [
    {
      title: { en: 'Mantra and Hanuman Upasana', hi: 'मन्त्र एवं हनुमान उपासना' },
      body: {
        en: `Hanuman is the most powerful operational deity for Mars — he carries Mars\'s strength channelled through Vishnu\'s service. Daily Hanuman Chalisa is the foundation; advanced practitioners add the Sundar Kand (a single chapter of the Ramayana, recited weekly), the Bajrang Baan, or the Hanuman Ashtottara Shatanama. The Mangal Beej Mantra (Om Kraam Kreem Kraum Sah Bhaumaya Namah, 10,000 recitations across forty days) is the formal upasana. Tuesday is the prescribed day; recitation is most effective at the eighth muhurta of daytime (about 7-8 hours after sunrise). Red rosary (rudraksha or coral mala) is preferred. Mars also responds to physical invocation — the Hanuman Chalisa recited while doing push-ups or while walking briskly is classically permitted and effective.`,
        hi: `मंगल के लिए हनुमान सर्वाधिक प्रभावी कार्यगत देवता हैं — वे विष्णु-सेवा से प्रवाहित मंगल की शक्ति वहन करते हैं। दैनिक हनुमान चालीसा आधार है; उच्च-स्तरीय साधक सुन्दर काण्ड (साप्ताहिक एक रामायण-अध्याय), बजरंग बाण, अथवा हनुमान अष्टोत्तर शतनाम जोड़ते हैं। मंगल बीज मन्त्र (ॐ क्रां क्रीं क्रौं सः भौमाय नमः, चालीस दिनों में 10,000 जप) औपचारिक उपासना है। मंगलवार विहित दिन; जप दिन के आठवें मुहूर्त (सूर्योदय के लगभग 7-8 घण्टे बाद) में सर्वाधिक प्रभावी। लाल माला (रुद्राक्ष अथवा मूँगा) श्रेष्ठ। मंगल शारीरिक आह्वान पर भी प्रतिक्रिया देते हैं — पुश-अप करते हुए अथवा तीव्र पैदल चलते हुए हनुमान चालीसा पाठ शास्त्रीय रूप से अनुमत एवं प्रभावी।`,
      },
    },
    {
      title: { en: 'Red Coral (Moonga)', hi: 'मूँगा' },
      body: {
        en: `Red Coral (Moonga) is Mars\'s gem, organic rather than mineral, and one of the safer Jyotish stones. Italian or Japanese coral is preferred; deep red colour is the classical ideal. Five carats minimum, set in copper or gold (silver acceptable for some), ring finger of the right hand, energised on a Tuesday in Shukla paksha at sunrise with the Mangal beej mantra. Trial three nights under the pillow before fixing. Red Coral works well alone; do not pair with Pearl, Hessonite, or Diamond. If the natal Mars is debilitated in Cancer or in dusthana, consult a competent jyotishi before wearing — coral can intensify difficult Mars rather than soften it. For Manglik natives, Red Coral is sometimes counterproductive; use Hanuman upasana as the primary remedy instead.`,
        hi: `मूँगा मंगल का रत्न है, खनिज के बजाय जैविक, और सुरक्षित ज्योतिष रत्नों में से। इतालवी अथवा जापानी मूँगा श्रेष्ठ; गहरा लाल रंग शास्त्रीय आदर्श। न्यूनतम पाँच रत्ती, ताम्र अथवा स्वर्ण में (कुछ के लिए चाँदी स्वीकार्य), दाहिने हाथ की अनामिका, शुक्ल पक्ष के मंगलवार को सूर्योदय पर मंगल बीज मन्त्र से अभिमन्त्रित। जड़वाने से पूर्व तीन रात्रि तकिए के नीचे परीक्षण। मूँगा अकेले अच्छा कार्य करता है; मोती, गोमेद, अथवा हीरे के साथ न पहनें। यदि जन्म-कुण्डली में मंगल कर्क में नीच के अथवा दुस्थान में हों — पहनने से पूर्व सक्षम ज्योतिषी से परामर्श — मूँगा कठिन मंगल को कोमल करने के बजाय तीव्र कर सकता है। मांगलिक जातकों के लिए मूँगा कभी-कभी प्रतिकूल; मुख्य उपाय के रूप में हनुमान उपासना को प्राथमिकता दें।`,
      },
    },
    {
      title: { en: 'Daana (Donation)', hi: 'दान' },
      body: {
        en: `Mars rules soldiers, athletes, brothers, those who do physical work, and those who protect. Donation in Mars\'s name should reach retired soldiers, fire-services personnel, athletes from poor backgrounds, surgical-care charities, blood banks, and brothers/younger male relatives in need. Red lentils (masoor dal), jaggery, copper, weapons-related charity (sponsor a martial-arts class for poor children, support a fire-services welfare fund), and red sandalwood are classical Mars daana. Tuesday before noon is the prescribed time. The deeper Mars daana, however, is protective — putting one\'s strength behind those who need it: defending a junior at work from unfair treatment, sponsoring a brother\'s education, donating blood twice a year. Mars rewards the conversion of personal strength into protection of others.`,
        hi: `मंगल सैनिकों, खिलाड़ियों, भाइयों, शारीरिक कार्य करने वालों, और रक्षकों पर शासन करते हैं। मंगल के नाम पर दान सेवानिवृत्त सैनिकों, अग्निशमन कर्मियों, निर्धन पृष्ठभूमि के खिलाड़ियों, शल्य-देखभाल दानार्थ संस्थाओं, रक्तकोषों, और आवश्यकता में पड़े भाइयों/छोटे पुरुष-स्वजनों तक पहुँचना चाहिए। मसूर दाल, गुड़, ताम्र, अस्त्र-सम्बन्धित दान (निर्धन बच्चों के लिए मार्शल आर्ट्स कक्षा का प्रायोजन, अग्निशमन कल्याण कोष का समर्थन), और लाल चन्दन शास्त्रीय मंगल-दान हैं। मंगलवार दोपहर से पूर्व विहित समय। तथापि, गहरा मंगल-दान रक्षात्मक है — अपनी शक्ति को उनके पीछे रखना जिन्हें आवश्यकता है: कार्यस्थल पर अनुचित व्यवहार से कनिष्ठ की रक्षा, भाई की शिक्षा का प्रायोजन, वर्ष में दो बार रक्तदान। मंगल व्यक्तिगत शक्ति को दूसरों की रक्षा में परिवर्तित करने को पुरस्कृत करते हैं।`,
      },
    },
    {
      title: { en: 'Vrata (Observance)', hi: 'व्रत' },
      body: {
        en: `The Mangalvar Vrat (Tuesday fast) is the standard Mars observance: a sunrise-to-sunset fast on Tuesdays, with phalahar permitted, breaking after Hanuman aarti at sunset. Twenty-one consecutive Tuesdays is the classical full cycle. Hanuman Jayanti (Chaitra Purnima) is the year\'s most charged Mars-Hanuman day; recite the entire Sundar Kand or 108 Hanuman Chalisas. The Skanda Sashti vrata — six days of fasting in the Tamil tradition for Subrahmanya/Kartikeya — is a powerful regional alternative for South Indian natives. Pilgrimage to a Hanuman or Subrahmanya temple (Sri Sailam, Tirupati Venkateshwara, Mehandipur Balaji, Hampi Virupaksha-Hanuman, Palani) once during the dasha is meritorious. The deepest Mars vrata, however, is the conversion of dasha\'s energy into discipline: a daily exercise practice maintained for the full seven years.`,
        hi: `मंगलवार व्रत मानक मंगल अनुष्ठान है: मंगलवार को सूर्योदय से सूर्यास्त तक उपवास, फलाहार अनुमत, सूर्यास्त पर हनुमान आरती के पश्चात् व्रत-समाप्ति। इक्कीस क्रमिक मंगलवार शास्त्रीय पूर्ण चक्र। हनुमान जयन्ती (चैत्र पूर्णिमा) वर्ष का सर्वाधिक आवेशित मंगल-हनुमान दिन; पूरे सुन्दर काण्ड अथवा 108 हनुमान चालीसाओं का पाठ। स्कन्द षष्ठी व्रत — सुब्रमण्य/कार्तिकेय हेतु तमिल परम्परा में छह दिन का उपवास — दक्षिण भारतीय जातकों के लिए शक्तिशाली क्षेत्रीय विकल्प। दशा के दौरान एक बार हनुमान अथवा सुब्रमण्य मन्दिर (श्रीशैलम्, तिरुपति वेंकटेश्वर, मेहंदीपुर बालाजी, हम्पी विरूपाक्ष-हनुमान, पलनी) की तीर्थयात्रा पुण्यप्रद। तथापि सर्वाधिक गहरा मंगल-व्रत है दशा की ऊर्जा का अनुशासन में परिवर्तन: पूरे सात वर्षों तक बनाये रखी गई दैनिक व्यायाम-साधना।`,
      },
    },
    {
      title: { en: 'Lifestyle Adjustments', hi: 'जीवन-शैली समायोजन' },
      body: {
        en: `The Mars dasha rewards channelled physical action. Daily exercise — running, weight training, swimming, martial arts, sports, or vigorous yoga — is non-negotiable. Without a physical outlet, Mars\'s surplus energy turns inward as anger, blood pressure, sleep disruption, or accident-proneness. Reduce inflammatory foods (excess spice, fried foods, alcohol), cool the body in summer (Mars amplifies pitta dosha), maintain hydration. Avoid driving when emotionally agitated; defer arguments by twenty-four hours where possible. Sleep rhythm matters more than sleep length. Practise verbal restraint — Mars under pressure speaks before thinking, and the dasha\'s reputation damage usually comes from unguarded words rather than actions. The single most reliable lifestyle adjustment: physical exercise to exhaustion at least four days a week. The exhausted body sleeps; the rested mind makes better decisions.`,
        hi: `मंगल की दशा निर्देशित शारीरिक कर्म को पुरस्कृत करती है। दैनिक व्यायाम — दौड़, भार-प्रशिक्षण, तैराकी, युद्ध-कला, खेल, अथवा सशक्त योग — समझौता-योग्य नहीं। बिना शारीरिक निकास के मंगल की अतिरिक्त ऊर्जा क्रोध, रक्तचाप, निद्रा-विघ्न, अथवा दुर्घटना-प्रवणता के रूप में अन्तर्मुख हो जाती है। प्रदाहक भोजन (अति मसाला, तला, मद्य) कम करें, ग्रीष्म ऋतु में शरीर को शीतल रखें (मंगल पित्त दोष को बढ़ाते हैं), जलयोजन बनाये रखें। भावनात्मक उत्तेजना में वाहन न चलाएँ; जहाँ सम्भव हो तर्क-विवादों को चौबीस घण्टे टालें। निद्रा का क्रम लम्बाई से अधिक मायने रखता है। वाणी-संयम का अभ्यास करें — दबाव में मंगल बिना सोचे बोलते हैं, और दशा की प्रतिष्ठा-क्षति प्रायः कर्मों से नहीं, असुरक्षित शब्दों से आती है। सबसे विश्वसनीय जीवन-शैली समायोजन: सप्ताह में कम-से-कम चार दिन थकावट तक शारीरिक व्यायाम। थका हुआ शरीर सोता है; विश्रान्त मन बेहतर निर्णय लेता है।`,
      },
    },
  ],

  casePatterns: {
    en: `Three Mangal Mahadasha patterns recur in consultation. The first is the builder\'s chapter — common in real estate, construction, civil engineering, and entrepreneurship — where the dasha sees the native complete a major property project, launch a venture, or take over the family business. The second is the warrior\'s chapter — defence personnel, athletes, surgeons, litigators, security professionals — where the dasha lifts the native from junior officer to commander, from team member to head, from emergency-room resident to consultant. The third pattern is the conflict chapter, common when Mars is afflicted: court cases, surgical complications, accidents, sibling estrangement, or in difficult charts police involvement. The third is recoverable in almost every case — Mars is the planet of fight, and a fight that the native survives produces the dasha\'s deepest character growth. Read the natal Mars\'s house, sign, dispositor, and aspects from Saturn or Rahu before deciding which pattern is most likely.`,
    hi: `परामर्श में तीन मंगल महादशा स्वरूप पुनरावृत्त होते हैं। पहला निर्माता-अध्याय — अचल सम्पत्ति, निर्माण, सिविल इंजीनियरिंग, और उद्यमशीलता में सामान्य — जहाँ दशा जातक को बड़ी सम्पत्ति-परियोजना पूर्ण करते, उद्यम प्रक्षेपित करते, अथवा पारिवारिक व्यवसाय सम्भालते देखती है। दूसरा योद्धा-अध्याय — रक्षा कर्मी, खिलाड़ी, शल्य चिकित्सक, मुकदमेबाज़, सुरक्षा व्यावसायिक — जहाँ दशा जातक को कनिष्ठ अधिकारी से कमाण्डर, टीम-सदस्य से प्रमुख, आपातकालीन-कक्ष निवासी से परामर्शदाता तक उठाती है। तीसरा संघर्ष-अध्याय, पीड़ित मंगल पर सामान्य: मुकदमे, शल्य चिकित्सा जटिलताएँ, दुर्घटनाएँ, भाई-विमुखता, अथवा कठिन कुण्डलियों में पुलिस-प्रकरण। तीसरा लगभग हर स्थिति में पुनरुद्धार-योग्य — मंगल युद्ध के ग्रह हैं, और जिस युद्ध में जातक जीवित रहे वह दशा का गहनतम चरित्र-विकास देता है। कौन-सा स्वरूप सर्वाधिक सम्भाव्य है यह निर्धारित करने से पूर्व जन्म-कुण्डली में मंगल का भाव, राशि, राशीश, और शनि अथवा राहु से दृष्टियाँ देखें।`,
  },

  faqs: [
    {
      question: { en: 'Is Mangal Mahadasha good or bad?', hi: 'मंगल महादशा शुभ है या अशुभ?' },
      answer: {
        en: `Strong Mars delivers a builder\'s or warrior\'s chapter — promotions, property, fitness, leadership, decisive completion of long-pending matters. Afflicted Mars produces accidents, court cases, sibling discord, anger episodes, and in difficult charts surgical complications. The dasha\'s seven years move fast either way; the native does not stay still. Read your natal Mars\'s house, sign, dispositor, and aspects (especially from Saturn or Rahu) before forming a view. Manglik natives need particular attention to the marital sub-periods.`,
        hi: `बलवान मंगल निर्माता अथवा योद्धा अध्याय देते हैं — पदोन्नतियाँ, सम्पत्ति, स्वास्थ्य, नेतृत्व, दीर्घ-लम्बित विषयों का निर्णायक समापन। पीड़ित मंगल दुर्घटनाएँ, मुकदमे, भाई-कलह, क्रोध-प्रसंग, और कठिन कुण्डलियों में शल्य चिकित्सा जटिलताएँ देते हैं। दशा के सात वर्ष किसी भी रूप में तीव्र चलते हैं; जातक स्थिर नहीं रहता। दृष्टि बनाने से पूर्व जन्म-कुण्डली में मंगल का भाव, राशि, राशीश, और दृष्टियाँ (विशेषकर शनि अथवा राहु से) देखें। मांगलिक जातकों को वैवाहिक उप-कालों पर विशेष ध्यान आवश्यक।`,
      },
    },
    {
      question: { en: 'How long is Mangal Mahadasha?', hi: 'मंगल महादशा कितने वर्ष की होती है?' },
      answer: {
        en: `Seven calendar years (about 2,557 days) — the second-shortest of the seven planetary mahadashas, after Sun\'s six. Within these seven years there are nine antardashas, the longest being Mangal–Venus (1 year 2 months) and Mangal–Saturn (1 year 1 month); the shortest are Mangal–Mangal and Mangal–Ketu at about 5 months each.`,
        hi: `सात कलैंडर वर्ष (लगभग 2,557 दिन) — सात ग्रह-महादशाओं में दूसरी सबसे छोटी, सूर्य के छह के बाद। इन सात वर्षों में नौ अन्तर्दशाएँ हैं — सबसे लम्बी मंगल-शुक्र (1 वर्ष 2 माह) और मंगल-शनि (1 वर्ष 1 माह); सबसे छोटी मंगल-मंगल और मंगल-केतु लगभग 5-5 माह।`,
      },
    },
    {
      question: { en: 'Does Mangal Mahadasha cause accidents?', hi: 'क्या मंगल महादशा दुर्घटनाएँ कराती है?' },
      answer: {
        en: `Affected Mars in his own dasha can produce accident-proneness, particularly involving sharp objects, fire, vehicles, electricity, and surgical complications. The most accident-prone sub-period is Mangal–Rahu (about 1 year 18 days). The remedy combines astrological practice (daily Hanuman Chalisa, weekly Mars temple visit, exercise to discharge surplus aggression) with practical caution — driving slower, deferring elective surgery to safer sub-periods, refusing to work with sharp tools when emotionally agitated, twenty-four-hour delays before sending angry messages. The combination is highly effective; pure ritual without practical care is not.`,
        hi: `अपनी ही दशा में पीड़ित मंगल दुर्घटना-प्रवणता उत्पन्न कर सकते हैं, विशेषकर तीक्ष्ण वस्तुओं, अग्नि, वाहन, विद्युत, और शल्य चिकित्सा जटिलताओं को सम्मिलित करते हुए। सर्वाधिक दुर्घटना-प्रवण उप-काल मंगल-राहु (लगभग 1 वर्ष 18 दिन)। उपाय ज्योतिष-अभ्यास (दैनिक हनुमान चालीसा, साप्ताहिक मंगल मन्दिर दर्शन, अतिरिक्त आक्रोश निकालने हेतु व्यायाम) को व्यावहारिक सावधानी के साथ संयोजित करता है — धीमे वाहन चलाना, ऐच्छिक शल्य चिकित्सा को सुरक्षित उप-कालों में स्थगित करना, भावनात्मक उत्तेजना में तीक्ष्ण उपकरणों से कार्य न करना, क्रोधित सन्देश भेजने से पूर्व चौबीस घण्टे विलम्ब। संयोजन अति-प्रभावी; बिना व्यावहारिक देखभाल के शुद्ध अनुष्ठान नहीं।`,
      },
    },
    {
      question: { en: 'I am Manglik. Will my marriage suffer in this dasha?', hi: 'मैं मांगलिक हूँ। क्या इस दशा में मेरा विवाह प्रभावित होगा?' },
      answer: {
        en: `Manglik dosha is created by Mars in 1st, 4th, 7th, 8th, or 12th house from lagna or Moon. During Mangal Mahadasha, the marital sub-periods (Mangal–Venus and Mangal–Moon) carry the dosha\'s strongest signature. The dosha is workable in three ways: (1) marrying another Manglik (the doshas cancel), (2) waiting until age twenty-eight or later when the dosha\'s strength reduces, (3) sustained Hanuman Chalisa and Mangal Shanti remedies. Pre-marriage chart matching is essential. Read VastuCart\'s dedicated Manglik Calculator and matching tools for a full analysis of your specific Mars placement and severity.`,
        hi: `लग्न अथवा चन्द्र से 1, 4, 7, 8, अथवा 12वें भाव में मंगल मांगलिक दोष बनाते हैं। मंगल महादशा के दौरान वैवाहिक उप-काल (मंगल-शुक्र और मंगल-चन्द्र) दोष का सबसे प्रबल संकेत वहन करते हैं। दोष तीन प्रकार से सध्य है: (1) किसी अन्य मांगलिक से विवाह (दोष परस्पर रद्द होते हैं), (2) अट्ठाईस वर्ष अथवा बाद की प्रतीक्षा जब दोष की शक्ति घटती है, (3) निरन्तर हनुमान चालीसा एवं मंगल शान्ति उपाय। पूर्व-विवाह कुण्डली मिलान अनिवार्य। अपनी विशिष्ट मंगल स्थिति एवं तीव्रता के पूर्ण विश्लेषण हेतु VastuCart के समर्पित मांगलिक कैलकुलेटर एवं मिलान उपकरण देखें।`,
      },
    },
    {
      question: { en: 'What career suits Mangal Mahadasha?', hi: 'मंगल महादशा के लिए कौन-से व्यवसाय अनुकूल हैं?' },
      answer: {
        en: `Real estate (development, brokerage, construction), civil engineering and infrastructure, the military and police, surgery and emergency medicine, dentistry, athletics and sports coaching, fire services, metallurgy and mining, weapons or defence-tech, the legal profession (especially litigation), security services, and entrepreneurship in any action-heavy field. The common thread is roles where decisive action under pressure produces the work\'s primary value. Office desk work, accounting, and slow-paced advisory roles are workable but rarely produce the dasha\'s signature accomplishments.`,
        hi: `अचल सम्पत्ति (विकास, दलाली, निर्माण), सिविल इंजीनियरिंग एवं अधोसंरचना, सेना एवं पुलिस, शल्य चिकित्सा एवं आपातकालीन चिकित्सा, दन्त चिकित्सा, खेल एवं प्रशिक्षण, अग्निशमन सेवाएँ, धातुकर्म एवं खनन, अस्त्र अथवा रक्षा-तकनीकी, विधि (विशेषकर मुकदमेबाज़ी), सुरक्षा सेवाएँ, और किसी भी कर्म-भार वाले क्षेत्र में उद्यमशीलता। सामान्य धागा है — ऐसी भूमिकाएँ जहाँ दबाव में निर्णायक कर्म ही कार्य का प्राथमिक मूल्य उत्पन्न करता है। कार्यालय-डेस्क कार्य, लेखा, और धीमे परामर्शदाता भूमिकाएँ सध्य किन्तु इस दशा की विशिष्ट उपलब्धियाँ विरले देती हैं।`,
      },
    },
    {
      question: { en: 'How to remedy a weak Mars in this dasha?', hi: 'इस दशा में निर्बल मंगल का उपाय क्या है?' },
      answer: {
        en: `Five layered practices: (1) Daily Hanuman Chalisa — the single most reliable remedy, sustained for the full seven years; (2) Tuesday vrata (twenty-one consecutive Tuesdays minimum); (3) Donation to retired soldiers, fire-services personnel, or athletes from poor backgrounds — pick one Tuesday-pledge and keep it; (4) Daily exercise to exhaustion at least four days a week — Mars\'s surplus must have a physical outlet; (5) Red Coral (Moonga) only after a competent jyotishi has confirmed compatibility, particularly for non-Manglik natives. Combined practice transforms Mars\'s aggression into productive force.`,
        hi: `पाँच स्तरित अभ्यास: (1) दैनिक हनुमान चालीसा — एकमात्र सर्वाधिक विश्वसनीय उपाय, पूरे सात वर्ष बनाये रखा जाए; (2) मंगलवार व्रत (न्यूनतम इक्कीस क्रमिक मंगलवार); (3) सेवानिवृत्त सैनिकों, अग्निशमन कर्मियों, अथवा निर्धन पृष्ठभूमि के खिलाड़ियों को दान — एक मंगलवार-संकल्प चुनें और निभाएँ; (4) सप्ताह में कम-से-कम चार दिन थकावट तक दैनिक व्यायाम — मंगल की अतिरिक्त ऊर्जा को शारीरिक निकास चाहिए; (5) मूँगा केवल किसी सक्षम ज्योतिषी द्वारा अनुकूलता की पुष्टि के पश्चात्, विशेषकर ग़ैर-मांगलिक जातकों के लिए। संयुक्त अभ्यास मंगल के आक्रोश को उत्पादक बल में परिवर्तित करता है।`,
      },
    },
    {
      question: { en: 'Should I have surgery during Mangal Mahadasha?', hi: 'क्या मंगल महादशा में शल्य चिकित्सा करवाऊँ?' },
      answer: {
        en: `Mars rules surgery, so the dasha is naturally aligned with surgical interventions — but the antardasha matters. Favourable surgical sub-periods are Mangal–Jupiter and Mangal–Sun (planned procedures with proper muhurta). Difficult sub-periods are Mangal–Rahu, Mangal–Saturn, and Mangal–Ketu (risk of complications). Always consult a competent jyotishi for muhurta if elective surgery is planned. Emergency surgery cannot wait for muhurta; ensure post-surgical Hanuman Chalisa recitation and any other supportive remedies the consulting jyotishi recommends. The dasha tends to give faster recovery than other dashas — Mars is the karaka of regenerative tissue.`,
        hi: `मंगल शल्य चिकित्सा पर शासन करते हैं, अतः दशा शल्य हस्तक्षेपों के साथ स्वाभाविक रूप से संरेखित — किन्तु अन्तर्दशा महत्त्व रखती है। अनुकूल शल्य उप-काल — मंगल-गुरु और मंगल-सूर्य (उचित मुहूर्त के साथ नियोजित प्रक्रियाएँ)। कठिन उप-काल — मंगल-राहु, मंगल-शनि, और मंगल-केतु (जटिलताओं का जोखिम)। यदि ऐच्छिक शल्य चिकित्सा नियोजित हो — मुहूर्त हेतु सक्षम ज्योतिषी से परामर्श अनिवार्य। आपातकालीन शल्य चिकित्सा मुहूर्त की प्रतीक्षा नहीं कर सकती; शल्य-पश्चात् हनुमान चालीसा पाठ एवं अन्य सहायक उपाय जो परामर्शदाता ज्योतिषी संस्तुत करे — सुनिश्चित करें। दशा प्रायः अन्य दशाओं की तुलना में तीव्र स्वास्थ्य-लाभ देती है — मंगल पुनरुत्पादक ऊतक के कारक हैं।`,
      },
    },
    {
      question: { en: 'Will my brother face problems in Mangal Mahadasha?', hi: 'क्या मंगल महादशा में मेरे भाई को समस्या होगी?' },
      answer: {
        en: `Mars is the karaka of younger brothers, and his dasha activates a sibling storyline — usually positively for natives with well-placed Mars. Strong Mars: brothers prosper, become a meaningful presence in family decisions, jointly invest in property or business. Afflicted Mars or Mars in dusthana: brother\'s health concerns, conflict over property or family business, in difficult charts the loss of a brother. Read your natal third house and third lord alongside Mars to see the likely pattern. The remedy in difficult cases is sustained Hanuman upasana for both the native and the brother, and timing of any joint financial commitments to favourable sub-periods.`,
        hi: `मंगल छोटे भाइयों के कारक हैं, और उनकी दशा भाई-बहन कथा-सूत्र को सक्रिय करती है — बलवान मंगल वाले जातकों के लिए प्रायः धनात्मक रूप से। बलवान मंगल: भाई फलते हैं, पारिवारिक निर्णयों में अर्थपूर्ण उपस्थिति बनते हैं, सम्पत्ति अथवा व्यवसाय में संयुक्त निवेश। पीड़ित मंगल अथवा दुस्थानगत मंगल: भाई का स्वास्थ्य, सम्पत्ति अथवा पारिवारिक व्यवसाय पर विवाद, कठिन कुण्डलियों में भाई की हानि। सम्भाव्य स्वरूप देखने के लिए अपनी जन्म-कुण्डली में तृतीय भाव और तृतीयेश को मंगल के साथ पढ़ें। कठिन मामलों में उपाय है — जातक एवं भाई दोनों के लिए निरन्तर हनुमान उपासना, और किसी भी संयुक्त वित्तीय प्रतिबद्धता का समय अनुकूल उप-कालों में।`,
      },
    },
  ],

  howToSteps: [
    {
      name: { en: 'Generate your dasha timeline', hi: 'अपनी दशा समय-रेखा बनाएँ' },
      text: {
        en: 'Enter your date, time, and place of birth into the Mahadasha Calculator. The full 120-year sequence reveals exactly when your Mangal Mahadasha begins and which antardashas you will run within those seven years.',
        hi: 'महादशा कैलकुलेटर में अपनी जन्म तिथि, समय, और स्थान दर्ज करें। पूर्ण 120 वर्ष का क्रम दिखाएगा कि मंगल महादशा कब आरम्भ होगी और इन सात वर्षों में कौन-सी अन्तर्दशाएँ चलेंगी।',
      },
    },
    {
      name: { en: 'Locate Mars in your natal chart', hi: 'जन्म कुण्डली में मंगल की स्थिति देखें' },
      text: {
        en: 'Find Mars\'s house, sign, conjunct planets, and aspects from Saturn or Rahu. Mars in own signs (Aries, Scorpio), exalted in Capricorn, in third (digbala), sixth, or tenth delivers the dasha\'s textbook decisive potential. Mars debilitated, in dusthana, or in Manglik positions requires active remedy.',
        hi: 'मंगल का भाव, राशि, साथ के ग्रह, और शनि अथवा राहु से दृष्टि देखें। स्वराशि (मेष, वृश्चिक) में, उच्च मकर में, तृतीय (दिग्बल), षष्ठ, अथवा दशम में बलवान मंगल दशा की पाठ्य निर्णायक संभावना देते हैं। नीच, दुस्थानगत, अथवा मांगलिक स्थानों में मंगल सक्रिय उपाय की माँग करते हैं।',
      },
    },
    {
      name: { en: 'Identify the running antardasha', hi: 'चालू अन्तर्दशा पहचानें' },
      text: {
        en: 'Within Mangal Mahadasha there are nine sub-periods. Difficult ones are Mangal–Rahu (most volatile), Mangal–Saturn (friction-laden), and Mangal–Mercury (action-vs-analysis). Favourable ones are Mangal–Jupiter (dharmic action), Mangal–Sun (authority alignment), and Mangal–Venus (relational and material productivity).',
        hi: 'मंगल महादशा के भीतर नौ उप-काल हैं। कठिन — मंगल-राहु (सर्वाधिक अस्थिर), मंगल-शनि (संघर्ष-बहुल), और मंगल-बुध (कर्म-बनाम-विश्लेषण)। अनुकूल — मंगल-गुरु (धार्मिक कर्म), मंगल-सूर्य (अधिकार संरेखण), और मंगल-शुक्र (सम्बन्धात्मक एवं भौतिक उत्पादकता)।',
      },
    },
    {
      name: { en: 'Build daily exercise into the dasha', hi: 'दशा में दैनिक व्यायाम का अभ्यास बनाएँ' },
      text: {
        en: 'The single most reliable Mangal Mahadasha practice is physical exercise to exhaustion at least four days a week. Without a physical outlet, Mars\'s surplus turns inward. Running, weight training, swimming, martial arts, sports, vigorous yoga — pick one and sustain it for the full seven years. Combined with daily Hanuman Chalisa, this practice transforms aggression into accomplishment.',
        hi: 'सबसे विश्वसनीय मंगल महादशा अभ्यास है — सप्ताह में कम-से-कम चार दिन थकावट तक शारीरिक व्यायाम। बिना शारीरिक निकास के मंगल का अतिशेष अन्तर्मुख हो जाता है। दौड़, भार-प्रशिक्षण, तैराकी, युद्ध-कला, खेल, सशक्त योग — एक चुनें और पूरे सात वर्ष बनाये रखें। दैनिक हनुमान चालीसा के साथ संयुक्त, यह अभ्यास आक्रोश को उपलब्धि में परिवर्तित करता है।',
      },
    },
    {
      name: { en: 'Time major decisions to favourable sub-periods', hi: 'प्रमुख निर्णयों का समय अनुकूल उप-कालों में रखें' },
      text: {
        en: 'For property purchase or development, target Mangal–Jupiter or Mangal–Venus. For business launch, target Mangal–Mangal or Mangal–Jupiter. For elective surgery, target Mangal–Jupiter or Mangal–Sun (with proper muhurta). For marriage (especially Manglik natives with proper compatibility), target Mangal–Venus. Defer all elective procedures and confrontations during Mangal–Rahu, Mangal–Saturn, and Mangal–Ketu.',
        hi: 'सम्पत्ति-क्रय अथवा विकास के लिए — मंगल-गुरु अथवा मंगल-शुक्र। व्यवसाय आरम्भ के लिए — मंगल-मंगल अथवा मंगल-गुरु। ऐच्छिक शल्य चिकित्सा के लिए — मंगल-गुरु अथवा मंगल-सूर्य (उचित मुहूर्त के साथ)। विवाह के लिए (विशेषकर उचित अनुकूलता वाले मांगलिक जातक) — मंगल-शुक्र। मंगल-राहु, मंगल-शनि, और मंगल-केतु में सभी ऐच्छिक प्रक्रियाएँ एवं टकराव स्थगित करें।',
      },
    },
    {
      name: { en: 'Convert anger into protection of others', hi: 'क्रोध को दूसरों की रक्षा में परिवर्तित करें' },
      text: {
        en: 'Mangal Mahadasha\'s deepest amplifier is the conversion of personal strength into protection — defending a junior at work from unfair treatment, sponsoring a brother\'s education, donating blood twice a year, formally mentoring younger athletes or trainees. Mars rewards strength used for others far more than strength used for self. Build at least one such practice into the dasha, and the seven years close with the native better integrated than they began.',
        hi: 'मंगल महादशा का गहनतम बढ़ाने वाला तत्त्व है — व्यक्तिगत शक्ति का रक्षा में परिवर्तन — कार्यस्थल पर अनुचित व्यवहार से कनिष्ठ की रक्षा, भाई की शिक्षा का प्रायोजन, वर्ष में दो बार रक्तदान, छोटे खिलाड़ियों अथवा प्रशिक्षुओं का औपचारिक मार्गदर्शन। मंगल स्वयं के लिए उपयोग की गई शक्ति से कहीं अधिक दूसरों के लिए उपयोग की गई शक्ति को पुरस्कृत करते हैं। दशा में कम-से-कम एक ऐसा अभ्यास निर्मित करें, और सात वर्ष जातक को आरम्भ से अधिक एकीकृत करते हुए समाप्त होते हैं।',
      },
    },
  ],

  datePublished: '2026-05-02',
  dateModified: '2026-05-02',
};
