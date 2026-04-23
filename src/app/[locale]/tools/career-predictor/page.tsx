import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { ToolPageEntityGraph } from '@/components/seo/entity-graph';
import { FAQSection } from '@/components/tools/faq-section';
import CareerPredictorCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

function validateLocale(locale: string): 'en' | 'hi' {
  return locale === 'hi' ? 'hi' : 'en';
}

// ISR: tool pages are deterministic shells — calculations run client-side
// and inputs aren't part of the URL, so the rendered HTML is stable.
export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  const t = await getTranslations({
    locale,
    namespace: 'tools.astrology.careerPredictor',
  });

  return {
    title: { absolute: t('meta.title') },
    description: t('meta.description'),
    keywords: t('meta.keywords').split(', '),
    alternates: {
      canonical: locale === 'en' ? '/tools/career-predictor' : `/${locale}/tools/career-predictor`,
      languages: {
        en: '/tools/career-predictor',
        hi: '/hi/tools/career-predictor',
        'x-default': '/tools/career-predictor',
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

export default async function CareerPredictorPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: 'tools.astrology.careerPredictor',
  });
  const faqs = (t.raw('faqs') as Array<{ question: string; answer: string }> | undefined) ?? [];

  return (
    <>
      <ToolPageEntityGraph
        locale={locale}
        toolSlug="career-predictor"
        toolName={t('meta.title')}
        toolDescription={t('meta.description')}
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        faqs={faqs}
        heroImageUrl="https://www.vastucart.in/images/blog/career-predictor/hero.webp"
      />
      <div className="min-h-screen bg-cream-50 pattern-zodiac py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {t('meta.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('meta.description')}
            </p>
          </header>
          <CareerPredictorCalculator locale={locale} />
          <div className="mt-8">
            <FAQSection
              faqs={t.raw('faqs') as Array<{question: string; answer: string}>}
              title={locale === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
            />
          </div>
        </div>
      </div>
    </>
  );
}
