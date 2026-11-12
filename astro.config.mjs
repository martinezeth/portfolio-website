// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Custom domain: no `base` needed. public/CNAME tells GitHub Pages the domain.
  site: 'https://ethanmartinez.dev',
  integrations: [sitemap()],
});
