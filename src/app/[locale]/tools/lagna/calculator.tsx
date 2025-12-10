'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2 } from 'lucide-react';

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
  calculateLagna,
  searchPlaces,
  ZODIAC_SIGNS,
  type Place,
} from '@/lib/astrology';
import { getLagnaMeaning } from '@/lib/astrology/data/lagna-meanings';

interface LagnaCalculatorProps {
  locale: 'en' | 'hi';
}

interface LagnaResultData {
  signIndex: number;
  signName: { en: string; hi: string };
  degree: number;
  ascendant: number;
}

export default function LagnaCalculator({ locale }: LagnaCalculatorProps) {
  const t = useTranslations('tools.astrology.lagna');
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
  const [result, setResult] = useState<LagnaResultData | null>(null);
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

    // Validate inputs
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

    // Small delay for UI feedback
    setTimeout(() => {
      try {
        const lagnaResult = calculateLagna({
          year: birthDate.getFullYear(),
          month: birthDate.getMonth() + 1,
          day: birthDate.getDate(),
          hour: parseInt(birthHour),
          minute: parseInt(birthMinute),
          latitude,
          longitude,
          timezone,
        });

        // Find sign index
        const signIndex = ZODIAC_SIGNS.findIndex(s => s.name.en === lagnaResult.sign.name.en);

        setResult({
          signIndex,
          signName: lagnaResult.sign.name,
          degree: lagnaResult.degree,
          ascendant: lagnaResult.ascendant,
        });
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
    setUseManualCoords(false);
    setManualLat('');
    setManualLng('');
    setManualTz('5.5');
    setResult(null);
    setError(null);
  };

  // Get lagna meaning for display
  const lagnaMeaning = result ? getLagnaMeaning(result.signIndex) : null;

  // Generate hours options
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  // FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="🌅"
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
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
                <span className="text-xl font-bold text-gray-500">:</span>
                <select
                  value={birthMinute}
                  onChange={(e) => setBirthMinute(e.target.value)}
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  {minutes.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
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
                      placeholder={locale === 'en' ? 'Latitude (e.g., 28.6139)' : 'अक्षांश (जैसे 28.6139)'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                    <input
                      type="text"
                      value={manualLng}
                      onChange={(e) => setManualLng(e.target.value)}
                      placeholder={locale === 'en' ? 'Longitude (e.g., 77.2090)' : 'देशांतर (जैसे 77.2090)'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    />
                  </div>
                  <input
                    type="text"
                    value={manualTz}
                    onChange={(e) => setManualTz(e.target.value)}
                    placeholder={locale === 'en' ? 'Timezone (e.g., 5.5 for IST)' : 'समय क्षेत्र (जैसे 5.5 IST के लिए)'}
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
          {result && lagnaMeaning && (
            <div className="animate-fade-in-up space-y-6"
            >
              {/* Main Result */}
              <Card className="p-6 bg-gradient-to-br from-teal-500 to-teal-700 text-white">
                <div className="text-center">
                  <p className="text-teal-200 mb-2">{t('results.yourLagna')}</p>
                  <h2 className="text-4xl md:text-5xl font-bold mb-2">
                    {locale === 'hi' ? result.signName.hi : result.signName.en}
                  </h2>
                  <p className="text-teal-200 text-lg">
                    {locale === 'hi' ? result.signName.en : result.signName.hi}
                  </p>
                  <div className="mt-4 flex justify-center gap-4 text-sm opacity-80">
                    <span>{t('results.degree')}: {result.degree.toFixed(2)}°</span>
                    <span>•</span>
                    <span>{t('results.lord')}: {lagnaMeaning.lord}</span>
                  </div>
                </div>

                <ShareResult
                  title={`My Lagna is ${result.signName.en}`}
                  text={`I discovered my Lagna (Ascendant) is ${result.signName.en} (${result.signName.hi})! Find yours:`}
                  url={`https://vastutools.com/${locale}/tools/lagna`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </Card>

              {/* Lagna Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Info */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('results.basicInfo')}
                  </h3>
                  <div className="space-y-3">
                    <InfoRow label={t('results.element')} value={locale === 'hi' ? lagnaMeaning.element.hi : lagnaMeaning.element.en} />
                    <InfoRow label={t('results.quality')} value={locale === 'hi' ? lagnaMeaning.quality.hi : lagnaMeaning.quality.en} />
                    <InfoRow label={t('results.rulingPlanet')} value={lagnaMeaning.lord} />
                    <InfoRow label={t('results.bodyPart')} value={lagnaMeaning.bodyPart} />
                    <InfoRow label={t('results.gemstone')} value={lagnaMeaning.gemstone} />
                  </div>
                </Card>

                {/* Lucky Factors */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('results.luckyFactors')}
                  </h3>
                  <div className="space-y-3">
                    <InfoRow label={t('results.luckyColor')} value={locale === 'hi' ? lagnaMeaning.luckyColor.hi : lagnaMeaning.luckyColor.en} />
                    <InfoRow label={t('results.luckyDay')} value={locale === 'hi' ? lagnaMeaning.luckyDay.hi : lagnaMeaning.luckyDay.en} />
                    <InfoRow label={t('results.luckyNumbers')} value={lagnaMeaning.luckyNumber.join(', ')} />
                  </div>
                </Card>
              </div>

              {/* Physical Traits */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('results.physicalTraits')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(locale === 'hi' ? lagnaMeaning.physicalTraits.hi : lagnaMeaning.physicalTraits.en).map((trait, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Personality */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('results.personality')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'hi' ? lagnaMeaning.personality.hi : lagnaMeaning.personality.en}
                </p>
              </Card>

              {/* Strengths & Weaknesses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResultCard
                  title={t('results.strengths')}
                  className="bg-green-50 border-green-200"
                >
                  <TraitList
                    title=""
                    traits={locale === 'hi' ? lagnaMeaning.strengths.hi : lagnaMeaning.strengths.en}
                    type="positive"
                  />
                </ResultCard>

                <ResultCard
                  title={t('results.weaknesses')}
                  className="bg-red-50 border-red-200"
                >
                  <TraitList
                    title=""
                    traits={locale === 'hi' ? lagnaMeaning.weaknesses.hi : lagnaMeaning.weaknesses.en}
                    type="negative"
                  />
                </ResultCard>
              </div>

              {/* Career */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('results.career')}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {(locale === 'hi' ? lagnaMeaning.career.hi : lagnaMeaning.career.en).map((c, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Health & Relationships */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('results.health')}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'hi' ? lagnaMeaning.health.hi : lagnaMeaning.health.en}
                  </p>
                </Card>

                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('results.relationships')}
                  </h3>
                  <p className="text-gray-700">
                    {locale === 'hi' ? lagnaMeaning.relationships.hi : lagnaMeaning.relationships.en}
                  </p>
                </Card>
              </div>
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

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
      <span className="text-gray-600 text-sm">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
}
