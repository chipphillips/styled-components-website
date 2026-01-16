# Tailwind Tokens

## Status: Not Applicable

**This project does not use Tailwind CSS.**

The styled-components website uses styled-components exclusively for all styling needs (dogfooding the library it documents).

## Current Styling Approach

### CSS-in-JS with styled-components

```typescript
import styled from 'styled-components';

const Component = styled.div`
  color: ${colors.blmMetal};
  font-family: ${fonts.bodyFont};
  padding: ${rem(20)};
`;
```

### Custom Design Tokens

Instead of Tailwind tokens, the project uses custom utilities:

| Utility | File | Purpose |
|---------|------|---------|
| `colors.ts` | `utils/colors.ts` | Color palette |
| `fonts.ts` | `utils/fonts.ts` | Font families |
| `media.ts` | `utils/media.ts` | Responsive breakpoints |
| `rem.ts` | `utils/rem.ts` | Pixel-to-rem conversion |
| `sizes.ts` | `utils/sizes.ts` | Size constants |

## If Migrating to Tailwind

Not recommended for this project because:

1. **Dogfooding** - Website showcases styled-components
2. **Existing Patterns** - Extensive styled-components usage
3. **Documentation Purpose** - Should demonstrate the documented library

## Alternative: CSS Custom Properties

Could enhance current system with CSS custom properties for:
- Runtime theming
- Easier debugging
- Dark mode support

Example enhancement:
```typescript
const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: ${colors.violetRed};
    --color-text: ${colors.blmMetal};
    --spacing-base: 1rem;
  }
`;
```

## Conclusion

Tailwind CSS is not used and not recommended for this specific project given its purpose as styled-components documentation.
