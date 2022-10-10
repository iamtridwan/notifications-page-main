/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
        white: "hsl(0, 0%, 100%)",
        grayishBlue: "hsl(210, 60%, 98%)",
        lightOne: "hsl(211, 68%, 94%)",
        lightTwo: "hsl(205, 33%, 90%)",
        blueOne: "hsl(219, 14%, 63%)",
        blueTwo: "hsl(219, 12%, 42%)",
        darkBlue: "hsl(224, 21%, 14%)",
        red: "hsl(1, 90%, 64%)",
        blue: "hsl(219, 85%, 26%)",
    },
    fontFamily: {
      sans: ['Plus Jakarta Sans', 'sans-serif']
    }
  },
  plugins: [],
}