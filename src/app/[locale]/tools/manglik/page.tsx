import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import ManglikCalculator from './calculator';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.manglik' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['मांगलिक', 'मंगल दोष', 'कुजा दोष', 'वैदिक ज्योतिष', 'विवाह मिलान', 'मांगलिक दोष उपाय']
      : ['manglik', 'mangal dosha', 'kuja dosha', 'vedic astrology', 'marriage compatibility', 'manglik remedies'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function ManglikPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'tools.astrology.manglik' });

  return (
    <>
      <WebApplicationSchema
        name={t('title')}
        description={t('description')}
        url={`https://vastucart.in/${locale}/tools/manglik`}
        locale={locale}
        toolSlug="manglik"
      />
      <ToolBreadcrumbSchema
        toolName={t('title')}
        toolSlug="manglik"
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        locale={locale}
      />
      <ManglikCalculator locale={locale as 'en' | 'hi'} />
    </>
  );
}
