import { getTranslations, getLocale } from 'next-intl/server';
import { Metadata } from 'next';
import BhagyodayaCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'bhagyodaya' });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    alternates: {
      canonical: `${baseUrl}/${locale}/tools/bhagyodaya-year`,
      languages: {
        en: `${baseUrl}/en/tools/bhagyodaya-year`,
        hi: `${baseUrl}/hi/tools/bhagyodaya-year`,
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url: `${baseUrl}/${locale}/tools/bhagyodaya-year`,
      siteName: 'Vastu Tools',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      type: 'website',
    },
  };
}

export default async function BhagyodayaPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'bhagyodaya' });

  const translations = {
    title: t('calculator.title'),
    dateOfBirth: t('calculator.dateOfBirth'),
    name: t('calculator.name'),
    nameOptional: t('calculator.nameOptional'),
    calculate: t('calculator.calculate'),
    calculating: t('calculator.calculating'),
    results: {
      title: t('results.title'),
      coreNumbers: t('results.coreNumbers'),
      lifePathNumber: t('results.lifePathNumber'),
      birthDayNumber: t('results.birthDayNumber'),
      destinyNumber: t('results.destinyNumber'),
      currentAge: t('results.currentAge'),
      primaryBhagyodaya: t('results.primaryBhagyodaya'),
      fortuneYear: t('results.fortuneYear'),
      fortuneYears: t('results.fortuneYears'),
      pinnacles: t('results.pinnacles'),
      challenges: t('results.challenges'),
      saturnReturn: t('results.saturnReturn'),
      jupiterCycles: t('results.jupiterCycles'),
      currentYear: t('results.currentYear'),
      lifePhase: t('results.lifePhase'),
      upcomingPeaks: t('results.upcomingPeaks'),
      timeline: t('results.timeline'),
      major: t('results.major'),
      moderate: t('results.moderate'),
      minor: t('results.minor'),
      current: t('results.current'),
      past: t('results.past'),
      future: t('results.future'),
      preparation: t('results.preparation'),
      opportunities: t('results.opportunities'),
      howToOvercome: t('results.howToOvercome'),
    },
    placeholders: {
      day: t('calculator.placeholders.day'),
      month: t('calculator.placeholders.month'),
      year: t('calculator.placeholders.year'),
      name: t('calculator.placeholders.name'),
    },
    months: [
      t('months.january'),
      t('months.february'),
      t('months.march'),
      t('months.april'),
      t('months.may'),
      t('months.june'),
      t('months.july'),
      t('months.august'),
      t('months.september'),
      t('months.october'),
      t('months.november'),
      t('months.december'),
    ],
  };

  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: t('meta.title'),
    description: t('meta.description'),
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'}/${locale}/tools/bhagyodaya-year`,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    inLanguage: locale === 'hi' ? 'hi' : 'en',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-teal-50/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl">🌟</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {t('meta.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('meta.description')}</p>
        </header>

        {/* Calculator */}
        <BhagyodayaCalculator locale={locale} translations={translations} />

        {/* Info Section */}
        <section className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('info.title')}</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">{t('info.description')}</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              {t('info.whatIsTitle')}
            </h3>
            <p className="text-gray-600 leading-relaxed">{t('info.whatIsDescription')}</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              {t('info.howItWorksTitle')}
            </h3>
            <p className="text-gray-600 leading-relaxed">{t('info.howItWorksDescription')}</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              {t('info.componentsTitle')}
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{t('info.component1')}</li>
              <li>{t('info.component2')}</li>
              <li>{t('info.component3')}</li>
              <li>{t('info.component4')}</li>
              <li>{t('info.component5')}</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('faq.title')}</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('faq.q1')}</h3>
              <p className="text-gray-600">{t('faq.a1')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('faq.q2')}</h3>
              <p className="text-gray-600">{t('faq.a2')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('faq.q3')}</h3>
              <p className="text-gray-600">{t('faq.a3')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('faq.q4')}</h3>
              <p className="text-gray-600">{t('faq.a4')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
