'use client';

import Link from 'next/link';
import { Calculator, Clock, TrendingDown, TrendingUp, Activity, Heart, Briefcase, Shield, Sparkles, AlertTriangle, CheckCircle } from 'lucide-react';
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

interface SadeSatiPostProps {
  locale: string;
}

export default function SadeSatiPost({ locale }: SadeSatiPostProps) {
  return (
    <div className="space-y-8">
      {/* Opening Warning Box */}
      <HighlightBox type="important">
        <h4 className="font-bold text-warmaccent-800 mb-2">Sade Sati is NOT a Curse—It's a Teacher</h4>
        <p className="text-gray-700 text-sm">
          Saturn's 7.5-year cycle is the most feared period in Vedic astrology. But here's the truth: People who FEAR
          Sade Sati suffer most. People who UNDERSTAND it and ALIGN with Saturn's energy actually thrive through it.
          This period teaches discipline, responsibility, and hard lessons—but those who learn emerge stronger, wiser,
          and more resilient.
        </p>
      </HighlightBox>

      <StatsCard
        stats={[
          { label: 'Duration', value: '7.5 Years' },
          { label: 'Phases', value: '3' },
          { label: 'Frequency', value: '29.5 Yrs' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      {/* Section 1: What Is Sade Sati */}
      <section id="what-is-sade-sati">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <AlertTriangle className="w-5 h-5" />
          </span>
          What Is Sade Sati?
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          <strong className="text-deepteal-700">Sade Sati literally means "7.5 years"</strong> in Hindi-Sanskrit. It's the
          period when <strong>Saturn transits over your <Link href={`/${locale}/tools/moon-sign`} className="text-warmaccent-600 hover:underline">Moon sign</Link></strong>, creating the most challenging phase of your life.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Saturn takes approximately <strong>29.5 years to orbit the zodiac</strong>. During this orbit, Saturn passes
          through three phases relative to your Moon sign: Ascending (2.5 years) → Peak (2.5 years) → Descending (2.5 years) = <strong className="text-warmaccent-700">Total 7.5 years</strong>. After this cycle completes, you get approximately 22 years of relative ease until Saturn approaches again.
        </p>

        {/* Saturn vs Moon explanation */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm">
            <h3 className="font-bold text-deepteal-800 text-lg mb-3 flex items-center gap-2">
              <Activity className="w-5 h-5" />
              Moon Represents
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-deepteal-600 flex-shrink-0 mt-0.5" />
                <span>Mind, emotions, mental peace</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-deepteal-600 flex-shrink-0 mt-0.5" />
                <span>Comfort zone, habits, security</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-deepteal-600 flex-shrink-0 mt-0.5" />
                <span>Mother, home, nurturing</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm">
            <h3 className="font-bold text-warmaccent-800 text-lg mb-3 flex items-center gap-2">
              <Shield className="w-5 h-5" />
              Saturn Represents
            </h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warmaccent-600 flex-shrink-0 mt-0.5" />
                <span>Discipline, karma, responsibility</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warmaccent-600 flex-shrink-0 mt-0.5" />
                <span>Obstacles, delays, hard lessons</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-warmaccent-600 flex-shrink-0 mt-0.5" />
                <span>Maturity, wisdom through struggle</span>
              </li>
            </ul>
          </div>
        </div>

        <p className="text-gray-700 mb-6 leading-relaxed italic bg-amber-50 border-l-4 border-amber-500 p-4 rounded">
          <strong className="text-amber-800">When Saturn transits your Moon sign:</strong> "Your comfort zone is over.
          Time to grow up and get serious." - Saturn essentially forces you out of complacency into growth.
        </p>

        {/* Sade Sati vs Regular Saturn Comparison */}
        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm mb-6">
          <h3 className="font-bold text-deepteal-800 text-xl mb-4">Sade Sati vs Regular Saturn Transit</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-deepteal-200">
                  <th className="text-left p-2 font-bold text-deepteal-800">Aspect</th>
                  <th className="text-left p-2 font-bold text-deepteal-800">Sade Sati</th>
                  <th className="text-left p-2 font-bold text-deepteal-800">Regular Saturn</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-deepteal-100">
                  <td className="p-2 font-bold text-deepteal-700">Duration</td>
                  <td className="p-2 text-gray-700">7.5 years</td>
                  <td className="p-2 text-gray-700">Continuous from birth</td>
                </tr>
                <tr className="border-b border-deepteal-100">
                  <td className="p-2 font-bold text-deepteal-700">Intensity</td>
                  <td className="p-2 font-bold text-warmaccent-700">MAXIMUM</td>
                  <td className="p-2 text-gray-700">Varies</td>
                </tr>
                <tr className="border-b border-deepteal-100">
                  <td className="p-2 font-bold text-deepteal-700">Target</td>
                  <td className="p-2 text-gray-700">Moon sign specifically</td>
                  <td className="p-2 text-gray-700">All planets/houses</td>
                </tr>
                <tr className="border-b border-deepteal-100">
                  <td className="p-2 font-bold text-deepteal-700">Life Impact</td>
                  <td className="p-2 text-gray-700">Most disruptive period</td>
                  <td className="p-2 text-gray-700">Some challenges, some growth</td>
                </tr>
                <tr className="border-b border-deepteal-100">
                  <td className="p-2 font-bold text-deepteal-700">Frequency</td>
                  <td className="p-2 text-gray-700">Once every 29.5 years</td>
                  <td className="p-2 text-gray-700">Always present</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-deepteal-700">Emotional Toll</td>
                  <td className="p-2 font-bold text-orange-700">Highest</td>
                  <td className="p-2 text-gray-700">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <HighlightBox type="note">
          <p className="text-sm text-gray-700">
            <strong className="text-deepteal-700">Hinglish Reality:</strong> "Log kehte hain 'Sade Sati mein sab kuch kharab ho jata hai.'
            Sach toh yeh hai: Sade Sati Saturn apko apne discipline aur hard work ka lesson sikhata hai. Agar aap samajh
            jate ho Saturn ka message, toh yeh 7.5 saal aapka character badal dega—suffering nahi, transformation."
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 2: How to Check */}
      <section id="how-to-check">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-deepteal-100 text-deepteal-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Check If You're in Sade Sati
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          You need to know your <strong className="text-deepteal-700">Moon sign</strong> (not Sun sign!) and the current Saturn position.
          Get your Moon sign from your <Link href={`/${locale}/tools/kundli`} className="text-warmaccent-600 hover:underline">Kundli (Birth Chart)</Link> or <Link href={`/${locale}/tools/moon-sign`} className="text-warmaccent-600 hover:underline">Moon Sign Calculator</Link>.
        </p>

        <BlogImage
          src="/images/blog/sade-sati/guide.webp"
          alt="How to Check Sade Sati Status - Step by Step Guide"
          caption="Step-by-step process: Find your Moon sign → Check Saturn's current position → Determine your Sade Sati phase"
        />

        {/* Step-by-step cards */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white flex-shrink-0 shadow-md text-lg font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-deepteal-800 text-lg mb-2">Find Moon Sign</h3>
                <p className="text-gray-700 text-sm">
                  Use <Link href={`/${locale}/tools/moon-sign`} className="font-semibold text-deepteal-700 hover:text-warmaccent-600 transition-colors">Moon Sign Calculator</Link> with your exact birth date, time, and location.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-warmaccent-500 to-orange-500 text-white flex-shrink-0 shadow-md text-lg font-bold">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-warmaccent-800 text-lg mb-2">Check Saturn Position</h3>
                <p className="text-gray-700 text-sm">
                  Saturn moves slowly—2.5 years per zodiac sign. As of 2025, Saturn is in Pisces (Dec 2024 - May 2027).
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md text-lg font-bold">
                3
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">Use Calculator</h3>
                <p className="text-gray-700 text-sm">
                  Our <Link href={`/${locale}/tools/sade-sati`} className="font-semibold text-amber-700 hover:text-warmaccent-600 transition-colors">Sade Sati Calculator</Link> instantly shows your phase, start/end dates, and time remaining.
                </p>
              </div>
            </div>
          </div>
        </div>

        <RelatedToolCard
          title="Sade Sati Calculator"
          description="Check if you're in Saturn's 7.5-year cycle: Get your exact phase, timeline, and when it ends"
          icon={<Calculator className="w-6 h-6" />}
          href={`/${locale}/tools/sade-sati`}
        />

        <HighlightBox type="tip">
          <p className="text-sm text-gray-700">
            <strong className="text-deepteal-700">Pro Tip:</strong> Combine with <Link href={`/${locale}/tools/mahadasha`} className="text-warmaccent-600 hover:underline">Mahadasha Calculator</Link> to
            see if Saturn Dasha overlaps with Sade Sati. If both happen simultaneously, the intensity DOUBLES. This
            requires extra spiritual practice and remedies.
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 3: The 3 Phases */}
      <section id="three-phases">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Clock className="w-5 h-5" />
          </span>
          The 3 Phases of Saturn's Cycle
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Each phase lasts approximately <strong>2.5 years</strong> and has distinct characteristics. Understanding which
          phase you're in helps you apply the right strategies.
        </p>

        <BlogImage
          src="/images/blog/sade-sati/timeline.webp"
          alt="3 Phases of Sade Sati Timeline - Ascending, Peak, Descending"
          caption="Complete 7.5-year cycle: Ascending (building pressure) → Peak (maximum intensity) → Descending (gradual relief)"
        />

        {/* Phase 1: Ascending */}
        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm hover:shadow-md transition-shadow mb-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white flex-shrink-0 shadow-md">
              <TrendingUp className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-deepteal-800 text-xl mb-2">Phase 1: Sade Sati Ascending (First 2.5 Years)</h3>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-3 border border-deepteal-100">
                <p className="text-sm text-gray-700">
                  <strong className="text-deepteal-700">What's Happening:</strong> Saturn approaches your Moon sign
                </p>
                <p className="text-sm text-gray-700">
                  <strong className="text-deepteal-700">Intensity Level:</strong> <span className="text-amber-600">Moderate (building)</span>
                </p>
                <div>
                  <p className="text-sm font-bold text-deepteal-700 mb-1">What You Feel:</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Increasing obstacles and delays</li>
                    <li>• Plans taking longer to materialize</li>
                    <li>• Relationships begin straining</li>
                    <li>• Health deteriorates slowly</li>
                    <li>• Career stagnation</li>
                    <li>• Subtle anxiety, mood shifts</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-700">
                  <strong className="text-deepteal-700">Key Challenge:</strong> Most people don't recognize this phase—they think it's just "bad luck"
                </p>
                <div className="bg-deepteal-50 rounded-lg p-3 mt-2">
                  <p className="text-sm font-bold text-deepteal-700 mb-1">Survival Strategy:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>✓ Increase discipline and routine (Saturn respects this)</li>
                    <li>✓ Start laying groundwork for new projects</li>
                    <li>✓ Strengthen family relationships before peak phase</li>
                    <li>✓ Begin health regimen</li>
                    <li>✓ Financial caution (save, don't spend)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 2: Peak - MAXIMUM INTENSITY */}
        <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 border-2 border-orange-400 shadow-lg mb-4">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex-shrink-0 shadow-md">
              <AlertTriangle className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-orange-800 text-xl mb-2 flex items-center gap-2">
                Phase 2: Sade Sati Peak (Middle 2.5 Years)
                <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">HARDEST PHASE</span>
              </h3>
              <div className="bg-white/90 backdrop-blur rounded-xl p-4 space-y-3 border border-orange-200">
                <p className="text-sm text-gray-700">
                  <strong className="text-orange-700">What's Happening:</strong> Saturn directly over your Moon sign
                </p>
                <p className="text-sm text-gray-700">
                  <strong className="text-orange-700">Intensity Level:</strong> <span className="font-bold text-orange-700">MAXIMUM (hardest phase)</span>
                </p>
                <div>
                  <p className="text-sm font-bold text-orange-700 mb-1">What You Feel:</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Major obstacles appear simultaneously</li>
                    <li>• Multiple failures/setbacks</li>
                    <li>• Relationship crises or separation</li>
                    <li>• Health challenges requiring attention</li>
                    <li>• Career loss or major professional setback</li>
                    <li>• Depression, anxiety, existential questioning</li>
                    <li>• Feeling isolated or misunderstood</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-700">
                  <strong className="text-orange-700">Key Challenge:</strong> This feels like the worst period of your life
                </p>
                <div className="bg-orange-50 rounded-lg p-3 mt-2 border border-orange-200">
                  <p className="text-sm font-bold text-orange-700 mb-1">Critical Survival Strategy:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>✓ Accept what you cannot change (non-negotiable)</li>
                    <li>✓ Focus on duty and responsibility</li>
                    <li>✓ Accept smaller victories; expect slow progress</li>
                    <li>✓ Strengthen spiritual/mental practice (meditation essential)</li>
                    <li>✓ Seek professional help (therapist, mentor)</li>
                    <li>✓ Perform Saturn remedies consistently</li>
                    <li>✓ Build support network</li>
                  </ul>
                </div>
                <p className="text-xs text-orange-600 italic font-medium mt-2">
                  ⚠️ The peak within this phase is approximately 1 year—the first 6-12 months are typically the hardest
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Phase 3: Descending */}
        <div className="bg-gradient-to-br from-warmaccent-50 to-amber-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm hover:shadow-md transition-shadow">
          <div className="flex items-start gap-4">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-warmaccent-500 to-amber-500 text-white flex-shrink-0 shadow-md">
              <TrendingDown className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-warmaccent-800 text-xl mb-2">Phase 3: Sade Sati Descending (Last 2.5 Years)</h3>
              <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-3 border border-warmaccent-100">
                <p className="text-sm text-gray-700">
                  <strong className="text-warmaccent-700">What's Happening:</strong> Saturn moves away from your Moon sign
                </p>
                <p className="text-sm text-gray-700">
                  <strong className="text-warmaccent-700">Intensity Level:</strong> <span className="text-deepteal-600">Moderate (easing)</span>
                </p>
                <div>
                  <p className="text-sm font-bold text-warmaccent-700 mb-1">What You Feel:</p>
                  <ul className="text-sm text-gray-700 space-y-1 ml-4">
                    <li>• Relief begins appearing</li>
                    <li>• Old obstacles start dissolving</li>
                    <li>• New opportunities emerge</li>
                    <li>• Relationships begin healing</li>
                    <li>• Health improves</li>
                    <li>• Career stabilizes or improves</li>
                    <li>• Confidence slowly returns</li>
                  </ul>
                </div>
                <p className="text-sm text-gray-700">
                  <strong className="text-warmaccent-700">Key Challenge:</strong> You're not fully out yet—impatience can cause setback
                </p>
                <div className="bg-warmaccent-50 rounded-lg p-3 mt-2">
                  <p className="text-sm font-bold text-warmaccent-700 mb-1">Consolidation Strategy:</p>
                  <ul className="text-xs text-gray-700 space-y-1">
                    <li>✓ Don't celebrate prematurely</li>
                    <li>✓ Consolidate gains from phase 2 (Saturn rewards you here)</li>
                    <li>✓ Build for long-term (think 10+ years ahead)</li>
                    <li>✓ Share knowledge/mentorship (wisdom gained)</li>
                    <li>✓ Gratitude practice (recognize growth from struggle)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Timeline */}
      <section id="timeline">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Clock className="w-5 h-5" />
          </span>
          Timeline: When Sade Sati Starts & Ends
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Saturn transits each zodiac sign for approximately 2.5 years. Here's the current and upcoming Saturn transit schedule.
        </p>

        {/* Saturn Transit Timeline */}
        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm mb-6">
          <h3 className="font-bold text-deepteal-800 text-xl mb-4">Saturn Transit Timeline (2024-2031)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-deepteal-200">
                  <th className="text-left p-2 font-bold text-deepteal-800">Saturn in Sign</th>
                  <th className="text-left p-2 font-bold text-deepteal-800">Dates</th>
                  <th className="text-left p-2 font-bold text-deepteal-800">Moon Signs Affected</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-deepteal-100 bg-deepteal-100/50">
                  <td className="p-2 font-bold text-deepteal-700">Pisces</td>
                  <td className="p-2 text-gray-700">Dec 2024 - May 2027</td>
                  <td className="p-2 text-gray-700">Sagittarius, Capricorn, Aquarius</td>
                </tr>
                <tr className="border-b border-deepteal-100">
                  <td className="p-2 font-bold text-deepteal-700">Aries</td>
                  <td className="p-2 text-gray-700">May 2027 - Jul 2029</td>
                  <td className="p-2 text-gray-700">Capricorn, Aquarius, Pisces</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-deepteal-700">Taurus</td>
                  <td className="p-2 text-gray-700">Jul 2029 - Sep 2031</td>
                  <td className="p-2 text-gray-700">Aquarius, Pisces, Aries</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-deepteal-600 mt-3 italic font-medium">
            Each Saturn transit affects 3 consecutive Moon signs: one before, one during, and one after
          </p>
        </div>

        <HighlightBox type="important">
          <p className="text-sm text-gray-700">
            <strong className="text-deepteal-700">Example:</strong> If your Moon is in Aquarius, you're currently in Sade Sati
            Descending phase (Saturn in Pisces, Dec 2024 - May 2027). Your Sade Sati started when Saturn entered Sagittarius
            and will end when Saturn exits Pisces in May 2027. Use our <Link href={`/${locale}/tools/sade-sati`} className="text-warmaccent-600 hover:underline">Sade Sati Calculator</Link> for YOUR exact timeline.
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 5: Effects */}
      <section id="effects">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Activity className="w-5 h-5" />
          </span>
          Sade Sati Effects: What to Expect
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Sade Sati affects all major life areas. Here's the breakdown by domain and phase.
        </p>

        <BlogImage
          src="/images/blog/sade-sati/impact.webp"
          alt="Sade Sati Effects on Health, Relationships, and Career"
          caption="Comprehensive impact analysis: How Saturn's 7.5-year cycle affects health, relationships, career, and mental well-being"
        />

        {/* Health Effects Table */}
        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm mb-4">
          <h3 className="font-bold text-deepteal-800 text-lg mb-3 flex items-center gap-2">
            <Activity className="w-5 h-5" />
            Health During Sade Sati
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-deepteal-200">
                  <th className="text-left p-2 font-bold text-deepteal-800">Phase</th>
                  <th className="text-left p-2 font-bold text-deepteal-800">Common Issues</th>
                  <th className="text-left p-2 font-bold text-deepteal-800">Root Cause</th>
                  <th className="text-left p-2 font-bold text-deepteal-800">Prevention</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-deepteal-100">
                  <td className="p-2 font-bold text-deepteal-700">Ascending</td>
                  <td className="p-2 text-gray-700">Minor illness, stress</td>
                  <td className="p-2 text-gray-700">Building pressure</td>
                  <td className="p-2 text-gray-700">Exercise, sleep</td>
                </tr>
                <tr className="border-b border-deepteal-100 bg-orange-50">
                  <td className="p-2 font-bold text-orange-700">Peak</td>
                  <td className="p-2 text-gray-700">Major illness, chronic issues</td>
                  <td className="p-2 text-gray-700">Maximum stress</td>
                  <td className="p-2 text-gray-700">Medical care, diet</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-deepteal-700">Descending</td>
                  <td className="p-2 text-gray-700">Recovery begins</td>
                  <td className="p-2 text-gray-700">Easing pressure</td>
                  <td className="p-2 text-gray-700">Consolidate health</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-deepteal-600 mt-3 italic">
            Note: Sade Sati doesn't cause disease, but stress can trigger latent conditions
          </p>
        </div>

        {/* Relationships Effects Table */}
        <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm mb-4">
          <h3 className="font-bold text-warmaccent-800 text-lg mb-3 flex items-center gap-2">
            <Heart className="w-5 h-5" />
            Relationships During Sade Sati
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-warmaccent-200">
                  <th className="text-left p-2 font-bold text-warmaccent-800">Phase</th>
                  <th className="text-left p-2 font-bold text-warmaccent-800">What Happens</th>
                  <th className="text-left p-2 font-bold text-warmaccent-800">Why</th>
                  <th className="text-left p-2 font-bold text-warmaccent-800">Response</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-warmaccent-100">
                  <td className="p-2 font-bold text-warmaccent-700">Ascending</td>
                  <td className="p-2 text-gray-700">Tension builds</td>
                  <td className="p-2 text-gray-700">Mood becoming serious</td>
                  <td className="p-2 text-gray-700">Communicate more</td>
                </tr>
                <tr className="border-b border-warmaccent-100 bg-orange-50">
                  <td className="p-2 font-bold text-orange-700">Peak</td>
                  <td className="p-2 text-gray-700">Separation/conflict possible</td>
                  <td className="p-2 text-gray-700">Both stressed, misunderstand</td>
                  <td className="p-2 text-gray-700">Seek counseling</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-warmaccent-700">Descending</td>
                  <td className="p-2 text-gray-700">Healing or closure</td>
                  <td className="p-2 text-gray-700">Acceptance of change</td>
                  <td className="p-2 text-gray-700">Accept outcome</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Career Effects Table */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm">
          <h3 className="font-bold text-amber-800 text-lg mb-3 flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            Career During Sade Sati
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-amber-200">
                  <th className="text-left p-2 font-bold text-amber-800">Phase</th>
                  <th className="text-left p-2 font-bold text-amber-800">Typical Experience</th>
                  <th className="text-left p-2 font-bold text-amber-800">Saturn's Lesson</th>
                  <th className="text-left p-2 font-bold text-amber-800">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-amber-100">
                  <td className="p-2 font-bold text-amber-700">Ascending</td>
                  <td className="p-2 text-gray-700">Stagnation, delays</td>
                  <td className="p-2 text-gray-700">Work harder for gains</td>
                  <td className="p-2 text-gray-700">Increase effort</td>
                </tr>
                <tr className="border-b border-amber-100 bg-orange-50">
                  <td className="p-2 font-bold text-orange-700">Peak</td>
                  <td className="p-2 text-gray-700">Job loss, major setback possible</td>
                  <td className="p-2 text-gray-700">Redirect your path</td>
                  <td className="p-2 text-gray-700">Rebuild differently</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-amber-700">Descending</td>
                  <td className="p-2 text-gray-700">New opportunities</td>
                  <td className="p-2 text-gray-700">Reap what you sowed</td>
                  <td className="p-2 text-gray-700">Consolidate</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Survival Strategies & Remedies */}
      <section id="survival">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Shield className="w-5 h-5" />
          </span>
          Survival Strategies & Remedies
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Here's how to not just survive Sade Sati, but actually thrive through it. These remedies reduce severity by
          30-50% and help you align with Saturn's energy.
        </p>

        <BlogImage
          src="/images/blog/sade-sati/remedy.webp"
          alt="Sade Sati Remedies and Survival Strategies"
          caption="5 proven remedies to navigate Saturn's cycle: Blue Sapphire, Saturn Mantra, Donations, Spiritual Practice, and Professional Support"
        />

        {/* Universal Remedies */}
        <div className="space-y-4 mb-6">
          {/* Remedy 1: Blue Sapphire */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white flex-shrink-0 shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-deepteal-800 text-lg mb-2">Remedy #1: Wear Blue Sapphire (Neelam)</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-deepteal-100">
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">How it helps:</strong> Strengthens Saturn, channels energy into wisdom rather than suffering</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Cost:</strong> ₹2,000-10,000 (depending on quality)</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">How to wear:</strong> Silver/platinum ring on middle finger of right hand, Saturday</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Effectiveness:</strong> High (60-70% of wearers)</p>
                  <p className="text-xs text-orange-600 italic mt-2">⚠️ Must consult astrologer; can backfire if wrongly placed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 2: Saturn Mantra */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-warmaccent-500 to-orange-500 text-white flex-shrink-0 shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-warmaccent-800 text-lg mb-2">Remedy #2: Perform Saturn Mantra</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-warmaccent-100">
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">Main Mantra:</strong> Om Sham Shani Shanaischharaya Namah</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">How to chant:</strong> 108 times on Saturday mornings, facing West, meditation posture</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">Effectiveness:</strong> Moderate to high (regular practice essential)</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">Cost:</strong> FREE</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 3: Donations */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                <Heart className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">Remedy #3: Donate on Saturdays</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-amber-100">
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">What to donate:</strong> Black mustard seeds, black cloth, iron items, sesame oil</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">How to donate:</strong> Give to temples or needy on Saturdays with gratitude, not desperation</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Effectiveness:</strong> Moderate (works through karma adjustment)</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Cost:</strong> Minimal (₹100-500)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 4: Spiritual Practice - MOST IMPORTANT */}
          <div className="bg-gradient-to-br from-deepteal-100 to-deepteal-200 rounded-2xl p-6 border-2 border-deepteal-400 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white flex-shrink-0 shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-deepteal-800 text-lg mb-2 flex items-center gap-2">
                  Remedy #4: Spiritual Practice
                  <span className="text-xs bg-deepteal-500 text-white px-2 py-1 rounded-full">MOST IMPORTANT</span>
                </h3>
                <div className="bg-white/90 backdrop-blur rounded-xl p-4 space-y-2 border border-deepteal-200">
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">What to do:</strong> Meditation (30 min daily minimum), Yoga (slow, grounding practices), Journaling (process emotions), Service to others (shift focus outward)</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Effectiveness:</strong> <span className="font-bold text-deepteal-700">HIGHEST (addresses root cause—mental resilience)</span></p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Cost:</strong> FREE</p>
                  <p className="text-xs text-deepteal-600 font-bold mt-2">⭐ Saturn respects discipline and inner work above all</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 5: Professional Support */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-amber-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-warmaccent-500 to-amber-500 text-white flex-shrink-0 shadow-md">
                <Shield className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-warmaccent-800 text-lg mb-2">Remedy #5: Professional Support</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-warmaccent-100">
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">What helps:</strong> Therapy/counseling (process stress), Mentor/guide (gain perspective), Community (reduce isolation)</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">Effectiveness:</strong> HIGHEST (psychological + practical)</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">Cost:</strong> Varies</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HighlightBox type="important">
          <p className="text-sm text-gray-700">
            <strong className="text-deepteal-700">Most Effective Approach:</strong> Remedy (30%) + Spiritual practice (50%) +
            Practical action (20%). Don't rely solely on gemstones or rituals—Saturn demands inner transformation and
            disciplined action.
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <CheckCircle className="w-5 h-5" />
          </span>
          Use Saturn's Lessons
        </h2>

        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-8 border-2 border-deepteal-300 shadow-lg mb-6">
          <h3 className="font-bold text-deepteal-800 text-xl mb-4">The Truth About Sade Sati:</h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            It's not a curse. It's <strong className="text-warmaccent-700">Saturn's gift wrapped in difficulty</strong>.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            For 7.5 years, Saturn forces you to: Drop illusions and see reality clearly • Develop discipline and
            responsibility • Learn patience and persistence • Build character through struggle • Create lasting,
            solid foundations
          </p>
          <div className="bg-white/80 backdrop-blur rounded-xl p-6 border border-deepteal-200">
            <h4 className="font-bold text-deepteal-700 mb-3">People who complete Sade Sati emerge:</h4>
            <FeatureList
              items={[
                'More mature and wise',
                'Better at handling pressure',
                'Stronger relationships (those that survive are real)',
                'More resilient and confident',
                'With solid achievements (not quick wins)',
              ]}
              variant="check"
            />
          </div>
        </div>

        <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-8 border-2 border-warmaccent-300 shadow-lg mb-6">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            <strong className="text-warmaccent-800">The difference between those who suffer and those who thrive in Sade Sati is simple:</strong>
          </p>
          <p className="text-xl font-bold text-gray-700 mb-2">Sufferers fight Saturn.</p>
          <p className="text-xl font-bold text-deepteal-700">Thrivers learn from Saturn.</p>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Your Sade Sati is not punishment—it's evolution. The 7.5 years will pass whether you understand them or not.
          The difference is: <strong className="text-deepteal-700">Will you emerge stronger, or just older?</strong>
        </p>

        <p className="text-gray-700 text-xl leading-relaxed font-bold text-center mb-6">
          Choose understanding. Choose growth. <span className="text-warmaccent-700">Choose Saturn's wisdom.</span>
        </p>
      </section>

      {/* Related Tools */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <RelatedToolCard
          title="Kundli Generator"
          description="See Saturn's position in your full birth chart and understand all planetary influences"
          icon={<Calculator className="w-6 h-6" />}
          href={`/${locale}/tools/kundli`}
        />
        <RelatedToolCard
          title="Moon Sign Calculator"
          description="Find your Moon sign—the basis of Sade Sati calculation"
          icon={<Activity className="w-6 h-6" />}
          href={`/${locale}/tools/moon-sign`}
        />
        <RelatedToolCard
          title="Mahadasha Calculator"
          description="Check if Saturn Dasha overlaps with Sade Sati (double intensity)"
          icon={<Clock className="w-6 h-6" />}
          href={`/${locale}/tools/mahadasha`}
        />
        <RelatedToolCard
          title="Lagna Calculator"
          description="Understand how Sade Sati affects your approach to life and personality"
          icon={<TrendingUp className="w-6 h-6" />}
          href={`/${locale}/tools/lagna`}
        />
      </div>
    </div>
  );
}
