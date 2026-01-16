# GitHub API Contract

## Overview

The website fetches release information from the GitHub API for the releases page.

## Endpoint

```
GET https://api.github.com/repos/styled-components/styled-components/releases
```

## Response Schema

```typescript
interface GitHubRelease {
  url: string;
  assets_url: string;
  upload_url: string;
  html_url: string;
  id: number;
  author: {
    login: string;
    id: number;
    avatar_url: string;
    // ... other user fields
  };
  node_id: string;
  tag_name: string;      // e.g., "v6.0.0"
  target_commitish: string;
  name: string;          // Release title
  draft: boolean;
  prerelease: boolean;
  created_at: string;    // ISO 8601 datetime
  published_at: string;  // ISO 8601 datetime
  body: string;          // Release notes (Markdown)
  // ... other fields
}
```

## Usage in Codebase

**File**: `utils/githubApi.ts`

```typescript
// Fetches releases from GitHub
async function fetchReleases(): Promise<GitHubRelease[]>

// Gets Atom feed URI for RSS
function getReleasesAtomFeedURI(): string
```

## Consumer

**File**: `pages/releases.tsx`

Displays release history with:
- Version tags
- Release dates
- Release notes (rendered Markdown)
- Links to GitHub

## Authentication

- **Public API**: No authentication required for read operations
- **Rate Limits**: 60 requests/hour for unauthenticated
- **Optional**: Can use `GITHUB_TOKEN` for higher limits

## RSS/Atom Feed

The website also provides an Atom feed for releases:

```
/api/proxy/releases.atom
```

This proxies to:
```
https://github.com/styled-components/styled-components/releases.atom
```

## Error Handling

- API failures show fallback content
- Rate limit errors handled gracefully
- Stale data not cached (fresh fetch each time)

## Evidence

- `utils/githubApi.ts` - API integration
- `pages/releases.tsx` - Consumer page
- `components/DocsLayout.tsx:45` - RSS feed link
- Confidence: High
