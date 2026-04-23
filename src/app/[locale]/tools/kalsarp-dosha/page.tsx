import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import KalsarpCalculator from './calculator';
import { ToolPageEntityGraph } from '@/components/seo/entity-graph';
import { FAQSection } from '@/components/tools/faq-section';

type Props = {
  params: Promise<{ locale: string }>;
};

// ISR: tool pages are deterministic shells — calculations run client-side
// and inputs aren't part of the URL, so the rendered HTML is stable.
export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.kalsarp' });

  const title = t('meta.title');
  const description = t('description');

  return {
    title: { absolute: title },
    description,
    keywords: locale === 'hi'
      ? ['कालसर्प दोष', 'राहु केतु', 'कुंडली दोष', 'वैदिक ज्योतिष', 'कालसर्प उपाय', 'कालसर्प पूजा']
      : ['kalsarp dosha', 'rahu ketu', 'kundli dosha', 'vedic astrology', 'kalsarp remedies', 'kalsarp puja'],
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
      canonical: locale === 'en' ? '/tools/kalsarp-dosha' : `/${locale}/tools/kalsarp-dosha`,
      languages: {
        en: '/tools/kalsarp-dosha',
        hi: '/hi/tools/kalsarp-dosha',
        'x-default': '/tools/kalsarp-dosha',
      },
    },
    openGraph: {
      title,
      description,
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: locale === 'en' ? `https://www.vastucart.in/tools/kalsarp-dosha` : `https://www.vastucart.in/${locale}/tools/kalsarp-dosha`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/images/blog/kalsarp-dosha/hero.webp`,
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
      images: [`https://www.vastucart.in/images/blog/kalsarp-dosha/hero.webp`],
    },
  };
}

export default async function KalsarpPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: 'tools.astrology.kalsarp' });
  const faqs = (t.raw('faqs') as Array<{ question: string; answer: string }> | undefined) ?? [];

  return (
    <>
      <ToolPageEntityGraph
        locale={locale}
        toolSlug="kalsarp-dosha"
        toolName={t('title')}
        toolDescription={t('description')}
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        faqs={faqs}
        heroImageUrl="https://www.vastucart.in/images/blog/kalsarp-dosha/hero.webp"
      />
      <div className="min-h-screen bg-cream-50 pattern-zodiac py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </header>
          <KalsarpCalculator locale={locale as 'en' | 'hi'} />
          <div className="mt-8">
            <FAQSection
              faqs={t.raw('faqs') as Array<{question: string; answer: string}>}
              title={locale === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
            />
          </div>
        </div>
      </div>
    </>
  );
}
