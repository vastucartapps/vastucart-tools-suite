'use client';

import { forwardRef, ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

export interface SectionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  subtitle?: string;
  icon?: ReactNode;
  watermark?: boolean;
  accentBorder?: 'gradient' | 'deepteal' | 'warmaccent' | 'none';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

/**
 * SectionCard - Elegant card with accent top border for secondary sections
 *
 * Features:
 * - White to cream gradient background
 * - 4px top border (deepteal → warmaccent gradient by default)
 * - Optional mandala watermark
 * - Clean, professional appearance
 */
const SectionCard = forwardRef<HTMLDivElement, SectionCardProps>(
  (
    {
      className,
      title,
      subtitle,
      icon,
      watermark = true,
      accentBorder = 'gradient',
      padding = 'md',
      children,
      ...props
    },
    ref
  ) => {
    const paddings = {
      none: 'p-0',
      sm: 'p-4',
      md: 'p-6',
      lg: 'p-8',
    };

    const borderStyles = {
      gradient: 'accent-border-gradient',
      deepteal: 'accent-border-deepteal',
      warmaccent: 'accent-border-warmaccent',
      none: '',
    };

    return (
      <div
        ref={ref}
        className={cn(
          // Base structure
          'relative overflow-hidden rounded-2xl',
          // Background gradient
          'bg-gradient-to-b from-white to-cream-50',
          // Shadow
          'shadow-elevation-2',
          // Accent border
          borderStyles[accentBorder],
          // Padding
          paddings[padding],
          className
        )}
        {...props}
      >
        {/* Watermark pattern overlay */}
        {watermark && (
          <div
            className="absolute inset-0 pointer-events-none watermark-mandala-light"
            aria-hidden="true"
          />
        )}

        {/* Content container */}
        <div className="relative z-10">
          {/* Header section */}
          {(title || subtitle || icon) && (
            <div className="mb-4">
              <div className="flex items-center gap-3">
                {icon && (
                  <div className="p-2 bg-deepteal-50 rounded-lg text-deepteal-600">
                    {icon}
                  </div>
                )}
                <div>
                  {title && (
                    <h3 className="text-lg font-semibold text-gray-900">
                      {title}
                    </h3>
                  )}
                  {subtitle && (
                    <p className="text-sm text-gray-600">
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Main content */}
          {children}
        </div>
      </div>
    );
  }
);

SectionCard.displayName = 'SectionCard';

/**
 * SectionInfoRow - Info row with label and value for use inside SectionCard
 */
export interface SectionInfoRowProps extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  value: string | ReactNode;
  highlight?: boolean;
}

const SectionInfoRow = forwardRef<HTMLDivElement, SectionInfoRowProps>(
  ({ className, label, value, highlight = false, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          'flex justify-between items-center py-2',
          'border-b border-gray-100 last:border-0',
          highlight && 'bg-deepteal-50/50 -mx-2 px-2 rounded',
          className
        )}
        {...props}
      >
        <span className="text-gray-600 text-sm">{label}</span>
        <span className={cn(
          'font-medium',
          highlight ? 'text-deepteal-700' : 'text-gray-900'
        )}>
          {value}
        </span>
      </div>
    );
  }
);

SectionInfoRow.displayName = 'SectionInfoRow';

/**
 * SectionDivider - Visual separator for sections
 */
export interface SectionDividerProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}

const SectionDivider = forwardRef<HTMLDivElement, SectionDividerProps>(
  ({ className, label, ...props }, ref) => {
    if (label) {
      return (
        <div
          ref={ref}
          className={cn('flex items-center gap-4 my-4', className)}
          {...props}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-gray-200" />
          <span className="text-xs text-gray-500 uppercase tracking-wide">{label}</span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-gray-200" />
        </div>
      );
    }

    return (
      <div
        ref={ref}
        className={cn('h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-4', className)}
        {...props}
      />
    );
  }
);

SectionDivider.displayName = 'SectionDivider';

export { SectionCard, SectionInfoRow, SectionDivider };
