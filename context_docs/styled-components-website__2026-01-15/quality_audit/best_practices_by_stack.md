# Best Practices by Stack

## Next.js Best Practices

### Current Alignment

| Practice | Status | Notes |
|----------|--------|-------|
| Pages Router | ✅ Used | Stable, well-supported |
| Static Generation | ✅ Used | Most pages are static |
| API Routes | ✅ Used | Proxy routes implemented |
| Custom Document | ✅ Used | styled-components SSR |
| Custom App | ✅ Used | MDX provider setup |
| Image Optimization | ⚠️ Partial | Custom component, not next/image |
| Font Optimization | ❌ Missing | No next/font usage |
| Middleware | ❌ Not Used | Not needed |
| App Router | ❌ Not Used | Uses Pages Router |

### Recommendations

1. **Migrate to next/image**
```typescript
// Instead of custom Image component
import Image from 'next/image';
```

2. **Add next/font**
```typescript
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });
```

3. **Consider App Router** (optional)
- New projects should use App Router
- Migration would be significant effort
- Pages Router is still supported

---

## styled-components Best Practices

### Current Alignment

| Practice | Status | Notes |
|----------|--------|-------|
| SSR Setup | ✅ Used | In _document.tsx |
| Transient Props | ✅ Used | `$` prefix for non-DOM props |
| CSS Helper | ✅ Used | For conditional styles |
| ThemeProvider | ⚠️ Limited | No full theme implementation |
| Attrs | ⚠️ Unknown | Not widely used |
| Extending | ✅ Used | Component extension |
| Naming | ✅ Good | Descriptive component names |
| File Organization | ✅ Good | Colocated with components |

### Recommendations

1. **Add ThemeProvider**
```typescript
// Centralize design tokens
const theme = {
  colors: { /* from utils/colors.ts */ },
  fonts: { /* from utils/fonts.ts */ },
  breakpoints: { /* from utils/media.ts */ },
};

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

2. **Use CSS Variables for Runtime Theming**
```typescript
const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: ${p => p.theme.colors.primary};
  }
`;
```

---

## React Best Practices

### Current Alignment

| Practice | Status | Notes |
|----------|--------|-------|
| Functional Components | ✅ Used | All components are functional |
| Hooks | ✅ Used | useState, useEffect, useCallback |
| Custom Hooks | ⚠️ Limited | Could extract more |
| Error Boundaries | ❌ Missing | No error boundaries |
| Suspense | ❌ Missing | No suspense boundaries |
| React 18 Features | ❌ Blocked | On React 17 |
| Prop Types | ✅ N/A | TypeScript used instead |
| Memo/Callback | ⚠️ Limited | Some useCallback usage |

### Recommendations

1. **Add Error Boundaries**
```typescript
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }
    return this.props.children;
  }
}
```

2. **Upgrade to React 18**
- Requires Enzyme migration
- Enables Suspense, concurrent features
- Better performance

---

## TypeScript Best Practices

### Current Alignment

| Practice | Status | Notes |
|----------|--------|-------|
| Strict Mode | ✅ Enabled | In tsconfig.json |
| No Any | ⚠️ Unknown | Not verified |
| Proper Typing | ✅ Good | Components well-typed |
| Generic Components | ✅ Used | Where appropriate |
| Type Exports | ✅ Used | Interfaces exported |
| Declaration Files | ✅ Used | For MDX, etc. |

### Recommendations

1. **Enable Additional Strict Checks**
```json
{
  "compilerOptions": {
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true
  }
}
```

---

## Testing Best Practices

### Current Alignment

| Practice | Status | Notes |
|----------|--------|-------|
| Component Testing | ✅ Good | Comprehensive coverage |
| Snapshot Testing | ✅ Used | Visual regression |
| Unit Testing | ⚠️ Limited | Few utility tests |
| Integration Testing | ❌ Missing | No integration tests |
| E2E Testing | ❌ Missing | No Cypress/Playwright |
| Mocking | ✅ Good | Next.js mocks in place |
| Test Organization | ✅ Good | Parallel to source |

### Critical Issues

1. **Enzyme is Deprecated**
   - Migrate to React Testing Library
   - Unblocks React 18 upgrade

### Recommendations

1. **Migrate to React Testing Library**
```typescript
import { render, screen } from '@testing-library/react';

test('renders component', () => {
  render(<Component />);
  expect(screen.getByRole('button')).toBeInTheDocument();
});
```

2. **Add E2E Tests**
```typescript
// playwright.config.ts
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './e2e',
  use: { baseURL: 'http://localhost:3000' },
});
```

---

## MDX Best Practices

### Current Alignment

| Practice | Status | Notes |
|----------|--------|-------|
| Component Mapping | ✅ Used | Custom MDX components |
| Live Code | ✅ Used | react-live-runner |
| Syntax Highlighting | ✅ Used | Prism theme |
| Table of Contents | ⚠️ Manual | Not auto-generated |
| Frontmatter | ⚠️ Limited | Not consistently used |

### Recommendations

1. **Add Automatic TOC**
   - Use remark plugin for TOC generation
   - Add table of contents to sidebar

2. **Standardize Frontmatter**
```mdx
---
title: Getting Started
description: Learn the basics
lastUpdated: 2024-01-15
---
```

---

## Summary

| Category | Score | Priority Actions |
|----------|-------|------------------|
| Next.js | 7/10 | Upgrade to next/image, next/font |
| styled-components | 8/10 | Add ThemeProvider |
| React | 6/10 | Upgrade to React 18 |
| TypeScript | 9/10 | Minimal changes needed |
| Testing | 5/10 | Migrate from Enzyme |
| MDX | 7/10 | Add auto TOC |

## Evidence

- Configuration files analysis
- Component code patterns
- Test file structure
- Confidence: High
