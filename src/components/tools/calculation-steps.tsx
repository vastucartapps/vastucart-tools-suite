'use client';

import { useState } from 'react';
import { ChevronDown, BookOpen } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface Step {
  step: number;
  title: string;
  calculation: string;
  result: string | number;
}

interface CalculationStepsProps {
  steps: Step[];
  showLabel: string;
  hideLabel: string;
  reference?: string;
  howWeCalculatedLabel?: string;
  referenceLabel?: string;
}

export function CalculationSteps({
  steps,
  showLabel,
  hideLabel,
  reference,
  howWeCalculatedLabel = 'How We Calculated This',
  referenceLabel = 'Reference',
}: CalculationStepsProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-teal-600 hover:text-teal-700 font-medium transition-colors"
      >
        <BookOpen className="w-5 h-5" />
        <span>{isOpen ? hideLabel : showLabel}</span>
        <ChevronDown
          className={cn(
            'w-4 h-4 transition-transform duration-300',
            isOpen && 'rotate-180'
          )}
        />
      </button>

      <div
        className={cn(
          'grid transition-all duration-300 ease-in-out',
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
        )}
      >
        <div className="overflow-hidden">
          <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
            <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <span className="text-lg">📊</span>
              {howWeCalculatedLabel}
            </h4>

            <div className="space-y-4">
              {steps.map((step) => (
                <div
                  key={step.step}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center text-sm">
                    {step.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 mb-1">
                      {step.title}
                    </p>
                    <div className="font-mono text-sm bg-white rounded-lg p-3 border border-gray-200 overflow-x-auto">
                      <span className="text-gray-600 whitespace-nowrap">{step.calculation}</span>
                      <span className="text-teal-600 font-semibold ml-2 whitespace-nowrap">
                        = {step.result}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {reference && (
              <p className="mt-4 pt-4 border-t border-gray-200 text-sm text-gray-500 flex items-center gap-2">
                <span>📚</span>
                <span>{referenceLabel}: {reference}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

interface LetterBreakdownProps {
  letters: Array<{ letter: string; value: number }>;
  total: number;
  letterValuesLabel?: string;
  totalSumLabel?: string;
}

export function LetterBreakdown({
  letters,
  total,
  letterValuesLabel = 'Letter Values',
  totalSumLabel = 'Total Sum',
}: LetterBreakdownProps) {
  return (
    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
      <h4 className="font-medium text-gray-900 mb-3">{letterValuesLabel}</h4>

      <div className="flex flex-wrap gap-2 mb-4">
        {letters.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-2 bg-white rounded-lg border border-gray-200 min-w-[48px]"
          >
            <span className="text-lg font-bold text-gray-900">{item.letter}</span>
            <span className="text-sm text-teal-600 font-medium">{item.value}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
        <span className="text-teal-700 font-medium">{totalSumLabel}:</span>
        <span className="text-xl font-bold text-teal-700">{total}</span>
      </div>
    </div>
  );
}

interface ReductionStepsProps {
  steps: number[];
  finalNumber: number;
  isMasterNumber: boolean;
  reductionStepsLabel?: string;
  masterNumberLabel?: string;
}

export function ReductionSteps({
  steps,
  finalNumber,
  isMasterNumber,
  reductionStepsLabel = 'Reduction Steps',
  masterNumberLabel = 'Master Number detected - not reduced further',
}: ReductionStepsProps) {
  if (steps.length <= 1) return null;

  return (
    <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
      <h4 className="font-medium text-gray-900 mb-3">{reductionStepsLabel}</h4>

      <div className="flex items-center gap-2 flex-wrap font-mono">
        {steps.map((num, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className={cn(
                'px-3 py-1 rounded-lg font-bold',
                index === steps.length - 1
                  ? isMasterNumber
                    ? 'bg-saffron-100 text-saffron-700'
                    : 'bg-teal-100 text-teal-700'
                  : 'bg-white text-gray-700 border border-gray-200'
              )}
            >
              {num}
            </span>
            {index < steps.length - 1 && (
              <span className="text-gray-400">→</span>
            )}
          </div>
        ))}
      </div>

      {isMasterNumber && (
        <p className="mt-3 text-sm text-saffron-600">
          ✨ {masterNumberLabel}
        </p>
      )}
    </div>
  );
}
