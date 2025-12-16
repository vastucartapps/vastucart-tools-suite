'use client';

import Link from 'next/link';
import { Calculator, Clock, Star, TrendingUp, Calendar, Sparkles, Target, Shield, Zap, Heart } from 'lucide-react';
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

interface MahadashaPostProps {
  locale: string;
}

export default function MahadashaPost({ locale }: MahadashaPostProps) {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-gray-700 leading-relaxed">
          Ever notice how some years feel effortless while others feel like constant struggle?
          How sometimes doors open mysteriously while other times every effort hits resistance?
        </p>

        <p className="text-gray-700 leading-relaxed">
          The reason isn't random luck or coincidence.
        </p>

        <p className="text-gray-700 leading-relaxed">
          <strong className="text-teal-700">It's your Mahadasha</strong>—the planetary period you're currently experiencing.
        </p>

        <HighlightBox type="important">
          <h4 className="font-bold text-saffron-800 mb-2 flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Critical Truth
          </h4>
          <p className="text-gray-700 mb-0">
            You could be the most hardworking, intelligent person alive, but if you're in Saturn's Mahadasha, Saturn will test you first before rewarding you. Conversely, during Jupiter's Mahadasha, opportunities seem to find you effortlessly.
          </p>
        </HighlightBox>

        <p className="text-gray-700 leading-relaxed">
          This is not superstition—this is <strong>cosmic timing</strong>.
        </p>
      </div>

      <StatsCard
        stats={[
          { label: 'Total Cycle', value: '120 Years' },
          { label: 'Mahadashas', value: '9' },
          { label: 'Period Range', value: '6-20 Yrs' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      <SectionDivider />

      {/* Section 1: What Is Mahadasha */}
      <section id="what-is-mahadasha">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Star className="w-5 h-5" />
          </span>
          What Is Mahadasha?
        </h2>

        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-gray-700 leading-relaxed">
            Your <strong className="text-teal-700">Mahadasha (Great Period)</strong> is a major planetary period that governs your life experiences for years at a time.
          </p>

          <p className="text-gray-700 leading-relaxed">
            In Vedic astrology, every birth chart follows a <strong>120-year cycle</strong> called the <strong>Vimsottari Dasha system</strong>. This cycle is divided into 9 planetary periods (Mahadashas), each lasting anywhere from 6 to 20 years depending on which planet rules that period.
          </p>
        </div>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm mb-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4">The Vimsottari Dasha Sequence</h3>
          <p className="text-sm text-gray-700 mb-4">The 9 planets rule Mahadashas in this fixed order:</p>
          <div className="grid md:grid-cols-3 gap-3">
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-bold text-teal-700 mb-1">1. Ketu</p>
              <p className="text-xs text-gray-600">6 years</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-bold text-teal-700 mb-1">2. Venus</p>
              <p className="text-xs text-gray-600">20 years</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-bold text-teal-700 mb-1">3. Sun</p>
              <p className="text-xs text-gray-600">6 years</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-bold text-teal-700 mb-1">4. Moon</p>
              <p className="text-xs text-gray-600">10 years</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-bold text-teal-700 mb-1">5. Mars</p>
              <p className="text-xs text-gray-600">7 years</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-bold text-teal-700 mb-1">6. Rahu</p>
              <p className="text-xs text-gray-600">18 years</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-bold text-teal-700 mb-1">7. Jupiter</p>
              <p className="text-xs text-gray-600">16 years</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-bold text-teal-700 mb-1">8. Saturn</p>
              <p className="text-xs text-gray-600">19 years</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-3 border border-teal-100">
              <p className="font-bold text-teal-700 mb-1">9. Mercury</p>
              <p className="text-xs text-gray-600">17 years</p>
            </div>
          </div>
          <p className="text-xs text-teal-600 mt-4 text-center font-medium">Total: 120 years</p>
        </div>

        <HighlightBox type="note">
          <h4 className="font-bold text-teal-800 mb-2">Why Mahadasha Matters</h4>
          <p className="text-gray-700 mb-2">Your <strong>Mahadasha is the "season of life" you're currently in.</strong></p>
          <p className="text-gray-700 mb-2">Just as spring brings growth and autumn brings harvest, each Mahadasha brings specific energies, opportunities, and challenges.</p>
          <ul className="space-y-1 text-sm text-gray-700 mb-0 mt-3">
            <li>That planet's positive qualities AMPLIFY (easier access to its gifts)</li>
            <li>That planet's negative qualities also SURFACE (you face its lessons)</li>
            <li>Life events are timed according to that planet's nature</li>
            <li>Your success depends on aligning with that planet's energy</li>
          </ul>
        </HighlightBox>

        <BlogImage
          src="/images/blog/mahadasha/chart.webp"
          alt="Mahadasha Vimsottari Cycle Chart"
          caption="The 120-year Vimsottari Dasha cycle: 9 planetary periods governing your life journey"
        />
      </section>

      <SectionDivider />

      {/* Section 2: How to Calculate */}
      <section id="how-to-calculate">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Calculate Your Mahadasha
        </h2>

        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-gray-700 leading-relaxed">
            Your Mahadasha is calculated from your <strong className="text-teal-700">birth chart's Moon position</strong> using the Vimsottari Dasha system.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm mb-6">
          <h3 className="font-bold text-amber-800 text-lg mb-4">What You Need</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-white flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-amber-800 mb-1">Exact Birth Date, Time & Location</p>
                  <p className="text-xs text-gray-600">Same accuracy as Lagna/birth chart—even 15 minutes matters</p>
                </div>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-amber-200">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-white flex-shrink-0">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-bold text-amber-800 mb-1">Your Moon's Nakshatra</p>
                  <p className="text-xs text-gray-600">Moon must be in a specific Nakshatra to determine starting Mahadasha</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-center text-white my-8 shadow-xl">
          <div className="text-4xl mb-3">⏱️</div>
          <h3 className="text-2xl font-bold mb-3">Discover Your Current Mahadasha</h3>
          <p className="text-teal-50 mb-6 max-w-2xl mx-auto">
            See which planetary period governs your life right now and what comes next
          </p>
          <Link
            href={`/${locale}/tools/mahadasha`}
            className="inline-block bg-white text-teal-700 font-bold px-8 py-3 rounded-xl hover:bg-cream-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Calculate Your Mahadasha
          </Link>
        </div>

        <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-2xl p-6 border border-cream-200 shadow-sm mb-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4">What the Calculator Returns</h3>
          <FeatureList
            variant="check"
            items={[
              'Your current Mahadasha (planet + remaining years)',
              'Remaining time in current Dasha',
              'When your next Mahadasha begins',
              'Timeline of all 9 Mahadashas from birth to age 120',
              'Sub-Dasha breakdown (finer detail within current Dasha)',
            ]}
          />
          <p className="text-sm text-gray-700 mt-4">
            <strong className="text-teal-700">Pro Tip:</strong> Get your complete <Link href={`/${locale}/tools/kundli`} className="text-saffron-600 hover:underline font-semibold">Kundli</Link> to see your Moon's exact Nakshatra and all planetary Dasha sequences from birth.
          </p>
        </div>

        <BlogImage
          src="/images/blog/mahadasha/process.webp"
          alt="Mahadasha Calculation Process"
          caption="Step-by-step: Birth data → Moon's Nakshatra → Starting Mahadasha → Current period"
        />
      </section>

      <SectionDivider />

      {/* Section 3: The 9 Mahadasha Periods */}
      <section id="9-dashas">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <TrendingUp className="w-5 h-5" />
          </span>
          The 9 Mahadasha Periods Explained
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Here's what each Mahadasha brings into your life.
        </p>

        {/* Ketu */}
        <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-200 shadow-sm mb-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-orange-500 text-white flex-shrink-0 shadow-md text-xl font-bold">
              1
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-saffron-800 text-lg mb-2">Ketu Mahadasha (6 years)</h3>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-saffron-100">
                <p className="text-sm text-gray-700"><strong className="text-teal-700">Theme:</strong> Spiritual awakening, detachment, past karma clearing</p>
                <p className="text-sm text-gray-700"><strong className="text-saffron-700">Challenges:</strong> Confusion, isolation, sudden upheavals</p>
                <p className="text-sm text-gray-700"><strong className="text-amber-700">Best For:</strong> Spiritual pursuit, releasing attachments, meditation</p>
              </div>
            </div>
          </div>
        </div>

        {/* Venus */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm mb-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white flex-shrink-0 shadow-md text-xl font-bold">
              2
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-teal-800 text-lg mb-2">
                <Link href={`/${locale}/tools/mahadasha`} className="hover:text-saffron-600 transition-colors">
                  Venus Mahadasha (20 years)
                </Link>
              </h3>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-teal-100">
                <p className="text-sm text-gray-700"><strong className="text-teal-700">Theme:</strong> Luxury, love, creativity, relationships, pleasure</p>
                <p className="text-sm text-gray-700"><strong className="text-saffron-700">Gifts:</strong> Easy attraction, financial prosperity, creative expression</p>
                <p className="text-sm text-gray-700"><strong className="text-amber-700">Life Events:</strong> Marriage, business success, wealth, artistic flourishing</p>
              </div>
              <p className="text-xs text-teal-600 mt-3 italic font-medium">Venus Dasha is the longest and often the most prosperous period for love and wealth.</p>
            </div>
          </div>
        </div>

        {/* Sun, Moon, Mars, Rahu, Jupiter, Saturn, Mercury cards follow same pattern */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {/* Sun */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-5 border border-amber-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-500 text-white font-bold">3</div>
              <h4 className="font-bold text-amber-800">Sun Mahadasha (6 yrs)</h4>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>Theme:</strong> Authority, leadership, career power</p>
            <p className="text-xs text-gray-600">Peak career opportunities, promotion, recognition. Watch for ego conflicts.</p>
          </div>

          {/* Moon */}
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-5 border border-teal-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-500 text-white font-bold">4</div>
              <h4 className="font-bold text-teal-800">
                <Link href={`/${locale}/tools/moon-sign`} className="hover:text-saffron-600 transition-colors">
                  Moon Mahadasha (10 yrs)
                </Link>
              </h4>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>Theme:</strong> Emotions, family, nurturing</p>
            <p className="text-xs text-gray-600">Family expansion, real estate, emotional growth. Strong family bonds.</p>
          </div>

          {/* Mars */}
          <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-5 border border-saffron-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-500 text-white font-bold">5</div>
              <h4 className="font-bold text-orange-800">Mars Mahadasha (7 yrs)</h4>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>Theme:</strong> Courage, action, achievement</p>
            <p className="text-xs text-gray-600">Bold initiatives, entrepreneurship, competitive wins. Watch for conflicts.</p>
          </div>

          {/* Rahu */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-5 border border-amber-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-amber-600 text-white font-bold">6</div>
              <h4 className="font-bold text-amber-800">Rahu Mahadasha (18 yrs)</h4>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>Theme:</strong> Ambition, innovation, desire</p>
            <p className="text-xs text-gray-600">Unexpected opportunities, foreign connections, unconventional success.</p>
          </div>

          {/* Jupiter */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-5 border border-teal-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-600 text-white font-bold">7</div>
              <h4 className="font-bold text-teal-800">Jupiter Mahadasha (16 yrs)</h4>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>Theme:</strong> Wisdom, expansion, luck</p>
            <p className="text-xs text-gray-600">Continuous good fortune, education, prosperity, spiritual growth.</p>
          </div>

          {/* Saturn */}
          <div className="bg-gradient-to-br from-cream-50 to-amber-50 rounded-2xl p-5 border border-amber-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-gray-600 text-white font-bold">8</div>
              <h4 className="font-bold text-gray-800">
                <Link href={`/${locale}/tools/sade-sati`} className="hover:text-saffron-600 transition-colors">
                  Saturn Mahadasha (19 yrs)
                </Link>
              </h4>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>Theme:</strong> Discipline, hard work, karma</p>
            <p className="text-xs text-gray-600">Testing period. Slow but solid success through effort and patience.</p>
          </div>

          {/* Mercury */}
          <div className="bg-gradient-to-br from-teal-50 to-green-50 rounded-2xl p-5 border border-teal-200 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-green-500 text-white font-bold">9</div>
              <h4 className="font-bold text-green-800">Mercury Mahadasha (17 yrs)</h4>
            </div>
            <p className="text-sm text-gray-700 mb-2"><strong>Theme:</strong> Communication, intellect, business</p>
            <p className="text-xs text-gray-600">Trade success, peak communication skills, learning and teaching.</p>
          </div>
        </div>

        <BlogImage
          src="/images/blog/mahadasha/reference.webp"
          alt="9 Mahadasha Periods Reference Guide"
          caption="Complete reference: All 9 Mahadasha periods with themes, gifts, and life events"
        />
      </section>

      <SectionDivider />

      {/* Section 4: Your Current Dasha */}
      <section id="current-dasha">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Target className="w-5 h-5" />
          </span>
          Your Current Dasha: What It Means
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Knowing your <strong className="text-teal-700">current Mahadasha is like knowing the weather forecast for the next 6-20 years.</strong>
        </p>

        <div className="bg-gradient-to-br from-saffron-50 to-amber-50 rounded-2xl p-6 border border-saffron-200 shadow-sm mb-6">
          <h3 className="font-bold text-saffron-800 text-lg mb-4">How to Use This Knowledge</h3>
          <div className="space-y-4">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-saffron-100">
              <h4 className="font-bold text-teal-700 mb-2">1. Understanding Your Current Struggles & Successes</h4>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>If you're in <strong>Saturn Dasha</strong> and facing hardship → This is expected, not a failure</li>
                <li>If you're in <strong>Jupiter Dasha</strong> and doors open → Align with this luck</li>
                <li>If you're in <strong>Venus Dasha</strong> and relationships matter → Invest in them</li>
              </ul>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-saffron-100">
              <h4 className="font-bold text-teal-700 mb-2">2. Timing Major Life Decisions</h4>
              <div className="text-sm text-gray-700 space-y-1">
                <p><strong className="text-saffron-700">Bad timing:</strong> Starting risky business in Saturn Dasha (unless Saturn well-placed)</p>
                <p><strong className="text-teal-700">Good timing:</strong> Taking creative risk in Venus Dasha (if Venus well-placed)</p>
              </div>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-saffron-100">
              <h4 className="font-bold text-teal-700 mb-2">3. Preparing for Transitions</h4>
              <p className="text-sm text-gray-700">Each Mahadasha has a <strong>transition phase</strong> (last 1-2 years) where the next Dasha's energy starts entering.</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Life Events & Timing */}
      <section id="life-events">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Heart className="w-5 h-5" />
          </span>
          Life Events & Dasha Timing
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Vedic astrology uses Mahadasha to predict <strong>when major life events occur</strong>, not just that they will occur.
        </p>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm mb-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4">Marriage Timing by Mahadasha</h3>
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-teal-200">
                  <th className="text-left p-2 font-bold text-teal-800">Mahadasha</th>
                  <th className="text-left p-2 font-bold text-teal-800">Likelihood</th>
                  <th className="text-left p-2 font-bold text-teal-800">Conditions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Venus</td>
                  <td className="p-2 text-green-600 font-semibold">Very High</td>
                  <td className="p-2 text-gray-700">Venus is planet of love & partnership</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Moon</td>
                  <td className="p-2 text-green-600 font-semibold">Very High</td>
                  <td className="p-2 text-gray-700">Moon rules family/emotions</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Jupiter</td>
                  <td className="p-2 text-green-600 font-semibold">Very High</td>
                  <td className="p-2 text-gray-700">Expansion includes family</td>
                </tr>
                <tr className="border-b border-teal-100">
                  <td className="p-2 font-bold text-teal-700">Saturn</td>
                  <td className="p-2 text-red-600 font-semibold">Low</td>
                  <td className="p-2 text-gray-700">Delays; but lasting if it happens</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-600 mt-3">
            Use our <Link href={`/${locale}/tools/marriage-matching`} className="text-saffron-600 hover:underline font-semibold">Marriage Matching tool</Link> to check compatibility along with Dasha timing.
          </p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm mb-6">
          <h3 className="font-bold text-amber-800 text-lg mb-4">Wealth/Financial Success Timing</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-amber-100">
              <p className="font-bold text-green-700 mb-1">Excellent</p>
              <p className="text-xs text-gray-700">Venus, Jupiter, Mercury Dashas</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-amber-100">
              <p className="font-bold text-amber-700 mb-1">Good (Slow)</p>
              <p className="text-xs text-gray-700">Saturn Dasha - lasting wealth through discipline</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-amber-100">
              <p className="font-bold text-orange-700 mb-1">Good (Unconventional)</p>
              <p className="text-xs text-gray-700">Rahu Dasha - rapid gains through risk</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-lg p-3 border border-amber-100">
              <p className="font-bold text-red-700 mb-1">Low</p>
              <p className="text-xs text-gray-700">Ketu Dasha - better for renunciation</p>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Sub-Dashas */}
      <section id="sub-dashas">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Zap className="w-5 h-5" />
          </span>
          Sub-Dashas: Zooming Into Your Current Period
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Your Mahadasha (6-20 years) is further divided into <strong>9 sub-periods called Antardasha (Bhukti)</strong>.
        </p>

        <div className="bg-gradient-to-br from-cream-50 to-amber-50 rounded-2xl p-6 border border-amber-200 shadow-sm mb-6">
          <h3 className="font-bold text-amber-800 text-lg mb-4">Example: Venus Mahadasha (20 years total)</h3>
          <p className="text-sm text-gray-700 mb-3">Divided into 9 sub-periods:</p>
          <div className="space-y-2">
            <div className="bg-white/80 backdrop-blur rounded-lg p-2 border border-amber-100 text-sm text-gray-700">
              <strong className="text-teal-700">Venus in Venus</strong> (3.2 years) — Strong Venus energy
            </div>
            <div className="bg-white/80 backdrop-blur rounded-lg p-2 border border-amber-100 text-sm text-gray-700">
              <strong className="text-teal-700">Sun in Venus</strong> (0.6 years) — Career within love/creativity
            </div>
            <div className="bg-white/80 backdrop-blur rounded-lg p-2 border border-amber-100 text-sm text-gray-700">
              <strong className="text-teal-700">Moon in Venus</strong> (1 year) — Emotional relationships
            </div>
            <div className="bg-white/80 backdrop-blur rounded-lg p-2 border border-amber-100 text-sm text-gray-700">
              <strong className="text-teal-700">Saturn in Venus</strong> (1.9 years) — Relationship tests
            </div>
            <p className="text-xs text-gray-600 mt-2 italic">... and 5 more sub-periods</p>
          </div>
        </div>

        <HighlightBox type="tip">
          <h4 className="font-bold text-teal-800 mb-2">How Sub-Dashas Refine Predictions</h4>
          <ul className="text-sm text-gray-700 space-y-1 mb-0">
            <li>Your <strong>Mahadasha</strong> tells you the <strong className="text-teal-700">season</strong></li>
            <li>Your <strong>Antardasha</strong> tells you the <strong className="text-saffron-700">week</strong></li>
            <li>Your <strong>Pratiantar Dasha</strong> tells you the <strong className="text-amber-700">day</strong></li>
          </ul>
          <p className="text-sm text-gray-700 mt-3 mb-0">For major decisions, astrologers check all three layers for precision.</p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Sparkles className="w-5 h-5" />
          </span>
          Align With Cosmic Timing
        </h2>

        <div className="prose prose-lg max-w-none mb-6">
          <p className="text-gray-700 leading-relaxed">
            Your <strong className="text-teal-700">Mahadasha is your cosmic roadmap for the next 6-20 years.</strong>
          </p>

          <p className="text-gray-700 leading-relaxed">
            It's not about blind fate—it's about <strong>awareness and alignment</strong>.
          </p>

          <HighlightBox type="tip">
            <h4 className="font-bold text-teal-800 mb-2">The Power of Knowing</h4>
            <p className="text-gray-700 mb-2">When you know:</p>
            <FeatureList
              variant="star"
              items={[
                'Which planet currently governs your life',
                'What that planet naturally brings',
                'How long this period lasts',
                'When it transitions to the next',
              ]}
            />
            <p className="text-gray-700 mt-4 mb-0">
              You stop asking <em>"Why is this happening?"</em> and start asking <em>"How can I make the most of this season?"</em>
            </p>
          </HighlightBox>
        </div>

        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-center text-white my-8 shadow-xl">
          <div className="text-4xl mb-3">⏱️</div>
          <h3 className="text-2xl font-bold mb-3">Know Your Cosmic Timeline Now</h3>
          <p className="text-teal-50 mb-6 max-w-2xl mx-auto">
            Discover which Mahadasha you're in and what the next 20 years hold
          </p>
          <Link
            href={`/${locale}/tools/mahadasha`}
            className="inline-block bg-white text-teal-700 font-bold px-8 py-3 rounded-xl hover:bg-cream-50 transition-all shadow-lg hover:shadow-xl hover:scale-105"
          >
            Calculate Your Mahadasha (Dasha Timeline)
          </Link>
        </div>

        <BlogImage
          src="/images/blog/mahadasha/remedy.webp"
          alt="Mahadasha Remedies and Cosmic Alignment"
          caption="Align with your Mahadasha through awareness, remedies, and strategic timing"
        />

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-teal-800 mb-4">Related Tools for Complete Understanding</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <RelatedToolCard
              title="Kundli Generator"
              description="See all Dashas + planets in full chart"
              href={`/${locale}/tools/kundli`}
              icon="📊"
            />
            <RelatedToolCard
              title="Sade Sati Calculator"
              description="Check if Saturn Dasha overlaps with Sade Sati"
              href={`/${locale}/tools/sade-sati`}
              icon="⏳"
            />
            <RelatedToolCard
              title="Nakshatra Calculator"
              description="Find your Moon's Nakshatra (basis of Dasha)"
              href={`/${locale}/tools/nakshatra`}
              icon="⭐"
            />
            <RelatedToolCard
              title="Lagna Calculator"
              description="See how Dasha affects your ascendant house"
              href={`/${locale}/tools/lagna`}
              icon="🌅"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
