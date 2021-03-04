module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: (theme) => ({
        dark_green: '#387546',
        white: '#FFFFFF',
        button: '#F19A33'
      }),
      gradientColorStops: (theme) => ({
        primary: '#DEF0D8',
        secondary: '#FAFAFA'
      }),
      textColor: {
        primary: '#383833'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
