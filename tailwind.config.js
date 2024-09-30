/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-bcg": "#0F1624",
        "grey-text": "#929EB0",
      },
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
      screens: {
        xs: "480px",
      },
      boxShadow: {
        "custom-blue": "0px 10px 30px 0px #00B2FF59",
        "custom-profile": "0px 20px 50px 0px #00B2FF40",
      },
      backgroundImage: {
        "border-gradient":
          "linear-gradient(326.6deg, #13ADC7 21.25%, #6978D1 58.73%, #945DD6 77.47%)",
        "btn-hover":
          "linear-gradient(270deg, #31CBE5 0%, #8796EF 66.67%, #B27BF4 100%)",
      },
    },
  },
  plugins: [],
};
