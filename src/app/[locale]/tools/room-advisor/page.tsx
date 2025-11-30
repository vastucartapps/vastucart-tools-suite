import { getTranslations } from 'next-intl/server';
import { Metadata } from 'next';
import RoomAdvisorCalculator from './calculator';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'roomAdvisor' });

  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://vastutools.com';

  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    alternates: {
      canonical: `${baseUrl}/${locale}/tools/room-advisor`,
      languages: {
        en: `${baseUrl}/en/tools/room-advisor`,
        hi: `${baseUrl}/hi/tools/room-advisor`,
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      url: `${baseUrl}/${locale}/tools/room-advisor`,
      siteName: 'VastuTools',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      type: 'website',
    },
  };
}

export default async function RoomAdvisorPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'roomAdvisor' });

  const translations = {
    title: t('calculator.title'),
    selectRoom: t('calculator.selectRoom'),
    selectDirection: t('calculator.selectDirection'),
    roomPlaceholder: t('calculator.roomPlaceholder'),
    directionPlaceholder: t('calculator.directionPlaceholder'),
    calculate: t('calculator.calculate'),
    calculating: t('calculator.calculating'),
    results: {
      title: t('results.title'),
      currentStatus: t('results.currentStatus'),
      overallScore: t('results.overallScore'),
      idealDirections: t('results.idealDirections'),
      avoidDirections: t('results.avoidDirections'),
      recommendedColors: t('results.recommendedColors'),
      avoidColors: t('results.avoidColors'),
      placementTips: t('results.placementTips'),
      item: t('results.item'),
      placement: t('results.placement'),
      reason: t('results.reason'),
      remedies: t('results.remedies'),
      dos: t('results.dos'),
      donts: t('results.donts'),
      ideal: t('results.ideal'),
      good: t('results.good'),
      acceptable: t('results.acceptable'),
      avoid: t('results.avoid'),
      highPriority: t('results.highPriority'),
      mediumPriority: t('results.mediumPriority'),
      lowPriority: t('results.lowPriority'),
    },
    roomTypes: {
      bedroom: t('roomTypes.bedroom'),
      kitchen: t('roomTypes.kitchen'),
      'living-room': t('roomTypes.livingRoom'),
      bathroom: t('roomTypes.bathroom'),
      'pooja-room': t('roomTypes.poojaRoom'),
      study: t('roomTypes.study'),
      dining: t('roomTypes.dining'),
      entrance: t('roomTypes.entrance'),
      staircase: t('roomTypes.staircase'),
    },
    directions: {
      north: t('directions.north'),
      south: t('directions.south'),
      east: t('directions.east'),
      west: t('directions.west'),
      'north-east': t('directions.northEast'),
      'north-west': t('directions.northWest'),
      'south-east': t('directions.southEast'),
      'south-west': t('directions.southWest'),
      center: t('directions.center'),
    },
  };

  // Schema.org structured data
  const schemaData = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: t('meta.title'),
    description: t('meta.description'),
    url: `${process.env.NEXT_PUBLIC_BASE_URL || 'https://vastutools.com'}/${locale}/tools/room-advisor`,
    applicationCategory: 'LifestyleApplication',
    operatingSystem: 'Any',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    inLanguage: locale === 'hi' ? 'hi' : 'en',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-saffron-50/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <div className="max-w-4xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-saffron-500 to-orange-600 rounded-2xl mb-4 shadow-lg">
            <span className="text-3xl">🏠</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            {t('meta.title')}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">{t('meta.description')}</p>
        </header>

        {/* Calculator */}
        <RoomAdvisorCalculator locale={locale} translations={translations} />

        {/* Info Section */}
        <section className="mt-12 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{t('info.title')}</h2>
          <div className="prose prose-gray max-w-none">
            <p className="text-gray-600 leading-relaxed">{t('info.description')}</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              {t('info.directionsTitle')}
            </h3>
            <p className="text-gray-600 leading-relaxed">{t('info.directionsDescription')}</p>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">
              {t('info.elementsTitle')}
            </h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>{t('info.element1')}</li>
              <li>{t('info.element2')}</li>
              <li>{t('info.element3')}</li>
              <li>{t('info.element4')}</li>
              <li>{t('info.element5')}</li>
            </ul>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-8 bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('faq.title')}</h2>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('faq.q1')}</h3>
              <p className="text-gray-600">{t('faq.a1')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('faq.q2')}</h3>
              <p className="text-gray-600">{t('faq.a2')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('faq.q3')}</h3>
              <p className="text-gray-600">{t('faq.a3')}</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">{t('faq.q4')}</h3>
              <p className="text-gray-600">{t('faq.a4')}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
