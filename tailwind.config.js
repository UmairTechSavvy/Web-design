/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      
        blue:'#2997FF',
        gray:{

          DEFAULT:'#86868b',
          100:'94928d'
        },
        zinc:"#101010"



      }
    },
  },
  plugins: [],
}

