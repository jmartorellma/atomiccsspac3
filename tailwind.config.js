const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ["Open sans", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'serif': ["Playfair Display", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"]
    },
    extend: {
      colors: {
        cyan: colors.cyan,
        dark: '#343a40',
        primary: '#0f2e4e'
      },
      textColor: {
        'logo': '#ff0000'
      }
    },    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
