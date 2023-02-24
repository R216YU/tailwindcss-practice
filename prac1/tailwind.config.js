/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "header": "#24292E",
        "content": "#383E45",
        "logo": "#393E46"
      }
    },
    fontFamily: {
      meiryo: ['メイリオ', 'Meiryo', "sans-serif"]
    }
  },
  plugins: [],
}
