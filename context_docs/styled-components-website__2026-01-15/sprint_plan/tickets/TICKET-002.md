# TICKET-002: Add Build Step to CI

## Priority
P0 - Critical

## Prerequisites
None

## Description

Add a build verification step to the CI workflow to catch build failures before deployment. Currently, CI only runs tests but doesn't verify that the production build succeeds.

## Acceptance Criteria

- [ ] `yarn build` step added to CI workflow
- [ ] CI fails if build fails
- [ ] Build runs after tests pass
- [ ] CI completes in reasonable time (< 5 minutes)

## Files to Modify

- `.github/workflows/ci.yml`

## Implementation

```yaml
# .github/workflows/ci.yml
name: ci
on: push

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - uses: actions/setup-node@v3
        with:
          cache: yarn
          node-version-file: ".nvmrc"

      - name: Install
        run: yarn install --immutable

      - name: Jest
        run: yarn test

      - name: Build
        run: yarn build
```

## Test Notes

1. Create a test branch
2. Push changes
3. Verify CI runs both test and build steps
4. Verify CI fails if build would fail (test by introducing syntax error)
5. Merge when confirmed working

## Alternative: Separate Jobs

For faster feedback, could split into parallel jobs:

```yaml
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          cache: yarn
          node-version-file: ".nvmrc"
      - run: yarn install --immutable
      - run: yarn test

  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          cache: yarn
          node-version-file: ".nvmrc"
      - run: yarn install --immutable
      - run: yarn build
```

## Estimated Effort
Small (< 1 hour)
