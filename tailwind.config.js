/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      colors: {
        borderColor: "#E3E4F1",
        textColor: "#494C6B",
        inputText: "#9495A5",
        gardient1: "#55DDFF",
        garadient2: "#C058F3",
      },
    },
  },
  plugins: [require("daisyui")],
};
