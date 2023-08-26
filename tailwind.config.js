/** @type {import('tailwindcss').Config} */
export default {
  plugins:[],
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFmily: {
        sans: ["var(--font-inter)"]
      }
    },
  },
}

