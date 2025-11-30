import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { LuckyNumberCalculator } from './calculator';
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
    namespace: 'tools.numerology.luckyNumber',
  });

  return {
    title: t('title'),
    description: t('metaDescription'),
    keywords: [
      'lucky number calculator',
      'personal lucky numbers',
      'numerology lucky numbers',
      'birth date lucky number',
      'lucky number finder',
      locale === 'hi' ? 'भाग्यशाली अंक कैलकुलेटर' : '',
      locale === 'hi' ? 'अंकशास्त्र भाग्यशाली अंक' : '',
    ].filter(Boolean),
    alternates: {
      canonical: `/${locale}/tools/lucky-number`,
      languages: {
        en: '/en/tools/lucky-number',
        hi: '/hi/tools/lucky-number',
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

export default async function LuckyNumberPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.luckyNumber',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('title')}
        description={t('metaDescription')}
        url={`https://vastutools.com/${locale}/tools/lucky-number`}
        locale={locale}
      />
      <LuckyNumberCalculator locale={locale} />
    </>
  );
}
