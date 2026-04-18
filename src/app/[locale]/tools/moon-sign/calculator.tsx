'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Moon } from 'lucide-react';

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
  ZODIAC_SIGNS,
  NAKSHATRAS,
  type Place,
} from '@/lib/astrology';
import { getMoonSignMeaning } from '@/lib/astrology/data/moon-sign-meanings';
import { getCelebritiesBySunSign } from '@/lib/data/celebrities';

interface MoonSignCalculatorProps {
  locale: 'en' | 'hi';
}

interface CalculationResult {
  sign: typeof ZODIAC_SIGNS[number];
  nakshatra: typeof NAKSHATRAS[number];
  pada: number;
  moonLongitude: number;
  degreeInSign: number;
}

export function MoonSignCalculator({ locale }: MoonSignCalculatorProps) {
  const t = useTranslations('tools.astrology.moonSign');
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

    setTimeout(() => {
      try {
        const moonSignResult = calculateMoonSign({
          year: birthDate.getFullYear(),
          month: birthDate.getMonth() + 1,
          day: birthDate.getDate(),
          hour: parseInt(birthHour),
          minute: parseInt(birthMinute),
          latitude,
          longitude,
          timezone,
        });

        setResult(moonSignResult);
        setIsCalculating(false);
      } catch (err) {
        setError(locale === 'en' ? 'Calculation error. Please try again.' : 'गणना त्रुटि। कृपया पुनः प्रयास करें।');
        setIsCalculating(false);
      }
    }, 600);
  };

  const handleReset = () => {
    setBirthDate(null);
    setBirthHour('12');
    setBirthMinute('00');
    setSelectedPlace(null);
    setResult(null);
    setError(null);
  };

  const meaning = result ? getMoonSignMeaning(result.sign.index) : null;

  // FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="" iconName="Moon"
      category="astrology"
      categoryLabel={locale === 'en' ? 'Astrology' : 'ज्योतिष'}
    >
      {/* Input Form */}
      <Card className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {locale === 'en' ? 'Enter Birth Details' : 'जन्म विवरण दर्ज करें'}
        </h2>

        <div className="space-y-6 mb-6">
          {/* Birth Date */}
          <BirthDatePicker
            value={birthDate}
            onChange={setBirthDate}
            locale={locale}
            label={locale === 'en' ? 'Date of Birth' : 'जन्म तिथि'}
            required
          />

          {/* Birth Time */}
          <TimePicker
            hour={birthHour}
            minute={birthMinute}
            onHourChange={setBirthHour}
            onMinuteChange={setBirthMinute}
            locale={locale}
            label={locale === 'en' ? 'Time of Birth' : 'जन्म का समय'}
          />

          {/* Birth Place */}
          <PlacePicker
            value={selectedPlace}
            onChange={setSelectedPlace}
            locale={locale}
            label={locale === 'en' ? 'Birth Place' : 'जन्म स्थान'}
            showManualInput
          />
        </div>

        {error && (
          <p className="text-red-500 text-sm mb-4">{error}</p>
        )}

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

      {!result && (
        <EducationalSection
          title={educational.title}
          content={educational.content}
          blogLink="/blog/moon-sign-rashi-guide"
          blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
        />
      )}

      {/* Results */}
      {result && meaning && (
        <div className="animate-fade-in-up space-y-6">
            {/* Main Result Card */}
            <HeroResultCard
              title={t('results.yourMoonSign')}
              subtitle={locale === 'en' ? 'Vedic Moon Sign Analysis' : 'वैदिक चंद्र राशि विश्लेषण'}
              icon={<Moon className="w-6 h-6 text-white" />}
            >
              <div className="text-center py-6">
                <span className="text-6xl mb-3 block">{result.sign.symbol}</span>
                <h3 className="text-3xl font-bold text-white mb-1">
                  {result.sign.name[locale]}
                </h3>
                <p className="text-white/90 text-lg">
                  {locale === 'en' ? result.sign.name.hi : result.sign.name.en}
                </p>
              </div>

              {/* Nakshatra Info Panel */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 mb-4 border border-white/20">
                <p className="text-sm text-white/90 mb-1">
                  {locale === 'en' ? 'Your Nakshatra' : 'आपका नक्षत्र'}
                </p>
                <p className="text-xl font-semibold text-white">
                  {result.nakshatra.name[locale]} - {locale === 'en' ? 'Pada' : 'पाद'} {result.pada}
                </p>
                <p className="text-sm text-deepteal-300 mt-1">
                  {locale === 'en' ? `Moon at ${result.degreeInSign.toFixed(2)}° in ${result.sign.name.en}` : `${result.sign.name.hi} में चंद्रमा ${result.degreeInSign.toFixed(2)}° पर`}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <HeroStatCard
                  label={locale === 'en' ? 'Element' : 'तत्व'}
                  value={meaning.element}
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Ruling Planet' : 'स्वामी ग्रह'}
                  value={meaning.rulingPlanet}
                />
              </div>

              <div className="mt-6">
                <ShareResult
                  title={`My Moon Sign is ${result.sign.name.en}`}
                  text={`I discovered my Moon Sign is ${result.sign.name.en} (${result.sign.name.hi}) with Nakshatra ${result.nakshatra.name.en}! Find yours:`}
                  url={locale === 'en' ? `https://www.vastucart.in/tools/moon-sign` : `https://www.vastucart.in/${locale}/tools/moon-sign`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </div>
            </HeroResultCard>

            <p className="text-[13px] text-gray-500">
              <a href={`https://horoscope.vastucart.in${locale === 'hi' ? '/hi' : ''}/rashi/${result.sign.name.en.toLowerCase()}/daily/${new Date().toISOString().split('T')[0]}`} className="text-deepteal-600 hover:text-deepteal-700 underline">
                {locale === 'hi' ? `आज का ${result.sign.name.hi} राशिफल देखें →` : `See today's ${result.sign.name.en} rashifal →`}
              </a>
            </p>

            {/* Overview */}
            <SectionCard title={t('results.overview')}>
              <p className="text-gray-700 leading-relaxed">
                {meaning.overview[locale]}
              </p>
            </SectionCard>

            {/* Personality */}
            <SectionCard title={t('results.personality')}>
              <p className="text-gray-700 leading-relaxed">
                {meaning.personality[locale]}
              </p>
            </SectionCard>

            {/* Traits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <ResultCard title={t('results.positiveTraits')} className="bg-green-50 border-green-200">
                <TraitList
                  title=""
                  traits={meaning.positiveTraits.map((trait) => trait[locale])}
                  type="positive"
                />
              </ResultCard>

              <ResultCard title={t('results.negativeTraits')} className="bg-red-50 border-red-200">
                <TraitList
                  title=""
                  traits={meaning.negativeTraits.map((trait) => trait[locale])}
                  type="negative"
                />
              </ResultCard>
            </div>

            {/* Emotional Nature */}
            <SectionCard title={t('results.emotionalNature')}>
              <p className="text-gray-700 leading-relaxed">
                {meaning.emotionalNature[locale]}
              </p>
            </SectionCard>

            {/* Relationships */}
            <SectionCard title={t('results.relationships')}>
              <p className="text-gray-700 leading-relaxed">
                {meaning.relationships[locale]}
              </p>
            </SectionCard>

            {/* Career & Lucky Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <SectionCard title={t('results.careerStrengths')}>
                <div className="flex flex-wrap gap-2">
                  {meaning.careerStrengths.map((career, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-deepteal-100 text-deepteal-800 rounded-full text-sm font-medium"
                    >
                      {career[locale]}
                    </span>
                  ))}
                </div>
              </SectionCard>

              <SectionCard title={t('results.luckyFactors')} accentBorder="warmaccent">
                <div className="space-y-1">
                  <SectionInfoRow label={locale === 'en' ? 'Color' : 'रंग'} value={meaning.luckyColor[locale]} />
                  <SectionInfoRow label={locale === 'en' ? 'Number' : 'अंक'} value={meaning.luckyNumber.toString()} highlight />
                  <SectionInfoRow label={locale === 'en' ? 'Day' : 'दिन'} value={meaning.luckyDay[locale]} />
                </div>
              </SectionCard>
            </div>

            {/* Spiritual Guidance */}
            <SectionCard title={t('results.spiritualGuidance')} accentBorder="warmaccent">
              <div className="space-y-1">
                <SectionInfoRow label={locale === 'en' ? 'Ruling Deity' : 'इष्ट देवता'} value={meaning.rulingDeity[locale]} />
                <SectionInfoRow label={locale === 'en' ? 'Mantra' : 'मंत्र'} value={meaning.mantra[locale]} />
              </div>
            </SectionCard>

            {/* Compatible Signs */}
            <SectionCard title={t('results.compatibleSigns')}>
              <div className="flex flex-wrap gap-3">
                {meaning.compatibleSigns.map((signIdx) => (
                  <div
                    key={signIdx}
                    className="flex items-center gap-2 px-4 py-2 bg-green-50 text-green-800 rounded-full"
                  >
                    <span className="text-xl">{ZODIAC_SIGNS[signIdx].symbol}</span>
                    <span className="font-medium">{ZODIAC_SIGNS[signIdx].name[locale]}</span>
                  </div>
                ))}
              </div>
            </SectionCard>

            {/* Celebrities with same sign */}
            {getCelebritiesBySunSign(result.sign.index).length > 0 && (
              <SectionCard title={locale === 'en' ? `Famous ${result.sign.name.en} Personalities` : `प्रसिद्ध ${result.sign.name.hi} व्यक्तित्व`}>
                <CelebrityList
                  celebrities={getCelebritiesBySunSign(result.sign.index).map(c => ({
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
      <FAQSection faqs={faqs} title={tCommon('faq')} />
    </ToolLayout>
  );
}
