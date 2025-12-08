'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, RefreshCw } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import {
  NumberDisplay,
  ResultCard,
  TraitList,
  CompatibilityBadges,
  CelebrityList,
} from '@/components/tools/result-display';
import { CalculationSteps } from '@/components/tools/calculation-steps';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';

import { calculateLifePath, getLifePathMeaning } from '@/lib/numerology/life-path';
import { getCelebritiesByLifePath } from '@/lib/data/celebrities';
import type { LifePathResult, LifePathMeaning } from '@/types';

interface LifePathCalculatorProps {
  locale: string;
}

export function LifePathCalculator({ locale }: LifePathCalculatorProps) {
  const t = useTranslations('tools.numerology.lifePathNumber');
  const tCommon = useTranslations('common');

  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [result, setResult] = useState<LifePathResult | null>(null);
  const [meaning, setMeaning] = useState<LifePathMeaning | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    // Validate input
    if (!birthDate) {
      setError(locale === 'en' ? 'Please select your birth date' : 'कृपया अपनी जन्म तिथि चुनें');
      return;
    }

    setIsCalculating(true);

    // Simulate calculation delay for effect
    setTimeout(() => {
      const day = birthDate.getDate();
      const month = birthDate.getMonth() + 1;
      const year = birthDate.getFullYear();

      const calcResult = calculateLifePath(day, month, year);
      const calcMeaning = getLifePathMeaning(calcResult.lifePathNumber);

      setResult(calcResult);
      setMeaning(calcMeaning);
      setIsCalculating(false);
    }, 500);
  };

  const handleReset = () => {
    setBirthDate(null);
    setResult(null);
    setMeaning(null);
    setError(null);
  };

  // Build calculation steps for display
  const getCalculationSteps = () => {
    if (!result) return [];

    return [
      {
        step: 1,
        title: locale === 'en' ? 'Reduce Day' : 'दिन को कम करें',
        calculation: result.calculationSteps.day.steps.join(' → '),
        result: result.calculationSteps.day.reduced,
      },
      {
        step: 2,
        title: locale === 'en' ? 'Reduce Month' : 'माह को कम करें',
        calculation: result.calculationSteps.month.steps.join(' → '),
        result: result.calculationSteps.month.reduced,
      },
      {
        step: 3,
        title: locale === 'en' ? 'Reduce Year' : 'वर्ष को कम करें',
        calculation: result.calculationSteps.year.steps.join(' → '),
        result: result.calculationSteps.year.reduced,
      },
      {
        step: 4,
        title: locale === 'en' ? 'Sum & Final Reduction' : 'योग और अंतिम कमी',
        calculation: `${result.calculationSteps.day.reduced} + ${result.calculationSteps.month.reduced} + ${result.calculationSteps.year.reduced} = ${result.calculationSteps.final.sum} → ${result.calculationSteps.final.steps.join(' → ')}`,
        result: result.lifePathNumber,
      },
    ];
  };

  // Get FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;

  return (
    <ToolLayout
      title={t('title')}
      description={t('description')}
      icon="🔢"
      category="numerology"
      categoryLabel={locale === 'en' ? 'Numerology' : 'अंकशास्त्र'}
    >
      {/* Input Form */}
      <Card className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {locale === 'en' ? 'Enter Your Birth Date' : 'अपनी जन्म तिथि दर्ज करें'}
        </h2>

        <div className="max-w-sm mb-6">
          <DatePicker
            label={locale === 'en' ? 'Date of Birth' : 'जन्म तिथि'}
            value={birthDate}
            onChange={setBirthDate}
            placeholder={locale === 'en' ? 'Select your birth date' : 'अपनी जन्म तिथि चुनें'}
            locale={locale as 'en' | 'hi'}
            minYear={1900}
            maxYear={new Date().getFullYear()}
            required
            error={error || undefined}
          />
        </div>

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

      {/* Results */}
      <AnimatePresence mode="wait">
        {result && meaning && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Main Result */}
            <Card className="mb-6 text-center">
              <p className="text-gray-600 mb-4">{t('results.yourNumber')}</p>
              <NumberDisplay
                number={result.lifePathNumber}
                label={meaning.title[locale as 'en' | 'hi']}
                isMasterNumber={result.isMasterNumber}
              />

              <div className="flex justify-center mt-6">
                <ShareResult
                  title={`My Life Path Number is ${result.lifePathNumber}`}
                  text={`I just discovered my Life Path Number is ${result.lifePathNumber} - ${meaning.title.en}! Calculate yours:`}
                  url={`https://vastutools.com/${locale}/tools/life-path-number`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </div>
            </Card>

            {/* Meaning */}
            <ResultCard title={t('results.meaning')} className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {meaning.overview[locale as 'en' | 'hi']}
              </p>
            </ResultCard>

            {/* Traits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ResultCard title={t('results.positiveTraits')}>
                <TraitList
                  title=""
                  traits={meaning.positiveTraits.map((t) => t[locale as 'en' | 'hi'])}
                  type="positive"
                />
              </ResultCard>

              <ResultCard title={t('results.negativeTraits')}>
                <TraitList
                  title=""
                  traits={meaning.negativeTraits.map((t) => t[locale as 'en' | 'hi'])}
                  type="negative"
                />
              </ResultCard>
            </div>

            {/* Career & Compatibility */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ResultCard title={t('results.career')}>
                <div className="flex flex-wrap gap-2">
                  {meaning.careers.map((career, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium"
                    >
                      {career[locale as 'en' | 'hi']}
                    </span>
                  ))}
                </div>
              </ResultCard>

              <ResultCard title={t('results.compatibility')}>
                <CompatibilityBadges
                  numbers={meaning.compatibleNumbers}
                  label=""
                />
              </ResultCard>
            </div>

            {/* Celebrities */}
            <ResultCard title={t('results.celebrities')} className="mb-6">
              <CelebrityList
                celebrities={getCelebritiesByLifePath(result.lifePathNumber).map(c => ({
                  name: locale === 'hi' ? c.nameHi : c.name,
                  profession: locale === 'hi' ? c.professionHi : c.profession,
                }))}
                label=""
              />
            </ResultCard>

            {/* Calculation Steps */}
            <Card className="mb-6">
              <CalculationSteps
                steps={getCalculationSteps()}
                showLabel={tCommon('showSteps')}
                hideLabel={tCommon('hideSteps')}
                reference="Numerology: The Complete Guide by Matthew Oliver Goodwin"
              />
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title={tCommon('faq')} />
    </ToolLayout>
  );
}
