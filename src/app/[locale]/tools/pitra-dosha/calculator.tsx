'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2 } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BirthDatePicker } from '@/components/ui/birth-date-picker';
import { TimePicker } from '@/components/ui/time-picker';
import { PlacePicker } from '@/components/ui/place-picker';
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
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
  checkPitraDosha,
  EFFECTS,
  REMEDIES,
  type DoshaIndicator,
  type Severity,
} from '@/lib/astrology/data/pitra-dosha-data';

interface PitraDoshaCalculatorProps {
  locale: 'en' | 'hi';
}

interface PitraDoshaResult {
  hasPitraDosha: boolean;
  indicators: DoshaIndicator[];
  severity: Severity;
  ninthHouseDetails: {
    sign: number;
    lord: string;
    planetsIn9th: string[];
  };
  sunHouse: number;
}

const ZODIAC_SIGNS = [
  { en: 'Aries', hi: 'मेष' },
  { en: 'Taurus', hi: 'वृषभ' },
  { en: 'Gemini', hi: 'मिथुन' },
  { en: 'Cancer', hi: 'कर्क' },
  { en: 'Leo', hi: 'सिंह' },
  { en: 'Virgo', hi: 'कन्या' },
  { en: 'Libra', hi: 'तुला' },
  { en: 'Scorpio', hi: 'वृश्चिक' },
  { en: 'Sagittarius', hi: 'धनु' },
  { en: 'Capricorn', hi: 'मकर' },
  { en: 'Aquarius', hi: 'कुंभ' },
  { en: 'Pisces', hi: 'मीन' }
];

const PLANET_NAMES: Record<string, { en: string; hi: string }> = {
  sun: { en: 'Sun', hi: 'सूर्य' },
  moon: { en: 'Moon', hi: 'चंद्र' },
  mars: { en: 'Mars', hi: 'मंगल' },
  mercury: { en: 'Mercury', hi: 'बुध' },
  jupiter: { en: 'Jupiter', hi: 'गुरु' },
  venus: { en: 'Venus', hi: 'शुक्र' },
  saturn: { en: 'Saturn', hi: 'शनि' },
  rahu: { en: 'Rahu', hi: 'राहु' },
  ketu: { en: 'Ketu', hi: 'केतु' },
};

export default function PitraDoshaCalculator({ locale }: PitraDoshaCalculatorProps) {
  const t = useTranslations('tools.astrology.pitraDosh');
  const tCommon = useTranslations('common');

  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // Result state
  const [result, setResult] = useState<PitraDoshaResult | null>(null);
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

        // Extract planet houses
        const planetHouses = {
          sun: chart.planets.sun.house,
          moon: chart.planets.moon.house,
          mars: chart.planets.mars.house,
          mercury: chart.planets.mercury.house,
          jupiter: chart.planets.jupiter.house,
          venus: chart.planets.venus.house,
          saturn: chart.planets.saturn.house,
          rahu: chart.planets.rahu.house,
          ketu: chart.planets.ketu.house,
          ascendantSign: chart.lagna.sign.index,
        };

        // Check for Pitra Dosha
        const doshaResult = checkPitraDosha(planetHouses);

        setResult({
          ...doshaResult,
          sunHouse: planetHouses.sun,
        });
      } catch (err) {
        setError(locale === 'en' ? 'Error calculating Pitra Dosha' : 'पितृ दोष गणना में त्रुटि');
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
      icon="" iconName="Flame"
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
              className="flex-1 bg-gradient-to-r from-deepteal-500 to-deepteal-600 hover:from-deepteal-600 hover:to-deepteal-700"
            >
              {isCalculating ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  {tCommon('loading')}
                </>
              ) : (
                <>
                  <Calculator className="w-4 h-4 mr-2" />
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
            blogLink="/blog/pitra-dosha-calculator-ancestral-karma"
            blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
          />
        )}

        {/* Results */}
        {result && (
          <div className="animate-fade-in-up space-y-6">
              {/* Main Status Card */}
              <HeroResultCard
                title={locale === 'en' ? 'Pitra Dosha Analysis' : 'पितृ दोष विश्लेषण'}
                subtitle={locale === 'en' ? 'Ancestral Karmic Assessment' : 'पितृ कर्मिक मूल्यांकन'}
                colorScheme={result.hasPitraDosha ? 'deepteal' : 'warmaccent'}
              >
                <div className="text-center py-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {result.indicators[0].name[locale]}
                  </h3>
                  <p className={`text-lg ${result.hasPitraDosha ? 'text-white/90' : 'text-white/90'}`}>
                    {result.indicators[0].description[locale]}
                  </p>
                </div>

                {/* Severity Badge */}
                {result.hasPitraDosha && (
                  <div className="text-center mb-4">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      result.severity === 'severe'
                        ? 'bg-red-500/30 text-red-200'
                        : result.severity === 'moderate'
                          ? 'bg-yellow-500/30 text-yellow-200'
                          : 'bg-green-500/30 text-green-200'
                    }`}>
                      {result.severity === 'severe'
                        ? (locale === 'en' ? 'Severe' : 'तीव्र')
                        : result.severity === 'moderate'
                          ? (locale === 'en' ? 'Moderate' : 'मध्यम')
                          : (locale === 'en' ? 'Mild' : 'सौम्य')
                      }
                    </span>
                  </div>
                )}

                {/* Sun and 9th House Details */}
                <div className="grid grid-cols-2 gap-4">
                  <HeroStatCard
                    label={t('results.sunPosition')}
                    value={locale === 'en' ? `House ${result.sunHouse}` : `${result.sunHouse} भाव`}
                    subValue=""
                    colorScheme={result.hasPitraDosha ? 'deepteal' : 'warmaccent'}
                  />
                  <HeroStatCard
                    label={t('results.ninthHouse')}
                    value={ZODIAC_SIGNS[result.ninthHouseDetails.sign][locale]}
                    subValue={`${locale === 'en' ? 'Lord: ' : 'स्वामी: '}${PLANET_NAMES[result.ninthHouseDetails.lord][locale]}`}
                    colorScheme={result.hasPitraDosha ? 'deepteal' : 'warmaccent'}
                  />
                </div>
              </HeroResultCard>

              {/* All Indicators */}
              {result.indicators.length > 1 && (
                <SectionCard title={t('results.indicators')}>
                  <div className="space-y-3">
                    {result.indicators.map((indicator, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        <h4 className="font-semibold text-gray-900">
                          {indicator.name[locale]}
                        </h4>
                        <p className="text-sm text-gray-600 mt-1">
                          {indicator.description[locale]}
                        </p>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              )}

              {/* Effects Section */}
              {result.hasPitraDosha && (
                <SectionCard title={t('results.effects')}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {EFFECTS.map((effect, idx) => (
                      <div
                        key={idx}
                        className="bg-gray-50 rounded-lg p-4"
                      >
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {effect.area[locale]}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {effect.effect[locale]}
                        </p>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              )}

              {/* Remedies Section */}
              {result.hasPitraDosha && (
                <SectionCard title={t('results.remedies')} accentBorder="gradient">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {REMEDIES.map((remedy) => (
                      <div
                        key={remedy.id}
                        className="bg-gradient-to-r from-deepteal-50 to-warmaccent-50 border border-deepteal-100 rounded-lg p-4"
                      >
                        <div className="flex items-start gap-3">
                          
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {remedy.name[locale]}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {remedy.description[locale]}
                            </p>
                            {remedy.timing && (
                              <p className="text-xs text-warmaccent-600 mt-2">
                                 {remedy.timing[locale]}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              )}

              {/* Share Result */}
              <SectionCard title={locale === 'en' ? 'Share Your Result' : 'परिणाम साझा करें'}>
                <ShareResult
                  title={`Pitra Dosha Check Result`}
                  text={result.hasPitraDosha
                    ? `I checked for Pitra Dosha - ${result.severity} level found. Check yours:`
                    : `No Pitra Dosha in my chart! Check yours:`}
                  url={locale === 'en' ? `https://www.vastucart.in/tools/pitra-dosha` : `https://www.vastucart.in/${locale}/tools/pitra-dosha`}
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
