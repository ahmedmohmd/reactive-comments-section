/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        back: "#f5f6fa",
        "violet-light": "#c8c7dd",
        violet: "#5d6097",
      },
    },
  },
  plugins: [],
};
