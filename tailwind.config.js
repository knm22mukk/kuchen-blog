/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
        },
      },
      typography: {
        DEFAULT: {
          css: {
            h2: {
              background: '#4F46E5',
              borderRadius: '8px',
              padding: '16px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '800',
              fontSize: '36px',
              lineHeight: '40px',
              color: '#FFFFFF',
            },

            h3: {
              borderLeft: '8px solid #4F46E5',
              padding: '16px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: '800',
              fontSize: '28px',
              lineHeight: '32px',
            },

            p: {
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 'normal',
              fontSize: '16px',
              lineHeight: '150%',
            },

            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },

            iframe: {
              width: '100%',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
