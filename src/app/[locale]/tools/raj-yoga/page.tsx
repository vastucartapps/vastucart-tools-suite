import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import RajYogaCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.rajYoga' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['राजयोग', 'गजकेसरी योग', 'पंच महापुरुष योग', 'वैदिक ज्योतिष', 'कुंडली योग', 'धन योग']
      : ['raj yoga', 'gaja kesari yoga', 'panch mahapurusha yoga', 'vedic astrology', 'kundli yoga', 'dhana yoga'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function RajYogaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <RajYogaCalculator locale={locale as 'en' | 'hi'} />;
}
