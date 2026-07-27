import { readFileSync } from 'node:fs';
import StyleDictionary from 'style-dictionary';

// Regenerates this theme's design tokens from design.tokens/themes/<name>/*.json
// (raw Figma exports) into:
//   - src/tokens/themes/<name>/*.ts   raw per-category token dumps (colors,
//     components, radius, spacing, text) + theme.ts (flat shadcn CSS-variable-
//     named object: background, primary, radius, ...), for JS/TS consumers.
//   - src/styles/themes/<name>.css    the :root (or :root[data-theme="name"])
//     block Tailwind's own theme reads: shadcn color vars, base --radius, and
//     responsive layout vars (margin/gutter/content-max-width, mobile-first
//     with tablet/desktop @media overrides).
//   - src/styles/theme-scale.css      shared (not per-theme) @theme inline
//     block: typography scale, spacing scale, radius scale, and the
//     `--color-*` aliases Tailwind needs to turn CSS vars into utilities.
//     Shared because it only contains var() references and literal scale
//     values, not brand colors — every theme uses the same one.
//
// Usage:
//   npm run transform-tokens                  # syncs the default theme
//   npm run transform-tokens -- --theme=acme  # syncs design.tokens/themes/acme/*.json
//     (export the new theme's tokens from Figma there first, same shape as
//     default/, then register it in src/tokens/index.ts)
//
// Components.tokens.json (per-state button/link colors) IS synced into
// src/tokens/themes/<name>/components.ts as raw data, but deliberately NOT
// wired into any component's CSS — consuming it in button.tsx etc. would mean
// rewriting their hover/disabled/focus styling logic, not just generating
// variables, so that's left as a separate decision.
//
// Note: theme-scale.css (typography/spacing/radius scale) is intentionally
// shared, not per-theme — it assumes every theme uses the same scale, only
// brand colors differ. Re-running this script for a second theme regenerates
// theme-scale.css from THAT theme's scale tokens too, so if scales ever do
// need to diverge per theme, this sharing assumption needs revisiting.

const themeArg = process.argv.find((a) => a.startsWith('--theme='));
const THEME_NAME = themeArg ? themeArg.slice('--theme='.length) : 'default';
const TOKENS_DIR = `design.tokens/themes/${THEME_NAME}`;
// 'default' is the automatic fallback theme, so it stays bare `:root`. Any
// other theme uses `:root[data-theme="name"]` instead, which reliably
// outspecifies (and overrides) the default wherever that attribute is set.
const SELECTOR = THEME_NAME === 'default' ? ':root' : `:root[data-theme="${THEME_NAME}"]`;

function loadJson(file) {
  return JSON.parse(readFileSync(`${TOKENS_DIR}/${file}`, 'utf8'));
}

// Desktop/Tablet/Mobile.tokens.json share identical top-level key names
// (margin, gutter, breakpoints, ...) to represent per-device values, which
// Style Dictionary's source merging would deep-merge into one tree and
// silently overwrite. Loaded directly here instead, kept out of the main
// `source` glob below.
const desktop = loadJson('desktop.tokens.json');
const tablet = loadJson('tablet.tokens.json');
const mobile = loadJson('mobile.tokens.json');

// Helper function updated to support both W3C ($value) and legacy (value) specs
function objectifyTokens(obj) {
  if (Object.prototype.hasOwnProperty.call(obj, 'value')) {
    return obj.value;
  }
  if (Object.prototype.hasOwnProperty.call(obj, '$value')) {
    return obj.$value;
  }
  const result = {};
  for (const key in obj) {
    result[key] = objectifyTokens(obj[key]);
  }
  return result;
}

function pick(tokens, dotPath) {
  const node = dotPath.split('.').reduce((n, key) => n?.[key], tokens);
  if (!node || node.$value === undefined) throw new Error(`Token not found: ${dotPath}`);
  return node.$value;
}
const round = (n) => Math.round(n * 10000) / 10000;
const hex = (tokens, path) => pick(tokens, path).toLowerCase();
const num = (tokens, path) => pick(tokens, path);
const rem = (tokens, path) => `${round(num(tokens, path) / 16)}rem`;
const px = (n) => `${n}px`;

const BORDER_INPUT_SOURCE = 'primitive'; // 'primitive' | 'semantic' — see README note below.
// --border/--input are pinned to the primitive grayscale-300 swatch
// (#D0D5DD) rather than the semantic `border.default` (#EAECF0, used by
// --sidebar-border instead), to match this theme's original hand-authored
// visual output. Flip to 'semantic' to have them track `border.default`
// going forward instead.

function themeRootVars(tokens) {
  const borderInputPath = BORDER_INPUT_SOURCE === 'primitive' ? '_colors._grayscale._300' : 'border.default';
  return {
    background: hex(tokens, 'surface.default'),
    foreground: hex(tokens, 'text.default'),
    card: hex(tokens, 'surface.default'),
    'card-foreground': hex(tokens, 'text.default'),
    popover: hex(tokens, 'surface.default'),
    'popover-foreground': hex(tokens, 'text.default'),
    primary: hex(tokens, 'surface.brand'),
    'primary-foreground': hex(tokens, 'text.inverse'),
    secondary: hex(tokens, 'surface.subtle'),
    'secondary-foreground': hex(tokens, 'text.default'),
    muted: hex(tokens, 'surface.subtle'),
    'muted-foreground': hex(tokens, 'text.subtle'),
    accent: hex(tokens, 'surface.brand-subtler'),
    'accent-foreground': hex(tokens, 'text.brand-bold'),
    destructive: hex(tokens, 'text.status.error'),
    border: hex(tokens, borderInputPath),
    input: hex(tokens, borderInputPath),
    ring: hex(tokens, 'border.focused'),
    'chart-1': hex(tokens, 'border.accent.red'),
    'chart-2': hex(tokens, 'border.accent.green'),
    'chart-3': hex(tokens, 'border.accent.maroon'),
    'chart-4': hex(tokens, 'border.accent.aqua'),
    'chart-5': hex(tokens, 'border.accent.gold'),
    radius: rem(tokens, 'radius.radius-md'),
    sidebar: hex(tokens, 'surface.default'),
    'sidebar-foreground': hex(tokens, 'text.default'),
    'sidebar-primary': hex(tokens, 'surface.brand'),
    'sidebar-primary-foreground': hex(tokens, 'text.inverse'),
    'sidebar-accent': hex(tokens, 'surface.subtle'),
    'sidebar-accent-foreground': hex(tokens, 'text.default'),
    'sidebar-border': hex(tokens, 'border.default'),
    'sidebar-ring': hex(tokens, 'border.focused'),
  };
}
function deviceLayoutVars(device) {
  return {
    margin: px(device.margin.$value),
    gutter: px(device.gutter.$value),
    'content-max-width': px(device['content max-width'].$value),
  };
}
function staticLayoutVars(device) {
  const w = device.widths;
  const c = device.containers;
  return {
    'container-padding-mobile': px(c['container-padding-mobile'].$value),
    'container-padding-desktop': px(c['container-padding-desktop'].$value),
    'container-max-width-desktop': px(c['container-max-width-desktop'].$value),
    'paragraph-max-width': px(device['paragraph-max-width'].$value),
    'width-xxs': px(w['width-xxs'].$value),
    'width-xs': px(w['width-xs'].$value),
    'width-sm': px(w['width-sm'].$value),
    'width-md': px(w['width-md'].$value),
    'width-lg': px(w['width-lg'].$value),
    'width-xl': px(w['width-xl'].$value),
    'width-2xl': px(w['width-2xl'].$value),
    'width-3xl': px(w['width-3xl'].$value),
    'width-4xl': px(w['width-4xl'].$value),
    'width-5xl': px(w['width-5xl'].$value),
    'width-6xl': px(w['width-6xl'].$value),
  };
}

function cssBlock(selector, vars) {
  return [`${selector} {`, ...Object.entries(vars).map(([name, value]) => `  --${name}: ${value};`), '}'].join('\n');
}

// Dark-mode color overrides. Not sourced from Figma — there's no dark-theme
// token export yet — so these are shadcn's own stock dark palette, hand-
// maintained here until a real "Dark" theme gets exported from Figma and
// registered in THEMES the same way "default" is.
const DARK_VARS = {
  background: 'oklch(0.145 0 0)',
  foreground: 'oklch(0.985 0 0)',
  card: 'oklch(0.205 0 0)',
  'card-foreground': 'oklch(0.985 0 0)',
  popover: 'oklch(0.205 0 0)',
  'popover-foreground': 'oklch(0.985 0 0)',
  primary: 'oklch(0.922 0 0)',
  'primary-foreground': 'oklch(0.205 0 0)',
  secondary: 'oklch(0.269 0 0)',
  'secondary-foreground': 'oklch(0.985 0 0)',
  muted: 'oklch(0.269 0 0)',
  'muted-foreground': 'oklch(0.708 0 0)',
  accent: 'oklch(0.269 0 0)',
  'accent-foreground': 'oklch(0.985 0 0)',
  destructive: 'oklch(0.704 0.191 22.216)',
  border: 'oklch(1 0 0 / 10%)',
  input: 'oklch(1 0 0 / 15%)',
  ring: 'oklch(0.556 0 0)',
  'chart-1': 'oklch(0.87 0 0)',
  'chart-2': 'oklch(0.556 0 0)',
  'chart-3': 'oklch(0.439 0 0)',
  'chart-4': 'oklch(0.371 0 0)',
  'chart-5': 'oklch(0.269 0 0)',
  sidebar: 'oklch(0.205 0 0)',
  'sidebar-foreground': 'oklch(0.985 0 0)',
  'sidebar-primary': 'oklch(0.488 0.243 264.376)',
  'sidebar-primary-foreground': 'oklch(0.985 0 0)',
  'sidebar-accent': 'oklch(0.269 0 0)',
  'sidebar-accent-foreground': 'oklch(0.985 0 0)',
  'sidebar-border': 'oklch(1 0 0 / 10%)',
  'sidebar-ring': 'oklch(0.556 0 0)',
};

StyleDictionary.registerFormat({
  name: 'ts/nested-groups',
  format: function ({ dictionary }) {
    const rawTokens = objectifyTokens(dictionary.tokens);
    return Object.entries(rawTokens)
      .map(([groupName, groupValues]) => `export const ${groupName} = ${JSON.stringify(groupValues, null, 2)} as const;\n`)
      .join('\n');
  },
});

StyleDictionary.registerFormat({
  name: 'ts/theme',
  format: function ({ dictionary }) {
    const vars = themeRootVars(dictionary.unfilteredTokens);
    const lines = Object.entries(vars).map(([name, value]) => `  ${JSON.stringify(name)}: ${JSON.stringify(value)},`);
    return [
      `// "${THEME_NAME}" theme tokens, in shadcn CSS-variable naming (see src/styles/themes/${THEME_NAME}.css)`,
      'export const theme = {',
      ...lines,
      '} as const;',
      '',
    ].join('\n');
  },
});

StyleDictionary.registerFormat({
  name: 'css/theme-root',
  format: function ({ dictionary }) {
    const vars = themeRootVars(dictionary.unfilteredTokens);
    const root = cssBlock(SELECTOR, { ...vars, ...staticLayoutVars(desktop), ...deviceLayoutVars(mobile) });
    const tabletBlock = [
      `@media (min-width: ${px(tablet.breakpoints.breakpoint.$value)}) {`,
      `  ${cssBlock(SELECTOR, deviceLayoutVars(tablet)).split('\n').join('\n  ')}`,
      '}',
    ].join('\n');
    const desktopBlock = [
      `@media (min-width: ${px(desktop.breakpoints.breakpoint.$value)}) {`,
      `  ${cssBlock(SELECTOR, deviceLayoutVars(desktop)).split('\n').join('\n  ')}`,
      '}',
    ].join('\n');
    const darkBlock = cssBlock(`${SELECTOR}.dark`, DARK_VARS);
    return [
      `/* "${THEME_NAME}" theme tokens (${TOKENS_DIR}) */`,
      '/* Generated by scripts/transform-tokens.mjs — do not hand-edit, re-run `npm run transform-tokens` instead */',
      root,
      '',
      darkBlock,
      '',
      tabletBlock,
      '',
      desktopBlock,
      '',
    ].join('\n');
  },
});

StyleDictionary.registerFormat({
  name: 'css/theme-scale',
  format: function ({ dictionary }) {
    const tokens = dictionary.unfilteredTokens;
    const colorNames = Object.keys(themeRootVars(tokens)).filter((k) => k !== 'radius');
    const vars = {
      'font-heading': 'var(--font-sans)',
      'font-sans': `'${pick(tokens, 'family.family-base')}', 'Geist Variable', sans-serif`,
      'text-xs': rem(tokens, 'size.size-xs'),
      'text-sm': rem(tokens, 'size.size-sm'),
      'text-base': rem(tokens, 'size.size-md'),
      'text-lg': rem(tokens, 'size.size-lg'),
      'text-xl': rem(tokens, 'size.size-xl'),
      'text-2xl': rem(tokens, 'size.size-2xl'),
      'text-3xl': rem(tokens, 'size.size-3xl'),
      'text-4xl': rem(tokens, 'size.size-4xl'),
      'text-5xl': rem(tokens, 'size.size-5xl'),
      'text-6xl': rem(tokens, 'size.size-6xl'),
      'text-7xl': rem(tokens, 'size.size-7xl'),
      'font-weight-normal': num(tokens, 'weight.weight-regular'),
      'font-weight-medium': num(tokens, 'weight.weight-medium'),
      'font-weight-bold': num(tokens, 'weight.weight-bold'),
      'leading-tight': round(num(tokens, 'lineheight.lineheight-tight')),
      'leading-snug': round(num(tokens, 'lineheight.lineheight-snug')),
      'leading-normal': round(num(tokens, 'lineheight.lineheight-normal')),
      'leading-relaxed': round(num(tokens, 'lineheight.lineheight-relaxed')),
      'spacing-none': rem(tokens, 'spacing.spacing-none'),
      'spacing-xxs': rem(tokens, 'spacing.spacing-xxs'),
      'spacing-xs': rem(tokens, 'spacing.spacing-xs'),
      'spacing-sm': rem(tokens, 'spacing.spacing-sm'),
      'spacing-md': rem(tokens, 'spacing.spacing-md'),
      'spacing-lg': rem(tokens, 'spacing.spacing-lg'),
      'spacing-xl': rem(tokens, 'spacing.spacing-xl'),
      'spacing-2xl': rem(tokens, 'spacing.spacing-2xl'),
      'spacing-3xl': rem(tokens, 'spacing.spacing-3xl'),
      'spacing-4xl': rem(tokens, 'spacing.spacing-4xl'),
      'spacing-6xl': rem(tokens, 'spacing.spacing-6xl'),
      'spacing-7xl': rem(tokens, 'spacing.spacing-7xl'),
      'spacing-8xl': rem(tokens, 'spacing.spacing-8xl'),
      'spacing-10xl': rem(tokens, 'spacing.spacing-10xl'),
      ...Object.fromEntries(colorNames.slice().reverse().map((name) => [`color-${name}`, `var(--${name})`])),
      'radius-xs': rem(tokens, 'radius.radius-xs'),
      'radius-sm': rem(tokens, 'radius.radius-sm'),
      'radius-md': rem(tokens, 'radius.radius-md'),
      'radius-lg': 'var(--radius)',
      'radius-xl': rem(tokens, 'radius.radius-xl'),
      'radius-2xl': rem(tokens, 'radius.radius-2xl'),
      'radius-3xl': rem(tokens, 'radius.radius-3xl'),
      'radius-4xl': 'calc(var(--radius) * 2.6)', // no Figma token; kept for existing rounded-4xl usage (badge.tsx)
      'radius-full': px(num(tokens, 'radius.radius-full')),
    };
    return [
      '/* Shared @theme inline scale (typography, spacing, radius, color-* aliases) — same across all themes */',
      '/* Generated by scripts/transform-tokens.mjs — do not hand-edit, re-run `npm run transform-tokens` instead */',
      '@theme inline {',
      ...Object.entries(vars).map(([name, value]) => `  --${name}: ${value};`),
      '}',
      '',
    ].join('\n');
  },
});

// Register the custom format using Style Dictionary v4 syntax
const sd = new StyleDictionary({
  // Desktop/Tablet/Mobile.tokens.json are deliberately excluded here: they
  // share identical top-level key names (margin, gutter, breakpoints, ...)
  // to represent per-device values, which Style Dictionary would otherwise
  // deep-merge into one tree and silently overwrite. Loaded separately above.
  source: [`${TOKENS_DIR}/{colors,components,radius,spacing,style,text}.tokens.json`],
  log: { warnings: 'disabled' }, // the only collisions left are harmless $extensions Figma-mode metadata
  platforms: {
    ts: {
      transformGroup: 'js',
      buildPath: `src/tokens/themes/${THEME_NAME}/`,
      files: [
        {
          destination: 'colors.ts',
          format: 'ts/nested-groups',
          filter: (token) => ['surface', 'border', 'text', 'icons', 'alpha'].includes(token.path[0]),
        },
        {
          destination: 'components.ts',
          format: 'ts/nested-groups',
          filter: (token) => ['buttons', 'link'].includes(token.path[0]),
        },
        { destination: 'radius.ts', format: 'ts/nested-groups', filter: (token) => token.path[0] === 'radius' },
        { destination: 'spacing.ts', format: 'ts/nested-groups', filter: (token) => token.path[0] === 'spacing' },
        {
          destination: 'text.ts',
          format: 'ts/nested-groups',
          filter: (token) => ['family', 'size', 'weight', 'lineheight'].includes(token.path[0]),
        },
        { destination: 'theme.ts', format: 'ts/theme', filter: (token) => token.path[0] === 'surface' },
      ],
    },
    css: {
      // 'js' (not 'css') transformGroup deliberately — the built-in css
      // transform group applies unit conversions to number tokens that would
      // conflict with the manual rem()/px() conversion done in the custom
      // formats above, which read raw resolved values off unfilteredTokens.
      transformGroup: 'js',
      buildPath: 'src/styles/',
      files: [
        { destination: `themes/${THEME_NAME}.css`, format: 'css/theme-root', filter: (token) => token.path[0] === 'surface' },
        { destination: 'theme-scale.css', format: 'css/theme-scale', filter: (token) => token.path[0] === 'surface' },
      ],
    },
  },
});

await sd.buildAllPlatforms();
console.log(`Synced "${THEME_NAME}" theme -> src/styles/themes/${THEME_NAME}.css, src/styles/theme-scale.css, src/tokens/themes/${THEME_NAME}/*.ts`);
