'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { Heart } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const tTools = useTranslations('tools');
  const locale = useLocale();
  // Use a fixed year for SSR to avoid hydration mismatch, then update on client
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const quickLinks = [
    { label: 'Home', href: `/${locale}` },
    { label: 'All Tools', href: `/${locale}/tools` },
    { label: 'About Us', href: `/${locale}/about` },
  ];

  const popularTools = [
    {
      label: locale === 'en' ? 'Life Path Calculator' : 'मूलांक कैलकुलेटर',
      href: `/${locale}/tools/life-path-number`,
    },
    {
      label: locale === 'en' ? 'Name Numerology' : 'नाम अंकशास्त्र',
      href: `/${locale}/tools/chaldean-numerology`,
    },
    {
      label: locale === 'en' ? 'Lo Shu Grid' : 'लो शू ग्रिड',
      href: `/${locale}/tools/lo-shu-grid`,
    },
    {
      label: locale === 'en' ? 'Kundli Milan' : 'कुंडली मिलान',
      href: `/${locale}/tools/marriage-matching`,
    },
  ];

  const legalLinks = [
    { label: t('privacy'), href: `/${locale}/privacy` },
    { label: t('terms'), href: `/${locale}/terms` },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Link href={`/${locale}`}>
                <img
                  src="/logo.png"
                  alt="Divine Life"
                  className="w-10 h-10 rounded-xl"
                />
              </Link>
              <div className="flex flex-col">
                <Link href={`/${locale}`} className="font-bold text-xl text-white hover:text-teal-400 transition-colors">
                  Divine Life
                </Link>
                <span className="text-xs text-gray-400">
                  by{' '}
                  <a
                    href="https://vastucart.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-teal-400 transition-colors"
                  >
                    VastuCart®
                  </a>
                </span>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">{t('tagline')}</p>
            <p className="text-gray-500 text-xs">
              {locale === 'en'
                ? 'Accurate calculators based on authentic Vedic texts'
                : 'प्रामाणिक वैदिक ग्रंथों पर आधारित सटीक कैलकुलेटर'}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tools */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {locale === 'en' ? 'Popular Tools' : 'लोकप्रिय टूल्स'}
            </h3>
            <ul className="space-y-2">
              {popularTools.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t('legal')}</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-teal-400 transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Store Link */}
            <div className="mt-6">
              <a
                href="https://vastucart.in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white rounded-lg text-sm font-medium hover:from-saffron-600 hover:to-saffron-700 transition-colors"
              >
                {locale === 'en' ? 'Visit Store' : 'स्टोर देखें'}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* Disclaimer */}
          <div className="text-gray-400 text-xs text-center mb-4 px-4 py-2 bg-gray-800/50 rounded-lg max-w-2xl mx-auto">
            {locale === 'en'
              ? 'For entertainment and educational purposes only. Not professional advice.'
              : 'केवल मनोरंजन और शैक्षिक उद्देश्यों के लिए। पेशेवर सलाह नहीं।'}
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm">
              © {currentYear} Divine Life by{' '}
              <a
                href="https://vastucart.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal-400 transition-colors"
              >
                VastuCart®
              </a>
              . {t('copyright')}
            </div>
            <div className="text-gray-500 text-sm flex items-center gap-1">
              {locale === 'en' ? 'Made with' : 'बनाया गया'}{' '}
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />{' '}
              {locale === 'en' ? 'in India' : 'भारत में'}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
