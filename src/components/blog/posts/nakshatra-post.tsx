'use client';

import Link from 'next/link';
import { Calculator, Star, Moon, Sun, Sparkles, Heart, Gem, Users, Target, Book, Clock, Shield, TrendingUp, Compass } from 'lucide-react';
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

interface NakshatraPostProps {
  locale: string;
}

export default function NakshatraPost({ locale }: NakshatraPostProps) {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Ever noticed how two people born on the same day can have completely different personalities? The secret isn't in your Sun sign—it's in your <strong className="text-teal-700">Nakshatra</strong> (birth star).
      </p>

      <p className="leading-relaxed">
        While most Western astrology focuses on your birth date alone, Vedic astrology goes deeper. Your Nakshatra is the lunar mansion where the Moon was positioned at your exact birth moment. It's like your cosmic DNA—the hidden blueprint of your personality, talents, and life path.
      </p>

      <HighlightBox type="important">
        <strong>Eye-Opening Fact:</strong> There are exactly 27 Nakshatras in Vedic astrology, each with distinct characteristics. <strong>Ashwini Nakshatra</strong> people are natural healers and innovators. <strong>Bharani</strong> people are passionate transformers. <strong>Kritika</strong> people are sharp-minded leaders. Yet most of us live our entire lives not knowing which Nakshatra we belong to!
      </HighlightBox>

      <InfoCard title="What You'll Discover" variant="teal" icon={<Sparkles className="w-5 h-5" />}>
        <FeatureList
          variant="check"
          items={[
            'What your Nakshatra actually means (beyond the mystical descriptions)',
            'All 27 Nakshatras explained with personality profiles',
            'Your compatibility with other Nakshatras',
            'Career & life path predictions based on your birth star',
            'Remedies & gemstones specific to your Nakshatra',
            'How to calculate your Nakshatra instantly',
          ]}
        />
      </InfoCard>

      <StatsCard
        stats={[
          { label: 'Nakshatras', value: '27' },
          { label: 'Accuracy', value: '90%+' },
          { label: 'Based On', value: 'Vedic' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      <SectionDivider />

      {/* Section 1: What is Nakshatra */}
      <section id="what-is-nakshatra">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Star className="w-5 h-5" />
          </span>
          What is a Nakshatra? The Lunar Blueprint
        </h2>

        <p className="leading-relaxed mb-4">
          A <strong className="text-teal-700">Nakshatra</strong> (also spelled Nakshetra) is a lunar mansion or "birth star" in Vedic astrology. Think of the zodiac as a circle, and that circle is divided into <strong>27 equal segments</strong>. Each segment is one Nakshatra, and each Nakshatra is connected to one star or star cluster visible from Earth.
        </p>

        <p className="leading-relaxed mb-4">
          Your Nakshatra is determined by the <strong>exact position of the Moon at your birth moment</strong>. Unlike your Sun sign (which repeats every 12 months) or your <Link href={`/${locale}/tools/lagna`} className="text-saffron-600 hover:underline">Lagna</Link> (which changes every 2 hours), your Nakshatra is incredibly specific—it provides a detailed personality map unique to your birth.
        </p>

        <InfoCard title="The Ancient Science Behind Nakshatras" variant="saffron">
          <p className="mb-3">
            Vedic astrology is based on the <strong>sidereal zodiac</strong>—the actual positions of stars as they appear in the sky. Modern Western astrology uses the <strong>tropical zodiac</strong>—based on seasons.
          </p>
          <p>
            This is why Western "December 25 Capricorn" might actually be a Sagittarius in Vedic astrology. <strong>Result?</strong> Vedic predictions using Nakshatras are vastly more accurate because they're based on actual cosmic positions, not seasonal approximations.
          </p>
        </InfoCard>

<BlogImage
          src="/images/blog/nakshatra/section-1.webp"
          alt="The 27 Nakshatras in the Zodiac"
          caption="The 27 Nakshatras divided across the zodiac—each governing unique traits"
        />

        <h3 className="text-xl font-bold text-teal-700 mt-8 mb-4">Why Your Nakshatra Matters More Than You Think</h3>

        <ComparisonTable
          headers={['Aspect', 'Sun Sign (Western)', 'Nakshatra (Vedic)']}
          rows={[
            ['Frequency', 'Changes once yearly', 'Stays with you for life'],
            ['Accuracy', '~30% accurate', '~90% accurate'],
            ['Revelation', 'General tendencies', 'Specific personality blueprint'],
            ['Timing', 'Broad predictions', 'Precise event timing'],
            ['Remedies', 'Generic', 'Customized to your star'],
            ['Career Guidance', 'Vague', 'Specific talent identification'],
          ]}
        />

        <HighlightBox type="tip">
          <strong>Example:</strong> Two Capricorns born on December 25, 2000—one at 8 AM in Delhi, one at 8 PM in Mumbai. Their Sun sign is identical, but their Nakshatras are completely different. One might be Ashwini (pioneering healer), the other Kritika (sharp leader). Their personalities, talents, and destinies are poles apart.
        </HighlightBox>

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 my-6">
          <h4 className="font-bold text-amber-800 mb-3">🗣️ Hinglish Insight:</h4>
          <p className="text-gray-700 italic text-sm leading-relaxed">
            "Zyada tar log kehte hain 'Mera zodiac sign yeh hai,' lekin apna Nakshatra nahi jaante. Yeh bilkul galat hai! Nakshatra hi tumhara sach personality batata hai, zodiac sign nahi. Isliye Nakshatra calculator se poora sach jaanna zaroori hai."
          </p>
          <p className="text-gray-600 text-xs mt-2">
            (Translation: "Most people say 'My zodiac sign is this,' but don't know their Nakshatra. That's completely wrong! Your Nakshatra reveals your true personality, not your zodiac sign.")
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: How to Calculate */}
      <section id="how-to-calculate">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Calculate Your Nakshatra
        </h2>

        <p className="leading-relaxed mb-4">
          Calculating your Nakshatra is surprisingly simple (though the math behind it is complex).
        </p>

        <h3 className="text-xl font-bold text-teal-700 mb-4">Step 1: Gather Your Birth Details</h3>

        <p className="leading-relaxed mb-4">To calculate your exact Nakshatra, you need:</p>

        <FeatureList
          variant="number"
          items={[
            'Birth Date: Day, Month, Year (e.g., 15 December 1990)',
            'Birth Time: Hour & Minute (crucial for Moon position accuracy)',
            'Birth Location: City or GPS coordinates',
          ]}
        />

        <HighlightBox type="warning">
          <strong>Important:</strong> Your birth time must be as accurate as possible. Even a 20-minute difference can shift your Nakshatra slightly. Check your birth certificate or hospital records.
        </HighlightBox>

        <h3 className="text-xl font-bold text-teal-700 mt-8 mb-4">Step 2: Use Our Free Nakshatra Calculator</h3>

        {/* CTA Card */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-center text-white my-8 shadow-xl">
          <div className="text-4xl mb-4">✨</div>
          <h3 className="text-2xl font-bold mb-2">Calculate Your Nakshatra Now</h3>
          <p className="text-teal-100 mb-6">Enter your birth details to instantly discover your birth star and cosmic blueprint</p>
          <Link
            href={`/${locale}/tools/nakshatra`}
            className="inline-flex items-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <Calculator className="w-5 h-5" />
            Launch Nakshatra Calculator
          </Link>
        </div>

        <p className="leading-relaxed mb-4">Once you enter your details, our calculator will:</p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200">
            <div className="flex items-center gap-2 mb-2">
              <Moon className="w-5 h-5 text-teal-600" />
              <span className="font-bold text-teal-800">Moon Position</span>
            </div>
            <p className="text-sm text-gray-700">Calculate your exact Moon position at birth using Vedic ephemeris data</p>
          </div>

          <div className="bg-gradient-to-br from-saffron-50 to-orange-100 rounded-xl p-4 border border-saffron-200">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-saffron-600" />
              <span className="font-bold text-saffron-800">Nakshatra ID</span>
            </div>
            <p className="text-sm text-gray-700">Identify which of the 27 Nakshatras the Moon occupies</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl p-4 border border-amber-200">
            <div className="flex items-center gap-2 mb-2">
              <Sun className="w-5 h-5 text-amber-600" />
              <span className="font-bold text-amber-800">Nakshatra Lord</span>
            </div>
            <p className="text-sm text-gray-700">Determine your Nakshatra's ruling planet</p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-5 h-5 text-teal-600" />
              <span className="font-bold text-teal-800">Pada Details</span>
            </div>
            <p className="text-sm text-gray-700">Show your Nakshatra's Pada (sub-division) for deeper insights</p>
          </div>
        </div>

{/* Quick Process Flow Visual */}
        <div className="bg-gradient-to-r from-saffron-50 via-amber-50 to-saffron-50 rounded-2xl p-6 border border-saffron-200 shadow-sm my-6">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="bg-white rounded-xl p-3 border-2 border-teal-400">
              <div className="text-center">
                <div className="text-2xl mb-1">📅</div>
                <div className="font-bold text-teal-700 text-xs">Birth Data</div>
              </div>
            </div>
            <div className="text-saffron-600 text-xl">→</div>
            <div className="bg-white rounded-xl p-3 border-2 border-saffron-400">
              <div className="text-center">
                <div className="text-2xl mb-1">🌙</div>
                <div className="font-bold text-saffron-700 text-xs">Moon Position</div>
              </div>
            </div>
            <div className="text-saffron-600 text-xl">→</div>
            <div className="bg-white rounded-xl p-3 border-2 border-amber-400">
              <div className="text-center">
                <div className="text-2xl mb-1">⭐</div>
                <div className="font-bold text-amber-700 text-xs">Your Nakshatra</div>
              </div>
            </div>
          </div>
        </div>

        <BlogImage
          src="/images/blog/nakshatra/section-2.webp"
          alt="Nakshatra Calculation Process"
          caption="Step-by-step: Birth data → Moon position → Nakshatra identification"
        />

        <h3 className="text-xl font-bold text-teal-700 mt-8 mb-4">Step 3: Understand Your Nakshatra Report</h3>

        <div className="space-y-4">
          <InfoCard title="A. Your Birth Star Name" variant="teal">
            <ul className="space-y-2 text-sm">
              <li>• One of the 27 Nakshatras (e.g., Ashwini, Bharani, Kritika, etc.)</li>
              <li>• Your Nakshatra's ruling planet</li>
              <li>• Your Nakshatra's presiding deity</li>
            </ul>
          </InfoCard>

          <InfoCard title="B. Your Pada (Sub-Section)" variant="saffron">
            <ul className="space-y-2 text-sm">
              <li>• Each Nakshatra has 4 quarters (Padas)</li>
              <li>• Your specific Pada gives additional personality nuances</li>
              <li>• Example: "Ashwini Pada 2" has different traits than "Ashwini Pada 3"</li>
            </ul>
          </InfoCard>

          <InfoCard title="C. Personality Traits" variant="amber">
            <ul className="space-y-2 text-sm">
              <li>• Your natural talents & strengths</li>
              <li>• Potential challenges & growth areas</li>
              <li>• Ideal career paths for your Nakshatra</li>
              <li>• Compatible partner Nakshatras</li>
            </ul>
          </InfoCard>

          <InfoCard title="D. Nakshatra-Specific Remedies" variant="highlight">
            <ul className="space-y-2 text-sm">
              <li>• Recommended <Link href={`/${locale}/tools/gemstone-recommender`} className="text-saffron-700 hover:underline">gemstone</Link> for your Nakshatra</li>
              <li>• Mantra to strengthen your Nakshatra's influence</li>
              <li>• Auspicious days/colors for your star</li>
              <li>• Rituals & practices for your Nakshatra</li>
            </ul>
          </InfoCard>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: All 27 Nakshatras */}
      <section id="27-nakshatras">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Book className="w-5 h-5" />
          </span>
          All 27 Nakshatras: Complete Reference Guide
        </h2>

        <p className="leading-relaxed mb-6">
          Here are all 27 birth stars with brief profiles. Find yours and see how accurately it describes you:
        </p>

        {/* Group 1 */}
        <h3 className="text-xl font-bold text-teal-700 mb-4">Group 1: Ashwini to Mrigashirsha (Aries-Gemini)</h3>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Nakshatra</th>
                <th className="px-4 py-3 text-left">Ruling Planet</th>
                <th className="px-4 py-3 text-left">Meaning</th>
                <th className="px-4 py-3 text-left">Core Trait</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3 font-bold text-teal-600">1</td>
                <td className="px-4 py-3 font-bold">Ashwini</td>
                <td className="px-4 py-3">Ketu</td>
                <td className="px-4 py-3">Horsemen/Healers</td>
                <td className="px-4 py-3">Pioneering, Quick, Healer</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3 font-bold text-teal-600">2</td>
                <td className="px-4 py-3 font-bold">Bharani</td>
                <td className="px-4 py-3">Venus</td>
                <td className="px-4 py-3">Bearers</td>
                <td className="px-4 py-3">Transformative, Passionate</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3 font-bold text-teal-600">3</td>
                <td className="px-4 py-3 font-bold">Kritika</td>
                <td className="px-4 py-3">Sun</td>
                <td className="px-4 py-3">The Cutter</td>
                <td className="px-4 py-3">Sharp-minded, Leader</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3 font-bold text-teal-600">4</td>
                <td className="px-4 py-3 font-bold">Rohini</td>
                <td className="px-4 py-3">Moon</td>
                <td className="px-4 py-3">The Reddish</td>
                <td className="px-4 py-3">Attractive, Sensual, Stable</td>
              </tr>
              <tr className="hover:bg-teal-50">
                <td className="px-4 py-3 font-bold text-teal-600">5</td>
                <td className="px-4 py-3 font-bold">Mrigashirsha</td>
                <td className="px-4 py-3">Mercury</td>
                <td className="px-4 py-3">Deer's Head</td>
                <td className="px-4 py-3">Curious, Quick-learner</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Group 2 */}
        <h3 className="text-xl font-bold text-saffron-700 mb-4">Group 2: Ardra to Pushya (Gemini-Cancer)</h3>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-saffron-500 to-saffron-600 text-white">
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Nakshatra</th>
                <th className="px-4 py-3 text-left">Ruling Planet</th>
                <th className="px-4 py-3 text-left">Meaning</th>
                <th className="px-4 py-3 text-left">Core Trait</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100 hover:bg-saffron-50">
                <td className="px-4 py-3 font-bold text-saffron-600">6</td>
                <td className="px-4 py-3 font-bold">Ardra</td>
                <td className="px-4 py-3">Rahu</td>
                <td className="px-4 py-3">The Moist</td>
                <td className="px-4 py-3">Intense, Stormy, Intellectual</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-saffron-50">
                <td className="px-4 py-3 font-bold text-saffron-600">7</td>
                <td className="px-4 py-3 font-bold">Punarvasu</td>
                <td className="px-4 py-3">Jupiter</td>
                <td className="px-4 py-3">Renewal</td>
                <td className="px-4 py-3">Adaptable, Generous, Fortunate</td>
              </tr>
              <tr className="hover:bg-saffron-50">
                <td className="px-4 py-3 font-bold text-saffron-600">8</td>
                <td className="px-4 py-3 font-bold">Pushya</td>
                <td className="px-4 py-3">Saturn</td>
                <td className="px-4 py-3">Nourisher</td>
                <td className="px-4 py-3">Spiritual, Protective, Wise</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Group 3 */}
        <h3 className="text-xl font-bold text-amber-700 mb-4">Group 3: Ashlesha to Magha (Cancer-Leo)</h3>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                <th className="px-4 py-3 text-left">#</th>
                <th className="px-4 py-3 text-left">Nakshatra</th>
                <th className="px-4 py-3 text-left">Ruling Planet</th>
                <th className="px-4 py-3 text-left">Meaning</th>
                <th className="px-4 py-3 text-left">Core Trait</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100 hover:bg-amber-50">
                <td className="px-4 py-3 font-bold text-amber-600">9</td>
                <td className="px-4 py-3 font-bold">Ashlesha</td>
                <td className="px-4 py-3">Mercury</td>
                <td className="px-4 py-3">The Coiled</td>
                <td className="px-4 py-3">Secretive, Strategic</td>
              </tr>
              <tr className="hover:bg-amber-50">
                <td className="px-4 py-3 font-bold text-amber-600">10</td>
                <td className="px-4 py-3 font-bold">Magha</td>
                <td className="px-4 py-3">Ketu</td>
                <td className="px-4 py-3">The Great</td>
                <td className="px-4 py-3">Authoritative, Traditional</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Group 4-8: Condensed for space */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 mb-6">
          <h4 className="font-bold text-teal-800 mb-4">Remaining Nakshatras (11-27)</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="font-semibold text-teal-700 mb-2">Group 4: Leo-Virgo</p>
              <ul className="space-y-1 text-gray-700">
                <li>11. <strong>Purva Phalguni</strong> (Venus) - Creative, Entertaining</li>
                <li>12. <strong>Uttara Phalguni</strong> (Sun) - Responsible, Loyal</li>
                <li>13. <strong>Hasta</strong> (Moon) - Skillful, Dexterous</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-teal-700 mb-2">Group 5: Virgo-Scorpio</p>
              <ul className="space-y-1 text-gray-700">
                <li>14. <strong>Chitra</strong> (Mars) - Perfectionist, Creative</li>
                <li>15. <strong>Swati</strong> (Rahu) - Independent, Ethical</li>
                <li>16. <strong>Vishakha</strong> (Jupiter) - Ambitious, Determined</li>
                <li>17. <strong>Anuradha</strong> (Saturn) - Dedicated, Protective</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-saffron-700 mb-2">Group 6: Scorpio-Sagittarius</p>
              <ul className="space-y-1 text-gray-700">
                <li>18. <strong>Jyeshtha</strong> (Mercury) - Authoritative, Courageous</li>
                <li>19. <strong>Mula</strong> (Ketu) - Spiritual, Truth-seeker</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-saffron-700 mb-2">Group 7: Sagittarius-Capricorn</p>
              <ul className="space-y-1 text-gray-700">
                <li>20. <strong>Purvashadha</strong> (Venus) - Popular, Brave</li>
                <li>21. <strong>Uttarashadha</strong> (Sun) - Wise, Fearless</li>
                <li>22. <strong>Sravana</strong> (Moon) - Devoted, Communicative</li>
              </ul>
            </div>
            <div className="md:col-span-2">
              <p className="font-semibold text-amber-700 mb-2">Group 8: Capricorn-Pisces</p>
              <ul className="space-y-1 text-gray-700 grid md:grid-cols-2 gap-1">
                <li>23. <strong>Dhanishta</strong> (Mars) - Musical, Confident</li>
                <li>24. <strong>Shatabhisha</strong> (Rahu) - Innovative, Independent</li>
                <li>25. <strong>Purva Bhadrapada</strong> (Jupiter) - Spiritual, Mystical</li>
                <li>26. <strong>Uttara Bhadrapada</strong> (Saturn) - Wise, Focused</li>
                <li>27. <strong>Revati</strong> (Mercury) - Kind, Intuitive, Protective</li>
              </ul>
            </div>
          </div>
        </div>

<BlogImage
          src="/images/blog/nakshatra/section-3.webp"
          alt="All 27 Nakshatras Chart"
          caption="All 27 Nakshatras with ruling planets and core characteristics"
        />
      </section>

      <SectionDivider />

      {/* Section 4: Understanding Your Nakshatra */}
      <section id="nakshatra-meaning">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Target className="w-5 h-5" />
          </span>
          Understanding Your Nakshatra's Meaning
        </h2>

        <p className="leading-relaxed mb-4">
          Now that you know all 27 Nakshatras, let's decipher what yours actually means for your life:
        </p>

        <h3 className="text-xl font-bold text-teal-700 mb-4">The Four Pada System</h3>

        <p className="leading-relaxed mb-4">
          Each Nakshatra has <strong>4 Padas</strong> (quarters), and your specific Pada adds another layer of accuracy:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl p-5 text-white">
            <h4 className="font-bold mb-2">Pada 1</h4>
            <p className="text-teal-100 text-sm">Most direct expression of Nakshatra energy</p>
          </div>
          <div className="bg-gradient-to-r from-saffron-500 to-saffron-600 rounded-xl p-5 text-white">
            <h4 className="font-bold mb-2">Pada 2</h4>
            <p className="text-saffron-100 text-sm">Refined, more spiritual version</p>
          </div>
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-5 text-white">
            <h4 className="font-bold mb-2">Pada 3</h4>
            <p className="text-amber-100 text-sm">Practical, grounded application</p>
          </div>
          <div className="bg-gradient-to-r from-teal-600 to-teal-700 rounded-xl p-5 text-white">
            <h4 className="font-bold mb-2">Pada 4</h4>
            <p className="text-teal-100 text-sm">Transcendent, mystical dimension</p>
          </div>
        </div>

        <HighlightBox type="tip">
          <strong>Example:</strong> If you're Ashwini Nakshatra Pada 3, you're a practical healer/innovator. Ashwini Pada 4 is a transcendent, mystical healer. Same star, completely different spiritual evolution.
        </HighlightBox>

        <h3 className="text-xl font-bold text-teal-700 mt-8 mb-4">Nakshatra Strengths & Challenges</h3>

        <p className="leading-relaxed mb-4">
          Every Nakshatra has both gifts and growth areas:
        </p>

        <div className="space-y-3 my-6">
          {[
            { name: 'Ashwini', gift: 'Innovation', challenge: 'Impatience' },
            { name: 'Bharani', gift: 'Transformation', challenge: 'Intensity' },
            { name: 'Kritika', gift: 'Leadership', challenge: 'Over-criticism' },
            { name: 'Rohini', gift: 'Stability', challenge: 'Stubbornness' },
            { name: 'Mrigashirsha', gift: 'Curiosity', challenge: 'Scattered focus' },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-4 bg-gradient-to-r from-cream-50 to-cream-100 rounded-xl p-4 border border-cream-200">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-saffron-400 to-saffron-500 text-white font-bold text-sm flex-shrink-0">
                {index + 1}
              </div>
              <div className="flex-1">
                <span className="font-bold text-teal-800">{item.name}:</span>
                <span className="text-gray-700 ml-2">Gift = <span className="text-teal-600 font-medium">{item.gift}</span>, Challenge = <span className="text-saffron-600 font-medium">{item.challenge}</span></span>
              </div>
            </div>
          ))}
        </div>

        <HighlightBox type="important">
          <strong>The key insight:</strong> You're not "good" or "bad" based on your Nakshatra. You're simply wired with specific strengths to amplify and challenges to transform.
        </HighlightBox>

        <h3 className="text-xl font-bold text-teal-700 mt-8 mb-4">Career Path by Nakshatra</h3>

        <p className="leading-relaxed mb-4">
          Your Nakshatra reveals your natural career direction:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <InfoCard title="Business & Leadership" variant="teal">
            <p className="text-sm text-gray-700">
              <strong>Ashwini, Rohini, Dhanishta:</strong> Business, Innovation, Leadership roles
            </p>
          </InfoCard>

          <InfoCard title="Arts & Creativity" variant="saffron">
            <p className="text-sm text-gray-700">
              <strong>Bharani, Chitra, Purva Bhadrapada:</strong> Arts, Creativity, Design
            </p>
          </InfoCard>

          <InfoCard title="Authority & Law" variant="amber">
            <p className="text-sm text-gray-700">
              <strong>Kritika, Magha, Uttarashadha:</strong> Law, Authority, Government
            </p>
          </InfoCard>

          <InfoCard title="Communication" variant="highlight">
            <p className="text-sm text-gray-700">
              <strong>Mrigashirsha, Hasta, Sravana:</strong> Communication, Teaching, Writing
            </p>
          </InfoCard>

          <InfoCard title="Spirituality & Healing" variant="teal">
            <p className="text-sm text-gray-700">
              <strong>Pushya, Anuradha, Uttara Bhadrapada:</strong> Spirituality, Counseling, Healing
            </p>
          </InfoCard>

          <InfoCard title="Research & Technology" variant="saffron">
            <p className="text-sm text-gray-700">
              <strong>Jyeshtha, Swati, Shatabhisha:</strong> Research, Technology, Innovation
            </p>
          </InfoCard>
        </div>

        <HighlightBox type="tip">
          Don't force yourself into careers that fight your Nakshatra's nature. Work WITH your cosmic blueprint, not against it.
        </HighlightBox>

        {/* Career Matrix Visual */}
        <div className="bg-gradient-to-br from-cream-50 to-amber-50 rounded-2xl p-8 border border-amber-200 shadow-md my-8">
          <h4 className="text-xl font-bold text-center text-teal-800 mb-6">Nakshatra Career & Personality Matrix</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white rounded-xl p-4 border-l-4 border-teal-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">💼</span>
                <h5 className="font-bold text-teal-700">Business Leaders</h5>
              </div>
              <p className="text-xs text-gray-600">Ashwini, Rohini, Dhanishta</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-4 border-saffron-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🎨</span>
                <h5 className="font-bold text-saffron-700">Creative Artists</h5>
              </div>
              <p className="text-xs text-gray-600">Bharani, Chitra, Purva Bhadrapada</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-4 border-amber-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">⚖️</span>
                <h5 className="font-bold text-amber-700">Authority Figures</h5>
              </div>
              <p className="text-xs text-gray-600">Kritika, Magha, Uttarashadha</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-4 border-teal-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">📚</span>
                <h5 className="font-bold text-teal-700">Communicators</h5>
              </div>
              <p className="text-xs text-gray-600">Mrigashirsha, Hasta, Sravana</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-4 border-saffron-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🕉️</span>
                <h5 className="font-bold text-saffron-700">Spiritual Healers</h5>
              </div>
              <p className="text-xs text-gray-600">Pushya, Anuradha, Uttara Bhadrapada</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-4 border-amber-500">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">🔬</span>
                <h5 className="font-bold text-amber-700">Researchers</h5>
              </div>
              <p className="text-xs text-gray-600">Jyeshtha, Swati, Shatabhisha</p>
            </div>
          </div>
          <p className="text-center text-sm text-gray-600 italic mt-6">
            Nakshatra personality traits and career compatibility matrix
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Compatibility */}
      <section id="nakshatra-compatibility">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Heart className="w-5 h-5" />
          </span>
          Nakshatra Compatibility & Relationships
        </h2>

        <p className="leading-relaxed mb-4">
          One of the most practical uses of Nakshatra is <strong>marriage compatibility analysis</strong>. In traditional Vedic astrology, Nakshatra matching (Nakshetra Milan) is considered even more important than zodiac sign matching.
        </p>

        <h3 className="text-xl font-bold text-teal-700 mb-4">The Nakshetra Milan System (8-Point Compatibility)</h3>

        <p className="leading-relaxed mb-4">Traditional systems check:</p>

        <div className="grid md:grid-cols-2 gap-3 my-6">
          {[
            { num: 1, name: 'Tara Guna', desc: 'Star proximity compatibility' },
            { num: 2, name: 'Yoni', desc: 'Sexual/emotional compatibility' },
            { num: 3, name: 'Rajju', desc: 'Longevity together' },
            { num: 4, name: 'Vasya', desc: 'Dominance balance' },
            { num: 5, name: 'Mahendra', desc: 'Auspiciousness' },
            { num: 6, name: 'Isha', desc: 'Mutual affection' },
            { num: 7, name: 'Graha Maitri', desc: 'Planetary friendship' },
            { num: 8, name: 'Gana', desc: 'Temperament harmony' },
          ].map((item) => (
            <div key={item.num} className="flex items-center gap-3 bg-white rounded-xl p-3 border border-gray-200 shadow-sm">
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gradient-to-br from-saffron-400 to-saffron-500 text-white font-bold text-sm flex-shrink-0">
                {item.num}
              </div>
              <div>
                <span className="font-bold text-teal-800">{item.name}</span>
                <span className="text-gray-600 text-sm ml-1">— {item.desc}</span>
              </div>
            </div>
          ))}
        </div>

        <HighlightBox type="important">
          <strong>Scoring:</strong> Out of 36 points, 24+ is considered an excellent match. Use our <Link href={`/${locale}/tools/marriage-matching`} className="text-saffron-600 hover:underline">Marriage Matching Calculator</Link> to check your compatibility score.
        </HighlightBox>

        <h3 className="text-xl font-bold text-teal-700 mt-8 mb-4">Quick Nakshatra Compatibility Guide</h3>

        <InfoCard title="Most Compatible Nakshatra Pairs" variant="teal" icon={<Heart className="w-5 h-5" />}>
          <ul className="space-y-2 text-sm">
            <li>• <strong>Ashwini</strong> + Chitra, Sravana, Magha</li>
            <li>• <strong>Bharani</strong> + Kritika, Rohini, Dhanishta</li>
            <li>• <strong>Kritika</strong> + Bharani, Magha, Uttarashadha</li>
            <li>• <strong>Rohini</strong> + Bharani, Mrigashirsha, Shatabhisha</li>
            <li>• <strong>Mrigashirsha</strong> + Rohini, Ardra, Anuradha</li>
          </ul>
        </InfoCard>

        <HighlightBox type="warning">
          <strong>Note:</strong> These are generalized patterns. A complete compatibility analysis requires looking at all 9 planets' positions, not just Nakshatras.
        </HighlightBox>

        <h3 className="text-xl font-bold text-teal-700 mt-8 mb-4">Nakshatra & Marriage Timing</h3>

        <p className="leading-relaxed mb-4">
          Your Nakshatra also indicates favorable periods for marriage:
        </p>

        <div className="space-y-4">
          <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-saffron-600 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">♀</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-saffron-800 text-lg mb-2">Venus-ruled Nakshatras</h4>
                <p className="text-gray-700 text-sm mb-2">(Bharani, Purva Phalguni, Purvashadha)</p>
                <p className="text-sm text-gray-600">Naturally romantic, early marriage likely</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">♃</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-amber-800 text-lg mb-2">Jupiter-ruled Nakshatras</h4>
                <p className="text-gray-700 text-sm mb-2">(Punarvasu, Vishakha, Purva Bhadrapada)</p>
                <p className="text-sm text-gray-600">Balanced relationships, marriage in mid-20s to 30s</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">♄</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-teal-800 text-lg mb-2">Saturn-ruled Nakshatras</h4>
                <p className="text-gray-700 text-sm mb-2">(Pushya, Anuradha, Uttara Bhadrapada)</p>
                <p className="text-sm text-gray-600">Delayed marriage, but long-lasting unions (30s+)</p>
              </div>
            </div>
          </div>
        </div>

        <HighlightBox type="tip">
          This is a tendency, not destiny. Your 7th house and Venus placement matter equally. Check your complete <Link href={`/${locale}/tools/kundli`} className="text-saffron-600 hover:underline">Kundli</Link> for full marriage predictions.
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 6: Career & Remedies */}
      <section id="career-remedies">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Gem className="w-5 h-5" />
          </span>
          Career, Remedies & Life Path
        </h2>

        <h3 className="text-xl font-bold text-teal-700 mb-4">Nakshatra-Specific Gemstones</h3>

        <p className="leading-relaxed mb-4">
          Each Nakshatra has a recommended <Link href={`/${locale}/tools/gemstone-recommender`} className="text-saffron-600 hover:underline">gemstone</Link> to strengthen its positive qualities:
        </p>

        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                <th className="px-4 py-3 text-left">Nakshatra</th>
                <th className="px-4 py-3 text-left">Gemstone</th>
                <th className="px-4 py-3 text-left">Color</th>
                <th className="px-4 py-3 text-left">Day to Wear</th>
                <th className="px-4 py-3 text-left">Benefits</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              <tr className="border-b border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3 font-bold">Ashwini</td>
                <td className="px-4 py-3">Diamond/White Coral</td>
                <td className="px-4 py-3">Clear/White</td>
                <td className="px-4 py-3">Wednesday</td>
                <td className="px-4 py-3">Innovation, Speed, Healing</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3 font-bold">Bharani</td>
                <td className="px-4 py-3">Coral/Garnet</td>
                <td className="px-4 py-3">Red</td>
                <td className="px-4 py-3">Tuesday</td>
                <td className="px-4 py-3">Courage, Passion</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3 font-bold">Kritika</td>
                <td className="px-4 py-3">Ruby</td>
                <td className="px-4 py-3">Crimson</td>
                <td className="px-4 py-3">Sunday</td>
                <td className="px-4 py-3">Leadership, Authority</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3 font-bold">Rohini</td>
                <td className="px-4 py-3">Pearl</td>
                <td className="px-4 py-3">White</td>
                <td className="px-4 py-3">Monday</td>
                <td className="px-4 py-3">Stability, Peace</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3 font-bold">Mrigashirsha</td>
                <td className="px-4 py-3">Emerald</td>
                <td className="px-4 py-3">Green</td>
                <td className="px-4 py-3">Wednesday</td>
                <td className="px-4 py-3">Communication, Learning</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3 font-bold">Ardra</td>
                <td className="px-4 py-3">Hessonite</td>
                <td className="px-4 py-3">Golden-brown</td>
                <td className="px-4 py-3">Saturday</td>
                <td className="px-4 py-3">Clarity, Growth</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3 font-bold">Punarvasu</td>
                <td className="px-4 py-3">Yellow Sapphire</td>
                <td className="px-4 py-3">Yellow</td>
                <td className="px-4 py-3">Thursday</td>
                <td className="px-4 py-3">Wisdom, Luck</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3 font-bold">Pushya</td>
                <td className="px-4 py-3">Blue Sapphire</td>
                <td className="px-4 py-3">Blue</td>
                <td className="px-4 py-3">Saturday</td>
                <td className="px-4 py-3">Spirituality, Protection</td>
              </tr>
              <tr className="border-b border-gray-100 hover:bg-teal-50">
                <td className="px-4 py-3 font-bold">Ashlesha</td>
                <td className="px-4 py-3">Emerald</td>
                <td className="px-4 py-3">Green</td>
                <td className="px-4 py-3">Wednesday</td>
                <td className="px-4 py-3">Intellect, Strategy</td>
              </tr>
              <tr className="hover:bg-teal-50">
                <td className="px-4 py-3 font-bold">Magha</td>
                <td className="px-4 py-3">Ruby</td>
                <td className="px-4 py-3">Red</td>
                <td className="px-4 py-3">Sunday</td>
                <td className="px-4 py-3">Authority, Legacy</td>
              </tr>
            </tbody>
          </table>
        </div>

        <HighlightBox type="warning">
          <strong>Remember:</strong> Gemstones should be worn only after astrological consultation. The wrong gemstone can backfire. Use our <Link href={`/${locale}/tools/gemstone-recommender`} className="text-saffron-600 hover:underline">Gemstone Recommender</Link> for personalized advice.
        </HighlightBox>

        <h3 className="text-xl font-bold text-teal-700 mt-8 mb-4">Nakshatra Mantras</h3>

        <p className="leading-relaxed mb-4">
          Chanting your Nakshatra's mantra daily amplifies its positive effects:
        </p>

        <div className="grid md:grid-cols-2 gap-3 my-6">
          {[
            { nakshatra: 'Ashwini', mantra: 'Om Ashwinyabhyam Namah' },
            { nakshatra: 'Bharani', mantra: 'Om Yamaya Namah' },
            { nakshatra: 'Kritika', mantra: 'Om Agniaye Namah' },
            { nakshatra: 'Rohini', mantra: 'Om Prajapataye Namah' },
            { nakshatra: 'Mrigashirsha', mantra: 'Om Somaya Namah' },
            { nakshatra: 'Ardra', mantra: 'Om Rudraya Namah' },
            { nakshatra: 'Punarvasu', mantra: 'Om Aditiyaya Namah' },
            { nakshatra: 'Pushya', mantra: 'Om Brhaspataye Namah' },
            { nakshatra: 'Ashlesha', mantra: 'Om Sarpebhyo Namah' },
            { nakshatra: 'Magha', mantra: 'Om Pitrubhyo Namah' },
          ].map((item, index) => (
            <div key={index} className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-xl p-4 border border-cream-200">
              <span className="font-bold text-teal-800">{item.nakshatra}:</span>
              <span className="text-saffron-700 ml-2 italic">"{item.mantra}"</span>
            </div>
          ))}
        </div>

        <HighlightBox type="tip">
          <strong>Practice:</strong> Chant your Nakshatra mantra 108 times each morning for 40 days to see noticeable shifts in your life.
        </HighlightBox>

        <h3 className="text-xl font-bold text-teal-700 mt-8 mb-4">Nakshatra Remedies & Life Practices</h3>

        <p className="leading-relaxed mb-4">
          Beyond gemstones and mantras, here are Nakshatra-specific remedies:
        </p>

        <div className="space-y-3">
          {[
            { nakshatra: 'Ashwini', remedy: 'Donate medical supplies or help heal animals. Wear white clothes on Wednesdays.' },
            { nakshatra: 'Bharani', remedy: 'Practice intense physical exercise (yoga, gym). Engage in transformative work.' },
            { nakshatra: 'Kritika', remedy: 'Offer food to Sun (meditate facing sunrise). Build authority in your field.' },
            { nakshatra: 'Rohini', remedy: 'Nurture family bonds. Plant trees. Support agriculture or farming.' },
            { nakshatra: 'Mrigashirsha', remedy: 'Travel, read, learn new languages. Keep a journal.' },
            { nakshatra: 'Ardra', remedy: 'Meditate on letting go. Accept life\'s storms as teachers.' },
            { nakshatra: 'Punarvasu', remedy: 'Be generous with wealth. Help others restart their lives.' },
            { nakshatra: 'Pushya', remedy: 'Serve spiritually. Protect the vulnerable. Fast on Saturdays.' },
            { nakshatra: 'Ashlesha', remedy: 'Study occult sciences. Practice secret charity (unseen giving).' },
            { nakshatra: 'Magha', remedy: 'Respect ancestors. Perform family rituals. Maintain traditions.' },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
              <span className="font-bold text-saffron-700">{item.nakshatra}:</span>
              <span className="text-gray-700 ml-2">{item.remedy}</span>
            </div>
          ))}
        </div>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Sparkles className="w-5 h-5" />
          </span>
          Your Nakshatra Journey
        </h2>

        <p className="leading-relaxed mb-4">
          Your Nakshatra is your <strong className="text-teal-700">cosmic name</strong>—the star that watched you take your first breath and has been influencing your personality, talents, and destiny ever since.
        </p>

        <InfoCard title="Here's What You Now Know" variant="teal" icon={<Star className="w-5 h-5" />}>
          <FeatureList
            variant="check"
            items={[
              'Your Nakshatra reveals more about you than your Sun sign',
              'All 27 Nakshatras have specific personality profiles',
              'Your Nakshatra influences your career, relationships, and timing',
              'Specific remedies (gemstones, mantras, rituals) amplify Nakshatra benefits',
              'Nakshatra compatibility is crucial for marriage harmony',
            ]}
          />
        </InfoCard>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-teal-600 to-teal-700 rounded-2xl p-8 text-center text-white my-8 shadow-xl">
          <div className="text-4xl mb-4">🌟</div>
          <h3 className="text-2xl font-bold mb-2">Discover Your Birth Star Today</h3>
          <p className="text-teal-100 mb-6">Calculate your Nakshatra and unlock the cosmic secrets your birth star has been hiding</p>
          <Link
            href={`/${locale}/tools/nakshatra`}
            className="inline-flex items-center gap-2 bg-saffron-500 hover:bg-saffron-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <Calculator className="w-5 h-5" />
            Calculate Your Nakshatra Now
          </Link>
        </div>

        {/* Related Tools */}
        <h3 className="text-xl font-bold text-teal-700 mb-4">Related Tools to Deepen Your Understanding</h3>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <RelatedToolCard
            title="Kundli Calculator"
            description="See all 9 planets & complete birth chart"
            href={`/${locale}/tools/kundli`}
            icon={<Star className="w-5 h-5" />}
          />
          <RelatedToolCard
            title="Moon Sign Calculator"
            description="Understand your emotional nature"
            href={`/${locale}/tools/moon-sign`}
            icon={<Moon className="w-5 h-5" />}
          />
          <RelatedToolCard
            title="Lagna Calculator"
            description="Know how the world perceives you"
            href={`/${locale}/tools/lagna`}
            icon={<Sun className="w-5 h-5" />}
          />
          <RelatedToolCard
            title="Marriage Matching"
            description="Check Nakshatra compatibility with your partner"
            href={`/${locale}/tools/marriage-matching`}
            icon={<Heart className="w-5 h-5" />}
          />
        </div>

        <HighlightBox type="important">
          <strong>Your Nakshatra is Your Superpower.</strong> Don't just know your Nakshatra—<em>live it</em>. Embrace your Nakshatra's strengths, work with your challenges, align your career with your cosmic nature, and watch how your life transforms when you stop fighting your cosmic blueprint and start collaborating with it.
        </HighlightBox>

{/* Journey transformation visual */}
        <div className="bg-gradient-to-r from-teal-50 via-saffron-50 to-amber-50 rounded-2xl p-6 border border-teal-200 shadow-sm my-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center text-white text-xl shadow-md">
                🔍
              </div>
              <h5 className="font-bold text-teal-700 text-sm mb-1">Discovery</h5>
              <p className="text-xs text-gray-600">Calculate</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-saffron-500 to-saffron-600 flex items-center justify-center text-white text-xl shadow-md">
                📖
              </div>
              <h5 className="font-bold text-saffron-700 text-sm mb-1">Understanding</h5>
              <p className="text-xs text-gray-600">Learn traits</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white text-xl shadow-md">
                🎯
              </div>
              <h5 className="font-bold text-amber-700 text-sm mb-1">Alignment</h5>
              <p className="text-xs text-gray-600">Apply wisdom</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-teal-500 to-saffron-500 flex items-center justify-center text-white text-xl shadow-md">
                ✨
              </div>
              <h5 className="font-bold text-teal-700 text-sm mb-1">Transform</h5>
              <p className="text-xs text-gray-600">Live truth</p>
            </div>
          </div>
        </div>

        <BlogImage
          src="/images/blog/nakshatra/conclusion.webp"
          alt="Nakshatra Journey Transformation"
          caption="Your Nakshatra journey: From discovery → understanding → alignment → transformation"
        />
      </section>
    </div>
  );
}
