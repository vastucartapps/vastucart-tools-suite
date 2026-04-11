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
import { SectionCard, SectionInfoRow } from '@/components/ui/section-card';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

import {
  calculateFullChart,
  type Place,
} from '@/lib/astrology';

import {
  checkKalsarp,
  DIRECTION_INFO,
  GENERAL_EFFECTS,
  REMEDIES,
  PARTIAL_KALSARP,
  NO_KALSARP,
  type KalsarpInfo,
  type KalsarpDirection,
} from '@/lib/astrology/data/kalsarp-data';

interface KalsarpCalculatorProps {
  locale: 'en' | 'hi';
}

interface KalsarpResult {
  isKalsarp: boolean;
  isPartial: boolean;
  direction: KalsarpDirection | null;
  outsidePlanets: string[];
  kalsarpType: KalsarpInfo | null;
  rahuHouse: number;
  ketuHouse: number;
  planetHouses: {
    sun: number;
    moon: number;
    mars: number;
    mercury: number;
    jupiter: number;
    venus: number;
    saturn: number;
    rahu: number;
    ketu: number;
  };
}

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

export default function KalsarpCalculator({ locale }: KalsarpCalculatorProps) {
  const t = useTranslations('tools.astrology.kalsarp');
  const tCommon = useTranslations('common');

  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // Result state
  const [result, setResult] = useState<KalsarpResult | null>(null);
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

    const latitude = selectedPlace.lat;
    const longitude = selectedPlace.lng;
    const timezone = selectedPlace.tz;

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
          latitude,
          longitude,
          timezone,
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
        };

        // Check for Kalsarp
        const kalsarpResult = checkKalsarp(planetHouses);

        setResult({
          ...kalsarpResult,
          rahuHouse: planetHouses.rahu,
          ketuHouse: planetHouses.ketu,
          planetHouses,
        });
      } catch (err) {
        setError(locale === 'en' ? 'Error calculating Kalsarp Dosha' : 'कालसर्प दोष गणना में त्रुटि');
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
      icon=""
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
              value={birthDate}
              onChange={setBirthDate}
              locale={locale}
              label={t('form.birthDate')}
              required
            />

            {/* Birth Time */}
            <TimePicker
              hour={birthHour}
              minute={birthMinute}
              onHourChange={setBirthHour}
              onMinuteChange={setBirthMinute}
              locale={locale}
              label={t('form.birthTime')}
            />

            {/* Birth Place */}
            <PlacePicker
              value={selectedPlace}
              onChange={setSelectedPlace}
              locale={locale}
              label={t('form.birthPlace')}
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
            blogLink={`/${locale}/blog/kalsarp-dosha-calculator-serpent-affliction`}
            blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
          />
        )}

        {/* Results */}
        {result && (
          <div className="animate-fade-in-up space-y-6">
              {/* Main Status Card */}
              <HeroResultCard
                title={locale === 'en' ? 'Kalsarp Dosha Analysis' : 'कालसर्प दोष विश्लेषण'}
                subtitle={locale === 'en' ? 'Rahu-Ketu Axis Assessment' : 'राहु-केतु अक्ष मूल्यांकन'}
                icon={<span className="text-2xl">{result.isKalsarp ? '' : ''}</span>}
                colorScheme={result.isKalsarp ? 'deepteal' : 'warmaccent'}
              >
                <div className="text-center py-6">
                  <div className="text-6xl mb-4">
                    {result.isKalsarp ? '' : result.isPartial ? '' : ''}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {result.isKalsarp
                      ? result.kalsarpType?.name[locale]
                      : result.isPartial
                        ? PARTIAL_KALSARP.name[locale]
                        : NO_KALSARP.name[locale]
                    }
                  </h3>
                  <p className={`text-lg ${result.isKalsarp ? 'text-white/90' : 'text-white/90'}`}>
                    {result.isKalsarp
                      ? result.kalsarpType?.effects[locale]
                      : result.isPartial
                        ? PARTIAL_KALSARP.description[locale]
                        : NO_KALSARP.description[locale]
                    }
                  </p>
                </div>

                {/* Direction */}
                {result.direction && (
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-4 border border-white/20">
                    <h4 className="font-semibold mb-2 text-white">{t('results.direction')}</h4>
                    <div className="text-lg font-medium text-white">
                      {DIRECTION_INFO[result.direction].name[locale]}
                    </div>
                    <p className="text-sm text-white/90 mt-1">
                      {DIRECTION_INFO[result.direction].description[locale]}
                    </p>
                  </div>
                )}

                {/* Rahu-Ketu Position */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <HeroStatCard
                    label={t('results.rahuPosition')}
                    value={locale === 'en' ? `House ${result.rahuHouse}` : `${result.rahuHouse} भाव`}
                    subValue=""
                    colorScheme={result.isKalsarp ? 'deepteal' : 'warmaccent'}
                  />
                  <HeroStatCard
                    label={t('results.ketuPosition')}
                    value={locale === 'en' ? `House ${result.ketuHouse}` : `${result.ketuHouse} भाव`}
                    subValue=""
                    colorScheme={result.isKalsarp ? 'deepteal' : 'warmaccent'}
                  />
                </div>

                {/* Intensity Badge */}
                {result.kalsarpType && (
                  <div className="text-center">
                    <span className={`px-4 py-2 rounded-full text-sm font-medium ${
                      result.kalsarpType.intensity === 'severe'
                        ? 'bg-red-500/30 text-red-200'
                        : result.kalsarpType.intensity === 'moderate'
                          ? 'bg-yellow-500/30 text-yellow-200'
                          : 'bg-green-500/30 text-green-200'
                    }`}>
                      {result.kalsarpType.intensity === 'severe'
                        ? (locale === 'en' ? 'Severe' : 'तीव्र')
                        : result.kalsarpType.intensity === 'moderate'
                          ? (locale === 'en' ? 'Moderate' : 'मध्यम')
                          : (locale === 'en' ? 'Mild' : 'सौम्य')
                      }
                    </span>
                  </div>
                )}
              </HeroResultCard>

              <div className="text-[13px] text-gray-500 space-y-1">
                <p>
                  <a href="https://stotra.vastucart.in/purpose/kaal-sarp-dosh" className="text-deepteal-600 hover:text-deepteal-700 underline">
                    {locale === 'hi' ? 'काल सर्प दोष निवारण स्तोत्र →' : 'Recite Kaal Sarp Dosh Nivaran Stotras →'}
                  </a>
                </p>
                <p>
                  <a href="https://kundali.vastucart.in/signup?ref=vastucart&tool=kalsarp" className="text-deepteal-600 hover:text-deepteal-700 underline">
                    {locale === 'hi' ? 'विस्तृत काल सर्प दोष विश्लेषण →' : 'Get detailed Kaal Sarp Dosh analysis in your full Kundali →'}
                  </a>
                </p>
              </div>

              {/* Planet Positions */}
              <SectionCard title={t('results.planetPositions')}>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {Object.entries(result.planetHouses).map(([planet, house]) => (
                    <div
                      key={planet}
                      className={`p-3 rounded-lg text-center ${
                        planet === 'rahu' || planet === 'ketu'
                          ? 'bg-deepteal-100'
                          : result.outsidePlanets.includes(planet)
                            ? 'bg-warmaccent-100'
                            : 'bg-gray-50'
                      }`}
                    >
                      <div className="text-xs text-gray-500">
                        {PLANET_NAMES[planet][locale]}
                      </div>
                      <div className="font-semibold text-gray-900">
                        {locale === 'en' ? `H${house}` : `भा${house}`}
                      </div>
                    </div>
                  ))}
                </div>
                {result.outsidePlanets.length > 0 && (
                  <p className="mt-3 text-sm text-warmaccent-600">
                    {locale === 'en'
                      ? `Outside planets: ${result.outsidePlanets.map(p => PLANET_NAMES[p].en).join(', ')}`
                      : `बाहरी ग्रह: ${result.outsidePlanets.map(p => PLANET_NAMES[p].hi).join(', ')}`
                    }
                  </p>
                )}
              </SectionCard>

              {/* Effects Section */}
              {(result.isKalsarp || result.isPartial) && (
                <SectionCard title={t('results.effects')}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">
                        {locale === 'en' ? 'Challenges' : 'चुनौतियां'}
                      </h4>
                      <ul className="space-y-2">
                        {GENERAL_EFFECTS.negative.map((effect, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-red-500">•</span>
                            {effect[locale]}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-600 mb-3">
                        {locale === 'en' ? 'Positive Aspects' : 'सकारात्मक पहलू'}
                      </h4>
                      <ul className="space-y-2">
                        {GENERAL_EFFECTS.positive.map((effect, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="text-green-500">•</span>
                            {effect[locale]}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </SectionCard>
              )}

              {/* Remedies Section */}
              {(result.isKalsarp || result.isPartial) && (
                <SectionCard title={t('results.remedies')} accentBorder="gradient">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {REMEDIES.map((remedy) => (
                      <div
                        key={remedy.id}
                        className="bg-gradient-to-r from-deepteal-50 to-warmaccent-50 border border-deepteal-100 rounded-lg p-4"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">
                            {remedy.type === 'mantra' && ''}
                            {remedy.type === 'puja' && ''}
                            {remedy.type === 'donation' && ''}
                            {remedy.type === 'gemstone' && ''}
                            {remedy.type === 'lifestyle' && ''}
                          </span>
                          <div>
                            <h4 className="font-semibold text-gray-900">
                              {remedy.name[locale]}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              {remedy.description[locale]}
                            </p>
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
                  title={`Kalsarp Dosha Check Result`}
                  text={result.isKalsarp
                    ? `I have ${result.kalsarpType?.name.en}. Check yours:`
                    : result.isPartial
                      ? `I have Partial Kalsarp Dosha. Check yours:`
                      : `I don't have Kalsarp Dosha! Check yours:`}
                  url={locale === 'en' ? `https://www.vastucart.in/tools/kalsarp-dosha` : `https://www.vastucart.in/${locale}/tools/kalsarp-dosha`}
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
