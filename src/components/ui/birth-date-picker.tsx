'use client';

import { useState, useRef, useEffect, useCallback, useMemo, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils/cn';
import { ChevronDown, Calendar } from 'lucide-react';

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

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

interface DropdownSelectProps {
  items: Array<{ value: number | string; label: string }>;
  selectedValue: number | string | null;
  onSelect: (value: number | string) => void;
  placeholder: string;
  displayValue: string;
  searchPlaceholder: string;
  locale: 'en' | 'hi';
}

// Dropdown select component - opens ONLY when clicked, uses portal to escape overflow
function DropdownSelect({
  items,
  selectedValue,
  onSelect,
  placeholder,
  displayValue,
  searchPlaceholder,
  locale,
}: DropdownSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
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

  // Calculate dropdown position with viewport boundary checking
  const calculatePosition = useCallback(() => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const dropdownHeight = 280; // Approximate max height of dropdown
    const viewportHeight = window.innerHeight;
    const padding = 8;

    // Check if dropdown would overflow below viewport
    const spaceBelow = viewportHeight - rect.bottom - padding;
    const spaceAbove = rect.top - padding;

    let top: number;
    if (spaceBelow >= dropdownHeight || spaceBelow >= spaceAbove) {
      // Position below trigger
      top = rect.bottom + 4;
    } else {
      // Position above trigger
      top = rect.top - dropdownHeight - 4;
    }

    // Ensure left position stays within viewport
    let left = rect.left;
    const dropdownWidth = rect.width;
    if (left + dropdownWidth > window.innerWidth - padding) {
      left = window.innerWidth - dropdownWidth - padding;
    }
    if (left < padding) {
      left = padding;
    }

    setDropdownPosition({
      top: Math.max(padding, top),
      left,
      width: rect.width,
    });
  }, []);

  // Update dropdown position when opened and on scroll/resize
  useIsomorphicLayoutEffect(() => {
    if (!isOpen) return;

    calculatePosition();

    // Recalculate on scroll and resize
    const handleScrollResize = () => {
      requestAnimationFrame(calculatePosition);
    };

    window.addEventListener('scroll', handleScrollResize, true);
    window.addEventListener('resize', handleScrollResize);

    return () => {
      window.removeEventListener('scroll', handleScrollResize, true);
      window.removeEventListener('resize', handleScrollResize);
    };
  }, [isOpen, calculatePosition]);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        containerRef.current && !containerRef.current.contains(target) &&
        dropdownRef.current && !dropdownRef.current.contains(target)
      ) {
        setIsOpen(false);
        setSearchQuery('');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Focus search input when dropdown opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus({ preventScroll: true });
    }
  }, [isOpen]);

  // Scroll to selected item when dropdown opens
  useEffect(() => {
    if (isOpen && selectedRef.current && listRef.current) {
      const container = listRef.current;
      const selected = selectedRef.current;
      const containerHeight = container.clientHeight;
      const selectedTop = selected.offsetTop;
      const selectedHeight = selected.clientHeight;
      container.scrollTop = selectedTop - (containerHeight / 2) + (selectedHeight / 2);
    }
  }, [isOpen, selectedValue]);

  const handleSelect = (value: number | string) => {
    onSelect(value);
    setIsOpen(false);
    setSearchQuery('');
  };

  // Dropdown content rendered via portal
  const dropdownContent = isOpen && typeof document !== 'undefined' ? createPortal(
    <div
      ref={dropdownRef}
      style={{
        position: 'fixed',
        top: dropdownPosition.top,
        left: dropdownPosition.left,
        width: dropdownPosition.width,
        zIndex: 9999,
      }}
      className={cn(
        'bg-white rounded-xl shadow-xl border-2 border-gray-100',
        'animate-in fade-in-0 zoom-in-95 duration-150'
      )}
    >
      {/* Search input */}
      <div className="p-2 border-b border-gray-100">
        <input
          ref={inputRef}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder={searchPlaceholder}
          className={cn(
            'w-full px-3 py-2 text-sm rounded-lg',
            'border border-gray-200 bg-gray-50',
            'focus:outline-none focus:ring-2 focus:ring-deepteal-200 focus:border-deepteal-400',
            'placeholder:text-gray-400'
          )}
        />
      </div>

      {/* Options list */}
      <div
        ref={listRef}
        className="max-h-[200px] overflow-y-auto py-1"
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
                onClick={() => handleSelect(item.value)}
                className={cn(
                  'w-full px-3 py-2.5 text-sm font-medium transition-all duration-150',
                  'text-left cursor-pointer',
                  'hover:bg-deepteal-50 hover:text-deepteal-700',
                  isSelected
                    ? 'bg-deepteal-500 text-white hover:bg-deepteal-600 hover:text-white'
                    : 'text-gray-700'
                )}
              >
                {item.label}
              </button>
            );
          })
        )}
      </div>
    </div>,
    document.body
  ) : null;

  return (
    <div ref={containerRef} className="relative flex-1">
      {/* Trigger button - compact, shows selected value */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full px-3 py-3 text-left bg-white border-2 rounded-xl',
          'flex items-center justify-between gap-2',
          'transition-all duration-200',
          'hover:border-deepteal-400 hover:bg-deepteal-50',
          isOpen
            ? 'border-deepteal-500 ring-2 ring-deepteal-200'
            : 'border-gray-200'
        )}
      >
        <div className="flex flex-col">
          <span className="text-[10px] font-semibold text-deepteal-600 uppercase tracking-wide">
            {placeholder}
          </span>
          <span className={cn(
            'text-sm font-medium',
            selectedValue !== null ? 'text-gray-800' : 'text-gray-400'
          )}>
            {displayValue || '—'}
          </span>
        </div>
        <ChevronDown className={cn(
          'w-4 h-4 text-gray-400 transition-transform duration-200',
          isOpen && 'rotate-180 text-deepteal-500'
        )} />
      </button>

      {/* Dropdown rendered via portal */}
      {dropdownContent}
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
    const maxDay = new Date(currentYear, currentMonth + 1, 0).getDate();
    const validDay = Math.min(newDay, maxDay);
    onChange(new Date(currentYear, currentMonth, validDay));
  }, [selectedMonth, selectedYear, onChange]);

  const handleMonthSelect = useCallback((month: number | string) => {
    const newMonth = typeof month === 'string' ? parseInt(month) : month;
    const currentDay = selectedDay ?? 1;
    const currentYear = selectedYear ?? 2000;
    const maxDay = new Date(currentYear, newMonth + 1, 0).getDate();
    const validDay = Math.min(currentDay, maxDay);
    onChange(new Date(currentYear, newMonth, validDay));
  }, [selectedDay, selectedYear, onChange]);

  const handleYearSelect = useCallback((year: number | string) => {
    const newYear = typeof year === 'string' ? parseInt(year) : year;
    const currentDay = selectedDay ?? 1;
    const currentMonth = selectedMonth ?? 0;
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

  // Display values
  const dayDisplay = selectedDay !== null ? selectedDay.toString().padStart(2, '0') : '';
  const monthDisplay = selectedMonth !== null ? MONTH_NAMES_SHORT[locale][selectedMonth] : '';
  const yearDisplay = selectedYear !== null ? selectedYear.toString() : '';

  return (
    <div className={cn('w-full', className)}>
      {/* Label */}
      {label && (
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
          <Calendar className="w-4 h-4 text-deepteal-500" />
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Three dropdown triggers in a row */}
      <div className="flex gap-2">
        <DropdownSelect
          items={days}
          selectedValue={selectedDay}
          onSelect={handleDaySelect}
          placeholder={labels.day}
          displayValue={dayDisplay}
          searchPlaceholder={labels.searchDay}
          locale={locale}
        />

        <DropdownSelect
          items={months}
          selectedValue={selectedMonth}
          onSelect={handleMonthSelect}
          placeholder={labels.month}
          displayValue={monthDisplay}
          searchPlaceholder={labels.searchMonth}
          locale={locale}
        />

        <DropdownSelect
          items={years}
          selectedValue={selectedYear}
          onSelect={handleYearSelect}
          placeholder={labels.year}
          displayValue={yearDisplay}
          searchPlaceholder={labels.searchYear}
          locale={locale}
        />
      </div>

      {/* Selected date display */}
      {value && (
        <div className="mt-3 px-4 py-2 bg-deepteal-50 rounded-lg border border-deepteal-200 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-deepteal-600" />
          <span className="text-sm font-medium text-deepteal-700">
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
