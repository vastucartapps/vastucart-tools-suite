import type { Metadata } from 'next';
import { Link } from '@/i18n/navigation';
import { notFound } from 'next/navigation';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Mail,
  ScrollText,
  Users,
} from 'lucide-react';

import { VASTUCART_EDITORIAL, type Author } from '@/config/authors';
import { validateLocale } from '@/lib/utils/translations';
import {
  EntityGraph,
  buildOrganizationNode,
  buildWebSiteNode,
  buildWebPageNode,
  buildBreadcrumbListNode,
  buildSpeakableNode,
  localeUrl,
} from '@/components/seo/entity-graph';

const KNOWN_AUTHORS: Record<string, Author> = {
  'vastucart-editorial': VASTUCART_EDITORIAL,
};

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const locales = ['en', 'hi'] as const;
  return locales.flatMap((locale) =>
    Object.keys(KNOWN_AUTHORS).map((slug) => ({ locale, slug })),
  );
}

export const revalidate = 86400;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const author = KNOWN_AUTHORS[slug];
  if (!author) return { title: 'Not Found' };

  const title =
    locale === 'hi'
      ? `${author.name} — सम्पादकीय प्रक्रिया एवं प्राधिकार | VastuCart`
      : `${author.name} — Editorial Process & Authority | VastuCart`;
  const description =
    locale === 'hi'
      ? 'VastuCart की सम्पादकीय टीम कौन है, हम सामग्री को शास्त्रीय स्रोतों के विरुद्ध कैसे समीक्षित करते हैं, और हम अपने ज्योतिष/अंकशास्त्र/वास्तु लेखों के लिए किन प्राधिकारियों का सन्दर्भ लेते हैं।'
      : 'Who reviews VastuCart\'s content, how we fact-check against classical sources, and the named authorities we cite for our astrology, numerology, and vāstu articles.';

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical: locale === 'en' ? `/authors/${slug}` : `/${locale}/authors/${slug}`,
      languages: {
        en: `/authors/${slug}`,
        hi: `/hi/authors/${slug}`,
        'x-default': `/authors/${slug}`,
      },
    },
    openGraph: {
      title,
      description,
      type: 'profile',
      url:
        locale === 'en'
          ? `https://www.vastucart.in/authors/${slug}`
          : `https://www.vastucart.in/${locale}/authors/${slug}`,
      siteName: 'VastuCart',
      locale: locale === 'hi' ? 'hi_IN' : 'en_US',
    },
  };
}

export default async function AuthorProfilePage({ params }: Props) {
  const { locale: rawLocale, slug } = await params;
  const locale = validateLocale(rawLocale) as 'en' | 'hi';
  const author = KNOWN_AUTHORS[slug];
  if (!author) notFound();

  const pageUrl = localeUrl(locale, `/authors/${slug}`);
  const breadcrumbId = `${pageUrl}#breadcrumb`;
  const speakableId = `${pageUrl}#speakable`;
  const personId = `${author.profileUrl}#person`;

  const personNode = {
    '@type': 'Person',
    '@id': personId,
    name: author.name,
    url: author.profileUrl,
    sameAs: [author.profileUrl],
    jobTitle: author.jobTitle,
    description: author.bio,
    knowsAbout: author.knowsAbout,
    worksFor: { '@id': 'https://www.vastucart.in/#organization' },
  };

  const sources = [
    {
      en: 'Brihat Parashara Hora Shastra',
      hi: 'बृहत् पाराशर होरा शास्त्र',
      author: 'Maharishi Parashara',
    },
    { en: 'Saravali', hi: 'सारावली', author: 'Kalyana Varma' },
    { en: 'Phaladeepika', hi: 'फलदीपिका', author: 'Mantreswara' },
    {
      en: 'Brihat Samhita / Brihat Jataka',
      hi: 'बृहत् संहिता / बृहत् जातक',
      author: 'Varahamihira',
    },
    {
      en: 'Uttara Kalamrita',
      hi: 'उत्तर कालामृत',
      author: 'Kalidasa (the Jyotishi)',
    },
    {
      en: 'Jaimini Sutras',
      hi: 'जैमिनी सूत्र',
      author: 'Jaimini',
    },
    {
      en: 'Pythagorean & Chaldean numerology canon',
      hi: 'पाइथागोरियन एवं काल्डियन अंकशास्त्र सन्दर्भ',
      author: 'Cheiro and classical compilations',
    },
    {
      en: 'Mayamatam',
      hi: 'मायमतम्',
      author: 'Maya — vāstu treatise',
    },
  ];

  const editorialPrinciples = [
    {
      en: 'Classical primacy — every interpretive claim is grounded in a named, verifiable classical source. Modern restatements are noted as such.',
      hi: 'शास्त्रीय प्राथमिकता — प्रत्येक व्याख्यात्मक कथन एक नामित, सत्यापन-योग्य शास्त्रीय स्रोत पर आधारित है। आधुनिक पुनर्व्याख्याएँ ऐसा ही चिह्नित।',
    },
    {
      en: 'Bilingual symmetry — English and Hindi versions are translated, not auto-generated; both convey the same Sanskrit terminology accurately.',
      hi: 'द्विभाषी सममिति — अंग्रेज़ी एवं हिन्दी संस्करण अनूदित हैं, स्वतःजनित नहीं; दोनों एक ही संस्कृत शब्दावली को सटीकता से प्रेषित करते हैं।',
    },
    {
      en: 'Health and crisis care — when content touches mental health, marriage crisis, or medical decisions, we recommend professional consultation alongside astrological remedies. Astrology does not replace clinical care.',
      hi: 'स्वास्थ्य एवं संकट देखभाल — जब सामग्री मानसिक स्वास्थ्य, वैवाहिक संकट, अथवा चिकित्सा निर्णयों को छूती है, हम ज्योतिष उपायों के समानान्तर व्यावसायिक परामर्श की संस्तुति करते हैं। ज्योतिष नैदानिक देखभाल का स्थान नहीं लेता।',
    },
    {
      en: 'Quarterly review — every long-form article is re-reviewed quarterly. Pages display a "last reviewed" date in their metadata and at the top of the article.',
      hi: 'त्रैमासिक समीक्षा — प्रत्येक दीर्घ लेख त्रैमासिक रूप से पुनः समीक्षित होता है। पृष्ठ अपने मेटाडेटा में और लेख के शीर्ष पर "अन्तिम समीक्षा" तिथि प्रदर्शित करते हैं।',
    },
    {
      en: 'Reader corrections — readers can submit corrections at editorial@vastucart.in. Corrections that change interpretation are credited and dated.',
      hi: 'पाठक सुधार — पाठक editorial@vastucart.in पर सुधार भेज सकते हैं। ऐसे सुधार जो व्याख्या बदलें — श्रेय एवं तिथि सहित प्रकाशित होते हैं।',
    },
    {
      en: 'No undeclared sponsored content — gemstone, remedy, and store recommendations link to the VastuCart store but are not paid placements; they reflect editorial judgment about what is classically appropriate.',
      hi: 'कोई अघोषित प्रायोजित सामग्री नहीं — रत्न, उपाय, एवं स्टोर अनुशंसाएँ VastuCart स्टोर से जुड़ती हैं किन्तु वे शुल्क-स्थापन नहीं; वे शास्त्रीय रूप से उचित क्या है — इस सम्पादकीय विवेक को प्रतिबिम्बित करती हैं।',
    },
  ];

  return (
    <div className="min-h-screen bg-cream-50 pattern-zodiac-subtle">
      <EntityGraph
        nodes={[
          buildOrganizationNode(),
          buildWebSiteNode(),
          buildWebPageNode({
            pageUrl,
            name: author.name,
            description: author.bio,
            locale,
            pageType: 'AboutPage',
            breadcrumbId,
            speakableId,
            mainEntityId: personId,
          }),
          buildBreadcrumbListNode({
            id: breadcrumbId,
            items: [
              { name: locale === 'hi' ? 'होम' : 'Home', url: localeUrl(locale) },
              {
                name: locale === 'hi' ? 'लेखक' : 'Authors',
                url: localeUrl(locale, '/authors/vastucart-editorial'),
              },
              { name: author.name, url: pageUrl },
            ],
          }),
          personNode,
          buildSpeakableNode({
            id: speakableId,
            cssSelectors: ['h1', '.editorial-bio'],
          }),
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="text-sm text-gray-600 mb-6">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-deepteal-700">
                {locale === 'hi' ? 'होम' : 'Home'}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-deepteal-700 font-medium">{author.name}</li>
          </ol>
        </nav>

        {/* Hero */}
        <header className="mb-10 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br from-deepteal-100 to-cream-50 border-2 border-deepteal-200 shadow-sm">
            <Users className="w-10 h-10 text-deepteal-700" aria-hidden="true" />
          </div>
          <h1
            data-speakable
            className="text-3xl md:text-5xl font-bold text-deepteal-900 leading-tight mb-3"
          >
            {author.name}
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto">{author.jobTitle}</p>
        </header>

        {/* Bio */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8 editorial-bio">
          <h2 className="text-2xl font-bold text-deepteal-800 mb-4">
            {locale === 'hi' ? 'सम्पादकीय प्रक्रिया' : 'Editorial Process'}
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">{author.bio}</p>
          <a
            href="mailto:editorial@vastucart.in"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-deepteal-600 text-white rounded-lg hover:bg-deepteal-700 transition-colors text-sm font-medium"
          >
            <Mail className="w-4 h-4" />
            {locale === 'hi' ? 'सुधार भेजें' : 'Send a correction'}
          </a>
        </section>

        {/* Knowledge domains */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8">
          <h2 className="text-2xl font-bold text-deepteal-800 mb-4">
            {locale === 'hi' ? 'विशेषज्ञता क्षेत्र' : 'Areas of Expertise'}
          </h2>
          <div className="flex flex-wrap gap-2">
            {author.knowsAbout.map((domain) => (
              <span
                key={domain}
                className="px-4 py-1.5 bg-deepteal-50 text-deepteal-800 rounded-full text-sm font-medium border border-deepteal-200"
              >
                {domain}
              </span>
            ))}
          </div>
        </section>

        {/* Editorial principles */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8">
          <h2 className="text-2xl font-bold text-deepteal-800 mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-6 h-6 text-warmaccent-500" />
            {locale === 'hi' ? 'सम्पादकीय सिद्धान्त' : 'Editorial Principles'}
          </h2>
          <ul className="space-y-4">
            {editorialPrinciples.map((p, i) => (
              <li key={i} className="flex gap-3 text-gray-700 leading-relaxed">
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full bg-deepteal-100 text-deepteal-700 text-sm font-bold flex items-center justify-center mt-0.5"
                  aria-hidden="true"
                >
                  {i + 1}
                </span>
                <span>{p[locale]}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Classical sources */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-deepteal-100 mb-8">
          <h2 className="text-2xl font-bold text-deepteal-800 mb-6 flex items-center gap-2">
            <ScrollText className="w-6 h-6 text-warmaccent-500" />
            {locale === 'hi' ? 'सन्दर्भित शास्त्रीय स्रोत' : 'Classical Sources We Cite'}
          </h2>
          <p className="text-gray-600 mb-6">
            {locale === 'hi'
              ? 'हमारी ज्योतिष एवं अंकशास्त्र सामग्री इन प्राथमिक शास्त्रीय ग्रन्थों के विरुद्ध तथ्य-जाँचित है। प्रत्येक उद्धरण किसी एक नामित अध्याय अथवा सूत्र से प्राप्य है।'
              : 'Our astrology and numerology content is fact-checked against these primary classical texts. Every interpretive claim should be traceable to a named chapter or sutra.'}
          </p>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sources.map((s, i) => (
              <li
                key={i}
                className="flex items-start gap-3 p-3 bg-cream-50 rounded-xl border border-deepteal-100"
              >
                <BookOpen className="w-5 h-5 text-deepteal-600 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="font-semibold text-deepteal-800">
                    {s[locale]}
                  </div>
                  <div className="text-sm text-gray-600">{s.author}</div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Back to home */}
        <section className="bg-gradient-to-br from-deepteal-600 to-deepteal-800 rounded-2xl p-8 md:p-10 text-white text-center shadow-xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {locale === 'hi' ? 'सामग्री देखें' : 'Explore Our Content'}
          </h2>
          <p className="text-deepteal-100 mb-6 max-w-xl mx-auto">
            {locale === 'hi'
              ? 'हमारी सम्पादकीय टीम द्वारा समीक्षित — 32 निःशुल्क उपकरण, 9 महादशा ग्रह मार्गदर्शिकाएँ, 39 राशि एवं नक्षत्र सन्दर्भ, और बहुत कुछ।'
              : 'Reviewed by our editorial team — 32 free calculators, 9 Mahadasha planet guides, 39 rashi and nakshatra references, and more.'}
          </p>
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-deepteal-800 font-bold rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            {locale === 'hi' ? 'सभी उपकरण देखें' : 'Browse All Tools'}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </section>
      </main>
    </div>
  );
}
