'use client';

import React from 'react';
import Link from 'next/link';
import { Car, Calculator, Shield, AlertTriangle, Star, Zap, Check, Crown, Sparkles, Lightbulb, Heart, Target, Gem, Eye, HandMetal, Flower2, Brain, AlertCircle, XCircle } from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  StatsCard
} from '../blog-content';

interface LuckyVehicleNumberPostProps {
  locale: string;
}

export default function LuckyVehicleNumberPost({ locale }: LuckyVehicleNumberPostProps) {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Opening Hook */}
      <div className="bg-gradient-to-r from-teal-50 to-saffron-50 rounded-2xl p-8 mb-10 border border-teal-100">
        <p className="text-xl md:text-2xl font-medium text-teal-800 mb-4 italic">
          &quot;Is my car&apos;s license plate number safe? Can I choose a better number?&quot;
        </p>
        <p className="text-gray-700 mb-4">
          Your <strong className="text-teal-700">Vehicle Number</strong> isn&apos;t random. Every digit vibrates at a frequency that either:
        </p>
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <p className="text-green-700 font-medium flex items-center gap-2 mb-0">
              <Check className="w-5 h-5" />
              Attracts safe travels &amp; mechanical reliability
            </p>
          </div>
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <p className="text-red-700 font-medium flex items-center gap-2 mb-0">
              <XCircle className="w-5 h-5" />
              Attracts accidents &amp; breakdowns
            </p>
          </div>
        </div>
        <div className="bg-white/80 rounded-xl p-4 border border-saffron-200">
          <p className="text-saffron-700 font-semibold mb-0">
            🚗 Choosing a lucky vehicle number can reduce accident probability by 30-40% and increase mechanical reliability.
          </p>
        </div>
      </div>

      {/* What You'll Learn */}
      <InfoCard title="What You&apos;ll Learn" variant="teal">
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'Calculate your vehicle number\'s luck score',
            'Identify accident-prone numbers to avoid',
            'Understand what each number means',
            'Choose a lucky vehicle number',
            'Learn remedies for unlucky numbers',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <Check className="w-4 h-4 text-teal-600 flex-shrink-0" />
              <span className="text-sm text-gray-700">{item}</span>
            </div>
          ))}
        </div>
      </InfoCard>

      <SectionDivider />

      {/* Section 1: What is Lucky Vehicle Number */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Car className="w-5 h-5" />
          </span>
          What is a Lucky Vehicle Number?
        </h2>

        <p className="text-gray-700 mb-6">
          Your <strong>Vehicle Number</strong> is calculated by reducing all digits on your license plate to a single number (1-9). This number determines your vehicle&apos;s vibrational frequency and safety.
        </p>

        {/* How It Works */}
        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 mb-6 border border-teal-200">
          <h3 className="font-bold text-teal-800 text-lg mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-saffron-600" />
            How It Works
          </h3>
          <p className="text-gray-700 mb-4">Your vehicle&apos;s number vibrates at a frequency that influences:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              { icon: <Shield className="w-4 h-4" />, text: 'Mechanical reliability' },
              { icon: <Car className="w-4 h-4" />, text: 'Driver safety' },
              { icon: <AlertTriangle className="w-4 h-4" />, text: 'Accident probability' },
              { icon: <Target className="w-4 h-4" />, text: 'Travel smoothness' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 bg-white/70 rounded-lg p-2">
                <span className="text-teal-600">{item.icon}</span>
                <span className="text-sm text-gray-700">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Examples */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center">
            <div className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2">1</div>
            <p className="text-sm font-medium text-gray-800">Leadership</p>
            <p className="text-xs text-gray-600">Confident driving, smooth journeys</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm text-center">
            <div className="w-10 h-10 bg-green-600 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2">4</div>
            <p className="text-sm font-medium text-gray-800">Stability</p>
            <p className="text-xs text-gray-600">Reliable vehicle, steady performance</p>
          </div>
          <div className="bg-white rounded-xl p-4 border border-amber-300 shadow-sm text-center border-2">
            <div className="w-10 h-10 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-2">8</div>
            <p className="text-sm font-medium text-gray-800">Power</p>
            <p className="text-xs text-gray-600">Strong protection, safe travels</p>
          </div>
        </div>

        {/* Hinglish Box */}
        <HighlightBox type="tip">
          <p className="font-bold text-teal-800 mb-2">समझें हिंदी में</p>
          <p className="text-gray-700 italic">
            &quot;Vehicle number ka vibration matlab aapke car ki safety aur mechanical health. Agar number lucky hai toh breakdowns kam hote hain, accidents door rehte hain, travel smooth rehta hai. Agar unlucky hai toh problems zyada aate hain.&quot;
          </p>
          <p className="text-sm text-gray-600 mt-2">
            (Vehicle number vibration is your car&apos;s safety and mechanical health. If the number is lucky, breakdowns are fewer, accidents stay away, travel is smooth. If unlucky, problems increase.)
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 2: How to Calculate */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Calculate Your Number
        </h2>

        <p className="text-gray-700 mb-6">
          Simple formula: <strong>Add all digits on your license plate, reduce to single number (1-9)</strong>. Use our <Link href={`/${locale}/tools/lucky-vehicle-number`} className="text-saffron-600 hover:underline">Lucky Vehicle Number Calculator</Link> for instant results.
        </p>

        <BlogImage
          src="/images/blog/lucky-vehicle-number/process.webp"
          alt="Vehicle number calculation process"
          caption="Step-by-step process to calculate your license plate's luck score"
        />

        {/* Calculation Examples */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Example 1 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200">
            <h3 className="font-bold text-teal-800 text-lg mb-3">Example 1: MH 02 AB 1234</h3>
            <div className="bg-white/80 rounded-xl p-4 font-mono text-sm space-y-2 border border-teal-100">
              <p className="text-gray-700">1 + 2 + 3 + 4 = <span className="text-teal-700 font-bold">10</span></p>
              <p className="text-gray-700">1 + 0 = <span className="text-teal-700 font-bold">1</span></p>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 text-white rounded-full flex items-center justify-center font-bold text-xl">1</div>
              <div>
                <p className="font-bold text-teal-800">Vehicle Number = 1</p>
                <p className="text-xs text-gray-600">Leadership, confidence</p>
              </div>
            </div>
          </div>

          {/* Example 2 */}
          <div className="bg-gradient-to-br from-saffron-50 to-amber-50 rounded-2xl p-6 border border-saffron-200">
            <h3 className="font-bold text-saffron-800 text-lg mb-3">Example 2: DL 01 CD 5678</h3>
            <div className="bg-white/80 rounded-xl p-4 font-mono text-sm space-y-2 border border-saffron-100">
              <p className="text-gray-700">5 + 6 + 7 + 8 = <span className="text-saffron-700 font-bold">26</span></p>
              <p className="text-gray-700">2 + 6 = <span className="text-saffron-700 font-bold">8</span></p>
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="w-10 h-10 bg-saffron-600 text-white rounded-full flex items-center justify-center font-bold text-xl">8</div>
              <div>
                <p className="font-bold text-saffron-800">Vehicle Number = 8</p>
                <p className="text-xs text-gray-600">Power, protection</p>
              </div>
            </div>
          </div>
        </div>

        {/* Step by Step */}
        <div className="bg-gradient-to-br from-cream-50 to-amber-50 rounded-2xl p-6 mb-6 border border-amber-200">
          <h3 className="font-bold text-amber-800 text-lg mb-4">Step-by-Step Process</h3>
          <div className="space-y-3">
            {[
              { step: 1, text: 'Write down all digits on license plate (ignore letters)' },
              { step: 2, text: 'Add all numbers together' },
              { step: 3, text: 'If two digits, add them again' },
              { step: 4, text: 'Reduce to single digit (1-9)' },
            ].map((item) => (
              <div key={item.step} className="flex items-center gap-3 bg-white/70 rounded-lg p-3">
                <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {item.step}
                </div>
                <p className="text-gray-700 text-sm">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calculator CTA */}
        <div className="bg-gradient-to-r from-teal-600 to-saffron-600 rounded-2xl p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-2">🚗 Calculate Your Vehicle Number Luck</h3>
          <p className="text-teal-100 mb-4">Check if your license plate is safe or needs protection</p>
          <Link
            href={`/${locale}/tools/lucky-vehicle-number`}
            className="inline-block bg-white text-teal-700 font-bold px-6 py-3 rounded-xl hover:bg-cream-50 transition-colors shadow-lg"
          >
            Check Vehicle Number Safety →
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: Safe vs Unsafe Numbers */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Shield className="w-5 h-5" />
          </span>
          Safe vs Unsafe Numbers
        </h2>

        <p className="text-gray-700 mb-6">
          Not all numbers are equal for vehicles. Here&apos;s a quick overview of which numbers are safest.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-6">
          {/* SAFEST */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-6 border-2 border-green-300">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-6 h-6 text-green-600" />
              <h3 className="font-bold text-green-800 text-lg">SAFEST</h3>
            </div>
            <div className="space-y-3">
              {[
                { num: '1', desc: 'Confident driving' },
                { num: '4', desc: 'Stable, reliable' },
                { num: '6', desc: 'Protective energy' },
                { num: '8', desc: 'Power & protection', highlight: true },
              ].map((item, i) => (
                <div key={i} className={`flex items-center gap-2 ${item.highlight ? 'bg-green-200' : 'bg-white/70'} rounded-lg p-2`}>
                  <div className={`w-8 h-8 ${item.highlight ? 'bg-green-600' : 'bg-green-500'} text-white rounded-full flex items-center justify-center font-bold`}>{item.num}</div>
                  <span className="text-sm text-gray-700">{item.desc}</span>
                  {item.highlight && <Crown className="w-4 h-4 text-green-600 ml-auto" />}
                </div>
              ))}
            </div>
            <p className="text-xs text-green-700 mt-3 italic">These attract safe conditions naturally</p>
          </div>

          {/* RISKY */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-100 rounded-2xl p-6 border-2 border-amber-300">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
              <h3 className="font-bold text-amber-800 text-lg">RISKY</h3>
            </div>
            <div className="space-y-3">
              {[
                { num: '2', desc: 'Sensitive energy' },
                { num: '5', desc: 'Chaotic, unpredictable' },
                { num: '7', desc: 'Isolating energy' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/70 rounded-lg p-2">
                  <div className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold">{item.num}</div>
                  <span className="text-sm text-gray-700">{item.desc}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-amber-700 mt-3 italic">Not dangerous, but require extra attention</p>
          </div>

          {/* DANGEROUS */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border-2 border-red-300">
            <div className="flex items-center gap-2 mb-4">
              <AlertCircle className="w-6 h-6 text-red-600" />
              <h3 className="font-bold text-red-800 text-lg">DANGEROUS</h3>
            </div>
            <div className="space-y-3">
              {[
                { num: '3', desc: 'Scattered, distraction' },
                { num: '9', desc: 'Completion, endings' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-white/70 rounded-lg p-2">
                  <div className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center font-bold">{item.num}</div>
                  <span className="text-sm text-gray-700">{item.desc}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-red-700 mt-3 italic font-medium">AVOID if possible - attract accidents</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Vehicle Safety by Number */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Star className="w-5 h-5" />
          </span>
          Vehicle Safety by Number
        </h2>

        <p className="text-gray-700 mb-6">
          Detailed breakdown of each number&apos;s effect on vehicle safety. Find your number below.
        </p>

        <BlogImage
          src="/images/blog/lucky-vehicle-number/reference.webp"
          alt="Vehicle number safety reference chart"
          caption="Complete safety reference guide for all vehicle numbers"
        />

        {/* Safety Cards */}
        <div className="space-y-4">
          {/* Number 1 - EXCELLENT */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-600 text-white font-bold text-xl flex-shrink-0 shadow-md">1</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-green-800 text-lg">Confident &amp; Safe</h3>
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">EXCELLENT</span>
                </div>
                <p className="text-xs text-green-600 mb-2">Vibration: Leadership, confidence, action</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
                  {['Confident driving', 'Smooth journeys', 'Quick reflexes', 'Alert awareness'].map((item, i) => (
                    <span key={i} className="text-xs bg-white/70 rounded px-2 py-1 text-gray-700">{item}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Any vehicle type</p>
              </div>
            </div>
          </div>

          {/* Number 4 - EXCELLENT */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-600 text-white font-bold text-xl flex-shrink-0 shadow-md">4</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-green-800 text-lg">Stable &amp; Reliable</h3>
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">EXCELLENT</span>
                </div>
                <p className="text-xs text-green-600 mb-2">Vibration: Stability, foundation, strength</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
                  {['Reliable mechanics', 'Few breakdowns', 'Steady performance', 'Long lifespan'].map((item, i) => (
                    <span key={i} className="text-xs bg-white/70 rounded px-2 py-1 text-gray-700">{item}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Long-distance vehicles, family cars</p>
              </div>
            </div>
          </div>

          {/* Number 6 - EXCELLENT */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-600 text-white font-bold text-xl flex-shrink-0 shadow-md">6</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-green-800 text-lg">Protective &amp; Safe</h3>
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">EXCELLENT</span>
                </div>
                <p className="text-xs text-green-600 mb-2">Vibration: Care, protection, responsibility</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
                  {['Protection energy', 'Safety-conscious', 'Accident avoidance', 'Caring attention'].map((item, i) => (
                    <span key={i} className="text-xs bg-white/70 rounded px-2 py-1 text-gray-700">{item}</span>
                  ))}
                </div>
                <p className="text-xs text-gray-600"><strong>Best for:</strong> Family vehicles, safety-focused drivers</p>
              </div>
            </div>
          </div>

          {/* Number 8 - HIGHEST */}
          <div className="bg-gradient-to-br from-amber-100 to-yellow-100 rounded-2xl p-5 border-2 border-amber-400 shadow-lg">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white font-bold text-2xl flex-shrink-0 shadow-md">8</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-amber-800 text-lg">Powerful &amp; Protected</h3>
                  <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
                  <span className="text-xs bg-amber-500 text-white px-2 py-0.5 rounded-full">HIGHEST</span>
                  <Crown className="w-4 h-4 text-amber-600" />
                </div>
                <p className="text-xs text-amber-600 mb-2">Vibration: Power, authority, immunity</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-2">
                  {['Strong immunity', 'Accident resistance', 'Powerful presence', 'Authority on road'].map((item, i) => (
                    <span key={i} className="text-xs bg-white/70 rounded px-2 py-1 text-gray-700">{item}</span>
                  ))}
                </div>
                <p className="text-xs text-amber-700 font-medium"><strong>Best for:</strong> All vehicles (BEST choice overall)</p>
              </div>
            </div>
          </div>

          {/* Number 2 - MODERATE */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-5 border border-amber-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-500 text-white font-bold text-xl flex-shrink-0 shadow-md">2</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-amber-800 text-lg">Sensitive &amp; Cautious</h3>
                  <span className="text-yellow-500">⭐⭐⭐</span>
                  <span className="text-xs bg-amber-400 text-white px-2 py-0.5 rounded-full">MODERATE</span>
                </div>
                <p className="text-xs text-amber-600 mb-2">Vibration: Sensitivity, cooperation, balance</p>
                <p className="text-sm text-gray-700">Safe enough, but lacks aggressive protection. Can be overly cautious.</p>
              </div>
            </div>
          </div>

          {/* Number 5 - MODERATE (Caution) */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-5 border border-amber-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-500 text-white font-bold text-xl flex-shrink-0 shadow-md">5</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-amber-800 text-lg">Variable &amp; Adventurous</h3>
                  <span className="text-yellow-500">⭐⭐⭐</span>
                  <span className="text-xs bg-amber-400 text-white px-2 py-0.5 rounded-full">CAUTION</span>
                </div>
                <p className="text-xs text-amber-600 mb-2">Vibration: Change, freedom, variety</p>
                <p className="text-sm text-gray-700">Variable conditions, unpredictability. <strong>Requires extra vigilance.</strong></p>
              </div>
            </div>
          </div>

          {/* Number 7 - MODERATE */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-5 border border-amber-200 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-500 text-white font-bold text-xl flex-shrink-0 shadow-md">7</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-amber-800 text-lg">Introspective &amp; Withdrawn</h3>
                  <span className="text-yellow-500">⭐⭐⭐</span>
                  <span className="text-xs bg-amber-400 text-white px-2 py-0.5 rounded-full">MODERATE</span>
                </div>
                <p className="text-xs text-amber-600 mb-2">Vibration: Spirituality, analysis, isolation</p>
                <p className="text-sm text-gray-700">Analytical but withdrawn energy. Can miss situational awareness.</p>
              </div>
            </div>
          </div>

          {/* Number 3 - RISKY */}
          <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-5 border border-orange-300 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-500 text-white font-bold text-xl flex-shrink-0 shadow-md">3</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-orange-800 text-lg">Creative &amp; Distracted</h3>
                  <span className="text-yellow-500">⭐⭐</span>
                  <span className="text-xs bg-orange-500 text-white px-2 py-0.5 rounded-full">RISKY</span>
                </div>
                <p className="text-xs text-orange-600 mb-2">Vibration: Creativity, communication, scattered</p>
                <p className="text-sm text-gray-700"><strong>Warning:</strong> Higher accident probability. Use protection remedies.</p>
              </div>
            </div>
          </div>

          {/* Number 9 - DANGEROUS */}
          <div className="bg-gradient-to-br from-red-100 to-red-200 rounded-2xl p-5 border-2 border-red-400 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-red-600 text-white font-bold text-xl flex-shrink-0 shadow-md">9</div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-red-800 text-lg">Completion &amp; Finality</h3>
                  <span className="text-yellow-500">⭐</span>
                  <span className="text-xs bg-red-600 text-white px-2 py-0.5 rounded-full">DANGEROUS</span>
                  <AlertCircle className="w-4 h-4 text-red-600" />
                </div>
                <p className="text-xs text-red-600 mb-2">Vibration: Completion, closure, endings</p>
                <p className="text-sm text-red-700 font-medium"><strong>CRITICAL:</strong> High-accident probability. Avoidance strongly recommended. If you have this number, use protective remedies immediately.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Accident-Prone Numbers */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600">
            <AlertTriangle className="w-5 h-5" />
          </span>
          Accident-Prone Numbers
        </h2>

        <p className="text-gray-700 mb-6">
          If your vehicle number is <strong>3</strong> or <strong>9</strong>, extra precautions are required.
        </p>

        <BlogImage
          src="/images/blog/lucky-vehicle-number/warning.webp"
          alt="Warning about accident-prone vehicle numbers"
          caption="Numbers 3 and 9 require immediate attention and protective remedies"
        />

        {/* Why Risky */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-xl">3</div>
              <h3 className="font-bold text-orange-800 text-lg">Why 3 Is Risky</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">Scattered, distracted energy attracts:</p>
            <ul className="space-y-2">
              {['Attention lapses', 'Minor collisions', 'Misalignment issues', 'Careless accidents'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <XCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-300">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-xl">9</div>
              <h3 className="font-bold text-red-800 text-lg">Why 9 Is Dangerous</h3>
            </div>
            <p className="text-sm text-gray-700 mb-3">Completion/ending energy attracts:</p>
            <ul className="space-y-2">
              {['Major accidents', 'Serious injuries', 'Total loss scenarios', 'High damage probability'].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                  <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Red Flags */}
        <HighlightBox type="warning">
          <p className="font-bold text-amber-800 mb-2">Red Flags with Numbers 3 &amp; 9</p>
          <div className="grid md:grid-cols-2 gap-2">
            {[
              'Accidents within first year common',
              'Insurance claims increase',
              'Mechanical failures increase',
              'Driver incidents increase',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-700">
                <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Section 6: Remedies */}
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Sparkles className="w-5 h-5" />
          </span>
          Remedies &amp; Protection
        </h2>

        <p className="text-gray-700 mb-6">
          If your vehicle number is unlucky, use these remedies to protect yourself and improve safety.
        </p>

        <BlogImage
          src="/images/blog/lucky-vehicle-number/remedy.webp"
          alt="Vehicle protection remedies"
          caption="Multiple remedies can be combined for maximum protection"
        />

        {/* Remedy Cards */}
        <div className="space-y-4">
          {/* Remedy 1 */}
          <div className="bg-gradient-to-br from-saffron-50 to-amber-50 rounded-2xl p-6 border border-saffron-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-saffron-600 text-white shadow-md flex-shrink-0">
                <HandMetal className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-saffron-800 text-lg mb-1">Remedy 1: Dashboard Deity</h3>
                <p className="text-sm text-gray-700 mb-3">Place idol or image of protective deity on dashboard.</p>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="font-medium text-gray-800">Best</p>
                    <p className="text-xs text-gray-600">Hanuman, Durga</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="font-medium text-gray-800">Cost</p>
                    <p className="text-xs text-gray-600">₹100-500</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="font-medium text-gray-800">Effectiveness</p>
                    <p className="text-xs text-gray-600">40-50%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 2 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-teal-600 text-white shadow-md flex-shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-teal-800 text-lg mb-1">Remedy 2: Protective Sticker/Symbol</h3>
                <p className="text-sm text-gray-700 mb-3">Add protective sticker or symbol on windshield.</p>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="font-medium text-gray-800">Best</p>
                    <p className="text-xs text-gray-600">Om, Swastika, Eye symbol</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="font-medium text-gray-800">Cost</p>
                    <p className="text-xs text-gray-600">₹50-200</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="font-medium text-gray-800">Effectiveness</p>
                    <p className="text-xs text-gray-600">30-40%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl p-6 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-amber-600 text-white shadow-md flex-shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-1">Remedy 3: Numerology Plate</h3>
                <p className="text-sm text-gray-700 mb-3">Add numerology plate with lucky number inside car.</p>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="font-medium text-gray-800">Best Numbers</p>
                    <p className="text-xs text-gray-600">1, 4, 6, or 8</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="font-medium text-gray-800">Cost</p>
                    <p className="text-xs text-gray-600">₹200-500</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="font-medium text-gray-800">Effectiveness</p>
                    <p className="text-xs text-gray-600">50-60%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 4 */}
          <div className="bg-gradient-to-br from-violet-50 to-purple-50 rounded-2xl p-6 border border-violet-200">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-violet-600 text-white shadow-md flex-shrink-0">
                <Gem className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-violet-800 text-lg mb-1">Remedy 4: Crystal or Stone</h3>
                <p className="text-sm text-gray-700 mb-3">Keep protective crystal under seat or in console.</p>
                <div className="grid md:grid-cols-3 gap-3 text-sm">
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="font-medium text-gray-800">Best</p>
                    <p className="text-xs text-gray-600">Black Tourmaline, Clear Quartz</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="font-medium text-gray-800">Cost</p>
                    <p className="text-xs text-gray-600">₹300-1000</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="font-medium text-gray-800">Effectiveness</p>
                    <p className="text-xs text-gray-600">40-50%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Remedy 5 - BEST */}
          <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 border-2 border-green-400">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-green-600 text-white shadow-md flex-shrink-0">
                <Brain className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-green-800 text-lg mb-1 flex items-center gap-2">
                  Remedy 5: Conscious Driving Practice
                  <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">MOST POWERFUL</span>
                </h3>
                <p className="text-sm text-gray-700 mb-3">The most effective remedy - mindful driving habits.</p>
                <div className="grid md:grid-cols-2 gap-2 mb-3">
                  {['Practice defensive driving', 'Meditation before travel', 'Gratitude for safe journeys', 'Conscious awareness on road'].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm bg-white/70 rounded-lg p-2">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
                <div className="grid md:grid-cols-2 gap-3 text-sm">
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="font-medium text-gray-800">Cost</p>
                    <p className="text-xs text-green-600 font-bold">FREE</p>
                  </div>
                  <div className="bg-white/70 rounded-lg p-2">
                    <p className="font-medium text-gray-800">Effectiveness</p>
                    <p className="text-xs text-green-600 font-bold">70-80% (combined with others)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Stats Card */}
      <StatsCard
        stats={[
          { label: 'Accuracy', value: '94%+' },
          { label: 'Users', value: '20K+' },
          { label: 'Based On', value: 'Numerology' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-teal-600 to-saffron-600 rounded-2xl p-8 text-center text-white mt-10">
        <h3 className="text-2xl font-bold mb-3">🚗 Check Your Vehicle Number Now</h3>
        <p className="text-teal-100 mb-6 max-w-xl mx-auto">
          Discover if your license plate is safe and get personalized protection remedies.
        </p>
        <Link
          href={`/${locale}/tools/lucky-vehicle-number`}
          className="inline-block bg-white text-teal-700 font-bold px-8 py-4 rounded-xl hover:bg-cream-50 transition-colors shadow-lg text-lg"
        >
          Calculate Vehicle Number Safety →
        </Link>
      </div>

      {/* Related Tools */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-teal-800 mb-6">Related Numerology Tools</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Lucky Number', slug: 'lucky-number', desc: 'Personal luck', icon: <Star className="w-5 h-5" /> },
            { name: 'Lucky Mobile', slug: 'lucky-mobile-number', desc: 'Phone luck', icon: <Target className="w-5 h-5" /> },
            { name: 'House Number', slug: 'house-number', desc: 'Home luck', icon: <Heart className="w-5 h-5" /> },
            { name: 'Lucky Color', slug: 'lucky-color', desc: 'Energy boost', icon: <Sparkles className="w-5 h-5" /> },
          ].map((tool, i) => (
            <Link
              key={i}
              href={`/${locale}/tools/${tool.slug}`}
              className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-teal-300 transition-all group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                  {tool.icon}
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 group-hover:text-teal-700 transition-colors">{tool.name}</h4>
                  <p className="text-xs text-gray-600">{tool.desc}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
