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
        "bannerImg":"url('./public/mountain.jpg')"
      }
    },
  },
  plugins: [],
}

