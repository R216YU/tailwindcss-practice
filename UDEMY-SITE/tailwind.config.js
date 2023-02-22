/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#ebf8ff",
          300: "#90cdf4",
          500: "#4299e1",
        },
        body: "#050505",
        "selected-text": "#A3A3FF",
        theme: "#5c318c",
        secondary: "#9191A4",
        badge: "#3f3f51",
        inputBorder: "#565666",
        input: "#2A2A33"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif']
      },

    },
  },
  plugins: [],
  }
