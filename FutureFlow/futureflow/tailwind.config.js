module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Dark theme
        darkBg: "#0F0B2A",
        darkSecondary: "#1F1B3A",
        darkAccent: "#FF6A4D",
        darkText: "#E2E8F0",

        // Light theme
        lightBg: "#F8FAFC",
        lightSecondary: "#FFFFFF",
        lightAccent: "#C2410C",
        lightText: "#1E293B",

        // Common colors
        purpleLight: "#B08FEC",
        neonBlue: "#3B82F6",
      },
    },
  },
  plugins: [],
};
