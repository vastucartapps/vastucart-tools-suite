'use client';

import Link from 'next/link';
import { Calculator, Moon, Sun, Heart, Star, Shield, Sparkles, Users, Target, TrendingUp, Compass, Gem } from 'lucide-react';
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

interface MoonSignPostProps {
  locale: string;
}

export default function MoonSignPost({ locale }: MoonSignPostProps) {
  return (
    <div className="space-y-8">
      {/* Introduction */}
      <p className="text-lg leading-relaxed">
        Most people know their <strong className="text-deepteal-700">zodiac sign</strong>, but still feel like generic horoscopes never fully match them.
      </p>

      <p className="leading-relaxed">
        Ever felt this mismatch? "Arre, I'm supposed to be fiery Aries, but I feel more emotional and sensitive in real life." The missing piece is your <strong className="text-warmaccent-700">Moon Sign (Rashi)</strong>—not your Sun sign.
      </p>

      <HighlightBox type="important">
        <strong>Key Truth:</strong> Two people can share the same Sun sign and <Link href={`/${locale}/tools/lagna`} className="text-warmaccent-600 hover:underline">Lagna</Link>, but if their Moon signs differ, their emotional world, relationships, and decision‑making style will be totally different.
      </HighlightBox>

      <InfoCard title="What You'll Discover" variant="deepteal" icon={<Sparkles className="w-5 h-5" />}>
        <FeatureList
          variant="check"
          items={[
            'Calculate your Moon sign in seconds',
            'Understand how your Rashi shapes your emotional nature',
            'Learn the 12 Moon signs with their core traits',
            'See how Moon sign differs from Sun sign, Lagna, and Nakshatra',
            'Use Moon sign for relationships, career, and daily decisions',
            'Apply simple remedies when your Moon is stressed',
          ]}
        />
      </InfoCard>

      <StatsCard
        stats={[
          { label: 'Moon Signs', value: '12' },
          { label: 'Accuracy', value: '95%+' },
          { label: 'Based On', value: 'Vedic' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      <SectionDivider />

      {/* Section 1: What is Moon Sign */}
      <section id="what-is-moon-sign">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Moon className="w-5 h-5" />
          </span>
          What Is a Moon Sign (Rashi)?
        </h2>

        <p className="leading-relaxed mb-4">
          Your <strong className="text-deepteal-700">Moon sign (Chandra Rashi)</strong> is the zodiac sign where the{' '}
          <a href="https://en.wikipedia.org/wiki/Moon" target="_blank" rel="nofollow noopener noreferrer" className="text-deepteal-600 hover:underline">Moon</a>{' '}
          was placed at the exact time of your birth. In{' '}
          <a href="https://www.britannica.com/topic/astrology/Astrology-in-India" target="_blank" rel="nofollow noopener noreferrer" className="text-deepteal-600 hover:underline">Vedic astrology</a>,
          if your <Link href={`/${locale}/tools/kundli`} className="text-warmaccent-600 hover:underline">birth chart (Kundli)</Link> is a full movie of your life, your Moon sign is the <strong>background soundtrack</strong>—constantly playing, shaping your feelings, moods, and reactions.
        </p>

        <h3 className="text-xl font-bold text-deepteal-700 mb-4">Why Vedic Astrology Loves the Moon</h3>

        <p className="leading-relaxed mb-4">In Vedic astrology:</p>

        <div className="bg-gradient-to-br from-warmaccent-50 to-amber-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm mb-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-warmaccent-500 text-white text-xs flex-shrink-0 mt-0.5">✓</span>
              <span className="text-gray-700">The <strong className="text-warmaccent-700">Moon</strong> represents mind, emotions, comfort, mother, habits, and mental health</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-warmaccent-500 text-white text-xs flex-shrink-0 mt-0.5">✓</span>
              <span className="text-gray-700">It changes sign roughly every <strong className="text-warmaccent-700">2.25 days</strong>, making it more personal than the Sun (30 days)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-warmaccent-500 text-white text-xs flex-shrink-0 mt-0.5">✓</span>
              <span className="text-gray-700">This is why Vedic astrologers often ask, <em>"Aapka Rashi kya hai?"</em> instead of <em>"Zodiac kya hai?"</em></span>
            </li>
          </ul>
        </div>

        <h3 className="text-xl font-bold text-deepteal-700 mb-4">Your Rashi is Used to:</h3>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <InfoCard title="Daily Predictions" variant="deepteal">
            <p className="text-sm text-gray-700">Calculate daily, monthly, and yearly predictions with precision</p>
          </InfoCard>

          <InfoCard title="Emotional Compatibility" variant="warmaccent">
            <p className="text-sm text-gray-700">Understand your emotional compatibility with others in relationships</p>
          </InfoCard>

          <InfoCard title="Stress & Love Patterns" variant="amber">
            <p className="text-sm text-gray-700">Judge how you handle stress, love, change, and security needs</p>
          </InfoCard>

          <InfoCard title="Yogas & Doshas" variant="highlight">
            <p className="text-sm text-gray-700">Determine important yogas and doshas (e.g., <Link href={`/${locale}/tools/sade-sati`} className="text-warmaccent-700 hover:underline">Sade Sati</Link> around Moon)</p>
          </InfoCard>
        </div>

        <h3 className="text-xl font-bold text-deepteal-700 mt-8 mb-4">Moon Sign vs "Star Sign"</h3>

        <p className="leading-relaxed mb-4">
          Most apps and magazines use <strong>Sun sign</strong> (Western style), not Moon sign. That's why generic horoscopes feel 30–40% accurate at best.
        </p>

        <ComparisonTable
          headers={['Aspect', 'Sun Sign (Western)', 'Moon Sign (Vedic Rashi)']}
          rows={[
            ['Represents', 'Ego, outer identity, purpose', 'Emotions, mind, inner self'],
            ['Changes every', '30 days', '2–3 days'],
            ['Used for', 'Generic horoscopes', 'Precise predictions, mental patterns'],
            ['Accuracy for daily life', 'Low–Medium', 'High'],
            ['Focus in Vedic astrology', 'Secondary', 'Primary'],
          ]}
        />

        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 my-6">
          <h4 className="font-bold text-amber-800 mb-3">🗣️ Hinglish Insight:</h4>
          <p className="text-gray-700 italic text-sm leading-relaxed">
            "Log kehte hain 'Mera sign Leo hai', par asli story tab samajh aati hai jab aap apna Moon sign dekhte ho. Dimag aur dil Moon sign se chalte hain, newspaper waali zodiac se nahi."
          </p>
          <p className="text-gray-600 text-xs mt-2">
            (Translation: "People say 'My sign is Leo,' but the real story only appears when you see your Moon sign. Your heart and mind are run by your Moon sign, not the newspaper zodiac.")
          </p>
        </div>

        <BlogImage
          src="/images/blog/moon-sign/section-1.webp"
          alt="Moon Sign Emotional Blueprint"
          caption="The Moon represents your emotional blueprint and inner self in Vedic astrology"
        />
      </section>

      <SectionDivider />

      {/* Section 2: How to Calculate */}
      <section id="how-to-calculate">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Calculate Your Moon Sign
        </h2>

        <p className="leading-relaxed mb-4">
          You don't need to manually calculate lunar positions—let the software handle the complex math. What you DO need is <strong>accurate birth data</strong>.
        </p>

        <h3 className="text-xl font-bold text-deepteal-700 mb-4">Step 1: Collect Accurate Birth Details</h3>

        <p className="leading-relaxed mb-4">To compute your Moon sign (Rashi):</p>

        <FeatureList
          variant="number"
          items={[
            'Birth Date: Day, Month, Year',
            'Birth Time: Hour & Minute (as exact as possible)',
            'Birth Place: City / town or coordinates',
          ]}
        />

        <HighlightBox type="warning">
          Even a <strong>30–40 minute</strong> error can shift the Moon's degree and, in some rare cases near sign boundaries, even the sign. Check your birth certificate, hospital record, or ask your parents for the exact time.
        </HighlightBox>

        <h3 className="text-xl font-bold text-deepteal-700 mt-8 mb-4">Step 2: Use the Moon Sign Calculator</h3>

        {/* CTA Card */}
        <div className="bg-gradient-to-br from-deepteal-600 to-deepteal-700 rounded-2xl p-8 text-center text-white my-8 shadow-xl">
          <div className="text-4xl mb-4">🌙</div>
          <h3 className="text-2xl font-bold mb-2">Find Your True Moon Sign (Rashi)</h3>
          <p className="text-deepteal-100 mb-6">Enter your birth details to calculate your emotional blueprint in seconds</p>
          <Link
            href={`/${locale}/tools/moon-sign`}
            className="inline-flex items-center gap-2 bg-warmaccent-500 hover:bg-warmaccent-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <Calculator className="w-5 h-5" />
            Launch Moon Sign Calculator
          </Link>
        </div>

        <p className="leading-relaxed mb-4">The calculator will:</p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-4 border border-deepteal-200">
            <div className="flex items-center gap-2 mb-2">
              <Moon className="w-5 h-5 text-deepteal-600" />
              <span className="font-bold text-deepteal-800">Moon Position</span>
            </div>
            <p className="text-sm text-gray-700">Compute precise Moon position using Vedic astronomical data</p>
          </div>

          <div className="bg-gradient-to-br from-warmaccent-50 to-orange-100 rounded-xl p-4 border border-warmaccent-200">
            <div className="flex items-center gap-2 mb-2">
              <Star className="w-5 h-5 text-warmaccent-600" />
              <span className="font-bold text-warmaccent-800">Zodiac Sign</span>
            </div>
            <p className="text-sm text-gray-700">Identify which of the 12 zodiac signs the Moon occupied</p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-xl p-4 border border-amber-200">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-5 h-5 text-amber-600" />
              <span className="font-bold text-amber-800">Nakshatra Details</span>
            </div>
            <p className="text-sm text-gray-700">Show your Moon's <Link href={`/${locale}/blog/nakshatra-birth-star-guide`} className="text-amber-700 hover:underline">Nakshatra</Link> and house placement</p>
          </div>

          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-4 border border-deepteal-200">
            <div className="flex items-center gap-2 mb-2">
              <Compass className="w-5 h-5 text-deepteal-600" />
              <span className="font-bold text-deepteal-800">Bilingual Result</span>
            </div>
            <p className="text-sm text-gray-700">Return your Moon sign in both English & Hindi (e.g., Cancer / Karka)</p>
          </div>
        </div>

        <BlogImage
          src="/images/blog/moon-sign/section-2.webp"
          alt="Moon Sign Calculation Process"
          caption="Calculate your Moon sign using accurate birth data and Vedic astronomy"
        />

        <h3 className="text-xl font-bold text-deepteal-700 mt-8 mb-4">Step 3: Cross‑Check With Your Kundli</h3>

        <p className="leading-relaxed mb-4">For best accuracy:</p>

        <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-2xl p-6 border border-cream-200 my-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-deepteal-500 text-white text-xs flex-shrink-0 mt-0.5">1</span>
              <span className="text-gray-700">Generate your full <Link href={`/${locale}/tools/kundli`} className="text-warmaccent-600 hover:underline font-medium">Kundli</Link> using the free Kundli Generator</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-warmaccent-500 text-white text-xs flex-shrink-0 mt-0.5">2</span>
              <span className="text-gray-700">Verify that the <strong className="text-warmaccent-700">Moon</strong> in your chart matches the sign shown in the Moon Sign Calculator</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-amber-500 text-white text-xs flex-shrink-0 mt-0.5">3</span>
              <span className="text-gray-700">Note the <strong className="text-amber-700">house</strong> where Moon is placed (e.g., Moon in 4th house in Cancer)</span>
            </li>
          </ul>
        </div>

        <HighlightBox type="tip">
          This combo (Sign + House) tells you <strong>what you feel</strong> and <strong>where in life you feel it most</strong> (home, career, relationships, etc.).
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 3: 12 Moon Signs */}
      <section id="12-moon-signs">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Star className="w-5 h-5" />
          </span>
          12 Moon Signs: Emotional Profiles
        </h2>

        <p className="leading-relaxed mb-6">
          Here's a quick reference of emotional styles for all 12 Moon signs:
        </p>

        {/* Fire Moon Signs */}
        <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm mb-6">
          <h3 className="text-xl font-bold text-warmaccent-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">🔥</span>
            Fire Moon Signs (Aries, Leo, Sagittarius)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-warmaccent-500 to-warmaccent-600 text-white">
                  <th className="px-4 py-3 text-left">Moon Sign</th>
                  <th className="px-4 py-3 text-left">Element</th>
                  <th className="px-4 py-3 text-left">Emotional Style</th>
                  <th className="px-4 py-3 text-left">Needs Most</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100 hover:bg-warmaccent-50">
                  <td className="px-4 py-3 font-bold text-warmaccent-700">Aries</td>
                  <td className="px-4 py-3">Fire</td>
                  <td className="px-4 py-3">Impulsive, direct, quickly angered</td>
                  <td className="px-4 py-3">Freedom, action</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-warmaccent-50">
                  <td className="px-4 py-3 font-bold text-warmaccent-700">Leo</td>
                  <td className="px-4 py-3">Fire</td>
                  <td className="px-4 py-3">Warm, proud, expressive</td>
                  <td className="px-4 py-3">Respect, recognition</td>
                </tr>
                <tr className="hover:bg-warmaccent-50">
                  <td className="px-4 py-3 font-bold text-warmaccent-700">Sagittarius</td>
                  <td className="px-4 py-3">Fire</td>
                  <td className="px-4 py-3">Optimistic, restless, blunt</td>
                  <td className="px-4 py-3">Truth, adventure</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-warmaccent-700 mt-3 italic">Fire Moons feel things fast and loud—they cool down quickly but need excitement and honesty.</p>
        </div>

        {/* Earth Moon Signs */}
        <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 shadow-sm mb-6">
          <h3 className="text-xl font-bold text-amber-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">⛰️</span>
            Earth Moon Signs (Taurus, Virgo, Capricorn)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                  <th className="px-4 py-3 text-left">Moon Sign</th>
                  <th className="px-4 py-3 text-left">Element</th>
                  <th className="px-4 py-3 text-left">Emotional Style</th>
                  <th className="px-4 py-3 text-left">Needs Most</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100 hover:bg-amber-50">
                  <td className="px-4 py-3 font-bold text-amber-700">Taurus</td>
                  <td className="px-4 py-3">Earth</td>
                  <td className="px-4 py-3">Calm, steady, comfort‑loving</td>
                  <td className="px-4 py-3">Stability, sensual comfort</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-amber-50">
                  <td className="px-4 py-3 font-bold text-amber-700">Virgo</td>
                  <td className="px-4 py-3">Earth</td>
                  <td className="px-4 py-3">Analytical, anxious, detail‑focused</td>
                  <td className="px-4 py-3">Order, usefulness</td>
                </tr>
                <tr className="hover:bg-amber-50">
                  <td className="px-4 py-3 font-bold text-amber-700">Capricorn</td>
                  <td className="px-4 py-3">Earth</td>
                  <td className="px-4 py-3">Reserved, responsible, serious</td>
                  <td className="px-4 py-3">Security, achievement</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-amber-700 mt-3 italic">Earth Moons are practical feelers—they show love through stability, service, and responsibility, not drama.</p>
        </div>

        {/* Air Moon Signs */}
        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm mb-6">
          <h3 className="text-xl font-bold text-deepteal-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">💨</span>
            Air Moon Signs (Gemini, Libra, Aquarius)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-deepteal-500 to-deepteal-600 text-white">
                  <th className="px-4 py-3 text-left">Moon Sign</th>
                  <th className="px-4 py-3 text-left">Element</th>
                  <th className="px-4 py-3 text-left">Emotional Style</th>
                  <th className="px-4 py-3 text-left">Needs Most</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100 hover:bg-deepteal-50">
                  <td className="px-4 py-3 font-bold text-deepteal-700">Gemini</td>
                  <td className="px-4 py-3">Air</td>
                  <td className="px-4 py-3">Curious, talkative, changeable</td>
                  <td className="px-4 py-3">Variety, conversation</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-deepteal-50">
                  <td className="px-4 py-3 font-bold text-deepteal-700">Libra</td>
                  <td className="px-4 py-3">Air</td>
                  <td className="px-4 py-3">Diplomatic, harmony‑seeking</td>
                  <td className="px-4 py-3">Balance, partnership</td>
                </tr>
                <tr className="hover:bg-deepteal-50">
                  <td className="px-4 py-3 font-bold text-deepteal-700">Aquarius</td>
                  <td className="px-4 py-3">Air</td>
                  <td className="px-4 py-3">Detached, idealistic, future‑oriented</td>
                  <td className="px-4 py-3">Freedom, causes</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-deepteal-700 mt-3 italic">Air Moons process feelings through the mind and words—they need conversations more than hugs.</p>
        </div>

        {/* Water Moon Signs */}
        <div className="bg-gradient-to-br from-warmaccent-50 to-amber-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm mb-6">
          <h3 className="text-xl font-bold text-warmaccent-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">💧</span>
            Water Moon Signs (Cancer, Scorpio, Pisces)
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-warmaccent-500 to-warmaccent-600 text-white">
                  <th className="px-4 py-3 text-left">Moon Sign</th>
                  <th className="px-4 py-3 text-left">Element</th>
                  <th className="px-4 py-3 text-left">Emotional Style</th>
                  <th className="px-4 py-3 text-left">Needs Most</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-gray-100 hover:bg-warmaccent-50">
                  <td className="px-4 py-3 font-bold text-warmaccent-700">Cancer</td>
                  <td className="px-4 py-3">Water</td>
                  <td className="px-4 py-3">Highly sensitive, nurturing, nostalgic</td>
                  <td className="px-4 py-3">Security, family</td>
                </tr>
                <tr className="border-b border-gray-100 hover:bg-warmaccent-50">
                  <td className="px-4 py-3 font-bold text-warmaccent-700">Scorpio</td>
                  <td className="px-4 py-3">Water</td>
                  <td className="px-4 py-3">Intense, private, all‑or‑nothing</td>
                  <td className="px-4 py-3">Trust, loyalty</td>
                </tr>
                <tr className="hover:bg-warmaccent-50">
                  <td className="px-4 py-3 font-bold text-warmaccent-700">Pisces</td>
                  <td className="px-4 py-3">Water</td>
                  <td className="px-4 py-3">Empathic, dreamy, impressionable</td>
                  <td className="px-4 py-3">Compassion, spiritual space</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-warmaccent-700 mt-3 italic">Water Moons feel deeply—they absorb emotions around them and need safe spaces to recharge.</p>
        </div>

        <BlogImage
          src="/images/blog/moon-sign/section-3.webp"
          alt="12 Moon Signs Emotional Profiles"
          caption="All 12 Moon signs with their emotional styles and core needs"
        />
      </section>

      <SectionDivider />

      {/* Section 4: Moon vs Sun vs Lagna */}
      <section id="moon-vs-sun-vs-lagna">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Target className="w-5 h-5" />
          </span>
          Moon Sign vs Sun Sign vs Lagna
        </h2>

        <p className="leading-relaxed mb-4">
          To really understand yourself, you need the <strong className="text-deepteal-700">trinity</strong>:
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-gradient-to-r from-deepteal-500 to-deepteal-600 rounded-xl p-5 text-white">
            <div className="text-3xl mb-3 text-center">🌅</div>
            <h4 className="font-bold text-lg mb-2 text-center">Lagna (Ascendant)</h4>
            <p className="text-deepteal-100 text-sm text-center">How you appear to the world (outer behavior)</p>
          </div>

          <div className="bg-gradient-to-r from-warmaccent-500 to-warmaccent-600 rounded-xl p-5 text-white">
            <div className="text-3xl mb-3 text-center">🌙</div>
            <h4 className="font-bold text-lg mb-2 text-center">Moon Sign</h4>
            <p className="text-warmaccent-100 text-sm text-center">How you feel internally (emotions, moods)</p>
          </div>

          <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-xl p-5 text-white">
            <div className="text-3xl mb-3 text-center">☀️</div>
            <h4 className="font-bold text-lg mb-2 text-center">Sun Sign</h4>
            <p className="text-amber-100 text-sm text-center">What you strive to be (life purpose, ego)</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-deepteal-700 mb-4">Simple Example</h3>

        <InfoCard title="A Person With Multiple Layers" variant="warmaccent">
          <ul className="space-y-2 text-sm">
            <li>• <strong className="text-warmaccent-700">Lagna in Leo:</strong> Appears confident, bold, expressive</li>
            <li>• <strong className="text-warmaccent-700">Moon in Cancer:</strong> Feels sensitive, needs emotional security, close to family</li>
            <li>• <strong className="text-warmaccent-700">Sun in Capricorn:</strong> Ambitious, career‑focused, disciplined</li>
          </ul>
          <p className="text-sm text-gray-700 mt-3">
            On the outside they look like a natural leader (Leo), deep inside they're emotional (Cancer Moon), and their long‑term life path is about building a strong career and status (Capricorn Sun).
          </p>
        </InfoCard>

        <HighlightBox type="important">
          Yet on social media, they may only post "Leo traits" and wonder why those descriptions don't fully match their inner reality. That's the <strong>Moon sign gap</strong>.
        </HighlightBox>

        <h3 className="text-xl font-bold text-deepteal-700 mt-8 mb-4">Quick Comparison Table</h3>

        <ComparisonTable
          headers={['Factor', 'Lagna (Ascendant)', 'Moon Sign (Rashi)', 'Sun Sign']}
          rows={[
            ['Layer', 'Outer personality', 'Inner emotional world', 'Core identity, purpose'],
            ['Changes', 'Every 2 hours', 'Every 2–3 days', 'Every 30 days'],
            ['Used for', 'Physical traits, approach', 'Feelings, reactions, mental health', 'Ambition, will'],
            ['In daily life', '"How others see me"', '"How I truly feel"', '"What I aim to become"'],
          ]}
        />

        <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-2xl p-6 border border-cream-200 my-6">
          <h4 className="font-bold text-deepteal-800 mb-3">📚 Complete Your Personality Triad:</h4>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              <span className="text-deepteal-600">•</span>
              <Link href={`/${locale}/tools/lagna`} className="text-warmaccent-600 hover:underline font-medium">Lagna Calculator</Link>
              <span className="text-gray-600 text-sm">— Outer personality</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-warmaccent-600">•</span>
              <Link href={`/${locale}/blog/nakshatra-birth-star-guide`} className="text-warmaccent-600 hover:underline font-medium">Nakshatra Calculator</Link>
              <span className="text-gray-600 text-sm">— Birth star traits</span>
            </li>
          </ul>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Relationships & Career */}
      <section id="moon-in-life">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Heart className="w-5 h-5" />
          </span>
          Moon Sign in Relationships & Career
        </h2>

        <h3 className="text-xl font-bold text-deepteal-700 mb-4">Relationships: How You Love & Need to Be Loved</h3>

        <p className="leading-relaxed mb-4">Your Moon sign shows:</p>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          <InfoCard title="Emotional Safety" variant="deepteal">
            <p className="text-sm text-gray-700">What makes you feel emotionally safe in relationships</p>
          </InfoCard>

          <InfoCard title="Nurturing Style" variant="warmaccent">
            <p className="text-sm text-gray-700">How you nurture and care for others</p>
          </InfoCard>

          <InfoCard title="Hurt Patterns" variant="amber">
            <p className="text-sm text-gray-700">What hurts you the most in love and how to heal</p>
          </InfoCard>
        </div>

        <div className="space-y-4 my-6">
          {[
            { sign: 'Cancer Moon', need: 'Needs emotional closeness, can\'t handle cold partners', color: 'deepteal' },
            { sign: 'Aquarius Moon', need: 'Needs space and intellectual connection, not clinginess', color: 'warmaccent' },
            { sign: 'Scorpio Moon', need: 'Needs deep loyalty and honesty; betrayal scars deeply', color: 'amber' },
            { sign: 'Virgo Moon', need: 'Shows love by helping and fixing; needs appreciation, not criticism', color: 'deepteal' },
          ].map((item, index) => (
            <div key={index} className={`flex items-center gap-4 bg-gradient-to-r from-${item.color}-50 to-${item.color}-100 rounded-xl p-4 border border-${item.color}-200`}>
              <div className={`w-10 h-10 flex items-center justify-center rounded-full bg-gradient-to-br from-${item.color}-400 to-${item.color}-500 text-white font-bold text-sm flex-shrink-0`}>
                {index + 1}
              </div>
              <div className="flex-1">
                <span className={`font-bold text-${item.color}-800`}>{item.sign}:</span>
                <span className="text-gray-700 ml-2">{item.need}</span>
              </div>
            </div>
          ))}
        </div>

        <HighlightBox type="tip">
          In compatibility, <strong>Moon‑to‑Moon</strong> and <strong>Moon‑to‑Venus</strong> aspects are more important than just Sun sign matching. Try our <Link href={`/${locale}/tools/marriage-matching`} className="text-warmaccent-600 hover:underline">Marriage Matching Calculator</Link> for detailed compatibility.
        </HighlightBox>

        <h3 className="text-xl font-bold text-deepteal-700 mt-8 mb-4">Career: Work That Feels Emotionally Right</h3>

        <p className="leading-relaxed mb-4">
          While Sun and 10th house show <strong>career path</strong>, Moon shows:
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <InfoCard title="Work Environment" variant="warmaccent">
            <p className="text-sm text-gray-700">What work environment feels comfortable and supportive</p>
          </InfoCard>

          <InfoCard title="Stress Handling" variant="amber">
            <p className="text-sm text-gray-700">How you handle stress and pressure at work</p>
          </InfoCard>

          <InfoCard title="Work Style" variant="deepteal">
            <p className="text-sm text-gray-700">Whether you crave routine, creativity, or social impact</p>
          </InfoCard>

          <InfoCard title="Emotional Needs" variant="highlight">
            <p className="text-sm text-gray-700">What type of recognition and appreciation motivates you</p>
          </InfoCard>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border border-amber-200 shadow-sm my-6">
          <h4 className="text-lg font-bold text-amber-800 mb-4">Career Patterns by Moon Element:</h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border-l-4 border-warmaccent-500">
              <h5 className="font-bold text-warmaccent-700 mb-2">🔥 Fire Moons</h5>
              <p className="text-sm text-gray-700">Thrive in dynamic, competitive fields (sales, entrepreneurship, sports)</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-4 border-amber-500">
              <h5 className="font-bold text-amber-700 mb-2">⛰️ Earth Moons</h5>
              <p className="text-sm text-gray-700">Prefer stable, structured roles (finance, admin, operations)</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-4 border-deepteal-500">
              <h5 className="font-bold text-deepteal-700 mb-2">💨 Air Moons</h5>
              <p className="text-sm text-gray-700">Love communication roles (teaching, marketing, media)</p>
            </div>
            <div className="bg-white rounded-xl p-4 border-l-4 border-warmaccent-500">
              <h5 className="font-bold text-warmaccent-700 mb-2">💧 Water Moons</h5>
              <p className="text-sm text-gray-700">Suit healing, counseling, art, spirituality</p>
            </div>
          </div>
        </div>

        <HighlightBox type="warning">
          If your job constantly <strong>stresses your Moon sign</strong>, burnout is more likely. Choose work that aligns with your emotional nature.
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 6: Remedies */}
      <section id="remedies">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Shield className="w-5 h-5" />
          </span>
          Weak Moon, Remedies & Mind Healing
        </h2>

        <p className="leading-relaxed mb-4">
          When the Moon is <strong>weak, afflicted, or stressed</strong> in your chart (e.g., by Saturn, Rahu, Ketu), you may experience:
        </p>

        <div className="grid md:grid-cols-3 gap-4 my-6">
          <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-xl p-4 border border-warmaccent-200">
            <div className="text-2xl mb-2">😰</div>
            <h4 className="font-bold text-warmaccent-700 mb-1">Mental Stress</h4>
            <p className="text-sm text-gray-700">Mood swings, anxiety, over‑thinking</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-4 border border-amber-200">
            <div className="text-2xl mb-2">😴</div>
            <h4 className="font-bold text-amber-700 mb-1">Sleep Issues</h4>
            <p className="text-sm text-gray-700">Insomnia, restless nights, disturbed sleep patterns</p>
          </div>
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-4 border border-deepteal-200">
            <div className="text-2xl mb-2">😔</div>
            <h4 className="font-bold text-deepteal-700 mb-1">Emotional Void</h4>
            <p className="text-sm text-gray-700">Feeling emotionally unsupported or lonely</p>
          </div>
        </div>

        <HighlightBox type="important">
          Don't panic—Vedic astrology offers powerful, practical remedies to strengthen your Moon.
        </HighlightBox>

        <h3 className="text-xl font-bold text-deepteal-700 mt-8 mb-4">Everyday Remedies for a Stronger Moon</h3>

        <div className="space-y-4 my-6">
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">🙏</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-deepteal-800 text-lg mb-2">Moon Fasting (Somvar Vrat)</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Fast lightly or eat simple food on Mondays</li>
                  <li>• Pray or meditate on Moon energy in the evening</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-6 border border-warmaccent-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-warmaccent-500 to-warmaccent-600 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">🥛</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-warmaccent-800 text-lg mb-2">Donate White Items</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Milk, rice, curd, white clothes to the needy on Mondays</li>
                  <li>• Symbolically strengthens Moon's nourishing energy</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">🌊</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-amber-800 text-lg mb-2">Water & Moonlight Therapy</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Walk near a lake/river in the evening</li>
                  <li>• Sit in full moon light for a few minutes with gratitude</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">👩</span>
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-deepteal-800 text-lg mb-2">Strengthen Motherly Connection</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Respect and care for your mother or mother‑figure</li>
                  <li>• Helping women and children is also Moon‑supportive karma</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-deepteal-700 mt-8 mb-4">Gemstones for Moon</h3>

        <HighlightBox type="warning">
          Only wear gemstones after consulting a qualified astrologer. Use our <Link href={`/${locale}/tools/gemstone-recommender`} className="text-warmaccent-600 hover:underline">Gemstone Recommender</Link> for personalized guidance.
        </HighlightBox>

        <div className="bg-white rounded-2xl p-6 border-2 border-warmaccent-200 shadow-md my-6">
          <div className="flex items-start gap-4">
            <div className="text-4xl flex-shrink-0">💎</div>
            <div className="flex-1">
              <h4 className="font-bold text-warmaccent-800 text-lg mb-3">Pearl (Moti) - Primary Gemstone</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold text-deepteal-700 mb-1">How to Wear:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Set in silver</li>
                    <li>• Worn on little finger of right hand</li>
                    <li>• Activated on Monday</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold text-amber-700 mb-1">Benefits:</p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• Emotional stability, better sleep</li>
                    <li>• Increased intuition and calmness</li>
                    <li>• Improved nurturing ability & relationships</li>
                  </ul>
                </div>
              </div>
              <p className="text-xs text-gray-600 mt-3 italic">
                <strong>Alternative:</strong> Moonstone for mild strengthening
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-xl font-bold text-deepteal-700 mt-8 mb-4">Moon Mantras</h3>

        <p className="leading-relaxed mb-4">Chanting Moon mantras daily helps calm and steady the mind:</p>

        <div className="grid md:grid-cols-2 gap-4 my-6">
          <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-xl p-5 border border-warmaccent-200">
            <h5 className="font-bold text-warmaccent-800 mb-2">Main Mantra</h5>
            <p className="text-lg font-semibold text-warmaccent-700 mb-2 italic">"Om Chandraya Namah"</p>
            <p className="text-sm text-gray-600">Chant 108 times on Mondays</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-5 border border-amber-200">
            <h5 className="font-bold text-amber-800 mb-2">Peace Mantra</h5>
            <p className="text-lg font-semibold text-amber-700 mb-2 italic">"Om Som Somaya Namah"</p>
            <p className="text-sm text-gray-600">For emotional balance and peace</p>
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
          Live Aligned With Your Rashi
        </h2>

        <p className="leading-relaxed mb-4">
          Your <strong className="text-deepteal-700">Moon sign is the key to understanding your emotional operating system</strong>.
        </p>

        <InfoCard title="What Your Moon Sign Reveals" variant="deepteal" icon={<Moon className="w-5 h-5" />}>
          <FeatureList
            variant="check"
            items={[
              'It shows what you feel deeply',
              'It explains why you react the way you do',
              'It guides you toward environments, people, and careers that nourish your mind',
            ]}
          />
        </InfoCard>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-warmaccent-50 to-orange-50 rounded-2xl p-6 border border-warmaccent-200">
            <div className="text-3xl mb-3">❌</div>
            <h4 className="font-bold text-warmaccent-800 mb-2">Living Against Your Moon</h4>
            <p className="text-sm text-gray-700">Life feels like constant friction, stress, and inner conflict</p>
          </div>
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200">
            <div className="text-3xl mb-3">✅</div>
            <h4 className="font-bold text-deepteal-800 mb-2">Living With Your Moon</h4>
            <p className="text-sm text-gray-700">Decisions feel natural, relationships improve, mental peace increases</p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-br from-deepteal-600 to-deepteal-700 rounded-2xl p-8 text-center text-white my-8 shadow-xl">
          <div className="text-4xl mb-4">🌙</div>
          <h3 className="text-2xl font-bold mb-2">Ready to Meet Your Inner Self?</h3>
          <p className="text-deepteal-100 mb-6">Calculate your Moon sign now and start making decisions that align with your emotional truth</p>
          <Link
            href={`/${locale}/tools/moon-sign`}
            className="inline-flex items-center gap-2 bg-warmaccent-500 hover:bg-warmaccent-600 text-white px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-lg hover:shadow-xl"
          >
            <Calculator className="w-5 h-5" />
            Calculate Your Moon Sign (Rashi)
          </Link>
        </div>

        {/* Journey Visual */}
        <div className="bg-gradient-to-r from-deepteal-50 via-warmaccent-50 to-amber-50 rounded-2xl p-6 border border-deepteal-200 shadow-sm my-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-deepteal-500 to-deepteal-600 flex items-center justify-center text-white text-xl shadow-md">
                🔍
              </div>
              <h5 className="font-bold text-deepteal-700 text-sm mb-1">Discover</h5>
              <p className="text-xs text-gray-600">Your Moon sign</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-warmaccent-500 to-warmaccent-600 flex items-center justify-center text-white text-xl shadow-md">
                📖
              </div>
              <h5 className="font-bold text-warmaccent-700 text-sm mb-1">Understand</h5>
              <p className="text-xs text-gray-600">Your emotions</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center text-white text-xl shadow-md">
                🎯
              </div>
              <h5 className="font-bold text-amber-700 text-sm mb-1">Align</h5>
              <p className="text-xs text-gray-600">Your choices</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-gradient-to-br from-deepteal-500 to-warmaccent-500 flex items-center justify-center text-white text-xl shadow-md">
                ✨
              </div>
              <h5 className="font-bold text-deepteal-700 text-sm mb-1">Transform</h5>
              <p className="text-xs text-gray-600">Your life</p>
            </div>
          </div>
        </div>

        <BlogImage
          src="/images/blog/moon-sign/conclusion.webp"
          alt="Moon Sign Journey to Emotional Alignment"
          caption="Your journey: Discover → Understand → Align → Transform your emotional life"
        />

        {/* Related Tools */}
        <h3 className="text-xl font-bold text-deepteal-700 mb-4">Related Tools for a Complete Picture</h3>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <RelatedToolCard
            title="Kundli Generator"
            description="See full birth chart with all planets"
            href={`/${locale}/blog/kundli-birth-chart-guide`}
            icon={<Star className="w-5 h-5" />}
          />
          <RelatedToolCard
            title="Nakshatra Calculator"
            description="Discover your birth star and deeper traits"
            href={`/${locale}/blog/nakshatra-birth-star-guide`}
            icon={<Sparkles className="w-5 h-5" />}
          />
          <RelatedToolCard
            title="Lagna Calculator"
            description="Understand outer personality and life approach"
            href={`/${locale}/tools/lagna`}
            icon={<Sun className="w-5 h-5" />}
          />
          <RelatedToolCard
            title="Sade Sati Calculator"
            description="Check Saturn's impact on your Moon sign"
            href={`/${locale}/tools/sade-sati`}
            icon={<Shield className="w-5 h-5" />}
          />
        </div>

        <HighlightBox type="important">
          Your Moon sign is not here to control you—it's here to <strong>guide</strong> you. Once you understand your emotional wiring, you can stop fighting yourself and start designing a life that truly fits your inner self.
        </HighlightBox>
      </section>
    </div>
  );
}
