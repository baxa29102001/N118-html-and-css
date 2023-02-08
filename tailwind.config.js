/** @type {import('tailwindcss').Config} */

const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {},
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        html: {
          fontSize: "10px",
        },
      });
    }),
  ],
};
