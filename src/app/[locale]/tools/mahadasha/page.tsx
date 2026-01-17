import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import MahadashaCalculator from './calculator';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.mahadasha' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['महादशा', 'विमशोत्तरी दशा', 'ग्रह दशा', 'वैदिक ज्योतिष', 'दशा कैलकुलेटर', 'अंतर्दशा']
      : ['mahadasha', 'vimshottari dasha', 'planetary periods', 'vedic astrology', 'dasha calculator', 'antardasha'],
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
      canonical: `/${locale}/tools/mahadasha`,
      languages: {
        en: '/en/tools/mahadasha',
        hi: '/hi/tools/mahadasha',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: `https://www.vastucart.in/${locale}/tools/mahadasha`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/og-images/mahadasha.jpg`,
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
      images: [`https://www.vastucart.in/og-images/mahadasha.jpg`],
    },
  };
}

export default async function MahadashaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'tools.astrology.mahadasha' });

  return (
    <>
      <WebApplicationSchema
        name={t('title')}
        description={t('description')}
        url={`https://www.vastucart.in/${locale}/tools/mahadasha`}
        locale={locale}
        toolSlug="mahadasha"
      />
      <ToolBreadcrumbSchema
        toolName={t('title')}
        toolSlug="mahadasha"
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        locale={locale}
      />
      <MahadashaCalculator locale={locale as 'en' | 'hi'} />
    </>
  );
}
