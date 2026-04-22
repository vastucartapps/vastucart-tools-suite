import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import SadeSatiCalculator from './calculator';
import { ToolPageEntityGraph } from '@/components/seo/entity-graph';

type Props = {
  params: Promise<{ locale: string }>;
};

// ISR: tool pages are deterministic shells — calculations run client-side
// and inputs aren't part of the URL, so the rendered HTML is stable.
export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.sadeSati' });

  const title = t('meta.title');
  const description = t('description');

  return {
    title: { absolute: title },
    description,
    keywords: locale === 'hi'
      ? ['साढ़े साती', 'शनि गोचर', 'शनि ढैया', 'वैदिक ज्योतिष', 'शनि दोष', 'शनि उपाय']
      : ['sade sati', 'saturn transit', 'shani dhaiya', 'vedic astrology', 'saturn effects', 'shani remedies'],
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
      canonical: locale === 'en' ? '/tools/sade-sati' : `/${locale}/tools/sade-sati`,
      languages: {
        en: '/tools/sade-sati',
        hi: '/hi/tools/sade-sati',
        'x-default': '/tools/sade-sati',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: locale === 'en' ? `https://www.vastucart.in/tools/sade-sati` : `https://www.vastucart.in/${locale}/tools/sade-sati`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/images/blog/sade-sati/hero.webp`,
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
      images: [`https://www.vastucart.in/images/blog/sade-sati/hero.webp`],
    },
  };
}

export default async function SadeSatiPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'tools.astrology.sadeSati' });
  const faqs = (t.raw('faqs') as Array<{ question: string; answer: string }> | undefined) ?? [];

  return (
    <>
      <ToolPageEntityGraph
        locale={locale}
        toolSlug="sade-sati"
        toolName={t('title')}
        toolDescription={t('description')}
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        faqs={faqs}
        heroImageUrl="https://www.vastucart.in/images/blog/sade-sati/hero.webp"
      />
      <SadeSatiCalculator locale={locale as 'en' | 'hi'} />
    </>
  );
}
