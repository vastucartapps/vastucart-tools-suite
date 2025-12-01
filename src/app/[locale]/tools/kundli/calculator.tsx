'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
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
  type FullChartData,
} from '@/lib/astrology';

import {
  PLANET_ABBREVIATIONS,
  PLANET_FULL_NAMES,
  RASHI_NAMES,
  NAKSHATRA_NAMES,
  HOUSE_NAMES,
  HOUSE_SIGNIFICATIONS,
  PLANET_COLORS,
  formatDegree,
} from '@/lib/astrology/data/kundli-data';

interface KundliCalculatorProps {
  locale: 'en' | 'hi';
}

export default function KundliCalculator({ locale }: KundliCalculatorProps) {
  const t = useTranslations('tools.astrology.kundli');
  const tCommon = useTranslations('common');

  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [placeQuery, setPlaceQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showPlaceDropdown, setShowPlaceDropdown] = useState(false);

  // Result state
  const [chart, setChart] = useState<FullChartData | null>(null);
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

    if (!selectedPlace) {
      setError(locale === 'en' ? 'Please select a birth place' : 'कृपया जन्म स्थान चुनें');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      try {
        const result = calculateFullChart({
          year: birthDate.getFullYear(),
          month: birthDate.getMonth() + 1,
          day: birthDate.getDate(),
          hour: parseInt(birthHour),
          minute: parseInt(birthMinute),
          latitude: selectedPlace.lat,
          longitude: selectedPlace.lng,
          timezone: selectedPlace.tz,
        });

        setChart(result);
      } catch (err) {
        setError(locale === 'en' ? 'Calculation error. Please check inputs.' : 'गणना त्रुटि। कृपया इनपुट जांचें।');
        console.error(err);
      } finally {
        setIsCalculating(false);
      }
    }, 500);
  };

  const handleReset = () => {
    setBirthDate(null);
    setBirthHour('12');
    setBirthMinute('00');
    setPlaceQuery('');
    setSelectedPlace(null);
    setChart(null);
    setError(null);
  };

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  // Get planets grouped by house
  const getPlanetsByHouse = () => {
    if (!chart) return {};
    const houses: Record<number, string[]> = {};
    for (let i = 1; i <= 12; i++) {
      houses[i] = [];
    }
    for (const [planetId, planetData] of Object.entries(chart.planets)) {
      if (planetData.house >= 1 && planetData.house <= 12) {
        houses[planetData.house].push(planetId);
      }
    }
    return houses;
  };

  const planetsByHouse = chart ? getPlanetsByHouse() : {};

  const faqs = [
    { question: t('faq.q1.question'), answer: t('faq.q1.answer') },
    { question: t('faq.q2.question'), answer: t('faq.q2.answer') },
    { question: t('faq.q3.question'), answer: t('faq.q3.answer') },
  ];

  return (
    <ToolLayout
      title={t('title')}
      description={t('description')}
      icon="🌟"
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
              <DatePicker
                label={t('form.birthDate')}
                value={birthDate}
                onChange={setBirthDate}
                placeholder={locale === 'en' ? 'Select birth date' : 'जन्म तिथि चुनें'}
                locale={locale}
              />
            </div>

            {/* Birth Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.birthTime')} *
              </label>
              <div className="flex items-center gap-2">
                <select
                  value={birthHour}
                  onChange={(e) => setBirthHour(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  {hours.map((h) => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
                <span className="text-xl font-bold text-gray-500">:</span>
                <select
                  value={birthMinute}
                  onChange={(e) => setBirthMinute(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                >
                  {minutes.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Birth Place */}
            <div className="relative">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.birthPlace')} *
              </label>
              <input
                type="text"
                value={placeQuery}
                onChange={(e) => {
                  setPlaceQuery(e.target.value);
                  setShowPlaceDropdown(true);
                  setSelectedPlace(null);
                }}
                onFocus={() => setShowPlaceDropdown(true)}
                placeholder={locale === 'en' ? 'Type city name...' : 'शहर का नाम टाइप करें...'}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                autoComplete="off"
              />
              {showPlaceDropdown && searchResults.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
                  {searchResults.map((place, idx) => (
                    <li
                      key={`${place.name}-${idx}`}
                      onClick={() => handlePlaceSelect(place)}
                      className="px-4 py-3 hover:bg-purple-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium">{place.name}</span>
                      <span className="text-sm text-gray-500 ml-1">, {place.state}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

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

        {/* Results Section */}
        <AnimatePresence mode="wait">
          {chart && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Basic Info Card */}
              <Card className="p-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold mb-2">
                    {locale === 'en' ? 'Your Birth Chart (Kundli)' : 'आपकी जन्मकुंडली'}
                  </h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-sm opacity-80">
                      {locale === 'en' ? 'Lagna' : 'लग्न'}
                    </div>
                    <div className="font-bold">
                      {locale === 'hi' ? RASHI_NAMES[chart.lagna.sign.index].hi : RASHI_NAMES[chart.lagna.sign.index].en}
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-sm opacity-80">
                      {locale === 'en' ? 'Moon Sign' : 'चंद्र राशि'}
                    </div>
                    <div className="font-bold">
                      {locale === 'hi' ? RASHI_NAMES[chart.moonSign.sign.index].hi : RASHI_NAMES[chart.moonSign.sign.index].en}
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-sm opacity-80">
                      {locale === 'en' ? 'Nakshatra' : 'नक्षत्र'}
                    </div>
                    <div className="font-bold">
                      {locale === 'hi' ? NAKSHATRA_NAMES[chart.moonSign.nakshatra.index].hi : NAKSHATRA_NAMES[chart.moonSign.nakshatra.index].en}
                    </div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3">
                    <div className="text-sm opacity-80">
                      {locale === 'en' ? 'Pada' : 'पाद'}
                    </div>
                    <div className="font-bold">
                      {chart.moonSign.pada}
                    </div>
                  </div>
                </div>

                <ShareResult
                  title="My Kundli - Birth Chart"
                  text={`My Lagna is ${RASHI_NAMES[chart.lagna.sign.index].en} and Moon Sign is ${RASHI_NAMES[chart.moonSign.sign.index].en}. Generate your Kundli:`}
                  url={`https://vastutools.com/${locale}/tools/kundli`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </Card>

              {/* Chart Visualization - Simple Box Grid */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('results.birthChart')}
                </h3>
                <div className="max-w-md mx-auto">
                  <div className="grid grid-cols-4 gap-1 border-2 border-gray-800 aspect-square">
                    {/* North Indian Style Chart - 4x4 grid with diagonal layout */}
                    {/* Row 1 */}
                    <div className="border border-gray-400 p-2 flex flex-col justify-between bg-gray-50">
                      <span className="text-xs text-gray-500">12</span>
                      <div className="text-xs font-bold text-center">
                        {planetsByHouse[12]?.map(p => (
                          <span key={p} className="inline-block mx-0.5" style={{ color: PLANET_COLORS[p] }}>
                            {locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-gray-400 p-2 flex flex-col justify-between bg-purple-50">
                      <span className="text-xs text-purple-700 font-bold">1 (Asc)</span>
                      <div className="text-xs font-bold text-center">
                        {planetsByHouse[1]?.map(p => (
                          <span key={p} className="inline-block mx-0.5" style={{ color: PLANET_COLORS[p] }}>
                            {locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-gray-400 p-2 flex flex-col justify-between bg-gray-50">
                      <span className="text-xs text-gray-500">2</span>
                      <div className="text-xs font-bold text-center">
                        {planetsByHouse[2]?.map(p => (
                          <span key={p} className="inline-block mx-0.5" style={{ color: PLANET_COLORS[p] }}>
                            {locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-gray-400 p-2 flex flex-col justify-between bg-gray-50">
                      <span className="text-xs text-gray-500">3</span>
                      <div className="text-xs font-bold text-center">
                        {planetsByHouse[3]?.map(p => (
                          <span key={p} className="inline-block mx-0.5" style={{ color: PLANET_COLORS[p] }}>
                            {locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Row 2 */}
                    <div className="border border-gray-400 p-2 flex flex-col justify-between bg-gray-50">
                      <span className="text-xs text-gray-500">11</span>
                      <div className="text-xs font-bold text-center">
                        {planetsByHouse[11]?.map(p => (
                          <span key={p} className="inline-block mx-0.5" style={{ color: PLANET_COLORS[p] }}>
                            {locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="col-span-2 row-span-2 border border-gray-400 p-3 flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100">
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-700">
                          {locale === 'hi' ? RASHI_NAMES[chart.lagna.sign.index].hi : RASHI_NAMES[chart.lagna.sign.index].en}
                        </div>
                        <div className="text-3xl">{RASHI_NAMES[chart.lagna.sign.index].symbol}</div>
                        <div className="text-sm text-gray-600">{locale === 'en' ? 'Lagna' : 'लग्न'}</div>
                      </div>
                    </div>
                    <div className="border border-gray-400 p-2 flex flex-col justify-between bg-gray-50">
                      <span className="text-xs text-gray-500">4</span>
                      <div className="text-xs font-bold text-center">
                        {planetsByHouse[4]?.map(p => (
                          <span key={p} className="inline-block mx-0.5" style={{ color: PLANET_COLORS[p] }}>
                            {locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Row 3 */}
                    <div className="border border-gray-400 p-2 flex flex-col justify-between bg-gray-50">
                      <span className="text-xs text-gray-500">10</span>
                      <div className="text-xs font-bold text-center">
                        {planetsByHouse[10]?.map(p => (
                          <span key={p} className="inline-block mx-0.5" style={{ color: PLANET_COLORS[p] }}>
                            {locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-gray-400 p-2 flex flex-col justify-between bg-gray-50">
                      <span className="text-xs text-gray-500">5</span>
                      <div className="text-xs font-bold text-center">
                        {planetsByHouse[5]?.map(p => (
                          <span key={p} className="inline-block mx-0.5" style={{ color: PLANET_COLORS[p] }}>
                            {locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Row 4 */}
                    <div className="border border-gray-400 p-2 flex flex-col justify-between bg-gray-50">
                      <span className="text-xs text-gray-500">9</span>
                      <div className="text-xs font-bold text-center">
                        {planetsByHouse[9]?.map(p => (
                          <span key={p} className="inline-block mx-0.5" style={{ color: PLANET_COLORS[p] }}>
                            {locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-gray-400 p-2 flex flex-col justify-between bg-gray-50">
                      <span className="text-xs text-gray-500">8</span>
                      <div className="text-xs font-bold text-center">
                        {planetsByHouse[8]?.map(p => (
                          <span key={p} className="inline-block mx-0.5" style={{ color: PLANET_COLORS[p] }}>
                            {locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-gray-400 p-2 flex flex-col justify-between bg-gray-50">
                      <span className="text-xs text-gray-500">7</span>
                      <div className="text-xs font-bold text-center">
                        {planetsByHouse[7]?.map(p => (
                          <span key={p} className="inline-block mx-0.5" style={{ color: PLANET_COLORS[p] }}>
                            {locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border border-gray-400 p-2 flex flex-col justify-between bg-gray-50">
                      <span className="text-xs text-gray-500">6</span>
                      <div className="text-xs font-bold text-center">
                        {planetsByHouse[6]?.map(p => (
                          <span key={p} className="inline-block mx-0.5" style={{ color: PLANET_COLORS[p] }}>
                            {locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-500 text-center mt-2">
                  {locale === 'en' ? 'North Indian Style Chart (Whole Sign Houses)' : 'उत्तर भारतीय शैली कुंडली (पूर्ण राशि भाव)'}
                </p>
              </Card>

              {/* Planetary Positions Table */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('results.planetPositions')}
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left py-3 px-4">{locale === 'en' ? 'Planet' : 'ग्रह'}</th>
                        <th className="text-left py-3 px-4">{locale === 'en' ? 'Sign' : 'राशि'}</th>
                        <th className="text-left py-3 px-4">{locale === 'en' ? 'Degree' : 'अंश'}</th>
                        <th className="text-left py-3 px-4">{locale === 'en' ? 'Nakshatra' : 'नक्षत्र'}</th>
                        <th className="text-center py-3 px-4">{locale === 'en' ? 'Pada' : 'पाद'}</th>
                        <th className="text-center py-3 px-4">{locale === 'en' ? 'House' : 'भाव'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.entries(chart.planets).map(([planetId, data]) => (
                        <tr key={planetId} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <span
                              className="font-medium"
                              style={{ color: PLANET_COLORS[planetId] }}
                            >
                              {locale === 'hi' ? PLANET_FULL_NAMES[planetId].hi : PLANET_FULL_NAMES[planetId].en}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            {RASHI_NAMES[data.sign.index].symbol}{' '}
                            {locale === 'hi' ? RASHI_NAMES[data.sign.index].hi : RASHI_NAMES[data.sign.index].en}
                          </td>
                          <td className="py-3 px-4 font-mono text-gray-600">
                            {formatDegree(data.longitude)}
                          </td>
                          <td className="py-3 px-4">
                            {locale === 'hi' ? NAKSHATRA_NAMES[data.nakshatra.index].hi : NAKSHATRA_NAMES[data.nakshatra.index].en}
                          </td>
                          <td className="py-3 px-4 text-center">
                            {data.pada}
                          </td>
                          <td className="py-3 px-4 text-center font-medium">
                            {data.house}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Card>

              {/* House Significations */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('results.houseSignifications')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {HOUSE_NAMES.map((house, idx) => {
                    const houseNum = idx + 1;
                    const signIndex = (chart.lagna.sign.index + idx) % 12;
                    const planetsInHouse = planetsByHouse[houseNum] || [];

                    return (
                      <div key={idx} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium text-purple-700">
                            {locale === 'hi' ? house.hi : house.en}
                          </span>
                          <span className="text-lg">{RASHI_NAMES[signIndex].symbol}</span>
                        </div>
                        <div className="text-xs text-gray-500 mb-2">
                          {locale === 'hi' ? RASHI_NAMES[signIndex].hi : RASHI_NAMES[signIndex].en}
                        </div>
                        {planetsInHouse.length > 0 && (
                          <div className="flex flex-wrap gap-1 mb-2">
                            {planetsInHouse.map(p => (
                              <span
                                key={p}
                                className="px-2 py-0.5 rounded text-xs text-white"
                                style={{ backgroundColor: PLANET_COLORS[p] }}
                              >
                                {locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                              </span>
                            ))}
                          </div>
                        )}
                        <p className="text-xs text-gray-600">
                          {locale === 'hi' ? HOUSE_SIGNIFICATIONS[idx].hi : HOUSE_SIGNIFICATIONS[idx].en}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </Card>

              {/* Current Dasha */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('results.currentDasha')}
                </h3>
                <div className="space-y-3">
                  {chart.dasha.mahadasha && (
                    <div className="p-4 bg-purple-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-purple-800">
                          {locale === 'en' ? 'Mahadasha' : 'महादशा'}
                        </span>
                        <span
                          className="font-bold text-lg"
                          style={{ color: PLANET_COLORS[chart.dasha.mahadasha.planet.toLowerCase()] }}
                        >
                          {locale === 'hi'
                            ? PLANET_FULL_NAMES[chart.dasha.mahadasha.planet.toLowerCase()]?.hi
                            : PLANET_FULL_NAMES[chart.dasha.mahadasha.planet.toLowerCase()]?.en}
                        </span>
                      </div>
                      <div className="text-sm text-gray-600">
                        {chart.dasha.mahadasha.startDate.toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-US')} -{' '}
                        {chart.dasha.mahadasha.endDate.toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-US')}
                      </div>
                    </div>
                  )}

                  {chart.dasha.antardasha && (
                    <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                      <span className="text-sm">
                        {locale === 'en' ? 'Antardasha' : 'अंतर्दशा'}:{' '}
                        <span
                          className="font-medium"
                          style={{ color: PLANET_COLORS[chart.dasha.antardasha.planet.toLowerCase()] }}
                        >
                          {locale === 'hi'
                            ? PLANET_FULL_NAMES[chart.dasha.antardasha.planet.toLowerCase()]?.hi
                            : PLANET_FULL_NAMES[chart.dasha.antardasha.planet.toLowerCase()]?.en}
                        </span>
                      </span>
                      <span className="text-xs text-gray-500">
                        {chart.dasha.antardasha.startDate.toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-US')} -{' '}
                        {chart.dasha.antardasha.endDate.toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-US')}
                      </span>
                    </div>
                  )}

                  {chart.dasha.pratyantardasha && (
                    <div className="p-3 bg-gray-50 rounded-lg flex items-center justify-between">
                      <span className="text-sm">
                        {locale === 'en' ? 'Pratyantardasha' : 'प्रत्यंतर्दशा'}:{' '}
                        <span
                          className="font-medium"
                          style={{ color: PLANET_COLORS[chart.dasha.pratyantardasha.planet.toLowerCase()] }}
                        >
                          {locale === 'hi'
                            ? PLANET_FULL_NAMES[chart.dasha.pratyantardasha.planet.toLowerCase()]?.hi
                            : PLANET_FULL_NAMES[chart.dasha.pratyantardasha.planet.toLowerCase()]?.en}
                        </span>
                      </span>
                      <span className="text-xs text-gray-500">
                        {chart.dasha.pratyantardasha.startDate.toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-US')} -{' '}
                        {chart.dasha.pratyantardasha.endDate.toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-US')}
                      </span>
                    </div>
                  )}
                </div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        {/* FAQ Section */}
        <FAQSection title={tCommon('faq')} faqs={faqs} />
      </div>
    </ToolLayout>
  );
}
