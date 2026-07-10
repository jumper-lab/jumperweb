import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://casabelie.com.br',
  output: 'server',
  adapter: vercel(),
  integrations: [sitemap()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/noop',
    },
    responsiveStyles: true,
  },
});
