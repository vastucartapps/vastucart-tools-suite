import { Metadata } from 'next';
import Link from 'next/link';
import { BookOpen, Clock, ArrowRight, Calendar } from 'lucide-react';
import { getAllPosts, BlogPost } from '@/content/blog/posts';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const titles = {
    en: 'Blog - Divine Life | Vedic Knowledge & Spiritual Insights',
    hi: 'ब्लॉग - डिवाइन लाइफ | वैदिक ज्ञान और आध्यात्मिक अंतर्दृष्टि',
  };

  const descriptions = {
    en: 'Explore articles on numerology, Vedic astrology, vastu shastra, and spiritual wisdom. Learn ancient sciences made simple for modern life.',
    hi: 'अंकशास्त्र, वैदिक ज्योतिष, वास्तु शास्त्र और आध्यात्मिक ज्ञान पर लेख पढ़ें। प्राचीन विज्ञान को आधुनिक जीवन के लिए सरल बनाना।',
  };

  return {
    title: titles[locale as 'en' | 'hi'] || titles.en,
    description: descriptions[locale as 'en' | 'hi'] || descriptions.en,
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        en: '/en/blog',
        hi: '/hi/blog',
      },
    },
    openGraph: {
      title: titles[locale as 'en' | 'hi'] || titles.en,
      description: descriptions[locale as 'en' | 'hi'] || descriptions.en,
      url: `https://tools.vastucart.in/${locale}/blog`,
      siteName: 'Divine Life by VastuCart',
      type: 'website',
    },
  };
}

const categoryColors = {
  numerology: 'bg-teal-100 text-teal-700',
  astrology: 'bg-saffron-100 text-saffron-700',
  vastu: 'bg-amber-100 text-amber-700',
  general: 'bg-gray-100 text-gray-700',
};

const categoryNames = {
  numerology: { en: 'Numerology', hi: 'अंकशास्त्र' },
  astrology: { en: 'Astrology', hi: 'ज्योतिष' },
  vastu: { en: 'Vastu', hi: 'वास्तु' },
  general: { en: 'General', hi: 'सामान्य' },
};

function BlogCard({ post, locale }: { post: BlogPost; locale: string }) {
  const lang = locale as 'en' | 'hi';

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image placeholder with gradient */}
      <div className="h-48 bg-gradient-to-br from-teal-500 to-saffron-500 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <BookOpen className="w-16 h-16 text-white/30" />
        </div>
        {post.featured && (
          <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 text-teal-600 text-xs font-semibold rounded-full">
            {locale === 'en' ? 'Featured' : 'विशेष'}
          </span>
        )}
      </div>

      <div className="p-6">
        {/* Category & Reading Time */}
        <div className="flex items-center gap-3 mb-3">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${categoryColors[post.category]}`}>
            {categoryNames[post.category][lang]}
          </span>
          <span className="flex items-center gap-1 text-gray-500 text-sm">
            <Clock className="w-4 h-4" />
            {post.readingTime} {locale === 'en' ? 'min read' : 'मिनट'}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors line-clamp-2">
          {post.title[lang]}
        </h2>

        {/* Excerpt */}
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
          {post.excerpt[lang]}
        </p>

        {/* Date & Read More */}
        <div className="flex items-center justify-between">
          <span className="flex items-center gap-1 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            {new Date(post.publishedAt).toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </span>
          <span className="flex items-center gap-1 text-teal-600 font-medium text-sm group-hover:gap-2 transition-all">
            {locale === 'en' ? 'Read More' : 'और पढ़ें'}
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-cream-50 pattern-zodiac">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-teal-600 to-teal-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
            <BookOpen className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            {locale === 'en' ? 'Divine Life Blog' : 'डिवाइन लाइफ ब्लॉग'}
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            {locale === 'en'
              ? 'Explore the wisdom of Vedic sciences through our articles and guides'
              : 'हमारे लेखों और गाइड के माध्यम से वैदिक विज्ञान की बुद्धि का अन्वेषण करें'}
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {posts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <BlogCard key={post.slug} post={post} locale={locale} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h2 className="text-xl text-gray-600">
                {locale === 'en' ? 'No posts yet. Check back soon!' : 'अभी कोई पोस्ट नहीं। जल्द ही देखें!'}
              </h2>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            {locale === 'en' ? 'Ready to Explore?' : 'अन्वेषण के लिए तैयार?'}
          </h2>
          <p className="text-gray-600 mb-6">
            {locale === 'en'
              ? 'Try our free calculators to discover your numbers and cosmic influences'
              : 'अपनी संख्याओं और ब्रह्मांडीय प्रभावों को जानने के लिए हमारे मुफ्त कैलकुलेटर आज़माएं'}
          </p>
          <Link
            href={`/${locale}/tools`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition-colors"
          >
            {locale === 'en' ? 'Explore Tools' : 'टूल्स देखें'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
