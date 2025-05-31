/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
    primary:  '#C8102E',   // vermelho SmartWay
    accent:   '#D4AF37',   // dourado
    light:    '#FFFFFF',   // branco de conveniência
    dark:     '#000000',   // preto 
  },
      fontFamily: {
        sans: ['"Open Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
