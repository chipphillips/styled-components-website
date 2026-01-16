# 09 - Sprint Plan

## Purpose
Create a dependency-ordered, actionable sprint plan based on findings.

## Sub-agent Team
- **Sprint Planner**: Prioritizes and sequences work

## Input Requirements
- Completed quality audit
- Feature matrix
- Architecture analysis
- All identified issues and gaps

## Output Artifacts
- `sprint_plan/sprint_overview.md` - Sprint goals and focus
- `sprint_plan/backlog_dependency_order.md` - Ordered backlog
- `sprint_plan/tickets/*.md` - Individual ticket files

## Quality Gates
- [ ] Items ordered by dependency (prerequisites first)
- [ ] Each item has clear acceptance criteria
- [ ] Items are actionable (specific enough to implement)
- [ ] Critical path identified
- [ ] Quick wins identified

## Ticket Template
```markdown
# TICKET-XXX: [Title]

## Priority
[Critical/High/Medium/Low]

## Prerequisites
- [List dependencies]

## Description
[What needs to be done]

## Acceptance Criteria
- [ ] [Criterion 1]
- [ ] [Criterion 2]

## Files to Modify
- [File paths]

## Test Notes
[How to verify]
```

## Evidence Requirements
- Link each ticket to findings in quality audit or feature matrix
- Reference specific file paths
