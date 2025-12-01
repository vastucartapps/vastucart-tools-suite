import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import LagnaCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.lagna' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['लग्न', 'जन्म लग्न', 'लग्न कैलकुलेटर', 'वैदिक ज्योतिष', 'राशि', 'कुंडली']
      : ['lagna', 'ascendant', 'lagna calculator', 'vedic astrology', 'rising sign', 'kundli'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function LagnaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'tools.astrology.lagna' });

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <header className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {t('title')}
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('description')}
        </p>
      </header>

      <LagnaCalculator locale={locale as 'en' | 'hi'} />

      {/* Educational Content */}
      <section className="mt-12 prose prose-gray max-w-none">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {t('about.title')}
        </h2>
        <p className="text-gray-700 mb-4">
          {t('about.description')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          {t('about.importanceTitle')}
        </h3>
        <p className="text-gray-700 mb-4">
          {t('about.importanceDescription')}
        </p>

        <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">
          {t('about.calculationTitle')}
        </h3>
        <p className="text-gray-700 mb-4">
          {t('about.calculationDescription')}
        </p>
      </section>

      {/* FAQ Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {t('faq.title')}
        </h2>
        <div className="space-y-4">
          {(['q1', 'q2', 'q3', 'q4'] as const).map((key) => (
            <details
              key={key}
              className="bg-white border border-gray-200 rounded-lg p-4 group"
            >
              <summary className="font-medium text-gray-900 cursor-pointer list-none flex justify-between items-center">
                {t(`faq.${key}.question`)}
                <span className="ml-2 text-gray-500 group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <p className="mt-3 text-gray-600">
                {t(`faq.${key}.answer`)}
              </p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
