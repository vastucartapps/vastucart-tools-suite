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
      canonical: `/${locale}/tools/raj-yoga`,
      languages: {
        en: '/en/tools/raj-yoga',
        hi: '/hi/tools/raj-yoga',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: `https://www.vastucart.in/${locale}/tools/raj-yoga`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/og-images/raj-yoga.jpg`,
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
      images: [`https://www.vastucart.in/og-images/raj-yoga.jpg`],
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
        url={`https://www.vastucart.in/${locale}/tools/raj-yoga`}
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
