import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import ChildNameCalculator from './calculator';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';
import { FAQSection } from '@/components/tools/faq-section';
import { EducationalSection } from '@/components/tools/educational-section';
import { LegalDisclaimerServer } from '@/components/tools/legal-disclaimer-server';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'childName' });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    authors: [{ name: 'VastuCart' }],
    creator: 'VastuCart',
    publisher: 'VastuCart',
    robots: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
    alternates: {
      canonical: `/${locale}/tools/child-name`,
      languages: {
        en: '/en/tools/child-name',
        hi: '/hi/tools/child-name',
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url: `https://www.vastucart.in/${locale}/tools/child-name`,
      siteName: 'VastuCart',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      type: 'website',
      images: [{
        url: `https://www.vastucart.in/og-images/child-name.jpg`,
        width: 1200,
        height: 630,
        alt: t('meta.title'),
      }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@vastucart',
      creator: '@vastucart',
      title: t('meta.title'),
      description: t('meta.description'),
      images: [`https://www.vastucart.in/og-images/child-name.jpg`],
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

  return (
    <div className="min-h-screen bg-cream-50 pattern-zodiac">
      <WebApplicationSchema
        name={t('meta.title')}
        description={t('meta.description')}
        url={`https://www.vastucart.in/${locale}/tools/child-name`}
        locale={locale}
        toolSlug="child-name"
      />
      <ToolBreadcrumbSchema
        toolName={t('meta.title')}
        toolSlug="child-name"
        categoryName={locale === 'hi' ? 'अंकशास्त्र' : 'Numerology'}
        categorySlug="numerology"
        locale={locale}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-deepteal-500 to-pink-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl">👶</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {t('meta.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('meta.description')}</p>
        </header>

        {/* Calculator */}
        <ChildNameCalculator locale={locale} translations={translations} />

        {/* Educational Section */}
        <div className="mt-8">
          <EducationalSection
            title={t('educational.title')}
            content={t.raw('educational.content') as string[]}
            blogLink={`/${locale}/blog/child-name-suggester-lucky-baby-names`}
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
