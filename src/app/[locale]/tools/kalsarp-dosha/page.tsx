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
      canonical: `/${locale}/tools/kalsarp-dosha`,
      languages: {
        en: '/en/tools/kalsarp-dosha',
        hi: '/hi/tools/kalsarp-dosha',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: `https://www.vastucart.in/${locale}/tools/kalsarp-dosha`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/og-images/kalsarp-dosha.jpg`,
        width: 1200,
        height: 630,
        alt: title,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@vastucart',
      creator: '@vastucart',
      title,
      description,
      images: [`https://www.vastucart.in/og-images/kalsarp-dosha.jpg`],
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
