/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    colors: {
      'orange': '#d87d4a',
      'brown': '#101010',
      'gray': '#f1f1f1',
      'gray-light': '#fafafa',
      'orange-light': '#fbaf85',
      'white': '#ffffff',
      'black': '#000000'
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['serif'],
    },
    extend: {}
  },
  plugins: [],
};
