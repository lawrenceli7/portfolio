/* global module */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        inter: ["inter", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        teal: {
          100: "#b2d8d8",
          200: "#66b2b2",
          300: "#008080",
          400: "#006666",
          500: "#004c4c",
        },
        gray: {
          100: "#999999",
          200: "#777777",
          300: "#555555",
          400: "#333333",
          500: "#111111",
        },
        purple: {
          100: "#efbbff",
          200: "#d896ff",
          300: "#be29ec",
          400: "#800080",
          500: "#660066",
        },
        blue: "#0077b5",
        green: "#2dba4e",
        red: "#c71610",
        darkred: "#822f2b",
        lightgray: "#f8f8fa",
        footer: "#16181d",
        nav: "#16181d",
        contact: "#16181d",
        navText: "#f1f1f1",
        default: "#23272f",
      },
      textUnderlineOffset: {
        5: "5px",
      },
      animation: {
        text: "text 5s ease infinite",
      },
      zIndex: {
        1000: "1000",
      },
      height: {
        nav: "70px",
      },
    },
  },
  plugins: [],
};
