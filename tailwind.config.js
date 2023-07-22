/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add a custom color with the name 'white'
        'white': '#ffffff',
        'gold': "#DAA520",
        'blue': '#0A2463'
      },
    },
  },
  plugins: [require("daisyui")],
}

