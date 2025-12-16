'use client';

import React from 'react';
import Link from 'next/link';
import {
  Crown,
  Star,
  TrendingUp,
  Clock,
  Target,
  Zap,
  CheckCircle,
  XCircle,
  Sparkles,
  Users,
  DollarSign,
  Heart,
  Briefcase,
  Home,
  Award,
  Lightbulb,
  Shield,
  Moon,
  Sun,
  Gem
} from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  StatsCard
} from '../blog-content';

interface RajYogaPostProps {
  locale: string;
}

export default function RajYogaPost({ locale }: RajYogaPostProps) {
  const rajYogas = [
    {
      number: 1,
      name: 'Panch Maha Purusha Yoga',
      subtitle: 'The King of Yogas',
      description: 'When Mars, Mercury, Jupiter, Venus, or Saturn are exalted or in own signs in certain houses',
      effect: 'Makes you a leader, successful, wealthy, respected',
      example: 'Elon Musk, Warren Buffett (likely possess variations)',
      impact: 'Highest success potential, natural leadership',
      color: 'amber'
    },
    {
      number: 2,
      name: 'Gaja Kesari Yoga',
      subtitle: 'Elephant-Lion Yoga',
      description: 'Jupiter and Moon in Kendra (1st, 4th, 7th, 10th houses)',
      effect: 'Great wisdom, wealth, intelligence, respect',
      example: 'Fairly common',
      impact: 'Intelligence multiplied, quick learning, respected thinker',
      color: 'teal'
    },
    {
      number: 3,
      name: 'Dharmakarmadhipati Yoga',
      subtitle: 'Spiritual-Material Balance',
      description: 'When lords of 9th and 10th houses connect or combine',
      effect: 'Spiritual success + material success together',
      example: 'Common among spiritual leaders and successful professionals',
      impact: 'Balance of spiritual and material abundance',
      color: 'saffron'
    },
    {
      number: 4,
      name: 'Viparita Raja Yoga',
      subtitle: 'Reverse Raj Yoga',
      description: 'When lords of 6th, 8th, or 12th houses in these houses or connect',
      effect: 'Converts obstacles into success',
      example: 'More common than Panch Maha Purusha',
      impact: 'Overcoming challenges creates strength',
      color: 'orange'
    },
    {
      number: 5,
      name: 'Chamara Yoga',
      subtitle: 'Whisk Yoga',
      description: 'When all planets are in the same half of the chart',
      effect: 'Concentrated power, single-minded focus',
      example: 'Moderate frequency',
      impact: 'Laser focus, complete dedication to goals',
      color: 'teal'
    },
    {
      number: 6,
      name: 'Kesari Yoga',
      subtitle: 'Lion Yoga',
      description: 'Jupiter in Kendra (1st, 4th, 7th, 10th) from Moon',
      effect: 'Authority, command, respect, wealth',
      example: 'Moderately common',
      impact: 'Natural authority figure, people listen to you',
      color: 'amber'
    },
    {
      number: 7,
      name: 'Amala Yoga',
      subtitle: 'Spotless Reputation',
      description: 'Benefics in 10th house',
      effect: 'Spotless reputation, success, recognition',
      example: 'Common among successful people',
      impact: 'People trust you naturally, career success',
      color: 'saffron'
    },
    {
      number: 8,
      name: 'Vasumati Yoga',
      subtitle: 'Wealth Yoga',
      description: 'Benefics in 2nd, 7th, 11th houses',
      effect: 'Wealth accumulation, prosperity',
      example: 'Common among wealthy people',
      impact: 'Money flows naturally, financial ease',
      color: 'amber'
    },
    {
      number: 9,
      name: 'Saraswati Yoga',
      subtitle: 'Wisdom Yoga',
      description: 'Mercury, Venus, Jupiter in specific combinations',
      effect: 'Intelligence, wit, eloquence, learning',
      example: 'Common among scholars, writers, speakers',
      impact: 'Communication excellence, intellectual power',
      color: 'teal'
    },
    {
      number: 10,
      name: 'Parivartan Yoga',
      subtitle: 'Exchange Yoga',
      description: 'When lords of two houses exchange positions',
      effect: 'Powerful exchange of energies, unusual success patterns',
      example: 'Rare, very powerful when present',
      impact: 'Unique advantages, unconventional success',
      color: 'orange'
    },
    {
      number: 11,
      name: 'Yoga Karaka Planets',
      subtitle: 'Natural Benefics',
      description: 'Planets that rule benefic houses for your chart',
      effect: 'Automatic advantage, house-specific success',
      example: 'Everyone has at least 1-2',
      impact: 'Natural talent in specific areas',
      color: 'saffron'
    },
    {
      number: 12,
      name: 'Darakaraka Yoga',
      subtitle: 'Partnership Yoga',
      description: 'Specific Venus placements indicating marriage success',
      effect: 'Harmonious marriage, partnership, relationships',
      example: 'Common, varies in strength',
      impact: 'Relationship ease, partner support',
      color: 'teal'
    }
  ];

  const strategies = [
    {
      number: 1,
      title: 'Understand Your Raj Yoga Timing',
      icon: Clock,
      description: 'Use Mahadasha Calculator to find when your Raj Yoga activates.',
      tip: 'Don\'t wait for it to activate accidentally—plan for it.',
      example: 'If you know Jupiter Mahadasha starts in 2 years, prepare your major goals and plans NOW so you\'re ready when it arrives.'
    },
    {
      number: 2,
      title: 'Align Your Career with Your Raj Yoga',
      icon: Briefcase,
      description: 'Different house placements indicate different success areas.',
      tip: 'Match your career path to your Raj Yoga house.',
      example: '10th house → Career success. 4th house → Real estate. 7th house → Partnerships. 1st house → Personal brand.'
    },
    {
      number: 3,
      title: 'Take Calculated Risks During Activation',
      icon: Target,
      description: 'When your Raj Yoga is active, your success rate is highest.',
      tip: 'Start businesses, change careers, launch projects during activation.',
      example: 'Ask for promotions, make investments, take the leap during your Raj Yoga period.'
    },
    {
      number: 4,
      title: 'Strengthen Your Raj Yoga Planet',
      icon: Gem,
      description: 'Amplify your advantage through gemstones and mantras.',
      tip: 'If Jupiter creates your Raj Yoga, strengthen Jupiter.',
      example: 'Wear Yellow Sapphire, chant Jupiter mantra, donate on Thursdays, perform Jupiter pujas.'
    },
    {
      number: 5,
      title: 'Don\'t Squander Through Laziness',
      icon: Shield,
      description: 'Raj Yoga is a gift, not a guarantee.',
      tip: 'Work actively during your advantage windows.',
      example: 'People who fail with Raj Yoga usually assume success will come without effort.'
    }
  ];

  return (
    <article className="prose prose-lg max-w-none">
      {/* Introduction */}
      <div className="bg-gradient-to-br from-amber-50 to-saffron-50 rounded-2xl p-8 mb-12 border border-amber-200">
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          <strong className="text-amber-800">&quot;Why do some people succeed effortlessly while others struggle despite hard work?&quot;</strong>
        </p>
        <p className="text-gray-700 mb-6">
          The answer might be in your birth chart. Welcome to <strong>Raj Yoga</strong>—the most coveted combination in Vedic astrology.
        </p>
        <p className="text-gray-700 mb-4">
          <Link href={`/${locale}/tools/raj-yoga`} className="text-saffron-600 hover:underline font-semibold">Raj Yoga</Link> literally means &quot;Royal Yoga&quot;—a combination of planets that creates <strong>AUTOMATIC success</strong>.
        </p>
        <div className="grid md:grid-cols-3 gap-3 mt-6">
          {[
            { icon: TrendingUp, text: 'Effortless success' },
            { icon: Sparkles, text: 'Unexpected opportunities' },
            { icon: Crown, text: 'Natural leadership' },
            { icon: DollarSign, text: 'Wealth accumulation' },
            { icon: Heart, text: 'Health & longevity' },
            { icon: Award, text: 'Fame & recognition' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/70 rounded-lg p-3 flex items-center gap-2">
              <item.icon className="w-5 h-5 text-amber-600" />
              <p className="text-sm text-gray-700 font-medium">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <BlogImage
        src="/images/blog/raj-yoga/hero.webp"
        alt="Raj Yoga Calculator - Unlock your royal success and luck"
        caption="Raj Yoga: The planetary combination that creates automatic success"
      />

      {/* Stats Card */}
      <StatsCard
        stats={[
          { label: 'Effort Multiplier', value: '10X' },
          { label: 'Types of Yogas', value: '12+' },
          { label: 'Based On', value: 'Vedic' },
          { label: 'Calculator', value: 'FREE' },
        ]}
      />

      <HighlightBox type="important">
        <p className="font-bold text-amber-700 mb-2">Critical Truth:</p>
        <p className="text-gray-700">
          Having Raj Yoga doesn&apos;t mean you&apos;ll sit idle and succeed. It means <strong>your efforts multiply exponentially</strong>.
          The same work that would give you 10% results without Raj Yoga gives you 100% results WITH it.
        </p>
      </HighlightBox>

      <SectionDivider />

      {/* Section 1: What Is Raj Yoga */}
      <section id="what-is-raj-yoga" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Crown className="w-5 h-5" />
          </span>
          What Is Raj Yoga?
        </h2>

        <p className="text-gray-700 mb-6">
          <strong>Raj = King/Royal. Yoga = Combination/Union.</strong> Raj Yoga is a planetary combination that creates automatic success and effortless achievement.
        </p>

        <BlogImage
          src="/images/blog/raj-yoga/benefits.webp"
          alt="Benefits of Raj Yoga in Vedic astrology"
          caption="Raj Yoga amplifies your ability to succeed, attract opportunities, and lead"
        />

        <InfoCard title="How Raj Yoga Works" variant="teal">
          <p className="text-gray-700 mb-4">Unlike doshas (negative afflictions), Raj Yogas are <strong>positive combinations</strong> that amplify your:</p>
          <FeatureList
            items={[
              'Ability to succeed',
              'Power to attract opportunities',
              'Capacity to lead',
              'Potential for wealth',
              'Natural charisma'
            ]}
            variant="check"
          />
        </InfoCard>

        <InfoCard title="The Science Behind Raj Yoga" variant="saffron">
          <p className="text-gray-700 mb-4">Raj Yoga occurs when powerful planets combine in specific ways:</p>
          <div className="grid md:grid-cols-2 gap-3">
            <div className="bg-white/60 rounded-lg p-3">
              <p className="font-medium text-saffron-700">Strong planets in power houses</p>
              <p className="text-sm text-gray-600">1st, 4th, 7th, 10th houses</p>
            </div>
            <div className="bg-white/60 rounded-lg p-3">
              <p className="font-medium text-saffron-700">Planets in own/exalted signs</p>
              <p className="text-sm text-gray-600">Maximum planetary strength</p>
            </div>
            <div className="bg-white/60 rounded-lg p-3">
              <p className="font-medium text-saffron-700">Benefic planets protecting chart</p>
              <p className="text-sm text-gray-600">Jupiter, Venus, Mercury</p>
            </div>
            <div className="bg-white/60 rounded-lg p-3">
              <p className="font-medium text-saffron-700">Specific planetary partnerships</p>
              <p className="text-sm text-gray-600">Raja Yoga combinations</p>
            </div>
          </div>
        </InfoCard>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 my-8">
          <h4 className="font-bold text-green-800 mb-3">Why Some People Succeed Effortlessly</h4>
          <p className="text-gray-700 mb-3">People with Raj Yoga experience:</p>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              'Opportunities come naturally',
              'People want to help them',
              'Right connections at right time',
              'Good health without trying',
              'Wealth accumulation despite modest effort',
              'Recognition and respect'
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-2 text-green-700">
                <CheckCircle className="w-4 h-4 flex-shrink-0" />
                <span className="text-sm">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-green-700 mt-4 font-medium">This isn&apos;t luck—it&apos;s planetary positioning creating advantage.</p>
        </div>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-3">Hinglish Reality</h4>
          <p className="text-gray-700 italic">
            &quot;Raj Yoga ka matlab yeh nahi ki aap kuch nahi karoge aur sab kuch mil jayega. Matlab aapka effort, aapka work 10 baar zyada powerful hota hai. Same business jo doosre ko 100 saal mein success dilaye, woh aapko 10 saal mein de sakte hain.&quot;
          </p>
          <p className="text-amber-700 text-sm mt-2">
            (Translation: Raj Yoga doesn&apos;t mean you do nothing and everything comes. It means your effort is 10x more powerful. Same business that takes others 100 years can give you success in 10 years.)
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
          How to Check If You Have Raj Yoga
        </h2>

        <p className="text-gray-700 mb-6">
          You need your complete birth chart to identify Raj Yogas.
        </p>

        <BlogImage
          src="/images/blog/raj-yoga/process.webp"
          alt="How to check for Raj Yoga in your birth chart"
          caption="Step-by-step process to identify your Raj Yogas"
        />

        <div className="grid md:grid-cols-2 gap-4 mb-8">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">1. Your Complete Birth Chart</h4>
            <p className="text-sm text-teal-700">Must show all planetary positions and houses clearly.</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">2. Birth Date, Time, Location</h4>
            <p className="text-sm text-amber-700">Precision required for accurate assessment.</p>
          </div>
        </div>

        <h3 className="text-xl font-bold text-teal-700 mb-4">Raj Yoga Indicators</h3>

        <div className="space-y-4 mb-8">
          {[
            { title: 'Strong 10th House', desc: '10th house = career, success, achievement. Planets here act like amplifiers for ambition. Multiple benefics in 10th = strong Raj Yoga.' },
            { title: 'Benefic Planets in Power Houses', desc: '1st, 4th, 7th, 10th houses = power positions. Jupiter, Venus, Mercury here = Raj Yoga. Sun, Moon here (strong) = Raj Yoga.' },
            { title: 'Exalted/Own Sign Planets', desc: 'Planets in their strongest positions create Raj Yoga. Jupiter in Cancer (exalted) = strong Raj Yoga. Saturn in Libra (exalted) = strong Raj Yoga.' },
            { title: 'Raja Yoga Partnerships', desc: 'Specific planet combinations create Raj Yogas. Lord of 9th in 10th house = Raja Yoga. Lord of 4th with 9th lord = Raja Yoga.' }
          ].map((indicator, idx) => (
            <div key={idx} className="bg-gradient-to-r from-teal-50 to-amber-50 rounded-xl p-5 border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Indicator {idx + 1}: {indicator.title}</h4>
              <p className="text-sm text-gray-700">{indicator.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-saffron-50 to-amber-50 rounded-xl p-6 border border-saffron-200">
          <h4 className="font-bold text-saffron-800 mb-3">Our Raj Yoga Calculator Tells You:</h4>
          <FeatureList
            items={[
              'Which Raj Yogas you have (specific names)',
              'Strength of each Raj Yoga (Mild/Moderate/Strong)',
              'Which life areas benefit most',
              'When your Raj Yogas activate',
              'How to maximize them'
            ]}
            variant="check"
          />
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: The 12 Major Raj Yogas */}
      <section id="twelve-yogas" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Star className="w-5 h-5" />
          </span>
          The 12 Major Raj Yogas Explained
        </h2>

        <p className="text-gray-700 mb-8">
          Here are the most common and powerful Raj Yogas in Vedic astrology.
        </p>

        <BlogImage
          src="/images/blog/raj-yoga/reference.webp"
          alt="12 Major Raj Yogas in Vedic Astrology"
          caption="Complete guide to all 12 major Raj Yoga combinations"
        />

        <div className="grid md:grid-cols-2 gap-4 mt-8">
          {rajYogas.map((yoga) => {
            const colorMap: Record<string, { bg: string; border: string; num: string; text: string }> = {
              amber: { bg: 'from-amber-50 to-amber-100', border: 'border-amber-200', num: 'bg-amber-500', text: 'text-amber-800' },
              teal: { bg: 'from-teal-50 to-teal-100', border: 'border-teal-200', num: 'bg-teal-500', text: 'text-teal-800' },
              saffron: { bg: 'from-saffron-50 to-saffron-100', border: 'border-saffron-200', num: 'bg-saffron-500', text: 'text-saffron-800' },
              orange: { bg: 'from-orange-50 to-orange-100', border: 'border-orange-200', num: 'bg-orange-500', text: 'text-orange-800' }
            };
            const colors = colorMap[yoga.color];

            return (
              <div key={yoga.number} className={`bg-gradient-to-br ${colors.bg} rounded-xl p-5 border ${colors.border} hover:shadow-md transition-shadow`}>
                <div className="flex items-start gap-3 mb-3">
                  <span className={`${colors.num} text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                    {yoga.number}
                  </span>
                  <div>
                    <h4 className={`font-bold ${colors.text}`}>{yoga.name}</h4>
                    <p className="text-xs text-gray-600">{yoga.subtitle}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-700"><strong>What:</strong> {yoga.description}</p>
                  <p className="text-gray-700"><strong>Effect:</strong> {yoga.effect}</p>
                  <p className="text-gray-600 text-xs"><strong>Frequency:</strong> {yoga.example}</p>
                  <div className="bg-white/60 rounded-lg p-2 mt-2">
                    <p className={`${colors.text} font-medium text-xs`}>Impact: {yoga.impact}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Activation */}
      <section id="activation" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Zap className="w-5 h-5" />
          </span>
          How Raj Yoga Activates in Your Life
        </h2>

        <p className="text-gray-700 mb-6">
          Having Raj Yoga doesn&apos;t mean instant success. It means <strong>potential</strong>.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <InfoCard title="Requirement #1: Timing" variant="teal">
            <p className="text-gray-700 text-sm mb-2">Raj Yogas activate during:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Their own <Link href={`/${locale}/tools/mahadasha`} className="text-saffron-600 hover:underline">Mahadasha</Link></li>
              <li>• Favorable transits</li>
              <li>• During their strengths</li>
            </ul>
          </InfoCard>
          <InfoCard title="Requirement #2: Effort" variant="saffron">
            <p className="text-gray-700 text-sm mb-2">Raj Yoga amplifies your effort:</p>
            <div className="space-y-1 text-sm">
              <p className="text-red-600">❌ Sitting idle = wasted potential</p>
              <p className="text-green-600">✅ Working smart = exponential success</p>
            </div>
          </InfoCard>
          <InfoCard title="Requirement #3: Alignment" variant="amber">
            <p className="text-gray-700 text-sm mb-2">Works best when you&apos;re:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Working toward life purpose</li>
              <li>• Aligned with talents</li>
              <li>• Acting ethically</li>
            </ul>
          </InfoCard>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                <th className="px-4 py-3 text-left">Stage</th>
                <th className="px-4 py-3 text-left">What Happens</th>
                <th className="px-4 py-3 text-left">How to Respond</th>
              </tr>
            </thead>
            <tbody>
              {[
                { stage: 'Awareness', what: 'You discover your Raj Yoga', how: 'Accept your advantage' },
                { stage: 'Activation', what: 'Mahadasha/transits trigger it', how: 'Work actively' },
                { stage: 'Amplification', what: 'Your efforts start multiplying', how: 'Sustain focus' },
                { stage: 'Manifestation', what: 'Success appears', how: 'Maintain momentum' }
              ].map((row, idx) => (
                <tr key={row.stage} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-bold text-teal-700">{row.stage}</td>
                  <td className="px-4 py-3 text-gray-700">{row.what}</td>
                  <td className="px-4 py-3 text-gray-700">{row.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Timing */}
      <section id="timing" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Clock className="w-5 h-5" />
          </span>
          Timing: When Your Raj Yoga Works
        </h2>

        <p className="text-gray-700 mb-6">
          Raj Yogas don&apos;t work constantly. They have <strong>activation windows</strong>.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200">
            <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
              <Sun className="w-5 h-5" />
              Strong Raj Yoga Periods
            </h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-green-700">During Mahadasha of Raj Yoga Planet</p>
                <p className="text-sm text-gray-600">Jupiter Mahadasha = 16 years of amplified success. This is your prime success window.</p>
              </div>
              <div>
                <p className="font-medium text-green-700">During Favorable Transits</p>
                <p className="text-sm text-gray-600">Saturn in 10th house = career peak. Jupiter in 10th = maximum career support.</p>
              </div>
              <div>
                <p className="font-medium text-green-700">During Antardasha (Sub-periods)</p>
                <p className="text-sm text-gray-600">Mercury Antardasha within Jupiter Mahadasha = intellectual success peaks.</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
            <h4 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
              <Moon className="w-5 h-5" />
              Weak Raj Yoga Periods
            </h4>
            <div className="space-y-4">
              <div>
                <p className="font-medium text-orange-700">During Inauspicious Transits</p>
                <p className="text-sm text-gray-600">Saturn retrograde (opposite of normal). These periods require more effort.</p>
              </div>
              <div>
                <p className="font-medium text-orange-700">Rahu Crossing Success Houses</p>
                <p className="text-sm text-gray-600">Creates confusion and misdirection. Stay grounded during these times.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Maximizing */}
      <section id="maximizing" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <TrendingUp className="w-5 h-5" />
          </span>
          Maximizing Your Raj Yoga Potential
        </h2>

        <p className="text-gray-700 mb-8">
          Here&apos;s how to unlock your full royal advantage:
        </p>

        <BlogImage
          src="/images/blog/raj-yoga/guide.webp"
          alt="5 strategies to maximize Raj Yoga potential"
          caption="Strategic approaches to maximize your Raj Yoga benefits"
        />

        <div className="space-y-6 mt-8">
          {strategies.map((strategy) => {
            const IconComponent = strategy.icon;
            return (
              <div key={strategy.number} className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl p-6 border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-teal-800 text-lg mb-2">
                      Strategy #{strategy.number}: {strategy.title}
                    </h3>
                    <p className="text-gray-700 mb-3">{strategy.description}</p>
                    <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
                      <p className="text-saffron-700 font-medium text-sm mb-2">💡 {strategy.tip}</p>
                      <p className="text-gray-600 text-sm">{strategy.example}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <HighlightBox type="warning">
          <p className="font-bold text-orange-700 mb-2">People with Strong Raj Yogas Who Fail:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-700 mb-2">❌ Why they fail:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Assume success without effort</li>
                <li>• Procrastinate during activation</li>
                <li>• Lack discipline or focus</li>
                <li>• Act unethically</li>
              </ul>
            </div>
            <div>
              <p className="text-sm text-gray-700 mb-2">✅ Why others succeed:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Work smarter, not just harder</li>
                <li>• Use timing strategically</li>
                <li>• Act with integrity</li>
                <li>• Maintain momentum</li>
              </ul>
            </div>
          </div>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Crown className="w-5 h-5" />
          </span>
          Conclusion: Own Your Royalty
        </h2>

        <div className="bg-gradient-to-br from-amber-50 via-saffron-50 to-teal-50 rounded-2xl p-8 border border-amber-200">
          <p className="text-xl text-amber-800 font-semibold mb-6">
            Your birth chart isn&apos;t random. It&apos;s a blueprint of your advantage.
          </p>

          <p className="text-gray-700 mb-4">If you have Raj Yoga, you&apos;re positioned for:</p>
          <FeatureList
            items={[
              'Effortless success (relative to others)',
              'Natural opportunities',
              'Rapid achievement',
              'Lasting wealth',
              'Respect and recognition'
            ]}
            variant="check"
          />

          <div className="bg-white/80 rounded-xl p-6 border border-amber-100 my-6">
            <p className="text-amber-800 font-bold mb-3">Great advantage = great responsibility.</p>
            <p className="text-gray-700">
              Your Raj Yoga is your <strong>royal birthright</strong>—literally coded into your stars.
            </p>
          </div>

          <p className="text-lg text-saffron-700 font-medium text-center italic">
            The question isn&apos;t &quot;Will I succeed?&quot; The question is: &quot;How will I honor this royal advantage?&quot;
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-amber-600 to-saffron-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">👑 Discover Your Royal Yogas</h3>
        <p className="text-amber-100 mb-6">Unlock your success potential and maximize your cosmic advantages</p>
        <Link
          href={`/${locale}/tools/raj-yoga`}
          className="inline-block bg-white text-amber-700 font-bold py-3 px-8 rounded-xl hover:bg-amber-50 transition-colors shadow-lg"
        >
          Calculate Your Raj Yoga Status →
        </Link>
      </div>

      {/* Related Tools */}
      <div className="mt-12 bg-gradient-to-br from-cream-50 to-teal-50 rounded-2xl p-8 border border-teal-100">
        <h3 className="text-xl font-bold text-teal-800 mb-6">Related Tools for Complete Success Strategy</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href={`/${locale}/tools/kundli`} className="bg-white rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-teal-700 group-hover:text-saffron-600 transition-colors">Kundli Generator</h4>
            <p className="text-sm text-gray-600">See all your yogas</p>
          </Link>
          <Link href={`/${locale}/tools/mahadasha`} className="bg-white rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-teal-700 group-hover:text-saffron-600 transition-colors">Mahadasha Calculator</h4>
            <p className="text-sm text-gray-600">Know when Raj Yogas activate</p>
          </Link>
          <Link href={`/${locale}/tools/lagna`} className="bg-white rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-teal-700 group-hover:text-saffron-600 transition-colors">Lagna Calculator</h4>
            <p className="text-sm text-gray-600">Ascendant supports success</p>
          </Link>
          <Link href={`/${locale}/tools/nakshatra`} className="bg-white rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-teal-700 group-hover:text-saffron-600 transition-colors">Nakshatra Finder</h4>
            <p className="text-sm text-gray-600">Birth star insights</p>
          </Link>
        </div>
      </div>
    </article>
  );
}
