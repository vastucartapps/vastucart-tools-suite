'use client';

import { useState } from 'react';
import { Calculator, RefreshCw, Loader2, Sparkles, AlertTriangle, ArrowLeftRight, Crown } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BirthDatePicker } from '@/components/ui/birth-date-picker';
import { TimePicker } from '@/components/ui/time-picker';
import { PlacePicker } from '@/components/ui/place-picker';
import { HeroResultCard } from '@/components/ui/hero-result-card';
import { SectionCard } from '@/components/ui/section-card';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

import {
  calculateFullChart,
  type Place,
} from '@/lib/astrology';

import {
  checkAllYogas,
  RESULT_INTERPRETATION,
  type YogaResult,
  type ChartData,
} from './yoga-data';

interface YogaCalculatorProps {
  locale: 'en' | 'hi';
}

interface CalculationResult {
  yogas: YogaResult[];
  positiveYogas: YogaResult[];
  challengingYogas: YogaResult[];
  exchangeYogas: YogaResult[];
  interpretation: {
    title: { en: string; hi: string };
    description: { en: string; hi: string };
  };
}

export default function YogaCalculator({ locale }: YogaCalculatorProps) {
  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // Result state
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    if (!birthDate) {
      setError(locale === 'en' ? 'Please select birth date' : 'कृपया जन्म तिथि चुनें');
      return;
    }

    if (!selectedPlace) {
      setError(locale === 'en' ? 'Please select a birth place' : 'कृपया जन्म स्थान चुनें');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      try {
        // Calculate birth chart
        const chart = calculateFullChart({
          year: birthDate.getFullYear(),
          month: birthDate.getMonth() + 1,
          day: birthDate.getDate(),
          hour: parseInt(birthHour),
          minute: parseInt(birthMinute),
          latitude: selectedPlace.lat,
          longitude: selectedPlace.lng,
          timezone: selectedPlace.tz,
        });

        // Extract planet data for yoga checking
        const chartData: ChartData = {
          sun: { sign: chart.planets.sun.sign.index, house: chart.planets.sun.house },
          moon: { sign: chart.planets.moon.sign.index, house: chart.planets.moon.house },
          mars: { sign: chart.planets.mars.sign.index, house: chart.planets.mars.house },
          mercury: { sign: chart.planets.mercury.sign.index, house: chart.planets.mercury.house },
          jupiter: { sign: chart.planets.jupiter.sign.index, house: chart.planets.jupiter.house },
          venus: { sign: chart.planets.venus.sign.index, house: chart.planets.venus.house },
          saturn: { sign: chart.planets.saturn.sign.index, house: chart.planets.saturn.house },
          rahu: { sign: chart.planets.rahu.sign.index, house: chart.planets.rahu.house },
          ketu: { sign: chart.planets.ketu.sign.index, house: chart.planets.ketu.house },
          ascendantSign: chart.lagna.sign.index,
        };

        // Check for all yogas
        const yogas = checkAllYogas(chartData);

        // Categorize yogas
        const positiveYogas = yogas.filter(y => y.isPositive && y.category !== 'exchange');
        const challengingYogas = yogas.filter(y => !y.isPositive);
        const exchangeYogas = yogas.filter(y => y.category === 'exchange');

        // Determine interpretation
        let interpretation;
        if (yogas.length === 0) {
          interpretation = RESULT_INTERPRETATION.none;
        } else if (challengingYogas.length === 0) {
          interpretation = RESULT_INTERPRETATION.positive_only;
        } else if (positiveYogas.length === 0 && exchangeYogas.filter(y => y.isPositive).length === 0) {
          interpretation = RESULT_INTERPRETATION.challenging_only;
        } else {
          interpretation = RESULT_INTERPRETATION.mixed;
        }

        setResult({ yogas, positiveYogas, challengingYogas, exchangeYogas, interpretation });
      } catch (err) {
        setError(locale === 'en' ? 'Error checking yogas' : 'योग जांच में त्रुटि');
      } finally {
        setIsCalculating(false);
      }
    }, 100);
  };

  const handleReset = () => {
    setBirthDate(null);
    setBirthHour('12');
    setBirthMinute('00');
    setSelectedPlace(null);
    setResult(null);
    setError(null);
  };

  const title = locale === 'en' ? 'All Yogas Calculator' : 'सभी योग कैलकुलेटर';
  const subtitle = locale === 'en'
    ? 'Check Raj Yogas, Challenging Yogas & Exchange Yogas in your birth chart'
    : 'अपनी कुंडली में राजयोग, चुनौतीपूर्ण योग और परिवर्तन योग जांचें';

  const faqItems = [
    {
      question: locale === 'en' ? 'What yogas does this calculator check?' : 'यह कैलकुलेटर कौन से योग जांचता है?',
      answer: locale === 'en'
        ? 'This calculator checks Raj Yogas (Gaja Kesari, Panch Mahapurusha, Budhaditya, Lakshmi, Dhana, Viparita, Neech Bhang), Challenging Yogas (Guru Chandal, Angarak), and Exchange Yogas (Maha Parivartan, Khala Parivartan, Dainya Parivartan).'
        : 'यह कैलकुलेटर राजयोग (गजकेसरी, पंच महापुरुष, बुधादित्य, लक्ष्मी, धन, विपरीत, नीच भंग), चुनौतीपूर्ण योग (गुरु चांडाल, अंगारक), और परिवर्तन योग (महा परिवर्तन, खल परिवर्तन, दैन्य परिवर्तन) जांचता है।'
    },
    {
      question: locale === 'en' ? 'What is Guru Chandal Yoga?' : 'गुरु चांडाल योग क्या है?',
      answer: locale === 'en'
        ? 'Guru Chandal Yoga forms when Jupiter is conjunct with Rahu or Ketu. It can cause confusion in beliefs and challenges with teachers, but can also give unique spiritual insights when channeled properly.'
        : 'गुरु चांडाल योग तब बनता है जब गुरु राहु या केतु के साथ युति में होता है। यह विश्वासों में भ्रम और गुरुओं से चुनौतियां दे सकता है, लेकिन सही दिशा में अद्वितीय आध्यात्मिक अंतर्दृष्टि भी दे सकता है।'
    },
    {
      question: locale === 'en' ? 'What is Angarak Yoga?' : 'अंगारक योग क्या है?',
      answer: locale === 'en'
        ? 'Angarak Yoga forms when Mars is conjunct with Rahu or Ketu. It can cause aggression, accidents, and impulsive decisions, but also gives courage and ability to overcome enemies.'
        : 'अंगारक योग तब बनता है जब मंगल राहु या केतु के साथ युति में होता है। यह आक्रामकता, दुर्घटनाएं और आवेगी निर्णय दे सकता है, लेकिन साहस और शत्रुओं पर विजय की क्षमता भी देता है।'
    },
    {
      question: locale === 'en' ? 'What is Parivartan Yoga?' : 'परिवर्तन योग क्या है?',
      answer: locale === 'en'
        ? 'Parivartan Yoga occurs when two planets exchange signs (each planet is in the other\'s sign). Maha Parivartan between Kendra/Trikona lords is highly auspicious, while Dainya Parivartan involving dusthana houses is challenging.'
        : 'परिवर्तन योग तब होता है जब दो ग्रह राशियों का आदान-प्रदान करते हैं। केंद्र/त्रिकोण स्वामियों के बीच महा परिवर्तन अत्यंत शुभ है, जबकि दुस्थान भावों का दैन्य परिवर्तन चुनौतीपूर्ण है।'
    },
    {
      question: locale === 'en' ? 'Can challenging yogas be remedied?' : 'क्या चुनौतीपूर्ण योगों का उपाय हो सकता है?',
      answer: locale === 'en'
        ? 'Yes, challenging yogas like Guru Chandal and Angarak can be mitigated through specific remedies like worship, mantras, donations, and lifestyle adjustments. The calculator provides specific remedies for each yoga found.'
        : 'हां, गुरु चांडाल और अंगारक जैसे चुनौतीपूर्ण योगों को पूजा, मंत्र, दान और जीवनशैली समायोजन जैसे विशिष्ट उपायों से कम किया जा सकता है। कैलकुलेटर प्रत्येक योग के लिए विशिष्ट उपाय प्रदान करता है।'
    }
  ];

  const educational = {
    title: locale === 'en' ? 'Understanding Yogas in Vedic Astrology' : 'वैदिक ज्योतिष में योगों को समझना',
    content: locale === 'en' ? [
      'Yogas are special planetary combinations in Vedic astrology that indicate specific life outcomes.',
      'Raj Yogas indicate success, wealth, and high status. They are formed by benefic planets in strong positions.',
      'Challenging Yogas like Guru Chandal and Angarak require awareness and remedies to channel their energy positively.',
      'Exchange Yogas (Parivartan) occur when two planets are in each other\'s signs, creating a powerful connection between houses.',
      'Having multiple yogas amplifies their effects - both positive yogas for success and remedies for challenging ones.'
    ] : [
      'योग वैदिक ज्योतिष में विशेष ग्रह संयोजन हैं जो विशिष्ट जीवन परिणामों का संकेत देते हैं।',
      'राजयोग सफलता, धन और उच्च स्थिति का संकेत देते हैं। ये शुभ ग्रहों की मजबूत स्थितियों से बनते हैं।',
      'गुरु चांडाल और अंगारक जैसे चुनौतीपूर्ण योगों को उनकी ऊर्जा को सकारात्मक रूप से प्रवाहित करने के लिए जागरूकता और उपायों की आवश्यकता होती है।',
      'परिवर्तन योग तब होते हैं जब दो ग्रह एक-दूसरे की राशियों में होते हैं, जो भावों के बीच शक्तिशाली संबंध बनाते हैं।',
      'कई योग होने से उनके प्रभाव बढ़ जाते हैं - सफलता के लिए सकारात्मक योग और चुनौतीपूर्ण योगों के लिए उपाय दोनों।'
    ]
  };

  const relatedTools: RelatedTool[] = [
    {
      slug: 'kundli',
      icon: '',
      name: { en: 'Kundli Generator', hi: 'कुंडली जनरेटर' }
    },
    {
      slug: 'raj-yoga',
      icon: '',
      name: { en: 'Raj Yoga Calculator', hi: 'राजयोग कैलकुलेटर' }
    },
    {
      slug: 'nakshatra',
      icon: '',
      name: { en: 'Nakshatra Calculator', hi: 'नक्षत्र कैलकुलेटर' }
    },
    {
      slug: 'mahadasha',
      icon: '',
      name: { en: 'Mahadasha Calculator', hi: 'महादशा कैलकुलेटर' }
    }
  ];

  return (
    <ToolLayout
      title={title}
      description={subtitle}
      icon="" iconName="Crown"
      category="astrology"
      categoryLabel={locale === 'en' ? 'Astrology' : 'ज्योतिष'}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Input Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            {locale === 'en' ? 'Enter Birth Details' : 'जन्म विवरण दर्ज करें'}
          </h2>

          <div className="space-y-6 mb-6">
            {/* Birth Date */}
            <BirthDatePicker
              label={locale === 'en' ? 'Birth Date' : 'जन्म तिथि'}
              value={birthDate}
              onChange={setBirthDate}
              locale={locale}
              required
            />

            {/* Birth Time */}
            <TimePicker
              label={locale === 'en' ? 'Birth Time' : 'जन्म समय'}
              hour={birthHour}
              minute={birthMinute}
              onHourChange={setBirthHour}
              onMinuteChange={setBirthMinute}
              locale={locale}
              required
            />

            {/* Birth Place */}
            <PlacePicker
              label={locale === 'en' ? 'Birth Place' : 'जन्म स्थान'}
              value={selectedPlace}
              onChange={setSelectedPlace}
              locale={locale}
              required
              showManualInput
            />
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleCalculate}
              disabled={isCalculating}
              className="flex-1 bg-gradient-to-r from-deepteal-500 to-warmaccent-500 hover:from-deepteal-600 hover:to-warmaccent-600"
            >
              {isCalculating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {locale === 'en' ? 'Calculating...' : 'गणना हो रही है...'}
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  {locale === 'en' ? 'Check All Yogas' : 'सभी योग जांचें'}
                </>
              )}
            </Button>
            <Button
              onClick={handleReset}
              variant="secondary"
              className="px-6"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              {locale === 'en' ? 'Reset' : 'रीसेट'}
            </Button>
          </div>

          {error && (
            <p className="mt-4 text-red-500 text-center">{error}</p>
          )}
        </Card>

        {!result && (
          <EducationalSection
            title={educational.title}
            content={educational.content}
            blogLink="/blog/raj-yoga-calculator-success-luck"
            blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
          />
        )}

        {/* Results */}
        {result && (
          <div className="animate-fade-in-up space-y-6">
            {/* Main Status Card */}
            <HeroResultCard
              title={locale === 'en' ? 'Yoga Analysis Results' : 'योग विश्लेषण परिणाम'}
              subtitle={locale === 'en' ? 'Complete Planetary Combinations' : 'पूर्ण ग्रह संयोजन'}
              icon={<Sparkles className="w-6 h-6 text-white" />}
              colorScheme={result.challengingYogas.length > 0 ? 'warmaccent' : 'deepteal'}
            >
              <div className="text-center py-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {result.interpretation.title[locale]}
                </h3>
                <p className={`text-lg ${result.challengingYogas.length > 0 ? 'text-amber-200' : 'text-white/90'}`}>
                  {result.interpretation.description[locale]}
                </p>
                {result.yogas.length > 0 && (
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {result.positiveYogas.length > 0 && (
                      <span className="px-4 py-2 rounded-full bg-deepteal-500/30 text-sm font-medium text-white">
                        {locale === 'en'
                          ? `${result.positiveYogas.length} Beneficial`
                          : `${result.positiveYogas.length} शुभ`
                        }
                      </span>
                    )}
                    {result.challengingYogas.length > 0 && (
                      <span className="px-4 py-2 rounded-full bg-amber-500/30 text-sm font-medium text-white">
                        {locale === 'en'
                          ? `${result.challengingYogas.length} Challenging`
                          : `${result.challengingYogas.length} चुनौतीपूर्ण`
                        }
                      </span>
                    )}
                    {result.exchangeYogas.length > 0 && (
                      <span className="px-4 py-2 rounded-full bg-warmaccent-500/30 text-sm font-medium text-white">
                        {locale === 'en'
                          ? `${result.exchangeYogas.length} Exchange`
                          : `${result.exchangeYogas.length} परिवर्तन`
                        }
                      </span>
                    )}
                  </div>
                )}
              </div>
            </HeroResultCard>

            {/* Beneficial Yogas */}
            {result.positiveYogas.length > 0 && (
              <SectionCard
                title={locale === 'en' ? 'Beneficial Yogas (Raj Yogas)' : 'शुभ योग (राजयोग)'}
                icon={<Crown className="w-5 h-5 text-deepteal-500" />}
              >
                <div className="space-y-4">
                  {result.positiveYogas.map((yoga, idx) => (
                    <div
                      key={idx}
                      className={`animate-fade-in-up p-5 rounded-xl border-l-4 shadow-sm ${
                        yoga.intensity === 'powerful'
                          ? 'border-l-deepteal-500 bg-deepteal-50'
                          : yoga.intensity === 'moderate'
                            ? 'border-l-warmaccent-500 bg-warmaccent-50'
                            : 'border-l-gray-400 bg-gray-50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-900">
                            {yoga.name[locale]}
                          </h4>
                          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                            {yoga.description[locale]}
                          </p>
                          {yoga.details && (
                            <p className="text-xs text-deepteal-600 mt-2 italic">
                              {yoga.details[locale]}
                            </p>
                          )}
                          <div className="mt-3 p-3 bg-white/70 rounded-lg border border-gray-200">
                            <p className="text-sm text-gray-800 font-medium">
                              <span className="text-deepteal-700">{locale === 'en' ? 'Effects: ' : 'प्रभाव: '}</span>
                              {yoga.effects[locale]}
                            </p>
                          </div>
                        </div>
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
                          yoga.intensity === 'powerful'
                            ? 'bg-deepteal-500 text-white'
                            : yoga.intensity === 'moderate'
                              ? 'bg-warmaccent-500 text-white'
                              : 'bg-gray-400 text-white'
                        }`}>
                          {yoga.intensity === 'powerful'
                            ? (locale === 'en' ? 'Powerful' : 'शक्तिशाली')
                            : yoga.intensity === 'moderate'
                              ? (locale === 'en' ? 'Moderate' : 'मध्यम')
                              : (locale === 'en' ? 'Mild' : 'सौम्य')
                          }
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}

            {/* Challenging Yogas */}
            {result.challengingYogas.length > 0 && (
              <SectionCard
                title={locale === 'en' ? 'Challenging Yogas' : 'चुनौतीपूर्ण योग'}
                icon={<AlertTriangle className="w-5 h-5 text-amber-500" />}
              >
                <div className="space-y-4">
                  {result.challengingYogas.map((yoga, idx) => (
                    <div
                      key={idx}
                      className="animate-fade-in-up p-5 rounded-xl border-l-4 border-l-amber-500 bg-amber-50 shadow-sm"
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-900">
                            {yoga.name[locale]}
                          </h4>
                          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                            {yoga.description[locale]}
                          </p>
                          {yoga.details && (
                            <p className="text-xs text-amber-600 mt-2 italic">
                              {yoga.details[locale]}
                            </p>
                          )}
                          <div className="mt-3 p-3 bg-white/70 rounded-lg border border-amber-200">
                            <p className="text-sm text-gray-800 font-medium">
                              <span className="text-amber-700">{locale === 'en' ? 'Effects: ' : 'प्रभाव: '}</span>
                              {yoga.effects[locale]}
                            </p>
                          </div>
                          {yoga.remedies && (
                            <div className="mt-3 p-3 bg-deepteal-50 rounded-lg border border-deepteal-200">
                              <p className="text-sm text-gray-800 font-medium">
                                <span className="text-deepteal-700">{locale === 'en' ? 'Remedies: ' : 'उपाय: '}</span>
                                {yoga.remedies[locale]}
                              </p>
                            </div>
                          )}
                        </div>
                        <span className="px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap bg-amber-500 text-white">
                          {locale === 'en' ? 'Challenging' : 'चुनौतीपूर्ण'}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}

            {/* Exchange Yogas */}
            {result.exchangeYogas.length > 0 && (
              <SectionCard
                title={locale === 'en' ? 'Exchange Yogas (Parivartan)' : 'परिवर्तन योग'}
                icon={<ArrowLeftRight className="w-5 h-5 text-warmaccent-500" />}
              >
                <div className="space-y-4">
                  {result.exchangeYogas.map((yoga, idx) => (
                    <div
                      key={idx}
                      className={`animate-fade-in-up p-5 rounded-xl border-l-4 shadow-sm ${
                        yoga.isPositive
                          ? 'border-l-warmaccent-500 bg-warmaccent-50'
                          : 'border-l-amber-500 bg-amber-50'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex-1">
                          <h4 className="font-bold text-lg text-gray-900">
                            {yoga.name[locale]}
                          </h4>
                          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                            {yoga.description[locale]}
                          </p>
                          {yoga.details && (
                            <p className="text-xs text-warmaccent-600 mt-2 italic">
                              {yoga.details[locale]}
                            </p>
                          )}
                          <div className="mt-3 p-3 bg-white/70 rounded-lg border border-gray-200">
                            <p className="text-sm text-gray-800 font-medium">
                              <span className="text-warmaccent-700">{locale === 'en' ? 'Effects: ' : 'प्रभाव: '}</span>
                              {yoga.effects[locale]}
                            </p>
                          </div>
                          {yoga.remedies && (
                            <div className="mt-3 p-3 bg-deepteal-50 rounded-lg border border-deepteal-200">
                              <p className="text-sm text-gray-800 font-medium">
                                <span className="text-deepteal-700">{locale === 'en' ? 'Remedies: ' : 'उपाय: '}</span>
                                {yoga.remedies[locale]}
                              </p>
                            </div>
                          )}
                        </div>
                        <span className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
                          yoga.isPositive ? 'bg-warmaccent-500 text-white' : 'bg-amber-500 text-white'
                        }`}>
                          {yoga.isPositive
                            ? (locale === 'en' ? 'Beneficial' : 'शुभ')
                            : (locale === 'en' ? 'Challenging' : 'चुनौतीपूर्ण')
                          }
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}

            {/* Share Result */}
            <SectionCard title={locale === 'en' ? 'Share Your Result' : 'परिणाम साझा करें'}>
              <ShareResult
                title={`Yoga Calculator Result`}
                text={result.yogas.length > 0
                  ? `I have ${result.yogas.length} yoga(s) in my chart! Check yours:`
                  : `Check your yogas (planetary combinations):`}
                url={locale === 'en' ? `https://www.vastucart.in/tools/yoga-calculator` : `https://www.vastucart.in/${locale}/tools/yoga-calculator`}
                shareLabel={locale === 'en' ? 'Share' : 'साझा करें'}
                copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
              />
            </SectionCard>
          </div>
        )}

        {result && (
          <RelatedToolsSection
            tools={relatedTools}
            locale={locale}
          />
        )}

        {/* FAQ Section */}
        <FAQSection
          faqs={faqItems}
          title={locale === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'}
        />
      </div>
    </ToolLayout>
  );
}
