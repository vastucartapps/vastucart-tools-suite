'use client';

import Link from 'next/link';
import { RefreshCcw, ArrowRightLeft, Star, Target, Zap, TrendingUp, CheckCircle, Users, Sparkles, Gem, Crown } from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  RelatedToolCard,
  StatsCard,
} from '../blog-content';

interface ParivatanYogaPostProps {
  locale: string;
}

export default function ParivatanYogaPost({ locale }: ParivatanYogaPostProps) {
  return (
    <div className="space-y-8">
      {/* Opening Box */}
      <HighlightBox type="tip">
        <h4 className="font-bold text-teal-800 mb-2">The Exchange of Power Yoga</h4>
        <p className="text-gray-700 text-sm">
          Parivarthan Yoga is one of the rarest and most powerful yogas—created when two planets exchange their house positions.
          This mutual trade creates unusual power and opens unconventional success paths. If your life doesn&apos;t follow the normal path
          yet you succeed in unexpected ways, Parivarthan might be your secret advantage.
        </p>
      </HighlightBox>

      <StatsCard
        stats={[
          { label: 'Type', value: 'Exchange Yoga' },
          { label: 'Rarity', value: 'Very Rare' },
          { label: 'Power Level', value: 'Exceptional' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      {/* Section 1: What Is Parivarthan Yoga */}
      <section id="what-is-parivarthan">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <ArrowRightLeft className="w-5 h-5" />
          </span>
          What Is Parivarthan Yoga?
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          <strong className="text-teal-700">Parivarthan = Exchange/Swap.</strong> Parivarthan Yoga is a <strong>mutual exchange of planetary positions</strong> that creates unusual power. It occurs when two planets occupy each other&apos;s houses in your <Link href={`/${locale}/tools/kundli`} className="text-saffron-600 hover:underline">birth chart</Link>.
        </p>

        <BlogImage
          src="/images/blog/parivartan-yoga/hero.webp"
          alt="Parivarthan Yoga - Planetary Exchange"
          caption="Two planets trading places create extraordinary synergy and unusual success"
        />

        {/* How It Forms */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm mt-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4 flex items-center gap-2">
            <RefreshCcw className="w-5 h-5" />
            How Parivarthan Forms
          </h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <div className="w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">A</div>
              <span className="text-gray-700">Planet A is in Planet B&apos;s house</span>
            </div>
            <div className="flex items-center justify-center">
              <ArrowRightLeft className="w-6 h-6 text-saffron-500" />
            </div>
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <div className="w-8 h-8 bg-saffron-500 text-white rounded-full flex items-center justify-center font-bold text-sm">B</div>
              <span className="text-gray-700">Planet B is in Planet A&apos;s house</span>
            </div>
            <div className="text-center text-teal-700 font-bold text-sm mt-3">
              = Mutual Exchange = Parivarthan Yoga!
            </div>
          </div>
        </div>

        {/* Exchange Mechanism */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm mt-6">
          <h3 className="font-bold text-amber-800 text-lg mb-4 flex items-center gap-2">
            <Sparkles className="w-5 h-5" />
            The Exchange Mechanism
          </h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 text-sm">Each planet accesses other&apos;s power</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 text-sm">Energies amplify each other</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 text-sm">Combined effect exceeds individual</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 text-sm">Creates unique synergy</span>
            </div>
          </div>
        </div>

        <HighlightBox type="note">
          <p className="text-sm text-gray-700">
            <strong className="text-teal-700">Hinglish Reality:</strong> &quot;Parivarthan Yoga matlab do planets apni positions swap karte hain. Iska matlab unusual power aur unconventional success paths. Jo log normal tarike se success nahi pa sakte, Parivarthan wale log unique tarike se bade successful ho jate hain.&quot;
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 2: How to Check */}
      <section id="how-to-check">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <Target className="w-5 h-5" />
          </span>
          How to Check If You Have Parivarthan
        </h2>

        <BlogImage
          src="/images/blog/parivartan-yoga/concept.webp"
          alt="Parivarthan Yoga Concept"
          caption="Mapping planetary house positions to identify exchanges"
        />

        <div className="bg-gradient-to-br from-saffron-50 to-orange-50 rounded-2xl p-6 border border-saffron-200 shadow-sm mt-6">
          <h3 className="font-bold text-saffron-800 text-lg mb-4">Example of Parivarthan Detection</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-saffron-200">
                  <th className="text-left p-2 font-bold text-saffron-800">Planet</th>
                  <th className="text-left p-2 font-bold text-saffron-800">In House</th>
                  <th className="text-left p-2 font-bold text-saffron-800">House Lord</th>
                  <th className="text-left p-2 font-bold text-saffron-800">Lord&apos;s House</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-saffron-100 bg-green-50">
                  <td className="p-2 font-bold text-teal-700">Sun</td>
                  <td className="p-2 text-gray-700">5th</td>
                  <td className="p-2 text-gray-700">Mars</td>
                  <td className="p-2 text-gray-700">1st (Leo)</td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-2 font-bold text-teal-700">Mars</td>
                  <td className="p-2 text-gray-700">1st</td>
                  <td className="p-2 text-gray-700">Sun</td>
                  <td className="p-2 text-gray-700">5th (Aries)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-green-700 mt-3 font-bold">Sun in Mars&apos; house + Mars in Sun&apos;s house = Parivarthan Yoga!</p>
        </div>

        {/* Strength Factors */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-sm mt-6">
          <h3 className="font-bold text-green-800 text-lg mb-4">Parivarthan is Stronger When:</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 text-sm">Both planets are strong</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 text-sm">Exchange involves benefics</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 text-sm">Houses exchanged are important</span>
            </div>
            <div className="flex items-center gap-2 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700 text-sm">Multiple Parivarthans present</span>
            </div>
          </div>
        </div>

        <RelatedToolCard
          title="Check Your Parivarthan Yoga"
          description="Discover if planets exchange positions and access your unusual success potential"
          href={`/${locale}/tools/yoga-calculator`}
        />
      </section>

      <SectionDivider />

      {/* Section 3: The 21 Exchanges */}
      <section id="exchanges">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
            <Star className="w-5 h-5" />
          </span>
          Key Planetary Exchanges
        </h2>

        <BlogImage
          src="/images/blog/parivartan-yoga/analysis.webp"
          alt="Planetary Exchanges Analysis"
          caption="Each exchange creates unique success patterns"
        />

        {/* Exchange Cards - Showing key ones */}
        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-5 border border-amber-200 shadow-sm">
            <h4 className="font-bold text-amber-800 mb-2 flex items-center gap-2">
              <Crown className="w-4 h-4" /> Sun-Jupiter Exchange
            </h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Effect:</strong> Authority with wisdom; natural mentor</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Success:</strong> Through guidance, expansion, growth</p>
            <p className="text-xs text-amber-600 italic">Challenge: Over-expansion, losing focus</p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-5 border border-teal-200 shadow-sm">
            <h4 className="font-bold text-teal-800 mb-2 flex items-center gap-2">
              <Zap className="w-4 h-4" /> Sun-Mars Exchange
            </h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Effect:</strong> Authority with courage; bold leadership</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Success:</strong> Through bold action, taking risks</p>
            <p className="text-xs text-teal-600 italic">Challenge: Recklessness if not controlled</p>
          </div>

          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl p-5 border border-saffron-200 shadow-sm">
            <h4 className="font-bold text-saffron-800 mb-2 flex items-center gap-2">
              <Users className="w-4 h-4" /> Moon-Venus Exchange
            </h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Effect:</strong> Emotions with beauty; artistic sensitivity</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Success:</strong> Through creativity, aesthetics</p>
            <p className="text-xs text-saffron-600 italic">Challenge: Over-sensitivity, dependency</p>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-5 border border-orange-200 shadow-sm">
            <h4 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Mars-Saturn Exchange
            </h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Effect:</strong> Action with discipline; unstoppable persistence</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Success:</strong> Through steady effort, building empire</p>
            <p className="text-xs text-orange-600 italic">Challenge: Slow progress, frustration</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-5 border border-green-200 shadow-sm">
            <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
              <Sparkles className="w-4 h-4" /> Mercury-Jupiter Exchange
            </h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Effect:</strong> Communication with wisdom; intellectual expansion</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Success:</strong> Through teaching, publishing, advising</p>
            <p className="text-xs text-green-600 italic">Challenge: Scattered focus, indecision</p>
          </div>

          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl p-5 border border-gray-300 shadow-sm">
            <h4 className="font-bold text-gray-800 mb-2 flex items-center gap-2">
              <Gem className="w-4 h-4" /> Venus-Saturn Exchange
            </h4>
            <p className="text-sm text-gray-700 mb-2"><strong>Effect:</strong> Desire with restriction; mature relationships</p>
            <p className="text-sm text-gray-700 mb-2"><strong>Success:</strong> Through long-term investments, delayed rewards</p>
            <p className="text-xs text-gray-600 italic">Challenge: Delay in pleasures, loneliness</p>
          </div>
        </div>

        <HighlightBox type="important">
          <p className="font-bold text-teal-700 mb-2">21 Possible Exchanges:</p>
          <p className="text-sm text-gray-700">
            Each of the 7 main planets can exchange with 6 others, creating 21 unique Parivarthan combinations.
            Your specific exchange determines your unique success pathway.
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 4: Success Patterns */}
      <section id="patterns">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <TrendingUp className="w-5 h-5" />
          </span>
          Parivarthan Success Patterns
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          People with Parivarthan often succeed through unconventional means. Your exchange creates unique opportunities that others don&apos;t have.
        </p>

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm">
          <h3 className="font-bold text-teal-800 text-lg mb-4">How Parivarthan Natives Succeed</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700"><strong>Unconventional methods</strong> - paths others don&apos;t see</span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700"><strong>Unexpected opportunities</strong> - luck through exchanges</span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700"><strong>Trades and exchanges</strong> - barter, swaps, deals</span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700"><strong>Networking and connections</strong> - who you know matters</span>
            </div>
            <div className="flex items-center gap-3 bg-white/70 p-3 rounded-lg">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <span className="text-gray-700"><strong>Synchronistic events</strong> - right place, right time</span>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Maximizing */}
      <section id="maximizing">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-100 text-green-600">
            <Zap className="w-5 h-5" />
          </span>
          Maximizing Exchange Power
        </h2>

        <BlogImage
          src="/images/blog/parivartan-yoga/remedy.webp"
          alt="Maximizing Parivarthan Yoga"
          caption="Strategies to activate and maximize your exchange yoga"
        />

        <div className="space-y-4 mt-6">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm">
            <h3 className="font-bold text-amber-800 text-lg mb-3">Strategy #1: Know Your Exchange</h3>
            <p className="text-gray-700 text-sm">Identify exactly which planets exchange and understand what unique opportunities they create. This reveals your unconventional success pathway.</p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm">
            <h3 className="font-bold text-teal-800 text-lg mb-3">Strategy #2: Work Both Planets Together</h3>
            <p className="text-gray-700 text-sm">Don&apos;t separate the exchanging planets. Use both energies simultaneously. If Sun-Jupiter exchange: combine authority (Sun) with wisdom (Jupiter) in everything.</p>
          </div>

          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl p-6 border border-saffron-200 shadow-sm">
            <h3 className="font-bold text-saffron-800 text-lg mb-3">Strategy #3: Embrace Unconventional Paths</h3>
            <p className="text-gray-700 text-sm">Stop trying to succeed conventionally. Your exchange creates unique doorways. Look for trades, exchanges, barters, and deals that others overlook.</p>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-500 to-green-600 text-white flex-shrink-0 shadow-md">
                <Gem className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-bold text-green-800 text-lg mb-2">Strategy #4: Strengthen Both Planets</h3>
                <p className="text-gray-700 text-sm mb-2">Wear gemstones for both exchanging planets. Chant mantras for both. Strengthening both simultaneously amplifies the exchange power exponentially.</p>
                <p className="text-xs text-green-700 font-bold">This creates synergy: 1+1=3</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200 shadow-sm">
            <h3 className="font-bold text-orange-800 text-lg mb-3">Strategy #5: Time Your Actions</h3>
            <p className="text-gray-700 text-sm">During <Link href={`/${locale}/tools/mahadasha`} className="text-saffron-600 hover:underline">Mahadasha</Link> of either exchanging planet, your yoga activates strongly. Use these periods for major moves.</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-teal-100 text-teal-600">
            <Star className="w-5 h-5" />
          </span>
          Embrace Your Uniqueness
        </h2>

        <BlogImage
          src="/images/blog/parivartan-yoga/reference.webp"
          alt="Embrace Your Unique Path"
          caption="Your exchange is your superpower"
        />

        <p className="text-gray-700 mb-6 leading-relaxed">
          <strong>Here&apos;s the truth about Parivarthan Yoga:</strong> It creates <strong>exceptional advantages through unusual means</strong>. Don&apos;t follow the conventional path—your success comes through exchange, networking, and synchronicity.
        </p>

        <HighlightBox type="tip">
          <p className="font-bold text-teal-700 mb-2">People with Parivarthan Yoga excel at:</p>
          <ul className="text-sm text-gray-700 space-y-1 mt-2">
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Trading and exchanges of all kinds</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Networking and leveraging connections</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Finding opportunities others miss</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Unconventional problem-solving</li>
            <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-green-600" /> Creating win-win situations</li>
          </ul>
        </HighlightBox>

        <RelatedToolCard
          title="Unlock Your Exchange Power"
          description="Discover your unique Parivarthan combination and success pathway"
          href={`/${locale}/tools/yoga-calculator`}
        />

        {/* Related Tools */}
        <div className="mt-8">
          <h3 className="font-bold text-teal-800 text-lg mb-4">Related Tools</h3>
          <div className="grid md:grid-cols-2 gap-3">
            <Link href={`/${locale}/tools/kundli`} className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-teal-700">Kundli Generator</p>
              <p className="text-xs text-gray-600">See all planetary positions</p>
            </Link>
            <Link href={`/${locale}/tools/mahadasha`} className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-amber-700">Mahadasha Calculator</p>
              <p className="text-xs text-gray-600">Know when exchange activates</p>
            </Link>
            <Link href={`/${locale}/tools/raj-yoga`} className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-4 border border-saffron-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-saffron-700">Raj Yoga Calculator</p>
              <p className="text-xs text-gray-600">See all positive yogas</p>
            </Link>
            <Link href={`/${locale}/tools/nakshatra`} className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-4 border border-orange-200 hover:shadow-md transition-shadow">
              <p className="font-bold text-orange-700">Nakshatra Calculator</p>
              <p className="text-xs text-gray-600">Understand deeper influences</p>
            </Link>
          </div>
        </div>

        <p className="text-center text-teal-700 font-bold mt-8 text-lg">
          Your unconventional path is your greatest advantage. Embrace it.
        </p>
      </section>
    </div>
  );
}
