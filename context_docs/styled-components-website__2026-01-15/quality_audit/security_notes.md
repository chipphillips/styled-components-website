# Security Notes

## Overview

As a static documentation website, the security surface is relatively small. However, there are some considerations.

## Security Assessment

### Attack Surface

| Area | Risk Level | Notes |
|------|------------|-------|
| Static Content | Low | MDX compiled at build time |
| Live Code Editor | Medium | User code executed in browser |
| GitHub API | Low | Read-only, public data |
| Algolia Search | Low | External service, query only |
| API Proxy | Low | Limited proxy functionality |

## Identified Considerations

### 1. Live Code Editor

**Component**: `components/LiveEdit.tsx`

**Risk**: User-provided code is executed in the browser.

**Mitigations**:
- react-live-runner sandboxes execution
- Limited scope (only styled-components imports available)
- Client-side only, no server execution
- No network access from sandbox

**Evidence**: `utils/scope.ts` - Limited imports available

### 2. External Content

**Risk**: GitHub releases content rendered as HTML.

**Mitigations**:
- Content from trusted source (GitHub)
- Markdown rendered safely

### 3. Dependencies

**Outdated Packages**:
- `axios@0.24.0` - Check for known vulnerabilities
- Legacy `@zeit/*` packages - Deprecated, potential issues

**Recommendation**: Run `yarn npm audit` regularly

### 4. Environment Variables

**Status**: No sensitive environment variables detected

**Good Practices**:
- No `.env` file committed
- No hardcoded API keys in source
- GitHub token (if used) should be in CI secrets only

### 5. Content Security

**MDX Processing**:
- MDX compiled at build time
- No user-submitted content
- All content from trusted repository

## Security Headers

**Recommendation**: Configure in `vercel.json` or `next.config.mjs`:

```javascript
// next.config.mjs
{
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        ],
      },
    ];
  },
}
```

## Dependency Vulnerability Check

### How to Check

```bash
# Check for known vulnerabilities
yarn npm audit

# Or using npm directly
npm audit --registry=https://registry.npmjs.org
```

### Packages to Monitor

| Package | Reason |
|---------|--------|
| `axios` | HTTP client, common vulnerability target |
| `styled-components` | CSS-in-JS, injection concerns |
| `react-live-runner` | Code execution |
| `@mdx-js/*` | Content processing |

## Secret Management

### Current State
- No secrets in repository
- No `.env.example` file
- API calls use public endpoints

### Best Practices
- Use environment variables for any API keys
- Store secrets in Vercel/CI platform
- Never commit secrets to repository

## Recommendations

### Immediate
1. Run `yarn npm audit` and address findings
2. Update `axios` to latest version
3. Remove deprecated `@zeit/*` packages

### Short-term
1. Add Content-Security-Policy header
2. Configure security headers in Next.js
3. Add dependency scanning to CI

### Long-term
1. Consider Dependabot for automatic updates
2. Add SAST (Static Application Security Testing)
3. Regular security reviews

## Risk Summary

| Category | Risk | Status |
|----------|------|--------|
| XSS | Low | MDX compiled, limited user input |
| Injection | Low | No database, no dynamic queries |
| CSRF | N/A | Static site, no forms |
| Authentication | N/A | No auth required |
| Dependencies | Medium | Some outdated packages |
| Secrets | Low | No secrets detected |

## Evidence

- No `.env` file in repository
- `utils/scope.ts` - Limited live editor scope
- `package.json` - Dependency versions
- No authentication system detected
- Confidence: High
