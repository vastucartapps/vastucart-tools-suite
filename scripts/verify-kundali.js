/**
 * Kundali Verification Script
 *
 * Generates 25 random test kundalis for cross-verification with:
 * - AstroSage (https://www.astrosage.com/kundli/)
 * - Prokerala (https://www.prokerala.com/astrology/kundli/)
 *
 * Usage: node scripts/verify-kundali.js
 */

// Import the astrology calculation functions
// Note: This is a Node.js script, so we need to handle the TypeScript imports

const path = require('path');

// We'll directly implement the calculations here to avoid TypeScript compilation issues
// This mirrors the logic in src/lib/astrology/

// ============== CONSTANTS ==============

const DEG_TO_RAD = Math.PI / 180;
const RAD_TO_DEG = 180 / Math.PI;
const J2000 = 2451545.0;

const ZODIAC_SIGNS = [
  { name: 'Aries', hindi: 'मेष', symbol: '♈' },
  { name: 'Taurus', hindi: 'वृषभ', symbol: '♉' },
  { name: 'Gemini', hindi: 'मिथुन', symbol: '♊' },
  { name: 'Cancer', hindi: 'कर्क', symbol: '♋' },
  { name: 'Leo', hindi: 'सिंह', symbol: '♌' },
  { name: 'Virgo', hindi: 'कन्या', symbol: '♍' },
  { name: 'Libra', hindi: 'तुला', symbol: '♎' },
  { name: 'Scorpio', hindi: 'वृश्चिक', symbol: '♏' },
  { name: 'Sagittarius', hindi: 'धनु', symbol: '♐' },
  { name: 'Capricorn', hindi: 'मकर', symbol: '♑' },
  { name: 'Aquarius', hindi: 'कुंभ', symbol: '♒' },
  { name: 'Pisces', hindi: 'मीन', symbol: '♓' },
];

const NAKSHATRAS = [
  'Ashwini', 'Bharani', 'Krittika', 'Rohini', 'Mrigashira', 'Ardra',
  'Punarvasu', 'Pushya', 'Ashlesha', 'Magha', 'Purva Phalguni', 'Uttara Phalguni',
  'Hasta', 'Chitra', 'Swati', 'Vishakha', 'Anuradha', 'Jyeshtha',
  'Mula', 'Purva Ashadha', 'Uttara Ashadha', 'Shravana', 'Dhanishta', 'Shatabhisha',
  'Purva Bhadrapada', 'Uttara Bhadrapada', 'Revati'
];

const PLANETS = ['sun', 'moon', 'mars', 'mercury', 'jupiter', 'venus', 'saturn', 'rahu', 'ketu'];

// Indian cities for testing
const INDIAN_CITIES = [
  { name: 'Delhi', lat: 28.6139, lng: 77.2090, tz: 5.5 },
  { name: 'Mumbai', lat: 19.0760, lng: 72.8777, tz: 5.5 },
  { name: 'Chennai', lat: 13.0827, lng: 80.2707, tz: 5.5 },
  { name: 'Kolkata', lat: 22.5726, lng: 88.3639, tz: 5.5 },
  { name: 'Bangalore', lat: 12.9716, lng: 77.5946, tz: 5.5 },
  { name: 'Hyderabad', lat: 17.3850, lng: 78.4867, tz: 5.5 },
  { name: 'Jaipur', lat: 26.9124, lng: 75.7873, tz: 5.5 },
  { name: 'Lucknow', lat: 26.8467, lng: 80.9462, tz: 5.5 },
  { name: 'Ahmedabad', lat: 23.0225, lng: 72.5714, tz: 5.5 },
  { name: 'Pune', lat: 18.5204, lng: 73.8567, tz: 5.5 },
  { name: 'Varanasi', lat: 25.3176, lng: 82.9739, tz: 5.5 },
  { name: 'Patna', lat: 25.5941, lng: 85.1376, tz: 5.5 },
  { name: 'Bhopal', lat: 23.2599, lng: 77.4126, tz: 5.5 },
  { name: 'Indore', lat: 22.7196, lng: 75.8577, tz: 5.5 },
  { name: 'Nagpur', lat: 21.1458, lng: 79.0882, tz: 5.5 },
];

// ============== JULIAN DAY FUNCTIONS ==============

function dateToJulianDay(year, month, day, hour, minute, second = 0) {
  let Y = year;
  let M = month;

  if (M <= 2) {
    Y -= 1;
    M += 12;
  }

  const A = Math.floor(Y / 100);
  const B = 2 - A + Math.floor(A / 4);

  const JD = Math.floor(365.25 * (Y + 4716)) +
             Math.floor(30.6001 * (M + 1)) +
             day + B - 1524.5;

  const dayFraction = (hour + minute / 60 + second / 3600) / 24;

  return JD + dayFraction;
}

function localToUT(year, month, day, hour, minute, timezone) {
  let utHour = hour - timezone;
  let utDay = day;
  let utMonth = month;
  let utYear = year;

  if (utHour < 0) {
    utHour += 24;
    utDay -= 1;
    if (utDay < 1) {
      utMonth -= 1;
      if (utMonth < 1) {
        utMonth = 12;
        utYear -= 1;
      }
      utDay = new Date(utYear, utMonth, 0).getDate();
    }
  } else if (utHour >= 24) {
    utHour -= 24;
    utDay += 1;
    const daysInMonth = new Date(utYear, utMonth, 0).getDate();
    if (utDay > daysInMonth) {
      utDay = 1;
      utMonth += 1;
      if (utMonth > 12) {
        utMonth = 1;
        utYear += 1;
      }
    }
  }

  return { year: utYear, month: utMonth, day: utDay, hour: utHour, minute };
}

function julianCenturies(jd) {
  return (jd - J2000) / 36525;
}

function normalizeAngle(angle) {
  let normalized = angle % 360;
  if (normalized < 0) {
    normalized += 360;
  }
  return normalized;
}

function localSiderealTime(jd, longitude) {
  const T = julianCenturies(jd);

  let gmst = 280.46061837 + 360.98564736629 * (jd - J2000) +
             0.000387933 * T * T - T * T * T / 38710000;

  gmst = normalizeAngle(gmst);
  let lst = gmst + longitude;

  return normalizeAngle(lst);
}

// ============== PLANETARY CALCULATIONS ==============

const ORBITAL_ELEMENTS = {
  mercury: { a: 0.38709927, aDot: 0.00000037, e: 0.20563593, eDot: 0.00001906, L: 252.25032350, LDot: 149472.67411175, w: 77.45779628, wDot: 0.16047689 },
  venus: { a: 0.72333566, aDot: 0.00000390, e: 0.00677672, eDot: -0.00004107, L: 181.97909950, LDot: 58517.81538729, w: 131.60246718, wDot: 0.00268329 },
  earth: { a: 1.00000261, aDot: 0.00000562, e: 0.01671123, eDot: -0.00004392, L: 100.46457166, LDot: 35999.37244981, w: 102.93768193, wDot: 0.32327364 },
  mars: { a: 1.52371034, aDot: 0.00001847, e: 0.09339410, eDot: 0.00007882, L: -4.55343205, LDot: 19140.30268499, w: -23.94362959, wDot: 0.44441088 },
  jupiter: { a: 5.20288700, aDot: -0.00011607, e: 0.04838624, eDot: -0.00013253, L: 34.39644051, LDot: 3034.74612775, w: 14.72847983, wDot: 0.21252668 },
  saturn: { a: 9.53667594, aDot: -0.00125060, e: 0.05386179, eDot: -0.00050991, L: 49.95424423, LDot: 1222.49362201, w: 92.59887831, wDot: -0.41897216 },
};

function solveKepler(M, e) {
  let E = M;
  for (let i = 0; i < 10; i++) {
    const dE = (E - e * Math.sin(E) - M) / (1 - e * Math.cos(E));
    E -= dE;
    if (Math.abs(dE) < 1e-9) break;
  }
  return E;
}

function calculateSunLongitude(jd) {
  const T = julianCenturies(jd);
  const L0 = normalizeAngle(280.4664567 + 36000.76982779 * T);
  const M = normalizeAngle(357.5291092 + 35999.0502909 * T);
  const MRad = M * DEG_TO_RAD;
  const C = (1.9146 - 0.004817 * T) * Math.sin(MRad) +
            (0.019993 - 0.000101 * T) * Math.sin(2 * MRad) +
            0.00029 * Math.sin(3 * MRad);
  return normalizeAngle(L0 + C);
}

function calculateMoonLongitude(jd) {
  const T = julianCenturies(jd);
  const Lp = normalizeAngle(218.3164477 + 481267.88123421 * T);
  const D = normalizeAngle(297.8501921 + 445267.1114034 * T);
  const M = normalizeAngle(357.5291092 + 35999.0502909 * T);
  const Mp = normalizeAngle(134.9633964 + 477198.8675055 * T);
  const F = normalizeAngle(93.2720950 + 483202.0175233 * T);

  const DRad = D * DEG_TO_RAD;
  const MRad = M * DEG_TO_RAD;
  const MpRad = Mp * DEG_TO_RAD;
  const FRad = F * DEG_TO_RAD;

  let sumL = 0;
  sumL += 6288774 * Math.sin(MpRad);
  sumL += 1274027 * Math.sin(2 * DRad - MpRad);
  sumL += 658314 * Math.sin(2 * DRad);
  sumL += 213618 * Math.sin(2 * MpRad);
  sumL += -185116 * Math.sin(MRad);
  sumL += -114332 * Math.sin(2 * FRad);
  sumL += 58793 * Math.sin(2 * DRad - 2 * MpRad);
  sumL += 57066 * Math.sin(2 * DRad - MRad - MpRad);
  sumL += 53322 * Math.sin(2 * DRad + MpRad);
  sumL += 45758 * Math.sin(2 * DRad - MRad);

  const correction = sumL / 1000000;
  return normalizeAngle(Lp + correction);
}

function calculateRahuLongitude(jd) {
  const T = julianCenturies(jd);
  return normalizeAngle(125.0445479 - 1934.1362891 * T + 0.0020754 * T * T);
}

function calculatePlanetLongitude(planet, jd) {
  if (planet === 'sun') return calculateSunLongitude(jd);
  if (planet === 'moon') return calculateMoonLongitude(jd);
  if (planet === 'rahu') return calculateRahuLongitude(jd);
  if (planet === 'ketu') return normalizeAngle(calculateRahuLongitude(jd) + 180);

  const T = julianCenturies(jd);

  // Earth position
  const earthE = ORBITAL_ELEMENTS.earth;
  const earthL = normalizeAngle(earthE.L + earthE.LDot * T);
  const earthA = earthE.a + earthE.aDot * T;
  const earthEc = earthE.e + earthE.eDot * T;
  const earthW = normalizeAngle(earthE.w + earthE.wDot * T);
  const earthM = normalizeAngle(earthL - earthW);
  const earthEA = solveKepler(earthM * DEG_TO_RAD, earthEc);
  const earthR = earthA * (1 - earthEc * Math.cos(earthEA));
  const earthV = 2 * Math.atan(Math.sqrt((1 + earthEc) / (1 - earthEc)) * Math.tan(earthEA / 2));
  const earthHelioLon = normalizeAngle((earthV * RAD_TO_DEG) + earthW);

  // Planet position
  const elem = ORBITAL_ELEMENTS[planet];
  if (!elem) return 0;

  const L = normalizeAngle(elem.L + elem.LDot * T);
  const a = elem.a + elem.aDot * T;
  const e = elem.e + elem.eDot * T;
  const w = normalizeAngle(elem.w + elem.wDot * T);
  const M = normalizeAngle(L - w);
  const EA = solveKepler(M * DEG_TO_RAD, e);
  const r = a * (1 - e * Math.cos(EA));
  const v = 2 * Math.atan(Math.sqrt((1 + e) / (1 - e)) * Math.tan(EA / 2));
  const helioLon = normalizeAngle((v * RAD_TO_DEG) + w);

  // Convert to geocentric
  const helioLonRad = helioLon * DEG_TO_RAD;
  const earthHelioLonRad = earthHelioLon * DEG_TO_RAD;
  const x = r * Math.cos(helioLonRad) - earthR * Math.cos(earthHelioLonRad);
  const y = r * Math.sin(helioLonRad) - earthR * Math.sin(earthHelioLonRad);

  return normalizeAngle(Math.atan2(y, x) * RAD_TO_DEG);
}

// ============== AYANAMSA ==============

function calculateLahiriAyanamsa(jd) {
  const T = julianCenturies(jd);
  const ayanamsa = 23.85305556 + (50.29 / 3600) * (jd - J2000) / 365.25;
  return ayanamsa;
}

function tropicalToSidereal(tropical, jd) {
  const ayanamsa = calculateLahiriAyanamsa(jd);
  return normalizeAngle(tropical - ayanamsa);
}

function getSignIndex(longitude) {
  return Math.floor(longitude / 30);
}

function getNakshatraIndex(longitude) {
  return Math.floor(longitude / (360 / 27));
}

function getPada(longitude) {
  const nakshatraSpan = 360 / 27; // ~13.333°
  const padaSpan = nakshatraSpan / 4; // ~3.333°
  const posInNakshatra = longitude % nakshatraSpan;
  return Math.floor(posInNakshatra / padaSpan) + 1;
}

// ============== ASCENDANT CALCULATION ==============

function calculateAscendantTropical(jd, latitude, longitude) {
  const lst = localSiderealTime(jd, longitude);
  const lstRad = lst * DEG_TO_RAD;
  const latRad = latitude * DEG_TO_RAD;

  const T = julianCenturies(jd);
  const epsilon = 23.439291 - 0.0130042 * T;
  const epsRad = epsilon * DEG_TO_RAD;

  const cosLst = Math.cos(lstRad);
  const sinLst = Math.sin(lstRad);
  const cosEps = Math.cos(epsRad);
  const sinEps = Math.sin(epsRad);
  const tanLat = Math.tan(latRad);

  const numerator = cosLst;
  const denominator = -(sinLst * cosEps) - (tanLat * sinEps);

  let ascendant = Math.atan2(numerator, denominator) * RAD_TO_DEG;

  // Normalize to 0-360° range
  // Note: atan2 already handles quadrant correctly based on signs of numerator/denominator
  // No additional quadrant correction is needed - the LST/ASC relationship is not direct
  // The Ascendant depends on latitude, LST, and obliquity in a complex way
  return normalizeAngle(ascendant);
}

function calculateAscendant(jd, latitude, longitude) {
  const tropical = calculateAscendantTropical(jd, latitude, longitude);
  return tropicalToSidereal(tropical, jd);
}

// ============== HOUSE CALCULATION ==============

function getHouseNumber(planetLongitude, ascendant) {
  const ascSign = getSignIndex(ascendant);
  const planetSign = getSignIndex(planetLongitude);
  let house = planetSign - ascSign + 1;
  if (house <= 0) house += 12;
  return house;
}

// ============== MAIN CALCULATION ==============

function calculateKundali(birthDetails) {
  const { year, month, day, hour, minute, latitude, longitude, timezone } = birthDetails;

  // Convert to UT
  const ut = localToUT(year, month, day, hour, minute, timezone);
  const jd = dateToJulianDay(ut.year, ut.month, ut.day, ut.hour, ut.minute);

  // Calculate ascendant
  const ascendant = calculateAscendant(jd, latitude, longitude);
  const lagnaSign = getSignIndex(ascendant);

  // Calculate all planets
  const planets = {};
  for (const planet of PLANETS) {
    const tropical = calculatePlanetLongitude(planet, jd);
    const sidereal = tropicalToSidereal(tropical, jd);
    const sign = getSignIndex(sidereal);
    const house = getHouseNumber(sidereal, ascendant);

    planets[planet] = {
      longitude: sidereal,
      sign,
      signName: ZODIAC_SIGNS[sign].name,
      house,
    };

    if (planet === 'moon') {
      planets[planet].nakshatra = getNakshatraIndex(sidereal);
      planets[planet].nakshatraName = NAKSHATRAS[planets[planet].nakshatra];
      planets[planet].pada = getPada(sidereal);
    }
  }

  return {
    ascendant,
    lagnaSign,
    lagnaName: ZODIAC_SIGNS[lagnaSign].name,
    moonSign: planets.moon.sign,
    moonSignName: planets.moon.signName,
    nakshatra: planets.moon.nakshatraName,
    pada: planets.moon.pada,
    planets,
  };
}

// ============== GENERATE RANDOM TEST DATA ==============

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomBirthData() {
  const year = randomInt(1950, 2010);
  const month = randomInt(1, 12);
  const maxDay = new Date(year, month, 0).getDate();
  const day = randomInt(1, maxDay);
  const hour = randomInt(0, 23);
  const minute = randomInt(0, 59);
  const city = INDIAN_CITIES[randomInt(0, INDIAN_CITIES.length - 1)];

  return {
    year,
    month,
    day,
    hour,
    minute,
    latitude: city.lat,
    longitude: city.lng,
    timezone: city.tz,
    cityName: city.name,
  };
}

function formatDegree(deg) {
  const d = Math.floor(deg);
  const m = Math.floor((deg - d) * 60);
  const s = Math.floor(((deg - d) * 60 - m) * 60);
  return `${d}°${m}'${s}"`;
}

// ============== MAIN EXECUTION ==============

console.log('=' .repeat(80));
console.log('KUNDALI VERIFICATION TEST - 25 RANDOM CHARTS');
console.log('=' .repeat(80));
console.log('\nVerify each chart against:');
console.log('1. AstroSage: https://www.astrosage.com/kundli/');
console.log('2. Prokerala: https://www.prokerala.com/astrology/kundli/');
console.log('\n' + '=' .repeat(80));

const testCases = [];

for (let i = 1; i <= 25; i++) {
  const birth = generateRandomBirthData();
  const kundali = calculateKundali(birth);

  testCases.push({ birth, kundali });

  console.log(`\n${'─'.repeat(80)}`);
  console.log(`TEST #${i}`);
  console.log('─'.repeat(80));

  console.log(`\nBIRTH DETAILS:`);
  console.log(`  Date: ${birth.day.toString().padStart(2, '0')}-${birth.month.toString().padStart(2, '0')}-${birth.year}`);
  console.log(`  Time: ${birth.hour.toString().padStart(2, '0')}:${birth.minute.toString().padStart(2, '0')}`);
  console.log(`  Place: ${birth.cityName}`);
  console.log(`  Coordinates: ${birth.latitude.toFixed(4)}°N, ${birth.longitude.toFixed(4)}°E`);
  console.log(`  Timezone: UTC+${birth.timezone}`);

  console.log(`\nOUR SYSTEM RESULTS:`);
  console.log(`  Lagna (Ascendant): ${kundali.lagnaName} (${ZODIAC_SIGNS[kundali.lagnaSign].symbol})`);
  console.log(`  Moon Sign: ${kundali.moonSignName} (${ZODIAC_SIGNS[kundali.moonSign].symbol})`);
  console.log(`  Nakshatra: ${kundali.nakshatra}`);
  console.log(`  Pada: ${kundali.pada}`);

  console.log(`\n  PLANET POSITIONS:`);
  console.log(`  ${'Planet'.padEnd(10)} ${'Sign'.padEnd(12)} ${'House'.padEnd(6)} Longitude`);
  console.log(`  ${'-'.repeat(45)}`);

  for (const planet of PLANETS) {
    const p = kundali.planets[planet];
    const planetName = planet.charAt(0).toUpperCase() + planet.slice(1);
    console.log(`  ${planetName.padEnd(10)} ${p.signName.padEnd(12)} ${String(p.house).padEnd(6)} ${formatDegree(p.longitude)}`);
  }

  // Verify Rahu-Ketu are 180° apart
  const rahuKetu = Math.abs(kundali.planets.rahu.longitude - kundali.planets.ketu.longitude);
  const rahuKetuOk = Math.abs(rahuKetu - 180) < 0.01 || Math.abs(rahuKetu - 180 + 360) < 0.01 || Math.abs(rahuKetu - 180 - 360) < 0.01;
  console.log(`\n  Rahu-Ketu Opposition: ${rahuKetuOk ? '✓ CORRECT (180°)' : '✗ ERROR!'}`);
}

console.log('\n' + '=' .repeat(80));
console.log('SUMMARY: Generated 25 test cases');
console.log('Please verify each case manually on AstroSage and Prokerala');
console.log('=' .repeat(80));

// Output JSON for easier processing
console.log('\n\nJSON OUTPUT FOR PROGRAMMATIC VERIFICATION:');
console.log(JSON.stringify(testCases.map((tc, i) => ({
  testNum: i + 1,
  birth: {
    date: `${tc.birth.day}-${tc.birth.month}-${tc.birth.year}`,
    time: `${tc.birth.hour}:${tc.birth.minute.toString().padStart(2, '0')}`,
    place: tc.birth.cityName,
    lat: tc.birth.latitude,
    lng: tc.birth.longitude,
  },
  result: {
    lagna: tc.kundali.lagnaName,
    moonSign: tc.kundali.moonSignName,
    nakshatra: tc.kundali.nakshatra,
    pada: tc.kundali.pada,
    rahu: { sign: tc.kundali.planets.rahu.signName, house: tc.kundali.planets.rahu.house },
    ketu: { sign: tc.kundali.planets.ketu.signName, house: tc.kundali.planets.ketu.house },
  }
})), null, 2));
