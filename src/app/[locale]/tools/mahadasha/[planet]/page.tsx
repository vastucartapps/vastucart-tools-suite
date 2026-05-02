import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { Link } from '@/i18n/navigation';
import { ArrowRight, BookOpen, Calculator, Calendar, ExternalLink, Gem, Heart, Sparkles } from 'lucide-react';

import { MahadashaPlanetEntityGraph } from '@/components/seo/entity-graph';
import { PRIMARY_AUTHOR } from '@/config/authors';
import { validateLocale } from '@/lib/utils/translations';
import {
  getAllPlanetSlugs,
  getPlanet,
  isValidPlanetSlug,
  estimateWordCount,
  type PlanetSlug,
} from '@/lib/astrology/mahadasha';
import { PLANET_DISPLAY_ORDER } from '@/lib/astrology/mahadasha';

const HERO_IMAGE = 'https://www.vastucart.in/og-default.png';

type Props = {
  params: Promise<{ locale: string; planet: string }>;
};

export async function generateStaticParams() {
  const locales = ['en', 'hi'] as const;
  const planets = getAllPlanetSlugs();
  return locales.flatMap((locale) =>
    planets.map((planet) => ({ locale, planet })),
  );
}

// ISR: planet pages are deterministic editorial content; revalidate hourly
// in case the planet record file is updated and redeployed.
export const revalidate = 3600;

function pageTitleFor(name: string, locale: 'en' | 'hi'): string {
  // Locale-aware sentence — keep title under 60 chars while including the
  // exact GSC query phrasing pattern ("Shani Mahadasha effects ...").
  if (locale === 'hi') {
    return `${name} — प्रभाव, उपाय एवं अंतर्दशा`;
  }
  return `${name} — Effects, Remedies & Antardasha Guide`;
}

function metaDescriptionFor(name: string, periodYears: number, locale: 'en' | 'hi'): string {
  if (locale === 'hi') {
    return `${name} (${periodYears} वर्ष) के पूर्ण प्रभाव, अंतर्दशा-दर-अंतर्दशा विश्लेषण, बारह भावों में फल, मन्त्र-रत्न-दान-व्रत-जीवनशैली के शास्त्रीय उपाय एवं अनुभवी ज्योतिषी की दृष्टि।`;
  }
  return `Complete effects of ${name} across ${periodYears} years, full antardasha-by-antardasha analysis, twelve-house results, classical mantra/gemstone/donation/vrata/lifestyle remedies, and consulting-grade interpretation.`;
}

function keywordsFor(planetName: string, periodYears: number, locale: 'en' | 'hi'): string[] {
  if (locale === 'hi') {
    return [
      planetName,
      `${planetName} के प्रभाव`,
      `${planetName} के उपाय`,
      `${planetName} अंतर्दशा`,
      `${planetName} ${periodYears} वर्ष`,
      'विंशोत्तरी महादशा',
      'वैदिक ज्योतिष',
    ];
  }
  return [
    planetName.toLowerCase(),
    `${planetName} effects`,
    `${planetName} remedies`,
    `${planetName} antardasha`,
    `${planetName} ${periodYears} years`,
    `${planetName} period`,
    'vimshottari mahadasha',
    'vedic astrology',
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, planet: rawPlanet } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  if (!isValidPlanetSlug(rawPlanet)) {
    return { title: 'Not Found' };
  }
  const planet = getPlanet(rawPlanet as PlanetSlug);
  const planetName = planet.displayName[locale];
  const title = pageTitleFor(planetName, locale);
  const description = metaDescriptionFor(planetName, planet.periodYears, locale);
  const keywords = keywordsFor(planetName, planet.periodYears, locale);

  return {
    title: { absolute: title },
    description,
    keywords,
    authors: [{ name: PRIMARY_AUTHOR.name, url: PRIMARY_AUTHOR.profileUrl }],
    creator: PRIMARY_AUTHOR.name,
    publisher: 'VastuCart',
    alternates: {
      canonical:
        locale === 'en'
          ? `/tools/mahadasha/${planet.slug}`
          : `/${locale}/tools/mahadasha/${planet.slug}`,
      languages: {
        en: `/tools/mahadasha/${planet.slug}`,
        hi: `/hi/tools/mahadasha/${planet.slug}`,
        'x-default': `/tools/mahadasha/${planet.slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url:
        locale === 'en'
          ? `https://www.vastucart.in/tools/mahadasha/${planet.slug}`
          : `https://www.vastucart.in/${locale}/tools/mahadasha/${planet.slug}`,
      siteName: 'VastuCart',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: title }],
      publishedTime: planet.datePublished,
      modifiedTime: planet.dateModified,
      authors: [PRIMARY_AUTHOR.profileUrl],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@vastucart',
      creator: '@vastucart',
      title,
      description,
      images: [HERO_IMAGE],
    },
  };
}

export default async function MahadashaPlanetPage({ params }: Props) {
  const { locale: rawLocale, planet: rawPlanet } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  if (!isValidPlanetSlug(rawPlanet)) notFound();

  const planet = getPlanet(rawPlanet as PlanetSlug);
  const planetName = planet.displayName[locale];
  const title = pageTitleFor(planetName, locale);
  const description = metaDescriptionFor(planetName, planet.periodYears, locale);
  const wordCount = estimateWordCount(planet, locale);
  const readingTimeMinutes = Math.max(8, Math.round(wordCount / 200));

  const calculatorHref = '/tools/mahadasha';
  const parentToolName = locale === 'hi' ? 'महादशा कैलकुलेटर' : 'Mahadasha Calculator';

  // Sibling planet rail — every planet except the current one, in display
  // order. Used both as internal link fan-out and as the user navigation
  // through the dasha sequence.
  const siblings = PLANET_DISPLAY_ORDER
    .filter((s) => s !== planet.slug)
    .map((s) => getPlanet(s));

  // FAQ + HowTo for JSON-LD: locale-flatten now so the entity graph
  // receives a simple array shape it already expects.
  const faqsForGraph = planet.faqs.map((f) => ({
    question: f.question[locale],
    answer: f.answer[locale],
  }));
  const howToForGraph = {
    name:
      locale === 'hi'
        ? `${planetName} — व्याख्या और उपाय कैसे लगाएँ`
        : `How to interpret and remedy ${planetName}`,
    description:
      locale === 'hi'
        ? `${planetName} को अपनी कुण्डली में चरण-दर-चरण समझने और उपाय लागू करने की विधि।`
        : `Step-by-step process to read ${planetName} in your natal chart and apply the right remedies.`,
    totalTimeMinutes: 30,
    steps: planet.howToSteps.map((s) => ({
      name: s.name[locale],
      text: s.text[locale],
    })),
  };

  // English-name label for the planet (Sanskrit slug → "Saturn (Shani)" style).
  const namePair =
    locale === 'hi'
      ? planetName
      : `${planetName} (${planet.westernName})`;

  return (
    <div className="min-h-screen bg-cream-50 pattern-zodiac-subtle">
      <MahadashaPlanetEntityGraph
        locale={locale}
        planetSlug={planet.slug}
        planetName={planetName}
        parentToolSlug="mahadasha"
        parentToolName={parentToolName}
        title={title}
        description={description}
        datePublished={planet.datePublished}
        dateModified={planet.dateModified}
        heroImageUrl={HERO_IMAGE}
        faqs={faqsForGraph}
        howTo={howToForGraph}
        articleSection={locale === 'hi' ? 'ज्योतिष' : 'Astrology'}
        keywords={keywordsFor(planetName, planet.periodYears, locale)}
        wordCount={wordCount}
        readingTimeMinutes={readingTimeMinutes}
        definedTerm={
          locale === 'hi'
            ? `${planetName} (विंशोत्तरी)`
            : `${planet.westernName} Vimshottari Mahadasha`
        }
      />

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
          <li className="flex items-center gap-2">
            <Link href={locale === 'en' ? '/' : '/hi'} className="hover:text-deepteal-600">
              {locale === 'hi' ? 'होम' : 'Home'}
            </Link>
            <span aria-hidden="true" className="text-gray-400">/</span>
          </li>
          <li className="flex items-center gap-2">
            <Link href="/tools" className="hover:text-deepteal-600">
              {locale === 'hi' ? 'टूल्स' : 'Tools'}
            </Link>
            <span aria-hidden="true" className="text-gray-400">/</span>
          </li>
          <li className="flex items-center gap-2">
            <Link href={calculatorHref} className="hover:text-deepteal-600">
              {parentToolName}
            </Link>
            <span aria-hidden="true" className="text-gray-400">/</span>
          </li>
          <li aria-current="page" className="text-deepteal-700 font-medium">
            {planetName}
          </li>
        </ol>
      </nav>

      <main className="container mx-auto px-4 pb-16 max-w-4xl">
        {/* Hero */}
        <header className="mb-10 text-center">
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 border rounded-full text-sm font-semibold"
            style={{
              backgroundColor: `${planet.themeColor.primary}1A`,
              borderColor: planet.themeColor.accent,
              color: planet.themeColor.primary,
            }}
          >
            <Sparkles className="w-4 h-4" />
            {locale === 'hi' ? 'विंशोत्तरी महादशा' : 'Vimshottari Mahadasha'} ·{' '}
            {planet.periodYears} {locale === 'hi' ? 'वर्ष' : 'years'}
          </div>
          <h1
            data-speakable
            className="text-3xl md:text-5xl font-bold text-deepteal-900 leading-tight mb-3"
          >
            {namePair}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-4">
            {planet.intro[locale].split('. ')[0]}.
          </p>
          {/* Reading-time + word-count signals — also emitted as Article
              wordCount and timeRequired in the JSON-LD graph. */}
          <div className="inline-flex items-center gap-3 text-sm text-gray-500 flex-wrap justify-center">
            <span className="inline-flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              {locale === 'hi'
                ? `${readingTimeMinutes} मिनट का पाठ`
                : `${readingTimeMinutes} min read`}
            </span>
            <span aria-hidden="true">·</span>
            <span>
              {locale === 'hi'
                ? `${wordCount.toLocaleString('hi-IN')} शब्द`
                : `${wordCount.toLocaleString('en-IN')} words`}
            </span>
            <span aria-hidden="true">·</span>
            <time dateTime={planet.dateModified}>
              {locale === 'hi' ? 'अद्यतन ' : 'Updated '}
              {new Date(planet.dateModified).toLocaleDateString(
                locale === 'hi' ? 'hi-IN' : 'en-IN',
                { year: 'numeric', month: 'short', day: 'numeric' }
              )}
            </time>
          </div>
        </header>

        {/* Author byline */}
        <div className="flex items-center gap-4 mb-10 p-4 bg-white border border-deepteal-100 rounded-xl shadow-sm">
          <Image
            src={PRIMARY_AUTHOR.image}
            alt={PRIMARY_AUTHOR.name}
            width={56}
            height={56}
            className="w-14 h-14 rounded-full object-cover border-2 border-deepteal-200 flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="text-xs uppercase tracking-wide text-gray-500 mb-0.5">
              {locale === 'hi' ? 'समीक्षा' : 'Reviewed by'}
            </div>
            <a
              href={PRIMARY_AUTHOR.profileUrl}
              target="_blank"
              rel="author noopener"
              className="text-deepteal-800 font-bold hover:text-warmaccent-700 inline-flex items-center gap-1"
            >
              {PRIMARY_AUTHOR.name}
              <ExternalLink className="w-3.5 h-3.5 opacity-60" />
            </a>
            <div className="text-sm text-gray-600">
              {PRIMARY_AUTHOR.jobTitle}
              {PRIMARY_AUTHOR.location ? ` · ${PRIMARY_AUTHOR.location}` : ''}
              {PRIMARY_AUTHOR.yearsExperience
                ? ` · ${PRIMARY_AUTHOR.yearsExperience}+ ${locale === 'hi' ? 'वर्ष' : 'yrs'}`
                : ''}
            </div>
          </div>
        </div>

        {/* Quick facts grid */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
          <FactCard
            label={locale === 'hi' ? 'अवधि' : 'Period'}
            value={`${planet.periodYears} ${locale === 'hi' ? 'वर्ष' : 'yrs'}`}
          />
          <FactCard
            label={locale === 'hi' ? 'दिवस' : 'Day'}
            value={planet.weekday[locale]}
          />
          <FactCard
            label={locale === 'hi' ? 'रत्न' : 'Gem'}
            value={planet.gemstone[locale]}
          />
          <FactCard
            label={locale === 'hi' ? 'देवता' : 'Deity'}
            value={planet.deity[locale]}
          />
        </section>

        <div className="prose prose-lg max-w-none">
          {/* Overview */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8">
            <h2 className="text-2xl font-bold text-deepteal-800 mb-4 not-prose">
              {locale === 'hi' ? 'अवलोकन' : 'Overview'}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">{planet.intro[locale]}</p>
            <p className="text-gray-700 leading-relaxed">{planet.periodOverview[locale]}</p>
          </section>

          {/* Karaka and dignity */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-deepteal-800 mb-4">
              {locale === 'hi' ? 'कारकत्व एवं स्थिति-बल' : 'Karaka & Positional Strength'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-deepteal-700 mb-2">
                  {locale === 'hi' ? 'कारक' : 'Significations'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {planet.karaka[locale].map((k) => (
                    <span
                      key={k}
                      className="px-3 py-1 bg-deepteal-50 text-deepteal-800 rounded-full text-sm border border-deepteal-200"
                    >
                      {k}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-deepteal-700 mb-2">
                  {locale === 'hi' ? 'स्थिति विशेष' : 'Dignity Reference'}
                </h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>
                    <strong>{locale === 'hi' ? 'स्वराशि' : 'Own Sign'}:</strong>{' '}
                    {planet.ownSigns.join(', ')}
                  </li>
                  <li>
                    <strong>{locale === 'hi' ? 'उच्च' : 'Exalted'}:</strong>{' '}
                    {planet.exaltation.sign} {planet.exaltation.degree}°
                  </li>
                  <li>
                    <strong>{locale === 'hi' ? 'नीच' : 'Debilitated'}:</strong>{' '}
                    {planet.debilitation.sign} {planet.debilitation.degree}°
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Well-placed */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-green-200 mb-8">
            <h2 className="text-2xl font-bold text-green-800 mb-4 not-prose">
              {locale === 'hi' ? 'बलवान स्थिति में फल' : 'When the Planet is Well-Placed'}
            </h2>
            <p className="text-gray-700 leading-relaxed">{planet.wellPlacedEffects[locale]}</p>
          </section>

          {/* Afflicted */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-amber-200 mb-8">
            <h2 className="text-2xl font-bold text-amber-800 mb-4 not-prose">
              {locale === 'hi' ? 'पीड़ित स्थिति में फल' : 'When the Planet is Afflicted'}
            </h2>
            <p className="text-gray-700 leading-relaxed">{planet.afflictedEffects[locale]}</p>
          </section>

          {/* House-by-house */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-deepteal-800 mb-6">
              {locale === 'hi' ? 'बारह भावों में फल' : 'Effects in Each of the Twelve Houses'}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {planet.houseEffects.map((h) => (
                <div key={h.house} className="border-l-4 border-deepteal-300 pl-4 py-2">
                  <h3 className="font-bold text-deepteal-700 mb-1">
                    {locale === 'hi' ? `${h.house}वाँ भाव` : `House ${h.house}`}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{h.effect[locale]}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Antardashas */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-deepteal-800 mb-2">
              {locale === 'hi' ? 'अंतर्दशा-दर-अंतर्दशा विश्लेषण' : 'Antardasha-by-Antardasha Analysis'}
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              {locale === 'hi'
                ? 'महादशा के भीतर नौ उप-काल — प्रत्येक का अपना ग्रह-स्वामी और स्वर।'
                : 'Within the mahadasha there are nine sub-periods — each carries its own planetary lord and mood.'}
            </p>
            <div className="space-y-5">
              {planet.antardashas.map((a) => (
                <div
                  key={a.subRuler}
                  className="border border-deepteal-100 rounded-xl p-5 bg-cream-50/30"
                >
                  <div className="flex items-baseline justify-between gap-3 mb-2 flex-wrap">
                    <h3 className="font-bold text-deepteal-800 text-lg">
                      {a.label[locale]}
                    </h3>
                    <span className="text-xs uppercase tracking-wide text-deepteal-600 bg-white px-2 py-0.5 rounded border border-deepteal-200">
                      <Calendar className="w-3 h-3 inline mr-1 -mt-0.5" />
                      {a.duration[locale]}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{a.effect[locale]}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Remedies */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-deepteal-800 mb-2 flex items-center gap-2">
              <Gem className="w-6 h-6 text-warmaccent-500" />
              {locale === 'hi' ? 'शास्त्रीय उपाय' : 'Classical Remedies'}
            </h2>
            <p className="text-gray-600 mb-6 text-sm">
              {locale === 'hi'
                ? 'मन्त्र, रत्न, दान, व्रत, और जीवन-शैली — पाँच परस्पर मिश्रित परतें।'
                : 'Mantra, gemstone, donation, observance, and lifestyle — five layered practices.'}
            </p>
            <div className="space-y-6">
              {planet.remedies.map((r) => (
                <div key={r.title.en} className="border-l-4 border-warmaccent-300 pl-5">
                  <h3 className="font-bold text-warmaccent-800 mb-2 text-lg">
                    {r.title[locale]}
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed">{r.body[locale]}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Case patterns */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8">
            <h2 className="text-2xl font-bold text-deepteal-800 mb-4 not-prose flex items-center gap-2">
              <Heart className="w-6 h-6 text-warmaccent-500" />
              {locale === 'hi' ? 'अनुभव से देखे गए स्वरूप' : 'Patterns Observed in Practice'}
            </h2>
            <p className="text-gray-700 leading-relaxed">{planet.casePatterns[locale]}</p>
          </section>

          {/* CTA back to calculator */}
          <section className="bg-gradient-to-br from-deepteal-600 to-deepteal-800 rounded-2xl p-8 md:p-10 text-white text-center shadow-xl mb-8 not-prose">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {locale === 'hi'
                ? 'अपनी विंशोत्तरी समय-रेखा देखें'
                : 'See Your Own Vimshottari Timeline'}
            </h2>
            <p className="text-deepteal-100 mb-6 max-w-xl mx-auto">
              {locale === 'hi'
                ? `अपनी जन्म तिथि से देखें कि आपकी ${planetName} कब आरम्भ होगी, कब समाप्त, और भीतर कौन-सी अंतर्दशाएँ चलेंगी।`
                : `Use your date, time, and place of birth to see exactly when your ${planetName} begins, ends, and which antardashas you will run within it.`}
            </p>
            <Link
              href={calculatorHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-deepteal-800 font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Calculator className="w-5 h-5" />
              {locale === 'hi' ? 'कैलकुलेटर खोलें' : 'Open the Calculator'}
            </Link>
          </section>

          {/* Sibling planets — internal link rail */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-deepteal-800 mb-4">
              {locale === 'hi' ? 'अन्य ग्रहों की महादशा' : 'Other Planet Mahadashas'}
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {siblings.map((s) => (
                <Link
                  key={s.slug}
                  href={`/tools/mahadasha/${s.slug}`}
                  className="group flex items-center justify-between gap-2 px-4 py-3 rounded-xl border-2 border-deepteal-200 bg-cream-50 hover:border-warmaccent-400 hover:bg-white hover:shadow-md transition-all"
                >
                  <div className="min-w-0">
                    <div className="font-bold text-deepteal-700 group-hover:text-warmaccent-600 truncate">
                      {s.displayName[locale]}
                    </div>
                    <div className="text-xs text-gray-500">
                      {s.periodYears} {locale === 'hi' ? 'वर्ष' : 'yrs'}
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-warmaccent-600 group-hover:translate-x-0.5 transition-transform flex-shrink-0" />
                </Link>
              ))}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-deepteal-800 mb-6">
              {locale === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-4">
              {planet.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border-b border-deepteal-100 pb-4 last:border-0 last:pb-0"
                >
                  <summary className="cursor-pointer font-semibold text-deepteal-800 py-2 list-none flex items-center justify-between gap-4">
                    <span>{faq.question[locale]}</span>
                    <ArrowRight className="w-4 h-4 text-deepteal-400 transition-transform group-open:rotate-90 flex-shrink-0" />
                  </summary>
                  <p className="text-gray-700 leading-relaxed mt-3">{faq.answer[locale]}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

function FactCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-white rounded-xl p-3 border border-deepteal-100 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-gray-500 mb-1">{label}</div>
      <div className="font-semibold text-deepteal-800 text-sm">{value}</div>
    </div>
  );
}
