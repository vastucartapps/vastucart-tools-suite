/**
 * Translation Utility Functions
 *
 * Centralized helpers for safe translation access with fallbacks.
 * Eliminates code duplication across pages.
 */

/**
 * Safely get a translation value with fallback
 * Handles missing translations gracefully without throwing errors
 */
export function getSafeTranslation(
  t: (key: string) => string,
  key: string,
  fallback: string
): string {
  try {
    const value = t(key);
    // next-intl returns the key if not found, so check for that
    if (value === key || value.includes('MISSING')) {
      return fallback;
    }
    return value;
  } catch {
    return fallback;
  }
}

/**
 * Get nested translation for tools
 * Constructs the key path and provides safe access
 */
export function getToolTranslation(
  t: (key: string) => string,
  categoryKey: string,
  toolKey: string,
  field: string,
  fallback: string
): string {
  const key = `${categoryKey}.${toolKey}.${field}`;
  return getSafeTranslation(t, key, fallback);
}

/**
 * Format a URL slug to a readable title
 * e.g., "life-path-number" -> "Life Path Number"
 */
export function formatSlugToTitle(slug: string): string {
  return slug
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

/**
 * Validate and normalize locale
 * Returns default locale if invalid
 */
export function validateLocale(
  locale: string | undefined,
  validLocales: readonly string[] = ['en', 'hi'],
  defaultLocale = 'en'
): string {
  if (!locale || !validLocales.includes(locale)) {
    return defaultLocale;
  }
  return locale;
}
