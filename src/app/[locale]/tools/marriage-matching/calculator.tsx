'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, Heart, AlertTriangle, CheckCircle } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { BirthDatePicker } from '@/components/ui/birth-date-picker';
import { TimePicker } from '@/components/ui/time-picker';
import { PlacePicker } from '@/components/ui/place-picker';
import { HeroResultCard } from '@/components/ui/hero-result-card';
import { SectionCard, SectionInfoRow } from '@/components/ui/section-card';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

import {
  calculateFullChart,
  type Place,
} from '@/lib/astrology';

import {
  calculateMatch,
  RASHI_NAMES,
  NAKSHATRA_NAMES,
  NADI_DOSHA_REMEDIES,
  BHAKOOT_DOSHA_REMEDIES,
  type MatchResult,
} from '@/lib/astrology/data/marriage-matching-data';

interface MarriageMatchingCalculatorProps {
  locale: 'en' | 'hi';
}

export default function MarriageMatchingCalculator({ locale }: MarriageMatchingCalculatorProps) {
  const t = useTranslations('tools.astrology.marriage');
  const tCommon = useTranslations('common');

  // Groom form state
  const [groomDate, setGroomDate] = useState<Date | null>(null);
  const [groomHour, setGroomHour] = useState('12');
  const [groomMinute, setGroomMinute] = useState('00');
  const [groomPlace, setGroomPlace] = useState<Place | null>(null);

  // Bride form state
  const [brideDate, setBrideDate] = useState<Date | null>(null);
  const [brideHour, setBrideHour] = useState('12');
  const [brideMinute, setBrideMinute] = useState('00');
  const [bridePlace, setBridePlace] = useState<Place | null>(null);

  // Result state
  const [result, setResult] = useState<MatchResult | null>(null);
  const [groomDetails, setGroomDetails] = useState<{ rashi: number; nakshatra: number } | null>(null);
  const [brideDetails, setBrideDetails] = useState<{ rashi: number; nakshatra: number } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = () => {
    setError(null);

    if (!groomDate || !groomPlace) {
      setError(locale === 'en' ? 'Please enter groom\'s birth details' : 'कृपया वर का जन्म विवरण दर्ज करें');
      return;
    }

    if (!brideDate || !bridePlace) {
      setError(locale === 'en' ? 'Please enter bride\'s birth details' : 'कृपया वधू का जन्म विवरण दर्ज करें');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      try {
        // Calculate groom's chart
        const groomChart = calculateFullChart({
          year: groomDate.getFullYear(),
          month: groomDate.getMonth() + 1,
          day: groomDate.getDate(),
          hour: parseInt(groomHour),
          minute: parseInt(groomMinute),
          latitude: groomPlace.lat,
          longitude: groomPlace.lng,
          timezone: groomPlace.tz,
        });

        // Calculate bride's chart
        const brideChart = calculateFullChart({
          year: brideDate.getFullYear(),
          month: brideDate.getMonth() + 1,
          day: brideDate.getDate(),
          hour: parseInt(brideHour),
          minute: parseInt(brideMinute),
          latitude: bridePlace.lat,
          longitude: bridePlace.lng,
          timezone: bridePlace.tz,
        });

        const groomRashi = groomChart.moonSign.sign.index;
        const groomNakshatra = groomChart.moonSign.nakshatra.index;
        const brideRashi = brideChart.moonSign.sign.index;
        const brideNakshatra = brideChart.moonSign.nakshatra.index;

        setGroomDetails({ rashi: groomRashi, nakshatra: groomNakshatra });
        setBrideDetails({ rashi: brideRashi, nakshatra: brideNakshatra });

        const matchResult = calculateMatch(groomNakshatra, groomRashi, brideNakshatra, brideRashi);
        setResult(matchResult);
      } catch (err) {
        setError(locale === 'en' ? 'Calculation error. Please check inputs.' : 'गणना त्रुटि। कृपया इनपुट जांचें।');
      } finally {
        setIsCalculating(false);
      }
    }, 500);
  };

  const handleReset = () => {
    setGroomDate(null);
    setGroomHour('12');
    setGroomMinute('00');
    setGroomPlace(null);
    setBrideDate(null);
    setBrideHour('12');
    setBrideMinute('00');
    setBridePlace(null);
    setResult(null);
    setGroomDetails(null);
    setBrideDetails(null);
    setError(null);
  };

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return 'text-deepteal-600';
    if (percentage >= 70) return 'text-green-600';
    if (percentage >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (level: string) => {
    switch (level) {
      case 'excellent': return 'bg-gradient-to-r from-deepteal-500 to-deepteal-500';
      case 'good': return 'bg-gradient-to-r from-green-500 to-deepteal-500';
      case 'average': return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      default: return 'bg-gradient-to-r from-red-500 to-pink-500';
    }
  };

  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="💑"
      category="astrology"
      categoryLabel={locale === 'en' ? 'Astrology' : 'ज्योतिष'}
    >
      <div className="space-y-8">
        {/* Input Form */}
        <Card className="p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            {t('form.title')}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Groom Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-deepteal-700 flex items-center gap-2">
                <span>👤</span>
                {t('form.groomDetails')}
              </h3>

              <BirthDatePicker
                label={t('form.birthDate')}
                value={groomDate}
                onChange={setGroomDate}
                locale={locale}
                required
              />

              <TimePicker
                label={t('form.birthTime')}
                hour={groomHour}
                minute={groomMinute}
                onHourChange={setGroomHour}
                onMinuteChange={setGroomMinute}
                locale={locale}
                required
              />

              <PlacePicker
                label={t('form.birthPlace')}
                value={groomPlace}
                onChange={setGroomPlace}
                locale={locale}
                required
                showManualInput
              />
            </div>

            {/* Bride Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-pink-700 flex items-center gap-2">
                <span>👩</span>
                {t('form.brideDetails')}
              </h3>

              <BirthDatePicker
                label={t('form.birthDate')}
                value={brideDate}
                onChange={setBrideDate}
                locale={locale}
                required
              />

              <TimePicker
                label={t('form.birthTime')}
                hour={brideHour}
                minute={brideMinute}
                onHourChange={setBrideHour}
                onMinuteChange={setBrideMinute}
                locale={locale}
                required
              />

              <PlacePicker
                label={t('form.birthPlace')}
                value={bridePlace}
                onChange={setBridePlace}
                locale={locale}
                required
                showManualInput
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
              {error}
            </div>
          )}

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <Button onClick={handleCalculate} disabled={isCalculating}>
              {isCalculating ? (
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
              ) : (
                <Heart className="w-4 h-4 mr-2" />
              )}
              {t('form.calculate')}
            </Button>
            <Button onClick={handleReset} variant="secondary">
              <RefreshCw className="w-4 h-4 mr-2" />
              {tCommon('reset')}
            </Button>
          </div>
        </Card>

        {!result && (
          <EducationalSection
            title={educational.title}
            content={educational.content}
          />
        )}

        {/* Results Section */}
          {result && groomDetails && brideDetails && (
            <div className="animate-fade-in-up space-y-6">
              {/* Main Score Card - Use warmaccent for high match */}
              <HeroResultCard
                title={locale === 'en' ? 'Kundli Milan Result' : 'कुंडली मिलान परिणाम'}
                subtitle={locale === 'en' ? 'Ashtakoota Matching Analysis' : 'अष्टकूट मिलान विश्लेषण'}
                icon={<Heart className="w-6 h-6 text-white" />}
                colorScheme={result.interpretation.level === 'excellent' || result.interpretation.level === 'good' ? 'warmaccent' : 'deepteal'}
              >
                <div className="text-center py-6">
                  <div className="flex justify-center mb-4">
                    {result.interpretation.level === 'excellent' || result.interpretation.level === 'good' ? (
                      <Heart className="w-16 h-16 fill-current text-white" />
                    ) : (
                      <AlertTriangle className="w-16 h-16 text-white" />
                    )}
                  </div>

                  <div className="text-6xl font-bold text-white mb-2">
                    {result.totalPoints}/36
                  </div>
                  <div className={`text-2xl mb-2 ${result.interpretation.level === 'excellent' || result.interpretation.level === 'good' ? 'text-warmaccent-200' : 'text-deepteal-200'}`}>
                    {result.percentage}% {locale === 'en' ? 'Match' : 'मिलान'}
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-3">
                    {locale === 'hi' ? result.interpretation.name.hi : result.interpretation.name.en}
                  </h2>
                  <p className={`max-w-2xl mx-auto ${result.interpretation.level === 'excellent' || result.interpretation.level === 'good' ? 'text-warmaccent-200' : 'text-deepteal-200'}`}>
                    {locale === 'hi' ? result.interpretation.description.hi : result.interpretation.description.en}
                  </p>
                </div>

                <div className="mt-6">
                  <ShareResult
                    title={`Kundli Milan Result - ${result.totalPoints}/36 Points`}
                    text={`We got ${result.totalPoints}/36 points (${result.percentage}%) in Kundli Milan! Check your compatibility:`}
                    url={`https://tools.vastucart.in/${locale}/tools/marriage-matching`}
                    shareLabel={tCommon('share')}
                    copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                  />
                </div>
              </HeroResultCard>

              {/* Partner Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SectionCard title={`👤 ${locale === 'en' ? 'Groom' : 'वर'}`} accentBorder="deepteal">
                  <div className="space-y-1">
                    <SectionInfoRow
                      label={locale === 'en' ? 'Moon Sign' : 'चंद्र राशि'}
                      value={locale === 'hi' ? RASHI_NAMES[groomDetails.rashi].hi : RASHI_NAMES[groomDetails.rashi].en}
                    />
                    <SectionInfoRow
                      label={locale === 'en' ? 'Nakshatra' : 'नक्षत्र'}
                      value={locale === 'hi' ? NAKSHATRA_NAMES[groomDetails.nakshatra].hi : NAKSHATRA_NAMES[groomDetails.nakshatra].en}
                    />
                  </div>
                </SectionCard>

                <SectionCard title={`👩 ${locale === 'en' ? 'Bride' : 'वधू'}`} accentBorder="warmaccent">
                  <div className="space-y-1">
                    <SectionInfoRow
                      label={locale === 'en' ? 'Moon Sign' : 'चंद्र राशि'}
                      value={locale === 'hi' ? RASHI_NAMES[brideDetails.rashi].hi : RASHI_NAMES[brideDetails.rashi].en}
                    />
                    <SectionInfoRow
                      label={locale === 'en' ? 'Nakshatra' : 'नक्षत्र'}
                      value={locale === 'hi' ? NAKSHATRA_NAMES[brideDetails.nakshatra].hi : NAKSHATRA_NAMES[brideDetails.nakshatra].en}
                    />
                  </div>
                </SectionCard>
              </div>

              {/* Koota Details */}
              <SectionCard title={t('results.kootaBreakdown')}>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4">{locale === 'en' ? 'Koota' : 'कूट'}</th>
                        <th className="text-left py-3 px-4">{locale === 'en' ? 'Groom' : 'वर'}</th>
                        <th className="text-left py-3 px-4">{locale === 'en' ? 'Bride' : 'वधू'}</th>
                        <th className="text-center py-3 px-4">{locale === 'en' ? 'Points' : 'अंक'}</th>
                        <th className="text-center py-3 px-4">{locale === 'en' ? 'Status' : 'स्थिति'}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {result.kootas.map((koota) => (
                        <tr key={koota.id} className="border-b border-gray-100">
                          <td className="py-3 px-4">
                            <div className="font-medium">
                              {locale === 'hi' ? koota.name.hi : koota.name.en}
                            </div>
                            <div className="text-xs text-gray-500">
                              {locale === 'hi' ? koota.description.hi : koota.description.en}
                            </div>
                          </td>
                          <td className="py-3 px-4 text-sm">{koota.groomValue}</td>
                          <td className="py-3 px-4 text-sm">{koota.brideValue}</td>
                          <td className="py-3 px-4 text-center">
                            <span className={`font-bold ${koota.points === koota.maxPoints ? 'text-green-600' : koota.points === 0 ? 'text-red-600' : 'text-yellow-600'}`}>
                              {koota.points}/{koota.maxPoints}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-center">
                            {koota.hasDosha ? (
                              <span className="text-red-500">⚠️</span>
                            ) : (
                              <span className="text-green-500">✓</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-gray-50 font-bold">
                        <td colSpan={3} className="py-3 px-4">
                          {locale === 'en' ? 'Total' : 'कुल'}
                        </td>
                        <td className="py-3 px-4 text-center text-lg">
                          {result.totalPoints}/36
                        </td>
                        <td className="py-3 px-4 text-center">
                          {result.percentage}%
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </SectionCard>

              {/* Doshas */}
              {(result.nadiDosha || result.bhakootDosha) && (
                <SectionCard title={t('results.doshasFound')} icon={<AlertTriangle className="w-5 h-5 text-red-500" />}>
                  {result.nadiDosha && (
                    <div className="mb-4 p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-700 mb-2">
                        {locale === 'en' ? 'Nadi Dosha' : 'नाड़ी दोष'}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {locale === 'en'
                          ? 'Both partners have the same Nadi, which is considered inauspicious for health and progeny.'
                          : 'दोनों साथियों की एक ही नाड़ी है, जो स्वास्थ्य और संतान के लिए अशुभ मानी जाती है।'}
                      </p>
                      <div className="text-sm">
                        <p className="font-medium mb-1">{locale === 'en' ? 'Remedies:' : 'उपाय:'}</p>
                        <ul className="list-disc list-inside space-y-1">
                          {NADI_DOSHA_REMEDIES.map((remedy, idx) => (
                            <li key={idx} className="text-gray-600">
                              {locale === 'hi' ? remedy.hi : remedy.en}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                  {result.bhakootDosha && (
                    <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                      <h4 className="font-semibold text-red-700 mb-2">
                        {locale === 'en' ? 'Bhakoot Dosha' : 'भकूट दोष'}
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        {locale === 'en'
                          ? 'The Moon signs are in an inauspicious combination, which may affect mutual harmony.'
                          : 'चंद्र राशियां अशुभ संयोजन में हैं, जो पारस्परिक सामंजस्य को प्रभावित कर सकती हैं।'}
                      </p>
                      <div className="text-sm">
                        <p className="font-medium mb-1">{locale === 'en' ? 'Remedies:' : 'उपाय:'}</p>
                        <ul className="list-disc list-inside space-y-1">
                          {BHAKOOT_DOSHA_REMEDIES.map((remedy, idx) => (
                            <li key={idx} className="text-gray-600">
                              {locale === 'hi' ? remedy.hi : remedy.en}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </SectionCard>
              )}

              {/* Good Match Message */}
              {result.interpretation.level === 'excellent' || result.interpretation.level === 'good' ? (
                <SectionCard title={locale === 'en' ? 'Auspicious Match!' : 'शुभ मिलान!'} accentBorder="warmaccent">
                  <div className="text-center py-4">
                    <CheckCircle className="w-12 h-12 text-warmaccent-600 mx-auto mb-3" />
                    <p className="text-warmaccent-700">
                      {locale === 'en'
                        ? 'This is a compatible match for marriage. May the couple be blessed with happiness and prosperity!'
                        : 'यह विवाह के लिए अनुकूल मिलान है। जोड़े को सुख और समृद्धि का आशीर्वाद मिले!'}
                    </p>
                  </div>
                </SectionCard>
              ) : null}
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
