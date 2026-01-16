# Instructions for Using Context Documentation

## For AI Agents

When working with this repository, follow this sequence:

1. **First**: Read `INDEX.md` to understand the repository overview
2. **Second**: Check `MANIFEST.json` for structured metadata
3. **Third**: Navigate to specific sections based on the task:
   - Bug fixes → `architecture/` + `quality_audit/`
   - New features → `docs/feature_matrix.md` + `architecture/`
   - UI work → `ui_ux/` + `diagrams/component_map.mmd`
   - Data work → `data_models/` + `diagrams/erd.mmd`
   - Planning → `sprint_plan/`

## For Developers

### Understanding the Codebase
1. Start with `repo_inventory/repo_tree.md` for structure
2. Review `architecture/architecture_overview.md` for high-level design
3. Check `docs/feature_matrix.md` for feature status

### Making Changes
1. Identify affected modules in `architecture/module_boundaries.md`
2. Review relevant data models in `data_models/`
3. Check quality requirements in `quality_audit/best_practices_by_stack.md`

### Planning Work
1. Review `sprint_plan/sprint_overview.md` for current priorities
2. Check `sprint_plan/backlog_dependency_order.md` for sequencing
3. Individual tickets in `sprint_plan/tickets/`

## Evidence Standards

All claims in this documentation are tagged with confidence levels:
- **High**: Direct code evidence with file paths
- **Medium**: Inferred from patterns and conventions
- **Low**: Assumptions based on common practices

Check `logs/evidence_log.md` for supporting evidence.

## Updating This Documentation

This snapshot was generated on 2026-01-15. To update:
1. Run the context documentation generator prompt
2. Review changes in each section
3. Update the snapshot date in manifests
