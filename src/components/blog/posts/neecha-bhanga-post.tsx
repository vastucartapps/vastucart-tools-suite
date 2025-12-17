'use client';

import Link from 'next/link';
import { Zap, RefreshCcw, Shield, Target, Lightbulb, Star, TrendingUp, CheckCircle, XCircle, Gem, ArrowUp, RotateCcw } from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  RelatedToolCard,
  StatsCard,
} from '../blog-content';

interface NeechaBhangaPostProps {
  locale: string;
}

export default function NeechaBhangaPost({ locale }: NeechaBhangaPostProps) {
  return (
    <div className="space-y-8">
      {/* Opening Box */}
      <HighlightBox type="tip">
        <h4 className="font-bold text-deepteal-800 mb-2">The Ultimate Redemption Yoga</h4>
        <p className="text-gray-700 text-sm">
          Neecha Bhanga Yoga is one of the most hopeful yogas in Vedic astrology. If you have a debilitated planet,
          it doesn&apos;t mean suffering—it might mean your greatest hidden strength. The planet that should be weak
          can become MORE powerful than normally strong planets through specific cancellation conditions.
        </p>
      </HighlightBox>

      <StatsCard
        stats={[
          { label: 'Concept', value: 'Weakness → Strength' },
          { label: 'Cancellation', value: 'Up to 100%' },
          { label: 'Planets Affected', value: '7 Main' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      {/* Section 1: What Is Neecha Bhanga Yoga */}
      <section id="what-is-neecha-bhanga">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <RefreshCcw className="w-5 h-5" />
          </span>
          What Is Neecha Bhanga Yoga?
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          <strong className="text-deepteal-700">Neecha = Low/Debilitated. Bhanga = Cancellation.</strong> Neecha Bhanga Yoga is a <strong>cancellation of planetary debilitation</strong> through specific planetary combinations. It transforms weakness into extraordinary strength.
        </p>

        <BlogImage
          src="/images/blog/neecha-bhanga/hero.webp"
          alt="Neecha Bhanga Yoga - Debilitation Cancellation"
          caption="When weakness transforms into strength: The redemption yoga"
        />

        {/* The Metaphor */}
        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm mt-6">
          <h3 className="font-bold text-deepteal-800 text-lg mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5" />
            Understanding the Transformation
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <XCircle className="w-6 h-6 text-red-500" />
              <span className="text-gray-700"><strong>Debilitated planet:</strong> Prisoner in cell, restricted and weak</span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <Zap className="w-6 h-6 text-amber-500" />
              <span className="text-gray-700"><strong>Neecha Bhanga Yoga:</strong> Prison door opens, prisoner breaks free</span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <span className="text-gray-700"><strong>Result:</strong> Weakness transforms into unexpected strength</span>
            </div>
          </div>
        </div>

        {/* Debilitation Table */}
        <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm mt-6">
          <h3 className="font-bold text-warmaccent-800 text-lg mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Planet Debilitation Signs
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-warmaccent-200">
                  <th className="text-left p-2 font-bold text-warmaccent-800">Planet</th>
                  <th className="text-left p-2 font-bold text-warmaccent-800">Debilitated In</th>
                  <th className="text-left p-2 font-bold text-warmaccent-800">Impact When Weak</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-warmaccent-100">
                  <td className="p-2 font-bold text-deepteal-700">Sun</td>
                  <td className="p-2 text-gray-700">Libra</td>
                  <td className="p-2 text-gray-700">Weak authority, confidence issues</td>
                </tr>
                <tr className="border-b border-warmaccent-100">
                  <td className="p-2 font-bold text-deepteal-700">Moon</td>
                  <td className="p-2 text-gray-700">Scorpio</td>
                  <td className="p-2 text-gray-700">Emotional turbulence, mental unrest</td>
                </tr>
                <tr className="border-b border-warmaccent-100">
                  <td className="p-2 font-bold text-deepteal-700">Mars</td>
                  <td className="p-2 text-gray-700">Cancer</td>
                  <td className="p-2 text-gray-700">Weak courage, initiative struggles</td>
                </tr>
                <tr className="border-b border-warmaccent-100">
                  <td className="p-2 font-bold text-deepteal-700">Mercury</td>
                  <td className="p-2 text-gray-700">Pisces</td>
                  <td className="p-2 text-gray-700">Communication challenges, confusion</td>
                </tr>
                <tr className="border-b border-warmaccent-100">
                  <td className="p-2 font-bold text-deepteal-700">Jupiter</td>
                  <td className="p-2 text-gray-700">Capricorn</td>
                  <td className="p-2 text-gray-700">Wisdom blocked, spiritual challenges</td>
                </tr>
                <tr className="border-b border-warmaccent-100">
                  <td className="p-2 font-bold text-deepteal-700">Venus</td>
                  <td className="p-2 text-gray-700">Virgo</td>
                  <td className="p-2 text-gray-700">Relationship struggles, pleasure issues</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-deepteal-700">Saturn</td>
                  <td className="p-2 text-gray-700">Aries</td>
                  <td className="p-2 text-gray-700">Weak discipline, patience issues</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <HighlightBox type="note">
          <p className="text-sm text-gray-700">
            <strong className="text-deepteal-700">Hinglish Reality:</strong> &quot;Neecha Bhanga Yoga matlab ek prison se freedom. Jo planet normally weak hota, Neecha Bhanga se woh super-strong ban jata hai. Aur jab weak planet strong hota hai through Neecha Bhanga, toh woh aapko jo strength deta hai, woh dusre logo ki normal strength se 100 baar zyada powerful hota hai.&quot;
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 2: How to Check */}
      <section id="how-to-check">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-deepteal-100 text-deepteal-600">
            <Target className="w-5 h-5" />
          </span>
          How to Check If You Have Neecha Bhanga
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          You need your complete birth chart showing all planetary placements. Use our <Link href={`/${locale}/tools/kundli`} className="text-warmaccent-600 hover:underline">Kundli Calculator</Link> to see which planets are debilitated and whether they have cancellation conditions.
        </p>

        <BlogImage
          src="/images/blog/neecha-bhanga/concept.webp"
          alt="Neecha Bhanga Yoga Concept"
          caption="Understanding planetary debilitation and cancellation"
        />

        {/* Cancellation Conditions Table */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-sm mt-6">
          <h3 className="font-bold text-green-800 text-lg mb-4 flex items-center gap-2">
            <CheckCircle className="w-5 h-5" />
            Cancellation Conditions
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-green-200">
                  <th className="text-left p-2 font-bold text-green-800">Condition</th>
                  <th className="text-left p-2 font-bold text-green-800">Details</th>
                  <th className="text-left p-2 font-bold text-green-800">Effectiveness</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-green-100">
                  <td className="p-2 font-bold text-deepteal-700">Exaltation Lord Strong</td>
                  <td className="p-2 text-gray-700">Lord of planet&apos;s exaltation sign is powerful</td>
                  <td className="p-2 text-orange-600">50% cancel</td>
                </tr>
                <tr className="border-b border-green-100 bg-green-100/50">
                  <td className="p-2 font-bold text-green-700">Debilitation Lord Strong</td>
                  <td className="p-2 text-gray-700">Lord of debilitation sign is very powerful</td>
                  <td className="p-2 font-bold text-green-700">100% cancel!</td>
                </tr>
                <tr className="border-b border-green-100">
                  <td className="p-2 font-bold text-deepteal-700">Planet is Retrograde</td>
                  <td className="p-2 text-gray-700">Debilitated planet moving backward</td>
                  <td className="p-2 text-green-600">80%+ cancel</td>
                </tr>
                <tr className="border-b border-green-100">
                  <td className="p-2 font-bold text-deepteal-700">Benefic Aspect</td>
                  <td className="p-2 text-gray-700">Jupiter/Venus/Mercury aspects weak planet</td>
                  <td className="p-2 text-orange-600">60% cancel</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-green-700">Multiple Conditions</td>
                  <td className="p-2 text-gray-700">2-3 conditions combine together</td>
                  <td className="p-2 font-bold text-green-700">90-100%!</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Card */}
        <RelatedToolCard
          title="Check Your Neecha Bhanga Yoga"
          description="Discover if your debilitation is canceled and unleash your hidden strength"
          href={`/${locale}/tools/yoga-calculator`}
        />
      </section>

      <SectionDivider />

      {/* Section 3: The 5 Conditions */}
      <section id="conditions">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Shield className="w-5 h-5" />
          </span>
          The Conditions for Cancellation
        </h2>

        <BlogImage
          src="/images/blog/neecha-bhanga/analysis.webp"
          alt="Neecha Bhanga Analysis"
          caption="Five main conditions can cancel planetary debilitation"
        />

        {/* Condition Cards */}
        <div className="space-y-4 mt-6">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-500 text-white font-bold flex-shrink-0 shadow-md">
                1
              </div>
              <div>
                <h4 className="font-bold text-amber-800 mb-2">Exaltation Lord Strong</h4>
                <p className="text-gray-700 text-sm mb-2">When the lord of the planet&apos;s exalted sign is powerful, debilitation starts weakening.</p>
                <p className="text-xs text-gray-600 italic">Example: Mars debilitated in Cancer. Exaltation lord Sun (Mars exalts in Aries) being strong helps Mars.</p>
                <p className="text-xs text-orange-600 mt-2 font-bold">Effectiveness: MODERATE (50% cancellation)</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500 text-white font-bold flex-shrink-0 shadow-md">
                2
              </div>
              <div>
                <h4 className="font-bold text-green-800 mb-2">Debilitation Lord Strong (Most Powerful!)</h4>
                <p className="text-gray-700 text-sm mb-2">When the lord of the debilitation sign is extremely powerful, complete strength reversal happens!</p>
                <p className="text-xs text-gray-600 italic">Example: Jupiter debilitated in Capricorn. Saturn (Capricorn lord) being very strong cancels Jupiter completely.</p>
                <p className="text-xs text-green-700 mt-2 font-bold">Effectiveness: HIGHEST (100% cancellation possible)</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-deepteal-500 text-white font-bold flex-shrink-0 shadow-md">
                3
              </div>
              <div>
                <h4 className="font-bold text-deepteal-800 mb-2 flex items-center gap-2">
                  <RotateCcw className="w-4 h-4" />
                  Retrograde Debilitated Planet
                </h4>
                <p className="text-gray-700 text-sm mb-2">Retrograde motion gives the planet different strength—weakness can reverse entirely!</p>
                <p className="text-xs text-gray-600 italic">Planet functions like exalted planet sometimes when retrograde.</p>
                <p className="text-xs text-green-600 mt-2 font-bold">Effectiveness: HIGH (80%+ cancellation)</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-2xl p-6 border border-warmaccent-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-warmaccent-500 text-white font-bold flex-shrink-0 shadow-md">
                4
              </div>
              <div>
                <h4 className="font-bold text-warmaccent-800 mb-2">Benefic Aspect on Debilitated Planet</h4>
                <p className="text-gray-700 text-sm mb-2">Strong benefics (Jupiter, Venus, Mercury) aspecting the weak planet provide external support.</p>
                <p className="text-xs text-gray-600 italic">Obstacles lessen, planet functions better than expected.</p>
                <p className="text-xs text-orange-600 mt-2 font-bold">Effectiveness: MODERATE (60% cancellation)</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500 text-white font-bold flex-shrink-0 shadow-md">
                5
              </div>
              <div>
                <h4 className="font-bold text-orange-800 mb-2">Multiple Cancellation Conditions</h4>
                <p className="text-gray-700 text-sm mb-2">When 2-3 conditions combine, complete cancellation becomes possible—creating exceptional strength!</p>
                <p className="text-xs text-gray-600 italic">Debilitated planet can become more powerful than normally strong planets.</p>
                <p className="text-xs text-green-700 mt-2 font-bold">Effectiveness: HIGHEST (90-100% cancellation)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: When Debilitation Gets Canceled */}
      <section id="when-canceled">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <TrendingUp className="w-5 h-5" />
          </span>
          When Debilitation Gets Canceled
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Timing matters significantly. The <Link href={`/${locale}/tools/mahadasha`} className="text-warmaccent-600 hover:underline">Mahadasha period</Link> of the debilitated planet is when you&apos;ll see the real effects—either struggle or opportunity depending on Neecha Bhanga.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200 shadow-sm">
            <h3 className="font-bold text-red-800 text-lg mb-3 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Without Neecha Bhanga
            </h3>
            <p className="text-gray-700 text-sm mb-3">Difficult 6-20 year Mahadasha period:</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Obstacles increase</li>
              <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Planet&apos;s problems manifest fully</li>
              <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Constant struggles in that area</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-sm">
            <h3 className="font-bold text-green-800 text-lg mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              With Neecha Bhanga
            </h3>
            <p className="text-gray-700 text-sm mb-3">Opportunity period 6-20 years:</p>
            <ul className="text-gray-700 text-sm space-y-1">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Hidden power emerges</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Struggle transforms to success</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Extraordinary growth possible</li>
            </ul>
          </div>
        </div>

        <HighlightBox type="important">
          <p className="font-bold text-deepteal-700 mb-2">Neecha Bhanga Works Best When:</p>
          <ul className="text-sm text-gray-700 space-y-1 mt-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> You&apos;re aware of your hidden strength</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> You work consciously with the weakness</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> You accept the struggle as teaching</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> You develop mastery through effort</li>
          </ul>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 5: Hidden Strength */}
      <section id="hidden-strength">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Star className="w-5 h-5" />
          </span>
          Hidden Strength in Weak Planets
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          This is the beautiful part: weak planets with Neecha Bhanga develop <strong>extraordinary strength</strong>. The struggle teaches what easy success never can—patience, creativity, wisdom, compassion.
        </p>

        {/* Why Weakness Becomes Power */}
        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm">
          <h3 className="font-bold text-deepteal-800 text-lg mb-4 flex items-center gap-2">
            <Lightbulb className="w-5 h-5" />
            Why Weakness Becomes Power
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <ArrowUp className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 text-sm"><strong>Patience</strong> through obstacle</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <ArrowUp className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 text-sm"><strong>Creativity</strong> through limitation</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <ArrowUp className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 text-sm"><strong>Strength</strong> through hardship</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <ArrowUp className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 text-sm"><strong>Wisdom</strong> through difficulty</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg md:col-span-2">
              <ArrowUp className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 text-sm"><strong>Compassion</strong> through struggle</span>
            </div>
          </div>
        </div>

        {/* Examples */}
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-2xl p-5 border border-warmaccent-200 shadow-sm">
            <h4 className="font-bold text-warmaccent-800 mb-2">Debilitated Mars + Neecha Bhanga</h4>
            <p className="text-xs text-gray-600 mb-2"><em>Normal Mars:</em> Warrior mentality</p>
            <p className="text-sm text-gray-700"><strong>Neecha Bhanga Mars:</strong> Warrior who learned peace—unbeatable when needed</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-5 border border-amber-200 shadow-sm">
            <h4 className="font-bold text-amber-800 mb-2">Debilitated Venus + Neecha Bhanga</h4>
            <p className="text-xs text-gray-600 mb-2"><em>Normal Venus:</em> Natural charm, easy love</p>
            <p className="text-sm text-gray-700"><strong>Neecha Bhanga Venus:</strong> Hard-won relationship mastery, deep love understanding</p>
          </div>
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-5 border border-deepteal-200 shadow-sm">
            <h4 className="font-bold text-deepteal-800 mb-2">Debilitated Saturn + Neecha Bhanga</h4>
            <p className="text-xs text-gray-600 mb-2"><em>Normal Saturn:</em> Natural discipline</p>
            <p className="text-sm text-gray-700"><strong>Neecha Bhanga Saturn:</strong> Discipline learned through failure—unstoppable persistence</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Maximizing */}
      <section id="maximizing">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
            <TrendingUp className="w-5 h-5" />
          </span>
          Maximizing Your Neecha Bhanga
        </h2>

        <BlogImage
          src="/images/blog/neecha-bhanga/remedy.webp"
          alt="Maximizing Neecha Bhanga"
          caption="Strategies to unlock the full power of canceled debilitation"
        />

        {/* Strategy Cards */}
        <div className="space-y-4 mt-6">
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm">
            <h3 className="font-bold text-deepteal-800 text-lg mb-3">Strategy #1: Understand Your Weak Planet</h3>
            <p className="text-gray-700 text-sm">Learn everything about what it governs, how it normally manifests, why it struggles, and its hidden potential. If Mars is debilitated, understand Mars energy: courage, initiative, competition, action.</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm">
            <h3 className="font-bold text-amber-800 text-lg mb-3">Strategy #2: Work With, Not Against, Weakness</h3>
            <div className="text-sm space-y-2">
              <p className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Debilitated Mars person trying to be naturally aggressive = Forced, inauthentic</p>
              <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Debilitated Mars person developing hard-won courage = Genuine, powerful</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-2xl p-6 border border-warmaccent-200 shadow-sm">
            <h3 className="font-bold text-warmaccent-800 text-lg mb-3">Strategy #3: Use the Struggle as Teacher</h3>
            <p className="text-gray-700 text-sm mb-2">Ask yourself:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• What is this weakness teaching me?</li>
              <li>• What strength am I developing through struggle?</li>
              <li>• How can I master this area?</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 shadow-sm">
            <h3 className="font-bold text-orange-800 text-lg mb-3">Strategy #4: Activate During Mahadasha</h3>
            <p className="text-gray-700 text-sm mb-2">When your debilitated planet&apos;s <Link href={`/${locale}/tools/mahadasha`} className="text-warmaccent-600 hover:underline">Mahadasha</Link> comes:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Accept major life changes</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Work actively in that planet&apos;s area</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Take calculated risks—this is your redemption period</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white flex-shrink-0 shadow-md">
                <Gem className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-green-800 text-lg mb-2">Strategy #5: Strengthen Supporting Planets</h3>
                <p className="text-gray-700 text-sm mb-2">Strengthen the planets that support your Neecha Bhanga:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Exaltation lord (wear its gemstone)</li>
                  <li>• Debilitation lord (if strong)</li>
                  <li>• Benefics aspecting it</li>
                  <li>• House lords supporting it</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-deepteal-100 text-deepteal-600">
            <Zap className="w-5 h-5" />
          </span>
          Strength Through Struggle
        </h2>

        <BlogImage
          src="/images/blog/neecha-bhanga/reference.webp"
          alt="Strength Through Struggle"
          caption="Your weakness is your path to mastery"
        />

        <p className="text-gray-700 mb-6 leading-relaxed">
          <strong>Here&apos;s the beautiful truth about Neecha Bhanga Yoga:</strong> Your weakness is not a curse—it&apos;s a <strong>hidden strength waiting to be unlocked</strong>. People with Neecha Bhanga often achieve more than those with normally strong planets because struggle teaches mastery.
        </p>

        <HighlightBox type="tip">
          <p className="font-bold text-deepteal-700 mb-2">People with Neecha Bhanga achieve more because:</p>
          <ul className="text-sm text-gray-700 space-y-1 mt-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Struggle teaches mastery</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Difficulty builds character</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Limitation forces creativity</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Weakness becomes invincible strength</li>
          </ul>
        </HighlightBox>

        <RelatedToolCard
          title="Unlock Your Hidden Strength"
          description="Check if your debilitation is canceled and unleash extraordinary power"
          href={`/${locale}/tools/yoga-calculator`}
        />

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="font-bold text-deepteal-800 text-lg mb-4">Related Tools for Complete Understanding</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href={`/${locale}/tools/kundli`} className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-4 border border-deepteal-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-deepteal-700">Kundli Generator</p>
              <p className="text-xs text-gray-600">See all planetary placements and debilitation</p>
            </Link>
            <Link href={`/${locale}/tools/mahadasha`} className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-amber-700">Mahadasha Calculator</p>
              <p className="text-xs text-gray-600">Know when weak planet&apos;s period comes</p>
            </Link>
            <Link href={`/${locale}/tools/raj-yoga`} className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-4 border border-warmaccent-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-warmaccent-700">Raj Yoga Calculator</p>
              <p className="text-xs text-gray-600">See all positive yogas in your chart</p>
            </Link>
            <Link href={`/${locale}/tools/lagna`} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-orange-700">Lagna Calculator</p>
              <p className="text-xs text-gray-600">Understand overall chart strength</p>
            </Link>
          </div>
        </div>

        <p className="text-center text-deepteal-700 font-bold mt-8 text-lg">
          Your weakness is your path to mastery. Embrace it. Develop it. Become extraordinary.
        </p>
      </section>
    </div>
  );
}
