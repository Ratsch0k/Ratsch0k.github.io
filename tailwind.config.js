module.exports = {
  purge: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          lightest: '#BEC3DA',
          light: '#8A94BC',
          DEFAULT: '#4E598C',
          dark: '#3B4368'
        },
        secondary: {
          lightest: '#F9C784',
          light: '#FCAF58',
          DEFAULT: '#FF8C42',
          dark: '#E05600'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}