/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        ciano: 'hsl(179, 62%, 43%)',
        amareloBrilho: 'hsl(71, 73%, 54%)',
        cinzaClaro: 'hsl(204, 43%, 93%)',
        azulCinzento: 'hsl(218, 22%, 67%)',
        cianoOpaco: '#2ab3b1d8'
      },
      fontFamily: {
        'karla': ['Karla', 'sans-serif']
      }
    },
  },
  plugins: [],
}

