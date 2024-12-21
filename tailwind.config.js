/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './client/**/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Lora'],
        body: ['Open Sans'],
      },
      animation: {
        bounceChevron: 'bounce 1.5s ease-in-out infinite',
      },
      keyframes: {
        bounceChevron: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
