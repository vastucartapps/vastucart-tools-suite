import { Metadata } from 'next';
import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { Calculator, Star, Home, Calendar, ArrowRight, Lock } from 'lucide-react';
import {
  TOOL_CATEGORIES,
  CATEGORY_NAMES,
  CATEGORY_DESCRIPTIONS,
  type ToolCategory,
} from '@/config/tools';
import {
  getToolTranslation,
  formatSlugToTitle,
  validateLocale,
} from '@/lib/utils/translations';

interface Props {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ category?: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  return {
    title: locale === 'en' ? 'All Tools' : 'सभी टूल्स',
    description:
      locale === 'en'
        ? 'Explore our complete collection of Numerology, Astrology, and Vastu Shastra calculators and tools.'
        : 'हमारे अंकशास्त्र, ज्योतिष और वास्तु शास्त्र कैलकुलेटर और टूल्स का पूरा संग्रह देखें।',
    alternates: {
      canonical: `/${locale}/tools`,
      languages: {
        en: '/en/tools',
        hi: '/hi/tools',
      },
    },
  };
}

// Icon mapping for categories
const CATEGORY_ICONS = {
  numerology: Calculator,
  astrology: Star,
  vastu: Home,
  muhurat: Calendar,
} as const;

export default async function ToolsPage({ params, searchParams }: Props) {
  const { locale: rawLocale } = await params;
  const { category } = await searchParams;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const activeCategory = category as ToolCategory | undefined;
  const tTools = await getTranslations({ locale, namespace: 'tools' });

  // Filter categories based on active filter
  const categories = activeCategory
    ? TOOL_CATEGORIES.filter((c) => c.id === activeCategory)
    : TOOL_CATEGORIES;

  return (
    <div className="min-h-screen bg-cream-50 pattern-zodiac">
      {/* Header */}
      <header className="py-16 text-center relative">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-1/4 w-48 h-48 rounded-full bg-deepteal-200 opacity-10 blur-3xl" />
          <div className="absolute bottom-10 right-1/4 w-48 h-48 rounded-full bg-warmaccent-200 opacity-10 blur-3xl" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4">
          <h1 className="text-display-2 font-bold text-gray-900 mb-4 tracking-tight">
            {locale === 'en' ? 'All Tools' : 'सभी टूल्स'}
          </h1>
          <p className="text-body-lg text-gray-600 leading-relaxed">
            {locale === 'en'
              ? 'Explore our complete collection of spiritual calculators and tools'
              : 'हमारे आध्यात्मिक कैलकुलेटर और टूल्स का पूरा संग्रह देखें'}
          </p>
        </div>
      </header>

      {/* Category Filters */}
      <div className="max-w-7xl mx-auto px-4 mb-10">
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href={`/${locale}/tools`}
            className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 ${
              !activeCategory
                ? 'bg-gradient-to-r from-deepteal-600 to-deepteal-700 text-white shadow-lg scale-105'
                : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-sm'
            }`}
          >
            {locale === 'en' ? 'All' : 'सभी'}
          </Link>
          {TOOL_CATEGORIES.map((category) => {
            const CategoryIcon = CATEGORY_ICONS[category.id];
            return (
              <Link
                key={category.id}
                href={`/${locale}/tools?category=${category.id}`}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 hover:border-gray-300 hover:shadow-sm'
                }`}
              >
                <CategoryIcon className="w-4 h-4" />
                {CATEGORY_NAMES[category.id][locale]}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Tools Grid */}
      <main className="max-w-7xl mx-auto px-4 pb-16">
        {categories.map((category) => {
          const CategoryIcon = CATEGORY_ICONS[category.id];
          return (
            <section key={category.id} className="mb-12 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}
                >
                  <CategoryIcon className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {CATEGORY_NAMES[category.id][locale]}
                  </h2>
                  <p className="text-gray-600">
                    {CATEGORY_DESCRIPTIONS[category.id][locale]}
                  </p>
                </div>
              </div>

              {/* Tools Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {category.tools.map((tool) => {
                  const fallbackTitle = formatSlugToTitle(tool.slug);
                  const title = getToolTranslation(
                    tTools,
                    category.translationKey,
                    tool.translationKey,
                    'shortTitle',
                    fallbackTitle
                  );
                  const description = getToolTranslation(
                    tTools,
                    category.translationKey,
                    tool.translationKey,
                    'description',
                    ''
                  );

                  // Category border colors (static for Tailwind purging)
                  const borderColors = {
                    numerology: 'border-l-deepteal-400',
                    astrology: 'border-l-warmaccent-400',
                    vastu: 'border-l-amber-400',
                    muhurat: 'border-l-amber-500',
                  };

                  return (
                    <Link
                      key={tool.slug}
                      href={`/${locale}/tools/${tool.slug}`}
                      className={`group relative bg-white rounded-2xl p-5 shadow-elevation-2 transition-all duration-200 hover:shadow-elevation-3 hover:-translate-y-0.5 border-l-4 ${
                        tool.isPremium
                          ? 'border-l-warmaccent-400 ring-1 ring-warmaccent-100'
                          : borderColors[category.id]
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
                          {tool.icon}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-gray-900 group-hover:text-deepteal-600 transition-colors mb-1">
                            {title}
                          </h3>
                          {description && (
                            <p className="text-sm text-gray-500 line-clamp-2">
                              {description}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <span
                          className={`text-xs font-medium px-2.5 py-1 rounded-full ${category.bgColor} ${category.textColor}`}
                        >
                          {CATEGORY_NAMES[category.id][locale]}
                        </span>
                        <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-deepteal-600 group-hover:translate-x-1 transition-all" />
                      </div>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </main>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-deepteal-600 to-deepteal-700 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            {locale === 'en'
              ? "Can't find what you're looking for?"
              : 'जो आप खोज रहे हैं वह नहीं मिला?'}
          </h2>
          <p className="text-deepteal-100 mb-6">
            {locale === 'en'
              ? "We're constantly adding new tools. Let us know what you'd like to see!"
              : 'हम लगातार नए टूल्स जोड़ रहे हैं। हमें बताएं कि आप क्या देखना चाहेंगे!'}
          </p>
          <a
            href="mailto:feedback@vastucart.in"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-deepteal-700 font-semibold rounded-xl hover:bg-deepteal-50 transition-colors"
          >
            {locale === 'en' ? 'Request a Tool' : 'टूल का अनुरोध करें'}
          </a>
        </div>
      </section>
    </div>
  );
}
