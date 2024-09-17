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
        secondary: "#00C4D1",
        accent: "#9BA4B1",
      },
    },
  },
  plugins: [],
};
