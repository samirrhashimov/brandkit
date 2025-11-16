import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Documentation.css';
import brandkitLogo from '../assets/brandkit.png';

const Documentation = () => {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState('overview');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const sections = [
    { id: 'overview', title: 'Overview' },
    { id: 'getting-started', title: 'Getting Started' },
    { id: 'features', title: 'Features' },
    { id: 'npm-usage', title: 'NPM Usage' },
    { id: 'icon-catalog', title: 'Icon Catalog' },
    { id: 'component-props', title: 'Component Props' },
    { id: 'examples', title: 'Examples' },
    { id: 'utilities', title: 'Utilities' },
    { id: 'best-practices', title: 'Best Practices' },
    { id: 'faq', title: 'FAQ' },
  ];

  // Auto-detect which section is in view and update activeSection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0 }
    );

    const elements = sections.map((s) => document.getElementById(s.id)).filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="documentation">
      {/* Navbar */}
      <nav className="docs-navbar">
        <div className="docs-navbar__container">
          <div className="docs-navbar__logo">
            <img href="/" src={brandkitLogo} alt="Brandkit" className="home__logo" />
          </div>
          <button
            className={`docs-navbar__toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </nav>

      <div className="docs-container">
        {/* Sidebar */}
        <aside className={`docs-sidebar ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="docs-sidebar__content">
            <h3 className="docs-sidebar__title">Documentation</h3>
            <nav className="docs-sidebar__nav">
              {sections.map((section) => (
                <button
                  key={section.id}
                  className={`docs-sidebar__link ${
                    activeSection === section.id ? 'active' : ''
                  }`}
                  onClick={() => scrollToSection(section.id)}
                >
                  {section.title}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="docs-main">
          {/* Overview Section */}
          <section id="overview" className="docs-section">
            <h1 className="docs-section__title">Brandkit Documentation</h1>
            <p className="docs-section__intro">
              Welcome to the comprehensive documentation for <strong>Brandkit</strong> - a modern,
              lightweight React icon library providing high-quality SVG brand icons for social media,
              developer tools, languages, and design tools.
            </p>

            <div className="docs-card docs-card--info">
              <span className="docs-card__icon">ℹ️</span>
              <div>
                <strong>What is Brandkit?</strong>
                <p>
                  Brandkit is a tree-shakeable, bundle-friendly React component library with 42+ brand
                  icons. It's designed for easy integration, customization, and minimal bundle impact.
                </p>
              </div>
            </div>

            <h3 className="docs-subsection__title">Quick Stats</h3>
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Metric</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Total Icons</strong></td>
                  <td>42</td>
                </tr>
                <tr>
                  <td><strong>Categories</strong></td>
                  <td>Social (16), Development & Tools (25), Design (1)</td>
                </tr>
                <tr>
                  <td><strong>Format</strong></td>
                  <td>SVG (scalable, editable)</td>
                </tr>
                <tr>
                  <td><strong>Bundle Size</strong></td>
                  <td>~15KB minified, ~5KB gzipped</td>
                </tr>
                <tr>
                  <td><strong>License</strong></td>
                  <td>MIT</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Getting Started Section */}
          <section id="getting-started" className="docs-section">
            <h2 className="docs-section__title">Getting Started</h2>
            <p>
              Follow these simple steps to integrate Brandkit into your project.
            </p>

            <h3 className="docs-subsection__title">Installation</h3>
            <p>Install Brandkit via npm, yarn, or pnpm:</p>
            <div className="docs-code-block">
              <pre>
{`npm install brandkitjs
# or
yarn add brandkitjs
# or
pnpm add brandkitjs`}
              </pre>
            </div>

            <div className="docs-card docs-card--warning">
              <span className="docs-card__icon">⚠️</span>
              <div>
                <strong>Peer Dependencies</strong>
                <p>
                  Brandkit requires React and React-DOM as peer dependencies. Make sure they are
                  installed in your project (v16.8.0 or higher).
                </p>
              </div>
            </div>

            <h3 className="docs-subsection__title">Your First Icon</h3>
            <p>Import and use an icon component in your React app:</p>
            <div className="docs-code-block">
              <pre>
{`import { Github } from 'brandkitjs';

export default function App() {
  return <Github />;
}`}
              </pre>
            </div>

            <p>That's it! The icon will render with its default size and color.</p>
          </section>

          {/* Features Section */}
          <section id="features" className="docs-section">
            <h2 className="docs-section__title">Features</h2>
            <p>Brandkit comes packed with powerful features designed for developers:</p>

            <div className="docs-features">
              <div className="docs-feature-card">
                <div className="docs-feature-card__icon">📦</div>
                <h4>React Components</h4>
                <p>Drop-in React components for seamless integration with your projects.</p>
              </div>

              <div className="docs-feature-card">
                <div className="docs-feature-card__icon">🎯</div>
                <h4>Individual Exports</h4>
                <p>Import only the icons you need, enabling tree-shaking and smaller bundles.</p>
              </div>

              <div className="docs-feature-card">
                <div className="docs-feature-card__icon">🔍</div>
                <h4>Search & Filter Utilities</h4>
                <p>Built-in utilities to search icons by name or category dynamically.</p>
              </div>

              <div className="docs-feature-card">
                <div className="docs-feature-card__icon">⚡</div>
                <h4>Lightweight</h4>
                <p>Minimal bundle impact with efficient SVG-based rendering.</p>
              </div>

              <div className="docs-feature-card">
                <div className="docs-feature-card__icon">✅</div>
                <h4>TypeScript Ready</h4>
                <p>Full type definitions included for seamless TypeScript development.</p>
              </div>

              <div className="docs-feature-card">
                <div className="docs-feature-card__icon">🎨</div>
                <h4>Highly Customizable</h4>
                <p>Control size, color, className, and inline styles for each icon.</p>
              </div>
            </div>
          </section>

          {/* NPM Usage Section */}
          <section id="npm-usage" className="docs-section">
            <h2 className="docs-section__title">NPM Usage</h2>
            <p>
              Brandkit is published to NPM as <code>brandkitjs</code> and is the recommended way to use
              the library in your projects.
            </p>

            <h3 className="docs-subsection__title">Package Details</h3>
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Package Name</strong></td>
                  <td>brandkitjs</td>
                </tr>
                <tr>
                  <td><strong>Latest Version</strong></td>
                  <td>1.0.4</td>
                </tr>
                <tr>
                  <td><strong>Module Type</strong></td>
                  <td>ES Module (ESM)</td>
                </tr>
                <tr>
                  <td><strong>NPM Link</strong></td>
                  <td><a href="https://www.npmjs.com/package/brandkitjs" target="_blank" rel="noopener noreferrer">npm.com/package/brandkitjs</a></td>
                </tr>
              </tbody>
            </table>

            <h3 className="docs-subsection__title">Installation Methods</h3>

            <h4 className="docs-subsubsection__title">NPM (Node Package Manager)</h4>
            <div className="docs-code-block">
              <pre>{`npm install brandkitjs`}</pre>
            </div>

            <h4 className="docs-subsubsection__title">Yarn</h4>
            <div className="docs-code-block">
              <pre>{`yarn add brandkitjs`}</pre>
            </div>

            <h4 className="docs-subsubsection__title">PNPM</h4>
            <div className="docs-code-block">
              <pre>{`pnpm add brandkitjs`}</pre>
            </div>

            <h3 className="docs-subsection__title">Basic Usage</h3>

            <h4 className="docs-subsubsection__title">Default Icon</h4>
            <p>Import and use an icon with default styling:</p>
            <div className="docs-code-block">
              <pre>
{`import { Github, Facebook, Twitter } from 'brandkitjs';

export default function App() {
  return (
    <div>
      <Github />
      <Facebook />
      <Twitter />
    </div>
  );
}`}
              </pre>
            </div>

            <h4 className="docs-subsubsection__title">Custom Size</h4>
            <p>Control the icon size using the <code>size</code> prop:</p>
            <div className="docs-code-block">
              <pre>
{`import { Github } from 'brandkitjs';

export default function App() {
  return (
    <div>
      <Github size="16px" />
      <Github size="24px" />
      <Github size="48px" />
      <Github size="64px" />
    </div>
  );
}`}
              </pre>
            </div>

            <h4 className="docs-subsubsection__title">Custom Color</h4>
            <p>Change the icon color using the <code>color</code> prop:</p>
            <div className="docs-code-block">
              <pre>
{`import { Github } from 'brandkitjs';

export default function App() {
  return (
    <div>
      <Github color="#181717" />
      <Github color="red" />
      <Github color="rgb(255, 0, 0)" />
      <Github color="rgba(255, 0, 0, 0.5)" />
    </div>
  );
}`}
              </pre>
            </div>

            <h4 className="docs-subsubsection__title">Size + Color</h4>
            <p>Combine size and color for complete customization:</p>
            <div className="docs-code-block">
              <pre>
{`import { Github, LinkedIn, React as ReactIcon } from 'brandkitjs';

export default function App() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Github size="32px" color="#181717" />
      <LinkedIn size="32px" color="#0A66C2" />
      <ReactIcon size="32px" color="#61DAFB" />
    </div>
  );
}`}
              </pre>
            </div>

            <h3 className="docs-subsection__title">Advanced Usage</h3>

            <h4 className="docs-subsubsection__title">CSS Classes</h4>
            <p>Apply custom CSS classes to icons:</p>
            <div className="docs-code-block">
              <pre>
{`import { Github } from 'brandkitjs';
import './styles.css';

export default function App() {
  return <Github className="my-icon" />;
}`}
              </pre>
            </div>

            <h4 className="docs-subsubsection__title">Inline Styles</h4>
            <p>Apply inline styles directly to icons:</p>
            <div className="docs-code-block">
              <pre>
{`import { Github } from 'brandkitjs';

export default function App() {
  return (
    <Github
      size="24px"
      style={{
        cursor: 'pointer',
        transition: 'transform 0.2s',
      }}
    />
  );
}`}
              </pre>
            </div>

            <h4 className="docs-subsubsection__title">CommonJS / Node Environments</h4>
            <p>In CommonJS-only environments, use dynamic imports:</p>
            <div className="docs-code-block">
              <pre>
{`(async () => {
  const pkg = await import('brandkitjs');
  const { Github } = pkg;
  // Use Github
})();`}
              </pre>
            </div>

            <h4 className="docs-subsubsection__title">CDN Usage (ES Module)</h4>
            <p>Use Brandkit directly from a CDN:</p>
            <div className="docs-code-block">
              <pre>
{`<script type="module">
  import { Github } from 'https://cdn.jsdelivr.net/npm/brandkitjs@1.0.4/dist/index.esm.js';
  // Your code here
</script>`}
              </pre>
            </div>

            <div className="docs-card docs-card--tip">
              <span className="docs-card__icon">💡</span>
              <div>
                <strong>Tree-Shaking</strong>
                <p>
                  Use named imports instead of default imports to enable tree-shaking. This ensures
                  only the icons you use are included in your final bundle.
                </p>
              </div>
            </div>
          </section>

          {/* Icon Catalog Section */}
          <section id="icon-catalog" className="docs-section">
            <h2 className="docs-section__title">Icon Catalog</h2>
            <p>
              Brandkit includes 42 carefully curated brand icons organized into three categories.
            </p>

            <h3 className="docs-subsection__title">Social Media Icons (16)</h3>
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Import ID</th>
                  <th>Brand Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Facebook</td>
                  <td><code>facebook</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#1877F2' }}></span> #1877F2</td>
                </tr>
                <tr>
                  <td>Instagram</td>
                  <td><code>instagram</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#E4405F' }}></span> #E4405F</td>
                </tr>
                <tr>
                  <td>Twitter</td>
                  <td><code>twitter</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#1DA1F2' }}></span> #1DA1F2</td>
                </tr>
                <tr>
                  <td>YouTube</td>
                  <td><code>youtube</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#FF0000' }}></span> #FF0000</td>
                </tr>
                <tr>
                  <td>Google</td>
                  <td><code>google</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#4285F4' }}></span> #4285F4</td>
                </tr>
                <tr>
                  <td>LinkedIn</td>
                  <td><code>linkedin</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#0A66C2' }}></span> #0A66C2</td>
                </tr>
                <tr>
                  <td>TikTok</td>
                  <td><code>tiktok</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#000000' }}></span> #000000</td>
                </tr>
                <tr>
                  <td>Discord</td>
                  <td><code>discord</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#5865F2' }}></span> #5865F2</td>
                </tr>
                <tr>
                  <td>Spotify</td>
                  <td><code>spotify</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#1DB954' }}></span> #1DB954</td>
                </tr>
                <tr>
                  <td>Twitch</td>
                  <td><code>twitch</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#9146FF' }}></span> #9146FF</td>
                </tr>
                <tr>
                  <td>Pinterest</td>
                  <td><code>pinterest</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#E60023' }}></span> #E60023</td>
                </tr>
                <tr>
                  <td>Reddit</td>
                  <td><code>reddit</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#FF4500' }}></span> #FF4500</td>
                </tr>
                <tr>
                  <td>WhatsApp</td>
                  <td><code>whatsapp</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#25D366' }}></span> #25D366</td>
                </tr>
                <tr>
                  <td>Telegram</td>
                  <td><code>telegram</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#26A5E4' }}></span> #26A5E4</td>
                </tr>
                <tr>
                  <td>Snapchat</td>
                  <td><code>snapchat</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#FFFC00' }}></span> #FFFC00</td>
                </tr>
                <tr>
                  <td>Medium</td>
                  <td><code>medium</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#000000' }}></span> #000000</td>
                </tr>
              </tbody>
            </table>

            <h3 className="docs-subsection__title">Development & Tools Icons (25)</h3>
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Import ID</th>
                  <th>Brand Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>GitHub</td>
                  <td><code>github</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#181717' }}></span> #181717</td>
                </tr>
                <tr>
                  <td>NPM</td>
                  <td><code>npm</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#CB3837' }}></span> #CB3837</td>
                </tr>
                <tr>
                  <td>React</td>
                  <td><code>react</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#61DAFB' }}></span> #61DAFB</td>
                </tr>
                <tr>
                  <td>Vue.js</td>
                  <td><code>vue</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#4FC08D' }}></span> #4FC08D</td>
                </tr>
                <tr>
                  <td>Slack</td>
                  <td><code>slack</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#4A154B' }}></span> #4A154B</td>
                </tr>
                <tr>
                  <td>HTML5</td>
                  <td><code>html5</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#E34F26' }}></span> #E34F26</td>
                </tr>
                <tr>
                  <td>CSS3</td>
                  <td><code>css3</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#1572B6' }}></span> #1572B6</td>
                </tr>
                <tr>
                  <td>JavaScript</td>
                  <td><code>javascript</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#F7DF1E' }}></span> #F7DF1E</td>
                </tr>
                <tr>
                  <td>Python</td>
                  <td><code>python</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#3776AB' }}></span> #3776AB</td>
                </tr>
                <tr>
                  <td>Java</td>
                  <td><code>java</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#007396' }}></span> #007396</td>
                </tr>
                <tr>
                  <td>Node.js</td>
                  <td><code>nodejs</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#339933' }}></span> #339933</td>
                </tr>
                <tr>
                  <td>TypeScript</td>
                  <td><code>typescript</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#3178C6' }}></span> #3178C6</td>
                </tr>
                <tr>
                  <td>Angular</td>
                  <td><code>angular</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#DD0031' }}></span> #DD0031</td>
                </tr>
                <tr>
                  <td>Docker</td>
                  <td><code>docker</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#2496ED' }}></span> #2496ED</td>
                </tr>
                <tr>
                  <td>Git</td>
                  <td><code>git</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#F05032' }}></span> #F05032</td>
                </tr>
                <tr>
                  <td>MongoDB</td>
                  <td><code>mongodb</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#47A248' }}></span> #47A248</td>
                </tr>
                <tr>
                  <td>VS Code</td>
                  <td><code>vscode</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#007ACC' }}></span> #007ACC</td>
                </tr>
                <tr>
                  <td>Bootstrap</td>
                  <td><code>bootstrap</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#7952B3' }}></span> #7952B3</td>
                </tr>
                <tr>
                  <td>Tailwind CSS</td>
                  <td><code>tailwind</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#06B6D4' }}></span> #06B6D4</td>
                </tr>
                <tr>
                  <td>WordPress</td>
                  <td><code>wordpress</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#21759B' }}></span> #21759B</td>
                </tr>
                <tr>
                  <td>Sass</td>
                  <td><code>sass</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#CC6699' }}></span> #CC6699</td>
                </tr>
                <tr>
                  <td>Flutter</td>
                  <td><code>flutter</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#02569B' }}></span> #02569B</td>
                </tr>
                <tr>
                  <td>Kotlin</td>
                  <td><code>kotlin</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#7F52FF' }}></span> #7F52FF</td>
                </tr>
                <tr>
                  <td>Go</td>
                  <td><code>go</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#00ADD8' }}></span> #00ADD8</td>
                </tr>
                <tr>
                  <td>Ruby</td>
                  <td><code>ruby</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#CC342D' }}></span> #CC342D</td>
                </tr>
              </tbody>
            </table>

            <h3 className="docs-subsection__title">Design Icons (1)</h3>
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Import ID</th>
                  <th>Brand Color</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Figma</td>
                  <td><code>figma</code></td>
                  <td><span className="docs-color-swatch" style={{ backgroundColor: '#F24E1E' }}></span> #F24E1E</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Component Props Section */}
          <section id="component-props" className="docs-section">
            <h2 className="docs-section__title">Component Props</h2>
            <p>
              All icon components accept a standardized set of props for customization.
            </p>

            <h3 className="docs-subsection__title">Props Reference</h3>
            <table className="docs-table">
              <thead>
                <tr>
                  <th>Prop</th>
                  <th>Type</th>
                  <th>Default</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>size</code></td>
                  <td>string</td>
                  <td><code>'24px'</code></td>
                  <td>Icon size (px, em, rem, etc.)</td>
                </tr>
                <tr>
                  <td><code>color</code></td>
                  <td>string</td>
                  <td>Icon's brand color</td>
                  <td>SVG fill color (hex, rgb, rgba, or color name)</td>
                </tr>
                <tr>
                  <td><code>className</code></td>
                  <td>string</td>
                  <td>undefined</td>
                  <td>CSS class name for styling</td>
                </tr>
                <tr>
                  <td><code>style</code></td>
                  <td>object</td>
                  <td>undefined</td>
                  <td>Inline CSS styles</td>
                </tr>
              </tbody>
            </table>

            <h3 className="docs-subsection__title">Example: Using All Props</h3>
            <div className="docs-code-block">
              <pre>
{`import { Github } from 'brandkitjs';
import './github-icon.css';

export default function GithubLink() {
  return (
    <Github
      size="32px"
      color="#181717"
      className="github-icon"
      style={{
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
      }}
      onClick={() => window.open('https://github.com')}
    />
  );
}`}
              </pre>
            </div>
          </section>

          {/* Examples Section */}
          <section id="examples" className="docs-section">
            <h2 className="docs-section__title">Examples</h2>
            <p>
              Here are practical, ready-to-use examples for common use cases.
            </p>

            <h3 className="docs-subsection__title">Social Links Row</h3>
            <p>Create a horizontal row of social media links:</p>
            <div className="docs-code-block">
              <pre>
{`import { Facebook, Instagram, Twitter, LinkedIn } from 'brandkitjs';

export default function SocialLinks() {
  const socials = [
    { Icon: Facebook, url: 'https://facebook.com' },
    { Icon: Instagram, url: 'https://instagram.com' },
    { Icon: Twitter, url: 'https://twitter.com' },
    { Icon: LinkedIn, url: 'https://linkedin.com' },
  ];

  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      {socials.map(({ Icon, url }, idx) => (
        <a key={idx} href={url} target="_blank" rel="noopener noreferrer">
          <Icon size="32px" />
        </a>
      ))}
    </div>
  );
}`}
              </pre>
            </div>

            <h3 className="docs-subsection__title">Technology Stack Display</h3>
            <p>Display your tech stack as a grid of icons:</p>
            <div className="docs-code-block">
              <pre>
{`import { React as ReactIcon, NodeJS, MongoDB, Docker } from 'brandkitjs';

export default function TechStack() {
  const techs = [
    { Icon: ReactIcon, name: 'React' },
    { Icon: NodeJS, name: 'Node.js' },
    { Icon: MongoDB, name: 'MongoDB' },
    { Icon: Docker, name: 'Docker' },
  ];

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
      {techs.map(({ Icon, name }) => (
        <div key={name} style={{ textAlign: 'center' }}>
          <Icon size="48px" />
          <p>{name}</p>
        </div>
      ))}
    </div>
  );
}`}
              </pre>
            </div>

            <h3 className="docs-subsection__title">Hoverable Icon Button</h3>
            <p>Create interactive icon buttons with hover effects:</p>
            <div className="docs-code-block">
              <pre>
{`import { Github } from 'brandkitjs';
import { useState } from 'react';

export default function HoverableButton() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        transition: 'transform 0.3s ease',
        transform: isHovered ? 'scale(1.2)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Github
        size="32px"
        color={isHovered ? '#333' : '#ccc'}
      />
    </button>
  );
}`}
              </pre>
            </div>

            <h3 className="docs-subsection__title">Contact Section</h3>
            <p>Build a contact section with multiple platforms:</p>
            <div className="docs-code-block">
              <pre>
{`import { Github, LinkedIn, Email } from 'brandkitjs';

export default function ContactSection() {
  return (
    <section style={{ padding: '40px', textAlign: 'center' }}>
      <h2>Get in Touch</h2>
      <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', marginTop: '20px' }}>
        <a href="https://github.com">
          <Github size="40px" />
        </a>
        <a href="https://linkedin.com">
          <LinkedIn size="40px" />
        </a>
        <a href="mailto:contact@example.com">
          <span style={{ fontSize: '40px' }}>✉️</span>
        </a>
      </div>
    </section>
  );
}`}
              </pre>
            </div>
          </section>

          {/* Utilities Section */}
          <section id="utilities" className="docs-section">
            <h2 className="docs-section__title">Utilities</h2>
            <p>
              Brandkit provides several utility functions for dynamic icon selection and filtering.
            </p>

            <h3 className="docs-subsection__title">Available Utilities</h3>

            <h4 className="docs-subsubsection__title">getAllIcons()</h4>
            <p>Returns an array of all available icon metadata objects.</p>
            <div className="docs-code-block">
              <pre>
{`import { getAllIcons } from 'brandkitjs';

const allIcons = getAllIcons();
console.log(allIcons);
// Output: [
//   { id: 'github', name: 'GitHub', category: 'development', color: '#181717', ... },
//   { id: 'facebook', name: 'Facebook', category: 'social', color: '#1877F2', ... },
//   ...
// ]`}
              </pre>
            </div>

            <h4 className="docs-subsubsection__title">getIconsByCategory(category)</h4>
            <p>Filter icons by category ('social', 'development', or 'design').</p>
            <div className="docs-code-block">
              <pre>
{`import { getIconsByCategory } from 'brandkitjs';

const socialIcons = getIconsByCategory('social');
const devIcons = getIconsByCategory('development');
const designIcons = getIconsByCategory('design');`}
              </pre>
            </div>

            <h4 className="docs-subsubsection__title">searchIcons(query)</h4>
            <p>Search icons by name or ID (case-insensitive).</p>
            <div className="docs-code-block">
              <pre>
{`import { searchIcons } from 'brandkitjs';

const results = searchIcons('react');
// Returns all icons matching 'react'`}
              </pre>
            </div>

            <h4 className="docs-subsubsection__title">Icon Component (Dynamic)</h4>
            <p>Render icons dynamically by ID.</p>
            <div className="docs-code-block">
              <pre>
{`import { Icon } from 'brandkitjs';

export default function DynamicIcon() {
  return (
    <div>
      <Icon id="github" size="24px" />
      <Icon id="react" size="24px" color="#61DAFB" />
    </div>
  );
}`}
              </pre>
            </div>

            <h3 className="docs-subsection__title">Dynamic Icon Grid Example</h3>
            <p>Build a searchable icon grid using utilities:</p>
            <div className="docs-code-block">
              <pre>
{`import React, { useState } from 'react';
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
        style={{
          padding: '8px',
          fontSize: '16px',
          width: '100%',
          marginBottom: '20px',
        }}
      />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '16px' }}>
        {icons.map((icon) => (
          <div key={icon.id} style={{ textAlign: 'center' }}>
            <Icon id={icon.id} size="32px" />
            <p style={{ marginTop: '8px', fontSize: '12px' }}>{icon.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}`}
              </pre>
            </div>
          </section>

          {/* Best Practices Section */}
          <section id="best-practices" className="docs-section">
            <h2 className="docs-section__title">Best Practices</h2>
            <p>
              Follow these best practices to get the most out of Brandkit and optimize your application.
            </p>

            <h3 className="docs-subsection__title">1. Use Named Imports for Tree-Shaking</h3>
            <p className="docs-do-dont__label">✅ Recommended:</p>
            <div className="docs-code-block">
              <pre>
{`import { Github, React as ReactIcon } from 'brandkitjs';`}
              </pre>
            </div>
            <p className="docs-do-dont__label">❌ Avoid:</p>
            <div className="docs-code-block">
              <pre>
{`import * as Icons from 'brandkitjs';
// This may not tree-shake properly`}
              </pre>
            </div>

            <h3 className="docs-subsection__title">2. Set Fixed Sizes for Consistency</h3>
            <p>Define reusable icon size constants:</p>
            <div className="docs-code-block">
              <pre>
{`// constants.js
export const ICON_SIZES = {
  SMALL: '16px',
  MEDIUM: '24px',
  LARGE: '32px',
  XLARGE: '48px',
};

// component.js
import { Github } from 'brandkitjs';
import { ICON_SIZES } from './constants';

export default function App() {
  return <Github size={ICON_SIZES.MEDIUM} />;
}`}
              </pre>
            </div>

            <h3 className="docs-subsection__title">3. Use Brand Colors by Default</h3>
            <p>Each icon has a default brand color. Use it unless customization is needed:</p>
            <div className="docs-code-block">
              <pre>
{`import { Github, Facebook } from 'brandkitjs';

// Use default brand colors
<Github /> {/* Uses #181717 */}
<Facebook /> {/* Uses #1877F2 */}`}
              </pre>
            </div>

            <h3 className="docs-subsection__title">4. Optimize Performance with React.memo</h3>
            <p>Memoize icon components to prevent unnecessary re-renders:</p>
            <div className="docs-code-block">
              <pre>
{`import React from 'react';
import { Github } from 'brandkitjs';

const GithubIcon = React.memo(() => <Github size="24px" />);

export default GithubIcon;`}
              </pre>
            </div>

            <h3 className="docs-subsection__title">5. Create Reusable Icon Components</h3>
            <p>Build wrapper components for consistent icon styling:</p>
            <div className="docs-code-block">
              <pre>
{`import { Github, Facebook, Twitter } from 'brandkitjs';

export const SocialIcon = ({ type, size = '24px', ...props }) => {
  const icons = {
    github: Github,
    facebook: Facebook,
    twitter: Twitter,
  };

  const Icon = icons[type];
  return Icon ? <Icon size={size} {...props} /> : null;
};

// Usage
<SocialIcon type="github" size="32px" />`}
              </pre>
            </div>

            <h3 className="docs-subsection__title">6. Accessibility Tips</h3>
            <ul className="docs-list">
              <li>Always wrap icons with meaningful context (alt text, labels)</li>
              <li>Use <code>aria-label</code> for screen readers when icons are standalone</li>
              <li>Ensure sufficient color contrast if changing the color</li>
              <li>Use the Icon component with proper ARIA attributes</li>
            </ul>

            <h3 className="docs-subsection__title">7. Loading Performance</h3>
            <ul className="docs-list">
              <li>Import only the icons you need to minimize bundle size</li>
              <li>Use code splitting for large icon galleries</li>
              <li>Lazy load icon components if they're not immediately visible</li>
            </ul>
          </section>

          {/* FAQ Section */}
          <section id="faq" className="docs-section">
            <h2 className="docs-section__title">FAQ</h2>
            <p>Frequently asked questions about Brandkit.</p>

            <div className="docs-faq">
              <details className="docs-faq__item">
                <summary className="docs-faq__question">What are the peer dependencies?</summary>
                <p className="docs-faq__answer">
                  Brandkit requires React (v16.8.0+) and React-DOM (v16.8.0+). These must be installed
                  separately in your project.
                </p>
              </details>

              <details className="docs-faq__item">
                <summary className="docs-faq__question">Can I use Brandkit in a non-React environment?</summary>
                <p className="docs-faq__answer">
                  Not directly, as Brandkit is built specifically for React. However, you could use the
                  SVG files directly in other frameworks or vanilla JavaScript.
                </p>
              </details>

              <details className="docs-faq__item">
                <summary className="docs-faq__question">How do I add custom icons to Brandkit?</summary>
                <p className="docs-faq__answer">
                  Currently, Brandkit includes a fixed set of 42 brand icons. For custom icons, you would
                  need to fork the repository or use a different icon library. Consider opening an issue
                  on GitHub if you'd like a specific icon added.
                </p>
              </details>

              <details className="docs-faq__item">
                <summary className="docs-faq__question">Is Brandkit tree-shakeable?</summary>
                <p className="docs-faq__answer">
                  Yes! The package is published as an ES Module with named exports, allowing bundlers
                  like Webpack and Vite to tree-shake unused icons. Make sure to use named imports.
                </p>
              </details>

              <details className="docs-faq__item">
                <summary className="docs-faq__question">What's the license for Brandkit?</summary>
                <p className="docs-faq__answer">
                  Brandkit is published under the MIT License, meaning you can freely use it in both
                  personal and commercial projects.
                </p>
              </details>

              <details className="docs-faq__item">
                <summary className="docs-faq__question">Can I modify icon colors and sizes?</summary>
                <p className="docs-faq__answer">
                  Yes! All icons accept <code>size</code> and <code>color</code> props for full
                  customization. You can also apply custom CSS classes and inline styles.
                </p>
              </details>

              <details className="docs-faq__item">
                <summary className="docs-faq__question">How do I report a bug or request a feature?</summary>
                <p className="docs-faq__answer">
                  Please visit the{' '}
                  <a href="https://github.com/samirrhashimov/brandkit/issues" target="_blank" rel="noopener noreferrer">
                    GitHub Issues page
                  </a>{' '}
                  to report bugs or request features. We appreciate your feedback!
                </p>
              </details>

              <details className="docs-faq__item">
                <summary className="docs-faq__question">What's the bundle size impact?</summary>
                <p className="docs-faq__answer">
                  Brandkit's full minified build is approximately 15KB (5KB gzipped). With tree-shaking,
                  the size depends on how many icons you actually use.
                </p>
              </details>

              <details className="docs-faq__item">
                <summary className="docs-faq__question">Is TypeScript support available?</summary>
                <p className="docs-faq__answer">
                  Yes! Brandkit includes full TypeScript type definitions. You can use it seamlessly in
                  TSX projects without any additional setup.
                </p>
              </details>

              <details className="docs-faq__item">
                <summary className="docs-faq__question">How do I get support?</summary>
                <p className="docs-faq__answer">
                  For support, you can:
                  <ul>
                    <li>Open an issue on{' '}
                      <a href="https://github.com/samirrhashimov/brandkit" target="_blank" rel="noopener noreferrer">
                        GitHub
                      </a></li>
                    <li>Email: samirhasimov10@gmail.com</li>
                    <li>Check the{' '}
                      <a href="https://www.npmjs.com/package/brandkitjs" target="_blank" rel="noopener noreferrer">
                        NPM package page
                      </a></li>
                  </ul>
                </p>
              </details>
            </div>
          </section>

          {/* Footer */}
          <footer className="docs-footer">
            <div className="docs-footer__content">
              <p><strong>Need help?</strong> Check our GitHub repository or email us.</p>
              <div className="docs-footer__links">
                <a href="https://github.com/samirrhashimov/brandkit" target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
                <a href="https://www.npmjs.com/package/brandkitjs" target="_blank" rel="noopener noreferrer">
                  NPM Package
                </a>
                <a href="mailto:samirhasimov10@gmail.com">
                  Email Support
                </a>
              </div>
              <p className="docs-footer__copyright">
                © 2025 Brandkit - MIT License
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

export default Documentation;
