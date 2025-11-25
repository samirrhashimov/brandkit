# Brandkit - NPM Icon Library

[![npm version](https://badge.fury.io/js/brandkitjs.svg)](https://www.npmjs.com/package/brandkitjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/brandkitjs.svg)](https://www.npmjs.com/package/brandkitjs)

Brandkit is a lightweight, tree-shakeable React icon library providing high-quality SVG brand icons for social media, developer tools, languages, and design tools. It is designed for easy integration, customization, and minimal bundle impact.

## Highlights

- **Total Icons:** 42
- **Categories:** Social (16), Development & Tools (25), Design (1)
- **Formats:** SVG (scalable, editable)
- **Bundle-friendly:** ESM build with named exports for tree-shaking
- **Customization:** `size`, `color`, `className`, and `style` props

## Features

- **React Components** - Drop-in React components for easy integration
- **Individual Exports** - Import only the icons you need to keep bundles small
- **Search & Filter Utilities** - Helpers to find icons by name or category
- **Lightweight** - Minified size ~15KB, gzip ~5KB (approx.)
- **TypeScript Ready** - Provided type definitions for easy TSX usage

## NPM Usage (recommended)

- Package name: `brandkitjs` (published to npm)

Install (choose your package manager):

```powershell
npm install brandkitjs
# or
# yarn add brandkitjs
# pnpm add brandkitjs
```

Notes:
- The package is published as ESM (`type: "module"`, `module` field). Use named imports so bundlers can tree-shake unused icons.
- Peer dependencies: `react` and `react-dom`.

Basic usage:

```jsx
import { Github } from 'brandkitjs';

export default function App() {
  return <Github />;
}
```

Customize size and color:

```jsx
import { Github } from 'brandkitjs';

export default function App() {
  return <Github size="48px" color="#181717" />;
}
```

Import only what you need (bundle-friendly):

```jsx
import { Facebook, Instagram, Github } from 'brandkitjs';

function SocialLinks() {
  return (
    <div style={{ display: 'flex', gap: 12 }}>
      <Facebook size="24px" />
      <Instagram size="24px" />
      <Github size="24px" />
    </div>
  );
}
```

CommonJS / Node consumers
- In CommonJS-only environments use dynamic import interop:

```js
(async () => {
  const pkg = await import('brandkitjs');
  const { Github } = pkg;
  // use Github
})();
```

CDN usage (ES module build)

```html
<script type="module">
  import { Github } from 'https://cdn.jsdelivr.net/npm/brandkitjs@1.0.4/dist/index.esm.js';
  // mount your React app that uses <Github />
</script>
```

## Icon Catalog

Brandkit includes 42 icons across three categories. Below is a concise catalog with IDs and brand colors (hex) taken from the icon metadata.

## Social Icons (16)

| Name       | ID         | Color     |
|-----------|------------|-----------|
| Facebook  | `facebook` | `#1877F2` |
| Instagram | `instagram` | `#E4405F` |
| Twitter   | `twitter`  | `#1DA1F2` |
| YouTube   | `youtube`  | `#FF0000` |
| Google    | `google`   | `#4285F4` |
| LinkedIn  | `linkedin` | `#0A66C2` |
| TikTok    | `tiktok`   | `#000000` |
| Discord   | `discord`  | `#5865F2` |
| Spotify   | `spotify`  | `#1DB954` |
| Twitch    | `twitch`   | `#9146FF` |
| Pinterest | `pinterest`| `#E60023` |
| Reddit    | `reddit`   | `#FF4500` |
| WhatsApp  | `whatsapp` | `#25D366` |
| Telegram  | `telegram` | `#26A5E4` |
| Snapchat  | `snapchat` | `#FFFC00` |
| Medium    | `medium`   | `#000000` |


## Development & Tools (25)

| Name        | ID           | Color     |
|-------------|--------------|-----------|
| GitHub      | `github`     | `#181717` |
| NPM         | `npm`        | `#CB3837` |
| React       | `react`      | `#61DAFB` |
| Vue.js      | `vue`        | `#4FC08D` |
| Slack       | `slack`      | `#4A154B` |
| HTML5       | `html5`      | `#E34F26` |
| CSS3        | `css3`       | `#1572B6` |
| JavaScript  | `javascript` | `#F7DF1E` |
| Python      | `python`     | `#3776AB` |
| Java        | `java`       | `#007396` |
| Node.js     | `nodejs`     | `#339933` |
| TypeScript  | `typescript` | `#3178C6` |
| Angular     | `angular`    | `#DD0031` |
| Docker      | `docker`     | `#2496ED` |
| Git         | `git`        | `#F05032` |
| MongoDB     | `mongodb`    | `#47A248` |
| VS Code     | `vscode`     | `#007ACC` |
| Bootstrap   | `bootstrap`  | `#7952B3` |
| Tailwind    | `tailwind`   | `#06B6D4` |
| WordPress   | `wordpress`  | `#21759B` |
| Sass        | `sass`       | `#CC6699` |
| Flutter     | `flutter`    | `#02569B` |
| Kotlin      | `kotlin`     | `#7F52FF` |
| Go          | `go`         | `#00ADD8` |
| Ruby        | `ruby`       | `#CC342D` |


## Design (1)

| Name  | ID      | Color     |
|-------|---------|-----------|
| Figma | `figma` | `#F24E1E` |

## Utilities

- `getAllIcons()` — Returns an array of all icon metadata objects.
- `getIconsByCategory(category)` — Filter icons by `social`, `development`, or `design`.
- `searchIcons(query)` — Search by name or id (case-insensitive).
- `Icon` component — Dynamic renderer: `<Icon id="github" size="24px" />`.

Example: dynamic icon grid

```jsx
import React, { useState } from 'react';
import { searchIcons, Icon } from 'brandkitjs';

export default function IconGrid() {
  const [query, setQuery] = useState('');
  const icons = query ? searchIcons(query) : [];

  return (
    <div>
      <input
        type="text"
        placeholder="Search icons..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
        {icons.map((icon) => (
          <div key={icon.id}>
            <Icon id={icon.id} size="32px" />
            <p>{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## Popular Combinations

- Full Stack Developer: `html5,css3,javascript,react,nodejs,mongodb`
- Web Designer: `html5,css3,figma,bootstrap`
- Social Media Manager: `facebook,instagram,twitter,linkedin,pinterest`
- DevOps: `docker,git,github`
- Mobile Developer: `flutter,react`

## Component Props

All icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'24px'` | Icon size (px, em, rem, etc.) |
| `color` | string | Icon default color | SVG fill color (hex, rgb, rgba) |
| `className` | string | undefined | CSS class name |
| `style` | object | undefined | Inline CSS styles |

## Performance

- SVG-based icons for crisp rendering at any size
- Tree-shakeable ESM build to eliminate unused icons in production
- No runtime dependencies beyond React

## TypeScript

Type definitions are provided via the `types` field (`dist/index.d.ts`). Import components normally in TSX files.

## Contributing

Contributions are welcome! Submit a Pull Request or open an Issue on [GitHub](https://github.com/samirrhashimov/brandkit).

## Support & Links

- **Email:** samirrhashimov@proton.me
- **Issues:** https://github.com/samirrhashimov/brandkit/issues
- **Repository:** https://github.com/samirrhashimov/brandkit
- **NPM Package:** https://www.npmjs.com/package/brandkitjs

---
