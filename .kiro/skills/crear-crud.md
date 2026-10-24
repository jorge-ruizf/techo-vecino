# Skill: crear-crud

## Propósito
Construir un slice vertical completo (BD → API → UI) de una entidad respetando el steering y KISS.

## Cuándo usarla
Al agregar o modificar una entidad CRUD (ej. `houses`).

## Agentes
Dev Astro + Especialista Supabase.

## Pasos
1. Crear la migración (ver `migracion-base-datos`): tabla, constraints, RLS e índices para filtros (ciudad, barrio, tipo_operacion, estado).
2. `repositories/<entidad>.ts`: consultas con columnas explícitas; método público sin `owner_*` y método admin con `owner_*`. Sin SQL concatenado.
3. `services/<entidad>.ts`: lógica de negocio y validación previa; llama solo al repositorio.
4. Endpoints `src/pages/api/<entidad>/`: GET (listado con filtros), POST, PUT, DELETE; input validado con Zod; mutadores protegidos; formato `{ ok, data?, error? }`.
5. Imágenes en Supabase Storage: bucket, políticas, upload y URLs públicas.
6. UI: listado público (con `formatCLP` y filtros), detalle público (botón WhatsApp vía prop), panel admin (CRUD + form con upload).
7. Build + tests; revisión de seguridad y de código.
