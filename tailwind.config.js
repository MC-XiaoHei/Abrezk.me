/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts}'
  ],
  theme: {
    extend: {
      width: {
        '5/24': '20.833333%',
        '7/24': '29.166667%'
      }
    },
    container: {
      center: true
    }
  },
  mode: 'jit',
  plugins: []
};