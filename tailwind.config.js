module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'mk-blue': '#45a7c5',
        'mk-green': '#00c08a',
        'mk-gray': '#65656a'
      },
      maxWidth: {
        '1/4': '25%',
        '1/2': '50%',
        '3/4': '75%',
        '16': '4rem'
      },
      minHeight: {
        '16': '4rem'
      }
    },
    variants: {},
    plugins: [],
  }
}
