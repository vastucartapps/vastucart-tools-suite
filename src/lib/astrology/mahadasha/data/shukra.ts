import type { PlanetRecord } from '../types';

export const SHUKRA: PlanetRecord = {
  slug: 'shukra',
  displayName: { en: 'Shukra Mahadasha', hi: 'शुक्र महादशा' },
  westernName: 'Venus',
  beejMantra: 'Om Draam Dreem Draum Sah Shukraya Namah',
  periodYears: 20,
  periodDays: Math.round(20 * 365.25),
  karaka: {
    en: ['marriage', 'love', 'wealth', 'luxury', 'arts', 'creativity', 'beauty', 'feminine prosperity'],
    hi: ['विवाह', 'प्रेम', 'धन', 'विलासिता', 'कला', 'रचनात्मकता', 'सौन्दर्य', 'स्त्री-सम्पन्नता'],
  },
  ownSigns: ['Taurus', 'Libra'],
  exaltation: { sign: 'Pisces', degree: 27 },
  debilitation: { sign: 'Virgo', degree: 27 },
  friendly: ['budh', 'shani'],
  neutral: ['mangal', 'guru'],
  enemy: ['surya', 'chandra'],
  weekday: { en: 'Friday', hi: 'शुक्रवार' },
  deity: { en: 'Lakshmi, Shukracharya, Mahalaxmi', hi: 'लक्ष्मी, शुक्राचार्य, महालक्ष्मी' },
  gemstone: { en: 'Diamond (Heera)', hi: 'हीरा' },
  themeColor: { primary: '#9F4E96', accent: '#C77AC0' },
  icon: 'sparkles',

  intro: {
    en: `Shukra Mahadasha is the longest of the nine major periods — twenty full years under Venus, the planet of marriage, love, wealth, beauty, and the arts. Among classical Jyotish authorities Venus carries the unusual designation of being both a benefic and a guru — guru of the asuras, in fact, the teacher of those who refuse renunciation and choose to live well in the world. His dasha registers exactly that quality: the twenty years are typically the chart\'s most prosperous, romantic, and beauty-rich chapter. Marriage occurs here for many natives. Children are born. Vehicles, jewellery, art collections, real estate, and creative output accumulate. The native\'s aesthetic sense matures; many find their personal style, their voice, their way of being in the world during these years. Yet the dasha is not without its tests. Venus rules pleasure, and twenty years of pleasure unchecked produce their own form of disorientation. The afflicted Venus chart can run the dasha as twenty years of indulgence, infidelity, debt, or chronic dissatisfaction with what is in fact a comfortable life. Read the natal Venus before assuming the dasha\'s textbook beauty.`,
    hi: `नौ प्रमुख दशाओं में शुक्र महादशा सबसे लम्बी है — पूरे बीस वर्ष शुक्र के अधीन — विवाह, प्रेम, धन, सौन्दर्य, और कला के ग्रह। शास्त्रीय ज्योतिष अधिकारियों में शुक्र को असामान्य पदवी प्राप्त है — शुभ ग्रह तथा गुरु दोनों — वस्तुतः असुरों के गुरु, उन शिष्यों के आचार्य जो संन्यास अस्वीकार करके संसार में अच्छा जीवन जीना चुनते हैं। उनकी दशा ठीक यही गुण दर्ज करती है: ये बीस वर्ष प्रायः कुण्डली का सर्वाधिक समृद्ध, प्रेममय, और सौन्दर्य-समृद्ध अध्याय होते हैं। अनेक जातकों के लिए विवाह इसी काल में होता है। सन्तानें जन्मती हैं। वाहन, आभूषण, कला-संग्रह, अचल सम्पत्ति, और रचनात्मक उत्पादन संचित होते हैं। जातक का सौन्दर्य-बोध परिपक्व होता है; अनेक इन्हीं वर्षों में अपनी व्यक्तिगत शैली, अपना स्वर, अपनी संसार-शैली पाते हैं। तथापि दशा परीक्षाओं से रहित नहीं। शुक्र भोग पर शासन करते हैं, और बीस वर्ष का अनियन्त्रित भोग अपनी प्रकार की दिशाहीनता उत्पन्न करता है। पीड़ित शुक्र वाली कुण्डली दशा को बीस वर्षों के भोग, अविश्वास, ऋण, अथवा वस्तुतः सुखमय जीवन के प्रति दीर्घकालिक असन्तोष के रूप में चला सकती है। दशा की पाठ्य सुन्दरता मानने से पूर्व जन्म-शुक्र को पढ़ें।`,
  },

  periodOverview: {
    en: `Twenty years is the longest mahadasha in the entire Vimshottari sequence. The internal order is Shukra–Shukra (about 3 years 4 months — the longest opening sub-period of any dasha), Surya, Chandra, Mangal, Rahu, Guru, Shani, Budh, Ketu. Five sub-periods run more than two years each: Shukra–Shukra (3y 4m), Shukra–Saturn (3y 2m), Shukra–Mercury (2y 10m), Shukra–Rahu (3y), and Shukra–Jupiter (2y 8m). The shorter Sun, Moon, Mars, and Ketu antardashas are episodic chapters within longer arcs. Read the dasha as four major chapters of about five years each rather than twenty flat years; each chapter has its own dominant planetary mood. The first chapter (Venus–Venus + Venus–Sun) sets the dasha\'s aesthetic and authority register; the second (Venus–Moon + Venus–Mars) brings family and decisive action; the third (Venus–Rahu + Venus–Jupiter) opens the dasha\'s most expansive financial and dharmic windows; the fourth (Venus–Saturn + Venus–Mercury + Venus–Ketu) consolidates and prepares the handover to Sun mahadasha.`,
    hi: `बीस वर्ष सम्पूर्ण विंशोत्तरी क्रम की सबसे लम्बी महादशा है। आन्तरिक क्रम है — शुक्र-शुक्र (लगभग 3 वर्ष 4 माह — किसी भी दशा का सबसे लम्बा प्रारम्भिक उप-काल), सूर्य, चन्द्र, मंगल, राहु, गुरु, शनि, बुध, केतु। पाँच उप-काल दो वर्ष से अधिक के हैं: शुक्र-शुक्र (3व 4म), शुक्र-शनि (3व 2म), शुक्र-बुध (2व 10म), शुक्र-राहु (3व), और शुक्र-गुरु (2व 8म)। लघु सूर्य, चन्द्र, मंगल, और केतु अन्तर्दशाएँ लम्बे चापों के भीतर खण्डात्मक अध्याय हैं। दशा को बीस समतल वर्षों के बजाय पाँच-पाँच वर्ष के चार प्रमुख अध्यायों के रूप में पढ़ें; प्रत्येक अध्याय का अपना प्रमुख ग्रह-स्वर है। प्रथम अध्याय (शुक्र-शुक्र + शुक्र-सूर्य) दशा का सौन्दर्य एवं अधिकार रजिस्टर बनाता है; द्वितीय (शुक्र-चन्द्र + शुक्र-मंगल) परिवार एवं निर्णायक कर्म लाता है; तृतीय (शुक्र-राहु + शुक्र-गुरु) दशा के सर्वाधिक विस्तारकारी आर्थिक एवं धार्मिक खण्ड खोलता है; चतुर्थ (शुक्र-शनि + शुक्र-बुध + शुक्र-केतु) सुदृढ़ करता है एवं सूर्य महादशा को सुपुर्दगी की तैयारी करता है।`,
  },

  wellPlacedEffects: {
    en: `When Venus is well-placed in the natal chart — in own signs Taurus or Libra, exalted in Pisces (Malavya mahapurusha yoga forms when in kendra), in second, fourth, seventh or twelfth, with Jupiter\'s aspect or in the company of friendly planets — the twenty years deliver the chart\'s most prosperous and aesthetically rich chapter. Marriage in good time and to a partner of comparable refinement; the chart\'s strongest love story emerges here. The birth of children, particularly daughters, often coincides with Venus sub-periods. Income from creative work — design, fashion, hospitality, jewellery, fine arts, classical music and dance, advertising, real estate luxury segment, the wedding industry, automobiles, and the wider beauty economy — grows throughout the dasha. Vehicles, jewellery, art, and real estate accumulate steadily. Career fields favoured are anything aesthetic or relational: hospitality, tourism, fashion, design, cinema, classical and contemporary arts, diplomacy, legal practice in family law, and luxury retail. Health-wise, well-placed Venus protects the kidneys, urinary tract, reproductive system, and skin. Many natives report this as the period of their greatest social grace and physical beauty. The deepest gift is internal: the native develops the capacity to enjoy what they have, which is rarer than the capacity to acquire it. Twenty years lived well is the foundation for the tougher Sun-Moon-Mars sequence that follows.`,
    hi: `जब जन्म-कुण्डली में शुक्र बलवान हों — स्वराशि वृष अथवा तुला में, उच्च के मीन में (केन्द्र में हो तो मालव्य महापुरुष योग बनता है), दूसरे, चतुर्थ, सप्तम अथवा द्वादश में, गुरु की दृष्टि अथवा मित्र ग्रहों की संगति में — तब बीस वर्ष कुण्डली का सर्वाधिक समृद्ध एवं सौन्दर्य-समृद्ध अध्याय देते हैं। उचित समय पर समान परिष्कार के जीवनसाथी से विवाह; कुण्डली की सबसे प्रबल प्रेम-कथा यहीं उभरती है। सन्तानों का जन्म, विशेषकर पुत्रियों का, प्रायः शुक्र उप-कालों में होता है। रचनात्मक कार्य से आय — डिज़ाइन, फ़ैशन, आतिथ्य, आभूषण, ललित कला, शास्त्रीय एवं समकालीन संगीत-नृत्य, विज्ञापन, अचल सम्पत्ति विलासिता खण्ड, विवाह उद्योग, ऑटोमोबाइल, और व्यापक सौन्दर्य अर्थव्यवस्था — पूरी दशा भर बढ़ती है। वाहन, आभूषण, कला, और अचल सम्पत्ति स्थिर रूप से संचित। अनुकूल व्यवसाय कुछ भी सौन्दर्यपरक अथवा सम्बन्धपरक: आतिथ्य, पर्यटन, फ़ैशन, डिज़ाइन, सिनेमा, शास्त्रीय एवं समकालीन कला, राजनयिकता, पारिवारिक विधि-प्रथा, और विलासिता खुदरा। स्वास्थ्य की दृष्टि से बलवान शुक्र वृक्क, मूत्र-तन्त्र, प्रजनन-तन्त्र, और त्वचा की रक्षा करते हैं। अनेक जातक इस काल को अपनी सर्वाधिक सामाजिक सुघड़ता एवं शारीरिक सौन्दर्य के काल के रूप में रिपोर्ट करते हैं। सबसे गहरा उपहार आन्तरिक है: जातक उसका भोग करने की क्षमता विकसित करता है जो उसके पास है — जो अर्जित करने की क्षमता से कहीं विरल है। अच्छी प्रकार जिए गए बीस वर्ष आगे आने वाले कठिन सूर्य-चन्द्र-मंगल क्रम के लिए नींव बनाते हैं।`,
  },

  afflictedEffects: {
    en: `When Venus is afflicted — debilitated in Virgo, combust under direct conjunction with Sun within ten degrees, in dusthana without redemption, conjunct enemy planets (Sun, Moon), or with the seventh lord weak — the twenty years can run as the inversion of pleasure: extramarital affairs that damage the marriage, financial leakage to luxury and indulgence, addiction patterns (alcohol, recreational substances, food, online indulgence), chronic dissatisfaction with relationships and acquisitions, and reproductive or kidney health concerns. The dasha\'s reputation for marriage difficulty is well-earned in afflicted charts; debilitated Venus in dasha is a leading astrological correlate of divorce, second marriage, or extended marital separation in modern Indian charts. The classical writers warn specifically about Venus combust under Sun (Asta Shukra) — twenty years of muted creative voice, repeated relationship friction with father or authority, and a creative talent that fails to find recognition despite genuine ability. None of these patterns is absolute. The afflicted Venus dasha is fundamentally about learning the difference between pleasure and contentment, and between desire and satisfaction. Most natives who do that work emerge from the twenty years more discerning, more honest about what they actually want, and capable of relationships of greater depth than they could sustain at the dasha\'s start.`,
    hi: `जब शुक्र पीड़ित हों — कन्या में नीच के, सूर्य से दस अंश के भीतर युक्त होकर अस्त, दुस्थान में बिना उद्धार के, शत्रु ग्रहों (सूर्य, चन्द्र) से युक्त, अथवा सप्तमेश निर्बल — तब बीस वर्ष भोग के विलोम के रूप में चल सकते हैं: विवाहेतर सम्बन्ध जो विवाह को क्षति पहुँचाएँ, विलासिता एवं भोग में आर्थिक रिसाव, व्यसन-स्वरूप (मद्य, मनोरंजनात्मक मादक, भोजन, ऑनलाइन भोग), सम्बन्धों एवं अधिग्रहणों से दीर्घकालिक असन्तोष, और प्रजनन अथवा वृक्क सम्बन्धी स्वास्थ्य चिन्ताएँ। पीड़ित कुण्डलियों में दशा की वैवाहिक कठिनाई की प्रसिद्धि सत्य है; आधुनिक भारतीय कुण्डलियों में दशा में नीच के शुक्र विच्छेद, द्वितीय विवाह, अथवा विस्तारित वैवाहिक विछोह के अग्रणी ज्योतिष-सम्बन्धी हैं। शास्त्रीय लेखक विशेष रूप से सूर्य से अस्त शुक्र (अस्त शुक्र) की चेतावनी देते हैं — बीस वर्षों का दबा हुआ रचनात्मक स्वर, पिता अथवा अधिकार से बार-बार सम्बन्ध-घर्षण, और वास्तविक क्षमता के बावजूद मान्यता नहीं पाती रचनात्मक प्रतिभा। इनमें से कोई भी स्वरूप पूर्ण नहीं। पीड़ित शुक्र दशा मूलतः इस अन्तर को सीखने की है — भोग और सन्तोष के बीच, इच्छा और तृप्ति के बीच। अधिकांश जातक जो यह कार्य करते हैं — वे बीस वर्षों से अधिक विवेकी, अपनी वास्तविक इच्छा के बारे में अधिक ईमानदार, और दशा के आरम्भ में जिस गहराई के सम्बन्ध निभा सकते थे उससे अधिक गहरे सम्बन्ध करने में सक्षम होकर निकलते हैं।`,
  },

  houseEffects: [
    { house: 1, effect: { en: 'Strong placement. Personality becomes magnetic, body refines, voice softens. Suits actors, hosts, designers, hospitality professionals.', hi: 'बलवान स्थिति। व्यक्तित्व चुम्बकीय, शरीर परिष्कृत, स्वर कोमल। अभिनेता, मेज़बान, डिज़ाइनर, आतिथ्य व्यावसायिकों के अनुकूल।' } },
    { house: 2, effect: { en: 'Strongest placement for wealth. Family wealth grows, speech becomes persuasive and beautiful, food and dining elevate. Excellent for jewellers, wine traders, voice artists.', hi: 'धन के लिए सर्वाधिक बलवान स्थिति। पारिवारिक धन बढ़ता है, वाणी प्रभावी एवं सुन्दर, भोजन एवं भोजन-कक्ष उत्कृष्ट। स्वर्णकार, मद्य-व्यापारी, स्वर-कलाकार के लिए उत्कृष्ट।' } },
    { house: 3, effect: { en: 'Mid-strength. Communication becomes refined, sibling support warm. Suits writers of romantic or aesthetic content, classical musicians.', hi: 'मध्य-बल। सम्वाद परिष्कृत, भाई-बहन सहयोग उष्ण। प्रेम अथवा सौन्दर्य-कन्टेन्ट लेखकों, शास्त्रीय संगीतज्ञों के अनुकूल।' } },
    { house: 4, effect: { en: 'Strong placement (digbala). Mother\'s blessings, beautiful primary residence, vehicles, emotional comfort. Real-estate and interior-design careers prosper.', hi: 'बलवान स्थिति (दिग्बल)। माता का आशीर्वाद, सुन्दर मुख्य निवास, वाहन, भावनात्मक सुख। अचल सम्पत्ति एवं अन्तरण-डिज़ाइन करियर फलते हैं।' } },
    { house: 5, effect: { en: 'Strong placement. Romance, creative output, children (especially daughters), speculation gains. Excellent for cinema, fine arts, classical performance.', hi: 'बलवान स्थिति। प्रेम, रचनात्मक उत्पादन, सन्तानें (विशेषकर पुत्रियाँ), सट्टा-लाभ। सिनेमा, ललित कला, शास्त्रीय प्रदर्शन के लिए उत्कृष्ट।' } },
    { house: 6, effect: { en: 'Mixed. Resolves disputes through diplomatic charm, succeeds in service, healthcare, hospitality. Possible kidney/urinary issues if afflicted.', hi: 'मिश्रित। राजनयिक सुघड़ता से विवाद हल, सेवा, स्वास्थ्य-सेवा, आतिथ्य में सफलता। पीड़ित हो तो वृक्क/मूत्र समस्याएँ सम्भव।' } },
    { house: 7, effect: { en: 'Strongest placement for marriage. Spouse beautiful and refined; marriage strengthens public reputation. Excellent for diplomats, business partners, wedding planners.', hi: 'विवाह के लिए सर्वाधिक बलवान स्थिति। जीवनसाथी सुन्दर एवं परिष्कृत; विवाह सार्वजनिक प्रतिष्ठा को सुदृढ़ करता है। राजनयिक, व्यापार साझेदार, विवाह नियोजक के लिए उत्कृष्ट।' } },
    { house: 8, effect: { en: 'Difficult house. Inheritance through marriage, occult arts, sexual energy as transformation, possible reproductive issues. Suits forensic artists, mortuary aesthetics, occult practitioners.', hi: 'कठिन भाव। विवाह से उत्तराधिकार, तान्त्रिक कलाएँ, लैंगिक ऊर्जा रूपान्तरण रूप, प्रजनन समस्याएँ सम्भव। फोरेन्सिक कलाकार, श्मशान सौन्दर्य, तान्त्रिक साधकों के अनुकूल।' } },
    { house: 9, effect: { en: 'Strong placement. Foreign travel for honeymoon or pleasure, religious art, dharmic teaching of refined subjects. Suits cultural ambassadors, art curators.', hi: 'बलवान स्थिति। हनीमून अथवा आनन्द हेतु विदेश यात्रा, धार्मिक कला, परिष्कृत विषयों का धार्मिक शिक्षण। सांस्कृतिक राजदूत, कला क्यूरेटर के अनुकूल।' } },
    { house: 10, effect: { en: 'Strong placement. Career rises through aesthetic or relational skills — politics, diplomacy, hospitality leadership, fashion-house head, cinema direction.', hi: 'बलवान स्थिति। सौन्दर्यपरक अथवा सम्बन्धपरक कौशलों से करियर उन्नति — राजनीति, राजनयिकता, आतिथ्य नेतृत्व, फ़ैशन-हाउस प्रमुख, सिनेमा निर्देशन।' } },
    { house: 11, effect: { en: 'Strong income placement. Earnings from women, luxury goods, art, weddings, beauty industry. Network of refined friends. Wishes for material comfort fulfilled.', hi: 'बलवान आय-स्थिति। महिलाओं, विलासिता वस्तुओं, कला, विवाह, सौन्दर्य उद्योग से कमाई। परिष्कृत मित्रों का नेटवर्क। भौतिक सुख की इच्छाएँ पूर्ण।' } },
    { house: 12, effect: { en: 'Strong placement (Vargottama). Foreign luxury, ashram refinement, hidden romantic life, spiritual aesthetics. Suits foreign-cinema professionals, monks of refined orders, perfumers.', hi: 'बलवान स्थिति (वर्गोत्तम)। विदेशी विलासिता, आश्रम परिष्कार, गुप्त प्रेम-जीवन, आध्यात्मिक सौन्दर्य। विदेशी-सिनेमा व्यावसायिक, परिष्कृत सम्प्रदायों के संन्यासी, इत्रकारों के अनुकूल।' } },
  ],

  antardashas: [
    {
      subRuler: 'Shukra',
      label: { en: 'Shukra–Shukra Antardasha', hi: 'शुक्र-शुक्र अन्तर्दशा' },
      duration: { en: 'About 3 years 4 months 0 days', hi: 'लगभग 3 वर्ष 4 माह 0 दिन' },
      effect: {
        en: `The longest opening sub-period of any mahadasha — over three years of pure Venus. Most natives report a major personal transformation in the first year: marriage if delayed, the deepening of an existing relationship, the discovery of a creative vocation, a residential upgrade with significant aesthetic emphasis, the acquisition of the dasha\'s first major piece of jewellery or art. Income from creative work expands. Social life broadens. Personal style matures. The window is also the most romantically charged sub-period of the entire twenty years; the relationships begun here often define the dasha\'s remaining nineteen years.`,
        hi: `किसी भी महादशा का सबसे लम्बा प्रारम्भिक उप-काल — तीन वर्ष से अधिक का शुद्ध शुक्र। अधिकांश जातक प्रथम वर्ष में बड़ा व्यक्तिगत रूपान्तरण रिपोर्ट करते हैं: यदि विलम्बित हो तो विवाह, विद्यमान सम्बन्ध की गहराई, रचनात्मक व्यवसाय की खोज, उल्लेखनीय सौन्दर्य-केन्द्रित आवासीय उन्नयन, दशा के प्रथम प्रमुख आभूषण अथवा कला-वस्तु का अधिग्रहण। रचनात्मक कार्य से आय विस्तार। सामाजिक जीवन व्यापक। व्यक्तिगत शैली परिपक्व। यह खण्ड सम्पूर्ण बीस वर्षों का सर्वाधिक प्रेममय रूप से आवेशित उप-काल भी है; यहाँ आरम्भ हुए सम्बन्ध प्रायः दशा के शेष उन्नीस वर्ष परिभाषित करते हैं।`,
      },
    },
    {
      subRuler: 'Surya',
      label: { en: 'Shukra–Surya Antardasha', hi: 'शुक्र-सूर्य अन्तर्दशा' },
      duration: { en: 'About 1 year 0 months 0 days', hi: 'लगभग 1 वर्ष 0 माह 0 दिन' },
      effect: {
        en: `Sun and Venus are enemies in classical Naisargika Maitri; this brief one-year sub-period is the dasha\'s most authority-tested window. Conflicts can arise between the native\'s pleasure-oriented choices and authority figures (boss, father, government). Career visibility is mixed: public recognition possible but with friction. Marriage if not yet finalised may face delays this year. Health-wise, eye and heart sensitivity for women natives, prostate concerns for older male natives. The remedy is restraint — defer major luxury purchases by twelve months, avoid public conflict with authority, maintain Aditya Hridaya recitation through the year.`,
        hi: `नैसर्गिक मैत्री में सूर्य और शुक्र शत्रु हैं; यह संक्षिप्त एक-वर्षीय उप-काल दशा का सर्वाधिक अधिकार-परीक्षित खण्ड है। जातक के भोग-केन्द्रित विकल्पों और अधिकारी व्यक्तियों (अधिकारी, पिता, शासन) के बीच टकराव उठ सकते हैं। करियर दृश्यता मिश्रित: सार्वजनिक मान्यता सम्भव किन्तु संघर्ष के साथ। यदि विवाह अभी अन्तिम नहीं हुआ हो तो इस वर्ष विलम्ब सम्भव। स्वास्थ्य की दृष्टि से महिला जातकों के लिए नेत्र एवं हृदय संवेदनशीलता, वरिष्ठ पुरुष जातकों के लिए प्रोस्टेट चिन्ताएँ। उपाय है संयम — बड़े विलासिता क्रय बारह माह स्थगित करें, अधिकार से सार्वजनिक टकराव से बचें, पूरे वर्ष आदित्य हृदय पाठ बनाये रखें।`,
      },
    },
    {
      subRuler: 'Chandra',
      label: { en: 'Shukra–Chandra Antardasha', hi: 'शुक्र-चन्द्र अन्तर्दशा' },
      duration: { en: 'About 1 year 8 months 0 days', hi: 'लगभग 1 वर्ष 8 माह 0 दिन' },
      effect: {
        en: `Venus and Moon are neutrals but together one of the dasha\'s most family-oriented sub-periods. The aesthetic of home matures: a residential renovation, a major furniture or art acquisition, the consolidation of family wealth around a beautiful primary residence. Mother and daughter both become meaningful presences. Conception is highly favourable in this window — many of the dasha\'s births occur here. Public reception of the native\'s creative work is warm. Health-wise, gentle. The risk pattern: emotional indulgence — over-spending on home and pleasure, weight gain through rich food, romantic attachment to comfort. Maintain mild balance and the antardasha gives the dasha\'s most settled domestic chapter.`,
        hi: `शुक्र और चन्द्र तटस्थ हैं किन्तु साथ में दशा के सर्वाधिक पारिवारिक उप-कालों में से एक। गृह का सौन्दर्य परिपक्व होता है: आवासीय नवीकरण, बड़ा फ़र्नीचर अथवा कला-अधिग्रहण, सुन्दर मुख्य निवास के चारों ओर पारिवारिक धन का सुदृढ़ीकरण। माता एवं पुत्री दोनों अर्थपूर्ण उपस्थिति बनती हैं। इस खण्ड में गर्भधारण अति-अनुकूल — दशा के अनेक जन्म यहीं होते हैं। जातक के रचनात्मक कार्य की सार्वजनिक स्वीकार्यता उष्ण। स्वास्थ्य कोमल। जोखिम-स्वरूप: भावनात्मक भोग — गृह एवं आनन्द पर अति-व्यय, समृद्ध भोजन से भार-वृद्धि, सुख के प्रति प्रेम-आसक्ति। मध्यम संतुलन बनाये रखें और अन्तर्दशा दशा का सर्वाधिक स्थिर घरेलू अध्याय देती है।`,
      },
    },
    {
      subRuler: 'Mangal',
      label: { en: 'Shukra–Mangal Antardasha', hi: 'शुक्र-मंगल अन्तर्दशा' },
      duration: { en: 'About 1 year 2 months 0 days', hi: 'लगभग 1 वर्ष 2 माह 0 दिन' },
      effect: {
        en: `Venus and Mars are neutrals; the combination of beauty and decisive action produces some of the dasha\'s sharpest creative output and most physical romance. Property purchase with strong aesthetic emphasis, a fitness goal achieved with style, recognition for performance arts that combine athleticism (dance, classical martial arts), a passionate phase in marriage. Risk pattern: passionate decisions made too fast — engagement, property, expensive vehicles. Pause for a week before signing major commitments in this antardasha; the energy is real but the decisions made under it can outlast the antardasha by decades.`,
        hi: `शुक्र और मंगल तटस्थ हैं; सौन्दर्य एवं निर्णायक कर्म का संयोजन दशा का सबसे तीक्ष्ण रचनात्मक उत्पादन एवं सबसे शारीरिक प्रेम देता है। प्रबल सौन्दर्य-केन्द्रित सम्पत्ति-क्रय, शैली के साथ स्वास्थ्य-लक्ष्य प्राप्ति, खेल-कला (नृत्य, शास्त्रीय युद्ध-कला) में मान्यता, विवाह में भावुक चरण। जोखिम-स्वरूप: बहुत तीव्र किए गए भावुक निर्णय — मँगनी, सम्पत्ति, महँगे वाहन। इस अन्तर्दशा में बड़ी प्रतिबद्धताओं पर हस्ताक्षर से पूर्व एक सप्ताह रुकें; ऊर्जा वास्तविक है किन्तु इसके अधीन लिए गए निर्णय अन्तर्दशा के दशकों बाद भी रह सकते हैं।`,
      },
    },
    {
      subRuler: 'Rahu',
      label: { en: 'Shukra–Rahu Antardasha', hi: 'शुक्र-राहु अन्तर्दशा' },
      duration: { en: 'About 3 years 0 months 0 days', hi: 'लगभग 3 वर्ष 0 माह 0 दिन' },
      effect: {
        en: `Venus and Rahu are friends; this is one of the dasha\'s most expansive material windows. Foreign travel, foreign income from creative work, unconventional partnerships, technology-enabled creative platforms (cinema, fashion, design houses, content empires) all flourish. Income from luxury, foreign trade, jewellery, real estate, and the wedding economy can multiply in these three years. Risk patterns: extramarital attractions, debt-funded luxury acquisitions, intoxication and addiction patterns, social-media or platform-driven over-exposure. The native\'s lifestyle visibly inflates; ensure substance keeps pace with style. Many of the dasha\'s biggest reputations and largest income accumulations occur here; many of the dasha\'s biggest mistakes also do.`,
        hi: `शुक्र और राहु मित्र हैं; यह दशा के सर्वाधिक विस्तारकारी भौतिक खण्डों में से एक है। विदेश यात्रा, रचनात्मक कार्य से विदेशी आय, अपरम्परागत साझेदारियाँ, प्रौद्योगिकी-समर्थित रचनात्मक मंच (सिनेमा, फ़ैशन, डिज़ाइन हाउस, कन्टेन्ट साम्राज्य) — सब फलते हैं। विलासिता, विदेशी व्यापार, आभूषण, अचल सम्पत्ति, और विवाह अर्थव्यवस्था से आय इन तीन वर्षों में बहुगुणित हो सकती है। जोखिम-स्वरूप: विवाहेतर आकर्षण, ऋण-वित्त-पोषित विलासिता अधिग्रहण, मादक एवं व्यसन-स्वरूप, सोशल-मीडिया अथवा मंच-प्रेरित अति-अनावरण। जातक की जीवन-शैली दृश्य रूप से फूल जाती है; सुनिश्चित करें कि सार शैली के साथ रहे। दशा की अनेक सबसे बड़ी प्रतिष्ठाएँ एवं सबसे बड़े आय-संचय यहीं होते हैं; दशा की अनेक सबसे बड़ी ग़लतियाँ भी।`,
      },
    },
    {
      subRuler: 'Guru',
      label: { en: 'Shukra–Guru Antardasha', hi: 'शुक्र-गुरु अन्तर्दशा' },
      duration: { en: 'About 2 years 8 months 0 days', hi: 'लगभग 2 वर्ष 8 माह 0 दिन' },
      effect: {
        en: `Venus and Jupiter are technically enemies in Naisargika Maitri but operationally one of the dasha\'s most ethically anchored sub-periods. Marriage if delayed, conception, the founding of a refined business with dharmic underpinnings (a school, a publishing house, a cultural institution), the resolution of long-pending family-property matters, recognition in classical arts. Wealth grows through legitimate channels. Children\'s education advances. Health-wise, weight gain reported (Jupiter expands what Venus already softens); maintain movement and dietary balance.`,
        hi: `नैसर्गिक मैत्री में शुक्र और गुरु तकनीकी रूप से शत्रु हैं किन्तु व्यावहारिक रूप से दशा के सर्वाधिक नैतिक रूप से आधारित उप-कालों में से एक। यदि विलम्बित हो तो विवाह, गर्भधारण, धार्मिक आधार वाले परिष्कृत व्यवसाय की स्थापना (विद्यालय, प्रकाशन गृह, सांस्कृतिक संस्था), दीर्घ-लम्बित पारिवारिक-सम्पत्ति मामलों का समाधान, शास्त्रीय कला में मान्यता। वैध मार्गों से धन बढ़ता है। सन्तानों की शिक्षा अग्रसर होती है। स्वास्थ्य की दृष्टि से भार-वृद्धि की रिपोर्ट (गुरु उसका विस्तार करते हैं जिसे शुक्र पहले से कोमल करते हैं); गति एवं आहार संतुलन बनाये रखें।`,
      },
    },
    {
      subRuler: 'Shani',
      label: { en: 'Shukra–Shani Antardasha', hi: 'शुक्र-शनि अन्तर्दशा' },
      duration: { en: 'About 3 years 2 months 0 days', hi: 'लगभग 3 वर्ष 2 माह 0 दिन' },
      effect: {
        en: `Venus and Saturn are mutually friendly; this longer sub-period delivers the dasha\'s most consolidating material chapter. Long-term contracts in creative or luxury industries, the formal registration of property purchased earlier in the dasha, the maturation of a long-running creative project, recognition for sustained work rather than glamorous launches. The classical caveat is significant: Venus-Saturn together can produce relationships of considerable age or status difference, second marriages, or bonds with someone the family did not initially approve. Both partners typically carry karmic weight into the bond, and the dasha tends to make those bonds far stickier than expected. Maintain dharmic balance; the antardasha rewards the work patiently rather than the short-term pleasure.`,
        hi: `शुक्र और शनि परस्पर मित्र हैं; यह दीर्घ उप-काल दशा का सर्वाधिक सुदृढ़ीकरण-कारी भौतिक अध्याय देता है। रचनात्मक अथवा विलासिता उद्योगों में दीर्घकालिक अनुबन्ध, दशा में पूर्व क्रय की गई सम्पत्ति का औपचारिक पंजीकरण, दीर्घ-चली रचनात्मक परियोजना की परिपक्वता, ग्लैमरस प्रक्षेपणों के बजाय निरन्तर कार्य के लिए मान्यता। शास्त्रीय चेतावनी महत्त्वपूर्ण है: शुक्र-शनि साथ में आयु अथवा स्थिति में उल्लेखनीय अन्तर वाले सम्बन्ध, द्वितीय विवाह, अथवा उस व्यक्ति से बन्धन उत्पन्न कर सकते हैं जिसे परिवार ने आरम्भ में स्वीकृति नहीं दी। दोनों पक्ष प्रायः इस बन्धन में कर्म-भार लाते हैं, और दशा उन बन्धनों को अपेक्षा से कहीं अधिक चिपकाऊ बना देती है। धार्मिक संतुलन बनाये रखें; अन्तर्दशा अल्पकालिक आनन्द के बजाय कार्य को धैर्यपूर्वक पुरस्कृत करती है।`,
      },
    },
    {
      subRuler: 'Budh',
      label: { en: 'Shukra–Budh Antardasha', hi: 'शुक्र-बुध अन्तर्दशा' },
      duration: { en: 'About 2 years 10 months 0 days', hi: 'लगभग 2 वर्ष 10 माह 0 दिन' },
      effect: {
        en: `Venus and Mercury are friends; this is the dasha\'s most cognitively articulate sub-period. Writing, design, advertising, content production, online business, luxury retail, and hospitality management all flourish. Many of the dasha\'s biggest individual income inflections occur in this window. Communication-driven careers reach a peak. The risk pattern is over-commitment under cognitive enthusiasm — Mercury under Venus inflates Venus\'s pleasure-orientation into excessive deal-making, brand collaborations, or luxury investments that look attractive on first reading but become unsustainable. Document; verify; pause before signing.`,
        hi: `शुक्र और बुध मित्र हैं; यह दशा का सर्वाधिक संज्ञानात्मक रूप से अभिव्यक्त उप-काल है। लेखन, डिज़ाइन, विज्ञापन, कन्टेन्ट निर्माण, ऑनलाइन व्यवसाय, विलासिता खुदरा, और आतिथ्य प्रबन्धन — सब फलते हैं। दशा के अनेक सबसे बड़े व्यक्तिगत आय-मोड़ इसी खण्ड में होते हैं। सम्वाद-केन्द्रित करियर शिखर पर पहुँचते हैं। जोखिम-स्वरूप है — संज्ञानात्मक उत्साह में अति-प्रतिबद्धता — शुक्र के अधीन बुध शुक्र की भोग-वृत्ति को अति-सौदा, ब्रान्ड सहयोग, अथवा विलासिता निवेश में बढ़ा देते हैं जो प्रथम पाठ में आकर्षक लगते हैं किन्तु निभाने में कठिन। प्रलेख रखें; सत्यापन करें; हस्ताक्षर से पूर्व रुकें।`,
      },
    },
    {
      subRuler: 'Ketu',
      label: { en: 'Shukra–Ketu Antardasha', hi: 'शुक्र-केतु अन्तर्दशा' },
      duration: { en: 'About 1 year 2 months 0 days', hi: 'लगभग 1 वर्ष 2 माह 0 दिन' },
      effect: {
        en: `Closing the twenty years. Ketu cuts what Venus accumulated. Brief detachment from a long-running pleasure attachment — a luxury habit drops naturally, a romantic attachment dissolves, a creative role gets handed over, a beloved possession is given away or lost. Many natives describe this as the dasha\'s most clarifying chapter — the question "what did I actually need from these twenty years" surfaces and gets answered. Health-wise, brief urinary or kidney issues possible. The closing months prepare the handover to Sun mahadasha; many natives report that the public role they will assume in Sun mahadasha takes shape mentally during this final Venus–Ketu window. Use the year for review and graceful handover rather than for new luxury commitments.`,
        hi: `बीस वर्षों का अन्त। केतु उसे काटते हैं जो शुक्र ने संचित किया। दीर्घ-चली भोग-आसक्ति से संक्षिप्त विरक्ति — कोई विलासिता आदत स्वाभाविक रूप से छूटती है, प्रेम-आसक्ति विघटित होती है, रचनात्मक भूमिका सौंपी जाती है, प्रिय वस्तु दे दी जाती है अथवा खो जाती है। अनेक जातक इसे दशा के सर्वाधिक स्पष्ट करने वाले अध्याय के रूप में वर्णित करते हैं — प्रश्न "इन बीस वर्षों से मुझे वस्तुतः क्या चाहिए था" उभरता है और उत्तरित होता है। स्वास्थ्य की दृष्टि से संक्षिप्त मूत्र अथवा वृक्क समस्याएँ सम्भव। अन्तिम मास सूर्य महादशा को सुपुर्दगी की तैयारी करते हैं; अनेक जातक रिपोर्ट करते हैं कि सूर्य महादशा में जो सार्वजनिक भूमिका वे लेंगे — वह मानसिक रूप से इसी अन्तिम शुक्र-केतु खण्ड में आकार लेती है। नये विलासिता प्रतिबद्धताओं के बजाय वर्ष का उपयोग समीक्षा एवं सुरुचि-पूर्ण सुपुर्दगी के लिए करें।`,
      },
    },
  ],

  remedies: [
    {
      title: { en: 'Mantra Recitation', hi: 'मन्त्र जप' },
      body: {
        en: `Lakshmi worship is the most accessible Venus practice. Daily Shri Suktam (Rig Veda, fifteen verses, recited at dawn or dusk) is the foundation. Lay alternatives are the Shri Mahalakshmi Ashtakam, the Kanakadhara Stotra (composed by Adi Shankaracharya, particularly powerful for material prosperity remedies), the Lalita Sahasranama (recited on Fridays), or the Shukra Beej Mantra (Om Draam Dreem Draum Sah Shukraya Namah, 16,000 recitations across forty days). White or crystal rosary is preferred. Recitation is most effective on Friday at dawn or in the early evening, in a clean space with a small Lakshmi or Mahalakshmi murti present. Donations of milk, white sweets, or fragrant flowers after recitation amplify the practice.`,
        hi: `लक्ष्मी पूजन सर्वाधिक सुलभ शुक्र अभ्यास है। दैनिक श्री सूक्त (ऋग्वेद, पन्द्रह श्लोक, उषाकाल अथवा सायंकाल पाठ) आधार है। जन-विधियाँ हैं — श्री महालक्ष्मी अष्टकम्, कनकधारा स्तोत्र (आदि शंकराचार्य रचित, भौतिक समृद्धि उपायों हेतु विशेष शक्तिशाली), ललिता सहस्रनाम (शुक्रवार पाठ), अथवा शुक्र बीज मन्त्र (ॐ द्रां द्रीं द्रौं सः शुक्राय नमः, चालीस दिनों में 16,000 जप)। श्वेत अथवा स्फटिक माला श्रेष्ठ। जप शुक्रवार उषाकाल अथवा प्रारम्भिक सायं में, स्वच्छ स्थान में जहाँ छोटी लक्ष्मी अथवा महालक्ष्मी मूर्ति हो — सर्वाधिक प्रभावी। जप के पश्चात् दूध, श्वेत मिष्ठान्न, अथवा सुगन्धित पुष्पों का दान अभ्यास को बढ़ाता है।`,
      },
    },
    {
      title: { en: 'Diamond (Heera) and alternatives', hi: 'हीरा एवं विकल्प' },
      body: {
        en: `Diamond is Venus\'s gem and one of the gentlest of the major Jyotish stones — adverse reactions are rare. Half a carat minimum (Diamond delivers high energy per carat), set in platinum or white gold (silver acceptable), middle finger of the right hand, energised on a Friday in Shukla paksha at sunset with the Shukra beej mantra. Quality matters more than size; cloudy or heavily included diamonds carry distorted Venus energy. Lab-grown diamonds are accepted in modern practice. Do not pair Diamond with Ruby (Sun-Venus enmity) or Cat\'s Eye. For natives who cannot afford Diamond, White Sapphire is the classical substitute and works almost identically; Zircon and Crystal are budget alternatives. Wear during the dasha for sustained Venus support; remove during Shukra-Surya antardasha as the Sun-Venus tension intensifies.`,
        hi: `हीरा शुक्र का रत्न है और प्रमुख ज्योतिष रत्नों में सबसे कोमल — प्रतिकूल प्रतिक्रियाएँ विरले। न्यूनतम आधा रत्ती (हीरा प्रति रत्ती उच्च ऊर्जा देता है), प्लैटिनम अथवा श्वेत स्वर्ण में (चाँदी स्वीकार्य), दाहिने हाथ की मध्यमा, शुक्ल पक्ष के शुक्रवार को सूर्यास्त पर शुक्र बीज मन्त्र से अभिमन्त्रित। गुणवत्ता आकार से अधिक मायने रखती है; धुँधले अथवा अधिक अन्तर्निविष्ट हीरे विकृत शुक्र-ऊर्जा वहन करते हैं। प्रयोगशाला-निर्मित हीरे आधुनिक प्रथा में स्वीकार्य। हीरे को माणिक्य (सूर्य-शुक्र शत्रुता) अथवा लहसुनिया के साथ न पहनें। हीरा सम्भव न हो तो श्वेत पुखराज शास्त्रीय विकल्प है और लगभग समान कार्य करता है; ज़िरकॉन एवं क्रिस्टल बजट विकल्प। निरन्तर शुक्र-समर्थन हेतु पूरी दशा में पहनें; शुक्र-सूर्य अन्तर्दशा में निकाल दें क्योंकि सूर्य-शुक्र तनाव तीव्र होता है।`,
      },
    },
    {
      title: { en: 'Daana (Donation)', hi: 'दान' },
      body: {
        en: `Venus rules women, beauty, marriage, art, and the comfort of life. Donation in Shukra\'s name reaches widows, single mothers, women\'s creative collectives, brides from poor families (sponsoring weddings is classical Venus daana), classical arts schools, and music and dance institutions. Rice with kheer, white sweets, white flowers, perfume, silk cloth, silver, and donations toward bridal trousseau or wedding expenses for poor brides are classical Venus daana. Friday at dawn or dusk is the prescribed time. The deeper Venus daana is the cultivation of beauty in the world — sponsoring an arts class for poor children, planting a garden in a public space, supporting a struggling artist with steady patronage rather than a one-time gift. Venus rewards sustained beauty far more than transactional charity.`,
        hi: `शुक्र महिलाओं, सौन्दर्य, विवाह, कला, और जीवन के सुख पर शासन करते हैं। शुक्र के नाम पर दान विधवाओं, एकल माताओं, महिला रचनात्मक समूहों, निर्धन परिवारों की वधुओं (विवाह-प्रायोजन शास्त्रीय शुक्र-दान है), शास्त्रीय कला विद्यालयों, और संगीत-नृत्य संस्थाओं तक पहुँचना चाहिए। खीर सहित चावल, श्वेत मिष्ठान्न, श्वेत पुष्प, इत्र, रेशमी वस्त्र, चाँदी, और निर्धन वधुओं के दहेज अथवा विवाह-व्यय के लिए दान शास्त्रीय शुक्र-दान हैं। शुक्रवार उषाकाल अथवा सायंकाल विहित समय। गहरा शुक्र-दान है — संसार में सौन्दर्य की खेती — निर्धन बच्चों के लिए कला-कक्षा का प्रायोजन, सार्वजनिक स्थान में उद्यान-रोपण, संघर्षरत कलाकार को एक-बारगी उपहार के बजाय निरन्तर संरक्षण से सहयोग। शुक्र निरन्तर सौन्दर्य को लेन-देन से कहीं अधिक पुरस्कृत करते हैं।`,
      },
    },
    {
      title: { en: 'Vrata (Observance)', hi: 'व्रत' },
      body: {
        en: `The Shukravar Vrat (Friday fast) is the standard Venus observance: a sunrise-to-sunset fast on Fridays, with phalahar permitted (fruits, white milk-based sweets, no salt or grains), breaking after Lakshmi aarti at sunset. Sixteen consecutive Fridays (Solah Shukravar) is the classical full cycle. The Varalakshmi Vrata (the Friday before Shravana Purnima in South India) is the year\'s most charged Lakshmi day; it is observed especially by married women for marital prosperity and family welfare. Diwali (Lakshmi Puja) and Akshaya Tritiya are the year\'s strongest material-prosperity days. Pilgrimage to a Lakshmi or Padmavati temple (Mahalakshmi Mumbai, Tirumala\'s Padmavati shrine, Kolhapur Mahalakshmi) once during the dasha is meritorious.`,
        hi: `शुक्रवार व्रत मानक शुक्र अनुष्ठान है: शुक्रवार को सूर्योदय से सूर्यास्त तक उपवास, फलाहार अनुमत (फल, श्वेत दुग्ध-आधारित मिष्ठान्न, नमक अथवा अनाज नहीं), सूर्यास्त पर लक्ष्मी आरती के पश्चात् व्रत-समाप्ति। सोलह क्रमिक शुक्रवार (सोलह शुक्रवार) शास्त्रीय पूर्ण चक्र। वरलक्ष्मी व्रत (दक्षिण भारत में श्रावण पूर्णिमा से पूर्व का शुक्रवार) वर्ष का सर्वाधिक आवेशित लक्ष्मी-दिन; इसे विशेषकर विवाहित महिलाएँ वैवाहिक समृद्धि एवं पारिवारिक कल्याण हेतु पालन करती हैं। दीपावली (लक्ष्मी पूजा) एवं अक्षय तृतीया वर्ष के सर्वाधिक प्रबल भौतिक-समृद्धि दिन। दशा के दौरान एक बार लक्ष्मी अथवा पद्मावती मन्दिर (मुम्बई महालक्ष्मी, तिरुमला का पद्मावती मन्दिर, कोल्हापुर महालक्ष्मी) की तीर्थयात्रा पुण्यप्रद।`,
      },
    },
    {
      title: { en: 'Lifestyle Adjustments', hi: 'जीवन-शैली समायोजन' },
      body: {
        en: `The Venus dasha rewards aesthetic discipline rather than aesthetic indulgence. Maintain personal grooming and a refined home. Eat well but moderately — Venus expands appetite for both food and pleasure, and uncontrolled expansion produces metabolic and relational complications. Daily Surya Namaskar or yoga maintains the body\'s muscular grace. Reduce alcohol, recreational drugs, and refined sugar — these distort Venus\'s natural elegance. Maintain marital boundaries actively; Venus tests them constantly across twenty years. Cultivate one classical art (music, dance, painting, calligraphy, gardening) for personal practice — not for performance, not for income. The classical arts are Venus\'s deepest gift, and twenty years of regular practice in one art produces a refinement that the dasha\'s material acquisitions cannot match. Avoid being seen as the most attractive person in any room; Venus rewards quiet refinement, not display.`,
        hi: `शुक्र की दशा सौन्दर्य-भोग के बजाय सौन्दर्य-अनुशासन को पुरस्कृत करती है। व्यक्तिगत साज-सज्जा एवं परिष्कृत गृह बनाये रखें। अच्छा किन्तु संयमित भोजन — शुक्र भोजन एवं आनन्द दोनों की भूख बढ़ाते हैं, और अनियन्त्रित विस्तार चयापचयी एवं सम्बन्धात्मक जटिलताएँ उत्पन्न करता है। दैनिक सूर्य नमस्कार अथवा योग शरीर की मांसपेशी-सुघड़ता बनाये रखता है। मद्य, मनोरंजनात्मक मादक, और परिष्कृत शर्करा कम करें — ये शुक्र की प्राकृतिक लालित्य को विकृत करते हैं। वैवाहिक सीमाओं को सक्रिय रूप से बनाये रखें; शुक्र बीस वर्षों भर इन्हें निरन्तर परखते हैं। एक शास्त्रीय कला (संगीत, नृत्य, चित्रकला, सुलेखन, बागवानी) का व्यक्तिगत अभ्यास हेतु संवर्द्धन करें — प्रदर्शन के लिए नहीं, आय के लिए नहीं। शास्त्रीय कलाएँ शुक्र का गहनतम उपहार हैं, और एक कला में बीस वर्ष का नियमित अभ्यास ऐसा परिष्कार उत्पन्न करता है जिसकी समता दशा के भौतिक अधिग्रहण नहीं कर सकते। किसी भी कक्ष में सर्वाधिक आकर्षक के रूप में देखे जाने से बचें; शुक्र शान्त परिष्कार को पुरस्कृत करते हैं, प्रदर्शन को नहीं।`,
      },
    },
  ],

  casePatterns: {
    en: `Three Shukra Mahadasha patterns recur in consultation. The first and most common is the marriage-and-prosperity chapter — twenty years of marriage, family, financial growth, creative output, and material consolidation in someone whose chart supports steady benevolent Venus. The second is the artist\'s chapter — common in writers, designers, performers, cinema and fashion professionals — where the dasha sees the native\'s creative voice mature into a recognisable signature, sometimes a famous one. The third is the indulgence chapter, common when Venus is afflicted: extramarital affairs, debt, addiction, divorce, and chronic dissatisfaction with comfortable circumstances. The third is the dasha\'s most painful pattern but also frequently the most generative once the native does the inner work — many of the deepest contemporary writers and contemplatives lived through afflicted Venus dashas and emerged with the discernment that thirty contented years could not have produced. Read the natal Venus, the seventh house and lord, and the second house and lord before deciding which pattern is most likely.`,
    hi: `परामर्श में तीन शुक्र महादशा स्वरूप पुनरावृत्त होते हैं। पहला और सर्वाधिक सामान्य विवाह-एवं-समृद्धि अध्याय — विवाह, परिवार, आर्थिक वृद्धि, रचनात्मक उत्पादन, और भौतिक सुदृढ़ीकरण के बीस वर्ष ऐसे जातक में जिसकी कुण्डली स्थिर परोपकारी शुक्र का समर्थन करती है। दूसरा कलाकार-अध्याय — लेखकों, डिज़ाइनरों, प्रदर्शकों, सिनेमा एवं फ़ैशन व्यावसायिकों में सामान्य — जहाँ दशा जातक के रचनात्मक स्वर को पहचाने जा सकने वाले हस्ताक्षर — कभी-कभी प्रसिद्ध — में परिपक्व होते देखती है। तीसरा भोग-अध्याय, पीड़ित शुक्र पर सामान्य: विवाहेतर सम्बन्ध, ऋण, व्यसन, विच्छेद, और सुखमय परिस्थितियों के प्रति दीर्घकालिक असन्तोष। तीसरा दशा का सर्वाधिक पीड़ापूर्ण स्वरूप किन्तु प्रायः सर्वाधिक सृजनात्मक भी — एक बार जातक आन्तरिक कार्य कर ले — अनेक गहन समकालीन लेखक एवं चिन्तनशील पीड़ित शुक्र दशाओं से गुज़रे और ऐसे विवेक के साथ निकले जो तीस सन्तुष्ट वर्ष नहीं दे सकते थे। कौन-सा स्वरूप सर्वाधिक सम्भाव्य है यह निर्धारित करने से पूर्व जन्म-शुक्र, सप्तम भाव एवं स्वामी, और द्वितीय भाव एवं स्वामी पढ़ें।`,
  },

  faqs: [
    {
      question: { en: 'Is Shukra Mahadasha good for marriage?', hi: 'क्या शुक्र महादशा विवाह के लिए शुभ है?' },
      answer: {
        en: `Among the seven planetary dashas, Shukra Mahadasha has the strongest correlation with marriage timing — Venus is the karaka of marriage, and his dasha is the period in which most natives with a delayed marriage finally marry. The strongest sub-periods for marriage are Shukra–Shukra (the long opening), Shukra–Jupiter (dharmic marriage), Shukra–Moon (family-blessed marriage), and Shukra–Mars (passionate marriage). Already-married natives experience a deepening or, if Venus is afflicted, a marital crisis that may end in divorce or second marriage. Read the natal seventh lord, Venus, and the second-from-Moon house before predicting either way.`,
        hi: `सात ग्रह-दशाओं में विवाह-समय से शुक्र महादशा का सर्वाधिक सम्बन्ध — शुक्र विवाह-कारक हैं, और उनकी दशा वह काल है जिसमें विलम्बित विवाह वाले अधिकांश जातक अन्ततः विवाह करते हैं। विवाह के लिए सबसे प्रबल उप-काल — शुक्र-शुक्र (दीर्घ प्रारम्भ), शुक्र-गुरु (धार्मिक विवाह), शुक्र-चन्द्र (परिवार-धन्य विवाह), और शुक्र-मंगल (भावुक विवाह)। पहले से विवाहित जातक — गहराई का अनुभव, अथवा यदि शुक्र पीड़ित हों — वैवाहिक संकट जो विच्छेद अथवा द्वितीय विवाह में समाप्त हो। किसी भी निष्कर्ष से पूर्व जन्म-कुण्डली के सप्तमेश, शुक्र, और चन्द्र-से-द्वितीय भाव पढ़ें।`,
      },
    },
    {
      question: { en: 'How long is Shukra Mahadasha?', hi: 'शुक्र महादशा कितने वर्ष की होती है?' },
      answer: {
        en: `Twenty calendar years (about 7,305 days) — the longest of the nine Vimshottari Mahadashas. Within these twenty years there are nine antardashas, the longest being Shukra–Shukra (3 years 4 months), Shukra–Saturn (3 years 2 months), and Shukra–Rahu (3 years); the shortest is Shukra–Sun at exactly one year.`,
        hi: `बीस कलैंडर वर्ष (लगभग 7,305 दिन) — नौ विंशोत्तरी महादशाओं में सबसे लम्बी। इन बीस वर्षों में नौ अन्तर्दशाएँ हैं — सबसे लम्बी शुक्र-शुक्र (3 वर्ष 4 माह), शुक्र-शनि (3 वर्ष 2 माह), और शुक्र-राहु (3 वर्ष); सबसे छोटी शुक्र-सूर्य ठीक एक वर्ष।`,
      },
    },
    {
      question: { en: 'Will I become wealthy in Shukra Mahadasha?', hi: 'क्या शुक्र महादशा में मैं धनी बनूँगा?' },
      answer: {
        en: `Wealth in Shukra Mahadasha tends to compound through legitimate creative or aesthetic work, real estate, women-related industries, hospitality, and luxury. The largest income inflections usually occur in Shukra–Shukra, Shukra–Rahu (foreign or unconventional gains), Shukra–Mercury (commercial), and Shukra–Jupiter (legitimate enterprise). If your natal Venus is well-placed and supports the second, fifth, ninth, or eleventh house, the dasha can multiply net worth several times over twenty years. If Venus is afflicted, expect lifestyle inflation that outpaces actual wealth — appearance of prosperity rather than substance. Track real income against lifestyle annually.`,
        hi: `शुक्र महादशा में धन वैध रचनात्मक अथवा सौन्दर्यपरक कार्य, अचल सम्पत्ति, महिला-सम्बन्धित उद्योगों, आतिथ्य, और विलासिता से चक्रवृद्धि होता है। सबसे बड़े आय-मोड़ प्रायः शुक्र-शुक्र, शुक्र-राहु (विदेशी अथवा अपरम्परागत लाभ), शुक्र-बुध (व्यापारिक), और शुक्र-गुरु (वैध उद्यम) में आते हैं। यदि आपका जन्म-शुक्र बलवान हो और दूसरे, पाँचवें, नवम, अथवा एकादश भाव का समर्थन करे — दशा कुल सम्पत्ति को बीस वर्षों में कई गुना कर सकती है। यदि शुक्र पीड़ित हों — वास्तविक सम्पत्ति से तीव्र जीवन-शैली स्फीति की अपेक्षा रखें — सार के बजाय समृद्धि का स्वरूप। प्रति वर्ष वास्तविक आय को जीवन-शैली के विरुद्ध मापें।`,
      },
    },
    {
      question: { en: 'Is Shukra Mahadasha good for childbirth?', hi: 'क्या शुक्र महादशा सन्तान-जन्म के लिए शुभ है?' },
      answer: {
        en: `Yes, especially favouring daughters. Shukra–Moon (family-tender), Shukra–Jupiter (dharmic blessing), and Shukra–Venus (the long opening) are the most fertile sub-periods. The natal fifth house and fifth lord must support; if those are afflicted, fertility treatments may still be needed within Shukra Mahadasha. For couples with delayed conception, beginning Santan Gopal mantra recitation in the opening Shukra–Shukra year and maintaining it through Shukra–Jupiter is a classical approach.`,
        hi: `हाँ, विशेषकर पुत्रियों के पक्ष में। शुक्र-चन्द्र (परिवार-कोमल), शुक्र-गुरु (धार्मिक आशीर्वाद), और शुक्र-शुक्र (दीर्घ प्रारम्भ) सर्वाधिक उर्वर उप-काल हैं। जन्म-कुण्डली के पंचम भाव एवं पंचमेश का समर्थन चाहिए; यदि वे पीड़ित हों — शुक्र महादशा में भी प्रजनन उपचार आवश्यक हो सकते हैं। विलम्बित गर्भधारण वाले दम्पत्ति प्रारम्भिक शुक्र-शुक्र वर्ष में सन्तान गोपाल मन्त्र जप आरम्भ करें और शुक्र-गुरु तक बनाये रखें — शास्त्रीय विधि।`,
      },
    },
    {
      question: { en: 'What career suits Shukra Mahadasha?', hi: 'शुक्र महादशा के लिए कौन-से व्यवसाय अनुकूल हैं?' },
      answer: {
        en: `Anything aesthetic or relational: hospitality, tourism, fashion, design, cinema, classical and contemporary arts, advertising, jewellery, automobiles (especially luxury), the wedding industry, real estate (luxury segment), perfumery, beauty and wellness, women\'s health, diplomacy, family law, and luxury retail. Software, accounting, and behind-the-scenes technical work are workable but rarely produce the dasha\'s signature flourishes — Venus rewards visible aesthetic mastery far more than invisible technical excellence.`,
        hi: `कुछ भी सौन्दर्यपरक अथवा सम्बन्धपरक: आतिथ्य, पर्यटन, फ़ैशन, डिज़ाइन, सिनेमा, शास्त्रीय एवं समकालीन कला, विज्ञापन, आभूषण, ऑटोमोबाइल (विशेषकर विलासिता), विवाह उद्योग, अचल सम्पत्ति (विलासिता खण्ड), इत्र, सौन्दर्य एवं कल्याण, महिला-स्वास्थ्य, राजनयिकता, पारिवारिक विधि, और विलासिता खुदरा। सॉफ़्टवेयर, लेखा, और पर्दे के पीछे के तकनीकी कार्य सध्य किन्तु इस दशा की विशिष्ट उपलब्धियाँ विरले देते हैं — शुक्र अदृश्य तकनीकी उत्कृष्टता से कहीं अधिक दृश्य सौन्दर्यपरक निपुणता को पुरस्कृत करते हैं।`,
      },
    },
    {
      question: { en: 'How to remedy a weak Venus in this dasha?', hi: 'इस दशा में निर्बल शुक्र का उपाय क्या है?' },
      answer: {
        en: `Five layered practices: (1) Daily Shri Suktam or Kanakadhara Stotra recitation; (2) Sixteen consecutive Friday fasts (Solah Shukravar Vrat); (3) Donation to widows, single mothers, women\'s creative collectives, or sponsorship of poor brides\' weddings — pick one Friday-pledge and keep it for the full twenty years; (4) Cultivate one classical art for personal practice (not performance); (5) Diamond or White Sapphire only after a competent jyotishi has confirmed compatibility. Combined practice transforms Venus\'s pleasure-orientation into refined contentment.`,
        hi: `पाँच स्तरित अभ्यास: (1) दैनिक श्री सूक्त अथवा कनकधारा स्तोत्र पाठ; (2) सोलह क्रमिक शुक्रवार व्रत (सोलह शुक्रवार व्रत); (3) विधवाओं, एकल माताओं, महिला रचनात्मक समूहों को दान, अथवा निर्धन वधुओं के विवाह का प्रायोजन — एक शुक्रवार-संकल्प चुनें और पूरे बीस वर्ष निभाएँ; (4) एक शास्त्रीय कला का व्यक्तिगत अभ्यास हेतु संवर्द्धन (प्रदर्शन के लिए नहीं); (5) हीरा अथवा श्वेत पुखराज केवल किसी सक्षम ज्योतिषी द्वारा अनुकूलता की पुष्टि के पश्चात्। संयुक्त अभ्यास शुक्र की भोग-वृत्ति को परिष्कृत सन्तोष में परिवर्तित करता है।`,
      },
    },
    {
      question: { en: 'Can Shukra Mahadasha cause divorce?', hi: 'क्या शुक्र महादशा से विच्छेद हो सकता है?' },
      answer: {
        en: `Afflicted Venus during Shukra Mahadasha is a leading astrological correlate of divorce or extended marital separation in modern Indian charts, particularly when the natal seventh lord is also afflicted and the dasha\'s difficult sub-periods (Shukra–Sun, Shukra–Saturn) coincide with Saturn\'s transit over the natal seventh house. The dasha does not "cause" divorce; it activates pre-existing chart configurations that were going to surface eventually. The remedy is honest pre-marital chart matching, sustained Lakshmi practice, ethical fidelity (Venus rewards refined boundaries), and if marriage is genuinely failing, professional counselling alongside astrological remedies. Do not handle marital crisis with mantra alone.`,
        hi: `आधुनिक भारतीय कुण्डलियों में शुक्र महादशा के दौरान पीड़ित शुक्र विच्छेद अथवा विस्तारित वैवाहिक विछोह के अग्रणी ज्योतिष-सम्बन्धी हैं, विशेषकर जब जन्म-कुण्डली के सप्तमेश भी पीड़ित हों और दशा के कठिन उप-काल (शुक्र-सूर्य, शुक्र-शनि) जन्म-कुण्डली के सप्तम भाव पर शनि के गोचर से संयोग करें। दशा विच्छेद "नहीं कराती"; वह पूर्व-विद्यमान कुण्डली विन्यासों को सक्रिय करती है जो अन्ततः उभरने वाले थे। उपाय हैं ईमानदार पूर्व-विवाह कुण्डली मिलान, निरन्तर लक्ष्मी अभ्यास, नैतिक निष्ठा (शुक्र परिष्कृत सीमाओं को पुरस्कृत करते हैं), और यदि विवाह वस्तुतः असफल हो रहा हो — ज्योतिष-उपायों के समानान्तर व्यावसायिक परामर्श। केवल मन्त्र से वैवाहिक संकट को न सम्भालें।`,
      },
    },
    {
      question: { en: 'Should I start a luxury business in Shukra Mahadasha?', hi: 'क्या शुक्र महादशा में विलासिता व्यवसाय आरम्भ करूँ?' },
      answer: {
        en: `Shukra Mahadasha is the strongest dasha in the Vimshottari cycle for launching luxury, hospitality, fashion, jewellery, real-estate luxury, wedding industry, classical-arts platforms, and beauty businesses. The strongest launch sub-periods within the dasha are Shukra–Shukra (the long opening), Shukra–Jupiter (dharmic legitimacy), Shukra–Mercury (commercial scaling), and Shukra–Rahu (foreign or unconventional expansion). Avoid speculative or compromise-laden ventures in Shukra–Sun. Read the natal tenth and eleventh houses alongside Venus to confirm whether the chart\'s career direction aligns with the business you intend to launch.`,
        hi: `विंशोत्तरी चक्र में विलासिता, आतिथ्य, फ़ैशन, आभूषण, अचल सम्पत्ति विलासिता, विवाह उद्योग, शास्त्रीय-कला मंच, और सौन्दर्य व्यवसायों के प्रक्षेपण के लिए शुक्र महादशा सबसे प्रबल दशा है। दशा के भीतर सबसे प्रबल प्रक्षेपण उप-काल — शुक्र-शुक्र (दीर्घ प्रारम्भ), शुक्र-गुरु (धार्मिक वैधता), शुक्र-बुध (व्यापारिक मापन), और शुक्र-राहु (विदेशी अथवा अपरम्परागत विस्तार)। शुक्र-सूर्य में सट्टा अथवा समझौता-युक्त उद्यमों से बचें। जो व्यवसाय प्रक्षेपित करना चाहते हैं वह कुण्डली की करियर-दिशा के अनुरूप है या नहीं — पुष्टि हेतु जन्म-कुण्डली में दशम एवं एकादश भाव शुक्र के साथ पढ़ें।`,
      },
    },
  ],

  howToSteps: [
    {
      name: { en: 'Generate your dasha timeline', hi: 'अपनी दशा समय-रेखा बनाएँ' },
      text: {
        en: 'Enter your date, time, and place of birth into the Mahadasha Calculator. The full 120-year sequence reveals exactly when your Shukra Mahadasha begins and which antardashas you will run within those twenty years.',
        hi: 'महादशा कैलकुलेटर में अपनी जन्म तिथि, समय, और स्थान दर्ज करें। पूर्ण 120 वर्ष का क्रम दिखाएगा कि शुक्र महादशा कब आरम्भ होगी और इन बीस वर्षों में कौन-सी अन्तर्दशाएँ चलेंगी।',
      },
    },
    {
      name: { en: 'Locate Venus in your natal chart', hi: 'जन्म कुण्डली में शुक्र की स्थिति देखें' },
      text: {
        en: 'Find Venus\'s house, sign, conjunct planets, and aspects from Sun, Saturn, or Rahu. Venus in own signs (Taurus, Libra), exalted in Pisces, in second, fourth, seventh, or twelfth delivers the dasha\'s textbook prosperity. Venus debilitated in Virgo, combust under Sun within ten degrees, or in dusthana requires active remedy.',
        hi: 'शुक्र का भाव, राशि, साथ के ग्रह, और सूर्य, शनि, अथवा राहु से दृष्टि देखें। स्वराशि (वृष, तुला) में, उच्च मीन में, दूसरे, चतुर्थ, सप्तम, अथवा द्वादश में बलवान शुक्र दशा की पाठ्य समृद्धि देते हैं। कन्या में नीच के, सूर्य से दस अंश के भीतर अस्त, अथवा दुस्थानगत शुक्र सक्रिय उपाय की माँग करते हैं।',
      },
    },
    {
      name: { en: 'Read the dasha as four chapters', hi: 'दशा को चार अध्यायों के रूप में पढ़ें' },
      text: {
        en: 'Twenty years is too long to read flat. Group antardashas into four chapters of about five years each: aesthetic and authority (Shukra–Shukra + Shukra–Sun), family and decisive action (Shukra–Moon + Shukra–Mars), expansive financial and dharmic (Shukra–Rahu + Shukra–Jupiter), consolidation and handover (Shukra–Saturn + Shukra–Mercury + Shukra–Ketu). Plan the dasha\'s major commitments by chapter rather than by individual antardasha.',
        hi: 'बीस वर्ष समतल पढ़ने के लिए बहुत लम्बे हैं। अन्तर्दशाओं को लगभग पाँच-पाँच वर्ष के चार अध्यायों में समूहित करें: सौन्दर्य एवं अधिकार (शुक्र-शुक्र + शुक्र-सूर्य), परिवार एवं निर्णायक कर्म (शुक्र-चन्द्र + शुक्र-मंगल), विस्तारकारी आर्थिक एवं धार्मिक (शुक्र-राहु + शुक्र-गुरु), सुदृढ़ीकरण एवं सुपुर्दगी (शुक्र-शनि + शुक्र-बुध + शुक्र-केतु)। दशा की प्रमुख प्रतिबद्धताएँ व्यक्तिगत अन्तर्दशा के बजाय अध्याय द्वारा नियोजित करें।',
      },
    },
    {
      name: { en: 'Build daily Lakshmi practice', hi: 'दैनिक लक्ष्मी अभ्यास बनाएँ' },
      text: {
        en: 'The single most reliable Shukra Mahadasha practice is daily Shri Suktam or Kanakadhara Stotra recitation. Sustained for the full twenty years, this practice transforms Venus\'s pleasure-orientation into refined contentment. Sixteen consecutive Friday fasts and a Friday-pledge of donation to women in need amplify the result.',
        hi: 'सबसे विश्वसनीय शुक्र महादशा अभ्यास है दैनिक श्री सूक्त अथवा कनकधारा स्तोत्र पाठ। पूरे बीस वर्ष बनाये रखने पर यह अभ्यास शुक्र की भोग-वृत्ति को परिष्कृत सन्तोष में परिवर्तित करता है। सोलह क्रमिक शुक्रवार व्रत और आवश्यकता में पड़ी महिलाओं को शुक्रवार-दान संकल्प परिणाम को बहुगुणित करते हैं।',
      },
    },
    {
      name: { en: 'Time major commitments to favourable sub-periods', hi: 'प्रमुख प्रतिबद्धताओं का समय अनुकूल उप-कालों में रखें' },
      text: {
        en: 'For marriage, target Shukra–Shukra, Shukra–Jupiter, or Shukra–Moon. For luxury business launch, target Shukra–Shukra or Shukra–Mercury. For property purchase, target Shukra–Saturn or Shukra–Jupiter. For creative recognition, target Shukra–Mars or Shukra–Mercury. Defer major commitments during Shukra–Sun and Shukra–Ketu — both are reset windows rather than launch windows.',
        hi: 'विवाह के लिए — शुक्र-शुक्र, शुक्र-गुरु, अथवा शुक्र-चन्द्र। विलासिता व्यवसाय प्रक्षेपण के लिए — शुक्र-शुक्र अथवा शुक्र-बुध। सम्पत्ति-क्रय के लिए — शुक्र-शनि अथवा शुक्र-गुरु। रचनात्मक मान्यता के लिए — शुक्र-मंगल अथवा शुक्र-बुध। शुक्र-सूर्य और शुक्र-केतु में प्रमुख प्रतिबद्धताएँ स्थगित करें — दोनों प्रक्षेपण के बजाय पुनर्स्थापन खण्ड हैं।',
      },
    },
    {
      name: { en: 'Cultivate one classical art', hi: 'एक शास्त्रीय कला का संवर्द्धन करें' },
      text: {
        en: 'The deepest amplifier of a Shukra Mahadasha is one classical art (music, dance, painting, calligraphy, gardening) practised continuously for personal refinement — not for performance, not for income. Twenty years of daily practice in one art produces a quality that the dasha\'s acquisitions cannot match. The art becomes the dasha\'s most lasting legacy when the next mahadasha (Sun) arrives.',
        hi: 'शुक्र महादशा का गहनतम बढ़ाने वाला तत्त्व है — एक शास्त्रीय कला (संगीत, नृत्य, चित्रकला, सुलेखन, बागवानी) जिसका निरन्तर अभ्यास व्यक्तिगत परिष्कार के लिए हो — प्रदर्शन के लिए नहीं, आय के लिए नहीं। एक कला में बीस वर्ष का दैनिक अभ्यास ऐसी गुणवत्ता उत्पन्न करता है जिसकी समता दशा के अधिग्रहण नहीं कर सकते। अगली महादशा (सूर्य) आने पर कला दशा की सर्वाधिक स्थायी विरासत बनती है।',
      },
    },
  ],

  datePublished: '2026-05-02',
  dateModified: '2026-05-02',
};
