const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        ebGaramond: ["EB Garamond", "serif"],
      },
    },
    colors: {
      ...colors,
      transparent: "transparent",
      current: "currentColor",
      beige: "#F4E8DB",
      baingan: {
        100: "#FFFFFF",
        200: "#DFDEEA",
        300: "#BEBDD6",
        400: "#9E9CC1",
        500: "#7B7BAD",
        600: "#5F5D95",
        700: "#4B4974",
        800: "#363453",
        900: "#201F31",
      },
    },
  },
  plugins: [],
};
