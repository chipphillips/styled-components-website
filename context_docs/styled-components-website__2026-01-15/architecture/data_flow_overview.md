# Data Flow Overview

## Primary Data Flows

### 1. Documentation Rendering Flow

```
┌─────────────┐     ┌──────────────┐     ┌────────────────┐
│   MDX File  │────▶│  MDX Loader  │────▶│ React Component│
│ sections/*  │     │  (compile)   │     │    (hydrate)   │
└─────────────┘     └──────────────┘     └────────────────┘
                           │
                    ┌──────▼──────┐
                    │ MDXProvider │
                    │ components  │
                    └──────┬──────┘
                           │
            ┌──────────────┼──────────────┐
            ▼              ▼              ▼
      ┌─────────┐   ┌───────────┐   ┌──────────┐
      │CodeBlock│   │  LiveEdit │   │   Note   │
      └─────────┘   └───────────┘   └──────────┘
```

**Flow Description**:
1. MDX file is loaded by Next.js
2. `@next/mdx` compiles MDX to React components
3. `MDXProvider` in `_app.tsx` provides custom components
4. Custom components (CodeBlock, LiveEdit, Note) render
5. styled-components inject CSS at runtime

### 2. Navigation State Flow

```
┌─────────────┐     ┌──────────────┐     ┌───────────────┐
│   Router    │────▶│  DocsLayout  │────▶│     Nav       │
│   (URL)     │     │   (state)    │     │  (render)     │
└─────────────┘     └──────────────┘     └───────────────┘
                           │
                    ┌──────▼──────┐
                    │ State:      │
                    │ - isSideFolded
                    │ - isMobileNavFolded
                    └─────────────┘
```

**State Management**:
- `DocsLayout.tsx:42-43`: Local React state for sidebar/mobile nav
- URL changes trigger state reset (`useEffect` on `router.asPath`)
- No global state management (Redux, Zustand, etc.)

### 3. Live Code Editor Flow

```
┌──────────────┐     ┌───────────────┐     ┌──────────────┐
│  Code Input  │────▶│ react-live-  │────▶│  Rendered    │
│   (string)   │     │   runner     │     │   Output     │
└──────────────┘     └───────────────┘     └──────────────┘
                            │
                     ┌──────▼──────┐
                     │   Scope     │
                     │ (imports)   │
                     └─────────────┘
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
        ┌─────────┐   ┌─────────┐   ┌─────────┐
        │ styled  │   │ React   │   │ styled- │
        │         │   │         │   │components│
        └─────────┘   └─────────┘   └─────────┘
```

**Scope Contents** (from `utils/scope.ts`):
- `styled` from styled-components
- `React` and React hooks
- styled-components utilities (css, keyframes, etc.)

### 4. GitHub Releases Flow

```
┌──────────────┐     ┌───────────────┐     ┌──────────────┐
│ GitHub API   │────▶│ githubApi.ts  │────▶│  releases.tsx│
│  (external)  │     │   (fetch)     │     │   (render)   │
└──────────────┘     └───────────────┘     └──────────────┘
```

**Flow Description**:
1. `releases.tsx` calls GitHub API utilities
2. `utils/githubApi.ts` fetches release data
3. Data rendered in releases page
4. RSS feed generated via API proxy

### 5. Search Flow

```
┌──────────────┐     ┌───────────────┐     ┌──────────────┐
│  User Input  │────▶│ DocSearch JS  │────▶│  Algolia API │
└──────────────┘     └───────────────┘     └──────────────┘
                                                  │
                                           ┌──────▼──────┐
                                           │  Results    │
                                           │  (render)   │
                                           └─────────────┘
```

**Integration Point**: `components/Nav/SearchWithAlgolia.tsx`

## Data Sources

| Source | Type | Consumer |
|--------|------|----------|
| MDX Files | Static | Documentation pages |
| `docs.json` | Static | Navigation structure |
| `companies-manifest.tsx` | Static | Company logos |
| GitHub API | External | Releases page |
| Algolia | External | Search |

## State Locations

| State | Location | Scope |
|-------|----------|-------|
| Navigation toggle | `DocsLayout.tsx` | Page component |
| Scroll position | `WithIsScrolled.tsx` | HOC pattern |
| Live code | `LiveEdit.tsx` | Component local |
| Route | Next.js Router | Global |

## Data Transformations

### MDX Processing Pipeline

```
Raw MDX → MDX Compiler → React Elements → Custom Components → Styled Output
```

### URL to Title Transformation

```typescript
// utils/pathnameToTitle.ts
"/docs/basics/getting-started" → "Getting Started"
```

### Title to Slug Transformation

```typescript
// utils/titleToDash.ts
"Getting Started" → "getting-started"
```

## Caching Strategy

| Data | Cache | TTL |
|------|-------|-----|
| Static pages | Build-time | Forever (until redeploy) |
| GitHub releases | None | Real-time fetch |
| Algolia search | Algolia-managed | External |
| Static assets | CDN | Long-term |

## Evidence

- `DocsLayout.tsx:42-43` - State management
- `utils/githubApi.ts` - GitHub integration
- `utils/scope.ts` - Live editor scope
- `components/Nav/SearchWithAlgolia.tsx` - Search integration
- Confidence: High
