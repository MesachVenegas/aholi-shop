import type { Config } from 'tailwindcss'

const config: Config = {
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
      }
    }
  },
  plugins: [],
}
export default config
