'use client';

import { useState } from 'react';
import { Home, Calculator, RefreshCw, Star, AlertTriangle, CheckCircle, ChevronDown } from 'lucide-react';
import { analyzeHouseNumber, HouseNumberResult } from '@/lib/vastu/house-number';

interface Translations {
  title: string;
  houseNumber: string;
  houseNumberPlaceholder: string;
  includeOwnerDob: string;
  ownerDob: string;
  calculate: string;
  calculating: string;
  results: {
    title: string;
    reducedNumber: string;
    calculationSteps: string;
    planet: string;
    element: string;
    direction: string;
    keywords: string;
    bestFor: string;
    challenges: string;
    luckyColors: string;
    luckyDays: string;
    compatibility: string;
    compatibilityScore: string;
    remedies: string;
    enhancements: string;
    verdict: string;
    excellent: string;
    good: string;
    neutral: string;
    challenging: string;
  };
  placeholders: {
    day: string;
    month: string;
    year: string;
  };
  months: string[];
}

interface Props {
  locale: string;
  translations: Translations;
}

export default function HouseNumberCalculator({ locale, translations }: Props) {
  const [houseNumber, setHouseNumber] = useState('');
  const [includeOwnerDob, setIncludeOwnerDob] = useState(false);
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<HouseNumberResult | null>(null);

  const t = translations;
  const isHindi = locale === 'hi';

  const handleCalculate = () => {
    if (!houseNumber.trim()) return;

    setIsCalculating(true);

    setTimeout(() => {
      const ownerDob = includeOwnerDob && day && month && year
        ? { day: parseInt(day), month: parseInt(month), year: parseInt(year) }
        : undefined;

      const analysisResult = analyzeHouseNumber({
        houseNumber: houseNumber.trim(),
        ownerDob,
      });

      setResult(analysisResult);
      setIsCalculating(false);
    }, 500);
  };

  const handleReset = () => {
    setHouseNumber('');
    setIncludeOwnerDob(false);
    setDay('');
    setMonth('');
    setYear('');
    setResult(null);
  };

  const getEnergyIcon = (energy: string) => {
    switch (energy) {
      case 'positive':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'challenging':
        return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      default:
        return <Star className="w-5 h-5 text-purple-500" />;
    }
  };

  const getCompatibilityColor = (level: string) => {
    switch (level) {
      case 'excellent':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'good':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'neutral':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'challenging':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-8">
      {/* Calculator Form */}
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 bg-gradient-to-br from-saffron-500 to-orange-600 rounded-xl">
            <Home className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-xl font-bold text-gray-900">{t.title}</h2>
        </div>

        <div className="space-y-6">
          {/* House Number Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.houseNumber}
            </label>
            <input
              type="text"
              value={houseNumber}
              onChange={(e) => setHouseNumber(e.target.value)}
              placeholder={t.houseNumberPlaceholder}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 text-lg"
            />
            <p className="mt-1 text-xs text-gray-500">
              {isHindi
                ? 'उदाहरण: 42, 12A, 301, B-15'
                : 'Examples: 42, 12A, 301, B-15'}
            </p>
          </div>

          {/* Include Owner DOB Toggle */}
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="includeOwnerDob"
              checked={includeOwnerDob}
              onChange={(e) => setIncludeOwnerDob(e.target.checked)}
              className="w-4 h-4 text-saffron-600 border-gray-300 rounded focus:ring-saffron-500"
            />
            <label htmlFor="includeOwnerDob" className="text-sm text-gray-700">
              {t.includeOwnerDob}
            </label>
          </div>

          {/* Owner DOB Fields */}
          {includeOwnerDob && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.ownerDob}
              </label>
              <div className="grid grid-cols-3 gap-3">
                <input
                  type="number"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  placeholder={t.placeholders.day}
                  min="1"
                  max="31"
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500"
                />
                <div className="relative">
                  <select
                    value={month}
                    onChange={(e) => setMonth(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500 appearance-none bg-white"
                  >
                    <option value="">{t.placeholders.month}</option>
                    {t.months.map((m, i) => (
                      <option key={i + 1} value={i + 1}>
                        {m}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                </div>
                <input
                  type="number"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                  placeholder={t.placeholders.year}
                  min="1900"
                  max={new Date().getFullYear()}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-saffron-500 focus:border-saffron-500"
                />
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleCalculate}
              disabled={!houseNumber.trim() || isCalculating}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-saffron-500 to-orange-600 text-white font-semibold rounded-xl hover:from-saffron-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isCalculating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  {t.calculating}
                </>
              ) : (
                <>
                  <Calculator className="w-5 h-5" />
                  {t.calculate}
                </>
              )}
            </button>

            {result && (
              <button
                onClick={handleReset}
                className="px-4 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <RefreshCw className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results */}
      {result && (
        <div className="space-y-6">
          {/* Main Result Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{t.results.title}</h3>

            {/* Number Display */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="flex items-center justify-center w-24 h-24 bg-gradient-to-br from-saffron-500 to-orange-600 rounded-2xl shadow-lg">
                <span className="text-4xl font-bold text-white">{result.reducedNumber}</span>
              </div>
              <div className="text-center sm:text-left">
                <p className="text-sm text-gray-500 mb-1">{t.results.reducedNumber}</p>
                <p className="text-2xl font-bold text-gray-900">
                  {result.originalNumber} → {result.reducedNumber}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  {getEnergyIcon(result.meaning.energy)}
                  <span className={`text-sm font-medium ${
                    result.meaning.energy === 'positive' ? 'text-green-600' :
                    result.meaning.energy === 'challenging' ? 'text-amber-600' : 'text-purple-600'
                  }`}>
                    {result.meaning.energy === 'positive'
                      ? (isHindi ? 'शुभ' : 'Auspicious')
                      : result.meaning.energy === 'challenging'
                      ? (isHindi ? 'चुनौतीपूर्ण' : 'Challenging')
                      : (isHindi ? 'आध्यात्मिक' : 'Spiritual')}
                  </span>
                </div>
              </div>
            </div>

            {/* Calculation Steps */}
            <div className="bg-gray-50 rounded-xl p-4 mb-6">
              <p className="text-sm font-medium text-gray-700 mb-2">{t.results.calculationSteps}</p>
              <div className="space-y-1">
                {result.reductionSteps.map((step, i) => (
                  <p key={i} className="text-sm text-gray-600 font-mono">{step}</p>
                ))}
              </div>
            </div>

            {/* Planet, Element, Direction */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-purple-50 rounded-xl p-4 text-center">
                <p className="text-xs text-purple-600 mb-1">{t.results.planet}</p>
                <p className="font-semibold text-purple-900">
                  {isHindi ? result.meaning.planet.hi : result.meaning.planet.en}
                </p>
              </div>
              <div className="bg-blue-50 rounded-xl p-4 text-center">
                <p className="text-xs text-blue-600 mb-1">{t.results.element}</p>
                <p className="font-semibold text-blue-900">
                  {isHindi ? result.meaning.element.hi : result.meaning.element.en}
                </p>
              </div>
              <div className="bg-green-50 rounded-xl p-4 text-center">
                <p className="text-xs text-green-600 mb-1">{t.results.direction}</p>
                <p className="font-semibold text-green-900">
                  {isHindi ? result.meaning.direction.hi : result.meaning.direction.en}
                </p>
              </div>
            </div>

            {/* Keywords */}
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-2">{t.results.keywords}</p>
              <div className="flex flex-wrap gap-2">
                {result.meaning.keywords.map((keyword, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-saffron-100 text-saffron-800 rounded-full text-sm font-medium"
                  >
                    {isHindi ? keyword.hi : keyword.en}
                  </span>
                ))}
              </div>
            </div>

            {/* Best For */}
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-2">{t.results.bestFor}</p>
              <ul className="space-y-2">
                {result.meaning.bestFor.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {isHindi ? item.hi : item.en}
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            {result.meaning.challenges.length > 0 && (
              <div className="mb-6">
                <p className="text-sm font-medium text-gray-700 mb-2">{t.results.challenges}</p>
                <ul className="space-y-2">
                  {result.meaning.challenges.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                      <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                      {isHindi ? item.hi : item.en}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Lucky Colors */}
            <div className="mb-6">
              <p className="text-sm font-medium text-gray-700 mb-2">{t.results.luckyColors}</p>
              <div className="flex flex-wrap gap-2">
                {result.meaning.colors.map((color, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                  >
                    {isHindi ? color.hi : color.en}
                  </span>
                ))}
              </div>
            </div>

            {/* Lucky Days */}
            <div>
              <p className="text-sm font-medium text-gray-700 mb-2">{t.results.luckyDays}</p>
              <div className="flex flex-wrap gap-2">
                {result.luckyDays.map((day, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm"
                  >
                    {isHindi ? day.hi : day.en}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Compatibility Card (if DOB provided) */}
          {result.compatibility && (
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t.results.compatibility}</h3>

              <div className={`rounded-xl p-4 border ${getCompatibilityColor(result.compatibility.level)}`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold">
                    {t.results[result.compatibility.level as keyof typeof t.results]}
                  </span>
                  <span className="text-2xl font-bold">{result.compatibility.score}%</span>
                </div>
                <p className="text-sm">
                  {isHindi
                    ? result.compatibility.description.hi
                    : result.compatibility.description.en}
                </p>
              </div>

              {/* Score Bar */}
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">{t.results.compatibilityScore}</p>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-500 ${
                      result.compatibility.score >= 80 ? 'bg-green-500' :
                      result.compatibility.score >= 60 ? 'bg-blue-500' :
                      result.compatibility.score >= 40 ? 'bg-amber-500' : 'bg-red-500'
                    }`}
                    style={{ width: `${result.compatibility.score}%` }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Remedies Card */}
          {result.remedies.length > 0 && (
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl shadow-lg border border-amber-100 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-amber-900 mb-4">{t.results.remedies}</h3>
              <ul className="space-y-3">
                {result.remedies.map((remedy, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-6 h-6 bg-amber-200 text-amber-800 rounded-full text-sm font-medium flex-shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-amber-900">
                      {isHindi ? remedy.hi : remedy.en}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Enhancements Card */}
          {result.enhancements.length > 0 && (
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-lg border border-green-100 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-green-900 mb-4">{t.results.enhancements}</h3>
              <ul className="space-y-3">
                {result.enhancements.map((enhancement, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-green-900">
                      {isHindi ? enhancement.hi : enhancement.en}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Verdict Card */}
          <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl shadow-lg border border-purple-100 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-purple-900 mb-4">{t.results.verdict}</h3>
            <p className="text-purple-800 leading-relaxed">
              {isHindi ? result.overallVerdict.hi : result.overallVerdict.en}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
