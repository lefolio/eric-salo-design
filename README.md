# Eric Salon Design

Includes:
- The site content in `Content/`
- The template in src/`TemplateModule`

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
Content/       # Site Content
package.json
```

## Fork

Clone or copy this folder, change React/CSS under `src/`, and edit markdown under `Content/`. Keep the engine as a dependency (`file:../lefolio.md` locally, or a published `@lefolio/engine` version).

