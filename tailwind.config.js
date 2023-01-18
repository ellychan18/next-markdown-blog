/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            pre: {
              "background-color": "#282c34",
              "font-family": "Fira Code, monospace",
            },
            p: {
              "&::before": {
                content: '"" !important',
              },
              "&::after": {
                content: '"" !important',
              },
            },
            code: {
              "&::before": {
                content: '"" !important',
              },
              "&::after": {
                content: '"" !important',
              },
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
