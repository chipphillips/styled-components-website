# 08 - Quality Audit

## Purpose
Audit testing, linting, CI/CD, security, and stack-specific best practices.

## Sub-agent Team
- **Quality Engineer**: Analyzes quality infrastructure

## Required Commands (read-only)
```bash
# Testing
find . -name "*.test.*" -o -name "*.spec.*" | head -20
cat jest.config.* vitest.config.* 2>/dev/null
grep -r "describe\|it\|test" --include="*.test.*" | head -10

# Linting
cat .eslintrc* .prettierrc* 2>/dev/null
cat .eslintignore .prettierignore 2>/dev/null

# CI/CD
ls .github/workflows/ 2>/dev/null
cat .github/workflows/*.yml 2>/dev/null

# Security
grep -r "env\|secret\|key\|token" --include="*.env*" 2>/dev/null
```

## Output Artifacts
- `quality_audit/quality_overview.md` - Quality summary
- `quality_audit/testing_audit.md` - Test coverage analysis
- `quality_audit/lint_format_audit.md` - Lint/format config analysis
- `quality_audit/ci_cd_audit.md` - CI/CD pipeline analysis
- `quality_audit/security_notes.md` - Security observations
- `quality_audit/performance_notes.md` - Performance notes
- `quality_audit/best_practices_by_stack.md` - Stack-specific recommendations

## Quality Gates
- [ ] Test presence documented
- [ ] Lint config documented
- [ ] CI/CD workflows documented
- [ ] Security concerns flagged
- [ ] Stack-specific practices compared

## Evidence Requirements
- Test file paths
- Config file paths
- CI workflow file paths
- Any security concerns with file paths
