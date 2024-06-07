import { transform } from "framer-motion";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        slidein: {
          from: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        slidein: "slidein 1s ease var(--slidein-delay, 0) forwards",
        // slidein500: "slidein 1s ease 500ms forwards",
        // slidein700: "slidein 1s ease 700ms forwards",
      },
      container: {},
      colors: {
        companyColor: "#5256d5",
        footer: "#001327",
        inputColor: "#F8F8F8",
        footerLinks: "#595959",
        scrollToTop: "#e7473c",
        trackColor: "#002147",
        colorThree: "#2a3b2c",
        colorFour: "#007ae1",
        colorFive: "#2a3b2c",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
