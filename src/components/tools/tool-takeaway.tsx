import { getTakeaway } from '@/lib/tools/takeaway';

/**
 * The short answer, at the top of a calculator's explanatory content.
 *
 * A calculator page is mostly a form, and a form answers nobody until they have found their birth
 * certificate. Someone who arrived from "what is a mahadasha" should not have to. This block answers the
 * page's own question in two or three sentences, before anything asks them for anything.
 *
 * It is a server component on purpose. The text is in the HTML that every visitor and every crawler
 * receives, there is no client bundle, nothing to hydrate and so nothing that can disagree with itself.
 *
 * The heading a reader sees is plain language. The machine-facing name lives in the element id and in the
 * structured data, where that vocabulary belongs; nothing is shown to a crawler that is not shown to a
 * reader, which is the line between being quotable and being penalised.
 */

const LABEL = {
  en: { heading: 'The short answer' },
  hi: { heading: 'संक्षेप में' },
} as const;

export function ToolTakeaway({ slug, locale }: { slug: string; locale: 'en' | 'hi' }) {
  const takeaway = getTakeaway(slug, locale);
  if (!takeaway) return null;

  const strings = LABEL[locale] ?? LABEL.en;

  // Letter-spaced small capitals are a Latin device. Devanagari has no capitals to set, and spacing it
  // out pulls apart conjuncts that are meant to touch, so the Hindi labels are set plainly instead.
  const labelType =
    locale === 'hi'
      ? 'text-caption font-semibold text-deepteal-500'
      : 'text-caption font-semibold uppercase tracking-[0.14em] text-deepteal-500';
  const factLabelType =
    locale === 'hi'
      ? 'text-caption font-semibold text-earth-400'
      : 'text-caption font-semibold uppercase tracking-[0.1em] text-earth-400';

  return (
    <section
      id="tldr"
      aria-labelledby="tldr-title"
      className="mt-8 rounded-2xl border border-deepteal-100 bg-gradient-to-br from-white to-cream-50 p-5 shadow-elevation-2 sm:p-8"
    >
      <h2
        id="tldr-title"
        className={labelType}
      >
        {strings.heading}
      </h2>

      {/*
        One thing leads. The lead is the answer; the three facts underneath support it and are
        deliberately quieter, so the eye lands on the sentence first.
      */}
      {/*
        Held to a readable measure rather than the full width of the card. On a wide screen the three
        facts below run the whole width and the answer does not, which is what stops the block reading
        as a uniform slab: the eye lands on the sentence first because it is the only thing shaped
        differently.
      */}
      <p className="mt-3 max-w-[60ch] text-[1.0625rem] font-medium leading-[1.6] text-deepteal-900 sm:text-[1.1875rem] sm:leading-[1.65]">
        {takeaway.lead}
      </p>

      <dl className="mt-5 grid gap-4 border-t border-deepteal-100/70 pt-5 sm:mt-7 sm:gap-6 sm:pt-6 sm:grid-cols-3">
        {takeaway.facts.map((fact) => (
          <div key={fact.label}>
            <dt className={factLabelType}>
              {fact.label}
            </dt>
            <dd className="mt-1.5 text-[0.9375rem] leading-relaxed text-earth-700">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
