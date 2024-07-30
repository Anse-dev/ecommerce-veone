/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6363',
        secondary: '#ffbd69',
        accent: '#333',
        background: '#f5f5f5',
        text: '#333',
      },
    },
  },
  plugins: [],
}

