import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';
import LuckyBankAccountCalculator from './calculator';

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
    namespace: 'tools.numerology.luckyBankAccountNumber',
  });

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords').split(', '),
    alternates: {
      canonical: `/${locale}/tools/lucky-bank-account-number`,
      languages: {
        en: '/en/tools/lucky-bank-account-number',
        hi: '/hi/tools/lucky-bank-account-number',
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

export default async function LuckyBankAccountPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = validateLocale(rawLocale);
  setRequestLocale(locale);

  const t = await getTranslations({
    locale,
    namespace: 'tools.numerology.luckyBankAccountNumber',
  });

  return (
    <>
      <WebApplicationSchema
        name={t('meta.title')}
        description={t('meta.description')}
        url={`https://vastucart.in/${locale}/tools/lucky-bank-account-number`}
        locale={locale}
        toolSlug="lucky-bank-account-number"
      />
      <ToolBreadcrumbSchema
        toolName={t('meta.title')}
        toolSlug="lucky-bank-account-number"
        categoryName={locale === 'hi' ? 'अंकशास्त्र' : 'Numerology'}
        categorySlug="numerology"
        locale={locale}
      />
      <LuckyBankAccountCalculator locale={locale} />
    </>
  );
}
