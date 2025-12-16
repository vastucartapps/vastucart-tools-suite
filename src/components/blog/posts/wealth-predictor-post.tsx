'use client';

import React from 'react';
import Link from 'next/link';
import {
  DollarSign,
  TrendingUp,
  Clock,
  Target,
  Gem,
  Star,
  CheckCircle,
  Home,
  Gift,
  Briefcase,
  PiggyBank,
  Wallet,
  Coins,
  Award,
  Sparkles,
  Calendar,
  ArrowUpCircle,
  ArrowDownCircle
} from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  StatsCard
} from '../blog-content';

interface WealthPredictorPostProps {
  locale: string;
}

export default function WealthPredictorPost({ locale }: WealthPredictorPostProps) {
  const dhanaYogas = [
    {
      number: 1,
      name: 'Jupiter in 11th House',
      effect: 'Automatic gains, profitable ventures, fulfilled desires',
      frequency: 'Moderate (creates consistent wealth)',
      strength: 'HIGHEST',
      color: 'amber'
    },
    {
      number: 2,
      name: 'Venus in 2nd House',
      effect: 'Comfortable living, artistic income, luxury',
      frequency: 'Common (moderate wealth)',
      strength: 'HIGH',
      color: 'teal'
    },
    {
      number: 3,
      name: 'Mercury + Jupiter Conjunction',
      effect: 'Business success, intellectual profits',
      frequency: 'Less common (strong wealth)',
      strength: 'HIGH',
      color: 'saffron'
    },
    {
      number: 4,
      name: 'Moon-Jupiter Together',
      effect: 'Emotional contentment + financial growth',
      frequency: 'Moderate (balanced wealth)',
      strength: 'MODERATE-HIGH',
      color: 'teal'
    },
    {
      number: 5,
      name: 'Sun in 10th House',
      effect: 'Career wealth, professional success, authority income',
      frequency: 'Common (career-based wealth)',
      strength: 'HIGH',
      color: 'orange'
    }
  ];

  const dashaWealth = [
    { dasha: 'Jupiter Dasha', potential: 'HIGHEST', bestFor: 'Business, investment, wealth growth', color: 'green' },
    { dasha: 'Venus Dasha', potential: 'HIGH', bestFor: 'Luxury, comfort, pleasure spending', color: 'teal' },
    { dasha: 'Mercury Dasha', potential: 'HIGH', bestFor: 'Business, intellect-based earnings', color: 'amber' },
    { dasha: 'Sun Dasha', potential: 'MODERATE', bestFor: 'Career advancement, authority', color: 'saffron' },
    { dasha: 'Moon Dasha', potential: 'MODERATE', bestFor: 'Emotional security, small gains', color: 'teal' },
    { dasha: 'Saturn Dasha', potential: 'LOW-MODERATE', bestFor: 'Slow savings, long-term investments', color: 'gray' },
    { dasha: 'Mars Dasha', potential: 'VARIABLE', bestFor: 'Energy-driven ventures (risky)', color: 'orange' },
    { dasha: 'Rahu Dasha', potential: 'VARIABLE', bestFor: 'Unconventional wealth (unstable)', color: 'orange' },
    { dasha: 'Ketu Dasha', potential: 'LOW', bestFor: 'Losses, spiritual focus, detachment', color: 'gray' }
  ];

  const remedies = [
    {
      number: 1,
      title: 'Jupiter Strengthening',
      icon: Star,
      why: 'Jupiter is the planet of expansion and prosperity',
      how: [
        'Wear Yellow Sapphire (Pukhraj) - ₹3,000-15,000',
        'Chant "Om Gram Greem Graum Sah Guravay Namah" 108 times Thursdays',
        'Donate yellow items on Thursdays',
        'Perform Jupiter Puja on Thursdays'
      ],
      effectiveness: '80-90%'
    },
    {
      number: 2,
      title: '2nd/11th House Strengthening',
      icon: Home,
      why: 'These houses directly govern wealth',
      how: [
        'Identify 2nd/11th house lords',
        'Strengthen them through gemstones',
        'Perform specific pujas',
        'Donate their associated items'
      ],
      effectiveness: '70-80%'
    },
    {
      number: 3,
      title: 'Lakshmi Puja & Wealth Box',
      icon: Sparkles,
      why: 'Attracts wealth energy through spiritual practice',
      how: [
        'Perform monthly Lakshmi Puja (especially full moons)',
        'Create wealth box with turmeric, rice, coins',
        'Chant Lakshmi mantras daily',
        'Give charity regularly'
      ],
      effectiveness: '60-70%'
    },
    {
      number: 4,
      title: 'Timing-Based Action',
      icon: Clock,
      why: 'Taking action during favorable periods multiplies results',
      how: [
        'Identify your financial peak years (Jupiter/Venus Dasha)',
        'Start businesses during these periods',
        'Make major investments',
        'Negotiate salary increases'
      ],
      effectiveness: 'HIGHEST (practical)'
    }
  ];

  return (
    <article className="prose prose-lg max-w-none">
      {/* Introduction */}
      <div className="bg-gradient-to-br from-amber-50 to-saffron-50 rounded-2xl p-8 mb-12 border border-amber-200">
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          <strong className="text-amber-800">&quot;Why do some people attract wealth effortlessly while I struggle financially despite hard work?&quot;</strong>
        </p>
        <p className="text-gray-700 mb-6">
          The answer isn&apos;t luck. It&apos;s written in your birth chart. Your <strong>financial destiny</strong> is determined by specific planetary placements called <Link href={`/${locale}/tools/wealth-money-predictor`} className="text-saffron-600 hover:underline font-semibold">Dhana Yogas</Link> (wealth yogas).
        </p>
        <p className="text-amber-800 font-semibold mb-4">Wealth is not random. It follows astrological patterns.</p>
        <div className="grid md:grid-cols-5 gap-3">
          {[
            { icon: PiggyBank, label: '2nd House', desc: 'What you accumulate' },
            { icon: TrendingUp, label: '11th House', desc: 'What you gain' },
            { icon: Star, label: 'Jupiter/Venus', desc: 'Wealth generators' },
            { icon: Clock, label: 'Saturn transits', desc: 'Wealth cycles' },
            { icon: Calendar, label: 'Dasha timing', desc: 'When money flows' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/70 rounded-lg p-3 text-center">
              <item.icon className="w-5 h-5 mx-auto text-amber-600 mb-1" />
              <p className="text-xs font-bold text-amber-800">{item.label}</p>
              <p className="text-xs text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <BlogImage
        src="/images/blog/wealth-money-predictor/hero.webp"
        alt="Wealth Money Predictor - Your Financial Destiny Calculator"
        caption="Discover your financial destiny through Vedic astrology wealth analysis"
      />

      {/* Stats Card */}
      <StatsCard
        stats={[
          { label: 'Wealth Houses', value: '3 Key' },
          { label: 'Dhana Yogas', value: '5+' },
          { label: 'Based On', value: 'Vedic' },
          { label: 'Calculator', value: 'FREE' },
        ]}
      />

      <HighlightBox type="important">
        <p className="font-bold text-amber-700 mb-2">Critical Truth:</p>
        <p className="text-gray-700 mb-3">You might be working harder than wealthy people but earning less because:</p>
        <ol className="space-y-1 text-gray-700">
          <li>1. You don&apos;t know your financial peak years</li>
          <li>2. Your wealth planets aren&apos;t activated</li>
          <li>3. You&apos;re taking action in wrong periods</li>
          <li>4. You lack the Dhana yogas to sustain wealth</li>
        </ol>
      </HighlightBox>

      <SectionDivider />

      {/* Section 1: What is Financial Destiny */}
      <section id="what-is-wealth" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <DollarSign className="w-5 h-5" />
          </span>
          What is Financial Destiny in Astrology?
        </h2>

        <p className="text-gray-700 mb-6">
          Your birth chart contains a <strong>complete financial roadmap</strong> if you know where to look.
        </p>

        <BlogImage
          src="/images/blog/wealth-money-predictor/concept.webp"
          alt="The Money Trinity in Vedic Astrology"
          caption="Understanding the three elements that determine your financial destiny"
        />

        <h3 className="text-xl font-bold text-teal-700 mb-4">The Money Trinity</h3>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <InfoCard title="1. Wealth Houses" variant="teal">
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>2nd House:</strong> Income, savings, family wealth</li>
              <li><strong>11th House:</strong> Gains, profits, fulfillment of desires</li>
              <li><strong>8th House:</strong> Inheritance, sudden wealth, shared resources</li>
            </ul>
          </InfoCard>
          <InfoCard title="2. Wealth Planets" variant="saffron">
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Jupiter:</strong> Expansion, luck, prosperity</li>
              <li><strong>Venus:</strong> Luxury, comfort, artistic earnings</li>
              <li><strong>Mercury:</strong> Business, commerce, trades</li>
            </ul>
          </InfoCard>
          <InfoCard title="3. Wealth Timing" variant="amber">
            <ul className="text-sm text-gray-700 space-y-2">
              <li>When planets activate wealth houses</li>
              <li>When favorable transits occur</li>
              <li>When your money years arrive</li>
            </ul>
          </InfoCard>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-3">Hinglish Reality</h4>
          <p className="text-gray-700 italic">
            &quot;Astrology mein wealth kabhi random nahi hota. 2nd house, 11th house, Jupiter, Venus—sab kuch specific hote hain. Agar aap apne wealth planets samjh jate ho aur timing jaante ho, toh earning sirf time ka masla hai, talent ka nahi.&quot;
          </p>
          <p className="text-amber-700 text-sm mt-2">
            (Translation: In astrology, wealth is never random. If you understand your wealth planets and timing, earning is just a matter of time, not talent.)
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: How to Check */}
      <section id="how-to-check" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Target className="w-5 h-5" />
          </span>
          How to Check Your Wealth Potential
        </h2>

        <p className="text-gray-700 mb-6">
          You need your complete birth chart with house placements.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">1. Your Complete Birth Chart</h4>
            <p className="text-sm text-teal-700">Must show planetary positions in each house clearly.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">2. Birth Date, Time, Location</h4>
            <p className="text-sm text-amber-700">Precision critical for house placements.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-teal-700 mb-4">Step-by-Step Checking</h3>

        <div className="space-y-4 mb-8">
          <div className="bg-gradient-to-r from-teal-50 to-amber-50 rounded-xl p-5 border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Step 1: Generate Your Birth Chart</h4>
            <p className="text-gray-700">Use our <Link href={`/${locale}/tools/kundli`} className="text-saffron-600 hover:underline">Kundli Calculator</Link> to generate your full birth chart.</p>
          </div>
          <div className="bg-gradient-to-r from-teal-50 to-amber-50 rounded-xl p-5 border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Step 2: Check Wealth Houses</h4>
            <ul className="text-gray-700 text-sm space-y-1">
              <li>• <strong>2nd House Lord</strong> and where it&apos;s placed</li>
              <li>• <strong>11th House Lord</strong> and where it&apos;s placed</li>
              <li>• <strong>Jupiter position</strong> (which house)</li>
              <li>• <strong>Venus position</strong> (which house)</li>
            </ul>
          </div>
          <div className="bg-gradient-to-r from-teal-50 to-amber-50 rounded-xl p-5 border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Step 3: Identify Dhana Yogas</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-teal-200">
                    <th className="text-left py-2 text-teal-700">Yoga</th>
                    <th className="text-left py-2 text-teal-700">Effect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-teal-100">
                    <td className="py-2 font-medium">Jupiter in 1st/5th/9th/11th</td>
                    <td className="py-2 text-gray-600">Luck & expansion</td>
                  </tr>
                  <tr className="border-b border-teal-100">
                    <td className="py-2 font-medium">Venus in 2nd/4th/7th/12th</td>
                    <td className="py-2 text-gray-600">Luxury & comfort</td>
                  </tr>
                  <tr className="border-b border-teal-100">
                    <td className="py-2 font-medium">Mercury in 6th/10th</td>
                    <td className="py-2 text-gray-600">Business success</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Moon-Jupiter together</td>
                    <td className="py-2 text-gray-600">Emotional wealth stability</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-saffron-50 to-amber-50 rounded-xl p-6 border border-saffron-200">
          <h4 className="font-bold text-saffron-800 mb-3">Our Wealth Predictor Tells You:</h4>
          <FeatureList
            items={[
              'Your financial potential (score out of 100)',
              'Strongest wealth houses and planets',
              'When your financial peaks occur',
              'Best years to invest or start business',
              'Specific remedies for wealth activation'
            ]}
            variant="check"
          />
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Wealth Houses */}
      <section id="wealth-houses" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Home className="w-5 h-5" />
          </span>
          The Wealth Houses Explained
        </h2>

        <p className="text-gray-700 mb-8">
          Each wealth house has a specific money meaning in your birth chart.
        </p>

        <BlogImage
          src="/images/blog/wealth-money-predictor/analysis.webp"
          alt="The three wealth houses in Vedic astrology"
          caption="Understanding the 2nd, 11th, and 8th houses for wealth analysis"
        />

        <div className="space-y-6 mt-8">
          {/* 2nd House */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-600 text-white flex-shrink-0 shadow-md">
                <Wallet className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-800 text-lg mb-2">2nd House: Income & Accumulation</h3>
                <p className="text-gray-700 mb-3">What it governs:</p>
                <div className="grid md:grid-cols-2 gap-2 mb-4">
                  {['Salary, income sources', 'Savings & financial security', 'Family inheritance', 'Wealth accumulation ability'].map((item, idx) => (
                    <div key={idx} className="bg-white/60 rounded-lg p-2 text-sm text-teal-700">• {item}</div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-green-700"><strong>Strong 2nd house =</strong> Easy wealth accumulation</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="text-sm text-red-700"><strong>Weak 2nd house =</strong> Struggle to earn/save</p>
                  </div>
                </div>
                <p className="text-xs text-teal-600 mt-3 italic">Remedy: Strengthen 2nd house lord through gemstone, mantra, or donation.</p>
              </div>
            </div>
          </div>

          {/* 11th House */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                <TrendingUp className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">11th House: Gains & Desires</h3>
                <p className="text-gray-700 mb-3">What it governs:</p>
                <div className="grid md:grid-cols-2 gap-2 mb-4">
                  {['Business profits', 'Unexpected gains', 'Fulfillment of wishes', 'Income from multiple sources'].map((item, idx) => (
                    <div key={idx} className="bg-white/60 rounded-lg p-2 text-sm text-amber-700">• {item}</div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-green-700"><strong>Strong 11th house =</strong> Income from many directions</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="text-sm text-red-700"><strong>Weak 11th house =</strong> Single income source</p>
                  </div>
                </div>
                <p className="text-xs text-amber-600 mt-3 italic">Remedy: Jupiter mantras, donations on Thursdays strengthen 11th.</p>
              </div>
            </div>
          </div>

          {/* 8th House */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-2xl p-6 border border-saffron-200">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-saffron-600 text-white flex-shrink-0 shadow-md">
                <Gift className="w-7 h-7" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-saffron-800 text-lg mb-2">8th House: Inheritance & Sudden Wealth</h3>
                <p className="text-gray-700 mb-3">What it governs:</p>
                <div className="grid md:grid-cols-2 gap-2 mb-4">
                  {['Inheritance, insurance payouts', 'Sudden/unexpected wealth', 'Shared resources, marital wealth', 'Hidden assets/discoveries'].map((item, idx) => (
                    <div key={idx} className="bg-white/60 rounded-lg p-2 text-sm text-saffron-700">• {item}</div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-sm text-green-700"><strong>Strong 8th house =</strong> Unexpected financial help</p>
                  </div>
                  <div className="bg-red-50 rounded-lg p-3">
                    <p className="text-sm text-red-700"><strong>Weak 8th house =</strong> Inheritance disputes</p>
                  </div>
                </div>
                <p className="text-xs text-saffron-600 mt-3 italic">Remedy: Saturn practices, respectful ancestor veneration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Dhana Yogas */}
      <section id="dhana-yogas" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Coins className="w-5 h-5" />
          </span>
          Dhana Yogas: Wealth-Generating Combinations
        </h2>

        <p className="text-gray-700 mb-8">
          These are the wealth-creating planetary configurations that bring financial prosperity.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {dhanaYogas.map((yoga) => {
            const colorMap: Record<string, { bg: string; border: string; num: string; text: string; badge: string }> = {
              amber: { bg: 'from-amber-50 to-amber-100', border: 'border-amber-200', num: 'bg-amber-500', text: 'text-amber-800', badge: 'bg-amber-100 text-amber-700' },
              teal: { bg: 'from-teal-50 to-teal-100', border: 'border-teal-200', num: 'bg-teal-500', text: 'text-teal-800', badge: 'bg-teal-100 text-teal-700' },
              saffron: { bg: 'from-saffron-50 to-saffron-100', border: 'border-saffron-200', num: 'bg-saffron-500', text: 'text-saffron-800', badge: 'bg-saffron-100 text-saffron-700' },
              orange: { bg: 'from-orange-50 to-orange-100', border: 'border-orange-200', num: 'bg-orange-500', text: 'text-orange-800', badge: 'bg-orange-100 text-orange-700' }
            };
            const colors = colorMap[yoga.color];

            return (
              <div key={yoga.number} className={`bg-gradient-to-br ${colors.bg} rounded-xl p-5 border ${colors.border} hover:shadow-md transition-shadow`}>
                <div className="flex items-center gap-2 mb-3">
                  <span className={`${colors.num} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm`}>
                    {yoga.number}
                  </span>
                  <h4 className={`font-bold ${colors.text} text-sm`}>{yoga.name}</h4>
                </div>
                <p className="text-gray-700 text-sm mb-3">{yoga.effect}</p>
                <div className="flex flex-wrap gap-2">
                  <span className={`${colors.badge} text-xs px-2 py-1 rounded-full`}>{yoga.frequency}</span>
                  <span className={`${colors.badge} text-xs px-2 py-1 rounded-full font-bold`}>{yoga.strength}</span>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Financial Peak Years */}
      <section id="peak-years" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Calendar className="w-5 h-5" />
          </span>
          Your Financial Peak Years
        </h2>

        <p className="text-gray-700 mb-6">
          Wealth doesn&apos;t grow evenly. It peaks during specific <Link href={`/${locale}/tools/mahadasha`} className="text-saffron-600 hover:underline">Dasha periods</Link>.
        </p>

        <BlogImage
          src="/images/blog/wealth-money-predictor/timeline.webp"
          alt="Financial peak years by Dasha period"
          caption="Understanding when your wealth peaks based on planetary periods"
        />

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-amber-500 to-saffron-600 text-white">
                <th className="px-4 py-3 text-left">Dasha</th>
                <th className="px-4 py-3 text-left">Wealth Potential</th>
                <th className="px-4 py-3 text-left">Best For</th>
              </tr>
            </thead>
            <tbody>
              {dashaWealth.map((row, idx) => {
                const potentialColors: Record<string, string> = {
                  'HIGHEST': 'text-green-600 font-bold',
                  'HIGH': 'text-teal-600 font-semibold',
                  'MODERATE': 'text-amber-600',
                  'LOW-MODERATE': 'text-orange-600',
                  'VARIABLE': 'text-orange-500',
                  'LOW': 'text-gray-500'
                };
                return (
                  <tr key={row.dasha} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-bold text-teal-700">{row.dasha}</td>
                    <td className={`px-4 py-3 ${potentialColors[row.potential]}`}>{row.potential}</td>
                    <td className="px-4 py-3 text-gray-700">{row.bestFor}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200">
            <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <ArrowUpCircle className="w-5 h-5" />
              During Jupiter Dasha (Coming Soon)
            </h4>
            <p className="text-sm text-gray-700 mb-3">If Jupiter Dasha is coming in 2 years, you should:</p>
            <FeatureList
              items={[
                'Plan major investments',
                'Start business ventures',
                'Expand operations',
                'Take calculated risks'
              ]}
              variant="check"
            />
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-orange-100 rounded-xl p-6 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
              <ArrowDownCircle className="w-5 h-5" />
              During Saturn Dasha
            </h4>
            <p className="text-sm text-gray-700 mb-3">During Saturn period, focus on:</p>
            <FeatureList
              items={[
                'Save and consolidate',
                'Build long-term investments',
                'Avoid risky ventures',
                'Practice patience'
              ]}
              variant="check"
            />
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Remedies */}
      <section id="remedies" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Gem className="w-5 h-5" />
          </span>
          Money Remedies & Activation Strategies
        </h2>

        <BlogImage
          src="/images/blog/wealth-money-predictor/remedy.webp"
          alt="Wealth remedies and activation strategies"
          caption="Proven remedies to strengthen your wealth planets and activate prosperity"
        />

        <div className="space-y-6 mt-8">
          {remedies.map((remedy) => {
            const IconComponent = remedy.icon;
            return (
              <div key={remedy.number} className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl p-6 border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-teal-800 text-lg mb-2">
                      Remedy #{remedy.number}: {remedy.title}
                    </h3>
                    <p className="text-saffron-700 text-sm mb-3"><strong>Why:</strong> {remedy.why}</p>
                    <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
                      <p className="font-medium text-teal-700 text-sm mb-2">How:</p>
                      <ul className="space-y-1">
                        {remedy.how.map((item, idx) => (
                          <li key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <p className="text-amber-700 font-medium text-sm mt-3">Effectiveness: {remedy.effectiveness}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Award className="w-5 h-5" />
          </span>
          Conclusion: Attract Your Wealth
        </h2>

        <div className="bg-gradient-to-br from-amber-50 via-saffron-50 to-teal-50 rounded-2xl p-8 border border-amber-200">
          <p className="text-xl text-amber-800 font-semibold mb-6">
            Wealth is predictable. Your birth chart contains your complete financial roadmap.
          </p>

          <p className="text-gray-700 mb-4">The difference between wealthy and struggling people:</p>
          <FeatureList
            items={[
              'Wealthy people understand their wealth houses',
              'Wealthy people recognize their peak years',
              'Wealthy people take action in favorable periods',
              'Wealthy people strengthen weak planets'
            ]}
            variant="check"
          />

          <div className="bg-white/80 rounded-xl p-6 border border-amber-100 my-6">
            <p className="text-amber-800 font-bold mb-3">You now have this knowledge.</p>
            <p className="text-gray-700">
              What you do with it determines your financial future.
            </p>
          </div>

          <HighlightBox type="tip">
            <p className="font-bold text-teal-700 mb-2">Success Formula:</p>
            <p className="text-gray-700">
              <strong>Remedies (30%) + Effort (70%) = Success</strong><br />
              Remedies without effort = Nothing<br />
              Effort without timing = Slower results
            </p>
          </HighlightBox>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-amber-600 to-saffron-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">💰 Discover Your Financial Destiny</h3>
        <p className="text-amber-100 mb-6">Check your wealth potential and identify your financial peak years</p>
        <Link
          href={`/${locale}/tools/wealth-money-predictor`}
          className="inline-block bg-white text-amber-700 font-bold py-3 px-8 rounded-xl hover:bg-amber-50 transition-colors shadow-lg"
        >
          Calculate Your Wealth Potential →
        </Link>
      </div>

      {/* Related Tools */}
      <div className="mt-12 bg-gradient-to-br from-cream-50 to-teal-50 rounded-2xl p-8 border border-teal-100">
        <h3 className="text-xl font-bold text-teal-800 mb-6">Related Tools for Financial Mastery</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href={`/${locale}/tools/kundli`} className="bg-white rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-teal-700 group-hover:text-saffron-600 transition-colors">Kundli Generator</h4>
            <p className="text-sm text-gray-600">See your wealth houses</p>
          </Link>
          <Link href={`/${locale}/tools/mahadasha`} className="bg-white rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-teal-700 group-hover:text-saffron-600 transition-colors">Mahadasha Calculator</h4>
            <p className="text-sm text-gray-600">Know your financial peak years</p>
          </Link>
          <Link href={`/${locale}/tools/raj-yoga`} className="bg-white rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-teal-700 group-hover:text-saffron-600 transition-colors">Raj Yoga Calculator</h4>
            <p className="text-sm text-gray-600">Royal success combinations</p>
          </Link>
          <Link href={`/${locale}/tools/lucky-number`} className="bg-white rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-teal-700 group-hover:text-saffron-600 transition-colors">Lucky Number</h4>
            <p className="text-sm text-gray-600">Personal power numbers</p>
          </Link>
        </div>
      </div>
    </article>
  );
}
