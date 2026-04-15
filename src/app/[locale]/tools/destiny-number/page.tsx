import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { DestinyCalculator } from './calculator';
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
    namespace: 'tools.numerology.destinyNumber',
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
      canonical: locale === 'en' ? '/tools/destiny-number' : `/${locale}/tools/destiny-number`,
      languages: {
        en: '/tools/destiny-number',
        hi: '/hi/tools/destiny-number',
        'x-default': '/tools/destiny-number',
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: locale === 'en' ? `https://www.vastucart.in/tools/destiny-number` : `https://www.vastucart.in/${locale}/tools/destiny-number`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/images/blog/destiny-number/hero.webp`,
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
      images: [`https://www.vastucart.in/images/blog/destiny-number/hero.webp`],
    },
  };
}

export default async function DestinyNumberPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.destinyNumber',
  });
  const faqs = (t.raw('faqs') as Array<{ question: string; answer: string }> | undefined) ?? [];

  return (
    <>
      <ToolPageEntityGraph
        locale={locale}
        toolSlug="destiny-number"
        toolName={t('meta.title')}
        toolDescription={t('meta.description')}
        categoryName={locale === 'hi' ? 'अंकशास्त्र' : 'Numerology'}
        categorySlug="numerology"
        faqs={faqs}
        heroImageUrl="https://www.vastucart.in/images/blog/destiny-number/hero.webp"
      />
      <DestinyCalculator locale={locale} />
    </>
  );
}
