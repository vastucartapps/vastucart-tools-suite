'use client';

import NextLink from 'next/link';
import { usePathname as useNextPathname, useRouter as useNextRouter } from 'next/navigation';
import { useLocale } from 'next-intl';
import type { ComponentProps, ReactNode } from 'react';
import { defaultLocale } from './request';

type Href = string | { pathname: string; query?: Record<string, string> };

function localize(href: Href, locale: string): Href {
  const path = typeof href === 'string' ? href : href.pathname;
  // Pass external links (http://, mailto:, #, tel:) through untouched.
  if (!path.startsWith('/')) return href;
  // Default locale renders the canonical bare path — no prefix, no redirect hop.
  if (locale === defaultLocale) return href;
  // Don't double-prefix if the path already starts with the locale.
  if (path === `/${locale}` || path.startsWith(`/${locale}/`)) return href;
  const prefixed = `/${locale}${path === '/' ? '' : path}`;
  return typeof href === 'string' ? prefixed : { ...href, pathname: prefixed };
}

type LinkProps = Omit<ComponentProps<typeof NextLink>, 'href'> & {
  href: Href;
  children?: ReactNode;
};

export function Link({ href, ...rest }: LinkProps) {
  const locale = useLocale();
  return <NextLink href={localize(href, locale) as ComponentProps<typeof NextLink>['href']} {...rest} />;
}

export function usePathname(): string {
  const pathname = useNextPathname();
  const locale = useLocale();
  if (locale === defaultLocale) return pathname || '/';
  const prefix = `/${locale}`;
  if (pathname === prefix) return '/';
  if (pathname?.startsWith(`${prefix}/`)) return pathname.slice(prefix.length);
  return pathname || '/';
}

export function useRouter() {
  const router = useNextRouter();
  const currentLocale = useLocale();

  function resolveHref(href: Href, targetLocale?: string): string {
    const loc = targetLocale ?? currentLocale;
    const localized = localize(href, loc);
    return typeof localized === 'string' ? localized : localized.pathname;
  }

  return {
    ...router,
    push: (href: Href, options?: { locale?: string }) => router.push(resolveHref(href, options?.locale)),
    replace: (href: Href, options?: { locale?: string }) => router.replace(resolveHref(href, options?.locale)),
    prefetch: (href: Href, options?: { locale?: string }) => router.prefetch(resolveHref(href, options?.locale)),
  };
}
