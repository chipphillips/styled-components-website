# TICKET-010: Upgrade to React 18

## Priority
P2 - Medium

## Prerequisites
- TICKET-009: Remove Enzyme (RTL supports React 18)

## Description

Upgrade from React 17 to React 18 to gain access to new features like concurrent rendering, automatic batching, and better Suspense support.

## Acceptance Criteria

- [ ] React 18 installed
- [ ] ReactDOM 18 installed
- [ ] @types/react and @types/react-dom updated
- [ ] No hydration errors
- [ ] All tests pass
- [ ] All pages render correctly
- [ ] Build succeeds

## Files to Modify

- `package.json` - Update dependencies
- `pages/_app.tsx` - Update if needed
- `tsconfig.json` - Update if needed

## Implementation

### 1. Update Dependencies

```bash
yarn add react@^18 react-dom@^18
yarn add -D @types/react@^18 @types/react-dom@^18
```

### 2. Remove Resolution

Update `package.json`:
```json
{
  "resolutions": {
    // Remove: "@types/react": "^17.0.0"
  }
}
```

### 3. Update _app.tsx (if using class component)

React 18 works with class components, but consider migrating to functional:

```typescript
// Current (class component)
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <ResetStyles />
        <MDXProvider components={components}>
          <Component {...pageProps} />
        </MDXProvider>
      </>
    );
  }
}

// Optional: Migrate to functional
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ResetStyles />
      <MDXProvider components={components}>
        <Component {...pageProps} />
      </MDXProvider>
    </>
  );
}
```

## React 18 Features to Consider

### Automatic Batching
State updates are automatically batched (no changes needed).

### Concurrent Features (Optional)
```typescript
import { useTransition, useDeferredValue } from 'react';

// For non-urgent updates
const [isPending, startTransition] = useTransition();
startTransition(() => {
  setSearchQuery(input);
});
```

### Suspense for Data Fetching (Optional)
```typescript
<Suspense fallback={<Loading />}>
  <DataComponent />
</Suspense>
```

## Potential Issues

### 1. Hydration Mismatches
React 18 is stricter about hydration. Watch for:
- Browser-only code running on server
- Different content between server and client

### 2. StrictMode Changes
React 18 StrictMode runs effects twice in development.

### 3. Third-party Library Compatibility
- styled-components 6.x supports React 18 ✓
- @mdx-js/react supports React 18 ✓
- react-live-runner - verify compatibility

## Test Notes

1. Run `yarn install`
2. Run `yarn build` - check for errors
3. Run `yarn dev` and test:
   - Homepage loads without hydration errors
   - Documentation pages render
   - Live code editor works
   - Navigation works
4. Run `yarn test` - all tests pass
5. Check browser console for React 18 warnings

## Rollback Plan

If critical issues found, revert package.json changes and run `yarn install`.

## Estimated Effort
Medium (4-8 hours including testing and fixes)
