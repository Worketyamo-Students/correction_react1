/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', "sans-serif"],
        'open' : ["Open Sans", "sans-serif"],
        'source': ["Source Sans+3", "sans-serif"]
      },
      colors: {
        'primary': '#952A2A'
      }
    },
   
  },
  plugins: [],
}