/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',                          // Use ts-jest for TypeScript support
  testEnvironment: 'jest-environment-jsdom', // Use jsdom to simulate browser environment
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'], // Setup file for jest-dom matchers
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'], // Recognize these file extensions
  transform: {
    '^.+\\.tsx?$': ['ts-jest', { tsconfig: 'tsconfig.jest.json' }],
  },
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy', // Mock CSS imports
  },
};
