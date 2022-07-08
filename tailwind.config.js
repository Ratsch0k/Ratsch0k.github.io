module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Arial'],
    },
    extend: {
      colors: {
        primary: {
          lightest: '#c4d9ff',
          light: '#7ca4ef',
          DEFAULT: '#00398c',
          dark: '#14284f',
          contrast: '#FFFFFF',
          border: '#204d91',
        },
        secondary: {
          lightest: '#ffe5c3',
          light: '#FCAF58',
          DEFAULT: '#FF8C42',
          dark: '#d55200',
          contrast: '#FFFFFF',
        },
        background: {
          light: '#e3e3ff',
          dark: '#15162a',
        },
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
        'ball-shrink': 'ball-shrink 1.5s ease-out 2.5s',
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
