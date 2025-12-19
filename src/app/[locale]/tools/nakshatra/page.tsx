import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { WebApplicationSchema } from '@/components/seo/json-ld';
import NakshatraCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

function validateLocale(locale: string): 'en' | 'hi' {
  return locale === 'hi' ? 'hi' : 'en';
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  const t = await getTranslations({
    locale,
    namespace: 'tools.astrology.nakshatra',
  });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: locale === 'hi'
      ? ['नक्षत्र', 'जन्म नक्षत्र', 'नक्षत्र कैलकुलेटर', 'वैदिक ज्योतिष', '27 नक्षत्र', 'पाद']
      : ['nakshatra', 'birth nakshatra', 'nakshatra calculator', 'vedic astrology', '27 nakshatras', 'pada'],
    alternates: {
      canonical: `/${locale}/tools/nakshatra`,
      languages: {
        en: '/en/tools/nakshatra',
        hi: '/hi/tools/nakshatra',
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

export default async function NakshatraPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: 'tools.astrology.nakshatra',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('meta.title')}
        description={t('meta.description')}
        url={`https://tools.vastucart.in/${locale}/tools/nakshatra`}
        locale={locale}
      />
      <NakshatraCalculator locale={locale} />
    </>
  );
}
