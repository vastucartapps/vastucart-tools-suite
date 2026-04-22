import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import {
  CATEGORY_ORDER,
  categoryDisplayName,
  conceptPath,
  getConceptsByCategoryOrdered,
} from '@/lib/concepts';
import { ConceptsHubEntityGraph } from '@/components/seo/concept-graph';

// ISR: concepts corpus updates infrequently; cache for a day.
export const revalidate = 86400;

interface HubPageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: HubPageProps): Promise<Metadata> {
  const { locale } = await params;
  const title = 'Concepts — The Full Vedic, Numerology, Vāstu, and Tarot Corpus';
  const description =
    'Complete reference index of 138 Jyotiṣa (astrology), numerology, Vāstu, and tarot concepts — grahas, rāśis, nakshatras, tithis, bhāvas, doshas, yogas, kūṭas, vargas, and more — grounded in classical source tradition.';
  return {
    title,
    description,
    alternates: {
      canonical: locale === 'en' ? '/concepts' : `/${locale}/concepts`,
      languages: {
        en: '/concepts',
        hi: '/hi/concepts',
        'x-default': '/concepts',
      },
    },
  };
}

const CATEGORY_BLURB: Record<string, string> = {
  graha: 'The nine classical planets of Jyotiṣa — Sūrya through Ketu.',
  rashi: 'The twelve sidereal rāśis (zodiac signs), each 30° of the ecliptic.',
  nakshatra: 'The twenty-seven lunar mansions, each 13°20′ of the zodiac.',
  tithi: 'The sixteen tithis — fifteen lunar-phase days plus Pūrṇimā and Amāvāsyā.',
  bhava: 'The twelve houses, the classical domains of life.',
  dosha: 'Six classical afflictions read across Jyotiṣa and kūṭa registers.',
  yoga: 'Eleven classical yogas — Rāja, Dhana, Pañca-Mahāpuruṣa, and reversal-based configurations.',
  kuta: 'The Aṣṭa-kūṭa compatibility framework (thirty-six-point guṇa-milana).',
  varga: 'The sixteen classical Ṣoḍaśa-varga divisional charts (D-1 through D-60).',
  numerology: 'Nine numerology concepts — Indian Vedic aṅka-śāstra with Western Pythagorean and Chaldean references.',
  vastu: 'Four classical vāstu-śāstra concepts — from Vāstu-puruṣa-maṇḍala outward.',
  tarot: 'Eight Western tarot concepts — Major and Minor Arcana, suits, and the Rider–Waite–Smith deck.',
};

export default async function ConceptsHub({ params }: HubPageProps) {
  const { locale } = await params;

  // Assemble all 138 concepts in category-then-canonical-order for the ItemList.
  const orderedConcepts = CATEGORY_ORDER.flatMap((cat) => getConceptsByCategoryOrdered(cat));

  return (
    <>
      <ConceptsHubEntityGraph concepts={orderedConcepts} locale={locale} />
    <div className="max-w-5xl mx-auto px-4 py-10">
      <header className="mb-10 pb-6 border-b border-deepteal-100">
        <h1 className="text-4xl font-bold text-deepteal-900 mb-3">Concepts</h1>
        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl">
          The full reference corpus for VastuCart — 138 classical concepts across Jyotiṣa,
          numerology, vāstu, and tarot. Each page reports what the classical tradition says
          about the concept; interpretive decisions remain the reader&apos;s.
        </p>
      </header>

      {CATEGORY_ORDER.map((category) => {
        const concepts = getConceptsByCategoryOrdered(category);
        return (
          <section key={category} id={category} className="mb-12 scroll-mt-24">
            <div className="mb-4">
              <h2 className="text-2xl font-bold text-deepteal-800">
                {categoryDisplayName(category)}
                <span className="ml-2 text-sm font-normal text-gray-500">({concepts.length})</span>
              </h2>
              <p className="text-sm text-gray-600 mt-1">{CATEGORY_BLURB[category]}</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {concepts.map((c) => (
                <li key={c.slug}>
                  <Link
                    href={conceptPath(c)}
                    className="group block rounded-lg border border-deepteal-100 p-4 hover:border-warmaccent-300 hover:bg-warmaccent-50/30 transition-colors"
                  >
                    <div className="flex items-baseline justify-between gap-2 mb-1">
                      <span className="font-semibold text-deepteal-800 group-hover:text-warmaccent-700">
                        {c.name}
                      </span>
                      {c.devanagari && (
                        <span className="text-sm text-deepteal-500 font-hindi">{c.devanagari}</span>
                      )}
                    </div>
                    <p className="text-xs text-gray-600 leading-relaxed line-clamp-2">
                      {c.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
    </>
  );
}
