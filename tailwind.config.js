/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        'blue-custom-700': 'rgb(29, 78, 216)',
        'blue-custom-800': 'rgb(30, 64, 175)',
        'blue-custom-900': 'rgb(30, 58, 138)',
      }
    }
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.bg-blue-700-rgba-80': {
          'background-color': 'rgba(29, 78, 216, 0.8)',
        },
        '.bg-blue-800-rgba-80': {
          'background-color': 'rgba(30, 64, 175, 0.8)',
        },
        '.bg-blue-900-rgba-80': {
          'background-color': 'rgba(30, 58, 138, 0.8)',
        },
      });
    }
  ],
}
