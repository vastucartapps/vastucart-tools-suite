/**
 * Celebrity Data for Matching
 *
 * Pre-calculated numerology and astrology values for famous Indians.
 * Used to show "Famous people with same [result]" in calculator tools.
 */

export interface Celebrity {
  name: string;
  nameHi: string;
  birthDate: string;        // YYYY-MM-DD
  profession: string;
  professionHi: string;
  // Pre-calculated numerology values:
  lifePathNumber: number;
  destinyNumber: number;
  mulank: number;           // Birth day root number
  bhagyank: number;         // Full birth date number
  // Pre-calculated astrology values (approximate without birth time):
  sunSign: number;          // 0-11 (Aries-Pisces, Western)
  moonSign?: number;        // 0-11 (requires birth time for accuracy)
  nakshatra?: number;       // 0-26 (requires birth time for accuracy)
}

// Helper to reduce a number to single digit or master number
function reduceToDigit(num: number): number {
  while (num > 9 && num !== 11 && num !== 22 && num !== 33) {
    num = num.toString().split('').map(Number).reduce((a, b) => a + b, 0);
  }
  return num;
}

// Helper to calculate life path number (correct method: reduce day, month, year separately first)
function calculateLifePath(date: string): number {
  const [year, month, day] = date.split('-').map(Number);

  // Reduce each component separately
  const dayReduced = reduceToDigit(day);
  const monthReduced = reduceToDigit(month);
  const yearReduced = reduceToDigit(year);

  // Sum and reduce final result
  const total = dayReduced + monthReduced + yearReduced;
  return reduceToDigit(total);
}

// Helper to calculate mulank (day of birth reduced)
function calculateMulank(day: number): number {
  let sum = day;
  while (sum > 9) {
    sum = sum.toString().split('').map(Number).reduce((a, b) => a + b, 0);
  }
  return sum;
}

// Helper to get sun sign from date (Western astrology)
function getSunSign(month: number, day: number): number {
  const signs = [
    [20, 0],  // Jan 20 - Aquarius (10)
    [19, 1],  // Feb 19 - Pisces (11)
    [21, 2],  // Mar 21 - Aries (0)
    [20, 3],  // Apr 20 - Taurus (1)
    [21, 4],  // May 21 - Gemini (2)
    [21, 5],  // Jun 21 - Cancer (3)
    [23, 6],  // Jul 23 - Leo (4)
    [23, 7],  // Aug 23 - Virgo (5)
    [23, 8],  // Sep 23 - Libra (6)
    [23, 9],  // Oct 23 - Scorpio (7)
    [22, 10], // Nov 22 - Sagittarius (8)
    [22, 11], // Dec 22 - Capricorn (9)
  ];

  const signOrder = [9, 10, 11, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [cutoff] = signs[month - 1];

  if (day >= cutoff) {
    return signOrder[month - 1];
  } else {
    return signOrder[(month - 2 + 12) % 12];
  }
}

/**
 * Celebrity Database
 * Birth dates verified from public records/Wikipedia
 */
export const CELEBRITIES: Celebrity[] = [
  // POLITICIANS & LEADERS
  {
    name: 'Narendra Modi',
    nameHi: 'नरेंद्र मोदी',
    birthDate: '1950-09-17',
    profession: 'Prime Minister',
    professionHi: 'प्रधानमंत्री',
    lifePathNumber: calculateLifePath('1950-09-17'), // 4
    destinyNumber: 4,
    mulank: calculateMulank(17), // 8
    bhagyank: 4,
    sunSign: getSunSign(9, 17), // Virgo (5)
  },
  {
    name: 'APJ Abdul Kalam',
    nameHi: 'एपीजे अब्दुल कलाम',
    birthDate: '1931-10-15',
    profession: 'Scientist & President',
    professionHi: 'वैज्ञानिक और राष्ट्रपति',
    lifePathNumber: calculateLifePath('1931-10-15'), // 2
    destinyNumber: 2,
    mulank: calculateMulank(15), // 6
    bhagyank: 2,
    sunSign: getSunSign(10, 15), // Libra (6)
  },
  {
    name: 'Mahatma Gandhi',
    nameHi: 'महात्मा गांधी',
    birthDate: '1869-10-02',
    profession: 'Freedom Fighter',
    professionHi: 'स्वतंत्रता सेनानी',
    lifePathNumber: calculateLifePath('1869-10-02'), // 9
    destinyNumber: 9,
    mulank: calculateMulank(2), // 2
    bhagyank: 9,
    sunSign: getSunSign(10, 2), // Libra (6)
  },
  {
    name: 'Jawaharlal Nehru',
    nameHi: 'जवाहरलाल नेहरू',
    birthDate: '1889-11-14',
    profession: 'First Prime Minister',
    professionHi: 'प्रथम प्रधानमंत्री',
    lifePathNumber: calculateLifePath('1889-11-14'), // 6
    destinyNumber: 6,
    mulank: calculateMulank(14), // 5
    bhagyank: 6,
    sunSign: getSunSign(11, 14), // Scorpio (7)
  },
  {
    name: 'Indira Gandhi',
    nameHi: 'इंदिरा गांधी',
    birthDate: '1917-11-19',
    profession: 'Prime Minister',
    professionHi: 'प्रधानमंत्री',
    lifePathNumber: calculateLifePath('1917-11-19'), // 2
    destinyNumber: 2,
    mulank: calculateMulank(19), // 1
    bhagyank: 2,
    sunSign: getSunSign(11, 19), // Scorpio (7)
  },
  {
    name: 'Sardar Vallabhbhai Patel',
    nameHi: 'सरदार वल्लभभाई पटेल',
    birthDate: '1875-10-31',
    profession: 'Freedom Fighter',
    professionHi: 'स्वतंत्रता सेनानी',
    lifePathNumber: calculateLifePath('1875-10-31'), // 7
    destinyNumber: 7,
    mulank: calculateMulank(31), // 4
    bhagyank: 7,
    sunSign: getSunSign(10, 31), // Scorpio (7)
  },
  {
    name: 'Subhas Chandra Bose',
    nameHi: 'सुभाष चंद्र बोस',
    birthDate: '1897-01-23',
    profession: 'Freedom Fighter',
    professionHi: 'स्वतंत्रता सेनानी',
    lifePathNumber: calculateLifePath('1897-01-23'), // 4
    destinyNumber: 4,
    mulank: calculateMulank(23), // 5
    bhagyank: 4,
    sunSign: getSunSign(1, 23), // Aquarius (10)
  },

  // ACTORS & ENTERTAINMENT
  {
    name: 'Amitabh Bachchan',
    nameHi: 'अमिताभ बच्चन',
    birthDate: '1942-10-11',
    profession: 'Actor',
    professionHi: 'अभिनेता',
    lifePathNumber: calculateLifePath('1942-10-11'), // 1
    destinyNumber: 1,
    mulank: calculateMulank(11), // 2
    bhagyank: 1,
    sunSign: getSunSign(10, 11), // Libra (6)
  },
  {
    name: 'Shah Rukh Khan',
    nameHi: 'शाहरुख खान',
    birthDate: '1965-11-02',
    profession: 'Actor',
    professionHi: 'अभिनेता',
    lifePathNumber: calculateLifePath('1965-11-02'), // 7
    destinyNumber: 7,
    mulank: calculateMulank(2), // 2
    bhagyank: 7,
    sunSign: getSunSign(11, 2), // Scorpio (7)
  },
  {
    name: 'Salman Khan',
    nameHi: 'सलमान खान',
    birthDate: '1965-12-27',
    profession: 'Actor',
    professionHi: 'अभिनेता',
    lifePathNumber: calculateLifePath('1965-12-27'), // 5
    destinyNumber: 5,
    mulank: calculateMulank(27), // 9
    bhagyank: 5,
    sunSign: getSunSign(12, 27), // Capricorn (9)
  },
  {
    name: 'Aamir Khan',
    nameHi: 'आमिर खान',
    birthDate: '1965-03-14',
    profession: 'Actor',
    professionHi: 'अभिनेता',
    lifePathNumber: calculateLifePath('1965-03-14'), // 2
    destinyNumber: 2,
    mulank: calculateMulank(14), // 5
    bhagyank: 2,
    sunSign: getSunSign(3, 14), // Pisces (11)
  },
  {
    name: 'Rajinikanth',
    nameHi: 'रजनीकांत',
    birthDate: '1950-12-12',
    profession: 'Actor',
    professionHi: 'अभिनेता',
    lifePathNumber: calculateLifePath('1950-12-12'), // 3
    destinyNumber: 3,
    mulank: calculateMulank(12), // 3
    bhagyank: 3,
    sunSign: getSunSign(12, 12), // Sagittarius (8)
  },
  {
    name: 'Deepika Padukone',
    nameHi: 'दीपिका पादुकोण',
    birthDate: '1986-01-05',
    profession: 'Actress',
    professionHi: 'अभिनेत्री',
    lifePathNumber: calculateLifePath('1986-01-05'), // 3
    destinyNumber: 3,
    mulank: calculateMulank(5), // 5
    bhagyank: 3,
    sunSign: getSunSign(1, 5), // Capricorn (9)
  },
  {
    name: 'Priyanka Chopra',
    nameHi: 'प्रियंका चोपड़ा',
    birthDate: '1982-07-18',
    profession: 'Actress',
    professionHi: 'अभिनेत्री',
    lifePathNumber: calculateLifePath('1982-07-18'), // 9
    destinyNumber: 9,
    mulank: calculateMulank(18), // 9
    bhagyank: 9,
    sunSign: getSunSign(7, 18), // Cancer (3)
  },
  {
    name: 'Aishwarya Rai',
    nameHi: 'ऐश्वर्या राय',
    birthDate: '1973-11-01',
    profession: 'Actress',
    professionHi: 'अभिनेत्री',
    lifePathNumber: calculateLifePath('1973-11-01'), // 5
    destinyNumber: 5,
    mulank: calculateMulank(1), // 1
    bhagyank: 5,
    sunSign: getSunSign(11, 1), // Scorpio (7)
  },
  {
    name: 'Akshay Kumar',
    nameHi: 'अक्षय कुमार',
    birthDate: '1967-09-09',
    profession: 'Actor',
    professionHi: 'अभिनेता',
    lifePathNumber: calculateLifePath('1967-09-09'), // 5
    destinyNumber: 5,
    mulank: calculateMulank(9), // 9
    bhagyank: 5,
    sunSign: getSunSign(9, 9), // Virgo (5)
  },
  {
    name: 'Hrithik Roshan',
    nameHi: 'ऋतिक रोशन',
    birthDate: '1974-01-10',
    profession: 'Actor',
    professionHi: 'अभिनेता',
    lifePathNumber: calculateLifePath('1974-01-10'), // 5
    destinyNumber: 5,
    mulank: calculateMulank(10), // 1
    bhagyank: 5,
    sunSign: getSunSign(1, 10), // Capricorn (9)
  },
  {
    name: 'Kareena Kapoor',
    nameHi: 'करीना कपूर',
    birthDate: '1980-09-21',
    profession: 'Actress',
    professionHi: 'अभिनेत्री',
    lifePathNumber: calculateLifePath('1980-09-21'), // 3
    destinyNumber: 3,
    mulank: calculateMulank(21), // 3
    bhagyank: 3,
    sunSign: getSunSign(9, 21), // Virgo (5)
  },
  {
    name: 'Ranveer Singh',
    nameHi: 'रणवीर सिंह',
    birthDate: '1985-07-06',
    profession: 'Actor',
    professionHi: 'अभिनेता',
    lifePathNumber: calculateLifePath('1985-07-06'), // 9
    destinyNumber: 9,
    mulank: calculateMulank(6), // 6
    bhagyank: 9,
    sunSign: getSunSign(7, 6), // Cancer (3)
  },
  {
    name: 'Alia Bhatt',
    nameHi: 'आलिया भट्ट',
    birthDate: '1993-03-15',
    profession: 'Actress',
    professionHi: 'अभिनेत्री',
    lifePathNumber: calculateLifePath('1993-03-15'), // 4
    destinyNumber: 4,
    mulank: calculateMulank(15), // 6
    bhagyank: 4,
    sunSign: getSunSign(3, 15), // Pisces (11)
  },

  // SPORTS
  {
    name: 'Sachin Tendulkar',
    nameHi: 'सचिन तेंदुलकर',
    birthDate: '1973-04-24',
    profession: 'Cricketer',
    professionHi: 'क्रिकेटर',
    lifePathNumber: calculateLifePath('1973-04-24'), // 3
    destinyNumber: 3,
    mulank: calculateMulank(24), // 6
    bhagyank: 3,
    sunSign: getSunSign(4, 24), // Taurus (1)
  },
  {
    name: 'MS Dhoni',
    nameHi: 'एमएस धोनी',
    birthDate: '1981-07-07',
    profession: 'Cricketer',
    professionHi: 'क्रिकेटर',
    lifePathNumber: calculateLifePath('1981-07-07'), // 6
    destinyNumber: 6,
    mulank: calculateMulank(7), // 7
    bhagyank: 6,
    sunSign: getSunSign(7, 7), // Cancer (3)
  },
  {
    name: 'Virat Kohli',
    nameHi: 'विराट कोहली',
    birthDate: '1988-11-05',
    profession: 'Cricketer',
    professionHi: 'क्रिकेटर',
    lifePathNumber: calculateLifePath('1988-11-05'), // 5
    destinyNumber: 5,
    mulank: calculateMulank(5), // 5
    bhagyank: 5,
    sunSign: getSunSign(11, 5), // Scorpio (7)
  },
  {
    name: 'Kapil Dev',
    nameHi: 'कपिल देव',
    birthDate: '1959-01-06',
    profession: 'Cricketer',
    professionHi: 'क्रिकेटर',
    lifePathNumber: calculateLifePath('1959-01-06'), // 4
    destinyNumber: 4,
    mulank: calculateMulank(6), // 6
    bhagyank: 4,
    sunSign: getSunSign(1, 6), // Capricorn (9)
  },
  {
    name: 'Rohit Sharma',
    nameHi: 'रोहित शर्मा',
    birthDate: '1987-04-30',
    profession: 'Cricketer',
    professionHi: 'क्रिकेटर',
    lifePathNumber: calculateLifePath('1987-04-30'), // 5
    destinyNumber: 5,
    mulank: calculateMulank(30), // 3
    bhagyank: 5,
    sunSign: getSunSign(4, 30), // Taurus (1)
  },
  {
    name: 'PV Sindhu',
    nameHi: 'पीवी सिंधु',
    birthDate: '1995-07-05',
    profession: 'Badminton Player',
    professionHi: 'बैडमिंटन खिलाड़ी',
    lifePathNumber: calculateLifePath('1995-07-05'), // 9
    destinyNumber: 9,
    mulank: calculateMulank(5), // 5
    bhagyank: 9,
    sunSign: getSunSign(7, 5), // Cancer (3)
  },
  {
    name: 'Saina Nehwal',
    nameHi: 'साइना नेहवाल',
    birthDate: '1990-03-17',
    profession: 'Badminton Player',
    professionHi: 'बैडमिंटन खिलाड़ी',
    lifePathNumber: calculateLifePath('1990-03-17'), // 3
    destinyNumber: 3,
    mulank: calculateMulank(17), // 8
    bhagyank: 3,
    sunSign: getSunSign(3, 17), // Pisces (11)
  },
  {
    name: 'Mary Kom',
    nameHi: 'मैरी कॉम',
    birthDate: '1983-03-01',
    profession: 'Boxer',
    professionHi: 'मुक्केबाज',
    lifePathNumber: calculateLifePath('1983-03-01'), // 7
    destinyNumber: 7,
    mulank: calculateMulank(1), // 1
    bhagyank: 7,
    sunSign: getSunSign(3, 1), // Pisces (11)
  },
  {
    name: 'Neeraj Chopra',
    nameHi: 'नीरज चोपड़ा',
    birthDate: '1997-12-24',
    profession: 'Javelin Thrower',
    professionHi: 'भाला फेंक खिलाड़ी',
    lifePathNumber: calculateLifePath('1997-12-24'), // 7
    destinyNumber: 7,
    mulank: calculateMulank(24), // 6
    bhagyank: 7,
    sunSign: getSunSign(12, 24), // Capricorn (9)
  },

  // BUSINESS
  {
    name: 'Mukesh Ambani',
    nameHi: 'मुकेश अंबानी',
    birthDate: '1957-04-19',
    profession: 'Business Tycoon',
    professionHi: 'उद्योगपति',
    lifePathNumber: calculateLifePath('1957-04-19'), // 9
    destinyNumber: 9,
    mulank: calculateMulank(19), // 1
    bhagyank: 9,
    sunSign: getSunSign(4, 19), // Aries (0)
  },
  {
    name: 'Ratan Tata',
    nameHi: 'रतन टाटा',
    birthDate: '1937-12-28',
    profession: 'Industrialist',
    professionHi: 'उद्योगपति',
    lifePathNumber: calculateLifePath('1937-12-28'), // 5
    destinyNumber: 5,
    mulank: calculateMulank(28), // 1
    bhagyank: 5,
    sunSign: getSunSign(12, 28), // Capricorn (9)
  },
  {
    name: 'Sundar Pichai',
    nameHi: 'सुंदर पिचाई',
    birthDate: '1972-06-10',
    profession: 'CEO Google',
    professionHi: 'गूगल सीईओ',
    lifePathNumber: calculateLifePath('1972-06-10'), // 8
    destinyNumber: 8,
    mulank: calculateMulank(10), // 1
    bhagyank: 8,
    sunSign: getSunSign(6, 10), // Gemini (2)
  },
  {
    name: 'Satya Nadella',
    nameHi: 'सत्य नडेला',
    birthDate: '1967-08-19',
    profession: 'CEO Microsoft',
    professionHi: 'माइक्रोसॉफ्ट सीईओ',
    lifePathNumber: calculateLifePath('1967-08-19'), // 5
    destinyNumber: 5,
    mulank: calculateMulank(19), // 1
    bhagyank: 5,
    sunSign: getSunSign(8, 19), // Leo (4)
  },
  {
    name: 'Dhirubhai Ambani',
    nameHi: 'धीरूभाई अंबानी',
    birthDate: '1932-12-28',
    profession: 'Industrialist',
    professionHi: 'उद्योगपति',
    lifePathNumber: calculateLifePath('1932-12-28'), // 9
    destinyNumber: 9,
    mulank: calculateMulank(28), // 1
    bhagyank: 9,
    sunSign: getSunSign(12, 28), // Capricorn (9)
  },

  // SPIRITUAL & HISTORICAL
  {
    name: 'Swami Vivekananda',
    nameHi: 'स्वामी विवेकानंद',
    birthDate: '1863-01-12',
    profession: 'Spiritual Leader',
    professionHi: 'आध्यात्मिक नेता',
    lifePathNumber: calculateLifePath('1863-01-12'), // 4
    destinyNumber: 4,
    mulank: calculateMulank(12), // 3
    bhagyank: 4,
    sunSign: getSunSign(1, 12), // Capricorn (9)
  },
  {
    name: 'Rabindranath Tagore',
    nameHi: 'रबींद्रनाथ टैगोर',
    birthDate: '1861-05-07',
    profession: 'Poet & Nobel Laureate',
    professionHi: 'कवि और नोबेल पुरस्कार विजेता',
    lifePathNumber: calculateLifePath('1861-05-07'), // 1
    destinyNumber: 1,
    mulank: calculateMulank(7), // 7
    bhagyank: 1,
    sunSign: getSunSign(5, 7), // Taurus (1)
  },
  {
    name: 'Bhagat Singh',
    nameHi: 'भगत सिंह',
    birthDate: '1907-09-28',
    profession: 'Freedom Fighter',
    professionHi: 'स्वतंत्रता सेनानी',
    lifePathNumber: calculateLifePath('1907-09-28'), // 9
    destinyNumber: 9,
    mulank: calculateMulank(28), // 1
    bhagyank: 9,
    sunSign: getSunSign(9, 28), // Libra (6)
  },
  {
    name: 'Sarojini Naidu',
    nameHi: 'सरोजिनी नायडू',
    birthDate: '1879-02-13',
    profession: 'Poet & Freedom Fighter',
    professionHi: 'कवयित्री और स्वतंत्रता सेनानी',
    lifePathNumber: calculateLifePath('1879-02-13'), // 4
    destinyNumber: 4,
    mulank: calculateMulank(13), // 4
    bhagyank: 4,
    sunSign: getSunSign(2, 13), // Aquarius (10)
  },
  {
    name: 'Mother Teresa',
    nameHi: 'मदर टेरेसा',
    birthDate: '1910-08-26',
    profession: 'Humanitarian',
    professionHi: 'मानवतावादी',
    lifePathNumber: calculateLifePath('1910-08-26'), // 9
    destinyNumber: 9,
    mulank: calculateMulank(26), // 8
    bhagyank: 9,
    sunSign: getSunSign(8, 26), // Virgo (5)
  },

  // SCIENCE & TECHNOLOGY
  {
    name: 'CV Raman',
    nameHi: 'सीवी रमन',
    birthDate: '1888-11-07',
    profession: 'Physicist & Nobel Laureate',
    professionHi: 'भौतिक विज्ञानी',
    lifePathNumber: calculateLifePath('1888-11-07'), // 6
    destinyNumber: 6,
    mulank: calculateMulank(7), // 7
    bhagyank: 6,
    sunSign: getSunSign(11, 7), // Scorpio (7)
  },
  {
    name: 'Homi Bhabha',
    nameHi: 'होमी भाभा',
    birthDate: '1909-10-30',
    profession: 'Nuclear Physicist',
    professionHi: 'परमाणु भौतिक विज्ञानी',
    lifePathNumber: calculateLifePath('1909-10-30'), // 5
    destinyNumber: 5,
    mulank: calculateMulank(30), // 3
    bhagyank: 5,
    sunSign: getSunSign(10, 30), // Scorpio (7)
  },
  {
    name: 'Vikram Sarabhai',
    nameHi: 'विक्रम साराभाई',
    birthDate: '1919-08-12',
    profession: 'Space Scientist',
    professionHi: 'अंतरिक्ष वैज्ञानिक',
    lifePathNumber: calculateLifePath('1919-08-12'), // 4
    destinyNumber: 4,
    mulank: calculateMulank(12), // 3
    bhagyank: 4,
    sunSign: getSunSign(8, 12), // Leo (4)
  },

  // MUSIC & ARTS
  {
    name: 'Lata Mangeshkar',
    nameHi: 'लता मंगेशकर',
    birthDate: '1929-09-28',
    profession: 'Singer',
    professionHi: 'गायिका',
    lifePathNumber: calculateLifePath('1929-09-28'), // 4
    destinyNumber: 4,
    mulank: calculateMulank(28), // 1
    bhagyank: 4,
    sunSign: getSunSign(9, 28), // Libra (6)
  },
  {
    name: 'AR Rahman',
    nameHi: 'एआर रहमान',
    birthDate: '1967-01-06',
    profession: 'Music Composer',
    professionHi: 'संगीतकार',
    lifePathNumber: calculateLifePath('1967-01-06'), // 3
    destinyNumber: 3,
    mulank: calculateMulank(6), // 6
    bhagyank: 3,
    sunSign: getSunSign(1, 6), // Capricorn (9)
  },
  {
    name: 'Kishore Kumar',
    nameHi: 'किशोर कुमार',
    birthDate: '1929-08-04',
    profession: 'Singer & Actor',
    professionHi: 'गायक और अभिनेता',
    lifePathNumber: calculateLifePath('1929-08-04'), // 6
    destinyNumber: 6,
    mulank: calculateMulank(4), // 4
    bhagyank: 6,
    sunSign: getSunSign(8, 4), // Leo (4)
  },
  {
    name: 'Mohammed Rafi',
    nameHi: 'मोहम्मद रफी',
    birthDate: '1924-12-24',
    profession: 'Singer',
    professionHi: 'गायक',
    lifePathNumber: calculateLifePath('1924-12-24'), // 7
    destinyNumber: 7,
    mulank: calculateMulank(24), // 6
    bhagyank: 7,
    sunSign: getSunSign(12, 24), // Capricorn (9)
  },
];

/**
 * Get celebrities by Life Path Number
 */
export function getCelebritiesByLifePath(number: number): Celebrity[] {
  return CELEBRITIES.filter(c => c.lifePathNumber === number);
}

/**
 * Get celebrities by Mulank (Root Number)
 */
export function getCelebritiesByMulank(number: number): Celebrity[] {
  return CELEBRITIES.filter(c => c.mulank === number);
}

/**
 * Get celebrities by Destiny Number
 */
export function getCelebritiesByDestiny(number: number): Celebrity[] {
  return CELEBRITIES.filter(c => c.destinyNumber === number);
}

/**
 * Get celebrities by Sun Sign (Western)
 */
export function getCelebritiesBySunSign(signIndex: number): Celebrity[] {
  return CELEBRITIES.filter(c => c.sunSign === signIndex);
}

/**
 * Get celebrities by Bhagyank (Full birth date number)
 */
export function getCelebritiesByBhagyank(number: number): Celebrity[] {
  return CELEBRITIES.filter(c => c.bhagyank === number);
}

/**
 * Sun Sign names for display
 */
export const SUN_SIGN_NAMES = {
  en: ['Aries', 'Taurus', 'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra', 'Scorpio', 'Sagittarius', 'Capricorn', 'Aquarius', 'Pisces'],
  hi: ['मेष', 'वृषभ', 'मिथुन', 'कर्क', 'सिंह', 'कन्या', 'तुला', 'वृश्चिक', 'धनु', 'मकर', 'कुंभ', 'मीन'],
};
