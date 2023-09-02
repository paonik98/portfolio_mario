/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        nav_col: "#f7ede2",
        board_col: "#f5cac3",
        border_col: "#84a59d",
      },
    },
  },
  plugins: [],
};
