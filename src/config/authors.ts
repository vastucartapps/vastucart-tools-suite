/**
 * Author entities for E-E-A-T.
 *
 * The canonical author profile pages live on the blog cluster site
 * (https://blog.vastucart.in/authors/<slug>) — we link to them from
 * every article byline and JSON-LD Person schema so Google can follow
 * the chain from content -> author -> credentials across the ecosystem.
 */

export type Author = {
  slug: string;
  name: string;
  jobTitle: string;
  bio: string;
  profileUrl: string;
  image: string;
  knowsAbout: string[];
  location?: string;
  yearsExperience?: number;
};

export const PT_RAGHAV_SHARMA: Author = {
  slug: 'pt-raghav-sharma',
  name: 'Pt. Raghav Sharma',
  jobTitle: 'Jyotish Acharya — Vedic Astrology Practitioner',
  bio: 'Varanasi-based practicing Jyotishi with over two decades of consultation experience across Graha, Dasha, and remedial astrology. Student of the Parasari Jyotish tradition.',
  profileUrl: 'https://blog.vastucart.in/authors/pt-raghav-sharma',
  image: 'https://blog.vastucart.in/authors/pt-raghav-sharma.webp',
  knowsAbout: [
    'Vedic Astrology',
    'Parasari Jyotish',
    'Graha in Bhava Analysis',
    'Vimshottari Dasha',
    'Muhurta',
    'Remedial Astrology',
    'Numerology',
  ],
  location: 'Varanasi, India',
  yearsExperience: 22,
};

export const PRIMARY_AUTHOR: Author = PT_RAGHAV_SHARMA;
