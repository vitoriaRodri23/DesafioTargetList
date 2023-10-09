/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "principal-blue": "#1f2a3d",
        "secundary-blue": "#464E5F",
        "text-gray-primary": "#9D9FA1",
        "red-primary": "#D97762",
        "green-primary": "#A3DA9A",
        "gray-white": "#F3F6F9"
        
      },
      
      
    },
  },
  plugins: [],
}