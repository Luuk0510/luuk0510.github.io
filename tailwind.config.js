/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media',
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark", "retro", "black", "cupcake"],
  }
}
