# 06 - UI/Design System Audit

## Purpose
Document UI structure, routing, components, and design system patterns.

## Sub-agent Team
- **UI/Design Auditor**: Analyzes frontend architecture

## Required Commands (read-only)
```bash
# Find routes/pages
ls -la pages/ app/ 2>/dev/null
find . -path "./pages/*" -name "*.tsx" -o -path "./app/*" -name "page.tsx"

# Find components
ls components/ 2>/dev/null
find . -path "./components/*" -name "*.tsx"

# Find styling
cat tailwind.config.* 2>/dev/null
find . -name "*.css" -not -path "./node_modules/*"
grep -r "styled\|css\|className" --include="*.tsx" | head -20
```

## Output Artifacts
- `ui_ux/ui_overview.md` - UI architecture overview
- `ui_ux/routes_and_views.md` - Route/page documentation
- `ui_ux/component_inventory.md` - Component catalog
- `ui_ux/design_system_audit.md` - Design patterns analysis
- `ui_ux/tailwind_tokens.md` - Tailwind/CSS tokens (if applicable)

## Quality Gates
- [ ] All routes documented
- [ ] Components listed with file paths
- [ ] Styling approach identified
- [ ] Design system patterns documented
- [ ] Reusable components identified

## Evidence Requirements
- Route file paths
- Component file paths
- Styling config file paths
- Token definitions
