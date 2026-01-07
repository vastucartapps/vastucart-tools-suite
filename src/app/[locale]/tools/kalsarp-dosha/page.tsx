import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import KalsarpCalculator from './calculator';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.kalsarp' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['कालसर्प दोष', 'राहु केतु', 'कुंडली दोष', 'वैदिक ज्योतिष', 'कालसर्प उपाय', 'कालसर्प पूजा']
      : ['kalsarp dosha', 'rahu ketu', 'kundli dosha', 'vedic astrology', 'kalsarp remedies', 'kalsarp puja'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function KalsarpPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'tools.astrology.kalsarp' });

  return (
    <>
      <WebApplicationSchema
        name={t('title')}
        description={t('description')}
        url={`https://www.vastucart.in/${locale}/tools/kalsarp-dosha`}
        locale={locale}
        toolSlug="kalsarp-dosha"
      />
      <ToolBreadcrumbSchema
        toolName={t('title')}
        toolSlug="kalsarp-dosha"
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        locale={locale}
      />
      <KalsarpCalculator locale={locale as 'en' | 'hi'} />
    </>
  );
}
