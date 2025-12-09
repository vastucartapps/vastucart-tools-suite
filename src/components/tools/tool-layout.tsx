'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

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
    numerology: 'from-teal-500 to-teal-600',
    astrology: 'from-saffron-500 to-saffron-600',
    vastu: 'from-saffron-600 to-teal-600',
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
              className="flex items-center gap-1 hover:text-teal-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li>
            <Link
              href={`/${locale}/tools`}
              className="hover:text-teal-600 transition-colors"
            >
              Tools
            </Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li>
            <Link
              href={`/${locale}/tools?category=${category}`}
              className="hover:text-teal-600 transition-colors"
            >
              {categoryLabel}
            </Link>
          </li>
          <ChevronRight className="w-4 h-4" />
          <li className="text-gray-900 font-medium truncate">{title}</li>
        </ol>
      </nav>

      {/* Tool Header */}
      <header className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div
          className={cn(
            'inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6',
            'bg-gradient-to-br shadow-lg',
            categoryColors[category]
          )}
        >
          <div className="text-white text-4xl">{icon}</div>
        </div>

        <div className="flex items-center justify-center gap-3 mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            {title}
          </h1>
          {isPremium && (
            <span className="badge-pro text-xs">PRO</span>
          )}
        </div>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {description}
        </p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 pb-16">{children}</main>
    </div>
  );
}
