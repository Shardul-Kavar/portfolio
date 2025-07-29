import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://radiant-bublanina-b52726.netlify.app/",
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        "https://radiant-bublanina-b52726.netlify.app/sitemap-index.xml",
        "https://radiant-bublanina-b52726.netlify.app/sitemap-0.xml",
      ],
    }),
    solidJs(),
    UnoCSS({ injectReset: true }),
    icon(),
    svelte(),
  ],
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  output: "static",
  adapter: netlify(),
  vite: {
    assetsInclude: "**/*.riv",
  },
});
