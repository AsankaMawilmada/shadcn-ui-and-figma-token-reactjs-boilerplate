// Library build config — produces the published npm package's JS + types.
// Separate from vite.config.ts (the app/Storybook dev config) so that
// building the package never pulls in Storybook/vitest concerns, and vice
// versa. Run via `npm run build:lib` (see package.json), which also runs
// vite.css.config.ts to emit the compiled stylesheet.
import path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"

// Runtime dependencies imported by component source (directly or via
// subpath, e.g. "@base-ui/react/button") — kept external so the package
// doesn't bundle copies of them; consumers install them from this package's
// own "dependencies"/"peerDependencies". Anything NOT listed here (e.g. the
// Tailwind/build tooling) is dev-only and never imported by component code.
const externalPackages = [
  "react",
  "react-dom",
  "@base-ui/react",
  "@shadcn/react",
  "class-variance-authority",
  "clsx",
  "cmdk",
  "embla-carousel-react",
  "input-otp",
  "lucide-react",
  "react-day-picker",
  "react-resizable-panels",
  "recharts",
  "tailwind-merge",
]

export default defineConfig({
  plugins: [
    react(),
    dts({
      tsconfigPath: "./tsconfig.lib.json",
      entryRoot: "src",
      include: ["src/**/*.ts", "src/**/*.tsx"],
      exclude: ["src/**/*.stories.tsx", "src/App.tsx", "src/main.tsx"],
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // This config only ever builds the library (never an app page), so the
  // app's public/ dir (favicon, etc.) shouldn't be copied into dist.
  publicDir: false,
  build: {
    outDir: "dist",
    emptyOutDir: true,
    lib: {
      entry: {
        index: path.resolve(__dirname, "src/index.ts"),
        tokens: path.resolve(__dirname, "src/tokens/index.ts"),
      },
      formats: ["es", "cjs"],
      fileName: (format, entryName) => `${entryName}.${format === "es" ? "mjs" : "cjs"}`,
    },
    rollupOptions: {
      external: (id) =>
        externalPackages.some((pkg) => id === pkg || id.startsWith(`${pkg}/`)) ||
        id.startsWith("react/"),
    },
  },
})
