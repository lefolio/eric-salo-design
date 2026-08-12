# Eric Salon Design (LeFolio template starter)

§3 template starter: demo `Content/` + local `src/` TemplateModule + `@lefolio/engine`.

## Run

```bash
npm install
npm run dev
```

Build:

```bash
npm run build
```

No extra CLI flags — the engine discovers `./src/index.ts`, registers the `salo` template, and `Content/config.yaml` selects it with `template: salo`.

## Layout

```text
src/           # TemplateModule (shell, views, ::: blocks, CSS)
Content/       # Demo vault (edit this for site content)
package.json   # depends on @lefolio/engine
```

Template source imports engine APIs:

- `@lefolio/engine/template` — types (`TemplateModule`, content types, …)
- `@lefolio/engine/markdown` — `MarkdownRenderer`, `MarkdownBody`
- `@lefolio/engine/globals.css` — Tailwind `@reference` for template CSS

## Fork

Clone or copy this folder, change React/CSS under `src/`, and edit markdown under `Content/`. Keep the engine as a dependency (`file:../lefolio.md` locally, or a published `@lefolio/engine` version).

## Later: publish as a template package

Publishing `@lefolio/template-salo` (npm module without the fat demo vault) is deferred — see LeFolio [[distribution]] §4.
