'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Sparkles, Star, Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { Input } from '@/components/ui/input';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker';
import { Card } from '@/components/ui/card';
import { NumberDisplay, ResultCard, CelebrityList } from '@/components/tools/result-display';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard, SectionInfoRow } from '@/components/ui/section-card';

import {
  calculateLuckyNumbers,
  getNumberMeaning,
  getNumberCompatibility,
  LuckyNumberResult,
} from '@/lib/numerology/lucky-number';
import { getCelebritiesByMulank, getCelebritiesByLifePath } from '@/lib/data/celebrities';

// Fixed year for SSR to avoid hydration mismatch
const CURRENT_YEAR = 2025;

interface LuckyNumberCalculatorProps {
  locale: string;
}

export function LuckyNumberCalculator({ locale }: LuckyNumberCalculatorProps) {
  const t = useTranslations('tools.numerology.luckyNumber');
  const tCommon = useTranslations('common');

  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [result, setResult] = useState<LuckyNumberResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Compatibility checker state
  const [compatibilityOpen, setCompatibilityOpen] = useState(false);
  const [compatInput, setCompatInput] = useState('');
  const [compatResult, setCompatResult] = useState<{ status: string; description: { en: string; hi: string } } | null>(null);

  const handleCalculate = () => {
    setError(null);

    // Validate inputs
    if (!birthDate) {
      setError(locale === 'en' ? 'Please select your birth date' : 'कृपया अपनी जन्म तिथि चुनें');
      return;
    }

    const dayNum = birthDate.getDate();
    const monthNum = birthDate.getMonth() + 1;
    const yearNum = birthDate.getFullYear();

    setIsCalculating(true);

    // Simulate calculation delay for effect
    setTimeout(() => {
      const calcResult = calculateLuckyNumbers(dayNum, monthNum, yearNum);
      setResult(calcResult);
      setIsCalculating(false);
    }, 500);
  };

  const handleReset = () => {
    setBirthDate(null);
    setResult(null);
    setError(null);
    setCompatResult(null);
    setCompatInput('');
    setCompatibilityOpen(false);
  };

  const handleCompatibilityCheck = () => {
    if (!result || !compatInput.trim()) return;

    // Parse input - could be a number (1-9) or a date
    let checkNumber: number;
    const trimmed = compatInput.trim();

    // Check if it's a simple number
    if (/^[1-9]$/.test(trimmed)) {
      checkNumber = parseInt(trimmed);
    } else if (/^\d{1,2}$/.test(trimmed)) {
      // It's a date number (1-31), reduce to single digit
      const dateNum = parseInt(trimmed);
      checkNumber = dateNum > 9 ? (dateNum % 9 === 0 ? 9 : dateNum % 9) : dateNum;
    } else {
      // Try parsing as date
      const dateParts = trimmed.split(/[\/\-\.]/);
      if (dateParts.length >= 1) {
        const day = parseInt(dateParts[0]);
        if (!isNaN(day) && day >= 1 && day <= 31) {
          checkNumber = day > 9 ? (day % 9 === 0 ? 9 : day % 9) : day;
        } else {
          return;
        }
      } else {
        return;
      }
    }

    const compatibility = getNumberCompatibility(result.lifePathNumber, checkNumber);
    setCompatResult(compatibility);
  };

  // Get FAQ data and educational content
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="🍀"
      category="numerology"
      categoryLabel={locale === 'en' ? 'Numerology' : 'अंकशास्त्र'}
    >
      {/* Input Form */}
      <SectionCard
        title={locale === 'en' ? 'Enter Your Birth Date' : 'अपनी जन्म तिथि दर्ज करें'}
        icon={<Calculator className="w-5 h-5 text-teal-600" />}
        accentBorder="gradient"
        className="mb-8"
      >

        <div className="mb-6">
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
      </SectionCard>

      {/* Educational Section (shown when no result yet) */}
      {!result && (
        <EducationalSection
          title={educational.title}
          content={educational.content}
          blogLink={`/${locale}/blog/lucky-number-calculator-personal`}
          blogLinkText={locale === 'en' ? 'Read Complete Guide' : 'पूरी गाइड पढ़ें'}
        />
      )}

      {/* Results */}
      {result && (
        <div className="animate-fade-in-up">
            {/* Core Numbers */}
            <HeroResultCard
              title={locale === 'en' ? 'Your Core Numbers' : 'आपके मूल अंक'}
              subtitle={locale === 'en' ? 'Based on Vedic Numerology' : 'वैदिक अंकशास्त्र पर आधारित'}
              icon={<Sparkles className="w-6 h-6 text-white" />}
              colorScheme="saffron"
              className="mb-6"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <HeroStatCard
                  label={locale === 'en' ? 'Life Path' : 'मूलांक'}
                  value={result.lifePathNumber.toString()}
                  colorScheme="saffron"
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Birth Day' : 'जन्म दिन'}
                  value={result.birthDayNumber.toString()}
                  colorScheme="saffron"
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Personal Year' : 'व्यक्तिगत वर्ष'}
                  value={result.personalYearNumber.toString()}
                  colorScheme="saffron"
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Personal Month' : 'व्यक्तिगत माह'}
                  value={result.personalMonthNumber.toString()}
                  colorScheme="saffron"
                />
              </div>
            </HeroResultCard>

            {/* Primary Lucky Numbers */}
            <SectionCard
              title={t('results.primaryLucky')}
              icon={<Sparkles className="w-5 h-5 text-saffron-600" />}
              accentBorder="saffron"
              className="mb-6"
            >

              {/* How to Use Micro-copy */}
              <div className="p-3 bg-teal-50 rounded-lg border border-teal-200 mb-4">
                <p className="text-sm text-teal-800">
                  {locale === 'en'
                    ? `Use these numbers for important dates, phone numbers, addresses, vehicle plates, and significant purchases. Your Personal Year number (#${result.personalYearNumber}) indicates which primary number is strongest in ${CURRENT_YEAR}.`
                    : `इन अंकों का उपयोग महत्वपूर्ण तिथियों, फोन नंबरों, पतों, वाहन प्लेटों और महत्वपूर्ण खरीदारी के लिए करें। आपका व्यक्तिगत वर्ष अंक (#${result.personalYearNumber}) बताता है कि ${CURRENT_YEAR} में कौन सा प्राथमिक अंक सबसे मजबूत है।`}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                {result.primaryLuckyNumbers.map((num) => {
                  const meaning = getNumberMeaning(num);
                  return (
                    <div
                      key={num}
                      className="flex flex-col items-center p-4 bg-gradient-to-br from-teal-50 to-saffron-50 rounded-xl border border-teal-200 min-w-[100px]"
                    >
                      <span className="text-4xl font-bold text-teal-600">{num}</span>
                      {meaning && (
                        <>
                          <span className="text-sm text-gray-600 mt-1">
                            {meaning.planet[locale as 'en' | 'hi']}
                          </span>
                          <span className="text-xs text-gray-500">
                            {meaning.element[locale as 'en' | 'hi']}
                          </span>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                {locale === 'en'
                  ? 'Your most powerful numbers derived from Life Path and Birth Day—your personal lucky numbers by numerology.'
                  : 'मूलांक और जन्म दिन से प्राप्त आपके सबसे शक्तिशाली अंक—अंकशास्त्र द्वारा आपके व्यक्तिगत भाग्यशाली अंक।'}
              </p>
            </SectionCard>

            {/* Secondary Lucky Numbers */}
            <SectionCard
              title={t('results.secondaryLucky')}
              accentBorder="teal"
              className="mb-6"
            >
              <div className="flex flex-wrap gap-3">
                {result.secondaryLuckyNumbers.map((num) => {
                  const meaning = getNumberMeaning(num);
                  return (
                    <div
                      key={num}
                      className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg border border-gray-200"
                    >
                      <span className="text-xl font-semibold text-gray-700">{num}</span>
                      {meaning && (
                        <span className="text-sm text-gray-500">
                          ({meaning.planet[locale as 'en' | 'hi']})
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
              <p className="text-sm text-gray-500 mt-3">
                {locale === 'en'
                  ? 'Compatible numbers based on planetary friendships that bring supportive energy.'
                  : 'ग्रहों की मित्रता पर आधारित संगत संख्याएं जो सहायक ऊर्जा लाती हैं।'}
              </p>
            </SectionCard>

            {/* Ruling Planet & Vedic Details */}
            <SectionCard
              title={locale === 'en' ? 'Vedic Numerology Profile' : 'वैदिक अंकशास्त्र प्रोफाइल'}
              icon={<Star className="w-5 h-5 text-teal-600" />}
              accentBorder="gradient"
              className="mb-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="bg-white/60 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">{locale === 'en' ? 'Ruling Planet' : 'शासक ग्रह'}</p>
                  <p className="font-semibold text-teal-700">{result.rulingPlanet[locale as 'en' | 'hi']}</p>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">{locale === 'en' ? 'Element' : 'तत्व'}</p>
                  <p className="font-semibold text-teal-700">{result.luckyElement[locale as 'en' | 'hi']}</p>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">{locale === 'en' ? 'Direction' : 'दिशा'}</p>
                  <p className="font-semibold text-teal-700">{result.luckyDirection[locale as 'en' | 'hi']}</p>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">{locale === 'en' ? 'Gemstone' : 'रत्न'}</p>
                  <p className="font-semibold text-teal-700">{result.luckyGemstone[locale as 'en' | 'hi']}</p>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">{locale === 'en' ? 'Metal' : 'धातु'}</p>
                  <p className="font-semibold text-teal-700">{result.luckyMetal[locale as 'en' | 'hi']}</p>
                </div>
                <div className="bg-white/60 p-3 rounded-lg">
                  <p className="text-sm text-gray-500">{locale === 'en' ? 'Friendly Planets' : 'मित्र ग्रह'}</p>
                  <p className="font-semibold text-teal-700 text-sm">
                    {result.friendlyPlanets.map(p => p[locale as 'en' | 'hi']).join(', ')}
                  </p>
                </div>
              </div>
            </SectionCard>

            {/* Lucky Dates & Days */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ResultCard title={t('results.luckyDays')}>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 mb-2">{locale === 'en' ? 'Lucky Days of Week' : 'भाग्यशाली सप्ताह के दिन'}</p>
                    <div className="flex flex-wrap gap-2">
                      {result.luckyDaysOfWeek.map((d, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 bg-teal-100 text-teal-800 rounded-lg font-medium"
                        >
                          {d[locale as 'en' | 'hi']}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">{locale === 'en' ? 'Lucky Dates of Month' : 'भाग्यशाली तारीखें'}</p>
                    <div className="flex flex-wrap gap-2">
                      {result.luckyDates.slice(0, 8).map((d) => (
                        <span
                          key={d}
                          className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full text-sm font-medium text-gray-700"
                        >
                          {d}
                        </span>
                      ))}
                      {result.luckyDates.length > 8 && (
                        <span className="text-sm text-gray-500 self-center">
                          +{result.luckyDates.length - 8} {locale === 'en' ? 'more' : 'और'}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </ResultCard>

              <ResultCard title={t('results.luckyMonths')}>
                <div className="flex flex-wrap gap-2">
                  {result.luckyMonths.map((m) => (
                    <span
                      key={m.month}
                      className="px-3 py-1.5 bg-teal-100 text-teal-800 rounded-lg text-sm font-medium"
                    >
                      {m.name[locale as 'en' | 'hi']}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  {locale === 'en'
                    ? 'Months that harmonize with your numerological profile'
                    : 'आपकी अंकशास्त्रीय प्रोफाइल के साथ सामंजस्यपूर्ण महीने'}
                </p>
              </ResultCard>
            </div>

            {/* Lucky Time Slots */}
            <SectionCard
              title={locale === 'en' ? 'Auspicious Time Slots' : 'शुभ समय'}
              icon={<Clock className="w-5 h-5 text-teal-600" />}
              accentBorder="teal"
              className="mb-6"
            >
              <div className="flex flex-wrap gap-3">
                {result.luckyTimeSlots.map((slot, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-teal-50 text-teal-700 rounded-lg font-medium border border-teal-200"
                  >
                    {slot[locale as 'en' | 'hi']}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 mt-3">
                {locale === 'en'
                  ? 'Based on your ruling planet, these times are most favorable for important activities.'
                  : 'आपके शासक ग्रह के आधार पर, ये समय महत्वपूर्ण गतिविधियों के लिए सबसे अनुकूल हैं।'}
              </p>
            </SectionCard>

            {/* Compatibility Checker - Collapsible */}
            <SectionCard accentBorder="saffron" className="mb-6">
              <button
                onClick={() => setCompatibilityOpen(!compatibilityOpen)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="text-lg font-semibold text-amber-800">
                  {locale === 'en' ? '🔮 Check Compatibility with Another Number' : '🔮 दूसरे अंक के साथ संगतता जांचें'}
                </h3>
                {compatibilityOpen ? (
                  <ChevronUp className="w-5 h-5 text-amber-600" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-amber-600" />
                )}
              </button>

              {compatibilityOpen && (
                <div className="mt-4 pt-4 border-t border-amber-100">
                  <p className="text-sm text-gray-600 mb-3">
                    {locale === 'en'
                      ? 'Enter a number (1-9) or date to check compatibility with your profile. Great for checking spouse, business partner, or team member numbers.'
                      : 'अपनी प्रोफाइल के साथ संगतता जांचने के लिए एक अंक (1-9) या तारीख दर्ज करें। जीवनसाथी, व्यापार साझेदार, या टीम सदस्य अंकों की जांच के लिए बढ़िया।'}
                  </p>
                  <div className="flex gap-3 items-end">
                    <div className="flex-1">
                      <Input
                        label={locale === 'en' ? 'Number or Date' : 'अंक या तारीख'}
                        value={compatInput}
                        onChange={(e) => {
                          setCompatInput(e.target.value);
                          setCompatResult(null);
                        }}
                        placeholder={locale === 'en' ? 'e.g., 7 or 15' : 'उदा., 7 या 15'}
                      />
                    </div>
                    <Button
                      variant="secondary"
                      onClick={handleCompatibilityCheck}
                      className="mb-0.5"
                    >
                      {locale === 'en' ? 'Check' : 'जांचें'}
                    </Button>
                  </div>

                  {compatResult && (
                    <div className={`mt-4 p-3 rounded-lg ${
                      compatResult.status === 'harmonious' ? 'bg-green-50 border border-green-200' :
                      compatResult.status === 'neutral' ? 'bg-yellow-50 border border-yellow-200' :
                      'bg-red-50 border border-red-200'
                    }`}>
                      <p className={`font-semibold ${
                        compatResult.status === 'harmonious' ? 'text-green-800' :
                        compatResult.status === 'neutral' ? 'text-yellow-800' :
                        'text-red-800'
                      }`}>
                        {compatResult.status === 'harmonious' && '✅ '}
                        {compatResult.status === 'neutral' && '⚖️ '}
                        {compatResult.status === 'challenging' && '⚠️ '}
                        {locale === 'en'
                          ? `Number ${compatInput} is ${compatResult.status.charAt(0).toUpperCase() + compatResult.status.slice(1)} with your profile`
                          : `अंक ${compatInput} आपकी प्रोफाइल के साथ ${compatResult.status === 'harmonious' ? 'सामंजस्यपूर्ण' : compatResult.status === 'neutral' ? 'तटस्थ' : 'चुनौतीपूर्ण'} है`}
                      </p>
                      <p className={`text-sm mt-1 ${
                        compatResult.status === 'harmonious' ? 'text-green-700' :
                        compatResult.status === 'neutral' ? 'text-yellow-700' :
                        'text-red-700'
                      }`}>
                        {compatResult.description[locale as 'en' | 'hi']}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </SectionCard>

            {/* Personal Year Focus */}
            <SectionCard
              title={`${t('results.personalYear')} ${CURRENT_YEAR}: #${result.personalYearNumber}`}
              accentBorder="saffron"
              className="mb-6"
            >
              <p className="text-saffron-700 leading-relaxed">
                {result.currentYearFocus[locale as 'en' | 'hi']}
              </p>

              {/* Action Hint */}
              <div className="mt-3 p-3 bg-white/60 rounded-lg">
                <p className="text-sm text-saffron-800 font-medium">
                  {locale === 'en'
                    ? `💡 Apply lucky number ${result.personalYearNumber} (${getNumberMeaning(result.personalYearNumber)?.planet.en || ''}) to important decisions, meetings, and launches during ${CURRENT_YEAR} for maximum alignment.`
                    : `💡 अधिकतम संरेखण के लिए ${CURRENT_YEAR} के दौरान महत्वपूर्ण निर्णयों, बैठकों और शुरुआत में भाग्यशाली अंक ${result.personalYearNumber} (${getNumberMeaning(result.personalYearNumber)?.planet.hi || ''}) लागू करें।`}
                </p>
              </div>

              <div className="mt-4 pt-4 border-t border-saffron-200">
                <p className="text-sm text-saffron-600">
                  <strong>{locale === 'en' ? 'This Month:' : 'इस महीने:'}</strong>{' '}
                  {result.currentMonthFocus[locale as 'en' | 'hi']}
                </p>
              </div>
            </SectionCard>

            {/* Numbers to Avoid */}
            <SectionCard
              title={t('results.avoidNumbers')}
              className="mb-6 bg-red-50"
            >
              <div className="flex flex-wrap gap-3">
                {result.avoidNumbers.map((num) => {
                  const meaning = getNumberMeaning(num);
                  return (
                    <div
                      key={num}
                      className="flex items-center gap-2 px-3 py-1.5 bg-red-100 rounded-lg border border-red-200"
                    >
                      <span className="text-lg font-semibold text-red-700">{num}</span>
                      {meaning && (
                        <span className="text-sm text-red-600">
                          ({meaning.planet[locale as 'en' | 'hi']})
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-3 p-3 bg-white/60 rounded-lg">
                <p className="text-sm text-gray-700">
                  <strong>{locale === 'en' ? 'Enemy Planets:' : 'शत्रु ग्रह:'}</strong>{' '}
                  {result.enemyPlanets.map(p => p[locale as 'en' | 'hi']).join(', ')}
                </p>
                <p className="text-sm text-red-600 mt-2">
                  {locale === 'en'
                    ? `Avoid these for important dates or purchases; they may conflict with your profile's ruling planet (${result.rulingPlanet.en}).`
                    : `महत्वपूर्ण तिथियों या खरीदारी के लिए इनसे बचें; ये आपकी प्रोफाइल के शासक ग्रह (${result.rulingPlanet.hi}) से टकरा सकते हैं।`}
                </p>
              </div>
            </SectionCard>

            {/* Celebrities with same Root Number */}
            {getCelebritiesByMulank(result.birthDayNumber).length > 0 && (
              <ResultCard
                title={locale === 'en' ? 'Famous People with Same Birth Day Number' : 'समान जन्म दिन अंक वाले प्रसिद्ध लोग'}
                className="mb-6"
              >
                <CelebrityList
                  celebrities={getCelebritiesByMulank(result.birthDayNumber).map(c => ({
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

            {/* Share */}
            <SectionCard className="mb-6 text-center">
              <ShareResult
                title={`My Lucky Numbers are ${result.primaryLuckyNumbers.join(', ')}`}
                text={`I discovered my Lucky Numbers based on Vedic Numerology! Primary: ${result.primaryLuckyNumbers.join(', ')}, Ruling Planet: ${result.rulingPlanet.en}. Calculate yours:`}
                url={`https://tools.vastucart.in/${locale}/tools/lucky-number`}
                shareLabel={tCommon('share')}
                copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
              />
            </SectionCard>
        </div>
      )}

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title={tCommon('faq')} />
    </ToolLayout>
  );
}
