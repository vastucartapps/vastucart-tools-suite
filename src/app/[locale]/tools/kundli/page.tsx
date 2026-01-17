import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import KundliCalculator from './calculator';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.kundli' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['कुंडली', 'जन्मकुंडली', 'जन्म पत्रिका', 'वैदिक ज्योतिष', 'राशिफल', 'ग्रह स्थिति']
      : ['kundli', 'birth chart', 'janam patri', 'vedic astrology', 'horoscope', 'planetary positions'],
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
      canonical: `/${locale}/tools/kundli`,
      languages: {
        en: '/en/tools/kundli',
        hi: '/hi/tools/kundli',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: `https://www.vastucart.in/${locale}/tools/kundli`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/og-images/kundli.jpg`,
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
      images: [`https://www.vastucart.in/og-images/kundli.jpg`],
    },
  };
}

export default async function KundliPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'tools.astrology.kundli' });

  return (
    <>
      <WebApplicationSchema
        name={t('title')}
        description={t('description')}
        url={`https://www.vastucart.in/${locale}/tools/kundli`}
        locale={locale}
        toolSlug="kundli"
      />
      <ToolBreadcrumbSchema
        toolName={t('title')}
        toolSlug="kundli"
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        locale={locale}
      />
      <KundliCalculator locale={locale as 'en' | 'hi'} />
    </>
  );
}
