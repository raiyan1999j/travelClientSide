/** @type {import('tailwindcss').Config} */
import Image from "./public/"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "netflix": ["Source Code Pro", 'monospace'],
        "Helvetica":["Roboto", 'sans-serif']
      },
      backgroundImage:{
        "bannerImg":"linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 13.65%), linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%),url('./public/mountain.jpg')",
        "blurImg":"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.75) 100%)"
      }
    },
  },
  plugins: [],
}

