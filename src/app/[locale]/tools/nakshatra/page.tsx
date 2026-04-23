import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { ToolPageEntityGraph } from '@/components/seo/entity-graph';
import { FAQSection } from '@/components/tools/faq-section';
import NakshatraCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

function validateLocale(locale: string): 'en' | 'hi' {
  return locale === 'hi' ? 'hi' : 'en';
}

// ISR: tool pages are deterministic shells — calculations run client-side
// and inputs aren't part of the URL, so the rendered HTML is stable.
export const revalidate = 3600;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  const t = await getTranslations({
    locale,
    namespace: 'tools.astrology.nakshatra',
  });

  return {
    title: { absolute: t('meta.title') },
    description: t('meta.description'),
    keywords: locale === 'hi'
      ? ['नक्षत्र', 'जन्म नक्षत्र', 'नक्षत्र कैलकुलेटर', 'वैदिक ज्योतिष', '27 नक्षत्र', 'पाद']
      : ['nakshatra', 'birth nakshatra', 'nakshatra calculator', 'vedic astrology', '27 nakshatras', 'pada'],
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
      canonical: locale === 'en' ? '/tools/nakshatra' : `/${locale}/tools/nakshatra`,
      languages: {
        en: '/tools/nakshatra',
        hi: '/hi/tools/nakshatra',
        'x-default': '/tools/nakshatra',
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: locale === 'en' ? `https://www.vastucart.in/tools/nakshatra` : `https://www.vastucart.in/${locale}/tools/nakshatra`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/images/blog/nakshatra/hero.webp`,
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
      images: [`https://www.vastucart.in/images/blog/nakshatra/hero.webp`],
    },
  };
}

export default async function NakshatraPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: 'tools.astrology.nakshatra',
  });
  const faqs = (t.raw('faqs') as Array<{ question: string; answer: string }> | undefined) ?? [];

  return (
    <>
      <ToolPageEntityGraph
        locale={locale}
        toolSlug="nakshatra"
        toolName={t('meta.title')}
        toolDescription={t('meta.description')}
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        faqs={faqs}
        heroImageUrl="https://www.vastucart.in/images/blog/nakshatra/hero.webp"
      />
      <div className="min-h-screen bg-cream-50 pattern-zodiac py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {t('meta.title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('meta.description')}
            </p>
          </header>
          <NakshatraCalculator locale={locale} />
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
