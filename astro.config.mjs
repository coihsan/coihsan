import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/static";
import icon from "astro-icon";
import alpinejs from "@astrojs/alpinejs";

import react from "@astrojs/react";

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
  }), alpinejs(), react()],
  output: "static",
  adapter: vercel()
});