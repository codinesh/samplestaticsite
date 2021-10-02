const {
  url
} = require('inspector')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['*.html', './src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      primary: "#3DDC84"
    },
    extend: {
      backgroundImage: {
        'mainaction': "url('https://plavafintech.com/wp-content/uploads/2021/07/1-2.png')"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}