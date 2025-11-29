'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { Share2, Copy, Check, Twitter, Facebook, MessageCircle, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';

interface ShareResultProps {
  title: string;
  text: string;
  url: string;
  shareLabel: string;
  copiedLabel: string;
  shareTitleLabel?: string;
  closeShareMenuLabel?: string;
  copyLinkLabel?: string;
}

export function ShareResult({
  title,
  text,
  url,
  shareLabel,
  copiedLabel,
  shareTitleLabel = 'Share',
  closeShareMenuLabel = 'Close share menu',
  copyLinkLabel = 'Copy Link',
}: ShareResultProps) {
  const [copied, setCopied] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const shareData = {
    title,
    text,
    url,
  };

  // Close popup on Escape key
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape' && showOptions) {
      setShowOptions(false);
      triggerRef.current?.focus();
    }
  }, [showOptions]);

  // Handle click outside
  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(e.target as Node) &&
        triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
      setShowOptions(false);
    }
  }, []);

  useEffect(() => {
    if (showOptions) {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('mousedown', handleClickOutside);
      // Focus first element in popup
      const firstLink = popupRef.current?.querySelector('a, button');
      if (firstLink instanceof HTMLElement) {
        firstLink.focus();
      }
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showOptions, handleKeyDown, handleClickOutside]);

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // User cancelled or error
        setShowOptions(true);
      }
    } else {
      setShowOptions(true);
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${text}\n\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      setShowOptions(false);
      triggerRef.current?.focus();
    } catch {
      // Failed to copy silently
    }
  };

  const shareLinks = [
    {
      name: 'Twitter',
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`,
      color: 'hover:bg-blue-50 hover:text-blue-500',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
      color: 'hover:bg-blue-50 hover:text-blue-600',
    },
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      url: `https://wa.me/?text=${encodeURIComponent(`${text}\n\n${url}`)}`,
      color: 'hover:bg-green-50 hover:text-green-500',
    },
  ];

  return (
    <div className="relative">
      <Button
        ref={triggerRef}
        variant="secondary"
        size="sm"
        onClick={handleNativeShare}
        leftIcon={<Share2 className="w-4 h-4" aria-hidden="true" />}
        aria-haspopup="dialog"
        aria-expanded={showOptions}
      >
        {shareLabel}
      </Button>

      {showOptions && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            aria-hidden="true"
          />

          {/* Share popup */}
          <div
            ref={popupRef}
            className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-fade-in"
            role="dialog"
            aria-label="Share options"
          >
            <div className="flex items-center justify-between px-4 pb-2 mb-2 border-b border-gray-100">
              <span className="font-medium text-gray-900 text-sm">{shareTitleLabel}</span>
              <button
                onClick={() => {
                  setShowOptions(false);
                  triggerRef.current?.focus();
                }}
                className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                aria-label={closeShareMenuLabel}
              >
                <X className="w-4 h-4 text-gray-500" aria-hidden="true" />
              </button>
            </div>

            {shareLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'flex items-center gap-3 px-4 py-2 text-gray-700 transition-colors',
                    link.color
                  )}
                  onClick={() => setShowOptions(false)}
                >
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  <span>{link.name}</span>
                </a>
              );
            })}

            <div className="border-t border-gray-100 my-2" />

            <button
              onClick={copyToClipboard}
              className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 w-full transition-colors"
            >
              {copied ? (
                <>
                  <Check className="w-5 h-5 text-green-500" aria-hidden="true" />
                  <span className="text-green-600">{copiedLabel}</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" aria-hidden="true" />
                  <span>{copyLinkLabel}</span>
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
