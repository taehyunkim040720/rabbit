import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{js,ts,tsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    fontFamily: {
      sans: ['Pretendard Variable', 'Pretendard']
    },
    extend: {
      screens: {
        pc: '1280px',
        mobile: '780px'
      }
    },
    colors: {
      ...colors,
      theme: 'rgb(24 24 27 / 1)',
      primary: 'rgb(67 56 202 / 1)',
      hover: 'rgb(99 102 241)'
    }
  },
  plugins: []
};
