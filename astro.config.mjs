import { loadEnv } from 'vite';
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

const { APP_URL } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), sitemap()],
  site: APP_URL,
  output: 'static',
  compressHTML: true,
  redirects: {
    '/': {
      status: 302,
      destination: '/en',
    },
  },
  experimental: {
    assets: true,
  },
});
