# Skill: desplegar-cloudflare

## Propósito
Desplegar en Cloudflare respetando los límites del plan gratuito.

## Cuándo usarla
Al desplegar o cambiar la configuración de despliegue.

## Agentes
Orquestador / Dev Astro.

## Pasos
1. Configurar `@astrojs/cloudflare` en `astro.config.mjs` y `wrangler.jsonc`.
2. Secretos con `wrangler secret put` (no en código): `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_EMAIL`, `WHATSAPP_NUMBER`; vars públicas: `PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_ANON_KEY`.
3. Build de producción; verificar tamaño del Worker y que no quede nada CPU-intenso (el hashing va a Supabase).
4. Verificar que las variables sean accesibles vía el runtime de Cloudflare.
5. Recordar límites: 100k req/día, 10 ms CPU/req, 128 MB; Supabase pausa tras 1 semana sin actividad.
6. Confirmar que `.env`/`.dev.vars` no se suban (gitignored).
7. No ejecutar `wrangler deploy` sin orden explícita.
