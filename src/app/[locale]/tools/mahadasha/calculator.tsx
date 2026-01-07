'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, ChevronDown, ChevronUp, Timer } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BirthDatePicker } from '@/components/ui/birth-date-picker';
import { TimePicker } from '@/components/ui/time-picker';
import { PlacePicker } from '@/components/ui/place-picker';
import { ResultCard, TraitList } from '@/components/tools/result-display';
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard } from '@/components/ui/section-card';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

import {
  calculateMoonSign,
  calculateMahadashas,
  calculateAntardashas,
  getCurrentMahadasha,
  getBalanceAtBirth,
  VIMSHOTTARI_ORDER,
  type Place,
  type DashaPeriod,
  type AntarDashaPeriod,
} from '@/lib/astrology';
import { getMahadashaMeaning } from '@/lib/astrology/data/mahadasha-meanings';

interface MahadashaCalculatorProps {
  locale: 'en' | 'hi';
}

interface MahadashaResult {
  moonLongitude: number;
  balanceAtBirth: { planet: string; years: number; months: number; days: number };
  mahadashas: DashaPeriod[];
  currentMahadasha: DashaPeriod | null;
  currentAntardashas: AntarDashaPeriod[];
}

export default function MahadashaCalculator({ locale }: MahadashaCalculatorProps) {
  const t = useTranslations('tools.astrology.mahadasha');
  const tCommon = useTranslations('common');

  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // Result state
  const [result, setResult] = useState<MahadashaResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedMahadasha, setExpandedMahadasha] = useState<string | null>(null);

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
        // Calculate Moon position first
        const moonResult = calculateMoonSign({
          year: birthDate.getFullYear(),
          month: birthDate.getMonth() + 1,
          day: birthDate.getDate(),
          hour: parseInt(birthHour),
          minute: parseInt(birthMinute),
          latitude: selectedPlace.lat,
          longitude: selectedPlace.lng,
          timezone: selectedPlace.tz,
        });

        // Calculate Mahadashas
        const birthDateTime = new Date(
          birthDate.getFullYear(),
          birthDate.getMonth(),
          birthDate.getDate(),
          parseInt(birthHour),
          parseInt(birthMinute)
        );

        const mahadashas = calculateMahadashas(moonResult.moonLongitude, birthDateTime);
        const currentMahadasha = getCurrentMahadasha(mahadashas);
        const balanceAtBirth = getBalanceAtBirth(moonResult.moonLongitude);

        // Calculate Antardashas for current Mahadasha
        let currentAntardashas: AntarDashaPeriod[] = [];
        if (currentMahadasha) {
          currentAntardashas = calculateAntardashas(currentMahadasha, VIMSHOTTARI_ORDER);
          setExpandedMahadasha(currentMahadasha.planet);
        }

        setResult({
          moonLongitude: moonResult.moonLongitude,
          balanceAtBirth,
          mahadashas,
          currentMahadasha,
          currentAntardashas,
        });
      } catch (err) {
        setError(locale === 'en' ? 'Calculation error. Please check inputs.' : 'गणना त्रुटि। कृपया इनपुट जांचें।');
      } finally {
        setIsCalculating(false);
      }
    }, 500);
  };

  const handleReset = () => {
    setBirthDate(null);
    setBirthHour('12');
    setBirthMinute('00');
    setSelectedPlace(null);
    setResult(null);
    setError(null);
    setExpandedMahadasha(null);
  };

  const toggleMahadashaExpand = (planetId: string) => {
    setExpandedMahadasha(expandedMahadasha === planetId ? null : planetId);
  };

  // Helper to format date
  const formatDate = (date: Date) => {
    return date.toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  // Check if a period is current
  const isCurrent = (period: DashaPeriod | AntarDashaPeriod) => {
    const now = new Date();
    return now >= period.startDate && now < period.endDate;
  };

  // Current Mahadasha meaning
  const currentMeaning = result?.currentMahadasha
    ? getMahadashaMeaning(result.currentMahadasha.planet)
    : null;

  // FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="⏳"
      category="astrology"
      categoryLabel={locale === 'en' ? 'Astrology' : 'ज्योतिष'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {t('form.title')}
          </h2>

          <div className="space-y-6">
            {/* Birth Date */}
            <div>
              <BirthDatePicker
                label={t('form.birthDate')}
                value={birthDate}
                onChange={setBirthDate}
                locale={locale}
              />
            </div>

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

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                {error}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4">
              <Button onClick={handleCalculate} disabled={isCalculating}>
                {isCalculating ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Calculator className="w-4 h-4 mr-2" />
                )}
                {t('form.calculate')}
              </Button>
              <Button onClick={handleReset} variant="secondary">
                <RefreshCw className="w-4 h-4 mr-2" />
                {tCommon('reset')}
              </Button>
            </div>
          </div>
        </Card>

        {!result && (
          <EducationalSection
            title={educational.title}
            content={educational.content}
            blogLink={`/${locale}/blog/mahadasha-planetary-periods-guide`}
            blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
          />
        )}

        {/* Results Section */}
          {result && (
            <div className="animate-fade-in-up space-y-6">
              {/* Current Mahadasha Card */}
              {result.currentMahadasha && (
                <HeroResultCard
                  title={t('results.currentMahadasha')}
                  subtitle={locale === 'en' ? 'Planetary Period Analysis' : 'ग्रह दशा विश्लेषण'}
                  icon={<Timer className="w-6 h-6 text-white" />}
                >
                  <div className="text-center py-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                      {locale === 'hi'
                        ? result.currentMahadasha.planetName.hi
                        : result.currentMahadasha.planetName.en}
                    </h2>
                    <p className="text-white/90 text-lg">
                      {locale === 'hi'
                        ? result.currentMahadasha.planetName.en
                        : result.currentMahadasha.planetName.hi}
                    </p>
                    <p className="text-deepteal-300 text-sm mt-2">
                      {formatDate(result.currentMahadasha.startDate)} — {formatDate(result.currentMahadasha.endDate)}
                    </p>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <HeroStatCard
                      label={t('results.years')}
                      value={result.currentMahadasha.years.toFixed(1)}
                    />
                    <HeroStatCard
                      label={locale === 'en' ? 'Balance Years' : 'शेष वर्ष'}
                      value={result.balanceAtBirth.years.toString()}
                    />
                    <HeroStatCard
                      label={locale === 'en' ? 'Balance Months' : 'शेष महीने'}
                      value={result.balanceAtBirth.months.toString()}
                    />
                  </div>

                  <div className="mt-6">
                    <ShareResult
                      title={`My current Mahadasha is ${result.currentMahadasha.planetName.en}`}
                      text={`I'm in ${result.currentMahadasha.planetName.en} Mahadasha (${result.currentMahadasha.years.toFixed(1)} years). Find your planetary periods:`}
                      url={`https://www.vastucart.in/${locale}/tools/mahadasha`}
                      shareLabel={tCommon('share')}
                      copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                    />
                  </div>
                </HeroResultCard>
              )}

              {/* Balance at Birth */}
              <SectionCard title={t('results.balanceAtBirth')} accentBorder="warmaccent">
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-deepteal-600">
                      {result.balanceAtBirth.years}
                    </p>
                    <p className="text-sm text-gray-500">{t('results.years')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-deepteal-600">
                      {result.balanceAtBirth.months}
                    </p>
                    <p className="text-sm text-gray-500">{t('results.months')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-deepteal-600">
                      {result.balanceAtBirth.days}
                    </p>
                    <p className="text-sm text-gray-500">{t('results.days')}</p>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">
                  {t('results.balanceNote')}
                </p>
              </SectionCard>

              {/* Current Mahadasha Interpretation */}
              {currentMeaning && (
                <SectionCard title={t('results.interpretation')}>
                  <p className="text-gray-700 mb-6">
                    {locale === 'hi' ? currentMeaning.generalTheme.hi : currentMeaning.generalTheme.en}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ResultCard title={t('results.positiveEffects')} className="bg-green-50 border-green-200">
                      <TraitList
                        title=""
                        traits={locale === 'hi' ? currentMeaning.positiveEffects.hi : currentMeaning.positiveEffects.en}
                        type="positive"
                      />
                    </ResultCard>

                    <ResultCard title={t('results.challenges')} className="bg-red-50 border-red-200">
                      <TraitList
                        title=""
                        traits={locale === 'hi' ? currentMeaning.challenges.hi : currentMeaning.challenges.en}
                        type="negative"
                      />
                    </ResultCard>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    <div className="p-4 bg-deepteal-50 rounded-xl border border-deepteal-100">
                      <h4 className="font-semibold text-deepteal-900 mb-2">{t('results.career')}</h4>
                      <p className="text-sm text-deepteal-800">
                        {locale === 'hi' ? currentMeaning.career.hi : currentMeaning.career.en}
                      </p>
                    </div>

                    <div className="p-4 bg-warmaccent-50 rounded-xl border border-warmaccent-100">
                      <h4 className="font-semibold text-warmaccent-900 mb-2">{t('results.relationships')}</h4>
                      <p className="text-sm text-warmaccent-800">
                        {locale === 'hi' ? currentMeaning.relationships.hi : currentMeaning.relationships.en}
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-gradient-to-r from-deepteal-50 to-warmaccent-50 rounded-xl border border-deepteal-100 mt-6">
                    <h4 className="font-semibold text-deepteal-900 mb-2">{t('results.remedies')}</h4>
                    <ul className="list-disc list-inside text-sm text-deepteal-800 space-y-1">
                      {(locale === 'hi' ? currentMeaning.remedies.hi : currentMeaning.remedies.en).map((remedy, i) => (
                        <li key={i}>{remedy}</li>
                      ))}
                    </ul>
                  </div>
                </SectionCard>
              )}

              {/* Current Antardashas */}
              {result.currentAntardashas.length > 0 && (
                <SectionCard title={t('results.antardashas')}>
                  <div className="space-y-2">
                    {result.currentAntardashas.map((ad) => (
                      <div
                        key={ad.planet}
                        className={`p-3 rounded-lg border ${
                          isCurrent(ad)
                            ? 'bg-deepteal-100 border-deepteal-300'
                            : 'bg-gray-50 border-gray-200'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <div
                              className="w-3 h-3 rounded-full"
                              style={{ backgroundColor: ad.color }}
                            />
                            <span className="font-medium">
                              {locale === 'hi' ? ad.planetName.hi : ad.planetName.en}
                            </span>
                            {isCurrent(ad) && (
                              <span className="text-xs bg-deepteal-600 text-white px-2 py-0.5 rounded-full">
                                {t('results.current')}
                              </span>
                            )}
                          </div>
                          <span className="text-sm text-gray-500">
                            {formatDate(ad.startDate)} - {formatDate(ad.endDate)}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              )}

              {/* All Mahadashas Timeline */}
              <SectionCard title={t('results.allMahadashas')}>
                <div className="space-y-2">
                  {result.mahadashas.slice(0, 9).map((md) => (
                    <div key={`${md.planet}-${md.startDate.getTime()}`}>
                      <button
                        onClick={() => toggleMahadashaExpand(md.planet)}
                        className={`w-full p-4 rounded-lg border transition-all ${
                          isCurrent(md)
                            ? 'bg-deepteal-100 border-deepteal-300'
                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-4 h-4 rounded-full"
                              style={{ backgroundColor: md.color }}
                            />
                            <span className="font-medium">
                              {locale === 'hi' ? md.planetName.hi : md.planetName.en}
                            </span>
                            <span className="text-sm text-gray-500">
                              ({md.years.toFixed(1)} {t('results.years')})
                            </span>
                            {isCurrent(md) && (
                              <span className="text-xs bg-deepteal-600 text-white px-2 py-0.5 rounded-full">
                                {t('results.current')}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">
                              {formatDate(md.startDate)} - {formatDate(md.endDate)}
                            </span>
                            {expandedMahadasha === md.planet ? (
                              <ChevronUp className="w-4 h-4 text-gray-500" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-gray-500" />
                            )}
                          </div>
                        </div>
                      </button>

                      {/* Expanded Antardasha */}
                        {expandedMahadasha === md.planet && (
                          <div className="animate-fade-in-up overflow-hidden"
                          >
                            <div className="ml-6 mt-2 space-y-1 border-l-2 border-gray-200 pl-4">
                              {calculateAntardashas(md, VIMSHOTTARI_ORDER).map((ad) => (
                                <div
                                  key={`${ad.planet}-${ad.startDate.getTime()}`}
                                  className={`p-2 rounded text-sm ${
                                    isCurrent(ad) ? 'bg-deepteal-50' : ''
                                  }`}
                                >
                                  <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-2">
                                      <div
                                        className="w-2 h-2 rounded-full"
                                        style={{ backgroundColor: ad.color }}
                                      />
                                      <span>{locale === 'hi' ? ad.planetName.hi : ad.planetName.en}</span>
                                      {isCurrent(ad) && (
                                        <span className="text-xs bg-deepteal-500 text-white px-1.5 py-0.5 rounded">
                                          {t('results.current')}
                                        </span>
                                      )}
                                    </div>
                                    <span className="text-xs text-gray-500">
                                      {formatDate(ad.startDate)} - {formatDate(ad.endDate)}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                    </div>
                  ))}
                </div>
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
        <FAQSection title={tCommon('faq')} faqs={faqs} />
      </div>
    </ToolLayout>
  );
}
