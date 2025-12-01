import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import MarriageMatchingCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.marriage' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['कुंडली मिलान', 'गुण मिलान', 'अष्टकूट', 'विवाह मिलान', 'राशि मिलान', '36 गुण']
      : ['kundli matching', 'gun milan', 'ashtakoot', 'marriage matching', 'horoscope matching', '36 gunas'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function MarriageMatchingPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <MarriageMatchingCalculator locale={locale as 'en' | 'hi'} />;
}
