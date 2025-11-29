import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/i18n/request';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale,

  // Don't redirect on the default locale
  localePrefix: 'always',
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (Next.js internals)
  // - Static files (images, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
