'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
  generateBusinessNames,
  analyzeBusinessName,
  analyzeExistingBusinessName,
  getLetterPairsForIndustry,
  INDUSTRIES,
  FAVORABLE_LETTER_PAIRS,
  BusinessNameResult,
  GeneratedName,
  AnalysisResult,
  ExistingNameAnalysis,
  BusinessLetterSuggestion,
  LetterPair,
  BRAND_ENERGY_PROFILES,
} from '@/lib/numerology/business-name';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';
import { BirthDatePicker } from '@/components/ui/birth-date-picker';

// ============================================================================
// Trademark Disclaimer Component
// ============================================================================
function TrademarkDisclaimer({ locale }: { locale: 'en' | 'hi' }) {
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
      <div className="flex items-start gap-3">
        <span className="text-2xl">⚠️</span>
        <div>
          <h4 className="font-semibold text-amber-800 mb-1">
            {locale === 'en' ? 'Important Disclaimer' : 'महत्वपूर्ण अस्वीकरण'}
          </h4>
          <p className="text-sm text-amber-700">
            {locale === 'en'
              ? 'These are numerologically-optimized name suggestions only. Before registering any business name, please verify trademark availability through official government portals (MCA, USPTO, etc.) and conduct a thorough market search to ensure the name is not already in use.'
              : 'ये केवल अंकशास्त्रीय रूप से अनुकूलित नाम सुझाव हैं। किसी भी व्यापार नाम को पंजीकृत करने से पहले, कृपया आधिकारिक सरकारी पोर्टल (MCA, USPTO, आदि) के माध्यम से ट्रेडमार्क उपलब्धता की जांच करें और यह सुनिश्चित करने के लिए गहन बाजार खोज करें कि नाम पहले से उपयोग में नहीं है।'}
          </p>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Industry Combobox (Searchable Dropdown with "Other")
// ============================================================================
function IndustryCombobox({
  value,
  onChange,
  customValue,
  onCustomChange,
  locale,
}: {
  value: string;
  onChange: (id: string) => void;
  customValue: string;
  onCustomChange: (val: string) => void;
  locale: 'en' | 'hi';
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredIndustries = useMemo(() => {
    if (!search) return INDUSTRIES;
    const lower = search.toLowerCase();
    return INDUSTRIES.filter(
      (i) =>
        i.name.en.toLowerCase().includes(lower) ||
        i.name.hi.includes(search) ||
        i.keywords.some((k) => k.includes(lower))
    );
  }, [search]);

  const selectedIndustry = INDUSTRIES.find((i) => i.id === value);

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {locale === 'en' ? 'Industry / Business Type' : 'उद्योग / व्यापार प्रकार'}
      </label>
      <div className="relative" ref={dropdownRef}>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-deepteal-500 focus:ring-4 focus:ring-deepteal-100 transition-all bg-white text-left flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            {selectedIndustry ? (
              <>
                <span className="text-xl">{selectedIndustry.icon}</span>
                <span className="font-medium">{selectedIndustry.name[locale]}</span>
              </>
            ) : value === 'other' ? (
              <>
                <span className="text-xl">🔧</span>
                <span className="font-medium">{locale === 'en' ? 'Other' : 'अन्य'}</span>
              </>
            ) : (
              <span className="text-gray-400">
                {locale === 'en' ? 'Select your industry...' : 'अपना उद्योग चुनें...'}
              </span>
            )}
          </span>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>

          {isOpen && (
            <div
              className="absolute z-50 w-full mt-2 bg-white rounded-xl border-2 border-gray-200 shadow-xl overflow-hidden animate-fade-in-up"
            >
              <div className="p-2 border-b border-gray-100">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-deepteal-400 focus:outline-none text-sm"
                  autoFocus
                />
              </div>
              <div className="max-h-60 overflow-y-auto">
                {filteredIndustries.map((industry) => (
                  <button
                    key={industry.id}
                    type="button"
                    onClick={() => {
                      onChange(industry.id);
                      setIsOpen(false);
                      setSearch('');
                    }}
                    className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-deepteal-50 transition-colors ${
                      value === industry.id ? 'bg-deepteal-100' : ''
                    }`}
                  >
                    <span className="text-xl">{industry.icon}</span>
                    <div className="text-left">
                      <p className="font-medium text-gray-800">{industry.name[locale]}</p>
                      <p className="text-xs text-gray-500">{industry.keywords.slice(0, 4).join(', ')}</p>
                    </div>
                  </button>
                ))}
                <button
                  type="button"
                  onClick={() => {
                    onChange('other');
                    setIsOpen(false);
                    setSearch('');
                  }}
                  className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-amber-50 transition-colors border-t border-gray-100 ${
                    value === 'other' ? 'bg-amber-100' : ''
                  }`}
                >
                  <span className="text-xl">🔧</span>
                  <div className="text-left">
                    <p className="font-medium text-gray-800">{locale === 'en' ? 'Other' : 'अन्य'}</p>
                    <p className="text-xs text-gray-500">
                      {locale === 'en' ? 'Enter custom industry type' : 'कस्टम उद्योग प्रकार दर्ज करें'}
                    </p>
                  </div>
                </button>
              </div>
            </div>
          )}
      </div>

      {/* Custom Industry Input */}
        {value === 'other' && (
          <div
            className="overflow-hidden animate-fade-in-up"
          >
            <input
              type="text"
              value={customValue}
              onChange={(e) => onCustomChange(e.target.value)}
              className="w-full mt-2 px-4 py-3 rounded-xl border-2 border-amber-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all bg-amber-50"
            />
          </div>
        )}
    </div>
  );
}

// ============================================================================
// Character Length Selector
// ============================================================================
function CharacterLengthSelector({
  selected,
  onChange,
  locale,
}: {
  selected: number[];
  onChange: (lengths: number[]) => void;
  locale: 'en' | 'hi';
}) {
  const lengths = [
    { value: 4, label: '4' },
    { value: 5, label: '5' },
    { value: 6, label: '6' },
    { value: 7, label: '7' },
    { value: 8, label: '8+' },
  ];

  const toggle = (len: number) => {
    if (selected.includes(len)) {
      onChange(selected.filter((l) => l !== len));
    } else {
      onChange([...selected, len]);
    }
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {locale === 'en' ? 'Name Length (characters)' : 'नाम की लंबाई (अक्षर)'}
      </label>
      <p className="text-xs text-gray-500">
        {locale === 'en' ? 'Select preferred lengths (leave empty for all)' : 'पसंदीदा लंबाई चुनें (सभी के लिए खाली छोड़ें)'}
      </p>
      <div className="flex gap-2 flex-wrap">
        {lengths.map((len) => (
          <button
            key={len.value}
            type="button"
            onClick={() => toggle(len.value)}
            className={`px-4 py-2 rounded-xl font-semibold transition-all ${
              selected.includes(len.value)
                ? 'bg-deepteal-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            {len.label}
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Name Type Toggles
// ============================================================================
function NameTypeToggles({
  values,
  onChange,
  locale,
}: {
  values: {
    english: boolean;
    distortion: boolean;
    sanskrit: boolean;
    fusion: boolean;
  };
  onChange: (key: string, val: boolean) => void;
  locale: 'en' | 'hi';
}) {
  const types = [
    {
      key: 'english',
      label: { en: 'English Words', hi: 'अंग्रेजी शब्द' },
      icon: '🔤',
      desc: { en: 'Clean, professional names', hi: 'साफ, पेशेवर नाम' },
    },
    {
      key: 'distortion',
      label: { en: 'Creative Spellings', hi: 'रचनात्मक वर्तनी' },
      icon: '✨',
      desc: { en: 'Blinder → Blynder', hi: 'Blinder → Blynder' },
    },
    {
      key: 'sanskrit',
      label: { en: 'Sanskrit/Hindi', hi: 'संस्कृत/हिंदी' },
      icon: '🕉️',
      desc: { en: 'Traditional roots', hi: 'पारंपरिक जड़ें' },
    },
    {
      key: 'fusion',
      label: { en: 'Fusion Names', hi: 'फ्यूज़न नाम' },
      icon: '🔀',
      desc: { en: 'Modern + Traditional', hi: 'आधुनिक + पारंपरिक' },
    },
  ];

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {locale === 'en' ? 'Name Types to Generate' : 'उत्पन्न करने के लिए नाम प्रकार'}
      </label>
      <div className="grid grid-cols-2 gap-3">
        {types.map((type) => (
          <button
            key={type.key}
            type="button"
            onClick={() => onChange(type.key, !values[type.key as keyof typeof values])}
            className={`p-4 rounded-xl border-2 transition-all text-left ${
              values[type.key as keyof typeof values]
                ? 'border-deepteal-500 bg-deepteal-50'
                : 'border-gray-200 bg-white hover:border-gray-300'
            }`}
          >
            <div className="flex items-start gap-3">
              <span className="text-2xl">{type.icon}</span>
              <div>
                <p className="font-semibold text-gray-800">{type.label[locale]}</p>
                <p className="text-xs text-gray-500">{type.desc[locale]}</p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

// ============================================================================
// Generated Name Card
// ============================================================================
function NameCard({
  name,
  locale,
  index,
  onAnalyze,
}: {
  name: GeneratedName;
  locale: 'en' | 'hi';
  index: number;
  onAnalyze: (name: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);
  const brandEnergy = BRAND_ENERGY_PROFILES[name.pythagoreanNumber];

  const categoryConfig: Record<string, { icon: string; color: string; label: { en: string; hi: string } }> = {
    english: { icon: '🔤', color: 'bg-deepteal-100 text-deepteal-700', label: { en: 'English', hi: 'अंग्रेजी' } },
    distortion: { icon: '✨', color: 'bg-deepteal-100 text-deepteal-700', label: { en: 'Creative', hi: 'रचनात्मक' } },
    sanskrit: { icon: '🕉️', color: 'bg-amber-100 text-amber-700', label: { en: 'Sanskrit', hi: 'संस्कृत' } },
    hindi: { icon: '🇮🇳', color: 'bg-orange-100 text-orange-700', label: { en: 'Hindi', hi: 'हिंदी' } },
    fusion: { icon: '🔀', color: 'bg-deepteal-100 text-deepteal-700', label: { en: 'Fusion', hi: 'फ्यूज़न' } },
    acronym: { icon: '📝', color: 'bg-gray-100 text-gray-700', label: { en: 'Acronym', hi: 'संक्षिप्त' } },
  };

  const config = categoryConfig[name.category] || categoryConfig.english;
  const scoreColor = name.compatibilityScore >= 85 ? 'border-green-400' : name.compatibilityScore >= 70 ? 'border-deepteal-400' : 'border-amber-400';
  const scoreTextColor = name.compatibilityScore >= 85 ? 'text-green-600' : name.compatibilityScore >= 70 ? 'text-deepteal-600' : 'text-amber-600';

  return (
    <div className="animate-fade-in-up">
      <div
        onClick={() => setExpanded(!expanded)}
        className={`bg-white rounded-2xl border-2 ${expanded ? 'border-deepteal-400' : 'border-gray-100'} shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden`}
      >
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className={`${config.color} px-2 py-0.5 rounded-lg text-xs font-semibold flex items-center gap-1`}>
                  {config.icon} {config.label[locale]}
                </span>
                <span className="text-xs text-gray-400">{name.name.length} chars</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 tracking-wide">{name.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{name.meaning[locale]}</p>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-14 h-14 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-4 ${scoreColor}`}>
                <span className={`text-lg font-bold ${scoreTextColor}`}>{name.compatibilityScore}%</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 mt-3">
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-full bg-deepteal-100 flex items-center justify-center text-deepteal-700 font-bold text-xs">
                {name.pythagoreanNumber}
              </span>
              <span className="text-xs text-gray-500">Pyth.</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-full bg-deepteal-100 flex items-center justify-center text-deepteal-700 font-bold text-xs">
                {name.chaldeanNumber}
              </span>
              <span className="text-xs text-gray-500">Chal.</span>
            </div>
            {brandEnergy && (
              <span className="text-xs text-gray-400">
                {brandEnergy.name[locale]}
              </span>
            )}
          </div>
        </div>

          {expanded && (
            <div
              className="border-t border-gray-100 bg-gradient-to-r from-gray-50 to-slate-50 animate-fade-in-up"
            >
              <div className="p-4 space-y-3">
                <p className="text-gray-700 text-sm">{name.reasoning[locale]}</p>
                {brandEnergy && (
                  <div className="flex flex-wrap gap-2">
                    {brandEnergy.strengths.slice(0, 2).map((s, i) => (
                      <span key={i} className="px-2 py-1 bg-green-50 text-green-700 rounded-lg text-xs">
                        {s[locale]}
                      </span>
                    ))}
                  </div>
                )}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onAnalyze(name.name);
                  }}
                  className="px-4 py-2 bg-deepteal-500 text-white rounded-lg text-sm font-medium hover:bg-deepteal-600 transition-colors"
                >
                  {locale === 'en' ? 'Full Analysis' : 'पूर्ण विश्लेषण'}
                </button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

// ============================================================================
// Quick Analysis Panel
// ============================================================================
function QuickAnalysis({
  ownerDOB,
  industryId,
  locale,
}: {
  ownerDOB: string;
  industryId: string;
  locale: 'en' | 'hi';
}) {
  const [testName, setTestName] = useState('');
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const handleAnalyze = () => {
    if (testName.trim() && ownerDOB) {
      const analysis = analyzeBusinessName(testName.trim(), ownerDOB, industryId);
      setResult(analysis);
    }
  };

  const ratingColors: Record<string, string> = {
    excellent: 'bg-green-50 text-green-700 border-green-200',
    good: 'bg-deepteal-50 text-deepteal-700 border-deepteal-200',
    moderate: 'bg-amber-50 text-amber-700 border-amber-200',
    challenging: 'bg-red-50 text-red-700 border-red-200',
  };

  return (
    <div className="bg-gradient-to-r from-deepteal-50 to-warmaccent-50 rounded-2xl p-6 border border-deepteal-100">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-2xl">🔍</span>
        {locale === 'en' ? 'Test Any Name' : 'किसी भी नाम का परीक्षण करें'}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {locale === 'en'
          ? 'Enter any business name to check its numerological compatibility'
          : 'इसकी अंकशास्त्रीय संगतता जांचने के लिए कोई भी व्यापार नाम दर्ज करें'}
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
          className="flex-1 px-4 py-3 rounded-xl border-2 border-deepteal-200 focus:border-deepteal-500 focus:ring-4 focus:ring-deepteal-100 transition-all"
        />
        <button
          onClick={handleAnalyze}
          disabled={!testName.trim()}
          className="w-full sm:w-auto px-6 py-3 bg-deepteal-500 text-white rounded-xl font-medium hover:bg-deepteal-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all whitespace-nowrap"
        >
          {locale === 'en' ? 'Analyze' : 'विश्लेषण'}
        </button>
      </div>

        {result && (
          <div
            className="mt-4 p-4 bg-white rounded-xl border border-deepteal-100 animate-fade-in-up"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xl font-bold text-gray-800">{result.name}</p>
                <div className="flex gap-4 text-sm">
                  <span className="text-deepteal-600">Pyth: {result.pythagoreanNumber}</span>
                  <span className="text-deepteal-600">Chal: {result.chaldeanNumber}</span>
                </div>
                <p className="text-sm text-gray-600">{result.brandEnergy?.name[locale]}</p>
              </div>
              <div className={`px-4 py-2 rounded-xl font-semibold border-2 ${ratingColors[result.rating]}`}>
                {result.compatibilityScore}%
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

// ============================================================================
// Mode Toggle Component
// ============================================================================
function ModeToggle({
  mode,
  onChange,
  locale,
}: {
  mode: 'generate' | 'validate';
  onChange: (mode: 'generate' | 'validate') => void;
  locale: 'en' | 'hi';
}) {
  return (
    <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
      <button
        type="button"
        onClick={() => onChange('generate')}
        className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
          mode === 'generate'
            ? 'bg-white text-deepteal-600 shadow-md'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        <span className="text-xl">✨</span>
        {locale === 'en' ? 'Generate New Names' : 'नए नाम बनाएं'}
      </button>
      <button
        type="button"
        onClick={() => onChange('validate')}
        className={`flex-1 py-3 px-4 rounded-lg font-semibold transition-all flex items-center justify-center gap-2 ${
          mode === 'validate'
            ? 'bg-white text-deepteal-600 shadow-md'
            : 'text-gray-600 hover:text-gray-800'
        }`}
      >
        <span className="text-xl">🔍</span>
        {locale === 'en' ? 'Validate Existing Name' : 'मौजूदा नाम जांचें'}
      </button>
    </div>
  );
}

// ============================================================================
// Existing Name Validation Section with Letter Suggestions
// ============================================================================
function ExistingNameValidator({
  ownerDOB,
  industryId,
  locale,
}: {
  ownerDOB: string;
  industryId: string;
  locale: 'en' | 'hi';
}) {
  const [existingName, setExistingName] = useState('');
  const [analysis, setAnalysis] = useState<ExistingNameAnalysis | null>(null);

  const handleValidate = () => {
    if (existingName.trim() && ownerDOB) {
      const result = analyzeExistingBusinessName(existingName.trim(), ownerDOB, industryId);
      setAnalysis(result);
    }
  };

  const ratingConfig: Record<string, { color: string; icon: string; label: { en: string; hi: string } }> = {
    excellent: { color: 'bg-green-100 text-green-700 border-green-300', icon: '🌟', label: { en: 'Excellent Alignment', hi: 'उत्कृष्ट संरेखण' } },
    good: { color: 'bg-deepteal-100 text-deepteal-700 border-deepteal-300', icon: '✅', label: { en: 'Good Alignment', hi: 'अच्छा संरेखण' } },
    moderate: { color: 'bg-amber-100 text-amber-700 border-amber-300', icon: '⚖️', label: { en: 'Moderate Alignment', hi: 'मध्यम संरेखण' } },
    needs_optimization: { color: 'bg-red-100 text-red-700 border-red-300', icon: '✏️', label: { en: 'Needs Optimization', hi: 'अनुकूलन आवश्यक' } },
  };

  const operationConfig: Record<string, { icon: string; color: string; label: { en: string; hi: string } }> = {
    add: { icon: '+', color: 'bg-green-500', label: { en: 'Add', hi: 'जोड़ें' } },
    remove: { icon: '−', color: 'bg-red-500', label: { en: 'Remove', hi: 'हटाएं' } },
    double: { icon: '×2', color: 'bg-deepteal-500', label: { en: 'Double', hi: 'दोगुना' } },
  };

  return (
    <div className="bg-gradient-to-br from-slate-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
      <h3 className="text-lg font-bold text-gray-800 mb-2 flex items-center gap-2">
        <span className="text-2xl">🔍</span>
        {locale === 'en' ? 'Validate Your Existing Business Name' : 'अपने मौजूदा व्यापार नाम की जांच करें'}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {locale === 'en'
          ? 'Enter your current business name to check its numerological alignment and get optimization suggestions'
          : 'इसकी अंकशास्त्रीय संरेखण जांचने और अनुकूलन सुझाव प्राप्त करने के लिए अपना वर्तमान व्यापार नाम दर्ज करें'}
      </p>

      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <input
          type="text"
          value={existingName}
          onChange={(e) => setExistingName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleValidate()}
          className="flex-1 px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deepteal-500 focus:ring-4 focus:ring-deepteal-100 transition-all"
        />
        <button
          onClick={handleValidate}
          disabled={!existingName.trim() || !ownerDOB}
          className="w-full sm:w-auto px-6 py-3 bg-deepteal-500 text-white rounded-xl font-medium hover:bg-deepteal-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all whitespace-nowrap"
        >
          {locale === 'en' ? 'Analyze' : 'विश्लेषण'}
        </button>
      </div>

      {!ownerDOB && (
        <p className="text-sm text-amber-600 mb-4">
          {locale === 'en' ? '⚠️ Please enter owner\'s date of birth first' : '⚠️ कृपया पहले मालिक की जन्म तिथि दर्ज करें'}
        </p>
      )}

      {analysis && (
        <div className="space-y-4 animate-fade-in-up">
          {/* Current Analysis */}
          <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-500 mb-1">
                  {locale === 'en' ? 'Analyzing:' : 'विश्लेषण:'}
                </p>
                <p className="text-2xl font-bold text-gray-800">{analysis.name}</p>
              </div>
              <div className={`px-4 py-2 rounded-xl font-bold text-lg border-2 ${ratingConfig[analysis.rating].color}`}>
                {analysis.currentAlignment}%
              </div>
            </div>

            <div className="flex flex-wrap gap-3 mb-4">
              <span className={`px-3 py-1.5 rounded-full text-sm font-medium border ${ratingConfig[analysis.rating].color}`}>
                {ratingConfig[analysis.rating].icon} {ratingConfig[analysis.rating].label[locale]}
              </span>
              <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                Pyth: {analysis.pythagoreanNumber}
              </span>
              <span className="px-3 py-1.5 rounded-full text-sm font-medium bg-gray-100 text-gray-600">
                Chal: {analysis.chaldeanNumber}
              </span>
            </div>

            <div className="p-3 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">{analysis.brandEnergy?.name[locale]}:</span>{' '}
                {analysis.brandEnergy?.strengths[0]?.[locale]}
              </p>
            </div>
          </div>

          {/* Letter Suggestions */}
          {analysis.letterSuggestions.length > 0 && analysis.rating !== 'excellent' && (
            <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm">
              <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="text-xl">✏️</span>
                {locale === 'en' ? 'Optimization Suggestions' : 'अनुकूलन सुझाव'}
              </h4>
              <p className="text-sm text-gray-500 mb-4">
                {locale === 'en'
                  ? 'Small spelling adjustments to improve numerological alignment. Place letters anywhere in the name.'
                  : 'अंकशास्त्रीय संरेखण सुधारने के लिए छोटे वर्तनी समायोजन। अक्षरों को नाम में कहीं भी रखें।'}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {analysis.letterSuggestions.map((suggestion, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gradient-to-r from-gray-50 to-slate-50 rounded-xl border border-gray-100 hover:border-deepteal-200 transition-all"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`w-10 h-10 ${operationConfig[suggestion.operation].color} text-white rounded-lg flex items-center justify-center font-bold text-lg`}>
                        {operationConfig[suggestion.operation].icon}
                      </div>
                      <div className="w-12 h-12 bg-gradient-to-br from-deepteal-400 to-deepteal-600 text-white rounded-xl flex items-center justify-center font-bold text-2xl shadow-md">
                        {suggestion.letter}
                      </div>
                      <div className="flex-1">
                        <p className="font-semibold text-gray-800">
                          {operationConfig[suggestion.operation].label[locale]} "{suggestion.letter}"
                        </p>
                        <p className="text-xs text-gray-500">
                          {locale === 'en' ? `Value: ${suggestion.letterValue}` : `मान: ${suggestion.letterValue}`}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm font-mono">
                        {suggestion.currentNumber}
                      </span>
                      <span className="text-gray-400">→</span>
                      <span className="px-2 py-1 bg-green-100 text-green-700 rounded text-sm font-mono font-bold">
                        {suggestion.newNumber}
                      </span>
                      <span className="ml-auto text-green-600 font-bold text-sm">
                        +{suggestion.alignmentChange}%
                      </span>
                    </div>

                    <p className="text-xs text-gray-600 leading-relaxed">
                      {suggestion.whyThisWorks[locale]}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-4 p-3 bg-deepteal-50 rounded-lg border border-deepteal-100">
                <p className="text-sm text-deepteal-700">
                  <span className="font-semibold">💡 {locale === 'en' ? 'Tip:' : 'सुझाव:'}</span>{' '}
                  {locale === 'en'
                    ? 'You can add the suggested letter anywhere in your name - beginning, middle, or end. The numerological value remains the same.'
                    : 'आप सुझाए गए अक्षर को अपने नाम में कहीं भी जोड़ सकते हैं - शुरुआत, बीच या अंत में। अंकशास्त्रीय मान समान रहता है।'}
                </p>
              </div>
            </div>
          )}

          {analysis.rating === 'excellent' && (
            <div className="bg-green-50 rounded-xl p-4 border border-green-200">
              <p className="text-green-700 font-medium flex items-center gap-2">
                <span className="text-2xl">🌟</span>
                {locale === 'en'
                  ? 'Your business name has excellent numerological alignment! No changes recommended.'
                  : 'आपके व्यापार नाम में उत्कृष्ट अंकशास्त्रीय संरेखण है! कोई बदलाव अनुशंसित नहीं।'}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

// ============================================================================
// Letter Pairs Section for DIY Name Building
// ============================================================================
function LetterPairsSection({
  industryId,
  locale,
}: {
  industryId: string;
  locale: 'en' | 'hi';
}) {
  const pairs = useMemo(() => getLetterPairsForIndustry(industryId), [industryId]);
  const [expanded, setExpanded] = useState(false);

  const displayPairs = expanded ? pairs : pairs.slice(0, 8);

  return (
    <div className="bg-gradient-to-br from-deepteal-50 to-warmaccent-50 rounded-2xl p-6 border border-deepteal-100">
      <div className="flex items-start gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 flex items-center justify-center flex-shrink-0">
          <span className="text-2xl">🔤</span>
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-800 mb-1">
            {locale === 'en' ? 'Build Your Own Name' : 'अपना खुद का नाम बनाएं'}
          </h3>
          <p className="text-sm text-gray-600">
            {locale === 'en'
              ? 'Want to create something unique? Use these letter pairs as building blocks!'
              : 'कुछ अनूठा बनाना चाहते हैं? इन अक्षर जोड़ियों को बिल्डिंग ब्लॉक्स के रूप में उपयोग करें!'}
          </p>
        </div>
      </div>

      <div className="bg-white/60 rounded-xl p-4 mb-4 border border-deepteal-100">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">💡</span>
          <span className="font-semibold text-gray-700">
            {locale === 'en' ? 'How to Use These Letter Pairs:' : 'इन अक्षर जोड़ियों का उपयोग कैसे करें:'}
          </span>
        </div>
        <ol className="text-sm text-gray-600 space-y-1 ml-6 list-decimal">
          <li>{locale === 'en' ? 'Pick 2-3 pairs that resonate with your brand vision' : '2-3 जोड़ियां चुनें जो आपके ब्रांड विज़न से मेल खाती हों'}</li>
          <li>{locale === 'en' ? 'Combine them to form a unique word (e.g., "NE" + "XI" + "A" = "Nexia")' : 'उन्हें मिलाकर एक अनूठा शब्द बनाएं (उदा. "NE" + "XI" + "A" = "Nexia")'}</li>
          <li>{locale === 'en' ? 'Test your creation using the "Validate" tab above' : '"Validate" टैब का उपयोग करके अपनी रचना का परीक्षण करें'}</li>
        </ol>
      </div>

      <p className="text-sm text-deepteal-700 font-medium mb-4">
        {locale === 'en'
          ? `Letter pairs optimized for your industry — each carries specific numerological energy:`
          : `आपके उद्योग के लिए अनुकूलित अक्षर जोड़ियां — प्रत्येक में विशिष्ट अंकशास्त्रीय ऊर्जा है:`}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
        {displayPairs.map((pair, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl p-4 border border-deepteal-100 hover:border-deepteal-300 hover:shadow-md transition-all cursor-default"
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl font-bold text-deepteal-600 font-mono tracking-wider">
                {pair.letters}
              </span>
              <div className="flex-1 text-right">
                <span className="text-xs bg-deepteal-100 text-deepteal-600 px-2 py-0.5 rounded">
                  P:{pair.pythagoreanValue}
                </span>
              </div>
            </div>
            <p className="text-xs text-gray-600 leading-snug">{pair.energy[locale]}</p>
          </div>
        ))}
      </div>

      {pairs.length > 8 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-deepteal-600 hover:text-deepteal-800 font-medium text-sm flex items-center gap-1 mx-auto"
        >
          {expanded
            ? (locale === 'en' ? 'Show Less' : 'कम दिखाएं')
            : (locale === 'en' ? `Show All ${pairs.length} Pairs` : `सभी ${pairs.length} जोड़े दिखाएं`)}
          <svg
            className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================
export default function BusinessNameCalculator() {
  const locale = useLocale() as 'en' | 'hi';
  const t = useTranslations('tools.numerology.businessName');
  const [mode, setMode] = useState<'generate' | 'validate'>('generate');
  const [ownerDOB, setOwnerDOB] = useState<Date | null>(null);
  const [industry, setIndustry] = useState('');
  const [customIndustry, setCustomIndustry] = useState('');
  const [characterLengths, setCharacterLengths] = useState<number[]>([]);
  const [nameTypes, setNameTypes] = useState({
    english: true,
    distortion: true,
    sanskrit: true,
    fusion: true,
  });
  const [additionalKeywords, setAdditionalKeywords] = useState('');
  const [result, setResult] = useState<BusinessNameResult | null>(null);

  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  const labels = useMemo(
    () => ({
      ownerDOB: locale === 'en' ? "Owner's Date of Birth" : 'मालिक की जन्म तिथि',
      keywords: locale === 'en' ? 'Additional Keywords (optional)' : 'अतिरिक्त कीवर्ड (वैकल्पिक)',
      keywordsPlaceholder: locale === 'en' ? 'e.g., eco, premium, fast...' : 'जैसे, इको, प्रीमियम, फास्ट...',
      generate: locale === 'en' ? 'Generate Business Names' : 'व्यापार नाम उत्पन्न करें',
      generated: locale === 'en' ? 'Generated Names' : 'उत्पन्न नाम',
      generatedDesc: locale === 'en'
        ? 'Names sorted by compatibility with your birth numbers'
        : 'आपके जन्म अंकों के साथ संगतता के अनुसार क्रमबद्ध नाम',
      noResults: locale === 'en'
        ? 'No names found matching your criteria. Try different options.'
        : 'आपके मापदंडों से मेल खाने वाला कोई नाम नहीं मिला। विभिन्न विकल्प आज़माएं।',
      yourNumbers: locale === 'en' ? 'Your Numbers' : 'आपके अंक',
      targetNumbers: locale === 'en' ? 'Lucky Numbers for Business' : 'व्यापार के लिए शुभ अंक',
    }),
    [locale]
  );

  // Convert Date to string format for the API
  const ownerDOBString = ownerDOB ? ownerDOB.toISOString().split('T')[0] : '';

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (ownerDOBString && (industry || customIndustry)) {
      const keywords = additionalKeywords
        .split(/[,\s]+/)
        .map((k) => k.trim())
        .filter((k) => k.length > 0);

      const generationResult = generateBusinessNames({
        ownerDOB: ownerDOBString,
        industry: industry || 'other',
        customIndustry: industry === 'other' ? customIndustry : undefined,
        characterLengths,
        includeEnglish: nameTypes.english,
        includeDistortions: nameTypes.distortion,
        includeSanskrit: nameTypes.sanskrit,
        includeHindi: false,
        includeFusion: nameTypes.fusion,
        baseKeywords: keywords,
      });

      setResult(generationResult);
    }
  };

  const handleNameTypeChange = (key: string, val: boolean) => {
    setNameTypes((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Trademark Disclaimer */}
      <TrademarkDisclaimer locale={locale} />

      {/* Mode Toggle */}
      <ModeToggle mode={mode} onChange={setMode} locale={locale} />

      {/* Input Form */}
      <div
        className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border border-gray-100 animate-fade-in-up"
      >
        {/* Common Fields (always shown) */}
        <div className="space-y-6 mb-6">
          {/* Owner DOB */}
          <BirthDatePicker
            label={labels.ownerDOB}
            value={ownerDOB}
            onChange={setOwnerDOB}
            locale={locale}
            minYear={1900}
            maxYear={new Date().getFullYear()}
            required
          />

          {/* Industry Selection */}
          <IndustryCombobox
            value={industry}
            onChange={setIndustry}
            customValue={customIndustry}
            onCustomChange={setCustomIndustry}
            locale={locale}
          />
        </div>

        {/* Validate Mode Content */}
        {mode === 'validate' && (
          <div className="space-y-6">
            <ExistingNameValidator
              ownerDOB={ownerDOBString}
              industryId={industry}
              locale={locale}
            />
            <LetterPairsSection
              industryId={industry}
              locale={locale}
            />
          </div>
        )}

        {/* Generate Mode Content */}
        {mode === 'generate' && (
          <form onSubmit={handleGenerate} className="space-y-6">
            {/* Character Length */}
            <CharacterLengthSelector
              selected={characterLengths}
              onChange={setCharacterLengths}
              locale={locale}
            />

            {/* Name Types */}
            <NameTypeToggles
              values={nameTypes}
              onChange={handleNameTypeChange}
              locale={locale}
            />

            {/* Additional Keywords */}
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                {labels.keywords}
              </label>
              <input
                type="text"
                value={additionalKeywords}
                onChange={(e) => setAdditionalKeywords(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-deepteal-500 focus:ring-4 focus:ring-deepteal-100 transition-all"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!ownerDOBString || (!industry && !customIndustry)}
              className="w-full py-4 px-6 bg-gradient-to-r from-deepteal-500 via-warmaccent-500 to-deepteal-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
            >
              <span className="text-2xl">✨</span>
              {labels.generate}
            </button>
          </form>
        )}
      </div>

      {/* Educational Section */}
      {mode === 'generate' && !result && (
        <EducationalSection
          title={educational.title}
          content={educational.content}
          blogLink={`/${locale}/blog/business-name-analyzer-numerology`}
          blogLinkText={locale === 'hi' ? 'पूरी गाइड पढ़ें' : 'Read Complete Guide'}
        />
      )}

      {/* Results */}
        {mode === 'generate' && result && (
          <div
            key="results"
            className="space-y-6 animate-fade-in-up"
          >
            {/* Numbers Summary */}
            <div className="bg-gradient-to-br from-deepteal-900 via-deepteal-800 to-deepteal-900 rounded-3xl p-6 text-white shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-xs text-deepteal-300 mb-1">{locale === 'en' ? 'Life Path' : 'मूलांक'}</p>
                  <p className="text-3xl font-bold">{result.ownerLifePathNumber}</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-xs text-deepteal-300 mb-1">{locale === 'en' ? 'Birth Day' : 'जन्म दिन'}</p>
                  <p className="text-3xl font-bold">{result.ownerBirthDayNumber}</p>
                </div>
                <div className="col-span-2 bg-white/10 rounded-xl p-4">
                  <p className="text-xs text-deepteal-300 mb-2">{labels.targetNumbers}</p>
                  <div className="flex flex-wrap gap-2">
                    {result.targetNumbers.map((num) => (
                      <span
                        key={num}
                        className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center text-white font-bold shadow"
                      >
                        {num}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Analysis */}
            <QuickAnalysis ownerDOB={ownerDOBString} industryId={industry} locale={locale} />

            {/* Related Tools Section */}
            <RelatedToolsSection
              tools={relatedTools}
              locale={locale as 'en' | 'hi'}
            />

            {/* Generated Names */}
            <div className="space-y-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{labels.generated}</h2>
                <p className="text-sm text-gray-500">{labels.generatedDesc}</p>
              </div>

              {result.generatedNames.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {result.generatedNames.map((name, idx) => (
                    <NameCard
                      key={`${name.name}-${idx}`}
                      name={name}
                      locale={locale}
                      index={idx}
                      onAnalyze={(n) => {
                        const el = document.querySelector('input[placeholder*="business name"]');
                        if (el) {
                          (el as HTMLInputElement).value = n;
                          (el as HTMLInputElement).dispatchEvent(new Event('input', { bubbles: true }));
                        }
                      }}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className="text-center py-12 bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl border border-gray-100 animate-fade-in-up"
                >
                  <div className="text-6xl mb-4">🤔</div>
                  <p className="text-xl text-gray-600">{labels.noResults}</p>
                </div>
              )}
            </div>
          </div>
        )}
    </div>
  );
}
