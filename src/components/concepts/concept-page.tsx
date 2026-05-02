import { Link } from '@/i18n/navigation';
import { ChevronRight, ArrowLeft, ArrowRight, BookOpen, HelpCircle } from 'lucide-react';
import type { Concept } from '@/lib/concepts';
import { categoryDisplayName, conceptPath, getAdjacentConcepts } from '@/lib/concepts';
import { ConceptToolCTA } from './concept-tool-cta';
import { getConceptFaqs } from '@/lib/concepts/concept-faqs';

export function ConceptPageContent({
  concept,
  locale,
}: {
  concept: Concept;
  locale: 'en' | 'hi';
}) {
  const { prev, next } = getAdjacentConcepts(concept.category, concept.slug);
  const categoryLabel = categoryDisplayName(concept.category);
  const ascii = concept.ascii;
  const showAscii = Boolean(ascii) && ascii !== concept.name;

  // Reading-time estimate from the rendered markdown body. Whitespace-split
  // is a stable approximation for both English and Hindi.
  const bodyWordCount = concept.body
    .replace(/[#*_`>\[\]]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  const readingTimeMinutes = Math.max(2, Math.round(bodyWordCount / 200));

  // Programmatic FAQs for rashi + nakshatra (other categories return []).
  const faqs = getConceptFaqs(concept.slug, concept.category, locale);

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
          <p className="text-lg text-gray-700 leading-relaxed mb-3">{concept.description}</p>
        )}
        {/* Reading-time signal — also feeds the Article timeRequired in
            JSON-LD on graha/rashi/nakshatra pages where Article schema is
            emitted. */}
        <div className="inline-flex items-center gap-1.5 text-sm text-gray-500">
          <BookOpen className="w-4 h-4" />
          {locale === 'hi'
            ? `${readingTimeMinutes} मिनट का पाठ`
            : `${readingTimeMinutes} min read`}
        </div>
      </header>

      {/* Calculator CTA — shown only when the concept maps to a tool. */}
      <ConceptToolCTA concept={concept} locale={locale} />

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

      {/* FAQ section — programmatic for rashi + nakshatra; rendered above
          the prev/next nav so it stays inside the article for AEO scraping. */}
      {faqs.length > 0 && (
        <section
          className="mt-12 not-prose"
          aria-labelledby="concept-faq-heading"
        >
          <header className="flex items-center gap-2 mb-6">
            <HelpCircle className="w-5 h-5 text-deepteal-600" aria-hidden="true" />
            <h2
              id="concept-faq-heading"
              className="text-2xl font-bold text-deepteal-900"
            >
              {locale === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
            </h2>
          </header>
          <div className="bg-white rounded-2xl border border-deepteal-100 divide-y divide-deepteal-100">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group p-5"
                {...(i === 0 ? { open: true } : {})}
              >
                <summary className="cursor-pointer font-semibold text-deepteal-900 list-none flex items-start justify-between gap-4">
                  <span>{faq.question}</span>
                  <ArrowRight
                    className="w-4 h-4 text-deepteal-400 transition-transform group-open:rotate-90 flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                </summary>
                <p className="text-gray-700 leading-relaxed mt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      )}

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
