/** @type {import('jest').Config} */
module.exports = {
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts", "@testing-library/jest-dom"],
  coverageProvider: "v8",
  collectCoverage: true,
  collectCoverageFrom: ["<rootDir>/src/**/*.{ts,tsx}"],
  coverageReporters: ["json-summary", "text", "lcov"],
  moduleNameMapper: {
    ".(css|less|scss)$": "identity-obj-proxy",
  },
};
