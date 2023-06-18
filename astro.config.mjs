import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://dbagley1.github.io",
  base: '/astro-darrian-dev',
  integrations: [tailwind(), vue(), mdx()]
});