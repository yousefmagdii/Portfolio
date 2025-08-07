/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        twinkle: "twinkle 3s ease-in-out infinite alternate",
      },
      keyframes: {
        twinkle: {
          "0%": { opacity: "0.3", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.1)" },
          "100%": { opacity: "0.3", transform: "scale(1)" },
        },
      },
    },
  },
  plugins: [],
};
