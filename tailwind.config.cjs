/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
      serif: ['Nunito Sans', 'serif'],
    },
    extend: {
      fontSize: {
        base: '16px',
      },
      screens: {
        sm: '385px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
      colors: {
        primary: '#FF9315',
        white: '#ffffff',
        grey: {
          dark: '#7E756B',
          light: '#ADA7A0',
        },
        bg: {
          dark: '#16212C',
          light: '#FCFCFC',
        },
        red: {
          DEFAULT: '#EF5950',
        },
        green: {
          DEFAULT: '#7ACB9A',
        },
        orange: {
          light: '#FFF3E4',
        },
      },
    },
  },
  plugins: [],
  darkMode: ['class'],
};
