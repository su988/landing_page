module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        footer_desktop: "url('/footer_bg.svg')"
      }),
      backgroundColor: (theme) => ({
        dark_green: '#387546',
        pastel_green: '#598463',
        white: '#FFFFFF',
        button_orange: '#F19A33',
        button_green: '#387546'
      }),
      gradientColorStops: (theme) => ({
        primary: '#DEF0D8',
        secondary: '#FAFAFA'
      }),
      textColor: {
        primary: '#383833',
        orange: '#F19A33'
      },
      width: {
        100: '26rem'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
