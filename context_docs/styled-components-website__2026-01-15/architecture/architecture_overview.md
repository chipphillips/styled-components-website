# Architecture Overview

## System Purpose

The styled-components website is a **documentation and marketing site** for the styled-components CSS-in-JS library. It serves as:

1. **Marketing Landing Page** - Showcases styled-components features
2. **Documentation Hub** - Comprehensive API and usage documentation
3. **Interactive Learning** - Live code examples for experimentation
4. **Community Showcase** - Projects and companies using styled-components

## High-Level Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        VERCEL (Hosting)                         │
├─────────────────────────────────────────────────────────────────┤
│                        Next.js Application                       │
│  ┌────────────────┐  ┌─────────────────┐  ┌─────────────────┐  │
│  │     Pages      │  │   Components    │  │     Utils       │  │
│  │  (Routing)     │  │   (UI Layer)    │  │   (Helpers)     │  │
│  └───────┬────────┘  └────────┬────────┘  └────────┬────────┘  │
│          │                    │                     │           │
│  ┌───────▼────────────────────▼─────────────────────▼───────┐  │
│  │                    Sections (MDX Content)                 │  │
│  │              Documentation written in MDX                 │  │
│  └──────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                      External Services                          │
│  ┌──────────┐  ┌──────────┐  ┌──────────────┐                  │
│  │  GitHub  │  │  Algolia │  │ Static Assets│                  │
│  │   API    │  │ DocSearch│  │   (public/)  │                  │
│  └──────────┘  └──────────┘  └──────────────┘                  │
└─────────────────────────────────────────────────────────────────┘
```

## Technology Stack

| Layer | Technology | Purpose |
|-------|------------|---------|
| **Framework** | Next.js 12.3.4 | React framework with SSR |
| **UI Library** | React 17.0.2 | Component library |
| **Styling** | styled-components 6.0.0 | CSS-in-JS (dogfooding) |
| **Content** | MDX 2.3.0 | Markdown + JSX documentation |
| **Search** | Algolia DocSearch | Full-text search |
| **Deployment** | Vercel | Hosting and CI/CD |

## Architecture Patterns

### 1. Pages Router (File-based Routing)

```
pages/
├── _app.tsx          # App shell, global styles
├── _document.tsx     # HTML document structure
├── index.tsx         # Homepage (/)
├── showcase.tsx      # Showcase page (/showcase)
├── ecosystem.tsx     # Ecosystem page (/ecosystem)
├── releases.tsx      # Releases page (/releases)
├── docs/
│   ├── index.tsx     # Docs landing (/docs)
│   ├── basics.mdx    # Basics (/docs/basics)
│   ├── advanced.mdx  # Advanced (/docs/advanced)
│   ├── api.mdx       # API Reference (/docs/api)
│   ├── tooling.mdx   # Tooling (/docs/tooling)
│   └── faqs.mdx      # FAQs (/docs/faqs)
└── api/
    └── proxy/        # API proxy routes
```

### 2. Component Architecture

```
components/
├── Layout Components
│   ├── Layout.tsx        # Page layout primitives
│   ├── DocsLayout.tsx    # Documentation wrapper
│   └── Container/Content # Content containers
├── Navigation
│   └── Nav/              # Navigation system
│       ├── Navbar.tsx    # Top navigation
│       ├── Sidebar.tsx   # Docs sidebar
│       └── MobileNavbar.tsx
├── Content Components
│   ├── Code.tsx          # Syntax highlighting
│   ├── CodeBlock.tsx     # Code block wrapper
│   ├── LiveEdit.tsx      # Live code editor
│   └── Table.tsx         # Markdown tables
└── Marketing Components
    ├── CompanyLogos.tsx  # Company showcase
    ├── SmallShowcase/    # Project showcase
    └── UsersLogos/       # User logos carousel
```

### 3. Content Organization

```
sections/
├── basics/           # Getting started content
├── advanced/         # Advanced topics
├── api/
│   ├── primary/      # Core API docs
│   ├── helpers/      # Helper functions
│   ├── test-utils/   # Testing utilities
│   └── old/          # Deprecated APIs
├── faqs/             # FAQ content
├── tooling/          # Build tool integration
└── homepage/         # Homepage sections
```

## Data Flow

### Documentation Rendering
```
1. User navigates to /docs/basics
2. Next.js loads pages/docs/basics.mdx
3. MDX compiles Markdown + JSX
4. MDXProvider injects custom components
5. DocsLayout wraps with navigation
6. Styled-components renders CSS-in-JS
7. Page served with SSR hydration
```

### Live Code Editor
```
1. User views code example
2. LiveEdit component renders react-live-runner
3. Code editable in browser
4. Changes compile in real-time
5. Result rendered in preview pane
6. Scope provides styled-components imports
```

## Key Integration Points

| Integration | Purpose | Location |
|-------------|---------|----------|
| GitHub API | Releases data | `utils/githubApi.ts` |
| Algolia | Search | `components/Nav/SearchWithAlgolia.tsx` |
| MDX | Documentation | `sections/**/*.mdx` |
| Prism | Syntax highlighting | `components/prismTheme.ts` |

## Deployment Architecture

```
GitHub Repository
       │
       ▼ (push)
   Vercel CI/CD
       │
       ├── Build (next build)
       ├── Optimize
       └── Deploy
              │
              ▼
    Vercel Edge Network
              │
              ▼
         End Users
```

## Evidence

- File structure from repository exploration
- `package.json` dependencies
- `next.config.mjs` configuration
- Component file analysis
- Confidence: High
