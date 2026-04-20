import { MetadataRoute } from 'next';
import { getActiveTools } from '@/config/tools';
import { getAllPosts } from '@/content/blog/posts';
import { LIFE_PATH_NUMBERS } from '@/lib/numerology/life-path-pages';
import { getAllConceptSlugs } from '@/lib/concepts';

const BASE_URL = 'https://www.vastucart.in';

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = getActiveTools();
  const posts = getAllPosts();
  const now = new Date();

  // Helper: create en + hi URL pair with hreflang alternates
  function pair(
    path: string,
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly',
    priority: number,
    lastModified: Date = now,
  ): MetadataRoute.Sitemap {
    const enUrl = path ? `${BASE_URL}${path}` : BASE_URL;
    const hiUrl = `${BASE_URL}/hi${path}`;
    const alternates = { languages: { en: enUrl, hi: hiUrl, 'x-default': enUrl } };
    return [
      { url: enUrl, changeFrequency, priority, lastModified, alternates },
      { url: hiUrl, changeFrequency, priority, lastModified, alternates },
    ];
  }

  return [
    ...pair('', 'daily', 1.0),
    ...pair('/tools', 'daily', 1.0),
    // Category hub pages — keyword-targeted listing pages for each
    // ToolCategory. Priority 0.9 matches individual tool pages because the
    // category hubs are the ranking targets for category-level queries
    // (e.g., "numerology calculator", "vedic astrology tools").
    ...pair('/tools/category/numerology', 'weekly', 0.9),
    ...pair('/tools/category/astrology', 'weekly', 0.9),
    ...pair('/tools/category/vastu', 'weekly', 0.9),
    ...pair('/tools/category/muhurat', 'weekly', 0.9),
    // Tools refresh weekly — calculators are live products, not static docs.
    ...tools.flatMap((tool) => pair(`/tools/${tool.slug}`, 'weekly', 0.9)),
    // Programmatic Life Path Number meaning pages (1-9, 11, 22, 33).
    ...LIFE_PATH_NUMBERS.flatMap((n) =>
      pair(`/tools/life-path-number/${n}`, 'monthly', 0.8)
    ),
    ...pair('/blog', 'daily', 0.8),
    ...posts.flatMap((post) =>
      pair(`/blog/${post.slug}`, 'monthly', 0.7, new Date(post.updatedAt))
    ),
    // Concept corpus (138 entities across 12 categories).
    // Tithis use nested /concepts/tithi/{slug} per shared contracts §3.4;
    // all other concepts use flat /concepts/{slug}.
    ...pair('/concepts', 'monthly', 0.8),
    ...getAllConceptSlugs().flatMap(({ slug, category }) => {
      const path = category === 'tithi'
        ? `/concepts/tithi/${slug}`
        : `/concepts/${slug}`;
      return pair(path, 'monthly', 0.8);
    }),
    ...['about', 'privacy', 'terms'].flatMap((page) =>
      pair(`/${page}`, 'monthly', 0.3)
    ),
  ];
}
