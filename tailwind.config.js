import withMT from "@material-tailwind/react/utils/withMT";

/** @type {import('tailwindcss').Config} */
export default withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        text: "hsl(0, 0%, 99%)",
        textDim: "hsl(0, 0%, 60%)",
        background: "hsl(0, 0%, 7%)",
        primary: "hsl(155, 100%, 65%)",
        primaryBg: "hsla(155, 100%, 65%, 1%)",
        primaryHi: "hsla(155, 100%, 75%, 25%)",
        primaryFg: "hsl(155, 100%, 85%)",
        secondary: "hsl(156, 51%, 14%)",
        secondaryFg: "hsl(156, 51%, 75%)",
        secondaryBg: "hsla(156, 51%, 14%, 5%)",
        secondaryHi: "hsla(156, 51%, 30%, 50%)",
        accent: "hsl(155, 100%, 94%)",
        accentBg: "hsla(155, 100%, 94%, 1%)",
        accentHi: "hsla(155, 100%, 100%, 25%)",
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
