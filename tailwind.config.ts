import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      rose: {
        100: '#C82F90',
        700: '#591059'
      },
      yellow: {
        100: '#E9EB4B',
        700: '#9C9E13'
      },
      lila: {
        100: '#E2CFE5'
      },
      black: '#000',
      white: '#fff',
      slate: {
        100: '#f8fafc',
        200: '#f1f5f9',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      emerald: {
        50: '#ecfdf5',
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
      },
      blue: {
        100: '#EFF6FF',
        200: '#DBEAFE',
        300: '#BFDBFE',
        400: '#93C5FD',
        500: '#60A5FA',
        600: '#3B82F6',
        700: '#2B6CB0'
      },
    }
  },
  plugins: [],
}

export default config
