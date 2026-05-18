import { MetadataRoute } from 'next';
import { getActiveTools } from '@/config/tools';
import { getAllPosts } from '@/content/blog/posts';
import { LIFE_PATH_NUMBERS } from '@/lib/numerology/life-path-pages';
import { getAllConceptSlugs } from '@/lib/concepts';
import { getAllPlanetSlugs } from '@/lib/astrology/mahadasha';

const BASE_URL = 'https://www.vastucart.in';

/**
 * Slugs whose hero illustration is shipped under
 * /public/images/blog/<slug>/hero.webp. This list is the source of truth
 * for the image-sitemap extension — Google fetches only what's listed and
 * 404s on missing images dilute crawl trust. Confirmed by directory
 * walk on 2026-05-18: 37 illustrations are present at the path above and
 * cover every active tool plus the 7 most-trafficked blog post slugs.
 *
 * When a new tool or blog post adds a hero.webp, add its slug here so the
 * image enters the sitemap. The image-sitemap entries promote the assets
 * for Google Image search indexation — a channel currently delivering
 * zero impressions despite 37 production-quality illustrations existing.
 */
const SLUGS_WITH_HERO = new Set<string>([
  'angarak-yoga',
  'ashlesha-nakshatra',
  'bhagyodaya-year',
  'business-name',
  'career-predictor',
  'chaldean-numerology',
  'child-name',
  'destiny-number',
  'gemstone-recommender',
  'guru-chandal',
  'house-number',
  'kalsarp-dosha',
  'kundli',
  'lagna',
  'life-path-number',
  'lo-shu-grid',
  'love-compatibility-numerology',
  'lucky-bank-account-number',
  'lucky-color',
  'lucky-mobile-number',
  'lucky-number',
  'lucky-vehicle-number',
  'mahadasha',
  'manglik',
  'marriage-matching',
  'marriage-timing-predictor',
  'moon-sign',
  'muhurat-finder',
  'nakshatra',
  'name-correction',
  'neecha-bhanga',
  'parivartan-yoga',
  'pitra-dosha',
  'raj-yoga',
  'room-advisor',
  'sade-sati',
  'wealth-money-predictor',
]);

function heroImageUrl(slug: string): string | undefined {
  return SLUGS_WITH_HERO.has(slug)
    ? `${BASE_URL}/images/blog/${slug}/hero.webp`
    : undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const tools = getActiveTools();
  const posts = getAllPosts();
  const now = new Date();

  // Helper: create en + hi URL pair with hreflang alternates. The optional
  // `image` parameter promotes the page's hero illustration into the
  // image-sitemap extension. Each emitted entry carries `images: [url]`
  // which Next.js renders as <image:image><image:loc>...</image:loc>
  // </image:image> per the Google sitemap-image protocol — the surface
  // through which Image Search discovers and indexes assets.
  function pair(
    path: string,
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly',
    priority: number,
    lastModified: Date = now,
    image?: string,
  ): MetadataRoute.Sitemap {
    const enUrl = path ? `${BASE_URL}${path}` : BASE_URL;
    const hiUrl = `${BASE_URL}/hi${path}`;
    const alternates = { languages: { en: enUrl, hi: hiUrl, 'x-default': enUrl } };
    const images = image ? [image] : undefined;
    return [
      { url: enUrl, changeFrequency, priority, lastModified, alternates, images },
      { url: hiUrl, changeFrequency, priority, lastModified, alternates, images },
    ];
  }

  // English-only entry. Use for routes where the /hi/* variant exists but
  // serves the same English content (e.g., blog posts whose body components
  // have no Hindi rendering yet). Emitting only the English URL prevents
  // Google from treating the Hindi path as a duplicate of the English one
  // and avoids competing in SERPs against ourselves. When real Hindi
  // content lands, switch the route back to `pair()`.
  function single(
    path: string,
    changeFrequency: 'daily' | 'weekly' | 'monthly' | 'yearly',
    priority: number,
    lastModified: Date = now,
    image?: string,
  ): MetadataRoute.Sitemap {
    const enUrl = path ? `${BASE_URL}${path}` : BASE_URL;
    const images = image ? [image] : undefined;
    return [
      { url: enUrl, changeFrequency, priority, lastModified, images },
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
    // Hero image is promoted into image-sitemap when present (37 of 32
    // active tool slugs have shipped hero.webp; the few that don't will
    // be promoted as their illustrations land).
    ...tools.flatMap((tool) => pair(
      `/tools/${tool.slug}`,
      'weekly',
      0.9,
      now,
      heroImageUrl(tool.slug),
    )),
    // Programmatic Life Path Number meaning pages (1-9, 11, 22, 33).
    // Share the parent /tools/life-path-number hero.webp — the per-number
    // illustrations follow the same chart but with the focal number changed.
    ...LIFE_PATH_NUMBERS.flatMap((n) =>
      pair(`/tools/life-path-number/${n}`, 'monthly', 0.8, now, heroImageUrl('life-path-number'))
    ),
    // Programmatic Mahadasha planet pages (9 planets × 2 locales).
    // Long-form bilingual articles: effects, antardashas, house-by-house
    // results, classical remedies. Priority 0.8 — same as life-path-number,
    // below the parent tool page (0.9). Share parent /tools/mahadasha hero.
    ...getAllPlanetSlugs().flatMap((slug) =>
      pair(`/tools/mahadasha/${slug}`, 'monthly', 0.8, now, heroImageUrl('mahadasha'))
    ),
    // Blog hub + posts: English-only in the sitemap. The /hi/blog/* routes
    // still exist and respond, but their body components don't yet have
    // Hindi versions — they ship the English article body. Emitting them
    // as separate sitemap entries would create cross-locale duplicate
    // content competing with the English originals. When Hindi blog
    // content is authored, switch these back to pair().
    ...single('/blog', 'daily', 0.8),
    ...posts.flatMap((post) =>
      single(
        `/blog/${post.slug}`,
        'monthly',
        0.7,
        new Date(post.updatedAt),
        heroImageUrl(post.slug),
      )
    ),
    // Concept corpus (138 entities across 12 categories).
    // Tithis use nested /concepts/tithi/{slug} per shared contracts §3.4;
    // all other concepts use flat /concepts/{slug}.
    ...pair('/concepts', 'monthly', 0.8),
    ...getAllConceptSlugs().flatMap(({ slug, category }) => {
      const path = category === 'tithi'
        ? `/concepts/tithi/${slug}`
        : `/concepts/${slug}`;
      return pair(path, 'monthly', 0.8, now, heroImageUrl(slug));
    }),
    ...['about', 'privacy', 'terms'].flatMap((page) =>
      pair(`/${page}`, 'monthly', 0.3)
    ),
    // Editorial author profile — referenced as the Person `author` entity
    // on every article-shaped page (planet pages, life-path pages, concept
    // pages). Same-origin so Google's crawler doesn't have to follow a
    // cross-subdomain hop to verify authorship.
    ...pair('/authors/vastucart-editorial', 'monthly', 0.5),
  ];
}
