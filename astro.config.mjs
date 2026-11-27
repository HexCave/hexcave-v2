import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: process.env.SITE || 'https://hexcave.github.io/hexcave-v2/',
  base: process.env.BASE || '/hexcave-v2/',
  trailingSlash: 'always',
  output: 'static',
  integrations: [sitemap()],
  vite: { build: { assetsInlineLimit: 0 } },
});
