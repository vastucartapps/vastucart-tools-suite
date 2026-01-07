import Link from 'next/link';
import { getTranslations } from 'next-intl/server';
import { ArrowRight, Sparkles, Eye, Languages, Gift, Calculator, Star, Home, Calendar, Clock, BookOpen } from 'lucide-react';
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
    <div className="min-h-screen bg-cream-50 pattern-zodiac-subtle">
      {/* Hero Section with Name Story CTA */}
      <section className="relative py-12 md:py-24 overflow-hidden bg-gradient-to-br from-cream-50/80 via-deepteal-50/30 to-cream-100/80">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated gradient orbs - richer colors */}
          <div className="absolute top-10 md:top-20 left-5 md:left-10 w-48 md:w-72 h-48 md:h-72 rounded-full bg-gradient-to-br from-deepteal-400 to-deepteal-600 opacity-15 blur-3xl animate-float" />
          <div
            className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-48 md:w-72 h-48 md:h-72 rounded-full bg-gradient-to-br from-warmaccent-400 to-warmaccent-600 opacity-15 blur-3xl animate-float"
            style={{ animationDelay: '3s' }}
          />
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 pattern-dots opacity-30" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-display-2 md:text-display-1 font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-deepteal-600 to-warmaccent-500 bg-clip-text text-transparent">
                {t('hero.title')}
              </span>
            </h1>
            <p className="text-body-lg md:text-xl text-gray-600 mb-10 leading-relaxed">
              {t('hero.subtitle')}
            </p>

            {/* Name Story CTA - integrated into hero */}
            <NameStoryCTA locale={locale} />
          </div>
        </div>
      </section>

      {/* Separator between Hero and Tools */}
      <div className="section-separator-lotus">
        <span className="lotus-icon">❈</span>
      </div>

      {/* Tool Categories */}
      <section className="pt-8 pb-16 bg-cream-50/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {TOOL_CATEGORIES.map((category) => {
            const CategoryIcon = CATEGORY_ICONS[category.id];

            return (
              <div key={category.id} className="mb-16 last:mb-0">
                {/* Category Header - Responsive */}
                <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
                  <div
                    className={`w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                  >
                    <CategoryIcon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-lg md:text-2xl font-bold text-gray-900">
                      {CATEGORY_NAMES[category.id][locale]}
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 line-clamp-1 md:line-clamp-none">
                      {CATEGORY_DESCRIPTIONS[category.id][locale]}
                    </p>
                  </div>
                </div>

                {/* Tools Grid - 2 cols on mobile */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
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
                          className="relative bg-gray-50 rounded-xl md:rounded-2xl p-3 md:p-5 border border-gray-200 opacity-75"
                        >
                          <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
                            <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gray-200 flex items-center justify-center text-lg md:text-2xl flex-shrink-0 grayscale">
                              {tool.icon}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h3 className="font-semibold text-gray-500 text-sm md:text-base">
                                {title}
                              </h3>
                              <p className="hidden md:block text-sm text-gray-500 line-clamp-2 mt-1">
                                {description}
                              </p>
                            </div>
                          </div>
                          <span className="inline-flex items-center gap-1 mt-2 md:mt-3 px-2 py-0.5 bg-gray-200 text-gray-600 text-xs font-medium rounded-full">
                            <Clock className="w-3 h-3" />
                            {locale === 'en' ? 'Soon' : 'जल्द'}
                          </span>
                        </div>
                      );
                    }

                    return (
                      <Link
                        key={tool.slug}
                        href={`/${locale}/tools/${tool.slug}`}
                        className="group bg-white rounded-xl md:rounded-2xl p-3 md:p-5 shadow-elevation-2 border border-transparent transition-all duration-200 hover:shadow-elevation-3 hover:-translate-y-0.5 hover:border-deepteal-200"
                      >
                        <div className="flex flex-col md:flex-row items-center md:items-start gap-2 md:gap-4 text-center md:text-left">
                          {/* Styled icon container */}
                          <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-deepteal-50 to-deepteal-100 flex items-center justify-center text-lg md:text-2xl flex-shrink-0 shadow-sm transition-transform duration-200 group-hover:scale-105">
                            {tool.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-semibold text-gray-900 group-hover:text-deepteal-600 transition-colors text-sm md:text-base">
                              {title}
                            </h3>
                            <p className="hidden md:block text-sm text-gray-500 line-clamp-2 mt-1">
                              {description}
                            </p>
                          </div>
                          <ArrowRight className="hidden md:block w-5 h-5 text-gray-500 group-hover:text-deepteal-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
                        </div>

                        {tool.isPremium && (
                          <span className="inline-block mt-2 md:mt-3 px-2 py-0.5 bg-gradient-to-r from-warmaccent-500 to-warmaccent-600 text-white text-xs font-medium rounded-full shadow-sm">
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
                    className="inline-flex items-center gap-2 text-deepteal-600 hover:text-deepteal-700 font-medium transition-colors"
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

      {/* Section Divider */}
      <div className="section-divider-ornate">
        <span className="text-deepteal-400 text-2xl">&#10022;</span>
      </div>

      {/* Features Section */}
      <section className="py-10 md:py-16 bg-cream-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl md:text-heading-1 font-bold text-center text-gray-900 mb-8 md:mb-12">
            {locale === 'en' ? 'Why Choose Us?' : 'हमें क्यों चुनें?'}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 stagger-children">
            {features.map((feature) => {
              const FeatureIcon = feature.icon;
              return (
                <div
                  key={feature.id}
                  className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 text-center shadow-elevation-2 border border-transparent transition-all duration-200 hover:shadow-elevation-3 hover:border-deepteal-100"
                >
                  <div className="relative w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-5">
                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-xl md:rounded-2xl bg-gradient-to-br from-deepteal-400 to-warmaccent-400 opacity-20 blur-lg" />
                    <div className="relative w-full h-full rounded-xl md:rounded-2xl bg-gradient-to-br from-deepteal-500 to-warmaccent-500 flex items-center justify-center shadow-lg">
                      <FeatureIcon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1 md:mb-2 text-sm md:text-base">
                    {t(`features.${feature.id}.title`)}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed line-clamp-3 md:line-clamp-none">
                    {t(`features.${feature.id}.description`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-deepteal-600 to-deepteal-700">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{t('cta.title')}</h2>
          <p className="text-deepteal-100 mb-8">{t('cta.subtitle')}</p>
          <Link
            href={`/${locale}/tools/life-path-number`}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-deepteal-700 font-semibold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            {t('cta.button')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Store CTA */}
      <section className="py-12 bg-cream-50/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-warmaccent-50 to-warmaccent-100 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
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
              href="https://www.vastucart.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 px-6 py-3 bg-gradient-to-r from-warmaccent-500 to-warmaccent-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              {locale === 'en' ? 'Visit VastuCart' : 'वास्तुकार्ट देखें'}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
