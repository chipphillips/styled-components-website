# 02 - Stack Detection

## Purpose
Detect and document the technology stack, frameworks, build tools, and dependencies.

## Sub-agent Team
- **Stack Detective**: Analyzes configs and dependencies

## Required Commands (read-only)
```bash
cat package.json           # Node dependencies
cat tsconfig.json          # TypeScript config
cat next.config.js         # Next.js config
cat vite.config.*          # Vite config
cat webpack.config.*       # Webpack config
ls .github/workflows/      # CI/CD detection
```

## Output Artifacts
- `repo_inventory/stack_detection.md` - Stack analysis report
- `repo_inventory/dependencies.md` - Dependency analysis with risk notes

## Quality Gates
- [ ] Primary language identified
- [ ] Framework identified (React, Next.js, Vue, etc.)
- [ ] Build tool identified
- [ ] Package manager identified
- [ ] Key dependencies listed with versions
- [ ] Risky/outdated dependencies flagged

## Evidence Requirements
- Package.json content for dependency claims
- Config file paths for framework claims
- Version numbers from lock files if available
