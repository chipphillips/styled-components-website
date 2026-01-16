# Dependency Notes

## Internal Dependencies

### Component Dependencies

```
DocsLayout
├── Layout (Container, Content, Title)
├── Nav (navigation system)
├── SeoHead (SEO meta)
├── Link (custom link component)
└── VisuallyHidden (accessibility)

Nav/index.tsx
├── Navbar
├── MobileNavbar
├── Sidebar
├── SidebarMenus
├── SearchWithAlgolia
└── Logo

LiveEdit
├── react-live-runner
├── utils/scope (editor scope)
└── prismTheme
```

### Utility Dependencies

```
colors.ts
└── polished (lighten, darken, shade)

media.ts
└── styled-components (css helper)

mdx-components.tsx
├── components/Anchor
├── components/CodeBlock
├── components/LiveEdit
├── components/Note
├── components/Table
└── components/Link

scope.ts
└── styled-components (for live editor)
```

## External Dependencies Analysis

### Critical Dependencies

| Package | Version | Purpose | Upgrade Risk |
|---------|---------|---------|--------------|
| `next` | ^12.3.4 | Framework | High - Breaking changes |
| `react` | ^17.0.2 | UI Library | High - Breaking changes |
| `styled-components` | ^6.0.0 | Styling | Low - Current major |
| `@mdx-js/*` | ^2.3.0 | Documentation | Low - Stable |

### Deprecated Dependencies

| Package | Issue | Replacement |
|---------|-------|-------------|
| `@zeit/next-mdx` | Deprecated | `@next/mdx` (already present) |
| `@zeit/next-source-maps` | Deprecated | Built-in Next.js |
| `enzyme` | Deprecated | React Testing Library |

### Peer Dependency Considerations

```
styled-components@6.0.0
├── requires: react >=16.8
├── requires: react-dom >=16.8
└── compatible with React 17 ✓

@mdx-js/react@2.3.0
├── requires: react >=16
└── compatible with React 17 ✓
```

## Circular Dependency Check

**Status**: No circular dependencies detected

The codebase follows a clean unidirectional dependency flow:
```
pages → components → utils
           ↓
       sections (MDX)
```

## Bundle Impact Analysis

### Heavy Dependencies

| Package | Impact | Notes |
|---------|--------|-------|
| `styled-components` | Medium | Required for styling |
| `@docsearch/js` | Medium | Search functionality |
| `react-live-runner` | Medium | Live code editor |
| `@styled-icons/*` | Low-Medium | Icon bundles (tree-shakeable) |
| `prism` | Low | Syntax highlighting |

### Optimization Opportunities

1. **Code Splitting**: MDX pages already code-split by Next.js
2. **Tree Shaking**: Styled-icons support tree shaking
3. **Dynamic Imports**: Could lazy-load LiveEdit component
4. **Bundle Analysis**: Available via `yarn analyze`

## Version Constraints

### React Version Constraint

```json
{
  "resolutions": {
    "@types/react": "^17.0.0"
  }
}
```

This resolution forces React 17 types, indicating intentional React 17 usage.

### Blocking Factors for Upgrades

| Target | Blocker | Resolution Path |
|--------|---------|-----------------|
| React 18 | Enzyme testing | Migrate to React Testing Library |
| Next.js 14 | React version | Upgrade React first |
| Node 20 | None detected | Should work |

## Dependency Health Score

| Category | Score | Notes |
|----------|-------|-------|
| Security | Good | No known vulnerabilities flagged |
| Freshness | Medium | Some packages behind latest |
| Maintainability | Medium | Deprecated packages present |
| Bundle Size | Good | Reasonable for docs site |

## Recommended Actions

### Immediate
1. Remove `@zeit/next-mdx` (redundant with `@next/mdx`)
2. Remove `@zeit/next-source-maps` (built-in now)

### Short-term
1. Migrate from Enzyme to React Testing Library
2. Update `axios` to latest version

### Long-term
1. Upgrade to React 18
2. Upgrade to Next.js 14
3. Consider App Router migration (optional)

## Evidence

- `package.json` analysis
- Import statements in components
- `next.config.mjs` configuration
- Confidence: High
