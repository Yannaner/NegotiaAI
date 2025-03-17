const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: '#0A1931',
        gold: '#C6A969',
        cream: '#F5EFE7',
        charcoal: '#2D2D2D',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 4px 20px 0 rgba(198, 169, 105, 0.1)',
      }
    },
  },
  plugins: [],
});
