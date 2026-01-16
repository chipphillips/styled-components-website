# Feature Matrix

## Website Features

| Feature | Source | Implementation Path | Status | Notes |
|---------|--------|---------------------|--------|-------|
| **Homepage** | Design | `pages/index.tsx` | Implemented | Landing page with live demo |
| **Documentation Hub** | Requirements | `pages/docs/index.tsx` | Implemented | Central docs navigation |
| **Basics Guide** | Content | `sections/basics/` | Implemented | 11 MDX files |
| **Advanced Guide** | Content | `sections/advanced/` | Implemented | 8 MDX files |
| **API Reference** | Content | `sections/api/` | Implemented | Comprehensive API docs |
| **Tooling Guide** | Content | `sections/tooling/` | Implemented | 8 MDX files |
| **FAQ Section** | Content | `sections/faqs/` | Implemented | 17+ MDX files |
| **Live Code Editor** | UX | `components/LiveEdit.tsx` | Implemented | react-live-runner integration |
| **Search** | UX | `components/Nav/SearchWithAlgolia.tsx` | Implemented | Algolia DocSearch |
| **Showcase** | Marketing | `pages/showcase.tsx` | Implemented | Project examples |
| **Ecosystem** | Marketing | `pages/ecosystem.tsx` | Implemented | Community resources |
| **Releases** | Content | `pages/releases.tsx` | Implemented | GitHub releases feed |
| **RSS Feed** | Content | `pages/api/proxy/` | Implemented | Atom feed for releases |
| **Responsive Nav** | UX | `components/Nav/` | Implemented | Mobile-friendly navigation |
| **Sidebar Menu** | UX | `components/Nav/Sidebar.tsx` | Implemented | Documentation sidebar |
| **SEO** | Marketing | `components/SeoHead.tsx` | Implemented | Meta tags management |
| **Company Logos** | Marketing | `companies-manifest.tsx` | Implemented | Companies using styled-components |

## Documentation Coverage

### Basics Section (11 topics)
| Topic | File | Status |
|-------|------|--------|
| Motivation | `sections/basics/motivation.mdx` | Complete |
| Installation | `sections/basics/installation.mdx` | Complete |
| Getting Started | `sections/basics/getting-started.mdx` | Complete |
| Adapting based on props | `sections/basics/adapting-based-on-props.mdx` | Complete |
| Extending styles | `sections/basics/extending-styles.mdx` | Complete |
| Styling any component | `sections/basics/styling-any-component.mdx` | Complete |
| Passed props | `sections/basics/passed-props.mdx` | Complete |
| Coming from CSS | `sections/basics/coming-from-css.mdx` | Complete |
| Attaching additional props | `sections/basics/attaching-additional-props.mdx` | Complete |
| Animations | `sections/basics/animations.mdx` | Complete |
| React Native | `sections/basics/react-native.mdx` | Complete |

### Advanced Section (8 topics)
| Topic | File | Status |
|-------|------|--------|
| Theming | `sections/advanced/theming.mdx` | Complete |
| Refs | `sections/advanced/refs.mdx` | Complete |
| Security | `sections/advanced/security.mdx` | Complete |
| Existing CSS | `sections/advanced/existing-css.mdx` | Complete |
| Tagged Template Literals | `sections/advanced/tagged-template-literals.mdx` | Complete |
| Server Side Rendering | `sections/advanced/server-side-rendering.mdx` | Complete |
| Referring to other components | `sections/advanced/components-as-selectors.mdx` | Complete |
| Style Objects | `sections/advanced/style-objects.mdx` | Complete |

### API Reference
| Category | Files | Status |
|----------|-------|--------|
| Primary API | 6 files | Complete |
| Helpers | 9 files | Complete |
| Test Utilities | 4 files | Complete |
| Previous APIs | 5 files | Complete |
| TypeScript | 1 file | Complete |
| Supported CSS | 1 file | Complete |

### Tooling (8 topics)
| Topic | Status |
|-------|--------|
| Babel Plugin | Complete |
| SWC Plugin | Complete |
| Babel Macro | Complete |
| TypeScript Plugin | Complete |
| Jest Integration | Complete |
| Stylelint | Complete |
| Styled Theming | Complete |
| Syntax Highlighting | Complete |

### FAQs (17+ topics)
- Migration guides for v4, v5, v6
- Common issues and solutions
- Browser support
- Framework integration

## Technical Features

| Feature | Implementation | Status |
|---------|----------------|--------|
| MDX Support | `@mdx-js/*` + `@next/mdx` | Implemented |
| SSR | Next.js + styled-components | Implemented |
| Code Highlighting | Prism + custom theme | Implemented |
| Responsive Design | Custom media utilities | Implemented |
| Accessibility | VisuallyHidden component | Partial |
| RTL Support | `stylis-plugin-rtl` | Implemented |

## Potential Gaps/Improvements

| Area | Current State | Recommendation |
|------|---------------|----------------|
| React 18 | Using React 17 | Upgrade path needed |
| Next.js | Version 12 | Consider upgrade to 14 |
| Testing | Enzyme (deprecated) | Migrate to React Testing Library |
| App Router | Using Pages Router | Optional migration |

## Evidence Sources

- File paths from glob results
- `pages/docs.json` structure
- Component analysis
- Package.json dependencies
