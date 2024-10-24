/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "dark-grayish-violet": "hsl(279, 6%, 55%)",
      "light-grayish-violet": "hsl(270, 3%, 87%)",

      red: "hsl(0, 100%, 66%)",
      "very-dark-violet": "hsl(278, 68%, 11%)",
      white: "hsl(0, 0%, 100%)",
    },
    extend: {
      fontFamily: {
        SpaceGrotesk: ["Space-Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};