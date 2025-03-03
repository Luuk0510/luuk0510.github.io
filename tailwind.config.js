/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'jetbrains': ['JetBrains Mono', 'monospace'],
      },
    },
  },
  darkMode: 'media',
  plugins: [

  ],
  daisyui: {
    themes: ["light", "dark", "retro", "black", "cupcake"],
    base: true, 
  }
}
