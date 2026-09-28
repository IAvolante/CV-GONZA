# Antigravity Custom Agents - CV-GONZA

Este repositorio implementa el sistema oficial de **Custom Agents** de Google Antigravity para orquestar y modularizar el ciclo de desarrollo del portfolio y las soluciones de software de Gonzalo Volante.

Los agentes están definidos en `.agents/agents/` y son compatibles tanto con la GUI de Antigravity 2.0 como con la CLI (`agy`).

---

## 🤖 Roster de Agentes Especializados

| Agente | Archivo de Configuración | Rol Principal | Modelo Recomendado | Herramientas Clave |
| :--- | :--- | :--- | :--- | :--- |
| **`frontend-specialist`** | [`.agents/agents/frontend-specialist.md`](file:///.agents/agents/frontend-specialist.md) | Componentes React 19, Tailwind CSS v4, animaciones Framer Motion y diseño UI. | `inherit` | `view_file`, `replace_file_content`, `write_to_file`, `run_command` |
| **`content-i18n`** | [`.agents/agents/content-i18n.md`](file:///.agents/agents/content-i18n.md) | Copywriting técnico B2B, estudios de caso y sincronización estricta ES/EN. | `pro` | `view_file`, `replace_file_content`, `write_to_file`, `grep_search` |
| **`qa-auditor`** | [`.agents/agents/qa-auditor.md`](file:///.agents/agents/qa-auditor.md) | Auditoría de compilación TypeScript (`tsc -b`), linting y verificación de build con Vite. | `flash` | `run_command`, `view_file`, `manage_task` |

---

## 🚀 Cómo Utilizar los Custom Agents

### 1. Desde la GUI de Antigravity 2.0 (Desktop)
Gracias a la directiva `mainAgent: true`, puedes seleccionar cualquiera de estos agentes directamente desde el menú desplegable de selección de agente en la interfaz superior de Antigravity. Tu conversación adoptará inmediatamente el rol, instrucciones y conjunto acotado de herramientas del especialista.

### 2. Desde la CLI de Antigravity
Puedes invocar un agente como agente principal pasando el flag `--agent`:
```bash
# Iniciar sesión como el especialista de frontend
agy --agent frontend-specialist

# Iniciar sesión como el redactor de contenido e i18n
agy --agent content-i18n

# Ejecutar auditoría rápida de QA
agy --agent qa-auditor
```

### 3. Delegación como Subagente (Modo Orquestador)
Dado que cuentan con `subagent: true`, el agente general de Antigravity puede delegarles subtareas de forma autónoma según la necesidad sin saturar el contexto general del chat:
- Para rediseñar o pulir una tarjeta interactiva ➔ delega a `frontend-specialist`.
- Para traducir un caso de estudio ➔ delega a `content-i18n`.
- Para validar antes de un commit/push ➔ delega a `qa-auditor`.

---

## 📜 Reglas del Repositorio
Consulta [`.agents/rules/project-standards.md`](file:///.agents/rules/project-standards.md) para conocer las pautas de clean code, uso de Tailwind v4 y sincronización de traducciones comunes a todos los agentes.
