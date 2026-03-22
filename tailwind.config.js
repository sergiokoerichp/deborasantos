/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'terracotta': {
          dark: '#AB4922',
          DEFAULT: '#BC6C25',
        },
        'gold': '#DCA15D',
        'cream': '#FEFADF',
        'forest': {
          dark: '#273617',
          DEFAULT: '#5F6C37',
        }
      },
      fontFamily: {
        'display': ['Gilda Display', 'serif'],
        'body': ['Lato', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
