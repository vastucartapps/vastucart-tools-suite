'use client';

import Link from 'next/link';
import { Calculator, Eye, Users, Sun, Moon, Star, Sparkles, Shield, TrendingUp, Target, Compass, Gem, Zap } from 'lucide-react';
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

interface LagnaPostProps {
  locale: string;
}

export default function LagnaPost({ locale }: LagnaPostProps) {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">
          You meet someone for the first time, and within seconds, you form an impression.
          That's <strong className="text-teal-700">Lagna</strong>—not the full picture of who you are, but how the world perceives you in that first moment.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Your <strong className="text-teal-700">Lagna (Ascendant or Rising Sign)</strong> is the zodiac sign that was rising on the eastern horizon at the exact moment you were born.
          It's like the <strong>opening scene of a movie</strong>—it sets the tone, establishes the mood, and shapes how audiences (people in your life) interpret everything that follows.
        </p>

        <HighlightBox type="warning">
          <h4 className="font-bold text-saffron-800 mb-2 flex items-center gap-2">
            <Eye className="w-5 h-5" />
            Critical Insight
          </h4>
          <p className="text-gray-700 mb-0">
            Your Lagna is NOT your real personality. It's your <strong>public persona</strong>—how you present yourself, how strangers see you, and how you unconsciously approach life's challenges.
          </p>
        </HighlightBox>

        <p className="text-gray-700 leading-relaxed">
          Many people think they understand themselves by their Sun sign or Moon sign alone. But without understanding their <strong className="text-teal-700">Lagna</strong>, they miss the crucial "first layer" that governs:
        </p>

        <FeatureList
          variant="check"
          items={[
            'Your physical appearance and body language',
            'How others perceive your confidence, energy, and approach',
            'The natural instincts you fall back on when under pressure',
            'Your approach to new situations and challenges',
          ]}
        />
      </div>

      <StatsCard
        stats={[
          { label: 'Changes Every', value: '2 Hours' },
          { label: 'Accuracy', value: '98%' },
          { label: 'Houses', value: '12' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      <SectionDivider />

      {/* Section 1: What Is Lagna */}
      <section id="what-is-lagna">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Eye className="w-5 h-5" />
          </span>
          What Is Lagna (Ascendant)?
        </h2>

        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-gray-700 leading-relaxed">
            Your <strong className="text-teal-700">Lagna (Ascendant/Rising Sign)</strong> is the zodiac sign that was on the <strong>eastern horizon at your exact birth time</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Think of your birth chart as a wheel with 12 houses. The <strong>1st house</strong> (Lagna house) is where your chart begins, and it represents your approach to life, first impression, physical appearance, and how you naturally show up in the world.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm mb-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4">
            Why Lagna Matters Most in Vedic Astrology
          </h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-teal-600 text-white flex-shrink-0">
                <Target className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-teal-800 mb-1">It's Your Chart's Foundation</p>
                <p className="text-sm text-gray-700">Your entire birth chart is read FROM your Lagna. Every house, planet, and aspect is measured relative to it.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-teal-600 text-white flex-shrink-0">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-teal-800 mb-1">It Governs First Impressions</p>
                <p className="text-sm text-gray-700">In the first meeting, people see your Lagna, not your Moon or Sun sign.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-teal-600 text-white flex-shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-teal-800 mb-1">It Shapes Your Instinctive Response</p>
                <p className="text-sm text-gray-700">When you're in danger or sudden situation, your Lagna takes over—not your Moon sign.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-teal-600 text-white flex-shrink-0">
                <Eye className="w-4 h-4" />
              </div>
              <div>
                <p className="font-semibold text-teal-800 mb-1">It Determines Physical Traits</p>
                <p className="text-sm text-gray-700">Height, build, facial features, and energy are governed by your Lagna.</p>
              </div>
            </div>
          </div>
        </div>

        <HighlightBox type="note">
          <h4 className="font-bold text-teal-800 mb-2">Lagna is the "Mask" You Wear</h4>
          <p className="text-gray-700 mb-2">Your birth chart tells three levels of truth:</p>
          <ul className="space-y-1 text-sm text-gray-700 mb-0">
            <li><strong className="text-teal-700">Lagna (Ascendant):</strong> Your public persona, how others see you</li>
            <li><strong className="text-teal-700">Moon Sign (Rashi):</strong> Your inner emotional world, your true feelings</li>
            <li><strong className="text-teal-700">Sun Sign:</strong> Your core identity, your life purpose</li>
          </ul>
          <p className="text-gray-700 mt-3 mb-0 italic">
            Most people only know their Sun sign and feel confused when it doesn't match their actual behavior. The answer is your <strong className="text-teal-700">Lagna</strong>.
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
          How to Calculate Your Lagna
        </h2>

        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-gray-700 leading-relaxed">
            Lagna calculation requires <strong>three critical pieces of information</strong>—and accuracy is non-negotiable.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm mb-6">
          <h3 className="font-bold text-amber-800 text-lg mb-4">What You Need</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-amber-200">
              <div className="text-center mb-2">
                <div className="text-3xl mb-1">📅</div>
                <div className="font-bold text-amber-800">Exact Birth Date</div>
              </div>
              <p className="text-xs text-gray-600 text-center mb-0">Day, Month, Year</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-amber-200">
              <div className="text-center mb-2">
                <div className="text-3xl mb-1">⏰</div>
                <div className="font-bold text-amber-800">Exact Birth Time</div>
              </div>
              <p className="text-xs text-gray-600 text-center mb-0">Hour, minute, seconds</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-amber-200">
              <div className="text-center mb-2">
                <div className="text-3xl mb-1">📍</div>
                <div className="font-bold text-amber-800">Exact Birth Place</div>
              </div>
              <p className="text-xs text-gray-600 text-center mb-0">City, latitude & longitude</p>
            </div>
          </div>
        </div>

        <HighlightBox type="warning">
          <h4 className="font-bold text-saffron-800 mb-2">⚠️ Why So Precise?</h4>
          <ul className="space-y-1 text-sm text-gray-700 mb-0">
            <li>The Lagna <strong>changes every 2 hours approximately</strong></li>
            <li>A <strong>10-minute error</strong> in birth time can shift your Lagna by 5 degrees</li>
            <li>In rare cases (near zodiac boundaries), 10 minutes can shift the entire Lagna sign</li>
          </ul>
        </HighlightBox>

        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-center text-white my-8 shadow-xl">
          <div className="text-4xl mb-3">🌅</div>
          <h3 className="text-2xl font-bold mb-3">Calculate Your Lagna (Rising Sign)</h3>
          <p className="text-teal-50 mb-6 max-w-2xl mx-auto">
            Discover how the world sees you with our free Lagna calculator
          </p>
          <Link
            href={`/${locale}/tools/lagna`}
            className="inline-block bg-white text-teal-700 font-bold px-8 py-3 rounded-xl hover:bg-cream-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Calculate Your Lagna Now
          </Link>
        </div>

        <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-2xl p-6 border border-cream-200 shadow-sm mb-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4">What Happens Inside the Calculator</h3>
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold flex-shrink-0">
                1
              </div>
              <p className="text-sm text-gray-700">Your birth date, time, and location are input</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold flex-shrink-0">
                2
              </div>
              <p className="text-sm text-gray-700">The algorithm calculates the exact <strong>sidereal time</strong> at your birth</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold flex-shrink-0">
                3
              </div>
              <p className="text-sm text-gray-700">It determines which zodiac sign was on the <strong>eastern horizon</strong></p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-600 text-white text-xs font-bold flex-shrink-0">
                4
              </div>
              <p className="text-sm text-gray-700">It returns your Lagna sign and <strong>Lagna degree</strong></p>
            </div>
          </div>
        </div>

        <HighlightBox type="tip">
          <h4 className="font-bold text-teal-800 mb-2">💡 Pro Tip: Cross-Check With Your Kundli</h4>
          <p className="text-gray-700 mb-2">For best accuracy, generate your full <Link href={`/${locale}/tools/kundli`} className="text-saffron-600 hover:underline font-semibold">Kundli (birth chart)</Link> to see:</p>
          <ul className="space-y-1 text-sm text-gray-700 mb-0">
            <li>Exact Lagna degree (e.g., Leo 12°45')</li>
            <li>Which planet rules your Lagna (Lagna Lord)</li>
            <li>House placements of all planets relative to your Lagna</li>
          </ul>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 3: 12 Lagnas */}
      <section id="12-lagnas">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Star className="w-5 h-5" />
          </span>
          All 12 Lagnas: Personality Profiles
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Here's how each Lagna naturally shows up in the world.
        </p>

        {/* Fire Lagnas */}
        <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-200 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-orange-500 text-white">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-saffron-800 text-xl">Fire Lagnas</h3>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-saffron-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-saffron-200">
                  <th className="text-left p-2 font-bold text-saffron-800">Lagna</th>
                  <th className="text-left p-2 font-bold text-saffron-800">First Impression</th>
                  <th className="text-left p-2 font-bold text-saffron-800">Natural Approach</th>
                  <th className="text-left p-2 font-bold text-saffron-800">Life Challenge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-saffron-100">
                  <td className="p-2 font-bold text-teal-700">Aries</td>
                  <td className="p-2 text-gray-700">Bold, direct, pioneering</td>
                  <td className="p-2 text-gray-700">Acts first, thinks later</td>
                  <td className="p-2 text-gray-700">Impulsiveness can backfire</td>
                </tr>
                <tr className="border-b border-saffron-100">
                  <td className="p-2 font-bold text-teal-700">Leo</td>
                  <td className="p-2 text-gray-700">Confident, authoritative, magnetic</td>
                  <td className="p-2 text-gray-700">Leads naturally, seeks spotlight</td>
                  <td className="p-2 text-gray-700">Can be domineering</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-teal-700">Sagittarius</td>
                  <td className="p-2 text-gray-700">Optimistic, adventurous, jovial</td>
                  <td className="p-2 text-gray-700">Explores widely, speaks freely</td>
                  <td className="p-2 text-gray-700">Can be reckless or blunt</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-saffron-600 mt-3 italic font-medium">
            Fire Lagnas appear energetic and direct. People see them as confident go-getters who don't wait for permission.
          </p>
        </div>

        {/* Earth Lagnas */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-amber-800 text-xl">Earth Lagnas</h3>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-amber-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-amber-200">
                  <th className="text-left p-2 font-bold text-amber-800">Lagna</th>
                  <th className="text-left p-2 font-bold text-amber-800">First Impression</th>
                  <th className="text-left p-2 font-bold text-amber-800">Natural Approach</th>
                  <th className="text-left p-2 font-bold text-amber-800">Life Challenge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-amber-100">
                  <td className="p-2 font-bold text-teal-700">Taurus</td>
                  <td className="p-2 text-gray-700">Calm, grounded, sensual</td>
                  <td className="p-2 text-gray-700">Steady, practical, patient</td>
                  <td className="p-2 text-gray-700">Can seem stubborn or slow</td>
                </tr>
                <tr className="border-b border-amber-100">
                  <td className="p-2 font-bold text-teal-700">Virgo</td>
                  <td className="p-2 text-gray-700">Analytical, detail-oriented, helpful</td>
                  <td className="p-2 text-gray-700">Fixes problems, improves systems</td>
                  <td className="p-2 text-gray-700">Can be critical or anxious</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-teal-700">Capricorn</td>
                  <td className="p-2 text-gray-700">Reserved, professional, serious</td>
                  <td className="p-2 text-gray-700">Works methodically toward goals</td>
                  <td className="p-2 text-gray-700">Can seem cold or unfeeling</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-amber-600 mt-3 italic font-medium">
            Earth Lagnas appear reliable and competent. People see them as responsible and dependable.
          </p>
        </div>

        {/* Air Lagnas */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-teal-800 text-xl">Air Lagnas</h3>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-teal-200">
                  <th className="text-left p-2 font-bold text-teal-800">Lagna</th>
                  <th className="text-left p-2 font-bold text-teal-800">First Impression</th>
                  <th className="text-left p-2 font-bold text-teal-800">Natural Approach</th>
                  <th className="text-left p-2 font-bold text-teal-800">Life Challenge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Gemini</td>
                  <td className="p-2 text-gray-700">Chatty, curious, youthful</td>
                  <td className="p-2 text-gray-700">Communicates, learns, explores</td>
                  <td className="p-2 text-gray-700">Can be scattered or superficial</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Libra</td>
                  <td className="p-2 text-gray-700">Charming, balanced, diplomatic</td>
                  <td className="p-2 text-gray-700">Seeks harmony, weighs options</td>
                  <td className="p-2 text-gray-700">Can be indecisive or people-pleasing</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-teal-700">Aquarius</td>
                  <td className="p-2 text-gray-700">Unique, intellectual, progressive</td>
                  <td className="p-2 text-gray-700">Questions norms, innovates</td>
                  <td className="p-2 text-gray-700">Can be detached or stubborn</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-teal-600 mt-3 italic font-medium">
            Air Lagnas appear social and communicative. People see them as friendly and adaptable.
          </p>
        </div>

        {/* Water Lagnas */}
        <div className="bg-gradient-to-br from-cream-50 via-teal-50 to-cream-50 rounded-2xl p-6 border border-teal-200 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-600 to-teal-700 text-white">
              <Moon className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-teal-800 text-xl">Water Lagnas</h3>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-teal-200">
                  <th className="text-left p-2 font-bold text-teal-800">Lagna</th>
                  <th className="text-left p-2 font-bold text-teal-800">First Impression</th>
                  <th className="text-left p-2 font-bold text-teal-800">Natural Approach</th>
                  <th className="text-left p-2 font-bold text-teal-800">Life Challenge</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Cancer</td>
                  <td className="p-2 text-gray-700">Sensitive, nurturing, protective</td>
                  <td className="p-2 text-gray-700">Cares deeply, protects family</td>
                  <td className="p-2 text-gray-700">Can be overly emotional or clingy</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Scorpio</td>
                  <td className="p-2 text-gray-700">Intense, mysterious, powerful</td>
                  <td className="p-2 text-gray-700">Digs deep, transforms</td>
                  <td className="p-2 text-gray-700">Can be secretive or vengeful</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-teal-700">Pisces</td>
                  <td className="p-2 text-gray-700">Dreamy, artistic, spiritual</td>
                  <td className="p-2 text-gray-700">Flows with intuition, imagines</td>
                  <td className="p-2 text-gray-700">Can be escapist or unrealistic</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-teal-600 mt-3 italic font-medium">
            Water Lagnas appear intuitive and emotional. People see them as sensitive and creative.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Lagna vs Sun vs Moon */}
      <section id="lagna-vs-others">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Compass className="w-5 h-5" />
          </span>
          Lagna vs Sun Sign vs Moon Sign
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          To fully understand yourself, you need all three layers.
        </p>

        <div className="bg-gradient-to-br from-saffron-50 to-amber-50 rounded-2xl p-6 border border-saffron-200 shadow-sm mb-6">
          <h3 className="font-bold text-saffron-800 text-lg mb-4">The Trinity of Self-Understanding</h3>
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-saffron-100 overflow-x-auto">
            <ComparisonTable
              headers={['Aspect', 'Lagna', 'Moon Sign', 'Sun Sign']}
              rows={[
                ['What It Means', 'How others see you', 'Your inner emotional world', 'Your core identity & life purpose'],
                ['Layer', 'Outer mask, first impression', 'Inner truth, private self', 'Deep identity, soul\'s path'],
                ['Changes Every', '2 hours', '2–3 days', '30 days'],
                ['In Daily Life', '"How I appear"', '"How I truly feel"', '"Who I\'m becoming"'],
                ['Under Pressure', 'This takes over first', 'This explains your reaction', 'This guides long-term choice'],
                ['In Relationships', 'First attraction', 'Emotional compatibility', 'Life purpose alignment'],
              ]}
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm mb-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4">Real-Life Example: The Three Layers</h3>
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
            <p className="text-sm text-gray-700 mb-3">
              <strong className="text-teal-700">Scenario:</strong> A person meets someone they're attracted to.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600 flex-shrink-0 font-bold text-sm">
                  L
                </div>
                <div>
                  <p className="font-semibold text-teal-800 text-sm mb-1">Lagna (Libra)</p>
                  <p className="text-xs text-gray-700">Makes them appear charming and diplomatic, so the attraction happens easily.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-teal-100 text-teal-600 flex-shrink-0 font-bold text-sm">
                  M
                </div>
                <div>
                  <p className="font-semibold text-teal-800 text-sm mb-1">Moon Sign (Scorpio)</p>
                  <p className="text-xs text-gray-700">They actually feel intensely and want deep loyalty.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 flex items-center justify-center rounded-full bg-amber-100 text-amber-600 flex-shrink-0 font-bold text-sm">
                  S
                </div>
                <div>
                  <p className="font-semibold text-teal-800 text-sm mb-1">Sun Sign (Capricorn)</p>
                  <p className="text-xs text-gray-700">They're looking for a serious, long-term partner to build a life with.</p>
                </div>
              </div>
            </div>
            <p className="text-xs text-teal-600 mt-4 italic font-medium">
              This is NOT inconsistency—it's layers of personality revealing themselves over time.
            </p>
          </div>
        </div>

        <HighlightBox type="tip">
          <h4 className="font-bold text-teal-800 mb-2">Why You Need All Three</h4>
          <ul className="space-y-1 text-sm text-gray-700 mb-0">
            <li><strong>Lagna alone:</strong> You seem like one person but confuse people when your true nature emerges.</li>
            <li><strong>Lagna + Moon:</strong> You understand yourself better but still miss your life direction.</li>
            <li><strong>Lagna + Moon + Sun:</strong> You finally see the complete picture.</li>
          </ul>
        </HighlightBox>

        <div className="text-center my-6">
          <p className="text-sm text-gray-600 mb-3">Calculate your complete personality trinity:</p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href={`/${locale}/tools/lagna`}
              className="inline-block bg-teal-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm"
            >
              Lagna Calculator
            </Link>
            <Link
              href={`/${locale}/tools/moon-sign`}
              className="inline-block bg-teal-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors text-sm"
            >
              Moon Sign Calculator
            </Link>
            <Link
              href={`/${locale}/tools/kundli`}
              className="inline-block bg-saffron-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-saffron-700 transition-colors text-sm"
            >
              Complete Kundli
            </Link>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Lagna Impact */}
      <section id="lagna-impact">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Users className="w-5 h-5" />
          </span>
          Lagna's Impact on Relationships & First Impressions
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Your Lagna governs the first 3–6 months of any new relationship (friendship, romance, or professional).
        </p>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm mb-6">
          <h3 className="font-bold text-amber-800 text-lg mb-4">First Impressions Are Lagna-Governed</h3>
          <p className="text-sm text-gray-700 mb-4">When you meet someone new:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-amber-100">
              <p className="font-semibold text-amber-800 text-sm mb-2">Aries Lagna</p>
              <p className="text-xs text-gray-700">"They seem bold and action-oriented."</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-amber-100">
              <p className="font-semibold text-amber-800 text-sm mb-2">Libra Lagna</p>
              <p className="text-xs text-gray-700">"They're charming and easy to talk to."</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-amber-100">
              <p className="font-semibold text-amber-800 text-sm mb-2">Capricorn Lagna</p>
              <p className="text-xs text-gray-700">"They seem serious and ambitious."</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-amber-100">
              <p className="font-semibold text-amber-800 text-sm mb-2">Pisces Lagna</p>
              <p className="text-xs text-gray-700">"They're dreamy and spiritual."</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Lagna Lord */}
      <section id="lagna-lord">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Target className="w-5 h-5" />
          </span>
          Lagna Lord: Your Life Ruler
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Your <strong className="text-teal-700">Lagna Lord</strong> is the planet that rules your Lagna sign. The strength of your Lagna Lord determines how effectively you present yourself to the world.
        </p>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm mb-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4">Lagna Lord by Sign</h3>
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-teal-200">
                  <th className="text-left p-2 font-bold text-teal-800">Lagna</th>
                  <th className="text-left p-2 font-bold text-teal-800">Ruling Planet (Lagna Lord)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Aries / Scorpio</td>
                  <td className="p-2 text-gray-700">Mars</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Taurus / Libra</td>
                  <td className="p-2 text-gray-700">Venus</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Gemini / Virgo</td>
                  <td className="p-2 text-gray-700">Mercury</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Cancer</td>
                  <td className="p-2 text-gray-700">Moon</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Leo</td>
                  <td className="p-2 text-gray-700">Sun</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Sagittarius / Pisces</td>
                  <td className="p-2 text-gray-700">Jupiter</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-teal-700">Capricorn / Aquarius</td>
                  <td className="p-2 text-gray-700">Saturn</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <HighlightBox type="note">
          <h4 className="font-bold text-teal-800 mb-2">Lagna Lord Strength</h4>
          <p className="text-sm text-gray-700 mb-2">If your Lagna Lord is:</p>
          <ul className="space-y-1 text-sm text-gray-700 mb-0">
            <li><strong className="text-teal-700">Strong (well-placed, benefic):</strong> You appear confident, capable, and reliable.</li>
            <li><strong className="text-saffron-700">Weak (debilitated, afflicted):</strong> You may seem unsure, hesitant, or lack natural charisma.</li>
          </ul>
          <p className="text-sm text-teal-600 mt-3 mb-0 font-semibold">
            Remedy: Strengthen your Lagna Lord through gemstones, mantras, and rituals specific to that planet.
          </p>
        </HighlightBox>

        {/* Gemstones by Lagna Lord */}
        <div className="bg-gradient-to-br from-saffron-50 to-amber-50 rounded-2xl p-6 border border-saffron-200 shadow-sm mb-6">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-amber-500 text-white">
              <Gem className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-saffron-800 text-xl">Gemstones by Lagna Lord</h3>
          </div>
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-saffron-100 overflow-x-auto mb-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-saffron-200">
                  <th className="text-left p-2 font-bold text-saffron-800">Lagna</th>
                  <th className="text-left p-2 font-bold text-saffron-800">Lagna Lord</th>
                  <th className="text-left p-2 font-bold text-saffron-800">Gemstone</th>
                  <th className="text-left p-2 font-bold text-saffron-800">Metal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-saffron-100">
                  <td className="p-2 font-bold text-teal-700">Aries / Scorpio</td>
                  <td className="p-2 text-gray-700">Mars</td>
                  <td className="p-2 text-gray-700">Red Coral (Moonga)</td>
                  <td className="p-2 text-gray-700">Copper</td>
                </tr>
                <tr className="border-b border-saffron-100">
                  <td className="p-2 font-bold text-teal-700">Taurus / Libra</td>
                  <td className="p-2 text-gray-700">Venus</td>
                  <td className="p-2 text-gray-700">Diamond (Heera)</td>
                  <td className="p-2 text-gray-700">Platinum</td>
                </tr>
                <tr className="border-b border-saffron-100">
                  <td className="p-2 font-bold text-teal-700">Gemini / Virgo</td>
                  <td className="p-2 text-gray-700">Mercury</td>
                  <td className="p-2 text-gray-700">Emerald (Panna)</td>
                  <td className="p-2 text-gray-700">Gold</td>
                </tr>
                <tr className="border-b border-saffron-100">
                  <td className="p-2 font-bold text-teal-700">Cancer</td>
                  <td className="p-2 text-gray-700">Moon</td>
                  <td className="p-2 text-gray-700">Pearl (Moti)</td>
                  <td className="p-2 text-gray-700">Silver</td>
                </tr>
                <tr className="border-b border-saffron-100">
                  <td className="p-2 font-bold text-teal-700">Leo</td>
                  <td className="p-2 text-gray-700">Sun</td>
                  <td className="p-2 text-gray-700">Ruby (Manik)</td>
                  <td className="p-2 text-gray-700">Gold</td>
                </tr>
                <tr className="border-b border-saffron-100">
                  <td className="p-2 font-bold text-teal-700">Sagittarius / Pisces</td>
                  <td className="p-2 text-gray-700">Jupiter</td>
                  <td className="p-2 text-gray-700">Yellow Sapphire (Pukhraj)</td>
                  <td className="p-2 text-gray-700">Gold</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-teal-700">Capricorn / Aquarius</td>
                  <td className="p-2 text-gray-700">Saturn</td>
                  <td className="p-2 text-gray-700">Blue Sapphire (Neelam)</td>
                  <td className="p-2 text-gray-700">Silver</td>
                </tr>
              </tbody>
            </table>
          </div>
          <HighlightBox type="warning">
            <p className="text-sm text-gray-700 mb-0">
              ⚠️ <strong>Important:</strong> Wear gemstones only after consulting a qualified astrologer. Improper gemstone selection can cause adverse effects. Use our <Link href={`/${locale}/tools/gemstone-recommender`} className="text-saffron-600 hover:underline font-semibold">Gemstone Recommender</Link> for guidance.
            </p>
          </HighlightBox>
        </div>

        {/* Mantras */}
        <div className="bg-gradient-to-br from-cream-50 to-teal-50 rounded-2xl p-6 border border-teal-200 shadow-sm mb-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4">Mantras to Strengthen Your Lagna Lord</h3>
          <p className="text-sm text-gray-700 mb-4">Chant 108 times daily on the day ruled by your Lagna Lord's planet:</p>
          <div className="space-y-2">
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-semibold text-teal-700 text-sm mb-1">Aries / Scorpio (Mars):</p>
              <p className="text-xs text-gray-700 italic">Om Kram Kreem Kraum Sah Bhaumaya Namah</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-semibold text-teal-700 text-sm mb-1">Taurus / Libra (Venus):</p>
              <p className="text-xs text-gray-700 italic">Om Shum Shuklaya Namah</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-semibold text-teal-700 text-sm mb-1">Gemini / Virgo (Mercury):</p>
              <p className="text-xs text-gray-700 italic">Om Bum Budhaya Namah</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-semibold text-teal-700 text-sm mb-1">Cancer (Moon):</p>
              <p className="text-xs text-gray-700 italic">Om Shraam Shrim Shaum Sah Chandramase Namah</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-semibold text-teal-700 text-sm mb-1">Leo (Sun):</p>
              <p className="text-xs text-gray-700 italic">Om Hram Hrim Hrum Sah Suryaya Namah</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-semibold text-teal-700 text-sm mb-1">Sagittarius / Pisces (Jupiter):</p>
              <p className="text-xs text-gray-700 italic">Om Graam Greem Graum Sah Gurave Namah</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-semibold text-teal-700 text-sm mb-1">Capricorn / Aquarius (Saturn):</p>
              <p className="text-xs text-gray-700 italic">Om Sham Shani Shanaischharaya Namah</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Sparkles className="w-5 h-5" />
          </span>
          Master Your Public Self
        </h2>

        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-gray-700 leading-relaxed">
            Your <strong className="text-teal-700">Lagna is your life's opening act.</strong>
          </p>

          <p className="text-gray-700 leading-relaxed">
            It's not the full story—it's the introduction that shapes how people experience the rest of your story. Whether you're naturally perceived as confident or hesitant, bold or cautious, warm or reserved—that's your Lagna at work.
          </p>

          <HighlightBox type="tip">
            <h4 className="font-bold text-teal-800 mb-2">The Power Lies in Awareness</h4>
            <FeatureList
              variant="star"
              items={[
                'Know your Lagna, and you understand why people react to you the way they do',
                'Strengthen your Lagna Lord, and you amplify your natural charisma and effectiveness',
                'Align your approach with your Lagna\'s strengths, and life flows with less friction',
              ]}
            />
            <p className="text-gray-700 mt-4 mb-0 italic">
              Your Lagna isn't meant to limit you—it's meant to show you where your greatest power lies.
            </p>
          </HighlightBox>
        </div>

        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-center text-white my-8 shadow-xl">
          <div className="text-4xl mb-3">🌅</div>
          <h3 className="text-2xl font-bold mb-3">Discover Your Rising Sign</h3>
          <p className="text-teal-50 mb-6 max-w-2xl mx-auto">
            Calculate your Lagna and unlock how the world truly sees you
          </p>
          <Link
            href={`/${locale}/tools/lagna`}
            className="inline-block bg-white text-teal-700 font-bold px-8 py-3 rounded-xl hover:bg-cream-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Calculate Your Lagna (Ascendant)
          </Link>
        </div>

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-teal-800 mb-4">Related Tools for Complete Understanding</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <RelatedToolCard
              title="Kundli Generator"
              description="See your full birth chart with all planets & houses"
              href={`/${locale}/tools/kundli`}
              icon="📊"
            />
            <RelatedToolCard
              title="Moon Sign Calculator"
              description="Understand your inner emotional world"
              href={`/${locale}/tools/moon-sign`}
              icon="🌙"
            />
            <RelatedToolCard
              title="Nakshatra Calculator"
              description="Discover your birth star's deeper layer"
              href={`/${locale}/tools/nakshatra`}
              icon="⭐"
            />
            <RelatedToolCard
              title="Mahadasha Calculator"
              description="Know which planetary period you're in"
              href={`/${locale}/tools/mahadasha`}
              icon="⏳"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
