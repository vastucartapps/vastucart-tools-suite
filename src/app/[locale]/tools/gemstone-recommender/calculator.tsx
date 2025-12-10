'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, Gem, Check, X, AlertTriangle, Info } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';

import {
  searchPlaces,
  type Place,
} from '@/lib/astrology';
import { calculateGemstoneRecommendation, type GemstoneResult, type GemstoneRecommendation } from '@/lib/astrology/gemstone-recommender';

interface GemstoneRecommenderCalculatorProps {
  locale: 'en' | 'hi';
}

export default function GemstoneRecommenderCalculator({ locale }: GemstoneRecommenderCalculatorProps) {
  const t = useTranslations('tools.astrology.gemstoneRecommender');
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
  const [result, setResult] = useState<GemstoneResult | null>(null);
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
        const gemstoneResult = calculateGemstoneRecommendation({
          year: birthDate.getFullYear(),
          month: birthDate.getMonth() + 1,
          day: birthDate.getDate(),
          hour: parseInt(birthHour),
          minute: parseInt(birthMinute),
          latitude,
          longitude,
          timezone,
        });

        setResult(gemstoneResult);
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

  // Generate hours options
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  // Get FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;

  // Strength badge color
  const getStrengthColor = (strength: 'strong' | 'moderate' | 'weak') => {
    if (strength === 'strong') return 'bg-green-100 text-green-800';
    if (strength === 'moderate') return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  // Render gemstone card
  const renderGemstoneCard = (recommendation: GemstoneRecommendation, isPrimary: boolean = false) => {
    const gemstone = recommendation.gemstone;

    return (
      <Card
        key={gemstone.planet}
        className={`p-6 ${isPrimary ? 'border-2 border-teal-400 bg-gradient-to-br from-teal-50 to-white' : ''}`}
      >
        <div className="flex items-start gap-4">
          {/* Gemstone Color Circle */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
            style={{ backgroundColor: gemstone.color }}
          >
            <Gem className="w-8 h-8 text-white drop-shadow" />
          </div>

          <div className="flex-1">
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-gray-900">
                {locale === 'hi' ? gemstone.name.hi : gemstone.name.en}
              </h3>
              {isPrimary && (
                <span className="px-2 py-0.5 bg-teal-500 text-white text-xs rounded-full font-medium">
                  {locale === 'en' ? 'PRIMARY' : 'प्राथमिक'}
                </span>
              )}
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStrengthColor(recommendation.planetStrength)}`}>
                {recommendation.planetStrength === 'strong'
                  ? (locale === 'en' ? 'Strong' : 'मजबूत')
                  : recommendation.planetStrength === 'moderate'
                    ? (locale === 'en' ? 'Moderate' : 'मध्यम')
                    : (locale === 'en' ? 'Needs Support' : 'सहारे की जरूरत')}
              </span>
            </div>

            {/* Alternative Name & Planet */}
            <p className="text-sm text-gray-500 mb-2">
              {locale === 'hi' ? gemstone.alternativeName.hi : gemstone.alternativeName.en} • {locale === 'hi' ? gemstone.planetName.hi : gemstone.planetName.en}
            </p>

            {/* Reason */}
            <p className="text-gray-700 mb-4">
              {locale === 'hi' ? recommendation.reason.hi : recommendation.reason.en}
            </p>

            {/* Benefits */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                {locale === 'en' ? 'Benefits:' : 'लाभ:'}
              </h4>
              <ul className="space-y-1">
                {gemstone.benefits.slice(0, 3).map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {locale === 'hi' ? benefit.hi : benefit.en}
                  </li>
                ))}
              </ul>
            </div>

            {/* Wearing Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
              <div className="p-2 bg-gray-50 rounded">
                <p className="text-gray-500 text-xs">{locale === 'en' ? 'Metal' : 'धातु'}</p>
                <p className="font-medium">{locale === 'hi' ? gemstone.metal.hi : gemstone.metal.en}</p>
              </div>
              <div className="p-2 bg-gray-50 rounded">
                <p className="text-gray-500 text-xs">{locale === 'en' ? 'Finger' : 'उंगली'}</p>
                <p className="font-medium">{locale === 'hi' ? gemstone.finger.hi : gemstone.finger.en}</p>
              </div>
              <div className="p-2 bg-gray-50 rounded">
                <p className="text-gray-500 text-xs">{locale === 'en' ? 'Weight' : 'वजन'}</p>
                <p className="font-medium">{locale === 'hi' ? gemstone.weight.hi : gemstone.weight.en}</p>
              </div>
              <div className="p-2 bg-gray-50 rounded">
                <p className="text-gray-500 text-xs">{locale === 'en' ? 'Day' : 'दिन'}</p>
                <p className="font-medium text-xs">{locale === 'hi' ? gemstone.day.hi.split(' ')[0] : gemstone.day.en.split(' ')[0]}</p>
              </div>
            </div>

            {/* Mantra */}
            <div className="mt-4 p-3 bg-orange-50 rounded-lg">
              <p className="text-sm text-orange-800">
                <span className="font-semibold">{locale === 'en' ? 'Mantra: ' : 'मंत्र: '}</span>
                {locale === 'hi' ? gemstone.mantra.hi : gemstone.mantra.en}
              </p>
            </div>

            {/* Cautions */}
            {gemstone.cautions.length > 0 && (
              <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                <p className="text-sm font-semibold text-amber-800 mb-1 flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" />
                  {locale === 'en' ? 'Cautions:' : 'सावधानियां:'}
                </p>
                <ul className="space-y-1">
                  {gemstone.cautions.map((caution, idx) => (
                    <li key={idx} className="text-sm text-amber-700">
                      • {locale === 'hi' ? caution.hi : caution.en}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Card>
    );
  };

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="💎"
      category="astrology"
      categoryLabel={locale === 'en' ? 'Astrology' : 'ज्योतिष'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {locale === 'en' ? 'Enter Birth Details' : 'जन्म विवरण दर्ज करें'}
          </h2>

          <div className="space-y-6">
            {/* Birth Date */}
            <div>
              <DatePicker
                label={locale === 'en' ? 'Birth Date' : 'जन्म तिथि'}
                value={birthDate}
                onChange={setBirthDate}
                placeholder={locale === 'en' ? 'Select birth date' : 'जन्म तिथि चुनें'}
                locale={locale}
              />
            </div>

            {/* Birth Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === 'en' ? 'Birth Time' : 'जन्म समय'} *
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
              <p className="text-xs text-gray-500 mt-1">
                {locale === 'en' ? 'Use 24-hour format (IST)' : '24-घंटे प्रारूप का उपयोग करें (IST)'}
              </p>
            </div>

            {/* Birth Place */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === 'en' ? 'Birth Place' : 'जन्म स्थान'} *
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
                    {locale === 'en' ? 'Enter coordinates manually' : 'निर्देशांक मैन्युअल दर्ज करें'}
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
                    {locale === 'en' ? 'Search for place' : 'स्थान खोजें'}
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
                  <Gem className="w-4 h-4 mr-2" />
                )}
                {locale === 'en' ? 'Find My Lucky Gemstone' : 'मेरा भाग्यशाली रत्न खोजें'}
              </Button>
              <Button onClick={handleReset} variant="secondary">
                <RefreshCw className="w-4 h-4 mr-2" />
                {tCommon('reset')}
              </Button>
            </div>
          </div>
        </Card>

        {/* Results Section */}
        {result && (
          <div className="animate-fade-in-up space-y-6">
            {/* Chart Summary */}
            <Card className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">
                    {locale === 'en' ? 'Ascendant (Lagna)' : 'लग्न'}
                  </p>
                  <p className="text-2xl font-bold text-purple-700">
                    {result.ascendant.sign.symbol} {locale === 'hi' ? result.ascendant.sign.name.hi : result.ascendant.sign.name.en}
                  </p>
                  <p className="text-sm text-gray-500">
                    {locale === 'en' ? 'Lord:' : 'स्वामी:'} {result.ascendant.lord.charAt(0).toUpperCase() + result.ascendant.lord.slice(1)}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">
                    {locale === 'en' ? 'Moon Sign (Rashi)' : 'चंद्र राशि'}
                  </p>
                  <p className="text-2xl font-bold text-indigo-700">
                    {result.moonSign.sign.symbol} {locale === 'hi' ? result.moonSign.sign.name.hi : result.moonSign.sign.name.en}
                  </p>
                  <p className="text-sm text-gray-500">
                    {result.moonSign.nakshatra}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">
                    {locale === 'en' ? 'Lagna Lord Position' : 'लग्नेश स्थिति'}
                  </p>
                  <p className="text-2xl font-bold text-purple-700">
                    {result.ascendant.lordPosition.sign.symbol}
                  </p>
                  <p className="text-sm text-gray-500">
                    {locale === 'en' ? `House ${result.ascendant.lordPosition.house}` : `${result.ascendant.lordPosition.house}वां भाव`}
                  </p>
                </div>
              </div>

              <ShareResult
                title={locale === 'en' ? 'My Lucky Gemstone Recommendation' : 'मेरी भाग्यशाली रत्न सिफारिश'}
                text={`${locale === 'en' ? `My lucky gemstone is ${result.primaryGemstone.gemstone.name.en}!` : `मेरा भाग्यशाली रत्न ${result.primaryGemstone.gemstone.name.hi} है!`}`}
                url={`https://vastutools.com/${locale}/tools/gemstone-recommender`}
                shareLabel={tCommon('share')}
                copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
              />
            </Card>

            {/* Primary Gemstone */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Gem className="w-5 h-5 text-teal-600" />
                {locale === 'en' ? 'Your Primary Lucky Gemstone' : 'आपका प्राथमिक भाग्यशाली रत्न'}
              </h3>
              {renderGemstoneCard(result.primaryGemstone, true)}
            </div>

            {/* Secondary Gemstones */}
            {result.secondaryGemstones.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {locale === 'en' ? 'Alternative Gemstones' : 'वैकल्पिक रत्न'}
                </h3>
                <div className="space-y-4">
                  {result.secondaryGemstones.map((rec) => renderGemstoneCard(rec))}
                </div>
              </div>
            )}

            {/* Gemstones to Avoid */}
            {result.gemstonesToAvoid.length > 0 && (
              <Card className="p-6 bg-red-50 border-red-200">
                <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                  <X className="w-5 h-5" />
                  {locale === 'en' ? 'Gemstones to Avoid' : 'बचने योग्य रत्न'}
                </h3>
                <div className="space-y-3">
                  {result.gemstonesToAvoid.map((item) => (
                    <div
                      key={item.gemstone.planet}
                      className="flex items-center gap-3 p-3 bg-white rounded-lg border border-red-200"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center opacity-50"
                        style={{ backgroundColor: item.gemstone.color }}
                      >
                        <X className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {locale === 'hi' ? item.gemstone.name.hi : item.gemstone.name.en}
                        </p>
                        <p className="text-sm text-red-600">
                          {locale === 'hi' ? item.reason.hi : item.reason.en}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Wearing Instructions */}
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <Info className="w-5 h-5" />
                {locale === 'en' ? 'Wearing Instructions' : 'धारण करने के निर्देश'}
              </h3>
              <p className="text-blue-900">
                {locale === 'hi' ? result.wearingInstructions.hi : result.wearingInstructions.en}
              </p>
            </Card>

            {/* General Guidance */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'en' ? 'General Guidance' : 'सामान्य मार्गदर्शन'}
              </h3>
              <p className="text-gray-700">
                {locale === 'hi' ? result.generalGuidance.hi : result.generalGuidance.en}
              </p>
            </Card>
          </div>
        )}

        {/* FAQ Section */}
        <FAQSection title={tCommon('faq')} faqs={faqs} />
      </div>
    </ToolLayout>
  );
}
