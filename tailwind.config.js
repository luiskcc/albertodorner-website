import tailwindcss from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        arnoPro: ["ArnoPro", "serif"], 
        cormorant: ["Cormorant Garamond", "serif"],
      },
    },
  },
  plugins: [],
} 