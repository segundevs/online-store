module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      spacing: {
         128: '32rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
