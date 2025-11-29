import { z } from 'zod';

/**
 * Schema for birth date input
 */
export const birthDateSchema = z.object({
  day: z
    .number()
    .int()
    .min(1, 'Day must be at least 1')
    .max(31, 'Day cannot exceed 31'),
  month: z
    .number()
    .int()
    .min(1, 'Month must be at least 1')
    .max(12, 'Month cannot exceed 12'),
  year: z
    .number()
    .int()
    .min(1900, 'Year must be at least 1900')
    .max(new Date().getFullYear(), 'Year cannot be in the future'),
});

/**
 * Schema for name input
 */
export const nameSchema = z.object({
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name cannot exceed 100 characters')
    .regex(/^[a-zA-Z\s]+$/, 'Name can only contain letters and spaces'),
});

/**
 * Schema for full birth details (astrology)
 */
export const birthDetailsSchema = z.object({
  date: z.date(),
  time: z.string().regex(/^([01]\d|2[0-3]):([0-5]\d)$/, 'Invalid time format (HH:MM)'),
  place: z.string().min(1, 'Place is required'),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  timezone: z.string(),
});

/**
 * Schema for house number input
 */
export const houseNumberSchema = z.object({
  number: z
    .string()
    .min(1, 'House number is required')
    .max(20, 'House number cannot exceed 20 characters')
    .regex(/^[a-zA-Z0-9\-\/]+$/, 'Invalid house number format'),
});

/**
 * Validates birth date is a real date
 */
export function isValidDate(day: number, month: number, year: number): boolean {
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

/**
 * Type for validation errors
 */
export interface ValidationError {
  field: string;
  message: string;
}

/**
 * Validates form data against a Zod schema
 */
export function validateForm<T>(
  schema: z.ZodSchema<T>,
  data: unknown
): { success: true; data: T } | { success: false; errors: ValidationError[] } {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: ValidationError[] = result.error.errors.map(err => ({
    field: err.path.join('.'),
    message: err.message,
  }));

  return { success: false, errors };
}
