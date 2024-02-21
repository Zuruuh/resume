import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  preflight: true,
  include: ['./src/**/*.{astro,js,jsx,ts,tsx}'],
  exclude: [],
  theme: {
    extend: {
      tokens: {
        colors: {
          primary: { value: '#335384' },
          secondary: { value: '#5BA7D1' },
          'text-primary': { value: '#000000' },
          'text-secondary': { value: '#444440' },
          'text-tertiary': { value: '#ffffff' },
        },
      },
    },
  },
  outdir: 'styled-system',
});
