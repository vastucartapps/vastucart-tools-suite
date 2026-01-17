import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';
import NakshatraCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

function validateLocale(locale: string): 'en' | 'hi' {
  return locale === 'hi' ? 'hi' : 'en';
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  const t = await getTranslations({
    locale,
    namespace: 'tools.astrology.nakshatra',
  });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: locale === 'hi'
      ? ['नक्षत्र', 'जन्म नक्षत्र', 'नक्षत्र कैलकुलेटर', 'वैदिक ज्योतिष', '27 नक्षत्र', 'पाद']
      : ['nakshatra', 'birth nakshatra', 'nakshatra calculator', 'vedic astrology', '27 nakshatras', 'pada'],
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
      canonical: `/${locale}/tools/nakshatra`,
      languages: {
        en: '/en/tools/nakshatra',
        hi: '/hi/tools/nakshatra',
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: `https://www.vastucart.in/${locale}/tools/nakshatra`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/og-images/nakshatra.jpg`,
        width: 1200,
        height: 630,
        alt: t('meta.title'),
      }],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@vastucart',
      creator: '@vastucart',
      title: t('meta.title'),
      description: t('meta.description'),
      images: [`https://www.vastucart.in/og-images/nakshatra.jpg`],
    },
  };
}

export default async function NakshatraPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: 'tools.astrology.nakshatra',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('meta.title')}
        description={t('meta.description')}
        url={`https://www.vastucart.in/${locale}/tools/nakshatra`}
        locale={locale}
        toolSlug="nakshatra"
      />
      <ToolBreadcrumbSchema
        toolName={t('meta.title')}
        toolSlug="nakshatra"
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        locale={locale}
      />
      <NakshatraCalculator locale={locale} />
    </>
  );
}
