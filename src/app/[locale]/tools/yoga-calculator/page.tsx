import { getTranslations, setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import YogaCalculator from './calculator';
import { WebApplicationSchema, ToolBreadcrumbSchema } from '@/components/seo/json-ld';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const title = locale === 'hi'
    ? 'योग कैलकुलेटर - सभी योग जांचें | राजयोग, गुरु चांडाल, अंगारक, परिवर्तन'
    : 'Yoga Calculator - Check All Yogas | Raj Yoga, Guru Chandal, Angarak, Parivartan';

  const description = locale === 'hi'
    ? 'मुफ्त योग कैलकुलेटर से अपनी कुंडली में सभी योग जांचें। राजयोग, गजकेसरी, गुरु चांडाल, अंगारक, परिवर्तन योग और अधिक।'
    : 'Check all yogas in your birth chart with our free Yoga Calculator. Raj Yoga, Gaja Kesari, Guru Chandal, Angarak, Parivartan Yoga and more.';

  return {
    title,
    description,
    keywords: locale === 'hi'
      ? ['योग कैलकुलेटर', 'राजयोग', 'गुरु चांडाल योग', 'अंगारक योग', 'परिवर्तन योग', 'गजकेसरी योग', 'नीच भंग राजयोग']
      : ['yoga calculator', 'raj yoga', 'guru chandal yoga', 'angarak yoga', 'parivartan yoga', 'gaja kesari yoga', 'neech bhang raj yoga'],
    openGraph: {
      title,
      description,
      type: 'website',
    },
    alternates: {
      canonical: `/${locale}/tools/yoga-calculator`,
      languages: {
        en: '/en/tools/yoga-calculator',
        hi: '/hi/tools/yoga-calculator',
      },
    },
  };
}

export default async function YogaCalculatorPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const title = locale === 'hi'
    ? 'योग कैलकुलेटर - सभी योग जांचें | राजयोग, गुरु चांडाल, अंगारक, परिवर्तन'
    : 'Yoga Calculator - Check All Yogas | Raj Yoga, Guru Chandal, Angarak, Parivartan';

  const description = locale === 'hi'
    ? 'मुफ्त योग कैलकुलेटर से अपनी कुंडली में सभी योग जांचें। राजयोग, गजकेसरी, गुरु चांडाल, अंगारक, परिवर्तन योग और अधिक।'
    : 'Check all yogas in your birth chart with our free Yoga Calculator. Raj Yoga, Gaja Kesari, Guru Chandal, Angarak, Parivartan Yoga and more.';

  return (
    <>
      <WebApplicationSchema
        name={title}
        description={description}
        url={`https://www.vastucart.in/${locale}/tools/yoga-calculator`}
        locale={locale}
        toolSlug="yoga-calculator"
      />
      <ToolBreadcrumbSchema
        toolName={title}
        toolSlug="yoga-calculator"
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        locale={locale}
      />
      <YogaCalculator locale={locale as 'en' | 'hi'} />
    </>
  );
}
