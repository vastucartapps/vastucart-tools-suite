import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import { MuhuratFinderCalculator } from './calculator';
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
    namespace: 'tools.muhurat.muhuratFinder',
  });

  return {
    title: t('title'),
    description: t('metaDescription'),
    keywords: [
      'muhurat finder',
      'shubh muhurat',
      'auspicious time calculator',
      'panchang',
      'raahu kaal',
      'abhijit muhurat',
      'grah pravesh muhurat',
      'business muhurat',
      locale === 'hi' ? 'शुभ मुहूर्त' : '',
      locale === 'hi' ? 'पंचांग' : '',
      locale === 'hi' ? 'राहु काल' : '',
    ].filter(Boolean),
    alternates: {
      canonical: `/${locale}/tools/muhurat-finder`,
      languages: {
        en: '/en/tools/muhurat-finder',
        hi: '/hi/tools/muhurat-finder',
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

export default async function MuhuratFinderPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const t = await getTranslations({
    locale,
    namespace: 'tools.muhurat.muhuratFinder',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('title')}
        description={t('metaDescription')}
        url={`https://vastutools.com/${locale}/tools/muhurat-finder`}
        locale={locale}
      />
      <MuhuratFinderCalculator locale={locale} />
    </>
  );
}
