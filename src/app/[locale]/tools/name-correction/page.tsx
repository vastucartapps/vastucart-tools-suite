import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import NameCorrectionCalculator from './calculator';
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
    namespace: 'tools.numerology.nameCorrection',
  });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: [
      'name correction numerology',
      'name spelling change',
      'numerology name change',
      'name correction suggestions',
      'favorable name numerology',
      locale === 'hi' ? 'नाम सुधार अंकशास्त्र' : '',
      locale === 'hi' ? 'शुभ नाम' : '',
    ].filter(Boolean),
    alternates: {
      canonical: `/${locale}/tools/name-correction`,
      languages: {
        en: '/en/tools/name-correction',
        hi: '/hi/tools/name-correction',
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

export default async function NameCorrectionPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.nameCorrection',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('meta.title')}
        description={t('meta.description')}
        url={`https://vastutools.com/${locale}/tools/name-correction`}
        locale={locale}
      />

      <div className="min-h-screen bg-cream-50 pattern-zodiac py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white text-3xl mb-4 shadow-lg">
              ✏️
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>

          {/* Calculator */}
          <NameCorrectionCalculator />

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
                {t('info.systems.title')}
              </h3>
              <p className="text-gray-600 mb-4">
                {t('info.systems.description')}
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-8 bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {locale === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
            </h2>
            <div className="space-y-6">
              {(t.raw('faqs') as Array<{question: string; answer: string}>).map((faq, idx) => (
                <div
                  key={idx}
                  className="border-b border-gray-100 pb-4 last:border-0"
                >
                  <h3 className="font-semibold text-gray-800 mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
