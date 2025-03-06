/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#D42488",
      },
      fontSize: {
        logo: ["2.5rem", "normal"],
        h1: ["4rem", "normal"],
        h2: ["3rem", "1.75rem"],
        h3: ["2.5rem", "1.2"],
        h4: ["1.5rem", "1.75rem"],
        content: ["2rem", "1.2"],
        "content-sm": ["1.25rem", "1.75rem"],
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
