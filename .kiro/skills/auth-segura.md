# Skill: auth-segura

## Propósito
Autenticar al admin de forma segura en SSR.

## Cuándo usarla
Al implementar/modificar login, logout, middleware o protección de rutas.

## Agentes
Dev Astro; audita Revisor Seguridad.

## Pasos
1. Verificar signup público desactivado y que el admin existe (creado a mano).
2. `src/lib/auth.ts` con `@supabase/ssr` (cookies httpOnly + Secure + SameSite).
3. `src/middleware.ts`: validar sesión en `/admin/*` y mutadores; comparar el email con `ADMIN_EMAIL`; sin sesión → redirigir a login; con sesión pero email distinto → 403.
4. `auth/login` y `auth/logout`: validar con Zod; CSRF con SameSite + verificación de `Origin`.
5. No revisar claims de JWT.
6. Rate limit del login vía Supabase Auth.
7. Confirmar que `service_role` no se usa en rutas públicas y que `ADMIN_EMAIL` solo se lee en servidor.
