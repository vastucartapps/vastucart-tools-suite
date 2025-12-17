'use client';

import { useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Wrench, Mail, Sparkles, AlertTriangle } from 'lucide-react';
import { SecretCouponCard } from '@/components/404/secret-coupon-card';

export default function NotFound() {
  const t = useTranslations('notFound');
  const pathname = usePathname();

  // Track 404 error via Google Analytics
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', '404_error', {
        page_path: pathname,
        page_referrer: document.referrer,
        page_title: '404 - Secret Coupon Found',
      });
    }
  }, [pathname]);

  // Get locale from pathname
  const locale = pathname?.split('/')[1] || 'en';

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-cream-50 to-white">
      {/* Logo */}
      <div className="mb-6 animate-fade-in">
        <Image
          src="/images/vastucart logo 404.png"
          alt="VastuCart"
          width={200}
          height={60}
          className="h-auto w-auto max-h-16"
          priority
        />
      </div>

      {/* Congratulations text */}
      <div className="text-center mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="w-6 h-6 text-warmaccent-500" />
          <span className="text-warmaccent-600 font-semibold text-lg">{t('congratulations')}</span>
          <Sparkles className="w-6 h-6 text-warmaccent-500" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
          {t('title')}
        </h1>
        <p className="text-gray-600 max-w-md">
          {t('subtitle')}
        </p>
        <p className="text-deepteal-600 font-medium mt-2">
          {t('butWait')}
        </p>
      </div>

      {/* Secret image */}
      <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
        <div className="relative">
          <Image
            src="/images/secret-404-found.webp"
            alt="Secret Found!"
            width={400}
            height={300}
            className="rounded-2xl shadow-elevation-3"
            priority
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      {/* Coupon Card */}
      <div className="w-full max-w-md mb-8 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <SecretCouponCard
          code={t('couponCode')}
          hint={t('couponHint')}
          copyText={t('copyButton')}
          copiedText={t('copied')}
          redeemAt={t('redeemAt')}
          title={t('couponTitle')}
        />
      </div>

      {/* Navigation buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
        <Link
          href={`/${locale}`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-deepteal-600 text-white rounded-xl font-medium hover:bg-deepteal-700 transition-colors shadow-elevation-2"
        >
          <Home className="w-5 h-5" />
          {t('goHome')}
        </Link>
        <Link
          href={`/${locale}/tools`}
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-deepteal-600 border-2 border-deepteal-200 rounded-xl font-medium hover:bg-deepteal-50 transition-colors"
        >
          <Wrench className="w-5 h-5" />
          {t('browseTools')}
        </Link>
        <a
          href="mailto:support@vastucart.in"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-600 border-2 border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
        >
          <Mail className="w-5 h-5" />
          {t('contact')}
        </a>
      </div>

      {/* Broken link info */}
      <div className="text-center text-sm text-gray-500 animate-fade-in" style={{ animationDelay: '0.5s' }}>
        <div className="flex items-center justify-center gap-2 mb-1">
          <AlertTriangle className="w-4 h-4" />
          <span>{t('brokenLink')}</span>
        </div>
        <div className="font-mono text-xs bg-gray-100 px-3 py-1 rounded-lg inline-block">
          {t('reportedUrl')}: <span className="text-gray-700">{pathname}</span>
        </div>
      </div>
    </div>
  );
}
