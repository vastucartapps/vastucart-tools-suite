import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import MahadashaCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.mahadasha' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['महादशा', 'विमशोत्तरी दशा', 'ग्रह दशा', 'वैदिक ज्योतिष', 'दशा कैलकुलेटर', 'अंतर्दशा']
      : ['mahadasha', 'vimshottari dasha', 'planetary periods', 'vedic astrology', 'dasha calculator', 'antardasha'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function MahadashaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <MahadashaCalculator locale={locale as 'en' | 'hi'} />;
}
