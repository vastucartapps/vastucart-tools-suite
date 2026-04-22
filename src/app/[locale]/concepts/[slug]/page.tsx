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

export async function generateMetadata({ params }: ConceptPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const concept = loadConcept(slug);
  if (!concept || concept.category === 'tithi') {
    return { title: 'Not Found' };
  }
  const canonical = `/concepts/${slug}`;
  return {
    title: `${concept.name} — ${concept.description.split(';')[0].trim()}`,
    description: concept.description,
    alternates: {
      canonical: locale === 'en' ? canonical : `/${locale}${canonical}`,
      languages: {
        en: canonical,
        hi: `/hi${canonical}`,
        'x-default': canonical,
      },
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
