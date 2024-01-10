/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  bail: true,
  verbose: true,
  moduleFileExtensions: ["js", "jsx", "json", "ts", "tsx"],
  clearMocks: true,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  roots: [
    "src/lib/test"
  ],
  moduleDirectories: [
    "node_modules",
    "src",
    "src/lib/infra/repositories"
  ],
};