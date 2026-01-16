# Module Boundaries

## Directory Responsibilities

### `/pages` - Route Handlers

**Responsibility**: URL-to-component mapping, page-level data fetching

| Path | Purpose | Imports From |
|------|---------|--------------|
| `_app.tsx` | App shell, global styles, MDXProvider | `utils/`, `styled-components` |
| `_document.tsx` | HTML document structure | `next/document`, `styled-components` |
| `index.tsx` | Homepage | `components/`, `utils/`, `sections/` |
| `docs/index.tsx` | Docs landing | `components/DocsLayout` |
| `docs/*.mdx` | Documentation sections | MDX imports |
| `showcase.tsx` | Project showcase | `components/`, `utils/` |
| `ecosystem.tsx` | Community resources | `components/`, `utils/` |
| `releases.tsx` | Releases feed | `components/`, `utils/githubApi` |

**Boundary Rules**:
- Pages import components, never vice versa
- Pages can import utilities
- Pages can use MDX content directly

---

### `/components` - Reusable UI

**Responsibility**: Presentation logic, styled components, UI patterns

| Component | Purpose | Dependencies |
|-----------|---------|--------------|
| `Layout.tsx` | Page structure primitives | `utils/colors`, `utils/fonts`, `utils/media` |
| `DocsLayout.tsx` | Documentation wrapper | `Layout`, `Nav`, `SeoHead` |
| `Nav/` | Navigation system | `utils/`, `styled-components` |
| `LiveEdit.tsx` | Live code editor | `react-live-runner`, `utils/scope` |
| `Code.tsx` | Syntax highlighting | `prismTheme.ts` |
| `SeoHead.tsx` | SEO meta tags | `next/head` |

**Boundary Rules**:
- Components should be self-contained
- Components can import other components
- Components can import utilities
- Components should NOT import pages

---

### `/sections` - Documentation Content

**Responsibility**: MDX documentation content

| Directory | Purpose |
|-----------|---------|
| `basics/` | Getting started documentation |
| `advanced/` | Advanced concepts |
| `api/primary/` | Core API reference |
| `api/helpers/` | Helper functions docs |
| `api/test-utils/` | Testing utilities docs |
| `api/old/` | Deprecated API docs |
| `faqs/` | FAQ content |
| `tooling/` | Build tool integration guides |
| `homepage/` | Homepage marketing content |

**Boundary Rules**:
- MDX files can import React components
- MDX files should NOT contain business logic
- Content organized by documentation section

---

### `/utils` - Shared Utilities

**Responsibility**: Helper functions, constants, shared logic

| File | Purpose | Used By |
|------|---------|---------|
| `colors.ts` | Color palette constants | Components |
| `fonts.ts` | Font family definitions | Components, `_app.tsx` |
| `media.ts` | Media query helpers | Components |
| `rem.ts` | Rem unit converter | Components |
| `sizes.ts` | Size constants | Components |
| `mdx-components.tsx` | MDX component mapping | `_app.tsx` |
| `scope.ts` | Live editor scope | `LiveEdit.tsx` |
| `githubApi.ts` | GitHub API integration | `releases.tsx` |
| `pathnameToTitle.ts` | URL to title conversion | Nav components |
| `titleToDash.ts` | Title to slug conversion | Documentation |
| `elementToText.ts` | DOM to text utility | Components |
| `escape.ts` | String escaping | Components |
| `stripIndent.ts` | Indentation utility | Components |
| `form.ts` | Form utilities | Components |

**Boundary Rules**:
- Utilities should be pure functions when possible
- Utilities should NOT import components
- Utilities should NOT import pages
- Utilities can import from `styled-components`

---

### `/test` - Test Suite

**Responsibility**: Component and utility testing

| Directory | Purpose |
|-----------|---------|
| `__mocks__/` | Jest mocks for external modules |
| `components/` | Component tests |
| `utils/` | Utility tests |
| `setup.ts` | Test setup configuration |

**Boundary Rules**:
- Tests can import components
- Tests can import utilities
- Tests should NOT be imported by production code

---

### `/public` - Static Assets

**Responsibility**: Static files served directly

| Directory | Purpose |
|-----------|---------|
| `icons/` | Icon assets |
| `screenshots/` | Feature screenshots |
| `screenshots/thumbnails/` | Thumbnail images |

**Boundary Rules**:
- Referenced via URL paths, not imports
- No TypeScript/JavaScript files

---

## Import Graph

```
pages/
  ├── imports → components/
  ├── imports → utils/
  ├── imports → sections/ (MDX)
  └── imports → styled-components

components/
  ├── imports → utils/
  ├── imports → other components/
  └── imports → styled-components

utils/
  ├── imports → styled-components
  └── imports → external packages

sections/ (MDX)
  ├── imports → components/
  └── compiled by MDX loader

test/
  ├── imports → components/
  ├── imports → utils/
  └── imports → test libraries
```

## Module Cohesion

| Module | Cohesion | Notes |
|--------|----------|-------|
| `pages/` | High | Each page is self-contained route |
| `components/` | High | UI components with clear purposes |
| `sections/` | High | Documentation content only |
| `utils/` | Medium | Mixed concerns (styling, API, text processing) |
| `test/` | High | Testing only |

## Evidence

- File structure analysis
- Import statements in key files
- `_app.tsx:6` imports from `utils/`
- `DocsLayout.tsx:1-10` import patterns
- Confidence: High
