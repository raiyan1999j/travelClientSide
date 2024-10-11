/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        "netflix": ["Source Code Pro", 'monospace'],
        "Helvetica":["Roboto", 'sans-serif'],
        "poppins":["Poppins", 'sans-serif']
      },
      backgroundImage:{
        "bannerImg":"linear-gradient(180deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 13.65%), linear-gradient(0deg, rgba(0, 0, 0, 0.30) 0%, rgba(0, 0, 0, 0.30) 100%),url('./public/mountain.jpg')",
        "articleImg":"linear-gradient(0deg, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.35) 100%), url('./public/articleBg.png')",
        "blurImg":"linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50%, rgba(0, 0, 0, 0.75) 100%)",
        "appAdvantageImg":"linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%),url(./public/appAdvantage.png)"
      }
    },
  },
  plugins: [],
}

