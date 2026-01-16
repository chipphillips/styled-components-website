# Stack Detection Report

## Technology Stack Summary

| Category | Technology | Version | Evidence |
|----------|------------|---------|----------|
| **Language** | TypeScript | ^5.0.4 | `package.json:75` |
| **Framework** | Next.js | ^12.3.4 | `package.json:36` |
| **UI Library** | React | ^17.0.2 | `package.json:38` |
| **Styling** | styled-components | ^6.0.0 | `package.json:43` |
| **Build Tool** | Next.js (Webpack) | Built-in | `next.config.mjs` |
| **Package Manager** | Yarn | 3.5.0 | `package.json:78` |
| **Testing** | Jest + Enzyme | ^29.5.0 | `package.json:66` |
| **Documentation** | MDX | ^2.3.0 | `package.json:24-25` |

## Detailed Stack Analysis

### Frontend Framework
- **Next.js 12.3.4** - Pages Router architecture
- **React 17.0.2** - React with concurrent mode support
- Uses `pages/` directory for routing (not App Router)

### Styling System
- **styled-components 6.0.0** - CSS-in-JS (dogfooding their own library)
- **polished 4.2.2** - Styling utilities
- **styled-theming 2.2.0** - Theme utilities
- **stylis 4.2.0** - CSS preprocessor
- **stylis-plugin-rtl** - RTL support

### Documentation System
- **MDX** (@mdx-js/loader, @mdx-js/mdx, @mdx-js/react) ^2.3.0
- **@next/mdx** ^12.3.4 - Next.js MDX integration
- **remark-gfm** ^3.0.1 - GitHub-flavored Markdown
- **markdown-to-jsx** ^7.2.0 - Markdown parsing

### Code Editing
- **react-live-runner** ^1.0.5 - Live code editor for examples
- Custom Prism theme for syntax highlighting

### Search
- **@docsearch/js** ^3.0.0 - Algolia DocSearch integration

### Icons
- **@styled-icons/boxicons-regular** ^10.47.0
- **@styled-icons/fa-brands** ^10.47.0
- **@styled-icons/material** ^10.47.0

### Testing
- **Jest** ^29.5.0 - Test runner
- **Enzyme** ^3.11.0 - React testing utilities
- **jest-styled-components** ^7.1.1 - Styled-components matchers
- **jest-environment-jsdom** ^29.5.0 - DOM environment
- **ts-jest** ^29.1.0 - TypeScript support

### Code Quality
- **Prettier** ^2.8.8 - Code formatting
- **lint-staged** ^13.2.2 - Staged file linting
- **Husky** ^8.0.3 - Git hooks

### Utilities
- **axios** ^0.24.0 - HTTP client
- **isomorphic-fetch** ^3.0.0 - Universal fetch
- **invariant** ^2.2.4 - Assertion utility

## Architecture Pattern

```
Next.js Pages Router
├── pages/           # Routes (file-based routing)
├── components/      # Reusable UI components
├── sections/        # MDX documentation content
├── utils/           # Shared utilities
└── public/          # Static assets
```

## Deployment Target

- **Platform**: Vercel (evidenced by `vercel.json`)
- **Environment**: Node.js production server

## Confidence Levels

| Detection | Confidence | Evidence |
|-----------|------------|----------|
| Next.js | High | `package.json`, `next.config.mjs` |
| TypeScript | High | `tsconfig.json`, `package.json` |
| styled-components | High | `package.json`, component analysis |
| Yarn 3.5 | High | `package.json:packageManager` |
| Vercel deployment | High | `vercel.json` |
| Pages Router (not App) | High | `pages/` directory structure |
