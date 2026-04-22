import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import RajYogaCalculator from './calculator';
import { ToolPageEntityGraph } from '@/components/seo/entity-graph';

type Props = {
  params: Promise<{ locale: string }>;
};

// ISR: tool pages are deterministic shells — calculations run client-side
// and inputs aren't part of the URL, so the rendered HTML is stable.
export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.rajYoga' });

  const title = t('meta.title');
  const description = t('description');

  return {
    title: { absolute: title },
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
      canonical: locale === 'en' ? '/tools/raj-yoga' : `/${locale}/tools/raj-yoga`,
      languages: {
        en: '/tools/raj-yoga',
        hi: '/hi/tools/raj-yoga',
        'x-default': '/tools/raj-yoga',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: locale === 'en' ? `https://www.vastucart.in/tools/raj-yoga` : `https://www.vastucart.in/${locale}/tools/raj-yoga`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/images/blog/raj-yoga/hero.webp`,
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
      images: [`https://www.vastucart.in/images/blog/raj-yoga/hero.webp`],
    },
  };
}

export default async function RajYogaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'tools.astrology.rajYoga' });
  const faqs = (t.raw('faqs') as Array<{ question: string; answer: string }> | undefined) ?? [];

  return (
    <>
      <ToolPageEntityGraph
        locale={locale}
        toolSlug="raj-yoga"
        toolName={t('title')}
        toolDescription={t('description')}
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        faqs={faqs}
        heroImageUrl="https://www.vastucart.in/images/blog/raj-yoga/hero.webp"
      />
      <RajYogaCalculator locale={locale as 'en' | 'hi'} />
    </>
  );
}
