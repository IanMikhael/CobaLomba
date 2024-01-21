/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        spinSlow: "spin 60s linear infinite",
        blob: "blob 7s infinite",
        "fade-in": "fade-in 0.3s ease-in-out",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "scale(1)",
          },
          "25%": {
            transform: "scale(0.7)",
          },
          "50%": {
            transform: "scale(2)",
          },
          "75%": {
            transform: "scale(0.7)",
          },
          "100%": {
            transform: "scale(1)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      colors: {
        "red-logo": "#A84448",
        "red-hover": "#B45054",
        primary: "#FCF8F2",
        secondary: "#E9A178",
        "text-gray": "#666666",
        reserve: "#F6E1C3",
      },
      gridTemplateColumns: {
        "menu-xl": "repeat(4, minmax(250px, 1fr))",
        "menu-responsive": "repeat(auto-fit, minmax(250px, 25%))",
        "menu-sm": "repeat(auto-fit, minmax(250px, 1fr))",
        "menu-lg": "repeat(2, minmax(250px, 1fr))",
      },
    },
  },
  plugins: [],
};
