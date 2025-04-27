/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",   // Indigo-500
        secondary: "#F59E0B", // Amber-500
        accent: "#10B981",    // Emerald-500
        light: "#F9FAFB",     // Light gray
        dark: "#111827",      // Gray-900
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


