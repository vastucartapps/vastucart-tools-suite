import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import LagnaCalculator from './calculator';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.lagna' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['लग्न', 'जन्म लग्न', 'लग्न कैलकुलेटर', 'वैदिक ज्योतिष', 'राशि', 'कुंडली']
      : ['lagna', 'ascendant', 'lagna calculator', 'vedic astrology', 'rising sign', 'kundli'],
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
      canonical: `/${locale}/tools/lagna`,
      languages: {
        en: '/en/tools/lagna',
        hi: '/hi/tools/lagna',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: `https://www.vastucart.in/${locale}/tools/lagna`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/og-images/lagna.jpg`,
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
      images: [`https://www.vastucart.in/og-images/lagna.jpg`],
    },
  };
}

export default async function LagnaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'tools.astrology.lagna' });

  return (
    <>
      <WebApplicationSchema
        name={t('title')}
        description={t('description')}
        url={`https://www.vastucart.in/${locale}/tools/lagna`}
        locale={locale}
        toolSlug="lagna"
      />
      <ToolBreadcrumbSchema
        toolName={t('title')}
        toolSlug="lagna"
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        locale={locale}
      />
      <LagnaCalculator locale={locale as 'en' | 'hi'} />
    </>
  );
}
