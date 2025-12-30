import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import HouseNumberCalculator from './calculator';
import { JsonLd } from '@/components/seo/json-ld';
import { FAQSection } from '@/components/tools/faq-section';
import { EducationalSection } from '@/components/tools/educational-section';
import { LegalDisclaimerServer } from '@/components/tools/legal-disclaimer-server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'houseNumber' });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://vastucart.in';

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    alternates: {
      canonical: `${baseUrl}/${locale}/tools/house-number`,
      languages: {
        en: `${baseUrl}/en/tools/house-number`,
        hi: `${baseUrl}/hi/tools/house-number`,
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url: `${baseUrl}/${locale}/tools/house-number`,
      siteName: 'Divine Life by VastuCart',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      type: 'website',
    },
  };
}

export default async function HouseNumberPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'houseNumber' });

  const translations = {
    title: t('calculator.title'),
    houseNumber: t('calculator.houseNumber'),
    houseNumberPlaceholder: t('calculator.houseNumberPlaceholder'),
    includeOwnerDob: t('calculator.includeOwnerDob'),
    ownerDob: t('calculator.ownerDob'),
    calculate: t('calculator.calculate'),
    calculating: t('calculator.calculating'),
    results: {
      title: t('results.title'),
      reducedNumber: t('results.reducedNumber'),
      calculationSteps: t('results.calculationSteps'),
      planet: t('results.planet'),
      element: t('results.element'),
      direction: t('results.direction'),
      keywords: t('results.keywords'),
      bestFor: t('results.bestFor'),
      challenges: t('results.challenges'),
      luckyColors: t('results.luckyColors'),
      luckyDays: t('results.luckyDays'),
      compatibility: t('results.compatibility'),
      compatibilityScore: t('results.compatibilityScore'),
      remedies: t('results.remedies'),
      enhancements: t('results.enhancements'),
      verdict: t('results.verdict'),
      excellent: t('results.excellent'),
      good: t('results.good'),
      neutral: t('results.neutral'),
      challenging: t('results.challenging'),
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
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://vastucart.in'}/${locale}/tools/house-number`,
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
    <div className="min-h-screen bg-cream-50 pattern-zodiac">
      <JsonLd data={schemaData} />

      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-warmaccent-500 to-orange-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl">🔢</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {t('meta.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('meta.description')}</p>
        </header>

        {/* Calculator */}
        <HouseNumberCalculator locale={locale} translations={translations} />

        {/* Educational Section */}
        <div className="mt-8">
          <EducationalSection
            title={t('educational.title')}
            content={t.raw('educational.content') as string[]}
            blogLink={`/${locale}/blog/house-number-meaning-home-numerology`}
            blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
          />
        </div>

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
              {t('info.numbersTitle')}
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{t('info.number1')}</li>
              <li>{t('info.number2')}</li>
              <li>{t('info.number3')}</li>
              <li>{t('info.number4')}</li>
              <li>{t('info.number5')}</li>
              <li>{t('info.number6')}</li>
              <li>{t('info.number7')}</li>
              <li>{t('info.number8')}</li>
              <li>{t('info.number9')}</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="mt-8">
          <FAQSection
            faqs={t.raw('faqs') as Array<{question: string; answer: string}>}
            title={locale === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
          />
        </div>

        {/* Legal Disclaimer */}
        <LegalDisclaimerServer locale={locale} />
      </div>
    </div>
  );
}
