/**
 * Brand-level FAQs for the homepage.
 *
 * These answer the questions a first-time visitor (or a brand-search
 * user typing "vastucart" / "is vastucart free" / "is vastucart accurate")
 * would ask. Both rendered visibly on the homepage and emitted as
 * FAQPage JSON-LD via HomePageEntityGraph.
 *
 * Authored to give honest, sales-copywriting-aware answers — every Q
 * targets a real GSC query pattern and every A advances the conversion
 * intent (open a calculator, read a guide, visit the store).
 */

type LocaleStr = { en: string; hi: string };

export const HOME_FAQS: Array<{ question: LocaleStr; answer: LocaleStr }> = [
  {
    question: {
      en: 'Is VastuCart free to use?',
      hi: 'क्या VastuCart निःशुल्क है?',
    },
    answer: {
      en: 'Yes. Every calculator on VastuCart — kundli, mahadasha, manglik, gemstone recommender, life-path number, and over two dozen others — is free, with no signup required, no credit card, and no result paywall. We earn through optional consultations and the VastuCart store, never by gating the calculation.',
      hi: 'हाँ। VastuCart के सभी कैलकुलेटर — कुण्डली, महादशा, मांगलिक, रत्न परामर्शदाता, मूलांक, और दो दर्जन से अधिक अन्य — पूर्णतः निःशुल्क हैं। न पंजीकरण, न क्रेडिट कार्ड, न परिणाम-शुल्क। हमारी आय ऐच्छिक परामर्श एवं VastuCart स्टोर से आती है, गणना को रोककर नहीं।',
    },
  },
  {
    question: {
      en: 'How accurate are the kundli and astrology calculations?',
      hi: 'कुण्डली एवं ज्योतिष गणनाएँ कितनी सटीक हैं?',
    },
    answer: {
      en: 'Our calculations use standard astronomical algorithms (Lahiri ayanamsa, sidereal zodiac as used in classical Vedic astrology) and the same mathematical engine that professional Jyotish software relies on. For chart casting and dasha computation, accuracy is to the minute. Interpretive content is reviewed by the VastuCart editorial team against classical sources — Brihat Parashara Hora Shastra, Saravali, Phaladeepika, and Brihat Samhita — before publication, and re-reviewed quarterly. Reader corrections are welcome at editorial@vastucart.in.',
      hi: 'हमारी गणनाएँ मानक खगोलीय एल्गोरिदम (लाहिड़ी अयनांश, शास्त्रीय वैदिक ज्योतिष की निरयन राशि) पर आधारित हैं — वही गणित-इंजन जिस पर व्यावसायिक ज्योतिष सॉफ़्टवेयर निर्भर करता है। कुण्डली निर्माण एवं दशा गणना में सटीकता मिनट तक। व्याख्यात्मक सामग्री प्रकाशन से पूर्व VastuCart सम्पादकीय टीम द्वारा शास्त्रीय स्रोतों — बृहत् पाराशर होरा शास्त्र, सारावली, फलदीपिका, और बृहत् संहिता — के विरुद्ध समीक्षित होती है, और त्रैमासिक पुनः समीक्षित। पाठक सुधार editorial@vastucart.in पर भेज सकते हैं।',
    },
  },
  {
    question: {
      en: 'Do the tools use Vedic or Western astrology?',
      hi: 'टूल्स वैदिक ज्योतिष का उपयोग करते हैं या पाश्चात्य?',
    },
    answer: {
      en: 'All astrology tools use the Vedic (sidereal) system — the classical Indian framework based on actual constellations, with Lahiri ayanamsa as the standard correction. This is the same system used in the Brihat Parashara Hora Shastra and by every traditional Indian astrologer. The numerology tools support both Vedic (Mulank/Bhagyank) and Chaldean systems; the user can choose.',
      hi: 'सभी ज्योतिष उपकरण वैदिक (निरयन) पद्धति का उपयोग करते हैं — वास्तविक नक्षत्रों पर आधारित शास्त्रीय भारतीय ढाँचा, मानक संशोधन के रूप में लाहिड़ी अयनांश के साथ। यह वही पद्धति है जिसका प्रयोग बृहत् पाराशर होरा शास्त्र में और प्रत्येक परम्परागत भारतीय ज्योतिषी द्वारा होता है। अंक ज्योतिष उपकरण वैदिक (मूलांक/भाग्यांक) और काल्डियन दोनों पद्धतियों का समर्थन करते हैं; उपयोगकर्ता चुन सकता है।',
    },
  },
  {
    question: {
      en: 'What is included in a free kundli on VastuCart?',
      hi: 'VastuCart पर निःशुल्क कुण्डली में क्या शामिल है?',
    },
    answer: {
      en: 'Your free kundli includes the rashi (D-1) chart with planetary positions, the navamsha (D-9) chart, full Vimshottari Mahadasha and Antardasha timeline (120 years), key yogas (Gaja-Kesari, Raj Yoga, Manglik check, Sade Sati window), nakshatra at birth, lagna details, and the running planetary period — same scope offered by paid sites. Open the Kundli Calculator at /tools/kundli to generate yours.',
      hi: 'आपकी निःशुल्क कुण्डली में शामिल हैं — राशि (D-1) चक्र ग्रह स्थितियों के साथ, नवांश (D-9) चक्र, पूर्ण विंशोत्तरी महादशा एवं अन्तर्दशा समय-रेखा (120 वर्ष), प्रमुख योग (गज-केसरी, राज योग, मांगलिक जाँच, साढ़ेसाती खण्ड), जन्म-नक्षत्र, लग्न विवरण, और चालू ग्रह-दशा — वही दायरा जो शुल्क लेने वाली साइटें देती हैं। अपनी कुण्डली बनाने के लिए /tools/kundli पर कुण्डली कैलकुलेटर खोलें।',
    },
  },
  {
    question: {
      en: 'Are VastuCart tools available in Hindi?',
      hi: 'क्या VastuCart टूल्स हिन्दी में उपलब्ध हैं?',
    },
    answer: {
      en: 'Yes. Every page is fully bilingual — English and Hindi (Devanagari) — including all calculations, results, FAQs, and educational content. Switch to Hindi at /hi or use the language toggle in the header. Sanskrit terminology (rashi, nakshatra, dasha, yoga, dosha) is preserved with proper transliteration.',
      hi: 'हाँ। प्रत्येक पृष्ठ पूर्णतः द्विभाषी है — अंग्रेज़ी एवं हिन्दी (देवनागरी) — समस्त गणनाएँ, परिणाम, प्रश्नोत्तर, और शैक्षिक सामग्री सहित। /hi पर हिन्दी में बदलें अथवा शीर्षलेख के भाषा-स्विच का प्रयोग करें। संस्कृत शब्दावली (राशि, नक्षत्र, दशा, योग, दोष) उचित लिप्यन्तरण के साथ संरक्षित है।',
    },
  },
  {
    question: {
      en: 'How is VastuCart different from AstroSage or other astrology sites?',
      hi: 'VastuCart, AstroSage अथवा अन्य ज्योतिष साइटों से कैसे भिन्न है?',
    },
    answer: {
      en: 'Three differences. (1) Every tool is free — no premium-locked results. (2) Editorial content is hand-reviewed against classical sources (Brihat Parashara Hora Shastra, Saravali, Phaladeepika, Brihat Samhita) rather than AI-generated bulk — each article is fact-checked before publication and re-reviewed quarterly. (3) Long-form bilingual content — our planet pages, rashi guides, and nakshatra references are 1,500–4,000 words each, in both English and Hindi, written for Indian users who want depth rather than 200-word summaries.',
      hi: 'तीन अन्तर। (1) प्रत्येक उपकरण निःशुल्क — कोई परिणाम-शुल्क नहीं। (2) सम्पादकीय सामग्री AI-जनित ढेर के बजाय शास्त्रीय स्रोतों (बृहत् पाराशर होरा शास्त्र, सारावली, फलदीपिका, बृहत् संहिता) के विरुद्ध हस्त-समीक्षित — प्रत्येक लेख प्रकाशन से पूर्व तथ्य-जाँचित और त्रैमासिक पुनः समीक्षित। (3) दीर्घ द्विभाषी सामग्री — हमारे ग्रह पृष्ठ, राशि मार्गदर्शिकाएँ, और नक्षत्र सन्दर्भ अंग्रेज़ी एवं हिन्दी दोनों में 1,500–4,000 शब्दों के, उन भारतीय उपयोगकर्ताओं के लिए जो 200-शब्द सारांश के बजाय गहराई चाहते हैं।',
    },
  },
  {
    question: {
      en: 'Do I need to register or sign up?',
      hi: 'क्या मुझे पंजीकरण कराना होगा?',
    },
    answer: {
      en: 'No. There is no signup, no email collection, and no account requirement to use any calculator. Your birth details are processed in your browser session and are not stored on our servers. We respect privacy — see our Privacy Policy for the full details.',
      hi: 'नहीं। किसी भी कैलकुलेटर के उपयोग हेतु पंजीकरण, ईमेल संग्रह, अथवा खाता आवश्यक नहीं। आपके जन्म विवरण आपके ब्राउज़र सत्र में संसाधित होते हैं और हमारे सर्वर पर संग्रहीत नहीं होते। हम गोपनीयता का सम्मान करते हैं — पूर्ण विवरण के लिए हमारी गोपनीयता नीति देखें।',
    },
  },
  {
    question: {
      en: 'How often are tools updated?',
      hi: 'टूल्स कितनी बार अद्यतन होते हैं?',
    },
    answer: {
      en: 'The astronomical engine and underlying ephemeris data are updated continuously to match the actual position of planets. Editorial content (interpretations, FAQs, classical references) is reviewed quarterly by our author panel. Pages display a "last reviewed" date in their metadata. New tools are added based on user requests — the most recent additions are the nine Mahadasha planet guides covering Sun, Moon, Mars, Mercury, Jupiter, Venus, Saturn, Rahu, and Ketu in full long-form depth.',
      hi: 'खगोलीय इंजन एवं ग्रह-गणना डेटा निरन्तर अद्यतन होते हैं। सम्पादकीय सामग्री (व्याख्याएँ, प्रश्नोत्तर, शास्त्रीय सन्दर्भ) हमारे लेखक-दल द्वारा त्रैमासिक समीक्षित होती है। पृष्ठ अपने मेटाडेटा में "अन्तिम समीक्षा" तिथि प्रदर्शित करते हैं। नये उपकरण उपयोगकर्ता अनुरोधों के आधार पर जोड़े जाते हैं — हाल के जोड़ हैं नौ महादशा ग्रह मार्गदर्शिकाएँ — सूर्य, चन्द्र, मंगल, बुध, गुरु, शुक्र, शनि, राहु, और केतु — पूर्ण दीर्घ-रूप गहराई में।',
    },
  },
];

export function getHomeFaqs(locale: 'en' | 'hi'): Array<{ question: string; answer: string }> {
  return HOME_FAQS.map((f) => ({
    question: f.question[locale],
    answer: f.answer[locale],
  }));
}
