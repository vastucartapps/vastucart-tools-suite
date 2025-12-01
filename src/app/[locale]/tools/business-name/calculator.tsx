'use client';

import { useState, useMemo, useCallback, useRef, useEffect } from 'react';
import { useLocale } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import {
  generateBusinessNames,
  analyzeBusinessName,
  INDUSTRIES,
  BusinessNameResult,
  GeneratedName,
  AnalysisResult,
  BRAND_ENERGY_PROFILES,
} from '@/lib/numerology/business-name';

// ============================================================================
// Modern Date Input Component (same style as name-correction)
// ============================================================================
function ModernDateInput({
  value,
  onChange,
  label,
  locale,
}: {
  value: string;
  onChange: (date: string) => void;
  label: string;
  locale: 'en' | 'hi';
}) {
  const [day, setDay] = useState(value ? value.split('-')[2] : '');
  const [month, setMonth] = useState(value ? value.split('-')[1] : '');
  const [year, setYear] = useState(value ? value.split('-')[0] : '');

  const months = useMemo(
    () => [
      { value: '01', en: 'January', hi: 'जनवरी' },
      { value: '02', en: 'February', hi: 'फरवरी' },
      { value: '03', en: 'March', hi: 'मार्च' },
      { value: '04', en: 'April', hi: 'अप्रैल' },
      { value: '05', en: 'May', hi: 'मई' },
      { value: '06', en: 'June', hi: 'जून' },
      { value: '07', en: 'July', hi: 'जुलाई' },
      { value: '08', en: 'August', hi: 'अगस्त' },
      { value: '09', en: 'September', hi: 'सितंबर' },
      { value: '10', en: 'October', hi: 'अक्टूबर' },
      { value: '11', en: 'November', hi: 'नवंबर' },
      { value: '12', en: 'December', hi: 'दिसंबर' },
    ],
    []
  );

  const updateDate = useCallback(
    (d: string, m: string, y: string) => {
      if (d && m && y && y.length === 4) {
        const paddedDay = d.padStart(2, '0');
        const paddedMonth = m.padStart(2, '0');
        onChange(`${y}-${paddedMonth}-${paddedDay}`);
      }
    },
    [onChange]
  );

  const handleDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 2);
    if (parseInt(val) <= 31 || val === '') {
      setDay(val);
      updateDate(val, month, year);
    }
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMonth(e.target.value);
    updateDate(day, e.target.value, year);
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 4);
    setYear(val);
    updateDate(day, month, val);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <div className="flex gap-2">
        <div className="relative flex-1">
          <input
            type="text"
            value={day}
            onChange={handleDayChange}
            placeholder={locale === 'en' ? 'DD' : 'दिन'}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all text-center text-lg font-semibold bg-white"
            maxLength={2}
          />
          <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
            {locale === 'en' ? 'Day' : 'दिन'}
          </span>
        </div>
        <div className="relative flex-[2]">
          <select
            value={month}
            onChange={handleMonthChange}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all text-lg font-semibold bg-white appearance-none cursor-pointer"
          >
            <option value="">{locale === 'en' ? 'Month' : 'महीना'}</option>
            {months.map((m) => (
              <option key={m.value} value={m.value}>
                {m[locale]}
              </option>
            ))}
          </select>
          <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
            {locale === 'en' ? 'Month' : 'महीना'}
          </span>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        <div className="relative flex-1">
          <input
            type="text"
            value={year}
            onChange={handleYearChange}
            placeholder={locale === 'en' ? 'YYYY' : 'वर्ष'}
            className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all text-center text-lg font-semibold bg-white"
            maxLength={4}
          />
          <span className="absolute -top-2 left-3 bg-white px-1 text-xs text-gray-500">
            {locale === 'en' ? 'Year' : 'वर्ष'}
          </span>
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
          className="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all bg-white text-left flex items-center justify-between"
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

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute z-50 w-full mt-2 bg-white rounded-xl border-2 border-gray-200 shadow-xl overflow-hidden"
            >
              <div className="p-2 border-b border-gray-100">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder={locale === 'en' ? 'Search industries...' : 'उद्योग खोजें...'}
                  className="w-full px-3 py-2 rounded-lg border border-gray-200 focus:border-teal-400 focus:outline-none text-sm"
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
                    className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-teal-50 transition-colors ${
                      value === industry.id ? 'bg-teal-100' : ''
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
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Custom Industry Input */}
      <AnimatePresence>
        {value === 'other' && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <input
              type="text"
              value={customValue}
              onChange={(e) => onCustomChange(e.target.value)}
              placeholder={locale === 'en' ? 'Enter your industry (e.g., Organic Tea, Pet Care)' : 'अपना उद्योग दर्ज करें'}
              className="w-full mt-2 px-4 py-3 rounded-xl border-2 border-amber-200 focus:border-amber-500 focus:ring-4 focus:ring-amber-100 transition-all bg-amber-50"
            />
          </motion.div>
        )}
      </AnimatePresence>
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
                ? 'bg-teal-500 text-white shadow-md'
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
                ? 'border-teal-500 bg-teal-50'
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
    english: { icon: '🔤', color: 'bg-blue-100 text-blue-700', label: { en: 'English', hi: 'अंग्रेजी' } },
    distortion: { icon: '✨', color: 'bg-teal-100 text-teal-700', label: { en: 'Creative', hi: 'रचनात्मक' } },
    sanskrit: { icon: '🕉️', color: 'bg-amber-100 text-amber-700', label: { en: 'Sanskrit', hi: 'संस्कृत' } },
    hindi: { icon: '🇮🇳', color: 'bg-orange-100 text-orange-700', label: { en: 'Hindi', hi: 'हिंदी' } },
    fusion: { icon: '🔀', color: 'bg-teal-100 text-teal-700', label: { en: 'Fusion', hi: 'फ्यूज़न' } },
    acronym: { icon: '📝', color: 'bg-gray-100 text-gray-700', label: { en: 'Acronym', hi: 'संक्षिप्त' } },
  };

  const config = categoryConfig[name.category] || categoryConfig.english;
  const scoreColor = name.compatibilityScore >= 85 ? 'border-green-400' : name.compatibilityScore >= 70 ? 'border-blue-400' : 'border-amber-400';
  const scoreTextColor = name.compatibilityScore >= 85 ? 'text-green-600' : name.compatibilityScore >= 70 ? 'text-blue-600' : 'text-amber-600';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className={`bg-white rounded-2xl border-2 ${expanded ? 'border-teal-400' : 'border-gray-100'} shadow-md hover:shadow-lg transition-all cursor-pointer overflow-hidden`}
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
              <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-xs">
                {name.pythagoreanNumber}
              </span>
              <span className="text-xs text-gray-500">Pyth.</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-6 h-6 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-xs">
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

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="border-t border-gray-100 bg-gradient-to-r from-gray-50 to-slate-50"
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
                  className="px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors"
                >
                  {locale === 'en' ? 'Full Analysis' : 'पूर्ण विश्लेषण'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
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
    good: 'bg-blue-50 text-blue-700 border-blue-200',
    moderate: 'bg-amber-50 text-amber-700 border-amber-200',
    challenging: 'bg-red-50 text-red-700 border-red-200',
  };

  return (
    <div className="bg-gradient-to-r from-teal-50 to-saffron-50 rounded-2xl p-6 border border-teal-100">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-2xl">🔍</span>
        {locale === 'en' ? 'Test Any Name' : 'किसी भी नाम का परीक्षण करें'}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {locale === 'en'
          ? 'Enter any business name to check its numerological compatibility'
          : 'इसकी अंकशास्त्रीय संगतता जांचने के लिए कोई भी व्यापार नाम दर्ज करें'}
      </p>
      <div className="flex gap-3">
        <input
          type="text"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAnalyze()}
          placeholder={locale === 'en' ? 'Enter business name...' : 'व्यापार नाम दर्ज करें...'}
          className="flex-1 px-4 py-3 rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all"
        />
        <button
          onClick={handleAnalyze}
          disabled={!testName.trim()}
          className="px-6 py-3 bg-teal-500 text-white rounded-xl font-medium hover:bg-teal-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
        >
          {locale === 'en' ? 'Analyze' : 'विश्लेषण'}
        </button>
      </div>

      <AnimatePresence>
        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mt-4 p-4 bg-white rounded-xl border border-teal-100"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <p className="text-xl font-bold text-gray-800">{result.name}</p>
                <div className="flex gap-4 text-sm">
                  <span className="text-teal-600">Pyth: {result.pythagoreanNumber}</span>
                  <span className="text-teal-600">Chal: {result.chaldeanNumber}</span>
                </div>
                <p className="text-sm text-gray-600">{result.brandEnergy?.name[locale]}</p>
              </div>
              <div className={`px-4 py-2 rounded-xl font-semibold border-2 ${ratingColors[result.rating]}`}>
                {result.compatibilityScore}%
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================
export default function BusinessNameCalculator() {
  const locale = useLocale() as 'en' | 'hi';
  const [ownerDOB, setOwnerDOB] = useState('');
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

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    if (ownerDOB && (industry || customIndustry)) {
      const keywords = additionalKeywords
        .split(/[,\s]+/)
        .map((k) => k.trim())
        .filter((k) => k.length > 0);

      const generationResult = generateBusinessNames({
        ownerDOB,
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
      {/* Input Form */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border border-gray-100"
      >
        <form onSubmit={handleGenerate} className="space-y-6">
          {/* Owner DOB */}
          <ModernDateInput
            value={ownerDOB}
            onChange={setOwnerDOB}
            label={labels.ownerDOB}
            locale={locale}
          />

          {/* Industry Selection */}
          <IndustryCombobox
            value={industry}
            onChange={setIndustry}
            customValue={customIndustry}
            onCustomChange={setCustomIndustry}
            locale={locale}
          />

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
              placeholder={labels.keywordsPlaceholder}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={!ownerDOB || (!industry && !customIndustry)}
            className="w-full py-4 px-6 bg-gradient-to-r from-teal-500 via-saffron-500 to-teal-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
          >
            <span className="text-2xl">✨</span>
            {labels.generate}
          </motion.button>
        </form>
      </motion.div>

      {/* Results */}
      <AnimatePresence mode="wait">
        {result && (
          <motion.div
            key="results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="space-y-6"
          >
            {/* Numbers Summary */}
            <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 rounded-3xl p-6 text-white shadow-2xl">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-xs text-teal-300 mb-1">{locale === 'en' ? 'Life Path' : 'मूलांक'}</p>
                  <p className="text-3xl font-bold">{result.ownerLifePathNumber}</p>
                </div>
                <div className="bg-white/10 rounded-xl p-4 text-center">
                  <p className="text-xs text-teal-300 mb-1">{locale === 'en' ? 'Birth Day' : 'जन्म दिन'}</p>
                  <p className="text-3xl font-bold">{result.ownerBirthDayNumber}</p>
                </div>
                <div className="col-span-2 bg-white/10 rounded-xl p-4">
                  <p className="text-xs text-teal-300 mb-2">{labels.targetNumbers}</p>
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
            <QuickAnalysis ownerDOB={ownerDOB} industryId={industry} locale={locale} />

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
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12 bg-gradient-to-br from-gray-50 to-slate-50 rounded-2xl border border-gray-100"
                >
                  <div className="text-6xl mb-4">🤔</div>
                  <p className="text-xl text-gray-600">{labels.noResults}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
