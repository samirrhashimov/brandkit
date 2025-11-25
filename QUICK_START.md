# 🎯 Hızlı Başlangıç

## Development
```bash
npm start          # Demo sitesini localhost:3000'de çalıştır
```

## Build

### Demo Site (Netlify için)
```bash
npm run build      # build/ klasörüne çıktı verir
```

### Library (npm paketi için)
```bash
npm run build:lib  # dist/ klasörüne çıktı verir
```

## Deployment

### Netlify
Otomatik deploy - sadece GitHub'a push yapın.
Netlify otomatik olarak `npm run build` çalıştırır ve `build/` klasörünü serve eder.

### NPM
```bash
npm version patch  # veya minor, major
npm publish        # Otomatik olarak build:lib çalışır (prepare script)
```

---

Detaylı bilgi için [BUILD_GUIDE.md](./BUILD_GUIDE.md) dosyasına bakın.
