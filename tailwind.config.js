/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      fontSize: {
        h1: ["4rem", "normal"],
        content: ["2rem", "1.2"],
      },
      fontFamily: {
        itim: "itim, sans-serif",
        "league-spartan": '"League Spartan", sans-serif',
      },
      boxShadow: {
        buttonBulge: "0 1px 0 0",
      },
    },
  },
  plugins: [],
};
