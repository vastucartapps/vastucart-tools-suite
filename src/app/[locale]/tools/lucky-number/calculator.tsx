'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, RefreshCw, Sparkles, Star, Clock, Compass, Gem } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { DatePicker } from '@/components/ui/date-picker';
import { Card } from '@/components/ui/card';
import { NumberDisplay, ResultCard, CelebrityList } from '@/components/tools/result-display';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';

import {
  calculateLuckyNumbers,
  getNumberMeaning,
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
  };

  // Get FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;

  return (
    <ToolLayout
      title={t('title')}
      description={t('description')}
      icon="🍀"
      category="numerology"
      categoryLabel={locale === 'en' ? 'Numerology' : 'अंकशास्त्र'}
    >
      {/* Input Form */}
      <Card className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {locale === 'en' ? 'Enter Your Birth Date' : 'अपनी जन्म तिथि दर्ज करें'}
        </h2>

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
      </Card>

      {/* Results */}
      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {/* Core Numbers */}
            <Card className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'en' ? 'Your Core Numbers' : 'आपके मूल अंक'}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-teal-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">
                    {locale === 'en' ? 'Life Path' : 'मूलांक'}
                  </p>
                  <p className="text-3xl font-bold text-teal-600">{result.lifePathNumber}</p>
                </div>
                <div className="text-center p-4 bg-teal-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">
                    {locale === 'en' ? 'Birth Day' : 'जन्म दिन'}
                  </p>
                  <p className="text-3xl font-bold text-teal-600">{result.birthDayNumber}</p>
                </div>
                <div className="text-center p-4 bg-saffron-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">
                    {locale === 'en' ? 'Personal Year' : 'व्यक्तिगत वर्ष'}
                  </p>
                  <p className="text-3xl font-bold text-saffron-600">{result.personalYearNumber}</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-600 mb-1">
                    {locale === 'en' ? 'Personal Month' : 'व्यक्तिगत माह'}
                  </p>
                  <p className="text-3xl font-bold text-blue-600">{result.personalMonthNumber}</p>
                </div>
              </div>
            </Card>

            {/* Primary Lucky Numbers */}
            <Card className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-6 h-6 text-saffron-500" />
                <h3 className="text-xl font-semibold text-gray-900">
                  {t('results.primaryLucky')}
                </h3>
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
                  ? 'Your most powerful numbers derived from Life Path and Birth Day. Use for important decisions, addresses, and significant dates.'
                  : 'मूलांक और जन्म दिन से प्राप्त आपके सबसे शक्तिशाली अंक। महत्वपूर्ण निर्णयों, पतों और महत्वपूर्ण तिथियों के लिए उपयोग करें।'}
              </p>
            </Card>

            {/* Secondary Lucky Numbers */}
            <Card className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('results.secondaryLucky')}
              </h3>
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
            </Card>

            {/* Ruling Planet & Vedic Details */}
            <Card className="mb-6 bg-gradient-to-r from-saffron-50 to-teal-50 border-teal-200">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-teal-600" />
                <h3 className="text-lg font-semibold text-teal-800">
                  {locale === 'en' ? 'Vedic Numerology Profile' : 'वैदिक अंकशास्त्र प्रोफाइल'}
                </h3>
              </div>
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
            </Card>

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
            <Card className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-blue-600" />
                <h3 className="text-lg font-semibold text-gray-900">
                  {locale === 'en' ? 'Auspicious Time Slots' : 'शुभ समय'}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {result.luckyTimeSlots.map((slot, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg font-medium border border-blue-200"
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
            </Card>

            {/* Personal Year Focus */}
            <Card className="mb-6 bg-gradient-to-r from-saffron-50 to-orange-50 border-saffron-200">
              <h3 className="text-lg font-semibold text-saffron-800 mb-2">
                {t('results.personalYear')} {CURRENT_YEAR}: #{result.personalYearNumber}
              </h3>
              <p className="text-saffron-700 leading-relaxed">
                {result.currentYearFocus[locale as 'en' | 'hi']}
              </p>
              <div className="mt-4 pt-4 border-t border-saffron-200">
                <p className="text-sm text-saffron-600">
                  <strong>{locale === 'en' ? 'This Month:' : 'इस महीने:'}</strong>{' '}
                  {result.currentMonthFocus[locale as 'en' | 'hi']}
                </p>
              </div>
            </Card>

            {/* Numbers to Avoid */}
            <Card className="mb-6 bg-red-50 border-red-200">
              <h3 className="text-lg font-semibold text-red-800 mb-3">
                {t('results.avoidNumbers')}
              </h3>
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
              <p className="text-sm text-red-600 mt-3">
                {locale === 'en'
                  ? 'Based on planetary enmities. These numbers may require extra caution or effort when encountered.'
                  : 'ग्रहों की शत्रुता पर आधारित। इन संख्याओं का सामना करते समय अतिरिक्त सावधानी या प्रयास की आवश्यकता हो सकती है।'}
              </p>
              <div className="mt-3 p-3 bg-white/60 rounded-lg">
                <p className="text-sm text-gray-600">
                  <strong>{locale === 'en' ? 'Enemy Planets:' : 'शत्रु ग्रह:'}</strong>{' '}
                  {result.enemyPlanets.map(p => p[locale as 'en' | 'hi']).join(', ')}
                </p>
              </div>
            </Card>

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

            {/* Share */}
            <Card className="mb-6 text-center">
              <ShareResult
                title={`My Lucky Numbers are ${result.primaryLuckyNumbers.join(', ')}`}
                text={`I discovered my Lucky Numbers based on Vedic Numerology! Primary: ${result.primaryLuckyNumbers.join(', ')}, Ruling Planet: ${result.rulingPlanet.en}. Calculate yours:`}
                url={`https://vastutools.com/${locale}/tools/lucky-number`}
                shareLabel={tCommon('share')}
                copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
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
