/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#14182a',
        secondary: '#1B2039',
        lightBlue: '#3BC8E7',
      },
      backgroundImage: {
        primaryLinear:
          'linear-gradient(0deg, #161A2E 0%, #ED3FB3 0%, #3BC8E7 0%, rgba(32, 167, 196, 0) 100%)',
        secondaryLinear:
          'linear-gradient(0deg, #14182A 0%, #343E69 0%, rgba(32, 167, 196, 0) 100%)',
        borderLinear:
          'linear-gradient(270deg, #252B4D 0%, #252B4D 50%, #161A2D 100%);',
      },
      width: {
        widthDesktop: '1200px',
      },
      borderImage: {
        gradient:
          'linear-gradient(270deg, #252B4D 0%, #252B4D 50%, #161A2D 100%)',
      },
      dropShadow: {
        sidebar: '0px 0px 24px 6px #04040433',
      },
    },
  },
  variants: {
    extend: {
      borderImage: ['responsive', 'hover', 'focus'],
    },
  },
  plugins: [],
};
