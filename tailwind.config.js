/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
sm:'640px',
md:'768',
lg:'960px',
xl:'1200px'
    },
    colors:{
      body:'#e5e5e5',
      white:'#fff',
      green:{DEFAULT:'#539592',hover:'#40807d'},
      black:{DEFAULT:'#273029',hover:'#1b211c'},
      gray:'#888888',
      outline:'#f1f1f1',
      pink:'#ffa5a5',
      orange:{
        DEFAULT:'#f2994a',
        hover:'#da863c'
      }
    },
    extend: {
      fontFamily:{
        lora:['var(--font-lora)','sans-serif'],
        poppins:['var(--font-poppins)','sans-serif'],

      },
      boxShadow:{
        primary:'40px 4px 40px 0px rgba(68 68 68 0.25)'
      },
    
      backgroundImage: {
       hasan:'url(../../public/background.jpg)'
      },
    },
  },
  plugins: [],
}
