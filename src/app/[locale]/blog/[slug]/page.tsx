import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/content/blog/posts';
import BlogContent from '@/components/blog/blog-content';
import { BlogPostEntityGraph } from '@/components/seo/entity-graph';
import {
  buildSocialMetadata,
  pageUrl,
  pickTitle,
  clampDescription,
} from '@/lib/seo/social-metadata';

// Import individual post content components
import KundliPost from '@/components/blog/posts/kundli-post';
import NakshatraPost from '@/components/blog/posts/nakshatra-post';
import MoonSignPost from '@/components/blog/posts/moon-sign-post';
import LagnaPost from '@/components/blog/posts/lagna-post';
import MahadashaPost from '@/components/blog/posts/mahadasha-post';
import ManglikPost from '@/components/blog/posts/manglik-post';
import SadeSatiPost from '@/components/blog/posts/sade-sati-post';
import PitraDoshaPost from '@/components/blog/posts/pitra-dosha-post';
import KalsarpDoshaPost from '@/components/blog/posts/kalsarp-dosha-post';
import LifePathNumberPost from '@/components/blog/posts/life-path-number-post';
import DestinyNumberPost from '@/components/blog/posts/destiny-number-post';
import LuckyNumberPost from '@/components/blog/posts/lucky-number-post';
import ChaldeanNumerologyPost from '@/components/blog/posts/chaldean-numerology-post';
import LoShuGridPost from '@/components/blog/posts/lo-shu-grid-post';
import BhagyodayaYearPost from '@/components/blog/posts/bhagyodaya-year-post';
import LuckyColorPost from '@/components/blog/posts/lucky-color-post';
import LuckyMobileNumberPost from '@/components/blog/posts/lucky-mobile-number-post';
import LuckyVehicleNumberPost from '@/components/blog/posts/lucky-vehicle-number-post';
import LuckyBankAccountPost from '@/components/blog/posts/lucky-bank-account-post';
import BusinessNamePost from '@/components/blog/posts/business-name-post';
import NameCorrectionPost from '@/components/blog/posts/name-correction-post';
import ChildNamePost from '@/components/blog/posts/child-name-post';
import LoveCompatibilityPost from '@/components/blog/posts/love-compatibility-post';
import HouseNumberPost from '@/components/blog/posts/house-number-post';
import RoomAdvisorPost from '@/components/blog/posts/room-advisor-post';
import RajYogaPost from '@/components/blog/posts/raj-yoga-post';
import WealthPredictorPost from '@/components/blog/posts/wealth-predictor-post';
import GuruChandalPost from '@/components/blog/posts/guru-chandal-post';
import NeechaBhangaPost from '@/components/blog/posts/neecha-bhanga-post';
import AngarakYogaPost from '@/components/blog/posts/angarak-yoga-post';
import ParivatanYogaPost from '@/components/blog/posts/parivartan-yoga-post';
import AshleshaNakshatraPost from '@/components/blog/posts/ashlesha-nakshatra-post';

// ISR: blog posts edited occasionally; daily regeneration is plenty.
export const revalidate = 86400;

interface BlogPostPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

// Generate static paths for all blog posts
export async function generateStaticParams() {
  const posts = getAllPosts();
  const locales = ['en', 'hi'];

  return locales.flatMap((locale) =>
    posts.map((post) => ({
      locale,
      slug: post.slug,
    }))
  );
}

// Generate metadata for SEO
export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const isHi = locale === 'hi';

  // Locale-aware title/description. Falls back to English when the Hindi
  // overrides are absent so we never ship a blank metadata field.
  const baseMetaTitle = isHi ? post.seo.metaTitleHi ?? post.seo.metaTitle : post.seo.metaTitle;
  const baseMetaDescription = isHi
    ? post.seo.metaDescriptionHi ?? post.seo.metaDescription
    : post.seo.metaDescription;
  const articleTitle = isHi ? post.titleHi ?? post.title : post.title;

  // Title cascade: prefer the full meta-title, then a brand-stripped form,
  // then the article title alone. Keeps SERP titles ≤ 70 chars without
  // sacrificing the most keyword-rich candidate.
  const fullTitle = baseMetaTitle;
  const noBrandTitle = baseMetaTitle.replace(/\s*\|\s*VastuCart\s*$/, '').trim();
  const noYearTitle = noBrandTitle.replace(/\s*\[\s*\d{4}\s*\]\s*/g, ' ').replace(/\s+/g, ' ').trim();
  const title = pickTitle([fullTitle, noBrandTitle, noYearTitle, articleTitle]);

  const description = clampDescription(baseMetaDescription, 160);

  const heroImage = post.images.hero.startsWith('http')
    ? post.images.hero
    : `https://www.vastucart.in${post.images.hero}`;

  return {
    title,
    description,
    keywords: post.seo.keywords,
    alternates: {
      canonical: isHi ? `/${locale}/blog/${slug}` : `/blog/${slug}`,
      languages: {
        en: `/blog/${slug}`,
        hi: `/hi/blog/${slug}`,
        'x-default': `/blog/${slug}`,
      },
    },
    ...buildSocialMetadata({
      title,
      description,
      url: pageUrl(locale, `/blog/${slug}`),
      locale,
      imageUrl: heroImage,
      type: 'article',
      article: {
        publishedTime: post.publishedAt,
        modifiedTime: post.updatedAt,
        authors: ['VastuCart'],
        section: post.category,
        tags: post.seo.keywords,
      },
    }),
  };
}

// Map slugs to content components
const POST_CONTENT_MAP: Record<string, React.ComponentType<{ locale: string }>> = {
  'kundli-birth-chart-guide': KundliPost,
  'nakshatra-birth-star-guide': NakshatraPost,
  'moon-sign-rashi-guide': MoonSignPost,
  'lagna-ascendant-guide': LagnaPost,
  'mahadasha-planetary-periods-guide': MahadashaPost,
  'manglik-dosha-calculator-mars-affliction': ManglikPost,
  'sade-sati-calculator-saturn-cycle': SadeSatiPost,
  'pitra-dosha-calculator-ancestral-karma': PitraDoshaPost,
  'kalsarp-dosha-calculator-serpent-affliction': KalsarpDoshaPost,
  'life-path-number-calculator-soul-purpose': LifePathNumberPost,
  'destiny-number-calculator-name-power': DestinyNumberPost,
  'lucky-number-calculator-personal-power': LuckyNumberPost,
  'chaldean-vs-pythagorean-numerology-comparison': ChaldeanNumerologyPost,
  'lo-shu-grid-calculator-magic-square': LoShuGridPost,
  'bhagyodaya-year-calculator-personal-cycle': BhagyodayaYearPost,
  'lucky-color-numerology-chromotherapy': LuckyColorPost,
  'lucky-mobile-number-calculator-phone': LuckyMobileNumberPost,
  'lucky-vehicle-number-calculator-car': LuckyVehicleNumberPost,
  'lucky-bank-account-number-wealth': LuckyBankAccountPost,
  'business-name-analyzer-numerology': BusinessNamePost,
  'name-correction-numerology-change-luck': NameCorrectionPost,
  'child-name-suggester-lucky-baby-names': ChildNamePost,
  'love-compatibility-numerology-soulmate': LoveCompatibilityPost,
  'house-number-meaning-home-numerology': HouseNumberPost,
  'room-advisor-vastu-furniture-placement': RoomAdvisorPost,
  'raj-yoga-calculator-success-luck': RajYogaPost,
  'wealth-money-predictor-financial-destiny': WealthPredictorPost,
  'guru-chandal-yoga-calculator-jupiter-rahu': GuruChandalPost,
  'neecha-bhanga-yoga-calculator-debilitation-cancel': NeechaBhangaPost,
  'angarak-yoga-calculator-mars-saturn': AngarakYogaPost,
  'parivartan-yoga-calculator-planetary-exchange': ParivatanYogaPost,
  'ashlesha-nakshatra-calculator-serpent-power': AshleshaNakshatraPost,
  // Add more posts as they're created
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { locale, slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedPosts(slug, 3);
  const PostContent = POST_CONTENT_MAP[slug];

  const heroImageUrl = post.images.hero.startsWith('http')
    ? post.images.hero
    : `https://www.vastucart.in${post.images.hero}`;

  return (
    <div className="min-h-screen bg-cream-50 pattern-zodiac-subtle">
      {/* Full @graph: Organization, Brand, WebSite, WebPage, BreadcrumbList,
          2 ImageObjects, BlogPosting, Person (author), FAQPage, Speakable. */}
      <BlogPostEntityGraph
        locale={locale}
        slug={slug}
        title={post.title}
        description={post.seo.metaDescription}
        datePublished={post.publishedAt}
        dateModified={post.updatedAt}
        heroImageUrl={heroImageUrl}
        faqs={post.faqs}
        articleSection={post.category}
        keywords={post.seo.keywords}
        readingTimeMinutes={post.readingTime}
      />

      {/* Breadcrumb — English has no /en prefix under as-needed localePrefix.
          Separators are rendered inside each non-last <li> as aria-hidden
          decoration so screen readers announce only "Home, Blog, <title>". */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <a
              href={locale === 'en' ? '/' : '/hi'}
              className="hover:text-deepteal-600 transition-colors"
            >
              {locale === 'hi' ? 'होम' : 'Home'}
            </a>
            <span aria-hidden="true" className="text-gray-400">/</span>
          </li>
          <li className="flex items-center gap-2">
            <a
              href={locale === 'en' ? '/blog' : '/hi/blog'}
              className="hover:text-deepteal-600 transition-colors"
            >
              {locale === 'hi' ? 'ब्लॉग' : 'Blog'}
            </a>
            <span aria-hidden="true" className="text-gray-400">/</span>
          </li>
          <li
            aria-current="page"
            className="text-deepteal-700 font-medium truncate max-w-[200px]"
          >
            {post.title}
          </li>
        </ol>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <BlogContent post={post} locale={locale} relatedPosts={relatedPosts}>
          {PostContent ? (
            <PostContent locale={locale} />
          ) : (
            <div className="text-center py-12 text-gray-600">
              <p>Content coming soon...</p>
            </div>
          )}
        </BlogContent>
      </main>
    </div>
  );
}
