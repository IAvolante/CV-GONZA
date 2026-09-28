---
description: Estándares de desarrollo y arquitectura transversales para todos los agentes en CV-GONZA.
---

# Estándares de Desarrollo - Repositorio CV-GONZA

Reglas aplicables a cualquier agente o desarrollador que trabaje en este repositorio:

## 1. Estructura de Directorios
- El código fuente de la aplicación web se ubica en el subdirectorio `gonzalo-portfolio/`.
- Todo comando de terminal (`npm run dev`, `npm run build`, `npm install`, etc.) debe ejecutarse teniendo como directorio de trabajo (`cwd`) la carpeta `gonzalo-portfolio`.

## 2. Internacionalización (i18n)
- Nunca escribir textos directamente en componentes JSX si representan contenido visible para el usuario.
- Usar el hook `const { t } = useLanguage()` importado desde `@/i18n/LanguageContext`.
- Si se agrega una nueva clave en `translations.ts`, debe agregarse simultáneamente en las secciones `es` y `en`.

## 3. Estilos y Componentes
- Utilizar exclusivamente clases de utilidad de Tailwind CSS v4.
- Para concatenar clases condicionales, importar la función `cn` de `@/lib/utils`.
- Mantener la paleta de colores corporativa: fondo `slate-950`/`slate-900`, textos principales `white`/`slate-200`, textos secundarios `slate-400`/`slate-500`, y detalles de acento en cian (`cyan-400`/`cyan-500`).

## 4. Calidad y Verificación
- Cada cambio relevante debe ser verificado ejecutando la compilación (`npm run build`) para garantizar que no existan errores de tipado en TypeScript.
