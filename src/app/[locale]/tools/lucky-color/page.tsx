import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import LuckyColorCalculator from './calculator';
import { WebApplicationSchema } from '@/components/seo/json-ld';
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
    namespace: 'tools.numerology.luckyColor',
  });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: [
      'lucky color calculator',
      'numerology colors',
      'vedic color therapy',
      'planetary colors',
      'chakra colors',
      'auspicious colors',
      locale === 'hi' ? 'भाग्यशाली रंग' : '',
      locale === 'hi' ? 'अंकशास्त्र रंग' : '',
    ].filter(Boolean),
    alternates: {
      canonical: `/${locale}/tools/lucky-color`,
      languages: {
        en: '/en/tools/lucky-color',
        hi: '/hi/tools/lucky-color',
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
    },
  };
}

export default async function LuckyColorPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.luckyColor',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('meta.title')}
        description={t('meta.description')}
        url={`https://tools.vastucart.in/${locale}/tools/lucky-color`}
        locale={locale}
      />

      <div className="min-h-screen bg-cream-50 pattern-zodiac py-8 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-deepteal-400 to-deepteal-600 text-white text-3xl mb-4 shadow-lg">
              🎨
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>

          {/* Calculator */}
          <LuckyColorCalculator />

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
