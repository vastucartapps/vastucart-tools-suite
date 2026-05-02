import type { PlanetRecord } from '../types';

export const KETU: PlanetRecord = {
  slug: 'ketu',
  displayName: { en: 'Ketu Mahadasha', hi: 'केतु महादशा' },
  westernName: 'South Lunar Node',
  beejMantra: 'Om Sraam Sreem Sraum Sah Ketave Namah',
  periodYears: 7,
  periodDays: Math.round(7 * 365.25),
  karaka: {
    en: ['moksha', 'detachment', 'past-life karma', 'sudden change', 'spirituality', 'occult', 'isolation', 'liberation'],
    hi: ['मोक्ष', 'वैराग्य', 'पूर्व-जन्म कर्म', 'अकस्मात् परिवर्तन', 'आध्यात्मिकता', 'तन्त्र', 'एकान्त', 'मुक्ति'],
  },
  ownSigns: ['Scorpio (co-ruler in some schools)'],
  exaltation: { sign: 'Scorpio', degree: 20 },
  debilitation: { sign: 'Taurus', degree: 20 },
  friendly: ['mangal', 'shukra', 'shani'],
  neutral: ['budh', 'guru'],
  enemy: ['surya', 'chandra'],
  weekday: { en: '— (no fixed day; Tuesday by Mars-affinity)', hi: '— (कोई निश्चित दिन नहीं; मंगल-साम्य से मंगलवार)' },
  deity: { en: 'Ganesha, Subramanya, Goddess Chinnamasta', hi: 'गणेश, सुब्रमण्य, छिन्नमस्ता देवी' },
  gemstone: { en: 'Cat\'s Eye (Lehsuniya)', hi: 'लहसुनिया' },
  themeColor: { primary: '#5D4037', accent: '#8D6E63' },
  icon: 'orbit',

  intro: {
    en: `Ketu Mahadasha is one of the strangest of the nine major periods. Seven years under the Moon\'s south node — the calculated point where the lunar orbit crosses the ecliptic going south — and the chart\'s most quietly transformational chapter usually unfolds. Like Rahu, Ketu is not a physical planet; he is a mathematical opposite of the same shadow, and the Vedic seers gave him graha-status because they observed that natives running his seven years underwent renunciations, withdrawals, sudden endings, and inward turnings that no physical planet could explain. Where Rahu inflates, Ketu deflates. Where Rahu pursues, Ketu releases. Where Rahu accumulates, Ketu burns. The classical writers describe Ketu as moksha-karaka — the planet of liberation — and his dasha is the period when whatever the chart was attached to gets honestly examined. Some natives discover deep spiritual practice in these seven years. Others lose what they thought was permanent and rebuild around what is actually theirs. The dasha is rarely loud, but it is rarely without consequence.`,
    hi: `नौ प्रमुख दशाओं में केतु महादशा सबसे विचित्र में से एक है। चन्द्र-दक्षिण-पात के अधीन सात वर्ष — वह गणितीय बिन्दु जहाँ चन्द्र-कक्षा क्रान्तिवृत्त को दक्षिण की ओर पार करती है — और कुण्डली का सर्वाधिक शान्त रूप से रूपान्तरण-कारी अध्याय प्रायः खुलता है। राहु की भाँति केतु भी कोई भौतिक ग्रह नहीं; वे उसी छाया का गणितीय विपरीत हैं, और वैदिक ऋषियों ने उन्हें ग्रह-पदवी इसलिए दी क्योंकि उन्होंने देखा कि उनके सात वर्ष चलाने वाले जातक ऐसे संन्यास, विरक्ति, अकस्मात् अन्त, और अन्तर्मुखता से गुज़रते हैं जिनकी व्याख्या कोई भौतिक ग्रह नहीं कर सकता। जहाँ राहु फूलते हैं, वहाँ केतु सिकुड़ते हैं। जहाँ राहु पीछा करते हैं, वहाँ केतु छोड़ते हैं। जहाँ राहु संचित करते हैं, वहाँ केतु जलाते हैं। शास्त्रीय लेखक केतु को मोक्ष-कारक कहते हैं — मुक्ति के ग्रह — और उनकी दशा वह काल है जब कुण्डली जिससे आसक्त थी उसकी ईमानदार जाँच होती है। कुछ जातक इन सात वर्षों में गहन आध्यात्मिक साधना खोजते हैं। दूसरे जो स्थायी समझा था उसे खोते हैं और जो वस्तुतः उनका है उसके चारों ओर पुनर्निर्माण करते हैं। दशा विरले उच्च स्वर में होती है, परन्तु विरले परिणाम के बिना भी।`,
  },

  periodOverview: {
    en: `Seven years under Ketu — second-shortest of the major periods alongside Mars. The Vimshottari order from Ketu is Ketu–Ketu (about 4 months 27 days), Shukra, Surya, Chandra, Mangal, Rahu, Guru, Shani, Budh. Three sub-periods are operationally important: Ketu–Venus (1 year 2 months — the longest sub-period, often the dasha\'s most relationally tested window), Ketu–Saturn (1 year 1 month — the dasha\'s heaviest discipline-and-loneliness antardasha), and Ketu–Jupiter (11 months 6 days — the dasha\'s most spiritually opening window). The shorter Sun, Moon, Mars, Mercury sub-periods are episodic chapters within the larger arc. Read the dasha as four spiritual seasons rather than seven flat years. The first season (Ketu–Ketu + Ketu–Venus) tests attachment; the second (Ketu–Sun + Ketu–Moon) tests authority and emotion; the third (Ketu–Mars + Ketu–Rahu) tests will and ambition; the fourth (Ketu–Jupiter + Ketu–Saturn + Ketu–Mercury) opens the dasha\'s deepest transformations and prepares the handover to Venus mahadasha.`,
    hi: `केतु के अधीन सात वर्ष — मंगल के साथ प्रमुख दशाओं में दूसरी सबसे छोटी। केतु से विंशोत्तरी क्रम है — केतु-केतु (लगभग 4 माह 27 दिन), शुक्र, सूर्य, चन्द्र, मंगल, राहु, गुरु, शनि, बुध। तीन उप-काल कार्यगत रूप से महत्त्वपूर्ण हैं: केतु-शुक्र (1 वर्ष 2 माह — सबसे लम्बा उप-काल, प्रायः दशा का सर्वाधिक सम्बन्धात्मक रूप से परीक्षित खण्ड), केतु-शनि (1 वर्ष 1 माह — दशा की सबसे भारी अनुशासन-एवं-एकाकीपन अन्तर्दशा), और केतु-गुरु (11 माह 6 दिन — दशा का सर्वाधिक आध्यात्मिक रूप से खुलने वाला खण्ड)। लघु सूर्य, चन्द्र, मंगल, बुध उप-काल बड़े चाप के भीतर खण्डात्मक अध्याय हैं। दशा को सात समतल वर्षों के बजाय चार आध्यात्मिक ऋतुओं के रूप में पढ़ें। प्रथम ऋतु (केतु-केतु + केतु-शुक्र) आसक्ति की परीक्षा लेती है; द्वितीय (केतु-सूर्य + केतु-चन्द्र) अधिकार एवं भावना की; तृतीय (केतु-मंगल + केतु-राहु) इच्छा-शक्ति एवं महत्त्वाकांक्षा की; चतुर्थ (केतु-गुरु + केतु-शनि + केतु-बुध) दशा के गहनतम रूपान्तरण खोलती है और शुक्र महादशा को सुपुर्दगी की तैयारी करती है।`,
  },

  wellPlacedEffects: {
    en: `When Ketu is well-placed in the natal chart — in own/co-ruled sign Scorpio, exalted in Scorpio (degree 20), in third or sixth or eleventh, conjunct or aspected by friendly planets (Mars, Venus, Saturn) — the seven years can deliver one of the chart\'s most quietly accomplished and inwardly mature periods. Spiritual practice that had been intermittent finally takes structural root. The native may take formal initiation, complete a long-postponed retreat or pilgrimage, or settle into a contemplative discipline that becomes a lifelong anchor. Career-wise, work that involves research, investigation, depth psychology, occult practice, surgical specialty, forensic analysis, intelligence work, archaeology, manuscript study, and any field requiring sustained inward focus prospers. Athletes and performers running well-placed Ketu often report sharpened focus and uncanny consistency. Health-wise, well-placed Ketu protects from sudden illness, gives quick recovery from injury, and stabilises the autoimmune system. The deepest gift is internal: the native develops the capacity to be content without acquiring more, and to perform decisively without needing recognition. Many natives describe the seven years as the period in which they finally felt at home in their own skin. The dasha\'s gift is rarely loud, but it usually outlasts the dasha by decades.`,
    hi: `जब जन्म-कुण्डली में केतु बलवान हों — स्व/सह-स्वामित्व राशि वृश्चिक में, उच्च के वृश्चिक में (अंश 20), तृतीय अथवा षष्ठ अथवा एकादश में, मित्र ग्रहों (मंगल, शुक्र, शनि) से युक्त अथवा दृष्ट — तब सात वर्ष कुण्डली के सर्वाधिक शान्त रूप से उपलब्धि-पूर्ण एवं आन्तरिक रूप से परिपक्व कालों में से एक दे सकते हैं। जो आध्यात्मिक साधना खण्डित थी वह अन्ततः संरचनात्मक जड़ पकड़ती है। जातक औपचारिक दीक्षा ले सकता है, दीर्घ-स्थगित एकान्त-साधना अथवा तीर्थयात्रा पूर्ण कर सकता है, अथवा ऐसे चिन्तनशील अनुशासन में बैठ सकता है जो आजीवन आधार बने। करियर की दृष्टि से — शोध, अनुसन्धान, गहन-मनोविज्ञान, तान्त्रिक साधना, शल्य विशेषज्ञता, फोरेन्सिक विश्लेषण, गुप्तचर कार्य, पुरातत्त्व, पाण्डुलिपि अध्ययन, और निरन्तर अन्तर्मुख ध्यान माँगने वाले किसी भी क्षेत्र में फलते हैं। बलवान केतु चलाने वाले खिलाड़ी एवं प्रदर्शक प्रायः तीक्ष्ण एकाग्रता एवं अद्भुत निरन्तरता रिपोर्ट करते हैं। स्वास्थ्य की दृष्टि से बलवान केतु अकस्मात् रोग से बचाते हैं, चोट से तीव्र स्वास्थ्य-लाभ देते हैं, और स्व-प्रतिरक्षा-तन्त्र को स्थिर करते हैं। सर्वाधिक गहरा उपहार आन्तरिक है: जातक अधिक अर्जित किए बिना सन्तुष्ट होने की क्षमता विकसित करता है, और मान्यता की आवश्यकता के बिना निर्णायक प्रदर्शन की। अनेक जातक इन सात वर्षों को उस काल के रूप में वर्णित करते हैं जब उन्हें अन्ततः अपने ही शरीर में घर अनुभव हुआ। दशा का उपहार विरले उच्च स्वर में होता है, परन्तु प्रायः दशकों तक रहता है।`,
  },

  afflictedEffects: {
    en: `When Ketu is afflicted — in second or seventh house (the marak houses), debilitated in Taurus, conjunct enemies (Sun, Moon), or in dusthana with malefic aspects — the seven years can run as compressed dissolution. Sudden ending of a job, marriage strain or separation (especially if Ketu is in the seventh), inexplicable health symptoms (autoimmune disorders, mysterious fevers, nervous-system complaints, allergies that emerged from nowhere), social isolation, depression that does not respond to conventional treatment, financial leakage with no traceable cause, or in difficult charts the loss of a parent or close family member. Ketu\'s dasha can also produce false spiritual paths — cults, manipulative gurus, addictive meditation patterns, dissociation marketed as enlightenment. The classical writers warn specifically about Ketu in the second house (marak): possible loss of family wealth, eye/dental issues, and difficulty with food during the dasha. The afflicted Ketu dasha asks the native to release attachments they thought were structural — and the difficulty is that the native rarely sees in advance which attachments are real and which are illusory. Most natives running afflicted Ketu describe the seven years as bewildering during their unfolding and clarifying only in retrospect. The honest practice is to wait — Ketu reveals what was real after he has finished removing what was not.`,
    hi: `जब केतु पीड़ित हों — द्वितीय अथवा सप्तम भाव (मारक) में, वृष में नीच के, शत्रुओं (सूर्य, चन्द्र) से युक्त, अथवा पाप-दृष्टियों के साथ दुस्थान में — तब सात वर्ष संघनित विलयन के रूप में चल सकते हैं। नौकरी का अकस्मात् अन्त, वैवाहिक तनाव अथवा विछोह (विशेषकर यदि केतु सप्तम में हों), अव्याख्यायित स्वास्थ्य लक्षण (स्व-प्रतिरक्षा विकार, रहस्यमय ज्वर, स्नायु-तन्त्र समस्याएँ, अकस्मात् उभरी एलर्जी), सामाजिक एकाकीपन, ऐसा अवसाद जो परम्परागत उपचार पर प्रतिक्रिया न दे, बिना खोजे जा सकने वाले कारण के आर्थिक रिसाव, अथवा कठिन कुण्डलियों में माता-पिता अथवा निकट स्वजन की हानि। केतु की दशा झूठे आध्यात्मिक मार्ग भी उत्पन्न कर सकती है — सम्प्रदाय, छल-कपट करने वाले गुरु, व्यसनी ध्यान-स्वरूप, बोध के रूप में बिकी हुई वियुक्ति। शास्त्रीय लेखक विशेष रूप से द्वितीय भाव में केतु की चेतावनी देते हैं (मारक): दशा में पारिवारिक धन-हानि, नेत्र/दन्त समस्याएँ, और भोजन में कठिनाई सम्भव। पीड़ित केतु दशा जातक से उन आसक्तियों के त्याग की माँग करती है जिन्हें वह संरचनात्मक समझता था — और कठिनाई यह है कि जातक प्रायः पहले से नहीं देख सकता कि कौन-सी आसक्तियाँ वास्तविक हैं और कौन-सी मायावी। पीड़ित केतु चलाने वाले अधिकांश जातक सात वर्षों को उनके खुलते समय भ्रामक और केवल पीछे देखकर स्पष्ट होने वाले के रूप में वर्णित करते हैं। ईमानदार अभ्यास है प्रतीक्षा — केतु दिखाते हैं कि क्या वास्तविक था जब वे जो वास्तविक नहीं था उसे हटा चुके होते हैं।`,
  },

  houseEffects: [
    { house: 1, effect: { en: 'Strong placement (especially in Scorpio). Personality becomes inward, focused, sometimes mysterious. Body sharpens; possible thinness. Suits researchers, mystics, athletes.', hi: 'बलवान स्थिति (विशेषकर वृश्चिक में)। व्यक्तित्व अन्तर्मुख, केन्द्रित, कभी-कभी रहस्यमय। शरीर तीक्ष्ण; पतलापन सम्भव। शोधकर्ता, रहस्यवादी, खिलाड़ियों के अनुकूल।' } },
    { house: 2, effect: { en: 'Difficult placement (marak). Family wealth fluctuates, dental/eye issues, possible food allergies. Speech can be cryptic. Suits poets of brevity, occult writers.', hi: 'कठिन स्थिति (मारक)। पारिवारिक धन में उतार-चढ़ाव, दन्त/नेत्र समस्याएँ, खाद्य एलर्जी सम्भव। वाणी रहस्यमय हो सकती है। संक्षिप्तता के कवि, तान्त्रिक लेखकों के अनुकूल।' } },
    { house: 3, effect: { en: 'Strong placement. Sharp focus on niche subjects, sibling support quiet but present, success in research-driven communication. Excellent for investigative journalists, depth-psychologists.', hi: 'बलवान स्थिति। विशिष्ट विषयों पर तीक्ष्ण ध्यान, भाई-बहन सहयोग शान्त किन्तु उपस्थित, शोध-केन्द्रित सम्वाद में सफलता। अनुसन्धान-पत्रकार, गहन-मनोवैज्ञानिकों के लिए उत्कृष्ट।' } },
    { house: 4, effect: { en: 'Difficult. Mother\'s emotional distance, residential change without clear pattern, vehicle changes. Suits monks, ashram residents, those who can be at peace without a fixed home.', hi: 'कठिन। माता से भावनात्मक दूरी, बिना स्पष्ट पैटर्न के निवास परिवर्तन, वाहन परिवर्तन। संन्यासी, आश्रमवासी, जो स्थिर गृह के बिना शान्त रह सकते हैं — के अनुकूल।' } },
    { house: 5, effect: { en: 'Mixed. Children\'s independence early, speculation losses if undisciplined, occult studies, possible sannyasic inclination. Suits child psychologists, occult researchers.', hi: 'मिश्रित। सन्तानों की शीघ्र स्वतन्त्रता, अनुशासनहीनता पर सट्टे में हानि, तान्त्रिक अध्ययन, सन्न्यासी प्रवृत्ति सम्भव। बाल मनोवैज्ञानिक, तान्त्रिक शोधकर्ताओं के अनुकूल।' } },
    { house: 6, effect: { en: 'Strong placement. Defeats enemies through detachment, succeeds in healthcare specialties (oncology, infectious disease, occupational therapy), legal practice, hospital administration.', hi: 'बलवान स्थिति। वैराग्य से शत्रु पराजित, स्वास्थ्य-सेवा विशेषज्ञताओं (कैन्सर, संक्रामक रोग, व्यावसायिक चिकित्सा), विधि-प्रथा, अस्पताल प्रशासन में सफलता।' } },
    { house: 7, effect: { en: 'Difficult placement (marak). Marriage stressed; partner may be distant, austere, or inclined to renunciation. Business partnerships need rigorous structure. Best for diplomats, conflict mediators, monastic teachers.', hi: 'कठिन स्थिति (मारक)। विवाह तनाव में; जीवनसाथी दूर, संयमी, अथवा संन्यास-प्रवण हो सकता है। व्यापारिक साझेदारी कठोर संरचना माँगती है। राजनयिक, संघर्ष-मध्यस्थ, सन्यासी शिक्षकों के लिए श्रेष्ठ।' } },
    { house: 8, effect: { en: 'Strongest spiritual placement. Occult mastery, deep transformation, surgical/research excellence, awareness of past lives. Suits occult practitioners, surgeons, researchers, mortuary specialists.', hi: 'सर्वाधिक प्रबल आध्यात्मिक स्थिति। तान्त्रिक निपुणता, गहन रूपान्तरण, शल्य/शोध उत्कृष्टता, पूर्व-जन्म-बोध। तान्त्रिक साधक, शल्य चिकित्सक, अनुसन्धाता, श्मशान विशेषज्ञों के अनुकूल।' } },
    { house: 9, effect: { en: 'Strong placement for spirituality. Father\'s religious influence, foreign pilgrimage, dharmic teaching of esoteric subjects. Suits monks, religious scholars, mystical teachers.', hi: 'आध्यात्मिकता के लिए बलवान स्थिति। पिता का धार्मिक प्रभाव, विदेशी तीर्थयात्रा, गूढ़ विषयों का धार्मिक शिक्षण। संन्यासी, धार्मिक विद्वान्, रहस्यमय शिक्षकों के अनुकूल।' } },
    { house: 10, effect: { en: 'Mixed. Career through specialised expertise that few share, public visibility quiet, possible withdrawal from a high-profile role. Suits niche specialists, behind-the-scenes leaders.', hi: 'मिश्रित। ऐसी विशिष्ट विशेषज्ञता से करियर जो विरले लोग साझा करते हैं, सार्वजनिक दृश्यता शान्त, उच्च-प्रोफ़ाइल भूमिका से विरक्ति सम्भव। विशिष्ट विशेषज्ञ, पर्दे-के-पीछे के नेताओं के अनुकूल।' } },
    { house: 11, effect: { en: 'Strong income placement. Earnings from niche expertise, network of unconventional friends, fulfilment of inwardly chosen goals. Detachment from material status.', hi: 'बलवान आय-स्थिति। विशिष्ट विशेषज्ञता से कमाई, अपरम्परागत मित्रों का नेटवर्क, आन्तरिक रूप से चुने गए लक्ष्यों की पूर्ति। भौतिक स्थिति से वैराग्य।' } },
    { house: 12, effect: { en: 'Strong spiritual placement. Foreign monastic life, hospital service, ashram residence, deep meditation. Sleep can be very deep or extremely disturbed.', hi: 'बलवान आध्यात्मिक स्थिति। विदेशी सन्यासी जीवन, अस्पताल सेवा, आश्रमवास, गहन ध्यान। निद्रा अत्यन्त गहरी अथवा अत्यधिक बाधित हो सकती है।' } },
  ],

  antardashas: [
    {
      subRuler: 'Ketu',
      label: { en: 'Ketu–Ketu Antardasha', hi: 'केतु-केतु अन्तर्दशा' },
      duration: { en: 'About 4 months 27 days', hi: 'लगभग 4 माह 27 दिन' },
      effect: {
        en: `The opening sub-period sets the dasha\'s tone. Most natives report a marked withdrawal in the first hundred days — a project gets cancelled, a relationship dissolves, a job changes, a residence moves, a familiar habit drops. Sleep becomes unusual; dreams become vivid. Some natives describe a brief period of depression or disorientation that resolves into clarity by the antardasha\'s close. Avoid major commitments in this opening window; let the new pattern reveal itself first.`,
        hi: `प्रारम्भिक उप-काल दशा का स्वर निर्धारित करता है। अधिकांश जातक प्रथम सौ दिनों में स्पष्ट विरक्ति रिपोर्ट करते हैं — परियोजना रद्द, सम्बन्ध विघटित, नौकरी बदलती है, निवास हटता है, परिचित आदत छूटती है। निद्रा असामान्य; स्वप्न सजीव। कुछ जातक संक्षिप्त अवसाद अथवा दिशाहीनता का काल वर्णित करते हैं जो अन्तर्दशा के अन्त तक स्पष्टता में विलीन हो जाता है। इस प्रारम्भिक खण्ड में बड़ी प्रतिबद्धताओं से बचें; पहले नये स्वरूप को स्वयं प्रकट होने दें।`,
      },
    },
    {
      subRuler: 'Shukra',
      label: { en: 'Ketu–Shukra Antardasha', hi: 'केतु-शुक्र अन्तर्दशा' },
      duration: { en: 'About 1 year 2 months 0 days', hi: 'लगभग 1 वर्ष 2 माह 0 दिन' },
      effect: {
        en: `The longest sub-period of the seven years. Ketu and Venus are friends but the combination is often the dasha\'s most relationally tested window. Marriage if delayed; in afflicted charts, marital separation. The native\'s aesthetic preferences shift — what was prized may be released, and a quieter or more austere taste emerges. Income from creative work continues but with reduced enjoyment of the rewards. Many natives describe these fourteen months as the period when they understood the difference between pleasure and contentment. Health-wise, kidney/urinary issues possible if Venus is afflicted; reproductive concerns for women natives need monitoring.`,
        hi: `सात वर्षों का सबसे लम्बा उप-काल। केतु और शुक्र मित्र हैं किन्तु संयोजन प्रायः दशा का सर्वाधिक सम्बन्धात्मक रूप से परीक्षित खण्ड होता है। यदि विलम्बित हो तो विवाह; पीड़ित कुण्डलियों में वैवाहिक विछोह। जातक की सौन्दर्य-प्राथमिकताएँ बदलती हैं — जो प्रिय था वह छूट सकता है, और शान्त अथवा अधिक संयमित रुचि उभरती है। रचनात्मक कार्य से आय जारी किन्तु पुरस्कार के घटे हुए आनन्द के साथ। अनेक जातक इन चौदह मासों को उस काल के रूप में वर्णित करते हैं जब उन्होंने आनन्द एवं सन्तोष के बीच अन्तर समझा। स्वास्थ्य की दृष्टि से शुक्र पीड़ित हों तो वृक्क/मूत्र समस्याएँ सम्भव; महिला जातकों के लिए प्रजनन चिन्ताओं पर निगरानी।`,
      },
    },
    {
      subRuler: 'Surya',
      label: { en: 'Ketu–Surya Antardasha', hi: 'केतु-सूर्य अन्तर्दशा' },
      duration: { en: 'About 4 months 6 days', hi: 'लगभग 4 माह 6 दिन' },
      effect: {
        en: `Sun and Ketu are enemies; this brief sub-period is the dasha\'s most authority-tested window. Conflicts with father, boss, or government surface, often without warning. Reputation can take a sudden hit. Eye/heart sensitivity. Avoid public confrontations and major government applications during this short window. Many natives report a brief, disorienting public withdrawal — stepping back from a visible role, refusing a promotion, or quietly resigning from a public position they no longer wanted.`,
        hi: `सूर्य और केतु शत्रु हैं; यह संक्षिप्त उप-काल दशा का सर्वाधिक अधिकार-परीक्षित खण्ड है। पिता, अधिकारी, अथवा शासन से टकराव उभरते हैं, प्रायः बिना चेतावनी। प्रतिष्ठा को अकस्मात् धक्का लग सकता है। नेत्र/हृदय संवेदनशीलता। इस संक्षिप्त खण्ड में सार्वजनिक टकराव एवं प्रमुख शासकीय आवेदनों से बचें। अनेक जातक संक्षिप्त, विचलित करने वाली सार्वजनिक विरक्ति रिपोर्ट करते हैं — किसी दृश्य भूमिका से पीछे हटना, पदोन्नति अस्वीकार करना, अथवा शान्त रूप से ऐसी सार्वजनिक स्थिति से त्यागपत्र देना जो वे अब नहीं चाहते थे।`,
      },
    },
    {
      subRuler: 'Chandra',
      label: { en: 'Ketu–Chandra Antardasha', hi: 'केतु-चन्द्र अन्तर्दशा' },
      duration: { en: 'About 7 months 0 days', hi: 'लगभग 7 माह 0 दिन' },
      effect: {
        en: `Moon and Ketu are enemies (Grahan-yoga in natal chart). The combination is one of the dasha\'s most psychologically disorienting sub-periods. Mood becomes the variable; sleep can be heavily disrupted; intuition either sharpens dramatically or becomes unreliable. Mother\'s health may need attention. The native may feel emotionally numb or unusually sensitive — both extremes possible. Daily mantra practice (Hanuman Chalisa, Shri Suktam, or Chandi Path), regular sleep, and reduced stimulants are essential. If symptoms cross into clinical depression or postpartum struggle, professional psychiatric support must run alongside.`,
        hi: `चन्द्र और केतु शत्रु हैं (जन्म-कुण्डली में ग्रहण-योग)। संयोजन दशा के सर्वाधिक मनोवैज्ञानिक रूप से विचलित करने वाले उप-कालों में से एक है। मनोदशा वह चर है; निद्रा भारी रूप से बाधित हो सकती है; अन्तर्ज्ञान या तो नाटकीय रूप से तीक्ष्ण होता है अथवा अविश्वसनीय। माता के स्वास्थ्य पर ध्यान आवश्यक हो सकता है। जातक भावनात्मक रूप से सुन्न अथवा असामान्य रूप से संवेदनशील अनुभव कर सकता है — दोनों चरम सम्भव। दैनिक मन्त्र अभ्यास (हनुमान चालीसा, श्री सूक्त, अथवा चण्डी पाठ), नियमित निद्रा, और घटे हुए उत्तेजक आवश्यक। यदि लक्षण नैदानिक अवसाद अथवा प्रसवोत्तर संघर्ष में जाएँ — व्यावसायिक मनोरोग-समर्थन समानान्तर चलना चाहिए।`,
      },
    },
    {
      subRuler: 'Mangal',
      label: { en: 'Ketu–Mangal Antardasha', hi: 'केतु-मंगल अन्तर्दशा' },
      duration: { en: 'About 4 months 27 days', hi: 'लगभग 4 माह 27 दिन' },
      effect: {
        en: `Ketu and Mars are friends (Ketu is sometimes called "Mars without focus"). The combination is brief, sharp, and decisive. Surgical decisions often get made in this window; some natives undergo planned procedures, others discover acute conditions requiring intervention. Property disputes resolve quickly. Younger brothers may need help. Conflicts that needed ending get ended. Avoid elective surgery without proper muhurta if Mars is afflicted; otherwise the antardasha is workable for decisive action.`,
        hi: `केतु और मंगल मित्र हैं (केतु को कभी-कभी "बिना केन्द्र-दृष्टि के मंगल" कहा जाता है)। संयोजन संक्षिप्त, तीक्ष्ण, और निर्णायक। इस खण्ड में प्रायः शल्य चिकित्सा निर्णय लिए जाते हैं; कुछ जातक नियोजित प्रक्रियाओं से गुज़रते हैं, अन्य तीव्र अवस्थाओं की खोज करते हैं जो हस्तक्षेप माँगती हैं। सम्पत्ति-विवाद शीघ्र हल। छोटे भाइयों को सहायता की आवश्यकता हो सकती है। जिन विवादों को समाप्त होना था वे होते हैं। यदि मंगल पीड़ित हों तो बिना उचित मुहूर्त के ऐच्छिक शल्य चिकित्सा से बचें; अन्यथा अन्तर्दशा निर्णायक कर्म के लिए सध्य।`,
      },
    },
    {
      subRuler: 'Rahu',
      label: { en: 'Ketu–Rahu Antardasha', hi: 'केतु-राहु अन्तर्दशा' },
      duration: { en: 'About 1 year 0 months 18 days', hi: 'लगभग 1 वर्ष 0 माह 18 दिन' },
      effect: {
        en: `The two nodes meet under Ketu\'s lordship — head meets tail in reverse. This sub-period is one of the most operationally complex in the entire Vimshottari cycle. Most natives report dramatic events: foreign relocation, sudden technology pivot, the start or end of a major unconventional venture, an addiction either confronted or deepened. Sleep dysfunction, dream-life intensification, and brief psychological disturbances are common. The remedy is structured: daily mantra, regular sleep, reduced stimulants, and absolutely no major irreversible commitments without consultation. The twelve months pass; what survives the antardasha is usually the dasha\'s deepest post-dasha asset.`,
        hi: `केतु के स्वामित्व में दोनों पात मिलते हैं — सिर एवं पुच्छ विपरीत क्रम में। यह उप-काल सम्पूर्ण विंशोत्तरी चक्र की सर्वाधिक कार्यगत रूप से जटिल अन्तर्दशाओं में से एक है। अधिकांश जातक नाटकीय घटनाएँ रिपोर्ट करते हैं: विदेशी स्थानान्तरण, अकस्मात् प्रौद्योगिकी मोड़, बड़े अपरम्परागत उद्यम का आरम्भ अथवा अन्त, व्यसन का सामना अथवा गहराई। निद्रा-विकार, स्वप्न-जीवन तीव्रता, और संक्षिप्त मनोवैज्ञानिक विकार सामान्य। उपाय संरचित: दैनिक मन्त्र, नियमित निद्रा, घटे हुए उत्तेजक, और बिना परामर्श के कोई भी प्रमुख अप्रत्यावर्तनीय प्रतिबद्धता नहीं। बारह माह बीतते हैं; जो अन्तर्दशा से बचता है वह प्रायः दशा की सबसे गहरी पोस्ट-दशा सम्पत्ति होती है।`,
      },
    },
    {
      subRuler: 'Guru',
      label: { en: 'Ketu–Guru Antardasha', hi: 'केतु-गुरु अन्तर्दशा' },
      duration: { en: 'About 11 months 6 days', hi: 'लगभग 11 माह 6 दिन' },
      effect: {
        en: `Ketu and Jupiter are neutrals; the combination is the dasha\'s most spiritually opening sub-period. Many natives report formal initiation, the start of a serious meditation practice, completion of a long-standing scripture study, foreign pilgrimage, ashram residence, or recognition in a teaching role connected to dharmic content. Children\'s milestones may align with this window. The cautionary note: Ketu under Jupiter can sometimes activate "false-guru" patterns — be careful about accepting new spiritual teachers in this antardasha without thorough verification. The dasha\'s deepest dharmic chapter usually unfolds here.`,
        hi: `केतु और गुरु तटस्थ हैं; संयोजन दशा का सर्वाधिक आध्यात्मिक रूप से खुलने वाला उप-काल है। अनेक जातक औपचारिक दीक्षा, गम्भीर ध्यान-साधना का आरम्भ, दीर्घ-स्थायी शास्त्र-अध्ययन की पूर्ति, विदेशी तीर्थयात्रा, आश्रमवास, अथवा धार्मिक कन्टेन्ट से जुड़ी अध्यापन-भूमिका में मान्यता रिपोर्ट करते हैं। सन्तानों के मील-पत्थर इस खण्ड से संरेखित हो सकते हैं। चेतावनी: गुरु के अधीन केतु कभी-कभी "झूठे-गुरु" स्वरूप सक्रिय कर सकते हैं — इस अन्तर्दशा में नये आध्यात्मिक शिक्षकों को बिना पूर्ण सत्यापन के स्वीकारने में सावधान रहें। दशा का गहनतम धार्मिक अध्याय प्रायः यहीं खुलता है।`,
      },
    },
    {
      subRuler: 'Shani',
      label: { en: 'Ketu–Shani Antardasha', hi: 'केतु-शनि अन्तर्दशा' },
      duration: { en: 'About 1 year 1 month 9 days', hi: 'लगभग 1 वर्ष 1 माह 9 दिन' },
      effect: {
        en: `Ketu and Saturn are friends — both detachment-oriented, both slow, both severe. The combination is the dasha\'s heaviest discipline-and-loneliness antardasha. Long-term work that no one else wants to do, caregiving for an elderly relative, sustained service in difficult conditions, or a thirteen-month period of social withdrawal during which the native does deep inward work. Health-wise, joints, sleep, nervous-system fatigue, and chronic conditions surface. The remedy is sustained simplicity: regular sleep, simple food, daily Hanuman Chalisa, weekly Saturday temple visit, and reducing all unnecessary commitments. By the close, most natives report that the period\'s difficulty produced a structural maturity that decades of easier dashas could not have given.`,
        hi: `केतु और शनि मित्र हैं — दोनों वैराग्य-केन्द्रित, दोनों धीमे, दोनों कठोर। संयोजन दशा की सबसे भारी अनुशासन-एवं-एकाकीपन अन्तर्दशा है। ऐसा दीर्घकालिक कार्य जो कोई और नहीं करना चाहता, वृद्ध स्वजन की देखभाल, कठिन परिस्थितियों में निरन्तर सेवा, अथवा तेरह मास का सामाजिक एकान्त जिसमें जातक गहन अन्तर्मुख कार्य करता है। स्वास्थ्य की दृष्टि से सन्धि, निद्रा, स्नायु-तन्त्र थकान, और दीर्घकालिक अवस्थाएँ उभरती हैं। उपाय निरन्तर सरलता: नियमित निद्रा, सरल भोजन, दैनिक हनुमान चालीसा, साप्ताहिक शनिवार मन्दिर दर्शन, और सभी अनावश्यक प्रतिबद्धताएँ कम करना। अन्त तक अधिकांश जातक रिपोर्ट करते हैं कि काल की कठिनाई ने वह संरचनात्मक परिपक्वता उत्पन्न की जो आसान दशाओं के दशकों ने नहीं दी थी।`,
      },
    },
    {
      subRuler: 'Budh',
      label: { en: 'Ketu–Budh Antardasha', hi: 'केतु-बुध अन्तर्दशा' },
      duration: { en: 'About 11 months 27 days', hi: 'लगभग 11 माह 27 दिन' },
      effect: {
        en: `Closing the seven years. Ketu and Mercury are neutrals; the antardasha is the dasha\'s most cognitively integrative sub-period. Whatever inward work was done across the previous six years now finds articulation — a book gets written, a teaching role formalises, a long meditation practice gets summarised in lecture or article form. Communication-driven careers see late-dasha breakthroughs here. The handover to Venus mahadasha is mental — many natives report a clear sense of "the practice is now mine; the next chapter will use what was learned." Use the year for documentation rather than new commitments.`,
        hi: `सात वर्षों का अन्त। केतु और बुध तटस्थ हैं; अन्तर्दशा दशा का सर्वाधिक संज्ञानात्मक रूप से एकीकृत उप-काल है। पिछले छह वर्षों में जो भी अन्तर्मुख कार्य हुआ अब वह अभिव्यक्ति पाता है — ग्रन्थ लिखा जाता है, अध्यापन-भूमिका औपचारिक होती है, दीर्घ ध्यान-साधना व्याख्यान अथवा लेख-रूप में संक्षिप्त की जाती है। सम्वाद-केन्द्रित करियर यहीं अन्तिम-दशा सफलताएँ देखते हैं। शुक्र महादशा को सुपुर्दगी मानसिक है — अनेक जातक "अब अभ्यास मेरा है; अगला अध्याय जो सीखा गया उसका उपयोग करेगा" का स्पष्ट अनुभव रिपोर्ट करते हैं। नये प्रतिबद्धताओं के बजाय वर्ष का उपयोग प्रलेखन के लिए करें।`,
      },
    },
  ],

  remedies: [
    {
      title: { en: 'Mantra Recitation', hi: 'मन्त्र जप' },
      body: {
        en: `Ganesha worship is the most accessible Ketu practice — Ganesha is the elephant-headed deity who removes obstacles, and Ketu, being the planet of obstruction and dissolution, responds directly to him. Daily Ganesha Atharvashirsha or the Sankatnashan Ganesh Stotra is the foundation. Lay alternatives are the Ketu Beej Mantra (Om Sraam Sreem Sraum Sah Ketave Namah, 7,000 recitations across forty days), the Subramanya Bhujanga Stotra (composed by Adi Shankaracharya, particularly powerful for Ketu remedies in South Indian tradition), or the Maha Mrityunjaya Mantra (108 daily) for natives running afflicted Ketu. Ash-grey or rudraksha rosary is preferred. Recitation is most effective on Tuesday or during eclipse periods; avoid recitation when emotionally distressed.`,
        hi: `गणेश पूजन सर्वाधिक सुलभ केतु अभ्यास है — गणेश गज-मुख देवता हैं जो विघ्नों को हरते हैं, और केतु, अवरोध एवं विलयन के ग्रह होने के कारण, उनसे सीधे प्रतिक्रिया देते हैं। दैनिक गणेश अथर्वशीर्ष अथवा संकटनाशन गणेश स्तोत्र आधार है। जन-विधियाँ हैं — केतु बीज मन्त्र (ॐ स्रां स्रीं स्रौं सः केतवे नमः, चालीस दिनों में 7,000 जप), सुब्रमण्य भुजंग स्तोत्र (आदि शंकराचार्य रचित, दक्षिण भारतीय परम्परा में केतु उपायों हेतु विशेष शक्तिशाली), अथवा पीड़ित केतु चलाने वालों के लिए महामृत्युंजय मन्त्र (दैनिक 108)। राख-धूसर अथवा रुद्राक्ष माला श्रेष्ठ। जप मंगलवार अथवा ग्रहण-काल में सर्वाधिक प्रभावी; भावनात्मक उद्वेग में जप टालें।`,
      },
    },
    {
      title: { en: 'Cat\'s Eye (Lehsuniya) — with strict caution', hi: 'लहसुनिया — कठोर सावधानी के साथ' },
      body: {
        en: `Cat\'s Eye is Ketu\'s gem and one of the most reactive stones in Jyotish — comparable to Hessonite in volatility. Always trial three nights kept under the pillow before fixing in a ring. Five carats minimum, set in silver or panchdhatu, middle finger of the right hand, energised on a Tuesday in Shukla paksha at sunset with the Ketu beej mantra. Do not pair Cat\'s Eye with Pearl, Ruby, or Hessonite (the two nodes have different signatures). Many natives running Ketu Mahadasha experience adverse reactions to Cat\'s Eye — sleep disruption, recurring nightmares, unexplained anxiety; if so, remove immediately and switch to Tiger\'s Eye (a softer alternative). For most natives, Ganesha mantra and dharmic discipline are more reliable Ketu remedies than the gemstone. Consult a competent jyotishi who can read your full chart before any Cat\'s Eye decision.`,
        hi: `लहसुनिया केतु का रत्न है और ज्योतिष के सर्वाधिक प्रतिक्रियाशील रत्नों में से — गोमेद के समान अस्थिर। अंगूठी में जड़वाने से पूर्व तीन रात्रि तकिए के नीचे परीक्षण अनिवार्य। न्यूनतम पाँच रत्ती, चाँदी अथवा पंचधातु में, दाहिने हाथ की मध्यमा, शुक्ल पक्ष के मंगलवार को सूर्यास्त पर केतु बीज मन्त्र से अभिमन्त्रित। लहसुनिया के साथ मोती, माणिक्य, अथवा गोमेद न पहनें (दोनों पातों के भिन्न संकेत हैं)। केतु महादशा चलाने वाले अनेक जातक लहसुनिया से प्रतिकूल प्रतिक्रिया अनुभव करते हैं — निद्रा-विघ्न, बार-बार दुःस्वप्न, अव्याख्यायित चिन्ता; यदि ऐसा हो तो तुरन्त निकाल दें और टाइगर्स आई (कोमल विकल्प) पहनें। अधिकांश जातकों के लिए गणेश मन्त्र एवं धार्मिक अनुशासन रत्न से अधिक विश्वसनीय केतु उपाय हैं। किसी भी लहसुनिया निर्णय से पूर्व उस सक्षम ज्योतिषी से परामर्श अनिवार्य जो आपकी पूर्ण कुण्डली पढ़ सके।`,
      },
    },
    {
      title: { en: 'Daana (Donation)', hi: 'दान' },
      body: {
        en: `Ketu rules monks, those who have renounced worldly life, the homeless, the dying, and those at society\'s margins. Donation in Ketu\'s name should reach Ganesha temples, monasteries, hospice care, dharma-shalas (free pilgrim accommodations), animal shelters (especially for dogs, who classically belong to Ketu), and direct support of wandering sadhus or formal renunciants. Black sesame, ash-grey blankets, copper, multi-coloured stones, mushrooms, and sponsorship of cremation expenses for the poor are classical Ketu daana. Tuesday at sunset is the prescribed time. The deeper Ketu daana is the practice of giving without naming — the donation that the recipient cannot trace back to its source, the support that is given to a cause rather than a face. Ketu rewards anonymous, sustained dharma far more than recognised giving.`,
        hi: `केतु संन्यासियों, सांसारिक जीवन त्याग चुके लोगों, निराश्रितों, मरणोन्मुख, और समाज की सीमाओं पर रहने वालों पर शासन करते हैं। केतु के नाम पर दान गणेश मन्दिरों, मठों, होस्पाइस देखभाल, धर्म-शालाओं, पशु-आश्रयों (विशेषकर कुत्तों के लिए, जो शास्त्रीय रूप से केतु के हैं), और भ्रमणशील साधुओं अथवा औपचारिक संन्यासियों के सीधे समर्थन तक पहुँचना चाहिए। काले तिल, राख-धूसर कम्बल, ताम्र, बहुरंगी पत्थर, मशरूम, और निर्धनों के अन्तिम संस्कार-व्यय का प्रायोजन शास्त्रीय केतु-दान हैं। मंगलवार सूर्यास्त विहित समय। गहरा केतु-दान है बिना नाम लिए देने का अभ्यास — ऐसा दान जिसे प्राप्तकर्ता उसके स्रोत तक नहीं पहुँचा सकता, ऐसा समर्थन जो चेहरे के बजाय कारण को दिया जाता है। केतु अनाम, निरन्तर धर्म को मान्यता-प्राप्त दान से कहीं अधिक पुरस्कृत करते हैं।`,
      },
    },
    {
      title: { en: 'Vrata (Observance)', hi: 'व्रत' },
      body: {
        en: `Ketu does not have a fixed weekly vrata in the way Sun-Moon-Mars-Mercury-Jupiter-Venus-Saturn do, because he has no fixed day. The standard Ketu observance is therefore the Ganesh Chaturthi vrata (the fourth lunar day in either fortnight, especially Bhadrapada Shukla Chaturthi — Ganesha\'s birthday) and the Skanda Sashti (the sixth lunar day after Karthikai Amavasya, dedicated to Subramanya). These are the year\'s most charged Ketu days. During Ketu Mahadasha, observing every Sankashti Chaturthi (the dark-fortnight fourth lunar day) with a moonrise fast and Ganesha aarti is the classical sustained practice — twelve such days per year, eighty-four across the dasha. Pilgrimage to a Ganesha temple (Siddhivinayak Mumbai, Ranthambore, Pillaiyarpatti) or a Subramanya temple (Palani, Tiruchendur, Swamimalai) once during the dasha is meritorious.`,
        hi: `केतु का निश्चित साप्ताहिक व्रत वैसा नहीं है जैसा सूर्य-चन्द्र-मंगल-बुध-गुरु-शुक्र-शनि का है, क्योंकि उनका कोई निश्चित दिन नहीं। अतः मानक केतु अनुष्ठान है गणेश चतुर्थी व्रत (किसी भी पक्ष की चतुर्थी, विशेषकर भाद्रपद शुक्ल चतुर्थी — गणेश जयन्ती) और स्कन्द षष्ठी (कार्तिकै अमावस्या के पश्चात् छठा चान्द्र दिवस, सुब्रमण्य को समर्पित)। ये वर्ष के सर्वाधिक आवेशित केतु-दिन हैं। केतु महादशा के दौरान प्रत्येक संकष्टी चतुर्थी (कृष्ण-पक्ष की चतुर्थी) को चन्द्रोदय व्रत एवं गणेश आरती के साथ पालन शास्त्रीय निरन्तर अभ्यास है — वर्ष में बारह ऐसे दिन, दशा भर चौरासी। दशा के दौरान एक बार गणेश मन्दिर (सिद्धिविनायक मुम्बई, रणथम्भौर, पिल्लैयारपट्टी) अथवा सुब्रमण्य मन्दिर (पलनी, तिरुचेन्दूर, स्वामीमलाई) की तीर्थयात्रा पुण्यप्रद।`,
      },
    },
    {
      title: { en: 'Lifestyle Adjustments', hi: 'जीवन-शैली समायोजन' },
      body: {
        en: `The Ketu dasha rewards simplicity and inwardness. Reduce social commitments by twenty percent for the duration; the dasha pulls toward inwardness, and forcing constant socialisation produces the dasha\'s most disorienting symptoms. Maintain a daily silent practice of at least fifteen minutes — not necessarily meditation, but any uninterrupted unscheduled time spent without screens or speech. Sleep before eleven; Ketu disrupts sleep when ignored. Cook your own food at least once a day; Ketu registers what enters the body, and meals prepared by strangers in restaurants and cloud kitchens may produce unexpected sensitivities during the dasha. Maintain one creative or contemplative outlet that does not depend on external recognition — drawing, gardening, mantra recitation, scripture reading, dog walking. Ketu\'s deepest gift is internal contentment without acquisition; the lifestyle adjustments above are the structural foundation that makes that gift available.`,
        hi: `केतु की दशा सरलता एवं अन्तर्मुखता को पुरस्कृत करती है। दशा भर सामाजिक प्रतिबद्धताओं को बीस प्रतिशत कम करें; दशा अन्तर्मुखता की ओर खींचती है, और निरन्तर सामाजिकता को बाध्य करना दशा के सर्वाधिक विचलित करने वाले लक्षण उत्पन्न करता है। कम-से-कम पन्द्रह मिनट का दैनिक मौन-अभ्यास बनाये रखें — आवश्यक रूप से ध्यान नहीं, परन्तु बिना स्क्रीन अथवा वाणी के बिताया गया कोई भी अबाधित अनिर्धारित समय। ग्यारह बजे से पूर्व सोएँ; उपेक्षा करने पर केतु निद्रा को विघटित करते हैं। दिन में कम-से-कम एक बार स्वयं भोजन पकाएँ; केतु शरीर में जो प्रवेश करता है उसे दर्ज करते हैं, और रेस्तराँ एवं क्लाउड किचनों में अजनबियों द्वारा तैयार भोजन दशा के दौरान अप्रत्याशित संवेदनशीलताएँ उत्पन्न कर सकते हैं। एक रचनात्मक अथवा चिन्तनशील अभ्यास बनाये रखें जो बाहरी मान्यता पर निर्भर न हो — चित्रांकन, बागवानी, मन्त्र-जप, शास्त्र-पठन, श्वान-चलन। केतु का गहनतम उपहार बिना अधिग्रहण के आन्तरिक सन्तोष है; ऊपर के जीवन-शैली समायोजन वह संरचनात्मक नींव हैं जो उस उपहार को उपलब्ध कराती है।`,
      },
    },
  ],

  casePatterns: {
    en: `Three Ketu Mahadasha patterns recur across the consulting case files our editorial team reviews. The first and most common is the inwardness chapter — typically beginning with a sudden withdrawal or loss in the opening months, followed by years of reduced external activity, deepening of one chosen practice, and emerging at the dasha\'s close visibly more grounded than at the start. The second is the renunciation chapter, less common but more dramatic: the native takes formal sannyasa, joins an ashram, accepts monastic vows, or in modern equivalents leaves a high-profile career to pursue an entirely different vocation, often unpaid or low-paid, that aligns with deeper purpose. The third is the dissolution chapter, common when Ketu is afflicted: marriage ends, a long-running career collapses, financial reverses without traceable cause, family disruption, or in difficult charts the loss of a parent or close relative. The third is the most painful pattern but also the most generative once the native does the inward work — it forces the kind of reckoning that easier dashas never demand. Read the natal Ketu\'s house, sign, dispositor, and aspects from Saturn, Jupiter, or the dispositor of the natal Moon before deciding which pattern is most likely.`,
    hi: `सम्पादकीय समीक्षा की केस-फाइलों में तीन केतु महादशा स्वरूप पुनरावृत्त होते हैं। पहला और सर्वाधिक सामान्य अन्तर्मुखता-अध्याय — प्रायः प्रारम्भिक मासों में अकस्मात् विरक्ति अथवा हानि से आरम्भ, फिर वर्षों की घटी हुई बाह्य गतिविधि, एक चुनी हुई साधना की गहराई, और दशा के अन्त में आरम्भ से दृश्य रूप से अधिक आधारित होकर निकलना। दूसरा संन्यास-अध्याय, कम सामान्य किन्तु अधिक नाटकीय: जातक औपचारिक सन्न्यास लेता है, आश्रम में सम्मिलित होता है, सन्यासी व्रत स्वीकारता है, अथवा आधुनिक तुल्य रूपों में किसी उच्च-प्रोफ़ाइल करियर को त्यागकर पूर्णतः भिन्न व्यवसाय करता है, प्रायः अवैतनिक अथवा अल्प-वेतन वाला, जो गहरे प्रयोजन से संरेखित हो। तीसरा विलयन-अध्याय, पीड़ित केतु पर सामान्य: विवाह समाप्त, दीर्घ-चलता करियर ढह जाता है, बिना खोजे जा सकने वाले कारण के आर्थिक हानि, पारिवारिक अव्यवस्था, अथवा कठिन कुण्डलियों में माता-पिता अथवा निकट स्वजन की हानि। तीसरा सर्वाधिक पीड़ापूर्ण स्वरूप किन्तु प्रायः सर्वाधिक सृजनात्मक भी — जातक के अन्तर्मुख कार्य के पश्चात् — यह उस प्रकार का हिसाब-किताब बाध्य करता है जो आसान दशाएँ कभी नहीं माँगतीं। कौन-सा स्वरूप सर्वाधिक सम्भाव्य है यह निर्धारित करने से पूर्व जन्म-कुण्डली में केतु का भाव, राशि, राशीश, और शनि, गुरु, अथवा जन्म-चन्द्र के राशीश से दृष्टियाँ देखें।`,
  },

  faqs: [
    {
      question: { en: 'Is Ketu Mahadasha bad?', hi: 'क्या केतु महादशा अशुभ होती है?' },
      answer: {
        en: `Ketu Mahadasha\'s reputation as bad is overdrawn. Strong Ketu — in own/co-ruled Scorpio, in third, sixth, eleventh, or twelfth, with friendly aspects — delivers seven years of inward maturity, focused expertise, and quiet accomplishment. Afflicted Ketu, particularly in second or seventh house (marak) or in Taurus debilitation, can produce the dasha\'s difficult patterns. The dasha is rarely as loudly destructive as Saturn or Rahu can be; it more often runs as quiet dissolution and quiet rebuilding. Read your natal Ketu\'s house, sign, and aspects before forming a view.`,
        hi: `केतु महादशा की अशुभता की प्रतिष्ठा बढ़ा-चढ़ा कर बताई गई है। बलवान केतु — स्व/सह-स्वामित्व वृश्चिक में, तृतीय, षष्ठ, एकादश, अथवा द्वादश में, मित्र दृष्टियों के साथ — सात वर्षों की आन्तरिक परिपक्वता, केन्द्रित विशेषज्ञता, और शान्त उपलब्धि देते हैं। पीड़ित केतु, विशेषकर द्वितीय अथवा सप्तम भाव (मारक) में अथवा वृष में नीच के, दशा के कठिन स्वरूप उत्पन्न कर सकते हैं। दशा शनि अथवा राहु की भाँति उच्च स्वर में विनाशात्मक विरले होती है; यह प्रायः शान्त विलयन एवं शान्त पुनर्निर्माण के रूप में चलती है। दृष्टि बनाने से पूर्व जन्म-कुण्डली में केतु का भाव, राशि, और दृष्टियाँ देखें।`,
      },
    },
    {
      question: { en: 'How long is Ketu Mahadasha?', hi: 'केतु महादशा कितने वर्ष की होती है?' },
      answer: {
        en: `Seven calendar years (about 2,557 days) — equal in length to Mars Mahadasha, both the second-shortest of the major periods. Within these seven years there are nine antardashas, the longest being Ketu–Venus (1 year 2 months) and Ketu–Saturn (1 year 1 month); the shortest are Ketu–Ketu and Ketu–Mars at about 5 months each.`,
        hi: `सात कलैंडर वर्ष (लगभग 2,557 दिन) — मंगल महादशा के समान लम्बाई, दोनों प्रमुख दशाओं में दूसरी सबसे छोटी। इन सात वर्षों में नौ अन्तर्दशाएँ हैं — सबसे लम्बी केतु-शुक्र (1 वर्ष 2 माह) और केतु-शनि (1 वर्ष 1 माह); सबसे छोटी केतु-केतु और केतु-मंगल लगभग 5-5 माह।`,
      },
    },
    {
      question: { en: 'What does Ketu Mahadasha bring for marriage?', hi: 'केतु महादशा विवाह के लिए क्या लाती है?' },
      answer: {
        en: `Ketu Mahadasha is one of the most marriage-tested dashas. Strong Ketu and well-placed seventh lord can deliver delayed marriage that arrives during Ketu–Venus or Ketu–Jupiter sub-periods, often to a partner with renunciate or austere temperament. Afflicted Ketu in seventh house can produce marital separation or in extreme cases divorce, particularly in Ketu–Sun, Ketu–Moon, or Ketu–Saturn antardashas. The dasha tests whether the marriage was based on real connection or on circumstantial attachment. Combined astrological remedies and, if needed, professional couples counselling work better than astrology alone for marital crisis during this dasha.`,
        hi: `केतु महादशा सर्वाधिक विवाह-परीक्षित दशाओं में से एक है। बलवान केतु एवं बलवान सप्तमेश विलम्बित विवाह दे सकते हैं जो केतु-शुक्र अथवा केतु-गुरु उप-कालों में आता है, प्रायः संन्यासी अथवा संयमी स्वभाव वाले जीवनसाथी से। सप्तम भाव में पीड़ित केतु वैवाहिक विछोह अथवा चरम स्थितियों में विच्छेद उत्पन्न कर सकते हैं, विशेषकर केतु-सूर्य, केतु-चन्द्र, अथवा केतु-शनि अन्तर्दशाओं में। दशा परखती है कि विवाह वास्तविक सम्बन्ध पर आधारित था अथवा परिस्थितिजन्य आसक्ति पर। इस दशा में वैवाहिक संकट के लिए संयुक्त ज्योतिष-उपाय और यदि आवश्यक हो तो व्यावसायिक दम्पत्ति-परामर्श — केवल ज्योतिष से बेहतर कार्य करते हैं।`,
      },
    },
    {
      question: { en: 'Why does Ketu cause sudden problems?', hi: 'केतु अकस्मात् समस्याएँ क्यों उत्पन्न करते हैं?' },
      answer: {
        en: `Ketu is the karmic remainder — the unfinished karma of past lives that the chart carries forward. His dasha activates whatever was incomplete, suppressed, or denied in the soul\'s earlier journey. The "suddenness" of his effects is from the perspective of the conscious mind that did not see the karma forming; from the soul\'s perspective the events are the natural maturation of long-running patterns. The Vedic understanding is that Ketu cannot be argued with — what he removes was meant to leave; what he reveals was meant to surface. The remedy is not to oppose him but to consciously align with the inward work he is asking the chart to do.`,
        hi: `केतु कर्म-शेष हैं — पूर्व जन्मों का अधूरा कर्म जो कुण्डली आगे ले जाती है। उनकी दशा उसे सक्रिय करती है जो आत्मा की पूर्ववर्ती यात्रा में अधूरा, दमित, अथवा अस्वीकार था। उनके प्रभावों का "अकस्मात्पन" चेतन मन के दृष्टिकोण से है जिसने कर्म को बनते नहीं देखा; आत्मा के दृष्टिकोण से घटनाएँ दीर्घ-चलने वाले स्वरूपों की प्राकृतिक परिपक्वता हैं। वैदिक समझ है कि केतु से तर्क-वितर्क नहीं किया जा सकता — वे जो हटाते हैं वह जाने को था; वे जो प्रकट करते हैं वह उभरने को था। उपाय उनका विरोध नहीं — सचेत रूप से उस अन्तर्मुख कार्य से संरेखित होना है जिसे करने को कुण्डली कह रही है।`,
      },
    },
    {
      question: { en: 'Best remedies for Ketu Mahadasha?', hi: 'केतु महादशा के सर्वोत्तम उपाय क्या हैं?' },
      answer: {
        en: `Five layered practices in priority order: (1) Daily Ganesh Atharvashirsha or Sankatnashan Ganesh Stotra; (2) Sankashti Chaturthi observance every dark-fortnight fourth lunar day (twelve per year, eighty-four across the dasha); (3) Anonymous donation to monasteries, hospice care, animal shelters, or wandering sadhus — pick one sustained pledge and keep it; (4) Daily silent practice of at least fifteen minutes — Ketu rewards silence; (5) Cat\'s Eye (Lehsuniya) only after a competent jyotishi has confirmed compatibility AND only after three nights of trial under the pillow. For most natives, the first four practices alone are sufficient; the gemstone is optional and should be avoided if it produces sleep disruption or anxiety.`,
        hi: `प्राथमिकता क्रम में पाँच स्तरित अभ्यास: (1) दैनिक गणेश अथर्वशीर्ष अथवा संकटनाशन गणेश स्तोत्र; (2) प्रत्येक कृष्ण-पक्ष की चतुर्थी पर संकष्टी चतुर्थी पालन (वर्ष में बारह, दशा भर चौरासी); (3) मठों, होस्पाइस देखभाल, पशु-आश्रयों, अथवा भ्रमणशील साधुओं को अनाम दान — एक निरन्तर संकल्प चुनें और निभाएँ; (4) दैनिक कम-से-कम पन्द्रह मिनट का मौन-अभ्यास — केतु मौन को पुरस्कृत करते हैं; (5) लहसुनिया केवल किसी सक्षम ज्योतिषी द्वारा अनुकूलता की पुष्टि के पश्चात् तथा केवल तकिए के नीचे तीन रात्रि के परीक्षण के पश्चात्। अधिकांश जातकों के लिए केवल प्रथम चार अभ्यास पर्याप्त हैं; रत्न ऐच्छिक है और यदि निद्रा-विघ्न अथवा चिन्ता उत्पन्न करे तो टाल दें।`,
      },
    },
    {
      question: { en: 'What career suits Ketu Mahadasha?', hi: 'केतु महादशा के लिए कौन-से व्यवसाय अनुकूल हैं?' },
      answer: {
        en: `Research and investigation, depth psychology, occult and esoteric practice, surgical specialty (especially neurosurgery, oncology, mortuary medicine), forensic analysis, intelligence and counter-intelligence work, archaeology, manuscript study, classical Vedic scholarship, monastic teaching, hospice care, conservation work, and any field requiring sustained inward focus and detachment from public recognition. Public-facing media-driven careers (television, social media, marketing) tend to under-deliver during the dasha — Ketu rewards the work nobody else wants to do, not the work that needs an audience.`,
        hi: `शोध एवं अनुसन्धान, गहन-मनोविज्ञान, तान्त्रिक एवं गूढ़ साधना, शल्य विशेषज्ञता (विशेषकर तन्त्रिका-शल्य, कैन्सर, श्मशान चिकित्सा), फोरेन्सिक विश्लेषण, गुप्तचर एवं प्रति-गुप्तचर कार्य, पुरातत्त्व, पाण्डुलिपि अध्ययन, शास्त्रीय वैदिक विद्वत्ता, सन्न्यासी अध्यापन, होस्पाइस देखभाल, संरक्षण कार्य, और निरन्तर अन्तर्मुख ध्यान एवं सार्वजनिक मान्यता से वैराग्य माँगने वाले किसी भी क्षेत्र। जन-समक्ष मीडिया-केन्द्रित करियर (टेलीविज़न, सोशल मीडिया, विपणन) इस दशा में कम-फलदायक होते हैं — केतु उस कार्य को पुरस्कृत करते हैं जो कोई और नहीं करना चाहता, उस कार्य को नहीं जिसे श्रोता चाहिए।`,
      },
    },
    {
      question: { en: 'Can I have children in Ketu Mahadasha?', hi: 'क्या केतु महादशा में मैं सन्तान प्राप्त कर सकता हूँ?' },
      answer: {
        en: `Conception during Ketu Mahadasha is possible but tends to be more tested than during Jupiter or Venus dashas. The strongest fertility sub-periods are Ketu–Jupiter and Ketu–Venus. Couples with delayed conception and an afflicted Ketu often need fertility treatments alongside astrological practice. Children born during Ketu Mahadasha are often described in classical texts as old souls — independent early, naturally inclined to research or contemplative subjects, sometimes with unusual interests for their age. The dasha\'s deepest gift to parents is teaching them to release expectation and accept the child as an independent soul rather than a projection of parental dreams.`,
        hi: `केतु महादशा में गर्भधारण सम्भव किन्तु गुरु अथवा शुक्र दशाओं की तुलना में अधिक परीक्षित। सबसे प्रबल उर्वरता उप-काल केतु-गुरु और केतु-शुक्र हैं। विलम्बित गर्भधारण एवं पीड़ित केतु वाले दम्पत्ति को प्रायः ज्योतिष-अभ्यास के साथ प्रजनन उपचार आवश्यक होते हैं। केतु महादशा में जन्मे बच्चे शास्त्रीय ग्रन्थों में प्रायः प्राचीन-आत्माओं के रूप में वर्णित — शीघ्र स्वतन्त्र, स्वाभाविक रूप से शोध अथवा चिन्तनशील विषयों के प्रति प्रवृत्त, कभी-कभी अपनी आयु के लिए असामान्य रुचियों के साथ। माता-पिता के लिए दशा का गहनतम उपहार है उन्हें अपेक्षा त्यागकर बच्चे को माता-पिता के स्वप्नों के प्रक्षेपण के बजाय स्वतन्त्र आत्मा के रूप में स्वीकारना सिखाना।`,
      },
    },
    {
      question: { en: 'How does Ketu Mahadasha end?', hi: 'केतु महादशा का अन्त कैसे होता है?' },
      answer: {
        en: `Ketu Mahadasha hands over to Venus Mahadasha — twenty years of marriage, prosperity, and material consolidation. The closing months of Ketu (the Ketu–Mercury antardasha) typically deliver an articulation of what was learned: a book gets written, a teaching role formalises, a practice gets summarised, the inward work becomes communicable. Most natives describe the transition as a clear sense of "the difficult part is over; the abundant part is beginning." The wisdom acquired during Ketu\'s seven years is what allows the next twenty years of Venus to be enjoyed without becoming consumed by the pleasure they offer.`,
        hi: `केतु महादशा शुक्र महादशा को सुपुर्द करती है — विवाह, समृद्धि, और भौतिक सुदृढ़ीकरण के बीस वर्ष। केतु के अन्तिम मास (केतु-बुध अन्तर्दशा) प्रायः जो सीखा गया उसकी अभिव्यक्ति देते हैं: ग्रन्थ लिखा जाता है, अध्यापन-भूमिका औपचारिक होती है, अभ्यास संक्षिप्त होता है, अन्तर्मुख कार्य सम्वादनीय बनता है। अधिकांश जातक संक्रमण को "कठिन भाग समाप्त; प्रचुर भाग आरम्भ" के स्पष्ट अनुभव के रूप में वर्णित करते हैं। केतु के सात वर्षों में अर्जित विवेक ही वह है जो अगले बीस शुक्र वर्षों को उनके प्रदान किए गए आनन्द में लीन हुए बिना भोगने की अनुमति देता है।`,
      },
    },
  ],

  howToSteps: [
    {
      name: { en: 'Generate your dasha timeline', hi: 'अपनी दशा समय-रेखा बनाएँ' },
      text: {
        en: 'Enter your date, time, and place of birth into the Mahadasha Calculator. The full 120-year sequence reveals exactly when your Ketu Mahadasha begins and which antardashas you will run within those seven years.',
        hi: 'महादशा कैलकुलेटर में अपनी जन्म तिथि, समय, और स्थान दर्ज करें। पूर्ण 120 वर्ष का क्रम दिखाएगा कि केतु महादशा कब आरम्भ होगी और इन सात वर्षों में कौन-सी अन्तर्दशाएँ चलेंगी।',
      },
    },
    {
      name: { en: 'Locate Ketu in your natal chart', hi: 'जन्म कुण्डली में केतु की स्थिति देखें' },
      text: {
        en: 'Find Ketu\'s house, sign, conjunct planets, dispositor, and aspects. Strong Ketu (Scorpio, third, sixth, eleventh, with friendly aspects) delivers the dasha\'s textbook inward potential. Afflicted Ketu (second or seventh house, debilitated Taurus, with Sun-Moon enmity) requires active remedy.',
        hi: 'केतु का भाव, राशि, साथ के ग्रह, राशीश, और दृष्टियाँ देखें। बलवान केतु (वृश्चिक, तृतीय, षष्ठ, एकादश, मित्र दृष्टियों के साथ) दशा की पाठ्य अन्तर्मुख संभावना देते हैं। पीड़ित केतु (द्वितीय अथवा सप्तम भाव, वृष में नीच के, सूर्य-चन्द्र शत्रुता के साथ) सक्रिय उपाय की माँग करते हैं।',
      },
    },
    {
      name: { en: 'Identify the running antardasha', hi: 'चालू अन्तर्दशा पहचानें' },
      text: {
        en: 'Within Ketu Mahadasha there are nine sub-periods. Difficult ones are Ketu–Sun, Ketu–Moon, Ketu–Rahu, and Ketu–Saturn. Favourable ones are Ketu–Jupiter (most spiritually opening), Ketu–Venus (the long opening, relationally tested), and Ketu–Mercury (closing integration). Plan major decisions and remedies around the antardasha\'s mood.',
        hi: 'केतु महादशा के भीतर नौ उप-काल हैं। कठिन — केतु-सूर्य, केतु-चन्द्र, केतु-राहु, और केतु-शनि। अनुकूल — केतु-गुरु (सर्वाधिक आध्यात्मिक रूप से खुलने वाला), केतु-शुक्र (दीर्घ प्रारम्भ, सम्बन्धात्मक रूप से परीक्षित), और केतु-बुध (अन्तिम एकीकरण)। प्रमुख निर्णय एवं उपायों को अन्तर्दशा के स्वर के आसपास नियोजित करें।',
      },
    },
    {
      name: { en: 'Build daily silent practice', hi: 'दैनिक मौन-अभ्यास बनाएँ' },
      text: {
        en: 'The single most reliable Ketu Mahadasha practice is daily silence — at least fifteen minutes of uninterrupted unscheduled time without screens or speech. Sustained for the full seven years, this practice transforms the dasha\'s disorientation into clarity. Combined with daily Ganesh stotra and Sankashti Chaturthi observance, it produces the dasha\'s deepest inward growth.',
        hi: 'सबसे विश्वसनीय केतु महादशा अभ्यास है दैनिक मौन — कम-से-कम पन्द्रह मिनट का अबाधित अनिर्धारित समय बिना स्क्रीन अथवा वाणी के। पूरे सात वर्ष बनाये रखने पर यह अभ्यास दशा की दिशाहीनता को स्पष्टता में परिवर्तित करता है। दैनिक गणेश स्तोत्र एवं संकष्टी चतुर्थी पालन के साथ संयुक्त, यह दशा के गहनतम अन्तर्मुख विकास को उत्पन्न करता है।',
      },
    },
    {
      name: { en: 'Combine astrological and clinical care', hi: 'ज्योतिष एवं नैदानिक देखभाल को साथ रखें' },
      text: {
        en: 'If Ketu Mahadasha registers as clinical depression, autoimmune flares, sleep dysfunction, or unexplained anxiety, combine astrological remedies with appropriate medical or psychological care. Ketu\'s dasha runs deep into the nervous and immune systems; do not handle clinical symptoms with mantra alone. Both layers — clinical and astrological — are real; both are needed.',
        hi: 'यदि केतु महादशा नैदानिक अवसाद, स्व-प्रतिरक्षा उभार, निद्रा-असन्तुलन, अथवा अव्याख्यायित चिन्ता के रूप में दर्ज हो — ज्योतिष-उपायों को उपयुक्त चिकित्सकीय अथवा मनोवैज्ञानिक देखभाल के साथ संयोजित करें। केतु की दशा स्नायु एवं प्रतिरक्षा तन्त्रों में गहरी चलती है; नैदानिक लक्षणों को केवल मन्त्र से न सम्भालें। दोनों परतें — नैदानिक और ज्योतिष — वास्तविक हैं; दोनों आवश्यक।',
      },
    },
    {
      name: { en: 'Release attachments deliberately', hi: 'सचेत रूप से आसक्तियाँ छोड़ें' },
      text: {
        en: 'Ketu\'s deepest practice is the deliberate release of attachments before the dasha removes them involuntarily. Examine each year what no longer aligns with deeper purpose — a habit, a possession, a role, a relationship pattern, an identity — and release it consciously. The dasha removes by force what the native does not release by choice. Conscious release produces the dasha\'s deepest gift; resisted release produces its difficulty.',
        hi: 'केतु का गहनतम अभ्यास है — दशा द्वारा अनैच्छिक रूप से हटाने से पूर्व आसक्तियों का सचेत त्याग। प्रति वर्ष जाँचें — कौन-सी आदत, सम्पत्ति, भूमिका, सम्बन्ध-स्वरूप, पहचान अब गहरे प्रयोजन से संरेखित नहीं — और उसे सचेत रूप से छोड़ें। दशा बल से उसे हटाती है जिसे जातक स्वेच्छा से नहीं छोड़ता। सचेत त्याग दशा का गहनतम उपहार उत्पन्न करता है; प्रतिरोधित त्याग उसकी कठिनाई।',
      },
    },
  ],

  datePublished: '2026-05-02',
  dateModified: '2026-05-02',
};
