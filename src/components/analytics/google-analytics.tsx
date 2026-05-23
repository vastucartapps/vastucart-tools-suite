import Script from 'next/script';

// Hardcoded fallbacks so analytics works regardless of Vercel env state.
// Both IDs are public client-side values (shipped in the gtag URL) — not
// secrets. The env override path is preserved for future flexibility.
//
// Restoration context: this restores the exact code shape that was last
// known to produce real GA4 data on the live site. gtag.js is loaded with
// the AW- Google Ads ID as `primaryId` (because GA_MEASUREMENT_ID env was
// unset, the OR falls through to GOOGLE_ADS_ID). The AW- account is
// linked to GA4 property 518094707 in the Google Ads UI; that link
// auto-forwards hits to G-G49QBT511D. Removing the AW- path in a prior
// commit (fa0fc4b) silently broke GA4 because the linked-account
// forwarding stopped firing. Re-using AW- as the primary script ID
// restores that working pathway.
// IMPORTANT: GA_MEASUREMENT_ID has NO fallback. The working pre-fa0fc4b
// behavior depended on this env being unset in Vercel so that
// `primaryId = GA_MEASUREMENT_ID || GOOGLE_ADS_ID` fell through to AW-.
// gtag.js?id=AW-17349612540 auto-initializes the Google Ads tag and
// auto-forwards page_views to the linked GA4 property (518094707, the
// link is configured in the Google Ads UI). That's the pathway that
// actually delivers GA4 data on this site — loading gtag.js with the
// G- ID standalone fails to initialize (window.google_tag_data stays
// undefined, /g/collect never fires) in Next.js 15 + React 19 because
// the inline gtag('config', 'G-') call doesn't render as an executable
// script element.
//
// GOOGLE_ADS_ID has a hardcoded fallback so the AW- script loads even
// when the Vercel env var isn't set. The fallback value is public —
// it's shipped in the gtag URL on every page.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GOOGLE_ADS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || 'AW-17349612540';

export function GoogleAnalytics() {
  // Debug: Log if IDs are present (only in development)
  if (process.env.NODE_ENV === 'development') {
    console.log('GA_MEASUREMENT_ID:', GA_MEASUREMENT_ID ? 'SET' : 'NOT SET');
    console.log('GOOGLE_ADS_ID:', GOOGLE_ADS_ID ? 'SET' : 'NOT SET');
  }

  if (!GA_MEASUREMENT_ID && !GOOGLE_ADS_ID) return null;

  const primaryId = GA_MEASUREMENT_ID || GOOGLE_ADS_ID;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA_MEASUREMENT_ID ? `gtag('config', '${GA_MEASUREMENT_ID}');` : ''}
          ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ''}
        `}
      </Script>
    </>
  );
}

// For head placement - exports raw script tags
export function GoogleAnalyticsHead() {
  if (!GA_MEASUREMENT_ID && !GOOGLE_ADS_ID) return null;

  const primaryId = GA_MEASUREMENT_ID || GOOGLE_ADS_ID;

  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            ${GA_MEASUREMENT_ID ? `gtag('config', '${GA_MEASUREMENT_ID}');` : ''}
            ${GOOGLE_ADS_ID ? `gtag('config', '${GOOGLE_ADS_ID}');` : ''}
          `,
        }}
      />
    </>
  );
}
