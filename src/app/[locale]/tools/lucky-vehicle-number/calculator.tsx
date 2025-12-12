'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, Car, Check, AlertTriangle, Star, Sparkles, Shield } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { ScoreMeter } from '@/components/tools/progress-display';
import { NumberDisplay } from '@/components/tools/result-display';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

import { analyzeVehicleNumber, type VehicleNumberResult } from '@/lib/numerology/lucky-vehicle';

interface LuckyVehicleNumberCalculatorProps {
  locale: 'en' | 'hi';
}

export default function LuckyVehicleNumberCalculator({ locale }: LuckyVehicleNumberCalculatorProps) {
  const t = useTranslations('tools.numerology.luckyVehicleNumber');
  const tCommon = useTranslations('common');

  // Form state
  const [vehicleNumber, setVehicleNumber] = useState('');
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [includeBirthDate, setIncludeBirthDate] = useState(false);

  // Result state
  const [result, setResult] = useState<VehicleNumberResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    // Validate vehicle number
    const cleanNumber = vehicleNumber.replace(/[\s\-]/g, '');
    if (cleanNumber.length < 4) {
      setError(locale === 'en' ? 'Please enter a valid vehicle number (e.g., MH12AB1234)' : 'कृपया एक वैध वाहन नंबर दर्ज करें (जैसे MH12AB1234)');
      return;
    }

    if (includeBirthDate && !birthDate) {
      setError(locale === 'en' ? 'Please select your birth date for compatibility check' : 'संगतता जांच के लिए कृपया अपनी जन्म तिथि चुनें');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      try {
        const analysisResult = analyzeVehicleNumber(
          vehicleNumber,
          includeBirthDate ? birthDate || undefined : undefined
        );
        setResult(analysisResult);
      } catch (err) {
        setError(locale === 'en' ? 'Calculation error. Please check inputs.' : 'गणना त्रुटि। कृपया इनपुट जांचें।');
      } finally {
        setIsCalculating(false);
      }
    }, 300);
  };

  const handleReset = () => {
    setVehicleNumber('');
    setBirthDate(null);
    setIncludeBirthDate(false);
    setResult(null);
    setError(null);
  };

  // Get FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  // Luck category color
  const getLuckCategoryColor = (category: VehicleNumberResult['luckCategory']) => {
    switch (category) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'average': return 'text-yellow-600 bg-yellow-100';
      case 'caution': return 'text-red-600 bg-red-100';
    }
  };

  const getLuckCategoryLabel = (category: VehicleNumberResult['luckCategory']) => {
    const labels = {
      excellent: { en: 'Excellent Safety', hi: 'उत्कृष्ट सुरक्षा' },
      good: { en: 'Good Safety', hi: 'अच्छी सुरक्षा' },
      average: { en: 'Average', hi: 'औसत' },
      caution: { en: 'Extra Caution Needed', hi: 'अतिरिक्त सावधानी आवश्यक' },
    };
    return labels[category][locale];
  };

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="🚗"
      category="numerology"
      categoryLabel={locale === 'en' ? 'Numerology' : 'अंकशास्त्र'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {locale === 'en' ? 'Enter Your Vehicle Number' : 'अपना वाहन नंबर दर्ज करें'}
          </h2>

          <div className="space-y-6">
            {/* Vehicle Number Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === 'en' ? 'Vehicle Number' : 'वाहन नंबर'} *
              </label>
              <div className="relative">
                <Car className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={vehicleNumber}
                  onChange={(e) => setVehicleNumber(e.target.value.toUpperCase())}
                  placeholder={locale === 'en' ? 'e.g., MH12AB1234' : 'जैसे MH12AB1234'}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 uppercase"
                  maxLength={15}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {locale === 'en' ? 'Enter your car, bike, or vehicle number plate' : 'अपनी कार, बाइक या वाहन नंबर प्लेट दर्ज करें'}
              </p>
            </div>

            {/* Optional Birth Date */}
            <div>
              <label className="flex items-center gap-2 mb-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={includeBirthDate}
                  onChange={(e) => setIncludeBirthDate(e.target.checked)}
                  className="w-4 h-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  {locale === 'en' ? 'Check compatibility with birth date' : 'जन्म तिथि के साथ संगतता जांचें'}
                </span>
              </label>

              {includeBirthDate && (
                <DatePicker
                  label={locale === 'en' ? 'Birth Date' : 'जन्म तिथि'}
                  value={birthDate}
                  onChange={setBirthDate}
                  placeholder={locale === 'en' ? 'Select birth date' : 'जन्म तिथि चुनें'}
                  locale={locale}
                />
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
                {locale === 'en' ? 'Check Safety Score' : 'सुरक्षा स्कोर जांचें'}
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
            {/* Main Result Card */}
            <Card className={`p-6 ${
              result.luckCategory === 'excellent' ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' :
              result.luckCategory === 'good' ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200' :
              result.luckCategory === 'average' ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200' :
              'bg-gradient-to-r from-red-50 to-orange-50 border-red-200'
            }`}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Number Display */}
                <div className="text-center">
                  <NumberDisplay
                    number={result.totalNumber}
                    label={locale === 'en' ? 'Vehicle Number' : 'वाहन अंक'}
                    isMasterNumber={result.isMasterNumber}
                  />
                  {result.isMasterNumber && (
                    <div className="mt-2 flex items-center justify-center gap-1 text-purple-600">
                      <Sparkles className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {locale === 'en' ? 'Master Number' : 'मास्टर नंबर'}
                      </span>
                    </div>
                  )}
                </div>

                {/* Score and Category */}
                <div className="flex-1 text-center md:text-left">
                  <div className="mb-4">
                    <ScoreMeter
                      value={result.safetyScore}
                      max={100}
                      size="lg"
                      color="auto"
                      label={locale === 'en' ? 'Safety Score' : 'सुरक्षा स्कोर'}
                      showValue
                    />
                  </div>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getLuckCategoryColor(result.luckCategory)}`}>
                    {getLuckCategoryLabel(result.luckCategory)}
                  </span>
                </div>
              </div>

              {/* Calculation Steps */}
              <div className="mt-6 p-4 bg-white/60 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  {locale === 'en' ? 'Vehicle Number:' : 'वाहन नंबर:'}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-gray-800">
                  <span className="font-mono font-bold text-lg">{result.vehicleNumber}</span>
                  <span>→</span>
                  {result.reductionSteps.map((step, idx) => (
                    <span key={idx} className="flex items-center gap-2">
                      <span className="font-mono font-bold">{step}</span>
                      {idx < result.reductionSteps.length - 1 && <span>→</span>}
                    </span>
                  ))}
                </div>
              </div>

              {/* Ruling Planet */}
              <div className="mt-4 p-3 bg-purple-100 rounded-lg">
                <p className="text-sm text-purple-800">
                  <span className="font-semibold">{locale === 'en' ? 'Ruling Planet: ' : 'स्वामी ग्रह: '}</span>
                  {locale === 'hi' ? result.rulingPlanet.hi : result.rulingPlanet.en}
                </p>
              </div>

              <ShareResult
                title={locale === 'en' ? 'My Vehicle Safety Score' : 'मेरा वाहन सुरक्षा स्कोर'}
                text={`${locale === 'en' ? `My vehicle ${result.vehicleNumber} safety score: ${result.safetyScore}%` : `मेरे वाहन ${result.vehicleNumber} का सुरक्षा स्कोर: ${result.safetyScore}%`}`}
                url={`https://tools.vastucart.in/${locale}/tools/lucky-vehicle-number`}
                shareLabel={tCommon('share')}
                copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
              />
            </Card>

            {/* Number Meaning */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                {locale === 'en' ? `Number ${result.totalNumber} Meaning` : `अंक ${result.totalNumber} का अर्थ`}
              </h3>
              <p className="text-gray-700">
                {locale === 'hi' ? result.numberMeaning.hi : result.numberMeaning.en}
              </p>
            </Card>

            {/* Positive Attributes */}
            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5" />
                {locale === 'en' ? 'Positive Attributes' : 'सकारात्मक गुण'}
              </h3>
              <ul className="space-y-2">
                {result.positiveAttributes.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-green-700">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{locale === 'hi' ? item.hi : item.en}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Cautions */}
            {result.cautions.length > 0 && (
              <Card className="p-6 bg-amber-50 border-amber-200">
                <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {locale === 'en' ? 'Cautions' : 'सावधानियां'}
                </h3>
                <ul className="space-y-2">
                  {result.cautions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-amber-700">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{locale === 'hi' ? item.hi : item.en}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Birth Date Compatibility */}
            {result.birthDateCompatibility && (
              <Card className={`p-6 ${result.birthDateCompatibility.compatible ? 'bg-green-50 border-green-200' : 'bg-amber-50 border-amber-200'}`}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  {result.birthDateCompatibility.compatible ? (
                    <Check className="w-5 h-5 text-green-600" />
                  ) : (
                    <AlertTriangle className="w-5 h-5 text-amber-600" />
                  )}
                  {locale === 'en' ? 'Birth Date Compatibility' : 'जन्म तिथि संगतता'}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-500">{locale === 'en' ? 'Your Life Path' : 'आपका मूलांक'}</p>
                    <p className="text-3xl font-bold text-gray-900">{result.birthDateCompatibility.lifePathNumber}</p>
                  </div>
                  <div className="text-2xl">{result.birthDateCompatibility.compatible ? '✓' : '⚠️'}</div>
                  <div className="text-center">
                    <p className="text-sm text-gray-500">{locale === 'en' ? 'Vehicle Number' : 'वाहन अंक'}</p>
                    <p className="text-3xl font-bold text-gray-900">{result.totalNumber}</p>
                  </div>
                </div>
                <p className={`${result.birthDateCompatibility.compatible ? 'text-green-700' : 'text-amber-700'}`}>
                  {locale === 'hi' ? result.birthDateCompatibility.reason.hi : result.birthDateCompatibility.reason.en}
                </p>
              </Card>
            )}

            {/* Best Vehicle Types */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'en' ? 'Best Vehicle Types for This Number' : 'इस अंक के लिए सर्वोत्तम वाहन प्रकार'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {result.bestVehicleTypes.map((item, idx) => (
                  <div key={idx} className="p-3 bg-teal-50 rounded-lg border border-teal-200 text-center">
                    <span className="text-teal-800 font-medium">
                      {locale === 'hi' ? item.hi : item.en}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Safety Tips */}
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                {locale === 'en' ? 'Safety Tips & Remedies' : 'सुरक्षा टिप्स और उपाय'}
              </h3>
              <ul className="space-y-2">
                {result.safetyTips.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-blue-700">
                    <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{locale === 'hi' ? item.hi : item.en}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Verdict */}
            <Card className="p-6 bg-gradient-to-r from-purple-50 to-indigo-50 border-purple-200">
              <h3 className="text-lg font-semibold text-purple-900 mb-4">
                {locale === 'en' ? 'Final Verdict' : 'अंतिम निर्णय'}
              </h3>
              <p className="text-purple-800">
                {locale === 'hi' ? result.verdict.hi : result.verdict.en}
              </p>
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
