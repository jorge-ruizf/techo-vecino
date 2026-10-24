import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// SSR con adaptador de Cloudflare (runtime Workers).
// Las variables se leen desde el entorno del runtime (Astro.locals.runtime.env).
export default defineConfig({
  output: 'server',
  adapter: cloudflare(),
});
