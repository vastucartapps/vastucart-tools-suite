'use client';

import { useState } from 'react';
import { Home, Compass, RefreshCw, CheckCircle, AlertTriangle, XCircle } from 'lucide-react';
import { CustomSelect } from '@/components/ui/custom-select';
import {
  getRoomVastuAdvice,
  getAllRoomTypes,
  getAllDirections,
  RoomAdvisorResult,
  RoomType,
  Direction,
} from '@/lib/vastu/room-advisor';

interface Translations {
  title: string;
  selectRoom: string;
  selectDirection: string;
  roomPlaceholder: string;
  directionPlaceholder: string;
  calculate: string;
  calculating: string;
  results: {
    title: string;
    currentStatus: string;
    overallScore: string;
    idealDirections: string;
    avoidDirections: string;
    recommendedColors: string;
    avoidColors: string;
    placementTips: string;
    item: string;
    placement: string;
    reason: string;
    remedies: string;
    dos: string;
    donts: string;
    ideal: string;
    good: string;
    acceptable: string;
    avoid: string;
    highPriority: string;
    mediumPriority: string;
    lowPriority: string;
  };
  roomTypes: Record<string, string>;
  directions: Record<string, string>;
}

interface Props {
  locale: string;
  translations: Translations;
}

export default function RoomAdvisorCalculator({ locale, translations }: Props) {
  const [roomType, setRoomType] = useState<RoomType | ''>('');
  const [direction, setDirection] = useState<Direction | ''>('');
  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<RoomAdvisorResult | null>(null);

  const t = translations;
  const isHindi = locale === 'hi';

  const roomTypes = getAllRoomTypes();
  const directions = getAllDirections();

  const handleCalculate = () => {
    if (!roomType || !direction) return;

    setIsCalculating(true);

    setTimeout(() => {
      const advice = getRoomVastuAdvice({
        roomType,
        currentDirection: direction,
      });
      setResult(advice);
      setIsCalculating(false);
    }, 500);
  };

  const handleReset = () => {
    setRoomType('');
    setDirection('');
    setResult(null);
  };

  const getSuitabilityIcon = (suitability: string) => {
    switch (suitability) {
      case 'ideal':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'good':
        return <CheckCircle className="w-5 h-5 text-teal-500" />;
      case 'acceptable':
        return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case 'avoid':
        return <XCircle className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getSuitabilityColor = (suitability: string) => {
    switch (suitability) {
      case 'ideal':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'good':
        return 'bg-teal-100 text-teal-800 border-teal-200';
      case 'acceptable':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'avoid':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-teal-600';
    if (score >= 40) return 'text-amber-600';
    return 'text-red-600';
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
          {/* Room Type Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.selectRoom}
            </label>
            <CustomSelect
              value={roomType}
              onChange={(val) => setRoomType(val as RoomType)}
              options={[
                { value: '', label: t.roomPlaceholder },
                ...roomTypes.map((room) => ({
                  value: room.type,
                  label: t.roomTypes[room.type] || (isHindi ? room.name.hi : room.name.en),
                })),
              ]}
            />
          </div>

          {/* Direction Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              {t.selectDirection}
            </label>
            <CustomSelect
              value={direction}
              onChange={(val) => setDirection(val as Direction)}
              options={[
                { value: '', label: t.directionPlaceholder },
                ...directions.map((dir) => ({
                  value: dir.direction,
                  label: t.directions[dir.direction] || (isHindi ? dir.name.hi : dir.name.en),
                })),
              ]}
            />
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <button
              onClick={handleCalculate}
              disabled={!roomType || !direction || isCalculating}
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-saffron-500 to-orange-600 text-white font-semibold rounded-xl hover:from-saffron-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              {isCalculating ? (
                <>
                  <RefreshCw className="w-5 h-5 animate-spin" />
                  {t.calculating}
                </>
              ) : (
                <>
                  <Compass className="w-5 h-5" />
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
          {/* Current Status Card */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">{t.results.title}</h3>

            {/* Room and Direction Display */}
            <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
              <div className="text-center">
                <p className="text-sm text-gray-500 mb-1">
                  {isHindi ? result.roomName.hi : result.roomName.en}
                </p>
                <p className="text-lg font-semibold text-gray-900">
                  {isHindi ? result.currentDirectionName.hi : result.currentDirectionName.en}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <div className={`rounded-xl px-4 py-2 border ${getSuitabilityColor(result.currentSuitability)}`}>
                  <div className="flex items-center gap-2">
                    {getSuitabilityIcon(result.currentSuitability)}
                    <span className="font-semibold">
                      {t.results[result.currentSuitability as keyof typeof t.results]}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <p className="text-xs text-gray-500">{t.results.overallScore}</p>
                  <p className={`text-3xl font-bold ${getScoreColor(result.overallScore)}`}>
                    {result.overallScore}%
                  </p>
                </div>
              </div>
            </div>

            {/* Current Status Reason */}
            <div className={`rounded-xl p-4 border ${getSuitabilityColor(result.currentSuitability)}`}>
              <p className="text-sm">
                {isHindi
                  ? result.currentSuitabilityReason.hi
                  : result.currentSuitabilityReason.en}
              </p>
            </div>
          </div>

          {/* Ideal & Avoid Directions */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Ideal Directions */}
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-2xl shadow-lg border border-green-100 p-6">
              <h4 className="font-bold text-green-900 mb-4">{t.results.idealDirections}</h4>
              <div className="space-y-2">
                {result.idealDirections.map((dir) => (
                  <div
                    key={dir.direction}
                    className="flex items-center gap-2 text-sm text-green-800"
                  >
                    {getSuitabilityIcon(dir.suitability)}
                    <span>{isHindi ? dir.directionName.hi : dir.directionName.en}</span>
                    <span className="text-xs text-green-600">
                      ({t.results[dir.suitability as keyof typeof t.results]})
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Avoid Directions */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg border border-red-100 p-6">
              <h4 className="font-bold text-red-900 mb-4">{t.results.avoidDirections}</h4>
              <div className="space-y-2">
                {result.avoidDirections.map((dir) => (
                  <div
                    key={dir.direction}
                    className="flex items-center gap-2 text-sm text-red-800"
                  >
                    <XCircle className="w-4 h-4 text-red-500" />
                    <span>{isHindi ? dir.directionName.hi : dir.directionName.en}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Colors */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Recommended Colors */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h4 className="font-bold text-gray-900 mb-4">{t.results.recommendedColors}</h4>
              <div className="space-y-3">
                {result.colors.recommended.map((color, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg border border-gray-200"
                      style={{ backgroundColor: color.hexCode }}
                    />
                    <span className="text-sm text-gray-700">
                      {isHindi ? color.color.hi : color.color.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Avoid Colors */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
              <h4 className="font-bold text-gray-900 mb-4">{t.results.avoidColors}</h4>
              <div className="space-y-3">
                {result.colors.avoid.map((color, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div
                      className="w-8 h-8 rounded-lg border border-gray-200 relative"
                      style={{ backgroundColor: color.hexCode }}
                    >
                      <div className="absolute inset-0 flex items-center justify-center">
                        <XCircle className="w-4 h-4 text-white drop-shadow" />
                      </div>
                    </div>
                    <span className="text-sm text-gray-700">
                      {isHindi ? color.color.hi : color.color.en}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Placement Tips */}
          <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8">
            <h4 className="font-bold text-gray-900 mb-4">{t.results.placementTips}</h4>
            <div className="space-y-4">
              {result.placementTips.map((tip, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <span className="flex items-center justify-center w-8 h-8 bg-saffron-100 text-saffron-800 rounded-lg text-sm font-bold flex-shrink-0">
                      {i + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {isHindi ? tip.item.hi : tip.item.en}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">{t.results.placement}:</span>{' '}
                        {isHindi ? tip.placement.hi : tip.placement.en}
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        <span className="font-medium">{t.results.reason}:</span>{' '}
                        {isHindi ? tip.reason.hi : tip.reason.en}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Remedies (if any) */}
          {result.remedies.length > 0 && (
            <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl shadow-lg border border-amber-100 p-6 sm:p-8">
              <h4 className="font-bold text-amber-900 mb-4">{t.results.remedies}</h4>
              <div className="space-y-4">
                {result.remedies.map((remedy, i) => (
                  <div key={i} className="bg-white/50 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        remedy.priority === 'high' ? 'bg-red-100 text-red-800' :
                        remedy.priority === 'medium' ? 'bg-amber-100 text-amber-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {remedy.priority === 'high' ? t.results.highPriority :
                         remedy.priority === 'medium' ? t.results.mediumPriority :
                         t.results.lowPriority}
                      </span>
                    </div>
                    <p className="font-medium text-amber-900 mt-2">
                      {isHindi ? remedy.issue.hi : remedy.issue.en}
                    </p>
                    <p className="text-sm text-amber-800 mt-1">
                      {isHindi ? remedy.remedy.hi : remedy.remedy.en}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Do's and Don'ts */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Do's */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg border border-green-100 p-6">
              <h4 className="font-bold text-green-900 mb-4">{t.results.dos}</h4>
              <ul className="space-y-2">
                {result.dosList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-green-800">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    {isHindi ? item.hi : item.en}
                  </li>
                ))}
              </ul>
            </div>

            {/* Don'ts */}
            <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-2xl shadow-lg border border-red-100 p-6">
              <h4 className="font-bold text-red-900 mb-4">{t.results.donts}</h4>
              <ul className="space-y-2">
                {result.dontsList.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-red-800">
                    <XCircle className="w-4 h-4 text-red-500 mt-0.5 flex-shrink-0" />
                    {isHindi ? item.hi : item.en}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
