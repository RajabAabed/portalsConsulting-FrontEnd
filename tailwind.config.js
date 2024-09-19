/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Axiforma: ["Axiforma", "sans-serif"],
      },
      colors: {
        primary: "#0A2669",
        secondary: {
          100: "#CCF4F6",
          200: "#99E9ED",
          300: "#66DFE4",
          400: "#33D4DB",
          500: "#00C4D1", // Base color
          600: "#00A9B3",
          700: "#008092",
          800: "#00586A",
          900: "#003044",
        },
        accent: "#9BA4B1",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
