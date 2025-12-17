'use client';

import { ReactNode, memo } from 'react';
import { cn } from '@/lib/utils/cn';

interface NumberDisplayProps {
  number: number;
  label: string;
  isMasterNumber?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showRing?: boolean;
}

export const NumberDisplay = memo(function NumberDisplay({
  number,
  label,
  isMasterNumber = false,
  size = 'lg',
  showRing = true,
}: NumberDisplayProps) {
  const sizes = {
    sm: { container: 'w-16 h-16', text: 'text-2xl', ring: 'w-20 h-20' },
    md: { container: 'w-20 h-20', text: 'text-3xl', ring: 'w-24 h-24' },
    lg: { container: 'w-28 h-28', text: 'text-5xl', ring: 'w-32 h-32' },
  };

  const sizeConfig = sizes[size];

  return (
    <div className="flex flex-col items-center gap-4 animate-scale-in">
      {/* Number circle with optional decorative ring */}
      <div className="relative">
        {/* Decorative outer ring */}
        {showRing && (
          <div
            className={cn(
              'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
              sizeConfig.ring,
              'rounded-full border-2 border-dashed opacity-30 animate-spin-slow',
              isMasterNumber ? 'border-warmaccent-400' : 'border-deepteal-400'
            )}
          />
        )}

        {/* Main number circle */}
        <div
          className={cn(
            'relative rounded-full flex items-center justify-center font-bold',
            'transition-transform duration-200 hover:scale-105',
            sizeConfig.container,
            sizeConfig.text,
            isMasterNumber
              ? 'bg-gradient-to-br from-warmaccent-400 via-warmaccent-500 to-warmaccent-600 text-white shadow-glow-warmaccent-lg'
              : 'bg-gradient-to-br from-deepteal-400 via-deepteal-500 to-deepteal-700 text-white shadow-glow-deepteal-lg'
          )}
        >
          {/* Inner highlight overlay */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-transparent to-white/20" />

          {/* The number */}
          <span className="relative z-10">{number}</span>
        </div>
      </div>

      {/* Label */}
      <div className="text-center">
        <span className="text-lg font-semibold text-gray-800">{label}</span>
        {isMasterNumber && (
          <div className="mt-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-gradient-to-r from-warmaccent-100 to-warmaccent-50 text-warmaccent-700 rounded-full text-sm font-medium border border-warmaccent-200">
              <span className="text-warmaccent-500">&#10022;</span>
              Master Number
            </span>
          </div>
        )}
      </div>
    </div>
  );
});

interface ResultCardProps {
  title: string;
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'highlight' | 'positive' | 'negative';
  icon?: ReactNode;
  delay?: number;
}

export const ResultCard = memo(function ResultCard({
  title,
  children,
  className,
  variant = 'default',
  icon,
  delay = 0,
}: ResultCardProps) {
  const variants = {
    default: 'bg-white shadow-elevation-2',
    highlight: 'bg-gradient-to-br from-white to-deepteal-50/50 shadow-elevation-3 border border-deepteal-100',
    positive: 'bg-gradient-to-br from-white to-green-50/50 shadow-elevation-2 border border-green-100',
    negative: 'bg-gradient-to-br from-white to-red-50/30 shadow-elevation-2 border border-red-100',
  };

  const iconColors = {
    default: 'text-deepteal-600',
    highlight: 'text-deepteal-600',
    positive: 'text-green-600',
    negative: 'text-red-500',
  };

  return (
    <div
      className={cn(
        'rounded-2xl p-6 animate-fade-in-up',
        variants[variant],
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon && (
          <span className={cn('text-xl', iconColors[variant])}>{icon}</span>
        )}
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      </div>
      {children}
    </div>
  );
});

interface TraitListProps {
  title?: string;
  traits: string[];
  type?: 'positive' | 'negative' | 'neutral';
}

export const TraitList = memo(function TraitList({ title, traits, type = 'neutral' }: TraitListProps) {
  const colors = {
    positive: {
      bg: 'bg-green-50',
      text: 'text-green-700',
      border: 'border-green-200',
      indicator: '+',
    },
    negative: {
      bg: 'bg-red-50',
      text: 'text-red-700',
      border: 'border-red-200',
      indicator: '-',
    },
    neutral: {
      bg: 'bg-gray-50',
      text: 'text-gray-700',
      border: 'border-gray-200',
      indicator: null,
    },
  };

  const style = colors[type];

  return (
    <div>
      {title && (
        <h4 className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wide">
          {title}
        </h4>
      )}
      <div className="flex flex-wrap gap-2">
        {traits.map((trait, index) => (
          <span
            key={index}
            className={cn(
              'inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium',
              'border transition-all duration-200',
              'hover:shadow-sm hover:-translate-y-0.5',
              style.bg,
              style.text,
              style.border
            )}
          >
            {style.indicator && (
              <span className="font-bold text-xs">{style.indicator}</span>
            )}
            {trait}
          </span>
        ))}
      </div>
    </div>
  );
});

interface CompatibilityBadgesProps {
  numbers: number[];
  label?: string;
}

export const CompatibilityBadges = memo(function CompatibilityBadges({ numbers, label }: CompatibilityBadgesProps) {
  return (
    <div>
      {label && (
        <h4 className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wide">
          {label}
        </h4>
      )}
      <div className="flex flex-wrap gap-2">
        {numbers.map((num) => (
          <span
            key={num}
            className={cn(
              'w-10 h-10 rounded-full font-bold flex items-center justify-center',
              'bg-gradient-to-br from-deepteal-50 to-deepteal-100 text-deepteal-700',
              'border border-deepteal-200 shadow-sm',
              'transition-all duration-200 hover:shadow-md hover:-translate-y-0.5'
            )}
          >
            {num}
          </span>
        ))}
      </div>
    </div>
  );
});

interface CelebrityListProps {
  celebrities: Array<{ name: string; profession?: string }>;
  label?: string;
}

export const CelebrityList = memo(function CelebrityList({ celebrities, label }: CelebrityListProps) {
  return (
    <div>
      {label && (
        <h4 className="text-sm font-medium text-gray-600 mb-3 uppercase tracking-wide">
          {label}
        </h4>
      )}
      <div className="flex flex-wrap gap-2">
        {celebrities.map((celeb, index) => (
          <span
            key={index}
            className={cn(
              'inline-flex items-center px-3 py-1.5 rounded-full text-sm',
              'bg-gradient-to-r from-warmaccent-50 to-warmaccent-100 text-warmaccent-800',
              'border border-warmaccent-200',
              'transition-all duration-200 hover:shadow-sm hover:-translate-y-0.5'
            )}
          >
            <span className="font-medium">{celeb.name}</span>
            {celeb.profession && (
              <span className="text-warmaccent-600 ml-1.5 text-xs">({celeb.profession})</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
});
