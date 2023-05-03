/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "ui-sans-serif", "ui-system"],
    },
    extend: {
      colors: {
        primary: "#00BAC7",
        dark: "#272D3E",
      },
      fontSize: {
        32: ["32px", "44px"],
      },
    },
  },
  plugins: [],
};
