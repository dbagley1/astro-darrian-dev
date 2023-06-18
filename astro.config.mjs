import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://dbagley1.github.io",
  base: '/astro-darrian-dev',
  integrations: [tailwind()]
});