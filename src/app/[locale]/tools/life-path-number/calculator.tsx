'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import {
  NumberDisplay,
  ResultCard,
  TraitList,
  CompatibilityBadges,
  CelebrityList,
} from '@/components/tools/result-display';
import { CalculationSteps } from '@/components/tools/calculation-steps';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';

import { calculateLifePath, getLifePathMeaning } from '@/lib/numerology/life-path';
import { getCelebritiesByLifePath } from '@/lib/data/celebrities';
import type { LifePathResult, LifePathMeaning } from '@/types';

interface LifePathCalculatorProps {
  locale: string;
}

export function LifePathCalculator({ locale }: LifePathCalculatorProps) {
  const t = useTranslations('tools.numerology.lifePathNumber');
  const tCommon = useTranslations('common');

  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [result, setResult] = useState<LifePathResult | null>(null);
  const [meaning, setMeaning] = useState<LifePathMeaning | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    // Validate input
    if (!birthDate) {
      setError(locale === 'en' ? 'Please select your birth date' : 'कृपया अपनी जन्म तिथि चुनें');
      return;
    }

    setIsCalculating(true);

    // Simulate calculation delay for effect
    setTimeout(() => {
      const day = birthDate.getDate();
      const month = birthDate.getMonth() + 1;
      const year = birthDate.getFullYear();

      const calcResult = calculateLifePath(day, month, year);
      const calcMeaning = getLifePathMeaning(calcResult.lifePathNumber);

      setResult(calcResult);
      setMeaning(calcMeaning);
      setIsCalculating(false);
    }, 500);
  };

  const handleReset = () => {
    setBirthDate(null);
    setResult(null);
    setMeaning(null);
    setError(null);
  };

  // Build calculation steps for display
  const getCalculationSteps = () => {
    if (!result) return [];

    return [
      {
        step: 1,
        title: locale === 'en' ? 'Reduce Day' : 'दिन को कम करें',
        calculation: result.calculationSteps.day.steps.join(' → '),
        result: result.calculationSteps.day.reduced,
      },
      {
        step: 2,
        title: locale === 'en' ? 'Reduce Month' : 'माह को कम करें',
        calculation: result.calculationSteps.month.steps.join(' → '),
        result: result.calculationSteps.month.reduced,
      },
      {
        step: 3,
        title: locale === 'en' ? 'Reduce Year' : 'वर्ष को कम करें',
        calculation: result.calculationSteps.year.steps.join(' → '),
        result: result.calculationSteps.year.reduced,
      },
      {
        step: 4,
        title: locale === 'en' ? 'Sum & Final Reduction' : 'योग और अंतिम कमी',
        calculation: `${result.calculationSteps.day.reduced} + ${result.calculationSteps.month.reduced} + ${result.calculationSteps.year.reduced} = ${result.calculationSteps.final.sum} → ${result.calculationSteps.final.steps.join(' → ')}`,
        result: result.lifePathNumber,
      },
    ];
  };

  // Get FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="🔢"
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

      {/* Educational Section (shown when no result yet) */}
      {!result && (
        <Card className="mb-8 bg-gradient-to-br from-teal-50 to-white">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {locale === 'en' ? 'What is Life Path Number?' : 'मूलांक क्या है?'}
          </h2>
          <div className="prose prose-teal max-w-none text-gray-700">
            <p className="mb-4">
              {locale === 'en'
                ? 'The Life Path Number is the most important number in numerology. Derived from your complete date of birth, it reveals your life\'s purpose, natural talents, and the challenges you\'ll face on your journey. Think of it as a roadmap for your entire life—a blueprint of who you are at your core.'
                : 'मूलांक अंकशास्त्र में सबसे महत्वपूर्ण संख्या है। आपकी पूर्ण जन्म तिथि से प्राप्त, यह आपके जीवन का उद्देश्य, प्राकृतिक प्रतिभाएं और आपकी यात्रा में आने वाली चुनौतियों को प्रकट करता है। इसे अपने पूरे जीवन के लिए एक रोडमैप की तरह समझें—आप मूल रूप से कौन हैं इसका एक ब्लूप्रिंट।'}
            </p>
            <p className="mb-4">
              {locale === 'en'
                ? 'In numerology, we calculate the Life Path Number by reducing your birth date (day + month + year) to a single digit, except for Master Numbers 11, 22, and 33, which carry special spiritual significance and are not reduced further.'
                : 'अंकशास्त्र में, हम आपकी जन्म तिथि (दिन + माह + वर्ष) को एक अंक में घटाकर मूलांक की गणना करते हैं, सिवाय मास्टर नंबर 11, 22 और 33 के, जो विशेष आध्यात्मिक महत्व रखते हैं और आगे नहीं घटाए जाते।'}
            </p>
            <p>
              {locale === 'en'
                ? 'Enter your birth date above to discover your Life Path Number and unlock detailed insights about your personality, ideal careers, love compatibility, and life phases.'
                : 'अपना मूलांक खोजने और अपने व्यक्तित्व, आदर्श करियर, प्रेम संगतता और जीवन चरणों के बारे में विस्तृत जानकारी पाने के लिए ऊपर अपनी जन्म तिथि दर्ज करें।'}
            </p>
          </div>
        </Card>
      )}

      {/* Results */}
      {result && meaning && (
        <div className="animate-fade-in-up">
            {/* Main Result */}
            <Card className="mb-6 text-center">
              <p className="text-gray-600 mb-4">{t('results.yourNumber')}</p>
              <NumberDisplay
                number={result.lifePathNumber}
                label={meaning.title[locale as 'en' | 'hi']}
                isMasterNumber={result.isMasterNumber}
              />

              <div className="flex justify-center mt-6">
                <ShareResult
                  title={`My Life Path Number is ${result.lifePathNumber}`}
                  text={`I just discovered my Life Path Number is ${result.lifePathNumber} - ${meaning.title.en}! Calculate yours:`}
                  url={`https://vastutools.com/${locale}/tools/life-path-number`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </div>
            </Card>

            {/* Meaning */}
            <ResultCard title={t('results.meaning')} className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                {meaning.overview[locale as 'en' | 'hi']}
              </p>
            </ResultCard>

            {/* Life Phases Timeline */}
            {meaning.lifePhases && (
              <ResultCard
                title={locale === 'en' ? 'Life Phases Timeline' : 'जीवन चरण समयरेखा'}
                className="mb-6"
              >
                <div className="space-y-4">
                  <div className="border-l-4 border-green-400 pl-4">
                    <h4 className="font-semibold text-green-700 mb-1">
                      {locale === 'en' ? '🌱 Youth (0-28 years)' : '🌱 युवावस्था (0-28 वर्ष)'}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {meaning.lifePhases.youth[locale as 'en' | 'hi'].replace('Early years (0-28): ', '').replace('प्रारंभिक वर्ष (0-28): ', '')}
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h4 className="font-semibold text-blue-700 mb-1">
                      {locale === 'en' ? '🌟 Prime Years (29-56)' : '🌟 प्रमुख वर्ष (29-56)'}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {meaning.lifePhases.adult[locale as 'en' | 'hi'].replace('Prime years (29-56): ', '').replace('प्रमुख वर्ष (29-56): ', '')}
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h4 className="font-semibold text-purple-700 mb-1">
                      {locale === 'en' ? '🦉 Wisdom Years (57+)' : '🦉 ज्ञान वर्ष (57+)'}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {meaning.lifePhases.mature[locale as 'en' | 'hi'].replace('Wisdom years (57+): ', '').replace('ज्ञान वर्ष (57+): ', '')}
                    </p>
                  </div>
                </div>
              </ResultCard>
            )}

            {/* Traits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ResultCard title={t('results.positiveTraits')}>
                <TraitList
                  title=""
                  traits={meaning.positiveTraits.map((t) => t[locale as 'en' | 'hi'])}
                  type="positive"
                />
              </ResultCard>

              <ResultCard title={t('results.negativeTraits')}>
                <TraitList
                  title=""
                  traits={meaning.negativeTraits.map((t) => t[locale as 'en' | 'hi'])}
                  type="negative"
                />
              </ResultCard>
            </div>

            {/* Career & Compatibility */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <ResultCard title={t('results.career')}>
                <div className="flex flex-wrap gap-2">
                  {meaning.careers.map((career, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm font-medium"
                    >
                      {career[locale as 'en' | 'hi']}
                    </span>
                  ))}
                </div>
              </ResultCard>

              <ResultCard title={t('results.compatibility')}>
                <CompatibilityBadges
                  numbers={meaning.compatibleNumbers}
                  label=""
                />
              </ResultCard>
            </div>

            {/* Love & Relationships */}
            {meaning.loveRelationships && (
              <ResultCard
                title={locale === 'en' ? '💕 Love & Relationships' : '💕 प्रेम और रिश्ते'}
                className="mb-6"
              >
                <p className="text-gray-700 leading-relaxed">
                  {meaning.loveRelationships[locale as 'en' | 'hi']}
                </p>
              </ResultCard>
            )}

            {/* Money & Work */}
            {meaning.moneyWork && (
              <ResultCard
                title={locale === 'en' ? '💼 Career & Money' : '💼 करियर और धन'}
                className="mb-6"
              >
                <p className="text-gray-700 leading-relaxed">
                  {meaning.moneyWork[locale as 'en' | 'hi']}
                </p>
              </ResultCard>
            )}

            {/* Celebrities */}
            <ResultCard title={t('results.celebrities')} className="mb-6">
              <CelebrityList
                celebrities={getCelebritiesByLifePath(result.lifePathNumber).map(c => ({
                  name: locale === 'hi' ? c.nameHi : c.name,
                  profession: locale === 'hi' ? c.professionHi : c.profession,
                }))}
                label=""
              />
            </ResultCard>

            {/* Cross-links to Related Tools */}
            <ResultCard
              title={locale === 'en' ? '🔗 Explore More' : '🔗 और जानें'}
              className="mb-6"
            >
              <p className="text-gray-600 mb-4 text-sm">
                {locale === 'en'
                  ? 'Discover more about yourself with these related numerology tools:'
                  : 'इन संबंधित अंकशास्त्र टूल्स से अपने बारे में और जानें:'}
              </p>
              <div className="flex flex-wrap gap-2">
                <a
                  href={`/${locale}/tools/destiny-number`}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg text-sm font-medium hover:from-teal-600 hover:to-teal-700 transition-all"
                >
                  {locale === 'en' ? '🎯 Destiny Number' : '🎯 भाग्य अंक'}
                </a>
                <a
                  href={`/${locale}/tools/lucky-number`}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg text-sm font-medium hover:from-teal-600 hover:to-teal-700 transition-all"
                >
                  {locale === 'en' ? '🍀 Lucky Number' : '🍀 भाग्यशाली अंक'}
                </a>
                <a
                  href={`/${locale}/tools/love-compatibility-numerology`}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg text-sm font-medium hover:from-teal-600 hover:to-teal-700 transition-all"
                >
                  {locale === 'en' ? '💕 Love Compatibility' : '💕 प्रेम संगतता'}
                </a>
                <a
                  href={`/${locale}/tools/career-predictor`}
                  className="px-4 py-2 bg-gradient-to-r from-teal-500 to-teal-600 text-white rounded-lg text-sm font-medium hover:from-teal-600 hover:to-teal-700 transition-all"
                >
                  {locale === 'en' ? '🎯 Career Predictor' : '🎯 करियर भविष्यवाणी'}
                </a>
              </div>
            </ResultCard>

            {/* Calculation Steps */}
            <Card className="mb-6">
              <CalculationSteps
                steps={getCalculationSteps()}
                showLabel={tCommon('showSteps')}
                hideLabel={tCommon('hideSteps')}
                reference="Numerology: The Complete Guide by Matthew Oliver Goodwin"
              />
            </Card>
          </div>
        )}

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title={tCommon('faq')} />
    </ToolLayout>
  );
}
