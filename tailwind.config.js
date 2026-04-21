/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Brand
        primary: '#2e3b4b',
        secondary: '#ffdd57',
        accent: '#3b82f6',

        // Surfaces
        bg: '#0b1220',
        surface: '#111a2b',
        'surface-2': '#162134',
        dark: '#0b1220',

        // Text
        ink: '#e6edf7',
        muted: '#9aa7bd',
        subtle: '#6b7891',

        // Lines
        line: '#1f2a3d',

        // Legacy
        light: '#f7fafc'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace']
      },
      letterSpacing: {
        tightest: '-0.035em'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.4s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.1)',
        card: '0 6px 20px -10px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.25)',
        ring: '0 0 0 1px rgba(255,255,255,0.06) inset',
      },
      backgroundImage: {
        'grid-lines':
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-sm': '28px 28px',
      }
    },
  },
  plugins: [],
}
