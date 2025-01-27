import { Config } from "tailwindcss";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        md: "768px",
        lg: "1440px",
      },
      colors: {
        black: "#101828",
        darkGrey: "#475467",
        grey: "#6C717B",
        red: "#E44848",
        darkRed: "#D84343",
        yellow: "#FFC531",
        lightGrey: "#DADDE1",
        lighterGrey: "#F2F4F7",
        warmWhite: "#F7F7F7",
        white: "#FFFFFF",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: ["16px", { lineHeight: "24px", fontWeight: 400 }],
        s: ["16px", { lineHeight: "24px", fontWeight: 500 }],
        m: ["20px", { lineHeight: "24px", fontWeight: 600 }],
        l: ["24px", { lineHeight: "32px", fontWeight: 600 }],
      },
    },
  },
  plugins: [],
} as Config;
