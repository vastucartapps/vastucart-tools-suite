'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Search, Calendar, MapPin, Clock, Star, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { FAQSection } from '@/components/tools/faq-section';

import {
  findMuhurats,
  formatMuhuratTime,
  formatMuhuratWindow,
  getQualityInfo,
  type MuhuratWindow,
  type MuhuratSearchResult,
} from '@/lib/astrology/engine/muhurat';
import { formatTimePeriod } from '@/lib/astrology/engine/inauspicious';
import { getAllMuhuratTypes, type MuhuratType } from '@/lib/astrology/data/muhurat-rules';
import { INDIAN_CITIES as CITIES } from '@/lib/data/indian-cities';

interface MuhuratFinderCalculatorProps {
  locale: string;
}

export function MuhuratFinderCalculator({ locale }: MuhuratFinderCalculatorProps) {
  const t = useTranslations('tools.muhurat.muhuratFinder');
  const tCommon = useTranslations('common');

  const [muhuratType, setMuhuratType] = useState<MuhuratType>('business-start');
  const [selectedCity, setSelectedCity] = useState('delhi');
  const [daysToSearch, setDaysToSearch] = useState(30);
  const [result, setResult] = useState<MuhuratSearchResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [expandedMuhurat, setExpandedMuhurat] = useState<number | null>(null);

  const muhuratTypes = useMemo(() => getAllMuhuratTypes(), []);

  const handleSearch = () => {
    setIsCalculating(true);
    setExpandedMuhurat(null);

    // Use setTimeout to allow UI to update
    setTimeout(() => {
      const city = CITIES.find(c => c.id === selectedCity) || CITIES[0];
      const startDate = new Date();

      const searchResult = findMuhurats(
        muhuratType,
        startDate,
        daysToSearch,
        city.lat,
        city.lon,
        5.5, // IST
        40   // Minimum score
      );

      setResult(searchResult);
      setIsCalculating(false);
    }, 100);
  };

  const formatDate = (date: Date): string => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(locale === 'hi' ? 'hi-IN' : 'en-IN', options);
  };

  const getSelectedMuhuratInfo = () => {
    return muhuratTypes.find(m => m.id === muhuratType);
  };

  // Get FAQ data
  const faqs = t.raw('faqs') as Array<{ question: string; answer: string }>;

  return (
    <ToolLayout
      title={t('title')}
      description={t('description')}
      icon="📅"
      category="muhurat"
      categoryLabel={locale === 'en' ? 'Muhurat' : 'मुहूर्त'}
    >
      {/* Search Form */}
      <Card className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-6">
          {locale === 'en' ? 'Find Auspicious Muhurat' : 'शुभ मुहूर्त खोजें'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Muhurat Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {locale === 'en' ? 'Muhurat Type' : 'मुहूर्त का प्रकार'}
            </label>
            <Select
              value={muhuratType}
              onChange={(value) => setMuhuratType(value as MuhuratType)}
              options={muhuratTypes.map(m => ({
                value: m.id,
                label: `${m.icon} ${m.name[locale as 'en' | 'hi']}`,
              }))}
            />
          </div>

          {/* City Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              <MapPin className="w-4 h-4 inline mr-1" />
              {locale === 'en' ? 'Your City' : 'आपका शहर'}
            </label>
            <Select
              value={selectedCity}
              onChange={setSelectedCity}
              options={CITIES.map(c => ({
                value: c.id,
                label: c.name[locale as 'en' | 'hi'],
              }))}
            />
          </div>
        </div>

        {/* Days to Search */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            <Calendar className="w-4 h-4 inline mr-1" />
            {locale === 'en' ? 'Search Period' : 'खोज अवधि'}
          </label>
          <div className="flex gap-3">
            {[7, 15, 30, 60].map((days) => (
              <button
                key={days}
                onClick={() => setDaysToSearch(days)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  daysToSearch === days
                    ? 'bg-amber-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {days} {locale === 'en' ? 'Days' : 'दिन'}
              </button>
            ))}
          </div>
        </div>

        <Button
          onClick={handleSearch}
          isLoading={isCalculating}
          leftIcon={<Search className="w-5 h-5" />}
          className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"
        >
          {locale === 'en' ? 'Find Muhurats' : 'मुहूर्त खोजें'}
        </Button>
      </Card>

      {/* Results */}
      {result && (
        <div className="animate-fade-in-up">
          {/* Summary */}
          <Card className="mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-2xl">
                {getSelectedMuhuratInfo()?.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">
                  {getSelectedMuhuratInfo()?.name[locale as 'en' | 'hi']}
                </h3>
                <p className="text-gray-600">
                  {locale === 'en'
                    ? `Found ${result.foundCount} auspicious times in next ${result.searchedDays} days`
                    : `अगले ${result.searchedDays} दिनों में ${result.foundCount} शुभ समय मिले`}
                </p>
              </div>
            </div>
          </Card>

          {/* Muhurat List */}
          {result.muhurats.length > 0 ? (
            <div className="space-y-4">
              {result.muhurats.map((muhurat, index) => {
                const qualityInfo = getQualityInfo(muhurat.score.quality, locale as 'en' | 'hi');
                const isExpanded = expandedMuhurat === index;

                return (
                  <Card
                    key={index}
                    className={`transition-all ${
                      muhurat.isAbhijit ? 'ring-2 ring-amber-300' : ''
                    }`}
                  >
                    {/* Main Info */}
                    <div
                      className="cursor-pointer"
                      onClick={() => setExpandedMuhurat(isExpanded ? null : index)}
                    >
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-start gap-4">
                          {muhurat.isAbhijit && (
                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                              <Star className="w-5 h-5 text-amber-600" />
                            </div>
                          )}
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-lg font-semibold text-gray-900">
                                {formatDate(muhurat.date)}
                              </span>
                              {muhurat.isAbhijit && (
                                <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full">
                                  {locale === 'en' ? 'Abhijit' : 'अभिजीत'}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-gray-600">
                              <Clock className="w-4 h-4" />
                              <span className="font-medium">
                                {formatMuhuratWindow(muhurat)}
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-4">
                          <div className="text-right">
                            <div className={`px-3 py-1 rounded-full text-sm font-medium ${qualityInfo.bgClass} ${qualityInfo.colorClass}`}>
                              {qualityInfo.label}
                            </div>
                            <div className="text-sm text-gray-500 mt-1">
                              {locale === 'en' ? 'Score' : 'स्कोर'}: {muhurat.score.total}/100
                            </div>
                          </div>
                          {isExpanded ? (
                            <ChevronUp className="w-5 h-5 text-gray-400" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>

                      {/* Warnings */}
                      {muhurat.warnings.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {muhurat.warnings.map((warning, i) => (
                            <span
                              key={i}
                              className="inline-flex items-center gap-1 px-2 py-1 bg-amber-50 text-amber-700 text-xs rounded-full"
                            >
                              <AlertTriangle className="w-3 h-3" />
                              {warning}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Expanded Details */}
                    {isExpanded && (
                      <div className="mt-6 pt-6 border-t border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-4">
                          {locale === 'en' ? 'Panchang Details' : 'पंचांग विवरण'}
                        </h4>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          {/* Tithi */}
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="text-xs text-gray-500 mb-1">
                              {locale === 'en' ? 'Tithi' : 'तिथि'}
                            </div>
                            <div className="font-medium text-gray-900">
                              {muhurat.panchang.tithi.info.name[locale as 'en' | 'hi']}
                            </div>
                          </div>

                          {/* Nakshatra */}
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="text-xs text-gray-500 mb-1">
                              {locale === 'en' ? 'Nakshatra' : 'नक्षत्र'}
                            </div>
                            <div className="font-medium text-gray-900">
                              {muhurat.panchang.nakshatra.name[locale as 'en' | 'hi']}
                            </div>
                          </div>

                          {/* Yoga */}
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="text-xs text-gray-500 mb-1">
                              {locale === 'en' ? 'Yoga' : 'योग'}
                            </div>
                            <div className="font-medium text-gray-900">
                              {muhurat.panchang.yoga.info.name[locale as 'en' | 'hi']}
                            </div>
                          </div>

                          {/* Karana */}
                          <div className="p-3 bg-gray-50 rounded-lg">
                            <div className="text-xs text-gray-500 mb-1">
                              {locale === 'en' ? 'Karana' : 'करण'}
                            </div>
                            <div className="font-medium text-gray-900">
                              {muhurat.panchang.karana.info.name[locale as 'en' | 'hi']}
                            </div>
                          </div>
                        </div>

                        {/* Inauspicious Periods */}
                        <h4 className="font-semibold text-gray-900 mb-3">
                          {locale === 'en' ? 'Inauspicious Periods to Avoid' : 'बचने योग्य अशुभ काल'}
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          <div className="p-3 bg-red-50 rounded-lg">
                            <div className="text-xs text-red-600 mb-1">
                              {locale === 'en' ? 'Raahu Kaal' : 'राहु काल'}
                            </div>
                            <div className="font-medium text-red-700">
                              {formatTimePeriod(muhurat.inauspiciousPeriods.raahuKaal)}
                            </div>
                          </div>
                          <div className="p-3 bg-red-50 rounded-lg">
                            <div className="text-xs text-red-600 mb-1">
                              {locale === 'en' ? 'Yamaganda' : 'यमगंड'}
                            </div>
                            <div className="font-medium text-red-700">
                              {formatTimePeriod(muhurat.inauspiciousPeriods.yamagandaKaal)}
                            </div>
                          </div>
                          <div className="p-3 bg-green-50 rounded-lg">
                            <div className="text-xs text-green-600 mb-1">
                              {locale === 'en' ? 'Abhijit Muhurat' : 'अभिजीत मुहूर्त'}
                            </div>
                            <div className="font-medium text-green-700">
                              {muhurat.inauspiciousPeriods.abhijitMuhurat
                                ? formatTimePeriod(muhurat.inauspiciousPeriods.abhijitMuhurat)
                                : locale === 'en' ? 'Not available' : 'उपलब्ध नहीं'}
                            </div>
                          </div>
                        </div>

                        {/* Score Breakdown */}
                        <h4 className="font-semibold text-gray-900 mt-6 mb-3">
                          {locale === 'en' ? 'Score Breakdown' : 'स्कोर विवरण'}
                        </h4>
                        <div className="grid grid-cols-3 md:grid-cols-6 gap-2">
                          {Object.entries(muhurat.score.breakdown).map(([key, value]) => (
                            <div key={key} className="text-center p-2 bg-gray-50 rounded-lg">
                              <div className="text-xs text-gray-500 capitalize">
                                {key === 'inauspiciousPeriods'
                                  ? (locale === 'en' ? 'Periods' : 'काल')
                                  : (locale === 'en' ? key : getHindiKey(key))}
                              </div>
                              <div className="font-semibold text-teal-600">{value}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </Card>
                );
              })}
            </div>
          ) : (
            <Card className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {locale === 'en' ? 'No Muhurats Found' : 'कोई मुहूर्त नहीं मिला'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Try extending the search period or selecting a different muhurat type.'
                  : 'खोज अवधि बढ़ाएं या अलग मुहूर्त प्रकार चुनें।'}
              </p>
            </Card>
          )}
        </div>
      )}

      {/* FAQ Section */}
      <FAQSection faqs={faqs} title={tCommon('faq')} />
    </ToolLayout>
  );
}

// Helper to get Hindi translations for score keys
function getHindiKey(key: string): string {
  const translations: Record<string, string> = {
    tithi: 'तिथि',
    nakshatra: 'नक्षत्र',
    yoga: 'योग',
    karana: 'करण',
    weekday: 'वार',
  };
  return translations[key] || key;
}
