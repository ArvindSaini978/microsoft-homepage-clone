/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
      '2xsm':'440px',
      xsm:'540px',
      sm: '640px',
      md: '768px',
      xmd:'868px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '2000px',
    },
    extend: {
      boxShadow:{
        custom: '0px 3px 20px -9px black'
      },
      fontFamily: {
        segoe:'Segoe UI'
      }
      
    },
  },
  plugins: [],
}
