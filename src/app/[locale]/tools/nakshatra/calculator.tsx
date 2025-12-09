'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, MapPin, Clock } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { ResultCard, TraitList, CelebrityList } from '@/components/tools/result-display';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';

import {
  calculateMoonSign,
  searchPlaces,
  type Place,
} from '@/lib/astrology';
import { getNakshatraMeaning } from '@/lib/astrology/data/nakshatra-meanings';
import { getCelebritiesBySunSign } from '@/lib/data/celebrities';

interface NakshatraCalculatorProps {
  locale: 'en' | 'hi';
}

interface CalculationResult {
  nakshatraIndex: number;
  nakshatraName: { en: string; hi: string };
  nakshatraLord: string;
  pada: number;
  moonSign: number;
  moonSignName: { en: string; hi: string };
  moonLongitude: number;
}

export default function NakshatraCalculator({ locale }: NakshatraCalculatorProps) {
  const t = useTranslations('tools.astrology.nakshatra');
  const tCommon = useTranslations('common');

  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthHour, setBirthHour] = useState<string>('12');
  const [birthMinute, setBirthMinute] = useState<string>('00');
  const [placeQuery, setPlaceQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showPlaceDropdown, setShowPlaceDropdown] = useState(false);

  // Manual coordinates
  const [useManualCoords, setUseManualCoords] = useState(false);
  const [manualLat, setManualLat] = useState('');
  const [manualLng, setManualLng] = useState('');

  // Result state
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Search places
  const searchResults = useMemo(() => {
    if (placeQuery.length < 2) return [];
    return searchPlaces(placeQuery, 8);
  }, [placeQuery]);

  const handlePlaceSelect = (place: Place) => {
    setSelectedPlace(place);
    setPlaceQuery(`${place.name}, ${place.state}`);
    setShowPlaceDropdown(false);
    setUseManualCoords(false);
  };

  const handleCalculate = () => {
    setError(null);

    // Validate inputs
    if (!birthDate) {
      setError(locale === 'en' ? 'Please select your birth date' : 'कृपया अपनी जन्म तिथि चुनें');
      return;
    }

    let latitude: number;
    let longitude: number;
    let timezone = 5.5; // Default IST

    if (useManualCoords) {
      latitude = parseFloat(manualLat);
      longitude = parseFloat(manualLng);
      if (isNaN(latitude) || isNaN(longitude)) {
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

    try {
      // Calculate using the astrology engine
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

      setResult({
        nakshatraIndex: moonResult.nakshatra.index,
        nakshatraName: moonResult.nakshatra.name,
        nakshatraLord: moonResult.nakshatra.lord,
        pada: moonResult.pada,
        moonSign: moonResult.sign.index,
        moonSignName: moonResult.sign.name,
        moonLongitude: moonResult.moonLongitude,
      });
    } catch (err) {
      setError(locale === 'en' ? 'Error in calculation. Please try again.' : 'गणना में त्रुटि। कृपया पुनः प्रयास करें।');
      console.error('Nakshatra calculation error:', err);
    } finally {
      setIsCalculating(false);
    }
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
    setResult(null);
    setError(null);
  };

  const nakshatraMeaning = result ? getNakshatraMeaning(result.nakshatraIndex) : null;

  // Hour options
  const hourOptions = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minuteOptions = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  return (
    <ToolLayout
      title={t('title')}
      description={t('description')}
      icon="⭐"
      category="astrology"
      categoryLabel={locale === 'en' ? 'Astrology' : 'ज्योतिष'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-teal-500" />
            {t('form.title')}
          </h2>

          <div className="space-y-6">
            {/* Birth Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.birthDate')} <span className="text-red-500">*</span>
              </label>
              <DatePicker
                value={birthDate}
                onChange={setBirthDate}
                locale={locale}
                placeholder={locale === 'en' ? 'Select date' : 'तिथि चुनें'}
                maxYear={new Date().getFullYear()}
                minYear={1900}
              />
            </div>

            {/* Birth Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Clock className="w-4 h-4 inline mr-1" />
                {t('form.birthTime')} <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2 items-center">
                <select
                  value={birthHour}
                  onChange={(e) => setBirthHour(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  {hourOptions.map((h) => (
                    <option key={h} value={h}>
                      {h}
                    </option>
                  ))}
                </select>
                <span className="text-gray-500 font-bold">:</span>
                <select
                  value={birthMinute}
                  onChange={(e) => setBirthMinute(e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  {minuteOptions.map((m) => (
                    <option key={m} value={m}>
                      {m}
                    </option>
                  ))}
                </select>
                <span className="text-sm text-gray-500">(24h)</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {t('form.timeFormat')}
              </p>
            </div>

            {/* Birth Place */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <MapPin className="w-4 h-4 inline mr-1" />
                {t('form.birthPlace')} <span className="text-red-500">*</span>
              </label>

              {!useManualCoords ? (
                <div className="relative">
                  <input
                    type="text"
                    value={placeQuery}
                    onChange={(e) => {
                      setPlaceQuery(e.target.value);
                      setSelectedPlace(null);
                      setShowPlaceDropdown(true);
                    }}
                    onFocus={() => setShowPlaceDropdown(true)}
                    placeholder={locale === 'en' ? 'Search city...' : 'शहर खोजें...'}
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
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={manualLat}
                      onChange={(e) => setManualLat(e.target.value)}
                      placeholder={locale === 'en' ? 'Latitude (e.g., 28.6139)' : 'अक्षांश (जैसे 28.6139)'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      data-form-type="other"
                      data-lpignore="true"
                      autoComplete="off"
                    />
                    <input
                      type="text"
                      value={manualLng}
                      onChange={(e) => setManualLng(e.target.value)}
                      placeholder={locale === 'en' ? 'Longitude (e.g., 77.2090)' : 'देशांतर (जैसे 77.2090)'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      data-form-type="other"
                      data-lpignore="true"
                      autoComplete="off"
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setUseManualCoords(false);
                      setManualLat('');
                      setManualLng('');
                    }}
                    className="text-sm text-teal-600 hover:text-teal-700"
                  >
                    {t('form.searchPlace')}
                  </button>
                </div>
              )}
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="flex-1 bg-gradient-to-r from-teal-500 to-teal-600 text-white"
              >
                {isCalculating ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
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

        {/* Results */}
        {result && nakshatraMeaning && (
          <div className="animate-fade-in-up space-y-6">
              {/* Main Result Card */}
              <Card className="p-6 bg-gradient-to-br from-teal-500 to-teal-600 text-white">
                <h2 className="text-xl font-semibold mb-4 opacity-90">
                  {t('results.title')}
                </h2>

                <div className="text-center py-6">
                  <div className="text-5xl mb-2">
                    {nakshatraMeaning.symbol}
                  </div>
                  <h3 className="text-3xl font-bold mb-2">
                    {locale === 'hi' ? result.nakshatraName.hi : result.nakshatraName.en}
                  </h3>
                  <p className="text-xl opacity-90">
                    {t('results.pada')} {result.pada}
                  </p>
                  <div className="mt-4 flex justify-center gap-4 text-sm opacity-80">
                    <span>{t('results.lord')}: {result.nakshatraLord}</span>
                    <span>•</span>
                    <span>{t('results.moonIn')}: {locale === 'hi' ? result.moonSignName.hi : result.moonSignName.en}</span>
                  </div>
                </div>

                <ShareResult
                  title={`My Nakshatra is ${result.nakshatraName.en}`}
                  text={`I discovered my Nakshatra is ${result.nakshatraName.en} (${result.nakshatraName.hi}) Pada ${result.pada}! Find yours:`}
                  url={`https://vastutools.com/${locale}/tools/nakshatra`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </Card>

              {/* Nakshatra Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Info */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('results.basicInfo')}
                  </h3>
                  <div className="space-y-3">
                    <InfoRow label={t('results.deity')} value={nakshatraMeaning.deity} />
                    <InfoRow label={t('results.symbol')} value={nakshatraMeaning.symbol} />
                    <InfoRow label={t('results.animal')} value={locale === 'hi' ? nakshatraMeaning.animal.hi : nakshatraMeaning.animal.en} />
                    <InfoRow label={t('results.gana')} value={locale === 'hi' ? nakshatraMeaning.gana.hi : nakshatraMeaning.gana.en} />
                    <InfoRow label={t('results.guna')} value={locale === 'hi' ? nakshatraMeaning.guna.hi : nakshatraMeaning.guna.en} />
                    <InfoRow label={t('results.nadi')} value={locale === 'hi' ? nakshatraMeaning.nadi.hi : nakshatraMeaning.nadi.en} />
                    <InfoRow label={t('results.element')} value={locale === 'hi' ? nakshatraMeaning.element.hi : nakshatraMeaning.element.en} />
                  </div>
                </Card>

                {/* Lucky Factors */}
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('results.luckyFactors')}
                  </h3>
                  <div className="space-y-3">
                    <InfoRow label={t('results.luckyNumbers')} value={nakshatraMeaning.luckyNumbers.join(', ')} />
                    <InfoRow label={t('results.luckyColors')} value={nakshatraMeaning.luckyColors.map(c => locale === 'hi' ? c.hi : c.en).join(', ')} />
                    <InfoRow label={t('results.luckyGems')} value={nakshatraMeaning.luckyGems.map(g => locale === 'hi' ? g.hi : g.en).join(', ')} />
                    <InfoRow label={t('results.direction')} value={locale === 'hi' ? nakshatraMeaning.direction.hi : nakshatraMeaning.direction.en} />
                    <InfoRow label={t('results.bodyPart')} value={locale === 'hi' ? nakshatraMeaning.bodyPart.hi : nakshatraMeaning.bodyPart.en} />
                  </div>
                </Card>
              </div>

              {/* Personality */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('results.personality')}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'hi' ? nakshatraMeaning.personality.hi : nakshatraMeaning.personality.en}
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
                    traits={locale === 'hi' ? nakshatraMeaning.strengths.hi : nakshatraMeaning.strengths.en}
                    type="positive"
                  />
                </ResultCard>

                <ResultCard
                  title={t('results.weaknesses')}
                  className="bg-red-50 border-red-200"
                >
                  <TraitList
                    title=""
                    traits={locale === 'hi' ? nakshatraMeaning.weaknesses.hi : nakshatraMeaning.weaknesses.en}
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
                  {(locale === 'hi' ? nakshatraMeaning.career.hi : nakshatraMeaning.career.en).map((c, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full text-sm"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </Card>

              {/* Health */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('results.health')}
                </h3>
                <p className="text-gray-700">
                  {locale === 'hi' ? nakshatraMeaning.health.hi : nakshatraMeaning.health.en}
                </p>
              </Card>

              {/* Name Syllables */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('results.nameSyllables')}
                </h3>
                <div className="flex gap-4">
                  {nakshatraMeaning.syllables.map((s, i) => (
                    <div
                      key={i}
                      className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-saffron-100 to-teal-100 rounded-lg text-2xl font-bold text-teal-700"
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  {t('results.syllablesHint')}
                </p>
              </Card>

              {/* Celebrities with same Moon Sign */}
              {getCelebritiesBySunSign(result.moonSign).length > 0 && (
                <Card className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {locale === 'en' ? `Famous ${result.moonSignName.en} Personalities` : `प्रसिद्ध ${result.moonSignName.hi} व्यक्तित्व`}
                  </h3>
                  <CelebrityList
                    celebrities={getCelebritiesBySunSign(result.moonSign).map(c => ({
                      name: locale === 'hi' ? c.nameHi : c.name,
                      profession: locale === 'hi' ? c.professionHi : c.profession,
                    }))}
                    label=""
                  />
                </Card>
              )}
          </div>
        )}

        {/* FAQ Section */}
        <FAQSection
          title={tCommon('faq')}
          faqs={[
            { question: t('faq.q1.question'), answer: t('faq.q1.answer') },
            { question: t('faq.q2.question'), answer: t('faq.q2.answer') },
            { question: t('faq.q3.question'), answer: t('faq.q3.answer') },
            { question: t('faq.q4.question'), answer: t('faq.q4.answer') },
          ]}
        />
      </div>
    </ToolLayout>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
      <span className="text-gray-600">{label}</span>
      <span className="font-medium text-gray-900">{value}</span>
    </div>
  );
}
