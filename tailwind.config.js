/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F1139",    
        accent: "#02F3E9",      
        "purple-dark": "#33184D",
        "text-main": "#02F3E9",  
        "text-light": "#fff",   
        "gray-500": "#a1a1aa",
      },
    },
  },
  plugins: [],
};
