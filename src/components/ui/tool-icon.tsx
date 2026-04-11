'use client';

import {
  Hash,
  Sparkles,
  LayoutGrid,
  Target,
  Clover,
  Pencil,
  Briefcase,
  Palette,
  Star,
  Baby,
  Smartphone,
  Landmark,
  Car,
  Heart,
  Wallet,
  Moon,
  Sunrise,
  Hourglass,
  ScrollText,
  Crown,
  Orbit,
  Shield,
  Users,
  Church,
  Gem,
  Home,
  CalendarClock,
  Flame,
  type LucideProps,
} from 'lucide-react';
import { type ComponentType } from 'react';

const iconMap: Record<string, ComponentType<LucideProps>> = {
  Hash,
  Sparkles,
  LayoutGrid,
  Target,
  Clover,
  Pencil,
  Briefcase,
  Palette,
  Star,
  Baby,
  Smartphone,
  Landmark,
  Car,
  Heart,
  Wallet,
  Moon,
  Sunrise,
  Hourglass,
  ScrollText,
  Crown,
  Orbit,
  Shield,
  Users,
  Church,
  Gem,
  Home,
  CalendarClock,
  Flame,
};

export function ToolIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
