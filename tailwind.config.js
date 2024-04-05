/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        backdrop: "#121212",
        primarygreen: "#1db954",
        active: "#282828",
        graytext: "#b3b3b3",
        footer: "#181818",
        zart: "#232323",
      },
      width: {
        degernav: "1000px",
        navbar: "calc(100% - 505px)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
