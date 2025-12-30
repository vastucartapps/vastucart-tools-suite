import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';
import LuckyMobileNumberCalculator from './calculator';

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
    namespace: 'tools.numerology.luckyMobileNumber',
  });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords').split(', '),
    alternates: {
      canonical: `/${locale}/tools/lucky-mobile-number`,
      languages: {
        en: '/en/tools/lucky-mobile-number',
        hi: '/hi/tools/lucky-mobile-number',
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

export default async function LuckyMobileNumberPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.luckyMobileNumber',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('meta.title')}
        description={t('meta.description')}
        url={`https://vastucart.in/${locale}/tools/lucky-mobile-number`}
        locale={locale}
        toolSlug="lucky-mobile-number"
      />
      <ToolBreadcrumbSchema
        toolName={t('meta.title')}
        toolSlug="lucky-mobile-number"
        categoryName={locale === 'hi' ? 'अंकशास्त्र' : 'Numerology'}
        categorySlug="numerology"
        locale={locale}
      />
      <LuckyMobileNumberCalculator locale={locale} />
    </>
  );
}
