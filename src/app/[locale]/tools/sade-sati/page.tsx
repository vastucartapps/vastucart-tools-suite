import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import SadeSatiCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.sadeSati' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['साढ़े साती', 'शनि गोचर', 'शनि ढैया', 'वैदिक ज्योतिष', 'शनि दोष', 'शनि उपाय']
      : ['sade sati', 'saturn transit', 'shani dhaiya', 'vedic astrology', 'saturn effects', 'shani remedies'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function SadeSatiPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <SadeSatiCalculator locale={locale as 'en' | 'hi'} />;
}
