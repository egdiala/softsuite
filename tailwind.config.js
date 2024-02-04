/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2D416F',
        secondary: '#4BAA79',
        stroke: '#E7E7E7',
        error: '#E05453'
      }
    },
  },
  plugins: [],
  important: true,
}

