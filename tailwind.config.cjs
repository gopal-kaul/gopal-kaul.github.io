/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        light: "#b0cdf1",
        background: "#081426",
        neonBlue: "#54e0c1",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
