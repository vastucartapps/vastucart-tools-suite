'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isNavigating, setIsNavigating] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Reset progress when navigation completes
    setIsNavigating(false);
    setProgress(100);

    const timeout = setTimeout(() => {
      setProgress(0);
    }, 200);

    return () => clearTimeout(timeout);
  }, [pathname, searchParams]);

  // Listen for link clicks to start progress
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href && !link.target && !link.download) {
        const url = new URL(link.href);
        const currentUrl = new URL(window.location.href);

        // Only show progress for internal navigation
        if (url.origin === currentUrl.origin && url.pathname !== currentUrl.pathname) {
          setIsNavigating(true);
          setProgress(30);

          // Simulate progress
          const interval = setInterval(() => {
            setProgress((prev) => {
              if (prev >= 90) {
                clearInterval(interval);
                return prev;
              }
              return prev + 10;
            });
          }, 100);
        }
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  if (progress === 0) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-1 bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-teal-500 to-saffron-500 transition-all duration-300 ease-out"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
