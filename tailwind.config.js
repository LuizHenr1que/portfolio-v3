import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: 'class', // Habilita modo escuro baseado em classe
  theme: {
    extend: {
      colors: {
        text: "var(--text)",
        textDim: "var(--textDim)",
        background: "var(--background)",
        primary: "var(--primary)",
        primaryBg: "var(--primaryBg)",
        primaryHi: "var(--primaryHi)",
        primaryFg: "var(--primaryFg)",
        secondary: "var(--secondary)",
        secondaryFg: "var(--secondaryFg)",
        secondaryBg: "var(--secondaryBg)",
        secondaryHi: "var(--secondaryHi)",
        accent: "var(--accent)",
        accentBg: "var(--accentBg)",
        accentHi: "var(--accentHi)",
      },
      fontFamily: {
        sans: ["Graphik", "sans-serif"],
      },
    },
  },
  // plugins: [
  //   require('@tailwindcss/forms'),
  //   require('@tailwindcss/typography'),
  // ],
});
