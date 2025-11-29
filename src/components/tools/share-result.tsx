'use client';

import { useState } from 'react';
import { Share2, Copy, Check, Twitter, Facebook, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils/cn';

interface ShareResultProps {
  title: string;
  text: string;
  url: string;
  shareLabel: string;
  copiedLabel: string;
}

export function ShareResult({
  title,
  text,
  url,
  shareLabel,
  copiedLabel,
}: ShareResultProps) {
  const [copied, setCopied] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  const shareData = {
    title,
    text,
    url,
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
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
    } catch (err) {
      console.error('Failed to copy:', err);
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
        variant="secondary"
        size="sm"
        onClick={handleNativeShare}
        leftIcon={<Share2 className="w-4 h-4" />}
      >
        {shareLabel}
      </Button>

      {showOptions && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowOptions(false)}
          />

          {/* Share popup */}
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-lg border border-gray-100 py-2 z-50 animate-fade-in">
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
                  <Icon className="w-5 h-5" />
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
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-green-600">{copiedLabel}</span>
                </>
              ) : (
                <>
                  <Copy className="w-5 h-5" />
                  <span>Copy Link</span>
                </>
              )}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
