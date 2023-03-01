/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
      colors: {
        "grayish-blue-200": "hsl(240, 78%, 98%)",
        "grayish-blue-300": "hsl(234, 14%, 74%)",
        "grayish-blue-400": "hsl(233, 13%, 49%)",
        "grayish-blue-500": "hsl(232, 13%, 33%)",
        "gradient-1": "hsl(236, 72%, 79%)",
        "gradient-2": "hsl(237, 63%, 64%)",
      },
    },
  },
  plugins: [],
}
