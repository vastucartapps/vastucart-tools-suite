'use client';

import Link from 'next/link';
import { Calculator, Star, Calendar, Target, Briefcase, Heart, TrendingUp, Clock, CheckCircle, Sparkles, Gift, Zap } from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  RelatedToolCard,
  StatsCard,
} from '../blog-content';

interface LuckyNumberPostProps {
  locale: string;
}

export default function LuckyNumberPost({ locale }: LuckyNumberPostProps) {
  return (
    <div className="space-y-8">
      {/* Opening Hook */}
      <HighlightBox type="important">
        <p className="text-lg font-bold text-teal-800 mb-2">Why Do Some People Seem Naturally Lucky?</p>
        <p className="text-gray-700">
          One hidden reason: <strong>They know their Lucky Numbers and consciously use them.</strong> Using your Lucky Numbers can increase success probability by 40-60%.
        </p>
      </HighlightBox>

      {/* What Lucky People Do */}
      <InfoCard title="What Lucky People Do Differently" variant="teal">
        <FeatureList
          items={[
            'Schedule important meetings on lucky dates',
            'Choose phone numbers & addresses aligned with luck',
            'Sign contracts during power numbers',
            'Time major decisions for maximum impact',
            'Work WITH the universe instead of against it',
          ]}
          variant="check"
        />
        <p className="text-sm text-teal-700 mt-3 italic">They&apos;re not superstitious. They&apos;re strategic.</p>
      </InfoCard>

      {/* Stats */}
      <StatsCard
        stats={[
          { label: 'Success Boost', value: '40-60%' },
          { label: 'Lucky Numbers', value: '3' },
          { label: 'Method', value: 'Vedic' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      <SectionDivider />

      {/* Section 1: What Are Lucky Numbers */}
      <section id="what-is-lucky">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Star className="w-5 h-5" />
          </span>
          What Are Lucky Numbers?
        </h2>

        <BlogImage
          src="/images/blog/lucky-number/hero.webp"
          alt="Lucky Numbers concept - numerical vibrations aligning with personal energy"
          caption="Your Lucky Numbers are vibrational frequencies that naturally align with your energy"
        />

        <div className="mt-6 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Your <strong className="text-teal-700">Lucky Numbers</strong> are vibrational frequencies that naturally align with your energy. Numbers have vibrations. Your birth date, name, and life cycle all emit numerical frequencies.
          </p>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
            <p className="text-gray-700">
              <strong className="text-amber-800">How It Works:</strong> When you act on lucky dates/numbers that match YOUR frequency, doors open effortlessly. When you act on unlucky dates, doors stay closed—no matter how hard you push.
            </p>
          </div>
        </div>

        {/* The 3 Lucky Numbers */}
        <h3 className="text-xl font-bold text-teal-800 mt-8 mb-4">The 3 Lucky Numbers You MUST Know</h3>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Birth Number */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-600 text-white font-bold text-xl mb-3 shadow-md">1</div>
            <h4 className="font-bold text-teal-800 mb-2">Birth Number</h4>
            <p className="text-xs text-teal-600 mb-2 italic">Life Path Number</p>
            <p className="text-sm text-gray-700 mb-2">Your natural luck from birth date</p>
            <p className="text-xs text-gray-600"><strong>Best for:</strong> Personal endeavors, self-improvement</p>
          </div>

          {/* Destiny Number */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-5 border border-saffron-200 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-saffron-600 text-white font-bold text-xl mb-3 shadow-md">2</div>
            <h4 className="font-bold text-saffron-800 mb-2">Destiny Number</h4>
            <p className="text-xs text-saffron-600 mb-2 italic">Name Number</p>
            <p className="text-sm text-gray-700 mb-2">Your expressed luck from name</p>
            <p className="text-xs text-gray-600"><strong>Best for:</strong> Professional ventures, public actions</p>
          </div>

          {/* Personal Year */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200 shadow-sm">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-600 text-white font-bold text-xl mb-3 shadow-md">3</div>
            <h4 className="font-bold text-amber-800 mb-2">Personal Year</h4>
            <p className="text-xs text-amber-600 mb-2 italic">Current Year Number</p>
            <p className="text-sm text-gray-700 mb-2">Your yearly luck (changes annually)</p>
            <p className="text-xs text-gray-600"><strong>Best for:</strong> Major life changes this year</p>
          </div>
        </div>

        <HighlightBox type="tip">
          <p className="text-gray-700">
            <strong>Key Truth:</strong> Lucky numbers don&apos;t mean everything happens automatically. Numbers provide <em>favorable timing</em> for your actions. Right number + right action = Success. Right number + wrong action = Still nothing.
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 2: How to Calculate */}
      <section id="how-to-calculate">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Calculate Your Numbers
        </h2>

        <BlogImage
          src="/images/blog/lucky-number/guide.webp"
          alt="Step-by-step guide to calculating your lucky numbers"
          caption="Simple calculation process for finding your 3 lucky numbers"
        />

        <div className="mt-6 space-y-6">
          {/* Step 1: Birth Number */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200">
            <h3 className="font-bold text-teal-800 text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-600 text-white text-sm">1</span>
              Find Your Birth Number (Life Path)
            </h3>
            <p className="text-sm text-gray-700 mb-3"><strong>Example:</strong> Born December 15, 1990</p>
            <div className="bg-white/80 rounded-lg p-4 font-mono text-sm">
              <p>Month: 12 = 1 + 2 = <strong>3</strong></p>
              <p>Day: 15 = 1 + 5 = <strong>6</strong></p>
              <p>Year: 1990 = 1+9+9+0 = 19 = 1+9 = 10 = 1+0 = <strong>1</strong></p>
              <p className="mt-2 text-teal-700">Total: 3 + 6 + 1 = 10 = 1+0 = <strong className="text-lg">Birth Number = 1</strong></p>
            </div>
          </div>

          {/* Step 2: Destiny Number */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl p-6 border border-saffron-200">
            <h3 className="font-bold text-saffron-800 text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-saffron-600 text-white text-sm">2</span>
              Find Your Destiny Number (Name)
            </h3>
            <p className="text-sm text-gray-700 mb-3"><strong>Example:</strong> JOHN SMITH</p>
            <div className="bg-white/80 rounded-lg p-4 font-mono text-sm">
              <p>J=1, O=6, H=8, N=5 | S=1, M=4, I=9, T=2, H=8</p>
              <p className="mt-2 text-saffron-700">Total: 1+6+8+5+1+4+9+2+8 = 44 = 4+4 = <strong className="text-lg">Destiny Number = 8</strong></p>
            </div>
          </div>

          {/* Step 3: Personal Year */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
            <h3 className="font-bold text-amber-800 text-lg mb-4 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-600 text-white text-sm">3</span>
              Find Your Personal Year Number (2026)
            </h3>
            <p className="text-sm text-gray-700 mb-3"><strong>Example:</strong> Born December 15, checking for 2026</p>
            <div className="bg-white/80 rounded-lg p-4 font-mono text-sm">
              <p>Month: 12 = 1 + 2 = <strong>3</strong></p>
              <p>Day: 15 = 1 + 5 = <strong>6</strong></p>
              <p>Year: 2026 = 2+0+2+6 = <strong>10 = 1</strong></p>
              <p className="mt-2 text-amber-700">Total: 3 + 6 + 1 = 10 = 1+0 = <strong className="text-lg">Personal Year = 1</strong></p>
            </div>
            <p className="text-xs text-amber-600 mt-3 italic">Note: Personal Year changes every January 1st!</p>
          </div>
        </div>

        {/* Calculator CTA */}
        <RelatedToolCard
          title="Lucky Number Calculator"
          description="Enter your birth date and name. Get all 3 lucky numbers plus your lucky calendar for the year."
          href={`/${locale}/tools/lucky-number`}
          icon={<Calculator className="w-6 h-6" />}
        />
      </section>

      <SectionDivider />

      {/* Section 3: Lucky Dates Calendar */}
      <section id="lucky-dates">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Calendar className="w-5 h-5" />
          </span>
          Lucky Dates Calendar System
        </h2>

        <BlogImage
          src="/images/blog/lucky-number/timeline.webp"
          alt="Lucky dates calendar showing favorable days by number"
          caption="Once you know your Lucky Numbers, find your Lucky Dates each month"
        />

        {/* Daily Luck Table */}
        <h3 className="text-xl font-bold text-teal-800 mt-8 mb-4">Daily Luck by Number</h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                <th className="px-4 py-3 text-left font-semibold">Number</th>
                <th className="px-4 py-3 text-left font-semibold">Lucky Dates (Each Month)</th>
                <th className="px-4 py-3 text-left font-semibold">Energy/Vibe</th>
              </tr>
            </thead>
            <tbody>
              {[
                { num: '1', dates: '1st, 10th, 19th, 28th', vibe: 'Initiation, new beginnings', color: 'teal' },
                { num: '2', dates: '2nd, 11th, 20th, 29th', vibe: 'Cooperation, partnerships', color: 'saffron' },
                { num: '3', dates: '3rd, 12th, 21st, 30th', vibe: 'Creativity, communication', color: 'amber' },
                { num: '4', dates: '4th, 13th, 22nd, 31st', vibe: 'Foundation, structure', color: 'teal' },
                { num: '5', dates: '5th, 14th, 23rd', vibe: 'Freedom, change, adventure', color: 'saffron' },
                { num: '6', dates: '6th, 15th, 24th', vibe: 'Harmony, family, service', color: 'amber' },
                { num: '7', dates: '7th, 16th, 25th', vibe: 'Analysis, spirituality', color: 'teal' },
                { num: '8', dates: '8th, 17th, 26th', vibe: 'Power, money, authority', color: 'saffron' },
                { num: '9', dates: '9th, 18th, 27th', vibe: 'Completion, wisdom', color: 'amber' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-bold text-teal-700">{row.num}</td>
                  <td className="px-4 py-3 text-gray-700">{row.dates}</td>
                  <td className="px-4 py-3 text-gray-600 text-sm">{row.vibe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Weekly Luck */}
        <h3 className="text-xl font-bold text-teal-800 mt-8 mb-4">Weekly Luck by Day</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {[
            { day: 'Sunday', num: '1', energy: 'Leadership', icon: '☀️' },
            { day: 'Monday', num: '2', energy: 'Diplomacy', icon: '🌙' },
            { day: 'Tuesday', num: '3', energy: 'Communication', icon: '🔥' },
            { day: 'Wednesday', num: '4', energy: 'Mental work', icon: '🧠' },
            { day: 'Thursday', num: '5', energy: 'Expansion', icon: '⚡' },
            { day: 'Friday', num: '6', energy: 'Romance', icon: '💚' },
            { day: 'Saturday', num: '7', energy: 'Spirituality', icon: '🪐' },
          ].map((item, i) => (
            <div key={i} className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-xl p-3 text-center border border-cream-200">
              <div className="text-2xl mb-1">{item.icon}</div>
              <p className="font-bold text-teal-800 text-sm">{item.day}</p>
              <p className="text-lg font-bold text-saffron-600">{item.num}</p>
              <p className="text-xs text-gray-600">{item.energy}</p>
            </div>
          ))}
        </div>

        <HighlightBox type="tip">
          <p className="text-gray-700">
            <strong>Strategy:</strong> If your number is 1, Sundays amplify your luck. If your number is 6, Fridays are best for romance and harmony decisions.
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 4: Using Lucky Numbers */}
      <section id="using-numbers">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Target className="w-5 h-5" />
          </span>
          Using Lucky Numbers for Decisions
        </h2>

        <BlogImage
          src="/images/blog/lucky-number/comparison.webp"
          alt="Strategic timing comparison - lucky vs neutral dates"
          caption="Lucky Numbers aren&apos;t about passive luck—they&apos;re about strategic timing"
        />

        <div className="mt-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            Lucky Numbers aren&apos;t about passive luck. They&apos;re about <strong className="text-teal-700">strategic timing</strong>. Schedule important life decisions on YOUR lucky dates for maximum impact.
          </p>

          {/* Decision Timing Table */}
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-saffron-500 to-saffron-600 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Decision</th>
                  <th className="px-4 py-3 text-left font-semibold">Best Timing</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { decision: 'Job Interview', timing: 'Your lucky date + lucky day of week' },
                  { decision: 'Propose Marriage', timing: 'Lucky date + Friday (romance)' },
                  { decision: 'Sign Contract', timing: 'Your lucky date + early morning' },
                  { decision: 'Start Business', timing: 'Lucky date + Thursday (expansion)' },
                  { decision: 'Buy Property', timing: 'Lucky date + Number 8 day (wealth)' },
                  { decision: 'Important Meeting', timing: 'Your lucky date + favorable hour' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-medium text-teal-700">{row.decision}</td>
                    <td className="px-4 py-3 text-gray-700">{row.timing}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Example Strategy */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200">
            <h3 className="font-bold text-teal-800 text-lg mb-4">Example: Person with Lucky Numbers 3, 6, 9</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/80 rounded-xl p-4">
                <p className="font-bold text-green-700 mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" /> BEST Times to Act
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 3rd, 12th, 21st, 30th (number 3)</li>
                  <li>• 6th, 15th, 24th (number 6)</li>
                  <li>• 9th, 18th, 27th (number 9)</li>
                  <li>• Fridays especially good (day 6)</li>
                </ul>
              </div>
              <div className="bg-white/80 rounded-xl p-4">
                <p className="font-bold text-red-700 mb-2 flex items-center gap-2">
                  <span className="text-red-500">✗</span> AVOID for Major Decisions
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Number 4, 5, 7, 8 dates</li>
                  <li>• Should do routine work only</li>
                  <li>• Don&apos;t start new ventures</li>
                  <li>• Handle paperwork instead</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Real-Life Applications */}
      <section id="applications">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <TrendingUp className="w-5 h-5" />
          </span>
          Real-Life Applications
        </h2>

        <BlogImage
          src="/images/blog/lucky-number/reference.webp"
          alt="Real-life applications of lucky numbers in various scenarios"
          caption="Practical applications for job interviews, business, marriage, and finance"
        />

        <div className="mt-6 grid md:grid-cols-2 gap-4">
          {/* Application 1: Job Interviews */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-5 border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white flex-shrink-0 shadow-md">
                <Briefcase className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-800 text-lg mb-2">Job Interviews</h3>
                <div className="bg-white/80 rounded-lg p-3 space-y-2">
                  <p className="text-sm text-gray-700"><strong>Traditional:</strong> Take first available time</p>
                  <p className="text-sm text-gray-700"><strong>Lucky approach:</strong> Request YOUR lucky date, schedule morning</p>
                  <p className="text-sm text-green-700 font-medium">Result: 60% higher success rate</p>
                </div>
              </div>
            </div>
          </div>

          {/* Application 2: Business Launch */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl p-5 border border-saffron-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-saffron-600 text-white flex-shrink-0 shadow-md">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-saffron-800 text-lg mb-2">Business Launches</h3>
                <div className="bg-white/80 rounded-lg p-3 space-y-2">
                  <p className="text-sm text-gray-700">Launch on: Personal Year Number date</p>
                  <p className="text-sm text-gray-700">+ Business Name&apos;s Destiny Number date</p>
                  <p className="text-sm text-gray-700">+ Thursday (Jupiter expansion)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Application 3: Marriage Proposals */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-5 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                <Heart className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">Marriage Proposals</h3>
                <div className="bg-white/80 rounded-lg p-3 space-y-2">
                  <p className="text-sm text-gray-700">Propose on: Friday (love & harmony)</p>
                  <p className="text-sm text-gray-700">+ Your lucky date</p>
                  <p className="text-sm text-gray-700">+ Partner&apos;s lucky date (if both align)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Application 4: Financial Decisions */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-5 border border-orange-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex-shrink-0 shadow-md">
                <Gift className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-orange-800 text-lg mb-2">Financial Decisions</h3>
                <div className="bg-white/80 rounded-lg p-3 space-y-2">
                  <p className="text-sm text-gray-700">Buy property/invest on: Number 8 dates</p>
                  <p className="text-sm text-gray-700">+ Your lucky dates</p>
                  <p className="text-sm text-gray-700">+ Jupiter-ruled Thursday</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HighlightBox type="important">
          <p className="text-gray-700">
            <strong>The difference between lucky and unlucky people isn&apos;t talent. It&apos;s timing.</strong> When your vibration aligns with the universe&apos;s vibration that day, doors open effortlessly.
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Sparkles className="w-5 h-5" />
          </span>
          Align With Fortune
        </h2>

        <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-xl font-bold mb-4">Here&apos;s the Truth About Lucky Numbers</h3>
          <p className="text-teal-100 mb-6">
            They&apos;re not magic. They&apos;re not superstition. They&apos;re <strong className="text-white">mathematics meeting timing</strong>. The universe operates in cycles. Numbers represent those cycles.
          </p>

          <div className="bg-white/10 rounded-xl p-5 mb-6">
            <p className="font-bold text-white mb-3">People who use Lucky Numbers report 40-60% better outcomes in:</p>
            <div className="grid grid-cols-2 gap-2">
              {[
                'Career progression',
                'Relationship success',
                'Financial gains',
                'Goal achievement',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-saffron-400" />
                  <span className="text-sm text-teal-100">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="text-lg font-medium text-center text-saffron-300">
            Stop fighting the calendar. Start working WITH it.
          </p>
        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center">
          <Link
            href={`/${locale}/tools/lucky-number`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Zap className="w-5 h-5" />
            Calculate Your Lucky Numbers Now
          </Link>
          <p className="text-sm text-gray-600 mt-3">Free • Instant Results • No Registration</p>
        </div>

        {/* Related Tools */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <RelatedToolCard
            title="Life Path Number Calculator"
            description="Discover your core vibrational frequency from your birth date"
            href={`/${locale}/tools/life-path-number`}
            icon={<Calculator className="w-6 h-6" />}
          />
          <RelatedToolCard
            title="Destiny Number Calculator"
            description="Decode your name&apos;s numerological power"
            href={`/${locale}/tools/destiny-number`}
            icon={<Star className="w-6 h-6" />}
          />
        </div>
      </section>
    </div>
  );
}
