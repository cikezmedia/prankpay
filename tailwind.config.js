/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        mainBlack: '#141414',
        mainGray: '#222222',
        mainOrange: '#ee8833',
      },
    },
  },
  plugins: [],
};
