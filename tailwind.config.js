/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{vue,js}', // All components
    './layouts/**/*.vue',         // Layouts
    './pages/**/*.vue',           // Pages
    './plugins/**/*.{js,ts}',     // Plugins
    './nuxt.config.{js,ts}',      // Nuxt config
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};


