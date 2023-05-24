import { defineConfig } from "astro/config";
import { settings } from "./src/data/settings";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: settings.site,
  integrations: [sitemap(), mdx(), react()],
  vite: {
    ssr: {
      external: ["svgo"]
    }
  }
});