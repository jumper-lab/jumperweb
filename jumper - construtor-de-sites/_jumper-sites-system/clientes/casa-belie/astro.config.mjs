import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://casabelie.com.br',
  output: 'server',
  adapter: node({ mode: 'standalone' }),
  integrations: [sitemap()],
  image: {
    responsiveStyles: true,
  },
});
