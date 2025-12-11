import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Clock, Calendar, ArrowLeft, ArrowRight, User } from 'lucide-react';
import { getBlogPost, getAllPosts, blogPosts } from '@/content/blog/posts';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateStaticParams() {
  const locales = ['en', 'hi'];
  const params: { locale: string; slug: string }[] = [];

  for (const locale of locales) {
    for (const post of blogPosts) {
      params.push({ locale, slug: post.slug });
    }
  }

  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  const lang = locale as 'en' | 'hi';

  return {
    title: `${post.title[lang]} - Divine Life Blog`,
    description: post.excerpt[lang],
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        en: `/en/blog/${slug}`,
        hi: `/hi/blog/${slug}`,
      },
    },
    openGraph: {
      title: post.title[lang],
      description: post.excerpt[lang],
      url: `https://tools.vastucart.in/${locale}/blog/${slug}`,
      siteName: 'Divine Life by VastuCart',
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author],
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

export default async function BlogPostPage({ params }: Props) {
  const { locale, slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const lang = locale as 'en' | 'hi';
  const allPosts = getAllPosts();
  const currentIndex = allPosts.findIndex((p) => p.slug === slug);
  const prevPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < allPosts.length - 1 ? allPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-cream-50">
      {/* Header */}
      <section className="py-12 bg-gradient-to-b from-teal-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Link */}
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-teal-200 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {locale === 'en' ? 'Back to Blog' : 'ब्लॉग पर वापस'}
          </Link>

          {/* Category */}
          <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${categoryColors[post.category]} mb-4`}>
            {categoryNames[post.category][lang]}
          </span>

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">{post.title[lang]}</h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-teal-200">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.publishedAt).toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readingTime} {locale === 'en' ? 'min read' : 'मिनट पढ़ने का समय'}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 md:p-12">
            {/* Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8 pb-8 border-b border-gray-200">
              {post.excerpt[lang]}
            </p>

            {/* Main Content */}
            <div
              className="prose prose-lg prose-gray max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4
                prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
                prose-p:text-gray-600 prose-p:leading-relaxed
                prose-ul:text-gray-600 prose-li:my-1
                prose-strong:text-gray-900
                prose-a:text-teal-600 prose-a:no-underline hover:prose-a:underline"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content[lang]) }}
            />
          </div>

          {/* Related Tools */}
          {post.relatedTools && post.relatedTools.length > 0 && (
            <div className="mt-8 bg-gradient-to-r from-teal-50 to-saffron-50 rounded-2xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {locale === 'en' ? 'Try Related Tools' : 'संबंधित टूल्स आज़माएं'}
              </h3>
              <div className="flex flex-wrap gap-3">
                {post.relatedTools.map((toolSlug) => (
                  <Link
                    key={toolSlug}
                    href={`/${locale}/tools/${toolSlug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-teal-600 font-medium hover:bg-teal-50 transition-colors"
                  >
                    {formatToolName(toolSlug)}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {prevPost && (
              <Link
                href={`/${locale}/blog/${prevPost.slug}`}
                className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow group"
              >
                <ArrowLeft className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
                <div>
                  <p className="text-sm text-gray-500">{locale === 'en' ? 'Previous' : 'पिछला'}</p>
                  <p className="font-medium text-gray-900 line-clamp-1">{prevPost.title[lang]}</p>
                </div>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/${locale}/blog/${nextPost.slug}`}
                className="flex items-center justify-end gap-3 p-4 bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow group md:col-start-2"
              >
                <div className="text-right">
                  <p className="text-sm text-gray-500">{locale === 'en' ? 'Next' : 'अगला'}</p>
                  <p className="font-medium text-gray-900 line-clamp-1">{nextPost.title[lang]}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors" />
              </Link>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}

function formatContent(content: string): string {
  // Simple markdown-like formatting
  return content
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(?!<[hul])/gm, '<p>')
    .replace(/(?<![>])$/gm, '</p>')
    .replace(/<p><\/p>/g, '')
    .replace(/<p>(<[hul])/g, '$1')
    .replace(/(<\/[hul][^>]*>)<\/p>/g, '$1');
}

function formatToolName(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
