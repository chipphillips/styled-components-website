# 03 - Documentation and Features

## Purpose
Locate all documentation and build a feature matrix showing implementation status.

## Sub-agent Team
- **Docs Archaeologist**: Finds and catalogs documentation

## Required Commands (read-only)
```bash
find . -name "*.md" -not -path "./node_modules/*"  # Find markdown docs
find . -name "README*" -not -path "./node_modules/*"
ls docs/ 2>/dev/null                                # Check docs folder
grep -r "TODO\|FIXME\|XXX" --include="*.md"        # Find todos in docs
```

## Output Artifacts
- `docs/docs_map.md` - Map of all documentation files
- `docs/feature_matrix.md` - Feature status matrix
- `docs/adr_or_decisions.md` - Architecture decisions if found

## Quality Gates
- [ ] All .md files cataloged
- [ ] README summary included
- [ ] Feature matrix has columns: Feature, Source, Implementation Path, Status, Notes
- [ ] Status values: Implemented / Partial / Stub / Missing / Unknown

## Evidence Requirements
- File paths for all documentation
- Grep results for feature mentions
- Code paths matched to documented features
