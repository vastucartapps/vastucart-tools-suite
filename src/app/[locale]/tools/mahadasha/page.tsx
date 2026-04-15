import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import MahadashaCalculator from './calculator';
import { ToolPageEntityGraph } from '@/components/seo/entity-graph';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.mahadasha' });

  const title = t('meta.title');
  const description = t('description');

  return {
    title: { absolute: title },
    description,
    keywords: locale === 'hi'
      ? ['महादशा', 'विमशोत्तरी दशा', 'ग्रह दशा', 'वैदिक ज्योतिष', 'दशा कैलकुलेटर', 'अंतर्दशा']
      : ['mahadasha', 'vimshottari dasha', 'planetary periods', 'vedic astrology', 'dasha calculator', 'antardasha'],
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
      canonical: locale === 'en' ? '/tools/mahadasha' : `/${locale}/tools/mahadasha`,
      languages: {
        en: '/tools/mahadasha',
        hi: '/hi/tools/mahadasha',
        'x-default': '/tools/mahadasha',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: locale === 'en' ? `https://www.vastucart.in/tools/mahadasha` : `https://www.vastucart.in/${locale}/tools/mahadasha`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/images/blog/mahadasha/hero.webp`,
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
      images: [`https://www.vastucart.in/images/blog/mahadasha/hero.webp`],
    },
  };
}

export default async function MahadashaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'tools.astrology.mahadasha' });
  const faqs = (t.raw('faqs') as Array<{ question: string; answer: string }> | undefined) ?? [];

  return (
    <>
      <ToolPageEntityGraph
        locale={locale}
        toolSlug="mahadasha"
        toolName={t('title')}
        toolDescription={t('description')}
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        faqs={faqs}
        heroImageUrl="https://www.vastucart.in/images/blog/mahadasha/hero.webp"
      />
      <MahadashaCalculator locale={locale as 'en' | 'hi'} />
    </>
  );
}
