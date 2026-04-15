import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { MuhuratFinderCalculator } from './calculator';
import { ToolPageEntityGraph } from '@/components/seo/entity-graph';
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
    title: { absolute: t('meta.title') },
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
      canonical: locale === 'en' ? '/tools/muhurat-finder' : `/${locale}/tools/muhurat-finder`,
      languages: {
        en: '/tools/muhurat-finder',
        hi: '/hi/tools/muhurat-finder',
        'x-default': '/tools/muhurat-finder',
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: locale === 'en' ? `https://www.vastucart.in/tools/muhurat-finder` : `https://www.vastucart.in/${locale}/tools/muhurat-finder`,
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
  const faqs = (t.raw('faqs') as Array<{ question: string; answer: string }> | undefined) ?? [];

  return (
    <>
      <ToolPageEntityGraph
        locale={locale}
        toolSlug="muhurat-finder"
        toolName={t('meta.title')}
        toolDescription={t('meta.description')}
        categoryName={locale === 'hi' ? 'मुहूर्त' : 'Muhurat'}
        categorySlug="muhurat"
        faqs={faqs}
        heroImageUrl="https://www.vastucart.in/images/blog/muhurat-finder/hero.webp"
      />
      <MuhuratFinderCalculator locale={locale} />
    </>
  );
}
