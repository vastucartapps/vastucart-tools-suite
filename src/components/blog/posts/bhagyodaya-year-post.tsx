'use client';

import Link from 'next/link';
import { Calculator, Calendar, TrendingUp, Briefcase, Heart, Home, BookOpen, Sparkles, Star, Zap, RefreshCw, Target, CheckCircle, XCircle } from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  RelatedToolCard,
  StatsCard,
} from '../blog-content';

interface BhagyodayaYearPostProps {
  locale: string;
}

export default function BhagyodayaYearPost({ locale }: BhagyodayaYearPostProps) {
  return (
    <div className="space-y-8">
      {/* Opening Hook */}
      <HighlightBox type="important">
        <p className="text-lg font-bold text-teal-800 mb-2">Is This Year Lucky For You?</p>
        <p className="text-gray-700">
          According to numerology, <strong>every year has a unique vibration</strong> that aligns differently with YOUR personal energy. Some years are naturally lucky for you. Others require patience.
        </p>
      </HighlightBox>

      {/* Benefits */}
      <InfoCard title="Understanding Your Bhagyodaya Year Helps You:" variant="teal">
        <FeatureList
          items={[
            'Know when to launch major initiatives',
            'Understand current year\'s challenges',
            'Time decisions for maximum success',
            'Prepare for upcoming changes',
            'Align actions with yearly energy',
          ]}
          variant="check"
        />
      </InfoCard>

      {/* Quick Examples */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200">
          <p className="font-bold text-teal-800 mb-1">Personal Year 8</p>
          <p className="text-xs text-teal-600 mb-2">Money & Power Year</p>
          <p className="text-sm text-gray-700">Ideal for career moves, investments</p>
        </div>
        <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-4 border border-saffron-200">
          <p className="font-bold text-saffron-800 mb-1">Personal Year 3</p>
          <p className="text-xs text-saffron-600 mb-2">Creativity Year</p>
          <p className="text-sm text-gray-700">Launch creative projects</p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
          <p className="font-bold text-amber-800 mb-1">Personal Year 9</p>
          <p className="text-xs text-amber-600 mb-2">Completion Year</p>
          <p className="text-sm text-gray-700">Finish cycles, prepare for new</p>
        </div>
      </div>

      {/* Stats */}
      <StatsCard
        stats={[
          { label: 'Year Cycle', value: '9 Years' },
          { label: 'Changes', value: 'Jan 1st' },
          { label: 'Method', value: 'Vedic' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      <SectionDivider />

      {/* Section 1: What is Bhagyodaya Year */}
      <section id="what-is-bhagyodaya">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Calendar className="w-5 h-5" />
          </span>
          What is Bhagyodaya Year?
        </h2>

        <BlogImage
          src="/images/blog/bhagyodaya-year/hero.webp"
          alt="Bhagyodaya Year concept showing personal year vibrations"
          caption="Your yearly roadmap based on numerological vibrations"
        />

        <div className="mt-6 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            Your <strong className="text-teal-700">Bhagyodaya Year</strong> (Bhagya = Fortune, Udaya = Rising) is the numerological vibration of the current calendar year matched with your personal energy.
          </p>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200">
            <h3 className="font-bold text-teal-800 mb-3">How It Works:</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Everyone&apos;s Personal Year changes annually</li>
              <li>• Based on birth date + current calendar year</li>
              <li>• Runs January 1 to December 31</li>
              <li>• Tells you the &quot;theme&quot; of your year</li>
            </ul>
          </div>

          {/* The 9-Year Cycle Overview */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-5 border border-saffron-200">
            <h3 className="font-bold text-saffron-800 mb-3">The 9-Year Cycle:</h3>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              {[
                { num: '1', theme: 'New Beginnings' },
                { num: '2', theme: 'Partnerships' },
                { num: '3', theme: 'Creativity' },
                { num: '4', theme: 'Foundation' },
                { num: '5', theme: 'Freedom' },
                { num: '6', theme: 'Responsibility' },
                { num: '7', theme: 'Introspection' },
                { num: '8', theme: 'Power' },
                { num: '9', theme: 'Completion' },
              ].map((year, i) => (
                <div key={i} className="bg-white/80 rounded-lg p-2">
                  <div className="font-bold text-saffron-700 text-lg">{year.num}</div>
                  <div className="text-gray-600">{year.theme}</div>
                </div>
              ))}
            </div>
            <p className="text-xs text-saffron-700 mt-3 text-center italic">Then the cycle repeats</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: How to Calculate */}
      <section id="how-to-calculate">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Calculate Your Personal Year
        </h2>

        <BlogImage
          src="/images/blog/bhagyodaya-year/process.webp"
          alt="Step-by-step calculation for personal year number"
          caption="Simple formula: Birth Month + Birth Day + Current Year"
        />

        <div className="mt-6 space-y-4">
          {/* Calculation Example */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200">
            <h3 className="font-bold text-teal-800 text-lg mb-4">Example: Born December 15, calculating for 2026</h3>
            <div className="bg-white/80 rounded-lg p-4 font-mono text-sm space-y-2">
              <p>Month: 12 = 1 + 2 = <strong>3</strong></p>
              <p>Day: 15 = 1 + 5 = <strong>6</strong></p>
              <p>Year: 2026 = 2 + 0 + 2 + 6 = 10 = 1 + 0 = <strong>1</strong></p>
              <p className="pt-2 border-t border-teal-200 text-teal-700">
                Total: 3 + 6 + 1 = 10 = 1 + 0 = <strong className="text-lg">Personal Year 1</strong>
              </p>
            </div>
            <p className="text-sm text-teal-700 mt-3">This person&apos;s 2026 = Year 1 (New Beginnings)</p>
          </div>

          {/* Step by Step */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Step 1: Reduce Birth Month</h4>
              <p className="text-sm text-gray-600">January=1, December=1+2=3</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Step 2: Reduce Birth Day</h4>
              <p className="text-sm text-gray-600">15th=1+5=6, 28th=2+8=10=1</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Step 3: Reduce Current Year</h4>
              <p className="text-sm text-gray-600">2026=2+0+2+6=10=1</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm">
              <h4 className="font-bold text-gray-800 mb-2">Step 4: Add All & Reduce</h4>
              <p className="text-sm text-gray-600">Sum all three, reduce to 1-9</p>
            </div>
          </div>
        </div>

        {/* Calculator CTA */}
        <RelatedToolCard
          title="Bhagyodaya Year Calculator"
          description="Enter your birth date. Get instant Personal Year + complete yearly forecast."
          href={`/${locale}/tools/bhagyodaya-year`}
          icon={<Calendar className="w-6 h-6" />}
        />
      </section>

      <SectionDivider />

      {/* Section 3: The 9-Year Cycle Explained */}
      <section id="nine-year-cycle">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <RefreshCw className="w-5 h-5" />
          </span>
          The 9-Year Cycle Explained
        </h2>

        <BlogImage
          src="/images/blog/bhagyodaya-year/timeline.webp"
          alt="Complete 9-year numerology cycle with themes"
          caption="Each year in the cycle has a specific theme and energy"
        />

        <div className="mt-6 space-y-4">
          {/* Year 1 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-600 text-white font-bold text-xl flex-shrink-0">1</div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-800 text-lg">New Beginnings</h3>
                <p className="text-xs text-teal-600 mb-2">Energy: Birth, initiation, independence</p>
                <p className="text-sm text-gray-700 mb-2">New opportunities appear. Fresh starts in career/relationships. Time to lead, not follow.</p>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Starting business, new job, relocation</p>
              </div>
            </div>
          </div>

          {/* Year 2 */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-5 border border-saffron-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-saffron-600 text-white font-bold text-xl flex-shrink-0">2</div>
              <div className="flex-1">
                <h3 className="font-bold text-saffron-800 text-lg">Partnerships & Cooperation</h3>
                <p className="text-xs text-saffron-600 mb-2">Energy: Duality, partnership, patience</p>
                <p className="text-sm text-gray-700 mb-2">Relationships deepen. Teamwork important. Diplomacy matters more than force.</p>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Marriage, collaboration, building alliances</p>
              </div>
            </div>
          </div>

          {/* Year 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-600 text-white font-bold text-xl flex-shrink-0">3</div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg">Creativity & Expression</h3>
                <p className="text-xs text-amber-600 mb-2">Energy: Creativity, communication, joy</p>
                <p className="text-sm text-gray-700 mb-2">Creative projects flourish. Social life expands. Communication is key.</p>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Creative launches, writing, art, entertainment</p>
              </div>
            </div>
          </div>

          {/* Year 4 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border border-orange-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-600 text-white font-bold text-xl flex-shrink-0">4</div>
              <div className="flex-1">
                <h3 className="font-bold text-orange-800 text-lg">Foundation & Structure</h3>
                <p className="text-xs text-orange-600 mb-2">Energy: Stability, hard work, building</p>
                <p className="text-sm text-gray-700 mb-2">Foundation-building required. Work intensifies. Slow but steady progress.</p>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Building assets, investing, organization</p>
              </div>
            </div>
          </div>

          {/* Year 5 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-600 text-white font-bold text-xl flex-shrink-0">5</div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-800 text-lg">Freedom & Change</h3>
                <p className="text-xs text-teal-600 mb-2">Energy: Freedom, adventure, flexibility</p>
                <p className="text-sm text-gray-700 mb-2">Major life changes occur. Travel & new experiences. Unpredictability increases.</p>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Travel, career change, exploration</p>
              </div>
            </div>
          </div>

          {/* Year 6 */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-5 border border-saffron-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-saffron-600 text-white font-bold text-xl flex-shrink-0">6</div>
              <div className="flex-1">
                <h3 className="font-bold text-saffron-800 text-lg">Responsibility & Family</h3>
                <p className="text-xs text-saffron-600 mb-2">Energy: Service, responsibility, harmony</p>
                <p className="text-sm text-gray-700 mb-2">Family matters take priority. Service & caregiving increase. Harmony is goal.</p>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Family projects, caregiving, home improvement</p>
              </div>
            </div>
          </div>

          {/* Year 7 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-600 text-white font-bold text-xl flex-shrink-0">7</div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg">Introspection & Wisdom</h3>
                <p className="text-xs text-amber-600 mb-2">Energy: Spirituality, analysis, rest</p>
                <p className="text-sm text-gray-700 mb-2">Inner work is necessary. Spiritual awakening possible. Rest becomes essential.</p>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Spiritual pursuits, research, meditation</p>
              </div>
            </div>
          </div>

          {/* Year 8 - Highlighted */}
          <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-xl p-5 border-2 border-green-400 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-600 text-white font-bold text-xl flex-shrink-0">8</div>
              <div className="flex-1">
                <h3 className="font-bold text-green-800 text-lg flex items-center gap-2">
                  Power & Abundance
                  <span className="text-xs bg-green-500 text-white px-2 py-1 rounded-full">PEAK YEAR</span>
                </h3>
                <p className="text-xs text-green-600 mb-2">Energy: Power, wealth, achievement</p>
                <p className="text-sm text-gray-700 mb-2">Opportunities for wealth increase. Professional advancement. Manifestation potential peaks.</p>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Career advancement, business growth, major investments</p>
              </div>
            </div>
          </div>

          {/* Year 9 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border border-orange-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-600 text-white font-bold text-xl flex-shrink-0">9</div>
              <div className="flex-1">
                <h3 className="font-bold text-orange-800 text-lg">Completion & Transition</h3>
                <p className="text-xs text-orange-600 mb-2">Energy: Completion, wisdom, closure</p>
                <p className="text-sm text-gray-700 mb-2">Cycles complete. Old patterns end. Preparation for new beginning.</p>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Finishing projects, closure, letting go</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Career & Finance Forecast */}
      <section id="forecast">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <TrendingUp className="w-5 h-5" />
          </span>
          Career & Finance by Personal Year
        </h2>

        <BlogImage
          src="/images/blog/bhagyodaya-year/reference.webp"
          alt="Career and finance forecast for each personal year"
          caption="Align your major decisions with yearly energy for best results"
        />

        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-teal-600 to-teal-700 text-white">
                <th className="px-4 py-3 text-left font-semibold">Year</th>
                <th className="px-4 py-3 text-left font-semibold">Career</th>
                <th className="px-4 py-3 text-left font-semibold">Finance</th>
              </tr>
            </thead>
            <tbody>
              {[
                { year: '1', career: 'New job opportunity', finance: 'Start investment' },
                { year: '2', career: 'Partnership/collaboration', finance: 'Careful spending' },
                { year: '3', career: 'Creative project', finance: 'Moderate gains' },
                { year: '4', career: 'Solid progress', finance: 'Save aggressively' },
                { year: '5', career: 'Career change', finance: 'Variable income' },
                { year: '6', career: 'Responsibility increase', finance: 'Family expenses' },
                { year: '7', career: 'Knowledge focus', finance: 'Reflection period' },
                { year: '8', career: 'Major advancement', finance: 'Peak earnings' },
                { year: '9', career: 'Transition', finance: 'Release old patterns' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-bold text-teal-700">{row.year}</td>
                  <td className="px-4 py-3 text-gray-700">{row.career}</td>
                  <td className="px-4 py-3 text-gray-600">{row.finance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Best Actions */}
      <section id="best-actions">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Target className="w-5 h-5" />
          </span>
          Best Actions for Key Years
        </h2>

        <BlogImage
          src="/images/blog/bhagyodaya-year/guide.webp"
          alt="Action plans for different personal years"
          caption="Align your major decisions with yearly energy"
        />

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {/* Year 1 Actions */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200">
            <h3 className="font-bold text-teal-800 text-lg mb-3">Year 1: ACTION PLAN</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-green-700"><CheckCircle className="w-4 h-4" /> Start that business</p>
              <p className="flex items-center gap-2 text-green-700"><CheckCircle className="w-4 h-4" /> Take new job</p>
              <p className="flex items-center gap-2 text-green-700"><CheckCircle className="w-4 h-4" /> Begin new relationship</p>
              <p className="flex items-center gap-2 text-green-700"><CheckCircle className="w-4 h-4" /> Move to new city</p>
              <p className="flex items-center gap-2 text-red-600"><XCircle className="w-4 h-4" /> Avoid: Indecision</p>
            </div>
          </div>

          {/* Year 8 Actions */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border-2 border-green-300">
            <h3 className="font-bold text-green-800 text-lg mb-3">Year 8: ACTION PLAN</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-green-700"><CheckCircle className="w-4 h-4" /> Negotiate salary raise</p>
              <p className="flex items-center gap-2 text-green-700"><CheckCircle className="w-4 h-4" /> Launch major project</p>
              <p className="flex items-center gap-2 text-green-700"><CheckCircle className="w-4 h-4" /> Make big investment</p>
              <p className="flex items-center gap-2 text-green-700"><CheckCircle className="w-4 h-4" /> Pursue promotion</p>
              <p className="flex items-center gap-2 text-red-600"><XCircle className="w-4 h-4" /> Avoid: Ethical shortcuts</p>
            </div>
          </div>

          {/* Year 4 Actions */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
            <h3 className="font-bold text-amber-800 text-lg mb-3">Year 4: ACTION PLAN</h3>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2 text-green-700"><CheckCircle className="w-4 h-4" /> Build investments</p>
              <p className="flex items-center gap-2 text-green-700"><CheckCircle className="w-4 h-4" /> Organize finances</p>
              <p className="flex items-center gap-2 text-green-700"><CheckCircle className="w-4 h-4" /> Create systems</p>
              <p className="flex items-center gap-2 text-green-700"><CheckCircle className="w-4 h-4" /> Save aggressively</p>
              <p className="flex items-center gap-2 text-red-600"><XCircle className="w-4 h-4" /> Avoid: Risky ventures</p>
            </div>
          </div>
        </div>

        <HighlightBox type="tip">
          <p className="text-gray-700">
            <strong>Pro Tip:</strong> Start your business foundation in Year 4 (building), launch it in Year 1 (new beginnings), and scale it in Year 8 (power). Strategic timing across cycles maximizes success.
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
          Master Your Year
        </h2>

        <div className="bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-xl font-bold mb-4">Your Bhagyodaya Year Is Your Yearly Roadmap</h3>
          <p className="text-teal-100 mb-6">
            Instead of random planning, align with yearly vibrations. This isn&apos;t superstition—it&apos;s strategic timing.
          </p>

          <div className="bg-white/10 rounded-xl p-5 mb-6">
            <p className="font-bold text-white mb-3">Strategic Year Planning:</p>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-300" /> Launch businesses in Year 1</p>
              <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-300" /> Invest in Year 8</p>
              <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-300" /> Build foundations in Year 4</p>
              <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-300" /> Rest in Year 7</p>
            </div>
          </div>

          <p className="text-lg font-medium text-center text-saffron-300">
            Stop fighting the calendar. Start working WITH it.
          </p>
        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center">
          <Link
            href={`/${locale}/tools/bhagyodaya-year`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-saffron-500 to-saffron-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Calendar className="w-5 h-5" />
            Calculate Your Personal Year Now
          </Link>
          <p className="text-sm text-gray-600 mt-3">Free • Instant Results • Complete Forecast</p>
        </div>

        {/* Related Tools */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <RelatedToolCard
            title="Life Path Number Calculator"
            description="Discover your core life purpose from birth date"
            href={`/${locale}/tools/life-path-number`}
            icon={<Calculator className="w-6 h-6" />}
          />
          <RelatedToolCard
            title="Lucky Number Calculator"
            description="Find your lucky dates for this year"
            href={`/${locale}/tools/lucky-number`}
            icon={<Star className="w-6 h-6" />}
          />
        </div>
      </section>
    </div>
  );
}
