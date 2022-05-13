module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Arial'],
    },
    extend: {
      colors: {
        primary: {
          lightest: '#cbe0f2',
          light: '#6f98ba',
          DEFAULT: '#1b3347',
          dark: '#121f30',
          contrast: '#FFFFFF',
        },
        secondary: {
          lightest: '#F9C784',
          light: '#FCAF58',
          DEFAULT: '#FF8C42',
          dark: '#E05600',
          contrast: '#FFFFFF',
        }
      },
      spacing: {
        '100-8': 'calc(100% - 2rem)',
      },
      keyframes: {
        swipe: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: 0,
          },
          '10%, 37%': {
            transform: 'translateX(100%)',
            opacity: 1,
          },
          '44%, 100%': {
            transform: 'translateX(-100%)',
            opacity: 0,
          }
        },
        'appear-from-below': {
          '0%': {
            transform: 'translateY(200px)',
            opacity: 0,
          },
          '100%': {
            transform: 'translateY(0px)',
            opacity: 1,
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
        'ball-shrink': 'ball-shrink 0.8s ease-out 1.2s',
      }
    }
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
    fontWeight: ['responsive', 'hover'],
    extend: {
      textColor: ['disabled'],
      borderColor: ['disabled'],
    },
    spacing: ['responsive'],
  },
  plugins: [],
}
