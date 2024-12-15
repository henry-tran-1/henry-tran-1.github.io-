/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lora'],
        body: ['Open Sans'],
      },
    },
  },
  plugins: [],
}
