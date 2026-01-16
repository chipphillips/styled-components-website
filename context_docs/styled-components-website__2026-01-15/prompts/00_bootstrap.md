# 00 - Bootstrap

## Purpose
Initialize the context documentation snapshot with directory structure, manifests, and tracking files.

## Sub-agent Team
- **Librarian/Indexer**: Creates structure and initial files

## Required Commands (read-only)
```bash
git remote -v          # Get repo slug
git log -1             # Get latest commit info
git status --porcelain # Check working tree
git branch --show-current # Get current branch
```

## Output Artifacts
- `README.md` - Snapshot overview
- `INSTRUCTIONS.md` - Usage guide
- `MANIFEST.json` - Machine-readable metadata
- `INDEX.md` - Navigation index
- `logs/command_log.md` - Command tracking
- `logs/evidence_log.md` - Evidence tracking

## Quality Gates
- [ ] All directories created per standard layout
- [ ] MANIFEST.json has valid JSON structure
- [ ] INDEX.md has all section links
- [ ] Logs initialized

## Evidence Requirements
- Git remote URL captured
- Latest commit hash/date captured
- Working tree status captured

## Status: COMPLETE
