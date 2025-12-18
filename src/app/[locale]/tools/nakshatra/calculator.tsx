'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Star } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BirthDatePicker } from '@/components/ui/birth-date-picker';
import { TimePicker } from '@/components/ui/time-picker';
import { PlacePicker } from '@/components/ui/place-picker';
import { ResultCard, TraitList, CelebrityList } from '@/components/tools/result-display';
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard, SectionInfoRow } from '@/components/ui/section-card';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

import {
  calculateMoonSign,
  type Place,
} from '@/lib/astrology';
import { getNakshatraMeaning } from '@/lib/astrology/data/nakshatra-meanings';
import { getCelebritiesBySunSign } from '@/lib/data/celebrities';

interface NakshatraCalculatorProps {
  locale: 'en' | 'hi';
}

interface CalculationResult {
  nakshatraIndex: number;
  nakshatraName: { en: string; hi: string };
  nakshatraLord: string;
  pada: number;
  moonSign: number;
  moonSignName: { en: string; hi: string };
  moonLongitude: number;
}

export default function NakshatraCalculator({ locale }: NakshatraCalculatorProps) {
  const t = useTranslations('tools.astrology.nakshatra');
  const tCommon = useTranslations('common');

  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthHour, setBirthHour] = useState<string>('12');
  const [birthMinute, setBirthMinute] = useState<string>('00');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // Result state
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    if (!birthDate) {
      setError(locale === 'en' ? 'Please select your birth date' : 'कृपया अपनी जन्म तिथि चुनें');
      return;
    }

    if (!selectedPlace) {
      setError(locale === 'en' ? 'Please select a birth place' : 'कृपया जन्म स्थान चुनें');
      return;
    }

    const latitude = selectedPlace.lat;
    const longitude = selectedPlace.lng;
    const timezone = selectedPlace.tz;

    setIsCalculating(true);

    try {
      const moonResult = calculateMoonSign({
        year: birthDate.getFullYear(),
        month: birthDate.getMonth() + 1,
        day: birthDate.getDate(),
        hour: parseInt(birthHour),
        minute: parseInt(birthMinute),
        latitude,
        longitude,
        timezone,
      });

      setResult({
        nakshatraIndex: moonResult.nakshatra.index,
        nakshatraName: moonResult.nakshatra.name,
        nakshatraLord: moonResult.nakshatra.lord,
        pada: moonResult.pada,
        moonSign: moonResult.sign.index,
        moonSignName: moonResult.sign.name,
        moonLongitude: moonResult.moonLongitude,
      });
    } catch (err) {
      setError(locale === 'en' ? 'Error in calculation. Please try again.' : 'गणना में त्रुटि। कृपया पुनः प्रयास करें।');
    } finally {
      setIsCalculating(false);
    }
  };

  const handleReset = () => {
    setBirthDate(null);
    setBirthHour('12');
    setBirthMinute('00');
    setSelectedPlace(null);
    setResult(null);
    setError(null);
  };

  const nakshatraMeaning = result ? getNakshatraMeaning(result.nakshatraIndex) : null;

  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="⭐"
      category="astrology"
      categoryLabel={locale === 'en' ? 'Astrology' : 'ज्योतिष'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <Calculator className="w-5 h-5 text-deepteal-500" />
            {t('form.title')}
          </h2>

          <div className="space-y-6">
            {/* Birth Date */}
            <BirthDatePicker
              value={birthDate}
              onChange={setBirthDate}
              locale={locale}
              label={t('form.birthDate')}
              required
            />

            {/* Birth Time */}
            <TimePicker
              hour={birthHour}
              minute={birthMinute}
              onHourChange={setBirthHour}
              onMinuteChange={setBirthMinute}
              locale={locale}
              label={t('form.birthTime')}
            />

            {/* Birth Place */}
            <PlacePicker
              value={selectedPlace}
              onChange={setSelectedPlace}
              locale={locale}
              label={t('form.birthPlace')}
              showManualInput
            />

            {/* Error Message */}
            {error && (
              <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                {error}
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-3">
              <Button
                onClick={handleCalculate}
                disabled={isCalculating}
                className="flex-1 bg-gradient-to-r from-deepteal-500 to-deepteal-600 text-white"
              >
                {isCalculating ? (
                  <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
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
            blogLink={`/${locale}/blog/nakshatra-birth-star-guide`}
            blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
          />
        )}

        {/* Results */}
        {result && nakshatraMeaning && (
          <div className="animate-fade-in-up space-y-6">
              {/* Main Result Card */}
              <HeroResultCard
                title={t('results.title')}
                subtitle={locale === 'en' ? 'Birth Star Analysis' : 'जन्म नक्षत्र विश्लेषण'}
                icon={<Star className="w-6 h-6 text-white" />}
              >
                <div className="text-center py-6">
                  <div className="text-5xl mb-3">
                    {nakshatraMeaning.symbol}
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {locale === 'hi' ? result.nakshatraName.hi : result.nakshatraName.en}
                  </h3>
                  <p className="text-deepteal-200 text-lg">
                    {t('results.pada')} {result.pada}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                  <HeroStatCard
                    label={t('results.lord')}
                    value={result.nakshatraLord}
                  />
                  <HeroStatCard
                    label={t('results.moonIn')}
                    value={locale === 'hi' ? result.moonSignName.hi : result.moonSignName.en}
                  />
                  <HeroStatCard
                    label={t('results.deity')}
                    value={nakshatraMeaning.deity}
                  />
                </div>

                <div className="mt-6">
                  <ShareResult
                    title={`My Nakshatra is ${result.nakshatraName.en}`}
                    text={`I discovered my Nakshatra is ${result.nakshatraName.en} (${result.nakshatraName.hi}) Pada ${result.pada}! Find yours:`}
                    url={`https://tools.vastucart.in/${locale}/tools/nakshatra`}
                    shareLabel={tCommon('share')}
                    copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                  />
                </div>
              </HeroResultCard>

              {/* Nakshatra Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Basic Info */}
                <SectionCard title={t('results.basicInfo')}>
                  <div className="space-y-1">
                    <SectionInfoRow label={t('results.deity')} value={nakshatraMeaning.deity} />
                    <SectionInfoRow label={t('results.symbol')} value={nakshatraMeaning.symbol} />
                    <SectionInfoRow label={t('results.animal')} value={locale === 'hi' ? nakshatraMeaning.animal.hi : nakshatraMeaning.animal.en} />
                    <SectionInfoRow label={t('results.gana')} value={locale === 'hi' ? nakshatraMeaning.gana.hi : nakshatraMeaning.gana.en} />
                    <SectionInfoRow label={t('results.guna')} value={locale === 'hi' ? nakshatraMeaning.guna.hi : nakshatraMeaning.guna.en} />
                    <SectionInfoRow label={t('results.nadi')} value={locale === 'hi' ? nakshatraMeaning.nadi.hi : nakshatraMeaning.nadi.en} />
                    <SectionInfoRow label={t('results.element')} value={locale === 'hi' ? nakshatraMeaning.element.hi : nakshatraMeaning.element.en} />
                  </div>
                </SectionCard>

                {/* Lucky Factors */}
                <SectionCard title={t('results.luckyFactors')} accentBorder="warmaccent">
                  <div className="space-y-1">
                    <SectionInfoRow label={t('results.luckyNumbers')} value={nakshatraMeaning.luckyNumbers.join(', ')} highlight />
                    <SectionInfoRow label={t('results.luckyColors')} value={nakshatraMeaning.luckyColors.map(c => locale === 'hi' ? c.hi : c.en).join(', ')} />
                    <SectionInfoRow label={t('results.luckyGems')} value={nakshatraMeaning.luckyGems.map(g => locale === 'hi' ? g.hi : g.en).join(', ')} />
                    <SectionInfoRow label={t('results.direction')} value={locale === 'hi' ? nakshatraMeaning.direction.hi : nakshatraMeaning.direction.en} />
                    <SectionInfoRow label={t('results.bodyPart')} value={locale === 'hi' ? nakshatraMeaning.bodyPart.hi : nakshatraMeaning.bodyPart.en} />
                  </div>
                </SectionCard>
              </div>

              {/* Personality */}
              <SectionCard title={t('results.personality')}>
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'hi' ? nakshatraMeaning.personality.hi : nakshatraMeaning.personality.en}
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
                    traits={locale === 'hi' ? nakshatraMeaning.strengths.hi : nakshatraMeaning.strengths.en}
                    type="positive"
                  />
                </ResultCard>

                <ResultCard
                  title={t('results.weaknesses')}
                  className="bg-red-50 border-red-200"
                >
                  <TraitList
                    title=""
                    traits={locale === 'hi' ? nakshatraMeaning.weaknesses.hi : nakshatraMeaning.weaknesses.en}
                    type="negative"
                  />
                </ResultCard>
              </div>

              {/* Career */}
              <SectionCard title={t('results.career')}>
                <div className="flex flex-wrap gap-2">
                  {(locale === 'hi' ? nakshatraMeaning.career.hi : nakshatraMeaning.career.en).map((c, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-deepteal-100 text-deepteal-700 rounded-full text-sm"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </SectionCard>

              {/* Health */}
              <SectionCard title={t('results.health')}>
                <p className="text-gray-700">
                  {locale === 'hi' ? nakshatraMeaning.health.hi : nakshatraMeaning.health.en}
                </p>
              </SectionCard>

              {/* Name Syllables */}
              <SectionCard title={t('results.nameSyllables')} accentBorder="warmaccent">
                <div className="flex flex-wrap gap-4">
                  {nakshatraMeaning.syllables.map((s, i) => (
                    <div
                      key={i}
                      className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center bg-gradient-to-br from-warmaccent-100 to-deepteal-100 rounded-lg text-xl sm:text-2xl font-bold text-deepteal-700"
                    >
                      {s}
                    </div>
                  ))}
                </div>
                <p className="mt-3 text-sm text-gray-600">
                  {t('results.syllablesHint')}
                </p>
              </SectionCard>

              {/* Celebrities with same Moon Sign */}
              {getCelebritiesBySunSign(result.moonSign).length > 0 && (
                <SectionCard title={locale === 'en' ? `Famous ${result.moonSignName.en} Personalities` : `प्रसिद्ध ${result.moonSignName.hi} व्यक्तित्व`}>
                  <CelebrityList
                    celebrities={getCelebritiesBySunSign(result.moonSign).map(c => ({
                      name: locale === 'hi' ? c.nameHi : c.name,
                      profession: locale === 'hi' ? c.professionHi : c.profession,
                    }))}
                    label=""
                  />
                </SectionCard>
              )}
          </div>
        )}

        {result && (
          <RelatedToolsSection
            tools={relatedTools}
            locale={locale as 'en' | 'hi'}
          />
        )}

        {/* FAQ Section */}
        <FAQSection
          title={tCommon('faq')}
          faqs={faqs}
        />
      </div>
    </ToolLayout>
  );
}

