# Dependencies Analysis

## Production Dependencies

### Core Framework
| Package | Version | Purpose | Risk Level |
|---------|---------|---------|------------|
| next | ^12.3.4 | Web framework | Medium - Major version behind (14.x current) |
| react | ^17.0.2 | UI library | Medium - Version behind (18.x current) |
| react-dom | ^17.0.2 | React DOM | Medium - Match with React |
| react-is | ^17.0.2 | React utilities | Low |
| typescript | ^5.0.4 | Type system | Low - Recent version |

### Styling
| Package | Version | Purpose | Risk Level |
|---------|---------|---------|------------|
| styled-components | ^6.0.0 | CSS-in-JS | Low - Latest major |
| polished | ^4.2.2 | Style utilities | Low |
| styled-theming | ^2.2.0 | Theming | Low |
| stylis | ^4.2.0 | CSS preprocessor | Low |
| stylis-plugin-rtl | ^2.1.1 | RTL support | Low |

### Documentation/MDX
| Package | Version | Purpose | Risk Level |
|---------|---------|---------|------------|
| @mdx-js/loader | ^2.3.0 | MDX loader | Low |
| @mdx-js/mdx | ^2.3.0 | MDX core | Low |
| @mdx-js/react | ^2.3.0 | MDX React | Low |
| @next/mdx | ^12.3.4 | Next MDX | Low |
| markdown-to-jsx | ^7.2.0 | Markdown parser | Low |

### Search & Live Code
| Package | Version | Purpose | Risk Level |
|---------|---------|---------|------------|
| @docsearch/js | ^3.0.0 | Algolia search | Low |
| react-live-runner | ^1.0.5 | Live code editor | Low |

### Icons
| Package | Version | Purpose | Risk Level |
|---------|---------|---------|------------|
| @styled-icons/boxicons-regular | ^10.47.0 | Icons | Low |
| @styled-icons/fa-brands | ^10.47.0 | Brand icons | Low |
| @styled-icons/material | ^10.47.0 | Material icons | Low |

### Utilities
| Package | Version | Purpose | Risk Level |
|---------|---------|---------|------------|
| axios | ^0.24.0 | HTTP client | Medium - Older version |
| isomorphic-fetch | ^3.0.0 | Universal fetch | Low |
| invariant | ^2.2.4 | Assertions | Low |
| react-transition-group | ^4.4.5 | Animations | Low |

### Legacy/Deprecated
| Package | Version | Purpose | Risk Level |
|---------|---------|---------|------------|
| @zeit/next-mdx | ^1.2.0 | Old MDX integration | High - Deprecated |
| @zeit/next-source-maps | ^0.0.3 | Source maps | High - Deprecated |

## Development Dependencies

### Testing
| Package | Version | Purpose | Risk Level |
|---------|---------|---------|------------|
| jest | ^29.5.0 | Test runner | Low |
| enzyme | ^3.11.0 | React testing | High - Deprecated |
| @wojtekmaj/enzyme-adapter-react-17 | ^0.6.7 | Enzyme adapter | Medium |
| jest-styled-components | ^7.1.1 | Style matchers | Low |
| jest-environment-jsdom | ^29.5.0 | DOM env | Low |
| ts-jest | ^29.1.0 | TS support | Low |

### Code Quality
| Package | Version | Purpose | Risk Level |
|---------|---------|---------|------------|
| prettier | ^2.8.8 | Formatting | Low |
| lint-staged | ^13.2.2 | Staged linting | Low |
| husky | ^8.0.3 | Git hooks | Low |

### Build Tools
| Package | Version | Purpose | Risk Level |
|---------|---------|---------|------------|
| rimraf | ^3.0.2 | Clean utility | Low |
| webpack-bundle-analyzer | ^4.8.0 | Bundle analysis | Low |

### Types
| Package | Version | Purpose | Risk Level |
|---------|---------|---------|------------|
| @types/react | ^17.0.59 | React types | Low |
| @types/node | ^18.16.14 | Node types | Low |
| Various @types/* | Various | Type definitions | Low |

## Risk Summary

### High Risk (Action Recommended)
1. **enzyme** - Deprecated, migrate to React Testing Library
2. **@zeit/next-mdx** - Deprecated, use @next/mdx instead
3. **@zeit/next-source-maps** - Deprecated, Next.js has built-in support

### Medium Risk (Consider Upgrading)
1. **next** ^12.3.4 - Current is 14.x (breaking changes expected)
2. **react** ^17.0.2 - Current is 18.x (concurrent features)
3. **axios** ^0.24.0 - Older version, consider upgrading

### Dependency Graph Concerns
- React 17 constraint limits some modern package upgrades
- Enzyme dependency blocks React 18 migration
- TypeScript resolutions force React types to ^17.0.0

## Recommendations

1. **Phase 1**: Remove deprecated @zeit packages
2. **Phase 2**: Migrate from Enzyme to React Testing Library
3. **Phase 3**: Upgrade to React 18
4. **Phase 4**: Upgrade to Next.js 14 (App Router optional)
