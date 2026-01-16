# Architecture Decision Records

## Inferred Decisions

No formal ADR folder was found in this repository. The following decisions are inferred from the codebase structure and configuration.

---

### ADR-001: Use Next.js with Pages Router

**Status**: Implemented

**Context**: Need a React framework for the documentation website.

**Decision**: Use Next.js with the Pages Router architecture.

**Evidence**:
- `pages/` directory structure
- `next.config.mjs` configuration
- No `app/` directory present

**Consequences**:
- File-based routing via `pages/`
- `_app.tsx` and `_document.tsx` for customization
- MDX pages supported directly in `pages/docs/`

---

### ADR-002: Use styled-components for Styling

**Status**: Implemented

**Context**: This is the styled-components documentation website, should showcase the library.

**Decision**: Use styled-components exclusively for all styling (dogfooding).

**Evidence**:
- `package.json`: `styled-components: ^6.0.0`
- All components use styled-components
- No CSS frameworks or utility classes (no Tailwind)
- `utils/colors.ts`, `utils/media.ts` - custom design tokens

**Consequences**:
- Demonstrates styled-components capabilities
- Custom media query utilities instead of CSS framework
- Manual design token management

---

### ADR-003: Use MDX for Documentation Content

**Status**: Implemented

**Context**: Need to write documentation with embedded React components.

**Decision**: Use MDX (Markdown + JSX) for all documentation content.

**Evidence**:
- `@mdx-js/*` packages in dependencies
- `sections/` folder full of `.mdx` files
- `utils/mdx-components.tsx` for custom component mapping
- `pages/docs/*.mdx` files

**Consequences**:
- Interactive documentation with live examples
- React components embedded in Markdown
- Custom component mapping via MDXProvider

---

### ADR-004: Use react-live-runner for Live Code Examples

**Status**: Implemented

**Context**: Want to show interactive, editable code examples in documentation.

**Decision**: Use react-live-runner for live code editing.

**Evidence**:
- `package.json`: `react-live-runner: ^1.0.5`
- `components/LiveEdit.tsx` - Live editor component
- `utils/scope.ts` - Scope for live code execution
- Homepage features live code demo

**Consequences**:
- Users can edit and see code results in real-time
- Need to manage scope (available imports in editor)
- Security consideration for code execution

---

### ADR-005: Use Algolia DocSearch for Search

**Status**: Implemented

**Context**: Need search functionality for documentation.

**Decision**: Use Algolia DocSearch.

**Evidence**:
- `package.json`: `@docsearch/js: ^3.0.0`
- `components/Nav/SearchWithAlgolia.tsx`

**Consequences**:
- External dependency on Algolia service
- Fast, relevant search results
- Requires Algolia account/configuration

---

### ADR-006: Use Jest + Enzyme for Testing

**Status**: Implemented (but outdated)

**Context**: Need component testing.

**Decision**: Use Jest with Enzyme for React component testing.

**Evidence**:
- `package.json`: `jest: ^29.5.0`, `enzyme: ^3.11.0`
- `test/` directory with `*.spec.tsx` files
- Snapshot testing enabled

**Consequences**:
- Enzyme is deprecated and doesn't support React 18
- Blocks React upgrade path
- Should migrate to React Testing Library

---

### ADR-007: Use Vercel for Deployment

**Status**: Implemented

**Context**: Need hosting for the documentation website.

**Decision**: Deploy on Vercel.

**Evidence**:
- `vercel.json` configuration file
- Next.js framework (Vercel-optimized)

**Consequences**:
- Automatic deployments on push
- Preview deployments for PRs
- Edge optimization for static content

---

### ADR-008: Use Yarn 3 (Berry) for Package Management

**Status**: Implemented

**Context**: Need package manager for dependencies.

**Decision**: Use Yarn 3.5.0 (Berry).

**Evidence**:
- `package.json`: `"packageManager": "yarn@3.5.0"`
- `.yarnrc.yml` configuration
- `yarn.lock` file

**Consequences**:
- Plug'n'Play available (not used by default)
- Strict dependency resolution
- Requires Yarn to be installed

---

## Open Questions

1. **React 18 Migration**: When will React 18 be adopted? Blocked by Enzyme.
2. **Next.js 14 Migration**: Will App Router be adopted?
3. **Testing Migration**: Plan to migrate from Enzyme to React Testing Library?

## Confidence

- All ADRs inferred from codebase analysis
- Confidence Level: Medium to High
- No formal ADR documentation found
