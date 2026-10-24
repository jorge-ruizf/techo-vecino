# Estructura de carpetas — Techo Vecino

```text
techo-vecino/
├── .kiro/
│   ├── steering/          # reglas y contexto del producto
│   ├── agents/            # definiciones de agentes
│   └── skills/            # skills reutilizables
├── public/
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   │   ├── index.astro                # listado público
│   │   ├── casas/[id].astro           # detalle público
│   │   ├── admin/
│   │   │   ├── login.astro
│   │   │   ├── index.astro            # dashboard / listado admin
│   │   │   ├── nueva.astro
│   │   │   └── editar/[id].astro
│   │   └── api/
│   │       ├── casas/                  # endpoints CRUD de casas
│   │       ├── auth/                   # login / logout
│   │       └── upload.ts              # subida de imágenes
│   ├── lib/
│   │   ├── supabase.ts                # clientes anon (público) y service_role (admin)
│   │   ├── auth.ts                    # sesión / guards
│   │   ├── validation.ts             # schemas Zod
│   │   ├── repositories/             # acceso a datos
│   │   └── services/                 # lógica de negocio
│   └── middleware.ts                 # protege /admin en servidor
├── supabase/migrations/              # SQL: tablas + RLS + índices
├── astro.config.mjs
├── wrangler.jsonc
├── tsconfig.json
├── package.json
├── .env.example
├── .gitignore
└── README.md
```
