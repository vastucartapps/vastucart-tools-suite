import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import ChildNameCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'childName' });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com';

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    alternates: {
      canonical: `${baseUrl}/${locale}/tools/child-name`,
      languages: {
        en: `${baseUrl}/en/tools/child-name`,
        hi: `${baseUrl}/hi/tools/child-name`,
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url: `${baseUrl}/${locale}/tools/child-name`,
      siteName: 'Vastu Tools',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      type: 'website',
    },
  };
}

export default async function ChildNamePage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'childName' });

  const translations = {
    title: t('calculator.title'),
    fatherDob: t('calculator.fatherDob'),
    motherDob: t('calculator.motherDob'),
    childGender: t('calculator.childGender'),
    genderOptions: {
      male: t('calculator.genderOptions.male'),
      female: t('calculator.genderOptions.female'),
      any: t('calculator.genderOptions.any'),
    },
    desiredQualities: t('calculator.desiredQualities'),
    selectQualities: t('calculator.selectQualities'),
    startingLetter: t('calculator.startingLetter'),
    anyLetter: t('calculator.anyLetter'),
    calculate: t('calculator.calculate'),
    calculating: t('calculator.calculating'),
    results: {
      title: t('results.title'),
      parentNumbers: t('results.parentNumbers'),
      fatherLifePath: t('results.fatherLifePath'),
      motherLifePath: t('results.motherLifePath'),
      fatherBirthDay: t('results.fatherBirthDay'),
      motherBirthDay: t('results.motherBirthDay'),
      harmonyNumber: t('results.harmonyNumber'),
      idealNumbers: t('results.idealNumbers'),
      recommendedLetters: t('results.recommendedLetters'),
      nameSuggestions: t('results.nameSuggestions'),
      compatibilityScore: t('results.compatibilityScore'),
      meaning: t('results.meaning'),
      numerologyNumber: t('results.numerologyNumber'),
      matchReason: t('results.matchReason'),
      traits: t('results.traits'),
      guidance: t('results.guidance'),
      noResults: t('results.noResults'),
    },
    placeholders: {
      day: t('calculator.placeholders.day'),
      month: t('calculator.placeholders.month'),
      year: t('calculator.placeholders.year'),
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
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://example.com'}/${locale}/tools/child-name`,
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl">👶</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {t('meta.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('meta.description')}</p>
        </header>

        {/* Calculator */}
        <ChildNameCalculator locale={locale} translations={translations} />

        {/* Info Section */}
        <section className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('info.title')}</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">{t('info.description')}</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              {t('info.howItWorksTitle')}
            </h3>
            <p className="text-gray-600 leading-relaxed">{t('info.howItWorksDescription')}</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              {t('info.factorsTitle')}
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{t('info.factor1')}</li>
              <li>{t('info.factor2')}</li>
              <li>{t('info.factor3')}</li>
              <li>{t('info.factor4')}</li>
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
