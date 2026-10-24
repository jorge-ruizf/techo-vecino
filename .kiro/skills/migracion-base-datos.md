# Skill: migracion-base-datos

## Propósito
Cambios de esquema versionados, seguros y reversibles.

## Cuándo usarla
Ante cualquier cambio de esquema/RLS/índices.

## Agentes
Especialista Supabase.

## Pasos
1. Crear `supabase/migrations/<timestamp>_<desc>.sql`.
2. DDL idempotente (`create table if not exists`, `add column if not exists`).
3. Constraints/defaults (`estado` default `'disponible'`, `moneda` default `'CLP'`, timestamps).
4. RLS: público = `SELECT` de filas `estado='disponible'` sin columnas `owner_*` (select explícito); admin = vía `service_role` en servidor (omite RLS).
5. Índices para filtros (ciudad, barrio, tipo_operacion, estado).
6. Documentar rollback (comentario con el `drop` inverso).
7. Aplicar en local; no aplicar a producción sin confirmación.
