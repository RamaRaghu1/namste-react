/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontfamily: {
        hero: ["Alfa Slab One"],
        body: ["Varela Round", "sans-serif"],
      },
    },
  },
  plugins: [],
};
