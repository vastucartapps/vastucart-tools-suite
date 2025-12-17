'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, Crown } from 'lucide-react';

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
  checkRajYogas,
  RESULT_INTERPRETATION,
  type RajYogaInfo,
} from '@/lib/astrology/data/raj-yoga-data';

interface RajYogaCalculatorProps {
  locale: 'en' | 'hi';
}

interface RajYogaResult {
  yogas: RajYogaInfo[];
  interpretation: {
    title: { en: string; hi: string };
    description: { en: string; hi: string };
  };
}

export default function RajYogaCalculator({ locale }: RajYogaCalculatorProps) {
  const t = useTranslations('tools.astrology.rajYoga');
  const tCommon = useTranslations('common');

  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // Result state
  const [result, setResult] = useState<RajYogaResult | null>(null);
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
        const planetData = {
          sun: { sign: chart.planets.sun.sign.index, house: chart.planets.sun.house },
          moon: { sign: chart.planets.moon.sign.index, house: chart.planets.moon.house },
          mars: { sign: chart.planets.mars.sign.index, house: chart.planets.mars.house },
          mercury: { sign: chart.planets.mercury.sign.index, house: chart.planets.mercury.house },
          jupiter: { sign: chart.planets.jupiter.sign.index, house: chart.planets.jupiter.house },
          venus: { sign: chart.planets.venus.sign.index, house: chart.planets.venus.house },
          saturn: { sign: chart.planets.saturn.sign.index, house: chart.planets.saturn.house },
          ascendantSign: chart.lagna.sign.index,
        };

        // Check for Raj Yogas
        const yogas = checkRajYogas(planetData);

        // Determine interpretation
        let interpretation;
        if (yogas.length === 0) {
          interpretation = RESULT_INTERPRETATION.none;
        } else if (yogas.length === 1) {
          interpretation = RESULT_INTERPRETATION.single;
        } else {
          interpretation = RESULT_INTERPRETATION.multiple;
        }

        setResult({ yogas, interpretation });
      } catch (err) {
        setError(locale === 'en' ? 'Error checking Raj Yogas' : 'राजयोग जांच में त्रुटि');
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

  const faqItems = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="👑"
      category="astrology"
      categoryLabel={locale === 'en' ? 'Astrology' : 'ज्योतिष'}
    >
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Input Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
            <Calculator className="w-5 h-5" />
            {t('form.title')}
          </h2>

          <div className="space-y-6 mb-6">
            {/* Birth Date */}
            <BirthDatePicker
              label={t('form.birthDate')}
              value={birthDate}
              onChange={setBirthDate}
              locale={locale}
              required
            />

            {/* Birth Time */}
            <TimePicker
              label={t('form.birthTime')}
              hour={birthHour}
              minute={birthMinute}
              onHourChange={setBirthHour}
              onMinuteChange={setBirthMinute}
              locale={locale}
              required
            />

            {/* Birth Place */}
            <PlacePicker
              label={t('form.birthPlace')}
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
              className="flex-1 bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700"
            >
              {isCalculating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {tCommon('loading')}
                </>
              ) : (
                <>
                  <Crown className="w-4 h-4 mr-2" />
                  {t('form.calculate')}
                </>
              )}
            </Button>
            <Button
              onClick={handleReset}
              variant="secondary"
              className="px-6"
            >
              <RefreshCw className="w-4 h-4 mr-2" />
              {tCommon('reset')}
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
            blogLink={`/${locale}/blog/raj-yoga-calculator-success-luck`}
            blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
          />
        )}

        {/* Results */}
        {result && (
          <div className="animate-fade-in-up space-y-6">
              {/* Main Status Card - Use warmaccent for yogas found */}
              <HeroResultCard
                title={locale === 'en' ? 'Raj Yoga Analysis' : 'राजयोग विश्लेषण'}
                subtitle={locale === 'en' ? 'Royal Planetary Combinations' : 'शाही ग्रह संयोजन'}
                icon={<Crown className="w-6 h-6 text-white" />}
                colorScheme={result.yogas.length > 0 ? 'warmaccent' : 'deepteal'}
              >
                <div className="text-center py-6">
                  <div className="text-6xl mb-4">
                    {result.yogas.length > 0 ? '👑' : '🔍'}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {result.interpretation.title[locale]}
                  </h3>
                  <p className={`text-lg ${result.yogas.length > 0 ? 'text-warmaccent-200' : 'text-deepteal-200'}`}>
                    {result.interpretation.description[locale]}
                  </p>
                  {result.yogas.length > 0 && (
                    <div className="mt-4">
                      <span className="px-4 py-2 rounded-full bg-white/20 text-sm font-medium text-white">
                        {locale === 'en'
                          ? `${result.yogas.length} Yoga${result.yogas.length > 1 ? 's' : ''} Found`
                          : `${result.yogas.length} योग पाए गए`
                        }
                      </span>
                    </div>
                  )}
                </div>
              </HeroResultCard>

              {/* Yogas List */}
              {result.yogas.length > 0 && (
                <SectionCard title={t('results.yogasFound')} icon={<Crown className="w-5 h-5 text-warmaccent-500" />}>
                  <div className="space-y-4">
                    {result.yogas.map((yoga, idx) => (
                      <div
                        key={idx}
                        className={`animate-fade-in-up p-5 rounded-xl border-l-4 shadow-sm ${
                          yoga.intensity === 'powerful'
                            ? 'border-l-warmaccent-500 bg-warmaccent-50'
                            : yoga.intensity === 'moderate'
                              ? 'border-l-deepteal-500 bg-deepteal-50'
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
                            <div className="mt-3 p-3 bg-white/70 rounded-lg border border-gray-200">
                              <p className="text-sm text-gray-800 font-medium">
                                <span className="text-deepteal-700">{locale === 'en' ? 'Effects: ' : 'प्रभाव: '}</span>
                                {yoga.effects[locale]}
                              </p>
                            </div>
                          </div>
                          <span className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${
                            yoga.intensity === 'powerful'
                              ? 'bg-warmaccent-500 text-white'
                              : yoga.intensity === 'moderate'
                                ? 'bg-deepteal-500 text-white'
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

              {/* Share Result */}
              <SectionCard title={locale === 'en' ? 'Share Your Result' : 'परिणाम साझा करें'}>
                <ShareResult
                  title={`Raj Yoga Analysis Result`}
                  text={result.yogas.length > 0
                    ? `I have ${result.yogas.length} Raj Yoga(s) in my chart! Check yours:`
                    : `Check your Raj Yogas (Royal Combinations):`}
                  url={`https://tools.vastucart.in/${locale}/tools/raj-yoga`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </SectionCard>
            </div>
          )}

        {result && (
          <RelatedToolsSection
            tools={relatedTools}
            locale={locale as 'en' | 'hi'}
          />
        )}

        {/* FAQ Section */}
        <FAQSection faqs={faqItems} title={locale === 'en' ? 'Frequently Asked Questions' : 'अक्सर पूछे जाने वाले प्रश्न'} />
      </div>
    </ToolLayout>
  );
}
