/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'space-mono': ['Space Mono', 'monospace'],
      },
      colors: {
        "mono": '#9E9E9E',
      },
      keyframes: {
        noise: {
          '0%': { 'background-position ': '0 0'},
          '100%' : { 'background-position': '1000px 1000px' }
        },
      },
      animation: {
        noise: 'noise 0.2s steps(10) infinite'
      }
    },
  },
  plugins: [],
}

