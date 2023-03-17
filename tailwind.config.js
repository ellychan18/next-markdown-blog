/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      typography: ({}) => ({
        DEFAULT: {
          css: {
            pre: {
              "background-color": "#0f1419",
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
            "--tw-prose-body": "#707070",
            "--tw-prose-headings": "rgb(226 232 240)",
            "--tw-prose-lead": "#ffffff",
            "--tw-prose-links": "rgb(226 232 240)",
            "--tw-prose-bold": "#ffffff",
            "--tw-prose-counters": "#ffffff",
            "--tw-prose-bullets": "#ffffff",
            "--tw-prose-hr": "#ffffff",
            // "--tw-prose-quotes": "#ffffff",
            // "--tw-prose-quotes-borders": "#ffffff",
            "--tw-prose-captions": "#ffffff",
            "--tw-prose-code": "rgb(226 232 240)",
            // "--tw-prose-pre-code": "#0f1419",
            // "--tw-prose-pre-bg": "#0f1419",
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
