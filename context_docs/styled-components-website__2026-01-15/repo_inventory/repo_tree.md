# Repository Tree

## styled-components-website

**Generated**: 2026-01-15
**Commit**: `8616299`

```
styled-components-website/
├── .github/                          # GitHub workflows and issue templates
│   ├── ISSUE_TEMPLATE/
│   └── workflows/                    # CI/CD pipelines
├── .husky/                           # Git hooks (pre-commit)
├── .vscode/                          # VS Code settings
├── components/                       # Shared React components (TypeScript)
│   ├── Anchor.tsx                    # Link components with navigation
│   ├── BlmBanner.tsx                 # BLM banner component
│   ├── CaptureScroll.tsx             # Scroll detection utilities
│   ├── Code.tsx                      # Code/syntax highlighting
│   ├── CodeBlock.tsx                 # Code block wrapper
│   ├── CompanyLogos.tsx              # Company logos display
│   ├── DocsLayout.tsx                # Documentation page layout wrapper
│   ├── Footer/                       # Footer component
│   ├── Image.tsx                     # Image component with optimization
│   ├── Label.tsx                     # Form label component
│   ├── Layout.tsx                    # Main layout wrapper
│   ├── Link.tsx                      # Next.js Link wrapper
│   ├── LiveEdit.tsx                  # Live code editor (react-live-runner)
│   ├── Loading.tsx                   # Loading spinner
│   ├── Nav/                          # Navigation bar component
│   ├── NextPage.tsx                  # Wrapper for Next.js pages
│   ├── Note.tsx                      # Note/callout component
│   ├── SeoHead.tsx                   # SEO metadata manager
│   ├── Slider/                       # Image slider component
│   ├── SmallShowcase.tsx             # Project showcase grid
│   ├── Table.tsx                     # Markdown table component
│   ├── UsersLogos/                   # Company logos carousel
│   ├── VisuallyHidden.tsx            # Accessibility utilities
│   ├── WithIsScrolled.tsx            # Scroll event handler
│   └── prismTheme.ts                 # Syntax highlighting theme
├── pages/                            # Next.js page routes
│   ├── _app.tsx                      # App shell (global styles, MDX provider)
│   ├── _document.tsx                 # HTML document structure
│   ├── api/                          # API routes
│   │   └── proxy/                    # Proxy endpoints
│   ├── docs/                         # Dynamic docs pages
│   │   ├── advanced.mdx
│   │   ├── api.mdx
│   │   ├── basics.mdx
│   │   ├── faqs.mdx
│   │   ├── index.tsx                 # Docs landing page
│   │   └── tooling.mdx
│   ├── docs.json                     # Documentation metadata
│   ├── ecosystem.tsx                 # Ecosystem/community page
│   ├── index.tsx                     # Homepage
│   ├── releases.tsx                  # Releases/changelog page
│   └── showcase.tsx                  # Project showcase page
├── sections/                         # Markdown documentation content
│   ├── advanced/                     # Advanced concepts (9 files)
│   ├── api/                          # API documentation
│   │   ├── primary/                  # Main API methods
│   │   ├── helpers/                  # Helper functions
│   │   ├── test-utils/               # Testing utilities
│   │   └── old/                      # Legacy/deprecated API docs
│   ├── basics/                       # Getting started guides (10 files)
│   ├── faqs/                         # FAQ content
│   ├── homepage/                     # Homepage sections
│   └── tooling/                      # Build tool integration guides (5 files)
├── public/                           # Static assets
│   ├── icons/                        # Icon assets
│   ├── screenshots/                  # Feature screenshots
│   └── screenshots/thumbnails/       # Thumbnail images
├── test/                             # Test suite
│   ├── __mocks__/                    # Jest mocks
│   ├── components/                   # Component tests
│   └── utils/                        # Utility tests
├── utils/                            # Shared utilities (14 files)
├── companies-manifest.tsx            # Companies using styled-components
├── package.json                      # Project dependencies
├── tsconfig.json                     # TypeScript configuration
├── next.config.mjs                   # Next.js configuration
├── .jest.config.js                   # Jest testing configuration
├── .prettierrc                       # Code formatter settings
├── vercel.json                       # Vercel deployment config
├── LICENSE                           # MIT License
├── README.md                         # Project README
└── yarn.lock                         # Dependency lock file
```

## Key Directories Summary

| Directory | Purpose | File Count |
|-----------|---------|------------|
| `components/` | Reusable React components | ~25 files |
| `pages/` | Next.js routes | ~10 files |
| `sections/` | MDX documentation content | ~40 files |
| `utils/` | Helper functions | ~14 files |
| `test/` | Jest tests | ~10 files |
| `public/` | Static assets | Various |

## Excluded from Tree
- `node_modules/` - Dependencies
- `.git/` - Git history
- `.next/` - Build artifacts
- `context_docs/` - Auto-generated docs
