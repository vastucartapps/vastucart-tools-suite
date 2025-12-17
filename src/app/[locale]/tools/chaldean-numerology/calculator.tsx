'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Sparkles } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { NumberDisplay, ResultCard } from '@/components/tools/result-display';
import { LetterBreakdown, ReductionSteps } from '@/components/tools/calculation-steps';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';
import { HeroResultCard } from '@/components/ui/hero-result-card';
import { SectionCard } from '@/components/ui/section-card';

import { calculateChaldean, getChaldeanMeaning, CHALDEAN_VALUES } from '@/lib/numerology/chaldean';
import type { ChaldeanResult, ChaldeanMeaning } from '@/types';
import Link from 'next/link';

/**
 * Determines the luck verdict based on name number
 * Very Lucky: 1, 3, 5, 6 (universally favorable numbers)
 * Balanced: 2, 7, 9, 11, 22, 33 (neutral to positive, depends on person)
 * Needs Correction: 4, 8 (challenging numbers that may need adjustment)
 */
function getLuckVerdict(number: number): { verdict: 'very_lucky' | 'balanced' | 'needs_correction'; label: { en: string; hi: string } } {
  const veryLuckyNumbers = [1, 3, 5, 6];
  const needsCorrectionNumbers = [4, 8];

  if (veryLuckyNumbers.includes(number)) {
    return { verdict: 'very_lucky', label: { en: 'Very Lucky', hi: 'बहुत भाग्यशाली' } };
  } else if (needsCorrectionNumbers.includes(number)) {
    return { verdict: 'needs_correction', label: { en: 'Needs Correction', hi: 'सुधार आवश्यक' } };
  } else {
    return { verdict: 'balanced', label: { en: 'Balanced', hi: 'संतुलित' } };
  }
}

interface ChaldeanCalculatorProps {
  locale: string;
}

export function ChaldeanCalculator({ locale }: ChaldeanCalculatorProps) {
  const t = useTranslations('tools.numerology.chaldean');
  const tCommon = useTranslations('common');

  const [name, setName] = useState('');
  const [result, setResult] = useState<ChaldeanResult | null>(null);
  const [meaning, setMeaning] = useState<ChaldeanMeaning | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    // Validate input
    const cleanName = name.trim();
    if (!cleanName) {
      setError(locale === 'en' ? 'Please enter a name' : 'कृपया एक नाम दर्ज करें');
      return;
    }

    // Check if name contains at least one letter
    if (!/[a-zA-Z]/.test(cleanName)) {
      setError(
        locale === 'en'
          ? 'Name must contain at least one letter (A-Z)'
          : 'नाम में कम से कम एक अक्षर (A-Z) होना चाहिए'
      );
      return;
    }

    setIsCalculating(true);

    // Simulate calculation delay for effect
    setTimeout(() => {
      const calcResult = calculateChaldean(cleanName);
      const calcMeaning = getChaldeanMeaning(calcResult.finalNumber);

      setResult(calcResult);
      setMeaning(calcMeaning);
      setIsCalculating(false);
    }, 500);
  };

  const handleReset = () => {
    setName('');
    setResult(null);
    setMeaning(null);
    setError(null);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCalculate();
    }
  };

  // Get FAQ data and educational content
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="✨"
      category="numerology"
      categoryLabel={locale === 'en' ? 'Numerology' : 'अंकशास्त्र'}
    >
      {/* Chaldean Chart Reference */}
      <SectionCard
        title={locale === 'en' ? 'Chaldean Letter Values' : 'कैल्डियन अक्षर मान'}
        accentBorder="deepteal"
        className="mb-8"
      >
        <div className="overflow-x-auto">
          <div className="grid grid-cols-8 gap-2 min-w-max">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => {
              const letters = Object.entries(CHALDEAN_VALUES)
                .filter(([_, value]) => value === num)
                .map(([letter]) => letter)
                .join(', ');

              return (
                <div
                  key={num}
                  className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200"
                >
                  <div className="text-2xl font-bold text-deepteal-600 mb-1">{num}</div>
                  <div className="text-sm text-gray-600 font-mono">{letters}</div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          {locale === 'en'
            ? 'Note: Number 9 is considered sacred in Chaldean numerology and not assigned to any letter.'
            : 'नोट: कैल्डियन अंकशास्त्र में संख्या 9 को पवित्र माना जाता है और किसी भी अक्षर को नहीं दिया गया है।'}
        </p>
      </SectionCard>

      {/* Input Form */}
      <SectionCard
        title={locale === 'en' ? 'Enter Your Name' : 'अपना नाम दर्ज करें'}
        icon={<Sparkles className="w-5 h-5 text-deepteal-600" />}
        accentBorder="gradient"
        className="mb-8"
      >

        <div className="mb-6">
          <Input
            label={t('inputLabels.name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={handleKeyPress}
            error={error || undefined}
            leftIcon={<Sparkles className="w-5 h-5" />}
            required
          />
          <p className="text-sm text-gray-500 mt-2">
            {locale === 'en'
              ? 'Enter your name in English letters (A-Z). Numbers and special characters will be ignored.'
              : 'अपना नाम अंग्रेजी अक्षरों (A-Z) में दर्ज करें। संख्याएं और विशेष वर्ण अनदेखा किए जाएंगे।'}
          </p>
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
          blogLink={`/${locale}/blog/chaldean-vs-pythagorean-numerology-comparison`}
          blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
        />
      )}

      {/* Results */}
        {result && meaning && (
          <div className="animate-fade-in-up">
            {/* Main Result */}
            <HeroResultCard
              title={meaning.title[locale as 'en' | 'hi']}
              subtitle={`${locale === 'en' ? 'Name Analyzed:' : 'विश्लेषित नाम:'} ${result.name}`}
              icon={<span className="text-2xl">✨</span>}
              colorScheme={getLuckVerdict(result.finalNumber).verdict === 'very_lucky' ? 'warmaccent' : 'deepteal'}
              className="mb-6"
            >
              <div className="text-center mb-4">
                <p className="text-white/80 text-sm mb-2">{t('results.yourNumber')}</p>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 mb-3">
                  <span className="text-4xl font-bold text-white">{result.finalNumber}</span>
                </div>
                {result.isMasterNumber && (
                  <p className="text-white/70 text-sm">
                    {locale === 'en' ? 'Master Number' : 'मास्टर नंबर'}
                  </p>
                )}
              </div>

              {/* Quick Verdict Chip */}
              {(() => {
                const verdict = getLuckVerdict(result.finalNumber);
                const chipStyles = {
                  very_lucky: 'bg-white/30 text-white border-white/50',
                  balanced: 'bg-white/20 text-white border-white/40',
                  needs_correction: 'bg-amber-200/30 text-white border-amber-200/50',
                };
                return (
                  <div className="text-center">
                    <span className={`inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium border ${chipStyles[verdict.verdict]}`}>
                      {verdict.verdict === 'very_lucky' && '✨ '}
                      {verdict.verdict === 'balanced' && '⚖️ '}
                      {verdict.verdict === 'needs_correction' && '✏️ '}
                      {verdict.label[locale as 'en' | 'hi']}
                    </span>
                    {verdict.verdict === 'needs_correction' && (
                      <p className="text-sm text-white/70 mt-2">
                        {locale === 'en'
                          ? 'Consider a small spelling adjustment for better vibrations. '
                          : 'बेहतर कंपन के लिए छोटे वर्तनी समायोजन पर विचार करें। '}
                        <Link href={`/${locale}/tools/name-correction`} className="text-warmaccent-200 hover:underline font-medium">
                          {locale === 'en' ? 'Try Name Correction →' : 'नाम सुधार आज़माएं →'}
                        </Link>
                      </p>
                    )}
                  </div>
                );
              })()}

              <div className="flex justify-center mt-6">
                <ShareResult
                  title={`My Name Number is ${result.finalNumber}`}
                  text={`I discovered my Chaldean Name Number is ${result.finalNumber} - ${meaning.title.en}! Analyze your name:`}
                  url={`https://tools.vastucart.in/${locale}/tools/chaldean-numerology`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </div>
            </HeroResultCard>

            {/* Letter Breakdown */}
            <SectionCard
              title={t('results.breakdown')}
              accentBorder="deepteal"
              className="mb-6"
            >
              <LetterBreakdown
                letters={result.letterBreakdown}
                total={result.totalSum}
              />

              {result.reductionSteps.length > 1 && (
                <div className="mt-4">
                  <ReductionSteps
                    steps={result.reductionSteps}
                    finalNumber={result.finalNumber}
                    isMasterNumber={result.isMasterNumber}
                  />
                </div>
              )}
            </SectionCard>

            {/* Meaning */}
            <ResultCard title={t('results.meaning')} className="mb-6">
              <p className="text-gray-700 leading-relaxed mb-4">
                {meaning.overview[locale as 'en' | 'hi']}
              </p>

              <h4 className="font-semibold text-gray-900 mb-2">
                {locale === 'en' ? 'Key Characteristics:' : 'मुख्य विशेषताएं:'}
              </h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700 mb-4">
                {meaning.characteristics.map((char, idx) => (
                  <li key={idx}>{char[locale as 'en' | 'hi']}</li>
                ))}
              </ul>

              <div className="p-4 bg-deepteal-50 rounded-xl border border-deepteal-200">
                <h4 className="font-semibold text-deepteal-800 mb-2">
                  {locale === 'en' ? 'Advice:' : 'सलाह:'}
                </h4>
                <p className="text-deepteal-700">{meaning.advice[locale as 'en' | 'hi']}</p>
              </div>
            </ResultCard>

            {/* Related Tools */}
            <RelatedToolsSection
              tools={relatedTools}
              locale={locale as 'en' | 'hi'}
            />

            {/* Try Another Name */}
            <SectionCard accentBorder="warmaccent" className="mb-6">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {locale === 'en' ? 'Try Another Name' : 'दूसरा नाम आज़माएं'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {locale === 'en'
                      ? 'Compare different spellings or nicknames'
                      : 'विभिन्न वर्तनी या उपनाम की तुलना करें'}
                  </p>
                </div>
                <Button variant="secondary" onClick={handleReset}>
                  {locale === 'en' ? 'Analyze Another' : 'एक और विश्लेषण'}
                </Button>
              </div>
            </SectionCard>
          </div>
        )}

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title={tCommon('faq')} />
    </ToolLayout>
  );
}
