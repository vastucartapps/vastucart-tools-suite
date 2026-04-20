import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { loadConcept, getAllConceptSlugs } from '@/lib/concepts';
import { ConceptPageContent } from '@/components/concepts/concept-page';
import { ConceptEntityGraph } from '@/components/seo/concept-graph';

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

export async function generateMetadata({ params }: TithiPageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const concept = loadConcept(slug);
  if (!concept || concept.category !== 'tithi') {
    return { title: 'Not Found' };
  }
  const canonical = `/concepts/tithi/${slug}`;
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
