import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import LuckyColorCalculator from './calculator';
import { WebApplicationSchema } from '@/components/seo/json-ld';
import { validateLocale } from '@/lib/utils/translations';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.luckyColor',
  });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: [
      'lucky color calculator',
      'numerology colors',
      'vedic color therapy',
      'planetary colors',
      'chakra colors',
      'auspicious colors',
      locale === 'hi' ? 'भाग्यशाली रंग' : '',
      locale === 'hi' ? 'अंकशास्त्र रंग' : '',
    ].filter(Boolean),
    alternates: {
      canonical: `/${locale}/tools/lucky-color`,
      languages: {
        en: '/en/tools/lucky-color',
        hi: '/hi/tools/lucky-color',
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
    },
  };
}

export default async function LuckyColorPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.luckyColor',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('meta.title')}
        description={t('meta.description')}
        url={`https://vastutools.com/${locale}/tools/lucky-color`}
        locale={locale}
      />

      <div className="min-h-screen bg-cream-50 pattern-zodiac py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white text-3xl mb-4 shadow-lg">
              🎨
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>

          {/* Calculator */}
          <LuckyColorCalculator />

          {/* Information Section */}
          <div className="mt-12 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t('info.title')}
            </h2>
            <div className="prose prose-teal max-w-none">
              <p className="text-gray-600 leading-relaxed mb-4">
                {t('info.description')}
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                {t('info.howItWorks.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('info.howItWorks.description')}
              </p>

              <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">
                {t('info.planetaryColors.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('info.planetaryColors.description')}
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {t('faq.title')}
            </h2>
            <div className="space-y-6">
              {[1, 2, 3, 4, 5].map((num) => (
                <div
                  key={num}
                  className="border-b border-gray-100 pb-4 last:border-0"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {t(`faq.q${num}.question`)}
                  </h3>
                  <p className="text-gray-600">{t(`faq.q${num}.answer`)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
