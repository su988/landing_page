module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    textColor: {
      primary: '#383833',
      secondary: '#ffed4a',
      danger: '#e3342f'
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
