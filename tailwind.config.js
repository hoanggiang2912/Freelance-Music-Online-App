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
      width: {
        widthDesktop: "1200px",
      },
      borderImage: {
        gradient:
          "linear-gradient(270deg, #252B4D 0%, #252B4D 50%, #161A2D 100%)",
      },
    },
  },
  variants: {
    extend: {
      borderImage: ["responsive", "hover", "focus"],
    },
  },
  plugins: [],
};
