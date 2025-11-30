import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { DestinyCalculator } from './calculator';
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
    namespace: 'tools.numerology.destinyNumber',
  });

  return {
    title: t('title'),
    description: t('metaDescription'),
    keywords: [
      'destiny number calculator',
      'expression number calculator',
      'name numerology',
      'pythagorean numerology',
      'birth name number',
      'numerology calculator',
      locale === 'hi' ? 'भाग्य अंक कैलकुलेटर' : '',
      locale === 'hi' ? 'नाम अंकशास्त्र' : '',
    ].filter(Boolean),
    alternates: {
      canonical: `/${locale}/tools/destiny-number`,
      languages: {
        en: '/en/tools/destiny-number',
        hi: '/hi/tools/destiny-number',
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

export default async function DestinyNumberPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.destinyNumber',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('title')}
        description={t('metaDescription')}
        url={`https://vastutools.com/${locale}/tools/destiny-number`}
        locale={locale}
      />
      <DestinyCalculator locale={locale} />
    </>
  );
}
