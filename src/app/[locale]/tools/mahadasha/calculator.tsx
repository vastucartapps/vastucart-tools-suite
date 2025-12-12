'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, ChevronDown, ChevronUp } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { ResultCard, TraitList } from '@/components/tools/result-display';
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
  searchPlaces,
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
  const [placeQuery, setPlaceQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showPlaceDropdown, setShowPlaceDropdown] = useState(false);
  const [useManualCoords, setUseManualCoords] = useState(false);
  const [manualLat, setManualLat] = useState('');
  const [manualLng, setManualLng] = useState('');
  const [manualTz, setManualTz] = useState('5.5');

  // Result state
  const [result, setResult] = useState<MahadashaResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedMahadasha, setExpandedMahadasha] = useState<string | null>(null);

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
        // Calculate Moon position first
        const moonResult = calculateMoonSign({
          year: birthDate.getFullYear(),
          month: birthDate.getMonth() + 1,
          day: birthDate.getDate(),
          hour: parseInt(birthHour),
          minute: parseInt(birthMinute),
          latitude,
          longitude,
          timezone,
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
    setPlaceQuery('');
    setSelectedPlace(null);
    setUseManualCoords(false);
    setManualLat('');
    setManualLng('');
    setManualTz('5.5');
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

  // Generate hours options
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

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
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  {hours.map((h) => (
                    <option key={h} value={h}>{h}</option>
                  ))}
                </select>
                <span className="text-xl font-bold text-gray-500">:</span>
                <select
                  value={birthMinute}
                  onChange={(e) => setBirthMinute(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  {minutes.map((m) => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </select>
              </div>
              <p className="text-xs text-gray-500 mt-1">{t('form.timeNote')}</p>
            </div>

            {/* Birth Place */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.birthPlace')} *
              </label>
              {!useManualCoords ? (
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
                    placeholder={locale === 'en' ? 'Type city name...' : 'शहर का नाम टाइप करें...'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    data-form-type="other"
                    data-lpignore="true"
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
                  <button
                    type="button"
                    onClick={() => setUseManualCoords(true)}
                    className="text-sm text-teal-600 hover:text-teal-700 mt-2"
                  >
                    {t('form.manualCoords')}
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={manualLat}
                      onChange={(e) => setManualLat(e.target.value)}
                      placeholder={locale === 'en' ? 'Latitude' : 'अक्षांश'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                    <input
                      type="text"
                      value={manualLng}
                      onChange={(e) => setManualLng(e.target.value)}
                      placeholder={locale === 'en' ? 'Longitude' : 'देशांतर'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <input
                    type="text"
                    value={manualTz}
                    onChange={(e) => setManualTz(e.target.value)}
                    placeholder={locale === 'en' ? 'Timezone (e.g., 5.5)' : 'समय क्षेत्र'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  />
                  <button
                    type="button"
                    onClick={() => setUseManualCoords(false)}
                    className="text-sm text-teal-600 hover:text-teal-700"
                  >
                    {t('form.searchPlace')}
                  </button>
                </div>
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

        {!result && (
          <EducationalSection
            title={educational.title}
            content={educational.content}
          />
        )}

        {/* Results Section */}
          {result && (
            <div className="animate-fade-in-up space-y-6"
            >
              {/* Current Mahadasha Card */}
              {result.currentMahadasha && (
                <Card
                  className="p-6 text-white"
                  style={{ backgroundColor: result.currentMahadasha.color }}
                >
                  <div className="text-center">
                    <p className="opacity-80 mb-2">{t('results.currentMahadasha')}</p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-2">
                      {locale === 'hi'
                        ? result.currentMahadasha.planetName.hi
                        : result.currentMahadasha.planetName.en}
                    </h2>
                    <p className="opacity-80 text-lg">
                      {locale === 'hi'
                        ? result.currentMahadasha.planetName.en
                        : result.currentMahadasha.planetName.hi}
                    </p>
                    <div className="mt-4 text-sm opacity-80">
                      <span>{formatDate(result.currentMahadasha.startDate)}</span>
                      <span className="mx-2">—</span>
                      <span>{formatDate(result.currentMahadasha.endDate)}</span>
                    </div>
                  </div>

                  <ShareResult
                    title={`My current Mahadasha is ${result.currentMahadasha.planetName.en}`}
                    text={`I'm in ${result.currentMahadasha.planetName.en} Mahadasha (${result.currentMahadasha.years.toFixed(1)} years). Find your planetary periods:`}
                    url={`https://tools.vastucart.in/${locale}/tools/mahadasha`}
                    shareLabel={tCommon('share')}
                    copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                  />
                </Card>
              )}

              {/* Balance at Birth */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('results.balanceAtBirth')}
                </h3>
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-teal-600">
                      {result.balanceAtBirth.years}
                    </p>
                    <p className="text-sm text-gray-500">{t('results.years')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-teal-600">
                      {result.balanceAtBirth.months}
                    </p>
                    <p className="text-sm text-gray-500">{t('results.months')}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-teal-600">
                      {result.balanceAtBirth.days}
                    </p>
                    <p className="text-sm text-gray-500">{t('results.days')}</p>
                  </div>
                </div>
                <p className="text-center text-sm text-gray-500 mt-4">
                  {t('results.balanceNote')}
                </p>
              </Card>

              {/* Current Mahadasha Interpretation */}
              {currentMeaning && (
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('results.interpretation')}
                  </h3>
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
                    <Card className="p-4 bg-teal-50">
                      <h4 className="font-semibold text-teal-900 mb-2">{t('results.career')}</h4>
                      <p className="text-sm text-teal-800">
                        {locale === 'hi' ? currentMeaning.career.hi : currentMeaning.career.en}
                      </p>
                    </Card>

                    <Card className="p-4 bg-pink-50">
                      <h4 className="font-semibold text-pink-900 mb-2">{t('results.relationships')}</h4>
                      <p className="text-sm text-pink-800">
                        {locale === 'hi' ? currentMeaning.relationships.hi : currentMeaning.relationships.en}
                      </p>
                    </Card>
                  </div>

                  <Card className="p-4 bg-teal-50 mt-6">
                    <h4 className="font-semibold text-teal-900 mb-2">{t('results.remedies')}</h4>
                    <ul className="list-disc list-inside text-sm text-teal-800 space-y-1">
                      {(locale === 'hi' ? currentMeaning.remedies.hi : currentMeaning.remedies.en).map((remedy, i) => (
                        <li key={i}>{remedy}</li>
                      ))}
                    </ul>
                  </Card>
                </Card>
              )}

              {/* Current Antardashas */}
              {result.currentAntardashas.length > 0 && (
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('results.antardashas')}
                  </h3>
                  <div className="space-y-2">
                    {result.currentAntardashas.map((ad) => (
                      <div
                        key={ad.planet}
                        className={`p-3 rounded-lg border ${
                          isCurrent(ad)
                            ? 'bg-teal-100 border-teal-300'
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
                              <span className="text-xs bg-teal-600 text-white px-2 py-0.5 rounded-full">
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
                </Card>
              )}

              {/* All Mahadashas Timeline */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('results.allMahadashas')}
                </h3>
                <div className="space-y-2">
                  {result.mahadashas.slice(0, 9).map((md) => (
                    <div key={`${md.planet}-${md.startDate.getTime()}`}>
                      <button
                        onClick={() => toggleMahadashaExpand(md.planet)}
                        className={`w-full p-4 rounded-lg border transition-all ${
                          isCurrent(md)
                            ? 'bg-teal-100 border-teal-300'
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
                              <span className="text-xs bg-teal-600 text-white px-2 py-0.5 rounded-full">
                                {t('results.current')}
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm text-gray-500">
                              {formatDate(md.startDate)} - {formatDate(md.endDate)}
                            </span>
                            {expandedMahadasha === md.planet ? (
                              <ChevronUp className="w-4 h-4 text-gray-400" />
                            ) : (
                              <ChevronDown className="w-4 h-4 text-gray-400" />
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
                                    isCurrent(ad) ? 'bg-teal-50' : ''
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
                                        <span className="text-xs bg-teal-500 text-white px-1.5 py-0.5 rounded">
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
              </Card>
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
