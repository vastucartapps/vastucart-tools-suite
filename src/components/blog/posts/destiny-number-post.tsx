'use client';

import Link from 'next/link';
import { Calculator, Target, Star, Briefcase, Users, Heart, Shield, Sparkles, CheckCircle, Award, Edit3 } from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  RelatedToolCard,
  StatsCard,
} from '../blog-content';

interface DestinyNumberPostProps {
  locale: string;
}

export default function DestinyNumberPost({ locale }: DestinyNumberPostProps) {
  return (
    <div className="space-y-8">
      {/* Opening Truth */}
      <HighlightBox type="important">
        <p className="text-lg font-bold text-teal-800 mb-2">Your Name Is a Code</p>
        <p className="text-gray-700">
          Your name is not random—it&apos;s a mathematical code that influences your entire destiny. Many people have names that don&apos;t match their purpose, creating constant friction. Understanding your Destiny Number helps you align or change your name.
        </p>
      </HighlightBox>

      {/* StatsCard */}
      <StatsCard
        stats={[
          { label: 'Destiny Types', value: '9' },
          { label: 'Source', value: 'Birth Name' },
          { label: 'Changeable', value: 'YES' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      {/* Section 1: What Is Destiny Number */}
      <section id="what-is-destiny">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Target className="w-5 h-5" />
          </span>
          What is Destiny Number?
        </h2>

        <p className="text-gray-700 mb-6 leading-relaxed">
          Your <strong className="text-teal-700">Destiny Number</strong> (also called the Expression Number) is the numerological essence of your full birth name. It reveals your life&apos;s true calling, natural talents, personality when fully expressed, and career potential.
        </p>

        <BlogImage
          src="/images/blog/destiny-number/concept.webp"
          alt="Destiny Number Concept and Name Calculation"
          caption="Understanding the formula: How your name converts to numbers revealing your life blueprint"
        />

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm mt-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4">How It Works</h3>
          <div className="bg-white/80 backdrop-blur rounded-xl p-4 space-y-3">
            <p className="text-sm text-gray-700"><strong className="text-teal-700">Step 1:</strong> Convert each letter to a number (A=1, B=2... Z=26)</p>
            <p className="text-sm text-gray-700"><strong className="text-teal-700">Step 2:</strong> Add all values together</p>
            <p className="text-sm text-gray-700"><strong className="text-teal-700">Step 3:</strong> Reduce to single digit (1-9)</p>

            <div className="bg-saffron-50 rounded-lg p-4 mt-4">
              <p className="text-sm font-bold text-saffron-800 mb-2">Example: JOHN SMITH</p>
              <p className="text-xs text-gray-700 mb-2">J(1) + O(6) + H(8) + N(5) + S(1) + M(4) + I(9) + T(2) + H(8) = 44</p>
              <p className="text-xs text-gray-700">44 → 4+4 = <strong>8 (Success & Power)</strong></p>
            </div>
          </div>
        </div>

        {/* Destiny vs Life Path */}
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200 shadow-sm mt-4">
          <h3 className="font-bold text-amber-800 text-lg mb-3">Destiny vs Life Path</h3>
          <div className="bg-white/90 backdrop-blur rounded-xl p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b-2 border-amber-200">
                  <th className="text-left p-2 font-bold text-amber-800">Aspect</th>
                  <th className="text-left p-2 font-bold text-amber-800">Destiny Number</th>
                  <th className="text-left p-2 font-bold text-amber-800">Life Path Number</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-amber-100">
                  <td className="p-2 font-bold text-amber-700">Calculated from</td>
                  <td className="p-2 text-gray-700">Full birth name</td>
                  <td className="p-2 text-gray-700">Birth date</td>
                </tr>
                <tr className="border-b border-amber-100">
                  <td className="p-2 font-bold text-amber-700">Reveals</td>
                  <td className="p-2 text-gray-700">Life calling & gifts</td>
                  <td className="p-2 text-gray-700">Soul&apos;s journey</td>
                </tr>
                <tr className="border-b border-amber-100">
                  <td className="p-2 font-bold text-amber-700">Mutable?</td>
                  <td className="p-2 text-green-700 font-medium">YES (can change)</td>
                  <td className="p-2 text-red-700 font-medium">NO (fixed)</td>
                </tr>
                <tr>
                  <td className="p-2 font-bold text-amber-700">Impact</td>
                  <td className="p-2 text-gray-700">How you express yourself</td>
                  <td className="p-2 text-gray-700">Your core nature</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-amber-600 mt-3 italic font-medium">Ideally, they work together. If they conflict, you experience inner tension.</p>
        </div>
      </section>

      <SectionDivider />

      {/* Section 2: How to Calculate */}
      <section id="how-to-calculate">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Calculate Your Destiny Number
        </h2>

        <BlogImage
          src="/images/blog/destiny-number/process.webp"
          alt="Destiny Number Calculation Process"
          caption="Step-by-step: Convert your full birth name to numbers and discover your destiny blueprint"
        />

        <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-6 border border-teal-200 shadow-sm mt-6">
          <h3 className="font-bold text-teal-800 text-lg mb-4">Letter-to-Number Conversion Chart</h3>
          <div className="bg-white/90 backdrop-blur rounded-xl p-4 overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="border-b-2 border-teal-200">
                  <th className="p-2 text-teal-800">A</th><th className="p-2 text-teal-800">B</th><th className="p-2 text-teal-800">C</th>
                  <th className="p-2 text-teal-800">D</th><th className="p-2 text-teal-800">E</th><th className="p-2 text-teal-800">F</th>
                  <th className="p-2 text-teal-800">G</th><th className="p-2 text-teal-800">H</th><th className="p-2 text-teal-800">I</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-teal-100">
                  <td className="p-2 text-center font-bold text-saffron-600">1</td>
                  <td className="p-2 text-center font-bold text-saffron-600">2</td>
                  <td className="p-2 text-center font-bold text-saffron-600">3</td>
                  <td className="p-2 text-center font-bold text-saffron-600">4</td>
                  <td className="p-2 text-center font-bold text-saffron-600">5</td>
                  <td className="p-2 text-center font-bold text-saffron-600">6</td>
                  <td className="p-2 text-center font-bold text-saffron-600">7</td>
                  <td className="p-2 text-center font-bold text-saffron-600">8</td>
                  <td className="p-2 text-center font-bold text-saffron-600">9</td>
                </tr>
              </tbody>
            </table>
            <table className="w-full text-xs mt-2">
              <thead>
                <tr className="border-b-2 border-teal-200">
                  <th className="p-2 text-teal-800">J</th><th className="p-2 text-teal-800">K</th><th className="p-2 text-teal-800">L</th>
                  <th className="p-2 text-teal-800">M</th><th className="p-2 text-teal-800">N</th><th className="p-2 text-teal-800">O</th>
                  <th className="p-2 text-teal-800">P</th><th className="p-2 text-teal-800">Q</th><th className="p-2 text-teal-800">R</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-teal-100">
                  <td className="p-2 text-center font-bold text-saffron-600">1</td>
                  <td className="p-2 text-center font-bold text-saffron-600">2</td>
                  <td className="p-2 text-center font-bold text-saffron-600">3</td>
                  <td className="p-2 text-center font-bold text-saffron-600">4</td>
                  <td className="p-2 text-center font-bold text-saffron-600">5</td>
                  <td className="p-2 text-center font-bold text-saffron-600">6</td>
                  <td className="p-2 text-center font-bold text-saffron-600">7</td>
                  <td className="p-2 text-center font-bold text-saffron-600">8</td>
                  <td className="p-2 text-center font-bold text-saffron-600">9</td>
                </tr>
              </tbody>
            </table>
            <table className="w-full text-xs mt-2">
              <thead>
                <tr className="border-b-2 border-teal-200">
                  <th className="p-2 text-teal-800">S</th><th className="p-2 text-teal-800">T</th><th className="p-2 text-teal-800">U</th>
                  <th className="p-2 text-teal-800">V</th><th className="p-2 text-teal-800">W</th><th className="p-2 text-teal-800">X</th>
                  <th className="p-2 text-teal-800">Y</th><th className="p-2 text-teal-800">Z</th><th className="p-2"></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2 text-center font-bold text-saffron-600">1</td>
                  <td className="p-2 text-center font-bold text-saffron-600">2</td>
                  <td className="p-2 text-center font-bold text-saffron-600">3</td>
                  <td className="p-2 text-center font-bold text-saffron-600">4</td>
                  <td className="p-2 text-center font-bold text-saffron-600">5</td>
                  <td className="p-2 text-center font-bold text-saffron-600">6</td>
                  <td className="p-2 text-center font-bold text-saffron-600">7</td>
                  <td className="p-2 text-center font-bold text-saffron-600">8</td>
                  <td className="p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Calculator CTA */}
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 text-center shadow-lg mt-6">
          <h3 className="text-2xl font-bold text-white mb-3">📝 Calculate Your Destiny Number</h3>
          <p className="text-teal-50 mb-6">
            Discover your name&apos;s hidden blueprint and life calling
          </p>
          <Link
            href={`/${locale}/tools/destiny-number`}
            className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors shadow-md"
          >
            Calculate Your Destiny Number Now →
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Section 3: 9 Destiny Numbers */}
      <section id="nine-destines">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Star className="w-5 h-5" />
          </span>
          The 9 Destiny Numbers Explained
        </h2>

        <BlogImage
          src="/images/blog/destiny-number/reference.webp"
          alt="9 Destiny Numbers Reference Guide"
          caption="Complete reference: All 9 Destiny Numbers with their meanings, callings, careers, and famous examples"
        />

        <div className="grid md:grid-cols-3 gap-4 mt-6">
          {/* Destiny 1 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-600 text-white font-bold text-xl mb-3 shadow-md">1</div>
            <h4 className="font-bold text-teal-800 mb-1">The Pioneer</h4>
            <p className="text-xs text-teal-600 mb-2 italic">Independence, leadership, innovation</p>
            <p className="text-xs text-gray-700 mb-2">Lead, innovate, create new paths. Trust your vision.</p>
            <p className="text-xs text-gray-600"><strong>Careers:</strong> Entrepreneur, CEO, Inventor</p>
            <p className="text-xs text-gray-500 mt-1 italic">e.g., Steve Jobs, Oprah Winfrey</p>
          </div>

          {/* Destiny 2 */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-4 border border-saffron-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-saffron-600 text-white font-bold text-xl mb-3 shadow-md">2</div>
            <h4 className="font-bold text-saffron-800 mb-1">The Diplomat</h4>
            <p className="text-xs text-saffron-600 mb-2 italic">Cooperation, harmony, balance</p>
            <p className="text-xs text-gray-700 mb-2">Bring people together. Create peace. Support visions.</p>
            <p className="text-xs text-gray-600"><strong>Careers:</strong> Diplomat, Counselor, HR</p>
            <p className="text-xs text-gray-500 mt-1 italic">e.g., Bill Clinton, Princess Diana</p>
          </div>

          {/* Destiny 3 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-600 text-white font-bold text-xl mb-3 shadow-md">3</div>
            <h4 className="font-bold text-amber-800 mb-1">The Communicator</h4>
            <p className="text-xs text-amber-600 mb-2 italic">Expression, creativity, communication</p>
            <p className="text-xs text-gray-700 mb-2">Communicate, create, inspire. Share gifts with world.</p>
            <p className="text-xs text-gray-600"><strong>Careers:</strong> Writer, Actor, Designer</p>
            <p className="text-xs text-gray-500 mt-1 italic">e.g., Walt Disney, Marilyn Monroe</p>
          </div>

          {/* Destiny 4 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-600 text-white font-bold text-xl mb-3 shadow-md">4</div>
            <h4 className="font-bold text-teal-800 mb-1">The Builder</h4>
            <p className="text-xs text-teal-600 mb-2 italic">Structure, stability, hard work</p>
            <p className="text-xs text-gray-700 mb-2">Build solid foundations. Create lasting structures.</p>
            <p className="text-xs text-gray-600"><strong>Careers:</strong> Engineer, Architect, Manager</p>
            <p className="text-xs text-gray-500 mt-1 italic">e.g., Warren Buffett</p>
          </div>

          {/* Destiny 5 */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-4 border border-saffron-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-saffron-600 text-white font-bold text-xl mb-3 shadow-md">5</div>
            <h4 className="font-bold text-saffron-800 mb-1">The Adventurer</h4>
            <p className="text-xs text-saffron-600 mb-2 italic">Freedom, change, versatility</p>
            <p className="text-xs text-gray-700 mb-2">Experience variety. Bring freedom. Adapt and explore.</p>
            <p className="text-xs text-gray-600"><strong>Careers:</strong> Sales, Travel, Marketing</p>
            <p className="text-xs text-gray-500 mt-1 italic">e.g., Johnny Depp, Madonna</p>
          </div>

          {/* Destiny 6 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-600 text-white font-bold text-xl mb-3 shadow-md">6</div>
            <h4 className="font-bold text-amber-800 mb-1">The Caregiver</h4>
            <p className="text-xs text-amber-600 mb-2 italic">Service, responsibility, nurturing</p>
            <p className="text-xs text-gray-700 mb-2">Care for others. Create family harmony. Serve with love.</p>
            <p className="text-xs text-gray-600"><strong>Careers:</strong> Nurse, Social Worker, Teacher</p>
            <p className="text-xs text-gray-500 mt-1 italic">e.g., Mother Teresa, Angelina Jolie</p>
          </div>

          {/* Destiny 7 */}
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-xl p-4 border border-teal-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-teal-600 text-white font-bold text-xl mb-3 shadow-md">7</div>
            <h4 className="font-bold text-teal-800 mb-1">The Seeker</h4>
            <p className="text-xs text-teal-600 mb-2 italic">Knowledge, spirituality, analysis</p>
            <p className="text-xs text-gray-700 mb-2">Seek truth. Share spiritual wisdom. Research deeply.</p>
            <p className="text-xs text-gray-600"><strong>Careers:</strong> Researcher, Scientist, Philosopher</p>
            <p className="text-xs text-gray-500 mt-1 italic">e.g., Isaac Newton, Stephen Hawking</p>
          </div>

          {/* Destiny 8 */}
          <div className="bg-gradient-to-br from-saffron-50 to-saffron-100 rounded-xl p-4 border border-saffron-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-saffron-600 text-white font-bold text-xl mb-3 shadow-md">8</div>
            <h4 className="font-bold text-saffron-800 mb-1">The Achiever</h4>
            <p className="text-xs text-saffron-600 mb-2 italic">Success, power, abundance</p>
            <p className="text-xs text-gray-700 mb-2">Achieve success. Lead with integrity. Manifest goals.</p>
            <p className="text-xs text-gray-600"><strong>Careers:</strong> Business Owner, Executive, Banker</p>
            <p className="text-xs text-gray-500 mt-1 italic">e.g., Donald Trump, Oprah</p>
          </div>

          {/* Destiny 9 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-amber-600 text-white font-bold text-xl mb-3 shadow-md">9</div>
            <h4 className="font-bold text-amber-800 mb-1">The Humanist</h4>
            <p className="text-xs text-amber-600 mb-2 italic">Compassion, completion, universality</p>
            <p className="text-xs text-gray-700 mb-2">Serve humanity. Bring healing. Complete cycles.</p>
            <p className="text-xs text-gray-600"><strong>Careers:</strong> Healer, Activist, Therapist</p>
            <p className="text-xs text-gray-500 mt-1 italic">e.g., Audrey Hepburn, Nelson Mandela</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 4: Name Change */}
      <section id="name-change">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Edit3 className="w-5 h-5" />
          </span>
          Name Correction & Change
        </h2>

        <BlogImage
          src="/images/blog/destiny-number/matrix.webp"
          alt="Name Change Strategy Matrix"
          caption="When and how to change your name: Signs of misalignment and strategic options for transformation"
        />

        <div className="grid md:grid-cols-2 gap-4 mt-6">
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-5 border border-red-200 shadow-sm">
            <h4 className="font-bold text-red-800 mb-3">Signs Your Name Doesn&apos;t Serve You</h4>
            <ul className="text-sm text-gray-700 space-y-2">
              <li className="flex items-center gap-2"><span className="text-red-600">✗</span> Constant struggle despite effort</li>
              <li className="flex items-center gap-2"><span className="text-red-600">✗</span> Not expressing your true self</li>
              <li className="flex items-center gap-2"><span className="text-red-600">✗</span> Career dissatisfaction despite success</li>
              <li className="flex items-center gap-2"><span className="text-red-600">✗</span> Relationships don&apos;t feel authentic</li>
              <li className="flex items-center gap-2"><span className="text-red-600">✗</span> Unexplained sense of limitation</li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl p-5 border border-teal-200 shadow-sm">
            <h4 className="font-bold text-teal-800 mb-3">Name Change Options</h4>
            <div className="space-y-3">
              <div className="bg-white/80 backdrop-blur rounded-lg p-3">
                <p className="text-sm font-bold text-teal-700">Option 1: Legal Name Change</p>
                <p className="text-xs text-gray-600">Complete transformation, long-term results</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-lg p-3">
                <p className="text-sm font-bold text-teal-700">Option 2: Professional Name</p>
                <p className="text-xs text-gray-600">Use different name at work, practical for mid-career</p>
              </div>
              <div className="bg-white/80 backdrop-blur rounded-lg p-3">
                <p className="text-sm font-bold text-teal-700">Option 3: Nickname Adoption</p>
                <p className="text-xs text-gray-600">Simplest method, immediate energy shift</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Section 5: Conclusion */}
      <section id="conclusion">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-saffron-100 text-saffron-600">
            <Sparkles className="w-5 h-5" />
          </span>
          Align With Your Name
        </h2>

        <div className="bg-gradient-to-br from-teal-50 to-saffron-50 rounded-2xl p-8 border border-teal-200 shadow-md mb-6">
          <p className="text-lg font-bold text-teal-800 mb-4">Your Name Is Your First Gift to Yourself</p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Your name is not random—it&apos;s a cosmic vibration that influences your entire life. The most successful people understand their Destiny Number and either embrace it fully OR change their name to align with their true calling.
          </p>
          <p className="text-saffron-700 font-medium italic">
            Will you continue living a life that doesn&apos;t match your name? Or will you align your identity with your true destiny?
          </p>
        </div>

        <HighlightBox type="tip">
          <p className="text-lg font-bold text-green-800 mb-2">The Power of Alignment</p>
          <p className="text-gray-700">
            Matching your career to your Destiny Number can increase satisfaction by 80%. Use our calculator to test potential names before committing to changes.
          </p>
        </HighlightBox>

        {/* Calculator CTA */}
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-2xl p-8 text-center shadow-lg mt-8">
          <h3 className="text-2xl font-bold text-white mb-3">📝 Decode Your Name&apos;s Blueprint</h3>
          <p className="text-teal-50 mb-6">
            Calculate your Destiny Number and align with your true calling
          </p>
          <Link
            href={`/${locale}/tools/destiny-number`}
            className="inline-block bg-white text-teal-700 px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors shadow-md"
          >
            Calculate Your Destiny Number →
          </Link>
        </div>
      </section>

      {/* Related Tools */}
      <div className="grid md:grid-cols-2 gap-4 mt-8">
        <RelatedToolCard
          title="Life Path Number Calculator"
          description="Discover your soul&apos;s purpose from your birth date"
          href={`/${locale}/tools/life-path-number`}
        />
        <RelatedToolCard
          title="Lucky Number Finder"
          description="Find your personal power numbers for success"
          href={`/${locale}/tools/lucky-number`}
        />
        <RelatedToolCard
          title="Name Correction Tool"
          description="Optimize your name for better destiny alignment"
          href={`/${locale}/tools/name-correction`}
        />
        <RelatedToolCard
          title="Business Name Analyzer"
          description="Check if your business name supports success"
          href={`/${locale}/tools/business-name`}
        />
      </div>
    </div>
  );
}
