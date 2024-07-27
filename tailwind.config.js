/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.css",
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2A8420",
        secondary: "#ece6f0",
      },
      dropShadow: {
        glow: [
          "0 0px 20px rgba(255,255, 255, 0.35)",
          "0 0px 65px rgba(255, 255,255, 0.2)",
        ],
      },
      textShadow: {
        glow: "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.5)",
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    function ({ addUtilities }) {
      addUtilities({
        ".text-shadow-glow": {
          textShadow:
            "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.5), 0 0 30px rgba(255, 255, 255, 0.5)",
        },
      });
    },
  ],
  darkMode: "class",
};
