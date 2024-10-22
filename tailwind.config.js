/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xxxsm': '320px',
        'xxsm': '340px',
        'xsm': '380px',
        'msm': '440px',
        'sm': '640px',
        'xmd': '786px',
        'md': '991px',
        'lg': '1280px',
        'xl': '1440px',
        '2xl': '1536px',
        '3xl': '1600px'
      },
      fontFamily:{
        fontMedium:"Degular Medium",
        stylishFont:"Style Script"
      },
      colors: {
        'navbar': 'rgba(255, 255, 255, 0.8)',
        beige: '#F5E6D9',
        'beige-100': '#e0d4c5',
        purple: '#A357C4',
        green: {
          600: '#28A745',
          700: '#218838',
        },
      },
      keyframes: {
        popIn: {
          '0%': { transform: 'scale(0)', opacity: 0 },
          '100%': { transform: 'scale(1)', opacity: 1 },
        },
      },
      animation: {
        'pop-in': 'popIn 0.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}