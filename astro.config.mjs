import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import icon from "astro-icon";

import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  site: "https://coihsan.vercel.app/",
  prefetch: {
    prefetchAll: true
  },
  integrations: [tailwind({
    applyBaseStyles: true,
    nesting: true
  }), icon({
    iconDir: "src/assets/icons"
  }), alpinejs()],
  output: "static",
  adapter: vercel(),
});