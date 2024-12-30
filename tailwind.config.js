/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#14182a",
        secondary: "#1B2039",
        lightBlue: "#3BC8E7",
      },
    },
  },
  plugins: [],
};
