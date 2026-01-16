# TICKET-003: Add ESLint Configuration

## Priority
P1 - High

## Prerequisites
- TICKET-001: Remove @zeit packages
- TICKET-002: Add build to CI

## Description

Add ESLint for static code analysis. Currently, the project only uses Prettier for formatting. ESLint will catch code quality issues, enforce best practices, and enable accessibility linting.

## Acceptance Criteria

- [ ] ESLint installed and configured
- [ ] All existing code passes ESLint
- [ ] ESLint runs in pre-commit hook
- [ ] ESLint step added to CI
- [ ] TypeScript integration working
- [ ] React rules enabled
- [ ] Accessibility rules enabled

## Files to Create/Modify

- `package.json` - Add dependencies and script
- `.eslintrc.js` - ESLint configuration
- `.eslintignore` - Ignore patterns
- `.lintstagedrc.js` - Add ESLint to pre-commit
- `.github/workflows/ci.yml` - Add lint step

## Implementation

### 1. Install Dependencies

```bash
yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-jsx-a11y eslint-config-prettier
```

### 2. Create .eslintrc.js

```javascript
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: 'detect' },
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier', // Must be last
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    'react/react-in-jsx-scope': 'off', // Not needed with Next.js
    'react/prop-types': 'off', // Using TypeScript
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
```

### 3. Create .eslintignore

```
node_modules/
.next/
out/
coverage/
*.d.ts
```

### 4. Update package.json

```json
{
  "scripts": {
    "lint": "eslint . --ext .ts,.tsx,.js,.jsx",
    "lint:fix": "eslint . --ext .ts,.tsx,.js,.jsx --fix"
  }
}
```

### 5. Update lint-staged

```javascript
module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    'jest -c .jest.config.js --findRelatedTests --passWithNoTests',
  ],
};
```

## Test Notes

1. Run `yarn lint` to check all files
2. Fix any errors (may need to adjust rules)
3. Run `yarn lint:fix` to auto-fix issues
4. Make a test commit to verify pre-commit hook
5. Push to verify CI lint step

## Estimated Effort
Medium (2-4 hours including fixing existing issues)
