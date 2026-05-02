/**
 * Type definitions for the per-planet Mahadasha content modules.
 *
 * Each planet record is a self-contained bilingual long-form article — the
 * page renders directly from this data without round-tripping through
 * next-intl messages, so the structure is type-checked at build time.
 */

export type PlanetSlug =
  | 'surya'
  | 'chandra'
  | 'mangal'
  | 'rahu'
  | 'guru'
  | 'shani'
  | 'budh'
  | 'ketu'
  | 'shukra';

export type LocaleStr = { en: string; hi: string };
export type LocaleStrList = { en: string[]; hi: string[] };

export interface AntardashaNote {
  /** Sub-period ruler, written canonically (e.g., "Surya", "Shani"). */
  subRuler: string;
  /** Display labels in EN and HI (e.g., "Sun in Saturn dasha"). */
  label: LocaleStr;
  /** Bilingual narrative for that sub-period (~80–150 words). */
  effect: LocaleStr;
  /** Approximate length of the sub-period in months and days, computed
   *  from the dasha lord's Vimshottari years × sub-ruler share. Stored as
   *  display string to avoid recomputing in the page layer. */
  duration: LocaleStr;
}

export interface HouseEffect {
  /** 1–12 */
  house: number;
  effect: LocaleStr;
}

export interface FaqEntry {
  question: LocaleStr;
  answer: LocaleStr;
}

export interface HowToStep {
  name: LocaleStr;
  text: LocaleStr;
}

export interface RemedyBlock {
  /** Section heading (Mantra / Gemstone / Daana / Vrata / Lifestyle) */
  title: LocaleStr;
  /** Body paragraph (~80–150 words). */
  body: LocaleStr;
}

export interface PlanetRecord {
  /** URL slug — Sanskrit transliteration, lowercase. */
  slug: PlanetSlug;
  /** Display name for the page in each locale. */
  displayName: LocaleStr;
  /** Standard astronomical/Latin name (e.g., "Saturn"). */
  westernName: string;
  /** Sanskrit beej-mantra suffix line (used in JSON-LD keywords). */
  beejMantra: string;
  /** Vimshottari Mahadasha length in years. */
  periodYears: number;
  /** Mahadasha length in days (years × 365.25, rounded). Used for arithmetic. */
  periodDays: number;
  /** Karaka — the planet's natural significations, short labels. */
  karaka: LocaleStrList;
  /** Own signs (Sanskrit names). */
  ownSigns: string[];
  /** Exaltation sign + degree. */
  exaltation: { sign: string; degree: number };
  /** Debilitation sign + degree. */
  debilitation: { sign: string; degree: number };
  /** Friendly / Neutral / Enemy planets per Naisargika Maitri. */
  friendly: PlanetSlug[];
  neutral: PlanetSlug[];
  enemy: PlanetSlug[];
  /** Day of the week ruled by the planet (or '—' for nodes). */
  weekday: LocaleStr;
  /** Primary deity. */
  deity: LocaleStr;
  /** Gemstone (Hindi name in HI, English name in EN). */
  gemstone: LocaleStr;
  /** Brand-mappable hex tones for the planet card. */
  themeColor: { primary: string; accent: string };
  /** Brand-token Lucide icon name fallback. */
  icon: 'sun' | 'moon' | 'flame' | 'cloud' | 'crown' | 'orbit' | 'book' | 'wind' | 'sparkles';

  /** Hero intro paragraph (~140–180 words per locale). */
  intro: LocaleStr;
  /** Period overview, frames what the dasha is structurally (~140 words). */
  periodOverview: LocaleStr;
  /** Long-form: when the planet is well-placed (~220 words). */
  wellPlacedEffects: LocaleStr;
  /** Long-form: when the planet is afflicted (~220 words). */
  afflictedEffects: LocaleStr;
  /** Twelve house-by-house effect notes. */
  houseEffects: HouseEffect[];
  /** Antardasha (sub-period) breakdowns — at least 5 of the 9 sub-rulers. */
  antardashas: AntardashaNote[];
  /** Remedy sections — typically Mantra, Gemstone, Daana, Vrata, Lifestyle. */
  remedies: RemedyBlock[];
  /** Closing case-pattern / "what this looks like in real charts" (~150 words). */
  casePatterns: LocaleStr;
  /** Page-level FAQs (8–10 entries). */
  faqs: FaqEntry[];
  /** HowTo steps — for the JSON-LD HowTo node. */
  howToSteps: HowToStep[];

  /** ISO date the article was first written. */
  datePublished: string;
  /** ISO date the article was last reviewed. */
  dateModified: string;
}
