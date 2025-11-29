import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

// Supported locales
export const locales = ['en', 'hi'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

// Locale labels for UI
export const localeLabels: Record<Locale, string> = {
  en: 'English',
  hi: 'हिन्दी',
};

// Locale configurations
export const localeConfig: Record<Locale, { dir: 'ltr' | 'rtl'; lang: string }> = {
  en: { dir: 'ltr', lang: 'en-IN' },
  hi: { dir: 'ltr', lang: 'hi-IN' },
};

export default getRequestConfig(async ({ requestLocale }) => {
  // Await the locale from the request
  const locale = await requestLocale;

  // Validate that the incoming locale is valid
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./messages/${locale}.json`)).default,
    timeZone: 'Asia/Kolkata',
    now: new Date(),
  };
});
