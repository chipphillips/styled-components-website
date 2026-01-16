# Component Inventory

## Component Categories

### Layout Components

| Component | File | Purpose | Props |
|-----------|------|---------|-------|
| Container | `components/Layout.tsx` | Page container with sidebar offset | - |
| Content | `components/Layout.tsx` | Main content area | `$hero`, `$moveRight` |
| Title | `components/Layout.tsx` | Page title (h1) | - |
| Header | `components/Layout.tsx` | Section header (h2) | - |
| SubHeader | `components/Layout.tsx` | Subsection header (h3) | - |
| TertiaryHeader | `components/Layout.tsx` | Minor header (h4) | - |
| DocsLayout | `components/DocsLayout.tsx` | Documentation wrapper | `title`, `description`, `pages`, `useDocsSidebarMenu` |

### Navigation Components

| Component | File | Purpose |
|-----------|------|---------|
| Nav | `components/Nav/index.tsx` | Navigation container |
| Navbar | `components/Nav/Navbar.tsx` | Desktop top navigation |
| MobileNavbar | `components/Nav/MobileNavbar.tsx` | Mobile navigation |
| Sidebar | `components/Nav/Sidebar.tsx` | Documentation sidebar |
| SidebarMenus | `components/Nav/SidebarMenus.tsx` | Sidebar menu items |
| NavLinks | `components/Nav/NavLinks.tsx` | Navigation links |
| NavButton | `components/Nav/NavButton.tsx` | Navigation button |
| NavSeparator | `components/Nav/NavSeparator.tsx` | Visual separator |
| NavIcons | `components/Nav/NavIcons.tsx` | Navigation icons |
| Logo | `components/Nav/Logo.tsx` | styled-components logo |
| Social | `components/Nav/Social.tsx` | Social media links |
| Text | `components/Nav/Text.tsx` | Navigation text |
| SearchWithAlgolia | `components/Nav/SearchWithAlgolia.tsx` | Search input |

### Content Components

| Component | File | Purpose | Props |
|-----------|------|---------|-------|
| Code | `components/Code.tsx` | Inline code styling | `code` |
| CodeBlock | `components/CodeBlock.tsx` | Code block with highlighting | `code`, `language` |
| LiveEdit | `components/LiveEdit.tsx` | Interactive code editor | `code`, `noInline` |
| Note | `components/Note.tsx` | Callout/note box | `children` |
| Table | `components/Table.tsx` | Markdown table | `children` |
| Anchor | `components/Anchor.tsx` | Section anchor link | `id` |

### Marketing Components

| Component | File | Purpose |
|-----------|------|---------|
| CompanyLogos | `components/CompanyLogos.tsx` | Company logo display |
| SmallShowcase | `components/SmallShowcase/index.tsx` | Project showcase grid |
| UsersLogos | `components/UsersLogos/index.tsx` | User logo carousel |
| Navigation | `components/Slider/Navigation.tsx` | Slider navigation |
| ShowcaseBody | `components/Slider/ShowcaseBody.tsx` | Showcase content |
| ShowcaseLink | `components/Slider/ShowcaseLink.tsx` | Showcase link |

### Utility Components

| Component | File | Purpose |
|-----------|------|---------|
| SeoHead | `components/SeoHead.tsx` | SEO meta tags |
| Link | `components/Link.tsx` | Next.js Link wrapper |
| Image | `components/Image.tsx` | Optimized image |
| Label | `components/Label.tsx` | Form label |
| Loading | `components/Loading.tsx` | Loading spinner |
| NextPage | `components/NextPage.tsx` | Next.js page wrapper |
| VisuallyHidden | `components/VisuallyHidden.tsx` | Screen reader only text |
| BlmBanner | `components/BlmBanner.tsx` | BLM banner |

### HOC/Utility Components

| Component | File | Purpose |
|-----------|------|---------|
| CaptureScroll | `components/CaptureScroll.tsx` | Scroll detection |
| WithIsScrolled | `components/WithIsScrolled.tsx` | Scroll state HOC |

## Component Hierarchy

```
App (_app.tsx)
└── MDXProvider
    └── DocsLayout
        ├── SeoHead
        ├── Nav
        │   ├── Navbar (desktop)
        │   │   ├── Logo
        │   │   ├── NavLinks
        │   │   ├── SearchWithAlgolia
        │   │   └── Social
        │   ├── MobileNavbar (mobile)
        │   │   └── NavButton
        │   └── Sidebar
        │       └── SidebarMenus
        └── Content
            ├── Title
            ├── [MDX Content]
            │   ├── Header
            │   ├── SubHeader
            │   ├── CodeBlock / LiveEdit
            │   ├── Note
            │   └── Table
            └── Footer
```

## MDX Component Mapping

**File**: `utils/mdx-components.tsx`

| Markdown | Component |
|----------|-----------|
| `# heading` | Custom heading with Anchor |
| `code` | Code (inline) |
| `pre > code` | CodeBlock or LiveEdit |
| `blockquote` | Note |
| `table` | Table |
| `a` | Link |

## Component Statistics

| Category | Count |
|----------|-------|
| Layout | 6 |
| Navigation | 14 |
| Content | 6 |
| Marketing | 5 |
| Utility | 8 |
| HOC/Utility | 2 |
| **Total** | **~41** |

## Testing Coverage

| Component | Test File | Status |
|-----------|-----------|--------|
| Anchor | `test/components/Anchor.spec.tsx` | Tested |
| Code | `test/components/Code.spec.tsx` | Tested |
| DocsLayout | `test/components/DocsLayout.spec.tsx` | Tested |
| Label | `test/components/Label.spec.tsx` | Tested |
| Layout | `test/components/Layout.spec.tsx` | Tested |
| Link | `test/components/Link.spec.tsx` | Tested |
| LiveEdit | `test/components/LiveEdit.spec.tsx` | Tested |
| Nav/* | `test/components/NavBar/*.spec.tsx` | Tested |
| NextPage | `test/components/NextPage.spec.tsx` | Tested |
| Note | `test/components/Note.spec.tsx` | Tested |
| Table | `test/components/Table.spec.tsx` | Tested |

## Evidence

- Component files in `components/` directory
- Test files in `test/components/` directory
- MDX component mapping in `utils/mdx-components.tsx`
- Confidence: High
