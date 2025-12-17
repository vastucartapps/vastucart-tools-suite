'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, Smartphone, Check, AlertTriangle, Star, Sparkles } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BirthDatePicker } from '@/components/ui/birth-date-picker';
import { CompatibilityBar, ScoreMeter } from '@/components/tools/progress-display';
import { NumberDisplay } from '@/components/tools/result-display';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard } from '@/components/ui/section-card';

import { analyzeMobileNumber, type MobileNumberResult } from '@/lib/numerology/lucky-mobile';

interface LuckyMobileNumberCalculatorProps {
  locale: 'en' | 'hi';
}

export default function LuckyMobileNumberCalculator({ locale }: LuckyMobileNumberCalculatorProps) {
  const t = useTranslations('tools.numerology.luckyMobileNumber');
  const tCommon = useTranslations('common');

  // Form state
  const [mobileNumber, setMobileNumber] = useState('');
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [includeBirthDate, setIncludeBirthDate] = useState(false);

  // Result state
  const [result, setResult] = useState<MobileNumberResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    // Validate mobile number
    const cleanNumber = mobileNumber.replace(/[\s\-\+]/g, '');
    if (cleanNumber.length < 10) {
      setError(locale === 'en' ? 'Please enter a valid mobile number (at least 10 digits)' : 'कृपया एक वैध मोबाइल नंबर दर्ज करें (कम से कम 10 अंक)');
      return;
    }

    if (includeBirthDate && !birthDate) {
      setError(locale === 'en' ? 'Please select your birth date for compatibility check' : 'संगतता जांच के लिए कृपया अपनी जन्म तिथि चुनें');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      try {
        const analysisResult = analyzeMobileNumber(
          mobileNumber,
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
    setMobileNumber('');
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
  const getLuckCategoryColor = (category: MobileNumberResult['luckCategory']) => {
    switch (category) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-teal-600 bg-teal-100';
      case 'average': return 'text-yellow-600 bg-yellow-100';
      case 'challenging': return 'text-red-600 bg-red-100';
    }
  };

  const getLuckCategoryLabel = (category: MobileNumberResult['luckCategory']) => {
    const labels = {
      excellent: { en: 'Excellent', hi: 'उत्कृष्ट' },
      good: { en: 'Good', hi: 'अच्छा' },
      average: { en: 'Average', hi: 'औसत' },
      challenging: { en: 'Challenging', hi: 'चुनौतीपूर्ण' },
    };
    return labels[category][locale];
  };

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="📱"
      category="numerology"
      categoryLabel={locale === 'en' ? 'Numerology' : 'अंकशास्त्र'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <SectionCard
          title={locale === 'en' ? 'Enter Your Mobile Number' : 'अपना मोबाइल नंबर दर्ज करें'}
          icon={<Smartphone className="w-5 h-5 text-teal-600" />}
          accentBorder="gradient"
        >

          <div className="space-y-6">
            {/* Mobile Number Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === 'en' ? 'Mobile Number' : 'मोबाइल नंबर'} *
              </label>
              <div className="relative">
                <Smartphone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  value={mobileNumber}
                  onChange={(e) => setMobileNumber(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  maxLength={15}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {locale === 'en' ? 'Enter with or without country code' : 'देश कोड के साथ या बिना दर्ज करें'}
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
                <BirthDatePicker
                  label={locale === 'en' ? 'Birth Date' : 'जन्म तिथि'}
                  value={birthDate}
                  onChange={setBirthDate}
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
                {locale === 'en' ? 'Check Luck Score' : 'भाग्य स्कोर जांचें'}
              </Button>
              <Button onClick={handleReset} variant="secondary">
                <RefreshCw className="w-4 h-4 mr-2" />
                {tCommon('reset')}
              </Button>
            </div>
          </div>
        </SectionCard>

        {/* Educational Section */}
        {!result && (
          <EducationalSection
            title={educational.title}
            content={educational.content}
            blogLink={`/${locale}/blog/lucky-mobile-number-calculator-phone`}
            blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
          />
        )}

        {/* Results Section */}
        {result && (
          <div className="animate-fade-in-up space-y-6">
            {/* Main Result Card */}
            <Card className={`p-6 ${
              result.luckCategory === 'excellent' ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' :
              result.luckCategory === 'good' ? 'bg-gradient-to-r from-teal-50 to-saffron-50 border-teal-200' :
              result.luckCategory === 'average' ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200' :
              'bg-gradient-to-r from-red-50 to-orange-50 border-red-200'
            }`}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Number Display */}
                <div className="text-center">
                  <NumberDisplay
                    number={result.totalNumber}
                    label={locale === 'en' ? 'Your Number' : 'आपका अंक'}
                    isMasterNumber={result.isMasterNumber}
                  />
                  {result.isMasterNumber && (
                    <div className="mt-2 flex items-center justify-center gap-1 text-amber-600">
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
                      value={result.luckScore}
                      max={100}
                      size="lg"
                      color="auto"
                      label={locale === 'en' ? 'Luck Score' : 'भाग्य स्कोर'}
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
                  {locale === 'en' ? 'Calculation:' : 'गणना:'}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-gray-800">
                  <span className="font-mono">{result.mobileNumber}</span>
                  <span>→</span>
                  {result.reductionSteps.map((step, idx) => (
                    <span key={idx} className="flex items-center gap-2">
                      <span className="font-mono font-bold">{step}</span>
                      {idx < result.reductionSteps.length - 1 && <span>→</span>}
                    </span>
                  ))}
                </div>
              </div>

              <ShareResult
                title={locale === 'en' ? 'My Mobile Number Luck Score' : 'मेरा मोबाइल नंबर भाग्य स्कोर'}
                text={`${locale === 'en' ? `My mobile number score: ${result.luckScore}% (${getLuckCategoryLabel(result.luckCategory)})` : `मेरा मोबाइल नंबर स्कोर: ${result.luckScore}% (${getLuckCategoryLabel(result.luckCategory)})`}`}
                url={`https://tools.vastucart.in/${locale}/tools/lucky-mobile-number`}
                shareLabel={tCommon('share')}
                copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
              />
            </Card>

            {/* Number Meaning */}
            <SectionCard
              title={locale === 'en' ? `Number ${result.totalNumber} Meaning` : `अंक ${result.totalNumber} का अर्थ`}
              icon={<Star className="w-5 h-5 text-yellow-500" />}
              accentBorder="saffron"
            >
              <p className="text-gray-700">
                {locale === 'hi' ? result.numberMeaning.hi : result.numberMeaning.en}
              </p>
            </SectionCard>

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
                    <p className="text-sm text-gray-500">{locale === 'en' ? 'Mobile Number' : 'मोबाइल नंबर'}</p>
                    <p className="text-3xl font-bold text-gray-900">{result.totalNumber}</p>
                  </div>
                </div>
                <p className={`${result.birthDateCompatibility.compatible ? 'text-green-700' : 'text-amber-700'}`}>
                  {locale === 'hi' ? result.birthDateCompatibility.reason.hi : result.birthDateCompatibility.reason.en}
                </p>
              </Card>
            )}

            {/* Positive Aspects */}
            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5" />
                {locale === 'en' ? 'Positive Aspects' : 'सकारात्मक पहलू'}
              </h3>
              <ul className="space-y-2">
                {result.positiveAspects.map((aspect, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-green-700">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{locale === 'hi' ? aspect.hi : aspect.en}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Challenges */}
            {result.challenges.length > 0 && (
              <Card className="p-6 bg-amber-50 border-amber-200">
                <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {locale === 'en' ? 'Challenges to Be Aware Of' : 'सावधान रहने योग्य चुनौतियां'}
                </h3>
                <ul className="space-y-2">
                  {result.challenges.map((challenge, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-amber-700">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{locale === 'hi' ? challenge.hi : challenge.en}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Best For */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'en' ? 'Best Suited For' : 'सबसे उपयुक्त'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {result.bestFor.map((item, idx) => (
                  <div key={idx} className="p-3 bg-teal-50 rounded-lg border border-teal-200 text-center">
                    <span className="text-teal-800 font-medium">
                      {locale === 'hi' ? item.hi : item.en}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Verdict */}
            <Card className="p-6 bg-gradient-to-r from-amber-50 to-saffron-50 border-amber-200">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">
                {locale === 'en' ? 'Final Verdict' : 'अंतिम निर्णय'}
              </h3>
              <p className="text-amber-800">
                {locale === 'hi' ? result.verdict.hi : result.verdict.en}
              </p>
            </Card>
          </div>
        )}

        {/* Related Tools */}
        {result && (
          <RelatedToolsSection
            tools={relatedTools}
            locale={locale}
          />
        )}

        {/* FAQ Section */}
        <FAQSection title={tCommon('faq')} faqs={faqs} />
      </div>
    </ToolLayout>
  );
}
