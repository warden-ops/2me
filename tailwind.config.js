/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./en/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#16486F",
        brand: "#005DA4",
        brandDark: "#004E90",
        brandLight: "#DDE3EA",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
