# Performance Notes

## Overview

As a documentation website, performance is important for user experience and SEO.

## Current Performance Characteristics

### Build Optimizations

| Feature | Status | Notes |
|---------|--------|-------|
| Static Generation | ✅ | Most pages are static |
| Code Splitting | ✅ | Next.js automatic splitting |
| Image Optimization | ⚠️ | Using custom Image component |
| CSS-in-JS | ✅ | styled-components SSR support |
| Tree Shaking | ✅ | Webpack default |

### Next.js SSR/SSG

- **Static Generation**: Documentation pages built at build time
- **Server-Side Rendering**: Some dynamic content (releases page)
- **Hydration**: React hydrates after initial load

## Analysis Points

### Bundle Size

**Monitoring**: Available via `yarn analyze`

**Key Dependencies by Size (estimated)**:
| Package | Impact | Optimizable |
|---------|--------|-------------|
| `react` + `react-dom` | ~40KB gzip | No |
| `styled-components` | ~15KB gzip | No |
| `@docsearch/js` | ~25KB gzip | Lazy load |
| `react-live-runner` | ~20KB gzip | Lazy load |
| `@styled-icons/*` | Variable | Tree-shakeable |

### Page Load Performance

**Critical Path**:
1. HTML document (server-rendered)
2. CSS (styled-components SSR)
3. JavaScript bundles
4. React hydration
5. Interactive

### Potential Bottlenecks

1. **Live Code Editor**: Heavy component, loaded on homepage
2. **Algolia Search**: External script loaded
3. **Company Logos**: Large image manifest
4. **MDX Content**: Some pages have extensive content

## Optimization Opportunities

### Implemented
- ✅ Next.js code splitting
- ✅ styled-components SSR
- ✅ Static page generation
- ✅ Yarn cache in CI

### Not Implemented
- ❌ Image optimization (next/image)
- ❌ Lazy loading for LiveEdit
- ❌ Preload critical resources
- ❌ Service worker / PWA
- ❌ Lighthouse CI monitoring

## Recommendations

### Quick Wins

1. **Lazy Load LiveEdit**
```typescript
const LiveEdit = dynamic(() => import('./LiveEdit'), {
  loading: () => <CodeBlockPlaceholder />,
  ssr: false,
});
```

2. **Use Next.js Image**
```typescript
import Image from 'next/image';
// Instead of custom Image component
```

3. **Preload Critical Fonts**
```html
<link rel="preload" href="/fonts/..." as="font" crossorigin />
```

### Medium Effort

1. **Add Lighthouse CI**
```yaml
# In CI workflow
- name: Lighthouse CI
  uses: treosh/lighthouse-ci-action@v10
```

2. **Image Optimization**
- Use `next/image` for automatic optimization
- Convert images to WebP format
- Add responsive image sizes

3. **Bundle Analysis**
- Add bundle size limits
- Monitor bundle size in CI

### Long-term

1. **PWA Support**
- Add service worker
- Enable offline documentation access

2. **Edge Caching**
- Optimize Vercel edge caching
- Add cache headers

## Performance Metrics to Track

| Metric | Target | Current |
|--------|--------|---------|
| LCP (Largest Contentful Paint) | < 2.5s | Unknown |
| FID (First Input Delay) | < 100ms | Unknown |
| CLS (Cumulative Layout Shift) | < 0.1 | Unknown |
| TTI (Time to Interactive) | < 3.5s | Unknown |
| Total Bundle Size | < 200KB | Unknown |

## How to Measure

### Bundle Analysis
```bash
yarn analyze
```

### Lighthouse (Local)
```bash
npx lighthouse http://localhost:3000 --output=html
```

### Web Vitals (Production)
- Use Vercel Analytics
- Or add web-vitals tracking

## Evidence

- `next.config.mjs` - Build configuration
- `package.json` - `analyze` script available
- Static page structure in `pages/`
- styled-components SSR setup in `_document.tsx`
- Confidence: Medium (no measurements available)
