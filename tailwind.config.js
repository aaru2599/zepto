/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btnBack: "#ff3269",
        btnHover: "#ff3269c7",
        btnBorder: "#ffcfcf73",
      },
      size: {
        xsm: "1.25rem",
        "title-text": "0.9375rem",
      },

      
    },
  },
  plugins: [],
};
