import { getRequestConfig } from 'next-intl/server';
import type { AbstractIntlMessages } from 'next-intl';
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

type RawMessages = Record<string, unknown>;

// Recursively merge base (en) under override (hi) so missing Hindi keys
// fall back to English rather than rendering raw key paths.
function deepMerge(base: RawMessages, override: RawMessages): RawMessages {
  const result: RawMessages = { ...base };
  for (const key of Object.keys(override)) {
    const b = base[key];
    const o = override[key];
    if (
      o !== null && typeof o === 'object' && !Array.isArray(o) &&
      b !== null && typeof b === 'object' && !Array.isArray(b)
    ) {
      result[key] = deepMerge(b as RawMessages, o as RawMessages);
    } else {
      result[key] = o;
    }
  }
  return result;
}

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;

  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  const enMessages = (await import('./messages/en.json')).default as unknown as RawMessages;
  const merged: RawMessages =
    locale === 'en'
      ? enMessages
      : deepMerge(enMessages, (await import(`./messages/${locale}.json`)).default as unknown as RawMessages);

  return {
    locale,
    messages: merged as unknown as AbstractIntlMessages,
    timeZone: 'Asia/Kolkata',
    now: new Date(),
  };
});
