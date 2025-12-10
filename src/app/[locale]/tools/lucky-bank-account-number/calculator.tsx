'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, Building2, Check, AlertTriangle, Star, Sparkles, TrendingUp } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ScoreMeter } from '@/components/tools/progress-display';
import { NumberDisplay } from '@/components/tools/result-display';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

import { analyzeBankAccountNumber, type BankAccountResult } from '@/lib/numerology/lucky-bank-account';

interface LuckyBankAccountCalculatorProps {
  locale: 'en' | 'hi';
}

export default function LuckyBankAccountCalculator({ locale }: LuckyBankAccountCalculatorProps) {
  const t = useTranslations('tools.numerology.luckyBankAccountNumber');
  const tCommon = useTranslations('common');

  // Form state
  const [accountNumber, setAccountNumber] = useState('');

  // Result state
  const [result, setResult] = useState<BankAccountResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    // Validate account number
    const cleanNumber = accountNumber.replace(/[\s\-]/g, '');
    if (cleanNumber.length < 5) {
      setError(locale === 'en' ? 'Please enter a valid account number (at least 5 digits)' : 'कृपया एक वैध खाता संख्या दर्ज करें (कम से कम 5 अंक)');
      return;
    }

    if (!/^\d+$/.test(cleanNumber)) {
      setError(locale === 'en' ? 'Account number should contain only digits' : 'खाता संख्या में केवल अंक होने चाहिए');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      try {
        const analysisResult = analyzeBankAccountNumber(accountNumber);
        setResult(analysisResult);
      } catch (err) {
        setError(locale === 'en' ? 'Calculation error. Please check inputs.' : 'गणना त्रुटि। कृपया इनपुट जांचें।');
      } finally {
        setIsCalculating(false);
      }
    }, 300);
  };

  const handleReset = () => {
    setAccountNumber('');
    setResult(null);
    setError(null);
  };

  // Get FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  // Wealth category color
  const getWealthCategoryColor = (category: BankAccountResult['wealthCategory']) => {
    switch (category) {
      case 'excellent': return 'text-green-600 bg-green-100';
      case 'good': return 'text-blue-600 bg-blue-100';
      case 'average': return 'text-yellow-600 bg-yellow-100';
      case 'weak': return 'text-red-600 bg-red-100';
    }
  };

  const getWealthCategoryLabel = (category: BankAccountResult['wealthCategory']) => {
    const labels = {
      excellent: { en: 'Excellent for Wealth', hi: 'धन के लिए उत्कृष्ट' },
      good: { en: 'Good for Wealth', hi: 'धन के लिए अच्छा' },
      average: { en: 'Average', hi: 'औसत' },
      weak: { en: 'Needs Remedies', hi: 'उपाय की आवश्यकता' },
    };
    return labels[category][locale];
  };

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="🏦"
      category="numerology"
      categoryLabel={locale === 'en' ? 'Numerology' : 'अंकशास्त्र'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {locale === 'en' ? 'Enter Your Bank Account Number' : 'अपना बैंक खाता नंबर दर्ज करें'}
          </h2>

          <div className="space-y-6">
            {/* Account Number Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {locale === 'en' ? 'Account Number' : 'खाता संख्या'} *
              </label>
              <div className="relative">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={accountNumber}
                  onChange={(e) => setAccountNumber(e.target.value)}
                  placeholder={locale === 'en' ? 'Enter account number...' : 'खाता संख्या दर्ज करें...'}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  maxLength={20}
                />
              </div>
              <p className="text-xs text-gray-500 mt-1">
                {locale === 'en' ? 'Enter your bank account number without spaces' : 'बिना स्पेस के अपना बैंक खाता नंबर दर्ज करें'}
              </p>
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
                {locale === 'en' ? 'Check Wealth Score' : 'धन स्कोर जांचें'}
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
              result.wealthCategory === 'excellent' ? 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200' :
              result.wealthCategory === 'good' ? 'bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200' :
              result.wealthCategory === 'average' ? 'bg-gradient-to-r from-yellow-50 to-amber-50 border-yellow-200' :
              'bg-gradient-to-r from-red-50 to-orange-50 border-red-200'
            }`}>
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Number Display */}
                <div className="text-center">
                  <NumberDisplay
                    number={result.totalNumber}
                    label={locale === 'en' ? 'Account Number' : 'खाता अंक'}
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
                      value={result.wealthScore}
                      max={100}
                      size="lg"
                      color="auto"
                      label={locale === 'en' ? 'Wealth Score' : 'धन स्कोर'}
                      showValue
                    />
                  </div>
                  <span className={`inline-block px-4 py-2 rounded-full text-sm font-semibold ${getWealthCategoryColor(result.wealthCategory)}`}>
                    {getWealthCategoryLabel(result.wealthCategory)}
                  </span>
                </div>
              </div>

              {/* Calculation Steps */}
              <div className="mt-6 p-4 bg-white/60 rounded-lg">
                <p className="text-sm text-gray-600 mb-2">
                  {locale === 'en' ? 'Calculation:' : 'गणना:'}
                </p>
                <div className="flex flex-wrap items-center gap-2 text-gray-800">
                  <span className="font-mono">{result.accountNumber}</span>
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
                title={locale === 'en' ? 'My Bank Account Wealth Score' : 'मेरा बैंक खाता धन स्कोर'}
                text={`${locale === 'en' ? `My bank account wealth score: ${result.wealthScore}%` : `मेरा बैंक खाता धन स्कोर: ${result.wealthScore}%`}`}
                url={`https://vastutools.com/${locale}/tools/lucky-bank-account-number`}
                shareLabel={tCommon('share')}
                copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
              />
            </Card>

            {/* Financial Meaning */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                {locale === 'en' ? `Number ${result.totalNumber} Financial Meaning` : `अंक ${result.totalNumber} का वित्तीय अर्थ`}
              </h3>
              <p className="text-gray-700">
                {locale === 'hi' ? result.financialMeaning.hi : result.financialMeaning.en}
              </p>
            </Card>

            {/* Wealth Attractions */}
            <Card className="p-6 bg-green-50 border-green-200">
              <h3 className="text-lg font-semibold text-green-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {locale === 'en' ? 'Wealth Attractions' : 'धन आकर्षण'}
              </h3>
              <ul className="space-y-2">
                {result.wealthAttractions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-green-700">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{locale === 'hi' ? item.hi : item.en}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Financial Cautions */}
            {result.financialCautions.length > 0 && (
              <Card className="p-6 bg-amber-50 border-amber-200">
                <h3 className="text-lg font-semibold text-amber-800 mb-4 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  {locale === 'en' ? 'Financial Cautions' : 'वित्तीय सावधानियां'}
                </h3>
                <ul className="space-y-2">
                  {result.financialCautions.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-amber-700">
                      <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                      <span>{locale === 'hi' ? item.hi : item.en}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}

            {/* Best Uses */}
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'en' ? 'Best Uses for This Account' : 'इस खाते के सर्वोत्तम उपयोग'}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {result.bestUses.map((item, idx) => (
                  <div key={idx} className="p-3 bg-teal-50 rounded-lg border border-teal-200 text-center">
                    <span className="text-teal-800 font-medium">
                      {locale === 'hi' ? item.hi : item.en}
                    </span>
                  </div>
                ))}
              </div>
            </Card>

            {/* Recommendations */}
            <Card className="p-6 bg-blue-50 border-blue-200">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">
                {locale === 'en' ? 'Recommendations' : 'सिफारिशें'}
              </h3>
              <ul className="space-y-2">
                {result.recommendations.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-blue-700">
                    <Check className="w-4 h-4 flex-shrink-0 mt-0.5" />
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
