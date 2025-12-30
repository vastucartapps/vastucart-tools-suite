import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';
import LuckyVehicleNumberCalculator from './calculator';

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
    namespace: 'tools.numerology.luckyVehicleNumber',
  });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords').split(', '),
    alternates: {
      canonical: `/${locale}/tools/lucky-vehicle-number`,
      languages: {
        en: '/en/tools/lucky-vehicle-number',
        hi: '/hi/tools/lucky-vehicle-number',
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

export default async function LuckyVehicleNumberPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.luckyVehicleNumber',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('meta.title')}
        description={t('meta.description')}
        url={`https://vastucart.in/${locale}/tools/lucky-vehicle-number`}
        locale={locale}
        toolSlug="lucky-vehicle-number"
      />
      <ToolBreadcrumbSchema
        toolName={t('meta.title')}
        toolSlug="lucky-vehicle-number"
        categoryName={locale === 'hi' ? 'अंकशास्त्र' : 'Numerology'}
        categorySlug="numerology"
        locale={locale}
      />
      <LuckyVehicleNumberCalculator locale={locale} />
    </>
  );
}
