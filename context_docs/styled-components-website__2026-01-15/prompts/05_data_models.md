# 05 - Data Models

## Purpose
Extract and document data models, schemas, and API contracts.

## Sub-agent Team
- **Data Modeler**: Analyzes schemas and contracts

## Required Commands (read-only)
```bash
# Find schema definitions
find . -name "schema*" -o -name "*.prisma" -o -name "*.graphql"
grep -r "interface\|type\|schema" --include="*.ts" | head -30

# Find API routes
ls pages/api/ app/api/ 2>/dev/null
grep -r "trpc\|graphql\|rest" --include="*.ts" --include="*.tsx"
```

## Output Artifacts
- `data_models/data_model_overview.md` - Overview of data layer
- `data_models/entities_and_fields.md` - Entity documentation
- `data_models/schemas/` - Schema file summaries
- `data_models/contracts/` - API contract summaries

## Quality Gates
- [ ] All entities documented with fields
- [ ] Relationships mapped
- [ ] API endpoints cataloged
- [ ] Request/response shapes documented
- [ ] No secrets exposed

## Evidence Requirements
- Schema file paths
- Entity definitions with line numbers
- API route file paths
