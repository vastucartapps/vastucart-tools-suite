import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, ArrowRight, Search, Filter } from 'lucide-react';
import { getAllPosts, getPostsByCategory, BLOG_CATEGORIES, type BlogPost } from '@/content/blog/posts';

interface BlogPageProps {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
    title: locale === 'hi'
      ? 'ब्लॉग | ज्योतिष और अंकशास्त्र गाइड'
      : 'Blog | Astrology & Numerology Guides',
    description: locale === 'hi'
      ? 'वैदिक ज्योतिष, अंकशास्त्र, और वास्तु शास्त्र पर व्यापक गाइड। विशेषज्ञ अंतर्दृष्टि और मुफ्त कैलकुलेटर।'
      : 'Comprehensive guides on Vedic astrology, numerology, and Vastu shastra. Expert insights and free calculators.',
    alternates: {
      canonical: `https://firsttools.in/${locale}/blog`,
      languages: {
        en: '/en/blog',
        hi: '/hi/blog',
      },
    },
  };
}

// Blog Post Card Component
function BlogPostCard({ post, locale }: { post: BlogPost; locale: string }) {
  const categoryColors = {
    numerology: 'bg-deepteal-500',
    astrology: 'bg-warmaccent-500',
    vastu: 'bg-amber-500',
    general: 'bg-gray-500',
  };

  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className="group bg-white rounded-2xl border border-deepteal-100 overflow-hidden hover:shadow-xl hover:border-warmaccent-300 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={post.images.hero}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span className={`${categoryColors[post.category]} text-white text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide`}>
            {post.category}
          </span>
        </div>
        {post.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-gradient-to-r from-warmaccent-500 to-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
              ⭐ Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h2 className="text-xl font-bold text-deepteal-800 group-hover:text-warmaccent-700 transition-colors line-clamp-2 mb-3">
          {post.title}
        </h2>
        <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
          {post.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-4 border-t border-deepteal-50">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Clock className="w-4 h-4" />
            <span>{post.readingTime} min read</span>
          </div>
          <span className="flex items-center gap-1 text-warmaccent-600 font-medium text-sm group-hover:gap-2 transition-all">
            Read More
            <ArrowRight className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}

// Category Filter Component
function CategoryFilter({
  activeCategory,
  locale
}: {
  activeCategory: string | null;
  locale: string;
}) {
  const categories = [
    { key: null, label: 'All', count: getAllPosts().length },
    ...Object.entries(BLOG_CATEGORIES).map(([key, value]) => ({
      key,
      label: value.label,
      count: getPostsByCategory(key as BlogPost['category']).length,
    })),
  ];

  return (
    <div className="flex flex-wrap items-center gap-3 mb-8">
      <span className="flex items-center gap-2 text-gray-600 font-medium">
        <Filter className="w-4 h-4" />
        Filter:
      </span>
      {categories.map((cat) => (
        <Link
          key={cat.key ?? 'all'}
          href={cat.key ? `/${locale}/blog?category=${cat.key}` : `/${locale}/blog`}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
            activeCategory === cat.key
              ? 'bg-deepteal-600 text-white shadow-md'
              : 'bg-cream-100 text-deepteal-700 hover:bg-deepteal-100'
          }`}
        >
          {cat.label}
          <span className="ml-2 text-xs opacity-70">({cat.count})</span>
        </Link>
      ))}
    </div>
  );
}

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const { locale } = await params;
  const { category } = await searchParams;

  // Get posts based on filter
  const posts = category
    ? getPostsByCategory(category as BlogPost['category'])
    : getAllPosts();

  const featuredPosts = posts.filter(p => p.featured).slice(0, 3);
  const regularPosts = posts.filter(p => !featuredPosts.includes(p));

  return (
    <div className="min-h-screen bg-gradient-to-b from-cream-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-deepteal-700 via-deepteal-600 to-deepteal-800 text-white py-16 md:py-24">
        <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {locale === 'hi' ? 'ज्ञान का भंडार' : 'Knowledge Hub'}
            </h1>
            <p className="text-lg md:text-xl text-deepteal-100 leading-relaxed">
              {locale === 'hi'
                ? 'वैदिक ज्योतिष, अंकशास्त्र, और वास्तु शास्त्र पर विशेषज्ञ गाइड और अंतर्दृष्टि'
                : 'Expert guides and insights on Vedic astrology, numerology, and Vastu shastra'}
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cream-50 to-transparent" />
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        {/* Category Filter */}
        <CategoryFilter activeCategory={category ?? null} locale={locale} />

        {/* Featured Posts */}
        {featuredPosts.length > 0 && !category && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
                ⭐
              </span>
              Featured Articles
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} locale={locale} />
              ))}
            </div>
          </div>
        )}

        {/* All Posts */}
        <div>
          <h2 className="text-2xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-deepteal-100 text-deepteal-600">
              📚
            </span>
            {category ? BLOG_CATEGORIES[category as keyof typeof BLOG_CATEGORIES]?.label : 'All'} Articles
          </h2>

          {posts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPosts.map((post) => (
                <BlogPostCard key={post.slug} post={post} locale={locale} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-cream-50 rounded-2xl">
              <div className="text-6xl mb-4">📝</div>
              <h3 className="text-xl font-semibold text-deepteal-800 mb-2">
                No articles yet
              </h3>
              <p className="text-gray-600">
                We're working on creating amazing content. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-br from-deepteal-600 to-deepteal-700 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-deepteal-100 mb-8 max-w-xl mx-auto">
            Get the latest insights on astrology and numerology delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl text-gray-800 focus:outline-none focus:ring-2 focus:ring-warmaccent-500"
            />
            <button className="bg-warmaccent-500 hover:bg-warmaccent-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
