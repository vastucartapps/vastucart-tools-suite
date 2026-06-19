import type { Metadata } from 'next';
import './globals.css';

// Root-level fallback metadata. The per-locale layout under [locale] owns the
// real title/description via generateMetadata + next-intl; this block only
// applies to routes outside the locale tree (e.g. the global not-found page).
export const metadata: Metadata = {
  metadataBase: new URL('https://www.vastucart.in'),
  title: 'VastuCart — Vedic Astrology, Numerology & Vastu Tools',
  description:
    'Free, transparent calculators for Numerology, Vedic Astrology, Vastu Shastra, and Muhurat, grounded in classical texts and practitioner review.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
