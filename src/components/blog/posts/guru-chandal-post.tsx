'use client';

import Link from 'next/link';
import { Brain, Lightbulb, AlertTriangle, Target, Shield, BookOpen, Users, Gem, Eye, CheckCircle, XCircle, Star, Sparkles } from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  RelatedToolCard,
  StatsCard,
} from '../blog-content';

interface GuruChandalPostProps {
  locale: string;
}

export default function GuruChandalPost({ locale }: GuruChandalPostProps) {
  return (
    <div className="space-y-8">
      {/* Opening Warning Box */}
      <HighlightBox type="warning">
        <h4 className="font-bold text-warmaccent-800 mb-2">Why Do Intelligent People Follow Wrong Paths?</h4>
        <p className="text-gray-700 text-sm">
          Guru Chandal Yoga doesn&apos;t mean you lack intelligence—it means you struggle to distinguish true wisdom from false beliefs.
          Jupiter (Guru) represents wisdom and righteousness, while Rahu (Chandal) represents illusion and deception.
          When they conflict, you might passionately pursue paths that don&apos;t serve you. Let&apos;s understand this yoga and develop clarity.
        </p>
      </HighlightBox>

      <StatsCard
        stats={[
          { label: 'Core Conflict', value: 'Wisdom vs Illusion' },
          { label: 'Key Remedy', value: 'Discernment' },
          { label: 'Recovery Time', value: '6-24 months' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      {/* Section 1: What Is Guru Chandal Yoga */}
      <section id="what-is-guru-chandal">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Brain className="w-5 h-5" />
          </span>
          What Is Guru Chandal Yoga?
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          <strong className="text-deepteal-700">Guru = Jupiter (Teacher/Wisdom). Chandal = Rahu (Low-born/Deceiver).</strong> Guru Chandal Yoga is a <strong>conflict between true wisdom and false beliefs</strong>. It occurs when Jupiter and Rahu are in conjunction or strong aspect in your <Link href={`/${locale}/tools/kundli`} className="text-warmaccent-600 hover:underline">birth chart</Link>.
        </p>

        <BlogImage
          src="/images/blog/guru-chandal/hero.webp"
          alt="Guru Chandal Yoga - Jupiter and Rahu Conflict"
          caption="When Jupiter (wisdom) meets Rahu (illusion), the battle between truth and deception begins"
        />

        {/* How It Forms */}
        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm mt-6">
          <h3 className="font-bold text-deepteal-800 text-lg mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            How Guru Chandal Forms
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <div className="w-8 h-8 bg-deepteal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <span className="text-gray-700"><strong>Conjunction:</strong> Jupiter and Rahu in the same house</span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <div className="w-8 h-8 bg-deepteal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <span className="text-gray-700"><strong>Aspect:</strong> Jupiter and Rahu in 5/9 aspect relationship</span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <div className="w-8 h-8 bg-deepteal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <span className="text-gray-700"><strong>Imbalance:</strong> Jupiter weak and Rahu strong in chart</span>
            </div>
          </div>
        </div>

        {/* Jupiter vs Rahu Comparison */}
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                <Lightbulb className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">Jupiter (Guru) Represents</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Wisdom, truth, dharma</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Righteousness, guidance</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Expansion through knowledge</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Spiritual growth</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 border border-gray-300 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 text-white flex-shrink-0 shadow-md">
                <Eye className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg mb-2">Rahu (Chandal) Represents</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Illusion, deception</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> False knowledge</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Deceptive expansion</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Spiritual confusion</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <HighlightBox type="note">
          <p className="text-sm text-gray-700">
            <strong className="text-deepteal-700">Hinglish Reality:</strong> &quot;Guru Chandal Yoga ka matlab aap intelligent ho sakte ho, lekin galat direction mein jaate ho. Samjhdar ho sakte ho, lekin galat advice follow karte ho. Jupiter ka wisdom aur Rahu ka deception ladai karte hain—aur zyada tar time Rahu jeet jata hai.&quot;
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
          How to Check If You Have Guru Chandal
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          You need your complete birth chart showing Jupiter and Rahu positions. Use our <Link href={`/${locale}/tools/kundli`} className="text-warmaccent-600 hover:underline">Kundli Calculator</Link> to generate your full birth chart with accurate planetary positions.
        </p>

        <BlogImage
          src="/images/blog/guru-chandal/concept.webp"
          alt="Jupiter and Rahu Conjunction Diagram"
          caption="Understanding Jupiter-Rahu positions in your birth chart"
        />

        {/* Configuration Table */}
        <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm mt-6">
          <h3 className="font-bold text-warmaccent-800 text-lg mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Guru Chandal Configuration Strength
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-warmaccent-200">
                  <th className="text-left p-2 font-bold text-warmaccent-800">Configuration</th>
                  <th className="text-left p-2 font-bold text-warmaccent-800">Guru Chandal?</th>
                  <th className="text-left p-2 font-bold text-warmaccent-800">Strength</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-warmaccent-100 bg-red-50">
                  <td className="p-2 text-gray-700">Jupiter & Rahu in same house</td>
                  <td className="p-2 font-bold text-red-600">YES</td>
                  <td className="p-2 font-bold text-red-600">STRONG</td>
                </tr>
                <tr className="border-b border-warmaccent-100 bg-orange-50">
                  <td className="p-2 text-gray-700">Jupiter & Rahu in 5/9 aspect</td>
                  <td className="p-2 font-bold text-orange-600">YES</td>
                  <td className="p-2 text-orange-600">Moderate</td>
                </tr>
                <tr className="border-b border-warmaccent-100 bg-orange-50">
                  <td className="p-2 text-gray-700">Jupiter weak, Rahu strong, close</td>
                  <td className="p-2 font-bold text-orange-600">YES</td>
                  <td className="p-2 text-orange-600">Moderate</td>
                </tr>
                <tr>
                  <td className="p-2 text-gray-700">Jupiter strong, Rahu weak, far</td>
                  <td className="p-2 text-green-600">NO/Weak</td>
                  <td className="p-2 text-green-600">Minimal</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Strength Indicators */}
        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm mt-6">
          <h3 className="font-bold text-deepteal-800 text-lg mb-4">Guru Chandal is Stronger When:</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-red-500" />
              <span className="text-gray-700 text-sm">Rahu is strong (exalted/own sign)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-red-500" />
              <span className="text-gray-700 text-sm">Jupiter is weak (debilitated)</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-red-500" />
              <span className="text-gray-700 text-sm">They&apos;re in same house</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-red-500" />
              <span className="text-gray-700 text-sm">Multiple negative aspects present</span>
            </div>
          </div>
        </div>

        {/* CTA Card */}
        <RelatedToolCard
          title="Check Your Guru Chandal Yoga"
          description="Instantly discover if Jupiter-Rahu conflict creates spiritual confusion in your chart"
          href={`/${locale}/tools/yoga-calculator`}
        />
      </section>

      <SectionDivider />

      {/* Section 3: Root Cause */}
      <section id="root-cause">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <BookOpen className="w-5 h-5" />
          </span>
          The Root Cause: Jupiter-Rahu Conflict
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Understanding the conflict helps you manage it. This yoga indicates <strong>past life karma</strong> of pursuing false knowledge, a <strong>this life lesson</strong> to develop discernment, and a <strong>spiritual test</strong> between truth and illusion.
        </p>

        <BlogImage
          src="/images/blog/guru-chandal/analysis.webp"
          alt="Guru Chandal Yoga Analysis"
          caption="The confusion mechanism unfolds in predictable stages"
        />

        {/* Confusion Mechanism Stages */}
        <div className="space-y-4 mt-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-500 text-white font-bold flex-shrink-0 shadow-md">
                1
              </div>
              <div>
                <h4 className="font-bold text-red-800 mb-2">Stage 1: Attraction to False Knowledge</h4>
                <p className="text-gray-700 text-sm">Rahu makes false beliefs seem attractive. Jupiter makes you think it&apos;s wisdom. Result: You pursue them passionately.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500 text-white font-bold flex-shrink-0 shadow-md">
                2
              </div>
              <div>
                <h4 className="font-bold text-orange-800 mb-2">Stage 2: Wasted Effort</h4>
                <p className="text-gray-700 text-sm">You work hard toward wrong goals. Realize too late they&apos;re not serving you. Energy and time wasted.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-500 text-white font-bold flex-shrink-0 shadow-md">
                3
              </div>
              <div>
                <h4 className="font-bold text-amber-800 mb-2">Stage 3: Disappointment</h4>
                <p className="text-gray-700 text-sm">Plans fail despite good intentions. Teachers betray or mislead you. Spiritual confusion deepens.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-500 text-white font-bold flex-shrink-0 shadow-md">
                4
              </div>
              <div>
                <h4 className="font-bold text-green-800 mb-2">Stage 4: Learning (If You&apos;re Conscious)</h4>
                <p className="text-gray-700 text-sm">Recognition of pattern. Development of discernment. Return to true wisdom.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Manifestations */}
      <section id="manifestations">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Users className="w-5 h-5" />
          </span>
          Real-Life Manifestations
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Here&apos;s how Guru Chandal Yoga actually shows up in different areas of life. Understanding these patterns helps you recognize and address them early.
        </p>

        {/* Manifestation Cards */}
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm">
            <h3 className="font-bold text-deepteal-800 text-lg mb-3 flex items-center gap-2">
              <Star className="w-5 h-5 text-deepteal-600" />
              In Spirituality
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Attraction to cults or false gurus</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Following extreme spiritual ideologies</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Spiritual confusion, jumping between paths</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Money wasted on fraudulent services</li>
            </ul>
            <p className="text-xs text-deepteal-600 mt-3 italic">Example: Drawn to a &quot;spiritual teacher&quot; who turns out to be exploitative</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm">
            <h3 className="font-bold text-amber-800 text-lg mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5 text-amber-600" />
              In Beliefs & Worldview
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Holding onto beliefs that don&apos;t serve you</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Stubbornly defending false ideas</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Difficulty accepting truth</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Spreading misinformation unknowingly</li>
            </ul>
            <p className="text-xs text-amber-600 mt-3 italic">Example: Evidence proves belief wrong, yet you keep believing</p>
          </div>

          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-2xl p-6 border border-warmaccent-200 shadow-sm">
            <h3 className="font-bold text-warmaccent-800 text-lg mb-3 flex items-center gap-2">
              <Target className="w-5 h-5 text-warmaccent-600" />
              In Career & Finance
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Following bad business advice</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Investing in scams or fraudulent schemes</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Trusting untrustworthy advisors</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Wasting money on worthless programs</li>
            </ul>
            <p className="text-xs text-warmaccent-600 mt-3 italic">Example: Invest life savings in a &quot;sure thing&quot; that&apos;s a scam</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 shadow-sm">
            <h3 className="font-bold text-orange-800 text-lg mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-orange-600" />
              In Relationships
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Attracted to manipulative partners</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Following partner&apos;s false guidance</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Enabling destructive behavior</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Staying in unhealthy relationships</li>
            </ul>
            <p className="text-xs text-orange-600 mt-3 italic">Example: Stay with partner believing they&apos;ll change despite betrayal</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: False Beliefs & Wasted Potential */}
      <section id="false-beliefs">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <AlertTriangle className="w-5 h-5" />
          </span>
          False Beliefs & Wasted Potential
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          The biggest impact of Guru Chandal is <strong>wasted potential</strong>. You have intelligence (Jupiter), ambition (Rahu), and drive to succeed—but you direct it toward wrong goals, false beliefs, and deceptive paths. The result: <strong>Maximum effort toward minimum results</strong>.
        </p>

        {/* False Belief Patterns Table */}
        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200 shadow-sm">
          <h3 className="font-bold text-red-800 text-lg mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Common False Belief Patterns & Real Costs
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-red-200">
                  <th className="text-left p-2 font-bold text-red-800">False Belief</th>
                  <th className="text-left p-2 font-bold text-red-800">Real Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-red-100">
                  <td className="p-2 text-gray-700">&quot;This guru will enlighten me&quot;</td>
                  <td className="p-2 text-gray-700">Lost money, time, spiritual confusion</td>
                </tr>
                <tr className="border-b border-red-100">
                  <td className="p-2 text-gray-700">&quot;This business scheme is guaranteed&quot;</td>
                  <td className="p-2 text-gray-700">Financial loss, opportunity cost</td>
                </tr>
                <tr className="border-b border-red-100">
                  <td className="p-2 text-gray-700">&quot;This partner loves me despite evidence&quot;</td>
                  <td className="p-2 text-gray-700">Emotional damage, wasted years</td>
                </tr>
                <tr className="border-b border-red-100">
                  <td className="p-2 text-gray-700">&quot;This ideology has all answers&quot;</td>
                  <td className="p-2 text-gray-700">Closed-mindedness, spiritual stagnation</td>
                </tr>
                <tr>
                  <td className="p-2 text-gray-700">&quot;This teacher knows better&quot;</td>
                  <td className="p-2 text-gray-700">Surrendered personal power</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <HighlightBox type="important">
          <p className="font-bold text-deepteal-700 mb-2">The Core Problem:</p>
          <p className="text-sm text-gray-700">
            You have all the ingredients for success—intelligence, drive, ambition—but they&apos;re directed toward wrong targets.
            It&apos;s like being an excellent navigator with a broken compass. The solution isn&apos;t more effort; it&apos;s fixing the compass through discernment.
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 6: Remedies */}
      <section id="remedies">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
            <Shield className="w-5 h-5" />
          </span>
          Guru Chandal Yoga Remedies
        </h2>

        <BlogImage
          src="/images/blog/guru-chandal/remedy.webp"
          alt="Guru Chandal Yoga Remedies"
          caption="Combining spiritual remedies with practical discernment for lasting clarity"
        />

        {/* Remedy 1: Strengthen Jupiter */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm mt-6">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md">
              <Gem className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-amber-800 text-lg mb-2">
                Remedy #1: Strengthen Jupiter (Most Important)
              </h3>
              <p className="text-gray-700 text-sm mb-4">Strengthening Jupiter counteracts Rahu&apos;s deception</p>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-3 border border-amber-100">
                <div>
                  <p className="font-bold text-deepteal-700 text-sm">Yellow Sapphire (Pukhraj)</p>
                  <p className="text-xs text-gray-600">Cost: ₹3,000-15,000 | Metal: Gold | Finger: Index (right hand) | Day: Thursday</p>
                </div>
                <div>
                  <p className="font-bold text-deepteal-700 text-sm">Jupiter Mantra</p>
                  <p className="text-xs text-gray-600 font-mono bg-gray-100 p-2 rounded">Om Gram Greem Graum Sah Guravay Namah</p>
                  <p className="text-xs text-gray-500">108 times daily, Thursday mornings, 40 days minimum</p>
                </div>
                <div>
                  <p className="font-bold text-deepteal-700 text-sm">Jupiter Puja</p>
                  <p className="text-xs text-gray-600">Cost: ₹2,000-5,000 | Thursday ritual | Offerings: Yellow flowers, turmeric, honey</p>
                </div>
              </div>
              <p className="text-xs text-green-600 mt-3 font-bold">Effectiveness: HIGH (70-80%)</p>
            </div>
          </div>
        </div>

        {/* Remedy 2: Weaken Rahu */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 border border-gray-300 shadow-sm mt-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 text-white flex-shrink-0 shadow-md">
              <Eye className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-gray-800 text-lg mb-2">
                Remedy #2: Weaken Rahu (Secondary)
              </h3>
              <p className="text-gray-700 text-sm mb-4">Reducing Rahu&apos;s influence limits deceptive patterns</p>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-3 border border-gray-200">
                <div>
                  <p className="font-bold text-deepteal-700 text-sm">Gomed (Hessonite) - Use with caution</p>
                  <p className="text-xs text-gray-600">Cost: ₹2,000-8,000 | Consult astrologer first (can backfire)</p>
                </div>
                <div>
                  <p className="font-bold text-deepteal-700 text-sm">Rahu Mantra</p>
                  <p className="text-xs text-gray-600 font-mono bg-gray-100 p-2 rounded">Om Bhram Bhreem Bhroum Sah Rahave Namah</p>
                  <p className="text-xs text-gray-500">108 times Saturdays, 40 days</p>
                </div>
                <div>
                  <p className="font-bold text-deepteal-700 text-sm">Naga Puja</p>
                  <p className="text-xs text-gray-600">Cost: ₹2,000-5,000 | Ritual for serpent pacification</p>
                </div>
              </div>
              <p className="text-xs text-orange-600 mt-3 font-bold">Effectiveness: MODERATE (50-60%)</p>
            </div>
          </div>
        </div>

        {/* Remedy 3: Develop Discernment */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-sm mt-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white flex-shrink-0 shadow-md">
              <Sparkles className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-green-800 text-lg mb-2">
                Remedy #3: Develop Discernment (Most Powerful)
              </h3>
              <p className="text-gray-700 text-sm mb-4">Real remedy is learning to distinguish truth from illusion</p>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-3 border border-green-100">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700"><strong>Meditation:</strong> 30 mins daily on inner wisdom vs external confusion</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700"><strong>Study:</strong> Read authentic spiritual texts, learn from verified teachers</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700"><strong>Critical Thinking:</strong> Question everything, research claims, test beliefs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-gray-700"><strong>Mentorship:</strong> Find genuine, ethical guides with verified integrity</span>
                </div>
              </div>
              <p className="text-xs text-green-700 mt-3 font-bold">Effectiveness: HIGHEST (90%+) | Cost: FREE</p>
            </div>
          </div>
        </div>

        {/* Remedy 4: Behavioral Correction */}
        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm mt-4">
          <h3 className="font-bold text-deepteal-800 text-lg mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5" />
            Remedy #4: Behavioral Correction
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-bold text-red-600 text-sm mb-2">STOP:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Following unverified gurus</li>
                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Pursuing schemes/shortcuts</li>
                <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-500" /> Defending false beliefs stubbornly</li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-green-600 text-sm mb-2">START:</p>
              <ul className="text-sm text-gray-700 space-y-1">
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Practice humility about knowledge</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Question deceptive patterns</li>
                <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Choose trusted, verified guides</li>
              </ul>
            </div>
          </div>
          <p className="text-xs text-deepteal-600 mt-4 font-bold">Effectiveness: HIGHEST (addresses root cause)</p>
        </div>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-deepteal-100 text-deepteal-600">
            <Lightbulb className="w-5 h-5" />
          </span>
          Reclaim Your Clarity
        </h2>

        <BlogImage
          src="/images/blog/guru-chandal/reference.webp"
          alt="Wisdom Through Experience"
          caption="Your confusion is your teacher if you pay attention"
        />

        <p className="text-gray-700 mb-6 leading-relaxed">
          <strong>Here&apos;s the truth about Guru Chandal Yoga:</strong> It&apos;s not a permanent handicap. It&apos;s a <strong>classroom where you learn discernment</strong>. The confusion you experience is meant to teach you the importance of questioning, value of verification, danger of blind belief, and power of personal wisdom.
        </p>

        <HighlightBox type="tip">
          <p className="font-bold text-deepteal-700 mb-2">People with Guru Chandal who master it often become:</p>
          <ul className="text-sm text-gray-700 space-y-1 mt-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Incredible teachers (knowing what NOT to teach)</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Excellent judges of character</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Wise decision-makers</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Spiritual anchors for others</li>
          </ul>
        </HighlightBox>

        <RelatedToolCard
          title="Discover Your Guru Chandal Yoga"
          description="Understand Jupiter-Rahu conflict and develop clarity for true wisdom"
          href={`/${locale}/tools/yoga-calculator`}
        />

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="font-bold text-deepteal-800 text-lg mb-4">Related Tools for Complete Understanding</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href={`/${locale}/tools/kundli`} className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-4 border border-deepteal-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-deepteal-700">Kundli Generator</p>
              <p className="text-xs text-gray-600">See Jupiter-Rahu positions in your chart</p>
            </Link>
            <Link href={`/${locale}/tools/mahadasha`} className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-amber-700">Mahadasha Calculator</p>
              <p className="text-xs text-gray-600">Check Jupiter/Rahu periods when yoga activates</p>
            </Link>
            <Link href={`/${locale}/tools/raj-yoga`} className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-4 border border-warmaccent-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-warmaccent-700">Raj Yoga Calculator</p>
              <p className="text-xs text-gray-600">Balance with positive yogas</p>
            </Link>
            <Link href={`/${locale}/tools/lagna`} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-orange-700">Lagna Calculator</p>
              <p className="text-xs text-gray-600">See ascendant&apos;s role in discernment</p>
            </Link>
          </div>
        </div>

        <p className="text-center text-deepteal-700 font-bold mt-8 text-lg">
          Your wisdom is hidden beneath the illusion. Find it.
        </p>
      </section>
    </div>
  );
}
