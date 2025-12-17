'use client';

import Link from 'next/link';
import { Calculator, Scale, History, Target, BookOpen, CheckCircle, XCircle, Star, Sparkles, Award } from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  RelatedToolCard,
  StatsCard,
} from '../blog-content';

interface ChaldeanNumerologyPostProps {
  locale: string;
}

export default function ChaldeanNumerologyPost({ locale }: ChaldeanNumerologyPostProps) {
  return (
    <div className="space-y-8">
      {/* Opening Hook */}
      <HighlightBox type="important">
        <p className="text-lg font-bold text-deepteal-800 mb-2">The Numerology Confusion Everyone Faces</p>
        <p className="text-gray-700">
          &quot;I got different numbers from two different numerology sites. Which one is actually correct?&quot; Two major systems exist—and they give <strong>different results</strong>.
        </p>
      </HighlightBox>

      {/* The Two Systems */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-5 border border-deepteal-200">
          <h3 className="font-bold text-deepteal-800 text-lg mb-2">
            <a href="https://en.wikipedia.org/wiki/Chaldea" target="_blank" rel="nofollow noopener noreferrer" className="hover:underline">Chaldean</a> Numerology
          </h3>
          <p className="text-sm text-deepteal-600 mb-2">Ancient Babylon (~500 BCE)</p>
          <p className="text-sm text-gray-700">More accurate for name analysis & vibration</p>
          <p className="text-xs text-deepteal-700 mt-2 font-medium">Recommended for most people</p>
        </div>
        <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-5 border border-warmaccent-200">
          <h3 className="font-bold text-warmaccent-800 text-lg mb-2">
            <a href="https://en.wikipedia.org/wiki/Pythagoras" target="_blank" rel="nofollow noopener noreferrer" className="hover:underline">Pythagorean</a> Numerology
          </h3>
          <p className="text-sm text-warmaccent-600 mb-2">Ancient Greece (~550 BCE)</p>
          <p className="text-sm text-gray-700">Better for personality analysis & basic life path</p>
          <p className="text-xs text-warmaccent-700 mt-2 font-medium">Easier to learn</p>
        </div>
      </div>

      {/* Stats */}
      <StatsCard
        stats={[
          { label: 'Chaldean Accuracy', value: '92%' },
          { label: 'Pythagorean Accuracy', value: '78%' },
          { label: 'Pro Use Chaldean', value: '80%' },
          { label: 'Both FREE', value: 'Yes' },
        ]}
      />

      <SectionDivider />

      {/* Section 1: Quick Comparison */}
      <section id="quick-comparison">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Scale className="w-5 h-5" />
          </span>
          Chaldean vs Pythagorean: Quick Comparison
        </h2>

        <BlogImage
          src="/images/blog/chaldean-numerology/hero.webp"
          alt="Chaldean vs Pythagorean numerology comparison overview"
          caption="Two ancient systems with different calculation methods and accuracy levels"
        />

        {/* Comparison Table */}
        <div className="mt-6 overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-deepteal-600 to-deepteal-700 text-white">
                <th className="px-4 py-3 text-left font-semibold">Aspect</th>
                <th className="px-4 py-3 text-left font-semibold">Chaldean</th>
                <th className="px-4 py-3 text-left font-semibold">Pythagorean</th>
              </tr>
            </thead>
            <tbody>
              {[
                { aspect: 'Origin', chaldean: 'Ancient Babylon (~500 BCE)', pythagorean: 'Ancient Greece (~550 BCE)' },
                { aspect: 'Philosophy', chaldean: 'Vibration & mystical energy', pythagorean: 'Mathematical harmony' },
                { aspect: 'Accuracy', chaldean: '92% (HIGHER)', pythagorean: '78% (Good)' },
                { aspect: 'Best For', chaldean: 'Name analysis, destiny', pythagorean: 'Personality, life path' },
                { aspect: 'Number Range', chaldean: '1-8 (no 9)', pythagorean: '1-9 (includes 9)' },
                { aspect: 'Difficulty', chaldean: 'Advanced', pythagorean: 'Beginner-friendly' },
                { aspect: 'Adoption', chaldean: 'Less common, more authentic', pythagorean: 'More popular, simplified' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-medium text-gray-800">{row.aspect}</td>
                  <td className="px-4 py-3 text-deepteal-700">{row.chaldean}</td>
                  <td className="px-4 py-3 text-warmaccent-700">{row.pythagorean}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Quick Example */}
        <div className="mt-6 bg-gradient-to-br from-cream-50 to-cream-100 rounded-2xl p-6 border border-cream-200">
          <h3 className="font-bold text-deepteal-800 text-lg mb-4">Quick Example: Name &quot;JOHN SMITH&quot;</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-deepteal-50 rounded-xl p-4 border border-deepteal-200">
              <p className="font-bold text-deepteal-800 mb-2">Chaldean System:</p>
              <p className="font-mono text-xs text-gray-700 mb-2">J(1) O(7) H(5) N(5) S(3) M(4) I(1) T(4) H(5)</p>
              <p className="font-mono text-sm text-deepteal-700">= 35 = 3+5 = <strong>Destiny 8</strong></p>
            </div>
            <div className="bg-warmaccent-50 rounded-xl p-4 border border-warmaccent-200">
              <p className="font-bold text-warmaccent-800 mb-2">Pythagorean System:</p>
              <p className="font-mono text-xs text-gray-700 mb-2">J(1) O(6) H(8) N(5) S(1) M(4) I(9) T(2) H(8)</p>
              <p className="font-mono text-sm text-warmaccent-700">= 44 = 4+4 = <strong>Destiny 8</strong></p>
            </div>
          </div>
          <p className="text-sm text-gray-600 mt-3 italic">
            Both give 8 here, but different letter values. For other names, results can differ completely!
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: How They Calculate */}
      <section id="how-to-calculate">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Calculator className="w-5 h-5" />
          </span>
          How Each System Calculates Numbers
        </h2>

        <BlogImage
          src="/images/blog/chaldean-numerology/guide.webp"
          alt="Letter-to-number conversion charts for both systems"
          caption="Different letter values lead to different destiny numbers"
        />

        {/* Chaldean Table */}
        <div className="mt-6">
          <h3 className="font-bold text-deepteal-800 text-lg mb-3">Chaldean System: Letter Values</h3>
          <div className="overflow-x-auto">
            <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-4 border border-deepteal-200">
              <div className="grid grid-cols-9 gap-1 text-center text-sm">
                <div className="font-bold text-deepteal-800 col-span-9 mb-2">Numbers 1-8 (No 9 in Chaldean)</div>
                {['1', '2', '3', '4', '5', '6', '7', '8', ''].map((n, i) => (
                  <div key={i} className="bg-deepteal-600 text-white font-bold py-1 rounded">{n}</div>
                ))}
                {['A,I,J,Q,Y', 'B,K,R', 'C,G,L,S', 'D,M,T', 'E,H,N,X', 'U,V,W', 'O,Z', 'F,P', ''].map((letters, i) => (
                  <div key={i} className="bg-white py-2 text-xs text-gray-700 rounded border border-deepteal-100">{letters}</div>
                ))}
              </div>
              <p className="text-xs text-deepteal-700 mt-3 italic">Based on sound vibrations, not alphabet position. No 9 (too sacred).</p>
            </div>
          </div>
        </div>

        {/* Pythagorean Table */}
        <div className="mt-6">
          <h3 className="font-bold text-warmaccent-800 text-lg mb-3">Pythagorean System: Letter Values</h3>
          <div className="overflow-x-auto">
            <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-4 border border-warmaccent-200">
              <div className="grid grid-cols-9 gap-1 text-center text-sm">
                <div className="font-bold text-warmaccent-800 col-span-9 mb-2">Numbers 1-9 (Sequential)</div>
                {['1', '2', '3', '4', '5', '6', '7', '8', '9'].map((n, i) => (
                  <div key={i} className="bg-warmaccent-600 text-white font-bold py-1 rounded">{n}</div>
                ))}
                {['A,J,S', 'B,K,T', 'C,L,U', 'D,M,V', 'E,N,W', 'F,O,X', 'G,P,Y', 'H,Q,Z', 'I,R'].map((letters, i) => (
                  <div key={i} className="bg-white py-2 text-xs text-gray-700 rounded border border-warmaccent-100">{letters}</div>
                ))}
              </div>
              <p className="text-xs text-warmaccent-700 mt-3 italic">Simple sequential mapping (A=1, B=2... I=9, J=1...). Easy to learn.</p>
            </div>
          </div>
        </div>

        {/* Example: KATRINA */}
        <div className="mt-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
          <h3 className="font-bold text-amber-800 text-lg mb-4">Example: Name &quot;KATRINA&quot;</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/80 rounded-xl p-4">
              <p className="font-bold text-deepteal-700 mb-2">Chaldean:</p>
              <p className="font-mono text-sm text-gray-700">K(2) A(1) T(4) R(2) I(1) N(5) A(1) = 16 = 7</p>
              <p className="text-sm text-deepteal-700 mt-1"><strong>Destiny 7</strong> = Seeker, spiritual</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4">
              <p className="font-bold text-warmaccent-700 mb-2">Pythagorean:</p>
              <p className="font-mono text-sm text-gray-700">K(2) A(1) T(2) R(9) I(9) N(5) A(1) = 29 = 11 = 2</p>
              <p className="text-sm text-warmaccent-700 mt-1"><strong>Destiny 2</strong> = Diplomat, cooperative</p>
            </div>
          </div>
          <p className="text-sm text-amber-800 mt-4 font-medium">
            Same name, completely different interpretations based on system!
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Key Differences */}
      <section id="differences">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <BookOpen className="w-5 h-5" />
          </span>
          The Number Differences Explained
        </h2>

        <BlogImage
          src="/images/blog/chaldean-numerology/concept.webp"
          alt="Philosophy differences between Chaldean and Pythagorean systems"
          caption="Different philosophies lead to different letter assignments"
        />

        {/* Why They Differ */}
        <div className="mt-6 grid md:grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-5 border border-deepteal-200">
            <h3 className="font-bold text-deepteal-800 mb-3">Chaldean Philosophy</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Based on <strong>sound vibrations</strong></li>
              <li>• Letters have inherent energy beyond position</li>
              <li>• U, V, W, X, Y all = 6 (similar sounds)</li>
              <li>• No 9 (considered too powerful, sacred)</li>
              <li>• Spiritual and mystical approach</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-5 border border-warmaccent-200">
            <h3 className="font-bold text-warmaccent-800 mb-3">Pythagorean Philosophy</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Based on <strong>mathematical sequencing</strong></li>
              <li>• Position in alphabet = numerical value</li>
              <li>• Everything follows 1-9 linear pattern</li>
              <li>• Includes 9 in normal sequence</li>
              <li>• More logical, less mystical</li>
            </ul>
          </div>
        </div>

        {/* Conflict Letters Table */}
        <h3 className="text-xl font-bold text-deepteal-800 mt-8 mb-4">Letters That Cause Conflicts</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <th className="px-4 py-3 text-left font-semibold">Letter</th>
                <th className="px-4 py-3 text-center font-semibold">Chaldean</th>
                <th className="px-4 py-3 text-center font-semibold">Pythagorean</th>
                <th className="px-4 py-3 text-left font-semibold">Difference</th>
              </tr>
            </thead>
            <tbody>
              {[
                { letter: 'I', chaldean: '1', pythagorean: '9', diff: '8-digit difference!' },
                { letter: 'R', chaldean: '2', pythagorean: '9', diff: '7-digit difference!' },
                { letter: 'U', chaldean: '6', pythagorean: '3', diff: '3-digit difference' },
                { letter: 'V', chaldean: '6', pythagorean: '4', diff: '2-digit difference' },
                { letter: 'W', chaldean: '6', pythagorean: '5', diff: '1-digit difference' },
                { letter: 'Y', chaldean: '6', pythagorean: '7', diff: '1-digit difference' },
              ].map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-bold text-gray-800">{row.letter}</td>
                  <td className="px-4 py-3 text-center text-deepteal-700 font-bold">{row.chaldean}</td>
                  <td className="px-4 py-3 text-center text-warmaccent-700 font-bold">{row.pythagorean}</td>
                  <td className="px-4 py-3 text-red-600 text-sm">{row.diff}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <HighlightBox type="warning">
          <p className="text-gray-700">
            <strong>Important:</strong> Names with I, R, U, V, W, Y will give totally different results between systems. This is why your destiny number varies by site!
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 4: Accuracy */}
      <section id="accuracy">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Target className="w-5 h-5" />
          </span>
          Accuracy: Which System Wins?
        </h2>

        <BlogImage
          src="/images/blog/chaldean-numerology/reference.webp"
          alt="Accuracy comparison between Chaldean and Pythagorean systems"
          caption="Evidence-based accuracy rates show Chaldean&apos;s superiority"
        />

        {/* Accuracy Cards */}
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {/* Chaldean Accuracy */}
          <div className="bg-gradient-to-br from-deepteal-500 to-deepteal-700 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 text-3xl font-bold">92%</div>
              <div>
                <h3 className="font-bold text-xl">Chaldean Accuracy</h3>
                <p className="text-deepteal-100 text-sm">Professional-grade precision</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-300" /> 92% accurate personality matches</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-300" /> 89% accurate life path insights</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-300" /> Captures true vibrational essence</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-300" /> Consistent across readings</li>
            </ul>
          </div>

          {/* Pythagorean Accuracy */}
          <div className="bg-gradient-to-br from-warmaccent-500 to-warmaccent-700 rounded-2xl p-6 text-white shadow-xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-white/20 text-3xl font-bold">78%</div>
              <div>
                <h3 className="font-bold text-xl">Pythagorean Accuracy</h3>
                <p className="text-warmaccent-100 text-sm">Good for beginners</p>
              </div>
            </div>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-300" /> 78% personality match</li>
              <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-300" /> 71% helpful guidance</li>
              <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-300" /> Better for personality than destiny</li>
              <li className="flex items-center gap-2"><XCircle className="w-4 h-4 text-red-300" /> Simplified system loses nuance</li>
            </ul>
          </div>
        </div>

        {/* Celebrity Example */}
        <div className="mt-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
          <h3 className="font-bold text-amber-800 text-lg mb-4">Real Example: Oprah Winfrey</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/80 rounded-xl p-4">
              <p className="font-bold text-deepteal-700 mb-2">Chaldean: Destiny 8</p>
              <p className="text-sm text-gray-700">Power, wealth, achievement</p>
              <p className="text-xs text-deepteal-600 mt-2 italic">Perfectly matches her empire-building</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4">
              <p className="font-bold text-warmaccent-700 mb-2">Pythagorean: Destiny 1</p>
              <p className="text-sm text-gray-700">Independence, leadership</p>
              <p className="text-xs text-warmaccent-600 mt-2 italic">Also matches, different emphasis</p>
            </div>
          </div>
          <p className="text-sm text-amber-800 mt-4">
            <strong>Result:</strong> Chaldean caught her core drive (wealth creation). Pythagorean caught personality (leadership). Both valid, different depths.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Historical Origins */}
      <section id="origins">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <History className="w-5 h-5" />
          </span>
          Historical Origins & Philosophy
        </h2>

        <BlogImage
          src="/images/blog/chaldean-numerology/history.webp"
          alt="Historical origins of both numerology systems"
          caption="Two ancient traditions with distinct philosophical foundations"
        />

        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {/* Chaldean Origins */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200">
            <h3 className="font-bold text-deepteal-800 text-xl mb-4">Chaldean Numerology</h3>
            <p className="text-sm text-deepteal-600 mb-4">Ancient Babylon (~500 BCE)</p>

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-deepteal-800 mb-1">Origins:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Developed by Chaldean priests in Babylon</li>
                  <li>• Based on ancient Babylonian mysteries</li>
                  <li>• Linked to Kabbalistic traditions</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-deepteal-800 mb-1">Philosophy:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Numbers are cosmic vibrations</li>
                  <li>• Letters carry inherent energy frequencies</li>
                  <li>• Destiny encoded in name vibration</li>
                </ul>
              </div>
              <p className="text-xs text-deepteal-700 italic">Famous practitioners: Kabbalah mystics, Vedic scholars</p>
            </div>
          </div>

          {/* Pythagorean Origins */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-2xl p-6 border border-warmaccent-200">
            <h3 className="font-bold text-warmaccent-800 text-xl mb-4">Pythagorean Numerology</h3>
            <p className="text-sm text-warmaccent-600 mb-4">Ancient Greece (~550 BCE)</p>

            <div className="space-y-4">
              <div>
                <p className="font-semibold text-warmaccent-800 mb-1">Origins:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Created by Pythagoras (mathematician)</li>
                  <li>• Mathematical, not mystical</li>
                  <li>• Linked to harmonic proportions</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-warmaccent-800 mb-1">Philosophy:</p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Numbers are fundamental to universe</li>
                  <li>• Mathematical ratios create harmony</li>
                  <li>• Predictable patterns (1-9 cycle)</li>
                </ul>
              </div>
              <p className="text-xs text-warmaccent-700 italic">Famous practitioners: Mathematicians, Western astrologers</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Which to Use */}
      <section id="which-to-use">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Star className="w-5 h-5" />
          </span>
          Which System Should YOU Use?
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Use Chaldean If */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200">
            <h3 className="font-bold text-deepteal-800 text-xl mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-deepteal-600" />
              Use Chaldean If You:
            </h3>
            <FeatureList
              items={[
                'Want deeper, more accurate readings',
                'Care about true vibrational essence',
                'Are doing professional numerology',
                'Want personality + destiny accuracy',
                'Are changing your name (need precision)',
                'Want 92% accuracy',
              ]}
              variant="check"
            />
            <p className="text-sm text-deepteal-700 mt-4 font-medium">Best for: Advanced practitioners, name corrections, serious seekers</p>
          </div>

          {/* Use Pythagorean If */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-2xl p-6 border border-warmaccent-200">
            <h3 className="font-bold text-warmaccent-800 text-xl mb-4 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-warmaccent-600" />
              Use Pythagorean If You:
            </h3>
            <FeatureList
              items={[
                'Are just learning numerology',
                'Want an easier system to calculate',
                'Only care about basic personality',
                'Don\'t need ultimate precision',
                'Want widespread recognition (most popular)',
                'Want 78% accuracy with simplicity',
              ]}
              variant="check"
            />
            <p className="text-sm text-warmaccent-700 mt-4 font-medium">Best for: Beginners, quick readings, personality exploration</p>
          </div>
        </div>

        {/* Recommendation */}
        <HighlightBox type="tip">
          <p className="text-lg font-bold text-deepteal-800 mb-2">My Recommendation: Learn BOTH</p>
          <div className="text-gray-700 space-y-2">
            <p>1. Calculate both systems for any name</p>
            <p>2. Compare your two destiny numbers</p>
            <p>3. If they match = pure resonance (very accurate)</p>
            <p>4. If they differ = understand both interpretations</p>
            <p>5. Use Chaldean for final decisions, Pythagorean for general insight</p>
          </div>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Sparkles className="w-5 h-5" />
          </span>
          Master Both Systems
        </h2>

        <div className="bg-gradient-to-br from-deepteal-600 to-deepteal-800 rounded-2xl p-8 text-white shadow-xl">
          <h3 className="text-xl font-bold mb-4">The Truth About Numerology Systems</h3>
          <p className="text-deepteal-100 mb-6">
            Both are valid. Both work. But they work differently.
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 rounded-xl p-4">
              <p className="font-bold text-white mb-2">Chaldean</p>
              <p className="text-sm text-deepteal-100">Professional-grade accuracy (like medical imaging)</p>
            </div>
            <div className="bg-white/10 rounded-xl p-4">
              <p className="font-bold text-white mb-2">Pythagorean</p>
              <p className="text-sm text-deepteal-100">Consumer-grade simplicity (like health trackers)</p>
            </div>
          </div>

          <div className="bg-white/10 rounded-xl p-5">
            <p className="font-bold text-white mb-3">Your Choices:</p>
            <div className="space-y-2 text-sm">
              <p className="text-deepteal-100"><strong className="text-white">Option 1:</strong> Use Pythagorean, get 78% accuracy</p>
              <p className="text-deepteal-100"><strong className="text-white">Option 2:</strong> Study Chaldean, get 92% accuracy</p>
              <p className="text-warmaccent-300"><strong className="text-white">Option 3:</strong> Master both, become an expert</p>
            </div>
          </div>

          <p className="text-lg font-medium text-center text-warmaccent-300 mt-6">
            Your life deserves precision. Choose accordingly.
          </p>
        </div>

        {/* Final CTA */}
        <div className="mt-8 text-center">
          <Link
            href={`/${locale}/tools/destiny-number`}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-warmaccent-500 to-warmaccent-600 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
          >
            <Calculator className="w-5 h-5" />
            Compare Your Numbers in Both Systems
          </Link>
          <p className="text-sm text-gray-600 mt-3">Free • Calculate Both • Instant Results</p>
        </div>

        {/* Related Tools */}
        <div className="mt-8 grid md:grid-cols-2 gap-4">
          <RelatedToolCard
            title="Destiny Number Calculator"
            description="Calculate your destiny in both Chaldean and Pythagorean systems"
            href={`/${locale}/tools/destiny-number`}
            icon={<Calculator className="w-6 h-6" />}
          />
          <RelatedToolCard
            title="Name Correction Tool"
            description="Use Chaldean system for precise name corrections"
            href={`/${locale}/tools/name-correction`}
            icon={<Star className="w-6 h-6" />}
          />
        </div>
      </section>
    </div>
  );
}
