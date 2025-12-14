'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, Briefcase, Building, Building2, Star, TrendingUp, AlertCircle, Check } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker';
import { CustomSelect } from '@/components/ui/custom-select';
import { CompatibilityBar, ScoreMeter } from '@/components/tools/progress-display';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard } from '@/components/ui/section-card';

import {
  searchPlaces,
  type Place,
} from '@/lib/astrology';
import { calculateCareerPrediction, type CareerResult } from '@/lib/astrology/career-predictor';

interface CareerPredictorCalculatorProps {
  locale: 'en' | 'hi';
}

export default function CareerPredictorCalculator({ locale }: CareerPredictorCalculatorProps) {
  const t = useTranslations('tools.astrology.careerPredictor');
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
  const [result, setResult] = useState<CareerResult | null>(null);
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
        const careerResult = calculateCareerPrediction({
          year: birthDate.getFullYear(),
          month: birthDate.getMonth() + 1,
          day: birthDate.getDate(),
          hour: parseInt(birthHour),
          minute: parseInt(birthMinute),
          latitude,
          longitude,
          timezone,
        });

        setResult(careerResult);
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
  };

  // Generate hours options
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  // Get FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  // Suitability badge color
  const getSuitabilityColor = (suitability: 'highly-suitable' | 'suitable' | 'moderate') => {
    if (suitability === 'highly-suitable') return 'bg-green-100 text-green-800 border-green-200';
    if (suitability === 'suitable') return 'bg-teal-100 text-teal-800 border-teal-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="🎯"
      category="astrology"
      categoryLabel={locale === 'en' ? 'Astrology' : 'ज्योतिष'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <SectionCard
          title={locale === 'en' ? 'Enter Birth Details' : 'जन्म विवरण दर्ज करें'}
          icon={<Calculator className="w-5 h-5 text-teal-600" />}
          accentBorder="gradient"
        >

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
                  <Briefcase className="w-4 h-4 mr-2" />
                )}
                {locale === 'en' ? 'Predict Career Path' : 'करियर पथ की भविष्यवाणी करें'}
              </Button>
              <Button onClick={handleReset} variant="secondary">
                <RefreshCw className="w-4 h-4 mr-2" />
                {tCommon('reset')}
              </Button>
            </div>
          </div>
        </SectionCard>

        {!result && (
          <EducationalSection
            title={educational.title}
            content={educational.content}
          />
        )}

        {/* Results Section */}
        {result && (
          <div className="animate-fade-in-up space-y-6">
            {/* Summary Card */}
            <HeroResultCard
              title={locale === 'en' ? 'Career Prediction Summary' : 'करियर भविष्यवाणी सारांश'}
              subtitle={locale === 'en' ? 'Based on your birth chart' : 'आपकी जन्म कुंडली के आधार पर'}
              icon={<Briefcase className="w-6 h-6 text-white" />}
              colorScheme="teal"
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 mb-4">
                <p className="text-white/90 text-center">
                  {locale === 'hi' ? result.summary.hi : result.summary.en}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3 mb-4">
                <HeroStatCard
                  label={locale === 'en' ? 'Career Type' : 'करियर प्रकार'}
                  value={result.careerType.type === 'job'
                    ? (locale === 'en' ? 'Job' : 'नौकरी')
                    : result.careerType.type === 'business'
                      ? (locale === 'en' ? 'Business' : 'व्यापार')
                      : (locale === 'en' ? 'Both' : 'दोनों')}
                  colorScheme="teal"
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Govt. Job Score' : 'सरकारी नौकरी स्कोर'}
                  value={`${result.governmentJobPotential.score}%`}
                  colorScheme="teal"
                />
              </div>

              <div className="flex justify-center">
                <ShareResult
                  title={locale === 'en' ? 'My Career Prediction' : 'मेरी करियर भविष्यवाणी'}
                  text={`${locale === 'en' ? `Career type: ${result.careerType.type}` : `करियर प्रकार: ${result.careerType.type}`}`}
                  url={`https://tools.vastucart.in/${locale}/tools/career-predictor`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </div>
            </HeroResultCard>

            {/* 10th House Analysis */}
            <SectionCard
              title={locale === 'en' ? '10th House Analysis (Career House)' : '10वें भाव का विश्लेषण (करियर भाव)'}
              accentBorder="teal"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-teal-50 rounded-lg text-center border border-teal-100">
                  <p className="text-sm text-teal-600 mb-1">{locale === 'en' ? '10th House Sign' : '10वें भाव की राशि'}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {result.tenthHouse.sign.symbol} {locale === 'hi' ? result.tenthHouse.sign.name.hi : result.tenthHouse.sign.name.en}
                  </p>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg text-center border border-teal-100">
                  <p className="text-sm text-teal-600 mb-1">{locale === 'en' ? '10th Lord' : '10वें भाव का स्वामी'}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {result.tenthHouse.lord.charAt(0).toUpperCase() + result.tenthHouse.lord.slice(1)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {locale === 'en' ? `in House ${result.tenthHouse.lordPosition.house}` : `${result.tenthHouse.lordPosition.house}वें भाव में`}
                  </p>
                </div>
                <div className="p-4 bg-teal-50 rounded-lg text-center border border-teal-100">
                  <p className="text-sm text-teal-600 mb-1">{locale === 'en' ? 'Planets in 10th' : '10वें भाव में ग्रह'}</p>
                  <p className="text-lg font-bold text-gray-900">
                    {result.tenthHouse.planetsIn10th.length > 0
                      ? result.tenthHouse.planetsIn10th.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(', ')
                      : (locale === 'en' ? 'None' : 'कोई नहीं')}
                  </p>
                </div>
              </div>
            </SectionCard>

            {/* Job vs Business */}
            <SectionCard
              title={locale === 'en' ? 'Job vs Business Analysis' : 'नौकरी vs व्यापार विश्लेषण'}
              icon={<Building className="w-5 h-5 text-teal-600" />}
              accentBorder="gradient"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <ScoreMeter
                    value={result.careerType.jobScore}
                    max={100}
                    size="lg"
                    color="teal"
                    label={locale === 'en' ? 'Job' : 'नौकरी'}
                    showValue
                  />
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <Building className="w-5 h-5 text-gray-500" />
                    <span className="font-medium">{locale === 'en' ? 'Job/Service' : 'नौकरी/सेवा'}</span>
                  </div>
                </div>
                <div className="text-center">
                  <ScoreMeter
                    value={result.careerType.businessScore}
                    max={100}
                    size="lg"
                    color="saffron"
                    label={locale === 'en' ? 'Business' : 'व्यापार'}
                    showValue
                  />
                  <div className="mt-2 flex items-center justify-center gap-2">
                    <Building2 className="w-5 h-5 text-gray-500" />
                    <span className="font-medium">{locale === 'en' ? 'Business/Self' : 'व्यापार/स्वरोजगार'}</span>
                  </div>
                </div>
              </div>

              <div className={`p-4 rounded-lg ${
                result.careerType.type === 'job' ? 'bg-teal-50 border border-teal-200' :
                result.careerType.type === 'business' ? 'bg-saffron-50 border border-saffron-200' :
                'bg-amber-50 border border-amber-200'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    result.careerType.type === 'job' ? 'bg-teal-500 text-white' :
                    result.careerType.type === 'business' ? 'bg-saffron-500 text-white' :
                    'bg-amber-500 text-white'
                  }`}>
                    {result.careerType.type === 'job' ? (locale === 'en' ? 'Job Oriented' : 'नौकरी उन्मुख') :
                     result.careerType.type === 'business' ? (locale === 'en' ? 'Business Oriented' : 'व्यापार उन्मुख') :
                     (locale === 'en' ? 'Both Suitable' : 'दोनों उपयुक्त')}
                  </span>
                </div>
                <p className="text-gray-700">
                  {locale === 'hi' ? result.careerType.reason.hi : result.careerType.reason.en}
                </p>
              </div>
            </SectionCard>

            {/* Government Job Potential */}
            <SectionCard
              title={locale === 'en' ? 'Government Job Potential' : 'सरकारी नौकरी की संभावना'}
              icon={<Building className="w-5 h-5 text-teal-600" />}
              accentBorder={result.governmentJobPotential.favorable ? 'saffron' : 'teal'}
            >
              <div className="mb-4">
                <CompatibilityBar
                  score={result.governmentJobPotential.score}
                  maxScore={100}
                  label={locale === 'en' ? 'Government Job Score' : 'सरकारी नौकरी स्कोर'}
                  size="lg"
                  showPercentage
                />
              </div>

              <div className={`p-4 rounded-lg ${result.governmentJobPotential.favorable ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-200'}`}>
                <p className={`font-medium mb-2 ${result.governmentJobPotential.favorable ? 'text-green-800' : 'text-gray-700'}`}>
                  {result.governmentJobPotential.favorable
                    ? (locale === 'en' ? 'Good potential for government sector!' : 'सरकारी क्षेत्र के लिए अच्छी संभावना!')
                    : (locale === 'en' ? 'Private sector may be more suitable' : 'निजी क्षेत्र अधिक उपयुक्त हो सकता है')}
                </p>
                {result.governmentJobPotential.indicators.length > 0 && (
                  <ul className="space-y-1">
                    {result.governmentJobPotential.indicators.map((indicator, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                        {locale === 'hi' ? indicator.hi : indicator.en}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </SectionCard>

            {/* Suitable Career Fields */}
            <SectionCard
              title={locale === 'en' ? 'Suitable Career Fields' : 'उपयुक्त करियर क्षेत्र'}
              icon={<Star className="w-5 h-5 text-saffron-500" />}
              accentBorder="saffron"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {result.suitableFields.map((field, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border ${getSuitabilityColor(field.suitability)}`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-semibold text-gray-900">
                        {locale === 'hi' ? field.field.hi : field.field.en}
                      </span>
                      <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                        field.suitability === 'highly-suitable' ? 'bg-green-200 text-green-800' :
                        field.suitability === 'suitable' ? 'bg-teal-200 text-teal-800' : 'bg-gray-200 text-gray-800'
                      }`}>
                        {field.suitability === 'highly-suitable'
                          ? (locale === 'en' ? 'Highly Suitable' : 'अत्यधिक उपयुक्त')
                          : field.suitability === 'suitable'
                            ? (locale === 'en' ? 'Suitable' : 'उपयुक्त')
                            : (locale === 'en' ? 'Moderate' : 'मध्यम')}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">
                      {locale === 'hi' ? field.reason.hi : field.reason.en}
                    </p>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* Raj Yogas */}
            <SectionCard
              title={locale === 'en' ? 'Raj Yogas (Success Combinations)' : 'राज योग (सफलता संयोग)'}
              icon={<Star className="w-5 h-5 text-saffron-500" />}
              accentBorder={result.rajYogas.some(y => y.present) ? 'saffron' : 'teal'}
            >
              <div className="space-y-3">
                {result.rajYogas.map((yoga, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border ${
                      yoga.present ? 'bg-saffron-50 border-saffron-200' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {yoga.present ? (
                        <Star className="w-5 h-5 text-saffron-500 fill-saffron-500" />
                      ) : (
                        <Star className="w-5 h-5 text-gray-400" />
                      )}
                      <span className="font-semibold text-gray-900">
                        {locale === 'hi' ? yoga.name.hi : yoga.name.en}
                      </span>
                      {yoga.present && (
                        <span className="px-2 py-0.5 bg-saffron-200 text-saffron-800 rounded text-xs font-medium">
                          {locale === 'en' ? 'Present' : 'मौजूद'}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">
                      {locale === 'hi' ? yoga.description.hi : yoga.description.en}
                    </p>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* Career Peaks */}
            <SectionCard
              title={locale === 'en' ? 'Favorable Career Periods' : 'अनुकूल करियर अवधि'}
              icon={<TrendingUp className="w-5 h-5 text-green-600" />}
              accentBorder="saffron"
            >
              <div className="space-y-3">
                {result.careerPeaks.map((peak, idx) => (
                  <div key={idx} className="p-4 bg-green-50 rounded-lg border border-green-200">
                    <p className="font-semibold text-green-800">{peak.period}</p>
                    <p className="text-sm text-green-700">
                      {locale === 'hi' ? peak.description.hi : peak.description.en}
                    </p>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* Strengths & Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Strengths */}
              <SectionCard
                title={locale === 'en' ? 'Career Strengths' : 'करियर की ताकत'}
                icon={<Check className="w-5 h-5 text-green-600" />}
                accentBorder="saffron"
                className="bg-green-50/50"
              >
                <ul className="space-y-2">
                  {result.strengths.map((strength, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-green-700">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{locale === 'hi' ? strength.hi : strength.en}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>

              {/* Challenges */}
              <SectionCard
                title={locale === 'en' ? 'Areas to Work On' : 'सुधार के क्षेत्र'}
                icon={<AlertCircle className="w-5 h-5 text-amber-600" />}
                accentBorder="teal"
                className="bg-amber-50/50"
              >
                <ul className="space-y-2">
                  {result.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-amber-700">
                      <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{locale === 'hi' ? challenge.hi : challenge.en}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
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
