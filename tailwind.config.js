/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#5538EE',
          base: '#6B4EFF',  
          light: '#9990FF',
          lighter: '#C6C4FF',
          lightest: '#E7E7FF',
        },
      },
    },
  },
  plugins: [],
};
