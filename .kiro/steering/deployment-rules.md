# Reglas de despliegue — Techo Vecino

## Límites del plan gratuito
- **Cloudflare (runtime Workers):** 100.000 req/día, 10 ms de CPU por petición, 128 MB RAM.
- **Supabase:** 500 MB de BD, pausa tras 1 semana sin actividad, 1 GB Storage, 5 GB egress, 200 conexiones.

## Acceso a datos
- Datos vía `@supabase/supabase-js` por HTTP (sin agotar el pool de conexiones de PostgreSQL).

## Secretos
- Con `wrangler secret put`; nunca en el código ni commiteados.
- `.env` y `.dev.vars` están en `.gitignore`.

## Despliegue
- No ejecutar `wrangler deploy` sin orden explícita.
- Hacer `build` antes de desplegar y verificar que no quede nada CPU-intenso en el Worker.

## Git
- Rama `main`, origin `https://github.com/jorge-ruizf/techo-vecino.git`.
- Commits con Conventional Commits. Sin push hasta que el usuario diga "sube los cambios". Nunca `--force`.

## Pasos pendientes (scaffold de Astro aún no creado)
El scaffold de Astro (`package.json`, `astro.config.mjs`) todavía no existe, así que la conexión con Cloudflare no se puede materializar todavía. Pendiente cuando se cree el scaffold:

1. Inicializar el proyecto Astro con TypeScript estricto.
2. Instalar y configurar `@astrojs/cloudflare` en `astro.config.mjs` con `output: 'server'`.
3. Crear `wrangler.jsonc` con `name: "techo-vecino"`, `compatibility_date` del día del despliegue y `main` apuntando al entry que genera el adaptador. **Sin valores de variables** en el archivo.
4. Añadir a `package.json` los scripts `build`, `preview` y `deploy`.
5. Definir secretos con `wrangler secret put` (nunca en archivos ni en la terminal visible): `SUPABASE_SERVICE_ROLE_KEY`, `ADMIN_EMAIL`, `WHATSAPP_NUMBER`; y las variables públicas `PUBLIC_SUPABASE_URL`, `PUBLIC_SUPABASE_ANON_KEY`.
6. Hacer `build` antes de desplegar y verificar que no quede nada CPU-intenso en el Worker (el hashing de contraseñas va en Supabase Auth).
7. No ejecutar `wrangler deploy` sin orden explícita del usuario.
