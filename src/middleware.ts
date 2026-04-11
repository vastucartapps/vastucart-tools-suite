import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/i18n/request';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // English (default) has no prefix, Hindi keeps /hi/
  localePrefix: 'as-needed',
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (Next.js internals)
  // - Static files (images, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
