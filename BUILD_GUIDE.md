# Build Guide

Bu proje hem bir **npm paketi** (React component library) hem de bir **demo web sitesi** içerir.

## 📦 İki Farklı Build Türü

### 1. Library Build (npm paketi için)
```bash
npm run build:lib
```

**Çıktı:** `dist/` klasörü
- `dist/index.js` (CommonJS)
- `dist/index.esm.js` (ES Modules)
- `dist/index.d.ts` (TypeScript definitions)
- Source maps

**Kullanım:** Bu build npm'e publish edilir.

**Not:** `npm publish` çalıştırdığınızda `prepare` script'i otomatik olarak `build:lib` komutunu çalıştırır.

### 2. Demo Site Build (Netlify deployment için)
```bash
npm run build
```

**Çıktı:** `build/` klasörü
- `build/index.html`
- `build/static/` (CSS, JS, assets)

**Kullanım:** Bu build Netlify'a deploy edilir.

## 🚀 Deployment

### NPM'e Publish
```bash
# Version'ı güncelle
npm version patch  # veya minor, major

# Publish (otomatik olarak build:lib çalışır)
npm publish
```

### Netlify'a Deploy
Netlify otomatik olarak:
1. `npm install --legacy-peer-deps` çalıştırır
2. `npm run build` ile demo sitesini build eder
3. `build/` klasörünü serve eder

## 🛠️ Development

### Local Development (Demo Site)
```bash
npm start
```
Bu komut `http://localhost:3000` adresinde demo sitesini çalıştırır.

### Watch Mode (Library)
```bash
npm run build:watch
```
Library dosyalarını değiştirdikçe otomatik rebuild eder.

## 📁 Klasör Yapısı

```
brandkit/
├── src/
│   ├── lib/              # Library source (npm paketine gider)
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

## ⚙️ Konfigürasyon Dosyaları

- **rollup.config.js**: Library build konfigürasyonu
- **netlify.toml**: Netlify deployment konfigürasyonu
- **.npmignore**: npm paketinden hariç tutulan dosyalar (build/, src/, vb.)
- **.gitignore**: Git'ten hariç tutulan dosyalar (node_modules, build)

## 🔍 Önemli Notlar

1. **`dist/` klasörü** → npm paketine dahil edilir
2. **`build/` klasörü** → Netlify'da serve edilir, npm paketine dahil edilmez
3. **`prepare` script** → npm publish öncesi otomatik library build yapar
4. **`build` script** → Demo sitesini build eder (Netlify için)
5. **`build:lib` script** → Library'yi build eder (npm için)
