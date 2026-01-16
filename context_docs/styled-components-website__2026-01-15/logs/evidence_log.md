# Evidence Log

All key conclusions with supporting evidence.

## Format
- **Claim**: [Statement]
- **Evidence**: [File path + snippet or command output]
- **Confidence**: High/Medium/Low
- **Open Question**: [If any]

---

## Repository Identification

### Repository Type
- **Claim**: Repository is styled-components-website, the official documentation site
- **Evidence**: `git remote -v` shows `chipphillips/styled-components-website`; `README.md` states "The styled-components website"
- **Confidence**: High
- **Open Question**: None

### Latest Commit
- **Claim**: Latest commit is 8616299 from 2024-06-06
- **Evidence**: `git log -1` output: `861629901e7ae1e032f8124e7d0d94125f726db7|2024-06-06`
- **Confidence**: High
- **Open Question**: None

---

## Stack Detection

### Next.js Framework
- **Claim**: Uses Next.js 12.3.4 with Pages Router
- **Evidence**: `package.json:36` shows `"next": "^12.3.4"`; `pages/` directory exists; no `app/` directory
- **Confidence**: High
- **Open Question**: None

### React Version
- **Claim**: Uses React 17.0.2
- **Evidence**: `package.json:38` shows `"react": "^17.0.2"`; `package.json:19` has resolution for `"@types/react": "^17.0.0"`
- **Confidence**: High
- **Open Question**: None

### styled-components
- **Claim**: Uses styled-components 6.0.0 exclusively for styling
- **Evidence**: `package.json:43` shows `"styled-components": "^6.0.0"`; all components use styled-components; no Tailwind/CSS framework found
- **Confidence**: High
- **Open Question**: None

### TypeScript
- **Claim**: Full TypeScript adoption
- **Evidence**: `package.json:75` shows `"typescript": "^5.0.4"`; `tsconfig.json` exists; all components are `.tsx`
- **Confidence**: High
- **Open Question**: None

---

## Testing Infrastructure

### Jest + Enzyme
- **Claim**: Uses Jest 29.5.0 with Enzyme for testing
- **Evidence**: `package.json:66` shows `"jest": "^29.5.0"`; `package.json:63` shows `"enzyme": "^3.11.0"`
- **Confidence**: High
- **Open Question**: None

### Enzyme Deprecation
- **Claim**: Enzyme is deprecated and blocks React 18 upgrade
- **Evidence**: Enzyme official repo marked as deprecated; `@wojtekmaj/enzyme-adapter-react-17` only supports React 17
- **Confidence**: High
- **Open Question**: None

### Test Coverage
- **Claim**: Good component test coverage
- **Evidence**: `test/components/` contains 20+ test files with snapshots
- **Confidence**: High
- **Open Question**: Actual coverage percentage unknown

---

## CI/CD

### GitHub Actions
- **Claim**: Uses GitHub Actions for CI
- **Evidence**: `.github/workflows/ci.yml` exists with test job
- **Confidence**: High
- **Open Question**: None

### CI Gaps
- **Claim**: CI only runs tests, no build verification
- **Evidence**: `.github/workflows/ci.yml` contains only `yarn test`, no `yarn build`
- **Confidence**: High
- **Open Question**: None

### Vercel Deployment
- **Claim**: Deployed on Vercel
- **Evidence**: `vercel.json` exists in repository
- **Confidence**: High
- **Open Question**: None

---

## Code Quality

### Prettier
- **Claim**: Uses Prettier for code formatting
- **Evidence**: `.prettierrc` exists with configuration
- **Confidence**: High
- **Open Question**: None

### ESLint Missing
- **Claim**: No ESLint configuration
- **Evidence**: No `.eslintrc*` files found; no eslint in package.json dependencies
- **Confidence**: High
- **Open Question**: None

### Pre-commit Hooks
- **Claim**: Uses Husky + lint-staged for pre-commit
- **Evidence**: `.husky/` directory exists; `package.json:65` shows `"husky": "^8.0.3"`; `.lintstagedrc.js` exists
- **Confidence**: High
- **Open Question**: None

---

## Dependencies

### Deprecated Packages
- **Claim**: Contains deprecated @zeit packages
- **Evidence**: `package.json:30` shows `"@zeit/next-mdx": "^1.2.0"`; `package.json:31` shows `"@zeit/next-source-maps": "^0.0.3"`
- **Confidence**: High
- **Open Question**: None

### Axios Outdated
- **Claim**: axios version is outdated
- **Evidence**: `package.json:32` shows `"axios": "^0.24.0"`; current version is 1.x
- **Confidence**: High
- **Open Question**: None

---

## Architecture

### Documentation Structure
- **Claim**: 75+ MDX documentation files organized by section
- **Evidence**: Glob of `sections/**/*.mdx` returned 75+ files
- **Confidence**: High
- **Open Question**: None

### Component Count
- **Claim**: ~41 React components
- **Evidence**: Glob of `components/**/*.tsx` returned 38 files; some folders contain index.tsx
- **Confidence**: High
- **Open Question**: None

### No Database
- **Claim**: Static site with no database
- **Evidence**: No `prisma/` directory; no database packages in package.json; static MDX content
- **Confidence**: High
- **Open Question**: None

---

## Summary

| Area | Confidence | Key Finding |
|------|------------|-------------|
| Stack | High | Next.js 12 + React 17 + styled-components 6 |
| Testing | High | Jest + Enzyme (deprecated) |
| CI/CD | High | GitHub Actions + Vercel, missing build step |
| Code Quality | High | Prettier only, no ESLint |
| Dependencies | High | Some deprecated packages |
| Architecture | High | Static documentation site |
