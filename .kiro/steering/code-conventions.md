# Convenciones de código — Techo Vecino

- TypeScript estricto; sin `any`.
- `camelCase` para variables y funciones; `PascalCase` para componentes y tipos.
- Respuestas de API con forma `{ ok, data?, error? }` y códigos HTTP correctos.
- Capas: `repositories` (datos) → `services` (lógica) → `pages/api` (HTTP) → `components` (UI). Sin saltarse capas.
- Validación de todo input de endpoint con Zod antes de usarse.
- Secretos solo por variables de entorno; nunca en el código.
