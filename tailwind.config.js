/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        accent: "#6D5BD0;",
        parent: "#F2F0F9",
        "primary-bg": "#FFFFFF;",
        "stripe-bg": "#F4F2FF",
        "primary-text": "#25213B",
        "primary-variant": "#6E6893;",
        "primary-icon": "#8B83BA",
        "stroke-text": "#C6C2DE",
        positive: "#007F00",
        negative: "#D30000",
      },
    },
  },
  plugins: [],
};
