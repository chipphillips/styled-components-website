# Scripts and Commands

## npm/yarn Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| `dev` | `next dev` | Start development server |
| `build` | `NODE_ENV=production next build` | Production build |
| `start` | `NODE_ENV=production next start` | Start production server |
| `test` | `jest -c .jest.config.js` | Run tests |
| `analyze` | `ANALYZE=true yarn build` | Bundle analysis |
| `prettier` | `prettier --write "**/*.*"` | Format all files |
| `precommit` | `lint-staged` | Pre-commit hook |
| `prepare` | `husky install` | Set up git hooks |
| `postinstall` | `husky install` | Post-install hooks |
| `prebuild` | `rimraf .next` | Clean build artifacts |

## How to Run

### Development
```bash
# Install dependencies
yarn install

# Start development server (http://localhost:3000)
yarn dev
```

### Production
```bash
# Build for production
yarn build

# Start production server
yarn start
```

### Testing
```bash
# Run all tests
yarn test

# Update snapshots
yarn test -u
```

### Code Quality
```bash
# Format code
yarn prettier
```

### Analysis
```bash
# Analyze bundle size
yarn analyze
```

## Entry Points

| Entry Point | Path | Purpose |
|-------------|------|---------|
| Homepage | `pages/index.tsx` | Main landing page |
| Documentation | `pages/docs/index.tsx` | Docs hub |
| App Shell | `pages/_app.tsx` | Global wrapper |
| Document | `pages/_document.tsx` | HTML structure |

## Environment Requirements

- **Node.js**: Required (version in `.nvmrc`)
- **Package Manager**: Yarn 3.5.0
- **Build Tool**: Next.js built-in (Webpack)
