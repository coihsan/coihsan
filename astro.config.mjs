// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  site: "https://coihsan.github.io",
  base: '/',
  integrations: [
    tailwind(),
    icon({
      iconDir: "src/assets/icons"
    })
  ],
  output: "static"
});