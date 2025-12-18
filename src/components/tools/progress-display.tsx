'use client';

import { memo } from 'react';
import { cn } from '@/lib/utils/cn';
import { Check } from 'lucide-react';

/**
 * CompatibilityBar - Horizontal progress bar for scores
 */
interface CompatibilityBarProps {
  score: number;
  maxScore: number;
  label: string;
  showPercentage?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const CompatibilityBar = memo(function CompatibilityBar({
  score,
  maxScore,
  label,
  showPercentage = false,
  size = 'md',
}: CompatibilityBarProps) {
  const percentage = Math.min((score / maxScore) * 100, 100);

  const getColor = () => {
    if (percentage >= 70) return 'from-green-400 to-green-500';
    if (percentage >= 40) return 'from-yellow-400 to-yellow-500';
    return 'from-red-400 to-red-500';
  };

  const getTextColor = () => {
    if (percentage >= 70) return 'text-green-600';
    if (percentage >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const heights = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4',
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center text-sm">
        <span className="font-medium text-gray-700">{label}</span>
        <span className={cn('font-bold', getTextColor())}>
          {score}/{maxScore}
          {showPercentage && (
            <span className="text-gray-500 font-normal ml-1">
              ({Math.round(percentage)}%)
            </span>
          )}
        </span>
      </div>
      <div className={cn('bg-gray-100 rounded-full overflow-hidden', heights[size])}>
        <div
          className={cn(
            'h-full bg-gradient-to-r rounded-full',
            'transition-all duration-1000 ease-out',
            getColor()
          )}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
});

/**
 * ScoreMeter - Circular progress indicator
 */
interface ScoreMeterProps {
  value: number;
  max: number;
  size?: 'sm' | 'md' | 'lg';
  color?: 'deepteal' | 'warmaccent' | 'auto';
  label?: string;
  showValue?: boolean;
}

export const ScoreMeter = memo(function ScoreMeter({
  value,
  max,
  size = 'md',
  color = 'auto',
  label,
  showValue = true,
}: ScoreMeterProps) {
  const percentage = Math.min((value / max) * 100, 100);

  const getColor = () => {
    if (color !== 'auto') {
      return color === 'deepteal' ? 'stroke-deepteal-500' : 'stroke-warmaccent-500';
    }
    if (percentage >= 70) return 'stroke-green-500';
    if (percentage >= 40) return 'stroke-yellow-500';
    return 'stroke-red-500';
  };

  const getTextColor = () => {
    if (color !== 'auto') {
      return color === 'deepteal' ? 'text-deepteal-600' : 'text-warmaccent-600';
    }
    if (percentage >= 70) return 'text-green-600';
    if (percentage >= 40) return 'text-yellow-600';
    return 'text-red-600';
  };

  const sizes = {
    sm: { container: 'w-16 h-16', text: 'text-lg', stroke: 4, radius: 26 },
    md: { container: 'w-24 h-24', text: 'text-2xl', stroke: 5, radius: 40 },
    lg: { container: 'w-32 h-32', text: 'text-3xl', stroke: 6, radius: 54 },
  };

  const config = sizes[size];
  const circumference = 2 * Math.PI * config.radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-2 overflow-hidden">
      <div className={cn('relative flex-shrink-0', config.container)} style={{ willChange: 'transform' }}>
        <svg
          className="w-full h-full -rotate-90 max-w-full"
          viewBox={`0 0 ${(config.radius + config.stroke) * 2} ${(config.radius + config.stroke) * 2}`}
          style={{ transform: 'translateZ(0)' }}
        >
          {/* Background circle */}
          <circle
            cx={config.radius + config.stroke}
            cy={config.radius + config.stroke}
            r={config.radius}
            fill="none"
            stroke="currentColor"
            strokeWidth={config.stroke}
            className="text-gray-100"
          />
          {/* Progress circle */}
          <circle
            cx={config.radius + config.stroke}
            cy={config.radius + config.stroke}
            r={config.radius}
            fill="none"
            strokeWidth={config.stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={cn('transition-[stroke-dashoffset] duration-1000 ease-out', getColor())}
            style={{ transformOrigin: 'center', willChange: 'stroke-dashoffset' }}
          />
        </svg>
        {/* Center text */}
        {showValue && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={cn('font-bold', config.text, getTextColor())}>
              {value}
            </span>
          </div>
        )}
      </div>
      {label && (
        <span className="text-sm font-medium text-gray-600 text-center">
          {label}
        </span>
      )}
    </div>
  );
});

/**
 * StepProgress - Timeline visualization for steps
 */
interface Step {
  title: string;
  description?: string;
  status: 'complete' | 'current' | 'pending';
}

interface StepProgressProps {
  steps: Step[];
  size?: 'sm' | 'md';
}

export const StepProgress = memo(function StepProgress({
  steps,
  size = 'md',
}: StepProgressProps) {
  const sizes = {
    sm: { circle: 'w-6 h-6', text: 'text-xs', icon: 'w-3 h-3' },
    md: { circle: 'w-8 h-8', text: 'text-sm', icon: 'w-4 h-4' },
  };

  const config = sizes[size];

  return (
    <div className="relative">
      {steps.map((step, index) => {
        const isLast = index === steps.length - 1;

        return (
          <div key={index} className="relative flex gap-4">
            {/* Vertical line */}
            {!isLast && (
              <div
                className={cn(
                  'absolute left-4 top-8 w-0.5 h-full -ml-px',
                  step.status === 'complete'
                    ? 'bg-deepteal-300'
                    : 'bg-gray-200'
                )}
              />
            )}

            {/* Step indicator */}
            <div className="relative z-10">
              <div
                className={cn(
                  'rounded-full flex items-center justify-center font-bold',
                  config.circle,
                  config.text,
                  step.status === 'complete'
                    ? 'bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white shadow-glow-deepteal'
                    : step.status === 'current'
                    ? 'bg-deepteal-100 text-deepteal-700 border-2 border-deepteal-400'
                    : 'bg-gray-100 text-gray-400 border-2 border-gray-200'
                )}
              >
                {step.status === 'complete' ? (
                  <Check className={config.icon} />
                ) : (
                  index + 1
                )}
              </div>
            </div>

            {/* Step content */}
            <div className={cn('pb-6', isLast && 'pb-0')}>
              <p
                className={cn(
                  'font-semibold',
                  step.status === 'pending' ? 'text-gray-400' : 'text-gray-900'
                )}
              >
                {step.title}
              </p>
              {step.description && (
                <p
                  className={cn(
                    'text-sm mt-1',
                    step.status === 'pending' ? 'text-gray-400' : 'text-gray-600'
                  )}
                >
                  {step.description}
                </p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
});

/**
 * ProgressRing - Simple ring indicator (smaller alternative to ScoreMeter)
 */
interface ProgressRingProps {
  value: number;
  max: number;
  size?: number;
  strokeWidth?: number;
  color?: 'deepteal' | 'warmaccent' | 'green' | 'red';
}

export const ProgressRing = memo(function ProgressRing({
  value,
  max,
  size = 40,
  strokeWidth = 4,
  color = 'deepteal',
}: ProgressRingProps) {
  const percentage = Math.min((value / max) * 100, 100);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const colors = {
    deepteal: 'stroke-deepteal-500',
    warmaccent: 'stroke-warmaccent-500',
    green: 'stroke-green-500',
    red: 'stroke-red-500',
  };

  return (
    <svg
      width={size}
      height={size}
      className="-rotate-90"
      viewBox={`0 0 ${size} ${size}`}
    >
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        className="text-gray-100"
      />
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        className={cn('transition-all duration-700 ease-out', colors[color])}
      />
    </svg>
  );
});
