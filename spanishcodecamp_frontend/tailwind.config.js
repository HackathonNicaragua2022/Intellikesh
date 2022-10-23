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
        gray: '#DDC5ED',
        blackBlue: '#182747',
        clearPurple: "#675587"

      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
};
