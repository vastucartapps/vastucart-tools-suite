/**
 * Reduces a number to a single digit (unless it's a master number)
 * Master numbers: 11, 22, 33 are not reduced
 */
export function reduceToSingleDigit(num: number): {
  steps: number[];
  finalNumber: number;
  isMasterNumber: boolean;
} {
  const steps: number[] = [num];
  let current = num;

  while (current > 9) {
    // Check for master numbers before reducing
    if (current === 11 || current === 22 || current === 33) {
      return {
        steps,
        finalNumber: current,
        isMasterNumber: true,
      };
    }

    // Sum all digits
    current = sumDigits(current);
    steps.push(current);
  }

  return {
    steps,
    finalNumber: current,
    isMasterNumber: false,
  };
}

/**
 * Sums all digits in a number
 * Example: 1990 -> 1+9+9+0 = 19
 */
export function sumDigits(num: number): number {
  return Math.abs(num)
    .toString()
    .split('')
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

/**
 * Extracts all digits from a date
 * Example: 15/08/1990 -> [1, 5, 0, 8, 1, 9, 9, 0]
 */
export function getDateDigits(date: Date): number[] {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const dateString = `${day}${month}${year}`;
  return dateString.split('').map(d => parseInt(d, 10));
}

/**
 * Counts occurrences of each digit (1-9) in an array
 */
export function countDigitOccurrences(digits: number[]): Record<number, number> {
  const counts: Record<number, number> = {};

  for (let i = 1; i <= 9; i++) {
    counts[i] = 0;
  }

  digits.forEach(digit => {
    if (digit >= 1 && digit <= 9) {
      counts[digit]++;
    }
  });

  return counts;
}

/**
 * Validates if a number is a valid day of month
 */
export function isValidDay(day: number): boolean {
  return Number.isInteger(day) && day >= 1 && day <= 31;
}

/**
 * Validates if a number is a valid month
 */
export function isValidMonth(month: number): boolean {
  return Number.isInteger(month) && month >= 1 && month <= 12;
}

/**
 * Validates if a number is a valid year
 */
export function isValidYear(year: number): boolean {
  const currentYear = new Date().getFullYear();
  return Number.isInteger(year) && year >= 1900 && year <= currentYear;
}

/**
 * Normalizes a degree to 0-360 range
 */
export function normalizeDegree(degree: number): number {
  let normalized = degree % 360;
  if (normalized < 0) normalized += 360;
  return normalized;
}

/**
 * Formats a number with leading zeros
 */
export function padNumber(num: number, length: number = 2): string {
  return num.toString().padStart(length, '0');
}
