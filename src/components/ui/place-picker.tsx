'use client';

import { useState, useRef, useEffect, useMemo, useCallback, useLayoutEffect } from 'react';
import { createPortal } from 'react-dom';
import { cn } from '@/lib/utils/cn';
import { MapPin, Search, ChevronDown, X } from 'lucide-react';
import { searchPlaces, type Place } from '@/lib/astrology/data/places-india';

// Use useLayoutEffect on client, useEffect on server
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface PlacePickerProps {
  label?: string;
  value: Place | null;
  onChange: (place: Place | null) => void;
  locale?: 'en' | 'hi';
  required?: boolean;
  error?: string;
  showManualInput?: boolean;
  className?: string;
}

export function PlacePicker({
  label,
  value,
  onChange,
  locale = 'en',
  required,
  error,
  showManualInput = false,
  className,
}: PlacePickerProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [showManual, setShowManual] = useState(false);
  const [manualLat, setManualLat] = useState('');
  const [manualLng, setManualLng] = useState('');
  const [manualTz, setManualTz] = useState('5.5');
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0, width: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Search results
  const searchResults = useMemo(() => {
    if (!query || query.length < 2) return [];
    return searchPlaces(query, 10);
  }, [query]);

  // Calculate dropdown position with viewport boundary checking
  const calculatePosition = useCallback(() => {
    if (!inputRef.current) return;

    const rect = inputRef.current.getBoundingClientRect();
    const dropdownHeight = 350; // Approximate max height of dropdown
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
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Handle place selection
  const handleSelect = useCallback((place: Place) => {
    onChange(place);
    setQuery('');
    setIsOpen(false);
  }, [onChange]);

  // Handle manual coordinates submission
  const handleManualSubmit = useCallback(() => {
    const lat = parseFloat(manualLat);
    const lng = parseFloat(manualLng);
    const tz = parseFloat(manualTz);

    if (!isNaN(lat) && !isNaN(lng) && !isNaN(tz)) {
      const manualPlace: Place = {
        name: locale === 'en' ? 'Custom Location' : 'कस्टम स्थान',
        state: locale === 'en' ? 'Manual Entry' : 'मैनुअल',
        lat,
        lng,
        tz,
      };
      onChange(manualPlace);
      setShowManual(false);
    }
  }, [manualLat, manualLng, manualTz, locale, onChange]);

  // Clear selection
  const handleClear = useCallback(() => {
    onChange(null);
    setQuery('');
    setManualLat('');
    setManualLng('');
  }, [onChange]);

  const labels = {
    search: locale === 'en' ? 'Search city or town...' : 'शहर या कस्बा खोजें...',
    noResults: locale === 'en' ? 'No places found' : 'कोई स्थान नहीं मिला',
    typeToSearch: locale === 'en' ? 'Type to search places' : 'स्थान खोजने के लिए टाइप करें',
    manualEntry: locale === 'en' ? 'Enter coordinates manually' : 'निर्देशांक मैनुअली दर्ज करें',
    latitude: locale === 'en' ? 'Latitude' : 'अक्षांश',
    longitude: locale === 'en' ? 'Longitude' : 'देशांतर',
    timezone: locale === 'en' ? 'Timezone (UTC offset)' : 'समय क्षेत्र (UTC)',
    apply: locale === 'en' ? 'Apply' : 'लागू करें',
    selected: locale === 'en' ? 'Selected: ' : 'चयनित: ',
  };

  return (
    <div ref={containerRef} className={cn('w-full', className)}>
      {/* Label */}
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Search Input */}
      <div className="relative">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            placeholder={value ? `${value.name}, ${value.state}` : labels.search}
            className={cn(
              'w-full pl-10 pr-10 py-3 bg-white border-2 rounded-xl',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-deepteal-200',
              error
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                : isOpen
                ? 'border-deepteal-500 ring-2 ring-deepteal-200'
                : 'border-gray-200 hover:border-gray-300 focus:border-deepteal-500',
              value && !query && 'text-gray-700 font-medium'
            )}
          />
          {(value || query) && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-4 h-4 text-gray-400" />
            </button>
          )}
        </div>

        {/* Dropdown via portal */}
        {isOpen && typeof document !== 'undefined' && createPortal(
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
              'max-h-[300px] overflow-hidden',
              'animate-in fade-in-0 zoom-in-95 duration-200'
            )}
          >
            {query.length < 2 ? (
              <div className="px-4 py-6 text-center text-gray-400 text-sm">
                <MapPin className="w-8 h-8 mx-auto mb-2 text-gray-300" />
                {labels.typeToSearch}
              </div>
            ) : searchResults.length === 0 ? (
              <div className="px-4 py-6 text-center text-gray-400 text-sm">
                {labels.noResults}
              </div>
            ) : (
              <div className="overflow-y-auto max-h-[250px]" style={{ scrollbarWidth: 'thin' }}>
                {searchResults.map((place, index) => (
                  <button
                    key={`${place.name}-${place.state}-${index}`}
                    type="button"
                    onClick={() => handleSelect(place)}
                    className={cn(
                      'w-full px-4 py-3 text-left transition-colors',
                      'flex items-center gap-3',
                      'hover:bg-deepteal-50',
                      value?.name === place.name && value?.state === place.state && 'bg-deepteal-100'
                    )}
                  >
                    <MapPin className="w-5 h-5 text-deepteal-500 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-gray-800">{place.name}</div>
                      <div className="text-xs text-gray-500">{place.state}</div>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Manual entry toggle */}
            {showManualInput && (
              <div className="border-t border-gray-100">
                <button
                  type="button"
                  onClick={() => setShowManual(!showManual)}
                  className="w-full px-4 py-3 text-sm text-deepteal-600 font-medium hover:bg-deepteal-50 transition-colors flex items-center justify-between"
                >
                  {labels.manualEntry}
                  <ChevronDown className={cn('w-4 h-4 transition-transform', showManual && 'rotate-180')} />
                </button>

                {showManual && (
                  <div className="px-4 pb-4 space-y-3 border-t border-gray-100 pt-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">{labels.latitude}</label>
                        <input
                          type="number"
                          step="0.0001"
                          value={manualLat}
                          onChange={(e) => setManualLat(e.target.value)}
                          placeholder="28.6139"
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepteal-200 focus:border-deepteal-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-500 mb-1">{labels.longitude}</label>
                        <input
                          type="number"
                          step="0.0001"
                          value={manualLng}
                          onChange={(e) => setManualLng(e.target.value)}
                          placeholder="77.2090"
                          className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepteal-200 focus:border-deepteal-400"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs text-gray-500 mb-1">{labels.timezone}</label>
                      <input
                        type="number"
                        step="0.5"
                        value={manualTz}
                        onChange={(e) => setManualTz(e.target.value)}
                        placeholder="5.5"
                        className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-deepteal-200 focus:border-deepteal-400"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={handleManualSubmit}
                      disabled={!manualLat || !manualLng}
                      className={cn(
                        'w-full py-2 rounded-lg font-medium text-sm transition-all',
                        manualLat && manualLng
                          ? 'bg-gradient-to-r from-deepteal-500 to-deepteal-600 text-white hover:from-deepteal-600 hover:to-deepteal-700'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      )}
                    >
                      {labels.apply}
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>,
          document.body
        )}
      </div>

      {/* Selected place display */}
      {value && !isOpen && (
        <div className="mt-3 px-4 py-2 bg-deepteal-50 rounded-lg border border-deepteal-200 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-deepteal-600" />
          <span className="text-sm font-medium text-deepteal-700">
            {labels.selected}{value.name}, {value.state}
          </span>
          <span className="text-xs text-deepteal-500 ml-auto">
            ({value.lat.toFixed(2)}°, {value.lng.toFixed(2)}°)
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
