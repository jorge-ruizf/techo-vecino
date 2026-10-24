# Reglas KISS/SOLID — Techo Vecino

## KISS (siempre)
- La opción más simple que cumpla el requisito. Ante duda entre dos, elegir la más simple.
- No construir nada fuera del alcance de v1.

## SOLID (solo donde aporte valor)
- Separar datos (`repositories`), lógica (`services`) y presentación (`components`).
- Sin abstracciones para futuros hipotéticos (sin plugins, multi-tenancy, factories innecesarias).
- Reutilizar antes que abstraer.
