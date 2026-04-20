/**
 * Category-specific tools listing — /tools/category/{category}.
 *
 * One route per ToolCategory (numerology, astrology, vastu, muhurat).
 * Each page has:
 *   - Canonical URL distinct from /tools and from the other categories
 *   - Keyword-targeted title + meta description from CATEGORY_SEO
 *   - H1 matching the search-intent keyword for the category
 *   - ItemList schema containing only this category's tools
 *   - Own sitemap entry at priority 0.9 (see src/app/sitemap.ts)
 *
 * The legacy /tools?category=X URL is 301-redirected to this route in
 * next.config.ts to preserve any existing link equity.
 */
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/navigation';
import { getTranslations } from 'next-intl/server';
import { Calculator, Star, Home, Calendar, ArrowRight, ChevronRight, Lock, BookOpen, Compass } from 'lucide-react';
import { ToolIcon } from '@/components/ui/tool-icon';
import {
  TOOL_CATEGORIES,
  CATEGORY_NAMES,
  CATEGORY_SEO,
  getCategoryById,
  type ToolCategory,
} from '@/config/tools';
import {
  getToolTranslation,
  formatSlugToTitle,
  validateLocale,
} from '@/lib/utils/translations';
import { ToolsCategoryEntityGraph } from '@/components/seo/entity-graph';
import { loadConcept, conceptPath } from '@/lib/concepts';
import { getPostBySlug } from '@/content/blog/posts';

interface Props {
  params: Promise<{ locale: string; category: string }>;
}

const CATEGORY_IDS: ToolCategory[] = ['numerology', 'astrology', 'vastu', 'muhurat'];

const CATEGORY_ICONS = {
  numerology: Calculator,
  astrology: Star,
  vastu: Home,
  muhurat: Calendar,
} as const;

function isValidCategory(value: string): value is ToolCategory {
  return (CATEGORY_IDS as string[]).includes(value);
}

/** Pre-render every category × locale combination at build time. */
export function generateStaticParams() {
  const locales = ['en', 'hi'];
  return locales.flatMap((locale) =>
    CATEGORY_IDS.map((category) => ({ locale, category }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, category } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  if (!isValidCategory(category)) {
    return { title: 'Category Not Found' };
  }
  const seo = CATEGORY_SEO[category];
  const canonical = `/tools/category/${category}`;
  return {
    title: seo.title[locale],
    description: seo.description[locale],
    alternates: {
      canonical: locale === 'en' ? canonical : `/${locale}${canonical}`,
      languages: {
        en: canonical,
        hi: `/hi${canonical}`,
        'x-default': canonical,
      },
    },
  };
}

export default async function ToolsCategoryPage({ params }: Props) {
  const { locale: rawLocale, category } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';

  if (!isValidCategory(category)) {
    notFound();
  }

  const tTools = await getTranslations({ locale, namespace: 'tools' });
  const categoryDef = getCategoryById(category);
  if (!categoryDef) notFound();

  const seo = CATEGORY_SEO[category];
  const CategoryIcon = CATEGORY_ICONS[category];

  // Only this category's tools land in the emitted ItemList schema.
  const itemListTools = categoryDef.tools.map((tool) => {
    const name = getToolTranslation(
      tTools,
      categoryDef.translationKey,
      tool.translationKey,
      'shortTitle',
      formatSlugToTitle(tool.slug),
    );
    const description = getToolTranslation(
      tTools,
      categoryDef.translationKey,
      tool.translationKey,
      'description',
      '',
    );
    return { name, slug: tool.slug, description };
  });

  const borderColors = {
    numerology: 'border-l-deepteal-400',
    astrology: 'border-l-warmaccent-400',
    vastu: 'border-l-amber-400',
    muhurat: 'border-l-amber-500',
  };

  // Related concepts — resolved at build time from the 138-concept corpus.
  // Missing slugs (e.g., content not yet authored) are silently dropped so
  // a copy/content gap never breaks the page.
  const relatedConcepts = seo.relatedConceptSlugs
    .map((slug) => {
      const c = loadConcept(slug);
      if (!c) return null;
      return {
        slug: c.slug,
        name: c.ascii || c.name,
        devanagari: c.devanagari,
        description: c.description,
        path: conceptPath(c),
      };
    })
    .filter((x): x is NonNullable<typeof x> => x !== null);

  const relatedBlogPosts = seo.relatedBlogSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div className="min-h-screen bg-cream-50 pattern-zodiac">
      <ToolsCategoryEntityGraph
        locale={locale}
        categoryId={category}
        categoryName={CATEGORY_NAMES[category][locale]}
        title={seo.title[locale]}
        description={seo.description[locale]}
        tools={itemListTools}
        faqs={seo.faqs[locale]}
      />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="max-w-7xl mx-auto px-4 pt-6 text-sm text-gray-600 flex flex-wrap items-center gap-1"
      >
        <Link href="/" className="hover:text-deepteal-700">
          {locale === 'en' ? 'Home' : 'होम'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/tools" className="hover:text-deepteal-700">
          {locale === 'en' ? 'Tools' : 'टूल्स'}
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-gray-800 font-medium">{CATEGORY_NAMES[category][locale]}</span>
      </nav>

      {/* Header */}
      <header className="py-12 text-center relative">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-48 h-48 rounded-full bg-deepteal-200 opacity-10 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-warmaccent-200 opacity-10 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <div className={`inline-flex items-center justify-center w-16 h-16 mb-4 rounded-2xl bg-gradient-to-br ${categoryDef.color} shadow-lg`}>
            <CategoryIcon className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-display-2 font-bold text-gray-900 mb-3 tracking-tight">
            {seo.heading[locale]}
          </h1>
          <p className="text-body-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
            {seo.tagline[locale]}
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {locale === 'en'
              ? `${categoryDef.tools.length} tools available`
              : `${categoryDef.tools.length} टूल्स उपलब्ध`}
          </div>
        </div>
      </header>

      {/* Category filter pills — link to sibling category pages */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/tools"
            className="px-6 py-2.5 rounded-full font-medium transition-all duration-200 bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-sm"
          >
            {locale === 'en' ? 'All' : 'सभी'}
          </Link>
          {TOOL_CATEGORIES.map((c) => {
            const Icon = CATEGORY_ICONS[c.id];
            const isActive = c.id === category;
            return (
              <Link
                key={c.id}
                href={`/tools/category/${c.id}`}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                  isActive
                    ? `bg-gradient-to-r ${c.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <Icon className="w-4 h-4" />
                {CATEGORY_NAMES[c.id][locale]}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Intro — classically grounded body copy, ~150–250 words. Renders
          above the grid so Googlebot has substantive, keyword-rich prose
          before encountering the card links. */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-white rounded-2xl shadow-elevation-1 border border-gray-100 p-6 md:p-8">
          <div className="prose prose-slate max-w-none">
            {seo.intro[locale].map((para, i) => (
              <p
                key={i}
                className="text-gray-700 leading-relaxed mb-4 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Grid — category-filtered */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categoryDef.tools.map((tool) => {
            const fallbackTitle = formatSlugToTitle(tool.slug);
            const title = getToolTranslation(
              tTools,
              categoryDef.translationKey,
              tool.translationKey,
              'shortTitle',
              fallbackTitle,
            );
            const description = getToolTranslation(
              tTools,
              categoryDef.translationKey,
              tool.translationKey,
              'description',
              '',
            );

            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className={`group relative bg-white rounded-2xl p-5 shadow-elevation-2 transition-all duration-200 hover:shadow-elevation-3 hover:-translate-y-0.5 border-l-4 ${
                  tool.isPremium
                    ? 'border-l-warmaccent-400 ring-1 ring-warmaccent-100'
                    : borderColors[category]
                }`}
              >
                {tool.isPremium && (
                  <span className="absolute top-3 right-3 px-2 py-0.5 bg-gradient-to-r from-warmaccent-500 to-warmaccent-600 text-white text-xs font-medium rounded-full flex items-center gap-1 shadow-sm">
                    <Lock className="w-3 h-3" />
                    PRO
                  </span>
                )}

                <div className="flex items-start gap-4">
                  <span className="text-3xl transition-transform duration-200 group-hover:scale-110">
                    <ToolIcon name={tool.icon} className="w-7 h-7 text-deepteal-600" />
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-gray-900 group-hover:text-deepteal-600 transition-colors mb-1">
                      {title}
                    </h3>
                    {description && (
                      <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryDef.bgColor} ${categoryDef.textColor}`}
                  >
                    {CATEGORY_NAMES[category][locale]}
                  </span>
                  <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-deepteal-600 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      {/* Related Concepts — anchors the category inside the 138-entry
          concept corpus. Skipped silently when no slugs resolve. */}
      {relatedConcepts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <Compass className="w-6 h-6 text-deepteal-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              {locale === 'en' ? 'Related Concepts' : 'संबंधित अवधारणाएँ'}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {relatedConcepts.map((c) => (
              <Link
                key={c.slug}
                href={c.path}
                className="group bg-white rounded-xl p-5 shadow-elevation-1 border border-gray-100 hover:shadow-elevation-2 hover:border-deepteal-200 transition-all"
              >
                <div className="flex items-baseline gap-2 mb-1.5">
                  <h3 className="font-semibold text-gray-900 group-hover:text-deepteal-700 transition-colors">
                    {c.name}
                  </h3>
                  {c.devanagari && (
                    <span className="text-sm text-gray-400 font-devanagari">
                      {c.devanagari}
                    </span>
                  )}
                </div>
                {c.description && (
                  <p className="text-sm text-gray-600 line-clamp-2">
                    {c.description}
                  </p>
                )}
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-deepteal-600 group-hover:text-deepteal-700">
                  {locale === 'en' ? 'Read more' : 'और पढ़ें'}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* Related Reading — surfaces deep-dive blog posts linked to this
          category. Built-in dedupe via filter; category-less posts skipped. */}
      {relatedBlogPosts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pb-16">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="w-6 h-6 text-deepteal-600" />
            <h2 className="text-2xl font-bold text-gray-900">
              {locale === 'en' ? 'Related Reading' : 'संबंधित लेख'}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {relatedBlogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-xl p-5 shadow-elevation-1 border border-gray-100 hover:shadow-elevation-2 hover:border-deepteal-200 transition-all"
              >
                <h3 className="font-semibold text-gray-900 group-hover:text-deepteal-700 transition-colors mb-1.5">
                  {post.title}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                  {post.description}
                </p>
                <div className="inline-flex items-center gap-1 text-xs font-medium text-deepteal-600 group-hover:text-deepteal-700">
                  {locale === 'en' ? 'Read the guide' : 'गाइड पढ़ें'}
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* FAQ — visible Q&A rendered alongside the FAQPage schema emitted
          by ToolsCategoryEntityGraph. Google requires the question text
          in both schema and visible DOM to count the rich result. */}
      {seo.faqs[locale].length > 0 && (
        <section className="max-w-4xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            {locale === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
          </h2>
          <div className="space-y-3">
            {seo.faqs[locale].map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-xl border border-gray-200 shadow-elevation-1 open:shadow-elevation-2"
              >
                <summary className="flex items-start justify-between gap-4 px-5 py-4 cursor-pointer list-none font-semibold text-gray-900 hover:text-deepteal-700">
                  <span>{faq.question}</span>
                  <ChevronRight className="w-5 h-5 text-gray-400 shrink-0 mt-0.5 transition-transform group-open:rotate-90" />
                </summary>
                <div className="px-5 pb-5 pt-1 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-deepteal-600 to-deepteal-700 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {locale === 'en' ? 'Explore All Categories' : 'सभी श्रेणियाँ देखें'}
          </h2>
          <p className="text-deepteal-100 mb-6">
            {locale === 'en'
              ? 'Numerology, astrology, vāstu, and muhūrta — all classically grounded, all free.'
              : 'अंकशास्त्र, ज्योतिष, वास्तु और मुहूर्त — शास्त्रीय आधार पर, सभी निःशुल्क।'}
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-deepteal-700 font-semibold rounded-xl hover:bg-deepteal-50 transition-colors"
          >
            {locale === 'en' ? 'View All Tools' : 'सभी टूल्स देखें'}
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
