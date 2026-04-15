import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import BusinessNameCalculator from './calculator';
import { ToolPageEntityGraph } from '@/components/seo/entity-graph';
import { FAQSection } from '@/components/tools/faq-section';
import { validateLocale } from '@/lib/utils/translations';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.businessName',
  });

  return {
    title: { absolute: t('meta.title') },
    description: t('meta.description'),
    keywords: [
      'business name numerology',
      'company name calculator',
      'business numerology',
      'lucky business name',
      'brand numerology',
      locale === 'hi' ? 'व्यापार नाम अंकशास्त्र' : '',
      locale === 'hi' ? 'कंपनी नाम कैलकुलेटर' : '',
    ].filter(Boolean),
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
      canonical: locale === 'en' ? '/tools/business-name' : `/${locale}/tools/business-name`,
      languages: {
        en: '/tools/business-name',
        hi: '/hi/tools/business-name',
        'x-default': '/tools/business-name',
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      url: locale === 'en' ? `https://www.vastucart.in/tools/business-name` : `https://www.vastucart.in/${locale}/tools/business-name`,
      siteName: 'VastuCart',
      images: [{
        url: `https://www.vastucart.in/images/blog/business-name/hero.webp`,
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
      images: [`https://www.vastucart.in/images/blog/business-name/hero.webp`],
    },
  };
}

export default async function BusinessNamePage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.businessName',
  });
  const faqs = (t.raw('faqs') as Array<{ question: string; answer: string }> | undefined) ?? [];

  return (
    <>
      <ToolPageEntityGraph
        locale={locale}
        toolSlug="business-name"
        toolName={t('meta.title')}
        toolDescription={t('meta.description')}
        categoryName={locale === 'hi' ? 'अंकशास्त्र' : 'Numerology'}
        categorySlug="numerology"
        faqs={faqs}
        heroImageUrl="https://www.vastucart.in/images/blog/business-name/hero.webp"
      />

      <div className="min-h-screen bg-cream-50 pattern-zodiac py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-deepteal-400 to-deepteal-600 text-white text-3xl mb-4 shadow-lg">
              
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>

          {/* Calculator */}
          <BusinessNameCalculator />

          {/* FAQ Section */}
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
