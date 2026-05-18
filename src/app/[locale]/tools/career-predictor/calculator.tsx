'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, Briefcase, Building, Building2, Star, TrendingUp, AlertCircle, Check } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { BirthDatePicker } from '@/components/ui/birth-date-picker';
import { TimePicker } from '@/components/ui/time-picker';
import { PlacePicker } from '@/components/ui/place-picker';
import { CompatibilityBar, ScoreMeter } from '@/components/tools/progress-display';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard } from '@/components/ui/section-card';

import { type Place } from '@/lib/astrology';
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
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // Result state
  const [result, setResult] = useState<CareerResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

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
        const careerResult = calculateCareerPrediction({
          year: birthDate.getFullYear(),
          month: birthDate.getMonth() + 1,
          day: birthDate.getDate(),
          hour: parseInt(birthHour),
          minute: parseInt(birthMinute),
          latitude: selectedPlace.lat,
          longitude: selectedPlace.lng,
          timezone: selectedPlace.tz,
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
    setSelectedPlace(null);
    setResult(null);
    setError(null);
  };

  // Get FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as {
    title: string;
    content: string[];
    sections?: Array<{ heading: string; paragraphs: string[] }>;
  };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  // Suitability badge color
  const getSuitabilityColor = (suitability: 'highly-suitable' | 'suitable' | 'moderate') => {
    if (suitability === 'highly-suitable') return 'bg-green-100 text-green-800 border-green-200';
    if (suitability === 'suitable') return 'bg-deepteal-100 text-deepteal-800 border-deepteal-200';
    return 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="" iconName="Target"
      category="astrology"
      categoryLabel={locale === 'en' ? 'Astrology' : 'ज्योतिष'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <SectionCard
          title={locale === 'en' ? 'Enter Birth Details' : 'जन्म विवरण दर्ज करें'}
          icon={<Calculator className="w-5 h-5 text-deepteal-600" />}
          accentBorder="gradient"
        >

          <div className="space-y-6">
            {/* Birth Date */}
            <div>
              <BirthDatePicker
                label={locale === 'en' ? 'Birth Date' : 'जन्म तिथि'}
                value={birthDate}
                onChange={setBirthDate}
                locale={locale}
              />
            </div>

            {/* Birth Time */}
            <TimePicker
              label={locale === 'en' ? 'Birth Time' : 'जन्म समय'}
              hour={birthHour}
              minute={birthMinute}
              onHourChange={setBirthHour}
              onMinuteChange={setBirthMinute}
              locale={locale}
              required
            />

            {/* Birth Place */}
            <PlacePicker
              label={locale === 'en' ? 'Birth Place' : 'जन्म स्थान'}
              value={selectedPlace}
              onChange={setSelectedPlace}
              locale={locale}
              required
              showManualInput
            />

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
            sections={educational.sections}
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
              colorScheme="deepteal"
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
                  colorScheme="deepteal"
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Govt. Job Score' : 'सरकारी नौकरी स्कोर'}
                  value={`${result.governmentJobPotential.score}%`}
                  colorScheme="deepteal"
                />
              </div>

              <div className="flex justify-center">
                <ShareResult
                  title={locale === 'en' ? 'My Career Prediction' : 'मेरी करियर भविष्यवाणी'}
                  text={`${locale === 'en' ? `Career type: ${result.careerType.type}` : `करियर प्रकार: ${result.careerType.type}`}`}
                  url={locale === 'en' ? `https://www.vastucart.in/tools/career-predictor` : `https://www.vastucart.in/${locale}/tools/career-predictor`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </div>
            </HeroResultCard>

            {/* 10th House Analysis */}
            <SectionCard
              title={locale === 'en' ? '10th House Analysis (Career House)' : '10वें भाव का विश्लेषण (करियर भाव)'}
              accentBorder="deepteal"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-deepteal-50 rounded-lg text-center border border-deepteal-100">
                  <p className="text-sm text-deepteal-600 mb-1">{locale === 'en' ? '10th House Sign' : '10वें भाव की राशि'}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {result.tenthHouse.sign.symbol} {locale === 'hi' ? result.tenthHouse.sign.name.hi : result.tenthHouse.sign.name.en}
                  </p>
                </div>
                <div className="p-4 bg-deepteal-50 rounded-lg text-center border border-deepteal-100">
                  <p className="text-sm text-deepteal-600 mb-1">{locale === 'en' ? '10th Lord' : '10वें भाव का स्वामी'}</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {result.tenthHouse.lord.charAt(0).toUpperCase() + result.tenthHouse.lord.slice(1)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {locale === 'en' ? `in House ${result.tenthHouse.lordPosition.house}` : `${result.tenthHouse.lordPosition.house}वें भाव में`}
                  </p>
                </div>
                <div className="p-4 bg-deepteal-50 rounded-lg text-center border border-deepteal-100">
                  <p className="text-sm text-deepteal-600 mb-1">{locale === 'en' ? 'Planets in 10th' : '10वें भाव में ग्रह'}</p>
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
              icon={<Building className="w-5 h-5 text-deepteal-600" />}
              accentBorder="gradient"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <ScoreMeter
                    value={result.careerType.jobScore}
                    max={100}
                    size="lg"
                    color="deepteal"
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
                    color="warmaccent"
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
                result.careerType.type === 'job' ? 'bg-deepteal-50 border border-deepteal-200' :
                result.careerType.type === 'business' ? 'bg-warmaccent-50 border border-warmaccent-200' :
                'bg-amber-50 border border-amber-200'
              }`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    result.careerType.type === 'job' ? 'bg-deepteal-500 text-white' :
                    result.careerType.type === 'business' ? 'bg-warmaccent-500 text-white' :
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
              icon={<Building className="w-5 h-5 text-deepteal-600" />}
              accentBorder={result.governmentJobPotential.favorable ? 'warmaccent' : 'deepteal'}
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
              icon={<Star className="w-5 h-5 text-warmaccent-500" />}
              accentBorder="warmaccent"
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
                        field.suitability === 'suitable' ? 'bg-deepteal-200 text-deepteal-800' : 'bg-gray-200 text-gray-800'
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
              icon={<Star className="w-5 h-5 text-warmaccent-500" />}
              accentBorder={result.rajYogas.some(y => y.present) ? 'warmaccent' : 'deepteal'}
            >
              <div className="space-y-3">
                {result.rajYogas.map((yoga, idx) => (
                  <div
                    key={idx}
                    className={`p-4 rounded-lg border ${
                      yoga.present ? 'bg-warmaccent-50 border-warmaccent-200' : 'bg-gray-50 border-gray-200'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {yoga.present ? (
                        <Star className="w-5 h-5 text-warmaccent-500 fill-warmaccent-500" />
                      ) : (
                        <Star className="w-5 h-5 text-gray-500" />
                      )}
                      <span className="font-semibold text-gray-900">
                        {locale === 'hi' ? yoga.name.hi : yoga.name.en}
                      </span>
                      {yoga.present && (
                        <span className="px-2 py-0.5 bg-warmaccent-200 text-warmaccent-800 rounded text-xs font-medium">
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
              accentBorder="warmaccent"
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
                accentBorder="warmaccent"
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
                accentBorder="deepteal"
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
