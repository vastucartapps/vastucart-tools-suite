'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Calculator, RefreshCw, Loader2, CheckCircle, AlertTriangle, Heart } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { CustomSelect } from '@/components/ui/custom-select';
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard, SectionInfoRow } from '@/components/ui/section-card';
import { FAQSection } from '@/components/tools/faq-section';
import { ShareResult } from '@/components/tools/share-result';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

import {
  calculateFullChart,
  searchPlaces,
  type Place,
} from '@/lib/astrology';

import {
  MANGLIK_HOUSES,
  HOUSE_SEVERITY,
  HOUSE_EFFECTS,
  CANCELLATION_RULES,
  REMEDIES,
  SEVERITY_INTERPRETATION,
  doesJupiterAspectMars,
  areConjunct,
  FIRST_HOUSE_EXEMPT_SIGNS,
  MARS_OWN_SIGNS,
  MARS_EXALTATION_SIGN,
} from '@/lib/astrology/data/manglik-data';

interface ManglikCalculatorProps {
  locale: 'en' | 'hi';
}

interface ManglikResult {
  isManglik: boolean;
  marsHouseFromLagna: number;
  marsHouseFromMoon: number;
  marsSignIndex: number;
  severity: 'none' | 'low' | 'medium' | 'high' | 'cancelled';
  affectedAreas: { en: string; hi: string }[];
  activeCancellations: string[];
  manglikFromLagna: boolean;
  manglikFromMoon: boolean;
}

export default function ManglikCalculator({ locale }: ManglikCalculatorProps) {
  const t = useTranslations('tools.astrology.manglik');
  const tCommon = useTranslations('common');

  // Form state
  const [birthDate, setBirthDate] = useState<Date | null>(null);
  const [birthHour, setBirthHour] = useState('12');
  const [birthMinute, setBirthMinute] = useState('00');
  const [placeQuery, setPlaceQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [showPlaceDropdown, setShowPlaceDropdown] = useState(false);
  const [useManualCoords, setUseManualCoords] = useState(false);
  const [manualLat, setManualLat] = useState('');
  const [manualLng, setManualLng] = useState('');
  const [manualTz, setManualTz] = useState('5.5');

  // Result state
  const [result, setResult] = useState<ManglikResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Search results
  const searchResults = useMemo(() => {
    if (!placeQuery || placeQuery.length < 2) return [];
    return searchPlaces(placeQuery, 8);
  }, [placeQuery]);

  const handlePlaceSelect = (place: Place) => {
    setSelectedPlace(place);
    setPlaceQuery(`${place.name}, ${place.state}`);
    setShowPlaceDropdown(false);
  };

  const handleCalculate = () => {
    setError(null);

    if (!birthDate) {
      setError(locale === 'en' ? 'Please select birth date' : 'कृपया जन्म तिथि चुनें');
      return;
    }

    let latitude: number;
    let longitude: number;
    let timezone: number;

    if (useManualCoords) {
      latitude = parseFloat(manualLat);
      longitude = parseFloat(manualLng);
      timezone = parseFloat(manualTz);

      if (isNaN(latitude) || isNaN(longitude) || isNaN(timezone)) {
        setError(locale === 'en' ? 'Please enter valid coordinates' : 'कृपया वैध निर्देशांक दर्ज करें');
        return;
      }
    } else if (selectedPlace) {
      latitude = selectedPlace.lat;
      longitude = selectedPlace.lng;
      timezone = selectedPlace.tz;
    } else {
      setError(locale === 'en' ? 'Please select a birth place' : 'कृपया जन्म स्थान चुनें');
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      try {
        const chart = calculateFullChart({
          year: birthDate.getFullYear(),
          month: birthDate.getMonth() + 1,
          day: birthDate.getDate(),
          hour: parseInt(birthHour),
          minute: parseInt(birthMinute),
          latitude,
          longitude,
          timezone,
        });

        const marsHouseFromLagna = chart.planets.mars.house;
        const marsSignIndex = chart.planets.mars.sign.index;

        // Calculate Mars house from Moon
        const moonSignIndex = chart.moonSign.sign.index;
        const marsSignFromMoon = chart.planets.mars.sign.index;
        const marsHouseFromMoon = ((marsSignFromMoon - moonSignIndex + 12) % 12) + 1;

        // Check Manglik from Lagna
        const manglikFromLagna = MANGLIK_HOUSES.includes(marsHouseFromLagna);

        // Check Manglik from Moon
        const manglikFromMoon = MANGLIK_HOUSES.includes(marsHouseFromMoon);

        // Check for cancellations
        const activeCancellations: string[] = [];

        // Own sign cancellation
        if (MARS_OWN_SIGNS.includes(marsSignIndex)) {
          activeCancellations.push('own_sign');
        }

        // Exaltation cancellation
        if (marsSignIndex === MARS_EXALTATION_SIGN) {
          activeCancellations.push('exalted');
        }

        // First house special signs
        if (marsHouseFromLagna === 1 && FIRST_HOUSE_EXEMPT_SIGNS.includes(marsSignIndex)) {
          activeCancellations.push('first_house_special');
        }

        // Jupiter aspects Mars
        const jupiterHouse = chart.planets.jupiter.house;
        if (doesJupiterAspectMars(jupiterHouse, marsHouseFromLagna)) {
          activeCancellations.push('jupiter_aspect');
        }

        // Venus conjunct Mars
        const venusHouse = chart.planets.venus.house;
        if (areConjunct(venusHouse, marsHouseFromLagna)) {
          activeCancellations.push('venus_conjunction');
        }

        // Determine if Manglik
        const isManglik = manglikFromLagna || manglikFromMoon;

        // Collect affected areas
        const affectedAreas: { en: string; hi: string }[] = [];
        if (manglikFromLagna && HOUSE_EFFECTS[marsHouseFromLagna]) {
          affectedAreas.push(HOUSE_EFFECTS[marsHouseFromLagna]);
        }
        if (manglikFromMoon && marsHouseFromMoon !== marsHouseFromLagna && HOUSE_EFFECTS[marsHouseFromMoon]) {
          affectedAreas.push(HOUSE_EFFECTS[marsHouseFromMoon]);
        }

        // Determine severity
        let severity: 'none' | 'low' | 'medium' | 'high' | 'cancelled' = 'none';

        if (isManglik) {
          if (activeCancellations.length > 0) {
            severity = 'cancelled';
          } else {
            // Use highest severity from affected houses
            const severities = [];
            if (manglikFromLagna) severities.push(HOUSE_SEVERITY[marsHouseFromLagna]);
            if (manglikFromMoon) severities.push(HOUSE_SEVERITY[marsHouseFromMoon]);

            if (severities.includes('high')) severity = 'high';
            else if (severities.includes('medium')) severity = 'medium';
            else severity = 'low';

            // Both Lagna and Moon Manglik increases severity
            if (manglikFromLagna && manglikFromMoon && severity !== 'high') {
              severity = severity === 'low' ? 'medium' : 'high';
            }
          }
        }

        setResult({
          isManglik,
          marsHouseFromLagna,
          marsHouseFromMoon,
          marsSignIndex,
          severity,
          affectedAreas,
          activeCancellations,
          manglikFromLagna,
          manglikFromMoon,
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
    setPlaceQuery('');
    setSelectedPlace(null);
    setUseManualCoords(false);
    setManualLat('');
    setManualLng('');
    setManualTz('5.5');
    setResult(null);
    setError(null);
  };

  // Generate hours and minutes options
  const hours = Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));

  // Get severity info
  const severityInfo = result ? SEVERITY_INTERPRETATION[result.severity] : null;

  // Get severity color
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'none': return 'bg-green-500';
      case 'cancelled': return 'bg-teal-500';
      case 'low': return 'bg-yellow-500';
      case 'medium': return 'bg-orange-500';
      case 'high': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  // FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="♂️"
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
              <DatePicker
                label={t('form.birthDate')}
                value={birthDate}
                onChange={setBirthDate}
                placeholder={locale === 'en' ? 'Select birth date' : 'जन्म तिथि चुनें'}
                locale={locale}
              />
            </div>

            {/* Birth Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.birthTime')} *
              </label>
              <div className="flex items-center gap-2">
                <CustomSelect
                  value={birthHour}
                  onChange={setBirthHour}
                  options={hours.map((h) => ({ value: h, label: h }))}
                  className="flex-1"
                />
                <span className="text-xl font-bold text-gray-500">:</span>
                <CustomSelect
                  value={birthMinute}
                  onChange={setBirthMinute}
                  options={minutes.map((m) => ({ value: m, label: m }))}
                  className="flex-1"
                />
              </div>
            </div>

            {/* Birth Place */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t('form.birthPlace')} *
              </label>
              {!useManualCoords ? (
                <div className="relative">
                  <input
                    type="text"
                    value={placeQuery}
                    onChange={(e) => {
                      setPlaceQuery(e.target.value);
                      setShowPlaceDropdown(true);
                      setSelectedPlace(null);
                    }}
                    onFocus={() => setShowPlaceDropdown(true)}
                    placeholder={locale === 'en' ? 'Type city name...' : 'शहर का नाम टाइप करें...'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    data-form-type="other"
                    data-lpignore="true"
                    autoComplete="off"
                  />
                  {showPlaceDropdown && searchResults.length > 0 && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-lg mt-1 max-h-60 overflow-y-auto shadow-lg">
                      {searchResults.map((place, idx) => (
                        <li
                          key={`${place.name}-${idx}`}
                          onClick={() => handlePlaceSelect(place)}
                          className="px-4 py-3 hover:bg-red-50 cursor-pointer border-b border-gray-100 last:border-b-0"
                        >
                          <span className="font-medium">{place.name}</span>
                          <span className="text-sm text-gray-500 ml-1">, {place.state}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <button
                    type="button"
                    onClick={() => setUseManualCoords(true)}
                    className="text-sm text-red-600 hover:text-red-700 mt-2"
                  >
                    {t('form.manualCoords')}
                  </button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={manualLat}
                      onChange={(e) => setManualLat(e.target.value)}
                      placeholder={locale === 'en' ? 'Latitude' : 'अक्षांश'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                    <input
                      type="text"
                      value={manualLng}
                      onChange={(e) => setManualLng(e.target.value)}
                      placeholder={locale === 'en' ? 'Longitude' : 'देशांतर'}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                    />
                  </div>
                  <input
                    type="text"
                    value={manualTz}
                    onChange={(e) => setManualTz(e.target.value)}
                    placeholder={locale === 'en' ? 'Timezone (e.g., 5.5)' : 'समय क्षेत्र'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500"
                  />
                  <button
                    type="button"
                    onClick={() => setUseManualCoords(false)}
                    className="text-sm text-red-600 hover:text-red-700"
                  >
                    {t('form.searchPlace')}
                  </button>
                </div>
              )}
            </div>

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
          />
        )}

        {/* Results Section */}
          {result && severityInfo && (
            <div className="animate-fade-in-up space-y-6">
              {/* Main Result Card - Use saffron for positive results */}
              <HeroResultCard
                title={locale === 'en' ? 'Manglik Dosha Analysis' : 'मांगलिक दोष विश्लेषण'}
                subtitle={locale === 'en' ? 'Mars Position Assessment' : 'मंगल स्थिति मूल्यांकन'}
                icon={<Heart className="w-6 h-6 text-white" />}
                colorScheme={result.severity === 'none' || result.severity === 'cancelled' ? 'saffron' : 'teal'}
              >
                <div className="text-center py-6">
                  <div className="flex justify-center mb-4">
                    {result.severity === 'none' ? (
                      <CheckCircle className="w-16 h-16 text-white" />
                    ) : result.severity === 'cancelled' ? (
                      <CheckCircle className="w-16 h-16 text-white" />
                    ) : (
                      <AlertTriangle className="w-16 h-16 text-white" />
                    )}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {locale === 'hi' ? severityInfo.title.hi : severityInfo.title.en}
                  </h2>
                  <p className={`${result.severity === 'none' || result.severity === 'cancelled' ? 'text-saffron-200' : 'text-teal-200'} max-w-2xl mx-auto`}>
                    {locale === 'hi' ? severityInfo.description.hi : severityInfo.description.en}
                  </p>
                </div>

                {/* Mars Position Stats */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <HeroStatCard
                    label={t('results.marsFromLagna')}
                    value={`${t(`results.house${result.marsHouseFromLagna}`)}${result.manglikFromLagna ? ' ⚠️' : ''}`}
                    colorScheme={result.severity === 'none' || result.severity === 'cancelled' ? 'saffron' : 'teal'}
                  />
                  <HeroStatCard
                    label={t('results.marsFromMoon')}
                    value={`${t(`results.house${result.marsHouseFromMoon}`)}${result.manglikFromMoon ? ' ⚠️' : ''}`}
                    colorScheme={result.severity === 'none' || result.severity === 'cancelled' ? 'saffron' : 'teal'}
                  />
                </div>

                <div className="mt-6">
                  <ShareResult
                    title={`Manglik Dosha Check Result`}
                    text={result.isManglik
                      ? `I checked my Manglik status - ${severityInfo.title.en}. Check yours:`
                      : `I'm not Manglik! Check your Manglik status:`}
                    url={`https://tools.vastucart.in/${locale}/tools/manglik`}
                    shareLabel={tCommon('share')}
                    copiedLabel={locale === 'en' ? 'Copied!' : 'कॉपी हो गया!'}
                  />
                </div>
              </HeroResultCard>

              {/* Cancellations (if any) */}
              {result.activeCancellations.length > 0 && (
                <SectionCard
                  title={t('results.cancellations')}
                  accentBorder="saffron"
                  icon={<CheckCircle className="w-5 h-5 text-saffron-600" />}
                >
                  <div className="space-y-3">
                    {result.activeCancellations.map((cancellationId) => {
                      const rule = CANCELLATION_RULES.find(r => r.id === cancellationId);
                      if (!rule) return null;
                      return (
                        <div key={cancellationId} className="bg-saffron-50 p-3 rounded-lg border border-saffron-100">
                          <p className="font-medium text-saffron-800">
                            {locale === 'hi' ? rule.name.hi : rule.name.en}
                          </p>
                          <p className="text-sm text-saffron-700 mt-1">
                            {locale === 'hi' ? rule.description.hi : rule.description.en}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </SectionCard>
              )}

              {/* Affected Areas */}
              {result.isManglik && result.affectedAreas.length > 0 && result.severity !== 'cancelled' && (
                <SectionCard title={t('results.affectedAreas')}>
                  <div className="space-y-3">
                    {result.affectedAreas.map((area, idx) => (
                      <div key={idx} className="p-3 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-800">
                          {locale === 'hi' ? area.hi : area.en}
                        </p>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              )}

              {/* Remedies */}
              {result.isManglik && result.severity !== 'cancelled' && (
                <SectionCard title={t('results.remedies')} accentBorder="gradient">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {REMEDIES.map((remedy) => (
                      <div
                        key={remedy.id}
                        className="p-4 bg-gradient-to-r from-teal-50 to-saffron-50 rounded-lg border border-teal-100"
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-lg">
                            {remedy.type === 'puja' ? '🙏' :
                             remedy.type === 'mantra' ? '🕉️' :
                             remedy.type === 'gemstone' ? '💎' :
                             remedy.type === 'donation' ? '🎁' : '🌟'}
                          </span>
                          <h4 className="font-medium text-gray-900">
                            {locale === 'hi' ? remedy.name.hi : remedy.name.en}
                          </h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          {locale === 'hi' ? remedy.description.hi : remedy.description.en}
                        </p>
                      </div>
                    ))}
                  </div>
                </SectionCard>
              )}

              {/* Not Manglik - Good News */}
              {!result.isManglik && (
                <SectionCard title={t('results.noManglikTitle')} accentBorder="saffron">
                  <div className="text-center py-4">
                    <CheckCircle className="w-12 h-12 text-saffron-600 mx-auto mb-3" />
                    <p className="text-saffron-700">
                      {t('results.noManglikDescription')}
                    </p>
                  </div>
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
        <FAQSection title={tCommon('faq')} faqs={faqs} />
      </div>
    </ToolLayout>
  );
}
