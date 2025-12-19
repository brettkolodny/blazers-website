// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import path from "node:path";

// https://astro.build/config
export default defineConfig({
  vite: {
    resolve: {
      alias: {
        "@/": path.resolve(Deno.cwd(), "./src/"),
        "@server": path.resolve(Deno.cwd(), "../server/src"),
      },
    },
    plugins: [tailwindcss()]
  }
});
