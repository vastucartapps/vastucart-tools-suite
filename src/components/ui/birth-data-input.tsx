'use client';

import { BirthDatePicker } from './birth-date-picker';
import { TimePicker } from './time-picker';
import { PlacePicker } from './place-picker';
import { cn } from '@/lib/utils/cn';
import { type Place } from '@/lib/astrology/data/places-india';

export interface BirthData {
  date: Date | null;
  hour: string;
  minute: string;
  place: Place | null;
}

interface BirthDataInputProps {
  value: BirthData;
  onChange: (data: BirthData) => void;
  includeTime?: boolean;
  includePlace?: boolean;
  locale?: 'en' | 'hi';
  minYear?: number;
  maxYear?: number;
  showManualCoordinates?: boolean;
  labels?: {
    dateLabel?: string;
    timeLabel?: string;
    placeLabel?: string;
  };
  errors?: {
    date?: string;
    time?: string;
    place?: string;
  };
  required?: {
    date?: boolean;
    time?: boolean;
    place?: boolean;
  };
  className?: string;
}

export function BirthDataInput({
  value,
  onChange,
  includeTime = false,
  includePlace = false,
  locale = 'en',
  minYear = 1900,
  maxYear = new Date().getFullYear(),
  showManualCoordinates = false,
  labels = {},
  errors = {},
  required = {},
  className,
}: BirthDataInputProps) {
  const defaultLabels = {
    dateLabel: locale === 'en' ? 'Date of Birth' : 'जन्म तिथि',
    timeLabel: locale === 'en' ? 'Time of Birth' : 'जन्म समय',
    placeLabel: locale === 'en' ? 'Place of Birth' : 'जन्म स्थान',
  };

  const mergedLabels = { ...defaultLabels, ...labels };

  // Update handlers
  const handleDateChange = (date: Date | null) => {
    onChange({ ...value, date });
  };

  const handleHourChange = (hour: string) => {
    onChange({ ...value, hour });
  };

  const handleMinuteChange = (minute: string) => {
    onChange({ ...value, minute });
  };

  const handlePlaceChange = (place: Place | null) => {
    onChange({ ...value, place });
  };

  return (
    <div className={cn('space-y-6', className)}>
      {/* Date of Birth - Always shown */}
      <BirthDatePicker
        label={mergedLabels.dateLabel}
        value={value.date}
        onChange={handleDateChange}
        minYear={minYear}
        maxYear={maxYear}
        locale={locale}
        required={required.date}
        error={errors.date}
      />

      {/* Time of Birth - Conditional */}
      {includeTime && (
        <TimePicker
          label={mergedLabels.timeLabel}
          hour={value.hour}
          minute={value.minute}
          onHourChange={handleHourChange}
          onMinuteChange={handleMinuteChange}
          locale={locale}
          required={required.time}
          error={errors.time}
        />
      )}

      {/* Place of Birth - Conditional */}
      {includePlace && (
        <PlacePicker
          label={mergedLabels.placeLabel}
          value={value.place}
          onChange={handlePlaceChange}
          locale={locale}
          required={required.place}
          error={errors.place}
          showManualInput={showManualCoordinates}
        />
      )}
    </div>
  );
}

// Export individual components for standalone use
export { BirthDatePicker } from './birth-date-picker';
export { TimePicker } from './time-picker';
export { PlacePicker } from './place-picker';

// Export Place type for convenience
export type { Place } from '@/lib/astrology/data/places-india';
