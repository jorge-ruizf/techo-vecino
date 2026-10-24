# Skill: commit-seguro

## Propósito
Commitear avances de forma segura y consistente.

## Cuándo usarla
Al cerrar una tarea.

## Agentes
Orquestador.

## Pasos
1. Verificar que build/tests pasan.
2. Revisar `git status`/`git diff` staged; confirmar que no haya `.env`, `.dev.vars` ni credenciales/secretos.
3. Mensaje Conventional Commits (`feat:`, `fix:`, `chore:`, `docs:`, `refactor:`, `test:`) con scope claro.
4. Stage específico (no `git add .`).
5. No hacer push (solo cuando el usuario diga "sube los cambios"); nunca `--force`.
