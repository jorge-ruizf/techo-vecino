# Skill: escribir-pruebas

## Propósito
Pruebas que eviten regresiones sin sobreingeniar.

## Cuándo usarla
Al añadir lógica de servicio/endpoints o tras un bug.

## Agentes
Dev Astro.

## Pasos
1. Usar Vitest configurado para el entorno Astro/Cloudflare (mock del runtime de entorno).
2. Probar `services` y `repositories` con mocks de Supabase (sin BD real) y validación Zod (casos válidos/inválidos).
3. Probar endpoints con peticiones fake: verificar formato `{ ok, data?, error? }`, códigos HTTP y protección (403 sin sesión correcta).
4. Probar helpers puros (ej. `formatCLP`: `1000000` → `1'000'000`).
5. Fixtures/mocks para la sesión de admin.
6. Mantener las pruebas rápidas y enfocadas; no probar el framework.
