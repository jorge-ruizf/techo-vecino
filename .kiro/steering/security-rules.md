# Reglas de seguridad — Techo Vecino

- Signup público **desactivado** en Supabase. Un admin creado a mano.
- Middleware en **servidor** que valida la sesión de Supabase Auth y compara el email del usuario con `ADMIN_EMAIL`. Si no hay sesión o no coincide: **403** o redirección a `/admin/login`.
- Cookies httpOnly, Secure y SameSite, gestionadas con `@supabase/ssr`.
- `service_role` **solo en servidor**, nunca con prefijo `PUBLIC_`.
- RLS activada en `houses`: el público solo lee filas con `estado = 'disponible'`.
- Las consultas públicas **nunca** seleccionan `owner_nombre`, `owner_telefono`, `owner_email`.
- Sin SQL concatenado: solo `@supabase/supabase-js` / consultas parametrizadas.
- XSS: Astro escapa por defecto; `set:html` solo para contenido de confianza.
- CSRF: cookies SameSite + verificación de cabecera `Origin` en endpoints que modifican datos.
- Rate limit del login vía Supabase Auth.
- Antes de commitear, verificar que no haya `.env`, `.dev.vars` ni credenciales.
