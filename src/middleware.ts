import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';
import { locales, defaultLocale } from '@/i18n/request';

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  // English (default) has no prefix, Hindi keeps /hi/
  localePrefix: 'as-needed',

  /*
   * These two are what let the site be cached at all.
   *
   * Every page here builds as static HTML, and every one was still being rendered by a serverless
   * function on every request, because the response could not be shared between two visitors.
   *
   * The cookie was one half: a response carrying Set-Cookie belongs to one person, so no cache will
   * store it. Locale detection was the other: with it on, /tools/mahadasha returned the page to one
   * visitor and a redirect to /hi/tools/mahadasha to the next, depending on their Accept-Language
   * header, and no single cached copy can be right for both.
   *
   * Nothing is lost. The language lives in the path, the header carries a switcher, and every page
   * declares both versions through hreflang, which is what Google asks for in place of redirecting
   * people by header.
   */
  localeCookie: false,
  localeDetection: false,
});

/**
 * /hi/blog/* → /blog/* permanent redirect.
 *
 * The 32 Hindi blog routes currently serve English content (their
 * components render the English post when no Hindi translation exists).
 * Until per-post Hindi translations are authored, the dual surface
 * dilutes ranking signals (duplicate content under different locales)
 * and wastes crawl budget. The sitemap already excludes /hi/blog/* and
 * the blog post template canonicals them to the English variant, so
 * Google consolidates ranking. This middleware closes the loop on the
 * user-facing surface: a 308 redirect (preserve method) sends every
 * /hi/blog/* request to the canonical English path before next-intl
 * middleware sees it.
 *
 * Reversible: when Hindi blog content is authored, remove the
 * `HI_BLOG_REDIRECT` block below and restore the `pair()` form in
 * sitemap.ts for blog post routes (see reports/audit-report.md §
 * "Pre-push checklist — Hindi blog content gap").
 */
const HI_BLOG_REDIRECT = /^\/hi\/blog(\/|$)/;

export default function middleware(req: NextRequest): NextResponse | Response {
  const { pathname, search, hash } = req.nextUrl;

  if (HI_BLOG_REDIRECT.test(pathname)) {
    const target = pathname.replace(/^\/hi/, '') || '/';
    const url = new URL(`${target}${search}${hash}`, req.url);
    return NextResponse.redirect(url, 308);
  }

  return intlMiddleware(req);
}

export const config = {
  // Match all pathnames except for
  // - API routes
  // - _next (Next.js internals)
  // - Static files (images, etc.)
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
