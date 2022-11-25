/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#100720",
        blackPurple: '#2D1950',
        pink: '#FF339A',
        purple: '#5E03FF',
        midnight: '#100720',
        yellow: '#FFC23C',
        card: "#1F1D2B",
        assent: "#181820",
        complement: "#252936",
        textColor: "#808191",
        secondary: "#353340",
        primary: "#6979F8",

        orange: "#FF7551",
        blue: "#32A7E2",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
