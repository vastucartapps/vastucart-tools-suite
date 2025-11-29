/**
 * Rate Limiting Hook
 *
 * Prevents rapid form submissions to protect against abuse.
 * Enterprise-grade client-side rate limiting.
 */

import { useRef, useCallback } from 'react';

interface RateLimitOptions {
  /** Minimum time between submissions in milliseconds */
  minInterval?: number;
  /** Maximum submissions allowed in the time window */
  maxSubmissions?: number;
  /** Time window for max submissions in milliseconds */
  windowMs?: number;
}

interface RateLimitResult {
  /** Check if action is allowed, returns error message if blocked */
  checkLimit: () => string | null;
  /** Reset the rate limiter */
  reset: () => void;
}

/**
 * Hook to implement client-side rate limiting
 *
 * @example
 * const { checkLimit } = useRateLimit({ minInterval: 1000 });
 *
 * const handleSubmit = () => {
 *   const error = checkLimit();
 *   if (error) {
 *     setError(error);
 *     return;
 *   }
 *   // proceed with submission
 * };
 */
export function useRateLimit(
  options: RateLimitOptions = {},
  locale: 'en' | 'hi' = 'en'
): RateLimitResult {
  const {
    minInterval = 1000, // 1 second default
    maxSubmissions = 10,
    windowMs = 60000, // 1 minute window
  } = options;

  const lastSubmitTime = useRef<number>(0);
  const submissionTimes = useRef<number[]>([]);

  const errorMessages = {
    tooFast: {
      en: 'Please wait a moment before trying again',
      hi: 'कृपया पुनः प्रयास करने से पहले एक क्षण प्रतीक्षा करें',
    },
    tooMany: {
      en: 'Too many attempts. Please wait a minute',
      hi: 'बहुत अधिक प्रयास। कृपया एक मिनट प्रतीक्षा करें',
    },
  };

  const checkLimit = useCallback((): string | null => {
    const now = Date.now();

    // Check minimum interval
    if (now - lastSubmitTime.current < minInterval) {
      return errorMessages.tooFast[locale];
    }

    // Clean old submissions outside the window
    submissionTimes.current = submissionTimes.current.filter(
      (time) => now - time < windowMs
    );

    // Check max submissions in window
    if (submissionTimes.current.length >= maxSubmissions) {
      return errorMessages.tooMany[locale];
    }

    // Record this submission
    lastSubmitTime.current = now;
    submissionTimes.current.push(now);

    return null; // No error, allowed to proceed
  }, [minInterval, maxSubmissions, windowMs, locale]);

  const reset = useCallback(() => {
    lastSubmitTime.current = 0;
    submissionTimes.current = [];
  }, []);

  return { checkLimit, reset };
}
