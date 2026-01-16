# 04 - Architecture Mapping

## Purpose
Identify system architecture, module boundaries, and key execution paths.

## Sub-agent Team
- **Architecture Analyst**: Maps system structure and dependencies

## Required Commands (read-only)
```bash
# Identify top-level modules
ls -la src/ pages/ app/ components/ lib/ utils/ 2>/dev/null

# Find imports/exports patterns
grep -r "^export" --include="*.ts" --include="*.tsx" --include="*.js"
grep -r "^import" --include="*.ts" --include="*.tsx" --include="*.js" | head -50
```

## Output Artifacts
- `architecture/architecture_overview.md` - High-level architecture description
- `architecture/module_boundaries.md` - Module/folder responsibilities
- `architecture/dependency_notes.md` - Internal dependency patterns
- `architecture/data_flow_overview.md` - Key data flows

## Quality Gates
- [ ] All major directories/modules documented
- [ ] Entry points identified
- [ ] Key execution paths traced
- [ ] Internal dependencies mapped
- [ ] External service integrations noted

## Evidence Requirements
- Directory listings
- Import/export patterns
- Key file paths for each module
