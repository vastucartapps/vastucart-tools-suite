import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { ToolPageEntityGraph } from '@/components/seo/entity-graph';
import { FAQSection } from '@/components/tools/faq-section';
import { getToolHowTo } from '@/lib/seo/tool-howto';
import CareerPredictorCalculator from './calculator';
import {
  buildSocialMetadata,
  pageUrl,
  pickTitle,
  clampDescription,
} from '@/lib/seo/social-metadata';

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

  const rawTitle = t('meta.title');
  const title = pickTitle([
    rawTitle,
    rawTitle.replace(/\s*\|\s*VastuCart\s*$/, '').trim(),
  ]);
  const description = clampDescription(t('meta.description'), 160);
  const canonical = '/tools/career-predictor';
  return {
    title: { absolute: title },
    description,
    keywords: t('meta.keywords').split(', '),
    alternates: {
      canonical: locale === 'en' ? canonical : `/${locale}${canonical}`,
      languages: {
        en: canonical,
        hi: `/hi${canonical}`,
        'x-default': canonical,
      },
    },
    ...buildSocialMetadata({
      title,
      description,
      url: pageUrl(locale, canonical),
      locale,
      type: 'website',
    }),
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
        howTo={getToolHowTo('careerPredictor', locale)}
      />
      <div className="min-h-screen bg-cream-50 pattern-zodiac py-8 px-4">
        <div className="max-w-4xl mx-auto">
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
