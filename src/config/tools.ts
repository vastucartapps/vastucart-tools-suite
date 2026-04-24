/**
 * Centralized Tool Configuration
 *
 * Single source of truth for all tools in the application.
 * This eliminates string manipulation errors and provides type safety.
 */

export type ToolCategory = 'numerology' | 'astrology' | 'vastu' | 'muhurat';

export interface ToolDefinition {
  slug: string;           // URL slug: "life-path-number"
  translationKey: string; // i18n key: "lifePathNumber"
  icon: string;           // Emoji icon
  isPremium: boolean;     // Premium/Pro feature
  isActive: boolean;      // Is the tool built and ready?
}

export interface CategoryDefinition {
  id: ToolCategory;
  translationKey: string;
  icon: string;
  color: string;
  bgColor: string;
  textColor: string;
  tools: ToolDefinition[];
}

/**
 * All tool definitions organized by category
 */
export const TOOL_CATEGORIES: CategoryDefinition[] = [
  {
    id: 'numerology',
    translationKey: 'numerology',
    icon: 'Calculator',
    color: 'from-deepteal-500 to-deepteal-600',
    bgColor: 'bg-deepteal-50',
    textColor: 'text-deepteal-700',
    tools: [
      {
        slug: 'life-path-number',
        translationKey: 'lifePathNumber',
        icon: 'Hash',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'chaldean-numerology',
        translationKey: 'chaldean',
        icon: 'Sparkles',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'lo-shu-grid',
        translationKey: 'loshuGrid',
        icon: 'LayoutGrid',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'destiny-number',
        translationKey: 'destinyNumber',
        icon: 'Target',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'lucky-number',
        translationKey: 'luckyNumber',
        icon: 'Clover',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'name-correction',
        translationKey: 'nameCorrection',
        icon: 'Pencil',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'business-name',
        translationKey: 'businessName',
        icon: 'Briefcase',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'lucky-color',
        translationKey: 'luckyColor',
        icon: 'Palette',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'bhagyodaya-year',
        translationKey: 'bhagyodaya',
        icon: 'Star',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'child-name',
        translationKey: 'childName',
        icon: 'Baby',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'lucky-mobile-number',
        translationKey: 'luckyMobileNumber',
        icon: 'Smartphone',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'lucky-bank-account-number',
        translationKey: 'luckyBankAccountNumber',
        icon: 'Landmark',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'lucky-vehicle-number',
        translationKey: 'luckyVehicleNumber',
        icon: 'Car',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'love-compatibility-numerology',
        translationKey: 'loveCompatibilityNumerology',
        icon: 'Heart',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'wealth-money-predictor',
        translationKey: 'wealthMoneyPredictor',
        icon: 'Wallet',
        isPremium: false,
        isActive: true,
      },
    ],
  },
  {
    id: 'astrology',
    translationKey: 'astrology',
    icon: 'Star',
    color: 'from-warmaccent-500 to-warmaccent-600',
    bgColor: 'bg-warmaccent-50',
    textColor: 'text-warmaccent-700',
    tools: [
      {
        slug: 'moon-sign',
        translationKey: 'moonSign',
        icon: 'Moon',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'nakshatra',
        translationKey: 'nakshatra',
        icon: 'Star',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'lagna',
        translationKey: 'lagna',
        icon: 'Sunrise',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'mahadasha',
        translationKey: 'mahadasha',
        icon: 'Hourglass',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'kundli',
        translationKey: 'kundli',
        icon: 'Star',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'raj-yoga',
        translationKey: 'rajYoga',
        icon: 'Crown',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'sade-sati',
        translationKey: 'sadeSati',
        icon: 'Orbit',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'manglik',
        translationKey: 'manglik',
        icon: 'Shield',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'kalsarp-dosha',
        translationKey: 'kalsarp',
        icon: 'Flame',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'pitra-dosha',
        translationKey: 'pitraDosh',
        icon: 'Flame',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'marriage-matching',
        translationKey: 'marriage',
        icon: 'Users',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'marriage-timing-predictor',
        translationKey: 'marriageTimingPredictor',
        icon: 'Church',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'gemstone-recommender',
        translationKey: 'gemstoneRecommender',
        icon: 'Gem',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'career-predictor',
        translationKey: 'careerPredictor',
        icon: 'Target',
        isPremium: false,
        isActive: true,
      },
    ],
  },
  {
    id: 'vastu',
    translationKey: 'vastu',
    icon: 'Home',
    color: 'from-warmaccent-500 to-warmaccent-600',
    bgColor: 'bg-warmaccent-50',
    textColor: 'text-warmaccent-700',
    tools: [
      {
        slug: 'room-advisor',
        translationKey: 'roomAdvisor',
        icon: 'Home',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'house-number',
        translationKey: 'houseNumber',
        icon: 'Hash',
        isPremium: false,
        isActive: true,
      },
    ],
  },
  {
    id: 'muhurat',
    translationKey: 'muhurat',
    icon: 'Calendar',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700',
    tools: [
      {
        slug: 'muhurat-finder',
        translationKey: 'muhuratFinder',
        icon: 'CalendarClock',
        isPremium: false,
        isActive: true,
      },
    ],
  },
];

/**
 * Get all tools across all categories
 */
export function getAllTools(): (ToolDefinition & { category: ToolCategory })[] {
  return TOOL_CATEGORIES.flatMap((category) =>
    category.tools.map((tool) => ({
      ...tool,
      category: category.id,
    }))
  );
}

/**
 * Get tools by category
 */
export function getToolsByCategory(categoryId: ToolCategory): ToolDefinition[] {
  const category = TOOL_CATEGORIES.find((c) => c.id === categoryId);
  return category?.tools || [];
}

/**
 * Get a specific tool by slug
 */
export function getToolBySlug(slug: string): (ToolDefinition & { category: ToolCategory }) | null {
  for (const category of TOOL_CATEGORIES) {
    const tool = category.tools.find((t) => t.slug === slug);
    if (tool) {
      return { ...tool, category: category.id };
    }
  }
  return null;
}

/**
 * Get only active (built) tools
 */
export function getActiveTools(): (ToolDefinition & { category: ToolCategory })[] {
  return getAllTools().filter((tool) => tool.isActive);
}

/**
 * Get category by ID
 */
export function getCategoryById(id: ToolCategory): CategoryDefinition | null {
  return TOOL_CATEGORIES.find((c) => c.id === id) || null;
}

/**
 * Category display names (hardcoded to avoid translation issues in config)
 */
export const CATEGORY_NAMES: Record<ToolCategory, { en: string; hi: string }> = {
  numerology: { en: 'Numerology', hi: 'अंकशास्त्र' },
  astrology: { en: 'Astrology', hi: 'ज्योतिष' },
  vastu: { en: 'Vastu Shastra', hi: 'वास्तु शास्त्र' },
  muhurat: { en: 'Muhurat', hi: 'मुहूर्त' },
};

/**
 * Category descriptions
 */
export const CATEGORY_DESCRIPTIONS: Record<ToolCategory, { en: string; hi: string }> = {
  numerology: {
    en: 'Discover the hidden meanings in numbers',
    hi: 'संख्याओं में छिपे अर्थों की खोज करें',
  },
  astrology: {
    en: 'Explore planetary influences on your destiny',
    hi: 'अपनी नियति पर ग्रहों के प्रभाव जानें',
  },
  vastu: {
    en: 'Harmonize your living spaces',
    hi: 'अपने रहने की जगहों को सामंजस्यपूर्ण बनाएं',
  },
  muhurat: {
    en: 'Find auspicious times for important activities',
    hi: 'महत्वपूर्ण कार्यों के लिए शुभ समय खोजें',
  },
};

/**
 * SEO-focused copy per category for the /tools/category/{category} pages.
 * Each field is keyword-targeted:
 *   - title        60–70 chars, head-term first
 *   - description  140–155 chars, names 2–3 representative tools
 *   - heading      display H1 on the category page
 *   - tagline      one-liner under the H1
 *   - intro        150–250 word body copy (paragraph array) grounded in
 *                  classical references; rendered as prose above the grid
 *   - faqs         3–5 Q&A, surfaced both as visible HTML and as FAQPage
 *                  schema via ToolsCategoryEntityGraph
 *   - relatedConceptSlugs  slugs from content/concepts/drafts, linked from
 *                  the page to anchor the category inside the broader
 *                  concept corpus (138 entries)
 *   - relatedBlogSlugs     blog slugs from src/content/blog/posts.ts;
 *                  surfaced as recommended reading for the category
 *
 * Distinct from CATEGORY_NAMES (short label) and CATEGORY_DESCRIPTIONS
 * (tagline used on the combined /tools page), which are retained for
 * backward compatibility with existing callers.
 */
export interface CategoryFaq {
  question: string;
  answer: string;
}

export const CATEGORY_SEO: Record<
  ToolCategory,
  {
    title: { en: string; hi: string };
    description: { en: string; hi: string };
    heading: { en: string; hi: string };
    tagline: { en: string; hi: string };
    intro: { en: string[]; hi: string[] };
    faqs: { en: CategoryFaq[]; hi: CategoryFaq[] };
    relatedConceptSlugs: string[];
    relatedBlogSlugs: string[];
  }
> = {
  numerology: {
    title: {
      en: 'Free Numerology Calculator by Date of Birth | VastuCart',
      hi: 'मुफ्त अंक ज्योतिष कैलकुलेटर — जन्म तिथि से | VastuCart',
    },
    description: {
      en: 'Free numerology tools — life path number (mulank), destiny number (bhagyank), lucky number, Lo Shu grid, Chaldean name numerology. Hindi & English.',
      hi: 'मुफ्त अंक ज्योतिष टूल्स — मूलांक, भाग्यांक, शुभ अंक, लो शू ग्रिड, नाम अंक ज्योतिष (चैल्डियन)। जन्म तिथि से तुरंत परिणाम हिंदी और अंग्रेजी में।',
    },
    heading: {
      en: 'Numerology Calculators',
      hi: 'अंकशास्त्र कैलकुलेटर',
    },
    tagline: {
      en: 'Indian Vedic numerology rooted in the nine-graha correspondence, alongside Chaldean and Pythagorean references.',
      hi: 'नौ-ग्रह संबंध पर आधारित वैदिक अंकशास्त्र, चैल्डियन और पाइथागोरियन संदर्भों के साथ।',
    },
    intro: {
      en: [
        'Vedic numerology (aṅka-śāstra) links each of the single digits 1–9 to one of the nine classical grahas — Sūrya, Chandra, Maṅgala, Budha, Bṛhaspati, Śukra, Śani, Rāhu, Ketu. Your birth date and name reduce, through classical rules, into three root numbers: the Mūlāṅka (from the birth day alone), the Bhāgyāṅka (from the full date of birth), and the Nāmāṅka (from the written name). Reading these together is the standard Indian method for assessing personal tendencies and auspicious direction.',
        'Alongside the Vedic framework these tools expose the two Western systems used widely in modern practice: Chaldean (the earliest surviving letter-value system) and Pythagorean (the 1–9 letter table most commonly taught). Use the Life Path calculator for the root number from your birth date, the Destiny Number for the numeric signature of your full legal name, the Lo Shu Grid for the 3×3 distribution across digits 1–9, and the lucky-number family for specific applications — mobile, vehicle, account number, business name.',
      ],
      hi: [
        'अंकशास्त्र में नौ एकल-अंकों को नौ शास्त्रीय ग्रहों — सूर्य, चन्द्र, मंगल, बुध, बृहस्पति, शुक्र, शनि, राहु, केतु — से जोड़ा जाता है। जन्म-तिथि और नाम को शास्त्रीय नियमों से घटाकर तीन मूल संख्याएँ निकाली जाती हैं: मूलांक (जन्म दिवस से), भाग्यांक (पूर्ण तिथि से) और नामांक (लिखित नाम से)। इन तीनों को एक साथ पढ़ना व्यक्तिगत प्रवृत्तियों और शुभ दिशा का आकलन करने की मानक भारतीय विधि है।',
        'वैदिक ढांचे के अलावा ये टूल्स दो पश्चिमी प्रणालियाँ भी दिखाते हैं: चैल्डियन (सबसे प्राचीन अक्षर-मान प्रणाली) और पाइथागोरियन (1–9 अक्षर-मान सारणी)। जन्म-तिथि से मूलांक के लिए लाइफ-पाथ कैलकुलेटर, पूर्ण नाम की संख्यात्मक हस्ताक्षर के लिए भाग्यांक, 1–9 अंकों के वितरण के लिए लो-शू ग्रिड, और मोबाइल, वाहन, खाता संख्या या व्यवसाय-नाम जैसे विशिष्ट अनुप्रयोगों के लिए शुभ-अंक टूल्स का उपयोग करें।',
      ],
    },
    faqs: {
      en: [
        {
          question: 'How is Vedic numerology different from Western numerology?',
          answer:
            'Vedic numerology links each of the digits 1–9 to one of the nine classical grahas and uses date-based root numbers (Mūlāṅka, Bhāgyāṅka) as its foundation. Chaldean and Pythagorean numerology assign values to letters using different tables and emphasise the numeric signature of the name. Indian practice typically reads the Vedic root number first, then uses the name-based number as a supporting layer.',
        },
        {
          question: 'Which number matters more — Life Path or Destiny Number?',
          answer:
            'The Life Path Number (Mūlāṅka, from the birth day alone) is considered the foundation — it describes natural tendencies you were born with. The Destiny Number (Bhāgyāṅka, from the full date of birth) describes the life trajectory and direction you are meant to follow. Both are read together; neither is redundant.',
        },
        {
          question: 'Do I need a Lo Shu Grid in addition to my root number?',
          answer:
            'The Lo Shu Grid is diagnostic, not predictive. It plots which digits (1–9) are present or missing in your birth date and highlights grahas whose influence is weak or absent. Practitioners use it alongside the root number to identify which corrective remedies (gemstone, mantra, direction) are most relevant.',
        },
        {
          question: 'Are these calculators free?',
          answer:
            'Yes — every calculator on this page is free to use. No account required, no limits on the number of readings.',
        },
      ],
      hi: [
        {
          question: 'वैदिक अंकशास्त्र और पश्चिमी अंकशास्त्र में क्या अंतर है?',
          answer:
            'वैदिक अंकशास्त्र 1–9 के प्रत्येक अंक को नौ शास्त्रीय ग्रहों में से एक से जोड़ता है और जन्म-तिथि पर आधारित मूल संख्याएँ (मूलांक, भाग्यांक) को आधार बनाता है। चैल्डियन और पाइथागोरियन प्रणालियाँ अक्षरों को भिन्न सारणियों से मान देती हैं और नाम की संख्यात्मक हस्ताक्षर पर अधिक बल देती हैं। भारतीय पद्धति में पहले वैदिक मूल-संख्या पढ़ी जाती है, फिर नाम-आधारित संख्या सहायक परत के रूप में।',
        },
        {
          question: 'मूलांक और भाग्यांक में कौन अधिक महत्वपूर्ण है?',
          answer:
            'मूलांक (केवल जन्म दिन से) आधार माना जाता है — वह स्वाभाविक प्रवृत्तियों को दर्शाता है जिनके साथ आप जन्मे हैं। भाग्यांक (पूर्ण जन्म तिथि से) उस जीवन-यात्रा और दिशा को दर्शाता है जिसका आपको अनुसरण करना है। दोनों को एक साथ पढ़ा जाता है; कोई भी अनावश्यक नहीं है।',
        },
        {
          question: 'क्या मूलांक के अतिरिक्त लो-शू ग्रिड भी आवश्यक है?',
          answer:
            'लो-शू ग्रिड पूर्वानुमान नहीं, निदान है। यह दर्शाता है कि जन्म-तिथि में 1–9 में से कौन-से अंक उपस्थित हैं और कौन अनुपस्थित, और किन ग्रहों का प्रभाव क्षीण या शून्य है। साधक इसे मूलांक के साथ पढ़ते हैं ताकि उचित उपाय (रत्न, मंत्र, दिशा) निर्धारित किए जा सकें।',
        },
        {
          question: 'क्या ये कैलकुलेटर निःशुल्क हैं?',
          answer:
            'हाँ — इस पृष्ठ का प्रत्येक कैलकुलेटर निःशुल्क है। किसी खाते की आवश्यकता नहीं, रीडिंग की संख्या पर कोई सीमा नहीं।',
        },
      ],
    },
    relatedConceptSlugs: [
      'life-path-number',
      'destiny-number',
      'chaldean-numerology',
      'pythagorean-numerology',
      'lo-shu-grid',
      'master-numbers',
    ],
    relatedBlogSlugs: [
      'life-path-number-calculator-soul-purpose',
      'destiny-number-calculator-name-power',
      'chaldean-vs-pythagorean-numerology-comparison',
      'lo-shu-grid-calculator-magic-square',
    ],
  },
  astrology: {
    title: {
      en: 'Free Vedic Astrology — Kundli, Dasha & Nakshatra | VastuCart',
      hi: 'मुफ्त वैदिक ज्योतिष — कुंडली, दशा, नक्षत्र | VastuCart',
    },
    description: {
      en: 'Free Vedic astrology tools — janam kundli, mahadasha timeline, nakshatra finder, manglik check, sade sati, kundli milan and more. Hindi & English.',
      hi: 'मुफ्त वैदिक ज्योतिष टूल्स — जन्म कुंडली, महादशा, नक्षत्र, मांगलिक, साढ़े साती, कुंडली मिलान। जन्म तिथि से तुरंत परिणाम हिंदी में।',
    },
    heading: {
      en: 'Vedic Astrology Tools',
      hi: 'वैदिक ज्योतिष टूल्स',
    },
    tagline: {
      en: 'Classical Jyotiṣa calculators anchored in Brihat Parāśara Horā Śāstra and the Parāśara tradition.',
      hi: 'बृहत् पराशर होरा शास्त्र और पराशर परंपरा पर आधारित शास्त्रीय ज्योतिष कैलकुलेटर।',
    },
    intro: {
      en: [
        'Classical Jyotiṣa reads a birth chart (Kuṇḍalī) through a layered framework: the twelve rāśis as zones of the zodiac, the twenty-seven nakṣatras as finer lunar mansions, the nine grahas as the planetary agents, and the twelve bhāvas as life domains. The principal reference is Bṛhat Parāśara Horā Śāstra, with supporting material from Jaimini\'s Upadeśa Sūtra and Varāhamihira\'s Bṛhat Jātaka.',
        'The tools on this page cover the standard calculations a classical reader needs: the natal Kuṇḍalī with all nine grahas and the lagna; the Moon\'s nakṣatra and pada; the 120-year Vimśottarī Mahādaśā timeline with antardaśā and pratyantardaśā sub-periods; and targeted diagnostics for the common doṣas (Maṅgala-doṣa, Pitṛ-doṣa, Sāḍe-sātī, Kāla-sarpa-doṣa) and yogas (Rāja-yoga, Gaja-kesarī, Pañca-mahāpuruṣa variants). Positions use the Lahiri ayanāṃśa — the sidereal offset adopted by the Government of India.',
      ],
      hi: [
        'शास्त्रीय ज्योतिष जन्म-कुंडली को एक स्तरीय ढाँचे में पढ़ता है: बारह राशियाँ राशि-चक्र के क्षेत्र के रूप में, सत्ताईस नक्षत्र सूक्ष्म चंद्र-मंडल के रूप में, नौ ग्रह ग्रहों के कारक के रूप में, और बारह भाव जीवन के क्षेत्रों के रूप में। प्रमुख ग्रंथ है बृहत् पराशर होरा शास्त्र, सहायक सामग्री जैमिनि के उपदेश-सूत्र और वराहमिहिर के बृहत् जातक से।',
        'इस पृष्ठ के टूल्स शास्त्रीय पाठक के लिए आवश्यक गणनाएँ प्रदान करते हैं: नौ ग्रहों और लग्न सहित जन्म-कुंडली; चंद्र का नक्षत्र और पाद; 120-वर्षीय विंशोत्तरी महादशा तथा अंतर्दशा, प्रत्यन्तर्दशा; प्रमुख दोषों (मंगल-दोष, पितृ-दोष, साढ़े-साती, काल-सर्प-दोष) और योगों (राज-योग, गज-केसरी, पंच-महापुरुष योग) का विश्लेषण। गणनाएँ लाहिरी अयनांश — भारत सरकार द्वारा अपनाए गए सायन-निरयन अंतर — पर आधारित हैं।',
      ],
    },
    faqs: {
      en: [
        {
          question: 'What does the Kuṇḍalī (birth chart) actually show?',
          answer:
            'The Kuṇḍalī shows the sky as it appeared from your birth location at the moment of birth — the rāśi rising on the eastern horizon (the lagna), the position of each of the nine grahas in the twelve bhāvas, and the nakṣatra and pada of the Moon. From this chart, classical Jyotiṣa reads character, relationships, career, timing, and remedies.',
        },
        {
          question: 'How is the Mahādaśā used?',
          answer:
            'The Vimśottarī Mahādaśā is a 120-year cycle divided into nine planetary periods, assigned by the nakṣatra of the Moon at birth. Each period is further subdivided into antardaśā and pratyantardaśā. Practitioners read what the chart promises, and then use the current daśā to identify when — in a 1- to 12-year window — a particular theme is most likely to activate.',
        },
        {
          question: 'Are Maṅgala-doṣa and Sāḍe-sātī only marriage issues?',
          answer:
            'No. Maṅgala-doṣa (Mars affliction in certain bhāvas) is best known for its marriage-compatibility role, but the same placement affects temperament and conflict patterns across life. Sāḍe-sātī is Saturn\'s seven-and-a-half-year transit over the three signs around the natal Moon — relevant to career, health, and family, not just relationships.',
        },
        {
          question: 'Do the calculations use classical Indian methods?',
          answer:
            'Yes. Positions are computed with an astronomical computation engine using the Lahiri ayanāṃśa. All interpretive rules — daśā, antardaśā, yogas, doṣas — follow the classical Pārāśarī system. The tools are calculation-grade, not simplified Western approximations.',
        },
      ],
      hi: [
        {
          question: 'जन्म-कुंडली वास्तव में क्या दर्शाती है?',
          answer:
            'कुंडली जन्म के क्षण आपकी जन्म-भूमि से दिखाई गए आकाश को दर्शाती है — पूर्वी क्षितिज पर उदित राशि (लग्न), बारह भावों में नौ ग्रहों की स्थिति, तथा चंद्र का नक्षत्र और पाद। इस चार्ट से शास्त्रीय ज्योतिष चरित्र, संबंध, व्यवसाय, समय और उपाय पढ़ता है।',
        },
        {
          question: 'महादशा का उपयोग कैसे किया जाता है?',
          answer:
            'विंशोत्तरी महादशा 120-वर्षीय चक्र है, जो जन्म-समय के चंद्र-नक्षत्र के अनुसार नौ ग्रहों के कालखंडों में विभाजित होती है। प्रत्येक कालखंड पुनः अंतर्दशा और प्रत्यन्तर्दशा में विभाजित होता है। साधक कुंडली की दी गई संभावनाओं को पढ़ते हैं और फिर वर्तमान दशा से यह निर्धारित करते हैं कि कोई विशिष्ट विषय कब — 1 से 12 वर्ष की अवधि में — सक्रिय होगा।',
        },
        {
          question: 'क्या मंगल-दोष और साढ़े-साती केवल विवाह के विषय हैं?',
          answer:
            'नहीं। मंगल-दोष (कुछ भावों में मंगल की स्थिति) विवाह-कुंडली मिलान के लिए प्रसिद्ध है, परंतु यही स्थिति स्वभाव और संघर्ष-स्वरूप को भी प्रभावित करती है। साढ़े-साती शनि का साढ़े सात वर्षीय गोचर है, जो जन्म-चंद्र के आस-पास तीन राशियों में होता है — इसका प्रभाव व्यवसाय, स्वास्थ्य और परिवार पर भी होता है, केवल संबंधों पर नहीं।',
        },
        {
          question: 'क्या गणनाएँ शास्त्रीय भारतीय पद्धति पर आधारित हैं?',
          answer:
            'हाँ। ग्रह-स्थिति खगोलीय गणना-इंजन से लाहिरी अयनांश के आधार पर निकाली जाती है। सभी विवेचन-सिद्धांत — दशा, अंतर्दशा, योग, दोष — शास्त्रीय पाराशरी पद्धति का अनुसरण करते हैं। ये टूल्स गणना-स्तरीय हैं, पश्चिमी सरलीकरण नहीं।',
        },
      ],
    },
    relatedConceptSlugs: [
      'surya',
      'chandra',
      'rohini',
      'tanu-bhava',
      'raj-yoga',
      'mangal-dosha',
    ],
    relatedBlogSlugs: [
      'kundli-birth-chart-guide',
      'nakshatra-birth-star-guide',
      'mahadasha-planetary-periods-guide',
      'sade-sati-calculator-saturn-cycle',
    ],
  },
  vastu: {
    title: {
      en: 'Free Vastu Shastra Tools — Home, Room & Number | VastuCart',
      hi: 'मुफ्त वास्तु शास्त्र टूल्स — घर, कमरा, नंबर | VastuCart',
    },
    description: {
      en: 'Free Vastu calculators for home — house number check, room direction advisor, bedroom/kitchen/pooja placement, directional guide. Classical Vastu rules.',
      hi: 'घर के लिए मुफ्त वास्तु कैलकुलेटर — घर नंबर जांच, कमरा दिशा सलाह, शयन-कक्ष/रसोई/पूजा-कक्ष स्थान, दिशा मार्गदर्शन। शास्त्रीय वास्तु नियम।',
    },
    heading: {
      en: 'Vāstu Shastra Tools',
      hi: 'वास्तु शास्त्र टूल्स',
    },
    tagline: {
      en: 'Tools grounded in classical vāstu-śāstra — Mayamatam, Mānasāra, Bṛhat Saṃhitā — with modern architectural application.',
      hi: 'शास्त्रीय वास्तु-शास्त्र — मयमतम्, मानसार, बृहत् संहिता — पर आधारित टूल्स, आधुनिक वास्तु अनुप्रयोग के साथ।',
    },
    intro: {
      en: [
        'Vāstu-śāstra is the classical Indian body of architectural rules. Its foundational texts — Mayamatam, Mānasāra, Bṛhat Saṃhitā, and the Vāstu-sūtra Upaniṣad — lay out how built space should be organised to match the Vāstu-puruṣa-maṇḍala: an 8×8 or 9×9 grid that maps each direction, zone, and the central brahmasthāna to a presiding deity and an elemental correspondence.',
        'The tools on this page apply these rules to everyday questions: the numerological signature of your house number, where a specific room (kitchen, bedroom, pūjā area, office) should sit within the home\'s eight directions, and how to diagnose which direction a particular problem is coming from. Each recommendation traces back to classical placement rules — āgneya for fire (kitchen in the southeast), īśānya for study and worship (northeast), nairṛtya for heavy storage (southwest) — rather than generic modern Feng Shui adaptations.',
      ],
      hi: [
        'वास्तु-शास्त्र भारत की शास्त्रीय वास्तुकला-परंपरा है। इसके मूल ग्रंथ — मयमतम्, मानसार, बृहत् संहिता और वास्तु-सूत्र उपनिषद — बताते हैं कि निर्मित स्थान को वास्तु-पुरुष-मण्डल के अनुसार कैसे व्यवस्थित किया जाए: 8×8 या 9×9 का ग्रिड जो प्रत्येक दिशा, क्षेत्र और केंद्रीय ब्रह्म-स्थान को एक अधिष्ठाता देवता तथा पंचतत्त्व-संबंध से जोड़ता है।',
        'इस पृष्ठ के टूल्स इन नियमों को दैनिक प्रश्नों पर लागू करते हैं: घर के नंबर का अंकशास्त्रीय विश्लेषण, किसी विशिष्ट कक्ष (रसोई, शयन-कक्ष, पूजा-स्थल, कार्यालय) की घर की आठ दिशाओं में उचित स्थिति, और किसी समस्या की दिशा-विशेष जड़ की पहचान। प्रत्येक सुझाव शास्त्रीय स्थापना-नियमों — आग्नेय (रसोई के लिए अग्नि), ईशान्य (अध्ययन और पूजा), नैऋत्य (भारी भंडार) — पर आधारित है, न कि आधुनिक फ़ेंग-शुई के सामान्य रूपांतरण पर।',
      ],
    },
    faqs: {
      en: [
        {
          question: 'Do Vāstu rules still apply in a modern apartment?',
          answer:
            'Yes, with adaptation. Classical Vāstu was written for standalone houses, but its principles — directional placement of heavy mass, airflow direction, the inviolate central brahmasthāna, and the fire/water separation — all translate to apartment layouts. The Room Advisor tool applies the same rules scaled to a flat.',
        },
        {
          question: 'Can a house number really affect the home\'s energy?',
          answer:
            'In classical Indian numerology, the house number is treated as the number the residence "carries" — it is added through standard reduction rules to a single digit and interpreted through the corresponding graha. Practitioners read this alongside the occupants\' own root numbers to assess fit.',
        },
        {
          question: 'What is the brahmasthāna and why does it matter?',
          answer:
            'The brahmasthāna is the central zone of any Vāstu-puruṣa-maṇḍala — the square (or squares) at the centre of the 8×8 or 9×9 grid. Classical rules keep it open and unobstructed, since it is the seat of the presiding Vāstu-puruṣa. Placing heavy furniture, columns, or plumbing through the brahmasthāna is considered the single biggest Vāstu defect.',
        },
      ],
      hi: [
        {
          question: 'क्या आधुनिक फ्लैट में भी वास्तु नियम लागू होते हैं?',
          answer:
            'हाँ, उचित अनुकूलन के साथ। शास्त्रीय वास्तु स्वतंत्र गृहों के लिए लिखा गया था, परंतु इसके सिद्धांत — भारी द्रव्यमान की दिशागत स्थिति, वायु-प्रवाह, अविकल केंद्रीय ब्रह्म-स्थान, अग्नि-जल का पृथक्करण — फ्लैट के वास्तु-विन्यास पर भी लागू होते हैं। रूम-एडवाइज़र टूल इन्हीं नियमों को फ्लैट के माप पर लागू करता है।',
        },
        {
          question: 'क्या घर का नंबर घर की ऊर्जा को प्रभावित कर सकता है?',
          answer:
            'शास्त्रीय भारतीय अंकशास्त्र में घर के नंबर को वह संख्या माना जाता है जिसे निवास "धारण" करता है — मानक घटा-नियमों से एकल अंक तक संक्षिप्त करके उससे संबंधित ग्रह के द्वारा विवेचित किया जाता है। साधक इसे निवासियों के अपने मूलांकों के साथ पढ़ते हैं।',
        },
        {
          question: 'ब्रह्म-स्थान क्या है और यह क्यों महत्वपूर्ण है?',
          answer:
            'ब्रह्म-स्थान वास्तु-पुरुष-मण्डल का केंद्रीय क्षेत्र है — 8×8 या 9×9 ग्रिड के मध्य का वर्ग (या वर्गों का समूह)। शास्त्रीय नियमों के अनुसार इसे खुला और अबाधित रखा जाता है, क्योंकि यही अधिष्ठाता वास्तु-पुरुष का आसन है। ब्रह्म-स्थान पर भारी फर्नीचर, स्तंभ या नलकारी रखना सबसे बड़ा वास्तु-दोष माना जाता है।',
        },
      ],
    },
    relatedConceptSlugs: [
      'vastu-purusha-mandala',
      'brahmasthana',
      'eight-directions',
      'pancha-bhutas',
    ],
    relatedBlogSlugs: [
      'house-number-meaning-home-numerology',
      'room-advisor-vastu-furniture-placement',
    ],
  },
  muhurat: {
    title: {
      en: 'Shubh Muhurat Finder 2026 — Free Auspicious Time | VastuCart',
      hi: 'शुभ मुहूर्त खोजक 2026 — मुफ्त शुभ समय | VastuCart',
    },
    description: {
      en: 'Find shubh muhurat for marriage, griha pravesh, vehicle purchase and business start — classical panchang-based. Free auspicious time calculator for 2026.',
      hi: 'विवाह, गृह प्रवेश, वाहन क्रय और व्यवसाय आरंभ के लिए शुभ मुहूर्त खोजें — शास्त्रीय पंचांग आधारित। 2026 के लिए मुफ्त शुभ समय कैलकुलेटर।',
    },
    heading: {
      en: 'Muhūrta & Pañcāṅga Tools',
      hi: 'मुहूर्त और पंचांग टूल्स',
    },
    tagline: {
      en: 'Classical muhūrta selection using the five-limb pañcāṅga framework from Muhūrta Cintāmaṇi and Nirṇaya Sindhu.',
      hi: 'मुहूर्त चिन्तामणि और निर्णय सिन्धु के पंचांग-ढांचे पर आधारित शास्त्रीय मुहूर्त चयन।',
    },
    intro: {
      en: [
        'A muhūrta is an auspicious window of time selected using the classical pañcāṅga — the five-limb Hindu almanac: tithi (lunar day), vāra (weekday), nakṣatra (lunar mansion), yoga (Sun-Moon angle configuration), and karaṇa (half-tithi). A muhūrta is chosen when all five limbs agree, favoured further by the lord of the current horā, and free of the standard defects (rāhu-kāla, yama-ghaṇṭa, gulika-kāla, doṣa tithis).',
        'The canonical references are Muhūrta Cintāmaṇi (Rāma Daivajña, 1600 CE) and Nirṇaya Sindhu (Kamalākara Bhaṭṭa, 1612 CE), with specialised treatments of marriage muhūrta, gṛha-praveśa, and vehicle purchase scattered across the smṛti literature. The tools on this page generate muhūrta windows anchored in pañcāṅga calculation — not generic "auspicious date" lookups — with the computed tithi, nakṣatra, yoga, and karaṇa shown for each candidate window so that a paṇḍita can verify the selection.',
      ],
      hi: [
        'मुहूर्त वह शुभ काल-खण्ड है जो शास्त्रीय पंचांग — तिथि, वार, नक्षत्र, योग और करण — के पाँच अंगों से चुना जाता है। मुहूर्त तब चुना जाता है जब पाँचों अंग सहमत हों, वर्तमान होरा के स्वामी से बल प्राप्त हो, और मानक दोषों (राहु-काल, यम-घण्ट, गुलिक-काल, दोष-तिथियाँ) से मुक्त हो।',
        'प्रामाणिक ग्रंथ हैं मुहूर्त चिन्तामणि (राम दैवज्ञ, 1600 ईस्वी) और निर्णय सिन्धु (कमलाकर भट्ट, 1612 ईस्वी); विवाह-मुहूर्त, गृह-प्रवेश और वाहन-क्रय पर विशिष्ट विवेचन स्मृति-साहित्य में बिखरा हुआ है। इस पृष्ठ के टूल्स पंचांग-गणना पर आधारित मुहूर्त-खिड़कियाँ उत्पन्न करते हैं — सामान्य "शुभ-दिवस" खोज नहीं — और प्रत्येक विकल्प के लिए परिकलित तिथि, नक्षत्र, योग, करण दिखाते हैं ताकि पण्डित जी चयन की पुष्टि कर सकें।',
      ],
    },
    faqs: {
      en: [
        {
          question: 'What is the difference between a muhūrta and a śubha tithi?',
          answer:
            'A śubha tithi (auspicious lunar day) is one limb of the selection — tithi alone. A full muhūrta is chosen when all five pañcāṅga limbs (tithi, vāra, nakṣatra, yoga, karaṇa) agree and are free of the standard defects. So every muhūrta sits on a śubha tithi, but not every śubha tithi gives a usable muhūrta.',
        },
        {
          question: 'Are rāhu-kāla and yama-ghaṇṭa the same thing?',
          answer:
            'No — both are inauspicious daily periods but computed differently. Rāhu-kāla is a 90-minute window whose position depends on the weekday. Yama-ghaṇṭa is a separately calculated window assigned to Yama. Gulika-kāla is a third such period. Classical muhūrta selection routinely avoids all three.',
        },
        {
          question: 'Can I just pick any date my pañcāṅga app marks as auspicious?',
          answer:
            'Generic "auspicious day" apps often mark only tithi-level approvals. For major muhūrtas — marriage, gṛha-praveśa, business start — the full five-limb check plus avoidance of doṣa windows is required. The tools here expose every limb so you (or a paṇḍita reviewing the selection) can verify that all five agree.',
        },
      ],
      hi: [
        {
          question: 'मुहूर्त और शुभ तिथि में क्या अंतर है?',
          answer:
            'शुभ तिथि चयन का केवल एक अंग है — केवल तिथि। पूर्ण मुहूर्त तब चुना जाता है जब पंचांग के पाँचों अंग (तिथि, वार, नक्षत्र, योग, करण) सहमत हों और मानक दोषों से मुक्त हों। इसलिए प्रत्येक मुहूर्त शुभ तिथि पर होता है, परंतु प्रत्येक शुभ तिथि उपयोग-योग्य मुहूर्त नहीं देती।',
        },
        {
          question: 'क्या राहु-काल और यम-घण्ट एक ही हैं?',
          answer:
            'नहीं — दोनों दैनिक अशुभ काल-खण्ड हैं, परंतु अलग विधि से गणित किए जाते हैं। राहु-काल 90-मिनट का काल-खण्ड है जिसकी स्थिति वार के अनुसार निर्धारित होती है। यम-घण्ट यम को आवंटित एक अलग काल-खण्ड है। गुलिक-काल तीसरा ऐसा काल-खण्ड है। शास्त्रीय मुहूर्त-चयन तीनों से बचता है।',
        },
        {
          question: 'क्या कोई भी पंचांग-ऐप जिस दिन को शुभ बताए, वह उपयुक्त है?',
          answer:
            'सामान्य "शुभ-दिवस" ऐप्स प्रायः केवल तिथि-स्तर की स्वीकृति दिखाते हैं। विवाह, गृह-प्रवेश, व्यवसाय-प्रारंभ जैसे प्रमुख मुहूर्तों के लिए पाँचों अंगों का पूर्ण परीक्षण तथा दोष-काल से बचाव आवश्यक है। यहाँ के टूल्स प्रत्येक अंग को दिखाते हैं ताकि आप (या समीक्षक पण्डित जी) पाँचों की सहमति की पुष्टि कर सकें।',
        },
      ],
    },
    relatedConceptSlugs: [
      'ekadashi',
      'purnima',
      'amavasya',
      'rohini',
      'pushya',
    ],
    relatedBlogSlugs: [],
  },
};
