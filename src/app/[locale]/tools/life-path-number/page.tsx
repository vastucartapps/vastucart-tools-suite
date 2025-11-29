import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { LifePathCalculator } from './calculator';
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
    namespace: 'tools.numerology.lifePathNumber',
  });

  return {
    title: t('title'),
    description: t('metaDescription'),
    keywords: [
      'life path number calculator',
      'numerology calculator',
      'life path number',
      'destiny number',
      'birth date numerology',
      'free numerology calculator',
      locale === 'hi' ? 'मूलांक कैलकुलेटर' : '',
      locale === 'hi' ? 'अंकशास्त्र' : '',
    ].filter(Boolean),
    alternates: {
      canonical: `/${locale}/tools/life-path-number`,
      languages: {
        en: '/en/tools/life-path-number',
        hi: '/hi/tools/life-path-number',
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

export default async function LifePathNumberPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.lifePathNumber',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('title')}
        description={t('metaDescription')}
        url={`https://vastutools.com/${locale}/tools/life-path-number`}
        locale={locale}
      />
      <LifePathCalculator locale={locale} />
    </>
  );
}
