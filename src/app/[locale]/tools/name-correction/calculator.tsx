'use client';

import { useState, useMemo, useCallback } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import {
  calculateNameCorrection,
  analyzeNameCompatibility,
  NameCorrectionResult,
  NameSuggestion,
} from '@/lib/numerology/name-correction';
import { EducationalSection } from '@/components/tools/educational-section';
import { RelatedToolsSection, RelatedTool } from '@/components/tools/related-tools-section';

// ============================================================================
// Custom Date Input Component - Modern and Fluid
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
        {/* Day */}
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

        {/* Month */}
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

        {/* Year */}
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
// Animated Number Display
// ============================================================================
function AnimatedNumber({
  value,
  size = 'lg',
  color = 'teal',
}: {
  value: number;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: string;
}) {
  const sizeClasses = {
    sm: 'w-8 h-8 text-lg',
    md: 'w-12 h-12 text-2xl',
    lg: 'w-16 h-16 text-3xl',
    xl: 'w-20 h-20 text-4xl',
  };

  const colorClasses: Record<string, string> = {
    teal: 'from-teal-400 to-teal-600',
    purple: 'from-saffron-400 to-teal-600',
    indigo: 'from-teal-400 to-teal-600',
    emerald: 'from-emerald-400 to-emerald-600',
    pink: 'from-pink-400 to-pink-600',
    amber: 'from-saffron-400 to-saffron-600',
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full bg-gradient-to-br ${colorClasses[color]} flex items-center justify-center text-white font-bold shadow-lg animate-fade-in-up`}
    >
      {value}
    </div>
  );
}

// ============================================================================
// Compatibility Meter
// ============================================================================
function CompatibilityMeter({
  score,
  compatibility,
  locale,
}: {
  score: number;
  compatibility: 'excellent' | 'good' | 'neutral' | 'challenging';
  locale: 'en' | 'hi';
}) {
  const colors = {
    excellent: { bg: 'bg-green-500', ring: 'ring-green-200' },
    good: { bg: 'bg-blue-500', ring: 'ring-blue-200' },
    neutral: { bg: 'bg-yellow-500', ring: 'ring-yellow-200' },
    challenging: { bg: 'bg-red-500', ring: 'ring-red-200' },
  };

  const labels = {
    excellent: { en: 'Excellent', hi: 'उत्कृष्ट' },
    good: { en: 'Good', hi: 'अच्छा' },
    neutral: { en: 'Neutral', hi: 'तटस्थ' },
    challenging: { en: 'Challenging', hi: 'चुनौतीपूर्ण' },
  };

  return (
    <div className="relative">
      <div className={`w-32 h-32 rounded-full ring-8 ${colors[compatibility].ring} p-2`}>
        <div className="w-full h-full rounded-full bg-gray-100 relative overflow-hidden">
          <div
            style={{ height: `${score}%` }}
            className={`absolute bottom-0 left-0 right-0 ${colors[compatibility].bg}`}
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl font-bold text-gray-800">{score}%</span>
            <span className="text-xs text-gray-600">{labels[compatibility][locale]}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================================
// Suggestion Card - Enhanced
// ============================================================================
function SuggestionCard({
  suggestion,
  locale,
  index,
  onCompare,
}: {
  suggestion: NameSuggestion;
  locale: 'en' | 'hi';
  index: number;
  onCompare: (name: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  const changeTypeConfig = {
    addition: {
      color: 'from-blue-500 to-cyan-500',
      bg: 'bg-blue-50',
      text: 'text-blue-700',
      icon: '+',
      label: { en: 'Addition', hi: 'जोड़' },
    },
    removal: {
      color: 'from-red-500 to-rose-500',
      bg: 'bg-red-50',
      text: 'text-red-700',
      icon: '-',
      label: { en: 'Removal', hi: 'हटाव' },
    },
    replacement: {
      color: 'from-teal-500 to-violet-500',
      bg: 'bg-teal-50',
      text: 'text-teal-700',
      icon: '↔',
      label: { en: 'Replace', hi: 'बदलें' },
    },
    spelling: {
      color: 'from-emerald-500 to-green-500',
      bg: 'bg-green-50',
      text: 'text-green-700',
      icon: '✎',
      label: { en: 'Spelling', hi: 'वर्तनी' },
    },
  };

  const config = changeTypeConfig[suggestion.changeType];
  const scoreColor = suggestion.compatibilityScore >= 80 ? 'text-green-600' : suggestion.compatibilityScore >= 60 ? 'text-blue-600' : 'text-amber-600';

  return (
    <div
      className="group animate-fade-in-up"
    >
      <div
        onClick={() => setExpanded(!expanded)}
        className={`relative bg-white rounded-2xl border-2 ${expanded ? 'border-teal-400' : 'border-gray-100'} shadow-md hover:shadow-xl transition-all cursor-pointer overflow-hidden`}
      >
        {/* Rank Badge */}
        <div className={`absolute top-0 left-0 w-10 h-10 bg-gradient-to-br ${config.color} rounded-br-2xl flex items-center justify-center text-white font-bold shadow`}>
          {index + 1}
        </div>

        <div className="p-5 pl-14">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              {/* Change Type Badge */}
              <div className="flex items-center gap-2 mb-2">
                <span className={`${config.bg} ${config.text} px-2 py-0.5 rounded-lg text-xs font-semibold flex items-center gap-1`}>
                  <span>{config.icon}</span>
                  {config.label[locale]}
                </span>
              </div>

              {/* Suggested Name */}
              <h3 className="text-2xl font-bold text-gray-800 mb-1 tracking-wide">
                {suggestion.name}
              </h3>

              {/* Change Description */}
              <p className="text-sm text-gray-500">
                {suggestion.changeDescription[locale]}
              </p>

              {/* Number badges */}
              <div className="flex items-center gap-4 mt-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm">
                    {suggestion.pythagoreanNumber}
                  </span>
                  <span className="text-xs text-gray-500">Pyth.</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-7 h-7 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-sm">
                    {suggestion.chaldeanNumber}
                  </span>
                  <span className="text-xs text-gray-500">Chal.</span>
                </div>
              </div>
            </div>

            {/* Score Circle */}
            <div className="flex flex-col items-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center border-4 ${suggestion.compatibilityScore >= 80 ? 'border-green-400' : suggestion.compatibilityScore >= 60 ? 'border-blue-400' : 'border-amber-400'}`}>
                <span className={`text-xl font-bold ${scoreColor}`}>{suggestion.compatibilityScore}%</span>
              </div>
              <span className="text-xs text-gray-500 mt-1">
                {locale === 'en' ? 'Match' : 'मेल'}
              </span>
            </div>
          </div>
        </div>

        {/* Expanded Details */}
          {expanded && (
            <div
              className="border-t border-gray-100 bg-gradient-to-r from-gray-50 to-slate-50 animate-fade-in-up"
            >
              <div className="p-5">
                <p className="text-gray-700 mb-4">{suggestion.reasoning[locale]}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onCompare(suggestion.name);
                  }}
                  className="px-4 py-2 bg-teal-500 text-white rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors"
                >
                  {locale === 'en' ? 'Compare with Original' : 'मूल से तुलना करें'}
                </button>
              </div>
            </div>
          )}
      </div>
    </div>
  );
}

// ============================================================================
// Quick Test Input
// ============================================================================
function QuickTest({
  dateOfBirth,
  locale,
}: {
  dateOfBirth: string;
  locale: 'en' | 'hi';
}) {
  const [testName, setTestName] = useState('');
  const [testResult, setTestResult] = useState<{
    pythagoreanNumber: number;
    chaldeanNumber: number;
    compatibility: 'excellent' | 'good' | 'neutral' | 'challenging';
    score: number;
  } | null>(null);

  const handleTest = () => {
    if (testName.trim() && dateOfBirth) {
      const result = analyzeNameCompatibility(testName.trim(), dateOfBirth);
      setTestResult(result);
    }
  };

  const compatColors = {
    excellent: 'text-green-600 bg-green-50',
    good: 'text-blue-600 bg-blue-50',
    neutral: 'text-amber-600 bg-amber-50',
    challenging: 'text-red-600 bg-red-50',
  };

  return (
    <div className="bg-gradient-to-r from-teal-50 to-saffron-50 rounded-2xl p-6 border border-teal-100">
      <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
        <span className="text-2xl">🔍</span>
        {locale === 'en' ? 'Quick Name Test' : 'त्वरित नाम परीक्षण'}
      </h3>
      <p className="text-sm text-gray-600 mb-4">
        {locale === 'en'
          ? 'Test any name variation instantly to see its numerology'
          : 'किसी भी नाम विविधता का अंकशास्त्र देखने के लिए तुरंत परीक्षण करें'}
      </p>
      <div className="flex gap-3">
        <input
          type="text"
          value={testName}
          onChange={(e) => setTestName(e.target.value)}
          placeholder={locale === 'en' ? 'Enter a name to test...' : 'परीक्षण के लिए नाम दर्ज करें...'}
          className="flex-1 px-4 py-3 rounded-xl border-2 border-teal-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all"
        />
        <button
          onClick={handleTest}
          disabled={!testName.trim()}
          className="px-6 py-3 bg-teal-500 text-white rounded-xl font-medium hover:bg-teal-600 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
        >
          {locale === 'en' ? 'Test' : 'परीक्षण'}
        </button>
      </div>

        {testResult && (
          <div
            className="mt-4 p-4 bg-white rounded-xl border border-teal-100 animate-fade-in-up"
          >
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-lg font-semibold text-gray-800">{testName}</p>
                <div className="flex gap-4 text-sm">
                  <span className="text-teal-600">Pythagorean: {testResult.pythagoreanNumber}</span>
                  <span className="text-teal-600">Chaldean: {testResult.chaldeanNumber}</span>
                </div>
              </div>
              <div className={`px-4 py-2 rounded-xl font-semibold ${compatColors[testResult.compatibility]}`}>
                {testResult.score}% {locale === 'en' ? 'Match' : 'मेल'}
              </div>
            </div>
          </div>
        )}
    </div>
  );
}

// ============================================================================
// Main Component
// ============================================================================
export default function NameCorrectionCalculator() {
  const locale = useLocale() as 'en' | 'hi';
  const t = useTranslations('tools.numerology.nameCorrection');
  const [fullName, setFullName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [result, setResult] = useState<NameCorrectionResult | null>(null);
  const [compareMode, setCompareMode] = useState<string | null>(null);

  const educational = t.raw('educational') as { title: string; content: string[] };
  const relatedTools = t.raw('relatedTools') as RelatedTool[];

  const labels = useMemo(
    () => ({
      fullName: locale === 'en' ? 'Your Full Name' : 'आपका पूरा नाम',
      dateOfBirth: locale === 'en' ? 'Date of Birth' : 'जन्म तिथि',
      analyze: locale === 'en' ? 'Analyze My Name' : 'मेरे नाम का विश्लेषण करें',
      placeholder: locale === 'en' ? 'Enter your full name as you write it' : 'जैसा आप लिखते हैं अपना पूरा नाम दर्ज करें',
      currentAnalysis: locale === 'en' ? 'Your Current Name Analysis' : 'आपका वर्तमान नाम विश्लेषण',
      coreNumbers: locale === 'en' ? 'Core Numbers' : 'मूल अंक',
      lifePathNum: locale === 'en' ? 'Life Path' : 'मूलांक',
      birthDayNum: locale === 'en' ? 'Birth Day' : 'जन्म दिन',
      pythagorean: locale === 'en' ? 'Pythagorean' : 'पाइथागोरियन',
      chaldean: locale === 'en' ? 'Chaldean' : 'कैल्डियन',
      soulUrge: locale === 'en' ? 'Soul Urge' : 'आत्मा की इच्छा',
      personality: locale === 'en' ? 'Personality' : 'व्यक्तित्व',
      nameCompatibility: locale === 'en' ? 'Name Compatibility' : 'नाम संगतता',
      traits: locale === 'en' ? 'Personality Traits' : 'व्यक्तित्व लक्षण',
      suggestions: locale === 'en' ? 'Recommended Name Corrections' : 'अनुशंसित नाम सुधार',
      suggestionsDesc: locale === 'en'
        ? 'Tap on any suggestion to see details. Higher scores mean better harmony.'
        : 'विवरण देखने के लिए किसी भी सुझाव पर टैप करें। उच्च स्कोर का अर्थ है बेहतर सामंजस्य।',
      noSuggestions: locale === 'en'
        ? 'Your name has excellent numerological harmony! No corrections needed.'
        : 'आपके नाम में उत्कृष्ट अंकशास्त्रीय सामंजस्य है! किसी सुधार की आवश्यकता नहीं।',
      targetNumbers: locale === 'en' ? 'Target Numbers' : 'लक्ष्य अंक',
      targetDesc: locale === 'en'
        ? 'These numbers harmonize best with your birth energy'
        : 'ये अंक आपकी जन्म ऊर्जा के साथ सबसे अच्छा सामंजस्य रखते हैं',
      rulingPlanet: locale === 'en' ? 'Ruling Planet' : 'शासक ग्रह',
    }),
    [locale]
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (fullName.trim() && dateOfBirth) {
      const correctionResult = calculateNameCorrection(fullName.trim(), dateOfBirth);
      setResult(correctionResult);
    }
  };

  const handleCompare = (name: string) => {
    setCompareMode(name);
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Input Form - Modern Card */}
      <div
        className="bg-white rounded-3xl shadow-2xl p-8 mb-8 border border-gray-100 animate-fade-in-up"
      >
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Name Input */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {labels.fullName}
            </label>
            <div className="relative">
              <input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder={labels.placeholder}
                className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-500 focus:ring-4 focus:ring-teal-100 transition-all text-xl font-medium"
                required
              />
              {fullName && (
                <div
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 animate-fade-in-up"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              )}
            </div>
          </div>

          {/* Date Input - Custom Component */}
          <ModernDateInput
            value={dateOfBirth}
            onChange={setDateOfBirth}
            label={labels.dateOfBirth}
            locale={locale}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-teal-500 via-teal-600 to-emerald-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            {labels.analyze}
          </button>
        </form>
      </div>

      {/* Educational Section */}
      {!result && (
        <EducationalSection
          title={educational.title}
          content={educational.content}
        />
      )}

      {/* Results */}
        {result && (
          <div
            key="results"
            className="space-y-8 animate-fade-in-up"
          >
            {/* Main Analysis Card */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 text-white shadow-2xl">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Compatibility Meter */}
                <div className="flex-shrink-0">
                  <CompatibilityMeter
                    score={
                      result.currentAnalysis.compatibility === 'excellent' ? 95 :
                      result.currentAnalysis.compatibility === 'good' ? 75 :
                      result.currentAnalysis.compatibility === 'neutral' ? 50 : 25
                    }
                    compatibility={result.currentAnalysis.compatibility}
                    locale={locale}
                  />
                </div>

                {/* Name Display */}
                <div className="flex-1 text-center lg:text-left">
                  <p className="text-sm text-gray-400 mb-2">{labels.currentAnalysis}</p>
                  <h2 className="text-4xl font-bold mb-4 tracking-wide">&ldquo;{result.originalName}&rdquo;</h2>
                  <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                    {result.currentAnalysis.traits.map((trait, idx) => (
                      <span
                        key={idx}
                        className="px-4 py-1.5 bg-white/10 backdrop-blur rounded-full text-sm font-medium"
                      >
                        {trait[locale]}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Planet Info */}
                <div className="flex-shrink-0 text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-saffron-400 to-saffron-500 flex items-center justify-center mb-2 mx-auto shadow-lg">
                    <span className="text-3xl">☀️</span>
                  </div>
                  <p className="text-xs text-gray-400">{labels.rulingPlanet}</p>
                  <p className="font-semibold">{result.currentAnalysis.planet[locale]}</p>
                </div>
              </div>

              {/* Numbers Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mt-8 pt-8 border-t border-white/10">
                <div className="text-center">
                  <AnimatedNumber value={result.lifePathNumber} size="md" color="teal" />
                  <p className="text-xs text-gray-400 mt-2">{labels.lifePathNum}</p>
                </div>
                <div className="text-center">
                  <AnimatedNumber value={result.birthDayNumber} size="md" color="emerald" />
                  <p className="text-xs text-gray-400 mt-2">{labels.birthDayNum}</p>
                </div>
                <div className="text-center">
                  <AnimatedNumber value={result.currentPythagoreanNumber} size="md" color="purple" />
                  <p className="text-xs text-gray-400 mt-2">{labels.pythagorean}</p>
                </div>
                <div className="text-center">
                  <AnimatedNumber value={result.currentChaldeanNumber} size="md" color="indigo" />
                  <p className="text-xs text-gray-400 mt-2">{labels.chaldean}</p>
                </div>
                <div className="text-center">
                  <AnimatedNumber value={result.vowelAnalysis.soulUrge} size="md" color="pink" />
                  <p className="text-xs text-gray-400 mt-2">{labels.soulUrge}</p>
                </div>
                <div className="text-center">
                  <AnimatedNumber value={result.consonantAnalysis.personality} size="md" color="amber" />
                  <p className="text-xs text-gray-400 mt-2">{labels.personality}</p>
                </div>
              </div>
            </div>

            {/* Guidance Message */}
            <div
              className="bg-gradient-to-r from-saffron-50 to-saffron-100 rounded-2xl p-6 border border-amber-100 animate-fade-in-up"
            >
              <div className="flex items-start gap-4">
                <div className="text-3xl">💡</div>
                <p className="text-amber-800 leading-relaxed">{result.generalGuidance[locale]}</p>
              </div>
            </div>

            {/* Target Numbers */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-gray-800 mb-2">{labels.targetNumbers}</h3>
              <p className="text-sm text-gray-500 mb-4">{labels.targetDesc}</p>
              <div className="flex flex-wrap gap-3">
                {result.targetNumbers.map((num) => (
                  <div
                    key={num}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-500 flex items-center justify-center text-white text-xl font-bold shadow-md animate-fade-in-up"
                  >
                    {num}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Test */}
            {dateOfBirth && <QuickTest dateOfBirth={dateOfBirth} locale={locale} />}

            {/* Related Tools Section */}
            <RelatedToolsSection
              tools={relatedTools}
              locale={locale as 'en' | 'hi'}
            />

            {/* Suggestions */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">{labels.suggestions}</h2>
                  <p className="text-sm text-gray-500">{labels.suggestionsDesc}</p>
                </div>
              </div>

              {result.suggestions.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  {result.suggestions.map((suggestion, idx) => (
                    <SuggestionCard
                      key={idx}
                      suggestion={suggestion}
                      locale={locale}
                      index={idx}
                      onCompare={handleCompare}
                    />
                  ))}
                </div>
              ) : (
                <div
                  className="text-center py-12 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border border-green-100 animate-fade-in-up"
                >
                  <div className="text-6xl mb-4">🎉</div>
                  <p className="text-xl font-semibold text-green-800">{labels.noSuggestions}</p>
                </div>
              )}
            </div>
          </div>
        )}
    </div>
  );
}
