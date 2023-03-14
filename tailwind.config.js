/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      screens: {
        xs: '280px',
        sm: '375px',
        'sm-ls': '500px',
        md: '668px',
        lg: '992px',
        xl: '1100px',
        '2xl': '1600px',
        '3xl': '1920px',
        '4xl': '2560px',
        '5xl': '3840px'
      }
    }
  },
  plugins: []
};
