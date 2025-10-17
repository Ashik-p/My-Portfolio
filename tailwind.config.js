/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",  // Changed from /src/react-app/**
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };