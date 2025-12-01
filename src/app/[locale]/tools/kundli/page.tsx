import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import KundliCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.kundli' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['कुंडली', 'जन्मकुंडली', 'जन्म पत्रिका', 'वैदिक ज्योतिष', 'राशिफल', 'ग्रह स्थिति']
      : ['kundli', 'birth chart', 'janam patri', 'vedic astrology', 'horoscope', 'planetary positions'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function KundliPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <KundliCalculator locale={locale as 'en' | 'hi'} />;
}
