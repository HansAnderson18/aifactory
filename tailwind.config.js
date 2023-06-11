/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        ranade: ['Ranade', 'sans-serif'],
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif']
      },
      colors: {
        'primary-color' : '#000000',
        'primary-blue' : '#1B7ADE',
        'secondary-blue': '#025CBB',
        'light-blue': '#46A0FF',
      }
    },
  },
  plugins: [],
}
