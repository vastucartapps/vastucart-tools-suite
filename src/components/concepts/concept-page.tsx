import { Link } from '@/i18n/navigation';
import { ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import type { Concept, ConceptCategory } from '@/lib/concepts';
import { categoryDisplayName, conceptPath, getAdjacentConcepts } from '@/lib/concepts';

function asciiOf(name: string): string {
  // Strip combining marks to produce a plain ASCII fallback (Surya, Mesa, etc.)
  return name.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

export function ConceptPageContent({ concept }: { concept: Concept }) {
  const { prev, next } = getAdjacentConcepts(concept.category, concept.slug);
  const categoryLabel = categoryDisplayName(concept.category);
  const ascii = asciiOf(concept.name);
  const showAscii = ascii && ascii !== concept.name;

  return (
    <article className="max-w-3xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-6 flex flex-wrap items-center gap-1">
        <Link href="/" className="hover:text-deepteal-700">Home</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/concepts" className="hover:text-deepteal-700">Concepts</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href={`/concepts#${concept.category}`} className="hover:text-deepteal-700">{categoryLabel}</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-gray-800 font-medium">{concept.name}</span>
      </nav>

      {/* Header */}
      <header className="mb-8 pb-6 border-b border-deepteal-100">
        <h1 className="text-4xl font-bold text-deepteal-900 mb-3 leading-tight">
          {concept.name}
          {concept.devanagari && (
            <span className="ml-3 text-3xl font-normal text-deepteal-600 font-hindi">
              {concept.devanagari}
            </span>
          )}
          {showAscii && (
            <span className="ml-3 text-2xl font-normal text-gray-500">({ascii})</span>
          )}
        </h1>
        {concept.description && (
          <p className="text-lg text-gray-700 leading-relaxed">{concept.description}</p>
        )}
      </header>

      {/* Rendered markdown body */}
      <div
        className="concept-body prose prose-deepteal max-w-none
                   prose-headings:text-deepteal-800 prose-headings:font-bold
                   prose-h1:hidden prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
                   prose-h3:text-xl
                   prose-a:text-warmaccent-700 prose-a:no-underline hover:prose-a:underline
                   prose-strong:text-deepteal-800
                   prose-em:text-deepteal-700
                   prose-p:leading-relaxed prose-p:text-gray-800
                   prose-li:text-gray-800 prose-li:leading-relaxed
                   prose-ul:my-4"
        dangerouslySetInnerHTML={{ __html: concept.bodyHtml }}
      />

      {/* Category footer */}
      <footer className="mt-12 pt-8 border-t border-deepteal-100">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          {prev ? (
            <Link
              href={conceptPath(prev)}
              className="group flex items-center gap-2 text-deepteal-700 hover:text-warmaccent-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span className="flex flex-col">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Previous in {categoryLabel}</span>
                <span className="font-semibold">{prev.name}</span>
              </span>
            </Link>
          ) : <div />}

          <Link
            href="/concepts"
            className="px-5 py-2 rounded-full border border-deepteal-200 text-deepteal-700 hover:bg-deepteal-50 transition-colors text-sm font-medium"
          >
            All Concepts
          </Link>

          {next ? (
            <Link
              href={conceptPath(next)}
              className="group flex items-center gap-2 text-deepteal-700 hover:text-warmaccent-700 transition-colors text-right"
            >
              <span className="flex flex-col items-end">
                <span className="text-xs text-gray-500 uppercase tracking-wide">Next in {categoryLabel}</span>
                <span className="font-semibold">{next.name}</span>
              </span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </div>
      </footer>
    </article>
  );
}
