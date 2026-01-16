# 01 - Repository Inventory

## Purpose
Map the repository structure, identify key files, scripts, and entry points.

## Sub-agent Team
- **Repo Cartographer**: Scans and documents repository structure

## Required Commands (read-only)
```bash
find . -type f -name "*.json" | head -20  # Find config files
ls -la                                      # Root directory
cat package.json                            # If exists - package info
cat README.md                               # If exists - readme
```

## Output Artifacts
- `repo_inventory/repo_tree.md` - Directory tree (excluding node_modules, build artifacts)
- `repo_inventory/scripts_and_commands.md` - Available scripts and how to run
- `repo_inventory/env_and_config.md` - Environment and config file summary

## Quality Gates
- [ ] Tree excludes node_modules, .git, build folders
- [ ] All npm scripts documented (if applicable)
- [ ] Entry points identified
- [ ] "How to run" instructions drafted

## Evidence Requirements
- File paths for all identified entry points
- Package.json scripts section (if exists)
- README content summary
