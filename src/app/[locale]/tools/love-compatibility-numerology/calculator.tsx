'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, Heart, Check, AlertTriangle, Sparkles, User } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BirthDatePicker } from '@/components/ui/birth-date-picker';
import { TimePicker } from '@/components/ui/time-picker';
import { PlacePicker } from '@/components/ui/place-picker';
import { CompatibilityBar, ScoreMeter } from '@/components/tools/progress-display';
import { NumberDisplay } from '@/components/tools/result-display';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

import { analyzeLoveCompatibility, type LoveCompatibilityResult } from '@/lib/numerology/love-compatibility';

interface LoveCompatibilityCalculatorProps {
  locale: 'en' | 'hi';
}

export default function LoveCompatibilityCalculator({ locale }: LoveCompatibilityCalculatorProps) {
  const t = useTranslations('tools.numerology.loveCompatibilityNumerology');
  const tCommon = useTranslations('common');

  // Form state - Partner 1
  const [name1, setName1] = useState('');
  const [birthDate1, setBirthDate1] = useState<Date | null>(null);

  // Form state - Partner 2
  const [name2, setName2] = useState('');
  const [birthDate2, setBirthDate2] = useState<Date | null>(null);

  // Result state
  const [result, setResult] = useState<LoveCompatibilityResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    if (!name1.trim()) {
      setError(locale === 'en' ? 'Please enter Partner 1 name' : 'कृपया पार्टनर 1 का नाम दर्ज करें');
      return;
    }
    if (!birthDate1) {
      setError(locale === 'en' ? 'Please select Partner 1 birth date' : 'कृपया पार्टनर 1 की जन्म तिथि चुनें');
      return;
    }
    if (!name2.trim()) {
      setError(locale === 'en' ? 'Please enter Partner 2 name' : 'कृपया पार्टनर 2 का नाम दर्ज करें');
      return;
    }
    if (!birthDate2) {
      setError(locale === 'en' ? 'Please select Partner 2 birth date' : 'कृपया पार्टनर 2 की जन्म तिथि चुनें');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      try {
        const analysisResult = analyzeLoveCompatibility(name1, birthDate1, name2, birthDate2);
        setResult(analysisResult);
      } catch (err) {
        setError(locale === 'en' ? 'Calculation error. Please check inputs.' : 'गणना त्रुटि। कृपया इनपुट जांचें।');
      } finally {
        setIsCalculating(false);
      }
    }, 500);
  };

  const handleReset = () => {
    setName1('');
    setBirthDate1(null);
    setName2('');
    setBirthDate2(null);
    setResult(null);
    setError(null);
  };

  // Get FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  // Compatibility level color
  const getLevelColor = (level: LoveCompatibilityResult['compatibilityLevel']) => {
    switch (level) {
      case 'soulmate': return 'text-pink-600 bg-pink-100';
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-deepteal-600 bg-deepteal-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'challenging': return 'text-orange-600 bg-orange-100';
    }
  };

  const getLevelLabel = (level: LoveCompatibilityResult['compatibilityLevel']) => {
    const labels = {
      soulmate: { en: '💕 Soulmate Match', hi: '💕 आत्मिक साथी' },
      excellent: { en: '❤️ Excellent Match', hi: '❤️ उत्कृष्ट मेल' },
      good: { en: '💙 Good Match', hi: '💙 अच्छा मेल' },
      moderate: { en: '💛 Moderate Match', hi: '💛 मध्यम मेल' },
      challenging: { en: '🧡 Needs Work', hi: '🧡 प्रयास की आवश्यकता' },
    };
    return labels[level][locale];
  };

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="💕"
      category="numerology"
      categoryLabel={locale === 'en' ? 'Numerology' : 'अंकशास्त्र'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {locale === 'en' ? 'Enter Both Partners Details' : 'दोनों पार्टनर्स का विवरण दर्ज करें'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Partner 1 */}
            <div className="space-y-4 p-4 bg-pink-50 rounded-lg">
              <div className="flex items-center gap-2 text-pink-700 font-semibold">
                <User className="w-5 h-5" />
                {locale === 'en' ? 'Partner 1' : 'पार्टनर 1'}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {locale === 'en' ? 'Name' : 'नाम'} *
                </label>
                <input
                  type="text"
                  value={name1}
                  onChange={(e) => setName1(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  maxLength={50}
                />
              </div>
              <BirthDatePicker
                label={locale === 'en' ? 'Birth Date' : 'जन्म तिथि'}
                value={birthDate1}
                onChange={setBirthDate1}
                locale={locale}
              />
            </div>

            {/* Partner 2 */}
            <div className="space-y-4 p-4 bg-amber-50 rounded-lg">
              <div className="flex items-center gap-2 text-amber-700 font-semibold">
                <User className="w-5 h-5" />
                {locale === 'en' ? 'Partner 2' : 'पार्टनर 2'}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {locale === 'en' ? 'Name' : 'नाम'} *
                </label>
                <input
                  type="text"
                  value={name2}
                  onChange={(e) => setName2(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                  maxLength={50}
                />
              </div>
              <BirthDatePicker
                label={locale === 'en' ? 'Birth Date' : 'जन्म तिथि'}
                value={birthDate2}
                onChange={setBirthDate2}
                locale={locale}
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Button onClick={handleCalculate} disabled={isCalculating}>
              {isCalculating ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Heart className="w-4 h-4 mr-2" />
              )}
              {locale === 'en' ? 'Check Compatibility' : 'संगतता जांचें'}
            </Button>
            <Button onClick={handleReset} variant="secondary">
              <RefreshCw className="w-4 h-4 mr-2" />
              {tCommon('reset')}
            </Button>
          </div>
        </Card>

        {!result && (
          <EducationalSection
            title={educational.title}
            content={educational.content}
            blogLink={`/${locale}/blog/love-compatibility-numerology-soulmate`}
            blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
          />
        )}

        {/* Results Section */}
        {result && (
          <div className="animate-fade-in-up space-y-6">
            {/* Main Result Card */}
            <Card className="p-6 bg-gradient-to-r from-pink-50 to-amber-50 border-pink-200">
              <div className="flex flex-col items-center gap-6">
                {/* Partner Numbers */}
                <div className="flex items-center justify-center gap-8">
                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">{result.partner1.name}</p>
                    <NumberDisplay
                      number={result.partner1.lifePathNumber}
                      label={locale === 'en' ? 'Life Path' : 'मूलांक'}
                      isMasterNumber={result.partner1.isMasterNumber}
                      size="md"
                    />
                  </div>

                  <div className="text-4xl">💕</div>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">{result.partner2.name}</p>
                    <NumberDisplay
                      number={result.partner2.lifePathNumber}
                      label={locale === 'en' ? 'Life Path' : 'मूलांक'}
                      isMasterNumber={result.partner2.isMasterNumber}
                      size="md"
                    />
                  </div>
                </div>

                {/* Compatibility Score */}
                <div className="w-full max-w-[200px] mx-auto overflow-hidden relative">
                  <ScoreMeter
                    value={result.compatibilityScore}
                    max={100}
                    size="lg"
                    color="warmaccent"
                    label={locale === 'en' ? 'Compatibility' : 'संगतता'}
                    showValue
                  />
                </div>

                {/* Compatibility Level */}
                <span className={`inline-block px-6 py-3 rounded-full text-lg font-semibold ${getLevelColor(result.compatibilityLevel)}`}>
                  {getLevelLabel(result.compatibilityLevel)}
                </span>
              </div>

              <ShareResult
                title={locale === 'en' ? 'Our Love Compatibility' : 'हमारी प्रेम संगतता'}
                text={`${locale === 'en' ? `${result.partner1.name} & ${result.partner2.name}: ${result.compatibilityScore}% compatible!` : `${result.partner1.name} और ${result.partner2.name}: ${result.compatibilityScore}% संगत!`}`}
                url={`https://www.vastucart.in/${locale}/tools/love-compatibility-numerology`}
                shareLabel={tCommon('share')}
                copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
              />
            </Card>

            {/* Combined Number */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                {locale === 'en' ? 'Relationship Number' : 'संबंध अंक'}
              </h3>
              <div className="flex items-center gap-4">
                <NumberDisplay
                  number={result.combinedNumber}
                  label={locale === 'en' ? 'Combined' : 'संयुक्त'}
                  size="md"
                />
                <p className="text-gray-700 flex-1">
                  {locale === 'hi' ? result.combinedMeaning.hi : result.combinedMeaning.en}
                </p>
              </div>
            </Card>

            {/* Compatibility Areas */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'en' ? 'Compatibility Areas' : 'संगतता क्षेत्र'}
              </h3>
              <div className="space-y-4">
                {result.compatibilityAreas.map((area, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-700">
                        {locale === 'hi' ? area.area.hi : area.area.en}
                      </span>
                      <span className="text-sm text-gray-500">{area.score}%</span>
                    </div>
                    <CompatibilityBar
                      score={area.score}
                      maxScore={100}
                      label={locale === 'hi' ? area.area.hi : area.area.en}
                      size="sm"
                    />
                    <p className="text-sm text-gray-600 mt-1">
                      {locale === 'hi' ? area.description.hi : area.description.en}
                    </p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Strengths */}
            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5" />
                {locale === 'en' ? 'Relationship Strengths' : 'रिश्ते की ताकत'}
              </h3>
              <ul className="space-y-2">
                {result.strengths.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-green-700">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{locale === 'hi' ? item.hi : item.en}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Challenges */}
            <Card className="p-6 bg-amber-50 border-amber-200">
              <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                {locale === 'en' ? 'Areas to Work On' : 'सुधार के क्षेत्र'}
              </h3>
              <ul className="space-y-2">
                {result.challenges.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-amber-700">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{locale === 'hi' ? item.hi : item.en}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Advice */}
            <Card className="p-6 bg-deepteal-50 border-deepteal-200">
              <h3 className="text-lg font-semibold text-deepteal-800 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5" />
                {locale === 'en' ? 'Advice for Your Relationship' : 'आपके रिश्ते के लिए सलाह'}
              </h3>
              <ul className="space-y-2">
                {result.advice.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-deepteal-700">
                    <Heart className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{locale === 'hi' ? item.hi : item.en}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Verdict */}
            <Card className="p-6 bg-gradient-to-r from-pink-50 to-amber-50 border-pink-200">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">
                {locale === 'en' ? 'Final Verdict' : 'अंतिम निर्णय'}
              </h3>
              <p className="text-amber-800">
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
