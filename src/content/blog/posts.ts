export interface BlogPost {
  slug: string;
  title: {
    en: string;
    hi: string;
  };
  excerpt: {
    en: string;
    hi: string;
  };
  content: {
    en: string;
    hi: string;
  };
  category: 'numerology' | 'astrology' | 'vastu' | 'general';
  heroImage?: string;
  images?: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  author: string;
  publishedAt: string;
  readingTime: number;
  featured?: boolean;
  relatedTools?: string[];
  keywords?: string[];
}

// Tool folder to blog slug mapping (will be updated as posts are added)
export const TOOL_BLOG_MAP: Record<string, string> = {
  'kundli': 'free-kundli-online-janam-kundali-calculator',
  'nakshatra': 'nakshatra-calculator-birth-star-meanings',
  'moon-sign': 'moon-sign-calculator-emotional-inner-self',
  'lagna': 'lagna-calculator-ascendant-sign-meaning',
  'mahadasha': 'mahadasha-calculator-timing-life-phases',
  'manglik': 'manglik-dosha-effects-remedies',
  'sade-sati': 'sade-sati-period-guide',
  'pitra-dosha': 'pitra-dosha-calculator-ancestral-karma',
  'raj-yoga': 'raj-yoga-calculator-divine-fortune',
  'kalsarp-dosha': 'kalsarp-dosha-serpent-blessing',
  'gemstone-recommender': 'gemstone-recommendation-by-date-of-birth',
  'marriage-matching': 'marriage-matching-kundli-compatibility',
  'marriage-timing-predictor': 'marriage-timing-predictor-when-marry',
  'muhurat-finder': 'muhurat-finder-auspicious-time',
  'career-predictor': 'career-predictor-job-business',
  'wealth-money-predictor': 'wealth-money-predictor-financial-destiny',
  'life-path-number': 'life-path-number-calculator-meaning',
  'destiny-number': 'destiny-number-meaning-calculator',
  'lucky-number': 'lucky-number-calculator-personal',
  'chaldean-numerology': 'chaldean-numerology-vs-pythagorean',
  'lo-shu-grid': 'lo-shu-grid-magic-square',
  'bhagyodaya-year': 'bhagyodaya-year-luck-finder',
  'lucky-color': 'lucky-color-numerology-chromotherapy',
  'lucky-mobile-number': 'lucky-mobile-number-phone-numerology',
  'lucky-vehicle-number': 'lucky-vehicle-number-car-numerology',
  'lucky-bank-account-number': 'lucky-bank-account-number-numerology',
  'house-number': 'house-number-numerology-meaning',
  'business-name': 'business-name-numerology-analyzer',
  'child-name': 'child-name-numerology-baby-naming',
  'name-correction': 'name-correction-numerology-destiny',
  'love-compatibility-numerology': 'love-compatibility-numerology-soulmate',
  'room-advisor': 'room-advisor-vastu-space',
};

// Blog posts array - will be populated from user-provided markdown files
export const blogPosts: BlogPost[] = [
  // Posts will be added here one by one from markdown files
];

// Utility functions
export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((post) => post.featured);
}

export function getPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts.filter((post) => post.category === category);
}

export function getAllPosts(): BlogPost[] {
  return blogPosts.sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getRelatedPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPost(slug);
  if (!currentPost) return [];

  return blogPosts
    .filter(post => post.slug !== slug && post.category === currentPost.category)
    .slice(0, limit);
}

export function getBlogSlugForTool(toolSlug: string): string | undefined {
  return TOOL_BLOG_MAP[toolSlug];
}
