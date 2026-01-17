import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import PitraDoshaCalculator from './calculator';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.pitraDosh' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['पितृ दोष', 'पूर्वज कर्म', 'श्राद्ध', 'पिंडदान', 'पितृ पक्ष', 'पितृ उपाय']
      : ['pitra dosha', 'ancestral karma', 'shradh', 'pind daan', 'pitru paksha', 'pitra remedies'],
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
      canonical: `/${locale}/tools/pitra-dosha`,
      languages: {
        en: '/en/tools/pitra-dosha',
        hi: '/hi/tools/pitra-dosha',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: `https://www.vastucart.in/${locale}/tools/pitra-dosha`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/og-images/pitra-dosha.jpg`,
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
      images: [`https://www.vastucart.in/og-images/pitra-dosha.jpg`],
    },
  };
}

export default async function PitraDoshaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'tools.astrology.pitraDosh' });

  return (
    <>
      <WebApplicationSchema
        name={t('title')}
        description={t('description')}
        url={`https://www.vastucart.in/${locale}/tools/pitra-dosha`}
        locale={locale}
        toolSlug="pitra-dosha"
      />
      <ToolBreadcrumbSchema
        toolName={t('title')}
        toolSlug="pitra-dosha"
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        locale={locale}
      />
      <PitraDoshaCalculator locale={locale as 'en' | 'hi'} />
    </>
  );
}
