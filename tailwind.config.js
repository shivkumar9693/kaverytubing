/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A2540",
        secondary: "#C0C7CF",
        dark: "#1F2937",
        accent: "#F97316",
      },
    },
  },
  plugins: [],
}
