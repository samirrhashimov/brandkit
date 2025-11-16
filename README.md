# Brandkit - NPM Icon Library

[![npm version](https://badge.fury.io/js/brandkitjs.svg)](https://www.npmjs.com/package/brandkitjs)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/brandkitjs.svg)](https://www.npmjs.com/package/brandkitjs)

A comprehensive React component library with 40+ brand icons for social media, development tools, and design software. Perfect for adding professional branding elements to your React applications.

## Features

- **40+ Professional SVG Icons** - Carefully crafted brand icons
- **React Components** - Drop-in React components for easy integration
- **Individual Exports** - Import only what you need
- **Search & Filter** - Built-in utilities to find and organize icons
- **Lightweight** - Minified size ~15KB, gzip ~5KB
- **Customizable** - Full control over size and color
- **Responsive** - Works perfectly on all screen sizes
- **TypeScript Ready** - Full JSX support

## NPM Usage (recommended)

- Package name: `brandkitjs` (published to npm)

Install (pick your package manager):

```bash
npm install brandkitjs
# or
# yarn add brandkitjs
# pnpm add brandkitjs
```

Quick notes:
- This package is published as ESM (`type: "module"`, `module` field). Use named imports so bundlers can tree-shake unused icons.
- Peer dependencies: `react` and `react-dom` — keep those in your project's dependencies.

Basic usage (tree-shakable - preferred):

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
  return <Github size="48px" color="#E34F26" />;
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

Dynamic selection (by id):

```jsx
import { Icon } from 'brandkitjs';

function DynamicIcon({ id }) {
  return <Icon id={id} size="24px" />;
}
```

Bundler tips
- Ensure your bundler prefers the `module` field (ESM) so tree-shaking works: Rollup, webpack (production mode + sideEffects:false), Parcel, Vite all work well.
- If you see unused icons in your final bundle, verify your bundler is using the ESM build and that you import named exports (not a large default object).

CommonJS / Node consumers
- The package is published as ESM. In a CommonJS-only environment, use dynamic import interop:

```js
(async () => {
  const pkg = await import('brandkitjs');
  const { Github } = pkg;
  // use Github
})();
```

CDN usage (ES module build)
- You can import the ESM build directly from a CDN for quick demos (modern browsers only):

```html
<script type="module">
  import { Github } from 'https://cdn.jsdelivr.net/npm/brandkitjs@1.0.2/dist/index.esm.js';
  // mount your React app that uses <Github />
</script>
```

Version pinning and upgrades
- Pin a specific version in `package.json` to avoid unexpected changes: `npm i brandkitjs@1.0.2`.
- Use `npm outdated` / `npm update` to manage updates.

TypeScript
- Type definitions are provided via the `types` field (`dist/index.d.ts`). You can import components normally in TSX files:

```tsx
import { Github, Icon } from 'brandkitjs';

const Cmp: React.FC = () => <Github size="24px" />;
```

If you want smaller runtime bundles, prefer named imports and let your bundler tree-shake unused icons.

## 📚 Available Icons

### Social Media (17)
Facebook, Instagram, Twitter, YouTube, LinkedIn, TikTok, Discord, Slack, Spotify, Twitch, Pinterest, Reddit, WhatsApp, Telegram, Snapchat, Medium, Google

### Development Tools (22)
React, Vue.js, Angular, Node.js, Python, JavaScript, TypeScript, Java, PHP, Git, Docker, MongoDB, PostgreSQL, VS Code, npm, HTML5, CSS3, Tailwind, Bootstrap, Sass, Flutter, Swift, Kotlin, Go, Ruby, WordPress

### Design Tools (1)
Figma

## Advanced Usage

### Get All Icons

Retrieve all available icons with metadata:

```jsx
import { getAllIcons } from 'brandkitjs';

const allIcons = getAllIcons();
console.log(allIcons); // Array of 40+ icon objects
```

### Filter by Category

Get icons by their category:

```jsx
import { getIconsByCategory } from 'brandkitjs';

const socialIcons = getIconsByCategory('social');
const devTools = getIconsByCategory('development');
```

### Search Icons

Search for icons by name or category:

```jsx
import { searchIcons } from 'brandkitjs';

const results = searchIcons('react');
// Returns: [{ id: 'react', name: 'React', ... }]

const pythonResults = searchIcons('python');
// Returns: [{ id: 'python', name: 'Python', ... }]
```

## 📋 All Icon Components

```jsx
import {
  // Social Media
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  LinkedIn,
  TikTok,
  Discord,
  Slack,
  Spotify,
  Twitch,
  Pinterest,
  Reddit,
  WhatsApp,
  Telegram,
  Snapchat,
  Medium,
  Google,

  // Development Tools
  ReactIcon,
  Vue,
  Angular,
  NodeJS,
  Python,
  JavaScript,
  TypeScript,
  Java,
  PHP,
  Git,
  Docker,
  MongoDB,
  PostgreSQL,
  VSCode,
  NPM,
  HTML5,
  CSS3,
  Tailwind,
  Bootstrap,
  Sass,
  Flutter,
  Swift,
  Kotlin,
  Go,
  Ruby,

  // Design Tools
  Figma,

  // Utilities
  Icon,
  getAllIcons,
  getIconsByCategory,
  searchIcons
} from 'brandkitjs';

```

## Component Props

All icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'24px'` | Icon size (px, em, rem, etc.) |
| `color` | string | Icon default color | SVG fill color (hex, rgb, rgba) |
| `className` | string | undefined | CSS class name |
| `style` | object | undefined | Inline CSS styles |

## Examples

### Social Media Bar

```jsx
import React from 'react';
import { Facebook, Instagram, Twitter, LinkedIn } from 'brandkitjs';

export default function SocialBar() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Facebook size="32px" />
      <Instagram size="32px" />
      <Twitter size="32px" />
      <LinkedIn size="32px" />
    </div>
  );
}
```

### Tech Stack Display

```jsx
import React from 'react';
import { ReactIcon, NodeJS, MongoDB, Docker } from 'brandkitjs';

export default function TechStack() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px' }}>
      <div>
        <ReactIcon size="48px" color="#61DAFB" />
        <p>React</p>
      </div>
      <div>
        <NodeJS size="48px" color="#339933" />
        <p>Node.js</p>
      </div>
      <div>
        <MongoDB size="48px" color="#47A248" />
        <p>MongoDB</p>
      </div>
      <div>
        <Docker size="48px" color="#2496ED" />
        <p>Docker</p>
      </div>
    </div>
  );
}
```

### Icon Grid with Search

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

## Icon Data Structure

Each icon object contains:

```javascript
{
  id: 'github',           // Unique identifier
  name: 'GitHub',         // Display name
  category: 'development', // Category type
  color: '#181717',       // Brand color
  svg: '<svg>...</svg>'   // SVG content
}
```

## TypeScript Support

The package works great with TypeScript. All components accept standard React props and JSX types are fully supported.

```tsx
import React from 'react';
import { Icon, Github } from 'brandkitjs';

interface IconProps {
  size?: string;
  color?: string;
}

const MyComponent: React.FC<IconProps> = ({ size = '24px', color }) => (
  <div>
    <Github size={size} color={color} />
  </div>
);

export default MyComponent;
```

## Performance

- All icons are SVG-based for crisp rendering at any size
- Tree-shakeable - unused icons are eliminated in production builds
- No external dependencies beyond React
- Optimized for performance with minimal re-renders

## License

MIT License - see [LICENSE](https://github.com/samirrhashimov/brandkit/blob/main/LICENSE) for details

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue on [GitHub](https://github.com/samirrhashimov/brandkit).

## 📞 Support

- 📧 Email: samirhasimov10@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/samirrhashimov/brandkit/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/samirrhashimov/brandkit/discussions)

## 🔗 Links

- [GitHub Repository](https://github.com/samirrhashimov/brandkit)
- [NPM Package](https://www.npmjs.com/package/brandkitjs)
- [License](https://github.com/samirrhashimov/brandkit/blob/main/LICENSE)

---

**Made with ❤️ by Samir Hashimov**

Version: 1.0.2 | Last Updated: November 2025
