'use client';

import React from 'react';
import Link from 'next/link';
import {
  Home,
  Compass,
  Bed,
  Briefcase,
  Sofa,
  Palette,
  Droplets,
  Flame,
  Wind,
  Circle,
  Mountain,
  CheckCircle,
  XCircle,
  Tv,
  Music,
  Lightbulb,
  Sun,
  Moon,
  Star,
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  StatsCard
} from '../blog-content';

interface RoomAdvisorPostProps {
  locale: string;
}

export default function RoomAdvisorPost({ locale }: RoomAdvisorPostProps) {
  const elements = [
    {
      name: 'Earth',
      direction: 'Southwest',
      color: 'Brown, Beige',
      represents: 'Grounding, stability, weight',
      furniture: 'Heavy pieces',
      use: 'Grounding, protection',
      icon: Mountain,
      colorClass: 'amber'
    },
    {
      name: 'Water',
      direction: 'North/Northeast',
      color: 'Blue, Black',
      represents: 'Flow, emotion, clarity',
      furniture: 'North side',
      use: 'Career, communication',
      icon: Droplets,
      colorClass: 'deepteal'
    },
    {
      name: 'Fire',
      direction: 'South/Southeast',
      color: 'Red, Orange',
      represents: 'Energy, transformation, action',
      furniture: 'South/Southeast',
      use: 'Energy, motivation, action',
      icon: Flame,
      colorClass: 'orange'
    },
    {
      name: 'Air',
      direction: 'East/Northwest',
      color: 'White, Light colors',
      represents: 'Movement, freshness, clarity',
      furniture: 'East/Northwest windows',
      use: 'Ventilation, clarity',
      icon: Wind,
      colorClass: 'warmaccent'
    },
    {
      name: 'Space',
      direction: 'Center',
      color: 'Open',
      represents: 'Balance, emptiness',
      furniture: 'Keep center open',
      use: 'Energy circulation',
      icon: Circle,
      colorClass: 'deepteal'
    }
  ];

  const directions = [
    { direction: 'North', element: 'Water', color: 'Blue', use: 'Career, opportunity' },
    { direction: 'Northeast', element: 'Water', color: 'Light Blue', use: 'Spirituality, health' },
    { direction: 'East', element: 'Air', color: 'White', use: 'New beginnings' },
    { direction: 'Southeast', element: 'Fire', color: 'Red', use: 'Energy, confidence' },
    { direction: 'South', element: 'Fire', color: 'Red', use: 'Fame, strength' },
    { direction: 'Southwest', element: 'Earth', color: 'Brown', use: 'Stability, grounding' },
    { direction: 'West', element: 'Air', color: 'White', use: 'Creativity, rest' },
    { direction: 'Northwest', element: 'Air', color: 'White', use: 'Helpful people, travel' }
  ];

  const roomColors = [
    { room: 'Master Bedroom', primary: 'Soft Blue, Cream, Lavender', secondary: 'Soft Green', avoid: 'Red, Bright colors' },
    { room: 'Guest Bedroom', primary: 'Warm Cream, Light Yellow', secondary: 'Soft Green', avoid: 'Dark colors' },
    { room: 'Home Office', primary: 'Light Yellow, White', secondary: 'Light Blue (focus)', avoid: 'Red (unless motivating)' },
    { room: 'Living Room', primary: 'Warm Cream, Light Orange', secondary: 'Gold, Soft Red', avoid: 'Cold/Dark tones' },
    { room: 'Kitchen', primary: 'White, Light Yellow', secondary: 'Soft Orange, Green', avoid: 'Blue, Black (water opposes fire)' },
    { room: 'Bathroom', primary: 'Light Blue, White', secondary: 'Soft Green', avoid: 'Dark colors' }
  ];

  return (
    <article className="prose prose-lg max-w-none">
      {/* Introduction */}
      <div className="bg-gradient-to-br from-deepteal-50 to-amber-50 rounded-2xl p-8 mb-12 border border-deepteal-100">
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          <strong className="text-deepteal-800">&quot;Why does my room feel draining? How can I optimize my space?&quot;</strong>
        </p>
        <p className="text-gray-700 mb-6">
          According to Vastu Shastra, <strong>your room&apos;s layout, furniture placement, and color scheme directly influence the energy flow, affecting your health, sleep, productivity, and well-being.</strong>
        </p>
        <p className="text-gray-700 mb-4">
          Your <Link href={`/${locale}/tools/room-advisor`} className="text-warmaccent-600 hover:underline font-semibold">Room&apos;s Energy</Link> depends on:
        </p>
        <div className="grid md:grid-cols-5 gap-3">
          {[
            { icon: Compass, text: 'Direction (which way it faces)' },
            { icon: Sofa, text: 'Furniture placement' },
            { icon: Palette, text: 'Color scheme' },
            { icon: Sparkles, text: 'Clutter vs organization' },
            { icon: Sun, text: 'Natural light & air' }
          ].map((item, idx) => (
            <div key={idx} className="bg-white/70 rounded-lg p-3 text-center">
              <item.icon className="w-5 h-5 mx-auto text-deepteal-600 mb-1" />
              <p className="text-xs text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      <BlogImage
        src="/images/blog/room-advisor/hero.webp"
        alt="Room Advisor Vastu - Optimize your room layout for better energy flow"
        caption="Vastu principles help optimize room energy for sleep, productivity, and well-being"
      />

      {/* Stats Card */}
      <StatsCard
        stats={[
          { label: 'Sleep Improvement', value: '30-50%' },
          { label: 'Productivity Boost', value: '40-60%' },
          { label: 'Based On', value: 'Vastu' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      <HighlightBox type="tip">
        <p className="font-bold text-deepteal-700 mb-3">Think About It:</p>
        <ul className="space-y-2 text-gray-700">
          <li>• Some rooms feel instantly peaceful and energizing</li>
          <li>• Others feel heavy, draining, or chaotic</li>
          <li>• Some bedrooms give deep sleep</li>
          <li>• Others leave you restless</li>
        </ul>
        <p className="mt-3 font-medium text-deepteal-700">This isn&apos;t psychology. It&apos;s Vastu science.</p>
      </HighlightBox>

      <SectionDivider />

      {/* Section 1: What is Vastu for Rooms */}
      <section id="what-is-vastu" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Home className="w-5 h-5" />
          </span>
          What is Vastu for Rooms?
        </h2>

        <p className="text-gray-700 mb-6">
          <strong>Vastu Shastra</strong> (Science of Architecture) is an ancient Indian system of spatial design that harmonizes your living space with natural energy flows.
        </p>

        <BlogImage
          src="/images/blog/room-advisor/guide.webp"
          alt="Vastu Shastra principles for room design"
          caption="Vastu works with the 5 elements and 8 directions for optimal room energy"
        />

        <InfoCard title="Core Principles" variant="deepteal">
          <p className="text-gray-700 mb-4">Vastu works with:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/60 rounded-lg p-3">
              <p className="font-bold text-deepteal-700">🌍 The 5 Elements</p>
              <p className="text-sm text-gray-600">Earth, Water, Fire, Air, Space</p>
            </div>
            <div className="bg-white/60 rounded-lg p-3">
              <p className="font-bold text-deepteal-700">🧭 The 8 Directions</p>
              <p className="text-sm text-gray-600">North, South, East, West + diagonals</p>
            </div>
            <div className="bg-white/60 rounded-lg p-3">
              <p className="font-bold text-deepteal-700">✨ Energy Flow</p>
              <p className="text-sm text-gray-600">Natural life force (prana) movement</p>
            </div>
            <div className="bg-white/60 rounded-lg p-3">
              <p className="font-bold text-deepteal-700">⚖️ Balance</p>
              <p className="text-sm text-gray-600">Masculine & Feminine energy</p>
            </div>
          </div>
          <p className="text-deepteal-700 mt-4 font-medium italic">When these align, space thrives. When misaligned, space struggles.</p>
        </InfoCard>

        <InfoCard title="How It Works" variant="warmaccent">
          <p className="text-gray-700 mb-4">Your room has:</p>
          <FeatureList
            items={[
              'Energy entry points (windows, doors)',
              'Energy flow patterns (natural pathways)',
              'Energy dead zones (where flow stagnates)',
              'Energy amplification zones (where it concentrates)'
            ]}
            variant="check"
          />
          <p className="text-warmaccent-700 mt-4 font-medium">Vastu positioning uses these for optimal results.</p>
        </InfoCard>

        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200 my-8">
          <h4 className="font-bold text-amber-800 mb-3">Hinglish Reality</h4>
          <p className="text-gray-700 italic">
            &quot;Room ka Vastu matlab aapke furniture aur décor ki placement se room ka energy affect hota hai. Agar sahi tarike se arrange karte ho toh room mein peace aati hai, sleep acha hota hai, productivity badhti hai.&quot;
          </p>
          <p className="text-amber-700 text-sm mt-2">
            (Translation: Room Vastu is how your furniture and décor placement affects room energy. If arranged correctly, peace comes, sleep improves, productivity increases.)
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: The 5 Elements & Directions */}
      <section id="elements-directions" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Compass className="w-5 h-5" />
          </span>
          The 5 Elements & Directions
        </h2>

        <h3 className="text-xl font-bold text-deepteal-700 mb-4">The 5 Elements in Vastu</h3>

        <BlogImage
          src="/images/blog/room-advisor/map.webp"
          alt="5 Elements and 8 Directions in Vastu"
          caption="Understanding the 5 elements and their directional placements"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
          {elements.map((element) => {
            const IconComponent = element.icon;
            const colorMap: Record<string, { bg: string; border: string; icon: string; text: string }> = {
              amber: { bg: 'from-amber-50 to-amber-100', border: 'border-amber-200', icon: 'from-amber-500 to-amber-600', text: 'text-amber-800' },
              deepteal: { bg: 'from-deepteal-50 to-deepteal-100', border: 'border-deepteal-200', icon: 'from-deepteal-500 to-deepteal-600', text: 'text-deepteal-800' },
              orange: { bg: 'from-orange-50 to-orange-100', border: 'border-orange-200', icon: 'from-orange-500 to-orange-600', text: 'text-orange-800' },
              warmaccent: { bg: 'from-warmaccent-50 to-warmaccent-100', border: 'border-warmaccent-200', icon: 'from-warmaccent-500 to-warmaccent-600', text: 'text-warmaccent-800' }
            };
            const colors = colorMap[element.colorClass];

            return (
              <div key={element.name} className={`bg-gradient-to-br ${colors.bg} rounded-xl p-5 border ${colors.border}`}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-gradient-to-br ${colors.icon} text-white`}>
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className={`font-bold ${colors.text}`}>{element.name}</h4>
                    <p className="text-xs text-gray-600">{element.direction}</p>
                  </div>
                </div>
                <div className="space-y-1 text-sm">
                  <p><strong>Color:</strong> {element.color}</p>
                  <p><strong>Represents:</strong> {element.represents}</p>
                  <p><strong>Use:</strong> {element.use}</p>
                </div>
              </div>
            );
          })}
        </div>

        <h3 className="text-xl font-bold text-deepteal-700 mb-4">The 8 Directions</h3>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-deepteal-500 to-deepteal-600 text-white">
                <th className="px-4 py-3 text-left">Direction</th>
                <th className="px-4 py-3 text-left">Element</th>
                <th className="px-4 py-3 text-left">Color</th>
                <th className="px-4 py-3 text-left">Use</th>
              </tr>
            </thead>
            <tbody>
              {directions.map((dir, idx) => (
                <tr key={dir.direction} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-bold text-deepteal-700">{dir.direction}</td>
                  <td className="px-4 py-3 text-gray-700">{dir.element}</td>
                  <td className="px-4 py-3 text-gray-700">{dir.color}</td>
                  <td className="px-4 py-3 text-gray-700">{dir.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Bedroom Vastu */}
      <section id="bedroom-vastu" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Bed className="w-5 h-5" />
          </span>
          Bedroom Vastu Guide
        </h2>

        <p className="text-gray-700 mb-6">
          Your bedroom is your personal sanctuary. Vastu here is critical for restful sleep and rejuvenation.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-5 border-2 border-green-300">
            <h4 className="font-bold text-green-800 mb-2">✅ BEST: Southwest</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Grounded, stable, protective</li>
              <li>• Promotes deep sleep</li>
              <li>• Energy containment</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-5 border border-deepteal-200">
            <h4 className="font-bold text-deepteal-800 mb-2">👍 GOOD: West Side</h4>
            <ul className="text-sm text-deepteal-700 space-y-1">
              <li>• Calm, restful</li>
              <li>• Deep sleep support</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border border-red-200">
            <h4 className="font-bold text-red-800 mb-2">❌ AVOID: Northeast</h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Too much energy</li>
              <li>• Difficult sleep</li>
            </ul>
          </div>
        </div>

        <InfoCard title="Bed Placement" variant="deepteal">
          <h4 className="font-bold text-deepteal-700 mb-3">CORRECT Placement:</h4>
          <FeatureList
            items={[
              'Head pointing South or West',
              'Bed against wall (not floating)',
              'Foot pointing North or East',
              'Equal space on both sides',
              'Not directly facing door'
            ]}
            variant="check"
          />
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-sm text-green-700"><strong>Why South/West:</strong> South = stability, grounding. West = rest, calm.</p>
            </div>
            <div className="bg-red-50 rounded-lg p-3">
              <p className="text-sm text-red-700"><strong>Why NOT North:</strong> Creates energy imbalance, disturbs sleep.</p>
            </div>
          </div>
        </InfoCard>

        {/* Bedroom Furniture Table */}
        <div className="my-8">
          <h4 className="font-bold text-deepteal-700 mb-4">Furniture Placement</h4>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
              <thead>
                <tr className="bg-gradient-to-r from-amber-500 to-amber-600 text-white">
                  <th className="px-4 py-3 text-left">Item</th>
                  <th className="px-4 py-3 text-left">Position</th>
                  <th className="px-4 py-3 text-left">Why</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { item: 'Bed', position: 'South/West', why: 'Grounding, stability' },
                  { item: 'Wardrobe', position: 'West/Southwest', why: 'Storage, grounding' },
                  { item: 'Desk', position: 'Northeast', why: 'Mental clarity' },
                  { item: 'Mirror', position: 'West/Northwest', why: 'Expansion of light' },
                  { item: 'Lights', position: 'Southwest (dim)', why: 'Calm energy' }
                ].map((row, idx) => (
                  <tr key={row.item} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-3 font-bold text-amber-700">{row.item}</td>
                    <td className="px-4 py-3 text-gray-700">{row.position}</td>
                    <td className="px-4 py-3 text-gray-700">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Do's and Don'ts */}
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
            <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5" />
              Bedroom DO&apos;s
            </h4>
            <ul className="space-y-2 text-green-700">
              <li>✅ Keep room clean and organized</li>
              <li>✅ Use soft, warm lighting</li>
              <li>✅ Open windows daily (air flow)</li>
              <li>✅ Use calming colors</li>
              <li>✅ Keep plants (fresh air)</li>
              <li>✅ Remove clutter</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
            <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              Bedroom DON&apos;Ts
            </h4>
            <ul className="space-y-2 text-red-700">
              <li>❌ Mirror facing bed (reflects energy)</li>
              <li>❌ TV in bedroom (stimulation)</li>
              <li>❌ Work materials visible (no rest)</li>
              <li>❌ Red walls (stimulation)</li>
              <li>❌ Clutter under bed (stagnant energy)</li>
              <li>❌ Beam over bed (oppressive)</li>
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Office Vastu */}
      <section id="office-vastu" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Briefcase className="w-5 h-5" />
          </span>
          Work Room/Office Vastu
        </h2>

        <p className="text-gray-700 mb-6">
          For productivity and success in work, your office Vastu is essential.
        </p>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-5 border-2 border-green-300">
            <h4 className="font-bold text-green-800 mb-2">✅ BEST: Northeast</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Mental clarity</li>
              <li>• Concentration boost</li>
              <li>• Intellectual success</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-5 border border-deepteal-200">
            <h4 className="font-bold text-deepteal-800 mb-2">👍 GOOD: East Side</h4>
            <ul className="text-sm text-deepteal-700 space-y-1">
              <li>• New ideas</li>
              <li>• Fresh energy</li>
              <li>• Positive beginnings</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border border-red-200">
            <h4 className="font-bold text-red-800 mb-2">❌ AVOID: Southwest</h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Lethargy</li>
              <li>• Procrastination</li>
            </ul>
          </div>
        </div>

        <InfoCard title="Desk Placement" variant="warmaccent">
          <h4 className="font-bold text-warmaccent-700 mb-3">CORRECT Placement:</h4>
          <FeatureList
            items={[
              'Desk facing North or East',
              'Back to wall (not window)',
              'Facing door but not directly in front',
              'Clear view of room',
              'Above eye level = power'
            ]}
            variant="check"
          />
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 rounded-lg p-3">
              <p className="text-sm text-green-700"><strong>Why North/East:</strong> North = career opportunity. East = new ideas.</p>
            </div>
            <div className="bg-red-50 rounded-lg p-3">
              <p className="text-sm text-red-700"><strong>Why NOT South:</strong> Creates stress and conflict.</p>
            </div>
          </div>
        </InfoCard>

        {/* Office Optimization */}
        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-5 border border-deepteal-200">
            <h4 className="font-bold text-deepteal-800 mb-3">📈 For Productivity</h4>
            <ul className="text-sm text-deepteal-700 space-y-1">
              <li>✅ Northeast desk with clear view</li>
              <li>✅ Keep desk organized</li>
              <li>✅ Plants for fresh energy</li>
              <li>✅ Natural light from East/North</li>
              <li>✅ Remove distractions</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3">💰 For Money</h4>
            <ul className="text-sm text-amber-700 space-y-1">
              <li>✅ Cash register North side</li>
              <li>✅ Safe in Southwest</li>
              <li>✅ Green plant (North/Southeast)</li>
              <li>✅ Water element (North side)</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-5 border border-warmaccent-200">
            <h4 className="font-bold text-warmaccent-800 mb-3">🤝 For Clients</h4>
            <ul className="text-sm text-warmaccent-700 space-y-1">
              <li>✅ Welcome area Southeast</li>
              <li>✅ Red accent (energy)</li>
              <li>✅ Welcoming seating arrangement</li>
              <li>✅ Good lighting</li>
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Living Room Vastu */}
      <section id="living-room" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Sofa className="w-5 h-5" />
          </span>
          Living Room Vastu
        </h2>

        <p className="text-gray-700 mb-6">
          For harmony, entertainment, and family bonding.
        </p>

        <BlogImage
          src="/images/blog/room-advisor/warning.webp"
          alt="Living room Vastu layout guide"
          caption="Optimal living room arrangement for family harmony and positive energy"
        />

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-5 border-2 border-green-300">
            <h4 className="font-bold text-green-800 mb-2">✅ BEST: Southeast/South</h4>
            <ul className="text-sm text-green-700 space-y-1">
              <li>• Entertainment energy</li>
              <li>• Social warmth</li>
              <li>• Gathering space</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-5 border border-deepteal-200">
            <h4 className="font-bold text-deepteal-800 mb-2">👍 GOOD: East</h4>
            <ul className="text-sm text-deepteal-700 space-y-1">
              <li>• Positive, welcoming</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-xl p-5 border border-red-200">
            <h4 className="font-bold text-red-800 mb-2">❌ AVOID: Southwest</h4>
            <ul className="text-sm text-red-700 space-y-1">
              <li>• Too grounding for social space</li>
            </ul>
          </div>
        </div>

        <InfoCard title="Sofa Placement" variant="deepteal">
          <h4 className="font-bold text-deepteal-700 mb-3">CORRECT Placement:</h4>
          <FeatureList
            items={[
              'Sofa facing Northeast (auspicious view)',
              'Seating in corners (stability)',
              'Not blocking main entrance',
              'TV Southeast or South'
            ]}
            variant="check"
          />
          <p className="text-deepteal-700 mt-3 text-sm"><strong>Why Northeast view:</strong> Prosperity direction, positive energy</p>
        </InfoCard>

        {/* Entertainment Setup */}
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-4 flex items-center gap-2">
              <Tv className="w-5 h-5" />
              TV Placement
            </h4>
            <ul className="space-y-2 text-amber-700">
              <li>✅ Southeast corner</li>
              <li>✅ Not directly facing sofa (sit angle)</li>
              <li>✅ Air flow around TV</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-6 border border-warmaccent-200">
            <h4 className="font-bold text-warmaccent-800 mb-4 flex items-center gap-2">
              <Music className="w-5 h-5" />
              Music System
            </h4>
            <ul className="space-y-2 text-warmaccent-700">
              <li>✅ Southeast (energy)</li>
              <li>✅ High quality speakers</li>
              <li>✅ Soothing music enhances</li>
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 6: Color Schemes */}
      <section id="colors" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Palette className="w-5 h-5" />
          </span>
          Color Schemes by Room
        </h2>

        <BlogImage
          src="/images/blog/room-advisor/remedy.webp"
          alt="Room color schemes according to Vastu"
          caption="Optimal color choices for each room type based on Vastu principles"
        />

        <div className="overflow-x-auto my-8">
          <table className="w-full border-collapse bg-white rounded-xl overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gradient-to-r from-warmaccent-500 to-amber-600 text-white">
                <th className="px-4 py-3 text-left">Room</th>
                <th className="px-4 py-3 text-left">Primary Colors</th>
                <th className="px-4 py-3 text-left">Secondary</th>
                <th className="px-4 py-3 text-left">Avoid</th>
              </tr>
            </thead>
            <tbody>
              {roomColors.map((room, idx) => (
                <tr key={room.room} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-4 py-3 font-bold text-deepteal-700">{room.room}</td>
                  <td className="px-4 py-3 text-gray-700">{room.primary}</td>
                  <td className="px-4 py-3 text-gray-700">{room.secondary}</td>
                  <td className="px-4 py-3 text-red-600">{room.avoid}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <HighlightBox type="important">
          <p className="font-bold text-amber-700 mb-2">Color Selection Tips:</p>
          <ul className="space-y-1 text-gray-700">
            <li>• <strong>Bedrooms:</strong> Calming colors promote sleep (avoid stimulating red)</li>
            <li>• <strong>Offices:</strong> Light colors enhance clarity and focus</li>
            <li>• <strong>Living rooms:</strong> Warm colors create welcoming energy</li>
            <li>• <strong>Kitchens:</strong> Avoid water colors (blue/black) as they oppose fire element</li>
          </ul>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion" className="scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Star className="w-5 h-5" />
          </span>
          Conclusion: Sacred Space
        </h2>

        <div className="bg-gradient-to-br from-deepteal-50 via-amber-50 to-warmaccent-50 rounded-2xl p-8 border border-deepteal-200">
          <p className="text-xl text-deepteal-800 font-semibold mb-6">
            Your room is your personal sanctuary.
          </p>

          <p className="text-gray-700 mb-4">When optimized through Vastu:</p>
          <FeatureList
            items={[
              'Sleep deepens',
              'Energy increases',
              'Focus sharpens',
              'Peace settles',
              'Well-being blooms'
            ]}
            variant="check"
          />

          <p className="text-gray-700 my-6 font-medium">
            Vastu isn&apos;t superstition. It&apos;s spatial science.
          </p>

          <div className="bg-white/80 rounded-xl p-6 border border-deepteal-100">
            <p className="text-gray-700 mb-4">You can:</p>
            <ol className="space-y-2 text-gray-700">
              <li><strong>1.</strong> Learn the principles (this guide)</li>
              <li><strong>2.</strong> Assess your room (current layout)</li>
              <li><strong>3.</strong> Make simple changes (positioning, colors)</li>
              <li><strong>4.</strong> Experience transformation (within weeks)</li>
            </ol>
          </div>

          {/* Timeline */}
          <div className="mt-6 bg-gradient-to-r from-deepteal-100 to-amber-100 rounded-xl p-4">
            <h4 className="font-bold text-deepteal-800 mb-3 flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Results Timeline
            </h4>
            <div className="grid grid-cols-4 gap-2 text-center text-sm">
              <div className="bg-white rounded-lg p-2">
                <p className="font-bold text-deepteal-700">Week 1-2</p>
                <p className="text-gray-600">Subtle shifts</p>
              </div>
              <div className="bg-white rounded-lg p-2">
                <p className="font-bold text-deepteal-700">Week 3-4</p>
                <p className="text-gray-600">Noticeable calm</p>
              </div>
              <div className="bg-white rounded-lg p-2">
                <p className="font-bold text-amber-700">Month 2-3</p>
                <p className="text-gray-600">Major improvements</p>
              </div>
              <div className="bg-white rounded-lg p-2">
                <p className="font-bold text-warmaccent-700">Month 3+</p>
                <p className="text-gray-600">Sustained benefits</p>
              </div>
            </div>
          </div>

          <p className="text-lg text-warmaccent-700 font-medium mt-6 text-center italic">
            Start today. Transform your space.
          </p>
        </div>
      </section>

      {/* CTA */}
      <div className="mt-12 bg-gradient-to-r from-deepteal-600 to-amber-600 rounded-2xl p-8 text-center text-white">
        <h3 className="text-2xl font-bold mb-4">🏠 Get Your Room Vastu Analysis</h3>
        <p className="text-deepteal-100 mb-6">Discover optimal layout for your specific room</p>
        <Link
          href={`/${locale}/tools/room-advisor`}
          className="inline-block bg-white text-deepteal-700 font-bold py-3 px-8 rounded-xl hover:bg-deepteal-50 transition-colors shadow-lg"
        >
          Get Room Advisor Analysis →
        </Link>
      </div>

      {/* Related Tools */}
      <div className="mt-12 bg-gradient-to-br from-cream-50 to-deepteal-50 rounded-2xl p-8 border border-deepteal-100">
        <h3 className="text-xl font-bold text-deepteal-800 mb-6">Related Tools</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Link href={`/${locale}/tools/house-number`} className="bg-white rounded-xl p-4 border border-deepteal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-deepteal-700 group-hover:text-warmaccent-600 transition-colors">House Number</h4>
            <p className="text-sm text-gray-600">Home energy analysis</p>
          </Link>
          <Link href={`/${locale}/tools/lucky-color`} className="bg-white rounded-xl p-4 border border-deepteal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-deepteal-700 group-hover:text-warmaccent-600 transition-colors">Lucky Color</h4>
            <p className="text-sm text-gray-600">Color optimization</p>
          </Link>
          <Link href={`/${locale}/tools/life-path-number`} className="bg-white rounded-xl p-4 border border-deepteal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-deepteal-700 group-hover:text-warmaccent-600 transition-colors">Life Path Number</h4>
            <p className="text-sm text-gray-600">Personal alignment</p>
          </Link>
          <Link href={`/${locale}/tools/lo-shu-grid`} className="bg-white rounded-xl p-4 border border-deepteal-200 hover:shadow-md transition-shadow group">
            <h4 className="font-bold text-deepteal-700 group-hover:text-warmaccent-600 transition-colors">Lo Shu Grid</h4>
            <p className="text-sm text-gray-600">9 life areas</p>
          </Link>
        </div>
      </div>
    </article>
  );
}
