# Build Guide

This project contains both an **npm package** (React component library) and a **demo website**.

## 📦 Two Different Build Types

### 1. Library Build (for npm package)
```bash
npm run build:lib
```

**Output:** `dist/` folder
- `dist/index.js` (CommonJS)
- `dist/index.esm.js` (ES Modules)
- `dist/index.d.ts` (TypeScript definitions)
- Source maps

**Usage:** This build is published to npm.

**Note:** When you run `npm publish`, the `prepare` script automatically runs the `build:lib` command.

### 2. Demo Site Build (for Netlify deployment)
```bash
npm run build
```

**Output:** `build/` folder
- `build/index.html`
- `build/static/` (CSS, JS, assets)

**Usage:** This build is deployed to Netlify.

## 🚀 Deployment

### Publishing to NPM
```bash
# Update version
npm version patch  # or minor, major

# Publish (automatically runs build:lib)
npm publish
```

### Deploying to Netlify
Netlify automatically:
1. Runs `npm install --legacy-peer-deps`
2. Builds the demo site with `npm run build`
3. Serves the `build/` folder

## 🛠️ Development

### Local Development (Demo Site)
```bash
npm start
```
This command runs the demo site at `http://localhost:3000`.

### Watch Mode (Library)
```bash
npm run build:watch
```
Automatically rebuilds as you modify library files.

## 📁 Folder Structure

```
brandkit/
├── src/
│   ├── lib/              # Library source (goes to npm package)
│   │   └── index.js
│   ├── demo.js           # Demo site entry
│   ├── App.js            # Demo site app
│   └── index.js          # React entry point
├── public/
│   └── index.html        # HTML template
├── dist/                 # Library build output (npm)
├── build/                # Demo site build output (Netlify)
└── rollup.config.js      # Library build config
```

## ⚙️ Configuration Files

- **rollup.config.js**: Library build configuration
- **netlify.toml**: Netlify deployment configuration
- **.npmignore**: Files excluded from npm package (build/, src/, etc.)
- **.gitignore**: Files excluded from Git (node_modules, build)

## 🔍 Important Notes

1. **`dist/` folder** → Included in npm package
2. **`build/` folder** → Served on Netlify, not included in npm package
3. **`prepare` script** → Automatically builds library before npm publish
4. **`build` script** → Builds demo site (for Netlify)
5. **`build:lib` script** → Builds library (for npm)
