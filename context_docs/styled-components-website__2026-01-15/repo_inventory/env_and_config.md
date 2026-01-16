# Environment and Configuration

## Configuration Files

### Next.js Configuration
**File**: `next.config.mjs`
- MDX integration setup
- Webpack customization for bundle analysis
- Build configuration

### TypeScript Configuration
**File**: `tsconfig.json`
- Strict mode enabled
- JSX preserve for Next.js
- Path aliases configured

### Jest Configuration
**File**: `.jest.config.js`
- TypeScript support via ts-jest
- JSDOM test environment
- Enzyme integration
- Snapshot testing

### Prettier Configuration
**File**: `.prettierrc`
- Code formatting rules
- Integrated with pre-commit hooks

### Editor Configuration
**File**: `.editorconfig`
- Cross-editor consistency
- Indentation and line endings

### Vercel Configuration
**File**: `vercel.json`
- Deployment settings
- Build configuration

### Yarn Configuration
**Files**: `.yarnrc.yml`, `yarn.lock`
- Yarn 3.5.0 (Berry)
- Dependency resolution

### Git Hooks
**Directory**: `.husky/`
- Pre-commit hooks
- Linked to lint-staged

### Lint-staged Configuration
**File**: `.lintstagedrc.js`
- Runs Prettier on staged files
- Pre-commit quality checks

### Node Version
**File**: `.nvmrc`
- Specifies Node.js version for nvm

## Environment Variables

### Required
| Variable | Purpose | Location |
|----------|---------|----------|
| `NODE_ENV` | Production/development mode | Build scripts |
| `ANALYZE` | Enable bundle analysis | Build script |

### Optional/External
| Variable | Purpose | Notes |
|----------|---------|-------|
| `GITHUB_TOKEN` | GitHub API access | For releases page |
| Algolia keys | DocSearch | External service |

## Security Notes

- No `.env` file in repository
- No hardcoded secrets detected
- API proxy routes for external services
- GitHub token needed for releases functionality

## Build Configuration

### Development
```bash
yarn dev
# Starts Next.js dev server
# Hot module replacement enabled
# Source maps enabled
```

### Production
```bash
yarn build
# NODE_ENV=production
# Optimized build output
# Static generation where possible
```

### Analysis
```bash
yarn analyze
# ANALYZE=true
# Generates bundle analysis report
# Opens webpack-bundle-analyzer
```

## Path Aliases (tsconfig.json)

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

## File Structure Conventions

| Pattern | Convention |
|---------|------------|
| `*.tsx` | React components with TypeScript |
| `*.ts` | TypeScript utilities |
| `*.mdx` | Documentation content |
| `*.test.tsx` | Jest test files |
| `__mocks__/` | Jest mock files |
| `__snapshots__/` | Jest snapshots |
