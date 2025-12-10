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
  const [placeQuery, setPlaceQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showPlaceDropdown, setShowPlaceDropdown] = useState(false);
  const [useManualCoords, setUseManualCoords] = useState(false);
  const [manualLat, setManualLat] = useState('');
  const [manualLng, setManualLng] = useState('');
  const [manualTz, setManualTz] = useState('5.5');

  // Result state
  const [result, setResult] = useState<KalsarpResult | null>(null);
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
        console.error(err);
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
    setPlaceQuery('');
    setSelectedPlace(null);
    setResult(null);
    setError(null);
  };

  const faqItems = [
    { question: t('faq.q1.question'), answer: t('faq.q1.answer') },
    { question: t('faq.q2.question'), answer: t('faq.q2.answer') },
    { question: t('faq.q3.question'), answer: t('faq.q3.answer') },
  ];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="🐍"
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
                result.isKalsarp
                  ? 'bg-gradient-to-br from-red-900 to-teal-900'
                  : result.isPartial
                    ? 'bg-gradient-to-br from-saffron-700 to-saffron-900'
                    : 'bg-gradient-to-br from-green-800 to-emerald-900'
              } text-white`}>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">
                    {result.isKalsarp ? '🐍' : result.isPartial ? '⚠️' : '✨'}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {result.isKalsarp
                      ? result.kalsarpType?.name[locale]
                      : result.isPartial
                        ? PARTIAL_KALSARP.name[locale]
                        : NO_KALSARP.name[locale]
                    }
                  </h3>
                  <p className="text-lg opacity-90">
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
                  <div className="bg-white/10 rounded-lg p-4 mb-4">
                    <h4 className="font-semibold mb-2">{t('results.direction')}</h4>
                    <div className="text-lg font-medium">
                      {DIRECTION_INFO[result.direction].name[locale]}
                    </div>
                    <p className="text-sm opacity-75 mt-1">
                      {DIRECTION_INFO[result.direction].description[locale]}
                    </p>
                  </div>
                )}

                {/* Rahu-Ketu Position */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">☊</div>
                    <div className="text-sm opacity-75">{t('results.rahuPosition')}</div>
                    <div className="text-xl font-semibold">
                      {locale === 'en' ? `House ${result.rahuHouse}` : `${result.rahuHouse} भाव`}
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 text-center">
                    <div className="text-3xl mb-2">☋</div>
                    <div className="text-sm opacity-75">{t('results.ketuPosition')}</div>
                    <div className="text-xl font-semibold">
                      {locale === 'en' ? `House ${result.ketuHouse}` : `${result.ketuHouse} भाव`}
                    </div>
                  </div>
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
              </div>

              {/* Planet Positions */}
              <Card className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {t('results.planetPositions')}
                </h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
                  {Object.entries(result.planetHouses).map(([planet, house]) => (
                    <div
                      key={planet}
                      className={`p-3 rounded-lg text-center ${
                        planet === 'rahu' || planet === 'ketu'
                          ? 'bg-teal-100 dark:bg-teal-900/30'
                          : result.outsidePlanets.includes(planet)
                            ? 'bg-amber-100 dark:bg-amber-900/30'
                            : 'bg-gray-50 dark:bg-gray-700'
                      }`}
                    >
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {PLANET_NAMES[planet][locale]}
                      </div>
                      <div className="font-semibold text-gray-900 dark:text-white">
                        {locale === 'en' ? `H${house}` : `भा${house}`}
                      </div>
                    </div>
                  ))}
                </div>
                {result.outsidePlanets.length > 0 && (
                  <p className="mt-3 text-sm text-amber-600 dark:text-amber-400">
                    {locale === 'en'
                      ? `Outside planets: ${result.outsidePlanets.map(p => PLANET_NAMES[p].en).join(', ')}`
                      : `बाहरी ग्रह: ${result.outsidePlanets.map(p => PLANET_NAMES[p].hi).join(', ')}`
                    }
                  </p>
                )}
              </Card>

              {/* Effects Section */}
              {(result.isKalsarp || result.isPartial) && (
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t('results.effects')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-600 dark:text-red-400 mb-3">
                        {locale === 'en' ? 'Challenges' : 'चुनौतियां'}
                      </h4>
                      <ul className="space-y-2">
                        {GENERAL_EFFECTS.negative.map((effect, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <span className="text-red-500">•</span>
                            {effect[locale]}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-green-600 dark:text-green-400 mb-3">
                        {locale === 'en' ? 'Positive Aspects' : 'सकारात्मक पहलू'}
                      </h4>
                      <ul className="space-y-2">
                        {GENERAL_EFFECTS.positive.map((effect, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300">
                            <span className="text-green-500">•</span>
                            {effect[locale]}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              )}

              {/* Remedies Section */}
              {(result.isKalsarp || result.isPartial) && (
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                    {t('results.remedies')}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {REMEDIES.map((remedy) => (
                      <div
                        key={remedy.id}
                        className="bg-gradient-to-r from-saffron-50 to-teal-50 dark:from-teal-900/20 dark:to-teal-900/20
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
                  title={`Kalsarp Dosha Check Result`}
                  text={result.isKalsarp
                    ? `I have ${result.kalsarpType?.name.en}. Check yours:`
                    : result.isPartial
                      ? `I have Partial Kalsarp Dosha. Check yours:`
                      : `I don't have Kalsarp Dosha! Check yours:`}
                  url={`https://vastutools.com/${locale}/tools/kalsarp-dosha`}
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
