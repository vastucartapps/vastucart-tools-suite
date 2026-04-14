/**
 * Helpers for the programmatic /tools/life-path-number/[number] pages.
 *
 * All display data comes from LIFE_PATH_MEANINGS (the same source the main
 * calculator uses) — we just build per-number metadata, slugs, and templated
 * FAQs from it. No new editorial content is authored here.
 */

import { LIFE_PATH_MEANINGS } from './life-path';
import type { LifePathMeaning } from '@/types';

/** Valid Life Path Numbers — 1-9 plus the three master numbers. */
export const LIFE_PATH_NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33] as const;

export type LifePathNumber = (typeof LIFE_PATH_NUMBERS)[number];

export function isLifePathNumber(n: number): n is LifePathNumber {
  return (LIFE_PATH_NUMBERS as readonly number[]).includes(n);
}

export function parseLifePathParam(raw: string): LifePathNumber | null {
  // Reject leading zeros, non-digits, etc.
  if (!/^\d+$/.test(raw)) return null;
  const n = Number(raw);
  return isLifePathNumber(n) ? n : null;
}

export function isMasterNumber(n: number): boolean {
  return n === 11 || n === 22 || n === 33;
}

/** Short per-number keyword set for meta tags. */
export function keywordsFor(n: LifePathNumber, locale: 'en' | 'hi'): string[] {
  if (locale === 'hi') {
    return [
      `मूलांक ${n}`,
      `जीवन पथ ${n}`,
      `जीवन पथ संख्या ${n}`,
      'अंकशास्त्र',
      'व्यक्तित्व विश्लेषण',
    ];
  }
  return [
    `life path number ${n}`,
    `life path ${n}`,
    `numerology ${n}`,
    `life path ${n} meaning`,
    `life path ${n} personality`,
    `life path ${n} career`,
    `life path ${n} compatibility`,
  ];
}

/**
 * Templated FAQs derived from each number's meaning. 4 Q&A per page.
 * Uses the same data the calculator renders so the JSON-LD matches what a
 * user sees on the page.
 */
export function buildFaqsFor(
  n: LifePathNumber,
  meaning: LifePathMeaning,
  locale: 'en' | 'hi',
): Array<{ question: string; answer: string }> {
  const title = meaning.title[locale];
  const positives = meaning.positiveTraits.map((t) => t[locale]).join(', ');
  const negatives = meaning.negativeTraits.map((t) => t[locale]).join(', ');
  const careers = meaning.careers.map((c) => c[locale]).join(', ');
  const compat = meaning.compatibleNumbers.join(', ');
  const isMaster = isMasterNumber(n);

  if (locale === 'hi') {
    return [
      {
        question: `मूलांक ${n} (${title}) का क्या अर्थ है?`,
        answer: meaning.overview.hi,
      },
      {
        question: `मूलांक ${n} के मुख्य गुण क्या हैं?`,
        answer: `मूलांक ${n} के सकारात्मक गुण हैं: ${positives}। ध्यान देने योग्य नकारात्मक प्रवृत्तियाँ: ${negatives}।`,
      },
      {
        question: `मूलांक ${n} किन मूलांकों के साथ संगत है?`,
        answer: `मूलांक ${n} के साथ सबसे अच्छी संगति मूलांक ${compat} के साथ है। इन संख्याओं के साथ स्वाभाविक सामंजस्य रहता है।`,
      },
      isMaster
        ? {
            question: `क्या मूलांक ${n} एक मास्टर नंबर है?`,
            answer: `हाँ, मूलांक ${n} एक मास्टर नंबर है। मास्टर नंबर 11, 22 और 33 को एकल अंक में कम नहीं किया जाता और वे अंकशास्त्र की उच्चतम आध्यात्मिक ऊर्जा धारण करते हैं।`,
          }
        : {
            question: `मूलांक ${n} के लिए कौन से करियर उपयुक्त हैं?`,
            answer: `मूलांक ${n} इन क्षेत्रों में उत्कृष्ट होता है: ${careers}।`,
          },
    ];
  }

  return [
    {
      question: `What does Life Path Number ${n} (${title}) mean?`,
      answer: meaning.overview.en,
    },
    {
      question: `What are the main traits of Life Path ${n}?`,
      answer: `Life Path ${n}'s positive traits are: ${positives}. Shadow tendencies to watch for: ${negatives}.`,
    },
    {
      question: `Which numbers is Life Path ${n} compatible with?`,
      answer: `Life Path ${n} harmonises most naturally with Life Paths ${compat}. These numbers share complementary energies across work, friendship, and love.`,
    },
    isMaster
      ? {
          question: `Is Life Path ${n} a Master Number?`,
          answer: `Yes. Life Path ${n} is a Master Number. Master Numbers 11, 22, and 33 are not reduced to a single digit and are considered to carry the highest spiritual vibrations in numerology.`,
        }
      : {
          question: `What careers suit Life Path ${n}?`,
          answer: `Life Path ${n} typically thrives in: ${careers}. The unifying theme is work that channels the number's core energy into tangible impact.`,
        },
  ];
}

/** Short page-level meta description (~150 chars) derived from overview. */
export function metaDescriptionFor(
  meaning: LifePathMeaning,
  locale: 'en' | 'hi',
): string {
  const overview = meaning.overview[locale];
  // First 150 chars, ending on a word boundary.
  if (overview.length <= 155) return overview;
  const trimmed = overview.slice(0, 150);
  const lastSpace = trimmed.lastIndexOf(' ');
  return `${trimmed.slice(0, lastSpace > 100 ? lastSpace : 150)}...`;
}

export function pageTitleFor(
  n: LifePathNumber,
  meaning: LifePathMeaning,
  locale: 'en' | 'hi',
): string {
  const title = meaning.title[locale];
  if (locale === 'hi') {
    return `मूलांक ${n}: ${title} — अर्थ, गुण, करियर और प्रेम | VastuCart`;
  }
  return `Life Path Number ${n}: ${title} — Meaning, Traits, Career & Love | VastuCart`;
}

/** Returns all (locale, number) pairs for generateStaticParams / sitemap. */
export function allNumberPageParams(): Array<{ number: string }> {
  return LIFE_PATH_NUMBERS.map((n) => ({ number: String(n) }));
}

/** Rough word count for Article schema (sum of major text fields). */
export function estimatedWordCount(meaning: LifePathMeaning, locale: 'en' | 'hi'): number {
  const parts = [
    meaning.overview[locale],
    meaning.loveRelationships?.[locale] ?? '',
    meaning.moneyWork?.[locale] ?? '',
    meaning.lifePhases?.youth?.[locale] ?? '',
    meaning.lifePhases?.adult?.[locale] ?? '',
    meaning.lifePhases?.mature?.[locale] ?? '',
  ];
  return parts.reduce((total, p) => total + p.split(/\s+/).filter(Boolean).length, 0);
}

export function getMeaning(n: LifePathNumber): LifePathMeaning {
  const meaning = LIFE_PATH_MEANINGS[n];
  if (!meaning) {
    throw new Error(`LIFE_PATH_MEANINGS missing number ${n}`);
  }
  return meaning;
}
