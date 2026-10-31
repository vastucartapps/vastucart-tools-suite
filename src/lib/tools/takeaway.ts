/**
 * The short answer for each calculator.
 *
 * Every page here is a form, and a form answers nobody until they have found their birth certificate.
 * Someone who searched "what is a mahadasha" and landed on the mahadasha calculator should get the answer
 * before anything asks them for anything. That is what this text is for, and it is why it is written per
 * tool by hand rather than assembled from the tool's title: a sentence stitched together from a slug reads
 * like one, and neither a reader nor a search engine has any use for it.
 *
 * Two rules it is written to.
 *
 * It says only what the tool does. The lagna page, for example, returns the rising sign, its lord and its
 * degree; it does not draw a chart, so the copy does not say chart however many people search for one.
 *
 * It uses the words people actually type, taken from the site's own Search Console export, and only where
 * those words are true of the tool. Twenty of the thirty-three have such a phrase. The rest do not: the
 * queries reaching them are for neighbouring tools, and writing "lucky number" into the lucky colour page
 * to catch them would be the kind of thing that costs a site its rankings rather than earning them.
 *
 * `searchedPhrase` records the one phrase the English copy must contain, with the impressions it drew in
 * the 8 October export, so the reason for a given wording is visible to whoever edits it next.
 */

export interface TakeawayFact {
  /** Two or three words. The same three roles on every tool, so the block can be scanned at a glance. */
  label: string;
  value: string;
}

export interface Takeaway {
  /** The answer itself, in two or three sentences. This is the part a search result or an assistant quotes. */
  lead: string;
  facts: TakeawayFact[];
}

export interface ToolTakeawayEntry {
  en: Takeaway;
  hi: Takeaway;
  /** The searched phrase the English copy must contain, or omitted where no real query fits the tool. */
  searchedPhrase?: string;
  /** Impressions that phrase drew in the 8 October 2026 Search Console export, for whoever edits this next. */
  impressions?: number;
}

export const TOOL_TAKEAWAYS: Record<string, ToolTakeawayEntry> = {
  'career-predictor': {
    searchedPhrase: 'career prediction by date of birth',
    impressions: 5261,
    en: {
      lead: 'Career prediction by date of birth reads the tenth house of your birth chart, its lord and the planets that aspect it, because that is the part of a Vedic chart that describes work. It names the fields that suit you, whether a job or your own business fits you better, and the periods when a change is likely to go well.',
      facts: [
        { label: 'You give it', value: 'Date, time and place of birth. Time matters: the tenth house moves roughly every two hours.' },
        { label: 'You get back', value: 'Suited professions, a job against business reading, promotion windows and the planetary periods behind them.' },
        { label: 'Worth knowing', value: 'It describes direction and timing, not a job offer. Two people born minutes apart can read differently.' },
      ],
    },
    hi: {
      lead: 'जन्म तिथि से करियर भविष्यवाणी आपकी कुंडली के दसवें भाव, उसके स्वामी और उस पर दृष्टि डालने वाले ग्रहों को पढ़ती है, क्योंकि वैदिक कुंडली में कर्म और आजीविका इसी भाव से देखी जाती है। यह बताती है कि कौन से क्षेत्र आपके अनुकूल हैं, नौकरी ठीक रहेगी या अपना व्यवसाय, और बदलाव के लिए कौन सा समय अनुकूल है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'जन्म की तारीख, समय और स्थान। समय ज़रूरी है: दसवां भाव लगभग हर दो घंटे में बदल जाता है।' },
        { label: 'आपको क्या मिलता है', value: 'अनुकूल पेशे, नौकरी बनाम व्यवसाय का विश्लेषण, उन्नति के समय और उनके पीछे की ग्रह दशाएं।' },
        { label: 'ध्यान रखें', value: 'यह दिशा और समय बताती है, नौकरी की गारंटी नहीं। कुछ मिनट के अंतर से जन्मे दो लोगों का पाठ अलग हो सकता है।' },
      ],
    },
  },

  'marriage-timing-predictor': {
    searchedPhrase: 'marriage timing calculator',
    impressions: 622,
    en: {
      lead: 'A marriage timing calculator looks at the seventh house of your chart, the planet Venus and the dasha periods you are passing through, and names the ages and windows in which marriage is most likely. Where it sees delay, it says which combination is causing it rather than leaving you to guess.',
      facts: [
        { label: 'You give it', value: 'Date, time and place of birth. Without a birth time the seventh house cannot be placed.' },
        { label: 'You get back', value: 'Favourable age range, the specific windows inside it, reasons for delay, and the classical remedies for each.' },
        { label: 'Worth knowing', value: 'A window is when conditions support a marriage, not a date on which one happens.' },
      ],
    },
    hi: {
      lead: 'विवाह समय कैलकुलेटर आपकी कुंडली के सातवें भाव, शुक्र ग्रह और चल रही दशाओं को देखकर बताता है कि विवाह की सबसे अधिक संभावना किस आयु और किन अवधियों में है। यदि देरी के योग हैं, तो यह भी बताता है कि कौन सा ग्रह योग उसका कारण बन रहा है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'जन्म की तारीख, समय और स्थान। जन्म समय के बिना सातवां भाव तय नहीं हो सकता।' },
        { label: 'आपको क्या मिलता है', value: 'अनुकूल आयु, उसके भीतर की विशेष अवधियां, देरी के कारण और उनके शास्त्रीय उपाय।' },
        { label: 'ध्यान रखें', value: 'अवधि का अर्थ है कि परिस्थितियां अनुकूल हैं, यह विवाह की निश्चित तारीख नहीं है।' },
      ],
    },
  },

  'lo-shu-grid': {
    searchedPhrase: 'lo shu grid',
    impressions: 72347,
    en: {
      lead: 'The lo shu grid arranges the digits of your date of birth into a three by three square. Which cells fill up, and which stay empty, is the whole reading: a repeated digit is a strength carried to excess, and a missing one is the quality you have to build deliberately rather than one you were handed.',
      facts: [
        { label: 'You give it', value: 'Your date of birth. No birth time is needed, because the grid is built from digits alone.' },
        { label: 'You get back', value: 'The filled square, your missing numbers, the mind, heart and action planes, and a remedy for each weak digit.' },
        { label: 'Common mix-up', value: 'A missing number is not a fault. It marks the area that asks for conscious effort.' },
      ],
    },
    hi: {
      lead: 'लो शु ग्रिड आपकी जन्म तिथि के अंकों को तीन गुणा तीन के वर्ग में रखता है। कौन से खाने भरते हैं और कौन से खाली रह जाते हैं, यही पूरा पाठ है: बार-बार आने वाला अंक अति तक पहुंची हुई शक्ति है, और अनुपस्थित अंक वह गुण है जिसे आपको स्वयं विकसित करना पड़ता है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'केवल जन्म तिथि। जन्म समय की आवश्यकता नहीं, क्योंकि ग्रिड अंकों से ही बनता है।' },
        { label: 'आपको क्या मिलता है', value: 'भरा हुआ वर्ग, अनुपस्थित अंक, मन, हृदय और कर्म के तल, और हर कमज़ोर अंक का उपाय।' },
        { label: 'आम भ्रम', value: 'अनुपस्थित अंक दोष नहीं है। वह उस क्षेत्र को दर्शाता है जिस पर सचेत प्रयास चाहिए।' },
      ],
    },
  },

  mahadasha: {
    searchedPhrase: 'mahadasha calculator',
    impressions: 21241,
    en: {
      lead: 'Your mahadasha is the planetary period you are living through now, and it is fixed by the nakshatra the Moon occupied at your birth. That is why a mahadasha calculator asks for your date, time and place of birth: without them the Moon cannot be placed, and without the Moon there is no starting point.',
      facts: [
        { label: 'You give it', value: 'Date, time and place of birth. The Moon changes nakshatra roughly once a day.' },
        { label: 'You get back', value: 'The full Vimshottari sequence, the dasha running now, its antardasha and the effects of each.' },
        { label: 'Worth knowing', value: 'The nine periods run from 6 years for the Sun to 20 for Venus, 120 years in all.' },
      ],
    },
    hi: {
      lead: 'महादशा वह ग्रह अवधि है जिससे आप इस समय गुज़र रहे हैं, और यह जन्म के समय चंद्रमा जिस नक्षत्र में था उससे तय होती है। इसीलिए महादशा कैलकुलेटर जन्म की तारीख, समय और स्थान मांगता है: इनके बिना चंद्रमा की स्थिति नहीं निकलती, और उसके बिना कोई प्रारंभ बिंदु नहीं होता।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'जन्म की तारीख, समय और स्थान। चंद्रमा लगभग हर दिन नक्षत्र बदलता है।' },
        { label: 'आपको क्या मिलता है', value: 'पूरा विंशोत्तरी क्रम, वर्तमान महादशा, उसकी अंतर्दशा और हर अवधि का फल।' },
        { label: 'ध्यान रखें', value: 'नौ दशाएं सूर्य की 6 वर्ष से शुक्र की 20 वर्ष तक, कुल मिलाकर 120 वर्ष की होती हैं।' },
      ],
    },
  },

  lagna: {
    searchedPhrase: 'lagna calculator',
    impressions: 7519,
    en: {
      lead: 'Your lagna, or ascendant, is the zodiac sign that was rising on the eastern horizon at the moment you were born. It changes about every two hours, which is why a lagna calculator needs your birth time and place as well as the date, and why it is the one thing in a chart that an approximate time will get wrong.',
      facts: [
        { label: 'You give it', value: 'Date, time and place of birth. An hour of error usually moves the rising sign.' },
        { label: 'You get back', value: 'The rising sign, its ruling planet, the exact degree, and what that placement means for you.' },
        { label: 'Common mix-up', value: 'The lagna is not your sun sign or your moon sign. All three are usually different.' },
      ],
    },
    hi: {
      lead: 'लग्न वह राशि है जो आपके जन्म के समय पूर्वी क्षितिज पर उदय हो रही थी। यह लगभग हर दो घंटे में बदलती है, इसीलिए लग्न कैलकुलेटर को तारीख के साथ जन्म का समय और स्थान भी चाहिए, और इसीलिए अनुमानित समय से सबसे पहले यही गलत निकलता है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'जन्म की तारीख, समय और स्थान। एक घंटे की भूल से प्रायः लग्न राशि बदल जाती है।' },
        { label: 'आपको क्या मिलता है', value: 'उदय होती राशि, उसका स्वामी ग्रह, सटीक अंश, और उस स्थिति का अर्थ।' },
        { label: 'आम भ्रम', value: 'लग्न आपकी सूर्य राशि या चंद्र राशि नहीं है। प्रायः तीनों अलग होती हैं।' },
      ],
    },
  },

  'moon-sign': {
    searchedPhrase: 'moon sign calculator',
    impressions: 25330,
    en: {
      lead: 'Your moon sign, the chandra rashi, is the sign the Moon stood in when you were born, and in Vedic astrology it carries the inner life: temperament, emotion and instinct. A moon sign calculator needs your birth time because the Moon moves through a sign in roughly two and a half days.',
      facts: [
        { label: 'You give it', value: 'Date, time and place of birth. Near a sign change the time decides the answer.' },
        { label: 'You get back', value: 'Your rashi, its ruling planet, the temperament it describes and how it reads with others.' },
        { label: 'Common mix-up', value: 'Indian astrology works from this sign, not the sun sign that newspaper columns use.' },
      ],
    },
    hi: {
      lead: 'चंद्र राशि वह राशि है जिसमें आपके जन्म के समय चंद्रमा स्थित था, और वैदिक ज्योतिष में यही मन, भावना और स्वभाव को दर्शाती है। चंद्र राशि कैलकुलेटर को जन्म समय चाहिए क्योंकि चंद्रमा एक राशि में लगभग ढाई दिन ही रहता है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'जन्म की तारीख, समय और स्थान। राशि बदलने के समय उत्तर समय से ही तय होता है।' },
        { label: 'आपको क्या मिलता है', value: 'आपकी राशि, उसका स्वामी ग्रह, उससे बनने वाला स्वभाव और दूसरों के साथ मेल।' },
        { label: 'आम भ्रम', value: 'भारतीय ज्योतिष इसी राशि से चलता है, अख़बार वाली सूर्य राशि से नहीं।' },
      ],
    },
  },

  nakshatra: {
    searchedPhrase: 'nakshatra calculator',
    impressions: 13928,
    en: {
      lead: 'Your nakshatra is the lunar mansion the Moon occupied at your birth, one of twenty-seven, each divided into four padas. A nakshatra calculator needs the birth time as well as the date, because the Moon crosses a nakshatra in about a day and a pada in roughly six hours.',
      facts: [
        { label: 'You give it', value: 'Date, time and place of birth. The pada in particular turns on the time.' },
        { label: 'You get back', value: 'Your nakshatra and pada, its ruling planet and deity, its symbol and the traits attached to it.' },
        { label: 'Worth knowing', value: 'This is also what fixes your dasha sequence and much of marriage matching.' },
      ],
    },
    hi: {
      lead: 'नक्षत्र वह चंद्र भवन है जिसमें जन्म के समय चंद्रमा स्थित था, कुल सत्ताईस में से एक, और हर नक्षत्र के चार पाद होते हैं। नक्षत्र कैलकुलेटर को तारीख के साथ जन्म समय भी चाहिए, क्योंकि चंद्रमा एक नक्षत्र लगभग एक दिन में और एक पाद लगभग छह घंटे में पार करता है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'जन्म की तारीख, समय और स्थान। पाद विशेष रूप से समय पर निर्भर करता है।' },
        { label: 'आपको क्या मिलता है', value: 'आपका नक्षत्र और पाद, उसका स्वामी ग्रह और देवता, प्रतीक और स्वभाव।' },
        { label: 'ध्यान रखें', value: 'दशा क्रम और विवाह मिलान का बड़ा हिस्सा भी इसी से तय होता है।' },
      ],
    },
  },

  'lucky-vehicle-number': {
    searchedPhrase: 'lucky vehicle number calculator',
    impressions: 3952,
    en: {
      lead: 'A lucky vehicle number calculator reduces the digits of a registration number to a single number and reads it against the number your date of birth gives you. What it is really checking is whether the two agree, because in numerology a number is favourable for a person rather than favourable in itself.',
      facts: [
        { label: 'You give it', value: 'Your date of birth and the registration number, letters included.' },
        { label: 'You get back', value: 'The number the plate reduces to, how it sits with yours, and what it suggests for travel and safety.' },
        { label: 'Common mix-up', value: 'There is no universally lucky plate. The same number reads differently for two owners.' },
      ],
    },
    hi: {
      lead: 'वाहन अंक कैलकुलेटर पंजीकरण संख्या के अंकों को जोड़कर एक अंक पर लाता है और उसे आपकी जन्म तिथि से मिलने वाले अंक के साथ मिलाता है। असल जांच यही है कि दोनों में मेल है या नहीं, क्योंकि अंक ज्योतिष में कोई अंक अपने आप में नहीं, किसी व्यक्ति के लिए शुभ होता है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'अपनी जन्म तिथि और वाहन की पूरी पंजीकरण संख्या, अक्षरों सहित।' },
        { label: 'आपको क्या मिलता है', value: 'नंबर का मूलांक, आपके अंक से उसका मेल, और यात्रा तथा सुरक्षा के संकेत।' },
        { label: 'आम भ्रम', value: 'कोई नंबर सबके लिए शुभ नहीं होता। वही नंबर दो मालिकों के लिए अलग पढ़ा जाता है।' },
      ],
    },
  },

  'raj-yoga': {
    searchedPhrase: 'raj yoga calculator',
    impressions: 3009,
    en: {
      lead: 'A raj yoga is formed when the lords of a kendra and a trikona house come together in a chart, and the classical texts treat it as a mark of standing and prosperity. A raj yoga calculator finds those combinations in your chart, says how strong each one is, and whether anything in the chart weakens it.',
      facts: [
        { label: 'You give it', value: 'Date, time and place of birth, because every house lord depends on the rising sign.' },
        { label: 'You get back', value: 'The raj yogas present, dhana and panch mahapurush yogas, and a strength reading for each.' },
        { label: 'Worth knowing', value: 'A yoga is a potential. Its dasha period is what brings it forward, which is a separate reading.' },
      ],
    },
    hi: {
      lead: 'राज योग तब बनता है जब कुंडली में केंद्र और त्रिकोण भावों के स्वामी आपस में संबंध बनाते हैं, और शास्त्र इसे प्रतिष्ठा और समृद्धि का योग मानते हैं। राज योग कैलकुलेटर आपकी कुंडली में ऐसे योग खोजता है, हर एक की शक्ति बताता है, और यह भी कि कोई स्थिति उसे कमज़ोर तो नहीं कर रही।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'जन्म की तारीख, समय और स्थान, क्योंकि हर भाव का स्वामी लग्न पर निर्भर करता है।' },
        { label: 'आपको क्या मिलता है', value: 'कुंडली में उपस्थित राज योग, धन योग, पंच महापुरुष योग और हर एक की शक्ति।' },
        { label: 'ध्यान रखें', value: 'योग संभावना है। उसे फल तक दशा लाती है, जो अलग गणना है।' },
      ],
    },
  },

  'lucky-number': {
    searchedPhrase: 'lucky number by date of birth',
    impressions: 5429,
    en: {
      lead: 'Your lucky number by date of birth is built from two things: the mulank, which is the day you were born reduced to a single digit, and the bhagyank, which comes from the whole date. The first describes how you act, the second the direction your life tends to take, and most numerology readings use both.',
      facts: [
        { label: 'You give it', value: 'Your date of birth alone. No birth time is needed for a numerology reading.' },
        { label: 'You get back', value: 'Your personal number, the digits favourable on a given day, your days of the week, directions and colours.' },
        { label: 'Common mix-up', value: 'The mulank and the bhagyank are different numbers and are often confused for each other.' },
      ],
    },
    hi: {
      lead: 'जन्म तिथि से भाग्यशाली अंक दो चीज़ों से बनता है: मूलांक, जो जन्म के दिन को एक अंक में लाने से मिलता है, और भाग्यांक, जो पूरी तारीख से निकलता है। पहला बताता है कि आप कैसे काम करते हैं, दूसरा यह कि जीवन किस दिशा में जाता है, और अधिकांश पाठ दोनों का उपयोग करते हैं।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'केवल जन्म तिथि। अंक ज्योतिष के लिए जन्म समय आवश्यक नहीं है।' },
        { label: 'आपको क्या मिलता है', value: 'आपका मूलांक और भाग्यांक, दिन के अनुकूल अंक, शुभ वार, दिशाएं और रंग।' },
        { label: 'आम भ्रम', value: 'मूलांक और भाग्यांक अलग-अलग अंक हैं और प्रायः एक दूसरे से भ्रमित कर दिए जाते हैं।' },
      ],
    },
  },

  'wealth-money-predictor': {
    searchedPhrase: 'wealth prediction by date of birth',
    impressions: 1539,
    en: {
      lead: 'Wealth prediction by date of birth works from your numerology chart rather than a planetary one: the numbers your birth date produces are read for how money tends to arrive, how it tends to leave, and which years support building rather than spending.',
      facts: [
        { label: 'You give it', value: 'Your date of birth. The reading is numerological, so no birth time is required.' },
        { label: 'You get back', value: 'Your wealth number, the pattern it describes, the stronger years and what suits them.' },
        { label: 'Worth knowing', value: 'It reads tendency and timing. No numerological method names an amount, and any that claims to is guessing.' },
      ],
    },
    hi: {
      lead: 'जन्म तिथि से धन की भविष्यवाणी ग्रहों से नहीं, आपके अंक ज्योतिष चार्ट से की जाती है: जन्म तिथि से बनने वाले अंक बताते हैं कि धन किस तरह आता है, किस तरह जाता है, और कौन से वर्ष संचय के लिए अनुकूल हैं।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'केवल जन्म तिथि। गणना अंक ज्योतिष से होती है, इसलिए जन्म समय आवश्यक नहीं।' },
        { label: 'आपको क्या मिलता है', value: 'आपका धन अंक, उससे बनने वाली प्रवृत्ति, अनुकूल वर्ष और उनके लिए उपयुक्त कार्य।' },
        { label: 'ध्यान रखें', value: 'यह प्रवृत्ति और समय बताता है। कोई भी अंक पद्धति राशि नहीं बताती, और जो बताए वह अनुमान है।' },
      ],
    },
  },

  'pitra-dosha': {
    searchedPhrase: 'pitra dosha calculator',
    impressions: 2846,
    en: {
      lead: 'Pitra dosha is read when the Sun, Rahu or Ketu afflict the ninth house of a chart, the house of father and forebears. A pitra dosha calculator checks for those placements, says how strong the affliction is, and names the areas of life the classical texts connect it to.',
      facts: [
        { label: 'You give it', value: 'Date, time and place of birth, since the ninth house depends on the rising sign.' },
        { label: 'You get back', value: 'Whether the dosha is present, its severity, the life areas affected, and the remedies including shradh guidance.' },
        { label: 'Worth knowing', value: 'The texts describe it as a debt to be settled, not a curse. The remedies are rites of remembrance.' },
      ],
    },
    hi: {
      lead: 'पितृ दोष तब देखा जाता है जब सूर्य, राहु या केतु कुंडली के नवम भाव को प्रभावित करें, जो पिता और पूर्वजों का भाव है। पितृ दोष कैलकुलेटर इन स्थितियों की जांच करता है, दोष की तीव्रता बताता है, और शास्त्रों में इससे जुड़े जीवन क्षेत्रों का उल्लेख करता है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'जन्म की तारीख, समय और स्थान, क्योंकि नवम भाव लग्न पर निर्भर करता है।' },
        { label: 'आपको क्या मिलता है', value: 'दोष है या नहीं, उसकी तीव्रता, प्रभावित जीवन क्षेत्र, और श्राद्ध सहित उपाय।' },
        { label: 'ध्यान रखें', value: 'शास्त्र इसे ऋण कहते हैं, शाप नहीं। उपाय स्मरण और तर्पण के कर्म हैं।' },
      ],
    },
  },

  manglik: {
    searchedPhrase: 'manglik check',
    impressions: 1074,
    en: {
      lead: 'A manglik check looks for Mars in the first, fourth, seventh, eighth or twelfth house of your chart. That placement is what the tradition calls mangal dosha, and the same tradition lists a long set of conditions that cancel it, which is why so many people told they are manglik are not, in practice, affected.',
      facts: [
        { label: 'You give it', value: 'Date, time and place of birth. Mars changes house roughly every two hours.' },
        { label: 'You get back', value: 'Whether the dosha is present, its intensity, which cancellation rules apply, and remedies.' },
        { label: 'Common mix-up', value: 'Cancellation is part of the classical rule, not a loophole. A check that ignores it is incomplete.' },
      ],
    },
    hi: {
      lead: 'मंगलिक जांच यह देखती है कि मंगल कुंडली के पहले, चौथे, सातवें, आठवें या बारहवें भाव में तो नहीं है। यही स्थिति मंगल दोष कहलाती है, और वही परंपरा इसे रद्द करने वाली अनेक स्थितियां भी बताती है, इसीलिए मंगलिक कहे गए बहुत से लोग वास्तव में प्रभावित नहीं होते।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'जन्म की तारीख, समय और स्थान। मंगल लगभग हर दो घंटे में भाव बदलता है।' },
        { label: 'आपको क्या मिलता है', value: 'दोष है या नहीं, उसकी तीव्रता, कौन से रद्द करने वाले नियम लागू हैं, और उपाय।' },
        { label: 'आम भ्रम', value: 'दोष भंग शास्त्र का ही हिस्सा है, कोई छूट नहीं। उसे छोड़ने वाली जांच अधूरी है।' },
      ],
    },
  },

  'lucky-mobile-number': {
    searchedPhrase: 'lucky mobile number',
    impressions: 5282,
    en: {
      lead: 'A lucky mobile number is judged by reducing all ten digits to a single number and reading it against the number your birth date gives you. The question is whether the two sit well together, so the same number can suit one person and work against another.',
      facts: [
        { label: 'You give it', value: 'Your date of birth and the mobile number you want checked.' },
        { label: 'You get back', value: 'The number your mobile reduces to, how it matches yours, its fit for business use, and whether a change is worth it.' },
        { label: 'Common mix-up', value: 'Numerology reads the whole number, not only the last digit people usually quote.' },
      ],
    },
    hi: {
      lead: 'मोबाइल नंबर का शुभ होना इस तरह देखा जाता है कि उसके सभी दस अंकों को जोड़कर एक अंक पर लाया जाए और उसे आपकी जन्म तिथि के अंक से मिलाया जाए। प्रश्न यही है कि दोनों में मेल है या नहीं, इसलिए एक ही नंबर किसी के लिए अनुकूल और किसी के लिए प्रतिकूल हो सकता है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'अपनी जन्म तिथि और जिस मोबाइल नंबर की जांच करनी है वह।' },
        { label: 'आपको क्या मिलता है', value: 'नंबर का मूलांक, आपके अंक से मेल, व्यापार के लिए उपयुक्तता, और नंबर बदलने की सलाह।' },
        { label: 'आम भ्रम', value: 'अंक ज्योतिष पूरे नंबर को देखता है, केवल अंतिम अंक को नहीं।' },
      ],
    },
  },

  'chaldean-numerology': {
    searchedPhrase: 'chaldean numerology calculator',
    impressions: 2420,
    en: {
      lead: 'Chaldean numerology gives each letter a value from one to eight, assigned by the sound of the letter rather than its place in the alphabet, and it never uses nine. A chaldean numerology calculator totals your name by those values and returns both the single digit and the compound number behind it.',
      facts: [
        { label: 'You give it', value: 'Your name as you actually use it, spelled the way you write it.' },
        { label: 'You get back', value: 'The value of each letter, your compound number, the single digit it reduces to, and the reading for both.' },
        { label: 'Common mix-up', value: 'This is not the Pythagorean system. The letter values differ, so the two give different numbers.' },
      ],
    },
    hi: {
      lead: 'कैल्डियन अंक ज्योतिष हर अक्षर को एक से आठ तक का मान देता है, जो वर्णमाला के क्रम से नहीं बल्कि अक्षर की ध्वनि से तय होता है, और इसमें नौ का प्रयोग कभी नहीं होता। यह कैलकुलेटर आपके नाम का योग इन्हीं मानों से करता है और एकल अंक तथा उसके पीछे की संयुक्त संख्या दोनों देता है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'अपना नाम वैसे ही जैसे आप उसे लिखते और प्रयोग करते हैं।' },
        { label: 'आपको क्या मिलता है', value: 'हर अक्षर का मान, संयुक्त संख्या, उससे बनने वाला एकल अंक, और दोनों का अर्थ।' },
        { label: 'आम भ्रम', value: 'यह पाइथागोरियन पद्धति नहीं है। अक्षरों के मान अलग हैं, इसलिए उत्तर भी अलग आता है।' },
      ],
    },
  },

  'love-compatibility-numerology': {
    en: {
      lead: 'Numerological compatibility compares two people by the numbers their birth dates and names produce, and reads how those numbers behave together. A high score describes an easy fit; a low one describes where two temperaments pull in different directions, which is useful in a different way.',
      facts: [
        { label: 'You give it', value: 'Both dates of birth, and both names if you want the name numbers included.' },
        { label: 'You get back', value: 'Each life path and name number, a match score, and what the pairing tends to be like day to day.' },
        { label: 'Worth knowing', value: 'A low score is not a verdict. It names the friction rather than deciding the outcome.' },
      ],
    },
    hi: {
      lead: 'अंक ज्योतिष में अनुकूलता दो लोगों की जन्म तिथि और नाम से बनने वाले अंकों की तुलना करके देखी जाती है। अधिक अंक सहज मेल बताते हैं, और कम अंक यह बताते हैं कि दो स्वभाव किन बातों में अलग दिशा में खिंचते हैं, जो अपने तरीके से उपयोगी जानकारी है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'दोनों की जन्म तिथि, और नाम अंक चाहिए तो दोनों के नाम भी।' },
        { label: 'आपको क्या मिलता है', value: 'दोनों के मूलांक और नाम अंक, मेल का स्कोर, और रोज़मर्रा में संबंध का स्वरूप।' },
        { label: 'ध्यान रखें', value: 'कम स्कोर निर्णय नहीं है। वह केवल बताता है कि टकराव कहां हो सकता है।' },
      ],
    },
  },

  'gemstone-recommender': {
    searchedPhrase: 'gemstone calculator',
    impressions: 1000,
    en: {
      lead: 'A gemstone calculator does not pick a stone you like the look of. It finds which planet in your chart needs strengthening, and recommends the stone that classical astrology assigns to that planet, together with the weight, metal and day the tradition attaches to wearing it.',
      facts: [
        { label: 'You give it', value: 'Date, time and place of birth, because the recommendation follows your rising sign.' },
        { label: 'You get back', value: 'The stone, the planet behind it, the weight in ratti, the metal, the mantra and the day to begin.' },
        { label: 'Worth knowing', value: 'The stone for a benefic in your chart may be the wrong stone for someone else entirely.' },
      ],
    },
    hi: {
      lead: 'रत्न कैलकुलेटर पसंद के आधार पर पत्थर नहीं चुनता। यह देखता है कि आपकी कुंडली में किस ग्रह को बल चाहिए, और शास्त्र उस ग्रह के लिए जो रत्न बताते हैं वही सुझाता है, साथ में वज़न, धातु और धारण करने का दिन भी।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'जन्म की तारीख, समय और स्थान, क्योंकि सुझाव लग्न के अनुसार बदलता है।' },
        { label: 'आपको क्या मिलता है', value: 'रत्न, उसका ग्रह, रत्ती में वज़न, धातु, मंत्र और धारण करने का दिन।' },
        { label: 'ध्यान रखें', value: 'आपकी कुंडली के शुभ ग्रह का रत्न किसी और के लिए प्रतिकूल हो सकता है।' },
      ],
    },
  },

  'business-name': {
    searchedPhrase: 'lucky business name by date of birth',
    impressions: 800,
    en: {
      lead: 'Checking a lucky business name by date of birth means reducing the name to its numerological value and reading it against the owner, because in this system a name works for the person running the business rather than on its own. Where the two disagree, the tool suggests spellings that bring them closer.',
      facts: [
        { label: 'You give it', value: 'The company or brand name as it will be registered, and the owner date of birth.' },
        { label: 'You get back', value: 'The name number, how it sits with the owner, a score, and alternative spellings that score better.' },
        { label: 'Worth knowing', value: 'A single letter changes the total, which is why so many firms alter one in the spelling.' },
      ],
    },
    hi: {
      lead: 'जन्म तिथि से व्यापार नाम की जांच का अर्थ है नाम को उसके अंक मान तक लाना और उसे मालिक के अंक से मिलाना, क्योंकि इस पद्धति में नाम अपने आप नहीं, चलाने वाले व्यक्ति के लिए काम करता है। मेल न होने पर यह ऐसी वर्तनी सुझाता है जो दोनों को पास लाए।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'कंपनी या ब्रांड का नाम जैसा पंजीकृत होगा, और मालिक की जन्म तिथि।' },
        { label: 'आपको क्या मिलता है', value: 'नाम का अंक, मालिक से उसका मेल, स्कोर, और बेहतर अंक वाली वैकल्पिक वर्तनी।' },
        { label: 'ध्यान रखें', value: 'एक अक्षर से पूरा योग बदल जाता है, इसीलिए कई कंपनियां वर्तनी में एक अक्षर बदलती हैं।' },
      ],
    },
  },

  'lucky-color': {
    en: {
      lead: 'Your auspicious colours come from the planet that rules your numerology number, since each planet carries a colour in the classical system. The result is a small set of shades worth favouring in what you wear, what you paint and what you brand, and one or two worth using sparingly.',
      facts: [
        { label: 'You give it', value: 'Your date of birth alone. The reading is numerological, so no birth time is needed.' },
        { label: 'You get back', value: 'Colours that suit you, the ruling planet behind each, and where they help most: clothing, home or branding.' },
        { label: 'Worth knowing', value: 'A colour to use sparingly is not forbidden. It simply does not support you the way the others do.' },
      ],
    },
    hi: {
      lead: 'आपके शुभ रंग उस ग्रह से आते हैं जो आपके अंक का स्वामी है, क्योंकि शास्त्रीय पद्धति में हर ग्रह का अपना रंग है। परिणाम कुछ ऐसे रंग होते हैं जिन्हें वस्त्र, घर और ब्रांड में अपनाना चाहिए, और एक दो ऐसे जिनका प्रयोग कम रखना बेहतर है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'केवल जन्म तिथि। गणना अंक ज्योतिष से होती है, जन्म समय आवश्यक नहीं।' },
        { label: 'आपको क्या मिलता है', value: 'आपके अनुकूल रंग, हर रंग का स्वामी ग्रह, और कहां सबसे उपयोगी हैं: वस्त्र, घर या ब्रांड।' },
        { label: 'ध्यान रखें', value: 'कम प्रयोग वाला रंग वर्जित नहीं है। वह बस उतना सहायक नहीं होता जितने बाकी।' },
      ],
    },
  },

  'yoga-calculator': {
    searchedPhrase: 'yoga calculator',
    impressions: 4186,
    en: {
      lead: 'A yoga in a kundli is a specific combination of planets that the classical texts single out and name, and a chart usually contains several. A yoga calculator finds the ones present in yours, from Gaja Kesari and the panch mahapurush group to neecha bhanga raja yoga, and reads the strength of each.',
      facts: [
        { label: 'You give it', value: 'Date, time and place of birth, because most yogas depend on which houses the planets fall in.' },
        { label: 'You get back', value: 'Every recognised yoga in your chart, what each one means, and how strongly it is formed.' },
        { label: 'Common mix-up', value: 'Raj yoga is one family among many. A chart can carry several, and not all of them are favourable.' },
      ],
    },
    hi: {
      lead: 'कुंडली में योग ग्रहों का वह विशेष संयोग है जिसे शास्त्र अलग से नाम देते हैं, और प्रायः एक कुंडली में कई योग होते हैं। योग कैलकुलेटर आपकी कुंडली में उपस्थित योग खोजता है, गज केसरी और पंच महापुरुष से लेकर नीच भंग राज योग तक, और हर एक की शक्ति बताता है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'जन्म की तारीख, समय और स्थान, क्योंकि अधिकांश योग भाव स्थिति पर निर्भर हैं।' },
        { label: 'आपको क्या मिलता है', value: 'कुंडली के सभी मान्य योग, हर एक का अर्थ, और वह कितनी मज़बूती से बना है।' },
        { label: 'आम भ्रम', value: 'राज योग अनेक में से एक वर्ग है। एक कुंडली में कई योग हो सकते हैं, और सभी शुभ नहीं होते।' },
      ],
    },
  },

  'muhurat-finder': {
    en: {
      lead: 'A shubh muhurat is a window in which the panchang elements of a day, its tithi, nakshatra and yoga, line up in favour of what you intend to do. This finder works out those windows for a specific purpose, because the time that suits a marriage is not the time that suits buying a vehicle.',
      facts: [
        { label: 'You give it', value: 'What the occasion is, the date range you are considering, and the place.' },
        { label: 'You get back', value: 'The favourable windows inside that range, with the tithi, nakshatra and yoga that make each one favourable.' },
        { label: 'Worth knowing', value: 'Muhurat is reckoned by sunrise, not midnight, so a window can sit either side of a calendar date.' },
      ],
    },
    hi: {
      lead: 'शुभ मुहूर्त वह अवधि है जिसमें दिन के पंचांग अंग, अर्थात तिथि, नक्षत्र और योग, आपके कार्य के अनुकूल बैठते हैं। यह कैलकुलेटर किसी विशेष कार्य के लिए वे अवधियां निकालता है, क्योंकि विवाह के लिए उपयुक्त समय वाहन खरीदने के लिए उपयुक्त नहीं होता।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'कार्य कौन सा है, कौन सी तारीखों के बीच देखना है, और स्थान।' },
        { label: 'आपको क्या मिलता है', value: 'उस अवधि के शुभ समय, और हर समय के साथ वह तिथि, नक्षत्र और योग जो उसे शुभ बनाते हैं।' },
        { label: 'ध्यान रखें', value: 'मुहूर्त सूर्योदय से गिना जाता है, मध्यरात्रि से नहीं, इसलिए अवधि तारीख के दोनों ओर पड़ सकती है।' },
      ],
    },
  },

  'child-name': {
    searchedPhrase: 'numerology baby names with date of birth',
    impressions: 962,
    en: {
      lead: 'Choosing numerology baby names with date of birth means working from the child birth date first and the parents numbers second, then finding names whose value agrees with both. The tool suggests names that fit rather than scoring one you have already chosen, which is the harder half of the job.',
      facts: [
        { label: 'You give it', value: 'The child date of birth, and the parents dates where you want them weighed in.' },
        { label: 'You get back', value: 'Name suggestions with their numerological value, a compatibility score and the meaning of each.' },
        { label: 'Worth knowing', value: 'Many traditions also fix the first syllable from the birth nakshatra, which is a separate question.' },
      ],
    },
    hi: {
      lead: 'अंक ज्योतिष से शिशु का नाम चुनने का अर्थ है पहले बच्चे की जन्म तिथि देखना, फिर माता पिता के अंक, और फिर ऐसे नाम खोजना जिनका मान दोनों से मेल खाए। यह कैलकुलेटर उपयुक्त नाम सुझाता है, केवल पहले से चुने नाम को अंक नहीं देता, और यही काम का कठिन हिस्सा है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'बच्चे की जन्म तिथि, और माता पिता की तिथियां यदि उन्हें भी जोड़ना हो।' },
        { label: 'आपको क्या मिलता है', value: 'नाम सुझाव, उनका अंक मान, अनुकूलता स्कोर और हर नाम का अर्थ।' },
        { label: 'ध्यान रखें', value: 'कई परंपराओं में पहला अक्षर जन्म नक्षत्र से तय होता है, जो अलग प्रश्न है।' },
      ],
    },
  },

  'lucky-bank-account-number': {
    searchedPhrase: 'lucky bank account number',
    impressions: 1200,
    en: {
      lead: 'A lucky bank account number is judged the same way as any other number in numerology: reduce its digits to one, then read that against the number your birth date gives you. Banks will usually let you choose from a few available numbers, which is the only point at which the question is worth asking.',
      facts: [
        { label: 'You give it', value: 'Your date of birth and the account number you want checked.' },
        { label: 'You get back', value: 'The number the account reduces to, how it sits with yours, and what it suggests for saving against spending.' },
        { label: 'Worth knowing', value: 'Numbers you cannot change are not worth worrying over. This is for the ones you can.' },
      ],
    },
    hi: {
      lead: 'बैंक खाता संख्या की जांच अंक ज्योतिष में बाकी संख्याओं की तरह ही होती है: उसके अंकों को जोड़कर एक अंक पर लाइए, फिर उसे जन्म तिथि के अंक से मिलाइए। बैंक प्रायः कुछ उपलब्ध नंबरों में से चुनने देते हैं, और यही वह क्षण है जब यह प्रश्न काम का होता है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'अपनी जन्म तिथि और जिस खाता संख्या की जांच करनी है वह।' },
        { label: 'आपको क्या मिलता है', value: 'खाते का मूलांक, आपके अंक से मेल, और बचत तथा व्यय के संबंध में संकेत।' },
        { label: 'ध्यान रखें', value: 'जो नंबर बदला नहीं जा सकता उस पर चिंता व्यर्थ है। यह उनके लिए है जो चुने जा सकते हैं।' },
      ],
    },
  },

  kundli: {
    en: {
      lead: 'A janam kundli is the map of the sky at the moment and place you were born: every planet in its sign and house, drawn as a chart. Everything else in Vedic astrology, the dashas, the yogas, the doshas and the matching, is read off this one diagram, which is why it is made first.',
      facts: [
        { label: 'You give it', value: 'Date, time and place of birth. All three, because the chart turns on the exact moment.' },
        { label: 'You get back', value: 'The full birth chart with planetary positions, dasha periods, yogas and doshas, downloadable as a PDF.' },
        { label: 'Worth knowing', value: 'It is cast on the Lahiri ayanamsa, the standard the Indian government calendar uses.' },
      ],
    },
    hi: {
      lead: 'जन्म कुंडली उस क्षण और स्थान के आकाश का नक्शा है जहां आपका जन्म हुआ: हर ग्रह अपनी राशि और भाव में, चार्ट के रूप में। वैदिक ज्योतिष का शेष सब कुछ, दशा, योग, दोष और मिलान, इसी एक चित्र से पढ़ा जाता है, इसीलिए यह सबसे पहले बनाई जाती है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'जन्म की तारीख, समय और स्थान। तीनों, क्योंकि कुंडली सटीक क्षण पर टिकी है।' },
        { label: 'आपको क्या मिलता है', value: 'पूरी जन्म कुंडली, ग्रह स्थिति, दशा, योग और दोष, पीडीएफ में डाउनलोड सहित।' },
        { label: 'ध्यान रखें', value: 'गणना लाहिरी अयनांश पर है, वही मानक जो भारत सरकार का पंचांग अपनाता है।' },
      ],
    },
  },

  'marriage-matching': {
    en: {
      lead: 'Kundli matching scores two charts against each other on eight koota, giving a total out of thirty-six, and then checks separately for mangal dosha and nadi dosha. The score is a starting point for a conversation, not a verdict, and the two dosha checks matter more than a point or two in the total.',
      facts: [
        { label: 'You give it', value: 'Both dates, times and places of birth, since every koota is read from the Moon.' },
        { label: 'You get back', value: 'The guna score out of thirty-six broken down by koota, with manglik and nadi dosha checked separately.' },
        { label: 'Common mix-up', value: 'Eighteen out of thirty-six is the usual threshold, and a high score with an unresolved dosha is not a pass.' },
      ],
    },
    hi: {
      lead: 'कुंडली मिलान दो कुंडलियों को आठ कूटों पर मिलाकर छत्तीस में से अंक देता है, और उसके अलग से मंगल दोष तथा नाड़ी दोष की जांच करता है। यह अंक बातचीत की शुरुआत है, निर्णय नहीं, और दोनों दोषों की जांच कुल अंक में एक दो गुण से अधिक महत्व रखती है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'दोनों की जन्म तारीख, समय और स्थान, क्योंकि हर कूट चंद्रमा से देखा जाता है।' },
        { label: 'आपको क्या मिलता है', value: 'छत्तीस में से गुण, कूट के अनुसार विभाजन, और अलग से मंगल तथा नाड़ी दोष की जांच।' },
        { label: 'आम भ्रम', value: 'छत्तीस में से अठारह सामान्य सीमा है, और दोष रहते अधिक अंक भी स्वीकृति नहीं है।' },
      ],
    },
  },

  'life-path-number': {
    en: {
      lead: 'Your life path number, the mulank, is the day of the month you were born reduced to a single digit, and in Indian numerology it is the number that describes how you act and what you reach for. It is the first number any reading starts from, and it takes nothing but your date of birth to find.',
      facts: [
        { label: 'You give it', value: 'Your date of birth. No birth time, no place, no name.' },
        { label: 'You get back', value: 'Your mulank, the temperament it describes, the work and relationships it suits, and your favourable numbers.' },
        { label: 'Common mix-up', value: 'The mulank comes from the day alone. The bhagyank, from the whole date, is a different number.' },
      ],
    },
    hi: {
      lead: 'मूलांक आपके जन्म के दिन को एक अंक में लाने से बनता है, और भारतीय अंक ज्योतिष में यही बताता है कि आप कैसे काम करते हैं और किस ओर बढ़ते हैं। हर पाठ इसी अंक से शुरू होता है, और इसे निकालने के लिए केवल जन्म तिथि चाहिए।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'केवल जन्म तिथि। न समय, न स्थान, न नाम।' },
        { label: 'आपको क्या मिलता है', value: 'आपका मूलांक, उससे बनने वाला स्वभाव, अनुकूल कार्य और संबंध, और शुभ अंक।' },
        { label: 'आम भ्रम', value: 'मूलांक केवल दिन से बनता है। पूरी तारीख से बनने वाला भाग्यांक अलग अंक है।' },
      ],
    },
  },

  'destiny-number': {
    en: {
      lead: 'Your destiny number, the bhagyank, is made by adding every digit of your full date of birth and reducing the total to one. Where the mulank describes how you go about things, the bhagyank describes where that tends to lead, which is why the two are read together rather than one instead of the other.',
      facts: [
        { label: 'You give it', value: 'Your full date of birth, day, month and year, since all three go into the total.' },
        { label: 'You get back', value: 'Your bhagyank, the direction it describes, the work it suits, and how it reads alongside your mulank.' },
        { label: 'Common mix-up', value: 'In Western numerology the destiny number is calculated from the name instead. The two are not the same thing.' },
      ],
    },
    hi: {
      lead: 'भाग्यांक आपकी पूरी जन्म तिथि के सभी अंकों को जोड़कर एक अंक पर लाने से बनता है। मूलांक बताता है कि आप कैसे चलते हैं, और भाग्यांक बताता है कि वह चाल प्रायः कहां ले जाती है, इसीलिए दोनों साथ पढ़े जाते हैं, एक के बदले दूसरा नहीं।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'पूरी जन्म तिथि, दिन, महीना और वर्ष, क्योंकि तीनों योग में जाते हैं।' },
        { label: 'आपको क्या मिलता है', value: 'आपका भाग्यांक, उसकी दिशा, अनुकूल कार्य, और मूलांक के साथ उसका मेल।' },
        { label: 'आम भ्रम', value: 'पाश्चात्य अंक ज्योतिष में यह अंक नाम से निकाला जाता है। दोनों एक नहीं हैं।' },
      ],
    },
  },

  'house-number': {
    en: {
      lead: 'A house or flat number is reduced to a single digit and read against the people living there, so the question is never whether a number is good but whether it suits this household. Where it does not, Vastu offers remedies that work on the entrance and the energy of the rooms rather than on the number itself.',
      facts: [
        { label: 'You give it', value: 'The house or flat number, including any letter, and your date of birth.' },
        { label: 'You get back', value: 'The number the address reduces to, how it sits with yours, and the Vastu remedies for the gaps.' },
        { label: 'Worth knowing', value: 'You cannot change a flat number, and you are not meant to. The remedies are the point.' },
      ],
    },
    hi: {
      lead: 'मकान या फ्लैट संख्या को एक अंक पर लाकर वहां रहने वालों के अंक से मिलाया जाता है, इसलिए प्रश्न यह नहीं कि कोई संख्या अच्छी है या नहीं, बल्कि यह कि वह इस परिवार के अनुकूल है या नहीं। मेल न हो तो वास्तु प्रवेश द्वार और कक्षों की ऊर्जा पर उपाय बताता है, संख्या पर नहीं।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'मकान या फ्लैट संख्या, अक्षर सहित, और अपनी जन्म तिथि।' },
        { label: 'आपको क्या मिलता है', value: 'पते का मूलांक, आपके अंक से मेल, और कमी के लिए वास्तु उपाय।' },
        { label: 'ध्यान रखें', value: 'फ्लैट संख्या बदली नहीं जा सकती, और बदलनी भी नहीं है। उपाय ही उद्देश्य हैं।' },
      ],
    },
  },

  'bhagyodaya-year': {
    en: {
      lead: 'Bhagyodaya is the year numerology marks as the one from which your fortune tends to rise, worked out from your date of birth along with the pinnacles and challenges that divide a life into phases. It names a year, and more usefully it names which phase of your life you are standing in now.',
      facts: [
        { label: 'You give it', value: 'Your date of birth. The whole calculation is numerological.' },
        { label: 'You get back', value: 'Your bhagyodaya year, the life pinnacles and challenges around it, and where you currently sit.' },
        { label: 'Worth knowing', value: 'It describes a turn in direction, not a sum of money arriving on a date.' },
      ],
    },
    hi: {
      lead: 'भाग्योदय वह वर्ष है जिसे अंक ज्योतिष भाग्य के उदय का वर्ष मानता है, जो जन्म तिथि के साथ जीवन को चरणों में बांटने वाले शिखरों और चुनौतियों से निकाला जाता है। यह एक वर्ष बताता है, और उससे अधिक उपयोगी यह कि आप इस समय किस चरण में खड़े हैं।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'केवल जन्म तिथि। पूरी गणना अंक ज्योतिष से होती है।' },
        { label: 'आपको क्या मिलता है', value: 'आपका भाग्योदय वर्ष, आसपास के जीवन शिखर और चुनौतियां, और वर्तमान स्थिति।' },
        { label: 'ध्यान रखें', value: 'यह दिशा के मोड़ को दर्शाता है, किसी तारीख पर धन आने को नहीं।' },
      ],
    },
  },

  'name-correction': {
    en: {
      lead: 'Name correction compares the numerological value of your name with the number your date of birth gives you, and where the two pull against each other it suggests a spelling that brings them closer. The change is usually one letter, because one letter is enough to move the total.',
      facts: [
        { label: 'You give it', value: 'Your name as you write it now, and your date of birth.' },
        { label: 'You get back', value: 'Your current name number, how it sits with your birth number, and spellings that agree with it better.' },
        { label: 'Worth knowing', value: 'A suggestion is a spelling, not a new name. Most people change one letter or add one.' },
      ],
    },
    hi: {
      lead: 'नाम सुधार आपके नाम के अंक मान की तुलना जन्म तिथि से मिलने वाले अंक से करता है, और जहां दोनों में खिंचाव हो वहां ऐसी वर्तनी सुझाता है जो उन्हें पास लाए। बदलाव प्रायः एक अक्षर का होता है, क्योंकि एक अक्षर ही पूरा योग बदलने के लिए पर्याप्त है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'अपना नाम जैसा आप अभी लिखते हैं, और जन्म तिथि।' },
        { label: 'आपको क्या मिलता है', value: 'वर्तमान नाम अंक, जन्म अंक से उसका मेल, और बेहतर मेल वाली वर्तनी।' },
        { label: 'ध्यान रखें', value: 'सुझाव वर्तनी का है, नया नाम नहीं। अधिकतर लोग एक अक्षर बदलते या जोड़ते हैं।' },
      ],
    },
  },

  'kalsarp-dosha': {
    en: {
      lead: 'Kaal sarp dosha is read when every planet in a chart falls on one side of the axis between Rahu and Ketu. There are twelve named variants depending on where that axis sits, and which one you have decides what the classical texts say about it, so the type matters more than the fact of it.',
      facts: [
        { label: 'You give it', value: 'Date, time and place of birth, because the Rahu and Ketu axis moves with the houses.' },
        { label: 'You get back', value: 'Whether it is present, which of the twelve types, how severe, the areas affected and the remedies.' },
        { label: 'Common mix-up', value: 'A partial formation, with one planet outside the axis, is not the full dosha and is often reported as though it were.' },
      ],
    },
    hi: {
      lead: 'काल सर्प दोष तब देखा जाता है जब कुंडली के सभी ग्रह राहु और केतु की धुरी के एक ही ओर पड़ जाएं। उस धुरी की स्थिति के अनुसार इसके बारह प्रकार हैं, और शास्त्र क्या कहते हैं यह प्रकार से तय होता है, इसलिए प्रकार होने से अधिक महत्वपूर्ण है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'जन्म की तारीख, समय और स्थान, क्योंकि राहु केतु की धुरी भावों के साथ बदलती है।' },
        { label: 'आपको क्या मिलता है', value: 'दोष है या नहीं, बारह में से कौन सा प्रकार, तीव्रता, प्रभावित क्षेत्र और उपाय।' },
        { label: 'आम भ्रम', value: 'एक ग्रह धुरी से बाहर हो तो पूर्ण दोष नहीं बनता, फिर भी उसे प्रायः पूर्ण बता दिया जाता है।' },
      ],
    },
  },

  'room-advisor': {
    en: {
      lead: 'Vastu assigns each direction an element, and each room works best in the directions whose element suits what the room is for: a kitchen with fire in the south east, a bedroom with earth in the south west. This advisor gives that reading room by room, with what to do where the layout is already fixed.',
      facts: [
        { label: 'You give it', value: 'Which room you are asking about and the direction it faces.' },
        { label: 'You get back', value: 'Where the room ideally sits, how to place the furniture inside it, and the colours that support its element.' },
        { label: 'Worth knowing', value: 'Few homes can move a room. Most of the benefit is in placement and colour, which anyone can change.' },
      ],
    },
    hi: {
      lead: 'वास्तु हर दिशा को एक तत्व देता है, और हर कक्ष उन्हीं दिशाओं में सबसे अच्छा रहता है जिनका तत्व उसके काम से मेल खाए: रसोई अग्नि के साथ आग्नेय में, शयनकक्ष पृथ्वी के साथ नैऋत्य में। यह सलाहकार कक्ष दर कक्ष यही बताता है, और यह भी कि बना हुआ नक्शा न बदले तो क्या करें।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'कौन सा कक्ष पूछ रहे हैं और वह किस दिशा में है।' },
        { label: 'आपको क्या मिलता है', value: 'कक्ष की आदर्श दिशा, भीतर फर्नीचर की स्थिति, और उसके तत्व के अनुकूल रंग।' },
        { label: 'ध्यान रखें', value: 'कक्ष हटाना प्रायः संभव नहीं होता। अधिकांश लाभ स्थिति और रंग से मिलता है, जो कोई भी बदल सकता है।' },
      ],
    },
  },

  'sade-sati': {
    en: {
      lead: 'Sade sati is the seven and a half years during which Saturn transits the sign before your moon sign, your moon sign itself, and the sign after it. It runs in three phases of about two and a half years each, and which phase you are in matters more than the fact that it has started.',
      facts: [
        { label: 'You give it', value: 'Date, time and place of birth, so your moon sign can be fixed first.' },
        { label: 'You get back', value: 'Whether it is running, which phase, the start and end dates, the effects of that phase and the remedies.' },
        { label: 'Common mix-up', value: 'It is reckoned from the moon sign, not the sun sign, which is why some people are told the wrong dates.' },
      ],
    },
    hi: {
      lead: 'साढ़े साती वे साढ़े सात वर्ष हैं जिनमें शनि आपकी चंद्र राशि से पहले वाली राशि, चंद्र राशि, और उसके बाद वाली राशि से गुज़रता है। यह लगभग ढाई ढाई वर्ष के तीन चरणों में चलती है, और आप किस चरण में हैं यह शुरू होने के तथ्य से अधिक महत्व रखता है।',
      facts: [
        { label: 'आप क्या भरते हैं', value: 'जन्म की तारीख, समय और स्थान, ताकि पहले चंद्र राशि तय हो सके।' },
        { label: 'आपको क्या मिलता है', value: 'चल रही है या नहीं, कौन सा चरण, आरंभ और समाप्ति तिथि, उस चरण का फल और उपाय।' },
        { label: 'आम भ्रम', value: 'यह चंद्र राशि से गिनी जाती है, सूर्य राशि से नहीं, इसीलिए कई लोगों को गलत तिथियां बताई जाती हैं।' },
      ],
    },
  },
};

/**
 * The short answer for one tool in one language, or null where there is none.
 *
 * Falls back to English rather than to nothing: a reader on a language we have not written yet is better
 * served by an answer in the wrong language than by an empty space where the answer should be.
 */
export function getTakeaway(slug: string, locale: string): Takeaway | null {
  const entry = TOOL_TAKEAWAYS[slug];
  if (!entry) return null;
  return locale === 'hi' ? entry.hi : entry.en;
}
