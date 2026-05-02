import { Link } from '@/i18n/navigation';
import { ArrowRight } from 'lucide-react';
import { getAllPlanets } from '@/lib/astrology/mahadasha';

interface Props {
  locale: 'en' | 'hi';
}

/**
 * Planet rail for the /tools/mahadasha hub. Shows all nine planets with
 * their dasha length and a one-line teaser, each linking to the
 * respective /tools/mahadasha/[planet] page. The rail provides reciprocal
 * internal linking — every planet detail page links back here, every hub
 * visit shows all nine targets — so Google can crawl the cluster fully
 * with shallow link depth.
 */
export function PlanetRail({ locale }: Props) {
  const planets = getAllPlanets();

  return (
    <section className="mt-12 bg-white rounded-2xl p-6 md:p-8 shadow-card border border-deepteal-100">
      <header className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-2">
          {locale === 'hi'
            ? 'प्रत्येक ग्रह की महादशा'
            : 'Every Planet\'s Mahadasha — Read in Depth'}
        </h2>
        <p className="text-gray-600">
          {locale === 'hi'
            ? 'नौ ग्रहों की विंशोत्तरी महादशा का पूर्ण विश्लेषण — प्रभाव, अंतर्दशाएँ, बारह भावों में फल, और शास्त्रीय उपाय।'
            : 'Full bilingual analysis of all nine Vimshottari Mahadashas — effects, antardashas, twelve-house results, and classical remedies.'}
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {planets.map((p) => {
          const intro = p.intro[locale];
          // First sentence as the teaser — preserves authorship voice
          // without extra editorial work per planet.
          const teaser = intro.split(/(?<=[.।])\s+/)[0];
          return (
            <Link
              key={p.slug}
              href={`/tools/mahadasha/${p.slug}`}
              className="group block p-5 rounded-xl border-2 border-deepteal-100 bg-cream-50/40 hover:border-warmaccent-400 hover:bg-white hover:shadow-md transition-all"
              style={{
                borderTopColor: p.themeColor.accent,
                borderTopWidth: '4px',
              }}
            >
              <div className="flex items-baseline justify-between gap-2 mb-2">
                <h3 className="font-bold text-deepteal-800 text-lg group-hover:text-warmaccent-700">
                  {p.displayName[locale]}
                </h3>
                <span className="text-xs uppercase tracking-wide text-deepteal-600 bg-white px-2 py-0.5 rounded border border-deepteal-200 flex-shrink-0">
                  {p.periodYears} {locale === 'hi' ? 'वर्ष' : 'yrs'}
                </span>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed mb-3">
                {teaser}
              </p>
              <div className="text-sm text-warmaccent-700 font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                {locale === 'hi' ? 'पूर्ण लेख पढ़ें' : 'Read full guide'}
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
