'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, MapPin, Clock, Moon } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { ResultCard, TraitList, CelebrityList } from '@/components/tools/result-display';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

import {
  calculateMoonSign,
  searchPlaces,
  ZODIAC_SIGNS,
  NAKSHATRAS,
  type Place,
} from '@/lib/astrology';
import { getMoonSignMeaning } from '@/lib/astrology/data/moon-sign-meanings';
import { getCelebritiesBySunSign } from '@/lib/data/celebrities';

interface MoonSignCalculatorProps {
  locale: 'en' | 'hi';
}

interface CalculationResult {
  sign: typeof ZODIAC_SIGNS[number];
  nakshatra: typeof NAKSHATRAS[number];
  pada: number;
  moonLongitude: number;
  degreeInSign: number;
}

export function MoonSignCalculator({ locale }: MoonSignCalculatorProps) {
  const t = useTranslations('tools.astrology.moonSign');
  const tCommon = useTranslations('common');

  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthHour, setBirthHour] = useState<string>('12');
  const [birthMinute, setBirthMinute] = useState<string>('00');
  const [placeQuery, setPlaceQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showPlaceDropdown, setShowPlaceDropdown] = useState(false);

  // Manual coordinates (if place not in database)
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

    setTimeout(() => {
      try {
        const moonSignResult = calculateMoonSign({
          year: birthDate.getFullYear(),
          month: birthDate.getMonth() + 1,
          day: birthDate.getDate(),
          hour: parseInt(birthHour),
          minute: parseInt(birthMinute),
          latitude,
          longitude,
          timezone,
        });

        setResult(moonSignResult);
        setIsCalculating(false);
      } catch (err) {
        setError(locale === 'en' ? 'Calculation error. Please try again.' : 'गणना त्रुटि। कृपया पुनः प्रयास करें।');
        setIsCalculating(false);
      }
    }, 600);
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

  const meaning = result ? getMoonSignMeaning(result.sign.index) : null;

  // Generate hours and minutes for dropdowns
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
      icon="🌙"
      category="astrology"
      categoryLabel={locale === 'en' ? 'Astrology' : 'ज्योतिष'}
    >
      {/* Input Form */}
      <Card className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {locale === 'en' ? 'Enter Birth Details' : 'जन्म विवरण दर्ज करें'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Birth Date */}
          <div>
            <DatePicker
              label={locale === 'en' ? 'Date of Birth' : 'जन्म तिथि'}
              value={birthDate}
              onChange={setBirthDate}
              placeholder={locale === 'en' ? 'Select birth date' : 'जन्म तिथि चुनें'}
              locale={locale}
              minYear={1900}
              maxYear={new Date().getFullYear()}
              required
            />
          </div>

          {/* Birth Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="w-4 h-4 inline-block mr-1" />
              {locale === 'en' ? 'Time of Birth' : 'जन्म का समय'} *
            </label>
            <div className="flex gap-2">
              <select
                value={birthHour}
                onChange={(e) => setBirthHour(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                data-form-type="other"
                data-lpignore="true"
                autoComplete="off"
              >
                {hours.map((h) => (
                  <option key={h} value={h}>{h}</option>
                ))}
              </select>
              <span className="flex items-center text-gray-500">:</span>
              <select
                value={birthMinute}
                onChange={(e) => setBirthMinute(e.target.value)}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                data-form-type="other"
                data-lpignore="true"
                autoComplete="off"
              >
                {minutes.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>
            <p className="mt-1 text-xs text-gray-500">
              {locale === 'en' ? '24-hour format (e.g., 14:30 for 2:30 PM)' : '24-घंटे का प्रारूप (जैसे, दोपहर 2:30 के लिए 14:30)'}
            </p>
          </div>
        </div>

        {/* Birth Place */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <MapPin className="w-4 h-4 inline-block mr-1" />
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
                placeholder={locale === 'en' ? 'Type city name (e.g., Mumbai, Delhi)' : 'शहर का नाम टाइप करें (जैसे, मुंबई, दिल्ली)'}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                data-form-type="other"
                data-lpignore="true"
                autoComplete="off"
              />

              {showPlaceDropdown && searchResults.length > 0 && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {searchResults.map((place, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handlePlaceSelect(place)}
                      className="w-full px-4 py-2 text-left hover:bg-orange-50 border-b border-gray-100 last:border-b-0"
                    >
                      <span className="font-medium">{place.name}</span>
                      <span className="text-gray-500 ml-2">{place.state}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  type="number"
                  value={manualLat}
                  onChange={(e) => setManualLat(e.target.value)}
                  placeholder={locale === 'en' ? 'Latitude (e.g., 19.0760)' : 'अक्षांश'}
                  step="0.0001"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  data-form-type="other"
                  data-lpignore="true"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  type="number"
                  value={manualLng}
                  onChange={(e) => setManualLng(e.target.value)}
                  placeholder={locale === 'en' ? 'Longitude (e.g., 72.8777)' : 'देशांतर'}
                  step="0.0001"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  data-form-type="other"
                  data-lpignore="true"
                  autoComplete="off"
                />
              </div>
            </div>
          )}

          <button
            type="button"
            onClick={() => setUseManualCoords(!useManualCoords)}
            className="mt-2 text-sm text-orange-600 hover:text-orange-700"
          >
            {useManualCoords
              ? (locale === 'en' ? '← Search for city' : '← शहर खोजें')
              : (locale === 'en' ? 'Enter coordinates manually →' : 'निर्देशांक मैन्युअल रूप से दर्ज करें →')}
          </button>
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

        <div className="flex gap-3">
          <Button
            onClick={handleCalculate}
            isLoading={isCalculating}
            leftIcon={<Calculator className="w-5 h-5" />}
          >
            {tCommon('calculate')}
          </Button>
          {result && (
            <Button
              variant="secondary"
              onClick={handleReset}
              leftIcon={<RefreshCw className="w-5 h-5" />}
            >
              {tCommon('reset')}
            </Button>
          )}
        </div>
      </Card>

      {!result && (
        <EducationalSection
          title={educational.title}
          content={educational.content}
        />
      )}

      {/* Results */}
      {result && meaning && (
        <div className="animate-fade-in-up">
            {/* Main Result Card */}
            <Card className="mb-6 text-center bg-gradient-to-br from-teal-50 to-saffron-50">
              <div className="mb-4">
                <Moon className="w-12 h-12 mx-auto text-teal-600 mb-2" />
                <p className="text-gray-600">{t('results.yourMoonSign')}</p>
              </div>

              <div className="mb-6">
                <span className="text-6xl mb-2 block">{result.sign.symbol}</span>
                <h3 className="text-3xl font-bold text-gray-900">
                  {result.sign.name[locale]}
                </h3>
                <p className="text-lg text-gray-600 mt-1">
                  {locale === 'en' ? result.sign.name.en : result.sign.name.hi}
                  {locale === 'en' && ` (${result.sign.name.hi})`}
                </p>
              </div>

              {/* Nakshatra Info */}
              <div className="bg-white/60 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-600 mb-1">
                  {locale === 'en' ? 'Your Nakshatra' : 'आपका नक्षत्र'}
                </p>
                <p className="text-xl font-semibold text-gray-900">
                  {result.nakshatra.name[locale]} - {locale === 'en' ? 'Pada' : 'पाद'} {result.pada}
                </p>
                <p className="text-sm text-gray-500 mt-1">
                  {locale === 'en' ? `Moon at ${result.degreeInSign.toFixed(2)}° in ${result.sign.name.en}` : `${result.sign.name.hi} में चंद्रमा ${result.degreeInSign.toFixed(2)}° पर`}
                </p>
              </div>

              {/* Element & Ruling Planet */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white/60 rounded-lg p-3">
                  <p className="text-sm text-gray-600">{locale === 'en' ? 'Element' : 'तत्व'}</p>
                  <p className="font-semibold capitalize">{meaning.element}</p>
                </div>
                <div className="bg-white/60 rounded-lg p-3">
                  <p className="text-sm text-gray-600">{locale === 'en' ? 'Ruling Planet' : 'स्वामी ग्रह'}</p>
                  <p className="font-semibold">{meaning.rulingPlanet}</p>
                </div>
              </div>

              <ShareResult
                title={`My Moon Sign is ${result.sign.name.en}`}
                text={`I discovered my Moon Sign is ${result.sign.name.en} (${result.sign.name.hi}) with Nakshatra ${result.nakshatra.name.en}! Find yours:`}
                url={`https://tools.vastucart.in/${locale}/tools/moon-sign`}
                shareLabel={tCommon('share')}
                copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
              />
            </Card>

            {/* Overview */}
            <ResultCard title={t('results.overview')} className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {meaning.overview[locale]}
              </p>
            </ResultCard>

            {/* Personality */}
            <ResultCard title={t('results.personality')} className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {meaning.personality[locale]}
              </p>
            </ResultCard>

            {/* Traits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ResultCard title={t('results.positiveTraits')}>
                <TraitList
                  title=""
                  traits={meaning.positiveTraits.map((trait) => trait[locale])}
                  type="positive"
                />
              </ResultCard>

              <ResultCard title={t('results.negativeTraits')}>
                <TraitList
                  title=""
                  traits={meaning.negativeTraits.map((trait) => trait[locale])}
                  type="negative"
                />
              </ResultCard>
            </div>

            {/* Emotional Nature */}
            <ResultCard title={t('results.emotionalNature')} className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {meaning.emotionalNature[locale]}
              </p>
            </ResultCard>

            {/* Relationships */}
            <ResultCard title={t('results.relationships')} className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {meaning.relationships[locale]}
              </p>
            </ResultCard>

            {/* Career & Lucky Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ResultCard title={t('results.careerStrengths')}>
                <div className="flex flex-wrap gap-2">
                  {meaning.careerStrengths.map((career, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium"
                    >
                      {career[locale]}
                    </span>
                  ))}
                </div>
              </ResultCard>

              <ResultCard title={t('results.luckyFactors')}>
                <div className="space-y-2">
                  <p><span className="font-medium">{locale === 'en' ? 'Color:' : 'रंग:'}</span> {meaning.luckyColor[locale]}</p>
                  <p><span className="font-medium">{locale === 'en' ? 'Number:' : 'अंक:'}</span> {meaning.luckyNumber}</p>
                  <p><span className="font-medium">{locale === 'en' ? 'Day:' : 'दिन:'}</span> {meaning.luckyDay[locale]}</p>
                </div>
              </ResultCard>
            </div>

            {/* Spiritual Guidance */}
            <ResultCard title={t('results.spiritualGuidance')} className="mb-6">
              <div className="space-y-3">
                <p>
                  <span className="font-medium">{locale === 'en' ? 'Ruling Deity:' : 'इष्ट देवता:'}</span>{' '}
                  {meaning.rulingDeity[locale]}
                </p>
                <p>
                  <span className="font-medium">{locale === 'en' ? 'Mantra:' : 'मंत्र:'}</span>{' '}
                  <span className="font-sanskrit">{meaning.mantra[locale]}</span>
                </p>
              </div>
            </ResultCard>

            {/* Compatible Signs */}
            <ResultCard title={t('results.compatibleSigns')} className="mb-6">
              <div className="flex flex-wrap gap-3">
                {meaning.compatibleSigns.map((signIdx) => (
                  <div
                    key={signIdx}
                    className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-800 rounded-full"
                  >
                    <span className="text-xl">{ZODIAC_SIGNS[signIdx].symbol}</span>
                    <span className="font-medium">{ZODIAC_SIGNS[signIdx].name[locale]}</span>
                  </div>
                ))}
              </div>
            </ResultCard>

            {/* Celebrities with same sign */}
            {getCelebritiesBySunSign(result.sign.index).length > 0 && (
              <ResultCard
                title={locale === 'en' ? `Famous ${result.sign.name.en} Personalities` : `प्रसिद्ध ${result.sign.name.hi} व्यक्तित्व`}
                className="mb-6"
              >
                <CelebrityList
                  celebrities={getCelebritiesBySunSign(result.sign.index).map(c => ({
                    name: locale === 'hi' ? c.nameHi : c.name,
                    profession: locale === 'hi' ? c.professionHi : c.profession,
                  }))}
                  label=""
                />
              </ResultCard>
            )}
        </div>
      )}

      {result && (
        <RelatedToolsSection
          tools={relatedTools}
          locale={locale as 'en' | 'hi'}
        />
      )}

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title={tCommon('faq')} />
    </ToolLayout>
  );
}
