import type { Metadata } from 'next';
import { Suspense } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Noto_Sans, Noto_Sans_Devanagari } from 'next/font/google';
import { locales, type Locale } from '@/i18n/request';
// Direct JSON imports — intentionally NOT via getTranslations. See
// generateMetadata below for the root-cause explanation.
import enMessages from '@/i18n/messages/en.json';
import hiMessages from '@/i18n/messages/hi.json';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { NavigationProgress } from '@/components/layout/navigation-progress';
import { GoogleAnalyticsHead } from '@/components/analytics/google-analytics';
import { SameAsLinks } from '@/components/seo/json-ld';
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
  // Avoid emitting a render-blocking preload on every English page.
  // The stylesheet is still available — it's applied via `font-hindi` class
  // on <body> only when locale === 'hi'.
  preload: false,
});

// Generate metadata.
//
// CRITICAL: we read the translation JSON synchronously via a direct import
// instead of awaiting next-intl's getTranslations. Prior version awaited
// two async calls (params + getTranslations), which made Next.js flush the
// HTML shell and close <head> before the metadata promise resolved. The
// <title>, <meta description> and <link canonical> then got React-streamed
// into <body> via $RC hydration — invisible to Mangools, Ahrefs, and every
// non-JS crawler, and delayed for Google's first-pass indexer.
//
// By importing the JSON directly the metadata body is synchronous (only
// `await params` remains, which resolves in a microtask), so Next.js can
// populate <head> before the shell flushes. Do NOT reintroduce
// getTranslations here unless you can prove the head-injection order is
// still correct on the deployed HTML.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = locale === 'hi' ? hiMessages : enMessages;
  const meta = messages.metadata;

  return {
    title: {
      default: meta.title,
      template: '%s | VastuCart',
    },
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: 'VastuCart' }],
    creator: 'VastuCart',
    publisher: 'VastuCart',
    metadataBase: new URL('https://www.vastucart.in'),
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: locale === 'en' ? 'https://www.vastucart.in' : `https://www.vastucart.in/${locale}`,
      siteName: 'VastuCart',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
    // Directives placed on the generic robots tag (not nested under
    // googleBot) so Bing and other engines that recognize max-snippet /
    // max-image-preview also pick them up. Pages can still override.
    robots: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
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
      {/* No explicit <head> — Next.js generates one and injects metadata
          from generateMetadata there. With a hardcoded <head>, Next closes
          it before async generateMetadata resolves, so the <title>/<meta>
          get hoisted into <body> via React streaming and non-JS crawlers
          (Mangools, Ahrefs, basic curl scrapers) read them as missing.
          Google's second-pass renderer still finds them, but first-pass
          indexation takes the hit.

          GA4 was previously loaded via the next/script-based
          <GoogleAnalytics/> component with strategy="beforeInteractive".
          That works in the ROOT layout but Next.js 15 silently demotes
          beforeInteractive in nested layouts (this file is /[locale]/
          layout.tsx, not /app/layout.tsx) — the inline gtag('config')
          script never renders as an executable <script> element, so
          gtag.js loads but never initializes, /g/collect never fires,
          and GA4's own tag-detection reports "tag not detected." Switching
          to GoogleAnalyticsHead, which emits raw <script async src> +
          <script dangerouslySetInnerHTML> tags, bypasses next/script
          entirely. These render as real HTML script elements and follow
          standard browser parsing/execution rules — works in any layout
          depth. */}
      <body
        className={cn(
          'min-h-screen flex flex-col',
          locale === 'hi' && 'font-hindi'
        )}
        suppressHydrationWarning
      >
        <GoogleAnalyticsHead />
        <NextIntlClientProvider messages={messages}>
          {/* Navigation progress indicator */}
          <Suspense fallback={null}>
            <NavigationProgress />
          </Suspense>

          {/* Skip to main content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-deepteal-600 focus:text-white focus:rounded-lg"
          >
            Skip to main content
          </a>

          <Header />

          <main id="main-content" className="flex-1">
            {children}
          </main>

          <Footer />

          {/* Cross-domain authority links for SEO */}
          <SameAsLinks />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
