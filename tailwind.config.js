const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ["Open sans", "ui-sans-serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "Noto Sans", "sans-serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      serif: ["Playfair Display", "ui-serif", "Georgia", "Cambria", "Times New Roman", "Times", "serif"]
    },
    minHeight: {
      head: '320px',
      headsmall: '224px'
    },
    extend: {
      colors: {
        cyan: colors.cyan,
        dark: '#343a40',
        primary: '#0f2e4e',
        interFoot: '#6b0000',
        nav: '#FFFFFF80',
        navhov: '#FFFFFFC0'
      },
      textColor: {
        'logo': '#ff0000',
        'info': '#ea8c48'
      }, 
      fontSize: {
        '2rem': '2rem',
        '1_3rem': '1.3rem'
      },
      lineHeight: {
        '12': '3rem',
      }     
    }  
  },
  variants: {
    extend: {
      textColor: ['hover']
    },
  },
  plugins: [],
}
