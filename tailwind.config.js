module.exports = {
  purge: [
    './src/**/*.tsx',
    './index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'gilroy-light': ['Gilroy-Light', 'sans-serif'],
        'gilroy-regular': ['Gilroy-Regular', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif']
      },
      colors: {
        primary: '#205AE3',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
