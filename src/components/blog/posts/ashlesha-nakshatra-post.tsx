'use client';

import React from 'react';
import Link from 'next/link';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  RelatedToolCard,
  StatsCard,
} from '../blog-content';

interface AshleshaPostProps {
  locale: string;
}

export default function AshleshaNakshatraPost({ locale }: AshleshaPostProps) {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Opening Hook */}
      <div className="bg-gradient-to-br from-deepteal-50 to-amber-50 rounded-2xl p-8 mb-10 border border-deepteal-100">
        <p className="text-xl md:text-2xl text-deepteal-800 font-medium leading-relaxed mb-6 italic">
          &quot;Why can I read people so easily? Why do I manipulate without trying? Why is everyone cautious around me?&quot;
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
          If you have these experiences, you might have{' '}
          <strong className="text-deepteal-700">Ashlesha Nakshatra</strong> influence—the serpent&apos;s powerful but misunderstood energy. Ashlesha is one of the most powerful yet feared nakshatras (lunar mansions) in Vedic astrology.
        </p>
      </div>

      {/* Key Concept */}
      <HighlightBox type="important">
        <p className="font-bold text-lg mb-3">Ashlesha Nakshatra = Serpent wisdom with hidden dangers</p>
        <div className="grid md:grid-cols-2 gap-4 mt-4">
          <div>
            <p className="font-semibold text-deepteal-700 mb-2">The Serpent Nature:</p>
            <ul className="text-sm space-y-1">
              <li><strong>Serpent:</strong> Intelligent, observant, mysterious</li>
              <li><strong>Power:</strong> Reading people, strategic thinking</li>
            </ul>
          </div>
          <div>
            <p className="font-semibold text-amber-700 mb-2">The Dual Path:</p>
            <ul className="text-sm space-y-1">
              <li><strong>Light:</strong> Healing, wisdom, transformation</li>
              <li><strong>Shadow:</strong> Manipulation, deception</li>
            </ul>
          </div>
        </div>
      </HighlightBox>

      <p className="text-gray-700 leading-relaxed mb-6">
        Ashlesha doesn&apos;t make you evil. It makes you <strong className="text-deepteal-700">powerful and perceptive, with the choice to use it for good or harm</strong>. This nakshatra produces both great spiritual leaders and brilliant strategists—but also manipulators. The choice is yours.
      </p>

      {/* Dual Nature Cards */}
      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-6 border border-deepteal-200">
          <h4 className="font-bold text-deepteal-800 mb-3 flex items-center gap-2">
            <span className="text-2xl">✨</span> Positive Manifestation
          </h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>✅ Great spiritual leaders</li>
            <li>✅ Brilliant strategists</li>
            <li>✅ Psychological healers</li>
            <li>✅ Transformational teachers</li>
            <li>✅ Trusted advisors</li>
          </ul>
        </div>
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
          <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
            <span className="text-2xl">⚠️</span> Shadow Expression
          </h4>
          <ul className="space-y-2 text-gray-700 text-sm">
            <li>❌ Manipulators</li>
            <li>❌ Deceivers and schemers</li>
            <li>❌ Lonely and isolated</li>
            <li>❌ Feared and avoided</li>
            <li>❌ Abusing persuasive power</li>
          </ul>
        </div>
      </div>

      {/* CTA Card */}
      <RelatedToolCard
        title="Check Your Ashlesha Nakshatra Status"
        description="Discover if serpent nakshatra flows through you and learn to channel it wisely"
        href={`/${locale}/tools/nakshatra`}
      />

      <SectionDivider />

      {/* What Is Ashlesha Nakshatra? */}
      <section id="what-is-ashlesha">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            🐍
          </span>
          What Is Ashlesha Nakshatra?
        </h2>

        <BlogImage
          src="/images/blog/ashlesha-nakshatra/concept.webp"
          alt="Ashlesha Nakshatra serpent coiled symbol representing wisdom and mystery"
          caption="Ashlesha: The embracing serpent nakshatra of hidden wisdom"
        />

        <InfoCard title="Ashlesha at a Glance" variant="deepteal">
          <p className="mb-4">
            <strong>Ashlesha = &quot;Embracing&quot; or &quot;Coiled&quot; (like a serpent)</strong>
          </p>
          <p className="text-gray-700">
            Ashlesha is the 9th nakshatra (lunar mansion), spanning 104°20&apos; to 117°20&apos; in sidereal zodiac (Cancer). It embodies the serpent&apos;s qualities—intelligence, observation, mystery, and the power of transformation through shedding old skins.
          </p>
        </InfoCard>

        {/* Core Characteristics */}
        <div className="bg-gradient-to-br from-cream-50 to-cream-100 rounded-2xl p-6 my-8 border border-cream-200">
          <h3 className="text-xl font-bold text-deepteal-800 mb-6">Core Characteristics</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/80 rounded-xl p-4 border border-deepteal-100">
              <p className="font-semibold text-deepteal-700 mb-2">🪐 Ruling Planet</p>
              <p className="text-gray-700">Mercury (intellect, communication, strategy)</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-deepteal-100">
              <p className="font-semibold text-deepteal-700 mb-2">🐍 Symbol</p>
              <p className="text-gray-700">Serpent coiled in a circle</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-deepteal-100">
              <p className="font-semibold text-deepteal-700 mb-2">🙏 Deity</p>
              <p className="text-gray-700">Ahi (the serpent)</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-deepteal-100">
              <p className="font-semibold text-deepteal-700 mb-2">🌊 Element</p>
              <p className="text-gray-700">Water (depth, secrecy)</p>
            </div>
            <div className="bg-white/80 rounded-xl p-4 border border-amber-100 md:col-span-2">
              <p className="font-semibold text-amber-700 mb-2">🔮 Guna (Quality)</p>
              <p className="text-gray-700">Tamasic (hidden, mysterious, transformative)</p>
            </div>
          </div>
        </div>

        {/* Serpent Nature */}
        <h3 className="text-xl font-bold text-deepteal-700 mt-8 mb-4">The Serpent Nature</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Serpents are powerful symbols across cultures. Ashlesha people inherit these serpentine qualities:
        </p>
        <FeatureList
          items={[
            'Highly intelligent and observant—missing nothing',
            'Strategic and calculating—thinking multiple moves ahead',
            'Mysterious and secretive—difficult to read',
            'Powerful and dangerous—commanding respect',
            'Capable of transformation—shedding old patterns like snake skin',
          ]}
          variant="check"
        />

        <HighlightBox type="note">
          <p className="font-semibold text-deepteal-800 mb-2">Hindi Understanding:</p>
          <p className="text-gray-700 italic">
            &quot;Ashlesha nakshatra wale log serpent jaise hote hain. Samajh, strategy, observation—sab kuch sharp. Lekin yeh power do tarike se use ho sakta hai: Healing ke liye, ya manipulation ke liye. Ashlesha wale ko apna power samjhna zaroori hai—aur acha use karna zaroori hai.&quot;
          </p>
          <p className="text-sm text-gray-600 mt-2">
            (Translation: Ashlesha people are like serpents. Understanding, strategy, observation—all sharp. But this power can be used two ways: for healing or for manipulation. Ashlesha people need to understand their power and use it well.)
          </p>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* How to Check Your Nakshatra */}
      <section id="how-to-check">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            🔍
          </span>
          How to Check Your Ashlesha Status
        </h2>

        <BlogImage
          src="/images/blog/ashlesha-nakshatra/analysis.webp"
          alt="Birth chart analysis showing Ashlesha nakshatra position"
          caption="Identifying Ashlesha influence through birth chart analysis"
        />

        <InfoCard title="What You Need" variant="highlight">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <span className="text-3xl mb-2 block">🕐</span>
              <p className="font-semibold text-deepteal-700">Exact Birth Time</p>
              <p className="text-sm text-gray-600">Within 2 minutes for accuracy</p>
            </div>
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <span className="text-3xl mb-2 block">📅</span>
              <p className="font-semibold text-deepteal-700">Birth Date</p>
              <p className="text-sm text-gray-600">For Moon&apos;s position calculation</p>
            </div>
            <div className="text-center p-4 bg-white/60 rounded-lg">
              <span className="text-3xl mb-2 block">📍</span>
              <p className="font-semibold text-deepteal-700">Birth Location</p>
              <p className="text-sm text-gray-600">For astronomical calculation</p>
            </div>
          </div>
        </InfoCard>

        {/* Steps */}
        <div className="space-y-6 my-8">
          <div className="bg-gradient-to-r from-deepteal-50 to-deepteal-100 rounded-xl p-6 border-l-4 border-deepteal-500">
            <h4 className="font-bold text-deepteal-800 mb-2">Step 1: Generate Your Birth Chart</h4>
            <p className="text-gray-700">
              Use our{' '}
              <Link href={`/${locale}/tools/nakshatra`} className="text-warmaccent-600 hover:underline font-medium">
                Nakshatra Calculator
              </Link>{' '}
              to find your birth nakshatra based on Moon&apos;s exact position.
            </p>
          </div>
          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-xl p-6 border-l-4 border-amber-500">
            <h4 className="font-bold text-amber-800 mb-2">Step 2: Verify Ashlesha Position</h4>
            <p className="text-gray-700">
              Ashlesha nakshatra = Moon (and Lagna) between <strong>104°20&apos; - 117°20&apos;</strong> in Cancer. If your birth Moon is in this range, you have Ashlesha influence.
            </p>
          </div>
          <div className="bg-gradient-to-r from-warmaccent-50 to-warmaccent-100 rounded-xl p-6 border-l-4 border-warmaccent-500">
            <h4 className="font-bold text-warmaccent-800 mb-2">Step 3: Check Strength Factors</h4>
            <p className="text-gray-700 mb-3">Different planetary placements create varying levels of influence:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm bg-white/80 rounded-lg overflow-hidden">
                <thead className="bg-warmaccent-100">
                  <tr>
                    <th className="text-left p-3 font-semibold text-warmaccent-800">Factor</th>
                    <th className="text-left p-3 font-semibold text-warmaccent-800">Influence Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-warmaccent-100">
                  <tr><td className="p-3">Moon in Ashlesha</td><td className="p-3">Primary (strongest)</td></tr>
                  <tr><td className="p-3">Lagna in Ashlesha</td><td className="p-3">Secondary (personality)</td></tr>
                  <tr><td className="p-3">Venus in Ashlesha</td><td className="p-3">Relationship level</td></tr>
                  <tr><td className="p-3">Mercury in Ashlesha</td><td className="p-3">Communication level</td></tr>
                  <tr><td className="p-3">Multiple planets</td><td className="p-3">Amplified effect</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* What Calculator Shows */}
        <div className="bg-gradient-to-br from-deepteal-100 to-amber-100 rounded-2xl p-6 my-8">
          <h4 className="font-bold text-deepteal-800 mb-4 text-lg">Our Ashlesha Calculator Shows:</h4>
          <FeatureList
            items={[
              'Is Ashlesha your nakshatra? (birth Moon position)',
              'Strength of serpent influence in your chart',
              'Which planets occupy Ashlesha nakshatra',
              'Your specific hidden powers and abilities',
              'Guidance for ethical channeling of power',
            ]}
            variant="check"
          />
        </div>

        <RelatedToolCard
          title="Check Your Ashlesha Nakshatra Now"
          description="Discover if serpent nakshatra flows through you and understand your unique abilities"
          href={`/${locale}/tools/nakshatra`}
        />
      </section>

      <SectionDivider />

      {/* Ashlesha Characteristics */}
      <section id="characteristics">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            🌟
          </span>
          Ashlesha Characteristics Explained
        </h2>

        <p className="text-gray-700 leading-relaxed mb-8">
          Ashlesha people share distinctive traits that set them apart. These characteristics are neither good nor bad—they&apos;re powerful tools that can be used constructively or destructively.
        </p>

        {/* Characteristic Cards */}
        <div className="grid gap-6">
          {/* Intellect & Strategy */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">🧠</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-deepteal-800 text-lg mb-2">Intellect & Strategy</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-deepteal-100">
                  <p className="text-gray-700 text-sm"><strong>What you possess:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Sharp, penetrating intelligence</li>
                    <li>• Ability to see through others&apos; motives</li>
                    <li>• Strategic thinking and planning ahead</li>
                    <li>• Natural chess-player mentality</li>
                  </ul>
                </div>
                <p className="text-xs text-deepteal-600 mt-3 italic font-medium">Expression: You naturally think multiple moves ahead</p>
              </div>
            </div>
          </div>

          {/* Observation & Psychology */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-600 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">👁️</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">Observation & Psychology</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-amber-100">
                  <p className="text-gray-700 text-sm"><strong>What you possess:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Exceptional people-reading ability</li>
                    <li>• Deep understanding of human psychology</li>
                    <li>• Reading subtle cues others miss</li>
                    <li>• Understanding hidden motivations</li>
                  </ul>
                </div>
                <p className="text-xs text-amber-600 mt-3 italic font-medium">Expression: You know what people are thinking before they speak</p>
              </div>
            </div>
          </div>

          {/* Secrecy & Mystery */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-2xl p-6 border border-warmaccent-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-warmaccent-500 to-warmaccent-600 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">🌙</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-warmaccent-800 text-lg mb-2">Secrecy & Mystery</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-warmaccent-100">
                  <p className="text-gray-700 text-sm"><strong>What you possess:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Natural tendency toward privacy</li>
                    <li>• Ability to keep secrets easily</li>
                    <li>• Mysterious, enigmatic demeanor</li>
                    <li>• Difficult for others to read</li>
                  </ul>
                </div>
                <p className="text-xs text-warmaccent-600 mt-3 italic font-medium">Expression: People feel you&apos;re hiding something (you usually are)</p>
              </div>
            </div>
          </div>

          {/* Communication & Persuasion */}
          <div className="bg-gradient-to-br from-deepteal-50 to-amber-50 rounded-2xl p-6 border border-deepteal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-deepteal-600 to-amber-500 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">🗣️</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-deepteal-800 text-lg mb-2">Communication & Persuasion</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-deepteal-100">
                  <p className="text-gray-700 text-sm"><strong>What you possess:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Excellent communication skills</li>
                    <li>• Powerful persuasive abilities</li>
                    <li>• Captivating storytelling power</li>
                    <li>• Ability to sway opinions easily</li>
                  </ul>
                </div>
                <p className="text-xs text-deepteal-600 mt-3 italic font-medium">Expression: You&apos;re naturally convincing; people believe what you say</p>
              </div>
            </div>
          </div>

          {/* Transformation & Healing */}
          <div className="bg-gradient-to-br from-amber-50 to-warmaccent-50 rounded-2xl p-6 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-600 to-warmaccent-500 text-white flex-shrink-0 shadow-md">
                <span className="text-2xl">🔄</span>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">Transformation & Healing</h3>
                <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-2 border border-amber-100">
                  <p className="text-gray-700 text-sm"><strong>What you possess:</strong></p>
                  <ul className="text-sm text-gray-600 space-y-1 ml-4">
                    <li>• Deep understanding of transformation</li>
                    <li>• Ability to help others evolve</li>
                    <li>• Psychological healing insight</li>
                    <li>• Ability to shed old patterns</li>
                  </ul>
                </div>
                <p className="text-xs text-amber-600 mt-3 italic font-medium">Expression: You help people change; they often credit you for breakthroughs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Hidden Powers */}
      <section id="powers">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            ⚡
          </span>
          Hidden Powers & Abilities
        </h2>

        <BlogImage
          src="/images/blog/ashlesha-nakshatra/remedy.webp"
          alt="Ashlesha nakshatra powers channeled for healing and transformation"
          caption="Serpent powers used for healing and positive transformation"
        />

        <p className="text-gray-700 leading-relaxed mb-6">
          These are your natural superpowers when channeled constructively. Each power has specific applications where Ashlesha natives excel.
        </p>

        {/* Powers Grid */}
        <div className="grid md:grid-cols-2 gap-6 my-8">
          <div className="bg-gradient-to-br from-deepteal-500 to-deepteal-600 text-white rounded-2xl p-6">
            <h4 className="font-bold text-xl mb-3">🔮 Psychological Insight</h4>
            <p className="text-deepteal-100 mb-4">You understand human psychology naturally without formal training.</p>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-sm font-medium">Best Applications:</p>
              <p className="text-deepteal-100 text-sm">Therapist, counselor, life coach, mentor</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-2xl p-6">
            <h4 className="font-bold text-xl mb-3">♟️ Strategic Thinking</h4>
            <p className="text-amber-100 mb-4">You see patterns and moves that others completely miss.</p>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-sm font-medium">Best Applications:</p>
              <p className="text-amber-100 text-sm">Business strategy, politics, negotiation, planning</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-warmaccent-500 to-warmaccent-600 text-white rounded-2xl p-6">
            <h4 className="font-bold text-xl mb-3">💫 Healing Potential</h4>
            <p className="text-warmaccent-100 mb-4">You can facilitate profound transformation in others.</p>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-sm font-medium">Best Applications:</p>
              <p className="text-warmaccent-100 text-sm">Healing work, counseling, teaching, mentoring</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-deepteal-600 to-amber-500 text-white rounded-2xl p-6">
            <h4 className="font-bold text-xl mb-3">🔍 Research Ability</h4>
            <p className="text-deepteal-100 mb-4">You naturally dig deep and uncover hidden truths.</p>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-sm font-medium">Best Applications:</p>
              <p className="text-deepteal-100 text-sm">Research, investigation, journalism, analysis</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-600 to-warmaccent-500 text-white rounded-2xl p-6 md:col-span-2">
            <h4 className="font-bold text-xl mb-3">✨ Intuitive Knowing</h4>
            <p className="text-amber-100 mb-4">You know things without being told—a sixth sense for truth and deception.</p>
            <div className="bg-white/20 rounded-lg p-3">
              <p className="text-sm font-medium">Best Applications:</p>
              <p className="text-amber-100 text-sm">Intuitive guidance, spiritual teaching, counseling, advisory roles</p>
            </div>
          </div>
        </div>

        <StatsCard
          stats={[
            { label: 'Accuracy', value: '99.9%' },
            { label: 'Users', value: '45K+' },
            { label: 'Based On', value: 'Vedic' },
            { label: 'Cost', value: 'FREE' },
          ]}
        />
      </section>

      <SectionDivider />

      {/* The Dark Side */}
      <section id="dark-side">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-100 text-amber-600">
            ⚠️
          </span>
          The Dark Side: Manipulation Tendency
        </h2>

        <BlogImage
          src="/images/blog/ashlesha-nakshatra/reference.webp"
          alt="Warning about Ashlesha manipulation tendencies"
          caption="Understanding the shadow side is crucial for ethical use of power"
        />

        <HighlightBox type="warning">
          <p className="font-semibold text-lg mb-2">Ashlesha power can be misused</p>
          <p className="text-gray-700">Awareness of your shadow tendencies is your protection. Most Ashlesha manipulation is <strong>unconscious</strong>—understanding it is the first step to ethical use.</p>
        </HighlightBox>

        {/* How Manipulation Happens */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 my-8 border border-gray-200">
          <h3 className="text-xl font-bold text-gray-800 mb-4">How Manipulation Happens</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl">
              <span className="w-8 h-8 flex items-center justify-center bg-amber-100 text-amber-700 rounded-full font-bold">1</span>
              <p className="text-gray-700">You observe a person&apos;s weakness or vulnerability</p>
            </div>
            <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl">
              <span className="w-8 h-8 flex items-center justify-center bg-amber-100 text-amber-700 rounded-full font-bold">2</span>
              <p className="text-gray-700">You understand exactly what they want or fear</p>
            </div>
            <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl">
              <span className="w-8 h-8 flex items-center justify-center bg-amber-100 text-amber-700 rounded-full font-bold">3</span>
              <p className="text-gray-700">You use that knowledge to influence or control them</p>
            </div>
            <div className="flex items-center gap-4 bg-white/80 p-4 rounded-xl">
              <span className="w-8 h-8 flex items-center justify-center bg-amber-100 text-amber-700 rounded-full font-bold">4</span>
              <p className="text-gray-700">They don&apos;t even realize they&apos;re being manipulated</p>
            </div>
          </div>
          <p className="text-amber-700 mt-4 text-sm italic">Why it&apos;s easy: Your natural insight makes it effortless—almost automatic.</p>
        </div>

        {/* Manipulation Patterns */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 my-8 border border-amber-200">
          <h3 className="text-xl font-bold text-amber-800 mb-4">Common Manipulation Patterns</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm bg-white/80 rounded-lg overflow-hidden">
              <thead className="bg-amber-100">
                <tr>
                  <th className="text-left p-3 font-semibold text-amber-800">Pattern</th>
                  <th className="text-left p-3 font-semibold text-amber-800">Indication</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-100">
                <tr><td className="p-3">&quot;They always agree with my ideas&quot;</td><td className="p-3">Using charm to control</td></tr>
                <tr><td className="p-3">&quot;People do what I suggest without questioning&quot;</td><td className="p-3">Mind manipulation</td></tr>
                <tr><td className="p-3">&quot;I can get anyone to do anything&quot;</td><td className="p-3">Abusing persuasive power</td></tr>
                <tr><td className="p-3">&quot;They&apos;re addicted to me&quot;</td><td className="p-3">Creating dependency</td></tr>
                <tr><td className="p-3">&quot;Nobody knows the real me&quot;</td><td className="p-3">Using mystery as weapon</td></tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Why You Might Manipulate */}
        <InfoCard title="Why You Might Manipulate (Not Always Evil)" variant="amber">
          <p className="text-gray-700 mb-4">Understanding the root causes helps break the pattern:</p>
          <ul className="space-y-2 text-gray-700">
            <li>• You manipulate <strong>without thinking</strong>—it&apos;s become a habit</li>
            <li>• You believe it&apos;s <strong>&quot;for their good&quot;</strong>—rationalization</li>
            <li>• You like the <strong>power feeling</strong>—ego satisfaction</li>
            <li>• You&apos;ve been <strong>hurt</strong> and use it defensively</li>
            <li>• You <strong>don&apos;t realize</strong> you&apos;re doing it—unconscious behavior</li>
          </ul>
          <p className="text-amber-700 mt-4 text-sm font-medium">Realization: Most Ashlesha manipulation is unconscious. Awareness changes everything.</p>
        </InfoCard>
      </section>

      <SectionDivider />

      {/* Ethical Use */}
      <section id="ethics">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            ⚖️
          </span>
          Ethical Use of Ashlesha Power
        </h2>

        <p className="text-gray-700 leading-relaxed mb-6">
          Transform your power from potential harm to genuine healing. These five rules help Ashlesha natives channel their abilities constructively.
        </p>

        {/* Five Rules */}
        <div className="space-y-6 my-8">
          <div className="bg-gradient-to-r from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200">
            <h4 className="font-bold text-deepteal-800 text-lg mb-3 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-deepteal-500 text-white rounded-full">1</span>
              Transparency
            </h4>
            <p className="text-gray-700 mb-3">Tell people what you know about them openly.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <p className="text-sm text-red-700"><strong>Instead of:</strong> Using their weakness against them secretly</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <p className="text-sm text-green-700"><strong>Do:</strong> Share insights openly to help them grow</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
            <h4 className="font-bold text-amber-800 text-lg mb-3 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-amber-500 text-white rounded-full">2</span>
              Permission
            </h4>
            <p className="text-gray-700 mb-3">Ask before using your knowledge to influence.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <p className="text-sm text-red-700"><strong>Instead of:</strong> Manipulating subtly without consent</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <p className="text-sm text-green-700"><strong>Do:</strong> &quot;Can I offer you a perspective?&quot;</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-warmaccent-50 to-warmaccent-100 rounded-2xl p-6 border border-warmaccent-200">
            <h4 className="font-bold text-warmaccent-800 text-lg mb-3 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-warmaccent-500 text-white rounded-full">3</span>
              Empowerment
            </h4>
            <p className="text-gray-700 mb-3">Use knowledge to empower, not control.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <p className="text-sm text-red-700"><strong>Instead of:</strong> Making them dependent on you</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <p className="text-sm text-green-700"><strong>Do:</strong> Teaching them to see what you see</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-deepteal-50 to-amber-50 rounded-2xl p-6 border border-deepteal-200">
            <h4 className="font-bold text-deepteal-800 text-lg mb-3 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-deepteal-600 text-white rounded-full">4</span>
              Integrity
            </h4>
            <p className="text-gray-700 mb-3">Align your power with truth.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <p className="text-sm text-red-700"><strong>Instead of:</strong> Using psychology to deceive</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <p className="text-sm text-green-700"><strong>Do:</strong> Using psychology to heal and guide</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-warmaccent-50 rounded-2xl p-6 border border-amber-200">
            <h4 className="font-bold text-amber-800 text-lg mb-3 flex items-center gap-2">
              <span className="w-8 h-8 flex items-center justify-center bg-amber-600 text-white rounded-full">5</span>
              Service
            </h4>
            <p className="text-gray-700 mb-3">Use power to serve, not dominate.</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-3 rounded-lg border border-red-200">
                <p className="text-sm text-red-700"><strong>Instead of:</strong> Power-over (domination)</p>
              </div>
              <div className="bg-green-50 p-3 rounded-lg border border-green-200">
                <p className="text-sm text-green-700"><strong>Do:</strong> Power-with, power-for (collaboration)</p>
              </div>
            </div>
          </div>
        </div>

        <HighlightBox type="tip">
          <p className="font-semibold text-lg mb-2">Strengthening Ethical Use</p>
          <p className="text-gray-700 mb-3">Practice these daily:</p>
          <ul className="text-gray-700 space-y-1">
            <li>• <strong>Transparency:</strong> Tell truth more, even when it&apos;s uncomfortable</li>
            <li>• <strong>Service:</strong> Help without expecting anything in return</li>
            <li>• <strong>Humility:</strong> Remember you&apos;re not all-knowing</li>
            <li>• <strong>Compassion:</strong> Feel what others feel, not just analyze</li>
          </ul>
        </HighlightBox>
      </section>

      <SectionDivider />

      {/* Calculator Guide */}
      <section id="calculator-guide">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            🛠️
          </span>
          Using Our Ashlesha Calculator
        </h2>

        <InfoCard title="What You&apos;ll Discover" variant="highlight">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <p className="font-semibold text-deepteal-700 mb-2">Instant Analysis:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Is Ashlesha your nakshatra?</li>
                <li>• Strength of serpent influence</li>
                <li>• Which planets in Ashlesha</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold text-amber-700 mb-2">Personalized Guidance:</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Your specific hidden powers</li>
                <li>• Shadow tendencies to watch</li>
                <li>• Ethical channeling strategies</li>
              </ul>
            </div>
          </div>
        </InfoCard>

        {/* Career Recommendations */}
        <div className="bg-gradient-to-br from-deepteal-100 to-amber-100 rounded-2xl p-6 my-8">
          <h4 className="font-bold text-deepteal-800 mb-4 text-lg">Ideal Careers for Ashlesha</h4>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-white/80 p-4 rounded-xl">
              <span className="text-2xl mb-2 block">🧘</span>
              <p className="font-semibold text-deepteal-700">Healing</p>
              <p className="text-sm text-gray-600">Psychology, therapy, counseling</p>
            </div>
            <div className="bg-white/80 p-4 rounded-xl">
              <span className="text-2xl mb-2 block">📊</span>
              <p className="font-semibold text-deepteal-700">Strategy</p>
              <p className="text-sm text-gray-600">Business, planning, consulting</p>
            </div>
            <div className="bg-white/80 p-4 rounded-xl">
              <span className="text-2xl mb-2 block">🔬</span>
              <p className="font-semibold text-deepteal-700">Research</p>
              <p className="text-sm text-gray-600">Investigation, analysis, journalism</p>
            </div>
            <div className="bg-white/80 p-4 rounded-xl">
              <span className="text-2xl mb-2 block">🙏</span>
              <p className="font-semibold text-deepteal-700">Spiritual</p>
              <p className="text-sm text-gray-600">Teaching, mentoring, guidance</p>
            </div>
            <div className="bg-white/80 p-4 rounded-xl">
              <span className="text-2xl mb-2 block">🤝</span>
              <p className="font-semibold text-deepteal-700">Negotiation</p>
              <p className="text-sm text-gray-600">Mediation, diplomacy, HR</p>
            </div>
            <div className="bg-white/80 p-4 rounded-xl">
              <span className="text-2xl mb-2 block">🎭</span>
              <p className="font-semibold text-deepteal-700">Transformation</p>
              <p className="text-sm text-gray-600">Life coaching, mentoring</p>
            </div>
          </div>
        </div>

        <RelatedToolCard
          title="Discover Your Ashlesha Power"
          description="Check if serpent nakshatra flows through you and learn to master it wisely"
          href={`/${locale}/tools/nakshatra`}
        />
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            🐍
          </span>
          Master Your Serpent Power
        </h2>

        <div className="bg-gradient-to-br from-deepteal-50 to-amber-50 rounded-2xl p-8 border border-deepteal-100">
          <p className="text-xl text-deepteal-800 font-medium mb-6">
            Here&apos;s the truth about Ashlesha Nakshatra: You possess rare, powerful gifts. <strong>The serpent is neither evil nor good—it&apos;s powerful.</strong>
          </p>
          <p className="text-gray-700 mb-6">
            What you do with that power determines your destiny.
          </p>

          {/* Outcome Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-gradient-to-br from-deepteal-100 to-deepteal-200 rounded-xl p-6 border border-deepteal-300">
              <h4 className="font-bold text-deepteal-800 mb-3">Ashlesha Masters Became:</h4>
              <ul className="space-y-2 text-deepteal-700">
                <li>✅ Greatest healers and therapists</li>
                <li>✅ Spiritual leaders and gurus</li>
                <li>✅ Strategic geniuses</li>
                <li>✅ Transformational teachers</li>
                <li>✅ Trusted advisors</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 rounded-xl p-6 border border-amber-300">
              <h4 className="font-bold text-amber-800 mb-3">Those Who Misused It Became:</h4>
              <ul className="space-y-2 text-amber-700">
                <li>❌ Manipulators and abusers</li>
                <li>❌ Deceivers and schemers</li>
                <li>❌ Lonely and isolated</li>
                <li>❌ Feared and avoided</li>
                <li>❌ Unfulfilled despite ability</li>
              </ul>
            </div>
          </div>

          <p className="text-xl text-center font-bold text-deepteal-800">
            Your choice. Your power. Your responsibility.
          </p>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-deepteal-600 to-amber-500 rounded-2xl p-8 text-center text-white mt-8">
          <h3 className="text-2xl font-bold mb-4">Discover Your Ashlesha Nakshatra Status</h3>
          <p className="text-deepteal-100 mb-6">Check if serpent nakshatra flows through you and learn to master it wisely</p>
          <Link
            href={`/${locale}/tools/nakshatra`}
            className="inline-block bg-white text-deepteal-700 px-8 py-4 rounded-xl font-bold hover:bg-deepteal-50 transition-colors shadow-lg"
          >
            Calculate Your Ashlesha Status Now
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Related Tools */}
      <section>
        <h2 className="text-2xl font-bold text-deepteal-800 mb-6">Related Tools</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Link
            href={`/${locale}/tools/nakshatra`}
            className="block p-6 bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl border border-deepteal-200 hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-deepteal-800 mb-2">Nakshatra Calculator</h3>
            <p className="text-gray-600 text-sm">Find your birth nakshatra and understand its influence</p>
          </Link>
          <Link
            href={`/${locale}/tools/kundli`}
            className="block p-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl border border-amber-200 hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-amber-800 mb-2">Kundli Generator</h3>
            <p className="text-gray-600 text-sm">See all planetary positions by nakshatra</p>
          </Link>
          <Link
            href={`/${locale}/tools/moon-sign`}
            className="block p-6 bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl border border-warmaccent-200 hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-warmaccent-800 mb-2">Moon Sign Calculator</h3>
            <p className="text-gray-600 text-sm">Understand Moon&apos;s nakshatra and rashi</p>
          </Link>
          <Link
            href={`/${locale}/tools/lagna`}
            className="block p-6 bg-gradient-to-br from-deepteal-50 to-amber-50 rounded-xl border border-deepteal-200 hover:shadow-md transition-shadow"
          >
            <h3 className="font-bold text-deepteal-800 mb-2">Lagna Calculator</h3>
            <p className="text-gray-600 text-sm">Check if your Lagna is in Ashlesha nakshatra</p>
          </Link>
        </div>

        <p className="text-center text-lg text-deepteal-700 font-medium mt-8 p-6 bg-deepteal-50 rounded-xl">
          Your serpent power is your gift. Use it wisely. Heal with it. Transform with it. But never abuse it.
        </p>
      </section>
    </article>
  );
}
