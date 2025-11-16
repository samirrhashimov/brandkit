# Brandkit - NPM Icon Library

[![npm version](https://badge.fury.io/js/brandkit.svg)](https://www.npmjs.com/package/brandkit)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dm/brandkit.svg)](https://www.npmjs.com/package/brandkit)

A comprehensive React component library with 40+ brand icons for social media, development tools, and design software. Perfect for adding professional branding elements to your React applications.

## ✨ Features

- 🎨 **40+ Professional SVG Icons** - Carefully crafted brand icons
- ⚛️ **React Components** - Drop-in React components for easy integration
- 🎯 **Individual Exports** - Import only what you need
- 🔍 **Search & Filter** - Built-in utilities to find and organize icons
- 📦 **Lightweight** - Minified size ~15KB, gzip ~5KB
- 🎪 **Customizable** - Full control over size and color
- 📱 **Responsive** - Works perfectly on all screen sizes
- ✅ **TypeScript Ready** - Full JSX support

## 📦 Installation

Install the package using npm:

```bash
npm install brandkit
```

Or with yarn:

```bash
yarn add brandkit
```

Or with pnpm:

```bash
pnpm add brandkit
```

## 🚀 Quick Start

### Basic Usage

```jsx
import { LogoHtml } from 'brandkit';

export default function App() {
  return <LogoHtml />;
}
```

### Customize Size and Color

```jsx
import { LogoHtml } from 'brandkit';

export default function App() {
  return <LogoHtml size="48px" color="#E34F26" />;
}
```

### Use Individual Icon Components

```jsx
import { Facebook, Instagram, Github, Twitter } from 'brandkit';

export default function SocialLinks() {
  return (
    <div className="social-icons">
      <Facebook size="24px" />
      <Instagram size="24px" />
      <Github size="24px" />
      <Twitter size="24px" />
    </div>
  );
}
```

### Dynamic Icon Selection

Use the `Icon` component to dynamically select icons by ID:

```jsx
import { Icon } from 'brandkit';

export default function App() {
  return (
    <div>
      <Icon id="github" size="24px" />
      <Icon id="react" size="32px" color="#61DAFB" />
      <Icon id="nodejs" size="24px" />
    </div>
  );
}
```

## 📚 Available Icons

### Social Media (16)
Facebook, Instagram, Twitter, YouTube, LinkedIn, TikTok, Discord, Slack, Spotify, Twitch, Pinterest, Reddit, WhatsApp, Telegram, Snapchat, Medium

### Development Tools (22)
React, Vue.js, Angular, Node.js, Python, JavaScript, TypeScript, Java, PHP, Git, Docker, MongoDB, PostgreSQL, VS Code, npm, HTML5, CSS3, Tailwind, Bootstrap, Sass, Flutter, Swift, Kotlin, Go, Ruby, WordPress

### Design Tools (2)
Figma, Google

## 🔧 Advanced Usage

### Get All Icons

Retrieve all available icons with metadata:

```jsx
import { getAllIcons } from 'brandkit';

const allIcons = getAllIcons();
console.log(allIcons); // Array of 40+ icon objects
```

### Filter by Category

Get icons by their category:

```jsx
import { getIconsByCategory } from 'brandkit';

const socialIcons = getIconsByCategory('social');
const devTools = getIconsByCategory('development');
```

### Search Icons

Search for icons by name or category:

```jsx
import { searchIcons } from 'brandkit';

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
  Google,
  
  // Utilities
  Icon,
  getAllIcons,
  getIconsByCategory,
  searchIcons,
  LogoHtml
} from 'brandkit';
```

## 🎨 Component Props

All icon components accept the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'24px'` | Icon size (px, em, rem, etc.) |
| `color` | string | Icon default color | SVG fill color (hex, rgb, rgba) |
| `className` | string | undefined | CSS class name |
| `style` | object | undefined | Inline CSS styles |

## 💡 Examples

### Social Media Bar

```jsx
import React from 'react';
import { Facebook, Instagram, Twitter, LinkedIn } from 'brandkit';

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
import { ReactIcon, NodeJS, MongoDB, Docker } from 'brandkit';

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
import { searchIcons, Icon } from 'brandkit';

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

## 🎯 Icon Data Structure

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

## 📦 Bundle Size

- **Minified**: ~15KB
- **Gzip Compressed**: ~5KB

## 🔄 React Version Support

- React 16.8+
- React 17+
- React 18+

## 🛠️ TypeScript Support

The package works great with TypeScript. All components accept standard React props and JSX types are fully supported.

```tsx
import React from 'react';
import { Icon, LogoHtml } from 'brandkit';

interface IconProps {
  size?: string;
  color?: string;
}

const MyComponent: React.FC<IconProps> = ({ size = '24px', color }) => (
  <div>
    <LogoHtml size={size} color={color} />
  </div>
);

export default MyComponent;
```

## 🚀 Performance

- All icons are SVG-based for crisp rendering at any size
- Tree-shakeable - unused icons are eliminated in production builds
- No external dependencies beyond React
- Optimized for performance with minimal re-renders

## 📄 License

MIT License - see [LICENSE](https://github.com/samirrhashimov/brandkit/blob/main/LICENSE) for details

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue on [GitHub](https://github.com/samirrhashimov/brandkit).

## 📞 Support

- 📧 Email: samirhasimov10@gmail.com
- 🐛 Issues: [GitHub Issues](https://github.com/samirrhashimov/brandkit/issues)
- 💬 Discussions: [GitHub Discussions](https://github.com/samirrhashimov/brandkit/discussions)

## 🔗 Links

- [GitHub Repository](https://github.com/samirrhashimov/brandkit)
- [NPM Package](https://www.npmjs.com/package/brandkit)
- [License](https://github.com/samirrhashimov/brandkit/blob/main/LICENSE)

---

**Made with ❤️ by Samir Hashimov**

Version: 1.0.0 | Last Updated: November 2025
