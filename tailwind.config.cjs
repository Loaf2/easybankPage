/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*"],
  theme: {
    extend: {
      screens: {
        'lg1700': {'max': '1700px'},
        'lg1600': {'max': '1600px'},
        'lg1500': {'max': '1500px'},
        'lg1400': {'max': '1400px'},
        'lg1300': {'max': '1300px'},
        'lg1200': {'max': '1200px'},
        'lg1100': {'max': '1100px'},
        'lg1000': {'max': '1000px'},
        'md900': {'max': '900px'},
        'md800': {'max': '800px'},
        'md700': {'max': '700px'},
        'md600': {'max': '600px'},
        'sm500': {'max': '500px'},
        'sm400': {'max': '400px'},
        'sm300': {'max': '300px'},
      }
    },
  },
  plugins: [],
}
