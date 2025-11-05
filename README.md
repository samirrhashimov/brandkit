# Brandkit

A modern way to use brand icons.

## Overview

Brandkit is a clean and minimal platform where developers and designers can easily find and use popular brand icons. Built with React and classic CSS, it provides a professional, developer-friendly experience for accessing brand icons.

## Features

- **Serverless Icon URLs**: Direct URLs for embedding icons (e.g., `/icons/twitter,youtube`)
- **Icon Gallery**: Browse through **43 popular brand icons**
- **Search Functionality**: Quickly find the icons you need
- **Icon Selection**: Select multiple icons at once
- **Multiple Embed Options**: iframe, direct links, or custom sizes via URL parameters
- **NPM Integration**: Code snippets for npm package usage
- **Live Preview**: See how icons will look before using them
- **Lazy Loading**: Optimized performance with IntersectionObserver
- **Responsive Design**: Works seamlessly on mobile and desktop (2-column grid on mobile)
- **Smooth Animations**: Professional fade and hover effects

## Tech Stack

- **React 18.2** - Component-based UI framework
- **React Router DOM 6.20** - Client-side routing
- **Classic CSS** - Mobile-first, BEM naming convention
- **JavaScript (ES6+)** - Modern JavaScript standards

## Icon Library

### Social Media Icons (16)
- Facebook, Instagram, Twitter, YouTube, LinkedIn
- TikTok, Discord, Spotify, Twitch
- Pinterest, Reddit, WhatsApp, Telegram
- Snapchat, Medium

### Development Icons (26)
- GitHub, NPM, React, Vue.js, Slack, Google
- HTML5, CSS3, JavaScript, TypeScript
- Python, Java, PHP, Node.js, Angular
- Docker, Git
- **MongoDB, MySQL, PostgreSQL**
- **VS Code, Figma, Bootstrap, Tailwind CSS**
- **WordPress, Shopify, Sass, Redis, AWS**

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Brandkit
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Usage Examples

### Serverless URL Embedding

**Example URL:**
```
http://localhost:3000/icons/twitter,youtube,facebook
```

**With custom size:**
```
http://localhost:3000/icons/github,react?size=64
```

**Embed in iframe:**
```html
<iframe 
  src="http://localhost:3000/icons/twitter,youtube" 
  width="200" 
  height="60" 
  frameborder="0"
  title="Brand Icons">
</iframe>
```

**Direct link:**
```html
<a href="http://localhost:3000/icons/facebook,instagram" target="_blank">
  View Icons
</a>
```

### HTML & CSS Icons
```
http://localhost:3000/icons/html5,css3,javascript
```

### Programming Languages
```
http://localhost:3000/icons/python,java,php,nodejs
```

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm build` - Builds the app for production
- `npm test` - Runs the test suite
- `npm eject` - Ejects from Create React App (one-way operation)

## Pages

### Home Page (/)
- Clean landing page with "Brandkit" logo
- Center slogan: "A modern way to use brand icons"
- Search bar for finding icons
- Example icon grid showcasing popular icons
- Two CTA buttons: "Get Embed Code" and "Use via NPM"

### Icon Gallery Page (/gallery)
- Comprehensive grid layout (3-4 columns on desktop, 2 columns on mobile)
- Search functionality
- Hover effects: blue border and light shadow
- Right sidebar: "Selected Icons" panel
- **Direct URL section** with copy and preview buttons
- Embed code section with iframe examples
- NPM usage snippets
- All code snippets are copyable

### Embed Preview Page (/embed)
- Display serverless URL prominently
- Show iframe and direct link embed options
- Copy button for easy code copying
- Live preview of embedded icons

### Icon Embed Route (/icons/:iconIds) - Serverless
- **Serverless embedding endpoint**
- Access via URL: `/icons/facebook,twitter,youtube`
- Add custom size: `/icons/github?size=64`
- Returns just the icons (no UI chrome)
- Perfect for iframe embeds
- Fully client-side, no backend needed

## Design Features

- **Style**: Minimal, white-dominant, modern aesthetic
- **Feel**: Professional and developer-friendly
- **Icons**: SVG-based, monochrome black or brand-colored
- **Animations**: Smooth fade-in effects and hover transitions (transform: scale(1.05), transition: 0.2s)
- **Responsive**: Fully responsive design with mobile-first approach

## Code Standards

### JavaScript
- ES6+ standards (let/const, arrow functions, template literals)
- camelCase naming convention
- Async/await instead of callbacks
- Proper error handling for async operations

### HTML
- UTF-8 meta tags
- Semantic HTML structure
- Mobile-first principles
- BEM naming convention for CSS classes
- ARIA attributes for accessibility

### CSS
- Mobile-first approach
- BEM naming convention
- Modular and reusable styles
- Relative units (em, rem, %)
- Organized by purpose (typography, layout, components, utilities)

## Performance Optimizations

- **Lazy Loading**: Icons are lazy-loaded using IntersectionObserver API
- **Component-based Architecture**: Modular, reusable components
- **Optimized Animations**: Hardware-accelerated CSS transforms
- **Code Splitting**: React Router handles route-based code splitting

## License

MIT License

## Footer

© Brandkit 2025 – Open Icon Infrastructure

---

Built with ❤️ for developers and designers
