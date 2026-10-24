# Modelo de datos — Techo Vecino

## Tabla `houses`

| campo | tipo | notas |
|---|---|---|
| id | uuid PK | default gen_random_uuid() |
| titulo | text | requerido |
| descripcion | text | |
| tipo_operacion | enum('venta','arriendo') | requerido |
| precio | integer | venta: total; arriendo: mensual. Sin decimales |
| moneda | text | default 'CLP' |
| ciudad | text | público, para filtros |
| barrio | text | público, para filtros |
| direccion | text | **solo admin**, no se muestra al público |
| area_m2 | integer | |
| habitaciones | integer | |
| banos | integer | |
| estado | enum('disponible','reservado','retirado') | público solo ve 'disponible' |
| imagenes | jsonb | array de rutas/URLs en Supabase Storage |
| owner_nombre | text | **solo admin** |
| owner_telefono | text | **solo admin** |
| owner_email | text | **solo admin**, nullable |
| created_at | timestamptz | default now() |
| updated_at | timestamptz | |

## Administrador
Usuario de Supabase Auth (un solo admin, creado a mano). Sin tabla propia en v1.

## Reglas de consulta
- Consultas públicas: `SELECT` con columnas explícitas; **nunca** `owner_nombre`, `owner_telefono`, `owner_email`.
- Consultas del panel admin: incluyen las columnas `owner_*`.

## Supuestos pendientes de confirmación
- Un solo número de WhatsApp de la asociación.
- Moneda CLP; precio entero sin decimales.
- `ciudad` y `barrio` públicos (para filtros); `direccion` solo admin.
- Estados: `disponible` | `reservado` | `retirado`.
