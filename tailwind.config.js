/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This will include all .js, .jsx, .ts, and .tsx files in the src directory
  ],
  darkMode: 'class', // or 'media' or false
  theme: {
    extend: {
      boxShadow:{
        c:'0 1px 6x rgb(32 33 36 / 28%)',
        c2:'0 1px 1px rgb(0 0 0 / 10%)'
      },
    },
  },
  plugins: [],
}
