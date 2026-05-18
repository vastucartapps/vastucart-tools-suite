'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { RefreshCw, Loader2, Gem, Check, X, AlertTriangle, Info } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BirthDatePicker } from '@/components/ui/birth-date-picker';
import { TimePicker } from '@/components/ui/time-picker';
import { PlacePicker } from '@/components/ui/place-picker';
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard, SectionInfoRow } from '@/components/ui/section-card';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

import { type Place } from '@/lib/astrology';
import { calculateGemstoneRecommendation, type GemstoneResult, type GemstoneRecommendation } from '@/lib/astrology/gemstone-recommender';

interface GemstoneRecommenderCalculatorProps {
  locale: 'en' | 'hi';
}

export default function GemstoneRecommenderCalculator({ locale }: GemstoneRecommenderCalculatorProps) {
  const t = useTranslations('tools.astrology.gemstoneRecommender');
  const tCommon = useTranslations('common');

  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);

  // Result state
  const [result, setResult] = useState<GemstoneResult | null>(null);
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
        const gemstoneResult = calculateGemstoneRecommendation({
          year: birthDate.getFullYear(),
          month: birthDate.getMonth() + 1,
          day: birthDate.getDate(),
          hour: parseInt(birthHour),
          minute: parseInt(birthMinute),
          latitude: selectedPlace.lat,
          longitude: selectedPlace.lng,
          timezone: selectedPlace.tz,
        });

        setResult(gemstoneResult);
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

  // Get FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as {
    title: string;
    content: string[];
    sections?: Array<{ heading: string; paragraphs: string[] }>;
  };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  // Strength badge color
  const getStrengthColor = (strength: 'strong' | 'moderate' | 'weak') => {
    if (strength === 'strong') return 'bg-green-100 text-green-800';
    if (strength === 'moderate') return 'bg-yellow-100 text-yellow-800';
    return 'bg-red-100 text-red-800';
  };

  // Render gemstone card
  const renderGemstoneCard = (recommendation: GemstoneRecommendation, isPrimary: boolean = false) => {
    const gemstone = recommendation.gemstone;

    return (
      <Card
        key={gemstone.planet}
        className={`p-6 ${isPrimary ? 'border-2 border-deepteal-400 bg-gradient-to-br from-deepteal-50 to-white' : ''}`}
      >
        <div className="flex items-start gap-4">
          {/* Gemstone Color Circle */}
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center shadow-lg flex-shrink-0"
            style={{ backgroundColor: gemstone.color }}
          >
            <Gem className="w-8 h-8 text-white drop-shadow" />
          </div>

          <div className="flex-1 min-w-0">
            {/* Header */}
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <h3 className="text-xl font-bold text-gray-900">
                {locale === 'hi' ? gemstone.name.hi : gemstone.name.en}
              </h3>
              {isPrimary && (
                <span className="px-2 py-0.5 bg-deepteal-500 text-white text-xs rounded-full font-medium">
                  {locale === 'en' ? 'PRIMARY' : 'प्राथमिक'}
                </span>
              )}
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getStrengthColor(recommendation.planetStrength)}`}>
                {recommendation.planetStrength === 'strong'
                  ? (locale === 'en' ? 'Strong' : 'मजबूत')
                  : recommendation.planetStrength === 'moderate'
                    ? (locale === 'en' ? 'Moderate' : 'मध्यम')
                    : (locale === 'en' ? 'Needs Support' : 'सहारे की जरूरत')}
              </span>
            </div>

            {/* Alternative Name & Planet */}
            <p className="text-sm text-gray-500 mb-2">
              {locale === 'hi' ? gemstone.alternativeName.hi : gemstone.alternativeName.en} • {locale === 'hi' ? gemstone.planetName.hi : gemstone.planetName.en}
            </p>

            {/* Reason */}
            <p className="text-gray-700 mb-4">
              {locale === 'hi' ? recommendation.reason.hi : recommendation.reason.en}
            </p>

            {/* Benefits */}
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-900 mb-2">
                {locale === 'en' ? 'Benefits:' : 'लाभ:'}
              </h4>
              <ul className="space-y-1">
                {gemstone.benefits.slice(0, 3).map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    {locale === 'hi' ? benefit.hi : benefit.en}
                  </li>
                ))}
              </ul>
            </div>

            {/* Wearing Details */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <div className="p-2 bg-gray-50 rounded min-w-0">
                <p className="text-gray-500 text-xs">{locale === 'en' ? 'Metal' : 'धातु'}</p>
                <p className="font-medium truncate">{locale === 'hi' ? gemstone.metal.hi : gemstone.metal.en}</p>
              </div>
              <div className="p-2 bg-gray-50 rounded min-w-0">
                <p className="text-gray-500 text-xs">{locale === 'en' ? 'Finger' : 'उंगली'}</p>
                <p className="font-medium truncate">{locale === 'hi' ? gemstone.finger.hi : gemstone.finger.en}</p>
              </div>
              <div className="p-2 bg-gray-50 rounded min-w-0">
                <p className="text-gray-500 text-xs">{locale === 'en' ? 'Weight' : 'वजन'}</p>
                <p className="font-medium truncate">{locale === 'hi' ? gemstone.weight.hi : gemstone.weight.en}</p>
              </div>
              <div className="p-2 bg-gray-50 rounded min-w-0">
                <p className="text-gray-500 text-xs">{locale === 'en' ? 'Day' : 'दिन'}</p>
                <p className="font-medium truncate text-xs">{locale === 'hi' ? gemstone.day.hi.split(' ')[0] : gemstone.day.en.split(' ')[0]}</p>
              </div>
            </div>

            {/* Mantra */}
            <div className="mt-4 p-3 bg-orange-50 rounded-lg">
              <p className="text-sm text-orange-800">
                <span className="font-semibold">{locale === 'en' ? 'Mantra: ' : 'मंत्र: '}</span>
                {locale === 'hi' ? gemstone.mantra.hi : gemstone.mantra.en}
              </p>
            </div>

            {/* Cautions */}
            {gemstone.cautions.length > 0 && (
              <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                <p className="text-sm font-semibold text-amber-800 mb-1 flex items-center gap-1">
                  <AlertTriangle className="w-4 h-4" />
                  {locale === 'en' ? 'Cautions:' : 'सावधानियां:'}
                </p>
                <ul className="space-y-1">
                  {gemstone.cautions.map((caution, idx) => (
                    <li key={idx} className="text-sm text-amber-700">
                      • {locale === 'hi' ? caution.hi : caution.en}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </Card>
    );
  };

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="" iconName="Gem"
      category="astrology"
      categoryLabel={locale === 'en' ? 'Astrology' : 'ज्योतिष'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {locale === 'en' ? 'Enter Birth Details' : 'जन्म विवरण दर्ज करें'}
          </h2>

          <div className="space-y-6">
            {/* Birth Date */}
            <BirthDatePicker
              label={locale === 'en' ? 'Birth Date' : 'जन्म तिथि'}
              value={birthDate}
              onChange={setBirthDate}
              locale={locale}
              required
            />

            {/* Birth Time */}
            <TimePicker
              label={locale === 'en' ? 'Birth Time' : 'जन्म समय'}
              hour={birthHour}
              minute={birthMinute}
              onHourChange={setBirthHour}
              onMinuteChange={setBirthMinute}
              locale={locale}
              required
            />

            {/* Birth Place */}
            <PlacePicker
              label={locale === 'en' ? 'Birth Place' : 'जन्म स्थान'}
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
            <div className="flex flex-col sm:flex-row gap-3">
              <Button onClick={handleCalculate} disabled={isCalculating} className="flex-1 sm:flex-initial">
                {isCalculating ? (
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                ) : (
                  <Gem className="w-4 h-4 mr-2" />
                )}
                {locale === 'en' ? 'Find My Lucky Gemstone' : 'मेरा भाग्यशाली रत्न खोजें'}
              </Button>
              <Button onClick={handleReset} variant="secondary" className="w-full sm:w-auto">
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
            sections={educational.sections}
          />
        )}

        {/* Results Section */}
        {result && (
          <div className="animate-fade-in-up space-y-6">
            {/* Chart Summary Hero */}
            <HeroResultCard
              title={locale === 'en' ? 'Your Lucky Gemstone' : 'आपका भाग्यशाली रत्न'}
              subtitle={locale === 'en' ? 'Personalized Gemstone Recommendation' : 'व्यक्तिगत रत्न सिफारिश'}
              icon={<Gem className="w-6 h-6 text-white" />}
              colorScheme="warmaccent"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <HeroStatCard
                  label={locale === 'en' ? 'Ascendant (Lagna)' : 'लग्न'}
                  value={`${result.ascendant.sign.symbol} ${locale === 'hi' ? result.ascendant.sign.name.hi : result.ascendant.sign.name.en}`}
                  subValue={`${locale === 'en' ? 'Lord:' : 'स्वामी:'} ${result.ascendant.lord.charAt(0).toUpperCase() + result.ascendant.lord.slice(1)}`}
                  colorScheme="warmaccent"
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Moon Sign (Rashi)' : 'चंद्र राशि'}
                  value={`${result.moonSign.sign.symbol} ${locale === 'hi' ? result.moonSign.sign.name.hi : result.moonSign.sign.name.en}`}
                  subValue={result.moonSign.nakshatra}
                  colorScheme="warmaccent"
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Lagna Lord Position' : 'लग्नेश स्थिति'}
                  value={result.ascendant.lordPosition.sign.symbol}
                  subValue={locale === 'en' ? `House ${result.ascendant.lordPosition.house}` : `${result.ascendant.lordPosition.house}वां भाव`}
                  colorScheme="warmaccent"
                />
              </div>

              <div className="mt-6">
                <ShareResult
                  title={locale === 'en' ? 'My Lucky Gemstone Recommendation' : 'मेरी भाग्यशाली रत्न सिफारिश'}
                  text={`${locale === 'en' ? `My lucky gemstone is ${result.primaryGemstone.gemstone.name.en}!` : `मेरा भाग्यशाली रत्न ${result.primaryGemstone.gemstone.name.hi} है!`}`}
                  url={locale === 'en' ? `https://www.vastucart.in/tools/gemstone-recommender` : `https://www.vastucart.in/${locale}/tools/gemstone-recommender`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </div>
            </HeroResultCard>

            {/* Primary Gemstone */}
            <SectionCard title={locale === 'en' ? 'Your Primary Lucky Gemstone' : 'आपका प्राथमिक भाग्यशाली रत्न'} icon={<Gem className="w-5 h-5 text-deepteal-600" />} accentBorder="warmaccent">
              {renderGemstoneCard(result.primaryGemstone, true)}
            </SectionCard>

            {/* Secondary Gemstones */}
            {result.secondaryGemstones.length > 0 && (
              <SectionCard title={locale === 'en' ? 'Alternative Gemstones' : 'वैकल्पिक रत्न'}>
                <div className="space-y-4">
                  {result.secondaryGemstones.map((rec) => renderGemstoneCard(rec))}
                </div>
              </SectionCard>
            )}

            {/* Gemstones to Avoid */}
            {result.gemstonesToAvoid.length > 0 && (
              <SectionCard title={locale === 'en' ? 'Gemstones to Avoid' : 'बचने योग्य रत्न'} icon={<X className="w-5 h-5 text-red-500" />}>
                <div className="space-y-3">
                  {result.gemstonesToAvoid.map((item) => (
                    <div
                      key={item.gemstone.planet}
                      className="flex items-center gap-3 p-3 bg-red-50 rounded-lg border border-red-200"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center opacity-50"
                        style={{ backgroundColor: item.gemstone.color }}
                      >
                        <X className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">
                          {locale === 'hi' ? item.gemstone.name.hi : item.gemstone.name.en}
                        </p>
                        <p className="text-sm text-red-600">
                          {locale === 'hi' ? item.reason.hi : item.reason.en}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </SectionCard>
            )}

            {/* Wearing Instructions */}
            <SectionCard title={locale === 'en' ? 'Wearing Instructions' : 'धारण करने के निर्देश'} icon={<Info className="w-5 h-5 text-deepteal-600" />} accentBorder="deepteal">
              <p className="text-deepteal-900">
                {locale === 'hi' ? result.wearingInstructions.hi : result.wearingInstructions.en}
              </p>
            </SectionCard>

            {/* General Guidance */}
            <SectionCard title={locale === 'en' ? 'General Guidance' : 'सामान्य मार्गदर्शन'}>
              <p className="text-gray-700">
                {locale === 'hi' ? result.generalGuidance.hi : result.generalGuidance.en}
              </p>
            </SectionCard>

            {/* Consultation Disclaimer */}
            <SectionCard title={locale === 'en' ? 'Important Disclaimer' : 'महत्वपूर्ण अस्वीकरण'} icon={<AlertTriangle className="w-5 h-5 text-warmaccent-600" />} accentBorder="warmaccent">
              <div className="space-y-3 text-warmaccent-800">
                <p>
                  {locale === 'en'
                    ? 'This is a computerized analysis based on your birth chart. Gemstone recommendations are complex and depend on many factors including current planetary periods (Dasha), transits, and specific life situations.'
                    : 'यह आपकी जन्म कुंडली पर आधारित एक कंप्यूटरीकृत विश्लेषण है। रत्न सिफारिशें जटिल हैं और कई कारकों पर निर्भर करती हैं जिसमें वर्तमान ग्रह दशा, गोचर और विशिष्ट जीवन स्थितियां शामिल हैं।'}
                </p>
                <p className="font-semibold">
                  {locale === 'en'
                    ? 'We strongly recommend consulting an experienced Vedic astrologer before purchasing and wearing any gemstone, especially powerful ones like Blue Sapphire (Neelam).'
                    : 'हम किसी भी रत्न, विशेषकर नीलम जैसे शक्तिशाली रत्न खरीदने और पहनने से पहले अनुभवी वैदिक ज्योतिषी से परामर्श करने की दृढ़ता से सलाह देते हैं।'}
                </p>
                <p className="text-sm">
                  {locale === 'en'
                    ? 'Improper gemstone selection can potentially cause harm. Always trial powerful stones for 3-7 days before permanent wear.'
                    : 'गलत रत्न चयन संभावित रूप से नुकसान पहुंचा सकता है। शक्तिशाली रत्नों को स्थायी रूप से पहनने से पहले हमेशा 3-7 दिनों का परीक्षण करें।'}
                </p>
              </div>
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
