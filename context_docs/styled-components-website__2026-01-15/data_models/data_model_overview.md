# Data Model Overview

## Summary

This is a **static documentation website** - it does not have a traditional database or ORM. Data is primarily:

1. **Static MDX Content** - Documentation written in MDX files
2. **Configuration JSON** - Navigation structure
3. **TypeScript Manifests** - Company/project data
4. **External APIs** - GitHub releases data

## Data Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Data Sources                              │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────────┐  ┌───────────────┐  ┌─────────────────┐  │
│  │   MDX Files  │  │ Configuration │  │   External API  │  │
│  │  (sections/) │  │  (docs.json)  │  │   (GitHub)      │  │
│  └──────────────┘  └───────────────┘  └─────────────────┘  │
├─────────────────────────────────────────────────────────────┤
│                    Static Generation                         │
│  Build Time → HTML/JS → Vercel CDN → End Users              │
└─────────────────────────────────────────────────────────────┘
```

## No Database

| Aspect | Status |
|--------|--------|
| Database | None |
| ORM | None |
| Migrations | N/A |
| Prisma/Drizzle | Not used |
| GraphQL | Not used |
| REST API | Minimal (proxy only) |

## Data Persistence

All content is persisted as:
- Git-tracked MDX files
- JSON configuration files
- TypeScript data files

## Evidence

- No `prisma/` directory
- No database configuration in `package.json`
- No `.env.example` with database URLs
- Static site pattern with Next.js
- Confidence: High
