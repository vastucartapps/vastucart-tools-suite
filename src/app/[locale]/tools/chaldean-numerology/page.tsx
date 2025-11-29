import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { ChaldeanCalculator } from './calculator';
import { WebApplicationSchema } from '@/components/seo/json-ld';
import { validateLocale } from '@/lib/utils/translations';

interface Props {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.chaldean',
  });

  return {
    title: t('title'),
    description: t('metaDescription'),
    keywords: [
      'chaldean numerology calculator',
      'name numerology calculator',
      'chaldean name number',
      'babylonian numerology',
      'name analysis',
      'free name numerology',
      locale === 'hi' ? 'नाम अंकशास्त्र कैलकुलेटर' : '',
      locale === 'hi' ? 'कैल्डियन अंकशास्त्र' : '',
    ].filter(Boolean),
    alternates: {
      canonical: `/${locale}/tools/chaldean-numerology`,
      languages: {
        en: '/en/tools/chaldean-numerology',
        hi: '/hi/tools/chaldean-numerology',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('metaDescription'),
      type: 'website',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
    },
  };
}

export default async function ChaldeanNumerologyPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.chaldean',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('title')}
        description={t('metaDescription')}
        url={`https://vastutools.com/${locale}/tools/chaldean-numerology`}
        locale={locale}
      />
      <ChaldeanCalculator locale={locale} />
    </>
  );
}
