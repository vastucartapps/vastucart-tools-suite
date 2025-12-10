'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker';
import { Card } from '@/components/ui/card';
import { ResultCard } from '@/components/tools/result-display';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';
import { cn } from '@/lib/utils/cn';

import { calculateLoShuGrid } from '@/lib/numerology/lo-shu';
import type { LoShuResult } from '@/types';

interface LoShuCalculatorProps {
  locale: string;
}

// Grid position labels for the Lo Shu grid
const GRID_LABELS = {
  '0-0': { en: 'Prosperity', hi: 'समृद्धि', num: 4 },
  '0-1': { en: 'Fame', hi: 'प्रसिद्धि', num: 9 },
  '0-2': { en: 'Relationships', hi: 'संबंध', num: 2 },
  '1-0': { en: 'Family', hi: 'परिवार', num: 3 },
  '1-1': { en: 'Health', hi: 'स्वास्थ्य', num: 5 },
  '1-2': { en: 'Creativity', hi: 'रचनात्मकता', num: 7 },
  '2-0': { en: 'Knowledge', hi: 'ज्ञान', num: 8 },
  '2-1': { en: 'Career', hi: 'करियर', num: 1 },
  '2-2': { en: 'Helpful People', hi: 'सहायक लोग', num: 6 },
};

export function LoShuCalculator({ locale }: LoShuCalculatorProps) {
  const t = useTranslations('tools.numerology.loshuGrid');
  const tCommon = useTranslations('common');

  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [result, setResult] = useState<LoShuResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    // Validate date input
    if (!birthDate) {
      setError(locale === 'en' ? 'Please select your date of birth' : 'कृपया अपनी जन्म तिथि चुनें');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const calcResult = calculateLoShuGrid(birthDate);
      setResult(calcResult);
      setIsCalculating(false);
    }, 600);
  };

  const handleReset = () => {
    setBirthDate(null);
    setResult(null);
    setError(null);
  };

  // Get FAQ data and educational content
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="⬜"
      category="numerology"
      categoryLabel={locale === 'en' ? 'Numerology' : 'अंकशास्त्र'}
    >
      {/* Reference Grid */}
      <Card className="mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          {locale === 'en' ? 'Lo Shu Grid Layout' : 'लो शू ग्रिड लेआउट'}
        </h3>
        <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
          {[
            [4, 9, 2],
            [3, 5, 7],
            [8, 1, 6],
          ].map((row, rowIdx) =>
            row.map((num, colIdx) => {
              const key = `${rowIdx}-${colIdx}` as keyof typeof GRID_LABELS;
              const label = GRID_LABELS[key];
              return (
                <div
                  key={`${rowIdx}-${colIdx}`}
                  className="aspect-square bg-gray-100 rounded-lg flex flex-col items-center justify-center p-2 border border-gray-200"
                >
                  <span className="text-2xl font-bold text-teal-600">{num}</span>
                  <span className="text-xs text-gray-500 text-center">
                    {label[locale as 'en' | 'hi']}
                  </span>
                </div>
              );
            })
          )}
        </div>
        <p className="text-sm text-gray-500 mt-4 text-center">
          {locale === 'en'
            ? 'The ancient Chinese magic square where every row, column, and diagonal sums to 15'
            : 'प्राचीन चीनी जादू वर्ग जहां हर पंक्ति, स्तंभ और विकर्ण का योग 15 होता है'}
        </p>
      </Card>

      {/* Input Form */}
      <Card className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {locale === 'en' ? 'Enter Your Birth Date' : 'अपनी जन्म तिथि दर्ज करें'}
        </h2>

        <div className="max-w-sm mb-6">
          <DatePicker
            label={t('inputLabels.dateOfBirth')}
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

      {/* Educational Section (shown when no result yet) */}
      {!result && (
        <EducationalSection
          title={educational.title}
          content={educational.content}
        />
      )}

      {/* Results */}
        {result && (
          <div className="animate-fade-in-up">
            {/* Lo Shu Grid Visualization */}
            <Card className="mb-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {t('results.grid')}
              </h3>

              <div className="grid grid-cols-3 gap-3 max-w-sm mx-auto mb-6">
                {result.grid.grid.map((row, rowIdx) =>
                  row.map((cell, colIdx) => {
                    const key = `${rowIdx}-${colIdx}` as keyof typeof GRID_LABELS;
                    const label = GRID_LABELS[key];
                    const hasNumbers = cell.length > 0;
                    const isRepeating = cell.length > 1;

                    return (
                      <div
                        key={`${rowIdx}-${colIdx}`}
                        className={cn(
                          'aspect-square rounded-xl flex flex-col items-center justify-center p-3 border-2 relative',
                          hasNumbers
                            ? isRepeating
                              ? 'bg-saffron-50 border-saffron-300'
                              : 'bg-teal-50 border-teal-300'
                            : 'bg-gray-50 border-gray-200 border-dashed'
                        )}
                      >
                        {hasNumbers ? (
                          <>
                            <div className="flex gap-1">
                              {cell.map((num, idx) => (
                                <span
                                  key={idx}
                                  className={cn(
                                    'text-2xl font-bold',
                                    isRepeating ? 'text-saffron-600' : 'text-teal-600'
                                  )}
                                >
                                  {num}
                                </span>
                              ))}
                            </div>
                            {isRepeating && (
                              <span className="absolute top-1 right-1 text-xs bg-saffron-200 text-saffron-700 px-1.5 rounded">
                                x{cell.length}
                              </span>
                            )}
                          </>
                        ) : (
                          <span className="text-2xl font-bold text-gray-300">
                            {label.num}
                          </span>
                        )}
                        <span className="text-xs text-gray-500 mt-1">
                          {label[locale as 'en' | 'hi']}
                        </span>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Legend */}
              <div className="flex justify-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-teal-50 border-2 border-teal-300 rounded" />
                  <span>{locale === 'en' ? 'Present' : 'मौजूद'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-saffron-50 border-2 border-saffron-300 rounded" />
                  <span>{locale === 'en' ? 'Repeating' : 'दोहराया गया'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-50 border-2 border-gray-200 border-dashed rounded" />
                  <span>{locale === 'en' ? 'Missing' : 'अनुपस्थित'}</span>
                </div>
              </div>

              <div className="flex justify-center mt-6">
                <ShareResult
                  title="My Lo Shu Grid Analysis"
                  text={`Check out my Lo Shu Grid! Present: ${result.grid.presentNumbers.join(', ')} | Missing: ${result.grid.missingNumbers.join(', ')}. Analyze yours:`}
                  url={`https://vastutools.com/${locale}/tools/lo-shu-grid`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </div>
            </Card>

            {/* Number Summary */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <ResultCard title={t('results.present')}>
                <div className="flex flex-wrap gap-2">
                  {result.grid.presentNumbers.length > 0 ? (
                    result.grid.presentNumbers.map((num) => (
                      <span
                        key={num}
                        className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center"
                      >
                        {num}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500">None</span>
                  )}
                </div>
              </ResultCard>

              <ResultCard title={t('results.missing')}>
                <div className="flex flex-wrap gap-2">
                  {result.grid.missingNumbers.length > 0 ? (
                    result.grid.missingNumbers.map((num) => (
                      <span
                        key={num}
                        className="w-10 h-10 rounded-full bg-gray-200 text-gray-600 font-bold flex items-center justify-center"
                      >
                        {num}
                      </span>
                    ))
                  ) : (
                    <span className="text-teal-600 font-medium flex items-center gap-1">
                      <CheckCircle className="w-4 h-4" />
                      {locale === 'en' ? 'All numbers present!' : 'सभी संख्याएं मौजूद!'}
                    </span>
                  )}
                </div>
              </ResultCard>

              <ResultCard title={t('results.repeating')}>
                <div className="flex flex-wrap gap-2">
                  {result.grid.repeatingNumbers.length > 0 ? (
                    result.grid.repeatingNumbers.map(({ number, count }) => (
                      <span
                        key={number}
                        className="px-3 py-1 bg-saffron-100 text-saffron-700 font-bold rounded-full"
                      >
                        {number} × {count}
                      </span>
                    ))
                  ) : (
                    <span className="text-gray-500">
                      {locale === 'en' ? 'None' : 'कोई नहीं'}
                    </span>
                  )}
                </div>
              </ResultCard>
            </div>

            {/* Arrows Analysis */}
            <Card className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('results.arrows')}
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Arrows of Strength */}
                <div>
                  <h4 className="font-medium text-green-700 mb-3 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    {t('results.arrowsOfStrength')}
                  </h4>
                  {result.arrows.present.length > 0 ? (
                    <div className="space-y-3">
                      {result.arrows.present.map((arrow) => (
                        <div
                          key={arrow.id}
                          className="p-3 bg-green-50 rounded-lg border border-green-200"
                        >
                          <div className="font-medium text-green-800 mb-1">
                            {arrow.name[locale as 'en' | 'hi']}
                          </div>
                          <div className="text-sm text-green-600 mb-1">
                            {locale === 'en' ? 'Numbers:' : 'संख्याएं:'}{' '}
                            {arrow.numbers.join(' - ')}
                          </div>
                          <div className="text-sm text-green-700">
                            {arrow.description[locale as 'en' | 'hi']}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">
                      {locale === 'en'
                        ? 'No complete arrows of strength found'
                        : 'शक्ति का कोई पूर्ण तीर नहीं मिला'}
                    </p>
                  )}
                </div>

                {/* Arrows of Weakness */}
                <div>
                  <h4 className="font-medium text-amber-700 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    {t('results.arrowsOfWeakness')}
                  </h4>
                  {result.arrows.missing.length > 0 ? (
                    <div className="space-y-3">
                      {result.arrows.missing.map((arrow) => (
                        <div
                          key={arrow.id}
                          className="p-3 bg-amber-50 rounded-lg border border-amber-200"
                        >
                          <div className="font-medium text-amber-800 mb-1">
                            {arrow.name[locale as 'en' | 'hi']}
                          </div>
                          <div className="text-sm text-amber-600 mb-1">
                            {locale === 'en' ? 'Missing:' : 'अनुपस्थित:'}{' '}
                            {arrow.numbers.join(' - ')}
                          </div>
                          <div className="text-sm text-amber-700">
                            {arrow.description[locale as 'en' | 'hi']}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-gray-500 text-sm">
                      {locale === 'en'
                        ? 'No arrows of weakness found - great!'
                        : 'कमजोरी का कोई तीर नहीं मिला - बहुत अच्छा!'}
                    </p>
                  )}
                </div>
              </div>
            </Card>

            {/* Planes Analysis */}
            <Card className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'en' ? 'Plane Analysis' : 'तल विश्लेषण'}
              </h3>

              <div className="space-y-4">
                {(['mental', 'emotional', 'practical'] as const).map((planeKey) => {
                  const plane = result.planes[planeKey];
                  return (
                    <div key={planeKey} className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">
                          {plane.name[locale as 'en' | 'hi']}
                        </h4>
                        <span
                          className={cn(
                            'px-2 py-1 rounded-full text-sm font-medium',
                            plane.strength >= 66
                              ? 'bg-green-100 text-green-700'
                              : plane.strength >= 33
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-red-100 text-red-700'
                          )}
                        >
                          {plane.strength}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
                        <div
                          style={{ width: `${plane.strength}%` }}
                          className={cn(
                            'h-full rounded-full',
                            plane.strength >= 66
                              ? 'bg-green-500'
                              : plane.strength >= 33
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                          )}
                        />
                      </div>

                      <p className="text-sm text-gray-600">
                        {plane.description[locale as 'en' | 'hi']}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {locale === 'en' ? 'Numbers:' : 'संख्याएं:'} {plane.numbers.join(', ')} |{' '}
                        {locale === 'en' ? 'Present:' : 'मौजूद:'} {plane.present.join(', ') || 'None'}
                      </p>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* Remedies */}
            {result.remedies.length > 0 && (
              <Card className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('results.remedies')}
                </h3>

                <div className="space-y-4">
                  {result.remedies.map((remedy) => (
                    <div
                      key={remedy.number}
                      className="p-4 bg-teal-50 rounded-xl border border-teal-200"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <span className="w-10 h-10 rounded-full bg-teal-200 text-teal-700 font-bold flex items-center justify-center">
                          {remedy.number}
                        </span>
                        <div>
                          <h4 className="font-medium text-teal-800">
                            {locale === 'en'
                              ? `Remedies for Missing ${remedy.number}`
                              : `अनुपस्थित ${remedy.number} के लिए उपाय`}
                          </h4>
                          <p className="text-sm text-teal-600">
                            {locale === 'en' ? 'Colors:' : 'रंग:'}{' '}
                            {remedy.colors.join(', ')}
                          </p>
                        </div>
                      </div>

                      <ul className="space-y-2">
                        {remedy.remedies.map((r, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-sm text-teal-700"
                          >
                            <ArrowRight className="w-4 h-4 mt-0.5 flex-shrink-0" />
                            <span>{r[locale as 'en' | 'hi']}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {/* Related Tools */}
            <RelatedToolsSection
              tools={relatedTools}
              locale={locale as 'en' | 'hi'}
            />
          </div>
        )}

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title={tCommon('faq')} />
    </ToolLayout>
  );
}
