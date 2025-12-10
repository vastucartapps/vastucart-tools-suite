'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, DollarSign, TrendingUp, Check, AlertTriangle, Calendar, Sparkles, Star } from 'lucide-react';

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

import { calculateWealthPrediction, type WealthPredictionResult } from '@/lib/numerology/wealth-predictor';

interface WealthMoneyCalculatorProps {
  locale: 'en' | 'hi';
}

export default function WealthMoneyCalculator({ locale }: WealthMoneyCalculatorProps) {
  const t = useTranslations('tools.numerology.wealthMoneyPredictor');
  const tCommon = useTranslations('common');

  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);

  // Result state
  const [result, setResult] = useState<WealthPredictionResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    if (!birthDate) {
      setError(locale === 'en' ? 'Please select your birth date' : 'कृपया अपनी जन्म तिथि चुनें');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      try {
        const analysisResult = calculateWealthPrediction(birthDate);
        setResult(analysisResult);
      } catch (err) {
        setError(locale === 'en' ? 'Calculation error. Please check inputs.' : 'गणना त्रुटि। कृपया इनपुट जांचें।');
      } finally {
        setIsCalculating(false);
      }
    }, 500);
  };

  const handleReset = () => {
    setBirthDate(null);
    setResult(null);
    setError(null);
  };

  // Get FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  // Category color
  const getCategoryColor = (category: WealthPredictionResult['wealthCategory']) => {
    switch (category) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'very-good': return 'text-teal-600 bg-teal-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'needs-effort': return 'text-orange-600 bg-orange-100';
    }
  };

  const getCategoryLabel = (category: WealthPredictionResult['wealthCategory']) => {
    const labels = {
      excellent: { en: '💎 Excellent Wealth Potential', hi: '💎 उत्कृष्ट धन क्षमता' },
      'very-good': { en: '🌟 Very Good Potential', hi: '🌟 बहुत अच्छी क्षमता' },
      good: { en: '✨ Good Potential', hi: '✨ अच्छी क्षमता' },
      moderate: { en: '⭐ Moderate Potential', hi: '⭐ मध्यम क्षमता' },
      'needs-effort': { en: '💪 Effort Brings Rewards', hi: '💪 प्रयास से फल मिलता है' },
    };
    return labels[category][locale];
  };

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="💰"
      category="numerology"
      categoryLabel={locale === 'en' ? 'Numerology' : 'अंकशास्त्र'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {locale === 'en' ? 'Enter Your Birth Date' : 'अपनी जन्म तिथि दर्ज करें'}
          </h2>

          <div className="max-w-md">
            <DatePicker
              label={locale === 'en' ? 'Birth Date' : 'जन्म तिथि'}
              value={birthDate}
              onChange={setBirthDate}
              placeholder={locale === 'en' ? 'Select your birth date' : 'अपनी जन्म तिथि चुनें'}
              locale={locale}
            />
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
                <DollarSign className="w-4 h-4 mr-2" />
              )}
              {locale === 'en' ? 'Predict Wealth' : 'धन की भविष्यवाणी'}
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
          />
        )}

        {/* Results Section */}
        {result && (
          <div className="animate-fade-in-up space-y-6">
            {/* Main Result Card */}
            <Card className="p-6 bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
              <div className="flex flex-col items-center gap-6">
                {/* Numbers Display */}
                <div className="flex flex-wrap items-center justify-center gap-6">
                  <NumberDisplay
                    number={result.lifePathNumber}
                    label={locale === 'en' ? 'Life Path' : 'मूलांक'}
                    isMasterNumber={result.isMasterNumber}
                    size="lg"
                  />
                  <NumberDisplay
                    number={result.wealthNumber}
                    label={locale === 'en' ? 'Wealth Number' : 'धन अंक'}
                    size="md"
                  />
                  <NumberDisplay
                    number={result.moneyKarmaNumber}
                    label={locale === 'en' ? 'Money Karma' : 'धन कर्म'}
                    size="md"
                  />
                </div>

                {/* Wealth Potential Score */}
                <div className="w-full max-w-md">
                  <ScoreMeter
                    value={result.wealthPotentialScore}
                    max={100}
                    size="lg"
                    color="saffron"
                    label={locale === 'en' ? 'Wealth Potential' : 'धन क्षमता'}
                    showValue
                  />
                </div>

                {/* Category Label */}
                <span className={`inline-block px-6 py-3 rounded-full text-lg font-semibold ${getCategoryColor(result.wealthCategory)}`}>
                  {getCategoryLabel(result.wealthCategory)}
                </span>
              </div>

              <ShareResult
                title={locale === 'en' ? 'My Wealth Prediction' : 'मेरी धन भविष्यवाणी'}
                text={`${locale === 'en' ? `My wealth potential is ${result.wealthPotentialScore}% with Life Path ${result.lifePathNumber}!` : `मेरी धन क्षमता मूलांक ${result.lifePathNumber} के साथ ${result.wealthPotentialScore}% है!`}`}
                url={`https://tools.vastucart.in/${locale}/tools/wealth-money-predictor`}
                shareLabel={tCommon('share')}
                copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
              />
            </Card>

            {/* Financial Personality */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-amber-500" />
                {locale === 'en' ? 'Your Financial Personality' : 'आपका वित्तीय व्यक्तित्व'}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {locale === 'hi' ? result.financialPersonality.hi : result.financialPersonality.en}
              </p>
            </Card>

            {/* Strengths & Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Wealth Strengths */}
              <Card className="p-6 bg-green-50 border-green-200">
                <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  {locale === 'en' ? 'Wealth Strengths' : 'धन की ताकत'}
                </h3>
                <ul className="space-y-2">
                  {result.wealthStrengths.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-green-700">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{locale === 'hi' ? item.hi : item.en}</span>
                    </li>
                  ))}
                </ul>
              </Card>

              {/* Financial Challenges */}
              <Card className="p-6 bg-amber-50 border-amber-200">
                <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {locale === 'en' ? 'Financial Challenges' : 'वित्तीय चुनौतियां'}
                </h3>
                <ul className="space-y-2">
                  {result.financialChallenges.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-amber-700">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{locale === 'hi' ? item.hi : item.en}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Money Habits */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-500" />
                {locale === 'en' ? 'Your Money Habits' : 'आपकी धन आदतें'}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {result.moneyHabits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-blue-500">•</span>
                    <span>{locale === 'hi' ? item.hi : item.en}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Best Income Sources */}
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-4 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                {locale === 'en' ? 'Best Income Sources for You' : 'आपके लिए सर्वश्रेष्ठ आय स्रोत'}
              </h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {result.bestIncomeSources.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-blue-700">
                    <Star className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{locale === 'hi' ? item.hi : item.en}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Favorable Years */}
            {result.favorableYears.length > 0 && (
              <Card className="p-6 bg-purple-50 border-purple-200">
                <h3 className="text-lg font-semibold text-purple-800 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  {locale === 'en' ? 'Favorable Years for Wealth' : 'धन के लिए अनुकूल वर्ष'}
                </h3>
                <div className="space-y-3">
                  {result.favorableYears.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-lg">
                      <span className="text-2xl font-bold text-purple-600">{item.year}</span>
                      <p className="text-purple-700 flex-1">
                        {locale === 'hi' ? item.reason.hi : item.reason.en}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Lucky Elements */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                {locale === 'en' ? 'Lucky Elements for Wealth' : 'धन के लिए शुभ तत्व'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-amber-50 rounded-lg">
                  <h4 className="font-medium text-amber-800 mb-2">
                    {locale === 'en' ? 'Lucky Numbers' : 'शुभ अंक'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.luckyElements.numbers.map((num, idx) => (
                      <span key={idx} className="px-3 py-1 bg-amber-200 text-amber-800 rounded-full text-sm font-medium">
                        {num}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">
                    {locale === 'en' ? 'Lucky Days' : 'शुभ दिन'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.luckyElements.days.map((day, idx) => (
                      <span key={idx} className="px-3 py-1 bg-green-200 text-green-800 rounded-full text-sm font-medium">
                        {locale === 'hi' ? day.hi : day.en}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">
                    {locale === 'en' ? 'Lucky Colors' : 'शुभ रंग'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.luckyElements.colors.map((color, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-200 text-blue-800 rounded-full text-sm font-medium">
                        {locale === 'hi' ? color.hi : color.en}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Remedies */}
            <Card className="p-6 bg-orange-50 border-orange-200">
              <h3 className="text-lg font-semibold text-orange-800 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                {locale === 'en' ? 'Wealth Enhancement Remedies' : 'धन वृद्धि के उपाय'}
              </h3>
              <ul className="space-y-2">
                {result.remedies.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-orange-700">
                    <span className="text-orange-500">✦</span>
                    <span>{locale === 'hi' ? item.hi : item.en}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Overall Prediction */}
            <Card className="p-6 bg-gradient-to-r from-amber-50 to-yellow-50 border-amber-200">
              <h3 className="text-lg font-semibold text-amber-900 mb-4">
                {locale === 'en' ? 'Overall Wealth Prediction' : 'समग्र धन भविष्यवाणी'}
              </h3>
              <p className="text-amber-800 leading-relaxed">
                {locale === 'hi' ? result.overallPrediction.hi : result.overallPrediction.en}
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
