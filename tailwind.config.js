module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.tsx'
  ],
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}
