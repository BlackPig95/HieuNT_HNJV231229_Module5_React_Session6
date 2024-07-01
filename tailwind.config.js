/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        rikkei: "#fff",
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,//Reset tất cả các CSS mặc định của tailwind
  }
};