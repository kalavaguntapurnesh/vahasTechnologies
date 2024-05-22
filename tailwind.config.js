/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {},
      colors: {
        footer: "#001327",
        inputColor: "#F8F8F8",
        footerLinks: "#a6aab6",
        scrollToTop: "#e7473c",
        trackColor: "#002147",
        colorThree: "#2a3b2c",
        colorFour: "#007ae1",
        colorFive: "#2a3b2c",
      },
    },
  },
  plugins: [],
};
