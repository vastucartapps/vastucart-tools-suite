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

interface MuhuratFinderCalculatorProps {
  locale: string;
}

// Indian cities and states with coordinates (sorted alphabetically)
const CITIES = [
  // Metro Cities
  { id: 'delhi', name: { en: 'Delhi (NCR)', hi: 'दिल्ली (एनसीआर)' }, lat: 28.6139, lon: 77.2090 },
  { id: 'mumbai', name: { en: 'Mumbai', hi: 'मुंबई' }, lat: 19.0760, lon: 72.8777 },
  { id: 'bangalore', name: { en: 'Bangalore', hi: 'बेंगलुरु' }, lat: 12.9716, lon: 77.5946 },
  { id: 'chennai', name: { en: 'Chennai', hi: 'चेन्नई' }, lat: 13.0827, lon: 80.2707 },
  { id: 'kolkata', name: { en: 'Kolkata', hi: 'कोलकाता' }, lat: 22.5726, lon: 88.3639 },
  { id: 'hyderabad', name: { en: 'Hyderabad', hi: 'हैदराबाद' }, lat: 17.3850, lon: 78.4867 },

  // Major Cities (A-Z)
  { id: 'agra', name: { en: 'Agra', hi: 'आगरा' }, lat: 27.1767, lon: 78.0081 },
  { id: 'ahmedabad', name: { en: 'Ahmedabad', hi: 'अहमदाबाद' }, lat: 23.0225, lon: 72.5714 },
  { id: 'ajmer', name: { en: 'Ajmer', hi: 'अजमेर' }, lat: 26.4499, lon: 74.6399 },
  { id: 'aligarh', name: { en: 'Aligarh', hi: 'अलीगढ़' }, lat: 27.8974, lon: 78.0880 },
  { id: 'allahabad', name: { en: 'Prayagraj (Allahabad)', hi: 'प्रयागराज' }, lat: 25.4358, lon: 81.8463 },
  { id: 'amritsar', name: { en: 'Amritsar', hi: 'अमृतसर' }, lat: 31.6340, lon: 74.8723 },
  { id: 'aurangabad', name: { en: 'Aurangabad', hi: 'औरंगाबाद' }, lat: 19.8762, lon: 75.3433 },
  { id: 'ayodhya', name: { en: 'Ayodhya', hi: 'अयोध्या' }, lat: 26.7922, lon: 82.1998 },

  { id: 'bhopal', name: { en: 'Bhopal', hi: 'भोपाल' }, lat: 23.2599, lon: 77.4126 },
  { id: 'bhubaneswar', name: { en: 'Bhubaneswar', hi: 'भुवनेश्वर' }, lat: 20.2961, lon: 85.8245 },
  { id: 'bikaner', name: { en: 'Bikaner', hi: 'बीकानेर' }, lat: 28.0229, lon: 73.3119 },

  { id: 'chandigarh', name: { en: 'Chandigarh', hi: 'चंडीगढ़' }, lat: 30.7333, lon: 76.7794 },
  { id: 'coimbatore', name: { en: 'Coimbatore', hi: 'कोयंबटूर' }, lat: 11.0168, lon: 76.9558 },
  { id: 'cuttack', name: { en: 'Cuttack', hi: 'कटक' }, lat: 20.4625, lon: 85.8830 },

  { id: 'dehradun', name: { en: 'Dehradun', hi: 'देहरादून' }, lat: 30.3165, lon: 78.0322 },
  { id: 'dhanbad', name: { en: 'Dhanbad', hi: 'धनबाद' }, lat: 23.7957, lon: 86.4304 },
  { id: 'durgapur', name: { en: 'Durgapur', hi: 'दुर्गापुर' }, lat: 23.5204, lon: 87.3119 },
  { id: 'dwarka', name: { en: 'Dwarka', hi: 'द्वारका' }, lat: 22.2442, lon: 68.9685 },

  { id: 'faridabad', name: { en: 'Faridabad', hi: 'फरीदाबाद' }, lat: 28.4089, lon: 77.3178 },

  { id: 'gaya', name: { en: 'Gaya', hi: 'गया' }, lat: 24.7914, lon: 85.0002 },
  { id: 'gorakhpur', name: { en: 'Gorakhpur', hi: 'गोरखपुर' }, lat: 26.7606, lon: 83.3732 },
  { id: 'gurgaon', name: { en: 'Gurugram', hi: 'गुरुग्राम' }, lat: 28.4595, lon: 77.0266 },
  { id: 'guwahati', name: { en: 'Guwahati', hi: 'गुवाहाटी' }, lat: 26.1445, lon: 91.7362 },
  { id: 'gwalior', name: { en: 'Gwalior', hi: 'ग्वालियर' }, lat: 26.2183, lon: 78.1828 },

  { id: 'haridwar', name: { en: 'Haridwar', hi: 'हरिद्वार' }, lat: 29.9457, lon: 78.1642 },
  { id: 'howrah', name: { en: 'Howrah', hi: 'हावड़ा' }, lat: 22.5958, lon: 88.2636 },

  { id: 'indore', name: { en: 'Indore', hi: 'इंदौर' }, lat: 22.7196, lon: 75.8577 },

  { id: 'jabalpur', name: { en: 'Jabalpur', hi: 'जबलपुर' }, lat: 23.1815, lon: 79.9864 },
  { id: 'jaipur', name: { en: 'Jaipur', hi: 'जयपुर' }, lat: 26.9124, lon: 75.7873 },
  { id: 'jalandhar', name: { en: 'Jalandhar', hi: 'जालंधर' }, lat: 31.3260, lon: 75.5762 },
  { id: 'jammu', name: { en: 'Jammu', hi: 'जम्मू' }, lat: 32.7266, lon: 74.8570 },
  { id: 'jamshedpur', name: { en: 'Jamshedpur', hi: 'जमशेदपुर' }, lat: 22.8046, lon: 86.2029 },
  { id: 'jodhpur', name: { en: 'Jodhpur', hi: 'जोधपुर' }, lat: 26.2389, lon: 73.0243 },

  { id: 'kanpur', name: { en: 'Kanpur', hi: 'कानपुर' }, lat: 26.4499, lon: 80.3319 },
  { id: 'kochi', name: { en: 'Kochi (Cochin)', hi: 'कोच्चि' }, lat: 9.9312, lon: 76.2673 },
  { id: 'kota', name: { en: 'Kota', hi: 'कोटा' }, lat: 25.2138, lon: 75.8648 },

  { id: 'lucknow', name: { en: 'Lucknow', hi: 'लखनऊ' }, lat: 26.8467, lon: 80.9462 },
  { id: 'ludhiana', name: { en: 'Ludhiana', hi: 'लुधियाना' }, lat: 30.9010, lon: 75.8573 },

  { id: 'madurai', name: { en: 'Madurai', hi: 'मदुरै' }, lat: 9.9252, lon: 78.1198 },
  { id: 'mathura', name: { en: 'Mathura', hi: 'मथुरा' }, lat: 27.4924, lon: 77.6737 },
  { id: 'meerut', name: { en: 'Meerut', hi: 'मेरठ' }, lat: 28.9845, lon: 77.7064 },
  { id: 'moradabad', name: { en: 'Moradabad', hi: 'मुरादाबाद' }, lat: 28.8386, lon: 78.7733 },
  { id: 'mysore', name: { en: 'Mysore', hi: 'मैसूर' }, lat: 12.2958, lon: 76.6394 },

  { id: 'nagpur', name: { en: 'Nagpur', hi: 'नागपुर' }, lat: 21.1458, lon: 79.0882 },
  { id: 'nashik', name: { en: 'Nashik', hi: 'नासिक' }, lat: 19.9975, lon: 73.7898 },
  { id: 'noida', name: { en: 'Noida', hi: 'नोएडा' }, lat: 28.5355, lon: 77.3910 },

  { id: 'patna', name: { en: 'Patna', hi: 'पटना' }, lat: 25.5941, lon: 85.1376 },
  { id: 'pondicherry', name: { en: 'Puducherry', hi: 'पुडुचेरी' }, lat: 11.9416, lon: 79.8083 },
  { id: 'pune', name: { en: 'Pune', hi: 'पुणे' }, lat: 18.5204, lon: 73.8567 },
  { id: 'puri', name: { en: 'Puri', hi: 'पुरी' }, lat: 19.8135, lon: 85.8312 },

  { id: 'raipur', name: { en: 'Raipur', hi: 'रायपुर' }, lat: 21.2514, lon: 81.6296 },
  { id: 'rajkot', name: { en: 'Rajkot', hi: 'राजकोट' }, lat: 22.3039, lon: 70.8022 },
  { id: 'ranchi', name: { en: 'Ranchi', hi: 'रांची' }, lat: 23.3441, lon: 85.3096 },
  { id: 'rishikesh', name: { en: 'Rishikesh', hi: 'ऋषिकेश' }, lat: 30.0869, lon: 78.2676 },

  { id: 'shimla', name: { en: 'Shimla', hi: 'शिमला' }, lat: 31.1048, lon: 77.1734 },
  { id: 'siliguri', name: { en: 'Siliguri', hi: 'सिलीगुड़ी' }, lat: 26.7271, lon: 88.3953 },
  { id: 'solapur', name: { en: 'Solapur', hi: 'सोलापुर' }, lat: 17.6599, lon: 75.9064 },
  { id: 'srinagar', name: { en: 'Srinagar', hi: 'श्रीनगर' }, lat: 34.0837, lon: 74.7973 },
  { id: 'surat', name: { en: 'Surat', hi: 'सूरत' }, lat: 21.1702, lon: 72.8311 },

  { id: 'thane', name: { en: 'Thane', hi: 'ठाणे' }, lat: 19.2183, lon: 72.9781 },
  { id: 'thiruvananthapuram', name: { en: 'Thiruvananthapuram', hi: 'तिरुवनंतपुरम' }, lat: 8.5241, lon: 76.9366 },
  { id: 'tirupati', name: { en: 'Tirupati', hi: 'तिरुपति' }, lat: 13.6288, lon: 79.4192 },
  { id: 'trichy', name: { en: 'Tiruchirappalli', hi: 'तिरुचिरापल्ली' }, lat: 10.7905, lon: 78.7047 },

  { id: 'udaipur', name: { en: 'Udaipur', hi: 'उदयपुर' }, lat: 24.5854, lon: 73.7125 },
  { id: 'ujjain', name: { en: 'Ujjain', hi: 'उज्जैन' }, lat: 23.1765, lon: 75.7885 },

  { id: 'vadodara', name: { en: 'Vadodara', hi: 'वडोदरा' }, lat: 22.3072, lon: 73.1812 },
  { id: 'varanasi', name: { en: 'Varanasi', hi: 'वाराणसी' }, lat: 25.3176, lon: 82.9739 },
  { id: 'vijayawada', name: { en: 'Vijayawada', hi: 'विजयवाड़ा' }, lat: 16.5062, lon: 80.6480 },
  { id: 'visakhapatnam', name: { en: 'Visakhapatnam', hi: 'विशाखापत्तनम' }, lat: 17.6868, lon: 83.2185 },
  { id: 'vrindavan', name: { en: 'Vrindavan', hi: 'वृंदावन' }, lat: 27.5530, lon: 77.6993 },
];

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
