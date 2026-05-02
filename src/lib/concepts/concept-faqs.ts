/**
 * Programmatic FAQ generator for concept pages.
 *
 * For rashi and nakshatra concepts, we generate 6–8 FAQs from the rich
 * structured data already in `moon-sign-meanings.ts` and
 * `nakshatra-meanings.ts`. The FAQs mirror exact GSC query patterns
 * users type ("what is leo rashi", "rohini nakshatra characteristics",
 * "ruling planet of mesha rashi") so the FAQPage rich-snippet eligibility
 * + AEO entity grounding both improve.
 *
 * For other categories (graha, bhava, dosha, yoga, kuta, varga, vastu,
 * tarot, numerology, tithi) we return an empty array — those concept
 * markdown bodies already contain inline questions and authoritative
 * answers; we don't fabricate FAQs we cannot back with classical
 * citations.
 */
import { MOON_SIGN_MEANINGS } from '@/lib/astrology/data/moon-sign-meanings';
import { NAKSHATRA_MEANINGS } from '@/lib/astrology/data/nakshatra-meanings';

type LocaleStr = { en: string; hi: string };

// Slug to data-index mappings — concept slugs use IAST without diacritics
// (mesha, vrishabha, etc.) so we map each slug to the correct array index.
const RASHI_SLUG_TO_INDEX: Record<string, number> = {
  mesha: 0,
  vrishabha: 1,
  mithuna: 2,
  karka: 3,
  simha: 4,
  kanya: 5,
  tula: 6,
  vrishchika: 7,
  dhanu: 8,
  makara: 9,
  kumbha: 10,
  meena: 11,
};

const RASHI_NAMES: Record<string, LocaleStr> = {
  mesha: { en: 'Mesha (Aries)', hi: 'मेष राशि' },
  vrishabha: { en: 'Vrishabha (Taurus)', hi: 'वृषभ राशि' },
  mithuna: { en: 'Mithuna (Gemini)', hi: 'मिथुन राशि' },
  karka: { en: 'Karka (Cancer)', hi: 'कर्क राशि' },
  simha: { en: 'Simha (Leo)', hi: 'सिंह राशि' },
  kanya: { en: 'Kanya (Virgo)', hi: 'कन्या राशि' },
  tula: { en: 'Tula (Libra)', hi: 'तुला राशि' },
  vrishchika: { en: 'Vrishchika (Scorpio)', hi: 'वृश्चिक राशि' },
  dhanu: { en: 'Dhanu (Sagittarius)', hi: 'धनु राशि' },
  makara: { en: 'Makara (Capricorn)', hi: 'मकर राशि' },
  kumbha: { en: 'Kumbha (Aquarius)', hi: 'कुम्भ राशि' },
  meena: { en: 'Meena (Pisces)', hi: 'मीन राशि' },
};

const NAKSHATRA_SLUG_TO_INDEX: Record<string, number> = {
  ashwini: 0,
  bharani: 1,
  krittika: 2,
  rohini: 3,
  mrigashira: 4,
  ardra: 5,
  punarvasu: 6,
  pushya: 7,
  ashlesha: 8,
  magha: 9,
  'purva-phalguni': 10,
  'uttara-phalguni': 11,
  hasta: 12,
  chitra: 13,
  swati: 14,
  vishakha: 15,
  anuradha: 16,
  jyeshtha: 17,
  mula: 18,
  'purva-ashadha': 19,
  'uttara-ashadha': 20,
  shravana: 21,
  dhanishta: 22,
  shatabhisha: 23,
  'purva-bhadrapada': 24,
  'uttara-bhadrapada': 25,
  revati: 26,
};

interface ConceptFaq {
  question: string;
  answer: string;
}

function rashiFaqs(slug: string, locale: 'en' | 'hi'): ConceptFaq[] {
  const idx = RASHI_SLUG_TO_INDEX[slug];
  if (idx === undefined) return [];
  const sign = MOON_SIGN_MEANINGS[idx];
  const name = RASHI_NAMES[slug][locale];
  const positive = sign.positiveTraits.map((t) => t[locale]).join(', ');
  const negative = sign.negativeTraits.map((t) => t[locale]).join(', ');
  const careers = sign.careerStrengths.map((c) => c[locale]).join(', ');
  const compatibleNames = sign.compatibleSigns
    .map((i) => {
      const sslug = Object.entries(RASHI_SLUG_TO_INDEX).find(([, v]) => v === i)?.[0];
      return sslug ? RASHI_NAMES[sslug][locale] : null;
    })
    .filter(Boolean)
    .join(', ');

  if (locale === 'hi') {
    return [
      {
        question: `${name} क्या है?`,
        answer: sign.overview.hi,
      },
      {
        question: `${name} का स्वामी ग्रह कौन है?`,
        answer: `${name} का स्वामी ग्रह ${sign.rulingPlanet} है। यह वैदिक ज्योतिष में राशि के स्वभाव, आचरण, और जीवन-दिशा को प्रभावित करता है। ${name} की ${sign.element === 'fire' ? 'अग्नि' : sign.element === 'earth' ? 'पृथ्वी' : sign.element === 'air' ? 'वायु' : 'जल'} तत्त्व प्रकृति इसके स्वामी ग्रह से मेल खाती है।`,
      },
      {
        question: `${name} वालों के स्वभाव की मुख्य विशेषताएँ क्या हैं?`,
        answer: `${name} वालों का व्यक्तित्व ${sign.personality.hi} सकारात्मक गुण: ${positive}। सावधानी योग्य प्रवृत्तियाँ: ${negative}।`,
      },
      {
        question: `${name} का भावनात्मक स्वरूप कैसा होता है?`,
        answer: sign.emotionalNature.hi,
      },
      {
        question: `${name} किन राशियों के साथ संगत है?`,
        answer: `${name} की सर्वोत्तम अनुकूलता ${compatibleNames} राशियों के साथ है। ये साझेदारियाँ भावनात्मक एवं व्यावहारिक स्तरों पर स्वाभाविक सामंजस्य रखती हैं। संगति कुण्डली में सप्तम भाव और अष्टकूट गुण मिलान पर भी निर्भर करती है — विवाह से पूर्व पूर्ण कुण्डली मिलान आवश्यक।`,
      },
      {
        question: `${name} वालों के लिए कौन-से करियर अनुकूल हैं?`,
        answer: `${name} वालों के लिए सर्वाधिक उपयुक्त व्यवसाय: ${careers}। ${sign.relationships.hi}`,
      },
      {
        question: `${name} का शुभ रंग, अंक एवं देवता क्या है?`,
        answer: `शुभ रंग: ${sign.luckyColor.hi}। शुभ अंक: ${sign.luckyNumber}। शुभ दिवस: ${sign.luckyDay.hi}। अधिष्ठाता देवता: ${sign.rulingDeity.hi}। शास्त्रीय मन्त्र: ${sign.mantra.hi}।`,
      },
      {
        question: `${name} के लिए शास्त्रीय उपाय क्या हैं?`,
        answer: `${name} वाले ${sign.luckyDay.hi} को व्रत रखें, ${sign.mantra.hi} का दैनिक 108 बार जप करें, ${sign.luckyColor.hi} वस्त्र धारण करें, और ${sign.rulingDeity.hi} की उपासना करें। पीड़ा-काल में अधिष्ठाता देवता का स्तोत्र पाठ विशेष फलदायक। निरन्तर अभ्यास से धीरे-धीरे राशि के सकारात्मक गुण बल पाते हैं और नकारात्मक प्रवृत्तियाँ सन्तुलित होती हैं।`,
      },
    ];
  }

  return [
    {
      question: `What is ${name}?`,
      answer: sign.overview.en,
    },
    {
      question: `Who is the ruling planet of ${name}?`,
      answer: `${name} is ruled by ${sign.rulingPlanet}. The lord governs the sign\'s temperament, behavioural pattern, and life direction in Vedic astrology. ${name}\'s ${sign.element} elemental nature reinforces the influence of its ruling planet.`,
    },
    {
      question: `What are the main personality traits of ${name}?`,
      answer: `Personality: ${sign.personality.en} Strengths: ${positive}. Shadow tendencies to watch: ${negative}.`,
    },
    {
      question: `What is the emotional nature of ${name}?`,
      answer: sign.emotionalNature.en,
    },
    {
      question: `Which signs are compatible with ${name}?`,
      answer: `${name} is most compatible with ${compatibleNames}. These pairings carry natural emotional and practical resonance. Compatibility also depends on the seventh-house lord and Ashtakoota Guna Milan score in your chart — full kundli matching before marriage is essential.`,
    },
    {
      question: `What careers suit ${name}?`,
      answer: `${name} excels in ${careers}. ${sign.relationships.en}`,
    },
    {
      question: `What are the lucky color, number, and deity of ${name}?`,
      answer: `Lucky colour: ${sign.luckyColor.en}. Lucky number: ${sign.luckyNumber}. Lucky day: ${sign.luckyDay.en}. Ruling deity: ${sign.rulingDeity.en}. Classical mantra: ${sign.mantra.en}.`,
    },
    {
      question: `What classical remedies are recommended for ${name}?`,
      answer: `${name} natives benefit from observing fast on ${sign.luckyDay.en}, daily recitation of ${sign.mantra.en} (108 times), wearing ${sign.luckyColor.en} cloth, and worship of ${sign.rulingDeity.en}. Reciting the deity\'s stotra during difficult dasha periods is particularly effective. Sustained practice gradually amplifies the sign\'s positive qualities and balances its shadow tendencies.`,
    },
  ];
}

function nakshatraFaqs(slug: string, locale: 'en' | 'hi'): ConceptFaq[] {
  const idx = NAKSHATRA_SLUG_TO_INDEX[slug];
  if (idx === undefined) return [];
  const n = NAKSHATRA_MEANINGS[idx];
  const enName = n.name.en;
  const hiName = n.name.hi;
  const positive = n.strengths[locale].join(', ');
  const negative = n.weaknesses[locale].join(', ');
  const careers = n.career[locale].join(', ');
  const colors = n.luckyColors.map((c) => c[locale]).join(', ');
  const gems = n.luckyGems.map((g) => g[locale]).join(', ');
  const numbers = n.luckyNumbers.join(', ');

  if (locale === 'hi') {
    return [
      {
        question: `${hiName} नक्षत्र क्या है?`,
        answer: `${hiName} नक्षत्र विंशोत्तरी क्रम का ${n.index + 1}वाँ नक्षत्र है। ${n.personality.hi} इसका प्रतीक ${n.symbol} है, और इसकी अधिष्ठाता ${n.deity} हैं।`,
      },
      {
        question: `${hiName} नक्षत्र का स्वामी ग्रह कौन है?`,
        answer: `${hiName} नक्षत्र का विंशोत्तरी स्वामी ${n.lord} है। यह ग्रह जन्म-कुण्डली में जातक की दशा-क्रम का प्रारम्भिक स्वर निर्धारित करता है। अधिष्ठाता देवता ${n.deity} हैं — स्वामी ग्रह और देवता दोनों भिन्न इकाइयाँ हैं और दोनों के संकेत मिलकर नक्षत्र का पूर्ण फल देते हैं।`,
      },
      {
        question: `${hiName} नक्षत्र वालों के स्वभाव की मुख्य विशेषताएँ क्या हैं?`,
        answer: `${n.personality.hi} सकारात्मक गुण: ${positive}। सावधानी योग्य प्रवृत्तियाँ: ${negative}। गण: ${n.gana.hi}, गुण: ${n.guna.hi}, नाड़ी: ${n.nadi.hi}।`,
      },
      {
        question: `${hiName} नक्षत्र वालों के लिए कौन-से करियर अनुकूल हैं?`,
        answer: `${hiName} नक्षत्र वालों के लिए सर्वाधिक उपयुक्त व्यवसाय: ${careers}। ये क्षेत्र नक्षत्र की प्राकृतिक ऊर्जा से मेल खाते हैं तथा स्वामी ${n.lord} की कारकता को सक्रिय करते हैं।`,
      },
      {
        question: `${hiName} नक्षत्र की पहली अक्षर क्या होती हैं?`,
        answer: `${hiName} नक्षत्र के अन्तर्गत जन्मे शिशुओं के नामकरण के लिए शास्त्रीय रूप से अनुशंसित प्रारम्भिक अक्षर: ${n.syllables.join(', ')}। यह विधान चतुष्पाद नक्षत्र-विभाजन पर आधारित है — प्रत्येक पाद को एक अक्षर मिलता है। अनुकूल नाम जातक के व्यक्तित्व-विकास एवं भाग्य-दिशा से तालमेल बनाते हैं।`,
      },
      {
        question: `${hiName} नक्षत्र का शुभ रंग, रत्न और अंक क्या है?`,
        answer: `शुभ रंग: ${colors}। शुभ रत्न: ${gems}। शुभ अंक: ${numbers}। यह संयोजन नक्षत्र-स्वामी ${n.lord} के साथ संरेखित है — रंग एवं रत्न ग्रह की ऊर्जा को सहारा देते हैं। रत्न धारण से पूर्व सक्षम ज्योतिषी से कुण्डली-अनुकूलता की पुष्टि अनिवार्य।`,
      },
      {
        question: `${hiName} नक्षत्र वालों का स्वास्थ्य कैसा रहता है?`,
        answer: `${n.health.hi} ${hiName} नक्षत्र शरीर के ${n.bodyPart.hi} भाग पर शासन करता है। शास्त्रीय निर्देश है कि इस अंग की विशेष देखभाल नियमित निद्रा-चक्र, उपयुक्त आहार, और स्वामी ग्रह की उपासना से की जाए।`,
      },
      {
        question: `${hiName} नक्षत्र किन नक्षत्रों से अनुकूल है?`,
        answer: `विवाह एवं साझेदारी हेतु ${hiName} की सर्वाधिक प्रबल अनुकूलताएँ अष्टकूट गुण मिलान में निकलती हैं — विशेषकर योनिकूट, गणकूट, और नाड़ीकूट के मिलान से। पूर्ण मिलान के लिए VastuCart के विवाह मिलान उपकरण का उपयोग करें।`,
      },
    ];
  }

  return [
    {
      question: `What is ${enName} nakshatra?`,
      answer: `${enName} is the ${n.index + 1}${n.index === 0 ? 'st' : n.index === 1 ? 'nd' : n.index === 2 ? 'rd' : 'th'} nakshatra in the Vimshottari sequence. ${n.personality.en} Its symbol is the ${n.symbol}, and its presiding deity is ${n.deity}.`,
    },
    {
      question: `Who is the ruling planet (lord) of ${enName} nakshatra?`,
      answer: `${enName} is ruled by ${n.lord} in the Vimshottari Mahadasha system. The lord sets the opening tone of the native\'s dasha sequence at birth. The presiding deity is ${n.deity} — note that the lord and the deity are distinct entities, and both signatures together produce the complete nakshatra reading.`,
    },
    {
      question: `What are the main characteristics of people born in ${enName} nakshatra?`,
      answer: `${n.personality.en} Strengths: ${positive}. Shadow tendencies: ${negative}. Gana: ${n.gana.en}, Guna: ${n.guna.en}, Nadi: ${n.nadi.en}.`,
    },
    {
      question: `What careers suit ${enName} nakshatra natives?`,
      answer: `${enName} natives excel in ${careers}. These fields align with the nakshatra\'s natural energy and activate the karaka quality of its lord, ${n.lord}.`,
    },
    {
      question: `What are the starting syllables for ${enName} nakshatra names?`,
      answer: `Children born under ${enName} are classically named beginning with ${n.syllables.join(', ')} — one syllable per pada (the four 3°20\' divisions of the nakshatra). A name aligned with the nakshatra reinforces the personality\'s natural development and life direction.`,
    },
    {
      question: `What are the lucky colour, gemstone, and number for ${enName}?`,
      answer: `Lucky colours: ${colors}. Lucky gems: ${gems}. Lucky numbers: ${numbers}. This combination aligns with the nakshatra\'s lord ${n.lord} — the colours and gems support the planet\'s energy. Always confirm gemstone compatibility with a competent jyotishi by reading the full natal chart before wearing.`,
    },
    {
      question: `What is the health profile of ${enName} natives?`,
      answer: `${n.health.en} ${enName} governs the ${n.bodyPart.en} region of the body. Classical instruction is to protect this area through regular sleep, suitable diet, and worship of the ruling planet.`,
    },
    {
      question: `Which nakshatras are compatible with ${enName} for marriage?`,
      answer: `${enName}\'s strongest marital compatibilities emerge from Ashtakoota Guna Milan — particularly the Yoni-koota, Gana-koota, and Nadi-koota matches. For complete compatibility scoring, use VastuCart\'s Marriage Matching tool with both partners\' birth charts.`,
    },
  ];
}

/**
 * Public entry point. Returns programmatic FAQs for a concept slug+category
 * pair, or an empty array if the category does not have FAQ generation.
 */
export function getConceptFaqs(
  slug: string,
  category: string,
  locale: 'en' | 'hi',
): ConceptFaq[] {
  if (category === 'rashi') return rashiFaqs(slug, locale);
  if (category === 'nakshatra') return nakshatraFaqs(slug, locale);
  return [];
}
