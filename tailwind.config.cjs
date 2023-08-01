/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#335384',
        secondary: '#5BA7D1',
        'text-primary': '#000000',
        'text-secondary': '#444440',
        'text-tertiary': '#ffffff',
      },
    },
  },
  plugins: [],
};
