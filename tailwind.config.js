/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
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
      },
      animation: {
        "fade-slide": "fade-slide 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};
