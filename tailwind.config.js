/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "3rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      colors: {
        general: "#0F3EDA",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        GulfsDisplay: ["GulfsDisplay"],
      },
    },
  },
  plugins: [],
};
