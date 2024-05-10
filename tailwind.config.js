/ @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src//*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
    colors: {
      // Configure your color palette here
      purpleDark: '#8059A6',
      purpleUltraDark: '#563A6E',
      purpleLight: '#CCC2D6',
      violet: '#7070C2',
      aqua: '#70C2C2',
      greenCorrect: '#70C270',
      blueInformation: '#2F76BD',
      yellowWarning: '#E0E052',
      redError: '#D65C5C',
      textModal: '#424242',
      grayPurple: '#E5E3E8',
      // Código de los gradientes, con las paletas de colores.
      // gradiente01: 'linear-gradient(90deg, rgba(128,89,166,1) 0%, rgba(112,194,194,1) 100%);',
      // gradiente02: 'linear-gradient(90deg, rgba(132,155,194,1) 0%, rgba(112,194,194,1) 100%);',
      // gradienteHeroBox: 'linear-gradient(90deg, rgba(132,155,194,1) 60%, rgba(112,194,194,1) 100%);'
  },
  },
  plugins: [],
}
