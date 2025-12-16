'use client';

import Link from 'next/link';
import { Swords, Flame, Shield, Target, AlertTriangle, Users, Briefcase, Heart, Brain, Dumbbell, Gem, CheckCircle, XCircle, Zap } from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  RelatedToolCard,
  StatsCard,
} from '../blog-content';

interface AngarakYogaPostProps {
  locale: string;
}

export default function AngarakYogaPost({ locale }: AngarakYogaPostProps) {
  return (
    <div className="space-y-8">
      {/* Opening Box */}
      <HighlightBox type="warning">
        <h4 className="font-bold text-saffron-800 mb-2">The Internal War: Courage vs Fear</h4>
        <p className="text-gray-700 text-sm">
          Angarak Yoga creates two opposite forces battling inside you. Mars (warrior) wants to attack while Saturn (judge) says &quot;Don&apos;t move.&quot;
          Result: Internal paralysis mixed with explosive energy. You have courage but hesitate. You see opportunity but fear takes over.
          The remedy is channeling this conflict into focused power.
        </p>
      </HighlightBox>

      <StatsCard
        stats={[
          { label: 'Core Conflict', value: 'Mars vs Saturn' },
          { label: 'Effect', value: 'Blocked Energy' },
          { label: 'Remedy Focus', value: 'Channel Power' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      {/* Section 1: What Is Angarak Yoga */}
      <section id="what-is-angarak">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Swords className="w-5 h-5" />
          </span>
          What Is Angarak Yoga?
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          <strong className="text-teal-700">Anga = Body/Limb (Mars). Rak = Cut/Block (Saturn).</strong> Angarak Yoga is a <strong>blocking of aggressive energy</strong> through Saturn&apos;s restrictive influence. It occurs when Mars and Saturn are conjunct or in opposition in your <Link href={`/${locale}/tools/kundli`} className="text-saffron-600 hover:underline">birth chart</Link>.
        </p>

        <BlogImage
          src="/images/blog/angarak-yoga/hero.webp"
          alt="Angarak Yoga - Mars Saturn Conflict"
          caption="When Mars (fire) meets Saturn (ice), the internal battle begins"
        />

        {/* How It Forms */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm mt-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            How Angarak Forms
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <span className="text-gray-700"><strong>Conjunction:</strong> Mars and Saturn in same house</span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <span className="text-gray-700"><strong>Opposition:</strong> Mars and Saturn in 1st-7th axis</span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <span className="text-gray-700"><strong>Close Orb:</strong> Conjunct within 8 degrees</span>
            </div>
          </div>
        </div>

        {/* Mars vs Saturn */}
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-red-500 to-orange-500 text-white flex-shrink-0 shadow-md">
                <Flame className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-red-800 text-lg mb-2">Mars Represents</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> Courage, initiative, boldness</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> Quick action, aggressive pursuit</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> Warrior energy, fighting spirit</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-red-500" /> Physical power, ambition</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-6 border border-gray-300 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-gray-600 to-gray-700 text-white flex-shrink-0 shadow-md">
                <Shield className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-lg mb-2">Saturn Represents</h3>
                <ul className="text-gray-700 text-sm space-y-1">
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-gray-500" /> Discipline, restriction, fear</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-gray-500" /> Slow, cautious movement</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-gray-500" /> Limitation, boundaries, doubt</li>
                  <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-gray-500" /> Control, regulation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <HighlightBox type="note">
          <p className="text-sm text-gray-700">
            <strong className="text-teal-700">Hinglish Reality:</strong> &quot;Angarak Yoga matlab aapke andar do forces ladai karte hain. Mars kehta hai &apos;Chalo, aggressive ho!&apos; Saturn kehta hai &apos;Nahi, rukh ja, dar le!&apos; Result: Aap paralyzed ho jate ho—na aage, na peeche.&quot;
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 2: How to Check */}
      <section id="how-to-check">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <Target className="w-5 h-5" />
          </span>
          How to Check If You Have Angarak
        </h2>

        <BlogImage
          src="/images/blog/angarak-yoga/concept.webp"
          alt="Angarak Yoga Configuration"
          caption="Mars and Saturn positions determine Angarak strength"
        />

        {/* Configuration Table */}
        <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-200 shadow-sm mt-6">
          <h3 className="font-bold text-saffron-800 text-lg mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5" />
            Angarak Configuration Strength
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-saffron-200">
                  <th className="text-left p-2 font-bold text-saffron-800">Configuration</th>
                  <th className="text-left p-2 font-bold text-saffron-800">Angarak?</th>
                  <th className="text-left p-2 font-bold text-saffron-800">Strength</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-saffron-100 bg-red-50">
                  <td className="p-2 text-gray-700">Same house (conjunction)</td>
                  <td className="p-2 font-bold text-red-600">YES</td>
                  <td className="p-2 font-bold text-red-600">STRONG</td>
                </tr>
                <tr className="border-b border-saffron-100 bg-red-50">
                  <td className="p-2 text-gray-700">1st-7th axis (opposition)</td>
                  <td className="p-2 font-bold text-red-600">YES</td>
                  <td className="p-2 font-bold text-red-600">STRONG</td>
                </tr>
                <tr className="border-b border-saffron-100 bg-orange-50">
                  <td className="p-2 text-gray-700">Within 8 degrees</td>
                  <td className="p-2 font-bold text-orange-600">YES</td>
                  <td className="p-2 text-orange-600">Moderate</td>
                </tr>
                <tr className="border-b border-saffron-100">
                  <td className="p-2 text-gray-700">Same sign, farther</td>
                  <td className="p-2 text-orange-600">PARTIAL</td>
                  <td className="p-2 text-orange-600">Weak</td>
                </tr>
                <tr>
                  <td className="p-2 text-gray-700">Different signs, far</td>
                  <td className="p-2 text-green-600">NO</td>
                  <td className="p-2 text-green-600">-</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <RelatedToolCard
          title="Check Your Angarak Yoga"
          description="Discover if Mars-Saturn conflict blocks your power and learn resolution"
          href={`/${locale}/tools/yoga-calculator`}
        />
      </section>

      <SectionDivider />

      {/* Section 3: Conflict Explained */}
      <section id="conflict">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Swords className="w-5 h-5" />
          </span>
          Mars-Saturn Conflict Explained
        </h2>

        <BlogImage
          src="/images/blog/angarak-yoga/analysis.webp"
          alt="Mars Saturn Internal Conflict"
          caption="The internal war has three dimensions"
        />

        <div className="space-y-4 mt-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200 shadow-sm">
            <h3 className="font-bold text-red-800 text-lg mb-3">Dimension 1: Courage vs Fear</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-sm">
                <p className="font-bold text-red-600">Mars says:</p>
                <p className="text-gray-700">&quot;Go for it! Take the risk!&quot;</p>
              </div>
              <div className="text-sm">
                <p className="font-bold text-gray-600">Saturn says:</p>
                <p className="text-gray-700">&quot;Wait, what if it fails? Play safe.&quot;</p>
              </div>
            </div>
            <p className="text-xs text-red-600 mt-3 italic font-bold">Result: Paralysis. You miss opportunities while deliberating.</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 shadow-sm">
            <h3 className="font-bold text-orange-800 text-lg mb-3">Dimension 2: Action vs Caution</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-sm">
                <p className="font-bold text-orange-600">Mars says:</p>
                <p className="text-gray-700">&quot;Act now, figure it out later!&quot;</p>
              </div>
              <div className="text-sm">
                <p className="font-bold text-gray-600">Saturn says:</p>
                <p className="text-gray-700">&quot;Plan everything first, never rush.&quot;</p>
              </div>
            </div>
            <p className="text-xs text-orange-600 mt-3 italic font-bold">Result: Delayed action. Opportunity passes by.</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm">
            <h3 className="font-bold text-amber-800 text-lg mb-3">Dimension 3: Aggression vs Control</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="text-sm">
                <p className="font-bold text-amber-600">Mars says:</p>
                <p className="text-gray-700">&quot;Assert yourself! Don&apos;t be pushed around!&quot;</p>
              </div>
              <div className="text-sm">
                <p className="font-bold text-gray-600">Saturn says:</p>
                <p className="text-gray-700">&quot;Control yourself, stay humble.&quot;</p>
              </div>
            </div>
            <p className="text-xs text-amber-600 mt-3 italic font-bold">Result: Suppressed anger. Frustration builds internally.</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Life Impact */}
      <section id="impact">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <AlertTriangle className="w-5 h-5" />
          </span>
          Life Impact: Where You Feel Blocked
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm">
            <h3 className="font-bold text-teal-800 text-lg mb-3 flex items-center gap-2">
              <Briefcase className="w-5 h-5" />
              In Career
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> See promotion but hesitate</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Want to start business but fear holds</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Can&apos;t assert with boss</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Projects delayed despite energy</li>
            </ul>
            <p className="text-xs text-teal-600 mt-3 italic">Mars courage blocked by Saturn fear</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm">
            <h3 className="font-bold text-amber-800 text-lg mb-3 flex items-center gap-2">
              <Heart className="w-5 h-5" />
              In Relationships
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Want to be assertive but seem weak</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Can&apos;t express anger when needed</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Suppress until explosion</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Difficulty setting boundaries</li>
            </ul>
            <p className="text-xs text-amber-600 mt-3 italic">Mars passion blocked by Saturn control</p>
          </div>

          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl p-6 border border-saffron-200 shadow-sm">
            <h3 className="font-bold text-saffron-800 text-lg mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5" />
              In Decision-Making
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Take forever to decide</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Miss time-sensitive chances</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Overthink simple decisions</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Procrastinate despite capability</li>
            </ul>
            <p className="text-xs text-saffron-600 mt-3 italic">Mars action blocked by Saturn analysis paralysis</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 shadow-sm">
            <h3 className="font-bold text-orange-800 text-lg mb-3 flex items-center gap-2">
              <Dumbbell className="w-5 h-5" />
              In Physical Health
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Energy builds but can&apos;t release</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Stress accumulates</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Blocked aggression = tension</li>
              <li className="flex items-start gap-2"><XCircle className="w-4 h-4 text-red-500 mt-0.5" /> Strength underutilized</li>
            </ul>
            <p className="text-xs text-orange-600 mt-3 italic">Mars energy blocked by Saturn restriction</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Patterns */}
      <section id="patterns">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-100 text-orange-600">
            <Target className="w-5 h-5" />
          </span>
          Recognizing Angarak Patterns
        </h2>

        <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200 shadow-sm">
          <h3 className="font-bold text-red-800 text-lg mb-4">Do These Sound Familiar?</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-red-200">
                  <th className="text-left p-2 font-bold text-red-800">Pattern</th>
                  <th className="text-left p-2 font-bold text-red-800">Angarak Signature</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-red-100">
                  <td className="p-2 text-gray-700">&quot;I know I should, but I can&apos;t&quot;</td>
                  <td className="p-2 font-bold text-red-600">YES - Mars wants, Saturn blocks</td>
                </tr>
                <tr className="border-b border-red-100">
                  <td className="p-2 text-gray-700">&quot;I&apos;m brave but timid&quot;</td>
                  <td className="p-2 font-bold text-red-600">YES - Courage contradicted by fear</td>
                </tr>
                <tr className="border-b border-red-100">
                  <td className="p-2 text-gray-700">&quot;I explode then regret&quot;</td>
                  <td className="p-2 font-bold text-red-600">YES - Suppressed anger bursting</td>
                </tr>
                <tr className="border-b border-red-100">
                  <td className="p-2 text-gray-700">&quot;Missed so many opportunities&quot;</td>
                  <td className="p-2 font-bold text-red-600">YES - Paralysis from conflict</td>
                </tr>
                <tr>
                  <td className="p-2 text-gray-700">&quot;I&apos;m capable but stuck&quot;</td>
                  <td className="p-2 font-bold text-red-600">YES - Ability blocked by restriction</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Remedies */}
      <section id="remedies">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
            <Shield className="w-5 h-5" />
          </span>
          Angarak Yoga Remedies
        </h2>

        <BlogImage
          src="/images/blog/angarak-yoga/remedy.webp"
          alt="Angarak Yoga Remedies"
          caption="Channel Mars-Saturn conflict into focused power"
        />

        <div className="space-y-4 mt-6">
          {/* Remedy 1 */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white flex-shrink-0 shadow-md">
                <Dumbbell className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-green-800 text-lg mb-2">Remedy #1: Physical Discipline Practice</h3>
                <p className="text-gray-700 text-sm mb-3">Channel Mars-Saturn conflict into physical mastery</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Martial arts (discipline + aggression)</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Weightlifting / intense exercise</li>
                  <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Yoga with strength poses</li>
                </ul>
                <p className="text-xs text-green-700 mt-3 font-bold">Effectiveness: HIGHEST (70-80%)</p>
              </div>
            </div>
          </div>

          {/* Remedy 2 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm">
            <h3 className="font-bold text-teal-800 text-lg mb-3">Remedy #2: Strategic Action Practice</h3>
            <p className="text-gray-700 text-sm mb-3">Develop Mars action with Saturn strategy</p>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-600" /> Make daily decisions quickly (3-min rule)</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-600" /> Take calculated risks on small things</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-600" /> Plan, then execute immediately</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-600" /> Practice assertiveness in low stakes</div>
            </div>
            <p className="text-xs text-teal-700 mt-3 font-bold">Effectiveness: HIGH (70%) | Cost: FREE</p>
          </div>

          {/* Remedy 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                <Gem className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">Remedy #3: Wear Mars & Saturn Stones</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm mt-3">
                  <div className="bg-white/70 p-3 rounded-lg">
                    <p className="font-bold text-red-700">Red Coral (Mars)</p>
                    <p className="text-xs text-gray-600">Cost: ₹500-2,000 | Metal: Copper | Ring finger right | Tuesday</p>
                  </div>
                  <div className="bg-white/70 p-3 rounded-lg">
                    <p className="font-bold text-gray-700">Blue Sapphire (Saturn)</p>
                    <p className="text-xs text-gray-600">Cost: ₹2,000-10,000 | Metal: Silver | Middle finger right | Saturday</p>
                  </div>
                </div>
                <p className="text-xs text-amber-700 mt-3 font-bold">Effectiveness: MODERATE (60%)</p>
              </div>
            </div>
          </div>

          {/* Remedy 4 */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl p-6 border border-saffron-200 shadow-sm">
            <h3 className="font-bold text-saffron-800 text-lg mb-3">Remedy #4: Chant Conflict-Resolution Mantras</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div className="bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-red-700 text-sm">Mars Mantra</p>
                <p className="text-xs text-gray-600 font-mono bg-gray-100 p-2 rounded mt-1">Om Kram Kreem Kraum Sah Bhaumaya Namah</p>
              </div>
              <div className="bg-white/70 p-3 rounded-lg">
                <p className="font-bold text-gray-700 text-sm">Saturn Mantra</p>
                <p className="text-xs text-gray-600 font-mono bg-gray-100 p-2 rounded mt-1">Om Sham Shani Shanaischharaya Namah</p>
              </div>
            </div>
            <p className="text-xs text-gray-600 mt-3">Chant both, 108 times each. Tuesdays and Saturdays. Focus on integration.</p>
            <p className="text-xs text-saffron-700 mt-2 font-bold">Effectiveness: MODERATE-HIGH (65%) | Cost: FREE</p>
          </div>

          {/* Remedy 5 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 shadow-sm">
            <h3 className="font-bold text-orange-800 text-lg mb-3">Remedy #5: Anger Processing & Emotional Release</h3>
            <p className="text-gray-700 text-sm mb-3">Angarak creates suppressed aggression that needs healthy outlet</p>
            <div className="grid md:grid-cols-2 gap-2 text-sm">
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-600" /> Journaling (especially anger)</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-600" /> Physical activity (punch bag)</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-600" /> Speaking truth (healthy expression)</div>
              <div className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-orange-600" /> Cold water immersion</div>
            </div>
            <p className="text-xs text-orange-700 mt-3 font-bold">Effectiveness: HIGH (75%) | Cost: FREE</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <Zap className="w-5 h-5" />
          </span>
          Channel Your Power
        </h2>

        <BlogImage
          src="/images/blog/angarak-yoga/warning.webp"
          alt="Channel Your Power"
          caption="Your internal conflict is your teacher"
        />

        <p className="text-gray-700 mb-6 leading-relaxed">
          <strong>Here&apos;s the truth about Angarak Yoga:</strong> It&apos;s not a disability—it&apos;s a <strong>tuning challenge that develops rare strength</strong>. People with Angarak who master it become disciplined warriors, strategic fighters, and calculated risk-takers.
        </p>

        <HighlightBox type="tip">
          <p className="font-bold text-teal-700 mb-2">People who master Angarak become:</p>
          <ul className="text-sm text-gray-700 space-y-1 mt-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Disciplined warriors (rare combination)</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Strategic fighters (not reckless)</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Calculated risk-takers (not impulsive)</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Leaders with integrity (courage + ethics)</li>
          </ul>
        </HighlightBox>

        <RelatedToolCard
          title="Resolve Your Mars-Saturn Conflict"
          description="Channel your power and develop strategic courage"
          href={`/${locale}/tools/yoga-calculator`}
        />

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="font-bold text-teal-800 text-lg mb-4">Related Tools</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href={`/${locale}/tools/kundli`} className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-teal-700">Kundli Generator</p>
              <p className="text-xs text-gray-600">See Mars-Saturn positions</p>
            </Link>
            <Link href={`/${locale}/tools/mahadasha`} className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-amber-700">Mahadasha Calculator</p>
              <p className="text-xs text-gray-600">Know when Mars/Saturn periods activate</p>
            </Link>
            <Link href={`/${locale}/tools/lagna`} className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-4 border border-saffron-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-saffron-700">Lagna Calculator</p>
              <p className="text-xs text-gray-600">Understand personality impact</p>
            </Link>
            <Link href={`/${locale}/tools/raj-yoga`} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-orange-700">Raj Yoga Calculator</p>
              <p className="text-xs text-gray-600">See positive yogas</p>
            </Link>
          </div>
        </div>

        <p className="text-center text-teal-700 font-bold mt-8 text-lg">
          Your conflict is your superpower waiting to be unlocked.
        </p>
      </section>
    </div>
  );
}
