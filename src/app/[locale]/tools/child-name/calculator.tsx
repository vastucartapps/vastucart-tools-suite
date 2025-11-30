'use client';

import { useState } from 'react';
import { Star, ChevronDown, Heart, Sparkles, Users, Baby } from 'lucide-react';
import {
  calculateChildNameSuggestions,
  ChildNameResult,
  AVAILABLE_QUALITIES,
} from '@/lib/numerology/childName';

interface ChildNameCalculatorProps {
  locale: string;
  translations: {
    title: string;
    fatherDob: string;
    motherDob: string;
    childGender: string;
    genderOptions: {
      male: string;
      female: string;
      any: string;
    };
    desiredQualities: string;
    selectQualities: string;
    startingLetter: string;
    anyLetter: string;
    calculate: string;
    calculating: string;
    results: {
      title: string;
      parentNumbers: string;
      fatherLifePath: string;
      motherLifePath: string;
      fatherBirthDay: string;
      motherBirthDay: string;
      harmonyNumber: string;
      idealNumbers: string;
      recommendedLetters: string;
      nameSuggestions: string;
      compatibilityScore: string;
      meaning: string;
      numerologyNumber: string;
      matchReason: string;
      traits: string;
      guidance: string;
      noResults: string;
    };
    placeholders: {
      day: string;
      month: string;
      year: string;
    };
    months: string[];
  };
}

// Modern Date Input Component
function ModernDateInput({
  label,
  day,
  month,
  year,
  onDayChange,
  onMonthChange,
  onYearChange,
  placeholders,
  months,
  icon,
}: {
  label: string;
  day: string;
  month: string;
  year: string;
  onDayChange: (value: string) => void;
  onMonthChange: (value: string) => void;
  onYearChange: (value: string) => void;
  placeholders: { day: string; month: string; year: string };
  months: string[];
  icon: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
        {icon}
        {label}
      </label>
      <div className="grid grid-cols-3 gap-2">
        <div className="relative">
          <input
            type="text"
            inputMode="numeric"
            maxLength={2}
            value={day}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '');
              if (val === '' || (parseInt(val) >= 0 && parseInt(val) <= 31)) {
                onDayChange(val);
              }
            }}
            placeholder={placeholders.day}
            className="w-full px-3 py-3 text-center text-lg font-medium border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
          />
        </div>

        <div className="relative">
          <select
            value={month}
            onChange={(e) => onMonthChange(e.target.value)}
            className="w-full px-2 py-3 text-center text-sm font-medium border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white appearance-none cursor-pointer"
          >
            <option value="">{placeholders.month}</option>
            {months.map((m, i) => (
              <option key={i} value={String(i + 1)}>
                {m}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
        </div>

        <div className="relative">
          <input
            type="text"
            inputMode="numeric"
            maxLength={4}
            value={year}
            onChange={(e) => {
              const val = e.target.value.replace(/\D/g, '');
              if (val.length <= 4) {
                onYearChange(val);
              }
            }}
            placeholder={placeholders.year}
            className="w-full px-3 py-3 text-center text-lg font-medium border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white"
          />
        </div>
      </div>
    </div>
  );
}

// Name Card Component
function NameCard({
  suggestion,
  locale,
  translations,
}: {
  suggestion: ChildNameResult['nameSuggestions'][0];
  locale: string;
  translations: ChildNameCalculatorProps['translations']['results'];
}) {
  const [expanded, setExpanded] = useState(false);

  const getScoreColor = (score: number) => {
    if (score >= 70) return 'bg-green-500';
    if (score >= 50) return 'bg-amber-500';
    return 'bg-gray-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 70) return locale === 'hi' ? 'उत्कृष्ट' : 'Excellent';
    if (score >= 50) return locale === 'hi' ? 'अच्छा' : 'Good';
    return locale === 'hi' ? 'सामान्य' : 'Fair';
  };

  return (
    <div
      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold text-gray-900">{suggestion.name}</h3>
              <span className="text-xs px-2 py-0.5 bg-gray-100 text-gray-600 rounded-full capitalize">
                {suggestion.gender === 'male'
                  ? locale === 'hi'
                    ? 'लड़का'
                    : 'Boy'
                  : locale === 'hi'
                    ? 'लड़की'
                    : 'Girl'}
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              {locale === 'hi' ? suggestion.meaning.hi : suggestion.meaning.en}
            </p>
          </div>

          <div className="flex flex-col items-end gap-1">
            <div
              className={`px-3 py-1 rounded-full text-white text-sm font-medium ${getScoreColor(suggestion.compatibilityScore)}`}
            >
              {suggestion.compatibilityScore}%
            </div>
            <span className="text-xs text-gray-500">{getScoreLabel(suggestion.compatibilityScore)}</span>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-3">
          <div className="flex items-center gap-1 text-sm">
            <span className="text-gray-500">{translations.numerologyNumber}:</span>
            <span className="font-bold text-teal-600">{suggestion.pythagoreanNumber}</span>
          </div>
          <span className="text-gray-300">|</span>
          <span className="text-xs text-gray-500">{suggestion.origin}</span>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-gray-100 p-4 bg-gray-50 space-y-3">
          <div>
            <span className="text-xs font-medium text-gray-500 uppercase">{translations.matchReason}</span>
            <p className="text-sm text-gray-700 mt-1">
              {locale === 'hi' ? suggestion.matchReason.hi : suggestion.matchReason.en}
            </p>
          </div>
          <div>
            <span className="text-xs font-medium text-gray-500 uppercase">{translations.traits}</span>
            <p className="text-sm text-gray-700 mt-1">
              {locale === 'hi' ? suggestion.traits.hi : suggestion.traits.en}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default function ChildNameCalculator({ locale, translations }: ChildNameCalculatorProps) {
  // Father's DOB
  const [fatherDay, setFatherDay] = useState('');
  const [fatherMonth, setFatherMonth] = useState('');
  const [fatherYear, setFatherYear] = useState('');

  // Mother's DOB
  const [motherDay, setMotherDay] = useState('');
  const [motherMonth, setMotherMonth] = useState('');
  const [motherYear, setMotherYear] = useState('');

  // Child preferences
  const [childGender, setChildGender] = useState<'male' | 'female' | 'any'>('any');
  const [selectedQualities, setSelectedQualities] = useState<string[]>([]);
  const [startingLetter, setStartingLetter] = useState('');

  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<ChildNameResult | null>(null);

  const handleCalculate = () => {
    const fDay = parseInt(fatherDay);
    const fMonth = parseInt(fatherMonth);
    const fYear = parseInt(fatherYear);
    const mDay = parseInt(motherDay);
    const mMonth = parseInt(motherMonth);
    const mYear = parseInt(motherYear);

    if (
      isNaN(fDay) || fDay < 1 || fDay > 31 ||
      isNaN(fMonth) || fMonth < 1 || fMonth > 12 ||
      isNaN(fYear) || fYear < 1900 || fYear > 2100 ||
      isNaN(mDay) || mDay < 1 || mDay > 31 ||
      isNaN(mMonth) || mMonth < 1 || mMonth > 12 ||
      isNaN(mYear) || mYear < 1900 || mYear > 2100
    ) {
      return;
    }

    setIsCalculating(true);

    setTimeout(() => {
      const calculatedResult = calculateChildNameSuggestions({
        father: { day: fDay, month: fMonth, year: fYear },
        mother: { day: mDay, month: mMonth, year: mYear },
        childGender,
        desiredQualities: selectedQualities,
        preferredStartingLetter: startingLetter || undefined,
      });

      setResult(calculatedResult);
      setIsCalculating(false);
    }, 500);
  };

  const toggleQuality = (quality: string) => {
    setSelectedQualities((prev) =>
      prev.includes(quality) ? prev.filter((q) => q !== quality) : [...prev, quality]
    );
  };

  const isFormValid =
    fatherDay && fatherMonth && fatherYear &&
    motherDay && motherMonth && motherYear;

  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

  return (
    <div className="space-y-8">
      {/* Calculator Form */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
        <div className="space-y-6">
          {/* Parents' DOB Section */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Father's DOB */}
            <ModernDateInput
              label={translations.fatherDob}
              day={fatherDay}
              month={fatherMonth}
              year={fatherYear}
              onDayChange={setFatherDay}
              onMonthChange={setFatherMonth}
              onYearChange={setFatherYear}
              placeholders={translations.placeholders}
              months={translations.months}
              icon={<Users className="w-4 h-4 text-blue-500" />}
            />

            {/* Mother's DOB */}
            <ModernDateInput
              label={translations.motherDob}
              day={motherDay}
              month={motherMonth}
              year={motherYear}
              onDayChange={setMotherDay}
              onMonthChange={setMotherMonth}
              onYearChange={setMotherYear}
              placeholders={translations.placeholders}
              months={translations.months}
              icon={<Heart className="w-4 h-4 text-pink-500" />}
            />
          </div>

          {/* Child Gender */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Baby className="w-4 h-4 text-purple-500" />
              {translations.childGender}
            </label>
            <div className="grid grid-cols-3 gap-3">
              {(['male', 'female', 'any'] as const).map((gender) => (
                <button
                  key={gender}
                  type="button"
                  onClick={() => setChildGender(gender)}
                  className={`py-3 px-4 rounded-xl border-2 transition-all text-sm font-medium ${
                    childGender === gender
                      ? 'border-teal-500 bg-teal-50 text-teal-700'
                      : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300'
                  }`}
                >
                  {translations.genderOptions[gender]}
                </button>
              ))}
            </div>
          </div>

          {/* Desired Qualities */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Sparkles className="w-4 h-4 text-amber-500" />
              {translations.desiredQualities}
            </label>
            <p className="text-xs text-gray-500">{translations.selectQualities}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {AVAILABLE_QUALITIES.map((quality) => (
                <button
                  key={quality.value}
                  type="button"
                  onClick={() => toggleQuality(quality.value)}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedQualities.includes(quality.value)
                      ? 'bg-teal-500 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {locale === 'hi' ? quality.label.hi : quality.label.en}
                </button>
              ))}
            </div>
          </div>

          {/* Starting Letter */}
          <div className="space-y-2">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              <Star className="w-4 h-4 text-teal-500" />
              {translations.startingLetter}
            </label>
            <div className="relative">
              <select
                value={startingLetter}
                onChange={(e) => setStartingLetter(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all bg-white appearance-none cursor-pointer"
              >
                <option value="">{translations.anyLetter}</option>
                {alphabet.map((letter) => (
                  <option key={letter} value={letter}>
                    {letter}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            disabled={!isFormValid || isCalculating}
            className="w-full py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isCalculating ? (
              <span className="flex items-center justify-center gap-2">
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
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

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Parent Numbers Overview */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">{translations.results.parentNumbers}</h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <div className="text-3xl font-bold text-blue-600">{result.fatherLifePath}</div>
                <div className="text-sm text-gray-600 mt-1">{translations.results.fatherLifePath}</div>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-xl">
                <div className="text-3xl font-bold text-pink-600">{result.motherLifePath}</div>
                <div className="text-sm text-gray-600 mt-1">{translations.results.motherLifePath}</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <div className="text-3xl font-bold text-purple-600">{result.combinedNumber}</div>
                <div className="text-sm text-gray-600 mt-1">{translations.results.harmonyNumber}</div>
              </div>
              <div className="text-center p-4 bg-teal-50 rounded-xl">
                <div className="text-lg font-bold text-teal-600">{result.idealNumbers.slice(0, 4).join(', ')}</div>
                <div className="text-sm text-gray-600 mt-1">{translations.results.idealNumbers}</div>
              </div>
            </div>

            {/* Recommended Letters */}
            <div className="mt-4 p-4 bg-amber-50 rounded-xl">
              <div className="text-sm font-medium text-gray-700 mb-2">{translations.results.recommendedLetters}</div>
              <div className="flex flex-wrap gap-2">
                {result.recommendedLetters.slice(0, 10).map((letter) => (
                  <span
                    key={letter}
                    className="w-8 h-8 flex items-center justify-center bg-amber-500 text-white font-bold rounded-lg"
                  >
                    {letter}
                  </span>
                ))}
              </div>
            </div>

            {/* Guidance */}
            <div className="mt-4 p-4 bg-gray-50 rounded-xl">
              <div className="text-sm font-medium text-gray-700 mb-2">{translations.results.guidance}</div>
              <p className="text-sm text-gray-600">
                {locale === 'hi' ? result.guidance.hi : result.guidance.en}
              </p>
            </div>
          </div>

          {/* Name Suggestions */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              {translations.results.nameSuggestions}
              <span className="ml-2 text-sm font-normal text-gray-500">
                ({result.nameSuggestions.length} {locale === 'hi' ? 'नाम' : 'names'})
              </span>
            </h2>

            {result.nameSuggestions.length > 0 ? (
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                {result.nameSuggestions.map((suggestion, index) => (
                  <NameCard
                    key={index}
                    suggestion={suggestion}
                    locale={locale}
                    translations={translations.results}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">{translations.results.noResults}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
