/**
 * Author entities for E-E-A-T.
 *
 * The canonical author of all on-site content is the VastuCart Editorial
 * Team — an Organization-class author. We deliberately avoid attributing
 * pseudo-personal authorship to a single named individual without
 * verifiable credentials; Google's helpful-content updates flag fake or
 * unverifiable author bylines, and the cost of a single hand-wave name
 * outweighs the E-E-A-T benefit.
 *
 * The editorial profile page lives at /authors/vastucart-editorial on
 * this domain (not on the blog cluster) so the schema's `Person` href
 * resolves to a same-origin page that Google can crawl. The entity
 * is technically a Person (Schema.org accepts a team-name Person as
 * author), but described as an editorial collective.
 */

export type Author = {
  slug: string;
  name: string;
  jobTitle: string;
  bio: string;
  profileUrl: string;
  image: string;
  knowsAbout: string[];
  /** Optional. Set only when the author is a real, locatable individual. */
  location?: string;
  /** Optional. Set only when verifiable. */
  yearsExperience?: number;
};

/**
 * Primary editorial entity — used as the author for every page on the
 * main site. The profile page describes the editorial process, sources,
 * review cycle, and how readers can submit corrections.
 */
export const VASTUCART_EDITORIAL: Author = {
  slug: 'vastucart-editorial',
  name: 'VastuCart Editorial Team',
  jobTitle: 'Editorial Team — Vedic Astrology, Numerology, and Vāstu',
  bio: 'The VastuCart editorial team curates, reviews, and updates all on-site content against classical sources (Brihat Parashara Hora Shastra, Saravali, Phaladeepika, Brihat Samhita, Vedic numerology and vāstu canon). Each article is fact-checked against primary references before publication. Reader corrections are welcome at editorial@vastucart.in.',
  profileUrl: 'https://www.vastucart.in/authors/vastucart-editorial',
  image: 'https://www.vastucart.in/og-default.png',
  knowsAbout: [
    'Vedic Astrology',
    'Parasari Jyotish',
    'Vimshottari Dasha',
    'Muhurta',
    'Remedial Astrology',
    'Vedic Numerology',
    'Chaldean Numerology',
    'Vāstu Shastra',
    'Tarot',
  ],
};

/**
 * Default author used by every page. Always points at the editorial
 * entity. Do not import a named-person author for content attribution.
 */
export const PRIMARY_AUTHOR: Author = VASTUCART_EDITORIAL;
