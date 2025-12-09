import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { ArrowRight, Sparkles, Eye, Languages, Gift, Calculator, Star, Home, Calendar, Clock } from 'lucide-react';
import {
  TOOL_CATEGORIES,
  CATEGORY_NAMES,
  CATEGORY_DESCRIPTIONS,
} from '@/config/tools';
import {
  getToolTranslation,
  formatSlugToTitle,
  validateLocale,
} from '@/lib/utils/translations';
import { NameStoryCTA } from '@/components/home/NameStoryCTA';

// Icon mapping for categories
const CATEGORY_ICONS = {
  numerology: Calculator,
  astrology: Star,
  vastu: Home,
  muhurat: Calendar,
} as const;

interface Props {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const t = await getTranslations({ locale, namespace: 'home' });
  const tTools = await getTranslations({ locale, namespace: 'tools' });

  const features = [
    { id: 'accurate', icon: Sparkles },
    { id: 'transparent', icon: Eye },
    { id: 'bilingual', icon: Languages },
    { id: 'free', icon: Gift },
  ];

  return (
    <div className="min-h-screen pattern-zodiac-subtle">
      {/* Hero Section with Name Story CTA */}
      <section className="relative py-16 md:py-24 overflow-hidden bg-gradient-to-b from-cream-50/90 to-white/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-teal-600 to-saffron-500 bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              {t('hero.subtitle')}
            </p>

            {/* Name Story CTA - integrated into hero */}
            <NameStoryCTA locale={locale} />
          </div>
        </div>

        {/* Decorative elements - simplified for better performance */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-teal-200 rounded-full opacity-10" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-saffron-200 rounded-full opacity-10" />
      </section>

      {/* Tool Categories */}
      <section className="py-16 bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {TOOL_CATEGORIES.map((category) => {
            const CategoryIcon = CATEGORY_ICONS[category.id];

            return (
              <div key={category.id} className="mb-16 last:mb-0">
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-8">
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
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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

                    // For inactive tools, show a non-clickable card with "Coming Soon"
                    if (!tool.isActive) {
                      return (
                        <div
                          key={tool.slug}
                          className="relative bg-gray-50 rounded-2xl p-5 border border-gray-200 opacity-75"
                        >
                          <div className="flex items-start gap-4">
                            <span className="text-3xl flex-shrink-0 grayscale">{tool.icon}</span>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-500">
                                {title}
                              </h3>
                              {description && (
                                <p className="text-sm text-gray-400 line-clamp-2 mt-1">
                                  {description}
                                </p>
                              )}
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1 mt-3 px-2 py-0.5 bg-gray-200 text-gray-600 text-xs font-medium rounded-full">
                            <Clock className="w-3 h-3" />
                            {locale === 'en' ? 'Coming Soon' : 'जल्द आ रहा है'}
                          </span>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={tool.slug}
                        href={`/${locale}/tools/${tool.slug}`}
                        className="group bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 hover:border-teal-200"
                      >
                        <div className="flex items-start gap-4">
                          <span className="text-3xl flex-shrink-0">{tool.icon}</span>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 group-hover:text-teal-600 transition-colors">
                              {title}
                            </h3>
                            {description && (
                              <p className="text-sm text-gray-500 line-clamp-2 mt-1">
                                {description}
                              </p>
                            )}
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-teal-600 transition-colors flex-shrink-0" />
                        </div>

                        {tool.isPremium && (
                          <span className="inline-block mt-3 px-2 py-0.5 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white text-xs font-medium rounded-full">
                            PRO
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>

                {/* View All Link */}
                <div className="mt-6 text-center">
                  <Link
                    href={`/${locale}/tools?category=${category.id}`}
                    className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
                  >
                    {locale === 'en'
                      ? `View all ${CATEGORY_NAMES[category.id].en} tools`
                      : `सभी ${CATEGORY_NAMES[category.id].hi} टूल्स देखें`}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-cream-50/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            {locale === 'en' ? 'Why Choose Us?' : 'हमें क्यों चुनें?'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="bg-white rounded-2xl p-6 text-center shadow-md"
                >
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-br from-teal-500 to-saffron-500 flex items-center justify-center">
                    <FeatureIcon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    {t(`features.${feature.id}.title`)}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {t(`features.${feature.id}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-teal-100 mb-8">{t('cta.subtitle')}</p>
          <Link
            href={`/${locale}/tools/life-path-number`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-teal-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            {t('cta.button')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Store CTA */}
      <section className="py-12 bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-saffron-50 to-saffron-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {locale === 'en'
                  ? 'Looking for Vastu Products?'
                  : 'वास्तु उत्पाद खोज रहे हैं?'}
              </h2>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Explore authentic yantras, gemstones, and spiritual items at our store.'
                  : 'हमारे स्टोर पर प्रामाणिक यंत्र, रत्न और आध्यात्मिक वस्तुएं देखें।'}
              </p>
            </div>
            <a
              href="https://vastucart.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              {locale === 'en' ? 'Visit VastuCart' : 'वास्तुकार्ट देखें'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
