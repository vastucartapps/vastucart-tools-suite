import { Metadata } from 'next';
import { Moon, Star, Sun, Calendar, Heart, Sparkles } from 'lucide-react';

import { HeroResultCard, HeroGlassPanel, HeroStatCard } from '@/components/ui/hero-result-card';
import { SectionCard, SectionInfoRow, SectionDivider } from '@/components/ui/section-card';
import { Card } from '@/components/ui/card';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: 'en' | 'hi' }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Design Preview | VastuCart',
    description: 'Preview of new card designs for VastuCart tools',
    robots: 'noindex, nofollow',
    alternates: {
      canonical: `/${locale}/design-preview`,
      languages: {
        en: '/en/design-preview',
        hi: '/hi/design-preview',
      },
    },
  };
}

export default async function DesignPreviewPage({
  params,
}: {
  params: Promise<{ locale: 'en' | 'hi' }>;
}) {
  const { locale } = await params;
  return (
    <main className="min-h-screen bg-cream-50 py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            {locale === 'en' ? 'Card Design Preview' : 'कार्ड डिज़ाइन पूर्वावलोकन'}
          </h1>
          <p className="text-gray-600">
            {locale === 'en'
              ? 'Compare the new card designs before implementing across all tools'
              : 'सभी टूल्स में लागू करने से पहले नए कार्ड डिज़ाइन की तुलना करें'}
          </p>
        </div>

        {/* ===================== SECTION 1: HERO CARDS ===================== */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-deepteal-100 text-deepteal-700 rounded-lg flex items-center justify-center text-sm font-bold">1</span>
            {locale === 'en' ? 'Hero Result Card (Premium Gradient)' : 'हीरो रिज़ल्ट कार्ड (प्रीमियम ग्रेडिएंट)'}
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            {locale === 'en'
              ? 'Used for the main result highlight - one per tool. Dark deepteal gradient with glassmorphism panels.'
              : 'मुख्य परिणाम हाइलाइट के लिए उपयोग किया जाता है - प्रति टूल एक। ग्लासमॉर्फिज्म पैनल के साथ डार्क टील ग्रेडिएंट।'}
          </p>

          {/* Example 1: Nakshatra Result */}
          <div className="mb-8">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Example: Nakshatra Result</p>
            <HeroResultCard
              title={locale === 'en' ? 'Your Nakshatra' : 'आपका नक्षत्र'}
              subtitle={locale === 'en' ? 'Birth Star Analysis' : 'जन्म नक्षत्र विश्लेषण'}
              icon={<Star className="w-6 h-6 text-white" />}
            >
              {/* Main result display */}
              <div className="text-center py-6">
                <div className="text-5xl mb-3">✧</div>
                <h3 className="text-3xl font-bold text-white mb-1">
                  {locale === 'en' ? 'ROHINI' : 'रोहिणी'}
                </h3>
                <p className="text-deepteal-200 text-lg">
                  {locale === 'en' ? 'Pada 2' : 'पाद २'}
                </p>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-3 gap-4 mt-4">
                <HeroStatCard
                  label={locale === 'en' ? 'Lord' : 'स्वामी'}
                  value={locale === 'en' ? 'Moon' : 'चंद्र'}
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Deity' : 'देवता'}
                  value={locale === 'en' ? 'Brahma' : 'ब्रह्मा'}
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Symbol' : 'प्रतीक'}
                  value={locale === 'en' ? 'Chariot' : 'रथ'}
                />
              </div>
            </HeroResultCard>
          </div>

          {/* Example 2: Moon Sign Result */}
          <div className="mb-8">
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Example: Moon Sign Result</p>
            <HeroResultCard
              title={locale === 'en' ? 'Your Moon Sign' : 'आपकी चंद्र राशि'}
              subtitle={locale === 'en' ? 'Emotional & Inner Self' : 'भावनात्मक और आंतरिक स्व'}
              icon={<Moon className="w-6 h-6 text-white" />}
            >
              <div className="text-center py-8">
                <div className="text-6xl mb-4">♋</div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  {locale === 'en' ? 'CANCER' : 'कर्क'}
                </h3>
                <p className="text-deepteal-200">
                  {locale === 'en' ? 'कर्क राशि' : 'Cancer Sign'}
                </p>
              </div>

              <HeroGlassPanel className="mt-4">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-deepteal-200 text-xs uppercase tracking-wide">Element</p>
                    <p className="text-white font-semibold">Water</p>
                  </div>
                  <div>
                    <p className="text-deepteal-200 text-xs uppercase tracking-wide">Ruler</p>
                    <p className="text-white font-semibold">Moon</p>
                  </div>
                </div>
              </HeroGlassPanel>
            </HeroResultCard>
          </div>

          {/* Example 3: Saffron - Auspicious Result */}
          <div className="mb-8">
            <p className="text-xs text-warmaccent-600 uppercase tracking-wide mb-3 font-semibold">NEW: Saffron Hero (For Auspicious Results)</p>
            <HeroResultCard
              title={locale === 'en' ? 'No Manglik Dosha!' : 'मांगलिक दोष नहीं!'}
              subtitle={locale === 'en' ? 'Auspicious Finding' : 'शुभ परिणाम'}
              icon={<Sparkles className="w-6 h-6 text-white" />}
              colorScheme="warmaccent"
            >
              <div className="text-center py-8">
                <div className="text-6xl mb-4">✓</div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {locale === 'en' ? 'SHUBH' : 'शुभ'}
                </h3>
                <p className="text-warmaccent-200">
                  {locale === 'en' ? 'Your chart shows no Manglik influence' : 'आपकी कुंडली में मांगलिक प्रभाव नहीं है'}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <HeroStatCard
                  label={locale === 'en' ? 'Mars House' : 'मंगल भाव'}
                  value="5th"
                  colorScheme="warmaccent"
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Status' : 'स्थिति'}
                  value={locale === 'en' ? 'Clear' : 'शुद्ध'}
                  colorScheme="warmaccent"
                />
              </div>
            </HeroResultCard>
          </div>

          {/* Example 4: Without watermark */}
          <div>
            <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Example: Without Watermark</p>
            <HeroResultCard
              title={locale === 'en' ? 'Compatibility Score' : 'अनुकूलता स्कोर'}
              subtitle={locale === 'en' ? 'Marriage Matching Result' : 'विवाह मिलान परिणाम'}
              icon={<Heart className="w-6 h-6 text-white" />}
              watermark={false}
            >
              <div className="text-center py-8">
                <div className="text-7xl font-bold text-white mb-2">28</div>
                <p className="text-deepteal-200 text-lg">{locale === 'en' ? 'out of 36 points' : '36 में से अंक'}</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <HeroStatCard
                  label={locale === 'en' ? 'Rating' : 'रेटिंग'}
                  value={locale === 'en' ? 'Excellent' : 'उत्कृष्ट'}
                />
                <HeroStatCard
                  label={locale === 'en' ? 'Manglik' : 'मांगलिक'}
                  value={locale === 'en' ? 'No' : 'नहीं'}
                />
              </div>
            </HeroResultCard>
          </div>
        </section>

        {/* ===================== SECTION 2: SECTION CARDS ===================== */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-deepteal-100 text-deepteal-700 rounded-lg flex items-center justify-center text-sm font-bold">2</span>
            {locale === 'en' ? 'Section Card (Elegant Minimal)' : 'सेक्शन कार्ड (एलिगेंट मिनिमल)'}
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            {locale === 'en'
              ? 'Used for secondary information sections. Clean white with gradient top border and subtle watermark.'
              : 'द्वितीयक सूचना अनुभागों के लिए उपयोग किया जाता है। ग्रेडिएंट टॉप बॉर्डर और सूक्ष्म वॉटरमार्क के साथ साफ सफेद।'}
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Gradient border (default) */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Gradient Border (Default)</p>
              <SectionCard
                title={locale === 'en' ? 'Planetary Positions' : 'ग्रह स्थिति'}
                subtitle={locale === 'en' ? 'At the time of birth' : 'जन्म के समय'}
                icon={<Sun className="w-5 h-5" />}
              >
                <div className="space-y-1">
                  <SectionInfoRow
                    label={locale === 'en' ? 'Sun' : 'सूर्य'}
                    value={locale === 'en' ? 'Aries 15°23\'' : 'मेष 15°23\''}
                  />
                  <SectionInfoRow
                    label={locale === 'en' ? 'Moon' : 'चंद्र'}
                    value={locale === 'en' ? 'Cancer 22°10\'' : 'कर्क 22°10\''}
                    highlight
                  />
                  <SectionInfoRow
                    label={locale === 'en' ? 'Mars' : 'मंगल'}
                    value={locale === 'en' ? 'Leo 8°45\'' : 'सिंह 8°45\''}
                  />
                  <SectionInfoRow
                    label={locale === 'en' ? 'Mercury' : 'बुध'}
                    value={locale === 'en' ? 'Pisces 28°30\'' : 'मीन 28°30\''}
                  />
                </div>
              </SectionCard>
            </div>

            {/* Teal border */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Teal Border</p>
              <SectionCard
                title={locale === 'en' ? 'Lucky Factors' : 'भाग्यशाली तत्व'}
                icon={<Sparkles className="w-5 h-5" />}
                accentBorder="deepteal"
              >
                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="bg-deepteal-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">{locale === 'en' ? 'Lucky Day' : 'शुभ दिन'}</p>
                    <p className="font-semibold text-deepteal-700">{locale === 'en' ? 'Monday' : 'सोमवार'}</p>
                  </div>
                  <div className="bg-warmaccent-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">{locale === 'en' ? 'Lucky Color' : 'शुभ रंग'}</p>
                    <p className="font-semibold text-warmaccent-700">{locale === 'en' ? 'White' : 'सफेद'}</p>
                  </div>
                  <div className="bg-deepteal-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">{locale === 'en' ? 'Lucky Number' : 'शुभ अंक'}</p>
                    <p className="font-semibold text-deepteal-700">2, 7, 9</p>
                  </div>
                  <div className="bg-warmaccent-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-500 mb-1">{locale === 'en' ? 'Lucky Gem' : 'शुभ रत्न'}</p>
                    <p className="font-semibold text-warmaccent-700">{locale === 'en' ? 'Pearl' : 'मोती'}</p>
                  </div>
                </div>
              </SectionCard>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Saffron border */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">Saffron Border</p>
              <SectionCard
                title={locale === 'en' ? 'Current Dasha Period' : 'वर्तमान दशा अवधि'}
                icon={<Calendar className="w-5 h-5" />}
                accentBorder="warmaccent"
              >
                <div className="bg-warmaccent-50 rounded-lg p-4 mt-2">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">{locale === 'en' ? 'Mahadasha' : 'महादशा'}</span>
                    <span className="font-bold text-warmaccent-700">{locale === 'en' ? 'Venus' : 'शुक्र'}</span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">{locale === 'en' ? 'Antardasha' : 'अंतरदशा'}</span>
                    <span className="font-semibold text-gray-900">{locale === 'en' ? 'Saturn' : 'शनि'}</span>
                  </div>
                  <SectionDivider />
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{locale === 'en' ? 'Until' : 'तक'}</span>
                    <span className="text-gray-700">March 2027</span>
                  </div>
                </div>
              </SectionCard>
            </div>

            {/* No border */}
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wide mb-3">No Border</p>
              <SectionCard
                title={locale === 'en' ? 'Personality Traits' : 'व्यक्तित्व लक्षण'}
                accentBorder="none"
                watermark={false}
              >
                <div className="space-y-3 mt-2">
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{locale === 'en' ? 'Intuitive and emotionally intelligent' : 'सहज और भावनात्मक रूप से बुद्धिमान'}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{locale === 'en' ? 'Strong family bonds and nurturing nature' : 'मजबूत पारिवारिक बंधन और पोषण स्वभाव'}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-gray-700">{locale === 'en' ? 'Creative and artistic abilities' : 'रचनात्मक और कलात्मक क्षमताएं'}</p>
                  </div>
                </div>
              </SectionCard>
            </div>
          </div>
        </section>

        {/* ===================== SECTION 3: CURRENT CARDS ===================== */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-gray-200 text-gray-600 rounded-lg flex items-center justify-center text-sm font-bold">3</span>
            {locale === 'en' ? 'Current Card Style (For Comparison)' : 'वर्तमान कार्ड स्टाइल (तुलना के लिए)'}
          </h2>
          <p className="text-gray-600 mb-6 text-sm">
            {locale === 'en'
              ? 'This is how cards currently look. Will be kept for detail sections like FAQs and tables.'
              : 'कार्ड वर्तमान में इस तरह दिखते हैं। FAQ और टेबल जैसे विस्तार अनुभागों के लिए रखा जाएगा।'}
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'en' ? 'Default Card' : 'डिफ़ॉल्ट कार्ड'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Simple white background with shadow. Good for FAQs, tables, and less important sections.'
                  : 'छाया के साथ सरल सफेद पृष्ठभूमि। FAQ, टेबल और कम महत्वपूर्ण अनुभागों के लिए अच्छा।'}
              </p>
            </Card>

            <Card variant="highlight" className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {locale === 'en' ? 'Highlight Card' : 'हाइलाइट कार्ड'}
              </h3>
              <p className="text-gray-600">
                {locale === 'en'
                  ? 'Subtle deepteal gradient background. Currently used for some results.'
                  : 'सूक्ष्म टील ग्रेडिएंट पृष्ठभूमि। वर्तमान में कुछ परिणामों के लिए उपयोग किया जाता है।'}
              </p>
            </Card>
          </div>
        </section>

        {/* ===================== SECTION 4: COMPARISON ===================== */}
        <section className="mb-16">
          <h2 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
            <span className="w-8 h-8 bg-gradient-to-r from-deepteal-500 to-warmaccent-500 text-white rounded-lg flex items-center justify-center text-sm font-bold">4</span>
            {locale === 'en' ? 'Side-by-Side Comparison' : 'साथ-साथ तुलना'}
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Before */}
            <div>
              <p className="text-xs text-red-500 uppercase tracking-wide mb-3 font-semibold">
                {locale === 'en' ? 'BEFORE (Current)' : 'पहले (वर्तमान)'}
              </p>
              <Card className="p-6 bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white">
                <h3 className="text-xl font-semibold mb-4 opacity-90">
                  {locale === 'en' ? 'Your Nakshatra' : 'आपका नक्षत्र'}
                </h3>
                <div className="text-center py-6">
                  <div className="text-5xl mb-2">✧</div>
                  <h3 className="text-3xl font-bold mb-2">
                    {locale === 'en' ? 'ROHINI' : 'रोहिणी'}
                  </h3>
                  <p className="text-xl opacity-90">
                    {locale === 'en' ? 'Pada 2' : 'पाद २'}
                  </p>
                </div>
              </Card>
            </div>

            {/* After */}
            <div>
              <p className="text-xs text-green-600 uppercase tracking-wide mb-3 font-semibold">
                {locale === 'en' ? 'AFTER (New Design)' : 'बाद में (नया डिज़ाइन)'}
              </p>
              <HeroResultCard
                title={locale === 'en' ? 'Your Nakshatra' : 'आपका नक्षत्र'}
                subtitle={locale === 'en' ? 'Birth Star Analysis' : 'जन्म नक्षत्र विश्लेषण'}
                icon={<Star className="w-6 h-6 text-white" />}
              >
                <div className="text-center py-6">
                  <div className="text-5xl mb-3">✧</div>
                  <h3 className="text-3xl font-bold text-white mb-1">
                    {locale === 'en' ? 'ROHINI' : 'रोहिणी'}
                  </h3>
                  <p className="text-deepteal-200 text-lg">
                    {locale === 'en' ? 'Pada 2' : 'पाद २'}
                  </p>
                </div>
              </HeroResultCard>
            </div>
          </div>
        </section>

        {/* ===================== APPROVAL SECTION ===================== */}
        <section className="text-center py-8 border-t border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            {locale === 'en' ? 'Ready to Apply?' : 'लागू करने के लिए तैयार?'}
          </h2>
          <p className="text-gray-600 mb-6">
            {locale === 'en'
              ? 'Once approved, these designs will be applied to all 17 tools.'
              : 'स्वीकृत होने के बाद, ये डिज़ाइन सभी 17 टूल्स पर लागू किए जाएंगे।'}
          </p>
          <div className="flex justify-center gap-4">
            <a
              href={`/${locale}`}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors"
            >
              {locale === 'en' ? 'Back to Home' : 'होम पर वापस'}
            </a>
            <a
              href={`/${locale}/tools/nakshatra`}
              className="px-6 py-3 bg-gradient-to-r from-deepteal-600 to-deepteal-700 text-white rounded-xl hover:from-deepteal-700 hover:to-deepteal-800 transition-colors"
            >
              {locale === 'en' ? 'View Live Tool' : 'लाइव टूल देखें'}
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'hi' }];
}
