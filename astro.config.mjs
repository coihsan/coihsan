import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://coihsan.vercel.app/",
  integrations: [
    tailwind({
      applyBaseStyles: true,
      nesting: true,
    })
  ]
});