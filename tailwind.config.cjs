/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "very-dark-blue": "hsl(216, 12%, 8%)",
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(216, 12%, 54%)",
        "dark-grey": "hsl(206, 17%, 18%)",
        "dark-blue": "hsl(215, 27%, 12%)",
        orange: "hsl(25, 97%, 53%)",
      },
    },
  },
  plugins: [],
};
