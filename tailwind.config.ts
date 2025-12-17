import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm cream background
        cream: {
          50: '#fffbf5',
          100: '#f5dfbb',
          200: '#f6be9a',
          300: '#ffc187',
        },
        // Deep teal primary (rich dark tones - premium feel)
        deepteal: {
          50: '#e8f5f3',
          100: '#c5e8e2',
          200: '#71c1ae',
          300: '#4a9a8d',
          400: '#2a7a72',
          500: '#104f55',
          600: '#054348',
          700: '#084b49',
          800: '#064645',
          900: '#112b2c',
        },
        // Warm accent (terracotta/orange tones - premium feel)
        warmaccent: {
          50: '#fff5ed',
          100: '#ffc187',
          200: '#f6be9a',
          300: '#fd8630',
          400: '#d04f28',
          500: '#bc4749',
          600: '#9a3535',
          700: '#7c2d2d',
          800: '#562c2c',
          900: '#3d1f1f',
        },
        // Earthy neutrals
        earth: {
          300: '#a39585',
          400: '#75615a',
          500: '#71685b',
          600: '#5a4f47',
          700: '#433b35',
        },
        // Semantic colors
        success: {
          light: '#D1FAE5',
          DEFAULT: '#10B981',
          dark: '#059669',
        },
        warning: {
          light: '#FEF3C7',
          DEFAULT: '#F59E0B',
          dark: '#D97706',
        },
        error: {
          light: '#FEE2E2',
          DEFAULT: '#EF4444',
          dark: '#DC2626',
        },
      },
      fontFamily: {
        sans: ['var(--font-noto-sans)', 'system-ui', 'sans-serif'],
        hindi: ['var(--font-noto-sans-devanagari)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-2': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading-1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-2': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.3' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
        'body': ['1rem', { lineHeight: '1.75' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'zodiac-pattern': "url('/images/zodiac-pattern.svg')",
        'yantra-pattern': "url('/images/yantra-pattern.svg')",
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s infinite',
        'number-pop': 'numberPop 0.3s ease-out',
        'reveal': 'reveal 0.4s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        numberPop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        reveal: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1)',
        'glow-deepteal': '0 0 10px rgba(16, 79, 85, 0.25)',
        'glow-warmaccent': '0 0 10px rgba(208, 79, 40, 0.25)',
        'elevation-1': '0 1px 3px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.06)',
        'elevation-2': '0 4px 6px -1px rgba(0,0,0,0.06), 0 2px 4px -1px rgba(0,0,0,0.04)',
        'elevation-3': '0 10px 15px -3px rgba(0,0,0,0.08), 0 4px 6px -2px rgba(0,0,0,0.04)',
        'elevation-4': '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
        'glow-deepteal-lg': '0 0 25px rgba(16, 79, 85, 0.3)',
        'glow-warmaccent-lg': '0 0 25px rgba(208, 79, 40, 0.3)',
        'inner-soft': 'inset 0 2px 4px 0 rgba(0,0,0,0.04)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};

export default config;
