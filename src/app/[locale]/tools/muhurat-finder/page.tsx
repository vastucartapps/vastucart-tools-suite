import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { MuhuratFinderCalculator } from './calculator';
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
    namespace: 'tools.muhurat.muhuratFinder',
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
      canonical: `/${locale}/tools/muhurat-finder`,
      languages: {
        en: '/en/tools/muhurat-finder',
        hi: '/hi/tools/muhurat-finder',
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: `https://www.vastucart.in/${locale}/tools/muhurat-finder`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/images/blog/muhurat-finder/hero.webp`,
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
      images: [`https://www.vastucart.in/images/blog/muhurat-finder/hero.webp`],
    },
  };
}

export default async function MuhuratFinderPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const t = await getTranslations({
    locale,
    namespace: 'tools.muhurat.muhuratFinder',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('meta.title')}
        description={t('meta.description')}
        url={`https://www.vastucart.in/${locale}/tools/muhurat-finder`}
        locale={locale}
        toolSlug="muhurat-finder"
      />
      <ToolBreadcrumbSchema
        toolName={t('meta.title')}
        toolSlug="muhurat-finder"
        categoryName={locale === 'hi' ? 'मुहूर्त' : 'Muhurat'}
        categorySlug="muhurat"
        locale={locale}
      />
      <MuhuratFinderCalculator locale={locale} />
    </>
  );
}
