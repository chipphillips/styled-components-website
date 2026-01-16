# Context and Learning Aid (CLA)

## styled-components-website

This document provides a quick reference for AI agents and developers to understand this repository.

---

## Repository Purpose

The **styled-components-website** is the official documentation website for the [styled-components](https://github.com/styled-components/styled-components) CSS-in-JS library. It serves as:

- Marketing landing page showcasing styled-components features
- Comprehensive API documentation and usage guides
- Interactive learning platform with live code examples
- Community showcase of projects using styled-components

**Live Site**: https://styled-components.com

---

## How to Run

```bash
# Clone the repository
git clone https://github.com/styled-components/styled-components-website

# Install dependencies (requires Yarn)
yarn install

# Start development server
yarn dev
# Visit http://localhost:3000

# Run tests
yarn test

# Build for production
yarn build

# Analyze bundle size
yarn analyze
```

**Requirements**:
- Node.js (version specified in `.nvmrc`)
- Yarn 3.5+

---

## Context Documentation

Comprehensive context documentation is available at:

```
context_docs/styled-components-website__2026-01-15/
```

### Quick Navigation

| Document | Purpose |
|----------|---------|
| [INDEX.md](context_docs/styled-components-website__2026-01-15/INDEX.md) | Main navigation hub |
| [Architecture Overview](context_docs/styled-components-website__2026-01-15/architecture/architecture_overview.md) | System design |
| [Component Inventory](context_docs/styled-components-website__2026-01-15/ui_ux/component_inventory.md) | All UI components |
| [Feature Matrix](context_docs/styled-components-website__2026-01-15/docs/feature_matrix.md) | Feature status |
| [Quality Overview](context_docs/styled-components-website__2026-01-15/quality_audit/quality_overview.md) | Quality metrics |
| [Sprint Plan](context_docs/styled-components-website__2026-01-15/sprint_plan/sprint_overview.md) | Prioritized work |

### Key Diagrams

| Diagram | File |
|---------|------|
| Architecture | `diagrams/architecture.mmd` |
| Data Flow | `diagrams/data_flow.mmd` |
| User Flows | `diagrams/user_flows.mmd` |
| Component Map | `diagrams/component_map.mmd` |

---

## Technology Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 12.3.4 |
| UI Library | React | 17.0.2 |
| Styling | styled-components | 6.0.0 |
| Language | TypeScript | 5.0.4 |
| Documentation | MDX | 2.3.0 |
| Testing | Jest + Enzyme | 29.5.0 |
| Deployment | Vercel | - |

---

## Current Health Summary

**Status**: Functional with Technical Debt
**Quality Score**: 6.5/10

### Top Risks

1. **Enzyme Deprecated** - Testing library blocks React 18 upgrade
2. **Outdated Packages** - Next.js 12, React 17 need updates
3. **Legacy Dependencies** - @zeit/* packages deprecated
4. **Missing ESLint** - No static code analysis
5. **CI Gaps** - Build not verified in CI

### Immediate Actions

1. Remove deprecated @zeit packages
2. Add build step to CI
3. Add ESLint configuration

---

## Regenerating Context Docs

To regenerate this context snapshot:

1. Run the "Repo Context Snapshot Generator" prompt
2. Specify this repository as the target
3. Review generated documentation
4. Commit and push changes

**Last Generated**: 2026-01-15
**Commit**: `8616299`

---

## Contributing

See [README.md](README.md) for contribution guidelines.

## License

MIT License - See [LICENSE](LICENSE)
