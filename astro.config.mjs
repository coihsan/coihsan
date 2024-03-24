import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://coihsan.vercel.app/",
  integrations: [tailwind({
    applyBaseStyles: true,
    nesting: true
  }), preact()],
  output: "static",
  adapter: vercel()
});