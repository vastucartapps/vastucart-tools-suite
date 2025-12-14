'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import { Search, Calendar, MapPin, Clock, Star, AlertTriangle, ChevronDown, ChevronUp } from 'lucide-react';

import { ToolLayout } from '@/components/tools/tool-layout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Select } from '@/components/ui/select';
import { FAQSection } from '@/components/tools/faq-section';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';
import { HeroResultCard, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard } from '@/components/ui/section-card';

import {
  findMuhurats,
  getMuhuratsForDate,
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

// Interface for Today's Muhurats result
interface TodayMuhuratResult {
  date: Date;
  cityName: { en: string; hi: string };
  muhurats: Array<{
    type: MuhuratType;
    typeInfo: { id: MuhuratType; name: { en: string; hi: string }; icon: string };
    windows: MuhuratWindow[];
  }>;
  totalCount: number;
}

export function MuhuratFinderCalculator({ locale }: MuhuratFinderCalculatorProps) {
  const t = useTranslations('tools.muhurat.muhuratFinder');
  const tCommon = useTranslations('common');

  const [searchMode, setSearchMode] = useState<'specific' | 'today'>('specific');
  const [muhuratType, setMuhuratType] = useState<MuhuratType>('business-start');
  const [selectedCity, setSelectedCity] = useState('delhi');
  const [daysToSearch, setDaysToSearch] = useState(30);
  const [result, setResult] = useState<MuhuratSearchResult | null>(null);
  const [todayResult, setTodayResult] = useState<TodayMuhuratResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [expandedMuhurat, setExpandedMuhurat] = useState<number | null>(null);
  const [expandedTodayType, setExpandedTodayType] = useState<MuhuratType | null>(null);

  const muhuratTypes = useMemo(() => getAllMuhuratTypes(), []);

  const handleSearch = () => {
    setIsCalculating(true);
    setExpandedMuhurat(null);
    setExpandedTodayType(null);

    // Use setTimeout to allow UI to update
    setTimeout(() => {
      const city = CITIES.find(c => c.id === selectedCity) || CITIES[0];
      const today = new Date();

      if (searchMode === 'today') {
        // Get muhurats for today across all types
        const todayMuhurats: TodayMuhuratResult['muhurats'] = [];
        let totalCount = 0;

        for (const muhuratTypeInfo of muhuratTypes) {
          const windows = getMuhuratsForDate(
            today,
            muhuratTypeInfo.id,
            city.lat,
            city.lon,
            5.5 // IST
          );

          // Filter to only show windows with score >= 40
          const goodWindows = windows.filter(w => w.score.total >= 40);

          if (goodWindows.length > 0) {
            todayMuhurats.push({
              type: muhuratTypeInfo.id,
              typeInfo: muhuratTypeInfo,
              windows: goodWindows,
            });
            totalCount += goodWindows.length;
          }
        }

        setTodayResult({
          date: today,
          cityName: city.name,
          muhurats: todayMuhurats,
          totalCount,
        });
        setResult(null);
      } else {
        // Standard search for specific muhurat type
        const searchResult = findMuhurats(
          muhuratType,
          today,
          daysToSearch,
          city.lat,
          city.lon,
          5.5, // IST
          40   // Minimum score
        );

        setResult(searchResult);
        setTodayResult(null);
      }
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
  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  return (
    <ToolLayout
      title={t('title')}
      description={t('subtitle')}
      icon="📅"
      category="muhurat"
      categoryLabel={locale === 'en' ? 'Muhurat' : 'मुहूर्त'}
    >
      {/* Search Form */}
      <SectionCard
        title={locale === 'en' ? 'Find Auspicious Muhurat' : 'शुभ मुहूर्त खोजें'}
        icon={<Calendar className="w-5 h-5 text-teal-600" />}
        accentBorder="gradient"
        className="mb-8"
      >

        {/* Search Mode Toggle */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {locale === 'en' ? 'Search Mode' : 'खोज मोड'}
          </label>
          <div className="flex gap-3">
            <button
              onClick={() => setSearchMode('today')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                searchMode === 'today'
                  ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Star className="w-5 h-5" />
              {locale === 'en' ? "Today's Muhurats" : 'आज के मुहूर्त'}
            </button>
            <button
              onClick={() => setSearchMode('specific')}
              className={`flex-1 px-4 py-3 rounded-lg font-medium transition-all flex items-center justify-center gap-2 ${
                searchMode === 'specific'
                  ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Calendar className="w-5 h-5" />
              {locale === 'en' ? 'Search by Type' : 'प्रकार से खोजें'}
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            {searchMode === 'today'
              ? (locale === 'en'
                  ? 'See all auspicious times available today for different activities'
                  : 'विभिन्न कार्यों के लिए आज उपलब्ध सभी शुभ समय देखें')
              : (locale === 'en'
                  ? 'Search for a specific muhurat type over multiple days'
                  : 'कई दिनों में किसी विशिष्ट मुहूर्त प्रकार की खोज करें')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Muhurat Type Selection - only for specific mode */}
          {searchMode === 'specific' && (
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
          )}

          {/* City Selection */}
          <div className={searchMode === 'today' ? 'md:col-span-2' : ''}>
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

        {/* Days to Search - only for specific mode */}
        {searchMode === 'specific' && (
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
        )}

        <Button
          onClick={handleSearch}
          isLoading={isCalculating}
          leftIcon={searchMode === 'today' ? <Star className="w-5 h-5" /> : <Search className="w-5 h-5" />}
          className={searchMode === 'today'
            ? "bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700"
            : "bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700"}
        >
          {searchMode === 'today'
            ? (locale === 'en' ? "Show Today's Muhurats" : 'आज के मुहूर्त दिखाएं')
            : (locale === 'en' ? 'Find Muhurats' : 'मुहूर्त खोजें')}
        </Button>
      </SectionCard>

      {!result && !todayResult && (
        <EducationalSection
          title={educational.title}
          content={educational.content}
        />
      )}

      {/* Today's Muhurats Results */}
      {todayResult && (
        <div className="animate-fade-in-up">
          {/* Today's Summary */}
          <HeroResultCard
            title={locale === 'en' ? "Today's Auspicious Muhurats" : 'आज के शुभ मुहूर्त'}
            subtitle={`${formatDate(todayResult.date)} • ${todayResult.cityName[locale as 'en' | 'hi']}`}
            icon={<span className="text-2xl">☀️</span>}
            colorScheme={todayResult.totalCount > 0 ? 'saffron' : 'teal'}
            className="mb-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <HeroStatCard
                label={locale === 'en' ? 'Auspicious Times' : 'शुभ समय'}
                value={todayResult.totalCount.toString()}
                colorScheme={todayResult.totalCount > 0 ? 'saffron' : 'teal'}
              />
              <HeroStatCard
                label={locale === 'en' ? 'Activity Types' : 'गतिविधि प्रकार'}
                value={todayResult.muhurats.length.toString()}
                colorScheme={todayResult.totalCount > 0 ? 'saffron' : 'teal'}
              />
              <HeroStatCard
                label={locale === 'en' ? 'Status' : 'स्थिति'}
                value={todayResult.totalCount > 0
                  ? (locale === 'en' ? 'Available' : 'उपलब्ध')
                  : (locale === 'en' ? 'None' : 'कोई नहीं')}
                colorScheme={todayResult.totalCount > 0 ? 'saffron' : 'teal'}
              />
            </div>
          </HeroResultCard>

          {/* Muhurats by Type */}
          {todayResult.muhurats.length > 0 ? (
            <div className="space-y-4">
              {todayResult.muhurats.map((muhuratGroup) => {
                const isExpanded = expandedTodayType === muhuratGroup.type;

                return (
                  <SectionCard
                    key={muhuratGroup.type}
                    accentBorder="saffron"
                    className="cursor-pointer hover:shadow-lg transition-all"
                    onClick={() => setExpandedTodayType(isExpanded ? null : muhuratGroup.type)}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-100 to-saffron-100 flex items-center justify-center text-2xl">
                          {muhuratGroup.typeInfo.icon}
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-gray-900">
                            {muhuratGroup.typeInfo.name[locale as 'en' | 'hi']}
                          </h4>
                          <p className="text-gray-500 text-sm">
                            {muhuratGroup.windows.length} {locale === 'en' ? 'time slot' : 'समय'}{muhuratGroup.windows.length !== 1 ? (locale === 'en' ? 's' : '') : ''}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        {/* Best score badge */}
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                          getQualityInfo(muhuratGroup.windows[0].score.quality, locale as 'en' | 'hi').bgClass
                        } ${
                          getQualityInfo(muhuratGroup.windows[0].score.quality, locale as 'en' | 'hi').colorClass
                        }`}>
                          {getQualityInfo(muhuratGroup.windows[0].score.quality, locale as 'en' | 'hi').label}
                        </div>
                        {isExpanded ? (
                          <ChevronUp className="w-5 h-5 text-gray-400" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-gray-400" />
                        )}
                      </div>
                    </div>

                    {/* Expanded time windows */}
                    {isExpanded && (
                      <div className="mt-4 pt-4 border-t border-gray-200 space-y-3">
                        {muhuratGroup.windows.map((window, idx) => {
                          const qualityInfo = getQualityInfo(window.score.quality, locale as 'en' | 'hi');
                          return (
                            <div
                              key={idx}
                              className={`p-4 rounded-lg ${
                                window.isAbhijit ? 'bg-amber-50 ring-1 ring-amber-300' : 'bg-gray-50'
                              }`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                  <Clock className="w-4 h-4 text-gray-500" />
                                  <span className="font-semibold text-gray-900">
                                    {formatMuhuratWindow(window)}
                                  </span>
                                  {window.isAbhijit && (
                                    <span className="px-2 py-0.5 bg-amber-100 text-amber-700 text-xs font-medium rounded-full flex items-center gap-1">
                                      <Star className="w-3 h-3" />
                                      {locale === 'en' ? 'Abhijit' : 'अभिजीत'}
                                    </span>
                                  )}
                                </div>
                                <div className="flex items-center gap-2">
                                  <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${qualityInfo.bgClass} ${qualityInfo.colorClass}`}>
                                    {qualityInfo.label}
                                  </span>
                                  <span className="text-sm text-gray-500">
                                    {window.score.total}/100
                                  </span>
                                </div>
                              </div>

                              {/* Panchang quick info */}
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm mt-3">
                                <div className="bg-white p-2 rounded">
                                  <span className="text-gray-500">{locale === 'en' ? 'Tithi' : 'तिथि'}: </span>
                                  <span className="font-medium">{window.panchang.tithi.info.name[locale as 'en' | 'hi']}</span>
                                </div>
                                <div className="bg-white p-2 rounded">
                                  <span className="text-gray-500">{locale === 'en' ? 'Nakshatra' : 'नक्षत्र'}: </span>
                                  <span className="font-medium">{window.panchang.nakshatra.name[locale as 'en' | 'hi']}</span>
                                </div>
                                <div className="bg-white p-2 rounded">
                                  <span className="text-gray-500">{locale === 'en' ? 'Yoga' : 'योग'}: </span>
                                  <span className="font-medium">{window.panchang.yoga.info.name[locale as 'en' | 'hi']}</span>
                                </div>
                                <div className="bg-white p-2 rounded">
                                  <span className="text-gray-500">{locale === 'en' ? 'Day' : 'वार'}: </span>
                                  <span className="font-medium">{window.panchang.weekday.info.name[locale as 'en' | 'hi']}</span>
                                </div>
                              </div>

                              {/* Warnings */}
                              {window.warnings.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                  {window.warnings.map((warning, i) => (
                                    <span
                                      key={i}
                                      className="inline-flex items-center gap-1 px-2 py-1 bg-amber-100 text-amber-700 text-xs rounded-full"
                                    >
                                      <AlertTriangle className="w-3 h-3" />
                                      {warning}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </SectionCard>
                );
              })}
            </div>
          ) : (
            <SectionCard className="text-center py-12">
              <div className="text-6xl mb-4">🌙</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {locale === 'en' ? 'No Muhurats Available Today' : 'आज कोई मुहूर्त उपलब्ध नहीं'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'The Panchang elements today are not favorable. Try searching for upcoming days.'
                  : 'आज का पंचांग अनुकूल नहीं है। आगामी दिनों के लिए खोज करें।'}
              </p>
            </SectionCard>
          )}
        </div>
      )}

      {/* Specific Muhurat Results */}
      {result && (
        <div className="animate-fade-in-up">
          {/* Summary */}
          <HeroResultCard
            title={getSelectedMuhuratInfo()?.name[locale as 'en' | 'hi']}
            subtitle={locale === 'en'
              ? `Found ${result.foundCount} auspicious times in next ${result.searchedDays} days`
              : `अगले ${result.searchedDays} दिनों में ${result.foundCount} शुभ समय मिले`}
            icon={<span className="text-2xl">{getSelectedMuhuratInfo()?.icon}</span>}
            colorScheme={result.foundCount > 0 ? 'saffron' : 'teal'}
            className="mb-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <HeroStatCard
                label={locale === 'en' ? 'Muhurats Found' : 'मुहूर्त मिले'}
                value={result.foundCount.toString()}
                colorScheme={result.foundCount > 0 ? 'saffron' : 'teal'}
              />
              <HeroStatCard
                label={locale === 'en' ? 'Search Period' : 'खोज अवधि'}
                value={`${result.searchedDays} ${locale === 'en' ? 'days' : 'दिन'}`}
                colorScheme={result.foundCount > 0 ? 'saffron' : 'teal'}
              />
              <HeroStatCard
                label={locale === 'en' ? 'Status' : 'स्थिति'}
                value={result.foundCount > 0
                  ? (locale === 'en' ? 'Available' : 'उपलब्ध')
                  : (locale === 'en' ? 'None' : 'कोई नहीं')}
                colorScheme={result.foundCount > 0 ? 'saffron' : 'teal'}
              />
            </div>
          </HeroResultCard>

          {/* Muhurat List */}
          {result.muhurats.length > 0 ? (
            <div className="space-y-4">
              {result.muhurats.map((muhurat, index) => {
                const qualityInfo = getQualityInfo(muhurat.score.quality, locale as 'en' | 'hi');
                const isExpanded = expandedMuhurat === index;

                return (
                  <SectionCard
                    key={index}
                    accentBorder={muhurat.isAbhijit ? 'saffron' : 'teal'}
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
                  </SectionCard>
                );
              })}
            </div>
          ) : (
            <SectionCard className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {locale === 'en' ? 'No Muhurats Found' : 'कोई मुहूर्त नहीं मिला'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Try extending the search period or selecting a different muhurat type.'
                  : 'खोज अवधि बढ़ाएं या अलग मुहूर्त प्रकार चुनें।'}
              </p>
            </SectionCard>
          )}
        </div>
      )}

      {(result || todayResult) && (
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
