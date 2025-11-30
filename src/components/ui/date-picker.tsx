'use client';

import { useState, useRef, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Calendar } from 'lucide-react';
import { cn } from '@/lib/utils/cn';

interface DatePickerProps {
  label?: string;
  value: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  minYear?: number;
  maxYear?: number;
  locale?: 'en' | 'hi';
  required?: boolean;
  error?: string;
  className?: string;
}

// Month names in both languages
const MONTH_NAMES = {
  en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  hi: ['जनवरी', 'फ़रवरी', 'मार्च', 'अप्रैल', 'मई', 'जून', 'जुलाई', 'अगस्त', 'सितंबर', 'अक्टूबर', 'नवंबर', 'दिसंबर'],
};

const MONTH_NAMES_SHORT = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  hi: ['जन', 'फर', 'मार्च', 'अप्रै', 'मई', 'जून', 'जुला', 'अग', 'सित', 'अक्टू', 'नव', 'दिस'],
};

const DAY_NAMES = {
  en: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  hi: ['र', 'सो', 'मं', 'बु', 'गु', 'शु', 'श'],
};

export function DatePicker({
  label,
  value,
  onChange,
  placeholder,
  minYear = 1900,
  maxYear = new Date().getFullYear(),
  locale = 'en',
  required,
  error,
  className,
}: DatePickerProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [viewDate, setViewDate] = useState(() => value || new Date(2000, 0, 1));
  const [viewMode, setViewMode] = useState<'days' | 'months' | 'years'>('days');
  const containerRef = useRef<HTMLDivElement>(null);
  const inputId = label?.toLowerCase().replace(/\s+/g, '-') || 'date-picker';

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setViewMode('days');
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  // Close on escape
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setViewMode('days');
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen]);

  // Get days in month
  const getDaysInMonth = useCallback((year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  }, []);

  // Get first day of month (0 = Sunday)
  const getFirstDayOfMonth = useCallback((year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  }, []);

  // Generate calendar days
  const generateCalendarDays = useCallback(() => {
    const year = viewDate.getFullYear();
    const month = viewDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDay = getFirstDayOfMonth(year, month);
    const daysInPrevMonth = getDaysInMonth(year, month - 1);

    const days: Array<{ day: number; isCurrentMonth: boolean; date: Date }> = [];

    // Previous month days
    for (let i = firstDay - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      days.push({
        day,
        isCurrentMonth: false,
        date: new Date(year, month - 1, day),
      });
    }

    // Current month days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        date: new Date(year, month, day),
      });
    }

    // Next month days (fill to 42 cells = 6 rows)
    const remaining = 42 - days.length;
    for (let day = 1; day <= remaining; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        date: new Date(year, month + 1, day),
      });
    }

    return days;
  }, [viewDate, getDaysInMonth, getFirstDayOfMonth]);

  // Generate years for year picker
  const generateYears = useCallback(() => {
    const years: number[] = [];
    for (let year = maxYear; year >= minYear; year--) {
      years.push(year);
    }
    return years;
  }, [minYear, maxYear]);

  // Handle day selection
  const handleDaySelect = (date: Date) => {
    onChange(date);
    setIsOpen(false);
    setViewMode('days');
  };

  // Handle month selection
  const handleMonthSelect = (month: number) => {
    setViewDate(new Date(viewDate.getFullYear(), month, 1));
    setViewMode('days');
  };

  // Handle year selection
  const handleYearSelect = (year: number) => {
    setViewDate(new Date(year, viewDate.getMonth(), 1));
    setViewMode('months');
  };

  // Navigate months
  const navigateMonth = (delta: number) => {
    setViewDate(new Date(viewDate.getFullYear(), viewDate.getMonth() + delta, 1));
  };

  // Navigate years
  const navigateYear = (delta: number) => {
    setViewDate(new Date(viewDate.getFullYear() + delta, viewDate.getMonth(), 1));
  };

  // Format display value
  const formatDisplayValue = () => {
    if (!value) return '';
    const day = value.getDate();
    const month = MONTH_NAMES_SHORT[locale][value.getMonth()];
    const year = value.getFullYear();
    return `${day} ${month} ${year}`;
  };

  // Check if date is selected
  const isSelected = (date: Date) => {
    if (!value) return false;
    return (
      date.getDate() === value.getDate() &&
      date.getMonth() === value.getMonth() &&
      date.getFullYear() === value.getFullYear()
    );
  };

  // Check if date is today
  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  return (
    <div ref={containerRef} className={cn('relative w-full', className)}>
      {/* Label */}
      {label && (
        <label
          htmlFor={inputId}
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Input Trigger */}
      <button
        type="button"
        id={inputId}
        onClick={() => {
          setIsOpen(!isOpen);
          if (!isOpen && value) {
            setViewDate(value);
          }
        }}
        className={cn(
          'w-full px-4 py-3 bg-white border-2 rounded-xl transition-all duration-200',
          'flex items-center justify-between gap-2',
          'focus:outline-none focus:ring-2 focus:ring-teal-200',
          'text-left',
          error
            ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
            : isOpen
            ? 'border-teal-500 ring-2 ring-teal-200'
            : 'border-gray-200 hover:border-gray-300 focus:border-teal-500',
          !value && 'text-gray-400'
        )}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
      >
        <span>{value ? formatDisplayValue() : placeholder || (locale === 'en' ? 'Select date' : 'तिथि चुनें')}</span>
        <Calendar className="w-5 h-5 text-gray-400 flex-shrink-0" />
      </button>

      {/* Error Message */}
      {error && (
        <p className="mt-1.5 text-sm text-red-600" role="alert">
          {error}
        </p>
      )}

      {/* Calendar Popup */}
      {isOpen && (
        <div
          className={cn(
            'absolute z-50 mt-2 p-4 bg-white rounded-2xl shadow-xl border border-gray-100',
            'animate-in fade-in-0 zoom-in-95 duration-200',
            'w-[320px]'
          )}
          role="dialog"
          aria-label={locale === 'en' ? 'Date picker' : 'तिथि चयनकर्ता'}
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              type="button"
              onClick={() => viewMode === 'days' ? navigateMonth(-1) : navigateYear(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={locale === 'en' ? 'Previous' : 'पिछला'}
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>

            <button
              type="button"
              onClick={() => {
                if (viewMode === 'days') setViewMode('months');
                else if (viewMode === 'months') setViewMode('years');
              }}
              className="px-3 py-1.5 font-semibold text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {viewMode === 'years' ? (
                `${minYear} - ${maxYear}`
              ) : viewMode === 'months' ? (
                viewDate.getFullYear()
              ) : (
                `${MONTH_NAMES[locale][viewDate.getMonth()]} ${viewDate.getFullYear()}`
              )}
            </button>

            <button
              type="button"
              onClick={() => viewMode === 'days' ? navigateMonth(1) : navigateYear(1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label={locale === 'en' ? 'Next' : 'अगला'}
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Days View */}
          {viewMode === 'days' && (
            <>
              {/* Day names header */}
              <div className="grid grid-cols-7 gap-1 mb-2">
                {DAY_NAMES[locale].map((day) => (
                  <div
                    key={day}
                    className="text-center text-xs font-medium text-gray-500 py-1"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar grid */}
              <div className="grid grid-cols-7 gap-1">
                {generateCalendarDays().map((item, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => handleDaySelect(item.date)}
                    disabled={item.date.getFullYear() < minYear || item.date.getFullYear() > maxYear}
                    className={cn(
                      'w-10 h-10 rounded-lg text-sm font-medium transition-all duration-150',
                      'hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-300',
                      item.isCurrentMonth
                        ? 'text-gray-800'
                        : 'text-gray-300',
                      isSelected(item.date) &&
                        'bg-gradient-to-br from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700 shadow-md',
                      isToday(item.date) && !isSelected(item.date) &&
                        'ring-2 ring-teal-300 bg-teal-50',
                      (item.date.getFullYear() < minYear || item.date.getFullYear() > maxYear) &&
                        'opacity-30 cursor-not-allowed hover:bg-transparent'
                    )}
                  >
                    {item.day}
                  </button>
                ))}
              </div>
            </>
          )}

          {/* Months View */}
          {viewMode === 'months' && (
            <div className="grid grid-cols-3 gap-2">
              {MONTH_NAMES_SHORT[locale].map((month, index) => (
                <button
                  key={month}
                  type="button"
                  onClick={() => handleMonthSelect(index)}
                  className={cn(
                    'px-3 py-3 rounded-lg text-sm font-medium transition-all duration-150',
                    'hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-300',
                    viewDate.getMonth() === index &&
                      'bg-gradient-to-br from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700'
                  )}
                >
                  {month}
                </button>
              ))}
            </div>
          )}

          {/* Years View */}
          {viewMode === 'years' && (
            <div className="h-[280px] overflow-y-auto scrollbar-thin">
              <div className="grid grid-cols-4 gap-2">
                {generateYears().map((year) => (
                  <button
                    key={year}
                    type="button"
                    onClick={() => handleYearSelect(year)}
                    className={cn(
                      'px-2 py-2 rounded-lg text-sm font-medium transition-all duration-150',
                      'hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-300',
                      viewDate.getFullYear() === year &&
                        'bg-gradient-to-br from-teal-500 to-teal-600 text-white hover:from-teal-600 hover:to-teal-700',
                      value?.getFullYear() === year && viewDate.getFullYear() !== year &&
                        'ring-2 ring-teal-300'
                    )}
                  >
                    {year}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick Actions */}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={() => {
                onChange(null);
                setIsOpen(false);
              }}
              className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              {locale === 'en' ? 'Clear' : 'हटाएं'}
            </button>
            <button
              type="button"
              onClick={() => {
                const today = new Date();
                if (today.getFullYear() <= maxYear && today.getFullYear() >= minYear) {
                  handleDaySelect(today);
                }
              }}
              className="text-sm font-medium text-teal-600 hover:text-teal-700 transition-colors"
            >
              {locale === 'en' ? 'Today' : 'आज'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
