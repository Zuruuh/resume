import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  redirects: {
    '/': {
      status: 302,
      destination: '/fr',
    },
  },
  experimental: {
    assets: true,
  },
});
