# shadcn/ui + Figma Tokens React Boilerplate

A React + TypeScript + Vite starter with the full [shadcn/ui](https://ui.shadcn.com/) component set (base-ui primitives), a Tailwind v4 theme generated from Figma design tokens, and [Storybook](https://storybook.js.org/) as the primary way to browse and develop components.

This repo doubles as the source for **`@your-org/ui`** (rename to your real npm scope in `package.json` — see [Publishing](#publishing)), a shared component library published for other applications in the org to consume. Only components, the `ThemeProvider`, shared utilities, and theme tokens/styles are published — Storybook stories, the `src/App.tsx` demo shell, and dev tooling never leave this repo.

## Stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [shadcn/ui](https://ui.shadcn.com/) — all ~60 components installed under `src/components/ui/`
- Theme tokens exported from Figma (`design.tokens/themes/default/`), transformed by [Style Dictionary](https://styledictionary.com/) into per-theme CSS and TS under `src/styles/` / `src/tokens/` — see [Theming](#theming)
- [Storybook](https://storybook.js.org/) — every component has a story with full interactive controls for its props

## Getting started

```bash
npm install
npm run storybook   # browse all components at http://localhost:6006
```

## Scripts

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Vite dev server for the (minimal) app shell |
| `npm run build` | Type-check and build the app for production |
| `npm run build:lib` | Build the publishable package into `dist/` (JS, `.d.ts`, and compiled `styles.css`) — see [Publishing](#publishing) |
| `npm run preview` | Preview the production build |
| `npm run storybook` | Start Storybook in dev mode |
| `npm run build-storybook` | Build a static Storybook site to `storybook-static/` |
| `npm run lint` | Run ESLint |
| `npm run transform-tokens` | Regenerate theme CSS/TS from Figma tokens via Style Dictionary |

## Adding more shadcn components

```bash
npx shadcn@latest add <component>
```

This project's `components.json` is already configured with the `@/*` path alias and Tailwind v4 setup, so newly added components will drop straight into `src/components/ui/`. Add a matching `<component>.stories.tsx` alongside it to get it into Storybook.

## Theming

Every shadcn component is styled purely through Tailwind utilities (`bg-primary`, `text-muted-foreground`, `rounded-lg`, ...) that resolve to CSS custom properties (`--primary`, `--muted-foreground`, `--radius`, ...). Components never hardcode a theme — swapping the values of those CSS variables re-themes the entire library.

### The default theme

Raw Figma token exports live in `design.tokens/themes/default/*.tokens.json` (colors, radius, spacing, typography, per-device layout, and per-state button/link colors). [Style Dictionary](https://styledictionary.com/) (`scripts/transform-tokens.mjs`) transforms them into:

- `src/styles/themes/default.css` — brand colors, base `--radius`, and responsive layout vars (`--margin`, `--gutter`, `--content-max-width`, ...) on bare `:root`, plus `.dark` overrides. This is what makes "default" the automatic fallback theme — no setup required.
- `src/styles/theme-scale.css` — shared (not per-theme) typography/spacing/radius scale and the `--color-*` aliases Tailwind needs to turn those CSS vars into utilities like `text-lg` or `rounded-xl`.
- `src/tokens/themes/default/*.ts` — the same tokens as plain TS objects (`theme.ts` for the shadcn-named subset above, plus `colors.ts`/`radius.ts`/`spacing.ts`/`text.ts`/`components.ts` for the full raw scale and per-state button/link palette), for apps that need tokens in JS — charts, inline styles, etc.

After re-exporting tokens from Figma into `design.tokens/themes/default/`, run:

```bash
npm run transform-tokens
```

`components.tokens.json` (hover/disabled/focus colors per button/link variant) is synced into `components.ts` as raw data only — it's not wired into any component's actual styling, since that would mean rewriting `button.tsx`'s hover/disabled logic rather than just generating variables.

### Adding another theme

Only "Default" exists today, but the system supports more:

1. Export the new theme's tokens from Figma into `design.tokens/themes/<name>/` (same file shape as `default/`).
2. Run `npm run transform-tokens -- --theme=<name>`. This generates `src/styles/themes/<name>.css`, scoped to `:root[data-theme="<name>"]` so it overrides the default theme wherever that attribute is set, and `src/tokens/themes/<name>/*.ts`.
3. Register the new theme in `src/tokens/index.ts`.

A consuming app opts into a non-default theme by importing its CSS and setting `data-theme="<name>"` on `<html>` — either by hand or via `<ThemeProvider theme="<name>">` (`src/components/theme-provider.tsx`). Omitting `data-theme` (or the `ThemeProvider` prop) always falls back to the default theme — no setup required for that case.

See `src/styles/themes/README.md` for the full walkthrough.

## Using this package in another app

Once installed (see [Publishing](#publishing) for how to get it into a project — locally or from the org's Azure DevOps feed), a consuming app gets three things from `@your-org/ui`:

1. **Components + `ThemeProvider`**, from the package root:

   ```tsx
   import { Button, Card, ThemeProvider } from "@your-org/ui"

   const App = () => (
     <ThemeProvider>{/* omit `theme`, or pass theme="default" — no setup needed */}
       <Card>
         <Button>Click me</Button>
       </Card>
     </ThemeProvider>
   )
   ```

2. **Compiled styles**, imported once near the app's entry point. This is a fully self-contained stylesheet (Tailwind utilities + the default theme's CSS variables already baked in) — the consuming app does **not** need Tailwind configured at all for these components to render correctly:

   ```ts
   import "@your-org/ui/styles.css"
   ```

3. **Theme tokens as plain JS/TS** (for charts, inline styles, dynamic theme pickers, etc.) and, if a future non-default theme is registered, its **raw CSS variables** to opt into:

   ```ts
   import { themes, type ThemeName } from "@your-org/ui/tokens"

   themes.default.primary // '#7f24ff'
   ```

   ```css
   @import "@your-org/ui/styles/themes/<name>.css"; /* only needed for a non-default theme */
   ```

Only components, `ThemeProvider`, shared utilities (`cn`), and tokens/styles are exported — Storybook stories and any test files are dev-only and are never built into `dist/`, so they can't be imported from the package.

## Publishing

The package name in `package.json` (`@your-org/ui`) is a placeholder — replace it with your real Azure DevOps org/npm scope before publishing for real.

### Building

```bash
npm run build:lib
```

This produces `dist/` with:

- `index.mjs` / `index.cjs` / `index.d.ts` — all components + `ThemeProvider` + `cn`
- `tokens.mjs` / `tokens.cjs` / `tokens.d.ts` — the token barrel (`./tokens` subpath export)
- `styles.css` — the compiled stylesheet (`./styles.css` subpath export)

`npm pack` (and `npm publish`) only ever includes `dist/` plus the raw `src/styles/` theme CSS (for the `./styles/*` export) — stories, tests, `src/App.tsx`, and all other dev-only source never leave this repo. `prepublishOnly` runs `build:lib` automatically, so `dist/` is always fresh when publishing.

### Testing locally, before publishing anywhere

```bash
npm pack                 # -> @your-org-ui-<version>.tgz
# in the consuming app:
npm install /path/to/@your-org-ui-<version>.tgz
```

`npm pack` runs the real build and packs exactly what would be published, so this is the most faithful local test. Alternatively, `npm link` works too, but `npm pack` + install catches "files" whitelist mistakes that `npm link` (which just symlinks the whole repo) would hide.

### Publishing to the Azure DevOps Artifacts feed

Assuming the org's npm feed already exists in Azure DevOps:

1. Point `publishConfig.registry` in `package.json` at your feed's registry URL (replace the `<your-org>/<your-project>/<your-feed>` placeholder), e.g.:
   ```
   https://pkgs.dev.azure.com/<org>/<project>/_packaging/<feed>/npm/registry/
   ```
2. Authenticate against the feed — either:
   - `vsts-npm-auth -config .npmrc` (adds a token to a local `.npmrc`), or
   - a Personal Access Token (`Packaging: Read & Write`) set as `//pkgs.dev.azure.com/<org>/_packaging/<feed>/npm/registry/:_authToken` in `.npmrc` (this is also how a CI pipeline authenticates — use a pipeline variable/secret, never commit a real token).
3. Bump `version` in `package.json` (Azure Artifacts, like npm, rejects re-publishing an existing version).
4. `npm publish`

Consuming apps then just need a matching feed entry in their own `.npmrc` (scoped to `@your-org`) and `npm install @your-org/ui`.
