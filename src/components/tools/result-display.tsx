'use client';

import { ReactNode, memo } from 'react';
import { cn } from '@/lib/utils/cn';

interface NumberDisplayProps {
  number: number;
  label: string;
  isMasterNumber?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const NumberDisplay = memo(function NumberDisplay({
  number,
  label,
  isMasterNumber = false,
  size = 'lg',
}: NumberDisplayProps) {
  const sizes = {
    sm: 'w-16 h-16 text-2xl',
    md: 'w-20 h-20 text-3xl',
    lg: 'w-28 h-28 text-5xl',
  };

  return (
    <div className="flex flex-col items-center gap-3 animate-scale-in">
      <div
        className={cn(
          'rounded-full flex items-center justify-center font-bold',
          'shadow-glow-teal',
          sizes[size],
          isMasterNumber
            ? 'bg-gradient-to-br from-saffron-500 to-saffron-600 text-white shadow-glow-saffron'
            : 'bg-gradient-to-br from-teal-500 to-teal-700 text-white'
        )}
      >
        {number}
      </div>
      <span className="text-gray-600 font-medium">{label}</span>
      {isMasterNumber && (
        <span className="badge-saffron text-xs">Master Number</span>
      )}
    </div>
  );
});

interface ResultCardProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const ResultCard = memo(function ResultCard({ title, children, className }: ResultCardProps) {
  return (
    <div
      className={cn('bg-white rounded-2xl shadow-card p-6 animate-fade-in-up', className)}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      {children}
    </div>
  );
});

interface TraitListProps {
  title: string;
  traits: string[];
  type?: 'positive' | 'negative' | 'neutral';
}

export const TraitList = memo(function TraitList({ title, traits, type = 'neutral' }: TraitListProps) {
  const colors = {
    positive: 'bg-green-100 text-green-800',
    negative: 'bg-red-100 text-red-800',
    neutral: 'bg-gray-100 text-gray-800',
  };

  return (
    <div>
      {title && <h4 className="text-sm font-medium text-gray-700 mb-2">{title}</h4>}
      <div className="flex flex-wrap gap-2">
        {traits.map((trait, index) => (
          <span
            key={index}
            className={cn(
              'px-3 py-1 rounded-full text-sm font-medium',
              colors[type]
            )}
          >
            {trait}
          </span>
        ))}
      </div>
    </div>
  );
});

interface CompatibilityBadgesProps {
  numbers: number[];
  label: string;
}

export const CompatibilityBadges = memo(function CompatibilityBadges({ numbers, label }: CompatibilityBadgesProps) {
  return (
    <div>
      {label && <h4 className="text-sm font-medium text-gray-700 mb-2">{label}</h4>}
      <div className="flex gap-2">
        {numbers.map((num) => (
          <span
            key={num}
            className="w-10 h-10 rounded-full bg-teal-100 text-teal-700 font-bold flex items-center justify-center"
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
  label: string;
}

export const CelebrityList = memo(function CelebrityList({ celebrities, label }: CelebrityListProps) {
  return (
    <div>
      {label && <h4 className="text-sm font-medium text-gray-700 mb-2">{label}</h4>}
      <div className="flex flex-wrap gap-2">
        {celebrities.map((celeb, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-saffron-100 text-saffron-800 rounded-full text-sm"
          >
            {celeb.name}
            {celeb.profession && (
              <span className="text-saffron-600 ml-1">({celeb.profession})</span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
});
