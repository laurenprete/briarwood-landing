import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.briarwoodsoftware.com',
  //base: 'portfolio',
  trailingSlash: 'always', // Use to always append '/' at end of url
  markdown: {
    shikiConfig: {
      theme: 'monokai',
    },
  },
  integrations: [
    react(),
    tailwind({}),
    sitemap(),
    robotsTxt()
  ],
});
