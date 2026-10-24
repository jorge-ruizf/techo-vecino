# Visión y alcance — Techo Vecino

## Qué es
Techo Vecino es una asociación que publica, como intermediaria, casas de personas **no afiliadas**. Funciona como un catálogo público de propiedades en venta o arriendo, gestionado desde un panel administrativo protegido.

## Alcance v1 (lo que SÍ hace)
- Sitio público: listado de casas, detalle y filtros básicos por tipo de operación, ciudad y barrio.
- Botón de contacto público vía WhatsApp a un número único de la asociación.
- Panel administrativo protegido con login de Supabase Auth (un solo admin, sin roles).
- CRUD de casas desde el panel.
- Imágenes de las casas en Supabase Storage.

## Es un catálogo, no una plataforma de pagos
No se procesan pagos ni se cierran operaciones en línea.

## Fuera de alcance v1
- Pagos.
- Comisiones.
- Estados "vendido" ni "arrendado".
- Portal de dueños (los dueños no tienen cuenta ni login).

## Futuro (concepto, no se construye en v1)
- Tracking de operaciones y comisiones: 3% en venta y 40% del primer mes de arriendo, cobradas **solo al concretar la operación**. Los porcentajes irán en configuración, no en el código.
- Múltiples administradores y roles.
- Portal de dueños.
