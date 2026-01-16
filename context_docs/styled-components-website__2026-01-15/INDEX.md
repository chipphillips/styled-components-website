# Context Documentation Index

## Repository: styled-components-website
## Snapshot Date: 2026-01-15
## Commit: `8616299`

---

## Quick Links

| Section | Description | Status |
|---------|-------------|--------|
| [Repository Inventory](#repository-inventory) | Structure, scripts, dependencies | Complete |
| [Stack Detection](#stack-detection) | Technologies and frameworks | Complete |
| [Documentation Map](#documentation-map) | Docs and feature matrix | Complete |
| [Architecture](#architecture) | System design and boundaries | Complete |
| [Data Models](#data-models) | Schemas and contracts | Complete |
| [UI/UX](#uiux) | Components and design system | Complete |
| [Diagrams](#diagrams) | Visual representations | Complete |
| [Quality Audit](#quality-audit) | Testing, lint, CI/CD | Complete |
| [Sprint Plan](#sprint-plan) | Prioritized backlog | Complete |

---

## Repository Overview

**Purpose**: Official documentation website for the styled-components CSS-in-JS library. Serves as marketing landing page, comprehensive API documentation, and interactive learning platform with live code examples.

**How to Run**:
```bash
# Install dependencies
yarn install

# Start development server (http://localhost:3000)
yarn dev

# Build for production
yarn build

# Run tests
yarn test
```

**Key Technologies**:
- Next.js 12.3.4 (Pages Router)
- React 17.0.2
- styled-components 6.0.0
- TypeScript 5.0.4
- MDX 2.3.0 for documentation
- Jest + Enzyme for testing
- Vercel for deployment

---

## Repository Inventory

- [Repository Tree](repo_inventory/repo_tree.md)
- [Scripts and Commands](repo_inventory/scripts_and_commands.md)
- [Environment and Config](repo_inventory/env_and_config.md)
- [Dependencies](repo_inventory/dependencies.md)

## Stack Detection

- [Stack Detection Report](repo_inventory/stack_detection.md)

## Documentation Map

- [Documentation Map](docs/docs_map.md)
- [Feature Matrix](docs/feature_matrix.md)
- [ADRs/Decisions](docs/adr_or_decisions.md)

## Architecture

- [Architecture Overview](architecture/architecture_overview.md)
- [Module Boundaries](architecture/module_boundaries.md)
- [Dependency Notes](architecture/dependency_notes.md)
- [Data Flow Overview](architecture/data_flow_overview.md)

## Data Models

- [Data Model Overview](data_models/data_model_overview.md)
- [Entities and Fields](data_models/entities_and_fields.md)
- [Schemas](data_models/schemas/)
- [Contracts](data_models/contracts/)

## UI/UX

- [UI Overview](ui_ux/ui_overview.md)
- [Routes and Views](ui_ux/routes_and_views.md)
- [Component Inventory](ui_ux/component_inventory.md)
- [Design System Audit](ui_ux/design_system_audit.md)
- [Tailwind Tokens](ui_ux/tailwind_tokens.md) (N/A - uses styled-components)

## Diagrams

- [ERD](diagrams/erd.mmd)
- [Data Flow](diagrams/data_flow.mmd)
- [User Flows](diagrams/user_flows.mmd)
- [Architecture](diagrams/architecture.mmd)
- [Component Map](diagrams/component_map.mmd)

## Quality Audit

- [Quality Overview](quality_audit/quality_overview.md)
- [Testing Audit](quality_audit/testing_audit.md)
- [Lint/Format Audit](quality_audit/lint_format_audit.md)
- [CI/CD Audit](quality_audit/ci_cd_audit.md)
- [Security Notes](quality_audit/security_notes.md)
- [Performance Notes](quality_audit/performance_notes.md)
- [Best Practices by Stack](quality_audit/best_practices_by_stack.md)

## Sprint Plan

- [Sprint Overview](sprint_plan/sprint_overview.md)
- [Backlog (Dependency Order)](sprint_plan/backlog_dependency_order.md)
- [Individual Tickets](sprint_plan/tickets/)

---

## Logs

- [Command Log](logs/command_log.md)
- [Evidence Log](logs/evidence_log.md)

---

## Health Summary

**Overall Status**: Functional with Technical Debt

**Overall Quality Score**: 6.5/10

**Top Risks**:
1. **Enzyme Deprecation** - Testing library deprecated, blocks React 18 upgrade
2. **Outdated Dependencies** - Next.js 12, React 17 (current: 14, 18)
3. **Legacy Packages** - @zeit/* packages deprecated
4. **Missing ESLint** - No static code analysis
5. **CI/CD Gaps** - No build verification in CI

**Recommended Next Steps**:
1. Remove deprecated @zeit packages (TICKET-001)
2. Add build step to CI (TICKET-002)
3. Add ESLint configuration (TICKET-003)
4. Begin Enzyme to React Testing Library migration (TICKET-005)
5. Plan React 18 upgrade after testing migration (TICKET-010)

---

## About This Snapshot

Generated: 2026-01-15
Commit: 861629901e7ae1e032f8124e7d0d94125f726db7
Author: Context Documentation Generator

This snapshot provides a comprehensive understanding of the styled-components-website repository for AI agents and developers. Regenerate when significant changes occur.
