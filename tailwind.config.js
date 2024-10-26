/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  safelist: [
    "bg-red-700",
    "bg-blue-700",
    "bg-green-700",
    "from-red-700",
    "from-blue-700",
    "from-green-700",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      // screens: ["640px", "768px", "1024px", "1280px"],
    },
    extend: {},
  },
  plugins: [],
};
