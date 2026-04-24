import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { loadConcept, getAllConceptSlugs } from '@/lib/concepts';
import { ConceptPageContent } from '@/components/concepts/concept-page';
import { ConceptEntityGraph } from '@/components/seo/concept-graph';

// ISR: concepts are MDX-style content, regenerated daily catches edits.
export const revalidate = 86400;

interface ConceptPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

/** Pre-render every flat concept route (excludes Tithis which use nested route). */
export function generateStaticParams() {
  const locales = ['en', 'hi'];
  const all = getAllConceptSlugs().filter(({ category }) => category !== 'tithi');
  return locales.flatMap((locale) =>
    all.map(({ slug }) => ({ locale, slug }))
  );
}

// Category-specific head-term used in the title for search intent.
// Examples built from this map:
//   graha  → "Surya (Sun) in Vedic Astrology — Meaning, Effects | VastuCart"
//   rashi  → "Mesha Rashi (Aries) — Traits, Compatibility | VastuCart"
//   nakshatra → "Rohini Nakshatra — Meaning, Deity, Pada | VastuCart"
const CONCEPT_HEAD_TERM_EN: Record<string, string> = {
  graha: 'in Vedic Astrology — Meaning, Effects',
  rashi: 'Rashi — Traits, Compatibility, Meaning',
  nakshatra: 'Nakshatra — Meaning, Deity, Pada, Effects',
  bhava: 'Bhava in Kundli — Meaning & Effects',
  dosha: 'Dosha — Check, Effects & Remedies',
  yoga: 'Yoga in Kundli — Meaning & Effects',
  kuta: 'Koota in Kundli Matching — Meaning & Score',
  varga: 'Varga Chart — Meaning & Interpretation',
  numerology: 'in Numerology — Meaning & Calculation',
  vastu: 'in Vastu Shastra — Meaning & Rules',
  tarot: 'Tarot — Meaning & Interpretation',
};
const CONCEPT_HEAD_TERM_HI: Record<string, string> = {
  graha: 'वैदिक ज्योतिष में — अर्थ और प्रभाव',
  rashi: 'राशि — गुण, अनुकूलता, अर्थ',
  nakshatra: 'नक्षत्र — अर्थ, देवता, पाद, प्रभाव',
  bhava: 'भाव कुंडली में — अर्थ और प्रभाव',
  dosha: 'दोष — जांच, प्रभाव और उपाय',
  yoga: 'योग कुंडली में — अर्थ और प्रभाव',
  kuta: 'कूट कुंडली मिलान में — अर्थ और स्कोर',
  varga: 'वर्ग कुंडली — अर्थ और व्याख्या',
  numerology: 'अंक ज्योतिष में — अर्थ और गणना',
  vastu: 'वास्तु शास्त्र में — अर्थ और नियम',
  tarot: 'तारोट — अर्थ और व्याख्या',
};

/** Build a keyword-rich meta description from the concept's own text. */
function buildConceptDescription(concept: { name: string; description: string; category: string }): string {
  const head = concept.description.split(';')[0].trim();
  const category = concept.category;
  // ~155-char keyword-rich desc; includes "free", category term, concept name.
  const byCategory: Record<string, string> = {
    graha: `${concept.name} in Vedic astrology — ${head}. Free guide to ${concept.name}'s meaning, effects on kundli, remedies and classical references.`,
    rashi: `${concept.name} rashi — ${head}. Free guide to ${concept.name} traits, compatible signs, ruling planet, lucky colors and personality in Vedic astrology.`,
    nakshatra: `${concept.name} nakshatra — ${head}. Free guide to ${concept.name}'s meaning, deity, planetary lord, pada divisions and personality effects in kundli.`,
    bhava: `${concept.name} bhava in kundli — ${head}. Free guide to ${concept.name}'s significations, planetary effects and interpretation in Vedic astrology.`,
    dosha: `${concept.name} — ${head}. Free guide: how to check this dosha in kundli, effects on life, classical remedies and cancellation rules in Vedic astrology.`,
    yoga: `${concept.name} — ${head}. Free guide to this yoga's formation rules, effects in kundli and strength assessment in classical Vedic astrology.`,
    kuta: `${concept.name} in ashtakoot gun milan — ${head}. Free guide to scoring, meaning and role in kundli matching for marriage compatibility.`,
    varga: `${concept.name} divisional chart — ${head}. Free guide to what ${concept.name} reveals, how it is cast and its use in Vedic astrology.`,
    numerology: `${concept.name} in numerology — ${head}. Free guide to meaning, calculation method and life-area interpretation in Vedic and Chaldean numerology.`,
    vastu: `${concept.name} in vastu shastra — ${head}. Free guide to classical meaning, placement rules and applied tips for homes and apartments.`,
    tarot: `${concept.name} tarot — ${head}. Free guide to card meaning, upright and reversed interpretation, and role in spread readings.`,
  };
  return byCategory[category] ?? `${concept.name} — ${head}. Free guide in Hindi and English at VastuCart.`;
}

export async function generateMetadata({ params }: ConceptPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const concept = loadConcept(slug);
  if (!concept || concept.category === 'tithi') {
    return { title: 'Not Found' };
  }
  const canonical = `/concepts/${slug}`;
  const title =
    locale === 'hi'
      ? `${concept.name} ${CONCEPT_HEAD_TERM_HI[concept.category] ?? '— वैदिक ज्योतिष में अर्थ'} | VastuCart`
      : `${concept.name} ${CONCEPT_HEAD_TERM_EN[concept.category] ?? '— Meaning & Effects in Vedic Astrology'} | VastuCart`;
  const description = buildConceptDescription(concept);

  return {
    title,
    description,
    alternates: {
      canonical: locale === 'en' ? canonical : `/${locale}${canonical}`,
      languages: {
        en: canonical,
        hi: `/hi${canonical}`,
        'x-default': canonical,
      },
    },
    openGraph: {
      title,
      description,
      url: locale === 'en'
        ? `https://www.vastucart.in${canonical}`
        : `https://www.vastucart.in/${locale}${canonical}`,
      siteName: 'VastuCart',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      type: 'article',
    },
  };
}

export default async function ConceptPage({ params }: ConceptPageProps) {
  const { locale, slug } = await params;
  const concept = loadConcept(slug);
  if (!concept || concept.category === 'tithi') {
    notFound();
  }
  return (
    <>
      <ConceptEntityGraph concept={concept} locale={locale} />
      <ConceptPageContent concept={concept} locale={locale === 'hi' ? 'hi' : 'en'} />
    </>
  );
}
