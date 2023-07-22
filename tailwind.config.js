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
      },
    },
  },
  plugins: [require("daisyui")],
}

