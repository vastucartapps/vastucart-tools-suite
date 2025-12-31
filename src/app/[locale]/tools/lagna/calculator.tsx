'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, Sunrise } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BirthDatePicker } from '@/components/ui/birth-date-picker';
import { TimePicker } from '@/components/ui/time-picker';
import { PlacePicker } from '@/components/ui/place-picker';
import { ResultCard, TraitList } from '@/components/tools/result-display';
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard, SectionInfoRow } from '@/components/ui/section-card';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

import {
  calculateLagna,
  ZODIAC_SIGNS,
  type Place,
} from '@/lib/astrology';
import { getLagnaMeaning } from '@/lib/astrology/data/lagna-meanings';

interface LagnaCalculatorProps {
  locale: 'en' | 'hi';
}

interface LagnaResultData {
  signIndex: number;
  signName: { en: string; hi: string };
  degree: number;
  ascendant: number;
}

export default function LagnaCalculator({ locale }: LagnaCalculatorProps) {
  const t = useTranslations('tools.astrology.lagna');
  const tCommon = useTranslations('common');

  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // Result state
  const [result, setResult] = useState<LagnaResultData | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    if (!birthDate) {
      setError(locale === 'en' ? 'Please select birth date' : 'कृपया जन्म तिथि चुनें');
      return;
    }

    if (!selectedPlace) {
      setError(locale === 'en' ? 'Please select a birth place' : 'कृपया जन्म स्थान चुनें');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      try {
        const lagnaResult = calculateLagna({
          year: birthDate.getFullYear(),
          month: birthDate.getMonth() + 1,
          day: birthDate.getDate(),
          hour: parseInt(birthHour),
          minute: parseInt(birthMinute),
          latitude: selectedPlace.lat,
          longitude: selectedPlace.lng,
          timezone: selectedPlace.tz,
        });

        // Find sign index
        const signIndex = ZODIAC_SIGNS.findIndex(s => s.name.en === lagnaResult.sign.name.en);

        setResult({
          signIndex,
          signName: lagnaResult.sign.name,
          degree: lagnaResult.degree,
          ascendant: lagnaResult.ascendant,
        });
      } catch (err) {
        setError(locale === 'en' ? 'Calculation error. Please check inputs.' : 'गणना त्रुटि। कृपया इनपुट जांचें।');
      } finally {
        setIsCalculating(false);
      }
    }, 500);
  };

  const handleReset = () => {
    setBirthDate(null);
    setBirthHour('12');
    setBirthMinute('00');
    setSelectedPlace(null);
    setResult(null);
    setError(null);
  };

  // Get lagna meaning for display
  const lagnaMeaning = result ? getLagnaMeaning(result.signIndex) : null;

  // FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="🌅"
      category="astrology"
      categoryLabel={locale === 'en' ? 'Astrology' : 'ज्योतिष'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {t('form.title')}
          </h2>

          <div className="space-y-6">
            {/* Birth Date */}
            <div>
              <BirthDatePicker
                label={t('form.birthDate')}
                value={birthDate}
                onChange={setBirthDate}
                locale={locale}
              />
            </div>

            {/* Birth Time */}
            <TimePicker
              label={t('form.birthTime')}
              hour={birthHour}
              minute={birthMinute}
              onHourChange={setBirthHour}
              onMinuteChange={setBirthMinute}
              locale={locale}
              required
            />

            {/* Birth Place */}
            <PlacePicker
              label={t('form.birthPlace')}
              value={selectedPlace}
              onChange={setSelectedPlace}
              locale={locale}
              required
              showManualInput
            />

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
                {t('form.calculate')}
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
            blogLink={`/${locale}/blog/lagna-ascendant-guide`}
            blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
          />
        )}

        {/* Results Section */}
          {result && lagnaMeaning && (
            <div className="animate-fade-in-up space-y-6">
              {/* Main Result */}
              <HeroResultCard
                title={t('results.yourLagna')}
                subtitle={locale === 'en' ? 'Vedic Ascendant Analysis' : 'वैदिक लग्न विश्लेषण'}
                icon={<Sunrise className="w-6 h-6 text-white" />}
              >
                <div className="text-center py-6">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {locale === 'hi' ? result.signName.hi : result.signName.en}
                  </h2>
                  <p className="text-white/90 text-lg">
                    {locale === 'hi' ? result.signName.en : result.signName.hi}
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-4">
                  <HeroStatCard
                    label={t('results.degree')}
                    value={`${result.degree.toFixed(2)}°`}
                  />
                  <HeroStatCard
                    label={t('results.lord')}
                    value={lagnaMeaning.lord}
                  />
                  <HeroStatCard
                    label={locale === 'en' ? 'Element' : 'तत्व'}
                    value={locale === 'hi' ? lagnaMeaning.element.hi : lagnaMeaning.element.en}
                  />
                </div>

                <div className="mt-6">
                  <ShareResult
                    title={`My Lagna is ${result.signName.en}`}
                    text={`I discovered my Lagna (Ascendant) is ${result.signName.en} (${result.signName.hi})! Find yours:`}
                    url={`https://vastucart.in/${locale}/tools/lagna`}
                    shareLabel={tCommon('share')}
                    copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                  />
                </div>
              </HeroResultCard>

              {/* Lagna Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Info */}
                <SectionCard title={t('results.basicInfo')}>
                  <div className="space-y-1">
                    <SectionInfoRow label={t('results.element')} value={locale === 'hi' ? lagnaMeaning.element.hi : lagnaMeaning.element.en} />
                    <SectionInfoRow label={t('results.quality')} value={locale === 'hi' ? lagnaMeaning.quality.hi : lagnaMeaning.quality.en} />
                    <SectionInfoRow label={t('results.rulingPlanet')} value={lagnaMeaning.lord} />
                    <SectionInfoRow label={t('results.bodyPart')} value={lagnaMeaning.bodyPart} />
                    <SectionInfoRow label={t('results.gemstone')} value={lagnaMeaning.gemstone} highlight />
                  </div>
                </SectionCard>

                {/* Lucky Factors */}
                <SectionCard title={t('results.luckyFactors')} accentBorder="warmaccent">
                  <div className="space-y-1">
                    <SectionInfoRow label={t('results.luckyColor')} value={locale === 'hi' ? lagnaMeaning.luckyColor.hi : lagnaMeaning.luckyColor.en} />
                    <SectionInfoRow label={t('results.luckyDay')} value={locale === 'hi' ? lagnaMeaning.luckyDay.hi : lagnaMeaning.luckyDay.en} />
                    <SectionInfoRow label={t('results.luckyNumbers')} value={lagnaMeaning.luckyNumber.join(', ')} highlight />
                  </div>
                </SectionCard>
              </div>

              {/* Physical Traits */}
              <SectionCard title={t('results.physicalTraits')}>
                <div className="flex flex-wrap gap-2">
                  {(locale === 'hi' ? lagnaMeaning.physicalTraits.hi : lagnaMeaning.physicalTraits.en).map((trait, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-deepteal-100 text-deepteal-700 rounded-full text-sm"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </SectionCard>

              {/* Personality */}
              <SectionCard title={t('results.personality')}>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'hi' ? lagnaMeaning.personality.hi : lagnaMeaning.personality.en}
                </p>
              </SectionCard>

              {/* Strengths & Weaknesses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <ResultCard
                  title={t('results.strengths')}
                  className="bg-green-50 border-green-200"
                >
                  <TraitList
                    title=""
                    traits={locale === 'hi' ? lagnaMeaning.strengths.hi : lagnaMeaning.strengths.en}
                    type="positive"
                  />
                </ResultCard>

                <ResultCard
                  title={t('results.weaknesses')}
                  className="bg-red-50 border-red-200"
                >
                  <TraitList
                    title=""
                    traits={locale === 'hi' ? lagnaMeaning.weaknesses.hi : lagnaMeaning.weaknesses.en}
                    type="negative"
                  />
                </ResultCard>
              </div>

              {/* Career */}
              <SectionCard title={t('results.career')}>
                <div className="flex flex-wrap gap-2">
                  {(locale === 'hi' ? lagnaMeaning.career.hi : lagnaMeaning.career.en).map((c, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-deepteal-100 text-deepteal-700 rounded-full text-sm"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </SectionCard>

              {/* Health & Relationships */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <SectionCard title={t('results.health')}>
                  <p className="text-gray-700">
                    {locale === 'hi' ? lagnaMeaning.health.hi : lagnaMeaning.health.en}
                  </p>
                </SectionCard>

                <SectionCard title={t('results.relationships')}>
                  <p className="text-gray-700">
                    {locale === 'hi' ? lagnaMeaning.relationships.hi : lagnaMeaning.relationships.en}
                  </p>
                </SectionCard>
              </div>
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

