# TICKET-001: Remove Deprecated @zeit Packages

## Priority
P0 - Critical

## Prerequisites
None

## Description

Remove deprecated `@zeit/*` packages from the project. These packages are no longer maintained and their functionality is now built into Next.js or available through official packages.

### Packages to Remove

1. **@zeit/next-mdx** (v1.2.0)
   - Replacement: Already using `@next/mdx` (keep this)
   - Action: Remove @zeit/next-mdx from package.json

2. **@zeit/next-source-maps** (v0.0.3)
   - Replacement: Built into Next.js
   - Action: Remove from package.json and next.config.mjs

## Acceptance Criteria

- [ ] `@zeit/next-mdx` removed from package.json
- [ ] `@zeit/next-source-maps` removed from package.json
- [ ] References removed from next.config.mjs
- [ ] `yarn install` succeeds
- [ ] `yarn build` succeeds
- [ ] `yarn test` passes
- [ ] Development server starts without errors

## Files to Modify

- `package.json` - Remove dependencies
- `next.config.mjs` - Remove withSourceMaps wrapper if used

## Implementation Notes

```javascript
// next.config.mjs - Before
import withSourceMaps from '@zeit/next-source-maps';
export default withMDX(withSourceMaps({ ... }));

// next.config.mjs - After
export default withMDX({ ... });
```

## Test Notes

1. Run `yarn install` after changes
2. Run `yarn build` to verify production build
3. Run `yarn dev` and test:
   - Documentation pages load correctly
   - MDX content renders
   - Code examples work
4. Run `yarn test` to verify tests pass

## Rollback Plan

If issues occur, restore package.json and next.config.mjs from git.

## Estimated Effort
Small (< 2 hours)
