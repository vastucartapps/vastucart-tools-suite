'use client';

import Link from 'next/link';
import { Calculator, Users, Heart, Briefcase, Activity, AlertTriangle, CheckCircle, Sparkles, Shield, TrendingUp, Target } from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  RelatedToolCard,
  StatsCard,
  ComparisonTable,
} from '../blog-content';

interface PitraDoshaPostProps {
  locale: string;
}

export default function PitraDoshaPost({ locale }: PitraDoshaPostProps) {
  return (
    <div className="space-y-8">
      {/* Opening Box */}
      <HighlightBox type="important">
        <h4 className="font-bold text-saffron-800 mb-2">Your Challenges May Not Be Yours Alone</h4>
        <p className="text-gray-700 text-sm">
          If your family has struggled with the same problems for 2-3 generations, you may have Pitra Dosha—ancestral
          karma passed down through your family line. But here's the empowering truth: Understanding ancestral patterns
          is the first step to breaking them. Unlike other karmic debts, Pitra Dosha can be completely resolved in 1-3
          years through specific remedies.
        </p>
      </HighlightBox>

      <StatsCard
        stats={[
          { label: 'Resolution Time', value: '1-3 Years' },
          { label: 'Causes', value: '4 Main' },
          { label: 'Remedies', value: '5 Powerful' },
          { label: 'Cost', value: 'FREE-₹5K' },
        ]}
      />

      {/* Section 1: What Is Pitra Dosha */}
      <section id="what-is-pitra">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <AlertTriangle className="w-5 h-5" />
          </span>
          What Is Pitra Dosha?
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          <strong className="text-teal-700">Pitra = Ancestors. Dosha = Debt or Flaw.</strong>
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Pitra Dosha is a <strong>karmic obligation inherited from your ancestors</strong>. In Vedic astrology, the
          universe operates on karma: good actions create positive karma, bad actions or unfulfilled duties create
          negative karma—and this karma doesn't disappear, it passes to the next generation.
        </p>

        <BlogImage
          src="/images/blog/pitra-dosha/concept.webp"
          alt="Pitra Dosha Ancestral Karma Concept"
          caption="Understanding ancestral debt: How your ancestor's unfulfilled karma becomes your responsibility to resolve"
        />

        <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-200 shadow-sm mb-6">
          <h3 className="font-bold text-saffron-800 text-lg mb-4">How Ancestral Debt Works</h3>
          <p className="text-gray-700 text-sm mb-4">
            If your ancestors broke promises, mistreated others, neglected responsibilities, died with unresolved
            conflicts, or betrayed someone's trust—their unpaid karma becomes YOUR burden.
          </p>
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-saffron-100">
            <p className="text-sm font-bold text-saffron-700 mb-2">Think of it like inherited financial debt:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Your ancestor borrowed money but didn't repay</li>
              <li>• The debt gets passed to the next generation</li>
              <li>• You inherit the responsibility</li>
              <li>• The chain continues until someone pays it back</li>
            </ul>
          </div>
        </div>

        {/* Astrological Causes */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm mb-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4">Astrological Causes of Pitra Dosha</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
              <p className="font-bold text-teal-700 mb-2">1. Rahu/Ketu in 9th House</p>
              <p className="text-sm text-gray-700">Most common cause. Indicates unresolved ancestral issues in the dharma house.</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
              <p className="font-bold text-teal-700 mb-2">2. Debilitated Sun</p>
              <p className="text-sm text-gray-700">Sun in Libra (weakest). Weak father line, weak ancestral authority.</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
              <p className="font-bold text-teal-700 mb-2">3. Weak 9th House</p>
              <p className="text-sm text-gray-700">9th house = ancestors. Afflicted planets here indicate ancestral debt.</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
              <p className="font-bold text-teal-700 mb-2">4. Weak/Retrograde Jupiter</p>
              <p className="text-sm text-gray-700">Jupiter = dharma. Weak Jupiter means inability to complete ancestral duties.</p>
            </div>
          </div>
        </div>

        <HighlightBox type="tip">
          <p className="text-sm text-gray-700">
            <strong className="text-teal-700">Liberating Truth:</strong> Unlike other doshas, Pitra Dosha is COMPLETELY
            CURABLE through specific ancestral remedies. Once you acknowledge, perform remedies, and resolve the debt,
            it completely disappears—and your life transforms.
          </p>
        </HighlightBox>

        <HighlightBox type="note">
          <p className="text-sm text-gray-700">
            <strong className="text-teal-700">Hinglish Reality:</strong> "Pitra Dosha ka matlab yeh nahi ki aap 'unlucky'
            ho. Matlab aapke ancestors ne kuch unfinished business chod di, aur voh karma ab aapke paas aa gaya. Lekin
            shukar hai, aap isko resolve kar sakte ho. Jab aap apne ancestors ke liye proper rituals karte ho, toh unka
            dosha khatam hota hai—aur aapka life badal jata hai."
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 2: How to Check */}
      <section id="how-to-check">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Check If You Have Pitra Dosha
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          You need to examine your <Link href={`/${locale}/tools/kundli`} className="text-saffron-600 hover:underline">birth chart</Link> for specific planetary placements. Generate your complete Kundli with exact birth date, time, and location.
        </p>

        {/* Step-by-step cards */}
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-5 border border-teal-200 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white mb-3 shadow-md text-lg font-bold">
              1
            </div>
            <h3 className="font-bold text-teal-800 text-base mb-2">Generate Chart</h3>
            <p className="text-gray-700 text-sm">
              Use <Link href={`/${locale}/tools/kundli`} className="font-semibold text-teal-700 hover:text-saffron-600 transition-colors">Kundli Calculator</Link> for full natal chart.
            </p>
          </div>

          <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-5 border border-saffron-200 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-orange-500 text-white mb-3 shadow-md text-lg font-bold">
              2
            </div>
            <h3 className="font-bold text-saffron-800 text-base mb-2">Check 9th House</h3>
            <p className="text-gray-700 text-sm">
              Look for Rahu/Ketu in 9th house (ancestral house).
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-5 border border-amber-200 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white mb-3 shadow-md text-lg font-bold">
              3
            </div>
            <h3 className="font-bold text-amber-800 text-base mb-2">Check Sun/Jupiter</h3>
            <p className="text-gray-700 text-sm">
              Verify if Sun is debilitated or Jupiter is weak/retrograde.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-5 border border-teal-200 shadow-sm">
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white mb-3 shadow-md text-lg font-bold">
              4
            </div>
            <h3 className="font-bold text-teal-800 text-base mb-2">Use Calculator</h3>
            <p className="text-gray-700 text-sm">
              <Link href={`/${locale}/tools/pitra-dosha`} className="font-semibold text-teal-700 hover:text-saffron-600 transition-colors">Pitra Dosha Calculator</Link> analyzes instantly.
            </p>
          </div>
        </div>

        {/* Indicator strength table */}
        <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-200 shadow-sm mb-6">
          <h3 className="font-bold text-saffron-800 text-lg mb-4">Pitra Dosha Strength Levels</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-saffron-200">
                  <th className="text-left p-2 font-bold text-saffron-800">Indicator</th>
                  <th className="text-left p-2 font-bold text-saffron-800">Presence</th>
                  <th className="text-left p-2 font-bold text-saffron-800">Strength</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-saffron-100">
                  <td className="p-2 text-gray-700">Rahu/Ketu in 9th</td>
                  <td className="p-2 text-gray-700">Yes</td>
                  <td className="p-2 font-bold text-orange-700">Strong Pitra Dosha</td>
                </tr>
                <tr className="border-b border-saffron-100">
                  <td className="p-2 text-gray-700">Debilitated Sun</td>
                  <td className="p-2 text-gray-700">Yes</td>
                  <td className="p-2 font-bold text-amber-700">Moderate Pitra Dosha</td>
                </tr>
                <tr className="border-b border-saffron-100">
                  <td className="p-2 text-gray-700">Weak Jupiter</td>
                  <td className="p-2 text-gray-700">Yes</td>
                  <td className="p-2 font-bold text-amber-700">Moderate Pitra Dosha</td>
                </tr>
                <tr className="border-b border-saffron-100">
                  <td className="p-2 text-gray-700">Multiple indicators</td>
                  <td className="p-2 text-gray-700">Yes</td>
                  <td className="p-2 font-bold text-orange-700">Very Strong Pitra Dosha</td>
                </tr>
                <tr>
                  <td className="p-2 text-gray-700">No indicators</td>
                  <td className="p-2 text-gray-700">No</td>
                  <td className="p-2 font-bold text-teal-700">No Pitra Dosha</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <RelatedToolCard
          title="Pitra Dosha Calculator"
          description="Instant analysis: Yes/No status, strength level, ancestral line affected, and specific remedies"
          icon={<Calculator className="w-6 h-6" />}
          href={`/${locale}/tools/pitra-dosha`}
        />
      </section>

      <SectionDivider />

      {/* Section 3: Common Family Patterns */}
      <section id="patterns">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Users className="w-5 h-5" />
          </span>
          Common Family Patterns Indicating Pitra Dosha
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          You don't always need a calculator. Sometimes your <strong className="text-teal-700">family history tells the story</strong>.
          If you notice problems repeating across 2-3 generations, it's likely ancestral karma.
        </p>

        <BlogImage
          src="/images/blog/pitra-dosha/impact.webp"
          alt="Family Patterns and Generational Cycles in Pitra Dosha"
          caption="5 common patterns: Financial struggles, relationship failures, health issues, fertility problems, and family conflicts repeating across generations"
        />

        {/* 5 Pattern Cards */}
        <div className="space-y-4 mb-6">
          {/* Pattern 1: Financial */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white flex-shrink-0 shadow-md">
                <Briefcase className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-800 text-lg mb-2">Financial Struggles Across Generations</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-teal-100">
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">Pattern:</strong> Grandfather lost business → Father struggled financially → You earn well but money disappears</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">Meaning:</strong> Ancestral unresolved financial karma or broken financial promises</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">Likely Cause:</strong> Ancestor stole/cheated, broke loan commitment, betrayed business partner, or made false financial promises</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pattern 2: Relationships */}
          <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-orange-500 text-white flex-shrink-0 shadow-md">
                <Heart className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-saffron-800 text-lg mb-2">Relationship Failures in Family Line</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-saffron-100">
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Pattern:</strong> Grandfather had failed marriage → Father had relationship issues → You struggle despite wanting stability</p>
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Meaning:</strong> Ancestral unresolved emotional karma or broken marriage commitments</p>
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Likely Cause:</strong> Ancestor abandoned partner, cheated, broke marriage vows, or mistreated spouse</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pattern 3: Health */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                <Activity className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">Health Issues Repeating Across Generations</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-amber-100">
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Pattern:</strong> Grandmother had diabetes → Mother has diabetes → You developed diabetes despite health efforts</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Meaning:</strong> Ancestral debt related to physical harm or inherited karmic imbalance</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Likely Cause:</strong> Ancestor harmed someone's health, refused to help suffering person, or caused injury</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pattern 4: Children */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white flex-shrink-0 shadow-md">
                <Users className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-800 text-lg mb-2">Difficulty Having Children</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-teal-100">
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">Pattern:</strong> Grandmother couldn't have children → Mother struggled with fertility → You're having conception issues</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">Meaning:</strong> Ancestral debt affecting reproductive capacity and family line continuation</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">Likely Cause:</strong> Ancestor harmed reproductive capacity, caused abortion/miscarriage, or separated parent and child</p>
                </div>
              </div>
            </div>
          </div>

          {/* Pattern 5: Conflicts */}
          <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-orange-500 text-white flex-shrink-0 shadow-md">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-saffron-800 text-lg mb-2">Constant Family Conflicts</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-saffron-100">
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Pattern:</strong> Grandfather had severe family disputes → Father had ongoing conflicts → Your family is always in turmoil</p>
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Meaning:</strong> Ancestral unresolved conflicts or broken family bonds</p>
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Likely Cause:</strong> Ancestor caused major disputes, refused to forgive, betrayed trust, or created deep divisions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: How Affects You */}
      <section id="how-affects">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Target className="w-5 h-5" />
          </span>
          How Ancestral Debt Affects YOU
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Here's the mechanism of how your ancestor's karma becomes your problem. Think of Pitra Dosha like unpaid debt
          being inherited: your ancestor created the debt, you inherited the responsibility, and you must pay it back
          through suffering OR through conscious remedies.
        </p>

        <BlogImage
          src="/images/blog/pitra-dosha/timeline.webp"
          alt="How Ancestral Karma Transfers Across Generations"
          caption="The energy transfer: Ancestral debt flows through family lines until someone consciously resolves it"
        />

        {/* Life Areas Affected Table */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm mb-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4">Specific Life Areas Affected by Pitra Dosha</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-teal-200">
                  <th className="text-left p-2 font-bold text-teal-800">Life Area</th>
                  <th className="text-left p-2 font-bold text-teal-800">How Pitra Dosha Manifests</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Finance</td>
                  <td className="p-2 text-gray-700">Money earned disappears, losses, debt cycles</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Marriage</td>
                  <td className="p-2 text-gray-700">Relationship failures, infidelity patterns, divorce</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Children</td>
                  <td className="p-2 text-gray-700">Infertility, miscarriages, child health issues</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Career</td>
                  <td className="p-2 text-gray-700">Job loss despite qualification, stagnation</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Health</td>
                  <td className="p-2 text-gray-700">Inherited diseases, unexplained illnesses, accidents</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Mental Health</td>
                  <td className="p-2 text-gray-700">Depression, anxiety, suicidal thoughts (serious cases)</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-teal-700">Family</td>
                  <td className="p-2 text-gray-700">Constant conflict, abuse cycles, betrayal patterns</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <HighlightBox type="important">
          <p className="text-sm text-gray-700">
            <strong className="text-teal-700">The Good News:</strong> Unlike other doshas, Pitra Dosha has a completion
            mechanism. Once you (1) Acknowledge the ancestral issue, (2) Perform remedies to honor ancestors, and (3)
            Resolve the specific debt—the dosha completely disappears and your life transforms.
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 5: Breaking Cycles */}
      <section id="breaking-cycles">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <TrendingUp className="w-5 h-5" />
          </span>
          Breaking Generational Cycles
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          This is the most powerful section because it gives you <strong className="text-teal-700">agency</strong>. You
          shift from victim to healer of your family line.
        </p>

        {/* 5-Step Process */}
        <div className="grid md:grid-cols-1 gap-4 mb-6">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm">
            <h3 className="font-bold text-teal-800 text-lg mb-3 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 text-white text-sm">1</span>
              Recognize the Pattern
            </h3>
            <p className="text-sm text-gray-700 ml-10">
              Look at your family history and identify the repeating problem. Ask: What has my family repeated for 2-3
              generations? What did ancestors struggle with? What conflicts were never resolved?
            </p>
          </div>

          <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-200 shadow-sm">
            <h3 className="font-bold text-saffron-800 text-lg mb-3 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-saffron-600 text-white text-sm">2</span>
              Acknowledge the Debt
            </h3>
            <p className="text-sm text-gray-700 ml-10 mb-2">
              Don't blame yourself for inherited karma, but DO take responsibility for resolving it.
            </p>
            <div className="ml-10 bg-white/80 backdrop-blur rounded-xl p-3 border border-saffron-100">
              <p className="text-xs text-gray-700 mb-1">❌ "My family is cursed; there's nothing I can do"</p>
              <p className="text-xs text-gray-700">✅ "My ancestors left this debt; I can resolve it and free my family line"</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm">
            <h3 className="font-bold text-amber-800 text-lg mb-3 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-600 text-white text-sm">3</span>
              Perform Ancestral Remedies
            </h3>
            <p className="text-sm text-gray-700 ml-10">
              The specific rituals you perform act as payment of the ancestral debt. See remedies section below for the
              5 most powerful solutions.
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm">
            <h3 className="font-bold text-teal-800 text-lg mb-3 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 text-white text-sm">4</span>
              Change Your Behavior
            </h3>
            <p className="text-sm text-gray-700 ml-10">
              <strong className="text-teal-700">Crucial:</strong> If your ancestor cheated financially, you must practice
              complete honesty. If they betrayed relationships, you must practice loyalty. Remedy + behavior change =
              complete healing.
            </p>
          </div>

          <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-200 shadow-sm">
            <h3 className="font-bold text-saffron-800 text-lg mb-3 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-saffron-600 text-white text-sm">5</span>
              Bless Your Descendants
            </h3>
            <p className="text-sm text-gray-700 ml-10">
              Once you've resolved your family's Pitra Dosha, consciously bless your children and future generations.
              This breaks the cycle and prevents them from inheriting the same karma.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Remedies */}
      <section id="remedies">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Shield className="w-5 h-5" />
          </span>
          Pitra Dosha Remedies (5 Powerful Solutions)
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          These are the most effective remedies for resolving ancestral karma. Unlike other doshas, Pitra Dosha
          responds powerfully to ancestral rituals and can be completely resolved.
        </p>

        <BlogImage
          src="/images/blog/pitra-dosha/ritual.webp"
          alt="Pitra Dosha Remedies and Ancestral Rituals"
          caption="5 powerful solutions: Shradh ritual, ancestral donations, Yellow Sapphire, Aditya Hridayam, and sacred pilgrimages"
        />

        {/* 5 Remedies */}
        <div className="space-y-4 mb-6">
          {/* Remedy 1: Shradh - MOST POWERFUL */}
          <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl p-6 border-2 border-teal-400 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white flex-shrink-0 shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-800 text-lg mb-2 flex items-center gap-2">
                  Remedy #1: Perform Shradh Ritual
                  <span className="text-xs bg-teal-500 text-white px-2 py-1 rounded-full">MOST POWERFUL</span>
                </h3>
                <div className="bg-white/90 backdrop-blur rounded-xl p-4 space-y-2 border border-teal-200">
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">What it is:</strong> Sacred ritual honoring deceased ancestors</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">Cost:</strong> ₹1,000-5,000 (priest fees)</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">When:</strong> New moon day (Amavasya) monthly or ancestor's death anniversary</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">How:</strong> Invite Brahmin priest, offer food (khichdi, tilkul, black sesame), chant `Om Pitru Devaya Namaha`, feed 3-5 Brahmins</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">Why it works:</strong> Directly communicates with ancestors and fulfills incomplete desires</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">Effectiveness:</strong> <span className="font-bold text-teal-700">HIGHEST (95% when done correctly)</span></p>
                  <p className="text-xs text-teal-600 font-bold mt-2">⭐ Continue monthly/annually for 1-3 years until dosha resolves</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 2: Donations */}
          <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-orange-500 text-white flex-shrink-0 shadow-md">
                <Heart className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-saffron-800 text-lg mb-2">Remedy #2: Donate in Ancestor's Name</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-saffron-100">
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">What to donate:</strong> Food (rice, wheat, lentils), clothes, medical help, education to poor children</p>
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Cost:</strong> ₹500-5,000 per month</p>
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">When:</strong> On Amavasya (new moon) days</p>
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Intention:</strong> "I donate this in the name of my ancestors"—give with genuine compassion</p>
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Why it works:</strong> Creates positive karma that cancels negative ancestral debt</p>
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Effectiveness:</strong> High (75% when combined with Shradh)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 3: Yellow Sapphire */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">Remedy #3: Wear Yellow Sapphire (Pukhraj)</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-amber-100">
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">For whom:</strong> People with weak Jupiter in chart</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Cost:</strong> ₹3,000-15,000</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">How to wear:</strong> Gold/yellow metal ring on index finger of right hand, Thursday</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Mantra:</strong> `Om Gram Greem Graum Sah Guravay Namah` (108 times)</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Why it works:</strong> Strengthens Jupiter, planet of dharma and ancestral duty</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Effectiveness:</strong> Moderate (60%, works better with Shradh)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 4: Aditya Hridayam */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white flex-shrink-0 shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-800 text-lg mb-2">Remedy #4: Chant Aditya Hridayam (Sun Prayer)</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-teal-100">
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">For whom:</strong> Those with weak Sun in chart</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">What to chant:</strong> Aditya Hridayam (12-line hymn to Sun God)</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">When:</strong> Every morning facing East at sunrise</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">Duration:</strong> 40 days minimum, ideally 120 days</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">Cost:</strong> FREE</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">Why it works:</strong> Sun represents father/ancestors/dharma. Strengthens ancestral line and restores paternal blessings</p>
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">Effectiveness:</strong> High (70%, perfect complement to Shradh)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 5: Pilgrimage */}
          <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-orange-500 text-white flex-shrink-0 shadow-md">
                <Target className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-saffron-800 text-lg mb-2">Remedy #5: Pilgrimage to Sacred Sites</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-saffron-100">
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Recommended:</strong> Gaya (Bodh Gaya) - most powerful, Varanasi, Kurukshetra, Rishikesh</p>
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Cost:</strong> ₹10,000-50,000 (travel + accommodation + rituals)</p>
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Duration:</strong> 3-7 days</p>
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Ritual:</strong> Perform Pind Daan (offering rice balls) for ancestors at sacred sites</p>
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Why it works:</strong> These sites have concentrated spiritual energy for ancestral liberation</p>
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">Effectiveness:</strong> HIGHEST (90%+ when combined with Shradh)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <CheckCircle className="w-5 h-5" />
          </span>
          Heal Your Family Line
        </h2>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-8 border-2 border-teal-300 shadow-lg mb-6">
          <h3 className="font-bold text-teal-800 text-xl mb-4">The Liberating Truth About Pitra Dosha:</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Your family's repeating problems are <strong className="text-saffron-700">not random misfortune. They're
            ancestral karma asking for resolution.</strong>
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            And unlike most karmic debts that take lifetimes to resolve, <strong className="text-teal-700">Pitra Dosha
            can be resolved in 1-3 years through conscious remedies.</strong>
          </p>
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-teal-200">
            <h4 className="font-bold text-teal-700 mb-3">This means:</h4>
            <FeatureList
              items={[
                'You can stop the cycle TODAY',
                'Your children won\'t inherit the same problems',
                'Your family line can heal and prosper',
                'Generations of struggle can end with YOU',
              ]}
              variant="check"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-8 border-2 border-saffron-300 shadow-lg mb-6">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            <strong className="text-saffron-800">The question isn't "Can I escape ancestral karma?"</strong>
          </p>
          <p className="text-xl font-bold text-teal-700 mb-4">
            The question is "Will I be the generation that finally resolves it?"
          </p>
          <p className="text-gray-700 leading-relaxed">
            When you perform Shradh, donate in ancestor's name, chant for ancestors, and honor their memory—you're not
            doing it for them. <strong className="text-saffron-700">You're doing it for yourself and your descendants.</strong>
          </p>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Your family's suffering doesn't have to continue. Break the cycle. Heal your ancestors. Free your descendants.
        </p>

        <p className="text-gray-700 text-xl leading-relaxed font-bold text-center">
          <span className="text-teal-700">The power to change your family line starts with you.</span>
        </p>
      </section>

      {/* Related Tools */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <RelatedToolCard
          title="Kundli Generator"
          description="See your 9th house (ancestral house) and Jupiter placement to understand Pitra Dosha"
          icon={<Calculator className="w-6 h-6" />}
          href={`/${locale}/tools/kundli`}
        />
        <RelatedToolCard
          title="Sade Sati Calculator"
          description="Saturn may test your ancestral karma resolution during its 7.5-year cycle"
          icon={<Shield className="w-6 h-6" />}
          href={`/${locale}/tools/sade-sati`}
        />
        <RelatedToolCard
          title="Lagna Calculator"
          description="Understand how ancestral patterns affect your personality and approach to life"
          icon={<Target className="w-6 h-6" />}
          href={`/${locale}/tools/lagna`}
        />
        <RelatedToolCard
          title="Mahadasha Calculator"
          description="Check if Jupiter Dasha is activating ancestral issues in your life timeline"
          icon={<TrendingUp className="w-6 h-6" />}
          href={`/${locale}/tools/mahadasha`}
        />
      </div>
    </div>
  );
}
