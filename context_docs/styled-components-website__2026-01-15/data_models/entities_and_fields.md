# Entities and Fields

## Data Structures

Since this is a static documentation site without a database, the "entities" are TypeScript interfaces and data structures used throughout the application.

---

### DocsPage (Navigation Structure)

**Source**: `pages/docs.json`

```typescript
interface DocsSection {
  title: string;
  pathname?: string;  // Optional, derived from title if not provided
}

interface DocsPage {
  title: string;
  pathname: string;
  sections: DocsSection[];
}

interface DocsConfig {
  pages: DocsPage[];
}
```

**Instances**:
- Basics (11 sections)
- Advanced (8 sections)
- API Reference (6 sections)
- Tooling (8 sections)
- FAQs (17 sections)

---

### Company (Companies Manifest)

**Source**: `companies-manifest.tsx`

```typescript
interface Company {
  name: string;
  logo: string | ReactNode;
  url?: string;
}
```

**Purpose**: Display companies using styled-components on homepage and showcase

---

### NavProps (Navigation)

**Source**: `components/Nav/index.tsx`

```typescript
interface NavProps {
  pages?: DocsPage[];
  useDocsSidebarMenu?: boolean;
  isSideFolded?: boolean;
  isMobileNavFolded?: boolean;
  onSideToggle?: () => void;
  onMobileNavToggle?: () => void;
}
```

---

### DocsLayoutProps (Layout)

**Source**: `components/DocsLayout.tsx`

```typescript
interface DocsLayoutProps {
  description?: string;
  pages?: NavProps['pages'];
  title?: string;
  useDocsSidebarMenu?: boolean;
}
```

---

### GitHub Release (External)

**Source**: GitHub API via `utils/githubApi.ts`

```typescript
interface GitHubRelease {
  tag_name: string;
  name: string;
  body: string;
  published_at: string;
  html_url: string;
}
```

**Usage**: Fetched at runtime for releases page

---

### Live Editor Scope

**Source**: `utils/scope.ts`

```typescript
interface LiveEditorScope {
  styled: typeof styled;
  css: typeof css;
  keyframes: typeof keyframes;
  // ... other styled-components exports
  React: typeof React;
}
```

**Purpose**: Available imports in live code editor

---

## Design Tokens (Pseudo-Entities)

### Colors

**Source**: `utils/colors.ts`

```typescript
const colors = {
  paleGrey: '#efefef',
  lightGrey: 'rgba(20, 20, 20, 0.1)',
  darkGrey: darken(0.05, '#282a36'),
  grey: '#282a36',
  red: '#ff5555',
  violetRed: 'rgb(219, 112, 147)',
  gold: shade(0.9, 'rgb(243, 182, 97)'),
  // BLM palette
  blmGrey: 'rgb(33, 33, 33)',
  blmBlack: 'rgb(0, 0, 0)',
  blmMetal: 'rgb(66, 66, 66)',
};
```

### Media Breakpoints

**Source**: `utils/media.ts`

```typescript
const breakpoints = {
  mobile: '1000px',  // @media (max-width: 62.5em)
  phone: '650px',    // @media (max-width: 40.625em)
};
```

### Sizes

**Source**: `utils/sizes.ts`

```typescript
const sizes = {
  sidebarWidth: number;  // Sidebar width constant
  // ... other size constants
};
```

---

## Entity Relationships

```
DocsConfig
    │
    └── has many → DocsPage
                      │
                      └── has many → DocsSection

NavProps
    │
    └── references → DocsPage[]

DocsLayoutProps
    │
    └── references → NavProps['pages']
```

## Static vs Dynamic Data

| Data | Type | Source |
|------|------|--------|
| Documentation | Static | MDX files (build time) |
| Navigation | Static | `docs.json` (build time) |
| Companies | Static | `companies-manifest.tsx` (build time) |
| GitHub Releases | Dynamic | GitHub API (runtime) |
| Search Results | Dynamic | Algolia API (runtime) |

## Evidence

- `pages/docs.json` - Navigation structure
- `components/DocsLayout.tsx:12-17` - Interface definition
- `utils/colors.ts` - Color constants
- `utils/media.ts` - Media queries
- Confidence: High
