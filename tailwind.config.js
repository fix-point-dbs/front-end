/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        biru: "#0033A1",
        oranye: "#FF6400",
        putih: "#FFFFFF",
        merah: "#D32F2F",
        hitam: "#000000",
      },
      keyframes: {
        "fade-slide": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slideInDown": {
          "0%": { opacity: "0", transform: "translateY(-50px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slideOutUp": {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-50px)" },
        },
      },
      animation: {
        "fade-slide": "fade-slide 0.6s ease-out forwards",
        "slideInDown": "slideInDown 0.3s ease forwards",
        "slideOutUp": "slideOutUp 0.2s ease forwards",
      },
    },
  },
  plugins: [],
};
