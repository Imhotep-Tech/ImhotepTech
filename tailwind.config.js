/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          slate: '#0B1019',
          navy: '#162132',
          surface: '#111A28',
          surfaceGlass: 'rgba(19, 28, 42, 0.75)',
          gold: '#D4AF37',
          goldHover: '#E5C058',
          goldLight: '#F5D77F',
          goldDark: '#9A7B20',
          blue: '#38BDF8',
          blueHover: '#0284C7',
          emerald: '#10B981',
          rose: '#F43F5E',
        },
        // Egyptian Pharaoh Gold Palette (From Imhotep Tech Logo)
        primary: {
          DEFAULT: '#D4AF37',
          50: '#FDFBF4',
          100: '#F9F4E3',
          200: '#F3E7C1',
          300: '#EBD89A',
          400: '#E5C773',
          500: '#D4AF37',
          600: '#B88E28',
          700: '#946E19',
          800: '#6E4F0F',
          900: '#473105',
          container: '#B88E28',
          fixed: '#F5D77F',
          'fixed-dim': '#E5C058',
          on: '#1B1400',
          'on-container': '#473105',
        },
        'primary-container': '#B88E28',
        'primary-fixed': '#F5D77F',
        'primary-fixed-dim': '#E5C058',
        'on-primary': '#1B1400',
        'on-primary-container': '#473105',
        'shimmer-gold': '#D4AF37',
        'monolith-black': '#060A10',
        'sand-white': '#F8FAFC',
        'glass-border': 'rgba(212, 175, 55, 0.16)',

        // Surface Tones (Pharaoh Midnight Navy)
        background: '#0B1019',
        surface: {
          DEFAULT: '#111A28',
          lowest: '#060A10',
          low: '#0B1019',
          container: '#131D2D',
          high: '#1A263B',
          highest: '#22324D',
          variant: '#22324D',
        },
        'surface-container-lowest': '#060A10',
        'surface-container-low': '#0B1019',
        'surface-container': '#131D2D',
        'surface-container-high': '#1A263B',
        'surface-container-highest': '#22324D',
        'surface-variant': '#22324D',

        // Text & On-Colors
        'on-background': '#F8FAFC',
        'on-surface': '#F8FAFC',
        'on-surface-variant': '#CBD5E1',
        secondary: '#94A3B8',
        tertiary: '#64748B',

        // Backward compatibility
        bg: '#0B1019',
        'surface-2': '#131D2D',
        dark: '#0B1019',
        ink: '#F8FAFC',
        muted: '#94A3B8',
        subtle: '#64748B',
        line: 'rgba(212, 175, 55, 0.12)',
        light: '#F8FAFC'
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Cinzel"', '"Plus Jakarta Sans"', 'Georgia', 'serif'],
        headline: ['"Cinzel"', '"Plus Jakarta Sans"', 'Georgia', 'serif'],
        serif: ['"Libre Baskerville"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      letterSpacing: {
        tightest: '-0.035em'
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'ticker': 'ticker 40s linear infinite',
        'pulse-glow': 'pulseGlow 6s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 8s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.08)' }
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-12px) rotate(1.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(10px) rotate(-1.5deg)' },
        }
      },
      boxShadow: {
        soft: '0 1px 2px rgba(0,0,0,0.15), 0 1px 3px rgba(0,0,0,0.1)',
        card: '0 6px 20px -10px rgba(0,0,0,0.5), 0 2px 4px rgba(0,0,0,0.25)',
        ring: '0 0 0 1px rgba(212, 175, 55, 0.15) inset',
        glow: '0 0 20px rgba(16, 185, 129, 0.15)',
        'glow-cyan': '0 0 20px rgba(56, 189, 248, 0.15)',
        'glow-gold': '0 0 25px rgba(212, 175, 55, 0.25)',
        'spatial-float': '0 12px 35px -10px rgba(0, 0, 0, 0.6), 0 20px 45px -15px rgba(212, 175, 55, 0.15)',
        'spatial-card': '0 20px 50px -15px rgba(0, 0, 0, 0.8), 0 0 30px rgba(212, 175, 55, 0.08)',
        'spatial-glow': '0 0 35px -5px rgba(212, 175, 55, 0.35)',
      },
      backgroundImage: {
        'grid-lines':
          "linear-gradient(rgba(212, 175, 55, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        'grid-sm': '28px 28px',
      }
    },
  },
  plugins: [],
}
