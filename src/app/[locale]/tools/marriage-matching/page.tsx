import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import MarriageMatchingCalculator from './calculator';
import { ToolPageEntityGraph } from '@/components/seo/entity-graph';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.marriage' });

  const title = t('meta.title');
  const description = t('description');

  return {
    title: { absolute: title },
    description,
    keywords: locale === 'hi'
      ? ['कुंडली मिलान', 'गुण मिलान', 'अष्टकूट', 'विवाह मिलान', 'राशि मिलान', '36 गुण']
      : ['kundli matching', 'gun milan', 'ashtakoot', 'marriage matching', 'horoscope matching', '36 gunas'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function MarriageMatchingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'tools.astrology.marriage' });
  const faqs = (t.raw('faqs') as Array<{ question: string; answer: string }> | undefined) ?? [];

  return (
    <>
      <ToolPageEntityGraph
        locale={locale}
        toolSlug="marriage-matching"
        toolName={t('title')}
        toolDescription={t('description')}
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        faqs={faqs}
        heroImageUrl="https://www.vastucart.in/images/blog/marriage-matching/hero.webp"
      />
      <MarriageMatchingCalculator locale={locale as 'en' | 'hi'} />
    </>
  );
}
