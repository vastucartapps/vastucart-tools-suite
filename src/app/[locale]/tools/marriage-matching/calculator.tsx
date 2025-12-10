'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, Heart, AlertTriangle, CheckCircle } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';

import {
  calculateFullChart,
  searchPlaces,
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
  const [groomPlaceQuery, setGroomPlaceQuery] = useState('');
  const [groomPlace, setGroomPlace] = useState<Place | null>(null);
  const [showGroomDropdown, setShowGroomDropdown] = useState(false);

  // Bride form state
  const [brideDate, setBrideDate] = useState<Date | null>(null);
  const [brideHour, setBrideHour] = useState('12');
  const [brideMinute, setBrideMinute] = useState('00');
  const [bridePlaceQuery, setBridePlaceQuery] = useState('');
  const [bridePlace, setBridePlace] = useState<Place | null>(null);
  const [showBrideDropdown, setShowBrideDropdown] = useState(false);

  // Result state
  const [result, setResult] = useState<MatchResult | null>(null);
  const [groomDetails, setGroomDetails] = useState<{ rashi: number; nakshatra: number } | null>(null);
  const [brideDetails, setBrideDetails] = useState<{ rashi: number; nakshatra: number } | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Search results
  const groomSearchResults = useMemo(() => {
    if (!groomPlaceQuery || groomPlaceQuery.length < 2) return [];
    return searchPlaces(groomPlaceQuery, 8);
  }, [groomPlaceQuery]);

  const brideSearchResults = useMemo(() => {
    if (!bridePlaceQuery || bridePlaceQuery.length < 2) return [];
    return searchPlaces(bridePlaceQuery, 8);
  }, [bridePlaceQuery]);

  const handleGroomPlaceSelect = (place: Place) => {
    setGroomPlace(place);
    setGroomPlaceQuery(`${place.name}, ${place.state}`);
    setShowGroomDropdown(false);
  };

  const handleBridePlaceSelect = (place: Place) => {
    setBridePlace(place);
    setBridePlaceQuery(`${place.name}, ${place.state}`);
    setShowBrideDropdown(false);
  };

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
        console.error(err);
      } finally {
        setIsCalculating(false);
      }
    }, 500);
  };

  const handleReset = () => {
    setGroomDate(null);
    setGroomHour('12');
    setGroomMinute('00');
    setGroomPlaceQuery('');
    setGroomPlace(null);
    setBrideDate(null);
    setBrideHour('12');
    setBrideMinute('00');
    setBridePlaceQuery('');
    setBridePlace(null);
    setResult(null);
    setGroomDetails(null);
    setBrideDetails(null);
    setError(null);
  };

  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  const getScoreColor = (percentage: number) => {
    if (percentage >= 90) return 'text-blue-600';
    if (percentage >= 70) return 'text-green-600';
    if (percentage >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getScoreBg = (level: string) => {
    switch (level) {
      case 'excellent': return 'bg-gradient-to-r from-blue-500 to-teal-500';
      case 'good': return 'bg-gradient-to-r from-green-500 to-teal-500';
      case 'average': return 'bg-gradient-to-r from-yellow-500 to-orange-500';
      default: return 'bg-gradient-to-r from-red-500 to-pink-500';
    }
  };

  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;

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
              <h3 className="text-lg font-medium text-teal-700 flex items-center gap-2">
                <span>👤</span>
                {t('form.groomDetails')}
              </h3>

              <DatePicker
                label={t('form.birthDate')}
                value={groomDate}
                onChange={setGroomDate}
                placeholder={locale === 'en' ? 'Select date' : 'तारीख चुनें'}
                locale={locale}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.birthTime')}
                </label>
                <div className="flex items-center gap-2">
                  <select
                    value={groomHour}
                    onChange={(e) => setGroomHour(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    {hours.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                  <span className="text-xl font-bold text-gray-500">:</span>
                  <select
                    value={groomMinute}
                    onChange={(e) => setGroomMinute(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  >
                    {minutes.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.birthPlace')}
                </label>
                <input
                  type="text"
                  value={groomPlaceQuery}
                  onChange={(e) => {
                    setGroomPlaceQuery(e.target.value);
                    setShowGroomDropdown(true);
                    setGroomPlace(null);
                  }}
                  onFocus={() => setShowGroomDropdown(true)}
                  placeholder={locale === 'en' ? 'Type city name...' : 'शहर का नाम टाइप करें...'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                  autoComplete="off"
                />
                {showGroomDropdown && groomSearchResults.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-48 overflow-y-auto shadow-lg">
                    {groomSearchResults.map((place, idx) => (
                      <li
                        key={`groom-${place.name}-${idx}`}
                        onClick={() => handleGroomPlaceSelect(place)}
                        className="px-4 py-3 hover:bg-teal-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium">{place.name}</span>
                        <span className="text-sm text-gray-500 ml-1">, {place.state}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Bride Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-pink-700 flex items-center gap-2">
                <span>👩</span>
                {t('form.brideDetails')}
              </h3>

              <DatePicker
                label={t('form.birthDate')}
                value={brideDate}
                onChange={setBrideDate}
                placeholder={locale === 'en' ? 'Select date' : 'तारीख चुनें'}
                locale={locale}
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.birthTime')}
                </label>
                <div className="flex items-center gap-2">
                  <select
                    value={brideHour}
                    onChange={(e) => setBrideHour(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  >
                    {hours.map((h) => (
                      <option key={h} value={h}>{h}</option>
                    ))}
                  </select>
                  <span className="text-xl font-bold text-gray-500">:</span>
                  <select
                    value={brideMinute}
                    onChange={(e) => setBrideMinute(e.target.value)}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  >
                    {minutes.map((m) => (
                      <option key={m} value={m}>{m}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="relative">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  {t('form.birthPlace')}
                </label>
                <input
                  type="text"
                  value={bridePlaceQuery}
                  onChange={(e) => {
                    setBridePlaceQuery(e.target.value);
                    setShowBrideDropdown(true);
                    setBridePlace(null);
                  }}
                  onFocus={() => setShowBrideDropdown(true)}
                  placeholder={locale === 'en' ? 'Type city name...' : 'शहर का नाम टाइप करें...'}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  autoComplete="off"
                />
                {showBrideDropdown && brideSearchResults.length > 0 && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-48 overflow-y-auto shadow-lg">
                    {brideSearchResults.map((place, idx) => (
                      <li
                        key={`bride-${place.name}-${idx}`}
                        onClick={() => handleBridePlaceSelect(place)}
                        className="px-4 py-3 hover:bg-pink-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                      >
                        <span className="font-medium">{place.name}</span>
                        <span className="text-sm text-gray-500 ml-1">, {place.state}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
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

        {/* Results Section */}
          {result && groomDetails && brideDetails && (
            <div className="animate-fade-in-up space-y-6"
            >
              {/* Main Score Card */}
              <Card className={`p-8 text-white ${getScoreBg(result.interpretation.level)}`}>
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    {result.interpretation.level === 'excellent' || result.interpretation.level === 'good' ? (
                      <Heart className="w-16 h-16 fill-current" />
                    ) : (
                      <AlertTriangle className="w-16 h-16" />
                    )}
                  </div>

                  <div className="text-6xl font-bold mb-2">
                    {result.totalPoints}/36
                  </div>
                  <div className="text-2xl opacity-90 mb-2">
                    {result.percentage}% {locale === 'en' ? 'Match' : 'मिलान'}
                  </div>
                  <h2 className="text-3xl font-bold mb-3">
                    {locale === 'hi' ? result.interpretation.name.hi : result.interpretation.name.en}
                  </h2>
                  <p className="opacity-90 max-w-2xl mx-auto">
                    {locale === 'hi' ? result.interpretation.description.hi : result.interpretation.description.en}
                  </p>
                </div>

                <ShareResult
                  title={`Kundli Milan Result - ${result.totalPoints}/36 Points`}
                  text={`We got ${result.totalPoints}/36 points (${result.percentage}%) in Kundli Milan! Check your compatibility:`}
                  url={`https://vastutools.com/${locale}/tools/marriage-matching`}
                  shareLabel={tCommon('share')}
                  copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                />
              </Card>

              {/* Partner Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card className="p-4 bg-teal-50 border-teal-200">
                  <h3 className="font-semibold text-teal-800 mb-2">
                    👤 {locale === 'en' ? 'Groom' : 'वर'}
                  </h3>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="text-gray-600">{locale === 'en' ? 'Moon Sign' : 'चंद्र राशि'}:</span>
                      <span className="font-medium ml-2">
                        {locale === 'hi' ? RASHI_NAMES[groomDetails.rashi].hi : RASHI_NAMES[groomDetails.rashi].en}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-600">{locale === 'en' ? 'Nakshatra' : 'नक्षत्र'}:</span>
                      <span className="font-medium ml-2">
                        {locale === 'hi' ? NAKSHATRA_NAMES[groomDetails.nakshatra].hi : NAKSHATRA_NAMES[groomDetails.nakshatra].en}
                      </span>
                    </p>
                  </div>
                </Card>

                <Card className="p-4 bg-pink-50 border-pink-200">
                  <h3 className="font-semibold text-pink-800 mb-2">
                    👩 {locale === 'en' ? 'Bride' : 'वधू'}
                  </h3>
                  <div className="space-y-1 text-sm">
                    <p>
                      <span className="text-gray-600">{locale === 'en' ? 'Moon Sign' : 'चंद्र राशि'}:</span>
                      <span className="font-medium ml-2">
                        {locale === 'hi' ? RASHI_NAMES[brideDetails.rashi].hi : RASHI_NAMES[brideDetails.rashi].en}
                      </span>
                    </p>
                    <p>
                      <span className="text-gray-600">{locale === 'en' ? 'Nakshatra' : 'नक्षत्र'}:</span>
                      <span className="font-medium ml-2">
                        {locale === 'hi' ? NAKSHATRA_NAMES[brideDetails.nakshatra].hi : NAKSHATRA_NAMES[brideDetails.nakshatra].en}
                      </span>
                    </p>
                  </div>
                </Card>
              </div>

              {/* Koota Details */}
              <Card className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  {t('results.kootaBreakdown')}
                </h3>
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
              </Card>

              {/* Doshas */}
              {(result.nadiDosha || result.bhakootDosha) && (
                <Card className="p-6 bg-red-50 border-red-200">
                  <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    {t('results.doshasFound')}
                  </h3>

                  {result.nadiDosha && (
                    <div className="mb-4 p-4 bg-white rounded-lg">
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
                    <div className="p-4 bg-white rounded-lg">
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
                </Card>
              )}

              {/* Good Match Message */}
              {result.interpretation.level === 'excellent' || result.interpretation.level === 'good' ? (
                <Card className="p-6 bg-green-50 border-green-200">
                  <div className="text-center">
                    <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                    <h3 className="text-lg font-semibold text-green-800 mb-2">
                      {locale === 'en' ? 'Auspicious Match!' : 'शुभ मिलान!'}
                    </h3>
                    <p className="text-green-700">
                      {locale === 'en'
                        ? 'This is a compatible match for marriage. May the couple be blessed with happiness and prosperity!'
                        : 'यह विवाह के लिए अनुकूल मिलान है। जोड़े को सुख और समृद्धि का आशीर्वाद मिले!'}
                    </p>
                  </div>
                </Card>
              ) : null}
            </div>
          )}

        {/* FAQ Section */}
        <FAQSection title={tCommon('faq')} faqs={faqs} />
      </div>
    </ToolLayout>
  );
}
