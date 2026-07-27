# shadcn/ui + Figma Tokens React Boilerplate

A React + TypeScript + Vite starter with the full [shadcn/ui](https://ui.shadcn.com/) component set (base-ui primitives), a Tailwind v4 theme generated from Figma design tokens, and [Storybook](https://storybook.js.org/) as the primary way to browse and develop components.

## Stack

- [Vite](https://vite.dev/) + React 19 + TypeScript
- [Tailwind CSS v4](https://tailwindcss.com/) via `@tailwindcss/vite`
- [shadcn/ui](https://ui.shadcn.com/) — all ~60 components installed under `src/components/ui/`
- Theme tokens exported from Figma (`src/components/Themes/Default/Tokens/`), mapped onto shadcn's CSS variables in `src/index.css`
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

## Adding more shadcn components

```bash
npx shadcn@latest add <component>
```

This project's `components.json` is already configured with the `@/*` path alias and Tailwind v4 setup, so newly added components will drop straight into `src/components/ui/`. Add a matching `<component>.stories.tsx` alongside it to get it into Storybook.

## Theme

The Tailwind theme (`src/index.css`) is generated from the Figma tokens in `src/components/Themes/Default/Tokens/`. To pick up new tokens, update the values in `:root` and `.dark` in `src/index.css` to match.
