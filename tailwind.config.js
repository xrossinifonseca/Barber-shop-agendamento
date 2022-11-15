/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-200": "#18181B",
        "color-secondary": "#262626",
        "secondary-200": "#CE9C65",
        "secondary-300": "#a8a29e",
        "yellow-500": "#C79B00",
      },
      fontFamily: {
        roboto: "Roboto, sans-serif;",
        garamond: "EB Garamond, serif",
      },
      backgroundImage: {
        herobanner: "url('../assets/herobanner.jpg')",
        heroproductdesk: "url('../assets/bannerproductdesk.jpg')",
      },
    },
  },
  plugins: [],
};
