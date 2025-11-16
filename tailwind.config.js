/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0B0C10",
        dark2: "#1F2833",
        lightgray: "#C5C6C7",
        aqua: "#00D9D9",
        aquasoft: "#66FCF1",
      },
    },
  },
  plugins: [],
}
