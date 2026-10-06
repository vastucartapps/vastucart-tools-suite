import Script from 'next/script';

export function GoogleAdSense() {
  return (
    <Script
      id="google-adsense"
      async
      strategy="afterInteractive"
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1411902986257886"
      crossOrigin="anonymous"
    />
  );
}
