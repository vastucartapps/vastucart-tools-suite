'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, Heart, AlertTriangle, User, Sparkles } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BirthDatePicker } from '@/components/ui/birth-date-picker';
import { TimePicker } from '@/components/ui/time-picker';
import { PlacePicker } from '@/components/ui/place-picker';
import { CompatibilityBar } from '@/components/tools/progress-display';
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard } from '@/components/ui/section-card';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

import {
  type Place,
} from '@/lib/astrology';
import { calculateMarriageTiming, type MarriageTimingResult } from '@/lib/astrology/marriage-timing';

interface MarriageTimingCalculatorProps {
  locale: 'en' | 'hi';
}

export default function MarriageTimingCalculator({ locale }: MarriageTimingCalculatorProps) {
  const t = useTranslations('tools.astrology.marriageTimingPredictor');
  const tCommon = useTranslations('common');

  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // Result state
  const [result, setResult] = useState<MarriageTimingResult | null>(null);
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
        const marriageResult = calculateMarriageTiming({
          year: birthDate.getFullYear(),
          month: birthDate.getMonth() + 1,
          day: birthDate.getDate(),
          hour: parseInt(birthHour),
          minute: parseInt(birthMinute),
          latitude: selectedPlace.lat,
          longitude: selectedPlace.lng,
          timezone: selectedPlace.tz,
        });

        setResult(marriageResult);
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
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  // Helper for probability color
  const getProbabilityColor = (prob: 'high' | 'medium' | 'low') => {
    if (prob === 'high') return 'bg-green-100 text-green-800 border-green-200';
    if (prob === 'medium') return 'bg-yellow-100 text-yellow-800 border-yellow-200';
    return 'bg-red-100 text-red-800 border-red-200';
  };

  // Severity color
  const getSeverityColor = (severity: 'mild' | 'moderate' | 'severe') => {
    if (severity === 'mild') return 'bg-yellow-50 border-yellow-200';
    if (severity === 'moderate') return 'bg-orange-50 border-orange-200';
    return 'bg-red-50 border-red-200';
  };

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="💒"
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
            <BirthDatePicker
              label={locale === 'en' ? 'Birth Date' : 'जन्म तिथि'}
              value={birthDate}
              onChange={setBirthDate}
              locale={locale}
              required
            />

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
                  <Calculator className="w-4 h-4 mr-2" />
                )}
                {locale === 'en' ? 'Predict Marriage Timing' : 'विवाह समय की भविष्यवाणी करें'}
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
          <div className="animate-fade-in-up space-y-6">
            {/* Summary Card */}
            <HeroResultCard
              title={locale === 'en' ? 'Marriage Timing Prediction' : 'विवाह समय की भविष्यवाणी'}
              subtitle={locale === 'en' ? '7th House & Venus Analysis' : '7वां भाव एवं शुक्र विश्लेषण'}
              icon={<Heart className="w-6 h-6 text-white" />}
              colorScheme="warmaccent"
            >
              <div className="text-center py-4">
                <p className="text-warmaccent-100">
                  {locale === 'hi' ? result.summary.hi : result.summary.en}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 mt-4">
                <HeroStatCard
                  label={locale === 'en' ? 'Earliest' : 'सबसे पहले'}
                  value={`${result.predictedAgeRange.early}`}
                  subValue={locale === 'en' ? 'years' : 'वर्ष'}
                  colorScheme="warmaccent"
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Most Likely' : 'सबसे संभावित'}
                  value={`${result.predictedAgeRange.mostLikely}`}
                  subValue={locale === 'en' ? 'years' : 'वर्ष'}
                  colorScheme="warmaccent"
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Latest' : 'सबसे देर'}
                  value={`${result.predictedAgeRange.late}`}
                  subValue={locale === 'en' ? 'years' : 'वर्ष'}
                  colorScheme="warmaccent"
                />
              </div>

              <div className="mt-6">
                <ShareResult
                  title={locale === 'en' ? 'My Marriage Timing Prediction' : 'मेरी विवाह समय की भविष्यवाणी'}
                  text={`${locale === 'en' ? `Predicted marriage age: ${result.predictedAgeRange.mostLikely} years` : `अनुमानित विवाह आयु: ${result.predictedAgeRange.mostLikely} वर्ष`}`}
                  url={`https://vastucart.in/${locale}/tools/marriage-timing-predictor`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </div>
            </HeroResultCard>

            {/* 7th House Analysis */}
            <SectionCard title={locale === 'en' ? '7th House Analysis (Marriage House)' : '7वें भाव का विश्लेषण (विवाह भाव)'}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-deepteal-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">
                    {locale === 'en' ? '7th House Sign' : '7वें भाव की राशि'}
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    {result.seventhHouse.sign.symbol} {locale === 'hi' ? result.seventhHouse.sign.name.hi : result.seventhHouse.sign.name.en}
                  </p>
                </div>
                <div className="p-4 bg-deepteal-50 rounded-lg">
                  <p className="text-sm text-gray-500 mb-1">
                    {locale === 'en' ? '7th Lord Position' : '7वें भाव के स्वामी की स्थिति'}
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    {result.seventhHouse.lord.charAt(0).toUpperCase() + result.seventhHouse.lord.slice(1)} {locale === 'en' ? 'in' : 'में'} {locale === 'hi' ? result.seventhHouse.lordPosition.sign.name.hi : result.seventhHouse.lordPosition.sign.name.en}
                  </p>
                  <p className="text-sm text-gray-500">
                    {locale === 'en' ? `House ${result.seventhHouse.lordPosition.house}` : `${result.seventhHouse.lordPosition.house}वें भाव में`}
                  </p>
                </div>
              </div>

              {result.seventhHouse.planetsIn7th.length > 0 && (
                <div className="mt-4 p-4 bg-warmaccent-50 rounded-lg">
                  <p className="text-sm text-warmaccent-700 font-medium mb-2">
                    {locale === 'en' ? 'Planets in 7th House:' : '7वें भाव में ग्रह:'}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {result.seventhHouse.planetsIn7th.map((planet) => (
                      <span
                        key={planet}
                        className="px-3 py-1 bg-warmaccent-100 text-warmaccent-800 rounded-full text-sm font-medium"
                      >
                        {planet.charAt(0).toUpperCase() + planet.slice(1)}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </SectionCard>

            {/* Venus Analysis */}
            <SectionCard title={locale === 'en' ? 'Venus Analysis (Marriage Karaka)' : 'शुक्र विश्लेषण (विवाह कारक)'} icon={<Sparkles className="w-5 h-5 text-warmaccent-500" />} accentBorder="warmaccent">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="p-4 bg-warmaccent-50 rounded-lg text-center">
                  <p className="text-2xl mb-1">{result.venusAnalysis.sign.symbol}</p>
                  <p className="text-sm text-gray-500">{locale === 'en' ? 'Venus Sign' : 'शुक्र राशि'}</p>
                  <p className="font-medium">
                    {locale === 'hi' ? result.venusAnalysis.sign.name.hi : result.venusAnalysis.sign.name.en}
                  </p>
                </div>
                <div className="p-4 bg-warmaccent-50 rounded-lg text-center">
                  <p className="text-2xl font-bold text-warmaccent-600 mb-1">{result.venusAnalysis.house}</p>
                  <p className="text-sm text-gray-500">{locale === 'en' ? 'House Position' : 'भाव स्थिति'}</p>
                </div>
                <div className="p-4 bg-warmaccent-50 rounded-lg text-center">
                  <p className={`text-2xl mb-1 ${result.venusAnalysis.isStrong ? 'text-green-600' : 'text-orange-600'}`}>
                    {result.venusAnalysis.isStrong ? '✓' : '⚠'}
                  </p>
                  <p className="text-sm text-gray-500">{locale === 'en' ? 'Strength' : 'शक्ति'}</p>
                  <p className="font-medium">
                    {result.venusAnalysis.isStrong
                      ? (locale === 'en' ? 'Strong' : 'मजबूत')
                      : (locale === 'en' ? 'Needs Strengthening' : 'मजबूत करने की जरूरत')}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 p-3 bg-gray-50 rounded-lg">
                {locale === 'hi' ? result.venusAnalysis.condition.hi : result.venusAnalysis.condition.en}
              </p>
            </SectionCard>

            {/* Marriage Windows */}
            {result.marriageWindows.length > 0 && (
              <SectionCard title={locale === 'en' ? 'Favorable Marriage Periods' : 'अनुकूल विवाह अवधि'}>
                <div className="space-y-3">
                  {result.marriageWindows.map((window, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg border ${getProbabilityColor(window.probability)}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-semibold">{window.period}</p>
                          <p className="text-sm opacity-75">
                            {window.dasha} {locale === 'en' ? 'Mahadasha' : 'महादशा'} - {window.antardasha} {locale === 'en' ? 'Antardasha' : 'अंतर्दशा'}
                          </p>
                        </div>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          window.probability === 'high' ? 'bg-green-200' :
                          window.probability === 'medium' ? 'bg-yellow-200' : 'bg-red-200'
                        }`}>
                          {window.probability === 'high' ? (locale === 'en' ? 'High' : 'उच्च') :
                           window.probability === 'medium' ? (locale === 'en' ? 'Medium' : 'मध्यम') :
                           (locale === 'en' ? 'Low' : 'कम')}
                        </span>
                      </div>
                      <p className="text-sm">
                        {locale === 'hi' ? window.reason.hi : window.reason.en}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}

            {/* Marriage Type */}
            <SectionCard title={locale === 'en' ? 'Marriage Type Prediction' : 'विवाह प्रकार की भविष्यवाणी'} icon={<User className="w-5 h-5 text-warmaccent-500" />}>
              <div className="flex items-center gap-4 mb-4">
                <div className={`px-4 py-2 rounded-lg font-semibold ${
                  result.marriageType.type === 'love' ? 'bg-pink-100 text-pink-800' :
                  result.marriageType.type === 'arranged' ? 'bg-deepteal-100 text-deepteal-800' :
                  'bg-amber-100 text-amber-800'
                }`}>
                  {result.marriageType.type === 'love' ? (locale === 'en' ? 'Love Marriage' : 'प्रेम विवाह') :
                   result.marriageType.type === 'arranged' ? (locale === 'en' ? 'Arranged Marriage' : 'व्यवस्थित विवाह') :
                   (locale === 'en' ? 'Mixed (Love-Arranged)' : 'मिश्रित (प्रेम-व्यवस्थित)')}
                </div>
                <CompatibilityBar
                  score={result.marriageType.probability}
                  maxScore={100}
                  label={locale === 'en' ? 'Probability' : 'संभावना'}
                  size="md"
                  showPercentage
                />
              </div>
              <p className="text-gray-700">
                {locale === 'hi' ? result.marriageType.reason.hi : result.marriageType.reason.en}
              </p>
            </SectionCard>

            {/* Partner Indications */}
            {result.partnerIndications.length > 0 && (
              <SectionCard title={locale === 'en' ? 'Partner Characteristics' : 'जीवनसाथी की विशेषताएं'}>
                <ul className="space-y-2">
                  {result.partnerIndications.map((indication, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-deepteal-500 mt-1">•</span>
                      <span className="text-gray-700">
                        {locale === 'hi' ? indication.hi : indication.en}
                      </span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            )}

            {/* Delay Factors & Remedies */}
            {result.delayFactors.length > 0 && (
              <SectionCard title={locale === 'en' ? 'Delay Factors & Remedies' : 'देरी के कारक और उपाय'} icon={<AlertTriangle className="w-5 h-5 text-orange-500" />}>
                <div className="space-y-4">
                  {result.delayFactors.map((factor, idx) => (
                    <div
                      key={idx}
                      className={`p-4 rounded-lg border ${getSeverityColor(factor.severity)}`}
                    >
                      <div className="flex items-start gap-3">
                        <span className={`px-2 py-0.5 rounded text-xs font-medium ${
                          factor.severity === 'mild' ? 'bg-yellow-200 text-yellow-800' :
                          factor.severity === 'moderate' ? 'bg-orange-200 text-orange-800' :
                          'bg-red-200 text-red-800'
                        }`}>
                          {factor.severity === 'mild' ? (locale === 'en' ? 'Mild' : 'हल्का') :
                           factor.severity === 'moderate' ? (locale === 'en' ? 'Moderate' : 'मध्यम') :
                           (locale === 'en' ? 'Significant' : 'महत्वपूर्ण')}
                        </span>
                      </div>
                      <p className="mt-2 font-medium text-gray-900">
                        {locale === 'hi' ? factor.factor.hi : factor.factor.en}
                      </p>
                      <div className="mt-3 p-3 bg-white rounded border border-gray-200">
                        <p className="text-sm text-gray-500 mb-1">
                          {locale === 'en' ? 'Suggested Remedy:' : 'सुझाया गया उपाय:'}
                        </p>
                        <p className="text-sm text-deepteal-700">
                          {locale === 'hi' ? factor.remedy.hi : factor.remedy.en}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
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
        <FAQSection title={tCommon('faq')} faqs={faqs} />
      </div>
    </ToolLayout>
  );
}
