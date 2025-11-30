'use client';

import { useState, useMemo } from 'react';
import {
  calculateBhagyodaya,
  BhagyodayaResult,
  FortuneYear,
  Pinnacle,
  Challenge,
  TimelinePhase,
} from '@/lib/numerology/bhagyodaya';

interface CalculatorProps {
  locale: string;
  translations: {
    title: string;
    dateOfBirth: string;
    name: string;
    nameOptional: string;
    calculate: string;
    calculating: string;
    results: {
      title: string;
      coreNumbers: string;
      lifePathNumber: string;
      birthDayNumber: string;
      destinyNumber: string;
      currentAge: string;
      primaryBhagyodaya: string;
      fortuneYear: string;
      fortuneYears: string;
      pinnacles: string;
      challenges: string;
      saturnReturn: string;
      jupiterCycles: string;
      currentYear: string;
      lifePhase: string;
      upcomingPeaks: string;
      timeline: string;
      major: string;
      moderate: string;
      minor: string;
      current: string;
      past: string;
      future: string;
      preparation: string;
      opportunities: string;
      howToOvercome: string;
    };
    placeholders: {
      day: string;
      month: string;
      year: string;
      name: string;
    };
    months: string[];
  };
}

const MONTHS_EN = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

const MONTHS_HI = [
  'जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून',
  'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर',
];

// Modern Date Input Component (same style as name-correction)
function ModernDateInput({
  day,
  month,
  year,
  onDayChange,
  onMonthChange,
  onYearChange,
  locale,
  translations,
}: {
  day: string;
  month: string;
  year: string;
  onDayChange: (v: string) => void;
  onMonthChange: (v: string) => void;
  onYearChange: (v: string) => void;
  locale: string;
  translations: CalculatorProps['translations'];
}) {
  const months = locale === 'hi' ? MONTHS_HI : MONTHS_EN;
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 120 }, (_, i) => currentYear - i);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="grid grid-cols-3 gap-3">
      {/* Day */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {translations.placeholders.day}
        </label>
        <select
          value={day}
          onChange={(e) => onDayChange(e.target.value)}
          className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-xl
                     text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                     transition-all duration-200 cursor-pointer appearance-none
                     hover:border-teal-400"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundPosition: 'right 0.5rem center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1.5rem',
          }}
        >
          <option value="">{translations.placeholders.day}</option>
          {days.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>

      {/* Month */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {translations.placeholders.month}
        </label>
        <select
          value={month}
          onChange={(e) => onMonthChange(e.target.value)}
          className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-xl
                     text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                     transition-all duration-200 cursor-pointer appearance-none
                     hover:border-teal-400"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundPosition: 'right 0.5rem center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1.5rem',
          }}
        >
          <option value="">{translations.placeholders.month}</option>
          {months.map((m, i) => (
            <option key={i} value={i + 1}>
              {m}
            </option>
          ))}
        </select>
      </div>

      {/* Year */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1.5">
          {translations.placeholders.year}
        </label>
        <select
          value={year}
          onChange={(e) => onYearChange(e.target.value)}
          className="w-full px-3 py-2.5 bg-white border border-gray-300 rounded-xl
                     text-gray-900 focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                     transition-all duration-200 cursor-pointer appearance-none
                     hover:border-teal-400"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundPosition: 'right 0.5rem center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: '1.5rem',
          }}
        >
          <option value="">{translations.placeholders.year}</option>
          {years.map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

// Fortune Year Card
function FortuneYearCard({
  fortune,
  locale,
  currentAge,
  translations,
}: {
  fortune: FortuneYear;
  locale: string;
  currentAge: number;
  translations: CalculatorProps['translations'];
}) {
  const isPast = fortune.age < currentAge;
  const isCurrent = fortune.age === currentAge;
  const intensityColors = {
    major: 'bg-gradient-to-br from-amber-500 to-orange-600 text-white',
    moderate: 'bg-gradient-to-br from-teal-500 to-emerald-600 text-white',
    minor: 'bg-gradient-to-br from-gray-400 to-gray-500 text-white',
  };

  return (
    <div
      className={`rounded-xl border ${
        isCurrent
          ? 'border-amber-400 ring-2 ring-amber-200'
          : isPast
          ? 'border-gray-200 opacity-60'
          : 'border-gray-200'
      } overflow-hidden transition-all hover:shadow-md`}
    >
      <div className={`px-4 py-3 ${intensityColors[fortune.intensity]}`}>
        <div className="flex justify-between items-center">
          <span className="font-bold text-lg">
            {locale === 'hi' ? `उम्र ${fortune.age}` : `Age ${fortune.age}`}
          </span>
          <span className="text-sm opacity-90">{fortune.year}</span>
        </div>
        <div className="text-sm opacity-90 mt-1">{fortune.type}</div>
      </div>
      <div className="p-4 bg-white">
        <p className="text-sm text-gray-600 mb-3">
          {locale === 'hi' ? fortune.reason.hi : fortune.reason.en}
        </p>
        <div className="flex flex-wrap gap-1">
          {fortune.domains.map((domain, i) => (
            <span
              key={i}
              className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-full"
            >
              {locale === 'hi' ? domain.hi : domain.en}
            </span>
          ))}
        </div>
        {isCurrent && (
          <div className="mt-3 px-2 py-1 bg-amber-50 border border-amber-200 rounded-lg text-amber-700 text-sm text-center font-medium">
            {translations.results.current}
          </div>
        )}
      </div>
    </div>
  );
}

// Pinnacle Card
function PinnacleCard({
  pinnacle,
  locale,
  translations,
}: {
  pinnacle: Pinnacle;
  locale: string;
  translations: CalculatorProps['translations'];
}) {
  return (
    <div
      className={`rounded-xl border overflow-hidden ${
        pinnacle.isCurrent
          ? 'border-purple-400 ring-2 ring-purple-200'
          : 'border-gray-200'
      }`}
    >
      <div
        className={`px-4 py-3 ${
          pinnacle.isCurrent
            ? 'bg-gradient-to-r from-purple-500 to-indigo-600 text-white'
            : 'bg-gray-100'
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold">
            {locale === 'hi' ? `शिखर ${pinnacle.number}` : `Pinnacle ${pinnacle.number}`}
          </span>
          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
              pinnacle.isCurrent ? 'bg-white/20' : 'bg-white'
            }`}
          >
            {pinnacle.pinnacleNumber}
          </span>
        </div>
        <div className="text-sm mt-1 opacity-90">
          {locale === 'hi'
            ? `उम्र ${pinnacle.ageStart}-${pinnacle.ageEnd}`
            : `Age ${pinnacle.ageStart}-${pinnacle.ageEnd}`}
        </div>
      </div>
      <div className="p-4 bg-white">
        <h4 className="font-medium text-gray-900 mb-2">
          {locale === 'hi' ? pinnacle.theme.hi : pinnacle.theme.en}
        </h4>
        <p className="text-sm text-gray-600">
          <span className="font-medium">{translations.results.opportunities}:</span>{' '}
          {locale === 'hi' ? pinnacle.opportunities.hi : pinnacle.opportunities.en}
        </p>
        {pinnacle.isCurrent && (
          <div className="mt-3 px-2 py-1 bg-purple-50 border border-purple-200 rounded-lg text-purple-700 text-sm text-center font-medium">
            {translations.results.current}
          </div>
        )}
      </div>
    </div>
  );
}

// Challenge Card
function ChallengeCard({
  challenge,
  locale,
  translations,
}: {
  challenge: Challenge;
  locale: string;
  translations: CalculatorProps['translations'];
}) {
  return (
    <div
      className={`rounded-xl border overflow-hidden ${
        challenge.isCurrent
          ? 'border-red-400 ring-2 ring-red-200'
          : 'border-gray-200'
      }`}
    >
      <div
        className={`px-4 py-3 ${
          challenge.isCurrent
            ? 'bg-gradient-to-r from-red-500 to-rose-600 text-white'
            : 'bg-gray-100'
        }`}
      >
        <div className="flex justify-between items-center">
          <span className="font-bold">
            {locale === 'hi' ? `चुनौती ${challenge.number}` : `Challenge ${challenge.number}`}
          </span>
          <span
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
              challenge.isCurrent ? 'bg-white/20' : 'bg-white'
            }`}
          >
            {challenge.challengeNumber}
          </span>
        </div>
        <div className="text-sm mt-1 opacity-90">
          {locale === 'hi'
            ? `उम्र ${challenge.ageStart}-${challenge.ageEnd}`
            : `Age ${challenge.ageStart}-${challenge.ageEnd}`}
        </div>
      </div>
      <div className="p-4 bg-white">
        <p className="text-sm text-gray-700 mb-2">
          {locale === 'hi' ? challenge.lesson.hi : challenge.lesson.en}
        </p>
        <p className="text-sm text-gray-600">
          <span className="font-medium text-teal-700">{translations.results.howToOvercome}:</span>{' '}
          {locale === 'hi' ? challenge.howToOvercome.hi : challenge.howToOvercome.en}
        </p>
        {challenge.isCurrent && (
          <div className="mt-3 px-2 py-1 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm text-center font-medium">
            {translations.results.current}
          </div>
        )}
      </div>
    </div>
  );
}

// Fortune Timeline Chart
function FortuneTimeline({
  timeline,
  currentAge,
  locale,
}: {
  timeline: TimelinePhase[];
  currentAge: number;
  locale: string;
}) {
  return (
    <div className="space-y-3">
      {timeline.map((phase, index) => {
        const [startAge, endAge] = phase.ageRange.split('-').map(Number);
        const isCurrent = currentAge >= startAge && currentAge <= endAge;
        const isPast = currentAge > endAge;

        return (
          <div
            key={index}
            className={`rounded-xl border p-4 ${
              isCurrent
                ? 'border-teal-400 bg-teal-50'
                : isPast
                ? 'border-gray-200 bg-gray-50'
                : 'border-gray-200 bg-white'
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Fortune Level Bar */}
              <div className="w-24 flex-shrink-0">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${
                      phase.fortuneLevel >= 8
                        ? 'bg-gradient-to-r from-amber-400 to-orange-500'
                        : phase.fortuneLevel >= 6
                        ? 'bg-gradient-to-r from-teal-400 to-emerald-500'
                        : 'bg-gradient-to-r from-gray-400 to-gray-500'
                    }`}
                    style={{ width: `${phase.fortuneLevel * 10}%` }}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1 text-center">
                  {phase.fortuneLevel}/10
                </div>
              </div>

              {/* Phase Info */}
              <div className="flex-grow">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">
                    {locale === 'hi' ? phase.phase.hi : phase.phase.en}
                  </span>
                  <span className="text-sm text-gray-500">({phase.ageRange})</span>
                  {isCurrent && (
                    <span className="px-2 py-0.5 bg-teal-500 text-white text-xs rounded-full">
                      Now
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  {locale === 'hi' ? phase.focus.hi : phase.focus.en}
                </div>
                {phase.keyYears.length > 0 && (
                  <div className="flex flex-wrap gap-1 mt-2">
                    {phase.keyYears.map((age) => (
                      <span
                        key={age}
                        className={`px-2 py-0.5 text-xs rounded-full ${
                          age === currentAge
                            ? 'bg-amber-500 text-white'
                            : age < currentAge
                            ? 'bg-gray-200 text-gray-500'
                            : 'bg-teal-100 text-teal-700'
                        }`}
                      >
                        {age}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function BhagyodayaCalculator({ locale, translations }: CalculatorProps) {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [name, setName] = useState('');
  const [result, setResult] = useState<BhagyodayaResult | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);
  const [activeTab, setActiveTab] = useState<
    'overview' | 'fortune' | 'pinnacles' | 'timeline' | 'current'
  >('overview');

  const canCalculate = day && month && year;

  const handleCalculate = () => {
    if (!canCalculate) return;

    setIsCalculating(true);
    setTimeout(() => {
      const res = calculateBhagyodaya(
        parseInt(day),
        parseInt(month),
        parseInt(year),
        name || undefined
      );
      setResult(res);
      setIsCalculating(false);
    }, 500);
  };

  // Filter future fortune years
  const futureFortunes = useMemo(() => {
    if (!result) return [];
    return result.fortuneYears.filter((f) => f.age >= result.currentAge).slice(0, 10);
  }, [result]);

  return (
    <div className="space-y-8">
      {/* Input Section */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">{translations.title}</h2>

        <div className="space-y-6">
          {/* Date of Birth */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              {translations.dateOfBirth} *
            </label>
            <ModernDateInput
              day={day}
              month={month}
              year={year}
              onDayChange={setDay}
              onMonthChange={setMonth}
              onYearChange={setYear}
              locale={locale}
              translations={translations}
            />
          </div>

          {/* Name (Optional) */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {translations.name}{' '}
              <span className="text-gray-400 font-normal">({translations.nameOptional})</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={translations.placeholders.name}
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl
                       text-gray-900 placeholder-gray-400
                       focus:ring-2 focus:ring-teal-500 focus:border-teal-500
                       transition-all duration-200"
            />
            <p className="mt-1 text-xs text-gray-500">
              {locale === 'hi'
                ? 'नाम देने से भाग्य संख्या भी शामिल होती है'
                : 'Providing name includes Destiny Number in analysis'}
            </p>
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            disabled={!canCalculate || isCalculating}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300
                       ${
                         canCalculate && !isCalculating
                           ? 'bg-gradient-to-r from-teal-500 to-emerald-600 text-white hover:from-teal-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
                           : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                       }`}
          >
            {isCalculating ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                {translations.calculating}
              </span>
            ) : (
              translations.calculate
            )}
          </button>
        </div>
      </div>

      {/* Results Section */}
      {result && (
        <div className="space-y-6">
          {/* Primary Bhagyodaya Highlight */}
          <div className="bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-4xl">🌟</span>
              <h3 className="text-2xl font-bold">{translations.results.primaryBhagyodaya}</h3>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-sm opacity-90 mb-1">
                  {locale === 'hi' ? 'भाग्योदय उम्र' : 'Fortune Age'}
                </div>
                <div className="text-4xl font-bold">{result.primaryBhagyodayaAge}</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-sm opacity-90 mb-1">
                  {locale === 'hi' ? 'भाग्योदय वर्ष' : 'Fortune Year'}
                </div>
                <div className="text-4xl font-bold">{result.primaryBhagyodayaYear}</div>
              </div>
            </div>
            <p className="mt-4 text-white/90">
              {locale === 'hi'
                ? result.primaryBhagyodayaReason.hi
                : result.primaryBhagyodayaReason.en}
            </p>
            {result.currentAge >= result.primaryBhagyodayaAge && (
              <div className="mt-4 bg-white/20 rounded-lg p-3 text-center">
                {locale === 'hi'
                  ? 'आप अपने प्राथमिक भाग्योदय वर्ष को पार कर चुके हैं!'
                  : "You've passed your primary Bhagyodaya year!"}
              </div>
            )}
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-2">
            {[
              { id: 'overview', label: locale === 'hi' ? 'सारांश' : 'Overview' },
              { id: 'fortune', label: translations.results.fortuneYears },
              { id: 'pinnacles', label: translations.results.pinnacles },
              { id: 'timeline', label: translations.results.timeline },
              { id: 'current', label: translations.results.currentYear },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-teal-500 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-6">
              {/* Core Numbers */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {translations.results.coreNumbers}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="text-center p-4 bg-teal-50 rounded-xl">
                    <div className="text-3xl font-bold text-teal-600">
                      {result.lifePathNumber}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {translations.results.lifePathNumber}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <div className="text-3xl font-bold text-purple-600">
                      {result.birthDayNumber}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">
                      {translations.results.birthDayNumber}
                    </div>
                  </div>
                  {result.destinyNumber && (
                    <div className="text-center p-4 bg-amber-50 rounded-xl">
                      <div className="text-3xl font-bold text-amber-600">
                        {result.destinyNumber}
                      </div>
                      <div className="text-sm text-gray-600 mt-1">
                        {translations.results.destinyNumber}
                      </div>
                    </div>
                  )}
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600">{result.currentAge}</div>
                    <div className="text-sm text-gray-600 mt-1">
                      {translations.results.currentAge}
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Life Phase */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {translations.results.lifePhase}
                </h3>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {result.currentLifePhase.currentPhase}/{result.currentLifePhase.totalPhases}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {locale === 'hi'
                        ? result.currentLifePhase.name.hi
                        : result.currentLifePhase.name.en}
                    </div>
                    <div className="text-sm text-gray-500">
                      {locale === 'hi' ? 'उम्र' : 'Age'} {result.currentLifePhase.ageRange}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">
                  {locale === 'hi'
                    ? result.currentLifePhase.theme.hi
                    : result.currentLifePhase.theme.en}
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="bg-teal-50 rounded-xl p-4">
                    <h4 className="font-medium text-teal-700 mb-2">
                      {translations.results.opportunities}
                    </h4>
                    <ul className="space-y-1">
                      {result.currentLifePhase.opportunities.map((opp, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-teal-500">+</span>
                          {locale === 'hi' ? opp.hi : opp.en}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-red-50 rounded-xl p-4">
                    <h4 className="font-medium text-red-700 mb-2">
                      {translations.results.challenges}
                    </h4>
                    <ul className="space-y-1">
                      {result.currentLifePhase.challenges.map((ch, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-red-500">!</span>
                          {locale === 'hi' ? ch.hi : ch.en}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Upcoming Peaks */}
              {result.upcomingPeaks.length > 0 && (
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">
                    {translations.results.upcomingPeaks}
                  </h3>
                  <div className="space-y-4">
                    {result.upcomingPeaks.slice(0, 3).map((peak, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-xl p-4 hover:border-teal-300 transition-colors"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <span className="font-semibold text-gray-900">
                              {locale === 'hi' ? `उम्र ${peak.age}` : `Age ${peak.age}`}
                            </span>
                            <span className="text-gray-500 ml-2">({peak.year})</span>
                          </div>
                          <span className="px-2 py-1 bg-teal-100 text-teal-700 text-xs rounded-full">
                            {locale === 'hi' ? peak.type.hi : peak.type.en}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {locale === 'hi' ? peak.description.hi : peak.description.en}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Saturn Return */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {translations.results.saturnReturn}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div
                    className={`p-4 rounded-xl ${
                      result.saturnReturn.isInSaturnReturn &&
                      result.currentAge >= 28 &&
                      result.currentAge <= 31
                        ? 'bg-amber-100 border-2 border-amber-400'
                        : 'bg-gray-50'
                    }`}
                  >
                    <div className="text-sm text-gray-500 mb-1">
                      {locale === 'hi' ? 'प्रथम शनि वापसी' : 'First Saturn Return'}
                    </div>
                    <div className="font-semibold">
                      {locale === 'hi' ? 'उम्र' : 'Age'} {result.saturnReturn.firstReturn.age} (
                      {result.saturnReturn.firstReturn.year})
                    </div>
                  </div>
                  <div
                    className={`p-4 rounded-xl ${
                      result.saturnReturn.isInSaturnReturn &&
                      result.currentAge >= 57 &&
                      result.currentAge <= 60
                        ? 'bg-amber-100 border-2 border-amber-400'
                        : 'bg-gray-50'
                    }`}
                  >
                    <div className="text-sm text-gray-500 mb-1">
                      {locale === 'hi' ? 'द्वितीय शनि वापसी' : 'Second Saturn Return'}
                    </div>
                    <div className="font-semibold">
                      {locale === 'hi' ? 'उम्र' : 'Age'} {result.saturnReturn.secondReturn.age} (
                      {result.saturnReturn.secondReturn.year})
                    </div>
                  </div>
                </div>
                {result.saturnReturn.saturnReturnPhase && (
                  <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-xl">
                    <p className="text-amber-800">
                      {locale === 'hi'
                        ? result.saturnReturn.saturnReturnPhase.hi
                        : result.saturnReturn.saturnReturnPhase.en}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Fortune Years Tab */}
          {activeTab === 'fortune' && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {translations.results.fortuneYears}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {futureFortunes.map((fortune, index) => (
                  <FortuneYearCard
                    key={index}
                    fortune={fortune}
                    locale={locale}
                    currentAge={result.currentAge}
                    translations={translations}
                  />
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded" />
                  <span className="text-sm text-gray-600">{translations.results.major}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-gradient-to-r from-teal-500 to-emerald-600 rounded" />
                  <span className="text-sm text-gray-600">{translations.results.moderate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-gradient-to-r from-gray-400 to-gray-500 rounded" />
                  <span className="text-sm text-gray-600">{translations.results.minor}</span>
                </div>
              </div>
            </div>
          )}

          {/* Pinnacles & Challenges Tab */}
          {activeTab === 'pinnacles' && (
            <div className="space-y-6">
              {/* Pinnacles */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {translations.results.pinnacles}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {result.pinnacles.map((pinnacle) => (
                    <PinnacleCard
                      key={pinnacle.number}
                      pinnacle={pinnacle}
                      locale={locale}
                      translations={translations}
                    />
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {translations.results.challenges}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {result.challenges.map((challenge) => (
                    <ChallengeCard
                      key={challenge.number}
                      challenge={challenge}
                      locale={locale}
                      translations={translations}
                    />
                  ))}
                </div>
              </div>

              {/* Jupiter Cycles */}
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  {translations.results.jupiterCycles}
                </h3>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {result.jupiterCycles.map((cycle) => (
                    <div
                      key={cycle.cycleNumber}
                      className={`p-4 rounded-xl border ${
                        cycle.isPast
                          ? 'bg-gray-50 border-gray-200 opacity-60'
                          : 'bg-amber-50 border-amber-200'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-semibold text-gray-900">
                          {locale === 'hi' ? `चक्र ${cycle.cycleNumber}` : `Cycle ${cycle.cycleNumber}`}
                        </span>
                        <span className="text-sm text-gray-500">
                          {locale === 'hi' ? 'उम्र' : 'Age'} {cycle.age}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">
                        {locale === 'hi' ? cycle.theme.hi : cycle.theme.en}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Timeline Tab */}
          {activeTab === 'timeline' && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {translations.results.timeline}
              </h3>
              <FortuneTimeline
                timeline={result.fortuneTimeline}
                currentAge={result.currentAge}
                locale={locale}
              />
            </div>
          )}

          {/* Current Year Tab */}
          {activeTab === 'current' && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">
                {translations.results.currentYear}
              </h3>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  {result.currentYearNumber}
                </div>
                <div>
                  <div className="text-lg font-semibold text-gray-900">
                    {locale === 'hi' ? 'व्यक्तिगत वर्ष' : 'Personal Year'} {result.currentYearNumber}
                  </div>
                  <div className="text-sm text-gray-500">{new Date().getFullYear()}</div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-xl p-6 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {locale === 'hi'
                    ? result.currentYearFortune.hi
                    : result.currentYearFortune.en}
                </p>
              </div>
              <h4 className="font-semibold text-gray-900 mb-3">
                {locale === 'hi' ? 'इस वर्ष के लिए सुझाव' : 'Tips for This Year'}
              </h4>
              <ul className="space-y-2">
                {result.currentYearTips.map((tip, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg"
                  >
                    <span className="w-6 h-6 bg-teal-500 text-white rounded-full flex items-center justify-center text-sm flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">
                      {locale === 'hi' ? tip.hi : tip.en}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
