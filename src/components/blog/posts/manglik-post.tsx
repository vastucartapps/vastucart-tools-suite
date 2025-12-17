'use client';

import Link from 'next/link';
import { Calculator, Heart, Users, AlertTriangle, Shield, Star, Target, Gem, Sparkles, CheckCircle, XCircle } from 'lucide-react';
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

interface ManglikPostProps {
  locale: string;
}

export default function ManglikPost({ locale }: ManglikPostProps) {
  return (
    <div className="space-y-8">
      {/* Opening Warning Box */}
      <HighlightBox type="warning">
        <h4 className="font-bold text-warmaccent-800 mb-2">The Brutal Truth About Manglik Dosha</h4>
        <p className="text-gray-700 text-sm">
          99% of what you've heard is myth. Manglik Dosha IS real and affects marriage—but NOT the way you think.
          It doesn't mean you're cursed, can't marry, or will cause spouse death. It means you need awareness,
          communication, and compatibility. Thousands of Mangliks have happy marriages. Let's separate fact from fear.
        </p>
      </HighlightBox>

      <StatsCard
        stats={[
          { label: 'Affected Population', value: '30-50%' },
          { label: 'Manglik Houses', value: '5' },
          { label: 'Dual-Manglik Success', value: '80-90%' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      {/* Section 1: What Is Manglik Dosha */}
      <section id="what-is-manglik">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <AlertTriangle className="w-5 h-5" />
          </span>
          What Is Manglik Dosha?
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          <strong className="text-deepteal-700">Manglik Dosha (or Mangal Dosha)</strong> is an astrological "affliction" caused by <Link href={`/${locale}/tools/kundli`} className="text-warmaccent-600 hover:underline">Mars being placed in specific houses</Link> in your birth chart. Mars represents courage, passion, conflict, energy, and aggression—the planet of the warrior, bold and direct, sometimes explosive.
        </p>

        <p className="text-gray-700 mb-6 leading-relaxed">
          When Mars is placed in certain houses (1st, 4th, 7th, 8th, 12th), it creates what's called "Manglik Dosha." Think of Mars as a soldier: well-placed Mars is a disciplined protector bringing courage and strength; afflicted Mars (Manglik) is a soldier with anger management issues, bringing conflict to the home.
        </p>

        <BlogImage
          src="/images/blog/manglik/concept.webp"
          alt="Manglik Dosha Concept - Mars in Birth Chart Houses"
          caption="Mars placement in 5 specific houses creates Manglik Dosha: 1st, 4th, 7th, 8th, and 12th houses"
        />

        {/* Mars Houses Impact Table */}
        <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm">
          <h3 className="font-bold text-warmaccent-800 text-lg mb-4 flex items-center gap-2">
            <Target className="w-5 h-5" />
            Why These 5 Houses Create Manglik Dosha
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-warmaccent-200">
                  <th className="text-left p-2 font-bold text-warmaccent-800">House</th>
                  <th className="text-left p-2 font-bold text-warmaccent-800">Governs</th>
                  <th className="text-left p-2 font-bold text-warmaccent-800">Mars Effect</th>
                  <th className="text-left p-2 font-bold text-warmaccent-800">Marriage Impact</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-warmaccent-100">
                  <td className="p-2 font-bold text-deepteal-700">1st (Lagna)</td>
                  <td className="p-2 text-gray-700">Self, personality, approach</td>
                  <td className="p-2 text-gray-700">Aggressive personality</td>
                  <td className="p-2 text-gray-700">Dominant, impatient partner</td>
                </tr>
                <tr className="border-b border-warmaccent-100">
                  <td className="p-2 font-bold text-deepteal-700">4th House</td>
                  <td className="p-2 text-gray-700">Home, mother, comfort, peace</td>
                  <td className="p-2 text-gray-700">Conflict at home</td>
                  <td className="p-2 text-gray-700">Home life turbulent</td>
                </tr>
                <tr className="border-b border-warmaccent-100 bg-warmaccent-100/50">
                  <td className="p-2 font-bold text-warmaccent-700">7th House</td>
                  <td className="p-2 text-gray-700">Marriage, partnerships</td>
                  <td className="p-2 text-gray-700">Marital conflict</td>
                  <td className="p-2 font-bold text-warmaccent-700">STRONGEST MANGLIK</td>
                </tr>
                <tr className="border-b border-warmaccent-100">
                  <td className="p-2 font-bold text-deepteal-700">8th House</td>
                  <td className="p-2 text-gray-700">Longevity, intimacy, secrets</td>
                  <td className="p-2 text-gray-700">Hidden aggression</td>
                  <td className="p-2 text-gray-700">Intimacy struggles, secrecy</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-deepteal-700">12th House</td>
                  <td className="p-2 text-gray-700">Losses, isolation, expenses</td>
                  <td className="p-2 text-gray-700">Expenses, arguments</td>
                  <td className="p-2 text-gray-700">Marriage expenses, isolation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-warmaccent-600 mt-3 italic font-medium">
            Mars in the 7th house creates the most intense Manglik Dosha as it directly impacts marriage
          </p>
        </div>

        <HighlightBox type="note">
          <p className="text-sm text-gray-700">
            <strong className="text-deepteal-700">Reality Check:</strong> "Log kehte hain 'Manglik hai toh shadi nahi hogi.'
            Yeh pure galat hai! Manglik dosha matlab Mars ek alag tarike se placed hai. Married Mangliks hazaaron log hain
            jo bilkul khush hain. Dosha scary lagta hai, par real mein yeh sirf ek warning sign hai."
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
          How to Check If You Have Manglik Dosha
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          The only way to know for sure is to check your actual birth chart. You need your exact birth date, time, and location—precision matters just like <Link href={`/${locale}/tools/lagna`} className="text-warmaccent-600 hover:underline">Lagna calculation</Link>.
        </p>

        {/* Step-by-step checking process */}
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white flex-shrink-0 shadow-md text-lg font-bold">
                1
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-deepteal-800 text-lg mb-2">Generate Birth Chart</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Use our <Link href={`/${locale}/tools/kundli`} className="font-semibold text-deepteal-700 hover:text-warmaccent-600 transition-colors">Kundli Calculator</Link> to generate your complete birth chart with all planetary positions.
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
                <h3 className="font-bold text-warmaccent-800 text-lg mb-2">Locate Mars Position</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Find where Mars is placed: Which zodiac sign? Which house? Is Mars strong or weak in that position?
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
                <h3 className="font-bold text-amber-800 text-lg mb-2">Check Unfavorable Houses</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Mars in <strong>1st, 4th, 7th, 8th, or 12th house</strong> → Manglik Dosha present.
                  Mars in <strong>2nd, 3rd, 5th, 6th, 9th, 10th, 11th</strong> → No Manglik Dosha.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white flex-shrink-0 shadow-md text-lg font-bold">
                4
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-deepteal-800 text-lg mb-2">Verify Strength Level</h3>
                <p className="text-gray-700 text-sm mb-3">
                  Not all Manglik Doshas are equal. Strong Mars (Leo) = Strong dosha. Weak Mars (Libra) = Moderate dosha. Use our <Link href={`/${locale}/tools/manglik`} className="font-semibold text-deepteal-700 hover:text-warmaccent-600 transition-colors">Manglik Calculator</Link> for instant analysis.
                </p>
              </div>
            </div>
          </div>
        </div>

        <RelatedToolCard
          title="Manglik Dosha Calculator"
          description="Get instant Manglik analysis: Yes/No status, strength level, house placement, and personalized marriage guidance"
          icon={<Calculator className="w-6 h-6" />}
          href={`/${locale}/tools/manglik`}
        />
      </section>

      <SectionDivider />

      {/* Section 3: Mars Placement Details */}
      <section id="mars-placement">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Target className="w-5 h-5" />
          </span>
          Mars Placement: Where Manglik Becomes Active
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Here's the complete breakdown of Mars in each Manglik house and its specific implications for your marriage.
        </p>

        {/* Individual Mars placement cards */}
        <div className="space-y-4 mb-6">
          {/* Mars in 1st House */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white flex-shrink-0 shadow-md">
                <span className="text-xl font-bold">1</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-deepteal-800 text-lg mb-2">Mars in 1st House (Lagna)</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-deepteal-100">
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Manglik Status:</strong> YES (Dosha present)</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Effect:</strong> Aggressive, impatient, dominant personality</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Challenge:</strong> Partner may feel overwhelmed by your intensity</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Positive:</strong> Natural protector and initiator</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Marriage Outlook:</strong> Works well with equally strong partner (Fire signs)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mars in 4th House */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-warmaccent-500 to-orange-500 text-white flex-shrink-0 shadow-md">
                <span className="text-xl font-bold">4</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-warmaccent-800 text-lg mb-2">Mars in 4th House</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-warmaccent-100">
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">Manglik Status:</strong> YES (Dosha present)</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">Effect:</strong> Conflict at home, disagreements about family/property</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">Challenge:</strong> Home feels like battleground rather than sanctuary</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">Positive:</strong> You fight for family welfare</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">Marriage Outlook:</strong> Needs calm, diplomatic partner to balance home energy</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mars in 7th House - STRONGEST */}
          <div className="bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl p-6 border-2 border-orange-400 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 text-white flex-shrink-0 shadow-md">
                <span className="text-xl font-bold">7</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-orange-800 text-lg mb-2 flex items-center gap-2">
                  Mars in 7th House
                  <span className="text-xs bg-orange-500 text-white px-2 py-1 rounded-full">STRONGEST MANGLIK</span>
                </h3>
                <div className="bg-white/90 backdrop-blur rounded-xl p-4 space-y-2 border border-orange-200">
                  <p className="text-sm text-gray-700"><strong className="text-orange-700">Manglik Status:</strong> YES - MAXIMUM INTENSITY</p>
                  <p className="text-sm text-gray-700"><strong className="text-orange-700">Effect:</strong> Direct marital conflict, passion turns to arguments</p>
                  <p className="text-sm text-gray-700"><strong className="text-orange-700">Challenge:</strong> Highest rate of marriage discord if incompatible</p>
                  <p className="text-sm text-gray-700"><strong className="text-orange-700">Positive:</strong> Intense passion, strong physical connection</p>
                  <p className="text-sm text-gray-700"><strong className="text-orange-700">Marriage Outlook:</strong> Requires VERY compatible partner; strongly consider dual-Manglik marriage</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mars in 8th House */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                <span className="text-xl font-bold">8</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">Mars in 8th House</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-amber-100">
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Manglik Status:</strong> YES (Dosha present)</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Effect:</strong> Hidden conflicts, secrecy, intimacy issues</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Challenge:</strong> Partner feels you're emotionally unavailable or secretive</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Positive:</strong> Deep, transformative relationships possible</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Marriage Outlook:</strong> Needs trust-building and transparency in partnership</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mars in 12th House */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white flex-shrink-0 shadow-md">
                <span className="text-xl font-bold">12</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-deepteal-800 text-lg mb-2">Mars in 12th House</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-deepteal-100">
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Manglik Status:</strong> YES (Dosha present)</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Effect:</strong> Expenses, losses, feeling distant from partner</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Challenge:</strong> Financial strain, emotional distance in marriage</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Positive:</strong> Spiritual depth, sacrifice for others</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Marriage Outlook:</strong> Works if partner shares spiritual values</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HighlightBox type="tip">
          <p className="text-sm text-gray-700">
            <strong className="text-deepteal-700">Safe Houses:</strong> Mars in 2nd, 3rd, 5th, 6th, 9th, 10th, or 11th house =
            NO Manglik Dosha. In these positions, Mars actually HELPS! For example, Mars in 3rd house gives excellent
            communication skills, and Mars in 6th house provides ability to overcome obstacles.
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 4: Myths vs Reality */}
      <section id="myths-vs-reality">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <AlertTriangle className="w-5 h-5" />
          </span>
          Myths vs Reality: Debunking Manglik Fear
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Let's separate fiction from fact and end the unnecessary panic around Manglik Dosha.
        </p>

        <BlogImage
          src="/images/blog/manglik/comparison.webp"
          alt="Manglik Dosha Myths vs Reality Comparison"
          caption="Debunking the 5 biggest myths about Manglik Dosha with astrological facts"
        />

        {/* Myths cards */}
        <div className="space-y-4 mb-6">
          {/* Myth 1 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex-shrink-0 shadow-md">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-orange-800 text-lg mb-2">Myth #1: "Mangliks can never marry"</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-orange-100">
                  <p className="text-sm text-gray-700 mb-2"><strong className="text-orange-700">Reality:</strong> FALSE. Thousands of Mangliks are happily married.</p>
                  <p className="text-xs text-gray-600 italic">
                    Between 30-50% of people have Manglik Dosha. If none could marry, the world wouldn't exist.
                    This is the most damaging myth spread by fear-mongering.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Myth 2 */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-amber-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-warmaccent-500 to-amber-500 flex-shrink-0 shadow-md">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-warmaccent-800 text-lg mb-2">Myth #2: "Manglik must marry only another Manglik"</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-warmaccent-100">
                  <p className="text-sm text-gray-700 mb-2"><strong className="text-warmaccent-700">Reality:</strong> PARTIALLY TRUE, but not absolute.</p>
                  <p className="text-xs text-gray-600 italic">
                    Manglik CAN marry non-Manglik successfully if Venus/Moon compatibility is strong, both have emotional maturity,
                    and communication is prioritized. Dual-Manglik marriages do work better (80-90% success), but mixed marriages
                    succeed 60-70% of the time with effort.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Myth 3 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex-shrink-0 shadow-md">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-orange-800 text-lg mb-2">Myth #3: "Manglik brings death to spouse"</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-orange-100">
                  <p className="text-sm text-gray-700 mb-2"><strong className="text-orange-700">Reality:</strong> FALSE. Completely invented fear.</p>
                  <p className="text-xs text-gray-600 italic">
                    Manglik Dosha causes conflict tendency, NOT death. No authentic Vedic text predicts spouse death from Manglik.
                    This myth was created by astrologers selling expensive remedies and superstition passed without verification.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Myth 4 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex-shrink-0 shadow-md">
                <XCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-orange-800 text-lg mb-2">Myth #4: "Manglik needs expensive rituals/remedies"</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-orange-100">
                  <p className="text-sm text-gray-700 mb-2"><strong className="text-orange-700">Reality:</strong> MISLEADING. Expensive rituals are unnecessary.</p>
                  <p className="text-xs text-gray-600 italic">
                    Effective remedies are simple and affordable: Red Coral (₹500-1000), Hanuman Puja (free), marrying compatible
                    partner (FREE), conscious communication (FREE). Don't fall for ₹50,000+ rituals.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Myth 5 */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-amber-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-warmaccent-500 to-amber-500 flex-shrink-0 shadow-md">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-warmaccent-800 text-lg mb-2">Myth #5: "Manglik is a curse from past life"</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-warmaccent-100">
                  <p className="text-sm text-gray-700 mb-2"><strong className="text-warmaccent-700">Reality:</strong> SIMPLISTIC. Not a curse, just planetary influence.</p>
                  <p className="text-xs text-gray-600 italic">
                    Your birth chart is your karmic setup. Manglik Dosha is a learning opportunity about control, passion, and
                    communication. It's not punishment—it's your chart saying "Work on this area for growth."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Marriage Impact & Compatibility */}
      <section id="marriage-impact">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-deepteal-100 text-deepteal-600">
            <Heart className="w-5 h-5" />
          </span>
          Marriage Impact & Compatibility
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Here's the real, practical impact of Manglik Dosha on marriage—both Manglik+Non-Manglik and Manglik+Manglik combinations.
        </p>

        <BlogImage
          src="/images/blog/manglik/guide.webp"
          alt="Manglik Marriage Compatibility Guide"
          caption="Complete compatibility analysis: Manglik + Non-Manglik vs Dual-Manglik marriages"
        />

        {/* Manglik + Non-Manglik */}
        <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm mb-6">
          <h3 className="font-bold text-warmaccent-800 text-xl mb-4 flex items-center gap-2">
            <Users className="w-6 h-6" />
            Manglik + Non-Manglik Marriage
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-warmaccent-200">
                  <th className="text-left p-2 font-bold text-warmaccent-800">Factor</th>
                  <th className="text-left p-2 font-bold text-warmaccent-800">Impact</th>
                  <th className="text-left p-2 font-bold text-warmaccent-800">Success Rate / Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-warmaccent-100">
                  <td className="p-2 font-bold text-deepteal-700">Conflict Level</td>
                  <td className="p-2 text-gray-700">Higher than average</td>
                  <td className="p-2 text-gray-700">Requires extra communication</td>
                </tr>
                <tr className="border-b border-warmaccent-100">
                  <td className="p-2 font-bold text-deepteal-700">Passion</td>
                  <td className="p-2 text-gray-700">Very high</td>
                  <td className="p-2 text-gray-700">Can be positive or explosive</td>
                </tr>
                <tr className="border-b border-warmaccent-100">
                  <td className="p-2 font-bold text-deepteal-700">Compatibility</td>
                  <td className="p-2 text-gray-700">Depends on other factors</td>
                  <td className="p-2 font-bold text-warmaccent-700">60-70% success with effort</td>
                </tr>
                <tr className="border-b border-warmaccent-100">
                  <td className="p-2 font-bold text-deepteal-700">What Works</td>
                  <td className="p-2 text-gray-700">Mutual respect, patience</td>
                  <td className="p-2 text-gray-700">Both partners committed</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-deepteal-700">Red Flags</td>
                  <td className="p-2 text-gray-700">Anger issues, dominance</td>
                  <td className="p-2 text-gray-700">Need pre-marriage counseling</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-white/80 backdrop-blur rounded-xl p-4 border border-warmaccent-100">
            <p className="text-sm text-gray-700 mb-2"><strong className="text-warmaccent-700">Success Formula:</strong></p>
            <FeatureList
              items={[
                'Strong Moon/Venus compatibility between charts',
                'Non-Manglik partner has strong, stable chart',
                'Both acknowledge Manglik tendency openly',
                'Both commit to conscious communication practice',
                'Pre-marriage counseling (even non-astrological)',
              ]}
              variant="check"
            />
          </div>
        </div>

        {/* Manglik + Manglik */}
        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border-2 border-deepteal-400 shadow-md mb-6">
          <h3 className="font-bold text-deepteal-800 text-xl mb-4 flex items-center gap-2">
            <Heart className="w-6 h-6" />
            Manglik + Manglik Marriage (Dual-Manglik)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-deepteal-200">
                  <th className="text-left p-2 font-bold text-deepteal-800">Factor</th>
                  <th className="text-left p-2 font-bold text-deepteal-800">Impact</th>
                  <th className="text-left p-2 font-bold text-deepteal-800">Success Rate / Notes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-deepteal-100">
                  <td className="p-2 font-bold text-deepteal-700">Conflict Level</td>
                  <td className="p-2 text-gray-700">Both understand Mars energy</td>
                  <td className="p-2 text-gray-700">Natural balance</td>
                </tr>
                <tr className="border-b border-deepteal-100">
                  <td className="p-2 font-bold text-deepteal-700">Passion</td>
                  <td className="p-2 text-gray-700">VERY high</td>
                  <td className="p-2 text-gray-700">Both handle intensity well</td>
                </tr>
                <tr className="border-b border-deepteal-100 bg-deepteal-100/50">
                  <td className="p-2 font-bold text-deepteal-700">Compatibility</td>
                  <td className="p-2 text-gray-700">Excellent for Mars balance</td>
                  <td className="p-2 font-bold text-deepteal-700">80-90% success rate ✨</td>
                </tr>
                <tr className="border-b border-deepteal-100">
                  <td className="p-2 font-bold text-deepteal-700">What Works</td>
                  <td className="p-2 text-gray-700">Matched energy, no judgment</td>
                  <td className="p-2 text-gray-700">Both Mars-driven naturally</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-deepteal-700">Challenge</td>
                  <td className="p-2 text-gray-700">Can become too fiery</td>
                  <td className="p-2 text-gray-700">Need calm family support</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 bg-white/80 backdrop-blur rounded-xl p-4 border border-deepteal-100">
            <p className="text-sm text-gray-700 mb-2"><strong className="text-deepteal-700">Why Dual-Manglik Works So Well:</strong></p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-deepteal-600 flex-shrink-0 mt-0.5" />
                <span>Both partners have Mars-driven personalities—neither feels judged</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-deepteal-600 flex-shrink-0 mt-0.5" />
                <span>They understand each other's aggression and intensity naturally</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-deepteal-600 flex-shrink-0 mt-0.5" />
                <span>Passion doesn't translate to conflict because both accept it</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-4 h-4 text-deepteal-600 flex-shrink-0 mt-0.5" />
                <span>Statistically, dual-Manglik marriages have higher success than mixed</span>
              </li>
            </ul>
          </div>
        </div>

        <RelatedToolCard
          title="Marriage Matching Calculator"
          description="Check Nakshatra Milan (Guna Milan) compatibility with your partner—essential for Manglik marriages"
          icon={<Heart className="w-6 h-6" />}
          href={`/${locale}/tools/marriage-matching`}
        />
      </section>

      <SectionDivider />

      {/* Section 6: Remedies */}
      <section id="remedies">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Shield className="w-5 h-5" />
          </span>
          Manglik Remedies That Actually Work
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Not all remedies are equal. Here's what genuinely helps—from gemstones to conscious communication—ranked by effectiveness.
        </p>

        <BlogImage
          src="/images/blog/manglik/remedy.webp"
          alt="Manglik Dosha Remedies and Solutions"
          caption="5 proven Manglik remedies: Red Coral, Hanuman Puja, compatibility matching, conscious communication, and charitable actions"
        />

        {/* Top 5 Remedies */}
        <div className="space-y-4 mb-6">
          {/* Remedy 1: Red Coral */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-warmaccent-500 to-orange-500 text-white flex-shrink-0 shadow-md">
                <Gem className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-warmaccent-800 text-lg mb-2">Remedy #1: Wear Red Coral (Moonga)</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-warmaccent-100">
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">How it helps:</strong> Strengthens Mars, channels energy constructively</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">Cost:</strong> ₹500-5,000 (affordable)</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">How to wear:</strong> Copper/gold ring on right hand ring finger, Tuesday, with mantra "Om Kram Kreem Kraum Sah Bhaumaya Namah" (108 times)</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">Effectiveness:</strong> Moderate to high (50-70% of people)</p>
                  <p className="text-xs text-warmaccent-600 italic mt-2">⚠️ Consult astrologer before wearing—not suitable for everyone</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 2: Hanuman Puja */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">Remedy #2: Perform Hanuman Puja (Tuesday)</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-amber-100">
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">How it helps:</strong> Hanuman is Mars-ruled deity; channels Mars into protection</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Cost:</strong> FREE (any temple)</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">How to do:</strong> Visit Hanuman temple on Tuesday, light ghee lamp, offer flowers, chant Hanuman Chalisa (40 times)</p>
                  <p className="text-sm text-gray-700"><strong className="text-amber-700">Effectiveness:</strong> High (works through devotion + consistency)</p>
                  <p className="text-xs text-amber-600 italic mt-2">✨ Best practice: Do weekly for 40 days for maximum effect</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 3: Compatible Partner - BEST */}
          <div className="bg-gradient-to-br from-deepteal-100 to-deepteal-200 rounded-2xl p-6 border-2 border-deepteal-400 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white flex-shrink-0 shadow-md">
                <Heart className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-deepteal-800 text-lg mb-2 flex items-center gap-2">
                  Remedy #3: Marry a Compatible Partner
                  <span className="text-xs bg-deepteal-500 text-white px-2 py-1 rounded-full">MOST EFFECTIVE</span>
                </h3>
                <div className="bg-white/90 backdrop-blur rounded-xl p-4 space-y-2 border border-deepteal-200">
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">How it helps:</strong> Compatibility IS the remedy; shared chart patterns reduce conflict</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Cost:</strong> FREE</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">What to check:</strong> Partner's Venus/Moon compatibility, <Link href={`/${locale}/tools/marriage-matching`} className="text-warmaccent-600 hover:underline">Marriage Matching</Link>, 7th house compatibility</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Effectiveness:</strong> HIGHEST (addresses root cause directly)</p>
                  <p className="text-xs text-deepteal-600 font-bold mt-2">⭐ This is the BEST remedy—better than any gemstone or ritual</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 4: Conscious Communication */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-amber-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-warmaccent-500 to-amber-500 text-white flex-shrink-0 shadow-md">
                <Users className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-warmaccent-800 text-lg mb-2">Remedy #4: Conscious Communication in Marriage</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-warmaccent-100">
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">How it helps:</strong> Mars = conflict tendency; awareness prevents manifestation</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">Cost:</strong> FREE</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">What to practice:</strong> Daily check-ins, express anger before it builds, listen without judgment, use "I feel" statements, weekly relationship reflection</p>
                  <p className="text-sm text-gray-700"><strong className="text-warmaccent-700">Effectiveness:</strong> HIGHEST (psychological + astrological)</p>
                  <p className="text-xs text-warmaccent-600 italic mt-2">💡 Awareness + communication fixes Manglik better than expensive rituals</p>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 5: Donations */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white flex-shrink-0 shadow-md">
                <Sparkles className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-deepteal-800 text-lg mb-2">Remedy #5: Donate Red Items on Tuesdays</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-deepteal-100">
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">How it helps:</strong> Donation channels Mars energy toward charity/positive action</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Cost:</strong> FREE to minimal</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">What to donate:</strong> Red cloth, red flowers, red lentils (masoor dal), turmeric</p>
                  <p className="text-sm text-gray-700"><strong className="text-deepteal-700">Effectiveness:</strong> Moderate (works through karma adjustment)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <HighlightBox type="important">
          <p className="text-sm text-gray-700">
            <strong className="text-deepteal-700">The Truth:</strong> Don't fall for astrologers selling ₹50,000+ rituals.
            The most effective remedies are FREE: choosing a compatible partner and practicing conscious communication.
            These address the root cause better than any gemstone or expensive puja.
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
          Your Manglik Marriage Is Possible
        </h2>

        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-8 border-2 border-deepteal-300 shadow-lg mb-6">
          <h3 className="font-bold text-deepteal-800 text-xl mb-4">Here's What We Know for Certain:</h3>
          <FeatureList
            items={[
              'Manglik Dosha is real—Mars in certain houses creates conflict tendency',
              "It's NOT a curse or death sentence for your marriage",
              'Thousands of Mangliks have happy, successful marriages',
              'Compatibility, communication, and awareness matter MORE than remedies',
              'Dual-Manglik marriages often work beautifully (80-90% success)',
              'Simple remedies (Red Coral, Hanuman Puja) help when combined with action',
            ]}
            variant="check"
          />
        </div>

        <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-8 border-2 border-warmaccent-300 shadow-lg mb-6">
          <h3 className="font-bold text-warmaccent-800 text-xl mb-4">What Actually Prevents Manglik Marriage Problems:</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-warmaccent-100">
              <p className="text-sm font-semibold text-warmaccent-700 mb-1">✓ Choosing compatible partner</p>
              <p className="text-xs text-gray-600">Check Venus/Moon compatibility and <Link href={`/${locale}/tools/marriage-matching`} className="text-warmaccent-600 hover:underline">Marriage Matching</Link></p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-warmaccent-100">
              <p className="text-sm font-semibold text-warmaccent-700 mb-1">✓ Emotional maturity</p>
              <p className="text-xs text-gray-600">Both partners handle conflict consciously</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-warmaccent-100">
              <p className="text-sm font-semibold text-warmaccent-700 mb-1">✓ Communication practice</p>
              <p className="text-xs text-gray-600">Daily check-ins, express feelings early</p>
            </div>
            <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-warmaccent-100">
              <p className="text-sm font-semibold text-warmaccent-700 mb-1">✓ Mars awareness</p>
              <p className="text-xs text-gray-600">Understand your intensity tendency</p>
            </div>
          </div>
        </div>

        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Your Manglik Dosha doesn't predict your marriage's fate. <strong className="text-deepteal-700">Your choices do.</strong>
        </p>

        <p className="text-gray-700 text-lg leading-relaxed">
          Your Manglik Dosha is not your destiny—it's just information. Use it to understand yourself better, choose your
          partner consciously using <Link href={`/${locale}/tools/kundli`} className="text-warmaccent-600 hover:underline">Kundli analysis</Link>,
          and commit to communication. That's the real remedy. <strong className="text-deepteal-700">Your marriage is possible.
          Go make it happen.</strong>
        </p>
      </section>

      {/* Related Tools */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <RelatedToolCard
          title="Kundli Generator"
          description="See Mars position in your complete birth chart and understand all planetary influences"
          icon={<Calculator className="w-6 h-6" />}
          href={`/${locale}/tools/kundli`}
        />
        <RelatedToolCard
          title="Marriage Matching"
          description="Check Nakshatra Milan (Guna Milan) compatibility with your partner"
          icon={<Heart className="w-6 h-6" />}
          href={`/${locale}/tools/marriage-matching`}
        />
        <RelatedToolCard
          title="Lagna Calculator"
          description="Understand how your ascendant influences relationship dynamics"
          icon={<Target className="w-6 h-6" />}
          href={`/${locale}/tools/lagna`}
        />
        <RelatedToolCard
          title="Mahadasha Calculator"
          description="Check your current life period—affects marriage timing significantly"
          icon={<Star className="w-6 h-6" />}
          href={`/${locale}/tools/mahadasha`}
        />
      </div>
    </div>
  );
}
