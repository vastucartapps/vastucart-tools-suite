import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import LagnaCalculator from './calculator';
import { ToolPageEntityGraph } from '@/components/seo/entity-graph';

type Props = {
  params: Promise<{ locale: string }>;
};

// ISR: tool pages are deterministic shells — calculations run client-side
// and inputs aren't part of the URL, so the rendered HTML is stable.
export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.lagna' });

  const title = t('meta.title');
  const description = t('description');

  return {
    title: { absolute: title },
    description,
    keywords: locale === 'hi'
      ? ['लग्न', 'जन्म लग्न', 'लग्न कैलकुलेटर', 'वैदिक ज्योतिष', 'राशि', 'कुंडली']
      : ['lagna', 'ascendant', 'lagna calculator', 'vedic astrology', 'rising sign', 'kundli'],
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
      canonical: locale === 'en' ? '/tools/lagna' : `/${locale}/tools/lagna`,
      languages: {
        en: '/tools/lagna',
        hi: '/hi/tools/lagna',
        'x-default': '/tools/lagna',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: locale === 'en' ? `https://www.vastucart.in/tools/lagna` : `https://www.vastucart.in/${locale}/tools/lagna`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/images/blog/lagna/hero.webp`,
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
      images: [`https://www.vastucart.in/images/blog/lagna/hero.webp`],
    },
  };
}

export default async function LagnaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'tools.astrology.lagna' });
  const faqs = (t.raw('faqs') as Array<{ question: string; answer: string }> | undefined) ?? [];

  return (
    <>
      <ToolPageEntityGraph
        locale={locale}
        toolSlug="lagna"
        toolName={t('title')}
        toolDescription={t('description')}
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        faqs={faqs}
        heroImageUrl="https://www.vastucart.in/images/blog/lagna/hero.webp"
      />
      <LagnaCalculator locale={locale as 'en' | 'hi'} />
    </>
  );
}
