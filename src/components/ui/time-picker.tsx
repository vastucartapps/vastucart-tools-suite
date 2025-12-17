'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { cn } from '@/lib/utils/cn';

interface TimePickerProps {
  label?: string;
  hour: string;
  minute: string;
  onHourChange: (hour: string) => void;
  onMinuteChange: (minute: string) => void;
  locale?: 'en' | 'hi';
  required?: boolean;
  error?: string;
  className?: string;
}

interface TimeColumnProps {
  items: Array<{ value: string; label: string }>;
  selectedValue: string;
  onSelect: (value: string) => void;
  placeholder: string;
  searchPlaceholder: string;
  locale: 'en' | 'hi';
}

// Scrollable column component with type-to-filter
function TimeColumn({
  items,
  selectedValue,
  onSelect,
  placeholder,
  searchPlaceholder,
  locale,
}: TimeColumnProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const listRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLButtonElement>(null);

  // Filter items based on search query
  const filteredItems = useMemo(() => {
    if (!searchQuery.trim()) return items;
    const query = searchQuery.toLowerCase();
    return items.filter((item) =>
      item.label.toLowerCase().includes(query) ||
      item.value.includes(query)
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
    <div className="flex flex-col h-full border-2 border-gray-200 rounded-xl bg-white overflow-hidden flex-1">
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

export function TimePicker({
  label,
  hour,
  minute,
  onHourChange,
  onMinuteChange,
  locale = 'en',
  required,
  error,
  className,
}: TimePickerProps) {
  // Generate hours (00-23)
  const hours = useMemo(() => {
    return Array.from({ length: 24 }, (_, i) => ({
      value: i.toString().padStart(2, '0'),
      label: i.toString().padStart(2, '0'),
    }));
  }, []);

  // Generate minutes (00-59)
  const minutes = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      value: i.toString().padStart(2, '0'),
      label: i.toString().padStart(2, '0'),
    }));
  }, []);

  const labels = {
    hour: locale === 'en' ? 'Hour' : 'घंटा',
    minute: locale === 'en' ? 'Minute' : 'मिनट',
    searchHour: locale === 'en' ? 'Type hour...' : 'घंटा टाइप करें...',
    searchMinute: locale === 'en' ? 'Type min...' : 'मिनट टाइप करें...',
  };

  // Format time display
  const formatTimeDisplay = () => {
    const h = parseInt(hour);
    const period = h >= 12 ? (locale === 'en' ? 'PM' : 'अपराह्न') : (locale === 'en' ? 'AM' : 'पूर्वाह्न');
    const hour12 = h === 0 ? 12 : h > 12 ? h - 12 : h;
    return `${hour12}:${minute} ${period}`;
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

      {/* Two-column picker with colon */}
      <div className="flex items-stretch gap-2">
        {/* Hour column */}
        <TimeColumn
          items={hours}
          selectedValue={hour}
          onSelect={onHourChange}
          placeholder={labels.hour}
          searchPlaceholder={labels.searchHour}
          locale={locale}
        />

        {/* Colon separator */}
        <div className="flex items-center justify-center px-2">
          <span className="text-3xl font-bold text-gray-400">:</span>
        </div>

        {/* Minute column */}
        <TimeColumn
          items={minutes}
          selectedValue={minute}
          onSelect={onMinuteChange}
          placeholder={labels.minute}
          searchPlaceholder={labels.searchMinute}
          locale={locale}
        />
      </div>

      {/* Selected time display */}
      <div className="mt-3 px-4 py-2 bg-teal-50 rounded-lg border border-teal-200">
        <span className="text-sm font-medium text-teal-700">
          {locale === 'en' ? 'Selected: ' : 'चयनित: '}
          {hour}:{minute} ({formatTimeDisplay()})
        </span>
      </div>

      {/* Error message */}
      {error && (
        <p className="mt-2 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
