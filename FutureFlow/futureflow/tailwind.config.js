module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neonBlue: "#00E5FF",
        neonPurple: "#8A2BE2",
        darkBg: "#0A0A0A",
        glassBg: "rgba(255, 255, 255, 0.1)",
        arabicText: "#1a365d",
      },
      backdropBlur: {
        xs: "2px",
      },
      fontFamily: {
        arabic: ["Cairo", "sans-serif"],
        english: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};