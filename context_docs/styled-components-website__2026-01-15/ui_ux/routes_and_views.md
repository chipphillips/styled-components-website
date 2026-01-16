# Routes and Views

## Routing Architecture

Uses **Next.js Pages Router** with file-based routing.

## Route Map

### Main Pages

| Route | File | View | Layout |
|-------|------|------|--------|
| `/` | `pages/index.tsx` | Homepage | Custom (marketing) |
| `/docs` | `pages/docs/index.tsx` | Docs landing | DocsLayout |
| `/docs/basics` | `pages/docs/basics.mdx` | Basics guide | DocsLayout |
| `/docs/advanced` | `pages/docs/advanced.mdx` | Advanced guide | DocsLayout |
| `/docs/api` | `pages/docs/api.mdx` | API reference | DocsLayout |
| `/docs/tooling` | `pages/docs/tooling.mdx` | Tooling guide | DocsLayout |
| `/docs/faqs` | `pages/docs/faqs.mdx` | FAQ section | DocsLayout |
| `/showcase` | `pages/showcase.tsx` | Project showcase | DocsLayout |
| `/ecosystem` | `pages/ecosystem.tsx` | Community resources | DocsLayout |
| `/releases` | `pages/releases.tsx` | Release history | DocsLayout |

### API Routes

| Route | File | Purpose |
|-------|------|---------|
| `/api/proxy/*` | `pages/api/proxy/` | Proxy for external APIs |

### System Pages

| Route | File | Purpose |
|-------|------|---------|
| N/A | `pages/_app.tsx` | App shell, global providers |
| N/A | `pages/_document.tsx` | HTML document structure |

## View Details

### Homepage (`/`)

**File**: `pages/index.tsx`

**Sections**:
- Hero section with animated logo
- Live code editor demo
- Feature highlights
- Company logos carousel
- Project showcase
- Getting started CTA

**Components Used**:
- `LiveEdit` - Interactive code editor
- `CompanyLogos` - Logo display
- `SmallShowcase` - Project grid
- `UsersLogos` - Logo carousel

### Documentation Landing (`/docs`)

**File**: `pages/docs/index.tsx`

**Layout**: DocsLayout with sidebar

**Content**:
- Welcome message
- Section navigation
- Quick links to popular topics

### Documentation Sections (`/docs/*`)

**Files**: `pages/docs/*.mdx`

**Layout**: DocsLayout with sidebar

**Features**:
- Table of contents in sidebar
- Anchor links for sections
- Code examples (static and live)
- Note/callout boxes
- Navigation between sections

### Showcase (`/showcase`)

**File**: `pages/showcase.tsx`

**Content**:
- Grid of projects using styled-components
- Project screenshots
- Links to live sites

### Ecosystem (`/ecosystem`)

**File**: `pages/ecosystem.tsx`

**Content**:
- Community resources
- Related tools and libraries
- Integration guides

### Releases (`/releases`)

**File**: `pages/releases.tsx`

**Content**:
- Release history from GitHub
- Version changelog
- RSS feed link

## Navigation Flow

```
Homepage (/)
    │
    ├── Docs (/docs)
    │     ├── Basics (/docs/basics)
    │     ├── Advanced (/docs/advanced)
    │     ├── API (/docs/api)
    │     ├── Tooling (/docs/tooling)
    │     └── FAQs (/docs/faqs)
    │
    ├── Showcase (/showcase)
    ├── Ecosystem (/ecosystem)
    └── Releases (/releases)
```

## Layout Components

### DocsLayout

**File**: `components/DocsLayout.tsx`

**Features**:
- Top navigation bar
- Collapsible sidebar
- Mobile-responsive navigation
- SEO head management
- RSS feed for releases page

**Props**:
```typescript
interface DocsLayoutProps {
  description?: string;
  pages?: NavProps['pages'];
  title?: string;
  useDocsSidebarMenu?: boolean;
}
```

## URL Structure

### Documentation URLs

```
/docs                    → Documentation landing
/docs/basics             → Basics section
/docs/basics#installation → Specific section anchor
/docs/api                → API reference
/docs/api#helpers        → API helpers section
```

### Anchor Links

Documentation pages support anchor links for direct section navigation:
- Generated from heading IDs
- Managed by `components/Anchor.tsx`
- Updates URL hash on click

## Evidence

- `pages/` directory structure
- `pages/docs.json` - Navigation metadata
- `components/DocsLayout.tsx` - Layout component
- Confidence: High
