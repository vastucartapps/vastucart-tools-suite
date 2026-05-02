/**
 * HowTo schema content for procedural tool pages.
 *
 * Each entry is consumed by the page's ToolPageEntityGraph as the optional
 * `howTo` prop, which emits a Schema.org HowTo node alongside the existing
 * FAQPage and SoftwareApplication entities. Steps are deliberately short
 * (one to two sentences) and describe the user-side procedure of operating
 * the calculator — not the underlying astrological method. Google's
 * HowTo rich-result rules require name + step[].name + step[].text.
 */

type LocaleStr = { en: string; hi: string };
type HowToContent = {
  name: LocaleStr;
  description: LocaleStr;
  totalTimeMinutes: number;
  steps: Array<{ name: LocaleStr; text: LocaleStr }>;
};

export const TOOL_HOWTO: Record<string, HowToContent> = {
  kundli: {
    name: {
      en: 'How to generate your free Kundli (Janam Patri) online',
      hi: 'मुफ़्त कुण्डली (जन्म पत्री) ऑनलाइन कैसे बनाएँ',
    },
    description: {
      en: 'Step-by-step process for producing a complete Vedic birth chart with planetary positions, dasha sequence, and key yogas.',
      hi: 'पूर्ण वैदिक जन्म कुण्डली — ग्रह स्थिति, दशा क्रम, और प्रमुख योगों सहित — बनाने की चरण-दर-चरण विधि।',
    },
    totalTimeMinutes: 5,
    steps: [
      {
        name: {
          en: 'Enter your full date of birth',
          hi: 'अपनी पूर्ण जन्म तिथि दर्ज करें',
        },
        text: {
          en: 'Use the date picker to enter the day, month, and year exactly as recorded on your birth certificate. Accuracy at this step decides the rashi chart\'s validity.',
          hi: 'जन्म प्रमाण पत्र में दर्ज दिन, माह, और वर्ष ठीक उसी प्रकार दर्ज करें। इस चरण की सटीकता से राशि चक्र की वैधता तय होती है।',
        },
      },
      {
        name: {
          en: 'Enter your exact time of birth',
          hi: 'अपना सटीक जन्म समय दर्ज करें',
        },
        text: {
          en: 'Provide the time of birth to the minute. The lagna (rising sign) shifts roughly every two hours, so a fifteen-minute error can change your ascendant and the entire house structure.',
          hi: 'जन्म समय मिनट तक दर्ज करें। लग्न लगभग हर दो घण्टे में बदलता है, अतः पन्द्रह मिनट की त्रुटि भी आपके लग्न और सम्पूर्ण भाव संरचना को बदल सकती है।',
        },
      },
      {
        name: {
          en: 'Select the place of birth',
          hi: 'जन्म स्थान चुनें',
        },
        text: {
          en: 'Type the city, town, or village of birth and select the matching entry. The calculator uses the latitude, longitude, and timezone of that place to compute the chart.',
          hi: 'जन्म नगर, शहर, अथवा गाँव टाइप करें और मिलती हुई प्रविष्टि चुनें। कैलकुलेटर उस स्थान के अक्षांश, देशान्तर, और समय-क्षेत्र से कुण्डली की गणना करता है।',
        },
      },
      {
        name: {
          en: 'Generate and save the chart',
          hi: 'कुण्डली बनाएँ और संग्रहीत करें',
        },
        text: {
          en: 'Click the Generate button to produce the full chart — rashi diagram, planetary positions, navamsha, Vimshottari dasha, and yogas. Save or print the page for future consultation.',
          hi: 'जनरेट बटन दबाएँ — पूर्ण कुण्डली प्राप्त होगी: राशि चक्र, ग्रह स्थितियाँ, नवांश, विंशोत्तरी दशा, और योग। भविष्य में परामर्श के लिए पृष्ठ संग्रहीत करें अथवा प्रिंट करें।',
        },
      },
      {
        name: {
          en: 'Read the dasha and key placements',
          hi: 'दशा और प्रमुख स्थितियाँ पढ़ें',
        },
        text: {
          en: 'Note the running mahadasha and antardasha lord, the lagna and Moon placements, and any planets in own sign or exalted. These are the chart\'s primary signal carriers.',
          hi: 'चालू महादशा एवं अन्तर्दशा-स्वामी, लग्न एवं चन्द्र की स्थिति, और कोई भी स्वराशि अथवा उच्च के ग्रह नोट करें। ये कुण्डली के प्राथमिक संकेत-वाहक हैं।',
        },
      },
    ],
  },

  mahadasha: {
    name: {
      en: 'How to calculate your Vimshottari Mahadasha online',
      hi: 'अपनी विंशोत्तरी महादशा ऑनलाइन कैसे निकालें',
    },
    description: {
      en: 'Step-by-step process for producing the full 120-year Vimshottari planetary timeline with mahadashas and antardashas.',
      hi: 'पूर्ण 120 वर्ष की विंशोत्तरी ग्रह समय-रेखा — महादशाओं एवं अन्तर्दशाओं सहित — निकालने की चरण-दर-चरण विधि।',
    },
    totalTimeMinutes: 5,
    steps: [
      {
        name: {
          en: 'Enter date, time, and place of birth',
          hi: 'जन्म तिथि, समय, और स्थान दर्ज करें',
        },
        text: {
          en: 'Provide all three with care. Vimshottari dasha is calculated from the natal Moon\'s nakshatra position, which is sensitive to birth time and place.',
          hi: 'तीनों सावधानीपूर्वक दें। विंशोत्तरी दशा जन्म-चन्द्र की नक्षत्र स्थिति से गणित होती है, जो जन्म समय एवं स्थान के प्रति संवेदनशील है।',
        },
      },
      {
        name: {
          en: 'Generate the dasha timeline',
          hi: 'दशा समय-रेखा बनाएँ',
        },
        text: {
          en: 'Click Generate to produce the full 120-year sequence. Each row shows a mahadasha lord, the period\'s start and end dates, and the planet\'s years (e.g., Saturn 19 years, Venus 20 years).',
          hi: 'जनरेट दबाएँ — पूर्ण 120 वर्ष का क्रम प्राप्त होगा। प्रत्येक पंक्ति एक महादशेश, उसकी प्रारम्भ और समाप्ति तिथियाँ, और ग्रह के वर्ष (जैसे शनि 19 वर्ष, शुक्र 20 वर्ष) दिखाती है।',
        },
      },
      {
        name: {
          en: 'Identify your current mahadasha',
          hi: 'अपनी वर्तमान महादशा पहचानें',
        },
        text: {
          en: 'Find the row where today\'s date falls between the start and end dates. That is the planetary lord currently dominating your chart.',
          hi: 'वह पंक्ति देखें जिसमें आज की तिथि प्रारम्भ और समाप्ति के बीच आती है। वही ग्रह स्वामी अभी आपकी कुण्डली पर प्रभावी है।',
        },
      },
      {
        name: {
          en: 'Drill down to the running antardasha',
          hi: 'चालू अन्तर्दशा तक जाएँ',
        },
        text: {
          en: 'Within the current mahadasha, locate the sub-period covering today\'s date. The antardasha lord modifies what the parent mahadasha is producing for that span.',
          hi: 'चालू महादशा के भीतर, आज की तिथि का उप-काल पहचानें। अन्तर्दशेश इस अवधि में मूल महादशा के फल को परिमार्जित करता है।',
        },
      },
      {
        name: {
          en: 'Read the planet-specific guide',
          hi: 'ग्रह-विशेष लेख पढ़ें',
        },
        text: {
          en: 'Open the dedicated /tools/mahadasha/[planet] page for your current mahadasha lord — full effects, antardasha breakdown, twelve-house results, and classical remedies in your locale.',
          hi: 'अपने वर्तमान महादशेश के लिए समर्पित /tools/mahadasha/[planet] पृष्ठ खोलें — आपकी भाषा में पूर्ण प्रभाव, अन्तर्दशा विश्लेषण, बारह भावों में फल, और शास्त्रीय उपाय।',
        },
      },
    ],
  },

  manglik: {
    name: {
      en: 'How to check if you are Manglik (Kuja Dosha) online',
      hi: 'मांगलिक (कुजा दोष) हैं या नहीं — ऑनलाइन कैसे जाँचें',
    },
    description: {
      en: 'Free step-by-step process to determine your Manglik status from the lagna and Moon, including dosha intensity and whether it cancels.',
      hi: 'मुफ़्त चरण-दर-चरण विधि — लग्न एवं चन्द्र से मांगलिक स्थिति, दोष की तीव्रता, और रद्द होता है या नहीं — सब निर्धारित करें।',
    },
    totalTimeMinutes: 3,
    steps: [
      {
        name: {
          en: 'Enter your birth details',
          hi: 'जन्म विवरण दर्ज करें',
        },
        text: {
          en: 'Date of birth, exact time of birth, and place of birth — the calculator needs all three to determine the lagna and Moon positions.',
          hi: 'जन्म तिथि, सटीक जन्म समय, और जन्म स्थान — कैलकुलेटर को लग्न एवं चन्द्र स्थिति निर्धारण के लिए तीनों चाहिए।',
        },
      },
      {
        name: {
          en: 'Run the Manglik check',
          hi: 'मांगलिक जाँच चलाएँ',
        },
        text: {
          en: 'Click Check to evaluate Mars\'s placement in the 1st, 4th, 7th, 8th, and 12th houses from both the lagna and the natal Moon.',
          hi: 'चेक दबाएँ — लग्न एवं जन्म-चन्द्र दोनों से 1, 4, 7, 8, और 12वें भावों में मंगल की स्थिति का मूल्यांकन होगा।',
        },
      },
      {
        name: {
          en: 'Read the dosha intensity',
          hi: 'दोष की तीव्रता पढ़ें',
        },
        text: {
          en: 'The result classifies your status as not-Manglik, mild-Manglik, or strong-Manglik based on which Manglik positions are activated and whether benefic aspects mitigate them.',
          hi: 'परिणाम आपकी स्थिति को न-मांगलिक, हलका-मांगलिक, अथवा प्रबल-मांगलिक के रूप में वर्गीकृत करता है — कौन-सी मांगलिक स्थितियाँ सक्रिय हैं और क्या शुभ दृष्टियाँ उन्हें कोमल कर रही हैं — के आधार पर।',
        },
      },
      {
        name: {
          en: 'Check cancellation rules',
          hi: 'रद्दीकरण नियम जाँचें',
        },
        text: {
          en: 'Manglik dosha cancels in several classical configurations — Mars in own sign, in friendly aspects, or after age twenty-eight. The result page lists which cancellations apply to your chart.',
          hi: 'मांगलिक दोष अनेक शास्त्रीय विन्यासों में रद्द होता है — स्वराशि में मंगल, मित्र दृष्टियों में, अथवा अट्ठाईस वर्ष की आयु के पश्चात्। परिणाम-पृष्ठ बताता है कि आपकी कुण्डली पर कौन-से रद्दीकरण लागू हैं।',
        },
      },
      {
        name: {
          en: 'Match before marriage',
          hi: 'विवाह से पूर्व मिलान करें',
        },
        text: {
          en: 'For marriage matching, both partners\' Manglik status must be compared. Use VastuCart\'s Marriage Matching tool with both birth charts to confirm compatibility.',
          hi: 'विवाह मिलान के लिए दोनों जीवनसाथियों की मांगलिक स्थिति की तुलना आवश्यक है। अनुकूलता पुष्टि हेतु दोनों जन्म-कुण्डलियों के साथ VastuCart का विवाह मिलान उपकरण उपयोग करें।',
        },
      },
    ],
  },

  careerPredictor: {
    name: {
      en: 'How to predict career direction from your birth chart',
      hi: 'जन्म कुण्डली से करियर दिशा कैसे ज्ञात करें',
    },
    description: {
      en: 'Free step-by-step process to identify the career fields most aligned with your tenth house, tenth lord, and Atmakaraka.',
      hi: 'मुफ़्त चरण-दर-चरण विधि — दशम भाव, दशमेश, और आत्मकारक से सर्वाधिक संरेखित करियर क्षेत्र पहचानें।',
    },
    totalTimeMinutes: 4,
    steps: [
      {
        name: {
          en: 'Enter your birth details',
          hi: 'जन्म विवरण दर्ज करें',
        },
        text: {
          en: 'Date, time, and place of birth — needed to compute the lagna, the tenth house, and the Atmakaraka (the planet at the highest degree in the chart).',
          hi: 'जन्म तिथि, समय, और स्थान — लग्न, दशम भाव, और आत्मकारक (कुण्डली में सर्वाधिक अंशों वाले ग्रह) की गणना हेतु आवश्यक।',
        },
      },
      {
        name: {
          en: 'Run the career analysis',
          hi: 'करियर विश्लेषण चलाएँ',
        },
        text: {
          en: 'Click the Predict button. The tool reads the tenth house occupants and aspects, the tenth lord\'s placement, the dasamsa (D-10) chart, and the Atmakaraka to suggest career fields.',
          hi: 'प्रिडिक्ट बटन दबाएँ। उपकरण दशम भाव में स्थित ग्रह एवं दृष्टियाँ, दशमेश की स्थिति, दशमांश (D-10) कुण्डली, और आत्मकारक पढ़कर करियर क्षेत्र सुझाता है।',
        },
      },
      {
        name: {
          en: 'Read the suggested career fields',
          hi: 'सुझाए गए करियर क्षेत्र पढ़ें',
        },
        text: {
          en: 'The result lists three to five career fields ranked by chart support. Each entry includes the planetary signature behind it (e.g., Sun in 10th → leadership, government).',
          hi: 'परिणाम कुण्डली समर्थन के क्रम में तीन से पाँच करियर क्षेत्र सूचीबद्ध करता है। प्रत्येक प्रविष्टि में उसके पीछे का ग्रह-संकेत होता है (जैसे दशम में सूर्य → नेतृत्व, शासन)।',
        },
      },
      {
        name: {
          en: 'Cross-check the running dasha',
          hi: 'चालू दशा से मिलान करें',
        },
        text: {
          en: 'A career direction supported by both the natal chart AND the current mahadasha lord is the most actionable. Open the Mahadasha Calculator to confirm timing alignment.',
          hi: 'जो करियर दिशा जन्म-कुण्डली एवं वर्तमान महादशेश दोनों से समर्थित हो — वह सर्वाधिक कार्यात्मक है। समय-संरेखण की पुष्टि हेतु महादशा कैलकुलेटर खोलें।',
        },
      },
      {
        name: {
          en: 'Plan transitions to favourable sub-periods',
          hi: 'अनुकूल उप-कालों में संक्रमण नियोजित करें',
        },
        text: {
          en: 'Major career changes — promotions, business launch, foreign assignment — are best timed to favourable antardasha within the supportive mahadasha. Use the dasha drill-down to identify those windows.',
          hi: 'प्रमुख करियर परिवर्तन — पदोन्नति, व्यवसाय आरम्भ, विदेशी नियुक्ति — समर्थनीय महादशा के भीतर अनुकूल अन्तर्दशा में सर्वोत्तम होते हैं। ये खण्ड पहचानने के लिए दशा-विवरण उपयोग करें।',
        },
      },
    ],
  },
};

export type ToolHowToSlug = keyof typeof TOOL_HOWTO;

export function getToolHowTo(
  slug: ToolHowToSlug,
  locale: 'en' | 'hi',
): {
  name: string;
  description: string;
  totalTimeMinutes: number;
  steps: Array<{ name: string; text: string }>;
} | undefined {
  const entry = TOOL_HOWTO[slug];
  if (!entry) return undefined;
  return {
    name: entry.name[locale],
    description: entry.description[locale],
    totalTimeMinutes: entry.totalTimeMinutes,
    steps: entry.steps.map((s) => ({
      name: s.name[locale],
      text: s.text[locale],
    })),
  };
}
