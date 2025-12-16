'use client';

import Link from 'next/link';
import { Calculator, Star, Clock, Shield, Heart, Gem, Moon, Sun, Sparkles, TrendingUp, Users, Target } from 'lucide-react';
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

interface KundliPostProps {
  locale: string;
}

export default function KundliPost({ locale }: KundliPostProps) {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Ever wondered why some people seem naturally lucky while others struggle? According to Vedic astrology, the answer lies in your birth chart—your <strong className="text-teal-700">Janam Kundali</strong>.
      </p>

      <p className="leading-relaxed">
        Your Kundli is like a cosmic snapshot of the exact moment you took your first breath. It reveals your destiny, personality, strengths, weaknesses, and the cosmic timing of major life events.
      </p>

      <HighlightBox type="important">
        <strong>Did you know?</strong> Your <Link href={`/${locale}/tools/lagna`} className="text-saffron-600 hover:underline">Lagna (Ascendant)</Link> determines how the world sees you, while your <Link href={`/${locale}/tools/moon-sign`} className="text-saffron-600 hover:underline">Moon sign</Link> reveals your true emotional nature. 87% of people don't know their accurate Moon sign, which is why they often make decisions that don't align with their inner self.
      </HighlightBox>

      <InfoCard title="What You'll Learn" variant="teal" icon={<Sparkles className="w-5 h-5" />}>
        <FeatureList
          variant="check"
          items={[
            'What a Kundli actually is (beyond the mystical jargon)',
            'How to read your Kundli in 5 minutes',
            'What each planetary position means for your life',
            'Why accuracy matters (and how our calculator ensures it)',
            'How to use your Kundli for major life decisions',
          ]}
        />
      </InfoCard>

      <SectionDivider />

      {/* Section 1: What is Kundli */}
      <section id="what-is-kundli">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Star className="w-5 h-5" />
          </span>
          What is a Kundli? Understanding Your Cosmic Blueprint
        </h2>

        <p className="leading-relaxed mb-4">
          A <strong className="text-teal-700">Kundli</strong> (also called Janam Kundali, Natal Chart, or Birth Chart) is a 360-degree cosmic map created for the exact moment of your birth. It shows where all 9 celestial bodies were positioned at that precise moment.
        </p>

        <InfoCard title="Think of it like this:" variant="saffron">
          <p>
            You're born on December 15, 1990 at 2:30 PM in Mumbai. At that <em>exact second</em>, the Sun is at a certain degree in Sagittarius, the Moon is in Virgo, Jupiter is influencing your finances from Scorpio... This cosmic configuration becomes your "personality blueprint."
          </p>
        </InfoCard>

        <BlogImage
          src="/images/blog/kundli/section-1.webp"
          alt="The 12 Houses in a Kundli Chart"
          caption="The 12 houses in your Kundli—each governing a specific life area"
        />

        <h3 className="text-xl font-bold text-teal-700 mt-8 mb-4">The 12 Houses: Your Life's Domains</h3>

        <p className="leading-relaxed mb-4">
          Your Kundli is divided into <strong>12 houses</strong>, each ruling a different life area:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-600 text-white text-xs">1</span>
              1st House (Lagna)
            </h4>
            <p className="text-sm text-gray-700">Your personality, appearance & first impressions</p>
          </div>

          <div className="bg-gradient-to-br from-saffron-50 to-orange-100 rounded-xl p-4 border border-saffron-200">
            <h4 className="font-bold text-saffron-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-saffron-600 text-white text-xs">2</span>
              2nd House
            </h4>
            <p className="text-sm text-gray-700">Wealth, family, speech & financial accumulation</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl p-4 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-amber-600 text-white text-xs">5</span>
              5th House
            </h4>
            <p className="text-sm text-gray-700">Creativity, romance, children & intelligence</p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-600 text-white text-xs">7</span>
              7th House
            </h4>
            <p className="text-sm text-gray-700">Marriage, partnerships & business relationships</p>
          </div>

          <div className="bg-gradient-to-br from-saffron-50 to-orange-100 rounded-xl p-4 border border-saffron-200">
            <h4 className="font-bold text-saffron-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-saffron-600 text-white text-xs">10</span>
              10th House
            </h4>
            <p className="text-sm text-gray-700">Career, public life & professional achievements</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl p-4 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-amber-600 text-white text-xs">12</span>
              12th House
            </h4>
            <p className="text-sm text-gray-700">Spirituality, foreign lands & subconscious mind</p>
          </div>
        </div>

        <HighlightBox type="warning">
          <strong>The 4-Minute Rule:</strong> Even a 4-minute difference in birth time shifts your entire chart. Your <Link href={`/${locale}/tools/lagna`} className="text-saffron-600 hover:underline">Lagna</Link> changes every 2 hours, so being off by just 10 minutes can completely change your life prediction. This is why using an accurate Vedic Kundli calculator is crucial.
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 2: How to Generate */}
      <section id="how-to-generate">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Generate Your Free Kundli in 60 Seconds
        </h2>

        <h3 className="text-xl font-bold text-teal-700 mb-4">Step 1: Gather Your Birth Information</h3>

        <p className="leading-relaxed mb-4">You'll need three pieces of data (no guessing allowed):</p>

        <FeatureList
          variant="number"
          items={[
            'Birth Date: Day, Month, Year (e.g., 15 December 1990)',
            'Birth Time: Hour & Minute (e.g., 2:30 PM) — This is most important',
            'Birth Location: City or exact latitude/longitude',
          ]}
        />

        <HighlightBox type="tip">
          Check your birth certificate or ask your parents. Hospital records are gold. If unsure about the exact time, even knowing "morning" vs "evening" helps narrow it down.
        </HighlightBox>

        <h3 className="text-xl font-bold text-teal-700 mt-8 mb-4">Step 2: Use Our Free Calculator</h3>

        {/* CTA Card */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-center text-white my-8 shadow-xl">
          <div className="text-4xl mb-4">✨</div>
          <h3 className="text-2xl font-bold mb-2">Generate Your Free Kundli Now</h3>
          <p className="text-teal-100 mb-6">Enter your birth details and discover your cosmic blueprint in seconds</p>
          <Link
            href={`/${locale}/tools/kundli`}
            className="inline-flex items-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <Calculator className="w-5 h-5" />
            Launch Kundli Generator
          </Link>
        </div>

        <BlogImage
          src="/images/blog/kundli/section-2.webp"
          alt="Kundli Calculation Process"
          caption="Step-by-step process: Birth details → Vedic calculations → Kundli output"
        />

        <h3 className="text-xl font-bold text-teal-700 mt-8 mb-4">What You'll Receive:</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <InfoCard title="Birth Chart Wheel" variant="teal">
            <ul className="space-y-2 text-sm">
              <li>• 12 houses with planetary positions</li>
              <li>• Lagna point marked clearly</li>
              <li>• Color-coded for easy reading</li>
            </ul>
          </InfoCard>

          <InfoCard title="Planetary Table" variant="saffron">
            <ul className="space-y-2 text-sm">
              <li>• Exact degree & minutes</li>
              <li>• <Link href={`/${locale}/blog/nakshatra-birth-star-guide`} className="text-saffron-700 hover:underline">Nakshatra (birth star)</Link> & Pada info</li>
              <li>• Strength indicators</li>
            </ul>
          </InfoCard>

          <InfoCard title="Dasha Periods" variant="amber">
            <ul className="space-y-2 text-sm">
              <li>• Current <Link href={`/${locale}/tools/mahadasha`} className="text-amber-700 hover:underline">Mahadasha</Link> period</li>
              <li>• Duration remaining</li>
              <li>• Period predictions</li>
            </ul>
          </InfoCard>

          <InfoCard title="Doshas & Remedies" variant="highlight">
            <ul className="space-y-2 text-sm">
              <li>• <Link href={`/${locale}/tools/manglik`} className="text-saffron-700 hover:underline">Manglik Dosha</Link> check</li>
              <li>• <Link href={`/${locale}/tools/sade-sati`} className="text-saffron-700 hover:underline">Sade Sati</Link> status</li>
              <li>• <Link href={`/${locale}/tools/gemstone-recommender`} className="text-saffron-700 hover:underline">Gemstone</Link> recommendations</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Reading Your Kundli */}
      <section id="reading-kundli">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Target className="w-5 h-5" />
          </span>
          Reading Your Kundli: A Beginner's Guide
        </h2>

        <p className="leading-relaxed mb-6">
          Understanding your Kundli doesn't require a PhD in astrology. Here's the simplified breakdown:
        </p>

        <h3 className="text-xl font-bold text-teal-700 mb-4">The 4 Key Components</h3>

        <div className="space-y-4">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 flex-shrink-0">
                <Sun className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">1. Your Lagna (Ascendant) — "How The World Sees You"</h4>
                <p className="text-teal-100 text-sm leading-relaxed">
                  The zodiac sign on the eastern horizon at birth. Determines your physical appearance, health, and how others perceive you. Leo Lagna = confident leader. Virgo Lagna = analytical organizer.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-saffron-500 to-orange-500 rounded-xl p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 flex-shrink-0">
                <Moon className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">2. Your <Link href={`/${locale}/tools/moon-sign`} className="underline hover:text-white">Moon Sign (Rashi)</Link> — "Your True Emotional Self"</h4>
                <p className="text-orange-100 text-sm leading-relaxed">
                  Reveals your inner emotional world, what makes you happy, your subconscious patterns, and intuition. Often more accurate for daily horoscopes than Sun sign.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 flex-shrink-0">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">3. Your Sun Sign — "Your Life Purpose & Ego"</h4>
                <p className="text-yellow-100 text-sm leading-relaxed">
                  Shows your core identity, ego, father's influence, authority & power in your chart, and overall vitality & health.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-saffron-500 to-saffron-600 rounded-xl p-6 text-white">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 flex-shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2">4. Your 7th House Lord — "Marriage & Relationships"</h4>
                <p className="text-saffron-100 text-sm leading-relaxed">
                  Indicates your partner's characteristics, marriage timing, compatibility, relationship challenges & blessings. Use our <Link href={`/${locale}/tools/marriage-matching`} className="underline hover:text-white">Marriage Matching</Link> calculator to check compatibility.
                </p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-teal-700 mt-8 mb-4">What Each Planet Represents</h3>

        <ComparisonTable
          headers={['Planet', 'Represents', 'Positive', 'Challenges']}
          rows={[
            ['Sun', 'Power, Authority', 'Leadership, Confidence', 'Ego, Arrogance'],
            ['Moon', 'Mind, Emotions', 'Intuition, Compassion', 'Moodiness'],
            ['Mercury', 'Intelligence', 'Wit, Business skills', 'Overthinking'],
            ['Venus', 'Love, Luxury', 'Charm, Romance', 'Laziness'],
            ['Mars', 'Energy, Courage', 'Drive, Athletics', 'Anger'],
            ['Jupiter', 'Wisdom, Fortune', 'Generosity, Education', 'Over-optimism'],
            ['Saturn', 'Discipline, Karma', 'Hard work, Maturity', 'Delays'],
            ['Rahu', 'Ambition', 'Innovation, Success', 'Obsession'],
            ['Ketu', 'Spirituality', 'Mysticism, Intuition', 'Isolation'],
          ]}
        />
      </section>

      <SectionDivider />

      {/* Section 4: Planetary Meanings */}
      <section id="planetary-meanings">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <TrendingUp className="w-5 h-5" />
          </span>
          Understanding Dasha Timeline
        </h2>

        <p className="leading-relaxed mb-6">
          Your <Link href={`/${locale}/tools/mahadasha`} className="font-bold text-teal-700 hover:text-saffron-600 transition-colors">Dasha</Link> is the cosmic timeline that governs major life events. There are 9 <Link href={`/${locale}/tools/mahadasha`} className="font-bold text-teal-700 hover:text-saffron-600 transition-colors">Mahadasha</Link> periods, each lasting 6-20 years:
        </p>

        <BlogImage
          src="/images/blog/kundli/section-3.webp"
          alt="Dasha Timeline and Planetary Periods"
          caption="Understanding planetary houses, Dasha timeline, and Dosha indicators"
        />

        <div className="grid md:grid-cols-3 gap-4 my-8">
          {[
            { name: 'Ketu', years: 7, desc: 'Spiritual awakening' },
            { name: 'Venus', years: 20, desc: 'Love & luxury' },
            { name: 'Sun', years: 6, desc: 'Power & authority' },
            { name: 'Moon', years: 10, desc: 'Emotional growth' },
            { name: 'Mars', years: 7, desc: 'Energy & courage' },
            { name: 'Rahu', years: 18, desc: 'Ambition & gains' },
            { name: 'Jupiter', years: 16, desc: 'Wisdom & wealth' },
            { name: 'Saturn', years: 19, desc: 'Discipline & karma' },
            { name: 'Mercury', years: 17, desc: 'Intellect & learning' },
          ].map((dasha, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-teal-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-teal-800">{dasha.name}</span>
                <span className="text-xs bg-saffron-100 text-saffron-700 px-2 py-1 rounded-full">{dasha.years} yrs</span>
              </div>
              <p className="text-sm text-gray-600">{dasha.desc}</p>
            </div>
          ))}
        </div>

        <HighlightBox type="note">
          <strong>Why This Matters:</strong> If you're struggling in your Saturn Dasha, it's not bad luck—it's a period of learning and character building. Understanding which Dasha you're in helps you make better decisions aligned with cosmic timing.
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 5: Doshas & Remedies */}
      <section id="doshas-remedies">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Shield className="w-5 h-5" />
          </span>
          Doshas, Remedies & Benefits
        </h2>

        <p className="leading-relaxed mb-6">
          A <strong className="text-teal-700">Dosha</strong> is an astrological affliction in your chart. It doesn't mean your life is ruined—it means you have a challenge to overcome (and often, a hidden gift).
        </p>

        {/* Dosha Cards */}
        <div className="space-y-6">
          {/* Manglik Dosha */}
          <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-orange-500 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">♂</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-saffron-800 text-lg mb-2">
                  <Link href={`/${locale}/tools/manglik`} className="hover:text-teal-600 transition-colors">
                    Manglik Dosha (Mars Affliction)
                  </Link>
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Mars positioned in 1st, 4th, 7th, 8th, or 12th house from Lagna or Moon.
                </p>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-saffron-100">
                  <p className="text-sm"><strong className="text-saffron-700">Effects:</strong> Marriage delays, relationship conflicts</p>
                  <p className="text-sm"><strong className="text-teal-600">Remedies:</strong> Red Coral gemstone, Hanuman Puja on Tuesdays, marry another Manglik</p>
                </div>
                <p className="text-xs text-saffron-600 mt-3 italic font-medium">60-70% of Mangliks find perfect matches. Don't worry!</p>
              </div>
            </div>
          </div>

          {/* Sade Sati */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">♄</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-800 text-lg mb-2">
                  <Link href={`/${locale}/tools/sade-sati`} className="hover:text-saffron-600 transition-colors">
                    Sade Sati (Saturn's 7.5-Year Cycle)
                  </Link>
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  Saturn transits over your natal Moon & Lagna for 7.5 years total.
                </p>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-teal-100">
                  <p className="text-sm"><strong className="text-teal-700">Effects:</strong> Challenges, obstacles, but also maturity & wisdom</p>
                  <p className="text-sm"><strong className="text-saffron-600">Remedies:</strong> Blue Sapphire, Saturn mantra, donations on Saturdays</p>
                </div>
                <p className="text-xs text-teal-600 mt-3 italic font-medium">80% report major positive transformations after Sade Sati!</p>
              </div>
            </div>
          </div>

          {/* Kalsarp Dosha */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-saffron-500 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">🐍</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">
                  <Link href={`/${locale}/tools/kalsarp-dosha`} className="hover:text-saffron-600 transition-colors">
                    Kalsarp Dosha
                  </Link>
                </h3>
                <p className="text-gray-700 text-sm mb-4">
                  All planets positioned between Rahu and Ketu on the axis.
                </p>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-amber-100">
                  <p className="text-sm"><strong className="text-amber-700">Effects:</strong> Delays, obstacles, but also transformation</p>
                  <p className="text-sm"><strong className="text-saffron-600">Remedies:</strong> Kalsarp Puja, Hessonite gemstone, new moon fasting</p>
                </div>
                <p className="text-xs text-amber-600 mt-3 italic font-medium">Many successful entrepreneurs have this dosha!</p>
              </div>
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
          Your Cosmic Journey Begins
        </h2>

        <p className="leading-relaxed mb-6">
          Your <strong className="text-teal-700">Kundli is your cosmic manual</strong>. It tells you who you naturally are, what your life purpose is, when major events will happen, and how to optimize your life path.
        </p>

        <StatsCard
          stats={[
            { label: 'Accuracy', value: '99.9%' },
            { label: 'Users', value: '50K+' },
            { label: 'Based On', value: 'Vedic' },
            { label: 'Cost', value: 'FREE' },
          ]}
        />

        <BlogImage
          src="/images/blog/kundli/conclusion.webp"
          alt="Your Kundli Journey"
          caption="From understanding > discovering > healing > transforming"
        />

        <HighlightBox type="important">
          <strong>Remember:</strong> Your Kundli is not your destiny carved in stone. It's your cosmic blueprint showing tendencies, challenges, and hidden potentials. With awareness, remedies, and conscious living, you can absolutely shape your future.
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Related Tools */}
      <section>
        <h2 className="text-2xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <Calculator className="w-5 h-5" />
          </span>
          Continue Your Astrological Journey
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <RelatedToolCard
            title="Nakshatra Calculator"
            description="Discover your birth star—read our complete Nakshatra guide"
            href={`/${locale}/blog/nakshatra-birth-star-guide`}
            icon={<Star className="w-6 h-6" />}
          />
          <RelatedToolCard
            title="Moon Sign Calculator"
            description="Understand your emotional nature"
            href={`/${locale}/tools/moon-sign`}
            icon={<Moon className="w-6 h-6" />}
          />
          <RelatedToolCard
            title="Mahadasha Calculator"
            description="Know your cosmic timeline"
            href={`/${locale}/tools/mahadasha`}
            icon={<Clock className="w-6 h-6" />}
          />
          <RelatedToolCard
            title="Marriage Matching"
            description="Check compatibility with your partner"
            href={`/${locale}/tools/marriage-matching`}
            icon={<Heart className="w-6 h-6" />}
          />
        </div>
      </section>
    </div>
  );
}
