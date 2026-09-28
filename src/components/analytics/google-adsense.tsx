'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

/**
 * Hosts allowed to serve AdSense.
 *
 * Vercel publishes every project on a free `<project>.vercel.app` alias in
 * addition to the custom domain, and on a generated alias per preview
 * deployment. Those hosts served this exact page, byte for byte, including
 * the AdSense loader — which registered impressions against
 * ca-pub-1411902986257886 from domains that are not in the AdSense site
 * list. Google treats ads on an unapproved domain as a publisher-policy
 * violation, so the loader is gated on the canonical host instead of
 * shipping everywhere the app happens to be reachable.
 *
 * The gate runs in the browser on purpose: reading the request Host header
 * server-side would force every page out of static rendering, and Auto Ads
 * already load after hydration, so nothing is lost by deciding here.
 */
const AD_HOSTS = ['www.vastucart.in', 'vastucart.in'];

export function GoogleAdSense() {
  const [allowed, setAllowed] = useState(false);

  useEffect(() => {
    setAllowed(AD_HOSTS.includes(window.location.hostname));
  }, []);

  if (!allowed) return null;

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
