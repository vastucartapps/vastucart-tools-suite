'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2 } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';

import {
  calculateFullChart,
  searchPlaces,
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
  const [placeQuery, setPlaceQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showPlaceDropdown, setShowPlaceDropdown] = useState(false);
  const [useManualCoords, setUseManualCoords] = useState(false);
  const [manualLat, setManualLat] = useState('');
  const [manualLng, setManualLng] = useState('');
  const [manualTz, setManualTz] = useState('5.5');

  // Result state
  const [result, setResult] = useState<SadeSatiResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Search results
  const searchResults = useMemo(() => {
    if (!placeQuery || placeQuery.length < 2) return [];
    return searchPlaces(placeQuery, 8);
  }, [placeQuery]);

  const handlePlaceSelect = (place: Place) => {
    setSelectedPlace(place);
    setPlaceQuery(`${place.name}, ${place.state}`);
    setShowPlaceDropdown(false);
  };

  const handleCalculate = () => {
    setError(null);

    if (!birthDate) {
      setError(locale === 'en' ? 'Please select birth date' : 'कृपया जन्म तिथि चुनें');
      return;
    }

    let latitude: number;
    let longitude: number;
    let timezone: number;

    if (useManualCoords) {
      latitude = parseFloat(manualLat);
      longitude = parseFloat(manualLng);
      timezone = parseFloat(manualTz);

      if (isNaN(latitude) || isNaN(longitude) || isNaN(timezone)) {
        setError(locale === 'en' ? 'Please enter valid coordinates' : 'कृपया वैध निर्देशांक दर्ज करें');
        return;
      }
    } else if (selectedPlace) {
      latitude = selectedPlace.lat;
      longitude = selectedPlace.lng;
      timezone = selectedPlace.tz;
    } else {
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
          latitude,
          longitude,
          timezone,
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
        console.error(err);
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
    setPlaceQuery('');
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

  const faqItems = [
    { question: t('faq.q1.question'), answer: t('faq.q1.answer') },
    { question: t('faq.q2.question'), answer: t('faq.q2.answer') },
    { question: t('faq.q3.question'), answer: t('faq.q3.answer') },
  ];

  return (
    <ToolLayout
      title={t('title')}
      description={t('description')}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {/* Birth Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('form.birthDate')}
              </label>
              <DatePicker
                value={birthDate}
                onChange={setBirthDate}
                placeholder={t('form.selectDate')}
                locale={locale}
              />
            </div>

            {/* Birth Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('form.birthTime')}
              </label>
              <div className="flex gap-2">
                <select
                  value={birthHour}
                  onChange={(e) => setBirthHour(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  {Array.from({ length: 24 }, (_, i) => (
                    <option key={i} value={i.toString().padStart(2, '0')}>
                      {i.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
                <span className="flex items-center text-gray-500">:</span>
                <select
                  value={birthMinute}
                  onChange={(e) => setBirthMinute(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                           bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                           focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                >
                  {Array.from({ length: 60 }, (_, i) => (
                    <option key={i} value={i.toString().padStart(2, '0')}>
                      {i.toString().padStart(2, '0')}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Birth Place */}
            <div className="md:col-span-2">
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  {t('form.birthPlace')}
                </label>
                <button
                  type="button"
                  onClick={() => setUseManualCoords(!useManualCoords)}
                  className="text-xs text-teal-600 hover:text-teal-700 dark:text-teal-400"
                >
                  {useManualCoords
                    ? (locale === 'en' ? 'Search places' : 'स्थान खोजें')
                    : (locale === 'en' ? 'Enter coordinates' : 'निर्देशांक दर्ज करें')
                  }
                </button>
              </div>

              {useManualCoords ? (
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={manualLat}
                    onChange={(e) => setManualLat(e.target.value)}
                    placeholder={locale === 'en' ? 'Latitude' : 'अक्षांश'}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    value={manualLng}
                    onChange={(e) => setManualLng(e.target.value)}
                    placeholder={locale === 'en' ? 'Longitude' : 'देशांतर'}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    value={manualTz}
                    onChange={(e) => setManualTz(e.target.value)}
                    placeholder={locale === 'en' ? 'Timezone' : 'समयक्षेत्र'}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>
              ) : (
                <div className="relative">
                  <input
                    type="text"
                    value={placeQuery}
                    onChange={(e) => {
                      setPlaceQuery(e.target.value);
                      setShowPlaceDropdown(true);
                      setSelectedPlace(null);
                    }}
                    onFocus={() => setShowPlaceDropdown(true)}
                    placeholder={t('form.searchPlace')}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                  {showPlaceDropdown && searchResults.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {searchResults.map((place, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handlePlaceSelect(place)}
                          className="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <span className="font-medium">{place.name}</span>
                          <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                            {place.state}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-3">
            <Button
              onClick={handleCalculate}
              disabled={isCalculating}
              className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
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

        {/* Results */}
        {result && (
          <div className="animate-fade-in-up space-y-6">
              {/* Main Status Card */}
              <div className={`rounded-xl shadow-lg p-6 ${
                result.isInSadeSati
                  ? 'bg-gradient-to-br from-teal-900 to-teal-900'
                  : result.smallPanoti
                    ? 'bg-gradient-to-br from-saffron-700 to-saffron-900'
                    : 'bg-gradient-to-br from-green-800 to-emerald-900'
              } text-white`}>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">
                    {result.isInSadeSati ? '🪐' : result.smallPanoti ? '⚠️' : '✨'}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {phaseInfo?.name[locale]}
                  </h3>
                  <p className="text-lg opacity-90">
                    {phaseInfo?.description[locale]}
                  </p>
                </div>

                {/* Moon and Saturn Signs */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🌙</div>
                    <div className="text-sm opacity-75">{t('results.moonSign')}</div>
                    <div className="text-xl font-semibold">
                      {ZODIAC_SIGNS[result.moonSign][locale]}
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">🪐</div>
                    <div className="text-sm opacity-75">{t('results.saturnSign')}</div>
                    <div className="text-xl font-semibold">
                      {ZODIAC_SIGNS[result.saturnSign][locale]}
                    </div>
                  </div>
                </div>

                {/* Progress Bar for Sade Sati */}
                {result.isInSadeSati && result.currentDates && (
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span>{t('results.progress')}</span>
                      <span>{Math.round(result.percentComplete)}%</span>
                    </div>
                    <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                      <div
                        style={{ width: `${result.percentComplete}%` }}
                        className="h-full bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transition-all duration-1000 ease-out"
                      />
                    </div>
                    <div className="flex justify-between text-xs mt-2 opacity-75">
                      <span>{formatDate(result.currentDates.startDate)}</span>
                      <span>{formatDate(result.currentDates.endDate)}</span>
                    </div>
                  </div>
                )}

                {/* Phase Timeline */}
                {result.isInSadeSati && result.currentDates && (
                  <div className="bg-white/10 rounded-lg p-4">
                    <h4 className="font-semibold mb-3">{t('results.phases')}</h4>
                    <div className="space-y-2 text-sm">
                      <div className={`flex justify-between p-2 rounded ${result.phase === 'rising' ? 'bg-white/20' : ''}`}>
                        <span>{locale === 'en' ? 'Rising Phase' : 'आरोही चरण'}</span>
                        <span>{formatDate(result.currentDates.startDate)} - {formatDate(result.currentDates.peakStartDate)}</span>
                      </div>
                      <div className={`flex justify-between p-2 rounded ${result.phase === 'peak' ? 'bg-white/20' : ''}`}>
                        <span>{locale === 'en' ? 'Peak Phase' : 'शिखर चरण'}</span>
                        <span>{formatDate(result.currentDates.peakStartDate)} - {formatDate(result.currentDates.peakEndDate)}</span>
                      </div>
                      <div className={`flex justify-between p-2 rounded ${result.phase === 'setting' ? 'bg-white/20' : ''}`}>
                        <span>{locale === 'en' ? 'Setting Phase' : 'अस्त चरण'}</span>
                        <span>{formatDate(result.currentDates.peakEndDate)} - {formatDate(result.currentDates.endDate)}</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Small Panoti Warning */}
              {result.smallPanoti && !result.isInSadeSati && (
                <Card className="p-6 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20">
                  <h3 className="text-xl font-semibold text-amber-800 dark:text-amber-200 mb-2">
                    {result.smallPanoti.name[locale]}
                  </h3>
                  <p className="text-amber-700 dark:text-amber-300">
                    {result.smallPanoti.description[locale]}
                  </p>
                </Card>
              )}

              {/* Next Sade Sati */}
              {!result.isInSadeSati && (
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t('results.nextSadeSati')}
                  </h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {locale === 'en' ? 'Starts' : 'शुरू'}
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {formatDate(result.nextDates.startDate)}
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {locale === 'en' ? 'Peak Begins' : 'शिखर शुरू'}
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {formatDate(result.nextDates.peakStartDate)}
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {locale === 'en' ? 'Peak Ends' : 'शिखर समाप्त'}
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {formatDate(result.nextDates.peakEndDate)}
                      </div>
                    </div>
                    <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 text-center">
                      <div className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                        {locale === 'en' ? 'Ends' : 'समाप्त'}
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">
                        {formatDate(result.nextDates.endDate)}
                      </div>
                    </div>
                  </div>
                </Card>
              )}

              {/* Effects Section */}
              {result.isInSadeSati && (
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t('results.effects')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {GENERAL_EFFECTS.map((effect) => (
                      <div
                        key={effect.id}
                        className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4"
                      >
                        <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                          {effect.area[locale]}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {effect.effect[locale]}
                        </p>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Remedies Section */}
              {(result.isInSadeSati || result.smallPanoti) && (
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t('results.remedies')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {REMEDIES.map((remedy) => (
                      <div
                        key={remedy.id}
                        className="bg-gradient-to-r from-teal-50 to-saffron-50 dark:from-teal-900/20 dark:to-teal-900/20
                                   border border-teal-100 dark:border-teal-800 rounded-lg p-4"
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
                            <h4 className="font-semibold text-gray-900 dark:text-white">
                              {remedy.name[locale]}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                              {remedy.description[locale]}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Share Result */}
              <Card className="p-6">
                <ShareResult
                  title={`Sade Sati Check Result`}
                  text={result.isInSadeSati
                    ? `I'm currently in Sade Sati - ${phaseInfo?.name.en}. Check yours:`
                    : `I'm not in Sade Sati! Check your status:`}
                  url={`https://vastutools.com/${locale}/tools/sade-sati`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </Card>

              {/* FAQ Section */}
              <FAQSection faqs={faqItems} title={t('faq.title')} />
            </div>
          )}
      </div>
    </ToolLayout>
  );
}
