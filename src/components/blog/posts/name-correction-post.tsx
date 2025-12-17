'use client';

import React from 'react';
import Link from 'next/link';
import {
  Sparkles,
  Calculator,
  AlertTriangle,
  Search,
  FileText,
  Clock,
  HelpCircle,
  Target,
  CheckCircle2,
  XCircle,
  ArrowRight,
  RefreshCw,
  Heart,
  Briefcase,
  DollarSign,
  User,
  Users,
  Shield,
  Zap,
  TrendingUp,
  Calendar,
  Globe,
  Mail,
  CreditCard,
  Building2
} from 'lucide-react';
import {
  InfoCard,
  HighlightBox,
  FeatureList,
  SectionDivider,
  BlogImage,
  StatsCard
} from '../blog-content';

interface NameCorrectionPostProps {
  locale: string;
}

export default function NameCorrectionPost({ locale }: NameCorrectionPostProps) {
  return (
    <article className="prose prose-lg max-w-none">
      {/* Introduction */}
      <div className="bg-gradient-to-br from-deepteal-50 to-warmaccent-50 rounded-2xl p-8 mb-12 border border-deepteal-100">
        <p className="text-xl text-gray-700 mb-6 leading-relaxed">
          <strong className="text-deepteal-800">&quot;Is my name holding me back? Should I change it?&quot;</strong>
        </p>
        <p className="text-gray-700 mb-6">
          Here&apos;s what successful people know: <strong className="text-deepteal-700">Your name&apos;s numerology directly influences your life outcomes, opportunities, and success levels.</strong>
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="bg-red-50 rounded-xl p-4 border border-red-200">
            <h4 className="font-bold text-red-800 mb-2 flex items-center gap-2">
              <XCircle className="w-5 h-5" />
              If Your Name is Unlucky
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Working against your natural vibration</li>
              <li>Attracting misaligned opportunities</li>
              <li>Facing unnecessary obstacles</li>
              <li>Limiting your potential</li>
            </ul>
          </div>
          <div className="bg-green-50 rounded-xl p-4 border border-green-200">
            <h4 className="font-bold text-green-800 mb-2 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Name Correction Involves
            </h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>Calculating current name&apos;s vibration</li>
              <li>Identifying unlucky number problems</li>
              <li>Choosing a new lucky name</li>
              <li>Maximizing results from change</li>
            </ul>
          </div>
        </div>

        <HighlightBox type="tip">
          <p className="font-bold text-deepteal-800 mb-2">The Power of Name Correction</p>
          <p className="text-gray-700">Changing to a lucky name can improve life outcomes by 25-40% within 6-12 months.</p>
        </HighlightBox>
      </div>

      <StatsCard
        stats={[
          { label: 'Improvement', value: '25-40%' },
          { label: 'Timeline', value: '6-12 Mo' },
          { label: 'Analysis', value: 'Instant' },
          { label: 'Cost', value: 'FREE' },
        ]}
      />

      {/* Do You Need Name Correction */}
      <section id="need-correction" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Search className="w-5 h-5" />
          </span>
          Do You Need Name Correction?
        </h2>

        <p className="text-gray-700 mb-6">
          Signs you may need <Link href={`/${locale}/tools/name-correction`} className="text-warmaccent-600 hover:underline font-semibold">name correction</Link>:
        </p>

        <BlogImage
          src="/images/blog/name-correction/hero.webp"
          alt="Name Correction - Transform Your Life Through Numerology"
          caption="Your name shapes your destiny - learn when correction is needed"
        />

        <div className="grid md:grid-cols-2 gap-6 my-8">
          {/* Red Flag 1 */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-red-800">RED FLAG #1: Constant Struggle</h3>
            </div>
            <p className="text-gray-700 text-sm mb-3">Despite hard work and intelligence:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <XCircle className="w-4 h-4 text-red-500" />
                Promotions pass you by
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <XCircle className="w-4 h-4 text-red-500" />
                Relationships don&apos;t work out
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <XCircle className="w-4 h-4 text-red-500" />
                Money doesn&apos;t stick
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <XCircle className="w-4 h-4 text-red-500" />
                Nothing seems easy
              </li>
            </ul>
            <p className="text-xs text-red-600 mt-3 italic font-medium">Possible cause: Unlucky name number blocking natural flow</p>
          </div>

          {/* Red Flag 2 */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-white">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-amber-800">RED FLAG #2: Misalignment Feeling</h3>
            </div>
            <p className="text-gray-700 text-sm mb-3">You feel:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <XCircle className="w-4 h-4 text-amber-500" />
                Name doesn&apos;t fit your personality
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <XCircle className="w-4 h-4 text-amber-500" />
                Like you&apos;re swimming upstream
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <XCircle className="w-4 h-4 text-amber-500" />
                Underestimated by others
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <XCircle className="w-4 h-4 text-amber-500" />
                Unfulfilled despite achievements
              </li>
            </ul>
            <p className="text-xs text-amber-600 mt-3 italic font-medium">Possible cause: Name vibration mismatched with core number</p>
          </div>

          {/* Red Flag 3 */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-500 text-white">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-orange-800">RED FLAG #3: Repeated Patterns</h3>
            </div>
            <p className="text-gray-700 text-sm mb-3">Same problems keep happening:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <XCircle className="w-4 h-4 text-orange-500" />
                Relationship issues (number 2 = codependency)
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <XCircle className="w-4 h-4 text-orange-500" />
                Career instability (number 5 = change)
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <XCircle className="w-4 h-4 text-orange-500" />
                Financial loss (number 9 = endings)
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <XCircle className="w-4 h-4 text-orange-500" />
                Scattered focus (number 3 = scattered)
              </li>
            </ul>
            <p className="text-xs text-orange-600 mt-3 italic font-medium">Possible cause: Name keeps attracting pattern-matching circumstances</p>
          </div>

          {/* Red Flag 4 */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-deepteal-500 text-white">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-deepteal-800">RED FLAG #4: Unlucky Name Numbers</h3>
            </div>
            <p className="text-gray-700 text-sm mb-3">If your name reduces to:</p>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-5 h-5 flex items-center justify-center rounded bg-deepteal-200 text-deepteal-800 text-xs font-bold flex-shrink-0">2</span>
                Hypersensitivity, dependency, lack of assertion
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-5 h-5 flex items-center justify-center rounded bg-deepteal-200 text-deepteal-800 text-xs font-bold flex-shrink-0">5</span>
                Instability, scattered energy, constant change
              </li>
              <li className="flex items-start gap-2 text-gray-700">
                <span className="w-5 h-5 flex items-center justify-center rounded bg-deepteal-200 text-deepteal-800 text-xs font-bold flex-shrink-0">9</span>
                Endings, incompleteness, cycle closure
              </li>
            </ul>
            <p className="text-xs text-deepteal-600 mt-3 italic font-medium">These aren&apos;t &quot;bad&quot; but attract specific challenges</p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* How to Calculate Current Name */}
      <section id="calculate-current" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Calculator className="w-5 h-5" />
          </span>
          How to Calculate Your Current Name
        </h2>

        <BlogImage
          src="/images/blog/name-correction/diagnosis.webp"
          alt="Name Number Calculation Process"
          caption="Step-by-step process to calculate your name's numerological value"
        />

        <div className="space-y-6 my-8">
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-6 border border-deepteal-200">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-deepteal-500 text-white font-bold flex-shrink-0">1</span>
              <div>
                <h4 className="font-bold text-deepteal-800 mb-2">Write Your Full Name</h4>
                <p className="text-gray-700 text-sm">Include first, middle (if used), and last name.</p>
                <div className="bg-white/80 rounded-lg p-3 mt-2">
                  <p className="text-sm text-gray-600">Example: <strong>John Michael Smith</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-amber-500 text-white font-bold flex-shrink-0">2</span>
              <div>
                <h4 className="font-bold text-amber-800 mb-2">Convert Letters to Numbers</h4>
                <p className="text-gray-700 text-sm mb-2">A=1, B=2, C=3... Z=26</p>
                <div className="bg-white/80 rounded-lg p-3 font-mono text-sm">
                  <p className="text-gray-700">JOHN = J(10) + O(15) + H(8) + N(14)</p>
                  <p className="text-gray-700">= 10 + 15 + 8 + 14 = <strong>47</strong></p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-6 border border-warmaccent-200">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-500 text-white font-bold flex-shrink-0">3</span>
              <div>
                <h4 className="font-bold text-warmaccent-800 mb-2">Reduce to Single Digit</h4>
                <p className="text-gray-700 text-sm mb-2">Add digits repeatedly until single digit (1-9):</p>
                <div className="bg-white/80 rounded-lg p-3 font-mono text-sm">
                  <p className="text-gray-700">47 = 4 + 7 = 11 = 1 + 1 = <strong className="text-warmaccent-700">2</strong></p>
                  <p className="text-warmaccent-700 font-bold mt-1">JOHN = Number 2</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 flex items-center justify-center rounded-full bg-green-500 text-white font-bold flex-shrink-0">4</span>
              <div>
                <h4 className="font-bold text-green-800 mb-2">Interpret the Number</h4>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <div className="bg-white/80 rounded p-2 text-center">
                    <span className="font-bold text-deepteal-700">1</span>
                    <p className="text-gray-600">Leadership</p>
                  </div>
                  <div className="bg-white/80 rounded p-2 text-center">
                    <span className="font-bold text-deepteal-700">2</span>
                    <p className="text-gray-600">Sensitivity</p>
                  </div>
                  <div className="bg-white/80 rounded p-2 text-center">
                    <span className="font-bold text-deepteal-700">3</span>
                    <p className="text-gray-600">Creativity</p>
                  </div>
                  <div className="bg-white/80 rounded p-2 text-center">
                    <span className="font-bold text-deepteal-700">4</span>
                    <p className="text-gray-600">Stability</p>
                  </div>
                  <div className="bg-white/80 rounded p-2 text-center">
                    <span className="font-bold text-deepteal-700">5</span>
                    <p className="text-gray-600">Change</p>
                  </div>
                  <div className="bg-white/80 rounded p-2 text-center">
                    <span className="font-bold text-deepteal-700">6</span>
                    <p className="text-gray-600">Care</p>
                  </div>
                  <div className="bg-white/80 rounded p-2 text-center">
                    <span className="font-bold text-deepteal-700">7</span>
                    <p className="text-gray-600">Wisdom</p>
                  </div>
                  <div className="bg-white/80 rounded p-2 text-center">
                    <span className="font-bold text-deepteal-700">8</span>
                    <p className="text-gray-600">Power</p>
                  </div>
                  <div className="bg-white/80 rounded p-2 text-center">
                    <span className="font-bold text-deepteal-700">9</span>
                    <p className="text-gray-600">Completion</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-deepteal-600 to-warmaccent-500 rounded-2xl p-8 text-center my-8">
          <h3 className="text-2xl font-bold text-white mb-3">Calculate Your Name Number</h3>
          <p className="text-deepteal-50 mb-6">Instantly discover if your name needs correction</p>
          <Link
            href={`/${locale}/tools/name-correction`}
            className="inline-flex items-center gap-2 bg-white text-deepteal-700 px-8 py-3 rounded-xl font-bold hover:bg-cream-50 transition-colors shadow-lg"
          >
            Check Your Name Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <SectionDivider />

      {/* Problems From Unlucky Names */}
      <section id="problems" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-red-100 text-red-600">
            <AlertTriangle className="w-5 h-5" />
          </span>
          Problems From Unlucky Names
        </h2>

        <p className="text-gray-700 mb-6">
          Different numbers create different life patterns. Understanding your name&apos;s challenges helps you find the right solution.
        </p>

        <BlogImage
          src="/images/blog/name-correction/comparison.webp"
          alt="Name Number Problems Comparison"
          caption="How different name numbers create specific life challenges"
        />

        <div className="space-y-6 my-8">
          {/* Number 2 Problem */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-amber-500 text-white text-2xl font-bold flex-shrink-0">
                2
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-amber-800 text-lg mb-2">Number 2 Problem: Hypersensitivity</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/80 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">What happens:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                        Overly sensitive to criticism
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                        Difficulty asserting yourself
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                        Partnerships control you
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-amber-500" />
                        Lack confidence in decisions
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/80 rounded-xl p-4">
                    <div className="mb-3">
                      <p className="text-sm"><strong className="text-amber-800">Career:</strong> <span className="text-gray-700">Missed promotions, underestimated</span></p>
                    </div>
                    <div className="mb-3">
                      <p className="text-sm"><strong className="text-amber-800">Relationships:</strong> <span className="text-gray-700">Codependency, losing yourself</span></p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2 mt-3">
                      <p className="text-sm text-green-800 font-medium">Solution: Change to 1, 4, or 8 for strength</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Number 5 Problem */}
          <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl p-6 border border-orange-200">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-500 text-white text-2xl font-bold flex-shrink-0">
                5
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-orange-800 text-lg mb-2">Number 5 Problem: Instability</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/80 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">What happens:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-500" />
                        Constant life changes
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-500" />
                        Career hopping
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-500" />
                        Relationship instability
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-orange-500" />
                        Money inconsistency
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/80 rounded-xl p-4">
                    <div className="mb-3">
                      <p className="text-sm"><strong className="text-orange-800">Career:</strong> <span className="text-gray-700">Never settle, always restless</span></p>
                    </div>
                    <div className="mb-3">
                      <p className="text-sm"><strong className="text-orange-800">Relationships:</strong> <span className="text-gray-700">Partner instability</span></p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2 mt-3">
                      <p className="text-sm text-green-800 font-medium">Solution: Change to 4 or 6 for stability</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Number 9 Problem */}
          <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-500 text-white text-2xl font-bold flex-shrink-0">
                9
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-red-800 text-lg mb-2">Number 9 Problem: Endings</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white/80 rounded-xl p-4">
                    <h4 className="font-semibold text-gray-800 mb-2 text-sm">What happens:</h4>
                    <ul className="space-y-1 text-sm text-gray-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-500" />
                        Cycles completing frequently
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-500" />
                        Frequent endings (jobs, relationships)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-500" />
                        Feeling of incompleteness
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-red-500" />
                        Constant transitions
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white/80 rounded-xl p-4">
                    <div className="mb-3">
                      <p className="text-sm"><strong className="text-red-800">Career:</strong> <span className="text-gray-700">Frequent job changes</span></p>
                    </div>
                    <div className="mb-3">
                      <p className="text-sm"><strong className="text-red-800">Relationships:</strong> <span className="text-gray-700">Relationship endings</span></p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-2 mt-3">
                      <p className="text-sm text-green-800 font-medium">Solution: Change to 1 or 8 for new beginnings</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Finding Your Lucky Name */}
      <section id="lucky-name" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Sparkles className="w-5 h-5" />
          </span>
          Finding Your Lucky Name
        </h2>

        <BlogImage
          src="/images/blog/name-correction/guide.webp"
          alt="Lucky Name Selection Guide"
          caption="Step-by-step guide to finding your perfect lucky name"
        />

        <InfoCard title="Step 1: Choose Desired Number" variant="deepteal">
          <p className="text-gray-700 mb-4">What do you want more of in life?</p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-deepteal-200">
                  <th className="text-left py-2 text-deepteal-800">Goal</th>
                  <th className="text-left py-2 text-deepteal-800">Choose Number</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-deepteal-100">
                  <td className="py-2 text-gray-700">Confidence & leadership</td>
                  <td className="py-2 font-bold text-deepteal-700">1 or 8</td>
                </tr>
                <tr className="border-b border-deepteal-100">
                  <td className="py-2 text-gray-700">Stability & security</td>
                  <td className="py-2 font-bold text-deepteal-700">4</td>
                </tr>
                <tr className="border-b border-deepteal-100">
                  <td className="py-2 text-gray-700">Creativity & joy</td>
                  <td className="py-2 font-bold text-deepteal-700">3</td>
                </tr>
                <tr className="border-b border-deepteal-100">
                  <td className="py-2 text-gray-700">Responsibility & care</td>
                  <td className="py-2 font-bold text-deepteal-700">6</td>
                </tr>
                <tr>
                  <td className="py-2 text-gray-700">Wisdom & insight</td>
                  <td className="py-2 font-bold text-deepteal-700">7</td>
                </tr>
              </tbody>
            </table>
          </div>
        </InfoCard>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          <InfoCard title="Step 2: Create Name Options" variant="amber">
            <p className="text-gray-700 mb-3">Generate names that reduce to desired number. Use our calculator to test names quickly.</p>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="text-sm text-gray-600"><strong>Example:</strong> Want number 1</p>
              <p className="text-sm text-gray-600 mt-1">Test: Albert = 4, Alexander = 3</p>
              <p className="text-sm text-gray-600">Keep testing until you find a name = 1</p>
            </div>
          </InfoCard>

          <InfoCard title="Step 3: Verify Multiple Systems" variant="warmaccent">
            <p className="text-gray-700 mb-3">Check if name also works through:</p>
            <FeatureList
              items={[
                'Astrological compatibility',
                'Phonetic harmony',
                'Cultural appropriateness',
                'Family approval'
              ]}
              variant="check"
            />
            <p className="text-xs text-gray-500 mt-2 italic">Best names align across multiple systems</p>
          </InfoCard>
        </div>

        <InfoCard title="Step 4: Test the Name" variant="highlight">
          <p className="text-gray-700 mb-3">Before committing, try the name:</p>
          <div className="grid md:grid-cols-2 gap-4">
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-warmaccent-500" />
                Write it repeatedly
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-warmaccent-500" />
                Say it aloud
              </li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-warmaccent-500" />
                Ask close friends&apos; opinion
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <CheckCircle2 className="w-4 h-4 text-warmaccent-500" />
                Meditate on it
              </li>
            </ul>
          </div>
          <p className="text-deepteal-700 mt-4 font-medium">Your intuition will know if it&apos;s right.</p>
        </InfoCard>
      </section>

      <SectionDivider />

      {/* The Name Change Process */}
      <section id="process" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <FileText className="w-5 h-5" />
          </span>
          The Name Change Process
        </h2>

        <div className="grid md:grid-cols-2 gap-6 my-8">
          {/* India Process */}
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-2xl p-6 border border-warmaccent-200">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-warmaccent-600" />
              <h3 className="font-bold text-warmaccent-800 text-lg">In India</h3>
            </div>
            <ol className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-warmaccent-500 text-white text-xs flex-shrink-0">1</span>
                Apply through District Court
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-warmaccent-500 text-white text-xs flex-shrink-0">2</span>
                File Form for Deed Poll
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-warmaccent-500 text-white text-xs flex-shrink-0">3</span>
                Publish in local newspaper
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-warmaccent-500 text-white text-xs flex-shrink-0">4</span>
                Submit evidence
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-warmaccent-500 text-white text-xs flex-shrink-0">5</span>
                Receive official certificate
              </li>
            </ol>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="text-sm"><strong>Cost:</strong> ₹5,000-15,000</p>
              <p className="text-sm"><strong>Time:</strong> 4-6 weeks</p>
            </div>
          </div>

          {/* USA Process */}
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-2xl p-6 border border-deepteal-200">
            <div className="flex items-center gap-3 mb-4">
              <Globe className="w-6 h-6 text-deepteal-600" />
              <h3 className="font-bold text-deepteal-800 text-lg">In USA</h3>
            </div>
            <ol className="space-y-2 text-sm text-gray-700 mb-4">
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-deepteal-500 text-white text-xs flex-shrink-0">1</span>
                File in local court
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-deepteal-500 text-white text-xs flex-shrink-0">2</span>
                Publish notice (if required)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-deepteal-500 text-white text-xs flex-shrink-0">3</span>
                Obtain court order
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-deepteal-500 text-white text-xs flex-shrink-0">4</span>
                Update Social Security
              </li>
              <li className="flex items-start gap-2">
                <span className="w-5 h-5 flex items-center justify-center rounded-full bg-deepteal-500 text-white text-xs flex-shrink-0">5</span>
                Update license, passport
              </li>
            </ol>
            <div className="bg-white/80 rounded-lg p-3">
              <p className="text-sm"><strong>Cost:</strong> $200-500</p>
              <p className="text-sm"><strong>Time:</strong> 2-4 weeks</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 my-8">
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
            <Briefcase className="w-8 h-8 text-amber-600 mb-3" />
            <h4 className="font-bold text-amber-800 mb-2">Professional Announcement</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Email contacts</li>
              <li>• Update LinkedIn</li>
              <li>• Inform employer</li>
              <li>• New business cards</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-5 border border-deepteal-200">
            <Users className="w-8 h-8 text-deepteal-600 mb-3" />
            <h4 className="font-bold text-deepteal-800 mb-2">Personal Announcement</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Family & friends</li>
              <li>• Social media</li>
              <li>• New email/phone</li>
              <li>• Personal letters</li>
            </ul>
          </div>
          <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-5 border border-warmaccent-200">
            <CreditCard className="w-8 h-8 text-warmaccent-600 mb-3" />
            <h4 className="font-bold text-warmaccent-800 mb-2">Critical Documents</h4>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Passport</li>
              <li>• Driver&apos;s license</li>
              <li>• Bank accounts</li>
              <li>• Professional licenses</li>
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Transition & Results */}
      <section id="transition" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <Clock className="w-5 h-5" />
          </span>
          Transition & Results Timeline
        </h2>

        <BlogImage
          src="/images/blog/name-correction/timeline.webp"
          alt="Name Change Results Timeline"
          caption="What to expect after changing your name - a realistic timeline"
        />

        <div className="relative my-8">
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-deepteal-500 via-warmaccent-500 to-green-500 rounded-full"></div>

          <div className="space-y-8">
            {/* Weeks 1-2 */}
            <div className="relative pl-20">
              <div className="absolute left-5 w-7 h-7 bg-deepteal-500 rounded-full flex items-center justify-center text-white">
                <Calendar className="w-4 h-4" />
              </div>
              <div className="bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-5 border border-deepteal-200">
                <h4 className="font-bold text-deepteal-800 mb-2">Weeks 1-2: Energy Shift Begins</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Subtle changes in how people treat you</li>
                  <li>• Increased confidence</li>
                  <li>• New opportunities appear</li>
                </ul>
              </div>
            </div>

            {/* Weeks 3-8 */}
            <div className="relative pl-20">
              <div className="absolute left-5 w-7 h-7 bg-amber-500 rounded-full flex items-center justify-center text-white">
                <TrendingUp className="w-4 h-4" />
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-5 border border-amber-200">
                <h4 className="font-bold text-amber-800 mb-2">Weeks 3-8: Momentum Builds</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• More noticeable changes</li>
                  <li>• Opportunities clarify</li>
                  <li>• Life starts flowing</li>
                </ul>
              </div>
            </div>

            {/* Months 3-6 */}
            <div className="relative pl-20">
              <div className="absolute left-5 w-7 h-7 bg-warmaccent-500 rounded-full flex items-center justify-center text-white">
                <Zap className="w-4 h-4" />
              </div>
              <div className="bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-5 border border-warmaccent-200">
                <h4 className="font-bold text-warmaccent-800 mb-2">Months 3-6: Major Transformation</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Career improvements visible</li>
                  <li>• Relationship dynamics shift</li>
                  <li>• Financial opportunities appear</li>
                </ul>
              </div>
            </div>

            {/* Months 6-12 */}
            <div className="relative pl-20">
              <div className="absolute left-5 w-7 h-7 bg-green-500 rounded-full flex items-center justify-center text-white">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-5 border border-green-200">
                <h4 className="font-bold text-green-800 mb-2">Months 6-12: Full Alignment</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Life flowing with new name</li>
                  <li>• Opportunities abundant</li>
                  <li>• Success indicators visible</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
            <h4 className="font-bold text-green-800 mb-3 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5" />
              Positive Changes
            </h4>
            <FeatureList
              items={[
                'Increased confidence',
                'Better treatment by others',
                'Career opportunities',
                'Relationship improvements',
                'Financial flow increase'
              ]}
              variant="check"
            />
          </div>
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-6 border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-3 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5" />
              Adjustment Period
            </h4>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-amber-500 flex-shrink-0">⚠️</span>
                2-4 weeks for new name to feel natural
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 flex-shrink-0">⚠️</span>
                Some people may forget your new name
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-500 flex-shrink-0">⚠️</span>
                Mild self-consciousness initially
              </li>
            </ul>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* FAQ Section */}
      <section id="faqs" className="mb-16 scroll-mt-24">
        <h2 className="text-2xl md:text-3xl font-bold text-deepteal-800 mb-6 flex items-center gap-3">
          <span className="w-10 h-10 flex items-center justify-center rounded-full bg-warmaccent-100 text-warmaccent-600">
            <HelpCircle className="w-5 h-5" />
          </span>
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          <InfoCard title="Is changing my name 'superficial'?" variant="deepteal">
            <p className="text-gray-700">Not at all. Your name is energy. You&apos;re aligning with better frequency, like tuning a radio to a clearer station. Not denying who you are—amplifying your best self. Names matter. Numerology is science, not superstition.</p>
          </InfoCard>

          <InfoCard title="Will my new name feel strange?" variant="amber">
            <p className="text-gray-700 mb-3">Initially yes (1-2 weeks). Then:</p>
            <FeatureList
              items={[
                'People call you by new name',
                'You see it written everywhere',
                'Your brain adapts quickly',
                'Feels normal after a month'
              ]}
              variant="check"
            />
            <p className="text-deepteal-700 mt-3 font-medium">Choose a name you genuinely like.</p>
          </InfoCard>

          <InfoCard title="What if I can't legally change my name?" variant="highlight">
            <p className="text-gray-700 mb-3">Use a professional name:</p>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>• Use lucky name professionally (legally possible)</li>
              <li>• Keep legal name officially</li>
              <li>• Go by new name socially</li>
              <li>• Still benefits from vibration</li>
            </ul>
            <p className="text-gray-600 mt-3 text-sm italic">Example: Legal name &quot;John&quot; but go by &quot;Robert&quot; professionally.</p>
          </InfoCard>

          <InfoCard title="Can I change my child's name if it's unlucky?" variant="deepteal">
            <p className="text-gray-700 mb-3">Yes. Before age 14:</p>
            <FeatureList
              items={[
                'Legal change is easier',
                'Child hasn\'t established identity',
                'New name integrates smoothly',
                'Life pattern shifts significantly'
              ]}
              variant="check"
            />
            <p className="text-gray-600 mt-3 text-sm italic">After 14, change becomes more complex legally but still beneficial.</p>
          </InfoCard>

          <InfoCard title="How do I know the new name will work?" variant="amber">
            <p className="text-gray-700 mb-3">Test it first:</p>
            <FeatureList
              items={[
                'Use socially for 1-2 weeks',
                'Have people call you by it',
                'Calculate its numerology',
                'Meditate on it',
                'Trust your intuition'
              ]}
              variant="check"
            />
            <p className="text-deepteal-700 mt-3 font-medium">Your intuition knows what&apos;s right.</p>
          </InfoCard>
        </div>
      </section>

      <SectionDivider />

      {/* Conclusion */}
      <section id="conclusion" className="mb-16 scroll-mt-24">
        <div className="bg-gradient-to-br from-deepteal-600 to-warmaccent-500 rounded-2xl p-8 text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 flex items-center gap-3">
            <RefreshCw className="w-8 h-8" />
            Activate Your Luck
          </h2>

          <p className="text-deepteal-50 mb-6 text-lg">
            <strong className="text-white">Your name shapes your destiny.</strong>
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <p className="flex items-center gap-2 text-white mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <strong>If your name feels right & supports you</strong>
              </p>
              <p className="text-deepteal-100 text-sm">Keep it - you&apos;re already aligned!</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-xl p-4">
              <p className="flex items-center gap-2 text-white mb-2">
                <XCircle className="w-5 h-5 text-red-300" />
                <strong>If your name creates struggle & limitation</strong>
              </p>
              <p className="text-deepteal-100 text-sm">Consider changing - unlock your potential!</p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-6">
            <p className="text-white mb-4">Name correction isn&apos;t about rejecting who you are. It&apos;s about:</p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-warmaccent-300" />
                <span>Aligning with your true potential</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-warmaccent-300" />
                <span>Removing invisible obstacles</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-warmaccent-300" />
                <span>Attracting aligned opportunities</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-warmaccent-300" />
                <span>Living in harmony with your frequency</span>
              </li>
            </ul>
          </div>

          <p className="text-deepteal-50 mb-6 italic">
            Successful people often don&apos;t realize their names support them. Struggling people often don&apos;t realize their names oppose them. Now you know. Now you can change it.
          </p>

          <div className="text-center">
            <Link
              href={`/${locale}/tools/name-correction`}
              className="inline-flex items-center gap-2 bg-white text-deepteal-700 px-8 py-4 rounded-xl font-bold hover:bg-cream-50 transition-colors shadow-lg text-lg"
            >
              <Sparkles className="w-6 h-6" />
              Check & Correct Your Name
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Tools */}
      <section className="mb-8">
        <h3 className="text-xl font-bold text-deepteal-800 mb-4">Related Numerology Tools</h3>
        <div className="grid md:grid-cols-2 gap-4">
          <Link href={`/${locale}/tools/child-name`} className="block bg-gradient-to-br from-warmaccent-50 to-warmaccent-100 rounded-xl p-4 border border-warmaccent-200 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-warmaccent-800 mb-1">Child Name Suggester</h4>
            <p className="text-sm text-gray-600">Find lucky baby names based on numerology</p>
          </Link>
          <Link href={`/${locale}/tools/life-path-number`} className="block bg-gradient-to-br from-deepteal-50 to-deepteal-100 rounded-xl p-4 border border-deepteal-200 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-deepteal-800 mb-1">Life Path Number</h4>
            <p className="text-sm text-gray-600">Discover your life purpose through numbers</p>
          </Link>
          <Link href={`/${locale}/tools/destiny-number`} className="block bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-4 border border-amber-200 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-amber-800 mb-1">Destiny Number</h4>
            <p className="text-sm text-gray-600">Calculate your life destiny from your name</p>
          </Link>
          <Link href={`/${locale}/tools/business-name-numerology`} className="block bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-4 border border-green-200 hover:shadow-md transition-shadow">
            <h4 className="font-bold text-green-800 mb-1">Business Name Analyzer</h4>
            <p className="text-sm text-gray-600">Optimize your brand name for success</p>
          </Link>
        </div>
      </section>
    </article>
  );
}
