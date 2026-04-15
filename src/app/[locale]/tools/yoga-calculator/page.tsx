import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import YogaCalculator from './calculator';
import { ToolPageEntityGraph } from '@/components/seo/entity-graph';

// Yoga calculator keeps its FAQ list co-located with the page so the JSON-LD
// graph has something to emit. Content matches what the client `<FAQSection/>`
// inside ./calculator.tsx renders.
const YOGA_FAQS_EN: Array<{ question: string; answer: string }> = [
  {
    question: 'What is a Yoga in Vedic astrology?',
    answer:
      'In Vedic astrology, a Yoga is a specific combination of planets in a birth chart that produces a distinct result. There are hundreds of yogas across classical texts — some indicate wealth, leadership, and fame (Raj Yogas), while others warn of challenges (Guru Chandal, Angarak).',
  },
  {
    question: 'How is a Raj Yoga formed?',
    answer:
      'A Raj Yoga is formed when lords of kendras (1, 4, 7, 10) and trikonas (1, 5, 9) combine either by conjunction, aspect, or exchange. This blends angular action with trine fortune and typically produces status, authority, and material success.',
  },
  {
    question: 'Is Guru Chandal Yoga always negative?',
    answer:
      'Guru Chandal Yoga (Jupiter + Rahu) has a mixed reputation. Traditional texts consider it obstructive for dharma and guidance, but many modern practitioners note that it also drives unconventional wisdom and non-traditional success. Severity depends on the houses involved and supporting yogas.',
  },
  {
    question: 'What is Neecha Bhanga Raj Yoga?',
    answer:
      "Neecha Bhanga Raj Yoga is a 'cancellation of debilitation' that turns a weakened planet into a source of rising fortune. The native often experiences hardship early in life and then rises significantly — the classic rags-to-riches chart signature.",
  },
];

const YOGA_FAQS_HI: Array<{ question: string; answer: string }> = [
  {
    question: 'वैदिक ज्योतिष में योग क्या है?',
    answer:
      'वैदिक ज्योतिष में योग जन्म कुंडली में ग्रहों का विशेष संयोजन है जो स्पष्ट फल देता है। शास्त्रों में सैकड़ों योग मिलते हैं — कुछ धन, नेतृत्व और प्रसिद्धि देते हैं (राजयोग), जबकि कुछ चुनौतियाँ देते हैं (गुरु चांडाल, अंगारक)।',
  },
  {
    question: 'राजयोग कैसे बनता है?',
    answer:
      'राजयोग तब बनता है जब केंद्र (1, 4, 7, 10) और त्रिकोण (1, 5, 9) के स्वामी युति, दृष्टि या परिवर्तन से जुड़ते हैं। यह केंद्रीय कर्म और त्रिकोणीय भाग्य को मिलाकर सामान्यतः सम्मान, अधिकार और सफलता देता है।',
  },
  {
    question: 'क्या गुरु चांडाल योग हमेशा नकारात्मक होता है?',
    answer:
      'गुरु चांडाल योग (गुरु + राहु) की छवि मिश्रित है। पारंपरिक शास्त्र इसे धर्म और मार्गदर्शन के लिए बाधक मानते हैं, लेकिन कई आधुनिक ज्योतिषी देखते हैं कि यह अपरंपरागत बुद्धि और सफलता भी देता है। प्रभाव भाव और सहायक योगों पर निर्भर करता है।',
  },
  {
    question: 'नीच भंग राजयोग क्या है?',
    answer:
      'नीच भंग राजयोग नीच ग्रह के दोष को रद्द कर उसे उदय का स्रोत बना देता है। जातक जीवन की शुरुआत में कठिनाई झेलता है और बाद में उच्च स्थान प्राप्त करता है — शास्त्रीय साधारण-से-असाधारण कुंडली का संकेत।',
  },
];

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
    title: { absolute: title },
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
      canonical: locale === 'en' ? '/tools/yoga-calculator' : `/${locale}/tools/yoga-calculator`,
      languages: {
        en: '/tools/yoga-calculator',
        hi: '/hi/tools/yoga-calculator',
        'x-default': '/tools/yoga-calculator',
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

  const faqs = locale === 'hi' ? YOGA_FAQS_HI : YOGA_FAQS_EN;

  return (
    <>
      <ToolPageEntityGraph
        locale={locale}
        toolSlug="yoga-calculator"
        toolName={title}
        toolDescription={description}
        categoryName={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        categorySlug="astrology"
        faqs={faqs}
        heroImageUrl="https://www.vastucart.in/images/blog/yoga-calculator/hero.webp"
      />
      <YogaCalculator locale={locale as 'en' | 'hi'} />
    </>
  );
}
