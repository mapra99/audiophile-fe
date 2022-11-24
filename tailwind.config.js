// See default config at https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js

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
      'black': '#000000',
      'danger': '#CD2C2C'
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
      serif: ['serif'],
    },
    fontSize: {
      xs: ['0.81rem', { lineHeight: '1.56rem' }],     // 13px
      sm: ['0.875rem', { lineHeight: '1.18rem' }],    // 14px
      base: ['0.938rem', { lineHeight: '1.56rem' }],  // 15px
      lg: ['1.125rem', { lineHeight: '1.5rem' }],     // 18px
      xl: ['1.25rem', { lineHeight: '1.75rem' }],     // 20px
      '2xl': ['1.5rem', { lineHeight: '2rem' }],      // 24px
      '3xl': ['1.75rem', { lineHeight: '2.375rem' }], // 28px
      '4xl': ['2rem', { lineHeight: '2.25rem' }],     // 32px
      '4.5xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
      '5xl': ['2.5rem', { lineHeight: '2.75rem' }],   // 40px
      '6xl': ['3.5rem', { lineHeight: '3.625rem' }],  // 56px
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
    },
    extend: {
      letterSpacing: {
        'super-wide': '0.72em'
      },
      spacing: {
        '4.5': '1.125rem',
        13: '3.25rem',
        128: '32rem'
      },
      minHeight: {
        128: '32rem',
        160: '40rem'
      }
    }
  },
  plugins: [],
};
