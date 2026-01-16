module.exports = {
  '**/*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    'jest -c .jest.config.js --findRelatedTests --passWithNoTests',
  ],
};
