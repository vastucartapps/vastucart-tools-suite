import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'VastuCart - Astrology, Numerology & Vastu Calculators',
  description:
    'Free accurate calculators for Life Path Number, Kundli, Numerology, and Vastu Shastra. Trusted by millions for spiritual guidance.',
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
