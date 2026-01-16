/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  setupFilesAfterEnv: ['<rootDir>test/setup.ts'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/integration-test/'],
  transform: {
    '^.+\\.[tj]sx?$': ['ts-jest', { tsconfig: { jsx: 'react-jsx' } }],
  },
};
