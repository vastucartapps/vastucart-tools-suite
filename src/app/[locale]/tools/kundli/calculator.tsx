'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, Crown } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { CustomSelect } from '@/components/ui/custom-select';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

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
  const [chartStyle, setChartStyle] = useState<'simplified' | 'vedic'>('simplified');

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

  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
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
                <CustomSelect
                  value={birthHour}
                  onChange={setBirthHour}
                  options={hours.map((h) => ({ value: h, label: h }))}
                  className="flex-1"
                />
                <span className="text-xl font-bold text-gray-500">:</span>
                <CustomSelect
                  value={birthMinute}
                  onChange={setBirthMinute}
                  options={minutes.map((m) => ({ value: m, label: m }))}
                  className="flex-1"
                />
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
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg bg-white text-gray-900 focus:ring-2 focus:ring-teal-100 focus:border-teal-500 focus:outline-none hover:border-teal-300 transition-all"
                autoComplete="off"
              />
              {showPlaceDropdown && searchResults.length > 0 && (
                <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
                  {searchResults.map((place, idx) => (
                    <li
                      key={`${place.name}-${idx}`}
                      onClick={() => handlePlaceSelect(place)}
                      className="px-4 py-3 hover:bg-teal-50 cursor-pointer border-b border-gray-100 last:border-b-0"
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

        {!chart && (
          <EducationalSection
            title={educational.title}
            content={educational.content}
          />
        )}

        {/* Results Section */}
          {chart && (
            <div className="animate-fade-in-up space-y-6"
            >
              {/* Basic Info Card - Enhanced with darker teal gradient */}
              <Card className="p-6 bg-gradient-to-br from-teal-700 via-teal-800 to-teal-900 text-white shadow-xl">
                <div className="text-center mb-5">
                  <h2 className="text-2xl font-bold mb-1">
                    {locale === 'en' ? 'Your Birth Chart (Kundli)' : 'आपकी जन्मकुंडली'}
                  </h2>
                  <p className="text-teal-200 text-sm">
                    {locale === 'en' ? 'Key Astrological Details at a Glance' : 'एक नज़र में मुख्य ज्योतिषीय विवरण'}
                  </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-xs text-teal-200 uppercase tracking-wider mb-1">
                      {locale === 'en' ? 'Lagna' : 'लग्न'}
                    </div>
                    <div className="text-lg font-bold text-white">
                      {locale === 'hi' ? RASHI_NAMES[chart.lagna.sign.index].hi : RASHI_NAMES[chart.lagna.sign.index].en}
                    </div>
                    <div className="text-2xl mt-1">{RASHI_NAMES[chart.lagna.sign.index].symbol}</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-xs text-teal-200 uppercase tracking-wider mb-1">
                      {locale === 'en' ? 'Moon Sign' : 'चंद्र राशि'}
                    </div>
                    <div className="text-lg font-bold text-white">
                      {locale === 'hi' ? RASHI_NAMES[chart.moonSign.sign.index].hi : RASHI_NAMES[chart.moonSign.sign.index].en}
                    </div>
                    <div className="text-2xl mt-1">{RASHI_NAMES[chart.moonSign.sign.index].symbol}</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-xs text-teal-200 uppercase tracking-wider mb-1">
                      {locale === 'en' ? 'Nakshatra' : 'नक्षत्र'}
                    </div>
                    <div className="text-lg font-bold text-white">
                      {locale === 'hi' ? NAKSHATRA_NAMES[chart.moonSign.nakshatra.index].hi : NAKSHATRA_NAMES[chart.moonSign.nakshatra.index].en}
                    </div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                    <div className="text-xs text-teal-200 uppercase tracking-wider mb-1">
                      {locale === 'en' ? 'Pada' : 'पाद'}
                    </div>
                    <div className="text-3xl font-bold text-white">
                      {chart.moonSign.pada}
                    </div>
                  </div>
                </div>

                <ShareResult
                  title="My Kundli - Birth Chart"
                  text={`My Lagna is ${RASHI_NAMES[chart.lagna.sign.index].en} and Moon Sign is ${RASHI_NAMES[chart.moonSign.sign.index].en}. Generate your Kundli:`}
                  url={`https://tools.vastucart.in/${locale}/tools/kundli`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </Card>

              {/* Chart Visualization with Style Selector */}
              <Card className="p-6">
                {/* Chart Style Tabs */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {locale === 'en' ? 'Lagna Chart' : 'लग्न कुंडली'}
                  </h3>
                  <div className="flex bg-gray-100 rounded-lg p-1">
                    <button
                      type="button"
                      onClick={() => setChartStyle('simplified')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        chartStyle === 'simplified'
                          ? 'bg-white text-teal-700 shadow-sm'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      {locale === 'en' ? 'Simplified' : 'सरल'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setChartStyle('vedic')}
                      className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                        chartStyle === 'vedic'
                          ? 'bg-white text-teal-700 shadow-sm'
                          : 'text-gray-600 hover:text-gray-800'
                      }`}
                    >
                      {locale === 'en' ? 'Vedic' : 'वैदिक'}
                    </button>
                  </div>
                </div>

                {/* Simplified Chart - Box Grid */}
                {chartStyle === 'simplified' && (
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
                      <div className="border border-gray-400 p-2 flex flex-col justify-between bg-teal-50">
                        <span className="text-xs text-teal-700 font-bold">1 (Asc)</span>
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
                      <div className="col-span-2 row-span-2 border border-gray-400 p-3 flex items-center justify-center bg-gradient-to-br from-saffron-100 to-teal-100">
                        <div className="text-center">
                          <div className="text-lg font-bold text-teal-700">
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
                    <p className="text-xs text-gray-500 text-center mt-3">
                      {locale === 'en' ? 'Simplified Lagna Chart (Whole Sign Houses)' : 'सरल लग्न कुंडली (पूर्ण राशि भाव)'}
                    </p>
                  </div>
                )}

                {/* Vedic Diamond Chart - Traditional North Indian Style */}
                {/* Houses are FIXED, Rashi numbers change based on Lagna */}
                {/* PLANET POSITIONING RULE: Planets go near BASE LINE of each triangle */}
                {chartStyle === 'vedic' && (() => {
                  const lagnaIndex = chart.lagna.sign.index;
                  const getRashiForHouse = (houseNum: number) => ((lagnaIndex + houseNum - 1) % 12) + 1;

                  // Horizontal planets (for diamonds and top/bottom triangles)
                  const renderPlanetsHorizontal = (houseNum: number) => {
                    const planets = planetsByHouse[houseNum] || [];
                    if (planets.length === 0) return null;
                    return planets.map((p, i) => (
                      <tspan key={p} fill={PLANET_COLORS[p]}>
                        {i > 0 ? ' ' : ''}{locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                      </tspan>
                    ));
                  };

                  // Vertical stacked planets (for left/right side triangles: 3, 5, 9, 11)
                  const renderPlanetsVertical = (houseNum: number, baseX: number, baseY: number, anchor: 'start' | 'end') => {
                    const planets = planetsByHouse[houseNum] || [];
                    if (planets.length === 0) return null;
                    return planets.map((p, i) => (
                      <text
                        key={p}
                        x={baseX}
                        y={baseY + (i * 14)}
                        textAnchor={anchor}
                        fontSize="10"
                        fontWeight="bold"
                        fill={PLANET_COLORS[p]}
                      >
                        {locale === 'hi' ? PLANET_ABBREVIATIONS[p].hi : PLANET_ABBREVIATIONS[p].en}
                      </text>
                    ));
                  };

                  return (
                    <div className="max-w-lg mx-auto">
                      <svg viewBox="0 0 400 400" className="w-full aspect-square">
                        {/* Background */}
                        <rect x="10" y="10" width="380" height="380" fill="#fffef7" stroke="#0d9488" strokeWidth="2" />

                        {/* Inner diamond connecting midpoints */}
                        <polygon points="200,10 390,200 200,390 10,200" fill="none" stroke="#0d9488" strokeWidth="1.5" />

                        {/* Diagonal lines from corners to center */}
                        <line x1="10" y1="10" x2="200" y2="200" stroke="#0d9488" strokeWidth="1" />
                        <line x1="390" y1="10" x2="200" y2="200" stroke="#0d9488" strokeWidth="1" />
                        <line x1="10" y1="390" x2="200" y2="200" stroke="#0d9488" strokeWidth="1" />
                        <line x1="390" y1="390" x2="200" y2="200" stroke="#0d9488" strokeWidth="1" />

                        {/* ===== HOUSE 1 - Top Diamond (Ascendant) ===== */}
                        {/* Plenty of space - planets CENTER-ALIGNED */}
                        <polygon points="200,10 295,105 200,200 105,105" fill="#e6fffa" stroke="#0d9488" strokeWidth="1.5" />
                        <text x="200" y="70" textAnchor="middle" fontSize="14" fill="#0d9488" fontWeight="bold">{getRashiForHouse(1)}</text>
                        <text x="200" y="110" textAnchor="middle" fontSize="11" fontWeight="bold">{renderPlanetsHorizontal(1)}</text>

                        {/* ===== HOUSE 2 - Top-Left Corner ▽ ===== */}
                        {/* Reverse triangle - base at TOP, planets near TOP BORDER */}
                        <text x="105" y="60" textAnchor="middle" fontSize="13" fill="#64748b">{getRashiForHouse(2)}</text>
                        <text x="55" y="25" textAnchor="start" fontSize="10" fontWeight="bold">{renderPlanetsHorizontal(2)}</text>

                        {/* ===== HOUSE 3 - Left Upper Side ◁ ===== */}
                        {/* Base at LEFT edge - planets STACKED VERTICALLY at left */}
                        <text x="57" y="105" textAnchor="middle" fontSize="13" fill="#64748b">{getRashiForHouse(3)}</text>
                        {renderPlanetsVertical(3, 18, 60, 'start')}

                        {/* ===== HOUSE 4 - Left Diamond ===== */}
                        {/* Plenty of space - planets CENTER-ALIGNED */}
                        <text x="70" y="200" textAnchor="middle" fontSize="13" fill="#64748b">{getRashiForHouse(4)}</text>
                        <text x="105" y="200" textAnchor="middle" fontSize="10" fontWeight="bold">{renderPlanetsHorizontal(4)}</text>

                        {/* ===== HOUSE 5 - Left Lower Side ◁ ===== */}
                        {/* Base at LEFT edge - planets STACKED VERTICALLY at left */}
                        <text x="57" y="300" textAnchor="middle" fontSize="13" fill="#64748b">{getRashiForHouse(5)}</text>
                        {renderPlanetsVertical(5, 18, 255, 'start')}

                        {/* ===== HOUSE 6 - Bottom-Left Corner △ ===== */}
                        {/* Normal triangle - base at BOTTOM, planets near BOTTOM BORDER */}
                        <text x="105" y="345" textAnchor="middle" fontSize="13" fill="#64748b">{getRashiForHouse(6)}</text>
                        <text x="55" y="380" textAnchor="start" fontSize="10" fontWeight="bold">{renderPlanetsHorizontal(6)}</text>

                        {/* ===== HOUSE 7 - Bottom Diamond ===== */}
                        {/* Plenty of space - planets CENTER-ALIGNED */}
                        <text x="200" y="335" textAnchor="middle" fontSize="13" fill="#64748b">{getRashiForHouse(7)}</text>
                        <text x="200" y="295" textAnchor="middle" fontSize="11" fontWeight="bold">{renderPlanetsHorizontal(7)}</text>

                        {/* ===== HOUSE 8 - Bottom-Right Corner △ ===== */}
                        {/* Normal triangle - base at BOTTOM, planets near BOTTOM BORDER */}
                        <text x="295" y="345" textAnchor="middle" fontSize="13" fill="#64748b">{getRashiForHouse(8)}</text>
                        <text x="345" y="380" textAnchor="end" fontSize="10" fontWeight="bold">{renderPlanetsHorizontal(8)}</text>

                        {/* ===== HOUSE 9 - Right Lower Side ▷ ===== */}
                        {/* Base at RIGHT edge - planets STACKED VERTICALLY at right */}
                        <text x="343" y="300" textAnchor="middle" fontSize="13" fill="#64748b">{getRashiForHouse(9)}</text>
                        {renderPlanetsVertical(9, 382, 255, 'end')}

                        {/* ===== HOUSE 10 - Right Diamond ===== */}
                        {/* Plenty of space - planets CENTER-ALIGNED */}
                        <text x="330" y="200" textAnchor="middle" fontSize="13" fill="#64748b">{getRashiForHouse(10)}</text>
                        <text x="295" y="200" textAnchor="middle" fontSize="10" fontWeight="bold">{renderPlanetsHorizontal(10)}</text>

                        {/* ===== HOUSE 11 - Right Upper Side ▷ ===== */}
                        {/* Base at RIGHT edge - planets STACKED VERTICALLY at right */}
                        <text x="343" y="105" textAnchor="middle" fontSize="13" fill="#64748b">{getRashiForHouse(11)}</text>
                        {renderPlanetsVertical(11, 382, 60, 'end')}

                        {/* ===== HOUSE 12 - Top-Right Corner ▽ ===== */}
                        {/* Reverse triangle - base at TOP, planets near TOP BORDER */}
                        <text x="295" y="60" textAnchor="middle" fontSize="13" fill="#64748b">{getRashiForHouse(12)}</text>
                        <text x="345" y="25" textAnchor="end" fontSize="10" fontWeight="bold">{renderPlanetsHorizontal(12)}</text>

                        {/* Center - Lagna info */}
                        <circle cx="200" cy="200" r="35" fill="#e6fffa" stroke="#0d9488" strokeWidth="1.5" />
                        <text x="200" y="195" textAnchor="middle" fontSize="18" fill="#0d9488">
                          {RASHI_NAMES[chart.lagna.sign.index].symbol}
                        </text>
                        <text x="200" y="215" textAnchor="middle" fontSize="10" fill="#64748b" fontWeight="500">
                          {locale === 'en' ? 'Lagna' : 'लग्न'}
                        </text>
                      </svg>
                      <p className="text-xs text-gray-500 text-center mt-3">
                        {locale === 'en' ? 'Traditional North Indian Vedic Chart' : 'पारंपरिक उत्तर भारतीय वैदिक कुंडली'}
                      </p>
                    </div>
                  );
                })()}
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
                          <span className="font-medium text-teal-700">
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
                    <div className="p-4 bg-teal-50 rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-medium text-teal-800">
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
            </div>
          )}

        {/* Premium Kundali CTA */}
        {chart && (
          <Card className="p-8 bg-gradient-to-br from-amber-50 via-saffron-50 to-amber-100 border-2 border-amber-200">
            <div className="text-center">
              <a
                href="https://kundali.vastucart.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-500 to-saffron-600 text-white rounded-xl font-bold text-lg hover:from-amber-600 hover:to-saffron-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Crown className="w-6 h-6" />
                {locale === 'en' ? 'Explore Your Kundali in Depth' : 'अपनी कुंडली विस्तार से जानें'}
              </a>
              <p className="mt-4 text-amber-800 font-medium text-lg">
                {locale === 'en'
                  ? 'Simple, Interactive & in Plain Language — with Personalized Remedies'
                  : 'सरल, इंटरैक्टिव और आसान भाषा में — व्यक्तिगत उपायों के साथ'}
              </p>
            </div>
          </Card>
        )}

        {chart && (
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
