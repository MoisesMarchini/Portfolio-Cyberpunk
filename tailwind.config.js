/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts}"],
  safelist: ["bg-opacity-0", "bg-red-700", "bg-blue-700", "bg-green-700"],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      // screens: ["640px", "768px", "1024px", "1280px"],
    },
    extend: {
      fontFamily: {
        secondary: ["Cinzel", "serif"],
        primary: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
