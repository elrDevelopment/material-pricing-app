// postcss.config.js
const autoprefixer = require('autoprefixer')
const tailwindcss = require('tailwindcss')
const tailwindui = require('@tailwindcss/ui')
module.exports = {
  plugins: [
    tailwindcss,
    tailwindui,
    autoprefixer
  ]
}
