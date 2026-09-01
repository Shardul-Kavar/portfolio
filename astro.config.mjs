import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";
import robotsTxt from "astro-robots-txt";
import UnoCSS from "@unocss/astro";
import icon from "astro-icon";
import solidJs from "@astrojs/solid-js";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";
import svelte from "@astrojs/svelte";

const SITE_URL = "https://radiant-bublanina-b52726.netlify.app";

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap(),
    robotsTxt({
      sitemap: [
        `${SITE_URL}/sitemap-index.xml`,
        `${SITE_URL}/sitemap-0.xml`,
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
