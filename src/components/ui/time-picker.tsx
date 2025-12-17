'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils/cn';
import { ChevronDown, Clock } from 'lucide-react';

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

interface TimeDropdownProps {
  items: Array<{ value: string; label: string }>;
  selectedValue: string;
  onSelect: (value: string) => void;
  placeholder: string;
  displayValue: string;
  searchPlaceholder: string;
  locale: 'en' | 'hi';
}

// Dropdown component - opens ONLY when clicked, uses portal to escape overflow
function TimeDropdown({
  items,
  selectedValue,
  onSelect,
  placeholder,
  displayValue,
  searchPlaceholder,
  locale,
}: TimeDropdownProps) {
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
      item.value.includes(query)
    );
  }, [items, searchQuery]);

  // Update dropdown position when opened
  useEffect(() => {
    if (isOpen && triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropdownPosition({
        top: rect.bottom + 4,
        left: rect.left,
        width: rect.width,
      });
    }
  }, [isOpen]);

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

  const handleSelect = (value: string) => {
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
            selectedValue ? 'text-gray-800' : 'text-gray-400'
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

  // Format time display for 12-hour format
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
        <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-2">
          <Clock className="w-4 h-4 text-deepteal-500" />
          {label}
          {required && <span className="text-red-500">*</span>}
        </label>
      )}

      {/* Two dropdown triggers in a row with colon separator */}
      <div className="flex items-center gap-2">
        <TimeDropdown
          items={hours}
          selectedValue={hour}
          onSelect={onHourChange}
          placeholder={labels.hour}
          displayValue={hour}
          searchPlaceholder={labels.searchHour}
          locale={locale}
        />

        {/* Colon separator */}
        <span className="text-2xl font-bold text-gray-400">:</span>

        <TimeDropdown
          items={minutes}
          selectedValue={minute}
          onSelect={onMinuteChange}
          placeholder={labels.minute}
          displayValue={minute}
          searchPlaceholder={labels.searchMinute}
          locale={locale}
        />
      </div>

      {/* Selected time display */}
      <div className="mt-3 px-4 py-2 bg-deepteal-50 rounded-lg border border-deepteal-200 flex items-center gap-2">
        <Clock className="w-4 h-4 text-deepteal-600" />
        <span className="text-sm font-medium text-deepteal-700">
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
