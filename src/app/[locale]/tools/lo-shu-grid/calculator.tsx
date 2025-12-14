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
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard } from '@/components/ui/section-card';

import { calculateLoShuGrid } from '@/lib/numerology/lo-shu';
import type { LoShuResult } from '@/types';

interface LoShuCalculatorProps {
  locale: string;
}

/**
 * Generates a summary analysis based on the Lo Shu Grid result
 */
function generateSummary(result: LoShuResult, locale: 'en' | 'hi') {
  const { planes, arrows, grid } = result;

  // Determine strongest and weakest planes
  const planeEntries = [
    { key: 'mental', ...planes.mental },
    { key: 'emotional', ...planes.emotional },
    { key: 'practical', ...planes.practical },
  ];

  const strongestPlane = planeEntries.reduce((a, b) => a.strength > b.strength ? a : b);
  const weakestPlane = planeEntries.reduce((a, b) => a.strength < b.strength ? a : b);

  // Generate headline
  const planeNames: Record<string, { en: string; hi: string }> = {
    mental: { en: 'mental', hi: 'मानसिक' },
    emotional: { en: 'emotional', hi: 'भावनात्मक' },
    practical: { en: 'practical', hi: 'व्यावहारिक' },
  };

  let headline: { en: string; hi: string };
  if (strongestPlane.strength === weakestPlane.strength) {
    headline = {
      en: 'Balanced pattern across all planes.',
      hi: 'सभी तलों में संतुलित पैटर्न।',
    };
  } else {
    headline = {
      en: `Strong ${planeNames[strongestPlane.key].en} plane, ${planeNames[weakestPlane.key].en} plane needs support.`,
      hi: `मजबूत ${planeNames[strongestPlane.key].hi} तल, ${planeNames[weakestPlane.key].hi} तल को सहायता की आवश्यकता।`,
    };
  }

  // Determine primary strength from arrows
  const strengthBadge = arrows.present.length > 0
    ? arrows.present[0].name
    : { en: 'Adaptability', hi: 'अनुकूलनशीलता' };

  // Determine weakness based on weakest plane or arrows
  const weaknessBadge: { en: string; hi: string } = weakestPlane.strength < 50
    ? {
        mental: { en: 'Analytical thinking', hi: 'विश्लेषणात्मक सोच' },
        emotional: { en: 'Emotional expression', hi: 'भावनात्मक अभिव्यक्ति' },
        practical: { en: 'Taking action', hi: 'कार्रवाई करना' },
      }[weakestPlane.key]!
    : { en: 'Minor areas', hi: 'छोटे क्षेत्र' };

  // Determine focus area based on missing numbers
  const missingNumbers = grid.missingNumbers;
  let focusArea: { en: string; hi: string };

  if (missingNumbers.includes(2) || missingNumbers.includes(6)) {
    focusArea = { en: 'Relationships', hi: 'संबंध' };
  } else if (missingNumbers.includes(5)) {
    focusArea = { en: 'Health & Balance', hi: 'स्वास्थ्य और संतुलन' };
  } else if (missingNumbers.includes(1) || missingNumbers.includes(8)) {
    focusArea = { en: 'Career & Finance', hi: 'करियर और वित्त' };
  } else if (missingNumbers.includes(4) || missingNumbers.includes(9)) {
    focusArea = { en: 'Knowledge & Growth', hi: 'ज्ञान और विकास' };
  } else if (missingNumbers.includes(3) || missingNumbers.includes(7)) {
    focusArea = { en: 'Creativity & Expression', hi: 'रचनात्मकता और अभिव्यक्ति' };
  } else {
    focusArea = { en: 'Maintaining balance', hi: 'संतुलन बनाए रखना' };
  }

  return {
    headline,
    strengthBadge,
    weaknessBadge,
    focusArea,
  };
}

/**
 * Gets plane verdict and micro-advice based on strength percentage
 */
function getPlaneAnalysis(strength: number, planeKey: string, locale: 'en' | 'hi') {
  // Determine verdict
  let verdict: { label: { en: string; hi: string }; color: string };
  if (strength >= 67) {
    verdict = {
      label: { en: 'Strong', hi: 'मजबूत' },
      color: 'bg-green-100 text-green-700'
    };
  } else if (strength >= 34) {
    verdict = {
      label: { en: 'Balanced', hi: 'संतुलित' },
      color: 'bg-teal-100 text-teal-700'
    };
  } else {
    verdict = {
      label: { en: 'Needs Support', hi: 'सहायता चाहिए' },
      color: 'bg-amber-100 text-amber-700'
    };
  }

  // Micro-advice per plane and strength level
  const advice: Record<string, Record<string, { en: string; hi: string }>> = {
    mental: {
      high: {
        en: 'Use your analytical skills; avoid overthinking.',
        hi: 'अपनी विश्लेषणात्मक क्षमताओं का उपयोग करें; अति-चिंतन से बचें।'
      },
      medium: {
        en: 'Balance logical thinking with intuition.',
        hi: 'तार्किक सोच को अंतर्ज्ञान के साथ संतुलित करें।'
      },
      low: {
        en: 'Practice puzzles and brain exercises daily.',
        hi: 'रोज़ाना पहेलियाँ और मस्तिष्क व्यायाम करें।'
      },
    },
    emotional: {
      high: {
        en: 'Channel emotions into creativity; maintain boundaries.',
        hi: 'भावनाओं को रचनात्मकता में बदलें; सीमाएं बनाए रखें।'
      },
      medium: {
        en: 'Continue nurturing relationships with open communication.',
        hi: 'खुले संवाद के साथ रिश्तों को पोषित करते रहें।'
      },
      low: {
        en: "Practice expressing feelings; don't suppress emotions.",
        hi: 'भावनाओं को व्यक्त करने का अभ्यास करें; दबाएं नहीं।'
      },
    },
    practical: {
      high: {
        en: 'Lead with action; delegate when overwhelmed.',
        hi: 'कार्य से नेतृत्व करें; जरूरत पड़ने पर काम बांटें।'
      },
      medium: {
        en: 'Set small daily goals to build momentum.',
        hi: 'गति बनाने के लिए छोटे दैनिक लक्ष्य निर्धारित करें।'
      },
      low: {
        en: 'Start with small tasks; build habits step by step.',
        hi: 'छोटे कार्यों से शुरू करें; धीरे-धीरे आदतें बनाएं।'
      },
    },
  };

  const level = strength >= 67 ? 'high' : strength >= 34 ? 'medium' : 'low';
  const microAdvice = advice[planeKey]?.[level] || advice[planeKey]?.medium;

  return { verdict, microAdvice };
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
      <SectionCard
        title={locale === 'en' ? 'Lo Shu Grid Layout' : 'लो शू ग्रिड लेआउट'}
        accentBorder="teal"
        className="mb-8"
      >
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
      </SectionCard>

      {/* Input Form */}
      <SectionCard
        title={locale === 'en' ? 'Enter Your Birth Date' : 'अपनी जन्म तिथि दर्ज करें'}
        icon={<Calculator className="w-5 h-5 text-teal-600" />}
        accentBorder="gradient"
        className="mb-8"
      >

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
      </SectionCard>

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
            <SectionCard
              title={t('results.grid')}
              accentBorder="gradient"
              className="mb-6"
            >

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
                  url={`https://tools.vastucart.in/${locale}/tools/lo-shu-grid`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </div>
            </SectionCard>

            {/* Quick Summary Card */}
            {(() => {
              const summary = generateSummary(result, locale as 'en' | 'hi');
              return (
                <SectionCard
                  title={locale === 'en' ? 'Your Pattern Overview' : 'आपका पैटर्न सारांश'}
                  accentBorder="saffron"
                  className="mb-6"
                >

                  {/* Headline */}
                  <p className="text-gray-700 mb-4 font-medium">
                    {summary.headline[locale as 'en' | 'hi']}
                  </p>

                  {/* Three badges */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {/* Strength Badge */}
                    <div className="bg-green-100 rounded-xl p-3 border border-green-200">
                      <div className="text-xs text-green-600 font-medium uppercase tracking-wider mb-1">
                        {locale === 'en' ? 'Strength' : 'शक्ति'}
                      </div>
                      <div className="text-green-800 font-semibold flex items-center gap-1">
                        <CheckCircle className="w-4 h-4" />
                        {summary.strengthBadge[locale as 'en' | 'hi']}
                      </div>
                    </div>

                    {/* Weakness Badge */}
                    <div className="bg-amber-100 rounded-xl p-3 border border-amber-200">
                      <div className="text-xs text-amber-600 font-medium uppercase tracking-wider mb-1">
                        {locale === 'en' ? 'Growth Area' : 'विकास क्षेत्र'}
                      </div>
                      <div className="text-amber-800 font-semibold flex items-center gap-1">
                        <AlertCircle className="w-4 h-4" />
                        {summary.weaknessBadge[locale as 'en' | 'hi']}
                      </div>
                    </div>

                    {/* Focus Area Badge */}
                    <div className="bg-teal-100 rounded-xl p-3 border border-teal-200">
                      <div className="text-xs text-teal-600 font-medium uppercase tracking-wider mb-1">
                        {locale === 'en' ? 'Focus This Year' : 'इस वर्ष ध्यान दें'}
                      </div>
                      <div className="text-teal-800 font-semibold flex items-center gap-1">
                        <ArrowRight className="w-4 h-4" />
                        {summary.focusArea[locale as 'en' | 'hi']}
                      </div>
                    </div>
                  </div>
                </SectionCard>
              );
            })()}

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
            <SectionCard
              title={t('results.arrows')}
              accentBorder="teal"
              className="mb-6"
            >

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
            </SectionCard>

            {/* Planes Analysis */}
            <SectionCard
              title={locale === 'en' ? 'Plane Analysis' : 'तल विश्लेषण'}
              accentBorder="gradient"
              className="mb-6"
            >

              <div className="space-y-4">
                {(['mental', 'emotional', 'practical'] as const).map((planeKey) => {
                  const plane = result.planes[planeKey];
                  const analysis = getPlaneAnalysis(plane.strength, planeKey, locale as 'en' | 'hi');
                  return (
                    <div key={planeKey} className="p-4 bg-gray-50 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-medium text-gray-900">
                          {plane.name[locale as 'en' | 'hi']}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className={cn('px-2 py-1 rounded-full text-xs font-medium', analysis.verdict.color)}>
                            {analysis.verdict.label[locale as 'en' | 'hi']}
                          </span>
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
                      </div>

                      {/* Progress bar */}
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden mb-3">
                        <div
                          style={{ width: `${plane.strength}%` }}
                          className={cn(
                            'h-full rounded-full transition-all duration-500',
                            plane.strength >= 66
                              ? 'bg-green-500'
                              : plane.strength >= 33
                              ? 'bg-yellow-500'
                              : 'bg-red-500'
                          )}
                        />
                      </div>

                      {/* Micro-advice */}
                      <div className="bg-white rounded-lg p-3 border border-gray-200 mb-2">
                        <p className="text-sm text-gray-700 flex items-start gap-2">
                          <span className="text-teal-500 mt-0.5">💡</span>
                          {analysis.microAdvice[locale as 'en' | 'hi']}
                        </p>
                      </div>

                      <p className="text-xs text-gray-500">
                        {locale === 'en' ? 'Numbers:' : 'संख्याएं:'} {plane.numbers.join(', ')} |{' '}
                        {locale === 'en' ? 'Present:' : 'मौजूद:'} {plane.present.join(', ') || (locale === 'en' ? 'None' : 'कोई नहीं')}
                      </p>
                    </div>
                  );
                })}
              </div>
            </SectionCard>

            {/* Remedies */}
            {result.remedies.length > 0 && (
              <SectionCard
                title={t('results.remedies')}
                accentBorder="saffron"
                className="mb-6"
              >

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
              </SectionCard>
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
