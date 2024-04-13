/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,tsx,jsx}"],
  theme: {
    extend: {
      colors: {
        dribby: {
          "primary-color": "#ea4b8b",
          "secondary-color": "#faeccf",
        },
      },
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        quicksand: ["Quicksand", "sans-serif"],
      },
    },
  },
  plugins: [],
};
