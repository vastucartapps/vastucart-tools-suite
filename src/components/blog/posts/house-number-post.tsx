'use client';

import React from 'react';
import Link from 'next/link';
import {
  Home,
  Calculator,
  Heart,
  Users,
  Star,
  Sparkles,
  TrendingUp,
  Shield,
  Compass,
  Lightbulb,
  AlertCircle,
  CheckCircle,
  Gem,
  Palette,
  DoorOpen,
  Baby,
  Activity,
  Crown,
  Zap,
  Moon,
  Sun,
  Target,
  Gift
} from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  StatsCard
} from '../blog-content';

interface HouseNumberPostProps {
  locale: string;
}

export default function HouseNumberPost({ locale }: HouseNumberPostProps) {
  const houseNumbers = [
    {
      number: 1,
      title: 'Independent Living',
      vibration: 'Leadership, independence, new beginnings',
      icon: Crown,
      color: 'amber',
      atmosphere: 'Ambitious, forward-thinking, goal-oriented',
      bestFor: 'Single professionals, entrepreneurs, ambitious families',
      effects: [
        'Independence encouraged',
        'Leadership roles emerge',
        'Innovation and creativity',
        'Individual growth valued'
      ],
      challenges: 'May lack cooperation, family independence (people do their own thing)',
      status: 'neutral'
    },
    {
      number: 2,
      title: 'Partnership & Peace',
      vibration: 'Cooperation, harmony, partnership',
      icon: Heart,
      color: 'teal',
      atmosphere: 'Peaceful, harmonious, cooperative',
      bestFor: 'Couples, small families, peacemakers',
      effects: [
        'Cooperation emphasized',
        'Harmony and balance',
        'Peace and sensitivity',
        'Relationship deepening'
      ],
      challenges: 'May lack initiative, boundaries can blur',
      status: 'neutral'
    },
    {
      number: 3,
      title: 'Creative Joyfulness',
      vibration: 'Creativity, joy, communication',
      icon: Sparkles,
      color: 'saffron',
      atmosphere: 'Cheerful, creative, social',
      bestFor: 'Artistic families, social people, creative professionals',
      effects: [
        'Creative expression',
        'Joyful atmosphere',
        'Social connections',
        'Fun and entertainment'
      ],
      challenges: 'Can be scattered, focus lacking, expenses increase',
      status: 'challenging'
    },
    {
      number: 4,
      title: 'Stability & Foundation',
      vibration: 'Stability, structure, hard work',
      icon: Shield,
      color: 'teal',
      atmosphere: 'Practical, grounded, organized',
      bestFor: 'Families wanting stability, savers, builders',
      effects: [
        'Solid foundation',
        'Structure and order',
        'Security and stability',
        'Long-term thinking'
      ],
      challenges: 'Can feel rigid, resistance to change',
      status: 'best'
    },
    {
      number: 5,
      title: 'Freedom & Change',
      vibration: 'Freedom, change, adventure',
      icon: Compass,
      color: 'amber',
      atmosphere: 'Dynamic, flexible, adventurous',
      bestFor: 'Adventurous families, travelers, people who move frequently',
      effects: [
        'Flexibility and adaptation',
        'Change embraced',
        'Adventure and variety',
        'Travel and movement'
      ],
      challenges: 'Can feel unstable, commitment difficult',
      status: 'challenging'
    },
    {
      number: 6,
      title: 'Family & Harmony',
      vibration: 'Family, responsibility, nurturing',
      icon: Home,
      color: 'teal',
      atmosphere: 'Warm, welcoming, nurturing',
      bestFor: 'Families with children, caregivers, hospitality',
      effects: [
        'Strong family bonds',
        'Nurturing atmosphere',
        'Harmony and care',
        'Hospitality'
      ],
      challenges: 'May attract demanding people, sacrifice required',
      status: 'best',
      highlight: 'EXCELLENT for family homes'
    },
    {
      number: 7,
      title: 'Spirituality & Wisdom',
      vibration: 'Spirituality, introspection, wisdom',
      icon: Moon,
      color: 'saffron',
      atmosphere: 'Peaceful, introspective, spiritual',
      bestFor: 'Spiritual seekers, researchers, introverts',
      effects: [
        'Spiritual growth',
        'Introspection valued',
        'Wisdom sought',
        'Quiet contemplation'
      ],
      challenges: 'Can feel isolated, social withdrawal',
      status: 'neutral'
    },
    {
      number: 8,
      title: 'Abundance & Power',
      vibration: 'Abundance, power, success',
      icon: TrendingUp,
      color: 'amber',
      atmosphere: 'Successful, powerful, prosperous',
      bestFor: 'Business owners, ambitious families, wealth-building',
      effects: [
        'Prosperity attraction',
        'Success energy',
        'Power and authority',
        'Material comfort'
      ],
      challenges: 'May attract jealousy, focus can become money-obsessed',
      status: 'best',
      highlight: 'HIGHEST for financial success'
    },
    {
      number: 9,
      title: 'Transformation & Completion',
      vibration: 'Completion, transformation, endings',
      icon: Zap,
      color: 'orange',
      atmosphere: 'Transformational, philosophical, changing',
      bestFor: 'Spiritual seekers, people in transition, wisdom-focused',
      effects: [
        'Cycles complete',
        'Transformations occur',
        'Endings (moves, separations)',
        'Spiritual evolution'
      ],
      challenges: 'Can feel unstable, uncertainty about future',
      status: 'challenging'
    }
  ];

  const remedies = [
    {
      title: 'Color Enhancement',
      icon: Palette,
      description: 'Paint accent walls in color matching your house number',
      examples: ['#3: Yellow (creativity)', '#5: Blue (freedom, calm)', '#9: Red (completion, grounding)'],
      cost: '₹5,000-15,000',
      effectiveness: '30-40%'
    },
    {
      title: 'Numerology Plate',
      icon: Target,
      description: 'Place house number plate with lucky number additions',
      examples: ['Instead of House #3', 'Use House #36 (3+6=9)', 'Adds completion energy'],
      cost: '₹1,000-3,000',
      effectiveness: '40-50%'
    },
    {
      title: 'Crystal Grid',
      icon: Gem,
      description: 'Create crystal grid matching house number&apos;s element',
      examples: ['#3: Citrine (creativity)', '#5: Moonstone (flexibility)', '#9: Red Jasper (grounding)'],
      cost: '₹500-2,000',
      effectiveness: '30-40%'
    },
    {
      title: 'Entrance Adjustment',
      icon: DoorOpen,
      description: 'Enhance main entrance with lucky elements',
      examples: ['Lucky plant (harmony)', 'Protective symbol (Om/Swastika)', 'Welcoming mat in house color'],
      cost: '₹500-2,000',
      effectiveness: '40-50%'
    },
    {
      title: 'Conscious Living',
      icon: Lightbulb,
      description: 'Most powerful remedy through intention',
      examples: ['Set clear intentions', 'Treat home with respect', 'Practice gratitude regularly'],
      cost: 'FREE',
      effectiveness: '60-70%'
    }
  ];

  return (
    <article className="prose prose-lg max-w-none">
      {/* Introduction */}
      <div className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl p-8 mb-12 border border-teal-100">
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          <strong className="text-teal-800">&quot;Why does this home feel so welcoming while another feels heavy? Is it just decoration?&quot;</strong>
        </p>
        <p className="text-gray-700 mb-6">
          According to numerology, <strong>your house number carries vibrational energy that directly influences family harmony, health, and happiness.</strong>
        </p>
        <p className="text-gray-700 mb-4">
          Your <Link href={`/${locale}/tools/house-number`} className="text-saffron-600 hover:underline font-semibold">House Number</Link> isn&apos;t random. Every digit vibrates at a frequency that either:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <p className="text-green-800 font-medium flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Attracts harmony, peace, prosperity, family bonding
            </p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <p className="text-red-800 font-medium flex items-center gap-2">
              <AlertCircle className="w-5 h-5" />
              Attracts conflict, stress, health issues, separation
            </p>
          </div>
        </div>
      </div>

      <BlogImage
        src="/images/blog/house-number/hero.webp"
        alt="House Number Numerology - Understanding your home's vibrational energy"
        caption="Your house number influences family harmony, health, and prosperity"
      />

      {/* Stats Card */}
      <StatsCard
        stats={[
          { label: 'Best for Family', value: '#6' },
          { label: 'Best for Wealth', value: '#8' },
          { label: 'Best for Stability', value: '#4' },
          { label: 'Calculator', value: 'FREE' },
        ]}
      />

      <HighlightBox type="tip">
        <p className="font-bold text-teal-700 mb-3">Think About It:</p>
        <ul className="space-y-2 text-gray-700">
          <li>• Some homes feel instantly warm and welcoming</li>
          <li>• Others feel tense or draining despite beautiful décor</li>
          <li>• Some families thrive in their homes. Others struggle.</li>
          <li>• Guests feel comfortable in some houses, anxious in others</li>
        </ul>
        <p className="mt-3 font-medium text-teal-700">This isn&apos;t coincidence. It&apos;s the home&apos;s numerological vibration.</p>
      </HighlightBox>

      <SectionDivider />

      {/* Section 1: What is House Number */}
      <section id="what-is" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Home className="w-5 h-5" />
          </span>
          What is Your House Number?
        </h2>

        <p className="text-gray-700 mb-6">
          Your <strong>House Number</strong> is calculated by reducing your address digits to a single number (1-9). Your home&apos;s address number vibrates at a frequency that influences everyone living in it.
        </p>

        <BlogImage
          src="/images/blog/house-number/concept.webp"
          alt="House number numerology concept explained"
          caption="Understanding the vibrational energy of your home address"
        />

        <InfoCard title="How It Works" variant="teal">
          <div className="space-y-4">
            <p className="text-gray-700">Think of your house number like:</p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white/60 rounded-lg p-3 text-center">
                <p className="font-bold text-teal-700">📻 Radio Frequency</p>
                <p className="text-sm text-gray-600">Your house broadcasts a specific energy</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3 text-center">
                <p className="font-bold text-teal-700">🧲 Magnetic Field</p>
                <p className="text-sm text-gray-600">People are attracted to or repelled by it</p>
              </div>
              <div className="bg-white/60 rounded-lg p-3 text-center">
                <p className="font-bold text-teal-700">🌤️ Family Weather</p>
                <p className="text-sm text-gray-600">The vibe inside the home</p>
              </div>
            </div>
          </div>
        </InfoCard>

        <InfoCard title="The Logic" variant="saffron">
          <p className="text-gray-700 mb-4">A house isn&apos;t just walls and furniture. It&apos;s an energetic entity with:</p>
          <FeatureList
            items={[
              'Personality (based on its number)',
              'Influence (on residents\' lives)',
              'Purpose (what it attracts)',
              'Challenges (what it requires)'
            ]}
            variant="check"
          />
          <p className="text-saffron-700 mt-4 font-medium italic">When you align with your house&apos;s vibration, you thrive. When you resist it, you struggle.</p>
        </InfoCard>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 my-8">
          <h4 className="font-bold text-amber-800 mb-3">Hinglish Reality</h4>
          <p className="text-gray-700 italic">
            &quot;House number matlab aapke ghar ki personality. Agar number acha hai toh family khush rehti hai, property value badhti hai, visitors welcome feel karte hain. Agar challenging number hai toh adjustments zaroori hote hain.&quot;
          </p>
          <p className="text-amber-700 text-sm mt-2">
            (Translation: House number is your home&apos;s personality. If the number is good, family is happy, property value increases, visitors feel welcome. If challenging, adjustments are necessary.)
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: How to Calculate */}
      <section id="how-to-calculate" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Calculate
        </h2>

        <p className="text-gray-700 mb-6">
          Simple formula: <strong>Add all digits in address, reduce to single number (1-9).</strong>
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-5 border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-3">Example 1: House #123</h4>
            <div className="bg-white/70 rounded-lg p-3 font-mono text-center">
              <p className="text-teal-700">1 + 2 + 3 = <span className="text-2xl font-bold">6</span></p>
            </div>
            <p className="text-sm text-teal-600 mt-2 text-center">Harmony, family, caring</p>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">Example 2: House #5678</h4>
            <div className="bg-white/70 rounded-lg p-3 font-mono text-center">
              <p className="text-amber-700">5+6+7+8 = 26 → 2+6 = <span className="text-2xl font-bold">8</span></p>
            </div>
            <p className="text-sm text-amber-600 mt-2 text-center">Power, abundance, strength</p>
          </div>
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-5 border border-saffron-200">
            <h4 className="font-bold text-saffron-800 mb-3">Example 3: House #999</h4>
            <div className="bg-white/70 rounded-lg p-3 font-mono text-center">
              <p className="text-saffron-700">9+9+9 = 27 → 2+7 = <span className="text-2xl font-bold">9</span></p>
            </div>
            <p className="text-sm text-saffron-600 mt-2 text-center">Completion, wisdom, transformation</p>
          </div>
        </div>

        <HighlightBox type="important">
          <p className="font-bold text-amber-700 mb-3">What to Include:</p>
          <div className="space-y-2">
            <p><strong>Include:</strong> Street address numbers only (not apartment number)</p>
            <p><strong>Example:</strong> House #42 → 4 + 2 = 6</p>
            <p><strong>Ignore:</strong> Letters, street name, city name</p>
          </div>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 3: The 9 House Numbers */}
      <section id="nine-houses" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Star className="w-5 h-5" />
          </span>
          The 9 House Numbers Explained
        </h2>

        <p className="text-gray-700 mb-8">
          Each house number creates a unique family environment. Understanding your home&apos;s vibration helps you thrive.
        </p>

        <BlogImage
          src="/images/blog/house-number/matrix.webp"
          alt="House Number Matrix - All 9 house numbers explained"
          caption="Complete guide to all 9 house number vibrations"
        />

        <div className="space-y-6 mt-8">
          {houseNumbers.map((house) => {
            const IconComponent = house.icon;
            const colorClasses = {
              teal: {
                bg: 'from-teal-50 to-teal-100',
                border: 'border-teal-200',
                icon: 'from-teal-500 to-teal-600',
                text: 'text-teal-800',
                light: 'text-teal-600',
                badge: 'bg-teal-100 text-teal-700'
              },
              amber: {
                bg: 'from-amber-50 to-amber-100',
                border: 'border-amber-200',
                icon: 'from-amber-500 to-amber-600',
                text: 'text-amber-800',
                light: 'text-amber-600',
                badge: 'bg-amber-100 text-amber-700'
              },
              saffron: {
                bg: 'from-saffron-50 to-saffron-100',
                border: 'border-saffron-200',
                icon: 'from-saffron-500 to-saffron-600',
                text: 'text-saffron-800',
                light: 'text-saffron-600',
                badge: 'bg-saffron-100 text-saffron-700'
              },
              orange: {
                bg: 'from-orange-50 to-orange-100',
                border: 'border-orange-200',
                icon: 'from-orange-500 to-orange-600',
                text: 'text-orange-800',
                light: 'text-orange-600',
                badge: 'bg-orange-100 text-orange-700'
              }
            };
            const colors = colorClasses[house.color as keyof typeof colorClasses];

            return (
              <div key={house.number} className={`bg-gradient-to-br ${colors.bg} rounded-2xl p-6 border ${colors.border} shadow-sm hover:shadow-md transition-shadow`}>
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br ${colors.icon} text-white flex-shrink-0 shadow-md`}>
                    <span className="text-2xl font-bold">{house.number}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className={`font-bold ${colors.text} text-lg`}>
                        House Number {house.number}: {house.title}
                      </h3>
                      {house.status === 'best' && (
                        <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full font-medium">
                          ⭐ {house.highlight || 'TOP CHOICE'}
                        </span>
                      )}
                      {house.status === 'challenging' && (
                        <span className="bg-orange-100 text-orange-700 text-xs px-2 py-1 rounded-full font-medium">
                          ⚠️ Needs Enhancement
                        </span>
                      )}
                    </div>
                    <p className={`${colors.light} text-sm mb-3 flex items-center gap-2`}>
                      <IconComponent className="w-4 h-4" />
                      {house.vibration}
                    </p>
                    <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-3 border border-white/50">
                      <div>
                        <p className="text-sm font-medium text-gray-600 mb-1">Family Effect:</p>
                        <div className="flex flex-wrap gap-2">
                          {house.effects.map((effect, idx) => (
                            <span key={idx} className={`${colors.badge} text-xs px-2 py-1 rounded-full`}>
                              ✓ {effect}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="font-medium text-gray-600">Atmosphere:</p>
                          <p className="text-gray-700">{house.atmosphere}</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-600">Best For:</p>
                          <p className="text-gray-700">{house.bestFor}</p>
                        </div>
                      </div>
                      <div className="bg-orange-50 rounded-lg p-2">
                        <p className="text-sm text-orange-700">
                          <strong>Challenges:</strong> {house.challenges}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Family Impact */}
      <section id="family-impact" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Users className="w-5 h-5" />
          </span>
          House Energy & Family Impact
        </h2>

        <p className="text-gray-700 mb-8">
          Your house number influences residents&apos; lives in specific ways across relationships, parenting, and health.
        </p>

        <BlogImage
          src="/images/blog/house-number/reference.webp"
          alt="House number impact on family life"
          caption="How your house number affects marriage, children, and health"
        />

        {/* Marriage & Relationships Table */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-teal-700 mb-4 flex items-center gap-2">
            <Heart className="w-5 h-5 text-saffron-500" />
            Marriage & Relationships
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                  <th className="px-4 py-3 text-left">House #</th>
                  <th className="px-4 py-3 text-left">Relationship Impact</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { num: 1, impact: 'Independence (may keep distance)' },
                  { num: 2, impact: 'Partnership (harmony, closeness)' },
                  { num: 3, impact: 'Fun (playful, entertaining)' },
                  { num: 4, impact: 'Stability (solid, committed)' },
                  { num: 5, impact: 'Freedom (flexibility, space)' },
                  { num: 6, impact: 'Nurturing (caring, bonded)' },
                  { num: 7, impact: 'Spiritual (deep connection)' },
                  { num: 8, impact: 'Supportive (ambitious together)' },
                  { num: 9, impact: 'Transforming (growing together)' }
                ].map((row, idx) => (
                  <tr key={row.num} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-bold text-teal-700">{row.num}</td>
                    <td className="px-4 py-3 text-gray-700">{row.impact}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Children & Parenting Table */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-teal-700 mb-4 flex items-center gap-2">
            <Baby className="w-5 h-5 text-saffron-500" />
            Children & Parenting
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                  <th className="px-4 py-3 text-left">House #</th>
                  <th className="px-4 py-3 text-left">Children Thrive In</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { num: 1, trait: 'Independent thinking' },
                  { num: 2, trait: 'Sensitive, cooperative' },
                  { num: 3, trait: 'Creative, expressive' },
                  { num: 4, trait: 'Responsible, grounded' },
                  { num: 5, trait: 'Adventurous, flexible' },
                  { num: 6, trait: 'Bonded, caring, secure' },
                  { num: 7, trait: 'Spiritual, introspective' },
                  { num: 8, trait: 'Ambitious, successful' },
                  { num: 9, trait: 'Wisdom, transformation' }
                ].map((row, idx) => (
                  <tr key={row.num} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-bold text-amber-700">{row.num}</td>
                    <td className="px-4 py-3 text-gray-700">{row.trait}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Health & Wellness Table */}
        <div className="mb-8">
          <h3 className="text-xl font-bold text-teal-700 mb-4 flex items-center gap-2">
            <Activity className="w-5 h-5 text-saffron-500" />
            Health & Wellness
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-saffron-500 to-saffron-600 text-white">
                  <th className="px-4 py-3 text-left">House #</th>
                  <th className="px-4 py-3 text-left">Health Pattern</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { num: 1, pattern: 'Physical vitality' },
                  { num: 2, pattern: 'Emotional sensitivity' },
                  { num: 3, pattern: 'Respiratory/communication' },
                  { num: 4, pattern: 'Bone/structural issues' },
                  { num: 5, pattern: 'Nervous system' },
                  { num: 6, pattern: 'Heart/family stress' },
                  { num: 7, pattern: 'Spiritual/anxiety' },
                  { num: 8, pattern: 'Vitality & strength' },
                  { num: 9, pattern: 'Transformation healing' }
                ].map((row, idx) => (
                  <tr key={row.num} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-bold text-saffron-700">{row.num}</td>
                    <td className="px-4 py-3 text-gray-700">{row.pattern}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Best & Worst */}
      <section id="best-worst" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <TrendingUp className="w-5 h-5" />
          </span>
          Best & Worst House Numbers
        </h2>

        {/* Best Numbers */}
        <h3 className="text-xl font-bold text-green-700 mb-4">🏆 BEST House Numbers</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-5 border-2 border-green-300 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
              <h4 className="font-bold text-green-800">House #6</h4>
            </div>
            <p className="text-sm text-green-700 font-medium mb-2">Family Harmony</p>
            <FeatureList
              items={['Perfect for families', 'Nurturing energy', 'Strong bonds', 'Hospitality flow']}
              variant="check"
            />
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-5 border border-green-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-green-400 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
              <h4 className="font-bold text-green-800">House #8</h4>
            </div>
            <p className="text-sm text-green-700 font-medium mb-2">Abundance</p>
            <FeatureList
              items={['Prosperity attraction', 'Success energy', 'Financial growth', 'Material comfort']}
              variant="check"
            />
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-5 border border-green-200 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-green-300 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">3</span>
              <h4 className="font-bold text-green-800">House #4</h4>
            </div>
            <p className="text-sm text-green-700 font-medium mb-2">Stability</p>
            <FeatureList
              items={['Solid foundation', 'Security feeling', 'Long-term living', 'Strong bonds']}
              variant="check"
            />
          </div>
        </div>

        {/* Challenging Numbers */}
        <h3 className="text-xl font-bold text-orange-700 mb-4">⚠️ CHALLENGING House Numbers</h3>
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-5 border border-orange-200">
            <h4 className="font-bold text-orange-800 mb-2">House #3</h4>
            <p className="text-sm text-orange-700">Scattered energy, entertainment focused (May overspend)</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-5 border border-orange-200">
            <h4 className="font-bold text-orange-800 mb-2">House #5</h4>
            <p className="text-sm text-orange-700">Unstable, change-focused (May move frequently)</p>
          </div>
          <div className="bg-gradient-to-br from-orange-50 to-amber-100 rounded-xl p-5 border border-orange-200">
            <h4 className="font-bold text-orange-800 mb-2">House #9</h4>
            <p className="text-sm text-orange-700">Endings energy, incompleteness (May feel transient)</p>
          </div>
        </div>

        {/* Neutral Numbers */}
        <h3 className="text-xl font-bold text-gray-700 mb-4">⚖️ NEUTRAL House Numbers</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">House #1</h4>
            <p className="text-sm text-gray-700">Independence-focused but workable</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">House #2</h4>
            <p className="text-sm text-gray-700">Peace-focused but needs boundaries</p>
          </div>
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-5 border border-gray-200">
            <h4 className="font-bold text-gray-800 mb-2">House #7</h4>
            <p className="text-sm text-gray-700">Introspective but can isolate</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Enhancement & Remedies */}
      <section id="enhancement" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Gift className="w-5 h-5" />
          </span>
          Enhancement & Remedies
        </h2>

        <p className="text-gray-700 mb-8">
          If your house number is challenging, enhance its energy with these proven remedies.
        </p>

        <BlogImage
          src="/images/blog/house-number/remedy.webp"
          alt="House number enhancement remedies"
          caption="5 powerful remedies to enhance your home's energy"
        />

        <div className="space-y-6 mt-8">
          {remedies.map((remedy, index) => {
            const IconComponent = remedy.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-amber-50 rounded-2xl p-6 border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-saffron-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-teal-800 text-lg mb-2">
                      Remedy {index + 1}: {remedy.title}
                    </h3>
                    <p className="text-gray-700 mb-3">{remedy.description}</p>
                    <div className="bg-white/80 backdrop-blur rounded-xl p-4 border border-teal-100">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {remedy.examples.map((example, idx) => (
                          <span key={idx} className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded-full">
                            {example}
                          </span>
                        ))}
                      </div>
                      <div className="flex gap-4 text-sm">
                        <span className="text-amber-700 font-medium">Cost: {remedy.cost}</span>
                        <span className="text-teal-700 font-medium">Effectiveness: {remedy.effectiveness}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <HighlightBox type="tip">
          <p className="font-bold text-teal-700 mb-2">Most Powerful Remedy:</p>
          <p className="text-gray-700">
            <strong>Conscious Living</strong> is the most powerful remedy (60-70% effectiveness) and it&apos;s completely FREE.
            Set clear intentions for your home, treat it with respect, invite positive people, and practice gratitude regularly.
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Sun className="w-5 h-5" />
          </span>
          Conclusion: Sacred Home
        </h2>

        <div className="bg-gradient-to-br from-teal-50 via-amber-50 to-saffron-50 rounded-2xl p-8 border border-teal-200">
          <p className="text-xl text-teal-800 font-semibold mb-6">
            Your house number is your home&apos;s personality.
          </p>

          <p className="text-gray-700 mb-4">It influences:</p>
          <FeatureList
            items={[
              'Family harmony',
              'Health and wellness',
              'Prosperity and success',
              'Relationships and bonding',
              'Everyone living in it'
            ]}
            variant="check"
          />

          <p className="text-gray-700 my-6">
            Some numbers are naturally harmonious (#6 for families, #8 for wealth). Others require awareness and enhancement (#3 needs focus, #9 needs grounding).
          </p>

          <div className="bg-white/80 rounded-xl p-6 border border-teal-100">
            <p className="text-gray-700 mb-4">Once you understand your home&apos;s vibration, you can:</p>
            <ol className="space-y-2 text-gray-700">
              <li><strong>1.</strong> Accept its natural gifts</li>
              <li><strong>2.</strong> Address its challenges</li>
              <li><strong>3.</strong> Enhance its energy</li>
              <li><strong>4.</strong> Create harmony within</li>
            </ol>
          </div>

          <p className="text-lg text-saffron-700 font-medium mt-6 text-center italic">
            Your home is more than a shelter. It&apos;s a living entity with wisdom to offer.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-teal-600 to-amber-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">🏠 Discover Your House Number Meaning</h3>
        <p className="text-teal-100 mb-6">Calculate your home&apos;s vibration and enhance family harmony</p>
        <Link
          href={`/${locale}/tools/house-number`}
          className="inline-block bg-white text-teal-700 font-bold py-3 px-8 rounded-xl hover:bg-teal-50 transition-colors shadow-lg"
        >
          Calculate Your House Number →
        </Link>
      </div>

      {/* Related Tools */}
      <div className="mt-12 bg-gradient-to-br from-cream-50 to-teal-50 rounded-2xl p-8 border border-teal-100">
        <h3 className="text-xl font-bold text-teal-800 mb-6">Related Numerology Tools</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href={`/${locale}/tools/room-advisor`} className="bg-white rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-teal-700 group-hover:text-saffron-600 transition-colors">Vastu Room Advisor</h4>
            <p className="text-sm text-gray-600">Room-by-room optimization</p>
          </Link>
          <Link href={`/${locale}/tools/lucky-color`} className="bg-white rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-teal-700 group-hover:text-saffron-600 transition-colors">Lucky Color</h4>
            <p className="text-sm text-gray-600">Home color enhancement</p>
          </Link>
          <Link href={`/${locale}/tools/life-path-number`} className="bg-white rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-teal-700 group-hover:text-saffron-600 transition-colors">Life Path Number</h4>
            <p className="text-sm text-gray-600">Personal alignment</p>
          </Link>
          <Link href={`/${locale}/tools/lo-shu-grid`} className="bg-white rounded-xl p-4 border border-teal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-teal-700 group-hover:text-saffron-600 transition-colors">Lo Shu Grid</h4>
            <p className="text-sm text-gray-600">9 life areas</p>
          </Link>
        </div>
      </div>
    </article>
  );
}
