import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { LifePathCalculator } from './calculator';
import { ToolPageEntityGraph } from '@/components/seo/entity-graph';
import { validateLocale } from '@/lib/utils/translations';

// ISR: tool pages are deterministic shells — calculations run client-side
// and inputs aren't part of the URL, so the rendered HTML is stable.
export const revalidate = 3600;

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
      canonical: locale === 'en' ? '/tools/life-path-number' : `/${locale}/tools/life-path-number`,
      languages: {
        en: '/tools/life-path-number',
        hi: '/hi/tools/life-path-number',
        'x-default': '/tools/life-path-number',
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: locale === 'en' ? `https://www.vastucart.in/tools/life-path-number` : `https://www.vastucart.in/${locale}/tools/life-path-number`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/images/blog/life-path-number/hero.webp`,
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
      images: [`https://www.vastucart.in/images/blog/life-path-number/hero.webp`],
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
  const faqs = (t.raw('faqs') as Array<{ question: string; answer: string }> | undefined) ?? [];

  return (
    <>
      <ToolPageEntityGraph
        locale={locale}
        toolSlug="life-path-number"
        toolName={t('meta.title')}
        toolDescription={t('meta.description')}
        categoryName={locale === 'hi' ? 'अंकशास्त्र' : 'Numerology'}
        categorySlug="numerology"
        faqs={faqs}
        heroImageUrl="https://www.vastucart.in/images/blog/life-path-number/hero.webp"
      />
      <LifePathCalculator locale={locale} />
    </>
  );
}
