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
      canonical: `/${locale}/tools/manglik`,
      languages: {
        en: '/en/tools/manglik',
        hi: '/hi/tools/manglik',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: `https://www.vastucart.in/${locale}/tools/manglik`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/images/blog/manglik/hero.webp`,
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
      images: [`https://www.vastucart.in/images/blog/manglik/hero.webp`],
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
        url={`https://www.vastucart.in/${locale}/tools/manglik`}
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
