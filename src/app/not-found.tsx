'use client';

import { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Home, Wrench, Mail, Sparkles, AlertTriangle, Copy, Check, Gift, ExternalLink } from 'lucide-react';
import { useState } from 'react';

// Standalone 404 page for routes without locale prefix
export default function GlobalNotFound() {
  const [copied, setCopied] = useState(false);
  const [pathname, setPathname] = useState('');

  useEffect(() => {
    setPathname(window.location.pathname);

    // Track 404 error via Google Analytics
    if ((window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', '404_error', {
        page_path: window.location.pathname,
        page_referrer: document.referrer,
        page_title: '404 - Secret Coupon Found',
      });
    }
  }, []);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText('SECRETVASTU');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <html lang="en">
      <head>
        <title>Secret Found! | VastuCart</title>
        <meta name="robots" content="noindex" />
      </head>
      <body className="min-h-screen bg-cream-50 pattern-zodiac-subtle">
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/images/vastucart logo 404.png"
              alt="VastuCart"
              width={200}
              height={60}
              className="h-auto w-auto max-h-16"
              priority
            />
          </div>

          {/* Congratulations text */}
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="w-6 h-6 text-amber-500" />
              <span className="text-amber-600 font-semibold text-lg">Congratulations!</span>
              <Sparkles className="w-6 h-6 text-amber-500" />
            </div>
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              You Found a Secret!
            </h1>
            <p className="text-gray-600 max-w-md">
              The page you were looking for doesn&apos;t exist...
            </p>
            <p className="text-deepteal-600 font-medium mt-2">
              But you discovered something better!
            </p>
          </div>

          {/* Secret image */}
          <div className="mb-8">
            <Image
              src="/images/secret-404-found.webp"
              alt="Secret Found!"
              width={400}
              height={300}
              className="rounded-2xl shadow-lg"
              priority
            />
          </div>

          {/* Coupon Card */}
          <div className="w-full max-w-md mb-8">
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 p-6 shadow-xl">
              {/* Decorative circles */}
              <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-amber-50 rounded-full" />
              <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-amber-50 rounded-full" />

              {/* Content */}
              <div className="relative z-10">
                {/* Title */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Gift className="w-5 h-5 text-amber-300" />
                  <span className="text-amber-200 font-semibold uppercase tracking-wider text-sm">
                    SECRET COUPON CODE
                  </span>
                  <Gift className="w-5 h-5 text-amber-300" />
                </div>

                {/* Code box */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
                  <div className="flex items-center justify-between gap-3">
                    <code className="flex-1 text-2xl sm:text-3xl font-bold text-white tracking-widest text-center font-mono">
                      SECRETVASTU
                    </code>
                    <button
                      onClick={handleCopy}
                      className={`flex-shrink-0 p-3 rounded-xl transition-all duration-200 ${
                        copied
                          ? 'bg-green-500 text-white'
                          : 'bg-amber-500 hover:bg-amber-600 text-white'
                      }`}
                      aria-label={copied ? 'Copied!' : 'Copy Code'}
                    >
                      {copied ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                  </div>
                  {copied && (
                    <p className="text-green-300 text-sm text-center mt-2">
                      Copied!
                    </p>
                  )}
                </div>

                {/* Hint and link */}
                <div className="text-center">
                  <p className="text-deepteal-100 text-sm mb-2">Use at vastucart.in for a surprise discount!</p>
                  <a
                    href="https://vastucart.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-amber-200 transition-colors"
                  >
                    Redeem at vastucart.in
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Link
              href="/en"
              className="inline-flex items-center gap-2 px-6 py-3 bg-deepteal-600 text-white rounded-xl font-medium hover:bg-deepteal-700 transition-colors shadow-md"
            >
              <Home className="w-5 h-5" />
              Go Home
            </Link>
            <Link
              href="/en/tools"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-deepteal-600 border-2 border-deepteal-200 rounded-xl font-medium hover:bg-deepteal-50 transition-colors"
            >
              <Wrench className="w-5 h-5" />
              Browse Tools
            </Link>
            <a
              href="mailto:support@vastucart.in"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-600 border-2 border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
            >
              <Mail className="w-5 h-5" />
              Contact Us
            </a>
          </div>

          {/* Broken link info */}
          <div className="text-center text-sm text-gray-500">
            <div className="flex items-center justify-center gap-2 mb-1">
              <AlertTriangle className="w-4 h-4" />
              <span>Broken link? We&apos;re tracking it to fix it!</span>
            </div>
            <div className="font-mono text-xs bg-gray-100 px-3 py-1 rounded-lg inline-block">
              URL: <span className="text-gray-700">{pathname}</span>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
