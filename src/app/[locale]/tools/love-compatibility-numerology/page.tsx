import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';
import LoveCompatibilityCalculator from './calculator';

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
    namespace: 'tools.numerology.loveCompatibilityNumerology',
  });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords').split(', '),
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
      canonical: `/${locale}/tools/love-compatibility-numerology`,
      languages: {
        en: '/en/tools/love-compatibility-numerology',
        hi: '/hi/tools/love-compatibility-numerology',
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: `https://www.vastucart.in/${locale}/tools/love-compatibility-numerology`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/og-images/love-compatibility-numerology.jpg`,
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
      images: [`https://www.vastucart.in/og-images/love-compatibility-numerology.jpg`],
    },
  };
}

export default async function LoveCompatibilityPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.loveCompatibilityNumerology',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('meta.title')}
        description={t('meta.description')}
        url={`https://www.vastucart.in/${locale}/tools/love-compatibility-numerology`}
        locale={locale}
        toolSlug="love-compatibility-numerology"
      />
      <ToolBreadcrumbSchema
        toolName={t('meta.title')}
        toolSlug="love-compatibility-numerology"
        categoryName={locale === 'hi' ? 'अंकशास्त्र' : 'Numerology'}
        categorySlug="numerology"
        locale={locale}
      />
      <LoveCompatibilityCalculator locale={locale} />
    </>
  );
}
