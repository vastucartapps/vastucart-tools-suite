'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, RefreshCw, Loader2, Crown } from 'lucide-react';

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
  const [placeQuery, setPlaceQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showPlaceDropdown, setShowPlaceDropdown] = useState(false);
  const [useManualCoords, setUseManualCoords] = useState(false);
  const [manualLat, setManualLat] = useState('');
  const [manualLng, setManualLng] = useState('');
  const [manualTz, setManualTz] = useState('5.5');

  // Result state
  const [result, setResult] = useState<RajYogaResult | null>(null);
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
        console.error(err);
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
      description={t('description')}
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
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                           focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                  className="text-xs text-purple-600 hover:text-purple-700 dark:text-purple-400"
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
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    value={manualLng}
                    onChange={(e) => setManualLng(e.target.value)}
                    placeholder={locale === 'en' ? 'Longitude' : 'देशांतर'}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  />
                  <input
                    type="text"
                    value={manualTz}
                    onChange={(e) => setManualTz(e.target.value)}
                    placeholder={locale === 'en' ? 'Timezone' : 'समयक्षेत्र'}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg
                             bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                             focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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

        {/* Results */}
        <AnimatePresence>
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Main Status Card */}
              <div className={`rounded-xl shadow-lg p-6 ${
                result.yogas.length > 1
                  ? 'bg-gradient-to-br from-amber-500 to-yellow-600'
                  : result.yogas.length === 1
                    ? 'bg-gradient-to-br from-purple-600 to-indigo-700'
                    : 'bg-gradient-to-br from-gray-600 to-gray-700'
              } text-white`}>
                <div className="text-center mb-6">
                  <div className="text-6xl mb-4">
                    {result.yogas.length > 0 ? '👑' : '🔍'}
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    {result.interpretation.title[locale]}
                  </h3>
                  <p className="text-lg opacity-90">
                    {result.interpretation.description[locale]}
                  </p>
                  {result.yogas.length > 0 && (
                    <div className="mt-4">
                      <span className="px-4 py-2 rounded-full bg-white/20 text-sm font-medium">
                        {locale === 'en'
                          ? `${result.yogas.length} Yoga${result.yogas.length > 1 ? 's' : ''} Found`
                          : `${result.yogas.length} योग पाए गए`
                        }
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Yogas List */}
              {result.yogas.length > 0 && (
                <Card className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Crown className="w-5 h-5 text-amber-500" />
                    {t('results.yogasFound')}
                  </h3>
                  <div className="space-y-4">
                    {result.yogas.map((yoga, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className={`p-4 rounded-lg border-l-4 ${
                          yoga.intensity === 'powerful'
                            ? 'border-l-amber-500 bg-amber-50 dark:bg-amber-900/20'
                            : yoga.intensity === 'moderate'
                              ? 'border-l-purple-500 bg-purple-50 dark:bg-purple-900/20'
                              : 'border-l-blue-500 bg-blue-50 dark:bg-blue-900/20'
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="font-bold text-lg text-gray-900 dark:text-white">
                              {yoga.name[locale]}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                              {yoga.description[locale]}
                            </p>
                            <p className="text-sm text-gray-700 dark:text-gray-200 mt-2 font-medium">
                              {locale === 'en' ? 'Effects: ' : 'प्रभाव: '}
                              {yoga.effects[locale]}
                            </p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            yoga.intensity === 'powerful'
                              ? 'bg-amber-200 text-amber-800 dark:bg-amber-800 dark:text-amber-200'
                              : yoga.intensity === 'moderate'
                                ? 'bg-purple-200 text-purple-800 dark:bg-purple-800 dark:text-purple-200'
                                : 'bg-blue-200 text-blue-800 dark:bg-blue-800 dark:text-blue-200'
                          }`}>
                            {yoga.intensity === 'powerful'
                              ? (locale === 'en' ? 'Powerful' : 'शक्तिशाली')
                              : yoga.intensity === 'moderate'
                                ? (locale === 'en' ? 'Moderate' : 'मध्यम')
                                : (locale === 'en' ? 'Mild' : 'सौम्य')
                            }
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              )}

              {/* Share Result */}
              <Card className="p-6">
                <ShareResult
                  title={`Raj Yoga Analysis Result`}
                  text={result.yogas.length > 0
                    ? `I have ${result.yogas.length} Raj Yoga(s) in my chart! Check yours:`
                    : `Check your Raj Yogas (Royal Combinations):`}
                  url={`https://vastutools.com/${locale}/tools/raj-yoga`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </Card>

              {/* FAQ Section */}
              <FAQSection faqs={faqItems} title={t('faq.title')} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ToolLayout>
  );
}
