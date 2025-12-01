import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import PitraDoshaCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'tools.astrology.pitraDosh' });

  const title = t('title');
  const description = t('description');

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['पितृ दोष', 'पूर्वज कर्म', 'श्राद्ध', 'पिंडदान', 'पितृ पक्ष', 'पितृ उपाय']
      : ['pitra dosha', 'ancestral karma', 'shradh', 'pind daan', 'pitru paksha', 'pitra remedies'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
  };
}

export default async function PitraDoshaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <PitraDoshaCalculator locale={locale as 'en' | 'hi'} />;
}
