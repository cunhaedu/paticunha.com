const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ['var(--font-inter)', ...fontFamily.sans],
      },

      colors: {
        primary: '#00A7B5',

        whatsapp: '#00BB2D',
        email: '#DB4A39',

        gray: {
          300: '#CFCFCF',
          500: '#637381',
          900: '#212B36',
        },
      },
    },
  },
  plugins: [],
}
