import type { PlanetRecord } from '../types';

export const RAHU: PlanetRecord = {
  slug: 'rahu',
  displayName: { en: 'Rahu Mahadasha', hi: 'राहु महादशा' },
  westernName: 'North Lunar Node',
  beejMantra: 'Om Bhraam Bhreem Bhraum Sah Rahave Namah',
  periodYears: 18,
  periodDays: Math.round(18 * 365.25),
  karaka: {
    en: ['ambition', 'foreign lands', 'mass media', 'technology', 'sudden gains', 'illusion', 'photography', 'unconventional success'],
    hi: ['महत्त्वाकांक्षा', 'विदेश', 'जन-मीडिया', 'प्रौद्योगिकी', 'अकस्मात् लाभ', 'माया', 'छायाचित्र', 'अपरम्परागत सफलता'],
  },
  ownSigns: ['Aquarius (co-ruler in some schools)'],
  exaltation: { sign: 'Taurus', degree: 20 },
  debilitation: { sign: 'Scorpio', degree: 20 },
  friendly: ['shukra', 'shani', 'budh'],
  neutral: ['guru'],
  enemy: ['surya', 'chandra', 'mangal'],
  weekday: { en: '— (no fixed day; Saturday by Saturn-affinity)', hi: '— (कोई निश्चित दिन नहीं; शनि-साम्य से शनिवार)' },
  deity: { en: 'Durga, Kala Bhairava, Saraswati', hi: 'दुर्गा, काल भैरव, सरस्वती' },
  gemstone: { en: 'Hessonite (Gomedh)', hi: 'गोमेद' },
  themeColor: { primary: '#3D2A4F', accent: '#5A4470' },
  icon: 'wind',

  intro: {
    en: `Rahu is not a physical planet. It is the moon's north node — the calculated point where the lunar orbit crosses the ecliptic going north. The Vedic seers gave this mathematical point the status of a graha (planet) because they observed that natives going through Rahu's eighteen-year mahadasha were undergoing transformations no actual planet could explain. Rahu's dasha is the most polarising of the nine: it either makes someone, hurling them across borders, industries, and social classes their ancestors could not have imagined; or it dissolves them, walking them through obsessions and illusions whose outline only becomes visible after the dasha ends. There is rarely a middle outcome. Modern Indian charts have far more dramatic Rahu mahadasha stories than any other dasha — because the modern world (foreign work, the internet, mass media, leveraged finance, social platforms) is itself ruled by Rahu.`,
    hi: `राहु कोई भौतिक ग्रह नहीं है। यह चन्द्र की उत्तर पात-बिन्दु है — वह गणितीय बिन्दु जहाँ चन्द्र-कक्षा क्रान्तिवृत्त को उत्तर की ओर पार करती है। वैदिक ऋषियों ने इस गणितीय बिन्दु को ग्रह की पदवी इसलिए दी क्योंकि उन्होंने देखा कि राहु की अठारह-वर्षीय महादशा से गुज़रने वाले जातकों में ऐसे रूपान्तरण होते हैं जिनकी व्याख्या किसी वास्तविक ग्रह से नहीं हो सकती। नौ दशाओं में राहु की दशा सर्वाधिक ध्रुवीकरण-कारी है: यह या तो जातक को बना देती है — सीमाओं, उद्योगों, और सामाजिक वर्गों के पार जिनकी कल्पना उसके पूर्वज नहीं कर सकते थे; अथवा वह उसे विघटित कर देती है, ऐसी आसक्तियों और भ्रमों में चलाती है जिनकी रूपरेखा दशा-समाप्ति के बाद ही दिखती है। मध्यम परिणाम विरल है। आधुनिक कुण्डलियों में किसी भी अन्य दशा से अधिक नाटकीय राहु-कथाएँ मिलती हैं — क्योंकि आधुनिक संसार स्वयं (विदेशी कार्य, इंटरनेट, जन-मीडिया, उधारित वित्त, सामाजिक मंच) राहु से शासित है।`,
  },

  periodOverview: {
    en: `Eighteen years is the third-longest mahadasha in the Vimshottari cycle, after Venus (20) and Saturn (19). Within Rahu's mahadasha there are nine antardashas. The opening Rahu–Rahu sub-period of about 2 years 8 months sets the dasha's flavour; the closing Rahu–Mars of 1 year 18 days is the resolution window. The complete sequence is Rahu, Jupiter, Saturn, Mercury, Ketu, Venus, Sun, Moon, Mars. Three of these antardashas — Rahu–Sun, Rahu–Moon, Rahu–Mars — are with Rahu's natural enemies, and they account for a disproportionate share of the dasha's reputation for sudden upheaval. The remaining six are operationally workable. Reading the dasha as eighteen flat years is misleading; reading it as nine distinct chapters with very different planetary moods is the only way to plan around it.`,
    hi: `विंशोत्तरी क्रम में अठारह वर्ष शुक्र (20) और शनि (19) के बाद तीसरी सबसे लम्बी महादशा है। राहु महादशा के भीतर नौ अन्तर्दशाएँ होती हैं। प्रारम्भिक राहु-राहु अन्तर्दशा लगभग 2 वर्ष 8 माह की होती है और दशा का स्वर निर्धारित करती है; अन्तिम राहु-मंगल लगभग 1 वर्ष 18 दिन का होता है तथा समाधान-चरण है। सम्पूर्ण क्रम है — राहु, गुरु, शनि, बुध, केतु, शुक्र, सूर्य, चन्द्र, मंगल। इनमें से तीन अन्तर्दशाएँ — राहु-सूर्य, राहु-चन्द्र, राहु-मंगल — राहु के नैसर्गिक शत्रुओं की हैं, और इन्हीं के कारण इस महादशा को अकस्मात् उथल-पुथल के लिए ख्याति प्राप्त है। शेष छह व्यावहारिक रूप से सध्य हैं। अठारह वर्षों को समतल इकाई समझना भ्रामक है; इसे नौ भिन्न ग्रह-स्वभावों वाले स्वतन्त्र अध्यायों के रूप में पढ़ना ही नियोजन का एकमात्र मार्ग है।`,
  },

  wellPlacedEffects: {
    en: `When Rahu is well-placed in the natal chart — in the third, sixth, tenth or eleventh house, in Taurus or Gemini, or strongly aspected by Jupiter — the eighteen years can be the chart's most upwardly mobile period. This is the dasha that makes first-generation entrepreneurs, foreign settlers, social-media-era stars, and people who jump three professional rungs in less than a decade. The mechanism is unusual: Rahu does not give success through effort like Saturn or grace like Jupiter. It gives success through the willingness to be unconventional — taking the offer no one else accepts, working in the field no one else respects yet, marrying outside the community, moving to a country where one knows nobody. Career fields that flourish are technology, mass media, photography, aviation, pharmaceuticals, foreign trade, leveraged finance, and anything genuinely new. The native often becomes wealthier, more visible, and less recognisable to family by the dasha's middle. Properly directed, Rahu turns the sky into the limit; misdirected, it turns the limit into the sky.`,
    hi: `जब राहु जन्म-कुण्डली में बलवान हों — तीसरे, छठे, दशम, अथवा एकादश भाव में, वृष या मिथुन में, अथवा गुरु से दृष्ट हों — तब अठारह वर्ष कुण्डली का सर्वाधिक ऊर्ध्वगामी काल बन सकते हैं। यही वह दशा है जो प्रथम-पीढ़ी के उद्यमी, विदेश-स्थापित, सोशल-मीडिया-युग के सितारे, और एक दशक से कम में तीन व्यावसायिक सोपान चढ़ने वाले लोग बनाती है। तन्त्र असामान्य है: राहु शनि के समान परिश्रम से अथवा गुरु के समान कृपा से सफलता नहीं देते। वे अपरम्परागत होने की तत्परता से सफलता देते हैं — वह प्रस्ताव लेना जो कोई स्वीकार नहीं करता, उस क्षेत्र में कार्य करना जिसका अभी कोई आदर नहीं, समुदाय के बाहर विवाह करना, ऐसे देश में बसना जहाँ कोई परिचित नहीं। प्रौद्योगिकी, जन-मीडिया, छायाचित्र, विमानन, औषधि, विदेशी व्यापार, उधारित वित्त, और जो भी वस्तुतः नूतन है — सब फलते हैं। दशा के मध्य तक जातक प्रायः अधिक धनी, अधिक दृश्य, और परिवार को कम पहचाना जा सकने वाला हो जाता है। यथोचित दिशा में राहु आकाश को सीमा बनाते हैं; गलत दिशा में सीमा को आकाश।`,
  },

  afflictedEffects: {
    en: `When Rahu is afflicted — in the eighth or twelfth house without redemption, debilitated in Scorpio, conjunct or aspected by an enemy, or with the dispositor weak — the dasha runs the inversion of its potential. Obsessive ambition without traction. Foreign moves that consume the savings without delivering settlement. Cycles of substance use, gambling, or speculative trading. Long-running deception either suffered or perpetrated. Family discord whose root is some hidden affair, addiction, or financial irregularity. Health complaints are typically nervous-system, sleep, autoimmune, or psychiatric in nature; chronic disorders without clear medical signature are a Rahu hallmark. Karmically, the dasha is showing the native what they are willing to compromise for the appearance of success. Some chart configurations make the lessons severe; others make them survivable. In all afflicted cases the period closes with the native more sober about what they actually want than they were when it began. That sobriety, classically, is the dasha's gift.`,
    hi: `जब राहु पीड़ित हों — अष्टम अथवा द्वादश भाव में बिना उद्धार के, वृश्चिक में नीच के, शत्रु से युक्त अथवा दृष्ट, अथवा राशीश निर्बल — तब दशा अपनी संभावना के विपरीत चलती है। बिना प्रगति के ग्रस्त-कारी महत्त्वाकांक्षा। बचत खा जाने वाले विदेशी प्रस्थान जो स्थायित्व नहीं देते। मादक द्रव्य, जुआ, अथवा सट्टा-व्यापार के चक्र। दीर्घकालिक छलावा — चाहे जातक छले गए हों या उसने छला हो। पारिवारिक विसंगति जिसकी जड़ कोई गुप्त सम्बन्ध, व्यसन, अथवा वित्तीय अनियमितता हो। स्वास्थ्य की दृष्टि से प्रायः स्नायु-तन्त्र, निद्रा, स्वप्रतिरक्षा, अथवा मनोरोगी समस्याएँ; बिना स्पष्ट चिकित्सकीय हस्ताक्षर वाले दीर्घकालिक रोग राहु के लक्षण हैं। कर्म की दृष्टि से दशा जातक को दिखाती है कि वह सफलता के स्वरूप के लिए किस सीमा तक समझौता करने को तैयार है। कुछ कुण्डलियों में पाठ कठोर होता है; अन्य में सहनीय। पीड़ित सभी रूपों में काल का अन्त इस संयम के साथ होता है कि अब जातक स्पष्ट देखता है — उसे वस्तुतः क्या चाहिए। यही संयम, शास्त्रीय रूप से, दशा का उपहार है।`,
  },

  houseEffects: [
    { house: 1, effect: { en: 'Sudden change in body type, public image, or relocation. Personality becomes restless, ambitious, magnetic to strangers but harder to read for family. Possible skin or scalp issues in the first sub-period.', hi: 'शरीर-स्वरूप, सार्वजनिक छवि, अथवा निवास में अकस्मात् परिवर्तन। व्यक्तित्व चंचल, महत्त्वाकांक्षी, अपरिचितों के लिए चुम्बकीय किन्तु परिवार के लिए कठिन-पाठ्य। प्रथम अन्तर्दशा में त्वचा या मस्तक-सम्बन्धी समस्याएँ सम्भव।' } },
    { house: 2, effect: { en: 'Income from non-traditional sources. Family wealth churns. Speech becomes persuasive but can mislead listeners. Risk of falling into financial schemes; verify every contract.', hi: 'अपरम्परागत स्रोतों से आय। पारिवारिक धन में मन्थन। वाणी प्रभावी किन्तु श्रोताओं को भटका सकती है। वित्तीय योजनाओं में फँसने का जोखिम; प्रत्येक अनुबन्ध की स्वतन्त्र पुष्टि करें।' } },
    { house: 3, effect: { en: 'Strong placement. Marketing, journalism, photography, courier and aviation work prosper. Sibling drama possible. Excellent for travel writers, social-media producers, content creators.', hi: 'बलवान स्थिति। विपणन, पत्रकारिता, छायाचित्र, कूरियर और विमानन कार्य फलते हैं। भाई-बहन सम्बन्धी नाटक सम्भव। यात्रा-लेखक, सोशल-मीडिया निर्माता, कन्टेन्ट सर्जक के लिए उत्कृष्ट।' } },
    { house: 4, effect: { en: 'Mother\'s peace tested. Property dealings have hidden complications. Possible foreign settlement that does not feel like home for years. Vehicle changes frequent.', hi: 'माता का चित्त-शान्ति परखी जाती है। सम्पत्ति-व्यवहार में छिपी जटिलताएँ। ऐसी विदेश-स्थापना सम्भव जो वर्षों तक "घर" न लगे। वाहन परिवर्तन अधिक।' } },
    { house: 5, effect: { en: 'Speculation, romance, and creative output gain unconventional outlets. Children may be born late or under unusual circumstances. Stage and cinema flourish; gambling losses if undisciplined.', hi: 'सट्टा, प्रेम, और रचनात्मक उत्पादन को अपरम्परागत मार्ग मिलते हैं। सन्तान का जन्म देर से अथवा असामान्य परिस्थितियों में सम्भव। मंच और सिनेमा में उन्नति; अनुशासनहीनता पर जुए में हानि।' } },
    { house: 6, effect: { en: 'One of the most powerful Rahu placements. Defeats enemies, wins legal battles, succeeds in pharmaceuticals, foreign service, intelligence work. Chronic disease management improves.', hi: 'राहु की सर्वाधिक बलवान स्थितियों में से एक। शत्रुओं को परास्त करता है, विधिक संघर्ष जीतता है, औषधि, विदेश सेवा, गुप्तचर कार्य में सफलता। दीर्घकालिक रोग प्रबन्धन सुधरता है।' } },
    { house: 7, effect: { en: 'Marriage delayed, inter-faith, foreign, or unconventional. Spouse may have addictions, foreign origin, or considerable age difference. Business partnerships need rigorous due diligence.', hi: 'विवाह विलम्बित, अन्तर्धार्मिक, विदेशी, अथवा अपरम्परागत। जीवनसाथी में व्यसन, विदेशी मूल, अथवा आयु में बड़ा अन्तर सम्भव। व्यापारिक साझेदारी में कठोर सत्यापन आवश्यक।' } },
    { house: 8, effect: { en: 'Difficult house. Inheritance disputes, hidden family secrets, surgeries, occult experiences, or research breakthroughs. Sleep and dream-life become vivid; psychic openings reported.', hi: 'कठिन भाव। उत्तराधिकार-विवाद, गुप्त पारिवारिक रहस्य, शल्य चिकित्सा, तान्त्रिक अनुभव, अथवा शोध में सफलता। निद्रा और स्वप्न-जीवन सजीव; मानसिक उद्घाटनों की रिपोर्ट।' } },
    { house: 9, effect: { en: 'Foreign travel for higher education or pilgrimage. Father may relocate or face health issues. Faith is questioned and rebuilt on different ground. Publishing, teaching abroad flourishes.', hi: 'उच्च शिक्षा अथवा तीर्थयात्रा हेतु विदेश यात्रा। पिता का स्थानान्तरण अथवा स्वास्थ्य समस्या सम्भव। श्रद्धा प्रश्नांकित होकर भिन्न आधार पर पुनः निर्मित होती है। प्रकाशन, विदेश में अध्यापन में उन्नति।' } },
    { house: 10, effect: { en: 'Spectacular career rise via unconventional channels. Public visibility increases — sometimes virally. Risk of reputation collapse if shortcuts are taken. Suits politicians, technologists, mass-media leaders.', hi: 'अपरम्परागत मार्गों से नाटकीय करियर-उत्थान। सार्वजनिक दृश्यता बढ़ती है — कभी-कभी वायरल रूप से। शॉर्टकट लेने पर प्रतिष्ठा-पतन का जोखिम। राजनेता, प्रौद्योगिकीविद्, जन-मीडिया नायकों के अनुकूल।' } },
    { house: 11, effect: { en: 'Strongest income placement. Massive gains from foreign income, network of older mentors, and large-scale platforms. Friendships with influential outsiders. Sustained gain across the dasha.', hi: 'सर्वाधिक आय-दायक स्थिति। विदेशी आय, वरिष्ठ मार्गदर्शकों के नेटवर्क, और विशाल मंचों से बड़ा लाभ। प्रभावशाली बाह्य व्यक्तियों से मित्रता। पूरी दशा में स्थिर लाभ।' } },
    { house: 12, effect: { en: 'Heavy on foreign expenditure, hospitalisation, or institutional life. Spiritual retreat is genuinely available; so is escapism. Sleep disturbances frequent. Either profound monk or chronic insomniac.', hi: 'विदेशी व्यय, अस्पताल-वास, अथवा संस्थागत जीवन पर भारी। वास्तविक आध्यात्मिक एकान्त उपलब्ध है — पलायनवाद भी। निद्रा-विकार सामान्य। या तो गहन साधक या दीर्घकालिक अनिद्रा-ग्रस्त।' } },
  ],

  antardashas: [
    {
      subRuler: 'Rahu',
      label: { en: 'Rahu–Rahu Antardasha', hi: 'राहु-राहु अन्तर्दशा' },
      duration: { en: 'About 2 years 8 months 12 days', hi: 'लगभग 2 वर्ष 8 माह 12 दिन' },
      effect: {
        en: `The opening period sets the dasha's character. Most natives report a sudden shift — relocation, a job change, an inter-community marriage, or a family rupture — that they were not actively planning. Rahu shows what it intends to do early. Sleep can become irregular, dreams unusually vivid. Foreign correspondence and unexpected proposals arrive. The classical advice is to make no irreversible decisions in the first six months until the new pattern reveals itself.`,
        hi: `प्रारम्भिक काल दशा का स्वरूप निर्धारित करता है। अधिकांश जातक अकस्मात् परिवर्तन की रिपोर्ट करते हैं — स्थानान्तरण, नौकरी परिवर्तन, अन्तर-समुदाय विवाह, अथवा पारिवारिक विच्छेद — जिसकी कोई सक्रिय योजना नहीं थी। राहु प्रारम्भ में ही दिखाते हैं कि उनका इरादा क्या है। निद्रा अनियमित, स्वप्न असामान्य रूप से सजीव। विदेशी पत्राचार और अनपेक्षित प्रस्ताव आते हैं। शास्त्रीय परामर्श यह है कि पहले छह मास में कोई अप्रत्यावर्तनीय निर्णय न लें — नया स्वरूप स्वयं प्रकट होने दें।`,
      },
    },
    {
      subRuler: 'Guru',
      label: { en: 'Rahu–Guru Antardasha', hi: 'राहु-गुरु अन्तर्दशा' },
      duration: { en: 'About 2 years 4 months 24 days', hi: 'लगभग 2 वर्ष 4 माह 24 दिन' },
      effect: {
        en: `Rahu and Jupiter form Guru-Chandala yoga in the natal chart when conjunct, but as a sequence dasha-antardasha pair the combination is far more workable. Education, religious study, and structured ambition find each other. Many natives complete a higher degree, secure a teaching role, or write a major book in this sub-period. The cautionary note is that Jupiter under Rahu can also produce false gurus and over-promising mentors; vet all major guidance carefully. Children are often born during these years.`,
        hi: `कुण्डली में राहु-गुरु युति गुरु-चाण्डाल योग बनाती है, परन्तु क्रमिक दशा-अन्तर्दशा युग्म के रूप में यह संयोग कहीं अधिक सहनीय है। शिक्षा, धार्मिक अध्ययन, और संरचित महत्त्वाकांक्षा एक-दूसरे को पाते हैं। अनेक जातक इस अन्तर्दशा में उच्च उपाधि पूरी करते हैं, अध्यापन भूमिका प्राप्त करते हैं, अथवा प्रमुख ग्रन्थ लिखते हैं। चेतावनी यह है कि राहु के अधीन गुरु झूठे गुरु एवं अति-वचन देने वाले मार्गदर्शक भी प्रस्तुत कर सकते हैं; प्रत्येक प्रमुख मार्गदर्शन की सावधानीपूर्वक जाँच करें। इन वर्षों में सन्तान-जन्म प्रायः होता है।`,
      },
    },
    {
      subRuler: 'Shani',
      label: { en: 'Rahu–Shani Antardasha', hi: 'राहु-शनि अन्तर्दशा' },
      duration: { en: 'About 2 years 10 months 6 days', hi: 'लगभग 2 वर्ष 10 माह 6 दिन' },
      effect: {
        en: `Rahu and Saturn share an industrial, foreign-labour quality and are friends in the Naisargika scheme. The combination produces some of the most operationally heavy years of the dasha but also the most concrete output: a long foreign assignment, a major construction project, an institutional position. Workload is sustained at near-maximum. Social life thins. Family responsibilities pile up. By the end of this antardasha most natives have built something visible — even if they are exhausted. Health monitoring of joints, kidneys, and sleep is essential.`,
        hi: `राहु और शनि में औद्योगिक, विदेशी-श्रमपरक गुण साझा है तथा नैसर्गिक मैत्री में वे मित्र हैं। यह संयोग दशा के सर्वाधिक कार्य-भारी, किन्तु साथ ही सर्वाधिक मूर्त-उत्पादक वर्ष देता है: दीर्घ विदेशी नियुक्ति, बड़ी निर्माण परियोजना, संस्थागत पद। कार्य-भार लगभग चरम पर बना रहता है। सामाजिक जीवन घट जाता है। पारिवारिक ज़िम्मेदारियाँ बढ़ती हैं। इस अन्तर्दशा के अन्त तक अधिकांश जातकों ने कुछ दृश्य निर्मित कर लिया होता है — भले ही वे थके हुए हों। सन्धि, वृक्क, एवं निद्रा की निगरानी आवश्यक।`,
      },
    },
    {
      subRuler: 'Budh',
      label: { en: 'Rahu–Budh Antardasha', hi: 'राहु-बुध अन्तर्दशा' },
      duration: { en: 'About 2 years 6 months 18 days', hi: 'लगभग 2 वर्ष 6 माह 18 दिन' },
      effect: {
        en: `Rahu and Mercury are mutual friends; this is among Rahu's most cognitively productive sub-periods. Communication, tech work, content production, online business, finance, and trading flourish. Many of the dasha's biggest income inflections occur here. The risk pattern is over-confident commitment — Rahu inflates Mercury's already-quick decision-making, and the native may bind themselves to deals that look attractive at first reading but prove fragile under stress. Document everything; sleep on every contract; do not announce wins prematurely.`,
        hi: `राहु और बुध परस्पर मित्र हैं; यह राहु की सर्वाधिक संज्ञानात्मक रूप से उत्पादक अन्तर्दशाओं में से है। सम्वाद, तकनीकी कार्य, कन्टेन्ट निर्माण, ऑनलाइन व्यवसाय, वित्त, और व्यापार फलते हैं। दशा के सबसे बड़े आय-मोड़ अनेकों इसी काल में होते हैं। जोखिम-स्वरूप है अति-आत्मविश्वासी प्रतिबद्धता — राहु बुध की पहले से तीव्र निर्णय-क्षमता को और बढ़ा देते हैं, और जातक उन सौदों में बँध सकता है जो प्रथम पाठ में आकर्षक हैं किन्तु तनाव में भंगुर सिद्ध होते हैं। प्रत्येक प्रलेख रखें; प्रत्येक अनुबन्ध पर एक रात बीतने दें; जीत की पूर्व-घोषणा न करें।`,
      },
    },
    {
      subRuler: 'Ketu',
      label: { en: 'Rahu–Ketu Antardasha', hi: 'राहु-केतु अन्तर्दशा' },
      duration: { en: 'About 1 year 0 months 18 days', hi: 'लगभग 1 वर्ष 0 माह 18 दिन' },
      effect: {
        en: `The most peculiar antardasha of the eighteen years. The chart's two nodes meet under their own dasha lord — head meets tail. Most natives report a decisive ending: a long-running role concludes, a relationship dissolves, a business is exited, a country is left. None of these need be tragic. Ketu is moksha-karaka and Rahu is the obscurer; together, briefly, they let the native see what was always illusion in their attachment, and the disengagement happens almost without choice.`,
        hi: `अठारह वर्षों की सर्वाधिक विलक्षण अन्तर्दशा। कुण्डली के दोनों पात अपने ही दशेश के अधीन मिलते हैं — सिर मिलता है पुच्छ से। अधिकांश जातक निर्णायक अन्त की रिपोर्ट करते हैं: लम्बे समय से चली आ रही भूमिका समाप्त, सम्बन्ध विघटित, व्यवसाय से प्रस्थान, देश त्याग। इनमें से कुछ भी आवश्यक रूप से दुःखद नहीं। केतु मोक्ष-कारक हैं और राहु आच्छादक; एक साथ, अल्पकाल के लिए, ये जातक को दिखाते हैं कि उनकी आसक्ति में क्या सदा से माया था, और विरक्ति लगभग बिना विकल्प के घटित हो जाती है।`,
      },
    },
    {
      subRuler: 'Shukra',
      label: { en: 'Rahu–Shukra Antardasha', hi: 'राहु-शुक्र अन्तर्दशा' },
      duration: { en: 'About 3 years 0 months 0 days', hi: 'लगभग 3 वर्ष 0 माह 0 दिन' },
      effect: {
        en: `The longest sub-period of the eighteen years. Rahu and Venus are friends; the combination is famously good for material gain — vehicles, jewellery, foreign property, hospitality, fashion, cinema, advertising, and modern art trades all flourish. It is also the most romantically volatile sub-period of the dasha. Affairs, second marriages, and unconventional partnerships often begin here; some last, some implode. Spending tends to outpace income unless deliberately checked. Health-wise, kidney, urinary, reproductive, and skin issues are flagged.`,
        hi: `अठारह वर्षों का सबसे लम्बा उप-काल। राहु और शुक्र मित्र हैं; यह संयोग भौतिक लाभ के लिए प्रसिद्ध है — वाहन, आभूषण, विदेशी सम्पत्ति, आतिथ्य, फ़ैशन, सिनेमा, विज्ञापन, और आधुनिक कला व्यापार — सब फलते हैं। यह दशा का सर्वाधिक प्रेम-भावुक रूप से अस्थिर उप-काल भी है। अन्य सम्बन्ध, द्वितीय विवाह, और अपरम्परागत साझेदारियाँ प्रायः यहीं आरम्भ होती हैं; कुछ टिकती हैं, कुछ टूटती हैं। जब तक सचेत रूप से नियन्त्रण न हो, व्यय आय से अधिक होता है। स्वास्थ्य की दृष्टि से वृक्क, मूत्र-तन्त्र, प्रजनन, और त्वचा सम्बन्धी विषयों पर ध्यान दें।`,
      },
    },
    {
      subRuler: 'Surya',
      label: { en: 'Rahu–Surya Antardasha', hi: 'राहु-सूर्य अन्तर्दशा' },
      duration: { en: 'About 10 months 24 days', hi: 'लगभग 10 माह 24 दिन' },
      effect: {
        en: `Rahu eclipses Sun in mythology, and in the dasha context Sun's antardasha under Rahu typically marks an authority-related crisis. Conflicts with the father, the boss, the government, or a senior figure surface. Reputation is fragile. Eye and heart symptoms can appear. The native should defer public confrontations and major announcements to a later sub-period. The ten months pass quickly; what matters is to avoid creating long-term damage in a short-term storm.`,
        hi: `पौराणिक रूप से राहु सूर्य को ग्रसते हैं, और दशा-सन्दर्भ में राहु के अधीन सूर्य अन्तर्दशा प्रायः अधिकार-सम्बन्धी संकट को चिह्नित करती है। पिता, अधिकारी, शासन, अथवा वरिष्ठ व्यक्ति से टकराव उभरते हैं। प्रतिष्ठा भंगुर। नेत्र एवं हृदय सम्बन्धी लक्षण उठ सकते हैं। जातक को सार्वजनिक टकराव और बड़ी घोषणाएँ बाद की अन्तर्दशा के लिए स्थगित करनी चाहिए। दस माह शीघ्र बीत जाते हैं; महत्त्वपूर्ण है कि अल्पकालिक तूफ़ान में दीर्घकालिक क्षति न पहुँचे।`,
      },
    },
    {
      subRuler: 'Chandra',
      label: { en: 'Rahu–Chandra Antardasha', hi: 'राहु-चन्द्र अन्तर्दशा' },
      duration: { en: 'About 1 year 6 months 0 days', hi: 'लगभग 1 वर्ष 6 माह 0 दिन' },
      effect: {
        en: `Rahu over the Moon is the classical eclipse signature, and in this antardasha mood is the variable to watch. Anxiety, sleep disruption, and reactive decision-making are common. Mother\'s health needs attention. Public-facing roles can feel exposing. Travel by water or to humid foreign locations may not agree with the constitution. The remedy is short, regular practice — Hanuman Chalisa, Chandi Path, Shri Suktam, or any familiar mantra — done at the same time daily. Keep meals simple and sleep schedule rigid for these eighteen months.`,
        hi: `राहु का चन्द्र पर प्रभाव शास्त्रीय ग्रहण-संकेत है, और इस अन्तर्दशा में मनोदशा वह चर है जिस पर ध्यान देना है। चिन्ता, निद्रा-विघ्न, और प्रतिक्रियात्मक निर्णय सामान्य। माता के स्वास्थ्य पर ध्यान आवश्यक। जन-समक्ष भूमिकाएँ अनावरणकारी लग सकती हैं। जल यात्रा अथवा आर्द्र विदेशी स्थलों की यात्रा शरीर-प्रकृति से मेल न खाए। उपाय है छोटी, नियमित साधना — हनुमान चालीसा, चण्डी पाठ, श्रीसूक्त, अथवा कोई परिचित मन्त्र — प्रतिदिन एक ही समय पर। इन अठारह मासों में आहार सरल और निद्रा-क्रम कठोर रखें।`,
      },
    },
    {
      subRuler: 'Mangal',
      label: { en: 'Rahu–Mangal Antardasha', hi: 'राहु-मंगल अन्तर्दशा' },
      duration: { en: 'About 1 year 0 months 18 days', hi: 'लगभग 1 वर्ष 0 माह 18 दिन' },
      effect: {
        en: `The closing antardasha. Rahu and Mars are sworn enemies and the year is the dasha's most accident-prone window. Vehicle care, electrical work, surgical decisions, and conflict-zone travel all need extra caution. Younger male relatives may demand support. On the constructive side, the year is excellent for completing what was started — court cases, land acquisitions, technology shipments, athletic goals — because Mars closes what Rahu opened eighteen years earlier. Avoid elective surgery without a competent muhurta.`,
        hi: `अन्तिम अन्तर्दशा। राहु और मंगल कट्टर शत्रु हैं तथा यह वर्ष दशा का सर्वाधिक दुर्घटना-प्रवण काल है। वाहन की देखभाल, विद्युत कार्य, शल्य चिकित्सा निर्णय, और संघर्ष-क्षेत्र यात्रा — सब में अतिरिक्त सावधानी आवश्यक। छोटे पुरुष-स्वजन सहयोग की माँग कर सकते हैं। निर्माणात्मक पक्ष: जो आरम्भ किया था उसे पूरा करने के लिए यह वर्ष उत्तम है — मुकदमे, भूमि अधिग्रहण, प्रौद्योगिकी प्रेषण, खेल-लक्ष्य — क्योंकि अठारह वर्ष पूर्व राहु ने जो आरम्भ किया था उसे मंगल बन्द करते हैं। बिना सक्षम मुहूर्त के ऐच्छिक शल्य चिकित्सा से बचें।`,
      },
    },
  ],

  remedies: [
    {
      title: { en: 'Mantra Recitation', hi: 'मन्त्र जप' },
      body: {
        en: `Rahu's beej mantra is "Om Bhraam Bhreem Bhraum Sah Rahave Namah" — eighteen thousand recitations across forty days is the classical prescription, beginning on a Saturday or during a solar eclipse. Most modern practitioners cannot complete that count alone, and the more reliable lay alternative is daily recitation of Durga Saptashati (Chandi Path) or the Maha Mrityunjaya mantra (108 repetitions per day) for the duration of the difficult sub-periods. Saraswati upasana — particularly the Saraswati Stotram on Wednesday — is also classically recommended because Saraswati is invoked to clear Rahu-induced confusion. The recitation matters less than its consistency; Rahu undoes erratic effort.`,
        hi: `राहु का बीज मन्त्र है "ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः" — चालीस दिनों में अठारह हज़ार जप शास्त्रीय विधान है, जो शनिवार से अथवा सूर्य ग्रहण के दिन आरम्भ हो। अधिकांश आधुनिक साधक स्वयं यह संख्या पूरी नहीं कर सकते, और अधिक विश्वसनीय जन-विधि है — कठिन अन्तर्दशाओं की अवधि में दैनिक दुर्गा सप्तशती (चण्डी पाठ) अथवा महामृत्युंजय मन्त्र की एक माला (108) का पाठ। सरस्वती उपासना — विशेषकर बुधवार को सरस्वती स्तोत्र — भी शास्त्रीय रूप से संस्तुत है क्योंकि राहु-जनित भ्रम को मिटाने के लिए सरस्वती का आह्वान किया जाता है। जप-संख्या से अधिक उसकी निरन्तरता मूल्यवान है; राहु अनियमित प्रयास को निष्फल कर देते हैं।`,
      },
    },
    {
      title: { en: 'Gemstone (with Strict Caveats)', hi: 'रत्न (कठोर सावधानियों सहित)' },
      body: {
        en: `Hessonite (Gomedh) is Rahu's gem and one of the more reactive stones in Jyotish — comparable to Blue Sapphire in volatility. Trial it for three nights kept under the pillow before fixing. Five carats minimum, set in silver, middle finger of the right hand, energised on a Saturday in Shukla paksha with the Rahu beej mantra recited 108 times. Do not pair it with Pearl, Ruby, or Yellow Sapphire — the planetary signals conflict openly. Many practitioners now prescribe Garnet as a safer entry-level Rahu remedy stone; it carries a softened version of the same energy and is far less likely to disturb sleep or generate inexplicable anxiety. Always consult a competent jyotishi who can read your full chart — not just an "online dasha report" — before buying any Rahu gem.`,
        hi: `गोमेद राहु का रत्न है और ज्योतिष के सर्वाधिक प्रतिक्रियाशील रत्नों में से — नीलम के समान अस्थिर। अंगूठी में जड़वाने से पूर्व तीन रात्रि तकिए के नीचे परीक्षण अनिवार्य। न्यूनतम पाँच रत्ती, चाँदी में, दाहिने हाथ की मध्यमा, शुक्ल पक्ष के शनिवार को राहु बीज मन्त्र की 108 आवृत्तियों से अभिमन्त्रित। मोती, माणिक्य, अथवा पुखराज के साथ न पहनें — ग्रह-संकेत खुलकर टकराते हैं। अनेक साधक अब प्रारम्भिक राहु उपाय हेतु गारनेट संस्तुत करते हैं; यह उसी ऊर्जा का कोमल रूप है और निद्रा-विघ्न अथवा अव्याख्यायित चिन्ता पैदा करने की सम्भावना बहुत कम। राहु का कोई भी रत्न खरीदने से पूर्व उस सक्षम ज्योतिषी से परामर्श अनिवार्य जो आपकी पूर्ण कुण्डली पढ़ सके — मात्र "ऑनलाइन दशा रिपोर्ट" से नहीं।`,
      },
    },
    {
      title: { en: 'Daana (Donation)', hi: 'दान' },
      body: {
        en: `Rahu rules the marginalised, the foreigner, the homeless, the migrant worker, and those whom mainstream society does not see. Donation in his name should reach those communities directly. Black sesame, urad dal, blue cloth, blankets, electronics, mobile phone recharges for migrant labourers, food packets at railway stations and bus stands, sponsorship of foreign students or asylum-seekers — all carry Rahu's signature. The classical timing is during a solar eclipse, on Saturdays at sunset, or on the lunar Amavasya. The donation is performed without identifying the recipient by name and without seeking acknowledgement; transactional charity, especially photographed for social media, can intensify Rahu's deceptive signature rather than soften it.`,
        hi: `राहु शासन करते हैं उन पर — उपेक्षित, विदेशी, निराश्रित, प्रवासी श्रमिक, और जो मुख्यधारा समाज को नहीं दिखते। उनके नाम पर दान सीधे इन समुदायों तक पहुँचना चाहिए। काले तिल, उड़द दाल, नीला वस्त्र, कम्बल, इलेक्ट्रॉनिक्स, प्रवासी श्रमिकों के मोबाइल रिचार्ज, रेलवे स्टेशन एवं बस अड्डे पर भोजन-पैकेट, विदेशी छात्रों अथवा शरण-प्रत्याशियों का प्रायोजन — सब राहु-संकेतक हैं। शास्त्रीय समय है सूर्य ग्रहण के दिन, शनिवार सायंकाल, अथवा अमावस्या को। दान बिना प्राप्तकर्ता का नाम लिए, बिना स्वीकार-अपेक्षा के किया जाए; लेन-देन समान दान — विशेषकर सोशल मीडिया के लिए छायाचित्रित — राहु के छल-संकेत को कोमल करने के बजाय बढ़ा सकता है।`,
      },
    },
    {
      title: { en: 'Vrata (Observance)', hi: 'व्रत' },
      body: {
        en: `Two practices are the standard observance for Rahu: Saturday Hanuman temple visit with simple lamp offering, and the Rahu Kalam discipline — a daily ninety-minute window (calculated from sunrise) in which Rahu rules and during which one avoids beginning new ventures, signing major papers, or eating heavy meals. Smartphone apps now publish accurate daily Rahu Kalam timings for any Indian city. Observing this discipline trains the mind to recognise Rahu's pull toward impulse and gives the native a routine boundary — the cumulative effect over months is striking. Some practitioners also keep an Amavasya fast (the no-moon day each lunar month) and recite the Rahu stotra during the eclipse season.`,
        hi: `राहु के लिए दो अभ्यास मानक व्रत हैं: शनिवार को हनुमान मन्दिर दर्शन के साथ सादा दीपदान, और राहु कालम् अनुशासन — सूर्योदय से गणित दैनिक नब्बे मिनट का खण्ड जिसमें राहु शासन करते हैं और जिस दौरान नये कार्यारम्भ, बड़े प्रलेख-हस्ताक्षर, अथवा भारी भोजन से बचा जाता है। स्मार्टफ़ोन ऐप्स अब किसी भी भारतीय नगर के लिए सटीक दैनिक राहु कालम् समय प्रकाशित करते हैं। यह अनुशासन मन को राहु के आवेग-कर्षण को पहचानने का अभ्यास देता है तथा जातक को नियमित मर्यादा प्रदान करता है — मासों में संचित प्रभाव चकित कर देने वाला। कुछ साधक प्रत्येक चान्द्रमास की अमावस्या का व्रत भी रखते हैं और ग्रहण-काल में राहु स्तोत्र का पाठ करते हैं।`,
      },
    },
    {
      title: { en: 'Lifestyle Adjustments', hi: 'जीवन-शैली समायोजन' },
      body: {
        en: `Rahu's modern manifestation is screen addiction, doom-scrolling, gambling, leveraged trading, and substance use. The lifestyle remedy is therefore digital and chemical hygiene — phone in another room at night, no social media after sundown, no caffeine after noon, no alcohol or recreational drugs for the duration of any difficult sub-period. The classical instruction adds: avoid eating from unfamiliar street vendors during travel, sleep in a clean dark room, do not keep skull or skeleton imagery in the bedroom, and avoid argumentative late-night conversations. Many natives find that meditation does not work in Rahu's heaviest months — but a long evening walk, a hot bath, and an early bedtime do. The body-discipline is more accessible than the mind-discipline in this dasha.`,
        hi: `राहु की आधुनिक अभिव्यक्ति है स्क्रीन व्यसन, अनवरत स्क्रॉल, जुआ, उधारित व्यापार, और मादक द्रव्य। अतः जीवन-शैली उपाय है डिजिटल एवं रासायनिक स्वच्छता — रात्रि में फ़ोन दूसरे कक्ष में, सायंकाल के पश्चात् सोशल मीडिया नहीं, मध्याह्न के पश्चात् कैफ़ीन नहीं, किसी भी कठिन अन्तर्दशा की अवधि में मद्य अथवा मनोरंजनात्मक नशा नहीं। शास्त्रीय निर्देश जोड़ते हैं: यात्रा में अपरिचित विक्रेताओं से न खाएँ, स्वच्छ अन्धकारमय कक्ष में सोएँ, शयनकक्ष में कपाल अथवा कंकाल चित्र न रखें, और देर रात के विवादात्मक सम्वादों से बचें। अनेक जातक पाते हैं कि राहु के सर्वाधिक भारी मासों में ध्यान कार्य नहीं करता — किन्तु लम्बी सान्ध्य सैर, गरम स्नान, और शीघ्र शयन — ये कार्य करते हैं। इस दशा में मन-अनुशासन से शरीर-अनुशासन अधिक सुलभ है।`,
      },
    },
  ],

  casePatterns: {
    en: `In modern Indian charts the most common Rahu Mahadasha pattern observed in editorial review is foreign relocation between ages twenty-eight and forty-two, lasting through some or all of the dasha. The native goes — North America, the Gulf, Singapore, Australia, Europe — and either makes a fortune that family members did not anticipate, or returns at the dasha's end with savings consumed, a different worldview, and a long story. The second common pattern is the entrepreneurial start-up — born of Rahu's appetite for the new, fuelled by Rahu's tolerance for risk, surviving on Rahu's gift for unconventional networks. The third is the inverse: addiction, depression, or financial scandal, often hidden until very late. All three patterns are recoverable; what makes the difference is the natal Saturn and Jupiter — the two planets that can hold Rahu's appetite within a structure. Read those two before reading Rahu.`,
    hi: `आधुनिक भारतीय कुण्डलियों में सम्पादकीय समीक्षा के दौरान राहु महादशा का सर्वाधिक सामान्य रूप जो दृष्टिगोचर होता है — वह है अट्ठाईस से बयालीस वर्ष की आयु में विदेश-स्थानान्तरण, जो दशा के कुछ या सम्पूर्ण भाग तक चलता है। जातक जाता है — उत्तर अमेरिका, खाड़ी देश, सिंगापुर, ऑस्ट्रेलिया, यूरोप — और या तो ऐसा भाग्य अर्जित करता है जिसकी परिवार ने कल्पना नहीं की थी, अथवा दशा के अन्त में बचत समाप्त, भिन्न विश्व-दृष्टि, और लम्बी कथा के साथ लौटता है। दूसरा सामान्य रूप — उद्यमी स्टार्ट-अप, जो राहु की नवीनता-भूख से जन्मा, राहु की जोखिम-सहिष्णुता से ईंधनित, राहु के अपरम्परागत नेटवर्क-दान से टिका रहता है। तीसरा इसका विलोम है: व्यसन, अवसाद, अथवा वित्तीय कलंक, जो प्रायः बहुत देर तक छिपा रहता है। तीनों रूप पुनरुद्धार-योग्य हैं; अन्तर डालते हैं जन्म-कुण्डली के शनि और गुरु — दो ग्रह जो राहु की भूख को संरचना के भीतर रोक सकते हैं। राहु से पूर्व इन दोनों को पढ़ें।`,
  },

  faqs: [
    {
      question: { en: 'What are the main effects of Rahu Mahadasha?', hi: 'राहु महादशा के मुख्य प्रभाव क्या हैं?' },
      answer: {
        en: `Rahu Mahadasha is the chart's most polarising eighteen years. Well-placed, it produces foreign success, technological wealth, mass-media visibility, and unconventional career rises. Afflicted, it produces obsession, addiction, deception, financial reversal, and reputational collapse. The middle outcome is rare — Rahu rarely lets the native stay still. The lived experience depends on Rahu's natal house, sign, dispositor, and aspects from Jupiter or Saturn, far more than on Rahu itself.`,
        hi: `राहु महादशा कुण्डली के सर्वाधिक ध्रुवीकरण-कारी अठारह वर्ष हैं। बलवान स्थिति में यह विदेशी सफलता, प्रौद्योगिकीय धन, जन-मीडिया दृश्यता, और अपरम्परागत करियर-उत्थान देती है। पीड़ित स्थिति में यह आसक्ति, व्यसन, छलावा, वित्तीय उलट-फेर, और प्रतिष्ठा-पतन देती है। मध्यम परिणाम विरल — राहु प्रायः जातक को एक स्थान पर रहने नहीं देते। वास्तविक अनुभव राहु के जन्म-भाव, राशि, राशीश, और गुरु अथवा शनि की दृष्टियों पर निर्भर करता है — स्वयं राहु से कहीं अधिक।`,
      },
    },
    {
      question: { en: 'How long is Rahu Mahadasha?', hi: 'राहु महादशा कितने वर्ष की होती है?' },
      answer: {
        en: `Rahu Mahadasha runs for exactly eighteen calendar years (about 6,575 days) — the third-longest of the nine Vimshottari Mahadashas after Venus (twenty years) and Saturn (nineteen years). It contains nine antardashas, ranging from Rahu–Sun (about 11 months) up to Rahu–Venus (a full 3 years). Use the Mahadasha Calculator to see the exact start date, end date, and current sub-period of your own Rahu Mahadasha.`,
        hi: `राहु महादशा ठीक अठारह कलैंडर वर्ष (लगभग 6,575 दिन) चलती है — नौ विंशोत्तरी महादशाओं में शुक्र (बीस वर्ष) और शनि (उन्नीस वर्ष) के बाद तीसरी सबसे लम्बी। इसमें नौ अन्तर्दशाएँ हैं, जो राहु-सूर्य (लगभग 11 माह) से लेकर राहु-शुक्र (पूरे 3 वर्ष) तक होती हैं। अपनी राहु महादशा की सटीक प्रारम्भ तिथि, समाप्ति तिथि, और वर्तमान उप-काल देखने के लिए महादशा कैलकुलेटर का उपयोग करें।`,
      },
    },
    {
      question: { en: 'Is Rahu Mahadasha good or bad?', hi: 'राहु महादशा शुभ है या अशुभ?' },
      answer: {
        en: `Neither is the right reading. Rahu is a chhaya graha (shadow planet) — it amplifies the karaka of the house it occupies, the sign it sits in, and the planet aspecting it. A Rahu in the eleventh house aspected by Jupiter delivers eighteen years of structured ambition and large income; the same Rahu in the twelfth aspected by Mars delivers eighteen years of chaos. Calling the dasha "good" or "bad" without that context produces useless predictions. The dasha's net effect is decided by your specific natal placement.`,
        hi: `कोई भी पाठ सही नहीं है। राहु छाया ग्रह हैं — वह जिस भाव पर बैठते हैं उसके कारक, जिस राशि में हैं उसके स्वभाव, और जो ग्रह उन पर दृष्टि देता है उसकी प्रकृति को बढ़ाते हैं। एकादश भाव में राहु पर गुरु की दृष्टि अठारह वर्ष की संरचित महत्त्वाकांक्षा और बड़ी आय देती है; द्वादश भाव में वही राहु मंगल की दृष्टि से अठारह वर्ष की अव्यवस्था देता है। बिना इस सन्दर्भ के दशा को "शुभ" या "अशुभ" कहने से अनुपयोगी भविष्यवाणियाँ बनती हैं। दशा का शुद्ध फल आपकी विशिष्ट जन्म-स्थिति से निर्धारित होता है।`,
      },
    },
    {
      question: { en: 'What career fields suit Rahu Mahadasha?', hi: 'राहु महादशा के लिए कौन-से व्यवसाय अनुकूल हैं?' },
      answer: {
        en: `Technology (especially software, AI, cybersecurity, and crypto), mass media (television, social media, advertising, cinema), foreign trade and import-export, aviation, hospitality and tourism, photography and visual arts, pharmaceuticals, leveraged finance and trading, intelligence work, and any field that did not exist a generation ago. Conventional sectors — agriculture, public school teaching, traditional manufacturing — are workable but rarely produce the dasha's signature rapid rises.`,
        hi: `प्रौद्योगिकी (विशेषकर सॉफ़्टवेयर, एआई, साइबर सुरक्षा, और क्रिप्टो), जन-मीडिया (टीवी, सोशल मीडिया, विज्ञापन, सिनेमा), विदेशी व्यापार एवं आयात-निर्यात, विमानन, आतिथ्य एवं पर्यटन, छायाचित्र एवं दृश्य कला, औषधि, उधारित वित्त एवं व्यापार, गुप्तचर कार्य, और प्रत्येक वह क्षेत्र जो एक पीढ़ी पहले अस्तित्व में नहीं था। पारम्परिक क्षेत्र — कृषि, शासकीय शिक्षक, परम्परागत निर्माण — सध्य हैं किन्तु इस दशा की विशिष्ट तीव्र उठानें प्रायः नहीं देते।`,
      },
    },
    {
      question: { en: 'Is Rahu Mahadasha good for marriage?', hi: 'क्या राहु महादशा विवाह के लिए शुभ है?' },
      answer: {
        en: `Rahu Mahadasha tends to produce unconventional marriages — inter-faith, inter-caste, foreign, with significant age difference, or after divorce — more often than conventional ones. Whether they last depends on natal Venus and the seventh lord. If those two are strong and Rahu is well-placed, the marriage can be the chart's most expansive partnership. If they are weak or Rahu is afflicted, the dasha can produce affairs, separations, or marriages that look glamorous early and become difficult to sustain. Pre-marriage chart matching is more important in this dasha than in any other.`,
        hi: `राहु महादशा प्रायः अपरम्परागत विवाह देती है — अन्तर्धार्मिक, अन्तर्जातीय, विदेशी, उल्लेखनीय आयु-अन्तर वाले, अथवा विच्छेद के पश्चात् — परम्परागत विवाह से अधिक। ये टिकेंगे या नहीं, यह जन्म-कुण्डली के शुक्र और सप्तमेश पर निर्भर करता है। यदि वे दोनों बलवान हैं और राहु बलवान, तो विवाह कुण्डली की सबसे विस्तारकारी साझेदारी बन सकता है। यदि वे निर्बल हैं अथवा राहु पीड़ित, तो दशा अन्य सम्बन्ध, विछोह, अथवा ऐसे विवाह दे सकती है जो आरम्भ में आकर्षक लगें किन्तु निभाने में कठिन। इस दशा में पूर्व-विवाह कुण्डली मिलान किसी भी अन्य दशा से अधिक महत्त्वपूर्ण है।`,
      },
    },
    {
      question: { en: 'What are the best remedies for Rahu Mahadasha?', hi: 'राहु महादशा के सर्वोत्तम उपाय क्या हैं?' },
      answer: {
        en: `Five layered remedies work in combination: daily Hanuman Chalisa or Durga Saptashati recitation, weekly Saturday temple visit with mustard-oil lamp offering to Hanuman, monthly Amavasya donation to migrant workers or the homeless, observing Rahu Kalam discipline (no major commitments during the daily ninety-minute Rahu hour), and a digital-and-substance hygiene rule for the duration of difficult antardashas. Hessonite (Gomedh) gemstone is optional and only after a competent jyotishi has read your full natal chart. Random remedies without a chart reading often make the dasha worse, not better.`,
        hi: `पाँच परस्पर मिश्रित उपाय कार्य करते हैं: दैनिक हनुमान चालीसा अथवा दुर्गा सप्तशती पाठ, साप्ताहिक शनिवार मन्दिर दर्शन के साथ हनुमान को सरसों-तेल दीप अर्पण, मासिक अमावस्या को प्रवासी श्रमिकों अथवा निराश्रितों को दान, राहु कालम् अनुशासन का पालन (दैनिक नब्बे मिनट के राहु घण्टे में बड़ी प्रतिबद्धताएँ नहीं), और कठिन अन्तर्दशाओं की अवधि में डिजिटल-एवं-मादक स्वच्छता नियम। गोमेद रत्न ऐच्छिक है और केवल किसी सक्षम ज्योतिषी द्वारा पूर्ण जन्म-कुण्डली पढ़ने के पश्चात्। बिना कुण्डली पाठ के अनियमित उपाय प्रायः दशा को सुधारने के बजाय बिगाड़ देते हैं।`,
      },
    },
    {
      question: { en: 'Will I go abroad in Rahu Mahadasha?', hi: 'क्या राहु महादशा में मैं विदेश जाऊँगा?' },
      answer: {
        en: `Foreign travel or settlement is one of Rahu's strongest signatures, but it is not automatic. The chart needs to support it — the ninth lord, the twelfth lord, or the Lagna lord must have a connection to Rahu, the seventh house, or a foreign-signifying placement. When that connection exists, the antardashas of Rahu, Saturn, Mercury, or Venus during Rahu Mahadasha typically deliver the move. When it does not, the dasha may still produce mental and professional foreign exposure (work with foreign companies, multinational clients) without physical relocation.`,
        hi: `विदेश यात्रा अथवा स्थापना राहु के सर्वाधिक प्रबल संकेतकों में से है, किन्तु यह स्वतः नहीं। कुण्डली को इसका समर्थन चाहिए — नवमेश, द्वादशेश, अथवा लग्नेश का राहु, सप्तम भाव, अथवा किसी विदेश-कारक स्थिति से सम्बन्ध। जब यह सम्बन्ध हो, तब राहु महादशा में राहु, शनि, बुध, अथवा शुक्र की अन्तर्दशा प्रायः प्रस्थान देती है। जब न हो, तब भी दशा मानसिक एवं व्यावसायिक विदेशी सम्पर्क (विदेशी कम्पनियों के साथ कार्य, बहुराष्ट्रीय ग्राहक) दे सकती है — बिना भौतिक स्थानान्तरण के।`,
      },
    },
    {
      question: { en: 'How does Rahu affect mental health?', hi: 'राहु मानसिक स्वास्थ्य को कैसे प्रभावित करता है?' },
      answer: {
        en: `Rahu rules the nervous system and the unconscious mind. In a difficult dasha, anxiety disorders, sleep dysregulation, depersonalisation, intrusive thoughts, and substance dependence can surface even in natives with no prior history. This is not a moral failing or a karmic punishment — it is a measurable astrological signature, and it responds to combined treatment: regular psychiatric care if symptoms are clinical, daily mantra practice for the subtler layer, lifestyle hygiene (sleep, food, screens), and reduced stimulants. Do not handle Rahu mental health symptoms with astrological remedies alone; combine them with appropriate medical or psychological care, especially in adolescent or postpartum natives.`,
        hi: `राहु स्नायु-तन्त्र और अचेतन मन पर शासन करते हैं। कठिन दशा में चिन्ता-विकार, निद्रा-असन्तुलन, स्व-विसंगति, घुसपैठी विचार, और मादक-निर्भरता ऐसे जातकों में भी उभर सकती है जिनका पूर्व इतिहास नहीं। यह नैतिक दोष अथवा कर्म-दण्ड नहीं — यह मापनीय ज्योतिष-संकेत है, और यह संयुक्त उपचार पर प्रतिक्रिया देता है: यदि लक्षण नैदानिक हों तो नियमित मनोरोग-चिकित्सा, सूक्ष्म स्तर के लिए दैनिक मन्त्र अभ्यास, जीवन-शैली स्वच्छता (निद्रा, भोजन, स्क्रीन), और उत्तेजकों में कमी। राहु के मानसिक स्वास्थ्य लक्षणों को केवल ज्योतिष उपायों से न सम्भालें; उन्हें उपयुक्त चिकित्सकीय अथवा मनोवैज्ञानिक देखभाल के साथ संयोजित करें — विशेषकर किशोर अथवा प्रसवोत्तर जातकों में।`,
      },
    },
  ],

  howToSteps: [
    {
      name: { en: 'Generate your Vimshottari timeline', hi: 'अपनी विंशोत्तरी समय-रेखा बनाएँ' },
      text: {
        en: 'Enter your date, time, and place of birth into the Mahadasha Calculator. The full 120-year sequence will reveal exactly when Rahu Mahadasha begins, ends, and which antardashas you will run within it.',
        hi: 'महादशा कैलकुलेटर में अपनी जन्म तिथि, समय, और स्थान दर्ज करें। पूर्ण 120 वर्ष का क्रम दिखाएगा कि राहु महादशा कब आरम्भ होगी, कब समाप्त, और भीतर कौन-कौन सी अन्तर्दशाएँ चलेंगी।',
      },
    },
    {
      name: { en: 'Locate Rahu in your natal chart', hi: 'जन्म कुण्डली में राहु की स्थिति देखें' },
      text: {
        en: 'In the rashi chart find Rahu\'s house and sign. Note the dispositor (the lord of Rahu\'s sign), conjunct planets, and any aspects from Jupiter or Saturn. These four data points decide whether the dasha will be expansive or destabilising.',
        hi: 'राशि चक्र में राहु का भाव और राशि देखें। राशीश (राहु की राशि का स्वामी), साथ के ग्रह, और गुरु अथवा शनि से दृष्टि नोट करें। ये चार आँकड़े निर्धारित करते हैं कि दशा विस्तारकारी होगी अथवा अस्थिर-कारी।',
      },
    },
    {
      name: { en: 'Identify the running antardasha', hi: 'चालू अन्तर्दशा पहचानें' },
      text: {
        en: 'Within Rahu Mahadasha there are nine sub-periods: Rahu, Jupiter, Saturn, Mercury, Ketu, Venus, Sun, Moon, Mars. The current antardasha lord modifies the parent Rahu\'s output for that span. Difficult antardashas (Sun, Moon, Mars) call for active remedies; favourable ones (Jupiter, Saturn, Mercury, Venus) are operational planning windows.',
        hi: 'राहु महादशा के भीतर नौ उप-काल हैं: राहु, गुरु, शनि, बुध, केतु, शुक्र, सूर्य, चन्द्र, मंगल। वर्तमान अन्तर्दशेश इस अवधि में मूल राहु के फल को परिमार्जित करता है। कठिन अन्तर्दशाएँ (सूर्य, चन्द्र, मंगल) सक्रिय उपायों की माँग करती हैं; अनुकूल (गुरु, शनि, बुध, शुक्र) कार्यगत नियोजन-खण्ड हैं।',
      },
    },
    {
      name: { en: 'Cross-check transit Rahu', hi: 'गोचर राहु मिलाएँ' },
      text: {
        en: 'Rahu transits a sign for about eighteen months. Note where Rahu is moving today relative to your natal Moon and natal Lagna. Rahu over the 1st, 7th, or near a major natal planet during a difficult antardasha is the period\'s most volatile moment; plan it conservatively.',
        hi: 'राहु एक राशि में लगभग अठारह माह रहते हैं। आज राहु कहाँ चल रहे हैं — अपनी जन्म-चन्द्र राशि एवं जन्म लग्न के सापेक्ष — यह नोट करें। कठिन अन्तर्दशा के दौरान राहु का जन्म लग्न से 1, 7, अथवा किसी प्रमुख जन्म ग्रह के समीप गोचर — काल का सबसे अस्थिर क्षण; इसकी सावधानीपूर्वक योजना बनाएँ।',
      },
    },
    {
      name: { en: 'Apply layered remedies', hi: 'स्तरित उपाय लागू करें' },
      text: {
        en: 'Stack five low-cost remedies first — daily mantra, weekly temple visit, monthly donation, daily Rahu Kalam discipline, and digital hygiene. Add gemstone (Gomedh or its softer alternative Garnet) only after a competent jyotishi has read your chart and the gem has been trial-worn under the pillow for three nights. Random remedies without a chart reading often misfire.',
        hi: 'पहले पाँच कम-लागत उपायों को परतों में लागू करें — दैनिक मन्त्र, साप्ताहिक मन्दिर दर्शन, मासिक दान, दैनिक राहु कालम् अनुशासन, और डिजिटल स्वच्छता। रत्न (गोमेद अथवा उसका कोमल विकल्प गारनेट) केवल तब जब सक्षम ज्योतिषी ने आपकी कुण्डली पढ़ी हो और रत्न तीन रातें तकिए के नीचे परीक्षण किया गया हो। बिना कुण्डली पाठ के अनियमित उपाय प्रायः उल्टा प्रभाव डालते हैं।',
      },
    },
    {
      name: { en: 'Track in eighteen-month windows', hi: 'अठारह-मासी खण्डों में अनुसरण करें' },
      text: {
        en: 'Treat the dasha as twelve overlapping eighteen-month tracking windows. Every eighteen months, audit honestly: is the new direction Rahu opened sustainable, or is it leveraged on appearances? Saturn-aspect sub-periods inside the dasha are the right times to consolidate; Mars and Sun sub-periods are the wrong times to leverage further. Honest mid-course corrections turn Rahu\'s eighteen years from a polarising gamble into a navigable rise.',
        hi: 'दशा को बारह अतिव्यापी अठारह-मासी ट्रैकिंग खण्डों के रूप में देखें। प्रत्येक अठारह माह पर ईमानदार समीक्षा करें: राहु ने जो नई दिशा खोली है, क्या वह टिकाऊ है, अथवा वह दिखावे पर खड़ी है? दशा के भीतर शनि-दृष्ट उप-काल सुदृढ़ीकरण के सही समय हैं; मंगल एवं सूर्य उप-काल और उधार लेने के ग़लत समय। ईमानदार मध्य-मार्ग सुधार राहु के अठारह वर्षों को ध्रुवीकरण-कारी जुए से सुसाध्य उत्थान में बदल देते हैं।',
      },
    },
  ],

  datePublished: '2026-05-02',
  dateModified: '2026-05-02',
};
