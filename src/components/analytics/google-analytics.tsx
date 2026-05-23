import Script from 'next/script';

/**
 * GA4 measurement ID. We accept an env-var override but fall back to the
 * canonical hardcoded ID for the production property (G-G49QBT511D, GA4
 * property 518094707). Hardcoding is safe — GA4 IDs are not secrets;
 * they're shipped to every client in the gtag <script> URL — and the
 * fallback guarantees tracking stays live even if NEXT_PUBLIC_GA_MEASUREMENT_ID
 * is missing from the Vercel env.
 *
 * Historical note: GA4 tracking was previously dependent on the AW-
 * Google Ads tag being loaded (which auto-forwarded hits to GA4 via the
 * linked-accounts feature in the Google Ads UI). When the unused AW-
 * was removed in commit fa0fc4b, GA4 went silent because the env var
 * NEXT_PUBLIC_GA_MEASUREMENT_ID was not set. This fallback restores
 * tracking without requiring a Vercel env change.
 */
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-G49QBT511D';

// Google Ads (AW-) conversion tracking is intentionally NOT loaded.
//
// When AW- was active, gtag downloaded the viewthroughconversion script
// from googleads.g.doubleclick.net and fired beacons to /ccm/collect and
// /rmkt/collect on every page load. Those pings raced Googlebot's render-
// close detection and showed up as "Page resources couldn't be loaded"
// in GSC URL Inspection — without delivering any value (no active Google
// Ads campaigns are running).
//
// To re-enable when launching Google Ads campaigns later: restore the
// `const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;` reading
// below, re-add the conditional gtag('config', GOOGLE_ADS_ID) calls, and
// set NEXT_PUBLIC_GOOGLE_ADS_ID in Vercel env. CSP is already configured
// to allow the necessary endpoints (next.config.ts).

export function GoogleAnalytics() {
  if (process.env.NODE_ENV === 'development') {
    console.log('GA_MEASUREMENT_ID:', GA_MEASUREMENT_ID ? 'SET' : 'NOT SET');
  }

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}');
        `}
      </Script>
    </>
  );
}

// For head placement - exports raw script tags
export function GoogleAnalyticsHead() {
  if (!GA_MEASUREMENT_ID) return null;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `,
        }}
      />
    </>
  );
}
