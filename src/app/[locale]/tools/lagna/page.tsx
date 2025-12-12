import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import LagnaCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.lagna' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['लग्न', 'जन्म लग्न', 'लग्न कैलकुलेटर', 'वैदिक ज्योतिष', 'राशि', 'कुंडली']
      : ['lagna', 'ascendant', 'lagna calculator', 'vedic astrology', 'rising sign', 'kundli'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function LagnaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <LagnaCalculator locale={locale as 'en' | 'hi'} />;
}
