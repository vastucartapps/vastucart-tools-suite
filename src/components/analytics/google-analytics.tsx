import Script from 'next/script';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GOOGLE_ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;

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
        strategy="beforeInteractive"
      />
      <Script id="google-analytics" strategy="beforeInteractive">
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
