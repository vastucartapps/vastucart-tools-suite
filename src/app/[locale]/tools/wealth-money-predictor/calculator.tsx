'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, DollarSign, TrendingUp, Check, AlertTriangle, Calendar, Sparkles, Star } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { BirthDatePicker } from '@/components/ui/birth-date-picker';
import { TimePicker } from '@/components/ui/time-picker';
import { PlacePicker } from '@/components/ui/place-picker';
import { ScoreMeter } from '@/components/tools/progress-display';
import { NumberDisplay } from '@/components/tools/result-display';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard } from '@/components/ui/section-card';

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
      case 'very-good': return 'text-deepteal-600 bg-deepteal-100';
      case 'good': return 'text-deepteal-600 bg-deepteal-100';
      case 'moderate': return 'text-yellow-600 bg-yellow-100';
      case 'needs-effort': return 'text-orange-600 bg-orange-100';
    }
  };

  const getCategoryLabel = (category: WealthPredictionResult['wealthCategory']) => {
    const labels = {
      excellent: { en: ' Excellent Wealth Potential', hi: ' उत्कृष्ट धन क्षमता' },
      'very-good': { en: ' Very Good Potential', hi: ' बहुत अच्छी क्षमता' },
      good: { en: ' Good Potential', hi: ' अच्छी क्षमता' },
      moderate: { en: ' Moderate Potential', hi: ' मध्यम क्षमता' },
      'needs-effort': { en: ' Effort Brings Rewards', hi: ' प्रयास से फल मिलता है' },
    };
    return labels[category][locale];
  };

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon=""
      category="numerology"
      categoryLabel={locale === 'en' ? 'Numerology' : 'अंकशास्त्र'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <SectionCard
          title={locale === 'en' ? 'Enter Your Birth Date' : 'अपनी जन्म तिथि दर्ज करें'}
          icon={<Calculator className="w-5 h-5 text-deepteal-600" />}
          accentBorder="gradient"
        >
          <div className="max-w-md">
            <BirthDatePicker
              label={locale === 'en' ? 'Birth Date' : 'जन्म तिथि'}
              value={birthDate}
              onChange={setBirthDate}
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
        </SectionCard>

        {!result && (
          <EducationalSection
            title={educational.title}
            content={educational.content}
            blogLink={`/${locale}/blog/wealth-money-predictor-financial-destiny`}
            blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
          />
        )}

        {/* Results Section */}
        {result && (
          <div className="animate-fade-in-up space-y-6">
            {/* Main Result Card */}
            <HeroResultCard
              title={getCategoryLabel(result.wealthCategory)}
              subtitle={locale === 'en' ? 'Based on Numerological Analysis' : 'अंक शास्त्रीय विश्लेषण के आधार पर'}
              icon={<DollarSign className="w-6 h-6 text-white" />}
              colorScheme={['excellent', 'very-good', 'good'].includes(result.wealthCategory) ? 'warmaccent' : 'deepteal'}
            >
              <div className="grid grid-cols-3 gap-3 mb-4">
                <HeroStatCard
                  label={locale === 'en' ? 'Life Path' : 'मूलांक'}
                  value={result.lifePathNumber}
                  subValue={result.isMasterNumber ? (locale === 'en' ? 'Master' : 'मास्टर') : undefined}
                  colorScheme={['excellent', 'very-good', 'good'].includes(result.wealthCategory) ? 'warmaccent' : 'deepteal'}
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Wealth Number' : 'धन अंक'}
                  value={result.wealthNumber}
                  colorScheme={['excellent', 'very-good', 'good'].includes(result.wealthCategory) ? 'warmaccent' : 'deepteal'}
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Money Karma' : 'धन कर्म'}
                  value={result.moneyKarmaNumber}
                  colorScheme={['excellent', 'very-good', 'good'].includes(result.wealthCategory) ? 'warmaccent' : 'deepteal'}
                />
              </div>

              {/* Wealth Potential Score */}
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 mb-4">
                <p className="text-white/80 text-sm text-center mb-2">
                  {locale === 'en' ? 'Wealth Potential Score' : 'धन क्षमता स्कोर'}
                </p>
                <div className="flex items-center justify-center">
                  <span className="text-4xl font-bold text-white">{result.wealthPotentialScore}%</span>
                </div>
              </div>

              <div className="flex justify-center">
                <ShareResult
                  title={locale === 'en' ? 'My Wealth Prediction' : 'मेरी धन भविष्यवाणी'}
                  text={`${locale === 'en' ? `My wealth potential is ${result.wealthPotentialScore}% with Life Path ${result.lifePathNumber}!` : `मेरी धन क्षमता मूलांक ${result.lifePathNumber} के साथ ${result.wealthPotentialScore}% है!`}`}
                  url={locale === 'en' ? `https://www.vastucart.in/tools/wealth-money-predictor` : `https://www.vastucart.in/${locale}/tools/wealth-money-predictor`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </div>
            </HeroResultCard>

            {/* Financial Personality */}
            <SectionCard
              title={locale === 'en' ? 'Your Financial Personality' : 'आपका वित्तीय व्यक्तित्व'}
              icon={<DollarSign className="w-5 h-5 text-warmaccent-500" />}
              accentBorder="warmaccent"
            >
              <p className="text-gray-700 leading-relaxed">
                {locale === 'hi' ? result.financialPersonality.hi : result.financialPersonality.en}
              </p>
            </SectionCard>

            {/* Strengths & Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Wealth Strengths */}
              <SectionCard
                title={locale === 'en' ? 'Wealth Strengths' : 'धन की ताकत'}
                icon={<Check className="w-5 h-5 text-green-600" />}
                accentBorder="warmaccent"
                className="bg-green-50/50"
              >
                <ul className="space-y-2">
                  {result.wealthStrengths.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-green-700">
                      <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{locale === 'hi' ? item.hi : item.en}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>

              {/* Financial Challenges */}
              <SectionCard
                title={locale === 'en' ? 'Financial Challenges' : 'वित्तीय चुनौतियां'}
                icon={<AlertTriangle className="w-5 h-5 text-amber-600" />}
                accentBorder="deepteal"
                className="bg-amber-50/50"
              >
                <ul className="space-y-2">
                  {result.financialChallenges.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-amber-700">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{locale === 'hi' ? item.hi : item.en}</span>
                    </li>
                  ))}
                </ul>
              </SectionCard>
            </div>

            {/* Money Habits */}
            <SectionCard
              title={locale === 'en' ? 'Your Money Habits' : 'आपकी धन आदतें'}
              icon={<TrendingUp className="w-5 h-5 text-deepteal-500" />}
              accentBorder="deepteal"
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {result.moneyHabits.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-deepteal-500">•</span>
                    <span>{locale === 'hi' ? item.hi : item.en}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>

            {/* Best Income Sources */}
            <SectionCard
              title={locale === 'en' ? 'Best Income Sources for You' : 'आपके लिए सर्वश्रेष्ठ आय स्रोत'}
              icon={<DollarSign className="w-5 h-5 text-deepteal-600" />}
              accentBorder="gradient"
              className="bg-deepteal-50/50"
            >
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {result.bestIncomeSources.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-deepteal-700">
                    <Star className="w-4 h-4 flex-shrink-0 mt-0.5 text-warmaccent-500" />
                    <span>{locale === 'hi' ? item.hi : item.en}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>

            {/* Favorable Years */}
            {result.favorableYears.length > 0 && (
              <SectionCard
                title={locale === 'en' ? 'Favorable Years for Wealth' : 'धन के लिए अनुकूल वर्ष'}
                icon={<Calendar className="w-5 h-5 text-warmaccent-600" />}
                accentBorder="warmaccent"
              >
                <div className="space-y-3">
                  {result.favorableYears.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 bg-warmaccent-50 rounded-lg border border-warmaccent-100">
                      <span className="text-2xl font-bold text-warmaccent-600">{item.year}</span>
                      <p className="text-gray-700 flex-1">
                        {locale === 'hi' ? item.reason.hi : item.reason.en}
                      </p>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}

            {/* Lucky Elements */}
            <SectionCard
              title={locale === 'en' ? 'Lucky Elements for Wealth' : 'धन के लिए शुभ तत्व'}
              icon={<Sparkles className="w-5 h-5 text-warmaccent-500" />}
              accentBorder="gradient"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-warmaccent-50 rounded-lg border border-warmaccent-100">
                  <h4 className="font-medium text-warmaccent-800 mb-2">
                    {locale === 'en' ? 'Lucky Numbers' : 'शुभ अंक'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.luckyElements.numbers.map((num, idx) => (
                      <span key={idx} className="px-3 py-1 bg-warmaccent-200 text-warmaccent-800 rounded-full text-sm font-medium">
                        {num}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-green-50 rounded-lg border border-green-100">
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
                <div className="p-4 bg-deepteal-50 rounded-lg border border-deepteal-100">
                  <h4 className="font-medium text-deepteal-800 mb-2">
                    {locale === 'en' ? 'Lucky Colors' : 'शुभ रंग'}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {result.luckyElements.colors.map((color, idx) => (
                      <span key={idx} className="px-3 py-1 bg-deepteal-200 text-deepteal-800 rounded-full text-sm font-medium">
                        {locale === 'hi' ? color.hi : color.en}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SectionCard>

            {/* Remedies */}
            <SectionCard
              title={locale === 'en' ? 'Wealth Enhancement Remedies' : 'धन वृद्धि के उपाय'}
              icon={<Star className="w-5 h-5 text-warmaccent-500" />}
              accentBorder="warmaccent"
            >
              <ul className="space-y-2">
                {result.remedies.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-700">
                    <span className="text-warmaccent-500"></span>
                    <span>{locale === 'hi' ? item.hi : item.en}</span>
                  </li>
                ))}
              </ul>
            </SectionCard>

            {/* Overall Prediction */}
            <SectionCard
              title={locale === 'en' ? 'Overall Wealth Prediction' : 'समग्र धन भविष्यवाणी'}
              accentBorder="gradient"
              className="bg-gradient-to-r from-warmaccent-50/50 to-amber-50/50"
            >
              <p className="text-gray-800 leading-relaxed">
                {locale === 'hi' ? result.overallPrediction.hi : result.overallPrediction.en}
              </p>
            </SectionCard>
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
