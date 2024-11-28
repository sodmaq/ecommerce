import flowbite from "flowbite-react/tailwind";

/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      fontFamily: {
        libre: ['"Libre Baskerville"', "serif"],
      },
      keyframes: {
        fade: {
          "0%, 100%": { opacity: "0" },
          "50%": { opacity: "1" },
        },
        animation: {
          fade: "fade 2s ease-in-out infinite", // 2 seconds for each fade cycle
        },
      },
    },
  },
  plugins: [flowbite.plugin()],
};

export default config;
