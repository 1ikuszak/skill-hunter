/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize:{
        xxl : '48.83px',
        xl : '39.06px',
        l : '31.25px',
        ml : '25px',
        m: '20px',
        sm : '16px',
        s : '12.8px',
        xs : '10.24px',
        xxs : '8.19px',
      },
      colors: {
        primary: '#6C9CEE',
        secondary: '#7076EE',
        light: '#FFFFFF',
        dark: '#070714',
      }
    },
  },
  plugins: [],
}
