/** @type {import('tailwind').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}', // for Next.js pages
    './components/**/*.{js,ts,jsx,tsx}', // for React components
    './public/**/*.html', // if you have HTML files in the public folder
  ],
  theme: {
    extend: {},
  },
  plugins:[],
};

