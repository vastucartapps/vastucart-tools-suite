'use client';

import { forwardRef } from 'react';
import { cn } from '@/lib/utils/cn';
import { Loader2 } from 'lucide-react';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'warmaccent' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      leftIcon,
      rightIcon,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

    const variants = {
      primary:
        'bg-gradient-to-r from-deepteal-600 to-deepteal-700 text-white shadow-elevation-2 hover:shadow-glow-deepteal-lg hover:from-deepteal-700 hover:to-deepteal-800 hover:brightness-105 focus:ring-deepteal-500 active:scale-[0.98]',
      secondary:
        'bg-white text-deepteal-700 border-2 border-deepteal-200 hover:bg-deepteal-50 hover:border-deepteal-400 hover:shadow-sm focus:ring-deepteal-500 active:scale-[0.98]',
      warmaccent:
        'bg-gradient-to-r from-warmaccent-500 to-warmaccent-600 text-white shadow-elevation-2 hover:shadow-glow-warmaccent-lg hover:from-warmaccent-600 hover:to-warmaccent-700 hover:brightness-105 focus:ring-warmaccent-500 active:scale-[0.98]',
      ghost:
        'bg-transparent text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:ring-gray-500 active:scale-[0.98]',
      link: 'bg-transparent text-deepteal-600 hover:text-deepteal-700 underline-offset-4 hover:underline focus:ring-deepteal-500 p-0',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm gap-1.5',
      md: 'px-4 py-2.5 text-base gap-2',
      lg: 'px-6 py-3 text-lg gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={cn(
          baseStyles,
          variants[variant],
          variant !== 'link' && sizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <Loader2 className="w-4 h-4 animate-spin" />
        ) : (
          leftIcon
        )}
        {children}
        {!isLoading && rightIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';

export { Button };
