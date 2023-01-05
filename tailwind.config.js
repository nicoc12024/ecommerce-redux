/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparentBlack: "rgba(0,0,0,0.7)",
      },
    },
  },
  plugins: [],
};
