import cloudflare from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/kit/vite";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  vitePlugin: {
    inspector: true,
  },
  kit: {
    adapter: cloudflare(),
    alias: {
      $components: "./src/lib/components",
      $lib: "./src/lib",
    },

    // TODO: add prerender
    // prerender: {
    //   origin: "",
    // },
  },
};

export default config;
