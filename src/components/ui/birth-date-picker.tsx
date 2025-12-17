'use client';

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { cn } from '@/lib/utils/cn';

// Month names in both languages
const MONTH_NAMES = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  hi: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'],
};

const MONTH_NAMES_SHORT = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  hi: ['जन', 'फर', 'मार्च', 'अप्रै', 'मई', 'जून', 'जुला', 'अग', 'सित', 'अक्टू', 'नव', 'दिस'],
};

interface BirthDatePickerProps {
  label?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  minYear?: number;
  maxYear?: number;
  locale?: 'en' | 'hi';
  required?: boolean;
  error?: string;
  className?: string;
}

interface ScrollColumnProps {
  items: Array<{ value: number | string; label: string }>;
  selectedValue: number | string | null;
  onSelect: (value: number | string) => void;
  placeholder: string;
  searchPlaceholder: string;
  locale: 'en' | 'hi';
}

// Scrollable column component with type-to-filter
function ScrollColumn({
  items,
  selectedValue,
  onSelect,
  placeholder,
  searchPlaceholder,
  locale,
}: ScrollColumnProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const listRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  // Filter items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return items;
    const query = searchQuery.toLowerCase();
    return items.filter((item) =>
      item.label.toLowerCase().includes(query) ||
      item.value.toString().includes(query)
    );
  }, [items, searchQuery]);

  // Scroll to selected item on mount and when selection changes
  useEffect(() => {
    if (selectedRef.current && listRef.current) {
      const container = listRef.current;
      const selected = selectedRef.current;
      const containerHeight = container.clientHeight;
      const selectedTop = selected.offsetTop;
      const selectedHeight = selected.clientHeight;

      // Center the selected item
      container.scrollTop = selectedTop - (containerHeight / 2) + (selectedHeight / 2);
    }
  }, [selectedValue]);

  // Auto-scroll to first match when typing
  useEffect(() => {
    if (searchQuery && filteredItems.length > 0 && listRef.current) {
      listRef.current.scrollTop = 0;
    }
  }, [searchQuery, filteredItems]);

  return (
    <div className="flex flex-col h-full border-2 border-gray-200 rounded-xl bg-white overflow-hidden">
      {/* Header with label */}
      <div className="px-3 py-2 bg-gradient-to-r from-teal-50 to-teal-100 border-b border-gray-200">
        <span className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
          {placeholder}
        </span>
      </div>

      {/* Search input */}
      <div className="px-2 py-2 border-b border-gray-100">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={searchPlaceholder}
          className={cn(
            'w-full px-3 py-2 text-sm rounded-lg',
            'border border-gray-200 bg-gray-50',
            'focus:outline-none focus:ring-2 focus:ring-teal-200 focus:border-teal-400',
            'placeholder:text-gray-400 transition-all'
          )}
        />
      </div>

      {/* Scrollable list */}
      <div
        ref={listRef}
        className="flex-1 overflow-y-auto min-h-[180px] max-h-[220px] py-1 scroll-smooth"
        style={{ scrollbarWidth: 'thin' }}
      >
        {filteredItems.length === 0 ? (
          <div className="px-3 py-4 text-center text-gray-400 text-sm">
            {locale === 'en' ? 'No matches' : 'कोई मिलान नहीं'}
          </div>
        ) : (
          filteredItems.map((item) => {
            const isSelected = selectedValue === item.value;
            return (
              <button
                key={item.value}
                ref={isSelected ? selectedRef : null}
                type="button"
                onClick={() => {
                  onSelect(item.value);
                  setSearchQuery('');
                }}
                className={cn(
                  'w-full px-3 py-2.5 text-sm font-medium transition-all duration-150',
                  'text-center cursor-pointer',
                  'hover:bg-teal-50',
                  isSelected
                    ? 'bg-gradient-to-r from-teal-500 to-teal-600 text-white shadow-sm'
                    : 'text-gray-700'
                )}
              >
                {item.label}
              </button>
            );
          })
        )}
      </div>
    </div>
  );
}

export function BirthDatePicker({
  label,
  value,
  onChange,
  minYear = 1900,
  maxYear = new Date().getFullYear(),
  locale = 'en',
  required,
  error,
  className,
}: BirthDatePickerProps) {
  // Extract day, month, year from value
  const selectedDay = value ? value.getDate() : null;
  const selectedMonth = value ? value.getMonth() : null;
  const selectedYear = value ? value.getFullYear() : null;

  // Generate days (1-31)
  const days = useMemo(() => {
    const daysInMonth = selectedMonth !== null && selectedYear !== null
      ? new Date(selectedYear, selectedMonth + 1, 0).getDate()
      : 31;
    return Array.from({ length: daysInMonth }, (_, i) => ({
      value: i + 1,
      label: (i + 1).toString().padStart(2, '0'),
    }));
  }, [selectedMonth, selectedYear]);

  // Generate months
  const months = useMemo(() => {
    return MONTH_NAMES[locale].map((name, index) => ({
      value: index,
      label: name,
    }));
  }, [locale]);

  // Generate years (newest first)
  const years = useMemo(() => {
    const yearList: Array<{ value: number; label: string }> = [];
    for (let year = maxYear; year >= minYear; year--) {
      yearList.push({ value: year, label: year.toString() });
    }
    return yearList;
  }, [minYear, maxYear]);

  // Handle selection changes
  const handleDaySelect = useCallback((day: number | string) => {
    const newDay = typeof day === 'string' ? parseInt(day) : day;
    const currentMonth = selectedMonth ?? 0;
    const currentYear = selectedYear ?? 2000;
    // Validate day for the month
    const maxDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    const validDay = Math.min(newDay, maxDay);
    onChange(new Date(currentYear, currentMonth, validDay));
  }, [selectedMonth, selectedYear, onChange]);

  const handleMonthSelect = useCallback((month: number | string) => {
    const newMonth = typeof month === 'string' ? parseInt(month) : month;
    const currentDay = selectedDay ?? 1;
    const currentYear = selectedYear ?? 2000;
    // Validate day for the new month
    const maxDay = new Date(currentYear, newMonth + 1, 0).getDate();
    const validDay = Math.min(currentDay, maxDay);
    onChange(new Date(currentYear, newMonth, validDay));
  }, [selectedDay, selectedYear, onChange]);

  const handleYearSelect = useCallback((year: number | string) => {
    const newYear = typeof year === 'string' ? parseInt(year) : year;
    const currentDay = selectedDay ?? 1;
    const currentMonth = selectedMonth ?? 0;
    // Validate day for the month in the new year (for Feb in leap years)
    const maxDay = new Date(newYear, currentMonth + 1, 0).getDate();
    const validDay = Math.min(currentDay, maxDay);
    onChange(new Date(newYear, currentMonth, validDay));
  }, [selectedDay, selectedMonth, onChange]);

  const labels = {
    day: locale === 'en' ? 'Day' : 'दिन',
    month: locale === 'en' ? 'Month' : 'महीना',
    year: locale === 'en' ? 'Year' : 'वर्ष',
    searchDay: locale === 'en' ? 'Type day...' : 'दिन टाइप करें...',
    searchMonth: locale === 'en' ? 'Type month...' : 'महीना टाइप करें...',
    searchYear: locale === 'en' ? 'Type year...' : 'वर्ष टाइप करें...',
  };

  return (
    <div className={cn('w-full', className)}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Three-column picker */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Day column */}
        <ScrollColumn
          items={days}
          selectedValue={selectedDay}
          onSelect={handleDaySelect}
          placeholder={labels.day}
          searchPlaceholder={labels.searchDay}
          locale={locale}
        />

        {/* Month column */}
        <ScrollColumn
          items={months}
          selectedValue={selectedMonth}
          onSelect={handleMonthSelect}
          placeholder={labels.month}
          searchPlaceholder={labels.searchMonth}
          locale={locale}
        />

        {/* Year column */}
        <ScrollColumn
          items={years}
          selectedValue={selectedYear}
          onSelect={handleYearSelect}
          placeholder={labels.year}
          searchPlaceholder={labels.searchYear}
          locale={locale}
        />
      </div>

      {/* Selected date display */}
      {value && (
        <div className="mt-3 px-4 py-2 bg-teal-50 rounded-lg border border-teal-200">
          <span className="text-sm font-medium text-teal-700">
            {locale === 'en' ? 'Selected: ' : 'चयनित: '}
            {value.getDate()} {MONTH_NAMES_SHORT[locale][value.getMonth()]} {value.getFullYear()}
          </span>
        </div>
      )}

      {/* Error message */}
      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
