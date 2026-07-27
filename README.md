# shadcn/ui + Figma Tokens React Boilerplate

A React + TypeScript + Vite starter with the full [shadcn/ui](https://ui.shadcn.com/) component set (base-ui primitives), a Tailwind v4 theme generated from Figma design tokens, and [Storybook](https://storybook.js.org/) as the primary way to browse and develop components.

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

### Consuming the tokens from another app

```ts
import { themes, type ThemeName } from "shadcn-test/tokens"

themes.default.primary // '#7f24ff'
```

```css
@import "shadcn-test/styles/themes/default.css";
@import "shadcn-test/styles/theme-scale.css";
```

(Adjust the package specifier to whatever this repo is installed/aliased as in the consuming app — e.g. a workspace package name if used via a pnpm/yarn workspace.)

### Adding another theme

Only "Default" exists today, but the system supports more:

1. Export the new theme's tokens from Figma into `design.tokens/themes/<name>/` (same file shape as `default/`).
2. Run `npm run transform-tokens -- --theme=<name>`. This generates `src/styles/themes/<name>.css`, scoped to `:root[data-theme="<name>"]` so it overrides the default theme wherever that attribute is set, and `src/tokens/themes/<name>/*.ts`.
3. Register the new theme in `src/tokens/index.ts`.

A consuming app opts into a non-default theme by importing its CSS and setting `data-theme="<name>"` on `<html>` — either by hand or via `<ThemeProvider theme="<name>">` (`src/components/theme-provider.tsx`). Omitting `data-theme` (or the `ThemeProvider` prop) always falls back to the default theme — no setup required for that case.

See `src/styles/themes/README.md` for the full walkthrough.
