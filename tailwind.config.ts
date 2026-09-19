import type {Config} from 'tailwindcss';
import {colors, fontFamily} from './components/theme';

const config: Config = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: [...fontFamily.sans],
    },
    extend: {
      colors: {
        primary: {...colors.primary},
        secondary: {...colors.secondary},
        background: {...colors.background},
      },
      boxShadow: {
        'primary-xl': '0 0px 25px -5px rgba(0, 57, 140, 0.2), 0 10px 10px -5px rgba(0, 57, 140, 0.2)',
        'primary-2xl': '0 0px 60px 8px rgba(0, 57, 140, 0.25)',
      },
      spacing: {
        '100-8': 'calc(100% - 2rem)',
      },
      keyframes: {
        swipe: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0',
          },
          '10%, 37%': {
            transform: 'translateX(100%)',
            opacity: '1',
          },
          '44%, 100%': {
            transform: 'translateX(-100%)',
            opacity: '0',
          }
        },
        'appear-from-below': {
          '0%': {
            transform: 'translateY(200px)',
            opacity: '0',
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: '1',
          }
        },
        hover: {
          '0%': {
            transform: 'scale(1.0)',
          },
          '50%': {
            transform: 'scale(1.1)',
          },
          '100%': {
            transform: 'scale(1.0)',
          },
        },
        shrink: {
          '0%': {
            transform: 'scale(1.0)'
          },
          '100%': {
            transform: 'scale(0.8)'
          }
        },
        'ball-shrink': {
          '0%': {
            clipPath: 'circle(100%)'
          },
          '100%': {
            clipPath: 'circle(0%)',
          },
        }
      },
      animation: {
        'swipe-left': 'swipe 4s ease-in 500ms infinite',
        'hover': 'hover 4s ease-in-out infinite',
        'ball-shrink': 'ball-shrink 1.5s ease-out 2.5s',
      }
    }
  },
  plugins: [],
};

export default config;
