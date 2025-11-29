import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { LoShuCalculator } from './calculator';
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
    namespace: 'tools.numerology.loshuGrid',
  });

  return {
    title: t('title'),
    description: t('metaDescription'),
    keywords: [
      'lo shu grid calculator',
      'lo shu square',
      'chinese numerology',
      'missing numbers numerology',
      'birth date analysis',
      'magic square numerology',
      locale === 'hi' ? 'लो शू ग्रिड कैलकुलेटर' : '',
      locale === 'hi' ? 'चीनी अंकशास्त्र' : '',
    ].filter(Boolean),
    alternates: {
      canonical: `/${locale}/tools/lo-shu-grid`,
      languages: {
        en: '/en/tools/lo-shu-grid',
        hi: '/hi/tools/lo-shu-grid',
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

export default async function LoShuGridPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.loshuGrid',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('title')}
        description={t('metaDescription')}
        url={`https://vastutools.com/${locale}/tools/lo-shu-grid`}
        locale={locale}
      />
      <LoShuCalculator locale={locale} />
    </>
  );
}
