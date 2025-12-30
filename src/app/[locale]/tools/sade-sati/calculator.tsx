'use client';

import { useState, useMemo } from 'react';
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
  getCurrentSaturnSign,
  getSadeSatiPhase,
  getSmallPanoti,
  getNextSadeSatiDates,
  getCurrentSadeSatiDates,
  PHASE_INFO,
  GENERAL_EFFECTS,
  REMEDIES,
  ZODIAC_SIGNS,
  type SadeSatiPhase
} from '@/lib/astrology/data/sadesati-data';

interface SadeSatiCalculatorProps {
  locale: 'en' | 'hi';
}

interface SadeSatiResult {
  moonSign: number;
  saturnSign: number;
  phase: SadeSatiPhase;
  isInSadeSati: boolean;
  smallPanoti: { position: 4 | 8; name: { en: string; hi: string }; description: { en: string; hi: string } } | null;
  currentDates: {
    startDate: Date;
    peakStartDate: Date;
    peakEndDate: Date;
    endDate: Date;
  } | null;
  nextDates: {
    startDate: Date;
    peakStartDate: Date;
    peakEndDate: Date;
    endDate: Date;
  };
  percentComplete: number;
}

export default function SadeSatiCalculator({ locale }: SadeSatiCalculatorProps) {
  const t = useTranslations('tools.astrology.sadeSati');
  const tCommon = useTranslations('common');

  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // Result state
  const [result, setResult] = useState<SadeSatiResult | null>(null);
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
        // Calculate birth chart to get Moon sign
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

        const moonSign = chart.moonSign.sign.index;

        // Get current Saturn position
        const today = new Date();
        const saturnSign = getCurrentSaturnSign(today);

        // Determine Sade Sati phase
        const phase = getSadeSatiPhase(moonSign, saturnSign);
        const isInSadeSati = phase !== 'none';

        // Check for small panoti
        const smallPanoti = getSmallPanoti(moonSign, saturnSign);

        // Get current Sade Sati dates if in Sade Sati
        const currentDates = isInSadeSati ? getCurrentSadeSatiDates(moonSign, today) : null;

        // Get next Sade Sati dates
        const nextDates = getNextSadeSatiDates(moonSign, today);

        // Calculate percent complete if in Sade Sati
        let percentComplete = 0;
        if (currentDates) {
          const totalDuration = currentDates.endDate.getTime() - currentDates.startDate.getTime();
          const elapsed = today.getTime() - currentDates.startDate.getTime();
          percentComplete = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));
        }

        setResult({
          moonSign,
          saturnSign,
          phase,
          isInSadeSati,
          smallPanoti,
          currentDates,
          nextDates,
          percentComplete
        });
      } catch (err) {
        setError(locale === 'en' ? 'Error calculating Sade Sati' : 'साढ़े साती गणना में त्रुटि');
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

  const formatDate = (date: Date) => {
    return date.toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const phaseInfo = useMemo(() => {
    if (!result) return null;
    return PHASE_INFO[result.phase];
  }, [result]);

  const faqItems = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="🪐"
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
            blogLink={`/${locale}/blog/sade-sati-calculator-saturn-cycle`}
            blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
          />
        )}

        {/* Results */}
        {result && (
          <div className="animate-fade-in-up space-y-6">
              {/* Main Status Card */}
              <HeroResultCard
                title={locale === 'en' ? 'Sade Sati Analysis' : 'साढ़े साती विश्लेषण'}
                subtitle={locale === 'en' ? 'Saturn Transit Assessment' : 'शनि गोचर मूल्यांकन'}
                icon={<span className="text-2xl">🪐</span>}
                colorScheme={result.isInSadeSati ? 'deepteal' : 'warmaccent'}
              >
                <div className="text-center py-6">
                  <div className="text-6xl mb-4">
                    {result.isInSadeSati ? '🪐' : result.smallPanoti ? '⚠️' : '✨'}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {phaseInfo?.name[locale]}
                  </h3>
                  <p className={`text-lg ${result.isInSadeSati ? 'text-deepteal-200' : 'text-warmaccent-200'}`}>
                    {phaseInfo?.description[locale]}
                  </p>
                </div>

                {/* Moon and Saturn Signs */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <HeroStatCard
                    label={t('results.moonSign')}
                    value={ZODIAC_SIGNS[result.moonSign][locale]}
                    subValue="🌙"
                    colorScheme={result.isInSadeSati ? 'deepteal' : 'warmaccent'}
                  />
                  <HeroStatCard
                    label={t('results.saturnSign')}
                    value={ZODIAC_SIGNS[result.saturnSign][locale]}
                    subValue="🪐"
                    colorScheme={result.isInSadeSati ? 'deepteal' : 'warmaccent'}
                  />
                </div>

                {/* Progress Bar for Sade Sati */}
                {result.isInSadeSati && result.currentDates && (
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 mb-4">
                    <div className="flex justify-between text-sm mb-2 text-white">
                      <span>{t('results.progress')}</span>
                      <span>{Math.round(result.percentComplete)}%</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${result.percentComplete}%` }}
                        className="h-full bg-gradient-to-r from-warmaccent-400 to-warmaccent-500 rounded-full transition-all duration-1000 ease-out"
                      />
                    </div>
                    <div className="flex justify-between text-xs mt-2 text-deepteal-300">
                      <span>{formatDate(result.currentDates.startDate)}</span>
                      <span>{formatDate(result.currentDates.endDate)}</span>
                    </div>
                  </div>
                )}

                {/* Phase Timeline */}
                {result.isInSadeSati && result.currentDates && (
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-5 border border-white/20">
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">
                      <span>📅</span>
                      {t('results.phases')}
                    </h4>
                    <div className="space-y-3">
                      <div className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg transition-all ${
                        result.phase === 'rising' ? 'bg-white/25 ring-2 ring-white/50' : 'bg-white/5 hover:bg-white/10'
                      }`}>
                        <div className="flex items-center gap-2 mb-1 sm:mb-0">
                          <span className="text-xl">🌅</span>
                          <span className="font-semibold text-white">{locale === 'en' ? 'Rising Phase' : 'आरोही चरण'}</span>
                          {result.phase === 'rising' && <span className="text-xs bg-warmaccent-500 text-white px-2 py-0.5 rounded-full">{locale === 'en' ? 'Current' : 'वर्तमान'}</span>}
                        </div>
                        <span className="text-sm text-deepteal-200 font-medium">{formatDate(result.currentDates.startDate)} → {formatDate(result.currentDates.peakStartDate)}</span>
                      </div>
                      <div className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg transition-all ${
                        result.phase === 'peak' ? 'bg-white/25 ring-2 ring-white/50' : 'bg-white/5 hover:bg-white/10'
                      }`}>
                        <div className="flex items-center gap-2 mb-1 sm:mb-0">
                          <span className="text-xl">⚡</span>
                          <span className="font-semibold text-white">{locale === 'en' ? 'Peak Phase' : 'शिखर चरण'}</span>
                          {result.phase === 'peak' && <span className="text-xs bg-warmaccent-500 text-white px-2 py-0.5 rounded-full">{locale === 'en' ? 'Current' : 'वर्तमान'}</span>}
                        </div>
                        <span className="text-sm text-deepteal-200 font-medium">{formatDate(result.currentDates.peakStartDate)} → {formatDate(result.currentDates.peakEndDate)}</span>
                      </div>
                      <div className={`flex flex-col sm:flex-row sm:items-center justify-between p-3 rounded-lg transition-all ${
                        result.phase === 'setting' ? 'bg-white/25 ring-2 ring-white/50' : 'bg-white/5 hover:bg-white/10'
                      }`}>
                        <div className="flex items-center gap-2 mb-1 sm:mb-0">
                          <span className="text-xl">🌄</span>
                          <span className="font-semibold text-white">{locale === 'en' ? 'Setting Phase' : 'अस्त चरण'}</span>
                          {result.phase === 'setting' && <span className="text-xs bg-warmaccent-500 text-white px-2 py-0.5 rounded-full">{locale === 'en' ? 'Current' : 'वर्तमान'}</span>}
                        </div>
                        <span className="text-sm text-deepteal-200 font-medium">{formatDate(result.currentDates.peakEndDate)} → {formatDate(result.currentDates.endDate)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </HeroResultCard>

              {/* Small Panoti Warning */}
              {result.smallPanoti && !result.isInSadeSati && (
                <SectionCard title={result.smallPanoti.name[locale]} accentBorder="warmaccent">
                  <p className="text-warmaccent-700">
                    {result.smallPanoti.description[locale]}
                  </p>
                </SectionCard>
              )}

              {/* Next Sade Sati */}
              {!result.isInSadeSati && (
                <SectionCard title={t('results.nextSadeSati')} icon={<span className="text-2xl">📆</span>}>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-4 text-center border border-deepteal-200">
                      <div className="w-10 h-10 bg-deepteal-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg">
                        🌅
                      </div>
                      <div className="text-xs font-semibold text-deepteal-700 uppercase tracking-wide mb-1">
                        {locale === 'en' ? 'Starts' : 'शुरू'}
                      </div>
                      <div className="font-bold text-gray-900 text-sm">
                        {formatDate(result.nextDates.startDate)}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-4 text-center border border-warmaccent-200">
                      <div className="w-10 h-10 bg-warmaccent-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg">
                        ⚡
                      </div>
                      <div className="text-xs font-semibold text-warmaccent-700 uppercase tracking-wide mb-1">
                        {locale === 'en' ? 'Peak Begins' : 'शिखर शुरू'}
                      </div>
                      <div className="font-bold text-gray-900 text-sm">
                        {formatDate(result.nextDates.peakStartDate)}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 text-center border border-orange-200">
                      <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg">
                        🔥
                      </div>
                      <div className="text-xs font-semibold text-orange-700 uppercase tracking-wide mb-1">
                        {locale === 'en' ? 'Peak Ends' : 'शिखर समाप्त'}
                      </div>
                      <div className="font-bold text-gray-900 text-sm">
                        {formatDate(result.nextDates.peakEndDate)}
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 text-center border border-green-200">
                      <div className="w-10 h-10 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-2 text-lg">
                        ✅
                      </div>
                      <div className="text-xs font-semibold text-green-700 uppercase tracking-wide mb-1">
                        {locale === 'en' ? 'Ends' : 'समाप्त'}
                      </div>
                      <div className="font-bold text-gray-900 text-sm">
                        {formatDate(result.nextDates.endDate)}
                      </div>
                    </div>
                  </div>
                </SectionCard>
              )}

              {/* Effects Section */}
              {result.isInSadeSati && (
                <SectionCard title={t('results.effects')}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {GENERAL_EFFECTS.map((effect) => (
                      <div
                        key={effect.id}
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
              {(result.isInSadeSati || result.smallPanoti) && (
                <SectionCard title={t('results.remedies')} accentBorder="gradient">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {REMEDIES.map((remedy) => (
                      <div
                        key={remedy.id}
                        className="bg-gradient-to-r from-deepteal-50 to-warmaccent-50 border border-deepteal-100 rounded-lg p-4"
                      >
                        <div className="flex items-start gap-3">
                          <span className="text-2xl">
                            {remedy.type === 'mantra' && '🕉️'}
                            {remedy.type === 'puja' && '🪔'}
                            {remedy.type === 'donation' && '🎁'}
                            {remedy.type === 'gemstone' && '💎'}
                            {remedy.type === 'lifestyle' && '🌿'}
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
                  title={`Sade Sati Check Result`}
                  text={result.isInSadeSati
                    ? `I'm currently in Sade Sati - ${phaseInfo?.name.en}. Check yours:`
                    : `I'm not in Sade Sati! Check your status:`}
                  url={`https://vastucart.in/${locale}/tools/sade-sati`}
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
