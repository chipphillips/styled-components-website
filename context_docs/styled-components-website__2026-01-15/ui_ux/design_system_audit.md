# Design System Audit

## Overview

The styled-components website uses a **custom design system** built entirely with styled-components. There is no external design system or CSS framework.

## Design System Components

### Custom Implementation

| Aspect | Implementation | Location |
|--------|----------------|----------|
| Colors | Constants | `utils/colors.ts` |
| Typography | Styled components | `components/Layout.tsx` |
| Spacing | `rem()` helper | `utils/rem.ts` |
| Breakpoints | Media helpers | `utils/media.ts` |
| Sizes | Constants | `utils/sizes.ts` |

### Not Using

- Tailwind CSS
- Bootstrap
- Material-UI
- Chakra UI
- shadcn/ui
- Any component library

## Color System

### Primary Palette

| Token | Value | Usage |
|-------|-------|-------|
| `paleGrey` | #efefef | Background |
| `lightGrey` | rgba(20,20,20,0.1) | Borders |
| `grey` | #282a36 | Code background |
| `darkGrey` | darken(0.05, grey) | Dark elements |

### Accent Colors

| Token | Value | Usage |
|-------|-------|-------|
| `violetRed` | rgb(219, 112, 147) | Primary accent |
| `lightVioletRed` | lighten(0.31, violetRed) | Light accent |
| `darkVioletRed` | darken(0.1, violetRed) | Dark accent |
| `gold` | shade(0.9, rgb(243, 182, 97)) | Highlight |

### BLM Palette

| Token | Value | Usage |
|-------|-------|-------|
| `blmGrey` | rgb(33, 33, 33) | Text |
| `blmBlack` | rgb(0, 0, 0) | Pure black |
| `blmLightGrey` | lighten(0.75, blmGrey) | Light text |
| `blmMetal` | rgb(66, 66, 66) | Primary text |

## Typography System

### Font Families

```typescript
// utils/fonts.ts
export const bodyFont = /* system font stack */;
export const headerFont = /* header font */;
```

### Type Scale

| Level | Size | Weight | Font |
|-------|------|--------|------|
| Title (h1) | 42px | bold | headerFont |
| Header (h2) | 32px | 600 | headerFont |
| SubHeader (h3) | 24px | 600 | headerFont |
| TertiaryHeader (h4) | 18px | 600 | headerFont |
| Body | 16px | normal | bodyFont |
| Code | 1em | normal | monospace |

### Line Heights

| Context | Line Height |
|---------|-------------|
| Body | 1.6 |
| Headings | Default |
| List items | 1.6 |

## Spacing System

### rem() Helper

```typescript
// utils/rem.ts
function rem(px: number): string {
  return `${px / 16}rem`;
}
```

### Common Spacing

| Usage | Value |
|-------|-------|
| Content padding | rem(60) horizontal |
| Content padding (mobile) | rem(36) horizontal |
| Top padding | rem(90) |
| Heading margin | 2em 0 1em |

## Responsive System

### Breakpoints

| Name | Width | Helper |
|------|-------|--------|
| Desktop | > 1000px | Default |
| Mobile | ≤ 1000px (62.5em) | `mobile(css)` |
| Phone | ≤ 650px (40.625em) | `phone(css)` |

### Media Query Pattern

```typescript
// Usage
const Component = styled.div`
  padding: ${rem(60)};

  ${mobile(css`
    padding: ${rem(36)};
  `)};
`;
```

## Component Patterns

### Transient Props

Uses `$` prefix for props that shouldn't be passed to DOM:

```typescript
// components/Layout.tsx
const Content = styled.div<{ $hero?: boolean; $moveRight?: boolean }>`
  ${p => p.$hero && css`...`};
  ${p => p.$moveRight && css`...`};
`;
```

### CSS Helper Usage

```typescript
import styled, { css } from 'styled-components';

const Component = styled.div`
  ${p => p.$active && css`
    background: ${violetRed};
  `};
`;
```

## Strengths

1. **Consistency** - Single styling approach (styled-components)
2. **Type Safety** - TypeScript interfaces for props
3. **Responsive** - Clean media query helpers
4. **Dogfooding** - Uses styled-components effectively

## Weaknesses

1. **No Design Tokens** - Colors/sizes scattered, not centralized
2. **No Theming** - Single theme, no dark mode
3. **Manual Maintenance** - No design token automation
4. **Documentation** - Internal design system not documented

## Recommendations

### Quick Wins
1. Consolidate all design tokens to single file
2. Add CSS custom properties for runtime theming
3. Document design patterns

### Future Improvements
1. Consider dark mode support
2. Create design token documentation
3. Add Storybook for component documentation

## Evidence

- `utils/colors.ts` - Color definitions
- `utils/media.ts` - Media query helpers
- `utils/rem.ts` - Spacing helper
- `components/Layout.tsx` - Typography components
- Confidence: High
