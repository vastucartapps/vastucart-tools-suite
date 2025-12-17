'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils/cn';
import { LegalDisclaimer } from './legal-disclaimer';

interface ToolLayoutProps {
  title: string;
  description: string;
  icon: ReactNode;
  category: 'numerology' | 'astrology' | 'vastu' | 'muhurat';
  categoryLabel: string;
  children: ReactNode;
  isPremium?: boolean;
}

export function ToolLayout({
  title,
  description,
  icon,
  category,
  categoryLabel,
  children,
  isPremium = false,
}: ToolLayoutProps) {
  const locale = useLocale();

  const categoryColors = {
    numerology: 'from-deepteal-500 to-deepteal-600',
    astrology: 'from-warmaccent-500 to-warmaccent-600',
    vastu: 'from-warmaccent-600 to-deepteal-600',
    muhurat: 'from-amber-500 to-amber-600',
  };

  return (
    <div className="min-h-screen bg-cream-50 pattern-zodiac">
      {/* Breadcrumbs */}
      <nav className="max-w-4xl mx-auto px-4 pt-6">
        <ol className="flex items-center gap-2 text-sm text-gray-500">
          <li>
            <Link
              href={`/${locale}`}
              className="flex items-center gap-1 hover:text-deepteal-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li>
            <Link
              href={`/${locale}/tools`}
              className="hover:text-deepteal-600 transition-colors"
            >
              Tools
            </Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li>
            <Link
              href={`/${locale}/tools?category=${category}`}
              className="hover:text-deepteal-600 transition-colors"
            >
              {categoryLabel}
            </Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li className="text-gray-900 font-medium truncate">{title}</li>
        </ol>
      </nav>

      {/* Tool Header */}
      <header className="max-w-4xl mx-auto px-4 py-12 text-center">
        {/* Category Badge */}
        <div className="mb-6">
          <span
            className={cn(
              'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium',
              'bg-gradient-to-r text-white shadow-sm',
              categoryColors[category]
            )}
          >
            {categoryLabel}
          </span>
        </div>

        {/* Icon with glow effect */}
        <div className="relative inline-block mb-8">
          {/* Glow effect */}
          <div
            className={cn(
              'absolute inset-0 rounded-3xl blur-xl opacity-30',
              `bg-gradient-to-br ${categoryColors[category]}`
            )}
          />

          <div
            className={cn(
              'relative w-24 h-24 rounded-3xl flex items-center justify-center',
              'bg-gradient-to-br shadow-elevation-4',
              categoryColors[category]
            )}
          >
            <div className="text-white text-5xl">{icon}</div>
          </div>
        </div>

        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <h1 className="text-heading-1 md:text-display-2 font-bold text-gray-900 tracking-tight">
            {title}
          </h1>
          {isPremium && (
            <span className="badge-pro text-xs px-3 py-1">PRO</span>
          )}
        </div>

        {/* Description */}
        <p className="text-body-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-16">
        {children}

        {/* Legal Disclaimer */}
        <LegalDisclaimer locale={locale as 'en' | 'hi'} />
      </main>
    </div>
  );
}
