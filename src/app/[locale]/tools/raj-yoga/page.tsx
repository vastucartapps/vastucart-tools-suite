import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import RajYogaCalculator from './calculator';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.rajYoga' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['राजयोग', 'गजकेसरी योग', 'पंच महापुरुष योग', 'वैदिक ज्योतिष', 'कुंडली योग', 'धन योग']
      : ['raj yoga', 'gaja kesari yoga', 'panch mahapurusha yoga', 'vedic astrology', 'kundli yoga', 'dhana yoga'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function RajYogaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'tools.astrology.rajYoga' });

  return (
    <>
      <WebApplicationSchema
        name={t('title')}
        description={t('description')}
        url={`https://vastucart.in/${locale}/tools/raj-yoga`}
        locale={locale}
        toolSlug="raj-yoga"
      />
      <ToolBreadcrumbSchema
        toolName={t('title')}
        toolSlug="raj-yoga"
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        locale={locale}
      />
      <RajYogaCalculator locale={locale as 'en' | 'hi'} />
    </>
  );
}
