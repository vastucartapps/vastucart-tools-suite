'use client';

import { useState } from 'react';
import { Copy, Check, Gift, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface SecretCouponCardProps {
  code: string;
  hint: string;
  copyText: string;
  copiedText: string;
  redeemAt: string;
  title: string;
}

export function SecretCouponCard({
  code,
  hint,
  copyText,
  copiedText,
  redeemAt,
  title,
}: SecretCouponCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      {/* Coupon Card */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-deepteal-500 to-deepteal-600 p-6 shadow-elevation-4">
        {/* Decorative circles */}
        <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-cream-50 rounded-full" />
        <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-cream-50 rounded-full" />

        {/* Dotted line */}
        <div className="absolute left-8 right-8 top-1/2 border-t-2 border-dashed border-deepteal-400/40 -z-0" />

        {/* Content */}
        <div className="relative z-10">
          {/* Title */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Gift className="w-5 h-5 text-warmaccent-300" />
            <span className="text-warmaccent-200 font-semibold uppercase tracking-wider text-sm">
              {title}
            </span>
            <Gift className="w-5 h-5 text-warmaccent-300" />
          </div>

          {/* Code box */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
            <div className="flex items-center justify-between gap-3">
              <code className="flex-1 text-2xl sm:text-3xl font-bold text-white tracking-widest text-center font-mono">
                {code}
              </code>
              <button
                onClick={handleCopy}
                className={cn(
                  "flex-shrink-0 p-3 rounded-xl transition-all duration-200",
                  copied
                    ? "bg-green-500 text-white"
                    : "bg-warmaccent-500 hover:bg-warmaccent-600 text-white"
                )}
                aria-label={copied ? copiedText : copyText}
              >
                {copied ? (
                  <Check className="w-5 h-5" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </button>
            </div>
            {copied && (
              <p className="text-green-300 text-sm text-center mt-2 animate-fade-in">
                {copiedText}
              </p>
            )}
          </div>

          {/* Hint and link */}
          <div className="text-center">
            <p className="text-deepteal-100 text-sm mb-2">{hint}</p>
            <a
              href="https://vastucart.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-white font-semibold hover:text-warmaccent-200 transition-colors"
            >
              {redeemAt} vastucart.in
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
