# Documentation Map

## Documentation Structure

The styled-components website uses MDX (Markdown with JSX) for all documentation content.

### Documentation Pages (Entry Points)

| Page | Path | Purpose |
|------|------|---------|
| Docs Index | `pages/docs/index.tsx` | Documentation landing page |
| Basics | `pages/docs/basics.mdx` | Getting started section |
| Advanced | `pages/docs/advanced.mdx` | Advanced topics section |
| API | `pages/docs/api.mdx` | API reference section |
| Tooling | `pages/docs/tooling.mdx` | Build tool integrations |
| FAQs | `pages/docs/faqs.mdx` | Frequently asked questions |

### Documentation Content (Sections)

#### Basics (`sections/basics/`)
| File | Title | Status |
|------|-------|--------|
| `motivation.mdx` | Motivation | Implemented |
| `installation.mdx` | Installation | Implemented |
| `getting-started.mdx` | Getting Started | Implemented |
| `adapting-based-on-props.mdx` | Adapting based on props | Implemented |
| `extending-styles.mdx` | Extending styles | Implemented |
| `styling-any-component.mdx` | Styling any component | Implemented |
| `passed-props.mdx` | Passed props | Implemented |
| `coming-from-css.mdx` | Coming from CSS | Implemented |
| `attaching-additional-props.mdx` | Attaching additional props | Implemented |
| `animations.mdx` | Animations | Implemented |
| `react-native.mdx` | React Native | Implemented |

#### Advanced (`sections/advanced/`)
| File | Title | Status |
|------|-------|--------|
| `theming.mdx` | Theming | Implemented |
| `refs.mdx` | Refs | Implemented |
| `security.mdx` | Security | Implemented |
| `existing-css.mdx` | Existing CSS | Implemented |
| `tagged-template-literals.mdx` | Tagged Template Literals | Implemented |
| `server-side-rendering.mdx` | Server Side Rendering | Implemented |
| `components-as-selectors.mdx` | Referring to other components | Implemented |
| `style-objects.mdx` | Style Objects | Implemented |

#### API Reference (`sections/api/`)
| Subdirectory | Content |
|--------------|---------|
| `primary/` | Core API (styled, css, ThemeProvider, etc.) |
| `helpers/` | Helper functions (keyframes, createGlobalStyle, etc.) |
| `test-utils/` | Testing utilities (find, findAll, enzyme-find) |
| `old/` | Deprecated APIs (injectGlobal, extend, etc.) |
| `supported-css.mdx` | CSS support documentation |
| `typescript.mdx` | TypeScript integration |

#### Tooling (`sections/tooling/`)
| File | Title | Status |
|------|-------|--------|
| `babel-plugin.mdx` | Babel Plugin | Implemented |
| `swc-plugin.mdx` | SWC Plugin | Implemented |
| `babel-macro.mdx` | Babel Macro | Implemented |
| `typescript-plugin.mdx` | TypeScript Plugin | Implemented |
| `jest.mdx` | Jest Integration | Implemented |
| `stylelint.mdx` | Stylelint | Implemented |
| `styled-theming.mdx` | Styled Theming | Implemented |
| `syntax-highlighting.mdx` | Syntax Highlighting | Implemented |

#### FAQs (`sections/faqs/`)
- Migration guides (v4, v5, v6)
- Common issues and solutions
- Browser support
- Framework integration (CRA, npm link issues)

### Documentation Metadata

**File**: `pages/docs.json`

Contains structured navigation data for all documentation sections including:
- Page titles
- Pathname mappings
- Section hierarchy

### Other Documentation

| File | Purpose |
|------|---------|
| `README.md` | Repository overview |
| `LICENSE` | MIT license |
| `sections/homepage/getting-started.mdx` | Homepage getting started section |

## Documentation Features

1. **MDX Integration** - React components in Markdown
2. **Live Code Editor** - Interactive examples with `react-live-runner`
3. **Algolia DocSearch** - Full-text search functionality
4. **Syntax Highlighting** - Prism-based code highlighting
5. **Responsive Design** - Mobile-friendly documentation

## Evidence

- MDX files count: 75+ files in `sections/`
- Documentation pages: 5 main sections
- Documentation structure: `pages/docs.json`
- Confidence: High
