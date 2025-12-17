'use client';

import Link from 'next/link';
import { Calculator, Grid3X3, Sparkles, Target, Shield, Heart, Briefcase, Star, Home, Compass, BookOpen, Lightbulb, CheckCircle, XCircle, Zap } from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  RelatedToolCard,
  StatsCard,
} from '../blog-content';

interface LoShuGridPostProps {
  locale: string;
}

export default function LoShuGridPost({ locale }: LoShuGridPostProps) {
  return (
    <div className="space-y-8">
      {/* Opening Hook */}
      <HighlightBox type="important">
        <p className="text-lg font-bold text-deepteal-800 mb-2">Your Life&apos;s Complete X-Ray</p>
        <p className="text-gray-700">
          The{' '}
          <a href="https://en.wikipedia.org/wiki/Lo_Shu_Square" target="_blank" rel="nofollow noopener noreferrer" className="text-deepteal-600 hover:underline">Lo Shu Grid</a>{' '}
          is one of the most powerful numerological tools ever created, originating from{' '}
          <a href="https://www.britannica.com/topic/Chinese-philosophy" target="_blank" rel="nofollow noopener noreferrer" className="text-deepteal-600 hover:underline">ancient Chinese philosophy</a>.
          It maps your complete life across <strong>9 fundamental areas</strong>—revealing which are strong and which need attention.
        </p>
      </HighlightBox>

      {/* The 9 Areas Preview */}
      <InfoCard title="The 9 Life Areas in Your Grid" variant="deepteal">
        <div className="grid grid-cols-3 gap-2 text-center text-sm">
          <div className="bg-white/80 rounded-lg p-2">Wealth</div>
          <div className="bg-white/80 rounded-lg p-2">Fame</div>
          <div className="bg-white/80 rounded-lg p-2">Love</div>
          <div className="bg-white/80 rounded-lg p-2">Family</div>
          <div className="bg-white/80 rounded-lg p-2">Self</div>
          <div className="bg-white/80 rounded-lg p-2">Creativity</div>
          <div className="bg-white/80 rounded-lg p-2">Wisdom</div>
          <div className="bg-white/80 rounded-lg p-2">Career</div>
          <div className="bg-white/80 rounded-lg p-2">Travel</div>
        </div>
        <p className="text-xs text-deepteal-700 mt-3 italic">Your birth date reveals which numbers appear. Missing numbers = areas needing attention.</p>
      </InfoCard>

      {/* Quick Examples */}
      <div className="grid md:grid-cols-3 gap-4">
        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-4 border border-red-200">
          <p className="text-sm text-red-700"><span className="font-bold">Missing 4s?</span></p>
          <p className="text-xs text-gray-600">Struggle with stability and foundation</p>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
          <p className="text-sm text-amber-700"><span className="font-bold">Missing 7s?</span></p>
          <p className="text-xs text-gray-600">Avoid introspection and spiritual growth</p>
        </div>
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200">
          <p className="text-sm text-green-700"><span className="font-bold">Multiple 8s?</span></p>
          <p className="text-xs text-gray-600">Money comes naturally to you</p>
        </div>
      </div>

      {/* Stats */}
      <StatsCard
        stats={[
          { label: 'Life Areas', value: '9' },
          { label: 'Magic Sum', value: '15' },
          { label: 'Origin', value: '2000 BCE' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      <SectionDivider />

      {/* Section 1: What is Lo Shu Grid */}
      <section id="what-is-loshu">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Grid3X3 className="w-5 h-5" />
          </span>
          What is the Lo Shu Grid?
        </h2>

        <BlogImage
          src="/images/blog/lo-shu-grid/hero.webp"
          alt="Lo Shu Grid magic square with 9 life areas"
          caption="The ancient magic square that maps your complete life across 9 areas"
        />

        <div className="mt-6 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            The <strong className="text-deepteal-700">Lo Shu Grid</strong> (also called the Magic Square) is an ancient Chinese numerological tool mapping 9 life areas. According to legend, it appeared on the shell of a sacred tortoise during the Great Flood in China (~2000 BCE).
          </p>

          {/* The Magic Square */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200">
            <h3 className="font-bold text-deepteal-800 text-lg mb-4 text-center">The Original Magic Square</h3>
            <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
              {[
                { num: '4', area: 'Wealth' },
                { num: '9', area: 'Fame' },
                { num: '2', area: 'Love' },
                { num: '3', area: 'Family' },
                { num: '5', area: 'Self' },
                { num: '7', area: 'Creativity' },
                { num: '8', area: 'Wisdom' },
                { num: '1', area: 'Career' },
                { num: '6', area: 'Travel' },
              ].map((cell, i) => (
                <div key={i} className="bg-white rounded-xl p-3 text-center shadow-sm border border-deepteal-200">
                  <div className="text-2xl font-bold text-deepteal-700">{cell.num}</div>
                  <div className="text-xs text-gray-600">{cell.area}</div>
                </div>
              ))}
            </div>
            <p className="text-sm text-deepteal-700 text-center mt-4">
              Every row, column, and diagonal adds to <strong>15</strong>—a perfect number symbolizing completeness.
            </p>
          </div>
        </div>

        <HighlightBox type="tip">
          <p className="text-gray-700">
            In numerology, your personal Lo Shu Grid is created using digits from your birth date. Each digit (1-9) gets placed in its corresponding position, revealing which life areas are strong (repeated numbers) and which are weak (missing numbers).
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 2: How to Calculate */}
      <section id="how-to-calculate">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Calculate Your Grid
        </h2>

        <BlogImage
          src="/images/blog/lo-shu-grid/concept.webp"
          alt="Step-by-step Lo Shu Grid calculation process"
          caption="Simple 4-step process to create your personal life map"
        />

        <div className="mt-6 space-y-4">
          {/* Step by Step */}
          <div className="space-y-4">
            {/* Step 1 */}
            <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-5 border border-deepteal-200">
              <h3 className="font-bold text-deepteal-800 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-deepteal-600 text-white text-sm">1</span>
                Get Your Birth Date
              </h3>
              <p className="text-sm text-gray-700">Example: December 15, 1990</p>
            </div>

            {/* Step 2 */}
            <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-5 border border-warmaccent-200">
              <h3 className="font-bold text-warmaccent-800 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-warmaccent-600 text-white text-sm">2</span>
                Write Down All Digits
              </h3>
              <div className="bg-white/80 rounded-lg p-3 font-mono text-sm">
                <p>Birth Date: 12/15/1990</p>
                <p>Digits: <strong>1, 2, 1, 5, 1, 9, 9, 0</strong></p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
              <h3 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-amber-600 text-white text-sm">3</span>
                Count Each Digit&apos;s Frequency
              </h3>
              <div className="bg-white/80 rounded-lg p-3 text-sm">
                <p><strong>1</strong> appears 3 times | <strong>2</strong> appears 1 time | <strong>5</strong> appears 1 time | <strong>9</strong> appears 2 times</p>
                <p className="text-red-600 mt-2"><strong>Missing:</strong> 3, 4, 6, 7, 8</p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-5 border border-orange-200">
              <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                <span className="w-6 h-6 flex items-center justify-center rounded-full bg-orange-600 text-white text-sm">4</span>
                Analyze Your Grid
              </h3>
              <div className="grid grid-cols-3 gap-2 max-w-xs">
                {[
                  { pos: '4', count: '-', strong: false },
                  { pos: '9', count: '✓✓', strong: true },
                  { pos: '2', count: '✓', strong: true },
                  { pos: '3', count: '-', strong: false },
                  { pos: '5', count: '✓', strong: true },
                  { pos: '7', count: '-', strong: false },
                  { pos: '8', count: '-', strong: false },
                  { pos: '1', count: '✓✓✓', strong: true },
                  { pos: '6', count: '-', strong: false },
                ].map((cell, i) => (
                  <div key={i} className={`rounded-lg p-2 text-center text-sm ${cell.strong ? 'bg-green-100 border border-green-300' : 'bg-red-50 border border-red-200'}`}>
                    <div className="font-bold">{cell.pos}</div>
                    <div className={cell.strong ? 'text-green-700' : 'text-red-500'}>{cell.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Calculator CTA */}
        <RelatedToolCard
          title="Lo Shu Grid Calculator"
          description="Enter your birth date. Get instant visual grid with complete analysis and remedies."
          href={`/${locale}/tools/lo-shu-grid`}
          icon={<Grid3X3 className="w-6 h-6" />}
        />
      </section>

      <SectionDivider />

      {/* Section 3: The 9 Life Areas */}
      <section id="nine-areas">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Compass className="w-5 h-5" />
          </span>
          The 9 Life Areas Explained
        </h2>

        <BlogImage
          src="/images/blog/lo-shu-grid/analysis.webp"
          alt="All 9 life areas of the Lo Shu Grid explained"
          caption="Each position governs a specific fundamental life area"
        />

        <div className="mt-6 grid md:grid-cols-3 gap-4">
          {/* Position 1: Career */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-4 border border-deepteal-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-deepteal-600 text-white font-bold">1</div>
              <h3 className="font-bold text-deepteal-800">Career</h3>
            </div>
            <p className="text-xs text-gray-600 mb-2">Bottom-middle (Southeast)</p>
            <div className="text-xs space-y-1">
              <p className="text-green-700">✓ Strong: Career advancement, income flow</p>
              <p className="text-red-600">✗ Missing: Career stagnation, job dissatisfaction</p>
            </div>
          </div>

          {/* Position 2: Love */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-4 border border-warmaccent-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-warmaccent-600 text-white font-bold">2</div>
              <h3 className="font-bold text-warmaccent-800">Love</h3>
            </div>
            <p className="text-xs text-gray-600 mb-2">Top-right (Northeast)</p>
            <div className="text-xs space-y-1">
              <p className="text-green-700">✓ Strong: Harmonious relationships</p>
              <p className="text-red-600">✗ Missing: Difficulty finding love</p>
            </div>
          </div>

          {/* Position 3: Family */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-amber-600 text-white font-bold">3</div>
              <h3 className="font-bold text-amber-800">Family</h3>
            </div>
            <p className="text-xs text-gray-600 mb-2">Center-left (East)</p>
            <div className="text-xs space-y-1">
              <p className="text-green-700">✓ Strong: Healthy family bonds</p>
              <p className="text-red-600">✗ Missing: Family conflict, health issues</p>
            </div>
          </div>

          {/* Position 4: Wealth */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-600 text-white font-bold">4</div>
              <h3 className="font-bold text-orange-800">Wealth</h3>
            </div>
            <p className="text-xs text-gray-600 mb-2">Top-left (Northwest)</p>
            <div className="text-xs space-y-1">
              <p className="text-green-700">✓ Strong: Financial stability</p>
              <p className="text-red-600">✗ Missing: Financial struggle (35% of people)</p>
            </div>
          </div>

          {/* Position 5: Self */}
          <div className="bg-gradient-to-br from-deepteal-100 to-deepteal-200 rounded-xl p-4 border border-deepteal-300">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-deepteal-700 text-white font-bold">5</div>
              <h3 className="font-bold text-deepteal-800">Self (Center)</h3>
            </div>
            <p className="text-xs text-gray-600 mb-2">Center (Center)</p>
            <div className="text-xs space-y-1">
              <p className="text-green-700">✓ Strong: Self-confidence, inner peace</p>
              <p className="text-red-600">✗ Missing: Low self-esteem, anxiety</p>
            </div>
          </div>

          {/* Position 6: Travel */}
          <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-xl p-4 border border-cream-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-gray-600 text-white font-bold">6</div>
              <h3 className="font-bold text-gray-800">Travel</h3>
            </div>
            <p className="text-xs text-gray-600 mb-2">Bottom-right (West)</p>
            <div className="text-xs space-y-1">
              <p className="text-green-700">✓ Strong: Adventure, freedom</p>
              <p className="text-red-600">✗ Missing: Stuck in one place</p>
            </div>
          </div>

          {/* Position 7: Creativity */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-4 border border-warmaccent-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-warmaccent-600 text-white font-bold">7</div>
              <h3 className="font-bold text-warmaccent-800">Creativity</h3>
            </div>
            <p className="text-xs text-gray-600 mb-2">Center-right (Southwest)</p>
            <div className="text-xs space-y-1">
              <p className="text-green-700">✓ Strong: Artistic talent, joy</p>
              <p className="text-red-600">✗ Missing: Blocked creativity (25% of people)</p>
            </div>
          </div>

          {/* Position 8: Wisdom */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-amber-600 text-white font-bold">8</div>
              <h3 className="font-bold text-amber-800">Wisdom</h3>
            </div>
            <p className="text-xs text-gray-600 mb-2">Bottom-left (Southwest)</p>
            <div className="text-xs space-y-1">
              <p className="text-green-700">✓ Strong: Love of learning, spiritual growth</p>
              <p className="text-red-600">✗ Missing: Resistance to learning</p>
            </div>
          </div>

          {/* Position 9: Fame */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-orange-600 text-white font-bold">9</div>
              <h3 className="font-bold text-orange-800">Fame</h3>
            </div>
            <p className="text-xs text-gray-600 mb-2">Top-middle (South)</p>
            <div className="text-xs space-y-1">
              <p className="text-green-700">✓ Strong: Natural charisma, recognition</p>
              <p className="text-red-600">✗ Missing: Invisibility (30% of people)</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Strength Arrows */}
      <section id="strength-arrows">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Zap className="w-5 h-5" />
          </span>
          Strength Arrows & Superpowers
        </h2>

        <BlogImage
          src="/images/blog/lo-shu-grid/reference.webp"
          alt="Strength arrows showing superpower combinations in Lo Shu Grid"
          caption="Complete rows, columns, or diagonals create superpower arrows"
        />

        <div className="mt-6 space-y-4">
          <p className="text-gray-700 leading-relaxed">
            When you have all numbers in a row, column, or diagonal, you form a <strong className="text-deepteal-700">Strength Arrow</strong>—a superpower area where you naturally excel.
          </p>

          {/* Arrow Types */}
          <div className="grid md:grid-cols-3 gap-4">
            {/* Horizontal Arrows */}
            <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-5 border border-deepteal-200">
              <h3 className="font-bold text-deepteal-800 mb-3">Horizontal Arrows (Rows)</h3>
              <div className="space-y-2 text-sm">
                <p><strong>4-9-2:</strong> Luck Arrow</p>
                <p><strong>3-5-7:</strong> Balance Arrow</p>
                <p><strong>8-1-6:</strong> Success Arrow</p>
              </div>
            </div>

            {/* Vertical Arrows */}
            <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-5 border border-warmaccent-200">
              <h3 className="font-bold text-warmaccent-800 mb-3">Vertical Arrows (Columns)</h3>
              <div className="space-y-2 text-sm">
                <p><strong>4-3-8:</strong> Wealth Column</p>
                <p><strong>9-5-1:</strong> Destiny Column</p>
                <p><strong>2-7-6:</strong> Harmony Column</p>
              </div>
            </div>

            {/* Diagonal Arrows */}
            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
              <h3 className="font-bold text-amber-800 mb-3">Diagonal Arrows</h3>
              <div className="space-y-2 text-sm">
                <p><strong>4-5-6:</strong> Development Diagonal</p>
                <p><strong>2-5-8:</strong> Intuition Diagonal</p>
              </div>
            </div>
          </div>

          {/* Example */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
            <h3 className="font-bold text-green-800 mb-2">Example: Complete 2-5-8 Diagonal</h3>
            <p className="text-sm text-gray-700 mb-2">This person has:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• <strong>2</strong> = Strong emotions/intuition</li>
              <li>• <strong>5</strong> = Self-confidence</li>
              <li>• <strong>8</strong> = Spiritual wisdom</li>
            </ul>
            <p className="text-sm text-green-700 mt-2 font-medium">= Natural intuitive healer or counselor</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Remedies */}
      <section id="remedies">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Shield className="w-5 h-5" />
          </span>
          Life Balance & Remedies
        </h2>

        <BlogImage
          src="/images/blog/lo-shu-grid/remedy.webp"
          alt="Feng shui remedies for missing numbers in Lo Shu Grid"
          caption="Activate missing numbers through feng shui placements"
        />

        <div className="mt-6">
          <p className="text-gray-700 leading-relaxed mb-6">
            Missing numbers can be activated through <strong className="text-deepteal-700">feng shui remedies</strong>. Each missing number has a corresponding element and remedy placement.
          </p>

          {/* Remedy Table */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-deepteal-600 to-deepteal-700 text-white">
                  <th className="px-3 py-3 text-left font-semibold">Missing</th>
                  <th className="px-3 py-3 text-left font-semibold">Element</th>
                  <th className="px-3 py-3 text-left font-semibold">Remedy</th>
                  <th className="px-3 py-3 text-left font-semibold">Placement</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { num: '1', element: 'Metal', remedy: 'White objects, circles', placement: 'East' },
                  { num: '2', element: 'Earth', remedy: 'Red items, pairs', placement: 'Northeast' },
                  { num: '3', element: 'Wood', remedy: 'Green plants, rectangles', placement: 'East' },
                  { num: '4', element: 'Wood', remedy: 'Wood furniture, plants', placement: 'Northwest' },
                  { num: '6', element: 'Metal', remedy: 'Bells, metal art', placement: 'West' },
                  { num: '7', element: 'Fire', remedy: 'Red decor, lights', placement: 'Southwest' },
                  { num: '8', element: 'Earth', remedy: 'Yellow/brown items', placement: 'Southwest' },
                  { num: '9', element: 'Fire', remedy: 'Red items, candles', placement: 'South' },
                ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-3 py-3 font-bold text-deepteal-700">{row.num}</td>
                    <td className="px-3 py-3 text-gray-700">{row.element}</td>
                    <td className="px-3 py-3 text-gray-700 text-sm">{row.remedy}</td>
                    <td className="px-3 py-3 text-warmaccent-700 font-medium">{row.placement}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Example Remedy Plan */}
          <div className="mt-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
            <h3 className="font-bold text-amber-800 text-lg mb-4">Example Remedy Plan</h3>
            <p className="text-sm text-gray-700 mb-3"><strong>Grid Analysis:</strong> Missing 1, 4, 7, 9</p>
            <div className="space-y-2 text-sm">
              <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> <strong>East:</strong> Add white decorative items (for missing 1)</p>
              <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> <strong>Northwest:</strong> Place green plant or wood furniture (for missing 4)</p>
              <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> <strong>Southwest:</strong> Add red décor or candles (for missing 7)</p>
              <p className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> <strong>South:</strong> Display achievements in red frame (for missing 9)</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Sparkles className="w-5 h-5" />
          </span>
          Complete Life Balance
        </h2>

        <div className="bg-gradient-to-br from-deepteal-600 to-deepteal-800 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-xl font-bold mb-4">The Lo Shu Grid Reveals Your Complete Life Map</h3>
          <p className="text-deepteal-100 mb-6">
            You&apos;re not randomly struggling in certain areas. Your birth date encoded your challenges and gifts.
          </p>

          <div className="bg-white/10 rounded-xl p-5 mb-6">
            <p className="font-bold text-white mb-3">The Grid Shows:</p>
            <div className="space-y-2">
              <p className="flex items-center gap-2 text-sm">
                <CheckCircle className="w-4 h-4 text-green-300" />
                <span className="text-deepteal-100">Where you naturally excel (strong numbers)</span>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <XCircle className="w-4 h-4 text-red-300" />
                <span className="text-deepteal-100">Where you need to focus (missing numbers)</span>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <Lightbulb className="w-4 h-4 text-warmaccent-400" />
                <span className="text-deepteal-100">How to activate hidden potential (remedies)</span>
              </p>
            </div>
          </div>

          <p className="text-lg font-medium text-center text-warmaccent-300">
            Master it, and you master your life.
          </p>
        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center">
          <Link
            href={`/${locale}/tools/lo-shu-grid`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-warmaccent-500 to-warmaccent-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Grid3X3 className="w-5 h-5" />
            Calculate Your Lo Shu Grid Now
          </Link>
          <p className="text-sm text-gray-600 mt-3">Free • Instant Grid • Complete Analysis</p>
        </div>

        {/* Related Tools */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <RelatedToolCard
            title="Life Path Number Calculator"
            description="Discover your soul&apos;s journey from your birth date"
            href={`/${locale}/tools/life-path-number`}
            icon={<Calculator className="w-6 h-6" />}
          />
          <RelatedToolCard
            title="Lucky Number Calculator"
            description="Find your power numbers and lucky dates"
            href={`/${locale}/tools/lucky-number`}
            icon={<Star className="w-6 h-6" />}
          />
        </div>
      </section>
    </div>
  );
}
