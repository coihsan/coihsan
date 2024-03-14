import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  base: "/",
  integrations: [
    tailwind({
      applyBaseStyles: true,
      nesting: true,
    })
  ]
});