/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
       },
      scale: ["hover", "active", "group-hover"],
    },
  },
  plugins: [],
}

