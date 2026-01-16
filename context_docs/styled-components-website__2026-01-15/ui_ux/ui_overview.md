# UI Overview

## Design Philosophy

The styled-components website uses **styled-components exclusively** for all styling (dogfooding). There are no CSS frameworks like Tailwind or Bootstrap.

## UI Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        App Shell                             │
│  ┌─────────────────────────────────────────────────────────┐│
│  │ _app.tsx: MDXProvider + Global Styles                    ││
│  └─────────────────────────────────────────────────────────┘│
├─────────────────────────────────────────────────────────────┤
│                       Page Layouts                           │
│  ┌──────────────────┐  ┌──────────────────────────────────┐ │
│  │   DocsLayout     │  │      HomePage Layout             │ │
│  │  (Nav+Sidebar)   │  │   (Marketing sections)           │ │
│  └──────────────────┘  └──────────────────────────────────┘ │
├─────────────────────────────────────────────────────────────┤
│                     Components                               │
│  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐    │
│  │  Nav   │ │ Footer │ │LiveEdit│ │  Code  │ │ Note   │    │
│  └────────┘ └────────┘ └────────┘ └────────┘ └────────┘    │
└─────────────────────────────────────────────────────────────┘
```

## Styling System

### CSS-in-JS with styled-components

```typescript
// Example from components/Layout.tsx
export const Container = styled.div`
  padding-left: ${rem(sidebarWidth)};

  ${mobile(css`
    padding-left: 0;
  `)};
`;
```

### Design Tokens (Custom)

| Category | Source | Examples |
|----------|--------|----------|
| Colors | `utils/colors.ts` | `paleGrey`, `violetRed`, `blmMetal` |
| Fonts | `utils/fonts.ts` | `bodyFont`, `headerFont` |
| Sizes | `utils/sizes.ts` | `sidebarWidth` |
| Spacing | `utils/rem.ts` | `rem()` function for px-to-rem |
| Media | `utils/media.ts` | `mobile()`, `phone()` |

### Responsive Breakpoints

| Breakpoint | Width | Helper |
|------------|-------|--------|
| Desktop | > 1000px | Default |
| Mobile/Tablet | ≤ 1000px | `mobile(css)` |
| Phone | ≤ 650px | `phone(css)` |

## Component Categories

### Layout Components
- `Layout.tsx` - Base layout primitives (Container, Content, Title, etc.)
- `DocsLayout.tsx` - Documentation page wrapper

### Navigation Components
- `Nav/Navbar.tsx` - Desktop top navigation
- `Nav/MobileNavbar.tsx` - Mobile navigation
- `Nav/Sidebar.tsx` - Documentation sidebar
- `Nav/SidebarMenus.tsx` - Sidebar menu items
- `Nav/SearchWithAlgolia.tsx` - Search integration

### Content Components
- `Code.tsx` - Inline code styling
- `CodeBlock.tsx` - Code block with syntax highlighting
- `LiveEdit.tsx` - Interactive code editor
- `Note.tsx` - Callout/note boxes
- `Table.tsx` - Markdown table styling

### Marketing Components
- `CompanyLogos.tsx` - Company logo display
- `SmallShowcase/` - Project showcase grid
- `UsersLogos/` - User logo carousel
- `Slider/` - Image slider components

### Utility Components
- `SeoHead.tsx` - SEO meta tags
- `Link.tsx` - Next.js Link wrapper
- `Anchor.tsx` - Anchor link with hash navigation
- `VisuallyHidden.tsx` - Screen reader text

## Visual Hierarchy

### Typography Scale

| Element | Size | Font |
|---------|------|------|
| h1 (Title) | 42px | Header font |
| h2 (Header) | 32px | Header font |
| h3 (SubHeader) | 24px | Header font |
| h4 (TertiaryHeader) | 18px | Header font |
| Body | 16px | Body font |

### Color Scheme

| Usage | Color | Hex |
|-------|-------|-----|
| Primary text | blmMetal | rgb(66, 66, 66) |
| Background | paleGrey | #efefef |
| Accent | violetRed | rgb(219, 112, 147) |
| Code background | grey | #282a36 |

## Accessibility

- `VisuallyHidden` component for screen readers
- Semantic HTML elements
- Focus states on interactive elements
- ARIA attributes where needed

## Evidence

- `components/Layout.tsx` - Layout primitives
- `utils/colors.ts` - Color tokens
- `utils/media.ts` - Media queries
- `_app.tsx:34-112` - Global styles
- Confidence: High
