/**
 * Numerology Calculation Engine
 *
 * This module exports all numerology calculation functions and data.
 * It provides the core logic for:
 * - Life Path Number calculation
 * - Chaldean Name Numerology
 * - Lo Shu Grid analysis
 * - And more...
 */

// Life Path Number
export {
  calculateLifePath,
  getLifePathMeaning,
  LIFE_PATH_MEANINGS,
} from './life-path';

// Chaldean Numerology
export {
  calculateChaldean,
  getChaldeanMeaning,
  CHALDEAN_VALUES,
  CHALDEAN_MEANINGS,
} from './chaldean';

// Lo Shu Grid
export { calculateLoShuGrid } from './lo-shu';

// Re-export types
export type {
  LifePathResult,
  LifePathMeaning,
  ChaldeanResult,
  ChaldeanMeaning,
  LoShuResult,
  LoShuGrid,
  LoShuArrow,
  LoShuPlane,
  LoShuRemedy,
} from '@/types';
