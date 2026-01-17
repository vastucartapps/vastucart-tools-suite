import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { LifePathCalculator } from './calculator';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';
import { validateLocale } from '@/lib/utils/translations';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.lifePathNumber',
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
      canonical: `/${locale}/tools/life-path-number`,
      languages: {
        en: '/en/tools/life-path-number',
        hi: '/hi/tools/life-path-number',
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: `https://www.vastucart.in/${locale}/tools/life-path-number`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/og-images/life-path-number.jpg`,
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
      images: [`https://www.vastucart.in/og-images/life-path-number.jpg`],
    },
  };
}

export default async function LifePathNumberPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.lifePathNumber',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('meta.title')}
        description={t('meta.description')}
        url={`https://www.vastucart.in/${locale}/tools/life-path-number`}
        locale={locale}
        toolSlug="life-path-number"
      />
      <ToolBreadcrumbSchema
        toolName={t('meta.title')}
        toolSlug="life-path-number"
        categoryName={locale === 'hi' ? 'अंकशास्त्र' : 'Numerology'}
        categorySlug="numerology"
        locale={locale}
      />
      <LifePathCalculator locale={locale} />
    </>
  );
}
