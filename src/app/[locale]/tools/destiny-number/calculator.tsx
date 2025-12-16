'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, User } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { NumberDisplay, ResultCard, TraitList, CelebrityList } from '@/components/tools/result-display';
import { LetterBreakdown, ReductionSteps } from '@/components/tools/calculation-steps';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard } from '@/components/ui/section-card';

import { calculateDestiny, getDestinyMeaning, PYTHAGOREAN_VALUES, DestinyResult, DestinyMeaning } from '@/lib/numerology/destiny';
import { getCelebritiesByDestiny } from '@/lib/data/celebrities';

interface DestinyCalculatorProps {
  locale: string;
}

export function DestinyCalculator({ locale }: DestinyCalculatorProps) {
  const t = useTranslations('tools.numerology.destinyNumber');
  const tCommon = useTranslations('common');

  const [name, setName] = useState('');
  const [result, setResult] = useState<DestinyResult | null>(null);
  const [meaning, setMeaning] = useState<DestinyMeaning | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    // Validate input
    const cleanName = name.trim();
    if (!cleanName) {
      setError(locale === 'en' ? 'Please enter your full name' : 'कृपया अपना पूरा नाम दर्ज करें');
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
      const calcResult = calculateDestiny(cleanName);
      const calcMeaning = getDestinyMeaning(calcResult.destinyNumber);

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

  // Get FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="🎯"
      category="numerology"
      categoryLabel={locale === 'en' ? 'Numerology' : 'अंकशास्त्र'}
    >
      {/* Pythagorean Chart Reference */}
      <SectionCard
        title={locale === 'en' ? 'Pythagorean Letter Values' : 'पाइथागोरियन अक्षर मान'}
        accentBorder="teal"
        className="mb-8"
      >
        <div className="overflow-x-auto -mx-2 px-2">
          <div className="grid grid-cols-9 gap-2 min-w-[500px]">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
              const letters = Object.entries(PYTHAGOREAN_VALUES)
                .filter(([_, value]) => value === num)
                .map(([letter]) => letter)
                .join(', ');

              return (
                <div
                  key={num}
                  className="bg-gray-50 rounded-lg p-3 text-center border border-gray-200"
                >
                  <div className="text-2xl font-bold text-teal-600 mb-1">{num}</div>
                  <div className="text-sm text-gray-600 font-mono">{letters}</div>
                </div>
              );
            })}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-3">
          {locale === 'en'
            ? 'The Pythagorean system assigns numbers 1-9 based on alphabetical position.'
            : 'पाइथागोरियन प्रणाली वर्णमाला की स्थिति के आधार पर 1-9 संख्याएं निर्दिष्ट करती है।'}
        </p>
      </SectionCard>

      {/* Input Form */}
      <SectionCard
        title={locale === 'en' ? 'Enter Your Full Birth Name' : 'अपना पूरा जन्म नाम दर्ज करें'}
        icon={<User className="w-5 h-5 text-teal-600" />}
        accentBorder="gradient"
        className="mb-8"
      >

        <div className="mb-6">
          <Input
            label={t('inputLabels.name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder={locale === 'en' ? 'e.g., John Michael Smith' : 'उदा., राम कृष्ण शर्मा'}
            error={error || undefined}
            leftIcon={<User className="w-5 h-5" />}
            required
          />
          <p className="text-sm text-gray-500 mt-2">
            {locale === 'en'
              ? 'Enter your full name as given at birth (first, middle, last). Use English letters (A-Z).'
              : 'अपना पूरा जन्म नाम दर्ज करें (पहला, मध्य, अंतिम)। अंग्रेजी अक्षरों (A-Z) का प्रयोग करें।'}
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
          blogLink={`/${locale}/blog/destiny-number-calculator-name-power`}
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
              icon={<span className="text-2xl">🎯</span>}
              colorScheme="saffron"
              className="mb-6"
            >
              <div className="text-center mb-4">
                <p className="text-white/80 text-sm mb-2">{t('results.yourNumber')}</p>
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30">
                  <span className="text-4xl font-bold text-white">{result.destinyNumber}</span>
                </div>
                {result.isMasterNumber && (
                  <p className="text-saffron-200 text-sm mt-2">
                    {locale === 'en' ? 'Master Number' : 'मास्टर नंबर'}
                  </p>
                )}
              </div>

              {/* Micro-Tags */}
              {meaning.microTags && meaning.microTags.length > 0 && (
                <div className="flex justify-center flex-wrap gap-2 mb-4">
                  {meaning.microTags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/20 text-white rounded-full text-sm font-medium"
                    >
                      {tag[locale as 'en' | 'hi']}
                    </span>
                  ))}
                </div>
              )}

              {/* Headline */}
              {meaning.headline && (
                <p className="text-lg font-semibold text-white/90 text-center max-w-xl mx-auto">
                  {meaning.headline[locale as 'en' | 'hi']}
                </p>
              )}

              <div className="flex justify-center mt-6">
                <ShareResult
                  title={`My Destiny Number is ${result.destinyNumber}`}
                  text={`I discovered my Destiny Number is ${result.destinyNumber} - ${meaning.title.en}! Calculate yours:`}
                  url={`https://tools.vastucart.in/${locale}/tools/destiny-number`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </div>
            </HeroResultCard>

            {/* Letter Breakdown */}
            <SectionCard
              title={t('results.breakdown')}
              accentBorder="teal"
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
                    finalNumber={result.destinyNumber}
                    isMasterNumber={result.isMasterNumber}
                  />
                </div>
              )}
            </SectionCard>

            {/* Core Combo - Life Path + Destiny Synergy */}
            <SectionCard
              title={locale === 'en' ? '🔗 Your Core Combo' : '🔗 आपका मुख्य संयोजन'}
              accentBorder="saffron"
              className="mb-6"
            >
              <p className="text-gray-700 leading-relaxed">
                {locale === 'en'
                  ? `Your Destiny Number ${result.destinyNumber} shows how you're meant to use your talents. For a complete picture, combine this with your Life Path Number—your Life Path reveals your natural gifts, while Destiny shows how you express them to the world.`
                  : `आपका भाग्य अंक ${result.destinyNumber} दिखाता है कि आपको अपनी प्रतिभाओं का उपयोग कैसे करना है। पूरी तस्वीर के लिए, इसे अपने जीवन पथ अंक के साथ जोड़ें—जीवन पथ आपकी प्राकृतिक प्रतिभाओं को प्रकट करता है, जबकि भाग्य अंक दिखाता है कि आप उन्हें दुनिया में कैसे व्यक्त करते हैं।`}
              </p>
            </SectionCard>

            {/* Meaning Overview */}
            <ResultCard title={t('results.meaning')} className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {meaning.overview[locale as 'en' | 'hi']}
              </p>
            </ResultCard>

            {/* Talents & Challenges */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ResultCard title={t('results.talents')}>
                <TraitList
                  title=""
                  traits={meaning.talents.map((t) => t[locale as 'en' | 'hi'])}
                  type="positive"
                />
              </ResultCard>

              <ResultCard title={t('results.challenges')}>
                <TraitList
                  title=""
                  traits={meaning.challenges.map((t) => t[locale as 'en' | 'hi'])}
                  type="negative"
                />
              </ResultCard>
            </div>

            {/* Life Goals & Careers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ResultCard title={t('results.lifeGoals')}>
                <ul className="space-y-2">
                  {meaning.lifeGoals.map((goal, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-700">
                      <span className="text-teal-500">◆</span>
                      {goal[locale as 'en' | 'hi']}
                    </li>
                  ))}
                </ul>
              </ResultCard>

              <ResultCard title={t('results.careers')}>
                <div className="flex flex-wrap gap-2 mb-4">
                  {meaning.careers.map((career, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium"
                    >
                      {career[locale as 'en' | 'hi']}
                    </span>
                  ))}
                </div>
                {/* Modern Careers */}
                {meaning.modernCareers && meaning.modernCareers.length > 0 && (
                  <>
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">
                      {locale === 'en' ? '🚀 Modern Roles' : '🚀 आधुनिक भूमिकाएं'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {meaning.modernCareers.map((career, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-sm font-medium"
                        >
                          {career[locale as 'en' | 'hi']}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </ResultCard>
            </div>

            {/* Advice */}
            <Card className="mb-6 bg-gradient-to-r from-teal-50 to-saffron-50 border-teal-200">
              <h3 className="text-lg font-semibold text-teal-800 mb-3">
                {t('results.advice')}
              </h3>
              <p className="text-teal-700 leading-relaxed">
                {meaning.advice[locale as 'en' | 'hi']}
              </p>
            </Card>

            {/* Celebrities with same Destiny Number */}
            {getCelebritiesByDestiny(result.destinyNumber).length > 0 && (
              <ResultCard
                title={locale === 'en' ? 'Famous Personalities' : 'प्रसिद्ध हस्तियां'}
                className="mb-6"
              >
                <p className="text-sm text-gray-500 mb-3">
                  {locale === 'en'
                    ? `These public figures are also Destiny Number ${result.destinyNumber} (approximate numerology analysis).`
                    : `ये सार्वजनिक हस्तियां भी भाग्य अंक ${result.destinyNumber} हैं (अनुमानित अंकशास्त्र विश्लेषण)।`}
                </p>
                <CelebrityList
                  celebrities={getCelebritiesByDestiny(result.destinyNumber).map(c => ({
                    name: locale === 'hi' ? c.nameHi : c.name,
                    profession: locale === 'hi' ? c.professionHi : c.profession,
                  }))}
                  label=""
                />
              </ResultCard>
            )}

            {/* Related Tools */}
            <RelatedToolsSection
              tools={relatedTools}
              locale={locale as 'en' | 'hi'}
            />

            {/* Try Another Name */}
            <Card className="mb-6 bg-gradient-to-r from-cream-100 to-cream-200 border-none">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {locale === 'en' ? 'Try Another Name' : 'दूसरा नाम आज़माएं'}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {locale === 'en'
                      ? 'Compare your married name or different spellings'
                      : 'अपने विवाहित नाम या विभिन्न वर्तनी की तुलना करें'}
                  </p>
                </div>
                <Button variant="secondary" onClick={handleReset}>
                  {locale === 'en' ? 'Analyze Another' : 'एक और विश्लेषण'}
                </Button>
              </div>
            </Card>
        </div>
      )}

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title={tCommon('faq')} />
    </ToolLayout>
  );
}
