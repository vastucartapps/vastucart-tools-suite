import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, Calculator, ExternalLink, Heart, Sparkles, Star, TrendingUp } from 'lucide-react';

import { NumberMeaningEntityGraph } from '@/components/seo/entity-graph';
import { PRIMARY_AUTHOR } from '@/config/authors';
import { validateLocale } from '@/lib/utils/translations';
import {
  allNumberPageParams,
  buildFaqsFor,
  estimatedWordCount,
  getMeaning,
  isMasterNumber,
  keywordsFor,
  metaDescriptionFor,
  pageTitleFor,
  parseLifePathParam,
  LIFE_PATH_NUMBERS,
} from '@/lib/numerology/life-path-pages';

const HERO_IMAGE = 'https://www.vastucart.in/images/blog/life-path-number/hero.webp';
const PUBLISHED_AT = '2025-01-15T00:00:00.000Z';
const UPDATED_AT = '2026-04-14T00:00:00.000Z';

type Props = {
  params: Promise<{ locale: string; number: string }>;
};

export async function generateStaticParams() {
  const locales = ['en', 'hi'] as const;
  return locales.flatMap((locale) =>
    allNumberPageParams().map((p) => ({ locale, number: p.number })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, number: rawNumber } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const n = parseLifePathParam(rawNumber);
  if (n === null) {
    return { title: 'Not Found' };
  }
  const meaning = getMeaning(n);
  const title = pageTitleFor(n, meaning, locale);
  const description = metaDescriptionFor(meaning, locale);
  const keywords = keywordsFor(n, locale);

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
          ? `/tools/life-path-number/${n}`
          : `/${locale}/tools/life-path-number/${n}`,
      languages: {
        en: `/tools/life-path-number/${n}`,
        hi: `/hi/tools/life-path-number/${n}`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'article',
      url:
        locale === 'en'
          ? `https://www.vastucart.in/tools/life-path-number/${n}`
          : `https://www.vastucart.in/${locale}/tools/life-path-number/${n}`,
      siteName: 'VastuCart',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
      images: [{ url: HERO_IMAGE, width: 1200, height: 630, alt: title }],
      publishedTime: PUBLISHED_AT,
      modifiedTime: UPDATED_AT,
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

export default async function LifePathNumberMeaningPage({ params }: Props) {
  const { locale: rawLocale, number: rawNumber } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const n = parseLifePathParam(rawNumber);
  if (n === null) notFound();

  const meaning = getMeaning(n);
  const title = pageTitleFor(n, meaning, locale);
  const description = metaDescriptionFor(meaning, locale);
  const faqs = buildFaqsFor(n, meaning, locale);
  const wordCount = estimatedWordCount(meaning, locale);
  const calculatorHref =
    locale === 'en' ? '/tools/life-path-number' : `/${locale}/tools/life-path-number`;

  const parentToolName = locale === 'hi' ? 'जीवन पथ संख्या कैलकुलेटर' : 'Life Path Number Calculator';
  const numberLabel = locale === 'hi' ? `मूलांक ${n}` : `Life Path ${n}`;

  const positives = meaning.positiveTraits.map((t) => t[locale]);
  const negatives = meaning.negativeTraits.map((t) => t[locale]);
  const careers = meaning.careers.map((c) => c[locale]);

  return (
    <div className="min-h-screen bg-cream-50 pattern-zodiac-subtle">
      <NumberMeaningEntityGraph
        locale={locale}
        parentToolSlug="life-path-number"
        parentToolName={parentToolName}
        categoryName={locale === 'hi' ? 'अंकशास्त्र' : 'Numerology'}
        numberLabel={numberLabel}
        pagePath={`/tools/life-path-number/${n}`}
        title={title}
        description={description}
        datePublished={PUBLISHED_AT}
        dateModified={UPDATED_AT}
        heroImageUrl={HERO_IMAGE}
        faqs={faqs}
        articleSection={locale === 'hi' ? 'अंकशास्त्र' : 'Numerology'}
        keywords={keywordsFor(n, locale)}
        wordCount={wordCount}
        readingTimeMinutes={Math.max(4, Math.round(wordCount / 200))}
        definedTerm={locale === 'hi' ? `मूलांक ${n}` : `Life Path Number ${n}`}
      />

      {/* Breadcrumb */}
      <nav className="container mx-auto px-4 py-4" aria-label="Breadcrumb">
        <ol className="flex items-center gap-2 text-sm text-gray-600 flex-wrap">
          <li>
            <Link href={locale === 'en' ? '/' : '/hi'} className="hover:text-deepteal-600">
              {locale === 'hi' ? 'होम' : 'Home'}
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link
              href={locale === 'en' ? '/tools' : '/hi/tools'}
              className="hover:text-deepteal-600"
            >
              {locale === 'hi' ? 'टूल्स' : 'Tools'}
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li>
            <Link href={calculatorHref} className="hover:text-deepteal-600">
              {parentToolName}
            </Link>
          </li>
          <li className="text-gray-400">/</li>
          <li className="text-deepteal-700 font-medium">{numberLabel}</li>
        </ol>
      </nav>

      <main className="container mx-auto px-4 pb-16 max-w-4xl">
        {/* Hero */}
        <header className="mb-10 text-center">
          {isMasterNumber(n) && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-4 bg-gradient-to-r from-warmaccent-100 to-amber-100 border border-warmaccent-300 rounded-full text-warmaccent-800 text-sm font-semibold">
              <Sparkles className="w-4 h-4" />
              {locale === 'hi' ? 'मास्टर नंबर' : 'Master Number'}
            </div>
          )}
          <div className="inline-flex items-center justify-center w-32 h-32 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-deepteal-600 to-deepteal-800 shadow-xl">
            <span className="text-7xl font-bold text-white">{n}</span>
          </div>
          <h1
            data-speakable
            className="text-3xl md:text-5xl font-bold text-deepteal-900 leading-tight mb-3"
          >
            {locale === 'hi'
              ? `मूलांक ${n}: ${meaning.title.hi}`
              : `Life Path Number ${n}: ${meaning.title.en}`}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {locale === 'hi'
              ? 'अंकशास्त्र के प्राचीन शास्त्रों पर आधारित।'
              : 'Grounded in classical numerology and reviewed by a practicing Vedic astrologer.'}
          </p>
        </header>

        {/* Author byline — same shape as blog posts, with author backlink */}
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
              {locale === 'hi' ? 'लेखक' : 'Reviewed by'}
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

        <div className="prose prose-lg max-w-none">
          {/* Overview */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8">
            <h2 className="text-2xl font-bold text-deepteal-800 mb-4 not-prose">
              {locale === 'hi' ? 'अवलोकन' : 'Overview'}
            </h2>
            <p className="text-gray-700 leading-relaxed">{meaning.overview[locale]}</p>
          </section>

          {/* Positive + Negative traits */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-4 flex items-center gap-2">
                <Star className="w-5 h-5" />
                {locale === 'hi' ? 'सकारात्मक गुण' : 'Positive Traits'}
              </h3>
              <ul className="space-y-2">
                {positives.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-gray-700">
                    <span className="text-green-500 mt-1">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-amber-200">
              <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                {locale === 'hi' ? 'सावधानी योग्य प्रवृत्तियाँ' : 'Shadow Tendencies'}
              </h3>
              <ul className="space-y-2">
                {negatives.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-gray-700">
                    <span className="text-amber-500 mt-1">•</span>
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Careers */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-deepteal-800 mb-4">
              {locale === 'hi' ? 'उपयुक्त करियर' : 'Career Paths'}
            </h2>
            <div className="flex flex-wrap gap-2">
              {careers.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 bg-deepteal-50 text-deepteal-800 rounded-full font-medium border border-deepteal-200"
                >
                  {c}
                </span>
              ))}
            </div>
          </section>

          {/* Love + Money */}
          {meaning.loveRelationships && (
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8">
              <h2 className="text-2xl font-bold text-deepteal-800 mb-4 not-prose flex items-center gap-2">
                <Heart className="w-6 h-6 text-warmaccent-500" />
                {locale === 'hi' ? 'प्रेम और रिश्ते' : 'Love & Relationships'}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {meaning.loveRelationships[locale]}
              </p>
            </section>
          )}

          {meaning.moneyWork && (
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8">
              <h2 className="text-2xl font-bold text-deepteal-800 mb-4 not-prose">
                {locale === 'hi' ? 'करियर और धन' : 'Career & Money'}
              </h2>
              <p className="text-gray-700 leading-relaxed">{meaning.moneyWork[locale]}</p>
            </section>
          )}

          {/* Life phases */}
          {meaning.lifePhases && (
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8 not-prose">
              <h2 className="text-2xl font-bold text-deepteal-800 mb-6">
                {locale === 'hi' ? 'जीवन के चरण' : 'Life Phases Timeline'}
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-green-400 pl-4">
                  <h3 className="font-bold text-green-700 mb-1">
                    {locale === 'hi' ? 'युवावस्था (0–28 वर्ष)' : 'Youth (0–28 years)'}
                  </h3>
                  <p className="text-gray-600 text-sm">{meaning.lifePhases.youth[locale]}</p>
                </div>
                <div className="border-l-4 border-deepteal-400 pl-4">
                  <h3 className="font-bold text-deepteal-700 mb-1">
                    {locale === 'hi' ? 'प्रमुख वर्ष (29–56)' : 'Prime Years (29–56)'}
                  </h3>
                  <p className="text-gray-600 text-sm">{meaning.lifePhases.adult[locale]}</p>
                </div>
                <div className="border-l-4 border-amber-400 pl-4">
                  <h3 className="font-bold text-amber-700 mb-1">
                    {locale === 'hi' ? 'ज्ञान वर्ष (57+)' : 'Wisdom Years (57+)'}
                  </h3>
                  <p className="text-gray-600 text-sm">{meaning.lifePhases.mature[locale]}</p>
                </div>
              </div>
            </section>
          )}

          {/* Famous people */}
          {meaning.celebrities.length > 0 && (
            <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8 not-prose">
              <h2 className="text-2xl font-bold text-deepteal-800 mb-4">
                {locale === 'hi'
                  ? `मूलांक ${n} वाली प्रसिद्ध हस्तियाँ`
                  : `Famous People with Life Path ${n}`}
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {meaning.celebrities.map((c) => (
                  <li
                    key={c.name}
                    className="flex items-start gap-3 p-3 bg-cream-50 rounded-xl border border-deepteal-100"
                  >
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-deepteal-200 to-deepteal-400 flex items-center justify-center text-white font-bold flex-shrink-0">
                      {c.name.charAt(0)}
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold text-deepteal-800 truncate">{c.name}</div>
                      <div className="text-sm text-gray-600 truncate">{c.profession}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Compatible numbers — internal link fan-out */}
          <section className="bg-gradient-to-br from-deepteal-50 to-cream-50 rounded-2xl p-6 md:p-8 border border-deepteal-200 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-deepteal-800 mb-4">
              {locale === 'hi'
                ? `मूलांक ${n} के लिए संगत संख्याएँ`
                : `Compatible Numbers for Life Path ${n}`}
            </h2>
            <p className="text-gray-600 mb-6">
              {locale === 'hi'
                ? 'इन मूलांकों के साथ स्वाभाविक सामंजस्य है। अधिक जानने के लिए क्लिक करें।'
                : 'These Life Paths share natural harmony. Click through to explore each one in depth.'}
            </p>
            <div className="flex flex-wrap gap-3">
              {meaning.compatibleNumbers.map((c) => (
                <Link
                  key={c}
                  href={
                    locale === 'en'
                      ? `/tools/life-path-number/${c}`
                      : `/${locale}/tools/life-path-number/${c}`
                  }
                  className="group flex items-center gap-2 px-5 py-3 bg-white rounded-xl border-2 border-deepteal-200 hover:border-warmaccent-400 hover:shadow-md transition-all"
                >
                  <span className="text-2xl font-bold text-deepteal-700 group-hover:text-warmaccent-600">
                    {c}
                  </span>
                  <span className="text-sm text-gray-600 group-hover:text-deepteal-700">
                    {locale === 'hi' ? 'मूलांक' : 'Life Path'} {c}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-warmaccent-600 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              ))}
            </div>
          </section>

          {/* CTA back to calculator */}
          <section className="bg-gradient-to-br from-deepteal-600 to-deepteal-800 rounded-2xl p-8 md:p-10 text-white text-center shadow-xl mb-8 not-prose">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              {locale === 'hi'
                ? 'अपना स्वयं का मूलांक ज्ञात करें'
                : 'Calculate Your Own Life Path Number'}
            </h2>
            <p className="text-deepteal-100 mb-6 max-w-xl mx-auto">
              {locale === 'hi'
                ? 'अपनी जन्म तिथि से अपना मूलांक पता करें और अपनी जीवन यात्रा की पूरी तस्वीर देखें।'
                : 'Use our free calculator to discover your own Life Path Number from your date of birth and see what it reveals about your journey.'}
            </p>
            <Link
              href={calculatorHref}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-deepteal-800 font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <Calculator className="w-5 h-5" />
              {locale === 'hi' ? 'कैलकुलेटर खोलें' : 'Open the Calculator'}
            </Link>
          </section>

          {/* Explore every number */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-deepteal-800 mb-4">
              {locale === 'hi' ? 'हर मूलांक के बारे में जानें' : 'Explore Every Life Path Number'}
            </h2>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2">
              {LIFE_PATH_NUMBERS.map((num) => {
                const isCurrent = num === n;
                return (
                  <Link
                    key={num}
                    href={
                      locale === 'en'
                        ? `/tools/life-path-number/${num}`
                        : `/${locale}/tools/life-path-number/${num}`
                    }
                    aria-current={isCurrent ? 'page' : undefined}
                    className={`aspect-square flex items-center justify-center rounded-xl font-bold text-xl transition-all ${
                      isCurrent
                        ? 'bg-gradient-to-br from-deepteal-600 to-deepteal-800 text-white shadow-lg'
                        : 'bg-cream-50 text-deepteal-700 border border-deepteal-200 hover:border-warmaccent-400 hover:text-warmaccent-700'
                    }`}
                  >
                    {num}
                  </Link>
                );
              })}
            </div>
          </section>

          {/* FAQ */}
          <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8 not-prose">
            <h2 className="text-2xl font-bold text-deepteal-800 mb-6">
              {locale === 'hi' ? 'अक्सर पूछे जाने वाले प्रश्न' : 'Frequently Asked Questions'}
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group border-b border-deepteal-100 pb-4 last:border-0 last:pb-0"
                >
                  <summary className="cursor-pointer font-semibold text-deepteal-800 py-2 list-none flex items-center justify-between">
                    {faq.question}
                    <ArrowRight className="w-4 h-4 text-deepteal-400 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="text-gray-700 leading-relaxed mt-3">{faq.answer}</p>
                </details>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
