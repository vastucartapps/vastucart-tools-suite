import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, getAllPosts, getRelatedPosts } from '@/content/blog/posts';
import BlogContent from '@/components/blog/blog-content';

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

  return {
    title: post.seo.metaTitle,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [
        {
          url: post.images.hero,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: ['First Tools'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seo.metaTitle,
      description: post.seo.metaDescription,
      images: [post.images.hero],
    },
    alternates: {
      canonical: `https://firsttools.in/${locale}/blog/${slug}`,
      languages: {
        en: `/en/blog/${slug}`,
        hi: `/hi/blog/${slug}`,
      },
    },
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

  return (
    <div className="min-h-screen bg-cream-50 pattern-zodiac-subtle">
      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4">
        <ol className="flex items-center gap-2 text-sm text-gray-600">
          <li>
            <a href={`/${locale}`} className="hover:text-deepteal-600 transition-colors">
              Home
            </a>
          </li>
          <li className="text-gray-500">/</li>
          <li>
            <a href={`/${locale}/blog`} className="hover:text-deepteal-600 transition-colors">
              Blog
            </a>
          </li>
          <li className="text-gray-500">/</li>
          <li className="text-deepteal-700 font-medium truncate max-w-[200px]">
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
