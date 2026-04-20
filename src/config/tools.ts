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
 *
 * Distinct from CATEGORY_NAMES (short label) and CATEGORY_DESCRIPTIONS
 * (tagline used on the combined /tools page), which are retained for
 * backward compatibility with existing callers.
 */
export const CATEGORY_SEO: Record<
  ToolCategory,
  {
    title: { en: string; hi: string };
    description: { en: string; hi: string };
    heading: { en: string; hi: string };
    tagline: { en: string; hi: string };
  }
> = {
  numerology: {
    title: {
      en: 'Numerology Calculators — Life Path, Destiny & Lucky Numbers',
      hi: 'अंकशास्त्र कैलकुलेटर — मूलांक, भाग्यांक और शुभ अंक',
    },
    description: {
      en: 'Free Indian Vedic numerology tools — Life Path Number, Destiny Number, Chaldean numerology, Lo Shu grid, lucky-number calculators, and business-name analysis.',
      hi: 'मुफ्त वैदिक अंकशास्त्र टूल्स — मूलांक, भाग्यांक, चैल्डियन न्यूमरोलॉजी, लो-शू ग्रिड, शुभ अंक कैलकुलेटर और व्यवसाय-नाम विश्लेषण।',
    },
    heading: {
      en: 'Numerology Calculators',
      hi: 'अंकशास्त्र कैलकुलेटर',
    },
    tagline: {
      en: 'Indian Vedic numerology rooted in the nine-graha correspondence, alongside Chaldean and Pythagorean references.',
      hi: 'नौ-ग्रह संबंध पर आधारित वैदिक अंकशास्त्र, चैल्डियन और पाइथागोरियन संदर्भों के साथ।',
    },
  },
  astrology: {
    title: {
      en: 'Vedic Astrology Tools — Kundli, Nakshatra, Mahādaśā, Lagna',
      hi: 'वैदिक ज्योतिष टूल्स — कुंडली, नक्षत्र, महादशा, लग्न',
    },
    description: {
      en: 'Free Vedic astrology calculators — birth Kundli generator, Nakshatra finder, Mahādaśā timeline, Lagna reading, Maṅgala-Doṣa, Sāḍe-Sātī, and Pitṛ-Doṣa analysis.',
      hi: 'मुफ्त वैदिक ज्योतिष कैलकुलेटर — जन्म कुंडली, नक्षत्र, महादशा, लग्न, मंगल दोष, साढ़े साती और पितृ दोष विश्लेषण।',
    },
    heading: {
      en: 'Vedic Astrology Tools',
      hi: 'वैदिक ज्योतिष टूल्स',
    },
    tagline: {
      en: 'Classical Jyotiṣa calculators anchored in Brihat Parāśara Horā Śāstra and the Parāśara tradition.',
      hi: 'बृहत् पराशर होरा शास्त्र और पराशर परंपरा पर आधारित शास्त्रीय ज्योतिष कैलकुलेटर।',
    },
  },
  vastu: {
    title: {
      en: 'Vāstu Shastra Tools — House Number, Room Advisor, Direction Guide',
      hi: 'वास्तु शास्त्र टूल्स — घर का नंबर, कक्ष सलाहकार, दिशा गाइड',
    },
    description: {
      en: 'Vāstu-Śāstra calculators grounded in classical architectural tradition — house-number numerology, room-placement advisor, directional guidance.',
      hi: 'शास्त्रीय वास्तु परंपरा पर आधारित वास्तु कैलकुलेटर — घर-नंबर अंकशास्त्र, कक्ष-स्थान सलाहकार, दिशा मार्गदर्शन।',
    },
    heading: {
      en: 'Vāstu Shastra Tools',
      hi: 'वास्तु शास्त्र टूल्स',
    },
    tagline: {
      en: 'Tools grounded in classical vāstu-śāstra — Mayamatam, Mānasāra, Bṛhat Saṃhitā — with modern architectural application.',
      hi: 'शास्त्रीय वास्तु-शास्त्र — मयमतम्, मानसार, बृहत् संहिता — पर आधारित टूल्स, आधुनिक वास्तु अनुप्रयोग के साथ।',
    },
  },
  muhurat: {
    title: {
      en: 'Muhūrta Finder — Auspicious Dates & Classical Pañcāṅga Tools',
      hi: 'मुहूर्त खोजक — शुभ तिथि और पंचांग टूल्स',
    },
    description: {
      en: 'Free Muhūrta calculators anchored in the classical pañcāṅga — auspicious-timing selection based on tithi, nakshatra, vāra, yoga, and karaṇa.',
      hi: 'शास्त्रीय पंचांग पर आधारित मुफ्त मुहूर्त कैलकुलेटर — तिथि, नक्षत्र, वार, योग और करण के आधार पर शुभ समय चयन।',
    },
    heading: {
      en: 'Muhūrta & Pañcāṅga Tools',
      hi: 'मुहूर्त और पंचांग टूल्स',
    },
    tagline: {
      en: 'Classical muhūrta selection using the five-limb pañcāṅga framework from Muhūrta Cintāmaṇi and Nirṇaya Sindhu.',
      hi: 'मुहूर्त चिन्तामणि और निर्णय सिन्धु के पंचांग-ढांचे पर आधारित शास्त्रीय मुहूर्त चयन।',
    },
  },
};
