import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { loadConcept, getAllConceptSlugs } from '@/lib/concepts';
import { ConceptPageContent } from '@/components/concepts/concept-page';
import { ConceptEntityGraph } from '@/components/seo/concept-graph';
import {
  buildSocialMetadata,
  pageUrl,
  pickTitle,
  clampDescription,
} from '@/lib/seo/social-metadata';

interface TithiPageProps {
  params: Promise<{ locale: string; slug: string }>;
}

/** Pre-render all 16 Tithis per shared contracts §3.4 nested-path convention. */
export function generateStaticParams() {
  const locales = ['en', 'hi'];
  const tithis = getAllConceptSlugs().filter(({ category }) => category === 'tithi');
  return locales.flatMap((locale) =>
    tithis.map(({ slug }) => ({ locale, slug }))
  );
}

// Head-term titles for tithi pages — muhurat + vrat intent is dominant.
function tithiTitle(name: string, locale: 'en' | 'hi'): string {
  if (locale === 'hi') {
    return `${name} तिथि — अर्थ, महत्व, मुहूर्त और व्रत | VastuCart`;
  }
  return `${name} Tithi — Meaning, Significance, Muhurat & Vrat | VastuCart`;
}
function tithiDescription(name: string, head: string, locale: 'en' | 'hi'): string {
  if (locale === 'hi') {
    return `${name} तिथि — ${head}. पंचांग में ${name} का अर्थ, शुभ कार्य, व्रत कथा, मुहूर्त और ज्योतिषीय महत्व हिंदी में मुफ्त।`;
  }
  return `${name} tithi — ${head}. Free guide to ${name}'s meaning in Hindu panchang, auspicious activities, vrat katha, muhurat and astrological significance.`;
}

export async function generateMetadata({ params }: TithiPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const concept = loadConcept(slug);
  if (!concept || concept.category !== 'tithi') {
    return { title: 'Not Found' };
  }
  const canonical = `/concepts/tithi/${slug}`;
  const loc = locale === 'hi' ? 'hi' : 'en';
  const fullTitle = tithiTitle(concept.name, loc);
  const shortTitle = fullTitle.replace(/\s*\|\s*VastuCart\s*$/, '').trim();
  const tightTitle = loc === 'hi'
    ? `${concept.name} तिथि — VastuCart`
    : `${concept.name} Tithi — VastuCart`;
  const title = pickTitle([fullTitle, shortTitle, tightTitle, concept.name]);

  const rawDescription = tithiDescription(
    concept.name,
    concept.description.split(';')[0].trim(),
    loc,
  );
  const description = clampDescription(rawDescription, 160);

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: locale === 'en' ? canonical : `/${locale}${canonical}`,
      languages: {
        en: canonical,
        hi: `/hi${canonical}`,
        'x-default': canonical,
      },
    },
    ...buildSocialMetadata({
      title,
      description,
      url: pageUrl(locale, canonical),
      locale,
      type: 'article',
    }),
  };
}

export default async function TithiConceptPage({ params }: TithiPageProps) {
  const { locale, slug } = await params;
  const concept = loadConcept(slug);
  if (!concept || concept.category !== 'tithi') {
    notFound();
  }
  return (
    <>
      <ConceptEntityGraph concept={concept} locale={locale} />
      <ConceptPageContent concept={concept} locale={locale === 'hi' ? 'hi' : 'en'} />
    </>
  );
}
