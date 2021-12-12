module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      padding: {
        '1/2': '50%',
        full: '100%',
      },
      colors: {
        custom: {
          DEFAULT: '#003a78',
        },
        sidebarcolor: {
          Default: '#003978',
        },
        activelink: {
          DEFAULT: ' #FEDD8D',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
