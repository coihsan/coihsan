import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import vercel from "@astrojs/vercel/static";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://coihsan.vercel.app/",
  image: {
    service: passthroughImageService(),
  },
  integrations: [tailwind({
    applyBaseStyles: true,
    nesting: true
  }), preact(), icon({iconDir: "src/assets/icons",})],
  output: "static",
  adapter: vercel()
});