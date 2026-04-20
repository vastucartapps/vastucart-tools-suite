import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Optimize package imports for better tree-shaking
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.vastucart.in',
      },
      {
        // Author avatars and assets served from the blog cluster site.
        protocol: 'https',
        hostname: 'blog.vastucart.in',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },

  // Headers for security and caching (Enterprise-grade)
  async headers() {
    // CSP kept in report-only for now — the site injects inline JSON-LD and
    // inline GA bootstrap scripts, so enforcing strict CSP without a nonce
    // middleware would break them. Report-only lets us collect violations in
    // the browser console / reporting endpoint without blocking anything.
    const csp = [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' data: https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://www.google-analytics.com https://region1.google-analytics.com https://www.googletagmanager.com",
      "frame-ancestors 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; ');

    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Content-Security-Policy-Report-Only',
            value: csp,
          },
        ],
      },
      {
        // Cache static assets
        source: '/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },

  // Redirects for SEO
  async redirects() {
    return [
      // Redirect non-www to www (301) for canonical consistency
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'vastucart.in',
          },
        ],
        destination: 'https://www.vastucart.in/:path*',
        permanent: true,
      },
      // Collapse /en/* → /* (301). English is the default locale with no
      // prefix; next-intl middleware would otherwise 307-redirect, leaving
      // two indexable URL forms. A permanent redirect here runs before
      // middleware and gives Google a single canonical form.
      { source: '/en', destination: '/', permanent: true },
      { source: '/en/:path*', destination: '/:path*', permanent: true },
      // Legacy /tools?category=X → /tools/category/X (301). The query-param
      // form was indistinguishable from /tools for Google (same canonical,
      // same title, same schema) so it never ranked for category queries.
      // Static category routes each have their own canonical, title,
      // description, and filtered ItemList schema. See src/app/[locale]/
      // tools/category/[category]/page.tsx and src/config/tools.ts
      // CATEGORY_SEO. One entry per category; Next.js redirects only when
      // the query value matches exactly.
      {
        source: '/tools',
        has: [{ type: 'query', key: 'category', value: 'numerology' }],
        destination: '/tools/category/numerology',
        permanent: true,
      },
      {
        source: '/tools',
        has: [{ type: 'query', key: 'category', value: 'astrology' }],
        destination: '/tools/category/astrology',
        permanent: true,
      },
      {
        source: '/tools',
        has: [{ type: 'query', key: 'category', value: 'vastu' }],
        destination: '/tools/category/vastu',
        permanent: true,
      },
      {
        source: '/tools',
        has: [{ type: 'query', key: 'category', value: 'muhurat' }],
        destination: '/tools/category/muhurat',
        permanent: true,
      },
      {
        source: '/hi/tools',
        has: [{ type: 'query', key: 'category', value: 'numerology' }],
        destination: '/hi/tools/category/numerology',
        permanent: true,
      },
      {
        source: '/hi/tools',
        has: [{ type: 'query', key: 'category', value: 'astrology' }],
        destination: '/hi/tools/category/astrology',
        permanent: true,
      },
      {
        source: '/hi/tools',
        has: [{ type: 'query', key: 'category', value: 'vastu' }],
        destination: '/hi/tools/category/vastu',
        permanent: true,
      },
      {
        source: '/hi/tools',
        has: [{ type: 'query', key: 'category', value: 'muhurat' }],
        destination: '/hi/tools/category/muhurat',
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
