/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      gallery: '#f0f0f0',
      gray: '#909090',
      Bon_Jour: '#f2f0f1',
      black: '#000',
      white: '#fff',
      ebb: '#f0eeed',
      sunglow: '#ffc663',
      Fairpink: '#ffebeb',
      Redorange: '#ff3333',
      Mercury: '#e5e5e5',
      GreenHaze: '#01ab31',
      silver: '#cccccc',
      alto: '#d8d8d8',
    },

   


    extend: {
      screens: {
        'sm-max': {'max': '639px'},
        md: {'min': '640px'}
      },

    },
  },
  plugins: [],
}

