import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        surface: {
          DEFAULT: '#F5F0E8',
          elevated: '#FDFAF4',
          inset: '#E8E0D0',
          border: '#C8B89A',
          shadow: '#9A8A72',
        },
        accent: {
          DEFAULT: '#8B6914',
          hover: '#A07820',
          press: '#6B5010',
          text: '#5C4A10',
        },
        dark: {
          surface: '#1A1814',
          elevated: '#242018',
          inset: '#141210',
          border: '#4A4030',
          shadow: '#0A0806',
          accent: '#C8A030',
        },
      },
      boxShadow: {
        'retro-raised': '3px 3px 0px #9A8A72, -1px -1px 0px #FDFAF4',
        'retro-pressed': 'inset 2px 2px 4px #9A8A72, inset -1px -1px 2px #FDFAF4',
        'retro-window': '4px 4px 0px #9A8A72, 6px 6px 0px #C8B89A',
        'retro-raised-dark': '3px 3px 0px #0A0806, -1px -1px 0px #3A3020',
        'retro-pressed-dark': 'inset 2px 2px 4px #0A0806, inset -1px -1px 2px #3A3020',
        'retro-window-dark': '4px 4px 0px #0A0806, 6px 6px 0px #1A1814',
      },
      borderWidth: {
        '3': '3px',
      },
      animation: {
        'slide-in-right': 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'slide-out-right': 'slideOutRight 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        'modal-in': 'modalIn 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        'fade-in': 'fadeIn 0.2s ease-out',
      },
      keyframes: {
        slideInRight: {
          from: { transform: 'translateX(100%)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        slideOutRight: {
          from: { transform: 'translateX(0)', opacity: '1' },
          to: { transform: 'translateX(100%)', opacity: '0' },
        },
        modalIn: {
          from: { transform: 'scale(0.92) translateY(20px)', opacity: '0' },
          to: { transform: 'scale(1) translateY(0)', opacity: '1' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
