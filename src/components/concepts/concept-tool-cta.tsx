/**
 * Concept → Tool CTA.
 *
 * Most concepts in the 138-entry corpus map to a calculator. Surface that
 * mapping as an inline "Try the Calculator" card between the concept's
 * description and its body. Two reasons:
 *   1. Reader intent — someone reading about Rohiṇī-nakṣatra probably
 *      wants to check their own nakṣatra next; the CTA shortens the path.
 *   2. PageRank flow — concept pages carry most of the site's original
 *      long-form content, and linking from them into the tool routes
 *      concentrates internal-link equity on the calculator pages, which
 *      are the ranking targets for head-term queries.
 *
 * When a concept has no obvious matching tool (e.g., pañca-bhūtas,
 * grahaṇa-doṣa) the component renders nothing — never render a broken
 * or irrelevant CTA.
 */
import { Link } from '@/i18n/navigation';
import { Calculator, ArrowRight } from 'lucide-react';
import type { Concept, ConceptCategory } from '@/lib/concepts';

interface ToolMatch {
  slug: string;
  labelEn: string;
  labelHi: string;
}

/**
 * Resolve a concept to its best-fit calculator slug. Returns null when no
 * strong match exists. Category-level defaults (all nakṣatras → the
 * Nakṣatra finder, all grahas → Kuṇḍalī, etc.) live here as fallbacks,
 * with slug-level overrides for concepts that have their own dedicated
 * tool (Life Path, Destiny, Maṅgala-doṣa, Sāḍe-sātī, etc.).
 */
function resolveToolForConcept(slug: string, category: ConceptCategory): ToolMatch | null {
  // Exact slug → tool-slug matches first. These concepts have dedicated
  // calculators that share the same slug or close variant.
  const EXACT: Record<string, ToolMatch> = {
    'life-path-number':      { slug: 'life-path-number',     labelEn: 'Life Path Number Calculator',     labelHi: 'मूलांक कैलकुलेटर' },
    'destiny-number':        { slug: 'destiny-number',       labelEn: 'Destiny Number Calculator',       labelHi: 'भाग्यांक कैलकुलेटर' },
    'birthday-number':       { slug: 'life-path-number',     labelEn: 'Life Path Number Calculator',     labelHi: 'मूलांक कैलकुलेटर' },
    'master-numbers':        { slug: 'life-path-number',     labelEn: 'Life Path Number Calculator',     labelHi: 'मूलांक कैलकुलेटर' },
    'soul-urge-number':      { slug: 'destiny-number',       labelEn: 'Destiny Number Calculator',       labelHi: 'भाग्यांक कैलकुलेटर' },
    'expression-number':     { slug: 'destiny-number',       labelEn: 'Destiny Number Calculator',       labelHi: 'भाग्यांक कैलकुलेटर' },
    'chaldean-numerology':   { slug: 'chaldean-numerology',  labelEn: 'Chaldean Numerology Calculator',  labelHi: 'चैल्डियन अंकशास्त्र कैलकुलेटर' },
    'pythagorean-numerology':{ slug: 'chaldean-numerology',  labelEn: 'Name Numerology Calculator',      labelHi: 'नाम-अंक कैलकुलेटर' },
    'lo-shu-grid':           { slug: 'lo-shu-grid',          labelEn: 'Lo Shu Grid Calculator',          labelHi: 'लो-शू ग्रिड कैलकुलेटर' },
    'mangal-dosha':          { slug: 'manglik',              labelEn: 'Maṅgala Doṣa Calculator',         labelHi: 'मंगल दोष कैलकुलेटर' },
    'kaal-sarp-dosha':       { slug: 'kalsarp-dosha',        labelEn: 'Kāla-Sarpa Doṣa Calculator',      labelHi: 'काल-सर्प दोष कैलकुलेटर' },
    'pitra-dosha':           { slug: 'pitra-dosha',          labelEn: 'Pitṛ Doṣa Calculator',            labelHi: 'पितृ दोष कैलकुलेटर' },
    'sade-sati':             { slug: 'sade-sati',            labelEn: 'Sāḍe-Sātī Calculator',            labelHi: 'साढ़े-साती कैलकुलेटर' },
    'nadi-dosha':            { slug: 'marriage-matching',    labelEn: 'Marriage Matching Calculator',    labelHi: 'विवाह मिलान कैलकुलेटर' },
    'raj-yoga':              { slug: 'raj-yoga',             labelEn: 'Rāja-Yoga Calculator',            labelHi: 'राज-योग कैलकुलेटर' },
    'vastu-purusha-mandala': { slug: 'room-advisor',         labelEn: 'Vāstu Room Advisor',              labelHi: 'वास्तु कक्ष सलाहकार' },
    'brahmasthana':          { slug: 'room-advisor',         labelEn: 'Vāstu Room Advisor',              labelHi: 'वास्तु कक्ष सलाहकार' },
    'eight-directions':      { slug: 'room-advisor',         labelEn: 'Vāstu Room Advisor',              labelHi: 'वास्तु कक्ष सलाहकार' },
  };
  if (EXACT[slug]) return EXACT[slug];

  // Category-level fallbacks. These apply when the concept has no
  // dedicated tool but fits a broader calculator in the same domain.
  switch (category) {
    case 'nakshatra':
      return { slug: 'nakshatra', labelEn: 'Nakṣatra Finder', labelHi: 'नक्षत्र खोजक' };
    case 'graha':
      return { slug: 'kundli', labelEn: 'Generate Your Kuṇḍalī', labelHi: 'जन्म कुंडली बनाएँ' };
    case 'rashi':
      return { slug: 'moon-sign', labelEn: 'Moon-Sign (Rāśi) Calculator', labelHi: 'चंद्र-राशि कैलकुलेटर' };
    case 'bhava':
      return { slug: 'kundli', labelEn: 'Generate Your Kuṇḍalī', labelHi: 'जन्म कुंडली बनाएँ' };
    case 'tithi':
      return { slug: 'muhurat-finder', labelEn: 'Muhūrta Finder', labelHi: 'मुहूर्त खोजक' };
    case 'yoga':
      return { slug: 'yoga-calculator', labelEn: 'Yoga Calculator', labelHi: 'योग कैलकुलेटर' };
    case 'kuta':
      return { slug: 'marriage-matching', labelEn: 'Marriage Matching (Kūṭa Milāpaka)', labelHi: 'विवाह मिलान (कूट मिलापक)' };
    case 'varga':
      return { slug: 'kundli', labelEn: 'Generate Your Kuṇḍalī', labelHi: 'जन्म कुंडली बनाएँ' };
    case 'dosha':
    case 'numerology':
    case 'vastu':
    case 'tarot':
      return null;
  }
}

export function ConceptToolCTA({
  concept,
  locale,
}: {
  concept: Concept;
  locale: 'en' | 'hi';
}) {
  const match = resolveToolForConcept(concept.slug, concept.category);
  if (!match) return null;

  const label = locale === 'hi' ? match.labelHi : match.labelEn;
  const leadIn =
    locale === 'hi'
      ? 'अपनी व्यक्तिगत गणना के लिए:'
      : 'Run your own calculation:';
  const cta = locale === 'hi' ? 'अभी आज़माएँ' : 'Open the calculator';

  return (
    <aside className="mb-8 rounded-2xl border border-deepteal-200 bg-gradient-to-br from-deepteal-50 to-cream-50 p-5 md:p-6 shadow-elevation-1">
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 flex items-center justify-center shadow-sm">
          <Calculator className="w-5 h-5 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-xs font-medium tracking-wide uppercase text-deepteal-700 mb-1">
            {leadIn}
          </p>
          <Link
            href={`/tools/${match.slug}`}
            className="group inline-flex items-center gap-1.5 font-semibold text-deepteal-900 hover:text-deepteal-700 text-lg"
          >
            {label}
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <p className="mt-1 text-sm text-gray-600">
            {cta}
            <span className="mx-1.5 text-gray-300">·</span>
            <span>
              {locale === 'hi' ? 'निःशुल्क' : 'Free'}
              <span className="mx-1.5 text-gray-300">·</span>
              {locale === 'hi' ? 'कोई लॉगिन नहीं' : 'No signup'}
            </span>
          </p>
        </div>
      </div>
    </aside>
  );
}
