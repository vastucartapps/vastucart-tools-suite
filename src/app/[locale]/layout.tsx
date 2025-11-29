import type { Metadata } from 'next';
import { Suspense } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Noto_Sans, Noto_Sans_Devanagari } from 'next/font/google';
import { locales, type Locale } from '@/i18n/request';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { NavigationProgress } from '@/components/layout/navigation-progress';
import { cn } from '@/lib/utils/cn';

// Font configuration
const notoSans = Noto_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans',
  display: 'swap',
});

const notoSansDevanagari = Noto_Sans_Devanagari({
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto-sans-devanagari',
  display: 'swap',
});

// Generate metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      default: t('title'),
      template: '%s | VastuTools',
    },
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'VastuTools' }],
    creator: 'VastuTools',
    publisher: 'VastuTools',
    metadataBase: new URL('https://vastutools.com'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        hi: '/hi',
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: `https://vastutools.com/${locale}`,
      siteName: 'VastuTools',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

// Generate static params for all locales
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Validate locale
  if (!locales.includes(locale as Locale)) {
    notFound();
  }

  // Get messages for the current locale
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={cn(notoSans.variable, notoSansDevanagari.variable)}
      suppressHydrationWarning
    >
      <body
        className={cn(
          'min-h-screen flex flex-col',
          locale === 'hi' && 'font-hindi'
        )}
        suppressHydrationWarning
      >
        <NextIntlClientProvider messages={messages}>
          {/* Navigation progress indicator */}
          <Suspense fallback={null}>
            <NavigationProgress />
          </Suspense>

          {/* Skip to main content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-teal-600 focus:text-white focus:rounded-lg"
          >
            Skip to main content
          </a>

          <Header />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
