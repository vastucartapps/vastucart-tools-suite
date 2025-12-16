'use client';

import Link from 'next/link';
import { Calculator, AlertTriangle, Shield, TrendingUp, Users, Heart, Briefcase, Activity, Target, CheckCircle, XCircle, Sparkles, Lock, Unlock } from 'lucide-react';
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

interface KalsarpDoshaPostProps {
  locale: string;
}

export default function KalsarpDoshaPost({ locale }: KalsarpDoshaPostProps) {
  return (
    <div className="space-y-8">
      {/* Opening Truth */}
      <HighlightBox type="warning">
        <p className="text-lg font-bold text-teal-800 mb-2">Critical Truth About Kalsarp Dosha</p>
        <p className="text-gray-700">
          Kalsarp Dosha doesn't prevent success—it creates <strong>difficult journeys with delayed results</strong>.
          What takes others 3 years might take you 10 years. But with right understanding, powerful remedies, and persistent effort,
          you CAN achieve everything you desire.
        </p>
      </HighlightBox>

      {/* StatsCard */}
      <StatsCard
        stats={[
          { label: 'Types', value: '12' },
          { label: 'Impact Reduction', value: '60-70%' },
          { label: 'Free Remedies', value: '3 Powerful' },
          { label: 'Cost Range', value: 'FREE-₹15K' },
        ]}
      />

      {/* Section 1: What Is Kalsarp Dosha */}
      <section id="what-is-kalsarp">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <AlertTriangle className="w-5 h-5" />
          </span>
          What Is Kalsarp Dosha?
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          <strong className="text-teal-700">Kaal = Time/Death. Sarp = Serpent.</strong> Kalsarp Dosha literally means "the serpent of time"—a planetary
          configuration that creates <strong>restriction, delay, and difficult circumstances</strong>.
        </p>

        <BlogImage
          src="/images/blog/kalsarp-dosha/concept.webp"
          alt="Kalsarp Dosha Concept: Rahu-Ketu Sandwiching All Planets"
          caption="The Prison Concept: When Rahu and Ketu sandwich all planets between them, creating restricted planetary expression"
        />

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm mt-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4">How Kalsarp Dosha Forms</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4">
              <p className="font-bold text-teal-700 mb-2">1. Rahu (North Node)</p>
              <p className="text-sm text-gray-700">Positioned on one side of the chart</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4">
              <p className="font-bold text-teal-700 mb-2">2. Ketu (South Node)</p>
              <p className="text-sm text-gray-700">Positioned on the opposite side</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4">
              <p className="font-bold text-teal-700 mb-2">3. ALL Planets Between</p>
              <p className="text-sm text-gray-700">Every other planet falls between them</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm mt-4">
          <h3 className="font-bold text-amber-800 text-lg mb-3">The Prison Analogy</h3>
          <div className="space-y-2">
            <p className="text-sm text-gray-700"><strong className="text-amber-700">Free planets:</strong> People who can move freely, achieve goals naturally</p>
            <p className="text-sm text-gray-700"><strong className="text-amber-700">Sandwiched planets:</strong> People trapped in a prison, limited options</p>
            <p className="text-sm text-gray-700"><strong className="text-amber-700">Rahu-Ketu walls:</strong> Prison walls that restrict planetary movement</p>
            <p className="text-sm text-amber-700 mt-3 italic font-medium">Result: Restricted achievement, delayed results, difficult journey</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: How to Check */}
      <section id="how-to-check">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Check If You Have Kalsarp Dosha
        </h2>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm">
            <h3 className="font-bold text-teal-800 mb-3">What You Need</h3>
            <FeatureList
              items={[
                'Your complete birth chart (Kundli) with all planetary positions',
                'Exact birth date, time, and location',
                'Rahu and Ketu house positions',
                'Verification that all planets fall between them',
              ]}
              variant="check"
            />
          </div>

          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl p-6 border border-saffron-200 shadow-sm">
            <h3 className="font-bold text-saffron-800 mb-3">Verification Table</h3>
            <div className="bg-white/90 backdrop-blur rounded-xl p-4 space-y-2">
              <div className="flex items-center gap-3 pb-2 border-b border-saffron-100">
                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                <p className="text-sm text-gray-700"><strong>All planets between Rahu-Ketu:</strong> YES = Kalsarp present</p>
              </div>
              <div className="flex items-center gap-3 pb-2 border-b border-saffron-100">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-gray-700"><strong>At least 1 planet outside:</strong> NO = No Kalsarp</p>
              </div>
              <div className="flex items-center gap-3">
                <XCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                <p className="text-sm text-gray-700"><strong>Rahu-Ketu in same house:</strong> NO = Not Kalsarp</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calculator CTA */}
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 text-center shadow-lg">
          <h3 className="text-2xl font-bold text-white mb-3">🐍 Check Your Kalsarp Dosha Status</h3>
          <p className="text-teal-50 mb-6">
            Discover if you have serpent affliction and understand its type and impact on your life
          </p>
          <Link
            href={`/${locale}/tools/kalsarp-dosha`}
            className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors shadow-md"
          >
            Calculate Your Kalsarp Dosha Type →
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: 12 Types */}
      <section id="twelve-types">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Target className="w-5 h-5" />
          </span>
          The 12 Types of Kalsarp Dosha
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Each type creates different restrictions based on which house Rahu occupies. The house position determines which life area is most affected.
        </p>

        <div className="grid md:grid-cols-2 gap-4">
          {/* Type 1 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-5 border border-teal-200 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-600 text-white font-bold flex-shrink-0">1</div>
              <div className="flex-1">
                <h4 className="font-bold text-teal-800 mb-1">Rahu in 1st House</h4>
                <p className="text-xs text-teal-600 mb-2 italic">Personality Restriction</p>
                <p className="text-sm text-gray-700 mb-2">Struggle to establish identity, career confusion, self-expression blocked</p>
                <p className="text-xs text-teal-700 font-medium">Focus: Confidence building, personal growth</p>
              </div>
            </div>
          </div>

          {/* Type 2 */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl p-5 border border-saffron-200 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-saffron-600 text-white font-bold flex-shrink-0">2</div>
              <div className="flex-1">
                <h4 className="font-bold text-saffron-800 mb-1">Rahu in 2nd House</h4>
                <p className="text-xs text-saffron-600 mb-2 italic">Financial Restriction</p>
                <p className="text-sm text-gray-700 mb-2">Money problems despite hard work, wealth delayed, financial losses</p>
                <p className="text-xs text-saffron-700 font-medium">Focus: Wealth accumulation, financial discipline</p>
              </div>
            </div>
          </div>

          {/* Type 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-5 border border-amber-200 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-600 text-white font-bold flex-shrink-0">3</div>
              <div className="flex-1">
                <h4 className="font-bold text-amber-800 mb-1">Rahu in 3rd House</h4>
                <p className="text-xs text-amber-600 mb-2 italic">Communication Blockage</p>
                <p className="text-sm text-gray-700 mb-2">Difficulty expressing ideas, sibling conflicts, communication failures</p>
                <p className="text-xs text-amber-700 font-medium">Focus: Communication skills, sibling harmony</p>
              </div>
            </div>
          </div>

          {/* Type 4 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-5 border border-teal-200 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-600 text-white font-bold flex-shrink-0">4</div>
              <div className="flex-1">
                <h4 className="font-bold text-teal-800 mb-1">Rahu in 4th House</h4>
                <p className="text-xs text-teal-600 mb-2 italic">Home/Property Restriction</p>
                <p className="text-sm text-gray-700 mb-2">Home instability, property disputes, family discord</p>
                <p className="text-xs text-teal-700 font-medium">Focus: Family harmony, property settlement</p>
              </div>
            </div>
          </div>

          {/* Type 5 */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl p-5 border border-saffron-200 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-saffron-600 text-white font-bold flex-shrink-0">5</div>
              <div className="flex-1">
                <h4 className="font-bold text-saffron-800 mb-1">Rahu in 5th House</h4>
                <p className="text-xs text-saffron-600 mb-2 italic">Children/Creativity Restriction</p>
                <p className="text-sm text-gray-700 mb-2">Infertility issues, creative blocks, romance struggles</p>
                <p className="text-xs text-saffron-700 font-medium">Focus: Fertility assistance, creative freedom</p>
              </div>
            </div>
          </div>

          {/* Type 6 - MOST DIFFICULT */}
          <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-5 border-2 border-red-400 shadow-lg">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-red-600 text-white font-bold flex-shrink-0">6</div>
              <div className="flex-1">
                <h4 className="font-bold text-red-800 mb-1 flex items-center gap-2">
                  Rahu in 6th House
                  <span className="text-xs bg-red-500 text-white px-2 py-1 rounded-full">HARDEST</span>
                </h4>
                <p className="text-xs text-red-600 mb-2 italic">Health/Enemy/Debt Affliction</p>
                <p className="text-sm text-gray-700 mb-2">Chronic illness, continuous enemies, financial debt cycles</p>
                <p className="text-xs text-red-700 font-medium">Focus: Health restoration, enemy neutralization</p>
              </div>
            </div>
          </div>

          {/* Type 7 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-5 border border-amber-200 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-600 text-white font-bold flex-shrink-0">7</div>
              <div className="flex-1">
                <h4 className="font-bold text-amber-800 mb-1">Rahu in 7th House</h4>
                <p className="text-xs text-amber-600 mb-2 italic">Marriage/Partnership Restriction</p>
                <p className="text-sm text-gray-700 mb-2">Delayed marriage, partnership conflicts, separation risk</p>
                <p className="text-xs text-amber-700 font-medium">Focus: Marriage timing, partnership harmony</p>
              </div>
            </div>
          </div>

          {/* Type 8 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-5 border border-teal-200 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-600 text-white font-bold flex-shrink-0">8</div>
              <div className="flex-1">
                <h4 className="font-bold text-teal-800 mb-1">Rahu in 8th House</h4>
                <p className="text-xs text-teal-600 mb-2 italic">Longevity/Inheritance Restriction</p>
                <p className="text-sm text-gray-700 mb-2">Health scares, inheritance disputes, hidden problems</p>
                <p className="text-xs text-teal-700 font-medium">Focus: Health protection, secrets resolution</p>
              </div>
            </div>
          </div>

          {/* Type 9 */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl p-5 border border-saffron-200 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-saffron-600 text-white font-bold flex-shrink-0">9</div>
              <div className="flex-1">
                <h4 className="font-bold text-saffron-800 mb-1">Rahu in 9th House</h4>
                <p className="text-xs text-saffron-600 mb-2 italic">Dharma/Luck Restriction</p>
                <p className="text-sm text-gray-700 mb-2">Bad luck, spiritual disconnect, father issues</p>
                <p className="text-xs text-saffron-700 font-medium">Focus: Spiritual practice, dharma alignment</p>
              </div>
            </div>
          </div>

          {/* Type 10 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-5 border border-amber-200 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-600 text-white font-bold flex-shrink-0">10</div>
              <div className="flex-1">
                <h4 className="font-bold text-amber-800 mb-1">Rahu in 10th House</h4>
                <p className="text-xs text-amber-600 mb-2 italic">Career Restriction</p>
                <p className="text-sm text-gray-700 mb-2">Career stagnation, boss conflicts, reputation damage</p>
                <p className="text-xs text-amber-700 font-medium">Focus: Career advancement, authority respect</p>
              </div>
            </div>
          </div>

          {/* Type 11 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-5 border border-teal-200 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-600 text-white font-bold flex-shrink-0">11</div>
              <div className="flex-1">
                <h4 className="font-bold text-teal-800 mb-1">Rahu in 11th House</h4>
                <p className="text-xs text-teal-600 mb-2 italic">Friendship/Income Restriction</p>
                <p className="text-sm text-gray-700 mb-2">False friends, income loss, social rejection</p>
                <p className="text-xs text-teal-700 font-medium">Focus: True friendship, steady income</p>
              </div>
            </div>
          </div>

          {/* Type 12 */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl p-5 border border-saffron-200 shadow-sm">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-saffron-600 text-white font-bold flex-shrink-0">12</div>
              <div className="flex-1">
                <h4 className="font-bold text-saffron-800 mb-1">Rahu in 12th House</h4>
                <p className="text-xs text-saffron-600 mb-2 italic">Loss/Isolation Restriction</p>
                <p className="text-sm text-gray-700 mb-2">Financial losses, isolation, hidden enemies</p>
                <p className="text-xs text-saffron-700 font-medium">Focus: Loss prevention, enemy protection</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Myths vs Reality */}
      <section id="real-impact">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Shield className="w-5 h-5" />
          </span>
          Real Impact: Myths vs Reality
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Let's separate fact from fear. Many myths about Kalsarp Dosha create unnecessary panic.
        </p>

        <BlogImage
          src="/images/blog/kalsarp-dosha/comparison.webp"
          alt="Kalsarp Dosha Myths vs Reality Comparison"
          caption="Debunking 5 major myths: Separating fear-mongering from scientific Vedic truth"
        />

        <div className="space-y-4 mt-6">
          {/* Myth 1 */}
          <div className="bg-gradient-to-br from-red-50 to-green-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h4 className="font-bold text-red-700">MYTH: "Kalsarp prevents all success"</h4>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-green-700">REALITY: It delays and restricts, but doesn't prevent</h4>
                </div>
                <p className="text-sm text-gray-700 ml-8">Many successful people have Kalsarp Dosha. Their path is harder and longer, but achievable with effort.</p>
              </div>
            </div>
          </div>

          {/* Myth 2 */}
          <div className="bg-gradient-to-br from-red-50 to-green-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h4 className="font-bold text-red-700">MYTH: "Kalsarp Dosha causes death"</h4>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-green-700">REALITY: COMPLETELY FALSE - No Vedic text mentions this</h4>
                </div>
                <p className="text-sm text-gray-700 ml-8">This is pure fear-mongering by unethical astrologers trying to sell expensive remedies.</p>
              </div>
            </div>
          </div>

          {/* Myth 3 */}
          <div className="bg-gradient-to-br from-red-50 to-green-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h4 className="font-bold text-red-700">MYTH: "Kalsarp Dosha is incurable"</h4>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-green-700">REALITY: Highly manageable through remedies</h4>
                </div>
                <p className="text-sm text-gray-700 ml-8">Proper remedies reduce severity by 60-70%. The dosha remains but its impact decreases significantly.</p>
              </div>
            </div>
          </div>

          {/* Myth 4 */}
          <div className="bg-gradient-to-br from-red-50 to-green-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h4 className="font-bold text-red-700">MYTH: "Everyone with Kalsarp suffers equally"</h4>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-green-700">REALITY: Severity depends on type, strength, and consciousness</h4>
                </div>
                <p className="text-sm text-gray-700 ml-8">Which type you have, strength of Rahu-Ketu, other planets, and your own efforts all determine severity.</p>
              </div>
            </div>
          </div>

          {/* Myth 5 */}
          <div className="bg-gradient-to-br from-red-50 to-green-50 rounded-2xl p-6 border border-gray-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle className="w-6 h-6 text-red-600" />
                  <h4 className="font-bold text-red-700">MYTH: "You need expensive rituals to cure it"</h4>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                  <h4 className="font-bold text-green-700">REALITY: Most effective remedies are FREE or low-cost</h4>
                </div>
                <p className="text-sm text-gray-700 ml-8">Spiritual practice (FREE), mantra chanting (FREE), behavioral changes (FREE). Gemstones optional (₹2K-10K).</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Life Areas Affected */}
      <section id="life-areas">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <TrendingUp className="w-5 h-5" />
          </span>
          Life Areas Affected by Kalsarp
        </h2>

        <BlogImage
          src="/images/blog/kalsarp-dosha/reference.webp"
          alt="Life Areas Affected by Kalsarp Dosha"
          caption="How Kalsarp Dosha impacts 4 major life areas: Career, marriage, health, and finances"
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          {/* Career */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white flex-shrink-0 shadow-md">
                <Briefcase className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-800 text-lg mb-3">Career Impact</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 mb-4 border border-teal-100">
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">What you experience:</strong></p>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                    <li>Delayed promotions despite performance</li>
                    <li>Job rejection with good qualifications</li>
                    <li>Boss conflicts and authority issues</li>
                    <li>Frequent job changes (instability)</li>
                    <li>Success takes 2-3x longer</li>
                  </ul>
                </div>
                <div className="bg-teal-100 rounded-lg p-3">
                  <p className="text-xs text-teal-700 font-medium mb-2"><strong>How to manage:</strong></p>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                    <li>Build skills continuously</li>
                    <li>Change jobs strategically</li>
                    <li>Respect authority figures</li>
                    <li>Apply persistently</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Marriage */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl p-6 border border-saffron-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-saffron-600 text-white flex-shrink-0 shadow-md">
                <Heart className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-saffron-800 text-lg mb-3">Marriage/Relationships</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 mb-4 border border-saffron-100">
                  <p className="text-sm text-gray-700"><strong className="text-saffron-700">What you experience:</strong></p>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                    <li>Delayed marriage (5-10 years late)</li>
                    <li>Partner selection difficulties</li>
                    <li>Post-marriage conflicts</li>
                    <li>Separation/divorce risks</li>
                  </ul>
                </div>
                <div className="bg-saffron-100 rounded-lg p-3">
                  <p className="text-xs text-saffron-700 font-medium mb-2"><strong>How to manage:</strong></p>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                    <li>Accept divine timing</li>
                    <li>Choose partners carefully</li>
                    <li>Focus on communication</li>
                    <li>Counseling if needed</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Health */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                <Activity className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-3">Health Impact</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 mb-4 border border-amber-100">
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">What you experience:</strong></p>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                    <li>Chronic health issues (Type 6)</li>
                    <li>Recurring illnesses</li>
                    <li>Medical complications</li>
                    <li>Stress-related diseases</li>
                  </ul>
                </div>
                <div className="bg-amber-100 rounded-lg p-3">
                  <p className="text-xs text-amber-700 font-medium mb-2"><strong>How to manage:</strong></p>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                    <li>Regular health checkups</li>
                    <li>Preventive care priority</li>
                    <li>Stress management</li>
                    <li>Yoga and meditation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Finance */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white flex-shrink-0 shadow-md">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-800 text-lg mb-3">Financial Impact</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 mb-4 border border-teal-100">
                  <p className="text-sm text-gray-700"><strong className="text-teal-700">What you experience:</strong></p>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                    <li>Money earned disappears</li>
                    <li>Unexpected financial losses</li>
                    <li>Debt cycles and traps</li>
                    <li>Slow wealth accumulation</li>
                  </ul>
                </div>
                <div className="bg-teal-100 rounded-lg p-3">
                  <p className="text-xs text-teal-700 font-medium mb-2"><strong>How to manage:</strong></p>
                  <ul className="text-xs text-gray-700 space-y-1 ml-4 list-disc">
                    <li>Financial discipline</li>
                    <li>Prioritize savings</li>
                    <li>Focus on debt payment</li>
                    <li>Investment caution</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Remedies */}
      <section id="remedies">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Unlock className="w-5 h-5" />
          </span>
          Kalsarp Dosha Remedies (Powerful Solutions)
        </h2>

        <BlogImage
          src="/images/blog/kalsarp-dosha/remedy.webp"
          alt="Kalsarp Dosha Remedies and Solutions"
          caption="5 powerful remedies: Kalsarp Puja, Rahu-Ketu gemstones, mantra chanting, Naga Puja, and spiritual practice"
        />

        <div className="space-y-4 mt-6">
          {/* Remedy 1: Kalsarp Puja */}
          <div className="bg-gradient-to-br from-teal-100 to-teal-200 rounded-2xl p-6 border-2 border-teal-400 shadow-lg">
            <h3 className="font-bold text-teal-800 text-lg mb-2 flex items-center gap-2">
              Remedy #1: Perform Kalsarp Puja
              <span className="text-xs bg-teal-500 text-white px-2 py-1 rounded-full">HIGH 80%</span>
            </h3>
            <div className="bg-white/90 backdrop-blur rounded-xl p-4 space-y-3 mt-3">
              <p className="text-sm text-gray-700"><strong className="text-teal-700">What it is:</strong> Special ritual honoring Rahu-Ketu and seeking their grace</p>
              <p className="text-sm text-gray-700"><strong className="text-teal-700">Cost:</strong> ₹5,000-15,000 (Brahmin priest + materials)</p>
              <p className="text-sm text-gray-700"><strong className="text-teal-700">How to perform:</strong></p>
              <ul className="text-xs text-gray-700 space-y-1 ml-6 list-disc">
                <li>Conduct during auspicious timing (consult priest)</li>
                <li>Invite priest to home or temple</li>
                <li>Offer prayers to Rahu-Ketu with milk, flowers, fruit</li>
                <li>Donate to poor/needy in Rahu-Ketu's name</li>
                <li>Wear sacred thread/ash after ritual</li>
              </ul>
              <p className="text-sm text-gray-700"><strong className="text-teal-700">Frequency:</strong> Once initially, then annually on important dates</p>
            </div>
            <p className="text-xs text-teal-600 mt-3 italic font-medium">Effectiveness: HIGH (80%+ when done correctly with devotion)</p>
          </div>

          {/* Remedy 2: Gemstones */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl p-6 border border-saffron-200 shadow-sm">
            <h3 className="font-bold text-saffron-800 text-lg mb-2 flex items-center gap-2">
              Remedy #2: Wear Gomed & Cat's Eye (Rahu-Ketu Stones)
              <span className="text-xs bg-saffron-500 text-white px-2 py-1 rounded-full">MODERATE 60-75%</span>
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mt-3">
              <div className="bg-white/90 backdrop-blur rounded-xl p-4">
                <p className="text-sm font-bold text-saffron-700 mb-2">For Rahu: Gomed (Hessonite)</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li><strong>Cost:</strong> ₹3,000-8,000</li>
                  <li><strong>Metal:</strong> Silver or copper</li>
                  <li><strong>Finger:</strong> Middle finger, right hand</li>
                  <li><strong>Day:</strong> Saturday</li>
                </ul>
              </div>
              <div className="bg-white/90 backdrop-blur rounded-xl p-4">
                <p className="text-sm font-bold text-saffron-700 mb-2">For Ketu: Cat's Eye (Lehsunia)</p>
                <ul className="text-xs text-gray-700 space-y-1">
                  <li><strong>Cost:</strong> ₹2,000-5,000</li>
                  <li><strong>Metal:</strong> Silver</li>
                  <li><strong>Finger:</strong> Middle finger, right hand</li>
                  <li><strong>Day:</strong> Saturday</li>
                </ul>
              </div>
            </div>
            <p className="text-xs text-saffron-600 mt-3 italic font-medium">Note: Wear both together for balance. Consult astrologer before wearing.</p>
          </div>

          {/* Remedy 3: Mantras */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm">
            <h3 className="font-bold text-amber-800 text-lg mb-2 flex items-center gap-2">
              Remedy #3: Chant Rahu & Ketu Mantras
              <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">FREE + HIGH 70-80%</span>
            </h3>
            <div className="bg-white/90 backdrop-blur rounded-xl p-4 space-y-3 mt-3">
              <div>
                <p className="text-sm font-bold text-amber-700 mb-1">Rahu Mantra:</p>
                <p className="text-sm text-gray-700 italic">"Om Bhram Bhreem Bhroum Sah Rahave Namah"</p>
              </div>
              <div>
                <p className="text-sm font-bold text-amber-700 mb-1">Ketu Mantra:</p>
                <p className="text-sm text-gray-700 italic">"Om Kem Ketave Namah"</p>
              </div>
              <p className="text-sm text-gray-700"><strong className="text-amber-700">How to chant:</strong></p>
              <ul className="text-xs text-gray-700 space-y-1 ml-6 list-disc">
                <li>108 times daily or at least 3 times weekly</li>
                <li>Saturday best for Rahu, Monday best for Ketu</li>
                <li>Facing North (Rahu's direction)</li>
                <li>Morning hours preferred</li>
                <li>Continue for 40 days minimum (ideally 108 days)</li>
              </ul>
            </div>
            <p className="text-xs text-amber-600 mt-3 italic font-medium">Cost: FREE. Effectiveness: HIGH with consistency and devotion.</p>
          </div>

          {/* Remedy 4: Naga Puja */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm">
            <h3 className="font-bold text-teal-800 text-lg mb-2 flex items-center gap-2">
              Remedy #4: Naga Puja (Snake Worship)
              <span className="text-xs bg-teal-500 text-white px-2 py-1 rounded-full">HIGH 75%</span>
            </h3>
            <div className="bg-white/90 backdrop-blur rounded-xl p-4 space-y-3 mt-3">
              <p className="text-sm text-gray-700"><strong className="text-teal-700">What it is:</strong> Ritual honoring serpent energy, seeking release from restriction</p>
              <p className="text-sm text-gray-700"><strong className="text-teal-700">Cost:</strong> ₹2,000-5,000</p>
              <p className="text-sm text-gray-700"><strong className="text-teal-700">How to perform:</strong></p>
              <ul className="text-xs text-gray-700 space-y-1 ml-6 list-disc">
                <li>Perform near snake habitats or temples (if safe)</li>
                <li>Offer milk, flowers, fruit to snakes/snake idols</li>
                <li>Chant snake mantras and seek forgiveness</li>
                <li>Donate to snake conservation organizations</li>
              </ul>
              <p className="text-sm text-gray-700"><strong className="text-teal-700">Why it works:</strong> Directly appeals to serpent energy (Rahu-Ketu) for release</p>
            </div>
            <p className="text-xs text-teal-600 mt-3 italic font-medium">Effectiveness: HIGH (75%+ especially for those with spiritual inclination)</p>
          </div>

          {/* Remedy 5: Spiritual Practice - HIGHEST */}
          <div className="bg-gradient-to-br from-saffron-100 to-saffron-200 rounded-2xl p-6 border-2 border-saffron-400 shadow-lg">
            <h3 className="font-bold text-saffron-800 text-lg mb-2 flex items-center gap-2">
              Remedy #5: Spiritual Practice & Consciousness
              <span className="text-xs bg-green-600 text-white px-2 py-1 rounded-full">FREE + HIGHEST</span>
            </h3>
            <div className="bg-white/90 backdrop-blur rounded-xl p-4 space-y-3 mt-3">
              <p className="text-sm text-gray-700"><strong className="text-saffron-700">What to do:</strong></p>
              <ul className="text-xs text-gray-700 space-y-1 ml-6 list-disc">
                <li><strong>Meditation (30 min daily):</strong> Releases mental restriction, builds awareness</li>
                <li><strong>Yoga (especially cobra pose):</strong> Symbolic release from serpent coil</li>
                <li><strong>Journaling:</strong> Process restriction emotions, gain clarity</li>
                <li><strong>Mindfulness:</strong> Awareness of reactive patterns</li>
                <li><strong>Service to others:</strong> Shift energy outward, reduce self-focus</li>
              </ul>
              <p className="text-sm text-gray-700 mt-3"><strong className="text-saffron-700">Why it's HIGHEST:</strong> Addresses root cause—restricted consciousness. When you expand awareness,
              planetary restrictions matter less.</p>
            </div>
            <p className="text-xs text-saffron-600 mt-3 italic font-medium">Cost: FREE. Effectiveness: HIGHEST (addresses root psychological/spiritual cause)</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 7: Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Sparkles className="w-5 h-5" />
          </span>
          Transform Your Restriction
        </h2>

        <div className="bg-gradient-to-br from-teal-50 to-saffron-50 rounded-2xl p-8 border border-teal-200 shadow-md mb-6">
          <p className="text-lg font-bold text-teal-800 mb-4">Here's the truth about Kalsarp Dosha:</p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            It's not a curse. It's a <strong>challenge that builds character</strong>.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            People with Kalsarp Dosha who succeed often become:
          </p>
          <FeatureList
            items={[
              'More resilient and strong-willed than others',
              'Better at handling adversity and obstacles',
              'More grateful for achievements (nothing taken for granted)',
              'Wiser about life choices and timing',
              'Stronger leaders (struggle builds leadership)',
            ]}
            variant="check"
          />
        </div>

        <HighlightBox type="tip">
          <p className="text-lg font-bold text-green-800 mb-2">The Empowering Truth</p>
          <p className="text-gray-700">
            The serpent may coil around you, but it doesn't kill you. With right understanding, powerful remedies, spiritual practice,
            and persistent effort—you can achieve everything you desire. <strong>It just takes longer.</strong>
          </p>
        </HighlightBox>

        {/* Calculator CTA */}
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 text-center shadow-lg mt-8">
          <h3 className="text-2xl font-bold text-white mb-3">🐍 Know Your Kalsarp Dosha Type</h3>
          <p className="text-teal-50 mb-6">
            Understand your serpent affliction and get specific remedies for freedom
          </p>
          <Link
            href={`/${locale}/tools/kalsarp-dosha`}
            className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors shadow-md"
          >
            Calculate Your Kalsarp Dosha Type →
          </Link>
        </div>
      </section>

      {/* Related Tools */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <RelatedToolCard
          title="Kundli Generator"
          description="See Rahu-Ketu positions in your chart and understand planetary sandwiching"
          href={`/${locale}/tools/kundli`}
        />
        <RelatedToolCard
          title="Mahadasha Calculator"
          description="Check Rahu/Ketu Mahadasha periods when Kalsarp intensifies"
          href={`/${locale}/tools/mahadasha`}
        />
        <RelatedToolCard
          title="Sade Sati Calculator"
          description="Saturn may overlap with Kalsarp creating double challenge"
          href={`/${locale}/tools/sade-sati`}
        />
        <RelatedToolCard
          title="Lagna Calculator"
          description="See how Kalsarp affects your personality and public expression"
          href={`/${locale}/tools/lagna`}
        />
      </div>
    </div>
  );
}
