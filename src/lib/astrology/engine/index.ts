/**
 * Vedic Astrology Engine
 * Complete calculation engine for Jyotish calculations
 */

// Julian Day calculations
export {
  dateToJulianDay,
  julianDayToDate,
  julianCenturies,
  localToUT,
  localSiderealTime,
  normalizeAngle,
  degreesToDMS,
  formatDMS,
} from './julian';

// Ayanamsa and position calculations
export {
  calculateLahiriAyanamsa,
  calculateLahiriAyanamsaPrecise,
  tropicalToSidereal,
  siderealToTropical,
  getSignIndex,
  getDegreeInSign,
  getNakshatraIndex,
  getPada,
  getPositionDetails,
  type PositionDetails,
} from './ayanamsa';

// Planetary positions
export {
  calculateSunLongitude,
  calculateMoonLongitude,
  calculatePlanetLongitude,
  calculateRahuLongitude,
  getAllPlanetPositions,
} from './planets';

// House calculations
export {
  calculateAscendant,
  calculateAscendantTropical,
  calculateMidheaven,
  calculateMidheavenTropical,
  calculateHouseCusps,
  getHouseNumber,
  getHousePosition,
  getAllHousePositions,
  getHouseLord,
  type HousePosition,
} from './houses';

// Dasha calculations
export {
  getStartingDashaLord,
  getElapsedDashaFraction,
  calculateMahadashas,
  calculateAntardashas,
  calculatePratyantardashas,
  getCurrentMahadasha,
  getCurrentAntardasha,
  formatDashaPeriod,
  getBalanceAtBirth,
  getDashaHierarchy,
  type DashaPeriod,
  type AntarDashaPeriod,
  type PratyantarDashaPeriod,
} from './dasha';

// Re-export constants
export {
  ZODIAC_SIGNS,
  PLANETS,
  NAKSHATRAS,
  HOUSES,
  VIMSHOTTARI_ORDER,
  VIMSHOTTARI_TOTAL_YEARS,
  NAKSHATRA_SPAN,
  PADA_SPAN,
  LAHIRI_AYANAMSA_J2000,
  J2000,
  DEG_TO_RAD,
  RAD_TO_DEG,
} from '../constants';
