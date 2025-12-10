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
    color: 'from-teal-500 to-teal-600',
    bgColor: 'bg-teal-50',
    textColor: 'text-teal-700',
    tools: [
      {
        slug: 'life-path-number',
        translationKey: 'lifePathNumber',
        icon: '🔢',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'chaldean-numerology',
        translationKey: 'chaldean',
        icon: '✨',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'lo-shu-grid',
        translationKey: 'loshuGrid',
        icon: '⬜',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'destiny-number',
        translationKey: 'destinyNumber',
        icon: '🎯',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'lucky-number',
        translationKey: 'luckyNumber',
        icon: '🍀',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'name-correction',
        translationKey: 'nameCorrection',
        icon: '✏️',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'business-name',
        translationKey: 'businessName',
        icon: '💼',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'lucky-color',
        translationKey: 'luckyColor',
        icon: '🎨',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'bhagyodaya-year',
        translationKey: 'bhagyodaya',
        icon: '🌟',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'child-name',
        translationKey: 'childName',
        icon: '👶',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'lucky-mobile-number',
        translationKey: 'luckyMobileNumber',
        icon: '📱',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'lucky-bank-account-number',
        translationKey: 'luckyBankAccountNumber',
        icon: '🏦',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'lucky-vehicle-number',
        translationKey: 'luckyVehicleNumber',
        icon: '🚗',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'love-compatibility-numerology',
        translationKey: 'loveCompatibilityNumerology',
        icon: '💕',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'wealth-money-predictor',
        translationKey: 'wealthMoneyPredictor',
        icon: '💰',
        isPremium: false,
        isActive: true,
      },
    ],
  },
  {
    id: 'astrology',
    translationKey: 'astrology',
    icon: 'Star',
    color: 'from-saffron-500 to-saffron-600',
    bgColor: 'bg-saffron-50',
    textColor: 'text-saffron-700',
    tools: [
      {
        slug: 'moon-sign',
        translationKey: 'moonSign',
        icon: '🌙',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'nakshatra',
        translationKey: 'nakshatra',
        icon: '⭐',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'lagna',
        translationKey: 'lagna',
        icon: '🌅',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'mahadasha',
        translationKey: 'mahadasha',
        icon: '⏳',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'kundli',
        translationKey: 'kundli',
        icon: '🌟',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'raj-yoga',
        translationKey: 'rajYoga',
        icon: '👑',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'sade-sati',
        translationKey: 'sadeSati',
        icon: '🪐',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'manglik',
        translationKey: 'manglik',
        icon: '♂️',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'kalsarp-dosha',
        translationKey: 'kalsarp',
        icon: '🐍',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'pitra-dosha',
        translationKey: 'pitraDosh',
        icon: '🙏',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'marriage-matching',
        translationKey: 'marriage',
        icon: '💑',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'marriage-timing-predictor',
        translationKey: 'marriageTimingPredictor',
        icon: '💒',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'gemstone-recommender',
        translationKey: 'gemstoneRecommender',
        icon: '💎',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'career-predictor',
        translationKey: 'careerPredictor',
        icon: '🎯',
        isPremium: false,
        isActive: true,
      },
    ],
  },
  {
    id: 'vastu',
    translationKey: 'vastu',
    icon: 'Home',
    color: 'from-saffron-500 to-saffron-600',
    bgColor: 'bg-saffron-50',
    textColor: 'text-saffron-700',
    tools: [
      {
        slug: 'room-advisor',
        translationKey: 'roomAdvisor',
        icon: '🏠',
        isPremium: false,
        isActive: true,
      },
      {
        slug: 'house-number',
        translationKey: 'houseNumber',
        icon: '🔢',
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
        icon: '📅',
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
