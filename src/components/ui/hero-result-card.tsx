'use client';

import { forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

export interface HeroResultCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  watermark?: boolean;
  colorScheme?: 'deepteal' | 'warmaccent';
}

/**
 * HeroResultCard - Premium gradient card for main tool results
 *
 * Features:
 * - Dark gradient background (deepteal default, warmaccent for auspicious results)
 * - Glassmorphism inner panels
 * - Glow shadow matching color scheme
 * - Optional mandala watermark
 *
 * Use colorScheme="warmaccent" for positive/auspicious results
 */
const HeroResultCard = forwardRef<HTMLDivElement, HeroResultCardProps>(
  ({ className, title, subtitle, icon, watermark = true, colorScheme = 'deepteal', children, ...props }, ref) => {
    const colorStyles = {
      deepteal: {
        gradient: 'bg-gradient-to-br from-deepteal-700 via-deepteal-800 to-deepteal-900',
        glow: 'shadow-glow-deepteal-lg',
        subtitleColor: 'text-deepteal-200',
      },
      warmaccent: {
        gradient: 'bg-gradient-to-br from-warmaccent-600 via-warmaccent-700 to-warmaccent-800',
        glow: 'shadow-glow-warmaccent-lg',
        subtitleColor: 'text-warmaccent-200',
      },
    };

    const colors = colorStyles[colorScheme];

    return (
      <div
        ref={ref}
        className={cn(
          // Base structure
          'relative overflow-hidden rounded-2xl',
          // Dynamic gradient background
          colors.gradient,
          // Glow shadow
          'shadow-elevation-4',
          colors.glow,
          className
        )}
        {...props}
      >
        {/* Watermark pattern overlay */}
        {watermark && (
          <div
            className="absolute inset-0 pointer-events-none watermark-mandala"
            aria-hidden="true"
          />
        )}

        {/* Content container */}
        <div className="relative z-10 p-6">
          {/* Header section */}
          {(title || subtitle || icon) && (
            <div className="text-center mb-6">
              {icon && (
                <div className="flex justify-center mb-3">
                  <div className="p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 text-white">
                    {icon}
                  </div>
                </div>
              )}
              {title && (
                <h2 className="text-2xl font-bold text-white mb-1">
                  {title}
                </h2>
              )}
              {subtitle && (
                <p className={cn('text-sm', colors.subtitleColor)}>
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Main content */}
          {children}
        </div>
      </div>
    );
  }
);

HeroResultCard.displayName = 'HeroResultCard';

/**
 * HeroGlassPanel - Glassmorphism panel for use inside HeroResultCard
 */
export interface HeroGlassPanelProps extends React.HTMLAttributes<HTMLDivElement> {}

const HeroGlassPanel = forwardRef<HTMLDivElement, HeroGlassPanelProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'bg-white/10 backdrop-blur-md rounded-xl p-4',
          'border border-white/20',
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

HeroGlassPanel.displayName = 'HeroGlassPanel';

/**
 * HeroStatCard - Small stat display for use inside HeroResultCard
 */
export interface HeroStatCardProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | ReactNode;
  subValue?: string;
  colorScheme?: 'deepteal' | 'warmaccent';
}

const HeroStatCard = forwardRef<HTMLDivElement, HeroStatCardProps>(
  ({ className, label, value, subValue, colorScheme = 'deepteal', ...props }, ref) => {
    const colorStyles = {
      deepteal: {
        labelColor: 'text-deepteal-200',
        subValueColor: 'text-deepteal-300',
      },
      warmaccent: {
        labelColor: 'text-warmaccent-200',
        subValueColor: 'text-warmaccent-300',
      },
    };

    const colors = colorStyles[colorScheme];

    return (
      <div
        ref={ref}
        className={cn(
          'bg-white/15 backdrop-blur-sm rounded-xl p-4 text-center',
          'border border-white/20',
          className
        )}
        {...props}
      >
        <p className={cn('text-xs uppercase tracking-wide mb-1', colors.labelColor)}>
          {label}
        </p>
        <div className="text-white font-bold text-lg">
          {value}
        </div>
        {subValue && (
          <p className={cn('text-xs mt-1', colors.subValueColor)}>
            {subValue}
          </p>
        )}
      </div>
    );
  }
);

HeroStatCard.displayName = 'HeroStatCard';

export { HeroResultCard, HeroGlassPanel, HeroStatCard };
