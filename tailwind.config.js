/** @type {import('tailwindcss').Config} */
export default {
  content: [    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        navbarColor: "#006726",
        buttonColor: "#ee3d0d",
        lightYellow: "#f3b819",
        lightGreen: "#f3b819",
        lightOrange: "#f3ce90",
        fadedGreen: "#bdda67",
        limeGreen:'#a3e635',
      },
      keyframes:{
        'trans-right':{
          '0%,100%':{transform:'scaleX(1)',filter:'grayScale(1)'},
          '50%':{transform:'scaleX(1.1)',filter:'grayScale(0)',boxShadow: '3px 3px 10px rgba(0,0,0,0.5)'}
        },
      },
        animation:{
          'trans-right':'trans-right 1.5s ease-in-out infinite'
        },
    },
  },
  plugins: [],
}

